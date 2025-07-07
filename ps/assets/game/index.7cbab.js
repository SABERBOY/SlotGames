System.register(
  "chunks:///game.js",
  ["./index-07d345ae.js", "cc"],
  function (exports, module) {
    "use strict";
    var BigWinComponent,
      _applyDecoratedDescriptor,
      _inheritsLoose,
      _initializerDefineProperty,
      _assertThisInitialized,
      _asyncToGenerator,
      _regeneratorRuntime,
      SpineKit,
      node,
      node$1,
      _createClass,
      node$2,
      node$3,
      node$4,
      node$5,
      node$6,
      BaseState,
      CommonState,
      node$7,
      node$8,
      node$9,
      node$a,
      Common_IdleState,
      SlotBottomBarState,
      node$b,
      node$c,
      NearWinEffectComponent,
      ManualComponent,
      Shake,
      AstarteInit,
      node$d,
      TimeBool,
      BigWinAnimName,
      SwitchOffKeyDefine,
      node$e,
      CommonEventName,
      BottomBar_UIName,
      node$f,
      node$g,
      node$h,
      node$i,
      node$j,
      cclegacy,
      Enum,
      _decorator,
      sp,
      Component,
      v3,
      v2,
      macro,
      Sprite,
      Label,
      Node,
      SpriteFrame,
      UITransform,
      Size,
      instantiate,
      Color,
      Prefab,
      tween,
      log,
      Tween,
      Vec2,
      UIOpacity,
      SpriteAtlas,
      Animation,
      sys,
      input,
      Input,
      KeyCode,
      screen,
      view,
      ResolutionPolicy,
      js,
      error;
    return {
      setters: [
        function (e) {
          (BigWinComponent = e.B),
            (_applyDecoratedDescriptor = e._),
            (_inheritsLoose = e.a),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (_asyncToGenerator = e.o),
            (_regeneratorRuntime = e.p),
            (SpineKit = e.v),
            (node = e.n),
            (node$1 = e.l),
            (_createClass = e.d),
            (node$2 = e.g),
            (node$3 = e.h),
            (node$4 = e.j),
            (node$5 = e.r),
            (node$6 = e.e),
            (BaseState = e.w),
            (CommonState = e.k),
            (node$7 = e.i),
            (node$8 = e.x),
            (node$9 = e.y),
            (node$a = e.z),
            (Common_IdleState = e.A),
            (SlotBottomBarState = e.t),
            (node$b = e.D),
            (node$c = e.E),
            (NearWinEffectComponent = e.N),
            (ManualComponent = e.M),
            (Shake = e.F),
            (AstarteInit = e.G),
            (node$d = e.H),
            (TimeBool = e.T),
            (BigWinAnimName = e.I),
            (SwitchOffKeyDefine = e.S),
            (node$e = e.f),
            (CommonEventName = e.C),
            (BottomBar_UIName = e.J),
            (node$f = e.K),
            (node$g = e.L),
            (node$h = e.O),
            (node$i = e.s),
            (node$j = e.P);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (Enum = e.Enum),
            (_decorator = e._decorator),
            (sp = e.sp),
            (Component = e.Component),
            (v3 = e.v3),
            (v2 = e.v2),
            (macro = e.macro),
            (Sprite = e.Sprite),
            (Label = e.Label),
            (Node = e.Node),
            (SpriteFrame = e.SpriteFrame),
            (UITransform = e.UITransform),
            (Size = e.Size),
            (instantiate = e.instantiate),
            (Color = e.Color),
            (Prefab = e.Prefab),
            (tween = e.tween),
            (log = e.log),
            (Tween = e.Tween),
            (Vec2 = e.Vec2),
            (UIOpacity = e.UIOpacity),
            (SpriteAtlas = e.SpriteAtlas),
            (Animation = e.Animation),
            (sys = e.sys),
            (input = e.input),
            (Input = e.Input),
            (KeyCode = e.KeyCode),
            (screen = e.screen),
            (view = e.view),
            (ResolutionPolicy = e.ResolutionPolicy),
            (js = e.js),
            (error = e.error);
        },
      ],
      execute: function () {
        var ZOrder;
        cclegacy._RF.push({}, "eaaacLo7LFAR6XOO5lzGkOH", "Game_Define", void 0),
          (function (e) {
            (e[(e.NORMAL = 0)] = "NORMAL"),
              (e[(e.WILD = 8)] = "WILD"),
              (e[(e.STACK = 9)] = "STACK"),
              (e[(e.STACK_PLAY = 30)] = "STACK_PLAY"),
              (e[(e.STACK_EFFECT = 31)] = "STACK_EFFECT"),
              (e[(e.SCATTER = 50)] = "SCATTER"),
              (e[(e.SUPERSCATTER = 60)] = "SUPERSCATTER"),
              (e[(e.DISK = 70)] = "DISK");
          })(ZOrder || (ZOrder = {}));
        var Game_Define = (function () {
            function e() {}
            return (
              (e.OnExit = function () {
                this.AudioClips = {
                  BGM_MG: null,
                  Play_ready: null,
                  Spin: null,
                  Fiop1: null,
                  Small_win_01: null,
                  Small_win_02: null,
                  Small_win_03: null,
                  Big_win: null,
                  Big_win_end: null,
                  ChangeWin_1: null,
                  ChangeWin_2: null,
                  Combo_f_x2: null,
                  Combo_f_x2_fast: null,
                  Combo_f_x3: null,
                  Combo_f_x3_fast: null,
                  Combo_f_x4: null,
                  Combo_f_x4_fast: null,
                  Party_SP_Stop: null,
                  Party_Match_Win: null,
                  Both_Ways_Win: null,
                  Party_Wild_Win: null,
                  Party_Match_Pop: null,
                  Both_Ways_Pop: null,
                  Party_Wild_Pop: null,
                  Patry_Reel_Stop: null,
                  Patry_Reel_Upgrade: null,
                  Patry_Reel_Spin: null,
                  Patry_Reel_SBG: null,
                  Patry_Reel_SBG_Free: null,
                  BGM_FG: null,
                  Character_Bonus: null,
                  Character_Super_Bonus: null,
                  FG_Declare: null,
                  FG_End: null,
                  Scatter1: null,
                  Scatter2: null,
                  Scatter3: null,
                  Scatter4: null,
                  MG_NearWin: null,
                  Scatter_bell: null,
                  FG_Add: null,
                  Character_BGWin_Start: null,
                  Both_Ways_Frame: null,
                  Both_Ways_Spawn: null,
                  Party_Match_Spawn: null,
                  Party_Wild_Spawn: null,
                  SP_Fly: null,
                  SP_Random: null,
                  Reel_Reel: null,
                };
              }),
              e
            );
          })(),
          GAME_STATE_BASE,
          GAME_STATE_FG,
          GAME_STATE,
          SYMBOL_NO,
          EFFECT_NO,
          _dec,
          _dec2,
          _dec3,
          _class,
          _class2,
          _descriptor,
          _descriptor2;
        (Game_Define.Layer2D = 1 << 25),
          (Game_Define.COL = 6),
          (Game_Define.ROW = 5),
          (Game_Define.STACK_MAX = { MG: 10, FG: 15 }),
          (Game_Define.TimeScale = { Normal: 1, HardStop: 1.3, Remove: 2 }),
          (Game_Define.FALL_OVER_DISTANCE = 0),
          (Game_Define.BOUNCE_DISTANCE = 6),
          (Game_Define.SpinDelay = 0),
          (Game_Define.SpinAutoDelay = 0.3),
          (Game_Define.RadomDelay = 0.3),
          (Game_Define.RadomHardDelay = 0),
          (Game_Define.DELAY_TIME_MG = 0.04),
          (Game_Define.DELAY_TIME_FG = 0.04),
          (Game_Define.DELAY_TIME_LEAVE_MG = 0.02),
          (Game_Define.DELAY_TIME_LEAVE_FG = 0.02),
          (Game_Define.DELAY_TIME_KEEP_FG = 0.02),
          (Game_Define.DELAY_TIME_Fill = 0.04),
          (Game_Define.DELAY_TIME_COL_MG = 0),
          (Game_Define.DELAY_TIME_COL_FG = 0),
          (Game_Define.DELAY_TIME_COL_Fill = 0),
          (Game_Define.DELAY_TIME_COL_LEAVE_MG = 0),
          (Game_Define.DELAY_TIME_COL_LEAVE_FG = 0),
          (Game_Define.DELAY_TIME_COL_KEEP_FG = 0),
          (Game_Define.SYMBOL_MOVE_SLOW_TIME = 1),
          (Game_Define.SYMBOL_MOVE_NEARWIN_TIME = 0.5),
          (Game_Define.SYMBOL_MOVE_TIME = 0.1),
          (Game_Define.SYMBOL_MOVE_LEAVE_TIME = 0.2),
          (Game_Define.SYMBOL_MOVE_KEEP_TIME = 0.2),
          (Game_Define.NEAR_COUNT = 2),
          (Game_Define.SpMoveSpeed = 0.4),
          (Game_Define.SmallWinRate1 = 0),
          (Game_Define.SmallWinRate2 = 2),
          (Game_Define.SmallWinRate3 = 4),
          (Game_Define.SmallWinRate4 = 6),
          (Game_Define.SmallWinWait0 = 1),
          (Game_Define.SmallWinWait1 = 1),
          (Game_Define.SmallWinWait2 = 1),
          (Game_Define.SmallWinWait3 = 1),
          (Game_Define.SmallWinWait4 = 1),
          (Game_Define.SmallWinFadeIn = 0.2),
          (Game_Define.SmallWinFadeOut = 0.05),
          (Game_Define.SmallWinDigitScore = 1e3),
          (Game_Define.IsProto = !1),
          (Game_Define.GameType = "ps"),
          (Game_Define.Ver = "44"),
          (Game_Define.SpinClickEvent = 0),
          (Game_Define.IsAutoShowFeatures = !1),
          (Game_Define.IsBottombarFinished = !1),
          (Game_Define.IsLogin = !1),
          (Game_Define.IsInFG = !1),
          (Game_Define.IsInFGFx = !1),
          (Game_Define.IsGetGameInfo = !1),
          (Game_Define.IsCheckChips = !1),
          (Game_Define.IsFGFirstSpin = !1),
          (Game_Define.IsInSBG = !1),
          (Game_Define.UsingItemReason = 0),
          (Game_Define.IsShowItemEnd = !1),
          (Game_Define.RoundIdx = 0),
          (Game_Define.PlateIdx = 0),
          (Game_Define.TotalWin = 0),
          (Game_Define.FgRound = 0),
          (Game_Define.SymbolSize = 105),
          (Game_Define.SymbolAdd = 45),
          (Game_Define.SymbolEnterAdd = 575),
          (Game_Define.SERVER_RET_TYPE = {
            SERVER_SUCCESS: 0,
            SERVER_ERROR_SEATE: 799,
            SERVER_NOUSE: 899,
            SERVER_MAINTAIN: 231,
            SERVER_SHUTDOWN: 232,
            SERVER_NEED_UID: 233,
            SERVER_NEED_LOGIN: 234,
            SERVER_TOKEN_ERROR: 235,
          }),
          (Game_Define.AckType = {
            login: 0,
            exchangeChips: 2,
            info: 11,
            spin: 12,
            buyBonus: 36,
            heartBeat: 98,
            serverMsg: 99,
          }),
          (Game_Define.LOGIN_RESULT_TYPE = {
            LOGIN_SUCCESS: 0,
            LOGIN_FAIL: 1,
            API_VERIFY_FAIL: 235,
            API_LOGIN_REPEAT_FAIL: 2002,
          }),
          (Game_Define.StringKey = {
            BONUS_GAME_TXT: "BONUS_GAME_TXT",
            FEATURE_LEFT: "FEATURE_LEFT",
            FEATURE_RIGHT: "FEATURE_RIGHT",
          }),
          (Game_Define.HEART_BEAT_STATE = {
            NOTIFY: 97,
            MAINTAIN: 98,
            CLOSE: 99,
          }),
          (Game_Define.SPIN_ACK_TYPE = {
            AT_SUCCESS: 0,
            AT_MONEY_NOT_ENOUGH: 302,
            AT_MONEY_ABNORMAL: 301,
            AT_MONEY_NOT_ENOUGH_SINGLE: 305,
          }),
          (Game_Define.USE_ITEM_REASON = { NORMAL: 0, USING: 1 }),
          (Game_Define.AWARD_SETTING = [
            { BetRate: 6, Lvl: BigWinComponent.Level.BIG },
            { BetRate: 15, Lvl: BigWinComponent.Level.MEGA },
            { BetRate: 30, Lvl: BigWinComponent.Level.SUPER },
          ]),
          (Game_Define.IsShowFreeSpinEnd = !1),
          (Game_Define.ShowDisplayValue = null),
          (Game_Define.AudioPathPre = "Sound/"),
          (Game_Define.AudioClips = {
            BGM_MG: null,
            Play_ready: null,
            Spin: null,
            Fiop1: null,
            Small_win_01: null,
            Small_win_02: null,
            Small_win_03: null,
            Big_win: null,
            Big_win_end: null,
            ChangeWin_1: null,
            ChangeWin_2: null,
            Combo_f_x2: null,
            Combo_f_x2_fast: null,
            Combo_f_x3: null,
            Combo_f_x3_fast: null,
            Combo_f_x4: null,
            Combo_f_x4_fast: null,
            Party_SP_Stop: null,
            Party_Match_Win: null,
            Both_Ways_Win: null,
            Party_Wild_Win: null,
            Party_Match_Pop: null,
            Both_Ways_Pop: null,
            Party_Wild_Pop: null,
            Patry_Reel_Stop: null,
            Patry_Reel_Upgrade: null,
            Patry_Reel_Spin: null,
            Patry_Reel_SBG: null,
            Patry_Reel_SBG_Free: null,
            BGM_FG: null,
            Character_Bonus: null,
            Character_Super_Bonus: null,
            FG_Declare: null,
            FG_End: null,
            Scatter1: null,
            Scatter2: null,
            Scatter3: null,
            Scatter4: null,
            MG_NearWin: null,
            Scatter_bell: null,
            FG_Add: null,
            Character_BGWin_Start: null,
            Both_Ways_Frame: null,
            Both_Ways_Spawn: null,
            Party_Match_Spawn: null,
            Party_Wild_Spawn: null,
            SP_Fly: null,
            SP_Random: null,
            Reel_Reel: null,
          }),
          (Game_Define.ZOrder = Enum(ZOrder)),
          (Game_Define.AnimEventName = {
            AnimEvetFunc: "AnimationEvent",
            Change: "Change",
            Start: "Sound1",
            End: "Sound2",
            RollEnd: "RollEnd",
            ComboEnd: "End",
          }),
          (Game_Define.EffectAniName = {
            WIN: "Win",
            REMOVE: "Remove",
            IDLE: "Idle",
            NEAR_WIN: "NearWin",
            STOP: "Stop",
            FX_DJ: "FX_DJ",
            FX_SP: "FX_SP",
            FX_DEBUT: "FX_Debut",
            FX_DEBUT_2: "FX_Debut_2",
            FX_DEBUT_3: "FX_Debut_3",
            SBG_FREE: "SBG_Free",
          }),
          (Game_Define.Symbol_SkinName = {
            DEFAULT: "default",
            CD_SYMBOL_: "CD_Symbol_",
          }),
          (Game_Define.Symbol_AniName = {
            DEFAULT: "default",
            Stop_: "Stop_",
            IDLE_: "Idle_",
            WIN_: "Win_",
            UPGRADE_: "Upgrade_",
            UPGRADE: "Upgrade",
            UPGRADE_GOLD: "Upgrade_Gold",
            BG_FREE_: "BG_Free_",
            SPIN: "Spin",
            SPIN_GOLD: "Spin_Gold",
            SPIN_2: "Spin_2",
          }),
          (Game_Define.AWARD_TYPE_FLAG = {
            AWARD_TYPE_NON: 0,
            AWARD_TYPE_COMBO: 1,
            AWARD_TYPE_GETFREE: 2,
            AWARD_TYPE_INFREE: 4,
            AWARD_TYPE_LEAVEFREE: 8,
            AWARD_TYPE_GETSFREE: 16,
            AWARD_TYPE_INSFREE: 32,
            AWARD_TYPE_LEAVESFREE: 64,
          }),
          (function (e) {
            (e[(e.AWARD = 0)] = "AWARD"),
              (e[(e.ROUND_SHOW_END = 1)] = "ROUND_SHOW_END"),
              (e[(e.ROUND_END = 2)] = "ROUND_END"),
              (e[(e.FEATURE_SHOW = 3)] = "FEATURE_SHOW"),
              (e[(e.PLATE_SHOW = 4)] = "PLATE_SHOW"),
              (e[(e.WAIT_READY = 5)] = "WAIT_READY"),
              (e[(e.UNSHOW_PREPARE = 6)] = "UNSHOW_PREPARE");
          })(GAME_STATE_BASE || (GAME_STATE_BASE = {})),
          (function (e) {
            (e[(e.ENTER_FREE = 7)] = "ENTER_FREE"),
              (e[(e.LEAVE_FREE = 8)] = "LEAVE_FREE"),
              (e[(e.ADD_FREE = 9)] = "ADD_FREE");
          })(GAME_STATE_FG || (GAME_STATE_FG = {})),
          (function (e) {
            (e[(e.EXPLODE = 10)] = "EXPLODE"),
              (e[(e.SEND_FREE_STACK = 11)] = "SEND_FREE_STACK"),
              (e[(e.FIRST_PLATE = 12)] = "FIRST_PLATE"),
              (e[(e.MATCHING_PATCH_UP = 13)] = "MATCHING_PATCH_UP"),
              (e[(e.CHECK_SCATTER = 14)] = "CHECK_SCATTER"),
              (e[(e.TRIGGER_MYSTERY = 15)] = "TRIGGER_MYSTERY"),
              (e[(e.BACK_TO_MYSTERY = 16)] = "BACK_TO_MYSTERY");
          })(GAME_STATE || (GAME_STATE = {})),
          (function (e) {
            (e[(e.SYMBOL_00 = 0)] = "SYMBOL_00"),
              (e[(e.SYMBOL_01 = 1)] = "SYMBOL_01"),
              (e[(e.SYMBOL_02 = 2)] = "SYMBOL_02"),
              (e[(e.SYMBOL_03 = 3)] = "SYMBOL_03"),
              (e[(e.SYMBOL_04 = 4)] = "SYMBOL_04"),
              (e[(e.SYMBOL_05 = 5)] = "SYMBOL_05"),
              (e[(e.SYMBOL_06 = 6)] = "SYMBOL_06"),
              (e[(e.SYMBOL_07 = 7)] = "SYMBOL_07"),
              (e[(e.SYMBOL_08 = 8)] = "SYMBOL_08"),
              (e[(e.SYMBOL_09 = 9)] = "SYMBOL_09"),
              (e[(e.SYMBOL_10 = 10)] = "SYMBOL_10"),
              (e[(e.SYMBOL_11 = 11)] = "SYMBOL_11"),
              (e[(e.SYMBOL_12 = 12)] = "SYMBOL_12"),
              (e[(e.SYMBOL_13 = 13)] = "SYMBOL_13"),
              (e[(e.SYMBOL_14 = 14)] = "SYMBOL_14"),
              (e[(e.SYMBOL_15 = 15)] = "SYMBOL_15"),
              (e[(e.SYMBOL_16 = 16)] = "SYMBOL_16"),
              (e[(e.SYMBOL_17 = 17)] = "SYMBOL_17"),
              (e[(e.SYMBOL_18 = 18)] = "SYMBOL_18"),
              (e[(e.SYMBOL_FX = 19)] = "SYMBOL_FX"),
              (e[(e.SYMBOL_FXDJ = 20)] = "SYMBOL_FXDJ"),
              (e[(e.SYMBOL_FXDJSBG = 21)] = "SYMBOL_FXDJSBG"),
              (e[(e.FX_DISK = 22)] = "FX_DISK");
          })(SYMBOL_NO || (SYMBOL_NO = {})),
          (function (e) {
            (e[(e.SYMBOL_00 = 0)] = "SYMBOL_00"),
              (e[(e.SYMBOL_01 = 1)] = "SYMBOL_01"),
              (e[(e.SYMBOL_02 = 2)] = "SYMBOL_02"),
              (e[(e.SYMBOL_03 = 3)] = "SYMBOL_03"),
              (e[(e.SYMBOL_04 = 4)] = "SYMBOL_04"),
              (e[(e.SYMBOL_05 = 5)] = "SYMBOL_05"),
              (e[(e.SYMBOL_06 = 6)] = "SYMBOL_06"),
              (e[(e.SYMBOL_07 = 7)] = "SYMBOL_07"),
              (e[(e.SYMBOL_08 = 8)] = "SYMBOL_08"),
              (e[(e.SYMBOL_09 = 9)] = "SYMBOL_09"),
              (e[(e.SYMBOL_10 = 10)] = "SYMBOL_10"),
              (e[(e.SYMBOL_11 = 11)] = "SYMBOL_11"),
              (e[(e.SYMBOL_12 = 12)] = "SYMBOL_12"),
              (e[(e.SYMBOL_13 = 13)] = "SYMBOL_13"),
              (e[(e.SYMBOL_14 = 14)] = "SYMBOL_14"),
              (e[(e.SYMBOL_15 = 15)] = "SYMBOL_15"),
              (e[(e.SYMBOL_16 = 16)] = "SYMBOL_16"),
              (e[(e.SYMBOL_17 = 17)] = "SYMBOL_17"),
              (e[(e.SYMBOL_18 = 18)] = "SYMBOL_18"),
              (e[(e.SYMBOL_FX = 19)] = "SYMBOL_FX"),
              (e[(e.SYMBOL_FXDJ = 20)] = "SYMBOL_FXDJ"),
              (e[(e.SYMBOL_FXDJSBG = 21)] = "SYMBOL_FXDJSBG"),
              (e[(e.FX_DISK = 22)] = "FX_DISK");
          })(EFFECT_NO || (EFFECT_NO = {})),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b39c5N73BtFB6bXD++LJdAW",
            "CharacterSpine",
            void 0
          );
        var ccclass = _decorator.ccclass,
          property = _decorator.property,
          Skin_NAME,
          ANIMATION_NAME;
        !(function (e) {
          (e.DEFAULT = "default"),
            (e.SKIN_BG_IDLE = "Skin_BG_Idle"),
            (e.SKIN_BG_SP = "Skin_BG_SP"),
            (e.SKIN_BG_WIN = "Skin_BG_Win"),
            (e.SKIN_MG = "Skin_MG");
        })(Skin_NAME || (Skin_NAME = {})),
          (function (e) {
            (e.NONE = "none"),
              (e.BGWIN_END = "BGWin_End"),
              (e.BGWIN_LOOP = "BGWin_Loop"),
              (e.BGWIN_START = "BGWin_Start"),
              (e.BG_IDLE = "BG_Idle"),
              (e.SP_START = "SP_Start"),
              (e.SP_LOOP = "SP_Loop"),
              (e.SP_END = "SP_End"),
              (e.BG_WIN = "BG_Win"),
              (e.BigWIN_END = "BigWin_End"),
              (e.BigWIN_LOOP = "BigWin_Loop"),
              (e.BigWIN_START = "BigWin_Start"),
              (e.NEARWIN = "NearWin"),
              (e.SBG_IDLE = "SBG_Idle"),
              (e.SBG_WIN = "SBG_Win"),
              (e.START_PARTY_WILD = "Start_PartyWild"),
              (e.START_PARTY_MATCH = "Start_PartyMatch"),
              (e.START_BOTH_WAY = "Start_BothWay");
          })(ANIMATION_NAME || (ANIMATION_NAME = {}));
        var CharacterSpine =
            ((_dec = ccclass("CharacterSpine")),
            (_dec2 = property({ type: sp.Skeleton, tooltip: "直角色" })),
            (_dec3 = property({ type: sp.Skeleton, tooltip: "效果" })),
            _dec(
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
                      "m_scharacter",
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxSpeciaF",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_playName = ANIMATION_NAME.NONE),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.start = function () {
                    this.m_scharacter.setMix(
                      ANIMATION_NAME.SP_LOOP,
                      ANIMATION_NAME.SP_END,
                      0.15
                    );
                  }),
                  (n.ShowFxSpecial = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_fxSpeciaF.node.active = !0),
                                    (i = ""),
                                    (e.t0 = t),
                                    (e.next =
                                      1 === e.t0
                                        ? 5
                                        : 2 === e.t0
                                        ? 7
                                        : 3 === e.t0
                                        ? 9
                                        : 11);
                                  break;
                                case 5:
                                  return (
                                    (i = ANIMATION_NAME.START_PARTY_WILD),
                                    e.abrupt("break", 12)
                                  );
                                case 7:
                                  return (
                                    (i = ANIMATION_NAME.START_PARTY_MATCH),
                                    e.abrupt("break", 12)
                                  );
                                case 9:
                                  return (
                                    (i = ANIMATION_NAME.START_BOTH_WAY),
                                    e.abrupt("break", 12)
                                  );
                                case 11:
                                  return e.abrupt("break", 12);
                                case 12:
                                  return (
                                    (e.next = 14),
                                    SpineKit.PlayAnimation(
                                      this.m_fxSpeciaF,
                                      i,
                                      !0,
                                      0,
                                      n
                                    )
                                  );
                                case 14:
                                  this.m_fxSpeciaF.node.active = !1;
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
                  (n.SetSkin = function () {
                    Game_Define.IsInFG
                      ? this.m_scharacter.setSkin(Skin_NAME.SKIN_BG_IDLE)
                      : this.m_scharacter.setSkin(Skin_NAME.SKIN_MG);
                  }),
                  (n.ShowIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    this.m_playName != ANIMATION_NAME.BG_IDLE
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  (Game_Define.IsInFG &&
                                    Game_Define.IsInSBG &&
                                    Game_Define.IsInFGFx) ||
                                  (Game_Define.IsInFG &&
                                    !Game_Define.IsInSBG &&
                                    Game_Define.IsInFGFx)
                                    ? this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_BG_IDLE
                                      )
                                    : this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_MG
                                      ),
                                    this.SetAnimation(ANIMATION_NAME.BG_IDLE);
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
                  (n.ShowSBGIdle = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    this.m_playName != ANIMATION_NAME.SBG_IDLE
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  this.SetAnimation(ANIMATION_NAME.SBG_IDLE);
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
                  (n.ShowNearWinStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  Game_Define.IsInFG
                                    ? this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_BG_WIN
                                      )
                                    : this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_MG
                                      ),
                                    this.SetAnimation(
                                      ANIMATION_NAME.NEARWIN,
                                      !0
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
                  (n.ShowNearWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.ShowIdle();
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
                  (n.ShowBgWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t = ANIMATION_NAME.BG_WIN),
                                    Game_Define.IsInFG
                                      ? (this.m_scharacter.setSkin(
                                          Skin_NAME.SKIN_BG_WIN
                                        ),
                                        Game_Define.IsInSBG &&
                                          (t = ANIMATION_NAME.SBG_WIN))
                                      : this.m_scharacter.setSkin(
                                          Skin_NAME.SKIN_MG
                                        ),
                                    this.SetAnimation(t);
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
                  (n.ShowSpStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  Game_Define.IsInFG
                                    ? this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_BG_SP
                                      )
                                    : this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_MG
                                      ),
                                    this.SetAnimation(ANIMATION_NAME.SP_START);
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
                  (n.ShowSpEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.SetAnimation(ANIMATION_NAME.SP_END)
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
                  (n.ShowBigWinStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  Game_Define.IsInFG
                                    ? this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_BG_WIN
                                      )
                                    : this.m_scharacter.setSkin(
                                        Skin_NAME.SKIN_MG
                                      ),
                                    this.SetAnimation(
                                      ANIMATION_NAME.BigWIN_START
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
                  (n.ShowBigWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.SetAnimation(ANIMATION_NAME.BigWIN_END)
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
                  (n.ShowMgBonusStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_scharacter.setSkin(Skin_NAME.SKIN_MG),
                                    this.SetAnimation(
                                      ANIMATION_NAME.BGWIN_START
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
                  (n.ShowFgBonusStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_scharacter.setSkin(
                                    Skin_NAME.SKIN_BG_SP
                                  ),
                                    this.SetAnimation(
                                      ANIMATION_NAME.BGWIN_START
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
                  (n.ShowBonusEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.SetAnimation(ANIMATION_NAME.BGWIN_END);
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
                  (n.ShowFgBonusEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_scharacter.setSkin(
                                    Skin_NAME.SKIN_BG_SP
                                  ),
                                    this.SetAnimation(ANIMATION_NAME.BGWIN_END);
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
                  (n.SetAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    void 0 === i && (i = null),
                                    (this.m_playName = t),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_scharacter,
                                      t,
                                      n,
                                      0,
                                      i
                                    )
                                  );
                                case 5:
                                  if (!e.sent) {
                                    e.next = 8;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 8:
                                  this.Complete(t);
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.Complete = function (e) {
                    switch (e) {
                      case ANIMATION_NAME.BG_IDLE:
                      case ANIMATION_NAME.BG_WIN:
                      case ANIMATION_NAME.SBG_WIN:
                      case ANIMATION_NAME.SP_END:
                      case ANIMATION_NAME.SBG_IDLE:
                      case ANIMATION_NAME.BGWIN_END:
                      case ANIMATION_NAME.BigWIN_END:
                        Game_Define.IsInFG &&
                        Game_Define.IsInSBG &&
                        Game_Define.IsInFGFx
                          ? (this.m_scharacter.setSkin(Skin_NAME.SKIN_BG_IDLE),
                            this.SetAnimation(ANIMATION_NAME.SBG_IDLE))
                          : Game_Define.IsInFG &&
                            !Game_Define.IsInSBG &&
                            Game_Define.IsInFGFx
                          ? (this.m_scharacter.setSkin(Skin_NAME.SKIN_BG_IDLE),
                            this.SetAnimation(ANIMATION_NAME.BG_IDLE))
                          : (this.m_scharacter.setSkin(Skin_NAME.SKIN_MG),
                            this.SetAnimation(ANIMATION_NAME.BG_IDLE));
                        break;
                      case ANIMATION_NAME.SP_START:
                        this.SetAnimation(ANIMATION_NAME.SP_LOOP, !0);
                        break;
                      case ANIMATION_NAME.BigWIN_START:
                        this.SetAnimation(ANIMATION_NAME.BigWIN_LOOP, !0);
                        break;
                      case ANIMATION_NAME.BGWIN_START:
                        this.SetAnimation(ANIMATION_NAME.BGWIN_LOOP, !0);
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_scharacter",
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
                "m_fxSpeciaF",
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
              (_class = _class2))
            ) || _class),
          CommonEffect,
          _dec$1,
          _dec2$1,
          _dec3$1,
          _dec4,
          _dec5,
          _dec6,
          _dec7,
          _dec8,
          _class$1,
          _class2$1,
          _descriptor$1,
          _descriptor2$1,
          _descriptor3,
          _descriptor4,
          _descriptor5,
          _descriptor6,
          _descriptor7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "eebf5PxdlhENYFaDt3Qk8kD",
            "CommonEffect",
            void 0
          ),
          (function (e) {
            var t = (function () {
              function e() {}
              return (
                (e.PascalTriangleLine = function (e) {
                  for (var t = [1], n = 1; n < e; n++)
                    t[n] = (t[n - 1] * (e - n)) / n;
                  return t;
                }),
                (e.RangedRandom = function (e, t) {
                  return (t - e) * Math.random() + e;
                }),
                (e.GetRandomRectPos = function (e, t, n) {
                  var i = v2(
                    (this.RangedRandom(-t.x, t.x) / 2) | 0,
                    (this.RangedRandom(-t.x, t.x) / 2) | 0
                  ).rotate(n * macro.RAD);
                  return e.add(i);
                }),
                (e.GetRandomOvalPos = function (e, t, n) {
                  var i = t.y / Math.max(1, t.x),
                    o = Math.random() * t.x * 0.5,
                    r = Math.random() * Math.PI * 2,
                    a = v2(o * Math.cos(r), o * Math.sin(r) * i).rotate(
                      n * macro.RAD
                    );
                  return e.add(a);
                }),
                (e.ZoomAndFlip = function (e, t, n, i) {
                  var o = Math.sin(i * Math.PI) * (t - e) + e,
                    r = Math.cos(i * Math.PI * n);
                  return v2(o * r, o);
                }),
                e
              );
            })();
            e.ExtendsMath = t;
            var n = (function () {
              function e(e) {
                switch (
                  ((this.pts = null),
                  (this.len = 0),
                  (this.ptl = null),
                  (this.bez = null),
                  (this.len = e.length),
                  0 == this.len
                    ? (e.push(v3(0, 0)), e.push(v3(0, 0)))
                    : 1 == this.len && e.push(v3(e[0].x, e[0].y)),
                  (this.pts = e),
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
                    (this.ptl = t.PascalTriangleLine(this.len)),
                      (this.bez = this.BezierN);
                }
              }
              var n = e.prototype;
              return (
                (n.GetPosition = function (e) {
                  return this.bez.apply(this, [e]);
                }),
                (n.Bezier2 = function (e) {
                  var t = 1 - e;
                  return v3(
                    t * this.pts[0].x + e * this.pts[1].x,
                    t * this.pts[0].y + e * this.pts[1].y
                  );
                }),
                (n.Bezier3 = function (e) {
                  var t = 1 - e,
                    n = [t * t, 2 * t * e, e * e];
                  return v3(
                    n[0] * this.pts[0].x +
                      n[1] * this.pts[1].x +
                      n[2] * this.pts[2].x,
                    n[0] * this.pts[0].y +
                      n[1] * this.pts[1].y +
                      n[2] * this.pts[2].y
                  );
                }),
                (n.Bezier4 = function (e) {
                  var t = 1 - e,
                    n = [t * t * t, 3 * t * t * e, 3 * t * e * e, e * e * e];
                  return v3(
                    n[0] * this.pts[0].x +
                      n[1] * this.pts[1].x +
                      n[2] * this.pts[2].x +
                      n[3] * this.pts[3].x,
                    n[0] * this.pts[0].y +
                      n[1] * this.pts[1].y +
                      n[2] * this.pts[2].y +
                      n[3] * this.pts[3].y
                  );
                }),
                (n.Bezier5 = function (e) {
                  var t = 1 - e,
                    n = [
                      t * t * t * t,
                      4 * t * t * t * e,
                      6 * t * t * e * e,
                      4 * t * e * e * e,
                      e * e * e * e,
                    ];
                  return v3(
                    n[0] * this.pts[0].x +
                      n[1] * this.pts[1].x +
                      n[2] * this.pts[2].x +
                      n[3] * this.pts[3].x +
                      n[4] * this.pts[4].x,
                    n[0] * this.pts[0].y +
                      n[1] * this.pts[1].y +
                      n[2] * this.pts[2].y +
                      n[3] * this.pts[3].y +
                      n[4] * this.pts[4].y
                  );
                }),
                (n.Bezier6 = function (e) {
                  var t = 1 - e,
                    n = [
                      t * t * t * t * t,
                      5 * t * t * t * t * e,
                      10 * t * t * t * e * e,
                      10 * t * t * e * e * e,
                      5 * t * e * e * e * e,
                      e * e * e * e * e,
                    ];
                  return v3(
                    n[0] * this.pts[0].x +
                      n[1] * this.pts[1].x +
                      n[2] * this.pts[2].x +
                      n[3] * this.pts[3].x +
                      n[4] * this.pts[4].x +
                      n[5] * this.pts[5].x,
                    n[0] * this.pts[0].y +
                      n[1] * this.pts[1].y +
                      n[2] * this.pts[2].y +
                      n[3] * this.pts[3].y +
                      n[4] * this.pts[4].y +
                      n[5] * this.pts[5].y
                  );
                }),
                (n.BezierN = function (e) {
                  for (var t = 1 - e, n = v3(0, 0), i = 0; i < this.len; i++) {
                    for (var o = 1, r = 0; r < this.len - i - 1; r++) o *= t;
                    for (var a = 0; a < i; a++) o *= e;
                    (n.x += o * this.ptl[i] * this.pts[i].x),
                      (n.y += o * this.ptl[i] * this.pts[i].y);
                  }
                  return n;
                }),
                e
              );
            })();
            e.Bezier = n;
          })(CommonEffect || (CommonEffect = {})),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "10d47KcaLNJn5BmsLxg+xqm",
            "DataStructure",
            void 0
          ),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "42676GCXzhMi6Ztk997SCAV",
            "DeclareSpine",
            void 0
          );
        var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property,
          ANIMATION_NAME$1,
          ANIMATION_TITLE;
        !(function (e) {
          (e.NONE = "none"),
            (e.START = "Start"),
            (e.LOOP = "Loop"),
            (e.END = "End"),
            (e.MORE_SPINS = "MoreSpins");
        })(ANIMATION_NAME$1 || (ANIMATION_NAME$1 = {})),
          (function (e) {
            (e.NONE = "none"), (e.BG = "BG_"), (e.SBG = "SBG_");
          })(ANIMATION_TITLE || (ANIMATION_TITLE = {}));
        var DeclareSpine =
            ((_dec$1 = ccclass$1("DeclareSpine")),
            (_dec2$1 = property$1({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec3$1 = property$1({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec4 = property$1({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec5 = property$1({ type: Sprite, tooltip: "FreeGame" })),
            (_dec6 = property$1({ type: Sprite, tooltip: "FreeSpin" })),
            (_dec7 = property$1({ type: Sprite, tooltip: "SFreeSpin" })),
            (_dec8 = property$1({ type: Label, tooltip: "局數" })),
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
                      "m_roundFgSpine",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_tranBgSpine",
                      _descriptor2$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_tranSBgSpine",
                      _descriptor3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_freeGametSprite",
                      _descriptor4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_freeSpinSprite",
                      _descriptor5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_sfreeSpinSprite",
                      _descriptor6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundLabel",
                      _descriptor7,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.ShowStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = node.GetGameAtlas()),
                                    (this.m_freeGametSprite.spriteFrame =
                                      n.getSpriteFrame("TXT_BG_Declare_02")),
                                    (this.m_freeSpinSprite.spriteFrame =
                                      n.getSpriteFrame("TXT_BG_Declare_03")),
                                    (this.m_sfreeSpinSprite.spriteFrame =
                                      n.getSpriteFrame("TXT_BG_Declare_04")),
                                    (this.node.active = !0),
                                    (this.m_tranBgSpine.node.active = !1),
                                    (this.m_tranSBgSpine.node.active = !1),
                                    (this.m_roundLabel.string = t.toString()),
                                    (i = ANIMATION_TITLE.BG),
                                    Game_Define.IsInSBG
                                      ? ((i = ANIMATION_TITLE.SBG),
                                        (o = this.m_tranSBgSpine))
                                      : (o = this.m_tranBgSpine),
                                    (r = i + ANIMATION_NAME$1.START),
                                    (a = i + ANIMATION_NAME$1.LOOP),
                                    (s = i + ANIMATION_NAME$1.END),
                                    (this.m_roundFgSpine.node.active = !0),
                                    (e.next = 16),
                                    SpineKit.PlayAnimation(
                                      this.m_roundFgSpine,
                                      r
                                    )
                                  );
                                case 16:
                                  return (
                                    (e.next = 18),
                                    SpineKit.PlayAnimation(
                                      this.m_roundFgSpine,
                                      a
                                    )
                                  );
                                case 18:
                                  return (
                                    (e.next = 20),
                                    SpineKit.PlayAnimation(
                                      this.m_roundFgSpine,
                                      s
                                    )
                                  );
                                case 20:
                                  (this.m_roundFgSpine.node.active = !1),
                                    (o.node.active = !0),
                                    SpineKit.PlayAnimation(
                                      o,
                                      i + ANIMATION_NAME$1.END
                                    ).then(function () {
                                      o.node.active = !1;
                                    });
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = t + ANIMATION_NAME$1.END),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_roundFgSpine,
                                      n
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
                  (n.ShowMoreSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (n = ANIMATION_TITLE.BG),
                                    Game_Define.IsInSBG &&
                                      (n = ANIMATION_TITLE.SBG),
                                    (i = n + ANIMATION_NAME$1.MORE_SPINS),
                                    (this.m_roundLabel.string = t.toString()),
                                    (this.m_roundFgSpine.node.active = !0),
                                    (e.next = 8),
                                    SpineKit.PlayAnimation(
                                      this.m_roundFgSpine,
                                      i
                                    ).then(function () {
                                      o.m_roundFgSpine.node.active = !1;
                                    })
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowTransSbgEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), t();
                              case 2:
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
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_roundFgSpine",
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
                "m_tranBgSpine",
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
              (_descriptor3 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_tranSBgSpine",
                [_dec4],
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
                _class2$1.prototype,
                "m_freeGametSprite",
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
              (_descriptor5 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_freeSpinSprite",
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
              (_descriptor6 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_sfreeSpinSprite",
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
                "m_roundLabel",
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
              (_class$1 = _class2$1))
            ) || _class$1),
          _dec$2,
          _dec2$2,
          _class$2,
          _class2$2,
          _descriptor$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "7b9dc8lmOdDCbuYulg3oK8S", "DjDeclare", void 0);
        var ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property,
          ANIMATION_NAME$2;
        !(function (e) {
          (e.NONE = "none"),
            (e.START = "Start"),
            (e.LOOP = "Loop"),
            (e.END = "End");
        })(ANIMATION_NAME$2 || (ANIMATION_NAME$2 = {}));
        var DjDeclare =
            ((_dec$2 = ccclass$2("DjDeclare")),
            (_dec2$2 = property$2({ type: sp.Skeleton, tooltip: "djSpine" })),
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
                      "m_djSkeleton",
                      _descriptor$2,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.ShowDj = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    node$1.Play(
                                      Game_Define.AudioClips.Patry_Reel_SBG
                                    ),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(
                                      this.m_djSkeleton,
                                      ANIMATION_NAME$2.START
                                    )
                                  );
                                case 4:
                                  return (
                                    (e.next = 6),
                                    SpineKit.PlayAnimation(
                                      this.m_djSkeleton,
                                      ANIMATION_NAME$2.LOOP
                                    )
                                  );
                                case 6:
                                  return (
                                    (e.next = 8),
                                    SpineKit.PlayAnimation(
                                      this.m_djSkeleton,
                                      ANIMATION_NAME$2.LOOP
                                    )
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    SpineKit.PlayAnimation(
                                      this.m_djSkeleton,
                                      ANIMATION_NAME$2.LOOP
                                    )
                                  );
                                case 10:
                                  return (
                                    (e.next = 12),
                                    new Promise(
                                      _asyncToGenerator(
                                        _regeneratorRuntime().mark(function e(
                                          n
                                        ) {
                                          return _regeneratorRuntime().wrap(
                                            function (e) {
                                              for (;;)
                                                switch ((e.prev = e.next)) {
                                                  case 0:
                                                    return (
                                                      (e.next = 2),
                                                      SpineKit.PlayAnimation(
                                                        t.m_djSkeleton,
                                                        ANIMATION_NAME$2.END,
                                                        !1,
                                                        0,
                                                        n
                                                      )
                                                    );
                                                  case 2:
                                                    t.node.active = !1;
                                                  case 3:
                                                  case "end":
                                                    return e.stop();
                                                }
                                            },
                                            e
                                          );
                                        })
                                      )
                                    )
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
                  t
                );
              })(Component)),
              (_descriptor$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_djSkeleton",
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
              (_class$2 = _class2$2))
            ) || _class$2),
          _dec$3,
          _dec2$3,
          _dec3$2,
          _dec4$1,
          _dec5$1,
          _class$3,
          _class2$3,
          _descriptor$3,
          _descriptor2$2,
          _descriptor3$1,
          _descriptor4$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2b9c3b6FatEpaK+nWyT7Y0m",
            "SymbolReel",
            void 0
          );
        var ccclass$3 = _decorator.ccclass,
          property$3 = _decorator.property,
          RowSetting = [2],
          SymbolReel =
            ((_dec$3 = ccclass$3("SymbolReel")),
            (_dec2$3 = property$3({ type: Node, tooltip: "btn" })),
            (_dec3$2 = property$3({ type: Node, tooltip: "btn" })),
            (_dec4$1 = property$3({ type: Node, tooltip: "每行節點" })),
            (_dec5$1 = property$3({
              type: SpriteFrame,
              tooltip: "symbol的SpriteFrame",
            })),
            _dec$3(
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
                      "btn",
                      _descriptor$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "btn1",
                      _descriptor2$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_colNodes",
                      _descriptor3$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolSpriteFrames",
                      _descriptor4$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_symbolSize = null),
                    (t.m_viewSize = null),
                    (t.m_symbol = new Array()),
                    (t.m_reelStopTime = new Array()),
                    (t.m_reelPreTime = new Array()),
                    (t.m_upperSymbol = new Array()),
                    (t.m_lowerSymbol = new Array()),
                    (t.m_randSymbolListWithArrow = []),
                    (t.m_randSymbolListWithoutArrow = []),
                    (t.Layer2D = 1 << 25),
                    (t.m_numberOfSymbol = 0),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_time = 0),
                    (t.m_stopTime = 0),
                    (t.m_isStop = !0),
                    (t.m_spinSpeed = 0.12),
                    (t.m_riseTime = 0),
                    (t.m_upLength = 10),
                    (t.m_downLength = 16),
                    (t.m_spinBufferTime01 = 0.1),
                    (t.m_spinBufferTime02 = 0.13),
                    (t.m_reelPositionOffset = [v3(0, 0)]),
                    (t.m_setupPosition = []),
                    (t.m_rollRowSettings = [2]),
                    (t.NoArrowCols = [0, 4]),
                    (t.m_arrowTag = []),
                    (t.m_isChangeSymbol = new Array()),
                    (t.m_timesOfBaseSpin = 1),
                    (t.m_spinIntervalTimes = 0.25),
                    (t.m_spinDelayTime = 0.1),
                    (t.m_stopSymbol = 0),
                    (t.m_upSprite = null),
                    (t.m_lowSprite = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    var e, t;
                    (this.m_viewSize =
                      this.node.getComponent(UITransform).contentSize),
                      (this.m_symbolSize = new Size(
                        this.m_viewSize.width / 1,
                        this.m_viewSize.height / 2
                      ));
                    for (var n = 0; n < 1; n++) {
                      this.m_reelStopTime.push(null),
                        this.m_reelPreTime.push(null);
                      for (var i = new Array(), o = 0; o < RowSetting[n]; o++) {
                        ((e = new Node()).layer = this.Layer2D),
                          this.m_colNodes[n].addChild(e),
                          (e.name = String(this.m_numberOfSymbol)),
                          (this.m_numberOfSymbol += 1),
                          this.m_isChangeToFinalSymbol.push(!1),
                          i.push(e);
                        var r =
                          this.m_symbolSize.height * (o + 0.5) +
                          this.m_reelPositionOffset[n].y;
                        e.setPosition(v3(0, r)),
                          this.m_setupPosition.push(v3(0, r)),
                          ((t = e.addComponent(Sprite)).type =
                            Sprite.Type.SIMPLE),
                          (t.sizeMode = Sprite.SizeMode.RAW),
                          (t.trim = !1),
                          (e.getComponent(Sprite).spriteFrame =
                            this.GetSymbolSpriteFrame(o));
                      }
                      this.m_symbol.push(i);
                    }
                    for (var a = 0; a < 1; a++) {
                      var s =
                          2.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[a].y,
                        l = new Node();
                      (l.layer = this.Layer2D),
                        (t = l.addComponent(Sprite)),
                        this.m_colNodes[a].addChild(l),
                        (l.name = String(this.m_numberOfSymbol + a)),
                        l.setPosition(v3(0, s)),
                        this.m_setupPosition.push(v3(0, s)),
                        this.m_upperSymbol.push(l),
                        (t.type = Sprite.Type.SIMPLE),
                        (t.sizeMode = Sprite.SizeMode.RAW),
                        (t.trim = !1),
                        (this.m_upSprite = l.getComponent(Sprite)),
                        (this.m_upSprite.spriteFrame =
                          this.GetSymbolSpriteFrame(3)),
                        (s =
                          -0.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[a].y);
                      var c = new Node();
                      (c.layer = this.Layer2D),
                        (t = c.addComponent(Sprite)),
                        this.m_colNodes[a].addChild(c),
                        (c.name = String(-(a + 1))),
                        c.setPosition(v3(0, s)),
                        this.m_setupPosition.push(v3(0, s)),
                        this.m_lowerSymbol.push(c),
                        (t.type = Sprite.Type.SIMPLE),
                        (t.sizeMode = Sprite.SizeMode.RAW),
                        (t.trim = !1),
                        (this.m_lowSprite = c.getComponent(Sprite)),
                        (this.m_lowSprite.spriteFrame =
                          this.GetSymbolSpriteFrame(3));
                    }
                    for (var u = 0; u < this.m_symbolSpriteFrames.length; u++)
                      this.m_randSymbolListWithArrow.push(u),
                        this.m_randSymbolListWithoutArrow.push(u);
                  }),
                  (n.ReelStop = function (e) {
                    this.m_stopSymbol = e;
                    var t = 5 * this.m_riseTime,
                      n = Math.floor((this.m_time - t) / this.m_spinSpeed);
                    this.m_stopTime = 0;
                    for (var i = 0; i < 2; i++)
                      (this.m_reelStopTime[i] =
                        this.m_spinSpeed * (n + this.m_timesOfBaseSpin) +
                        this.m_spinIntervalTimes * this.m_spinSpeed * i),
                        (this.m_reelPreTime[i] =
                          this.m_spinSpeed * (n + this.m_timesOfBaseSpin - 1) +
                          this.m_spinIntervalTimes * this.m_spinSpeed * i);
                  }),
                  (n.update = function (e) {
                    this.m_isStop || this.Spin(e);
                  }),
                  (n.GetSymbolSpriteFrame = function (e) {
                    return this.m_symbolSpriteFrames[e];
                  }),
                  (n.SetReel = function (e) {
                    this.m_symbol[0][0].setPosition(this.m_setupPosition[0]),
                      this.m_symbol[0][1].setPosition(this.m_setupPosition[1]),
                      this.m_upperSymbol[0].setPosition(
                        this.m_setupPosition[2]
                      ),
                      this.m_lowerSymbol[0].setPosition(
                        this.m_setupPosition[3]
                      ),
                      (this.node.active = e);
                  }),
                  (n.StartSpin = function () {
                    (this.node.active = !0),
                      (this.m_time = 0),
                      (this.m_stopTime = 0),
                      (this.m_isStop = !1);
                    for (var e = 0; e < 2; e++)
                      (this.m_reelStopTime[e] = null),
                        (this.m_reelPreTime[e] = null);
                    for (var t = 0; t < 1; t++)
                      for (var n = 0; n < this.m_rollRowSettings[t]; n++)
                        (this.m_symbol[t][n].active = !0),
                          this.m_symbol[t][n].setPosition(
                            this.m_setupPosition[n]
                          );
                    for (
                      var i = 0;
                      i < this.m_isChangeToFinalSymbol.length;
                      i++
                    )
                      this.m_isChangeToFinalSymbol[i] = !1;
                    (this.m_upSprite.spriteFrame = this.GetSymbolSpriteFrame(
                      this.m_randSymbolListWithArrow[0]
                    )),
                      (this.m_lowSprite.spriteFrame = this.GetSymbolSpriteFrame(
                        this.m_randSymbolListWithArrow[5]
                      )),
                      this.m_upperSymbol[0].setPosition(
                        this.m_setupPosition[2]
                      ),
                      this.m_lowerSymbol[0].setPosition(
                        this.m_setupPosition[3]
                      );
                  }),
                  (n.Spin = function (e) {
                    (this.m_time = this.m_time + e),
                      this.m_isStop ||
                        (this.Spin_RealSpinMultiple(),
                        this.m_time >= this.m_stopTime &&
                          0 != this.m_stopTime &&
                          (this.m_isStop = !0));
                  }),
                  (n.Spin_RealSpinMultiple = function () {
                    for (var e = 0; e < 1; e++) {
                      for (
                        var t = this.m_spinSpeed,
                          n = this.m_time,
                          i = this.m_reelStopTime[e],
                          o = this.m_reelPreTime[e],
                          r = 2 * this.m_riseTime,
                          a = 0;
                        a < this.m_rollRowSettings[e];
                        a++
                      ) {
                        var s =
                          this.m_symbolSize.height * (a + 0.5) +
                          this.m_reelPositionOffset[e].y;
                        if (n < this.m_riseTime * e);
                        else if (n < this.m_riseTime * (e + 1)) {
                          var l =
                            ((n - this.m_riseTime * e) / this.m_riseTime) *
                            this.m_upLength;
                          this.m_symbol[e][a].setPosition(v3(0, s + l));
                        } else if (n < r)
                          this.m_symbol[e][a].setPosition(
                            v3(0, s + this.m_upLength)
                          );
                        else if (null == i || n < o + r) {
                          var c =
                              (((n - r) % t) / t) *
                              this.m_symbolSize.height *
                              (this.m_rollRowSettings[e] + 2),
                            u = this.GetMovelength(
                              c,
                              this.m_symbolSize.height * (a + 1),
                              this.m_symbolSize.height *
                                (this.m_rollRowSettings[e] + 2),
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !1
                            );
                          this.m_symbol[e][a].setPosition(v3(0, s - u));
                        } else if (n < i + r) {
                          var m =
                              (((n - r) % t) / t) *
                              this.m_symbolSize.height *
                              (this.m_rollRowSettings[e] + 2),
                            _ = this.GetMovelength(
                              m,
                              this.m_symbolSize.height * (a + 1),
                              this.m_symbolSize.height *
                                (this.m_rollRowSettings[e] + 2),
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !1
                            );
                          this.m_symbol[e][a].setPosition(v3(0, s - _));
                        } else if (n < i + r + this.m_spinBufferTime01) {
                          var p =
                            ((n - i - r) / this.m_spinBufferTime01) *
                            this.m_downLength;
                          this.m_symbol[e][a].setPosition(v3(0, s - p)),
                            this.CheckChangeToFinalSymbol(
                              e,
                              this.m_symbol[e][a].name,
                              this.m_symbol[e][a],
                              !0
                            );
                        } else if (
                          n <
                          i +
                            r +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ) {
                          var d =
                            ((n - i - r - this.m_spinBufferTime01) /
                              this.m_spinBufferTime02) *
                            this.m_downLength;
                          this.m_symbol[e][a].setPosition(
                            v3(0, s - this.m_downLength + d)
                          );
                          for (var h = 0; h < this.m_symbol.length; h++)
                            for (var f = 0; f < this.m_symbol[h].length; f++) {
                              this.m_symbol[h][f].getComponent(
                                Sprite
                              ).spriteFrame = this.GetSymbolSpriteFrame(
                                this.m_randSymbolListWithArrow[
                                  this.m_stopSymbol
                                ]
                              );
                            }
                          (this.m_upSprite.spriteFrame =
                            this.GetSymbolSpriteFrame(
                              this.m_randSymbolListWithArrow[this.m_stopSymbol]
                            )),
                            (this.m_lowSprite.spriteFrame =
                              this.GetSymbolSpriteFrame(
                                this.m_randSymbolListWithArrow[
                                  this.m_stopSymbol
                                ]
                              ));
                        } else {
                          for (var S = 0; S < this.m_symbol.length; S++)
                            for (var y = 0; y < this.m_symbol[S].length; y++) {
                              this.m_symbol[S][y].getComponent(
                                Sprite
                              ).spriteFrame = this.GetSymbolSpriteFrame(
                                this.m_randSymbolListWithArrow[
                                  this.m_stopSymbol
                                ]
                              );
                            }
                          (this.m_upSprite.spriteFrame =
                            this.GetSymbolSpriteFrame(
                              this.m_randSymbolListWithArrow[this.m_stopSymbol]
                            )),
                            (this.m_lowSprite.spriteFrame =
                              this.GetSymbolSpriteFrame(
                                this.m_randSymbolListWithArrow[
                                  this.m_stopSymbol
                                ]
                              )),
                            (this.m_isStop = !0),
                            (this.node.active = !1),
                            this.m_symbol[e][a].setPosition(v3(0, s));
                        }
                      }
                      var g = 0,
                        b =
                          this.m_symbolSize.height *
                            (this.m_rollRowSettings[e] + 0.5) +
                          this.m_reelPositionOffset[e].y;
                      if (n < this.m_riseTime * e);
                      else if (n < this.m_riseTime * (e + 1)) {
                        var A =
                          ((n - this.m_riseTime * e) / this.m_riseTime) *
                          this.m_upLength;
                        this.m_upperSymbol[e].setPosition(v3(g, b + A));
                      } else if (n < r)
                        this.m_upperSymbol[e].setPosition(
                          v3(g, b + this.m_upLength)
                        );
                      else if (null == i || n < i + r) {
                        var w =
                            (((n - r) % t) / t) *
                            this.m_symbolSize.height *
                            (this.m_rollRowSettings[e] + 2),
                          v = this.GetMovelength(
                            w,
                            this.m_symbolSize.height *
                              (this.m_rollRowSettings[e] + 1),
                            this.m_symbolSize.height *
                              (this.m_rollRowSettings[e] + 2),
                            e,
                            this.m_numberOfSymbol + e,
                            this.m_upperSymbol[e],
                            !1
                          );
                        this.m_upperSymbol[e].setPosition(v3(g, b - v));
                      } else if (n < i + r + this.m_spinBufferTime01) {
                        var $ =
                          ((n - i - r) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        this.m_upperSymbol[e].setPosition(v3(g, b - $)),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_upperSymbol[e].name,
                            this.m_upperSymbol[e],
                            !0
                          );
                      } else if (
                        n <
                        i +
                          r +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      ) {
                        var C =
                          ((n - i - r - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        this.m_upperSymbol[e].setPosition(
                          v3(g, b - this.m_downLength + C)
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
                          this.m_upperSymbol[e].setPosition(v3(g, b));
                      if (
                        ((g = 0),
                        (b =
                          -0.5 * this.m_symbolSize.height +
                          this.m_reelPositionOffset[e].y),
                        n < this.m_riseTime * e)
                      );
                      else if (n < this.m_riseTime * (e + 1)) {
                        var T =
                          ((n - this.m_riseTime * e) / this.m_riseTime) *
                          this.m_upLength;
                        this.m_lowerSymbol[e].setPosition(v3(g, b + T));
                      } else if (n < r)
                        this.m_lowerSymbol[e].setPosition(
                          v3(g, b + this.m_upLength)
                        );
                      else if (null == i || n < i + r) {
                        var D =
                            (((n - r) % t) / t) *
                            this.m_symbolSize.height *
                            (this.m_rollRowSettings[e] + 2),
                          R = this.GetMovelength(
                            D,
                            0.5 * this.m_symbolSize.height,
                            this.m_symbolSize.height *
                              (this.m_rollRowSettings[e] + 2),
                            e,
                            -(e + 1),
                            this.m_lowerSymbol[e],
                            !1
                          );
                        this.m_lowerSymbol[e].setPosition(v3(g, b - R));
                      } else if (n < i + r + this.m_spinBufferTime01) {
                        var E =
                          ((n - i - r) / this.m_spinBufferTime01) *
                          this.m_downLength;
                        this.m_lowerSymbol[e].setPosition(v3(g, b - E)),
                          this.CheckChangeToFinalSymbol(
                            e,
                            this.m_lowerSymbol[e].name,
                            this.m_lowerSymbol[e],
                            !0
                          );
                      } else if (
                        n <
                        i +
                          r +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02
                      ) {
                        var I =
                          ((n - i - r - this.m_spinBufferTime01) /
                            this.m_spinBufferTime02) *
                          this.m_downLength;
                        this.m_lowerSymbol[e].setPosition(
                          v3(g, b - this.m_downLength + I)
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
                          this.m_lowerSymbol[e].setPosition(v3(g, b));
                    }
                  }),
                  (n.GetMovelength = function (e, t, n, i, o, r, a) {
                    return (
                      e >= t
                        ? ((e -= n),
                          this.m_isChangeSymbol[o] &&
                            ((this.m_isChangeSymbol[o] = !1),
                            this.ChangeSymbol(i, r, a)))
                        : (this.m_isChangeSymbol[o] = !0),
                      e
                    );
                  }),
                  (n.ChangeSymbol = function (e, t, n) {
                    var i,
                      o,
                      r,
                      a = this,
                      s = Number(t.name),
                      l = this.m_reelStopTime[e],
                      c = 0,
                      u = e,
                      m = s;
                    if (s >= 0) for (var _ = 0; _ < u; _++) m -= RowSetting[_];
                    l && (c = l / this.m_spinSpeed),
                      (o = t.getComponent(Sprite));
                    var p = function () {
                      (i = Math.floor(
                        Math.random() * a.m_randSymbolListWithArrow.length
                      )),
                        (o.spriteFrame = a.GetSymbolSpriteFrame(
                          a.m_randSymbolListWithArrow[i]
                        ));
                    };
                    (l && this.m_time > (c - 1) * this.m_spinSpeed) || n
                      ? (s >= 0 && s < this.m_numberOfSymbol) ||
                        (this.m_arrowTag[u - 1] && m > 0
                          ? ((i = Math.floor(11 * Math.random())),
                            (r = this.GetSymbolSpriteFrame(i)),
                            (o.spriteFrame = r))
                          : p())
                      : p();
                  }),
                  (n.CheckChangeToFinalSymbol = function (e, t, n, i) {
                    void 0 === i && (i = !1),
                      this.m_isChangeToFinalSymbol[t] ||
                        ((this.m_isChangeToFinalSymbol[t] = !0),
                        this.ChangeSymbol(e, n, i));
                  }),
                  _createClass(t, [
                    {
                      key: "SymbolSize",
                      get: function () {
                        return this.m_symbolSize;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "btn",
                [_dec2$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor2$2 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "btn1",
                [_dec3$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor3$1 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_colNodes",
                [_dec4$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor4$1 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_symbolSpriteFrames",
                [_dec5$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$3 = _class2$3))
            ) || _class$3),
          _dec$4,
          _dec2$4,
          _dec3$3,
          _dec4$2,
          _dec5$2,
          _dec6$1,
          _dec7$1,
          _class$4,
          _class2$4,
          _descriptor$4,
          _descriptor2$3,
          _descriptor3$2,
          _descriptor4$2,
          _descriptor5$1,
          _descriptor6$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "fbef3+jAsxNeqsrhf9uqBt2",
            "SymbolSpine",
            void 0
          );
        var AnimName = { Win: "Win", Remove: "Remove" },
          ccclass$4 = _decorator.ccclass,
          property$4 = _decorator.property,
          SymbolSpine =
            ((_dec$4 = ccclass$4("Symbol")),
            (_dec2$4 = property$4({ type: sp.Skeleton, tooltip: "Spine" })),
            (_dec3$3 = property$4({
              type: sp.Skeleton,
              tooltip: "stack FlyEffectSpine",
            })),
            (_dec4$2 = property$4({
              type: sp.Skeleton,
              tooltip: "Number Spine",
            })),
            (_dec5$2 = property$4({ type: Sprite, tooltip: "Spine" })),
            (_dec6$1 = property$4({ type: SymbolReel, tooltip: "SymbolReel" })),
            (_dec7$1 = property$4({ type: Enum(SYMBOL_NO), tooltip: "編號" })),
            _dec$4(
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
                    _initializerDefineProperty(
                      t,
                      "m_flyEffectSpine",
                      _descriptor2$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_numSpine",
                      _descriptor3$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_sprite",
                      _descriptor4$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_reel",
                      _descriptor5$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbol",
                      _descriptor6$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_symbolData = void 0),
                    (t.m_winSoundCb = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetSymbolData = function (e) {
                    this.m_symbolData = e;
                  }),
                  (n.OnSpineEvent = function (e, t) {
                    switch (e) {
                      case AnimName.Remove:
                        Game_Define.AnimEventName.AnimEvetFunc;
                        break;
                      case AnimName.Win:
                        var n;
                        if (t == Game_Define.AnimEventName.AnimEvetFunc)
                          null == (n = this.m_winSoundCb) || n.call(this);
                    }
                  }),
                  (n.Stop = function () {
                    this.m_spine.clearTrack(0);
                  }),
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName.Win, !1, t)
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
                  (n.ShowRemove = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    !this.m_spine.findAnimation(AnimName.Remove)
                                  ) {
                                    e.next = 4;
                                    break;
                                  }
                                  return (
                                    (e.next = 4),
                                    this.PlayAnimation(AnimName.Remove)
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
                  (n.PlayAnimation = function (e, t, n) {
                    var i = this;
                    return (
                      void 0 === t && (t = !1),
                      void 0 === n && (n = 1),
                      new Promise(function (o) {
                        (i.m_spine.timeScale = n),
                          i.m_spine.clearTrack(0),
                          i.m_spine.setToSetupPose(),
                          i.m_numSpine &&
                            ((i.m_numSpine.timeScale = n),
                            i.m_numSpine.clearTrack(0),
                            i.m_numSpine.setToSetupPose());
                        var r = i.m_spine.setAnimation(0, e, t);
                        i.m_numSpine.setAnimation(0, e, t),
                          r
                            ? (i.m_spine.setTrackEventListener(
                                r,
                                function (t, n) {
                                  null == i.OnSpineEvent ||
                                    i.OnSpineEvent(e, n.data.name);
                                }
                              ),
                              i.m_spine.setTrackCompleteListener(
                                r,
                                function () {
                                  o(null);
                                }
                              ))
                            : i.m_spine.setCompleteListener(function () {
                                o(null);
                              });
                      })
                    );
                  }),
                  _createClass(t, [
                    {
                      key: "Spine",
                      get: function () {
                        return this.m_spine;
                      },
                    },
                    {
                      key: "FlyEffectSpine",
                      get: function () {
                        return this.m_flyEffectSpine;
                      },
                    },
                    {
                      key: "NumSpine",
                      get: function () {
                        return this.m_numSpine;
                      },
                    },
                    {
                      key: "Sprite",
                      get: function () {
                        return this.m_sprite;
                      },
                    },
                    {
                      key: "Reel",
                      get: function () {
                        return this.m_reel;
                      },
                    },
                    {
                      key: "Symbol",
                      get: function () {
                        return this.m_symbol;
                      },
                    },
                    {
                      key: "SymbolData",
                      get: function () {
                        return this.m_symbolData;
                      },
                    },
                    {
                      key: "WinSoundCb",
                      set: function (e) {
                        this.m_winSoundCb = e;
                      },
                    },
                  ]),
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
              (_descriptor2$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_flyEffectSpine",
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
              (_descriptor3$2 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_numSpine",
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
                _class2$4.prototype,
                "m_sprite",
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
                _class2$4.prototype,
                "m_reel",
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
                _class2$4.prototype,
                "m_symbol",
                [_dec7$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return SYMBOL_NO.SYMBOL_00;
                  },
                }
              )),
              (_class$4 = _class2$4))
            ) || _class$4);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "2e31b6/+/RCiocU3g4Gb9jZ", "NodePool", void 0);
        var NodePool = (function () {
            function e() {
              (this.m_symbolArrarys = []),
                (this.m_mapPool = new Map()),
                (this.m_fillEffects = null),
                (this.m_symbols = []),
                (this.m_fillArrarys = {}),
                (e._instance = this);
            }
            e.GetInstance = function () {
              return e._instance;
            };
            var t = e.prototype;
            return (
              (t.SetSymbolSpriteFrames = function (e) {
                this.m_symbols = e;
                for (var t = 0; t < e.length; t++)
                  this.m_fillArrarys["s" + t] = new Array();
              }),
              (t.CreatSymbol = function (e) {
                var t = this.m_symbols[e],
                  n = null,
                  i = "s" + e.toString();
                return (
                  this.m_mapPool.has(i) && this.m_mapPool.get(i).length > 0
                    ? (n = this.m_mapPool.get(i).shift())
                    : ((n =
                        instantiate(t).getComponent(SymbolSpine)).node.name =
                        "s" + e.toString()),
                  (n.node.active = !0),
                  n
                );
              }),
              (t.ReturnSymbol = function (e) {
                if (e) {
                  var t = e.node.name;
                  this.m_mapPool.has(t) &&
                  -1 == this.m_mapPool.get(t).indexOf(e)
                    ? this.m_mapPool.get(t).push(e)
                    : this.m_mapPool.has(t) ||
                      (this.m_mapPool.set(t, []),
                      this.m_mapPool.get(t).push(e)),
                    e.node.removeFromParent();
                }
              }),
              (t.SetFillEffectPrefabs = function (e) {
                this.m_fillEffects = e;
                for (var t = 0; t < e.length; t++)
                  e[t] && (this.m_fillArrarys[e[t].name] = new Array());
              }),
              (t.CreatFillEffect = function (e) {
                var t = this.m_fillEffects[e],
                  n = null,
                  i = t.name;
                return (
                  ((n =
                    this.m_fillArrarys[i] && this.m_fillArrarys[i].length > 0
                      ? this.m_fillArrarys[i].shift()
                      : instantiate(t).getComponent(SymbolSpine)).node.active =
                    !0),
                  (n.Spine.color = new Color(255, 255, 255, 255)),
                  n
                );
              }),
              (t.ReturnCreatFillEffect = function (e) {
                var t = e.node.name;
                node$2.SetZIndex(e.node, Game_Define.ZOrder.NORMAL),
                  (e.node.active = !1),
                  this.m_fillArrarys[t] || (this.m_fillArrarys[t] = []),
                  this.m_fillArrarys[t].push(e);
              }),
              e
            );
          })(),
          _dec$5,
          _dec2$5,
          _class$5,
          _class2$5,
          _descriptor$5;
        (NodePool._instance = new NodePool()),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "eebe9uhc6FB/pl9/c/NniJR",
            "NodeShadow",
            void 0
          );
        var ccclass$5 = _decorator.ccclass,
          property$5 = _decorator.property,
          NodeShadow =
            ((_dec$5 = ccclass$5("NodeShadow")),
            (_dec2$5 = property$5({ type: Node, tooltip: "黑色面板" })),
            _dec$5(
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
                      "m_shadow",
                      _descriptor$5,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.SetShadow = function (e) {
                    this.m_shadow.active = e;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$5 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_shadow",
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
              (_class$5 = _class2$5))
            ) || _class$5),
          _dec$6,
          _dec2$6,
          _dec3$4,
          _dec4$3,
          _dec5$3,
          _dec6$2,
          _class$6,
          _class2$6,
          _descriptor$6,
          _descriptor2$4,
          _descriptor3$3,
          _descriptor4$3,
          _descriptor5$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "cc473U9kZFAVbWGyVYNsj9l",
            "EffectPlate",
            void 0
          );
        var ccclass$6 = _decorator.ccclass,
          property$6 = _decorator.property,
          EffectPlate =
            ((_dec$6 = ccclass$6("EffectPlate")),
            (_dec2$6 = property$6({ type: Prefab, tooltip: "symbol動畫" })),
            (_dec3$4 = property$6({ type: NodeShadow, tooltip: "黑色面板" })),
            (_dec4$3 = property$6({ type: SymbolSpine, tooltip: "reel效果" })),
            (_dec5$3 = property$6({ type: Node, tooltip: "fly point 1" })),
            (_dec6$2 = property$6({
              type: sp.Skeleton,
              tooltip: "DJ disk effect : 0左1右",
            })),
            _dec$6(
              ((_class2$6 = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(i)) || this).m_gameView =
                      null),
                    (t.m_slotReels = null),
                    (t.m_characterSpine = null),
                    (t.m_roundQueue = null),
                    _initializerDefineProperty(
                      t,
                      "m_symbolEffectPrefabs",
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_shadow",
                      _descriptor2$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_reelEffect",
                      _descriptor3$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_flyPoint1",
                      _descriptor4$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_djDiskEffect",
                      _descriptor5$2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isExplode = !1),
                    (t.m_plateIdx = 0),
                    (t.m_combo = 0),
                    (t.m_stackSpine = []),
                    (t.m_stackSpinAudio = -1),
                    (t.m_spineArrs = []),
                    (t.m_scatterEffects = []),
                    (t.m_reelStopArrs = []),
                    (t.m_isBothway = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e, t, n) {
                    (this.m_gameView = e),
                      (this.m_slotReels = t),
                      (this.m_characterSpine = n),
                      NodePool.GetInstance().SetFillEffectPrefabs(
                        this.m_symbolEffectPrefabs
                      );
                  }),
                  (n.ResetExplode = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (t = 0; t < this.m_spineArrs.length; t++)
                                    (n = this.m_spineArrs[t]),
                                      NodePool.GetInstance().ReturnCreatFillEffect(
                                        n
                                      ),
                                      this.node.removeChild(n.node);
                                  this.m_spineArrs = [];
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
                  (n.ResetStack = function () {
                    for (var e = 0; e < this.m_stackSpine.length; e++)
                      for (var t = 0; t < this.m_stackSpine[e].length; t++) {
                        var n = this.m_stackSpine[e][t];
                        NodePool.GetInstance().ReturnCreatFillEffect(n),
                          this.node.removeChild(n.node);
                      }
                    this.m_stackSpine = [];
                  }),
                  (n.CreatStack = function () {
                    this.ResetStack();
                    for (
                      var e = this.m_gameView.SlotReels.StackSpine, t = 0;
                      t < e.length;
                      t++
                    ) {
                      for (var n = new Array(), i = 0; i < e[t].length; i++) {
                        var o = NodePool.GetInstance().CreatFillEffect(
                          SYMBOL_NO.SYMBOL_18
                        );
                        (o.node.active = !1),
                          o.node.setPosition(e[t][i].node.position),
                          this.node.insertChild(o.node, 0),
                          o.SetSymbolData(e[t][i].SymbolData),
                          n.push(o);
                        var r = o.SymbolData.HStack,
                          a = o.SymbolData.HSymbol,
                          s = Game_Define.Symbol_AniName.IDLE_ + r;
                        this.m_slotReels.SetStack(o.Spine, a, s, o.NumSpine);
                      }
                      this.m_stackSpine.push(n);
                    }
                  }),
                  (n.ReelAllStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    void 0 === t && (t = !1),
                                      n = new Array(),
                                      i = this.m_gameView.SlotReels.StackSpine,
                                      o = !1,
                                      this.ResetStack(),
                                      r = 0;
                                    r < i.length;
                                    r++
                                  ) {
                                    for (
                                      a = new Array(), s = 0;
                                      s < i[r].length;
                                      s++
                                    )
                                      (l =
                                        NodePool.GetInstance().CreatFillEffect(
                                          SYMBOL_NO.SYMBOL_18
                                        )),
                                        (o = !0),
                                        l.node.setPosition(
                                          i[r][s].node.position
                                        ),
                                        this.node.insertChild(l.node, 0),
                                        l.SetSymbolData(i[r][s].SymbolData),
                                        a.push(l),
                                        (c = l.SymbolData.HStack),
                                        (u = l.SymbolData.HSymbol),
                                        (m =
                                          Game_Define.Symbol_AniName.Stop_ + c),
                                        (_ = Game_Define.IsInFG
                                          ? Game_Define.Symbol_AniName.IDLE_ + c
                                          : Game_Define.Symbol_AniName.Stop_ +
                                            c),
                                        l.Reel.SetReel(!1),
                                        n.push(
                                          this.m_slotReels.SetStack(
                                            l.Spine,
                                            u,
                                            m,
                                            l.NumSpine,
                                            _
                                          )
                                        );
                                    this.m_stackSpine.push(a);
                                  }
                                  return (
                                    o &&
                                      !t &&
                                      node$1.Play(
                                        Game_Define.AudioClips.Patry_Reel_Spin
                                      ),
                                    (e.next = 9),
                                    Promise.all(n)
                                  );
                                case 9:
                                  for (p = 0; p < this.m_stackSpine.length; p++)
                                    for (
                                      d = 0;
                                      d < this.m_stackSpine[p].length;
                                      d++
                                    )
                                      (h =
                                        this.m_stackSpine[p][d].SymbolData
                                          .HStack),
                                        (f =
                                          this.m_stackSpine[p][d].SymbolData
                                            .HSymbol),
                                        (S =
                                          Game_Define.Symbol_AniName.IDLE_ + h),
                                        n.push(
                                          this.m_slotReels.SetStack(
                                            this.m_stackSpine[p][d].Spine,
                                            f,
                                            S,
                                            this.m_stackSpine[p][d].NumSpine
                                          )
                                        );
                                  return (e.next = 12), Promise.all(n);
                                case 12:
                                  for (y = 0; y < this.m_stackSpine.length; y++)
                                    for (
                                      g = 0;
                                      g < this.m_stackSpine[y].length;
                                      g++
                                    )
                                      this.m_stackSpine[y][g].node.active = !1;
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
                  (n.ReelStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (n = new Array()),
                                    (i = t.Col),
                                    (o = t.Row),
                                    (r = t.SymbolNo),
                                    (a =
                                      NodePool.GetInstance().CreatFillEffect(
                                        r
                                      )),
                                    (s = this.m_slotReels.GetSymbolPosition(
                                      i,
                                      o
                                    )),
                                    a.node.setPosition(s),
                                    this.node.insertChild(a.node, 0),
                                    r == SYMBOL_NO.SYMBOL_16
                                      ? (node$2.SetZIndex(
                                          a.node,
                                          Game_Define.ZOrder.SCATTER + i
                                        ),
                                        this.m_scatterEffects.push(a.node))
                                      : r == SYMBOL_NO.SYMBOL_17 &&
                                        (node$2.SetZIndex(
                                          a.node,
                                          Game_Define.ZOrder.SUPERSCATTER + i
                                        ),
                                        this.m_scatterEffects.push(a.node)),
                                    (l = a.getComponent(SymbolSpine)),
                                    n.push(
                                      this.ShowEffect(
                                        l,
                                        Game_Define.EffectAniName.STOP,
                                        !1
                                      )
                                    ),
                                    this.m_reelStopArrs.push(a),
                                    (e.next = 16),
                                    Promise.all(n)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowScatterNearwin = function () {
                    for (var e = 0; e < this.m_reelStopArrs.length; e++) {
                      this.m_reelStopArrs[e].node.active = !0;
                      var t = this.m_reelStopArrs[e].getComponent(SymbolSpine);
                      this.ShowEffect(
                        t,
                        Game_Define.EffectAniName.NEAR_WIN,
                        !0,
                        !1
                      );
                    }
                  }),
                  (n.ClearReelStop = function (e) {
                    if ((void 0 === e && (e = !0), e)) {
                      for (var t = 0; t < this.m_reelStopArrs.length; t++) {
                        var n = this.m_reelStopArrs[t];
                        NodePool.GetInstance().ReturnCreatFillEffect(n),
                          this.node.removeChild(n.node);
                      }
                      this.m_reelStopArrs = [];
                    } else
                      for (var i = 0; i < this.m_reelStopArrs.length; i++)
                        this.m_reelStopArrs[i].node.active = !1;
                  }),
                  (n.FollowScatter = function () {
                    for (
                      var e = 0;
                      e < this.m_slotReels.ScatterSymbols.length;
                      e++
                    ) {
                      var t = this.m_slotReels.ScatterSymbols[e].position;
                      this.m_scatterEffects[e] &&
                        this.m_scatterEffects[e].setPosition(t);
                    }
                  }),
                  (n.EliminatePlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_roundQueue =
                                      this.m_slotReels.RoundQueue),
                                    (e.next = 3),
                                    this.PlayEffect(this.m_roundQueue)
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
                  (n.ChangeAddStack = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, u, m, _, p;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t =
                                      this.m_roundQueue.ComboStageData[
                                        this.m_plateIdx - 1
                                      ].ChangeSymbols,
                                      n = new Array(),
                                      i = !1,
                                      o = -1,
                                      r = 0;
                                    r < Game_Define.COL;
                                    r++
                                  )
                                    for (
                                      a = 0, s = 0, l = 0;
                                      l < Game_Define.ROW;
                                      l++
                                    )
                                      1 ==
                                        (c =
                                          this.m_slotReels.FillEliminate[r][
                                            l
                                          ]) ||
                                        (2 == c
                                          ? (a += 1)
                                          : 3 == c &&
                                            ((i = !0),
                                            (u = t[r].Col[s].HSymbol),
                                            (m = t[r].Col[s].HStack),
                                            u || (u = 0),
                                            (this.m_stackSpine[r][
                                              a
                                            ].SymbolData.HSymbol = u),
                                            (this.m_stackSpine[r][
                                              a
                                            ].SymbolData.HStack = m),
                                            (_ =
                                              Game_Define.Symbol_AniName.Stop_ +
                                              m),
                                            (p =
                                              Game_Define.Symbol_AniName.IDLE_ +
                                              m),
                                            (this.m_stackSpine[r][
                                              a
                                            ].node.active = !0),
                                            (this.m_stackSpine[r][
                                              a
                                            ].node.position =
                                              this.m_slotReels.StackSpine[r][
                                                a
                                              ].node.position),
                                            n.push(
                                              this.m_slotReels.SetStack(
                                                this.m_stackSpine[r][a].Spine,
                                                u,
                                                _,
                                                this.m_stackSpine[r][a]
                                                  .NumSpine,
                                                p
                                              )
                                            ),
                                            (a += 1),
                                            (s += 1)));
                                  return (
                                    i &&
                                      ((o = node$1.Play(
                                        Game_Define.AudioClips.Reel_Reel,
                                        !0
                                      )),
                                      node$1.Play(
                                        Game_Define.AudioClips.Patry_Reel_Spin
                                      )),
                                    (e.next = 8),
                                    Promise.all(n)
                                  );
                                case 8:
                                  node$1.Stop(o), this.SetShadow(!1);
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
                  (n.AddStack = (function () {
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
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t =
                                      this.m_roundQueue.ComboStageData[
                                        this.m_plateIdx
                                      ].ChangeSymbols,
                                      n = new Array(),
                                      i = [],
                                      o = 0;
                                    o < Game_Define.COL;
                                    o++
                                  )
                                    for (
                                      r = 0, a = 0, s = 0;
                                      s < Game_Define.ROW;
                                      s++
                                    )
                                      1 ==
                                        (l =
                                          this.m_slotReels.FillEliminate[o][
                                            s
                                          ]) ||
                                        (2 == l
                                          ? (r += 1)
                                          : 3 == l &&
                                            ((c = !1),
                                            (u = Game_Define.IsInFG
                                              ? Game_Define.STACK_MAX.FG
                                              : Game_Define.STACK_MAX.MG),
                                            (m = t[o].Col[a].HSymbol),
                                            (_ = t[o].Col[a].HStack),
                                            m || (m = 0),
                                            (this.m_stackSpine[o][
                                              r
                                            ].SymbolData.HSymbol = m),
                                            this.m_stackSpine[o][r].SymbolData
                                              .HStack == u && (c = !0),
                                            (this.m_stackSpine[o][
                                              r
                                            ].SymbolData.HStack = _),
                                            this.m_slotReels.SetStackSymbol(
                                              o,
                                              r,
                                              !1
                                            ),
                                            ((p =
                                              NodePool.GetInstance().CreatFillEffect(
                                                EFFECT_NO.SYMBOL_FXDJ
                                              )).node.position =
                                              this.m_stackSpine[o][
                                                r
                                              ].node.position),
                                            this.node.insertChild(p.node, 0),
                                            node$2.SetZIndex(
                                              this.m_stackSpine[o][r].node,
                                              Game_Define.ZOrder.STACK_PLAY - o
                                            ),
                                            node$2.SetZIndex(
                                              p.node,
                                              Game_Define.ZOrder.STACK_EFFECT
                                            ),
                                            n.push(
                                              this.ShowEffect(
                                                p,
                                                Game_Define.EffectAniName.FX_DJ,
                                                !1
                                              )
                                            ),
                                            i.push(p),
                                            c ||
                                              ((d =
                                                Game_Define.Symbol_AniName
                                                  .UPGRADE_ +
                                                (_ - 1) +
                                                "to" +
                                                _),
                                              (h =
                                                _ >= 8
                                                  ? Game_Define.Symbol_AniName
                                                      .UPGRADE_GOLD
                                                  : Game_Define.Symbol_AniName
                                                      .UPGRADE),
                                              n.push(
                                                this.m_slotReels.SetStack(
                                                  this.m_stackSpine[o][r].Spine,
                                                  100,
                                                  h,
                                                  this.m_stackSpine[o][r]
                                                    .NumSpine,
                                                  d
                                                )
                                              )),
                                            (r += 1),
                                            (a += 1)));
                                  return (
                                    n.length > 0 &&
                                      node$1.Play(
                                        Game_Define.AudioClips
                                          .Patry_Reel_Upgrade
                                      ),
                                    (e.next = 7),
                                    Promise.all(n)
                                  );
                                case 7:
                                  for (
                                    this.SetShadow(!1), f = 0;
                                    f < Game_Define.COL;
                                    f++
                                  )
                                    for (S = 0; S < Game_Define.ROW; S++)
                                      this.m_slotReels.SetSymbol(f, S, !0);
                                  for (y = 0; y < i.length; y++)
                                    NodePool.GetInstance().ReturnCreatFillEffect(
                                      i[y]
                                    ),
                                      this.node.removeChild(i[y].node);
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
                  (n.StackChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        var o, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o = new Array()),
                                    ((r =
                                      this.m_stackSpine[t][n]).node.position =
                                      this.m_slotReels.StackSpine[t][
                                        n
                                      ].node.position),
                                    (r.Spine.color = new Color(
                                      255,
                                      255,
                                      255,
                                      255
                                    )),
                                    (r.node.active = !0),
                                    node$2.SetZIndex(
                                      r.node,
                                      Game_Define.ZOrder.STACK
                                    ),
                                    (a =
                                      Game_Define.Symbol_AniName.WIN_ +
                                      r.SymbolData.HStack),
                                    ((s =
                                      NodePool.GetInstance().CreatFillEffect(
                                        EFFECT_NO.SYMBOL_FXDJ
                                      )).node.position = r.node.position),
                                    this.node.insertChild(s.node, 0),
                                    node$2.SetZIndex(
                                      s.node,
                                      Game_Define.ZOrder.STACK_EFFECT
                                    ),
                                    o.push(
                                      this.ShowEffect(
                                        s,
                                        Game_Define.EffectAniName.FX_SP,
                                        !1
                                      )
                                    ),
                                    o.push(
                                      this.m_slotReels.SetStack(
                                        r.Spine,
                                        i,
                                        a,
                                        r.NumSpine
                                      )
                                    ),
                                    (e.next = 15),
                                    Promise.all(o)
                                  );
                                case 15:
                                  NodePool.GetInstance().ReturnCreatFillEffect(
                                    s
                                  ),
                                    this.node.removeChild(s.node);
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayStackDiskFly = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === t && (t = !0),
                                    (n = new Array()),
                                    (i = new Array()),
                                    (o = []),
                                    (r = []),
                                    (a = []),
                                    t)
                                  )
                                    for (
                                      s = 0;
                                      s <
                                      this.m_gameView.SlotReels.StackSpine
                                        .length;
                                      s++
                                    )
                                      for (
                                        l = 0;
                                        l <
                                        this.m_gameView.SlotReels.StackSpine[s]
                                          .length;
                                        l++
                                      )
                                        (c =
                                          this.m_gameView.SlotReels.StackSpine[
                                            s
                                          ][l]),
                                          o.push(c);
                                  for (
                                    u = function (e) {
                                      var t = new Promise(function (t) {
                                        var n = o[e],
                                          a =
                                            NodePool.GetInstance().CreatFillEffect(
                                              EFFECT_NO.SYMBOL_FXDJ
                                            );
                                        (a.node.position = n.node.position),
                                          d.node.insertChild(a.node, 0),
                                          node$2.SetZIndex(
                                            a.node,
                                            Game_Define.ZOrder.STACK_EFFECT
                                          ),
                                          r.push(a),
                                          i.push(
                                            d.ShowEffect(
                                              a,
                                              Game_Define.EffectAniName
                                                .FX_DEBUT,
                                              !1
                                            )
                                          );
                                        var s =
                                          NodePool.GetInstance().CreatFillEffect(
                                            EFFECT_NO.FX_DISK
                                          );
                                        (s.node.position = n.node.position),
                                          d.node.insertChild(s.node, 0),
                                          node$2.SetZIndex(
                                            a.node,
                                            Game_Define.ZOrder.DISK
                                          );
                                        var l = d.ChooseTargetPos(
                                            n.node.position.x
                                          ),
                                          c = s.node.parent
                                            .getComponent(UITransform)
                                            .convertToNodeSpaceAR(l);
                                        d.ShowDiskDebut(c.x < 0 ? 0 : 1),
                                          tween(s.node)
                                            .call(function () {
                                              s.Spine.setAnimation(
                                                0,
                                                Game_Define.EffectAniName
                                                  .FX_DEBUT_2,
                                                !1
                                              );
                                            })
                                            .to(
                                              0.3,
                                              {
                                                position: v3(
                                                  s.node.position.x,
                                                  d.m_flyPoint1.position.y
                                                ),
                                              },
                                              { easing: "quintOut" }
                                            )
                                            .to(
                                              0.2,
                                              { position: c },
                                              { easing: "quintIn" }
                                            )
                                            .call(function () {
                                              t();
                                            })
                                            .start();
                                      });
                                      n.push(t);
                                    },
                                      m = 0;
                                    m < o.length;
                                    m++
                                  )
                                    u(m);
                                  return (e.next = 11), Promise.all(n);
                                case 11:
                                  return (e.next = 13), Promise.all(i);
                                case 13:
                                  for (_ = 0; _ < r.length; _++)
                                    NodePool.GetInstance().ReturnCreatFillEffect(
                                      r[_]
                                    ),
                                      this.node.removeChild(r[_].node);
                                  for (p = 0; p < a.length; p++)
                                    NodePool.GetInstance().ReturnCreatFillEffect(
                                      a[p]
                                    ),
                                      this.node.removeChild(a[p].node);
                                  (this.m_djDiskEffect[0].node.active = !1),
                                    (this.m_djDiskEffect[0].node.active = !0),
                                    (this.m_gameView.SlotReels.NewStackSpine =
                                      []);
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
                  (n.ChooseTargetPos = function (e) {
                    var t,
                      n =
                        this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx]
                          .ComboStageData[Game_Define.PlateIdx].Party;
                    return (
                      (n[0].State > 0 && n[1].State > 0) ||
                      (n[0].State <= 0 && n[1].State <= 0)
                        ? (t =
                            e < 0
                              ? this.m_djDiskEffect[0].node.position
                              : this.m_djDiskEffect[1].node.position)
                        : n[0].State > 0
                        ? (t = this.m_djDiskEffect[0].node.position)
                        : n[1].State > 0 &&
                          (t = this.m_djDiskEffect[1].node.position),
                      this.m_djDiskEffect[0].node.parent
                        .getComponent(UITransform)
                        .convertToWorldSpaceAR(t)
                    );
                  }),
                  (n.PlayerBonus = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a, s, l, c, u, m;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_roundQueue =
                                      this.m_slotReels.RoundQueue,
                                      t =
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx
                                        ].ComboStageSymbol,
                                      n = new Array(),
                                      i = [],
                                      node$1.Play(
                                        Game_Define.AudioClips
                                          .Character_BGWin_Start
                                      ),
                                      node$1.Play(
                                        Game_Define.AudioClips.Scatter_bell
                                      ),
                                      o = 0;
                                    o < Game_Define.COL;
                                    o++
                                  )
                                    for (r = 0; r < Game_Define.ROW; r++)
                                      ((a = t[o].Col[r].Symbol) !=
                                        SYMBOL_NO.SYMBOL_16 &&
                                        a != SYMBOL_NO.SYMBOL_17) ||
                                        ((s =
                                          NodePool.GetInstance().CreatFillEffect(
                                            a
                                          )),
                                        (l = this.m_slotReels.GetSymbolPosition(
                                          o,
                                          r
                                        )),
                                        s.node.setPosition(l),
                                        this.node.insertChild(s.node, 0),
                                        a == SYMBOL_NO.SYMBOL_16
                                          ? node$2.SetZIndex(
                                              s.node,
                                              Game_Define.ZOrder.SCATTER + o
                                            )
                                          : a == SYMBOL_NO.SYMBOL_17 &&
                                            node$2.SetZIndex(
                                              s.node,
                                              Game_Define.ZOrder.SUPERSCATTER +
                                                o
                                            ),
                                        (c = Game_Define.EffectAniName.WIN),
                                        n.push(this.ShowEffect(s, c, !1)),
                                        i.push(s));
                                  return (e.next = 9), Promise.all(n);
                                case 9:
                                  for (u = 0; u < i.length; u++)
                                    (m = i[u]),
                                      NodePool.GetInstance().ReturnCreatFillEffect(
                                        m
                                      ),
                                      this.node.removeChild(m.node);
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
                  (n.SetSymbolWin = function (e, t, n, i) {
                    var o = NodePool.GetInstance().CreatFillEffect(n),
                      r = this.m_slotReels.GetSymbolPosition(e, t);
                    o.node.setPosition(r),
                      this.node.insertChild(o.node, 0),
                      n == SYMBOL_NO.SYMBOL_12 &&
                        node$2.SetZIndex(o.node, Game_Define.ZOrder.WILD);
                    var a = Game_Define.EffectAniName.WIN;
                    i.push(this.ShowEffect(o, a, !1)), this.m_spineArrs.push(o);
                  }),
                  (n.CloseStack = function (e) {
                    (e.Spine.color = new Color(100, 100, 100, 255)),
                      (e.node.active = !1);
                  }),
                  (n.SetStackWin = function (e, t, n, i, o) {
                    i.push(n),
                      (n.Spine.color = new Color(255, 255, 255, 255)),
                      (n.node.active = !0),
                      node$2.SetZIndex(
                        n.node,
                        Game_Define.ZOrder.STACK_PLAY - e
                      );
                    var r =
                      Game_Define.Symbol_AniName.WIN_ + n.SymbolData.HStack;
                    o.push(
                      this.m_slotReels.SetStack(
                        n.Spine,
                        n.SymbolData.HSymbol,
                        r,
                        n.NumSpine
                      )
                    ),
                      this.m_slotReels.SetStackSkin(
                        e,
                        t,
                        Game_Define.Symbol_SkinName.DEFAULT
                      ),
                      this.m_slotReels.SetStackSymbol(e, t, !1);
                  }),
                  (n.PlayEffect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g,
                          b,
                          A,
                          w,
                          v,
                          $,
                          C,
                          T,
                          D;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_combo = node$2.plus(this.m_combo, 1),
                                      n =
                                        t.ComboStageData[this.m_plateIdx]
                                          .ComboStageSymbol,
                                      i = new Array(),
                                      this.m_isExplode = !1,
                                      o = [],
                                      r = this.m_isBothway
                                        ? Game_Define.COL / 2
                                        : Game_Define.COL,
                                      a = 5,
                                      s = !1,
                                      l = 0;
                                    l < r;
                                    l++
                                  ) {
                                    for (
                                      c = 0, u = l + a, m = 0;
                                      m < Game_Define.ROW;
                                      m++
                                    )
                                      (_ =
                                        this.m_slotReels.FillEliminate[l][m]),
                                        (p = this.m_isBothway
                                          ? this.m_slotReels.FillEliminate[u][m]
                                          : -1),
                                        1 == _ || 1 == p
                                          ? ((d = 1 == _ ? n[l].Col : null),
                                            (h = d ? d[m].Symbol : -1) !=
                                              SYMBOL_NO.SYMBOL_18 &&
                                              h >= 0 &&
                                              this.SetSymbolWin(l, m, h, i))
                                          : (_ > 1 || p > 1) &&
                                            ((f =
                                              _ > 1
                                                ? this.m_stackSpine[l][c]
                                                : null),
                                            2 == _ || 2 == p
                                              ? f &&
                                                2 == _ &&
                                                (this.CloseStack(f), (c += 1))
                                              : (3 != _ && 3 != p) ||
                                                (f &&
                                                  3 == _ &&
                                                  (s ||
                                                    ((s = !0),
                                                    this.m_gameView.ShakeWorld(
                                                      "PartyStar_1"
                                                    )),
                                                  this.SetStackWin(
                                                    l,
                                                    c,
                                                    f,
                                                    o,
                                                    i
                                                  ),
                                                  (c += 1))));
                                    a -= 2;
                                  }
                                  return (
                                    this.m_slotReels.EliminatePlate(),
                                    this.SetShadow(!0),
                                    (S =
                                      t.ComboStageData[this.m_plateIdx]
                                        .ComboStageWin),
                                    (y = node$3.GetNowBetValue()),
                                    (g = node$2.divide(S, y)),
                                    this.m_gameView.SmallWin.ShowWin(S, g),
                                    (e.next = 17),
                                    Promise.all(i)
                                  );
                                case 17:
                                  for (
                                    this.m_stackSpinAudio = -1,
                                      o &&
                                        o.length > 0 &&
                                        (this.m_stackSpinAudio = node$1.Play(
                                          Game_Define.AudioClips.Reel_Reel,
                                          !0
                                        )),
                                      b = 0;
                                    b < o.length;
                                    b++
                                  )
                                    (A = o[b]).Spine.setSkin(
                                      Game_Define.Symbol_SkinName.DEFAULT
                                    ),
                                      A.Reel.StartSpin();
                                  for (w = 0; w < Game_Define.COL; w++)
                                    for (v = 0; v < Game_Define.ROW; v++)
                                      1 ==
                                        this.m_slotReels.FillEliminate[w][v] &&
                                        (($ = n[w].Col),
                                        $[v].Symbol != SYMBOL_NO.SYMBOL_18 &&
                                          ((C =
                                            NodePool.GetInstance().CreatFillEffect(
                                              EFFECT_NO.SYMBOL_FX
                                            )),
                                          (T =
                                            this.m_slotReels.GetSymbolPosition(
                                              w,
                                              v
                                            )),
                                          C.node.setPosition(T),
                                          this.node.insertChild(C.node, 0),
                                          i.push(
                                            this.ShowEffect(
                                              C,
                                              Game_Define.EffectAniName.REMOVE,
                                              !1
                                            )
                                          ),
                                          this.m_spineArrs.push(C)));
                                  return (
                                    this.m_slotReels.IsHardStop
                                      ? this.ComboFastAudio()
                                      : this.ComboAudio(),
                                    (e.next = 24),
                                    this.AddStack()
                                  );
                                case 24:
                                  return (e.next = 26), Promise.all(i);
                                case 26:
                                  for (
                                    this.m_gameView.SlotReels.ChangeAddStack(
                                      !1
                                    ),
                                      this.m_gameView.SlotReels.SetAllStackSkin(
                                        !0
                                      ),
                                      this.m_isExplode = !0,
                                      this.SetShadow(!1),
                                      D = 0;
                                    D < o.length;
                                    D++
                                  )
                                    o[D].node.active = !1;
                                  this.m_plateIdx++;
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowEffectNormal = function (e, t, n) {
                    return new Promise(function (i) {
                      var o = e.Spine;
                      (o.timeScale = 1),
                        o.setCompleteListener(function () {
                          o.setCompleteListener(null), i();
                        }),
                        o.setAnimation(0, t, n);
                    });
                  }),
                  (n.ShowEffect = function (e, t, n, i) {
                    var o = this;
                    return (
                      void 0 === i && (i = !0),
                      new Promise(function (r) {
                        var a = Game_Define.TimeScale.Normal;
                        t == Game_Define.EffectAniName.WIN ||
                        t == Game_Define.EffectAniName.STOP ||
                        t == Game_Define.EffectAniName.FX_DEBUT
                          ? (a = Game_Define.TimeScale.Normal)
                          : t == Game_Define.EffectAniName.REMOVE
                          ? (a = Game_Define.TimeScale.Remove)
                          : o.m_slotReels.IsHardStop &&
                            (a = node$2.times(
                              a,
                              Game_Define.TimeScale.HardStop
                            ));
                        var s = e.Spine;
                        t == Game_Define.EffectAniName.FX_DEBUT &&
                          (s = e.FlyEffectSpine),
                          (s.timeScale = a),
                          s.setCompleteListener(function () {
                            s.setCompleteListener(null),
                              i && (e.node.active = !1),
                              r();
                          }),
                          s.setAnimation(0, t, n);
                      })
                    );
                  }),
                  (n.ShowDiskDebut = function (e) {
                    var t = Game_Define.TimeScale.Normal;
                    (this.m_djDiskEffect[e].node.active = !0),
                      (this.m_djDiskEffect[e].timeScale = t),
                      this.m_djDiskEffect[e].setAnimation(
                        0,
                        Game_Define.EffectAniName.FX_DEBUT_2,
                        !1
                      );
                  }),
                  (n.ComboFastAudio = function () {
                    var e = null;
                    switch (this.m_combo) {
                      case 1:
                        e = Game_Define.AudioClips.Combo_f_x2_fast;
                        break;
                      case 2:
                        e = Game_Define.IsInFG
                          ? Game_Define.AudioClips.Combo_f_x3_fast
                          : Game_Define.AudioClips.Combo_f_x2_fast;
                        break;
                      case 3:
                        e = Game_Define.AudioClips.Combo_f_x3_fast;
                        break;
                      default:
                        e = Game_Define.AudioClips.Combo_f_x4_fast;
                    }
                    this.PlayAudio(e);
                  }),
                  (n.ComboAudio = function () {
                    var e = null;
                    switch (this.m_combo) {
                      case 1:
                        e = Game_Define.AudioClips.Combo_f_x2;
                        break;
                      case 2:
                        e = Game_Define.IsInFG
                          ? Game_Define.AudioClips.Combo_f_x3
                          : Game_Define.AudioClips.Combo_f_x2;
                        break;
                      case 3:
                        e = Game_Define.AudioClips.Combo_f_x3;
                        break;
                      default:
                        e = Game_Define.AudioClips.Combo_f_x4;
                    }
                    this.PlayAudio(e);
                  }),
                  (n.PlayAudio = function (e) {
                    null != e && node$1.Play(e);
                  }),
                  (n.SetExplode = function (e) {
                    this.m_isExplode = e;
                  }),
                  (n.Reset = function () {
                    (this.m_plateIdx = 0),
                      (this.m_combo = 0),
                      (this.m_isExplode = !1),
                      (this.m_scatterEffects = []);
                  }),
                  (n.SetShadow = function (e) {
                    this.m_shadow.SetShadow(e);
                  }),
                  _createClass(t, [
                    {
                      key: "IsExplode",
                      get: function () {
                        return this.m_isExplode;
                      },
                    },
                    {
                      key: "StackSpine",
                      get: function () {
                        return this.m_stackSpine;
                      },
                    },
                    {
                      key: "StackSpinAudio",
                      get: function () {
                        return this.m_stackSpinAudio;
                      },
                      set: function (e) {
                        this.m_stackSpinAudio = e;
                      },
                    },
                    {
                      key: "IsBothWay",
                      set: function (e) {
                        this.m_isBothway = e;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_symbolEffectPrefabs",
                [_dec2$6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$4 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_shadow",
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
                _class2$6.prototype,
                "m_reelEffect",
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
              (_descriptor4$3 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_flyPoint1",
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
              (_descriptor5$2 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_djDiskEffect",
                [_dec6$2],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$6 = _class2$6))
            ) || _class$6);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "dc87dzkCXZAiJG1T2DiSIIL",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {},
          _dec$7,
          _dec2$7,
          _dec3$5,
          _dec4$4,
          _dec5$4,
          _dec6$3,
          _class$7,
          _class2$7,
          _descriptor$7,
          _descriptor2$5,
          _descriptor3$4,
          _descriptor4$4,
          _descriptor5$3;
        (FeaturesAck.INFO = {
          RoundQueue: [
            {
              ComboStageData: [
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 2, HSymbol: 2, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 5 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                        { Symbol: 18, HSymbol: 1, HStack: 6 },
                        { Symbol: 2, HSymbol: 2, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 6 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 5 },
                        { Symbol: 6, HSymbol: 6, HStack: 1 },
                        { Symbol: 18, HSymbol: 5, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 18, HSymbol: 1, HStack: 5 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 12.6,
                  AwardDataVec: [
                    { Symbol: 1, Count: 3, Line: 36, Win: 10.8 },
                    { Symbol: 2, Count: 3, Line: 6, Win: 1.8 },
                  ],
                  FillSymbols: [
                    {
                      Col: [
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                      ],
                    },
                    { Col: [{ Symbol: 1, HSymbol: 1, HStack: 1 }] },
                    {},
                    {},
                    {},
                    {},
                  ],
                  ChangeSymbols: [
                    {},
                    { Col: [{ Symbol: 18, HSymbol: 4, HStack: 7 }] },
                    { Col: [{ Symbol: 18, HSymbol: 8, HStack: 7 }] },
                    {},
                    {},
                    {},
                  ],
                  Party: [
                    { LR: 1, State: 1, Worked: !0, StackCol: 2, HSymbol: 12 },
                    { LR: 2 },
                  ],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 8, HStack: 5 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                        { Symbol: 18, HSymbol: 4, HStack: 7 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 7 },
                        { Symbol: 4, HSymbol: 4, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 5 },
                        { Symbol: 6, HSymbol: 6, HStack: 1 },
                        { Symbol: 18, HSymbol: 5, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 18, HSymbol: 1, HStack: 5 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 7.2,
                  AwardDataVec: [{ Symbol: 4, Count: 3, Line: 16, Win: 7.2 }],
                  FillSymbols: [
                    {
                      Col: [
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    { Col: [{ Symbol: 5, HSymbol: 5, HStack: 1 }] },
                    { Col: [{ Symbol: 3, HSymbol: 3, HStack: 1 }] },
                    {},
                    {},
                    {},
                  ],
                  ChangeSymbols: [
                    {},
                    { Col: [{ Symbol: 18, HSymbol: 1, HStack: 8 }] },
                    {},
                    {},
                    {},
                    {},
                  ],
                  Party: [{ LR: 1 }, { LR: 2 }],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 8, HStack: 5 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 1, HStack: 8 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 7 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 5 },
                        { Symbol: 6, HSymbol: 6, HStack: 1 },
                        { Symbol: 18, HSymbol: 5, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 18, HSymbol: 1, HStack: 5 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 2.25,
                  AwardDataVec: [
                    { Symbol: 5, Count: 3, Line: 5, Direction: 1, Win: 2.25 },
                  ],
                  FillSymbols: [
                    {},
                    {},
                    {},
                    {},
                    { Col: [{ Symbol: 12, HSymbol: 12, HStack: 1 }] },
                    { Col: [{ Symbol: 5, HSymbol: 5, HStack: 1 }] },
                  ],
                  ChangeSymbols: [
                    {},
                    {},
                    {},
                    { Col: [{ Symbol: 18, HSymbol: 5, HStack: 6 }] },
                    {},
                    {},
                  ],
                  Party: [{ LR: 1 }, { LR: 2, State: 3, Worked: !0 }],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 8, HStack: 5 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 1, HStack: 8 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 7 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 5 },
                        { Symbol: 6, HSymbol: 6, HStack: 1 },
                        { Symbol: 18, HSymbol: 5, HStack: 6 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 12, HSymbol: 12, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 18, HSymbol: 1, HStack: 5 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 56.7,
                  AwardDataVec: [
                    { Symbol: 5, Count: 3, Line: 36, Direction: 1, Win: 16.2 },
                    { Symbol: 6, Count: 3, Line: 5, Direction: 1, Win: 3 },
                    { Symbol: 7, Count: 5, Line: 25, Direction: 1, Win: 37.5 },
                  ],
                  FillSymbols: [
                    {},
                    { Col: [{ Symbol: 8, HSymbol: 8, HStack: 1 }] },
                    { Col: [{ Symbol: 9, HSymbol: 9, HStack: 1 }] },
                    { Col: [{ Symbol: 3, HSymbol: 3, HStack: 1 }] },
                    { Col: [{ Symbol: 11, HSymbol: 11, HStack: 1 }] },
                    { Col: [{ Symbol: 1, HSymbol: 1, HStack: 1 }] },
                  ],
                  ChangeSymbols: [
                    {},
                    {},
                    {},
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 7 },
                        { Symbol: 18, HSymbol: 1, HStack: 6 },
                      ],
                    },
                    {},
                    { Col: [{ Symbol: 18, HSymbol: 8, HStack: 6 }] },
                  ],
                  Party: [
                    {
                      LR: 1,
                      State: 1,
                      Worked: !0,
                      StackCol: 5,
                      StackRow: 1,
                      HSymbol: 12,
                    },
                    { LR: 2 },
                  ],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 8, HStack: 5 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 1, HStack: 8 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 18, HSymbol: 8, HStack: 7 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 9, HSymbol: 9, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 1, HStack: 6 },
                        { Symbol: 18, HSymbol: 3, HStack: 7 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 11, HSymbol: 11, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 3, HStack: 5 },
                        { Symbol: 18, HSymbol: 8, HStack: 6 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 163.8,
                  AwardDataVec: [
                    { Symbol: 8, Count: 3, Line: 48, Win: 72 },
                    { Symbol: 1, Count: 3, Line: 6, Direction: 1, Win: 1.8 },
                    { Symbol: 3, Count: 4, Line: 200, Direction: 1, Win: 90 },
                  ],
                  FillSymbols: [
                    { Col: [{ Symbol: 3, HSymbol: 3, HStack: 1 }] },
                    { Col: [{ Symbol: 1, HSymbol: 1, HStack: 1 }] },
                    {
                      Col: [
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                    { Col: [{ Symbol: 9, HSymbol: 9, HStack: 1 }] },
                    { Col: [{ Symbol: 7, HSymbol: 7, HStack: 1 }] },
                    { Col: [{ HStack: 1 }] },
                  ],
                  ChangeSymbols: [
                    { Col: [{ Symbol: 18, HSymbol: 9, HStack: 6 }] },
                    {},
                    { Col: [{ Symbol: 18, HSymbol: 1, HStack: 8 }] },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 7 },
                        { Symbol: 18, HSymbol: 8, HStack: 8 },
                      ],
                    },
                    { Col: [{ Symbol: 18, HStack: 6 }] },
                    { Col: [{ Symbol: 18, HSymbol: 11, HStack: 6 }] },
                  ],
                  Party: [{ LR: 1 }, { LR: 2 }],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 9, HStack: 6 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 1, HStack: 8 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 1, HStack: 8 },
                        { Symbol: 9, HSymbol: 9, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 7 },
                        { Symbol: 18, HSymbol: 8, HStack: 8 },
                        { Symbol: 9, HSymbol: 9, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 18, HStack: 6 },
                        { Symbol: 11, HSymbol: 11, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 11, HStack: 6 },
                        { Symbol: 18, HSymbol: 8, HStack: 6 },
                        { HStack: 1 },
                      ],
                    },
                  ],
                  ComboStageWin: 168,
                  AwardDataVec: [{ Symbol: 1, Count: 3, Line: 560, Win: 168 }],
                  FillSymbols: [
                    { Col: [{ Symbol: 1, HSymbol: 1, HStack: 1 }] },
                    {
                      Col: [
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                      ],
                    },
                    {},
                    {},
                    {},
                    {},
                  ],
                  ChangeSymbols: [
                    { Col: [{ Symbol: 18, HSymbol: 4, HStack: 7 }] },
                    { Col: [{ Symbol: 18, HSymbol: 5, HStack: 9 }] },
                    { Col: [{ Symbol: 18, HSymbol: 2, HStack: 9 }] },
                    {},
                    {},
                    {},
                  ],
                  Party: [
                    { LR: 1, State: 2, Worked: !0, HSymbol: 1 },
                    { LR: 2 },
                  ],
                },
                {
                  ComboStageSymbol: [
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 4, HStack: 7 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 3, HSymbol: 3, HStack: 1 },
                        { Symbol: 1, HSymbol: 1, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 5, HStack: 9 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                        { Symbol: 8, HSymbol: 8, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 2, HStack: 9 },
                        { Symbol: 9, HSymbol: 9, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                        { Symbol: 5, HSymbol: 5, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 7, HStack: 7 },
                        { Symbol: 18, HSymbol: 8, HStack: 8 },
                        { Symbol: 9, HSymbol: 9, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { HStack: 1 },
                        { Symbol: 18, HStack: 6 },
                        { Symbol: 11, HSymbol: 11, HStack: 1 },
                        { Symbol: 7, HSymbol: 7, HStack: 1 },
                      ],
                    },
                    {
                      Col: [
                        { Symbol: 18, HSymbol: 11, HStack: 6 },
                        { Symbol: 18, HSymbol: 8, HStack: 6 },
                        { HStack: 1 },
                      ],
                    },
                  ],
                  FillSymbols: [{}, {}, {}, {}, {}, {}],
                  ChangeSymbols: [{}, {}, {}, {}, {}, {}],
                  Party: [{ LR: 1 }, { LR: 2 }],
                },
              ],
              AwardTypeFlag: 1,
              RoundWin: 410.55,
            },
          ],
          TotalWin: 410.55,
          ShowIndex: "17026-282430-26590240",
          NowMoney: 5000407.55,
          Bet: 3,
        }),
          (FeaturesAck.TEST = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 3] },
                      { Col: [5, 6, 1, 2, 4, 4, 2] },
                      { Col: [5, 2, 5, 2, 6, 5, 5] },
                      { Col: [5, 5, 1, 1, 3, 3, 1] },
                      { Col: [3, 5, 2, 6, 1, 3, 5] },
                      { Col: [0, 0, 2, 0, 0, 2, 2] },
                      { Col: [1, 4, 4, 0, 5, 2, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    ComboStageWin: 750,
                    AwardDataVec: [
                      {
                        Symbol: 5,
                        Count: 5,
                        Win: 750,
                        Mult: 1,
                        PosVec: [7, 14, 21, 22, 29],
                      },
                    ],
                    FillSymbols: [
                      {},
                      { Col: [3] },
                      { Col: [3] },
                      { Col: [3, 3] },
                      { Col: [3] },
                      {},
                      {},
                    ],
                    WildPos: -1,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 3] },
                      { Col: [6, 1, 2, 4, 4, 2, 3] },
                      { Col: [2, 5, 2, 6, 5, 5, 3] },
                      { Col: [1, 1, 3, 3, 1, 3, 3] },
                      { Col: [3, 2, 6, 1, 3, 5, 3] },
                      { Col: [0, 0, 2, 0, 0, 2, 2] },
                      { Col: [1, 4, 4, 0, 5, 2, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    ComboStageWin: 500,
                    AwardDataVec: [
                      {
                        Symbol: 3,
                        Count: 6,
                        Win: 500,
                        Mult: 1,
                        PosVec: [6, 13, 20, 26, 27, 34],
                      },
                    ],
                    FillSymbols: [
                      { Col: [2] },
                      { Col: [5] },
                      { Col: [3] },
                      { Col: [3, 0] },
                      { Col: [2] },
                      {},
                      {},
                    ],
                    WildPos: 20,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 2] },
                      { Col: [6, 1, 2, 4, 4, 2, 5] },
                      { Col: [2, 5, 2, 6, 5, 5, 7] },
                      { Col: [1, 1, 3, 3, 1, 3, 0] },
                      { Col: [3, 2, 6, 1, 3, 5, 2] },
                      { Col: [0, 0, 2, 0, 0, 2, 2] },
                      { Col: [1, 4, 4, 0, 5, 2, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 1, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    ComboStageWin: 300,
                    AwardDataVec: [
                      {
                        Symbol: 2,
                        Count: 5,
                        Win: 300,
                        Mult: 1,
                        PosVec: [34, 40, 41, 47, 48],
                      },
                    ],
                    FillSymbols: [
                      {},
                      {},
                      { Col: [2] },
                      {},
                      { Col: [4] },
                      { Col: [4, 4] },
                      { Col: [4, 4] },
                    ],
                    WildPos: -1,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 2] },
                      { Col: [6, 1, 2, 4, 4, 2, 5] },
                      { Col: [2, 5, 2, 6, 5, 5, 2] },
                      { Col: [1, 1, 3, 3, 1, 3, 0] },
                      { Col: [3, 2, 6, 1, 3, 5, 4] },
                      { Col: [0, 0, 2, 0, 0, 4, 4] },
                      { Col: [1, 4, 4, 0, 5, 4, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 2] },
                      { Col: [1, 1, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 2] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                    ],
                    ComboStageWin: 1e3,
                    AwardDataVec: [
                      {
                        Symbol: 4,
                        Count: 5,
                        Win: 1e3,
                        Mult: 2,
                        PosVec: [34, 40, 41, 47, 48],
                      },
                    ],
                    FillSymbols: [
                      {},
                      {},
                      {},
                      {},
                      { Col: [9] },
                      { Col: [4, 4] },
                      { Col: [0, 5] },
                    ],
                    WildPos: 26,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 2] },
                      { Col: [6, 1, 2, 4, 4, 2, 5] },
                      { Col: [2, 5, 2, 6, 5, 5, 2] },
                      { Col: [1, 1, 3, 3, 1, 7, 0] },
                      { Col: [3, 2, 6, 1, 3, 5, 9] },
                      { Col: [0, 0, 2, 0, 0, 4, 4] },
                      { Col: [1, 4, 4, 0, 5, 0, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 2] },
                      { Col: [1, 1, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 4] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                    ],
                    FillSymbols: [
                      {},
                      {},
                      { Col: [1, 1, 5] },
                      { Col: [1, 1, 1] },
                      { Col: [2, 3] },
                      {},
                      {},
                    ],
                    WildPos: -1,
                    BombWildPos: [26],
                    BombedPos: [18, 19, 20, 25, 27, 32, 33],
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 2] },
                      { Col: [6, 1, 2, 4, 4, 2, 5] },
                      { Col: [2, 5, 2, 6, 1, 1, 5] },
                      { Col: [1, 1, 3, 3, 1, 1, 1] },
                      { Col: [3, 2, 6, 1, 9, 2, 3] },
                      { Col: [0, 0, 2, 0, 0, 4, 4] },
                      { Col: [1, 4, 4, 0, 5, 0, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 2] },
                      { Col: [1, 1, 0, 0, 0, 2, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 4] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                    ],
                    ComboStageWin: 500,
                    AwardDataVec: [
                      {
                        Symbol: 1,
                        Count: 5,
                        Win: 500,
                        Mult: 2,
                        PosVec: [18, 19, 25, 26, 27],
                      },
                    ],
                    FillSymbols: [
                      {},
                      {},
                      { Col: [2, 2] },
                      { Col: [6, 6, 6] },
                      {},
                      {},
                      {},
                    ],
                    WildPos: -1,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 2, 1, 5, 1, 1, 2] },
                      { Col: [6, 1, 2, 4, 4, 2, 5] },
                      { Col: [2, 5, 2, 6, 5, 2, 2] },
                      { Col: [1, 1, 3, 3, 6, 6, 6] },
                      { Col: [3, 2, 6, 1, 9, 2, 3] },
                      { Col: [0, 0, 2, 0, 0, 4, 4] },
                      { Col: [1, 4, 4, 0, 5, 0, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 1, 1, 2] },
                      { Col: [1, 1, 0, 0, 1, 4, 2] },
                      { Col: [0, 1, 0, 0, 0, 0, 4] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                      { Col: [0, 0, 0, 0, 0, 2, 2] },
                    ],
                    FillSymbols: [{}, {}, {}, {}, {}, {}, {}],
                    WildPos: -1,
                  },
                ],
                RoundWin: 3050,
                AwardTypeFlag: 1,
              },
            ],
            TotalWin: 3050,
            ShowIndex: "16770-466530-13630198",
            NowMoney: 3071101.442,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b50ff3oeeVPZLhULZOzyKaF",
            "FgCompliment",
            void 0
          );
        var ccclass$7 = _decorator.ccclass,
          property$7 = _decorator.property,
          SKIN_NAME,
          TITLE_NAME,
          ANIMATION_NAME$3;
        !(function (e) {
          (e.NONE = "none"), (e.MG = "Skin_MG_Idle"), (e.BG = "Skin_BG_Idle");
        })(SKIN_NAME || (SKIN_NAME = {})),
          (function (e) {
            (e.NONE = "none"), (e.BG = "BG_"), (e.SBG = "SBG_");
          })(TITLE_NAME || (TITLE_NAME = {})),
          (function (e) {
            (e.NONE = "none"),
              (e.START = "Start"),
              (e.LOOP = "Loop"),
              (e.END = "End");
          })(ANIMATION_NAME$3 || (ANIMATION_NAME$3 = {}));
        var FgCompliment =
            ((_dec$7 = ccclass$7("FgCompliment")),
            (_dec2$7 = property$7({ type: sp.Skeleton, tooltip: "結算Spine" })),
            (_dec3$5 = property$7({ type: Sprite, tooltip: "恭喜" })),
            (_dec4$4 = property$7({ type: Sprite, tooltip: "你贏得" })),
            (_dec5$4 = property$7({ type: Label, tooltip: "分數" })),
            (_dec6$3 = property$7({ type: Label, tooltip: "次數" })),
            _dec$7(
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
                      "m_fgComplimentSkeleton",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_congratSprite",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winSprite",
                      _descriptor3$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_spinLabel",
                      _descriptor5$3,
                      _assertThisInitialized(t)
                    ),
                    (t.m_win = 0),
                    (t.m_isAutoSpin = !1),
                    (t.m_isEnd = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetSkin = function () {
                    this.m_fgComplimentSkeleton.setSkin("");
                  }),
                  (n.ShowStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r,
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
                                  return (
                                    (this.m_isAutoSpin = t),
                                    (this.m_isEnd = !1),
                                    (r = node.GetGameAtlas()),
                                    (this.m_congratSprite.spriteFrame =
                                      r.getSpriteFrame("BG_Count")),
                                    (this.m_winSprite.spriteFrame =
                                      r.getSpriteFrame("TXT_BG_Declare_02")),
                                    (this.m_winLabel.string = "0"),
                                    (this.node.active = !0),
                                    (this.m_win = i),
                                    (this.m_spinLabel.string = n.toString()),
                                    (a = TITLE_NAME.BG),
                                    Game_Define.IsInSBG && (a = TITLE_NAME.SBG),
                                    (s = a + ANIMATION_NAME$3.START),
                                    (l = a + ANIMATION_NAME$3.LOOP),
                                    (c = a + ANIMATION_NAME$3.END),
                                    this.m_fgComplimentSkeleton.setSkin(
                                      "Skin_BG_Idle"
                                    ),
                                    this.RoundWin(),
                                    node$1.Play(Game_Define.AudioClips.FG_End),
                                    (e.next = 19),
                                    SpineKit.PlayAnimation(
                                      this.m_fgComplimentSkeleton,
                                      s
                                    )
                                  );
                                case 19:
                                  return (
                                    o(),
                                    (e.next = 22),
                                    SpineKit.PlayAnimation(
                                      this.m_fgComplimentSkeleton,
                                      l
                                    )
                                  );
                                case 22:
                                  return (
                                    (e.next = 24),
                                    SpineKit.PlayAnimation(
                                      this.m_fgComplimentSkeleton,
                                      c
                                    )
                                  );
                                case 24:
                                  this.m_fgComplimentSkeleton.clearTrack(0),
                                    this.m_fgComplimentSkeleton.setToSetupPose(),
                                    (this.node.active = !1),
                                    this.m_isAutoSpin
                                      ? tween(this.node)
                                          .delay(1)
                                          .call(function () {
                                            u.m_isEnd = !0;
                                          })
                                          .start()
                                      : (this.m_isEnd = !0);
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
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.RoundWin = function () {
                    var e = this,
                      t = node$2.divide(4, 0.02),
                      n = 0,
                      i = node$2.divide(Number(this.m_win), t);
                    tween(this.node)
                      .repeat(
                        t,
                        tween()
                          .call(function () {
                            (n = node$2.plus(n, i)) >= e.m_win && (n = e.m_win),
                              (e.m_winLabel.string =
                                node$2.FormatNumberThousands(
                                  Game_Define.ShowDisplayValue(n),
                                  node$2.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                ));
                          })
                          .delay(0.02)
                      )
                      .call(function () {
                        e.m_winLabel.string = node$2.FormatNumberThousands(
                          Game_Define.ShowDisplayValue(e.m_win),
                          node$2.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        );
                      })
                      .start();
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
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_fgComplimentSkeleton",
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
              (_descriptor2$5 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_congratSprite",
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
              (_descriptor3$4 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_winSprite",
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
              (_descriptor4$4 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_winLabel",
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
              (_descriptor5$3 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_spinLabel",
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
              (_class$7 = _class2$7))
            ) || _class$7),
          _dec$8,
          _dec2$8,
          _dec3$6,
          _dec4$5,
          _dec5$5,
          _class$8,
          _class2$8,
          _descriptor$8,
          _descriptor2$6,
          _descriptor3$5,
          _descriptor4$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "0df30J5LkpKgJdZfYz6Q/RD", "FgCounter", void 0);
        var ccclass$8 = _decorator.ccclass,
          property$8 = _decorator.property,
          ANIMATION_NAME$4;
        !(function (e) {
          (e.NONE = "none"), (e.INCREASE = "Increase"), (e.SHOW = "Show");
        })(ANIMATION_NAME$4 || (ANIMATION_NAME$4 = {}));
        var FgCounter =
            ((_dec$8 = ccclass$8("FgCounter")),
            (_dec2$8 = property$8({ type: Node, tooltip: "背板L" })),
            (_dec3$6 = property$8({ type: Sprite, tooltip: "免費遊戲L" })),
            (_dec4$5 = property$8({ type: Label, tooltip: "局數L" })),
            (_dec5$5 = property$8({ type: Label, tooltip: "總局數" })),
            _dec$8(
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
                      "m_counterL",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundSpriteL",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundLabelL",
                      _descriptor3$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalRoundLabelL",
                      _descriptor4$5,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.SetTxt = function () {
                    var e = node.GetGameAtlas();
                    this.m_roundSpriteL.spriteFrame =
                      e.getSpriteFrame("TXT_FG_Counter_01");
                  }),
                  (n.ShowCounter = function (e) {
                    (this.m_counterL.active = !0),
                      (this.m_roundLabelL.string = e.toString());
                  }),
                  (n.SetRoundNum = function (e) {
                    this.m_roundLabelL.string = e.toString();
                  }),
                  (n.SetTotalRoundNum = function (e) {
                    this.m_totalRoundLabelL.string = e.toString();
                  }),
                  (n.Close = function () {
                    this.m_counterL.active = !1;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_counterL",
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
              (_descriptor2$6 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_roundSpriteL",
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
              (_descriptor3$5 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_roundLabelL",
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
              (_descriptor4$5 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_totalRoundLabelL",
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
              (_class$8 = _class2$8))
            ) || _class$8),
          _dec$9,
          _dec2$9,
          _class$9,
          _class2$9,
          _descriptor$9;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "a32f7WWOO9Gp5LDj1v/zl4U", "Ways", void 0);
        var ccclass$9 = _decorator.ccclass,
          property$9 = _decorator.property,
          Ways =
            ((_dec$9 = ccclass$9("Ways")),
            (_dec2$9 = property$9({ type: Label, tooltip: "MG" })),
            _dec$9(
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
                      "m_waysLabel",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.ShowNode = function (e) {
                    this.node.active = e;
                  }),
                  (n.SetLable = function (e) {
                    this.m_waysLabel.string = e;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_waysLabel",
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
              (_class$9 = _class2$9))
            ) || _class$9),
          _dec$a,
          _dec2$a,
          _dec3$7,
          _dec4$6,
          _dec5$6,
          _dec6$4,
          _dec7$2,
          _dec8$1,
          _dec9,
          _class$a,
          _class2$a,
          _descriptor$a,
          _descriptor2$7,
          _descriptor3$6,
          _descriptor4$6,
          _descriptor5$4,
          _descriptor6$2,
          _descriptor7$1,
          _descriptor8;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e28efJL3BlDIqSra9PMSmzf", "GameBg", void 0);
        var ccclass$a = _decorator.ccclass,
          property$a = _decorator.property,
          ANIMATION_NAME$5;
        !(function (e) {
          (e.NONE = "none"),
            (e.MG = "MG"),
            (e.BG = "BG"),
            (e.SBG = "SBG"),
            (e.START_PARTY_WILD = "Start_PartyWild"),
            (e.START_PARTY_MATCH = "Start_ParthMatch"),
            (e.START_BOTH_WAY = "Start_BothWay"),
            (e.SBG_START_PARTY_WILD = "SBG_Start_PartyWild"),
            (e.SBG_START_PARTY_MATCH = "SBG_Start_ParthMatch"),
            (e.SBG_START_BOTH_WAY = "SBG_Start_BothWay"),
            (e.NEAR_WIN = "NearWin"),
            (e.WIN_BG = "Win_BG"),
            (e.WIN_SBG = "Win_SBG");
        })(ANIMATION_NAME$5 || (ANIMATION_NAME$5 = {}));
        var GameBg =
            ((_dec$a = ccclass$a("GameBg")),
            (_dec2$a = property$a({ type: Node, tooltip: "MG" })),
            (_dec3$7 = property$a({ type: Node, tooltip: "BG" })),
            (_dec4$6 = property$a({ type: Node, tooltip: "SBG" })),
            (_dec5$6 = property$a({
              type: sp.Skeleton,
              tooltip: "FX_Special",
            })),
            (_dec6$4 = property$a({ type: sp.Skeleton, tooltip: "DiscoBall" })),
            (_dec7$2 = property$a({ type: sp.Skeleton, tooltip: "BgFrame" })),
            (_dec8$1 = property$a({ type: Ways, tooltip: "MgWays" })),
            (_dec9 = property$a({ type: Ways, tooltip: "FgWays" })),
            _dec$a(
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
                      "m_mg",
                      _descriptor$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bg",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_sbg",
                      _descriptor3$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fxSpecialB",
                      _descriptor4$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_discoBall",
                      _descriptor5$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bonusFrame",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgWays",
                      _descriptor7$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgWays",
                      _descriptor8,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.ShowMg = function () {
                    (this.m_mg.active = !0),
                      (this.m_bg.active = !1),
                      (this.m_sbg.active = !1),
                      this.m_mgWays.ShowNode(!0),
                      this.m_fgWays.ShowNode(!1),
                      this.PlayAnimation(
                        this.m_discoBall,
                        ANIMATION_NAME$5.MG,
                        !0
                      );
                  }),
                  (n.ShowBg = function () {
                    (this.m_mg.active = !1),
                      (this.m_bg.active = !0),
                      (this.m_sbg.active = !1),
                      this.m_mgWays.ShowNode(!1),
                      this.m_fgWays.ShowNode(!0),
                      this.PlayAnimation(
                        this.m_discoBall,
                        ANIMATION_NAME$5.BG,
                        !0
                      );
                  }),
                  (n.ShowSbg = function () {
                    (this.m_mg.active = !1),
                      (this.m_bg.active = !1),
                      (this.m_sbg.active = !0),
                      this.m_mgWays.ShowNode(!1),
                      this.m_fgWays.ShowNode(!0),
                      this.PlayAnimation(
                        this.m_discoBall,
                        ANIMATION_NAME$5.SBG,
                        !0
                      );
                  }),
                  (n.SetWays = function (e) {
                    this.m_fgWays.SetLable(e), this.m_mgWays.SetLable(e);
                  }),
                  (n.ShowBgFrameNearWin = function () {
                    (this.m_bonusFrame.node.active = !0),
                      this.PlayAnimation(
                        this.m_bonusFrame,
                        ANIMATION_NAME$5.NEAR_WIN,
                        !0
                      );
                  }),
                  (n.ShowBgFrameWin = function () {
                    this.m_bonusFrame.node.active = !0;
                    var e = ANIMATION_NAME$5.WIN_BG;
                    Game_Define.IsInSBG && (e = ANIMATION_NAME$5.WIN_SBG),
                      this.PlayAnimation(this.m_bonusFrame, e);
                  }),
                  (n.SetBgFrame = function (e) {
                    this.m_bonusFrame.node.active = e;
                  }),
                  (n.ShowFxSpecial = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = ""),
                                    (this.m_fxSpecialB.node.active = !0),
                                    (e.t0 = t),
                                    (e.next =
                                      1 === e.t0
                                        ? 5
                                        : 2 === e.t0
                                        ? 8
                                        : 3 === e.t0
                                        ? 11
                                        : 14);
                                  break;
                                case 5:
                                  return (
                                    (n = ANIMATION_NAME$5.START_PARTY_WILD),
                                    Game_Define.IsInSBG &&
                                      (n =
                                        ANIMATION_NAME$5.SBG_START_PARTY_WILD),
                                    e.abrupt("break", 15)
                                  );
                                case 8:
                                  return (
                                    (n = ANIMATION_NAME$5.START_PARTY_MATCH),
                                    Game_Define.IsInSBG &&
                                      (n =
                                        ANIMATION_NAME$5.SBG_START_PARTY_MATCH),
                                    e.abrupt("break", 15)
                                  );
                                case 11:
                                  return (
                                    (n = ANIMATION_NAME$5.START_BOTH_WAY),
                                    Game_Define.IsInSBG &&
                                      (n = ANIMATION_NAME$5.SBG_START_BOTH_WAY),
                                    e.abrupt("break", 15)
                                  );
                                case 14:
                                  return e.abrupt("break", 15);
                                case 15:
                                  return (
                                    (e.next = 17),
                                    this.PlayAnimation(this.m_fxSpecialB, n)
                                  );
                                case 17:
                                  this.m_fxSpecialB.node.active = !1;
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  void 0 === i && (i = !1),
                                  void 0 === o && (o = null),
                                  (e.next = 4),
                                  SpineKit.PlayAnimation(t, n, i, 0, o)
                                );
                              case 4:
                                if (!e.sent) {
                                  e.next = 7;
                                  break;
                                }
                                return e.abrupt("return");
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_mg",
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
              (_descriptor2$7 = _applyDecoratedDescriptor(
                _class2$a.prototype,
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
              (_descriptor3$6 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_sbg",
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
              (_descriptor4$6 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_fxSpecialB",
                [_dec5$6],
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
                _class2$a.prototype,
                "m_discoBall",
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
              (_descriptor6$2 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_bonusFrame",
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
                "m_mgWays",
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
              (_descriptor8 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_fgWays",
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
              (_class$a = _class2$a))
            ) || _class$a),
          _dec$b,
          _dec2$b,
          _dec3$8,
          _dec4$7,
          _dec5$7,
          _dec6$5,
          _dec7$3,
          _dec8$2,
          _dec9$1,
          _class$b,
          _class2$b,
          _descriptor$b,
          _descriptor2$8,
          _descriptor3$7,
          _descriptor4$7,
          _descriptor5$5,
          _descriptor6$3,
          _descriptor7$2,
          _descriptor8$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "a87b7JWG/BMSJTaEBXdv8DT", "GameIntro", void 0);
        var ccclass$b = _decorator.ccclass,
          property$b = _decorator.property,
          ANIMATION_NAME$6;
        !(function (e) {
          (e.GAMEINTRO = "GameIntro"), (e.START = "Start");
        })(ANIMATION_NAME$6 || (ANIMATION_NAME$6 = {}));
        var GameIntro =
            ((_dec$b = ccclass$b("GameIntro")),
            (_dec2$b = property$b({ type: sp.Skeleton, tooltip: "人物Spine" })),
            (_dec3$8 = property$b({ type: sp.Skeleton, tooltip: "人物Spine" })),
            (_dec4$7 = property$b({ type: sp.Skeleton, tooltip: "人物Spine" })),
            (_dec5$7 = property$b({ type: sp.Skeleton, tooltip: "人物Spine" })),
            (_dec6$5 = property$b({ type: Node, tooltip: "第1幕" })),
            (_dec7$3 = property$b({ type: Node, tooltip: "第2幕" })),
            (_dec8$2 = property$b({ type: Node, tooltip: "第3幕" })),
            (_dec9$1 = property$b({ type: Node, tooltip: "第4幕" })),
            _dec$b(
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
                      "m_gameIntro01",
                      _descriptor$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntro02",
                      _descriptor2$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntro03",
                      _descriptor3$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameIntro04",
                      _descriptor4$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_c01",
                      _descriptor5$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_c02",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_c03",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_c04",
                      _descriptor8$1,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function () {
                    this.node.active = !0;
                    for (var e = 0; e < this.m_gameIntro01.length; e++)
                      this.InitSpine(
                        this.m_gameIntro01[e],
                        ANIMATION_NAME$6.START
                      );
                    for (var t = 0; t < this.m_gameIntro02.length; t++)
                      this.InitSpine(
                        this.m_gameIntro02[t],
                        ANIMATION_NAME$6.START
                      );
                    for (var n = 0; n < this.m_gameIntro03.length; n++)
                      this.InitSpine(
                        this.m_gameIntro03[n],
                        ANIMATION_NAME$6.START
                      );
                    for (var i = 0; i < this.m_gameIntro04.length; i++)
                      this.InitSpine(
                        this.m_gameIntro04[i],
                        ANIMATION_NAME$6.START
                      );
                    (this.m_c01.active = !0),
                      (this.m_c02.active = !1),
                      (this.m_c03.active = !1),
                      (this.m_c04.active = !1);
                  }),
                  (n.ShowGameIntro = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), this.Play01();
                                case 2:
                                  return (e.next = 4), this.Play02();
                                case 4:
                                  return (e.next = 6), this.Play03();
                                case 6:
                                  return (e.next = 8), this.Play04();
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.InitSpine = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t.paused = !0),
                                  (e.next = 3),
                                  SpineKit.PlayAnimation(t, n)
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  void 0 === i && (i = !1),
                                  (t.paused = !1),
                                  (e.next = 4),
                                  SpineKit.PlayAnimation(t, n, i)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.Play01 = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t = [], n = 0;
                                    n < this.m_gameIntro01.length;
                                    n++
                                  )
                                    t.push(
                                      this.PlayAnimation(
                                        this.m_gameIntro01[n],
                                        ANIMATION_NAME$6.START
                                      )
                                    );
                                  return (e.next = 4), Promise.all(t);
                                case 4:
                                  this.m_c01.active = !1;
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
                  (n.Play02 = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_c02.active = !0, t = [], n = 0;
                                    n < this.m_gameIntro02.length;
                                    n++
                                  )
                                    t.push(
                                      this.PlayAnimation(
                                        this.m_gameIntro02[n],
                                        ANIMATION_NAME$6.START
                                      )
                                    );
                                  return (e.next = 5), Promise.all(t);
                                case 5:
                                  this.m_c02.active = !1;
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
                  (n.Play03 = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_c03.active = !0, t = [], n = 0;
                                    n < this.m_gameIntro03.length;
                                    n++
                                  )
                                    t.push(
                                      this.PlayAnimation(
                                        this.m_gameIntro03[n],
                                        ANIMATION_NAME$6.START
                                      )
                                    );
                                  return (e.next = 5), Promise.all(t);
                                case 5:
                                  this.m_c03.active = !1;
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
                  (n.Play04 = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_c04.active = !0, t = [], n = 0;
                                    n < this.m_gameIntro04.length;
                                    n++
                                  )
                                    t.push(
                                      this.PlayAnimation(
                                        this.m_gameIntro04[n],
                                        ANIMATION_NAME$6.START
                                      )
                                    );
                                  return (e.next = 5), Promise.all(t);
                                case 5:
                                  this.m_c04.active = !1;
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
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_gameIntro01",
                [_dec2$b],
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
                _class2$b.prototype,
                "m_gameIntro02",
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
              (_descriptor3$7 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_gameIntro03",
                [_dec4$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor4$7 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_gameIntro04",
                [_dec5$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor5$5 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_c01",
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
              (_descriptor6$3 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_c02",
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
              (_descriptor7$2 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_c03",
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
              (_descriptor8$1 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_c04",
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
              (_class$b = _class2$b))
            ) || _class$b),
          _dec$c,
          _class$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "250caesPv5NuIhzDk9eC0t0",
            "BackToMysteryState",
            void 0
          );
        var ccclass$c = _decorator.ccclass,
          BackToMysteryState =
            ((_dec$c = ccclass$c("BackToMysteryState")),
            _dec$c(
              (_class$c = (function (e) {
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
                          i,
                          o,
                          r = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log(
                                      "game state BACK_TO_MYSTERY",
                                      Game_Define.RoundIdx,
                                      Game_Define.PlateIdx
                                    ),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].ComboStageData[Game_Define.PlateIdx]),
                                    (n = t.AwardDataVec),
                                    (i = t.MaxFlag),
                                    (o = t.Party),
                                    (e.next = 7),
                                    this.m_gameView.EffectPlate.ChangeAddStack()
                                  );
                                case 7:
                                  this.m_gameView.SlotReels.ChangeAddStack(!0),
                                    this.CheckPartyActivate(o) ||
                                    (!i &&
                                      n &&
                                      this.m_gameView.SpinAck.RoundQueue &&
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].ComboStageData.length >
                                        Game_Define.PlateIdx - 1)
                                      ? node$4.NextState(
                                          GAME_STATE.CHECK_SCATTER
                                        )
                                      : i
                                      ? (this.m_gameView.SlotReels.NowComboStageSort(),
                                        this.m_gameView.SlotReels.SetSymbolShadow(),
                                        node$5.ShowMessageBox(
                                          node$6.StringKey.MSGBOX_MAX_REWARD,
                                          node$6.StringKey
                                            .MSGBOX_TITLE_SYSTEM_INFO,
                                          function () {
                                            (Game_Define.TotalWin =
                                              r.m_gameView.SpinAck.TotalWin),
                                              r.m_gameView.SetWin(2),
                                              node$4.NextState(
                                                GAME_STATE_BASE.AWARD
                                              );
                                          }
                                        ))
                                      : node$4.NextState(GAME_STATE_BASE.AWARD);
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {
                    this.m_gameView.SlotReels.NowComboStageSort();
                  }),
                  (n.CheckPartyActivate = function (e) {
                    for (var t = 0; t < e.length; t++)
                      if (e[t].Worked) return !0;
                    return !1;
                  }),
                  t
                );
              })(Component))
            ) || _class$c),
          _dec$d,
          _class$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1f5b7fWqsNGsZe/bo5JRcbU",
            "CheckScatterState",
            void 0
          );
        var ccclass$d = _decorator.ccclass,
          CheckScatterState =
            ((_dec$d = ccclass$d("CheckScatterState")),
            _dec$d(
              (_class$d = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_animEnds = new Array()),
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
                                    (log(
                                      "game state CHECK_SCATTER",
                                      Game_Define.RoundIdx,
                                      Game_Define.PlateIdx,
                                      Game_Define.IsInFG,
                                      this.m_gameView.SpinAck.TotalWin
                                    ),
                                    Game_Define.IsInFG ||
                                      this.CheckHasStackAndBothWay())
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  node$4.NextState(GAME_STATE.EXPLODE),
                                    (e.next = 9);
                                  break;
                                case 5:
                                  return (
                                    this.m_gameView.GetRoundQueue(
                                      Game_Define.RoundIdx
                                    ),
                                    (e.next = 8),
                                    this.CheckScatter()
                                  );
                                case 8:
                                  node$4.NextState(GAME_STATE.TRIGGER_MYSTERY);
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  (n.CheckHasStackAndBothWay = function () {
                    for (
                      var e =
                          this.m_gameView.SpinAck.RoundQueue[
                            Game_Define.RoundIdx
                          ].ComboStageData[Game_Define.PlateIdx]
                            .ComboStageSymbol,
                        t = 0;
                      t < e.length;
                      t++
                    )
                      for (var n = 0; n < e[t].Col.length; n++)
                        if (e[t].Col[n].Symbol == SYMBOL_NO.SYMBOL_18)
                          return !0;
                    for (
                      var i =
                          this.m_gameView.SpinAck.RoundQueue[
                            Game_Define.RoundIdx
                          ].ComboStageData[Game_Define.PlateIdx].Party,
                        o = 0;
                      o < i.length;
                      o++
                    )
                      if (3 == i[o].State) return !0;
                    return !1;
                  }),
                  (n.CheckScatter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].ComboStageData[Game_Define.PlateIdx]
                                        .Party),
                                    (n = new Array()),
                                    (i = !1),
                                    (o = Game_Define.RadomDelay),
                                    this.m_gameView.IsHardStop &&
                                      (o = Game_Define.RadomHardDelay),
                                    !t[0].Worked && !t[1].Worked)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 8),
                                    this.m_gameView.EffectPlate.PlayStackDiskFly()
                                  );
                                case 8:
                                  for (r = 0; r < t.length; r++)
                                    (a = t[r].State) &&
                                      ((i = !0),
                                      n.push(
                                        this.m_gameView.NodeSP.PlayRadom(
                                          r,
                                          a,
                                          o
                                        )
                                      ));
                                  return (
                                    i &&
                                      (node$1.Play(
                                        Game_Define.AudioClips.SP_Random
                                      ),
                                      this.m_gameView.CharacterSpine.ShowSpStart()),
                                    (e.next = 12),
                                    Promise.all(n)
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
                  t
                );
              })(Component))
            ) || _class$d),
          _dec$e,
          _class$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "7bdf03M3+BPyqBOwDHBi3w+",
            "ExplodeState",
            void 0
          );
        var ccclass$e = _decorator.ccclass,
          ExplodeState =
            ((_dec$e = ccclass$e("ExplodeState")),
            _dec$e(
              (_class$e = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_isMoreSpin = !1),
                    (n.m_isSmallWinRunning = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    log(
                      "game state EXPLODE",
                      Game_Define.RoundIdx,
                      Game_Define.PlateIdx
                    ),
                      this.Explode();
                  }),
                  (n.OnProcess = function () {
                    !this.m_gameView.EffectPlate.IsExplode ||
                      this.m_isMoreSpin ||
                      this.m_isSmallWinRunning ||
                      node$4.NextState(GAME_STATE.MATCHING_PATCH_UP);
                  }),
                  (n.OnLeave = function () {
                    Game_Define.PlateIdx++;
                  }),
                  (n.Explode = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          n,
                          i,
                          o = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].ComboStageData[Game_Define.PlateIdx]),
                                    (n = t.AwardDataVec),
                                    !(i = t.MaxFlag) &&
                                      n &&
                                      n.length > 0 &&
                                      ((Game_Define.TotalWin +=
                                        this.m_gameView.SpinAck.RoundQueue[
                                          Game_Define.RoundIdx
                                        ].ComboStageData[
                                          Game_Define.PlateIdx
                                        ].ComboStageWin),
                                      this.m_gameView.SetWin(1)),
                                    !(
                                      !i &&
                                      n &&
                                      n.length > 0 &&
                                      this.m_gameView.SpinAck.RoundQueue &&
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].ComboStageData.length >
                                        Game_Define.PlateIdx
                                    ))
                                  ) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (this.m_isSmallWinRunning = !0),
                                    this.m_gameView.CharacterSpine.ShowBgWin(),
                                    (e.next = 9),
                                    this.m_gameView.EffectPlate.EliminatePlate().then(
                                      function () {
                                        o.m_isSmallWinRunning = !1;
                                      }
                                    )
                                  );
                                case 9:
                                  e.next = 12;
                                  break;
                                case 11:
                                  this.ChangeState();
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
                  (n.ChangeState = function () {
                    tween(this)
                      .call(function () {
                        node$4.NextState(GAME_STATE.MATCHING_PATCH_UP);
                      })
                      .start();
                  }),
                  t
                );
              })(BaseState))
            ) || _class$e),
          _dec$f,
          _class$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0ca703aCZtMlaBzbreCFwjV",
            "FirstPlateState",
            void 0
          );
        var ccclass$f = _decorator.ccclass,
          FirstPlateState =
            ((_dec$f = ccclass$f("FirstPlateState")),
            _dec$f(
              (_class$f = (function (e) {
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
                    log("game state FIRST_PLATE");
                  }),
                  (n.OnProcess = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_gameView.SlotReels.IsPlateCleaned
                                    ? Game_Define.IsInFG
                                      ? this.m_gameView.SlotReels.ShowNewPlateFg(
                                          node$3.IsHardStop
                                        )
                                      : this.m_gameView.SlotReels.ShowNewPlate(
                                          node$3.IsHardStop
                                        )
                                    : this.m_gameView.SlotReels.IsInitStop &&
                                      node$4.NextState(
                                        GAME_STATE.CHECK_SCATTER
                                      );
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
                  t
                );
              })(BaseState))
            ) || _class$f),
          _dec$g,
          _class$g;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "bea09OQMiRNH7UIdcl1GRiw",
            "MatchingPatchUpState",
            void 0
          );
        var ccclass$g = _decorator.ccclass,
          MatchingPatchUpState =
            ((_dec$g = ccclass$g("MatchingPatchUpState")),
            _dec$g(
              (_class$g = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_maxFlag = !1),
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
                                  log("game state TILE_MATCHING"),
                                    this.m_gameView.EffectPlate.SetExplode(!1),
                                    this.m_gameView.SlotReels.FillSymbol(
                                      node$3.IsHardStop
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
                  (n.OnProcess = function () {
                    !this.m_maxFlag &&
                      this.m_gameView.SlotReels.IsFill &&
                      (Game_Define.PlateIdx ==
                      this.m_gameView.SpinAck.RoundQueue[Game_Define.RoundIdx]
                        .ComboStageData.length
                        ? node$4.NextState(GAME_STATE_BASE.AWARD)
                        : node$4.NextState(GAME_STATE.BACK_TO_MYSTERY));
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$g),
          _dec$h,
          _class$h;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2139c4AnspNYarVYtCYLQwq",
            "SendFreeStackState",
            void 0
          );
        var ccclass$h = _decorator.ccclass,
          SendFreeStackState =
            ((_dec$h = ccclass$h("SendFreeStackState")),
            _dec$h(
              (_class$h = (function (e) {
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
                                    log("game state SendFreeStackState"),
                                    this.m_gameView.SlotReels.SetFGSymbol(),
                                    this.m_gameView.EffectPlate.SetShadow(!0),
                                    (e.next = 5),
                                    this.m_gameView.DjDeclare.ShowDj()
                                  );
                                case 5:
                                  return (
                                    this.m_gameView.EffectPlate.SetShadow(!1),
                                    (e.next = 8),
                                    this.m_gameView.SlotReels.SbgFirstSpin()
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.SlotReels.FreeStack()
                                  );
                                case 10:
                                  this.m_gameView.ShakeWorld("PartyStar_1"),
                                    node$4.NextState(GAME_STATE.FIRST_PLATE);
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
            ) || _class$h),
          _dec$i,
          _class$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "3947737XL1DLKjyyx7jKA7R",
            "TriggerMysteryState",
            void 0
          );
        var ccclass$i = _decorator.ccclass,
          TriggerMysteryState =
            ((_dec$i = ccclass$i("TriggerMysteryState")),
            _dec$i(
              (_class$i = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_worked = !1),
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
                                    log(
                                      "game state TRIGGER_MYSTERY",
                                      Game_Define.RoundIdx,
                                      Game_Define.PlateIdx
                                    ),
                                    (e.next = 3),
                                    this.DoChange()
                                  );
                                case 3:
                                  if (!this.m_worked) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    this.m_gameView.CharacterSpine.ShowSpEnd()
                                  );
                                case 6:
                                  this.m_gameView.SlotReels.NowComboStageSort();
                                case 7:
                                  node$4.NextState(GAME_STATE.EXPLODE);
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  (n.DoChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          n,
                          i,
                          o = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (t =
                                    this.m_gameView.SpinAck.RoundQueue[
                                      Game_Define.RoundIdx
                                    ].ComboStageData[Game_Define.PlateIdx]
                                      .Party),
                                    (this.m_worked = !1),
                                    t.sort(function (e, t) {
                                      return e.State - t.State;
                                    }),
                                    (n = _regeneratorRuntime().mark(function e(
                                      n
                                    ) {
                                      var i, r, a, s, l, c, u;
                                      return _regeneratorRuntime().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                if (
                                                  ((i = t[n].LR - 1),
                                                  (r = t[n].State),
                                                  (a = t[n].Worked),
                                                  (s = t[n].StackCol),
                                                  (l = t[n].StackRow),
                                                  (c = t[n].HSymbol) || (c = 0),
                                                  s || (s = 0),
                                                  l || (l = 0),
                                                  !a)
                                                ) {
                                                  e.next = 29;
                                                  break;
                                                }
                                                return (
                                                  (o.m_worked = !0),
                                                  o.m_gameView.NodeSP.PlaySpEnd(
                                                    i,
                                                    r
                                                  ),
                                                  (u = function () {
                                                    o.m_gameView.GameBg.ShowFxSpecial(
                                                      r
                                                    );
                                                  }),
                                                  o.m_gameView.CharacterSpine.ShowFxSpecial(
                                                    r,
                                                    u
                                                  ),
                                                  (e.next = 16),
                                                  o.m_gameView.NodeSP.Move(
                                                    i,
                                                    s,
                                                    l,
                                                    r
                                                  )
                                                );
                                              case 16:
                                                if (1 != r && 2 != r) {
                                                  e.next = 23;
                                                  break;
                                                }
                                                return (
                                                  o.m_gameView.NodeSP.specialDeclare(
                                                    r
                                                  ),
                                                  o.m_gameView.SlotReels.StackChange(
                                                    s,
                                                    l,
                                                    c
                                                  ),
                                                  (e.next = 21),
                                                  o.m_gameView.EffectPlate.StackChange(
                                                    s,
                                                    l,
                                                    c
                                                  )
                                                );
                                              case 21:
                                                e.next = 29;
                                                break;
                                              case 23:
                                                if (3 != r) {
                                                  e.next = 29;
                                                  break;
                                                }
                                                return (
                                                  o.m_gameView.BothWay.ShowPermanentEffects(),
                                                  o.m_gameView.BothWay.ShowEffects(),
                                                  (e.next = 28),
                                                  o.m_gameView.NodeSP.specialDeclare(
                                                    r
                                                  )
                                                );
                                              case 28:
                                                node$1.Play(
                                                  Game_Define.AudioClips
                                                    .Both_Ways_Frame
                                                );
                                              case 29:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e
                                      );
                                    })),
                                    (i = 0);
                                case 5:
                                  if (!(i < t.length)) {
                                    e.next = 10;
                                    break;
                                  }
                                  return e.delegateYield(n(i), "t0", 7);
                                case 7:
                                  i++, (e.next = 5);
                                  break;
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
                  t
                );
              })(Component))
            ) || _class$i),
          _dec$j,
          _class$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c129bYejh5BFrTDhqARVS++",
            "RoundShowEndState",
            void 0
          );
        var ccclass$j = _decorator.ccclass,
          RoundShowEndState =
            ((_dec$j = ccclass$j("RoundShowEndState")),
            _dec$j(
              (_class$j = (function (e) {
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
                    log("Game_Define.GAMEVIEW_STATE.RoundShowEndState"),
                      node$4.NextState(CommonState.COMMON_SHOW);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$j),
          _dec$k,
          _class$k;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "bfb5bprfQNEbIQLaNqyMSrF",
            "CheckState",
            void 0
          );
        var ccclass$k = _decorator.ccclass,
          CheckState =
            ((_dec$k = ccclass$k("CheckState")),
            _dec$k(
              (_class$k = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_isLeaveFree = !1),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    var e = this;
                    (function () {
                      var t = _asyncToGenerator(
                        _regeneratorRuntime().mark(function t() {
                          var n;
                          return _regeneratorRuntime().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    (log(
                                      "Game_Define.GAMEVIEW_STATE.CheckState"
                                    ),
                                    (n =
                                      e.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].AddRound),
                                    (e.m_isLeaveFree = !1),
                                    Game_Define.IsInFG ||
                                      !(
                                        Game_Define.RoundIdx <
                                        e.m_gameView.SpinAck.RoundQueue.length -
                                          1
                                      ))
                                  ) {
                                    t.next = 14;
                                    break;
                                  }
                                  return (
                                    (Game_Define.IsInFG = !0),
                                    (Game_Define.IsInSBG =
                                      node$2.ParseAwardTypeFlag(
                                        e.m_gameView.SpinAck.RoundQueue[
                                          Game_Define.RoundIdx
                                        ].AwardTypeFlag,
                                        Game_Define.AWARD_TYPE_FLAG
                                          .AWARD_TYPE_GETSFREE
                                      )),
                                    e.m_gameView.GameBg.ShowBgFrameWin(),
                                    e.m_gameView.CharacterSpine.ShowMgBonusStart(),
                                    (t.next = 10),
                                    e.m_gameView.EffectPlate.PlayerBonus()
                                  );
                                case 10:
                                  e.m_gameView.GameBg.SetBgFrame(!1),
                                    node$4.NextState(GAME_STATE_FG.ENTER_FREE),
                                    (t.next = 15);
                                  break;
                                case 14:
                                  Game_Define.IsInFG &&
                                  Game_Define.RoundIdx >=
                                    e.m_gameView.SpinAck.RoundQueue.length - 1
                                    ? ((Game_Define.IsInFG = !1),
                                      (e.m_isLeaveFree = !0),
                                      node$4.NextState(
                                        GAME_STATE_FG.LEAVE_FREE
                                      ))
                                    : Game_Define.IsInFG && n
                                    ? node$4.NextState(GAME_STATE_FG.ADD_FREE)
                                    : node$4.NextState(
                                        GAME_STATE_BASE.ROUND_END
                                      );
                                case 15:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function () {
                        return t.apply(this, arguments);
                      };
                    })()();
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {
                    this.m_gameView.EffectPlate.Reset(),
                      this.m_gameView.EffectPlate.ResetExplode(),
                      this.m_gameView.EffectPlate.ResetStack();
                  }),
                  t
                );
              })(BaseState))
            ) || _class$k),
          _dec$l,
          _class$l;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "efb9assTuxDCYokeZy5O7EJ",
            "RoundEndState",
            void 0
          );
        var ccclass$l = _decorator.ccclass,
          RoundEndState =
            ((_dec$l = ccclass$l("RoundEndState")),
            _dec$l(
              (_class$l = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_processTick = 0),
                    (n.m_gameView = t),
                    n
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnEnter = function () {
                    if (
                      (log("game state RoundEndState"),
                      this.m_gameView.Reset(),
                      (Game_Define.PlateIdx = 0),
                      !Game_Define.IsInFG)
                    ) {
                      0 === Game_Define.TotalWin ||
                        node$7.IsFeaturesDemoMode ||
                        (Game_Define.TotalWin = 0);
                      var e = this.m_gameView.SpinAck.TotalWin;
                      e || (e = 0);
                    }
                    var t = node$8.TempoSetting.MegaWays4;
                    node$3.IsAutoSpin && !node$3.IsFreeSpin
                      ? this.m_gameView.SpinAck.TotalWin > 0
                        ? (this.m_processTick = t.SPIN_DELAY_TIME.AUTO_WITH_WIN)
                        : (this.m_processTick =
                            t.SPIN_DELAY_TIME.AUTO_WITHOUT_WIN)
                      : (this.m_processTick = t.SPIN_DELAY_TIME.NO_AUTO),
                      this.m_gameView.RetryRoundEnd();
                  }),
                  (n.OnProcess = function (e) {
                    (this.m_processTick = node$2.strip(this.m_processTick - e)),
                      this.m_processTick <= 0 &&
                        node$9.CanToNextRound() &&
                        (!node$a.IsTwice ||
                          (node$a.IsTwice && node$a.IsGetRoundEndAck)) &&
                        (Game_Define.IsInFG &&
                        (Game_Define.RoundIdx > 0 || node$3.IsAutoSpin)
                          ? node$4.NextState(CommonState.SPIN)
                          : Game_Define.IsInFG
                          ? node$4.NextState(CommonState.IDLE)
                          : node$4.NextState(CommonState.END));
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$l),
          _dec$m,
          _class$m;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b2bf2Jfu4tFL6tyf81W0hnA",
            "FeatureShowState",
            void 0
          );
        var ccclass$m = _decorator.ccclass,
          FeatureShowState =
            ((_dec$m = ccclass$m("FeatureShowState")),
            _dec$m(
              (_class$m = (function (e) {
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
                    log("Game_Define.GAMEVIEW_STATE.FEATURE_SHOW"),
                      node$3.CanPlayFeaturesDemo(!0),
                      (Game_Define.IsAutoShowFeatures = !0),
                      node$3.SetBarNodeVisiable(!0),
                      (this.m_gameView.GameIntro.node.active = !1),
                      node$7.AutoShowFeatures();
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$m),
          _dec$n,
          _class$n;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "643c6jCaeVLnY8XPRH9SQio", "IdleState", void 0);
        var ccclass$n = _decorator.ccclass,
          IdleState =
            ((_dec$n = ccclass$n("IdleState")),
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
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Enter = function () {
                    var e = this;
                    log("game state idle"),
                      Game_Define.IsInFG ||
                        node$3.IsFreeSpin ||
                        tween(this)
                          .delay(0.3)
                          .call(function () {
                            e.m_gameView.CharacterSpine.ShowIdle();
                          })
                          .start();
                  }),
                  t
                );
              })(Common_IdleState))
            ) || _class$n),
          _dec$o,
          _class$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ea6baEO/LRGbKtMfjpG5W+A",
            "PlateShowState",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          PlateShowState =
            ((_dec$o = ccclass$o("PlateShowState")),
            _dec$o(
              (_class$o = (function (e) {
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
                                    null != this.m_gameView.BgAudioId &&
                                      node$1.SetVolume(
                                        this.m_gameView.BgAudioId,
                                        0
                                      ),
                                    node$1.Play(
                                      Game_Define.AudioClips.Play_ready
                                    ),
                                    (e.next = 5),
                                    this.m_gameView.GameIntro.ShowGameIntro()
                                  );
                                case 5:
                                  null != this.m_gameView.BgAudioId &&
                                    node$1.SetVolume(
                                      this.m_gameView.BgAudioId,
                                      1
                                    ),
                                    node$3.SetBarNodeVisiable(!0),
                                    node$3.SetSpinState(
                                      SlotBottomBarState.IDLE
                                    ),
                                    node$6.FreeSpinRemain <= 0
                                      ? node$4.NextState(CommonState.IDLE)
                                      : node$4.NextState(
                                          CommonState.CHECK_FREESPIN
                                        ),
                                    node$b.StartAutoShow();
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$o),
          _dec$p,
          _class$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "fa124Iqtr9LHaHFEEe6A6i7", "SpinState", void 0);
        var ccclass$p = _decorator.ccclass,
          SpinState =
            ((_dec$p = ccclass$p("SpinState")),
            _dec$p(
              (_class$p = (function (e) {
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
                    if (
                      ((node$3.IsGameIdle = !1),
                      log("game state SPIN", Date.now(), Game_Define.RoundIdx),
                      node$3.CanPlayFeaturesDemo(!1),
                      node$7.SetBuyBonusState(!1),
                      Tween.stopAllByTarget(this.m_gameView.node),
                      this.m_gameView.BothWay.IsPermanentEffect &&
                        this.m_gameView.BothWay.EndPermanentEffects(),
                      node$a.HasUnshow)
                    )
                      (node$a.HasUnshow = !1),
                        this.m_gameView.OnRecvUnshowSpinAck(
                          this.m_gameView.UnshowSpinAck
                        ),
                        (this.m_gameView.UnshowSpinAck = null);
                    else if (Game_Define.IsInFG) {
                      Game_Define.RoundIdx++, (Game_Define.PlateIdx = 0);
                      var e = node$2.minus(Game_Define.FgRound, 1);
                      (Game_Define.FgRound = e),
                        this.m_gameView.Counter.SetRoundNum(e),
                        this.m_gameView.EffectPlate.ClearReelStop(),
                        this.m_gameView.SlotReels.IsFgFirst &&
                          this.m_gameView.NodeSP.CloseSp(),
                        this.m_gameView.GameBg.SetWays("..."),
                        this.m_gameView.SlotReels.StartSpin(
                          node$3.IsHardStop,
                          node$3.IsAutoSpin
                        );
                      var t = this.m_gameView.GetRoundQueue(
                          Game_Define.RoundIdx
                        ),
                        n = this.m_gameView.GetRoundQueue(
                          Game_Define.RoundIdx
                        ).SBGHeight;
                      this.m_gameView.SlotReels.SetPlateInfo(t),
                        Game_Define.IsInSBG
                          ? this.m_gameView.CharacterSpine.ShowSBGIdle()
                          : this.m_gameView.CharacterSpine.ShowIdle(),
                        n && n.length > 0
                          ? node$4.NextState(GAME_STATE.SEND_FREE_STACK)
                          : node$4.NextState(GAME_STATE.FIRST_PLATE);
                    } else node$7.IsFeaturesDemoMode || this.StartSpin();
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {
                    Game_Define.IsFGFirstSpin = !1;
                  }),
                  (n.StartSpin = function () {
                    node$9.StartSpin(),
                      this.m_gameView.EffectPlate.ClearReelStop(),
                      this.m_gameView.NodeSP.CloseSp(),
                      this.m_gameView.GameBg.SetWays("..."),
                      this.m_gameView.SlotReels.StartSpin(
                        node$3.IsHardStop,
                        node$3.IsAutoSpin
                      ),
                      this.m_gameView.IsHardStop && node$3.SetSpinWithSpeed();
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
            "d687cWeCb9GWqQsBghfZ8VX",
            "WaitReadyState",
            void 0
          );
        var ccclass$q = _decorator.ccclass,
          WaitReadyState =
            ((_dec$q = ccclass$q("WaitReadyState")),
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
                  (n.OnEnter = function () {
                    log("Game_Define.GAMEVIEW_STATE.WAIT_READY"),
                      node$3.ShowGameScene(),
                      node$3.ShowPlayReady(),
                      node$3.SetBarNodeVisiable(!1),
                      (this.m_gameView.GameIntro.node.active = !0),
                      node$c.LoadingComplete(),
                      this.m_gameView.InitExtra();
                  }),
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
            "187d6VUJyhC8ZvVrPADq1Cw",
            "WaitResState",
            void 0
          );
        var ccclass$r = _decorator.ccclass,
          WaitResState =
            ((_dec$r = ccclass$r("WaitResState")),
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
                    log("Game_Define.GAMEVIEW_STATE.WAIT_RES"),
                      this.m_gameView.FeaturesDemoInit();
                  }),
                  (n.OnProcess = function () {
                    Game_Define.AudioClips.Play_ready &&
                      node$3.IsFeaturesDemoLoaded() &&
                      node$4.NextState(GAME_STATE_BASE.WAIT_READY);
                  }),
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
            "fdd22THDv1KuJYfQRTM9DuC",
            "UnshowPrepareState",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          UnshowPrepareState =
            ((_dec$s = ccclass$s("UnshowPrepareState")),
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
                  (n.OnEnter = function () {
                    if (
                      (log("Game_Define.GAMEVIEW_STATE.UNSHOW_PREPARE"),
                      (this.m_gameView.GameIntro.node.active = !1),
                      (Game_Define.RoundIdx = node$a.UnshowStartRound),
                      node$3.SetBarNodeVisiable(!0),
                      Game_Define.RoundIdx >= 1)
                    ) {
                      (Game_Define.IsInFG = !0),
                        (Game_Define.IsInSBG = node$2.ParseAwardTypeFlag(
                          this.m_gameView.UnshowSpinAck.RoundQueue[0]
                            .AwardTypeFlag,
                          Game_Define.AWARD_TYPE_FLAG.AWARD_TYPE_GETSFREE
                        ));
                      var e =
                          this.m_gameView.UnshowSpinAck.RoundQueue[
                            Game_Define.RoundIdx - 1
                          ].FreeTotalRound,
                        t =
                          this.m_gameView.UnshowSpinAck.RoundQueue[
                            Game_Define.RoundIdx - 1
                          ].FreeRemainRound;
                      (Game_Define.FgRound = t),
                        this.m_gameView.GameBg.SetBgFrame(!1),
                        (Game_Define.IsInFGFx = !0),
                        (this.m_gameView.ManualComponent.FeatureInfoBtn.active =
                          !1),
                        (this.m_gameView.ManualComponent.ManulOpenLock = !0),
                        this.m_gameView.CharacterSpine.SetSkin(),
                        Game_Define.IsInFG
                          ? Game_Define.IsInSBG
                            ? this.m_gameView.GameBg.ShowSbg()
                            : this.m_gameView.GameBg.ShowBg()
                          : this.m_gameView.GameBg.ShowMg(),
                        this.m_gameView.NodeReel.setReel(Game_Define.IsInSBG),
                        this.m_gameView.Counter.ShowCounter(t),
                        this.m_gameView.Counter.SetTotalRoundNum(e),
                        Game_Define.RoundIdx > 1 &&
                          (this.m_gameView.SlotReels.IsFgFirst = !1),
                        this.m_gameView.SlotReels.ForceSetKeepSpecials(
                          1 == Game_Define.RoundIdx
                        );
                      for (var n = 0; n < Game_Define.RoundIdx; n++) {
                        var i =
                          this.m_gameView.UnshowSpinAck.RoundQueue[n].RoundWin;
                        Game_Define.TotalWin = node$2.plus(
                          Game_Define.TotalWin,
                          i
                        );
                      }
                      node$3.SetWinValue(Game_Define.TotalWin),
                        node$3.SetEnterFree(),
                        this.m_gameView.ChangeFadeType(FADE_TYPE.OUT),
                        this.m_gameView.ChangeBgMusic(
                          Game_Define.AudioClips.BGM_FG
                        ),
                        this.m_gameView.ChangeFadeType(FADE_TYPE.IN);
                    }
                    (node$7.HasUnshow = !1),
                      node$5.ShowMessageBox(
                        node$6.StringKey.MSGBOX_UNSHOW_BACK,
                        node$6.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                        function () {
                          node$4.NextState(CommonState.SPIN);
                        }
                      );
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$s),
          _dec$t,
          _class$t;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1942aXSNGlGupSzoZKVjwU+",
            "EnterFreeState",
            void 0
          );
        var ccclass$t = _decorator.ccclass,
          EnterFreeState =
            ((_dec$t = ccclass$t("EnterFreeState")),
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
                                    (Game_Define.IsFGFirstSpin = !0),
                                    node$3.SetEnterFree(),
                                    (this.m_gameView.SlotReels.IsFgFirst = !0),
                                    this.m_gameView.ManualComponent.CloseManul(),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[0]
                                        .FreeRemainRound),
                                    (n =
                                      this.m_gameView.SpinAck.RoundQueue[0]
                                        .FreeTotalRound),
                                    (Game_Define.FgRound = t),
                                    Game_Define.IsInSBG
                                      ? node$1.Play(
                                          Game_Define.AudioClips
                                            .Character_Super_Bonus
                                        )
                                      : Game_Define.IsInFG &&
                                        node$1.Play(
                                          Game_Define.AudioClips.Character_Bonus
                                        ),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    node$1.Play(
                                      Game_Define.AudioClips.FG_Declare
                                    ),
                                    (e.next = 13),
                                    this.m_gameView.DeclareSpine.ShowStart(t)
                                  );
                                case 13:
                                  tween(this)
                                    .delay(0.4)
                                    .call(function () {
                                      (Game_Define.IsInFGFx = !0),
                                        (i.m_gameView.ManualComponent.FeatureInfoBtn.active =
                                          !1),
                                        (i.m_gameView.ManualComponent.ManulOpenLock =
                                          !0),
                                        i.m_gameView.CharacterSpine.SetSkin(),
                                        Game_Define.IsInFG
                                          ? Game_Define.IsInSBG
                                            ? i.m_gameView.GameBg.ShowSbg()
                                            : i.m_gameView.GameBg.ShowBg()
                                          : i.m_gameView.GameBg.ShowMg(),
                                        i.m_gameView.NodeReel.setReel(
                                          Game_Define.IsInSBG
                                        ),
                                        i.m_gameView.Counter.ShowCounter(t),
                                        i.m_gameView.Counter.SetTotalRoundNum(
                                          n
                                        );
                                    })
                                    .delay(0.3)
                                    .call(function () {
                                      Game_Define.IsInSBG
                                        ? i.m_gameView.CharacterSpine.ShowFgBonusEnd()
                                        : i.m_gameView.CharacterSpine.ShowBonusEnd(),
                                        i.m_gameView.ChangeBgMusic(
                                          Game_Define.AudioClips.BGM_FG
                                        ),
                                        i.m_gameView.ChangeFadeType(
                                          FADE_TYPE.IN
                                        ),
                                        node$4.NextState(
                                          GAME_STATE_BASE.ROUND_END
                                        );
                                    })
                                    .start();
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
                  (n.OnLeave = function () {
                    node$3.IsAutoSpin &&
                      this.m_gameView.AutoplayInfos.isCheckFree &&
                      node$3.ShowAutoPlayState(!1);
                  }),
                  t
                );
              })(BaseState))
            ) || _class$t),
          _dec$u,
          _class$u;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "af0c6FAOvdB1YZHca+Dcvhd",
            "LeaveFreeState",
            void 0
          );
        var ccclass$u = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$u = ccclass$u("LeaveFreeState")),
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
                        var t,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LEAVE_FREE"),
                                    (e.next = 3),
                                    node$6.Wait(this.m_gameView, 0.2)
                                  );
                                case 3:
                                  return (
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].FreeNowRound),
                                    (n = this.m_gameView.SpinAck.TotalWin),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (this.m_gameView.DeclareSpine.node.active =
                                      !1),
                                    (e.next = 9),
                                    this.m_gameView.Compliment.ShowStart(
                                      node$3.IsAutoSpin,
                                      t,
                                      n,
                                      function () {
                                        (i.m_gameView.ManualComponent.FeatureInfoBtn.active =
                                          !0),
                                          (i.m_gameView.ManualComponent.ManulOpenLock =
                                            !1),
                                          i.m_gameView.Counter.Close(),
                                          i.m_gameView.NodeReel.setReel(
                                            Game_Define.IsInFG
                                          ),
                                          i.m_gameView.CharacterSpine.SetSkin(),
                                          i.m_gameView.GameBg.ShowMg();
                                      }
                                    )
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.OnProcess = function () {
                    this.m_gameView.Compliment.IsEnd &&
                      ((this.m_gameView.Compliment.IsEnd = !1),
                      node$3.SetLeaveFree(),
                      this.m_gameView.ChangeFadeType(FADE_TYPE.IN),
                      this.m_gameView.ChangeBgMusic(
                        Game_Define.AudioClips.BGM_MG
                      ),
                      node$4.NextState(GAME_STATE_BASE.ROUND_END));
                  }),
                  (n.OnLeave = function () {
                    (Game_Define.IsInSBG = !1), (Game_Define.IsInFGFx = !1);
                  }),
                  t
                );
              })(BaseState))
            ) || _class$u),
          _dec$v,
          _class$v;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "d379caGqzdDPoEXZk7V3e6w",
            "AddFreeState",
            void 0
          );
        var ccclass$v = _decorator.ccclass,
          AddFreeState =
            ((_dec$v = ccclass$v("AddFreeState")),
            _dec$v(
              (_class$v = (function (e) {
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
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state ADD_FREE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].FreeRemainRound),
                                    (n =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].FreeTotalRound),
                                    (i =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].AddRound),
                                    (Game_Define.FgRound = t),
                                    this.m_gameView.CharacterSpine.ShowFgBonusStart(),
                                    this.m_gameView.Counter.SetRoundNum(t),
                                    this.m_gameView.Counter.SetTotalRoundNum(n),
                                    node$1.Play(Game_Define.AudioClips.FG_Add),
                                    (e.next = 11),
                                    this.m_gameView.DeclareSpine.ShowMoreSpin(i)
                                  );
                                case 11:
                                  this.m_gameView.CharacterSpine.ShowFgBonusEnd(),
                                    node$4.NextState(GAME_STATE_BASE.ROUND_END);
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
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(Component))
            ) || _class$v);
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
          __cjsMetaURL =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL,
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
        var __cjsMetaURL$1 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
        loader.define(
          __cjsMetaURL$1,
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
        var __cjsMetaURL$2 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
        loader.define(
          __cjsMetaURL$2,
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
        var __cjsMetaURL$3 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
        loader.define(
          __cjsMetaURL$3,
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
        var __cjsMetaURL$4 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
        loader.define(
          __cjsMetaURL$5,
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
        var __cjsMetaURL$6 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$6,
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
        var __cjsMetaURL$7 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$7,
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
            return { "../util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$8 =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$8,
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
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$9,
          function (e, t, n, i, o) {
            n.exports = p;
            var r,
              a = t("./util/minimal"),
              s = a.LongBits,
              l = a.base64,
              c = a.utf8;
            function u(e, t, n) {
              (this.fn = e),
                (this.len = t),
                (this.next = void 0),
                (this.val = n);
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
                (this.head = new u(m, 0, 0)),
                (this.tail = this.head),
                (this.states = null);
            }
            var d = function () {
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
            function h(e, t, n) {
              t[n] = 255 & e;
            }
            function f(e, t) {
              (this.len = e), (this.next = void 0), (this.val = t);
            }
            function S(e, t, n) {
              for (; e.hi; )
                (t[n++] = (127 & e.lo) | 128),
                  (e.lo = ((e.lo >>> 7) | (e.hi << 25)) >>> 0),
                  (e.hi >>>= 7);
              for (; e.lo > 127; )
                (t[n++] = (127 & e.lo) | 128), (e.lo = e.lo >>> 7);
              t[n++] = e.lo;
            }
            function y(e, t, n) {
              (t[n] = 255 & e),
                (t[n + 1] = (e >>> 8) & 255),
                (t[n + 2] = (e >>> 16) & 255),
                (t[n + 3] = e >>> 24);
            }
            (p.create = d()),
              (p.alloc = function (e) {
                return new a.Array(e);
              }),
              a.Array !== Array &&
                (p.alloc = a.pool(p.alloc, a.Array.prototype.subarray)),
              (p.prototype._push = function (e, t, n) {
                return (
                  (this.tail = this.tail.next = new u(e, t, n)),
                  (this.len += t),
                  this
                );
              }),
              (f.prototype = Object.create(u.prototype)),
              (f.prototype.fn = function (e, t, n) {
                for (; e > 127; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
                t[n] = e;
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
                  ? this._push(S, 10, s.fromNumber(e))
                  : this.uint32(e);
              }),
              (p.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (p.prototype.uint64 = function (e) {
                var t = s.from(e);
                return this._push(S, t.length(), t);
              }),
              (p.prototype.int64 = p.prototype.uint64),
              (p.prototype.sint64 = function (e) {
                var t = s.from(e).zzEncode();
                return this._push(S, t.length(), t);
              }),
              (p.prototype.bool = function (e) {
                return this._push(h, 1, e ? 1 : 0);
              }),
              (p.prototype.fixed32 = function (e) {
                return this._push(y, 4, e >>> 0);
              }),
              (p.prototype.sfixed32 = p.prototype.fixed32),
              (p.prototype.fixed64 = function (e) {
                var t = s.from(e);
                return this._push(y, 4, t.lo)._push(y, 4, t.hi);
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
              if (!t) return this._push(h, 1, 0);
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
                  : this._push(h, 1, 0);
              }),
              (p.prototype.fork = function () {
                return (
                  (this.states = new _(this)),
                  (this.head = this.tail = new u(m, 0, 0)),
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
                    : ((this.head = this.tail = new u(m, 0, 0)),
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
                (r = e), (p.create = d()), r._configure();
              }),
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$a =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$a,
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
              "./writer": __cjsMetaURL$9,
              "./util/minimal": __cjsMetaURL$8,
            };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$b,
          function (e, t, n, i, o) {
            n.exports = u;
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
              _ =
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
              p = function () {
                return a.Buffer
                  ? function (e) {
                      return (u.create = function (e) {
                        return a.Buffer.isBuffer(e) ? new r(e) : _(e);
                      })(e);
                    }
                  : _;
              };
            function d() {
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
              if (this.pos + 8 > this.len) throw c(this, 8);
              return new s(
                h(this.buf, (this.pos += 4)),
                h(this.buf, (this.pos += 4))
              );
            }
            (u.create = p()),
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
                return h(this.buf, (this.pos += 4));
              }),
              (u.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw c(this, 4);
                return 0 | h(this.buf, (this.pos += 4));
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
                (r = e), (u.create = p()), r._configure();
                var t = a.Long ? "toLong" : "toNumber";
                a.merge(u.prototype, {
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
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$c =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$c,
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
              "./reader": __cjsMetaURL$b,
              "./util/minimal": __cjsMetaURL$8,
            };
          }
        );
        var __cjsMetaURL$d =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$d,
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
            return { "../util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$e =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
        loader.define(
          __cjsMetaURL$e,
          function (e, t, n, i, o) {
            (e.Service = t("./rpc/service")), n.exports;
          },
          function () {
            return { "./rpc/service": __cjsMetaURL$d };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$f,
          function (e, t, n, i, o) {
            (n.exports = {}), n.exports;
          },
          {}
        );
        var __cjsMetaURL$g =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$g,
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
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
          _cjsExports;
        loader.define(
          __cjsMetaURL$h,
          function (e, t, n, i, o) {
            (n.exports = t("./src/index-minimal")), n.exports;
          },
          function () {
            return { "./src/index-minimal": __cjsMetaURL$g };
          }
        );
        var __cjsMetaURL$i =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/assets/game/Script/Proto/psProto.js",
          _dec$w,
          _dec2$c,
          _dec3$9,
          _dec4$8,
          _dec5$8,
          _class$w,
          _class2$c,
          _descriptor$c,
          _descriptor2$9,
          _descriptor3$8,
          _descriptor4$8;
        loader.define(
          __cjsMetaURL$i,
          function (e, t, n, i, o) {
            var r,
              a = t("protobufjs/minimal"),
              s = a.Reader,
              l = a.Writer,
              c = a.util,
              u = a.roots.default || (a.roots.default = {});
            (u.psProto =
              (((r = {}).MColumn = (function () {
                function e(e) {
                  if (((this.Col = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Col = c.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if ((t || (t = l.create()), null != e.Col && e.Col.length))
                      for (var n = 0; n < e.Col.length; ++n)
                        u.psProto.MSymbol.encode(
                          e.Col[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.MColumn();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.Col && i.Col.length) || (i.Col = []),
                            i.Col.push(u.psProto.MSymbol.decode(e, e.uint32()));
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (null != e.Col && e.hasOwnProperty("Col")) {
                      if (!Array.isArray(e.Col)) return "Col: array expected";
                      for (var t = 0; t < e.Col.length; ++t) {
                        var n = u.psProto.MSymbol.verify(e.Col[t]);
                        if (n) return "Col." + n;
                      }
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.MColumn) return e;
                    var t = new u.psProto.MColumn();
                    if (e.Col) {
                      if (!Array.isArray(e.Col))
                        throw TypeError(".psProto.MColumn.Col: array expected");
                      t.Col = [];
                      for (var n = 0; n < e.Col.length; ++n) {
                        if ("object" != typeof e.Col[n])
                          throw TypeError(
                            ".psProto.MColumn.Col: object expected"
                          );
                        t.Col[n] = u.psProto.MSymbol.fromObject(e.Col[n]);
                      }
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.Col = []),
                      e.Col && e.Col.length)
                    ) {
                      n.Col = [];
                      for (var i = 0; i < e.Col.length; ++i)
                        n.Col[i] = u.psProto.MSymbol.toObject(e.Col[i], t);
                    }
                    return n;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.MColumn"
                    );
                  }),
                  e
                );
              })()),
              (r.MSymbol = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Symbol = 0),
                  (e.prototype.HSymbol = 0),
                  (e.prototype.HStack = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = l.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.HSymbol &&
                        Object.hasOwnProperty.call(e, "HSymbol") &&
                        t.uint32(16).int32(e.HSymbol),
                      null != e.HStack &&
                        Object.hasOwnProperty.call(e, "HStack") &&
                        t.uint32(24).int32(e.HStack),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.MSymbol();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Symbol = e.int32();
                          break;
                        case 2:
                          i.HSymbol = e.int32();
                          break;
                        case 3:
                          i.HStack = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        !c.isInteger(e.Symbol)
                      ? "Symbol: integer expected"
                      : null != e.HSymbol &&
                        e.hasOwnProperty("HSymbol") &&
                        !c.isInteger(e.HSymbol)
                      ? "HSymbol: integer expected"
                      : null != e.HStack &&
                        e.hasOwnProperty("HStack") &&
                        !c.isInteger(e.HStack)
                      ? "HStack: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.MSymbol) return e;
                    var t = new u.psProto.MSymbol();
                    return (
                      null != e.Symbol && (t.Symbol = 0 | e.Symbol),
                      null != e.HSymbol && (t.HSymbol = 0 | e.HSymbol),
                      null != e.HStack && (t.HStack = 0 | e.HStack),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults &&
                        ((n.Symbol = 0), (n.HSymbol = 0), (n.HStack = 0)),
                      null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        (n.Symbol = e.Symbol),
                      null != e.HSymbol &&
                        e.hasOwnProperty("HSymbol") &&
                        (n.HSymbol = e.HSymbol),
                      null != e.HStack &&
                        e.hasOwnProperty("HStack") &&
                        (n.HStack = e.HStack),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.MSymbol"
                    );
                  }),
                  e
                );
              })()),
              (r.PartyData = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.LR = 0),
                  (e.prototype.State = 0),
                  (e.prototype.Worked = !1),
                  (e.prototype.StackCol = 0),
                  (e.prototype.StackRow = 0),
                  (e.prototype.HSymbol = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = l.create()),
                      null != e.LR &&
                        Object.hasOwnProperty.call(e, "LR") &&
                        t.uint32(8).int32(e.LR),
                      null != e.State &&
                        Object.hasOwnProperty.call(e, "State") &&
                        t.uint32(16).int32(e.State),
                      null != e.Worked &&
                        Object.hasOwnProperty.call(e, "Worked") &&
                        t.uint32(24).bool(e.Worked),
                      null != e.StackCol &&
                        Object.hasOwnProperty.call(e, "StackCol") &&
                        t.uint32(32).int32(e.StackCol),
                      null != e.StackRow &&
                        Object.hasOwnProperty.call(e, "StackRow") &&
                        t.uint32(40).int32(e.StackRow),
                      null != e.HSymbol &&
                        Object.hasOwnProperty.call(e, "HSymbol") &&
                        t.uint32(48).int32(e.HSymbol),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.PartyData();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.LR = e.int32();
                          break;
                        case 2:
                          i.State = e.int32();
                          break;
                        case 3:
                          i.Worked = e.bool();
                          break;
                        case 4:
                          i.StackCol = e.int32();
                          break;
                        case 5:
                          i.StackRow = e.int32();
                          break;
                        case 6:
                          i.HSymbol = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.LR &&
                        e.hasOwnProperty("LR") &&
                        !c.isInteger(e.LR)
                      ? "LR: integer expected"
                      : null != e.State &&
                        e.hasOwnProperty("State") &&
                        !c.isInteger(e.State)
                      ? "State: integer expected"
                      : null != e.Worked &&
                        e.hasOwnProperty("Worked") &&
                        "boolean" != typeof e.Worked
                      ? "Worked: boolean expected"
                      : null != e.StackCol &&
                        e.hasOwnProperty("StackCol") &&
                        !c.isInteger(e.StackCol)
                      ? "StackCol: integer expected"
                      : null != e.StackRow &&
                        e.hasOwnProperty("StackRow") &&
                        !c.isInteger(e.StackRow)
                      ? "StackRow: integer expected"
                      : null != e.HSymbol &&
                        e.hasOwnProperty("HSymbol") &&
                        !c.isInteger(e.HSymbol)
                      ? "HSymbol: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.PartyData) return e;
                    var t = new u.psProto.PartyData();
                    return (
                      null != e.LR && (t.LR = 0 | e.LR),
                      null != e.State && (t.State = 0 | e.State),
                      null != e.Worked && (t.Worked = Boolean(e.Worked)),
                      null != e.StackCol && (t.StackCol = 0 | e.StackCol),
                      null != e.StackRow && (t.StackRow = 0 | e.StackRow),
                      null != e.HSymbol && (t.HSymbol = 0 | e.HSymbol),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults &&
                        ((n.LR = 0),
                        (n.State = 0),
                        (n.Worked = !1),
                        (n.StackCol = 0),
                        (n.StackRow = 0),
                        (n.HSymbol = 0)),
                      null != e.LR && e.hasOwnProperty("LR") && (n.LR = e.LR),
                      null != e.State &&
                        e.hasOwnProperty("State") &&
                        (n.State = e.State),
                      null != e.Worked &&
                        e.hasOwnProperty("Worked") &&
                        (n.Worked = e.Worked),
                      null != e.StackCol &&
                        e.hasOwnProperty("StackCol") &&
                        (n.StackCol = e.StackCol),
                      null != e.StackRow &&
                        e.hasOwnProperty("StackRow") &&
                        (n.StackRow = e.StackRow),
                      null != e.HSymbol &&
                        e.hasOwnProperty("HSymbol") &&
                        (n.HSymbol = e.HSymbol),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.PartyData"
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
                  (e.prototype.Symbol = 0),
                  (e.prototype.Count = 0),
                  (e.prototype.Line = 0),
                  (e.prototype.Direction = 0),
                  (e.prototype.Win = 0),
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
                      null != e.Direction &&
                        Object.hasOwnProperty.call(e, "Direction") &&
                        t.uint32(32).int32(e.Direction),
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(41).double(e.Win),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.AwardData();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Symbol = e.int32();
                          break;
                        case 2:
                          i.Count = e.int32();
                          break;
                        case 3:
                          i.Line = e.int32();
                          break;
                        case 4:
                          i.Direction = e.int32();
                          break;
                        case 5:
                          i.Win = e.double();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        !c.isInteger(e.Symbol)
                      ? "Symbol: integer expected"
                      : null != e.Count &&
                        e.hasOwnProperty("Count") &&
                        !c.isInteger(e.Count)
                      ? "Count: integer expected"
                      : null != e.Line &&
                        e.hasOwnProperty("Line") &&
                        !c.isInteger(e.Line)
                      ? "Line: integer expected"
                      : null != e.Direction &&
                        e.hasOwnProperty("Direction") &&
                        !c.isInteger(e.Direction)
                      ? "Direction: integer expected"
                      : null != e.Win &&
                        e.hasOwnProperty("Win") &&
                        "number" != typeof e.Win
                      ? "Win: number expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.AwardData) return e;
                    var t = new u.psProto.AwardData();
                    return (
                      null != e.Symbol && (t.Symbol = 0 | e.Symbol),
                      null != e.Count && (t.Count = 0 | e.Count),
                      null != e.Line && (t.Line = 0 | e.Line),
                      null != e.Direction && (t.Direction = 0 | e.Direction),
                      null != e.Win && (t.Win = Number(e.Win)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults &&
                        ((n.Symbol = 0),
                        (n.Count = 0),
                        (n.Line = 0),
                        (n.Direction = 0),
                        (n.Win = 0)),
                      null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        (n.Symbol = e.Symbol),
                      null != e.Count &&
                        e.hasOwnProperty("Count") &&
                        (n.Count = e.Count),
                      null != e.Line &&
                        e.hasOwnProperty("Line") &&
                        (n.Line = e.Line),
                      null != e.Direction &&
                        e.hasOwnProperty("Direction") &&
                        (n.Direction = e.Direction),
                      null != e.Win &&
                        e.hasOwnProperty("Win") &&
                        (n.Win =
                          t.json && !isFinite(e.Win) ? String(e.Win) : e.Win),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.AwardData"
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
                    (this.ChangeSymbols = []),
                    (this.Party = []),
                    (this.ComboStageSymbolLog = []),
                    e)
                  )
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ComboStageSymbol = c.emptyArray),
                  (e.prototype.ComboStageWin = 0),
                  (e.prototype.AwardDataVec = c.emptyArray),
                  (e.prototype.FillSymbols = c.emptyArray),
                  (e.prototype.ChangeSymbols = c.emptyArray),
                  (e.prototype.Party = c.emptyArray),
                  (e.prototype.MaxFlag = !1),
                  (e.prototype.ComboStageSymbolLog = c.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageSymbol && e.ComboStageSymbol.length)
                    )
                      for (var n = 0; n < e.ComboStageSymbol.length; ++n)
                        u.psProto.MColumn.encode(
                          e.ComboStageSymbol[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.ComboStageWin &&
                        Object.hasOwnProperty.call(e, "ComboStageWin") &&
                        t.uint32(17).double(e.ComboStageWin),
                      null != e.AwardDataVec && e.AwardDataVec.length)
                    )
                      for (n = 0; n < e.AwardDataVec.length; ++n)
                        u.psProto.AwardData.encode(
                          e.AwardDataVec[n],
                          t.uint32(26).fork()
                        ).ldelim();
                    if (null != e.FillSymbols && e.FillSymbols.length)
                      for (n = 0; n < e.FillSymbols.length; ++n)
                        u.psProto.MColumn.encode(
                          e.FillSymbols[n],
                          t.uint32(34).fork()
                        ).ldelim();
                    if (null != e.ChangeSymbols && e.ChangeSymbols.length)
                      for (n = 0; n < e.ChangeSymbols.length; ++n)
                        u.psProto.MColumn.encode(
                          e.ChangeSymbols[n],
                          t.uint32(42).fork()
                        ).ldelim();
                    if (null != e.Party && e.Party.length)
                      for (n = 0; n < e.Party.length; ++n)
                        u.psProto.PartyData.encode(
                          e.Party[n],
                          t.uint32(50).fork()
                        ).ldelim();
                    if (
                      (null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(56).bool(e.MaxFlag),
                      null != e.ComboStageSymbolLog &&
                        e.ComboStageSymbolLog.length)
                    )
                      for (n = 0; n < e.ComboStageSymbolLog.length; ++n)
                        u.psProto.MColumn.encode(
                          e.ComboStageSymbolLog[n],
                          t.uint32(66).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.ComboStageInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.ComboStageSymbol && i.ComboStageSymbol.length) ||
                            (i.ComboStageSymbol = []),
                            i.ComboStageSymbol.push(
                              u.psProto.MColumn.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.ComboStageWin = e.double();
                          break;
                        case 3:
                          (i.AwardDataVec && i.AwardDataVec.length) ||
                            (i.AwardDataVec = []),
                            i.AwardDataVec.push(
                              u.psProto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 4:
                          (i.FillSymbols && i.FillSymbols.length) ||
                            (i.FillSymbols = []),
                            i.FillSymbols.push(
                              u.psProto.MColumn.decode(e, e.uint32())
                            );
                          break;
                        case 5:
                          (i.ChangeSymbols && i.ChangeSymbols.length) ||
                            (i.ChangeSymbols = []),
                            i.ChangeSymbols.push(
                              u.psProto.MColumn.decode(e, e.uint32())
                            );
                          break;
                        case 6:
                          (i.Party && i.Party.length) || (i.Party = []),
                            i.Party.push(
                              u.psProto.PartyData.decode(e, e.uint32())
                            );
                          break;
                        case 7:
                          i.MaxFlag = e.bool();
                          break;
                        case 8:
                          (i.ComboStageSymbolLog &&
                            i.ComboStageSymbolLog.length) ||
                            (i.ComboStageSymbolLog = []),
                            i.ComboStageSymbolLog.push(
                              u.psProto.MColumn.decode(e, e.uint32())
                            );
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.ComboStageSymbol &&
                      e.hasOwnProperty("ComboStageSymbol")
                    ) {
                      if (!Array.isArray(e.ComboStageSymbol))
                        return "ComboStageSymbol: array expected";
                      for (var t = 0; t < e.ComboStageSymbol.length; ++t)
                        if (
                          (n = u.psProto.MColumn.verify(e.ComboStageSymbol[t]))
                        )
                          return "ComboStageSymbol." + n;
                    }
                    if (
                      null != e.ComboStageWin &&
                      e.hasOwnProperty("ComboStageWin") &&
                      "number" != typeof e.ComboStageWin
                    )
                      return "ComboStageWin: number expected";
                    if (
                      null != e.AwardDataVec &&
                      e.hasOwnProperty("AwardDataVec")
                    ) {
                      if (!Array.isArray(e.AwardDataVec))
                        return "AwardDataVec: array expected";
                      for (t = 0; t < e.AwardDataVec.length; ++t)
                        if ((n = u.psProto.AwardData.verify(e.AwardDataVec[t])))
                          return "AwardDataVec." + n;
                    }
                    if (
                      null != e.FillSymbols &&
                      e.hasOwnProperty("FillSymbols")
                    ) {
                      if (!Array.isArray(e.FillSymbols))
                        return "FillSymbols: array expected";
                      for (t = 0; t < e.FillSymbols.length; ++t)
                        if ((n = u.psProto.MColumn.verify(e.FillSymbols[t])))
                          return "FillSymbols." + n;
                    }
                    if (
                      null != e.ChangeSymbols &&
                      e.hasOwnProperty("ChangeSymbols")
                    ) {
                      if (!Array.isArray(e.ChangeSymbols))
                        return "ChangeSymbols: array expected";
                      for (t = 0; t < e.ChangeSymbols.length; ++t)
                        if ((n = u.psProto.MColumn.verify(e.ChangeSymbols[t])))
                          return "ChangeSymbols." + n;
                    }
                    if (null != e.Party && e.hasOwnProperty("Party")) {
                      if (!Array.isArray(e.Party))
                        return "Party: array expected";
                      for (t = 0; t < e.Party.length; ++t)
                        if ((n = u.psProto.PartyData.verify(e.Party[t])))
                          return "Party." + n;
                    }
                    if (
                      null != e.MaxFlag &&
                      e.hasOwnProperty("MaxFlag") &&
                      "boolean" != typeof e.MaxFlag
                    )
                      return "MaxFlag: boolean expected";
                    if (
                      null != e.ComboStageSymbolLog &&
                      e.hasOwnProperty("ComboStageSymbolLog")
                    ) {
                      if (!Array.isArray(e.ComboStageSymbolLog))
                        return "ComboStageSymbolLog: array expected";
                      for (t = 0; t < e.ComboStageSymbolLog.length; ++t) {
                        var n;
                        if (
                          (n = u.psProto.MColumn.verify(
                            e.ComboStageSymbolLog[t]
                          ))
                        )
                          return "ComboStageSymbolLog." + n;
                      }
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.ComboStageInfo) return e;
                    var t = new u.psProto.ComboStageInfo();
                    if (e.ComboStageSymbol) {
                      if (!Array.isArray(e.ComboStageSymbol))
                        throw TypeError(
                          ".psProto.ComboStageInfo.ComboStageSymbol: array expected"
                        );
                      t.ComboStageSymbol = [];
                      for (var n = 0; n < e.ComboStageSymbol.length; ++n) {
                        if ("object" != typeof e.ComboStageSymbol[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.ComboStageSymbol: object expected"
                          );
                        t.ComboStageSymbol[n] = u.psProto.MColumn.fromObject(
                          e.ComboStageSymbol[n]
                        );
                      }
                    }
                    if (
                      (null != e.ComboStageWin &&
                        (t.ComboStageWin = Number(e.ComboStageWin)),
                      e.AwardDataVec)
                    ) {
                      if (!Array.isArray(e.AwardDataVec))
                        throw TypeError(
                          ".psProto.ComboStageInfo.AwardDataVec: array expected"
                        );
                      for (
                        t.AwardDataVec = [], n = 0;
                        n < e.AwardDataVec.length;
                        ++n
                      ) {
                        if ("object" != typeof e.AwardDataVec[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.AwardDataVec: object expected"
                          );
                        t.AwardDataVec[n] = u.psProto.AwardData.fromObject(
                          e.AwardDataVec[n]
                        );
                      }
                    }
                    if (e.FillSymbols) {
                      if (!Array.isArray(e.FillSymbols))
                        throw TypeError(
                          ".psProto.ComboStageInfo.FillSymbols: array expected"
                        );
                      for (
                        t.FillSymbols = [], n = 0;
                        n < e.FillSymbols.length;
                        ++n
                      ) {
                        if ("object" != typeof e.FillSymbols[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.FillSymbols: object expected"
                          );
                        t.FillSymbols[n] = u.psProto.MColumn.fromObject(
                          e.FillSymbols[n]
                        );
                      }
                    }
                    if (e.ChangeSymbols) {
                      if (!Array.isArray(e.ChangeSymbols))
                        throw TypeError(
                          ".psProto.ComboStageInfo.ChangeSymbols: array expected"
                        );
                      for (
                        t.ChangeSymbols = [], n = 0;
                        n < e.ChangeSymbols.length;
                        ++n
                      ) {
                        if ("object" != typeof e.ChangeSymbols[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.ChangeSymbols: object expected"
                          );
                        t.ChangeSymbols[n] = u.psProto.MColumn.fromObject(
                          e.ChangeSymbols[n]
                        );
                      }
                    }
                    if (e.Party) {
                      if (!Array.isArray(e.Party))
                        throw TypeError(
                          ".psProto.ComboStageInfo.Party: array expected"
                        );
                      for (t.Party = [], n = 0; n < e.Party.length; ++n) {
                        if ("object" != typeof e.Party[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.Party: object expected"
                          );
                        t.Party[n] = u.psProto.PartyData.fromObject(e.Party[n]);
                      }
                    }
                    if (
                      (null != e.MaxFlag && (t.MaxFlag = Boolean(e.MaxFlag)),
                      e.ComboStageSymbolLog)
                    ) {
                      if (!Array.isArray(e.ComboStageSymbolLog))
                        throw TypeError(
                          ".psProto.ComboStageInfo.ComboStageSymbolLog: array expected"
                        );
                      for (
                        t.ComboStageSymbolLog = [], n = 0;
                        n < e.ComboStageSymbolLog.length;
                        ++n
                      ) {
                        if ("object" != typeof e.ComboStageSymbolLog[n])
                          throw TypeError(
                            ".psProto.ComboStageInfo.ComboStageSymbolLog: object expected"
                          );
                        t.ComboStageSymbolLog[n] = u.psProto.MColumn.fromObject(
                          e.ComboStageSymbolLog[n]
                        );
                      }
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) &&
                        ((n.ComboStageSymbol = []),
                        (n.AwardDataVec = []),
                        (n.FillSymbols = []),
                        (n.ChangeSymbols = []),
                        (n.Party = []),
                        (n.ComboStageSymbolLog = [])),
                      t.defaults && ((n.ComboStageWin = 0), (n.MaxFlag = !1)),
                      e.ComboStageSymbol && e.ComboStageSymbol.length)
                    ) {
                      n.ComboStageSymbol = [];
                      for (var i = 0; i < e.ComboStageSymbol.length; ++i)
                        n.ComboStageSymbol[i] = u.psProto.MColumn.toObject(
                          e.ComboStageSymbol[i],
                          t
                        );
                    }
                    if (
                      (null != e.ComboStageWin &&
                        e.hasOwnProperty("ComboStageWin") &&
                        (n.ComboStageWin =
                          t.json && !isFinite(e.ComboStageWin)
                            ? String(e.ComboStageWin)
                            : e.ComboStageWin),
                      e.AwardDataVec && e.AwardDataVec.length)
                    )
                      for (
                        n.AwardDataVec = [], i = 0;
                        i < e.AwardDataVec.length;
                        ++i
                      )
                        n.AwardDataVec[i] = u.psProto.AwardData.toObject(
                          e.AwardDataVec[i],
                          t
                        );
                    if (e.FillSymbols && e.FillSymbols.length)
                      for (
                        n.FillSymbols = [], i = 0;
                        i < e.FillSymbols.length;
                        ++i
                      )
                        n.FillSymbols[i] = u.psProto.MColumn.toObject(
                          e.FillSymbols[i],
                          t
                        );
                    if (e.ChangeSymbols && e.ChangeSymbols.length)
                      for (
                        n.ChangeSymbols = [], i = 0;
                        i < e.ChangeSymbols.length;
                        ++i
                      )
                        n.ChangeSymbols[i] = u.psProto.MColumn.toObject(
                          e.ChangeSymbols[i],
                          t
                        );
                    if (e.Party && e.Party.length)
                      for (n.Party = [], i = 0; i < e.Party.length; ++i)
                        n.Party[i] = u.psProto.PartyData.toObject(
                          e.Party[i],
                          t
                        );
                    if (
                      (null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        (n.MaxFlag = e.MaxFlag),
                      e.ComboStageSymbolLog && e.ComboStageSymbolLog.length)
                    )
                      for (
                        n.ComboStageSymbolLog = [], i = 0;
                        i < e.ComboStageSymbolLog.length;
                        ++i
                      )
                        n.ComboStageSymbolLog[i] = u.psProto.MColumn.toObject(
                          e.ComboStageSymbolLog[i],
                          t
                        );
                    return n;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.ComboStageInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.RoundInfo = (function () {
                function e(e) {
                  if (((this.ComboStageData = []), (this.SBGHeight = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ComboStageData = c.emptyArray),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.prototype.FreeRemainRound = 0),
                  (e.prototype.FreeNowRound = 0),
                  (e.prototype.FreeTotalRound = 0),
                  (e.prototype.AddRound = 0),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.SBGHeight = c.emptyArray),
                  (e.prototype.MaxFlag = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageData && e.ComboStageData.length)
                    )
                      for (var n = 0; n < e.ComboStageData.length; ++n)
                        u.psProto.ComboStageInfo.encode(
                          e.ComboStageData[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (
                      (null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(16).int32(e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        Object.hasOwnProperty.call(e, "FreeRemainRound") &&
                        t.uint32(24).int32(e.FreeRemainRound),
                      null != e.FreeNowRound &&
                        Object.hasOwnProperty.call(e, "FreeNowRound") &&
                        t.uint32(32).int32(e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        Object.hasOwnProperty.call(e, "FreeTotalRound") &&
                        t.uint32(40).int32(e.FreeTotalRound),
                      null != e.AddRound &&
                        Object.hasOwnProperty.call(e, "AddRound") &&
                        t.uint32(48).int32(e.AddRound),
                      null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(57).double(e.RoundWin),
                      null != e.SBGHeight && e.SBGHeight.length)
                    ) {
                      for (
                        t.uint32(66).fork(), n = 0;
                        n < e.SBGHeight.length;
                        ++n
                      )
                        t.int32(e.SBGHeight[n]);
                      t.ldelim();
                    }
                    return (
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(72).bool(e.MaxFlag),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.RoundInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.ComboStageData && i.ComboStageData.length) ||
                            (i.ComboStageData = []),
                            i.ComboStageData.push(
                              u.psProto.ComboStageInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.AwardTypeFlag = e.int32();
                          break;
                        case 3:
                          i.FreeRemainRound = e.int32();
                          break;
                        case 4:
                          i.FreeNowRound = e.int32();
                          break;
                        case 5:
                          i.FreeTotalRound = e.int32();
                          break;
                        case 6:
                          i.AddRound = e.int32();
                          break;
                        case 7:
                          i.RoundWin = e.double();
                          break;
                        case 8:
                          if (
                            ((i.SBGHeight && i.SBGHeight.length) ||
                              (i.SBGHeight = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.SBGHeight.push(e.int32());
                          else i.SBGHeight.push(e.int32());
                          break;
                        case 9:
                          i.MaxFlag = e.bool();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.ComboStageData &&
                      e.hasOwnProperty("ComboStageData")
                    ) {
                      if (!Array.isArray(e.ComboStageData))
                        return "ComboStageData: array expected";
                      for (var t = 0; t < e.ComboStageData.length; ++t) {
                        var n = u.psProto.ComboStageInfo.verify(
                          e.ComboStageData[t]
                        );
                        if (n) return "ComboStageData." + n;
                      }
                    }
                    if (
                      null != e.AwardTypeFlag &&
                      e.hasOwnProperty("AwardTypeFlag") &&
                      !c.isInteger(e.AwardTypeFlag)
                    )
                      return "AwardTypeFlag: integer expected";
                    if (
                      null != e.FreeRemainRound &&
                      e.hasOwnProperty("FreeRemainRound") &&
                      !c.isInteger(e.FreeRemainRound)
                    )
                      return "FreeRemainRound: integer expected";
                    if (
                      null != e.FreeNowRound &&
                      e.hasOwnProperty("FreeNowRound") &&
                      !c.isInteger(e.FreeNowRound)
                    )
                      return "FreeNowRound: integer expected";
                    if (
                      null != e.FreeTotalRound &&
                      e.hasOwnProperty("FreeTotalRound") &&
                      !c.isInteger(e.FreeTotalRound)
                    )
                      return "FreeTotalRound: integer expected";
                    if (
                      null != e.AddRound &&
                      e.hasOwnProperty("AddRound") &&
                      !c.isInteger(e.AddRound)
                    )
                      return "AddRound: integer expected";
                    if (
                      null != e.RoundWin &&
                      e.hasOwnProperty("RoundWin") &&
                      "number" != typeof e.RoundWin
                    )
                      return "RoundWin: number expected";
                    if (null != e.SBGHeight && e.hasOwnProperty("SBGHeight")) {
                      if (!Array.isArray(e.SBGHeight))
                        return "SBGHeight: array expected";
                      for (t = 0; t < e.SBGHeight.length; ++t)
                        if (!c.isInteger(e.SBGHeight[t]))
                          return "SBGHeight: integer[] expected";
                    }
                    return null != e.MaxFlag &&
                      e.hasOwnProperty("MaxFlag") &&
                      "boolean" != typeof e.MaxFlag
                      ? "MaxFlag: boolean expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.RoundInfo) return e;
                    var t = new u.psProto.RoundInfo();
                    if (e.ComboStageData) {
                      if (!Array.isArray(e.ComboStageData))
                        throw TypeError(
                          ".psProto.RoundInfo.ComboStageData: array expected"
                        );
                      t.ComboStageData = [];
                      for (var n = 0; n < e.ComboStageData.length; ++n) {
                        if ("object" != typeof e.ComboStageData[n])
                          throw TypeError(
                            ".psProto.RoundInfo.ComboStageData: object expected"
                          );
                        t.ComboStageData[n] =
                          u.psProto.ComboStageInfo.fromObject(
                            e.ComboStageData[n]
                          );
                      }
                    }
                    if (
                      (null != e.AwardTypeFlag &&
                        (t.AwardTypeFlag = 0 | e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        (t.FreeRemainRound = 0 | e.FreeRemainRound),
                      null != e.FreeNowRound &&
                        (t.FreeNowRound = 0 | e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        (t.FreeTotalRound = 0 | e.FreeTotalRound),
                      null != e.AddRound && (t.AddRound = 0 | e.AddRound),
                      null != e.RoundWin && (t.RoundWin = Number(e.RoundWin)),
                      e.SBGHeight)
                    ) {
                      if (!Array.isArray(e.SBGHeight))
                        throw TypeError(
                          ".psProto.RoundInfo.SBGHeight: array expected"
                        );
                      for (t.SBGHeight = [], n = 0; n < e.SBGHeight.length; ++n)
                        t.SBGHeight[n] = 0 | e.SBGHeight[n];
                    }
                    return (
                      null != e.MaxFlag && (t.MaxFlag = Boolean(e.MaxFlag)), t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) &&
                        ((n.ComboStageData = []), (n.SBGHeight = [])),
                      t.defaults &&
                        ((n.AwardTypeFlag = 0),
                        (n.FreeRemainRound = 0),
                        (n.FreeNowRound = 0),
                        (n.FreeTotalRound = 0),
                        (n.AddRound = 0),
                        (n.RoundWin = 0),
                        (n.MaxFlag = !1)),
                      e.ComboStageData && e.ComboStageData.length)
                    ) {
                      n.ComboStageData = [];
                      for (var i = 0; i < e.ComboStageData.length; ++i)
                        n.ComboStageData[i] = u.psProto.ComboStageInfo.toObject(
                          e.ComboStageData[i],
                          t
                        );
                    }
                    if (
                      (null != e.AwardTypeFlag &&
                        e.hasOwnProperty("AwardTypeFlag") &&
                        (n.AwardTypeFlag = e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        e.hasOwnProperty("FreeRemainRound") &&
                        (n.FreeRemainRound = e.FreeRemainRound),
                      null != e.FreeNowRound &&
                        e.hasOwnProperty("FreeNowRound") &&
                        (n.FreeNowRound = e.FreeNowRound),
                      null != e.FreeTotalRound &&
                        e.hasOwnProperty("FreeTotalRound") &&
                        (n.FreeTotalRound = e.FreeTotalRound),
                      null != e.AddRound &&
                        e.hasOwnProperty("AddRound") &&
                        (n.AddRound = e.AddRound),
                      null != e.RoundWin &&
                        e.hasOwnProperty("RoundWin") &&
                        (n.RoundWin =
                          t.json && !isFinite(e.RoundWin)
                            ? String(e.RoundWin)
                            : e.RoundWin),
                      e.SBGHeight && e.SBGHeight.length)
                    )
                      for (n.SBGHeight = [], i = 0; i < e.SBGHeight.length; ++i)
                        n.SBGHeight[i] = e.SBGHeight[i];
                    return (
                      null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        (n.MaxFlag = e.MaxFlag),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.RoundInfo"
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
                  (e.prototype.TotalWin = 0),
                  (e.prototype.ShowIndex = ""),
                  (e.prototype.NowMoney = 0),
                  (e.prototype.AckType = 0),
                  (e.prototype.Bet = 0),
                  (e.prototype.RTP = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var n = 0; n < e.RoundQueue.length; ++n)
                        u.psProto.RoundInfo.encode(
                          e.RoundQueue[n],
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
                      null != e.Bet &&
                        Object.hasOwnProperty.call(e, "Bet") &&
                        t.uint32(57).double(e.Bet),
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(65).double(e.RTP),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.SpinAck();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.RoundQueue && i.RoundQueue.length) ||
                            (i.RoundQueue = []),
                            i.RoundQueue.push(
                              u.psProto.RoundInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          i.FreeTotalWin = e.double();
                          break;
                        case 3:
                          i.TotalWin = e.double();
                          break;
                        case 4:
                          i.ShowIndex = e.string();
                          break;
                        case 5:
                          i.NowMoney = e.double();
                          break;
                        case 6:
                          i.AckType = e.int32();
                          break;
                        case 7:
                          i.Bet = e.double();
                          break;
                        case 8:
                          i.RTP = e.double();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
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
                        var n = u.psProto.RoundInfo.verify(e.RoundQueue[t]);
                        if (n) return "RoundQueue." + n;
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
                        !c.isString(e.ShowIndex)
                      ? "ShowIndex: string expected"
                      : null != e.NowMoney &&
                        e.hasOwnProperty("NowMoney") &&
                        "number" != typeof e.NowMoney
                      ? "NowMoney: number expected"
                      : null != e.AckType &&
                        e.hasOwnProperty("AckType") &&
                        !c.isInteger(e.AckType)
                      ? "AckType: integer expected"
                      : null != e.Bet &&
                        e.hasOwnProperty("Bet") &&
                        "number" != typeof e.Bet
                      ? "Bet: number expected"
                      : null != e.RTP &&
                        e.hasOwnProperty("RTP") &&
                        "number" != typeof e.RTP
                      ? "RTP: number expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof u.psProto.SpinAck) return e;
                    var t = new u.psProto.SpinAck();
                    if (e.RoundQueue) {
                      if (!Array.isArray(e.RoundQueue))
                        throw TypeError(
                          ".psProto.SpinAck.RoundQueue: array expected"
                        );
                      t.RoundQueue = [];
                      for (var n = 0; n < e.RoundQueue.length; ++n) {
                        if ("object" != typeof e.RoundQueue[n])
                          throw TypeError(
                            ".psProto.SpinAck.RoundQueue: object expected"
                          );
                        t.RoundQueue[n] = u.psProto.RoundInfo.fromObject(
                          e.RoundQueue[n]
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
                      null != e.Bet && (t.Bet = Number(e.Bet)),
                      null != e.RTP && (t.RTP = Number(e.RTP)),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.RoundQueue = []),
                      t.defaults &&
                        ((n.FreeTotalWin = 0),
                        (n.TotalWin = 0),
                        (n.ShowIndex = ""),
                        (n.NowMoney = 0),
                        (n.AckType = 0),
                        (n.Bet = 0),
                        (n.RTP = 0)),
                      e.RoundQueue && e.RoundQueue.length)
                    ) {
                      n.RoundQueue = [];
                      for (var i = 0; i < e.RoundQueue.length; ++i)
                        n.RoundQueue[i] = u.psProto.RoundInfo.toObject(
                          e.RoundQueue[i],
                          t
                        );
                    }
                    return (
                      null != e.FreeTotalWin &&
                        e.hasOwnProperty("FreeTotalWin") &&
                        (n.FreeTotalWin =
                          t.json && !isFinite(e.FreeTotalWin)
                            ? String(e.FreeTotalWin)
                            : e.FreeTotalWin),
                      null != e.TotalWin &&
                        e.hasOwnProperty("TotalWin") &&
                        (n.TotalWin =
                          t.json && !isFinite(e.TotalWin)
                            ? String(e.TotalWin)
                            : e.TotalWin),
                      null != e.ShowIndex &&
                        e.hasOwnProperty("ShowIndex") &&
                        (n.ShowIndex = e.ShowIndex),
                      null != e.NowMoney &&
                        e.hasOwnProperty("NowMoney") &&
                        (n.NowMoney =
                          t.json && !isFinite(e.NowMoney)
                            ? String(e.NowMoney)
                            : e.NowMoney),
                      null != e.AckType &&
                        e.hasOwnProperty("AckType") &&
                        (n.AckType = e.AckType),
                      null != e.Bet &&
                        e.hasOwnProperty("Bet") &&
                        (n.Bet =
                          t.json && !isFinite(e.Bet) ? String(e.Bet) : e.Bet),
                      null != e.RTP &&
                        e.hasOwnProperty("RTP") &&
                        (n.RTP =
                          t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP),
                      n
                    );
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.SpinAck"
                    );
                  }),
                  e
                );
              })()),
              (r.GameInfoData = (function () {
                function e(e) {
                  if (((this.Mul = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.ShowExtra = !1),
                  (e.prototype.Mul = c.emptyArray),
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
                      for (var n = 0; n < e.Mul.length; ++n) t.double(e.Mul[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new u.psProto.GameInfoData();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.ShowExtra = e.bool();
                          break;
                        case 2:
                          if (
                            ((i.Mul && i.Mul.length) || (i.Mul = []),
                            2 == (7 & o))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              i.Mul.push(e.double());
                          else i.Mul.push(e.double());
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof s || (e = new s(e)),
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
                    if (e instanceof u.psProto.GameInfoData) return e;
                    var t = new u.psProto.GameInfoData();
                    if (
                      (null != e.ShowExtra &&
                        (t.ShowExtra = Boolean(e.ShowExtra)),
                      e.Mul)
                    ) {
                      if (!Array.isArray(e.Mul))
                        throw TypeError(
                          ".psProto.GameInfoData.Mul: array expected"
                        );
                      t.Mul = [];
                      for (var n = 0; n < e.Mul.length; ++n)
                        t.Mul[n] = Number(e.Mul[n]);
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.Mul = []),
                      t.defaults && (n.ShowExtra = !1),
                      null != e.ShowExtra &&
                        e.hasOwnProperty("ShowExtra") &&
                        (n.ShowExtra = e.ShowExtra),
                      e.Mul && e.Mul.length)
                    ) {
                      n.Mul = [];
                      for (var i = 0; i < e.Mul.length; ++i)
                        n.Mul[i] =
                          t.json && !isFinite(e.Mul[i])
                            ? String(e.Mul[i])
                            : e.Mul[i];
                    }
                    return n;
                  }),
                  (e.prototype.toJSON = function () {
                    return this.constructor.toObject(
                      this,
                      a.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/psProto.GameInfoData"
                    );
                  }),
                  e
                );
              })()),
              r)),
              (n.exports = u),
              (_cjsExports = n.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$h };
          }
        ),
          __cjsMetaURL$i ||
            loader.throwInvalidWrapper(
              "./psProto.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/assets/game/Script/Proto/psProto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$i),
          cclegacy._RF.push({}, "97795va05tFoaOotaFbxDqH", "SlotReels", void 0);
        var ccclass$w = _decorator.ccclass,
          property$c = _decorator.property,
          SYMBOL_MOVE_DISTANCE = 445,
          DEFAULT_PLATE = [
            [4, 4, 8, 8, 0],
            [2, 6, 12, 10, 10],
            [11, 11, 17, 7, 3],
            [11, 11, 16, 7, 3],
            [2, 6, 12, 10, 10],
            [5, 5, 9, 9, 1],
          ],
          ReelStopData = function () {
            (this.Col = void 0), (this.Row = void 0), (this.SymbolNo = void 0);
          },
          SlotReels =
            ((_dec$w = ccclass$w("SlotReels")),
            (_dec2$c = property$c({ type: CharacterSpine, tooltip: "角色" })),
            (_dec3$9 = property$c({ type: Prefab, tooltip: "symbol的Prefab" })),
            (_dec4$8 = property$c({ type: Node, tooltip: "Reel_NearWin" })),
            (_dec5$8 = property$c({ type: Node, tooltip: "層級" })),
            _dec$w(
              ((_class2$c = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(i)) || this).m_gameView =
                      null),
                    (t.m_effectPlate = null),
                    _initializerDefineProperty(
                      t,
                      "m_characterSpine",
                      _descriptor$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbols",
                      _descriptor2$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nearWins",
                      _descriptor3$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_topPlate",
                      _descriptor4$8,
                      _assertThisInitialized(t)
                    ),
                    (t.m_roundQueue = null),
                    (t.m_isHardStop = !1),
                    (t.m_isInitStop = !0),
                    (t.m_isPlateCleaned = !1),
                    (t.m_isFill = !1),
                    (t.m_plateIdx = 0),
                    (t.m_isNearWin = !1),
                    (t.IsFgFirst = !0),
                    (t.reelStops = [!1, !1, !1, !1, !1, !1]),
                    (t.m_symbol = new Array()),
                    (t.m_lastsymbol = []),
                    (t.m_reelY = -210),
                    (t.m_reelPosition = [
                      new Vec2(-250, t.m_reelY),
                      new Vec2(-150, t.m_reelY),
                      new Vec2(-50, t.m_reelY),
                      new Vec2(50, t.m_reelY),
                      new Vec2(150, t.m_reelY),
                      new Vec2(250, t.m_reelY),
                    ]),
                    (t.m_soundid = []),
                    (t.m_keepSpecials = new Array()),
                    (t.m_stackSpine = []),
                    (t.m_newStackSpine = []),
                    (t.m_fillEliminate = new Array()),
                    (t.m_scatterSymbols = []),
                    (t.m_ways = void 0),
                    (t.m_wayCount = 1),
                    (t.m_stackKeep = !1),
                    (t.m_stackAudio = !1),
                    (t.m_stackAudioId = -1),
                    (t.m_fiopSound = []),
                    (t.m_symbolMoveDistance = 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.start = function () {
                    this.DefaultPlate();
                  }),
                  (n.Init = function (e, t) {
                    var n = this;
                    (this.m_gameView = e),
                      (this.m_effectPlate = t),
                      this.m_gameView.GameBg.SetWays("15625");
                    var i = function () {
                      var e = node$8.TempoSetting.MegaWays4;
                      (Game_Define.DELAY_TIME_MG = e.DELAY_TIME_FOR_X.NORMAL),
                        (Game_Define.DELAY_TIME_COL_MG =
                          e.DELAY_TIME_FOR_Y.NORMAL),
                        (Game_Define.SYMBOL_MOVE_NEARWIN_TIME =
                          e.DELAY_TIME_FOR_NW),
                        (Game_Define.DELAY_TIME_LEAVE_MG = e.SYMBOL_MOVE_TIME),
                        (n.m_symbolMoveDistance = e.SYMBOL_MOVE_DISTANCE);
                    };
                    i(), node$8.AddCb(i);
                  }),
                  (n.SetPlateInfo = function (e) {
                    this.m_roundQueue = e;
                    for (
                      var t = this.m_roundQueue.ComboStageData, n = 0;
                      n < t.length;
                      n++
                    )
                      for (
                        var i = t[n].ComboStageSymbol, o = 0;
                        o < Game_Define.COL;
                        o++
                      )
                        for (var r = 0; r < i[o].Col.length; r++) {
                          var a = i[o].Col[r].Symbol,
                            s = i[o].Col[r].HSymbol;
                          if (a == SYMBOL_NO.SYMBOL_18) {
                            i[o].Col.splice(r + 1, 0, {
                              Symbol: -1,
                              HSymbol: -1,
                              HStack: 0,
                            });
                          }
                          a || (i[o].Col[r].Symbol = 0),
                            s || (i[o].Col[r].HSymbol = 0);
                        }
                    this.SortData();
                  }),
                  (n.SortData = function () {
                    var e =
                        this.m_roundQueue.ComboStageData[this.m_plateIdx]
                          .ComboStageSymbol,
                      t =
                        this.m_roundQueue.ComboStageData[this.m_plateIdx]
                          .AwardDataVec,
                      n =
                        this.m_roundQueue.ComboStageData[this.m_plateIdx]
                          .ChangeSymbols;
                    if (t && t.length > 0) {
                      for (var i = [], o = 0; o < t.length; o++) {
                        var r = t[o].Symbol,
                          a = t[o].Direction;
                        r || (t[o].Symbol = 0), a || (t[o].Direction = 0);
                        var s = new Array();
                        if (0 == t[o].Direction) {
                          for (var l = 0; l < e.length; l++) {
                            for (var c = [], u = 0; u < e[l].Col.length; u++) {
                              var m = 0;
                              l < t[o].Count &&
                                (m = this.CheckFill(
                                  t[o],
                                  e[l].Col[u].HSymbol,
                                  e[l].Col[u].Symbol
                                )),
                                c.push(m);
                            }
                            s.push(c);
                          }
                          i.push(s);
                        } else {
                          for (
                            var _ = e.slice().reverse(), p = 0;
                            p < _.length;
                            p++
                          ) {
                            for (var d = [], h = 0; h < _[p].Col.length; h++) {
                              var f = 0;
                              p < t[o].Count &&
                                (f = this.CheckFill(
                                  t[o],
                                  _[p].Col[h].HSymbol,
                                  _[p].Col[h].Symbol
                                )),
                                d.push(f);
                            }
                            s.push(d);
                          }
                          i.push(s.reverse());
                        }
                      }
                      for (var S = new Array(i[0]), y = 1; y < i.length; y++)
                        for (var g = 0; g < S[0].length; g++)
                          for (var b = 0; b < S[0][g].length; b++)
                            0 != i[y][g][b] &&
                              i[y][g][b] > S[0][g][b] &&
                              (S[0][g][b] = i[y][g][b]);
                      this.m_fillEliminate = S[0];
                    }
                    for (var A = 0; A < n.length; A++)
                      if (n[A].Col)
                        for (var w = 0; w < n[A].Col.length; w++) {
                          n[A].Col[w].HSymbol || (n[A].Col[w].HSymbol = 0);
                        }
                  }),
                  (n.StartSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((this.m_plateIdx = 0),
                                    (this.m_isHardStop =
                                      !Game_Define.IsInFG && t),
                                    (this.m_isInitStop = !1),
                                    (this.m_isPlateCleaned = !1),
                                    Game_Define.IsInFG)
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (e.next = 7), this.MgSpin(n);
                                case 7:
                                  (this.m_isPlateCleaned = !0), (e.next = 25);
                                  break;
                                case 10:
                                  if (!this.IsFgFirst || !Game_Define.IsInSBG) {
                                    e.next = 15;
                                    break;
                                  }
                                  (this.IsFgFirst = !1),
                                    (this.m_lastsymbol = new Array(
                                      this.m_symbol
                                    )),
                                    (e.next = 25);
                                  break;
                                case 15:
                                  if (!this.IsFgFirst || Game_Define.IsInSBG) {
                                    e.next = 22;
                                    break;
                                  }
                                  return (
                                    (this.IsFgFirst = !1),
                                    (e.next = 19),
                                    this.MgSpin(n)
                                  );
                                case 19:
                                  (this.m_isPlateCleaned = !0), (e.next = 25);
                                  break;
                                case 22:
                                  return (e.next = 24), this.FgSpin(n);
                                case 24:
                                  this.m_isPlateCleaned = !0;
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.MgSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(), i = new Array(), o = 0;
                                    o < Game_Define.COL;
                                    o++
                                  ) {
                                    for (
                                      r = new Array(), a = 0;
                                      a < Game_Define.ROW;
                                      a++
                                    )
                                      this.m_symbol[o][a] &&
                                        n.push(this.LeavePlate(o, a, !0));
                                    i.push(r);
                                  }
                                  return (
                                    (this.m_stackAudioId = -1),
                                    t ||
                                      node$1.Play(Game_Define.AudioClips.Spin),
                                    (e.next = 7),
                                    Promise.all(n)
                                  );
                                case 7:
                                  this.m_keepSpecials = i;
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
                  (n.FgSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o, r, a, s, l, c, u, m, _, p, d, h, f, S, y;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(),
                                      i = new Array(),
                                      this.m_stackKeep = !1,
                                      o = 0;
                                    o < Game_Define.COL;
                                    o++
                                  ) {
                                    for (
                                      r = this.m_symbol[o].length,
                                        a = new Array(),
                                        s = 0;
                                      s < r;
                                      s++
                                    )
                                      this.m_symbol[o][s] &&
                                        (this.m_symbol[o][s].Symbol !=
                                        SYMBOL_NO.SYMBOL_18
                                          ? n.push(this.LeavePlate(o, s, !0))
                                          : (this.m_symbol[o][s].Spine.setSkin(
                                              Game_Define.Symbol_SkinName
                                                .DEFAULT
                                            ),
                                            this.m_symbol[o][
                                              s
                                            ].Reel.StartSpin(),
                                            a.push(this.m_symbol[o][s]),
                                            a.push(void 0)));
                                    i.push(a);
                                  }
                                  for (
                                    l =
                                      this.m_roundQueue.ComboStageData[
                                        this.m_plateIdx
                                      ].ComboStageSymbol,
                                      c = [],
                                      u = 0;
                                    u < Game_Define.COL;
                                    u++
                                  )
                                    for (
                                      c[u] = [],
                                        m = this.m_symbol[u].length,
                                        _ = 0;
                                      _ < m;
                                      _++
                                    )
                                      (p = l[u].Col[_].Symbol),
                                        (d = u - 1) < 0 && (d = 0),
                                        (h = l[u].Col.length),
                                        (f = l[d].Col.length),
                                        i[u][_] &&
                                          ((this.m_stackKeep = !0),
                                          (S = i[u][_]),
                                          (y =
                                            S.SymbolData.HStack >= 8
                                              ? Game_Define.Symbol_AniName
                                                  .SPIN_GOLD
                                              : Game_Define.Symbol_AniName
                                                  .SPIN),
                                          S.Spine.setAnimation(0, y, !0),
                                          node$2.SetZIndex(
                                            S.node,
                                            Game_Define.ZOrder.STACK
                                          ),
                                          n.push(
                                            this.KeepPlate(
                                              Game_Define.DELAY_TIME_KEEP_FG,
                                              Game_Define.DELAY_TIME_COL_KEEP_FG,
                                              S.node,
                                              p,
                                              u,
                                              _,
                                              h,
                                              f
                                            )
                                          ));
                                  return (
                                    (this.m_stackAudioId = -1),
                                    this.m_stackKeep &&
                                      (this.m_stackAudioId = node$1.Play(
                                        Game_Define.AudioClips.Reel_Reel,
                                        !0
                                      )),
                                    t ||
                                      node$1.Play(Game_Define.AudioClips.Spin),
                                    (e.next = 12),
                                    Promise.all(n)
                                  );
                                case 12:
                                  this.m_keepSpecials = i;
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
                  (n.SbgFirstSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i, o, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t = new Array(), n = new Array(), i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  ) {
                                    for (
                                      o = new Array(), r = 0;
                                      r < Game_Define.ROW;
                                      r++
                                    )
                                      this.m_lastsymbol[0][i][r] &&
                                        t.push(this.FreeLeavePlate(i, r, !0));
                                    n.push(o);
                                  }
                                  return (e.next = 5), Promise.all(t);
                                case 5:
                                  this.m_keepSpecials = n;
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
                  (n.LeavePlate = function (e, t, n) {
                    var i = this,
                      o = Game_Define.DELAY_TIME_LEAVE_MG,
                      r = Game_Define.DELAY_TIME_COL_LEAVE_MG;
                    Game_Define.IsInFG &&
                      ((o = Game_Define.DELAY_TIME_LEAVE_FG),
                      (r = Game_Define.DELAY_TIME_COL_LEAVE_FG));
                    var a = e - 1;
                    a < 0 && (a = 0);
                    var s = this.m_symbol[a].length;
                    return new Promise(function (a) {
                      i.m_symbol[e][t] &&
                        tween(i.m_symbol[e][t].node)
                          .delay(i.GetDelayTime(o, r, e, t, s, !0, n))
                          .by(
                            Game_Define.SYMBOL_MOVE_LEAVE_TIME,
                            { position: v3(0, -i.m_symbolMoveDistance) },
                            { easing: "sineIn" }
                          )
                          .call(function () {
                            var n = i.m_symbol[e][t];
                            (i.m_symbol[e][t] = void 0),
                              NodePool.GetInstance().ReturnSymbol(n),
                              i.node.removeChild(n.node),
                              a();
                          })
                          .start();
                    });
                  }),
                  (n.FreeLeavePlate = function (e, t, n) {
                    var i = this,
                      o = Game_Define.DELAY_TIME_LEAVE_MG,
                      r = Game_Define.DELAY_TIME_COL_LEAVE_MG;
                    Game_Define.IsInFG &&
                      ((o = Game_Define.DELAY_TIME_LEAVE_FG),
                      (r = Game_Define.DELAY_TIME_COL_LEAVE_FG));
                    var a = e - 1;
                    a < 0 && (a = 0);
                    var s = this.m_lastsymbol[0][a].length;
                    return new Promise(function (a) {
                      i.m_lastsymbol[0][e][t] &&
                        tween(i.m_lastsymbol[0][e][t].node)
                          .delay(i.GetDelayTime(o, r, e, t, s, !0, n))
                          .by(
                            Game_Define.SYMBOL_MOVE_LEAVE_TIME,
                            { position: v3(0, -SYMBOL_MOVE_DISTANCE) },
                            { easing: "sineIn" }
                          )
                          .call(function () {
                            var n = i.m_lastsymbol[0][e][t];
                            (i.m_lastsymbol[0][e][t] = void 0),
                              NodePool.GetInstance().ReturnSymbol(n),
                              i.node.removeChild(n.node),
                              a();
                          })
                          .start();
                    });
                  }),
                  (n.KeepPlate = function (e, t, n, i, o, r, a, s) {
                    var l = this,
                      c = this.GetSymbolPosition(o, r);
                    return new Promise(function (i) {
                      n.getPosition().y == c.y
                        ? i()
                        : tween(n)
                            .delay(
                              l.GetDelayTime(e, t, o, r, s, !0, l.m_isHardStop)
                            )
                            .to(
                              Game_Define.SYMBOL_MOVE_KEEP_TIME,
                              { position: v3(c.x, c.y) },
                              { easing: "sineIn" }
                            )
                            .call(
                              _asyncToGenerator(
                                _regeneratorRuntime().mark(function e() {
                                  return _regeneratorRuntime().wrap(function (
                                    e
                                  ) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          n.setPosition(c), i();
                                        case 2:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e);
                                })
                              )
                            )
                            .start();
                    });
                  }),
                  (n.GetDelayTime = function (e, t, n, i, o, r, a, s, l, c) {
                    void 0 === s && (s = !1),
                      void 0 === l && (l = !1),
                      void 0 === c && (c = 0);
                    var u = node$8.TempoSetting.MegaWays4.GET_DELAY_TIME(
                      n + 1,
                      i + 1,
                      a
                    );
                    return (
                      (a && r) || (a && !l)
                        ? (u = 0)
                        : !a && l
                        ? (u += c * Game_Define.SYMBOL_MOVE_NEARWIN_TIME)
                        : a && !r && l
                        ? ((n += 1),
                          (u += c * Game_Define.SYMBOL_MOVE_NEARWIN_TIME))
                        : a && !s && l && (u = 0),
                      u
                    );
                  }),
                  (n.GetNearTime = function (e, t) {
                    return Game_Define.COL * (t * e) + t * e;
                  }),
                  (n.FirstWays = function () {
                    this.m_wayCount = 1;
                    for (
                      var e =
                          this.m_roundQueue.ComboStageData[this.m_plateIdx]
                            .ComboStageSymbol,
                        t = [],
                        n = 0;
                      n < Game_Define.COL;
                      n++
                    ) {
                      for (var i = 0, o = 0; o < e[n].Col.length; o++) {
                        var r = e[n].Col[o].HStack;
                        i = node$2.plus(i, r);
                      }
                      t.push(i);
                    }
                    for (var a = t[0], s = 1; s < t.length; s++)
                      a = node$2.times(a, t[s]);
                    this.m_ways = a.toString();
                  }),
                  (n.WayCount = function (e) {
                    for (
                      var t =
                          this.m_roundQueue.ComboStageData[this.m_plateIdx]
                            .ComboStageSymbol,
                        n = 5,
                        i = 0;
                      i < t[e].Col.length;
                      i++
                    )
                      (18 == t[e].Col[i].Symbol || t[e].Col[i].Symbol < 0) &&
                        n--;
                    (this.m_wayCount *= n),
                      this.m_gameView.GameBg.SetWays(
                        this.m_wayCount.toString()
                      );
                  }),
                  (n.ShowNewPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g,
                          b,
                          A,
                          w,
                          v,
                          $,
                          C,
                          T,
                          D;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.FirstWays(),
                                      this.m_fiopSound = [],
                                      this.m_isHardStop =
                                        !Game_Define.IsInFG && t,
                                      this.m_isPlateCleaned = !1,
                                      n =
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx
                                        ].ComboStageSymbol,
                                      i = new Array(),
                                      this.reelStops = [!1, !1, !1, !1, !1, !1],
                                      this.m_symbol = new Array(),
                                      o = 0,
                                      r = [],
                                      a = 0,
                                      s = !1,
                                      l = !1,
                                      this.m_stackAudio = !1,
                                      this.m_stackSpine = [],
                                      c = 0;
                                    c < Game_Define.COL;
                                    c++
                                  ) {
                                    for (
                                      u = new Array(),
                                        m = new Array(),
                                        r[c] = [],
                                        _ = 0;
                                      _ < n[c].Col.length;
                                      _++
                                    )
                                      -1 != (p = n[c].Col[_].Symbol)
                                        ? ((s = !1),
                                          p || (p = 0),
                                          (d = 0),
                                          (h =
                                            NodePool.GetInstance().CreatSymbol(
                                              p
                                            )).SetSymbolData(n[c].Col[_]),
                                          (f = this.GetSymbolPosition(c, _)),
                                          h.node.setPosition(
                                            f.x,
                                            f.y + Game_Define.SymbolEnterAdd
                                          ),
                                          this.node.insertChild(h.node, 0),
                                          p == SYMBOL_NO.SYMBOL_18
                                            ? ((l = !0),
                                              (this.m_stackAudio = !0),
                                              node$2.SetZIndex(
                                                h.node,
                                                Game_Define.ZOrder.STACK
                                              ),
                                              (S =
                                                h.SymbolData.HStack >= 8
                                                  ? Game_Define.Symbol_AniName
                                                      .SPIN_GOLD
                                                  : Game_Define.Symbol_AniName
                                                      .SPIN),
                                              h.Spine.setSkin(
                                                Game_Define.Symbol_SkinName
                                                  .DEFAULT
                                              ),
                                              h.Spine.setAnimation(0, S, !0),
                                              h.NumSpine.setAnimation(
                                                0,
                                                Game_Define.Symbol_AniName.SPIN,
                                                !0
                                              ),
                                              m.push(h),
                                              this.m_newStackSpine.push(h))
                                            : p == SYMBOL_NO.SYMBOL_16 ||
                                              p == SYMBOL_NO.SYMBOL_17
                                            ? (p == SYMBOL_NO.SYMBOL_16
                                                ? node$2.SetZIndex(
                                                    h.node,
                                                    Game_Define.ZOrder.SCATTER +
                                                      c
                                                  )
                                                : p == SYMBOL_NO.SYMBOL_17 &&
                                                  node$2.SetZIndex(
                                                    h.node,
                                                    Game_Define.ZOrder
                                                      .SUPERSCATTER + c
                                                  ),
                                              (s = !0),
                                              a++,
                                              ((y = new ReelStopData()).Col =
                                                c),
                                              (y.Row = _),
                                              (y.SymbolNo = p),
                                              r[c].push(y),
                                              this.m_scatterSymbols.push(
                                                h.node
                                              ))
                                            : p == SYMBOL_NO.SYMBOL_12 &&
                                              node$2.SetZIndex(
                                                h.node,
                                                Game_Define.ZOrder.WILD
                                              ),
                                          a >= Game_Define.NEAR_COUNT &&
                                            (d = c + 1),
                                          this.m_isNearWin
                                            ? (i.push(
                                                this.EnterPlate(
                                                  Game_Define.DELAY_TIME_MG,
                                                  Game_Define.DELAY_TIME_COL_MG,
                                                  h,
                                                  p,
                                                  c,
                                                  _,
                                                  n[c].Col.length,
                                                  !0,
                                                  0,
                                                  !0,
                                                  !1,
                                                  !0,
                                                  o,
                                                  d,
                                                  s,
                                                  a,
                                                  r
                                                )
                                              ),
                                              o++)
                                            : i.push(
                                                this.EnterPlate(
                                                  Game_Define.DELAY_TIME_MG,
                                                  Game_Define.DELAY_TIME_COL_MG,
                                                  h,
                                                  p,
                                                  c,
                                                  _,
                                                  n[c].Col.length,
                                                  !0,
                                                  0,
                                                  !0,
                                                  !1,
                                                  !1,
                                                  o,
                                                  d,
                                                  s,
                                                  a,
                                                  r
                                                )
                                              ),
                                          u.push(h))
                                        : u.push(void 0);
                                    a >= Game_Define.NEAR_COUNT &&
                                      (this.m_isNearWin = !0),
                                      this.m_symbol.push(u),
                                      this.m_stackSpine.push(m);
                                  }
                                  return (
                                    this.m_isNearWin &&
                                      (this.m_characterSpine.ShowNearWinStart(),
                                      this.m_gameView.GameBg.ShowBgFrameNearWin()),
                                    this.InitSymbolColor(),
                                    (e.next = 20),
                                    Promise.all(i)
                                  );
                                case 20:
                                  for (
                                    this.IsHardStop &&
                                      ((g = Game_Define.AudioClips.Fiop1),
                                      a > 0 && (g = this.ScatterAudio(a)),
                                      node$1.Play(g),
                                      l &&
                                        node$1.Play(
                                          Game_Define.AudioClips.Patry_Reel_Stop
                                        )),
                                      b = 0;
                                    b < this.m_stackSpine.length;
                                    b++
                                  )
                                    for (
                                      A = 0;
                                      A < this.m_stackSpine[b].length;
                                      A++
                                    )
                                      (w =
                                        this.m_stackSpine[b][A].SymbolData
                                          .HSymbol),
                                        this.m_stackSpine[b][A].Reel.ReelStop(
                                          w
                                        );
                                  return (
                                    (e.next = 24),
                                    this.m_effectPlate.ReelAllStop()
                                  );
                                case 24:
                                  for (
                                    node$1.Stop(this.m_stackAudioId), v = 0;
                                    v < this.m_stackSpine.length;
                                    v++
                                  )
                                    for (
                                      $ = 0;
                                      $ < this.m_stackSpine[v].length;
                                      $++
                                    )
                                      (C =
                                        this.m_stackSpine[v][$].SymbolData
                                          .HStack),
                                        (T =
                                          this.m_stackSpine[v][$].SymbolData
                                            .HSymbol),
                                        (D =
                                          Game_Define.Symbol_AniName.IDLE_ + C),
                                        i.push(
                                          this.SetStack(
                                            this.m_stackSpine[v][$].Spine,
                                            T,
                                            D,
                                            this.m_stackSpine[v][$].NumSpine
                                          )
                                        );
                                  return (e.next = 28), Promise.all(i);
                                case 28:
                                  this.m_isNearWin &&
                                    (this.m_characterSpine.ShowNearWinEnd(),
                                    this.CloseReelNearWin(),
                                    (this.m_isNearWin = !1)),
                                    this.m_gameView.GameBg.SetWays(this.m_ways),
                                    (this.m_isInitStop = !0);
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
                  (n.ShowNewPlateFg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g,
                          b,
                          A,
                          w,
                          v;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_fiopSound = [],
                                      this.m_wayCount = 1,
                                      this.m_isHardStop =
                                        !Game_Define.IsInFG && t,
                                      this.m_isPlateCleaned = !1,
                                      n =
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx
                                        ].ComboStageSymbol,
                                      i = this.m_roundQueue.SBGHeight,
                                      o = new Array(),
                                      this.reelStops = [!1, !1, !1, !1, !1, !1],
                                      r = 0,
                                      a = [],
                                      s = 0,
                                      l = !1,
                                      c = 0,
                                      0,
                                      (!i || (i && 0 == i.length)) &&
                                        this.SetFGSymbol(),
                                      u = 0;
                                    u < Game_Define.COL;
                                    u++
                                  ) {
                                    for (
                                      a[u] = [], m = 0;
                                      m < n[u].Col.length;
                                      m++
                                    )
                                      -1 != (_ = n[u].Col[m].Symbol) &&
                                        ((l = !1),
                                        _ || (_ = 0),
                                        this.m_keepSpecials[u][m]
                                          ? ((p = this.m_symbol[u][m]),
                                            o.push(
                                              this.EnterPlate(
                                                Game_Define.DELAY_TIME_MG,
                                                Game_Define.DELAY_TIME_COL_MG,
                                                p,
                                                _,
                                                u,
                                                m,
                                                n[u].Col.length,
                                                !0,
                                                0,
                                                !0,
                                                !1,
                                                !1,
                                                0,
                                                c,
                                                l,
                                                s,
                                                a
                                              )
                                            ))
                                          : ((d = this.m_symbol[u][m]),
                                            _ == SYMBOL_NO.SYMBOL_18
                                              ? (this.m_stackAudio = !0)
                                              : (_ != SYMBOL_NO.SYMBOL_16 &&
                                                  _ != SYMBOL_NO.SYMBOL_17) ||
                                                ((l = !0),
                                                s++,
                                                ((h = new ReelStopData()).Col =
                                                  u),
                                                (h.Row = m),
                                                (h.SymbolNo = _),
                                                a[u].push(h)),
                                            s >= Game_Define.NEAR_COUNT &&
                                              (c = u + 1),
                                            this.m_isNearWin
                                              ? (o.push(
                                                  this.EnterPlate(
                                                    Game_Define.DELAY_TIME_MG,
                                                    Game_Define.DELAY_TIME_COL_MG,
                                                    d,
                                                    _,
                                                    u,
                                                    m,
                                                    n[u].Col.length,
                                                    !0,
                                                    0,
                                                    !0,
                                                    !1,
                                                    !0,
                                                    r,
                                                    c,
                                                    l,
                                                    s,
                                                    a
                                                  )
                                                ),
                                                r++)
                                              : o.push(
                                                  this.EnterPlate(
                                                    Game_Define.DELAY_TIME_MG,
                                                    Game_Define.DELAY_TIME_COL_MG,
                                                    d,
                                                    _,
                                                    u,
                                                    m,
                                                    n[u].Col.length,
                                                    !0,
                                                    0,
                                                    !0,
                                                    !1,
                                                    !1,
                                                    0,
                                                    c,
                                                    l,
                                                    s,
                                                    a
                                                  )
                                                )));
                                    s >= Game_Define.NEAR_COUNT &&
                                      (this.m_isNearWin = !0);
                                  }
                                  return (
                                    this.m_isNearWin &&
                                      (this.m_characterSpine.ShowNearWinStart(),
                                      this.m_gameView.GameBg.ShowBgFrameNearWin()),
                                    (e.next = 19),
                                    node$6.Wait(this, 0)
                                  );
                                case 19:
                                  return (e.next = 21), Promise.all(o);
                                case 21:
                                  for (f = 0; f < this.m_stackSpine.length; f++)
                                    for (
                                      S = 0;
                                      S < this.m_stackSpine[f].length;
                                      S++
                                    )
                                      (y =
                                        this.m_stackSpine[f][S].SymbolData
                                          .HSymbol),
                                        this.m_stackSpine[f][S].Reel.ReelStop(
                                          y
                                        );
                                  return (
                                    (e.next = 24),
                                    this.m_effectPlate.ReelAllStop()
                                  );
                                case 24:
                                  for (
                                    node$1.Stop(this.m_stackAudioId), g = 0;
                                    g < this.m_stackSpine.length;
                                    g++
                                  )
                                    for (
                                      b = 0;
                                      b < this.m_stackSpine[g].length;
                                      b++
                                    )
                                      (A =
                                        this.m_stackSpine[g][b].SymbolData
                                          .HStack),
                                        (w =
                                          this.m_stackSpine[g][b].SymbolData
                                            .HSymbol),
                                        (v =
                                          Game_Define.Symbol_AniName.IDLE_ + A),
                                        o.push(
                                          this.SetStack(
                                            this.m_stackSpine[g][b].Spine,
                                            w,
                                            v,
                                            this.m_stackSpine[g][b].NumSpine
                                          )
                                        );
                                  return (e.next = 28), Promise.all(o);
                                case 28:
                                  this.m_gameView.GameBg.SetWays(this.m_ways),
                                    this.m_isNearWin &&
                                      (this.m_characterSpine.ShowNearWinEnd(),
                                      this.CloseReelNearWin(),
                                      (this.m_isNearWin = !1)),
                                    (this.m_isInitStop = !0);
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
                  (n.ForceSetKeepSpecials = function (e) {
                    void 0 === e && (e = !1);
                    for (var t = 0; t < Game_Define.COL; t++) {
                      for (
                        var n = this.m_symbol[t].length, i = new Array(), o = 0;
                        o < n;
                        o++
                      )
                        this.m_symbol[t][o] &&
                          !e &&
                          this.m_symbol[t][o].Symbol == SYMBOL_NO.SYMBOL_18 &&
                          (this.m_symbol[t][o].Spine.setSkin(
                            Game_Define.Symbol_SkinName.DEFAULT
                          ),
                          i.push(this.m_symbol[t][o]),
                          i.push(void 0));
                      this.m_keepSpecials.push(i);
                    }
                  }),
                  (n.SetFGSymbol = function () {
                    (this.m_symbol = new Array()), (this.m_stackSpine = []);
                    for (
                      var e =
                          this.m_roundQueue.ComboStageData[this.m_plateIdx]
                            .ComboStageSymbol,
                        t = 0;
                      t < Game_Define.COL;
                      t++
                    ) {
                      for (
                        var n = new Array(), i = new Array(), o = 0;
                        o < e[t].Col.length;
                        o++
                      ) {
                        var r = e[t].Col[o].Symbol;
                        if (-1 != r)
                          if ((r || (r = 0), this.m_keepSpecials[t][o])) {
                            var a = this.m_keepSpecials[t][o];
                            a.SetSymbolData(e[t].Col[o]),
                              node$2.SetZIndex(
                                a.node,
                                Game_Define.ZOrder.STACK
                              ),
                              n.push(a),
                              i.push(a);
                          } else {
                            var s = NodePool.GetInstance().CreatSymbol(r);
                            s.SetSymbolData(e[t].Col[o]);
                            var l = this.GetSymbolPosition(t, o);
                            if (
                              (s.node.setPosition(
                                l.x,
                                l.y + Game_Define.SymbolEnterAdd
                              ),
                              this.node.insertChild(s.node, 0),
                              r == SYMBOL_NO.SYMBOL_18)
                            ) {
                              var c =
                                s.SymbolData.HStack >= 8
                                  ? Game_Define.Symbol_AniName.SPIN_GOLD
                                  : Game_Define.Symbol_AniName.SPIN;
                              s.Spine.setSkin(
                                Game_Define.Symbol_SkinName.DEFAULT
                              ),
                                s.Spine.setAnimation(0, c, !0),
                                s.NumSpine.setAnimation(
                                  0,
                                  Game_Define.Symbol_AniName.SPIN,
                                  !0
                                ),
                                node$2.SetZIndex(
                                  s.node,
                                  Game_Define.ZOrder.STACK
                                ),
                                i.push(s),
                                this.m_newStackSpine.push(s);
                            } else
                              r == SYMBOL_NO.SYMBOL_16 ||
                              r == SYMBOL_NO.SYMBOL_17
                                ? (node$2.SetZIndex(
                                    s.node,
                                    Game_Define.ZOrder.SCATTER
                                  ),
                                  this.m_scatterSymbols.push(s.node))
                                : r == SYMBOL_NO.SYMBOL_12 &&
                                  node$2.SetZIndex(
                                    s.node,
                                    Game_Define.ZOrder.WILD
                                  );
                            n.push(s);
                          }
                        else n.push(void 0);
                      }
                      this.m_symbol.push(n), this.m_stackSpine.push(i);
                    }
                  }),
                  (n.EnterPlate = function (
                    e,
                    t,
                    n,
                    i,
                    o,
                    r,
                    a,
                    s,
                    l,
                    c,
                    u,
                    m,
                    _,
                    p,
                    d,
                    h,
                    f
                  ) {
                    var S = this;
                    void 0 === s && (s = !1),
                      void 0 === l && (l = 0),
                      void 0 === c && (c = !1),
                      void 0 === m && (m = !1),
                      void 0 === _ && (_ = 0),
                      void 0 === p && (p = 0),
                      void 0 === d && (d = !1),
                      void 0 === h && (h = 0),
                      void 0 === f && (f = null);
                    var y = this.GetSymbolPosition(o, r);
                    return new Promise(function (u) {
                      var g = n.node.getPosition(),
                        b = r == a - 2 && i == SYMBOL_NO.SYMBOL_18;
                      g.y == y.y
                        ? u()
                        : tween(n.node)
                            .delay(l)
                            .delay(
                              S.GetDelayTime(
                                e,
                                t,
                                o,
                                r,
                                a,
                                s,
                                S.m_isHardStop,
                                c,
                                m,
                                _
                              )
                            )
                            .to(
                              Game_Define.SYMBOL_MOVE_TIME,
                              { position: v3(y.x, y.y) },
                              { easing: "sineIn" }
                            )
                            .call(function () {
                              i == SYMBOL_NO.SYMBOL_18 &&
                                (-1 == S.m_stackAudioId &&
                                  !S.m_stackKeep &&
                                  c &&
                                  ((S.m_stackAudioId = node$1.Play(
                                    Game_Define.AudioClips.Reel_Reel,
                                    !0
                                  )),
                                  (S.m_stackAudio = !1)),
                                c && n.Reel.StartSpin());
                            })
                            .by(node$2.divide(3, 60), {
                              position: v3(
                                0,
                                d ? 0 : Game_Define.BOUNCE_DISTANCE
                              ),
                            })
                            .by(node$2.divide(2, 60), {
                              position: v3(
                                0,
                                d
                                  ? 0
                                  : Game_Define.FALL_OVER_DISTANCE -
                                      Game_Define.BOUNCE_DISTANCE
                              ),
                            })
                            .call(
                              _asyncToGenerator(
                                _regeneratorRuntime().mark(function e() {
                                  var t, l, c, m;
                                  return _regeneratorRuntime().wrap(function (
                                    e
                                  ) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (
                                            (n.node.setPosition(y),
                                            y.y !=
                                              S.m_reelPosition[o].y +
                                                Game_Define.SymbolSize * r)
                                          ) {
                                            e.next = 21;
                                            break;
                                          }
                                          if (((t = null), S.IsHardStop)) {
                                            e.next = 18;
                                            break;
                                          }
                                          (S.reelStops[o] = !0),
                                            (l = !1),
                                            (c = 0);
                                        case 7:
                                          if (!(c < S.m_fiopSound.length)) {
                                            e.next = 14;
                                            break;
                                          }
                                          if (o != S.m_fiopSound[c]) {
                                            e.next = 11;
                                            break;
                                          }
                                          return (
                                            (l = !0), e.abrupt("break", 14)
                                          );
                                        case 11:
                                          c++, (e.next = 7);
                                          break;
                                        case 14:
                                          d && (t = S.ScatterAudio(h)),
                                            t && node$1.Play(t),
                                            i == SYMBOL_NO.SYMBOL_18 &&
                                              node$1.Play(
                                                Game_Define.AudioClips
                                                  .Patry_Reel_Stop
                                              ),
                                            l ||
                                              (S.m_fiopSound.push(o),
                                              node$1.Play(
                                                Game_Define.AudioClips.Fiop1
                                              ));
                                        case 18:
                                          S.IsHardStop ||
                                            0 == p ||
                                            (((i != SYMBOL_NO.SYMBOL_18 &&
                                              r == Game_Define.ROW - 1) ||
                                              (i == SYMBOL_NO.SYMBOL_18 &&
                                                r == Game_Define.ROW - 2)) &&
                                              S.OpenReelNearWin(p)),
                                            f &&
                                              s &&
                                              ((i != SYMBOL_NO.SYMBOL_16 &&
                                                i != SYMBOL_NO.SYMBOL_17) ||
                                                ((m = f[o].shift()),
                                                S.m_effectPlate.ReelStop(m))),
                                            i == SYMBOL_NO.SYMBOL_18 &&
                                              s &&
                                              S.m_gameView.ShakeWorld(
                                                "PartyStar_2"
                                              );
                                        case 21:
                                          s &&
                                            (r == a - 1 || b) &&
                                            S.WayCount(o),
                                            u();
                                        case 23:
                                        case "end":
                                          return e.stop();
                                      }
                                  },
                                  e);
                                })
                              )
                            )
                            .start();
                    });
                  }),
                  (n.EliminatePlate = function (e, t) {
                    if (
                      (void 0 === e && (e = -1),
                      void 0 === t && (t = -1),
                      e >= 0 && t >= 0)
                    )
                      NodePool.GetInstance().ReturnSymbol(this.m_symbol[e][t]);
                    else
                      for (var n = 0; n < Game_Define.COL; n++)
                        if (this.m_fillEliminate[n])
                          for (
                            var i = 0;
                            i < this.m_fillEliminate[n].length;
                            i++
                          ) {
                            1 == this.m_fillEliminate[n][i] &&
                              NodePool.GetInstance().ReturnSymbol(
                                this.m_symbol[n][i]
                              );
                          }
                  }),
                  (n.SetStackSymbol = function (e, t, n) {
                    this.m_stackSpine[e][t] &&
                      (this.m_stackSpine[e][t].node.active = n);
                  }),
                  (n.SetSymbol = function (e, t, n) {
                    this.m_symbol[e][t] &&
                      (this.m_symbol[e][t].node.active = n);
                  }),
                  (n.SetSymbolShadow = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++) {
                        var n = this.m_fillEliminate[e][t];
                        0 == n
                          ? this.m_symbol[e][t] &&
                            (this.m_symbol[e][t].Sprite.color = new Color(
                              100,
                              100,
                              100,
                              255
                            ))
                          : 1 == n
                          ? (this.m_symbol[e][t].Sprite.color = new Color(
                              255,
                              255,
                              255,
                              255
                            ))
                          : 2 == n
                          ? (this.m_symbol[e][t].Spine.color = new Color(
                              100,
                              100,
                              100,
                              255
                            ))
                          : 3 == n &&
                            (this.m_symbol[e][t].Spine.color = new Color(
                              255,
                              255,
                              255,
                              255
                            ));
                      }
                  }),
                  (n.NowComboStageSort = function () {
                    for (var e = [], t = 0; t < this.m_symbol.length; t++) {
                      for (var n = [], i = 0; i < this.m_symbol[t].length; i++)
                        if (this.m_symbol[t][i]) {
                          var o = this.m_symbol[t][i];
                          n.push(o);
                        } else n.push(void 0);
                      e.push(n);
                    }
                    var r =
                      this.m_roundQueue.ComboStageData[this.m_plateIdx]
                        .AwardDataVec;
                    if (r && r.length > 0) {
                      for (var a = [], s = 0; s < r.length; s++) {
                        var l = r[s].Symbol,
                          c = r[s].Direction;
                        l || (r[s].Symbol = 0), c || (r[s].Direction = 0);
                        var u = new Array(),
                          m = e;
                        1 == r[s].Direction && (m = e.slice().reverse());
                        for (var _ = 0; _ < e.length; _++) {
                          for (var p = [], d = 0; d < m[_].length; d++) {
                            var h = 0;
                            _ < r[s].Count
                              ? m[_][d] &&
                                (h = this.CheckFill(
                                  r[s],
                                  m[_][d].SymbolData.HSymbol,
                                  m[_][d].SymbolData.Symbol
                                ))
                              : m[_][d] &&
                                (h = this.CheckFillOut(
                                  m[_][d].SymbolData.Symbol
                                )),
                              p.push(h);
                          }
                          u.push(p);
                        }
                        0 == r[s].Direction ? a.push(u) : a.push(u.reverse());
                      }
                      for (var f = new Array(a[0]), S = 1; S < a.length; S++)
                        for (var y = 0; y < f[0].length; y++)
                          for (var g = 0; g < f[0][y].length; g++)
                            0 != a[S][y][g] &&
                              f[0][y][g] < a[S][y][g] &&
                              (f[0][y][g] = a[S][y][g]);
                      this.m_fillEliminate = f[0];
                    }
                  }),
                  (n.ScatterCount = function (e) {
                    for (var t = 0, n = 0; n < e.length; n++)
                      for (var i = 0; i < e[n].Col.length; i++)
                        (e[n].Col[i].Symbol != SYMBOL_NO.SYMBOL_16 &&
                          e[n].Col[i].Symbol != SYMBOL_NO.SYMBOL_17) ||
                          t++;
                    return t;
                  }),
                  (n.FillSymbol = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g,
                          b,
                          A,
                          w,
                          v,
                          $,
                          C,
                          T,
                          D,
                          R,
                          E,
                          I,
                          k,
                          N,
                          P,
                          O,
                          G,
                          M,
                          L,
                          F,
                          B,
                          x,
                          j,
                          W,
                          H,
                          U,
                          V;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((this.m_fiopSound = []),
                                    (this.m_isHardStop =
                                      !Game_Define.IsInFG && t),
                                    (this.m_isFill = !1),
                                    (this.m_stackAudio = !1),
                                    this.m_roundQueue.ComboStageData[
                                      this.m_plateIdx
                                    ].AwardDataVec &&
                                      !(
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx
                                        ].AwardDataVec.length <= 0
                                      ))
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (
                                    (this.m_isFill = !0), e.abrupt("return")
                                  );
                                case 7:
                                  for (
                                    n =
                                      this.m_roundQueue.ComboStageData[
                                        this.m_plateIdx
                                      ].ComboStageSymbol,
                                      i =
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx + 1
                                        ],
                                      o =
                                        this.m_roundQueue.ComboStageData[
                                          this.m_plateIdx
                                        ].FillSymbols,
                                      r = [],
                                      a = new Array(),
                                      s = 0;
                                    s < Game_Define.COL;
                                    s++
                                  ) {
                                    for (
                                      l = new Array(), c = new Array(), u = 0;
                                      u < this.m_fillEliminate[s].length;
                                      u++
                                    )
                                      1 == this.m_fillEliminate[s][u]
                                        ? l.push(1)
                                        : c.push(this.m_symbol[s][u]);
                                    a.push(c);
                                  }
                                  for (m = 0; m < o.length; m++)
                                    o[m].Col &&
                                      (o[m].Col.length > 0 && r.push(m),
                                      -1 !==
                                        (_ = o[m].Col.findIndex(function (e) {
                                          return e.Symbol >= 18;
                                        })) &&
                                        ((p = {
                                          Symbol: -1,
                                          HSymbol: -1,
                                          HStack: -1,
                                        }),
                                        o[m].Col.splice(_ + 1, 0, p)));
                                  for (d = [], h = 0; h < Game_Define.COL; h++)
                                    if (o[h].Col && o[h].Col.length > 0)
                                      for (
                                        f =
                                          i.ComboStageSymbol[h].Col.length -
                                          o[h].Col.length,
                                          S = f;
                                        S < i.ComboStageSymbol[h].Col.length;
                                        S++
                                      )
                                        (y = null),
                                          (g =
                                            i.ComboStageSymbol[h].Col[S]
                                              .Symbol),
                                          S >= f &&
                                            (-1 != g &&
                                              (g || (g = 0),
                                              (b =
                                                NodePool.GetInstance().CreatSymbol(
                                                  g
                                                )).SetSymbolData(
                                                i.ComboStageSymbol[h].Col[S]
                                              ),
                                              (y = b),
                                              (A = this.GetSymbolPosition(
                                                h,
                                                S
                                              )),
                                              b.node.setPosition(
                                                A.x,
                                                A.y + Game_Define.SymbolEnterAdd
                                              ),
                                              this.node.insertChild(b.node, 0),
                                              g == SYMBOL_NO.SYMBOL_18
                                                ? ((w =
                                                    b.SymbolData.HStack >= 8
                                                      ? Game_Define
                                                          .Symbol_AniName
                                                          .SPIN_GOLD
                                                      : Game_Define
                                                          .Symbol_AniName.SPIN),
                                                  b.Spine.setSkin(
                                                    Game_Define.Symbol_SkinName
                                                      .DEFAULT
                                                  ),
                                                  b.Spine.setAnimation(
                                                    0,
                                                    w,
                                                    !0
                                                  ),
                                                  b.NumSpine.setAnimation(
                                                    0,
                                                    Game_Define.Symbol_AniName
                                                      .SPIN,
                                                    !0
                                                  ),
                                                  this.m_stackSpine[h].push(b),
                                                  (this.m_stackAudio = !0),
                                                  d.push(b),
                                                  this.m_newStackSpine.push(b))
                                                : g == SYMBOL_NO.SYMBOL_12 &&
                                                  node$2.SetZIndex(
                                                    b.node,
                                                    Game_Define.ZOrder.WILD
                                                  )),
                                            a[h].push(y));
                                  for (
                                    this.m_symbol = a,
                                      v = new Array(),
                                      this.reelStops = [!1, !1, !1, !1, !1, !1],
                                      $ = this.ScatterCount(n),
                                      T = !1,
                                      D = [],
                                      (C = $ >= 2) &&
                                        this.SetDropNearWin(!0, r),
                                      R = 0;
                                    R < Game_Define.COL;
                                    R++
                                  ) {
                                    for (
                                      E = 0, I = 0;
                                      I < i.ComboStageSymbol[R].Col.length;
                                      I++
                                    )
                                      (T = !1),
                                        (k =
                                          i.ComboStageSymbol[R].Col[I].Symbol),
                                        (N =
                                          i.ComboStageSymbol[R].Col[I].HStack),
                                        (E = node$2.plus(E, N)),
                                        -1 != k &&
                                          ((P = this.m_symbol[R][I]),
                                          (k != SYMBOL_NO.SYMBOL_16 &&
                                            k != SYMBOL_NO.SYMBOL_17) ||
                                            (T = !0),
                                          P &&
                                            ((O = R - 1) < 0 && (O = 0),
                                            (G = n[O].Col.length),
                                            P.node.getPosition().y > 260 && C
                                              ? v.push(
                                                  this.EnterPlate(
                                                    Game_Define.DELAY_TIME_Fill,
                                                    Game_Define.DELAY_TIME_COL_Fill,
                                                    P,
                                                    k,
                                                    R,
                                                    I,
                                                    G,
                                                    !1,
                                                    this.GetNearTime(
                                                      Game_Define.DELAY_TIME_Fill,
                                                      n[R].Col.length
                                                    ),
                                                    !0,
                                                    !0,
                                                    this.m_isNearWin
                                                  )
                                                )
                                              : P.node.getPosition().y > 260 &&
                                                !C
                                              ? v.push(
                                                  this.EnterPlate(
                                                    Game_Define.DELAY_TIME_Fill,
                                                    Game_Define.DELAY_TIME_COL_Fill,
                                                    P,
                                                    k,
                                                    R,
                                                    I,
                                                    G,
                                                    !1,
                                                    0,
                                                    !0,
                                                    !0,
                                                    this.m_isNearWin,
                                                    0,
                                                    0,
                                                    T,
                                                    $
                                                  )
                                                )
                                              : v.push(
                                                  this.EnterPlate(
                                                    Game_Define.DELAY_TIME_Fill,
                                                    Game_Define.DELAY_TIME_COL_Fill,
                                                    P,
                                                    k,
                                                    R,
                                                    I,
                                                    G,
                                                    !1,
                                                    0,
                                                    !1,
                                                    !1,
                                                    this.m_isNearWin
                                                  )
                                                )));
                                    D.push(E);
                                  }
                                  for (M = D[0], L = 1; L < D.length; L++)
                                    M = node$2.times(M, D[L]);
                                  return (
                                    (this.m_ways = M.toString()),
                                    (e.next = 30),
                                    Promise.all(v)
                                  );
                                case 30:
                                  for (
                                    t &&
                                      node$1.Play(Game_Define.AudioClips.Fiop1),
                                      C && this.SetDropNearWin(!1, r),
                                      d.length > 0 && (this.m_stackAudio = !0),
                                      F = 0;
                                    F < d.length;
                                    F++
                                  )
                                    (B = d[F].SymbolData.HStack),
                                      (x = d[F].SymbolData.HSymbol),
                                      (j =
                                        Game_Define.Symbol_AniName.Stop_ + B),
                                      (W =
                                        Game_Define.Symbol_AniName.Stop_ + B),
                                      d[F].Reel.ReelStop(x),
                                      v.push(
                                        this.SetStack(
                                          d[F].Spine,
                                          x,
                                          j,
                                          d[F].NumSpine,
                                          W
                                        )
                                      );
                                  return (
                                    d.length > 0 &&
                                      node$1.Play(
                                        Game_Define.AudioClips.Patry_Reel_Spin
                                      ),
                                    (e.next = 37),
                                    Promise.all(v)
                                  );
                                case 37:
                                  for (
                                    this.m_effectPlate.ReelAllStop(!0), H = 0;
                                    H < this.m_stackSpine.length;
                                    H++
                                  )
                                    for (
                                      U = 0;
                                      U < this.m_stackSpine[H].length;
                                      U++
                                    )
                                      (V =
                                        this.m_stackSpine[H][U].SymbolData
                                          .HSymbol),
                                        this.m_stackSpine[H][U].Reel.ReelStop(
                                          V
                                        );
                                  this.m_effectPlate.StackSpinAudio > -1 &&
                                    (node$1.Stop(
                                      this.m_effectPlate.StackSpinAudio
                                    ),
                                    (this.m_effectPlate.StackSpinAudio = -1)),
                                    this.m_stackAudio &&
                                      node$1.Stop(this.m_stackAudioId),
                                    !C &&
                                      t &&
                                      node$1.Play(Game_Define.AudioClips.Fiop1),
                                    this.m_roundQueue.ComboStageData.length >
                                      1 && this.m_plateIdx++,
                                    this.m_isNearWin &&
                                      this.m_characterSpine.ShowNearWinEnd(),
                                    this.m_gameView.GameBg.SetWays(this.m_ways),
                                    this.m_effectPlate.CreatStack(),
                                    (this.m_isNearWin = !1),
                                    (this.m_isFill = !0);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.FreeStack = (function () {
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
                          u,
                          m,
                          _,
                          p,
                          d,
                          h,
                          f,
                          S,
                          y,
                          g,
                          b;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((t = new Array()),
                                    (n = new Array()),
                                    (this.m_roundQueue = this.RoundQueue),
                                    (i =
                                      this.m_roundQueue.ComboStageData[
                                        this.m_plateIdx
                                      ].ComboStageSymbol),
                                    !(
                                      (o = this.m_roundQueue.SBGHeight) &&
                                      o.length > 0
                                    ))
                                  ) {
                                    e.next = 18;
                                    break;
                                  }
                                  for (
                                    node$1.Play(
                                      Game_Define.AudioClips.Patry_Reel_SBG_Free
                                    ),
                                      r = [],
                                      a = 0;
                                    a < o.length;
                                    a++
                                  )
                                    (s = a + 1),
                                      (l = o[a]),
                                      (c =
                                        this.m_symbol[s][l].SymbolData.HStack),
                                      (u =
                                        Game_Define.Symbol_AniName.BG_FREE_ +
                                        c),
                                      (m = this.m_symbol[s][l]),
                                      (_ = this.GetSymbolPosition(s, l)),
                                      m.SetSymbolData(i[s].Col[l]),
                                      m.node.setPosition(_),
                                      m.Reel.SetReel(!1),
                                      node$2.SetZIndex(
                                        m.node,
                                        Game_Define.ZOrder.STACK
                                      ),
                                      t.push(
                                        this.SetStack(
                                          m.Spine,
                                          100,
                                          u,
                                          m.NumSpine
                                        )
                                      ),
                                      ((p =
                                        NodePool.GetInstance().CreatFillEffect(
                                          SYMBOL_NO.SYMBOL_FXDJSBG
                                        )).node.position =
                                        this.m_symbol[s][l].node.position),
                                      this.node.insertChild(p.node, 0),
                                      node$2.SetZIndex(
                                        p.node,
                                        Game_Define.ZOrder.SCATTER
                                      ),
                                      t.push(
                                        this.m_effectPlate.ShowEffect(
                                          p,
                                          Game_Define.EffectAniName.SBG_FREE,
                                          !1
                                        )
                                      ),
                                      r.push(p);
                                  return (e.next = 11), Promise.all(t);
                                case 11:
                                  for (
                                    this.m_gameView.SbgAnim.play(
                                      "GameView_Intro_SBG"
                                    ),
                                      this.m_stackAudioId = node$1.Play(
                                        Game_Define.AudioClips.Reel_Reel,
                                        !0
                                      ),
                                      d = 0;
                                    d < o.length;
                                    d++
                                  )
                                    (h = d + 1),
                                      (f = o[d]),
                                      (S =
                                        this.m_symbol[h][f].SymbolData.HStack),
                                      (y =
                                        Game_Define.Symbol_AniName.BG_FREE_ +
                                        S +
                                        "_s"),
                                      (g = this.m_symbol[h][f]),
                                      n.push(
                                        this.SetStack(
                                          g.Spine,
                                          100,
                                          y,
                                          g.NumSpine
                                        )
                                      ),
                                      g.Reel.StartSpin();
                                  return (e.next = 16), Promise.all(n);
                                case 16:
                                  for (
                                    this.m_isPlateCleaned = !0, b = 0;
                                    b < r.length;
                                    b++
                                  )
                                    NodePool.GetInstance().ReturnSymbol(r[b]);
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
                  (n.ChangeAddStack = function (e) {
                    for (
                      var t = e ? this.m_plateIdx - 1 : this.m_plateIdx,
                        n = this.RoundQueue.ComboStageData[t].ChangeSymbols,
                        i = 0;
                      i < Game_Define.COL;
                      i++
                    )
                      for (var o = 0, r = 0, a = 0; a < Game_Define.ROW; a++) {
                        var s = this.m_fillEliminate[i][a];
                        if (1 == s);
                        else if (2 == s) o += 1;
                        else if (3 == s) {
                          var l = n[i].Col[r].HSymbol,
                            c = n[i].Col[r].HStack;
                          l || (l = 0),
                            e || (l = 100),
                            (this.m_stackSpine[i][o].SymbolData.HSymbol = l),
                            (this.m_stackSpine[i][o].SymbolData.HStack = c);
                          var u = Game_Define.Symbol_AniName.IDLE_ + c;
                          this.SetStack(
                            this.m_stackSpine[i][o].Spine,
                            l,
                            u,
                            this.m_stackSpine[i][o].NumSpine
                          ),
                            (o += 1),
                            (r += 1);
                        }
                      }
                  }),
                  (n.StackChange = function (e, t, n) {
                    var i = this.m_stackSpine[e][t];
                    i.SymbolData.HSymbol = n;
                    var o =
                      Game_Define.Symbol_AniName.IDLE_ + i.SymbolData.HStack;
                    this.SetStack(i.Spine, n, o, i.NumSpine);
                  }),
                  (n.SetStack = function (e, t, n, i, o) {
                    var r = this;
                    return (
                      void 0 === o && (o = null),
                      new Promise(function (a) {
                        var s,
                          l = Game_Define.TimeScale.Normal;
                        r.IsHardStop &&
                          (l = node$2.times(l, Game_Define.TimeScale.HardStop));
                        var c = n;
                        s =
                          t < SYMBOL_NO.SYMBOL_10
                            ? "0" + t
                            : t == SYMBOL_NO.SYMBOL_12
                            ? "Wild"
                            : t;
                        var u =
                          100 == t
                            ? Game_Define.Symbol_SkinName.DEFAULT
                            : Game_Define.Symbol_SkinName.CD_SYMBOL_ + s;
                        e.setSkin(u),
                          (e.timeScale = l),
                          (i.timeScale = l),
                          e.setCompleteListener(function () {
                            e.setCompleteListener(null), a();
                          }),
                          e.setAnimation(0, c, !1),
                          i.setAnimation(0, o || c, !1);
                      })
                    );
                  }),
                  (n.SetAllStackSkin = function (e) {
                    for (var t = 0; t < this.m_stackSpine.length; t++)
                      for (var n = 0; n < this.m_stackSpine[t].length; n++)
                        this.m_stackSpine[t][n].node.active = e;
                  }),
                  (n.SetStackSkin = function (e, t, n) {
                    this.m_stackSpine[e][t].Spine.setSkin(n),
                      this.m_stackSpine[e][t].Reel.StartSpin();
                  }),
                  (n.CheckFillOut = function (e) {
                    return 18 == e ? 2 : 0;
                  }),
                  (n.CheckFill = function (e, t, n) {
                    return 18 == n
                      ? e.Symbol === t || SYMBOL_NO.SYMBOL_12 === t
                        ? 3
                        : 2
                      : e.Symbol === t || SYMBOL_NO.SYMBOL_12 === t
                      ? 1
                      : 0;
                  }),
                  (n.GetSymbolPosition = function (e, t) {
                    var n = this.m_reelPosition[e].x,
                      i = this.m_reelPosition[e].y + Game_Define.SymbolSize * t;
                    return v3(n, i);
                  }),
                  (n.GetSymbol = function (e, t) {
                    return this.m_symbol[e][t]
                      ? this.m_symbol[e][t].node
                      : null;
                  }),
                  (n.SetDropNearWin = function (e, t) {
                    if (e) {
                      for (var n = 0; n < t.length; n++) {
                        var i = this.m_nearWins[t[n]].getComponent(sp.Skeleton);
                        (this.m_nearWins[t[n]].active = !0),
                          (i.color = new Color(
                            i.color.r,
                            i.color.g,
                            i.color.b,
                            255
                          )),
                          i.setAnimation(0, "NearWin_Drop", !0);
                      }
                      this.m_effectPlate.ShowScatterNearwin(),
                        node$1.Play(Game_Define.AudioClips.MG_NearWin);
                    } else {
                      for (var o = 0; o < this.m_nearWins.length; o++) {
                        var r = this.m_nearWins[o].getComponent(sp.Skeleton);
                        (r.color = new Color(
                          r.color.r,
                          r.color.g,
                          r.color.b,
                          0
                        )),
                          (this.m_nearWins[o].active = !1);
                      }
                      this.m_effectPlate.ClearReelStop(!1);
                    }
                  }),
                  (n.OpenReelNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (n = this.m_nearWins.length),
                                    (i = -1),
                                    (o = 0);
                                case 3:
                                  if (!(o < this.m_nearWins.length)) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    this.m_nearWins[o]
                                      .getComponent(sp.Skeleton)
                                      .setAnimation(0, "NearWin", !0),
                                    (e.next = 7),
                                    this.m_nearWins[o]
                                      .getComponent(NearWinEffectComponent)
                                      .FadeOut()
                                  );
                                case 7:
                                  this.m_nearWins[o].active = !1;
                                case 8:
                                  o++, (e.next = 3);
                                  break;
                                case 11:
                                  if (!(t >= n)) {
                                    e.next = 13;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 13:
                                  return (
                                    (this.m_nearWins[t].active = !0),
                                    (e.next = 16),
                                    this.m_nearWins[t]
                                      .getComponent(NearWinEffectComponent)
                                      .FadeIn()
                                  );
                                case 16:
                                  this.m_isHardStop ||
                                    ((i = node$1.Play(
                                      Game_Define.AudioClips.MG_NearWin
                                    )),
                                    node$1.SetVolume(
                                      this.m_gameView.BgAudioId,
                                      0.5
                                    )),
                                    this.m_soundid.push(i),
                                    this.m_effectPlate.ShowScatterNearwin();
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
                  (n.CloseReelNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_gameView.GameBg.SetBgFrame(!1),
                                    this.m_effectPlate.ClearReelStop(!1),
                                    (t = 0);
                                case 3:
                                  if (!(t < this.m_nearWins.length)) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    this.m_nearWins[t]
                                      .getComponent(NearWinEffectComponent)
                                      .FadeOut()
                                  );
                                case 6:
                                  (this.m_nearWins[t].active = !1),
                                    node$1.Stop(this.m_soundid[t]);
                                case 8:
                                  t++, (e.next = 3);
                                  break;
                                case 11:
                                  node$1.SetVolume(
                                    this.m_gameView.BgAudioId,
                                    1
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
                  (n.ScatterAudio = function (e) {
                    var t = null;
                    if (e > 4) t = Game_Define.AudioClips.Scatter4;
                    else
                      switch (e) {
                        case 1:
                          t = Game_Define.AudioClips.Scatter1;
                          break;
                        case 2:
                          t = Game_Define.AudioClips.Scatter2;
                          break;
                        case 3:
                          t = Game_Define.AudioClips.Scatter3;
                          break;
                        case 4:
                          t = Game_Define.AudioClips.Scatter4;
                          break;
                        default:
                          t = Game_Define.AudioClips.Scatter1;
                      }
                    return t;
                  }),
                  (n.DefaultPlate = function () {
                    NodePool.GetInstance().SetSymbolSpriteFrames(
                      this.m_symbols
                    );
                    for (var e = 0; e < Game_Define.COL; e++) {
                      for (
                        var t = new Array(), n = 0;
                        n < Game_Define.ROW;
                        n++
                      ) {
                        var i = NodePool.GetInstance().CreatSymbol(
                            DEFAULT_PLATE[e][n]
                          ),
                          o = this.GetSymbolPosition(e, n);
                        i.node.setPosition(o),
                          this.node.insertChild(i.node, 0),
                          t.push(i);
                      }
                      this.m_symbol.push(t);
                    }
                  }),
                  (n.Reset = function () {
                    (this.m_plateIdx = 0),
                      (this.m_isNearWin = !1),
                      (this.m_soundid = []),
                      (this.m_stackKeep = !1),
                      (this.m_scatterSymbols = []);
                  }),
                  (n.RecoverPlate = function (e, t) {
                    void 0 === t && (t = -1);
                    for (var n = 0; n < this.m_symbol.length; n++)
                      for (var i = 0; i < this.m_symbol[n].length; i++)
                        if (this.m_symbol[n][i]) {
                          var o = this.m_symbol[n][i];
                          Tween.stopAllByTarget(o),
                            NodePool.GetInstance().ReturnSymbol(o),
                            this.node.removeChild(o.node);
                        }
                    this.m_symbol = [];
                    var r = null,
                      a = null;
                    e && e.RoundQueue && e.RoundQueue.length > 0
                      ? (t < 0 && (t = e.RoundQueue.length - 1),
                        (a = (r = e.RoundQueue[t]).ComboStageData[
                          r.ComboStageData.length - 1
                        ].ComboStageSymbol) &&
                          a.length > 0 &&
                          this.InitRecoverPlate(a))
                      : this.DefaultPlate();
                  }),
                  (n.InitRecoverPlate = function (e) {
                    for (var t = 0; t < Game_Define.COL; t++) {
                      for (
                        var n = new Array(), i = 0;
                        i < e[t].Col.length;
                        i++
                      ) {
                        var o = e[t].Col[i].Symbol ? e[t].Col[i].Symbol : 0,
                          r = e[t].Col[i].HSymbol ? e[t].Col[i].HSymbol : 0,
                          a = e[t].Col[i].HStack ? e[t].Col[i].HStack : 0;
                        if (-1 != o) {
                          o || (o = 0);
                          var s = NodePool.GetInstance().CreatSymbol(o);
                          this.node.insertChild(s.node, 0);
                          var l = this.GetSymbolPosition(t, i);
                          if (
                            (s.node.setPosition(l), o == SYMBOL_NO.SYMBOL_18)
                          ) {
                            var c = Game_Define.Symbol_AniName.IDLE_ + a;
                            this.SetStack(s.Spine, r, c, s.NumSpine);
                          }
                          n.push(s);
                        } else n.push(void 0);
                      }
                      this.m_symbol.push(n);
                    }
                  }),
                  (n.InitSymbolColor = function () {
                    for (var e = 0; e < Game_Define.COL; e++)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_symbol[e][t] &&
                          (this.m_symbol[e][t].Sprite
                            ? (this.m_symbol[e][t].Sprite.color = new Color(
                                255,
                                255,
                                255,
                                255
                              ))
                            : (this.m_symbol[e][t].Spine.color = new Color(
                                255,
                                255,
                                255,
                                255
                              )));
                  }),
                  _createClass(t, [
                    {
                      key: "RoundQueue",
                      get: function () {
                        return this.m_roundQueue;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return this.m_isHardStop;
                      },
                    },
                    {
                      key: "IsInitStop",
                      get: function () {
                        return this.m_isInitStop;
                      },
                    },
                    {
                      key: "IsPlateCleaned",
                      get: function () {
                        return this.m_isPlateCleaned;
                      },
                    },
                    {
                      key: "IsFill",
                      get: function () {
                        return this.m_isFill;
                      },
                    },
                    {
                      key: "IsNearWin",
                      get: function () {
                        return this.m_isNearWin;
                      },
                    },
                    {
                      key: "StackSpine",
                      get: function () {
                        return this.m_stackSpine;
                      },
                    },
                    {
                      key: "NewStackSpine",
                      get: function () {
                        return this.m_newStackSpine;
                      },
                      set: function (e) {
                        this.m_newStackSpine = e;
                      },
                    },
                    {
                      key: "FillEliminate",
                      get: function () {
                        return this.m_fillEliminate;
                      },
                    },
                    {
                      key: "ScatterSymbols",
                      get: function () {
                        return this.m_scatterSymbols;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$c = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_characterSpine",
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
              (_descriptor2$9 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_symbols",
                [_dec3$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor3$8 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_nearWins",
                [_dec4$8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor4$8 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_topPlate",
                [_dec5$8],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$w = _class2$c))
            ) || _class$w),
          _dec$x,
          _dec2$d,
          _dec3$a,
          _dec4$9,
          _class$x,
          _class2$d,
          _descriptor$d,
          _descriptor2$a,
          _descriptor3$9;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e0bbfsWDGZHJ7FvZq6F9jV9", "SmallWin", void 0);
        var ccclass$x = _decorator.ccclass,
          property$d = _decorator.property,
          ANIMATION_NAME$7;
        !(function (e) {
          (e.NONE = "none"),
            (e.WIN_START_1 = "Win_Start_1"),
            (e.WIN_LOOP = "Win_Loop"),
            (e.WIN_END = "Win_End");
        })(ANIMATION_NAME$7 || (ANIMATION_NAME$7 = {}));
        var SmallWin =
            ((_dec$x = ccclass$x("SmallWin")),
            (_dec2$d = property$d({ type: Node, tooltip: "贏分物件" })),
            (_dec3$a = property$d({ type: Label, tooltip: "贏分文字" })),
            (_dec4$9 = property$d({ type: UIOpacity, tooltip: "透明物件" })),
            _dec$x(
              ((_class2$d = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(i)) || this).m_gameView =
                      null),
                    _initializerDefineProperty(
                      t,
                      "m_winNode",
                      _descriptor$d,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nodeOpacity",
                      _descriptor3$9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_win = 0),
                    (t.m_showTime = void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_winNode.active = !0),
                                    (this.m_win = t),
                                    (this.m_winLabel.string = "0"),
                                    this.SetWaitTime(n),
                                    (e.next = 6),
                                    this.RoundWin()
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
                  (n.RoundWin = function () {
                    var e = this;
                    return new Promise(function (t) {
                      e.m_win >= Game_Define.SmallWinDigitScore
                        ? (e.m_winLabel.string = node$2.FormatNumberThousands(
                            Game_Define.ShowDisplayValue(e.m_win),
                            node$2.FORMAT_NUMBER_TYPE.NONE_DOT
                          ))
                        : (e.m_winLabel.string = node$2.FormatNumberThousands(
                            Game_Define.ShowDisplayValue(e.m_win),
                            node$2.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                          ));
                      var n = Game_Define.SmallWinFadeIn,
                        i = e.m_showTime,
                        o = Game_Define.SmallWinFadeOut;
                      e.m_gameView.SlotReels.IsHardStop &&
                        ((n = node$2.divide(n, Game_Define.TimeScale.HardStop)),
                        (i = node$2.divide(i, Game_Define.TimeScale.HardStop)),
                        (o = node$2.divide(o, Game_Define.TimeScale.HardStop))),
                        tween(e.m_nodeOpacity)
                          .to(n, { opacity: 255 })
                          .delay(i)
                          .to(o, { opacity: 1 })
                          .call(function () {
                            (e.m_winNode.active = !1), t();
                          })
                          .start();
                    });
                  }),
                  (n.SetWaitTime = function (e) {
                    e < Game_Define.SmallWinRate1
                      ? (this.m_showTime = Game_Define.SmallWinWait0)
                      : Game_Define.SmallWinRate1 <= e &&
                        e < Game_Define.SmallWinRate2
                      ? (node$1.Play(Game_Define.AudioClips.Small_win_01),
                        (this.m_showTime = Game_Define.SmallWinWait1))
                      : Game_Define.SmallWinRate2 <= e &&
                        e < Game_Define.SmallWinRate3
                      ? (node$1.Play(Game_Define.AudioClips.Small_win_02),
                        (this.m_showTime = Game_Define.SmallWinWait2))
                      : Game_Define.SmallWinRate3 <= e &&
                        e < Game_Define.SmallWinRate4
                      ? (node$1.Play(Game_Define.AudioClips.Small_win_03),
                        (this.m_showTime = Game_Define.SmallWinWait3))
                      : e >= Game_Define.SmallWinRate4 &&
                        (node$1.Play(Game_Define.AudioClips.Small_win_03),
                        (this.m_showTime = Game_Define.SmallWinWait4));
                  }),
                  t
                );
              })(Component)),
              (_descriptor$d = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_winNode",
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
              (_descriptor2$a = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_winLabel",
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
              (_descriptor3$9 = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_nodeOpacity",
                [_dec4$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$x = _class2$d))
            ) || _class$x),
          _dec$y,
          _dec2$e,
          _dec3$b,
          _class$y,
          _class2$e,
          _descriptor$e,
          _descriptor2$b;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "dcd4dLTEIZB8JkYQXOkCs2G", "NodeReel", void 0);
        var ccclass$y = _decorator.ccclass,
          property$e = _decorator.property,
          NodeReel =
            ((_dec$y = ccclass$y("NodeReel")),
            (_dec2$e = property$e({ type: Node, tooltip: "Mg Reel" })),
            (_dec3$b = property$e({ type: Node, tooltip: "Fg Reel" })),
            _dec$y(
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
                      "m_mgReel",
                      _descriptor$e,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgReel",
                      _descriptor2$b,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.setReel = function (e) {
                    this.m_fgReel.active = e;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$e = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_mgReel",
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
              (_descriptor2$b = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_fgReel",
                [_dec3$b],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$y = _class2$e))
            ) || _class$y),
          _dec$z,
          _dec2$f,
          _class$z,
          _class2$f,
          _descriptor$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "b131fLMVeFEAaCL+yZiCzAr", "SpSpine", void 0);
        var ccclass$z = _decorator.ccclass,
          property$f = _decorator.property,
          SpAniName = {
            RANDOM: "Random",
            PARTY_WILD_SPAWN: "PartyWild_Spawn",
            PARTY_WILD_IDLE: "PartyWild_Idle",
            PARTY_WILD_END: "PartyWild_End",
            PARTY_WILD_FLY: "PartyWild_Fly",
            PARTY_MATCH_SPAWN: "PartyMatch_Spawn",
            PARTY_MATCH_IDLE: "PartyMatch_Idle",
            PARTY_MATCH_END: "PartyMatch_End",
            PARTY_MATCH_FLY: "PartyMatch_Fly",
            BOTHWAYS_SPAWN: "BothWays_Spawn",
            BOTHWAYS_IDLE: "BothWays_Idle",
            BOTHWAYS_END: "BothWays_End",
            BOTHWAYS_FLY: "BothWays_Fly",
          },
          SpAniTitle = {
            PARTY_WILD: "PartyWild_",
            PARTY_MATCH: "PartyMatch_",
            BOTHWAYS_SPAWN: "BothWays_",
          },
          SpAniState = { SPAWN: "Spawn", IDLE: "Idle", END: "End", FLY: "Fly" },
          SpSpine =
            ((_dec$z = ccclass$z("SpSpine")),
            (_dec2$f = property$f({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$z(
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
                    (t.m_x = void 0),
                    (t.m_y = void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    (this.m_x = this.node.position.x),
                      (this.m_y = this.node.position.y),
                      (this.node.active = !1);
                  }),
                  (n.PlayRadom = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (i = this.checkAniname(t)),
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      SpAniName.RANDOM,
                                      !1,
                                      n
                                    )
                                  );
                                case 5:
                                  return (
                                    (o = this.SetPartyAudio(t)),
                                    node$1.Play(o),
                                    (e.next = 9),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      i + SpAniState.SPAWN
                                    )
                                  );
                                case 9:
                                  return (
                                    (e.next = 11),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      i + SpAniState.IDLE,
                                      !0
                                    )
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlayRadomEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (n = this.checkAniname(t)),
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      n + SpAniState.END
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
                  (n.InitPosition = function () {
                    var e = v3(this.m_x, this.m_y);
                    this.node.setPosition(e.x, e.y), (this.node.active = !1);
                  }),
                  (n.PlayFly = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  (this.node.active = !0),
                                    (n = this.checkAniname(t)),
                                    this.PlayAnimation(
                                      this.m_spine,
                                      n + SpAniState.FLY
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  void 0 === i && (i = !1),
                                  void 0 === o && (o = 0),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      tween(t.node)
                                        .delay(o)
                                        .call(function () {
                                          if (n == SpAniName.RANDOM) {
                                            r.node.active = !0;
                                            var o = v3(r.m_x, r.m_y);
                                            r.node.setPosition(o.x, o.y);
                                          }
                                          t.setCompleteListener(function () {
                                            t.setCompleteListener(null), e();
                                          }),
                                            t.setAnimation(0, n, i);
                                        })
                                        .start();
                                    })
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.checkAniname = function (e) {
                    var t = "";
                    switch (e) {
                      case 1:
                        t = SpAniTitle.PARTY_WILD;
                        break;
                      case 2:
                        t = SpAniTitle.PARTY_MATCH;
                        break;
                      case 3:
                        t = SpAniTitle.BOTHWAYS_SPAWN;
                    }
                    return t;
                  }),
                  (n.SetPartyAudio = function (e) {
                    var t = null;
                    switch (e) {
                      case 1:
                        t = Game_Define.AudioClips.Party_Wild_Win;
                        break;
                      case 2:
                        t = Game_Define.AudioClips.Party_Match_Win;
                        break;
                      case 3:
                        t = Game_Define.AudioClips.Both_Ways_Win;
                    }
                    return t;
                  }),
                  _createClass(t, [
                    {
                      key: "Spine",
                      get: function () {
                        return this.m_spine;
                      },
                    },
                  ]),
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
              (_class$z = _class2$f))
            ) || _class$z),
          _dec$A,
          _dec2$g,
          _dec3$c,
          _class$A,
          _class2$g,
          _descriptor$g,
          _descriptor2$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "8c970a1wHdIJJ5dymyFZ/Gi", "NodeSP", void 0);
        var ccclass$A = _decorator.ccclass,
          property$g = _decorator.property,
          NodeSP =
            ((_dec$A = ccclass$A("NodeSP")),
            (_dec2$g = property$g({ type: SpSpine, tooltip: "SpSpine" })),
            (_dec3$c = property$g({ type: sp.Skeleton, tooltip: "Spine" })),
            _dec$A(
              ((_class2$g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(i)) || this).m_gameView =
                      null),
                    _initializerDefineProperty(
                      t,
                      "m_sp",
                      _descriptor$g,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_special",
                      _descriptor2$c,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (n.CloseSp = function () {
                    for (var e = 0; e < this.m_sp.length; e++)
                      this.m_sp[e].node.active = !1;
                  }),
                  (n.PlayRadom = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (this.m_sp[t].node.activeInHierarchy) {
                                    e.next = 3;
                                    break;
                                  }
                                  return (
                                    (e.next = 3),
                                    this.m_sp[t].PlayRadom(n, t * i)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.PlaySpEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2), this.m_sp[t].PlayRadomEnd(n)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.specialDeclare = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  return (
                                    (n = Game_Define.TimeScale.Normal),
                                    this.m_gameView.SlotReels.IsHardStop &&
                                      (n = node$2.times(
                                        n,
                                        Game_Define.TimeScale.HardStop
                                      )),
                                    (this.m_special[t].node.active = !0),
                                    (this.m_special[t].timeScale = n),
                                    (i = this.SetPartyAudio(t)),
                                    node$1.Play(i),
                                    (e.next = 10),
                                    this.PlayAnimation(this.m_special[t], "Pop")
                                  );
                                case 10:
                                  this.m_special[t].node.active = !1;
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
                  (n.PlayAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  void 0 === i && (i = !1),
                                  (t.paused = !1),
                                  (e.next = 4),
                                  SpineKit.PlayAnimation(t, n, i)
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.Move = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i, o) {
                        var r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (r = new Array()),
                                    node$1.Play(Game_Define.AudioClips.SP_Fly),
                                    this.m_sp[t].PlayFly(o),
                                    (a = this.m_sp[t].node),
                                    3 == o
                                      ? (s = this.m_special[o].node.position)
                                      : ((l =
                                          this.m_gameView.EffectPlate
                                            .StackSpine[n][i]),
                                        (s = l.node.position)),
                                    r.push(this.DoMove(a, s, 0)),
                                    (e.next = 8),
                                    Promise.all(r)
                                  );
                                case 8:
                                  this.m_sp[t].InitPosition();
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
                    return function (t, n, i, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.DoMove = function (e, t, n) {
                    var i = v3(0, 0, 0);
                    (i.x = t.x), (i.y = e.position.y);
                    var o = new CommonEffect.Bezier([e.position, i, t]);
                    return new Promise(function (i) {
                      tween(e)
                        .delay(n)
                        .to(
                          Game_Define.SpMoveSpeed,
                          { position: t },
                          {
                            onUpdate: function (t, n) {
                              e.position = o.GetPosition(n);
                            },
                          }
                        )
                        .call(function () {
                          i();
                        })
                        .start();
                    });
                  }),
                  (n.SetPartyAudio = function (e) {
                    var t = null;
                    switch (e) {
                      case 1:
                        t = Game_Define.AudioClips.Party_Wild_Pop;
                        break;
                      case 2:
                        t = Game_Define.AudioClips.Party_Match_Pop;
                        break;
                      case 3:
                        t = Game_Define.AudioClips.Both_Ways_Pop;
                    }
                    return t;
                  }),
                  t
                );
              })(Component)),
              (_descriptor$g = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_sp",
                [_dec2$g],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$c = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_special",
                [_dec3$c],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$A = _class2$g))
            ) || _class$A),
          _dec$B,
          _dec2$h,
          _dec3$d,
          _class$B,
          _class2$h,
          _descriptor$h,
          _descriptor2$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a37c0zfVOFMFJ6SBNuvS68G",
            "Node_BothWay",
            void 0
          );
        var ccclass$B = _decorator.ccclass,
          property$h = _decorator.property,
          ANIMATION_NAME$8;
        !(function (e) {
          (e.BOTH_WAY = "Both Way"),
            (e.START = "Start"),
            (e.LOOP = "Loop"),
            (e.END = "End");
        })(ANIMATION_NAME$8 || (ANIMATION_NAME$8 = {}));
        var Node_BothWay =
          ((_dec$B = ccclass$B("Node_BothWay")),
          (_dec2$h = property$h({ type: sp.Skeleton, tooltip: "Spine" })),
          (_dec3$d = property$h({
            type: sp.Skeleton,
            tooltip: "permanent Spine",
          })),
          _dec$B(
            ((_class2$h = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, i = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  i[o] = arguments[o];
                return (
                  ((t = e.call.apply(e, [this].concat(i)) || this).m_gameView =
                    null),
                  _initializerDefineProperty(
                    t,
                    "m_effects",
                    _descriptor$h,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_permanentEffect",
                    _descriptor2$d,
                    _assertThisInitialized(t)
                  ),
                  (t.m_isPermanentEffect = !1),
                  t
                );
              }
              _inheritsLoose(t, e);
              var n = t.prototype;
              return (
                (n.Init = function (e) {
                  this.m_gameView = e;
                }),
                (n.ShowEffects = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e() {
                      var t,
                        n,
                        i,
                        o = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  this.node.active = !0,
                                    t = new Array(),
                                    n = Game_Define.TimeScale.Normal,
                                    this.m_gameView.SlotReels.IsHardStop &&
                                      (n = node$2.times(
                                        n,
                                        Game_Define.TimeScale.HardStop
                                      )),
                                    i = 0;
                                  i < this.m_effects.length;
                                  i++
                                )
                                  (this.m_effects[i].node.active = !0),
                                    (this.m_effects[i].timeScale = n),
                                    t.push(
                                      this.PlayAnimation(
                                        this.m_effects[i],
                                        ANIMATION_NAME$8.BOTH_WAY
                                      )
                                    );
                                Promise.all(t).then(function () {
                                  o.node.active = !1;
                                });
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
                (n.ShowPermanentEffects = function () {
                  var e = this;
                  (this.m_permanentEffect.node.parent.active = !0),
                    (this.m_isPermanentEffect = !0);
                  var t = this.m_permanentEffect.setAnimation(
                    0,
                    ANIMATION_NAME$8.START,
                    !1
                  );
                  t &&
                    this.m_permanentEffect.setTrackCompleteListener(
                      t,
                      function () {
                        e.m_permanentEffect.setTrackCompleteListener(
                          t,
                          function () {}
                        ),
                          e.m_permanentEffect.setAnimation(
                            0,
                            ANIMATION_NAME$8.LOOP,
                            !0
                          );
                      }
                    );
                }),
                (n.EndPermanentEffects = function () {
                  var e = this,
                    t = this.m_permanentEffect.setAnimation(
                      0,
                      ANIMATION_NAME$8.END,
                      !1
                    );
                  t &&
                    this.m_permanentEffect.setTrackCompleteListener(
                      t,
                      function () {
                        e.m_permanentEffect.setTrackCompleteListener(
                          t,
                          function () {}
                        ),
                          (e.m_permanentEffect.node.parent.active = !1),
                          (e.m_isPermanentEffect = !1);
                      }
                    );
                }),
                (n.PlayAnimation = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, n, i) {
                      var o;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  void 0 === i && (i = !1),
                                  (o = Game_Define.TimeScale.Normal),
                                  this.m_gameView.SlotReels.IsHardStop &&
                                    (o = node$2.times(
                                      o,
                                      Game_Define.TimeScale.HardStop
                                    )),
                                  (t.timeScale = o),
                                  (e.next = 6),
                                  SpineKit.PlayAnimation(t, n, i)
                                );
                              case 6:
                                t.node.active = !1;
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
                _createClass(t, [
                  {
                    key: "IsPermanentEffect",
                    get: function () {
                      return this.m_isPermanentEffect;
                    },
                  },
                ]),
                t
              );
            })(Component)),
            (_descriptor$h = _applyDecoratedDescriptor(
              _class2$h.prototype,
              "m_effects",
              [_dec2$h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (_descriptor2$d = _applyDecoratedDescriptor(
              _class2$h.prototype,
              "m_permanentEffect",
              [_dec3$d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_class$B = _class2$h))
          ) || _class$B);
        cclegacy._RF.pop();
        var __cjsMetaURL$j =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
        loader.define(
          __cjsMetaURL$j,
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
                  var u = new Array(arguments.length - 1), m = 0;
                  m < u.length;

                )
                  u[m] = arguments[++m];
                if (
                  ((m = 0),
                  (e = e.replace(/%([%dfijs])/g, function (e, t) {
                    var n = u[m++];
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
                  m !== u.length)
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
        var __cjsMetaURL$k =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$k,
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
              "@protobufjs/aspromise": __cjsMetaURL,
              "@protobufjs/inquire": __cjsMetaURL$4,
            };
          }
        );
        var __cjsMetaURL$l =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$l,
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
        var __cjsMetaURL$m =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$m,
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
            return { "./util": __cjsMetaURL$A };
          }
        );
        var __cjsMetaURL$n =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$n,
          function (e, t, n, i, o) {
            n.exports = m;
            var r = t("./object");
            ((m.prototype = Object.create(r.prototype)).constructor =
              m).className = "Field";
            var a,
              s = t("./enum"),
              l = t("./types"),
              c = t("./util"),
              u = /^required|optional|repeated$/;
            function m(e, t, n, i, o, a, s) {
              if (
                (c.isObject(i)
                  ? ((s = o), (a = i), (i = o = void 0))
                  : c.isObject(o) && ((s = a), (a = o), (o = void 0)),
                r.call(this, e, a),
                !c.isInteger(t) || t < 0)
              )
                throw TypeError("id must be a non-negative integer");
              if (!c.isString(n)) throw TypeError("type must be a string");
              if (void 0 !== i && !u.test((i = i.toString().toLowerCase())))
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
              (m.prototype.setOption = function (e, t, n) {
                return (
                  "packed" === e && (this._packed = null),
                  r.prototype.setOption.call(this, e, t, n)
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
              (m.d = function (e, t, n, i) {
                return (
                  "function" == typeof t
                    ? (t = c.decorateType(t).name)
                    : t && "object" == typeof t && (t = c.decorateEnum(t).name),
                  function (o, r) {
                    c.decorateType(o.constructor).add(
                      new m(r, e, t, n, { default: i })
                    );
                  }
                );
              }),
              (m._configure = function (e) {
                a = e;
              }),
              n.exports;
          },
          function () {
            return {
              "./object": __cjsMetaURL$B,
              "./enum": __cjsMetaURL$C,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$o =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$o,
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
              "./object": __cjsMetaURL$B,
              "./field": __cjsMetaURL$n,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$p =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$p,
          function (e, t, n, i, o) {
            n.exports = p;
            var r = t("./object");
            ((p.prototype = Object.create(r.prototype)).constructor =
              p).className = "Namespace";
            var a,
              s,
              l,
              c = t("./field"),
              u = t("./oneof"),
              m = t("./util");
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
            function d(e) {
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
                    e instanceof u
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
                return (this.nested[e.name] = e), e.onAdd(this), d(this);
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
                  d(this)
                );
              }),
              (p.prototype.define = function (e, t) {
                if (m.isString(e)) e = e.split(".");
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
                  m.isString(e) && e.length)
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
              "./object": __cjsMetaURL$B,
              "./field": __cjsMetaURL$n,
              "./oneof": __cjsMetaURL$o,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$q =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$q,
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
              "./field": __cjsMetaURL$n,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$r =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$r,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("./object");
            ((s.prototype = Object.create(r.prototype)).constructor =
              s).className = "Method";
            var a = t("./util");
            function s(e, t, n, i, o, s, l, c, u) {
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
              n.exports;
          },
          function () {
            return { "./object": __cjsMetaURL$B, "./util": __cjsMetaURL$A };
          }
        );
        var __cjsMetaURL$s =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$s,
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
            function u(e) {
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
              "./namespace": __cjsMetaURL$p,
              "./method": __cjsMetaURL$r,
              "./util": __cjsMetaURL$A,
              "./rpc": __cjsMetaURL$e,
            };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$t,
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
            return { "./util/minimal": __cjsMetaURL$8 };
          }
        );
        var __cjsMetaURL$u =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$u,
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
                var u = e._fieldsArray[n];
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
            n.exports;
          },
          function () {
            return {
              "./enum": __cjsMetaURL$C,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$v =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$v,
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
                    l(t, r, o, u + "[k[i]]")("}");
                else if (r.repeated)
                  t("if(!Array.isArray(%s))", u)("return%j", s(r, "array"))(
                    "for(var i=0;i<%s.length;++i){",
                    u
                  ),
                    l(t, r, o, u + "[i]")("}");
                else {
                  if (r.partOf) {
                    var m = a.safeProp(r.partOf.name);
                    1 === i[r.partOf.name] &&
                      t("if(p%s===1)", m)(
                        "return%j",
                        r.partOf.name + ": multiple values"
                      ),
                      (i[r.partOf.name] = 1),
                      t("p%s=1", m);
                  }
                  l(t, r, o, u);
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
            return { "./enum": __cjsMetaURL$C, "./util": __cjsMetaURL$A };
          }
        );
        var __cjsMetaURL$w =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$w,
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
                    var u = r[l],
                      m = s.safeProp(u.name);
                    if (u.resolvedType instanceof a)
                      n(
                        "d%s=o.enums===String?%j:%j",
                        m,
                        u.resolvedType.valuesById[u.typeDefault],
                        u.typeDefault
                      );
                    else if (u.long)
                      n("if(util.Long){")(
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
                      var _ =
                        "[" +
                        Array.prototype.slice.call(u.typeDefault).join(",") +
                        "]";
                      n(
                        "if(o.bytes===String)d%s=%j",
                        m,
                        String.fromCharCode.apply(String, u.typeDefault)
                      )("else{")("d%s=%s", m, _)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        m,
                        m
                      )("}");
                    } else n("d%s=%j", m, u.typeDefault);
                  }
                  n("}");
                }
                var p = !1;
                for (l = 0; l < t.length; ++l) {
                  u = t[l];
                  var d = e._fieldsArray.indexOf(u);
                  m = s.safeProp(u.name);
                  u.map
                    ? (p || ((p = !0), n("var ks2")),
                      n(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        m,
                        m
                      )(
                        "d%s={}",
                        m
                      )("for(var j=0;j<ks2.length;++j){"),
                      c(n, u, d, m + "[ks2[j]]")("}"))
                    : u.repeated
                    ? (n("if(m%s&&m%s.length){", m, m)("d%s=[]", m)(
                        "for(var j=0;j<m%s.length;++j){",
                        m
                      ),
                      c(n, u, d, m + "[j]")("}"))
                    : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name),
                      c(n, u, d, m),
                      u.partOf &&
                        n("if(o.oneofs)")(
                          "d%s=%j",
                          s.safeProp(u.partOf.name),
                          u.name
                        )),
                    n("}");
                }
                return n("return d");
              }),
              n.exports;
          },
          function () {
            return { "./enum": __cjsMetaURL$C, "./util": __cjsMetaURL$A };
          }
        );
        var __cjsMetaURL$x =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$x,
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
            return { "./message": __cjsMetaURL$t };
          }
        );
        var __cjsMetaURL$y =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, n, i, o) {
            n.exports = b;
            var r = t("./namespace");
            ((b.prototype = Object.create(r.prototype)).constructor =
              b).className = "Type";
            var a = t("./enum"),
              s = t("./oneof"),
              l = t("./field"),
              c = t("./mapfield"),
              u = t("./service"),
              m = t("./message"),
              _ = t("./reader"),
              p = t("./writer"),
              d = t("./util"),
              h = t("./encoder"),
              f = t("./decoder"),
              S = t("./verifier"),
              y = t("./converter"),
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
            function A(e) {
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
                    this._ctor || (this.ctor = b.generateConstructor(this)())
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
                  for (var n = 0; n < this.fieldsArray.length; ++n)
                    this._fieldsArray[n].resolve();
                  var i = {};
                  for (n = 0; n < this.oneofsArray.length; ++n)
                    i[this._oneofsArray[n].resolve().name] = {
                      get: d.oneOfGetter(this._oneofsArray[n].oneof),
                      set: d.oneOfSetter(this._oneofsArray[n].oneof),
                    };
                  n && Object.defineProperties(e.prototype, i);
                },
              },
            }),
              (b.generateConstructor = function (e) {
                for (
                  var t, n = d.codegen(["p"], e.name), i = 0;
                  i < e.fieldsArray.length;
                  ++i
                )
                  (t = e._fieldsArray[i]).map
                    ? n("this%s={}", d.safeProp(t.name))
                    : t.repeated && n("this%s=[]", d.safeProp(t.name));
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
                    var m = t.nested[i[o]];
                    n.add(
                      (void 0 !== m.id
                        ? l.fromJSON
                        : void 0 !== m.fields
                        ? b.fromJSON
                        : void 0 !== m.values
                        ? a.fromJSON
                        : void 0 !== m.methods
                        ? u.fromJSON
                        : r.fromJSON)(i[o], m)
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
                return d.toObject([
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
                    A(this)
                  );
                }
                return e instanceof s
                  ? (this.oneofs || (this.oneofs = {}),
                    (this.oneofs[e.name] = e),
                    e.onAdd(this),
                    A(this))
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
                    A(this)
                  );
                }
                if (e instanceof s) {
                  if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.oneofs[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    A(this)
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
                (this.encode = h(this)({ Writer: p, types: t, util: d })),
                  (this.decode = f(this)({ Reader: _, types: t, util: d })),
                  (this.verify = S(this)({ types: t, util: d })),
                  (this.fromObject = y.fromObject(this)({ types: t, util: d })),
                  (this.toObject = y.toObject(this)({ types: t, util: d }));
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
                  d.decorateType(t, e);
                };
              }),
              n.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$p,
              "./enum": __cjsMetaURL$C,
              "./oneof": __cjsMetaURL$o,
              "./field": __cjsMetaURL$n,
              "./mapfield": __cjsMetaURL$q,
              "./service": __cjsMetaURL$s,
              "./message": __cjsMetaURL$t,
              "./reader": __cjsMetaURL$b,
              "./writer": __cjsMetaURL$9,
              "./util": __cjsMetaURL$A,
              "./encoder": __cjsMetaURL$D,
              "./decoder": __cjsMetaURL$u,
              "./verifier": __cjsMetaURL$v,
              "./converter": __cjsMetaURL$w,
              "./wrappers": __cjsMetaURL$x,
            };
          }
        );
        var __cjsMetaURL$z =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$z,
          function (e, t, n, i, o) {
            n.exports = p;
            var r = t("./namespace");
            ((p.prototype = Object.create(r.prototype)).constructor =
              p).className = "Root";
            var a,
              s,
              l,
              c = t("./field"),
              u = t("./enum"),
              m = t("./oneof"),
              _ = t("./util");
            function p(e) {
              r.call(this, "", e), (this.deferred = []), (this.files = []);
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
              (p.prototype.load = function e(t, n, i) {
                "function" == typeof n && ((i = n), (n = void 0));
                var o = this;
                if (!i) return _.asPromise(e, o, t, n);
                var r = i === d;
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
                function u(e, t) {
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
                        u = 0;
                      if (l.imports)
                        for (; u < l.imports.length; ++u)
                          (i =
                            c(l.imports[u]) ||
                            o.resolvePath(e, l.imports[u])) && m(i);
                      if (l.weakImports)
                        for (u = 0; u < l.weakImports.length; ++u)
                          (i =
                            c(l.weakImports[u]) ||
                            o.resolvePath(e, l.weakImports[u])) && m(i, !0);
                    } else o.setOptions(t.options).addJSON(t.nested);
                  } catch (e) {
                    a(e);
                  }
                  r || p || a(null, o);
                }
                function m(e, t) {
                  if (!(o.files.indexOf(e) > -1))
                    if ((o.files.push(e), e in l))
                      r
                        ? u(e, l[e])
                        : (++p,
                          setTimeout(function () {
                            --p, u(e, l[e]);
                          }));
                    else if (r) {
                      var n;
                      try {
                        n = _.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || a(e));
                      }
                      u(e, n);
                    } else
                      ++p,
                        o.fetch(e, function (n, r) {
                          --p,
                            i && (n ? (t ? p || a(null, o) : a(n)) : u(e, r));
                        });
                }
                var p = 0;
                _.isString(t) && (t = [t]);
                for (var h, f = 0; f < t.length; ++f)
                  (h = o.resolvePath("", t[f])) && m(h);
                if (r) return o;
                p || a(null, o);
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
                return r.prototype.resolveAll.call(this);
              });
            var h = /^[A-Z]/;
            function f(e, t) {
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
                  f(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof u)
                h.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof m)) {
                if (e instanceof a)
                  for (var t = 0; t < this.deferred.length; )
                    f(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var n = 0; n < e.nestedArray.length; ++n)
                  this._handleAdd(e._nestedArray[n]);
                h.test(e.name) && (e.parent[e.name] = e);
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
                } else if (e instanceof u)
                  h.test(e.name) && delete e.parent[e.name];
                else if (e instanceof r) {
                  for (var n = 0; n < e.nestedArray.length; ++n)
                    this._handleRemove(e._nestedArray[n]);
                  h.test(e.name) && delete e.parent[e.name];
                }
              }),
              (p._configure = function (e, t, n) {
                (a = e), (s = t), (l = n);
              }),
              n.exports;
          },
          function () {
            return {
              "./namespace": __cjsMetaURL$p,
              "./field": __cjsMetaURL$n,
              "./enum": __cjsMetaURL$C,
              "./oneof": __cjsMetaURL$o,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$A =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$A,
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
              "./util/minimal": __cjsMetaURL$8,
              "./roots": __cjsMetaURL$f,
              "@protobufjs/codegen": __cjsMetaURL$j,
              "@protobufjs/fetch": __cjsMetaURL$k,
              "@protobufjs/path": __cjsMetaURL$l,
              "./type": __cjsMetaURL$y,
              "./enum": __cjsMetaURL$C,
              "./root": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$B,
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
            return { "./util": __cjsMetaURL$A };
          }
        );
        var __cjsMetaURL$C =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$C,
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
              "./object": __cjsMetaURL$B,
              "./namespace": __cjsMetaURL$p,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$D =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$D,
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
                  u = e._fieldsArray.indexOf(c),
                  m = c.resolvedType instanceof r ? "int32" : c.type,
                  _ = a.basic[m];
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
                            u,
                            t
                          )
                        : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _, m, t),
                      n("}")("}"))
                    : c.repeated
                    ? (n("if(%s!=null&&%s.length){", t, t),
                      c.packed && void 0 !== a.packed[m]
                        ? n("w.uint32(%i).fork()", ((c.id << 3) | 2) >>> 0)(
                            "for(var i=0;i<%s.length;++i)",
                            t
                          )(
                            "w.%s(%s[i])",
                            m,
                            t
                          )("w.ldelim()")
                        : (n("for(var i=0;i<%s.length;++i)", t),
                          void 0 === _
                            ? l(n, c, u, t + "[i]")
                            : n(
                                "w.uint32(%i).%s(%s[i])",
                                ((c.id << 3) | _) >>> 0,
                                m,
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
                        ? l(n, c, u, t)
                        : n(
                            "w.uint32(%i).%s(%s)",
                            ((c.id << 3) | _) >>> 0,
                            m,
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
              "./enum": __cjsMetaURL$C,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$E =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
        loader.define(
          __cjsMetaURL$E,
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
              "./index-minimal": __cjsMetaURL$g,
              "./encoder": __cjsMetaURL$D,
              "./decoder": __cjsMetaURL$u,
              "./verifier": __cjsMetaURL$v,
              "./converter": __cjsMetaURL$w,
              "./object": __cjsMetaURL$B,
              "./namespace": __cjsMetaURL$p,
              "./root": __cjsMetaURL$z,
              "./enum": __cjsMetaURL$C,
              "./type": __cjsMetaURL$y,
              "./field": __cjsMetaURL$n,
              "./oneof": __cjsMetaURL$o,
              "./mapfield": __cjsMetaURL$q,
              "./service": __cjsMetaURL$s,
              "./method": __cjsMetaURL$r,
              "./message": __cjsMetaURL$t,
              "./wrappers": __cjsMetaURL$x,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$F =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, n, i, o) {
            n.exports = h;
            var r = /[\s{}=;:[\],'"()<>]/g,
              a = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              s = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              l = /^ *[*/]+ */,
              c = /^\s*\*?\/*/,
              u = /\n/g,
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
              var n = 0,
                i = e.length,
                o = 1,
                _ = null,
                p = null,
                h = 0,
                f = !1,
                S = !1,
                y = [],
                g = null;
              function b(e) {
                return Error("illegal " + e + " (line " + o + ")");
              }
              function A(t) {
                return e.charAt(t);
              }
              function w(n, i, r) {
                (_ = e.charAt(n++)), (h = o), (f = !1), (S = r);
                var a,
                  s = n - (t ? 2 : 3);
                do {
                  if (--s < 0 || "\n" === (a = e.charAt(s))) {
                    f = !0;
                    break;
                  }
                } while (" " === a || "\t" === a);
                for (
                  var m = e.substring(n, i).split(u), d = 0;
                  d < m.length;
                  ++d
                )
                  m[d] = m[d].replace(t ? c : l, "").trim();
                p = m.join("\n").trim();
              }
              function v(t) {
                var n = $(t),
                  i = e.substring(t, n);
                return /^\s*\/{1,2}/.test(i);
              }
              function $(e) {
                for (var t = e; t < i && "\n" !== A(t); ) t++;
                return t;
              }
              function C() {
                if (y.length > 0) return y.shift();
                if (g)
                  return (function () {
                    var t = "'" === g ? s : a;
                    t.lastIndex = n - 1;
                    var i = t.exec(e);
                    if (!i) throw b("string");
                    return (n = t.lastIndex), T(g), (g = null), d(i[1]);
                  })();
                var l,
                  c,
                  u,
                  _,
                  p,
                  h = 0 === n;
                do {
                  if (n === i) return null;
                  for (l = !1; m.test((u = A(n))); )
                    if (("\n" === u && ((h = !0), ++o), ++n === i)) return null;
                  if ("/" === A(n)) {
                    if (++n === i) throw b("comment");
                    if ("/" === A(n))
                      if (t) {
                        if (((_ = n), (p = !1), v(n))) {
                          p = !0;
                          do {
                            if ((n = $(n)) === i) break;
                            n++;
                          } while (v(n));
                        } else n = Math.min(i, $(n) + 1);
                        p && w(_, n, h), o++, (l = !0);
                      } else {
                        for (p = "/" === A((_ = n + 1)); "\n" !== A(++n); )
                          if (n === i) return null;
                        ++n, p && w(_, n - 1, h), ++o, (l = !0);
                      }
                    else {
                      if ("*" !== (u = A(n))) return "/";
                      (_ = n + 1), (p = t || "*" === A(_));
                      do {
                        if (("\n" === u && ++o, ++n === i)) throw b("comment");
                        (c = u), (u = A(n));
                      } while ("*" !== c || "/" !== u);
                      ++n, p && w(_, n - 2, h), (l = !0);
                    }
                  }
                } while (l);
                var f = n;
                if (((r.lastIndex = 0), !r.test(A(f++))))
                  for (; f < i && !r.test(A(f)); ) ++f;
                var S = e.substring(n, (n = f));
                return ('"' !== S && "'" !== S) || (g = S), S;
              }
              function T(e) {
                y.push(e);
              }
              function D() {
                if (!y.length) {
                  var e = C();
                  if (null === e) return null;
                  T(e);
                }
                return y[0];
              }
              return Object.defineProperty(
                {
                  next: C,
                  peek: D,
                  push: T,
                  skip: function (e, t) {
                    var n = D();
                    if (n === e) return C(), !0;
                    if (!t) throw b("token '" + n + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var n = null;
                    return (
                      void 0 === e
                        ? h === o - 1 &&
                          (t || "*" === _ || f) &&
                          (n = S ? p : null)
                        : (h < e && D(),
                          h !== e ||
                            f ||
                            (!t && "/" !== _) ||
                            (n = S ? null : p)),
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
            (h.unescape = d), n.exports;
          },
          {}
        );
        var __cjsMetaURL$G =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$G,
          function (e, t, n, i, o) {
            (n.exports = T),
              (T.filename = null),
              (T.defaults = { keepCase: !1 });
            var r = t("./tokenize"),
              a = t("./root"),
              s = t("./type"),
              l = t("./field"),
              c = t("./mapfield"),
              u = t("./oneof"),
              m = t("./enum"),
              _ = t("./service"),
              p = t("./method"),
              d = t("./types"),
              h = t("./util"),
              f = /^[1-9][0-9]*$/,
              S = /^-?[1-9][0-9]*$/,
              y = /^0[x][0-9a-fA-F]+$/,
              g = /^-?0[x][0-9a-fA-F]+$/,
              b = /^0[0-7]+$/,
              A = /^-?0[0-7]+$/,
              w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              v = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              $ =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              C = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function T(e, t, n) {
              t instanceof a || ((n = t), (t = new a())), n || (n = T.defaults);
              var i,
                o,
                D,
                R,
                E,
                I = n.preferTrailingComment || !1,
                k = r(e, n.alternateCommentMode || !1),
                N = k.next,
                P = k.push,
                O = k.peek,
                G = k.skip,
                M = k.cmnt,
                L = !0,
                F = !1,
                B = t,
                x = n.keepCase
                  ? function (e) {
                      return e;
                    }
                  : h.camelCase;
              function j(e, t, n) {
                var i = T.filename;
                return (
                  n || (T.filename = null),
                  Error(
                    "illegal " +
                      (t || "token") +
                      " '" +
                      e +
                      "' (" +
                      (i ? i + ", " : "") +
                      "line " +
                      k.line +
                      ")"
                  )
                );
              }
              function W() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = N()) && "'" !== e) throw j(e);
                  t.push(N()), G(e), (e = O());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function H(e) {
                var t = N();
                switch (t) {
                  case "'":
                  case '"':
                    return P(t), W();
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
                    if (f.test(e)) return n * parseInt(e, 10);
                    if (y.test(e)) return n * parseInt(e, 16);
                    if (b.test(e)) return n * parseInt(e, 8);
                    if (w.test(e)) return n * parseFloat(e);
                    throw j(e, "number", t);
                  })(t, !0);
                } catch (n) {
                  if (e && $.test(t)) return t;
                  throw j(t, "value");
                }
              }
              function U(e, t) {
                var n, i;
                do {
                  !t || ('"' !== (n = O()) && "'" !== n)
                    ? e.push([(i = V(N())), G("to", !0) ? V(N()) : i])
                    : e.push(W());
                } while (G(",", !0));
                G(";");
              }
              function V(e, t) {
                switch (e) {
                  case "max":
                  case "MAX":
                  case "Max":
                    return 536870911;
                  case "0":
                    return 0;
                }
                if (!t && "-" === e.charAt(0)) throw j(e, "id");
                if (S.test(e)) return parseInt(e, 10);
                if (g.test(e)) return parseInt(e, 16);
                if (A.test(e)) return parseInt(e, 8);
                throw j(e, "id");
              }
              function Y() {
                if (void 0 !== i) throw j("package");
                if (((i = N()), !$.test(i))) throw j(i, "name");
                (B = B.define(i)), G(";");
              }
              function z() {
                var e,
                  t = O();
                switch (t) {
                  case "weak":
                    (e = D || (D = [])), N();
                    break;
                  case "public":
                    N();
                  default:
                    e = o || (o = []);
                }
                (t = W()), G(";"), e.push(t);
              }
              function K() {
                if (
                  (G("="), (R = W()), !(F = "proto3" === R) && "proto2" !== R)
                )
                  throw j(R, "syntax");
                G(";");
              }
              function q(e, t) {
                switch (t) {
                  case "option":
                    return Z(e, t), G(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!v.test((t = N()))) throw j(t, "type name");
                        var n = new s(t);
                        Q(n, function (e) {
                          if (!q(n, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  G("<");
                                  var t = N();
                                  if (void 0 === d.mapKey[t])
                                    throw j(t, "type");
                                  G(",");
                                  var n = N();
                                  if (!$.test(n)) throw j(n, "type");
                                  G(">");
                                  var i = N();
                                  if (!v.test(i)) throw j(i, "name");
                                  G("=");
                                  var o = new c(x(i), V(N()), t, n);
                                  Q(
                                    o,
                                    function (e) {
                                      if ("option" !== e) throw j(e);
                                      Z(o, e), G(";");
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
                                J(n, e);
                                break;
                              case "optional":
                                J(n, F ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!v.test((t = N()))) throw j(t, "name");
                                  var n = new u(x(t));
                                  Q(n, function (e) {
                                    "option" === e
                                      ? (Z(n, e), G(";"))
                                      : (P(e), J(n, "optional"));
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
                                if (!F || !$.test(e)) throw j(e);
                                P(e), J(n, "optional");
                            }
                        }),
                          e.add(n);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!v.test((t = N()))) throw j(t, "name");
                        var n = new m(t);
                        Q(n, function (e) {
                          switch (e) {
                            case "option":
                              Z(n, e), G(";");
                              break;
                            case "reserved":
                              U(n.reserved || (n.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!v.test(t)) throw j(t, "name");
                                G("=");
                                var n = V(N(), !0),
                                  i = {};
                                Q(
                                  i,
                                  function (e) {
                                    if ("option" !== e) throw j(e);
                                    Z(i, e), G(";");
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
                        if (!v.test((t = N()))) throw j(t, "service name");
                        var n = new _(t);
                        Q(n, function (e) {
                          if (!q(n, e)) {
                            if ("rpc" !== e) throw j(e);
                            !(function (e, t) {
                              var n = M(),
                                i = t;
                              if (!v.test((t = N()))) throw j(t, "name");
                              var o,
                                r,
                                a,
                                s,
                                l = t;
                              G("("), G("stream", !0) && (r = !0);
                              if (!$.test((t = N()))) throw j(t);
                              (o = t),
                                G(")"),
                                G("returns"),
                                G("("),
                                G("stream", !0) && (s = !0);
                              if (!$.test((t = N()))) throw j(t);
                              (a = t), G(")");
                              var c = new p(l, i, o, a, r, s);
                              (c.comment = n),
                                Q(c, function (e) {
                                  if ("option" !== e) throw j(e);
                                  Z(c, e), G(";");
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
                        if (!$.test((t = N()))) throw j(t, "reference");
                        var n = t;
                        Q(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              J(e, t, n);
                              break;
                            case "optional":
                              J(e, F ? "proto3_optional" : "optional", n);
                              break;
                            default:
                              if (!F || !$.test(t)) throw j(t);
                              P(t), J(e, "optional", n);
                          }
                        });
                      })(e, t),
                      !0
                    );
                }
                return !1;
              }
              function Q(e, t, n) {
                var i = k.line;
                if (
                  (e &&
                    ("string" != typeof e.comment && (e.comment = M()),
                    (e.filename = T.filename)),
                  G("{", !0))
                ) {
                  for (var o; "}" !== (o = N()); ) t(o);
                  G(";", !0);
                } else
                  n && n(),
                    G(";"),
                    e &&
                      ("string" != typeof e.comment || I) &&
                      (e.comment = M(i) || e.comment);
              }
              function J(e, t, n) {
                var i = N();
                if ("group" !== i) {
                  if (!$.test(i)) throw j(i, "type");
                  var o = N();
                  if (!v.test(o)) throw j(o, "name");
                  (o = x(o)), G("=");
                  var r = new l(o, V(N()), i, t, n);
                  if (
                    (Q(
                      r,
                      function (e) {
                        if ("option" !== e) throw j(e);
                        Z(r, e), G(";");
                      },
                      function () {
                        te(r);
                      }
                    ),
                    "proto3_optional" === t)
                  ) {
                    var a = new u("_" + o);
                    r.setOption("proto3_optional", !0), a.add(r), e.add(a);
                  } else e.add(r);
                  F ||
                    !r.repeated ||
                    (void 0 === d.packed[i] && void 0 !== d.basic[i]) ||
                    r.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var n = N();
                    if (!v.test(n)) throw j(n, "name");
                    var i = h.lcFirst(n);
                    n === i && (n = h.ucFirst(n));
                    G("=");
                    var o = V(N()),
                      r = new s(n);
                    r.group = !0;
                    var a = new l(i, o, n, t);
                    (a.filename = T.filename),
                      Q(r, function (e) {
                        switch (e) {
                          case "option":
                            Z(r, e), G(";");
                            break;
                          case "required":
                          case "repeated":
                            J(r, e);
                            break;
                          case "optional":
                            J(r, F ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw j(e);
                        }
                      }),
                      e.add(r).add(a);
                  })(e, t);
              }
              function Z(e, t) {
                var n = G("(", !0);
                if (!$.test((t = N()))) throw j(t, "name");
                var i,
                  o = t,
                  r = o;
                n &&
                  (G(")"),
                  (r = o = "(" + o + ")"),
                  (t = O()),
                  C.test(t) && ((i = t.substr(1)), (o += t), N())),
                  G("="),
                  (function (e, t, n, i) {
                    e.setParsedOption && e.setParsedOption(t, n, i);
                  })(e, r, X(e, o), i);
              }
              function X(e, t) {
                if (G("{", !0)) {
                  for (var n = {}; !G("}", !0); ) {
                    if (!v.test((E = N()))) throw j(E, "name");
                    var i,
                      o = E;
                    "{" === O()
                      ? (i = X(e, t + "." + E))
                      : (G(":"),
                        "{" === O()
                          ? (i = X(e, t + "." + E))
                          : ((i = H(!0)), ee(e, t + "." + E, i)));
                    var r = n[o];
                    r && (i = [].concat(r).concat(i)), (n[o] = i), G(",", !0);
                  }
                  return n;
                }
                var a = H(!0);
                return ee(e, t, a), a;
              }
              function ee(e, t, n) {
                e.setOption && e.setOption(t, n);
              }
              function te(e) {
                if (G("[", !0)) {
                  do {
                    Z(e, "option");
                  } while (G(",", !0));
                  G("]");
                }
                return e;
              }
              for (; null !== (E = N()); )
                switch (E) {
                  case "package":
                    if (!L) throw j(E);
                    Y();
                    break;
                  case "import":
                    if (!L) throw j(E);
                    z();
                    break;
                  case "syntax":
                    if (!L) throw j(E);
                    K();
                    break;
                  case "option":
                    Z(B, E), G(";");
                    break;
                  default:
                    if (q(B, E)) {
                      L = !1;
                      continue;
                    }
                    throw j(E);
                }
              return (
                (T.filename = null),
                { package: i, imports: o, weakImports: D, syntax: R, root: t }
              );
            }
            n.exports;
          },
          function () {
            return {
              "./tokenize": __cjsMetaURL$F,
              "./root": __cjsMetaURL$z,
              "./type": __cjsMetaURL$y,
              "./field": __cjsMetaURL$n,
              "./mapfield": __cjsMetaURL$q,
              "./oneof": __cjsMetaURL$o,
              "./enum": __cjsMetaURL$C,
              "./service": __cjsMetaURL$s,
              "./method": __cjsMetaURL$r,
              "./types": __cjsMetaURL$m,
              "./util": __cjsMetaURL$A,
            };
          }
        );
        var __cjsMetaURL$H =
          "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$H,
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
        var __cjsMetaURL$I =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
          _cjsExports$1;
        loader.define(
          __cjsMetaURL$I,
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
              "./index-light": __cjsMetaURL$E,
              "./tokenize": __cjsMetaURL$F,
              "./parse": __cjsMetaURL$G,
              "./common": __cjsMetaURL$H,
            };
          }
        );
        var __cjsMetaURL$J =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/index.js",
          _cjsExports$2;
        loader.define(
          __cjsMetaURL$J,
          function (e, t, n, i, o) {
            (n.exports = t("./src/index")), (_cjsExports$1 = n.exports);
          },
          function () {
            return { "./src/index": __cjsMetaURL$I };
          }
        ),
          __cjsMetaURL$J ||
            loader.throwInvalidWrapper(
              "./index.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$J);
        var __cjsMetaURL$K =
            "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/long/src/long.js",
          _dec$C,
          _dec2$i,
          _dec3$e,
          _dec4$a,
          _dec5$9,
          _dec6$6,
          _dec7$4,
          _dec8$3,
          _dec9$2,
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
          _dec21,
          _dec22,
          _class$C,
          _class2$i,
          _descriptor$i,
          _descriptor2$e,
          _descriptor3$a,
          _descriptor4$9,
          _descriptor5$6,
          _descriptor6$4,
          _descriptor7$3,
          _descriptor8$2,
          _descriptor9,
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
          _descriptor20,
          _descriptor21;
        loader.define(
          __cjsMetaURL$K,
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
            function u(e, t) {
              var n, i, o;
              return t
                ? (o = 0 <= (e >>>= 0) && e < 256) && (i = c[e])
                  ? i
                  : ((n = _(e, (0 | e) < 0 ? -1 : 0, !0)), o && (c[e] = n), n)
                : (o = -128 <= (e |= 0) && e < 128) && (i = l[e])
                ? i
                : ((n = _(e, e < 0 ? -1 : 0, !1)), o && (l[e] = n), n);
            }
            function m(e, t) {
              if (isNaN(e)) return t ? A : b;
              if (t) {
                if (e < 0) return A;
                if (e >= S) return T;
              } else {
                if (e <= -y) return D;
                if (e + 1 >= y) return C;
              }
              return e < 0 ? m(-e, t).neg() : _(e % f | 0, (e / f) | 0, t);
            }
            function _(e, t, n) {
              return new a(e, t, n);
            }
            (a.fromInt = u), (a.fromNumber = m), (a.fromBits = _);
            var p = Math.pow;
            function d(e, t, n) {
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
              if (0 === i) return d(e.substring(1), t, n).neg();
              for (var o = m(p(n, 8)), r = b, a = 0; a < e.length; a += 8) {
                var s = Math.min(8, e.length - a),
                  l = parseInt(e.substring(a, a + s), n);
                if (s < 8) {
                  var c = m(p(n, s));
                  r = r.mul(c).add(m(l));
                } else r = (r = r.mul(o)).add(m(l));
              }
              return (r.unsigned = t), r;
            }
            function h(e, t) {
              return "number" == typeof e
                ? m(e, t)
                : "string" == typeof e
                ? d(e, t)
                : _(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (a.fromString = d), (a.fromValue = h);
            var f = 4294967296,
              S = f * f,
              y = S / 2,
              g = u(1 << 24),
              b = u(0);
            a.ZERO = b;
            var A = u(0, !0);
            a.UZERO = A;
            var w = u(1);
            a.ONE = w;
            var v = u(1, !0);
            a.UONE = v;
            var $ = u(-1);
            a.NEG_ONE = $;
            var C = _(-1, 2147483647, !1);
            a.MAX_VALUE = C;
            var T = _(-1, -1, !0);
            a.MAX_UNSIGNED_VALUE = T;
            var D = _(0, -2147483648, !1);
            a.MIN_VALUE = D;
            var R = a.prototype;
            (R.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              (R.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * f + (this.low >>> 0)
                  : this.high * f + (this.low >>> 0);
              }),
              (R.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(D)) {
                    var t = m(e),
                      n = this.div(t),
                      i = n.mul(t).sub(this);
                    return n.toString(e) + i.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var o = m(p(e, 6), this.unsigned), r = this, a = ""; ; ) {
                  var s = r.div(o),
                    l = (r.sub(s.mul(o)).toInt() >>> 0).toString(e);
                  if ((r = s).isZero()) return l + a;
                  for (; l.length < 6; ) l = "0" + l;
                  a = "" + l + a;
                }
              }),
              (R.getHighBits = function () {
                return this.high;
              }),
              (R.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              (R.getLowBits = function () {
                return this.low;
              }),
              (R.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              (R.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(D) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              (R.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              (R.eqz = R.isZero),
              (R.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              (R.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              (R.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              (R.isEven = function () {
                return 0 == (1 & this.low);
              }),
              (R.equals = function (e) {
                return (
                  s(e) || (e = h(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              (R.eq = R.equals),
              (R.notEquals = function (e) {
                return !this.eq(e);
              }),
              (R.neq = R.notEquals),
              (R.ne = R.notEquals),
              (R.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              (R.lt = R.lessThan),
              (R.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              (R.lte = R.lessThanOrEqual),
              (R.le = R.lessThanOrEqual),
              (R.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              (R.gt = R.greaterThan),
              (R.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              (R.gte = R.greaterThanOrEqual),
              (R.ge = R.greaterThanOrEqual),
              (R.compare = function (e) {
                if ((s(e) || (e = h(e)), this.eq(e))) return 0;
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
              (R.comp = R.compare),
              (R.negate = function () {
                return !this.unsigned && this.eq(D) ? D : this.not().add(w);
              }),
              (R.neg = R.negate),
              (R.add = function (e) {
                s(e) || (e = h(e));
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  r = e.high >>> 16,
                  a = 65535 & e.high,
                  l = e.low >>> 16,
                  c = 0,
                  u = 0,
                  m = 0,
                  p = 0;
                return (
                  (m += (p += o + (65535 & e.low)) >>> 16),
                  (u += (m += i + l) >>> 16),
                  (c += (u += n + a) >>> 16),
                  (c += t + r),
                  _(
                    ((m &= 65535) << 16) | (p &= 65535),
                    ((c &= 65535) << 16) | (u &= 65535),
                    this.unsigned
                  )
                );
              }),
              (R.subtract = function (e) {
                return s(e) || (e = h(e)), this.add(e.neg());
              }),
              (R.sub = R.subtract),
              (R.multiply = function (e) {
                if (this.isZero()) return b;
                if ((s(e) || (e = h(e)), r))
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
                  return m(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  a = e.high >>> 16,
                  l = 65535 & e.high,
                  c = e.low >>> 16,
                  u = 65535 & e.low,
                  p = 0,
                  d = 0,
                  f = 0,
                  S = 0;
                return (
                  (f += (S += o * u) >>> 16),
                  (d += (f += i * u) >>> 16),
                  (f &= 65535),
                  (d += (f += o * c) >>> 16),
                  (p += (d += n * u) >>> 16),
                  (d &= 65535),
                  (p += (d += i * c) >>> 16),
                  (d &= 65535),
                  (p += (d += o * l) >>> 16),
                  (p += t * u + n * c + i * l + o * a),
                  _(
                    ((f &= 65535) << 16) | (S &= 65535),
                    ((p &= 65535) << 16) | (d &= 65535),
                    this.unsigned
                  )
                );
              }),
              (R.mul = R.multiply),
              (R.divide = function (e) {
                if ((s(e) || (e = h(e)), e.isZero()))
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
                if (this.isZero()) return this.unsigned ? A : b;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return A;
                  if (e.gt(this.shru(1))) return v;
                  i = A;
                } else {
                  if (this.eq(D))
                    return e.eq(w) || e.eq($)
                      ? D
                      : e.eq(D)
                      ? w
                      : (t = this.shr(1).div(e).shl(1)).eq(b)
                      ? e.isNegative()
                        ? w
                        : $
                      : ((n = this.sub(e.mul(t))), (i = t.add(n.div(e))));
                  if (e.eq(D)) return this.unsigned ? A : b;
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
                      l = m(t),
                      c = l.mul(e);
                    c.isNegative() || c.gt(n);

                  )
                    c = (l = m((t -= a), this.unsigned)).mul(e);
                  l.isZero() && (l = w), (i = i.add(l)), (n = n.sub(c));
                }
                return i;
              }),
              (R.div = R.divide),
              (R.modulo = function (e) {
                return (
                  s(e) || (e = h(e)),
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
              (R.mod = R.modulo),
              (R.rem = R.modulo),
              (R.not = function () {
                return _(~this.low, ~this.high, this.unsigned);
              }),
              (R.and = function (e) {
                return (
                  s(e) || (e = h(e)),
                  _(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              (R.or = function (e) {
                return (
                  s(e) || (e = h(e)),
                  _(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              (R.xor = function (e) {
                return (
                  s(e) || (e = h(e)),
                  _(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              (R.shiftLeft = function (e) {
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
              (R.shl = R.shiftLeft),
              (R.shiftRight = function (e) {
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
              (R.shr = R.shiftRight),
              (R.shiftRightUnsigned = function (e) {
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
              (R.shru = R.shiftRightUnsigned),
              (R.shr_u = R.shiftRightUnsigned),
              (R.toSigned = function () {
                return this.unsigned ? _(this.low, this.high, !1) : this;
              }),
              (R.toUnsigned = function () {
                return this.unsigned ? this : _(this.low, this.high, !0);
              }),
              (R.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              (R.toBytesLE = function () {
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
              (R.toBytesBE = function () {
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
              (_cjsExports$2 = n.exports);
          },
          {}
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/m2mac1/Desktop/H5/Client/workspace/PartyStar/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push({}, "af6ea1BfVNBkpilA8cl1ame", "GameView", void 0);
        var WIDTH = 1136,
          HEIGHT = 640,
          FADE_TYPE = { IN: 0, OUT: 1 },
          ccclass$C = _decorator.ccclass,
          property$i = _decorator.property,
          GameView =
            ((_dec$C = ccclass$C("GameView")),
            (_dec2$i = property$i({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec3$e = property$i({
              type: Animation,
              tooltip: "主場直橫動畫",
            })),
            (_dec4$a = property$i({ type: GameBg, tooltip: "背景" })),
            (_dec5$9 = property$i({ type: Sprite, tooltip: "logo" })),
            (_dec6$6 = property$i({ type: Node, tooltip: "盤面本體" })),
            (_dec7$4 = property$i({ type: Node, tooltip: "特效表演" })),
            (_dec8$3 = property$i({ type: Node_BothWay, tooltip: "特效表演" })),
            (_dec9$2 = property$i({ type: CharacterSpine, tooltip: "角色" })),
            (_dec10 = property$i({ type: FgCounter, tooltip: "計數器" })),
            (_dec11 = property$i({
              type: DeclareSpine,
              tooltip: "FG宣告表演",
            })),
            (_dec12 = property$i({ type: FgCompliment, tooltip: "FG結算" })),
            (_dec13 = property$i({
              type: BigWinComponent,
              tooltip: "大獎表演",
            })),
            (_dec14 = property$i({ type: SmallWin, tooltip: "大獎表演" })),
            (_dec15 = property$i({
              type: GameIntro,
              tooltip: "前導動畫直橫版",
            })),
            (_dec16 = property$i({ type: NodeReel, tooltip: "大獎表演" })),
            (_dec17 = property$i({ type: NodeSP, tooltip: "大獎表演" })),
            (_dec18 = property$i({ type: DjDeclare, tooltip: "DJ表演" })),
            (_dec19 = property$i({ type: Animation, tooltip: "Sbg動畫" })),
            (_dec20 = property$i({
              type: ManualComponent,
              tooltip: "特色描述",
            })),
            (_dec21 = property$i({ type: Node, tooltip: "地bar定位點" })),
            (_dec22 = property$i({ type: Shake, tooltip: "畫面震動組件" })),
            _dec$C(
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
                      "m_titleSpriteAtlas",
                      _descriptor$i,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mainAnim",
                      _descriptor2$e,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameBg",
                      _descriptor3$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprite",
                      _descriptor4$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReelsNode",
                      _descriptor5$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlateNode",
                      _descriptor6$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bothWay",
                      _descriptor7$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_characterSpine",
                      _descriptor8$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_counter",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_declare",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_compliment",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigWinComponent",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_smallWin",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameintro",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nodeReel",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nodeSP",
                      _descriptor16,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_djDeclare",
                      _descriptor17,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_sbgAnim",
                      _descriptor18,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manualComponent",
                      _descriptor19,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_barNode",
                      _descriptor20,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_shakeNode",
                      _descriptor21,
                      _assertThisInitialized(t)
                    ),
                    (t.m_lastClickTime = void 0),
                    (t.m_timer = null),
                    (t.m_heartBeatTimer = null),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_isLandscape = !1),
                    (t.m_aId = -1),
                    (t.m_token = ""),
                    (t.m_exchangeValidStamp = ""),
                    (t.m_spinAck = null),
                    (t.m_autoplayInfos = null),
                    (t.m_isSpined = !1),
                    (t.m_showIndex = ""),
                    (t.m_realFeaturesSpinAck = null),
                    (t.m_slotReels = null),
                    (t.m_effectPlate = null),
                    (t.m_bgFadeInTime = 1),
                    (t.m_isBgFadeIn = !1),
                    (t.m_bgAudioId = null),
                    (t.m_bgAudioName = null),
                    (t.m_isBgFadeOut = !1),
                    (t.m_changeBgAudio = null),
                    (t.m_bigWinSoundId = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_data = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    (_cjsExports$1.util.Long = _cjsExports$2),
                      _cjsExports$1.configure(),
                      AstarteInit(),
                      (node$6.IsInMG = function () {
                        return !Game_Define.IsInFG;
                      }),
                      (node$6.CURRENCY_CHANGE_ENABLE = !0),
                      sys.isNative ||
                        ((window.onbeforeunload = function () {}),
                        (window.onerror = function (e, t, n, i, o) {
                          var r = "-1",
                            a = 0;
                          node$6.APP &&
                            ((r = node$6.APP.GetAID()),
                            (a = Number(node$6.APP.GetApiID())));
                          var s = node$d.FormErrorParams(
                            r,
                            a,
                            Number(node$6.NOW_GAME_ID),
                            Game_Define.Ver,
                            o
                          );
                          node$d.SendErrorLog(s);
                        })),
                      (this.m_timer = new TimeBool()),
                      this.m_timer.UseDT(!0),
                      (this.m_heartBeatTimer = new TimeBool()),
                      this.m_heartBeatTimer.UseDT(!0);
                  }),
                  (n.start = function () {
                    var e = this;
                    (this.m_slotReels =
                      this.m_slotReelsNode.getComponent(SlotReels)),
                      (this.m_effectPlate =
                        this.m_effectPlateNode.getComponent(EffectPlate)),
                      this.m_slotReels.Init(this, this.m_effectPlate),
                      this.m_effectPlate.Init(
                        this,
                        this.m_slotReels,
                        this.m_characterSpine
                      ),
                      this.m_nodeSP.Init(this),
                      this.m_smallWin.Init(this),
                      this.m_bothWay.Init(this),
                      this.m_manualComponent.SetTxt(
                        ["String_01", "String_02", "String_03", "String_04"],
                        "String_00"
                      ),
                      this.m_bigWinComponent.Init(
                        function (t, n, i) {
                          switch (n) {
                            case "Sound1":
                              null == e.m_bigWinSoundId
                                ? (e.m_bigWinSoundId = node$1.Play(
                                    Game_Define.AudioClips.Big_win
                                  ))
                                : i == BigWinAnimName.Mega.Start
                                ? node$1.Play(
                                    Game_Define.AudioClips.ChangeWin_1
                                  )
                                : i == BigWinAnimName.Super.Start &&
                                  node$1.Play(
                                    Game_Define.AudioClips.ChangeWin_2
                                  );
                              break;
                            case "Sound2":
                              e.m_bigWinSoundId &&
                                (node$1.Stop(e.m_bigWinSoundId),
                                (e.m_bigWinSoundId = null)),
                                node$1.Play(Game_Define.AudioClips.Big_win_end);
                          }
                        },
                        function (e) {
                          return Game_Define.ShowDisplayValue
                            ? Game_Define.ShowDisplayValue(e)
                            : e;
                        }
                      ),
                      node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        input.on(Input.EventType.KEY_DOWN, function (t) {
                          switch (t.keyCode) {
                            case KeyCode.SPACE:
                              node$3.SendSpinLog(),
                                node$7 &&
                                  !node$7.IsShowBackpack() &&
                                  (node$3.BtnState == SlotBottomBarState.IDLE
                                    ? ((Game_Define.SpinClickEvent =
                                        node$6.BTN_CLICK_EVENT.SPACE_SPIN),
                                      e.ClickSpin())
                                    : (node$4.Current() !=
                                        GAME_STATE_BASE.AWARD &&
                                        node$4.Current() !=
                                          GAME_STATE_FG.LEAVE_FREE) ||
                                      e.ClickStopSpin());
                          }
                        }),
                      node$2.CheckSwitchOff(SwitchOffKeyDefine.CloseManual) &&
                        (this.m_manualComponent.node.active = !1),
                      this.registerStates(),
                      this.OnRotation(),
                      node$2.AddOnRotationCb(function () {
                        e.OnRotation();
                      }),
                      this.appManagerInit();
                  }),
                  (n.update = function (e) {
                    if (this.m_isBgFadeIn)
                      if (null !== this.m_bgAudioId) {
                        var t = node$1.GetVolume(this.m_bgAudioId);
                        (t += e) > this.m_bgFadeInTime
                          ? ((t = this.m_bgFadeInTime),
                            (this.m_isBgFadeIn = !1))
                          : Game_Define.AudioClips.BGM_MG &&
                            this.m_bgAudioName ===
                              Game_Define.AudioClips.BGM_MG.name &&
                            t > 0.5 &&
                            ((t = 0.5), (this.m_isBgFadeIn = !1)),
                          node$1.SetVolume(this.m_bgAudioId, t);
                      } else this.m_isBgFadeIn = !1;
                    if (this.m_isBgFadeOut)
                      if (null !== this.m_bgAudioId) {
                        var n = node$1.GetVolume(this.m_bgAudioId);
                        (n -= e) <= 0
                          ? ((n = 0),
                            (this.m_isBgFadeOut = !1),
                            this.m_changeBgAudio
                              ? (node$1.Stop(this.m_bgAudioId),
                                this.ChangeBgMusic(this.m_changeBgAudio),
                                node$1.SetVolume(this.m_bgAudioId, 0),
                                (this.m_changeBgAudio = null),
                                this.ChangeFadeType(FADE_TYPE.IN))
                              : node$1.SetVolume(this.m_bgAudioId, n))
                          : node$1.SetVolume(this.m_bgAudioId, n);
                      } else this.m_isBgFadeOut = !1;
                    this.m_effectPlate.FollowScatter(), node$4.Tick(e);
                  }),
                  (n.ChangeBgMusic = function (e) {
                    null !== this.m_bgAudioId &&
                      (node$1.Stop(this.m_bgAudioId),
                      (this.m_bgAudioId = null)),
                      (this.m_bgAudioId = node$1.Play(e, !0)),
                      (this.m_bgAudioName = e.name);
                  }),
                  (n.ChangeFadeType = function (e, t) {
                    void 0 === t && (t = null),
                      (this.m_changeBgAudio = t),
                      e === FADE_TYPE.IN
                        ? ((this.m_isBgFadeIn = !0), (this.m_isBgFadeOut = !1))
                        : e == FADE_TYPE.OUT &&
                          ((this.m_isBgFadeIn = !1), (this.m_isBgFadeOut = !0));
                  }),
                  (n.OnExit = function () {}),
                  (n.registerStates = function () {
                    var e = {};
                    (e[GAME_STATE_BASE.AWARD] = new AwardState(this)),
                      (e[GAME_STATE_BASE.ROUND_SHOW_END] =
                        new RoundShowEndState(this)),
                      (e[CommonState.CHECK_STATE] = new CheckState(this)),
                      (e[GAME_STATE_BASE.ROUND_END] = new RoundEndState(this)),
                      (e[GAME_STATE_BASE.FEATURE_SHOW] = new FeatureShowState(
                        this
                      )),
                      (e[CommonState.IDLE] = new IdleState(this)),
                      (e[GAME_STATE_BASE.PLATE_SHOW] = new PlateShowState(
                        this
                      )),
                      (e[CommonState.SPIN] = new SpinState(this)),
                      (e[GAME_STATE_BASE.WAIT_READY] = new WaitReadyState(
                        this
                      )),
                      (e[CommonState.WAIT_RES] = new WaitResState(this)),
                      (e[GAME_STATE_BASE.UNSHOW_PREPARE] =
                        new UnshowPrepareState(this)),
                      (e[GAME_STATE_FG.ENTER_FREE] = new EnterFreeState(this)),
                      (e[GAME_STATE_FG.LEAVE_FREE] = new LeaveFreeState(this)),
                      (e[GAME_STATE_FG.ADD_FREE] = new AddFreeState(this)),
                      (e[GAME_STATE.EXPLODE] = new ExplodeState(this)),
                      (e[GAME_STATE.FIRST_PLATE] = new FirstPlateState(this)),
                      (e[GAME_STATE.SEND_FREE_STACK] = new SendFreeStackState(
                        this
                      )),
                      (e[GAME_STATE.MATCHING_PATCH_UP] =
                        new MatchingPatchUpState(this)),
                      (e[GAME_STATE.CHECK_SCATTER] = new CheckScatterState(
                        this
                      )),
                      (e[GAME_STATE.TRIGGER_MYSTERY] = new TriggerMysteryState(
                        this
                      )),
                      (e[GAME_STATE.BACK_TO_MYSTERY] = new BackToMysteryState(
                        this
                      )),
                      node$4.Init(e),
                      node$a.SetGameCb(this),
                      node$4.NextState(CommonState.LOGIN);
                  }),
                  (n.OnRotation = function () {
                    log("OnRotation");
                    var e = screen.windowSize;
                    (this.m_isLandscape = !1),
                      e.height / e.width <= WIDTH / HEIGHT
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
                      this.m_mainAnim.play("MainGame_S"),
                      this.node.getComponent(Animation).play("GameView_S"),
                      node$3 &&
                        node$3.OnRotation(
                          this.m_isLandscape,
                          function () {},
                          !0
                        ),
                      node$7 && node$7.OnRotation(this.m_isLandscape, !0),
                      node$5.OnRotate(this.m_isLandscape);
                  }),
                  (n.appManagerInit = function () {}),
                  (n.CancelSpin = function () {
                    this.m_slotReels.RecoverPlate(this.m_spinAck);
                  }),
                  (n.GetSpinInfo = function () {
                    return null;
                  }),
                  (n.RetryRoundEnd = function () {
                    node$a.ReqRoundEnd(
                      Game_Define.RoundIdx + 1,
                      Game_Define.RoundIdx >=
                        this.m_spinAck.RoundQueue.length - 1
                    );
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

                    switch (e) {
                      case node$6.AckType.info:
                        this.SettingBottomBar(),
                          node$3.AutoPlayPanelInit(),
                          node$7.FeaturesInit(
                            [
                              "/features/left/spriteFrame",
                              "/features/right/spriteFrame",
                            ],
                            [
                              Game_Define.StringKey.FEATURE_LEFT,
                              Game_Define.StringKey.FEATURE_RIGHT,
                            ],
                            4
                          );
                        var n = node.GetGameAtlas();
                        node$7.SetFeatruesDesc([
                          n.getSpriteFrame("txt1"),
                          n.getSpriteFrame("txt2"),
                        ]),
                          node$7.CheckFirstFeatures(),
                          this.LoginSuccess();
                        break;
                      case node$6.AckType.lastSpin:
                      case node$6.AckType.spin:
                        var i;
                        (i = _cjsExports.psProto.SpinAck.decode(t)),
                          log("OnRecvSpinAck", i),
                          this.OnRecvSpinAck(i);
                        
            SendTestSpinInfo(i, data);
break;
                      case node$6.AckType.unshow:
                        var o;
                        (this.m_data = t),
                          (o = _cjsExports.psProto.SpinAck.decode(t)),
                          log("unshow ack", o),
                          (this.m_unshowSpinAck = o);
                    }
                  }),
                  (n.OnRecvUnshowSpinAck = function (e) {
                    if (
                      (node$9.StartSpin(),
                      (this.m_spinAck = e),
                      Game_Define.IsInFG)
                    ) {
                      var t = node$2.minus(Game_Define.FgRound, 1);
                      (Game_Define.FgRound = t), this.m_counter.ShowCounter(t);
                    }
                    var n = this.GetRoundQueue(Game_Define.RoundIdx),
                      i = Game_Define.IsInFG ? n.SBGHeight : null;
                    this.SlotReels.SetPlateInfo(n),
                      this.m_effectPlate.ClearReelStop(),
                      this.m_nodeSP.CloseSp(),
                      this.m_gameBg.SetWays("..."),
                      this.m_slotReels.StartSpin(
                        node$3.IsHardStop,
                        node$3.IsAutoSpin
                      ),
                      i && i.length > 0
                        ? node$4.NextState(GAME_STATE.SEND_FREE_STACK)
                        : node$4.NextState(GAME_STATE.FIRST_PLATE);
                  }),
                  (n.OnRecvSpinAck = function (e) {
                    var t = this;
                    (this.m_spinAck = e),
                      (Game_Define.IsCheckChips = !1),
                      Game_Define.IsInFG ||
                        ((Game_Define.TotalWin = 0),
                        Tween.stopAllByTarget(this.node),
                        tween(this.node)
                          .delay(0.2)
                          .call(function () {
                            t.SetWin(4);
                          })
                          .start()),
                      (Game_Define.PlateIdx = 0),
                      (Game_Define.RoundIdx = 0);
                    var n = this.GetRoundQueue(Game_Define.RoundIdx);
                    n
                      ? (this.SlotReels.SetPlateInfo(n),
                        node$4.NextState(GAME_STATE.FIRST_PLATE))
                      : node$4.NextState(CommonState.IDLE);
                  }),
                  (n.ReqMail = function () {
                    node$6.APP && node$d.SendMailReq();
                  }),
                  (n.SetWin = function (e) {
                    if (
                      this.m_spinAck &&
                      !node$3.SetWinValueWithCheck({
                        maxWin: this.m_spinAck.TotalWin,
                        value: Game_Define.TotalWin,
                      })
                    ) {
                      var t = "ID:%s,RT:%s,T:%s,si:%s,Ridx:%s,Pidx:%s";
                      (t = js.formatStr(
                        t,
                        e,
                        this.m_spinAck.TotalWin,
                        Game_Define.TotalWin,
                        this.m_spinAck.ShowIndex,
                        Game_Define.RoundIdx,
                        Game_Define.PlateIdx
                      )),
                        error(t),
                        node$3.SendClickEvent(node$6.BTN_CLICK_EVENT.INGAME, t);
                    }
                  }),
                  (n.GetRoundQueue = function (e) {
                    return this.m_spinAck ? this.m_spinAck.RoundQueue[e] : null;
                  }),
                  (n.SettingBottomBar = function () {
                    var e = this;
                    (node$3.VerString =
                      "v_" + node$6.VERSION + "_" + Game_Define.Ver),
                      node$3.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node$3.SetWinValue(0),
                      (Game_Define.ShowDisplayValue = function (e) {
                        return node$3.GetDisplayValue(e);
                      }),
                      node$3.SetAutoplayConfirmCb(function (t) {
                        Game_Define.IsInFG
                          ? e.ClickSpin()
                          : node$e.Dispatch(CommonEventName.SpinReqNotify),
                          (e.m_autoplayInfos = JSON.parse(t));
                      }),
                      node$3.SetAutoPlaySettingPanelFreeGameString(
                        node$6.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME,
                        Game_Define.StringKey.BONUS_GAME_TXT
                      );
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node.CurrLang
                    );
                    node$3.ShowPlayReady(
                      t,
                      function () {
                        return (
                          node$4.Current() !== GAME_STATE_BASE.WAIT_READY ||
                          (node$4.NextState(GAME_STATE_BASE.PLATE_SHOW), !1)
                        );
                      },
                      function () {
                        node$4.Current() === GAME_STATE_BASE.WAIT_READY &&
                          (node$7.IsFeaturesDemo
                            ? node$4.NextState(GAME_STATE_BASE.FEATURE_SHOW)
                            : node$4.NextState(GAME_STATE_BASE.PLATE_SHOW));
                      }
                    ),
                      node$3.SetGameLogo([this.m_titleSprite.node]),
                      node$3.SetFollowNode(this.node),
                      node$2.CloseIntroLoading.push(function () {
                        node$a.HasUnshow &&
                          node$4.NextState(GAME_STATE_BASE.UNSHOW_PREPARE);
                      }),
                      this.GameIntro.Init(),
                      node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_slotReelsNode.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            if ((node$3.SendSpinLog(), !node$3.IsAutoSpin)) {
                              var n = !1,
                                i = Date.now();
                              if (null != e.m_lastClickTime)
                                i - e.m_lastClickTime > 1e3 && (n = !0);
                              else (e.m_lastClickTime = i), (n = !0);
                              if (!n) return;
                              e.BarTouchCb(t);
                            }
                          }
                        );
                  }),
                  (n.LoginSuccess = function () {
                    var e = this;
                    this.SetTxt(),
                      node$3.SetTxt(),
                      node$7.SetTxt(),
                      node$3.SetAutoPlayPanelTxt(),
                      node$3.SetAutoPlaySettingPanelFreeGameString(
                        node$6.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME
                      ),
                      this.OnRotation(),
                      node$7.SetCanAutoShowRankboardUI(),
                      node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL),
                      this.m_characterSpine.ShowIdle();
                    var t = function (t) {
                      var n, i;
                      Game_Define.AudioClips.hasOwnProperty(t) &&
                        ((n = Game_Define.AudioPathPre + t),
                        (i = function (n) {
                          (Game_Define.AudioClips[t] = n),
                            "BGM_MG" === t &&
                              null === e.m_bgAudioId &&
                              (e.ChangeBgMusic(Game_Define.AudioClips.BGM_MG),
                              node$1.SetVolume(e.m_bgAudioId, 0),
                              e.ChangeFadeType(FADE_TYPE.IN));
                        }),
                        node$6.GameBundle.load(n, function (e, t) {
                          e ? error(e.message || e) : i && i(t);
                        }));
                    };
                    for (var n in Game_Define.AudioClips) t(n);
                    sys.isNative && node$c.LoadingComplete();
                  }),
                  (n.SetTxt = function () {
                    var e = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node.CurrLang
                    );
                    e ||
                      (e = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + node$6.Lang.EN
                      )),
                      this.m_titleSprite &&
                        (this.m_titleSprite.spriteFrame = e),
                      this.m_counter.SetTxt();
                  }),
                  (n.FeaturesDemoInit = function () {
                    var e = this;
                    this.ChangeDemoPlateByRatio(),
                      node$3.FeaturesDemoInit(
                        function (t) {
                          log("demo select", t), e.PlayDemo(t);
                        },
                        this.m_realFeaturesSpinAck.length,
                        node$3.FindBetIndexByValue(10),
                        function () {
                          Game_Define.IsAutoShowFeatures &&
                            ((Game_Define.IsAutoShowFeatures = !1),
                            node$4.NextState(GAME_STATE_BASE.WAIT_READY));
                        }
                      );
                  }),
                  (n.InitExtra = function () {
                    var e = this;
                    if (node$6.APP) {
                      this.ReqMail(),
                        node$7.RecommendNewInit(),
                        node$f.NewInit(),
                        node$g.NewInit(),
                        node$h.JpManagerInit(),
                        node$h.MhbManagerInit();
                      node$i.NewInit(
                        function () {
                          node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                            node$e.Dispatch(CommonEventName.SpinReqNotify);
                        },
                        function () {
                          node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1);
                        }
                      ),
                        node$j.NewInit(),
                        node$7.RankingInit(
                          [node$6.APP.GetAccount(), node$6.APP.GetNickName()],
                          node$6.APP.GetAToken(),
                          node$2.ConvertLanguageToFull(node.CurrLang),
                          null,
                          null,
                          function () {
                            e.ReqMail();
                          }
                        );
                    }
                  }),
                  (n.ChangeDemoPlateByRatio = function () {
                    this.m_realFeaturesSpinAck = new Array();
                    var e = node$3.GetBetList()[node$3.FindBetIndexByValue(10)],
                      t = JSON.parse(JSON.stringify(FeaturesAck.INFO));
                    this.ChangeWinInfo(t, e),
                      this.m_realFeaturesSpinAck.push(t);
                  }),
                  (n.ChangeWinInfo = function (e, t) {
                    (e.TotalWin = e.TotalWin ? node$2.times(e.TotalWin, t) : 0),
                      (e.FreeTotalWin = e.FreeTotalWin
                        ? node$2.times(e.FreeTotalWin, t)
                        : 0);
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
                                    node$3.SetSpinState(
                                      SlotBottomBarState.CLICK_SPIN
                                    ),
                                    node$4.NextState(CommonState.SPIN),
                                    (e.next = 4),
                                    node$6.Wait(this, 0.5)
                                  );
                                case 4:
                                  this.m_slotReels.StartSpin(
                                    node$3.IsHardStop,
                                    node$3.IsAutoSpin
                                  ),
                                    new _cjsExports.psProto.SpinAck(),
                                    (n = this.m_realFeaturesSpinAck[t]),
                                    this.OnRecvSpinAck(n);
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
                  (n.BarTouchCb = function (e) {
                    var t = this,
                      n = e.target.name;
                    switch ((log("BarTouchCb", n), n)) {
                      case this.m_slotReelsNode.name:
                        if (
                          node$4.Current() != CommonState.IDLE ||
                          node$3.IsAutoSpin
                        )
                          node$3.IsSkipSmallFlash()
                            ? this.ClickSpin()
                            : this.ClickStopSpin();
                        else if (this.m_isFirstPlateSpin) {
                          this.m_isFirstPlateSpin = !1;
                          var i = {};
                          (i.contextKey =
                            node$6.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                            (i.titleKey =
                              node$6.StringKey.MSGBOX_TITLE_SYSTEM_INFO),
                            (i.showCancelBtn = !1),
                            (i.showConfirmBtn = !0),
                            (i.showCloseBtn = !0),
                            (i.confirmCB = function () {
                              (Game_Define.SpinClickEvent =
                                node$6.BTN_CLICK_EVENT.CLICK_PLATE),
                                t.ClickSpin();
                            }),
                            node$5.PushMessageBoxSetting(i);
                        } else
                          (Game_Define.SpinClickEvent =
                            node$6.BTN_CLICK_EVENT.CLICK_PLATE),
                            this.ClickSpin();
                        break;
                      case BottomBar_UIName.BTN_SPIN:
                        (node$4.Current() == CommonState.IDLE ||
                          node$6.FreeSpinRemain > 0) &&
                          ((Game_Define.SpinClickEvent =
                            node$6.BTN_CLICK_EVENT.SPIN),
                          this.ClickSpin());
                        break;
                      case BottomBar_UIName.BTN_SPINSTOP:
                        this.ClickStopSpin();
                        break;
                      case BottomBar_UIName.BTN_AUTOPLAY:
                        if (
                          !node$2.CheckSwitchOff(
                            SwitchOffKeyDefine.ShowAutoSetting
                          )
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
                          node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL),
                          node$4.Current() == GAME_STATE_BASE.AWARD &&
                            node$3.SetSpinState(
                              SlotBottomBarState.GET_AWARD_NO_AUTO
                            );
                    }
                  }),
                  (n.ClickSpin = function () {
                    if (!node$7.IsNowInDemoMenu)
                      if (
                        (node$3.GetChips() >=
                          node$2.strip(node$3.GetNowBetValue()) ||
                          Game_Define.IsInFG ||
                          node$3.IsFreeSpin) &&
                        node$f.IsBackpackPass()
                      )
                        node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      else if (node$f.IsBackpackPass()) {
                        var e = node$3.GetBetList();
                        node$2.strip(node$3.GetNowBetValue()) ==
                          node$2.strip(e[0]) ||
                        node$3.GetChips() < node$2.strip(e[0])
                          ? node$5.ShowMessageBox(
                              node$6.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : node$5.ShowMessageBox(
                              node$6.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      } else
                        node$3.SetSpinState(SlotBottomBarState.IDLE),
                          node$4.NextState(CommonState.IDLE);
                  }),
                  (n.ClickStopSpin = function () {
                    node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      (node$4.Current() == GAME_STATE_BASE.AWARD
                        ? (this.m_bigWinComponent.Stop(),
                          node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_NO_AUTO
                          ))
                        : node$3.IsAutoSpin
                        ? node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                          )
                        : node$3.SetSpinState(SlotBottomBarState.CLICK_STOP),
                      node$1.Play(node$6.AudioClips.COMMON_BTN));
                  }),
                  (n.CheckItem = function () {
                    node$6.IsUsingItem &&
                      (node$6.ItemAward += this.m_spinAck.TotalWin),
                      node$6.IsUsingItem &&
                        0 === node$6.UsingItemRemainTimes &&
                        this.UseItemEnd();
                  }),
                  (n.UseItemEnd = function () {}),
                  (n.CheckFreeSpin = function () {
                    node$3.IsFreeSpin &&
                      ((node$6.FreeSpinAward += this.m_spinAck.TotalWin),
                      0 == node$6.FreeSpinRemain && this.FreeSpinEnd());
                  }),
                  (n.FreeSpinEnd = function () {}),
                  (n.Reset = function () {
                    this.SlotReels.Reset(), (this.m_effectPlate.IsBothWay = !1);
                  }),
                  (n.ShakeWorld = function (e) {
                    (this.m_shakeNode.shakename = e), this.m_shakeNode.shake();
                  }),
                  _createClass(t, [
                    {
                      key: "GameBg",
                      get: function () {
                        return this.m_gameBg;
                      },
                    },
                    {
                      key: "BothWay",
                      get: function () {
                        return this.m_bothWay;
                      },
                    },
                    {
                      key: "CharacterSpine",
                      get: function () {
                        return this.m_characterSpine;
                      },
                    },
                    {
                      key: "Counter",
                      get: function () {
                        return this.m_counter;
                      },
                    },
                    {
                      key: "DeclareSpine",
                      get: function () {
                        return this.m_declare;
                      },
                    },
                    {
                      key: "Compliment",
                      get: function () {
                        return this.m_compliment;
                      },
                    },
                    {
                      key: "BigWinComp",
                      get: function () {
                        return this.m_bigWinComponent;
                      },
                    },
                    {
                      key: "SmallWin",
                      get: function () {
                        return this.m_smallWin;
                      },
                    },
                    {
                      key: "GameIntro",
                      get: function () {
                        return this.m_gameintro;
                      },
                    },
                    {
                      key: "NodeReel",
                      get: function () {
                        return this.m_nodeReel;
                      },
                    },
                    {
                      key: "NodeSP",
                      get: function () {
                        return this.m_nodeSP;
                      },
                    },
                    {
                      key: "DjDeclare",
                      get: function () {
                        return this.m_djDeclare;
                      },
                    },
                    {
                      key: "SbgAnim",
                      get: function () {
                        return this.m_sbgAnim;
                      },
                    },
                    {
                      key: "ManualComponent",
                      get: function () {
                        return this.m_manualComponent;
                      },
                    },
                    {
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
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
                      key: "AId",
                      get: function () {
                        return this.m_aId;
                      },
                    },
                    {
                      key: "Token",
                      get: function () {
                        return this.m_token;
                      },
                    },
                    {
                      key: "SpinAck",
                      get: function () {
                        return this.m_spinAck;
                      },
                    },
                    {
                      key: "AutoplayInfos",
                      get: function () {
                        return this.m_autoplayInfos;
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
                      key: "BgAudioId",
                      get: function () {
                        return this.m_bgAudioId;
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
                      key: "MData",
                      get: function () {
                        return this.m_data;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$i = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_titleSpriteAtlas",
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
              (_descriptor2$e = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_mainAnim",
                [_dec3$e],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$a = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_gameBg",
                [_dec4$a],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor4$9 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_titleSprite",
                [_dec5$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor5$6 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_slotReelsNode",
                [_dec6$6],
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
                _class2$i.prototype,
                "m_effectPlateNode",
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
              (_descriptor7$3 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_bothWay",
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
              (_descriptor8$2 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_characterSpine",
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
              (_descriptor9 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_counter",
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
                _class2$i.prototype,
                "m_declare",
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
                _class2$i.prototype,
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
              (_descriptor12 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_bigWinComponent",
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
              (_descriptor13 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_smallWin",
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
              (_descriptor14 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_gameintro",
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
              (_descriptor15 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_nodeReel",
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
              (_descriptor16 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_nodeSP",
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
              (_descriptor17 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_djDeclare",
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
              (_descriptor18 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_sbgAnim",
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
              (_descriptor19 = _applyDecoratedDescriptor(
                _class2$i.prototype,
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
              (_descriptor20 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_barNode",
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
              (_descriptor21 = _applyDecoratedDescriptor(
                _class2$i.prototype,
                "m_shakeNode",
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
              (_class$C = _class2$i))
            ) || _class$C),
          _dec$D,
          _class$D;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0d9a1LIv+dHqb4BQGeFJcfH",
            "AwardState",
            void 0
          );
        var BigWinSkinName = { DEFAULT: "default" },
          ccclass$D = _decorator.ccclass,
          AwardState =
            ((_dec$D = ccclass$D("AwardState")),
            _dec$D(
              (_class$D = (function (e) {
                function t(t) {
                  var n;
                  return (
                    ((n = e.call(this) || this).m_gameView = null),
                    (n.m_isSmallWinRunning = !1),
                    (n.m_lvl = BigWinComponent.Level.NONE),
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
                        var t, n, i, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state AWARD"),
                                    (this.m_lvl = BigWinComponent.Level.NONE),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.RoundIdx
                                      ].RoundWin),
                                    this.m_gameView.EffectPlate.ResetStack(),
                                    !(t > 0))
                                  ) {
                                    e.next = 20;
                                    break;
                                  }
                                  (n = node$3.GetNowBetValue()),
                                    (i = node$2.divide(t, n)),
                                    (this.m_isSmallWinRunning = !0),
                                    (this.m_gameView.BigWinComp.IsEnd = !0),
                                    (o = Game_Define.AWARD_SETTING.length - 1);
                                case 10:
                                  if (!(o >= 0)) {
                                    e.next = 17;
                                    break;
                                  }
                                  if (
                                    !(i >= Game_Define.AWARD_SETTING[o].BetRate)
                                  ) {
                                    e.next = 14;
                                    break;
                                  }
                                  return (
                                    (this.m_lvl =
                                      Game_Define.AWARD_SETTING[o].Lvl),
                                    e.abrupt("break", 17)
                                  );
                                case 14:
                                  o--, (e.next = 10);
                                  break;
                                case 17:
                                  this.m_lvl != BigWinComponent.Level.NONE
                                    ? (this.m_gameView.ChangeFadeType(
                                        FADE_TYPE.OUT
                                      ),
                                      (this.m_isSmallWinRunning = !1),
                                      (this.m_gameView.BigWinComp.node.active =
                                        !0),
                                      this.m_gameView.BigWinComp.SetSkin(
                                        BigWinSkinName.DEFAULT
                                      ),
                                      this.m_gameView.BigWinComp.Show(
                                        t,
                                        this.m_lvl
                                      ),
                                      node$3.SetSpinState(
                                        SlotBottomBarState.GET_AWARD_NO_AUTO
                                      ),
                                      this.m_gameView.CharacterSpine.ShowBigWinStart(),
                                      this.m_gameView.EffectPlate.SetShadow(!0))
                                    : (this.m_isSmallWinRunning = !1),
                                    (e.next = 22);
                                  break;
                                case 20:
                                  (this.m_isSmallWinRunning = !1),
                                    (this.m_gameView.BigWinComp.IsEnd = !0);
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
                  (n.OnProcess = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    !this.m_gameView.BigWinComp.IsEnd ||
                                    this.m_isSmallWinRunning
                                  ) {
                                    e.next = 10;
                                    break;
                                  }
                                  if (
                                    ((this.m_gameView.BigWinComp.IsEnd = !1),
                                    (this.m_isSmallWinRunning = !0),
                                    this.m_lvl == BigWinComponent.Level.NONE)
                                  ) {
                                    e.next = 8;
                                    break;
                                  }
                                  return (
                                    (e.next = 6),
                                    this.m_gameView.CharacterSpine.ShowBigWinEnd()
                                  );
                                case 6:
                                  this.m_gameView.EffectPlate.SetShadow(!1),
                                    Game_Define.IsInFG
                                      ? (this.m_gameView.ChangeFadeType(
                                          FADE_TYPE.IN
                                        ),
                                        this.m_gameView.ChangeBgMusic(
                                          Game_Define.AudioClips.BGM_FG
                                        ))
                                      : (this.m_gameView.ChangeFadeType(
                                          FADE_TYPE.IN
                                        ),
                                        this.m_gameView.ChangeBgMusic(
                                          Game_Define.AudioClips.BGM_MG
                                        ));
                                case 8:
                                  (this.m_gameView.BigWinComp.node.active = !1),
                                    node$4.NextState(
                                      GAME_STATE_BASE.ROUND_SHOW_END
                                    );
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
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$D),
          _dec$E,
          _dec2$j,
          _dec3$f,
          _dec4$b,
          _class$E,
          _class2$j,
          _descriptor$j,
          _descriptor2$f,
          _descriptor3$b;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "063314f6a5LAJ1qc/2vyMIL", "MoreSpins", void 0);
        var ccclass$E = _decorator.ccclass,
          property$j = _decorator.property,
          ANIMATION_NAME$9;
        !(function (e) {
          (e.NONE = "none"),
            (e.START = "Start"),
            (e.LOOP = "Loop"),
            (e.END = "End");
        })(ANIMATION_NAME$9 || (ANIMATION_NAME$9 = {}));
        var MoreSpins =
            ((_dec$E = ccclass$E("MoreSpins")),
            (_dec2$j = property$j({
              type: sp.Skeleton,
              tooltip: "MoreSpinsSpine",
            })),
            (_dec3$f = property$j({ type: Sprite, tooltip: "免費遊戲" })),
            (_dec4$b = property$j({ type: Label, tooltip: "局數" })),
            _dec$E(
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
                      "m_moreSpinsSkeleton",
                      _descriptor$j,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgSprite",
                      _descriptor2$f,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundLabel",
                      _descriptor3$b,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.ShowMoreSpins = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = node.GetGameAtlas()),
                                    (this.m_fgSprite.spriteFrame =
                                      n.getSpriteFrame("TXT_FG_MoreSpins_01")),
                                    (this.node.active = !0),
                                    (this.m_roundLabel.string = t.toString()),
                                    node$1.Play(Game_Define.AudioClips.FG_Add),
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      this.m_moreSpinsSkeleton,
                                      ANIMATION_NAME$9.START
                                    )
                                  );
                                case 7:
                                  return (
                                    (e.next = 9),
                                    SpineKit.PlayAnimation(
                                      this.m_moreSpinsSkeleton,
                                      ANIMATION_NAME$9.LOOP
                                    )
                                  );
                                case 9:
                                  return (
                                    (e.next = 11),
                                    SpineKit.PlayAnimation(
                                      this.m_moreSpinsSkeleton,
                                      ANIMATION_NAME$9.END
                                    )
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$j = _applyDecoratedDescriptor(
                _class2$j.prototype,
                "m_moreSpinsSkeleton",
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
              (_descriptor2$f = _applyDecoratedDescriptor(
                _class2$j.prototype,
                "m_fgSprite",
                [_dec3$f],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor3$b = _applyDecoratedDescriptor(
                _class2$j.prototype,
                "m_roundLabel",
                [_dec4$b],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$E = _class2$j))
            ) || _class$E),
          _dec$F,
          _class$F;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8da9dtxrbJKR7KWF4bKWpwU",
            "ScatterSpine",
            void 0
          );
        var AnimName$1 = { Stop: "Stop", Nearwin: "NearWin", Win: "Win" },
          ccclass$F = _decorator.ccclass,
          ScatterSpine =
            ((_dec$F = ccclass$F("ScatterSpine")),
            _dec$F(
              (_class$F = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.ShowStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$1.Stop, !1, t)
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
                  (n.SetDarkSymbol = function (e) {}),
                  (n.ShowNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.PlayAnimation(AnimName$1.Nearwin, !0)
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
            ) || _class$F);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "360356sRvZF84jWLfxc0xf3", "SpineUtil", void 0),
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
