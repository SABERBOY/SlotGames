System.register(
  "chunks:///game.js",
  ["./index-12e7fa3b.js", "cc"],
  function (exports, module) {
    "use strict";
    var node,
      _applyDecoratedDescriptor,
      _inheritsLoose,
      _initializerDefineProperty,
      _assertThisInitialized,
      node$1,
      _asyncToGenerator,
      _regeneratorRuntime,
      node$2,
      _createClass,
      node$3,
      node$4,
      node$5,
      BoneFollow,
      node$6,
      SwitchOffKeyDefine,
      SlotBottomBarState,
      BaseState,
      node$7,
      node$8,
      Common_IdleState,
      CommonState,
      node$9,
      node$a,
      node$b,
      DEFAULT_TITLE_KEY,
      node$c,
      ExtraBetComponent,
      MarqueeComponent,
      AstarteInit,
      node$d,
      BetValueChange,
      BottomBar_UIName,
      node$e,
      node$f,
      node$g,
      CommonEventName,
      node$h,
      node$i,
      node$j,
      node$k,
      cclegacy,
      Enum,
      v3,
      _decorator,
      Animation,
      Label,
      UIOpacity,
      tween,
      Tween,
      Component,
      sp,
      error,
      Sprite,
      Font,
      Node,
      js,
      instantiate,
      color,
      Prefab,
      UITransform,
      Size,
      log,
      SpriteFrame,
      Vec3,
      BitmapFont,
      AnimationComponent,
      Button,
      SpriteAtlas,
      input,
      Input,
      KeyCode,
      screen,
      view,
      ResolutionPolicy;
    return {
      setters: [
        function (e) {
          (node = e.g),
            (_applyDecoratedDescriptor = e._),
            (_inheritsLoose = e.a),
            (_initializerDefineProperty = e.b),
            (_assertThisInitialized = e.c),
            (node$1 = e.l),
            (_asyncToGenerator = e.o),
            (_regeneratorRuntime = e.p),
            (node$2 = e.e),
            (_createClass = e.d),
            (node$3 = e.h),
            (node$4 = e.t),
            (node$5 = e.n),
            (BoneFollow = e.B),
            (node$6 = e.j),
            (SwitchOffKeyDefine = e.S),
            (SlotBottomBarState = e.u),
            (BaseState = e.v),
            (node$7 = e.w),
            (node$8 = e.i),
            (Common_IdleState = e.x),
            (CommonState = e.k),
            (node$9 = e.y),
            (node$a = e.z),
            (node$b = e.A),
            (DEFAULT_TITLE_KEY = e.D),
            (node$c = e.E),
            (ExtraBetComponent = e.F),
            (MarqueeComponent = e.M),
            (AstarteInit = e.G),
            (node$d = e.H),
            (BetValueChange = e.I),
            (BottomBar_UIName = e.J),
            (node$e = e.K),
            (node$f = e.L),
            (node$g = e.f),
            (CommonEventName = e.C),
            (node$h = e.N),
            (node$i = e.O),
            (node$j = e.P),
            (node$k = e.Q);
        },
        function (e) {
          (cclegacy = e.cclegacy),
            (Enum = e.Enum),
            (v3 = e.v3),
            (_decorator = e._decorator),
            (Animation = e.Animation),
            (Label = e.Label),
            (UIOpacity = e.UIOpacity),
            (tween = e.tween),
            (Tween = e.Tween),
            (Component = e.Component),
            (sp = e.sp),
            (error = e.error),
            (Sprite = e.Sprite),
            (Font = e.Font),
            (Node = e.Node),
            (js = e.js),
            (instantiate = e.instantiate),
            (color = e.color),
            (Prefab = e.Prefab),
            (UITransform = e.UITransform),
            (Size = e.Size),
            (log = e.log),
            (SpriteFrame = e.SpriteFrame),
            (Vec3 = e.Vec3),
            (BitmapFont = e.BitmapFont),
            (AnimationComponent = e.AnimationComponent),
            (Button = e.Button),
            (SpriteAtlas = e.SpriteAtlas),
            (input = e.input),
            (Input = e.Input),
            (KeyCode = e.KeyCode),
            (screen = e.screen),
            (view = e.view),
            (ResolutionPolicy = e.ResolutionPolicy);
        },
      ],
      execute: function () {
        var State, Symbol, EffectIdx;
        cclegacy._RF.push({}, "660adVuqUVHArmxt3MuiWZy", "MW_Define", void 0),
          (function (e) {
            (e[(e.WAIT_READY = 0)] = "WAIT_READY"),
              (e[(e.UNSHOW_PREPARE = 1)] = "UNSHOW_PREPARE"),
              (e[(e.PLATE_SHOW = 2)] = "PLATE_SHOW"),
              (e[(e.FEATURE_SHOW = 3)] = "FEATURE_SHOW"),
              (e[(e.CHECK_MYSTERY = 4)] = "CHECK_MYSTERY"),
              (e[(e.MYSTERY = 5)] = "MYSTERY"),
              (e[(e.GET_LAMP_AWARD = 6)] = "GET_LAMP_AWARD"),
              (e[(e.CHECK_MAX_FLAG = 7)] = "CHECK_MAX_FLAG"),
              (e[(e.AWARD = 8)] = "AWARD"),
              (e[(e.ROUND_SHOW_END = 9)] = "ROUND_SHOW_END"),
              (e[(e.ENTER_FREE = 10)] = "ENTER_FREE"),
              (e[(e.LEAVE_FREE = 11)] = "LEAVE_FREE"),
              (e[(e.ROUND_END = 12)] = "ROUND_END"),
              (e[(e.MULTI = 13)] = "MULTI");
          })(State || (State = {})),
          (function (e) {
            (e[(e.TEN = 0)] = "TEN"),
              (e[(e.J = 1)] = "J"),
              (e[(e.Q = 2)] = "Q"),
              (e[(e.K = 3)] = "K"),
              (e[(e.A = 4)] = "A"),
              (e[(e.KNIFE = 5)] = "KNIFE"),
              (e[(e.HAT = 6)] = "HAT"),
              (e[(e.CARPET = 7)] = "CARPET"),
              (e[(e.PALACE = 8)] = "PALACE"),
              (e[(e.LAMP1 = 9)] = "LAMP1"),
              (e[(e.LAMP2 = 10)] = "LAMP2"),
              (e[(e.LAMP3 = 11)] = "LAMP3"),
              (e[(e.LAMP5 = 12)] = "LAMP5"),
              (e[(e.LAMP10 = 13)] = "LAMP10"),
              (e[(e.LAMP20 = 14)] = "LAMP20"),
              (e[(e.LAMP50 = 15)] = "LAMP50"),
              (e[(e.WILD = 16)] = "WILD"),
              (e[(e.SCATTER = 17)] = "SCATTER"),
              (e[(e.MYSTERY = 18)] = "MYSTERY");
          })(Symbol || (Symbol = {})),
          (function (e) {
            (e[(e.NONE = 0)] = "NONE"),
              (e[(e.EFFECT = 1)] = "EFFECT"),
              (e[(e.WILD = 2)] = "WILD"),
              (e[(e.LABEL = 3)] = "LABEL"),
              (e[(e.MULTI = 4)] = "MULTI"),
              (e[(e.FG = 5)] = "FG"),
              (e[(e.BIGWIN = 6)] = "BIGWIN");
          })(EffectIdx || (EffectIdx = {}));
        var MW_Define = (function () {
            function e() {}
            return (
              (e.GetCoin = function (t) {
                var n = 0;
                switch (t) {
                  case e.Symbol.LAMP1:
                    n = node.times(e.Now_Bet, 1);
                    break;
                  case e.Symbol.LAMP2:
                    n = node.times(e.Now_Bet, 2);
                    break;
                  case e.Symbol.LAMP3:
                    n = node.times(e.Now_Bet, 3);
                    break;
                  case e.Symbol.LAMP5:
                    n = node.times(e.Now_Bet, 5);
                    break;
                  case e.Symbol.LAMP10:
                    n = node.times(e.Now_Bet, 10);
                    break;
                  case e.Symbol.LAMP20:
                    n = node.times(e.Now_Bet, 20);
                    break;
                  case e.Symbol.LAMP50:
                    n = node.times(e.Now_Bet, 50);
                }
                return n;
              }),
              (e.OnExit = function () {
                (this.ShowDisplayValue = null),
                  (this.AudioClips = {
                    Debut: null,
                    BGM_FG: null,
                    BGM_MG: null,
                    Big_win: null,
                    Big_win_end: null,
                    ChangeWin: null,
                    FG_End: null,
                    Lamp_get: null,
                    MG_NearWin: null,
                    Reel_Stop: null,
                    Scatter_bell: null,
                    Scatter1: null,
                    Small_win_01: null,
                    Small_win_02: null,
                    Small_win_03: null,
                    Special_coin: null,
                    Special_get: null,
                    SpecialBet_on: null,
                    Spin: null,
                    FG_Lampwin_01: null,
                    FG_Lampwin_02: null,
                    FG_Lampwin_03: null,
                    Wild_get: null,
                  });
              }),
              e
            );
          })(),
          _dec,
          _dec2,
          _class,
          _class2,
          _descriptor,
          _descriptor2;
        (MW_Define.Ver = "243"),
          (MW_Define.COL = 6),
          (MW_Define.MIN_ROW = 2),
          (MW_Define.MAX_ROW = 5),
          (MW_Define.ShowDisplayValue = null),
          (MW_Define.GAMEVIEW_STATE = Enum(State)),
          (MW_Define.Symbol = Enum(Symbol)),
          (MW_Define.SpecialType = Enum({ Normal: 0, Special: 1 })),
          (MW_Define.MultiRate = [1, 1.5]),
          (MW_Define.MaxLvl = 4),
          (MW_Define.Now_Bet = 1),
          (MW_Define.IsInFG = !1),
          (MW_Define.IsAutoSpin = !1),
          (MW_Define.AudioFileRoot = "Sound/"),
          (MW_Define.AudioFilePath = {
            Debut: "Debut",
            BGM_FG: "BGM_FG",
            BGM_MG: "BGM_MG",
            Big_win: "Big_win",
            Big_win_end: "Big_win_end",
            ChangeWin: "ChangeWin",
            FG_End: "FG_End",
            Lamp_get: "Lamp_get",
            MG_NearWin: "MG_NearWin",
            Reel_Stop: "Reel_Stop",
            Scatter_bell: "Scatter_bell",
            Scatter1: "Scatter1",
            Small_win_01: "Small_win_01",
            Small_win_02: "Small_win_02",
            Small_win_03: "Small_win_03",
            Special_coin: "Special_coin",
            Special_get: "Special_get",
            SpecialBet_on: "SpecialBet_on",
            Spin: "Spin",
            FG_Lampwin_01: "FG_Lampwin_01",
            FG_Lampwin_02: "FG_Lampwin_02",
            FG_Lampwin_03: "FG_Lampwin_03",
            Wild_get: "Wild_get",
          }),
          (MW_Define.AudioClips = {
            Debut: null,
            BGM_FG: null,
            BGM_MG: null,
            Big_win: null,
            Big_win_end: null,
            ChangeWin: null,
            FG_End: null,
            Lamp_get: null,
            MG_NearWin: null,
            Reel_Stop: null,
            Scatter_bell: null,
            Scatter1: null,
            Small_win_01: null,
            Small_win_02: null,
            Small_win_03: null,
            Special_coin: null,
            Special_get: null,
            SpecialBet_on: null,
            Spin: null,
            FG_Lampwin_01: null,
            FG_Lampwin_02: null,
            FG_Lampwin_03: null,
            Wild_get: null,
          }),
          (MW_Define.SPINE_ANIM_NAME = {
            combo2: "combo2",
            combo3: "combo3",
            combo4: "combo4",
            fg_combo2: "fg_combo2",
            fg_combo3: "fg_combo3",
            fg_combo4: "fg_combo4",
            fg_collect: "fg_collect",
            fg_fx_T1: "fg_fx_T1",
            fg_mystery: "fg_mystery",
            idle: "idle",
            idle1: "idle1",
            idle2: "idle2",
            fg_idle: "fg_idle",
            fg_idle1: "fg_idle1",
            fg_idle2: "fg_idle2",
            scatter_loop: "scatter_loop",
            scatter_start: "scatter_start",
          }),
          (MW_Define.SPIN_ACK_TYPE = {
            AT_SUCCESS: 0,
            AT_MONEY_NOT_ENOUGH: 302,
            AT_MONEY_ABNORMAL: 301,
            AT_MONEY_NOT_ENOUGH_SINGLE: 305,
            TRIAL_END: 8,
            API_BETONCE_FAIL: 2003,
          }),
          (MW_Define.AWARD_TYPE = {
            AWARD_TYPE_NON: 0,
            AWARD_TYPE_WAY: 1,
            AWARD_TYPE_LAMP: 2,
            AWARD_TYPE_GETFREE: 4,
            AWARD_TYPE_INFREE: 8,
            AWARD_TYPE_LEAVEFREE: 16,
            AWARD_TYPE_SHOWLAMP: 32,
            AWARD_TYPE_MAX: 32767,
          }),
          (MW_Define.AckType = {
            login: 0,
            exchangeChips: 2,
            info: 11,
            spin: 12,
            buyBonus: 36,
            heartBeat: 98,
            serverMsg: 99,
          }),
          (MW_Define.StringKey = {
            MW_FEATURES_LEFT: "FEATURE_LEFT",
            MW_FEATURES_RIGHT: "FEATURE_RIGHT",
          }),
          (MW_Define.SERVER_RET_TYPE = {
            SERVER_SUCCESS: 0,
            SERVER_ERROR_SEATE: 799,
            SERVER_NOUSE: 899,
            SERVER_MAINTAIN: 231,
            SERVER_SHUTDOWN: 232,
            SERVER_NEED_UID: 233,
            SERVER_NEED_LOGIN: 234,
            SERVER_TOKEN_ERROR: 235,
          }),
          (MW_Define.LOGIN_RESULT_TYPE = {
            LOGIN_SUCCESS: 0,
            LOGIN_FAIL: 241,
            API_VERIFY_FAIL: 211,
            API_LOGIN_REPEAT_FAIL: 2002,
          }),
          (MW_Define.HEART_BEAT_STATE = {
            NOTIFY: 97,
            MAINTAIN: 98,
            CLOSE: 99,
          }),
          (MW_Define.DelayType = { Normal: 0, Get: 1, NotGet: 2 }),
          (MW_Define.TimeoutType = { Ignore: 0, Handle: 1 }),
          (MW_Define.USE_ITEM_REASON = { NORMAL: 0, USING: 1 }),
          (MW_Define.FREE_MUTI_BALL_START_POS = {
            true: [
              v3(250, 330),
              v3(409, 330),
              v3(568, 330),
              v3(727, 330),
              v3(886, 330),
            ],
            false: [
              v3(312, 220),
              v3(440, 220),
              v3(568, 220),
              v3(692, 220),
              v3(816, 220),
            ],
          }),
          (MW_Define.FLY_FIRE_BALL_POS = {
            true: v3(90, 450),
            false: v3(390, 475),
          }),
          (MW_Define.BIG_WIN_SCALE = { true: 1, false: 0.9 }),
          (MW_Define.BIG_WIN_MASK_SCALE = { true: 1, false: 0.633 }),
          (MW_Define.GATA_ANI_SCALE = { true: 1, false: 0.58 }),
          (MW_Define.FeaturesSpinAck = [
            {
              RoundQueue: [
                {
                  CSD: [
                    {
                      CSS: [
                        [9, 7, 19, 0],
                        [4, 0, 17, 7, 3, 4],
                        [4, 4, 15, 18, 7, 9, 9],
                        [17, 0, 6],
                        [2, 0],
                        [18, 13, 11],
                      ],
                      CSW: 2,
                      CSM: 1,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 4,
                          LN: 2,
                          WIN: 2,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 4 },
                            { Col: 3, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[5], [9], [6], null, null, null],
                      NFS: [null, [29], null, [22], null, null],
                    },
                    {
                      CSS: [
                        [9, 19, 0, 5],
                        [4, 0, 29, 3, 4, 9],
                        [4, 4, 15, 18, 9, 9, 6],
                        [22, 0, 6],
                        [2, 0],
                        [18, 13, 11],
                      ],
                      CSW: 16,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 3,
                          LN: 8,
                          WIN: 16,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 4 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                      ],
                      FS: [[8], [9], [2, 7], null, null, null],
                      NFS: [[21], [30], null, null, null, null],
                    },
                    {
                      CSS: [
                        [21, 0, 5, 8],
                        [4, 0, 30, 3, 4, 9],
                        [4, 4, 15, 18, 6, 2, 7],
                        [22, 0, 6],
                        [2, 0],
                        [18, 13, 11],
                      ],
                      CSW: 2.7,
                      CSM: 3,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 3,
                          LN: 1,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                        {
                          S: 8,
                          C: 3,
                          LN: 1,
                          WIN: 1.5,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[6, 1], [1], null, null, null, null],
                      NFS: [null, null, [22, 21], null, null, null],
                    },
                    {
                      CSS: [
                        [21, 0, 6, 1],
                        [4, 0, 3, 4, 9, 1],
                        [4, 4, 22, 21, 6, 2, 7],
                        [22, 0, 6],
                        [2, 0],
                        [18, 13, 11],
                      ],
                      CSW: 1,
                      CSM: 5,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 1,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[8], [4], null, null, null, null],
                      NFS: [[30], null, [30], null, null, null],
                    },
                    {
                      CSS: [
                        [30, 0, 6, 8],
                        [4, 0, 3, 4, 9, 4],
                        [4, 4, 22, 30, 6, 2, 7],
                        [22, 0, 6],
                        [2, 0],
                        [18, 13, 11],
                      ],
                      CSW: 22.5,
                      CSM: 5,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 5,
                          LN: 2,
                          WIN: 3,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 1 },
                            { Col: 4, Row: 1 },
                          ],
                        },
                        {
                          S: 3,
                          C: 3,
                          LN: 1,
                          WIN: 1,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                        {
                          S: 4,
                          C: 3,
                          LN: 9,
                          WIN: 13.5,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                        {
                          S: 9,
                          C: 3,
                          LN: 1,
                          WIN: 5,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [
                        [5, 5],
                        [6, 6, 6, 4, 0, 6],
                        [5, 8, 0],
                        [6],
                        [1],
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [6, 8, 5, 5],
                        [6, 6, 6, 4, 0, 6],
                        [22, 6, 2, 7, 5, 8, 0],
                        [22, 6, 6],
                        [2, 1],
                        [18, 13, 11],
                      ],
                      CSW: 24,
                      CSM: 5,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 4,
                          LN: 8,
                          WIN: 24,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 1 },
                            { Col: 3, Row: 1 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[0], [9, 1, 3, 5], [5], [7, 9], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [8, 5, 5, 0],
                        [4, 0, 9, 1, 3, 5],
                        [22, 2, 7, 5, 8, 0, 5],
                        [22, 7, 9],
                        [2, 1],
                        [18, 13, 11],
                      ],
                      CSW: 8.5,
                      CSM: 5,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 3,
                          LN: 1,
                          WIN: 0.5,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                        {
                          S: 5,
                          C: 3,
                          LN: 4,
                          WIN: 8,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                      ],
                      FS: [[31, 1, 8], [5, 6], [31, 0, 5], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [8, 31, 1, 8],
                        [4, 9, 1, 3, 5, 6],
                        [22, 2, 7, 8, 31, 0, 5],
                        [22, 7, 9],
                        [2, 1],
                        [18, 13, 11],
                      ],
                      CSW: 0,
                      CSM: 5,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 76.7,
                  ATF: 3,
                  FRR: 0,
                  FCC: 0,
                  FCLV: 0,
                },
              ],
              TotalWin: 76.7,
              FreeTotalWin: 0,
              AckType: 0,
              ShowIndex: "",
              NowMoney: null,
              trialfinish: !1,
              trialaward: 0,
            },
            {
              RoundQueue: [
                {
                  CSD: [
                    {
                      CSS: [
                        [18, 31, 0, 1],
                        [7, 31, 8, 2],
                        [2, 2, 31],
                        [18, 3, 0, 31],
                        [0, 31, 2, 0],
                        [31, 4],
                      ],
                      CSW: 0,
                      CSM: 1,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0,
                  ATF: 4,
                  FRR: 16,
                  FCC: 0,
                  FCLV: 0,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [2, 5, 19, 1],
                        [3, 1],
                        [16, 8, 2, 2],
                        [3, 5],
                        [0, 9, 5, 6, 33],
                        [6, 33, 12, 3, 4],
                      ],
                      CSW: 0,
                      CSM: 2,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0,
                  ATF: 8,
                  FRR: 15,
                  FCC: 2,
                  FCLV: 0,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 7, 1],
                        [9, 7, 5],
                        [10, 3, 7],
                        [0, 7],
                        [2, 2, 33],
                        [33, 5, 5, 5, 0],
                      ],
                      CSW: 2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 4,
                          LN: 1,
                          WIN: 2,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 2 },
                            { Col: 3, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[1], [1], [2], [2], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 1, 1],
                        [9, 5, 1],
                        [10, 3, 2],
                        [0, 2],
                        [2, 2, 33],
                        [33, 5, 5, 5, 0],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 2,
                  ATF: 43,
                  FRR: 16,
                  FCC: 4,
                  FCLV: 1,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [3, 0, 0, 12],
                        [33, 6, 4],
                        [2, 7, 1, 1],
                        [6, 1, 2, 7],
                        [5, 3, 16, 12, 12],
                        [3, 1, 6, 5],
                      ],
                      CSW: 0,
                      CSM: 2,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0,
                  ATF: 8,
                  FRR: 15,
                  FCC: 5,
                  FCLV: 1,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 7, 9, 0],
                        [9, 4, 33, 9],
                        [7, 0, 0, 2, 15, 7],
                        [9, 5, 5, 33, 17],
                        [0, 0, 6],
                        [5, 5, 6],
                      ],
                      CSW: 1.6,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 2,
                          LN: 2,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[5], [6, 3], null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 7, 0, 5],
                        [4, 33, 6, 3],
                        [7, 0, 0, 2, 15, 7],
                        [9, 5, 5, 33, 17],
                        [0, 0, 6],
                        [5, 5, 6],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 1.6,
                  ATF: 43,
                  FRR: 16,
                  FCC: 7,
                  FCLV: 2,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 0, 5, 4],
                        [9, 1, 14, 5, 6, 6, 14],
                        [4, 4, 4, 4],
                        [4, 0, 33, 8, 3],
                        [9, 5, 2, 4],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 9.6,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 4,
                          C: 5,
                          LN: 8,
                          WIN: 9.6,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 2 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                            { Col: 4, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[4], null, [0, 5, 7, 2], [0], [6], null],
                      NFS: [null, [23, 23], null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 0, 5, 4],
                        [9, 1, 23, 5, 6, 6, 23],
                        [0, 5, 7, 2],
                        [0, 33, 8, 3, 0],
                        [9, 5, 2, 6],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 1.6,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 3,
                          LN: 1,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[4], [0], [0], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 0, 4, 4],
                        [9, 1, 23, 6, 6, 23, 0],
                        [0, 7, 2, 0],
                        [0, 33, 8, 3, 0],
                        [9, 5, 2, 6],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 4.8,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 4,
                          LN: 4,
                          WIN: 4.8,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                            { Col: 3, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[3], [6], [3, 6], [9, 9], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 4, 4, 3],
                        [9, 1, 23, 6, 6, 23, 6],
                        [7, 2, 3, 6],
                        [33, 8, 3, 9, 9],
                        [9, 5, 2, 6],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 6,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 2,
                          WIN: 6,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 2 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[6], null, [8], [9], null, null],
                      NFS: [null, [30, 30], null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 4, 4, 6],
                        [9, 1, 30, 6, 6, 30, 6],
                        [7, 2, 6, 8],
                        [33, 8, 9, 9, 9],
                        [9, 5, 2, 6],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 20,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 3,
                          LN: 5,
                          WIN: 20,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 1, Row: 5 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[0], [9, 1, 3, 5, 5], [2], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 4, 4, 0],
                        [9, 1, 9, 1, 3, 5, 5],
                        [7, 2, 8, 2],
                        [33, 8, 9, 9, 9],
                        [9, 5, 2, 6],
                        [3, 8, 5, 5, 6, 9],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 42,
                  ATF: 11,
                  FRR: 15,
                  FCC: 8,
                  FCLV: 2,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 5, 3, 9],
                        [1, 2, 0, 6],
                        [6, 2, 5, 4],
                        [7, 7, 4, 18],
                        [6, 33, 1, 7],
                        [3, 8, 6, 6],
                      ],
                      CSW: 0,
                      CSM: 2,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0,
                  ATF: 40,
                  FRR: 16,
                  FCC: 9,
                  FCLV: 3,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [3, 3, 5, 9, 0],
                        [5, 6, 6, 9, 33],
                        [2, 3, 7, 2, 2],
                        [8, 4, 9, 7, 1, 5],
                        [8, 1, 9, 0, 1, 7],
                        [6, 8, 8, 5, 2, 8, 9],
                      ],
                      CSW: 0.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[2], [6], null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [3, 3, 5, 0, 2],
                        [5, 6, 6, 33, 6],
                        [2, 3, 7, 2, 2],
                        [8, 4, 9, 7, 1, 5],
                        [8, 1, 9, 0, 1, 7],
                        [6, 8, 8, 5, 2, 8, 9],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0.8,
                  ATF: 11,
                  FRR: 15,
                  FCC: 10,
                  FCLV: 3,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 1, 1, 5, 0, 9, 2],
                        [6, 13, 4, 5, 9],
                        [0, 33, 7, 6, 2],
                        [0, 5, 4, 0, 7],
                        [11, 1, 1, 0, 5, 3],
                        [6, 5, 9, 6, 6, 1],
                      ],
                      CSW: 0.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[8], [4], null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 1, 1, 5, 0, 2, 8],
                        [6, 13, 4, 5, 4],
                        [0, 33, 7, 6, 2],
                        [0, 5, 4, 0, 7],
                        [11, 1, 1, 0, 5, 3],
                        [6, 5, 9, 6, 6, 1],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0.8,
                  ATF: 11,
                  FRR: 14,
                  FCC: 11,
                  FCLV: 3,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [3, 5, 9, 0, 2, 6],
                        [6, 5, 3, 33, 4],
                        [3, 0, 2, 0, 0],
                        [2, 7, 4, 9, 7],
                        [2, 4, 6, 8, 2],
                        [8, 8, 8, 16, 2],
                      ],
                      CSW: 0.4,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 3,
                          LN: 1,
                          WIN: 0.4,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[8], [0], [7], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 9, 0, 2, 6, 8],
                        [6, 5, 33, 4, 0],
                        [0, 2, 0, 0, 7],
                        [2, 7, 4, 9, 7],
                        [2, 4, 6, 8, 2],
                        [8, 8, 8, 16, 2],
                      ],
                      CSW: 1.2,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 3,
                          LN: 3,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 2 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[1], [2], [2, 6, 1], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 9, 2, 6, 8, 1],
                        [6, 5, 33, 4, 2],
                        [2, 7, 2, 6, 1],
                        [2, 7, 4, 9, 7],
                        [2, 4, 6, 8, 2],
                        [8, 8, 8, 16, 2],
                      ],
                      CSW: 16.8,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 2,
                          C: 6,
                          LN: 4,
                          WIN: 14.4,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 2 },
                            { Col: 3, Row: 0 },
                            { Col: 4, Row: 0 },
                            { Col: 4, Row: 4 },
                            { Col: 5, Row: 4 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 1,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 0 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[2, 2], [0, 6], [5, 4, 2], [1], [2, 9], [7]],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 9, 8, 1, 2, 2],
                        [5, 33, 4, 0, 6],
                        [7, 1, 5, 4, 2],
                        [7, 4, 9, 7, 1],
                        [4, 6, 8, 2, 9],
                        [8, 8, 8, 16, 7],
                      ],
                      CSW: 4,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 3,
                          LN: 1,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 0 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[5], [4], [9], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [9, 8, 1, 2, 2, 5],
                        [33, 4, 0, 6, 4],
                        [7, 1, 4, 2, 9],
                        [7, 4, 9, 7, 1],
                        [4, 6, 8, 2, 9],
                        [8, 8, 8, 16, 7],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 22.4,
                  ATF: 43,
                  FRR: 15,
                  FCC: 12,
                  FCLV: 4,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 9, 0, 8, 3, 0],
                        [6, 4, 13, 1, 7, 3],
                        [7, 5, 8, 0, 15, 3],
                        [18, 3, 0, 6, 6, 5],
                        [4, 1, 9, 2, 4, 4],
                        [2, 1, 9, 5, 5, 3, 1],
                      ],
                      CSW: 1.2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 2,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 5 },
                            { Col: 3, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[7], [33], [0], [0], null, null],
                      NFS: [null, [21], null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 9, 0, 8, 0, 7],
                        [6, 4, 21, 1, 7, 33],
                        [7, 5, 8, 0, 15, 0],
                        [18, 0, 6, 6, 5, 0],
                        [4, 1, 9, 2, 4, 4],
                        [2, 1, 9, 5, 5, 3, 1],
                      ],
                      CSW: 2,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 3,
                          LN: 1,
                          WIN: 2,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[1], [7], [5], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 9, 0, 8, 0, 1],
                        [6, 4, 21, 1, 33, 7],
                        [5, 8, 0, 15, 0, 5],
                        [18, 0, 6, 6, 5, 0],
                        [4, 1, 9, 2, 4, 4],
                        [2, 1, 9, 5, 5, 3, 1],
                      ],
                      CSW: 0,
                      CSM: 6,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 3.2,
                  ATF: 11,
                  FRR: 14,
                  FCC: 13,
                  FCLV: 4,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 1, 3, 6, 3, 5, 0],
                        [2, 2, 0, 6, 4, 3],
                        [6, 0, 0, 5, 7, 3],
                        [4, 3, 5, 8, 0, 2, 15],
                        [1, 4, 6, 4, 4, 1],
                        [6, 6, 1, 2, 3, 2],
                      ],
                      CSW: 2.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 4,
                          LN: 2,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 2 },
                            { Col: 3, Row: 4 },
                          ],
                        },
                        {
                          S: 3,
                          C: 4,
                          LN: 2,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 5 },
                            { Col: 3, Row: 1 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 0 },
                          ],
                        },
                      ],
                      FS: [
                        [4, 0, 8, 5],
                        [1, 7, 3],
                        [3, 8, 7, 1],
                        [5, 4],
                        null,
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 1, 5, 4, 0, 8, 5],
                        [2, 2, 4, 1, 7, 3],
                        [5, 7, 3, 8, 7, 1],
                        [4, 5, 8, 2, 15, 5, 4],
                        [1, 4, 6, 4, 4, 1],
                        [6, 6, 1, 2, 3, 2],
                      ],
                      CSW: 0.8,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                      ],
                      FS: [[0, 2], [6], [1], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 4, 0, 8, 5, 0, 2],
                        [2, 2, 4, 7, 3, 6],
                        [5, 7, 3, 8, 7, 1],
                        [4, 5, 8, 2, 15, 5, 4],
                        [1, 4, 6, 4, 4, 1],
                        [6, 6, 1, 2, 3, 2],
                      ],
                      CSW: 0,
                      CSM: 6,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 3.6,
                  ATF: 11,
                  FRR: 13,
                  FCC: 13,
                  FCLV: 4,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 1, 0, 5, 4, 4],
                        [3, 5, 6, 2, 7, 7, 9],
                        [2, 5, 8, 10, 3, 7, 6],
                        [33, 8, 5, 19, 9, 4],
                        [2, 1, 6, 1, 1, 11],
                        [4, 7, 1, 6, 8, 0],
                      ],
                      CSW: 1.2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 4,
                          LN: 1,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 1 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[0], [4], [0], [3], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 1, 0, 4, 4, 0],
                        [3, 6, 2, 7, 7, 9, 4],
                        [2, 8, 10, 3, 7, 6, 0],
                        [33, 8, 19, 9, 4, 3],
                        [2, 1, 6, 1, 1, 11],
                        [4, 7, 1, 6, 8, 0],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 1.2,
                  ATF: 11,
                  FRR: 12,
                  FCC: 14,
                  FCLV: 4,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [3, 1, 4, 5, 4, 0, 0],
                        [6, 7, 7, 4, 6, 0],
                        [5, 7, 2, 0, 33, 6],
                        [0, 4, 13, 5, 4, 3],
                        [2, 2, 9, 6, 4, 4, 5],
                        [19, 1, 3, 8, 9, 3, 4],
                      ],
                      CSW: 0.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 4,
                          LN: 2,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[8, 5], [6], [8], [5], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [3, 1, 4, 5, 4, 8, 5],
                        [6, 7, 7, 4, 6, 6],
                        [5, 7, 2, 33, 6, 8],
                        [4, 13, 5, 4, 3, 5],
                        [2, 2, 9, 6, 4, 4, 5],
                        [19, 1, 3, 8, 9, 3, 4],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0.8,
                  ATF: 43,
                  FRR: 13,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 5, 2, 2, 1, 3, 6],
                        [7, 3, 4, 6, 7, 4, 0],
                        [7, 2, 0, 4, 6, 8, 2],
                        [7, 7, 8, 3, 7, 5, 5],
                        [6, 1, 11, 1, 9, 5, 2],
                        [8, 3, 8, 8, 8, 6, 2],
                      ],
                      CSW: 1,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 3,
                          LN: 1,
                          WIN: 0.2,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[5, 5], [1, 8], [2, 5], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 2, 2, 1, 3, 5, 5],
                        [7, 3, 4, 7, 4, 1, 8],
                        [7, 2, 4, 8, 2, 2, 5],
                        [7, 7, 8, 3, 7, 5, 5],
                        [6, 1, 11, 1, 9, 5, 2],
                        [8, 3, 8, 8, 8, 6, 2],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 1,
                  ATF: 11,
                  FRR: 12,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 0, 1, 5, 8, 3, 2],
                        [7, 3, 0, 1, 6, 6, 3],
                        [7, 6, 2, 13, 8, 5, 4],
                        [0, 4, 9, 8, 5, 9, 9],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 0.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 3,
                          LN: 2,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[1], [7, 9], null, null, null, null],
                      NFS: [null, null, [20], null, null, null],
                    },
                    {
                      CSS: [
                        [0, 0, 1, 5, 8, 2, 1],
                        [7, 0, 1, 6, 6, 7, 9],
                        [7, 6, 2, 20, 8, 5, 4],
                        [0, 4, 9, 8, 5, 9, 9],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 1.6,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 4,
                          LN: 2,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[3, 3], [9], null, [4], null, null],
                      NFS: [null, null, [30], null, null, null],
                    },
                    {
                      CSS: [
                        [1, 5, 8, 2, 1, 3, 3],
                        [7, 1, 6, 6, 7, 9, 9],
                        [7, 6, 2, 30, 8, 5, 4],
                        [4, 9, 8, 5, 9, 9, 4],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 1.2,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[8, 6], [9], [4], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 8, 2, 3, 3, 8, 6],
                        [7, 6, 6, 7, 9, 9, 9],
                        [7, 6, 2, 8, 5, 4, 4],
                        [4, 9, 8, 5, 9, 9, 4],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 8,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 3,
                          LN: 2,
                          WIN: 8,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[5], [2, 5], [2], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 8, 2, 3, 3, 8, 5],
                        [7, 7, 9, 9, 9, 2, 5],
                        [7, 2, 8, 5, 4, 4, 2],
                        [4, 9, 8, 5, 9, 9, 4],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 16,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 2,
                          C: 3,
                          LN: 2,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                        {
                          S: 5,
                          C: 4,
                          LN: 2,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[2, 7, 9], [6, 6], [7, 5, 4], [3], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [8, 3, 3, 8, 2, 7, 9],
                        [7, 7, 9, 9, 9, 6, 6],
                        [7, 8, 4, 4, 7, 5, 4],
                        [4, 9, 8, 9, 9, 4, 3],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 32,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 3,
                          LN: 4,
                          WIN: 20,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 4 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 3,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[0, 5], [9, 1, 6, 7, 7], [3, 0], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [8, 3, 3, 8, 2, 0, 5],
                        [6, 6, 9, 1, 6, 7, 7],
                        [8, 4, 4, 5, 4, 3, 0],
                        [4, 9, 8, 9, 9, 4, 3],
                        [1, 2, 2, 6, 1, 8, 4],
                        [9, 3, 8, 4, 8, 1, 6],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 59.6,
                  ATF: 11,
                  FRR: 11,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [5, 2, 2, 6, 5, 4, 4],
                        [9, 1, 4, 5, 5, 5, 4],
                        [1, 1, 2, 5, 7, 2, 3],
                        [7, 14, 3, 5, 8, 0, 2],
                        [1, 1, 4, 2, 1, 2, 2],
                        [8, 1, 6, 8, 0, 9, 9],
                      ],
                      CSW: 7.2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 4,
                          LN: 6,
                          WIN: 7.2,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[1, 5], [0, 6, 8], [7], [5], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 2, 6, 4, 4, 1, 5],
                        [9, 1, 4, 4, 0, 6, 8],
                        [1, 1, 2, 7, 2, 3, 7],
                        [7, 14, 3, 8, 0, 2, 5],
                        [1, 1, 4, 2, 1, 2, 2],
                        [8, 1, 6, 8, 0, 9, 9],
                      ],
                      CSW: 0.8,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 0 },
                            { Col: 2, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[9], [1], [3, 3], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 2, 6, 4, 4, 5, 9],
                        [9, 4, 4, 0, 6, 8, 1],
                        [2, 7, 2, 3, 7, 3, 3],
                        [7, 14, 3, 8, 0, 2, 5],
                        [1, 1, 4, 2, 1, 2, 2],
                        [8, 1, 6, 8, 0, 9, 9],
                      ],
                      CSW: 2.4,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[3], [3], null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 2, 6, 4, 4, 5, 3],
                        [4, 4, 0, 6, 8, 1, 3],
                        [2, 7, 2, 3, 7, 3, 3],
                        [7, 14, 3, 8, 0, 2, 5],
                        [1, 1, 4, 2, 1, 2, 2],
                        [8, 1, 6, 8, 0, 9, 9],
                      ],
                      CSW: 9,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 3,
                          WIN: 9,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 2, Row: 5 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[2], [9], [2, 5, 8], [5], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 2, 6, 4, 4, 5, 2],
                        [4, 4, 0, 6, 8, 1, 9],
                        [2, 7, 2, 7, 2, 5, 8],
                        [7, 14, 8, 0, 2, 5, 5],
                        [1, 1, 4, 2, 1, 2, 2],
                        [8, 1, 6, 8, 0, 9, 9],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 19.4,
                  ATF: 11,
                  FRR: 10,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [10, 7, 1, 1, 2, 5, 0],
                        [2, 0, 6, 4, 3, 1, 7],
                        [8, 1, 3, 7, 6, 0, 0],
                        [0, 8, 8, 3, 0, 7, 7],
                        [4, 2, 9, 0, 0, 6, 6],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 14,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 5,
                          LN: 16,
                          WIN: 9.6,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 5 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 0 },
                            { Col: 3, Row: 4 },
                            { Col: 4, Row: 3 },
                            { Col: 4, Row: 4 },
                          ],
                        },
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 0.4,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 1 },
                          ],
                        },
                        {
                          S: 7,
                          C: 4,
                          LN: 2,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 5 },
                            { Col: 3, Row: 6 },
                          ],
                        },
                      ],
                      FS: [
                        [0, 0, 3, 6],
                        [3, 9, 7],
                        [5, 7, 3, 3],
                        [7, 0, 2, 7],
                        [9, 9],
                        null,
                      ],
                      NFS: [[23], null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [23, 2, 5, 0, 0, 3, 6],
                        [2, 6, 4, 3, 3, 9, 7],
                        [8, 3, 6, 5, 7, 3, 3],
                        [8, 8, 3, 7, 0, 2, 7],
                        [4, 2, 9, 6, 6, 9, 9],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 16,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 12,
                          WIN: 14.4,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 5 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 1,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[4, 5], [3, 4, 6], [8, 7, 1, 1], [8], null, null],
                      NFS: [[30], null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [30, 2, 5, 0, 0, 4, 5],
                        [2, 4, 9, 7, 3, 4, 6],
                        [8, 5, 7, 8, 7, 1, 1],
                        [8, 8, 7, 0, 2, 7, 8],
                        [4, 2, 9, 6, 6, 9, 9],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 26.4,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 4,
                          LN: 4,
                          WIN: 24,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 2 },
                            { Col: 2, Row: 4 },
                            { Col: 3, Row: 2 },
                            { Col: 3, Row: 5 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[1], [7, 1], [0, 7], [3, 4], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 5, 0, 0, 4, 5, 1],
                        [2, 4, 3, 4, 6, 7, 1],
                        [8, 5, 8, 1, 1, 0, 7],
                        [8, 8, 0, 2, 8, 3, 4],
                        [4, 2, 9, 6, 6, 9, 9],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 2,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 3,
                          LN: 2,
                          WIN: 2,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 2, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[1], [0], [6, 4], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 5, 0, 0, 4, 5, 1],
                        [2, 4, 3, 4, 6, 7, 0],
                        [8, 5, 8, 0, 7, 6, 4],
                        [8, 8, 0, 2, 8, 3, 4],
                        [4, 2, 9, 6, 6, 9, 9],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 16,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 4,
                          LN: 2,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                        {
                          S: 4,
                          C: 5,
                          LN: 2,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 6 },
                            { Col: 4, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[1, 8, 5], [1, 9, 6], [3, 8], [9, 9], [2], null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [2, 5, 5, 1, 1, 8, 5],
                        [2, 3, 6, 7, 1, 9, 6],
                        [8, 5, 8, 7, 6, 3, 8],
                        [8, 8, 2, 8, 3, 9, 9],
                        [2, 9, 6, 6, 9, 9, 2],
                        [7, 8, 8, 1, 3, 18, 5],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 74.4,
                  ATF: 11,
                  FRR: 9,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 5, 3, 9, 0, 8, 13],
                        [3, 2, 7, 3, 4, 6, 7],
                        [0, 0, 2, 1, 9, 4, 2],
                        [9, 1, 8, 7, 17, 6, 3],
                        [4, 2, 1, 2, 2, 6, 11],
                        [4, 18, 3, 1, 2, 9, 1],
                      ],
                      CSW: 0,
                      CSM: 2,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 0,
                  ATF: 8,
                  FRR: 8,
                  FCC: 15,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [1, 1, 0, 8, 6, 4, 2],
                        [3, 5, 16, 2, 7, 7, 6],
                        [0, 0, 2, 7, 1, 1, 1],
                        [7, 4, 5, 8, 8, 8, 1],
                        [2, 9, 33, 4, 4, 5, 6],
                        [9, 7, 10, 6, 8, 8, 5],
                      ],
                      CSW: 0.4,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 2,
                          C: 3,
                          LN: 1,
                          WIN: 0.4,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[5], [4], [4], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 1, 0, 8, 6, 4, 5],
                        [3, 5, 16, 7, 7, 6, 4],
                        [0, 0, 7, 1, 1, 1, 4],
                        [7, 4, 5, 8, 8, 8, 1],
                        [2, 9, 33, 4, 4, 5, 6],
                        [9, 7, 10, 6, 8, 8, 5],
                      ],
                      CSW: 4.8,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 4,
                          C: 5,
                          LN: 2,
                          WIN: 4.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 1 },
                            { Col: 4, Row: 3 },
                            { Col: 4, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[9], [9], [8], [9], [2, 2], null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 1, 0, 8, 6, 5, 9],
                        [3, 5, 16, 7, 7, 6, 9],
                        [0, 0, 7, 1, 1, 1, 8],
                        [7, 5, 8, 8, 8, 1, 9],
                        [2, 9, 33, 5, 6, 2, 2],
                        [9, 7, 10, 6, 8, 8, 5],
                      ],
                      CSW: 2.4,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 6 },
                          ],
                        },
                      ],
                      FS: [[1], [9], null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [1, 1, 0, 8, 6, 5, 1],
                        [3, 5, 16, 7, 7, 6, 9],
                        [0, 0, 7, 1, 1, 1, 8],
                        [7, 5, 8, 8, 8, 1, 9],
                        [2, 9, 33, 5, 6, 2, 2],
                        [9, 7, 10, 6, 8, 8, 5],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 7.6,
                  ATF: 11,
                  FRR: 7,
                  FCC: 16,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [6, 0, 1, 1, 5, 0, 9],
                        [7, 9, 4, 0, 7, 7, 3],
                        [7, 6, 0, 0, 5, 7, 3],
                        [7, 0, 4, 3, 5, 4, 0],
                        [1, 1, 19, 6, 0, 4, 6],
                        [1, 3, 0, 0, 0, 4, 2],
                      ],
                      CSW: 24.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 6,
                          LN: 24,
                          WIN: 24,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 2 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 1 },
                            { Col: 3, Row: 6 },
                            { Col: 4, Row: 4 },
                            { Col: 5, Row: 2 },
                            { Col: 5, Row: 3 },
                            { Col: 5, Row: 4 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 1 },
                          ],
                        },
                      ],
                      FS: [[0, 8, 3], [33, 9], [3, 8], [5, 4], [1], [7, 8, 1]],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [6, 1, 1, 5, 0, 8, 3],
                        [7, 4, 7, 7, 3, 33, 9],
                        [7, 6, 5, 7, 3, 3, 8],
                        [7, 4, 3, 5, 4, 5, 4],
                        [1, 1, 19, 6, 4, 6, 1],
                        [1, 3, 4, 2, 7, 8, 1],
                      ],
                      CSW: 2.4,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 2,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 4 },
                            { Col: 2, Row: 5 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[0], [9], [7, 4], [0], null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [6, 1, 1, 5, 0, 8, 0],
                        [7, 4, 7, 7, 33, 9, 9],
                        [7, 6, 5, 7, 8, 7, 4],
                        [7, 4, 5, 4, 5, 4, 0],
                        [1, 1, 19, 6, 4, 6, 1],
                        [1, 3, 4, 2, 7, 8, 1],
                      ],
                      CSW: 0,
                      CSM: 6,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 27.2,
                  ATF: 11,
                  FRR: 6,
                  FCC: 17,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [7, 18, 5, 2, 2, 7, 9],
                        [2, 0, 6, 4, 3, 1, 7],
                        [6, 2, 3, 8, 5, 4, 4],
                        [6, 4, 3, 5, 8, 0, 2],
                        [11, 2, 2, 2, 1, 6, 11],
                        [8, 1, 2, 9, 5, 3, 4],
                      ],
                      CSW: 7.2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 2,
                          C: 6,
                          LN: 6,
                          WIN: 7.2,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 0 },
                            { Col: 2, Row: 1 },
                            { Col: 3, Row: 6 },
                            { Col: 4, Row: 1 },
                            { Col: 4, Row: 2 },
                            { Col: 4, Row: 3 },
                            { Col: 5, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[6, 4], [3], [2], [5], [1, 1, 0], [9]],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [7, 18, 5, 7, 9, 6, 4],
                        [0, 6, 4, 3, 1, 7, 3],
                        [6, 3, 8, 5, 4, 4, 2],
                        [6, 4, 3, 5, 8, 0, 5],
                        [11, 1, 6, 11, 1, 1, 0],
                        [8, 1, 9, 5, 3, 4, 9],
                      ],
                      CSW: 7.2,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 4,
                          C: 4,
                          LN: 2,
                          WIN: 3.2,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 4 },
                            { Col: 2, Row: 5 },
                            { Col: 3, Row: 1 },
                          ],
                        },
                        {
                          S: 6,
                          C: 5,
                          LN: 1,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 0 },
                            { Col: 3, Row: 0 },
                            { Col: 4, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[0, 8], [2, 7], [7, 5, 4], [5, 4], [5], null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [7, 18, 5, 7, 9, 0, 8],
                        [0, 3, 1, 7, 3, 2, 7],
                        [3, 8, 5, 2, 7, 5, 4],
                        [3, 5, 8, 0, 5, 5, 4],
                        [11, 1, 11, 1, 1, 0, 5],
                        [8, 1, 9, 5, 3, 4, 9],
                      ],
                      CSW: 12,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 7,
                          C: 3,
                          LN: 4,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[1, 0], [3, 4], [3], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [18, 5, 9, 0, 8, 1, 0],
                        [0, 3, 1, 3, 2, 3, 4],
                        [3, 8, 5, 2, 5, 4, 3],
                        [3, 5, 8, 0, 5, 5, 4],
                        [11, 1, 11, 1, 1, 0, 5],
                        [8, 1, 9, 5, 3, 4, 9],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 26.4,
                  ATF: 11,
                  FRR: 5,
                  FCC: 17,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [9, 0, 2, 6, 8, 1, 2],
                        [7, 6, 4, 8, 8, 16, 5],
                        [7, 1, 19, 6, 2, 7, 5],
                        [4, 5, 5, 9, 6, 1, 9],
                        [8, 1, 3, 5, 9, 4, 4],
                        [3, 6, 5, 3, 8, 8, 17],
                      ],
                      CSW: 2.4,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 4,
                          LN: 2,
                          WIN: 2.4,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[2], [1], [8], [7], null, null],
                      NFS: [null, [23], null, null, null, null],
                    },
                    {
                      CSS: [
                        [9, 0, 2, 8, 1, 2, 2],
                        [7, 4, 8, 8, 23, 5, 1],
                        [7, 1, 19, 2, 7, 5, 8],
                        [4, 5, 5, 9, 1, 9, 7],
                        [8, 1, 3, 5, 9, 4, 4],
                        [3, 6, 5, 3, 8, 8, 17],
                      ],
                      CSW: 5.2,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 1,
                          C: 5,
                          LN: 1,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 1 },
                            { Col: 3, Row: 4 },
                            { Col: 4, Row: 1 },
                          ],
                        },
                        {
                          S: 8,
                          C: 3,
                          LN: 2,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                      ],
                      FS: [[5, 8], [9, 4, 8], [0, 5], [7], [4], null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [9, 0, 2, 2, 2, 5, 8],
                        [7, 4, 23, 5, 9, 4, 8],
                        [7, 19, 2, 7, 5, 0, 5],
                        [4, 5, 5, 9, 9, 7, 7],
                        [8, 3, 5, 9, 4, 4, 4],
                        [3, 6, 5, 3, 8, 8, 17],
                      ],
                      CSW: 84,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 6,
                          LN: 4,
                          WIN: 48,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 4 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 1 },
                            { Col: 3, Row: 2 },
                            { Col: 4, Row: 2 },
                            { Col: 5, Row: 2 },
                          ],
                        },
                        {
                          S: 9,
                          C: 5,
                          LN: 2,
                          WIN: 36,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 1 },
                            { Col: 3, Row: 3 },
                            { Col: 3, Row: 4 },
                            { Col: 4, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[3, 2], [8, 6], [4, 4], [8, 3, 7, 5], [6, 9], [1]],
                      NFS: [null, null, [21], null, null, null],
                    },
                    {
                      CSS: [
                        [0, 2, 2, 2, 8, 3, 2],
                        [7, 4, 23, 4, 8, 8, 6],
                        [7, 21, 2, 7, 0, 4, 4],
                        [4, 7, 7, 8, 3, 7, 5],
                        [8, 3, 4, 4, 4, 6, 9],
                        [3, 6, 3, 8, 8, 17, 1],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 91.6,
                  ATF: 11,
                  FRR: 4,
                  FCC: 17,
                  FCLV: 5,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [33, 7, 9, 0, 5, 8, 6],
                        [5, 6, 2, 7, 7, 6, 4],
                        [5, 7, 3, 3, 8, 7, 2],
                        [5, 5, 5, 4, 0, 7, 8],
                        [1, 0, 9, 5, 6, 3, 7],
                        [6, 8, 0, 9, 9, 8, 3],
                      ],
                      CSW: 22,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 5,
                          LN: 3,
                          WIN: 6,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 0 },
                            { Col: 2, Row: 0 },
                            { Col: 3, Row: 0 },
                            { Col: 3, Row: 1 },
                            { Col: 3, Row: 2 },
                            { Col: 4, Row: 3 },
                          ],
                        },
                        {
                          S: 7,
                          C: 5,
                          LN: 4,
                          WIN: 16,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 5 },
                            { Col: 3, Row: 5 },
                            { Col: 4, Row: 6 },
                          ],
                        },
                      ],
                      FS: [
                        [1, 8],
                        [8, 8, 8],
                        [2, 2, 7],
                        [0, 7, 7, 7],
                        [8, 1],
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [33, 9, 0, 8, 6, 1, 8],
                        [6, 2, 6, 4, 8, 8, 8],
                        [3, 3, 8, 2, 2, 2, 7],
                        [4, 0, 8, 0, 7, 7, 7],
                        [1, 0, 9, 6, 3, 8, 1],
                        [6, 8, 0, 9, 9, 8, 3],
                      ],
                      CSW: 144,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 8,
                          C: 6,
                          LN: 12,
                          WIN: 144,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 4 },
                            { Col: 1, Row: 5 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 2 },
                            { Col: 3, Row: 2 },
                            { Col: 4, Row: 5 },
                            { Col: 5, Row: 1 },
                            { Col: 5, Row: 5 },
                          ],
                        },
                      ],
                      FS: [[4, 1], [5, 1, 6], [6], [4], [6], [7, 7]],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [33, 9, 0, 6, 1, 4, 1],
                        [6, 2, 6, 4, 5, 1, 6],
                        [3, 3, 2, 2, 2, 7, 6],
                        [4, 0, 0, 7, 7, 7, 4],
                        [1, 0, 9, 6, 3, 1, 6],
                        [6, 0, 9, 9, 3, 7, 7],
                      ],
                      CSW: 7.2,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 3,
                          LN: 3,
                          WIN: 7.2,
                          GV: [
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                      ],
                      FS: [[8], [4, 8, 8], [2], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [33, 9, 0, 1, 4, 1, 8],
                        [2, 4, 5, 1, 4, 8, 8],
                        [3, 3, 2, 2, 2, 7, 2],
                        [4, 0, 0, 7, 7, 7, 4],
                        [1, 0, 9, 6, 3, 1, 6],
                        [6, 0, 9, 9, 3, 7, 7],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 173.2,
                  ATF: 43,
                  FRR: 5,
                  FCC: 18,
                  FCLV: 6,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [0, 3, 6, 1, 5, 4, 4],
                        [8, 6, 3, 4, 6, 9, 4],
                        [7, 0, 9, 6, 2, 7, 5],
                        [7, 4, 3, 5, 8, 0, 2],
                        [1, 2, 0, 8, 5, 1, 1],
                        [3, 4, 8, 5, 9, 1, 6],
                      ],
                      CSW: 1.6,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 6,
                          C: 3,
                          LN: 2,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[0], [8, 8], [8], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 3, 1, 5, 4, 4, 0],
                        [8, 3, 4, 9, 4, 8, 8],
                        [7, 0, 9, 2, 7, 5, 8],
                        [7, 4, 3, 5, 8, 0, 2],
                        [1, 2, 0, 8, 5, 1, 1],
                        [3, 4, 8, 5, 9, 1, 6],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 1.6,
                  ATF: 11,
                  FRR: 4,
                  FCC: 18,
                  FCLV: 6,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [2, 3, 1, 4, 15, 4, 0],
                        [4, 3, 5, 9, 7, 5, 5],
                        [2, 2, 2, 5, 8, 0, 13],
                        [5, 0, 4, 9, 8, 5, 9],
                        [2, 2, 9, 6, 4, 4, 5],
                        [5, 2, 3, 9, 9, 6, 3],
                      ],
                      CSW: 24.4,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 3,
                          LN: 1,
                          WIN: 0.4,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                        {
                          S: 5,
                          C: 6,
                          LN: 6,
                          WIN: 24,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 5 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                            { Col: 3, Row: 5 },
                            { Col: 4, Row: 6 },
                            { Col: 5, Row: 0 },
                          ],
                        },
                      ],
                      FS: [[0], [3, 1, 4, 3], [7], [9, 4], [6], [4]],
                      NFS: [[25], null, [26], null, null, null],
                    },
                    {
                      CSS: [
                        [2, 1, 4, 25, 4, 0, 0],
                        [4, 9, 7, 3, 1, 4, 3],
                        [2, 2, 2, 8, 0, 26, 7],
                        [0, 4, 9, 8, 9, 9, 4],
                        [2, 2, 9, 6, 4, 4, 6],
                        [2, 3, 9, 9, 6, 3, 4],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 24.4,
                  ATF: 11,
                  FRR: 3,
                  FCC: 18,
                  FCLV: 6,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [8, 16, 1, 2, 5, 9, 1],
                        [5, 9, 4, 6, 6, 8, 3],
                        [0, 7, 6, 4, 3, 8, 5],
                        [4, 4, 4, 4, 4, 5, 4],
                        [3, 1, 0, 5, 4, 6, 3],
                        [1, 3, 8, 9, 4, 4, 2],
                      ],
                      CSW: 5.4,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 5,
                          LN: 1,
                          WIN: 2,
                          GV: [
                            { Col: 0, Row: 4 },
                            { Col: 1, Row: 0 },
                            { Col: 2, Row: 6 },
                            { Col: 3, Row: 5 },
                            { Col: 4, Row: 3 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 2,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                        {
                          S: 8,
                          C: 3,
                          LN: 1,
                          WIN: 1,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 1 },
                          ],
                        },
                      ],
                      FS: [
                        [1, 8, 5],
                        [1, 7, 9, 4, 0],
                        [2, 2, 2],
                        [0],
                        [3],
                        null,
                      ],
                      NFS: [[25], null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [25, 1, 2, 1, 1, 8, 5],
                        [4, 3, 1, 7, 9, 4, 0],
                        [0, 7, 4, 3, 2, 2, 2],
                        [4, 4, 4, 4, 4, 4, 0],
                        [3, 1, 0, 4, 6, 3, 3],
                        [1, 3, 8, 9, 4, 4, 2],
                      ],
                      CSW: 0,
                      CSM: 4,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 5.4,
                  ATF: 11,
                  FRR: 2,
                  FCC: 18,
                  FCLV: 6,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [6, 10, 1, 1, 5, 0, 9],
                        [4, 0, 6, 9, 1, 3, 6],
                        [2, 2, 5, 0, 3, 1, 11],
                        [6, 6, 6, 9, 3, 7, 0],
                        [4, 5, 6, 0, 2, 2, 6],
                        [2, 8, 8, 1, 5, 9, 9],
                      ],
                      CSW: 2.8,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 0,
                          C: 5,
                          LN: 2,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 1 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 6 },
                            { Col: 4, Row: 3 },
                          ],
                        },
                        {
                          S: 1,
                          C: 3,
                          LN: 4,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 5 },
                            { Col: 2, Row: 6 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 0.8,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 3 },
                          ],
                        },
                      ],
                      FS: [[0, 8, 3, 0], [6, 7, 4], [9, 4], [6], [8], null],
                      NFS: [[23], null, [23], null, null, null],
                    },
                    {
                      CSS: [
                        [6, 23, 5, 0, 8, 3, 0],
                        [4, 6, 3, 6, 6, 7, 4],
                        [2, 2, 5, 3, 23, 9, 4],
                        [6, 6, 6, 9, 3, 7, 6],
                        [4, 5, 6, 2, 2, 6, 8],
                        [2, 8, 8, 1, 5, 9, 9],
                      ],
                      CSW: 4.8,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 4,
                          LN: 4,
                          WIN: 4.8,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 3 },
                            { Col: 2, Row: 4 },
                            { Col: 3, Row: 4 },
                          ],
                        },
                      ],
                      FS: [[7], [3], [2], [6], null, null],
                      NFS: [[30], null, [30], null, null, null],
                    },
                    {
                      CSS: [
                        [6, 30, 5, 0, 8, 0, 7],
                        [4, 6, 6, 6, 7, 4, 3],
                        [2, 2, 5, 30, 9, 4, 2],
                        [6, 6, 6, 9, 7, 6, 6],
                        [4, 5, 6, 2, 2, 6, 8],
                        [2, 8, 8, 1, 5, 9, 9],
                      ],
                      CSW: 380.4,
                      CSM: 6,
                      MT: 32,
                      ADV: [
                        {
                          S: 3,
                          C: 3,
                          LN: 1,
                          WIN: 1.2,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 3 },
                          ],
                        },
                        {
                          S: 4,
                          C: 3,
                          LN: 4,
                          WIN: 7.2,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 5 },
                            { Col: 2, Row: 3 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                        {
                          S: 6,
                          C: 5,
                          LN: 60,
                          WIN: 360,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 1 },
                            { Col: 1, Row: 1 },
                            { Col: 1, Row: 2 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 0 },
                            { Col: 3, Row: 1 },
                            { Col: 3, Row: 2 },
                            { Col: 3, Row: 5 },
                            { Col: 3, Row: 6 },
                            { Col: 4, Row: 2 },
                            { Col: 4, Row: 5 },
                          ],
                        },
                        {
                          S: 7,
                          C: 4,
                          LN: 2,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 1 },
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 4 },
                          ],
                        },
                      ],
                      FS: [
                        [1, 1, 0],
                        [5, 9, 7, 5, 5, 3, 1],
                        [2, 3],
                        [7, 4, 0, 7, 8, 0],
                        [1, 4],
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 0, 8, 0, 1, 1, 0],
                        [5, 9, 7, 5, 5, 3, 1],
                        [2, 2, 5, 9, 2, 2, 3],
                        [9, 7, 4, 0, 7, 8, 0],
                        [4, 5, 2, 2, 8, 1, 4],
                        [2, 8, 8, 1, 5, 9, 9],
                      ],
                      CSW: 12,
                      CSM: 10,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 3,
                          LN: 3,
                          WIN: 12,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 1, Row: 0 },
                            { Col: 1, Row: 3 },
                            { Col: 1, Row: 4 },
                            { Col: 2, Row: 2 },
                          ],
                        },
                      ],
                      FS: [[5], [4, 4, 2], [8], null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 8, 0, 1, 1, 0, 5],
                        [9, 7, 3, 1, 4, 4, 2],
                        [2, 2, 9, 2, 2, 3, 8],
                        [9, 7, 4, 0, 7, 8, 0],
                        [4, 5, 2, 2, 8, 1, 4],
                        [2, 8, 8, 1, 5, 9, 9],
                      ],
                      CSW: 0,
                      CSM: 10,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 400,
                  ATF: 11,
                  FRR: 1,
                  FCC: 18,
                  FCLV: 6,
                },
                {
                  CSD: [
                    {
                      CSS: [
                        [2, 5, 2, 2, 0, 8, 6],
                        [7, 7, 8, 2, 5, 6, 6],
                        [4, 2, 2, 7, 6, 2, 3],
                        [9, 8, 5, 9, 9, 4, 3],
                        [0, 1, 6, 2, 2, 2, 0],
                        [8, 3, 4, 8, 5, 2, 1],
                      ],
                      CSW: 5.2,
                      CSM: 2,
                      MT: 32,
                      ADV: [
                        {
                          S: 2,
                          C: 3,
                          LN: 9,
                          WIN: 3.6,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 2 },
                            { Col: 0, Row: 3 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 1 },
                            { Col: 2, Row: 2 },
                            { Col: 2, Row: 5 },
                          ],
                        },
                        {
                          S: 6,
                          C: 3,
                          LN: 2,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 5 },
                            { Col: 1, Row: 6 },
                            { Col: 2, Row: 4 },
                          ],
                        },
                      ],
                      FS: [
                        [1, 2, 5, 9],
                        [9, 1, 6],
                        [8, 5, 4, 4],
                        null,
                        null,
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [5, 0, 8, 1, 2, 5, 9],
                        [7, 7, 8, 5, 9, 1, 6],
                        [4, 7, 3, 8, 5, 4, 4],
                        [9, 8, 5, 9, 9, 4, 3],
                        [0, 1, 6, 2, 2, 2, 0],
                        [8, 3, 4, 8, 5, 2, 1],
                      ],
                      CSW: 10.4,
                      CSM: 4,
                      MT: 32,
                      ADV: [
                        {
                          S: 5,
                          C: 4,
                          LN: 2,
                          WIN: 4.8,
                          GV: [
                            { Col: 0, Row: 0 },
                            { Col: 0, Row: 5 },
                            { Col: 1, Row: 3 },
                            { Col: 2, Row: 4 },
                            { Col: 3, Row: 2 },
                          ],
                        },
                        {
                          S: 8,
                          C: 4,
                          LN: 1,
                          WIN: 4,
                          GV: [
                            { Col: 0, Row: 2 },
                            { Col: 1, Row: 2 },
                            { Col: 2, Row: 3 },
                            { Col: 3, Row: 1 },
                          ],
                        },
                        {
                          S: 9,
                          C: 2,
                          LN: 1,
                          WIN: 1.6,
                          GV: [
                            { Col: 0, Row: 6 },
                            { Col: 1, Row: 4 },
                          ],
                        },
                      ],
                      FS: [
                        [1, 1, 8, 33],
                        [7, 7, 4],
                        [2, 7],
                        [0, 1],
                        null,
                        null,
                      ],
                      NFS: [null, null, null, null, null, null],
                    },
                    {
                      CSS: [
                        [0, 1, 2, 1, 1, 8, 33],
                        [7, 7, 1, 6, 7, 7, 4],
                        [4, 7, 3, 4, 4, 2, 7],
                        [9, 9, 9, 4, 3, 0, 1],
                        [0, 1, 6, 2, 2, 2, 0],
                        [8, 3, 4, 8, 5, 2, 1],
                      ],
                      CSW: 0,
                      CSM: 6,
                      MT: 32,
                      ADV: null,
                      FS: [null, null, null, null, null, null],
                      NFS: [null, null, null, null, null, null],
                    },
                  ],
                  RW: 15.6,
                  ATF: 27,
                  FRR: 0,
                  FCC: 19,
                  FCLV: 6,
                },
              ],
              TotalWin: 1005.8,
              FreeTotalWin: 1005.8,
              AckType: 0,
              ShowIndex: "",
              NowMoney: null,
              trialfinish: !1,
              trialaward: 0,
            },
          ]),
          (MW_Define.AnimEventName = {
            AnimEvetFunc: "AnimationEvent",
            Change: "Change",
            Start: "Sound1",
            End: "Sound2",
            RollEnd: "RollEnd",
            ComboEnd: "End",
          }),
          (MW_Define.EffectIdx = Enum(EffectIdx)),
          (MW_Define.SmallAward = [1, 5, 10]),
          (MW_Define.FG_AwardSoundRate = [0, 10, 25]),
          (MW_Define.Unite = ["", "K", "M"]),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "2722aFRuEJAi7PKcYF1GNiD", "BigWin", void 0);
        var AWARD_SETTING = [
            {
              betRate: 8,
              animNames: [],
              changeTime: [],
              runningTime: 0,
              lastClip: null,
            },
            {
              betRate: 16,
              animNames: [],
              changeTime: [],
              runningTime: 0,
              lastClip: null,
            },
            {
              betRate: 32,
              animNames: [],
              changeTime: [],
              runningTime: 0,
              lastClip: null,
            },
          ],
          ccclass = _decorator.ccclass,
          property = _decorator.property,
          BigWin =
            ((_dec = property({ type: Animation, tooltip: "動畫" })),
            (_dec2 = property({ type: Label, tooltip: "贏分" })),
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
                      "m_anim",
                      _descriptor,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_win = 0),
                    (t.m_showWin = 0),
                    (t.m_step = 0),
                    (t.m_setting = null),
                    (t.m_isShowAward = !1),
                    (t.m_winAnimState = null),
                    (t.m_changeTime = 0),
                    (t.m_endCb = null),
                    (t.m_isEnd = !0),
                    (t.m_soundId = null),
                    (t.m_isFirst = !0),
                    (t.m_rollSoundId = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function () {
                    var e = [
                      {
                        START: "BigWin",
                        END: "BigWin_End",
                        END_TIME: node.plus(7, node.divide(8, 60)),
                        CLIP: null,
                      },
                      {
                        START: "MegaWin",
                        END: "MegaWin_End",
                        END_TIME: node.plus(8, node.divide(10, 60)),
                        CLIP: null,
                      },
                      {
                        START: "SuperWin",
                        END: "SuperWin_End",
                        END_TIME: node.plus(7, node.divide(50, 60)),
                        CLIP: null,
                      },
                    ];
                    this.node.active = !1;
                    for (var t = this.m_anim.clips, n = 0; n < t.length; n++)
                      for (var i = 0; i < e.length; i++)
                        if (e[i].START === t[n].name) {
                          (e[i].END_TIME = node.GetAnimEventTime(
                            t[n],
                            MW_Define.AnimEventName.AnimEvetFunc,
                            MW_Define.AnimEventName.Change
                          )),
                            (e[i].CLIP = t[n]);
                          break;
                        }
                    for (var o = 0; o < AWARD_SETTING.length; o++) {
                      for (var r = 0, s = 0; s <= o; s++)
                        (r += e[s].END_TIME),
                          AWARD_SETTING[o].changeTime.push(e[s].END_TIME),
                          AWARD_SETTING[o].animNames.push(e[s].START),
                          (AWARD_SETTING[o].lastClip = e[o].CLIP);
                      AWARD_SETTING[o].runningTime = r;
                    }
                  }),
                  (n.CheckSetting = function (e, t) {
                    for (
                      var n = node.divide(e, t), i = AWARD_SETTING.length - 1;
                      i >= 0;
                      i--
                    )
                      if (n >= AWARD_SETTING[i].betRate)
                        return (
                          (this.m_setting = JSON.parse(
                            JSON.stringify(AWARD_SETTING[i])
                          )),
                          (this.m_setting.lastClip = AWARD_SETTING[i].lastClip),
                          !0
                        );
                    return !1;
                  }),
                  (n.ShowWin = function (e, t, n) {
                    (this.m_isEnd = !1),
                      (this.m_setting = null),
                      this.CheckSetting(e, t),
                      this.m_setting
                        ? ((this.node.active = !0),
                          (this.node.getComponent(UIOpacity).opacity = 255),
                          (this.m_endCb = n),
                          (this.m_isFirst = !0),
                          (this.m_isShowAward = !0),
                          (this.m_showWin = 0),
                          (this.m_win = e),
                          (this.m_step = node.divide(
                            this.m_win,
                            this.m_setting.runningTime
                          )),
                          (this.m_soundId = node$1.Play(
                            MW_Define.AudioClips.Big_win
                          )),
                          this.ShowNextLvl())
                        : ((this.node.active = !1),
                          (this.m_isEnd = !0),
                          n && n());
                  }),
                  (n.ShowNextLvl = function () {
                    var e = this;
                    if (this.m_setting.animNames.length > 0) {
                      var t = this.m_setting.animNames.shift();
                      if (
                        (this.m_anim.play(t),
                        (this.m_winAnimState = this.m_anim.getState(t)),
                        (this.m_changeTime = this.m_setting.changeTime.shift()),
                        tween(this.node)
                          .delay(this.m_changeTime)
                          .call(function () {
                            e.ShowNextLvl();
                          })
                          .start(),
                        this.m_isFirst)
                      )
                        this.m_isFirst = !1;
                      else {
                        var n = node.GetAnimEventTime(
                          this.m_winAnimState.clip,
                          MW_Define.AnimEventName.AnimEvetFunc,
                          MW_Define.AnimEventName.Start
                        );
                        tween(this.node)
                          .delay(n)
                          .call(function () {
                            node$1.Play(MW_Define.AudioClips.ChangeWin, !1);
                          })
                          .start();
                      }
                    } else this.End();
                  }),
                  (n.End = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t, n, i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (this.m_isEnd = !0),
                                    (this.m_isShowAward = !1),
                                    null !== this.m_rollSoundId &&
                                      (node$1.Stop(this.m_rollSoundId),
                                      (this.m_rollSoundId = null)),
                                    (this.m_winLabel.string =
                                      node.FormatNumberThousands(
                                        node.strip(
                                          MW_Define.ShowDisplayValue
                                            ? MW_Define.ShowDisplayValue(
                                                this.m_win
                                              )
                                            : this.m_win
                                        ),
                                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                                      )),
                                    (t = node.GetAnimEventTime(
                                      this.m_setting.lastClip,
                                      MW_Define.AnimEventName.AnimEvetFunc,
                                      MW_Define.AnimEventName.End
                                    )),
                                    (n = t - this.m_changeTime),
                                    (i = this.m_winAnimState.duration - t),
                                    (e.next = 9),
                                    node$2.Wait(this, n)
                                  );
                                case 9:
                                  return (
                                    this.m_soundId &&
                                      (node$1.Stop(this.m_soundId),
                                      (this.m_soundId = null)),
                                    node$1.Play(
                                      MW_Define.AudioClips.Big_win_end
                                    ),
                                    (e.next = 13),
                                    node$2.Wait(this, i)
                                  );
                                case 13:
                                  null !== this.m_soundId &&
                                    (node$1.Stop(this.m_soundId),
                                    (this.m_soundId = null)),
                                    this.m_endCb && this.m_endCb(),
                                    (this.m_endCb = null),
                                    (this.node.active = !1);
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
                  (n.Stop = function () {
                    if (
                      !this.m_isEnd &&
                      this.m_winAnimState &&
                      this.m_winAnimState.isPlaying
                    ) {
                      if (0 === this.m_setting.animNames.length) {
                        var e = this.m_winAnimState.time;
                        if (
                          ((this.m_changeTime = node.GetAnimEventTime(
                            this.m_setting.lastClip,
                            MW_Define.AnimEventName.AnimEvetFunc,
                            MW_Define.AnimEventName.Change
                          )),
                          e < this.m_changeTime)
                        ) {
                          var t = this.m_anim.getState("BigWin");
                          t.play(),
                            t.setTime(this.m_changeTime),
                            t.sample(),
                            Tween.stopAllByTarget(this.node);
                        }
                      } else {
                        this.m_anim.stop();
                        for (
                          var n = this.m_setting.animNames.shift();
                          this.m_setting.animNames.length > 0;

                        )
                          n = this.m_setting.animNames.shift();
                        for (
                          this.m_changeTime = this.m_setting.changeTime.shift();
                          this.m_setting.changeTime.length > 0;

                        )
                          this.m_changeTime = this.m_setting.changeTime.shift();
                        this.m_anim.play(n),
                          (this.m_winAnimState = this.m_anim.getState(n)),
                          this.m_winAnimState.setTime(this.m_changeTime),
                          this.m_winAnimState.sample(),
                          Tween.stopAllByTarget(this.node);
                      }
                      this.End();
                    }
                  }),
                  (n.update = function (e) {
                    this.m_isShowAward &&
                      ((this.m_showWin += this.m_step * e),
                      this.m_showWin >= this.m_win &&
                        ((this.m_showWin = this.m_win),
                        (this.m_isShowAward = !1),
                        null !== this.m_rollSoundId &&
                          (node$1.Stop(this.m_rollSoundId),
                          (this.m_rollSoundId = null))),
                      (this.m_winLabel.string = node.FormatNumberThousands(
                        node.strip(
                          MW_Define.ShowDisplayValue
                            ? MW_Define.ShowDisplayValue(this.m_showWin)
                            : this.m_showWin
                        ),
                        node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                      )));
                  }),
                  t
                );
              })(Component)),
              (_descriptor = _applyDecoratedDescriptor(
                _class2.prototype,
                "m_anim",
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
                "m_winLabel",
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
          _class$1,
          _class2$1,
          _descriptor$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "e4694bbDwVNHYm/yfOfVkDF", "Spine", void 0);
        var ccclass$1 = _decorator.ccclass,
          property$1 = _decorator.property,
          Spine =
            ((_dec$1 = property$1({ type: sp.Skeleton, tooltip: "spine" })),
            ccclass$1(
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
                      "m_spine",
                      _descriptor$1,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.PlayAnimation = function (e, t) {
                    var n = this;
                    return new Promise(function (i) {
                      n.m_spine.clearTrack(0), n.m_spine.setToSetupPose();
                      var o = n.m_spine.setAnimation(0, e, t);
                      o &&
                        n.m_spine.setTrackEventListener(o, function (e, t) {
                          var n = t.data.name;
                          error("name", n);
                        }),
                        o
                          ? n.m_spine.setTrackCompleteListener(o, function () {
                              n.m_spine.setTrackCompleteListener(
                                o,
                                function () {}
                              ),
                                i(null);
                            })
                          : n.m_spine.setCompleteListener(function () {
                              n.m_spine.setCompleteListener(null), i(null);
                            });
                    });
                  }),
                  t
                );
              })(Component)),
              (_descriptor$1 = _applyDecoratedDescriptor(
                _class2$1.prototype,
                "m_spine",
                [_dec$1],
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
          _dec2$1,
          _class$2,
          _class2$2,
          _descriptor$2,
          _descriptor2$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "60cb9wne79EoLDXVDre7Mns",
            "SymbolSpine",
            void 0
          );
        var SpineAnimName = {
            ACTION: "Action_0",
            STOP: "Stop_0",
            WIN: "Win_0",
          },
          ccclass$2 = _decorator.ccclass,
          property$2 = _decorator.property,
          SymbolSpine =
            ((_dec$2 = property$2({
              type: Sprite,
              tooltip: "神秘符號轉換後的symbol",
            })),
            (_dec2$1 = property$2({ type: Label, tooltip: "神燈金額" })),
            ccclass$2(
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
                      "m_changeSprite",
                      _descriptor$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_lampCoinLabel",
                      _descriptor2$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_activeSpine = null),
                    (t.m_lvl = 1),
                    (t.node = void 0),
                    (t.m_symbol = 0),
                    (t.m_pos = null),
                    (t.m_isShowWin = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.UpdateCoin = function (e) {}),
                  (n.SetCoin = function (e) {}),
                  (n.SetLabelLight = function () {}),
                  (n.ShowCollect = (function () {
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
                  (n.ShowNearWin = (function () {
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
                  (n.SetUp = function () {}),
                  (n.Stop = function () {
                    this.PlayAnimation(
                      SpineAnimName.STOP + (this.m_lvl + 1).toString(),
                      !1
                    );
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
                                    t && (this.m_spine.timeScale = 1.2),
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      SpineAnimName.WIN +
                                        (this.m_lvl + 1).toString(),
                                      !node$3.IsAutoSpin
                                    )
                                  );
                                case 3:
                                  this.m_spine.timeScale = 1;
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
                  (n.ShowChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((i = this.node.getComponent(Animation)) &&
                                      i.play(),
                                    this.m_changeSprite &&
                                      (this.m_changeSprite.spriteFrame = t),
                                    (this.m_lampCoinLabel.node.active = !1),
                                    !n || !this.m_lampCoinLabel)
                                  ) {
                                    e.next = 18;
                                    break;
                                  }
                                  (n = MW_Define.ShowDisplayValue
                                    ? MW_Define.ShowDisplayValue(n)
                                    : n),
                                    (o = 0);
                                case 7:
                                  if (!(o < MW_Define.Unite.length)) {
                                    e.next = 17;
                                    break;
                                  }
                                  if (!(n < 1e3)) {
                                    e.next = 13;
                                    break;
                                  }
                                  return (
                                    (this.m_lampCoinLabel.string =
                                      n.toString() + MW_Define.Unite[o]),
                                    e.abrupt("break", 17)
                                  );
                                case 13:
                                  n = node.divide(n, 1e3);
                                case 14:
                                  o++, (e.next = 7);
                                  break;
                                case 17:
                                  this.m_lampCoinLabel.node.active = !0;
                                case 18:
                                  return (
                                    (e.next = 20),
                                    this.PlayAnimation(
                                      SpineAnimName.ACTION +
                                        (this.m_lvl + 1).toString(),
                                      !1
                                    )
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.SetSpineColor = function (e) {
                    this.m_spine.node.getComponent(sp.Skeleton).color = e;
                  }),
                  _createClass(t, [
                    {
                      key: "Level",
                      set: function (e) {
                        this.m_lvl = e;
                      },
                    },
                    {
                      key: "Symbol",
                      get: function () {
                        return this.m_symbol;
                      },
                      set: function (e) {
                        this.m_symbol = e;
                      },
                    },
                    {
                      key: "Position",
                      get: function () {
                        return this.m_pos;
                      },
                      set: function (e) {
                        this.m_pos = e;
                      },
                    },
                    {
                      key: "CoinLabel",
                      get: function () {
                        return null;
                      },
                    },
                    {
                      key: "IsShowWin",
                      set: function (e) {
                        this.m_isShowWin = e;
                      },
                    },
                  ]),
                  t
                );
              })(Spine)),
              (_descriptor$2 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_changeSprite",
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
              (_descriptor2$1 = _applyDecoratedDescriptor(
                _class2$2.prototype,
                "m_lampCoinLabel",
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
          _dec$3,
          _dec2$2,
          _dec3,
          _dec4,
          _class$3,
          _class2$3,
          _descriptor$3,
          _descriptor2$2,
          _descriptor3,
          _descriptor4;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "428b5oOrLNLjb15dqZ2X8/I", "LampSpine", void 0);
        var SpineAnimName$1 = {
            COLLECT: "Collect_0",
            COLLECT_LVL: "Collect_%s_Level_%s",
            COLLECT_WIN: "Collect_Win_0",
            STOP: "Stop_0",
            WIN: "Win_0",
            MG_POST: "_MG",
            FG_POST: "_FG",
            SET: { PRE: "SetUp_0", FG: "_FG", MG: "_MG" },
          },
          ccclass$3 = _decorator.ccclass,
          property$3 = _decorator.property,
          LampSpine =
            ((_dec$3 = property$3({ type: Label, tooltip: "金額" })),
            (_dec2$2 = property$3({ type: Font, tooltip: "FG的字形" })),
            (_dec3 = property$3({ type: Font, tooltip: "MGy字形" })),
            (_dec4 = property$3({ type: Node, tooltip: "贏分定位點" })),
            ccclass$3(
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
                      "m_coinLabel",
                      _descriptor$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgFont",
                      _descriptor2$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgFont",
                      _descriptor3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_anchorNodes",
                      _descriptor4,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.UpdateCoin = function (e) {
                    this.m_isShowWin || this.SetCoin(e);
                  }),
                  (n.SetCoin = function (e) {
                    e = MW_Define.ShowDisplayValue
                      ? MW_Define.ShowDisplayValue(e)
                      : e;
                    for (var t = 0; t < MW_Define.Unite.length; t++) {
                      if (e < 1e3) {
                        this.m_coinLabel.string =
                          node.FormatNumberThousands(
                            e,
                            node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO
                          ) + MW_Define.Unite[t];
                        break;
                      }
                      e = node.divide(e, 1e3);
                    }
                    this.m_coinLabel.node.setScale(v3(1, 1));
                  }),
                  (n.SetLabelLight = function () {
                    MW_Define.IsInFG
                      ? (this.m_coinLabel.font = this.m_fgFont)
                      : (this.m_coinLabel.font = this.m_mgFont);
                  }),
                  (n.SetUp = function () {
                    var e =
                      SpineAnimName$1.SET.PRE + (this.m_lvl + 1).toString();
                    MW_Define.IsInFG
                      ? (e += SpineAnimName$1.SET.FG)
                      : (e += SpineAnimName$1.SET.MG),
                      (this.m_coinLabel.node.active = !1),
                      this.PlayAnimation(e, !0);
                  }),
                  (n.ShowCollect = (function () {
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
                                      SpineAnimName$1.COLLECT +
                                        (this.m_lvl + 1).toString(),
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
                  (n.ShowCollectLvl = (function () {
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
                                  (t = SpineAnimName$1.COLLECT_LVL),
                                    (n = 1),
                                    (e.t0 = this.m_symbol),
                                    (e.next =
                                      e.t0 === MW_Define.Symbol.LAMP1 ||
                                      e.t0 === MW_Define.Symbol.LAMP2 ||
                                      e.t0 === MW_Define.Symbol.LAMP3
                                        ? 5
                                        : e.t0 === MW_Define.Symbol.LAMP5 ||
                                          e.t0 === MW_Define.Symbol.LAMP10
                                        ? 7
                                        : e.t0 === MW_Define.Symbol.LAMP20 ||
                                          e.t0 === MW_Define.Symbol.LAMP50
                                        ? 9
                                        : 11);
                                  break;
                                case 5:
                                  return (n = 1), e.abrupt("break", 11);
                                case 7:
                                  return (n = 2), e.abrupt("break", 11);
                                case 9:
                                  return (n = 3), e.abrupt("break", 11);
                                case 11:
                                  return (
                                    (t = js.formatStr(
                                      t,
                                      "0" + (this.m_lvl + 1).toString(),
                                      "0" + n.toString()
                                    )),
                                    this.m_coinLabel.node.setPosition(
                                      this.m_anchorNodes[
                                        this.m_lvl
                                      ].getPosition()
                                    ),
                                    tween(this.node)
                                      .delay(1.5)
                                      .call(function () {
                                        i.m_coinLabel.node.active = !0;
                                      })
                                      .start(),
                                    (e.next = 16),
                                    this.PlayAnimation(t, !1)
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
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((this.m_isShowWin = !0),
                                    t && (this.m_spine.timeScale = 1.2),
                                    !MW_Define.IsInFG)
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      SpineAnimName$1.WIN +
                                        (this.m_lvl + 1).toString() +
                                        SpineAnimName$1.FG_POST,
                                      !node$3.IsAutoSpin
                                    )
                                  );
                                case 5:
                                  e.next = 9;
                                  break;
                                case 7:
                                  return (
                                    (e.next = 9),
                                    this.PlayAnimation(
                                      SpineAnimName$1.WIN +
                                        (this.m_lvl + 1).toString() +
                                        SpineAnimName$1.MG_POST,
                                      !node$3.IsAutoSpin
                                    )
                                  );
                                case 9:
                                  this.m_spine.timeScale = 1;
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
                  (n.SetSpineColor = function (e) {
                    (this.m_spine.node.getComponent(sp.Skeleton).color = e),
                      (this.m_coinLabel.node.getComponent(Label).color = e);
                  }),
                  _createClass(t, [
                    {
                      key: "CoinLabel",
                      get: function () {
                        return this.m_coinLabel;
                      },
                    },
                    {
                      key: "IsShowWin",
                      set: function (e) {
                        (this.m_isShowWin = e),
                          e && (this.m_coinLabel.node.active = !1);
                      },
                    },
                  ]),
                  t
                );
              })(SymbolSpine)),
              (_descriptor$3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_coinLabel",
                [_dec$3],
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
                _class2$3.prototype,
                "m_fgFont",
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
              (_descriptor3 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_mgFont",
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
              (_descriptor4 = _applyDecoratedDescriptor(
                _class2$3.prototype,
                "m_anchorNodes",
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
              (_class$3 = _class2$3))
            ) || _class$3),
          _class$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "38259jQ2PNNo536AOMn7qu2",
            "ScatterSpine",
            void 0
          );
        var SpineAnimName$2 = {
            NEAR_WIN: "Scatter_NearWin_0",
            STOP: "Scatter_Stop_0",
            WIN: "Scatter_Win_0",
            SETUP: "SetUp_0",
          },
          ccclass$4 = _decorator.ccclass,
          property$4 = _decorator.property,
          ScatterSpine =
            ccclass$4(
              (_class$4 = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
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
                                    this.PlayAnimation(
                                      SpineAnimName$2.NEAR_WIN +
                                        (this.m_lvl + 1).toString(),
                                      !0
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
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    t && (this.m_spine.timeScale = 1.2),
                                    (e.next = 3),
                                    this.PlayAnimation(
                                      SpineAnimName$2.WIN +
                                        (this.m_lvl + 1).toString(),
                                      !node$3.IsAutoSpin
                                    )
                                  );
                                case 3:
                                  this.m_spine.timeScale = 1;
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
                  (n.Stop = function () {
                    this.PlayAnimation(
                      SpineAnimName$2.STOP + (this.m_lvl + 1).toString(),
                      !1
                    );
                  }),
                  (n.SetUp = function () {
                    this.PlayAnimation(
                      SpineAnimName$2.SETUP + (this.m_lvl + 1),
                      !0
                    );
                  }),
                  t
                );
              })(SymbolSpine))
            ) || _class$4;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "211cdvdVjtONoarCUk11zxL",
            "ColumnSymbol",
            void 0
          );
        var Z_INDEX = { None: 0, Scatter: 1, Lamp: 2 },
          ColumnSymbol = (function (e) {
            function t() {
              for (
                var t, n = arguments.length, i = new Array(n), o = 0;
                o < n;
                o++
              )
                i[o] = arguments[o];
              return (
                ((t = e.call.apply(e, [this].concat(i)) || this).m_height = 0),
                (t.m_symbolSprites = new Array()),
                (t.m_slotReels = null),
                (t.m_lvl = MW_Define.MaxLvl + 1),
                (t.m_isLights = new Array()),
                (t.m_lampNodes = []),
                (t.m_scatterNodes = []),
                (t.m_symbols = []),
                t
              );
            }
            _inheritsLoose(t, e);
            var n = t.prototype;
            return (
              (n.Init = function (e, t, n, i) {
                (this.m_height = e), (this.m_slotReels = t);
                for (var o = MW_Define.MAX_ROW - 1; o >= 0; o--) {
                  var r = new Node();
                  this.addChild(r);
                  var s = r.addComponent(Sprite);
                  (this.m_symbolSprites[o] = s),
                    (this.m_isLights[o] = !1),
                    ((r = instantiate(n)).active = !1),
                    this.addChild(r),
                    node.SetZIndex(r, Z_INDEX.Lamp),
                    (this.m_lampNodes[o] = r),
                    ((r = instantiate(i)).active = !1),
                    this.addChild(r),
                    node.SetZIndex(r, Z_INDEX.Scatter),
                    (this.m_scatterNodes[o] = r);
                }
              }),
              (n.GetSymbol = function (e) {
                var t = this.m_symbols[e];
                return t >= MW_Define.Symbol.LAMP1 &&
                  t <= MW_Define.Symbol.LAMP50
                  ? this.m_lampNodes[e]
                  : t === MW_Define.Symbol.SCATTER
                  ? this.m_scatterNodes[e]
                  : this.m_symbolSprites[e].node;
              }),
              (n.SetSymbols = function (e) {
                this.m_symbols = e;
                var t = node.divide(this.m_height, e.length);
                this.m_lvl = e.length - MW_Define.MIN_ROW;
                for (var n = 0; n < this.m_symbolSprites.length; n++) {
                  if (n < e.length)
                    if (
                      e[n] >= MW_Define.Symbol.LAMP1 &&
                      e[n] <= MW_Define.Symbol.LAMP50
                    ) {
                      (this.m_lampNodes[n].active = !0),
                        (this.m_symbolSprites[n].node.active = !1),
                        (this.m_scatterNodes[n].active = !1),
                        this.m_lampNodes[n].setPosition(v3(0, (n + 0.5) * t));
                      var i = this.m_lampNodes[n].getComponent(LampSpine);
                      i.SetCoin(MW_Define.GetCoin(e[n])),
                        (i.Symbol = e[n]),
                        i.SetLabelLight(),
                        (i.Level = this.m_lvl),
                        i.SetUp(),
                        (i.IsShowWin = !1);
                    } else if (e[n] === MW_Define.Symbol.SCATTER) {
                      (this.m_lampNodes[n].active = !1),
                        (this.m_symbolSprites[n].node.active = !1),
                        (this.m_scatterNodes[n].active = !0),
                        this.m_scatterNodes[n].setPosition(
                          v3(0, (n + 0.5) * t)
                        );
                      var o = this.m_scatterNodes[n].getComponent(ScatterSpine);
                      (o.Level = this.m_lvl), o.SetUp(), (o.IsShowWin = !1);
                    } else
                      (this.m_lampNodes[n].active = !1),
                        (this.m_symbolSprites[n].node.active = !0),
                        (this.m_scatterNodes[n].active = !1),
                        (this.m_symbolSprites[n].spriteFrame =
                          this.m_slotReels.GetSymbolSpriteFrame(
                            e[n],
                            this.m_lvl
                          )),
                        this.m_symbolSprites[n].node.setPosition(
                          v3(0, (n + 0.5) * t)
                        );
                  else
                    (this.m_lampNodes[n].active = !1),
                      (this.m_symbolSprites[n].node.active = !1),
                      (this.m_scatterNodes[n].active = !1);
                  this.m_isLights[n] = !1;
                }
              }),
              (n.ChangeSymbol = function (e, t) {
                if (
                  e >= MW_Define.Symbol.LAMP1 &&
                  e <= MW_Define.Symbol.LAMP50
                ) {
                  (this.m_lampNodes[t].active = !0),
                    (this.m_symbolSprites[t].node.active = !1),
                    (this.m_scatterNodes[t].active = !1),
                    this.m_lampNodes[t].setPosition(
                      this.m_symbolSprites[t].node.position
                    );
                  var n = this.m_lampNodes[t].getComponent(SymbolSpine);
                  n.SetCoin(MW_Define.GetCoin(e)),
                    n.SetLabelLight(),
                    (n.Level = this.m_lvl),
                    n.SetUp();
                } else
                  this.m_symbolSprites[t].spriteFrame =
                    this.m_slotReels.GetSymbolSpriteFrame(e, this.m_lvl);
                this.m_symbolSprites[t].node.active = !0;
              }),
              (n.SetLight = function (e) {
                this.m_isLights[e] = !0;
              }),
              (n.ResetLight = function () {
                for (var e = 0; e < this.m_isLights.length; e++)
                  this.m_isLights[e] = !1;
              }),
              (n.ShowLight = function (e) {
                void 0 === e && (e = !1);
                for (var t = 0; t < this.m_isLights.length; t++)
                  if (this.m_isLights[t] || e) {
                    this.m_symbolSprites[t].node.getComponent(Sprite).color =
                      color(255, 255, 255);
                    var n = this.m_lampNodes[t].getComponent(SymbolSpine);
                    n.SetSpineColor(color(255, 255, 255)),
                      (n =
                        this.m_scatterNodes[t].getComponent(
                          SymbolSpine
                        )).SetSpineColor(color(255, 255, 255));
                  } else {
                    this.m_symbolSprites[t].node.getComponent(Sprite).color =
                      color(115, 115, 115);
                    var i = this.m_lampNodes[t].getComponent(SymbolSpine);
                    i.SetSpineColor(color(144, 144, 144)),
                      (i =
                        this.m_scatterNodes[t].getComponent(
                          SymbolSpine
                        )).SetSpineColor(color(144, 144, 144));
                  }
              }),
              (n.ShowNearWin = function () {
                for (var e = 0; e < this.m_symbols.length; e++) {
                  if (this.m_symbols[e] === MW_Define.Symbol.SCATTER)
                    this.m_scatterNodes[e]
                      .getComponent(SymbolSpine)
                      .ShowNearWin();
                }
              }),
              (n.StopNearWin = function () {
                for (var e = 0; e < this.m_symbols.length; e++) {
                  if (this.m_symbols[e] === MW_Define.Symbol.SCATTER)
                    this.m_scatterNodes[e].getComponent(SymbolSpine).Stop();
                }
              }),
              (n.UpdateLampCoin = function () {
                for (var e = 0; e < this.m_symbols.length; e++) {
                  if (
                    this.m_symbols[e] >= MW_Define.Symbol.LAMP1 &&
                    this.m_symbols[e] <= MW_Define.Symbol.LAMP50
                  )
                    this.m_lampNodes[e]
                      .getComponent(SymbolSpine)
                      .UpdateCoin(MW_Define.GetCoin(this.m_symbols[e]));
                }
              }),
              _createClass(t, [
                {
                  key: "Level",
                  get: function () {
                    return this.m_lvl;
                  },
                },
              ]),
              t
            );
          })(Node),
          _dec$4,
          _dec2$3,
          _dec3$1,
          _dec4$1,
          _class$5,
          _class2$4,
          _descriptor$4,
          _descriptor2$3,
          _descriptor3$1,
          _descriptor4$1;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8a828Dkc8tL9ok3XdUMqlGn",
            "DataStructure",
            void 0
          ),
          cclegacy._RF.pop(),
          cclegacy._RF.push({}, "39de4yLu9lEoY/ydckebus0", "SlotReels", void 0);
        var HARD_STOP_INTERVAL_TIME = 0.15,
          MaxLockSpinTime = 10,
          WildExtraRound = 7,
          SymbolLampName = "Symbol_09",
          Z_INDEX$1 = { Symbol: 0, NearWin: 1 },
          MG_Reel = [
            [
              9, 5, 5, 5, 8, 8, 9, 7, 7, 7, 7, 2, 2, 0, 0, 0, 9, 0, 0, 0, 1, 9,
              4, 4, 3, 3, 3, 3, 0, 2, 2, 8, 1, 17, 5, 5, 6, 6, 7, 0, 5, 5, 5, 9,
              4, 4, 4, 4, 9, 0, 0, 0, 3, 3, 17, 8, 8, 1, 1, 1, 3, 3, 3, 5, 5, 5,
              5, 9, 1, 1, 8, 8, 9, 4, 0, 0, 5, 5, 6, 6,
            ],
            [
              9, 7, 4, 4, 4, 3, 3, 9, 9, 1, 1, 2, 2, 8, 6, 6, 0, 0, 9, 8, 5, 5,
              5, 9, 9, 8, 8, 6, 6, 0, 0, 1, 1, 8, 7, 9, 6, 5, 5, 5, 5, 9, 1, 3,
              3, 2, 2, 9, 7, 4, 4, 9, 8, 0, 0, 1, 1, 9, 2, 2, 17, 3, 3, 6, 4, 4,
              0, 9, 9, 5, 5, 5, 7, 1, 1, 17, 0, 0, 0,
            ],
            [
              5, 5, 5, 2, 2, 9, 7, 7, 4, 6, 3, 9, 9, 0, 8, 8, 1, 1, 9, 6, 5, 5,
              3, 9, 9, 4, 4, 8, 1, 1, 7, 6, 1, 0, 2, 9, 9, 9, 3, 3, 8, 4, 7, 5,
              5, 6, 0, 1, 8, 2, 7, 9, 4, 6, 6, 9, 9, 9, 5, 5, 8, 1, 1, 7, 2, 2,
              6, 3, 3, 0, 4, 4, 17, 8, 5, 5,
            ],
            [
              2, 9, 4, 0, 0, 5, 5, 7, 1, 8, 3, 9, 9, 2, 3, 0, 0, 4, 9, 8, 5, 5,
              7, 9, 9, 1, 1, 1, 2, 0, 3, 8, 4, 6, 6, 9, 9, 9, 5, 5, 7, 7, 0, 8,
              8, 8, 3, 4, 6, 9, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 6, 5, 5, 0, 4, 4,
              8, 5, 5, 7, 1, 1, 1, 2, 6, 3, 17,
            ],
            [
              0, 0, 9, 8, 8, 2, 9, 6, 3, 5, 9, 9, 0, 0, 0, 8, 8, 8, 4, 7, 7, 1,
              1, 17, 6, 6, 2, 2, 9, 0, 0, 3, 3, 4, 4, 17, 0, 0, 0, 9, 9, 9, 5,
              6, 8, 8, 1, 1, 8, 8, 1, 7, 7, 7, 6, 6, 5, 5, 8, 8, 1, 1, 7, 2, 2,
              5, 3, 3, 4, 4, 4, 0, 0, 0, 0,
            ],
            [
              9, 2, 3, 4, 4, 9, 4, 4, 8, 9, 0, 7, 6, 6, 2, 2, 9, 1, 1, 0, 0, 4,
              4, 17, 8, 8, 1, 1, 9, 7, 7, 1, 1, 1, 9, 17, 2, 2, 2, 4, 6, 9, 3,
              3, 3, 6, 6, 6, 4, 4, 4, 0, 0, 0, 9, 2, 2, 3, 3, 9, 4, 4, 7, 8, 8,
              5, 5, 5, 9, 1, 1, 0, 0,
            ],
          ],
          FG_Reel = [
            [
              0, 2, 4, 15, 8, 3, 4, 4, 9, 0, 1, 5, 0, 6, 6, 1, 4, 5, 2, 9, 5, 3,
              8, 0, 6, 6, 9, 4, 1, 3, 6, 4, 0, 9, 0, 5, 0, 2, 5, 0, 8, 0, 3, 4,
              0, 2, 4, 8, 3, 4, 4, 9, 0, 1, 5, 0, 6, 6, 1, 4, 5, 2, 11, 5, 3, 8,
              0, 6, 6, 9, 4, 1, 3, 6, 4, 0, 9, 0, 5, 0, 2, 5, 0, 8, 0, 3, 4,
            ],
            [
              9, 4, 4, 3, 0, 14, 0, 1, 6, 1, 2, 9, 3, 6, 6, 0, 7, 10, 1, 3, 6,
              7, 1, 11, 2, 3, 4, 3, 16, 5, 3, 7, 1, 4, 9, 2, 1, 6, 11, 7, 7, 6,
              9, 4, 4, 3, 0, 9, 0, 1, 6, 1, 2, 9, 3, 6, 6, 0, 7, 10, 1, 3, 6, 7,
              1, 11, 2, 3, 4, 3, 5, 3, 7, 9, 4, 1, 2, 1, 6, 9, 7, 7, 6,
            ],
            [
              1, 7, 5, 2, 0, 8, 4, 1, 2, 2, 4, 5, 0, 1, 7, 4, 2, 3, 0, 3, 3, 8,
              0, 0, 4, 5, 3, 2, 4, 1, 7, 5, 2, 0, 8, 4, 1, 2, 2, 4, 5, 0, 1, 7,
              4, 2, 3, 3, 3, 8, 0, 4, 5, 3, 2, 4,
            ],
            [
              11, 0, 2, 5, 1, 3, 3, 1, 5, 5, 0, 3, 2, 1, 5, 13, 4, 0, 3, 2, 5,
              0, 4, 0, 6, 2, 9, 6, 1, 3, 4, 4, 4, 3, 5, 16, 1, 5, 2, 6,
            ],
            [
              9, 0, 2, 0, 4, 9, 1, 7, 3, 3, 4, 4, 7, 1, 16, 1, 0, 7, 8, 2, 11,
              2, 8, 3, 3, 3, 2, 10, 1, 8, 0, 2, 8, 8, 1, 4, 9,
            ],
            [
              8, 5, 1, 16, 1, 5, 4, 6, 9, 2, 6, 3, 8, 1, 2, 9, 5, 6, 6, 3, 4, 7,
              7, 5, 12, 0, 7, 2, 5, 8, 0, 8, 0, 9, 6, 4, 7, 3, 0, 6, 8, 6,
            ],
          ],
          ccclass$5 = _decorator.ccclass,
          property$5 = _decorator.property,
          SlotReels =
            ((_dec$4 = property$5({ type: Label, tooltip: "位數提示" })),
            (_dec2$3 = property$5({ type: Prefab, tooltip: "神燈" })),
            (_dec3$1 = property$5({ type: Prefab, tooltip: "scatter" })),
            (_dec4$1 = property$5({
              type: Prefab,
              tooltip: "Near Win Prefab",
            })),
            ccclass$5(
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
                      "m_waysLabel",
                      _descriptor$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_lampPrefab",
                      _descriptor2$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_scatterPrefab",
                      _descriptor3$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_nearWinPrefab",
                      _descriptor4$1,
                      _assertThisInitialized(t)
                    ),
                    (t.m_symbolSpriteFrames = []),
                    (t.m_mgLampSpriteFrames = []),
                    (t.m_fgLampSpriteFrames = []),
                    (t.m_extraSpriteFrames = []),
                    (t.m_gameView = null),
                    (t.m_symbolSize = null),
                    (t.m_viewSize = null),
                    (t.m_reelPositionOffset = [
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                      v3(0, 0),
                    ]),
                    (t.m_columnSymbols = new Array()),
                    (t.m_plateInfo = new Array()),
                    (t.m_upperSymbol = new Array()),
                    (t.m_lowerSymbol = new Array()),
                    (t.m_reelStopTime = new Array()),
                    (t.m_reelPreTime = new Array()),
                    (t.m_isChangeSymbol = {}),
                    (t.m_isChangeToFinalSymbol = new Array()),
                    (t.m_time = 0),
                    (t.m_stopTime = 0),
                    (t.m_riseTime = 0),
                    (t.m_spinBufferTime01 = 0.07),
                    (t.m_spinBufferTime02 = 0.07),
                    (t.m_downLength = 30),
                    (t.m_spinSpeed = 0.3),
                    (t.m_upLength = 20),
                    (t.m_numberOfSymbol = 0),
                    (t.m_timesOfBaseSpin = 1),
                    (t.m_timesOfNearWinSpin = [
                      3.213, 3.213, 3.213, 3.213, 3.213, 3.213,
                    ]),
                    (t.m_spinIntervalTimes = 1),
                    (t.m_spinDelayTime = 0),
                    (t.m_isStop = !1),
                    (t.m_isClickStopBtn = !1),
                    (t.m_playStopSound = null),
                    (t.m_isPlaySound = [!1, !1, !1, !1, !1]),
                    (t.m_reelSoundId = null),
                    (t.m_lockColumn = new Array()),
                    (t.m_oldRealPlate = null),
                    (t.m_isInitEnd = !1),
                    (t.m_secondScatterCol = -1),
                    (t.m_isStartNearWin = !1),
                    (t.m_isPlayNearWin = [!1, !1, !1, !1, !1]),
                    (t.m_ways = 0),
                    (t.m_nearWinNodes = []),
                    (t.m_mgCount = [0, 0, 0, 0, 0, 0]),
                    (t.m_fgCount = [0, 0, 0, 0, 0, 0]),
                    (t.m_lastWildCol = -1),
                    (t.m_wildCols = []),
                    (t.m_nearWinSoundIds = []),
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
                        this.m_viewSize.width / MW_Define.COL,
                        this.m_viewSize.height / MW_Define.MAX_ROW
                      )),
                      log("this.m_symbol", this.m_symbolSize);
                    for (var t = 0; t < MW_Define.COL; t++)
                      if (t < 2) this.m_nearWinNodes.push(null);
                      else {
                        var n =
                            this.m_symbolSize.width * (t + 0.5) +
                            this.m_reelPositionOffset[t].x -
                            this.m_viewSize.width / 2,
                          i = instantiate(this.m_nearWinPrefab);
                        this.node.addChild(i),
                          node.SetZIndex(i, Z_INDEX$1.NearWin),
                          this.m_nearWinNodes.push(i),
                          i.setPosition(v3(n, i.getPosition().y)),
                          (i.active = !1);
                      }
                    var o = function () {
                      var t = node$4.TempoSetting.GoldenEmpire;
                      (e.m_riseTime = t.BASE.RISE_TIME),
                        (e.m_upLength = t.BASE.UP_LENGTH),
                        (e.m_spinBufferTime01 = t.BASE.SPIN_BUFFER_TIME_01),
                        (e.m_spinBufferTime02 = t.BASE.SPIN_BUFFER_TIME_02),
                        (e.m_downLength = t.BASE.DOWN_LENGTH),
                        (e.m_spinSpeed = t.BASE.SPIN_SPEED),
                        (e.m_timesOfBaseSpin = t.BASE.TIMES_OF_BASE_SPIN),
                        (e.m_spinIntervalTimes = t.BASE.SPIN_INTERVAL_TIMES),
                        (e.m_spinDelayTime = t.BASE.SPIN_DELAY_TIME),
                        (HARD_STOP_INTERVAL_TIME =
                          t.BASE.HARD_STOP_INTERVAL_TIME);
                    };
                    o(), node$4.AddCb(o);
                  }),
                  (n.Init = function (e) {
                    (this.m_gameView = e), this.LoadSymbol();
                  }),
                  (n.LoadSymbol = function () {
                    var e = this;
                    node$2.GameBundle.loadDir(
                      "Img/Scene/Symbol",
                      SpriteFrame,
                      function (t, n) {
                        if (t) e.LoadSymbol();
                        else {
                          (e.m_symbolSpriteFrames = n),
                            e.m_symbolSpriteFrames.sort(function (t, n) {
                              var i = e.GetIdx(t.name),
                                o = e.GetIdx(n.name);
                              return 2 !== i.length || 2 !== o.length
                                ? 0
                                : i[0] < o[0]
                                ? -1
                                : i[0] > o[0]
                                ? 1
                                : i[1] < o[1]
                                ? -1
                                : i[1] > o[1]
                                ? 1
                                : 0;
                            }),
                            (e.m_extraSpriteFrames =
                              e.m_symbolSpriteFrames.splice(36));
                          for (
                            var i = 0;
                            i < e.m_extraSpriteFrames.length;
                            i++
                          ) {
                            if (
                              e.m_extraSpriteFrames[i].name.match(
                                SymbolLampName
                              )
                            ) {
                              var o = e.m_extraSpriteFrames.splice(i, 1)[0];
                              i--,
                                o.name.match("FG")
                                  ? e.m_fgLampSpriteFrames.push(o)
                                  : e.m_mgLampSpriteFrames.push(o);
                            }
                          }
                          e.CreateSymbol();
                        }
                      }
                    );
                  }),
                  (n.GetIdx = function (e) {
                    for (
                      var t = /Symbol_(\d{2})_(\d)/g.exec(e), n = [], i = 0;
                      i < t.length;
                      i++
                    ) {
                      var o = Number(t[i]);
                      isNaN(o) || n.push(o);
                    }
                    return n;
                  }),
                  (n.SetWay = function (e) {
                    void 0 === e
                      ? (this.m_ways = 0)
                      : 0 === this.m_ways
                      ? (this.m_ways = e)
                      : (this.m_ways = node.times(this.m_ways, e)),
                      (this.m_waysLabel.string = node.FormatNumberThousands(
                        this.m_ways,
                        node.FORMAT_NUMBER_TYPE.NONE_DOT
                      ));
                  }),
                  (n.CreateSymbol = function () {
                    for (var e = !1, t = 0; t < MW_Define.COL; t++) {
                      this.m_lockColumn.push(!1),
                        this.m_isChangeToFinalSymbol.push(!1),
                        this.m_reelStopTime.push(null),
                        this.m_reelPreTime.push(null);
                      var n = new ColumnSymbol();
                      null === n.getComponent(UIOpacity) &&
                        n.addComponent(UIOpacity),
                        this.node.addChild(n),
                        node.SetZIndex(n, Z_INDEX$1.Symbol),
                        this.m_columnSymbols.push(n),
                        n.Init(
                          this.m_viewSize.height,
                          this,
                          this.m_lampPrefab,
                          this.m_scatterPrefab
                        ),
                        (n.name = this.m_numberOfSymbol.toString()),
                        (this.m_numberOfSymbol += 1);
                      var i =
                        this.m_symbolSize.width * (t + 0.5) +
                        this.m_reelPositionOffset[t].x -
                        this.m_viewSize.width / 2;
                      n.setPosition(v3(i, -this.m_viewSize.height / 2));
                      var o = [],
                        r = 3 + t;
                      t === MW_Define.COL / 2 && (e = !0),
                        e &&
                          (r = MW_Define.MaxLvl + 1 - (t - MW_Define.COL / 2));
                      for (var s = 0; s < r; s++)
                        o.push(MW_Define.Symbol.K + t);
                      n.SetSymbols(o), this.m_plateInfo.push(o), this.SetWay(r);
                    }
                    this.m_oldRealPlate = JSON.parse(
                      JSON.stringify(this.m_plateInfo)
                    );
                    for (var l = 0; l < MW_Define.COL; l++) {
                      var a =
                          this.m_symbolSize.width * (l + 0.5) +
                          this.m_reelPositionOffset[l].x -
                          this.m_viewSize.width / 2,
                        u = this.m_viewSize.height - this.m_viewSize.height / 2,
                        c = new ColumnSymbol();
                      c.Init(
                        this.m_viewSize.height,
                        this,
                        this.m_lampPrefab,
                        this.m_scatterPrefab
                      ),
                        this.node.addChild(c),
                        node.SetZIndex(c, Z_INDEX$1.Symbol),
                        (c.name = (this.m_numberOfSymbol + l).toString()),
                        c.setPosition(v3(a, u));
                      var p = this.RandSymbolList({
                        MaxRow: MW_Define.MAX_ROW,
                      });
                      c.SetSymbols(p),
                        this.m_upperSymbol.push(c),
                        (u =
                          -this.m_viewSize.height - this.m_viewSize.height / 2);
                      var m = new ColumnSymbol();
                      m.Init(
                        this.m_viewSize.height,
                        this,
                        this.m_lampPrefab,
                        this.m_scatterPrefab
                      ),
                        this.node.addChild(m),
                        node.SetZIndex(m, Z_INDEX$1.Symbol),
                        (m.name = (-(l + 1)).toString()),
                        m.setPosition(v3(a, u)),
                        (p = this.RandSymbolList({
                          MaxRow: MW_Define.MAX_ROW,
                        })),
                        m.SetSymbols(p),
                        this.m_lowerSymbol.push(m);
                    }
                    this.m_isInitEnd = !0;
                  }),
                  (n.GetSymbolSpriteFrame = function (e, t) {
                    if (e < MW_Define.Symbol.LAMP1) {
                      var n = e * MW_Define.MaxLvl + t;
                      return this.m_symbolSpriteFrames[n];
                    }
                    if (
                      e >= MW_Define.Symbol.LAMP1 &&
                      e <= MW_Define.Symbol.LAMP50
                    )
                      return MW_Define.IsInFG
                        ? this.m_fgLampSpriteFrames[t]
                        : this.m_mgLampSpriteFrames[t];
                    var i = (e - MW_Define.Symbol.WILD) * MW_Define.MaxLvl + t;
                    return this.m_extraSpriteFrames[i];
                  }),
                  (n.SetPlateSymbol = function (e) {
                    if (0 == e.length || e.length < MW_Define.COL)
                      for (var t = 0; t < MW_Define.COL; t++) {
                        (this.m_lockColumn[t] = !1),
                          (this.m_reelStopTime[t] = null),
                          (this.m_reelPreTime[t] = null);
                        var n =
                          this.m_symbolSize.width * (t + 0.5) +
                          this.m_reelPositionOffset[t].x -
                          this.m_viewSize.width / 2;
                        this.m_columnSymbols[t].SetSymbols(
                          this.m_oldRealPlate[t]
                        ),
                          this.m_columnSymbols[t].ShowLight(!0),
                          this.m_columnSymbols[t].setPosition(
                            v3(
                              n,
                              this.m_reelPositionOffset[t].y -
                                this.m_viewSize.height / 2
                            )
                          );
                      }
                    else
                      for (var i = 0; i < MW_Define.COL; i++) {
                        (this.m_lockColumn[i] = !1),
                          (this.m_reelStopTime[i] = null),
                          (this.m_reelPreTime[i] = null);
                        var o =
                          this.m_symbolSize.width * (i + 0.5) +
                          this.m_reelPositionOffset[i].x -
                          this.m_viewSize.width / 2;
                        this.m_columnSymbols[i].SetSymbols(e[i]),
                          this.m_columnSymbols[i].ShowLight(!0),
                          this.m_columnSymbols[i].setPosition(
                            v3(
                              o,
                              this.m_reelPositionOffset[i].y -
                                this.m_viewSize.height / 2
                            )
                          );
                      }
                    for (var r = 0; r < MW_Define.COL; r++) {
                      var s =
                        this.m_symbolSize.width * (r + 0.5) +
                        this.m_reelPositionOffset[r].x -
                        this.m_viewSize.width / 2;
                      this.m_upperSymbol[r].setPosition(
                        v3(
                          s,
                          this.m_reelPositionOffset[r].y +
                            this.m_viewSize.height / 2
                        )
                      ),
                        this.m_lowerSymbol[r].setPosition(
                          v3(
                            s,
                            this.m_reelPositionOffset[r].y -
                              this.m_viewSize.height -
                              this.m_viewSize.height / 2
                          )
                        );
                    }
                  }),
                  (n.StartSpin = function (e) {
                    if (
                      (void 0 === e && (e = !0),
                      (this.m_time = 0),
                      (this.m_stopTime = 0),
                      (this.m_secondScatterCol = -1),
                      (this.m_lastWildCol = -1),
                      (this.m_isStop = !1),
                      (this.m_isStartNearWin = !1),
                      (this.m_isClickStopBtn = !1),
                      (this.m_isPlaySound = [!1, !1, !1, !1, !1]),
                      (this.m_isPlayNearWin = [!1, !1, !1, !1, !1]),
                      (this.m_nearWinSoundIds = []),
                      e)
                    )
                      for (var t = 0; t < MW_Define.COL; t++)
                        this.m_lockColumn[t] = !1;
                    for (var n = 0; n < MW_Define.COL; n++)
                      (this.m_reelStopTime[n] = null),
                        (this.m_reelPreTime[n] = null);
                    for (
                      var i = 0;
                      i < this.m_isChangeToFinalSymbol.length;
                      i++
                    )
                      this.m_isChangeToFinalSymbol[i] = !1;
                    this.SetWay();
                  }),
                  (n.SetIsClickStopBtn = function () {
                    for (
                      this.m_isClickStopBtn = !0;
                      this.m_nearWinSoundIds.length > 0;

                    )
                      node$1.Stop(this.m_nearWinSoundIds.pop());
                    if (0 != this.m_stopTime) {
                      var e = Math.ceil(this.m_time / this.m_spinSpeed);
                      e = e > 0 ? e : 1;
                      var t = this.m_wildCols.length;
                      if (
                        this.m_gameView.IsHardStop ||
                        !MW_Define.IsInFG ||
                        (MW_Define.IsInFG && 0 === t)
                      ) {
                        var n =
                          node$4.TempoSetting.GoldenEmpire.SPEED_UP_STOP_TIME(
                            MW_Define.COL,
                            this.m_time
                          );
                        n < this.m_stopTime &&
                          (this.m_stopTime = node.strip(n));
                        for (var i = 0; i < MW_Define.COL; i++) {
                          var o = e * this.m_spinSpeed;
                          this.m_reelStopTime[i] > o &&
                            ((this.m_reelStopTime[i] = node.strip(o)),
                            (this.m_reelPreTime[i] = node.strip(
                              (e - 1) * this.m_spinSpeed
                            )));
                        }
                      } else {
                        var r =
                          node$4.TempoSetting.GoldenEmpire.SPEED_UP_STOP_TIME(
                            MW_Define.COL,
                            this.m_time
                          ) +
                          WildExtraRound * this.m_spinSpeed;
                        r < this.m_stopTime &&
                          (this.m_stopTime = node.strip(r));
                        for (var s = 0; s < MW_Define.COL; s++) {
                          var l =
                            e * this.m_spinSpeed +
                            WildExtraRound * this.m_spinSpeed;
                          this.m_reelStopTime[s] > l &&
                            ((this.m_reelStopTime[s] = node.strip(l)),
                            (this.m_reelPreTime[s] = node.strip(
                              (e - 1) * this.m_spinSpeed +
                                WildExtraRound * this.m_spinSpeed
                            )));
                        }
                      }
                    }
                  }),
                  (n.Spin = function (e) {
                    (this.m_time = node.strip(this.m_time + e)),
                      this.m_isStop ||
                        (this.Spin_RealSpinMultiple(e),
                        !this.m_gameView.IsHardStop &&
                          !this.m_isStartNearWin &&
                          -1 !== this.m_secondScatterCol &&
                          this.m_time >
                            this.m_reelStopTime[this.m_secondScatterCol] &&
                          ((this.m_isStartNearWin = !0),
                          this.ShowNearWin(),
                          this.m_gameView.GenieSpine.PlayNearWin()),
                        this.m_time >= this.m_stopTime &&
                          0 != this.m_stopTime &&
                          ((this.m_isStop = !0),
                          this.m_reelSoundId &&
                            (node$1.Stop(this.m_reelSoundId),
                            (this.m_reelSoundId = null)),
                          this.m_isStartNearWin &&
                            this.m_gameView.GenieSpine.PlayIdle()));
                  }),
                  (n.Spin_RealSpinMultiple = function (e) {
                    var t = this.m_spinSpeed,
                      n = this.m_time;
                    this.m_isStartNearWin && (t = this.m_spinSpeed / 2);
                    for (var i = 0; i < MW_Define.COL; i++) {
                      var o = this.m_reelStopTime[i],
                        r =
                          (this.m_reelPreTime[i],
                          this.m_riseTime * MW_Define.COL);
                      if (!this.m_lockColumn[i]) {
                        this.m_isStartNearWin &&
                          i > this.m_secondScatterCol &&
                          n > this.m_reelStopTime[i - 1] &&
                          !this.m_isPlayNearWin[i] &&
                          ((this.m_isPlayNearWin[i] = !0),
                          this.m_isClickStopBtn ||
                            this.m_nearWinSoundIds.push(
                              node$1.Play(MW_Define.AudioClips.MG_NearWin)
                            ));
                        var s =
                            this.m_symbolSize.width * (i + 0.5) +
                            this.m_reelPositionOffset[i].x -
                            this.m_viewSize.width / 2,
                          l = -this.m_viewSize.height / 2,
                          a = 3 * this.m_viewSize.height,
                          u = (((n - r) % t) / t) * a;
                        if (n < this.m_riseTime * i);
                        else if (n < this.m_riseTime * (i + 1)) {
                          var c =
                            ((n - this.m_riseTime * i) / this.m_riseTime) *
                            this.m_upLength;
                          this.m_columnSymbols[i].setPosition(s, l + c);
                        } else if (n < r)
                          this.m_columnSymbols[i].setPosition(
                            s,
                            l + this.m_upLength
                          );
                        else if (null == o || n < o + r) {
                          var p = this.GetMovelength(
                            u,
                            1.5 * this.m_viewSize.height,
                            a,
                            i,
                            this.m_columnSymbols[i].name,
                            this.m_columnSymbols[i],
                            !1
                          );
                          this.m_columnSymbols[i].setPosition(s, l - p);
                        } else if (n < o + r + this.m_spinBufferTime01) {
                          var m =
                            ((n - o - r) / this.m_spinBufferTime01) *
                            this.m_downLength;
                          this.m_columnSymbols[i].setPosition(s, l - m),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_columnSymbols[i].name,
                              this.m_columnSymbols[i],
                              !0
                            );
                        } else if (
                          n <
                          o +
                            r +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ) {
                          var _ =
                            ((n - o - r - this.m_spinBufferTime01) /
                              this.m_spinBufferTime02) *
                            this.m_downLength;
                          this.m_columnSymbols[i].setPosition(
                            s,
                            l - this.m_downLength + _
                          ),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_columnSymbols[i].name,
                              this.m_columnSymbols[i],
                              !0
                            );
                        } else
                          this.CheckChangeToFinalSymbol(
                            i,
                            this.m_columnSymbols[i].name,
                            this.m_columnSymbols[i],
                            !0
                          ),
                            this.CheckPlayStopSound(i),
                            this.m_columnSymbols[i].setPosition(s, l);
                        var d =
                            this.m_symbolSize.width * (i + 0.5) +
                            this.m_reelPositionOffset[i].x -
                            this.m_viewSize.width / 2,
                          f =
                            this.m_viewSize.height - this.m_viewSize.height / 2;
                        if (n < this.m_riseTime * i);
                        else if (n < this.m_riseTime * (i + 1)) {
                          var h =
                            ((n - this.m_riseTime * i) / this.m_riseTime) *
                            this.m_upLength;
                          this.m_upperSymbol[i].setPosition(d, f + h);
                        } else if (n < r)
                          this.m_upperSymbol[i].setPosition(
                            d,
                            f + this.m_upLength
                          );
                        else if (null == o || n < o + r) {
                          var S = this.GetMovelength(
                            u,
                            2.5 * this.m_viewSize.height,
                            a,
                            i,
                            this.m_numberOfSymbol + i,
                            this.m_upperSymbol[i],
                            !1
                          );
                          this.m_upperSymbol[i].setPosition(d, f - S);
                        } else if (n < o + r + this.m_spinBufferTime01) {
                          var y =
                            ((n - o - r) / this.m_spinBufferTime01) *
                            this.m_downLength;
                          this.m_upperSymbol[i].setPosition(d, f - y),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_upperSymbol[i].name,
                              this.m_upperSymbol[i],
                              !0
                            );
                        } else if (
                          n <
                          o +
                            r +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ) {
                          var g =
                            ((n - o - r - this.m_spinBufferTime01) /
                              this.m_spinBufferTime02) *
                            this.m_downLength;
                          this.m_upperSymbol[i].setPosition(
                            d,
                            f - this.m_downLength + g
                          ),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_upperSymbol[i].name,
                              this.m_upperSymbol[i],
                              !0
                            );
                        } else
                          this.CheckChangeToFinalSymbol(
                            i,
                            this.m_numberOfSymbol + i,
                            this.m_upperSymbol[i]
                          ),
                            this.m_upperSymbol[i].setPosition(d, f);
                        if (
                          ((d =
                            this.m_symbolSize.width * (i + 0.5) +
                            this.m_reelPositionOffset[i].x -
                            this.m_viewSize.width / 2),
                          (f =
                            -this.m_viewSize.height -
                            this.m_viewSize.height / 2),
                          n < this.m_riseTime * i)
                        );
                        else if (n < this.m_riseTime * (i + 1)) {
                          var w =
                            ((n - this.m_riseTime * i) / this.m_riseTime) *
                            this.m_upLength;
                          this.m_lowerSymbol[i].setPosition(d, f + w);
                        } else if (n < r)
                          this.m_lowerSymbol[i].setPosition(
                            d,
                            f + this.m_upLength
                          );
                        else if (null == o || n < o + r) {
                          var C = this.GetMovelength(
                            u,
                            0.5 * this.m_viewSize.height,
                            a,
                            i,
                            -(i + 1),
                            this.m_lowerSymbol[i],
                            !1
                          );
                          this.m_lowerSymbol[i].setPosition(d, f - C);
                        } else if (n < o + r + this.m_spinBufferTime01) {
                          var R =
                            ((n - o - r) / this.m_spinBufferTime01) *
                            this.m_downLength;
                          this.m_lowerSymbol[i].setPosition(d, f - R),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_lowerSymbol[i].name,
                              this.m_lowerSymbol[i],
                              !0
                            );
                        } else if (
                          n <
                          o +
                            r +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02
                        ) {
                          var v =
                            ((n - o - r - this.m_spinBufferTime01) /
                              this.m_spinBufferTime02) *
                            this.m_downLength;
                          this.m_lowerSymbol[i].setPosition(
                            d,
                            f - this.m_downLength + v
                          ),
                            this.CheckChangeToFinalSymbol(
                              i,
                              this.m_lowerSymbol[i].name,
                              this.m_lowerSymbol[i],
                              !0
                            );
                        } else
                          this.CheckChangeToFinalSymbol(
                            i,
                            -(i + 1),
                            this.m_lowerSymbol[i]
                          ),
                            this.m_lowerSymbol[i].setPosition(d, f);
                      }
                    }
                  }),
                  (n.GetMovelength = function (e, t, n, i, o, r, s) {
                    return (
                      e >= t
                        ? ((e -= n),
                          this.m_isChangeSymbol[o] &&
                            !this.m_isClickStopBtn &&
                            ((this.m_isChangeSymbol[o] = !1),
                            this.ChangeSymbol(i, r, s)))
                        : (this.m_isChangeSymbol[o] = !0),
                      e
                    );
                  }),
                  (n.ChangeSymbol = function (e, t, n) {
                    var i = Number(t.name),
                      o = this.m_reelPreTime[e],
                      r = this.m_riseTime * this.m_viewSize.height * 3;
                    if (n)
                      if (i >= 0 && i < this.m_numberOfSymbol)
                        t.SetSymbols(this.m_plateInfo[i]);
                      else {
                        var s = this.RandSymbolList();
                        t.SetSymbols(s);
                      }
                    else if (
                      null != o &&
                      (this.m_time >= o ||
                        Math.abs(this.m_time - (o + r)) < this.m_spinSpeed)
                    )
                      if (i >= 0 && i < this.m_numberOfSymbol)
                        t.SetSymbols(this.m_plateInfo[i]);
                      else {
                        var l = this.RandSymbolList();
                        t.SetSymbols(l);
                      }
                    else {
                      var a = this.RandSymbolList({ Col: i, IsUsingReel: !0 });
                      t.SetSymbols(a);
                    }
                  }),
                  (n.CheckChangeToFinalSymbol = function (e, t, n, i) {
                    void 0 === i && (i = !1),
                      this.m_isChangeToFinalSymbol[t] ||
                        ((this.m_isChangeToFinalSymbol[t] = !0),
                        this.ChangeSymbol(e, n, i));
                  }),
                  (n.SetPlayStopSoundFunction = function (e) {
                    this.m_playStopSound = e;
                  }),
                  (n.CheckPlayStopSound = function (e) {
                    this.m_playStopSound &&
                      !this.m_isPlaySound[e] &&
                      ((this.m_isPlaySound[e] = !0),
                      this.m_playStopSound(e),
                      this.SetWay(this.m_plateInfo[e].length),
                      this.m_nearWinSoundIds[e] &&
                        node$1.Stop(this.m_nearWinSoundIds[e]),
                      this.m_gameView.IsHardStop ||
                        (MW_Define.IsInFG
                          ? e === this.m_lastWildCol &&
                            this.m_gameView.ShowWild()
                          : (this.m_columnSymbols[e].ShowNearWin(),
                            -1 != this.m_secondScatterCol &&
                              e >= this.m_secondScatterCol &&
                              (this.m_nearWinNodes[e] &&
                                (this.m_nearWinNodes[e].active = !1),
                              e + 1 < MW_Define.COL &&
                                this.m_nearWinNodes[e + 1] &&
                                (this.m_nearWinNodes[e + 1].active = !0)))));
                  }),
                  (n.SetPlateInfo = function (e, t) {
                    (this.m_plateInfo = e),
                      t ||
                        (this.m_oldRealPlate = JSON.parse(
                          JSON.stringify(this.m_plateInfo)
                        ));
                    for (
                      var n = 5 * this.m_riseTime,
                        i = Math.ceil((this.m_time - n) / this.m_spinSpeed),
                        o = 0,
                        r = 0;
                      r < this.m_plateInfo.length;
                      r++
                    ) {
                      for (
                        var s = 0;
                        s < this.m_plateInfo[r].length &&
                        (this.m_plateInfo[r][s] !== MW_Define.Symbol.SCATTER ||
                          2 !== ++o);
                        s++
                      );
                      if (2 === o && r !== this.m_plateInfo.length - 1) {
                        this.m_secondScatterCol = r;
                        break;
                      }
                    }
                    if (this.m_isClickStopBtn || this.m_gameView.IsHardStop) {
                      this.m_stopTime =
                        (i + 1) * this.m_spinSpeed +
                        this.m_spinDelayTime +
                        this.m_spinBufferTime01 +
                        this.m_spinBufferTime02 +
                        HARD_STOP_INTERVAL_TIME *
                          this.m_spinSpeed *
                          (MW_Define.COL - 1);
                      for (var l = 0; l < MW_Define.COL; l++)
                        (this.m_reelStopTime[l] = node.strip(
                          (i + 1) * this.m_spinSpeed
                        )),
                          (this.m_reelPreTime[l] = node.strip(
                            i * this.m_spinSpeed
                          ));
                    } else {
                      for (var a = 0, u = 0; u < this.m_lockColumn.length; u++)
                        this.m_lockColumn[u] && a++;
                      if (
                        (a === MW_Define.COL - 1 &&
                          i < MaxLockSpinTime &&
                          (i = MaxLockSpinTime),
                        MW_Define.IsInFG)
                      ) {
                        this.m_wildCols = [];
                        for (var c = [], p = 0; p < MW_Define.COL; p++) {
                          for (
                            var m = !1, _ = 0;
                            _ < this.m_plateInfo[p].length;
                            _++
                          )
                            if (
                              this.m_plateInfo[p][_] === MW_Define.Symbol.WILD
                            ) {
                              m = !0;
                              break;
                            }
                          m
                            ? ((this.m_lastWildCol = p),
                              this.m_wildCols.push(p))
                            : c.push(p);
                        }
                        var d = [],
                          f = this.m_wildCols.length;
                        d.push.apply(d, this.m_wildCols),
                          d.push.apply(d, c),
                          (this.m_stopTime =
                            node.strip(
                              this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                                this.m_spinIntervalTimes *
                                  this.m_spinSpeed *
                                  (MW_Define.COL - 1) +
                                this.m_spinDelayTime +
                                n
                            ) +
                            this.m_spinBufferTime01 +
                            this.m_spinBufferTime02),
                          0 !== f &&
                            (this.m_stopTime = node.plus(
                              this.m_stopTime,
                              WildExtraRound * this.m_spinSpeed
                            ));
                        for (var h = 0; h < d.length; h++) {
                          var S = 0;
                          0 !== f &&
                            h >= f &&
                            (S = WildExtraRound * this.m_spinSpeed);
                          var y = d[h];
                          (this.m_reelStopTime[y] = node.strip(
                            this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinSpeed *
                                (h - 0) +
                              S
                          )),
                            (this.m_reelPreTime[y] = node.strip(
                              this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                                this.m_spinIntervalTimes *
                                  this.m_spinSpeed *
                                  (h - 0 - 1) +
                                S
                            ));
                        }
                      } else {
                        this.m_stopTime =
                          node.strip(
                            this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinSpeed *
                                (MW_Define.COL - 1) +
                              this.m_spinDelayTime +
                              n
                          ) +
                          this.m_spinBufferTime01 +
                          this.m_spinBufferTime02;
                        for (var g = 0; g < MW_Define.COL; g++)
                          (this.m_reelStopTime[g] = node.strip(
                            this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                              this.m_spinIntervalTimes *
                                this.m_spinSpeed *
                                (g - 0)
                          )),
                            (this.m_reelPreTime[g] = node.strip(
                              this.m_spinSpeed * (i + this.m_timesOfBaseSpin) +
                                this.m_spinIntervalTimes *
                                  this.m_spinSpeed *
                                  (g - 0 - 1)
                            ));
                      }
                      if (-1 !== this.m_secondScatterCol) {
                        this.m_stopTime =
                          this.m_stopTime +
                          (this.m_timesOfNearWinSpin[
                            this.m_secondScatterCol + 1
                          ] -
                            this.m_timesOfBaseSpin) *
                            (MW_Define.COL - (this.m_secondScatterCol + 1));
                        for (var w = 0; w < MW_Define.COL; w++)
                          w > this.m_secondScatterCol &&
                            ((this.m_reelStopTime[w] = node.strip(
                              this.m_reelStopTime[w] +
                                (this.m_timesOfNearWinSpin[
                                  this.m_secondScatterCol + 1
                                ] -
                                  this.m_timesOfBaseSpin) *
                                  (w - this.m_secondScatterCol)
                            )),
                            (this.m_reelPreTime[w] = node.strip(
                              this.m_reelStopTime[w] +
                                (this.m_timesOfNearWinSpin[
                                  this.m_secondScatterCol + 1
                                ] -
                                  this.m_timesOfBaseSpin) *
                                  (w - this.m_secondScatterCol)
                            )));
                      }
                    }
                  }),
                  (n.IsPlateStop = function () {
                    return this.m_isStop;
                  }),
                  (n.GetSymbol = function (e) {
                    return e instanceof Vec3
                      ? this.m_plateInfo[e.x][e.y]
                      : this.m_plateInfo[e.Col][e.Row];
                  }),
                  (n.GetSymbolNode = function (e) {
                    return e instanceof Vec3
                      ? this.m_columnSymbols[e.x].GetSymbol(e.y)
                      : this.m_columnSymbols[e.Col].GetSymbol(e.Row);
                  }),
                  (n.GetSymbolPostion = function (e) {
                    var t, n;
                    e instanceof Vec3
                      ? ((t = e.x), (n = e.y))
                      : ((t = e.Col), (n = e.Row));
                    var i = v3(this.m_columnSymbols[t].getPosition().x, 0),
                      o = this.m_columnSymbols[t].GetSymbol(n);
                    return (
                      (i.y = o.getPosition().y - this.m_viewSize.height / 2), i
                    );
                  }),
                  (n.GetColumnLvl = function (e) {
                    return this.m_columnSymbols[e].Level;
                  }),
                  (n.RandSymbolList = function (e) {
                    var t = [];
                    e || (e = {}),
                      (!e.MaxRow || e.MaxRow <= 0) &&
                        (e.MaxRow = Math.floor(
                          Math.random() *
                            (MW_Define.MAX_ROW - MW_Define.MIN_ROW) +
                            MW_Define.MIN_ROW
                        ));
                    for (var n = 0; n < e.MaxRow; n++)
                      if (e.IsUsingReel && e.Col >= 0 && e.Col < MW_Define.COL)
                        if (MW_Define.IsInFG) {
                          var i = this.m_fgCount[e.Col];
                          i + n >= FG_Reel[e.Col].length
                            ? (i = i + n - FG_Reel[e.Col].length)
                            : (i += n),
                            t.push(FG_Reel[e.Col][i]);
                        } else {
                          var o = this.m_mgCount[e.Col];
                          o + n >= MG_Reel[e.Col].length
                            ? (o = o + n - MG_Reel[e.Col].length)
                            : (o += n),
                            t.push(MG_Reel[e.Col][o]);
                        }
                      else
                        t.push(
                          Math.floor(Math.random() * MW_Define.Symbol.LAMP1)
                        );
                    if (e.IsUsingReel && e.Col >= 0 && e.Col < MW_Define.COL)
                      if (MW_Define.IsInFG) {
                        var r = this.m_fgCount[e.Col];
                        r + e.MaxRow >= FG_Reel[e.Col].length
                          ? (r = r + e.MaxRow - FG_Reel[e.Col].length)
                          : (r += e.MaxRow),
                          (this.m_fgCount[e.Col] = r);
                      } else {
                        var s = this.m_mgCount[e.Col];
                        s + e.MaxRow >= MG_Reel[e.Col].length
                          ? (s = s + e.MaxRow - MG_Reel[e.Col].length)
                          : (s += e.MaxRow),
                          (this.m_mgCount[e.Col] = s);
                      }
                    return t;
                  }),
                  (n.MysteryChange = function (e, t) {
                    this.m_columnSymbols[t.x] &&
                      this.m_columnSymbols[t.x].ChangeSymbol(e, t.y),
                      (this.m_plateInfo[t.x][t.y] = e);
                  }),
                  (n.SetLight = function (e, t) {
                    this.m_columnSymbols[e] &&
                      this.m_columnSymbols[e].SetLight(t);
                  }),
                  (n.ShowLight = function (e) {
                    void 0 === e && (e = !1);
                    for (var t = 0; t < MW_Define.COL; t++)
                      this.m_columnSymbols[t].ShowLight(e);
                  }),
                  (n.ResetLight = function () {
                    for (var e = 0; e < MW_Define.COL; e++)
                      this.m_columnSymbols[e].ResetLight();
                  }),
                  (n.ShowNearWin = function () {
                    if (-1 !== this.m_secondScatterCol)
                      for (var e = 0; e <= this.m_secondScatterCol; e++)
                        this.m_columnSymbols[e].ShowNearWin();
                  }),
                  (n.StopNearWin = function () {
                    for (var e = 0; e < this.m_plateInfo.length; e++)
                      for (var t = 0; t < this.m_plateInfo[e].length; t++)
                        if (
                          this.m_plateInfo[e][t] == MW_Define.Symbol.SCATTER
                        ) {
                          this.m_columnSymbols[e].StopNearWin();
                          break;
                        }
                  }),
                  (n.UpdateLampCoin = function () {
                    for (var e = 0; e < MW_Define.COL; e++)
                      this.m_columnSymbols[e] &&
                        this.m_columnSymbols[e].UpdateLampCoin();
                  }),
                  (n.SetAllSymbolVisiable = function (e, t) {
                    if ((void 0 === t && (t = 0), e))
                      for (var n = 0; n < this.m_columnSymbols.length; n++)
                        tween(this.m_columnSymbols[n].getComponent(UIOpacity))
                          .to(t, { opacity: 255 })
                          .start();
                    else
                      for (var i = 0; i < this.m_columnSymbols.length; i++)
                        log(this.m_columnSymbols[i]),
                          (this.m_columnSymbols[i].getComponent(
                            UIOpacity
                          ).opacity = 0.1);
                  }),
                  _createClass(t, [
                    {
                      key: "IsClickStopBtn",
                      get: function () {
                        return this.m_isClickStopBtn;
                      },
                    },
                    {
                      key: "IsInitEnd",
                      get: function () {
                        return this.m_isInitEnd;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$4 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_waysLabel",
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
              (_descriptor2$3 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_lampPrefab",
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
              (_descriptor3$1 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_scatterPrefab",
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
              (_descriptor4$1 = _applyDecoratedDescriptor(
                _class2$4.prototype,
                "m_nearWinPrefab",
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
              (_class$5 = _class2$4))
            ) || _class$5),
          _dec$5,
          _dec2$4,
          _dec3$2,
          _class$6,
          _class2$5,
          _descriptor$5,
          _descriptor2$4,
          _descriptor3$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "968891NhqxG5KZxrhxLmNu9",
            "FG_Compliment",
            void 0
          );
        var LeaveAnimName = {
            START: "FG_Compliment_Start",
            END: "FG_Compliment_End",
          },
          ccclass$6 = _decorator.ccclass,
          property$6 = _decorator.property,
          FG_Compliment =
            ((_dec$5 = property$6({ type: Animation, tooltip: "動畫" })),
            (_dec2$4 = property$6({ type: Label, tooltip: "贏分" })),
            (_dec3$2 = property$6({ type: Sprite, tooltip: "恭喜" })),
            ccclass$6(
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
                      "m_anim",
                      _descriptor$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_congratSprite",
                      _descriptor3$2,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r,
                          s,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    4.2,
                                    (n = 0),
                                    (i = node.divide(4.2, 0.02)),
                                    (o = node.divide(t, i)),
                                    tween(this.node)
                                      .repeat(
                                        i,
                                        tween()
                                          .call(function () {
                                            (n += o) >= t && (n = t);
                                            var e = MW_Define.ShowDisplayValue
                                              ? MW_Define.ShowDisplayValue(n)
                                              : n;
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
                                        var e = MW_Define.ShowDisplayValue
                                          ? MW_Define.ShowDisplayValue(t)
                                          : t;
                                        l.m_winLabel.string =
                                          node.FormatNumberThousands(
                                            e,
                                            node.FORMAT_NUMBER_TYPE
                                              .PERMANENT_DOT
                                          );
                                      })
                                      .start(),
                                    (r = node$5.GetGameAtlas()),
                                    (this.m_congratSprite.spriteFrame =
                                      r.getSpriteFrame("Compliment_cons")),
                                    (s = this.m_anim.getState(
                                      LeaveAnimName.START
                                    )).play(),
                                    (e.next = 11),
                                    node$2.Wait(this, s.duration)
                                  );
                                case 11:
                                  return (
                                    (s = this.m_anim.getState(
                                      LeaveAnimName.END
                                    )).play(),
                                    (e.next = 15),
                                    node$2.Wait(this, s.duration)
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
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$5 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_anim",
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
              (_descriptor2$4 = _applyDecoratedDescriptor(
                _class2$5.prototype,
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
              (_descriptor3$2 = _applyDecoratedDescriptor(
                _class2$5.prototype,
                "m_congratSprite",
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
              (_class$6 = _class2$5))
            ) || _class$6),
          _dec$6,
          _dec2$5,
          _dec3$3,
          _dec4$2,
          _dec5,
          _dec6,
          _dec7,
          _class$7,
          _class2$6,
          _descriptor$6,
          _descriptor2$5,
          _descriptor3$3,
          _descriptor4$2,
          _descriptor5,
          _descriptor6,
          _descriptor7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "f38c7Bam4pL0Ll8xPPhhaXo",
            "FG_Declare",
            void 0
          );
        var AnimName = {
            START: "FG_Declare_Start",
            LOOP: "FG_Declare_Loop",
            END: "FG_Declare_End",
          },
          ccclass$7 = _decorator.ccclass,
          property$7 = _decorator.property,
          FG_Declare =
            ((_dec$6 = property$7({ type: Animation, tooltip: "動畫" })),
            (_dec2$5 = property$7({ type: Sprite, tooltip: "提示描述" })),
            (_dec3$3 = property$7({ type: Sprite, tooltip: "提示描述" })),
            (_dec4$2 = property$7({ type: Label, tooltip: "局數" })),
            (_dec5 = property$7({ type: Sprite, tooltip: "Free圖示" })),
            (_dec6 = property$7({ type: Sprite, tooltip: "Round圖示" })),
            (_dec7 = property$7({ type: sp.Skeleton, tooltip: "spine" })),
            ccclass$7(
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
                      "m_anim",
                      _descriptor$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hintSprite",
                      _descriptor2$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_hintExtraSprite",
                      _descriptor3$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundLabels",
                      _descriptor4$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_freeSprite",
                      _descriptor5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_roundSprite",
                      _descriptor6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor7,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                return (
                  _inheritsLoose(t, e),
                  (t.prototype.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        var o, r, s, l, a, u;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (
                                    ((o = node$5.GetGameAtlas()),
                                    node$5.CurrLang !== node$2.Lang.CN)
                                  ) {
                                    for (
                                      r = 0;
                                      r < this.m_hintSprite.length;
                                      r++
                                    )
                                      this.m_hintSprite[r].spriteFrame =
                                        o.getSpriteFrame(
                                          "Declare_texts_" + (r + 1)
                                        );
                                    for (
                                      s = 0;
                                      s < this.m_hintExtraSprite.length;
                                      s++
                                    )
                                      this.m_hintExtraSprite[s].spriteFrame =
                                        o.getSpriteFrame(
                                          "Declare_texts_" + (s + 1)
                                        );
                                    (this.m_freeSprite.spriteFrame =
                                      o.getSpriteFrame("Declare_text_free")),
                                      (this.m_roundSprite.spriteFrame =
                                        o.getSpriteFrame("Declare_text_spin"));
                                  }
                                  for (
                                    l = 0;
                                    l < this.m_roundLabels.length;
                                    l++
                                  )
                                    this.m_roundLabels[l].string = t.toString();
                                  return (
                                    this.m_spine.clearTrack(0),
                                    this.m_spine.setAnimation(
                                      0,
                                      "Genie_FG_Declare",
                                      !1
                                    ),
                                    (a = n ? "" : "_s"),
                                    (u = this.m_anim.getState(
                                      AnimName.START + a
                                    )).play(),
                                    (e.next = 10),
                                    node$2.Wait(this, u.duration)
                                  );
                                case 10:
                                  return (
                                    i && i(),
                                    (u = this.m_anim.getState(
                                      AnimName.END + a
                                    )).play(),
                                    (e.next = 15),
                                    node$2.Wait(this, u.duration)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$6 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_anim",
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
              (_descriptor2$5 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_hintSprite",
                [_dec2$5],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor3$3 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_hintExtraSprite",
                [_dec3$3],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor4$2 = _applyDecoratedDescriptor(
                _class2$6.prototype,
                "m_roundLabels",
                [_dec4$2],
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
                _class2$6.prototype,
                "m_freeSprite",
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
                _class2$6.prototype,
                "m_roundSprite",
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
                _class2$6.prototype,
                "m_spine",
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
              (_class$7 = _class2$6))
            ) || _class$7),
          _dec$7,
          _dec2$6,
          _class$8,
          _class2$7,
          _descriptor$7,
          _descriptor2$6;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "be77f4QyI1JrYXb7q7OFJBD", "WildSpine", void 0);
        var SpineAnimName$3 = {
            COLLECT: "Collect_",
            COLLECT_WIN: "Collect_Win_0%s_Level_0%s",
            STOP: "Stop_0",
            WIN: "Win_0",
          },
          ccclass$8 = _decorator.ccclass,
          property$8 = _decorator.property,
          WildSpine =
            ((_dec$7 = property$8({ type: Node, tooltip: "神燈位置" })),
            (_dec2$6 = property$8({ type: Label, tooltip: "總贏分" })),
            ccclass$8(
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
                      "m_lampNodes",
                      _descriptor$7,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_winLabel",
                      _descriptor2$6,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.GetLampNode = function () {
                    return this.m_lampNodes[this.m_lvl];
                  }),
                  (n.ShowCollect = (function () {
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
                                      SpineAnimName$3.COLLECT +
                                        (this.m_lvl + 1).toString(),
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
                  (n.ShowCollectWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i, o, r;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = 1),
                                    (i =
                                      n >= 1 && n < 20
                                        ? 1
                                        : n >= 20 && n < 40
                                        ? 2
                                        : 3),
                                    (t = MW_Define.ShowDisplayValue
                                      ? MW_Define.ShowDisplayValue(t)
                                      : t),
                                    (o = 0);
                                case 4:
                                  if (!(o < MW_Define.Unite.length)) {
                                    e.next = 14;
                                    break;
                                  }
                                  if (!(t < 1e3)) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (
                                    (this.m_winLabel.string =
                                      node.FormatNumberThousands(
                                        t,
                                        node.FORMAT_NUMBER_TYPE
                                          .DEFINE_DOT_NONE_ZERO
                                      ) + MW_Define.Unite[o]),
                                    e.abrupt("break", 14)
                                  );
                                case 10:
                                  t = node.divide(t, 1e3);
                                case 11:
                                  o++, (e.next = 4);
                                  break;
                                case 14:
                                  return (
                                    (r = js.formatStr(
                                      SpineAnimName$3.COLLECT_WIN,
                                      (this.m_lvl + 1).toString(),
                                      i.toString()
                                    )),
                                    (e.next = 17),
                                    this.PlayAnimation(r, !1)
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
                    return function (t, n) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (n.ShowWin = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    void 0 === n && (n = !1),
                                    (i = !n && !node$3.IsAutoSpin),
                                    t && (this.m_spine.timeScale = 1.2),
                                    (e.next = 5),
                                    this.PlayAnimation(
                                      SpineAnimName$3.WIN +
                                        (this.m_lvl + 1).toString(),
                                      i
                                    )
                                  );
                                case 5:
                                  this.m_spine.timeScale = 1;
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
              })(SymbolSpine)),
              (_descriptor$7 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_lampNodes",
                [_dec$7],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor2$6 = _applyDecoratedDescriptor(
                _class2$7.prototype,
                "m_winLabel",
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
              (_class$8 = _class2$7))
            ) || _class$8),
          _dec$8,
          _dec2$7,
          _class$9,
          _class2$8,
          _descriptor$8,
          _descriptor2$7;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "879d8GRbUJBPLqPFmMv0NQc",
            "MysterySpine",
            void 0
          );
        var SpineAnimName$4 = { L: "Mystery_L", S: "Mystery_S" },
          GenieSpineAnimName = { L: "Genie_Mystery_L", S: "Genie_Mystery" },
          ccclass$9 = _decorator.ccclass,
          property$9 = _decorator.property,
          MysterySpine =
            ((_dec$8 = property$9({ type: sp.Skeleton, tooltip: "精靈spine" })),
            (_dec2$7 = property$9({ type: sp.Skeleton, tooltip: "spine" })),
            ccclass$9(
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
                      "m_genieSpine",
                      _descriptor$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_spine",
                      _descriptor2$7,
                      _assertThisInitialized(t)
                    ),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = []),
                                    t
                                      ? ((this.m_genieSpine.node.active = !0),
                                        n.push(
                                          this.PlayAnimation(
                                            this.m_genieSpine,
                                            GenieSpineAnimName.L
                                          )
                                        ),
                                        n.push(
                                          this.PlayAnimation(
                                            this.m_spine,
                                            SpineAnimName$4.L
                                          )
                                        ))
                                      : ((this.m_genieSpine.node.active = !1),
                                        n.push(
                                          this.PlayAnimation(
                                            this.m_spine,
                                            SpineAnimName$4.S
                                          )
                                        )),
                                    (e.next = 4),
                                    Promise.all(n)
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
                  (n.PlayAnimation = function (e, t) {
                    return new Promise(function (n) {
                      e.clearTrack(0), e.setToSetupPose();
                      var i = e.setAnimation(0, t, !1);
                      i &&
                        e.setTrackEventListener(i, function (e, t) {
                          var n = t.data.name;
                          error("name", n);
                        }),
                        i
                          ? e.setTrackCompleteListener(i, function () {
                              e.setTrackCompleteListener(i, function () {}),
                                n(null);
                            })
                          : e.setCompleteListener(function () {
                              e.setCompleteListener(null), n(null);
                            });
                    });
                  }),
                  t
                );
              })(Component)),
              (_descriptor$8 = _applyDecoratedDescriptor(
                _class2$8.prototype,
                "m_genieSpine",
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
              (_descriptor2$7 = _applyDecoratedDescriptor(
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
              (_class$9 = _class2$8))
            ) || _class$9),
          _dec$9,
          _dec2$8,
          _dec3$4,
          _dec4$3,
          _dec5$1,
          _dec6$1,
          _dec7$1,
          _dec8,
          _dec9,
          _class$a,
          _class2$9,
          _descriptor$9,
          _descriptor2$8,
          _descriptor3$4,
          _descriptor4$3,
          _descriptor5$1,
          _descriptor6$1,
          _descriptor7$1,
          _descriptor8,
          _descriptor9;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "083b0/3QbJEc46XUzJmS+9u",
            "EffectPlate",
            void 0
          );
        var MultiSpineAnimName = "Bet_Double_L",
          ccclass$a = _decorator.ccclass,
          property$a = _decorator.property,
          EffectPlate =
            ((_dec$9 = property$a({ type: SlotReels, tooltip: "轉輪" })),
            (_dec2$8 = property$a({ type: Node, tooltip: "轉場節點" })),
            (_dec3$4 = property$a({ type: Prefab, tooltip: "FG宣告" })),
            (_dec4$3 = property$a({ type: Prefab, tooltip: "FG結算" })),
            (_dec5$1 = property$a({ type: Prefab, tooltip: "symbol表演" })),
            (_dec6$1 = property$a({ type: Prefab, tooltip: "Wild表演" })),
            (_dec7$1 = property$a({
              type: Prefab,
              tooltip: "神秘符號觸發表演",
            })),
            (_dec8 = property$a({
              type: Prefab,
              tooltip: "神秘符號的轉換表演",
            })),
            (_dec9 = property$a({ type: Prefab, tooltip: "加倍押注表演" })),
            ccclass$a(
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
                      "m_slotReels",
                      _descriptor$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_transferNode",
                      _descriptor2$8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgDeclarePrefab",
                      _descriptor3$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgComplimentPrefab",
                      _descriptor4$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_symbolPrefabs",
                      _descriptor5$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_wildPrefab",
                      _descriptor6$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mysteryTriggerPrefab",
                      _descriptor7$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mysteryChangePrefab",
                      _descriptor8,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiPrefab",
                      _descriptor9,
                      _assertThisInitialized(t)
                    ),
                    (t.m_gameView = null),
                    (t.m_fgEnterNode = null),
                    (t.m_fgLeaveNode = null),
                    (t.m_symbolNodes = [[], [], [], [], [], [], [], [], []]),
                    (t.m_mysteryChangeNodes = []),
                    (t.m_symbolEffectNodes = []),
                    (t.m_coinNodes = []),
                    (t.m_mysteryTriggerNode = null),
                    (t.m_multiEftSpine = null),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.Init = function (e) {
                    this.m_gameView = e;
                    for (var t = 0; t < 20; t++) {
                      var n = instantiate(this.m_mysteryChangePrefab);
                      this.node.addChild(n),
                        node.SetZIndex(n, MW_Define.EffectIdx.EFFECT),
                        (n.active = !1),
                        this.m_mysteryChangeNodes.push(n);
                    }
                    for (var i = 0; i < this.m_symbolNodes.length; i++)
                      for (var o = 0; o < 20; o++) {
                        var r = instantiate(this.m_symbolPrefabs[i]);
                        this.node.addChild(r),
                          node.SetZIndex(r, MW_Define.EffectIdx.EFFECT),
                          (r.active = !1),
                          this.m_symbolNodes[i].push(r);
                      }
                  }),
                  (n.ShowMysteryTrigger = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.m_mysteryTriggerNode ||
                                      ((this.m_mysteryTriggerNode = instantiate(
                                        this.m_mysteryTriggerPrefab
                                      )),
                                      this.node.addChild(
                                        this.m_mysteryTriggerNode
                                      ),
                                      node.SetZIndex(
                                        this.m_mysteryTriggerNode,
                                        MW_Define.EffectIdx.BIGWIN
                                      )),
                                    (this.m_mysteryTriggerNode.active = !0),
                                    (t =
                                      this.m_mysteryTriggerNode.getComponent(
                                        MysterySpine
                                      )),
                                    this.m_gameView.GenieSpine.PlayMystery(),
                                    (e.next = 6),
                                    t.Show(this.m_gameView.IsLandscape)
                                  );
                                case 6:
                                  this.m_mysteryTriggerNode.active = !1;
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
                  (n.ShowMysteryChange = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r,
                          s,
                          l = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return e.abrupt("return");
                                case 3:
                                  for (
                                    i = !0,
                                      o = new Array(),
                                      r = function (e) {
                                        for (
                                          var r = function (r) {
                                              if (
                                                t[e][r] ===
                                                MW_Define.Symbol.MYSTERY
                                              ) {
                                                i &&
                                                  ((i = !1),
                                                  node$1.Play(
                                                    MW_Define.AudioClips
                                                      .Special_coin
                                                  ));
                                                var s = null;
                                                l.m_mysteryChangeNodes.length >
                                                0
                                                  ? (s =
                                                      l.m_mysteryChangeNodes.pop())
                                                  : ((s = instantiate(
                                                      l.m_mysteryChangePrefab
                                                    )),
                                                    l.node.addChild(s),
                                                    node.SetZIndex(
                                                      s,
                                                      MW_Define.EffectIdx.EFFECT
                                                    ));
                                                var a =
                                                    s.getComponent(SymbolSpine),
                                                  u =
                                                    l.m_slotReels.GetSymbolNode(
                                                      v3(e, r)
                                                    );
                                                s.setPosition(
                                                  l.m_slotReels.GetSymbolPostion(
                                                    v3(e, r)
                                                  )
                                                ),
                                                  (u.active = !1),
                                                  (a.Level = t[e].length - 2),
                                                  (s.active = !0),
                                                  o.push(
                                                    new Promise(
                                                      _asyncToGenerator(
                                                        _regeneratorRuntime().mark(
                                                          function i(o) {
                                                            var u;
                                                            return _regeneratorRuntime().wrap(
                                                              function (i) {
                                                                for (;;)
                                                                  switch (
                                                                    (i.prev =
                                                                      i.next)
                                                                  ) {
                                                                    case 0:
                                                                      return (
                                                                        (u =
                                                                          l.m_slotReels.GetSymbolSpriteFrame(
                                                                            n,
                                                                            t[e]
                                                                              .length -
                                                                              2
                                                                          )),
                                                                        (i.next = 3),
                                                                        a.ShowChange(
                                                                          u,
                                                                          MW_Define.GetCoin(
                                                                            n
                                                                          )
                                                                        )
                                                                      );
                                                                    case 3:
                                                                      (s.active =
                                                                        !1),
                                                                        l.m_mysteryChangeNodes.push(
                                                                          s
                                                                        ),
                                                                        l.m_slotReels.MysteryChange(
                                                                          n,
                                                                          v3(
                                                                            e,
                                                                            r
                                                                          )
                                                                        ),
                                                                        o();
                                                                    case 7:
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
                                              }
                                            },
                                            s = 0;
                                          s < t[e].length;
                                          s++
                                        )
                                          r(s);
                                      },
                                      s = 0;
                                    s < t.length;
                                    s++
                                  )
                                    r(s);
                                  if (!(o.length > 0)) {
                                    e.next = 10;
                                    break;
                                  }
                                  return (e.next = 10), Promise.all(o);
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
                  (n.ShowWild = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n,
                          i,
                          o,
                          r = this;
                        return _regeneratorRuntime().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                for (n = [], i = 0; i < MW_Define.COL; i++)
                                  for (o = 0; o < t[i].length; o++)
                                    t[i][o] === MW_Define.Symbol.WILD &&
                                      (function () {
                                        var e = r.m_slotReels.GetSymbolNode(
                                            v3(i, o)
                                          ),
                                          t = null;
                                        r.m_symbolNodes[
                                          MW_Define.Symbol.WILD
                                        ] &&
                                        r.m_symbolNodes[MW_Define.Symbol.WILD]
                                          .length > 0
                                          ? (t =
                                              r.m_symbolNodes[
                                                MW_Define.Symbol.WILD
                                              ].pop())
                                          : ((t = instantiate(r.m_wildPrefab)),
                                            r.node.addChild(t),
                                            node.SetZIndex(
                                              t,
                                              MW_Define.EffectIdx.WILD
                                            )),
                                          t.setPosition(
                                            r.m_slotReels.GetSymbolPostion(
                                              v3(i, o)
                                            )
                                          ),
                                          (t.active = !0),
                                          (e.active = !1);
                                        var s = t.getComponent(WildSpine);
                                        (s.Level =
                                          r.m_slotReels.GetColumnLvl(i)),
                                          n.push(
                                            new Promise(
                                              _asyncToGenerator(
                                                _regeneratorRuntime().mark(
                                                  function n(i) {
                                                    return _regeneratorRuntime().wrap(
                                                      function (n) {
                                                        for (;;)
                                                          switch (
                                                            (n.prev = n.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (n.next = 2),
                                                                s.ShowWin(
                                                                  !1,
                                                                  !0
                                                                )
                                                              );
                                                            case 2:
                                                              r.m_symbolNodes[
                                                                MW_Define.Symbol
                                                                  .WILD
                                                              ] ||
                                                                (r.m_symbolNodes[
                                                                  MW_Define.Symbol.WILD
                                                                ] = []),
                                                                r.m_symbolNodes[
                                                                  MW_Define
                                                                    .Symbol.WILD
                                                                ].push(t),
                                                                (t.active = !1),
                                                                (e.active = !0),
                                                                i();
                                                            case 7:
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
                                      })();
                                return (e.next = 4), Promise.all(n);
                              case 4:
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
                  (n.ShowLampAward = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r,
                          s,
                          l,
                          a = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (i = [], o = [], r = 0; r < n.length; r++)
                                    if (
                                      n[r].S === MW_Define.Symbol.LAMP1 &&
                                      0 === n[r].C
                                    )
                                      for (
                                        s = n[r].GV, l = 0;
                                        l < s.length;
                                        l++
                                      )
                                        this.m_slotReels.SetLight(
                                          s[l].Col,
                                          s[l].Row
                                        ),
                                          this.m_slotReels.GetSymbol(s[l]) ===
                                          MW_Define.Symbol.WILD
                                            ? i.push(s[l])
                                            : o.push(s[l]);
                                  if (!(i.length > 0)) {
                                    e.next = 5;
                                    break;
                                  }
                                  return e.delegateYield(
                                    _regeneratorRuntime().mark(function e() {
                                      var n,
                                        r,
                                        s,
                                        l,
                                        u,
                                        c,
                                        p,
                                        m,
                                        _,
                                        d,
                                        f,
                                        h,
                                        S,
                                        y,
                                        g,
                                        w,
                                        C,
                                        R;
                                      return _regeneratorRuntime().wrap(
                                        function (e) {
                                          for (;;)
                                            switch ((e.prev = e.next)) {
                                              case 0:
                                                for (
                                                  a.m_slotReels.ShowLight(),
                                                    n = [],
                                                    r = [],
                                                    s = [],
                                                    node$1.Play(
                                                      MW_Define.AudioClips
                                                        .Lamp_get,
                                                      !1
                                                    ),
                                                    l = function (e) {
                                                      var t =
                                                          a.m_slotReels.GetSymbolNode(
                                                            i[e]
                                                          ),
                                                        n = instantiate(
                                                          a.m_wildPrefab
                                                        );
                                                      a.node.addChild(n),
                                                        node.SetZIndex(
                                                          n,
                                                          MW_Define.EffectIdx
                                                            .WILD
                                                        ),
                                                        n.setPosition(
                                                          a.m_slotReels.GetSymbolPostion(
                                                            i[e]
                                                          )
                                                        ),
                                                        (n.active = !0),
                                                        (t.active = !1);
                                                      var o =
                                                        n.getComponent(
                                                          WildSpine
                                                        );
                                                      (o.Level =
                                                        a.m_slotReels.GetColumnLvl(
                                                          i[e].Col
                                                        )),
                                                        r.push(o),
                                                        s.push(t),
                                                        new Promise(
                                                          _asyncToGenerator(
                                                            _regeneratorRuntime().mark(
                                                              function e(t) {
                                                                return _regeneratorRuntime().wrap(
                                                                  function (e) {
                                                                    for (;;)
                                                                      switch (
                                                                        (e.prev =
                                                                          e.next)
                                                                      ) {
                                                                        case 0:
                                                                          return (
                                                                            (e.next = 2),
                                                                            o.ShowCollect()
                                                                          );
                                                                        case 2:
                                                                          t();
                                                                        case 3:
                                                                        case "end":
                                                                          return e.stop();
                                                                      }
                                                                  },
                                                                  e
                                                                );
                                                              }
                                                            )
                                                          )
                                                        );
                                                    },
                                                    u = 0;
                                                  u < i.length;
                                                  u++
                                                )
                                                  l(u);
                                                for (
                                                  c = [],
                                                    p = [],
                                                    m = [],
                                                    _ = function (e) {
                                                      var t =
                                                          a.m_slotReels.GetSymbolNode(
                                                            o[e]
                                                          ),
                                                        r = instantiate(t);
                                                      a.node.addChild(r),
                                                        node.SetZIndex(
                                                          r,
                                                          MW_Define.EffectIdx
                                                            .EFFECT
                                                        ),
                                                        r.setPosition(
                                                          a.m_slotReels.GetSymbolPostion(
                                                            o[e]
                                                          )
                                                        ),
                                                        (r.active = !0);
                                                      var s =
                                                          t.getComponent(
                                                            LampSpine
                                                          ),
                                                        l =
                                                          r.getComponent(
                                                            LampSpine
                                                          ),
                                                        u = l.CoinLabel;
                                                      u.node.setScale(
                                                        v3(1.5, 1.5)
                                                      ),
                                                        m.push(u),
                                                        (l.Symbol = s.Symbol),
                                                        (l.Level =
                                                          a.m_slotReels.GetColumnLvl(
                                                            o[e].Col
                                                          )),
                                                        p.push(l);
                                                      for (
                                                        var _ = 0;
                                                        _ < i.length;
                                                        _++
                                                      ) {
                                                        var d = null;
                                                        if (
                                                          a.m_coinNodes.length >
                                                          0
                                                        )
                                                          (d =
                                                            a.m_coinNodes.pop()).getComponent(
                                                            Label
                                                          ).string = u.string;
                                                        else
                                                          (d = instantiate(
                                                            u.node
                                                          )),
                                                            a.node.addChild(d),
                                                            node.SetZIndex(
                                                              d,
                                                              MW_Define
                                                                .EffectIdx.LABEL
                                                            ),
                                                            d.removeComponent(
                                                              BoneFollow
                                                            );
                                                        c.push(d),
                                                          (d.active = !1);
                                                      }
                                                      n.push(
                                                        new Promise(
                                                          _asyncToGenerator(
                                                            _regeneratorRuntime().mark(
                                                              function e(t) {
                                                                return _regeneratorRuntime().wrap(
                                                                  function (e) {
                                                                    for (;;)
                                                                      switch (
                                                                        (e.prev =
                                                                          e.next)
                                                                      ) {
                                                                        case 0:
                                                                          return (
                                                                            (e.next = 2),
                                                                            l.ShowCollect()
                                                                          );
                                                                        case 2:
                                                                          return (
                                                                            l.ShowCollectLvl(),
                                                                            (e.next = 5),
                                                                            node$2.Wait(
                                                                              l,
                                                                              2
                                                                            )
                                                                          );
                                                                        case 5:
                                                                          t();
                                                                        case 6:
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
                                                    d = o.length - 1;
                                                  d >= 0;
                                                  d--
                                                )
                                                  _(d);
                                                return (
                                                  (e.next = 14), Promise.all(n)
                                                );
                                              case 14:
                                                for (
                                                  0.5,
                                                    f = function (e) {
                                                      for (
                                                        var t = function (t) {
                                                            var n =
                                                                r[
                                                                  t
                                                                ].GetLampNode(),
                                                              o = n.parent
                                                                .getComponent(
                                                                  UITransform
                                                                )
                                                                .convertToWorldSpaceAR(
                                                                  n.position
                                                                ),
                                                              s = a.node
                                                                .getComponent(
                                                                  UITransform
                                                                )
                                                                .convertToNodeSpaceAR(
                                                                  o
                                                                );
                                                            c[e + t].active =
                                                              !0;
                                                            var l =
                                                              m[e / i.length];
                                                            l.node.active = !1;
                                                            var u =
                                                                l.node.parent
                                                                  .getComponent(
                                                                    UITransform
                                                                  )
                                                                  .convertToWorldSpaceAR(
                                                                    l.node
                                                                      .position
                                                                  ),
                                                              p = a.node
                                                                .getComponent(
                                                                  UITransform
                                                                )
                                                                .convertToNodeSpaceAR(
                                                                  u
                                                                );
                                                            c[
                                                              e + t
                                                            ].setPosition(p),
                                                              tween(c[e + t])
                                                                .to(0.5, {
                                                                  position: v3(
                                                                    s.x,
                                                                    s.y
                                                                  ),
                                                                })
                                                                .call(
                                                                  function () {
                                                                    (c[
                                                                      e + t
                                                                    ].active =
                                                                      !1),
                                                                      a.m_coinNodes.push(
                                                                        c[e + t]
                                                                      );
                                                                  }
                                                                )
                                                                .start();
                                                          },
                                                          n = 0;
                                                        n < i.length;
                                                        n++
                                                      )
                                                        t(n);
                                                    },
                                                    h = 0;
                                                  h < c.length;
                                                  h += i.length
                                                )
                                                  f(h);
                                                return (
                                                  (e.next = 19),
                                                  node$2.Wait(a, 0.5)
                                                );
                                              case 19:
                                                for (; p.length > 0; )
                                                  (S =
                                                    p.pop()).node.removeFromParent(),
                                                    S.node.destroy();
                                                (y = node.divide(
                                                  t,
                                                  MW_Define.Now_Bet
                                                )),
                                                  (g =
                                                    MW_Define.FG_AwardSoundRate
                                                      .length - 1);
                                              case 22:
                                                if (!(g >= 0)) {
                                                  e.next = 29;
                                                  break;
                                                }
                                                if (
                                                  !(
                                                    y >=
                                                    MW_Define.FG_AwardSoundRate[
                                                      g
                                                    ]
                                                  )
                                                ) {
                                                  e.next = 26;
                                                  break;
                                                }
                                                return (
                                                  node$1.Play(
                                                    MW_Define.AudioClips[
                                                      "FG_Lampwin_0" + (g + 1)
                                                    ]
                                                  ),
                                                  e.abrupt("break", 29)
                                                );
                                              case 26:
                                                g--, (e.next = 22);
                                                break;
                                              case 29:
                                                for (
                                                  n = [],
                                                    w = node.divide(
                                                      t,
                                                      r.length
                                                    ),
                                                    C = function (e) {
                                                      n.push(
                                                        new Promise(
                                                          _asyncToGenerator(
                                                            _regeneratorRuntime().mark(
                                                              function t(n) {
                                                                return _regeneratorRuntime().wrap(
                                                                  function (t) {
                                                                    for (;;)
                                                                      switch (
                                                                        (t.prev =
                                                                          t.next)
                                                                      ) {
                                                                        case 0:
                                                                          return (
                                                                            (t.next = 2),
                                                                            r[
                                                                              e
                                                                            ].ShowCollectWin(
                                                                              w,
                                                                              y
                                                                            )
                                                                          );
                                                                        case 2:
                                                                          r[
                                                                            e
                                                                          ].node.removeFromParent(),
                                                                            r[
                                                                              e
                                                                            ].node.destroy(),
                                                                            (s[
                                                                              e
                                                                            ].active =
                                                                              !0),
                                                                            n();
                                                                        case 6:
                                                                        case "end":
                                                                          return t.stop();
                                                                      }
                                                                  },
                                                                  t
                                                                );
                                                              }
                                                            )
                                                          )
                                                        )
                                                      );
                                                    },
                                                    R = 0;
                                                  R < r.length;
                                                  R++
                                                )
                                                  C(R);
                                                return (
                                                  (e.next = 35), Promise.all(n)
                                                );
                                              case 35:
                                                a.m_slotReels.ResetLight();
                                              case 36:
                                              case "end":
                                                return e.stop();
                                            }
                                        },
                                        e
                                      );
                                    })(),
                                    "t0",
                                    5
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
                  (n.CleanSymbolEffect = function () {
                    for (; this.m_symbolEffectNodes.length > 0; ) {
                      var e = this.m_symbolEffectNodes.pop();
                      e.active = !1;
                      var t = e.getComponent(SymbolSpine);
                      this.m_slotReels.GetSymbolNode(t.Position).active = !0;
                      var n = t.Symbol;
                      this.m_symbolNodes[n] || (this.m_symbolNodes[n] = []),
                        this.m_symbolNodes[n].push(e);
                    }
                  }),
                  (n.ShowAward = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n) {
                        var i,
                          o,
                          r,
                          s,
                          l,
                          a,
                          u = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (i = []),
                                    (o = [[], [], [], [], [], []]),
                                    (r = 0);
                                case 3:
                                  if (!(r < t.length)) {
                                    e.next = 18;
                                    break;
                                  }
                                  if (!(t[r].C > 0)) {
                                    e.next = 15;
                                    break;
                                  }
                                  (s = t[r].GV),
                                    (l = function (e) {
                                      if (o[s[e].Col][s[e].Row])
                                        return "continue";
                                      (o[s[e].Col][s[e].Row] = !0),
                                        u.m_slotReels.SetLight(
                                          s[e].Col,
                                          s[e].Row
                                        );
                                      var t = u.m_slotReels.GetSymbol(s[e]),
                                        r = u.m_slotReels.GetSymbolNode(s[e]),
                                        l = r.getComponent(SymbolSpine);
                                      l && (l.IsShowWin = !0);
                                      var a = null;
                                      t >= MW_Define.Symbol.LAMP1 &&
                                        t <= MW_Define.Symbol.LAMP50 &&
                                        (t = MW_Define.Symbol.LAMP1),
                                        u.m_symbolNodes[t] &&
                                        u.m_symbolNodes[t].length > 0
                                          ? (a = u.m_symbolNodes[t].pop())
                                          : ((a =
                                              t < MW_Define.Symbol.LAMP1
                                                ? instantiate(
                                                    u.m_symbolPrefabs[t]
                                                  )
                                                : t < MW_Define.Symbol.WILD
                                                ? instantiate(r)
                                                : instantiate(u.m_wildPrefab)),
                                            u.node.addChild(a),
                                            node.SetZIndex(
                                              a,
                                              MW_Define.EffectIdx.EFFECT
                                            )),
                                        u.m_symbolEffectNodes.push(a);
                                      var c = a.getComponent(SymbolSpine);
                                      (c.IsShowWin = !0),
                                        c.SetLabelLight(),
                                        (c.Symbol = t),
                                        a.setPosition(
                                          u.m_slotReels.GetSymbolPostion(
                                            v3(s[e].Col, s[e].Row)
                                          )
                                        ),
                                        (c.Position = v3(s[e].Col, s[e].Row)),
                                        (r.active = !1),
                                        (c.Level = u.m_slotReels.GetColumnLvl(
                                          s[e].Col
                                        )),
                                        (a.active = !0),
                                        i.push(
                                          new Promise(
                                            _asyncToGenerator(
                                              _regeneratorRuntime().mark(
                                                function e(t) {
                                                  return _regeneratorRuntime().wrap(
                                                    function (e) {
                                                      for (;;)
                                                        switch (
                                                          (e.prev = e.next)
                                                        ) {
                                                          case 0:
                                                            return (
                                                              (e.next = 2),
                                                              c.ShowWin(n)
                                                            );
                                                          case 2:
                                                            t();
                                                          case 3:
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
                                    }),
                                    (a = 0);
                                case 8:
                                  if (!(a < s.length)) {
                                    e.next = 15;
                                    break;
                                  }
                                  if ("continue" !== l(a)) {
                                    e.next = 12;
                                    break;
                                  }
                                  return e.abrupt("continue", 12);
                                case 12:
                                  a++, (e.next = 8);
                                  break;
                                case 15:
                                  r++, (e.next = 3);
                                  break;
                                case 18:
                                  if (!(i.length > 0)) {
                                    e.next = 22;
                                    break;
                                  }
                                  return (
                                    this.m_slotReels.ShowLight(),
                                    (e.next = 22),
                                    Promise.all(i)
                                  );
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
                  (n.EnterFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        var o,
                          r,
                          s,
                          l,
                          a = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  for (
                                    this.m_fgEnterNode ||
                                      ((this.m_fgEnterNode = instantiate(
                                        this.m_fgDeclarePrefab
                                      )),
                                      this.m_transferNode.addChild(
                                        this.m_fgEnterNode
                                      ),
                                      node.SetZIndex(
                                        this.m_fgEnterNode,
                                        MW_Define.EffectIdx.FG
                                      ),
                                      (this.m_fgEnterNode.active = !1)),
                                      o = [],
                                      r = 0;
                                    r < n.length;
                                    r++
                                  )
                                    for (s = 0; s < n[r].length; s++)
                                      n[r][s] === MW_Define.Symbol.SCATTER &&
                                        (function () {
                                          var e = a.m_slotReels
                                            .GetSymbolNode(v3(r, s))
                                            .getComponent(SymbolSpine);
                                          e &&
                                            o.push(
                                              new Promise(
                                                _asyncToGenerator(
                                                  _regeneratorRuntime().mark(
                                                    function t(n) {
                                                      return _regeneratorRuntime().wrap(
                                                        function (t) {
                                                          for (;;)
                                                            switch (
                                                              (t.prev = t.next)
                                                            ) {
                                                              case 0:
                                                                return (
                                                                  (t.next = 2),
                                                                  e.ShowWin()
                                                                );
                                                              case 2:
                                                                n();
                                                              case 3:
                                                              case "end":
                                                                return t.stop();
                                                            }
                                                        },
                                                        t
                                                      );
                                                    }
                                                  )
                                                )
                                              )
                                            );
                                        })();
                                  return (
                                    this.m_gameView.GenieSpine.PlayScatterWin(),
                                    node$1.Play(
                                      MW_Define.AudioClips.Scatter_bell
                                    ),
                                    (e.next = 7),
                                    node$2.Wait(this, 2.8)
                                  );
                                case 7:
                                  return (
                                    (this.m_fgEnterNode.active = !0),
                                    (l =
                                      this.m_fgEnterNode.getComponent(
                                        FG_Declare
                                      )),
                                    (e.next = 11),
                                    l.Show(t, this.m_gameView.IsLandscape, i)
                                  );
                                case 11:
                                  this.m_fgEnterNode.active = !1;
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
                  (n.LeaveFree = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t) {
                        var n;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.m_fgLeaveNode ||
                                      ((this.m_fgLeaveNode = instantiate(
                                        this.m_fgComplimentPrefab
                                      )),
                                      this.m_transferNode.addChild(
                                        this.m_fgLeaveNode
                                      ),
                                      node.SetZIndex(
                                        this.m_fgLeaveNode,
                                        MW_Define.EffectIdx.FG
                                      )),
                                    node$1.Play(MW_Define.AudioClips.FG_End),
                                    (this.m_fgLeaveNode.active = !0),
                                    (n =
                                      this.m_fgLeaveNode.getComponent(
                                        FG_Compliment
                                      )),
                                    (e.next = 6),
                                    n.Show(t)
                                  );
                                case 6:
                                  this.m_fgLeaveNode.active = !1;
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
                  (n.ShowMultiEft = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e() {
                        var t;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.m_multiEftSpine ||
                                      ((t = instantiate(this.m_multiPrefab)),
                                      this.node.addChild(t),
                                      node.SetZIndex(
                                        t,
                                        MW_Define.EffectIdx.MULTI
                                      ),
                                      t.setPosition(v3(t.getPosition().x, -20)),
                                      (this.m_multiEftSpine =
                                        t.getComponent(Spine))),
                                    (this.m_multiEftSpine.node.active = !0),
                                    node$1.Play(
                                      MW_Define.AudioClips.SpecialBet_on
                                    ),
                                    (e.next = 5),
                                    this.m_multiEftSpine.PlayAnimation(
                                      MultiSpineAnimName,
                                      !1
                                    )
                                  );
                                case 5:
                                  this.m_multiEftSpine.node.active = !1;
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
                  _createClass(t, [
                    {
                      key: "TransferNode",
                      get: function () {
                        return this.m_transferNode;
                      },
                    },
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$9 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_slotReels",
                [_dec$9],
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
                _class2$9.prototype,
                "m_transferNode",
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
                _class2$9.prototype,
                "m_fgDeclarePrefab",
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
              (_descriptor4$3 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_fgComplimentPrefab",
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
              (_descriptor5$1 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_symbolPrefabs",
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
              (_descriptor6$1 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_wildPrefab",
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
                _class2$9.prototype,
                "m_mysteryTriggerPrefab",
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
                _class2$9.prototype,
                "m_mysteryChangePrefab",
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
              (_descriptor9 = _applyDecoratedDescriptor(
                _class2$9.prototype,
                "m_multiPrefab",
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
              (_class$a = _class2$9))
            ) || _class$a);
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "5f7b1ybnDpAkZRnKUUeDsrB",
            "FeaturesAck",
            void 0
          );
        var FeaturesAck = function () {},
          _dec$a,
          _class$b;
        (FeaturesAck.MG = {
          RoundQueue: [
            {
              PS: [
                [15, 3, 0, 2],
                [15, 15, 15],
                [9, 15, 15, 8],
                [2, 9, 15, 0],
                [15, 8, 15, 1],
                [15, 1, 1, 9],
              ],
              RW: 360,
              WW: 360,
              LW: 0,
              ADV: [
                {
                  S: 9,
                  C: 6,
                  LN: 72,
                  WIN: 360,
                  GV: [
                    { Col: 0, Row: 0 },
                    { Col: 1, Row: 0 },
                    { Col: 1, Row: 1 },
                    { Col: 1, Row: 2 },
                    { Col: 2, Row: 0 },
                    { Col: 2, Row: 1 },
                    { Col: 2, Row: 2 },
                    { Col: 3, Row: 1 },
                    { Col: 3, Row: 2 },
                    { Col: 4, Row: 0 },
                    { Col: 4, Row: 2 },
                    { Col: 5, Row: 0 },
                    { Col: 5, Row: 3 },
                  ],
                },
              ],
              ATF: 33,
              FRR: 0,
              MT: 15,
            },
          ],
          TotalWin: 360,
          FreeTotalWin: 0,
          AckType: 0,
          ShowIndex: "",
          NowMoney: null,
          TrialFinish: !1,
          TrialAward: 0,
          UnionJPType: -1,
          UnionJPWin: 0,
        }),
          (FeaturesAck.FG = {
            RoundQueue: [
              {
                PS: [
                  [7, 7, 2, 2],
                  [0, 17, 1],
                  [9, 17, 6, 6, 9],
                  [2, 2, 2, 17],
                  [7, 7, 7, 6],
                  [4, 7, 8, 8],
                ],
                RW: 0,
                WW: 0,
                LW: 0,
                ADV: null,
                ATF: 4,
                FRR: 10,
                MT: 18,
              },
              {
                PS: [
                  [2, 0, 10],
                  [16, 3],
                  [7, 7, 7, 0, 8],
                  [3, 4, 4, 4],
                  [1, 9],
                  [0, 6],
                ],
                RW: 3.7,
                WW: 0.7,
                LW: 3,
                ADV: [
                  {
                    S: 0,
                    C: 3,
                    LN: 1,
                    WIN: 0.2,
                    GV: [
                      { Col: 0, Row: 1 },
                      { Col: 1, Row: 0 },
                      { Col: 2, Row: 3 },
                    ],
                  },
                  {
                    S: 9,
                    C: 2,
                    LN: 1,
                    WIN: 0.5,
                    GV: [
                      { Col: 0, Row: 2 },
                      { Col: 1, Row: 0 },
                    ],
                  },
                  {
                    S: 9,
                    C: 0,
                    LN: 1,
                    WIN: 3,
                    GV: [
                      { Col: 0, Row: 2 },
                      { Col: 1, Row: 0 },
                      { Col: 4, Row: 1 },
                    ],
                  },
                ],
                ATF: 11,
                FRR: 9,
                MT: 18,
              },
              {
                PS: [
                  [12, 2, 5, 3],
                  [13, 6],
                  [0, 0, 4],
                  [3, 10, 10],
                  [2, 0, 4, 1, 9],
                  [5, 12, 0, 7, 2],
                ],
                RW: 0.5,
                WW: 0.5,
                LW: 0,
                ADV: [
                  {
                    S: 9,
                    C: 2,
                    LN: 1,
                    WIN: 0.5,
                    GV: [
                      { Col: 0, Row: 0 },
                      { Col: 1, Row: 0 },
                    ],
                  },
                ],
                ATF: 9,
                FRR: 8,
                MT: 18,
              },
              {
                PS: [
                  [2, 2, 9],
                  [7, 3, 7, 9, 10],
                  [1, 7, 4, 2],
                  [5, 2, 6, 11],
                  [10, 10, 8, 0],
                  [1, 5, 4],
                ],
                RW: 1,
                WW: 1,
                LW: 0,
                ADV: [
                  {
                    S: 9,
                    C: 2,
                    LN: 2,
                    WIN: 1,
                    GV: [
                      { Col: 0, Row: 2 },
                      { Col: 1, Row: 3 },
                      { Col: 1, Row: 4 },
                    ],
                  },
                ],
                ATF: 9,
                FRR: 7,
                MT: 18,
              },
              {
                PS: [
                  [0, 2],
                  [11, 13, 6],
                  [1, 2, 4],
                  [0, 4, 0],
                  [10, 8, 0, 2, 8],
                  [3, 4],
                ],
                RW: 0,
                WW: 0,
                LW: 0,
                ADV: null,
                ATF: 8,
                FRR: 6,
                MT: 18,
              },
              {
                PS: [
                  [6, 6, 12, 2],
                  [11, 7, 7, 6],
                  [1, 7],
                  [5, 0, 4, 0],
                  [8, 1, 4, 12],
                  [5, 1],
                ],
                RW: 0.5,
                WW: 0.5,
                LW: 0,
                ADV: [
                  {
                    S: 9,
                    C: 2,
                    LN: 1,
                    WIN: 0.5,
                    GV: [
                      { Col: 0, Row: 2 },
                      { Col: 1, Row: 0 },
                    ],
                  },
                ],
                ATF: 9,
                FRR: 5,
                MT: 18,
              },
              {
                PS: [
                  [0, 2, 5],
                  [16, 3, 3, 7],
                  [1, 7, 4],
                  [9, 3, 2],
                  [2, 8, 8, 1, 4],
                  [0, 6, 8],
                ],
                RW: 1,
                WW: 0,
                LW: 1,
                ADV: [
                  {
                    S: 9,
                    C: 0,
                    LN: 1,
                    WIN: 1,
                    GV: [
                      { Col: 1, Row: 0 },
                      { Col: 3, Row: 0 },
                    ],
                  },
                ],
                ATF: 10,
                FRR: 4,
                MT: 18,
              },
              {
                PS: [
                  [9, 0],
                  [6, 7, 1],
                  [1, 7, 4, 2, 0],
                  [9, 3, 4],
                  [12, 10, 10, 2],
                  [10, 10, 7],
                ],
                RW: 0,
                WW: 0,
                LW: 0,
                ADV: null,
                ATF: 8,
                FRR: 3,
                MT: 18,
              },
              {
                PS: [
                  [6, 2, 0],
                  [4, 4, 4, 3, 6],
                  [7, 5, 2],
                  [3, 5, 16],
                  [10, 10, 8, 0],
                  [2, 5, 8, 0],
                ],
                RW: 4,
                WW: 0,
                LW: 4,
                ADV: [
                  {
                    S: 9,
                    C: 0,
                    LN: 1,
                    WIN: 4,
                    GV: [
                      { Col: 3, Row: 2 },
                      { Col: 4, Row: 0 },
                      { Col: 4, Row: 1 },
                    ],
                  },
                ],
                ATF: 10,
                FRR: 2,
                MT: 18,
              },
              {
                PS: [
                  [9, 5],
                  [1, 1, 1, 6, 9],
                  [4, 2, 15, 15],
                  [4, 15, 4, 15, 5],
                  [4, 1, 9, 16],
                  [9, 15, 15],
                ],
                RW: 424,
                WW: 120,
                LW: 304,
                ADV: [
                  {
                    S: 9,
                    C: 6,
                    LN: 24,
                    WIN: 120,
                    GV: [
                      { Col: 0, Row: 0 },
                      { Col: 1, Row: 4 },
                      { Col: 2, Row: 2 },
                      { Col: 2, Row: 3 },
                      { Col: 3, Row: 1 },
                      { Col: 3, Row: 3 },
                      { Col: 4, Row: 2 },
                      { Col: 4, Row: 3 },
                      { Col: 5, Row: 0 },
                      { Col: 5, Row: 1 },
                      { Col: 5, Row: 2 },
                    ],
                  },
                  {
                    S: 9,
                    C: 0,
                    LN: 1,
                    WIN: 304,
                    GV: [
                      { Col: 0, Row: 0 },
                      { Col: 1, Row: 4 },
                      { Col: 2, Row: 2 },
                      { Col: 2, Row: 3 },
                      { Col: 3, Row: 1 },
                      { Col: 3, Row: 3 },
                      { Col: 4, Row: 2 },
                      { Col: 4, Row: 3 },
                      { Col: 5, Row: 0 },
                      { Col: 5, Row: 1 },
                      { Col: 5, Row: 2 },
                    ],
                  },
                ],
                ATF: 43,
                FRR: 1,
                MT: 18,
              },
              {
                PS: [
                  [5, 6, 7],
                  [0, 0],
                  [10, 10],
                  [4, 4],
                  [1, 1, 2],
                  [3, 16, 2, 4, 4],
                ],
                RW: 4,
                WW: 0,
                LW: 4,
                ADV: [
                  {
                    S: 9,
                    C: 0,
                    LN: 1,
                    WIN: 4,
                    GV: [
                      { Col: 2, Row: 0 },
                      { Col: 2, Row: 1 },
                      { Col: 5, Row: 1 },
                    ],
                  },
                ],
                ATF: 26,
                FRR: 0,
                MT: 10,
              },
            ],
            TotalWin: 438.7,
            FreeTotalWin: 438.7,
            AckType: 0,
            ShowIndex: "",
            NowMoney: null,
            TrialFinish: !1,
            TrialAward: 0,
            UnionJPType: -1,
            UnionJPWin: 0,
          }),
          cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "05d35ni67NMiLDa8sDVjDmN",
            "AwardState",
            void 0
          );
        var ccclass$b = _decorator.ccclass,
          AwardState =
            ((_dec$a = ccclass$b("AwardState")),
            _dec$a(
              (_class$b = (function (e) {
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
                    var e = this;
                    log("game state AwardState"),
                      new Promise(
                        _asyncToGenerator(
                          _regeneratorRuntime().mark(function t(n) {
                            var i, o, r, s;
                            return _regeneratorRuntime().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      !(
                                        (i =
                                          e.m_gameView.SpinAck.RoundQueue[
                                            e.m_gameView.RoundIdx
                                          ].RW) > 0
                                      )
                                    ) {
                                      t.next = 27;
                                      break;
                                    }
                                    if (
                                      (e.m_gameView.PlayWinBG(),
                                      (e.m_gameView.TotalWin += i),
                                      !e.m_gameView.SpinAck.RoundQueue[
                                        e.m_gameView.RoundIdx
                                      ].ADV)
                                    ) {
                                      t.next = 24;
                                      break;
                                    }
                                    if (
                                      ((o = e.m_gameView.BigWin.CheckSetting(
                                        i,
                                        MW_Define.Now_Bet
                                      )),
                                      e.m_gameView.EffectPlate.ShowAward(
                                        e.m_gameView.SpinAck.RoundQueue[
                                          e.m_gameView.RoundIdx
                                        ].ADV,
                                        e.m_gameView.IsHardStop
                                      ).then(
                                        _asyncToGenerator(
                                          _regeneratorRuntime().mark(
                                            function t() {
                                              return _regeneratorRuntime().wrap(
                                                function (t) {
                                                  for (;;)
                                                    switch ((t.prev = t.next)) {
                                                      case 0:
                                                        o
                                                          ? (e.m_gameView.BigWin.ShowWin(
                                                              i,
                                                              MW_Define.Now_Bet,
                                                              function () {
                                                                node$3.IsAutoSpin &&
                                                                  node$3.SetWinValueWithCheck(
                                                                    {
                                                                      maxWin:
                                                                        e
                                                                          .m_gameView
                                                                          .SpinAck
                                                                          .TotalWin,
                                                                      value:
                                                                        e
                                                                          .m_gameView
                                                                          .TotalWin,
                                                                    }
                                                                  ),
                                                                  tween(
                                                                    e.m_gameView
                                                                      .node
                                                                  )
                                                                    .delay(0.5)
                                                                    .call(
                                                                      function () {
                                                                        n();
                                                                      }
                                                                    )
                                                                    .start();
                                                              }
                                                            ),
                                                            node$3.SetSpinState(
                                                              SlotBottomBarState.GET_AWARD_NO_AUTO
                                                            ))
                                                          : (e.m_gameView.EftWin.SkipEftWinValue(),
                                                            n());
                                                      case 1:
                                                      case "end":
                                                        return t.stop();
                                                    }
                                                },
                                                t
                                              );
                                            }
                                          )
                                        )
                                      ),
                                      !o)
                                    ) {
                                      t.next = 11;
                                      break;
                                    }
                                    node$1.Play(
                                      MW_Define.AudioClips.Small_win_03
                                    ),
                                      (t.next = 22);
                                    break;
                                  case 11:
                                    (r = node.divide(i, MW_Define.Now_Bet)),
                                      (s = 0);
                                  case 13:
                                    if (!(s < MW_Define.SmallAward.length)) {
                                      t.next = 21;
                                      break;
                                    }
                                    if (!(r < MW_Define.SmallAward[s])) {
                                      t.next = 18;
                                      break;
                                    }
                                    if (
                                      node.CheckSwitchOff(
                                        SwitchOffKeyDefine.NoSoundUnder1
                                      ) &&
                                      !(
                                        node.CheckSwitchOff(
                                          SwitchOffKeyDefine.NoSoundUnder1
                                        ) && r > 1
                                      )
                                    ) {
                                      t.next = 18;
                                      break;
                                    }
                                    return (
                                      node$1.Play(
                                        MW_Define.AudioClips[
                                          "Small_win_0" + (s + 1)
                                        ]
                                      ),
                                      t.abrupt("break", 21)
                                    );
                                  case 18:
                                    s++, (t.next = 13);
                                    break;
                                  case 21:
                                    e.m_gameView.EftWin.SetEftWinValue(
                                      e.m_gameView.IsHardStop,
                                      i,
                                      !1,
                                      !1
                                    );
                                  case 22:
                                    t.next = 25;
                                    break;
                                  case 24:
                                    n();
                                  case 25:
                                    t.next = 28;
                                    break;
                                  case 27:
                                    n();
                                  case 28:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      ).then(function () {
                        node$3.SetWinValueWithCheck({
                          maxWin: e.m_gameView.SpinAck.TotalWin,
                          value: e.m_gameView.TotalWin,
                        }),
                          node$6.NextState(
                            MW_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                          );
                      });
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$b),
          _dec$b,
          _class$c;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "1fd10h1LhBCbozQq+2965xe",
            "CheckMaxFlagState",
            void 0
          );
        var ccclass$c = _decorator.ccclass,
          CheckMaxFlagState =
            ((_dec$b = ccclass$c("CheckMaxFlagState")),
            _dec$b(
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
                  (n.OnEnter = function () {
                    log("game state CHECK_MAX_FLAG"),
                      this.m_gameView.SpinAck.RoundQueue[
                        this.m_gameView.RoundIdx
                      ].MaxFlag
                        ? node$7.ShowMessageBox(
                            node$2.StringKey.MSGBOX_MAX_REWARD,
                            node$2.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                            function () {
                              node$6.NextState(MW_Define.GAMEVIEW_STATE.AWARD);
                            }
                          )
                        : node$6.NextState(MW_Define.GAMEVIEW_STATE.AWARD);
                  }),
                  (n.OnProcess = function (e) {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$c),
          _dec$c,
          _class$d;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "a2f778IotlMzY43Hk2jSXQ6",
            "CheckMysteryState",
            void 0
          );
        var ccclass$d = _decorator.ccclass,
          CheckMysteryState =
            ((_dec$c = ccclass$d("CheckMysteryState")),
            _dec$c(
              (_class$d = (function (e) {
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
                    var e = this;
                    log("game state CheckMysteryState");
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ],
                      n = function () {
                        (e.m_gameView.CanReelStop = !0),
                          e.m_gameView.SlotReels.SetPlateInfo(
                            t.PS,
                            node$8.IsFeaturesDemoMode
                          ),
                          e.m_gameView.CheckCol(),
                          e.m_gameView.IsHardStop
                            ? (e.m_gameView.SlotReels.SetIsClickStopBtn(),
                              node$3.SetSpinWithSpeed())
                            : node$3.IsAutoSpin ||
                              node$3.SetSpinState(
                                SlotBottomBarState.START_SPIN
                              );
                      };
                    this.m_gameView.ParseAwardTypeFlag(
                      MW_Define.AWARD_TYPE.AWARD_TYPE_SHOWLAMP
                    )
                      ? (node$1.Play(MW_Define.AudioClips.Special_get),
                        this.m_gameView.EffectPlate.ShowMysteryTrigger().then(
                          function () {
                            n();
                          }
                        ))
                      : n();
                  }),
                  (n.OnProcess = function (e) {
                    this.m_gameView.SlotReels.Spin(e),
                      this.m_gameView.SlotReels.IsPlateStop() &&
                        (this.m_gameView.SlotReels.StopNearWin(),
                        (this.m_gameView.IsSpined = !1),
                        node$3.IsAutoSpin ||
                          node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].MT !== MW_Define.Symbol.MYSTERY
                          ? node$6.NextState(MW_Define.GAMEVIEW_STATE.MYSTERY)
                          : this.m_gameView.SpinAck.RoundQueue[
                              this.m_gameView.RoundIdx
                            ].ADV
                          ? MW_Define.IsInFG
                            ? node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.GET_LAMP_AWARD
                              )
                            : node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.CHECK_MAX_FLAG
                              )
                          : node$6.NextState(
                              MW_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                            ));
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$d),
          _dec$d,
          _class$e;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "6ec2aF5QehKdIh0RpFEY6Od",
            "CheckState",
            void 0
          );
        var ccclass$e = _decorator.ccclass,
          CheckState =
            ((_dec$d = ccclass$e("CheckState")),
            _dec$d(
              (_class$e = (function (e) {
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
                    var e = this;
                    log("game state CheckState");
                    !MW_Define.IsInFG &&
                    e.m_gameView.SpinAck.RoundQueue.length > 1
                      ? node$6.NextState(MW_Define.GAMEVIEW_STATE.ENTER_FREE)
                      : MW_Define.IsInFG &&
                        e.m_gameView.RoundIdx >=
                          e.m_gameView.SpinAck.RoundQueue.length - 1
                      ? node$6.NextState(MW_Define.GAMEVIEW_STATE.LEAVE_FREE)
                      : node$6.NextState(MW_Define.GAMEVIEW_STATE.ROUND_END);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$e);
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
                  s = o
                    ? this._createRequireWithResolveMap(
                        "function" == typeof o ? o() : o,
                        r
                      )
                    : r;
                i(e.exports, s, e);
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
            "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/long/src/long.js";
        loader.define(
          __cjsMetaURL,
          function (e, t, n, i, o) {
            n.exports = s;
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
            function s(e, t, n) {
              (this.low = 0 | e), (this.high = 0 | t), (this.unsigned = !!n);
            }
            function l(e) {
              return !0 === (e && e.__isLong__);
            }
            s.prototype.__isLong__,
              Object.defineProperty(s.prototype, "__isLong__", { value: !0 }),
              (s.isLong = l);
            var a = {},
              u = {};
            function c(e, t) {
              var n, i, o;
              return t
                ? (o = 0 <= (e >>>= 0) && e < 256) && (i = u[e])
                  ? i
                  : ((n = m(e, (0 | e) < 0 ? -1 : 0, !0)), o && (u[e] = n), n)
                : (o = -128 <= (e |= 0) && e < 128) && (i = a[e])
                ? i
                : ((n = m(e, e < 0 ? -1 : 0, !1)), o && (a[e] = n), n);
            }
            function p(e, t) {
              if (isNaN(e)) return t ? C : w;
              if (t) {
                if (e < 0) return C;
                if (e >= S) return T;
              } else {
                if (e <= -y) return W;
                if (e + 1 >= y) return A;
              }
              return e < 0 ? p(-e, t).neg() : m(e % h | 0, (e / h) | 0, t);
            }
            function m(e, t, n) {
              return new s(e, t, n);
            }
            (s.fromInt = c), (s.fromNumber = p), (s.fromBits = m);
            var _ = Math.pow;
            function d(e, t, n) {
              if (0 === e.length) throw Error("empty string");
              if (
                "NaN" === e ||
                "Infinity" === e ||
                "+Infinity" === e ||
                "-Infinity" === e
              )
                return w;
              if (
                ("number" == typeof t ? ((n = t), (t = !1)) : (t = !!t),
                (n = n || 10) < 2 || 36 < n)
              )
                throw RangeError("radix");
              var i;
              if ((i = e.indexOf("-")) > 0) throw Error("interior hyphen");
              if (0 === i) return d(e.substring(1), t, n).neg();
              for (var o = p(_(n, 8)), r = w, s = 0; s < e.length; s += 8) {
                var l = Math.min(8, e.length - s),
                  a = parseInt(e.substring(s, s + l), n);
                if (l < 8) {
                  var u = p(_(n, l));
                  r = r.mul(u).add(p(a));
                } else r = (r = r.mul(o)).add(p(a));
              }
              return (r.unsigned = t), r;
            }
            function f(e, t) {
              return "number" == typeof e
                ? p(e, t)
                : "string" == typeof e
                ? d(e, t)
                : m(e.low, e.high, "boolean" == typeof t ? t : e.unsigned);
            }
            (s.fromString = d), (s.fromValue = f);
            var h = 4294967296,
              S = h * h,
              y = S / 2,
              g = c(1 << 24),
              w = c(0);
            s.ZERO = w;
            var C = c(0, !0);
            s.UZERO = C;
            var R = c(1);
            s.ONE = R;
            var v = c(1, !0);
            s.UONE = v;
            var b = c(-1);
            s.NEG_ONE = b;
            var A = m(-1, 2147483647, !1);
            s.MAX_VALUE = A;
            var T = m(-1, -1, !0);
            s.MAX_UNSIGNED_VALUE = T;
            var W = m(0, -2147483648, !1);
            s.MIN_VALUE = W;
            var M = s.prototype;
            (M.toInt = function () {
              return this.unsigned ? this.low >>> 0 : this.low;
            }),
              (M.toNumber = function () {
                return this.unsigned
                  ? (this.high >>> 0) * h + (this.low >>> 0)
                  : this.high * h + (this.low >>> 0);
              }),
              (M.toString = function (e) {
                if ((e = e || 10) < 2 || 36 < e) throw RangeError("radix");
                if (this.isZero()) return "0";
                if (this.isNegative()) {
                  if (this.eq(W)) {
                    var t = p(e),
                      n = this.div(t),
                      i = n.mul(t).sub(this);
                    return n.toString(e) + i.toInt().toString(e);
                  }
                  return "-" + this.neg().toString(e);
                }
                for (var o = p(_(e, 6), this.unsigned), r = this, s = ""; ; ) {
                  var l = r.div(o),
                    a = (r.sub(l.mul(o)).toInt() >>> 0).toString(e);
                  if ((r = l).isZero()) return a + s;
                  for (; a.length < 6; ) a = "0" + a;
                  s = "" + a + s;
                }
              }),
              (M.getHighBits = function () {
                return this.high;
              }),
              (M.getHighBitsUnsigned = function () {
                return this.high >>> 0;
              }),
              (M.getLowBits = function () {
                return this.low;
              }),
              (M.getLowBitsUnsigned = function () {
                return this.low >>> 0;
              }),
              (M.getNumBitsAbs = function () {
                if (this.isNegative())
                  return this.eq(W) ? 64 : this.neg().getNumBitsAbs();
                for (
                  var e = 0 != this.high ? this.high : this.low, t = 31;
                  t > 0 && 0 == (e & (1 << t));
                  t--
                );
                return 0 != this.high ? t + 33 : t + 1;
              }),
              (M.isZero = function () {
                return 0 === this.high && 0 === this.low;
              }),
              (M.eqz = M.isZero),
              (M.isNegative = function () {
                return !this.unsigned && this.high < 0;
              }),
              (M.isPositive = function () {
                return this.unsigned || this.high >= 0;
              }),
              (M.isOdd = function () {
                return 1 == (1 & this.low);
              }),
              (M.isEven = function () {
                return 0 == (1 & this.low);
              }),
              (M.equals = function (e) {
                return (
                  l(e) || (e = f(e)),
                  (this.unsigned === e.unsigned ||
                    this.high >>> 31 != 1 ||
                    e.high >>> 31 != 1) &&
                    this.high === e.high &&
                    this.low === e.low
                );
              }),
              (M.eq = M.equals),
              (M.notEquals = function (e) {
                return !this.eq(e);
              }),
              (M.neq = M.notEquals),
              (M.ne = M.notEquals),
              (M.lessThan = function (e) {
                return this.comp(e) < 0;
              }),
              (M.lt = M.lessThan),
              (M.lessThanOrEqual = function (e) {
                return this.comp(e) <= 0;
              }),
              (M.lte = M.lessThanOrEqual),
              (M.le = M.lessThanOrEqual),
              (M.greaterThan = function (e) {
                return this.comp(e) > 0;
              }),
              (M.gt = M.greaterThan),
              (M.greaterThanOrEqual = function (e) {
                return this.comp(e) >= 0;
              }),
              (M.gte = M.greaterThanOrEqual),
              (M.ge = M.greaterThanOrEqual),
              (M.compare = function (e) {
                if ((l(e) || (e = f(e)), this.eq(e))) return 0;
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
              (M.comp = M.compare),
              (M.negate = function () {
                return !this.unsigned && this.eq(W) ? W : this.not().add(R);
              }),
              (M.neg = M.negate),
              (M.add = function (e) {
                l(e) || (e = f(e));
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  r = e.high >>> 16,
                  s = 65535 & e.high,
                  a = e.low >>> 16,
                  u = 0,
                  c = 0,
                  p = 0,
                  _ = 0;
                return (
                  (p += (_ += o + (65535 & e.low)) >>> 16),
                  (c += (p += i + a) >>> 16),
                  (u += (c += n + s) >>> 16),
                  (u += t + r),
                  m(
                    ((p &= 65535) << 16) | (_ &= 65535),
                    ((u &= 65535) << 16) | (c &= 65535),
                    this.unsigned
                  )
                );
              }),
              (M.subtract = function (e) {
                return l(e) || (e = f(e)), this.add(e.neg());
              }),
              (M.sub = M.subtract),
              (M.multiply = function (e) {
                if (this.isZero()) return w;
                if ((l(e) || (e = f(e)), r))
                  return m(
                    r.mul(this.low, this.high, e.low, e.high),
                    r.get_high(),
                    this.unsigned
                  );
                if (e.isZero()) return w;
                if (this.eq(W)) return e.isOdd() ? W : w;
                if (e.eq(W)) return this.isOdd() ? W : w;
                if (this.isNegative())
                  return e.isNegative()
                    ? this.neg().mul(e.neg())
                    : this.neg().mul(e).neg();
                if (e.isNegative()) return this.mul(e.neg()).neg();
                if (this.lt(g) && e.lt(g))
                  return p(this.toNumber() * e.toNumber(), this.unsigned);
                var t = this.high >>> 16,
                  n = 65535 & this.high,
                  i = this.low >>> 16,
                  o = 65535 & this.low,
                  s = e.high >>> 16,
                  a = 65535 & e.high,
                  u = e.low >>> 16,
                  c = 65535 & e.low,
                  _ = 0,
                  d = 0,
                  h = 0,
                  S = 0;
                return (
                  (h += (S += o * c) >>> 16),
                  (d += (h += i * c) >>> 16),
                  (h &= 65535),
                  (d += (h += o * u) >>> 16),
                  (_ += (d += n * c) >>> 16),
                  (d &= 65535),
                  (_ += (d += i * u) >>> 16),
                  (d &= 65535),
                  (_ += (d += o * a) >>> 16),
                  (_ += t * c + n * u + i * a + o * s),
                  m(
                    ((h &= 65535) << 16) | (S &= 65535),
                    ((_ &= 65535) << 16) | (d &= 65535),
                    this.unsigned
                  )
                );
              }),
              (M.mul = M.multiply),
              (M.divide = function (e) {
                if ((l(e) || (e = f(e)), e.isZero()))
                  throw Error("division by zero");
                var t, n, i;
                if (r)
                  return this.unsigned ||
                    -2147483648 !== this.high ||
                    -1 !== e.low ||
                    -1 !== e.high
                    ? m(
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
                if (this.isZero()) return this.unsigned ? C : w;
                if (this.unsigned) {
                  if ((e.unsigned || (e = e.toUnsigned()), e.gt(this)))
                    return C;
                  if (e.gt(this.shru(1))) return v;
                  i = C;
                } else {
                  if (this.eq(W))
                    return e.eq(R) || e.eq(b)
                      ? W
                      : e.eq(W)
                      ? R
                      : (t = this.shr(1).div(e).shl(1)).eq(w)
                      ? e.isNegative()
                        ? R
                        : b
                      : ((n = this.sub(e.mul(t))), (i = t.add(n.div(e))));
                  if (e.eq(W)) return this.unsigned ? C : w;
                  if (this.isNegative())
                    return e.isNegative()
                      ? this.neg().div(e.neg())
                      : this.neg().div(e).neg();
                  if (e.isNegative()) return this.div(e.neg()).neg();
                  i = w;
                }
                for (n = this; n.gte(e); ) {
                  t = Math.max(1, Math.floor(n.toNumber() / e.toNumber()));
                  for (
                    var o = Math.ceil(Math.log(t) / Math.LN2),
                      s = o <= 48 ? 1 : _(2, o - 48),
                      a = p(t),
                      u = a.mul(e);
                    u.isNegative() || u.gt(n);

                  )
                    u = (a = p((t -= s), this.unsigned)).mul(e);
                  a.isZero() && (a = R), (i = i.add(a)), (n = n.sub(u));
                }
                return i;
              }),
              (M.div = M.divide),
              (M.modulo = function (e) {
                return (
                  l(e) || (e = f(e)),
                  r
                    ? m(
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
              (M.mod = M.modulo),
              (M.rem = M.modulo),
              (M.not = function () {
                return m(~this.low, ~this.high, this.unsigned);
              }),
              (M.and = function (e) {
                return (
                  l(e) || (e = f(e)),
                  m(this.low & e.low, this.high & e.high, this.unsigned)
                );
              }),
              (M.or = function (e) {
                return (
                  l(e) || (e = f(e)),
                  m(this.low | e.low, this.high | e.high, this.unsigned)
                );
              }),
              (M.xor = function (e) {
                return (
                  l(e) || (e = f(e)),
                  m(this.low ^ e.low, this.high ^ e.high, this.unsigned)
                );
              }),
              (M.shiftLeft = function (e) {
                return (
                  l(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? m(
                        this.low << e,
                        (this.high << e) | (this.low >>> (32 - e)),
                        this.unsigned
                      )
                    : m(0, this.low << (e - 32), this.unsigned)
                );
              }),
              (M.shl = M.shiftLeft),
              (M.shiftRight = function (e) {
                return (
                  l(e) && (e = e.toInt()),
                  0 == (e &= 63)
                    ? this
                    : e < 32
                    ? m(
                        (this.low >>> e) | (this.high << (32 - e)),
                        this.high >> e,
                        this.unsigned
                      )
                    : m(
                        this.high >> (e - 32),
                        this.high >= 0 ? 0 : -1,
                        this.unsigned
                      )
                );
              }),
              (M.shr = M.shiftRight),
              (M.shiftRightUnsigned = function (e) {
                if ((l(e) && (e = e.toInt()), 0 === (e &= 63))) return this;
                var t = this.high;
                return e < 32
                  ? m(
                      (this.low >>> e) | (t << (32 - e)),
                      t >>> e,
                      this.unsigned
                    )
                  : m(32 === e ? t : t >>> (e - 32), 0, this.unsigned);
              }),
              (M.shru = M.shiftRightUnsigned),
              (M.shr_u = M.shiftRightUnsigned),
              (M.toSigned = function () {
                return this.unsigned ? m(this.low, this.high, !1) : this;
              }),
              (M.toUnsigned = function () {
                return this.unsigned ? this : m(this.low, this.high, !0);
              }),
              (M.toBytes = function (e) {
                return e ? this.toBytesLE() : this.toBytesBE();
              }),
              (M.toBytesLE = function () {
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
              (M.toBytesBE = function () {
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
              (s.fromBytes = function (e, t, n) {
                return n ? s.fromBytesLE(e, t) : s.fromBytesBE(e, t);
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
              (_cjsExports = n.exports);
          },
          {}
        ),
          __cjsMetaURL ||
            loader.throwInvalidWrapper(
              "./long.js",
              "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL);
        var __cjsMetaURL$1 =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
        loader.define(
          __cjsMetaURL$1,
          function (e, t, n, i, o) {
            (n.exports = function (e, t) {
              var n = new Array(arguments.length - 1),
                i = 0,
                o = 2,
                r = !0;
              for (; o < arguments.length; ) n[i++] = arguments[o++];
              return new Promise(function (o, s) {
                n[i] = function (e) {
                  if (r)
                    if (((r = !1), e)) s(e);
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
                  r && ((r = !1), s(e));
                }
              });
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$2 =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
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
            for (var s = new Array(64), l = new Array(123), a = 0; a < 64; )
              l[
                (s[a] =
                  a < 26
                    ? a + 65
                    : a < 52
                    ? a + 71
                    : a < 62
                    ? a - 4
                    : (a - 59) | 43)
              ] = a++;
            r.encode = function (e, t, n) {
              for (var i, o = null, r = [], l = 0, a = 0; t < n; ) {
                var u = e[t++];
                switch (a) {
                  case 0:
                    (r[l++] = s[u >> 2]), (i = (3 & u) << 4), (a = 1);
                    break;
                  case 1:
                    (r[l++] = s[i | (u >> 4)]), (i = (15 & u) << 2), (a = 2);
                    break;
                  case 2:
                    (r[l++] = s[i | (u >> 6)]), (r[l++] = s[63 & u]), (a = 0);
                }
                l > 8191 &&
                  ((o || (o = [])).push(String.fromCharCode.apply(String, r)),
                  (l = 0));
              }
              return (
                a && ((r[l++] = s[i]), (r[l++] = 61), 1 === a && (r[l++] = 61)),
                o
                  ? (l &&
                      o.push(String.fromCharCode.apply(String, r.slice(0, l))),
                    o.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, l))
              );
            };
            var u = "invalid encoding";
            (r.decode = function (e, t, n) {
              for (var i, o = n, r = 0, s = 0; s < e.length; ) {
                var a = e.charCodeAt(s++);
                if (61 === a && r > 1) break;
                if (void 0 === (a = l[a])) throw Error(u);
                switch (r) {
                  case 0:
                    (i = a), (r = 1);
                    break;
                  case 1:
                    (t[n++] = (i << 2) | ((48 & a) >> 4)), (i = a), (r = 2);
                    break;
                  case 2:
                    (t[n++] = ((15 & i) << 4) | ((60 & a) >> 2)),
                      (i = a),
                      (r = 3);
                    break;
                  case 3:
                    (t[n++] = ((3 & i) << 6) | a), (r = 0);
                }
              }
              if (1 === r) throw Error(u);
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
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
                      function s(e, i) {
                        return (
                          (n[0] = e[i]),
                          (n[1] = e[i + 1]),
                          (n[2] = e[i + 2]),
                          (n[3] = e[i + 3]),
                          t[0]
                        );
                      }
                      function l(e, i) {
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
                        (e.readFloatLE = i ? s : l),
                        (e.readFloatBE = i ? l : s);
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
                          s = 8388607 & i;
                        return 255 === r
                          ? s
                            ? NaN
                            : o * (1 / 0)
                          : 0 === r
                          ? 1401298464324817e-60 * o * s
                          : o * Math.pow(2, r - 150) * (s + 8388608);
                      }
                      (e.writeFloatLE = t.bind(null, s)),
                        (e.writeFloatBE = t.bind(null, l)),
                        (e.readFloatLE = n.bind(null, a)),
                        (e.readFloatBE = n.bind(null, u));
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
                      function s(e, i) {
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
                      function l(e, i) {
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
                        (e.readDoubleLE = i ? s : l),
                        (e.readDoubleBE = i ? l : s);
                    })()
                  : (function () {
                      function t(e, t, n, i, o, r) {
                        var s = i < 0 ? 1 : 0;
                        if ((s && (i = -i), 0 === i))
                          e(0, o, r + t),
                            e(1 / i > 0 ? 0 : 2147483648, o, r + n);
                        else if (isNaN(i))
                          e(0, o, r + t), e(2146959360, o, r + n);
                        else if (i > 17976931348623157e292)
                          e(0, o, r + t),
                            e(((s << 31) | 2146435072) >>> 0, o, r + n);
                        else {
                          var l;
                          if (i < 22250738585072014e-324)
                            e((l = i / 5e-324) >>> 0, o, r + t),
                              e(((s << 31) | (l / 4294967296)) >>> 0, o, r + n);
                          else {
                            var a = Math.floor(Math.log(i) / Math.LN2);
                            1024 === a && (a = 1023),
                              e(
                                (4503599627370496 *
                                  (l = i * Math.pow(2, -a))) >>>
                                  0,
                                o,
                                r + t
                              ),
                              e(
                                ((s << 31) |
                                  ((a + 1023) << 20) |
                                  ((1048576 * l) & 1048575)) >>>
                                  0,
                                o,
                                r + n
                              );
                          }
                        }
                      }
                      function n(e, t, n, i, o) {
                        var r = e(i, o + t),
                          s = e(i, o + n),
                          l = 2 * (s >> 31) + 1,
                          a = (s >>> 20) & 2047,
                          u = 4294967296 * (1048575 & s) + r;
                        return 2047 === a
                          ? u
                            ? NaN
                            : l * (1 / 0)
                          : 0 === a
                          ? 5e-324 * l * u
                          : l * Math.pow(2, a - 1075) * (u + 4503599627370496);
                      }
                      (e.writeDoubleLE = t.bind(null, s, 0, 4)),
                        (e.writeDoubleBE = t.bind(null, l, 4, 0)),
                        (e.readDoubleLE = n.bind(null, a, 0, 4)),
                        (e.readDoubleBE = n.bind(null, u, 4, 0));
                    })(),
                e
              );
            }
            function s(e, t, n) {
              (t[n] = 255 & e),
                (t[n + 1] = (e >>> 8) & 255),
                (t[n + 2] = (e >>> 16) & 255),
                (t[n + 3] = e >>> 24);
            }
            function l(e, t, n) {
              (t[n] = e >>> 24),
                (t[n + 1] = (e >>> 16) & 255),
                (t[n + 2] = (e >>> 8) & 255),
                (t[n + 3] = 255 & e);
            }
            function a(e, t) {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
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
                for (var i, o = null, r = [], s = 0; t < n; )
                  (i = e[t++]) < 128
                    ? (r[s++] = i)
                    : i > 191 && i < 224
                    ? (r[s++] = ((31 & i) << 6) | (63 & e[t++]))
                    : i > 239 && i < 365
                    ? ((i =
                        (((7 & i) << 18) |
                          ((63 & e[t++]) << 12) |
                          ((63 & e[t++]) << 6) |
                          (63 & e[t++])) -
                        65536),
                      (r[s++] = 55296 + (i >> 10)),
                      (r[s++] = 56320 + (1023 & i)))
                    : (r[s++] =
                        ((15 & i) << 12) |
                        ((63 & e[t++]) << 6) |
                        (63 & e[t++])),
                    s > 8191 &&
                      ((o || (o = [])).push(
                        String.fromCharCode.apply(String, r)
                      ),
                      (s = 0));
                return o
                  ? (s &&
                      o.push(String.fromCharCode.apply(String, r.slice(0, s))),
                    o.join(""))
                  : String.fromCharCode.apply(String, r.slice(0, s));
              }),
              (r.write = function (e, t, n) {
                for (var i, o, r = n, s = 0; s < e.length; ++s)
                  (i = e.charCodeAt(s)) < 128
                    ? (t[n++] = i)
                    : i < 2048
                    ? ((t[n++] = (i >> 6) | 192), (t[n++] = (63 & i) | 128))
                    : 55296 == (64512 & i) &&
                      56320 == (64512 & (o = e.charCodeAt(s + 1)))
                    ? ((i = 65536 + ((1023 & i) << 10) + (1023 & o)),
                      ++s,
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
        loader.define(
          __cjsMetaURL$7,
          function (e, t, n, i, o) {
            (n.exports = function (e, t, n) {
              var i = n || 8192,
                o = i >>> 1,
                r = null,
                s = i;
              return function (n) {
                if (n < 1 || n > o) return e(n);
                s + n > i && ((r = e(i)), (s = 0));
                var l = t.call(r, s, (s += n));
                return 7 & s && (s = 1 + (7 | s)), l;
              };
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$8 =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
        loader.define(
          __cjsMetaURL$8,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("../util/minimal");
            function s(e, t) {
              (this.lo = e >>> 0), (this.hi = t >>> 0);
            }
            var l = (s.zero = new s(0, 0));
            (l.toNumber = function () {
              return 0;
            }),
              (l.zzEncode = l.zzDecode =
                function () {
                  return this;
                }),
              (l.length = function () {
                return 1;
              });
            var a = (s.zeroHash = "\0\0\0\0\0\0\0\0");
            (s.fromNumber = function (e) {
              if (0 === e) return l;
              var t = e < 0;
              t && (e = -e);
              var n = e >>> 0,
                i = ((e - n) / 4294967296) >>> 0;
              return (
                t &&
                  ((i = ~i >>> 0),
                  (n = ~n >>> 0),
                  ++n > 4294967295 && ((n = 0), ++i > 4294967295 && (i = 0))),
                new s(n, i)
              );
            }),
              (s.from = function (e) {
                if ("number" == typeof e) return s.fromNumber(e);
                if (r.isString(e)) {
                  if (!r.Long) return s.fromNumber(parseInt(e, 10));
                  e = r.Long.fromString(e);
                }
                return e.low || e.high ? new s(e.low >>> 0, e.high >>> 0) : l;
              }),
              (s.prototype.toNumber = function (e) {
                if (!e && this.hi >>> 31) {
                  var t = (1 + ~this.lo) >>> 0,
                    n = ~this.hi >>> 0;
                  return t || (n = (n + 1) >>> 0), -(t + 4294967296 * n);
                }
                return this.lo + 4294967296 * this.hi;
              }),
              (s.prototype.toLong = function (e) {
                return r.Long
                  ? new r.Long(0 | this.lo, 0 | this.hi, Boolean(e))
                  : {
                      low: 0 | this.lo,
                      high: 0 | this.hi,
                      unsigned: Boolean(e),
                    };
              });
            var u = String.prototype.charCodeAt;
            (s.fromHash = function (e) {
              return e === a
                ? l
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
        loader.define(
          __cjsMetaURL$9,
          function (e, t, n, i, o) {
            var r = e;
            function s(e, t, n) {
              for (var i = Object.keys(t), o = 0; o < i.length; ++o)
                (void 0 !== e[i[o]] && n) || (e[i[o]] = t[i[o]]);
              return e;
            }
            function l(e) {
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
                  n && s(this, n);
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
              (r.merge = s),
              (r.lcFirst = function (e) {
                return e.charAt(0).toLowerCase() + e.substring(1);
              }),
              (r.newError = l),
              (r.ProtocolError = l("ProtocolError")),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
        loader.define(
          __cjsMetaURL$a,
          function (e, t, n, i, o) {
            n.exports = _;
            var r,
              s = t("./util/minimal"),
              l = s.LongBits,
              a = s.base64,
              u = s.utf8;
            function c(e, t, n) {
              (this.fn = e),
                (this.len = t),
                (this.next = void 0),
                (this.val = n);
            }
            function p() {}
            function m(e) {
              (this.head = e.head),
                (this.tail = e.tail),
                (this.len = e.len),
                (this.next = e.states);
            }
            function _() {
              (this.len = 0),
                (this.head = new c(p, 0, 0)),
                (this.tail = this.head),
                (this.states = null);
            }
            var d = function () {
              return s.Buffer
                ? function () {
                    return (_.create = function () {
                      return new r();
                    })();
                  }
                : function () {
                    return new _();
                  };
            };
            function f(e, t, n) {
              t[n] = 255 & e;
            }
            function h(e, t) {
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
            (_.create = d()),
              (_.alloc = function (e) {
                return new s.Array(e);
              }),
              s.Array !== Array &&
                (_.alloc = s.pool(_.alloc, s.Array.prototype.subarray)),
              (_.prototype._push = function (e, t, n) {
                return (
                  (this.tail = this.tail.next = new c(e, t, n)),
                  (this.len += t),
                  this
                );
              }),
              (h.prototype = Object.create(c.prototype)),
              (h.prototype.fn = function (e, t, n) {
                for (; e > 127; ) (t[n++] = (127 & e) | 128), (e >>>= 7);
                t[n] = e;
              }),
              (_.prototype.uint32 = function (e) {
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
              (_.prototype.int32 = function (e) {
                return e < 0
                  ? this._push(S, 10, l.fromNumber(e))
                  : this.uint32(e);
              }),
              (_.prototype.sint32 = function (e) {
                return this.uint32(((e << 1) ^ (e >> 31)) >>> 0);
              }),
              (_.prototype.uint64 = function (e) {
                var t = l.from(e);
                return this._push(S, t.length(), t);
              }),
              (_.prototype.int64 = _.prototype.uint64),
              (_.prototype.sint64 = function (e) {
                var t = l.from(e).zzEncode();
                return this._push(S, t.length(), t);
              }),
              (_.prototype.bool = function (e) {
                return this._push(f, 1, e ? 1 : 0);
              }),
              (_.prototype.fixed32 = function (e) {
                return this._push(y, 4, e >>> 0);
              }),
              (_.prototype.sfixed32 = _.prototype.fixed32),
              (_.prototype.fixed64 = function (e) {
                var t = l.from(e);
                return this._push(y, 4, t.lo)._push(y, 4, t.hi);
              }),
              (_.prototype.sfixed64 = _.prototype.fixed64),
              (_.prototype.float = function (e) {
                return this._push(s.float.writeFloatLE, 4, e);
              }),
              (_.prototype.double = function (e) {
                return this._push(s.float.writeDoubleLE, 8, e);
              });
            var g = s.Array.prototype.set
              ? function (e, t, n) {
                  t.set(e, n);
                }
              : function (e, t, n) {
                  for (var i = 0; i < e.length; ++i) t[n + i] = e[i];
                };
            (_.prototype.bytes = function (e) {
              var t = e.length >>> 0;
              if (!t) return this._push(f, 1, 0);
              if (s.isString(e)) {
                var n = _.alloc((t = a.length(e)));
                a.decode(e, n, 0), (e = n);
              }
              return this.uint32(t)._push(g, t, e);
            }),
              (_.prototype.string = function (e) {
                var t = u.length(e);
                return t
                  ? this.uint32(t)._push(u.write, t, e)
                  : this._push(f, 1, 0);
              }),
              (_.prototype.fork = function () {
                return (
                  (this.states = new m(this)),
                  (this.head = this.tail = new c(p, 0, 0)),
                  (this.len = 0),
                  this
                );
              }),
              (_.prototype.reset = function () {
                return (
                  this.states
                    ? ((this.head = this.states.head),
                      (this.tail = this.states.tail),
                      (this.len = this.states.len),
                      (this.states = this.states.next))
                    : ((this.head = this.tail = new c(p, 0, 0)),
                      (this.len = 0)),
                  this
                );
              }),
              (_.prototype.ldelim = function () {
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
              (_.prototype.finish = function () {
                for (
                  var e = this.head.next,
                    t = this.constructor.alloc(this.len),
                    n = 0;
                  e;

                )
                  e.fn(e.val, t, n), (n += e.len), (e = e.next);
                return t;
              }),
              (_._configure = function (e) {
                (r = e), (_.create = d()), r._configure();
              }),
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$b =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
        loader.define(
          __cjsMetaURL$b,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./writer");
            (l.prototype = Object.create(r.prototype)).constructor = l;
            var s = t("./util/minimal");
            function l() {
              r.call(this);
            }
            function a(e, t, n) {
              e.length < 40
                ? s.utf8.write(e, t, n)
                : t.utf8Write
                ? t.utf8Write(e, n)
                : t.write(e, n);
            }
            (l._configure = function () {
              (l.alloc = s._Buffer_allocUnsafe),
                (l.writeBytesBuffer =
                  s.Buffer &&
                  s.Buffer.prototype instanceof Uint8Array &&
                  "set" === s.Buffer.prototype.set.name
                    ? function (e, t, n) {
                        t.set(e, n);
                      }
                    : function (e, t, n) {
                        if (e.copy) e.copy(t, n, 0, e.length);
                        else for (var i = 0; i < e.length; ) t[n++] = e[i++];
                      });
            }),
              (l.prototype.bytes = function (e) {
                s.isString(e) && (e = s._Buffer_from(e, "base64"));
                var t = e.length >>> 0;
                return (
                  this.uint32(t),
                  t && this._push(l.writeBytesBuffer, t, e),
                  this
                );
              }),
              (l.prototype.string = function (e) {
                var t = s.Buffer.byteLength(e);
                return this.uint32(t), t && this._push(a, t, e), this;
              }),
              l._configure(),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
        loader.define(
          __cjsMetaURL$c,
          function (e, t, n, i, o) {
            n.exports = c;
            var r,
              s = t("./util/minimal"),
              l = s.LongBits,
              a = s.utf8;
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
            var p,
              m =
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
              _ = function () {
                return s.Buffer
                  ? function (e) {
                      return (c.create = function (e) {
                        return s.Buffer.isBuffer(e) ? new r(e) : m(e);
                      })(e);
                    }
                  : m;
              };
            function d() {
              var e = new l(0, 0),
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
              if (this.pos + 8 > this.len) throw u(this, 8);
              return new l(
                f(this.buf, (this.pos += 4)),
                f(this.buf, (this.pos += 4))
              );
            }
            (c.create = _()),
              (c.prototype._slice =
                s.Array.prototype.subarray || s.Array.prototype.slice),
              (c.prototype.uint32 =
                ((p = 4294967295),
                function () {
                  if (
                    ((p = (127 & this.buf[this.pos]) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return p;
                  if (
                    ((p = (p | ((127 & this.buf[this.pos]) << 7)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return p;
                  if (
                    ((p = (p | ((127 & this.buf[this.pos]) << 14)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return p;
                  if (
                    ((p = (p | ((127 & this.buf[this.pos]) << 21)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return p;
                  if (
                    ((p = (p | ((15 & this.buf[this.pos]) << 28)) >>> 0),
                    this.buf[this.pos++] < 128)
                  )
                    return p;
                  if ((this.pos += 5) > this.len)
                    throw ((this.pos = this.len), u(this, 10));
                  return p;
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
                return f(this.buf, (this.pos += 4));
              }),
              (c.prototype.sfixed32 = function () {
                if (this.pos + 4 > this.len) throw u(this, 4);
                return 0 | f(this.buf, (this.pos += 4));
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
                  n = this.pos + e;
                if (n > this.len) throw u(this, e);
                return (
                  (this.pos += e),
                  Array.isArray(this.buf)
                    ? this.buf.slice(t, n)
                    : t === n
                    ? new this.buf.constructor(0)
                    : this._slice.call(this.buf, t, n)
                );
              }),
              (c.prototype.string = function () {
                var e = this.bytes();
                return a.read(e, 0, e.length);
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
                (r = e), (c.create = _()), r._configure();
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
        loader.define(
          __cjsMetaURL$d,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./reader");
            (l.prototype = Object.create(r.prototype)).constructor = l;
            var s = t("./util/minimal");
            function l(e) {
              r.call(this, e);
            }
            (l._configure = function () {
              s.Buffer && (l.prototype._slice = s.Buffer.prototype.slice);
            }),
              (l.prototype.string = function () {
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
              l._configure(),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
        loader.define(
          __cjsMetaURL$e,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("../util/minimal");
            function s(e, t, n) {
              if ("function" != typeof e)
                throw TypeError("rpcImpl must be a function");
              r.EventEmitter.call(this),
                (this.rpcImpl = e),
                (this.requestDelimited = Boolean(t)),
                (this.responseDelimited = Boolean(n));
            }
            ((s.prototype = Object.create(
              r.EventEmitter.prototype
            )).constructor = s),
              (s.prototype.rpcCall = function e(t, n, i, o, s) {
                if (!o) throw TypeError("request must be specified");
                var l = this;
                if (!s) return r.asPromise(e, l, t, n, i, o);
                if (l.rpcImpl)
                  try {
                    return l.rpcImpl(
                      t,
                      n[l.requestDelimited ? "encodeDelimited" : "encode"](
                        o
                      ).finish(),
                      function (e, n) {
                        if (e) return l.emit("error", e, t), s(e);
                        if (null !== n) {
                          if (!(n instanceof i))
                            try {
                              n =
                                i[
                                  l.responseDelimited
                                    ? "decodeDelimited"
                                    : "decode"
                                ](n);
                            } catch (e) {
                              return l.emit("error", e, t), s(e);
                            }
                          return l.emit("data", n, t), s(null, n);
                        }
                        l.end(!0);
                      }
                    );
                  } catch (e) {
                    return (
                      l.emit("error", e, t),
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
              n.exports;
          },
          function () {
            return { "../util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$f =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
        loader.define(
          __cjsMetaURL$g,
          function (e, t, n, i, o) {
            (n.exports = {}), n.exports;
          },
          {}
        );
        var __cjsMetaURL$h =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
        loader.define(
          __cjsMetaURL$h,
          function (e, t, n, i, o) {
            var r = e;
            function s() {
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
              (r.configure = s),
              s(),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
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
                      var s = Object.keys(e),
                        l = new Array(s.length + 1),
                        a = new Array(s.length),
                        u = 0;
                      u < s.length;

                    )
                      (l[u] = s[u]), (a[u] = e[s[u++]]);
                    return (l[u] = t), Function.apply(null, l).apply(null, a);
                  }
                  return Function(t)();
                }
                for (
                  var c = new Array(arguments.length - 1), p = 0;
                  p < c.length;

                )
                  c[p] = arguments[++p];
                if (
                  ((p = 0),
                  (e = e.replace(/%([%dfijs])/g, function (e, t) {
                    var n = c[p++];
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
                  p !== c.length)
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
        loader.define(
          __cjsMetaURL$j,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("@protobufjs/aspromise"),
              s = t("@protobufjs/inquire")("fs");
            function l(e, t, n) {
              return (
                "function" == typeof t ? ((n = t), (t = {})) : t || (t = {}),
                n
                  ? !t.xhr && s && s.readFile
                    ? s.readFile(e, function (i, o) {
                        return i && "undefined" != typeof XMLHttpRequest
                          ? l.xhr(e, t, n)
                          : i
                          ? n(i)
                          : n(null, t.binary ? o : o.toString("utf8"));
                      })
                    : l.xhr(e, t, n)
                  : r(l, this, e, t)
              );
            }
            (l.xhr = function (e, t, n) {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
        loader.define(
          __cjsMetaURL$k,
          function (e, t, n, i, o) {
            var r = e,
              s = (r.isAbsolute = function (e) {
                return /^(?:\/|\w+:)/.test(e);
              }),
              l = (r.normalize = function (e) {
                var t = (e = e
                    .replace(/\\/g, "/")
                    .replace(/\/{2,}/g, "/")).split("/"),
                  n = s(e),
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
                n || (t = l(t)),
                s(t)
                  ? t
                  : (n || (e = l(e)),
                    (e = e.replace(/(?:\/|^)[^/]+$/, "")).length
                      ? l(e + "/" + t)
                      : t)
              );
            }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$l =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
        loader.define(
          __cjsMetaURL$l,
          function (e, t, n, i, o) {
            var r = e,
              s = t("./util"),
              l = [
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
            function a(e, t) {
              var n = 0,
                i = {};
              for (t |= 0; n < e.length; ) i[l[n + t]] = e[n++];
              return i;
            }
            (r.basic = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2])),
              (r.defaults = a([
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
              (r.long = a([0, 0, 0, 1, 1], 7)),
              (r.mapKey = a([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2)),
              (r.packed = a([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0])),
              n.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$m =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
        loader.define(
          __cjsMetaURL$m,
          function (e, t, n, i, o) {
            n.exports = p;
            var r = t("./object");
            ((p.prototype = Object.create(r.prototype)).constructor =
              p).className = "Field";
            var s,
              l = t("./enum"),
              a = t("./types"),
              u = t("./util"),
              c = /^required|optional|repeated$/;
            function p(e, t, n, i, o, s, l) {
              if (
                (u.isObject(i)
                  ? ((l = o), (s = i), (i = o = void 0))
                  : u.isObject(o) && ((l = s), (s = o), (o = void 0)),
                r.call(this, e, s),
                !u.isInteger(t) || t < 0)
              )
                throw TypeError("id must be a non-negative integer");
              if (!u.isString(n)) throw TypeError("type must be a string");
              if (void 0 !== i && !c.test((i = i.toString().toLowerCase())))
                throw TypeError("rule must be a string rule");
              if (void 0 !== o && !u.isString(o))
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
                (this.long = !!u.Long && void 0 !== a.long[n]),
                (this.bytes = "bytes" === n),
                (this.resolvedType = null),
                (this.extensionField = null),
                (this.declaringField = null),
                (this._packed = null),
                (this.comment = l);
            }
            (p.fromJSON = function (e, t) {
              return new p(
                e,
                t.id,
                t.type,
                t.rule,
                t.extend,
                t.options,
                t.comment
              );
            }),
              Object.defineProperty(p.prototype, "packed", {
                get: function () {
                  return (
                    null === this._packed &&
                      (this._packed = !1 !== this.getOption("packed")),
                    this._packed
                  );
                },
              }),
              (p.prototype.setOption = function (e, t, n) {
                return (
                  "packed" === e && (this._packed = null),
                  r.prototype.setOption.call(this, e, t, n)
                );
              }),
              (p.prototype.toJSON = function (e) {
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
              (p.prototype.resolve = function () {
                if (this.resolved) return this;
                if (
                  (void 0 === (this.typeDefault = a.defaults[this.type]) &&
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
                    this.resolvedType instanceof l &&
                      "string" == typeof this.typeDefault &&
                      (this.typeDefault =
                        this.resolvedType.values[this.typeDefault])),
                  this.options &&
                    ((!0 !== this.options.packed &&
                      (void 0 === this.options.packed ||
                        !this.resolvedType ||
                        this.resolvedType instanceof l)) ||
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
                  r.prototype.resolve.call(this)
                );
              }),
              (p.d = function (e, t, n, i) {
                return (
                  "function" == typeof t
                    ? (t = u.decorateType(t).name)
                    : t && "object" == typeof t && (t = u.decorateEnum(t).name),
                  function (o, r) {
                    u.decorateType(o.constructor).add(
                      new p(r, e, t, n, { default: i })
                    );
                  }
                );
              }),
              (p._configure = function (e) {
                s = e;
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
        loader.define(
          __cjsMetaURL$n,
          function (e, t, n, i, o) {
            n.exports = a;
            var r = t("./object");
            ((a.prototype = Object.create(r.prototype)).constructor =
              a).className = "OneOf";
            var s = t("./field"),
              l = t("./util");
            function a(e, t, n, i) {
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
            function u(e) {
              if (e.parent)
                for (var t = 0; t < e.fieldsArray.length; ++t)
                  e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
            }
            (a.fromJSON = function (e, t) {
              return new a(e, t.oneof, t.options, t.comment);
            }),
              (a.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return l.toObject([
                  "options",
                  this.options,
                  "oneof",
                  this.oneof,
                  "comment",
                  t ? this.comment : void 0,
                ]);
              }),
              (a.prototype.add = function (e) {
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
              (a.prototype.remove = function (e) {
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
              (a.prototype.onAdd = function (e) {
                r.prototype.onAdd.call(this, e);
                for (var t = 0; t < this.oneof.length; ++t) {
                  var n = e.get(this.oneof[t]);
                  n &&
                    !n.partOf &&
                    ((n.partOf = this), this.fieldsArray.push(n));
                }
                u(this);
              }),
              (a.prototype.onRemove = function (e) {
                for (var t, n = 0; n < this.fieldsArray.length; ++n)
                  (t = this.fieldsArray[n]).parent && t.parent.remove(t);
                r.prototype.onRemove.call(this, e);
              }),
              (a.d = function () {
                for (
                  var e = new Array(arguments.length), t = 0;
                  t < arguments.length;

                )
                  e[t] = arguments[t++];
                return function (t, n) {
                  l.decorateType(t.constructor).add(new a(n, e)),
                    Object.defineProperty(t, n, {
                      get: l.oneOfGetter(e),
                      set: l.oneOfSetter(e),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
        loader.define(
          __cjsMetaURL$o,
          function (e, t, n, i, o) {
            n.exports = _;
            var r = t("./object");
            ((_.prototype = Object.create(r.prototype)).constructor =
              _).className = "Namespace";
            var s,
              l,
              a,
              u = t("./field"),
              c = t("./oneof"),
              p = t("./util");
            function m(e, t) {
              if (e && e.length) {
                for (var n = {}, i = 0; i < e.length; ++i)
                  n[e[i].name] = e[i].toJSON(t);
                return n;
              }
            }
            function _(e, t) {
              r.call(this, e, t),
                (this.nested = void 0),
                (this._nestedArray = null);
            }
            function d(e) {
              return (e._nestedArray = null), e;
            }
            (_.fromJSON = function (e, t) {
              return new _(e, t.options).addJSON(t.nested);
            }),
              (_.arrayToJSON = m),
              (_.isReservedId = function (e, t) {
                if (e)
                  for (var n = 0; n < e.length; ++n)
                    if ("string" != typeof e[n] && e[n][0] <= t && e[n][1] > t)
                      return !0;
                return !1;
              }),
              (_.isReservedName = function (e, t) {
                if (e)
                  for (var n = 0; n < e.length; ++n) if (e[n] === t) return !0;
                return !1;
              }),
              Object.defineProperty(_.prototype, "nestedArray", {
                get: function () {
                  return (
                    this._nestedArray ||
                    (this._nestedArray = p.toArray(this.nested))
                  );
                },
              }),
              (_.prototype.toJSON = function (e) {
                return p.toObject([
                  "options",
                  this.options,
                  "nested",
                  m(this.nestedArray, e),
                ]);
              }),
              (_.prototype.addJSON = function (e) {
                if (e)
                  for (var t, n = Object.keys(e), i = 0; i < n.length; ++i)
                    (t = e[n[i]]),
                      this.add(
                        (void 0 !== t.fields
                          ? s.fromJSON
                          : void 0 !== t.values
                          ? a.fromJSON
                          : void 0 !== t.methods
                          ? l.fromJSON
                          : void 0 !== t.id
                          ? u.fromJSON
                          : _.fromJSON)(n[i], t)
                      );
                return this;
              }),
              (_.prototype.get = function (e) {
                return (this.nested && this.nested[e]) || null;
              }),
              (_.prototype.getEnum = function (e) {
                if (this.nested && this.nested[e] instanceof a)
                  return this.nested[e].values;
                throw Error("no such enum: " + e);
              }),
              (_.prototype.add = function (e) {
                if (
                  !(
                    (e instanceof u && void 0 !== e.extend) ||
                    e instanceof s ||
                    e instanceof a ||
                    e instanceof l ||
                    e instanceof _ ||
                    e instanceof c
                  )
                )
                  throw TypeError("object must be a valid nested object");
                if (this.nested) {
                  var t = this.get(e.name);
                  if (t) {
                    if (
                      !(t instanceof _ && e instanceof _) ||
                      t instanceof s ||
                      t instanceof l
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
              (_.prototype.remove = function (e) {
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
              (_.prototype.define = function (e, t) {
                if (p.isString(e)) e = e.split(".");
                else if (!Array.isArray(e)) throw TypeError("illegal path");
                if (e && e.length && "" === e[0])
                  throw Error("path must be relative");
                for (var n = this; e.length > 0; ) {
                  var i = e.shift();
                  if (n.nested && n.nested[i]) {
                    if (!((n = n.nested[i]) instanceof _))
                      throw Error("path conflicts with non-namespace objects");
                  } else n.add((n = new _(i)));
                }
                return t && n.addJSON(t), n;
              }),
              (_.prototype.resolveAll = function () {
                for (var e = this.nestedArray, t = 0; t < e.length; )
                  e[t] instanceof _ ? e[t++].resolveAll() : e[t++].resolve();
                return this.resolve();
              }),
              (_.prototype.lookup = function (e, t, n) {
                if (
                  ("boolean" == typeof t
                    ? ((n = t), (t = void 0))
                    : t && !Array.isArray(t) && (t = [t]),
                  p.isString(e) && e.length)
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
                    i instanceof _ &&
                    (i = i.lookup(e.slice(1), t, !0))
                  )
                    return i;
                } else
                  for (var o = 0; o < this.nestedArray.length; ++o)
                    if (
                      this._nestedArray[o] instanceof _ &&
                      (i = this._nestedArray[o].lookup(e, t, !0))
                    )
                      return i;
                return null === this.parent || n
                  ? null
                  : this.parent.lookup(e, t);
              }),
              (_.prototype.lookupType = function (e) {
                var t = this.lookup(e, [s]);
                if (!t) throw Error("no such type: " + e);
                return t;
              }),
              (_.prototype.lookupEnum = function (e) {
                var t = this.lookup(e, [a]);
                if (!t) throw Error("no such Enum '" + e + "' in " + this);
                return t;
              }),
              (_.prototype.lookupTypeOrEnum = function (e) {
                var t = this.lookup(e, [s, a]);
                if (!t)
                  throw Error("no such Type or Enum '" + e + "' in " + this);
                return t;
              }),
              (_.prototype.lookupService = function (e) {
                var t = this.lookup(e, [l]);
                if (!t) throw Error("no such Service '" + e + "' in " + this);
                return t;
              }),
              (_._configure = function (e, t, n) {
                (s = e), (l = t), (a = n);
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
        loader.define(
          __cjsMetaURL$p,
          function (e, t, n, i, o) {
            n.exports = a;
            var r = t("./field");
            ((a.prototype = Object.create(r.prototype)).constructor =
              a).className = "MapField";
            var s = t("./types"),
              l = t("./util");
            function a(e, t, n, i, o, s) {
              if ((r.call(this, e, t, i, void 0, void 0, o, s), !l.isString(n)))
                throw TypeError("keyType must be a string");
              (this.keyType = n),
                (this.resolvedKeyType = null),
                (this.map = !0);
            }
            (a.fromJSON = function (e, t) {
              return new a(e, t.id, t.keyType, t.type, t.options, t.comment);
            }),
              (a.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return l.toObject([
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
              (a.prototype.resolve = function () {
                if (this.resolved) return this;
                if (void 0 === s.mapKey[this.keyType])
                  throw Error("invalid key type: " + this.keyType);
                return r.prototype.resolve.call(this);
              }),
              (a.d = function (e, t, n) {
                return (
                  "function" == typeof n
                    ? (n = l.decorateType(n).name)
                    : n && "object" == typeof n && (n = l.decorateEnum(n).name),
                  function (i, o) {
                    l.decorateType(i.constructor).add(new a(o, e, t, n));
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
        loader.define(
          __cjsMetaURL$q,
          function (e, t, n, i, o) {
            n.exports = l;
            var r = t("./object");
            ((l.prototype = Object.create(r.prototype)).constructor =
              l).className = "Method";
            var s = t("./util");
            function l(e, t, n, i, o, l, a, u, c) {
              if (
                (s.isObject(o)
                  ? ((a = o), (o = l = void 0))
                  : s.isObject(l) && ((a = l), (l = void 0)),
                void 0 !== t && !s.isString(t))
              )
                throw TypeError("type must be a string");
              if (!s.isString(n))
                throw TypeError("requestType must be a string");
              if (!s.isString(i))
                throw TypeError("responseType must be a string");
              r.call(this, e, a),
                (this.type = t || "rpc"),
                (this.requestType = n),
                (this.requestStream = !!o || void 0),
                (this.responseType = i),
                (this.responseStream = !!l || void 0),
                (this.resolvedRequestType = null),
                (this.resolvedResponseType = null),
                (this.comment = u),
                (this.parsedOptions = c);
            }
            (l.fromJSON = function (e, t) {
              return new l(
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
              (l.prototype.toJSON = function (e) {
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
              (l.prototype.resolve = function () {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
        loader.define(
          __cjsMetaURL$r,
          function (e, t, n, i, o) {
            n.exports = u;
            var r = t("./namespace");
            ((u.prototype = Object.create(r.prototype)).constructor =
              u).className = "Service";
            var s = t("./method"),
              l = t("./util"),
              a = t("./rpc");
            function u(e, t) {
              r.call(this, e, t),
                (this.methods = {}),
                (this._methodsArray = null);
            }
            function c(e) {
              return (e._methodsArray = null), e;
            }
            (u.fromJSON = function (e, t) {
              var n = new u(e, t.options);
              if (t.methods)
                for (var i = Object.keys(t.methods), o = 0; o < i.length; ++o)
                  n.add(s.fromJSON(i[o], t.methods[i[o]]));
              return (
                t.nested && n.addJSON(t.nested), (n.comment = t.comment), n
              );
            }),
              (u.prototype.toJSON = function (e) {
                var t = r.prototype.toJSON.call(this, e),
                  n = !!e && Boolean(e.keepComments);
                return l.toObject([
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
              Object.defineProperty(u.prototype, "methodsArray", {
                get: function () {
                  return (
                    this._methodsArray ||
                    (this._methodsArray = l.toArray(this.methods))
                  );
                },
              }),
              (u.prototype.get = function (e) {
                return this.methods[e] || r.prototype.get.call(this, e);
              }),
              (u.prototype.resolveAll = function () {
                for (var e = this.methodsArray, t = 0; t < e.length; ++t)
                  e[t].resolve();
                return r.prototype.resolve.call(this);
              }),
              (u.prototype.add = function (e) {
                if (this.get(e.name))
                  throw Error("duplicate name '" + e.name + "' in " + this);
                return e instanceof s
                  ? ((this.methods[e.name] = e), (e.parent = this), c(this))
                  : r.prototype.add.call(this, e);
              }),
              (u.prototype.remove = function (e) {
                if (e instanceof s) {
                  if (this.methods[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.methods[e.name], (e.parent = null), c(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (u.prototype.create = function (e, t, n) {
                for (
                  var i, o = new a.Service(e, t, n), r = 0;
                  r < this.methodsArray.length;
                  ++r
                ) {
                  var s = l
                    .lcFirst((i = this._methodsArray[r]).resolve().name)
                    .replace(/[^$\w_]/g, "");
                  o[s] = l.codegen(
                    ["r", "c"],
                    l.isReserved(s) ? s + "_" : s
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
        loader.define(
          __cjsMetaURL$s,
          function (e, t, n, i, o) {
            n.exports = s;
            var r = t("./util/minimal");
            function s(e) {
              if (e)
                for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                  this[t[n]] = e[t[n]];
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
                return this.$type.toObject(this, r.toJSONOptions);
              }),
              n.exports;
          },
          function () {
            return { "./util/minimal": __cjsMetaURL$9 };
          }
        );
        var __cjsMetaURL$t =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
        loader.define(
          __cjsMetaURL$t,
          function (e, t, n, i, o) {
            n.exports = function (e) {
              var t = l.codegen(
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
                  u = "m" + l.safeProp(i.name);
                t("case %i:", i.id),
                  i.map
                    ? (t("if(%s===util.emptyObject)", u)("%s={}", u)(
                        "var c2 = r.uint32()+r.pos"
                      ),
                      void 0 !== s.defaults[i.keyType]
                        ? t("k=%j", s.defaults[i.keyType])
                        : t("k=null"),
                      void 0 !== s.defaults[o]
                        ? t("value=%j", s.defaults[o])
                        : t("value=null"),
                      t("while(r.pos<c2){")("var tag2=r.uint32()")(
                        "switch(tag2>>>3){"
                      )(
                        "case 1: k=r.%s(); break",
                        i.keyType
                      )("case 2:"),
                      void 0 === s.basic[o]
                        ? t("value=types[%i].decode(r,r.uint32())", n)
                        : t("value=r.%s()", o),
                      t("break")("default:")("r.skipType(tag2&7)")("break")(
                        "}"
                      )("}"),
                      void 0 !== s.long[i.keyType]
                        ? t(
                            '%s[typeof k==="object"?util.longToHash(k):k]=value',
                            u
                          )
                        : t("%s[k]=value", u))
                    : i.repeated
                    ? (t("if(!(%s&&%s.length))", u, u)("%s=[]", u),
                      void 0 !== s.packed[o] &&
                        t("if((t&7)===2){")("var c2=r.uint32()+r.pos")(
                          "while(r.pos<c2)"
                        )(
                          "%s.push(r.%s())",
                          u,
                          o
                        )("}else"),
                      void 0 === s.basic[o]
                        ? t(
                            i.resolvedType.group
                              ? "%s.push(types[%i].decode(r))"
                              : "%s.push(types[%i].decode(r,r.uint32()))",
                            u,
                            n
                          )
                        : t("%s.push(r.%s())", u, o))
                    : void 0 === s.basic[o]
                    ? t(
                        i.resolvedType.group
                          ? "%s=types[%i].decode(r)"
                          : "%s=types[%i].decode(r,r.uint32())",
                        u,
                        n
                      )
                    : t("%s=r.%s()", u, o),
                  t("break");
              }
              for (
                t("default:")("r.skipType(t&7)")("break")("}")("}"), n = 0;
                n < e._fieldsArray.length;
                ++n
              ) {
                var c = e._fieldsArray[n];
                c.required &&
                  t("if(!m.hasOwnProperty(%j))", c.name)(
                    "throw util.ProtocolError(%j,{instance:m})",
                    a(c)
                  );
              }
              return t("return m");
            };
            var r = t("./enum"),
              s = t("./types"),
              l = t("./util");
            function a(e) {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
        loader.define(
          __cjsMetaURL$u,
          function (e, t, n, i, o) {
            n.exports = function (e) {
              var t = s.codegen(
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
                  c = "m" + s.safeProp(r.name);
                if (
                  (r.optional &&
                    t("if(%s!=null&&m.hasOwnProperty(%j)){", c, r.name),
                  r.map)
                )
                  t("if(!util.isObject(%s))", c)("return%j", l(r, "object"))(
                    "var k=Object.keys(%s)",
                    c
                  )("for(var i=0;i<k.length;++i){"),
                    u(t, r, "k[i]"),
                    a(t, r, o, c + "[k[i]]")("}");
                else if (r.repeated)
                  t("if(!Array.isArray(%s))", c)("return%j", l(r, "array"))(
                    "for(var i=0;i<%s.length;++i){",
                    c
                  ),
                    a(t, r, o, c + "[i]")("}");
                else {
                  if (r.partOf) {
                    var p = s.safeProp(r.partOf.name);
                    1 === i[r.partOf.name] &&
                      t("if(p%s===1)", p)(
                        "return%j",
                        r.partOf.name + ": multiple values"
                      ),
                      (i[r.partOf.name] = 1),
                      t("p%s=1", p);
                  }
                  a(t, r, o, c);
                }
                r.optional && t("}");
              }
              return t("return null");
            };
            var r = t("./enum"),
              s = t("./util");
            function l(e, t) {
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
            function a(e, t, n, i) {
              if (t.resolvedType)
                if (t.resolvedType instanceof r) {
                  e("switch(%s){", i)("default:")(
                    "return%j",
                    l(t, "enum value")
                  );
                  for (
                    var o = Object.keys(t.resolvedType.values), s = 0;
                    s < o.length;
                    ++s
                  )
                    e("case %i:", t.resolvedType.values[o[s]]);
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
                      l(t, "integer")
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
                    )("return%j", l(t, "integer|Long"));
                    break;
                  case "float":
                  case "double":
                    e('if(typeof %s!=="number")', i)(
                      "return%j",
                      l(t, "number")
                    );
                    break;
                  case "bool":
                    e('if(typeof %s!=="boolean")', i)(
                      "return%j",
                      l(t, "boolean")
                    );
                    break;
                  case "string":
                    e("if(!util.isString(%s))", i)("return%j", l(t, "string"));
                    break;
                  case "bytes":
                    e(
                      'if(!(%s&&typeof %s.length==="number"||util.isString(%s)))',
                      i,
                      i,
                      i
                    )("return%j", l(t, "buffer"));
                }
              return e;
            }
            function u(e, t, n) {
              switch (t.keyType) {
                case "int32":
                case "uint32":
                case "sint32":
                case "fixed32":
                case "sfixed32":
                  e("if(!util.key32Re.test(%s))", n)(
                    "return%j",
                    l(t, "integer key")
                  );
                  break;
                case "int64":
                case "uint64":
                case "sint64":
                case "fixed64":
                case "sfixed64":
                  e("if(!util.key64Re.test(%s))", n)(
                    "return%j",
                    l(t, "integer|Long key")
                  );
                  break;
                case "bool":
                  e("if(!util.key2Re.test(%s))", n)(
                    "return%j",
                    l(t, "boolean key")
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
        loader.define(
          __cjsMetaURL$v,
          function (e, t, n, i, o) {
            var r = e,
              s = t("./enum"),
              l = t("./util");
            function a(e, t, n, i) {
              if (t.resolvedType)
                if (t.resolvedType instanceof s) {
                  e("switch(d%s){", i);
                  for (
                    var o = t.resolvedType.values, r = Object.keys(o), l = 0;
                    l < r.length;
                    ++l
                  )
                    t.repeated && o[r[l]] === t.typeDefault && e("default:"),
                      e("case%j:", r[l])("case %i:", o[r[l]])(
                        "m%s=%j",
                        i,
                        o[r[l]]
                      )("break");
                  e("}");
                } else
                  e('if(typeof d%s!=="object")', i)(
                    "throw TypeError(%j)",
                    t.fullName + ": object expected"
                  )("m%s=types[%i].fromObject(d%s)", i, n, i);
              else {
                var a = !1;
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
                    a = !0;
                  case "int64":
                  case "sint64":
                  case "fixed64":
                  case "sfixed64":
                    e("if(util.Long)")(
                      "(m%s=util.Long.fromValue(d%s)).unsigned=%j",
                      i,
                      i,
                      a
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
                      a ? "true" : ""
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
            function u(e, t, n, i) {
              if (t.resolvedType)
                t.resolvedType instanceof s
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
                n = l.codegen(
                  ["d"],
                  e.name + "$fromObject"
                )("if(d instanceof this.ctor)")("return d");
              if (!t.length) return n("return new this.ctor");
              n("var m=new this.ctor");
              for (var i = 0; i < t.length; ++i) {
                var o = t[i].resolve(),
                  r = l.safeProp(o.name);
                o.map
                  ? (n("if(d%s){", r)('if(typeof d%s!=="object")', r)(
                      "throw TypeError(%j)",
                      o.fullName + ": object expected"
                    )("m%s={}", r)(
                      "for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){",
                      r
                    ),
                    a(n, o, i, r + "[ks[i]]")("}")("}"))
                  : o.repeated
                  ? (n("if(d%s){", r)("if(!Array.isArray(d%s))", r)(
                      "throw TypeError(%j)",
                      o.fullName + ": array expected"
                    )("m%s=[]", r)("for(var i=0;i<d%s.length;++i){", r),
                    a(n, o, i, r + "[i]")("}")("}"))
                  : (o.resolvedType instanceof s || n("if(d%s!=null){", r),
                    a(n, o, i, r),
                    o.resolvedType instanceof s || n("}"));
              }
              return n("return m");
            }),
              (r.toObject = function (e) {
                var t = e.fieldsArray.slice().sort(l.compareFieldsById);
                if (!t.length) return l.codegen()("return {}");
                for (
                  var n = l.codegen(["m", "o"], e.name + "$toObject")("if(!o)")(
                      "o={}"
                    )("var d={}"),
                    i = [],
                    o = [],
                    r = [],
                    a = 0;
                  a < t.length;
                  ++a
                )
                  t[a].partOf ||
                    (t[a].resolve().repeated ? i : t[a].map ? o : r).push(t[a]);
                if (i.length) {
                  for (n("if(o.arrays||o.defaults){"), a = 0; a < i.length; ++a)
                    n("d%s=[]", l.safeProp(i[a].name));
                  n("}");
                }
                if (o.length) {
                  for (
                    n("if(o.objects||o.defaults){"), a = 0;
                    a < o.length;
                    ++a
                  )
                    n("d%s={}", l.safeProp(o[a].name));
                  n("}");
                }
                if (r.length) {
                  for (n("if(o.defaults){"), a = 0; a < r.length; ++a) {
                    var c = r[a],
                      p = l.safeProp(c.name);
                    if (c.resolvedType instanceof s)
                      n(
                        "d%s=o.enums===String?%j:%j",
                        p,
                        c.resolvedType.valuesById[c.typeDefault],
                        c.typeDefault
                      );
                    else if (c.long)
                      n("if(util.Long){")(
                        "var n=new util.Long(%i,%i,%j)",
                        c.typeDefault.low,
                        c.typeDefault.high,
                        c.typeDefault.unsigned
                      )(
                        "d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n",
                        p
                      )("}else")(
                        "d%s=o.longs===String?%j:%i",
                        p,
                        c.typeDefault.toString(),
                        c.typeDefault.toNumber()
                      );
                    else if (c.bytes) {
                      var m =
                        "[" +
                        Array.prototype.slice.call(c.typeDefault).join(",") +
                        "]";
                      n(
                        "if(o.bytes===String)d%s=%j",
                        p,
                        String.fromCharCode.apply(String, c.typeDefault)
                      )("else{")("d%s=%s", p, m)(
                        "if(o.bytes!==Array)d%s=util.newBuffer(d%s)",
                        p,
                        p
                      )("}");
                    } else n("d%s=%j", p, c.typeDefault);
                  }
                  n("}");
                }
                var _ = !1;
                for (a = 0; a < t.length; ++a) {
                  c = t[a];
                  var d = e._fieldsArray.indexOf(c);
                  p = l.safeProp(c.name);
                  c.map
                    ? (_ || ((_ = !0), n("var ks2")),
                      n(
                        "if(m%s&&(ks2=Object.keys(m%s)).length){",
                        p,
                        p
                      )(
                        "d%s={}",
                        p
                      )("for(var j=0;j<ks2.length;++j){"),
                      u(n, c, d, p + "[ks2[j]]")("}"))
                    : c.repeated
                    ? (n("if(m%s&&m%s.length){", p, p)("d%s=[]", p)(
                        "for(var j=0;j<m%s.length;++j){",
                        p
                      ),
                      u(n, c, d, p + "[j]")("}"))
                    : (n("if(m%s!=null&&m.hasOwnProperty(%j)){", p, c.name),
                      u(n, c, d, p),
                      c.partOf &&
                        n("if(o.oneofs)")(
                          "d%s=%j",
                          l.safeProp(c.partOf.name),
                          c.name
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
        loader.define(
          __cjsMetaURL$w,
          function (e, t, n, i, o) {
            var r = e,
              s = t("./message");
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
                if (!(e instanceof this.ctor) && e instanceof s) {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
        loader.define(
          __cjsMetaURL$x,
          function (e, t, n, i, o) {
            n.exports = w;
            var r = t("./namespace");
            ((w.prototype = Object.create(r.prototype)).constructor =
              w).className = "Type";
            var s = t("./enum"),
              l = t("./oneof"),
              a = t("./field"),
              u = t("./mapfield"),
              c = t("./service"),
              p = t("./message"),
              m = t("./reader"),
              _ = t("./writer"),
              d = t("./util"),
              f = t("./encoder"),
              h = t("./decoder"),
              S = t("./verifier"),
              y = t("./converter"),
              g = t("./wrappers");
            function w(e, t) {
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
            function C(e) {
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
                    this._ctor || (this.ctor = w.generateConstructor(this)())
                  );
                },
                set: function (e) {
                  var t = e.prototype;
                  t instanceof p ||
                    (((e.prototype = new p()).constructor = e),
                    d.merge(e.prototype, t)),
                    (e.$type = e.prototype.$type = this),
                    d.merge(e, p, !0),
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
              (w.generateConstructor = function (e) {
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
              (w.fromJSON = function (e, t) {
                var n = new w(e, t.options);
                (n.extensions = t.extensions), (n.reserved = t.reserved);
                for (var i = Object.keys(t.fields), o = 0; o < i.length; ++o)
                  n.add(
                    (void 0 !== t.fields[i[o]].keyType
                      ? u.fromJSON
                      : a.fromJSON)(i[o], t.fields[i[o]])
                  );
                if (t.oneofs)
                  for (i = Object.keys(t.oneofs), o = 0; o < i.length; ++o)
                    n.add(l.fromJSON(i[o], t.oneofs[i[o]]));
                if (t.nested)
                  for (i = Object.keys(t.nested), o = 0; o < i.length; ++o) {
                    var p = t.nested[i[o]];
                    n.add(
                      (void 0 !== p.id
                        ? a.fromJSON
                        : void 0 !== p.fields
                        ? w.fromJSON
                        : void 0 !== p.values
                        ? s.fromJSON
                        : void 0 !== p.methods
                        ? c.fromJSON
                        : r.fromJSON)(i[o], p)
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
              (w.prototype.toJSON = function (e) {
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
              (w.prototype.resolveAll = function () {
                for (var e = this.fieldsArray, t = 0; t < e.length; )
                  e[t++].resolve();
                var n = this.oneofsArray;
                for (t = 0; t < n.length; ) n[t++].resolve();
                return r.prototype.resolveAll.call(this);
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
                if (e instanceof a && void 0 === e.extend) {
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
                    C(this)
                  );
                }
                return e instanceof l
                  ? (this.oneofs || (this.oneofs = {}),
                    (this.oneofs[e.name] = e),
                    e.onAdd(this),
                    C(this))
                  : r.prototype.add.call(this, e);
              }),
              (w.prototype.remove = function (e) {
                if (e instanceof a && void 0 === e.extend) {
                  if (!this.fields || this.fields[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.fields[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    C(this)
                  );
                }
                if (e instanceof l) {
                  if (!this.oneofs || this.oneofs[e.name] !== e)
                    throw Error(e + " is not a member of " + this);
                  return (
                    delete this.oneofs[e.name],
                    (e.parent = null),
                    e.onRemove(this),
                    C(this)
                  );
                }
                return r.prototype.remove.call(this, e);
              }),
              (w.prototype.isReservedId = function (e) {
                return r.isReservedId(this.reserved, e);
              }),
              (w.prototype.isReservedName = function (e) {
                return r.isReservedName(this.reserved, e);
              }),
              (w.prototype.create = function (e) {
                return new this.ctor(e);
              }),
              (w.prototype.setup = function () {
                for (
                  var e = this.fullName, t = [], n = 0;
                  n < this.fieldsArray.length;
                  ++n
                )
                  t.push(this._fieldsArray[n].resolve().resolvedType);
                (this.encode = f(this)({ Writer: _, types: t, util: d })),
                  (this.decode = h(this)({ Reader: m, types: t, util: d })),
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
                  e instanceof m || (e = m.create(e)),
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
        loader.define(
          __cjsMetaURL$y,
          function (e, t, n, i, o) {
            n.exports = _;
            var r = t("./namespace");
            ((_.prototype = Object.create(r.prototype)).constructor =
              _).className = "Root";
            var s,
              l,
              a,
              u = t("./field"),
              c = t("./enum"),
              p = t("./oneof"),
              m = t("./util");
            function _(e) {
              r.call(this, "", e), (this.deferred = []), (this.files = []);
            }
            function d() {}
            (_.fromJSON = function (e, t) {
              return (
                t || (t = new _()),
                e.options && t.setOptions(e.options),
                t.addJSON(e.nested)
              );
            }),
              (_.prototype.resolvePath = m.path.resolve),
              (_.prototype.fetch = m.fetch),
              (_.prototype.load = function e(t, n, i) {
                "function" == typeof n && ((i = n), (n = void 0));
                var o = this;
                if (!i) return m.asPromise(e, o, t, n);
                var r = i === d;
                function s(e, t) {
                  if (i) {
                    var n = i;
                    if (((i = null), r)) throw e;
                    n(e, t);
                  }
                }
                function u(e) {
                  var t = e.lastIndexOf("google/protobuf/");
                  if (t > -1) {
                    var n = e.substring(t);
                    if (n in a) return n;
                  }
                  return null;
                }
                function c(e, t) {
                  try {
                    if (
                      (m.isString(t) &&
                        "{" === t.charAt(0) &&
                        (t = JSON.parse(t)),
                      m.isString(t))
                    ) {
                      l.filename = e;
                      var i,
                        a = l(t, o, n),
                        c = 0;
                      if (a.imports)
                        for (; c < a.imports.length; ++c)
                          (i =
                            u(a.imports[c]) ||
                            o.resolvePath(e, a.imports[c])) && p(i);
                      if (a.weakImports)
                        for (c = 0; c < a.weakImports.length; ++c)
                          (i =
                            u(a.weakImports[c]) ||
                            o.resolvePath(e, a.weakImports[c])) && p(i, !0);
                    } else o.setOptions(t.options).addJSON(t.nested);
                  } catch (e) {
                    s(e);
                  }
                  r || _ || s(null, o);
                }
                function p(e, t) {
                  if (!(o.files.indexOf(e) > -1))
                    if ((o.files.push(e), e in a))
                      r
                        ? c(e, a[e])
                        : (++_,
                          setTimeout(function () {
                            --_, c(e, a[e]);
                          }));
                    else if (r) {
                      var n;
                      try {
                        n = m.fs.readFileSync(e).toString("utf8");
                      } catch (e) {
                        return void (t || s(e));
                      }
                      c(e, n);
                    } else
                      ++_,
                        o.fetch(e, function (n, r) {
                          --_,
                            i && (n ? (t ? _ || s(null, o) : s(n)) : c(e, r));
                        });
                }
                var _ = 0;
                m.isString(t) && (t = [t]);
                for (var f, h = 0; h < t.length; ++h)
                  (f = o.resolvePath("", t[h])) && p(f);
                if (r) return o;
                _ || s(null, o);
              }),
              (_.prototype.loadSync = function (e, t) {
                if (!m.isNode) throw Error("not supported");
                return this.load(e, t, d);
              }),
              (_.prototype.resolveAll = function () {
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
              var n = t.parent.lookup(t.extend);
              if (n) {
                var i = new u(
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
            (_.prototype._handleAdd = function (e) {
              if (e instanceof u)
                void 0 === e.extend ||
                  e.extensionField ||
                  h(0, e) ||
                  this.deferred.push(e);
              else if (e instanceof c)
                f.test(e.name) && (e.parent[e.name] = e.values);
              else if (!(e instanceof p)) {
                if (e instanceof s)
                  for (var t = 0; t < this.deferred.length; )
                    h(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
                for (var n = 0; n < e.nestedArray.length; ++n)
                  this._handleAdd(e._nestedArray[n]);
                f.test(e.name) && (e.parent[e.name] = e);
              }
            }),
              (_.prototype._handleRemove = function (e) {
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
                  f.test(e.name) && delete e.parent[e.name];
                else if (e instanceof r) {
                  for (var n = 0; n < e.nestedArray.length; ++n)
                    this._handleRemove(e._nestedArray[n]);
                  f.test(e.name) && delete e.parent[e.name];
                }
              }),
              (_._configure = function (e, t, n) {
                (s = e), (l = t), (a = n);
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
        loader.define(
          __cjsMetaURL$z,
          function (e, t, n, i, o) {
            var r,
              s,
              l = (n.exports = t("./util/minimal")),
              a = t("./roots");
            (l.codegen = t("@protobufjs/codegen")),
              (l.fetch = t("@protobufjs/fetch")),
              (l.path = t("@protobufjs/path")),
              (l.fs = l.inquire("fs")),
              (l.toArray = function (e) {
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
              (l.toObject = function (e) {
                for (var t = {}, n = 0; n < e.length; ) {
                  var i = e[n++],
                    o = e[n++];
                  void 0 !== o && (t[i] = o);
                }
                return t;
              });
            var u = /\\/g,
              c = /"/g;
            (l.isReserved = function (e) {
              return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(
                e
              );
            }),
              (l.safeProp = function (e) {
                return !/^[$\w_]+$/.test(e) || l.isReserved(e)
                  ? '["' + e.replace(u, "\\\\").replace(c, '\\"') + '"]'
                  : "." + e;
              }),
              (l.ucFirst = function (e) {
                return e.charAt(0).toUpperCase() + e.substring(1);
              });
            var p = /_([a-z])/g;
            (l.camelCase = function (e) {
              return (
                e.substring(0, 1) +
                e.substring(1).replace(p, function (e, t) {
                  return t.toUpperCase();
                })
              );
            }),
              (l.compareFieldsById = function (e, t) {
                return e.id - t.id;
              }),
              (l.decorateType = function (e, n) {
                if (e.$type)
                  return (
                    n &&
                      e.$type.name !== n &&
                      (l.decorateRoot.remove(e.$type),
                      (e.$type.name = n),
                      l.decorateRoot.add(e.$type)),
                    e.$type
                  );
                r || (r = t("./type"));
                var i = new r(n || e.name);
                return (
                  l.decorateRoot.add(i),
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
            var m = 0;
            (l.decorateEnum = function (e) {
              if (e.$type) return e.$type;
              s || (s = t("./enum"));
              var n = new s("Enum" + m++, e);
              return (
                l.decorateRoot.add(n),
                Object.defineProperty(e, "$type", { value: n, enumerable: !1 }),
                n
              );
            }),
              (l.setProperty = function (e, t, n) {
                if ("object" != typeof e)
                  throw TypeError("dst must be an object");
                if (!t) throw TypeError("path must be specified");
                return (function e(t, n, i) {
                  var o = n.shift();
                  if (n.length > 0) t[o] = e(t[o] || {}, n, i);
                  else {
                    var r = t[o];
                    r && (i = [].concat(r).concat(i)), (t[o] = i);
                  }
                  return t;
                })(e, (t = t.split(".")), n);
              }),
              Object.defineProperty(l, "decorateRoot", {
                get: function () {
                  return a.decorated || (a.decorated = new (t("./root"))());
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
        loader.define(
          __cjsMetaURL$A,
          function (e, t, n, i, o) {
            (n.exports = l), (l.className = "ReflectionObject");
            var r,
              s = t("./util");
            function l(e, t) {
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
            Object.defineProperties(l.prototype, {
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
              (l.prototype.toJSON = function () {
                throw Error();
              }),
              (l.prototype.onAdd = function (e) {
                this.parent && this.parent !== e && this.parent.remove(this),
                  (this.parent = e),
                  (this.resolved = !1);
                var t = e.root;
                t instanceof r && t._handleAdd(this);
              }),
              (l.prototype.onRemove = function (e) {
                var t = e.root;
                t instanceof r && t._handleRemove(this),
                  (this.parent = null),
                  (this.resolved = !1);
              }),
              (l.prototype.resolve = function () {
                return (
                  this.resolved ||
                    (this.root instanceof r && (this.resolved = !0)),
                  this
                );
              }),
              (l.prototype.getOption = function (e) {
                if (this.options) return this.options[e];
              }),
              (l.prototype.setOption = function (e, t, n) {
                return (
                  (n && this.options && void 0 !== this.options[e]) ||
                    ((this.options || (this.options = {}))[e] = t),
                  this
                );
              }),
              (l.prototype.setParsedOption = function (e, t, n) {
                this.parsedOptions || (this.parsedOptions = []);
                var i = this.parsedOptions;
                if (n) {
                  var o = i.find(function (t) {
                    return Object.prototype.hasOwnProperty.call(t, e);
                  });
                  if (o) {
                    var r = o[e];
                    s.setProperty(r, n, t);
                  } else ((o = {})[e] = s.setProperty({}, n, t)), i.push(o);
                } else {
                  var l = {};
                  (l[e] = t), i.push(l);
                }
                return this;
              }),
              (l.prototype.setOptions = function (e, t) {
                if (e)
                  for (var n = Object.keys(e), i = 0; i < n.length; ++i)
                    this.setOption(n[i], e[n[i]], t);
                return this;
              }),
              (l.prototype.toString = function () {
                var e = this.constructor.className,
                  t = this.fullName;
                return t.length ? e + " " + t : e;
              }),
              (l._configure = function (e) {
                r = e;
              }),
              n.exports;
          },
          function () {
            return { "./util": __cjsMetaURL$z };
          }
        );
        var __cjsMetaURL$B =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
        loader.define(
          __cjsMetaURL$B,
          function (e, t, n, i, o) {
            n.exports = a;
            var r = t("./object");
            ((a.prototype = Object.create(r.prototype)).constructor =
              a).className = "Enum";
            var s = t("./namespace"),
              l = t("./util");
            function a(e, t, n, i, o) {
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
                for (var s = Object.keys(t), l = 0; l < s.length; ++l)
                  "number" == typeof t[s[l]] &&
                    (this.valuesById[(this.values[s[l]] = t[s[l]])] = s[l]);
            }
            (a.fromJSON = function (e, t) {
              var n = new a(e, t.values, t.options, t.comment, t.comments);
              return (n.reserved = t.reserved), n;
            }),
              (a.prototype.toJSON = function (e) {
                var t = !!e && Boolean(e.keepComments);
                return l.toObject([
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
              (a.prototype.add = function (e, t, n) {
                if (!l.isString(e)) throw TypeError("name must be a string");
                if (!l.isInteger(t)) throw TypeError("id must be an integer");
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
              (a.prototype.remove = function (e) {
                if (!l.isString(e)) throw TypeError("name must be a string");
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
              (a.prototype.isReservedId = function (e) {
                return s.isReservedId(this.reserved, e);
              }),
              (a.prototype.isReservedName = function (e) {
                return s.isReservedName(this.reserved, e);
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
        loader.define(
          __cjsMetaURL$C,
          function (e, t, n, i, o) {
            n.exports = function (e) {
              for (
                var t,
                  n = l.codegen(["m", "w"], e.name + "$encode")("if(!w)")(
                    "w=Writer.create()"
                  ),
                  i = e.fieldsArray.slice().sort(l.compareFieldsById),
                  o = 0;
                o < i.length;
                ++o
              ) {
                var u = i[o].resolve(),
                  c = e._fieldsArray.indexOf(u),
                  p = u.resolvedType instanceof r ? "int32" : u.type,
                  m = s.basic[p];
                (t = "m" + l.safeProp(u.name)),
                  u.map
                    ? (n(
                        "if(%s!=null&&Object.hasOwnProperty.call(m,%j)){",
                        t,
                        u.name
                      )("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)(
                        "w.uint32(%i).fork().uint32(%i).%s(ks[i])",
                        ((u.id << 3) | 2) >>> 0,
                        8 | s.mapKey[u.keyType],
                        u.keyType
                      ),
                      void 0 === m
                        ? n(
                            "types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()",
                            c,
                            t
                          )
                        : n(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | m, p, t),
                      n("}")("}"))
                    : u.repeated
                    ? (n("if(%s!=null&&%s.length){", t, t),
                      u.packed && void 0 !== s.packed[p]
                        ? n("w.uint32(%i).fork()", ((u.id << 3) | 2) >>> 0)(
                            "for(var i=0;i<%s.length;++i)",
                            t
                          )(
                            "w.%s(%s[i])",
                            p,
                            t
                          )("w.ldelim()")
                        : (n("for(var i=0;i<%s.length;++i)", t),
                          void 0 === m
                            ? a(n, u, c, t + "[i]")
                            : n(
                                "w.uint32(%i).%s(%s[i])",
                                ((u.id << 3) | m) >>> 0,
                                p,
                                t
                              )),
                      n("}"))
                    : (u.optional &&
                        n(
                          "if(%s!=null&&Object.hasOwnProperty.call(m,%j))",
                          t,
                          u.name
                        ),
                      void 0 === m
                        ? a(n, u, c, t)
                        : n(
                            "w.uint32(%i).%s(%s)",
                            ((u.id << 3) | m) >>> 0,
                            p,
                            t
                          ));
              }
              return n("return w");
            };
            var r = t("./enum"),
              s = t("./types"),
              l = t("./util");
            function a(e, t, n, i) {
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
        loader.define(
          __cjsMetaURL$E,
          function (e, t, n, i, o) {
            n.exports = f;
            var r = /[\s{}=;:[\],'"()<>]/g,
              s = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g,
              l = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g,
              a = /^ *[*/]+ */,
              u = /^\s*\*?\/*/,
              c = /\n/g,
              p = /\s/,
              m = /\\(.?)/g,
              _ = { 0: "\0", r: "\r", n: "\n", t: "\t" };
            function d(e) {
              return e.replace(m, function (e, t) {
                switch (t) {
                  case "\\":
                  case "":
                    return t;
                  default:
                    return _[t] || "";
                }
              });
            }
            function f(e, t) {
              e = e.toString();
              var n = 0,
                i = e.length,
                o = 1,
                m = null,
                _ = null,
                f = 0,
                h = !1,
                S = !1,
                y = [],
                g = null;
              function w(e) {
                return Error("illegal " + e + " (line " + o + ")");
              }
              function C(t) {
                return e.charAt(t);
              }
              function R(n, i, r) {
                (m = e.charAt(n++)), (f = o), (h = !1), (S = r);
                var s,
                  l = n - (t ? 2 : 3);
                do {
                  if (--l < 0 || "\n" === (s = e.charAt(l))) {
                    h = !0;
                    break;
                  }
                } while (" " === s || "\t" === s);
                for (
                  var p = e.substring(n, i).split(c), d = 0;
                  d < p.length;
                  ++d
                )
                  p[d] = p[d].replace(t ? u : a, "").trim();
                _ = p.join("\n").trim();
              }
              function v(t) {
                var n = b(t),
                  i = e.substring(t, n);
                return /^\s*\/{1,2}/.test(i);
              }
              function b(e) {
                for (var t = e; t < i && "\n" !== C(t); ) t++;
                return t;
              }
              function A() {
                if (y.length > 0) return y.shift();
                if (g)
                  return (function () {
                    var t = "'" === g ? l : s;
                    t.lastIndex = n - 1;
                    var i = t.exec(e);
                    if (!i) throw w("string");
                    return (n = t.lastIndex), T(g), (g = null), d(i[1]);
                  })();
                var a,
                  u,
                  c,
                  m,
                  _,
                  f = 0 === n;
                do {
                  if (n === i) return null;
                  for (a = !1; p.test((c = C(n))); )
                    if (("\n" === c && ((f = !0), ++o), ++n === i)) return null;
                  if ("/" === C(n)) {
                    if (++n === i) throw w("comment");
                    if ("/" === C(n))
                      if (t) {
                        if (((m = n), (_ = !1), v(n))) {
                          _ = !0;
                          do {
                            if ((n = b(n)) === i) break;
                            n++;
                          } while (v(n));
                        } else n = Math.min(i, b(n) + 1);
                        _ && R(m, n, f), o++, (a = !0);
                      } else {
                        for (_ = "/" === C((m = n + 1)); "\n" !== C(++n); )
                          if (n === i) return null;
                        ++n, _ && R(m, n - 1, f), ++o, (a = !0);
                      }
                    else {
                      if ("*" !== (c = C(n))) return "/";
                      (m = n + 1), (_ = t || "*" === C(m));
                      do {
                        if (("\n" === c && ++o, ++n === i)) throw w("comment");
                        (u = c), (c = C(n));
                      } while ("*" !== u || "/" !== c);
                      ++n, _ && R(m, n - 2, f), (a = !0);
                    }
                  }
                } while (a);
                var h = n;
                if (((r.lastIndex = 0), !r.test(C(h++))))
                  for (; h < i && !r.test(C(h)); ) ++h;
                var S = e.substring(n, (n = h));
                return ('"' !== S && "'" !== S) || (g = S), S;
              }
              function T(e) {
                y.push(e);
              }
              function W() {
                if (!y.length) {
                  var e = A();
                  if (null === e) return null;
                  T(e);
                }
                return y[0];
              }
              return Object.defineProperty(
                {
                  next: A,
                  peek: W,
                  push: T,
                  skip: function (e, t) {
                    var n = W();
                    if (n === e) return A(), !0;
                    if (!t) throw w("token '" + n + "', '" + e + "' expected");
                    return !1;
                  },
                  cmnt: function (e) {
                    var n = null;
                    return (
                      void 0 === e
                        ? f === o - 1 &&
                          (t || "*" === m || h) &&
                          (n = S ? _ : null)
                        : (f < e && W(),
                          f !== e ||
                            h ||
                            (!t && "/" !== m) ||
                            (n = S ? null : _)),
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
            (f.unescape = d), n.exports;
          },
          {}
        );
        var __cjsMetaURL$F =
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
        loader.define(
          __cjsMetaURL$F,
          function (e, t, n, i, o) {
            (n.exports = T),
              (T.filename = null),
              (T.defaults = { keepCase: !1 });
            var r = t("./tokenize"),
              s = t("./root"),
              l = t("./type"),
              a = t("./field"),
              u = t("./mapfield"),
              c = t("./oneof"),
              p = t("./enum"),
              m = t("./service"),
              _ = t("./method"),
              d = t("./types"),
              f = t("./util"),
              h = /^[1-9][0-9]*$/,
              S = /^-?[1-9][0-9]*$/,
              y = /^0[x][0-9a-fA-F]+$/,
              g = /^-?0[x][0-9a-fA-F]+$/,
              w = /^0[0-7]+$/,
              C = /^-?0[0-7]+$/,
              R = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/,
              v = /^[a-zA-Z_][a-zA-Z_0-9]*$/,
              b =
                /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/,
              A = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
            function T(e, t, n) {
              t instanceof s || ((n = t), (t = new s())), n || (n = T.defaults);
              var i,
                o,
                W,
                M,
                $,
                N = n.preferTrailingComment || !1,
                L = r(e, n.alternateCommentMode || !1),
                E = L.next,
                D = L.push,
                I = L.peek,
                F = L.skip,
                P = L.cmnt,
                O = !0,
                k = !1,
                x = t,
                V = n.keepCase
                  ? function (e) {
                      return e;
                    }
                  : f.camelCase;
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
                      L.line +
                      ")"
                  )
                );
              }
              function G() {
                var e,
                  t = [];
                do {
                  if ('"' !== (e = E()) && "'" !== e) throw j(e);
                  t.push(E()), F(e), (e = I());
                } while ('"' === e || "'" === e);
                return t.join("");
              }
              function B(e) {
                var t = E();
                switch (t) {
                  case "'":
                  case '"':
                    return D(t), G();
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
                    if (y.test(e)) return n * parseInt(e, 16);
                    if (w.test(e)) return n * parseInt(e, 8);
                    if (R.test(e)) return n * parseFloat(e);
                    throw j(e, "number", t);
                  })(t, !0);
                } catch (n) {
                  if (e && b.test(t)) return t;
                  throw j(t, "value");
                }
              }
              function U(e, t) {
                var n, i;
                do {
                  !t || ('"' !== (n = I()) && "'" !== n)
                    ? e.push([(i = z(E())), F("to", !0) ? z(E()) : i])
                    : e.push(G());
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
                if (!t && "-" === e.charAt(0)) throw j(e, "id");
                if (S.test(e)) return parseInt(e, 10);
                if (g.test(e)) return parseInt(e, 16);
                if (C.test(e)) return parseInt(e, 8);
                throw j(e, "id");
              }
              function H() {
                if (void 0 !== i) throw j("package");
                if (((i = E()), !b.test(i))) throw j(i, "name");
                (x = x.define(i)), F(";");
              }
              function q() {
                var e,
                  t = I();
                switch (t) {
                  case "weak":
                    (e = W || (W = [])), E();
                    break;
                  case "public":
                    E();
                  default:
                    e = o || (o = []);
                }
                (t = G()), F(";"), e.push(t);
              }
              function Y() {
                if (
                  (F("="), (M = G()), !(k = "proto3" === M) && "proto2" !== M)
                )
                  throw j(M, "syntax");
                F(";");
              }
              function J(e, t) {
                switch (t) {
                  case "option":
                    return Z(e, t), F(";"), !0;
                  case "message":
                    return (
                      (function (e, t) {
                        if (!v.test((t = E()))) throw j(t, "type name");
                        var n = new l(t);
                        K(n, function (e) {
                          if (!J(n, e))
                            switch (e) {
                              case "map":
                                !(function (e) {
                                  F("<");
                                  var t = E();
                                  if (void 0 === d.mapKey[t])
                                    throw j(t, "type");
                                  F(",");
                                  var n = E();
                                  if (!b.test(n)) throw j(n, "type");
                                  F(">");
                                  var i = E();
                                  if (!v.test(i)) throw j(i, "name");
                                  F("=");
                                  var o = new u(V(i), z(E()), t, n);
                                  K(
                                    o,
                                    function (e) {
                                      if ("option" !== e) throw j(e);
                                      Z(o, e), F(";");
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
                                Q(n, e);
                                break;
                              case "optional":
                                Q(n, k ? "proto3_optional" : "optional");
                                break;
                              case "oneof":
                                !(function (e, t) {
                                  if (!v.test((t = E()))) throw j(t, "name");
                                  var n = new c(V(t));
                                  K(n, function (e) {
                                    "option" === e
                                      ? (Z(n, e), F(";"))
                                      : (D(e), Q(n, "optional"));
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
                                if (!k || !b.test(e)) throw j(e);
                                D(e), Q(n, "optional");
                            }
                        }),
                          e.add(n);
                      })(e, t),
                      !0
                    );
                  case "enum":
                    return (
                      (function (e, t) {
                        if (!v.test((t = E()))) throw j(t, "name");
                        var n = new p(t);
                        K(n, function (e) {
                          switch (e) {
                            case "option":
                              Z(n, e), F(";");
                              break;
                            case "reserved":
                              U(n.reserved || (n.reserved = []), !0);
                              break;
                            default:
                              !(function (e, t) {
                                if (!v.test(t)) throw j(t, "name");
                                F("=");
                                var n = z(E(), !0),
                                  i = {};
                                K(
                                  i,
                                  function (e) {
                                    if ("option" !== e) throw j(e);
                                    Z(i, e), F(";");
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
                        if (!v.test((t = E()))) throw j(t, "service name");
                        var n = new m(t);
                        K(n, function (e) {
                          if (!J(n, e)) {
                            if ("rpc" !== e) throw j(e);
                            !(function (e, t) {
                              var n = P(),
                                i = t;
                              if (!v.test((t = E()))) throw j(t, "name");
                              var o,
                                r,
                                s,
                                l,
                                a = t;
                              F("("), F("stream", !0) && (r = !0);
                              if (!b.test((t = E()))) throw j(t);
                              (o = t),
                                F(")"),
                                F("returns"),
                                F("("),
                                F("stream", !0) && (l = !0);
                              if (!b.test((t = E()))) throw j(t);
                              (s = t), F(")");
                              var u = new _(a, i, o, s, r, l);
                              (u.comment = n),
                                K(u, function (e) {
                                  if ("option" !== e) throw j(e);
                                  Z(u, e), F(";");
                                }),
                                e.add(u);
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
                        if (!b.test((t = E()))) throw j(t, "reference");
                        var n = t;
                        K(null, function (t) {
                          switch (t) {
                            case "required":
                            case "repeated":
                              Q(e, t, n);
                              break;
                            case "optional":
                              Q(e, k ? "proto3_optional" : "optional", n);
                              break;
                            default:
                              if (!k || !b.test(t)) throw j(t);
                              D(t), Q(e, "optional", n);
                          }
                        });
                      })(e, t),
                      !0
                    );
                }
                return !1;
              }
              function K(e, t, n) {
                var i = L.line;
                if (
                  (e &&
                    ("string" != typeof e.comment && (e.comment = P()),
                    (e.filename = T.filename)),
                  F("{", !0))
                ) {
                  for (var o; "}" !== (o = E()); ) t(o);
                  F(";", !0);
                } else
                  n && n(),
                    F(";"),
                    e &&
                      ("string" != typeof e.comment || N) &&
                      (e.comment = P(i) || e.comment);
              }
              function Q(e, t, n) {
                var i = E();
                if ("group" !== i) {
                  if (!b.test(i)) throw j(i, "type");
                  var o = E();
                  if (!v.test(o)) throw j(o, "name");
                  (o = V(o)), F("=");
                  var r = new a(o, z(E()), i, t, n);
                  if (
                    (K(
                      r,
                      function (e) {
                        if ("option" !== e) throw j(e);
                        Z(r, e), F(";");
                      },
                      function () {
                        te(r);
                      }
                    ),
                    "proto3_optional" === t)
                  ) {
                    var s = new c("_" + o);
                    r.setOption("proto3_optional", !0), s.add(r), e.add(s);
                  } else e.add(r);
                  k ||
                    !r.repeated ||
                    (void 0 === d.packed[i] && void 0 !== d.basic[i]) ||
                    r.setOption("packed", !1, !0);
                } else
                  !(function (e, t) {
                    var n = E();
                    if (!v.test(n)) throw j(n, "name");
                    var i = f.lcFirst(n);
                    n === i && (n = f.ucFirst(n));
                    F("=");
                    var o = z(E()),
                      r = new l(n);
                    r.group = !0;
                    var s = new a(i, o, n, t);
                    (s.filename = T.filename),
                      K(r, function (e) {
                        switch (e) {
                          case "option":
                            Z(r, e), F(";");
                            break;
                          case "required":
                          case "repeated":
                            Q(r, e);
                            break;
                          case "optional":
                            Q(r, k ? "proto3_optional" : "optional");
                            break;
                          default:
                            throw j(e);
                        }
                      }),
                      e.add(r).add(s);
                  })(e, t);
              }
              function Z(e, t) {
                var n = F("(", !0);
                if (!b.test((t = E()))) throw j(t, "name");
                var i,
                  o = t,
                  r = o;
                n &&
                  (F(")"),
                  (r = o = "(" + o + ")"),
                  (t = I()),
                  A.test(t) && ((i = t.substr(1)), (o += t), E())),
                  F("="),
                  (function (e, t, n, i) {
                    e.setParsedOption && e.setParsedOption(t, n, i);
                  })(e, r, X(e, o), i);
              }
              function X(e, t) {
                if (F("{", !0)) {
                  for (var n = {}; !F("}", !0); ) {
                    if (!v.test(($ = E()))) throw j($, "name");
                    var i,
                      o = $;
                    "{" === I()
                      ? (i = X(e, t + "." + $))
                      : (F(":"),
                        "{" === I()
                          ? (i = X(e, t + "." + $))
                          : ((i = B(!0)), ee(e, t + "." + $, i)));
                    var r = n[o];
                    r && (i = [].concat(r).concat(i)), (n[o] = i), F(",", !0);
                  }
                  return n;
                }
                var s = B(!0);
                return ee(e, t, s), s;
              }
              function ee(e, t, n) {
                e.setOption && e.setOption(t, n);
              }
              function te(e) {
                if (F("[", !0)) {
                  do {
                    Z(e, "option");
                  } while (F(",", !0));
                  F("]");
                }
                return e;
              }
              for (; null !== ($ = E()); )
                switch ($) {
                  case "package":
                    if (!O) throw j($);
                    H();
                    break;
                  case "import":
                    if (!O) throw j($);
                    q();
                    break;
                  case "syntax":
                    if (!O) throw j($);
                    Y();
                    break;
                  case "option":
                    Z(x, $), F(";");
                    break;
                  default:
                    if (J(x, $)) {
                      O = !1;
                      continue;
                    }
                    throw j($);
                }
              return (
                (T.filename = null),
                { package: i, imports: o, weakImports: W, syntax: M, root: t }
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
        loader.define(
          __cjsMetaURL$G,
          function (e, t, n, i, o) {
            n.exports = l;
            var r,
              s = /\/|\./;
            function l(e, t) {
              s.test(e) ||
                ((e = "google/protobuf/" + e + ".proto"),
                (t = {
                  nested: { google: { nested: { protobuf: { nested: t } } } },
                })),
                (l[e] = t);
            }
            l("any", {
              Any: {
                fields: {
                  type_url: { type: "string", id: 1 },
                  value: { type: "bytes", id: 2 },
                },
              },
            }),
              l("duration", {
                Duration: (r = {
                  fields: {
                    seconds: { type: "int64", id: 1 },
                    nanos: { type: "int32", id: 2 },
                  },
                }),
              }),
              l("timestamp", { Timestamp: r }),
              l("empty", { Empty: { fields: {} } }),
              l("struct", {
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
              l("wrappers", {
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
              l("field_mask", {
                FieldMask: {
                  fields: {
                    paths: { rule: "repeated", type: "string", id: 1 },
                  },
                },
              }),
              (l.get = function (e) {
                return l[e] || null;
              }),
              n.exports;
          },
          {}
        );
        var __cjsMetaURL$H =
            "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/src/index.js",
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
          "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/index.js";
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
              "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$I);
        var __cjsMetaURL$J =
            "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/node_modules/protobufjs/minimal.js",
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
            "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/assets/game/Script/Proto/mw3Proto.js",
          _dec$e,
          _class$f,
          _class2$a,
          _descriptor$a;
        loader.define(
          __cjsMetaURL$K,
          function (e, t, n, i, o) {
            var r,
              s = t("protobufjs/minimal"),
              l = s.Reader,
              a = s.Writer,
              u = s.util,
              c = s.roots.default || (s.roots.default = {});
            (c.mw3Proto =
              (((r = {}).Column = (function () {
                function e(e) {
                  if (((this.Col = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Col = u.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()), null != e.Col && e.Col.length)
                    ) {
                      t.uint32(10).fork();
                      for (var n = 0; n < e.Col.length; ++n) t.int32(e.Col[n]);
                      t.ldelim();
                    }
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.Column();
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
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof l || (e = new l(e)),
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
                    if (e instanceof c.mw3Proto.Column) return e;
                    var t = new c.mw3Proto.Column();
                    if (e.Col) {
                      if (!Array.isArray(e.Col))
                        throw TypeError(".mw3Proto.Column.Col: array expected");
                      t.Col = [];
                      for (var n = 0; n < e.Col.length; ++n)
                        t.Col[n] = 0 | e.Col[n];
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
                        n.Col[i] = e.Col[i];
                    }
                    return n;
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
                      e + "/mw3Proto.Column"
                    );
                  }),
                  e
                );
              })()),
              (r.Grid = (function () {
                function e(e) {
                  if (e)
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Col = 0),
                  (e.prototype.Row = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    return (
                      t || (t = a.create()),
                      null != e.Col &&
                        Object.hasOwnProperty.call(e, "Col") &&
                        t.uint32(8).int32(e.Col),
                      null != e.Row &&
                        Object.hasOwnProperty.call(e, "Row") &&
                        t.uint32(16).int32(e.Row),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.Grid();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          i.Col = e.int32();
                          break;
                        case 2:
                          i.Row = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof l || (e = new l(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    return "object" != typeof e || null === e
                      ? "object expected"
                      : null != e.Col &&
                        e.hasOwnProperty("Col") &&
                        !u.isInteger(e.Col)
                      ? "Col: integer expected"
                      : null != e.Row &&
                        e.hasOwnProperty("Row") &&
                        !u.isInteger(e.Row)
                      ? "Row: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.mw3Proto.Grid) return e;
                    var t = new c.mw3Proto.Grid();
                    return (
                      null != e.Col && (t.Col = 0 | e.Col),
                      null != e.Row && (t.Row = 0 | e.Row),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    return (
                      t.defaults && ((n.Col = 0), (n.Row = 0)),
                      null != e.Col &&
                        e.hasOwnProperty("Col") &&
                        (n.Col = e.Col),
                      null != e.Row &&
                        e.hasOwnProperty("Row") &&
                        (n.Row = e.Row),
                      n
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
                      e + "/mw3Proto.Grid"
                    );
                  }),
                  e
                );
              })()),
              (r.AwardData = (function () {
                function e(e) {
                  if (((this.GridVec = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.Symbol = 0),
                  (e.prototype.Count = 0),
                  (e.prototype.LineNum = 0),
                  (e.prototype.Win = 0),
                  (e.prototype.GridVec = u.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.Symbol &&
                        Object.hasOwnProperty.call(e, "Symbol") &&
                        t.uint32(8).int32(e.Symbol),
                      null != e.Count &&
                        Object.hasOwnProperty.call(e, "Count") &&
                        t.uint32(16).int32(e.Count),
                      null != e.LineNum &&
                        Object.hasOwnProperty.call(e, "LineNum") &&
                        t.uint32(24).int32(e.LineNum),
                      null != e.Win &&
                        Object.hasOwnProperty.call(e, "Win") &&
                        t.uint32(33).double(e.Win),
                      null != e.GridVec && e.GridVec.length)
                    )
                      for (var n = 0; n < e.GridVec.length; ++n)
                        c.mw3Proto.Grid.encode(
                          e.GridVec[n],
                          t.uint32(42).fork()
                        ).ldelim();
                    return t;
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.AwardData();
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
                          i.LineNum = e.int32();
                          break;
                        case 4:
                          i.Win = e.double();
                          break;
                        case 5:
                          (i.GridVec && i.GridVec.length) || (i.GridVec = []),
                            i.GridVec.push(
                              c.mw3Proto.Grid.decode(e, e.uint32())
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
                      e instanceof l || (e = new l(e)),
                      this.decode(e, e.uint32())
                    );
                  }),
                  (e.verify = function (e) {
                    if ("object" != typeof e || null === e)
                      return "object expected";
                    if (
                      null != e.Symbol &&
                      e.hasOwnProperty("Symbol") &&
                      !u.isInteger(e.Symbol)
                    )
                      return "Symbol: integer expected";
                    if (
                      null != e.Count &&
                      e.hasOwnProperty("Count") &&
                      !u.isInteger(e.Count)
                    )
                      return "Count: integer expected";
                    if (
                      null != e.LineNum &&
                      e.hasOwnProperty("LineNum") &&
                      !u.isInteger(e.LineNum)
                    )
                      return "LineNum: integer expected";
                    if (
                      null != e.Win &&
                      e.hasOwnProperty("Win") &&
                      "number" != typeof e.Win
                    )
                      return "Win: number expected";
                    if (null != e.GridVec && e.hasOwnProperty("GridVec")) {
                      if (!Array.isArray(e.GridVec))
                        return "GridVec: array expected";
                      for (var t = 0; t < e.GridVec.length; ++t) {
                        var n = c.mw3Proto.Grid.verify(e.GridVec[t]);
                        if (n) return "GridVec." + n;
                      }
                    }
                    return null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.mw3Proto.AwardData) return e;
                    var t = new c.mw3Proto.AwardData();
                    if (
                      (null != e.Symbol && (t.Symbol = 0 | e.Symbol),
                      null != e.Count && (t.Count = 0 | e.Count),
                      null != e.LineNum && (t.LineNum = 0 | e.LineNum),
                      null != e.Win && (t.Win = Number(e.Win)),
                      e.GridVec)
                    ) {
                      if (!Array.isArray(e.GridVec))
                        throw TypeError(
                          ".mw3Proto.AwardData.GridVec: array expected"
                        );
                      t.GridVec = [];
                      for (var n = 0; n < e.GridVec.length; ++n) {
                        if ("object" != typeof e.GridVec[n])
                          throw TypeError(
                            ".mw3Proto.AwardData.GridVec: object expected"
                          );
                        t.GridVec[n] = c.mw3Proto.Grid.fromObject(e.GridVec[n]);
                      }
                    }
                    return t;
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) && (n.GridVec = []),
                      t.defaults &&
                        ((n.Symbol = 0),
                        (n.Count = 0),
                        (n.LineNum = 0),
                        (n.Win = 0)),
                      null != e.Symbol &&
                        e.hasOwnProperty("Symbol") &&
                        (n.Symbol = e.Symbol),
                      null != e.Count &&
                        e.hasOwnProperty("Count") &&
                        (n.Count = e.Count),
                      null != e.LineNum &&
                        e.hasOwnProperty("LineNum") &&
                        (n.LineNum = e.LineNum),
                      null != e.Win &&
                        e.hasOwnProperty("Win") &&
                        (n.Win =
                          t.json && !isFinite(e.Win) ? String(e.Win) : e.Win),
                      e.GridVec && e.GridVec.length)
                    ) {
                      n.GridVec = [];
                      for (var i = 0; i < e.GridVec.length; ++i)
                        n.GridVec[i] = c.mw3Proto.Grid.toObject(
                          e.GridVec[i],
                          t
                        );
                    }
                    return n;
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
                      e + "/mw3Proto.AwardData"
                    );
                  }),
                  e
                );
              })()),
              (r.RoundInfo = (function () {
                function e(e) {
                  if (((this.PlateSymbol = []), (this.AwardDataVec = []), e))
                    for (var t = Object.keys(e), n = 0; n < t.length; ++n)
                      null != e[t[n]] && (this[t[n]] = e[t[n]]);
                }
                return (
                  (e.prototype.PlateSymbol = u.emptyArray),
                  (e.prototype.AwardDataVec = u.emptyArray),
                  (e.prototype.RoundWin = 0),
                  (e.prototype.WaysWin = 0),
                  (e.prototype.LampWin = 0),
                  (e.prototype.AwardTypeFlag = 0),
                  (e.prototype.FreeRemainRound = 0),
                  (e.prototype.MysteryTarget = 0),
                  (e.prototype.MaxFlag = !1),
                  (e.prototype.ScatterCount = 0),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.PlateSymbol && e.PlateSymbol.length)
                    )
                      for (var n = 0; n < e.PlateSymbol.length; ++n)
                        c.mw3Proto.Column.encode(
                          e.PlateSymbol[n],
                          t.uint32(10).fork()
                        ).ldelim();
                    if (null != e.AwardDataVec && e.AwardDataVec.length)
                      for (n = 0; n < e.AwardDataVec.length; ++n)
                        c.mw3Proto.AwardData.encode(
                          e.AwardDataVec[n],
                          t.uint32(18).fork()
                        ).ldelim();
                    return (
                      null != e.RoundWin &&
                        Object.hasOwnProperty.call(e, "RoundWin") &&
                        t.uint32(25).double(e.RoundWin),
                      null != e.WaysWin &&
                        Object.hasOwnProperty.call(e, "WaysWin") &&
                        t.uint32(33).double(e.WaysWin),
                      null != e.LampWin &&
                        Object.hasOwnProperty.call(e, "LampWin") &&
                        t.uint32(41).double(e.LampWin),
                      null != e.AwardTypeFlag &&
                        Object.hasOwnProperty.call(e, "AwardTypeFlag") &&
                        t.uint32(48).int32(e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        Object.hasOwnProperty.call(e, "FreeRemainRound") &&
                        t.uint32(56).int32(e.FreeRemainRound),
                      null != e.MysteryTarget &&
                        Object.hasOwnProperty.call(e, "MysteryTarget") &&
                        t.uint32(64).int32(e.MysteryTarget),
                      null != e.MaxFlag &&
                        Object.hasOwnProperty.call(e, "MaxFlag") &&
                        t.uint32(72).bool(e.MaxFlag),
                      null != e.ScatterCount &&
                        Object.hasOwnProperty.call(e, "ScatterCount") &&
                        t.uint32(80).int32(e.ScatterCount),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.RoundInfo();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.PlateSymbol && i.PlateSymbol.length) ||
                            (i.PlateSymbol = []),
                            i.PlateSymbol.push(
                              c.mw3Proto.Column.decode(e, e.uint32())
                            );
                          break;
                        case 2:
                          (i.AwardDataVec && i.AwardDataVec.length) ||
                            (i.AwardDataVec = []),
                            i.AwardDataVec.push(
                              c.mw3Proto.AwardData.decode(e, e.uint32())
                            );
                          break;
                        case 3:
                          i.RoundWin = e.double();
                          break;
                        case 4:
                          i.WaysWin = e.double();
                          break;
                        case 5:
                          i.LampWin = e.double();
                          break;
                        case 6:
                          i.AwardTypeFlag = e.int32();
                          break;
                        case 7:
                          i.FreeRemainRound = e.int32();
                          break;
                        case 8:
                          i.MysteryTarget = e.int32();
                          break;
                        case 9:
                          i.MaxFlag = e.bool();
                          break;
                        case 10:
                          i.ScatterCount = e.int32();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof l || (e = new l(e)),
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
                        if ((n = c.mw3Proto.Column.verify(e.PlateSymbol[t])))
                          return "PlateSymbol." + n;
                    }
                    if (
                      null != e.AwardDataVec &&
                      e.hasOwnProperty("AwardDataVec")
                    ) {
                      if (!Array.isArray(e.AwardDataVec))
                        return "AwardDataVec: array expected";
                      for (t = 0; t < e.AwardDataVec.length; ++t) {
                        var n;
                        if (
                          (n = c.mw3Proto.AwardData.verify(e.AwardDataVec[t]))
                        )
                          return "AwardDataVec." + n;
                      }
                    }
                    return null != e.RoundWin &&
                      e.hasOwnProperty("RoundWin") &&
                      "number" != typeof e.RoundWin
                      ? "RoundWin: number expected"
                      : null != e.WaysWin &&
                        e.hasOwnProperty("WaysWin") &&
                        "number" != typeof e.WaysWin
                      ? "WaysWin: number expected"
                      : null != e.LampWin &&
                        e.hasOwnProperty("LampWin") &&
                        "number" != typeof e.LampWin
                      ? "LampWin: number expected"
                      : null != e.AwardTypeFlag &&
                        e.hasOwnProperty("AwardTypeFlag") &&
                        !u.isInteger(e.AwardTypeFlag)
                      ? "AwardTypeFlag: integer expected"
                      : null != e.FreeRemainRound &&
                        e.hasOwnProperty("FreeRemainRound") &&
                        !u.isInteger(e.FreeRemainRound)
                      ? "FreeRemainRound: integer expected"
                      : null != e.MysteryTarget &&
                        e.hasOwnProperty("MysteryTarget") &&
                        !u.isInteger(e.MysteryTarget)
                      ? "MysteryTarget: integer expected"
                      : null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        "boolean" != typeof e.MaxFlag
                      ? "MaxFlag: boolean expected"
                      : null != e.ScatterCount &&
                        e.hasOwnProperty("ScatterCount") &&
                        !u.isInteger(e.ScatterCount)
                      ? "ScatterCount: integer expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.mw3Proto.RoundInfo) return e;
                    var t = new c.mw3Proto.RoundInfo();
                    if (e.PlateSymbol) {
                      if (!Array.isArray(e.PlateSymbol))
                        throw TypeError(
                          ".mw3Proto.RoundInfo.PlateSymbol: array expected"
                        );
                      t.PlateSymbol = [];
                      for (var n = 0; n < e.PlateSymbol.length; ++n) {
                        if ("object" != typeof e.PlateSymbol[n])
                          throw TypeError(
                            ".mw3Proto.RoundInfo.PlateSymbol: object expected"
                          );
                        t.PlateSymbol[n] = c.mw3Proto.Column.fromObject(
                          e.PlateSymbol[n]
                        );
                      }
                    }
                    if (e.AwardDataVec) {
                      if (!Array.isArray(e.AwardDataVec))
                        throw TypeError(
                          ".mw3Proto.RoundInfo.AwardDataVec: array expected"
                        );
                      for (
                        t.AwardDataVec = [], n = 0;
                        n < e.AwardDataVec.length;
                        ++n
                      ) {
                        if ("object" != typeof e.AwardDataVec[n])
                          throw TypeError(
                            ".mw3Proto.RoundInfo.AwardDataVec: object expected"
                          );
                        t.AwardDataVec[n] = c.mw3Proto.AwardData.fromObject(
                          e.AwardDataVec[n]
                        );
                      }
                    }
                    return (
                      null != e.RoundWin && (t.RoundWin = Number(e.RoundWin)),
                      null != e.WaysWin && (t.WaysWin = Number(e.WaysWin)),
                      null != e.LampWin && (t.LampWin = Number(e.LampWin)),
                      null != e.AwardTypeFlag &&
                        (t.AwardTypeFlag = 0 | e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        (t.FreeRemainRound = 0 | e.FreeRemainRound),
                      null != e.MysteryTarget &&
                        (t.MysteryTarget = 0 | e.MysteryTarget),
                      null != e.MaxFlag && (t.MaxFlag = Boolean(e.MaxFlag)),
                      null != e.ScatterCount &&
                        (t.ScatterCount = 0 | e.ScatterCount),
                      t
                    );
                  }),
                  (e.toObject = function (e, t) {
                    t || (t = {});
                    var n = {};
                    if (
                      ((t.arrays || t.defaults) &&
                        ((n.PlateSymbol = []), (n.AwardDataVec = [])),
                      t.defaults &&
                        ((n.RoundWin = 0),
                        (n.WaysWin = 0),
                        (n.LampWin = 0),
                        (n.AwardTypeFlag = 0),
                        (n.FreeRemainRound = 0),
                        (n.MysteryTarget = 0),
                        (n.MaxFlag = !1),
                        (n.ScatterCount = 0)),
                      e.PlateSymbol && e.PlateSymbol.length)
                    ) {
                      n.PlateSymbol = [];
                      for (var i = 0; i < e.PlateSymbol.length; ++i)
                        n.PlateSymbol[i] = c.mw3Proto.Column.toObject(
                          e.PlateSymbol[i],
                          t
                        );
                    }
                    if (e.AwardDataVec && e.AwardDataVec.length)
                      for (
                        n.AwardDataVec = [], i = 0;
                        i < e.AwardDataVec.length;
                        ++i
                      )
                        n.AwardDataVec[i] = c.mw3Proto.AwardData.toObject(
                          e.AwardDataVec[i],
                          t
                        );
                    return (
                      null != e.RoundWin &&
                        e.hasOwnProperty("RoundWin") &&
                        (n.RoundWin =
                          t.json && !isFinite(e.RoundWin)
                            ? String(e.RoundWin)
                            : e.RoundWin),
                      null != e.WaysWin &&
                        e.hasOwnProperty("WaysWin") &&
                        (n.WaysWin =
                          t.json && !isFinite(e.WaysWin)
                            ? String(e.WaysWin)
                            : e.WaysWin),
                      null != e.LampWin &&
                        e.hasOwnProperty("LampWin") &&
                        (n.LampWin =
                          t.json && !isFinite(e.LampWin)
                            ? String(e.LampWin)
                            : e.LampWin),
                      null != e.AwardTypeFlag &&
                        e.hasOwnProperty("AwardTypeFlag") &&
                        (n.AwardTypeFlag = e.AwardTypeFlag),
                      null != e.FreeRemainRound &&
                        e.hasOwnProperty("FreeRemainRound") &&
                        (n.FreeRemainRound = e.FreeRemainRound),
                      null != e.MysteryTarget &&
                        e.hasOwnProperty("MysteryTarget") &&
                        (n.MysteryTarget = e.MysteryTarget),
                      null != e.MaxFlag &&
                        e.hasOwnProperty("MaxFlag") &&
                        (n.MaxFlag = e.MaxFlag),
                      null != e.ScatterCount &&
                        e.hasOwnProperty("ScatterCount") &&
                        (n.ScatterCount = e.ScatterCount),
                      n
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
                      e + "/mw3Proto.RoundInfo"
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
                  (e.prototype.RoundQueue = u.emptyArray),
                  (e.prototype.FreeTotalWin = 0),
                  (e.prototype.TotalWin = 0),
                  (e.prototype.ShowIndex = ""),
                  (e.prototype.NowMoney = 0),
                  (e.prototype.AckType = 0),
                  (e.prototype.RTP = 0),
                  (e.prototype.Extra = !1),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
                      null != e.RoundQueue && e.RoundQueue.length)
                    )
                      for (var n = 0; n < e.RoundQueue.length; ++n)
                        c.mw3Proto.RoundInfo.encode(
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
                      null != e.RTP &&
                        Object.hasOwnProperty.call(e, "RTP") &&
                        t.uint32(57).double(e.RTP),
                      null != e.Extra &&
                        Object.hasOwnProperty.call(e, "Extra") &&
                        t.uint32(64).bool(e.Extra),
                      t
                    );
                  }),
                  (e.encodeDelimited = function (e, t) {
                    return this.encode(e, t).ldelim();
                  }),
                  (e.decode = function (e, t) {
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.SpinAck();
                      e.pos < n;

                    ) {
                      var o = e.uint32();
                      switch (o >>> 3) {
                        case 1:
                          (i.RoundQueue && i.RoundQueue.length) ||
                            (i.RoundQueue = []),
                            i.RoundQueue.push(
                              c.mw3Proto.RoundInfo.decode(e, e.uint32())
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
                          i.RTP = e.double();
                          break;
                        case 8:
                          i.Extra = e.bool();
                          break;
                        default:
                          e.skipType(7 & o);
                      }
                    }
                    return i;
                  }),
                  (e.decodeDelimited = function (e) {
                    return (
                      e instanceof l || (e = new l(e)),
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
                        var n = c.mw3Proto.RoundInfo.verify(e.RoundQueue[t]);
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
                      : null != e.Extra &&
                        e.hasOwnProperty("Extra") &&
                        "boolean" != typeof e.Extra
                      ? "Extra: boolean expected"
                      : null;
                  }),
                  (e.fromObject = function (e) {
                    if (e instanceof c.mw3Proto.SpinAck) return e;
                    var t = new c.mw3Proto.SpinAck();
                    if (e.RoundQueue) {
                      if (!Array.isArray(e.RoundQueue))
                        throw TypeError(
                          ".mw3Proto.SpinAck.RoundQueue: array expected"
                        );
                      t.RoundQueue = [];
                      for (var n = 0; n < e.RoundQueue.length; ++n) {
                        if ("object" != typeof e.RoundQueue[n])
                          throw TypeError(
                            ".mw3Proto.SpinAck.RoundQueue: object expected"
                          );
                        t.RoundQueue[n] = c.mw3Proto.RoundInfo.fromObject(
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
                      null != e.RTP && (t.RTP = Number(e.RTP)),
                      null != e.Extra && (t.Extra = Boolean(e.Extra)),
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
                        (n.RTP = 0),
                        (n.Extra = !1)),
                      e.RoundQueue && e.RoundQueue.length)
                    ) {
                      n.RoundQueue = [];
                      for (var i = 0; i < e.RoundQueue.length; ++i)
                        n.RoundQueue[i] = c.mw3Proto.RoundInfo.toObject(
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
                      null != e.RTP &&
                        e.hasOwnProperty("RTP") &&
                        (n.RTP =
                          t.json && !isFinite(e.RTP) ? String(e.RTP) : e.RTP),
                      null != e.Extra &&
                        e.hasOwnProperty("Extra") &&
                        (n.Extra = e.Extra),
                      n
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
                      e + "/mw3Proto.SpinAck"
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
                  (e.prototype.Mul = u.emptyArray),
                  (e.create = function (t) {
                    return new e(t);
                  }),
                  (e.encode = function (e, t) {
                    if (
                      (t || (t = a.create()),
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
                    e instanceof l || (e = l.create(e));
                    for (
                      var n = void 0 === t ? e.len : e.pos + t,
                        i = new c.mw3Proto.GameInfoData();
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
                      e instanceof l || (e = new l(e)),
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
                    if (e instanceof c.mw3Proto.GameInfoData) return e;
                    var t = new c.mw3Proto.GameInfoData();
                    if (
                      (null != e.ShowExtra &&
                        (t.ShowExtra = Boolean(e.ShowExtra)),
                      e.Mul)
                    ) {
                      if (!Array.isArray(e.Mul))
                        throw TypeError(
                          ".mw3Proto.GameInfoData.Mul: array expected"
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
                      s.util.toJSONOptions
                    );
                  }),
                  (e.getTypeUrl = function (e) {
                    return (
                      void 0 === e && (e = "type.googleapis.com"),
                      e + "/mw3Proto.GameInfoData"
                    );
                  }),
                  e
                );
              })()),
              r)),
              (n.exports = c),
              (_cjsExports$2 = n.exports);
          },
          function () {
            return { "protobufjs/minimal": __cjsMetaURL$J };
          }
        ),
          __cjsMetaURL$K ||
            loader.throwInvalidWrapper(
              "./mw3Proto.js",
              "file:///Users/m2mac2/Desktop/H5/Client/workspace/MegaWays3/Client/Thai_UAT/assets/game/Script/Proto/mw3Proto.mjs?cjs=&original=.js"
            ),
          loader.require(__cjsMetaURL$K),
          cclegacy._RF.push(
            {},
            "e701dRxJotII5KzDSw7pCoQ",
            "GenieSpine",
            void 0
          );
        var SpineAnimName$5 = {
            IDLE: "Genie_Idle",
            IDLE2: "Genie_Idle2",
            MYSTERY: "Genie_Mystery",
            MYSTERY_L: "Genie_Mystery_L",
            NEAR_WIN: "Genie_NearWin",
            SCATTER_WIN: "Genie_Scatter_Win",
            WIN: "Genie_Win",
          },
          ccclass$f = _decorator.ccclass,
          property$b = _decorator.property,
          GenieSpine =
            ((_dec$e = property$b({ type: sp.Skeleton, tooltip: "spine" })),
            ccclass$f(
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
                    (t.m_lastAnimName = ""),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
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
                                    this.PlayAnimation(SpineAnimName$5.MYSTERY)
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
                                    this.PlayAnimation(
                                      SpineAnimName$5.NEAR_WIN,
                                      !0
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
                  (n.PlayScatterWin = (function () {
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
                                      SpineAnimName$5.SCATTER_WIN
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
                                    this.PlayAnimation(SpineAnimName$5.WIN)
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
                  (n.PlayIdle = function () {
                    var e =
                      Math.random() < 0.5
                        ? SpineAnimName$5.IDLE
                        : SpineAnimName$5.IDLE2;
                    this.PlayAnimation(e);
                  }),
                  (n.PlayAnimation = function (e, t) {
                    var n = this;
                    return (
                      void 0 === t && (t = !1),
                      new Promise(function (i) {
                        n.m_spine.clearTrack(0), n.m_spine.setToSetupPose();
                        var o = n.m_spine.setAnimation(0, e, t),
                          r = function () {
                            e !== SpineAnimName$5.NEAR_WIN && n.PlayIdle();
                          };
                        o &&
                          n.m_spine.setTrackEventListener(o, function (e, t) {
                            t.data.name;
                          }),
                          o
                            ? n.m_spine.setTrackCompleteListener(
                                o,
                                function () {
                                  r(),
                                    n.m_spine.setTrackCompleteListener(
                                      o,
                                      function () {}
                                    ),
                                    i();
                                }
                              )
                            : n.m_spine.setCompleteListener(function () {
                                r(), n.m_spine.setCompleteListener(null), i();
                              });
                      })
                    );
                  }),
                  t
                );
              })(Component)),
              (_descriptor$a = _applyDecoratedDescriptor(
                _class2$a.prototype,
                "m_spine",
                [_dec$e],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_class$f = _class2$a))
            ) || _class$f),
          _dec$f,
          _dec2$9,
          _dec3$5,
          _dec4$4,
          _dec5$2,
          _dec6$2,
          _class$g,
          _class2$b,
          _descriptor$b,
          _descriptor2$9,
          _descriptor3$5,
          _descriptor4$4,
          _descriptor5$2,
          _descriptor6$2;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ceef0Fut8VCgpeRndbE9yRN",
            "IntroComponent",
            void 0
          );
        var AnimName$1 = { L: "GameIntro_L", S: "GameIntro_S" },
          ccclass$g = _decorator.ccclass,
          property$c = _decorator.property,
          IntroComponent =
            ((_dec$f = property$c({ type: Animation, tooltip: "直橫動畫" })),
            (_dec2$9 = property$c({ type: sp.Skeleton, tooltip: "精靈" })),
            (_dec3$5 = property$c({ type: sp.Skeleton, tooltip: "腳色" })),
            (_dec4$4 = property$c({ type: sp.Skeleton, tooltip: "Mystery" })),
            (_dec5$2 = property$c({ type: Node, tooltip: "背景-橫" })),
            (_dec6$2 = property$c({ type: Node, tooltip: "背景-直" })),
            ccclass$g(
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
                      "m_anim",
                      _descriptor$b,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_genieSpine",
                      _descriptor2$9,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_charaSpine",
                      _descriptor3$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mysterySpine",
                      _descriptor4$4,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bgNodeL",
                      _descriptor5$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bgNodeS",
                      _descriptor6$2,
                      _assertThisInitialized(t)
                    ),
                    (t.m_isPlaying = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.OnRotation = function (e) {
                    this.m_isPlaying ||
                      ((this.m_bgNodeL.active = e),
                      (this.m_bgNodeS.active = !e));
                  }),
                  (n.Show = (function () {
                    var e = _asyncToGenerator(
                      _regeneratorRuntime().mark(function e(t, n, i) {
                        var o,
                          r,
                          s,
                          l,
                          a,
                          u,
                          c,
                          p,
                          m = this;
                        return _regeneratorRuntime().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  (this.m_isPlaying = !0),
                                    (o = t ? AnimName$1.L : AnimName$1.S),
                                    (r = this.m_anim.clips),
                                    (s = null),
                                    (l = 0);
                                case 5:
                                  if (!(l < r.length)) {
                                    e.next = 12;
                                    break;
                                  }
                                  if (r[l].name !== o) {
                                    e.next = 9;
                                    break;
                                  }
                                  return (s = r[l]), e.abrupt("break", 12);
                                case 9:
                                  l++, (e.next = 5);
                                  break;
                                case 12:
                                  return (
                                    s &&
                                      ((a = node.GetAnimEventTime(
                                        s,
                                        "AnimationEvent",
                                        "GameIntro_Show"
                                      )),
                                      (u = node.GetAnimEventTime(
                                        s,
                                        "AnimationEvent",
                                        "GameIntro_ShowBar"
                                      )),
                                      (c = node.GetAnimEventTime(
                                        s,
                                        "AnimationEvent",
                                        "GameIntro_Character"
                                      )),
                                      tween(this.node)
                                        .delay(c)
                                        .call(function () {
                                          m.m_genieSpine.setAnimation(0, o, !1),
                                            m.m_charaSpine.setAnimation(
                                              0,
                                              o,
                                              !1
                                            ),
                                            m.m_mysterySpine.setAnimation(
                                              0,
                                              t
                                                ? "Mystery_GameIntro_L"
                                                : "Mystery_GameIntro_S",
                                              !1
                                            );
                                        })
                                        .start(),
                                      tween(this.node)
                                        .delay(u)
                                        .call(function () {
                                          n && n();
                                        })
                                        .start(),
                                      tween(this.node)
                                        .delay(a)
                                        .call(function () {
                                          i && i();
                                        })
                                        .start()),
                                    (p = this.m_anim.getState(o)).play(),
                                    (e.next = 17),
                                    node$2.Wait(this, p.duration)
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
                    return function (t, n, i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  t
                );
              })(Component)),
              (_descriptor$b = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_anim",
                [_dec$f],
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
                _class2$b.prototype,
                "m_genieSpine",
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
              (_descriptor3$5 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_charaSpine",
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
              (_descriptor4$4 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_mysterySpine",
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
                _class2$b.prototype,
                "m_bgNodeL",
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
              (_descriptor6$2 = _applyDecoratedDescriptor(
                _class2$b.prototype,
                "m_bgNodeS",
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
              (_class$g = _class2$b))
            ) || _class$g);
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "6ada9ZDAWhNWa1XY8cI1iyR", "WinEffect", void 0);
        var EFTWIN_PATH = "Astt/%s/bottombar/EftWin",
          EFTWIN_EFFECT_PATH = "Astt/%s/bottombar/EftWin_effect",
          WinEffect = (function () {
            function e(e) {
              (this.m_useEftWinValue = !1),
                (this.m_eftWinValueFnt = null),
                (this.m_eftWinNode = null),
                (this.m_eftWinBg = null),
                (this.m_eftWinLabel = null),
                (this.m_eftWinEft = null),
                (this.m_eftWinNodePos = null),
                (this.m_lastFinalWinValue = 0),
                (this.m_lastTotalWinValue = 0),
                (this.m_isEftWinFading = !1),
                (this.m_isLandscape = !1),
                (this.m_eftWinActions = []),
                (this.m_isLandscape = e);
            }
            var t = e.prototype;
            return (
              (t.SetUseEftWinValue = function (e, t, n, i) {
                var o = this;
                if (
                  ((this.m_useEftWinValue = !0),
                  this.m_useEftWinValue && !this.m_eftWinValueFnt)
                ) {
                  (this.m_eftWinNode = new Node()),
                    this.m_eftWinNode.setPosition(
                      v3(t[Number(this.m_isLandscape)])
                        ? v3(t[Number(this.m_isLandscape)])
                        : v3(0, 0)
                    ),
                    (this.m_eftWinNodePos = t),
                    (this.m_eftWinNode.active = !1),
                    node$3.node.addChild(this.m_eftWinNode),
                    node.SetZIndex(this.m_eftWinNode, node$2.ZOrder.EFTWIN);
                  var r = node.GetFilePath(EFTWIN_PATH);
                  node$2.CommonMainBundle.load(r, function (e, t) {
                    e
                      ? error(e.message || e)
                      : ((o.m_eftWinBg = instantiate(t)),
                        (o.m_eftWinBg.getComponent(UIOpacity).opacity = 0),
                        o.m_eftWinNode.addChild(o.m_eftWinBg),
                        node.SetZIndex(o.m_eftWinBg, 0));
                  });
                  var s = node.GetFilePath(EFTWIN_EFFECT_PATH);
                  node$2.CommonMainBundle.load(s, function (e, t) {
                    e
                      ? error(e.message || e)
                      : ((o.m_eftWinEft = instantiate(t)),
                        (o.m_eftWinEft.active = !1),
                        o.m_eftWinNode.addChild(o.m_eftWinEft),
                        node.SetZIndex(o.m_eftWinEft, 1));
                  }),
                    node$2.GameBundle.load(e, BitmapFont, function (e, t) {
                      if (e) error(e.message || e);
                      else {
                        o.m_eftWinValueFnt = t;
                        var r = new Node();
                        r.setPosition(v3(0, -50)),
                          (o.m_eftWinLabel = r.addComponent(Label)),
                          (o.m_eftWinLabel.string = ""),
                          (o.m_eftWinLabel.font = o.m_eftWinValueFnt),
                          (o.m_eftWinLabel.fontSize = n),
                          (o.m_eftWinLabel.lineHeight = i),
                          (o.m_eftWinLabel.horizontalAlign =
                            Label.HorizontalAlign.LEFT),
                          (o.m_eftWinLabel.verticalAlign =
                            Label.VerticalAlign.TOP),
                          o.m_eftWinNode.addChild(r),
                          node.SetZIndex(r, 2);
                      }
                    });
                }
              }),
              (t.SetEftWinValue = function (e, t, n, i) {
                var o = this;
                if (
                  !(
                    this.m_useEftWinValue &&
                    this.m_eftWinNode &&
                    this.m_eftWinBg &&
                    this.m_eftWinLabel &&
                    this.m_eftWinEft
                  )
                )
                  return new Promise(function (e) {
                    e();
                  });
                var r = node.divide(1.3, 0.02),
                  s = 0,
                  l = node.divide(t, r);
                if (
                  ((this.m_eftWinNode.active = !0),
                  (this.m_lastFinalWinValue = t),
                  (this.m_lastTotalWinValue = t),
                  this.m_eftWinActions.length > 0)
                )
                  for (; this.m_eftWinActions.length > 0; )
                    this.m_eftWinActions.shift().stop();
                node$3.GetDisplayValue(t).toString().indexOf(".") > -1
                  ? node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                  : node.FORMAT_NUMBER_TYPE.NONE_DOT;
                var a = tween().repeat(
                  r,
                  tween()
                    .call(function () {
                      (s = node.plus(s, l)) >= t && (s = t),
                        (o.m_eftWinLabel.string = node.FormatNumberThousands(
                          node$3.GetDisplayValue(s),
                          node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        ));
                    })
                    .delay(0.02)
                );
                e && (a = tween().call(function () {}));
                var u = tween(this.m_eftWinNode)
                  .then(a)
                  .call(function () {
                    o.m_eftWinLabel.string = node.FormatNumberThousands(
                      node$3.GetDisplayValue(t),
                      node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                    );
                  });
                this.m_eftWinActions.push(u);
                var c = tween(this.m_eftWinNode).call(function () {
                  (o.m_eftWinEft.active = !0),
                    o.m_eftWinEft.getComponent(Animation).play("EftWin_effect"),
                    o.m_eftWinEft
                      .getComponent(Animation)
                      .once(AnimationComponent.EventType.FINISHED, function () {
                        o.m_eftWinEft && (o.m_eftWinEft.active = !1);
                      });
                });
                this.m_eftWinActions.push(c);
                var p = tween(this.m_eftWinNode).call(function () {
                  var e = tween(o.m_eftWinBg)
                    .call(function () {
                      o.m_eftWinBg.setScale(v3(1, 1)),
                        (o.m_eftWinBg.getComponent(UIOpacity).opacity = 255),
                        o.m_eftWinBg.getComponent(Animation).play("EftWin");
                    })
                    .delay(1.8)
                    .parallel(
                      tween().call(function () {
                        tween(o.m_eftWinBg.getComponent(UIOpacity))
                          .to(0.35, { opacity: 0 })
                          .start();
                      }),
                      tween().to(0.35, { scale: v3(0, 0) })
                    )
                    .start();
                  o.m_eftWinActions.push(e);
                });
                this.m_eftWinActions.push(p);
                var m = tween(this.m_eftWinNode).call(function () {
                  var e = tween(o.m_eftWinLabel.node)
                    .call(function () {
                      o.m_eftWinLabel.node.setScale(v3(1, 1)),
                        log(o.m_eftWinLabel.node),
                        null === o.m_eftWinLabel.node.getComponent(UIOpacity) &&
                          o.m_eftWinLabel.node.addComponent(UIOpacity),
                        (o.m_eftWinLabel.node.getComponent(
                          UIOpacity
                        ).opacity = 255);
                    })
                    .to(0.15, { scale: v3(1.5, 1.5) })
                    .delay(1.65)
                    .start();
                  o.m_eftWinActions.push(e);
                });
                return (
                  this.m_eftWinActions.push(m),
                  (this.m_isEftWinFading = !1),
                  new Promise(function (t) {
                    var i = tween(o.m_eftWinNode)
                      .parallel(p, c, m, u)
                      .delay(e ? 2 : 1)
                      .call(function () {
                        n ||
                          ((o.m_lastFinalWinValue = 0),
                          (o.m_lastTotalWinValue = 0),
                          (o.m_isEftWinFading = !1),
                          (o.m_eftWinNode.active = !1)),
                          t();
                      })
                      .start();
                    o.m_eftWinActions.push(i);
                  })
                );
              }),
              (t.SkipEftWinValue = function () {
                var e = this;
                if (
                  !this.m_isEftWinFading &&
                  this.m_eftWinNode &&
                  this.m_eftWinBg &&
                  this.m_eftWinLabel &&
                  this.m_eftWinEft
                )
                  return new Promise(function (t) {
                    if (e.m_lastFinalWinValue > 0) {
                      if (e.m_eftWinActions.length > 0)
                        for (; e.m_eftWinActions.length > 0; )
                          e.m_eftWinActions.shift().stop();
                      node$3
                        .GetDisplayValue(e.m_lastFinalWinValue)
                        .toString()
                        .indexOf(".") > -1
                        ? node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        : node.FORMAT_NUMBER_TYPE.NONE_DOT,
                        (e.m_eftWinLabel.string = node.FormatNumberThousands(
                          node$3.GetDisplayValue(e.m_lastFinalWinValue),
                          node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                        )),
                        (e.m_lastFinalWinValue = 0),
                        (e.m_lastTotalWinValue = 0);
                      var n = tween(e.m_eftWinNode).call(function () {
                        var t = tween(e.m_eftWinBg)
                          .delay(0)
                          .parallel(
                            tween().call(function () {
                              tween(e.m_eftWinBg.getComponent(UIOpacity))
                                .to(0, { opacity: 0 })
                                .start();
                            }),
                            tween().to(0, { scale: v3(0, 0) })
                          )
                          .start();
                        e.m_eftWinActions.push(t);
                      });
                      e.m_eftWinActions.push(n);
                      var i = tween(e.m_eftWinNode).call(function () {
                        var t = tween(e.m_eftWinLabel.node)
                          .delay(0)
                          .parallel(
                            tween().call(function () {
                              tween(
                                e.m_eftWinLabel.node.getComponent(UIOpacity)
                              )
                                .to(0, { opacity: 0 })
                                .start();
                            }),
                            tween().to(0, { scale: v3(0, 0) })
                          )
                          .start();
                        e.m_eftWinActions.push(t);
                      });
                      e.m_eftWinActions.push(i);
                      var o = tween(e.m_eftWinNode)
                        .parallel(n, i)
                        .delay(0)
                        .call(function () {
                          (e.m_isEftWinFading = !1),
                            (e.m_eftWinNode.active = !1),
                            t();
                        })
                        .start();
                      e.m_eftWinActions.push(o);
                    }
                  });
              }),
              (t.ChangeValue = function (e) {
                (this.m_lastFinalWinValue = e),
                  (this.m_lastTotalWinValue = e),
                  node$3.GetDisplayValue(e).toString().indexOf(".") > -1
                    ? node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                    : node.FORMAT_NUMBER_TYPE.NONE_DOT,
                  (this.m_eftWinLabel.string = node.FormatNumberThousands(
                    node$3.GetDisplayValue(e),
                    node.FORMAT_NUMBER_TYPE.PERMANENT_DOT
                  ));
              }),
              (t.SetPosition = function (e) {
                (this.m_eftWinNodePos = e),
                  this.m_eftWinNode.setPosition(
                    v3(this.m_eftWinNodePos[Number(this.m_isLandscape)])
                  );
              }),
              (t.IsUseEftWin = function () {
                return this.m_useEftWinValue;
              }),
              (t.OnRatation = function (e) {
                (this.m_isLandscape = e),
                  this.m_eftWinNode &&
                    this.m_eftWinNode.setPosition(
                      v3(this.m_eftWinNodePos[Number(this.m_isLandscape)])
                    );
              }),
              _createClass(e, [
                {
                  key: "EftWinLabel",
                  get: function () {
                    return this.m_eftWinLabel;
                  },
                },
              ]),
              e
            );
          })(),
          _dec$g,
          _class$h;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8ff88qZg2xHlZU3gWPaw+dq",
            "FeatureShowState",
            void 0
          );
        var ccclass$h = _decorator.ccclass,
          FeatureShowState =
            ((_dec$g = ccclass$h("FeatureShowState")),
            _dec$g(
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
                  (n.OnEnter = function () {
                    log("game state FeatureShowState"),
                      node$3.CanPlayFeaturesDemo(!0),
                      (this.m_gameView.IsAutoShowFeatures = !0),
                      node$3.SetBarNodeVisiable(!0),
                      (this.m_gameView.IntroComp.node.active = !1),
                      this.m_gameView.SlotReels.SetAllSymbolVisiable(!0),
                      node$8.AutoShowFeatures();
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$h),
          _dec$h,
          _class$i;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8da5ebb8wJAL4H+XG3hl/G1",
            "GetLampAwardState",
            void 0
          );
        var ccclass$i = _decorator.ccclass,
          GetLampAwardState =
            ((_dec$h = ccclass$i("GetLampAwardState")),
            _dec$h(
              (_class$i = (function (e) {
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
                    log("game state GetLampAwardState"),
                      this.m_gameView.GenieSpine.PlayWin(),
                      this.m_gameView.EffectPlate.ShowLampAward(
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].LW,
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].ADV
                      ).then(function () {
                        node$6.NextState(
                          MW_Define.GAMEVIEW_STATE.CHECK_MAX_FLAG
                        );
                      });
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$i),
          _dec$i,
          _class$j;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "dcdd8ck/gVJUqic3ccItgxw", "IdleState", void 0);
        var ccclass$j = _decorator.ccclass,
          IdleState =
            ((_dec$i = ccclass$j("IdleState")),
            _dec$i(
              (_class$j = (function (e) {
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
                    log("game state idle");
                  }),
                  t
                );
              })(Common_IdleState))
            ) || _class$j),
          _dec$j,
          _class$k;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "814b0jBAlpM+qIt014CFx7h",
            "LeaveFreeState",
            void 0
          );
        var ccclass$k = _decorator.ccclass,
          LeaveFreeState =
            ((_dec$j = ccclass$k("LeaveFreeState")),
            _dec$j(
              (_class$k = (function (e) {
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
                    var e = this;
                    log("game state LeaveFreeState"),
                      null !== this.m_gameView.BgmId &&
                        (node$1.Stop(this.m_gameView.BgmId),
                        (this.m_gameView.BgmId = null)),
                      this.m_gameView.EffectPlate.LeaveFree(
                        this.m_gameView.TotalWin
                      ).then(function () {
                        e.m_gameView.SetGameMode(GameMode.MG),
                          node$8.CheckBuyBonusOverAni(),
                          (e.m_gameView.BgmId = node$1.Play(
                            MW_Define.AudioClips.BGM_MG,
                            !0
                          )),
                          (MW_Define.IsInFG = !1),
                          node$3.SetLeaveFree(),
                          node$3.IsAutoSpin && node$3.LockBetEnable(!0),
                          node$6.NextState(MW_Define.GAMEVIEW_STATE.ROUND_END);
                      });
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$k),
          _dec$k,
          _class$l;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "43e60c7H/VMbKaJh9yk9maz",
            "MultiState",
            void 0
          );
        var ccclass$l = _decorator.ccclass,
          MultiState =
            ((_dec$k = ccclass$l("MultiState")),
            _dec$k(
              (_class$l = (function (e) {
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
                    log("game state MultiState"),
                      this.m_gameView.EffectPlate.ShowMultiEft().then(
                        function () {
                          node$6.NextState(CommonState.IDLE),
                            node$3.SetSpinState(SlotBottomBarState.IDLE);
                        }
                      );
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$l),
          _dec$l,
          _class$m;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "0545dNp/N1L+q0h05r0SW/k",
            "MysteryState",
            void 0
          );
        var ccclass$m = _decorator.ccclass,
          MysteryState =
            ((_dec$l = ccclass$m("MysteryState")),
            _dec$l(
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
                    var e = this;
                    log("game state MysteryState");
                    var t =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].PS,
                      n =
                        this.m_gameView.SpinAck.RoundQueue[
                          this.m_gameView.RoundIdx
                        ].MT;
                    this.m_gameView.EffectPlate.ShowMysteryChange(t, n).then(
                      function () {
                        e.m_gameView.SpinAck.RoundQueue[e.m_gameView.RoundIdx]
                          .ADV
                          ? MW_Define.IsInFG
                            ? node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.GET_LAMP_AWARD
                              )
                            : node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.CHECK_MAX_FLAG
                              )
                          : node$6.NextState(
                              MW_Define.GAMEVIEW_STATE.ROUND_SHOW_END
                            );
                      }
                    );
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$m),
          _dec$m,
          _class$n;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "39151TPu3BPWKImsEUlO53i",
            "PlateShowState",
            void 0
          );
        var ccclass$n = _decorator.ccclass,
          PlateShowState =
            ((_dec$m = ccclass$n("PlateShowState")),
            _dec$m(
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
                    var e = this;
                    log("game state PlateShowState"),
                      node$1.Play(MW_Define.AudioClips.Debut),
                      this.m_gameView.IntroComp.Show(
                        this.m_gameView.IsLandscape,
                        function () {
                          node$3.SetBarNodeVisiable(!0, 0.5),
                            e.m_gameView.OnRotation();
                        },
                        function () {
                          e.m_gameView.SlotReels.SetAllSymbolVisiable(!0, 0.5);
                        }
                      ).then(function () {
                        node$2.FreeSpinRemain > 0
                          ? node$6.NextState(CommonState.CHECK_FREESPIN)
                          : node$6.NextState(CommonState.IDLE),
                          node$3.SetSpinState(SlotBottomBarState.IDLE),
                          node$9.StartAutoShow(),
                          (e.m_gameView.IntroComp.node.active = !1),
                          e.m_gameView.IsChange && e.m_gameView.OnRotation();
                      });
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$n),
          _dec$n,
          _class$o;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "c0580U7n/dD7qJuh+RuIDWC",
            "RoundEndState",
            void 0
          );
        var ccclass$o = _decorator.ccclass,
          RoundEndState =
            ((_dec$n = ccclass$o("RoundEndState")),
            _dec$n(
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
                  (n.OnEnter = function () {
                    log("game state RoundEndState"),
                      this.m_gameView.IsChange && this.m_gameView.OnRotation(),
                      (this.m_gameView.ProcessTick = 0),
                      node$3.IsAutoSpin &&
                        (this.m_gameView.ProcessTick =
                          node$4.TempoSetting.GoldenEmpire.AUTO_DELAY_TIME),
                      this.m_gameView.RetryRoundEnd();
                  }),
                  (n.OnProcess = function (e) {
                    (this.m_gameView.ProcessTick = node.strip(
                      this.m_gameView.ProcessTick - e
                    )),
                      this.m_gameView.ProcessTick <= 0 &&
                        node$a.CanToNextRound() &&
                        (!node$b.IsTwice ||
                          (node$b.IsTwice && node$b.IsGetRoundEndAck)) &&
                        (node$8.IsFeaturesDemoMode &&
                          !MW_Define.IsInFG &&
                          (this.m_gameView.EffectPlate.CleanSymbolEffect(),
                          this.m_gameView.SlotReels.SetPlateSymbol([]),
                          node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1)),
                        node$3.IsAutoSpin &&
                          node$3.IsAutoPlayByTimes() &&
                          node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                          ),
                        node$8.IsFeaturesDemoMode &&
                          !MW_Define.IsInFG &&
                          (this.m_gameView.EffectPlate.CleanSymbolEffect(),
                          this.m_gameView.SlotReels.SetPlateSymbol([])),
                        MW_Define.IsInFG &&
                        (this.m_gameView.RoundIdx > 0 || node$3.IsAutoSpin)
                          ? node$6.NextState(CommonState.SPIN)
                          : MW_Define.IsInFG
                          ? node$6.NextState(CommonState.IDLE)
                          : node$6.NextState(CommonState.END));
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$o),
          _dec$o,
          _class$p;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "ffaa1jLzVtKPacq3BsTZNPT",
            "RoundShowEndState",
            void 0
          );
        var ccclass$p = _decorator.ccclass,
          RoundShowEndState =
            ((_dec$o = ccclass$p("RoundShowEndState")),
            _dec$o(
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
                    log("game state RoundShowEndState"),
                      node$6.NextState(CommonState.COMMON_SHOW);
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$p),
          _dec$p,
          _class$q;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "bb5c2dlBvpGb5iQZakrCFvI", "SpinState", void 0);
        var ccclass$q = _decorator.ccclass,
          SpinState =
            ((_dec$p = ccclass$q("SpinState")),
            _dec$p(
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
                    this.m_gameView.IsSpined ||
                      (log("CommonState.SPIN"),
                      node$2.SetCanUseItemCard(!1),
                      node$8.SetBuyBonusState(!1),
                      node$3.CanPlayFeaturesDemo(!1),
                      (node$3.IsGameIdle = !1),
                      (this.m_gameView.IsFirstStopSound = !0),
                      (this.m_gameView.CanReelStop = !1),
                      (this.m_gameView.IsHardStop = node$3.IsHardStop),
                      this.m_gameView.SlotReels.ShowLight(!0),
                      this.m_gameView.EffectPlate.CleanSymbolEffect(),
                      this.m_gameView.IsPlayWinBg &&
                        this.m_gameView.PlayNormalBG(),
                      MW_Define.IsInFG
                        ? (this.m_gameView.SlotReels.StartSpin(),
                          this.m_gameView.RoundIdx++,
                          this.m_gameView.SetFgRound(),
                          node$6.NextState(
                            MW_Define.GAMEVIEW_STATE.CHECK_MYSTERY
                          ))
                        : this.m_gameView.StartSpin());
                  }),
                  (n.OnProcess = function (e) {
                    this.m_gameView.SlotReels.Spin(e);
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$q),
          _dec$q,
          _class$r;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "8955d4ydx9D8LfgJgswwVJl",
            "UnshowPrepareState",
            void 0
          );
        var ccclass$r = _decorator.ccclass,
          UnshowPrepareState =
            ((_dec$q = ccclass$r("UnshowPrepareState")),
            _dec$q(
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
                    if (
                      (log("game state UNSHOW_PREPARE"),
                      this.m_gameView.UnshowSpinAck)
                    ) {
                      node$3.SetBarNodeVisiable(!0),
                        (this.m_gameView.IntroComp.node.active = !1),
                        this.m_gameView.SlotReels.SetAllSymbolVisiable(!0),
                        this.m_gameView.UnshowSpinAck.Extra &&
                          this.m_gameView.ExtraBet.ForceSetExtraBet(!0);
                      var e = node$b.UnshowStartRound;
                      if (e) {
                        (this.m_gameView.SpinAck =
                          this.m_gameView.ConvertSpinAck(
                            this.m_gameView.UnshowSpinAck
                          ).info),
                          (node$b.HasUnshow = !1),
                          (this.m_gameView.UnshowSpinAck = null),
                          (MW_Define.IsInFG = !0),
                          node$3.SetEnterFree(),
                          (this.m_gameView.RoundIdx = e - 1),
                          (this.m_gameView.FgTotalRound =
                            this.m_gameView.SpinAck.RoundQueue[0].FRR),
                          this.m_gameView.SetFgRound(),
                          this.m_gameView.SetGameMode(GameMode.FG),
                          this.m_gameView.SlotReels.SetPlateSymbol(
                            this.m_gameView.SpinAck.RoundQueue[
                              this.m_gameView.RoundIdx
                            ].PS
                          ),
                          null !== this.m_gameView.BgmId &&
                            (node$1.Stop(this.m_gameView.BgmId),
                            (this.m_gameView.BgmId = null)),
                          (this.m_gameView.BgmId = node$1.Play(
                            MW_Define.AudioClips.BGM_FG,
                            !0
                          ));
                        for (var t = 0; t < e; t++)
                          this.m_gameView.TotalWin +=
                            this.m_gameView.SpinAck.RoundQueue[t].RW;
                        node$3.SetWinValueWithCheck({
                          maxWin: this.m_gameView.SpinAck.TotalWin,
                          value: this.m_gameView.TotalWin,
                        });
                      } else this.m_gameView.SlotReels.SetPlateSymbol([]);
                      (node$8.HasUnshow = !1),
                        node$7.ShowMessageBox(
                          node$2.StringKey.MSGBOX_UNSHOW_BACK,
                          DEFAULT_TITLE_KEY,
                          function () {
                            1 == e
                              ? node$6.NextState(CommonState.IDLE)
                              : node$6.NextState(CommonState.SPIN);
                          }
                        );
                    }
                  }),
                  (n.OnProcess = function (e) {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$r),
          _dec$r,
          _class$s;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "93900qAR1xPFZVLLoSfzfec",
            "WaitReadyState",
            void 0
          );
        var ccclass$s = _decorator.ccclass,
          WaitReadyState =
            ((_dec$r = ccclass$s("WaitReadyState")),
            _dec$r(
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
                    log("game state WaitReadyState"),
                      this.m_gameView.InitExtra(),
                      node$3.ShowGameScene(),
                      node$3.ShowPlayReady(),
                      node$3.SetBarNodeVisiable(!1),
                      this.m_gameView.SlotReels.SetAllSymbolVisiable(!1),
                      (this.m_gameView.IntroComp.node.active = !0),
                      node$c.LoadingComplete();
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$s),
          _dec$s,
          _class$t;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "537a6pm0mRAa6/Fp3Jtr2k5",
            "WaitResState",
            void 0
          );
        var ccclass$t = _decorator.ccclass,
          WaitResState =
            ((_dec$s = ccclass$t("WaitResState")),
            _dec$s(
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
                  (n.OnEnter = function () {
                    log("game state WaitResState");
                  }),
                  (n.OnProcess = function () {
                    MW_Define.AudioClips.Debut &&
                      node$3.IsFeaturesDemoLoaded() &&
                      node$6.NextState(MW_Define.GAMEVIEW_STATE.WAIT_READY);
                  }),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$t),
          _dec$t,
          _dec2$a,
          _dec3$6,
          _dec4$5,
          _dec5$3,
          _dec6$3,
          _dec7$2,
          _dec8$1,
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
          _dec31,
          _dec32,
          _dec33,
          _dec34,
          _dec35,
          _dec36,
          _dec37,
          _dec38,
          _dec39,
          _class$u,
          _class2$c,
          _descriptor$c,
          _descriptor2$a,
          _descriptor3$6,
          _descriptor4$5,
          _descriptor5$3,
          _descriptor6$3,
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
          _descriptor30,
          _descriptor31,
          _descriptor32,
          _descriptor33,
          _descriptor34,
          _descriptor35,
          _descriptor36,
          _descriptor37,
          _descriptor38,
          _descriptor39;
        cclegacy._RF.pop(),
          cclegacy._RF.push({}, "21eb6SeGOFHRYFxyyERz/SY", "GameView", void 0);
        var WIDTH = 1136,
          HEIGHT = 640,
          FeatureBetValue = 10,
          GameMode;
        !(function (e) {
          (e[(e.MG = 0)] = "MG"), (e[(e.FG = 1)] = "FG");
        })(GameMode || (GameMode = {}));
        var MultiEffectAnimName = {
            L: {
              Start: "Counter_FX_Start_L",
              Loop: "Counter_FX_Loop_L",
              End: "Counter_FX_End_L",
            },
            S: {
              Start: "Counter_FX_Start_S",
              Loop: "Counter_FX_Loop_S",
              End: "Counter_FX_End_S",
            },
          },
          ccclass$u = _decorator.ccclass,
          property$d = _decorator.property,
          GameView =
            ((_dec$t = property$d({
              type: IntroComponent,
              tooltip: "前導動畫",
            })),
            (_dec2$a = property$d({ type: Sprite, tooltip: "標題圖示" })),
            (_dec3$6 = property$d({ type: Node, tooltip: "橫版標題" })),
            (_dec4$5 = property$d({ type: Node, tooltip: "橫版標題底圖" })),
            (_dec5$3 = property$d({ type: Animation, tooltip: "直橫版動畫" })),
            (_dec6$3 = property$d({ type: SlotReels, tooltip: "轉輪" })),
            (_dec7$2 = property$d({ type: EffectPlate, tooltip: "盤面表演" })),
            (_dec8$1 = property$d({ type: Prefab, tooltip: "大獎表演" })),
            (_dec9$1 = property$d({ type: Node, tooltip: "地bar根節點" })),
            (_dec10 = property$d(Button)),
            (_dec11 = property$d({ type: Node, tooltip: "直版精靈" })),
            (_dec12 = property$d({ type: Prefab, tooltip: "直版精靈Prefab" })),
            (_dec13 = property$d({ type: Node, tooltip: "MG背景跟節點" })),
            (_dec14 = property$d({ type: Animation, tooltip: "MG橫版背景" })),
            (_dec15 = property$d({ type: Animation, tooltip: "MG直版背景" })),
            (_dec16 = property$d({ type: Node, tooltip: "MG提示版" })),
            (_dec17 = property$d({ type: Node, tooltip: "FG背景" })),
            (_dec18 = property$d({ type: Animation, tooltip: "FG橫版背景" })),
            (_dec19 = property$d({ type: Animation, tooltip: "FG直版背景" })),
            (_dec20 = property$d({ type: Node, tooltip: "FG提示版" })),
            (_dec21 = property$d({ type: Label, tooltip: "FG局數提示" })),
            (_dec22 = property$d({
              type: ExtraBetComponent,
              tooltip: "ExtraBet控制組件",
            })),
            (_dec23 = property$d({ type: Button, tooltip: "加倍按鈕" })),
            (_dec24 = property$d({ type: Node, tooltip: "加倍開啟" })),
            (_dec25 = property$d({ type: Button, tooltip: "加倍按鈕" })),
            (_dec26 = property$d({ type: Node, tooltip: "加倍開啟" })),
            (_dec27 = property$d({ type: Animation, tooltip: "效果啟動-橫" })),
            (_dec28 = property$d({ type: Animation, tooltip: "效果啟動-直" })),
            (_dec29 = property$d({ type: Label, tooltip: "押注提示" })),
            (_dec30 = property$d({ type: Label, tooltip: "FG進入倍率" })),
            (_dec31 = property$d({
              type: MarqueeComponent,
              tooltip: "跑馬燈-橫版",
            })),
            (_dec32 = property$d({
              type: MarqueeComponent,
              tooltip: "跑馬燈-直版",
            })),
            (_dec33 = property$d({ type: SpriteFrame, tooltip: "簡體跑馬燈" })),
            (_dec34 = property$d({ type: SpriteAtlas, tooltip: "標題合圖" })),
            (_dec35 = property$d({ type: Sprite, tooltip: "押注提升至" })),
            (_dec36 = property$d({ type: Sprite, tooltip: "獲得倍率" })),
            (_dec37 = property$d({ type: Sprite, tooltip: "總線數" })),
            (_dec38 = property$d({ type: Sprite, tooltip: "board free" })),
            (_dec39 = property$d({ type: Sprite, tooltip: "board spin" })),
            ccclass$u(
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
                      "m_introComp",
                      _descriptor$c,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSprites",
                      _descriptor2$a,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_logoNodeL",
                      _descriptor3$6,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_logoBaseNodeL",
                      _descriptor4$5,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_rotationAnim",
                      _descriptor5$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_slotReels",
                      _descriptor6$3,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_effectPlate",
                      _descriptor7$2,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_bigwinPrefab",
                      _descriptor8$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_barNode",
                      _descriptor9$1,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_plateSpineBtn",
                      _descriptor10,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_genieNode",
                      _descriptor11,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_geniePrefab",
                      _descriptor12,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgBgNode",
                      _descriptor13,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgBgAnimL",
                      _descriptor14,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgBgAnimS",
                      _descriptor15,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_mgHintNodes",
                      _descriptor16,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgBgNode",
                      _descriptor17,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgBgAnimL",
                      _descriptor18,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgBgAnimS",
                      _descriptor19,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgHintNodes",
                      _descriptor20,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_fgRoundLabels",
                      _descriptor21,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_extraBet",
                      _descriptor22,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBtn_L",
                      _descriptor23,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiNode_L",
                      _descriptor24,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBtn_S",
                      _descriptor25,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiNode_S",
                      _descriptor26,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiOnAnimL",
                      _descriptor27,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiOnAnimS",
                      _descriptor28,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiBetLabels",
                      _descriptor29,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiFgLabels",
                      _descriptor30,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_marqueen_L",
                      _descriptor31,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_marqueen_S",
                      _descriptor32,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_cnMarqueenSpriteFrames",
                      _descriptor33,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_titleSpriteAtlas",
                      _descriptor34,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_maxBetSprites",
                      _descriptor35,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_multiSprites",
                      _descriptor36,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_totalWaysSprite",
                      _descriptor37,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_boardFreeSprites",
                      _descriptor38,
                      _assertThisInitialized(t)
                    ),
                    _initializerDefineProperty(
                      t,
                      "m_boardSpinSprites",
                      _descriptor39,
                      _assertThisInitialized(t)
                    ),
                    (t.m_spinAck = null),
                    (t.m_unshowSpinAck = null),
                    (t.m_isChange = !1),
                    (t.m_isLandscape = !1),
                    (t.m_autoplayInfos = null),
                    (t.m_isHardStop = !1),
                    (t.m_hasSacatterCol = [!1, !1, !1, !1, !1, !1]),
                    (t.m_hasWildCol = [!1, !1, !1, !1, !1, !1]),
                    (t.m_isFirstPlateSpin = !0),
                    (t.m_effectView = void 0),
                    (t.m_processTick = 0),
                    (t.m_lastClickTime = void 0),
                    (t.m_isSkipEffect = !1),
                    (t.m_genieSpine = null),
                    (t.m_fakeSpinAck = null),
                    (t.m_isSpined = !1),
                    (t.m_isMulti = !1),
                    (t.m_multi = MW_Define.MultiRate),
                    (t.m_isPlayWinBg = !1),
                    (t.m_canReelStop = !1),
                    (t.m_isFirstStopSound = !0),
                    (t.m_roundIdx = 0),
                    (t.m_totalWin = 0),
                    (t.m_eftWin = null),
                    (t.m_fgTotalRound = -1),
                    (t.m_bgmId = null),
                    (t.m_bigWin = null),
                    (t.m_realFeaturesSpinAck = null),
                    (t.m_isAutoShowFeatures = !1),
                    t
                  );
                }
                _inheritsLoose(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    var e = this;
                    (_cjsExports$1.util.Long = _cjsExports),
                      _cjsExports$1.configure(),
                      AstarteInit(),
                      (node$2.CURRENCY_CHANGE_ENABLE = !0),
                      this.OnRotation(),
                      node.AddOnRotationCb(function () {
                        e.OnRotation();
                      }),
                      (window.onerror = function (e, t, n, i, o) {
                        var r = "-1",
                          s = 0;
                        node$2.APP &&
                          ((r = node$2.APP.GetAID()),
                          (s = Number(node$2.APP.GetApiID())));
                        var l = node$d.FormErrorParams(
                          r,
                          s,
                          Number(node$2.NOW_GAME_ID),
                          MW_Define.Ver,
                          o
                        );
                        node$d.SendErrorLog(l);
                      }),
                      (node$2.IsInMG = function () {
                        return !MW_Define.IsInFG;
                      });
                  }),
                  (n.PlayNormalBG = function () {
                    (this.IsPlayWinBg = !1),
                      this.m_mgBgAnimL.play("MG_L"),
                      this.m_mgBgAnimS.play("MG_S"),
                      this.m_fgBgAnimL.play("FG_L"),
                      this.m_fgBgAnimS.play("FG_S");
                  }),
                  (n.PlayWinBG = function () {
                    (this.IsPlayWinBg = !0),
                      this.m_mgBgAnimL.play("MG_L_Win"),
                      this.m_mgBgAnimS.play("MG_S_Win"),
                      this.m_fgBgAnimL.play("FG_L_Win"),
                      this.m_fgBgAnimS.play("FG_S_Win");
                  }),
                  (n.start = function () {
                    var e = this;
                    node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                      input.on(Input.EventType.KEY_DOWN, function (t) {
                        switch (t.keyCode) {
                          case KeyCode.SPACE:
                            node$3.SendSpinLog(),
                              node$7.IsShow() ||
                                (node$3 &&
                                  !node$8.IsShowBackpack() &&
                                  (node$3.BtnState != SlotBottomBarState.IDLE ||
                                  node$3.IsAutoSpin
                                    ? e.ClickStop()
                                    : e.ClickSpin()));
                        }
                      });
                    for (var t = 0; t < this.m_multiFgLabels.length; t++)
                      this.m_multiFgLabels[t].string = "3";
                    this.PlayNormalBG();
                    var n = instantiate(this.m_geniePrefab);
                    this.m_genieNode.addChild(n),
                      (this.m_genieSpine = n.getComponent(GenieSpine)),
                      this.m_genieSpine.PlayIdle(),
                      this.SlotReels.Init(this),
                      this.SlotReels.SetPlayStopSoundFunction(function (t) {
                        e.StopSpinFunc(t);
                      }),
                      this.EffectPlate.Init(this);
                    var i = instantiate(this.BigwinPrefab);
                    this.EffectPlate.TransferNode.addChild(i),
                      node.SetZIndex(i, MW_Define.EffectIdx.BIGWIN),
                      (this.BigWin = i.getComponent(BigWin)),
                      this.BigWin.Init();
                    this.m_extraBet.Init(
                      function (t, n) {
                        return new Promise(function (i) {
                          var o = e.m_extraBet.IsExtra ? e.m_multi[1] : 1;
                          (MW_Define.Now_Bet = node.times(
                            node$3.GetNowBetValue(),
                            o
                          )),
                            e.m_slotReels.UpdateLampCoin(),
                            t
                              ? ((e.m_multiNode_L.active = !0),
                                (e.m_multiNode_S.active = !0),
                                e.SetMultiEffect(!0, n),
                                node$3.SetSpinState(
                                  SlotBottomBarState.CLICK_CANCEL
                                ),
                                node$8.SetBuyBonusState(!1))
                              : ((e.m_multiNode_L.active = !1),
                                (e.m_multiNode_S.active = !1),
                                e.SetMultiEffect(!1, n)),
                            i();
                        });
                      },
                      "",
                      "",
                      !1,
                      !0
                    );
                    var o = {};
                    (o[CommonState.WAIT_RES] = new WaitResState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.WAIT_READY] =
                        new WaitReadyState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.UNSHOW_PREPARE] =
                        new UnshowPrepareState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.PLATE_SHOW] =
                        new PlateShowState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.FEATURE_SHOW] =
                        new FeatureShowState(this)),
                      (o[CommonState.IDLE] = new IdleState(this)),
                      (o[CommonState.SPIN] = new SpinState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.CHECK_MYSTERY] =
                        new CheckMysteryState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.MYSTERY] = new MysteryState(
                        this
                      )),
                      (o[MW_Define.GAMEVIEW_STATE.GET_LAMP_AWARD] =
                        new GetLampAwardState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.CHECK_MAX_FLAG] =
                        new CheckMaxFlagState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.AWARD] = new AwardState(
                        this
                      )),
                      (o[MW_Define.GAMEVIEW_STATE.ROUND_SHOW_END] =
                        new RoundShowEndState(this)),
                      (o[CommonState.CHECK_STATE] = new CheckState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.ENTER_FREE] =
                        new EnterFreeState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.LEAVE_FREE] =
                        new LeaveFreeState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.ROUND_END] =
                        new RoundEndState(this)),
                      (o[MW_Define.GAMEVIEW_STATE.MULTI] = new MultiState(
                        this
                      )),
                      node$6.Init(o),
                      node$6.NextState(CommonState.LOGIN),
                      node$b.SetGameCb(this);
                  }),
                  (n.SyncPlate = function () {
                    this.IsSpined && this.m_fakeSpinAck
                      ? (this.OnRecvSpinAck(this.m_fakeSpinAck),
                        (this.m_fakeSpinAck = null))
                      : (this.m_slotReels.SetPlateSymbol([]),
                        node$6.NextState(CommonState.IDLE),
                        node$3.SetSpinState(SlotBottomBarState.IDLE));
                  }),
                  (n.BarTouchCb = function (e) {
                    var t = this,
                      n = e.target.name;
                    switch (n) {
                      case this.m_plateSpineBtn.node.name:
                        if (
                          node$6.Current() != CommonState.IDLE ||
                          node$3.IsAutoSpin
                        )
                          node$6.Current() == MW_Define.GAMEVIEW_STATE.AWARD &&
                          this.m_isSkipEffect
                            ? ((this.m_isSkipEffect = !1),
                              node$3.IsAutoSpin
                                ? node$3.SetSpinState(
                                    SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                                  )
                                : node$3.SetSpinState(
                                    SlotBottomBarState.CLICK_STOP
                                  ))
                            : this.ClickStop();
                        else if (this.m_isFirstPlateSpin) {
                          this.m_isFirstPlateSpin = !1;
                          var i = {};
                          (i.contextKey =
                            node$2.StringKey.MSGBOX_TOUCHPANEL_SPIN),
                            (i.titleKey =
                              node$2.StringKey.MSGBOX_TITLE_SYSTEM_INFO),
                            (i.showCancelBtn = !1),
                            (i.showConfirmBtn = !0),
                            (i.showCloseBtn = !0),
                            (i.confirmCB = function () {
                              t.ClickSpin();
                            }),
                            node$7.PushMessageBoxSetting(i);
                        } else this.ClickSpin();
                        break;
                      case BottomBar_UIName.BTN_SPIN:
                        this.ClickSpin();
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
                        node$3.IsAutoSpin &&
                          node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL),
                          node$3.ShowAutoplaySettingView(
                            node.strip(node$3.GetChips())
                          );
                        break;
                      case BottomBar_UIName.BTN_AUTOSTOP_C:
                      case BottomBar_UIName.BTN_AUTOSTOP:
                        node$3.ShowAutoPlayState(!1),
                          node$6.Current() === MW_Define.GAMEVIEW_STATE.AWARD
                            ? node$3.SetSpinState(SlotBottomBarState.START_SPIN)
                            : node$3.SetSpinState(
                                SlotBottomBarState.CLICK_CANCEL
                              );
                        break;
                      case BetValueChange:
                        var o = this.m_extraBet.IsExtra ? this.m_multi[1] : 1;
                        (MW_Define.Now_Bet = node.times(
                          node$3.GetNowBetValue(),
                          o
                        )),
                          this.m_slotReels.UpdateLampCoin(),
                          this.SetMultiBetHint();
                        break;
                      default:
                        var r = Number(n);
                        if (-1 === r) {
                          var s = node$3.GetNowBetValue();
                          r = node$3.FindBetIndexByValue(s);
                        }
                        var l = node$3.GetBetList();
                        if (!isNaN(r) && r < l.length) {
                          var a = this.m_extraBet.IsExtra ? this.m_multi[1] : 1;
                          (MW_Define.Now_Bet = node.times(
                            node$3.GetNowBetValue(),
                            a
                          )),
                            this.m_slotReels.UpdateLampCoin(),
                            this.SetMultiBetHint();
                        }
                    }
                  }),
                  (n.SetMultiBetHint = function () {
                    for (
                      var e = node$3.GetNowBetIndex(),
                        t = node$3.GetBetList(),
                        n = -1 === e ? node$3.GetNowBetValue() : t[e],
                        i = node.times(n, this.m_multi[1]),
                        o = node.FormatNumberThousands(
                          i,
                          node.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO
                        ),
                        r = 0;
                      r < this.m_multiBetLabels.length;
                      r++
                    )
                      this.m_multiBetLabels[r].string = o;
                  }),
                  (n.ChangeBetMode = function (e, t) {}),
                  (n.SetMultiEffect = function (e, t) {
                    var n = this;
                    if (
                      (void 0 === t && (t = !1),
                      Tween.stopAllByTarget(this.m_multiOnAnimL.node),
                      Tween.stopAllByTarget(this.m_multiOnAnimS.node),
                      e)
                    ) {
                      var i = this.m_multiOnAnimL.getState(
                        MultiEffectAnimName.L.Start
                      );
                      i.play,
                        tween(this.m_multiOnAnimL.node)
                          .delay(i.duration)
                          .call(function () {
                            n.m_multiOnAnimL.play(MultiEffectAnimName.L.Loop);
                          })
                          .start();
                      var o = this.m_multiOnAnimS.getState(
                        MultiEffectAnimName.S.Start
                      );
                      o.play,
                        tween(this.m_multiOnAnimS.node)
                          .delay(o.duration)
                          .call(function () {
                            n.m_multiOnAnimS.play(MultiEffectAnimName.S.Loop);
                          })
                          .start(),
                        t || node$6.NextState(MW_Define.GAMEVIEW_STATE.MULTI);
                    } else
                      this.m_multiOnAnimL.play(MultiEffectAnimName.L.End),
                        this.m_multiOnAnimS.play(MultiEffectAnimName.S.End);
                  }),
                  (n.IsBackpackPass = function () {
                    return node$e.IsBackpackPass();
                  }),
                  (n.ClickSpin = function () {
                    if (
                      !node$8.IsNowInDemoMenu &&
                      node$6.Current() == CommonState.IDLE &&
                      !node$3.IsAutoSpin
                    )
                      if (
                        (node$3.GetChips() >= MW_Define.Now_Bet ||
                          MW_Define.IsInFG ||
                          node$3.IsFreeSpin) &&
                        this.IsBackpackPass() &&
                        !node$f.IsOpen()
                      )
                        node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                          node$g.Dispatch(CommonEventName.SpinReqNotify),
                          node$1.Play(MW_Define.AudioClips.Spin, !1, null, 0.5);
                      else {
                        if (this.IsBackpackPass() && !node$f.IsOpen()) {
                          var e = node$3.GetBetList(),
                            t = this.m_extraBet.IsExtra ? this.m_multi[1] : 1;
                          node.strip(MW_Define.Now_Bet) ==
                            node.times(e[0], t) ||
                          node$3.GetChips() < node.times(e[0], t)
                            ? node$7.ShowMessageBox(
                                node$2.StringKey.MSGBOX_MONEY_NOT_ENOUGH
                              )
                            : node$7.ShowMessageBox(
                                node$2.StringKey
                                  .MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET
                              );
                        }
                        node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1),
                          node$3.SetSpinState(SlotBottomBarState.IDLE),
                          node$6.NextState(CommonState.IDLE),
                          this.m_slotReels.SetPlateSymbol([]);
                      }
                  }),
                  (n.ClickStop = function () {
                    if (!node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin)) {
                      var e = node$6.Current();
                      e == CommonState.SPIN
                        ? node$3.IsAutoSpin
                          ? node$3.IsAutoSpin &&
                            !this.m_isHardStop &&
                            (this.m_slotReels.SetIsClickStopBtn(),
                            node$3.SetSpinState(
                              SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                            ))
                          : (this.m_slotReels.SetIsClickStopBtn(),
                            node$3.SetSpinState(SlotBottomBarState.CLICK_STOP))
                        : e == MW_Define.GAMEVIEW_STATE.CHECK_MYSTERY
                        ? this.CanReelStop &&
                          (node$3.IsAutoSpin
                            ? node$3.IsAutoSpin &&
                              !this.m_isHardStop &&
                              (this.m_slotReels.SetIsClickStopBtn(),
                              node$3.SetSpinState(
                                SlotBottomBarState.CLICK_STOP_IN_AUTOPLAY
                              ))
                            : (this.m_slotReels.SetIsClickStopBtn(),
                              node$3.SetSpinState(
                                SlotBottomBarState.CLICK_STOP
                              )))
                        : e == MW_Define.GAMEVIEW_STATE.AWARD &&
                          this.m_isSkipEffect
                        ? ((this.m_isSkipEffect = !1),
                          node$3.IsAutoSpin,
                          node$3.SetSpinState(SlotBottomBarState.CLICK_STOP))
                        : e == MW_Define.GAMEVIEW_STATE.AWARD &&
                          (this.BigWin.Stop(),
                          node$3.SetSpinState(
                            SlotBottomBarState.CLICK_STOP_NO_AUTO
                          ));
                    }
                  }),
                  (n.OnRotation = function () {
                    log("OnRotation");
                    var e = node$6.Current();
                    if (
                      e == MW_Define.GAMEVIEW_STATE.ENTER_FREE ||
                      e === MW_Define.GAMEVIEW_STATE.PLATE_SHOW
                    ) {
                      var t = screen.windowSize,
                        n = t.width > t.height;
                      if (this.m_isLandscape && !n)
                        return (
                          view.setDesignResolutionSize(
                            WIDTH,
                            HEIGHT,
                            ResolutionPolicy.FIXED_WIDTH
                          ),
                          void (this.m_isChange = !0)
                        );
                      if (!this.m_isLandscape && n)
                        return (
                          view.setDesignResolutionSize(
                            HEIGHT,
                            WIDTH,
                            ResolutionPolicy.FIXED_HEIGHT
                          ),
                          void (this.m_isChange = !0)
                        );
                    }
                    this.m_isChange = !1;
                    var i = screen.windowSize;
                    (this.m_isLandscape = i.width > i.height),
                      this.m_isLandscape
                        ? (i.width / i.height <= WIDTH / HEIGHT
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
                          this.m_rotationAnim.play("MainGame_L"),
                          this.node.getComponent(Animation).play("GameView_L"))
                        : (i.height / i.width <= WIDTH / HEIGHT
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
                          this.m_rotationAnim.play("MainGame_S"),
                          this.node.getComponent(Animation).play("GameView_S")),
                      node$3 &&
                        node$3.OnRotation(
                          this.m_isLandscape,
                          function () {},
                          !0
                        ),
                      node$8 && node$8.OnRotation(this.m_isLandscape, !0),
                      this.EftWin && this.EftWin.OnRatation(this.m_isLandscape),
                      this.m_introComp.OnRotation(this.m_isLandscape),
                      node$7.OnRotate(this.m_isLandscape);
                  }),
                  (n.StopSpinFunc = function (e) {
                    var t = this;
                    if (this.m_spinAck) {
                      var n = function () {
                        t.m_hasSacatterCol[e]
                          ? node$1.Play(MW_Define.AudioClips.Scatter1)
                          : node$1.Play(MW_Define.AudioClips.Reel_Stop);
                      };
                      if (this.m_isHardStop) {
                        0 === e && n();
                      } else
                        MW_Define.IsInFG && this.m_hasWildCol[e]
                          ? node$1.Play(MW_Define.AudioClips.Wild_get)
                          : this.m_slotReels.IsClickStopBtn
                          ? this.IsFirstStopSound &&
                            ((this.IsFirstStopSound = !1), n())
                          : n();
                    }
                  }),
                  (n.SetTxt = function () {
                    var e = this,
                      t = node$5.GetGameAtlas();
                    if (node$5.CurrLang !== node$2.Lang.CN) {
                      for (var n = 0; n < this.m_maxBetSprites.length; n++)
                        (this.m_maxBetSprites[n].spriteFrame =
                          t.getSpriteFrame("MG_specialTXT_01s")),
                          (this.m_multiSprites[n].spriteFrame =
                            0 === n
                              ? t.getSpriteFrame("MG_specialTXT_02")
                              : t.getSpriteFrame("MG_specialTXT_02s"));
                      for (var i = [], o = 0; o < 4; o++)
                        i.push(
                          t.getSpriteFrame(
                            "MG_marqueeTXT_0" + (o + 1).toString()
                          )
                        );
                      this.m_marqueen_L.Init(i), this.m_marqueen_S.Init(i);
                      for (var r = 0; r < this.m_titleSprites.length; r++)
                        this.m_titleSprites[r].spriteFrame =
                          this.m_titleSpriteAtlas.getSpriteFrame(
                            "logo_" + node$5.CurrLang
                          );
                      this.m_totalWaysSprite.spriteFrame =
                        t.getSpriteFrame("ways");
                      for (var s = 0; s < this.m_boardFreeSprites.length; s++)
                        (this.m_boardFreeSprites[s].spriteFrame =
                          t.getSpriteFrame("board_text_free")),
                          (this.m_boardSpinSprites[s].spriteFrame =
                            t.getSpriteFrame("board_text_spin"));
                    } else
                      this.m_marqueen_L.Init(this.m_cnMarqueenSpriteFrames),
                        this.m_marqueen_S.Init(this.m_cnMarqueenSpriteFrames);
                    new Promise(
                      _asyncToGenerator(
                        _regeneratorRuntime().mark(function t(n) {
                          return _regeneratorRuntime().wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    tween(
                                      e.m_logoBaseNodeL.getComponent(UIOpacity)
                                    )
                                      .to(0.5, { opacity: 0 })
                                      .start(),
                                    tween(e.m_logoNodeL.getComponent(UIOpacity))
                                      .to(0.5, { opacity: 0 })
                                      .start(),
                                    (t.next = 5),
                                    node$2.Wait(e.m_marqueen_L, 0.5)
                                  );
                                case 5:
                                  return (
                                    (t.next = 7), e.m_marqueen_L.ShowOnce()
                                  );
                                case 7:
                                  return (
                                    (t.next = 9), node$2.Wait(e.m_marqueen_L, 1)
                                  );
                                case 9:
                                  return (
                                    (t.next = 11), e.m_marqueen_L.ShowOnce()
                                  );
                                case 11:
                                  return (
                                    tween(
                                      e.m_logoBaseNodeL.getComponent(UIOpacity)
                                    )
                                      .to(0.5, { opacity: 255 })
                                      .start(),
                                    tween(e.m_logoNodeL.getComponent(UIOpacity))
                                      .to(0.5, { opacity: 255 })
                                      .start(),
                                    (t.next = 15),
                                    node$2.Wait(e.m_marqueen_L, 5)
                                  );
                                case 15:
                                  t.next = 0;
                                  break;
                                case 17:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      )
                    ),
                      this.m_marqueen_S.ShowForever();
                  }),
                  (n.SettingBottomBar = function () {
                    var e = this;
                    (node$3.VerString =
                      "v_" + node$2.VERSION + "_" + MW_Define.Ver),
                      (node$3.IsSendBetChange = !0),
                      node$3.SetTouchEvet(function (t) {
                        e.BarTouchCb(t);
                      }),
                      node$3.SetWinValue(0),
                      (MW_Define.ShowDisplayValue = function (e) {
                        return node$3.GetDisplayValue(e);
                      }),
                      (this.EftWin = new WinEffect(this.m_isLandscape)),
                      this.EftWin.SetUseEftWinValue(
                        "Fnt/wayWin",
                        [v3(0, 350), v3(0, 165)],
                        30,
                        122
                      ),
                      node$3.SetAutoplayConfirmCb(function (t) {
                        node$g.Dispatch(CommonEventName.SpinReqNotify),
                          (e.AutoplayInfos = JSON.parse(t));
                      }),
                      node$3.SetAutoPlaySettingPanelFreeGameString(
                        node$2.StringKey.AUTO_PLAY_PANEL_ENTER_FREEGAME
                      ),
                      node$3.SetSpinState(SlotBottomBarState.CLICK_CANCEL);
                    var t = this.m_titleSpriteAtlas.getSpriteFrame(
                      "logo_" + node$5.CurrLang
                    );
                    node$3.ShowPlayReady(
                      t,
                      function () {
                        return (
                          node$6.Current() !==
                            MW_Define.GAMEVIEW_STATE.WAIT_READY ||
                          (node$6.NextState(
                            MW_Define.GAMEVIEW_STATE.PLATE_SHOW
                          ),
                          !1)
                        );
                      },
                      function () {
                        node$6.Current() ===
                          MW_Define.GAMEVIEW_STATE.WAIT_READY &&
                          (node$8.IsFeaturesDemo
                            ? node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.FEATURE_SHOW
                              )
                            : node$6.NextState(
                                MW_Define.GAMEVIEW_STATE.PLATE_SHOW
                              ));
                      }
                    ),
                      node$3.SetFollowNode(this.node),
                      node$h.AddCb({
                        StopAutoCb: function () {
                          node$3.ShowAutoPlayState(!1);
                        },
                      }),
                      node.CloseIntroLoading.push(function () {
                        node$b.HasUnshow &&
                          node$6.NextState(
                            MW_Define.GAMEVIEW_STATE.UNSHOW_PREPARE
                          );
                      }),
                      node.CheckSwitchOff(SwitchOffKeyDefine.NoQuickSpin) ||
                        this.m_plateSpineBtn.node.on(
                          Node.EventType.TOUCH_END,
                          function (t) {
                            if ((node$3.SendSpinLog(), node$3.IsAutoSpin))
                              e.BarTouchCb(t);
                            else {
                              var n = !1,
                                i = Date.now();
                              if (null != e.m_lastClickTime)
                                i - e.m_lastClickTime > 1e3 && (n = !0);
                              else (e.m_lastClickTime = i), (n = !0);
                              if (!n) return;
                              e.BarTouchCb(t);
                            }
                          }
                        ),
                      (this.m_multiNode_L.active = !1),
                      (this.m_multiNode_S.active = !1);
                  }),
                  (n.SetGameMode = function (e) {
                    (this.m_mgBgNode.active = e === GameMode.MG),
                      (this.m_fgBgNode.active = e === GameMode.FG);
                    for (var t = 0; t < this.m_mgHintNodes.length; t++)
                      (this.m_mgHintNodes[t].active = e === GameMode.MG),
                        (this.m_fgHintNodes[t].active = e === GameMode.FG);
                  }),
                  (n.SetFgRound = function () {
                    for (var e = 0; e < this.m_fgRoundLabels.length; e++)
                      this.m_fgRoundLabels[e].string = (
                        this.m_fgTotalRound - this.m_roundIdx
                      ).toString();
                  }),
                  (n.update = function (e) {
                    node$6.Tick(e),
                      null != this.m_effectView &&
                        this.m_effectView.OnUpdate(e);
                  }),
                  (n.ShowWild = function () {
                    var e = this.m_spinAck.RoundQueue[this.m_roundIdx].PS;
                    this.m_effectPlate.ShowWild(e);
                  }),
                  (n.ParseAwardTypeFlag = function (e) {
                    return (
                      (this.m_spinAck.RoundQueue[this.m_roundIdx].ATF & e) == e
                    );
                  }),
                  (n.ChangeDemoPlateByRatio = function () {
                    this.RealFeaturesSpinAck = [];
                    var e = node$3.GetBetList()[node$3.FindBetIndexByValue(10)],
                      t = JSON.parse(JSON.stringify(FeaturesAck.FG));
                    this.ChangeWinInfo(t, e), this.RealFeaturesSpinAck.push(t);
                    var n = JSON.parse(JSON.stringify(FeaturesAck.MG));
                    this.ChangeWinInfo(n, e), this.RealFeaturesSpinAck.push(n);
                  }),
                  (n.ChangeWinInfo = function (e, t) {
                    (e.FreeTotalWin = node.times(e.FreeTotalWin, t)),
                      (e.TotalWin = node.times(e.TotalWin, t));
                    for (var n = 0; n < e.RoundQueue.length; n++) {
                      var i = e.RoundQueue[n];
                      if (
                        ((i.RW = node.times(i.RW, t)),
                        (i.WW = node.times(i.WW, t)),
                        (i.LW = node.times(i.LW, t)),
                        i.ADV)
                      )
                        for (var o = 0; o < i.ADV.length; o++) {
                          var r = i.ADV[o];
                          r.WIN = node.times(r.WIN, t);
                        }
                    }
                  }),
                  (n.GetDisplayValue = function (e) {
                    return node$3.GetDisplayValue(e);
                  }),
                  (n.CheckCol = function () {
                    var e = this.m_spinAck.RoundQueue[this.m_roundIdx].PS;
                    if (
                      ((this.m_hasWildCol = [!1, !1, !1, !1, !1, !1]),
                      (this.m_hasSacatterCol = [!1, !1, !1, !1, !1, !1]),
                      MW_Define.IsInFG)
                    ) {
                      for (var t = 0; t < e.length; t++)
                        for (var n = 0; n < e.length; n++)
                          if (e[t][n] === MW_Define.Symbol.WILD) {
                            this.m_hasWildCol[t] = !0;
                            break;
                          }
                    } else {
                      for (var i = 0; i < e.length; i++)
                        for (var o = 0; o < e[i].length; o++)
                          if (e[i][o] === MW_Define.Symbol.SCATTER) {
                            this.m_hasSacatterCol[i] = !0;
                            break;
                          }
                      if (this.m_isHardStop && !this.m_hasSacatterCol[0])
                        for (var r = 1; r < this.m_hasSacatterCol.length; r++)
                          if (this.m_hasSacatterCol[r]) {
                            this.m_hasSacatterCol[0] = !0;
                            break;
                          }
                    }
                  }),
                  (n.OnRecvSpinAck = function (e) {
                    (this.m_spinAck = e.info),
                      node$3.IsAutoSpin &&
                        !node$3.IsHardStop &&
                        node$3.SetSpinState(
                          SlotBottomBarState.CLICK_AUTOPLAY_HARDSTOP
                        ),
                      (this.m_roundIdx = 0),
                      (MW_Define.IsInFG = !1),
                      node$6.NextState(MW_Define.GAMEVIEW_STATE.CHECK_MYSTERY),
                      tween(this.node)
                        .delay(0.15)
                        .call(function () {
                          node$3.SetWinValue(0);
                        })
                        .start();
                  }),
                  (n.ReqMail = function () {
                    node$2.APP && node$d.SendMailReq();
                  }),
                  (n.StartSpin = function () {
                    this.m_slotReels.StartSpin(),
                      node$a.StartSpin(),
                      (this.m_roundIdx = 0),
                      (this.m_totalWin = 0),
                      node$b.HasUnshow &&
                        (this.OnRecvSpinAck(
                          this.ConvertSpinAck(this.m_unshowSpinAck)
                        ),
                        (node$b.HasUnshow = !1),
                        (this.m_unshowSpinAck = null));
                  }),
                  (n.ConvertSpinAck = function (e) {
                    for (
                      var t = {
                          RoundQueue: [],
                          TotalWin: e.TotalWin ? e.TotalWin : 0,
                          FreeTotalWin: e.FreeTotalWin ? e.FreeTotalWin : 0,
                          AckType: e.AckType ? e.AckType : 0,
                          ShowIndex: e.ShowIndex ? e.ShowIndex : "",
                          NowMoney: e.NowMoney ? e.NowMoney : 0,
                          Extra: e.Extra,
                        },
                        n = 0;
                      n < e.RoundQueue.length;
                      n++
                    ) {
                      for (
                        var i = e.RoundQueue[n],
                          o = {
                            PS: [],
                            RW: i.RoundWin ? i.RoundWin : 0,
                            WW: i.WaysWin ? i.WaysWin : 0,
                            LW: i.LampWin ? i.LampWin : 0,
                            ADV: null,
                            ATF: i.AwardTypeFlag ? i.AwardTypeFlag : 0,
                            FRR: i.FreeRemainRound ? i.FreeRemainRound : 0,
                            MT: i.MysteryTarget ? i.MysteryTarget : 0,
                            MaxFlag: i.MaxFlag,
                          },
                          r = 0;
                        r < i.PlateSymbol.length;
                        r++
                      ) {
                        for (
                          var s = [], l = 0;
                          l < i.PlateSymbol[r].Col.length;
                          l++
                        )
                          s.push(i.PlateSymbol[r].Col[l]);
                        o.PS.push(s);
                      }
                      if (i.AwardDataVec && i.AwardDataVec.length > 0) {
                        o.ADV = [];
                        for (var a = 0; a < i.AwardDataVec.length; a++) {
                          for (
                            var u = i.AwardDataVec[a],
                              c = {
                                S: u.Symbol ? u.Symbol : 0,
                                C: u.Count ? u.Count : 0,
                                LN: u.LineNum ? u.LineNum : 0,
                                WIN: u.Win ? u.Win : 0,
                                GV: [],
                              },
                              p = 0;
                            p < u.GridVec.length;
                            p++
                          )
                            c.GV.push({
                              Col: u.GridVec[p].Col ? u.GridVec[p].Col : 0,
                              Row: u.GridVec[p].Row ? u.GridVec[p].Row : 0,
                            });
                          o.ADV.push(c);
                        }
                      }
                      t.RoundQueue.push(o);
                    }
                    return {
                      info: t,
                      ret: 0,
                      type: MW_Define.AckType.spin,
                      stamp: "",
                    };
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
                        this.SetTxt(),
                          this.LoadAudio(),
                          this.SettingBottomBar(),
                          node$3.AutoPlayPanelInit(),
                          node$8.FeaturesInit(
                            [
                              "features/left/spriteFrame",
                              "features/right/spriteFrame",
                            ],
                            [
                              node$5.GetString(
                                MW_Define.StringKey.MW_FEATURES_LEFT
                              ),
                              node$5.GetString(
                                MW_Define.StringKey.MW_FEATURES_RIGHT
                              ),
                            ],
                            3,
                            this.m_titleSpriteAtlas
                          );
                        var i = node$5.GetGameAtlas();
                        if (
                          (node$8.SetFeatruesDesc([
                            i.getSpriteFrame("txt1"),
                            i.getSpriteFrame("txt2"),
                          ]),
                          node$8.CheckFirstFeatures(),
                          node$3.SetTxt(),
                          node$8.SetTxt(),
                          this.OnRotation(),
                          node$3.SetAutoPlayPanelTxt(),
                          node$8.SetCanAutoShowRankboardUI(),
                          node$2.APP)
                        ) {
                          this.ReqMail(),
                            node$8.RecommendNewInit(),
                            node$e.NewInit(function () {
                              n.m_extraBet.IsExtra &&
                                n.m_extraBet.ForceSetExtraBet(!1);
                            }),
                            node$i.NewInit(),
                            node$j.JpManagerInit(),
                            node$j.MhbManagerInit();
                          node$k.NewInit(
                            function () {
                              n.m_extraBet.IsExtra &&
                                n.m_extraBet.ForceSetExtraBet(!1),
                                node$3.SetSpinState(
                                  SlotBottomBarState.CLICK_SPIN
                                ),
                                node$1.Play(
                                  MW_Define.AudioClips.Spin,
                                  !1,
                                  null,
                                  0.5
                                ),
                                node$g.Dispatch(CommonEventName.SpinReqNotify);
                            },
                            function () {
                              node$3.IsAutoSpin && node$3.ShowAutoPlayState(!1);
                            }
                          ),
                            node$8.RankingInit(
                              [
                                node$2.APP.GetAccount(),
                                node$2.APP.GetNickName(),
                              ],
                              node$2.APP.GetAToken(),
                              node.ConvertLanguageToFull(node$5.CurrLang),
                              null,
                              null,
                              function () {
                                n.ReqMail();
                              }
                            ),
                            node$f.Init();
                        }
                        var o = _cjsExports$2.mw3Proto.GameInfoData.decode(t);
                        (this.m_multi = MW_Define.MultiRate),
                          o.Mul && o.Mul.length >= 2 && (this.m_multi = o.Mul);
                        var r = {
                          Multi: this.m_multi,
                          IsMulti: function () {
                            return n.m_extraBet.IsExtra;
                          },
                        };
                        node$3.SetMultiBetInfo(r), this.SetMultiBetHint();
                        var s = this.m_extraBet.IsExtra ? this.m_multi[1] : 1;
                        (MW_Define.Now_Bet = node.times(
                          node$3.GetNowBetValue(),
                          s
                        )),
                          node$3.SetWinValue(0),
                          this.ChangeDemoPlateByRatio(),
                          node$3.SetSpinState(SlotBottomBarState.IDLE);
                        break;
                      case node$2.AckType.lastSpin:
                      case node$2.AckType.spin:
                        var l = _cjsExports$2.mw3Proto.SpinAck.decode(t);
                        log("SpinAck", l),
                          this.OnRecvSpinAck(this.ConvertSpinAck(l));
                        
            SendTestSpinInfo(l, data);
break;
                      case node$2.AckType.unshow:
                        var a = _cjsExports$2.mw3Proto.SpinAck.decode(t);
                        this.m_unshowSpinAck = a;
                    }
                  }),
                  (n.GetSpinInfo = function () {
                    return null;
                  }),
                  (n.CancelSpin = function () {
                    this.m_slotReels.SetIsClickStopBtn(),
                      this.m_slotReels.SetPlateSymbol([]);
                  }),
                  (n.RetryRoundEnd = function () {
                    MW_Define.IsInFG
                      ? node$b.ReqRoundEnd(
                          this.m_roundIdx + 1,
                          this.m_roundIdx >=
                            this.m_spinAck.RoundQueue.length - 1
                        )
                      : node$b.ReqRoundEnd(1, !0);
                  }),
                  (n.LoadAudio = function () {
                    var e = this,
                      t = function e(t, n) {
                        node$2.GameBundle.load(t, function (i, o) {
                          if (i) return error(i.message || i), void e(t, n);
                          n && n(o);
                        });
                      },
                      n = function (n) {
                        if (MW_Define.AudioFilePath.hasOwnProperty(n)) {
                          var i = MW_Define.AudioFilePath[n];
                          t(MW_Define.AudioFileRoot + i, function (t) {
                            (MW_Define.AudioClips[n] = t),
                              "BGM_MG" == n &&
                                (e.m_bgmId = node$1.Play(
                                  MW_Define.AudioClips.BGM_MG,
                                  !0
                                ));
                          });
                        }
                      };
                    for (var i in MW_Define.AudioFilePath) n(i);
                  }),
                  (n.InitExtra = function () {
                    var e = this;
                    node$3.FeaturesDemoInit(
                      function (t) {
                        tween(e.node)
                          .call(function () {
                            node$3.SetSpinState(SlotBottomBarState.CLICK_SPIN),
                              node$6.NextState(CommonState.SPIN);
                          })
                          .delay(0.5)
                          .call(function () {
                            var n = {
                              info: e.m_realFeaturesSpinAck[t],
                              ret: 0,
                              type: MW_Define.AckType.spin,
                            };
                            e.OnRecvSpinAck(n);
                          })
                          .start();
                      },
                      this.m_realFeaturesSpinAck.length,
                      node$3.FindBetIndexByValue(FeatureBetValue),
                      function () {
                        e.IsAutoShowFeatures &&
                          ((e.IsAutoShowFeatures = !1),
                          node$6.NextState(
                            MW_Define.GAMEVIEW_STATE.WAIT_READY
                          ));
                      }
                    ),
                      node$g.Register(CommonEventName.TriggerFreeSpin, this),
                      node$g.Register(
                        CommonEventName.FreeSpinTotalWinEnd,
                        this
                      ),
                      node$g.Register(CommonEventName.OpenExtraBet, this),
                      node$g.Register(CommonEventName.CloseExtraBet, this);
                  }),
                  (n.OnEvent = function (e) {
                    switch (e) {
                      case CommonEventName.CloseExtraBet:
                      case CommonEventName.TriggerFreeSpin:
                        (this.m_multiBtn_L.node.active = !1),
                          (this.m_multiBtn_S.node.active = !1);
                        break;
                      case CommonEventName.OpenExtraBet:
                      case CommonEventName.FreeSpinTotalWinEnd:
                        (this.m_multiBtn_L.node.active = !0),
                          (this.m_multiBtn_S.node.active = !0);
                    }
                  }),
                  _createClass(t, [
                    {
                      key: "IntroComp",
                      get: function () {
                        return this.m_introComp;
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
                      key: "BigwinPrefab",
                      get: function () {
                        return this.m_bigwinPrefab;
                      },
                    },
                    {
                      key: "ExtraBet",
                      get: function () {
                        return this.m_extraBet;
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
                      key: "IsChange",
                      get: function () {
                        return this.m_isChange;
                      },
                    },
                    {
                      key: "IsLandscape",
                      get: function () {
                        return this.m_isLandscape;
                      },
                    },
                    {
                      key: "AutoplayInfos",
                      get: function () {
                        return this.m_autoplayInfos;
                      },
                      set: function (e) {
                        this.m_autoplayInfos = e;
                      },
                    },
                    {
                      key: "IsHardStop",
                      get: function () {
                        return this.m_isHardStop;
                      },
                      set: function (e) {
                        this.m_isHardStop = e;
                      },
                    },
                    {
                      key: "ProcessTick",
                      get: function () {
                        return this.m_processTick;
                      },
                      set: function (e) {
                        this.m_processTick = e;
                      },
                    },
                    {
                      key: "GenieSpine",
                      get: function () {
                        return this.m_genieSpine;
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
                      key: "IsPlayWinBg",
                      get: function () {
                        return this.m_isPlayWinBg;
                      },
                      set: function (e) {
                        this.m_isPlayWinBg = e;
                      },
                    },
                    {
                      key: "CanReelStop",
                      get: function () {
                        return this.m_canReelStop;
                      },
                      set: function (e) {
                        this.m_canReelStop = e;
                      },
                    },
                    {
                      key: "IsFirstStopSound",
                      get: function () {
                        return this.m_isFirstStopSound;
                      },
                      set: function (e) {
                        this.m_isFirstStopSound = e;
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
                      key: "TotalWin",
                      get: function () {
                        return this.m_totalWin;
                      },
                      set: function (e) {
                        this.m_totalWin = e;
                      },
                    },
                    {
                      key: "EftWin",
                      get: function () {
                        return this.m_eftWin;
                      },
                      set: function (e) {
                        this.m_eftWin = e;
                      },
                    },
                    {
                      key: "FgTotalRound",
                      get: function () {
                        return this.m_fgTotalRound;
                      },
                      set: function (e) {
                        this.m_fgTotalRound = e;
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
                      key: "BigWin",
                      get: function () {
                        return this.m_bigWin;
                      },
                      set: function (e) {
                        this.m_bigWin = e;
                      },
                    },
                    {
                      key: "RealFeaturesSpinAck",
                      get: function () {
                        return this.m_realFeaturesSpinAck;
                      },
                      set: function (e) {
                        this.m_realFeaturesSpinAck = e;
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
                  ]),
                  t
                );
              })(Component)),
              (_descriptor$c = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_introComp",
                [_dec$t],
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
                _class2$c.prototype,
                "m_titleSprites",
                [_dec2$a],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor3$6 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_logoNodeL",
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
              (_descriptor4$5 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_logoBaseNodeL",
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
              (_descriptor5$3 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_rotationAnim",
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
                _class2$c.prototype,
                "m_slotReels",
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
                _class2$c.prototype,
                "m_effectPlate",
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
                _class2$c.prototype,
                "m_bigwinPrefab",
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
                _class2$c.prototype,
                "m_barNode",
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
              (_descriptor10 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_plateSpineBtn",
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
                _class2$c.prototype,
                "m_genieNode",
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
                _class2$c.prototype,
                "m_geniePrefab",
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
                _class2$c.prototype,
                "m_mgBgNode",
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
                _class2$c.prototype,
                "m_mgBgAnimL",
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
                _class2$c.prototype,
                "m_mgBgAnimS",
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
                _class2$c.prototype,
                "m_mgHintNodes",
                [_dec16],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor17 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_fgBgNode",
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
                _class2$c.prototype,
                "m_fgBgAnimL",
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
                _class2$c.prototype,
                "m_fgBgAnimS",
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
                _class2$c.prototype,
                "m_fgHintNodes",
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
              (_descriptor21 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_fgRoundLabels",
                [_dec21],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor22 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_extraBet",
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
                _class2$c.prototype,
                "m_multiBtn_L",
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
                _class2$c.prototype,
                "m_multiNode_L",
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
                _class2$c.prototype,
                "m_multiBtn_S",
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
                _class2$c.prototype,
                "m_multiNode_S",
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
                _class2$c.prototype,
                "m_multiOnAnimL",
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
                _class2$c.prototype,
                "m_multiOnAnimS",
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
                _class2$c.prototype,
                "m_multiBetLabels",
                [_dec29],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor30 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_multiFgLabels",
                [_dec30],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor31 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_marqueen_L",
                [_dec31],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor32 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_marqueen_S",
                [_dec32],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor33 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_cnMarqueenSpriteFrames",
                [_dec33],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor34 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_titleSpriteAtlas",
                [_dec34],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor35 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_maxBetSprites",
                [_dec35],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor36 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_multiSprites",
                [_dec36],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor37 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_totalWaysSprite",
                [_dec37],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                }
              )),
              (_descriptor38 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_boardFreeSprites",
                [_dec38],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_descriptor39 = _applyDecoratedDescriptor(
                _class2$c.prototype,
                "m_boardSpinSprites",
                [_dec39],
                {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return [];
                  },
                }
              )),
              (_class$u = _class2$c))
            ) || _class$u),
          _dec$u,
          _class$v;
        cclegacy._RF.pop(),
          cclegacy._RF.push(
            {},
            "de317mbNsNABqEsk35XoH2g",
            "EnterFreeState",
            void 0
          );
        var ccclass$v = _decorator.ccclass,
          EnterFreeState =
            ((_dec$u = ccclass$v("EnterFreeState")),
            _dec$u(
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
                  (n.OnEnter = function () {
                    var e = this;
                    log("game state EnterFreeState"),
                      (MW_Define.IsInFG = !0),
                      null !== this.m_gameView.BgmId &&
                        (node$1.Stop(this.m_gameView.BgmId),
                        (this.m_gameView.BgmId = null)),
                      node$3.SetEnterFree(),
                      this.m_gameView.EffectPlate.CleanSymbolEffect(),
                      this.m_gameView.SlotReels.ShowLight(!0),
                      (this.m_gameView.FgTotalRound =
                        this.m_gameView.SpinAck.RoundQueue[0].FRR),
                      this.m_gameView.SetFgRound(),
                      this.m_gameView.EffectPlate.EnterFree(
                        this.m_gameView.FgTotalRound,
                        this.m_gameView.SpinAck.RoundQueue[0].PS,
                        function () {
                          e.m_gameView.SetGameMode(GameMode.FG);
                        }
                      ).then(function () {
                        node$3.IsAutoSpin &&
                          e.m_gameView.AutoplayInfos &&
                          e.m_gameView.AutoplayInfos.isCheckFree &&
                          node$3.ShowAutoPlayState(!1),
                          (e.m_gameView.BgmId = node$1.Play(
                            MW_Define.AudioClips.BGM_FG,
                            !0
                          )),
                          node$6.NextState(MW_Define.GAMEVIEW_STATE.ROUND_END);
                      });
                  }),
                  (n.OnProcess = function () {}),
                  (n.OnLeave = function () {}),
                  t
                );
              })(BaseState))
            ) || _class$v);
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
