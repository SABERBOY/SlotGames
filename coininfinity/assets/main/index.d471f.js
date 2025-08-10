window.maincoininfinity = location.href.indexOf("https://") > -1 && new URL(location.href).pathname.indexOf("/coininfinity/") == 0 ? "main" : "coininfinitymain";
System.register("chunks:///" + window.maincoininfinity + ".js", ["./index-f53dcc43.js", "cc"], function () {
  "use strict";

  var _0x26bf31;
  var _0x206df9;
  var _0x24d38a;
  var _0x2d2983;
  var _0x274fc4;
  var _0x13e8e2;
  var _0x9e06f2;
  var _0x301f4b;
  var _0x5e8dc1;
  var _0x7f9f85;
  var _0x55c32e;
  var _0x146373;
  var _0x3bac23;
  var _0xd304c7;
  var _0x336c41;
  var _0x5e9a73;
  var _0x59f6ab;
  var _0x819c0;
  var _0x45419b;
  var _0x2d31f9;
  var _0x2274a6;
  var _0x4f5f17;
  var _0x1b05c3;
  var _0x2e10a1;
  var _0x3a9fe8;
  var _0x27551b;
  var _0x40ad63;
  var _0x12c13b;
  var _0xb3307f;
  var _0x294c48;
  var _0x2cc03b;
  var _0x35212e;
  var _0x45b05f;
  var _0x41b4ac;
  var _0x5f556e;
  var _0x1014e2;
  var _0x10787f;
  var _0x8dfa41;
  var _0x4ff5e1;
  var _0x3569ce;
  var _0x95667d;
  var _0x1aac94;
  var _0x1f07b2;
  var _0x5413c9;
  var _0x16a64c;
  var _0x5014fb;
  var _0x3f955c;
  var _0x59d070;
  var _0xad76b8;
  var _0x379292;
  var _0x3acb60;
  var _0x56e4e3;
  var _0xe911b1;
  var _0x5d11dd;
  var _0xe387d3;
  var _0x419a33;
  var _0x5b17cb;
  var _0x599622;
  var _0x212e2b;
  var _0x4ae6a5;
  var _0x3605b1;
  var _0x15e773;
  var _0x51b564;
  var _0x347afd;
  var _0x395ed3;
  var _0x351d92;
  var _0x34655b;
  var _0x5d4bff;
  var _0x375e9d;
  var _0x5d9e2e;
  var _0x3ba089;
  var _0x20b52a;
  var _0xb90af7;
  var _0x3398ed;
  var _0x3ba54e;
  var _0x1d5888;
  var _0x54385c;
  var _0x9b5240;
  var _0x29ed72;
  var _0x23b453;
  var _0x3316f2;
  var _0x2aa542;
  return {
    setters: [function (_0x8ac03e) {
      _0x26bf31 = _0x8ac03e._;
      _0x206df9 = _0x8ac03e.a;
      _0x24d38a = _0x8ac03e.b;
      _0x2d2983 = _0x8ac03e.c;
      _0x274fc4 = _0x8ac03e.d;
      _0x13e8e2 = _0x8ac03e.n;
      _0x9e06f2 = _0x8ac03e.e;
      _0x301f4b = _0x8ac03e.f;
      _0x5e8dc1 = _0x8ac03e.g;
      _0x7f9f85 = _0x8ac03e.h;
      _0x55c32e = _0x8ac03e.S;
      _0x146373 = _0x8ac03e.i;
      _0x3bac23 = _0x8ac03e.j;
      _0xd304c7 = _0x8ac03e.k;
      _0x336c41 = _0x8ac03e.l;
      _0x5e9a73 = _0x8ac03e.m;
      _0x59f6ab = _0x8ac03e.C;
      _0x819c0 = _0x8ac03e.o;
      _0x45419b = _0x8ac03e.p;
      _0x2d31f9 = _0x8ac03e.q;
      _0x2274a6 = _0x8ac03e.r;
      _0x4f5f17 = _0x8ac03e.s;
      _0x1b05c3 = _0x8ac03e.t;
    }, function (_0x90088e) {
      _0x2e10a1 = _0x90088e.cclegacy;
      _0x3a9fe8 = _0x90088e._decorator;
      _0x27551b = _0x90088e.Color;
      _0x40ad63 = _0x90088e.ccenum;
      _0x12c13b = _0x90088e.UITransform;
      _0xb3307f = _0x90088e.Node;
      _0x294c48 = _0x90088e.SpriteFrame;
      _0x2cc03b = _0x90088e.EventHandler;
      _0x35212e = _0x90088e.Vec3;
      _0x45b05f = _0x90088e.Sprite;
      _0x41b4ac = _0x90088e.math;
      _0x5f556e = _0x90088e.assetManager;
      _0x1014e2 = _0x90088e.Label;
      _0x10787f = _0x90088e.lerp;
      _0x8dfa41 = _0x90088e.UIRenderer;
      _0x4ff5e1 = _0x90088e.NodeEventType;
      _0x3569ce = _0x90088e.TransformBit;
      _0x95667d = _0x90088e.Component;
      _0x1aac94 = _0x90088e.Material;
      _0x1f07b2 = _0x90088e.Gradient;
      _0x5413c9 = _0x90088e.v4;
      _0x16a64c = _0x90088e.Texture2D;
      _0x5014fb = _0x90088e.clamp01;
      _0x3f955c = _0x90088e.color;
      _0x59d070 = _0x90088e.EffectAsset;
      _0xad76b8 = _0x90088e.CCInteger;
      _0x379292 = _0x90088e.CCBoolean;
      _0x3acb60 = _0x90088e.CCFloat;
      _0x56e4e3 = _0x90088e.log;
      _0xe911b1 = _0x90088e.ImageAsset;
      _0x5d11dd = _0x90088e.sp;
      _0xe387d3 = _0x90088e.Enum;
      _0x419a33 = _0x90088e.error;
      _0x5b17cb = _0x90088e.instantiate;
      _0x599622 = _0x90088e.Animation;
      _0x212e2b = _0x90088e.AnimationClip;
      _0x4ae6a5 = _0x90088e.tween;
      _0x3605b1 = _0x90088e.v3;
      _0x15e773 = _0x90088e.ParticleSystem2D;
      _0x51b564 = _0x90088e.Vec2;
      _0x347afd = _0x90088e.TweenSystem;
      _0x395ed3 = _0x90088e.Button;
      _0x351d92 = _0x90088e.CCString;
      _0x34655b = _0x90088e.ScrollView;
      _0x5d4bff = _0x90088e.UIOpacity;
      _0x375e9d = _0x90088e.isValid;
      _0x5d9e2e = _0x90088e.v2;
      _0x3ba089 = _0x90088e.director;
      _0x20b52a = _0x90088e.Director;
      _0xb90af7 = _0x90088e.CCClass;
      _0x3398ed = _0x90088e.SpriteAtlas;
      _0x3ba54e = _0x90088e.js;
      _0x1d5888 = _0x90088e.Prefab;
      _0x54385c = _0x90088e.sys;
      _0x9b5240 = _0x90088e.settings;
      _0x29ed72 = _0x90088e.Settings;
      _0x23b453 = _0x90088e.VERSION;
      _0x3316f2 = _0x90088e.find;
      _0x2aa542 = _0x90088e.Size;
    }],
    execute: function () {
      var _0x15144c;
      var _0x45fdc3;
      var _0x22980e;
      var _0x4d9240;
      var _0x3f931a;
      var _0x58c698;
      var _0x4c1a76;
      var _0x5ce5f2;
      var _0x5600ba;
      var _0x3ecf98;
      var _0x292db4;
      var _0x354fb3;
      var _0x54d39d;
      var _0x50b354;
      var _0x284f7e;
      var _0xe71caa;
      var _0x1b0ae0;
      var _0x1b4978;
      var _0x48630d;
      var _0x37a0cf;
      var _0x439125;
      var _0x251e73;
      var _0x19b6c4;
      var _0x1fa1ca;
      var _0x313cb2;
      var _0x516f70;
      var _0x3ea1c2;
      var _0x2d57a6;
      var _0x4f4596;
      var _0x3fd767;
      var _0x207c6c;
      var _0x5aff84;
      var _0x420ce9;
      var _0x36c997;
      var _0x29b859;
      var _0x44fca6;
      var _0xed34ce;
      var _0x415320;
      var _0x5eb940;
      var _0x4f604a;
      var _0x1b4e59;
      var _0x3535e6;
      var _0x2e9076;
      var _0x459379;
      var _0x1a2635;
      var _0x464267;
      var _0x46ea97;
      var _0xa92820;
      _0x2e10a1._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x58c3f7;
      var _0x4a896e;
      var _0x5cc69a;
      var _0x187320 = _0x3a9fe8.ccclass;
      var _0x2b2e76 = _0x3a9fe8.executionOrder;
      var _0x2a397b = _0x3a9fe8.requireComponent;
      var _0x1c5911 = _0x3a9fe8.type;
      var _0x3e38f5 = _0x3a9fe8.executeInEditMode;
      var _0x296dde = _0x3a9fe8.property;
      var _0x11cfd6 = new _0x27551b();
      !function (_0x3e2996) {
        _0x3e2996[_0x3e2996.NONE = 0] = "NONE";
        _0x3e2996[_0x3e2996.COLOR = 1] = "COLOR";
        _0x3e2996[_0x3e2996.SPRITE = 2] = "SPRITE";
        _0x3e2996[_0x3e2996.SCALE = 4] = "SCALE";
        _0x3e2996[_0x3e2996.COLOR_SPRITE = 3] = "COLOR_SPRITE";
        _0x3e2996[_0x3e2996.COLOR_SCALE = 5] = "COLOR_SCALE";
        _0x3e2996[_0x3e2996.SPRITE_SCALE = 6] = "SPRITE_SCALE";
        _0x3e2996[_0x3e2996.ALL = 7] = "ALL";
      }(_0x58c3f7 || (_0x58c3f7 = {}));
      _0x40ad63(_0x58c3f7);
      (function (_0x5c94a8) {
        _0x5c94a8.NORMAL = "normal";
        _0x5c94a8.HOVER = "hover";
        _0x5c94a8.PRESSED = "pressed";
        _0x5c94a8.DISABLED = "disabled";
      })(_0x4a896e || (_0x4a896e = {}));
      (function (_0x2f8172) {
        _0x2f8172.CLICK = "click";
      })(_0x5cc69a || (_0x5cc69a = {}));
      var _0x5b75b0;
      var _0x5b6014;
      var _0xc83d34;
      var _0x5208f1;
      var _0x1efef7;
      var _0xa31903;
      var _0x5be722;
      var _0x5ec0a5;
      var _0x572833;
      var _0x5ae8c9;
      var _0x150288;
      var _0x3eeecc;
      var _0x16d1e7;
      var _0x3e0e0f;
      var _0x248cc4;
      var _0x3d0f13;
      var _0x4ae760;
      var _0x427d65;
      var _0x20c1c9;
      var _0x181529;
      var _0x27a0a3;
      var _0x1a6579;
      var _0x53fd07;
      var _0x22d899;
      var _0x36b1b3;
      var _0x32e79a;
      var _0xa384b6;
      var _0x2e7b62;
      var _0x223180;
      _0x15144c = _0x187320("ButtonPro");
      _0x45fdc3 = _0x2b2e76(110);
      _0x22980e = _0x2a397b(_0x12c13b);
      _0x4d9240 = _0x296dde({
        type: _0xb3307f,
        displayOrder: 0,
        tooltip: "i18n:button.target"
      });
      _0x3f931a = _0x296dde({
        displayOrder: 1,
        tooltip: "i18n:button.interactable"
      });
      _0x58c698 = _0x296dde({
        type: _0x58c3f7,
        displayOrder: 2,
        tooltip: "i18n:button.transition"
      });
      _0x4c1a76 = _0x296dde({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.normal_color"
      });
      _0x5ce5f2 = _0x296dde({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.pressed_color"
      });
      _0x5600ba = _0x296dde({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.hover_color"
      });
      _0x3ecf98 = _0x296dde({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.disabled_color"
      });
      _0x292db4 = _0x296dde({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.duration",
        min: 0,
        max: 10
      });
      _0x354fb3 = _0x296dde({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.zoom_scale"
      });
      _0x54d39d = _0x296dde({
        group: {
          name: "SPRITE"
        },
        type: _0x294c48,
        displayOrder: 3,
        tooltip: "i18n:button.normal_sprite"
      });
      _0x50b354 = _0x296dde({
        group: {
          name: "SPRITE"
        },
        type: _0x294c48,
        displayOrder: 3,
        tooltip: "i18n:button.pressed_sprite"
      });
      _0x284f7e = _0x296dde({
        group: {
          name: "SPRITE"
        },
        type: _0x294c48,
        displayOrder: 3,
        tooltip: "i18n:button.hover_sprite"
      });
      _0xe71caa = _0x296dde({
        group: {
          name: "SPRITE"
        },
        type: _0x294c48,
        displayOrder: 3,
        tooltip: "i18n:button.disabled_sprite"
      });
      _0x1b0ae0 = _0x1c5911([_0x2cc03b]);
      _0x1b4978 = _0x296dde({
        serializable: true,
        displayOrder: 20,
        tooltip: "i18n:button.click_events"
      });
      _0x48630d = _0x296dde({
        serializable: true
      });
      _0x37a0cf = _0x296dde({
        serializable: true
      });
      _0x439125 = _0x296dde({
        serializable: true
      });
      _0x251e73 = _0x296dde({
        serializable: true
      });
      _0x19b6c4 = _0x296dde({
        serializable: true
      });
      _0x1fa1ca = _0x296dde({
        serializable: true
      });
      _0x313cb2 = _0x296dde({
        serializable: true
      });
      _0x516f70 = _0x296dde({
        serializable: true
      });
      _0x3ea1c2 = _0x296dde({
        serializable: true
      });
      _0x2d57a6 = _0x296dde({
        serializable: true
      });
      _0x4f4596 = _0x296dde({
        serializable: true
      });
      _0x3fd767 = _0x296dde({
        serializable: true
      });
      _0x207c6c = _0x296dde({
        serializable: true
      });
      _0x15144c(_0x5aff84 = _0x45fdc3(_0x5aff84 = _0x22980e(_0x5aff84 = _0x3e38f5(((_0xa92820 = function (_0x3f7613) {
        function _0xcdab8b() {
          for (var _0x2147b1, _0x319d53 = arguments.length, _0x1a87d7 = new Array(_0x319d53), _0x4b1ca8 = 0; _0x4b1ca8 < _0x319d53; _0x4b1ca8++) {
            _0x1a87d7[_0x4b1ca8] = arguments[_0x4b1ca8];
          }
          _0x2147b1 = _0x3f7613.call.apply(_0x3f7613, [this].concat(_0x1a87d7)) || this;
          _0x24d38a(_0x2147b1, "clickEvents", _0x36c997, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_interactable", _0x29b859, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_transition", _0x44fca6, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_normalColor", _0xed34ce, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_hoverColor", _0x415320, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_pressedColor", _0x5eb940, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_disabledColor", _0x4f604a, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_normalSprite", _0x1b4e59, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_hoverSprite", _0x3535e6, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_pressedSprite", _0x2e9076, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_disabledSprite", _0x459379, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_duration", _0x1a2635, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_zoomScale", _0x464267, _0x2d2983(_0x2147b1));
          _0x24d38a(_0x2147b1, "_target", _0x46ea97, _0x2d2983(_0x2147b1));
          _0x2147b1._pressed = false;
          _0x2147b1._hovered = false;
          _0x2147b1._fromColor = new _0x27551b();
          _0x2147b1._toColor = new _0x27551b();
          _0x2147b1._time = 0;
          _0x2147b1._transitionFinished = true;
          _0x2147b1._fromScale = new _0x35212e();
          _0x2147b1._toScale = new _0x35212e();
          _0x2147b1._originalScale = null;
          _0x2147b1._sprite = null;
          _0x2147b1._targetScale = new _0x35212e();
          return _0x2147b1;
        }
        _0x206df9(_0xcdab8b, _0x3f7613);
        var _0x269ec7 = _0xcdab8b.prototype;
        _0x269ec7.onLoad = function () {
          if (!this.getComponent(_0x45b05f)) {
            var _0x32b54c = this.addComponent(_0x45b05f);
            if (_0x32b54c) {
              _0x32b54c.sizeMode = _0x45b05f.SizeMode.CUSTOM;
              _0x32b54c.type = _0x45b05f.Type.SLICED;
              var _0x57419d = this.node.getComponent(_0x12c13b);
              _0x57419d && (_0x57419d.contentSize = _0x41b4ac.size(120, 40));
            }
            var _0x1c5661 = _0x5f556e.assets.get("20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941");
            _0x1c5661 && (_0x32b54c && !_0x32b54c.spriteFrame && (_0x32b54c.spriteFrame = _0x1c5661), this._normalSprite || (this._normalSprite = _0x1c5661), this._hoverSprite || (this._hoverSprite = _0x1c5661));
            var _0x1a6b8b = _0x5f556e.assets.get("544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941");
            _0x1a6b8b && (this._pressedSprite || (this._pressedSprite = _0x1a6b8b));
            var _0x538e81 = _0x5f556e.assets.get("951249e0-9f16-456d-8b85-a6ca954da16b@f9941");
            _0x538e81 && (this._disabledSprite || (this._disabledSprite = _0x538e81));
          }
          if (!this.node.getChildByName("Label")) {
            var _0x4a89ff = new _0xb3307f("Label");
            var _0x23b2a6 = _0x4a89ff.addComponent(_0x1014e2);
            _0x23b2a6.node.layer = this.node.layer;
            _0x23b2a6.string = "ButtonPro";
            _0x4a89ff.parent = this.node;
            _0x23b2a6.color = _0x27551b.BLACK;
            _0x23b2a6.fontSize = 20;
          }
        };
        _0x269ec7.__preload = function () {
          this.target || (this.target = this.node);
          var _0x55e400 = this.node.getComponent(_0x45b05f);
          _0x55e400 && (this._normalSprite = _0x55e400.spriteFrame);
          this._applyTarget();
          this._resetState();
        };
        _0x269ec7.onEnable = function () {
          this._registerNodeEvent();
        };
        _0x269ec7.onDisable = function () {
          this._resetState();
          this._unregisterNodeEvent();
        };
        _0x269ec7.onDestroy = function () {
          this.target.isValid && this._unregisterTargetEvent(this.target);
        };
        _0x269ec7.update = function (_0x413f0c) {
          var _0x88b33a = this.target;
          if (!this._transitionFinished && _0x88b33a && (this._transition & _0x58c3f7.COLOR || this._transition & _0x58c3f7.SCALE)) {
            this._time += _0x413f0c;
            var _0x586cbb = 1;
            if (this._duration > 0 && (_0x586cbb = this._time / this._duration), _0x586cbb >= 1 && (_0x586cbb = 1), this._transition & _0x58c3f7.COLOR) {
              var _0xf07888 = _0x88b33a._uiProps.uiComp;
              _0x27551b.lerp(_0x11cfd6, this._fromColor, this._toColor, _0x586cbb);
              _0xf07888 && (_0xf07888.color = _0x11cfd6);
            }
            this.transition & _0x58c3f7.SCALE && (_0x88b33a.getScale(this._targetScale), this._targetScale.x = _0x10787f(this._fromScale.x, this._toScale.x, _0x586cbb), this._targetScale.y = _0x10787f(this._fromScale.y, this._toScale.y, _0x586cbb), _0x88b33a.setScale(this._targetScale));
            1 === _0x586cbb && (this._transitionFinished = true);
          }
        };
        _0x269ec7._resizeNodeToTargetNode = function () {
          if (this.target) {
            this.target._uiProps.uiTransformComp;
          }
        };
        _0x269ec7._resetState = function () {
          this._pressed = false;
          this._hovered = false;
          var _0x5484ac = this.target;
          if (_0x5484ac) {
            var _0x17f024 = this._transition;
            if (_0x17f024 & _0x58c3f7.COLOR && this._interactable) {
              var _0x45fc43 = _0x5484ac.getComponent(_0x8dfa41);
              _0x45fc43 && (_0x45fc43.color = this._normalColor);
            }
            _0x17f024 & _0x58c3f7.SCALE && this._originalScale && _0x5484ac.setScale(this._originalScale);
            this._transitionFinished = true;
          }
        };
        _0x269ec7._registerNodeEvent = function () {
          this.node.on(_0x4ff5e1.TOUCH_START, this._onTouchBegan, this);
          this.node.on(_0x4ff5e1.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(_0x4ff5e1.TOUCH_END, this._onTouchEnded, this);
          this.node.on(_0x4ff5e1.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.on(_0x4ff5e1.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.on(_0x4ff5e1.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x269ec7._registerTargetEvent = function (_0x35052e) {
          _0x35052e.on(_0x4ff5e1.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
        };
        _0x269ec7._unregisterNodeEvent = function () {
          this.node.off(_0x4ff5e1.TOUCH_START, this._onTouchBegan, this);
          this.node.off(_0x4ff5e1.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(_0x4ff5e1.TOUCH_END, this._onTouchEnded, this);
          this.node.off(_0x4ff5e1.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.off(_0x4ff5e1.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.off(_0x4ff5e1.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x269ec7._unregisterTargetEvent = function (_0x1d4372) {
          _0x1d4372.off(_0x4ff5e1.TRANSFORM_CHANGED);
        };
        _0x269ec7._getTargetSprite = function (_0x20d1df) {
          var _0x58da70 = null;
          _0x20d1df && (_0x58da70 = _0x20d1df.getComponent(_0x45b05f));
          return _0x58da70;
        };
        _0x269ec7._applyTarget = function () {
          this.target && (this._sprite = this._getTargetSprite(this.target), this._originalScale || (this._originalScale = new _0x35212e()), _0x35212e.copy(this._originalScale, this.target.getScale()), this._registerTargetEvent(this.target));
        };
        _0x269ec7._onTargetSpriteFrameChanged = function (_0x1ae178) {
          this._transition & _0x58c3f7.SPRITE && this._setCurrentStateSpriteFrame(_0x1ae178.spriteFrame);
        };
        _0x269ec7._setCurrentStateSpriteFrame = function (_0x25561c) {
          if (_0x25561c) {
            switch (this._getButtonState()) {
              case _0x4a896e.NORMAL:
                this._normalSprite = _0x25561c;
                break;
              case _0x4a896e.HOVER:
                this._hoverSprite = _0x25561c;
                break;
              case _0x4a896e.PRESSED:
                this._pressedSprite = _0x25561c;
                break;
              case _0x4a896e.DISABLED:
                this._disabledSprite = _0x25561c;
            }
          }
        };
        _0x269ec7._onTargetColorChanged = function (_0x24106f) {
          this._transition & _0x58c3f7.COLOR && this._setCurrentStateColor(_0x24106f);
        };
        _0x269ec7._setCurrentStateColor = function (_0x18284f) {
          switch (this._getButtonState()) {
            case _0x4a896e.NORMAL:
              this._normalColor = _0x18284f;
              break;
            case _0x4a896e.HOVER:
              this._hoverColor = _0x18284f;
              break;
            case _0x4a896e.PRESSED:
              this._pressedColor = _0x18284f;
              break;
            case _0x4a896e.DISABLED:
              this._disabledColor = _0x18284f;
          }
        };
        _0x269ec7._onTargetTransformChanged = function (_0x2442a9) {
          _0x2442a9 & _0x3569ce.SCALE && this._originalScale && this._transition & _0x58c3f7.SCALE && this._transitionFinished && _0x35212e.copy(this._originalScale, this.target.getScale());
        };
        _0x269ec7._onTouchBegan = function (_0x36c096) {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState(), _0x36c096 && (_0x36c096.propagationStopped = true));
        };
        _0x269ec7._onTouchMove = function (_0x3b932d) {
          if (this._interactable && this.enabledInHierarchy && this._pressed && _0x3b932d) {
            var _0x26426b = _0x3b932d.touch;
            if (_0x26426b) {
              var _0x4c3e65;
              var _0x5d4e9b = this.node._uiProps.uiTransformComp.hitTest(_0x26426b.getLocation());
              if (this._transition & _0x58c3f7.SCALE && this.target && this._originalScale) {
                _0x5d4e9b ? (_0x35212e.copy(this._fromScale, this._originalScale), _0x35212e.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._transitionFinished = false) : (this._time = 0, this._transitionFinished = true, this.target.setScale(this._originalScale));
              } else {
                _0x4c3e65 = _0x5d4e9b ? _0x4a896e.PRESSED : _0x4a896e.NORMAL;
                this._applyTransition(_0x4c3e65);
              }
              _0x3b932d && (_0x3b932d.propagationStopped = true);
            }
          }
        };
        _0x269ec7._onTouchEnded = function (_0x44ca15) {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x2cc03b.emitEvents(this.clickEvents, _0x44ca15), this.node.emit(_0x5cc69a.CLICK, this)), this._pressed = false, this._updateState(), _0x44ca15 && (_0x44ca15.propagationStopped = true));
        };
        _0x269ec7._onTouchCancel = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = false, this._updateState());
        };
        _0x269ec7._onMouseMoveIn = function () {
          !this._pressed && this.interactable && this.enabledInHierarchy && (this._transition & _0x58c3f7.SPRITE && !this._hoverSprite || this._hovered || (this._hovered = true, this._updateState()));
        };
        _0x269ec7._onMouseMoveOut = function () {
          this._hovered && (this._hovered = false, this._updateState());
        };
        _0x269ec7._updateState = function () {
          var _0x84a2a0 = this._getButtonState();
          this._applyTransition(_0x84a2a0);
        };
        _0x269ec7._getButtonState = function () {
          var _0x27850d = _0x4a896e.NORMAL;
          this._interactable ? this._pressed ? _0x27850d = _0x4a896e.PRESSED : this._hovered && (_0x27850d = _0x4a896e.HOVER) : _0x27850d = _0x4a896e.DISABLED;
          return _0x27850d.toString();
        };
        _0x269ec7._updateColorTransition = function (_0x1c7703) {
          var _0x2fa68a;
          var _0x27ffda = this[_0x1c7703 + "Color"];
          var _0x118e63 = null == (_0x2fa68a = this.target) ? undefined : _0x2fa68a.getComponent(_0x8dfa41);
          _0x118e63 && (_0x1c7703 === _0x4a896e.DISABLED ? (_0x118e63.color = _0x27ffda, this._transitionFinished = true) : (this._fromColor = _0x118e63.color.clone(), this._toColor = _0x27ffda, this._time = 0, this._transitionFinished = false));
        };
        _0x269ec7._updateSpriteTransition = function (_0x5b1f8f) {
          var _0x24773d = this[_0x5b1f8f + "Sprite"];
          this._sprite && _0x24773d && (this._sprite.spriteFrame = _0x24773d);
        };
        _0x269ec7._updateScaleTransition = function (_0x5cb71d) {
          this._interactable && (_0x5cb71d === _0x4a896e.PRESSED ? this._zoomUp() : this._zoomBack());
        };
        _0x269ec7._zoomUp = function () {
          this._originalScale && (_0x35212e.copy(this._fromScale, this._originalScale), _0x35212e.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._time = 0, this._transitionFinished = false);
        };
        _0x269ec7._zoomBack = function () {
          this.target && this._originalScale && (_0x35212e.copy(this._fromScale, this.target.getScale()), _0x35212e.copy(this._toScale, this._originalScale), this._time = 0, this._transitionFinished = false);
        };
        _0x269ec7._applyTransition = function (_0x4af743) {
          var _0x44feab = this._transition;
          _0x44feab & _0x58c3f7.COLOR && this._updateColorTransition(_0x4af743);
          _0x44feab & _0x58c3f7.SPRITE && this._updateSpriteTransition(_0x4af743);
          _0x44feab & _0x58c3f7.SCALE && this._updateScaleTransition(_0x4af743);
        };
        _0x269ec7._xrHoverEnter = function () {
          this._onMouseMoveIn();
          this._updateState();
        };
        _0x269ec7._xrHoverExit = function () {
          this._onMouseMoveOut();
          this._pressed && (this._pressed = false, this._updateState());
        };
        _0x269ec7._xrClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState());
        };
        _0x269ec7._xrUnClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x2cc03b.emitEvents(this.clickEvents, this), this.node.emit(_0x5cc69a.CLICK, this)), this._pressed = false, this._updateState());
        };
        _0x274fc4(_0xcdab8b, [{
          key: "target",
          get: function () {
            return this._target || this.node;
          },
          set: function (_0x5dd13d) {
            this._target !== _0x5dd13d && (this._target && this._unregisterTargetEvent(this._target), this._target = _0x5dd13d, this._applyTarget());
          }
        }, {
          key: "interactable",
          get: function () {
            return this._interactable;
          },
          set: function (_0x11b710) {
            this._interactable !== _0x11b710 && (this._interactable = _0x11b710, this._updateState(), this._interactable || this._resetState());
          }
        }, {
          key: "_resizeToTarget",
          set: function (_0x4391e3) {
            _0x4391e3 && this._resizeNodeToTargetNode();
          }
        }, {
          key: "transition",
          get: function () {
            return this._transition;
          },
          set: function (_0x3ed74f) {
            this._transition !== _0x3ed74f && (this._transition & _0x58c3f7.COLOR && this._updateColorTransition(_0x4a896e.NORMAL), this._transition & _0x58c3f7.SPRITE && this._updateSpriteTransition(_0x4a896e.NORMAL), this._transition = _0x3ed74f, this._updateState());
          }
        }, {
          key: "normalColor",
          get: function () {
            return this._normalColor;
          },
          set: function (_0x1fc600) {
            this._normalColor !== _0x1fc600 && (this._normalColor.set(_0x1fc600), this._updateState());
          }
        }, {
          key: "pressedColor",
          get: function () {
            return this._pressedColor;
          },
          set: function (_0x7ce333) {
            this._pressedColor !== _0x7ce333 && this._pressedColor.set(_0x7ce333);
          }
        }, {
          key: "hoverColor",
          get: function () {
            return this._hoverColor;
          },
          set: function (_0x58f43a) {
            this._hoverColor !== _0x58f43a && this._hoverColor.set(_0x58f43a);
          }
        }, {
          key: "disabledColor",
          get: function () {
            return this._disabledColor;
          },
          set: function (_0x231240) {
            this._disabledColor !== _0x231240 && (this._disabledColor.set(_0x231240), this._updateState());
          }
        }, {
          key: "duration",
          get: function () {
            return this._duration;
          },
          set: function (_0xcace6d) {
            this._duration !== _0xcace6d && (this._duration = _0xcace6d);
          }
        }, {
          key: "zoomScale",
          get: function () {
            return this._zoomScale;
          },
          set: function (_0x54e613) {
            this._zoomScale !== _0x54e613 && (this._zoomScale = _0x54e613);
          }
        }, {
          key: "normalSprite",
          get: function () {
            return this._normalSprite;
          },
          set: function (_0x1ee98c) {
            if (this._normalSprite !== _0x1ee98c) {
              this._normalSprite = _0x1ee98c;
              var _0x18a20f = this.node.getComponent(_0x45b05f);
              _0x18a20f && (_0x18a20f.spriteFrame = _0x1ee98c);
              this._updateState();
            }
          }
        }, {
          key: "pressedSprite",
          get: function () {
            return this._pressedSprite;
          },
          set: function (_0x377a64) {
            this._pressedSprite !== _0x377a64 && (this._pressedSprite = _0x377a64, this._updateState());
          }
        }, {
          key: "hoverSprite",
          get: function () {
            return this._hoverSprite;
          },
          set: function (_0x204ccb) {
            this._hoverSprite !== _0x204ccb && (this._hoverSprite = _0x204ccb, this._updateState());
          }
        }, {
          key: "disabledSprite",
          get: function () {
            return this._disabledSprite;
          },
          set: function (_0x183ad8) {
            this._disabledSprite !== _0x183ad8 && (this._disabledSprite = _0x183ad8, this._updateState());
          }
        }]);
        return _0xcdab8b;
      }(_0x95667d)).Transition = _0x58c3f7, _0xa92820.EventType = _0x5cc69a, _0x26bf31((_0x420ce9 = _0xa92820).prototype, "target", [_0x4d9240], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "target"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "interactable", [_0x3f931a], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "interactable"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "transition", [_0x58c698], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "transition"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "normalColor", [_0x4c1a76], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "normalColor"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "pressedColor", [_0x5ce5f2], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "pressedColor"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "hoverColor", [_0x5600ba], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "hoverColor"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "disabledColor", [_0x3ecf98], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "disabledColor"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "duration", [_0x292db4], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "duration"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "zoomScale", [_0x354fb3], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "zoomScale"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "normalSprite", [_0x54d39d], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "normalSprite"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "pressedSprite", [_0x50b354], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "pressedSprite"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "hoverSprite", [_0x284f7e], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "hoverSprite"), _0x420ce9.prototype), _0x26bf31(_0x420ce9.prototype, "disabledSprite", [_0xe71caa], Object.getOwnPropertyDescriptor(_0x420ce9.prototype, "disabledSprite"), _0x420ce9.prototype), _0x36c997 = _0x26bf31(_0x420ce9.prototype, "clickEvents", [_0x1b0ae0, _0x1b4978], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x29b859 = _0x26bf31(_0x420ce9.prototype, "_interactable", [_0x48630d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x44fca6 = _0x26bf31(_0x420ce9.prototype, "_transition", [_0x37a0cf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x58c3f7.NONE;
        }
      }), _0xed34ce = _0x26bf31(_0x420ce9.prototype, "_normalColor", [_0x439125], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x27551b.WHITE.clone();
        }
      }), _0x415320 = _0x26bf31(_0x420ce9.prototype, "_hoverColor", [_0x251e73], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x27551b(211, 211, 211, 255);
        }
      }), _0x5eb940 = _0x26bf31(_0x420ce9.prototype, "_pressedColor", [_0x19b6c4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x27551b.WHITE.clone();
        }
      }), _0x4f604a = _0x26bf31(_0x420ce9.prototype, "_disabledColor", [_0x1fa1ca], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x27551b(124, 124, 124, 255);
        }
      }), _0x1b4e59 = _0x26bf31(_0x420ce9.prototype, "_normalSprite", [_0x313cb2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3535e6 = _0x26bf31(_0x420ce9.prototype, "_hoverSprite", [_0x516f70], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2e9076 = _0x26bf31(_0x420ce9.prototype, "_pressedSprite", [_0x3ea1c2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x459379 = _0x26bf31(_0x420ce9.prototype, "_disabledSprite", [_0x2d57a6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1a2635 = _0x26bf31(_0x420ce9.prototype, "_duration", [_0x4f4596], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _0x464267 = _0x26bf31(_0x420ce9.prototype, "_zoomScale", [_0x3fd767], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.2;
        }
      }), _0x46ea97 = _0x26bf31(_0x420ce9.prototype, "_target", [_0x207c6c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5aff84 = _0x420ce9)) || _0x5aff84) || _0x5aff84) || _0x5aff84);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      var _0x577b10;
      var _0x5b263f;
      var _0x9c7ad3;
      var _0x4c0bc9;
      var _0x2e6b7c;
      var _0x315b16;
      var _0x261af6;
      var _0x246725;
      var _0x59bb18 = _0x3a9fe8.ccclass;
      var _0x508c8e = _0x3a9fe8.property;
      var _0x1f5c74 = _0x3a9fe8.requireComponent;
      var _0x12949a = _0x3a9fe8.executeInEditMode;
      _0x5b75b0 = _0x59bb18("ColorText");
      _0x5b6014 = _0x1f5c74(_0x1014e2);
      _0xc83d34 = _0x508c8e(_0x1aac94);
      _0x5208f1 = _0x508c8e(_0x1f07b2);
      _0x1efef7 = _0x508c8e(_0x27551b);
      _0xa31903 = _0x508c8e({
        tooltip: "使用該元件的自定義材質",
        type: _0x1aac94
      });
      _0x5be722 = _0x508c8e({
        tooltip: "顏色漸變元件",
        type: _0x1f07b2
      });
      _0x5ec0a5 = _0x508c8e({
        tooltip: "正片疊底顏色",
        type: _0x27551b
      });
      _0x572833 = _0x508c8e({
        tooltip: "顏色漸變貼圖的範圍",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x5ae8c9 = _0x508c8e({
        tooltip: "是否垂直漸變顏色"
      });
      _0x150288 = _0x508c8e({
        tooltip: "上內陰影顏色",
        type: _0x27551b
      });
      _0x3eeecc = _0x508c8e({
        tooltip: "下內陰影顏色",
        type: _0x27551b
      });
      _0x16d1e7 = _0x508c8e({
        tooltip: "上內陰影顏色高度 (Pixel)"
      });
      _0x3e0e0f = _0x508c8e({
        tooltip: "下內陰影顏色高度 (Pixel)"
      });
      _0x248cc4 = _0x508c8e({
        tooltip: "上內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x3d0f13 = _0x508c8e({
        tooltip: "下內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x5b75b0(_0x4ae760 = _0x5b6014(_0x4ae760 = _0x12949a((_0x20c1c9 = _0x26bf31((_0x427d65 = function (_0x1df26a) {
        function _0x5e7c9c() {
          for (var _0x113e63, _0x5a06af = arguments.length, _0x66a1c = new Array(_0x5a06af), _0x767d6 = 0; _0x767d6 < _0x5a06af; _0x767d6++) {
            _0x66a1c[_0x767d6] = arguments[_0x767d6];
          }
          _0x113e63 = _0x1df26a.call.apply(_0x1df26a, [this].concat(_0x66a1c)) || this;
          _0x24d38a(_0x113e63, "_textMaterial", _0x20c1c9, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_gradient", _0x181529, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_gradientMultiply", _0x27a0a3, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_gradientShrink", _0x1a6579, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_isVertical", _0x53fd07, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowColor1", _0x22d899, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowColor2", _0x36b1b3, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowHeight1", _0x32e79a, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowHeight2", _0xa384b6, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowRate1", _0x2e7b62, _0x2d2983(_0x113e63));
          _0x24d38a(_0x113e63, "_innerShadowRate2", _0x223180, _0x2d2983(_0x113e63));
          _0x113e63.pixelNum = 128;
          _0x113e63.colorTexture = null;
          _0x113e63.isGradientChanged = true;
          return _0x113e63;
        }
        _0x206df9(_0x5e7c9c, _0x1df26a);
        var _0x3d372c = _0x5e7c9c.prototype;
        _0x3d372c.onLoad = function () {
          var _0x26ff50 = this.node.getComponent(_0x1014e2);
          null !== _0x26ff50.customMaterial && (_0x26ff50.customMaterial !== _0x26ff50.sharedMaterial && _0x26ff50.customMaterial.destroy(), _0x26ff50.customMaterial = null);
          _0x26ff50.color = _0x27551b.WHITE;
          null === this._textMaterial && console.warn("ColorText.textMaterial should be not null.");
        };
        _0x3d372c.onEnable = function () {
          this.reset();
        };
        _0x3d372c.onDestroy = function () {
          var _0x3c044b;
          null == (_0x3c044b = this.colorTexture) || _0x3c044b.destroy();
          this.colorTexture = null;
        };
        _0x3d372c.reset = function () {
          null === this.colorTexture && (this.colorTexture = this.createColorTexture());
          true === this.isGradientChanged && (this.isGradientChanged = false, this.updateColorTexture());
          var _0x32609d = this.node.getComponent(_0x1014e2);
          var _0x3fb199 = _0x32609d.customMaterial;
          if (!_0x3fb199 && this._textMaterial && ((_0x3fb199 = new _0x1aac94()).copy(this._textMaterial), _0x32609d.customMaterial = _0x3fb199), _0x3fb199) {
            _0x3fb199.setProperty("gradientMap", this.colorTexture);
            _0x3fb199.setProperty("gradientMultiply", this._gradientMultiply);
            _0x3fb199.setProperty("gradientShrink", this._gradientShrink);
            _0x3fb199.setProperty("innerShadow1", this._innerShadowColor1);
            _0x3fb199.setProperty("innerShadow2", this._innerShadowColor2);
            var _0x1aa1e5 = 0;
            var _0x37e1d8 = 0;
            var _0x5b8770 = this.node.getComponent(_0x12c13b).contentSize;
            _0x5b8770.height > 0 && (_0x1aa1e5 = this._innerShadowHeight1 / _0x5b8770.height, _0x37e1d8 = this._innerShadowHeight2 / _0x5b8770.height);
            var _0xb5f264 = _0x5413c9(_0x1aa1e5, _0x37e1d8, this._innerShadowRate1, this._innerShadowRate2);
            _0x3fb199.setProperty("innerShadowParam", _0xb5f264);
          }
        };
        _0x3d372c.createColorTexture = function () {
          var _0x5f0f83 = new _0x16a64c();
          var _0x275483 = this.pixelNum;
          var _0x40d8b8 = 1;
          true === this._isVertical && (_0x40d8b8 = _0x275483, _0x275483 = 1);
          _0x5f0f83.reset({
            width: _0x275483,
            height: _0x40d8b8,
            format: _0x16a64c.PixelFormat.RGBA8888,
            mipmapLevel: 0
          });
          _0x5f0f83.setWrapMode(_0x16a64c.WrapMode.CLAMP_TO_EDGE, _0x16a64c.WrapMode.CLAMP_TO_EDGE);
          _0x5f0f83.setFilters(_0x16a64c.Filter.LINEAR, _0x16a64c.Filter.LINEAR);
          return _0x5f0f83;
        };
        _0x3d372c.updateColorTexture = function () {
          for (var _0x1a2da4 = this.pixelNum, _0x3b8b89 = new Uint8ClampedArray(4 * _0x1a2da4), _0x3bc37a = 0, _0x2af41c = this._gradient, _0x3bade2 = 0; _0x3bade2 < _0x1a2da4; ++_0x3bade2) {
            var _0x385042 = _0x2af41c.evaluate(_0x3bade2 / _0x1a2da4);
            _0x3b8b89[_0x3bc37a++] = _0x385042.r;
            _0x3b8b89[_0x3bc37a++] = _0x385042.g;
            _0x3b8b89[_0x3bc37a++] = _0x385042.b;
            _0x3b8b89[_0x3bc37a++] = _0x385042.a;
          }
          var _0xfbb804 = this.colorTexture;
          _0xfbb804.uploadData(_0x3b8b89, 0, 0);
          _0xfbb804.updateImage();
        };
        _0x274fc4(_0x5e7c9c, [{
          key: "textMaterial",
          get: function () {
            return this._textMaterial;
          },
          set: function (_0x2c8e71) {
            this._textMaterial = _0x2c8e71;
            this.reset();
          }
        }, {
          key: "gradient",
          get: function () {
            return this._gradient;
          },
          set: function (_0x5a83e6) {
            this.isGradientChanged = true;
            this._gradient = _0x5a83e6;
            this.reset();
          }
        }, {
          key: "gradientMultiply",
          get: function () {
            return this._gradientMultiply;
          },
          set: function (_0x1108ae) {
            this._gradientMultiply = _0x1108ae;
            this.reset();
          }
        }, {
          key: "gradientShrink",
          get: function () {
            return this._gradientShrink;
          },
          set: function (_0x206a6a) {
            this._gradientShrink = _0x206a6a;
            this.reset();
          }
        }, {
          key: "isVertical",
          get: function () {
            return this._isVertical;
          },
          set: function (_0xf3a906) {
            var _0xf1d52d;
            this._isVertical !== _0xf3a906 && (null == (_0xf1d52d = this.colorTexture) || _0xf1d52d.destroy(), this.colorTexture = null);
            this._isVertical = _0xf3a906;
            this.reset();
          }
        }, {
          key: "innerShadowColor1",
          get: function () {
            return this._innerShadowColor1;
          },
          set: function (_0x1aae1f) {
            this._innerShadowColor1.set(_0x1aae1f);
            this.reset();
          }
        }, {
          key: "innerShadowColor2",
          get: function () {
            return this._innerShadowColor2;
          },
          set: function (_0x154ea9) {
            this._innerShadowColor2.set(_0x154ea9);
            this.reset();
          }
        }, {
          key: "innerShadowHeight1",
          get: function () {
            return this._innerShadowHeight1;
          },
          set: function (_0x442070) {
            this._innerShadowHeight1 = _0x442070;
            this.reset();
          }
        }, {
          key: "innerShadowHeight2",
          get: function () {
            return this._innerShadowHeight2;
          },
          set: function (_0x1f43cd) {
            this._innerShadowHeight2 = _0x1f43cd;
            this.reset();
          }
        }, {
          key: "innerShadowRate1",
          get: function () {
            return this._innerShadowRate1;
          },
          set: function (_0x18e9fc) {
            this._innerShadowRate1 = _0x5014fb(_0x18e9fc);
            this.reset();
          }
        }, {
          key: "innerShadowRate2",
          get: function () {
            return this._innerShadowRate2;
          },
          set: function (_0x33ce74) {
            this._innerShadowRate2 = _0x33ce74;
            this.reset();
          }
        }]);
        return _0x5e7c9c;
      }(_0x95667d)).prototype, "_textMaterial", [_0xc83d34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x181529 = _0x26bf31(_0x427d65.prototype, "_gradient", [_0x5208f1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x1f07b2();
        }
      }), _0x27a0a3 = _0x26bf31(_0x427d65.prototype, "_gradientMultiply", [_0x1efef7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3f955c(255, 255, 255, 255);
        }
      }), _0x1a6579 = _0x26bf31(_0x427d65.prototype, "_gradientShrink", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.15;
        }
      }), _0x53fd07 = _0x26bf31(_0x427d65.prototype, "_isVertical", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x26bf31(_0x427d65.prototype, "textMaterial", [_0xa31903], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "textMaterial"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "gradient", [_0x5be722], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "gradient"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "gradientMultiply", [_0x5ec0a5], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "gradientMultiply"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "gradientShrink", [_0x572833], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "gradientShrink"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "isVertical", [_0x5ae8c9], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "isVertical"), _0x427d65.prototype), _0x22d899 = _0x26bf31(_0x427d65.prototype, "_innerShadowColor1", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3f955c(255, 255, 255, 255);
        }
      }), _0x36b1b3 = _0x26bf31(_0x427d65.prototype, "_innerShadowColor2", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3f955c(255, 255, 255, 255);
        }
      }), _0x32e79a = _0x26bf31(_0x427d65.prototype, "_innerShadowHeight1", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0xa384b6 = _0x26bf31(_0x427d65.prototype, "_innerShadowHeight2", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _0x2e7b62 = _0x26bf31(_0x427d65.prototype, "_innerShadowRate1", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x223180 = _0x26bf31(_0x427d65.prototype, "_innerShadowRate2", [_0x508c8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x26bf31(_0x427d65.prototype, "innerShadowColor1", [_0x150288], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowColor1"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "innerShadowColor2", [_0x3eeecc], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowColor2"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "innerShadowHeight1", [_0x16d1e7], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowHeight1"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "innerShadowHeight2", [_0x3e0e0f], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowHeight2"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "innerShadowRate1", [_0x248cc4], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowRate1"), _0x427d65.prototype), _0x26bf31(_0x427d65.prototype, "innerShadowRate2", [_0x3d0f13], Object.getOwnPropertyDescriptor(_0x427d65.prototype, "innerShadowRate2"), _0x427d65.prototype), _0x4ae760 = _0x427d65)) || _0x4ae760) || _0x4ae760);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x3cfdd8;
      var _0x152570 = _0x3a9fe8.ccclass;
      var _0xd150cc = _0x3a9fe8.property;
      var _0xa34537 = _0x3a9fe8.executeInEditMode;
      _0x577b10 = _0x152570("ColorFadingUI");
      _0x5b263f = _0xd150cc({
        type: _0x59d070,
        tooltip: "Color Fading 預設 shader"
      });
      _0x9c7ad3 = _0xd150cc({
        type: _0xad76b8,
        tooltip: "Gradient Texture Size"
      });
      _0x4c0bc9 = _0xd150cc({
        type: _0x379292,
        tooltip: "是否使用alpha test, Spine建議開啟"
      });
      _0x2e6b7c = _0xd150cc({
        type: _0x3acb60,
        tooltip: "混合比例，0~1之間"
      });
      _0x315b16 = _0xd150cc({
        type: _0x1f07b2,
        tooltip: "當前Gradient"
      });
      _0x577b10(_0x261af6 = _0xa34537((_0x26bf31((_0x246725 = function (_0x53a9b9) {
        function _0x367214() {
          for (var _0x4a685f, _0x29fca5 = arguments.length, _0x434c66 = new Array(_0x29fca5), _0x24a051 = 0; _0x24a051 < _0x29fca5; _0x24a051++) {
            _0x434c66[_0x24a051] = arguments[_0x24a051];
          }
          (_0x4a685f = _0x53a9b9.call.apply(_0x53a9b9, [this].concat(_0x434c66)) || this).m_colorFadingEffect = null;
          _0x4a685f.m_gradientTextureSize = 64;
          _0x4a685f.m_currGradient = new _0x1f07b2();
          _0x4a685f.m_mixRate = 0;
          _0x4a685f.m_useAlphaTest = false;
          _0x4a685f.m_tex = new _0x16a64c();
          _0x4a685f.m_use_colorfading = true;
          _0x4a685f.m_renderComponent = null;
          _0x4a685f.m_copyEffect = null;
          return _0x4a685f;
        }
        _0x206df9(_0x367214, _0x53a9b9);
        var _0x2eb1e9 = _0x367214.prototype;
        _0x2eb1e9.start = function () {
          this.GenerateMat();
        };
        _0x2eb1e9.onDestroy = function () {
          this.m_use_colorfading = false;
        };
        _0x2eb1e9.Init = function (_0x27dd17, _0x368c5d, _0x485e22, _0x103dab, _0x43d938, _0x3c88c1) {
          undefined === _0x485e22 && (_0x485e22 = 0);
          undefined === _0x103dab && (_0x103dab = 64);
          undefined === _0x43d938 && (_0x43d938 = true);
          undefined === _0x3c88c1 && (_0x3c88c1 = false);
          this.ColorFadingEffect = _0x27dd17;
          this.CurrentGradient = _0x368c5d;
          this.UseAlphaTest = _0x3c88c1;
          this.MixRate = _0x485e22;
          this.GradientTextureSize = _0x103dab;
          this.UseColorFadingAPI(_0x43d938);
          this.GenerateMat();
        };
        _0x2eb1e9.UseColorFadingAPI = function (_0x37f574) {
          this.m_use_colorfading = _0x37f574;
          this.GenerateMat();
        };
        _0x2eb1e9.ResetGradient = function () {
          this.m_mixRate = 1;
          this.m_currGradient = new _0x1f07b2();
          this.LoadTexture();
        };
        _0x2eb1e9.GenerateMat = function () {
          var _0x4c4575 = this.GetRenderComponent();
          if (null != _0x4c4575 && null != this.m_colorFadingEffect) {
            var _0x22b234 = new _0x1aac94();
            _0x22b234.initialize({
              effectAsset: this.m_colorFadingEffect,
              technique: 0,
              defines: {
                USE_COLOR_FADING: this.m_use_colorfading,
                USE_ALPHA_TEST: this.m_useAlphaTest
              }
            });
            _0x4c4575.customMaterial = _0x22b234;
            this.LoadTexture();
          }
        };
        _0x2eb1e9.LoadTexture = function () {
          if (null == this.m_colorFadingEffect) {
            _0x56e4e3("Warning! No effect asset loaded!");
          } else {
            _0x56e4e3("loadTexture", this.m_currGradient);
            this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
            for (var _0x22d85d = [], _0x121255 = 1 / this.m_gradientTextureSize, _0x32fa69 = 0; _0x32fa69 <= 1; _0x32fa69++) {
              for (var _0x4dafd6 = 0; _0x4dafd6 <= this.m_gradientTextureSize; _0x4dafd6 += _0x121255) {
                var _0x2cf066 = new _0x27551b();
                _0x2cf066 = this.m_currGradient.evaluate(_0x4dafd6);
                _0x22d85d.push(_0x2cf066.r);
                _0x22d85d.push(_0x2cf066.g);
                _0x22d85d.push(_0x2cf066.b);
                _0x22d85d.push(_0x2cf066.a);
              }
            }
            this.CreateTexture(_0x22d85d);
          }
        };
        _0x2eb1e9.CreateTexture = function (_0x45685b) {
          var _0x48cc20 = new Uint8Array(_0x45685b);
          var _0x204807 = new _0xe911b1();
          this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
          _0x204807.reset({
            _data: _0x48cc20,
            width: this.m_gradientTextureSize,
            height: 1,
            format: _0x16a64c.PixelFormat.RGBA8888,
            _compressed: false
          });
          this.m_tex.image = _0x204807;
          this.m_tex.setWrapMode(_0x16a64c.WrapMode.CLAMP_TO_EDGE, _0x16a64c.WrapMode.CLAMP_TO_EDGE);
          this.UpdateMaterial();
        };
        _0x2eb1e9.UpdateMaterial = function () {
          var _0x33f1a2 = this.GetRenderComponent();
          if (null != _0x33f1a2) {
            var _0x55072c = _0x33f1a2.customMaterial;
            _0x55072c && (_0x55072c.setProperty("gradient", this.m_tex), _0x55072c.setProperty("mixRate", this.m_mixRate));
          }
        };
        _0x2eb1e9.GetRenderComponent = function () {
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x45b05f));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x5d11dd.Skeleton));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x1014e2));
          return this.m_renderComponent;
        };
        _0x274fc4(_0x367214, [{
          key: "ColorFadingEffect",
          get: function () {
            return this.m_copyEffect;
          },
          set: function (_0xaec375) {
            null != _0xaec375 && (this.m_colorFadingEffect = _0xaec375);
            this.m_copyEffect = _0xaec375;
          }
        }, {
          key: "GradientTextureSize",
          get: function () {
            return this.m_gradientTextureSize;
          },
          set: function (_0x81ed6f) {
            this.m_gradientTextureSize = _0x81ed6f;
            null != this.m_tex && this.LoadTexture();
          }
        }, {
          key: "UseAlphaTest",
          get: function () {
            return this.m_useAlphaTest;
          },
          set: function (_0x4daa81) {
            this.m_useAlphaTest = _0x4daa81;
          }
        }, {
          key: "MixRate",
          get: function () {
            return this.m_mixRate;
          },
          set: function (_0x120248) {
            if (_0x120248 > 1) {
              this.m_mixRate = 1;
            } else {
              if (_0x120248 < 0) {
                this.m_mixRate = 0;
              } else {
                this.m_mixRate = _0x120248;
                var _0x575fb7 = this.GetRenderComponent();
                if (null != _0x575fb7) {
                  var _0x48214e = _0x575fb7.customMaterial;
                  _0x48214e ? _0x48214e.setProperty("mixRate", this.m_mixRate) : this.GenerateMat();
                }
              }
            }
          }
        }, {
          key: "CurrentGradient",
          get: function () {
            return this.m_currGradient;
          },
          set: function (_0x4db06e) {
            this.m_currGradient = _0x4db06e;
            this.LoadTexture();
          }
        }]);
        return _0x367214;
      }(_0x95667d)).prototype, "ColorFadingEffect", [_0x5b263f], Object.getOwnPropertyDescriptor(_0x246725.prototype, "ColorFadingEffect"), _0x246725.prototype), _0x26bf31(_0x246725.prototype, "GradientTextureSize", [_0x9c7ad3], Object.getOwnPropertyDescriptor(_0x246725.prototype, "GradientTextureSize"), _0x246725.prototype), _0x26bf31(_0x246725.prototype, "UseAlphaTest", [_0x4c0bc9], Object.getOwnPropertyDescriptor(_0x246725.prototype, "UseAlphaTest"), _0x246725.prototype), _0x26bf31(_0x246725.prototype, "MixRate", [_0x2e6b7c], Object.getOwnPropertyDescriptor(_0x246725.prototype, "MixRate"), _0x246725.prototype), _0x26bf31(_0x246725.prototype, "CurrentGradient", [_0x315b16], Object.getOwnPropertyDescriptor(_0x246725.prototype, "CurrentGradient"), _0x246725.prototype), _0x261af6 = _0x246725)) || _0x261af6);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0x3a3109;
      var _0x110009 = (0, _0x3a9fe8.ccclass)(_0x3cfdd8 = function (_0x277c8c) {
        function _0x1e4f0d() {
          for (var _0x35d151, _0x3c60bc = arguments.length, _0x3c768f = new Array(_0x3c60bc), _0x50bda4 = 0; _0x50bda4 < _0x3c60bc; _0x50bda4++) {
            _0x3c768f[_0x50bda4] = arguments[_0x50bda4];
          }
          (_0x35d151 = _0x277c8c.call.apply(_0x277c8c, [this].concat(_0x3c768f)) || this).m_callback = undefined;
          return _0x35d151;
        }
        _0x206df9(_0x1e4f0d, _0x277c8c);
        _0x1e4f0d.Pack = function (_0x19f706, _0x5a2195) {
          _0x19f706.addComponent(_0x1e4f0d);
          _0x19f706.getComponent(_0x1e4f0d).SetCallback(_0x5a2195);
        };
        var _0x1d8e62 = _0x1e4f0d.prototype;
        _0x1d8e62.EvtReciever = function (_0x2a7c9c) {
          _0x56e4e3("AnimEvtReciever: ", _0x2a7c9c);
          this.m_callback ? this.m_callback(_0x2a7c9c) : _0x56e4e3("callback沒有設定，無法處理event: ", _0x2a7c9c);
        };
        _0x1d8e62.triggerAnimationEvent = function (_0x5875bd) {
          _0x56e4e3("triggerAnimationEvent: ", _0x5875bd);
          this.m_callback ? this.m_callback(_0x5875bd) : _0x56e4e3("callback沒有設定，無法處理event: ", _0x5875bd);
        };
        _0x1d8e62.SetCallback = function (_0x70450a) {
          this.m_callback = _0x70450a;
        };
        _0x1d8e62.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x1e4f0d;
      }(_0x95667d)) || _0x3cfdd8;
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var _0x431dd8;
      var _0x4a1baa;
      var _0x2b1257;
      var _0x1385a3;
      var _0x4e6719;
      var _0x4e727b;
      var _0x1b8cf3;
      var _0x55e5f0;
      var _0x379960;
      var _0x1a5497;
      var _0x147727;
      var _0x26e2c0;
      var _0x2881d3;
      var _0x343dca;
      var _0x3f238e;
      var _0x2829b2;
      var _0xedbcf9;
      var _0x5cdeed;
      var _0x4fcc0e = function (_0x4c76e1) {
        function _0xe80412() {
          var _0x5904e5;
          (_0x5904e5 = _0x4c76e1.call(this) || this).m_awardBoardFile = _0xe80412.EFFECT_ROOT + "win/awardBoard";
          _0x5904e5.m_effectList = {};
          _0x5904e5.m_timeLineList = {};
          _0x5904e5.m_winEffCbFunc = null;
          _0x5904e5.m_currentWinEffect = null;
          _0x5904e5.m_currentWinEffectTimeline = null;
          _0x5904e5.m_awardBoard = null;
          _0x5904e5.m_awardBoardTimeline = null;
          _0x5904e5.m_txtWinValue = null;
          _0x5904e5.m_durRollMoneyTick = _0xe80412.MONEY_ROLL_TIME;
          _0x5904e5.m_moneyRealValue = 0;
          _0x5904e5.m_moneyRollValue = 0;
          _0x5904e5.m_bgMaskNode = null;
          _0x5904e5.m_commonGetCoinCbFunc = null;
          _0x5904e5.m_commonGetCoinMidCbFunc = null;
          _0x5904e5.m_commonGetCoinEff = null;
          _0x5904e5.m_commonGetCoinTline = null;
          _0x5904e5.m_updateMoneyEff = null;
          _0x5904e5.m_updateMoneyTline = null;
          _0x5904e5.m_getCoinParticle = null;
          _0x5904e5.m_odds = [3, 5, 10, 20, 30];
          _0x5904e5.m_winEffectFiles = [null, null, _0xe80412.EFFECT_ROOT + _0xe80412.FILE_PATH.BIG_WIN, _0xe80412.EFFECT_ROOT + _0xe80412.FILE_PATH.MEGA_WIN, _0xe80412.EFFECT_ROOT + _0xe80412.FILE_PATH.SUPER_WIN];
          _0x5904e5.m_coinEffects = [2, 3, 5, 5, 5];
          _0x5904e5.m_coinTimes = [2, 2, 5, 5, 5];
          _0x5904e5.m_soundNameByOdds = [];
          _0x5904e5.m_isAutoCheckFloat = false;
          _0x5904e5.m_rotateCoins = {};
          _0x5904e5.m_coinEffectNode = undefined;
          _0x5904e5.m_loadedSound = undefined;
          _0x5904e5.m_isLandscape = false;
          _0x5904e5.m_LandscapeRate = 1;
          _0x5904e5.m_winType = undefined;
          _0x5904e5.m_nowPlaySoundID = null;
          _0x5904e5.m_loadedSound = false;
          return _0x5904e5;
        }
        _0x206df9(_0xe80412, _0x4c76e1);
        var _0x4744fd = _0xe80412.prototype;
        _0x4744fd.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x4744fd.OnUpdate = function (_0x49a6d3) {
          this.RollWinMoney(_0x49a6d3);
        };
        _0x4744fd.ShowWinAndCoinEffect = function (_0x8c6cbc, _0x465fd7, _0x8c06c1) {
          undefined === _0x8c06c1 && (_0x8c06c1 = null);
          _0x8c06c1 = _0x8c06c1 || null;
          var _0x1d6b9b = _0x13e8e2.GetManagerId(_0x8c06c1);
          this.ShowWinEffect(_0x8c6cbc, _0x1d6b9b);
          undefined !== _0x8c6cbc.playCoinAtWinEffect && true !== _0x8c6cbc.playCoinAtWinEffect || this.playCoinEffect(_0x465fd7, _0x1d6b9b);
          _0x13e8e2.StartLoad(_0x1d6b9b);
        };
        _0x4744fd.ShowWinEffect = function (_0x4dd4c9, _0x181b9c) {
          var _0x3709e3 = this;
          undefined === _0x181b9c && (_0x181b9c = -1);
          var _0xd96d0b = _0x4dd4c9.effectFile;
          var _0x1095c5 = _0x4dd4c9.winValue;
          var _0x260c8d = _0x4dd4c9.cbFunc;
          var _0x236b45 = _0x4dd4c9.yPos;
          var _0xb80d3c = _0x4dd4c9.deltaY;
          var _0x57f6e5 = _0x4dd4c9.cbFuncBtoM;
          var _0x639fb6 = _0x4dd4c9.cbFuncMtoS;
          var _0x3ec70d = _0x4dd4c9.cbFuncPlaying;
          var _0x108628 = _0x4dd4c9.isLoop || false;
          var _0x169184 = _0x4dd4c9.rollTime;
          if (null != _0x1095c5) {
            var _0x4eca51 = function () {
              _0x3709e3.m_bgMaskNode && (_0x3709e3.m_bgMaskNode.active = true);
              _0x56e4e3("LoadPrefabManager CB", _0x1095c5);
              _0x236b45 = null != _0x236b45 && _0x236b45 || _0xe80412.DEFAULT_Y;
              _0x3709e3.m_effectList[_0xd96d0b].setPosition(_0x3605b1(_0xe80412.DesignSize.width / 2, _0x236b45));
              _0x3709e3.m_effectList[_0xd96d0b].active = true;
              _0x3709e3.m_timeLineList[_0xd96d0b].play(_0xe80412.ANI_LABEL.ACT);
              _0x3709e3.m_currentWinEffect = _0x3709e3.m_effectList[_0xd96d0b];
              _0x3709e3.m_currentWinEffectTimeline = _0x3709e3.m_timeLineList[_0xd96d0b];
              _0x3709e3.m_currentWinEffectTimeline.name = _0xd96d0b;
              _0xb80d3c = _0xd96d0b == _0xe80412.FILE_PATH.JACKPOT ? 180 : null != _0xb80d3c ? _0xb80d3c : 230;
              _0x3709e3.m_awardBoard.setPosition(_0x3605b1(_0xe80412.DesignSize.width / 2, _0x236b45 - _0xb80d3c));
              _0x3709e3.m_awardBoard.active = true;
              _0x3709e3.m_awardBoardTimeline.play(_0xe80412.ANI_LABEL.ACT);
              _0x3709e3.SetWinValue(_0x1095c5, _0x169184);
              null == _0x3ec70d || _0x3ec70d();
            };
            var _0x285e7d = _0x181b9c;
            -1 == _0x181b9c && (_0x285e7d = _0x13e8e2.GetManagerId(_0x4eca51));
            this.m_winEffCbFunc = _0x260c8d;
            null == this.m_effectList[_0xd96d0b] ? (_0x13e8e2.AddLoad(_0x285e7d), _0x9e06f2.GameBundle.load(_0xd96d0b, function (_0x2d27c1, _0x3bbfb3) {
              if (_0x2d27c1) {
                _0x419a33(_0x2d27c1.message || _0x2d27c1);
              } else {
                var _0x4c78c8 = _0x5b17cb(_0x3bbfb3);
                _0x4c78c8.active = false;
                _0x3709e3.addChild(_0x4c78c8);
                _0x301f4b.SetZIndex(_0x4c78c8, _0xe80412.EFF_ZORDER.WIN_EFFECT);
                var _0x1e5723 = _0x4c78c8.getComponent(_0x599622);
                _0x110009.Pack(_0x4c78c8, function (_0x3906c5) {
                  if (_0x3906c5 == _0xe80412.ANI_FRAME_EVENT.ENDING) {
                    _0x3709e3.m_awardBoard && _0x3709e3.m_awardBoard.active && _0x3709e3.m_awardBoardTimeline.play(_0xe80412.ANI_LABEL.ENDING);
                  } else {
                    if (_0x3906c5 == _0xe80412.ANI_FRAME_EVENT.LOOP) {
                      if (_0x108628) {
                        _0x1e5723.play(_0xe80412.ANI_LABEL.LOOP);
                        _0x1e5723.getState(_0xe80412.ANI_LABEL.LOOP).wrapMode = _0x212e2b.WrapMode.Loop;
                      }
                    } else {
                      _0x3906c5 == _0xe80412.ANI_FRAME_EVENT.B_TO_M ? (_0x3709e3.m_awardBoard && _0x3709e3.m_awardBoard.active && _0x4ae6a5(_0x3709e3.m_txtWinValue).by(0.25, {
                        scale: _0x3605b1(1.5, 1.5, 1.5)
                      }).by(0.1, {
                        scale: _0x3605b1(0.9, 0.9, 0.9)
                      }).start(), _0x57f6e5 && _0x57f6e5()) : _0x3906c5 == _0xe80412.ANI_FRAME_EVENT.M_TO_S ? (_0x3709e3.m_awardBoard && _0x3709e3.m_awardBoard.active && _0x4ae6a5(_0x3709e3.m_txtWinValue).by(0.25, {
                        scale: _0x3605b1(1.5, 1.5, 1.5)
                      }).by(0.1, {
                        scale: _0x3605b1(0.9, 0.9, 0.9)
                      }).start(), null == _0x639fb6 || _0x639fb6()) : _0x3906c5 == _0xe80412.ANI_FRAME_EVENT.END && (_0x56e4e3("ANI_FRAME_EVENT.END"), _0x3709e3.OnAnimationEnd(), _0x3709e3.m_winEffCbFunc && _0x3709e3.m_winEffCbFunc());
                    }
                  }
                });
                _0x4c78c8.active = false;
                _0x3709e3.m_effectList[_0xd96d0b] = _0x4c78c8;
                _0x3709e3.m_timeLineList[_0xd96d0b] = _0x1e5723;
                _0x13e8e2.OnLoaded(_0x285e7d);
              }
            }), null == this.m_awardBoard && (_0x13e8e2.AddLoad(_0x285e7d), _0x9e06f2.GameBundle.load(this.m_awardBoardFile, function (_0x41c100, _0xa1d692) {
              _0x41c100 ? _0x419a33(_0x41c100.message || _0x41c100) : (_0x3709e3.m_awardBoard = _0x5b17cb(_0xa1d692), _0x3709e3.addChild(_0x3709e3.m_awardBoard), _0x301f4b.SetZIndex(_0x3709e3.m_awardBoard, _0xe80412.EFF_ZORDER.AWARD_BOARD), _0x3709e3.m_awardBoard.active = false, _0x3709e3.m_awardBoardTimeline = _0x3709e3.m_awardBoard.getComponent(_0x599622), _0x3709e3.m_txtWinValue = _0x3709e3.m_awardBoard.getChildByName("win_value_label"), _0x13e8e2.OnLoaded(_0x285e7d));
            })), -1 == _0x181b9c ? _0x13e8e2.StartLoad(_0x285e7d) : _0x13e8e2.AddOnLoadedCallback(_0x285e7d, _0x4eca51)) : -1 == _0x181b9c ? _0x4eca51() : _0x13e8e2.AddOnLoadedCallback(_0x285e7d, _0x4eca51);
          } else {
            this.m_awardBoard && (this.m_awardBoard.active = false, this.m_awardBoardTimeline.stop());
          }
        };
        _0x4744fd.WinEffect = function () {
          this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.play(_0xe80412.ANI_LABEL.ENDING, false);
        };
        _0x4744fd.SetWinValue = function (_0x5c6ee3, _0x22b242, _0x2b7da4) {
          undefined === _0x22b242 && (_0x22b242 = null);
          undefined === _0x2b7da4 && (_0x2b7da4 = 0);
          this.m_moneyRealValue = _0x301f4b.strip(_0x5c6ee3);
          this.m_moneyRollValue = _0x2b7da4;
          _0x22b242 = null == _0x22b242 && _0xe80412.MONEY_ROLL_TIME || _0x22b242;
          this.m_durRollMoneyTick = _0x301f4b.strip(_0x22b242);
        };
        _0x4744fd.RollWinMoney = function (_0x3687e3) {
          if (this.m_moneyRealValue = _0x301f4b.strip(this.m_moneyRealValue), this.m_moneyRollValue = _0x301f4b.strip(this.m_moneyRollValue), this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x565ccf = _0x301f4b.divide(this.m_durRollMoneyTick, _0x301f4b.strip(_0x3687e3));
            var _0x42ae83 = _0x301f4b.divide(_0x301f4b.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x565ccf);
            var _0x15b1f3 = _0x301f4b.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            this.m_isAutoCheckFloat && (_0x15b1f3 = this.m_moneyRealValue.toString().indexOf(".") > -1 ? _0x301f4b.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x301f4b.FORMAT_NUMBER_TYPE.NONE_DOT);
            this.m_moneyRollValue = _0x301f4b.strip(this.m_moneyRollValue + _0x42ae83);
            this.m_moneyRollValue > this.m_moneyRealValue && (this.m_moneyRollValue = this.m_moneyRealValue);
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x15b1f3);
            this.m_durRollMoneyTick = _0x301f4b.strip(this.m_durRollMoneyTick - _0x3687e3);
          }
        };
        _0x4744fd.SetLabelString = function (_0x143f10, _0x385b6f, _0x18681d) {
          undefined === _0x18681d && (_0x18681d = null);
          var _0x4bb99e = _0x143f10.getComponent(_0x1014e2);
          if (null != _0x4bb99e && null != _0x4bb99e) {
            if (null == _0x18681d || null == _0x18681d) {
              _0x4bb99e.string = _0x385b6f.toString();
            } else {
              var _0x3ff3d4;
              if ("number" == typeof _0x385b6f) {
                _0x3ff3d4 = _0x385b6f;
              } else {
                var _0x5a15c9 = _0x385b6f.replace(/,/g, "");
                _0x3ff3d4 = isNaN(Number(_0x5a15c9)) ? 0 : Number(_0x5a15c9);
              }
              _0x4bb99e.string = _0x301f4b.FormatNumberThousands(_0x3ff3d4, _0x18681d);
            }
            _0x301f4b.SetFont(_0x4bb99e);
          } else {
            _0x56e4e3("Warning!!!!!!!!!! SetLabelString: ", _0x143f10);
          }
        };
        _0x4744fd.SetWinMoneyToMax = function () {};
        _0x4744fd.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x4744fd.StopAnimation = function (_0x1ec550) {
          this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.stop();
          this.m_awardBoard && (this.m_awardBoard.active = false, this.m_awardBoardTimeline.stop());
          1 != _0x1ec550 && this.m_winEffCbFunc && this.m_winEffCbFunc();
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x4744fd.OnAnimationEnd = function () {
          this.m_currentWinEffect && (this.m_currentWinEffect.active = false);
          this.m_bgMaskNode && (this.m_bgMaskNode.active = false);
          this.m_moneyRealValue = 0;
          this.m_moneyRollValue = 0;
        };
        _0x4744fd.playCoinEffect = function (_0x3e0825, _0x2990df) {
          var _0x728b38 = this;
          if (undefined === _0x2990df && (_0x2990df = -1), _0x9e06f2.CommonBundle) {
            var _0x4f21ac = _0x3e0825.level;
            var _0x5f35b5 = _0x3e0825.position;
            var _0x45af90 = _0x3e0825.time;
            null == _0x45af90 && (_0x45af90 = 0);
            var _0x50d723 = _0x3e0825.zOrder;
            null == _0x50d723 && (_0x50d723 = 0);
            var _0x3c356f = _0x3e0825.parent;
            this.stopCoinEffectImmly();
            var _0xcd6826 = _0xe80412.COIN_EFFECT_LIST[_0x4f21ac];
            if (_0xcd6826 = _0x301f4b.GetFilePath(_0xcd6826)) {
              _0x56e4e3("~~~~~~~~~~~~~~~~~~~~~~", _0x3e0825, _0x45af90, _0x50d723);
              var _0x3ca7d6 = function () {
                _0x728b38.m_coinEffectNode.setPosition(_0x3605b1(_0x5f35b5.x, _0x5f35b5.y));
                null == _0x3c356f || null == _0x3c356f ? (_0x728b38.addChild(_0x728b38.m_coinEffectNode), _0x301f4b.SetZIndex(_0x728b38.m_coinEffectNode, 0)) : (_0x3c356f.addChild(_0x728b38.m_coinEffectNode), _0x301f4b.SetZIndex(_0x728b38.m_coinEffectNode, _0x50d723));
                0 != _0x45af90 && _0x4ae6a5(_0x728b38).delay(_0x45af90).call(function () {
                  _0x728b38.stopCoinEffect();
                }).start();
              };
              -1 != _0x2990df && (_0x13e8e2.AddOnLoadedCallback(_0x2990df, _0x3ca7d6), _0x13e8e2.AddLoad(_0x2990df));
              _0x9e06f2.CommonBundle.load(_0xcd6826, function (_0x25234a, _0x5a07e6) {
                _0x56e4e3("LoadRes ", _0xcd6826);
                _0x25234a ? _0x419a33(_0x25234a.message || _0x25234a) : (_0x728b38.m_coinEffectNode = _0x5b17cb(_0x5a07e6), _0x728b38.m_coinEffectNode ? -1 == _0x2990df ? _0x3ca7d6() : _0x13e8e2.OnLoaded(_0x2990df) : _0x56e4e3("SlotBottomBarView.playCoinEffect m_coinEffect is null"));
              });
            }
          }
        };
        _0x4744fd.stopCoinEffectImmly = function () {
          null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent && (this.m_coinEffectNode.removeFromParent(), this.m_coinEffectNode = null);
        };
        _0x4744fd.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x2e81fd = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x15e773);
            var _0x2223ba = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x15e773);
            _0x2e81fd && _0x2e81fd.stopSystem();
            _0x2223ba && _0x2223ba.stopSystem();
          }
        };
        _0x4744fd.ShowCommonEffect = function (_0xda56b0, _0x5b983e, _0x188a78, _0x1f5919) {
          undefined === _0x188a78 && (_0x188a78 = null);
          undefined === _0x1f5919 && (_0x1f5919 = null);
          _0x188a78 = _0x188a78 || {};
          _0x1f5919 = _0x1f5919 || {};
          var _0x2351ea = new _0x51b564(_0xe80412.DesignSize.width / 2, _0xe80412.DesignSize.height);
          var _0x33cb76 = new _0x51b564(_0xe80412.DesignSize.width / 2 - 10, 145);
          var _0x2e1b49 = undefined;
          var _0x242385 = _0xda56b0 / _0x5b983e;
          _0x7f9f85 && (_0xda56b0 = _0x7f9f85.GetDisplayValue(_0xda56b0));
          for (var _0x18fff7 = this.m_odds.length - 1; _0x18fff7 >= 0; _0x18fff7--) {
            if (_0x242385 >= this.m_odds[_0x18fff7]) {
              _0x1f5919.level = this.m_coinEffects[_0x18fff7];
              5 == this.m_coinEffects[_0x18fff7] ? _0x1f5919.position = _0x1f5919.position ? _0x1f5919.position : _0x2351ea : _0x1f5919.position = _0x1f5919.smallPosition ? _0x1f5919.smallPosition : _0x1f5919.position ? _0x1f5919.position : _0x33cb76;
              (null == _0x1f5919.time || _0x1f5919.time <= 0) && (_0x1f5919.time = this.m_coinTimes[_0x18fff7]);
              5 == this.m_coinEffects[_0x18fff7] ? (_0x188a78.effectFile = this.m_winEffectFiles[_0x18fff7], _0x188a78.winValue = _0xda56b0, this.SetWinType(_0x18fff7), this.ShowWinAndCoinEffect(_0x188a78, _0x1f5919)) : this.playCoinEffect(_0x1f5919);
              _0x2e1b49 = this.m_soundNameByOdds[_0x18fff7];
              break;
            }
          }
          null != _0x2e1b49 && (this.m_nowPlaySoundID = _0x5e8dc1.Play(_0x2e1b49, false));
          null == _0x1f5919.time && (_0x1f5919.time = 0);
          return _0x1f5919.time;
        };
        _0x4744fd.SkipEffect = function () {
          if (this.stopCoinEffect(), _0x347afd.instance.ActionManager.removeAllActionsFromTarget(this), this.m_currentWinEffectTimeline) {
            var _0x3996f1 = this.m_currentWinEffectTimeline.name;
            var _0xf421fd = _0x301f4b.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            _0x3996f1 != _0xe80412.FILE_PATH.BIG_WIN && _0x3996f1 != _0xe80412.FILE_PATH.MEGA_WIN && _0x3996f1 != _0xe80412.FILE_PATH.SUPER_WIN || (this.m_moneyRollValue = _0x301f4b.strip(this.m_moneyRollValue), this.m_moneyRealValue = _0x301f4b.strip(this.m_moneyRealValue), this.m_moneyRollValue == this.m_moneyRealValue ? (this.m_awardBoardTimeline.play(_0xe80412.ANI_LABEL.ENDING), this.m_currentWinEffectTimeline.setCurrentTime(5)) : (this.m_isAutoCheckFloat && (_0xf421fd = this.m_moneyRealValue.toString().indexOf(".") > -1 ? _0x301f4b.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x301f4b.FORMAT_NUMBER_TYPE.NONE_DOT), this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0xf421fd), this.m_currentWinEffectTimeline.setCurrentTime(3.8)), this.m_currentWinEffectTimeline = null);
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x4744fd.SkipEffectSound = function () {
          this.m_nowPlaySoundID && (_0x5e8dc1.Stop(this.m_nowPlaySoundID), this.m_nowPlaySoundID = null);
        };
        _0x4744fd.SetAutoCheckFloat = function (_0x9970c6) {
          this.m_isAutoCheckFloat = _0x9970c6;
        };
        _0x4744fd.SetOdds = function (_0xf8a16) {
          this.m_odds = _0xf8a16;
        };
        _0x4744fd.SetWinEffectFiles = function (_0x517acb) {
          this.m_winEffectFiles = _0x517acb;
        };
        _0x4744fd.SetAwardBoardFile = function (_0x3aa07b) {
          this.m_awardBoardFile = _0x3aa07b;
        };
        _0x4744fd.SetEffectLevels = function (_0x15b8e6) {
          this.m_coinEffects = _0x15b8e6;
        };
        _0x4744fd.SetEffectTimes = function (_0x52826d) {
          this.m_coinTimes = _0x52826d;
        };
        _0x4744fd.SetSoundNameByOdds = function (_0x38e6e2) {
          this.m_soundNameByOdds = _0x38e6e2;
        };
        _0x4744fd.SetBGMaskNode = function (_0x3b98d3) {
          null != _0x3b98d3 && (this.m_bgMaskNode = _0x3b98d3);
        };
        _0x4744fd.SetWinTextFontSize = function (_0x43bbe8) {
          this.m_txtWinValue && (this.m_txtWinValue.getComponent(_0x1014e2).fontSize = _0x43bbe8);
        };
        _0x4744fd.SetWinType = function (_0x209a21) {
          this.m_winType = _0x209a21;
        };
        _0x274fc4(_0xe80412, [{
          key: "CoinEffectNode",
          set: function (_0x2e08db) {
            this.m_coinEffectNode = _0x2e08db;
          }
        }]);
        return _0xe80412;
      }(_0xb3307f);
      _0x4fcc0e.DesignSize = {
        width: 1136,
        height: 640
      };
      _0x4fcc0e.SOUND_FILE = {
        COMMON_SUPER_WIN: null,
        COMMON_MEGA_WIN: null,
        COMMON_COIN_SMALL: null,
        COMMON_COIN_MEDIUM: null,
        COMMON_BIG_WIN: null
      };
      _0x4fcc0e.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x4fcc0e.FILE_PATH = {
        BIG_WIN: "win/big_anim",
        MEGA_WIN: "win/mega_anim",
        SUPER_WIN: "win/super_anim",
        JACKPOT: "win/effect_Jackpot",
        BIG_TO_MEGA_WIN: "win/bigToMega_anim",
        BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
        FIVE_OF_A_KIND: "win/5ofa_anim"
      };
      _0x4fcc0e.WIN_EFFECT_SOUND_NAME = ((_0x3a3109 = {})[_0x4fcc0e.FILE_PATH.BIG_WIN] = "Common_big_win", _0x3a3109[_0x4fcc0e.FILE_PATH.MEGA_WIN] = "Common_mega_win", _0x3a3109[_0x4fcc0e.FILE_PATH.SUPER_WIN] = "Common_super_win", _0x3a3109[_0x4fcc0e.FILE_PATH.JACKPOT] = "Common_JP_win", _0x3a3109[_0x4fcc0e.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win", _0x3a3109[_0x4fcc0e.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win", _0x3a3109[_0x4fcc0e.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win", _0x3a3109);
      _0x4fcc0e.EffectViewUIName = _0xe387d3({
        TXT_WIN_MONEY: "label_final_value",
        PARTICLE: "Particle_"
      });
      _0x4fcc0e.DEFAULT_Y = 400;
      _0x4fcc0e.PARTICLE_AMOUNT_MAX = 2;
      _0x4fcc0e.MONEY_ROLL_TIME = 3;
      _0x4fcc0e.UPDATE_MONEY_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x4fcc0e.COMMON_GET_COIN_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x4fcc0e.GET_COIN_PARTICLE_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0x4fcc0e.ROTATE_COIN_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x4fcc0e.TRIAL_COIN_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x4fcc0e.COIN_APPEAR_PARTICLE_CSB = _0x4fcc0e.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      _0x4fcc0e.COMMON_COIN_AMOUNT = 8;
      _0x4fcc0e.ANI_LABEL = {
        ACT: "main",
        LOOP: "loop",
        ENDING: "ending"
      };
      _0x4fcc0e.ANI_FRAME_EVENT = {
        MID: "AniMid",
        B_TO_M: "AniBtoM",
        M_TO_S: "AniMtoS",
        ENDING: "AniEnding",
        END: "AniEnd",
        LOOP: "AniLoop"
      };
      _0x4fcc0e.EFF_ZORDER = {
        COIN_FALL: 1,
        WIN_EFFECT: 2,
        AWARD_BOARD: 3,
        COMMON_GET_COIN: 4,
        GET_TRIAL_COIN: 5
      };
      _0x4fcc0e.COIN_EFFECT_LIST = {
        1: _0x4fcc0e.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        2: _0x4fcc0e.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        3: _0x4fcc0e.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        4: _0x4fcc0e.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        5: _0x4fcc0e.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        6: _0x4fcc0e.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        7: _0x4fcc0e.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x4fcc0e.WIN_TYPE = {
        BIG: 2,
        MEGA: 3,
        SUPER: 4
      };
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      var _0x102623;
      var _0x4b7f4d;
      var _0x458847;
      var _0x5b33c5;
      var _0x56e467;
      var _0x17ffa7;
      var _0x15553a;
      var _0x5f8faa;
      var _0xd8ad5d;
      var _0x13ec22;
      var _0x206dcc = _0x3a9fe8.ccclass;
      var _0x189ab5 = _0x3a9fe8.property;
      var _0x40c168 = 0;
      var _0x18f4d7 = 1;
      _0x431dd8 = _0x189ab5({
        type: _0xb3307f,
        tooltip: "EX 按鈕最頂層節點(整顆node)"
      });
      _0x4a1baa = _0x189ab5({
        type: _0x395ed3,
        tooltip: "EX 按鈕"
      });
      _0x2b1257 = _0x189ab5({
        type: _0x395ed3,
        tooltip: "按鈕ON"
      });
      _0x1385a3 = _0x189ab5({
        type: _0x395ed3,
        tooltip: "按鈕OFF"
      });
      _0x4e6719 = _0x189ab5({
        type: _0x395ed3,
        tooltip: "提示問號按鈕"
      });
      _0x4e727b = _0x189ab5({
        type: _0xb3307f,
        tooltip: "提示文字tip面板"
      });
      _0x1b8cf3 = _0x189ab5({
        type: _0x1014e2,
        tooltip: "功能說明文字串Label"
      });
      _0x55e5f0 = _0x189ab5({
        type: _0x45b05f,
        tooltip: "本體ExtraBet文字圖片"
      });
      _0x206dcc((_0x147727 = _0x26bf31((_0x1a5497 = function (_0x47e296) {
        function _0x240155() {
          for (var _0x546cb3, _0x464d63 = arguments.length, _0x2ab303 = new Array(_0x464d63), _0x282a01 = 0; _0x282a01 < _0x464d63; _0x282a01++) {
            _0x2ab303[_0x282a01] = arguments[_0x282a01];
          }
          _0x546cb3 = _0x47e296.call.apply(_0x47e296, [this].concat(_0x2ab303)) || this;
          _0x24d38a(_0x546cb3, "m_multiExtraBetNode", _0x147727, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn", _0x26e2c0, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn_on", _0x2881d3, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn_off", _0x343dca, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn_TipQuesMark", _0x3f238e, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn_Tip", _0x2829b2, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_multiBtn_Description", _0xedbcf9, _0x2d2983(_0x546cb3));
          _0x24d38a(_0x546cb3, "m_Txt_Extra_Bet", _0x5cdeed, _0x2d2983(_0x546cb3));
          _0x546cb3.m_isExtendShowBar = false;
          _0x546cb3.m_ExtraBetAniPlaying = null;
          _0x546cb3.m_isExtra = false;
          _0x546cb3.m_isForceExtraOnEnd = false;
          _0x546cb3.m_isTwoStep = false;
          _0x546cb3.m_toStepTwo = false;
          _0x546cb3.m_triggerCb = null;
          _0x546cb3.m_canExtend = true;
          return _0x546cb3;
        }
        _0x206df9(_0x240155, _0x47e296);
        var _0x45d00f = _0x240155.prototype;
        _0x45d00f.Init = function (_0x3173f7, _0x117c6d, _0x2a1d05, _0x16a804, _0x4998bb) {
          var _0x4ed962 = this;
          if (undefined === _0x16a804 && (_0x16a804 = false), undefined === _0x4998bb && (_0x4998bb = false), _0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x4ff5e1.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x4ed962.node.active = false;
            });
          }
          this.m_triggerCb = _0x3173f7;
          this.m_isTwoStep = _0x16a804;
          this.m_multiBtn_Description && this.m_Txt_Extra_Bet && (_0x56e4e3(" localeStringManager.CurrLang : " + _0x146373.CurrLang), this.m_multiBtn_Description.string = _0x146373.GetString(_0x117c6d), this.m_Txt_Extra_Bet.spriteFrame = _0x146373.GetGameAtlas().getSpriteFrame(_0x2a1d05));
          _0x3bac23.Init(_0x4998bb ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x45d00f.onLoad = function () {
          var _0x2e1cd1 = this;
          if (!_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
            _0x56e4e3("ExtraBet onLoad");
            this.m_multiBtn && this.m_multiBtn.node.on(_0xb3307f.EventType.TOUCH_END, function () {
              _0x2e1cd1.m_ExtraBetAniPlaying || (_0x5e8dc1.Play(_0x9e06f2.AudioClips.COMMON_BTN), _0x2e1cd1.CheckCanUseBtn() ? _0x2e1cd1.ExtendShowBar(!_0x2e1cd1.m_isExtendShowBar) : _0xd304c7.ShowMessageBox(_0x9e06f2.StringKey.FREEWINCASH_PLAYING1));
            });
            for (var _0x2ccdb1 = 0; _0x2ccdb1 < this.m_multiBtn_on.length; _0x2ccdb1++) {
              this.m_multiBtn_on[_0x2ccdb1].node.on(_0xb3307f.EventType.TOUCH_END, function () {
                _0x2e1cd1.m_ExtraBetAniPlaying || (_0x2e1cd1.CheckCanUseBtn() ? _0x2e1cd1.ChangeBetMode() : _0xd304c7.ShowMessageBox(_0x9e06f2.StringKey.FREEWINCASH_PLAYING1));
              });
              this.m_multiBtn_off[_0x2ccdb1] && this.m_multiBtn_off[_0x2ccdb1].node.on(_0xb3307f.EventType.TOUCH_END, function () {
                _0x2e1cd1.m_ExtraBetAniPlaying || (_0x5e8dc1.Play(_0x9e06f2.AudioClips.COMMON_BTN), _0x2e1cd1.CheckCanUseBtn() && _0x2e1cd1.ChangeBetMode());
              });
            }
            this.m_multiBtn_TipQuesMark && this.m_multiBtn_TipQuesMark.node.on(_0xb3307f.EventType.TOUCH_END, _0x336c41(_0x2d31f9().mark(function _0x2c9ff4() {
              return _0x2d31f9().wrap(function (_0x5344f7) {
                for (;;) {
                  switch (_0x5344f7.prev = _0x5344f7.next) {
                    case 0:
                      if (_0x2e1cd1.m_ExtraBetAniPlaying) {
                        _0x5344f7.next = 13;
                        break;
                      }
                      if (_0x5e8dc1.Play(_0x9e06f2.AudioClips.COMMON_BTN), _0x5e9a73.Current() != _0x59f6ab.IDLE || _0x819c0.IsBuyBonus) {
                        _0x5344f7.next = 12;
                        break;
                      }
                      if (!_0x2e1cd1.m_isExtendShowBar) {
                        _0x5344f7.next = 7;
                        break;
                      }
                      _0x2e1cd1.m_multiBtn_Tip.active = !_0x2e1cd1.m_multiBtn_Tip.active;
                      _0x5344f7.next = 10;
                      break;
                    case 7:
                      _0x5344f7.next = 9;
                      return _0x2e1cd1.ExtendShowBar(true);
                    case 9:
                      !_0x2e1cd1.m_multiBtn_Tip.active && _0x2e1cd1.m_isExtendShowBar && (_0x2e1cd1.m_multiBtn_Tip.active = true);
                    case 10:
                      _0x5344f7.next = 13;
                      break;
                    case 12:
                      _0xd304c7.ShowMessageBox(_0x9e06f2.StringKey.FREEWINCASH_PLAYING1);
                    case 13:
                    case "end":
                      return _0x5344f7.stop();
                  }
                }
              }, _0x2c9ff4);
            })));
            this.ExtendShowBar(false);
          }
        };
        _0x45d00f.start = function () {
          _0x56e4e3("ExtraBet start");
        };
        _0x45d00f.CheckCanUseBtn = function () {
          return _0x9e06f2.IsInMG() && _0x5e9a73.Current() == _0x59f6ab.IDLE && !_0x9e06f2.IsUsingItem && !_0x819c0.IsBuyBonus && !_0x45419b.IsFeaturesDemoMode && !_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet);
        };
        _0x45d00f.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x45d00f.ShowExtra = function (_0x13b9ec) {
          this.m_multiExtraBetNode && !_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet) && (this.m_multiExtraBetNode.active = _0x13b9ec);
        };
        _0x45d00f.GoToFeatures = function () {};
        _0x45d00f.ExtendShowBar = function () {
          var _0xe211fa = _0x336c41(_0x2d31f9().mark(function _0xfd7957(_0x13cbd8) {
            var _0x1c548d;
            return _0x2d31f9().wrap(function (_0x9fb81e) {
              for (;;) {
                switch (_0x9fb81e.prev = _0x9fb81e.next) {
                  case 0:
                    if (this.m_canExtend && !_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
                      _0x9fb81e.next = 2;
                      break;
                    }
                    return _0x9fb81e.abrupt("return");
                  case 2:
                    if (!_0x7f9f85 || this.m_ExtraBetAniPlaying) {
                      _0x9fb81e.next = 31;
                      break;
                    }
                    if (!_0x13cbd8) {
                      _0x9fb81e.next = 20;
                      break;
                    }
                    if (_0x7f9f85.IsAutoSpin || _0x9e06f2.IsUsingItem || _0x819c0.IsBuyBonus) {
                      _0x9fb81e.next = 17;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x9fb81e.next = 15;
                      break;
                    }
                    if (this.m_isExtendShowBar = true, _0x7f9f85.SetSpinState(_0x2274a6.CLICK_SPIN), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x9fb81e.next = 12;
                      break;
                    }
                    _0x9fb81e.next = 12;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_Show");
                  case 12:
                    this.m_ExtraBetAniPlaying = false;
                    _0x7f9f85.SetSpinState(_0x2274a6.IDLE);
                    this.m_isExtra && this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Active");
                  case 15:
                    _0x9fb81e.next = 18;
                    break;
                  case 17:
                    _0xd304c7.ShowMessageBox(_0x9e06f2.StringKey.FREEWINCASH_PLAYING1);
                  case 18:
                    _0x9fb81e.next = 31;
                    break;
                  case 20:
                    if (!this.m_isExtendShowBar) {
                      _0x9fb81e.next = 31;
                      break;
                    }
                    if (_0x7f9f85.IsAutoSpin || _0x7f9f85.SetSpinState(_0x2274a6.CLICK_SPIN), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x9fb81e.next = 27;
                      break;
                    }
                    _0x9fb81e.next = 27;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_Close");
                  case 27:
                    this.m_ExtraBetAniPlaying = false;
                    _0x7f9f85.IsAutoSpin || _0x7f9f85.SetSpinState(_0x2274a6.IDLE);
                    this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Active") : (this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_OFF"), (_0x1c548d = this.m_multiExtraBetNode.getComponent(_0x599622).getState("ExtraBet_OFF")).setTime(_0x1c548d.duration)));
                    this.m_isExtendShowBar = false;
                  case 31:
                  case "end":
                    return _0x9fb81e.stop();
                }
              }
            }, _0xfd7957, this);
          }));
          return function (_0xb08671) {
            return _0xe211fa.apply(this, arguments);
          };
        }();
        _0x45d00f.ChangeBetMode = function () {
          var _0x5334c5 = _0x336c41(_0x2d31f9().mark(function _0x411aa1() {
            var _0x193e34;
            return _0x2d31f9().wrap(function (_0x43784a) {
              for (;;) {
                switch (_0x43784a.prev = _0x43784a.next) {
                  case 0:
                    if (!_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
                      _0x43784a.next = 2;
                      break;
                    }
                    return _0x43784a.abrupt("return");
                  case 2:
                    if (_0x56e4e3("ChangeBetMode stateManager.Current() : ", _0x5e9a73.Current()), !_0x7f9f85 || _0x819c0.IsBuyBonus || _0x5e9a73.Current() !== _0x59f6ab.IDLE && !this.m_isExtra) {
                      _0x43784a.next = 36;
                      break;
                    }
                    if (this.m_isExtra = !this.m_isExtra, _0x193e34 = [], !this.m_isExtra) {
                      _0x43784a.next = 24;
                      break;
                    }
                    this.m_isTwoStep ? this.m_toStepTwo = true : _0x7f9f85.ChangeMultiBet(_0x18f4d7);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x7f9f85 || _0x7f9f85.SetSpinState(_0x2274a6.CLICK_SPIN);
                    null == _0x45419b || _0x45419b.SetBuyBonusState(false);
                    this.m_multiExtraBetNode && _0x193e34.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_ON"));
                    _0x193e34.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x43784a.next = 16;
                    return Promise.all(_0x193e34);
                  case 16:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x7f9f85 || _0x7f9f85.SetSpinState(_0x2274a6.IDLE);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Active");
                    _0x43784a.next = 21;
                    return _0x9e06f2.Wait(this, 0.2);
                  case 21:
                    null == _0x45419b || _0x45419b.SetBuyBonusState(true);
                    _0x43784a.next = 34;
                    break;
                  case 24:
                    _0x7f9f85.ChangeMultiBet(_0x40c168);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x7f9f85 || _0x7f9f85.SetSpinState(_0x2274a6.CLICK_SPIN);
                    this.m_multiExtraBetNode && _0x193e34.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_OFF"));
                    _0x193e34.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x43784a.next = 32;
                    return Promise.all(_0x193e34);
                  case 32:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x7f9f85 || _0x7f9f85.SetSpinState(_0x2274a6.IDLE);
                  case 34:
                    _0x43784a.next = 37;
                    break;
                  case 36:
                    _0x5e9a73.Current() !== _0x59f6ab.IDLE && (_0x56e4e3("TRIAL_REFUSED_REASON 1 "), _0xd304c7.ShowMessageBox(_0x9e06f2.StringKey.FREEWINCASH_PLAYING1));
                  case 37:
                  case "end":
                    return _0x43784a.stop();
                }
              }
            }, _0x411aa1, this);
          }));
          return function () {
            return _0x5334c5.apply(this, arguments);
          };
        }();
        _0x45d00f.SetTwoStepMulti = function () {
          var _0x5bd04c = _0x336c41(_0x2d31f9().mark(function _0x41c5ea(_0x226689, _0x354407) {
            return _0x2d31f9().wrap(function (_0x38acf4) {
              for (;;) {
                switch (_0x38acf4.prev = _0x38acf4.next) {
                  case 0:
                    if (!_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
                      _0x38acf4.next = 2;
                      break;
                    }
                    return _0x38acf4.abrupt("return");
                  case 2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0x38acf4.next = 15;
                      break;
                    }
                    if (!_0x226689) {
                      _0x38acf4.next = 7;
                      break;
                    }
                    _0x7f9f85.ChangeMultiBet(_0x354407);
                    _0x38acf4.next = 15;
                    break;
                  case 7:
                    if (this.m_isExtra = false, 1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true), this.m_ExtraBetAniPlaying = true, _0x7f9f85 && _0x7f9f85.SetSpinState(_0x2274a6.CLICK_SPIN), !this.m_multiExtraBetNode) {
                      _0x38acf4.next = 14;
                      break;
                    }
                    _0x38acf4.next = 14;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_OFF");
                  case 14:
                    this.m_ExtraBetAniPlaying = false;
                  case 15:
                  case "end":
                    return _0x38acf4.stop();
                }
              }
            }, _0x41c5ea, this);
          }));
          return function (_0x58e6ea, _0x3aba09) {
            return _0x5bd04c.apply(this, arguments);
          };
        }();
        _0x45d00f.ForceSetExtraBet = function () {
          var _0x4adec0 = _0x336c41(_0x2d31f9().mark(function _0x4e288d(_0x473a24, _0x2a6511) {
            var _0x24b26f;
            return _0x2d31f9().wrap(function (_0x36dfb7) {
              for (;;) {
                switch (_0x36dfb7.prev = _0x36dfb7.next) {
                  case 0:
                    if (undefined === _0x2a6511 && (_0x2a6511 = _0x18f4d7), !_0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet)) {
                      _0x36dfb7.next = 3;
                      break;
                    }
                    return _0x36dfb7.abrupt("return");
                  case 3:
                    if (!_0x473a24) {
                      _0x36dfb7.next = 14;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Active");
                    this.m_isTwoStep ? (this.m_toStepTwo = true, this.SetTwoStepMulti(_0x473a24, _0x2a6511)) : _0x7f9f85.ChangeMultiBet(_0x2a6511);
                    _0x36dfb7.next = 11;
                    return this.m_triggerCb(_0x473a24, true);
                  case 11:
                    this.m_isForceExtraOnEnd = true;
                    _0x36dfb7.next = 23;
                    break;
                  case 14:
                    if (!this.m_isExtra) {
                      _0x36dfb7.next = 23;
                      break;
                    }
                    _0x24b26f = [];
                    this.m_isExtra = false;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    _0x7f9f85.ChangeMultiBet(_0x40c168);
                    this.m_multiExtraBetNode && (this.m_isExtendShowBar ? _0x24b26f.push(this.ExtendShowBar(false)) : _0x24b26f.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x599622), "ExtraBet_OFF")));
                    _0x24b26f.push(this.m_triggerCb(_0x473a24, true));
                    _0x36dfb7.next = 23;
                    return Promise.all(_0x24b26f);
                  case 23:
                  case "end":
                    return _0x36dfb7.stop();
                }
              }
            }, _0x4e288d, this);
          }));
          return function (_0x40a4ea, _0x1d7a99) {
            return _0x4adec0.apply(this, arguments);
          };
        }();
        _0x45d00f.OnRotation = function () {
          _0x301f4b.CheckSwitchOff(_0x55c32e.CloseExtraBet) || (this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Active") : this.m_multiExtraBetNode.getComponent(_0x599622).play("ExtraBet_Stop")), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false));
        };
        _0x45d00f.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x45d00f.FirstShowBar = function () {};
        _0x45d00f.PlayAnimation = function (_0x1e0c56, _0x142312, _0x6c7cdf) {
          undefined === _0x6c7cdf && (_0x6c7cdf = false);
          return new Promise(function (_0x29a49b) {
            if (_0x1e0c56.play(_0x142312), _0x6c7cdf) {
              var _0x1ec73f = _0x1e0c56.getState(_0x142312);
              _0x1ec73f && (_0x1ec73f.wrapMode = _0x212e2b.WrapMode.Loop);
            }
            _0x1e0c56.once(_0x599622.EventType.FINISHED, function () {
              _0x29a49b(true);
            });
          });
        };
        _0x274fc4(_0x240155, [{
          key: "ExtraBetAniPlaying",
          set: function (_0x2103d3) {
            this.m_ExtraBetAniPlaying = _0x2103d3;
          }
        }, {
          key: "IsExtra",
          get: function () {
            return this.m_isExtra;
          }
        }, {
          key: "IsForceExtraOnEnd",
          get: function () {
            return this.m_isForceExtraOnEnd;
          }
        }, {
          key: "CanExtend",
          set: function (_0x4f14cc) {
            this.m_canExtend = _0x4f14cc;
          }
        }]);
        return _0x240155;
      }(_0x95667d)).prototype, "m_multiExtraBetNode", [_0x431dd8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x26e2c0 = _0x26bf31(_0x1a5497.prototype, "m_multiBtn", [_0x4a1baa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2881d3 = _0x26bf31(_0x1a5497.prototype, "m_multiBtn_on", [_0x2b1257], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x343dca = _0x26bf31(_0x1a5497.prototype, "m_multiBtn_off", [_0x1385a3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x3f238e = _0x26bf31(_0x1a5497.prototype, "m_multiBtn_TipQuesMark", [_0x4e6719], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2829b2 = _0x26bf31(_0x1a5497.prototype, "m_multiBtn_Tip", [_0x4e727b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xedbcf9 = _0x26bf31(_0x1a5497.prototype, "m_multiBtn_Description", [_0x1b8cf3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5cdeed = _0x26bf31(_0x1a5497.prototype, "m_Txt_Extra_Bet", [_0x55e5f0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x379960 = _0x1a5497));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      var _0x57d205;
      var _0x2ccd78;
      var _0x428f68;
      var _0x1269f7 = _0x3a9fe8.ccclass;
      var _0x244675 = _0x3a9fe8.property;
      _0x102623 = _0x244675({
        type: _0x45b05f,
        tooltip: "說明文字"
      });
      _0x4b7f4d = _0x244675({
        type: _0x351d92,
        tooltip: "圖片名稱"
      });
      _0x458847 = _0x244675({
        type: Boolean,
        tooltip: "圖片名稱"
      });
      _0x5b33c5 = _0x244675({
        type: _0x45b05f,
        tooltip: "圖片名稱"
      });
      _0x1269f7((_0x15553a = _0x26bf31((_0x17ffa7 = function (_0x2fa3a9) {
        function _0x303a38() {
          for (var _0x2d78bb, _0x2f42d6 = arguments.length, _0x1b8997 = new Array(_0x2f42d6), _0x5e082d = 0; _0x5e082d < _0x2f42d6; _0x5e082d++) {
            _0x1b8997[_0x5e082d] = arguments[_0x5e082d];
          }
          _0x2d78bb = _0x2fa3a9.call.apply(_0x2fa3a9, [this].concat(_0x1b8997)) || this;
          _0x24d38a(_0x2d78bb, "m_hintSprite", _0x15553a, _0x2d2983(_0x2d78bb));
          _0x24d38a(_0x2d78bb, "m_imgName", _0x5f8faa, _0x2d2983(_0x2d78bb));
          _0x24d38a(_0x2d78bb, "m_isAD", _0xd8ad5d, _0x2d2983(_0x2d78bb));
          _0x24d38a(_0x2d78bb, "m_ADsprite", _0x13ec22, _0x2d2983(_0x2d78bb));
          return _0x2d78bb;
        }
        _0x206df9(_0x303a38, _0x2fa3a9);
        var _0x3f124d = _0x303a38.prototype;
        _0x3f124d.start = function () {
          var _0x520338 = this;
          if (!this.m_isAD) {
            var _0x93d7c = _0x146373.GetGameAtlas();
            _0x93d7c ? this.m_hintSprite.spriteFrame = _0x93d7c.getSpriteFrame(this.m_imgName) : _0x146373.RegisterOnGameAltasLoadedCb(function () {
              _0x520338.m_hintSprite.spriteFrame = _0x146373.GetGameAtlas().getSpriteFrame(_0x520338.m_imgName);
            });
          }
        };
        _0x3f124d.SetADSprites = function (_0x34e156) {
          this.m_ADsprite && (this.m_ADsprite.spriteFrame = _0x34e156);
        };
        return _0x303a38;
      }(_0x95667d)).prototype, "m_hintSprite", [_0x102623], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5f8faa = _0x26bf31(_0x17ffa7.prototype, "m_imgName", [_0x4b7f4d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0xd8ad5d = _0x26bf31(_0x17ffa7.prototype, "m_isAD", [_0x458847], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x13ec22 = _0x26bf31(_0x17ffa7.prototype, "m_ADsprite", [_0x5b33c5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x56e467 = _0x17ffa7));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      var _0x2cf3e5;
      var _0x59f873;
      var _0x5425b7;
      var _0xbe6513;
      var _0x226715;
      var _0x3be6d9;
      var _0x4490fb;
      var _0x278828;
      var _0x425bd9;
      var _0x58b0f8;
      var _0x2b9d5c;
      var _0x21ebc6;
      var _0x49a581;
      var _0x170706 = _0x3a9fe8.ccclass;
      var _0x50262d = _0x3a9fe8.property;
      var _0x1ae4f8 = _0x3a9fe8.executeInEditMode;
      var _0x29c8fb = _0x3a9fe8.requireComponent;
      _0x170706("LabelSpacingX")(_0x57d205 = _0x29c8fb(_0x1014e2)(_0x57d205 = _0x1ae4f8((_0x428f68 = _0x26bf31((_0x2ccd78 = function (_0x212e63) {
        function _0x512c16() {
          for (var _0x211bae, _0x10acef = arguments.length, _0x39748b = new Array(_0x10acef), _0x30fde9 = 0; _0x30fde9 < _0x10acef; _0x30fde9++) {
            _0x39748b[_0x30fde9] = arguments[_0x30fde9];
          }
          _0x211bae = _0x212e63.call.apply(_0x212e63, [this].concat(_0x39748b)) || this;
          _0x24d38a(_0x211bae, "_spacingX", _0x428f68, _0x2d2983(_0x211bae));
          return _0x211bae;
        }
        _0x206df9(_0x512c16, _0x212e63);
        var _0x307d4a = _0x512c16.prototype;
        _0x307d4a.onEnable = function () {
          this.resetSpacingX();
        };
        _0x307d4a.resetSpacingX = function () {
          var _0x3d6e72 = this.node.getComponent(_0x1014e2);
          _0x3d6e72 && _0x3d6e72.cacheMode === _0x1014e2.CacheMode.CHAR && (_0x3d6e72.spacingX = this._spacingX);
        };
        _0x274fc4(_0x512c16, [{
          key: "spacingX",
          get: function () {
            return this._spacingX;
          },
          set: function (_0x5abb3c) {
            this._spacingX = _0x5abb3c;
            this.resetSpacingX();
          }
        }]);
        return _0x512c16;
      }(_0x95667d)).prototype, "_spacingX", [_0x50262d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x26bf31(_0x2ccd78.prototype, "spacingX", [_0x50262d], Object.getOwnPropertyDescriptor(_0x2ccd78.prototype, "spacingX"), _0x2ccd78.prototype), _0x57d205 = _0x2ccd78)) || _0x57d205) || _0x57d205);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x872263;
      var _0x1f984b = _0x3a9fe8.ccclass;
      var _0x5970ba = _0x3a9fe8.executeInEditMode;
      var _0x4e2152 = _0x3a9fe8.property;
      var _0x122939 = "db://assets/game/Text/en/";
      var _0x3c275f = "db://assets/otherAsttText/AsttText/en/";
      !function (_0x1e28b7) {
        _0x1e28b7[_0x1e28b7.PNG = 0] = "PNG";
        _0x1e28b7[_0x1e28b7.JPG = 1] = "JPG";
      }(_0x872263 || (_0x872263 = {}));
      var _0x418f03;
      var _0x11abd5;
      var _0x2ed2ef;
      var _0x158cc7;
      var _0x4cdc37;
      var _0x4e45c6 = {
        PNG: ".png",
        JPG: ".jpg"
      };
      _0x2cf3e5 = _0x1f984b("LangImg");
      _0x59f873 = _0x4e2152({
        type: _0x351d92,
        tooltip: "圖片路徑"
      });
      _0x5425b7 = _0x4e2152({
        type: _0x351d92,
        tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑"
      });
      _0xbe6513 = _0x4e2152({
        type: _0xe387d3(_0x872263),
        tooltip: "圖片類型"
      });
      _0x226715 = _0x4e2152({
        type: _0x379292,
        tooltip: "是否為通用圖片"
      });
      _0x3be6d9 = _0x4e2152({
        type: _0x379292,
        tooltip: "是否由這個組件來設定多語系圖片"
      });
      _0x2cf3e5(_0x4490fb = _0x5970ba((_0x425bd9 = _0x26bf31((_0x278828 = function (_0x5e61ae) {
        function _0xf83ab() {
          for (var _0x507279, _0x3dc2ca = arguments.length, _0x165e25 = new Array(_0x3dc2ca), _0x27f694 = 0; _0x27f694 < _0x3dc2ca; _0x27f694++) {
            _0x165e25[_0x27f694] = arguments[_0x27f694];
          }
          _0x507279 = _0x5e61ae.call.apply(_0x5e61ae, [this].concat(_0x165e25)) || this;
          _0x24d38a(_0x507279, "m_path", _0x425bd9, _0x2d2983(_0x507279));
          _0x24d38a(_0x507279, "m_extraPath", _0x58b0f8, _0x2d2983(_0x507279));
          _0x24d38a(_0x507279, "m_imgTypeNo", _0x2b9d5c, _0x2d2983(_0x507279));
          _0x24d38a(_0x507279, "m_isCommon", _0x21ebc6, _0x2d2983(_0x507279));
          _0x24d38a(_0x507279, "m_isUsingSetImage", _0x49a581, _0x2d2983(_0x507279));
          return _0x507279;
        }
        _0x206df9(_0xf83ab, _0x5e61ae);
        var _0x242d86 = _0xf83ab.prototype;
        _0x242d86.start = function () {
          this.SetImg();
        };
        _0x242d86.SetImg = function () {
          var _0x2d33f2 = this;
          if (this.m_isUsingSetImage) {
            var _0xbb7061 = null;
            if (this.m_isCommon) {
              if (!(_0xbb7061 = _0x146373.GetCommonAtlas())) {
                return void _0x146373.RegisterOnCommonAltasLoadedCb(function () {
                  _0x2d33f2.SetImg();
                });
              }
            } else {
              if (!(_0xbb7061 = _0x146373.GetGameAtlas())) {
                return void _0x146373.RegisterOnGameAltasLoadedCb(function () {
                  _0x2d33f2.SetImg();
                });
              }
            }
            var _0x50f37e = this.node.getComponent(_0x45b05f);
            _0x50f37e || (_0x50f37e = this.node.addComponent(_0x45b05f));
            _0x50f37e.spriteFrame = _0xbb7061.getSpriteFrame(this.m_path);
          }
        };
        _0x242d86.SetPreviewImg = function () {
          this.AdjustComponentOrdering();
          this.ReadSpriteFrame();
          _0xf83ab.prototype._onBeforeSerialize = function () {
            this.OnBeforeSerialize();
            return false;
          };
        };
        _0x242d86.AdjustComponentOrdering = function () {};
        _0x242d86.ReadSpriteFrame = function () {
          var _0xd531ca = _0x336c41(_0x2d31f9().mark(function _0x476d54() {
            var _0x29e47c;
            var _0x5e84ef;
            var _0x41276f;
            var _0x4199e5;
            var _0x5e8987;
            var _0x5c0e87;
            var _0x49236c = this;
            return _0x2d31f9().wrap(function (_0x1311cc) {
              for (;;) {
                switch (_0x1311cc.prev = _0x1311cc.next) {
                  case 0:
                    if (this.m_path) {
                      _0x1311cc.next = 2;
                      break;
                    }
                    return _0x1311cc.abrupt("return");
                  case 2:
                    _0x29e47c = (this.m_isCommon ? _0x3c275f : _0x122939) + this.m_extraPath + this.m_path;
                    _0x5e84ef = ".png";
                    _0x41276f = _0x872263[this.m_imgTypeNo];
                    Object.prototype.hasOwnProperty.call(_0x872263, _0x41276f) && (_0x4199e5 = _0x872263[_0x41276f], Number(_0x4199e5) === this.m_imgTypeNo && (_0x5e84ef = _0x4e45c6[_0x41276f]));
                    _0x1311cc.next = 8;
                    return Editor.Message.request("asset-db", "query-assets", {
                      importer: "sprite-frame",
                      pattern: _0x29e47c + _0x5e84ef
                    });
                  case 8:
                    _0x5e8987 = _0x1311cc.sent;
                    _0x5c0e87 = {
                      uuid: _0x5e8987[0].uuid
                    };
                    _0x5f556e.loadAny(_0x5c0e87, function (_0x145ff7, _0x47f2fe) {
                      if (_0x145ff7) {
                        _0x419a33("Failed to load cc.SpriteFrame resources:", _0x145ff7);
                      } else {
                        var _0x4488f8 = _0x49236c.node.getComponent(_0x45b05f);
                        _0x4488f8 || (_0x4488f8 = _0x49236c.node.addComponent(_0x45b05f));
                        _0x4488f8.spriteFrame = _0x47f2fe;
                      }
                    });
                  case 11:
                  case "end":
                    return _0x1311cc.stop();
                }
              }
            }, _0x476d54, this);
          }));
          return function () {
            return _0xd531ca.apply(this, arguments);
          };
        }();
        _0x242d86.OnBeforeSerialize = function () {};
        return _0xf83ab;
      }(_0x95667d)).prototype, "m_path", [_0x59f873], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x58b0f8 = _0x26bf31(_0x278828.prototype, "m_extraPath", [_0x5425b7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x2b9d5c = _0x26bf31(_0x278828.prototype, "m_imgTypeNo", [_0xbe6513], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x872263.PNG;
        }
      }), _0x21ebc6 = _0x26bf31(_0x278828.prototype, "m_isCommon", [_0x226715], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x49a581 = _0x26bf31(_0x278828.prototype, "m_isUsingSetImage", [_0x3be6d9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x4490fb = _0x278828)) || _0x4490fb);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      var _0x293af1;
      var _0x47bc72;
      var _0x4944d3;
      var _0x21a856;
      var _0xc0d4da;
      var _0x3ad4c1 = 0;
      var _0x37d372 = 1;
      var _0x424101 = 2;
      var _0x3f1b68 = _0x3a9fe8.ccclass;
      var _0x2ba0dd = _0x3a9fe8.property;
      _0x418f03 = _0x3f1b68("RenderDataBump");
      _0x11abd5 = _0x2ba0dd({
        tooltip: "是否一同影響子節點"
      });
      _0x418f03((_0x4cdc37 = _0x26bf31((_0x158cc7 = function (_0x284ffe) {
        function _0x5cafe6() {
          for (var _0x58dcf5, _0x4381b9 = arguments.length, _0x550001 = new Array(_0x4381b9), _0x2cd34e = 0; _0x2cd34e < _0x4381b9; _0x2cd34e++) {
            _0x550001[_0x2cd34e] = arguments[_0x2cd34e];
          }
          _0x58dcf5 = _0x284ffe.call.apply(_0x284ffe, [this].concat(_0x550001)) || this;
          _0x24d38a(_0x58dcf5, "affectsChildren", _0x4cdc37, _0x2d2983(_0x58dcf5));
          _0x58dcf5.states = _0x3ad4c1;
          return _0x58dcf5;
        }
        _0x206df9(_0x5cafe6, _0x284ffe);
        var _0x43fd7f = _0x5cafe6.prototype;
        _0x43fd7f.onLoad = function () {
          this.node.on(_0xb3307f.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x43fd7f.onDestroy = function () {
          this.node.off(_0xb3307f.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x43fd7f.checkStates = function () {
          this.node.parent ? this.states === _0x37d372 && this.requestRenderData() : this.states !== _0x424101 && this.states !== _0x3ad4c1 || this.destroyRenderData();
        };
        _0x43fd7f.destroyRenderData = function () {
          var _0x47582c = this.node.getComponent(_0x8dfa41);
          if (null == _0x47582c || _0x47582c.destroyRenderData(), this.affectsChildren) {
            for (var _0x598c11, _0x4356ca = this.node.getComponentsInChildren(_0x8dfa41), _0x20b24e = _0x4f5f17(_0x4356ca); !(_0x598c11 = _0x20b24e()).done;) {
              var _0x1a4fc5 = _0x598c11.value;
              null == _0x1a4fc5 || _0x1a4fc5.destroyRenderData();
            }
          }
          this.states = _0x37d372;
        };
        _0x43fd7f.requestRenderData = function () {
          var _0x2a627d = this.node.getComponent(_0x8dfa41);
          if (null == _0x2a627d || _0x2a627d._flushAssembler(), this.affectsChildren) {
            for (var _0x187f42, _0x1d612c = this.node.getComponentsInChildren(_0x8dfa41), _0x2b68ea = _0x4f5f17(_0x1d612c); !(_0x187f42 = _0x2b68ea()).done;) {
              var _0xdb77cc = _0x187f42.value;
              null == _0xdb77cc || _0xdb77cc._flushAssembler();
            }
          }
          this.states = _0x424101;
        };
        return _0x5cafe6;
      }(_0x95667d)).prototype, "affectsChildren", [_0x11abd5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2ed2ef = _0x158cc7));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      var _0x5889aa;
      var _0x3f50e0;
      var _0x5eb348;
      var _0x25e5fb;
      var _0x5e387e = _0x3a9fe8.ccclass;
      var _0x514a82 = _0x3a9fe8.property;
      _0x293af1 = _0x5e387e("ScrollEventHandler");
      _0x47bc72 = _0x514a82({
        type: _0xb3307f,
        tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去"
      });
      _0x293af1((_0xc0d4da = _0x26bf31((_0x21a856 = function (_0x10cf92) {
        function _0xd86cac() {
          for (var _0x55a1a5, _0x493017 = arguments.length, _0x7d5af2 = new Array(_0x493017), _0xfa52a9 = 0; _0xfa52a9 < _0x493017; _0xfa52a9++) {
            _0x7d5af2[_0xfa52a9] = arguments[_0xfa52a9];
          }
          _0x55a1a5 = _0x10cf92.call.apply(_0x10cf92, [this].concat(_0x7d5af2)) || this;
          _0x24d38a(_0x55a1a5, "m_contents", _0xc0d4da, _0x2d2983(_0x55a1a5));
          _0x55a1a5.m_scrollView = null;
          _0x55a1a5.m_redundantSpace_Y = 0;
          return _0x55a1a5;
        }
        _0x206df9(_0xd86cac, _0x10cf92);
        var _0x104d0d = _0xd86cac.prototype;
        _0x104d0d.start = function () {
          var _0x3fffe2 = this;
          this.m_scrollView = this.node.getComponent(_0x34655b);
          this.m_scrollView ? this.m_scrollView.node.on(_0x34655b.EventType.SCROLLING, function () {
            _0x3fffe2.CheckCellVisible();
          }) : _0x419a33("ScrollView is null");
          0 === this.m_contents.length && this.m_contents.push(this.m_scrollView.content);
        };
        _0x104d0d.CheckCellVisible = function () {
          if (this.m_scrollView && this.m_scrollView.view) {
            for (var _0x9567d9 = 0; _0x9567d9 < this.m_contents.length; _0x9567d9++) {
              for (var _0x41a86c = this.m_contents[_0x9567d9].children, _0x48876a = this.GetTopLeftWorld(this.m_scrollView.view.node), _0x2706d7 = this.GetBottomRightWorld(this.m_scrollView.view.node), _0x26db92 = 0; _0x26db92 < _0x41a86c.length; _0x26db92++) {
                var _0x1c2091 = _0x41a86c[_0x26db92];
                var _0xd01e16 = _0x1c2091.getComponent(_0x5d4bff);
                _0xd01e16 || (_0xd01e16 = _0x1c2091.addComponent(_0x5d4bff));
                var _0x112bf3 = this.GetTopLeftWorld(_0x1c2091);
                var _0x17af25 = this.GetBottomRightWorld(_0x1c2091);
                this.IsInside(_0x112bf3, _0x48876a, _0x2706d7) || this.IsInside(_0x17af25, _0x48876a, _0x2706d7) ? _0xd01e16.opacity = 255 : _0xd01e16.opacity = 0;
              }
            }
          }
        };
        _0x104d0d.GetTopLeftWorld = function (_0x14115d) {
          var _0x4c294 = _0x14115d.getPosition();
          var _0x46570b = _0x14115d.getComponent(_0x12c13b).contentSize;
          var _0x168f78 = _0x14115d.getComponent(_0x12c13b).anchorPoint;
          var _0x415be6 = new _0x35212e(_0x4c294.x - _0x46570b.width * _0x168f78.x, _0x4c294.y - _0x46570b.height * _0x168f78.y, _0x4c294.z);
          return _0x14115d.parent.getComponent(_0x12c13b).convertToWorldSpaceAR(_0x415be6);
        };
        _0x104d0d.GetBottomRightWorld = function (_0x7ca944) {
          var _0x2dc6ea = _0x7ca944.getPosition();
          var _0x4489e9 = _0x7ca944.getComponent(_0x12c13b).contentSize;
          var _0x2bbacd = _0x7ca944.getComponent(_0x12c13b).anchorPoint;
          var _0x8e1d9d = new _0x35212e(_0x2dc6ea.x + _0x4489e9.width * (1 - _0x2bbacd.x), _0x2dc6ea.y + _0x4489e9.height * (1 - _0x2bbacd.y), _0x2dc6ea.z);
          return _0x7ca944.parent.getComponent(_0x12c13b).convertToWorldSpaceAR(_0x8e1d9d);
        };
        _0x104d0d.IsInside = function (_0x35a39d, _0x5d583f, _0x4cf58b) {
          return _0x35a39d.x >= _0x5d583f.x && _0x35a39d.y >= _0x5d583f.y - this.m_redundantSpace_Y && _0x35a39d.x <= _0x4cf58b.x && _0x35a39d.y <= _0x4cf58b.y + this.m_redundantSpace_Y;
        };
        _0x274fc4(_0xd86cac, [{
          key: "RedundantSpace_Y",
          set: function (_0x2a6a30) {
            this.m_redundantSpace_Y = _0x2a6a30;
          }
        }]);
        return _0xd86cac;
      }(_0x95667d)).prototype, "m_contents", [_0x47bc72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x4944d3 = _0x21a856));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      var _0x50d103;
      var _0x37d272;
      var _0x2c1bf6;
      var _0x1974b6;
      var _0x3bc22e;
      var _0x44d521;
      var _0x3021ff;
      var _0x467d45;
      var _0x1dab88;
      var _0x4718fb;
      var _0xa4eea6;
      var _0x38f163;
      var _0x379f82;
      var _0x24daa5;
      var _0x1cc11d;
      var _0xb8253d;
      var _0x5ad7e4;
      var _0x53d52d;
      var _0x11f239;
      var _0x2bd6d1;
      var _0x728954;
      var _0x1f2cc7;
      var _0xce1252;
      var _0x178835;
      var _0x3ccab4;
      var _0x43c055;
      var _0x45ed1f;
      var _0x196470;
      var _0xe30ee8;
      var _0x1105a1;
      var _0x111108;
      var _0x315ab1;
      var _0x4da258;
      var _0x2f9141;
      var _0x1e5449;
      var _0x49af02 = "GameIntro_L";
      var _0x25ad6a = "GameIntro_S";
      var _0x2428bc = "FG_Declare_Start_L";
      var _0x103f0f = "FG_Declare_Start_S";
      var _0x26e086 = "FG_Compliment_Start_L";
      var _0x2d7074 = "FG_Compliment_Start_S";
      var _0x34e66e = _0x3a9fe8.ccclass;
      _0x5889aa = (0, _0x3a9fe8.property)({
        type: _0x5d11dd.Skeleton,
        tooltip: "spine"
      });
      _0x34e66e((_0x25e5fb = _0x26bf31((_0x5eb348 = function (_0x23d872) {
        function _0x47392b() {
          for (var _0x51b595, _0x324cb2 = arguments.length, _0x1d329a = new Array(_0x324cb2), _0x4474b5 = 0; _0x4474b5 < _0x324cb2; _0x4474b5++) {
            _0x1d329a[_0x4474b5] = arguments[_0x4474b5];
          }
          _0x51b595 = _0x23d872.call.apply(_0x23d872, [this].concat(_0x1d329a)) || this;
          _0x24d38a(_0x51b595, "m_spine", _0x25e5fb, _0x2d2983(_0x51b595));
          return _0x51b595;
        }
        _0x206df9(_0x47392b, _0x23d872);
        var _0x525852 = _0x47392b.prototype;
        _0x525852.ShowGameIntro = function () {
          var _0x1279fd = _0x336c41(_0x2d31f9().mark(function _0x2d8d10(_0xea7d01, _0x477f57) {
            var _0x10d639;
            var _0x3d6a43;
            return _0x2d31f9().wrap(function (_0x5ed020) {
              for (;;) {
                switch (_0x5ed020.prev = _0x5ed020.next) {
                  case 0:
                    _0x10d639 = _0xea7d01 ? _0x49af02 : _0x25ad6a;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x3d6a43 = function (_0x589977) {
                      "AnimationEvent" === _0x589977 && (null == _0x477f57 || _0x477f57());
                    };
                    _0x5ed020.next = 6;
                    return _0x1b05c3.PlayAnimation(this.m_spine, _0x10d639, false, 0, _0x3d6a43);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x5ed020.stop();
                }
              }
            }, _0x2d8d10, this);
          }));
          return function (_0x16061c, _0x4cad64) {
            return _0x1279fd.apply(this, arguments);
          };
        }();
        _0x525852.ShowFGDeclare = function () {
          var _0x4e81d7 = _0x336c41(_0x2d31f9().mark(function _0x1a8a75(_0x37efe7, _0xb61963) {
            var _0x5220fb;
            var _0x4bbaaa;
            return _0x2d31f9().wrap(function (_0x110c31) {
              for (;;) {
                switch (_0x110c31.prev = _0x110c31.next) {
                  case 0:
                    _0x5220fb = _0x37efe7 ? _0x2428bc : _0x103f0f;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x4bbaaa = function (_0x2c6bdb) {
                      "AnimationEvent" === _0x2c6bdb && (null == _0xb61963 || _0xb61963());
                    };
                    _0x110c31.next = 6;
                    return _0x1b05c3.PlayAnimation(this.m_spine, _0x5220fb, false, 0, _0x4bbaaa);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x110c31.stop();
                }
              }
            }, _0x1a8a75, this);
          }));
          return function (_0x50a02d, _0x545c61) {
            return _0x4e81d7.apply(this, arguments);
          };
        }();
        _0x525852.ShowFGCompliment = function () {
          var _0x449ab2 = _0x336c41(_0x2d31f9().mark(function _0x27a21f(_0xce30cb, _0x46d076) {
            var _0x5b3718;
            var _0x402700;
            return _0x2d31f9().wrap(function (_0x3e3a6d) {
              for (;;) {
                switch (_0x3e3a6d.prev = _0x3e3a6d.next) {
                  case 0:
                    _0x5b3718 = _0xce30cb ? _0x26e086 : _0x2d7074;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x402700 = function (_0x1b5968) {
                      "AnimationEvent" === _0x1b5968 && (null == _0x46d076 || _0x46d076());
                    };
                    _0x3e3a6d.next = 6;
                    return _0x1b05c3.PlayAnimation(this.m_spine, _0x5b3718, false, 0, _0x402700);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x3e3a6d.stop();
                }
              }
            }, _0x27a21f, this);
          }));
          return function (_0x20ba5e, _0x239bd1) {
            return _0x449ab2.apply(this, arguments);
          };
        }();
        _0x525852.Prepare = function (_0xf10d5a) {
          this.node.active = true;
          this.m_spine.paused = false;
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
          _0x1b05c3.PlayAnimation(this.m_spine, _0xf10d5a ? _0x49af02 : _0x25ad6a);
          this.m_spine.paused = true;
        };
        _0x525852.Rotation = function (_0x14812a) {
          if (this.node.active) {
            var _0x56303c = _0x14812a ? _0x49af02 : _0x25ad6a;
            this.m_spine.paused = false;
            this.m_spine.clearTracks();
            this.m_spine.setToSetupPose();
            _0x1b05c3.PlayAnimation(this.m_spine, _0x56303c);
            this.m_spine.paused = true;
          }
        };
        return _0x47392b;
      }(_0x95667d)).prototype, "m_spine", [_0x5889aa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3f50e0 = _0x5eb348));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      var _0x52ff5d = _0x3a9fe8.ccclass;
      var _0xa64bad = _0x3a9fe8.property;
      var _0x1a0f69 = _0x3a9fe8.menu;
      var _0x36307f = {
        None: 0
      };
      var _0x33b60f = _0xe387d3(_0x36307f);
      var _0x56e95e = 3.1415927;
      var _0x35090a = _0x56e95e / 180;
      function _0x24baa8(_0x12750a, _0x1b451d, _0x571902, _0x45958a, _0x45db02) {
        var _0x39aaf5;
        _0x39aaf5 = _0x45db02;
        var _0x175dfb = Math.sin(_0x39aaf5 * _0x35090a);
        var _0x1f8395 = function (_0xd47020) {
          return Math.cos(_0xd47020 * _0x35090a);
        }(_0x45db02);
        return 57.29577866666166 * Math.atan2(_0x1f8395 * _0x571902 + _0x175dfb * _0x45958a, _0x1f8395 * _0x12750a + _0x175dfb * _0x1b451d);
      }
      var _0x21b264;
      var _0x10be2e;
      var _0x493757;
      var _0x4d6b96;
      var _0x4bd195;
      var _0x4e721d;
      var _0x1b6087;
      var _0x5fa9d0;
      var _0xc794e;
      var _0x42e7df;
      var _0x520e5c;
      var _0x2f5373;
      var _0xa06a58;
      var _0x5035a9;
      var _0x43aeb4;
      var _0x59fb84;
      var _0x4d7998;
      var _0x2141f2;
      var _0x18f6fe;
      var _0x205492;
      var _0x5af1ad;
      var _0xd9b02d;
      var _0x5a0cfd;
      var _0xdd2b36;
      var _0xa2c0f1;
      var _0x1ec808;
      var _0x5da744;
      var _0x532e39;
      var _0x2cbdc8;
      var _0x4e027c;
      var _0x197714;
      var _0x1a3bc6;
      var _0x1a2fe8;
      var _0xe9888f;
      var _0x409745;
      var _0x39a1a0;
      var _0x3abb77;
      var _0x164ad4;
      var _0x283e42;
      var _0x36586a;
      _0x50d103 = _0x52ff5d("BoneFollow");
      _0x37d272 = _0x1a0f69("Chiron/Spine/BoneFollow");
      _0x2c1bf6 = _0xa64bad({
        type: _0x5d11dd.Skeleton,
        tooltip: "目標 Spine 骨架"
      });
      _0x1974b6 = _0xa64bad({
        tooltip: "目標同步骨骼名稱"
      });
      _0x3bc22e = _0xa64bad({
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x44d521 = _0xa64bad({
        tooltip: "是否同步位置"
      });
      _0x3021ff = _0xa64bad({
        tooltip: "是否同步旋轉"
      });
      _0x467d45 = _0xa64bad({
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x1dab88 = _0xa64bad({
        tooltip: "是否同步縮放"
      });
      _0x4718fb = _0xa64bad({
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0xa4eea6 = _0xa64bad({
        visible: false
      });
      _0x38f163 = _0xa64bad({
        type: _0x33b60f,
        visible: true,
        displayName: "Bone"
      });
      _0x379f82 = _0xa64bad({
        visible: true,
        displayName: "Preview"
      });
      _0x24daa5 = _0xa64bad({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x1cc11d = _0xa64bad({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_isFollowScale;
        }
      });
      _0xb8253d = _0xa64bad({
        type: _0x51b564,
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_isFollowPosition;
        }
      });
      _0x5ad7e4 = _0xa64bad({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_isFollowRotation;
        }
      });
      _0x50d103(_0x53d52d = _0x37d272(((_0x1e5449 = function (_0x5b2209) {
        function _0x545605() {
          for (var _0xcaaae3, _0x1933a3 = arguments.length, _0x39ba66 = new Array(_0x1933a3), _0x1f3eeb = 0; _0x1f3eeb < _0x1933a3; _0x1f3eeb++) {
            _0x39ba66[_0x1f3eeb] = arguments[_0x1f3eeb];
          }
          (_0xcaaae3 = _0x5b2209.call.apply(_0x5b2209, [this].concat(_0x39ba66)) || this).editor = undefined;
          _0x24d38a(_0xcaaae3, "m_spineSkeleton", _0x2bd6d1, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_boneName", _0x728954, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isCacheData", _0x1f2cc7, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isFollowPosition", _0xce1252, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isFollowRotation", _0x178835, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isRotationLocalization", _0x3ccab4, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isFollowScale", _0x43c055, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_isScaleLocalization", _0x45ed1f, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "__boneIndex", _0x196470, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "_boneIndex", _0xe30ee8, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_preview", _0x1105a1, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_cacheAncestors", _0x111108, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_scaleFactor", _0x315ab1, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_positionOffset", _0x4da258, _0x2d2983(_0xcaaae3));
          _0x24d38a(_0xcaaae3, "m_rotationFactor", _0x2f9141, _0x2d2983(_0xcaaae3));
          _0xcaaae3._oldAngle = 0;
          _0xcaaae3._oldScaleX = 1;
          _0xcaaae3._oldScaleY = 1;
          _0xcaaae3._isCached = false;
          _0xcaaae3._cachedRotation = 0;
          _0xcaaae3._cachedScaleX = 1;
          _0xcaaae3._cachedScaleY = 1;
          return _0xcaaae3;
        }
        _0x206df9(_0x545605, _0x5b2209);
        var _0x242e19 = _0x545605.prototype;
        _0x242e19.__preload = function () {};
        _0x242e19.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x242e19.update = function () {
          if (this.m_spineSkeleton && "" != this.m_boneName && (this.m_isFollowPosition || this.m_isFollowRotation || this.m_isFollowScale)) {
            var _0x4b5e16 = null;
            if (_0x4b5e16 = this.m_spineSkeleton.findBone(this.m_boneName)) {
              var _0x33713b;
              var _0x31b60c;
              var _0x3cee3f;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x36cb51 = 0, _0x42932c = 0, _0x3a7186 = 1, _0x140408 = 1, _0x18623b = 1, _0x5b7b9d = 1, _0x1298dc = this.m_spineSkeleton.node; _0x1298dc;) {
                  _0x3a7186 *= _0x1298dc.scale.x;
                  _0x140408 *= _0x1298dc.scale.y;
                  _0x36cb51 += _0x1298dc.angle;
                  _0x1298dc = _0x1298dc.parent;
                }
                for (_0x1298dc = this.node.parent; _0x1298dc;) {
                  _0x18623b *= _0x1298dc.scale.x;
                  _0x5b7b9d *= _0x1298dc.scale.y;
                  _0x42932c -= _0x1298dc.angle;
                  _0x1298dc = _0x1298dc.parent;
                }
                this._cachedRotation = _0x36cb51 + _0x42932c;
                this._cachedScaleX = _0x3a7186 / _0x18623b;
                this._cachedScaleY = _0x140408 / _0x5b7b9d;
                this._isCached = true;
              }
              if (_0x33713b = this.m_isRotationLocalization ? this._cachedRotation : this._oldAngle, _0x31b60c = this.m_isScaleLocalization ? this._cachedScaleX : this._oldScaleX, _0x3cee3f = this.m_isScaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_isFollowRotation) {
                var _0x44c54d = _0x4b5e16.parent;
                var _0x13e45a = _0x4b5e16.arotation;
                this.node.angle = _0x33713b + (_0x375e9d(_0x44c54d) ? _0x24baa8(_0x44c54d.a, _0x44c54d.b, _0x44c54d.c, _0x44c54d.d, _0x13e45a) : _0x4b5e16.arotation) + this.m_rotationFactor;
              }
              if (this.m_isFollowScale && this.node.setScale(_0x31b60c * _0x4b5e16.getWorldScaleX() * this.m_scaleFactor.x, _0x3cee3f * _0x4b5e16.getWorldScaleY() * this.m_scaleFactor.y), this.m_isFollowPosition) {
                var _0x118af4 = this.m_spineSkeleton.node.getComponent(_0x12c13b).convertToWorldSpaceAR(_0x3605b1(_0x4b5e16.worldX, _0x4b5e16.worldY, 0));
                var _0x4d1e58 = this.node.parent.getComponent(_0x12c13b).convertToNodeSpaceAR(_0x118af4);
                this.node.setPosition(_0x3605b1(_0x4d1e58.x + this.m_positionOffset.x, _0x4d1e58.y + this.m_positionOffset.y));
              }
            }
          }
        };
        _0x242e19.onDestroy = function () {
          this._oldAngle = null;
          this._oldScaleX = null;
          this._oldScaleY = null;
          this._isCached = null;
          this._cachedRotation = null;
          this._cachedScaleX = null;
          this._cachedScaleY = null;
          this.m_spineSkeleton = null;
          this.m_boneName = null;
          this.m_cacheAncestors = null;
          this.m_isFollowPosition = null;
          this.m_isFollowRotation = null;
          this.m_isRotationLocalization = null;
          this.m_isFollowScale = null;
          this.m_isScaleLocalization = null;
        };
        _0x242e19.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x242e19._refreshInspector = function () {
          this._updateBoneEnum();
        };
        _0x242e19._boneEnum = function () {
          var _0x2b4728 = _0x5b17cb(_0x36307f);
          this.m_spineSkeleton;
          return _0x2b4728;
        };
        _0x242e19._updateBoneEnum = function () {};
        return _0x545605;
      }(_0x95667d)).BoneFollow = "BoneFollow", _0x2bd6d1 = _0x26bf31((_0x11f239 = _0x1e5449).prototype, "m_spineSkeleton", [_0x2c1bf6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x728954 = _0x26bf31(_0x11f239.prototype, "m_boneName", [_0x1974b6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x1f2cc7 = _0x26bf31(_0x11f239.prototype, "m_isCacheData", [_0x3bc22e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xce1252 = _0x26bf31(_0x11f239.prototype, "m_isFollowPosition", [_0x44d521], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x178835 = _0x26bf31(_0x11f239.prototype, "m_isFollowRotation", [_0x3021ff], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3ccab4 = _0x26bf31(_0x11f239.prototype, "m_isRotationLocalization", [_0x467d45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x43c055 = _0x26bf31(_0x11f239.prototype, "m_isFollowScale", [_0x1dab88], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x45ed1f = _0x26bf31(_0x11f239.prototype, "m_isScaleLocalization", [_0x4718fb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x196470 = _0x26bf31(_0x11f239.prototype, "__boneIndex", [_0xa4eea6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0xe30ee8 = _0x26bf31(_0x11f239.prototype, "_boneIndex", [_0x38f163], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x33b60f.None;
        }
      }), _0x1105a1 = _0x26bf31(_0x11f239.prototype, "m_preview", [_0x379f82], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x111108 = _0x26bf31(_0x11f239.prototype, "m_cacheAncestors", [_0x24daa5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x315ab1 = _0x26bf31(_0x11f239.prototype, "m_scaleFactor", [_0x1cc11d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x5d9e2e(1, 1);
        }
      }), _0x4da258 = _0x26bf31(_0x11f239.prototype, "m_positionOffset", [_0xb8253d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x5d9e2e(0, 0);
        }
      }), _0x2f9141 = _0x26bf31(_0x11f239.prototype, "m_rotationFactor", [_0x5ad7e4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x53d52d = _0x11f239)) || _0x53d52d);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x3c619e;
      var _0x8ee382 = _0x3a9fe8.ccclass;
      var _0x55aa99 = _0x3a9fe8.property;
      var _0x6fc99e = _0x3a9fe8.executeInEditMode;
      !function (_0x42ee14) {
        _0x42ee14[_0x42ee14.default = 1] = "default";
      }(_0x3c619e || (_0x3c619e = {}));
      var _0x60659a = _0xe387d3({});
      var _0x2e4299 = 3.1415927;
      var _0x44cd3d = _0x2e4299 / 180;
      function _0xce85fc(_0x111335, _0x517515, _0x5625fd, _0x5b3aca, _0x1dcf83) {
        var _0x910fb1;
        _0x910fb1 = _0x1dcf83;
        var _0x168590 = Math.sin(_0x910fb1 * _0x44cd3d);
        var _0x37eb25 = function (_0x27474c) {
          return Math.cos(_0x27474c * _0x44cd3d);
        }(_0x1dcf83);
        return 57.29577866666166 * Math.atan2(_0x37eb25 * _0x5625fd + _0x168590 * _0x5b3aca, _0x37eb25 * _0x111335 + _0x168590 * _0x517515);
      }
      var _0x294684;
      var _0x26f107;
      var _0x1fda4c;
      var _0x7331f5;
      var _0x3947e5;
      var _0x435b1a;
      var _0x10e88e;
      var _0x4867e0;
      var _0x39b605;
      var _0x34832d;
      var _0x316b36;
      var _0x5e549a;
      var _0x352169;
      var _0x606312;
      var _0x3ffbbb;
      var _0x4a7189;
      var _0x11a924;
      var _0x888700;
      _0x21b264 = _0x8ee382("NewBoneFollow");
      _0x10be2e = _0x55aa99({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x493757 = _0x55aa99({
        visible: false,
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x4d6b96 = _0x55aa99({
        visible: false,
        tooltip: "是否同步位置"
      });
      _0x4bd195 = _0x55aa99({
        visible: false,
        tooltip: "是否同步旋轉"
      });
      _0x4e721d = _0x55aa99({
        visible: false,
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x1b6087 = _0x55aa99({
        visible: false,
        tooltip: "是否同步縮放"
      });
      _0x5fa9d0 = _0x55aa99({
        visible: false,
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0xc794e = _0x55aa99({
        visible: true,
        displayName: "Preview"
      });
      _0x42e7df = _0x55aa99({
        type: _0x5d11dd.Skeleton,
        visible: false
      });
      _0x520e5c = _0x55aa99({
        visible: true,
        type: _0x5d11dd.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x2f5373 = _0x55aa99({
        visible: false
      });
      _0xa06a58 = _0x55aa99({
        visible: true,
        displayName: "BoneName",
        tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇"
      });
      _0x5035a9 = _0x55aa99({
        type: _0x60659a,
        visible: false
      });
      _0x43aeb4 = _0x55aa99({
        type: _0x60659a,
        visible: true,
        displayName: "SelectFromList",
        tooltip: "可從此下拉選單選擇骨頭"
      });
      _0x59fb84 = _0x55aa99({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x4d7998 = _0x55aa99({
        displayName: "Position",
        tooltip: "是否同步位置"
      });
      _0x2141f2 = _0x55aa99({
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_followPosition;
        }
      });
      _0x18f6fe = _0x55aa99({
        displayName: "Rotation",
        tooltip: "是否同步旋轉"
      });
      _0x205492 = _0x55aa99({
        displayName: "Rotation Localization",
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0x5af1ad = _0x55aa99({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0xd9b02d = _0x55aa99({
        displayName: "Scale",
        tooltip: "是否同步縮放"
      });
      _0x5a0cfd = _0x55aa99({
        displayName: "Scale Localization",
        tooltip: "是否將目標縮放量轉換成區域縮放量",
        visible: function () {
          return this.m_followScale;
        }
      });
      _0xdd2b36 = _0x55aa99({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_followScale;
        }
      });
      _0x21b264(_0xa2c0f1 = _0x6fc99e(((_0x36586a = function (_0x8e3bdd) {
        function _0x1b8a92() {
          for (var _0x1bd9c4, _0x4f80de = arguments.length, _0x4ca8c3 = new Array(_0x4f80de), _0x411e64 = 0; _0x411e64 < _0x4f80de; _0x411e64++) {
            _0x4ca8c3[_0x411e64] = arguments[_0x411e64];
          }
          (_0x1bd9c4 = _0x8e3bdd.call.apply(_0x8e3bdd, [this].concat(_0x4ca8c3)) || this)._oldAngle = 0;
          _0x1bd9c4._oldScaleX = 1;
          _0x1bd9c4._oldScaleY = 1;
          _0x1bd9c4._isCached = false;
          _0x1bd9c4._cachedRotation = 0;
          _0x1bd9c4._cachedScaleX = 1;
          _0x1bd9c4._cachedScaleY = 1;
          _0x1bd9c4._BoneEnumList = [];
          _0x24d38a(_0x1bd9c4, "m_preview", _0x5da744, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_spineSkeleton", _0x532e39, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_boneName", _0x2cbdc8, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "__boneIndex", _0x4e027c, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_cacheAncestors", _0x197714, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_followPosition", _0x1a3bc6, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_positionOffset", _0x1a2fe8, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_followRotation", _0xe9888f, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_rotationLocalization", _0x409745, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_rotationFactor", _0x39a1a0, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_followScale", _0x3abb77, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_scaleLocalization", _0x164ad4, _0x2d2983(_0x1bd9c4));
          _0x24d38a(_0x1bd9c4, "m_scaleFactor", _0x283e42, _0x2d2983(_0x1bd9c4));
          _0x1bd9c4.m_isFirstActive = true;
          return _0x1bd9c4;
        }
        _0x206df9(_0x1b8a92, _0x8e3bdd);
        var _0x28666e = _0x1b8a92.prototype;
        _0x28666e.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x28666e.__preload = function () {};
        _0x28666e.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x28666e.start = function () {};
        _0x28666e.onEnable = function () {
          _0x3ba089.on(_0x20b52a.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x28666e.onDisable = function () {
          _0x3ba089.off(_0x20b52a.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x28666e.onDestroy = function () {
          this._oldAngle = null;
          this._oldScaleX = null;
          this._oldScaleY = null;
          this._isCached = null;
          this._cachedRotation = null;
          this._cachedScaleX = null;
          this._cachedScaleY = null;
          this.m_spineSkeleton = null;
          this.m_boneName = null;
          this.m_cacheAncestors = null;
          this.m_followPosition = null;
          this.m_followRotation = null;
          this.m_rotationLocalization = null;
          this.m_followScale = null;
          this.m_scaleLocalization = null;
        };
        _0x28666e.BoneSync = function () {
          if (this.m_isFirstActive && this.m_spineSkeleton && this.m_spineSkeleton._skeleton && (this.m_isFirstActive = false, this.m_spineSkeleton._skeleton.updateWorldTransform()), this.m_spineSkeleton && "" != this.m_boneName && (this.m_followPosition || this.m_followRotation || this.m_followScale)) {
            var _0x3d4522 = this.m_spineSkeleton.findBone(this.m_boneName);
            if (_0x3d4522) {
              var _0x81e558;
              var _0x2e86da;
              var _0x5d958c;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x48455e = 0, _0x50019f = 0, _0x501f34 = 1, _0x4cc182 = 1, _0x4c9352 = 1, _0x2b541b = 1, _0x1b45a0 = this.m_spineSkeleton.node; _0x1b45a0;) {
                  _0x501f34 *= _0x1b45a0.scale.x;
                  _0x4cc182 *= _0x1b45a0.scale.y;
                  _0x1b45a0.angle && (_0x48455e += _0x1b45a0.angle);
                  _0x1b45a0 = _0x1b45a0.parent;
                }
                for (_0x1b45a0 = this.node.parent; _0x1b45a0;) {
                  _0x4c9352 *= _0x1b45a0.scale.x;
                  _0x2b541b *= _0x1b45a0.scale.y;
                  _0x1b45a0.angle && (_0x50019f -= _0x1b45a0.angle);
                  _0x1b45a0 = _0x1b45a0.parent;
                }
                this._cachedRotation = _0x48455e + _0x50019f;
                this._cachedScaleX = _0x501f34 / _0x4c9352;
                this._cachedScaleY = _0x4cc182 / _0x2b541b;
                this._isCached = true;
              }
              if (_0x81e558 = this.m_rotationLocalization ? this._cachedRotation : this._oldAngle, _0x2e86da = this.m_scaleLocalization ? this._cachedScaleX : this._oldScaleX, _0x5d958c = this.m_scaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_followRotation) {
                var _0x4a2a8d = _0x3d4522.parent;
                var _0x471e41 = _0x3d4522.arotation;
                var _0x423112 = _0x81e558 + (_0x375e9d(_0x4a2a8d) ? _0xce85fc(_0x4a2a8d.a, _0x4a2a8d.b, _0x4a2a8d.c, _0x4a2a8d.d, _0x471e41) : _0x3d4522.arotation) + this.m_rotationFactor;
                this.node.setRotationFromEuler(_0x3605b1(0, 0, _0x423112));
              }
              if (this.m_followScale && this.node.setScale(_0x2e86da * _0x3d4522.getWorldScaleX() * this.m_scaleFactor.x, _0x5d958c * _0x3d4522.getWorldScaleY() * this.m_scaleFactor.y), this.m_followPosition) {
                var _0x12e551 = this.m_spineSkeleton.node.getComponent(_0x12c13b).convertToWorldSpaceAR(_0x3605b1(_0x3d4522.worldX + this.m_positionOffset.x, _0x3d4522.worldY + this.m_positionOffset.y, 0));
                var _0x5e7bb9 = this.node.parent.getComponent(_0x12c13b).convertToNodeSpaceAR(_0x12e551);
                this.node.setPosition(_0x3605b1(_0x5e7bb9.x, _0x5e7bb9.y));
              }
            }
          }
        };
        _0x28666e._refreshInspector = function () {};
        _0x28666e._updateBoneEnum = function () {};
        _0x274fc4(_0x1b8a92, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x3925dd) {
            this.m_spineSkeleton = _0x3925dd;
          }
        }, {
          key: "CacheData",
          get: function () {
            return this.m_cacheData;
          },
          set: function (_0x54e7cc) {
            this.m_cacheData = _0x54e7cc;
          }
        }, {
          key: "FollowPosition",
          get: function () {
            return this.m_followPosition;
          },
          set: function (_0x1ea4e5) {
            this.m_followPosition = _0x1ea4e5;
          }
        }, {
          key: "FollowRotation",
          get: function () {
            return this.m_followRotation;
          },
          set: function (_0x3a6119) {
            this.m_followRotation = _0x3a6119;
          }
        }, {
          key: "RotationLocalization",
          get: function () {
            return this.m_rotationLocalization;
          },
          set: function (_0x4d9624) {
            this.m_rotationLocalization = _0x4d9624;
          }
        }, {
          key: "FollowScale",
          get: function () {
            return this.m_followScale;
          },
          set: function (_0x3bcff8) {
            this.m_followScale = _0x3bcff8;
          }
        }, {
          key: "ScaleLocalization",
          get: function () {
            return this.m_scaleLocalization;
          },
          set: function (_0x2e15d0) {
            this.m_scaleLocalization = _0x2e15d0;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0xaff8b7) {
            console.log("set _spineSkeleton ", this.m_spineSkeleton, "value", _0xaff8b7);
            this.m_spineSkeleton = _0xaff8b7;
            this._refreshInspector();
          }
        }, {
          key: "BoneName",
          get: function () {
            return this.m_boneName;
          },
          set: function (_0x485190) {
            this.m_boneName = _0x485190;
            var _0x1a85fa = false;
            this._BoneEnumList.forEach(function (_0x38cc0f) {
              _0x38cc0f.name != _0x485190 || (_0x1a85fa = true);
            });
            0 == _0x1a85fa ? console.log("[spBoneFollow] 輸入的骨頭", _0x485190, "並不存在！請檢查名稱是否正確！") : console.log("[spBoneFollow] 輸入的骨頭", _0x485190, "已找到！");
          }
        }, {
          key: "_boneIndex",
          get: function () {
            return this.__boneIndex;
          },
          set: function (_0x54a54e) {
            var _0x17373b = this;
            this.__boneIndex = _0x54a54e;
            this._BoneEnumList.forEach(function (_0x3e7cc9) {
              _0x3e7cc9.value == _0x54a54e && (_0x17373b.m_boneName = _0x3e7cc9.name);
            });
            this.__boneIndex = 0;
            console.log("set __boneIndex ", _0x54a54e, "m_boneName:", this.m_boneName);
          }
        }]);
        return _0x1b8a92;
      }(_0x95667d)).NewBoneFollow = "NewBoneFollow", _0x26bf31((_0x1ec808 = _0x36586a).prototype, "Skeleton", [_0x10be2e], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "Skeleton"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "CacheData", [_0x493757], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "CacheData"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "FollowPosition", [_0x4d6b96], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "FollowPosition"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "FollowRotation", [_0x4bd195], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "FollowRotation"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "RotationLocalization", [_0x4e721d], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "RotationLocalization"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "FollowScale", [_0x1b6087], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "FollowScale"), _0x1ec808.prototype), _0x26bf31(_0x1ec808.prototype, "ScaleLocalization", [_0x5fa9d0], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "ScaleLocalization"), _0x1ec808.prototype), _0x5da744 = _0x26bf31(_0x1ec808.prototype, "m_preview", [_0xc794e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x532e39 = _0x26bf31(_0x1ec808.prototype, "m_spineSkeleton", [_0x42e7df], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x26bf31(_0x1ec808.prototype, "_spineSkeleton", [_0x520e5c], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "_spineSkeleton"), _0x1ec808.prototype), _0x2cbdc8 = _0x26bf31(_0x1ec808.prototype, "m_boneName", [_0x2f5373], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x26bf31(_0x1ec808.prototype, "BoneName", [_0xa06a58], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "BoneName"), _0x1ec808.prototype), _0x4e027c = _0x26bf31(_0x1ec808.prototype, "__boneIndex", [_0x5035a9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3c619e.default;
        }
      }), _0x26bf31(_0x1ec808.prototype, "_boneIndex", [_0x43aeb4], Object.getOwnPropertyDescriptor(_0x1ec808.prototype, "_boneIndex"), _0x1ec808.prototype), _0x197714 = _0x26bf31(_0x1ec808.prototype, "m_cacheAncestors", [_0x59fb84], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x1a3bc6 = _0x26bf31(_0x1ec808.prototype, "m_followPosition", [_0x4d7998], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1a2fe8 = _0x26bf31(_0x1ec808.prototype, "m_positionOffset", [_0x2141f2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x5d9e2e(0, 0);
        }
      }), _0xe9888f = _0x26bf31(_0x1ec808.prototype, "m_followRotation", [_0x18f6fe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x409745 = _0x26bf31(_0x1ec808.prototype, "m_rotationLocalization", [_0x205492], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x39a1a0 = _0x26bf31(_0x1ec808.prototype, "m_rotationFactor", [_0x5af1ad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x3abb77 = _0x26bf31(_0x1ec808.prototype, "m_followScale", [_0xd9b02d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x164ad4 = _0x26bf31(_0x1ec808.prototype, "m_scaleLocalization", [_0x5a0cfd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x283e42 = _0x26bf31(_0x1ec808.prototype, "m_scaleFactor", [_0xdd2b36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x5d9e2e(1, 1);
        }
      }), _0xa2c0f1 = _0x1ec808)) || _0xa2c0f1);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x4cdfd8;
      var _0x3b2b2b = _0x3a9fe8.ccclass;
      var _0x358b2b = _0x3a9fe8.property;
      var _0x199115 = _0x3a9fe8.executeInEditMode;
      !function (_0x56f399) {
        _0x56f399[_0x56f399.default = 1] = "default";
      }(_0x4cdfd8 || (_0x4cdfd8 = {}));
      var _0x2801e8;
      var _0x1c678f;
      var _0xa54c34;
      var _0x3c6612;
      var _0x121663;
      var _0x1b0a42;
      var _0x171d78 = _0xe387d3({});
      _0x294684 = _0x3b2b2b("NewSlotColorFollow");
      _0x26f107 = _0x358b2b({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x1fda4c = _0x358b2b({
        visible: true,
        displayName: "Preview"
      });
      _0x7331f5 = _0x358b2b({
        visible: false
      });
      _0x3947e5 = _0x358b2b({
        type: _0x5d11dd.Skeleton,
        visible: false
      });
      _0x435b1a = _0x358b2b({
        visible: true,
        type: _0x5d11dd.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x10e88e = _0x358b2b({
        visible: false
      });
      _0x4867e0 = _0x358b2b({
        visible: true,
        displayName: "SlotName",
        tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇"
      });
      _0x39b605 = _0x358b2b({
        type: _0x171d78,
        visible: false
      });
      _0x34832d = _0x358b2b({
        visible: true,
        displayName: "SelectFromList",
        type: _0x171d78,
        tooltip: "可從此下拉選單選擇插槽"
      });
      _0x294684(_0x316b36 = _0x199115(((_0x888700 = function (_0x5273cb) {
        function _0x5bfe62() {
          for (var _0xbe3247, _0x42eeef = arguments.length, _0x28deff = new Array(_0x42eeef), _0x1efdfe = 0; _0x1efdfe < _0x42eeef; _0x1efdfe++) {
            _0x28deff[_0x1efdfe] = arguments[_0x1efdfe];
          }
          _0xbe3247 = _0x5273cb.call.apply(_0x5273cb, [this].concat(_0x28deff)) || this;
          _0x24d38a(_0xbe3247, "m_preview", _0x352169, _0x2d2983(_0xbe3247));
          _0x24d38a(_0xbe3247, "_colorCache", _0x606312, _0x2d2983(_0xbe3247));
          _0x24d38a(_0xbe3247, "m_spineSkeleton", _0x3ffbbb, _0x2d2983(_0xbe3247));
          _0x24d38a(_0xbe3247, "m_slotName", _0x4a7189, _0x2d2983(_0xbe3247));
          _0x24d38a(_0xbe3247, "__slotIndex", _0x11a924, _0x2d2983(_0xbe3247));
          _0xbe3247._SlotEnumList = [];
          return _0xbe3247;
        }
        _0x206df9(_0x5bfe62, _0x5273cb);
        var _0x568de8 = _0x5bfe62.prototype;
        _0x568de8.__preload = function () {};
        _0x568de8.onLoad = function () {
          this._colorCache = null;
        };
        _0x568de8.start = function () {};
        _0x568de8.onEnable = function () {
          this.ColorSync();
          _0x3ba089.on(_0x20b52a.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x568de8.onDisable = function () {
          _0x3ba089.off(_0x20b52a.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x568de8.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x568de8.ColorSync = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x3f5335 = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0x1535c1 = _0x3f5335 ? 255 * _0x3f5335.color.r : this._colorCache.r;
            var _0x5872af = _0x3f5335 ? 255 * _0x3f5335.color.g : this._colorCache.g;
            var _0x3f56ca = _0x3f5335 ? 255 * _0x3f5335.color.b : this._colorCache.b;
            var _0x1cdbc3 = _0x3f5335 ? 255 * _0x3f5335.color.a : this._colorCache.a;
            null != this._colorCache && _0x3f5335.color.r == this._colorCache.r && _0x3f5335.color.g == this._colorCache.g && _0x3f5335.color.b == this._colorCache.b && _0x3f5335.color.a == this._colorCache.a || (this._colorCache = this._colorCache || new _0x41b4ac.Color(_0x41b4ac.Color.WHITE), this.node.getComponent(_0x45b05f) ? (this.node.getComponent(_0x45b05f).color = _0x3f955c(_0x1535c1, _0x5872af, _0x3f56ca, _0x1cdbc3), this._colorCache.set(this.node.getComponent(_0x45b05f).color)) : this.node.getComponent(_0x1014e2) && (this.node.getComponent(_0x1014e2).color = _0x3f955c(_0x1535c1, _0x5872af, _0x3f56ca, _0x1cdbc3), this._colorCache.set(this.node.getComponent(_0x1014e2).color)), this.node.getComponent(_0x5d4bff) && (this.node.getComponent(_0x5d4bff).opacity = _0x1cdbc3), this._colorCache.a = _0x1cdbc3);
          }
        };
        _0x568de8._refreshInspector = function () {};
        _0x568de8._updateSlotEnum = function () {};
        _0x274fc4(_0x5bfe62, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x4be0b2) {
            this.m_spineSkeleton = _0x4be0b2;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x253624) {}
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x1c6057) {
            this.m_slotName = _0x1c6057;
            var _0xf7344b = false;
            this._SlotEnumList.forEach(function (_0x56a597) {
              _0x56a597.name != _0x1c6057 || (_0xf7344b = true);
            });
            0 == _0xf7344b ? console.log("[spSlotColorFollow] 輸入的插槽", _0x1c6057, "並不存在！請檢查名稱是否正確！") : console.log("[spSlotColorFollow] 輸入的插槽", _0x1c6057, "已找到！");
          }
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0x25050f) {}
        }]);
        return _0x5bfe62;
      }(_0x95667d)).NewSlotColorFollow = "NewSlotColorFollow", _0x26bf31((_0x5e549a = _0x888700).prototype, "Skeleton", [_0x26f107], Object.getOwnPropertyDescriptor(_0x5e549a.prototype, "Skeleton"), _0x5e549a.prototype), _0x352169 = _0x26bf31(_0x5e549a.prototype, "m_preview", [_0x1fda4c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x606312 = _0x26bf31(_0x5e549a.prototype, "_colorCache", [_0x7331f5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x41b4ac.Color(_0x41b4ac.Color.WHITE);
        }
      }), _0x3ffbbb = _0x26bf31(_0x5e549a.prototype, "m_spineSkeleton", [_0x3947e5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x26bf31(_0x5e549a.prototype, "_spineSkeleton", [_0x435b1a], Object.getOwnPropertyDescriptor(_0x5e549a.prototype, "_spineSkeleton"), _0x5e549a.prototype), _0x4a7189 = _0x26bf31(_0x5e549a.prototype, "m_slotName", [_0x10e88e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x26bf31(_0x5e549a.prototype, "SlotName", [_0x4867e0], Object.getOwnPropertyDescriptor(_0x5e549a.prototype, "SlotName"), _0x5e549a.prototype), _0x11a924 = _0x26bf31(_0x5e549a.prototype, "__slotIndex", [_0x39b605], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x4cdfd8.default;
        }
      }), _0x26bf31(_0x5e549a.prototype, "_slotIndex", [_0x34832d], Object.getOwnPropertyDescriptor(_0x5e549a.prototype, "_slotIndex"), _0x5e549a.prototype), _0x316b36 = _0x5e549a)) || _0x316b36);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      var _0x1192cc;
      var _0x250374;
      var _0x189445 = _0x3a9fe8.ccclass;
      var _0x5be9b9 = _0x3a9fe8.property;
      var _0x4c8ac0 = _0x3a9fe8.menu;
      _0x2801e8 = _0x189445("SkeletonSync");
      _0x1c678f = _0x4c8ac0("Chiron/Spine/SkeletonSync");
      _0xa54c34 = _0x5be9b9({
        displayName: "Overlap",
        tooltip: "是否交疊並同步座標、旋轉及縮放"
      });
      _0x2801e8(_0x3c6612 = _0x1c678f((_0x1b0a42 = _0x26bf31((_0x121663 = function (_0x83c9f7) {
        function _0xb1e877() {
          for (var _0x2c3787, _0x3ce608 = arguments.length, _0x3eed4e = new Array(_0x3ce608), _0x4a034c = 0; _0x4a034c < _0x3ce608; _0x4a034c++) {
            _0x3eed4e[_0x4a034c] = arguments[_0x4a034c];
          }
          (_0x2c3787 = _0x83c9f7.call.apply(_0x83c9f7, [this].concat(_0x3eed4e)) || this).m_skeleton = null;
          _0x24d38a(_0x2c3787, "m_overlap", _0x1b0a42, _0x2d2983(_0x2c3787));
          return _0x2c3787;
        }
        _0x206df9(_0xb1e877, _0x83c9f7);
        var _0x1ca1b6 = _0xb1e877.prototype;
        _0x1ca1b6.__preload = function () {
          this.m_skeleton = this.getComponent(_0x5d11dd.Skeleton);
        };
        _0x1ca1b6.Sync = function (_0x9eb258) {
          if (_0x9eb258 && this.m_overlap) {
            for (var _0x5e2b5d = 0, _0x53051e = 1, _0x2ef301 = 1, _0x3cdcba = _0x9eb258; _0x3cdcba;) {
              _0x53051e *= _0x3cdcba.scale.x;
              _0x2ef301 *= _0x3cdcba.scale.y;
              _0x5e2b5d += _0x3cdcba.angle;
              _0x3cdcba = _0x3cdcba.parent;
            }
            this.node.angle = _0x5e2b5d;
            this.node.scale = _0x3605b1(_0x53051e, _0x2ef301, 0);
            var _0x1291df = _0x9eb258.parent.getComponent(_0x12c13b).convertToWorldSpaceAR(_0x9eb258.position);
            var _0x4a6bf6 = this.node.parent.getComponent(_0x12c13b).convertToNodeSpaceAR(_0x1291df);
            this.node.setPosition(_0x4a6bf6);
          }
        };
        _0x274fc4(_0xb1e877, [{
          key: "Skeleton",
          get: function () {
            return this.m_skeleton;
          }
        }]);
        return _0xb1e877;
      }(_0x95667d)).prototype, "m_overlap", [_0xa54c34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x3c6612 = _0x121663)) || _0x3c6612);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      var _0x5214c1;
      var _0x2c189f;
      var _0x3388fb;
      var _0x4d7c23;
      var _0x438e77;
      var _0x181ecd;
      var _0x5e7373;
      var _0x3259c5;
      var _0x41c855;
      var _0x2820b4;
      var _0x4b4003;
      var _0x2ce648;
      var _0x139a9d;
      var _0x1406b1;
      var _0x54163c;
      var _0x102eae;
      var _0x3a57b3;
      var _0xf622d5;
      var _0xab4a1;
      var _0x50b9ad = _0x3a9fe8.ccclass;
      _0x3a9fe8.property;
      var _0x39682c = _0x3a9fe8.menu;
      _0x50b9ad("SlotActivator")(_0x1192cc = _0x39682c("Chiron/Spine/SlotActivator")(((_0x250374 = function (_0x461426) {
        function _0x1edf59() {
          return _0x461426.apply(this, arguments) || this;
        }
        _0x206df9(_0x1edf59, _0x461426);
        _0x274fc4(_0x1edf59, [{
          key: "Identifier",
          get: function () {
            return this.identifier;
          },
          set: function (_0x4e4596) {
            this.identifier = _0x4e4596;
          }
        }, {
          key: "Active",
          get: function () {
            return this.active;
          },
          set: function (_0xfd22a0) {
            this.active = _0xfd22a0;
          }
        }]);
        return _0x1edf59;
      }(_0x95667d)).SlotActivator = "SlotActivator", _0x1192cc = _0x250374)) || _0x1192cc);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      var _0x5cd391 = _0x3a9fe8.ccclass;
      var _0x5a08b6 = _0x3a9fe8.property;
      var _0x5935fb = _0x3a9fe8.menu;
      _0x3a9fe8.inspector;
      var _0x482784 = _0xe387d3({
        None: 0
      });
      var _0x1728d2;
      var _0x2ee1c8;
      var _0x16303a;
      var _0x5c2049;
      var _0x1f2dc8;
      var _0x4e58bb;
      var _0x49986f;
      var _0x320ad5;
      _0x5214c1 = _0x5cd391("SlotColorFollow");
      _0x2c189f = _0x5935fb("Chiron/Spine/SlotColorFollow");
      _0x3388fb = _0x5a08b6({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x4d7c23 = _0x5a08b6({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x438e77 = _0x5a08b6({
        visible: true,
        displayName: "Preview"
      });
      _0x181ecd = _0x5a08b6({
        visible: false,
        type: _0x41b4ac.Color
      });
      _0x5e7373 = _0x5a08b6({
        visible: false,
        type: _0x5d11dd.Skeleton
      });
      _0x3259c5 = _0x5a08b6({
        visible: true,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架",
        type: _0x5d11dd.Skeleton
      });
      _0x41c855 = _0x5a08b6({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x2820b4 = _0x5a08b6({
        visible: false
      });
      _0x4b4003 = _0x5a08b6({
        visible: true,
        displayName: "Slot",
        type: _0x482784
      });
      _0x5214c1(_0x2ce648 = _0x2c189f(((_0xab4a1 = function (_0x1e97ff) {
        function _0x280499() {
          for (var _0xa4f9cf, _0x537dde = arguments.length, _0x2f23a1 = new Array(_0x537dde), _0xb0694a = 0; _0xb0694a < _0x537dde; _0xb0694a++) {
            _0x2f23a1[_0xb0694a] = arguments[_0xb0694a];
          }
          (_0xa4f9cf = _0x1e97ff.call.apply(_0x1e97ff, [this].concat(_0x2f23a1)) || this).editor = undefined;
          _0x24d38a(_0xa4f9cf, "m_preview", _0x1406b1, _0x2d2983(_0xa4f9cf));
          _0x24d38a(_0xa4f9cf, "_colorCache", _0x54163c, _0x2d2983(_0xa4f9cf));
          _0x24d38a(_0xa4f9cf, "m_spineSkeleton", _0x102eae, _0x2d2983(_0xa4f9cf));
          _0x24d38a(_0xa4f9cf, "m_slotName", _0x3a57b3, _0x2d2983(_0xa4f9cf));
          _0x24d38a(_0xa4f9cf, "__slotIndex", _0xf622d5, _0x2d2983(_0xa4f9cf));
          return _0xa4f9cf;
        }
        _0x206df9(_0x280499, _0x1e97ff);
        var _0x3a032d = _0x280499.prototype;
        _0x3a032d.__preload = function () {};
        _0x3a032d.onLoad = function () {
          this.node.getComponent(_0x45b05f) ? this._colorCache = this.node.getComponent(_0x45b05f).color : this.node.getComponent(_0x1014e2) && (this._colorCache = this.node.getComponent(_0x1014e2).color);
        };
        _0x3a032d.update = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x4291f8 = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0xecec06 = _0x4291f8 ? 255 * _0x4291f8.color.r : this._colorCache.r;
            var _0x4fdce4 = _0x4291f8 ? 255 * _0x4291f8.color.g : this._colorCache.g;
            var _0x2457ef = _0x4291f8 ? 255 * _0x4291f8.color.b : this._colorCache.b;
            var _0x487205 = _0x4291f8 ? 255 * _0x4291f8.color.a : this._colorCache.a;
            _0xecec06 == this._colorCache.r && _0x4fdce4 == this._colorCache.g && _0x2457ef == this._colorCache.b && _0x487205 == this._colorCache.a || (this.node.getComponent(_0x45b05f) ? (this.node.getComponent(_0x45b05f).color = _0x3f955c(_0xecec06, _0x4fdce4, _0x2457ef, _0x487205), this._colorCache.set(this.node.getComponent(_0x45b05f).color)) : this.node.getComponent(_0x1014e2) && (this.node.getComponent(_0x1014e2).color = _0x3f955c(_0xecec06, _0x4fdce4, _0x2457ef, _0x487205), this._colorCache.set(this.node.getComponent(_0x1014e2).color)), this.node.getComponent(_0x5d4bff) && (this.node.getComponent(_0x5d4bff).opacity = _0x487205), this._colorCache.a = _0x487205);
          }
        };
        _0x3a032d.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x3a032d._refreshInspector = function () {};
        _0x3a032d._slotEnum = function () {};
        _0x3a032d._updateSlotEnum = function () {
          var _0x295eaa;
          var _0xd14784;
          var _0x558575;
          var _0x251583;
          var _0x2aa90c = this._slotEnum();
          _0x295eaa = this;
          _0xd14784 = "_slotIndex";
          _0x558575 = _0x2aa90c || _0x482784;
          _0x251583 = _0xe387d3.getList(_0xe387d3(_0x558575));
          _0xb90af7.Attr.setClassAttr(_0x295eaa, _0xd14784, "type", "Enum");
          _0xb90af7.Attr.setClassAttr(_0x295eaa, _0xd14784, "enumList", _0x251583);
        };
        _0x3a032d.notify = function () {};
        _0x274fc4(_0x280499, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x8993b7) {
            this.m_spineSkeleton = _0x8993b7;
          }
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x1ad08c) {
            this.m_slotName = _0x1ad08c;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {},
          set: function (_0x3edaa1) {}
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0x177753) {}
        }]);
        return _0x280499;
      }(_0x95667d)).SlotColorFollow = "SlotColorFollow", _0x26bf31((_0x139a9d = _0xab4a1).prototype, "Skeleton", [_0x3388fb], Object.getOwnPropertyDescriptor(_0x139a9d.prototype, "Skeleton"), _0x139a9d.prototype), _0x26bf31(_0x139a9d.prototype, "SlotName", [_0x4d7c23], Object.getOwnPropertyDescriptor(_0x139a9d.prototype, "SlotName"), _0x139a9d.prototype), _0x1406b1 = _0x26bf31(_0x139a9d.prototype, "m_preview", [_0x438e77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x54163c = _0x26bf31(_0x139a9d.prototype, "_colorCache", [_0x181ecd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x41b4ac.Color(_0x41b4ac.Color.WHITE);
        }
      }), _0x102eae = _0x26bf31(_0x139a9d.prototype, "m_spineSkeleton", [_0x5e7373], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x26bf31(_0x139a9d.prototype, "_spineSkeleton", [_0x3259c5], Object.getOwnPropertyDescriptor(_0x139a9d.prototype, "_spineSkeleton"), _0x139a9d.prototype), _0x3a57b3 = _0x26bf31(_0x139a9d.prototype, "m_slotName", [_0x41c855], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0xf622d5 = _0x26bf31(_0x139a9d.prototype, "__slotIndex", [_0x2820b4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x26bf31(_0x139a9d.prototype, "_slotIndex", [_0x4b4003], Object.getOwnPropertyDescriptor(_0x139a9d.prototype, "_slotIndex"), _0x139a9d.prototype), _0x2ce648 = _0x139a9d)) || _0x2ce648);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      var _0x274db3 = _0x3a9fe8.ccclass;
      var _0x291527 = _0x3a9fe8.property;
      var _0x4c6c1c = _0x3a9fe8.menu;
      _0x1728d2 = _0x274db3("SlotCulling");
      _0x2ee1c8 = _0x4c6c1c("Chiron/Spine/SlotCulling");
      _0x16303a = _0x291527({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x5c2049 = _0x291527({
        visible: false,
        tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)"
      });
      _0x1f2dc8 = _0x291527({
        visible: false,
        tooltip: "遭剔除的 Slot 項目名稱"
      });
      _0x1728d2(_0x4e58bb = _0x2ee1c8(((_0x320ad5 = function (_0x19afa6) {
        function _0x3fc05a() {
          return _0x19afa6.apply(this, arguments) || this;
        }
        _0x206df9(_0x3fc05a, _0x19afa6);
        _0x274fc4(_0x3fc05a, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x57a469) {
            this.m_spineSkeleton = _0x57a469;
          }
        }, {
          key: "Invert",
          get: function () {
            return this.m_invert;
          },
          set: function (_0x518f96) {
            this.m_invert = _0x518f96;
          }
        }, {
          key: "CullingList",
          get: function () {
            return this._cullingSlotNames;
          }
        }], [{
          key: "Name",
          get: function () {
            return _0x3fc05a.SlotCulling;
          }
        }]);
        return _0x3fc05a;
      }(_0x95667d)).SlotCulling = "SlotCulling", _0x26bf31((_0x49986f = _0x320ad5).prototype, "Skeleton", [_0x16303a], Object.getOwnPropertyDescriptor(_0x49986f.prototype, "Skeleton"), _0x49986f.prototype), _0x26bf31(_0x49986f.prototype, "Invert", [_0x5c2049], Object.getOwnPropertyDescriptor(_0x49986f.prototype, "Invert"), _0x49986f.prototype), _0x26bf31(_0x49986f.prototype, "CullingList", [_0x1f2dc8], Object.getOwnPropertyDescriptor(_0x49986f.prototype, "CullingList"), _0x49986f.prototype), _0x4e58bb = _0x49986f)) || _0x4e58bb);
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x308f79;
      var _0x513b7d;
      var _0xcb5f25;
      var _0x36ed30;
      var _0x109647;
      var _0x399af8;
      var _0x184011;
      var _0x2fb037;
      var _0x15f90e;
      var _0x9fd646;
      var _0x2c73f5;
      var _0x2c6a85;
      var _0x46d24a;
      var _0x467d43;
      var _0x2b7d9b;
      var _0x4b6b17;
      var _0x3baf35;
      var _0x5de655;
      var _0x1eb8ed;
      var _0x47bab7;
      var _0x4d5b65;
      var _0x5939ad;
      var _0x535a03;
      var _0x4b3b8c;
      var _0x4b40b7;
      var _0x18fba9;
      var _0x2d89b6;
      var _0x4e4d5;
      var _0x500e86;
      var _0x7129ba;
      var _0x41a188;
      var _0x143844;
      var _0x79df52;
      var _0xd0048d;
      var _0x5c5a07;
      var _0x407bcf;
      var _0x561793;
      var _0x4c05ee;
      var _0x25e4a3;
      var _0x387759;
      var _0x3f765d;
      var _0x3871e3;
      var _0x364b5d;
      var _0x1a0ead;
      var _0x1c07c6;
      var _0x40a53c;
      var _0x370ae6;
      var _0x5b6bb0;
      var _0x5eb7da;
      var _0x14e521;
      var _0x12dfc8;
      var _0x1cc89b;
      var _0x211953;
      var _0xff0bed;
      var _0x4f6511;
      var _0x20feac;
      var _0x1fca8b;
      var _0x244c56;
      var _0x130d57;
      var _0x2fb36c;
      var _0x44b8c2;
      var _0x462992;
      var _0x18ccdf;
      var _0x41417c;
      var _0x12b9b0;
      var _0x2f3ce4;
      var _0x4f4302;
      var _0x2270eb;
      var _0x14f8b3;
      var _0x2e9230;
      var _0xa6ef01;
      var _0x2c9601;
      var _0x16a516 = new Map();
      var _0x3520c1 = new Map();
      var _0x467265 = new Map();
      var _0x15384b = function () {
        function _0x428886() {
          this.loadedZipNames = new Array();
        }
        var _0x327c22 = _0x428886.prototype;
        _0x327c22.downloadZip = function (_0x5a9eca, _0x2bc00e) {
          return new Promise(function (_0x2264b0) {
            var _0x41b349 = _0x5a9eca.match(/[^/]+$/);
            if (null !== _0x41b349) {
              var _0x29dc8a = "" + _0x41b349[0] + _0x2bc00e + ".zip";
              _0x5f556e.downloader.downloadFile(_0x5a9eca + "/" + _0x29dc8a, {
                xhrResponseType: "arraybuffer"
              }, null, function (_0x40a67e, _0x4330ec) {
                _0x2264b0(_0x4330ec);
              });
            } else {
              _0x2264b0(null);
            }
          });
        };
        _0x327c22.loadZip = function () {
          var _0x13c665 = _0x336c41(_0x2d31f9().mark(function _0x4ca0d1(_0x3a5c3c, _0x1a1bac) {
            var _0x46850b;
            var _0x4fe676;
            var _0x5b8de3;
            return _0x2d31f9().wrap(function (_0x4b7892) {
              for (;;) {
                switch (_0x4b7892.prev = _0x4b7892.next) {
                  case 0:
                    _0x46850b = _0x1a1bac ? "." + _0x1a1bac : "";
                    _0x4b7892.next = 3;
                    return this.downloadZip(_0x3a5c3c, _0x46850b);
                  case 3:
                    null !== (_0x4fe676 = _0x4b7892.sent) && (_0x5b8de3 = _0x3a5c3c.replace(/(.*?)\/assets\//, "assets/"), globalThis.fflate.unzip(new Uint8Array(_0x4fe676), function (_0x53f021, _0x18aaab) {
                      _0x53f021 ? console.warn("Unzip failed:", _0x53f021.message) : Object.keys(_0x18aaab).forEach(function (_0x52b45e) {
                        _0x16a516.set(_0x3a5c3c + "/" + _0x52b45e, _0x18aaab[_0x52b45e]);
                        _0x16a516.set(_0x5b8de3 + "/" + _0x52b45e, _0x18aaab[_0x52b45e]);
                      });
                    }));
                  case 5:
                  case "end":
                    return _0x4b7892.stop();
                }
              }
            }, _0x4ca0d1, this);
          }));
          return function (_0x3f67ce, _0x2f8eac) {
            return _0x13c665.apply(this, arguments);
          };
        }();
        _0x327c22.init = function () {
          if (globalThis.fflate) {
            var _0x2191e1 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                return this.ZipCacheUrl ? _0x3520c1.get(this.ZipCacheUrl) : _0x2191e1.get.call(this);
              },
              set: function (_0x2d462c) {},
              configurable: true
            });
            var _0x5adaa = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x3ba616, _0x3672df, _0x34c276, _0x236b77, _0x349982) {
              _0x16a516.has(_0x3672df) && (this.ZipCacheUrl = _0x3672df);
              return _0x5adaa.apply(this, arguments);
            };
            var _0x34e035 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x336c41(_0x2d31f9().mark(function _0x2c7f7d(_0x2ab523) {
              var _0x2e03a5;
              var _0x52f106;
              var _0x3ec088;
              var _0x2b5ac9;
              var _0xd29b73;
              var _0x24d455;
              var _0x478015;
              var _0x424a1e;
              var _0x1cc867 = arguments;
              return _0x2d31f9().wrap(function (_0x11732c) {
                for (;;) {
                  switch (_0x11732c.prev = _0x11732c.next) {
                    case 0:
                      if (!this.ZipCacheUrl) {
                        _0x11732c.next = 26;
                        break;
                      }
                      if (_0x3520c1.has(this.ZipCacheUrl)) {
                        _0x11732c.next = 24;
                        break;
                      }
                      _0x2e03a5 = this.responseType;
                      _0x52f106 = _0x16a516.get(this.ZipCacheUrl);
                      _0x3ec088 = null;
                      _0x11732c.t0 = _0x2e03a5;
                      _0x11732c.next = "arraybuffer" === _0x11732c.t0 ? 8 : "json" === _0x11732c.t0 ? 10 : "text" === _0x11732c.t0 ? 14 : 17;
                      break;
                    case 8:
                      _0x3ec088 = _0x52f106.buffer ? _0x52f106.buffer : _0x52f106;
                      return _0x11732c.abrupt("break", 18);
                    case 10:
                      _0x2b5ac9 = new TextDecoder();
                      _0xd29b73 = _0x2b5ac9.decode(_0x52f106);
                      _0x3ec088 = JSON.parse(_0xd29b73);
                      return _0x11732c.abrupt("break", 18);
                    case 14:
                      _0x24d455 = new TextDecoder();
                      _0x3ec088 = _0x24d455.decode(_0x52f106);
                      return _0x11732c.abrupt("break", 18);
                    case 17:
                      console.error("Unknown type in zipCache:", _0x2e03a5);
                    case 18:
                      (_0x478015 = _0x467265.get(this.ZipCacheUrl)) && (_0x3520c1.delete(this.ZipCacheUrl + "@version" + _0x478015), _0x467265.delete(this.ZipCacheUrl));
                      _0x424a1e = performance.now();
                      _0x467265.set(this.ZipCacheUrl, _0x424a1e);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x424a1e;
                      _0x3520c1.set(this.ZipCacheUrl, _0x3ec088);
                    case 24:
                      this.onload();
                      return _0x11732c.abrupt("return");
                    case 26:
                      return _0x11732c.abrupt("return", _0x34e035.apply(this, _0x1cc867));
                    case 27:
                    case "end":
                      return _0x11732c.stop();
                  }
                }
              }, _0x2c7f7d, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x428886;
      }();
      var _0x28c299 = globalThis.__zipBundleLoader;
      globalThis.fflate && !_0x28c299 && (_0x28c299 = new _0x15384b(), globalThis.__zipBundleLoader = _0x28c299, _0x28c299.init());
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x15aac3;
      var _0x4aa892 = ["game"];
      var _0x1950ce = _0x3a9fe8.ccclass;
      var _0x1aa42a = _0x3a9fe8.property;
      !function (_0x310f8e) {
        _0x310f8e[_0x310f8e.CommonMainBundle = 0] = "CommonMainBundle";
        _0x310f8e[_0x310f8e.CommonBundle = 1] = "CommonBundle";
        _0x310f8e[_0x310f8e.OtherBundle = 2] = "OtherBundle";
        _0x310f8e[_0x310f8e.DefaultLangBundle = 3] = "DefaultLangBundle";
        _0x310f8e[_0x310f8e.LangTextBundle = 4] = "LangTextBundle";
        _0x310f8e[_0x310f8e.GameBundle = 5] = "GameBundle";
      }(_0x15aac3 || (_0x15aac3 = {}));
      var _0x3f52d4;
      var _0xf5fe8d;
      var _0x5b5cab = "en";
      var _0x251887 = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220];
      var _0x4c194c = [3];
      var _0x4a6bd2 = {
        JILI: 0,
        TADA: 1,
        ACE_ROYALE: 2,
        JILI_START: 3,
        TADA_CASINO: 4,
        NONE: 5,
        UFA: 6
      };
      !function (_0x1a19cf) {
        _0x1a19cf[_0x1a19cf.None = 0] = "None";
        _0x1a19cf[_0x1a19cf.AutoPlaySettingPanel = 1] = "AutoPlaySettingPanel";
        _0x1a19cf[_0x1a19cf.AutoPlaySettingPanel_DFI = 2] = "AutoPlaySettingPanel_DFI";
        _0x1a19cf[_0x1a19cf.AutoPlaySettingPanel_DFIII = 3] = "AutoPlaySettingPanel_DFIII";
        _0x1a19cf[_0x1a19cf.AutoPlaySettingPanel_BS = 4] = "AutoPlaySettingPanel_BS";
        _0x1a19cf[_0x1a19cf.AutoPlaySetting_AG2 = 5] = "AutoPlaySetting_AG2";
        _0x1a19cf[_0x1a19cf.AutoPlaySetting_FD = 6] = "AutoPlaySetting_FD";
        _0x1a19cf[_0x1a19cf.AutoPlaySettingPanel_MS = 7] = "AutoPlaySettingPanel_MS";
      }(_0x3f52d4 || (_0x3f52d4 = {}));
      (function (_0x1a77cb) {
        _0x1a77cb[_0x1a77cb.None = 0] = "None";
        _0x1a77cb[_0x1a77cb.Dark = 1] = "Dark";
      })(_0xf5fe8d || (_0xf5fe8d = {}));
      var _0x2b3cc7;
      var _0x5e78d7;
      var _0x54d69e;
      var _0x340a01;
      var _0x14f5b5;
      var _0x44e6aa;
      var _0x3ea1d0;
      var _0x483bba;
      var _0x38c509;
      var _0x39a2f5;
      var _0x15e7b9;
      var _0x593c06;
      _0x308f79 = _0x1950ce("StyleSetting");
      _0x513b7d = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否有骰子造型"
      });
      _0xcb5f25 = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否有萬聖造型"
      });
      _0x36ed30 = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否有聖誕造型"
      });
      _0x109647 = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否有OKBET廠商造型"
      });
      _0x399af8 = _0x1aa42a({
        type: _0xe387d3(_0xf5fe8d),
        tooltip: "系列"
      });
      var _0x3f492e = _0x308f79((_0x15f90e = _0x26bf31((_0x2fb037 = function () {
        _0x24d38a(this, "HasDice", _0x15f90e, this);
        _0x24d38a(this, "HasHolloween", _0x9fd646, this);
        _0x24d38a(this, "HasXmas", _0x2c73f5, this);
        _0x24d38a(this, "HasOkbet", _0x2c6a85, this);
        _0x24d38a(this, "Series", _0x46d24a, this);
      }).prototype, "HasDice", [_0x513b7d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x9fd646 = _0x26bf31(_0x2fb037.prototype, "HasHolloween", [_0xcb5f25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2c73f5 = _0x26bf31(_0x2fb037.prototype, "HasXmas", [_0x36ed30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2c6a85 = _0x26bf31(_0x2fb037.prototype, "HasOkbet", [_0x109647], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x46d24a = _0x26bf31(_0x2fb037.prototype, "Series", [_0x399af8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xf5fe8d.None;
        }
      }), _0x184011 = _0x2fb037)) || _0x184011;
      _0x467d43 = _0x1950ce("PlayTypeSetting");
      _0x2b7d9b = _0x1aa42a({
        type: _0x379292,
        tooltip: "Match"
      });
      _0x4b6b17 = _0x1aa42a({
        type: _0x379292,
        tooltip: "Break"
      });
      var _0x26c3a5 = _0x467d43((_0x1eb8ed = _0x26bf31((_0x5de655 = function () {
        _0x24d38a(this, "Match", _0x1eb8ed, this);
        _0x24d38a(this, "Break", _0x47bab7, this);
      }).prototype, "Match", [_0x2b7d9b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x47bab7 = _0x26bf31(_0x5de655.prototype, "Break", [_0x4b6b17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3baf35 = _0x5de655)) || _0x3baf35;
      _0x4d5b65 = _0x1aa42a({
        type: _0x351d92,
        tooltip: "遊戲縮寫(server位置)"
      });
      _0x5939ad = _0x1aa42a({
        type: String,
        tooltip: "遊戲主場prefab路徑"
      });
      _0x535a03 = _0x1aa42a({
        type: String,
        tooltip: "遊戲多語系圖片路徑"
      });
      _0x4b3b8c = _0x1aa42a({
        type: String,
        tooltip: "遊戲ID"
      });
      _0x4b40b7 = _0x1aa42a({
        type: String,
        tooltip: "Logo名稱，只要給到底線之前"
      });
      _0x18fba9 = _0x1aa42a({
        type: Boolean,
        tooltip: "鎖定橫版"
      });
      _0x2d89b6 = _0x1aa42a({
        type: Boolean,
        tooltip: "鎖定直版"
      });
      _0x4e4d5 = _0x1aa42a({
        type: Boolean,
        tooltip: "是否為街機"
      });
      _0x500e86 = _0x1aa42a({
        type: _0x294c48,
        tooltip: "不分語系LOGO"
      });
      _0x7129ba = _0x1aa42a({
        type: _0x3398ed,
        tooltip: "遊戲Logo合圖"
      });
      _0x41a188 = _0x1aa42a({
        type: _0x351d92,
        tooltip: "展示頁"
      });
      _0x143844 = _0x1aa42a({
        type: String,
        tooltip: "敘述圖名稱"
      });
      _0x79df52 = _0x1aa42a({
        type: _0x294c48,
        tooltip: "特色圖"
      });
      _0xd0048d = _0x1aa42a({
        type: _0x294c48,
        tooltip: "背景圖，0:直,1:橫"
      });
      _0x5c5a07 = _0x1aa42a({
        type: _0x294c48,
        tooltip: "腳色"
      });
      _0x407bcf = _0x1aa42a({
        type: Number,
        tooltip: "辣椒數"
      });
      _0x561793 = _0x1aa42a({
        type: Number,
        tooltip: "最大贏分倍率"
      });
      _0x4c05ee = _0x1aa42a({
        type: _0xe387d3(_0x3f52d4),
        tooltip: "自動玩介面"
      });
      _0x25e4a3 = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否開啟晚3秒ShowGameScene進入遊戲"
      });
      _0x387759 = _0x1aa42a({
        type: _0x379292,
        tooltip: "可以跳過前導動畫"
      });
      _0x3f765d = _0x1aa42a({
        type: _0x3f492e,
        tooltip: "是否有其他特色樣式"
      });
      _0x3871e3 = _0x1aa42a({
        type: _0x26c3a5,
        tooltip: "是否有其他特色樣式"
      });
      _0x364b5d = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否為遠程包"
      });
      _0x1a0ead = _0x1aa42a({
        type: _0x379292,
        tooltip: "是否是SSS版"
      });
      _0x1c07c6 = _0x1aa42a({
        type: _0x351d92,
        tooltip: "使用哪個遠程包版本"
      });
      _0x1950ce((_0x5b6bb0 = _0x26bf31((_0x370ae6 = function (_0x4fd82f) {
        function _0x26d0a2() {
          for (var _0x4786f7, _0x5c84d2 = arguments.length, _0x95b32d = new Array(_0x5c84d2), _0xb75540 = 0; _0xb75540 < _0x5c84d2; _0xb75540++) {
            _0x95b32d[_0xb75540] = arguments[_0xb75540];
          }
          _0x4786f7 = _0x4fd82f.call.apply(_0x4fd82f, [this].concat(_0x95b32d)) || this;
          _0x24d38a(_0x4786f7, "m_gameShortName", _0x5b6bb0, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_scenePrefabPath", _0x5eb7da, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_gameImgPath", _0x14e521, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_gameId", _0x12dfc8, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_logoName", _0x1cc89b, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isLockLandScope", _0x211953, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isLockPortrait", _0xff0bed, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isStreet", _0x4f6511, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_singleLogo", _0x20feac, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_logoSpriteAtlas", _0x1fca8b, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_pagePrefabPaths", _0x244c56, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_infoNames", _0x130d57, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_featureSpriteFrames", _0x2fb36c, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_bgSpriteFrames", _0x44b8c2, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_characterSpriteFrame", _0x462992, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_chilliNum", _0x18ccdf, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_maxWinNum", _0x41417c, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_autoplayPanelNo", _0x12b9b0, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isWatting", _0x2f3ce4, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_skipIntro", _0x4f4302, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_styleSetting", _0x2270eb, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_playTypeSetting", _0x14f8b3, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isRemote", _0x2e9230, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_isSSS", _0xa6ef01, _0x2d2983(_0x4786f7));
          _0x24d38a(_0x4786f7, "m_ReomveVersion", _0x2c9601, _0x2d2983(_0x4786f7));
          _0x4786f7.m_startSceneTime = -1;
          _0x4786f7.m_otherBundle = null;
          _0x4786f7.m_commonBundle = null;
          _0x4786f7.m_commonPath = "";
          _0x4786f7.m_commonVersion = "";
          _0x4786f7.m_langTextBundle = null;
          _0x4786f7.m_defaultLangPath = "";
          _0x4786f7.m_defaultLangVersion = "";
          _0x4786f7.m_commonMainBundle = null;
          _0x4786f7.m_gameBundle = null;
          _0x4786f7.m_pagePrefabs = [];
          _0x4786f7.m_apiId = 0;
          _0x4786f7.m_isTaDa = false;
          _0x4786f7.m_viewNode = null;
          _0x4786f7.m_lang = "en";
          _0x4786f7.m_loadOldType = true;
          _0x4786f7.m_isForceLite = false;
          return _0x4786f7;
        }
        _0x206df9(_0x26d0a2, _0x4fd82f);
        var _0x3f619a = _0x26d0a2.prototype;
        _0x3f619a.onLoad = function () {
          this.m_isTaDa = this.IsTada();
          this.Config();
          this.Log(100);
          null == window.SetProgressInterval || window.SetProgressInterval(60);
          "109" === this.m_gameId && (_0x5f556e.downloader.maxConcurrency = 12, _0x5f556e.downloader.maxRequestsPerFrame = 12);
        };
        _0x3f619a.start = function () {
          var _0x1a4dad = _0x336c41(_0x2d31f9().mark(function _0x17cc22() {
            return _0x2d31f9().wrap(function (_0x42c534) {
              for (;;) {
                switch (_0x42c534.prev = _0x42c534.next) {
                  case 0:
                    this.m_startSceneTime = this.m_isWatting ? Date.now() : -1;
                    _0x42c534.next = 3;
                    return this.LoadVersion("game");
                  case 3:
                  case "end":
                    return _0x42c534.stop();
                }
              }
            }, _0x17cc22, this);
          }));
          return function () {
            return _0x1a4dad.apply(this, arguments);
          };
        }();
        _0x3f619a.Config = function () {
          _0x8dfa41.prototype.fillBuffers = function (_0xd77679) {
            this._renderFlag && _0xd77679._pOpacity > 0 && this._render(_0xd77679);
          };
        };
        _0x3f619a.update = function () {};
        _0x3f619a.LoadZip = function () {
          var _0x263f9c = _0x336c41(_0x2d31f9().mark(function _0x2476ad(_0x58fe33, _0x51c8d5, _0x5655ec, _0x38ad30) {
            var _0x385a9b;
            var _0x54a844;
            var _0xeb212a;
            return _0x2d31f9().wrap(function (_0x3b4331) {
              for (;;) {
                switch (_0x3b4331.prev = _0x3b4331.next) {
                  case 0:
                    if (undefined === _0x5655ec && (_0x5655ec = ""), undefined === _0x38ad30 && (_0x38ad30 = ""), _0x28c299) {
                      _0x3b4331.next = 4;
                      break;
                    }
                    return _0x3b4331.abrupt("return");
                  case 4:
                    if (!(_0x28c299.loadedZipNames.indexOf(_0x58fe33) >= 0)) {
                      _0x3b4331.next = 6;
                      break;
                    }
                    return _0x3b4331.abrupt("return");
                  case 6:
                    if (_0x51c8d5 || -1 !== _0x4aa892.indexOf(_0x58fe33)) {
                      _0x3b4331.next = 8;
                      break;
                    }
                    return _0x3b4331.abrupt("return");
                  case 8:
                    _0x385a9b = _0x5655ec;
                    _0x54a844 = _0x38ad30;
                    _0x51c8d5 || (_0xeb212a = _0x9b5240.querySettings(_0x29ed72.Category.ASSETS, "bundleVers"), _0x385a9b = "./assets/" + _0x58fe33, _0x54a844 = _0xeb212a[_0x58fe33]);
                    _0x28c299.loadedZipNames.push(_0x58fe33);
                    _0x3b4331.next = 13;
                    return _0x28c299.loadZip(_0x385a9b, _0x54a844);
                  case 13:
                  case "end":
                    return _0x3b4331.stop();
                }
              }
            }, _0x2476ad);
          }));
          return function (_0x40a45e, _0x375b44, _0xa99a6e, _0x1db8b6) {
            return _0x263f9c.apply(this, arguments);
          };
        }();
        _0x3f619a.LoadVersion = function () {
          var _0x5cf8c4 = _0x336c41(_0x2d31f9().mark(function _0x7e89b6(_0x4fb1b4) {
            var _0x40c9cf;
            var _0x4c76ee;
            var _0x3b4052;
            var _0x400665;
            var _0x386506;
            var _0x1f56f6;
            var _0x43cc96;
            var _0x1b32cc;
            var _0x48c78c;
            var _0x307f77;
            var _0x5cec72;
            var _0x4815ad;
            var _0xfc6e3f;
            var _0x27bd67;
            var _0x5a5c69;
            var _0x55b225;
            var _0xe3d264;
            var _0x55e865;
            var _0x5344e1;
            var _0x5ce047;
            var _0x88b633;
            var _0x3f9c6a;
            var _0x93ac4a;
            var _0x4fb7b7;
            return _0x2d31f9().wrap(function (_0x1527e9) {
              for (;;) {
                switch (_0x1527e9.prev = _0x1527e9.next) {
                  case 0:
                    _0x40c9cf = globalThis.LobbyData;
                    _0x4c76ee = this.m_isTaDa ? "tada" : "jili";
                    this.m_commonPath = "assets/common/Astt/" + _0x4c76ee;
                    _0x3b4052 = "assets/common/Astt/" + _0x4c76ee + "Main";
                    _0x400665 = "assets/common/Astt/other";
                    _0x386506 = "AsttText/AsttText/en";
                    this.m_defaultLangPath = "AsttText/AsttText/en";
                    _0x1f56f6 = "assets/" + _0x4fb1b4;
                    this.m_commonVersion = "";
                    _0x43cc96 = "";
                    _0x1b32cc = "";
                    this.m_defaultLangVersion = "";
                    _0x48c78c = "";
                    _0x307f77 = "";
                    _0x5cec72 = "";
                    _0x4815ad = "";
                    try {
                      undefined !== _0x40c9cf && (console.error("lobbyData", JSON.stringify(_0x40c9cf)), _0x1f56f6 = _0x40c9cf.bundleDomin + _0x4fb1b4, _0x307f77 = _0x40c9cf.versionJson[_0x4fb1b4], this.m_commonPath = _0x40c9cf.bundleDomin + _0x4c76ee, this.m_commonVersion = _0x40c9cf.versionJson[_0x4c76ee], _0x400665 = _0x40c9cf.bundleDomin + "other", _0x48c78c = _0x40c9cf.versionJson.other);
                    } catch (_0x247097) {}
                    if (!this.m_isRemote) {
                      _0x1527e9.next = 55;
                      break;
                    }
                    _0xfc6e3f = /(\d+)\.(\d+)/;
                    _0x27bd67 = _0x23b453.match(_0xfc6e3f);
                    _0x5a5c69 = _0x27bd67[1] + "." + _0x27bd67[2];
                    _0x55b225 = "https://" + window.location.host + "/";
                    _0xe3d264 = "astarte";
                    _0x55e865 = "web-mobile";
                    _0x54385c.isNative && (_0x55e865 = "android", _0x5a5c69 = "app" + _0x5a5c69);
                    this.m_ReomveVersion.length > 0 && (_0x55e865 = _0x55e865 + "-" + this.m_ReomveVersion);
                    _0x40c9cf && (_0x55b225 = _0x40c9cf.cdnHost);
                    this.m_isSSS && (_0xe3d264 = "astarte3");
                    (_0x5344e1 = this.GetLinkParameterByName("remoteVersion")) && _0x5344e1.length > 0 && (_0x5a5c69 = "" + _0x5344e1 + _0x27bd67[1] + "." + _0x27bd67[2]);
                    _0x1527e9.next = 33;
                    return new Promise(function (_0x367e0d) {
                      _0x5f556e.loadRemote("" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/versions.json?" + (Date.now() / 600).toFixed(0), {
                        reload: true,
                        cacheAsset: false,
                        cacheEnabled: false
                      }, _0x336c41(_0x2d31f9().mark(function _0xa873d0(_0x1f9e04, _0x2e7d0a) {
                        return _0x2d31f9().wrap(function (_0x50513e) {
                          for (;;) {
                            switch (_0x50513e.prev = _0x50513e.next) {
                              case 0:
                                _0x367e0d(_0x2e7d0a);
                              case 1:
                              case "end":
                                return _0x50513e.stop();
                            }
                          }
                        }, _0xa873d0);
                      })));
                    });
                  case 33:
                    if (_0x5ce047 = _0x1527e9.sent, _0x88b633 = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/src/chunks/bundle." + _0x5ce047.json["bundle.js"] + ".js", !_0x54385c.isNative) {
                      _0x1527e9.next = 40;
                      break;
                    }
                    _0x1527e9.next = 38;
                    return new Promise(function (_0x1d9eac, _0x26eead) {
                      _0x5f556e.downloader.downloadScript(_0x88b633, {
                        systemJs: true
                      }, function (_0x1d8aeb) {
                        _0x1d8aeb ? (console.error("load bundle error", _0x1d8aeb), _0x26eead(_0x1d8aeb)) : _0x1d9eac();
                      });
                    });
                  case 38:
                    _0x1527e9.next = 42;
                    break;
                  case 40:
                    _0x1527e9.next = 42;
                    return System.import(_0x88b633);
                  case 42:
                    _0x400665 = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/other";
                    _0x48c78c = _0x5ce047.json.other;
                    this.m_commonPath = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/" + _0x4c76ee;
                    this.m_commonVersion = _0x5ce047.json[_0x4c76ee];
                    _0x3b4052 = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/" + _0x4c76ee + "Main";
                    _0x43cc96 = _0x5ce047.json[_0x4c76ee + "Main"];
                    this.m_lang = this.GetLanguage();
                    _0x386506 = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/" + this.m_lang;
                    _0x1b32cc = _0x5ce047.json[this.m_lang];
                    this.m_defaultLangPath = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/en";
                    this.m_defaultLangVersion = _0x5ce047.json.en;
                    _0x5cec72 = "" + _0x55b225 + _0xe3d264 + "/" + _0x5a5c69 + "/" + _0x55e865 + "/assets/extra";
                    _0x4815ad = _0x5ce047.json.extra;
                  case 55:
                    if (("" != _0x43cc96 && null != _0x43cc96 || !this.m_isRemote) && (this.m_loadOldType = false), !this.m_loadOldType) {
                      _0x1527e9.next = 71;
                      break;
                    }
                    _0x1527e9.next = 59;
                    return Promise.all([this.LoadZip(_0x4c76ee, this.m_isRemote, this.m_commonPath, this.m_commonVersion), this.LoadZip(_0x4fb1b4, false)]);
                  case 59:
                    (_0x3f9c6a = [this.LoadBundleSync(_0x400665, _0x48c78c), this.LoadBundleSync(_0x1f56f6, _0x307f77, undefined, {
                      bundleName: undefined !== _0x40c9cf ? this.m_gameShortName + _0x4fb1b4 : undefined
                    })]).push(this.LoadBundleSync(_0x3b4052, _0x43cc96), this.LoadBundleSync(_0x386506, _0x1b32cc));
                    _0x1527e9.next = 63;
                    return Promise.all(_0x3f9c6a);
                  case 63:
                    _0x93ac4a = _0x1527e9.sent;
                    this.m_otherBundle = _0x93ac4a[0];
                    this.m_gameBundle = _0x93ac4a[1];
                    this.m_commonMainBundle = _0x93ac4a[2];
                    this.m_langTextBundle = _0x93ac4a[3];
                    this.CheckBundles();
                    _0x1527e9.next = 76;
                    break;
                  case 71:
                    _0x4fb7b7 = [this.LoadBundleSync(_0x5cec72, _0x4815ad), this.LoadBundleSync(_0x3b4052, _0x43cc96, _0x15aac3.CommonMainBundle), this.LoadBundleSync(_0x400665, _0x48c78c, _0x15aac3.OtherBundle), this.LoadBundleSync(_0x386506, _0x1b32cc, _0x15aac3.LangTextBundle), this.LoadZip(_0x4c76ee + "Main", this.m_isRemote, _0x3b4052, _0x43cc96), this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, _0x15aac3.CommonBundle)];
                    this.m_isForceLite ? _0x4fb7b7.push(this.LoadBundleSync("assets/gameLite", "", _0x15aac3.GameBundle)) : this.m_isTaDa || _0x4fb7b7.push(this.LoadBundleSync("assets/game", "", _0x15aac3.GameBundle));
                    _0x1527e9.next = 75;
                    return Promise.all(_0x4fb7b7);
                  case 75:
                    this.CheckBundles();
                  case 76:
                  case "end":
                    return _0x1527e9.stop();
                }
              }
            }, _0x7e89b6, this);
          }));
          return function (_0x457ce4) {
            return _0x5cf8c4.apply(this, arguments);
          };
        }();
        _0x3f619a.CheckBundles = function () {
          this.m_loadOldType ? this.m_otherBundle && this.m_gameBundle && this.m_commonBundle && this.LoadIntroResources() : this.m_commonMainBundle && this.m_otherBundle && this.m_langTextBundle && (!this.m_isForceLite || this.m_isForceLite && this.m_gameBundle) && this.LoadIntroResources();
        };
        _0x3f619a.LoadBundle = function (_0x57bf8f, _0x34b7b5, _0x381f1f, _0x6df78) {
          var _0x56a068 = this;
          _0x6df78 || (_0x6df78 = {});
          _0x6df78.version = _0x34b7b5;
          _0x5f556e.loadBundle(_0x57bf8f, _0x6df78, function (_0x48dcb4, _0x3e9a41) {
            _0x48dcb4 ? _0x56a068.LoadBundle(_0x57bf8f, _0x34b7b5, _0x381f1f) : _0x381f1f(_0x3e9a41);
          });
        };
        _0x3f619a.LoadBundleSync = function (_0x15c97d, _0x3dc7d5, _0x28c5d1, _0x5e72ce) {
          var _0x3a5af7 = this;
          return new Promise(function (_0x4c1a6e) {
            _0x3a5af7.LoadBundle(_0x15c97d, _0x3dc7d5, function (_0x449f1a) {
              if (undefined !== _0x28c5d1) {
                switch (_0x28c5d1) {
                  case _0x15aac3.CommonMainBundle:
                    _0x3a5af7.m_commonMainBundle = _0x449f1a;
                    break;
                  case _0x15aac3.CommonBundle:
                    _0x3a5af7.m_commonBundle = _0x449f1a;
                    break;
                  case _0x15aac3.OtherBundle:
                    _0x3a5af7.m_otherBundle = _0x449f1a;
                    break;
                  case _0x15aac3.LangTextBundle:
                    _0x3a5af7.m_langTextBundle = _0x449f1a;
                    break;
                  case _0x15aac3.GameBundle:
                    _0x3a5af7.m_gameBundle = _0x449f1a;
                }
              }
              _0x4c1a6e(_0x449f1a);
            }, _0x5e72ce);
          });
        };
        _0x3f619a.LoadIntroResources = function () {
          if ("109" == this.m_gameId && (window.DiffTime961 = Date.now() - window.StartTime), this.LoadIntroView(), this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
            for (var _0xe3fc07 = 0; _0xe3fc07 < this.m_pagePrefabPaths.length; _0xe3fc07++) {
              this.LoadIntroCell(_0xe3fc07);
            }
          }
        };
        _0x3f619a.LoadIntroView = function () {
          var _0x589114 = this;
          var _0x51d81c = "Astt/%s/Intro/Prefab/IntroView";
          _0x51d81c = this.m_isTaDa ? _0x3ba54e.formatStr(_0x51d81c, "framework_americas") : _0x3ba54e.formatStr(_0x51d81c, "framework");
          var _0x27e4b8 = this.m_commonMainBundle;
          this.m_loadOldType && (_0x27e4b8 = this.m_commonBundle);
          _0x27e4b8.load(_0x51d81c, _0x1d5888, function (_0x44cd72, _0x185b3b) {
            null == window.SetProgressInterval || window.SetProgressInterval(_0x44cd72 / _0x185b3b * 40 + 60);
          }, function (_0x2d5dfc, _0x174b39) {
            if (_0x2d5dfc) {
              console.error("LoadIntroView ERROR", _0x2d5dfc);
              return void _0x589114.LoadIntroView();
            }
            _0x589114.m_viewNode = _0x5b17cb(_0x174b39);
            _0x589114.node.addChild(_0x589114.m_viewNode);
            _0x589114.CheckIntroResources();
          });
        };
        _0x3f619a.LoadIntroCell = function (_0x42c906) {
          var _0xf4b1fe = this;
          this.m_gameBundle.load(this.m_pagePrefabPaths[_0x42c906], _0x1d5888, function (_0x3cde8a, _0x32ce99) {
            _0x3cde8a ? _0xf4b1fe.LoadIntroCell(_0x42c906) : (_0xf4b1fe.m_pagePrefabs[_0x42c906] = _0x32ce99, _0xf4b1fe.CheckIntroResources());
          });
        };
        _0x3f619a.CheckIntroResources = function () {
          if (this.m_viewNode) {
            if (this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
              for (var _0x4b3e23 = 0; _0x4b3e23 < this.m_pagePrefabPaths.length; _0x4b3e23++) {
                if (!this.m_pagePrefabs[_0x4b3e23]) {
                  return;
                }
              }
            }
            this.Complete();
          }
        };
        _0x3f619a.Complete = function () {
          "109" == this.m_gameId && (window.DiffTime962 = Date.now() - window.StartTime);
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
            lstZipBundleName: _0x4aa892,
            IsRemote: this.m_isRemote,
            LoadLessRes: false,
            SkipIntro: this.m_skipIntro,
            IsSSS: this.m_isSSS
          });
        };
        _0x3f619a.GetLanguage = function () {
          var _0x154a4e;
          var _0x494029;
          var _0x48983f;
          var _0x544dc6 = this.GetLinkParameterByName("lang") || this.GetLinkParameterByName("ln");
          if (null != (_0x154a4e = window) && null != (_0x494029 = _0x154a4e.location) && null != (_0x48983f = _0x494029.href) && _0x48983f.includes("/sss-") && (_0x544dc6 = "en-US"), _0x544dc6) {
            var _0x1c0af3 = this.FormatLang(_0x544dc6);
            if ("" !== _0x1c0af3) {
              return _0x1c0af3;
            }
          }
          if (!_0x54385c.isNative) {
            var _0xed7d80 = this.FormatLang(navigator.language);
            if ("" !== _0xed7d80 && null != _0xed7d80) {
              return _0xed7d80;
            }
          }
          return _0x5b5cab;
        };
        _0x3f619a.IsTada = function () {
          var _0x48c0e5 = (this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("");
          var _0x166cf6 = Number(this.GetLinkParameterByName("apiId"));
          var _0x5e139f = -1 !== _0x48c0e5.search("tada");
          if (!isNaN(_0x166cf6)) {
            this.m_apiId = Number(_0x166cf6);
            this.m_isForceLite = -1 !== _0x4aa892.indexOf("gameLite") && _0x251887.includes(this.m_apiId);
            for (var _0x526e98 = 0; _0x526e98 < _0x4c194c.length; _0x526e98++) {
              if (_0x166cf6 === _0x4c194c[_0x526e98]) {
                _0x5e139f = true;
                break;
              }
            }
          }
          var _0x39bb57 = this.GetLinkParameterByName("tadaSkin");
          _0x39bb57 && "1" === _0x39bb57 && (_0x5e139f = true);
          var _0x4f6437 = this.GetLinkParameterByName("skin");
          !_0x4f6437 || _0x4f6437 != _0x4a6bd2.TADA.toString() && _0x4f6437 != _0x4a6bd2.TADA_CASINO.toString() || (_0x5e139f = true);
          return _0x5e139f;
        };
        _0x3f619a.GetLinkParameterByName = function (_0x108d68, _0x24ee00) {
          if (undefined === _0x24ee00 && (_0x24ee00 = null), !_0x24ee00) {
            if ("undefined" != typeof LobbyData) {
              try {
                "" === (_0x24ee00 = LobbyData.url) && _0x419a33("No URL!");
              } catch (_0x2d74e4) {
                _0x2d74e4(JSON.stringify(_0x2d74e4));
              }
            } else {
              _0x24ee00 = this.CheckReplayUrlAndDecode();
            }
          }
          _0x108d68 = _0x108d68.replace(/[[\]]/g, "\\$&");
          var _0x3736c4 = new RegExp("[?&]" + _0x108d68 + "(=([^&#]*)|&|#|$)").exec(_0x24ee00);
          return _0x3736c4 ? _0x3736c4[2] ? decodeURIComponent(_0x3736c4[2].replace(/\+/g, " ")) : "" : null;
        };
        _0x3f619a.CheckReplayUrlAndDecode = function () {
          var _0x279abb = window.location.href;
          var _0x58e575 = this.GetLinkParameterByName("replaydata", _0x279abb);
          if (!_0x58e575) {
            return _0x279abb;
          }
          for (var _0x529ba6 = "0".charCodeAt(0), _0x4ca2bb = "9".charCodeAt(0), _0x193231 = "a".charCodeAt(0), _0x353854 = "z".charCodeAt(0), _0x183e77 = "A".charCodeAt(0), _0x12b73f = "Z".charCodeAt(0), _0x7e40e0 = "", _0x30fb5e = 0; _0x30fb5e < _0x58e575.length; _0x30fb5e++) {
            var _0x3e3cff = _0x58e575.charCodeAt(_0x30fb5e);
            _0x3e3cff >= _0x529ba6 && _0x3e3cff <= _0x4ca2bb ? (_0x3e3cff = _0x4ca2bb - (_0x3e3cff - _0x529ba6), _0x7e40e0 += String.fromCharCode(_0x3e3cff)) : _0x3e3cff >= _0x193231 && _0x3e3cff <= _0x353854 && _0x30fb5e % 2 == 0 ? (_0x3e3cff = _0x353854 - (_0x3e3cff - _0x193231), _0x7e40e0 += String.fromCharCode(_0x3e3cff)) : _0x3e3cff >= _0x183e77 && _0x3e3cff <= _0x12b73f && _0x30fb5e % 3 == 0 ? (_0x3e3cff = _0x12b73f - (_0x3e3cff - _0x183e77), _0x7e40e0 += String.fromCharCode(_0x3e3cff)) : _0x7e40e0 += String.fromCharCode(_0x3e3cff);
          }
          var _0x353036 = _0x279abb.split("replaydata=" + _0x58e575);
          _0x353036.join("");
          return _0x353036 + atob(_0x7e40e0);
        };
        _0x3f619a.Log = function (_0x4130a2) {
          if (!_0x54385c.isNative) {
            var _0x279552 = "https://" + window.location.host + "/";
            if (-1 == _0x279552.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x279552)) {
              var _0x2cf882 = this.GetLinkParameterByName("apiId");
              var _0x1ec1bd = this.GetLinkParameterByName("ssoKey");
              var _0x222c4d = "https://" + (this.GetLinkParameterByName("domain_platform") || this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/trigger?";
              _0x222c4d += "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" + this.m_gameId + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x4130a2 + "&EventStatus=0&SSOKey=" + _0x1ec1bd + "&CreateTime=" + new Date().toISOString() + "&ApiId=" + _0x2cf882;
              this.Send(_0x222c4d);
              window.DiffTime960 = Date.now() - window.StartTime;
            }
          }
        };
        _0x3f619a.Send = function (_0x4d3fb1) {
          var _0x45494b = {
            Accept: "application/json, text/javascript, text/plain"
          };
          var _0x153ec9 = new XMLHttpRequest();
          _0x153ec9.open("GET", _0x4d3fb1, true);
          _0x45494b && Object.keys(_0x45494b).forEach(function (_0x2b203a) {
            return _0x153ec9.setRequestHeader(_0x2b203a, _0x45494b[_0x2b203a]);
          });
          _0x153ec9.timeout = 5000;
          _0x153ec9.onload = function () {};
          _0x153ec9.onerror = function () {};
          _0x153ec9.ontimeout = function () {};
          _0x153ec9.send();
        };
        _0x3f619a.FormatLang = function (_0x59dc02) {
          return (_0x59dc02 = _0x59dc02.toLocaleLowerCase()) == "cn" || _0x59dc02 == "zh-CN".toLocaleLowerCase() ? "cn" : _0x59dc02 == "en" || _0x59dc02 == "en-US".toLocaleLowerCase() ? "en" : _0x59dc02 == "th" || _0x59dc02 == "th-TH".toLocaleLowerCase() ? "th" : _0x59dc02 == "vn" || _0x59dc02 == "vi-VN".toLocaleLowerCase() ? "vn" : _0x59dc02 == "id" || _0x59dc02 == "id-ID".toLocaleLowerCase() ? "id" : _0x59dc02 == "hi" || _0x59dc02 == "hi-IN".toLocaleLowerCase() ? "hi" : _0x59dc02 == "ta" || _0x59dc02 == "ta-IN".toLocaleLowerCase() ? "ta" : _0x59dc02 == "mm" || _0x59dc02 == "my-MM".toLocaleLowerCase() ? "mm" : _0x59dc02 == "jp" || _0x59dc02 == "ja-JP".toLocaleLowerCase() ? "jp" : _0x59dc02 == "ms" || _0x59dc02 == "ms-MY".toLocaleLowerCase() ? "ms" : _0x59dc02 == "ko" || _0x59dc02 == "ko-KR".toLocaleLowerCase() ? "ko" : _0x59dc02 == "bn" || _0x59dc02 == "bn-IN".toLocaleLowerCase() ? "bn" : _0x59dc02 == "es" || _0x59dc02 == "es-AR".toLocaleLowerCase() ? "es" : _0x59dc02 == "pt" || _0x59dc02 == "pt-BR".toLocaleLowerCase() ? "pt" : _0x59dc02 == "it" || _0x59dc02 == "it-IT".toLocaleLowerCase() ? "it" : _0x59dc02 == "se" || _0x59dc02 == "sv-SE".toLocaleLowerCase() ? "se" : _0x59dc02 == "de" || _0x59dc02 == "de-DE".toLocaleLowerCase() ? "de" : _0x59dc02 == "da" || _0x59dc02 == "da-DK".toLocaleLowerCase() ? "da" : _0x59dc02 == "ro" || _0x59dc02 == "ro-RO".toLocaleLowerCase() ? "ro" : _0x59dc02 == "nl" || _0x59dc02 == "nl-NL".toLocaleLowerCase() ? "nl" : _0x59dc02 == "trTR".toLocaleLowerCase() || _0x59dc02 == "tr-TR".toLocaleLowerCase() ? "trTR" : _0x59dc02 == "ruRU".toLocaleLowerCase() || _0x59dc02 == "ru-RU".toLocaleLowerCase() ? "ruRU" : _0x59dc02 == "grGR".toLocaleLowerCase() || _0x59dc02 == "gr-GR".toLocaleLowerCase() ? "grGR" : _0x59dc02 == "frFR".toLocaleLowerCase() || _0x59dc02 == "fr-FR".toLocaleLowerCase() ? "frFR" : "";
        };
        return _0x26d0a2;
      }(_0x95667d)).prototype, "m_gameShortName", [_0x4d5b65], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x5eb7da = _0x26bf31(_0x370ae6.prototype, "m_scenePrefabPath", [_0x5939ad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x14e521 = _0x26bf31(_0x370ae6.prototype, "m_gameImgPath", [_0x535a03], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x12dfc8 = _0x26bf31(_0x370ae6.prototype, "m_gameId", [_0x4b3b8c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x1cc89b = _0x26bf31(_0x370ae6.prototype, "m_logoName", [_0x4b40b7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x211953 = _0x26bf31(_0x370ae6.prototype, "m_isLockLandScope", [_0x18fba9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xff0bed = _0x26bf31(_0x370ae6.prototype, "m_isLockPortrait", [_0x2d89b6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4f6511 = _0x26bf31(_0x370ae6.prototype, "m_isStreet", [_0x4e4d5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x20feac = _0x26bf31(_0x370ae6.prototype, "m_singleLogo", [_0x500e86], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1fca8b = _0x26bf31(_0x370ae6.prototype, "m_logoSpriteAtlas", [_0x7129ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x244c56 = _0x26bf31(_0x370ae6.prototype, "m_pagePrefabPaths", [_0x41a188], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x130d57 = _0x26bf31(_0x370ae6.prototype, "m_infoNames", [_0x143844], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x2fb36c = _0x26bf31(_0x370ae6.prototype, "m_featureSpriteFrames", [_0x79df52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x44b8c2 = _0x26bf31(_0x370ae6.prototype, "m_bgSpriteFrames", [_0xd0048d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x462992 = _0x26bf31(_0x370ae6.prototype, "m_characterSpriteFrame", [_0x5c5a07], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x18ccdf = _0x26bf31(_0x370ae6.prototype, "m_chilliNum", [_0x407bcf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x41417c = _0x26bf31(_0x370ae6.prototype, "m_maxWinNum", [_0x561793], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x12b9b0 = _0x26bf31(_0x370ae6.prototype, "m_autoplayPanelNo", [_0x4c05ee], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3f52d4.None;
        }
      }), _0x2f3ce4 = _0x26bf31(_0x370ae6.prototype, "m_isWatting", [_0x25e4a3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4f4302 = _0x26bf31(_0x370ae6.prototype, "m_skipIntro", [_0x387759], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2270eb = _0x26bf31(_0x370ae6.prototype, "m_styleSetting", [_0x3f765d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3f492e();
        }
      }), _0x14f8b3 = _0x26bf31(_0x370ae6.prototype, "m_playTypeSetting", [_0x3871e3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x26c3a5();
        }
      }), _0x2e9230 = _0x26bf31(_0x370ae6.prototype, "m_isRemote", [_0x364b5d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xa6ef01 = _0x26bf31(_0x370ae6.prototype, "m_isSSS", [_0x1a0ead], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2c9601 = _0x26bf31(_0x370ae6.prototype, "m_ReomveVersion", [_0x1c07c6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x40a53c = _0x370ae6));
      _0x2e10a1._RF.pop();
      _0x2e10a1._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      var _0x5882b5 = _0x3a9fe8.ccclass;
      var _0x497735 = _0x3a9fe8.property;
      var _0x548989 = function (_0x575de9, _0x507b6d, _0x5d2865, _0x37ecc4, _0x4cde9e, _0x1e4d49) {
        this.name = _0x575de9;
        this.height = _0x507b6d;
        this.width = _0x5d2865;
        this.ratio = _0x37ecc4;
        this.statusHeight = _0x4cde9e;
        this.homeHeight = _0x1e4d49;
      };
      var _0x5c04ef = [new _0x548989("iPhone 6.5-inch", 896, 414, 3, 44, 34), new _0x548989("iPhone 6.1-inch", 896, 414, 2, 44, 34), new _0x548989("iPhone 5.8-inch", 812, 375, 3, 44, 34), new _0x548989("iPhone 5.5-inch", 736, 414, 3, 18, 0), new _0x548989("iPhone 4.7-inch", 667, 375, 2, 20, 0), new _0x548989("iPhone 4-inch", 568, 320, 2, 20, 0), new _0x548989("iPhone 3.5-inch", 480, 320, 2, 20, 0), new _0x548989("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0), new _0x548989("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0), new _0x548989("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0), new _0x548989("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0), new _0x548989("iPad", 1024, 768, 1, 20, 0), new _0x548989("iPad Mini Retina", 1024, 768, 2, 20, 0), new _0x548989("iPad Mini", 1024, 768, 1, 20, 0)];
      var _0xd34828 = "mask";
      var _0x3a04ec = "mask_close_tip";
      var _0x4414f6 = "mask_close";
      var _0x1f8370 = "bar";
      var _0x3eed90 = {
        tw: ["滑動無效時, 請點擊此處進入遊戲. ❎", "請解除豎排方向鎖定, 並將手機水平放置."],
        cn: ["滑动无效时, 请点击此处进入游戏. ❎", "请解除竖排方向锁定, 并将手机水平放置."],
        th: ["เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎", "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้"],
        vn: ["Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎", "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình."],
        id: ["Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎", "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal."],
        mm: ["When the slide is invalid, please click here. ❎", "Please unlock the vertical direction and place the phone horizontally."],
        jp: ["スライドで入れない場合は、ここをタップしてください。 ❎", "垂直固定を解除し、端末を水平方向に置いてください。"],
        en: ["If swiping does not work, please tap here. ❎", "Please unlock screen rotation and hold the phone horizontally."]
      };
      var _0x1ff337 = [1131];
      var _0x47cb16 = [1864, 1002];
      _0x2b3cc7 = _0x497735(Boolean);
      _0x5e78d7 = _0x497735(Boolean);
      _0x54d69e = _0x497735(Boolean);
      _0x340a01 = _0x497735(Boolean);
      _0x14f5b5 = _0x497735(Number);
      _0x5882b5((_0x483bba = _0x26bf31((_0x3ea1d0 = function (_0x2f4e27) {
        function _0xe5b6b0() {
          for (var _0x46a427, _0x1ef180 = arguments.length, _0x34181c = new Array(_0x1ef180), _0x1f7b9d = 0; _0x1f7b9d < _0x1ef180; _0x1f7b9d++) {
            _0x34181c[_0x1f7b9d] = arguments[_0x1f7b9d];
          }
          _0x46a427 = _0x2f4e27.call.apply(_0x2f4e27, [this].concat(_0x34181c)) || this;
          _0x24d38a(_0x46a427, "isLandscape", _0x483bba, _0x2d2983(_0x46a427));
          _0x24d38a(_0x46a427, "isPortrait", _0x38c509, _0x2d2983(_0x46a427));
          _0x24d38a(_0x46a427, "isIOS", _0x39a2f5, _0x2d2983(_0x46a427));
          _0x24d38a(_0x46a427, "isAndroid", _0x15e7b9, _0x2d2983(_0x46a427));
          _0x24d38a(_0x46a427, "android_Apiid", _0x593c06, _0x2d2983(_0x46a427));
          _0x46a427.m_mask = null;
          _0x46a427.m_isScrolling = false;
          _0x46a427.m_isblock = false;
          _0x46a427.m_scrollInterval = undefined;
          _0x46a427.m_scrollTimeOut = undefined;
          _0x46a427.m_backGround = null;
          _0x46a427.m_isLandscape = true;
          return _0x46a427;
        }
        _0x206df9(_0xe5b6b0, _0x2f4e27);
        var _0xd65d5b = _0xe5b6b0.prototype;
        _0xd65d5b.onLoad = function () {
          _0x54385c.isNative || this.Init();
        };
        _0xd65d5b.GetDeviceName = function () {
          if (_0x54385c.os === _0x54385c.OS.IOS) {
            var _0x22e7b2 = this.GetiOSDevice();
            if (_0x22e7b2) {
              return _0x22e7b2.name;
            }
          } else {
            if (_0x54385c.os === _0x54385c.OS.ANDROID) {
              var _0x33ab9e = /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g.exec(navigator.userAgent);
              if (_0x33ab9e && _0x33ab9e.length > 2) {
                return _0x33ab9e[2].split(" Build")[0];
              }
            }
          }
          return "unknown";
        };
        _0xd65d5b.CreateHtmlTag = function () {
          if (!this.m_backGround) {
            this.node.active = true;
            var _0x5f0350 = document.body;
            _0x5f0350.style.overflow = "visible";
            var _0x5df88f = document.getElementById("Cocos3dGameContainer");
            _0x5df88f.style.overflow = "hidden";
            _0x5df88f.style.position = "fixed";
            var _0x447548 = document.createElement("div");
            _0x447548.id = _0x1f8370;
            _0x447548.style.position = "absolute";
            _0x447548.style.height = "100vh";
            var _0x22d9ef = document.createElement("div");
            _0x22d9ef.id = _0xd34828;
            _0x22d9ef.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            _0x22d9ef.style.height = "150vh";
            _0x22d9ef.style.width = "100vw";
            _0x22d9ef.style.zIndex = "99";
            _0x22d9ef.style.display = "none";
            _0x22d9ef.style.position = "absolute";
            _0x22d9ef.style.top = "0%";
            _0x22d9ef.style.left = "0%";
            this.m_backGround = _0x22d9ef;
            var _0x42a220 = document.createElement("div");
            _0x42a220.id = _0x3a04ec;
            _0x42a220.style.width = "70vw";
            _0x42a220.style.top = "28vh";
            _0x42a220.style.left = "50vw";
            _0x42a220.style.transform = "translate(-50%, -50%)";
            _0x42a220.style.fontSize = "18px";
            _0x42a220.style.fontWeight = "bold";
            _0x42a220.style.color = "#FFFFFF";
            _0x42a220.style.position = "fixed";
            var _0x5c780f = document.createElement("div");
            _0x5c780f.style.top = "16vh";
            _0x5c780f.style.left = "50vw";
            _0x5c780f.style.transform = "translate(-50%, -50%)";
            _0x5c780f.style.position = "fixed";
            var _0x7d8198 = document.createElement("div");
            _0x7d8198.id = _0x4414f6;
            _0x7d8198.style.width = "90vw";
            _0x7d8198.style.fontSize = "24px";
            _0x7d8198.style.fontWeight = "bold";
            _0x7d8198.style.color = "#EEE8AA";
            _0x7d8198.style.wordWrap = "break-word";
            var _0x1d56db = document.createElement("div");
            _0x1d56db.style.fontSize = "48px";
            _0x1d56db.style.fontWeight = "bold";
            _0x1d56db.style.color = "#EEE8AA";
            var _0x5bcd7a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            _0x5bcd7a.style.width = "150px";
            _0x5bcd7a.style.height = "150px";
            _0x5bcd7a.style.position = "fixed";
            _0x5bcd7a.style.top = "75vh";
            _0x5bcd7a.style.left = "50vw";
            _0x5bcd7a.style.transform = "translate(-50%, -50%)";
            _0x5bcd7a.style.animationDuration = "2s";
            _0x5bcd7a.style.animationName = "fullscreen-swipe";
            _0x5bcd7a.style.animationIterationCount = "infinite";
            var _0x3efe60 = document.createElement("style");
            var _0x4b474f = document.createTextNode("@keyframes fullscreen-swipe {from { top:80% }to { top:50% }}");
            _0x3efe60.appendChild(_0x4b474f);
            _0x5bcd7a.appendChild(_0x3efe60);
            _0x5bcd7a.setAttribute("viewBox", "0 0 547.371 547.371");
            var _0x331bb3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _0x331bb3.setAttribute("fill", "#FFFFFF");
            _0x331bb3.setAttribute("d", "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z");
            _0x5f0350.appendChild(_0x22d9ef);
            _0x22d9ef.appendChild(_0x42a220);
            _0x22d9ef.appendChild(_0x5c780f);
            _0x5bcd7a.appendChild(_0x331bb3);
            _0x22d9ef.appendChild(_0x5bcd7a);
            _0x5c780f.appendChild(_0x7d8198);
            _0x5c780f.appendChild(_0x1d56db);
            _0x5f0350.appendChild(_0x447548);
          }
        };
        _0xd65d5b.Init = function () {
          var _0x16af2d = this;
          var _0x249f1c = false;
          "undefined" != typeof LobbyData && (_0x249f1c = LobbyData.pwa);
          var _0x2647af = Math.floor(Number(this.GetLinkParameterByName("apiId")));
          if (this.isPortrait ? this.m_isblock = _0x1ff337.indexOf(_0x2647af) >= 0 : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(_0x2647af) >= 0 && (this.isAndroid = false), this.m_isblock || (this.m_isblock = _0x47cb16.indexOf(_0x2647af) >= 0), !_0x249f1c && !this.m_isblock) {
            if (this.AddGameViewMask(), this.isIOS = false, _0x54385c.os == _0x54385c.OS.IOS && 0 == this.IsWebview() && this.isIOS) {
              if (this.CreateHtmlTag(), this.SetCloseContent(), this.m_backGround.style.display = "inline", this.SetShowMask(), 1 == this.IsChrome()) {
                var _0x1817eb = this.GetiOSDevice();
                if (null != _0x1817eb) {
                  var _0x1a1610 = 0.99 * (screen.height - _0x1817eb.statusHeight - _0x1817eb.homeHeight - 20);
                  var _0x76b828 = 0.99 * (screen.width - _0x1817eb.statusHeight - 20);
                  document.body.onresize = function () {
                    (window.innerHeight >= window.innerWidth ? _0x1a1610 : _0x76b828) <= window.innerHeight ? _0x16af2d.HideMask() : _0x16af2d.ShowMask();
                  };
                  window.addEventListener("scroll", function () {
                    return _0x16af2d.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  this.m_backGround.addEventListener("touchend", function () {
                    return _0x16af2d.ScrollReset();
                  });
                } else {
                  this.HideMask();
                }
              } else {
                var _0x16d14b = document.body.onresize;
                document.body.onresize = function () {
                  _0x16d14b && _0x16d14b(null, null);
                  var _0x41274c = document.documentElement.scrollWidth;
                  var _0x562237 = document.documentElement.scrollHeight;
                  var _0x2dd49f = _0x41274c > _0x562237;
                  document.getElementById(_0x1f8370).clientHeight == window.innerHeight ? _0x16af2d.HideMask() : _0x16af2d.SetShowMask(_0x2dd49f);
                  window.addEventListener("scroll", function () {
                    return _0x16af2d.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  _0x16af2d.m_backGround.addEventListener("touchend", function () {
                    return _0x16af2d.ScrollReset();
                  });
                  _0x16af2d.m_isLandscape = _0x41274c > _0x562237;
                };
              }
            } else {
              if (_0x54385c.os == _0x54385c.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid) {
                if (_0x54385c.browserType == _0x54385c.BrowserType.MOBILE_QQ || _0x54385c.browserType == _0x54385c.BrowserType.UC) {} else {
                  var _0x2abc28 = function () {
                    _0x16af2d.HasFullscreen() && !_0x16af2d.IsFullscreen() && (_0x16af2d.m_mask.active = true);
                  };
                  document.body.onresize = _0x2abc28;
                  _0x2abc28();
                }
              }
            }
          }
        };
        _0xd65d5b.SetShowMask = function (_0x2b00cc) {
          if (undefined === _0x2b00cc && (_0x2b00cc = undefined), this.IsIOS15orOver()) {
            if (undefined === _0x2b00cc) {
              var _0x14b114 = document.documentElement.scrollWidth;
              var _0x53b8ed = document.documentElement.scrollHeight;
              this.m_isLandscape = _0x14b114 > _0x53b8ed;
              this.m_isLandscape ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden";
            } else {
              document.getElementById(_0x1f8370).clientHeight;
              window.innerHeight;
              _0x2b00cc === this.m_isLandscape && document.getElementById(_0x1f8370).clientHeight === window.innerHeight || (_0x2b00cc ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden");
            }
          } else {
            this.ShowMask();
          }
        };
        _0xd65d5b.SetCloseContent = function () {
          var _0x582c1f = this;
          var _0x366fe6 = this.GetLang("lang");
          _0x366fe6 = this.ChangeLang(_0x366fe6);
          var _0x15e513 = document.getElementById(_0x4414f6);
          var _0x2db000 = this.isLandscape ? document.getElementById(_0x3a04ec) : null;
          _0x3eed90[_0x366fe6] ? (_0x15e513.textContent = _0x3eed90[_0x366fe6][0], _0x2db000 && (_0x2db000.textContent = _0x3eed90[_0x366fe6][1])) : (_0x15e513.textContent = _0x3eed90.en[0], _0x2db000 && (_0x2db000.textContent = _0x3eed90.en[1]));
          _0x15e513.onclick || (_0x15e513.onclick = function () {
            _0x582c1f.HideMask();
          });
        };
        _0xd65d5b.GetLang = function (_0x30857c) {
          var _0xf8e120 = _0x54385c.localStorage.getItem("LobbyLanguage");
          if (!_0xf8e120 || "" == _0xf8e120) {
            if (-1 != (_0xf8e120 = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?")) {
              for (var _0x9ad97d = _0xf8e120.split("?")[1].split("&"), _0x5c4976 = 0; _0x5c4976 < _0x9ad97d.length; _0x5c4976++) {
                if (_0x9ad97d[_0x5c4976].split("=")[0] == _0x30857c) {
                  return _0x9ad97d[_0x5c4976].split("=")[1];
                }
              }
            }
            return "en";
          }
          return _0xf8e120;
        };
        _0xd65d5b.ChangeLang = function (_0x92ecd3) {
          switch (_0x92ecd3) {
            case "zh-TW":
              return "tw";
            case "zh-CN":
              return "cn";
            case "th-TH":
              return "th";
            case "vi-VN":
              return "vn";
            case "id-ID":
              return "id";
            case "hi-IN":
              return "hi";
            case "ta-IN":
              return "ta";
            case "my-MM":
              return "mm";
            case "ja-JP":
              return "jp";
            default:
              return "en";
          }
        };
        _0xd65d5b.ShowMask = function () {
          for (var _0xc686b8 = this, _0x12fd58 = document.getElementById("Cocos3dGameContainer").getElementsByTagName("div"), _0x3826d5 = 0, _0x134692 = 0; _0x134692 < _0x12fd58.length; _0x134692++) {
            var _0x3576a0 = _0x12fd58[_0x134692].getElementsByTagName("iframe");
            if (_0x3576a0 && _0x3576a0.length > 0) {
              _0x3826d5 = _0x134692;
              break;
            }
          }
          var _0x3dccfe = _0x12fd58[_0x3826d5];
          _0x3dccfe && "hidden" !== _0x3dccfe.style.visibility || (this.m_backGround.style.visibility = "visible", this.m_mask && (this.m_mask.active = true), window.scrollTo(0, 0), this.m_scrollInterval && clearInterval(this.m_scrollInterval), this.m_scrollInterval = setInterval(function () {
            _0xc686b8.m_isScrolling && (_0xc686b8.m_isScrolling = false, _0xc686b8.ScrollReset());
          }, 250));
        };
        _0xd65d5b.ScrollReset = function () {
          var _0x32abb8 = this;
          window.scrollTo(0, 0);
          this.m_scrollTimeOut && clearTimeout(this.m_scrollTimeOut);
          this.m_scrollTimeOut = setTimeout(function () {
            window.scrollTo(0, 0);
            clearInterval(_0x32abb8.m_scrollInterval);
            _0x32abb8.m_scrollInterval = null;
          }, 250);
        };
        _0xd65d5b.HideMask = function () {
          var _0x4acffc = this;
          window.scrollTo(0, 0);
          this.m_backGround && (this.m_backGround.style.visibility = "hidden");
          this.scheduleOnce(function () {
            _0x4acffc.m_mask && (_0x4acffc.m_mask.active = false);
          }, 0);
        };
        _0xd65d5b.AddGameViewMask = function () {
          var _0x3cfce4 = this;
          var _0x42dedf = _0x3ba089.getScene();
          this.m_mask || _0x42dedf.getChildByName("ScrollForMask") || _0x54385c.browserType == _0x54385c.BrowserType.FIREFOX ? !this.m_mask && _0x42dedf.getChildByName("ScrollForMask") && (this.m_mask = _0x3316f2("ScrollForMask")) : (this.m_mask = new _0xb3307f(), this.m_mask.name = "ScrollForMask", this.m_mask.addComponent(_0x12c13b).setContentSize(new _0x2aa542(2000, 2000)), this.m_mask.addComponent(_0x395ed3), this.m_mask.active = false, _0x42dedf.addChild(this.m_mask), this.m_mask.setSiblingIndex(_0x42dedf.children.length), this.m_mask.on(_0xb3307f.EventType.TOUCH_END, function () {
            if (_0x54385c.os == _0x54385c.OS.IOS && 0 == _0x3cfce4.IsWebview()) {
              var _0x567f0e = _0x3cfce4.m_backGround;
              _0x567f0e && "hidden" == _0x567f0e.style.visibility && (_0x3cfce4.m_mask.active = false);
            } else {
              _0x54385c.os == _0x54385c.OS.ANDROID && 0 == _0x3cfce4.IsWebview() && _0x3cfce4.Fullscreen();
            }
          }));
        };
        _0xd65d5b.IsWebview = function () {
          var _0x35320d = navigator.userAgent;
          var _0x23e066 = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")", "ig");
          return Boolean(_0x35320d.match(_0x23e066));
        };
        _0xd65d5b.IsChrome = function () {
          return /CriOS/.test(navigator.userAgent);
        };
        _0xd65d5b.GetiOSDevice = function () {
          for (var _0x4160df, _0x32c398 = _0x4f5f17(_0x5c04ef); !(_0x4160df = _0x32c398()).done;) {
            var _0x1b56a1 = _0x4160df.value;
            if (screen.height === _0x1b56a1.height && screen.width === _0x1b56a1.width && window.devicePixelRatio === _0x1b56a1.ratio) {
              return _0x1b56a1;
            }
          }
          return null;
        };
        _0xd65d5b.HasFullscreen = function () {
          return null != (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
        };
        _0xd65d5b.IsFullscreen = function () {
          return null != (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        };
        _0xd65d5b.Fullscreen = function () {
          try {
            var _0x5548ef = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen;
            var _0x2c2473 = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
            if (this.HasFullscreen()) {
              if (this.IsFullscreen()) {
                _0x2c2473.call(document);
              } else {
                try {
                  var _0x1d0995 = _0x5548ef.call(document.documentElement);
                  _0x1d0995 instanceof Promise && _0x1d0995.catch(function () {});
                } catch (_0xa1ac6d) {}
              }
            } else {
              console.log("not support fullscreen.");
            }
            this.m_mask.active = false;
          } catch (_0x159d35) {
            this.m_mask.active = false;
          }
        };
        _0xd65d5b.GetLinkParameterByName = function (_0x5d1aff) {
          var _0x3178d7 = window.location.href;
          _0x5d1aff = _0x5d1aff.replace(/[[]]/g, "\\$&");
          var _0x4fc2f5 = new RegExp("[?&]" + _0x5d1aff + "(=([^&#]*)|&|#|$)").exec(_0x3178d7);
          return _0x4fc2f5 ? _0x4fc2f5[2] ? decodeURIComponent(_0x4fc2f5[2].replace(/\+/g, " ")) : "" : null;
        };
        _0xd65d5b.IsIOS15orOver = function () {
          return _0x54385c.os == _0x54385c.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
        };
        _0xd65d5b.IsIOS15Version = function (_0x5d4c35) {
          return _0x54385c.os == _0x54385c.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + _0x5d4c35);
        };
        return _0xe5b6b0;
      }(_0x95667d)).prototype, "isLandscape", [_0x2b3cc7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x38c509 = _0x26bf31(_0x3ea1d0.prototype, "isPortrait", [_0x5e78d7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x39a2f5 = _0x26bf31(_0x3ea1d0.prototype, "isIOS", [_0x54d69e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x15e7b9 = _0x26bf31(_0x3ea1d0.prototype, "isAndroid", [_0x340a01], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x593c06 = _0x26bf31(_0x3ea1d0.prototype, "android_Apiid", [_0x14f5b5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x44e6aa = _0x3ea1d0));
      _0x2e10a1._RF.pop();
    }
  };
});
(function (_0x350363) {
  _0x350363("virtual:///prerequisite-imports/" + window.maincoininfinity, "chunks:///" + window.maincoininfinity + ".js");
})(function (_0x260fbf, _0x25d6e3) {
  System.register(_0x260fbf, [_0x25d6e3], function (_0x3d3a4c, _0x23cbc5) {
    return {
      setters: [function (_0x5f46c4) {
        var _0x3c8f84 = {};
        for (var _0x3a7b67 in _0x5f46c4) {
          if (_0x3a7b67 !== "default" && _0x3a7b67 !== "__esModule") {
            _0x3c8f84[_0x3a7b67] = _0x5f46c4[_0x3a7b67];
          }
        }
        _0x3d3a4c(_0x3c8f84);
      }],
      execute: function () {}
    };
  });
});