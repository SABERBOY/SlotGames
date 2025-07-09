System.register(
  "chunks:///game.js",
  ["./index-4d946bb7.js", "cc"],
  function (exports, module) {
    "use strict";
    var node,
      _applyDecoratedDescriptor,
      _inheritsLoose,
      _initializerDefineProperty,
      _assertThisInitialized,
      node$1,
      SpineKit,
      _asyncToGenerator,
      _regeneratorRuntime,
      node$2,
      node$3,
      _createClass,
      node$4,
      NearWinEffectComponent,
      Common_IdleState,
      node$5,
      BaseState,
      node$6,
      SlotBottomBarState,
      CommonState,
      node$7,
      node$8,
      node$9,
      node$a,
      node$b,
      SwitchOffKeyDefine,
      node$c,
      BigWinComponent,
      ManualComponent,
      AstarteInit,
      node$d,
      BigWinAnimName,
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
      Vec2,
      v2,
      _decorator,
      sp,
      Node,
      Component,
      UIOpacity,
      Vec3,
      Sprite,
      tween,
      v3,
      color,
      instantiate,
      Animation,
      Label,
      UIRenderer,
      Prefab,
      error,
      log,
      Tween,
      SpriteFrame,
      UITransform,
      Size,
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
          (node = e.h),
            (_applyDecoratedDescriptor = e._),
            (_inheritsLoose = e.a),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (node$1 = e.l),
            (SpineKit = e.v),
            (_asyncToGenerator = e.o),
            (_regeneratorRuntime = e.p),
            (node$2 = e.g),
            (node$3 = e.w),
            (_createClass = e.d),
            (node$4 = e.e),
            (NearWinEffectComponent = e.N),
            (Common_IdleState = e.x),
            (node$5 = e.j),
            (BaseState = e.B),
            (node$6 = e.y),
            (SlotBottomBarState = e.t),
            (CommonState = e.k),
            (node$7 = e.z),
            (node$8 = e.A),
            (node$9 = e.D),
            (node$a = e.i),
            (node$b = e.r),
            (SwitchOffKeyDefine = e.S),
            (node$c = e.n),
            (BigWinComponent = e.E),
            (ManualComponent = e.M),
            (AstarteInit = e.F),
            (node$d = e.G),
            (BigWinAnimName = e.H),
            (node$e = e.f),
            (CommonEventName = e.C),
            (node$f = e.I),
            (BottomBar_UIName = e.J),
            (DEFAULT_TITLE_KEY = e.K),
            (node$g = e.L),
            (node$h = e.O),
            (node$i = e.P),
            (node$j = e.Q),
            (node$k = e.s),
            (node$l = e.R);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (Enum = e.Enum),
            (Vec2 = e.Vec2),
            (v2 = e.v2),
            (_decorator = e._decorator),
            (sp = e.sp),
            (Node = e.Node),
            (Component = e.Component),
            (UIOpacity = e.UIOpacity),
            (Vec3 = e.Vec3),
            (Sprite = e.Sprite),
            (tween = e.tween),
            (v3 = e.v3),
            (color = e.color),
            (instantiate = e.instantiate),
            (Animation = e.Animation),
            (Label = e.Label),
            (UIRenderer = e.UIRenderer),
            (Prefab = e.Prefab),
            (error = e.error),
            (log = e.log),
            (Tween = e.Tween),
            (SpriteFrame = e.SpriteFrame),
            (UITransform = e.UITransform),
            (Size = e.Size),
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
        var GAMEVIEW_STATE, Symbol;
        cclegacy._RF.push({}, "ebffeeSpA5IPLlQVrb3oav8", "Game_Define", void 0),
          (function (e) {
            (e[(e.SET_BAR = 0)] = "SET_BAR"),
              (e[(e.GET_INFO = 1)] = "GET_INFO"),
              (e[(e.WAIT_RES = 2)] = "WAIT_RES"),
              (e[(e.WAIT_READY = 3)] = "WAIT_READY"),
              (e[(e.PLATE_SHOW = 4)] = "PLATE_SHOW"),
              (e[(e.FEATURE_SHOW = 5)] = "FEATURE_SHOW"),
              (e[(e.UNSHOW_PREPARE = 6)] = "UNSHOW_PREPARE"),
              (e[(e.EXPLODE = 7)] = "EXPLODE"),
              (e[(e.MATCHING_PATCH_UP = 8)] = "MATCHING_PATCH_UP"),
              (e[(e.ADD_FREE = 9)] = "ADD_FREE"),
              (e[(e.AWARD = 10)] = "AWARD"),
              (e[(e.ROUND_SHOW_END = 11)] = "ROUND_SHOW_END"),
              (e[(e.ENTER_FREE = 12)] = "ENTER_FREE"),
              (e[(e.LEAVE_FREE = 13)] = "LEAVE_FREE"),
              (e[(e.ROUND_END = 14)] = "ROUND_END");
          })(GAMEVIEW_STATE || (GAMEVIEW_STATE = {})),
          (function (e) {
            (e[(e.SYMBOL_00 = 0)] = "SYMBOL_00"),
              (e[(e.SYMBOL_01 = 1)] = "SYMBOL_01"),
              (e[(e.SYMBOL_02 = 2)] = "SYMBOL_02"),
              (e[(e.SYMBOL_03 = 3)] = "SYMBOL_03"),
              (e[(e.SYMBOL_04 = 4)] = "SYMBOL_04"),
              (e[(e.SYMBOL_05 = 5)] = "SYMBOL_05"),
              (e[(e.SYMBOL_06 = 6)] = "SYMBOL_06"),
              (e[(e.SYMBOL_07 = 7)] = "SYMBOL_07"),
              (e[(e.SYMBOL_WILDE = 8)] = "SYMBOL_WILDE"),
              (e[(e.SYMBOL_SCATTER = 9)] = "SYMBOL_SCATTER");
          })(Symbol || (Symbol = {}));
        var EIGHT_SIDED = {
            CENTER: -1,
            TOP: 0,
            RIGHT: 1,
            DOWN: 2,
            LEFT: 3,
            TOP_LEFT: 4,
            TOP_RIGHT: 5,
            DOWN_LEFT: 6,
            DOWN_RIGHT: 7,
          },
          EFFECT_Z_INDEX;
        !(function (e) {
          (e[(e.Eft = 400)] = "Eft"),
            (e[(e.NearWin = 401)] = "NearWin"),
            (e[(e.BigWin = 402)] = "BigWin");
        })(EFFECT_Z_INDEX || (EFFECT_Z_INDEX = {}));
        var SymbolColor = { D: 144, L: 255 },
          SymbolOpacity = { L: 0, M: 122, H: 255 },
          SYMBOL_Z_INDEX = {
            Win: 100,
            Fx: 200,
            Wild: 300,
            Scatter: 400,
            WinNum: 500,
          },
          REEL_DIRECTION;
        !(function (e) {
          (e[(e.UP = 0)] = "UP"),
            (e[(e.DOWN = 1)] = "DOWN"),
            (e[(e.LEFT = 2)] = "LEFT"),
            (e[(e.RIGHT = 3)] = "RIGHT");
        })(REEL_DIRECTION || (REEL_DIRECTION = {}));
        var Game_Define = (function () {
            function e() {}
            return (
              (e.ConvertIndex2ColRow = function (t) {
                if (t >= 0 && t < e.COL * e.ROW) {
                  var o = v2(-1, -1);
                  return (o.y = t % e.ROW), (o.x = (t - o.y) / e.ROW), o;
                }
                return null;
              }),
              (e.TimeScale = function (t) {
                void 0 === t && (t = !1);
                var o = t ? 1.5 : 1;
                return node.IsHardStop && (o = e.FastTimeScale), o;
              }),
              (e.OnExit = function () {
                this.AudioClips = {
                  Play_ready: null,
                  BGM_MG: null,
                  Spin: null,
                  Reel_Stop: null,
                  Fiop1: null,
                  Small_win_01: null,
                  Small_win_02: null,
                  Small_win_03: null,
                  Big_Win: null,
                  Big_win_end: null,
                  ChangeWin_1: null,
                  ChangeWin_2: null,
                  Combo_f_x2: null,
                  Combo_f_x2_fast: null,
                  Combo_f_x3: null,
                  Combo_f_x3_fast: null,
                  Combo_f_x4: null,
                  Combo_f_x4_fast: null,
                  Combo_f_x5: null,
                  Combo_f_x5_fast: null,
                  Combo_wild: null,
                  BGM_FG: null,
                  FG_Declare: null,
                  FG_End: null,
                  FG_Board: null,
                  Scatter_Show1: null,
                  Scatter_Show2: null,
                  Scatter_Show3: null,
                  MG_NearWin: null,
                  Scatter_Bell: null,
                  FG_Add: null,
                  Character_1: null,
                  Character_3: null,
                  Character_4: null,
                  Character_5: null,
                  Character_6: null,
                };
              }),
              (e.GetZIndex = function (e, t, o, n) {
                void 0 === n && (n = 0);
                var i = e * o.ROW + (o.ROW - t);
                return 0 !== n && (i += n), i;
              }),
              e
            );
          })(),
          _dec,
          _dec2,
          _dec3,
          _dec4,
          _class,
          _class2,
          _descriptor,
          _descriptor2,
          _descriptor3,
          _class3;
        (Game_Define.Ver = "30"),
          (Game_Define.GameState = Enum(GAMEVIEW_STATE)),
          (Game_Define.ReelDirection = Enum(REEL_DIRECTION)),
          (Game_Define.COL = 7),
          (Game_Define.ROW = 7),
          (Game_Define.HistoryLength = 3),
          (Game_Define.SideOffset = 0.5),
          (Game_Define.IsWild = !1),
          (Game_Define.IsCandy = !1),
          (Game_Define.SLOT_REELS = {
            VIEW_SIZE: null,
            SYMBOL_SIZE: null,
            COL: 7,
            ROW: 7,
            ENTER_DELAY_TIME_FOR_X: 0.15,
            ENTER_DELAY_TIME_FOR_Y: 0.03,
            LEAVE_DELAY_TIME_FOR_X: 0.15,
            LEAVE_DELAY_TIME_FOR_Y: 0.03,
            SYMBOL_ENTER_MOVE_TIME: 0.3,
            SYMBOL_LEVEL_MOVE_TIME: 0.3,
            NEAR_WIN_SYMBOL_MOVE_TIME: 0.45,
            SYMBOL_MOVE_DISTANCE: 500,
            FALL_OVER_DISTANCE: 0,
            L_BOUNCE_DISTANCE: 12,
            S_BOUNCE_DISTANCE: 12,
            POSITION_OFFSET: [
              new Vec2(3, 0),
              new Vec2(2, 0),
              new Vec2(1, 0),
              new Vec2(0, 0),
              new Vec2(-1, 0),
              new Vec2(-2, 0),
              new Vec2(-3, 0),
            ],
            MULTIPLY_MOVE_TIME: 0,
            MULTIPLY_L_MOVE_TIME: 0,
            MULTIPLY_S_MOVE_TIME: 0,
            MULTIPLY_S_MOVE_DOWN_TIME: 0,
            NEARWWIN_FIALL_TIME: 0.5,
            BOUNCE_TIME: 3,
            FILL_OVER_TIME: 2,
          }),
          (Game_Define.HISTORY_REELS = {
            VIEW_SIZE: null,
            SYMBOL_SIZE: null,
            COL: 1,
            ROW: 3,
            ENTER_DELAY_TIME_FOR_X: 0.15,
            ENTER_DELAY_TIME_FOR_Y: 0.3,
            LEAVE_DELAY_TIME_FOR_X: 0.15,
            LEAVE_DELAY_TIME_FOR_Y: 0.3,
            SYMBOL_ENTER_MOVE_TIME: 0.2,
            SYMBOL_LEVEL_MOVE_TIME: 0.2,
            NEAR_WIN_SYMBOL_MOVE_TIME: 0,
            SYMBOL_MOVE_DISTANCE: 500,
            FALL_OVER_DISTANCE: 0,
            L_BOUNCE_DISTANCE: 12,
            S_BOUNCE_DISTANCE: 12,
            POSITION_OFFSET: [new Vec2(0, 0), new Vec2(0, 10), new Vec2(0, 20)],
            MULTIPLY_MOVE_TIME: 0,
            MULTIPLY_L_MOVE_TIME: 0,
            MULTIPLY_S_MOVE_TIME: 0,
            MULTIPLY_S_MOVE_DOWN_TIME: 0,
            NEARWWIN_FIALL_TIME: 0,
            BOUNCE_TIME: 3,
            FILL_OVER_TIME: 2,
          }),
          (Game_Define.VIEW = { WIDTH: 1136, HEIGHT: 640 }),
          (Game_Define.FastTimeScale = 2),
          (Game_Define.DemoBet = 10),
          (Game_Define.ROUND_SPIN_MG = 0.5),
          (Game_Define.ROUND_SPIN_FG = 0.5),
          (Game_Define.SYMBOL_FILL_TIME = 0.18),
          (Game_Define.DURATION_UP = 0.1),
          (Game_Define.DURATION_DOWN = 0.1),
          (Game_Define.BOUNCE_DISTANCE = 15),
          (Game_Define.FALL_OVER_DISTANCE = 0),
          (Game_Define.FREQUENCY = 10),
          (Game_Define.AMPLITUDE = 5),
          (Game_Define.SYMBOL_NEARWIN_TIME = 1),
          (Game_Define.DELAY_TIME_Fill = 0.02),
          (Game_Define.DELAY_TIME_COL_Fill = 0.02),
          (Game_Define.DELAY_NEARWIN_TIME = 1),
          (Game_Define.FRAME_MOVE_RATE = 0.85),
          (Game_Define.Symbol = Enum(Symbol)),
          (Game_Define.EFFECT_Z_INDEX = Enum(EFFECT_Z_INDEX)),
          (Game_Define.IsInFG = !1),
          (Game_Define.IsNearWin = !1),
          (Game_Define.IsEnterFg = !1),
          (Game_Define.Round = -1),
          (Game_Define.PlateIdx = -1),
          (Game_Define.TotalWin = 0),
          (Game_Define.Time = {
            SetBarNodeVisiable: 0.3,
            DemoWaitSpin: 0.5,
            MixTime: 0.15,
            WaitWin: 0.5,
            CounterInit: 0.05,
            CounterAdd: 0.1,
          }),
          (Game_Define.FgFrame = {
            Max: 2,
            Tag: 4,
            Init_1: 7,
            Row: 3,
            Col: 3,
            Init_2: 10,
            Double_1: 12,
            Double_2: 17,
          }),
          (Game_Define.SPIN_ACK_TYPE = {
            AT_SUCCESS: 0,
            AT_MONEY_NOT_ENOUGH: 302,
            AT_MONEY_ABNORMAL: 301,
            AT_MONEY_NOT_ENOUGH_SINGLE: 305,
          }),
          (Game_Define.AWARD_TYPE = {
            AwardTypeNon: 0,
            AwardTypeLine: 1,
            AwardTypeGetFree: 2,
            AwardTypeInFree: 4,
            AwardTypeLeaveFree: 8,
            AwardTypeGetBonus: 16,
            AwardTypeGet3Bonus: 32,
            AwardTypeGet4Bonus: 64,
            AwardTypeGet5Bonus: 128,
            AWARD_TYPE_MAX: 32767,
          }),
          (Game_Define.AudioPathPre = "Sound/"),
          (Game_Define.AudioClips = {
            Play_ready: null,
            BGM_MG: null,
            Spin: null,
            Reel_Stop: null,
            Fiop1: null,
            Small_win_01: null,
            Small_win_02: null,
            Small_win_03: null,
            Big_Win: null,
            Big_win_end: null,
            ChangeWin_1: null,
            ChangeWin_2: null,
            Combo_f_x2: null,
            Combo_f_x2_fast: null,
            Combo_f_x3: null,
            Combo_f_x3_fast: null,
            Combo_f_x4: null,
            Combo_f_x4_fast: null,
            Combo_f_x5: null,
            Combo_f_x5_fast: null,
            Combo_wild: null,
            BGM_FG: null,
            FG_Declare: null,
            FG_End: null,
            FG_Board: null,
            Scatter_Show1: null,
            Scatter_Show2: null,
            Scatter_Show3: null,
            MG_NearWin: null,
            Scatter_Bell: null,
            FG_Add: null,
            Character_1: null,
            Character_3: null,
            Character_4: null,
            Character_5: null,
            Character_6: null,
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
          (Game_Define.Level = { NONE: 0, BIG: 1, MEGA: 2, SUPER: 3 }),
          (Game_Define.AWARD_SETTING = [
            { BetRate: 6, Lvl: Game_Define.Level.BIG },
            { BetRate: 15, Lvl: Game_Define.Level.MEGA },
            { BetRate: 30, Lvl: Game_Define.Level.SUPER },
          ]),
          (Game_Define.ShowDisplayValue = null),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e8650NoAZRBMoskbs7MMzmi", "Character", void 0);
        var ccclass = _decorator.ccclass,
          property = _decorator.property,
          Character =
            ((_dec = ccclass("Character")),
            (_dec2 = property({ type: sp.Skeleton, tooltip: "人物" })),
            (_dec3 = property({ type: Node, tooltip: "Pos S" })),
            (_dec4 = property({ type: Node, tooltip: "Pos L" })),
            _dec(
              ((_class3 = (function (e) {
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
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_posS",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_posL",
                      _descriptor3,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e),
                      this.m_spine.setMix(
                        t.AnimName.Idle,
                        t.AnimName.Win,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.Win,
                        t.AnimName.Idle,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.Idle,
                        t.AnimName.Features,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.Idle,
                        t.AnimName.ScatterWin_Start,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.ScatterWin_End,
                        t.AnimName.Idle,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.Idle,
                        t.AnimName.NearWin_Start,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.NearWin_End,
                        t.AnimName.Idle,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.Idle,
                        t.AnimName.BigWin_Start,
                        Game_Define.Time.MixTime
                      ),
                      this.m_spine.setMix(
                        t.AnimName.BigWin_End,
                        t.AnimName.Idle,
                        Game_Define.Time.MixTime
                      ),
                      this.PlayIdle(null, !0);
                  }),
                  (o.PlayIdle = function (e, o) {
                    (void 0 === e && (e = null),
                    void 0 === o && (o = !1),
                    (this.m_spine.timeScale = e || Game_Define.TimeScale()),
                    this.m_spine.animation !== t.AnimName.Idle) &&
                      (Math.random() > 0.2 &&
                        !o &&
                        node$1.Play(Game_Define.AudioClips.Character_1),
                      SpineKit.PlayAnimation(
                        this.m_spine,
                        t.AnimName.Idle,
                        !0
                      ));
                  }),
                  (o.PlayWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    node$1.Play(
                                      Game_Define.AudioClips.Character_5
                                    ),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale(!0)),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.Win
                                    )
                                  );
                                case 5:
                                  this.PlayIdle();
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
                  (o.PlayWild = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === o && (o = null),
                                    this.m_spine.animation !==
                                      t.AnimName.NearWin_Loop)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  return (
                                    this.m_gameView.EffectPlate
                                      .HasPlayWildSound ||
                                      ((this.m_gameView.EffectPlate.HasPlayWildSound =
                                        !0),
                                      node$1.Play(
                                        Game_Define.AudioClips.Character_6
                                      )),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale(!0)),
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.Features
                                    )
                                  );
                                case 7:
                                  this.PlayIdle();
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
                  (o.PlayScatterWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    node$1.Play(
                                      Game_Define.AudioClips.Character_4
                                    ),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 5),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.ScatterWin_Start
                                    )
                                  );
                                case 5:
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    t.AnimName.ScatterWin_Loop,
                                    !0
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
                  (o.PlayScatterWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.ScatterWin_End
                                    )
                                  );
                                case 4:
                                  this.PlayIdle();
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
                  (o.PlayNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === o && (o = null),
                                    this.m_spine.animation !==
                                      t.AnimName.NearWin_Loop)
                                  ) {
                                    e.next = 3;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 3:
                                  return (
                                    node$1.Play(
                                      Game_Define.AudioClips.Character_3
                                    ),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 7),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.NearWin_Start
                                    )
                                  );
                                case 7:
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    t.AnimName.NearWin_Loop,
                                    !0
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
                  (o.PlayNearWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.NearWin_End
                                    )
                                  );
                                case 4:
                                  this.PlayIdle();
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
                  (o.PlayBigWinStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.BigWin_Start
                                    )
                                  );
                                case 4:
                                  SpineKit.PlayAnimation(
                                    this.m_spine,
                                    t.AnimName.BigWin_Loop,
                                    !0
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
                  (o.PlayBigWinEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = null),
                                    (this.m_spine.timeScale =
                                      o || Game_Define.TimeScale()),
                                    (e.next = 4),
                                    SpineKit.PlayAnimation(
                                      this.m_spine,
                                      t.AnimName.BigWin_End
                                    )
                                  );
                                case 4:
                                  this.PlayIdle();
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
                  (o.OnRotation = function () {
                    this.m_gameView.IsLandscape
                      ? this.m_posL.addChild(this.m_spine.node)
                      : this.m_posS.addChild(this.m_spine.node);
                  }),
                  t
                );
              })(Component)),
              (_class3.AnimName = {
                BigWin_End: "BigWin_End",
                BigWin_Loop: "BigWin_Loop",
                BigWin_Start: "BigWin_Start",
                Features: "Features",
                Idle: "Idle",
                NearWin_End: "NearWin_End",
                NearWin_Loop: "NearWin_Loop",
                NearWin_Start: "NearWin_Start",
                ScatterWin_End: "ScatterWin_End",
                ScatterWin_Loop: "ScatterWin_Loop",
                ScatterWin_Start: "ScatterWin_Start",
                Win: "Win",
              }),
              (_class2 = _class3),
              (_descriptor = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_spine",
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
                "m_posS",
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
                "m_posL",
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
              (_class = _class2))
            ) || _class),
          _dec$1,
          _class$1,
          _class2$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "dbccdj9yPJPVbuIpow7WiOB", "Reel", void 0);
        var ccclass$1 = _decorator.ccclass,
          Reel =
            ((_dec$1 = ccclass$1("Reel")),
            _dec$1(
              ((_class2$1 = (function () {
                function e(t, o) {
                  var n = this;
                  (this.m_symbolNode = null),
                    (this.m_reel = null),
                    (this.m_isHardStop = !1),
                    (this.m_isMegaHardStop = !1),
                    (this.m_isMega = !1),
                    (this.m_spriteFrame = null),
                    (this.m_symbolNum = null),
                    (this.m_symbolNode = t),
                    (t.addComponent(UIOpacity).opacity = e.Opacity.Show),
                    (this.m_reel = o);
                  var i = function () {
                    var e = node$3.TempoSetting.SweetLand;
                    (n.m_reel.ENTER_DELAY_TIME_FOR_X =
                      e.DELAY_TIME_FOR_X.NORMAL),
                      (n.m_reel.ENTER_DELAY_TIME_FOR_Y =
                        e.DELAY_TIME_FOR_Y.NORMAL),
                      (n.m_reel.SYMBOL_ENTER_MOVE_TIME = e.SYMBOL_MOVE_TIME),
                      (n.m_reel.NEAR_WIN_SYMBOL_MOVE_TIME =
                        e.NEAR_WIN_SYMBOL_MOVE_TIME),
                      (n.m_reel.L_BOUNCE_DISTANCE = e.BOUNCE_DISTANCE),
                      (n.m_reel.S_BOUNCE_DISTANCE = e.BOUNCE_DISTANCE),
                      (n.m_reel.SYMBOL_MOVE_DISTANCE = e.SYMBOL_MOVE_DISTANCE);
                  };
                  i(),
                    node$3.AddCb(i),
                    this.SymbolNode.getComponent(Sprite) &&
                      (this.m_spriteFrame =
                        this.SymbolNode.getComponent(Sprite).spriteFrame.name);
                }
                var t = e.prototype;
                return (
                  (t.SetsymbolIndex = function (e) {
                    node$2.SetZIndex(this.m_symbolNode, e);
                  }),
                  (t.SetsymbolNum = function (e) {
                    this.m_symbolNum = e;
                  }),
                  (t.GetsymbolNum = function () {
                    return this.m_symbolNum;
                  }),
                  (t.SetSymbolOpacity = function (e) {
                    this.m_symbolNode.getComponent(UIOpacity).opacity = e;
                  }),
                  (t.SetMegaSymbol = function (e) {
                    this.m_isMega = e;
                  }),
                  (t.SetSymbolPosition = function (e, t) {
                    var o =
                        this.m_reel.SYMBOL_SIZE.width * (e + 0.5) +
                        this.m_reel.POSITION_OFFSET[e].x -
                        this.m_reel.VIEW_SIZE.width / 2,
                      n =
                        this.m_reel.SYMBOL_SIZE.height * (t + 0.5) +
                        this.m_reel.POSITION_OFFSET[e].y -
                        this.m_reel.VIEW_SIZE.height / 2;
                    this.m_symbolNode.setPosition(o, n),
                      (this.m_symbolNode.name = e + "_" + t);
                  }),
                  (t.GetSymbolPosition = function () {
                    return this.m_symbolNode.getPosition();
                  }),
                  (t.SetSymbolActive = function (e) {
                    this.m_symbolNode.active = e;
                  }),
                  (t.SetSymbolScale = function (e) {
                    this.m_symbolNode.scale = new Vec3(e, e);
                  }),
                  (t.SetHardStop = function (e, t) {
                    void 0 === t && (t = !1),
                      (this.m_isHardStop = e),
                      (this.m_isMegaHardStop = t);
                  }),
                  (t.SetSymbolSpriteFrame = function (e) {
                    var t = this.SymbolNode.getComponent(Sprite);
                    (t.spriteFrame = e),
                      (this.m_spriteFrame = t.spriteFrame.name);
                  }),
                  (t.GetSymbolName = function () {
                    return this.SymbolNode.getComponent(Sprite).spriteFrame
                      .name;
                  }),
                  (t.GetSymbolSpriteFrame = function () {
                    return this.SymbolNode.getComponent(Sprite).spriteFrame;
                  }),
                  (t.LeavePlate = function (e, t, o, n, i) {
                    var r = this,
                      a = this.GetLeaveDirection(o);
                    return new Promise(function (o) {
                      tween(r.m_symbolNode)
                        .delay(r.GetDelayTime(e, t, !0))
                        .call(function () {
                          null == n || n();
                        })
                        .by(
                          r.m_reel.SYMBOL_LEVEL_MOVE_TIME,
                          { position: v3(a.x, a.y) },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          (r.SymbolNode.active = !1), null == i || i(), o();
                        })
                        .start();
                    });
                  }),
                  (t.GetLeaveDirection = function (e) {
                    var t = 0,
                      o = 0;
                    switch (e) {
                      case Game_Define.ReelDirection.UP:
                        o = this.m_reel.SYMBOL_MOVE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.DOWN:
                        o = -this.m_reel.SYMBOL_MOVE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.LEFT:
                        t = -this.m_reel.SYMBOL_MOVE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.RIGHT:
                        t = this.m_reel.SYMBOL_MOVE_DISTANCE;
                    }
                    return new Vec3(t, o);
                  }),
                  (t.GetDelayTime = function (e, t, o) {
                    return (
                      void 0 === o && (o = !1),
                      o
                        ? 0
                        : node$3.TempoSetting.SweetLand.GET_DELAY_TIME(
                            e,
                            t,
                            this.m_isHardStop
                          )
                    );
                  }),
                  (t.MovePlate = function (t, o, n, i, r, a, s, l) {
                    var c = this;
                    this.SymbolNode.active = !0;
                    var u =
                        this.m_reel.SYMBOL_SIZE.width * (t + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].x -
                        this.m_reel.VIEW_SIZE.width / 2,
                      m =
                        this.m_reel.SYMBOL_SIZE.height * (o + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].y -
                        this.m_reel.VIEW_SIZE.height / 2,
                      _ = new Vec3(u, m);
                    if (this.SymbolNode.getPosition().y === _.y)
                      return Promise.resolve();
                    var p = this.GetBounceDistance(i),
                      d = this.GetFallOverDistance(i);
                    return new Promise(function (i) {
                      tween(c.m_symbolNode)
                        .delay(c.GetDelayTime(t, o, !1) + n)
                        .call(function () {
                          null == a || a();
                        })
                        .to(
                          r
                            ? c.m_reel.NEAR_WIN_SYMBOL_MOVE_TIME
                            : c.m_reel.SYMBOL_ENTER_MOVE_TIME,
                          { position: v3(_.x, _.y) },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          null == s || s();
                        })
                        .by(node$2.divide(c.m_reel.BOUNCE_TIME, e.Hz), {
                          position: v3(p.x, p.y),
                        })
                        .by(node$2.divide(c.m_reel.FILL_OVER_TIME, e.Hz), {
                          position: v3(d.x, d.y),
                        })
                        .call(
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function e() {
                              return _regeneratorRuntime().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        c.SetSymbolPosition(t, o),
                                        (e.next = 3),
                                        null == l ? void 0 : l()
                                      );
                                    case 3:
                                      i();
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        )
                        .start();
                    });
                  }),
                  (t.MoveHistoryPlate = function (t, o, n, i, r, a, s) {
                    var l = this;
                    this.SymbolNode.active = !0;
                    var c =
                        this.m_reel.SYMBOL_SIZE.width * (t + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].x -
                        this.m_reel.VIEW_SIZE.width / 2,
                      u =
                        this.m_reel.SYMBOL_SIZE.height * (o + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].y -
                        this.m_reel.VIEW_SIZE.height / 2,
                      m = new Vec3(c, u);
                    if (this.SymbolNode.getPosition().y === m.y)
                      return Promise.resolve();
                    var _ = this.GetBounceDistance(n),
                      p = this.GetFallOverDistance(n);
                    return new Promise(function (n) {
                      tween(l.m_symbolNode)
                        .call(function () {
                          null == r || r();
                        })
                        .to(
                          i * l.m_reel.SYMBOL_ENTER_MOVE_TIME,
                          { position: v3(m.x, m.y) },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          null == a || a();
                        })
                        .by(node$2.divide(l.m_reel.BOUNCE_TIME, e.Hz), {
                          position: v3(_.x, _.y),
                        })
                        .by(node$2.divide(l.m_reel.FILL_OVER_TIME, e.Hz), {
                          position: v3(p.x, p.y),
                        })
                        .call(
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function e() {
                              return _regeneratorRuntime().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        l.SetSymbolPosition(t, o),
                                        (e.next = 3),
                                        null == s ? void 0 : s()
                                      );
                                    case 3:
                                      n();
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        )
                        .start();
                    });
                  }),
                  (t.FillMovePlate = function (t, o, n, i, r, a, s, l, c, u) {
                    var m = this;
                    this.SymbolNode.active = !0;
                    var _ =
                        this.m_reel.SYMBOL_SIZE.width * (t + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].x -
                        this.m_reel.VIEW_SIZE.width / 2,
                      p =
                        this.m_reel.SYMBOL_SIZE.height * (o + 0.5) +
                        this.m_reel.POSITION_OFFSET[t].y -
                        this.m_reel.VIEW_SIZE.height / 2,
                      d = new Vec3(_, p);
                    if (this.SymbolNode.getPosition().y === d.y)
                      return Promise.resolve();
                    var f = this.GetBounceDistance(a),
                      h = this.GetFallOverDistance(a);
                    return new Promise(function (a) {
                      tween(m.m_symbolNode)
                        .delay(m.GetDelayTime(n, i, !1) + r)
                        .call(function () {
                          null == l || l();
                        })
                        .to(
                          s
                            ? m.m_reel.NEAR_WIN_SYMBOL_MOVE_TIME
                            : m.m_reel.SYMBOL_ENTER_MOVE_TIME,
                          { position: v3(d.x, d.y) },
                          { easing: "sineIn" }
                        )
                        .call(function () {
                          null == c || c();
                        })
                        .by(node$2.divide(m.m_reel.BOUNCE_TIME, e.Hz), {
                          position: v3(f.x, f.y),
                        })
                        .by(node$2.divide(m.m_reel.FILL_OVER_TIME, e.Hz), {
                          position: v3(h.x, h.y),
                        })
                        .call(
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function e() {
                              return _regeneratorRuntime().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        m.SetSymbolPosition(t, o),
                                        (e.next = 3),
                                        null == u ? void 0 : u()
                                      );
                                    case 3:
                                      a();
                                    case 4:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          )
                        )
                        .start();
                    });
                  }),
                  (t.GetBounceDistance = function (e) {
                    var t = 0,
                      o = 0;
                    switch (e) {
                      case Game_Define.ReelDirection.UP:
                        o = -this.m_reel.L_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.DOWN:
                        o = this.m_reel.L_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.LEFT:
                        t = -this.m_reel.S_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.RIGHT:
                        t = this.m_reel.S_BOUNCE_DISTANCE;
                    }
                    return new Vec3(t, o);
                  }),
                  (t.GetFallOverDistance = function (e) {
                    var t = 0,
                      o = 0;
                    switch (e) {
                      case Game_Define.ReelDirection.UP:
                        o =
                          this.m_reel.FALL_OVER_DISTANCE +
                          this.m_reel.L_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.DOWN:
                        o =
                          this.m_reel.FALL_OVER_DISTANCE -
                          this.m_reel.L_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.LEFT:
                        t =
                          this.m_reel.FALL_OVER_DISTANCE +
                          this.m_reel.S_BOUNCE_DISTANCE;
                        break;
                      case Game_Define.ReelDirection.RIGHT:
                        t =
                          this.m_reel.FALL_OVER_DISTANCE -
                          this.m_reel.S_BOUNCE_DISTANCE;
                    }
                    return new Vec3(t, o);
                  }),
                  (t.CheckMove = function (e, t) {
                    var o =
                        this.m_reel.SYMBOL_SIZE.width * (e + 0.5) +
                        this.m_reel.POSITION_OFFSET[e].x -
                        this.m_reel.VIEW_SIZE.width / 2,
                      n =
                        this.m_reel.SYMBOL_SIZE.height * (t + 0.5) +
                        this.m_reel.POSITION_OFFSET[e].y -
                        this.m_reel.VIEW_SIZE.height / 2,
                      i = new Vec3(o, n);
                    return this.SymbolNode.getPosition().y !== i.y;
                  }),
                  _createClass(e, [
                    {
                      key: "SymbolNode",
                      get: function () {
                        return this.m_symbolNode;
                      },
                    },
                    {
                      key: "IsMega",
                      get: function () {
                        return this.m_isMega;
                      },
                    },
                  ]),
                  e
                );
              })()),
              (_class2$1.Opacity = { Show: 255, Dark: 144, NoShow: 0 }),
              (_class2$1.Color = { Light: 255, Dark: 144 }),
              (_class2$1.Hz = 60),
              (_class$1 = _class2$1))
            ) || _class$1);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "62fdfsVSrVIjKwFtQ3R07P2",
            "SymbolEffect",
            void 0
          );
        var SymbolEffect = (function () {
            function e(e, t) {
              (this.m_symbol = -1),
                (this.m_spine = null),
                (this.m_eftNode = null),
                (this.m_symbol = e),
                (this.m_eftNode = instantiate(t)),
                (this.m_spine = this.m_eftNode.getComponentInChildren(
                  sp.Skeleton
                ));
            }
            var t = e.prototype;
            return (
              (t.PlayAnimation = (function () {
                var e = _asyncToGenerator(
                  _regeneratorRuntime().mark(function e(t, o, n, i) {
                    return _regeneratorRuntime().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                void 0 === o && (o = !1),
                                (this.m_eftNode.active = !0),
                                (this.m_spine.timeScale = Game_Define.TimeScale(
                                  !0
                                )),
                                (e.next = 5),
                                SpineKit.PlayAnimation(this.m_spine, t, o, 0, i)
                              );
                            case 5:
                              null == n || n();
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
                return function (t, o, n, i) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.SetSymbolPosition = function (e) {
                this.m_eftNode.position = e;
              }),
              (t.GetAnimeTime = function (e) {
                var t = this.m_spine.findAnimation(e).duration;
                return (t /= Game_Define.TimeScale(!0));
              }),
              (t.SetDarkOrLight = function (e) {
                this.m_spine.color = e
                  ? color(SymbolColor.D, SymbolColor.D, SymbolColor.D)
                  : color(SymbolColor.L, SymbolColor.L, SymbolColor.L);
              }),
              _createClass(e, [
                {
                  key: "Symbol",
                  get: function () {
                    return this.m_symbol;
                  },
                },
                {
                  key: "EftNode",
                  get: function () {
                    return this.m_eftNode;
                  },
                },
                {
                  key: "Spine",
                  get: function () {
                    return this.m_spine;
                  },
                },
              ]),
              e
            );
          })(),
          _dec$2,
          _dec2$1,
          _dec3$1,
          _dec4$1,
          _dec5,
          _dec6,
          _class$2,
          _class2$2,
          _descriptor$1,
          _descriptor2$1,
          _descriptor3$1,
          _descriptor4,
          _descriptor5;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "5ec90sr/KVNRpm5R1jJEOiU", "WinNum", void 0);
        var ccclass$2 = _decorator.ccclass,
          property$1 = _decorator.property,
          ANIMATION_NAME;
        !(function (e) {
          (e.Win1 = "Win1"), (e.Win2 = "Win2");
        })(ANIMATION_NAME || (ANIMATION_NAME = {}));
        var WinNum =
            ((_dec$2 = ccclass$2("WinNum")),
            (_dec2$1 = property$1({ type: Animation, tooltip: "動畫" })),
            (_dec3$1 = property$1({ type: Label, tooltip: "Num1" })),
            (_dec4$1 = property$1({ type: Label, tooltip: "Num2 乘數" })),
            (_dec5 = property$1({ type: Node, tooltip: "Node" })),
            (_dec6 = property$1({ type: Label, tooltip: "Num3 總分" })),
            _dec$2(
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
                      "m_anim",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiLabel",
                      _descriptor3$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_spaceNode",
                      _descriptor4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalWinLabel",
                      _descriptor5,
                      _assertThisInitialized(t)
                    ),
                    (t.m_animName = ""),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetInfo = function (e, t) {
                    void 0 === t && (t = 1),
                      (this.m_totalWinLabel.string =
                        node$2.FormatNumberThousands(
                          Game_Define.ShowDisplayValue(node$2.strip(e)),
                          node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO
                        )),
                      (this.m_winLabel.string = node$2.FormatNumberThousands(
                        Game_Define.ShowDisplayValue(node$2.divide(e, t)),
                        node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO
                      )),
                      (this.m_multiLabel.string = "X" + t.toString()),
                      (this.m_multiLabel.node.active = t > 1),
                      (this.m_spaceNode.active = t > 1),
                      (this.m_animName =
                        t > 1 ? ANIMATION_NAME.Win2 : ANIMATION_NAME.Win1);
                  }),
                  (o.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.m_anim.play(this.m_animName),
                                    ((t = this.m_anim.getState(
                                      this.m_animName
                                    )).speed = Game_Define.TimeScale(!0)),
                                    (o =
                                      t.duration / Game_Define.TimeScale(!0)),
                                    (e.next = 6),
                                    node$4.Wait(this, o)
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
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_anim",
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
                _class2$2.prototype,
                "m_winLabel",
                [_dec3$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor3$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_multiLabel",
                [_dec4$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor4 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_spaceNode",
                [_dec5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor5 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_totalWinLabel",
                [_dec6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_class$2 = _class2$2))
            ) || _class$2),
          _dec$3,
          _dec2$2,
          _dec3$2,
          _dec4$2,
          _dec5$1,
          _dec6$1,
          _class$3,
          _class2$3,
          _descriptor$2,
          _descriptor2$2,
          _descriptor3$2,
          _descriptor4$1,
          _descriptor5$1,
          _class3$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2116bA0CTRBlIRtK7WutcpZ",
            "Multiplier",
            void 0
          );
        var ccclass$3 = _decorator.ccclass,
          property$2 = _decorator.property,
          ANIMATION_NAME$1;
        !(function (e) {
          (e.Appear = "Appear"),
            (e.End1 = "End1"),
            (e.Active = "Active"),
            (e.End2 = "End2"),
            (e.Increase = "Increase");
        })(ANIMATION_NAME$1 || (ANIMATION_NAME$1 = {}));
        var Multiplier =
          ((_dec$3 = ccclass$3("Multiplier")),
          (_dec2$2 = property$2({ type: Label, tooltip: "X2" })),
          (_dec3$2 = property$2({ type: Label, tooltip: "X4" })),
          (_dec4$2 = property$2({ type: Label, tooltip: "X8" })),
          (_dec5$1 = property$2({ type: Node, tooltip: "Node_Frane" })),
          (_dec6$1 = property$2({ type: Label, tooltip: "Node_NUM" })),
          _dec$3(
            ((_class3$1 = (function (e) {
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
                    "m_multiplier2Lable",
                    _descriptor$2,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_multiplier4Lable",
                    _descriptor2$2,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_multiplier8Lable",
                    _descriptor3$2,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_frane",
                    _descriptor4$1,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_num",
                    _descriptor5$1,
                    _assertThisInitialized(t)
                  ),
                  (t.m_anime = void 0),
                  (t.m_multiply = void 0),
                  t
                );
              }
              _inheritsLoose(t, e);
              var o = t.prototype;
              return (
                (o.ShowMultiplier = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(o) {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.m_multiply !== o) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                this.ShowDarkOrLight(!1),
                                  (this.m_anime =
                                    this.node.getComponent(Animation)),
                                  (this.m_multiply = o),
                                  (e.t0 = o),
                                  (e.next =
                                    e.t0 === t.Multiplier.X1
                                      ? 8
                                      : e.t0 === t.Multiplier.X2
                                      ? 14
                                      : e.t0 === t.Multiplier.X4
                                      ? 21
                                      : 28);
                                break;
                              case 8:
                                return (
                                  (this.m_multiplier2Lable.node.active = !1),
                                  (this.m_multiplier4Lable.node.active = !1),
                                  (this.m_multiplier8Lable.node.active = !1),
                                  (e.next = 13),
                                  this.SetWinNumAnimation(
                                    ANIMATION_NAME$1.Appear
                                  )
                                );
                              case 13:
                                return e.abrupt("break", 33);
                              case 14:
                                return (
                                  (this.m_multiplier2Lable.node.active = !0),
                                  (this.m_multiplier4Lable.node.active = !1),
                                  (this.m_multiplier8Lable.node.active = !1),
                                  (this.m_multiplier2Lable.string = "X" + o),
                                  (e.next = 20),
                                  this.SetWinNumAnimation(
                                    ANIMATION_NAME$1.Active
                                  )
                                );
                              case 20:
                                return e.abrupt("break", 33);
                              case 21:
                                return (
                                  (this.m_multiplier2Lable.node.active = !1),
                                  (this.m_multiplier4Lable.node.active = !0),
                                  (this.m_multiplier8Lable.node.active = !1),
                                  (this.m_multiplier4Lable.string = "X" + o),
                                  (e.next = 27),
                                  this.SetWinNumAnimation(
                                    ANIMATION_NAME$1.Increase
                                  )
                                );
                              case 27:
                                return e.abrupt("break", 33);
                              case 28:
                                return (
                                  (this.m_multiplier2Lable.node.active = !1),
                                  (this.m_multiplier4Lable.node.active = !1),
                                  (this.m_multiplier8Lable.node.active = !0),
                                  (this.m_multiplier8Lable.string = "X" + o),
                                  e.abrupt("break", 33)
                                );
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
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.clear = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e() {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (e.t0 = this.m_multiply),
                                  (e.next = e.t0 === t.Multiplier.X1 ? 3 : 6);
                                break;
                              case 3:
                                return (
                                  (e.next = 5),
                                  this.SetWinNumAnimation(ANIMATION_NAME$1.End1)
                                );
                              case 5:
                                return e.abrupt("break", 9);
                              case 6:
                                return (
                                  (e.next = 8),
                                  this.SetWinNumAnimation(ANIMATION_NAME$1.End2)
                                );
                              case 8:
                                return e.abrupt("break", 9);
                              case 9:
                                this.m_multiply = "";
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
                (o.SetWinNumAnimation = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t) {
                      var o,
                        n = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (o = Game_Define.TimeScale(!0)),
                                  (this.m_anime.getState(t).speed = o),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e) {
                                      n.m_anime.once(
                                        Animation.EventType.FINISHED,
                                        function () {
                                          e();
                                        }
                                      ),
                                        n.m_anime.play(t);
                                    })
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
                (o.RecoverPlate = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e() {
                      var o,
                        n,
                        i = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.ShowDarkOrLight(!1),
                                  (this.m_multiplier2Lable.node.active = !1),
                                  (this.m_multiplier4Lable.node.active = !1),
                                  (this.m_multiplier8Lable.node.active = !1),
                                  (o = ANIMATION_NAME$1.Appear),
                                  (e.t0 = this.m_multiply),
                                  (e.next = e.t0 === t.Multiplier.X1 ? 8 : 10);
                                break;
                              case 8:
                                return (
                                  (o = ANIMATION_NAME$1.Appear),
                                  e.abrupt("break", 12)
                                );
                              case 10:
                                return (
                                  (o = ANIMATION_NAME$1.Active),
                                  e.abrupt("break", 12)
                                );
                              case 12:
                                ((n = this.m_anime.getState(o)).time =
                                  n.duration),
                                  this.m_anime.once(
                                    Animation.EventType.FINISHED,
                                    function () {
                                      switch (i.m_multiply) {
                                        case t.Multiplier.X1:
                                          break;
                                        case t.Multiplier.X2:
                                          (i.m_multiplier2Lable.node.active =
                                            !0),
                                            (i.m_multiplier2Lable.string =
                                              "X" + i.m_multiply);
                                          break;
                                        case t.Multiplier.X4:
                                          (i.m_multiplier4Lable.node.active =
                                            !0),
                                            (i.m_multiplier4Lable.string =
                                              "X" + i.m_multiply);
                                          break;
                                        default:
                                          (i.m_multiplier8Lable.node.active =
                                            !0),
                                            (i.m_multiplier8Lable.string =
                                              "X" + i.m_multiply);
                                      }
                                    }
                                  ),
                                  this.m_anime.play(o);
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
                (o.ShowUnCandy = function (e) {
                  (this.m_multiply = e),
                    (this.m_anime = this.node.getComponent(Animation)),
                    this.RecoverPlate();
                }),
                (o.ShowDarkOrLight = function (e) {
                  for (var t = 0; t < this.m_frane.length; t++)
                    this.PlayDarkOrLightFrane(this.m_frane[t], e);
                  for (var o = 0; o < this.m_num.length; o++)
                    this.PlayDarkOrLightNum(this.m_num[o], e);
                }),
                (o.PlayDarkOrLightFrane = function (e, t) {
                  e.getComponent(UIRenderer) || e.addComponent(UIRenderer),
                    (e.getComponent(UIRenderer).color = t
                      ? color(SymbolColor.D, SymbolColor.D, SymbolColor.D)
                      : color(SymbolColor.L, SymbolColor.L, SymbolColor.L));
                }),
                (o.PlayDarkOrLightNum = function (e, t) {
                  e.color = t
                    ? color(SymbolColor.D, SymbolColor.D, SymbolColor.D)
                    : color(SymbolColor.L, SymbolColor.L, SymbolColor.L);
                }),
                _createClass(t, [
                  {
                    key: "Multiply",
                    get: function () {
                      return Number(this.m_multiply);
                    },
                  },
                ]),
                t
              );
            })(Component)),
            (_class3$1.Multiplier = { X1: "1", X2: "2", X4: "4" }),
            (_class2$3 = _class3$1),
            (_descriptor$2 = _applyDecoratedDescriptor(
              _class2$3.prototype,
              "m_multiplier2Lable",
              [_dec2$2],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (_descriptor2$2 = _applyDecoratedDescriptor(
              _class2$3.prototype,
              "m_multiplier4Lable",
              [_dec3$2],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (_descriptor3$2 = _applyDecoratedDescriptor(
              _class2$3.prototype,
              "m_multiplier8Lable",
              [_dec4$2],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (_descriptor4$1 = _applyDecoratedDescriptor(
              _class2$3.prototype,
              "m_frane",
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
            (_descriptor5$1 = _applyDecoratedDescriptor(
              _class2$3.prototype,
              "m_num",
              [_dec6$1],
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
          ) || _class$3);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "b9c6dqessFNU6C6Y8nntb2X", "NodePool", void 0);
        var NodePool = (function () {
            function e() {
              (this.m_symbolReels = new Array()),
                (this.m_historyPrefabs = null),
                (this.m_history = new Array()),
                (this.m_symbolEftPrefabs = null),
                (this.m_symbolEffects = new Array()),
                (this.m_winPrefab = null),
                (this.m_wins = new Array()),
                (this.m_hitEftPrefab = null),
                (this.m_hits = new Array()),
                (e._instance = this);
            }
            e.GetInstance = function () {
              return e._instance;
            };
            var t = e.prototype;
            return (
              (t.GetSymbol = function (e, t) {
                var o = null;
                if (this.m_symbolReels.length > 0)
                  (o = this.m_symbolReels.shift()).SetSymbolSpriteFrame(t),
                    o.SetSymbolOpacity(Reel.Opacity.Show);
                else {
                  var n = new Node();
                  n.addComponent(Sprite);
                  var i = n.getComponent(Sprite);
                  (i.spriteFrame = t),
                    (i.type = Sprite.Type.SIMPLE),
                    (i.sizeMode = Sprite.SizeMode.RAW),
                    (i.trim = !1),
                    (o = new Reel(n, e)).SetSymbolSpriteFrame(t),
                    o.SetSymbolOpacity(Reel.Opacity.Show);
                }
                return o;
              }),
              (t.ReturnSymbol = function (e) {
                e && this.m_symbolReels.push(e);
              }),
              (t.SetHistoryPrefabs = function (e) {
                this.m_historyPrefabs = e;
              }),
              (t.GetHistory = function (e) {
                var t = null;
                if (this.m_history.length > 0) t = this.m_history.shift();
                else {
                  var o = instantiate(this.m_historyPrefabs);
                  t = new Reel(o, e);
                }
                return t;
              }),
              (t.ReturnHistory = function (e) {
                e && this.m_history.push(e);
              }),
              (t.SetEffectPrefabs = function (e) {
                this.m_symbolEftPrefabs = e;
              }),
              (t.GetEffect = function (e) {
                return this.m_symbolEffects[e] &&
                  this.m_symbolEffects[e].length > 0
                  ? this.m_symbolEffects[e].shift()
                  : new SymbolEffect(e, this.m_symbolEftPrefabs[e]);
              }),
              (t.ReturnEffect = function (e) {
                this.m_symbolEffects[e.Symbol] &&
                  this.m_symbolEffects[e.Symbol].push(e);
              }),
              (t.SetWinPrefab = function (e) {
                this.m_winPrefab = e;
              }),
              (t.GetSingleWin = function () {
                return this.m_wins.length > 0
                  ? this.m_wins.shift()
                  : this.m_winPrefab
                  ? instantiate(this.m_winPrefab).getComponent(WinNum)
                  : void 0;
              }),
              (t.ReturnWin = function (e) {
                this.m_wins.push(e);
              }),
              (t.SetCandyPrefab = function (e) {
                this.m_hitEftPrefab = e;
              }),
              (t.GetCandy = function () {
                return this.m_hits.length > 0
                  ? this.m_hits.shift()
                  : this.m_hitEftPrefab
                  ? instantiate(this.m_hitEftPrefab).getComponent(Multiplier)
                  : void 0;
              }),
              (t.ReturnCandy = function (e) {
                this.m_hits.push(e);
              }),
              e
            );
          })(),
          _dec$4,
          _dec2$3,
          _dec3$3,
          _dec4$3,
          _dec5$2,
          _class$4,
          _class2$4,
          _descriptor$3,
          _descriptor2$3,
          _descriptor3$3,
          _descriptor4$2,
          _dec6$2,
          _dec7,
          _dec8,
          _dec9,
          _dec10,
          _class4,
          _class5,
          _descriptor5$2,
          _descriptor6,
          _descriptor7,
          _descriptor8,
          _dec11,
          _dec12,
          _dec13,
          _dec14,
          _dec15,
          _dec16,
          _class7,
          _class8,
          _descriptor9,
          _descriptor10,
          _descriptor11,
          _descriptor12,
          _descriptor13;
        (NodePool._instance = new NodePool()),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "4bd9a+lR6dFSIx9CL4aZyLN", "HintFrame", void 0);
        var ccclass$4 = _decorator.ccclass,
          property$3 = _decorator.property,
          ArcSetting =
            ((_dec$4 = ccclass$4("ArcSetting")),
            (_dec2$3 = property$3({ type: Node, tooltip: "朝內角" })),
            (_dec3$3 = property$3({ type: Node, tooltip: "朝外角" })),
            (_dec4$3 = property$3({ type: Node, tooltip: "橫線" })),
            (_dec5$2 = property$3({ type: Node, tooltip: "直線" })),
            _dec$4(
              ((_class2$4 = (function () {
                function e() {
                  _initializerDefineProperty(
                    this,
                    "m_inNode",
                    _descriptor$3,
                    this
                  ),
                    _initializerDefineProperty(
                      this,
                      "m_outNode",
                      _descriptor2$3,
                      this
                    ),
                    _initializerDefineProperty(
                      this,
                      "m_horizontalNode",
                      _descriptor3$3,
                      this
                    ),
                    _initializerDefineProperty(
                      this,
                      "m_verticalNode",
                      _descriptor4$2,
                      this
                    );
                }
                return (
                  _createClass(e, [
                    {
                      key: "InNode",
                      get: function () {
                        return this.m_inNode;
                      },
                    },
                    {
                      key: "OutNode",
                      get: function () {
                        return this.m_outNode;
                      },
                    },
                    {
                      key: "HorizontalNode",
                      get: function () {
                        return this.m_horizontalNode;
                      },
                    },
                    {
                      key: "VerticalNode",
                      get: function () {
                        return this.m_verticalNode;
                      },
                    },
                  ]),
                  e
                );
              })()),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_inNode",
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
              (_descriptor2$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_outNode",
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
              (_descriptor3$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_horizontalNode",
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
              (_descriptor4$2 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_verticalNode",
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
              (_class$4 = _class2$4))
            ) || _class$4),
          CenterSetting =
            ((_dec6$2 = ccclass$4("CenterSetting")),
            (_dec7 = property$3({ type: Node, tooltip: "上" })),
            (_dec8 = property$3({ type: Node, tooltip: "右" })),
            (_dec9 = property$3({ type: Node, tooltip: "下" })),
            (_dec10 = property$3({ type: Node, tooltip: "左" })),
            _dec6$2(
              ((_class5 = (function () {
                function e() {
                  _initializerDefineProperty(
                    this,
                    "m_upNode",
                    _descriptor5$2,
                    this
                  ),
                    _initializerDefineProperty(
                      this,
                      "m_rightNode",
                      _descriptor6,
                      this
                    ),
                    _initializerDefineProperty(
                      this,
                      "m_downNode",
                      _descriptor7,
                      this
                    ),
                    _initializerDefineProperty(
                      this,
                      "m_leftNode",
                      _descriptor8,
                      this
                    );
                }
                return (
                  _createClass(e, [
                    {
                      key: "UpNode",
                      get: function () {
                        return this.m_upNode;
                      },
                    },
                    {
                      key: "RightNode",
                      get: function () {
                        return this.m_rightNode;
                      },
                    },
                    {
                      key: "DownNode",
                      get: function () {
                        return this.m_downNode;
                      },
                    },
                    {
                      key: "LeftNode",
                      get: function () {
                        return this.m_leftNode;
                      },
                    },
                  ]),
                  e
                );
              })()),
              (_descriptor5$2 = _applyDecoratedDescriptor(
                _class5.prototype,
                "m_upNode",
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
              (_descriptor6 = _applyDecoratedDescriptor(
                _class5.prototype,
                "m_rightNode",
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
              (_descriptor7 = _applyDecoratedDescriptor(
                _class5.prototype,
                "m_downNode",
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
              (_descriptor8 = _applyDecoratedDescriptor(
                _class5.prototype,
                "m_leftNode",
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
              (_class4 = _class5))
            ) || _class4),
          HintFrame =
            ((_dec11 = ccclass$4("HintFrame")),
            (_dec12 = property$3({ type: CenterSetting, tooltip: "中間線段" })),
            (_dec13 = property$3({ type: ArcSetting, tooltip: "右上角" })),
            (_dec14 = property$3({ type: ArcSetting, tooltip: "左上角" })),
            (_dec15 = property$3({ type: ArcSetting, tooltip: "右下角" })),
            (_dec16 = property$3({ type: ArcSetting, tooltip: "左下角" })),
            _dec11(
              ((_class8 = (function (e) {
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
                      "m_center",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_topRightArc",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_topLeftArc",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_downRightArc",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_downLeftArc",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetFrame = function (e) {
                    var t = !1,
                      o = !1,
                      n = !1,
                      i = !1,
                      r = !1,
                      a = !1,
                      s = !1,
                      l = !1;
                    this.SetCenterAll(!0);
                    for (var c = 0; c < e.length; c++)
                      switch (e[c]) {
                        case EIGHT_SIDED.TOP:
                          (t = !0), (this.m_center.UpNode.active = !1);
                          break;
                        case EIGHT_SIDED.DOWN:
                          (o = !0), (this.m_center.DownNode.active = !1);
                          break;
                        case EIGHT_SIDED.RIGHT:
                          (n = !0), (this.m_center.RightNode.active = !1);
                          break;
                        case EIGHT_SIDED.LEFT:
                          (i = !0), (this.m_center.LeftNode.active = !1);
                          break;
                        case EIGHT_SIDED.TOP_LEFT:
                          r = !0;
                          break;
                        case EIGHT_SIDED.TOP_RIGHT:
                          a = !0;
                          break;
                        case EIGHT_SIDED.DOWN_LEFT:
                          s = !0;
                          break;
                        case EIGHT_SIDED.DOWN_RIGHT:
                          l = !0;
                      }
                    this.SetArcAll(this.m_topRightArc, !1),
                      this.SetArcAll(this.m_topLeftArc, !1),
                      this.SetArcAll(this.m_downRightArc, !1),
                      this.SetArcAll(this.m_downLeftArc, !1),
                      a
                        ? t || n || (this.m_topRightArc.InNode.active = !0)
                        : t && n
                        ? (this.m_topRightArc.OutNode.active = !0)
                        : t
                        ? (this.m_topRightArc.VerticalNode.active = !0)
                        : n
                        ? (this.m_topRightArc.HorizontalNode.active = !0)
                        : (this.m_topRightArc.InNode.active = !0),
                      l
                        ? o || n || (this.m_downRightArc.InNode.active = !0)
                        : o && n
                        ? (this.m_downRightArc.OutNode.active = !0)
                        : o
                        ? (this.m_downRightArc.VerticalNode.active = !0)
                        : n
                        ? (this.m_downRightArc.HorizontalNode.active = !0)
                        : (this.m_downRightArc.InNode.active = !0),
                      r
                        ? t || i || (this.m_topLeftArc.InNode.active = !0)
                        : t && i
                        ? (this.m_topLeftArc.OutNode.active = !0)
                        : t
                        ? (this.m_topLeftArc.VerticalNode.active = !0)
                        : i
                        ? (this.m_topLeftArc.HorizontalNode.active = !0)
                        : (this.m_topLeftArc.InNode.active = !0),
                      s
                        ? o || i || (this.m_downLeftArc.InNode.active = !0)
                        : o && i
                        ? (this.m_downLeftArc.OutNode.active = !0)
                        : o
                        ? (this.m_downLeftArc.VerticalNode.active = !0)
                        : i
                        ? (this.m_downLeftArc.HorizontalNode.active = !0)
                        : (this.m_downLeftArc.InNode.active = !0);
                  }),
                  (o.HideFrame = function () {
                    this.SetCenterAll(!1),
                      this.SetArcAll(this.m_topRightArc, !1),
                      this.SetArcAll(this.m_topLeftArc, !1),
                      this.SetArcAll(this.m_downRightArc, !1),
                      this.SetArcAll(this.m_downLeftArc, !1);
                  }),
                  (o.SetCenterAll = function (e) {
                    (this.m_center.UpNode.active = e),
                      (this.m_center.RightNode.active = e),
                      (this.m_center.DownNode.active = e),
                      (this.m_center.LeftNode.active = e);
                  }),
                  (o.SetArcAll = function (e, t) {
                    (e.InNode.active = t),
                      (e.OutNode.active = t),
                      (e.HorizontalNode.active = t),
                      (e.VerticalNode.active = t);
                  }),
                  t
                );
              })(Component)),
              (_descriptor9 = _applyDecoratedDescriptor(
                _class8.prototype,
                "m_center",
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
              (_descriptor10 = _applyDecoratedDescriptor(
                _class8.prototype,
                "m_topRightArc",
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
              (_descriptor11 = _applyDecoratedDescriptor(
                _class8.prototype,
                "m_topLeftArc",
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
              (_descriptor12 = _applyDecoratedDescriptor(
                _class8.prototype,
                "m_downRightArc",
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
              (_descriptor13 = _applyDecoratedDescriptor(
                _class8.prototype,
                "m_downLeftArc",
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
              (_class7 = _class8))
            ) || _class7),
          _dec$5,
          _dec2$4,
          _dec3$4,
          _dec4$4,
          _dec5$3,
          _dec6$3,
          _dec7$1,
          _dec8$1,
          _dec9$1,
          _class$5,
          _class2$5,
          _descriptor$4,
          _descriptor2$4,
          _descriptor3$4,
          _descriptor4$3,
          _descriptor5$3,
          _descriptor6$1,
          _descriptor7$1,
          _descriptor8$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "5fb8eLx95FCyKM8G+s2zc0w",
            "EffectPlate",
            void 0
          );
        var ccclass$5 = _decorator.ccclass,
          property$4 = _decorator.property,
          NearWin_AnimName,
          Sctter_AnimName,
          Wild_AnimName,
          Effect_AnimName,
          Event_AnimName;
        !(function (e) {
          (e.Drop = "Drop"), (e.Loop = "Loop");
        })(NearWin_AnimName || (NearWin_AnimName = {})),
          (function (e) {
            (e.NearWin = "NearWin"), (e.Stop = "Stop"), (e.Win = "Win");
          })(Sctter_AnimName || (Sctter_AnimName = {})),
          (function (e) {
            (e.Appear = "Appear"), (e.Remove = "Remove"), (e.Win = "Win");
          })(Wild_AnimName || (Wild_AnimName = {})),
          (function (e) {
            (e.Remove = "Remove"), (e.Win = "Win");
          })(Effect_AnimName || (Effect_AnimName = {})),
          (function (e) {
            (e.AnimationEvent = "AnimationEvent"),
              (e.Disappearance = "Disappearance");
          })(Event_AnimName || (Event_AnimName = {}));
        var EffectPlate =
          ((_dec$5 = ccclass$5("EffectPlate")),
          (_dec2$4 = property$4({ type: Prefab, tooltip: "symbol動畫" })),
          (_dec3$4 = property$4({ type: Prefab, tooltip: "包裝紙特效" })),
          (_dec4$4 = property$4({ type: Prefab, tooltip: "Win" })),
          (_dec5$3 = property$4({ type: Node, tooltip: "nearWinBottom" })),
          (_dec6$3 = property$4({ type: Node, tooltip: "nearWin" })),
          (_dec7$1 = property$4({ type: Node, tooltip: "Mark" })),
          (_dec8$1 = property$4({ type: Prefab, tooltip: "Win_Area_Bottom" })),
          (_dec9$1 = property$4({ type: Prefab, tooltip: "Win_Area_Frame" })),
          _dec$5(
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
                    "m_symbolEftPrefabs",
                    _descriptor$4,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_hitEftPrefab",
                    _descriptor2$4,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_win",
                    _descriptor3$4,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_nearWinBottom",
                    _descriptor4$3,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_nearWin",
                    _descriptor5$3,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_markNode",
                    _descriptor6$1,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_win_Area_Bottom",
                    _descriptor7$1,
                    _assertThisInitialized(t)
                  ),
                  _initializerDefineProperty(
                    t,
                    "m_win_Area_Frame",
                    _descriptor8$1,
                    _assertThisInitialized(t)
                  ),
                  (t.m_gameView = null),
                  (t.m_slotReels = null),
                  (t.m_symbolEffects = new Array()),
                  (t.m_candys = new Array()),
                  (t.m_candysPositionOffset = new Vec2(0, -10)),
                  (t.m_hintBottomNodes = []),
                  (t.m_hintFrames = []),
                  (t.m_scatterEffects = new Array()),
                  (t.m_slotReelNode = new Array()),
                  (t.m_isExplode = !1),
                  (t.m_hasPlayWildSound = !1),
                  t
                );
              }
              _inheritsLoose(t, e);
              var o = t.prototype;
              return (
                (o.Init = function (e, t) {
                  (this.m_gameView = e),
                    (this.m_slotReels = t),
                    NodePool.GetInstance().SetEffectPrefabs(
                      this.m_symbolEftPrefabs
                    ),
                    NodePool.GetInstance().SetWinPrefab(this.m_win),
                    NodePool.GetInstance().SetCandyPrefab(this.m_hitEftPrefab);
                  for (var o = 0, n = 0; n < Game_Define.COL; n++) {
                    for (var i = [], r = [], a = 0; a < Game_Define.ROW; a++) {
                      var s = instantiate(this.m_win_Area_Bottom);
                      this.m_markNode.addChild(s),
                        node$2.SetZIndex(s, -2),
                        i.push(s);
                      var l = this.m_slotReels.GetSymbolPosition(n, a);
                      s.setPosition(new Vec3(l.x, l.y)),
                        (s.active = !1),
                        (s.name = o.toString()),
                        (s = instantiate(this.m_win_Area_Frame)),
                        this.node.addChild(s),
                        node$2.SetZIndex(s, -1),
                        s.setPosition(new Vec3(l.x, l.y)),
                        (s.active = !1),
                        (s.name = o.toString()),
                        r.push(s.getComponent(HintFrame)),
                        o++;
                    }
                    this.m_hintBottomNodes.push(i), this.m_hintFrames.push(r);
                  }
                }),
                (o.ShowSpinNearWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t) {
                      var o, n;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !this.m_nearWin[t] ||
                                  !Game_Define.IsNearWin
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (this.m_nearWinBottom[t].active = !0),
                                  ((o = this.m_nearWin[t]).active = !0),
                                  (n = o.getComponent(sp.Skeleton)),
                                  SpineKit.PlayAnimation(
                                    n,
                                    NearWin_AnimName.Loop,
                                    !0
                                  ),
                                  (e.next = 9),
                                  o
                                    .getComponent(NearWinEffectComponent)
                                    .FadeIn()
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
                (o.ShowPatchUpNearWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t) {
                      var o, n;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !this.m_nearWin[t] ||
                                  !Game_Define.IsNearWin
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (this.m_nearWinBottom[t].active = !0),
                                  ((o = this.m_nearWin[t]).active = !0),
                                  (n = o.getComponent(sp.Skeleton)),
                                  SpineKit.PlayAnimation(
                                    n,
                                    NearWin_AnimName.Drop,
                                    !0
                                  ),
                                  (e.next = 9),
                                  o
                                    .getComponent(NearWinEffectComponent)
                                    .FadeIn()
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
                (o.CloseOneNearWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t) {
                      var o;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  !this.m_nearWin[t] ||
                                  !Game_Define.IsNearWin
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (this.m_nearWinBottom[t].active = !1),
                                  (o = this.m_nearWin[t]),
                                  (e.next = 6),
                                  o
                                    .getComponent(NearWinEffectComponent)
                                    .FadeOut()
                                );
                              case 6:
                                o.active = !1;
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
                (o.ShowScatterStop = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o) {
                      var n, i;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  this.CleanSymbolAnim(t, o),
                                  (n = this.m_slotReels.GetSymbol(
                                    t,
                                    o
                                  )).SetSymbolActive(!1),
                                  (i = NodePool.GetInstance().GetEffect(
                                    Game_Define.Symbol.SYMBOL_SCATTER
                                  )).SetSymbolPosition(n.GetSymbolPosition()),
                                  this.node.addChild(i.EftNode),
                                  node$2.SetZIndex(
                                    i.EftNode,
                                    Game_Define.GetZIndex(
                                      t,
                                      o,
                                      Game_Define.SLOT_REELS,
                                      SYMBOL_Z_INDEX.Scatter
                                    )
                                  ),
                                  (e.next = 9),
                                  i
                                    .PlayAnimation(Sctter_AnimName.Stop)
                                    .then(function () {
                                      n.SetSymbolActive(!0),
                                        i.EftNode.removeFromParent(),
                                        NodePool.GetInstance().ReturnEffect(i);
                                    })
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
                  return function (t, o) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.CleanSymbolAllAnim = function () {
                  for (var e = 0; e < Game_Define.SLOT_REELS.COL; e++)
                    for (var t = 0; t < Game_Define.SLOT_REELS.ROW; t++)
                      this.CleanSymbolAnim(e, t);
                }),
                (o.CleanSymbolAnim = function (e, t) {
                  this.m_symbolEffects[e] &&
                    this.m_symbolEffects.length > 0 &&
                    this.m_symbolEffects[e][t] &&
                    (this.m_symbolEffects[e][t].EftNode.removeFromParent(),
                    NodePool.GetInstance().ReturnEffect(
                      this.m_symbolEffects[e][t]
                    ),
                    (this.m_symbolEffects[e][t] = null));
                }),
                (o.CloseNearWin = function () {
                  for (var e = 0; e < this.m_nearWin.length; e++)
                    this.CloseOneNearWin(e);
                }),
                (o.CleanAllSymbolAnim = function () {
                  for (var e = 0; e < Game_Define.SLOT_REELS.COL; e++)
                    for (var t = 0; t < Game_Define.SLOT_REELS.ROW; t++)
                      this.CleanSymbolAnim(e, t);
                }),
                (o.PlayWinEffect = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n, i) {
                      var r,
                        a,
                        s = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = new Array()),
                                  (a = NodePool.GetInstance().GetEffect(t)),
                                  this.node.addChild(a.EftNode),
                                  node$2.SetZIndex(
                                    a.EftNode,
                                    Game_Define.GetZIndex(
                                      n,
                                      i,
                                      Game_Define.SLOT_REELS,
                                      SYMBOL_Z_INDEX.Win
                                    )
                                  ),
                                  (a.EftNode.position = o),
                                  this.m_candys[n] || (this.m_candys[n] = []),
                                  this.m_candys[n][i] &&
                                    this.m_candys[n][i].ShowDarkOrLight(!1),
                                  r.push(
                                    new Promise(function (e) {
                                      a.PlayAnimation(
                                        Effect_AnimName.Win,
                                        !1
                                      ).then(function () {
                                        s.m_symbolEffects[n] ||
                                          (s.m_symbolEffects[n] = []),
                                          (s.m_symbolEffects[n][i] = a),
                                          e();
                                      });
                                    })
                                  ),
                                  (e.next = 10),
                                  Promise.all(r)
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
                  return function (t, o, n, i) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.PlayWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n) {
                      var i, r;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = new Array()),
                                  (r = NodePool.GetInstance().GetSingleWin()),
                                  this.node.addChild(r.node),
                                  node$2.SetZIndex(
                                    r.node,
                                    Game_Define.GetZIndex(
                                      Game_Define.COL,
                                      Game_Define.ROW,
                                      Game_Define.SLOT_REELS,
                                      SYMBOL_Z_INDEX.WinNum
                                    )
                                  ),
                                  r.SetInfo(t, o),
                                  r.node.setPosition(n),
                                  i.push(
                                    new Promise(function (e) {
                                      r.Show().then(function () {
                                        r.node.removeFromParent(),
                                          NodePool.GetInstance().ReturnWin(r),
                                          e();
                                      });
                                    })
                                  ),
                                  (e.next = 9),
                                  Promise.all(i)
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
                  return function (t, o, n) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.PlayConnection = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n) {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (this.m_hintBottomNodes[o][n].active = !0),
                                  (this.m_hintFrames[o][n].node.active = !0),
                                  this.m_hintFrames[o][n].SetFrame(t);
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
                (o.CleanConnectHint = function () {
                  for (var e = 0; e < Game_Define.COL; e++)
                    for (var t = 0; t < Game_Define.ROW; t++)
                      (this.m_hintBottomNodes[e][t].active = !1),
                        this.m_hintFrames[e][t].HideFrame(),
                        (this.m_hintFrames[e][t].node.active = !1);
                }),
                (o.ShowRemoveWildCandy = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n, i) {
                      var r,
                        a,
                        s,
                        l,
                        c = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.m_symbolEffects[t][o]) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (r = !1),
                                  (a = new Array()),
                                  (s = this.m_symbolEffects[t][o]),
                                  (l = t * Game_Define.ROW + o),
                                  a.push(
                                    new Promise(function (e) {
                                      s.PlayAnimation(
                                        Effect_AnimName.Remove,
                                        !1,
                                        function () {
                                          r || e();
                                        },
                                        function (s) {
                                          (s !==
                                            Event_AnimName.AnimationEvent &&
                                            s !==
                                              Event_AnimName.Disappearance) ||
                                            (n &&
                                              n.length > 0 &&
                                              (Game_Define.IsWild ||
                                                ((Game_Define.IsWild = !0),
                                                node$1.Play(
                                                  Game_Define.AudioClips
                                                    .Combo_wild
                                                )),
                                              -1 != n.indexOf(l) &&
                                                ((r = !0),
                                                a.push(
                                                  c.PlayWildEffect(
                                                    t,
                                                    o,
                                                    function () {
                                                      e();
                                                    }
                                                  )
                                                ))),
                                            Game_Define.IsCandy ||
                                              ((Game_Define.IsCandy = !0),
                                              a.push(c.PlayCandyEffect(i))));
                                        }
                                      );
                                    })
                                  ),
                                  (e.next = 9),
                                  Promise.all(a)
                                );
                              case 9:
                                this.CleanSymbolAnim(t, o);
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
                  return function (t, o, n, i) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.PlayWildEffect = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n) {
                      var i,
                        r,
                        a,
                        s = this;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = new Array()),
                                  (r = NodePool.GetInstance().GetEffect(
                                    Game_Define.Symbol.SYMBOL_WILDE
                                  )),
                                  this.node.addChild(r.EftNode),
                                  node$2.SetZIndex(
                                    r.EftNode,
                                    Game_Define.GetZIndex(
                                      t,
                                      o,
                                      Game_Define.SLOT_REELS,
                                      SYMBOL_Z_INDEX.Win
                                    )
                                  ),
                                  (a = this.m_slotReels.GetSymbolPosition(
                                    t,
                                    o
                                  )),
                                  (r.EftNode.position = a),
                                  i.push(
                                    new Promise(function (e) {
                                      r.PlayAnimation(
                                        Wild_AnimName.Appear,
                                        !1
                                      ).then(function () {
                                        r.EftNode.removeFromParent(),
                                          NodePool.GetInstance().ReturnEffect(
                                            r
                                          );
                                        var n = s.m_slotReels.GetSymbol(t, o);
                                        s.m_slotReels.SetSymbolSpriteFrame(
                                          n,
                                          Game_Define.Symbol.SYMBOL_WILDE
                                        ),
                                          s.m_slotReels.ShowLightOneSymbol(
                                            t,
                                            o
                                          ),
                                          n.SetSymbolActive(!0),
                                          e();
                                      });
                                    })
                                  ),
                                  (e.next = 9),
                                  Promise.all(i)
                                );
                              case 9:
                                null == n || n();
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
                  return function (t, o, n) {
                    return e.apply(this, arguments);
                  };
                })()),
                (o.PlayCandyEffect = (function () {
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
                                o = new Array(),
                                  n = null,
                                  i = function (e) {
                                    for (
                                      var i = function (i) {
                                          if (t[e].Col[i] > 0) {
                                            a.m_candys.length > 0 &&
                                            a.m_candys[e] &&
                                            a.m_candys[e][i]
                                              ? (n = a.m_candys[e][i])
                                              : ((n =
                                                  NodePool.GetInstance().GetCandy()),
                                                a.m_candys[e] ||
                                                  (a.m_candys[e] = []),
                                                (a.m_candys[e][i] = n));
                                            var r =
                                              a.m_slotReels.GetSymbolPosition(
                                                e,
                                                i
                                              );
                                            n.node.setPosition(
                                              new Vec3(
                                                r.x,
                                                r.y + a.m_candysPositionOffset.y
                                              )
                                            ),
                                              a.m_markNode.addChild(n.node),
                                              (n.node.active = !0),
                                              o.push(
                                                new Promise(function (o) {
                                                  n.ShowMultiplier(
                                                    t[e].Col[i].toString()
                                                  ).then(function () {
                                                    o();
                                                  });
                                                })
                                              );
                                          }
                                        },
                                        r = 0;
                                      r < Game_Define.ROW;
                                      r++
                                    )
                                      i(r);
                                  },
                                  r = 0;
                                r < Game_Define.COL;
                                r++
                              )
                                i(r);
                              return (e.next = 6), Promise.all(o);
                            case 6:
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
                (o.StartSpinCandy = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o) {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.m_candys[t]) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                if (
                                  !(
                                    this.m_candys[t] && this.m_candys.length > 0
                                  )
                                ) {
                                  e.next = 7;
                                  break;
                                }
                                if (!this.m_candys[t][o]) {
                                  e.next = 7;
                                  break;
                                }
                                return (
                                  (e.next = 6), this.m_candys[t][o].clear()
                                );
                              case 6:
                                this.m_candys[t][o].node.active = !1;
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
                (o.CleanCandy = function () {
                  for (var e = 0; e < Game_Define.COL; e++)
                    if (this.m_candys[e] && this.m_candys.length > 0)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_candys[e][t] &&
                          (this.m_candys[e][t].node.removeFromParent(),
                          NodePool.GetInstance().ReturnCandy(
                            this.m_candys[e][t]
                          ),
                          (this.m_candys[e][t] = null));
                }),
                (o.ShowScatterNearWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o) {
                      var n, i;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.m_slotReels.GetSymbol(
                                    t,
                                    o
                                  )).SetSymbolActive(!1),
                                  (i = null),
                                  this.m_scatterEffects[t] &&
                                  this.m_scatterEffects[t][o]
                                    ? (i = this.m_scatterEffects[t][o])
                                    : ((i = NodePool.GetInstance().GetEffect(
                                        Game_Define.Symbol.SYMBOL_SCATTER
                                      )).SetSymbolPosition(
                                        n.GetSymbolPosition()
                                      ),
                                      this.node.addChild(i.EftNode),
                                      this.m_scatterEffects[t] ||
                                        (this.m_scatterEffects[t] = [])),
                                  (this.m_scatterEffects[t][o] = i),
                                  this.m_slotReelNode.push(n),
                                  (e.next = 8),
                                  i.PlayAnimation(Sctter_AnimName.NearWin)
                                );
                              case 8:
                                i.PlayAnimation(Sctter_AnimName.NearWin, !0);
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
                (o.PlayScatterWin = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t) {
                      var o, n, i, r, a;
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  node$1.Play(
                                    Game_Define.AudioClips.Scatter_Bell
                                  ),
                                    o = new Array(),
                                    n = 0;
                                  n < t.length;
                                  n++
                                )
                                  for (i = 0; i < t[n].Col.length; i++)
                                    this.m_scatterEffects[n] ||
                                      (this.m_scatterEffects[n] = []),
                                      t[n].Col[i] ==
                                        Game_Define.Symbol.SYMBOL_SCATTER &&
                                        ((r = null),
                                        this.m_scatterEffects[n][i]
                                          ? (r = this.m_scatterEffects[n][i])
                                          : ((a = this.m_slotReels.GetSymbol(
                                              n,
                                              i
                                            )).SetSymbolActive(!1),
                                            this.m_slotReelNode.push(a),
                                            (r =
                                              NodePool.GetInstance().GetEffect(
                                                Game_Define.Symbol
                                                  .SYMBOL_SCATTER
                                              )).SetSymbolPosition(
                                              a.GetSymbolPosition()
                                            ),
                                            this.node.addChild(r.EftNode),
                                            node$2.SetZIndex(
                                              r.EftNode,
                                              Game_Define.GetZIndex(
                                                n,
                                                i,
                                                Game_Define.SLOT_REELS,
                                                SYMBOL_Z_INDEX.Scatter
                                              )
                                            ),
                                            (this.m_scatterEffects[n][i] = r)),
                                        o.push(
                                          r.PlayAnimation(Sctter_AnimName.Win)
                                        ));
                                return (e.next = 5), Promise.all(o);
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
                (o.ClearScatterEffects = function () {
                  0 != this.m_slotReelNode.length &&
                    (this.m_slotReelNode.forEach(function (e) {
                      e.SetSymbolActive(!0);
                    }),
                    (this.m_slotReelNode = [])),
                    error("ClearScatterEffects", this.m_scatterEffects);
                  for (var e = 0; e < this.m_scatterEffects.length; e++)
                    if (
                      this.m_scatterEffects[e] &&
                      this.m_scatterEffects[e].length > 0
                    )
                      for (var t = 0; t < this.m_scatterEffects[e].length; t++)
                        this.m_scatterEffects[e][t] &&
                          (this.m_scatterEffects[e][
                            t
                          ].EftNode.removeFromParent(),
                          NodePool.GetInstance().ReturnEffect(
                            this.m_scatterEffects[e][t]
                          ),
                          (this.m_scatterEffects[e][t] = null));
                }),
                (o.RecoverPlate = function () {
                  for (var e = 0; e < Game_Define.COL; e++)
                    if (this.m_candys[e] && this.m_candys.length > 0)
                      for (var t = 0; t < Game_Define.ROW; t++)
                        this.m_candys[e][t] &&
                          ((this.m_candys[e][t].node.active = !0),
                          this.m_candys[e][t].RecoverPlate());
                }),
                (o.ShowUnCandy = function (e) {
                  void 0 === e && (e = null);
                  for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++)
                    for (var o = 0; o < Game_Define.SLOT_REELS.ROW; o++)
                      if (e && e[t].Col[o] > 0) {
                        var n = null;
                        this.m_candys.length > 0 &&
                        this.m_candys[t] &&
                        this.m_candys[t][o]
                          ? (n = this.m_candys[t][o])
                          : ((n = NodePool.GetInstance().GetCandy()),
                            this.m_candys[t] || (this.m_candys[t] = []),
                            (this.m_candys[t][o] = n));
                        var i = this.m_slotReels.GetSymbolPosition(t, o);
                        n.node.setPosition(
                          new Vec3(i.x, i.y + this.m_candysPositionOffset.y)
                        ),
                          this.m_markNode.addChild(n.node),
                          (n.node.active = !0),
                          n.ShowUnCandy(e[t].Col[o].toString());
                      }
                }),
                (o.ShowDarkOrLightCandy = function (e) {
                  for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++)
                    for (var o = 0; o < Game_Define.SLOT_REELS.ROW; o++)
                      this.m_candys[t] || (this.m_candys[t] = []),
                        this.m_candys[t][o] &&
                          this.m_candys[t][o].ShowDarkOrLight(e);
                }),
                (o.CheckMult = function (e) {
                  for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++)
                    for (var o = 0; o < Game_Define.SLOT_REELS.ROW; o++) {
                      var n = e[t].Col[o],
                        i = 0;
                      if (
                        (this.m_candys[t] &&
                          this.m_candys[t][o] &&
                          (i = this.m_candys[t][o].Multiply),
                        i !== n)
                      )
                        return !1;
                    }
                  return !0;
                }),
                _createClass(t, [
                  {
                    key: "IsExplode",
                    get: function () {
                      return this.m_isExplode;
                    },
                  },
                  {
                    key: "HasPlayWildSound",
                    get: function () {
                      return this.m_hasPlayWildSound;
                    },
                    set: function (e) {
                      this.m_hasPlayWildSound = e;
                    },
                  },
                ]),
                t
              );
            })(Component)),
            (_descriptor$4 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_symbolEftPrefabs",
              [_dec2$4],
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
              _class2$5.prototype,
              "m_hitEftPrefab",
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
            (_descriptor3$4 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_win",
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
            (_descriptor4$3 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_nearWinBottom",
              [_dec5$3],
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
              _class2$5.prototype,
              "m_nearWin",
              [_dec6$3],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (_descriptor6$1 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_markNode",
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
            (_descriptor7$1 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_win_Area_Bottom",
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
            (_descriptor8$1 = _applyDecoratedDescriptor(
              _class2$5.prototype,
              "m_win_Area_Frame",
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
            (_class$5 = _class2$5))
          ) || _class$5);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "55fbeu1lMZPKLEN/jnFQ+kQ",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {},
          _dec$6,
          _dec2$5,
          _class$6,
          _class2$6,
          _descriptor$5;
        (FeaturesAck.MG = {
          RoundQueue: [
            {
              ComboStageData: [
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [8, 1, 2, 3, 4, 5, 6] },
                    { Col: [8, 1, 1, 2, 3, 4, 5] },
                    { Col: [1, 2, 3, 4, 5, 6, 7] },
                    { Col: [2, 3, 4, 5, 6, 7, 8] },
                    { Col: [2, 3, 4, 5, 6, 7, 8] },
                    { Col: [3, 4, 5, 6, 7, 8, 1] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 1, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [8, 7, 14, 21, 15, 16],
                      Symbol: 1,
                      Count: 6,
                      Win: 0.15,
                      Mult: 1,
                    },
                    {
                      PosVec: [27, 34, 33, 40, 47, 46, 41],
                      Symbol: 7,
                      Count: 7,
                      Win: 1.25,
                      Mult: 1,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 1, 1, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [6, 6] },
                    { Col: [3, 1, 1] },
                    { Col: [7] },
                    { Col: [4, 4] },
                    { Col: [7, 7] },
                    { Col: [0] },
                  ],
                  WildPos: [21, 46],
                  ComboStageWin: 1.4,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [2, 3, 4, 5, 6, 6, 6] },
                    { Col: [2, 3, 4, 5, 3, 1, 1] },
                    { Col: [8, 2, 3, 4, 5, 6, 7] },
                    { Col: [2, 3, 4, 5, 6, 4, 4] },
                    { Col: [2, 3, 4, 5, 6, 7, 7] },
                    { Col: [3, 4, 5, 6, 8, 1, 0] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [2, 1, 0, 0, 0, 0, 0] },
                    { Col: [2, 1, 1, 0, 0, 0, 0] },
                    { Col: [2, 1, 0, 0, 0, 0, 1] },
                    { Col: [1, 0, 0, 0, 0, 1, 1] },
                    { Col: [1, 0, 0, 0, 0, 1, 1] },
                    { Col: [0, 0, 0, 0, 1, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [7, 14, 21, 28, 35, 22],
                      Symbol: 2,
                      Count: 6,
                      Win: 0.2,
                      Mult: 1,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [0] },
                    { Col: [] },
                    { Col: [3, 3] },
                    { Col: [4] },
                    { Col: [2] },
                    { Col: [] },
                  ],
                  WildPos: [14],
                  ComboStageWin: 0.2,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [3, 4, 5, 6, 6, 6, 0] },
                    { Col: [8, 3, 4, 5, 3, 1, 1] },
                    { Col: [3, 4, 5, 6, 7, 3, 3] },
                    { Col: [3, 4, 5, 6, 4, 4, 4] },
                    { Col: [3, 4, 5, 6, 7, 7, 2] },
                    { Col: [3, 4, 5, 6, 8, 1, 0] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [4, 1, 0, 0, 0, 0, 0] },
                    { Col: [4, 2, 1, 0, 0, 0, 0] },
                    { Col: [4, 1, 0, 1, 0, 0, 1] },
                    { Col: [2, 0, 0, 1, 0, 1, 1] },
                    { Col: [2, 0, 0, 1, 0, 1, 1] },
                    { Col: [1, 0, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [7, 14, 21, 28, 35, 42, 15],
                      Symbol: 3,
                      Count: 7,
                      Win: 1.8,
                      Mult: 6,
                    },
                    {
                      PosVec: [24, 31, 38, 45, 46],
                      Symbol: 6,
                      Count: 5,
                      Win: 0.5,
                      Mult: 1,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 1, 0, 0, 0] },
                    { Col: [1, 0, 0, 1, 0, 0, 0] },
                    { Col: [1, 0, 0, 1, 0, 0, 0] },
                    { Col: [1, 0, 0, 1, 1, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [] },
                    { Col: [0, 0] },
                    { Col: [3] },
                    { Col: [7, 7] },
                    { Col: [6, 6] },
                    { Col: [4, 4, 4] },
                  ],
                  WildPos: [7, 24],
                  ComboStageWin: 2.3,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [8, 4, 5, 6, 6, 6, 0] },
                    { Col: [4, 5, 3, 1, 1, 0, 0] },
                    { Col: [4, 5, 8, 7, 3, 3, 3] },
                    { Col: [4, 5, 4, 4, 4, 7, 7] },
                    { Col: [4, 5, 7, 7, 2, 6, 6] },
                    { Col: [4, 5, 1, 0, 4, 4, 4] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [8, 2, 0, 0, 0, 0, 0] },
                    { Col: [8, 4, 1, 0, 0, 0, 0] },
                    { Col: [8, 2, 1, 1, 0, 0, 1] },
                    { Col: [4, 1, 0, 1, 0, 1, 1] },
                    { Col: [4, 1, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [8, 7, 14, 21, 28, 35, 42],
                      Symbol: 4,
                      Count: 7,
                      Win: 8,
                      Mult: 16,
                    },
                    {
                      PosVec: [15, 22, 29, 36, 43, 23],
                      Symbol: 5,
                      Count: 6,
                      Win: 1,
                      Mult: 2,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [0, 0] },
                    { Col: [5, 5] },
                    { Col: [1, 1] },
                    { Col: [3] },
                    { Col: [3, 3] },
                    { Col: [4, 3] },
                  ],
                  WildPos: [29, 21],
                  ComboStageWin: 9,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [5, 6, 6, 6, 0, 0, 0] },
                    { Col: [3, 1, 1, 0, 0, 5, 5] },
                    { Col: [8, 7, 3, 3, 3, 1, 1] },
                    { Col: [8, 4, 4, 4, 7, 7, 3] },
                    { Col: [7, 7, 2, 6, 6, 3, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [8, 2, 0, 0, 1, 1, 1] },
                    { Col: [8, 4, 1, 1, 1, 0, 0] },
                    { Col: [16, 4, 1, 1, 0, 0, 1] },
                    { Col: [8, 2, 1, 2, 0, 1, 1] },
                    { Col: [8, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [11, 18, 17, 12, 13],
                      Count: 5,
                      Win: 0.1,
                      Mult: 1,
                    },
                    {
                      PosVec: [22, 21, 28, 35, 36],
                      Symbol: 7,
                      Count: 5,
                      Win: 13.5,
                      Mult: 18,
                    },
                    {
                      PosVec: [29, 28, 21, 30, 31],
                      Symbol: 4,
                      Count: 5,
                      Win: 3,
                      Mult: 12,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 1, 1, 1] },
                    { Col: [0, 0, 0, 1, 1, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [5, 5] },
                    { Col: [4, 4] },
                    { Col: [4, 3] },
                    { Col: [2, 6, 6] },
                    { Col: [7] },
                    { Col: [] },
                  ],
                  WildPos: [13, 36, 31],
                  ComboStageWin: 16.6,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 8, 1, 2, 3, 4] },
                    { Col: [5, 6, 6, 6, 8, 5, 5] },
                    { Col: [3, 1, 1, 5, 5, 4, 4] },
                    { Col: [3, 3, 3, 1, 1, 4, 3] },
                    { Col: [8, 7, 7, 3, 2, 6, 6] },
                    { Col: [8, 2, 6, 6, 3, 3, 7] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 0, 0, 0] },
                    { Col: [8, 4, 1, 1, 2, 2, 2] },
                    { Col: [16, 4, 1, 2, 2, 0, 0] },
                    { Col: [32, 8, 2, 1, 0, 0, 1] },
                    { Col: [16, 2, 1, 2, 0, 1, 1] },
                    { Col: [16, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [8, 9, 2, 10, 11],
                      Symbol: 6,
                      Count: 5,
                      Win: 1,
                      Mult: 2,
                    },
                    {
                      PosVec: [12, 11, 18, 17, 13],
                      Symbol: 5,
                      Count: 5,
                      Win: 0.3,
                      Mult: 1,
                    },
                    {
                      PosVec: [14, 21, 28, 35, 22, 23],
                      Symbol: 3,
                      Count: 6,
                      Win: 11,
                      Mult: 44,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 1, 0, 0, 0, 0] },
                    { Col: [0, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 0, 0, 1, 1, 0, 0] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [7] },
                    { Col: [3, 3, 3, 3, 3] },
                    { Col: [0, 0] },
                    { Col: [0, 0] },
                    { Col: [5] },
                    { Col: [3] },
                    { Col: [] },
                  ],
                  WildPos: [18, 8, 21],
                  ComboStageWin: 12.3,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 3, 4, 7] },
                    { Col: [5, 8, 3, 3, 3, 3, 3] },
                    { Col: [1, 1, 8, 4, 4, 0, 0] },
                    { Col: [8, 1, 1, 4, 3, 0, 0] },
                    { Col: [7, 7, 3, 2, 6, 6, 5] },
                    { Col: [2, 6, 6, 3, 3, 7, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 1, 0, 0] },
                    { Col: [8, 8, 2, 2, 4, 4, 4] },
                    { Col: [32, 8, 2, 2, 2, 0, 0] },
                    { Col: [64, 16, 4, 1, 0, 0, 1] },
                    { Col: [16, 2, 1, 2, 0, 1, 1] },
                    { Col: [16, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [4, 11, 10, 9, 8, 16, 12, 13],
                      Symbol: 3,
                      Count: 8,
                      Win: 5,
                      Mult: 10,
                    },
                    {
                      PosVec: [14, 21, 22, 15, 8, 16, 23],
                      Symbol: 1,
                      Count: 7,
                      Win: 13.2,
                      Mult: 66,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 1, 0, 0] },
                    { Col: [0, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [3] },
                    { Col: [5, 5, 4, 4, 4] },
                    { Col: [0, 0, 3] },
                    { Col: [0, 0] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [23, 11],
                  ComboStageWin: 18.2,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 4, 7, 3] },
                    { Col: [5, 8, 5, 5, 4, 4, 4] },
                    { Col: [4, 4, 0, 0, 0, 0, 3] },
                    { Col: [8, 4, 3, 0, 0, 0, 0] },
                    { Col: [7, 7, 3, 2, 6, 6, 5] },
                    { Col: [2, 6, 6, 3, 3, 7, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 1, 0, 0] },
                    { Col: [8, 16, 2, 2, 4, 4, 4] },
                    { Col: [64, 16, 4, 4, 4, 1, 0] },
                    { Col: [128, 32, 4, 2, 1, 1, 2] },
                    { Col: [16, 2, 1, 2, 0, 1, 1] },
                    { Col: [16, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [14, 21, 22, 15, 8],
                      Symbol: 4,
                      Count: 5,
                      Win: 32,
                      Mult: 128,
                    },
                    {
                      PosVec: [16, 17, 24, 25, 18, 19, 26, 27],
                      Count: 8,
                      Win: 1.5,
                      Mult: 6,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 1, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 1, 0] },
                    { Col: [1, 1, 0, 1, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [4] },
                    { Col: [7, 7, 5, 5, 2, 2] },
                    { Col: [1, 1, 1, 1] },
                    { Col: [] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [22, 25],
                  ComboStageWin: 33.5,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 4, 7, 3] },
                    { Col: [5, 5, 5, 4, 4, 4, 4] },
                    { Col: [3, 7, 7, 5, 5, 2, 2] },
                    { Col: [8, 3, 8, 1, 1, 1, 1] },
                    { Col: [7, 7, 3, 2, 6, 6, 5] },
                    { Col: [2, 6, 6, 3, 3, 7, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 2, 0, 0] },
                    { Col: [8, 16, 2, 4, 8, 8, 8] },
                    { Col: [128, 16, 4, 4, 4, 1, 0] },
                    { Col: [128, 64, 8, 4, 2, 2, 4] },
                    { Col: [16, 2, 2, 2, 0, 1, 1] },
                    { Col: [16, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [4, 11, 10, 12, 13],
                      Symbol: 4,
                      Count: 5,
                      Win: 3.5,
                      Mult: 14,
                    },
                    {
                      PosVec: [14, 21, 22, 23, 30],
                      Symbol: 3,
                      Count: 5,
                      Win: 45.6,
                      Mult: 228,
                    },
                    {
                      PosVec: [24, 23, 25, 26, 27],
                      Symbol: 1,
                      Count: 5,
                      Win: 0.8,
                      Mult: 8,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 1, 0, 0] },
                    { Col: [0, 0, 0, 1, 1, 1, 1] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [0, 0, 1, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [3] },
                    { Col: [2, 6, 6] },
                    { Col: [] },
                    { Col: [6, 6, 6, 6, 3, 3] },
                    { Col: [2] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [13, 25, 14],
                  ComboStageWin: 49.9,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 7, 3, 3] },
                    { Col: [5, 5, 5, 8, 2, 6, 6] },
                    { Col: [8, 7, 7, 5, 5, 2, 2] },
                    { Col: [8, 6, 6, 6, 6, 3, 3] },
                    { Col: [7, 7, 2, 6, 6, 5, 2] },
                    { Col: [2, 6, 6, 3, 3, 7, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 2, 0, 0] },
                    { Col: [16, 32, 4, 8, 8, 8, 8] },
                    { Col: [128, 32, 8, 8, 8, 1, 0] },
                    { Col: [128, 128, 16, 8, 4, 2, 4] },
                    { Col: [32, 4, 2, 4, 1, 1, 1] },
                    { Col: [16, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [7, 14, 21, 8, 9, 10, 17, 18],
                      Symbol: 5,
                      Count: 8,
                      Win: 294,
                      Mult: 294,
                    },
                    {
                      PosVec: [15, 14, 21, 28, 29, 16],
                      Symbol: 7,
                      Count: 6,
                      Win: 294,
                      Mult: 294,
                    },
                    {
                      PosVec: [22, 21, 14, 23, 24, 31, 32, 25],
                      Symbol: 6,
                      Count: 8,
                      Win: 420,
                      Mult: 336,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 0, 0] },
                    { Col: [1, 1, 0, 1, 1, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [4, 4, 4] },
                    { Col: [6, 6, 6, 6] },
                    { Col: [6, 6, 6, 6] },
                    { Col: [5, 7, 1, 1] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [22, 15, 8],
                  ComboStageWin: 1008,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 7, 3, 3] },
                    { Col: [8, 2, 6, 6, 4, 4, 4] },
                    { Col: [8, 2, 2, 6, 6, 6, 6] },
                    { Col: [8, 3, 3, 6, 6, 6, 6] },
                    { Col: [2, 5, 2, 5, 7, 1, 1] },
                    { Col: [2, 6, 6, 3, 3, 7, 3] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 2, 0, 0] },
                    { Col: [32, 64, 8, 16, 8, 8, 8] },
                    { Col: [128, 64, 16, 16, 16, 2, 1] },
                    { Col: [128, 128, 32, 16, 8, 4, 8] },
                    { Col: [64, 4, 2, 4, 1, 1, 1] },
                    { Col: [32, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [8, 7, 14, 21, 28, 35, 15, 16],
                      Symbol: 2,
                      Count: 8,
                      Win: 117.6,
                      Mult: 392,
                    },
                    {
                      PosVec: [9, 10, 17, 24, 25, 18, 19, 26, 27, 20],
                      Symbol: 6,
                      Count: 10,
                      Win: 92,
                      Mult: 46,
                    },
                    {
                      PosVec: [22, 21, 14, 7, 23],
                      Symbol: 3,
                      Count: 5,
                      Win: 83.2,
                      Mult: 416,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [4, 2, 2, 2] },
                    { Col: [0, 0, 2, 2, 2, 2] },
                    { Col: [3, 3, 3, 3, 3] },
                    { Col: [3] },
                    { Col: [7] },
                    { Col: [] },
                  ],
                  WildPos: [26, 15, 23],
                  ComboStageWin: 292.8,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 7, 3, 3] },
                    { Col: [4, 4, 4, 4, 2, 2, 2] },
                    { Col: [8, 0, 0, 2, 2, 2, 2] },
                    { Col: [8, 8, 3, 3, 3, 3, 3] },
                    { Col: [5, 2, 5, 7, 1, 1, 3] },
                    { Col: [6, 6, 3, 3, 7, 3, 7] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [0, 0, 1, 0, 2, 0, 0] },
                    { Col: [64, 128, 16, 32, 16, 16, 16] },
                    { Col: [128, 128, 32, 32, 32, 4, 2] },
                    { Col: [128, 128, 64, 32, 16, 8, 16] },
                    { Col: [64, 4, 2, 4, 1, 1, 2] },
                    { Col: [32, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [7, 14, 21, 22, 8, 9, 10],
                      Symbol: 4,
                      Count: 7,
                      Win: 252,
                      Mult: 504,
                    },
                    {
                      PosVec: [11, 18, 17, 19, 12, 13, 20],
                      Symbol: 2,
                      Count: 7,
                      Win: 14.5,
                      Mult: 58,
                    },
                    {
                      PosVec: [15, 14, 21, 22, 16],
                      Count: 5,
                      Win: 46.4,
                      Mult: 464,
                    },
                    {
                      PosVec: [23, 22, 21, 14, 24, 25, 26, 27, 34],
                      Symbol: 3,
                      Count: 9,
                      Win: 339,
                      Mult: 452,
                    },
                  ],
                  ComboTag: [
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 1] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [] },
                    { Col: [7, 7, 7, 7, 7] },
                    { Col: [3, 3, 3, 3, 3, 7] },
                    { Col: [7, 7, 7, 7, 7, 7] },
                    { Col: [5] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [8, 25, 15, 11],
                  ComboStageWin: 651.9,
                  NeedEliminate: !0,
                },
                {
                  ComboStageSymbol: [
                    { Col: [6, 7, 1, 2, 7, 3, 3] },
                    { Col: [8, 8, 7, 7, 7, 7, 7] },
                    { Col: [8, 3, 3, 3, 3, 3, 7] },
                    { Col: [8, 7, 7, 7, 7, 7, 7] },
                    { Col: [5, 2, 5, 7, 1, 1, 5] },
                    { Col: [6, 6, 3, 3, 7, 3, 7] },
                    { Col: [1, 0, 4, 4, 4, 4, 3] },
                  ],
                  ComboStageMult: [
                    { Col: [1, 1, 1, 0, 4, 0, 0] },
                    { Col: [128, 128, 32, 64, 32, 32, 32] },
                    { Col: [128, 128, 64, 64, 64, 8, 4] },
                    { Col: [128, 128, 128, 64, 32, 16, 32] },
                    { Col: [128, 4, 2, 8, 1, 1, 2] },
                    { Col: [32, 2, 0, 1, 0, 1, 1] },
                    { Col: [2, 1, 0, 1, 2, 1, 0] },
                  ],
                  AwardDataVec: [
                    {
                      PosVec: [0, 7, 14, 21, 8],
                      Symbol: 6,
                      Count: 5,
                      Win: 224,
                      Mult: 448,
                    },
                    {
                      PosVec: [
                        1, 8, 7, 14, 21, 22, 23, 24, 31, 25, 26, 27, 20, 13, 12,
                        11, 4, 10, 9,
                      ],
                      Symbol: 7,
                      Count: 19,
                      Win: 40800,
                      Mult: 816,
                    },
                    {
                      PosVec: [15, 8, 7, 14, 21, 16, 17, 18, 19],
                      Symbol: 3,
                      Count: 9,
                      Win: 507,
                      Mult: 676,
                    },
                    {
                      PosVec: [28, 21, 14, 7, 8],
                      Symbol: 5,
                      Count: 5,
                      Win: 153.6,
                      Mult: 512,
                    },
                  ],
                  ComboTag: [
                    { Col: [1, 1, 0, 0, 1, 0, 0] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 1, 1, 1, 1, 1, 1] },
                    { Col: [1, 0, 0, 1, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                    { Col: [0, 0, 0, 0, 0, 0, 0] },
                  ],
                  FillSymbols: [
                    { Col: [2, 0] },
                    { Col: [0, 5, 5, 2, 4, 4] },
                    { Col: [7, 7, 7, 7, 7, 3] },
                    { Col: [2, 2, 2, 2, 2, 5, 5] },
                    { Col: [7] },
                    { Col: [] },
                    { Col: [] },
                  ],
                  WildPos: [10, 28, 0, 17],
                  ComboStageWin: 7903.9,
                  MaxFlag: !0,
                },
              ],
              RoundWin: 1e4,
              AwardTypeFlag: 9,
              MaxFlag: !0,
            },
          ],
          TotalWin: 1e4,
          RTP: 0.97,
        }),
          (FeaturesAck.FG = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [5, 6, 7, 8, 9, 1, 2] },
                      { Col: [9, 1, 2, 3, 4, 5, 6] },
                      { Col: [8, 1, 9, 3, 4, 5, 6] },
                      { Col: [4, 5, 6, 7, 8, 1, 2] },
                      { Col: [8, 1, 1, 2, 3, 4, 5] },
                      { Col: [2, 3, 4, 5, 6, 7, 8] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                ScatterCount: 3,
                FreeRemainRound: 10,
                FreeTotalRound: 10,
                AddRounds: 10,
                AwardTypeFlag: 2,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [4, 5, 6, 7, 1, 1, 2] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [3, 2, 1, 0, 3, 3, 4] },
                      { Col: [6, 7, 7, 0, 1, 2, 3] },
                      { Col: [2, 3, 3, 0, 1, 2, 3] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 9,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [4, 5, 6, 7, 0, 0, 1] },
                      { Col: [5, 6, 7, 1, 1, 2, 2] },
                      { Col: [6, 7, 2, 2, 3, 3, 4] },
                      { Col: [3, 4, 4, 5, 5, 6, 6] },
                      { Col: [4, 4, 5, 5, 6, 6, 7] },
                      { Col: [1, 1, 2, 2, 3, 3, 0] },
                      { Col: [2, 3, 3, 4, 4, 0, 1] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 8,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [5, 4, 3, 2, 1, 0, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [1, 0, 5, 4, 7, 6, 5] },
                      { Col: [2, 3, 4, 5, 6, 7, 4] },
                      { Col: [3, 2, 7, 6, 5, 4, 3] },
                      { Col: [4, 5, 6, 7, 6, 7, 0] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 7,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [6, 7, 1, 1, 2, 2, 3] },
                      { Col: [2, 3, 3, 4, 4, 5, 5] },
                      { Col: [6, 5, 4, 3, 2, 1, 0] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [3, 3, 4, 4, 0, 1, 2] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 6,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                      { Col: [4, 4, 5, 5, 0, 1, 2] },
                      { Col: [6, 6, 7, 6, 5, 4, 3] },
                      { Col: [5, 5, 6, 6, 7, 7, 0] },
                      { Col: [3, 4, 5, 6, 7, 0, 0] },
                      { Col: [2, 2, 3, 3, 4, 4, 0] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 5,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [4, 5, 6, 7, 0, 0, 1] },
                      { Col: [4, 5, 6, 7, 1, 1, 2] },
                      { Col: [5, 6, 7, 2, 2, 3, 3] },
                      { Col: [4, 3, 2, 1, 0, 3, 3] },
                      { Col: [6, 7, 4, 4, 5, 5, 6] },
                      { Col: [2, 3, 3, 0, 1, 2, 3] },
                      { Col: [5, 6, 7, 1, 1, 2, 2] },
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
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 4,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [4, 5, 6, 7, 2, 2, 3] },
                      { Col: [5, 6, 6, 7, 6, 5, 4] },
                      { Col: [6, 6, 7, 7, 0, 1, 2] },
                      { Col: [2, 2, 3, 3, 0, 1, 2] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [16, 23, 22, 29, 28],
                        Symbol: 6,
                        Count: 5,
                        Win: 0.5,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [6] },
                      { Col: [3] },
                      { Col: [2, 2] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [23],
                    ComboStageWin: 0.5,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [4, 5, 7, 2, 2, 3, 6] },
                      { Col: [5, 8, 7, 6, 5, 4, 3] },
                      { Col: [7, 7, 0, 1, 2, 2, 2] },
                      { Col: [2, 2, 3, 3, 0, 1, 2] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 0, 0, 0, 0] },
                      { Col: [0, 2, 2, 0, 0, 0, 0] },
                      { Col: [2, 2, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [16, 23, 22, 29, 28],
                        Symbol: 7,
                        Count: 5,
                        Win: 0.75,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [1] },
                      { Col: [0, 0] },
                      { Col: [2] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [28],
                    ComboStageWin: 0.75,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [4, 5, 2, 2, 3, 6, 1] },
                      { Col: [5, 6, 5, 4, 3, 0, 0] },
                      { Col: [8, 0, 1, 2, 2, 2, 2] },
                      { Col: [2, 2, 3, 3, 0, 1, 2] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 0, 0, 0, 0] },
                      { Col: [0, 2, 2, 0, 0, 0, 0] },
                      { Col: [2, 2, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [31, 32, 33, 34, 41],
                        Symbol: 2,
                        Count: 5,
                        Win: 0.15,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [7, 7, 2] },
                      { Col: [0] },
                      { Col: [] },
                    ],
                    WildPos: [31],
                    ComboStageWin: 0.15,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [4, 5, 2, 2, 3, 6, 1] },
                      { Col: [5, 6, 5, 4, 3, 0, 0] },
                      { Col: [8, 0, 1, 8, 7, 7, 2] },
                      { Col: [2, 2, 3, 3, 0, 1, 0] },
                      { Col: [0, 1, 2, 3, 4, 5, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 0, 0, 0, 0] },
                      { Col: [0, 2, 2, 0, 0, 0, 0] },
                      { Col: [2, 2, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 1.4,
                FreeRemainRound: 3,
                FreeTotalRound: 10,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [6, 7, 0, 0, 1, 1, 2] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [7, 2, 2, 3, 3, 4, 4] },
                      { Col: [0, 3, 3, 4, 4, 5, 5] },
                      { Col: [5, 6, 7, 4, 4, 5, 5] },
                      { Col: [5, 6, 7, 0, 0, 1, 1] },
                      { Col: [2, 2, 3, 3, 4, 4, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 0, 0, 0, 0] },
                      { Col: [0, 2, 2, 0, 0, 0, 0] },
                      { Col: [2, 2, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 2,
                FreeTotalRound: 10,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [1, 2, 2, 3, 3, 4, 4] },
                      { Col: [4, 5, 6, 7, 2, 2, 3] },
                      { Col: [4, 5, 5, 6, 6, 7, 6] },
                      { Col: [4, 4, 5, 5, 6, 6, 7] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 2, 0, 0, 0, 0] },
                      { Col: [0, 4, 4, 1, 1, 0, 0] },
                      { Col: [2, 2, 1, 2, 2, 2, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [15, 22, 23, 30, 31],
                        Symbol: 5,
                        Count: 5,
                        Win: 1.2,
                        Mult: 4,
                      },
                      {
                        PosVec: [24, 25, 32, 33, 40],
                        Symbol: 6,
                        Count: 5,
                        Win: 0.5,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [4] },
                      { Col: [5, 5, 5, 5] },
                      { Col: [1, 0] },
                      { Col: [2] },
                      { Col: [] },
                    ],
                    WildPos: [32, 31],
                    ComboStageWin: 1.7,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [1, 2, 2, 3, 3, 4, 4] },
                      { Col: [4, 6, 7, 2, 2, 3, 4] },
                      { Col: [4, 7, 6, 5, 5, 5, 5] },
                      { Col: [4, 4, 8, 8, 7, 1, 0] },
                      { Col: [1, 2, 3, 4, 5, 7, 2] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 2, 0, 0, 0, 0] },
                      { Col: [1, 4, 4, 2, 2, 1, 1] },
                      { Col: [4, 4, 2, 4, 2, 2, 1] },
                      { Col: [0, 0, 0, 1, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [14, 21, 28, 29, 30, 31, 38],
                        Symbol: 4,
                        Count: 7,
                        Win: 3,
                        Mult: 6,
                      },
                      {
                        PosVec: [24, 31, 30, 25, 26, 27],
                        Symbol: 5,
                        Count: 6,
                        Win: 1,
                        Mult: 2,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 1, 1, 1, 1] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [6, 5, 7, 7] },
                      { Col: [7, 7, 7, 7] },
                      { Col: [3] },
                      { Col: [] },
                    ],
                    WildPos: [14, 25],
                    ComboStageWin: 4,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [1, 2, 2, 3, 3, 4, 4] },
                      { Col: [8, 6, 7, 2, 2, 3, 4] },
                      { Col: [7, 6, 8, 6, 5, 7, 7] },
                      { Col: [7, 1, 0, 7, 7, 7, 7] },
                      { Col: [1, 2, 3, 5, 7, 2, 3] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [2, 2, 2, 0, 0, 0, 0] },
                      { Col: [1, 8, 8, 4, 2, 2, 2] },
                      { Col: [4, 4, 2, 8, 4, 4, 2] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [15, 14, 22, 23, 24],
                        Symbol: 6,
                        Count: 5,
                        Win: 5,
                        Mult: 10,
                      },
                      {
                        PosVec: [26, 33, 32, 31, 39, 34, 27],
                        Symbol: 7,
                        Count: 7,
                        Win: 10,
                        Mult: 8,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 1, 1] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [6, 6] },
                      { Col: [4, 4, 4, 1] },
                      { Col: [4, 4, 4] },
                      { Col: [6] },
                      { Col: [] },
                    ],
                    WildPos: [33, 22],
                    ComboStageWin: 15,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [1, 2, 2, 3, 3, 4, 4] },
                      { Col: [7, 2, 2, 3, 4, 6, 6] },
                      { Col: [7, 8, 5, 4, 4, 4, 1] },
                      { Col: [7, 1, 0, 8, 4, 4, 4] },
                      { Col: [1, 2, 3, 5, 2, 3, 6] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [2, 4, 4, 0, 1, 0, 0] },
                      { Col: [1, 16, 8, 8, 4, 4, 2] },
                      { Col: [4, 4, 2, 16, 8, 8, 4] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [8, 15, 22, 16, 9],
                        Symbol: 2,
                        Count: 5,
                        Win: 1.8,
                        Mult: 12,
                      },
                      {
                        PosVec: [18, 25, 24, 31, 32, 33, 26, 34],
                        Symbol: 4,
                        Count: 8,
                        Win: 19.5,
                        Mult: 26,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 1, 0, 0] },
                      { Col: [0, 1, 0, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [6, 1] },
                      { Col: [4, 1] },
                      { Col: [3, 3, 3, 5] },
                      { Col: [3, 3, 3] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [15, 32],
                    ComboStageWin: 21.3,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 4, 5, 6, 7, 0] },
                      { Col: [1, 3, 3, 4, 4, 6, 1] },
                      { Col: [7, 8, 3, 6, 6, 4, 1] },
                      { Col: [7, 5, 1, 3, 3, 3, 5] },
                      { Col: [7, 1, 0, 8, 3, 3, 3] },
                      { Col: [1, 2, 3, 5, 2, 3, 6] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 2, 2, 0, 0, 0, 0] },
                      { Col: [2, 8, 8, 0, 1, 0, 0] },
                      { Col: [1, 16, 8, 16, 8, 8, 2] },
                      { Col: [4, 4, 2, 32, 16, 16, 8] },
                      { Col: [0, 0, 0, 1, 1, 2, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [1, 8, 15, 16, 9],
                        Symbol: 3,
                        Count: 5,
                        Win: 1.6,
                        Mult: 8,
                      },
                      {
                        PosVec: [24, 31, 32, 25, 26, 33, 40, 34],
                        Symbol: 3,
                        Count: 8,
                        Win: 26,
                        Mult: 52,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 1, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [6] },
                      { Col: [7, 7] },
                      { Col: [3] },
                      { Col: [4, 0] },
                      { Col: [0, 3, 3, 3] },
                      { Col: [3] },
                      { Col: [] },
                    ],
                    WildPos: [16, 26],
                    ComboStageWin: 27.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 4, 5, 6, 7, 0, 6] },
                      { Col: [1, 4, 4, 6, 1, 7, 7] },
                      { Col: [7, 8, 6, 6, 4, 1, 3] },
                      { Col: [7, 5, 1, 8, 5, 4, 0] },
                      { Col: [7, 1, 0, 0, 3, 3, 3] },
                      { Col: [1, 2, 3, 5, 2, 6, 3] },
                      { Col: [3, 4, 4, 0, 1, 2, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 1, 0, 1, 0, 0, 0] },
                      { Col: [0, 2, 2, 1, 0, 0, 0] },
                      { Col: [2, 16, 16, 1, 1, 0, 0] },
                      { Col: [1, 16, 8, 32, 8, 8, 2] },
                      { Col: [4, 4, 2, 32, 32, 32, 16] },
                      { Col: [0, 0, 0, 1, 1, 2, 2] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [3, 10, 17, 16, 15, 24],
                        Symbol: 6,
                        Count: 6,
                        Win: 24,
                        Mult: 32,
                      },
                      {
                        PosVec: [32, 33, 34, 41, 48],
                        Symbol: 3,
                        Count: 5,
                        Win: 8,
                        Mult: 40,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    FillSymbols: [
                      { Col: [4] },
                      { Col: [2] },
                      { Col: [3, 3] },
                      { Col: [3] },
                      { Col: [6, 6, 3] },
                      { Col: [] },
                      { Col: [5] },
                    ],
                    WildPos: [16, 41],
                    ComboStageWin: 32,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 4, 5, 7, 0, 6, 4] },
                      { Col: [1, 4, 4, 1, 7, 7, 2] },
                      { Col: [7, 8, 4, 1, 3, 3, 3] },
                      { Col: [7, 5, 1, 5, 4, 0, 3] },
                      { Col: [7, 1, 0, 0, 6, 6, 3] },
                      { Col: [1, 2, 3, 5, 2, 6, 8] },
                      { Col: [3, 4, 4, 0, 1, 2, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 2, 0, 1, 0, 0, 0] },
                      { Col: [0, 4, 4, 1, 0, 0, 0] },
                      { Col: [2, 32, 32, 1, 2, 1, 1] },
                      { Col: [1, 16, 8, 32, 8, 8, 4] },
                      { Col: [4, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [1, 8, 15, 16, 9],
                        Symbol: 4,
                        Count: 5,
                        Win: 9,
                        Mult: 36,
                      },
                      {
                        PosVec: [18, 19, 20, 27, 34, 41],
                        Symbol: 3,
                        Count: 6,
                        Win: 5,
                        Mult: 20,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [0] },
                      { Col: [2, 2] },
                      { Col: [6, 6, 6, 6] },
                      { Col: [] },
                      { Col: [7] },
                      { Col: [1] },
                      { Col: [] },
                    ],
                    WildPos: [16, 27],
                    ComboStageWin: 14,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 5, 7, 0, 6, 4, 0] },
                      { Col: [1, 1, 7, 7, 2, 2, 2] },
                      { Col: [7, 8, 1, 6, 6, 6, 6] },
                      { Col: [7, 5, 1, 5, 4, 0, 8] },
                      { Col: [7, 1, 0, 0, 6, 6, 7] },
                      { Col: [1, 2, 3, 5, 2, 6, 1] },
                      { Col: [3, 4, 4, 0, 1, 2, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 2, 0, 1, 0, 0, 0] },
                      { Col: [1, 8, 4, 1, 0, 0, 0] },
                      { Col: [2, 64, 64, 2, 4, 2, 2] },
                      { Col: [1, 16, 16, 32, 8, 8, 8] },
                      { Col: [4, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [7, 8, 15, 16, 23],
                        Symbol: 1,
                        Count: 5,
                        Win: 7.6,
                        Mult: 76,
                      },
                      {
                        PosVec: [17, 18, 19, 20, 27],
                        Symbol: 6,
                        Count: 5,
                        Win: 3,
                        Mult: 6,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 1, 1, 1] },
                      { Col: [0, 0, 1, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [3] },
                      { Col: [5, 5, 5, 5, 5] },
                      { Col: [3, 2] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [19, 7],
                    ComboStageWin: 10.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 5, 7, 0, 6, 4, 0] },
                      { Col: [8, 7, 7, 2, 2, 2, 3] },
                      { Col: [7, 8, 5, 5, 5, 5, 5] },
                      { Col: [7, 5, 5, 4, 0, 3, 2] },
                      { Col: [7, 1, 0, 0, 6, 6, 7] },
                      { Col: [1, 2, 3, 5, 2, 6, 1] },
                      { Col: [3, 4, 4, 0, 1, 2, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 2, 1, 1, 0, 0, 0] },
                      { Col: [2, 16, 8, 1, 0, 0, 0] },
                      { Col: [4, 128, 128, 4, 8, 4, 4] },
                      { Col: [2, 32, 32, 32, 8, 8, 8] },
                      { Col: [8, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [2, 9, 8, 7, 14, 21, 28, 15],
                        Symbol: 7,
                        Count: 8,
                        Win: 123,
                        Mult: 82,
                      },
                      {
                        PosVec: [16, 15, 22, 23, 17, 18, 19, 20],
                        Symbol: 5,
                        Count: 8,
                        Win: 170,
                        Mult: 170,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 1] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [5] },
                      { Col: [3, 3] },
                      { Col: [0, 0, 4, 4, 4, 4, 3] },
                      { Col: [2, 2] },
                      { Col: [6] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [23, 9],
                    ComboStageWin: 293,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 5, 0, 6, 4, 0, 5] },
                      { Col: [8, 2, 2, 2, 3, 3, 3] },
                      { Col: [0, 0, 4, 4, 4, 4, 3] },
                      { Col: [8, 4, 0, 3, 2, 2, 2] },
                      { Col: [1, 0, 0, 6, 6, 7, 6] },
                      { Col: [1, 2, 3, 5, 2, 6, 1] },
                      { Col: [3, 4, 4, 0, 1, 2, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 2, 1, 1, 0, 0, 0] },
                      { Col: [4, 32, 16, 2, 0, 0, 0] },
                      { Col: [4, 128, 128, 4, 8, 4, 4] },
                      { Col: [2, 32, 32, 32, 8, 8, 8] },
                      { Col: [8, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [0, 7, 8, 9, 10],
                        Symbol: 2,
                        Count: 5,
                        Win: 3.9,
                        Mult: 26,
                      },
                    ],
                    ComboTag: [
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [6, 6, 6, 0] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [0],
                    ComboStageWin: 3.9,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [8, 5, 0, 6, 4, 0, 5] },
                      { Col: [3, 3, 3, 6, 6, 6, 0] },
                      { Col: [0, 0, 4, 4, 4, 4, 3] },
                      { Col: [8, 4, 0, 3, 2, 2, 2] },
                      { Col: [1, 0, 0, 6, 6, 7, 6] },
                      { Col: [1, 2, 3, 5, 2, 6, 1] },
                      { Col: [3, 4, 4, 0, 1, 2, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 2, 1, 1, 0, 0, 0] },
                      { Col: [4, 32, 16, 2, 0, 0, 0] },
                      { Col: [4, 128, 128, 4, 8, 4, 4] },
                      { Col: [2, 32, 32, 32, 8, 8, 8] },
                      { Col: [8, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 423.1,
                FreeRemainRound: 1,
                FreeTotalRound: 10,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 3, 3, 0, 1, 2, 3] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                      { Col: [5, 5, 0, 1, 2, 3, 4] },
                      { Col: [5, 6, 6, 7, 6, 5, 4] },
                      { Col: [5, 6, 6, 7, 7, 0, 1] },
                      { Col: [3, 0, 1, 2, 3, 4, 5] },
                      { Col: [1, 2, 3, 4, 5, 6, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 2, 1, 1, 0, 0, 0] },
                      { Col: [4, 32, 16, 2, 0, 0, 0] },
                      { Col: [4, 128, 128, 4, 8, 4, 4] },
                      { Col: [2, 32, 32, 32, 8, 8, 8] },
                      { Col: [8, 4, 2, 32, 32, 32, 32] },
                      { Col: [0, 0, 0, 1, 1, 2, 4] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeTotalRound: 10,
                AwardTypeFlag: 12,
              },
            ],
            FreeTotalWin: 424.5,
            TotalWin: 424.5,
            RTP: 0.97,
          }),
          (FeaturesAck.TEST = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [4, 9, 5, 0, 7, 0, 0] },
                      { Col: [7, 7, 0, 7, 3, 3, 4] },
                      { Col: [1, 1, 4, 4, 0, 0, 3] },
                      { Col: [7, 6, 9, 3, 0, 6, 4] },
                      { Col: [9, 5, 0, 7, 0, 0, 2] },
                      { Col: [3, 7, 0, 7, 7, 2, 1] },
                      { Col: [1, 2, 5, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [18, 19, 25, 32, 33],
                        Count: 5,
                        Win: 0.3,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [3] },
                      { Col: [7] },
                      { Col: [7, 2] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [19],
                    ComboStageWin: 0.3,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [4, 9, 5, 0, 7, 0, 0] },
                      { Col: [7, 7, 0, 7, 3, 3, 4] },
                      { Col: [1, 1, 4, 4, 8, 3, 3] },
                      { Col: [7, 6, 9, 3, 6, 4, 7] },
                      { Col: [9, 5, 0, 7, 2, 7, 2] },
                      { Col: [3, 7, 0, 7, 7, 2, 1] },
                      { Col: [1, 2, 5, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 2, 2, 1] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [11, 12, 18, 19, 20],
                        Symbol: 3,
                        Count: 5,
                        Win: 1.2,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [3, 0] },
                      { Col: [0, 0] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [20],
                    ComboStageWin: 1.2,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [4, 9, 5, 0, 7, 0, 0] },
                      { Col: [7, 7, 0, 7, 4, 3, 0] },
                      { Col: [1, 1, 4, 4, 8, 0, 0] },
                      { Col: [7, 6, 9, 3, 6, 4, 7] },
                      { Col: [9, 5, 0, 7, 2, 7, 2] },
                      { Col: [3, 7, 0, 7, 7, 2, 1] },
                      { Col: [1, 2, 5, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 4, 4, 2] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [5, 6, 13, 18, 19, 20],
                        Count: 6,
                        Win: 2.4,
                        Mult: 4,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [9, 0] },
                      { Col: [7] },
                      { Col: [4, 3] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [20],
                    ComboStageWin: 2.4,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [4, 9, 5, 0, 7, 9, 0] },
                      { Col: [7, 7, 0, 7, 4, 3, 7] },
                      { Col: [1, 1, 4, 4, 8, 4, 3] },
                      { Col: [7, 6, 9, 3, 6, 4, 7] },
                      { Col: [9, 5, 0, 7, 2, 7, 2] },
                      { Col: [3, 7, 0, 7, 7, 2, 1] },
                      { Col: [1, 2, 5, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 2, 1, 1] },
                      { Col: [0, 0, 1, 1, 8, 8, 2] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [11, 16, 17, 18, 19, 26],
                        Symbol: 4,
                        Count: 6,
                        Win: 24,
                        Mult: 8,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [1] },
                      { Col: [0, 4, 6] },
                      { Col: [2] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [19],
                    ComboStageWin: 24,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [4, 9, 5, 0, 7, 9, 0] },
                      { Col: [7, 7, 0, 7, 3, 7, 1] },
                      { Col: [1, 1, 8, 3, 0, 4, 6] },
                      { Col: [7, 6, 9, 3, 6, 7, 2] },
                      { Col: [9, 5, 0, 7, 2, 7, 2] },
                      { Col: [3, 7, 0, 7, 7, 2, 1] },
                      { Col: [1, 2, 5, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 2, 1, 1] },
                      { Col: [0, 0, 1, 1, 8, 8, 2] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 27.9,
                ScatterCount: 4,
                FreeRemainRound: 12,
                FreeTotalRound: 12,
                AddRounds: 12,
                AwardTypeFlag: 3,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 4, 3, 5, 5, 2] },
                      { Col: [1, 6, 1, 1, 5, 4, 5] },
                      { Col: [1, 6, 1, 2, 2, 5, 2] },
                      { Col: [6, 5, 5, 2, 2, 4, 3] },
                      { Col: [0, 7, 7, 1, 1, 4, 0] },
                      { Col: [1, 1, 5, 3, 3, 3, 0] },
                      { Col: [1, 4, 4, 5, 5, 0, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 2, 1, 1] },
                      { Col: [0, 0, 1, 1, 8, 8, 2] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 11,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [5, 2, 2, 4, 3, 0, 0] },
                      { Col: [1, 4, 5, 5, 2, 2, 1] },
                      { Col: [2, 1, 6, 6, 5, 3, 0] },
                      { Col: [3, 2, 2, 6, 1, 6, 6] },
                      { Col: [5, 1, 2, 1, 6, 6, 5] },
                      { Col: [5, 5, 1, 7, 7, 7, 5] },
                      { Col: [7, 2, 0, 4, 4, 4, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 2, 1, 1] },
                      { Col: [0, 0, 1, 1, 8, 8, 2] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 10,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 2, 7, 2, 0, 4, 4] },
                      { Col: [6, 6, 0, 5, 1, 1, 2] },
                      { Col: [2, 6, 1, 6, 6, 3, 0] },
                      { Col: [7, 5, 1, 2, 1, 6, 6] },
                      { Col: [6, 0, 5, 1, 1, 2, 7] },
                      { Col: [6, 1, 6, 2, 2, 5, 2] },
                      { Col: [4, 4, 3, 4, 1, 9, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 2, 1, 1] },
                      { Col: [0, 0, 1, 1, 8, 8, 2] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                ScatterCount: 1,
                FreeRemainRound: 9,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                      { Col: [1, 1, 4, 4, 5, 5, 0] },
                      { Col: [2, 2, 4, 4, 3, 3, 5] },
                      { Col: [2, 2, 4, 3, 0, 0, 7] },
                      { Col: [1, 1, 7, 6, 3, 3, 0] },
                      { Col: [7, 7, 7, 5, 1, 2, 1] },
                      { Col: [6, 4, 7, 7, 1, 4, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 1, 1, 2, 1, 1] },
                      { Col: [0, 0, 2, 2, 8, 8, 2] },
                      { Col: [0, 0, 1, 0, 1, 1, 0] },
                      { Col: [0, 0, 1, 0, 1, 1, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [9, 10, 16, 17, 23],
                        Symbol: 4,
                        Count: 5,
                        Win: 1.5,
                        Mult: 1,
                      },
                      {
                        PosVec: [30, 35, 36, 37, 44, 45],
                        Symbol: 7,
                        Count: 6,
                        Win: 6,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [7] },
                      { Col: [2, 2] },
                      { Col: [1] },
                      { Col: [6] },
                      { Col: [1, 1] },
                      { Col: [0, 5] },
                    ],
                    WildPos: [9, 37],
                    ComboStageWin: 7.5,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                      { Col: [1, 1, 8, 5, 5, 0, 7] },
                      { Col: [2, 2, 3, 3, 5, 2, 2] },
                      { Col: [2, 2, 3, 0, 0, 7, 1] },
                      { Col: [1, 1, 6, 3, 3, 0, 6] },
                      { Col: [8, 5, 1, 2, 1, 1, 1] },
                      { Col: [6, 4, 1, 4, 0, 0, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 1, 1, 2, 1, 1] },
                      { Col: [0, 0, 2, 2, 8, 8, 2] },
                      { Col: [0, 0, 1, 0, 1, 1, 0] },
                      { Col: [0, 0, 1, 0, 1, 1, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 7.5,
                FreeRemainRound: 8,
                FreeTotalRound: 12,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 5, 4, 5, 5, 3] },
                      { Col: [5, 3, 3, 3, 0, 7, 1] },
                      { Col: [3, 3, 4, 3, 5, 5, 2] },
                      { Col: [2, 1, 0, 6, 5, 5, 2] },
                      { Col: [1, 6, 1, 1, 5, 4, 5] },
                      { Col: [6, 1, 1, 5, 4, 5, 5] },
                      { Col: [0, 7, 1, 1, 1, 5, 3] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 2, 2, 2, 1, 1] },
                      { Col: [1, 1, 2, 4, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [8, 9, 10, 14, 15, 17],
                        Symbol: 3,
                        Count: 6,
                        Win: 4.8,
                        Mult: 2,
                      },
                      {
                        PosVec: [18, 19, 25, 26, 32],
                        Symbol: 5,
                        Count: 5,
                        Win: 28.8,
                        Mult: 16,
                      },
                      {
                        PosVec: [30, 31, 36, 37, 44, 45, 46],
                        Symbol: 1,
                        Count: 7,
                        Win: 1.8,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                      { Col: [0, 0, 1, 1, 1, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [1, 6, 3] },
                      { Col: [2, 5, 6] },
                      { Col: [6, 6] },
                      { Col: [4, 0] },
                      { Col: [0, 0] },
                      { Col: [3, 5, 2] },
                    ],
                    WildPos: [15, 18, 31],
                    ComboStageWin: 35.4,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [1, 1, 5, 4, 5, 5, 3] },
                      { Col: [5, 0, 7, 1, 1, 6, 3] },
                      { Col: [8, 4, 8, 2, 2, 5, 6] },
                      { Col: [2, 1, 0, 6, 2, 6, 6] },
                      { Col: [1, 6, 8, 4, 5, 4, 0] },
                      { Col: [6, 5, 4, 5, 5, 0, 0] },
                      { Col: [0, 7, 5, 3, 3, 5, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 1, 2, 2, 2, 1, 1] },
                      { Col: [1, 1, 2, 4, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 35.4,
                FreeRemainRound: 7,
                FreeTotalRound: 12,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [0, 0, 7, 7, 2, 2, 3] },
                      { Col: [2, 2, 7, 5, 6, 6, 0] },
                      { Col: [1, 7, 7, 7, 5, 1, 2] },
                      { Col: [2, 1, 6, 1, 1, 5, 4] },
                      { Col: [1, 4, 4, 5, 5, 0, 0] },
                      { Col: [0, 6, 6, 6, 4, 0, 3] },
                      { Col: [2, 5, 0, 9, 2, 1, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [2, 3, 9, 15, 16, 17],
                        Symbol: 7,
                        Count: 6,
                        Win: 48,
                        Mult: 8,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 1, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [3] },
                      { Col: [5] },
                      { Col: [0, 3, 2] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [3],
                    ComboStageWin: 48,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [0, 0, 8, 2, 2, 3, 3] },
                      { Col: [2, 2, 5, 6, 6, 0, 5] },
                      { Col: [1, 5, 1, 2, 0, 3, 2] },
                      { Col: [2, 1, 6, 1, 1, 5, 4] },
                      { Col: [1, 4, 4, 5, 5, 0, 0] },
                      { Col: [0, 6, 6, 6, 4, 0, 3] },
                      { Col: [2, 5, 0, 9, 2, 1, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 48,
                ScatterCount: 1,
                FreeRemainRound: 6,
                FreeTotalRound: 12,
                AwardTypeFlag: 5,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [5, 3, 2, 3, 3, 7, 0] },
                      { Col: [6, 0, 5, 1, 1, 2, 7] },
                      { Col: [1, 2, 1, 6, 6, 5, 3] },
                      { Col: [7, 0, 7, 3, 3, 4, 3] },
                      { Col: [1, 1, 5, 4, 5, 5, 3] },
                      { Col: [4, 4, 3, 3, 0, 2, 2] },
                      { Col: [6, 5, 3, 0, 1, 7, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 5,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 5, 0, 1, 1, 4] },
                      { Col: [0, 0, 7, 7, 2, 2, 1] },
                      { Col: [3, 3, 4, 3, 5, 5, 2] },
                      { Col: [5, 0, 1, 1, 4, 5, 5] },
                      { Col: [3, 3, 6, 4, 7, 7, 1] },
                      { Col: [2, 7, 5, 6, 6, 0, 5] },
                      { Col: [3, 3, 4, 3, 5, 5, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 4,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [2, 4, 3, 0, 0, 7, 7] },
                      { Col: [1, 3, 3, 6, 4, 7, 7] },
                      { Col: [3, 6, 3, 1, 5, 5, 5] },
                      { Col: [1, 6, 0, 0, 0, 4, 2] },
                      { Col: [0, 7, 7, 2, 2, 3, 3] },
                      { Col: [2, 1, 6, 6, 5, 3, 0] },
                      { Col: [2, 4, 3, 0, 0, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 3,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [6, 2, 2, 5, 2, 4, 4] },
                      { Col: [0, 2, 2, 7, 5, 6, 6] },
                      { Col: [5, 1, 1, 2, 7, 2, 0] },
                      { Col: [2, 5, 0, 9, 2, 1, 6] },
                      { Col: [0, 4, 4, 4, 0, 6, 6] },
                      { Col: [0, 0, 7, 7, 2, 2, 1] },
                      { Col: [0, 4, 4, 4, 0, 6, 6] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                ScatterCount: 1,
                FreeRemainRound: 2,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 0, 7, 1, 1, 6, 1] },
                      { Col: [1, 4, 5, 5, 2, 2, 1] },
                      { Col: [3, 3, 4, 3, 5, 5, 2] },
                      { Col: [6, 1, 6, 6, 3, 0, 0] },
                      { Col: [4, 0, 0, 3, 6, 3, 1] },
                      { Col: [5, 3, 0, 1, 7, 4, 4] },
                      { Col: [5, 5, 5, 1, 7, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 2] },
                      { Col: [0, 0, 1, 0, 2, 2, 0] },
                      { Col: [0, 0, 2, 1, 2, 1, 0] },
                      { Col: [1, 2, 2, 0, 0, 0, 0] },
                      { Col: [0, 0, 2, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                FreeRemainRound: 1,
                FreeTotalRound: 12,
                AwardTypeFlag: 4,
              },
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [7, 2, 1, 1, 4, 4, 5] },
                      { Col: [2, 1, 3, 3, 6, 4, 7] },
                      { Col: [0, 7, 7, 1, 1, 4, 0] },
                      { Col: [1, 9, 3, 0, 7, 0, 0] },
                      { Col: [1, 1, 2, 5, 0, 0, 7] },
                      { Col: [1, 1, 6, 6, 3, 3, 0] },
                      { Col: [7, 1, 1, 6, 1, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 0, 1, 1] },
                      { Col: [0, 1, 4, 2, 2, 1, 1] },
                      { Col: [1, 2, 4, 8, 16, 16, 4] },
                      { Col: [1, 0, 1, 0, 2, 4, 1] },
                      { Col: [1, 1, 2, 1, 4, 2, 0] },
                      { Col: [2, 4, 2, 0, 0, 0, 0] },
                      { Col: [0, 1, 4, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [20, 27, 26, 33, 32],
                        Count: 5,
                        Win: 1.8,
                        Mult: 6,
                      },
                      {
                        PosVec: [21, 28, 35, 36, 29, 43, 44],
                        Symbol: 1,
                        Count: 7,
                        Win: 7.2,
                        Mult: 4,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [1, 0, 0, 0, 0, 1, 1] },
                      { Col: [1, 1, 0, 0, 1, 1, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 1, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [4] },
                      { Col: [3, 3] },
                      { Col: [7, 0, 1, 2] },
                      { Col: [6, 5] },
                      { Col: [7] },
                    ],
                    WildPos: [26, 43],
                    ComboStageWin: 9,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [7, 2, 1, 1, 4, 4, 5] },
                      { Col: [2, 1, 3, 3, 6, 4, 7] },
                      { Col: [0, 7, 7, 1, 1, 4, 4] },
                      { Col: [9, 3, 0, 7, 8, 3, 3] },
                      { Col: [2, 5, 7, 7, 0, 1, 2] },
                      { Col: [6, 6, 3, 3, 0, 6, 5] },
                      { Col: [7, 8, 6, 1, 7, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 1, 2, 1] },
                      { Col: [0, 1, 4, 2, 2, 2, 1] },
                      { Col: [1, 2, 4, 8, 16, 32, 8] },
                      { Col: [1, 0, 1, 0, 2, 4, 1] },
                      { Col: [1, 1, 2, 1, 4, 2, 0] },
                      { Col: [2, 4, 2, 0, 0, 0, 0] },
                      { Col: [0, 1, 4, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [4, 5, 12, 19, 20],
                        Symbol: 4,
                        Count: 5,
                        Win: 30,
                        Mult: 20,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 1, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 0] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [0] },
                      { Col: [1] },
                      { Col: [1, 2] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [5],
                    ComboStageWin: 30,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [7, 2, 1, 1, 8, 5, 0] },
                      { Col: [2, 1, 3, 3, 6, 7, 1] },
                      { Col: [0, 7, 7, 1, 1, 1, 2] },
                      { Col: [9, 3, 0, 7, 8, 3, 3] },
                      { Col: [2, 5, 7, 7, 0, 1, 2] },
                      { Col: [6, 6, 3, 3, 0, 6, 5] },
                      { Col: [7, 8, 6, 1, 7, 7, 7] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 1, 1, 1, 2, 1] },
                      { Col: [0, 1, 4, 2, 2, 2, 1] },
                      { Col: [1, 2, 4, 8, 16, 32, 8] },
                      { Col: [1, 0, 1, 0, 2, 4, 1] },
                      { Col: [1, 1, 2, 1, 4, 2, 0] },
                      { Col: [2, 4, 2, 0, 0, 0, 0] },
                      { Col: [0, 1, 4, 2, 1, 0, 0] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 39,
                ScatterCount: 1,
                FreeTotalRound: 12,
                AwardTypeFlag: 13,
              },
            ],
            FreeTotalWin: 129.9,
            TotalWin: 157.8,
            RTP: 0.97,
          }),
          (FeaturesAck.TEST2 = {
            RoundQueue: [
              {
                ComboStageData: [
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 6, 4, 7, 7, 1] },
                      { Col: [1, 1, 5, 3, 3, 3, 0] },
                      { Col: [2, 1, 1, 2, 3, 3, 0] },
                      { Col: [2, 1, 6, 0, 0, 7, 0] },
                      { Col: [7, 1, 1, 4, 4, 0, 0] },
                      { Col: [0, 3, 6, 3, 1, 5, 5] },
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 1, 1] },
                      { Col: [0, 1, 1, 0, 1, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 1] },
                      { Col: [0, 1, 1, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [7, 8, 15, 16, 22, 29, 30],
                        Symbol: 1,
                        Count: 7,
                        Win: 1.8,
                        Mult: 1,
                      },
                      {
                        PosVec: [10, 11, 12, 18, 19],
                        Symbol: 3,
                        Count: 5,
                        Win: 1.2,
                        Mult: 1,
                      },
                      {
                        PosVec: [13, 20, 27, 33, 34],
                        Count: 5,
                        Win: 0.3,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 1, 1] },
                      { Col: [0, 1, 1, 0, 1, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 1] },
                      { Col: [0, 1, 1, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [1, 1, 0, 5, 1, 1] },
                      { Col: [6, 6, 6] },
                      { Col: [2, 1] },
                      { Col: [3, 3, 0] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [30, 20, 19],
                    ComboStageWin: 3.3,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 6, 4, 7, 7, 1] },
                      { Col: [5, 1, 1, 0, 5, 1, 1] },
                      { Col: [2, 2, 8, 8, 6, 6, 6] },
                      { Col: [2, 6, 0, 0, 7, 2, 1] },
                      { Col: [7, 8, 4, 4, 3, 3, 0] },
                      { Col: [0, 3, 6, 3, 1, 5, 5] },
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 2, 1, 1, 1] },
                      { Col: [1, 2, 2, 1, 2, 2, 2] },
                      { Col: [1, 1, 1, 1, 0, 0, 1] },
                      { Col: [0, 1, 1, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [10, 16, 17, 23, 24],
                        Count: 5,
                        Win: 0.3,
                        Mult: 1,
                      },
                      {
                        PosVec: [14, 15, 16, 17, 21],
                        Symbol: 2,
                        Count: 5,
                        Win: 0.9,
                        Mult: 1,
                      },
                      {
                        PosVec: [16, 17, 18, 19, 20],
                        Symbol: 6,
                        Count: 5,
                        Win: 2.4,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 1] },
                      { Col: [1, 0, 1, 1, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [1] },
                      { Col: [0, 0, 0, 0, 4] },
                      { Col: [2, 6] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [14, 24, 20],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 6, 4, 7, 7, 1] },
                      { Col: [5, 1, 1, 5, 1, 1, 1] },
                      { Col: [8, 8, 0, 0, 0, 0, 4] },
                      { Col: [6, 8, 7, 2, 1, 2, 6] },
                      { Col: [7, 8, 4, 4, 3, 3, 0] },
                      { Col: [0, 3, 6, 3, 1, 5, 5] },
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [2, 2, 1, 2, 1, 1, 1] },
                      { Col: [2, 4, 4, 2, 4, 4, 2] },
                      { Col: [2, 2, 2, 1, 0, 0, 1] },
                      { Col: [1, 2, 2, 1, 0, 1, 1] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [7, 14, 15, 22, 29],
                        Symbol: 5,
                        Count: 5,
                        Win: 3.6,
                        Mult: 2,
                      },
                      {
                        PosVec: [8, 9, 14, 15, 22, 29],
                        Symbol: 1,
                        Count: 6,
                        Win: 2.4,
                        Mult: 2,
                      },
                      {
                        PosVec: [14, 15, 16, 17, 18, 19, 22, 29],
                        Count: 8,
                        Win: 14.4,
                        Mult: 8,
                      },
                      {
                        PosVec: [14, 15, 21, 22, 29],
                        Symbol: 6,
                        Count: 5,
                        Win: 4.8,
                        Mult: 2,
                      },
                      {
                        PosVec: [14, 15, 22, 23, 28, 29],
                        Symbol: 7,
                        Count: 6,
                        Win: 12,
                        Mult: 2,
                      },
                      {
                        PosVec: [14, 15, 22, 29, 30, 31],
                        Symbol: 4,
                        Count: 6,
                        Win: 6,
                        Mult: 2,
                      },
                      {
                        PosVec: [14, 15, 22, 29, 36],
                        Symbol: 3,
                        Count: 5,
                        Win: 2.4,
                        Mult: 2,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 1, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [7] },
                      { Col: [0, 0, 2, 3, 3] },
                      { Col: [1, 5] },
                      { Col: [2, 6] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [18, 21, 36, 7, 28, 31, 9],
                    ComboStageWin: 45.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [3, 3, 6, 4, 7, 7, 1] },
                      { Col: [8, 8, 5, 1, 1, 1, 7] },
                      { Col: [8, 4, 0, 0, 2, 3, 3] },
                      { Col: [8, 2, 1, 2, 6, 1, 5] },
                      { Col: [8, 8, 3, 3, 0, 2, 6] },
                      { Col: [0, 8, 6, 3, 1, 5, 5] },
                      { Col: [2, 2, 1, 3, 3, 6, 4] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [4, 4, 2, 2, 1, 1, 1] },
                      { Col: [4, 8, 4, 2, 4, 4, 2] },
                      { Col: [4, 4, 2, 1, 0, 0, 1] },
                      { Col: [2, 4, 4, 2, 0, 1, 1] },
                      { Col: [1, 2, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [
                          0, 1, 7, 8, 14, 21, 28, 29, 30, 31, 36, 38, 45, 46,
                        ],
                        Symbol: 3,
                        Count: 14,
                        Win: 288,
                        Mult: 12,
                      },
                      {
                        PosVec: [7, 8, 9, 14, 21, 28, 29, 36],
                        Symbol: 5,
                        Count: 8,
                        Win: 60,
                        Mult: 10,
                      },
                      {
                        PosVec: [7, 8, 14, 15, 21, 28, 29, 36],
                        Symbol: 4,
                        Count: 8,
                        Win: 63,
                        Mult: 14,
                      },
                      {
                        PosVec: [7, 8, 14, 21, 22, 28, 29, 36, 42, 43],
                        Symbol: 2,
                        Count: 10,
                        Win: 54,
                        Mult: 12,
                      },
                      {
                        PosVec: [7, 8, 14, 21, 28, 29, 35, 36],
                        Count: 8,
                        Win: 18,
                        Mult: 10,
                      },
                      {
                        PosVec: [7, 8, 14, 21, 28, 29, 36, 37],
                        Symbol: 6,
                        Count: 8,
                        Win: 90,
                        Mult: 10,
                      },
                    ],
                    ComboTag: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 1, 0, 1, 1, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [2, 0] },
                      { Col: [1, 6] },
                      { Col: [7] },
                      { Col: [4, 3] },
                      { Col: [6, 6, 3, 7] },
                      { Col: [4, 3] },
                      { Col: [1, 2] },
                    ],
                    WildPos: [15, 9, 37, 46, 43, 35],
                    ComboStageWin: 573,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [8, 1, 1, 1, 7, 1, 6] },
                      { Col: [8, 0, 0, 2, 3, 3, 7] },
                      { Col: [1, 2, 6, 1, 5, 4, 3] },
                      { Col: [0, 2, 6, 6, 6, 3, 7] },
                      { Col: [8, 8, 1, 5, 5, 4, 3] },
                      { Col: [8, 1, 8, 6, 4, 1, 2] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [8, 8, 4, 2, 4, 4, 2] },
                      { Col: [8, 8, 2, 1, 0, 0, 1] },
                      { Col: [2, 8, 4, 2, 0, 1, 1] },
                      { Col: [2, 4, 2, 1, 0, 0, 0] },
                      { Col: [2, 2, 1, 1, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [8, 7, 14, 21, 9, 10],
                        Symbol: 1,
                        Count: 6,
                        Win: 24,
                        Mult: 20,
                      },
                      {
                        PosVec: [22, 29, 36, 35, 42],
                        Symbol: 2,
                        Count: 5,
                        Win: 9,
                        Mult: 10,
                      },
                      {
                        PosVec: [37, 36, 35, 42, 43, 44],
                        Symbol: 1,
                        Count: 6,
                        Win: 2.4,
                        Mult: 2,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 0, 0, 0] },
                      { Col: [1, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [5, 6, 1, 1] },
                      { Col: [1] },
                      { Col: [4] },
                      { Col: [] },
                      { Col: [3, 0, 4] },
                      { Col: [1, 5, 0] },
                    ],
                    WildPos: [21, 29],
                    ComboStageWin: 35.4,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [7, 1, 6, 5, 6, 1, 1] },
                      { Col: [0, 0, 2, 3, 3, 7, 1] },
                      { Col: [8, 6, 1, 5, 4, 3, 4] },
                      { Col: [0, 8, 6, 6, 6, 3, 7] },
                      { Col: [5, 5, 4, 3, 3, 0, 4] },
                      { Col: [6, 4, 1, 2, 1, 5, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [16, 16, 4, 2, 4, 4, 2] },
                      { Col: [16, 16, 2, 1, 0, 0, 1] },
                      { Col: [4, 16, 8, 4, 1, 1, 1] },
                      { Col: [2, 4, 2, 1, 0, 0, 0] },
                      { Col: [2, 2, 1, 1, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [14, 21, 28, 29, 15],
                        Count: 5,
                        Win: 10.2,
                        Mult: 34,
                      },
                      {
                        PosVec: [22, 21, 29, 30, 31, 32],
                        Symbol: 6,
                        Count: 6,
                        Win: 135,
                        Mult: 30,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 1, 1, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [2, 7] },
                      { Col: [0, 0] },
                      { Col: [1, 4, 0] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [32, 28],
                    ComboStageWin: 145.2,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [7, 1, 6, 5, 6, 1, 1] },
                      { Col: [2, 3, 3, 7, 1, 2, 7] },
                      { Col: [1, 5, 4, 3, 4, 0, 0] },
                      { Col: [8, 8, 3, 7, 1, 4, 0] },
                      { Col: [5, 5, 4, 3, 3, 0, 4] },
                      { Col: [6, 4, 1, 2, 1, 5, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [16, 16, 4, 2, 4, 4, 2] },
                      { Col: [16, 32, 2, 1, 0, 0, 1] },
                      { Col: [8, 32, 8, 4, 1, 1, 1] },
                      { Col: [4, 8, 2, 1, 0, 0, 0] },
                      { Col: [2, 2, 1, 1, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [22, 29, 28, 35, 36],
                        Symbol: 5,
                        Count: 5,
                        Win: 75.6,
                        Mult: 42,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [4] },
                      { Col: [4, 4] },
                      { Col: [4] },
                      { Col: [] },
                    ],
                    WildPos: [36],
                    ComboStageWin: 75.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [7, 1, 6, 5, 6, 1, 1] },
                      { Col: [2, 3, 3, 7, 1, 2, 7] },
                      { Col: [1, 4, 3, 4, 0, 0, 4] },
                      { Col: [3, 7, 1, 4, 0, 4, 4] },
                      { Col: [8, 4, 3, 3, 0, 4, 4] },
                      { Col: [6, 4, 1, 2, 1, 5, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [16, 16, 4, 2, 4, 4, 2] },
                      { Col: [16, 32, 2, 1, 0, 0, 2] },
                      { Col: [8, 32, 8, 4, 1, 2, 2] },
                      { Col: [4, 8, 2, 1, 0, 1, 1] },
                      { Col: [2, 2, 1, 1, 1, 0, 0] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [27, 34, 33, 40, 41],
                        Symbol: 4,
                        Count: 5,
                        Win: 1.5,
                        Mult: 1,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [7, 1] },
                      { Col: [0, 0] },
                      { Col: [] },
                    ],
                    WildPos: [27],
                    ComboStageWin: 1.5,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [7, 1, 6, 5, 6, 1, 1] },
                      { Col: [2, 3, 3, 7, 1, 2, 7] },
                      { Col: [1, 4, 3, 4, 0, 0, 8] },
                      { Col: [3, 7, 1, 4, 0, 7, 1] },
                      { Col: [8, 4, 3, 3, 0, 0, 0] },
                      { Col: [6, 4, 1, 2, 1, 5, 0] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [16, 16, 4, 2, 4, 4, 2] },
                      { Col: [16, 32, 2, 1, 1, 1, 4] },
                      { Col: [8, 32, 8, 4, 2, 2, 2] },
                      { Col: [4, 8, 2, 1, 1, 2, 2] },
                      { Col: [2, 2, 1, 1, 1, 0, 1] },
                    ],
                    AwardDataVec: [
                      {
                        PosVec: [25, 32, 39, 40, 41, 48, 26, 27],
                        Count: 8,
                        Win: 3.6,
                        Mult: 2,
                      },
                    ],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 1, 0, 0] },
                      { Col: [0, 0, 0, 0, 1, 1, 1] },
                      { Col: [0, 0, 0, 0, 0, 0, 1] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [2, 4, 4] },
                      { Col: [] },
                      { Col: [2, 7, 7] },
                      { Col: [5] },
                    ],
                    WildPos: [32],
                    ComboStageWin: 3.6,
                    NeedEliminate: !0,
                  },
                  {
                    ComboStageSymbol: [
                      { Col: [6, 4, 7, 7, 1, 2, 0] },
                      { Col: [7, 1, 6, 5, 6, 1, 1] },
                      { Col: [2, 3, 3, 7, 1, 2, 7] },
                      { Col: [1, 4, 3, 4, 2, 4, 4] },
                      { Col: [3, 7, 1, 4, 8, 7, 1] },
                      { Col: [8, 4, 3, 3, 2, 7, 7] },
                      { Col: [6, 4, 1, 2, 1, 5, 5] },
                    ],
                    ComboStageMult: [
                      { Col: [1, 1, 0, 0, 0, 0, 0] },
                      { Col: [8, 8, 4, 4, 1, 1, 1] },
                      { Col: [16, 16, 4, 2, 4, 4, 2] },
                      { Col: [16, 32, 2, 1, 1, 1, 4] },
                      { Col: [8, 32, 8, 4, 2, 2, 2] },
                      { Col: [4, 8, 2, 1, 1, 2, 2] },
                      { Col: [2, 2, 1, 1, 1, 0, 1] },
                    ],
                    AwardDataVec: [],
                    ComboTag: [
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                      { Col: [0, 0, 0, 0, 0, 0, 0] },
                    ],
                    FillSymbols: [
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                      { Col: [] },
                    ],
                    WildPos: [],
                  },
                ],
                RoundWin: 886.8,
                AwardTypeFlag: 9,
              },
            ],
            TotalWin: 886.8,
            RTP: 0.97,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "74d70AiZJ5H/5jgL09wKdUQ", "GameIntro", void 0);
        var ccclass$6 = _decorator.ccclass,
          property$5 = _decorator.property,
          ANIMATION_NAME$2,
          EVENTNAME;
        !(function (e) {
          (e.GAMEINTRO_L = "GameIntro_L"), (e.GAMEINTRO_S = "GameIntro_S");
        })(ANIMATION_NAME$2 || (ANIMATION_NAME$2 = {})),
          (function (e) {
            e.MG_OPEN = "MG_Open";
          })(EVENTNAME || (EVENTNAME = {}));
        var GameIntro =
          ((_dec$6 = ccclass$6("GameIntro")),
          (_dec2$5 = property$5({ type: sp.Skeleton, tooltip: "動畫" })),
          _dec$6(
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
                    "m_gameIntro",
                    _descriptor$5,
                    _assertThisInitialized(t)
                  ),
                  (t.m_gameView = null),
                  (t.m_isPlay = !1),
                  t
                );
              }
              _inheritsLoose(t, e);
              var o = t.prototype;
              return (
                (o.Init = function (e) {
                  (this.m_gameView = e),
                    (this.node.active = !0),
                    (this.m_isPlay = !1);
                }),
                (o.ShowGameIntro = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e() {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (this.node.active = !0),
                                  (this.m_isPlay = !0),
                                  node$1.Play(
                                    Game_Define.AudioClips.Play_ready
                                  ),
                                  (e.next = 5),
                                  this.Play()
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
                (o.InitSpine = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o) {
                      return _regeneratorRuntime().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              SpineKit.PlayAnimation(t, o), (t.paused = !0);
                            case 2:
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
                (o.PlayAnimation = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e(t, o, n) {
                      return _regeneratorRuntime().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                void 0 === n && (n = !1),
                                (t.paused = !1),
                                (e.next = 4),
                                SpineKit.PlayAnimation(t, o, n, 0)
                              );
                            case 4:
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
                (o.Play = (function () {
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
                                    this.PlayAnimation(
                                      this.m_gameIntro,
                                      "" +
                                        (this.m_gameView.IsLandscape
                                          ? ANIMATION_NAME$2.GAMEINTRO_L
                                          : ANIMATION_NAME$2.GAMEINTRO_S)
                                    )
                                  ),
                                  (e.next = 4),
                                  Promise.all(t)
                                );
                              case 4:
                                this.node.active = !1;
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
                (o.Close = function () {
                  this.node.active = !1;
                }),
                (o.OnRotation = (function () {
                  var e = _asyncToGenerator(
                    _regeneratorRuntime().mark(function e() {
                      return _regeneratorRuntime().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                this.node.active &&
                                  !this.m_isPlay &&
                                  (log(this.m_gameView.IsLandscape),
                                  this.InitSpine(
                                    this.m_gameIntro,
                                    "" +
                                      (this.m_gameView.IsLandscape
                                        ? ANIMATION_NAME$2.GAMEINTRO_L
                                        : ANIMATION_NAME$2.GAMEINTRO_S)
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
                t
              );
            })(Component)),
            (_descriptor$5 = _applyDecoratedDescriptor(
              _class2$6.prototype,
              "m_gameIntro",
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
            (_class$6 = _class2$6))
          ) || _class$6);
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
          _cjsExports,
          __cjsMetaURL =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/long/src/long.js";
        loader.define(
          __cjsMetaURL,
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
                  : ((o = _(e, (0 | e) < 0 ? -1 : 0, !0)), i && (c[e] = o), o)
                : (i = -128 <= (e |= 0) && e < 128) && (n = l[e])
                ? n
                : ((o = _(e, e < 0 ? -1 : 0, !1)), i && (l[e] = o), o);
            }
            function m(e, t) {
              if (isNaN(e)) return t ? b : g;
              if (t) {
                if (e < 0) return b;
                if (e >= C) return A;
              } else {
                if (e <= -y) return T;
                if (e + 1 >= y) return $;
              }
              return e < 0 ? m(-e, t).neg() : _(e % h | 0, (e / h) | 0, t);
            }
            function _(e, t, o) {
              return new a(e, t, o);
            }
            (a.fromInt = u), (a.fromNumber = m), (a.fromBits = _);
            var p = Math.pow;
            function d(e, t, o) {
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
              if (0 === n) return d(e.substring(1), t, o).neg();
              for (var i = m(p(o, 8)), r = g, a = 0; a < e.length; a += 8) {
                var s = Math.min(8, e.length - a),
                  l = parseInt(e.substring(a, a + s), o);
                if (s < 8) {
                  var c = m(p(o, s));
                  r = r.mul(c).add(m(l));
                } else r = (r = r.mul(i)).add(m(l));
              }
              return (r.unsigned = t), r;
            }
            function f(e, t) {
              return "number" == typeof e
                ? m(e, t)
                : "string" == typeof e
                ? d(e, t)
                : _(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (a.fromString = d), (a.fromValue = f);
            var h = 4294967296,
              C = h * h,
              y = C / 2,
              S = u(1 << 24),
              g = u(0);
            a.ZERO = g;
            var b = u(0, !0);
            a.UZERO = b;
            var w = u(1);
            a.ONE = w;
            var v = u(1, !0);
            a.UONE = v;
            var E = u(-1);
            a.NEG_ONE = E;
            var $ = _(-1, 2147483647, !1);
            a.MAX_VALUE = $;
            var A = _(-1, -1, !0);
            a.MAX_UNSIGNED_VALUE = A;
            var T = _(0, -2147483648, !1);
            a.MIN_VALUE = T;
            var D = a.prototype;
            (D.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              (D.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * h + (this.low >>> 0)
                  : this.high * h + (this.low >>> 0);
              }),
              (D.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(T)) {
                    var t = m(e),
                      o = this.div(t),
                      n = o.mul(t).sub(this);
                    return o.toString(e) + n.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var i = m(p(e, 6), this.unsigned), r = this, a = ""; ; ) {
                  var s = r.div(i),
                    l = (r.sub(s.mul(i)).toInt() >>> 0).toString(e);
                  if ((r = s).isZero()) return l + a;
                  for (; l.length < 6; ) l = "0" + l;
                  a = "" + l + a;
                }
              }),
              (D.getHighBits = function () {
                return this.high;
              }),
              (D.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              (D.getLowBits = function () {
                return this.low;
              }),
              (D.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              (D.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(T) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              (D.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              (D.eqz = D.isZero),
              (D.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              (D.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              (D.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              (D.isEven = function () {
                return 0 == (1 & this.low);
              }),
              (D.equals = function (e) {
                return (
                  s(e) || (e = f(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              (D.eq = D.equals),
              (D.notEquals = function (e) {
                return !this.eq(e);
              }),
              (D.neq = D.notEquals),
              (D.ne = D.notEquals),
              (D.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              (D.lt = D.lessThan),
              (D.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              (D.lte = D.lessThanOrEqual),
              (D.le = D.lessThanOrEqual),
              (D.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              (D.gt = D.greaterThan),
              (D.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              (D.gte = D.greaterThanOrEqual),
              (D.ge = D.greaterThanOrEqual),
              (D.compare = function (e) {
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
              (D.comp = D.compare),
              (D.negate = function () {
                return !this.unsigned && this.eq(T) ? T : this.not().add(w);
              }),
              (D.neg = D.negate),
              (D.add = function (e) {
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
                  p = 0;
                return (
                  (m += (p += i + (65535 & e.low)) >>> 16),
                  (u += (m += n + l) >>> 16),
                  (c += (u += o + a) >>> 16),
                  (c += t + r),
                  _(
                    ((m &= 65535) << 16) | (p &= 65535),
                    ((c &= 65535) << 16) | (u &= 65535),
                    this.unsigned
                  )
                );
              }),
              (D.subtract = function (e) {
                return s(e) || (e = f(e)), this.add(e.neg());
              }),
              (D.sub = D.subtract),
              (D.multiply = function (e) {
                if (this.isZero()) return g;
                if ((s(e) || (e = f(e)), r))
                  return _(
                    r.mul(this.low, this.high, e.low, e.high),
                    r.get_high(),
                    this.unsigned
                  );
                if (e.isZero()) return g;
                if (this.eq(T)) return e.isOdd() ? T : g;
                if (e.eq(T)) return this.isOdd() ? T : g;
                if (this.isNegative())
                  return e.isNegative()
                    ? this.neg().mul(e.neg())
                    : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(S) && e.lt(S))
                  return m(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  o = 65535 & this.high,
                  n = this.low >>> 16,
                  i = 65535 & this.low,
                  a = e.high >>> 16,
                  l = 65535 & e.high,
                  c = e.low >>> 16,
                  u = 65535 & e.low,
                  p = 0,
                  d = 0,
                  h = 0,
                  C = 0;
                return (
                  (h += (C += i * u) >>> 16),
                  (d += (h += n * u) >>> 16),
                  (h &= 65535),
                  (d += (h += i * c) >>> 16),
                  (p += (d += o * u) >>> 16),
                  (d &= 65535),
                  (p += (d += n * c) >>> 16),
                  (d &= 65535),
                  (p += (d += i * l) >>> 16),
                  (p += t * u + o * c + n * l + i * a),
                  _(
                    ((h &= 65535) << 16) | (C &= 65535),
                    ((p &= 65535) << 16) | (d &= 65535),
                    this.unsigned
                  )
                );
              }),
              (D.mul = D.multiply),
              (D.divide = function (e) {
                if ((s(e) || (e = f(e)), e.isZero()))
                  throw Error("division by zero");
                var t, o, n;
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
                if (this.isZero()) return this.unsigned ? b : g;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return b;
                  if (e.gt(this.shru(1))) return v;
                  n = b;
                } else {
                  if (this.eq(T))
                    return e.eq(w) || e.eq(E)
                      ? T
                      : e.eq(T)
                      ? w
                      : (t = this.shr(1).div(e).shl(1)).eq(g)
                      ? e.isNegative()
                        ? w
                        : E
                      : ((o = this.sub(e.mul(t))), (n = t.add(o.div(e))));
                  if (e.eq(T)) return this.unsigned ? b : g;
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
                      a = i <= 48 ? 1 : p(2, i - 48),
                      l = m(t),
                      c = l.mul(e);
                    c.isNegative() || c.gt(o);

                  )
                    c = (l = m((t -= a), this.unsigned)).mul(e);
                  l.isZero() && (l = w), (n = n.add(l)), (o = o.sub(c));
                }
                return n;
              }),
              (D.div = D.divide),
              (D.modulo = function (e) {
                return (
                  s(e) || (e = f(e)),
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
              (D.mod = D.modulo),
              (D.rem = D.modulo),
              (D.not = function () {
                return _(~this.low, ~this.high, this.unsigned);
              }),
              (D.and = function (e) {
                return (
                  s(e) || (e = f(e)),
                  _(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              (D.or = function (e) {
                return (
                  s(e) || (e = f(e)),
                  _(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              (D.xor = function (e) {
                return (
                  s(e) || (e = f(e)),
                  _(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              (D.shiftLeft = function (e) {
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
              (D.shl = D.shiftLeft),
              (D.shiftRight = function (e) {
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
              (D.shr = D.shiftRight),
              (D.shiftRightUnsigned = function (e) {
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
              (D.shru = D.shiftRightUnsigned),
              (D.shr_u = D.shiftRightUnsigned),
              (D.toSigned = function () {
                return this.unsigned ? _(this.low, this.high, !1) : this;
              }),
              (D.toUnsigned = function () {
                return this.unsigned ? this : _(this.low, this.high, !0);
              }),
              (D.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              (D.toBytesLE = function () {
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
              (D.toBytesBE = function () {
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
              (_cjsExports = o.exports);
          },
          {}
        ),
          __cjsMetaURL ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL);
        var __cjsMetaURL$1 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL$1,
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
        var __cjsMetaURL$2 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
        loader.define(
          __cjsMetaURL$2,
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
        var __cjsMetaURL$3 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
        loader.define(
          __cjsMetaURL$3,
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
        var __cjsMetaURL$4 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
        loader.define(
          __cjsMetaURL$4,
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
        var __cjsMetaURL$5 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
        loader.define(
          __cjsMetaURL$6,
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
        var __cjsMetaURL$7 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$7,
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
        var __cjsMetaURL$8 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$8,
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
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$9 =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$9,
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$a,
          function (e, t, o, n, i) {
            o.exports = p;
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
            function f(e, t, o) {
              t[o] = 255 & e;
            }
            function h(e, t) {
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
            function y(e, t, o) {
              (t[o] = 255 & e),
                (t[o + 1] = (e >>> 8) & 255),
                (t[o + 2] = (e >>> 16) & 255),
                (t[o + 3] = e >>> 24);
            }
            (p.create = d()),
              (p.alloc = function (e) {
                return new a.Array(e);
              }),
              a.Array !== Array &&
                (p.alloc = a.pool(p.alloc, a.Array.prototype.subarray)),
              (p.prototype._push = function (e, t, o) {
                return (
                  (this.tail = this.tail.next = new u(e, t, o)),
                  (this.len += t),
                  this
                );
              }),
              (h.prototype = Object.create(u.prototype)),
              (h.prototype.fn = function (e, t, o) {
                for (; e > 127; ) (t[o++] = (127 & e) | 128), (e >>>= 7);
                t[o] = e;
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
                  ? this._push(C, 10, s.fromNumber(e))
                  : this.uint32(e);
              }),
              (p.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (p.prototype.uint64 = function (e) {
                var t = s.from(e);
                return this._push(C, t.length(), t);
              }),
              (p.prototype.int64 = p.prototype.uint64),
              (p.prototype.sint64 = function (e) {
                var t = s.from(e).zzEncode();
                return this._push(C, t.length(), t);
              }),
              (p.prototype.bool = function (e) {
                return this._push(f, 1, e ? 1 : 0);
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
            var S = a.Array.prototype.set
              ? function (e, t, o) {
                  t.set(e, o);
                }
              : function (e, t, o) {
                  for (var n = 0; n < e.length; ++n) t[o + n] = e[n];
                };
            (p.prototype.bytes = function (e) {
              var t = e.length >>> 0;
              if (!t) return this._push(f, 1, 0);
              if (a.isString(e)) {
                var o = p.alloc((t = l.length(e)));
                l.decode(e, o, 0), (e = o);
              }
              return this.uint32(t)._push(S, t, e);
            }),
              (p.prototype.string = function (e) {
                var t = c.length(e);
                return t
                  ? this.uint32(t)._push(c.write, t, e)
                  : this._push(f, 1, 0);
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
              (p.prototype.finish = function () {
                for (
                  var e = this.head.next,
                    t = this.constructor.alloc(this.len),
                    o = 0;
                  e;

                )
                  e.fn(e.val, t, o), (o += e.len), (e = e.next);
                return t;
              }),
              (p._configure = function (e) {
                (r = e), (p.create = d()), r._configure();
              }),
              o.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$b,
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
              "./writer": __cjsMetaURL$a,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$c =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$c,
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
            function f(e, t) {
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
                f(this.buf, (this.pos += 4)),
                f(this.buf, (this.pos += 4))
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
                    return h.call(this)[t](!0);
                  },
                  sfixed64: function () {
                    return h.call(this)[t](!1);
                  },
                });
              }),
              o.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$d =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$d,
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
              "./reader": __cjsMetaURL$c,
              "./util/minimal": __cjsMetaURL$9,
            };
          }
        );
        var __cjsMetaURL$e =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$e,
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
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
        loader.define(
          __cjsMetaURL$f,
          function (e, t, o, n, i) {
            (e.Service = t("./rpc/service")), o.exports;
          },
          function () {
            return { "./rpc/service": __cjsMetaURL$e };
          }
        );
        var __cjsMetaURL$g =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$g,
          function (e, t, o, n, i) {
            (o.exports = {}), o.exports;
          },
          {}
        );
        var __cjsMetaURL$h =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$h,
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
        loader.define(
          __cjsMetaURL$i,
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
        var __cjsMetaURL$j =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$j,
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
              "@protobufjs/aspromise": __cjsMetaURL$1,
              "@protobufjs/inquire": __cjsMetaURL$5,
            };
          }
        );
        var __cjsMetaURL$k =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$k,
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
        var __cjsMetaURL$l =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$l,
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
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$m =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$m,
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
              "./object": __cjsMetaURL$A,
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$n =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$n,
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
              "./object": __cjsMetaURL$A,
              "./field": __cjsMetaURL$m,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$o =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$o,
          function (e, t, o, n, i) {
            o.exports = p;
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
                for (var o = {}, n = 0; n < e.length; ++n)
                  o[e[n].name] = e[n].toJSON(t);
                return o;
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
                  for (var o = 0; o < e.length; ++o)
                    if ("string" != typeof e[o] && e[o][0] <= t && e[o][1] > t)
                      return !0;
                return !1;
              }),
              (p.isReservedName = function (e, t) {
                if (e)
                  for (var o = 0; o < e.length; ++o) if (e[o] === t) return !0;
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
                          : p.fromJSON)(o[n], t)
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
                    for (var o = t.nestedArray, n = 0; n < o.length; ++n)
                      e.add(o[n]);
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
                for (var o = this; e.length > 0; ) {
                  var n = e.shift();
                  if (o.nested && o.nested[n]) {
                    if (!((o = o.nested[n]) instanceof p))
                      throw Error("path conflicts with non-namespace objects");
                  } else o.add((o = new p(n)));
                }
                return t && o.addJSON(t), o;
              }),
              (p.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length; )
                  e[t] instanceof p ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve();
              }),
              (p.prototype.lookup = function (e, t, o) {
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
                    n instanceof p &&
                    (n = n.lookup(e.slice(1), t, !0))
                  )
                    return n;
                } else
                  for (var i = 0; i < this.nestedArray.length; ++i)
                    if (
                      this._nestedArray[i] instanceof p &&
                      (n = this._nestedArray[i].lookup(e, t, !0))
                    )
                      return n;
                return null === this.parent || o
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
              (p._configure = function (e, t, o) {
                (a = e), (s = t), (l = o);
              }),
              o.exports;
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$p,
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
              "./field": __cjsMetaURL$m,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$q =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$q,
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
            return { "./object": __cjsMetaURL$A, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$r =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$r,
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
              "./namespace": __cjsMetaURL$o,
              "./method": __cjsMetaURL$q,
              "./util": __cjsMetaURL$z,
              "./rpc": __cjsMetaURL$f,
            };
          }
        );
        var __cjsMetaURL$s =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$s,
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
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$t,
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
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$u =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$u,
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
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$v =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$v,
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
                      var _ =
                        "[" +
                        Array.prototype.slice.call(u.typeDefault).join(",") +
                        "]";
                      o(
                        "if(o.bytes===String)d%s=%j",
                        m,
                        String.fromCharCode.apply(String, u.typeDefault)
                      )("else{")("d%s=%s", m, _)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        m,
                        m
                      )("}");
                    } else o("d%s=%j", m, u.typeDefault);
                  }
                  o("}");
                }
                var p = !1;
                for (l = 0; l < t.length; ++l) {
                  u = t[l];
                  var d = e._fieldsArray.indexOf(u);
                  m = s.safeProp(u.name);
                  u.map
                    ? (p || ((p = !0), o("var ks2")),
                      o(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        m,
                        m
                      )(
                        "d%s={}",
                        m
                      )("for(var j=0;j<ks2.length;++j){"),
                      c(o, u, d, m + "[ks2[j]]")("}"))
                    : u.repeated
                    ? (o("if(m%s&&m%s.length){", m, m)("d%s=[]", m)(
                        "for(var j=0;j<m%s.length;++j){",
                        m
                      ),
                      c(o, u, d, m + "[j]")("}"))
                    : (o("if(m%s!=null&&m.hasOwnProperty(%j)){", m, u.name),
                      c(o, u, d, m),
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
            return { "./enum": __cjsMetaURL$B, "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$w =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$w,
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
            return { "./message": __cjsMetaURL$s };
          }
        );
        var __cjsMetaURL$x =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$x,
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
              _ = t("./reader"),
              p = t("./writer"),
              d = t("./util"),
              f = t("./encoder"),
              h = t("./decoder"),
              C = t("./verifier"),
              y = t("./converter"),
              S = t("./wrappers");
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
                    this._ctor || (this.ctor = g.generateConstructor(this)())
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
                  for (var o = 0; o < this.fieldsArray.length; ++o)
                    this._fieldsArray[o].resolve();
                  var n = {};
                  for (o = 0; o < this.oneofsArray.length; ++o)
                    n[this._oneofsArray[o].resolve().name] = {
                      get: d.oneOfGetter(this._oneofsArray[o].oneof),
                      set: d.oneOfSetter(this._oneofsArray[o].oneof),
                    };
                  o && Object.defineProperties(e.prototype, n);
                },
              },
            }),
              (g.generateConstructor = function (e) {
                for (
                  var t, o = d.codegen(["p"], e.name), n = 0;
                  n < e.fieldsArray.length;
                  ++n
                )
                  (t = e._fieldsArray[n]).map
                    ? o("this%s={}", d.safeProp(t.name))
                    : t.repeated && o("this%s=[]", d.safeProp(t.name));
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
                (this.encode = f(this)({ Writer: p, types: t, util: d })),
                  (this.decode = h(this)({ Reader: _, types: t, util: d })),
                  (this.verify = C(this)({ types: t, util: d })),
                  (this.fromObject = y.fromObject(this)({ types: t, util: d })),
                  (this.toObject = y.toObject(this)({ types: t, util: d }));
                var n = S[e];
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
                  e instanceof _ || (e = _.create(e)),
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
                  d.decorateType(t, e);
                };
              }),
              o.exports;
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, o, n, i) {
            o.exports = p;
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
              (p.prototype.load = function e(t, o, n) {
                "function" == typeof o && ((n = o), (o = void 0));
                var i = this;
                if (!n) return _.asPromise(e, i, t, o);
                var r = n === d;
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
                      (_.isString(t) &&
                        "{" === t.charAt(0) &&
                        (t = JSON.parse(t)),
                      _.isString(t))
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
                  r || p || a(null, i);
                }
                function m(e, t) {
                  if (!(i.files.indexOf(e) > -1))
                    if ((i.files.push(e), e in l))
                      r
                        ? u(e, l[e])
                        : (++p,
                          setTimeout(function () {
                            --p, u(e, l[e]);
                          }));
                    else if (r) {
                      var o;
                      try {
                        o = _.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || a(e));
                      }
                      u(e, o);
                    } else
                      ++p,
                        i.fetch(e, function (o, r) {
                          --p,
                            n && (o ? (t ? p || a(null, i) : a(o)) : u(e, r));
                        });
                }
                var p = 0;
                _.isString(t) && (t = [t]);
                for (var f, h = 0; h < t.length; ++h)
                  (f = i.resolvePath("", t[h])) && m(f);
                if (r) return i;
                p || a(null, i);
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
            var f = /^[A-Z]/;
            function h(e, t) {
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
            (p.prototype._handleAdd = function (e) {
              if (e instanceof c)
                void 0 === e.extend ||
                  e.extensionField ||
                  h(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof u)
                f.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof m)) {
                if (e instanceof a)
                  for (var t = 0; t < this.deferred.length; )
                    h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var o = 0; o < e.nestedArray.length; ++o)
                  this._handleAdd(e._nestedArray[o]);
                f.test(e.name) && (e.parent[e.name] = e);
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
                  f.test(e.name) && delete e.parent[e.name];
                else if (e instanceof r) {
                  for (var o = 0; o < e.nestedArray.length; ++o)
                    this._handleRemove(e._nestedArray[o]);
                  f.test(e.name) && delete e.parent[e.name];
                }
              }),
              (p._configure = function (e, t, o) {
                (a = e), (s = t), (l = o);
              }),
              o.exports;
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$z,
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
            var _ = 0;
            (s.decorateEnum = function (e) {
              if (e.$type) return e.$type;
              a || (a = t("./enum"));
              var o = new a("Enum" + _++, e);
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$A,
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
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$B,
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
              "./object": __cjsMetaURL$A,
              "./namespace": __cjsMetaURL$o,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$C =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$C,
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
                  _ = a.basic[m];
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
                      void 0 === _
                        ? o(
                            "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                            u,
                            t
                          )
                        : o(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _, m, t),
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
                          void 0 === _
                            ? l(o, c, u, t + "[i]")
                            : o(
                                "w.uint32(%i).%s(%s[i])",
                                ((c.id << 3) | _) >>> 0,
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
                      void 0 === _
                        ? l(o, c, u, t)
                        : o(
                            "w.uint32(%i).%s(%s)",
                            ((c.id << 3) | _) >>> 0,
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
              "./enum": __cjsMetaURL$B,
              "./types": __cjsMetaURL$l,
              "./util": __cjsMetaURL$z,
            };
          }
        );
        var __cjsMetaURL$D =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
        loader.define(
          __cjsMetaURL$D,
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$E,
          function (e, t, o, n, i) {
            o.exports = f;
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
            function f(e, t) {
              e = e.toString();
              var o = 0,
                n = e.length,
                i = 1,
                _ = null,
                p = null,
                f = 0,
                h = !1,
                C = !1,
                y = [],
                S = null;
              function g(e) {
                return Error("illegal " + e + " (line " + i + ")");
              }
              function b(t) {
                return e.charAt(t);
              }
              function w(o, n, r) {
                (_ = e.charAt(o++)), (f = i), (h = !1), (C = r);
                var a,
                  s = o - (t ? 2 : 3);
                do {
                  if (--s < 0 || "\n" === (a = e.charAt(s))) {
                    h = !0;
                    break;
                  }
                } while (" " === a || "\t" === a);
                for (
                  var m = e.substring(o, n).split(u), d = 0;
                  d < m.length;
                  ++d
                )
                  m[d] = m[d].replace(t ? c : l, "").trim();
                p = m.join("\n").trim();
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
              function $() {
                if (y.length > 0) return y.shift();
                if (S)
                  return (function () {
                    var t = "'" === S ? s : a;
                    t.lastIndex = o - 1;
                    var n = t.exec(e);
                    if (!n) throw g("string");
                    return (o = t.lastIndex), A(S), (S = null), d(n[1]);
                  })();
                var l,
                  c,
                  u,
                  _,
                  p,
                  f = 0 === o;
                do {
                  if (o === n) return null;
                  for (l = !1; m.test((u = b(o))); )
                    if (("\n" === u && ((f = !0), ++i), ++o === n)) return null;
                  if ("/" === b(o)) {
                    if (++o === n) throw g("comment");
                    if ("/" === b(o))
                      if (t) {
                        if (((_ = o), (p = !1), v(o))) {
                          p = !0;
                          do {
                            if ((o = E(o)) === n) break;
                            o++;
                          } while (v(o));
                        } else o = Math.min(n, E(o) + 1);
                        p && w(_, o, f), i++, (l = !0);
                      } else {
                        for (p = "/" === b((_ = o + 1)); "\n" !== b(++o); )
                          if (o === n) return null;
                        ++o, p && w(_, o - 1, f), ++i, (l = !0);
                      }
                    else {
                      if ("*" !== (u = b(o))) return "/";
                      (_ = o + 1), (p = t || "*" === b(_));
                      do {
                        if (("\n" === u && ++i, ++o === n)) throw g("comment");
                        (c = u), (u = b(o));
                      } while ("*" !== c || "/" !== u);
                      ++o, p && w(_, o - 2, f), (l = !0);
                    }
                  }
                } while (l);
                var h = o;
                if (((r.lastIndex = 0), !r.test(b(h++))))
                  for (; h < n && !r.test(b(h)); ) ++h;
                var C = e.substring(o, (o = h));
                return ('"' !== C && "'" !== C) || (S = C), C;
              }
              function A(e) {
                y.push(e);
              }
              function T() {
                if (!y.length) {
                  var e = $();
                  if (null === e) return null;
                  A(e);
                }
                return y[0];
              }
              return Object.defineProperty(
                {
                  next: $,
                  peek: T,
                  push: A,
                  skip: function (e, t) {
                    var o = T();
                    if (o === e) return $(), !0;
                    if (!t) throw g("token '" + o + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var o = null;
                    return (
                      void 0 === e
                        ? f === i - 1 &&
                          (t || "*" === _ || h) &&
                          (o = C ? p : null)
                        : (f < e && T(),
                          f !== e ||
                            h ||
                            (!t && "/" !== _) ||
                            (o = C ? null : p)),
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
            (f.unescape = d), o.exports;
          },
          {}
        );
        var __cjsMetaURL$F =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, o, n, i) {
            (o.exports = A),
              (A.filename = null),
              (A.defaults = { keepCase: !1 });
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
              f = t("./util"),
              h = /^[1-9][0-9]*$/,
              C = /^-?[1-9][0-9]*$/,
              y = /^0[x][0-9a-fA-F]+$/,
              S = /^-?0[x][0-9a-fA-F]+$/,
              g = /^0[0-7]+$/,
              b = /^-?0[0-7]+$/,
              w = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              v = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              E =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              $ = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function A(e, t, o) {
              t instanceof a || ((o = t), (t = new a())), o || (o = A.defaults);
              var n,
                i,
                T,
                D,
                R,
                N = o.preferTrailingComment || !1,
                I = r(e, o.alternateCommentMode || !1),
                O = I.next,
                L = I.push,
                M = I.peek,
                P = I.skip,
                G = I.cmnt,
                W = !0,
                F = !1,
                k = t,
                x = o.keepCase
                  ? function (e) {
                      return e;
                    }
                  : f.camelCase;
              function V(e, t, o) {
                var n = A.filename;
                return (
                  o || (A.filename = null),
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
              function j() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = O()) && "'" !== e) throw V(e);
                  t.push(O()), P(e), (e = M());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function U(e) {
                var t = O();
                switch (t) {
                  case "'":
                  case '"':
                    return L(t), j();
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
                    if (h.test(e)) return o * parseInt(e, 10);
                    if (y.test(e)) return o * parseInt(e, 16);
                    if (g.test(e)) return o * parseInt(e, 8);
                    if (w.test(e)) return o * parseFloat(e);
                    throw V(e, "number", t);
                  })(t, !0);
                } catch (o) {
                  if (e && E.test(t)) return t;
                  throw V(t, "value");
                }
              }
              function B(e, t) {
                var o, n;
                do {
                  !t || ('"' !== (o = M()) && "'" !== o)
                    ? e.push([(n = z(O())), P("to", !0) ? z(O()) : n])
                    : e.push(j());
                } while (P(",", !0));
                P(";");
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
                if (!t && "-" === e.charAt(0)) throw V(e, "id");
                if (C.test(e)) return parseInt(e, 10);
                if (S.test(e)) return parseInt(e, 16);
                if (b.test(e)) return parseInt(e, 8);
                throw V(e, "id");
              }
              function H() {
                if (void 0 !== n) throw V("package");
                if (((n = O()), !E.test(n))) throw V(n, "name");
                (k = k.define(n)), P(";");
              }
              function Y() {
                var e,
                  t = M();
                switch (t) {
                  case "weak":
                    (e = T || (T = [])), O();
                    break;
                  case "public":
                    O();
                  default:
                    e = i || (i = []);
                }
                (t = j()), P(";"), e.push(t);
              }
              function q() {
                if (
                  (P("="), (D = j()), !(F = "proto3" === D) && "proto2" !== D)
                )
                  throw V(D, "syntax");
                P(";");
              }
              function Z(e, t) {
                switch (t) {
                  case "option":
                    return J(e, t), P(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!v.test((t = O()))) throw V(t, "type name");
                        var o = new s(t);
                        K(o, function (e) {
                          if (!Z(o, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  P("<");
                                  var t = O();
                                  if (void 0 === d.mapKey[t])
                                    throw V(t, "type");
                                  P(",");
                                  var o = O();
                                  if (!E.test(o)) throw V(o, "type");
                                  P(">");
                                  var n = O();
                                  if (!v.test(n)) throw V(n, "name");
                                  P("=");
                                  var i = new c(x(n), z(O()), t, o);
                                  K(
                                    i,
                                    function (e) {
                                      if ("option" !== e) throw V(e);
                                      J(i, e), P(";");
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
                                X(o, e);
                                break;
                              case "optional":
                                X(o, F ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!v.test((t = O()))) throw V(t, "name");
                                  var o = new u(x(t));
                                  K(o, function (e) {
                                    "option" === e
                                      ? (J(o, e), P(";"))
                                      : (L(e), X(o, "optional"));
                                  }),
                                    e.add(o);
                                })(o, e);
                                break;
                              case "extensions":
                                B(o.extensions || (o.extensions = []));
                                break;
                              case "reserved":
                                B(o.reserved || (o.reserved = []), !0);
                                break;
                              default:
                                if (!F || !E.test(e)) throw V(e);
                                L(e), X(o, "optional");
                            }
                        }),
                          e.add(o);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!v.test((t = O()))) throw V(t, "name");
                        var o = new m(t);
                        K(o, function (e) {
                          switch (e) {
                            case "option":
                              J(o, e), P(";");
                              break;
                            case "reserved":
                              B(o.reserved || (o.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!v.test(t)) throw V(t, "name");
                                P("=");
                                var o = z(O(), !0),
                                  n = {};
                                K(
                                  n,
                                  function (e) {
                                    if ("option" !== e) throw V(e);
                                    J(n, e), P(";");
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
                        if (!v.test((t = O()))) throw V(t, "service name");
                        var o = new _(t);
                        K(o, function (e) {
                          if (!Z(o, e)) {
                            if ("rpc" !== e) throw V(e);
                            !(function (e, t) {
                              var o = G(),
                                n = t;
                              if (!v.test((t = O()))) throw V(t, "name");
                              var i,
                                r,
                                a,
                                s,
                                l = t;
                              P("("), P("stream", !0) && (r = !0);
                              if (!E.test((t = O()))) throw V(t);
                              (i = t),
                                P(")"),
                                P("returns"),
                                P("("),
                                P("stream", !0) && (s = !0);
                              if (!E.test((t = O()))) throw V(t);
                              (a = t), P(")");
                              var c = new p(l, n, i, a, r, s);
                              (c.comment = o),
                                K(c, function (e) {
                                  if ("option" !== e) throw V(e);
                                  J(c, e), P(";");
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
                        if (!E.test((t = O()))) throw V(t, "reference");
                        var o = t;
                        K(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              X(e, t, o);
                              break;
                            case "optional":
                              X(e, F ? "proto3_optional" : "optional", o);
                              break;
                            default:
                              if (!F || !E.test(t)) throw V(t);
                              L(t), X(e, "optional", o);
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
                    ("string" != typeof e.comment && (e.comment = G()),
                    (e.filename = A.filename)),
                  P("{", !0))
                ) {
                  for (var i; "}" !== (i = O()); ) t(i);
                  P(";", !0);
                } else
                  o && o(),
                    P(";"),
                    e &&
                      ("string" != typeof e.comment || N) &&
                      (e.comment = G(n) || e.comment);
              }
              function X(e, t, o) {
                var n = O();
                if ("group" !== n) {
                  if (!E.test(n)) throw V(n, "type");
                  var i = O();
                  if (!v.test(i)) throw V(i, "name");
                  (i = x(i)), P("=");
                  var r = new l(i, z(O()), n, t, o);
                  if (
                    (K(
                      r,
                      function (e) {
                        if ("option" !== e) throw V(e);
                        J(r, e), P(";");
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
                  F ||
                    !r.repeated ||
                    (void 0 === d.packed[n] && void 0 !== d.basic[n]) ||
                    r.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var o = O();
                    if (!v.test(o)) throw V(o, "name");
                    var n = f.lcFirst(o);
                    o === n && (o = f.ucFirst(o));
                    P("=");
                    var i = z(O()),
                      r = new s(o);
                    r.group = !0;
                    var a = new l(n, i, o, t);
                    (a.filename = A.filename),
                      K(r, function (e) {
                        switch (e) {
                          case "option":
                            J(r, e), P(";");
                            break;
                          case "required":
                          case "repeated":
                            X(r, e);
                            break;
                          case "optional":
                            X(r, F ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw V(e);
                        }
                      }),
                      e.add(r).add(a);
                  })(e, t);
              }
              function J(e, t) {
                var o = P("(", !0);
                if (!E.test((t = O()))) throw V(t, "name");
                var n,
                  i = t,
                  r = i;
                o &&
                  (P(")"),
                  (r = i = "(" + i + ")"),
                  (t = M()),
                  $.test(t) && ((n = t.substr(1)), (i += t), O())),
                  P("="),
                  (function (e, t, o, n) {
                    e.setParsedOption && e.setParsedOption(t, o, n);
                  })(e, r, Q(e, i), n);
              }
              function Q(e, t) {
                if (P("{", !0)) {
                  for (var o = {}; !P("}", !0); ) {
                    if (!v.test((R = O()))) throw V(R, "name");
                    var n,
                      i = R;
                    "{" === M()
                      ? (n = Q(e, t + "." + R))
                      : (P(":"),
                        "{" === M()
                          ? (n = Q(e, t + "." + R))
                          : ((n = U(!0)), ee(e, t + "." + R, n)));
                    var r = o[i];
                    r && (n = [].concat(r).concat(n)), (o[i] = n), P(",", !0);
                  }
                  return o;
                }
                var a = U(!0);
                return ee(e, t, a), a;
              }
              function ee(e, t, o) {
                e.setOption && e.setOption(t, o);
              }
              function te(e) {
                if (P("[", !0)) {
                  do {
                    J(e, "option");
                  } while (P(",", !0));
                  P("]");
                }
                return e;
              }
              for (; null !== (R = O()); )
                switch (R) {
                  case "package":
                    if (!W) throw V(R);
                    H();
                    break;
                  case "import":
                    if (!W) throw V(R);
                    Y();
                    break;
                  case "syntax":
                    if (!W) throw V(R);
                    q();
                    break;
                  case "option":
                    J(k, R), P(";");
                    break;
                  default:
                    if (Z(k, R)) {
                      W = !1;
                      continue;
                    }
                    throw V(R);
                }
              return (
                (A.filename = null),
                { package: n, imports: i, weakImports: T, syntax: D, root: t }
              );
            }
            o.exports;
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
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$G,
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
        var __cjsMetaURL$H =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
          _cjsExports$1;
        loader.define(
          __cjsMetaURL$H,
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
              "./index-light": __cjsMetaURL$D,
              "./tokenize": __cjsMetaURL$E,
              "./parse": __cjsMetaURL$F,
              "./common": __cjsMetaURL$G,
            };
          }
        );
        var __cjsMetaURL$I =
          "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/index.js";
        loader.define(
          __cjsMetaURL$I,
          function (e, t, o, n, i) {
            (o.exports = t("./src/index")), (_cjsExports$1 = o.exports);
          },
          function () {
            return { "./src/index": __cjsMetaURL$H };
          }
        ),
          __cjsMetaURL$I ||
            loader.throwInvalidWrapper(
              "./index.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$I);
        var __cjsMetaURL$J =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
          _cjsExports$2;
        loader.define(
          __cjsMetaURL$J,
          function (e, t, o, n, i) {
            (o.exports = t("./src/index-minimal")), o.exports;
          },
          function () {
            return { "./src/index-minimal": __cjsMetaURL$h };
          }
        );
        var __cjsMetaURL$K =
            "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/assets/game/Script/Proto/smgProto.js",
          _dec$7,
          _class$7;
        loader.define(
          __cjsMetaURL$K,
          function (e, t, o, n, i) {
            var r,
              a = t("protobufjs/minimal"),
              s = a.Reader,
              l = a.Writer,
              c = a.util,
              u = a.roots.default || (a.roots.default = {});
            (u.smgProto =
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
                        n = new u.smgProto.Column();
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
                      e + "/smgProto.Column"
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
                  (e.prototype.Win = 0),
                  (e.prototype.Mult = 0),
                  (e.prototype.PosVec = c.emptyArray),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.Count &&
                        Object.hasOwnProperty.call(e, "Count") &&
                        t.uint32(16).int32(e.Count),
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(25).double(e.Win),
                      null != e.Mult &&
                        Object.hasOwnProperty.call(e, "Mult") &&
                        t.uint32(33).double(e.Mult),
                      null != e.PosVec && e.PosVec.length)
                    ) {
                      t.uint32(42).fork();
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
                        n = new u.smgProto.AwardData();
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
                          n.Win = e.double();
                          break;
                        case 4:
                          n.Mult = e.double();
                          break;
                        case 5:
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
                      e + "/smgProto.AwardData"
                    );
                  }),
                  e
                );
              })()),
              (r.ComboStageInfo = (function () {
                function e(e) {
                  if (
                    ((this.ComboStageSymbol = []),
                    (this.ComboStageMult = []),
                    (this.AwardDataVec = []),
                    (this.ComboTag = []),
                    (this.FillSymbols = []),
                    (this.WildPos = []),
                    e)
                  )
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ComboStageSymbol = c.emptyArray),
                  (e.prototype.ComboStageMult = c.emptyArray),
                  (e.prototype.ComboStageWin = 0),
                  (e.prototype.AwardDataVec = c.emptyArray),
                  (e.prototype.NeedEliminate = !1),
                  (e.prototype.ComboTag = c.emptyArray),
                  (e.prototype.FillSymbols = c.emptyArray),
                  (e.prototype.WildPos = c.emptyArray),
                  (e.prototype.MaxFlag = !1),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageSymbol && e.ComboStageSymbol.length)
                    )
                      for (var o = 0; o < e.ComboStageSymbol.length; ++o)
                        u.smgProto.Column.encode(
                          e.ComboStageSymbol[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (null != e.ComboStageMult && e.ComboStageMult.length)
                      for (o = 0; o < e.ComboStageMult.length; ++o)
                        u.smgProto.Column.encode(
                          e.ComboStageMult[o],
                          t.uint32(18).fork()
                        ).ldelim();
                    if (
                      (null != e.ComboStageWin &&
                        Object.hasOwnProperty.call(e, "ComboStageWin") &&
                        t.uint32(25).double(e.ComboStageWin),
                      null != e.AwardDataVec && e.AwardDataVec.length)
                    )
                      for (o = 0; o < e.AwardDataVec.length; ++o)
                        u.smgProto.AwardData.encode(
                          e.AwardDataVec[o],
                          t.uint32(34).fork()
                        ).ldelim();
                    if (
                      (null != e.NeedEliminate &&
                        Object.hasOwnProperty.call(e, "NeedEliminate") &&
                        t.uint32(40).bool(e.NeedEliminate),
                      null != e.ComboTag && e.ComboTag.length)
                    )
                      for (o = 0; o < e.ComboTag.length; ++o)
                        u.smgProto.Column.encode(
                          e.ComboTag[o],
                          t.uint32(50).fork()
                        ).ldelim();
                    if (null != e.FillSymbols && e.FillSymbols.length)
                      for (o = 0; o < e.FillSymbols.length; ++o)
                        u.smgProto.Column.encode(
                          e.FillSymbols[o],
                          t.uint32(58).fork()
                        ).ldelim();
                    if (null != e.WildPos && e.WildPos.length) {
                      for (
                        t.uint32(66).fork(), o = 0;
                        o < e.WildPos.length;
                        ++o
                      )
                        t.int32(e.WildPos[o]);
                      t.ldelim();
                    }
                    return (
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(72).bool(e.MaxFlag),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.smgProto.ComboStageInfo();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.ComboStageSymbol && n.ComboStageSymbol.length) ||
                            (n.ComboStageSymbol = []),
                            n.ComboStageSymbol.push(
                              u.smgProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          (n.ComboStageMult && n.ComboStageMult.length) ||
                            (n.ComboStageMult = []),
                            n.ComboStageMult.push(
                              u.smgProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          n.ComboStageWin = e.double();
                          break;
                        case 4:
                          (n.AwardDataVec && n.AwardDataVec.length) ||
                            (n.AwardDataVec = []),
                            n.AwardDataVec.push(
                              u.smgProto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 5:
                          n.NeedEliminate = e.bool();
                          break;
                        case 6:
                          (n.ComboTag && n.ComboTag.length) ||
                            (n.ComboTag = []),
                            n.ComboTag.push(
                              u.smgProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 7:
                          (n.FillSymbols && n.FillSymbols.length) ||
                            (n.FillSymbols = []),
                            n.FillSymbols.push(
                              u.smgProto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 8:
                          if (
                            ((n.WildPos && n.WildPos.length) ||
                              (n.WildPos = []),
                            2 == (7 & i))
                          )
                            for (var r = e.uint32() + e.pos; e.pos < r; )
                              n.WildPos.push(e.int32());
                          else n.WildPos.push(e.int32());
                          break;
                        case 9:
                          n.MaxFlag = e.bool();
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
                      e + "/smgProto.ComboStageInfo"
                    );
                  }),
                  e
                );
              })()),
              (r.RoundInfo = (function () {
                function e(e) {
                  if (((this.ComboStageData = []), e))
                    for (var t = Object.keys(e), o = 0; o < t.length; ++o)
                      null != e[t[o]] && (this[t[o]] = e[t[o]]);
                }
                return (
                  (e.prototype.ComboStageData = c.emptyArray),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.ScatterCount = 0),
                  (e.prototype.FreeRemainRound = 0),
                  (e.prototype.FreeTotalRound = 0),
                  (e.prototype.AddRounds = 0),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.prototype.MaxFlag = !1),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.ComboStageData && e.ComboStageData.length)
                    )
                      for (var o = 0; o < e.ComboStageData.length; ++o)
                        u.smgProto.ComboStageInfo.encode(
                          e.ComboStageData[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(17).double(e.RoundWin),
                      null != e.ScatterCount &&
                        Object.hasOwnProperty.call(e, "ScatterCount") &&
                        t.uint32(24).int32(e.ScatterCount),
                      null != e.FreeRemainRound &&
                        Object.hasOwnProperty.call(e, "FreeRemainRound") &&
                        t.uint32(32).int32(e.FreeRemainRound),
                      null != e.FreeTotalRound &&
                        Object.hasOwnProperty.call(e, "FreeTotalRound") &&
                        t.uint32(40).int32(e.FreeTotalRound),
                      null != e.AddRounds &&
                        Object.hasOwnProperty.call(e, "AddRounds") &&
                        t.uint32(48).int32(e.AddRounds),
                      null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(56).int32(e.AwardTypeFlag),
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(64).bool(e.MaxFlag),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.smgProto.RoundInfo();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.ComboStageData && n.ComboStageData.length) ||
                            (n.ComboStageData = []),
                            n.ComboStageData.push(
                              u.smgProto.ComboStageInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.RoundWin = e.double();
                          break;
                        case 3:
                          n.ScatterCount = e.int32();
                          break;
                        case 4:
                          n.FreeRemainRound = e.int32();
                          break;
                        case 5:
                          n.FreeTotalRound = e.int32();
                          break;
                        case 6:
                          n.AddRounds = e.int32();
                          break;
                        case 7:
                          n.AwardTypeFlag = e.int32();
                          break;
                        case 8:
                          n.MaxFlag = e.bool();
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
                      e + "/smgProto.RoundInfo"
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
                  (e.prototype.TotalWin = 0),
                  (e.prototype.RTP = 0),
                  (e.prototype.LID = 0),
                  (e.prototype.RID = 0),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = l.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var o = 0; o < e.RoundQueue.length; ++o)
                        u.smgProto.RoundInfo.encode(
                          e.RoundQueue[o],
                          t.uint32(10).fork()
                        ).ldelim();
                    return (
                      null != e.FreeTotalWin &&
                        Object.hasOwnProperty.call(e, "FreeTotalWin") &&
                        t.uint32(17).double(e.FreeTotalWin),
                      null != e.TotalWin &&
                        Object.hasOwnProperty.call(e, "TotalWin") &&
                        t.uint32(25).double(e.TotalWin),
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(33).double(e.RTP),
                      null != e.LID &&
                        Object.hasOwnProperty.call(e, "LID") &&
                        t.uint32(40).int32(e.LID),
                      null != e.RID &&
                        Object.hasOwnProperty.call(e, "RID") &&
                        t.uint32(48).int32(e.RID),
                      t
                    );
                  }),
                  (e.decode = function (e, t) {
                    e instanceof s || (e = s.create(e));
                    for (
                      var o = void 0 === t ? e.len : e.pos + t,
                        n = new u.smgProto.SpinAck();
                      e.pos < o;

                    ) {
                      var i = e.uint32();
                      switch (i >>> 3) {
                        case 1:
                          (n.RoundQueue && n.RoundQueue.length) ||
                            (n.RoundQueue = []),
                            n.RoundQueue.push(
                              u.smgProto.RoundInfo.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          n.FreeTotalWin = e.double();
                          break;
                        case 3:
                          n.TotalWin = e.double();
                          break;
                        case 4:
                          n.RTP = e.double();
                          break;
                        case 5:
                          n.LID = e.int32();
                          break;
                        case 6:
                          n.RID = e.int32();
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
                      e + "/smgProto.SpinAck"
                    );
                  }),
                  e
                );
              })()),
              r)),
              (o.exports = u),
              (_cjsExports$2 = o.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$J };
          }
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./smgProto.js",
              "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/SweetMagic/Client/Thai_UAT/assets/game/Script/Proto/smgProto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push({}, "87fd85BLJ5Hy6tWwBq5cWCk", "IdleState", void 0);
        var ccclass$7 = _decorator.ccclass,
          IdleState =
            ((_dec$7 = ccclass$7("IdleState")),
            _dec$7(
              (_class$7 = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_gameView = t),
                    o
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Enter = function () {
                    this.m_gameView.Character.PlayIdle(),
                      this.m_gameView.EffectPlate.ClearScatterEffects();
                  }),
                  t
                );
              })(Common_IdleState))
            ) || _class$7),
          _dec$8,
          _class$8;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2e840BSeLZMp5r5IIF9quBv",
            "WaitResState",
            void 0
          );
        var ccclass$8 = _decorator.ccclass,
          WaitResState =
            ((_dec$8 = ccclass$8("WaitResState")),
            _dec$8(
              (_class$8 = (function (e) {
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
                    log("game state WAIT_RES"),
                      this.m_gameView.ChangeDemoPlateByRatio(),
                      node.FeaturesDemoInit(
                        function (t) {
                          log("demo select", t), e.m_gameView.PlayDemo(t);
                        },
                        this.m_gameView.RealFeaturesSpinAck.length,
                        node.FindBetIndexByValue(Game_Define.DemoBet),
                        function () {
                          e.m_gameView.IsAutoShowFeatures &&
                            ((e.m_gameView.IsAutoShowFeatures = !1),
                            node$5.NextState(Game_Define.GameState.WAIT_READY));
                        }
                      );
                  }),
                  (o.OnProcess = function () {
                    node.IsFeaturesDemoLoaded() &&
                      node$5.NextState(Game_Define.GameState.WAIT_READY);
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$8),
          _dec$9,
          _class$9;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "4b9e9ahBdxIK7i/5eDkLiwU",
            "WaitReadyState",
            void 0
          );
        var ccclass$9 = _decorator.ccclass,
          WaitReadyState =
            ((_dec$9 = ccclass$9("WaitReadyState")),
            _dec$9(
              (_class$9 = (function (e) {
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
                      node.ShowGameScene(),
                      node.ShowPlayReady(),
                      node.SetBarNodeVisiable(!1),
                      (this.m_gameView.GameIntro.getComponent(
                        UIOpacity
                      ).opacity = SymbolColor.L),
                      this.m_gameView.GameBg.ShowMg(),
                      node$6.LoadingComplete();
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$9),
          _dec$a,
          _class$a;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "56dbf2r3opOM5BaU7ILjedj",
            "PlateShowState",
            void 0
          );
        var ccclass$a = _decorator.ccclass,
          PlateShowState =
            ((_dec$a = ccclass$a("PlateShowState")),
            _dec$a(
              (_class$a = (function (e) {
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
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state PLATE_SHOW"),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (this.m_gameView.IsLock = !0),
                                    (e.next = 5),
                                    this.m_gameView.GameIntro.ShowGameIntro()
                                  );
                                case 5:
                                  this.m_gameView.ChangeBgMusic(
                                    Game_Define.AudioClips.BGM_MG
                                  ),
                                    node$1.SetVolume(
                                      this.m_gameView.BgAudioId,
                                      0
                                    ),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.IN
                                    ),
                                    (this.m_gameView.IsLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    node.SetSpinState(SlotBottomBarState.IDLE),
                                    node$4.FreeSpinRemain > 0
                                      ? node$5.NextState(
                                          CommonState.CHECK_FREESPIN
                                        )
                                      : node$5.NextState(CommonState.IDLE),
                                    node$7.StartAutoShow(),
                                    node.SetBarNodeVisiable(
                                      !0,
                                      Game_Define.Time.SetBarNodeVisiable
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
            ) || _class$a),
          _dec$b,
          _class$b;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e5c95Na6TpMGZT4gLbiP4d2", "SpinState", void 0);
        var ccclass$b = _decorator.ccclass,
          SpinState =
            ((_dec$b = ccclass$b("SpinState")),
            _dec$b(
              (_class$b = (function (e) {
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
                                  log("game state SPIN"),
                                    node$8.StartSpin(),
                                    node$1.GetVolume(
                                      this.m_gameView.BgAudioId
                                    ) < 1 &&
                                      this.m_gameView.ChangeFadeType(
                                        FADE_TYPE.IN
                                      ),
                                    Tween.stopAllByTarget(this.m_gameView.node),
                                    this.m_gameView.Character.PlayIdle(),
                                    this.m_gameView.EffectPlate.ClearScatterEffects(),
                                    (Game_Define.IsNearWin = !1),
                                    Game_Define.IsInFG
                                      ? (node$9.HasUnshow &&
                                          (node$9.HasUnshow = !1),
                                        Game_Define.Round++,
                                        (Game_Define.PlateIdx = 0),
                                        (t =
                                          this.m_gameView.SpinAck.RoundQueue[
                                            Game_Define.Round
                                          ]),
                                        (o =
                                          t.ComboStageData[
                                            Game_Define.PlateIdx
                                          ]),
                                        this.m_gameView.SlotReels.StartSpin(),
                                        this.m_gameView.SlotReels.SetPlateInfo(
                                          o.ComboStageSymbol
                                        ),
                                        this.m_gameView.FgCounterSpine.ShowFgSpinHit(),
                                        node.IsAutoSpin ||
                                          node.SetSpinState(
                                            SlotBottomBarState.CLICK_STOP
                                          ))
                                      : node$a.IsFeaturesDemoMode
                                      ? this.m_gameView.StartSpin()
                                      : (this.m_gameView.StartSpin(),
                                        node$9.HasUnshow &&
                                          (this.m_gameView.OnRecvSpinAck(
                                            this.m_gameView.UnshowSpinAck
                                          ),
                                          (node$9.HasUnshow = !1),
                                          (this.m_gameView.UnshowSpinAck =
                                            null)));
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
                  (o.OnProcess = function () {
                    this.m_gameView.SlotReels.IsStop
                      ? node$5.NextState(Game_Define.GameState.EXPLODE)
                      : this.m_gameView.SlotReels.IsWait &&
                        null !== this.m_gameView.SlotReels.Plate &&
                        this.m_gameView.SlotReels.ShowNewPlate();
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$b),
          _dec$c,
          _class$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f31b15D15NHEYvfNb7hQbcG",
            "ExplodeState",
            void 0
          );
        var ccclass$c = _decorator.ccclass,
          ExplodeState =
            ((_dec$c = ccclass$c("ExplodeState")),
            _dec$c(
              (_class$c = (function (e) {
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
                    log("game state EXPLODE"),
                      (this.m_gameView.IsLock = !1),
                      this.m_gameView.IsChange && this.m_gameView.OnRotation();
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[Game_Define.Round]
                          .ComboStageData[Game_Define.PlateIdx],
                      o = t.MaxFlag;
                    if (
                      this.m_gameView.SlotReels.CheckPlate(t.ComboStageSymbol)
                    )
                      if (o)
                        node$b.ShowMessageBox(
                          node$4.StringKey.MSGBOX_MAX_REWARD,
                          node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          _asyncToGenerator(
                            _regeneratorRuntime().mark(function t() {
                              return _regeneratorRuntime().wrap(function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      (Game_Define.TotalWin =
                                        e.m_gameView.SpinAck.TotalWin),
                                        node.SetWinValue(Game_Define.TotalWin),
                                        node$5.NextState(
                                          Game_Define.GameState.AWARD
                                        );
                                    case 3:
                                    case "end":
                                      return t.stop();
                                  }
                              }, t);
                            })
                          )
                        );
                      else if (t.NeedEliminate) {
                        Game_Define.TotalWin = node$2.plus(
                          Game_Define.TotalWin,
                          t.ComboStageWin
                        );
                        var n = t.ComboStageWin ? t.ComboStageWin : 0;
                        this.m_gameView.SlotReels.ShowExplode(
                          n,
                          t.ComboStageSymbol,
                          t.ComboStageMult,
                          t.AwardDataVec,
                          t.WildPos
                        ).then(function () {
                          node$5.NextState(
                            Game_Define.GameState.MATCHING_PATCH_UP
                          );
                        });
                      } else
                        node$5.NextState(
                          Game_Define.GameState.MATCHING_PATCH_UP
                        );
                    else
                      node$b.ShowMessageBox(
                        node$4.StringKey.MSGBOX_CONNECT_FAIL,
                        node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                        node$2.CloseGameTab,
                        node$2.GetErrorCode(
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
            ) || _class$c),
          _dec$d,
          _class$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c351a+MBBFIuq+11sa9TLGw",
            "MatchPatchingUpState",
            void 0
          );
        var ccclass$d = _decorator.ccclass,
          MatchPatchingUpState =
            ((_dec$d = ccclass$d("MatchPatchingUpState")),
            _dec$d(
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
                    log("game state MatchPatchingUpState");
                    var e =
                        this.m_gameView.SpinAck.RoundQueue[Game_Define.Round],
                      t = e.ComboStageData[Game_Define.PlateIdx],
                      o = e.ScatterCount ? e.ScatterCount : 0;
                    if (
                      (!this.m_gameView.EffectPlate.CheckMult(
                        t.ComboStageMult
                      ) &&
                        t.NeedEliminate &&
                        node$b.ShowMessageBox(
                          node$4.StringKey.MSGBOX_CONNECT_FAIL,
                          node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          node$2.CloseGameTab,
                          node$2.GetErrorCode(
                            node$4.ErrorStatus.Game,
                            node$4.ClientErrorCode.PlateError
                          )
                        ),
                      Game_Define.PlateIdx + 1 < e.ComboStageData.length)
                    ) {
                      var n = t.FillSymbols;
                      this.m_gameView.SlotReels.ShowMatchAndPatchUp(n).then(
                        function () {
                          Game_Define.PlateIdx++,
                            node$5.NextState(Game_Define.GameState.EXPLODE);
                        }
                      );
                    } else
                      o <= (Game_Define.IsInFG ? 1 : 2) &&
                        this.m_gameView.EffectPlate.ClearScatterEffects(),
                        node$5.NextState(Game_Define.GameState.AWARD);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$d),
          _dec$e,
          _class$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "83cc1Gohu5PdYAOEws+dVhw",
            "RoundShowEndState",
            void 0
          );
        var ccclass$e = _decorator.ccclass,
          RoundShowEndState =
            ((_dec$e = ccclass$e("RoundShowEndState")),
            _dec$e(
              (_class$e = (function (e) {
                function t() {
                  return e.call(this) || this;
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.OnEnter = function () {
                    log("game state ROUND_SHOW_END"),
                      node$5.NextState(CommonState.COMMON_SHOW);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$e),
          _dec$f,
          _class$f;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b6d9bMp/sNB3apxY305MNOG",
            "RoundEndState",
            void 0
          );
        var ccclass$f = _decorator.ccclass,
          RoundEndState =
            ((_dec$f = ccclass$f("RoundEndState")),
            _dec$f(
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
                    log("game state ROUND_END"),
                      (Game_Define.PlateIdx = 0),
                      this.m_gameView.RetryRoundEnd();
                  }),
                  (o.OnProcess = function () {
                    node$8.CanToNextRound() &&
                      (!node$9.IsTwice ||
                        (node$9.IsTwice && node$9.IsGetRoundEndAck)) &&
                      (Game_Define.IsInFG &&
                      (Game_Define.Round > 0 || node.IsAutoSpin)
                        ? node$5.NextState(CommonState.SPIN)
                        : Game_Define.IsInFG
                        ? node$5.NextState(CommonState.IDLE)
                        : node$5.NextState(CommonState.END));
                  }),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$f),
          _dec$g,
          _class$g;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "87237t885pMYL/tGH66zxcX",
            "CheckState",
            void 0
          );
        var ccclass$g = _decorator.ccclass,
          CheckState =
            ((_dec$g = ccclass$g("CheckState")),
            _dec$g(
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
                    log("game state CHECK_STATE"),
                      this.m_gameView.SpinAck.RoundQueue.length > 1 &&
                      !Game_Define.IsInFG
                        ? node$5.NextState(Game_Define.GameState.ENTER_FREE)
                        : Game_Define.IsInFG &&
                          Game_Define.Round ===
                            node$2.minus(
                              this.m_gameView.SpinAck.RoundQueue.length,
                              1
                            )
                        ? node$5.NextState(Game_Define.GameState.LEAVE_FREE)
                        : this.m_gameView.SpinAck.RoundQueue[Game_Define.Round]
                            .AddRounds &&
                          this.m_gameView.SpinAck.RoundQueue[Game_Define.Round]
                            .AddRounds > 0
                        ? node$5.NextState(Game_Define.GameState.ADD_FREE)
                        : node$5.NextState(Game_Define.GameState.ROUND_END);
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$g),
          _dec$h,
          _class$h;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a9a60DwTMhFF58WPO+5ZyAb",
            "EnterFreeState",
            void 0
          );
        var ccclass$h = _decorator.ccclass,
          EnterFreeState =
            ((_dec$h = ccclass$h("EnterFreeState")),
            _dec$h(
              (_class$h = (function (e) {
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
                                    log("game state ENTER_FREE"),
                                    this.m_gameView.MemoryLog("Enter"),
                                    (Game_Define.IsInFG = !0),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.Round
                                      ]),
                                    (o =
                                      t.ComboStageData[Game_Define.PlateIdx]),
                                    (n = o.ComboStageSymbol),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !0
                                    ),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !0
                                    ),
                                    this.m_gameView.Character.PlayScatterWin(),
                                    (e.next = 12),
                                    this.m_gameView.EffectPlate.PlayScatterWin(
                                      n
                                    )
                                  );
                                case 12:
                                  return (
                                    this.m_gameView.ManualComponent.CloseManul(),
                                    (i = t.AddRounds),
                                    (this.m_gameView.IsLock = !0),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT,
                                      Game_Define.AudioClips.BGM_FG
                                    ),
                                    (e.next = 18),
                                    this.m_gameView.Declare.ShowDeclare(
                                      Number(i)
                                    )
                                  );
                                case 18:
                                  return (
                                    this.m_gameView.GameBg.ShowTransformToFg(
                                      Number(i)
                                    ),
                                    this.m_gameView.EffectPlate.ClearScatterEffects(),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !1
                                    ),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !1
                                    ),
                                    this.m_gameView.Character.PlayScatterWinEnd(),
                                    (e.next = 25),
                                    this.m_gameView.Declare.ShowDeclareEnd()
                                  );
                                case 25:
                                  node.SetEnterFree(),
                                    this.m_gameView.AutoplayInfos &&
                                      this.m_gameView.AutoplayInfos
                                        .isCheckFree &&
                                      node.ShowAutoPlayState(!1),
                                    (this.m_gameView.IsLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    this.m_gameView.MemoryLog("End"),
                                    node$5.NextState(
                                      Game_Define.GameState.ROUND_END
                                    );
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
                    return function () {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$h),
          _dec$i,
          _class$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "059b2DJx6tMTJw2KNugZPwb",
            "LeaveFreeState",
            void 0
          );
        var ccclass$i = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$i = ccclass$i("LeaveFreeState")),
            _dec$i(
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
                  (o.OnEnter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    log("game state LEAVE_FREE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.Round
                                      ]),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (this.m_gameView.IsLock = !0),
                                    (Game_Define.IsInFG = !1),
                                    this.m_gameView.Character.PlayBigWinStart(),
                                    (e.next = 8),
                                    this.m_gameView.ComplimentSpine.ShowCompliment(
                                      Game_Define.TotalWin,
                                      t.FreeTotalRound
                                    )
                                  );
                                case 8:
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.ComplimentSpine.ShowComplimentEnd()
                                  );
                                case 10:
                                  this.m_gameView.ChangeFadeType(
                                    FADE_TYPE.OUT,
                                    Game_Define.AudioClips.BGM_MG
                                  ),
                                    (this.m_gameView.IsLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    node.SetLeaveFree(),
                                    node.LockBetEnable(!0),
                                    node$5.NextState(
                                      Game_Define.GameState.ROUND_END
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
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$i),
          _dec$j,
          _class$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "2bfcdsoef1BEJBn2laQnnSa",
            "AwardState",
            void 0
          );
        var BigWinSkinName = { DEFAULT: "default" },
          BetRate = { No: 0, L: 2, M: 4, H: 6 },
          ccclass$j = _decorator.ccclass,
          AwardState =
            ((_dec$j = ccclass$j("AwardState")),
            _dec$j(
              (_class$j = (function (e) {
                function t(t) {
                  var o;
                  return (
                    ((o = e.call(this) || this).m_gameView = null),
                    (o.m_isSmallWinRunning = !1),
                    (o.m_lvl = Game_Define.Level.NONE),
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
                        var t, o, n, i, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (log("game state AWARD"),
                                    (this.m_lvl = Game_Define.Level.NONE),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.Round
                                      ]),
                                    !((o = t.RoundWin) > 0))
                                  ) {
                                    e.next = 38;
                                    break;
                                  }
                                  (n = node.GetNowBetValue()),
                                    (i = node$2.divide(o, n)),
                                    (this.m_gameView.BigWin.IsEnd = !0),
                                    (r = Game_Define.AWARD_SETTING.length - 1);
                                case 9:
                                  if (!(r >= 0)) {
                                    e.next = 16;
                                    break;
                                  }
                                  if (
                                    !(i >= Game_Define.AWARD_SETTING[r].BetRate)
                                  ) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (this.m_lvl =
                                      Game_Define.AWARD_SETTING[r].Lvl),
                                    e.abrupt("break", 16)
                                  );
                                case 13:
                                  r--, (e.next = 9);
                                  break;
                                case 16:
                                  if (this.m_lvl == Game_Define.Level.NONE) {
                                    e.next = 26;
                                    break;
                                  }
                                  (this.m_gameView.IsLock = !0),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT
                                    ),
                                    (this.m_gameView.BigWin.node.active = !0),
                                    this.m_gameView.BigWin.SetSkin(
                                      BigWinSkinName.DEFAULT
                                    ),
                                    this.m_gameView.BigWin.Show(o, this.m_lvl),
                                    node.SetSpinState(
                                      SlotBottomBarState.GET_AWARD_NO_AUTO
                                    ),
                                    this.m_gameView.Character.PlayBigWinStart(),
                                    (e.next = 36);
                                  break;
                                case 26:
                                  return (
                                    (this.m_gameView.BigWin.IsEnd = !0),
                                    (this.m_isSmallWinRunning = !0),
                                    (!node$2.CheckSwitchOff(
                                      SwitchOffKeyDefine.NoSoundUnder1
                                    ) ||
                                      (node$2.CheckSwitchOff(
                                        SwitchOffKeyDefine.NoSoundUnder1
                                      ) &&
                                        i > 1)) &&
                                      (i > BetRate.No && i <= BetRate.L
                                        ? node$1.Play(
                                            Game_Define.AudioClips.Small_win_01
                                          )
                                        : i > BetRate.L && i <= BetRate.M
                                        ? node$1.Play(
                                            Game_Define.AudioClips.Small_win_02
                                          )
                                        : i > BetRate.M &&
                                          i <
                                            Game_Define.AWARD_SETTING[0]
                                              .BetRate &&
                                          node$1.Play(
                                            Game_Define.AudioClips.Small_win_03
                                          ),
                                      i > BetRate.M &&
                                        this.m_gameView.Character.PlayWin()),
                                    (e.next = 31),
                                    this.m_gameView.Win.ShowStart(o.toString())
                                  );
                                case 31:
                                  return (
                                    (e.next = 33),
                                    node$4.Wait(
                                      this.m_gameView,
                                      Game_Define.Time.WaitWin
                                    )
                                  );
                                case 33:
                                  return (
                                    (e.next = 35), this.m_gameView.Win.ShowEnd()
                                  );
                                case 35:
                                  this.m_isSmallWinRunning = !1;
                                case 36:
                                  e.next = 40;
                                  break;
                                case 38:
                                  (this.m_gameView.BigWin.IsEnd = !0),
                                    (this.m_isSmallWinRunning = !1);
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
                  (o.OnProcess = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.m_gameView.BigWin.IsEnd &&
                                    !this.m_isSmallWinRunning &&
                                    ((this.m_gameView.IsLock = !1),
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.IN
                                    ),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    this.m_lvl != Game_Define.Level.NONE &&
                                      this.m_gameView.Character.PlayIdle(),
                                    (this.m_gameView.BigWin.node.active = !1),
                                    node$5.NextState(
                                      Game_Define.GameState.ROUND_SHOW_END
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
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$j),
          _dec$k,
          _class$k;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "dbc28dhAytBrY+W7xLXgYU5",
            "UnshowPerpareState",
            void 0
          );
        var ccclass$k = _decorator.ccclass,
          UnshowPerpareState =
            ((_dec$k = ccclass$k("UnshowPerpareState")),
            _dec$k(
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
                      (log("Game_Define.GAMEVIEW_STATE.UNSHOW_PERPARE"),
                      this.m_gameView.UnshowSpinAck)
                    ) {
                      if (
                        (node.SetBarNodeVisiable(!0),
                        node.SetNetBet(node.GetNowBetValue()),
                        this.m_gameView.GameIntro.Close(),
                        (Game_Define.TotalWin = 0),
                        node$9.UnshowStartRound >= 1)
                      ) {
                        this.m_gameView.ChangeBgMusic(
                          Game_Define.AudioClips.BGM_FG
                        ),
                          (Game_Define.IsInFG = !0),
                          (Game_Define.Round = node$9.UnshowStartRound - 1),
                          (Game_Define.PlateIdx = 0),
                          (this.m_gameView.SpinAck =
                            this.m_gameView.UnshowSpinAck);
                        var e =
                          this.m_gameView.SpinAck.RoundQueue[Game_Define.Round];
                        this.m_gameView.GameBg.ShowFg(),
                          this.m_gameView.FgCounterSpine.SetFgCounterNum(
                            e.FreeRemainRound,
                            e.FreeTotalRound
                          );
                        for (var t = 0; t < node$9.UnshowStartRound; t++) {
                          var o = this.m_gameView.SpinAck.RoundQueue[t];
                          Game_Define.TotalWin = node$2.plus(
                            Game_Define.TotalWin,
                            o.RoundWin ? o.RoundWin : 0
                          );
                        }
                        node.SetWinValue(Game_Define.TotalWin);
                        var n =
                            this.m_gameView.SpinAck.RoundQueue[
                              Game_Define.Round
                            ],
                          i =
                            n.ComboStageData[
                              node$2.minus(n.ComboStageData.length, 1)
                            ];
                        this.m_gameView.SlotReels.RecoverPlate(
                          i.ComboStageSymbol
                        ),
                          this.m_gameView.EffectPlate.ShowUnCandy(
                            i.ComboStageMult
                          );
                        for (
                          var r = new Array(), a = 0, s = 0;
                          s < n.ComboStageData.length;
                          s++
                        ) {
                          if (
                            n.ComboStageData[s].AwardDataVec &&
                            n.ComboStageData[s].AwardDataVec.length > 0
                          )
                            for (
                              var l = n.ComboStageData[s].AwardDataVec, c = 0;
                              c < l.length;
                              c++
                            )
                              r.push(l[c]),
                                r.length > Game_Define.HistoryLength &&
                                  r.shift();
                          a = node$2.plus(
                            a,
                            n.ComboStageData[s].ComboStageWin
                              ? n.ComboStageData[s].ComboStageWin
                              : 0
                          );
                        }
                        this.m_gameView.HistoryPlate.UnShowPlate(r, a),
                          node.SetEnterFree(),
                          this.m_gameView.ChangeFadeType(
                            FADE_TYPE.OUT,
                            Game_Define.AudioClips.BGM_FG
                          );
                      } else
                        this.m_gameView.ChangeBgMusic(
                          Game_Define.AudioClips.BGM_MG
                        ),
                          this.m_gameView.GameBg.ShowMg(),
                          this.m_gameView.ChangeFadeType(
                            FADE_TYPE.OUT,
                            Game_Define.AudioClips.BGM_MG
                          );
                      this.m_gameView.OnRotation(),
                        (node$a.HasUnshow = !1),
                        node$b.ShowMessageBox(
                          node$4.StringKey.MSGBOX_UNSHOW_BACK,
                          node$4.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                          function () {
                            node$5.NextState(CommonState.SPIN);
                          }
                        );
                    } else
                      error(
                        "Info Error",
                        node$9.UnshowStartRound,
                        this.m_gameView.UnshowSpinAck.RoundQueue
                      );
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$k),
          _dec$l,
          _class$l;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f6c84vzSn5OmJaf68clD8GN",
            "FeatureShowState",
            void 0
          );
        var ccclass$l = _decorator.ccclass,
          FeatureShowState =
            ((_dec$l = ccclass$l("FeatureShowState")),
            _dec$l(
              (_class$l = (function (e) {
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
                      (this.m_gameView.IsAutoShowFeatures = !0),
                      node.CanPlayFeaturesDemo(!0),
                      node.SetBarNodeVisiable(!0),
                      (this.m_gameView.GameIntro.getComponent(
                        UIOpacity
                      ).opacity = 0),
                      node$a.AutoShowFeatures();
                  }),
                  (o.OnProcess = function () {}),
                  (o.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$l),
          _dec$m,
          _class$m,
          _class2$7,
          _descriptor$6,
          _class3$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "16b25a40XZG+a6BdOQiKQ6T", "SlotReels", void 0);
        var SIDED_TABLE = [
            [EIGHT_SIDED.DOWN_LEFT, EIGHT_SIDED.LEFT, EIGHT_SIDED.TOP_LEFT],
            [EIGHT_SIDED.DOWN, EIGHT_SIDED.CENTER, EIGHT_SIDED.TOP],
            [EIGHT_SIDED.DOWN_RIGHT, EIGHT_SIDED.RIGHT, EIGHT_SIDED.TOP_RIGHT],
          ],
          ccclass$m = _decorator.ccclass,
          property$6 = _decorator.property,
          SlotReels =
            ((_dec$m = property$6({
              type: SpriteFrame,
              tooltip: "symbol的SpriteFrame",
            })),
            ccclass$m(
              ((_class3$2 = (function (e) {
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
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_plate = null),
                    (t.m_symbols = new Array()),
                    (t.m_isWait = !0),
                    (t.m_isStop = !0),
                    (t.m_isDropSounds = [!1, !1, !1, !1, !1, !1, !1]),
                    (t.m_soundId = null),
                    (t.m_scSound = null),
                    (t.m_nearWinCol = null),
                    (t.m_winRow = []),
                    (t.m_isSCStopSound = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e),
                      (Game_Define.SLOT_REELS.VIEW_SIZE =
                        this.node.getComponent(UITransform).contentSize),
                      (Game_Define.SLOT_REELS.SYMBOL_SIZE = new Size(
                        Game_Define.SLOT_REELS.VIEW_SIZE.width /
                          Game_Define.SLOT_REELS.COL,
                        Game_Define.SLOT_REELS.VIEW_SIZE.height /
                          Game_Define.SLOT_REELS.ROW
                      )),
                      (this.m_symbols = []);
                    for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++) {
                      for (
                        var o = new Array(), n = new Array(), i = 0;
                        i < Game_Define.SLOT_REELS.ROW;
                        i++
                      ) {
                        var r = this.m_symbolSpriteFrames[t],
                          a = NodePool.GetInstance().GetSymbol(
                            Game_Define.SLOT_REELS,
                            r
                          );
                        a.SetSymbolPosition(t, i),
                          a.SetSymbolActive(!0),
                          this.node.addChild(a.SymbolNode),
                          node$2.SetZIndex(
                            a.SymbolNode,
                            Game_Define.GetZIndex(t, i, Game_Define.SLOT_REELS)
                          ),
                          o.push(a),
                          n.push(a.GetSymbolPosition());
                      }
                      this.m_symbols.push(o);
                    }
                  }),
                  (o.start = function () {
                    var e = function () {
                      (Game_Define.SLOT_REELS.ENTER_DELAY_TIME_FOR_X =
                        node$3.TempoSetting.SweetLand.DELAY_TIME_FOR_X.NORMAL),
                        (Game_Define.SLOT_REELS.ENTER_DELAY_TIME_FOR_Y =
                          node$3.TempoSetting.SweetLand.DELAY_TIME_FOR_Y.NORMAL),
                        (Game_Define.SLOT_REELS.SYMBOL_LEVEL_MOVE_TIME =
                          node$3.TempoSetting.SweetLand.SYMBOL_MOVE_TIME),
                        (Game_Define.SLOT_REELS.NEARWWIN_FIALL_TIME =
                          node$3.TempoSetting.SweetLand.NEAR_WIN_SYMBOL_MOVE_TIME),
                        (Game_Define.SLOT_REELS.L_BOUNCE_DISTANCE =
                          node$3.TempoSetting.SweetLand.BOUNCE_DISTANCE),
                        (Game_Define.SLOT_REELS.S_BOUNCE_DISTANCE =
                          node$3.TempoSetting.SweetLand.BOUNCE_DISTANCE),
                        (Game_Define.SLOT_REELS.SYMBOL_MOVE_DISTANCE =
                          node$3.TempoSetting.SweetLand.SYMBOL_MOVE_DISTANCE);
                    };
                    e(), node$3.AddCb(e);
                  }),
                  (o.RecoverPlate = function (e) {
                    void 0 === e && (e = null);
                    for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++)
                      for (var o = 0; o < Game_Define.SLOT_REELS.ROW; o++) {
                        var n = this.m_symbols[t][o];
                        if ((Tween.stopAllByTarget(n.SymbolNode), null !== e)) {
                          var i = this.m_symbolSpriteFrames[e[t].Col[o]];
                          n.SetSymbolSpriteFrame(i);
                        }
                        n.SetSymbolPosition(t, o), n.SetSymbolActive(!0);
                      }
                  }),
                  (o.SetPlateInfo = function (e) {
                    (Game_Define.IsNearWin = !1),
                      (Game_Define.IsEnterFg = !1),
                      (this.m_plate = e),
                      this.CheckNearWin(this.m_plate, null);
                  }),
                  (o.StartSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_isStop = !1,
                                      this.m_isWait = !1,
                                      this.m_nearWinCol =
                                        Game_Define.SLOT_REELS.COL,
                                      this.m_plate = null,
                                      this.m_soundId = null,
                                      this.m_isSCStopSound = !1,
                                      this.m_gameView.EffectPlate.HasPlayWildSound =
                                        !1,
                                      t = new Array(),
                                      o = 0;
                                    o < Game_Define.SLOT_REELS.COL;
                                    o++
                                  )
                                    for (
                                      n = 0;
                                      n < Game_Define.SLOT_REELS.ROW;
                                      n++
                                    )
                                      (i =
                                        this.m_symbols[o][n]).SetSymbolActive(
                                        !0
                                      ),
                                        i.SetHardStop(node.IsHardStop),
                                        Game_Define.IsInFG ||
                                          t.push(
                                            this.m_gameView.EffectPlate.StartSpinCandy(
                                              o,
                                              n
                                            )
                                          ),
                                        t.push(
                                          i.LeavePlate(
                                            o,
                                            n,
                                            Game_Define.ReelDirection.DOWN
                                          )
                                        );
                                  return (
                                    node$1.Play(Game_Define.AudioClips.Spin),
                                    t.push(
                                      this.m_gameView.HistoryPlate.StartSpin()
                                    ),
                                    (e.next = 13),
                                    Promise.all(t)
                                  );
                                case 13:
                                  null !== this.m_plate
                                    ? this.ShowNewPlate()
                                    : (this.m_isWait = !0);
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
                  (o.ShowNewPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_isWait = !1),
                                    this.m_gameView.HistoryPlate.ShowNewPlate(),
                                    Game_Define.IsInFG ||
                                      this.m_gameView.EffectPlate.CleanCandy(),
                                    (t = node.IsHardStop),
                                    (this.m_scSound = 0),
                                    (this.m_isDropSounds = [
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                    ]),
                                    (e.next = 8),
                                    this.ShowPlate(t)
                                  );
                                case 8:
                                  if (!Game_Define.IsNearWin || t) {
                                    e.next = 11;
                                    break;
                                  }
                                  return (e.next = 11), this.ShowPlateNearWin();
                                case 11:
                                  this.m_gameView.EffectPlate.CleanSymbolAllAnim(),
                                    null !== this.m_soundId &&
                                      (node$1.SetMusicFadeOut(
                                        this.m_soundId,
                                        0.5
                                      ),
                                      (this.m_soundId = null)),
                                    (this.m_isStop = !0);
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
                  (o.ShowPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o) {
                        var n,
                          i,
                          r,
                          a = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  n = new Array(),
                                    i = function (e) {
                                      for (
                                        var i = function (i) {
                                            var r = a.m_symbols[e][i],
                                              s =
                                                a.m_symbolSpriteFrames[
                                                  a.m_plate[e].Col[i]
                                                ];
                                            r.SetSymbolSpriteFrame(s),
                                              r.SetHardStop(o),
                                              r.SetSymbolOpacity(
                                                Reel.Opacity.Show
                                              ),
                                              r.SetSymbolPosition(
                                                e,
                                                node$2.plus(
                                                  Game_Define.SLOT_REELS.ROW,
                                                  i,
                                                  Game_Define.SideOffset
                                                )
                                              ),
                                              (!Game_Define.IsNearWin ||
                                                (Game_Define.IsNearWin &&
                                                  e <= a.m_nearWinCol) ||
                                                o) &&
                                                n.push(
                                                  r.MovePlate(
                                                    e,
                                                    i,
                                                    0,
                                                    Game_Define.ReelDirection
                                                      .DOWN,
                                                    !1,
                                                    function () {},
                                                    function () {
                                                      a.m_isDropSounds[e] ||
                                                        o ||
                                                        (node$1.Play(
                                                          Game_Define.AudioClips
                                                            .Reel_Stop
                                                        ),
                                                        (a.m_isDropSounds[e] =
                                                          !0));
                                                    },
                                                    _asyncToGenerator(
                                                      _regeneratorRuntime().mark(
                                                        function n() {
                                                          var r;
                                                          return _regeneratorRuntime().wrap(
                                                            function (n) {
                                                              for (;;)
                                                                switch (
                                                                  (n.prev =
                                                                    n.next)
                                                                ) {
                                                                  case 0:
                                                                    if (
                                                                      o ||
                                                                      !Game_Define.IsNearWin ||
                                                                      e !==
                                                                        a.m_nearWinCol
                                                                    ) {
                                                                      n.next = 5;
                                                                      break;
                                                                    }
                                                                    if (
                                                                      (a
                                                                        .m_plate[
                                                                        e
                                                                      ].Col[
                                                                        i
                                                                      ] ===
                                                                        Game_Define
                                                                          .Symbol
                                                                          .SYMBOL_SCATTER &&
                                                                        (a.PlayScatterStopSound(
                                                                          o,
                                                                          a.m_plate
                                                                        ),
                                                                        a.ShowScatterStop(
                                                                          a
                                                                            .m_plate[
                                                                            e
                                                                          ].Col[
                                                                            i
                                                                          ],
                                                                          e,
                                                                          i,
                                                                          o,
                                                                          Game_Define.IsNearWin,
                                                                          function () {
                                                                            for (
                                                                              var e = 0;
                                                                              e <=
                                                                              a.m_nearWinCol;
                                                                              e++
                                                                            )
                                                                              for (
                                                                                var t = 0;
                                                                                t <
                                                                                Game_Define
                                                                                  .SLOT_REELS
                                                                                  .ROW;
                                                                                t++
                                                                              )
                                                                                a
                                                                                  .m_plate[
                                                                                  e
                                                                                ]
                                                                                  .Col[
                                                                                  t
                                                                                ] ===
                                                                                  Game_Define
                                                                                    .Symbol
                                                                                    .SYMBOL_SCATTER &&
                                                                                  a.m_gameView.EffectPlate.ShowScatterNearWin(
                                                                                    e,
                                                                                    t
                                                                                  );
                                                                          }
                                                                        )),
                                                                      i ===
                                                                        t.Row
                                                                          .Last)
                                                                    ) {
                                                                      for (
                                                                        null ===
                                                                          a.m_soundId &&
                                                                          (a.m_soundId =
                                                                            node$1.Play(
                                                                              Game_Define
                                                                                .AudioClips
                                                                                .MG_NearWin,
                                                                              !0
                                                                            )),
                                                                          r =
                                                                            e +
                                                                            1;
                                                                        r <
                                                                        Game_Define
                                                                          .SLOT_REELS
                                                                          .COL;
                                                                        r++
                                                                      )
                                                                        a.m_gameView.EffectPlate.ShowSpinNearWin(
                                                                          r
                                                                        );
                                                                      a.m_gameView.Character.PlayNearWin();
                                                                    }
                                                                    n.next = 9;
                                                                    break;
                                                                  case 5:
                                                                    if (
                                                                      a.m_plate[
                                                                        e
                                                                      ].Col[
                                                                        i
                                                                      ] !==
                                                                      Game_Define
                                                                        .Symbol
                                                                        .SYMBOL_SCATTER
                                                                    ) {
                                                                      n.next = 9;
                                                                      break;
                                                                    }
                                                                    return (
                                                                      a.PlayScatterStopSound(
                                                                        o,
                                                                        a.m_plate
                                                                      ),
                                                                      (n.next = 9),
                                                                      a.ShowScatterStop(
                                                                        a
                                                                          .m_plate[
                                                                          e
                                                                        ].Col[
                                                                          i
                                                                        ],
                                                                        e,
                                                                        i,
                                                                        o
                                                                      )
                                                                    );
                                                                  case 9:
                                                                  case "end":
                                                                    return n.stop();
                                                                }
                                                            },
                                                            n
                                                          );
                                                        }
                                                      )
                                                    )
                                                  )
                                                );
                                          },
                                          r = 0;
                                        r < Game_Define.SLOT_REELS.ROW;
                                        r++
                                      )
                                        i(r);
                                    },
                                    r = 0;
                                  r < Game_Define.SLOT_REELS.COL;
                                  r++
                                )
                                  i(r);
                                return (e.next = 5), Promise.all(n);
                              case 5:
                                o &&
                                  node$1.Play(Game_Define.AudioClips.Reel_Stop);
                              case 6:
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
                  (o.ShowPlateNearWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var o,
                          n,
                          i = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (o = _regeneratorRuntime().mark(function e(
                                    o
                                  ) {
                                    var n, r, a;
                                    return _regeneratorRuntime().wrap(function (
                                      e
                                    ) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            for (
                                              n = new Array(),
                                                r = function (e) {
                                                  var r = i.m_symbols[o][e];
                                                  n.push(
                                                    r.MovePlate(
                                                      o,
                                                      e,
                                                      0,
                                                      Game_Define.ReelDirection
                                                        .DOWN,
                                                      !1,
                                                      function () {},
                                                      function () {
                                                        i.m_isDropSounds[o] ||
                                                          (node$1.Play(
                                                            Game_Define
                                                              .AudioClips
                                                              .Reel_Stop
                                                          ),
                                                          (i.m_isDropSounds[o] =
                                                            !0));
                                                      },
                                                      _asyncToGenerator(
                                                        _regeneratorRuntime().mark(
                                                          function n() {
                                                            return _regeneratorRuntime().wrap(
                                                              function (n) {
                                                                for (;;)
                                                                  switch (
                                                                    (n.prev =
                                                                      n.next)
                                                                  ) {
                                                                    case 0:
                                                                      if (
                                                                        i
                                                                          .m_plate[
                                                                          o
                                                                        ].Col[
                                                                          e
                                                                        ] !==
                                                                        Game_Define
                                                                          .Symbol
                                                                          .SYMBOL_SCATTER
                                                                      ) {
                                                                        n.next = 4;
                                                                        break;
                                                                      }
                                                                      return (
                                                                        i.PlayScatterStopSound(
                                                                          !1,
                                                                          i.m_plate
                                                                        ),
                                                                        (n.next = 4),
                                                                        i.ShowScatterStop(
                                                                          i
                                                                            .m_plate[
                                                                            o
                                                                          ].Col[
                                                                            e
                                                                          ],
                                                                          o,
                                                                          e,
                                                                          !1,
                                                                          Game_Define.IsNearWin
                                                                        )
                                                                      );
                                                                    case 4:
                                                                      Game_Define.IsNearWin &&
                                                                        e ===
                                                                          t.Row
                                                                            .Last &&
                                                                        i.m_gameView.EffectPlate.CloseOneNearWin(
                                                                          o
                                                                        );
                                                                    case 5:
                                                                    case "end":
                                                                      return n.stop();
                                                                  }
                                                              },
                                                              n
                                                            );
                                                          }
                                                        )
                                                      )
                                                    )
                                                  );
                                                },
                                                a = 0;
                                              a < Game_Define.SLOT_REELS.ROW;
                                              a++
                                            )
                                              r(a);
                                            return (e.next = 5), Promise.all(n);
                                          case 5:
                                          case "end":
                                            return e.stop();
                                        }
                                    },
                                    e);
                                  })),
                                    (n = this.m_nearWinCol);
                                case 2:
                                  if (!(n < Game_Define.SLOT_REELS.COL)) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.delegateYield(o(n), "t0", 4);
                                case 4:
                                  n++, (e.next = 2);
                                  break;
                                case 7:
                                  if (Game_Define.IsEnterFg) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (
                                    (e.next = 10),
                                    this.m_gameView.Character.PlayNearWinEnd()
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
                  (o.PlayScatterStopSound = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t) {
                                    for (n = 0; n < o.length; n++)
                                      for (i = 0; i < o[n].Col.length; i++)
                                        o[n].Col[i] ===
                                          Game_Define.Symbol.SYMBOL_SCATTER &&
                                          (this.m_scSound++,
                                          this.m_scSound > 3 &&
                                            (this.m_scSound = 3));
                                    this.m_isSCStopSound ||
                                      node$1.Play(
                                        Game_Define.AudioClips[
                                          "Scatter_Show" +
                                            this.m_scSound.toString()
                                        ]
                                      );
                                  } else
                                    this.m_scSound++,
                                      this.m_scSound > 3 &&
                                        (this.m_scSound = 3),
                                      node$1.Play(
                                        Game_Define.AudioClips[
                                          "Scatter_Show" +
                                            this.m_scSound.toString()
                                        ]
                                      );
                                  this.m_isSCStopSound = !0;
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
                  (o.ShowScatterStop = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i, r, a) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (void 0 === r && (r = !1),
                                    t !== Game_Define.Symbol.SYMBOL_SCATTER)
                                  ) {
                                    e.next = 5;
                                    break;
                                  }
                                  return (
                                    (e.next = 4),
                                    this.m_gameView.EffectPlate.ShowScatterStop(
                                      o,
                                      n
                                    )
                                  );
                                case 4:
                                  a
                                    ? null == a || a()
                                    : r &&
                                      !i &&
                                      this.m_gameView.EffectPlate.ShowScatterNearWin(
                                        o,
                                        n
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
                  (o.GetSymbol = function (e, t) {
                    if (t >= this.m_symbols.length) return null;
                    var o = this.m_symbols[e][t];
                    return o || null;
                  }),
                  (o.SetSymbolSpriteFrame = function (e, t) {
                    var o = this.m_symbolSpriteFrames[t];
                    e.SetSymbolSpriteFrame(o);
                  }),
                  (o.ShowExplode = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n, i, r) {
                        var a;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (Game_Define.IsWild = !1),
                                    (Game_Define.IsCandy = !1),
                                    (this.m_isSCStopSound = !1),
                                    (a = new Array()),
                                    this.ShowDarkOrLightSymbol(!0),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !0
                                    ),
                                    this.m_gameView.EffectPlate.ClearScatterEffects(),
                                    this.m_gameView.EffectPlate.CleanAllSymbolAnim(),
                                    a.push(
                                      this.m_gameView.HistoryPlate.ShowExplode(
                                        i,
                                        t
                                      )
                                    ),
                                    this.PlayComboSound(),
                                    a.push(this.ShowWin(i)),
                                    r &&
                                      r.length > 0 &&
                                      a.push(
                                        this.m_gameView.Character.PlayWild()
                                      ),
                                    (e.next = 14),
                                    this.ShowExplodeWin(o, i)
                                  );
                                case 14:
                                  return (
                                    a.push(this.ShowRemoveWildCandy(i, r, n)),
                                    (e.next = 17),
                                    Promise.all(a)
                                  );
                                case 17:
                                  this.ShowDarkOrLightSymbol(!1),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !1
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
                    return function (t, o, n, i, r) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.PlayComboSound = function () {
                    var e = Game_Define.PlateIdx;
                    switch ((Game_Define.IsInFG || e--, e)) {
                      case -1:
                      case 0:
                        node.IsHardStop
                          ? node$1.Play(Game_Define.AudioClips.Combo_f_x2_fast)
                          : node$1.Play(Game_Define.AudioClips.Combo_f_x2);
                        break;
                      case 1:
                        node.IsHardStop
                          ? node$1.Play(Game_Define.AudioClips.Combo_f_x3_fast)
                          : node$1.Play(Game_Define.AudioClips.Combo_f_x3);
                        break;
                      case 2:
                        node.IsHardStop
                          ? node$1.Play(Game_Define.AudioClips.Combo_f_x4_fast)
                          : node$1.Play(Game_Define.AudioClips.Combo_f_x4);
                        break;
                      default:
                        node.IsHardStop
                          ? node$1.Play(Game_Define.AudioClips.Combo_f_x5_fast)
                          : node$1.Play(Game_Define.AudioClips.Combo_f_x5);
                    }
                  }),
                  (o.ShowExplodeWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = new Array()).push(
                                      this.ShowWinEffect(o, t)
                                    ),
                                    n.push(this.ShowConnection(o)),
                                    (e.next = 5),
                                    Promise.all(n)
                                  );
                                case 5:
                                  this.m_gameView.EffectPlate.CleanConnectHint();
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowWinEffect = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    n = new Array(),
                                      n = [],
                                      i = new Array(),
                                      r = 0;
                                    r < t.length;
                                    r++
                                  )
                                    for (a = 0; a < t[r].PosVec.length; a++)
                                      -1 === n.indexOf(t[r].PosVec[a]) &&
                                        ((s = this.PosToXY(t[r].PosVec[a])),
                                        ((l =
                                          this.m_symbols[s.x][
                                            s.y
                                          ]).SymbolNode.active = !1),
                                        i.push(
                                          this.m_gameView.EffectPlate.PlayWinEffect(
                                            o[s.x].Col[s.y],
                                            l.GetSymbolPosition(),
                                            s.x,
                                            s.y
                                          )
                                        ),
                                        n.push(t[r].PosVec[a]));
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a, s;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_winRow = [], o = new Array(), n = 0;
                                    n < t.length;
                                    n++
                                  )
                                    (i = t[n].PosVec.sort(function (e, t) {
                                      return e - t;
                                    })),
                                      (r = Math.ceil(t[n].Count / 2)),
                                      (r = this.FindMiddle(i, r)),
                                      (a = this.PosToXY(i[r])),
                                      this.m_winRow.push(a.y),
                                      (s = this.m_symbols[a.x][a.y]),
                                      o.push(
                                        this.m_gameView.EffectPlate.PlayWin(
                                          t[n].Win,
                                          t[n].Mult,
                                          s.GetSymbolPosition()
                                        )
                                      );
                                  return (e.next = 5), Promise.all(o);
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
                  (o.ShowConnection = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o, n, i, r, a, s, l, c, u, m, _, p, d, f, h, C, y;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    o = new Array(), n = [], i = 0;
                                    i < Game_Define.COL;
                                    i++
                                  ) {
                                    for (
                                      r = [], a = 0;
                                      a < Game_Define.ROW;
                                      a++
                                    )
                                      r.push(0);
                                    n.push(r);
                                  }
                                  for (s = 1, l = 0; l < t.length; l++) {
                                    for (c = 0; c < t[l].PosVec.length; c++)
                                      (u = this.PosToXY(t[l].PosVec[c])),
                                        (n[u.x][u.y] = s);
                                    s++;
                                  }
                                  m = 0;
                                case 6:
                                  if (!(m < t.length)) {
                                    e.next = 35;
                                    break;
                                  }
                                  _ = 0;
                                case 8:
                                  if (!(_ < t[m].PosVec.length)) {
                                    e.next = 32;
                                    break;
                                  }
                                  (p = this.PosToXY(t[m].PosVec[_])),
                                    (d = []),
                                    (f = -1);
                                case 12:
                                  if (!(f <= 1)) {
                                    e.next = 28;
                                    break;
                                  }
                                  h = -1;
                                case 14:
                                  if (!(h <= 1)) {
                                    e.next = 25;
                                    break;
                                  }
                                  if (0 != f || 0 != h) {
                                    e.next = 17;
                                    break;
                                  }
                                  return e.abrupt("continue", 22);
                                case 17:
                                  if (
                                    ((C = p.x + f),
                                    (y = p.y + h),
                                    !(
                                      C < 0 ||
                                      C >= Game_Define.COL ||
                                      y < 0 ||
                                      y >= Game_Define.ROW
                                    ))
                                  ) {
                                    e.next = 21;
                                    break;
                                  }
                                  return e.abrupt("continue", 22);
                                case 21:
                                  n[p.x][p.y] == n[C][y] &&
                                    d.push(SIDED_TABLE[f + 1][h + 1]);
                                case 22:
                                  h++, (e.next = 14);
                                  break;
                                case 25:
                                  f++, (e.next = 12);
                                  break;
                                case 28:
                                  this.m_gameView.EffectPlate.PlayConnection(
                                    d,
                                    p.x,
                                    p.y
                                  );
                                case 29:
                                  _++, (e.next = 8);
                                  break;
                                case 32:
                                  m++, (e.next = 6);
                                  break;
                                case 35:
                                  return (e.next = 37), Promise.all(o);
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowRemoveWildCandy = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        var i, r, a, s, l;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    i = new Array(),
                                      i = [],
                                      r = new Array(),
                                      a = 0;
                                    a < t.length;
                                    a++
                                  )
                                    for (s = 0; s < t[a].PosVec.length; s++)
                                      -1 === i.indexOf(t[a].PosVec[s]) &&
                                        ((l = this.PosToXY(t[a].PosVec[s])),
                                        (this.m_symbols[l.x][
                                          l.y
                                        ].SymbolNode.active = !1),
                                        r.push(
                                          this.m_gameView.EffectPlate.ShowRemoveWildCandy(
                                            l.x,
                                            l.y,
                                            o,
                                            n
                                          )
                                        ),
                                        i.push(t[a].PosVec[s]));
                                  return (e.next = 6), Promise.all(r);
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
                  (o.PosToXY = function (e) {
                    var t = e % Game_Define.ROW,
                      o = Math.floor(e / Game_Define.ROW);
                    return v2(o, t);
                  }),
                  (o.FindMiddle = function (e, t) {
                    for (
                      var o = t, n = this.PosToXY(e[t]), i = t;
                      i < e.length;
                      i++
                    ) {
                      var r = this.PosToXY(e[i]);
                      if (
                        this.m_winRow.length > 0 &&
                        -1 === this.m_winRow.indexOf(r.y)
                      ) {
                        if (0 != n.x && n.x != Game_Define.COL - 1) {
                          o = i;
                          break;
                        }
                        if (0 == n.x) {
                          if (1 == r.x) {
                            o = i;
                            break;
                          }
                        } else if (r.x == Game_Define.COL - 2) {
                          o = i;
                          break;
                        }
                      } else if (
                        0 === this.m_winRow.length &&
                        (0 == n.x || n.x == Game_Define.COL - 1)
                      ) {
                        var a = this.PosToXY(e[i]);
                        if (0 == n.x) {
                          if (1 == a.x) {
                            o = i;
                            break;
                          }
                        } else if (a.x == Game_Define.COL - 2) {
                          o = i;
                          break;
                        }
                      }
                    }
                    return o;
                  }),
                  (o.ShowMatchAndPatchUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    (this.ClearSymbol(),
                                    (o = node.IsHardStop),
                                    (this.m_isDropSounds = [
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                      !1,
                                    ]),
                                    !Game_Define.IsNearWin)
                                  ) {
                                    e.next = 15;
                                    break;
                                  }
                                  return (e.next = 6), this.ShowMatch(t, o);
                                case 6:
                                  return (
                                    !1 ||
                                      (!0,
                                      null === this.m_soundId &&
                                        (this.m_soundId = node$1.Play(
                                          Game_Define.AudioClips.MG_NearWin,
                                          !0
                                        )),
                                      this.m_gameView.Character.PlayNearWin()),
                                    (e.next = 10),
                                    this.ShowPatchUp(t, o, !0)
                                  );
                                case 10:
                                  if (Game_Define.IsEnterFg) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (e.next = 13),
                                    this.m_gameView.Character.PlayNearWinEnd()
                                  );
                                case 13:
                                  e.next = 18;
                                  break;
                                case 15:
                                  return (
                                    (e.next = 17), this.ShowMatchPatchUp(t, o)
                                  );
                                case 17:
                                  this.CheckNearWin(this.m_plate, t);
                                case 18:
                                  o &&
                                    node$1.Play(Game_Define.AudioClips.Fiop1),
                                    null !== this.m_soundId &&
                                      (node$1.SetMusicFadeOut(
                                        this.m_soundId,
                                        0.5
                                      ),
                                      (this.m_soundId = null));
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.CheckNearWin = function (e, t) {
                    if (!node.IsHardStop)
                      for (var o = 0, n = 0; n < e.length; n++) {
                        for (var i = 0; i < e[n].Col.length; i++)
                          if (e[n].Col[i] == Game_Define.Symbol.SYMBOL_SCATTER)
                            if (2 === ++o)
                              (Game_Define.IsNearWin = !0),
                                n !== e.length - 1 && (this.m_nearWinCol = n);
                            else if (o > (Game_Define.IsInFG ? 1 : 2)) {
                              Game_Define.IsEnterFg = !0;
                              break;
                            }
                        if (t && t[n].Col.length > 0)
                          for (var r = 0; r < t[n].Col.length; r++)
                            if (
                              t[n].Col[r] == Game_Define.Symbol.SYMBOL_SCATTER
                            )
                              if (2 === ++o) Game_Define.IsNearWin = !0;
                              else if (o > (Game_Define.IsInFG ? 1 : 2)) {
                                Game_Define.IsEnterFg = !0;
                                break;
                              }
                      }
                  }),
                  (o.ClearSymbol = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    t = 0;
                                    t < Game_Define.SLOT_REELS.COL;
                                    t++
                                  )
                                    for (
                                      o = node$2.minus(
                                        this.m_symbols[t].length,
                                        1
                                      );
                                      o >= 0;
                                      o--
                                    )
                                      this.m_symbols[t][o].SymbolNode.active ||
                                        ((n = this.m_symbols[t][o]),
                                        this.m_symbols[t].splice(o, 1),
                                        n.SymbolNode.removeFromParent(),
                                        NodePool.GetInstance().ReturnSymbol(n));
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
                  (o.ShowMatch = (function () {
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
                                  n = new Array(),
                                    i = 0,
                                    r = function (e) {
                                      for (
                                        var r = 0, a = 0;
                                        a < s.m_symbols[e].length;
                                        a++
                                      ) {
                                        var l = s.m_symbols[e][a];
                                        l.SetHardStop(o),
                                          node$2.SetZIndex(
                                            l.SymbolNode,
                                            Game_Define.GetZIndex(
                                              e,
                                              a,
                                              Game_Define.SLOT_REELS
                                            )
                                          ),
                                          l.CheckMove(e, a) &&
                                            (n.push(
                                              l.FillMovePlate(
                                                e,
                                                a,
                                                i,
                                                r,
                                                0,
                                                Game_Define.ReelDirection.DOWN,
                                                !1,
                                                function () {},
                                                function () {
                                                  s.m_isDropSounds[e] ||
                                                    o ||
                                                    (node$1.Play(
                                                      Game_Define.AudioClips
                                                        .Fiop1
                                                    ),
                                                    (s.m_isDropSounds[e] = !0));
                                                }
                                              )
                                            ),
                                            r++);
                                      }
                                      t[e].Col.length > 0 && i++;
                                    },
                                    a = 0;
                                  a < Game_Define.SLOT_REELS.COL;
                                  a++
                                )
                                  r(a);
                                return (e.next = 6), Promise.all(n);
                              case 6:
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
                  (o.ShowPatchUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o, n, i) {
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
                                  for (
                                    void 0 === i && (i = !1),
                                      r = new Array(),
                                      a = 0,
                                      s = 0;
                                    s < Game_Define.SLOT_REELS.COL;
                                    s++
                                  )
                                    Game_Define.IsNearWin &&
                                      o[s].Col.length > 0 &&
                                      this.m_gameView.EffectPlate.ShowPatchUpNearWin(
                                        s
                                      );
                                  for (
                                    l = function (e) {
                                      for (
                                        var s = u.m_symbols[e].length,
                                          l = function (l) {
                                            var c = s + l,
                                              m =
                                                NodePool.GetInstance().GetSymbol(
                                                  Game_Define.SLOT_REELS,
                                                  u.m_symbolSpriteFrames[
                                                    o[e].Col[l]
                                                  ]
                                                );
                                            m.SetSymbolActive(!0),
                                              m.SetHardStop(n),
                                              m.SetSymbolPosition(
                                                e,
                                                node$2.plus(
                                                  Game_Define.SLOT_REELS.ROW,
                                                  l,
                                                  Game_Define.SideOffset
                                                )
                                              ),
                                              u.node.addChild(m.SymbolNode),
                                              node$2.SetZIndex(
                                                m.SymbolNode,
                                                Game_Define.GetZIndex(
                                                  e,
                                                  c,
                                                  Game_Define.SLOT_REELS
                                                )
                                              ),
                                              u.m_symbols[e].push(m),
                                              r.push(
                                                m.FillMovePlate(
                                                  e,
                                                  c,
                                                  a,
                                                  l,
                                                  0,
                                                  Game_Define.ReelDirection
                                                    .DOWN,
                                                  i,
                                                  function () {},
                                                  function () {
                                                    u.m_isDropSounds[e] ||
                                                      n ||
                                                      (node$1.Play(
                                                        Game_Define.AudioClips
                                                          .Fiop1
                                                      ),
                                                      (u.m_isDropSounds[e] =
                                                        !0));
                                                  },
                                                  _asyncToGenerator(
                                                    _regeneratorRuntime().mark(
                                                      function i() {
                                                        return _regeneratorRuntime().wrap(
                                                          function (i) {
                                                            for (;;)
                                                              switch (
                                                                (i.prev =
                                                                  i.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    o[e].Col[
                                                                      l
                                                                    ] !==
                                                                    Game_Define
                                                                      .Symbol
                                                                      .SYMBOL_SCATTER
                                                                  ) {
                                                                    i.next = 4;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    u.PlayScatterStopSound(
                                                                      n,
                                                                      o
                                                                    ),
                                                                    (i.next = 4),
                                                                    u.ShowScatterStop(
                                                                      o[e].Col[
                                                                        l
                                                                      ],
                                                                      e,
                                                                      c,
                                                                      n,
                                                                      Game_Define.IsNearWin
                                                                    )
                                                                  );
                                                                case 4:
                                                                  Game_Define.IsNearWin &&
                                                                    c ===
                                                                      t.Row
                                                                        .Last &&
                                                                    u.m_gameView.EffectPlate.CloseOneNearWin(
                                                                      e
                                                                    );
                                                                case 5:
                                                                case "end":
                                                                  return i.stop();
                                                              }
                                                          },
                                                          i
                                                        );
                                                      }
                                                    )
                                                  )
                                                )
                                              );
                                          },
                                          c = 0;
                                        c < o[e].Col.length;
                                        c++
                                      )
                                        l(c);
                                      o[e].Col.length > 0 && a++;
                                    },
                                      c = 0;
                                    c < Game_Define.SLOT_REELS.COL;
                                    c++
                                  )
                                    l(c);
                                  return (e.next = 8), Promise.all(r);
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowMatchPatchUp = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(o, n, i) {
                        var r,
                          a,
                          s,
                          l,
                          c = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (
                                  void 0 === i && (i = !1),
                                    r = new Array(),
                                    a = 0,
                                    s = function (e) {
                                      for (
                                        var s = 0;
                                        s < c.m_symbols[e].length;
                                        s++
                                      ) {
                                        var l = c.m_symbols[e][s];
                                        l.SetHardStop(n),
                                          node$2.SetZIndex(
                                            l.SymbolNode,
                                            Game_Define.GetZIndex(
                                              e,
                                              s,
                                              Game_Define.SLOT_REELS
                                            )
                                          ),
                                          r.push(
                                            l.FillMovePlate(
                                              e,
                                              s,
                                              a,
                                              s,
                                              0,
                                              Game_Define.ReelDirection.DOWN,
                                              !1,
                                              function () {},
                                              function () {
                                                c.m_isDropSounds[e] ||
                                                  n ||
                                                  (node$1.Play(
                                                    Game_Define.AudioClips.Fiop1
                                                  ),
                                                  (c.m_isDropSounds[e] = !0));
                                              }
                                            )
                                          );
                                      }
                                      for (
                                        var u = c.m_symbols[e].length,
                                          m = function (s) {
                                            var l = u + s,
                                              m =
                                                NodePool.GetInstance().GetSymbol(
                                                  Game_Define.SLOT_REELS,
                                                  c.m_symbolSpriteFrames[
                                                    o[e].Col[s]
                                                  ]
                                                );
                                            m.SetSymbolActive(!0),
                                              m.SetHardStop(n),
                                              m.SetSymbolPosition(
                                                e,
                                                node$2.plus(
                                                  Game_Define.SLOT_REELS.ROW,
                                                  s,
                                                  Game_Define.SideOffset
                                                )
                                              ),
                                              c.node.addChild(m.SymbolNode),
                                              node$2.SetZIndex(
                                                m.SymbolNode,
                                                Game_Define.GetZIndex(
                                                  e,
                                                  l,
                                                  Game_Define.SLOT_REELS
                                                )
                                              ),
                                              c.m_symbols[e].push(m),
                                              r.push(
                                                m.FillMovePlate(
                                                  e,
                                                  l,
                                                  a,
                                                  l,
                                                  0,
                                                  Game_Define.ReelDirection
                                                    .DOWN,
                                                  i,
                                                  function () {},
                                                  function () {
                                                    c.m_isDropSounds[e] ||
                                                      n ||
                                                      (node$1.Play(
                                                        Game_Define.AudioClips
                                                          .Fiop1
                                                      ),
                                                      (c.m_isDropSounds[e] =
                                                        !0));
                                                  },
                                                  _asyncToGenerator(
                                                    _regeneratorRuntime().mark(
                                                      function i() {
                                                        return _regeneratorRuntime().wrap(
                                                          function (i) {
                                                            for (;;)
                                                              switch (
                                                                (i.prev =
                                                                  i.next)
                                                              ) {
                                                                case 0:
                                                                  if (
                                                                    o[e].Col[
                                                                      s
                                                                    ] !==
                                                                    Game_Define
                                                                      .Symbol
                                                                      .SYMBOL_SCATTER
                                                                  ) {
                                                                    i.next = 4;
                                                                    break;
                                                                  }
                                                                  return (
                                                                    c.PlayScatterStopSound(
                                                                      n,
                                                                      o
                                                                    ),
                                                                    (i.next = 4),
                                                                    c.ShowScatterStop(
                                                                      o[e].Col[
                                                                        s
                                                                      ],
                                                                      e,
                                                                      l,
                                                                      n,
                                                                      Game_Define.IsNearWin
                                                                    )
                                                                  );
                                                                case 4:
                                                                  Game_Define.IsNearWin &&
                                                                    l ===
                                                                      t.Row
                                                                        .Last &&
                                                                    c.m_gameView.EffectPlate.CloseOneNearWin(
                                                                      e
                                                                    );
                                                                case 5:
                                                                case "end":
                                                                  return i.stop();
                                                              }
                                                          },
                                                          i
                                                        );
                                                      }
                                                    )
                                                  )
                                                )
                                              );
                                          },
                                          _ = 0;
                                        _ < o[e].Col.length;
                                        _++
                                      )
                                        m(_);
                                      o[e].Col.length > 0 && a++;
                                    },
                                    l = 0;
                                  l < Game_Define.SLOT_REELS.COL;
                                  l++
                                )
                                  s(l);
                                return (e.next = 7), Promise.all(r);
                              case 7:
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
                  (o.CheckPlate = function (e) {
                    for (var t = 0; t < Game_Define.SLOT_REELS.COL; t++)
                      for (var o = 0; o < Game_Define.SLOT_REELS.ROW; o++) {
                        var n = this.m_symbolSpriteFrames[e[t].Col[o]].name;
                        if (this.m_symbols[t][o].GetSymbolName() !== n)
                          return !1;
                      }
                    return !0;
                  }),
                  (o.ShowDarkOrLightSymbol = function (e) {
                    for (var t = 0; t < this.m_symbols.length; t++)
                      for (var o = 0; o < this.m_symbols[t].length; o++) {
                        var n = this.m_symbols[t][o].SymbolNode;
                        n.getComponent(UIRenderer).color = e
                          ? color(
                              Reel.Color.Dark,
                              Reel.Color.Dark,
                              Reel.Color.Dark
                            )
                          : color(
                              Reel.Color.Light,
                              Reel.Color.Light,
                              Reel.Color.Light
                            );
                      }
                  }),
                  (o.ShowLightOneSymbol = function (e, t) {
                    this.m_symbols[e][t].SymbolNode.getComponent(
                      UIRenderer
                    ).color = color(
                      Reel.Color.Light,
                      Reel.Color.Light,
                      Reel.Color.Light
                    );
                  }),
                  (o.GetSymbolPosition = function (e, t) {
                    return this.m_symbols[e][t].GetSymbolPosition();
                  }),
                  _createClass(t, [
                    {
                      key: "IsWait",
                      get: function () {
                        return this.m_isWait;
                      },
                    },
                    {
                      key: "IsStop",
                      get: function () {
                        return this.m_isStop;
                      },
                    },
                    {
                      key: "Plate",
                      get: function () {
                        return this.m_plate;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_class3$2.Row = { First: 0, Last: 6 }),
              (_class2$7 = _class3$2),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_symbolSpriteFrames",
                [_dec$m],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$m = _class2$7))
            ) || _class$m),
          _dec$n,
          _dec2$6,
          _dec3$5,
          _dec4$5,
          _dec5$4,
          _class$n,
          _class2$8,
          _descriptor$7,
          _descriptor2$5,
          _descriptor3$5,
          _descriptor4$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "ddd2em+gxNBDIlyB9UsE2+M", "GameBg", void 0);
        var ccclass$n = _decorator.ccclass,
          property$7 = _decorator.property,
          ANIMATION_NAME$3;
        !(function (e) {
          (e.MG_Loop_L = "MG_Loop_L"),
            (e.MG_Loop_S = "MG_Loop_S"),
            (e.FG_Loop_L = "FG_Loop_L"),
            (e.FG_Loop_S = "FG_Loop_S"),
            (e.Transform_L = "Transform_L"),
            (e.Transform_S = "Transform_S");
        })(ANIMATION_NAME$3 || (ANIMATION_NAME$3 = {}));
        var GameBg =
            ((_dec$n = ccclass$n("GameBg")),
            (_dec2$6 = property$7({ type: Node, tooltip: "L MG" })),
            (_dec3$5 = property$7({ type: Node, tooltip: "S MG" })),
            (_dec4$5 = property$7({ type: Node, tooltip: "L FG" })),
            (_dec5$4 = property$7({ type: Node, tooltip: "S FG" })),
            _dec$n(
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
                      "m_mgL",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgS",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgL",
                      _descriptor3$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgS",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_fadeInTime = 1),
                    (t.m_delayTime = 0.5),
                    (t.m_mg = null),
                    (t.m_fg = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    this.m_gameView = e;
                  }),
                  (o.ShowMg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_fgL.parent.active = !1),
                                    (this.m_mgL.parent.active = !0),
                                    this.m_gameView.IsLandscape
                                      ? ((this.m_mgS.active = !1),
                                        (this.m_mgL.active = !0),
                                        (this.m_mg = this.m_mgL))
                                      : ((this.m_mgL.active = !1),
                                        (this.m_mgS.active = !0),
                                        (this.m_mg = this.m_mgS));
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
                  (o.ShowFg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_fgL.parent.active = !0),
                                    (this.m_mgL.parent.active = !1),
                                    this.m_gameView.IsLandscape
                                      ? ((this.m_fgS.active = !1),
                                        (this.m_fgL.active = !0),
                                        (this.m_fg = this.m_fgL))
                                      : ((this.m_fgL.active = !1),
                                        (this.m_fgS.active = !0),
                                        (this.m_fg = this.m_fgS));
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
                  (o.ShowTransformToMg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    (t.GetMg().parent.active = !0),
                                      (t.GetFg().parent.active = !0);
                                    var o = t.GetMg().getComponent(UIOpacity),
                                      n = t.GetFg().getComponent(UIOpacity);
                                    (o.opacity = 0),
                                      (n.opacity = 255),
                                      (t.m_mg.active = !0),
                                      (t.m_fg.active = !0),
                                      tween(t.m_gameView)
                                        .delay(t.m_delayTime)
                                        .call(function () {
                                          (t.m_gameView.ManualComponent.FeatureInfoBtn.active =
                                            !0),
                                            (t.m_gameView.ManualComponent.ManulOpenLock =
                                              !1);
                                        })
                                        .start(),
                                      tween(n)
                                        .to(t.m_fadeInTime, { opacity: 0 })
                                        .start(),
                                      tween(o)
                                        .to(t.m_fadeInTime, { opacity: 255 })
                                        .call(function () {
                                          (t.m_fg.getComponent(
                                            UIOpacity
                                          ).opacity = 255),
                                            (t.m_fg.active = !1);
                                        })
                                        .delay(t.m_delayTime)
                                        .call(function () {
                                          e();
                                        })
                                        .start();
                                  })
                                );
                              case 1:
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
                  (o.GetMg = function () {
                    return (
                      this.m_gameView.IsLandscape
                        ? (this.m_mg = this.m_mgL)
                        : (this.m_mg = this.m_mgS),
                      this.m_mg
                    );
                  }),
                  (o.ShowTransformToFg = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    (o.GetMg().parent.active = !0),
                                      (o.GetFg().parent.active = !0);
                                    var n = o.GetMg().getComponent(UIOpacity),
                                      i = o.GetFg().getComponent(UIOpacity);
                                    (i.opacity = 0),
                                      (n.opacity = 255),
                                      (o.m_mg.active = !0),
                                      (o.m_fg.active = !0),
                                      tween(o.m_gameView)
                                        .delay(o.m_delayTime)
                                        .call(function () {
                                          (o.m_gameView.ManualComponent.FeatureInfoBtn.active =
                                            !1),
                                            (o.m_gameView.ManualComponent.ManulOpenLock =
                                              !0);
                                        })
                                        .start(),
                                      tween(n)
                                        .to(o.m_fadeInTime, { opacity: 0 })
                                        .start(),
                                      tween(i)
                                        .to(o.m_fadeInTime, { opacity: 255 })
                                        .call(function () {
                                          (o.m_mg.getComponent(
                                            UIOpacity
                                          ).opacity = 255),
                                            (o.m_mg.active = !1),
                                            o.m_gameView.FgCounterSpine.ShowFgCounter(
                                              t
                                            ),
                                            e();
                                        })
                                        .start();
                                  })
                                );
                              case 1:
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
                  (o.GetFg = function () {
                    return (
                      this.m_gameView.IsLandscape
                        ? (this.m_fg = this.m_fgL)
                        : (this.m_fg = this.m_fgS),
                      this.m_fg
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_mgL",
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
              (_descriptor2$5 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_mgS",
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
              (_descriptor3$5 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_fgL",
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
              (_descriptor4$4 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_fgS",
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
              (_class$n = _class2$8))
            ) || _class$n),
          _dec$o,
          _dec2$7,
          _dec3$6,
          _dec4$6,
          _class$o,
          _class2$9,
          _descriptor$8,
          _descriptor2$6,
          _descriptor3$6;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ceac8MgHLFAEZTkFbu11f48",
            "DeclareSpine",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          property$8 = _decorator.property,
          ANIMATION_NAME$4;
        !(function (e) {
          (e.START = "Start"), (e.LOOP = "Loop"), (e.END = "End");
        })(ANIMATION_NAME$4 || (ANIMATION_NAME$4 = {}));
        var DeclareSpine =
            ((_dec$o = ccclass$o("DeclareSpine")),
            (_dec2$7 = property$8({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec3$6 = property$8({ type: Label, tooltip: "局數數字" })),
            (_dec4$6 = property$8({ type: Sprite, tooltip: "轉場文字" })),
            _dec$o(
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
                      "m_declare",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundNum",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_declareText",
                      _descriptor3$6,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e), (this.node.active = !1);
                  }),
                  (o.ShowDeclare = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (this.m_roundNum.string = t.toString()),
                                    node$1.Play(
                                      Game_Define.AudioClips.FG_Declare
                                    ),
                                    (e.next = 5),
                                    this.SetDeclareAnimation(
                                      ANIMATION_NAME$4.START,
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowDeclareEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.SetDeclareAnimation(
                                      ANIMATION_NAME$4.END,
                                      !1
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
                  (o.SetDeclareAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = !1),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_declare,
                                      t,
                                      o,
                                      0,
                                      n
                                    )
                                  );
                                case 3:
                                  if (!e.sent) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 6:
                                  this.DeclareComplete(t);
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.DeclareComplete = function (e) {
                    switch (e) {
                      case ANIMATION_NAME$4.START:
                        this.SetDeclareAnimation(ANIMATION_NAME$4.LOOP, !0);
                        break;
                      case ANIMATION_NAME$4.END:
                        this.node.active = !1;
                    }
                  }),
                  (o.SetTxt = function (e) {
                    for (
                      var t = node$c.GetGameAtlas(), o = 0;
                      o < this.m_declareText.length;
                      o++
                    ) {
                      t.getSpriteFrame(e[o]) &&
                        (this.m_declareText[o].spriteFrame = t.getSpriteFrame(
                          e[o]
                        ));
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_declare",
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
                _class2$9.prototype,
                "m_roundNum",
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
              (_descriptor3$6 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_declareText",
                [_dec4$6],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$o = _class2$9))
            ) || _class$o),
          _dec$p,
          _dec2$8,
          _dec3$7,
          _dec4$7,
          _dec5$5,
          _class$p,
          _class2$a,
          _descriptor$9,
          _descriptor2$7,
          _descriptor3$7,
          _descriptor4$5,
          _class3$3;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "b2ba6k9t4FPC4qDIPr//TBc",
            "ComplimentSpine",
            void 0
          );
        var ccclass$p = _decorator.ccclass,
          property$9 = _decorator.property,
          ANIMATION_NAME$5,
          Event_AnimName$1;
        !(function (e) {
          (e.START = "Start"), (e.LOOP = "Loop"), (e.END = "End");
        })(ANIMATION_NAME$5 || (ANIMATION_NAME$5 = {})),
          (function (e) {
            e.ScoreStop = "ScoreStop";
          })(Event_AnimName$1 || (Event_AnimName$1 = {}));
        var ComplimentSpine =
            ((_dec$p = ccclass$p("ComplimentSpine")),
            (_dec2$8 = property$9({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec3$7 = property$9({ type: Label, tooltip: "贏分數字" })),
            (_dec4$7 = property$9({ type: Label, tooltip: "局數數字" })),
            (_dec5$5 = property$9({ type: Sprite, tooltip: "結算文字" })),
            _dec$p(
              ((_class3$3 = (function (e) {
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
                      "m_compliment",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winNum",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundNum",
                      _descriptor3$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_complimentText",
                      _descriptor4$5,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = void 0),
                    (t.m_win = 0),
                    (t.m_showWin = 0),
                    (t.m_step = 0),
                    (t.m_totalTime = 0),
                    (t.m_isShowAward = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e), (this.node.active = !1);
                  }),
                  (o.ShowCompliment = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (this.m_showWin = 0),
                                    (this.m_win = t),
                                    (this.m_totalTime =
                                      this.m_compliment.findAnimation(
                                        ANIMATION_NAME$5.START
                                      ).duration),
                                    (this.m_step = node$2.divide(
                                      this.m_win,
                                      37 * this.m_totalTime
                                    )),
                                    (this.m_roundNum.string = o.toString()),
                                    (this.m_winNum.string = "0"),
                                    (this.m_isShowAward = !0),
                                    node$1.Play(Game_Define.AudioClips.FG_End),
                                    (e.next = 11),
                                    this.SetComplimentAnimation(
                                      ANIMATION_NAME$5.START,
                                      !1,
                                      function (e) {
                                        e === Event_AnimName$1.ScoreStop &&
                                          (n.m_showWin = n.m_win);
                                      }
                                    )
                                  );
                                case 11:
                                  this.SetComplimentAnimation(
                                    ANIMATION_NAME$5.LOOP,
                                    !0
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowComplimentEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = new Array()).push(
                                      this.m_gameView.Character.PlayBigWinEnd()
                                    ),
                                    t.push(
                                      this.m_gameView.GameBg.ShowTransformToMg()
                                    ),
                                    t.push(
                                      this.m_gameView.FgCounterSpine.ShowFgCounterEnd()
                                    ),
                                    t.push(
                                      this.SetComplimentAnimation(
                                        ANIMATION_NAME$5.END,
                                        !1
                                      )
                                    ),
                                    (e.next = 7),
                                    Promise.all(t)
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
                  (o.SetComplimentAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = !1),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_compliment,
                                      t,
                                      o,
                                      0,
                                      n
                                    )
                                  );
                                case 3:
                                  if (!e.sent) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 6:
                                  this.Complete(t);
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.Complete = function (e) {
                    switch (e) {
                      case ANIMATION_NAME$5.END:
                        this.node.active = !1;
                    }
                  }),
                  (o.SetTxt = function (e) {
                    for (
                      var t = node$c.GetGameAtlas(), o = 0;
                      o < this.m_complimentText.length;
                      o++
                    ) {
                      t.getSpriteFrame(e[o]) &&
                        (this.m_complimentText[o].spriteFrame =
                          t.getSpriteFrame(e[o]));
                    }
                  }),
                  (o.update = function (e) {
                    this.m_isShowAward &&
                      ((this.m_showWin += this.m_step),
                      this.m_showWin >= this.m_win &&
                        ((this.m_showWin = this.m_win),
                        (this.m_isShowAward = !1)),
                      (this.m_winNum.string = node$2.FormatNumberThousands(
                        node$2.strip(
                          Game_Define.ShowDisplayValue
                            ? Game_Define.ShowDisplayValue(this.m_showWin)
                            : this.m_showWin
                        ),
                        node$2.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                      )));
                  }),
                  t
                );
              })(Component)),
              (_class3$3.AnimEvent = { AnimationEvent: "AnimationEvent" }),
              (_class2$a = _class3$3),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_compliment",
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
                _class2$a.prototype,
                "m_winNum",
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
              (_descriptor3$7 = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_roundNum",
                [_dec4$7],
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
                _class2$a.prototype,
                "m_complimentText",
                [_dec5$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$p = _class2$a))
            ) || _class$p),
          _dec$q,
          _dec2$9,
          _dec3$8,
          _dec4$8,
          _class$q,
          _class2$b,
          _descriptor$a,
          _descriptor2$8,
          _descriptor3$8;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "5e092UQ2bBOuKoC++pgZmA1",
            "MoroSpinSpine",
            void 0
          );
        var ccclass$q = _decorator.ccclass,
          property$a = _decorator.property,
          ANIMATION_NAME$6;
        !(function (e) {
          e.Start = "Start";
        })(ANIMATION_NAME$6 || (ANIMATION_NAME$6 = {}));
        var MoroSpinSpine =
            ((_dec$q = ccclass$q("MoroSpinSpine")),
            (_dec2$9 = property$a({ type: sp.Skeleton, tooltip: "動畫" })),
            (_dec3$8 = property$a({ type: Label, tooltip: "局數數字" })),
            (_dec4$8 = property$a({ type: Sprite, tooltip: "加局文字" })),
            _dec$q(
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
                      "m_moroSpin",
                      _descriptor$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundNum",
                      _descriptor2$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_moroSpinText",
                      _descriptor3$8,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e), (this.node.active = !1);
                  }),
                  (o.ShowMoroSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.node.active = !0),
                                    (this.m_roundNum.string = t.toString()),
                                    node$1.Play(Game_Define.AudioClips.FG_Add),
                                    (e.next = 5),
                                    this.SetMoroSpinAnimation(
                                      ANIMATION_NAME$6.Start,
                                      !1
                                    )
                                  );
                                case 5:
                                  return (
                                    (e.next = 7),
                                    this.m_gameView.FgCounterSpine.ShowFgAddHit(
                                      t,
                                      o
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.SetMoroSpinAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o, n) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === o && (o = !1),
                                    (e.next = 3),
                                    SpineKit.PlayAnimation(
                                      this.m_moroSpin,
                                      t,
                                      o,
                                      0,
                                      n
                                    )
                                  );
                                case 3:
                                  if (!e.sent) {
                                    e.next = 6;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 6:
                                  this.node.active = !1;
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
                    return function (t, o, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.SetTxt = function (e) {
                    for (
                      var t = node$c.GetGameAtlas(), o = 0;
                      o < this.m_moroSpinText.length;
                      o++
                    ) {
                      t.getSpriteFrame(e[o]) &&
                        (this.m_moroSpinText[o].spriteFrame = t.getSpriteFrame(
                          e[o]
                        ));
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_moroSpin",
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
                _class2$b.prototype,
                "m_roundNum",
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
              (_descriptor3$8 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_moroSpinText",
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
              (_class$q = _class2$b))
            ) || _class$q),
          _dec$r,
          _dec2$a,
          _dec3$9,
          _class$r,
          _class2$c,
          _descriptor$b,
          _descriptor2$9;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "c8c3dGSY85ECrkxugORU8Y2", "Win", void 0);
        var ccclass$r = _decorator.ccclass,
          property$b = _decorator.property,
          ANIMATION_NAME$7;
        !(function (e) {
          (e.Win_Start_1 = "Win_Start_1"),
            (e.Win_Loop = "Win_Loop"),
            (e.Win_End = "Win_End"),
            (e.Win_Multiply = "Win_Multiply");
        })(ANIMATION_NAME$7 || (ANIMATION_NAME$7 = {}));
        var Win =
            ((_dec$r = ccclass$r("Win")),
            (_dec2$a = property$b({ type: Animation, tooltip: "動畫" })),
            (_dec3$9 = property$b({ type: Label, tooltip: "動畫" })),
            _dec$r(
              ((_class2$c = (function (e) {
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
                      "m_winNumAnime",
                      _descriptor$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winNumLable",
                      _descriptor2$9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e),
                      (this.m_winNumAnime.node.parent.active = !1);
                  }),
                  (o.ShowStart = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_winNumAnime.node.parent.active =
                                      !0),
                                    (this.m_winNumLable.string = t),
                                    (e.next = 4),
                                    this.SetWinNumAnimation(
                                      ANIMATION_NAME$7.Win_Start_1
                                    )
                                  );
                                case 4:
                                  this.Complete(ANIMATION_NAME$7.Win_Start_1);
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
                  (o.ShowHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_winNumAnime.node.parent.active =
                                      !0),
                                    (this.m_winNumLable.string = t),
                                    (e.next = 4),
                                    this.SetWinNumAnimation(
                                      ANIMATION_NAME$7.Win_Multiply
                                    )
                                  );
                                case 4:
                                  (this.m_winNumLable.string = t),
                                    this.Complete(
                                      ANIMATION_NAME$7.Win_Multiply
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
                  (o.ShowEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this.SetWinNumAnimation(
                                      ANIMATION_NAME$7.Win_End
                                    )
                                  );
                                case 2:
                                  this.Complete(ANIMATION_NAME$7.Win_End);
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
                  (o.SetWinNumAnimation = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var o,
                          n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (o = Game_Define.TimeScale()),
                                    (this.m_winNumAnime.getState(t).speed = o),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e) {
                                        n.m_winNumAnime.once(
                                          Animation.EventType.FINISHED,
                                          function () {
                                            e();
                                          }
                                        ),
                                          n.m_winNumAnime.play(t);
                                      })
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
                  (o.Complete = function (e) {
                    switch (e) {
                      case ANIMATION_NAME$7.Win_Start_1:
                        this.SetWinNumAnimation(ANIMATION_NAME$7.Win_Loop);
                        break;
                      case ANIMATION_NAME$7.Win_End:
                        this.m_winNumAnime.node.parent.active = !1;
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_winNumAnime",
                [_dec2$a],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_descriptor2$9 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_winNumLable",
                [_dec3$9],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                }
              )),
              (_class$r = _class2$c))
            ) || _class$r),
          _dec$s,
          _dec2$b,
          _dec3$a,
          _dec4$9,
          _dec5$6,
          _class$s,
          _class2$d,
          _descriptor$c,
          _descriptor2$a,
          _descriptor3$9,
          _descriptor4$6;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "358b0eyAYtCdIHb8vGWb92e",
            "HistorySpine",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          property$c = _decorator.property,
          B = 1e9,
          M = 1e6,
          K = 1e3,
          TEN_K = 1e4,
          HistorySpine =
            ((_dec$s = ccclass$s("HistorySpine")),
            (_dec2$b = property$c({
              type: Sprite,
              tooltip: "symbol的SpriteFrame",
            })),
            (_dec3$a = property$c({ type: Label, tooltip: "數量" })),
            (_dec4$9 = property$c({ type: Label, tooltip: "贏分" })),
            (_dec5$6 = property$c({ type: Label, tooltip: "乘倍" })),
            _dec$s(
              ((_class2$d = (function (e) {
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
                      "m_symbol",
                      _descriptor$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_count",
                      _descriptor2$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_win",
                      _descriptor3$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiplier",
                      _descriptor4$6,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.SetSymbolSprite = function (e) {
                    (this.m_symbol.spriteFrame = e),
                      (this.m_symbol.type = Sprite.Type.SIMPLE),
                      (this.m_symbol.sizeMode = Sprite.SizeMode.RAW),
                      (this.m_symbol.trim = !1);
                  }),
                  (o.SetText = function (e, t, o) {
                    (this.m_count.string = "X" + e.toString()),
                      (this.m_multiplier.string = "X" + o.toString()),
                      (this.m_multiplier.string =
                        o > K
                          ? "X" +
                            node$2.FormatNumberThousands(
                              o / K,
                              node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO,
                              !0,
                              2
                            ) +
                            "K"
                          : "X" + o.toString()),
                      (this.m_win.string =
                        t > B
                          ? node$2.FormatNumberThousands(
                              t / B,
                              node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO,
                              !0,
                              2
                            ) + "B"
                          : t > M
                          ? node$2.FormatNumberThousands(
                              t / M,
                              node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO,
                              !0,
                              2
                            ) + "M"
                          : t > TEN_K
                          ? node$2.FormatNumberThousands(
                              t / K,
                              node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO,
                              !0,
                              2
                            ) + "K"
                          : node$2.FormatNumberThousands(
                              t,
                              node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO,
                              !0,
                              2
                            ));
                  }),
                  t
                );
              })(Component)),
              (_descriptor$c = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_symbol",
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
              (_descriptor2$a = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_count",
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
                "m_win",
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
              (_descriptor4$6 = _applyDecoratedDescriptor(
                _class2$d.prototype,
                "m_multiplier",
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
              (_class$s = _class2$d))
            ) || _class$s),
          _dec$t,
          _dec2$c,
          _dec3$b,
          _dec4$a,
          _dec5$7,
          _dec6$4,
          _dec7$2,
          _dec8$2,
          _class$t,
          _class2$e,
          _descriptor$d,
          _descriptor2$b,
          _descriptor3$a,
          _descriptor4$7,
          _descriptor5$4,
          _descriptor6$2,
          _descriptor7$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "94a37bIEVBDjYDE0n2ASjXW", "History", void 0);
        var ccclass$t = _decorator.ccclass,
          property$d = _decorator.property,
          History =
            ((_dec$t = ccclass$t("History")),
            (_dec2$c = property$d({
              type: SpriteFrame,
              tooltip: "symbol的SpriteFrame",
            })),
            (_dec3$b = property$d({ type: Prefab, tooltip: "歷史資訊" })),
            (_dec4$a = property$d({ type: Label, tooltip: "贏分" })),
            (_dec5$7 = property$d({ type: Sprite, tooltip: "文字" })),
            (_dec6$4 = property$d({ type: Node, tooltip: "scope" })),
            (_dec7$2 = property$d({ type: Node, tooltip: "Pos S" })),
            (_dec8$2 = property$d({ type: Node, tooltip: "Pos L" })),
            _dec$t(
              ((_class2$e = (function (e) {
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
                      _descriptor$d,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_historyPrefab",
                      _descriptor2$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_win",
                      _descriptor3$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_historyText",
                      _descriptor4$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_scope",
                      _descriptor5$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_posS",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_posL",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_reels = new Array()),
                    (t.m_orgPos = new Array()),
                    (t.m_comboStageWin = 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e),
                      (Game_Define.HISTORY_REELS.VIEW_SIZE =
                        this.m_scope.getComponent(UITransform).contentSize),
                      (Game_Define.HISTORY_REELS.SYMBOL_SIZE = new Size(
                        Game_Define.HISTORY_REELS.VIEW_SIZE.width /
                          Game_Define.HISTORY_REELS.COL,
                        Game_Define.HISTORY_REELS.VIEW_SIZE.height /
                          Game_Define.HISTORY_REELS.ROW
                      )),
                      this.SetWinText(0),
                      NodePool.GetInstance().SetHistoryPrefabs(
                        this.m_historyPrefab
                      );
                  }),
                  (o.ShowDemoEnd = function () {
                    for (var e = 0; e < this.m_reels.length; e++) {
                      var t = this.m_reels[e];
                      t.SymbolNode.removeFromParent(),
                        NodePool.GetInstance().ReturnHistory(t);
                    }
                    (this.m_reels = []), this.SetWinText(0);
                  }),
                  (o.SetWinText = function (e) {
                    (this.m_win.string =
                      "$" +
                      node$2.FormatNumberThousands(
                        e,
                        node$2.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO
                      )),
                      (this.m_comboStageWin = e);
                  }),
                  (o.RecoverPlate = function () {
                    for (var e = 0; e < Game_Define.HISTORY_REELS.ROW; e++)
                      if (this.m_reels[e]) {
                        var t = this.m_reels[e];
                        Tween.stopAllByTarget(t.SymbolNode),
                          t.SymbolNode.setPosition(this.m_orgPos[e]),
                          t.SetSymbolActive(!0);
                      }
                    this.SetWinText(this.m_comboStageWin);
                  }),
                  (o.StartSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, o, n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_orgPos = new Array(),
                                      t = new Array(),
                                      o = 0;
                                    o < Game_Define.HISTORY_REELS.ROW;
                                    o++
                                  )
                                    this.m_reels[o] &&
                                      ((this.m_orgPos[o] =
                                        this.m_reels[
                                          o
                                        ].SymbolNode.getPosition()),
                                      (n = this.m_reels[o]).SetHardStop(
                                        node.IsHardStop
                                      ),
                                      n.SetSymbolActive(!0),
                                      t.push(
                                        n.LeavePlate(
                                          0,
                                          o,
                                          Game_Define.ReelDirection.DOWN
                                        )
                                      ));
                                  return (
                                    (this.m_win.string = "$0"),
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
                  (o.ShowNewPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.CleanHistory(), this.SetWinText(0);
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
                  (o.ShowExplode = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i,
                          r,
                          a,
                          s,
                          l,
                          c,
                          u,
                          m,
                          _,
                          p = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(t.length <= 0)) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  for (n = 0; n < t.length; n++)
                                    (i = t[n].Symbol ? t[n].Symbol : 0),
                                      (r = t[n].Win ? t[n].Win : 0),
                                      (a = t[n].Count ? t[n].Count : 0),
                                      (s = t[n].Mult ? t[n].Mult : 0),
                                      (l = null),
                                      (l = NodePool.GetInstance().GetHistory(
                                        Game_Define.HISTORY_REELS
                                      )),
                                      (c =
                                        l.SymbolNode.getComponent(
                                          HistorySpine
                                        )).SetSymbolSprite(
                                        this.m_symbolSpriteFrames[i]
                                      ),
                                      c.SetText(a, r, s),
                                      l.SetSymbolActive(!1),
                                      l.SetSymbolPosition(
                                        0,
                                        Game_Define.HISTORY_REELS.ROW + n
                                      ),
                                      this.m_reels.push(l),
                                      this.m_scope.addChild(l.SymbolNode);
                                  for (
                                    u = new Array(),
                                      m = function (e) {
                                        var o = p.m_reels[e],
                                          n =
                                            e -
                                            (p.m_reels.length -
                                              Game_Define.HISTORY_REELS.ROW);
                                        p.m_reels.length <=
                                        Game_Define.HISTORY_REELS.ROW
                                          ? u.push(
                                              o.MoveHistoryPlate(
                                                0,
                                                e,
                                                Game_Define.ReelDirection.DOWN,
                                                t.length
                                              )
                                            )
                                          : u.push(
                                              o.MoveHistoryPlate(
                                                0,
                                                n,
                                                Game_Define.ReelDirection.DOWN,
                                                t.length,
                                                function () {},
                                                function () {
                                                  n < 0 &&
                                                    o.SetSymbolActive(!1);
                                                },
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
                                      _ = 0;
                                    _ < this.m_reels.length;
                                    _++
                                  )
                                    m(_);
                                  return (e.next = 8), Promise.all(u);
                                case 8:
                                  this.CleanHistory(),
                                    (this.m_comboStageWin = node$2.plus(
                                      this.m_comboStageWin,
                                      o
                                    )),
                                    this.SetWinText(this.m_comboStageWin),
                                    node.SetWinValue(Game_Define.TotalWin);
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
                  (o.CleanHistory = function () {
                    for (var e = this.m_reels.length - 1; e >= 0; e--)
                      if (!this.m_reels[e].SymbolNode.active) {
                        var t = this.m_reels[e];
                        this.m_reels.splice(e, 1),
                          t.SymbolNode.removeFromParent(),
                          NodePool.GetInstance().ReturnHistory(t);
                      }
                  }),
                  (o.SetTxt = function (e) {
                    for (
                      var t = node$c.GetGameAtlas(), o = 0;
                      o < this.m_historyText.length;
                      o++
                    ) {
                      t.getSpriteFrame(e[o]) &&
                        (this.m_historyText[o].spriteFrame = t.getSpriteFrame(
                          e[o]
                        ));
                    }
                  }),
                  (o.OnRotation = function () {
                    this.m_gameView.IsLandscape
                      ? this.m_posL.addChild(this.node)
                      : this.m_posS.addChild(this.node);
                  }),
                  (o.UnShowPlate = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n, i, r, a, s, l, c;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (t && !(t.length <= 0)) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  for (n = 0; n < t.length; n++)
                                    (i = t[n].Symbol ? t[n].Symbol : 0),
                                      (r = t[n].Count ? t[n].Count : 0),
                                      (a = t[n].Win ? t[n].Win : 0),
                                      (s = t[n].Mult ? t[n].Mult : 0),
                                      (l = null),
                                      (l = NodePool.GetInstance().GetHistory(
                                        Game_Define.HISTORY_REELS
                                      )),
                                      (c =
                                        l.SymbolNode.getComponent(
                                          HistorySpine
                                        )).SetSymbolSprite(
                                        this.m_symbolSpriteFrames[i]
                                      ),
                                      c.SetText(r, a, s),
                                      l.SetSymbolActive(!0),
                                      l.SetSymbolPosition(0, n),
                                      this.m_reels.push(l),
                                      this.m_scope.addChild(l.SymbolNode);
                                  (this.m_comboStageWin = node$2.plus(
                                    this.m_comboStageWin,
                                    o
                                  )),
                                    this.SetWinText(this.m_comboStageWin);
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
                  t
                );
              })(Component)),
              (_descriptor$d = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_symbolSpriteFrames",
                [_dec2$c],
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
                _class2$e.prototype,
                "m_historyPrefab",
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
              (_descriptor3$a = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_win",
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
              (_descriptor4$7 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_historyText",
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
              (_descriptor5$4 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_scope",
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
                _class2$e.prototype,
                "m_posS",
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
              (_descriptor7$2 = _applyDecoratedDescriptor(
                _class2$e.prototype,
                "m_posL",
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
              (_class$t = _class2$e))
            ) || _class$t),
          _dec$u,
          _dec2$d,
          _dec3$c,
          _dec4$b,
          _dec5$8,
          _dec6$5,
          _class$u,
          _class2$f,
          _descriptor$e,
          _descriptor2$c,
          _descriptor3$b,
          _descriptor4$8,
          _descriptor5$5;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "32b68D4AT1MiqirEP0mOlys",
            "FgCounterSpine",
            void 0
          );
        var ccclass$u = _decorator.ccclass,
          property$e = _decorator.property,
          ANIMATION_NAME$8;
        !(function (e) {
          (e.Counter_Appear_L = "Counter_Appear_L"),
            (e.Counter_Appear_S = "Counter_Appear_S"),
            (e.Counter_Hide = "Counter_Hide"),
            (e.Counter_Add_MoreSpins = "Counter_Add_MoreSpins");
        })(ANIMATION_NAME$8 || (ANIMATION_NAME$8 = {}));
        var FgCounterSpine =
            ((_dec$u = ccclass$u("FgCounterSpine")),
            (_dec2$d = property$e({ type: Animation, tooltip: "動畫" })),
            (_dec3$c = property$e({ type: Node, tooltip: "root" })),
            (_dec4$b = property$e({ type: Label, tooltip: "目前局數數字" })),
            (_dec5$8 = property$e({ type: Label, tooltip: "局數數字" })),
            (_dec6$5 = property$e({ type: Sprite, tooltip: "結算文字" })),
            _dec$u(
              ((_class2$f = (function (e) {
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
                      "m_fgCounter",
                      _descriptor$e,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_root",
                      _descriptor2$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_newRoundNum",
                      _descriptor3$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundNum",
                      _descriptor4$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_complimentText",
                      _descriptor5$5,
                      _assertThisInitialized(t)
                    ),
                    (t.roundNum = 0),
                    (t.freeTotalRound = 0),
                    (t.m_gameView = void 0),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.Init = function (e) {
                    (this.m_gameView = e),
                      (this.node.active = !0),
                      (this.node.getComponent(UIOpacity).opacity =
                        SymbolOpacity.L);
                  }),
                  (o.ShowFgCounter = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  node$1.Play(Game_Define.AudioClips.FG_Board),
                                    (this.node.getComponent(UIOpacity).opacity =
                                      SymbolOpacity.H),
                                    (this.roundNum = t),
                                    (this.freeTotalRound = t),
                                    (this.m_newRoundNum.string =
                                      this.roundNum.toString()),
                                    (this.m_roundNum.string =
                                      this.roundNum.toString()),
                                    this.m_fgCounter.resume();
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
                  (o.ShowFgAddHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, o) {
                        var n,
                          i,
                          r = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.roundNum = this.roundNum + t),
                                    (this.freeTotalRound = o),
                                    (n =
                                      ANIMATION_NAME$8.Counter_Add_MoreSpins),
                                    (i = Game_Define.TimeScale()),
                                    (this.m_fgCounter.getState(n).speed = i),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e) {
                                        r.m_fgCounter.once(
                                          Animation.EventType.FINISHED,
                                          function () {
                                            e();
                                          }
                                        ),
                                          r.m_fgCounter.play(n),
                                          node$4
                                            .Wait(
                                              r,
                                              Game_Define.Time.CounterAdd
                                            )
                                            .then(function () {
                                              (r.m_newRoundNum.string =
                                                r.roundNum.toString()),
                                                (r.m_roundNum.string =
                                                  r.freeTotalRound.toString());
                                            });
                                      })
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
                    return function (t, o) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (o.ShowFgSpinHit = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  this.roundNum--,
                                    (this.m_newRoundNum.string =
                                      this.roundNum.toString());
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
                  (o.ShowFgCounterEnd = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t,
                          o,
                          n = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (t = ANIMATION_NAME$8.Counter_Hide),
                                    (o = Game_Define.TimeScale()),
                                    (this.m_fgCounter.getState(t).speed = o),
                                    e.abrupt(
                                      "return",
                                      new Promise(function (e) {
                                        n.m_fgCounter.once(
                                          Animation.EventType.FINISHED,
                                          function () {
                                            (n.node.getComponent(
                                              UIOpacity
                                            ).opacity = SymbolOpacity.L),
                                              (n.m_root.getComponent(
                                                UIOpacity
                                              ).opacity = SymbolOpacity.H),
                                              n.OnRotation(),
                                              e();
                                          }
                                        ),
                                          n.m_fgCounter.play(t);
                                      })
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
                  (o.SetFgCounterNum = function (e, t) {
                    var o = this.m_gameView.IsLandscape
                        ? ANIMATION_NAME$8.Counter_Appear_L
                        : ANIMATION_NAME$8.Counter_Appear_S,
                      n = this.m_fgCounter.getState(o);
                    (n.time = n.duration),
                      this.m_fgCounter.play(o),
                      (this.node.getComponent(UIOpacity).opacity =
                        SymbolOpacity.H),
                      (this.roundNum = e),
                      (this.freeTotalRound = t),
                      (this.m_newRoundNum.string = this.roundNum.toString()),
                      (this.m_roundNum.string = this.freeTotalRound.toString());
                  }),
                  (o.SetTxt = function (e) {
                    for (
                      var t = node$c.GetGameAtlas(), o = 0;
                      o < this.m_complimentText.length;
                      o++
                    ) {
                      t.getSpriteFrame(e[o]) &&
                        (this.m_complimentText[o].spriteFrame =
                          t.getSpriteFrame(e[o]));
                    }
                  }),
                  (o.OnRotation = function () {
                    var e = this;
                    if (
                      this.node.getComponent(UIOpacity).opacity !==
                      SymbolOpacity.H
                    ) {
                      var t = ANIMATION_NAME$8.Counter_Appear_S;
                      this.m_gameView.IsLandscape &&
                        (t = ANIMATION_NAME$8.Counter_Appear_L);
                      var o = Game_Define.TimeScale();
                      (this.m_fgCounter.getState(t).speed = o),
                        this.m_fgCounter.play(t),
                        node$4
                          .Wait(this, Game_Define.Time.CounterInit)
                          .then(function () {
                            e.m_fgCounter.pause();
                          });
                    }
                  }),
                  t
                );
              })(Component)),
              (_descriptor$e = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_fgCounter",
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
              (_descriptor2$c = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_root",
                [_dec3$c],
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
                _class2$f.prototype,
                "m_newRoundNum",
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
              (_descriptor4$8 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_roundNum",
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
              (_descriptor5$5 = _applyDecoratedDescriptor(
                _class2$f.prototype,
                "m_complimentText",
                [_dec6$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$u = _class2$f))
            ) || _class$u),
          _dec$v,
          _dec2$e,
          _dec3$d,
          _dec4$c,
          _dec5$9,
          _dec6$6,
          _dec7$3,
          _dec8$3,
          _dec9$2,
          _dec10$1,
          _dec11$1,
          _dec12$1,
          _dec13$1,
          _dec14$1,
          _dec15$1,
          _class$v,
          _class2$g,
          _descriptor$f,
          _descriptor2$d,
          _descriptor3$c,
          _descriptor4$9,
          _descriptor5$6,
          _descriptor6$3,
          _descriptor7$3,
          _descriptor8$2,
          _descriptor9$1,
          _descriptor10$1,
          _descriptor11$1,
          _descriptor12$1,
          _descriptor13$1,
          _descriptor14,
          _descriptor15;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "3b8adrk1qBBArZ2u/OabI1M", "GameView", void 0);
        var FADE_TYPE = { IN: 0, OUT: 1 },
          ccclass$v = _decorator.ccclass,
          property$f = _decorator.property,
          GameView =
            ((_dec$v = property$f({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec2$e = property$f({ type: Sprite, tooltip: "標題L Sprite" })),
            (_dec3$d = property$f({ type: Node, tooltip: "盤面本體" })),
            (_dec4$c = property$f({ type: Node, tooltip: "特效表演" })),
            (_dec5$9 = property$f({
              type: Character,
              tooltip: "characterNode 人物",
            })),
            (_dec6$6 = property$f({
              type: History,
              tooltip: "historyPlateNode 歷史訊息",
            })),
            (_dec7$3 = property$f({
              type: BigWinComponent,
              tooltip: "大獎表演",
            })),
            (_dec8$3 = property$f({ type: GameBg, tooltip: "背景" })),
            (_dec9$2 = property$f({
              type: GameIntro,
              tooltip: "前導動畫直橫版",
            })),
            (_dec10$1 = property$f({ type: Win, tooltip: "贏分動畫" })),
            (_dec11$1 = property$f({
              type: DeclareSpine,
              tooltip: "Declare動畫",
            })),
            (_dec12$1 = property$f({
              type: ComplimentSpine,
              tooltip: "結算動畫",
            })),
            (_dec13$1 = property$f({
              type: FgCounterSpine,
              tooltip: "FgCounter動畫",
            })),
            (_dec14$1 = property$f({
              type: MoroSpinSpine,
              tooltip: "MoroSpin動畫",
            })),
            (_dec15$1 = property$f({
              type: ManualComponent,
              tooltip: "特色描述",
            })),
            ccclass$v(
              ((_class2$g = (function (e) {
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
                      _descriptor$f,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprite",
                      _descriptor2$d,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReelsNode",
                      _descriptor3$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlateNode",
                      _descriptor4$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_character",
                      _descriptor5$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_historyPlate",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigWinNode",
                      _descriptor7$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameBgNode",
                      _descriptor8$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_gameintro",
                      _descriptor9$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winNode",
                      _descriptor10$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_declareSpineNode",
                      _descriptor11$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_complimentSpineNode",
                      _descriptor12$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgCounterSpineNode",
                      _descriptor13$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_moroSpinSpineNode",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_manualComponent",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    (t.m_spinAck = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_declare = void 0),
                    (t.m_moroSpinSpine = void 0),
                    (t.m_bigWin = void 0),
                    (t.m_bigWinSoundId = null),
                    (t.m_slotReels = null),
                    (t.m_effectPlate = null),
                    (t.m_gameBg = void 0),
                    (t.m_win = void 0),
                    (t.m_complimentSpine = void 0),
                    (t.m_fgCounterSpine = void 0),
                    (t.m_lastClickTime = void 0),
                    (t.m_isLandscape = !1),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_spinClickEvent = 0),
                    (t.m_isLock = !1),
                    (t.m_isChange = !1),
                    (t.m_isBottombarFinished = !1),
                    (t.m_bgFadeInTime = 1),
                    (t.m_isBgFadeIn = !1),
                    (t.m_bgAudioId = null),
                    (t.m_bgAudioName = null),
                    (t.m_isBgFadeOut = !1),
                    (t.m_changeBgAudio = null),
                    (t.m_realFeaturesSpinAck = null),
                    (t.m_isAutoShowFeatures = !1),
                    (t.m_autoplayInfos = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    (_cjsExports$1.util.Long = _cjsExports),
                      _cjsExports$1.configure(),
                      AstarteInit(),
                      (node$4.IsInMG = function () {
                        return !Game_Define.IsInFG;
                      }),
                      (node$4.CURRENCY_CHANGE_ENABLE = !0),
                      sys.isNative ||
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
                            Game_Define.Ver,
                            i
                          );
                          node$d.SendErrorLog(s);
                        });
                  }),
                  (o.start = function () {
                    var e = this;
                    node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      input.on(Input.EventType.KEY_DOWN, function (t) {
                        switch (t.keyCode) {
                          case KeyCode.SPACE:
                            node.SendSpinLog(),
                              node$a &&
                                !node$a.IsShowBackpack() &&
                                (node.BtnState == SlotBottomBarState.IDLE
                                  ? ((e.m_spinClickEvent =
                                      node$4.BTN_CLICK_EVENT.SPACE_SPIN),
                                    e.ClickSpin())
                                  : (node$5.Current() !=
                                      Game_Define.GameState.AWARD &&
                                      node$5.Current() !=
                                        Game_Define.GameState.LEAVE_FREE) ||
                                    e.ClickStopSpin());
                        }
                      }),
                      (this.m_bigWin =
                        this.m_bigWinNode.getComponent(BigWinComponent)),
                      this.m_bigWin.Init(
                        function (t, o, n) {
                          switch (o) {
                            case "Sound1":
                              null == e.m_bigWinSoundId
                                ? (e.m_bigWinSoundId = node$1.Play(
                                    Game_Define.AudioClips.Big_Win
                                  ))
                                : n == BigWinAnimName.Mega.Start
                                ? node$1.Play(
                                    Game_Define.AudioClips.ChangeWin_1
                                  )
                                : n == BigWinAnimName.Super.Start &&
                                  node$1.Play(
                                    Game_Define.AudioClips.ChangeWin_2
                                  );
                              break;
                            case "Sound2":
                              e.m_bigWinSoundId &&
                                (node$1.SetMusicFadeOut(e.m_bigWinSoundId, 0.5),
                                (e.m_bigWinSoundId = null));
                              var i = node$1.Play(
                                Game_Define.AudioClips.Big_win_end
                              );
                              node$1.SetMusicFadeIn(i, 0.5),
                                e.Character.PlayBigWinEnd();
                          }
                        },
                        function (e) {
                          return Game_Define.ShowDisplayValue
                            ? Game_Define.ShowDisplayValue(e)
                            : e;
                        }
                      ),
                      this.m_historyPlate.Init(this),
                      (this.m_slotReels =
                        this.m_slotReelsNode.getComponent(SlotReels)),
                      this.m_slotReels.Init(this),
                      (this.m_effectPlate =
                        this.m_effectPlateNode.getComponent(EffectPlate)),
                      this.m_effectPlate.Init(this, this.m_slotReels),
                      (this.m_gameintro =
                        this.m_gameintro.getComponent(GameIntro)),
                      this.m_gameintro.Init(this),
                      (this.m_gameBg = this.m_gameBgNode.getComponent(GameBg)),
                      this.m_gameBg.Init(this),
                      (this.m_character =
                        this.m_character.getComponent(Character)),
                      this.m_character.Init(this),
                      (this.m_win = this.m_winNode.getComponent(Win)),
                      this.m_win.Init(this),
                      (this.m_declare =
                        this.m_declareSpineNode.getComponent(DeclareSpine)),
                      this.m_declare.Init(this),
                      (this.m_complimentSpine =
                        this.m_complimentSpineNode.getComponent(
                          ComplimentSpine
                        )),
                      this.m_complimentSpine.Init(this),
                      (this.m_fgCounterSpine =
                        this.m_fgCounterSpineNode.getComponent(FgCounterSpine)),
                      this.m_fgCounterSpine.Init(this),
                      (this.m_moroSpinSpine =
                        this.m_moroSpinSpineNode.getComponent(MoroSpinSpine)),
                      this.m_moroSpinSpine.Init(this),
                      this.OnRotation(),
                      node$2.AddOnRotationCb(function () {
                        e.OnRotation();
                      }),
                      this.GameIntro.Init(this);
                    var t = {};
                    (t[CommonState.IDLE] = new IdleState(this)),
                      (t[CommonState.WAIT_RES] = new WaitResState(this)),
                      (t[Game_Define.GameState.WAIT_READY] = new WaitReadyState(
                        this
                      )),
                      (t[Game_Define.GameState.PLATE_SHOW] = new PlateShowState(
                        this
                      )),
                      (t[Game_Define.GameState.FEATURE_SHOW] =
                        new FeatureShowState(this)),
                      (t[Game_Define.GameState.UNSHOW_PREPARE] =
                        new UnshowPerpareState(this)),
                      (t[CommonState.SPIN] = new SpinState(this)),
                      (t[Game_Define.GameState.EXPLODE] = new ExplodeState(
                        this
                      )),
                      (t[Game_Define.GameState.MATCHING_PATCH_UP] =
                        new MatchPatchingUpState(this)),
                      (t[Game_Define.GameState.ADD_FREE] = new AddFreeState(
                        this
                      )),
                      (t[Game_Define.GameState.AWARD] = new AwardState(this)),
                      (t[Game_Define.GameState.ROUND_SHOW_END] =
                        new RoundShowEndState()),
                      (t[CommonState.CHECK_STATE] = new CheckState(this)),
                      (t[Game_Define.GameState.ENTER_FREE] = new EnterFreeState(
                        this
                      )),
                      (t[Game_Define.GameState.LEAVE_FREE] = new LeaveFreeState(
                        this
                      )),
                      (t[Game_Define.GameState.ROUND_END] = new RoundEndState(
                        this
                      )),
                      node$5.Init(t),
                      node$5.NextState(CommonState.LOGIN),
                      node$9.SetGameCb(this);
                  }),
                  (o.OnExit = function () {
                    Tween.stopAllByTarget(this.node),
                      node$5.NextState(CommonState.GAME_CLOSE),
                      node$4.ALIVE_INTERVAL &&
                        (clearInterval(node$4.ALIVE_INTERVAL),
                        (node$4.ALIVE_INTERVAL = null)),
                      node.LeaveGame(),
                      tween(this.node)
                        .delay(0.5)
                        .call(function () {
                          node$2.CloseGameTab(!1);
                        })
                        .start(),
                      node.OnExit(),
                      Game_Define.OnExit();
                  }),
                  (o.SettingBottomBar = function () {
                    var e = this;
                    (node.VerString =
                      "v_" + node$4.VERSION + "_" + Game_Define.Ver),
                      node.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node.SetWinValue(0),
                      (Game_Define.ShowDisplayValue = function (e) {
                        return node.GetDisplayValue(e);
                      });
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$c.CurrLang
                    );
                    node.ShowPlayReady(
                      t,
                      function () {
                        return (
                          node$5.Current() !==
                            Game_Define.GameState.WAIT_READY ||
                          (node$5.NextState(Game_Define.GameState.PLATE_SHOW),
                          !1)
                        );
                      },
                      function () {
                        node$5.Current() === Game_Define.GameState.WAIT_READY &&
                          (node$a.IsFeaturesDemo
                            ? node$5.NextState(
                                Game_Define.GameState.FEATURE_SHOW
                              )
                            : node$5.NextState(
                                Game_Define.GameState.PLATE_SHOW
                              ));
                      }
                    ),
                      node.SetFollowNode(this.node),
                      node.SetAutoplayConfirmCb(function (t) {
                        node$e.Dispatch(CommonEventName.SpinReqNotify),
                          (e.m_autoplayInfos = JSON.parse(t));
                      }),
                      node.SetAutoPlaySettingPanelFreeGameString(
                        node$4.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME,
                        Game_Define.StringKey.BONUS_GAME_TXT
                      ),
                      node$f.AddCb({
                        StopAutoCb: function () {
                          node.ShowAutoPlayState(!1);
                        },
                      }),
                      node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_slotReelsNode.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            if (
                              (node.SendSpinLog(),
                              !node.IsAutoSpin ||
                                node$5.Current() == Game_Define.GameState.AWARD)
                            ) {
                              var o = !1,
                                n = Date.now();
                              if (null != e.m_lastClickTime)
                                n - e.m_lastClickTime > 1e3 && (o = !0);
                              else (e.m_lastClickTime = n), (o = !0);
                              if (!o) return;
                              e.BarTouchCb(t);
                            }
                          }
                        ),
                      node$9.IsTwice &&
                        node$2.CloseIntroLoading.push(function () {
                          node$9.HasUnshow &&
                            node$5.NextState(
                              Game_Define.GameState.UNSHOW_PREPARE
                            );
                        }),
                      (this.m_isBottombarFinished = !0);
                  }),
                  (o.update = function (e) {
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
                    this.SetTxt(),
                      node.SetTxt(),
                      null == node$a || node$a.SetTxt(),
                      node.SetAutoPlayPanelTxt(),
                      this.OnRotation(),
                      node$a.SetCanAutoShowRankboardUI(),
                      node.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    var e = function e(t, o) {
                        node$4.GameBundle.load(t, function (n, i) {
                          if (n) return error(n.message || n), void e(t, o);
                          o && o(i);
                        });
                      },
                      t = function (t) {
                        Object.prototype.hasOwnProperty.call(
                          Game_Define.AudioClips,
                          t
                        ) &&
                          e(Game_Define.AudioPathPre + t, function (e) {
                            Game_Define.AudioClips[t] = e;
                          });
                      };
                    for (var o in Game_Define.AudioClips) t(o);
                    node$4.APP && this.InitExtra(),
                      sys.isNative && node$6.LoadingComplete();
                  }),
                  (o.MemoryLog = function (e) {
                    if (
                      node$4.APP &&
                      !sys.isNative &&
                      window.performance &&
                      window.performance.memory
                    ) {
                      var t = window.performance.memory.jsHeapSizeLimit,
                        o = window.performance.memory.totalJSHeapSize,
                        n = window.performance.memory.usedJSHeapSize;
                      if (t > 0 && o > 0 && n > 0) {
                        var i =
                          e + ">Limit:" + t + ", Total:" + o + ", Used:" + n;
                        this.SendVerificationEvent(200, i);
                      }
                    }
                  }),
                  (o.SendVerificationEvent = function (e, t) {
                    if (node$4.APP) {
                      var o = "",
                        n = node$2.GetLinkParameterByName("ssoKey") || "";
                      this.m_spinAck &&
                        (o = (o = node.GetLogIndex()).split(" ")[1]),
                        node$d.SendVerificationEvent(
                          node$d.FormVerificationEventParams(
                            Number(node$4.APP.GetAID()),
                            Number(node$4.NOW_GAME_ID),
                            Game_Define.Ver,
                            e,
                            t,
                            n,
                            node$4.APP.GetApiID(),
                            o
                          )
                        );
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
                  (o.StartSpin = function () {
                    this.m_slotReels.StartSpin(),
                      node.SetWinValue(0),
                      node.IsHardStop && node.SetSpinWithSpeed();
                  }),
                  (o.RetryRoundEnd = function () {
                    node$9.ReqRoundEnd(
                      Game_Define.Round + 1,
                      Game_Define.Round >= this.m_spinAck.RoundQueue.length - 1
                    );
                  }),
                  (o.CancelSpin = function () {
                    this.HistoryPlate.RecoverPlate(),
                      this.EffectPlate.RecoverPlate(),
                      this.SlotReels.RecoverPlate(),
                      (this.IsLock = !1),
                      this.IsChange && this.OnRotation();
                  }),
                  (o.GetSpinInfo = function () {
                    return null;
                  }),
                  (o.OnCommand = function (e, t) {
                    switch (e) {
                      case node$4.AckType.spin:
                      case node$4.AckType.lastSpin:
                        var o = _cjsExports$2.smgProto.SpinAck.decode(t);
                        this.OnRecvSpinAck(o);
                        break;
                      case node$4.AckType.info:
                        this.SettingBottomBar(),
                          node.AutoPlayPanelInit(),
                          node$a.FeaturesInit(
                            [
                              "/features/left/spriteFrame",
                              "/features/right/spriteFrame",
                            ],
                            [
                              Game_Define.StringKey.FEATURE_LEFT,
                              Game_Define.StringKey.FEATURE_RIGHT,
                            ],
                            3,
                            this.m_titleSpriteAtlas
                          );
                        var n = node$c.GetGameAtlas();
                        node$a.SetFeatruesDesc([
                          n.getSpriteFrame("txt1"),
                          n.getSpriteFrame("txt2"),
                        ]),
                          node$a.CheckFirstFeatures(),
                          this.LoginSuccess();
                        break;
                      case node$4.AckType.unshow:
                        this.m_unshowSpinAck =
                          _cjsExports$2.smgProto.SpinAck.decode(t);
                    }
                  }),
                  (o.OnRecvSpinAck = function (e) {
                    void 0 === e && (e = null),
                      (this.m_spinAck = e),
                      log("OnRecvSpinAck", this.m_spinAck),
                      Game_Define.IsInFG ||
                        ((Game_Define.TotalWin = 0),
                        Tween.stopAllByTarget(this.node)),
                      (Game_Define.PlateIdx = 0),
                      (Game_Define.Round = 0);
                    var t =
                      this.m_spinAck.RoundQueue[Game_Define.Round]
                        .ComboStageData[Game_Define.PlateIdx].ComboStageSymbol;
                    t
                      ? (this.m_slotReels.SetPlateInfo(t),
                        node.IsAutoSpin ||
                          node.SetSpinState(SlotBottomBarState.CLICK_STOP))
                      : node$5.NextState(CommonState.IDLE);
                  }),
                  (o.SetTxt = function () {
                    var e = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$c.CurrLang
                    );
                    e ||
                      (e = this.m_titleSpriteAtlas.getSpriteFrame(
                        "logo_" + node$4.Lang.EN
                      )),
                      this.m_titleSprite &&
                        (this.m_titleSprite.spriteFrame = e),
                      node$a && node$a.SetTxt(),
                      this.m_historyPlate.SetTxt(["TXT_History_01"]),
                      this.m_moroSpinSpine.SetTxt([
                        "TXT_FG_MoreSpin_01",
                        "TXT_FG_MoreSpin_02",
                      ]),
                      this.m_declare.SetTxt([
                        "TXT_FG_Declare_01",
                        "TXT_FG_Declare_02",
                        "TXT_FG_Declare_03",
                      ]),
                      this.m_complimentSpine.SetTxt([
                        "TXT_FG_Compliment_01",
                        "TXT_FG_Compliment_02",
                      ]),
                      this.m_fgCounterSpine.SetTxt(["TXT_FG_Counter_01"]),
                      this.m_manualComponent.SetTxt(["String_01"], "String_00");
                  }),
                  (o.OnRotation = function () {
                    if ((log("OnRotation"), this.m_isLock)) {
                      var e = screen.windowSize,
                        t = e.width > e.height;
                      return (
                        this.m_isLandscape && !t
                          ? view.setDesignResolutionSize(
                              Game_Define.VIEW.WIDTH,
                              Game_Define.VIEW.HEIGHT,
                              ResolutionPolicy.FIXED_WIDTH
                            )
                          : !this.m_isLandscape &&
                            t &&
                            view.setDesignResolutionSize(
                              Game_Define.VIEW.HEIGHT,
                              Game_Define.VIEW.WIDTH,
                              ResolutionPolicy.FIXED_HEIGHT
                            ),
                        void (this.m_isChange = !0)
                      );
                    }
                    this.m_isChange = !1;
                    var o = screen.windowSize;
                    (this.m_isLandscape = o.width > o.height),
                      this.m_isLandscape
                        ? (o.width / o.height <=
                          Game_Define.VIEW.WIDTH / Game_Define.VIEW.HEIGHT
                            ? view.setDesignResolutionSize(
                                Game_Define.VIEW.WIDTH,
                                Game_Define.VIEW.HEIGHT,
                                ResolutionPolicy.FIXED_WIDTH
                              )
                            : view.setDesignResolutionSize(
                                Game_Define.VIEW.WIDTH,
                                Game_Define.VIEW.HEIGHT,
                                ResolutionPolicy.FIXED_HEIGHT
                              ),
                          this.node.getComponent(Animation).play("GameView_L"))
                        : (o.height / o.width <=
                          Game_Define.VIEW.WIDTH / Game_Define.VIEW.HEIGHT
                            ? view.setDesignResolutionSize(
                                Game_Define.VIEW.HEIGHT,
                                Game_Define.VIEW.WIDTH,
                                ResolutionPolicy.FIXED_HEIGHT
                              )
                            : view.setDesignResolutionSize(
                                Game_Define.VIEW.HEIGHT,
                                Game_Define.VIEW.WIDTH,
                                ResolutionPolicy.FIXED_WIDTH
                              ),
                          this.node.getComponent(Animation).play("GameView_S")),
                      node &&
                        node.OnRotation(this.m_isLandscape, function () {}, !0),
                      node$a && node$a.OnRotation(this.m_isLandscape),
                      node$b.OnRotate(this.m_isLandscape),
                      Game_Define.IsInFG
                        ? this.GameBg.ShowFg()
                        : this.GameBg.ShowMg(),
                      this.FgCounterSpine.OnRotation(),
                      this.GameIntro.OnRotation(),
                      this.Character.OnRotation(),
                      this.HistoryPlate.OnRotation();
                  }),
                  (o.BarTouchCb = function (e) {
                    var t = this,
                      o = e.target.name;
                    switch ((log("BarTouchCb", o), o)) {
                      case this.m_slotReelsNode.name:
                        if (
                          node$2.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin)
                        )
                          return;
                        if (
                          node$5.Current() != CommonState.IDLE ||
                          node.IsAutoSpin
                        )
                          this.ClickStopSpin();
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
                            node$b.PushMessageBoxSetting(n);
                        } else
                          (this.m_spinClickEvent =
                            node$4.BTN_CLICK_EVENT.CLICK_PLATE),
                            this.ClickSpin();
                        break;
                      case BottomBar_UIName.BTN_SPIN:
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
                          !node$2.CheckSwitchOff(
                            SwitchOffKeyDefine.ShowAutoSetting
                          )
                        )
                          break;
                      case BottomBar_UIName.BTN_WISEAUTOPLAY:
                        node.IsAutoSpin &&
                          (node.ShowAutoPlayState(!1),
                          node.SetSpinState(SlotBottomBarState.CLICK_CANCEL)),
                          node.ShowAutoplaySettingView(node.GetChips());
                        break;
                      case BottomBar_UIName.BTN_AUTOSTOP_C:
                      case BottomBar_UIName.BTN_AUTOSTOP:
                        node.IsAutoSpin && node.ShowAutoPlayState(!1),
                          node$5.Current() == CommonState.SPIN
                            ? node.SetSpinState(
                                SlotBottomBarState.GET_AWARD_NO_AUTO
                              )
                            : node.SetSpinState(
                                SlotBottomBarState.CLICK_CANCEL
                              );
                    }
                  }),
                  (o.ClickSpin = function () {
                    if (!node$a.IsNowInDemoMenu)
                      if (
                        (node.GetChips() >=
                          node$2.strip(node.GetNowBetValue()) ||
                          Game_Define.IsInFG ||
                          node.IsFreeSpin) &&
                        node$g.IsBackpackPass() &&
                        !node$h.IsOpen()
                      )
                        node.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      else if (node$g.IsBackpackPass() && !node$h.IsOpen()) {
                        var e = node.GetBetList();
                        node$2.strip(node.GetNowBetValue()) ==
                          node$2.strip(e[0]) ||
                        node.GetChips() < node$2.strip(e[0])
                          ? node$b.ShowMessageBox(
                              node$4.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                            )
                          : node$b.ShowMessageBox(
                              node$4.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                            );
                      } else
                        node.SetSpinState(SlotBottomBarState.IDLE),
                          node$5.NextState(CommonState.IDLE);
                  }),
                  (o.ClickStopSpin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    !node$2.CheckSwitchOff(
                                      SwitchOffKeyDefine.NoQuickSpin
                                    )
                                  ) {
                                    e.next = 2;
                                    break;
                                  }
                                  return e.abrupt("return");
                                case 2:
                                  node$5.Current() ==
                                  Game_Define.GameState.AWARD
                                    ? (this.m_bigWin.Stop(),
                                      node.SetSpinState(
                                        SlotBottomBarState.CLICK_STOP_NO_AUTO
                                      ))
                                    : node.IsAutoSpin
                                    ? node.SetSpinState(
                                        SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                                      )
                                    : node.SetSpinState(
                                        SlotBottomBarState.CLICK_STOP
                                      ),
                                    node$1.Play(node$4.AudioClips.COMMON_BTN);
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
                  (o.ChangeBgMusic = function (e) {
                    null !== this.m_bgAudioId &&
                      (node$1.Stop(this.m_bgAudioId),
                      (this.m_bgAudioId = null)),
                      (this.m_bgAudioId = node$1.Play(e, !0)),
                      (this.m_bgAudioName = e.name);
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
                                    node.SetSpinState(
                                      SlotBottomBarState.CLICK_SPIN
                                    ),
                                    node$5.NextState(CommonState.SPIN),
                                    (e.next = 4),
                                    node$4.Wait(
                                      this,
                                      Game_Define.Time.DemoWaitSpin
                                    )
                                  );
                                case 4:
                                  (o = this.m_realFeaturesSpinAck[t]),
                                    this.OnRecvSpinAck(o);
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
                  (o.ChangeDemoPlateByRatio = function () {
                    this.m_realFeaturesSpinAck = new Array();
                    var e =
                        node.GetBetList()[
                          node.FindBetIndexByValue(Game_Define.DemoBet)
                        ],
                      t = JSON.parse(JSON.stringify(FeaturesAck.MG));
                    this.ChangeWinInfo(t, e),
                      this.m_realFeaturesSpinAck.push(t);
                    var o = JSON.parse(JSON.stringify(FeaturesAck.FG));
                    this.ChangeWinInfo(o, e),
                      this.m_realFeaturesSpinAck.push(o);
                  }),
                  (o.ChangeWinInfo = function (e, t) {
                    var o = node$2.divide(t, 1),
                      n = e.TotalWin ? e.TotalWin : 0;
                    e.TotalWin = node$2.times(n, o);
                    for (var i = 0; i < e.RoundQueue.length; i++) {
                      var r = e.RoundQueue[i];
                      r.RoundWin = node$2.times(r.RoundWin ? r.RoundWin : 0, o);
                      for (var a = 0; a < r.ComboStageData.length; a++) {
                        var s = r.ComboStageData[a];
                        if (
                          ((s.ComboStageWin = node$2.times(
                            s.ComboStageWin ? s.ComboStageWin : 0,
                            o
                          )),
                          s.AwardDataVec)
                        )
                          for (var l = 0; l < s.AwardDataVec.length; l++)
                            s.AwardDataVec[l].Win = node$2.times(
                              s.AwardDataVec[l].Win ? s.AwardDataVec[l].Win : 0,
                              o
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
                        node.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$e.Dispatch(CommonEventName.SpinReqNotify);
                      },
                      function () {
                        node.IsAutoSpin && node.ShowAutoPlayState(!1);
                      }
                    ),
                      node$l.NewInit(),
                      node$a.RankingInit(
                        [node$4.APP.GetAccount(), node$4.APP.GetNickName()],
                        node$4.APP.GetAToken(),
                        node$2.ConvertLanguageToFull(node$c.CurrLang),
                        null,
                        null,
                        function () {
                          e.ReqMail();
                        }
                      ),
                      node$h.Init();
                  }),
                  (o.ReqMail = function () {
                    node$4.APP && node$d.SendMailReq();
                  }),
                  _createClass(t, [
                    {
                      key: "Character",
                      get: function () {
                        return this.m_character;
                      },
                    },
                    {
                      key: "HistoryPlate",
                      get: function () {
                        return this.m_historyPlate;
                      },
                    },
                    {
                      key: "GameIntro",
                      get: function () {
                        return this.m_gameintro;
                      },
                    },
                    {
                      key: "ManualComponent",
                      get: function () {
                        return this.m_manualComponent;
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
                      key: "Declare",
                      get: function () {
                        return this.m_declare;
                      },
                    },
                    {
                      key: "MoroSpinSpine",
                      get: function () {
                        return this.m_moroSpinSpine;
                      },
                    },
                    {
                      key: "BigWin",
                      get: function () {
                        return this.m_bigWin;
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
                      key: "GameBg",
                      get: function () {
                        return this.m_gameBg;
                      },
                    },
                    {
                      key: "Win",
                      get: function () {
                        return this.m_winNode;
                      },
                    },
                    {
                      key: "ComplimentSpine",
                      get: function () {
                        return this.m_complimentSpine;
                      },
                    },
                    {
                      key: "FgCounterSpine",
                      get: function () {
                        return this.m_fgCounterSpine;
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
                      key: "BgAudioId",
                      get: function () {
                        return this.m_bgAudioId;
                      },
                    },
                    {
                      key: "RealFeaturesSpinAck",
                      get: function () {
                        return this.m_realFeaturesSpinAck;
                      },
                    },
                    {
                      key: "IsAutoShowFeatures",
                      get: function () {
                        return this.m_isAutoShowFeatures;
                      },
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
              (_descriptor$f = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_titleSpriteAtlas",
                [_dec$v],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor2$d = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_titleSprite",
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
              (_descriptor3$c = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_slotReelsNode",
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
              (_descriptor4$9 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_effectPlateNode",
                [_dec4$c],
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
                _class2$g.prototype,
                "m_character",
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
              (_descriptor6$3 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_historyPlate",
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
              (_descriptor7$3 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_bigWinNode",
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
                _class2$g.prototype,
                "m_gameBgNode",
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
              (_descriptor9$1 = _applyDecoratedDescriptor(
                _class2$g.prototype,
                "m_gameintro",
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
                _class2$g.prototype,
                "m_winNode",
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
                _class2$g.prototype,
                "m_declareSpineNode",
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
                _class2$g.prototype,
                "m_complimentSpineNode",
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
                _class2$g.prototype,
                "m_fgCounterSpineNode",
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
                _class2$g.prototype,
                "m_moroSpinSpineNode",
                [_dec14$1],
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
                _class2$g.prototype,
                "m_manualComponent",
                [_dec15$1],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$v = _class2$g))
            ) || _class$v),
          _dec$w,
          _class$w;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "dc07bi1yGBIEq8i9iSOs5f7",
            "AddFreeState",
            void 0
          );
        var ccclass$w = _decorator.ccclass,
          AddFreeState =
            ((_dec$w = ccclass$w("AddFreeState")),
            _dec$w(
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
                                    log("game state ADD_FREE"),
                                    (t =
                                      this.m_gameView.SpinAck.RoundQueue[
                                        Game_Define.Round
                                      ]),
                                    (o =
                                      t.ComboStageData[Game_Define.PlateIdx]),
                                    (this.m_gameView.IsLock = !0),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !0
                                    ),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !0
                                    ),
                                    this.m_gameView.Character.PlayScatterWin(),
                                    (e.next = 9),
                                    this.m_gameView.EffectPlate.PlayScatterWin(
                                      o.ComboStageSymbol
                                    )
                                  );
                                case 9:
                                  return (
                                    this.m_gameView.ChangeFadeType(
                                      FADE_TYPE.OUT,
                                      Game_Define.AudioClips.BGM_FG
                                    ),
                                    (e.next = 12),
                                    this.m_gameView.MoroSpinSpine.ShowMoroSpin(
                                      t.AddRounds,
                                      t.FreeTotalRound
                                    )
                                  );
                                case 12:
                                  return (
                                    this.m_gameView.EffectPlate.ClearScatterEffects(),
                                    this.m_gameView.SlotReels.ShowDarkOrLightSymbol(
                                      !1
                                    ),
                                    this.m_gameView.EffectPlate.ShowDarkOrLightCandy(
                                      !1
                                    ),
                                    (e.next = 17),
                                    this.m_gameView.Character.PlayScatterWinEnd()
                                  );
                                case 17:
                                  (this.m_gameView.IsLock = !1),
                                    this.m_gameView.IsChange &&
                                      this.m_gameView.OnRotation(),
                                    node$5.NextState(
                                      Game_Define.GameState.ROUND_END
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
            ) || _class$w);
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
