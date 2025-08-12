window.mainfullhouse3 = location.href.indexOf("https://") > -1 && new URL(location.href).pathname.indexOf("/fullhouse3/") == 0 ? "main" : "fullhouse3main";
System.register("chunks:///" + window.mainfullhouse3 + ".js", ["./index-c9181a5a.js", "cc"], function () {
  "use strict";

  var _0x43ccc2;
  var _0x254dc4;
  var _0x4d45d3;
  var _0xd5b437;
  var _0x221aac;
  var _0x1ad159;
  var _0x56873b;
  var _0x5ce6a6;
  var _0x34eca3;
  var _0x6eb4bb;
  var _0xea8e18;
  var _0x123d1b;
  var _0x547262;
  var _0x148367;
  var _0x48a959;
  var _0x287710;
  var _0x26c2fd;
  var _0x4c80ef;
  var _0x4f7e83;
  var _0x2d1f62;
  var _0x3c76f4;
  var _0x43d93d;
  var _0x76adb7;
  var _0xf4e009;
  var _0x554aa3;
  var _0x4de0bd;
  var _0x385bee;
  var _0x1ca0b1;
  var _0x3eb7ef;
  var _0x5235d2;
  var _0x4188d4;
  var _0x34748f;
  var _0x2d3723;
  var _0x43f6e7;
  var _0x37b61a;
  var _0x268e87;
  var _0x31f3fc;
  var _0x167af8;
  var _0x4e4844;
  var _0x31f132;
  var _0x2e71c6;
  var _0x46f5c0;
  var _0x15baa6;
  var _0x45f591;
  var _0x320523;
  var _0x333cb3;
  var _0x489450;
  var _0x398a5a;
  var _0x4fc8c0;
  var _0x10a919;
  var _0x370dd0;
  var _0x38d70d;
  var _0x23d090;
  var _0x17eed9;
  var _0x4f87da;
  var _0x32f256;
  var _0x2a4080;
  var _0x1d59f4;
  var _0x1ce97a;
  var _0x38a6e5;
  var _0x48a7a3;
  var _0x474ab1;
  var _0x86c17b;
  var _0x383093;
  var _0x4e51c6;
  var _0x4a7901;
  var _0x5b153f;
  var _0x23d9a3;
  var _0x44fc7c;
  var _0xed2d2c;
  var _0x12a2eb;
  var _0xbf3db3;
  var _0x57fc27;
  var _0x310bc8;
  var _0x5db7f7;
  var _0x358410;
  var _0x2dc040;
  var _0x5bdd2f;
  var _0x18695b;
  var _0x56a3dc;
  var _0x2a6ff7;
  var _0x4dc93f;
  return {
    setters: [function (_0x35afcc) {
      _0x43ccc2 = _0x35afcc._;
      _0x254dc4 = _0x35afcc.a;
      _0x4d45d3 = _0x35afcc.b;
      _0xd5b437 = _0x35afcc.c;
      _0x221aac = _0x35afcc.d;
      _0x1ad159 = _0x35afcc.n;
      _0x56873b = _0x35afcc.e;
      _0x5ce6a6 = _0x35afcc.f;
      _0x34eca3 = _0x35afcc.C;
      _0x6eb4bb = _0x35afcc.g;
      _0xea8e18 = _0x35afcc.S;
      _0x123d1b = _0x35afcc.h;
      _0x547262 = _0x35afcc.i;
      _0x148367 = _0x35afcc.j;
      _0x48a959 = _0x35afcc.k;
      _0x287710 = _0x35afcc.l;
      _0x26c2fd = _0x35afcc.m;
      _0x4c80ef = _0x35afcc.o;
      _0x4f7e83 = _0x35afcc.p;
      _0x2d1f62 = _0x35afcc.q;
      _0x3c76f4 = _0x35afcc.r;
      _0x43d93d = _0x35afcc.s;
      _0x76adb7 = _0x35afcc.t;
      _0xf4e009 = _0x35afcc.u;
    }, function (_0x573b92) {
      _0x554aa3 = _0x573b92.cclegacy;
      _0x4de0bd = _0x573b92._decorator;
      _0x385bee = _0x573b92.Color;
      _0x1ca0b1 = _0x573b92.ccenum;
      _0x3eb7ef = _0x573b92.UITransform;
      _0x5235d2 = _0x573b92.Node;
      _0x4188d4 = _0x573b92.SpriteFrame;
      _0x34748f = _0x573b92.EventHandler;
      _0x2d3723 = _0x573b92.Vec3;
      _0x43f6e7 = _0x573b92.Sprite;
      _0x37b61a = _0x573b92.math;
      _0x268e87 = _0x573b92.assetManager;
      _0x31f3fc = _0x573b92.Label;
      _0x167af8 = _0x573b92.lerp;
      _0x4e4844 = _0x573b92.UIRenderer;
      _0x31f132 = _0x573b92.NodeEventType;
      _0x2e71c6 = _0x573b92.TransformBit;
      _0x46f5c0 = _0x573b92.Component;
      _0x15baa6 = _0x573b92.CCString;
      _0x45f591 = _0x573b92.Animation;
      _0x320523 = _0x573b92.Tween;
      _0x333cb3 = _0x573b92.tween;
      _0x489450 = _0x573b92.Button;
      _0x398a5a = _0x573b92.Material;
      _0x4fc8c0 = _0x573b92.Gradient;
      _0x10a919 = _0x573b92.v4;
      _0x370dd0 = _0x573b92.Texture2D;
      _0x38d70d = _0x573b92.clamp01;
      _0x23d090 = _0x573b92.color;
      _0x17eed9 = _0x573b92.EffectAsset;
      _0x4f87da = _0x573b92.CCInteger;
      _0x32f256 = _0x573b92.CCBoolean;
      _0x2a4080 = _0x573b92.CCFloat;
      _0x1d59f4 = _0x573b92.log;
      _0x1ce97a = _0x573b92.ImageAsset;
      _0x38a6e5 = _0x573b92.sp;
      _0x48a7a3 = _0x573b92.AnimationClip;
      _0x474ab1 = _0x573b92.Enum;
      _0x86c17b = _0x573b92.error;
      _0x383093 = _0x573b92.ScrollView;
      _0x4e51c6 = _0x573b92.UIOpacity;
      _0x4a7901 = _0x573b92.Vec2;
      _0x5b153f = _0x573b92.isValid;
      _0x23d9a3 = _0x573b92.v3;
      _0x44fc7c = _0x573b92.instantiate;
      _0xed2d2c = _0x573b92.v2;
      _0x12a2eb = _0x573b92.director;
      _0xbf3db3 = _0x573b92.Director;
      _0x57fc27 = _0x573b92.CCClass;
      _0x310bc8 = _0x573b92.SpriteAtlas;
      _0x5db7f7 = _0x573b92.js;
      _0x358410 = _0x573b92.Prefab;
      _0x2dc040 = _0x573b92.sys;
      _0x5bdd2f = _0x573b92.settings;
      _0x18695b = _0x573b92.Settings;
      _0x56a3dc = _0x573b92.VERSION;
      _0x2a6ff7 = _0x573b92.find;
      _0x4dc93f = _0x573b92.Size;
    }],
    execute: function () {
      var _0x3b304b;
      var _0x36d2c7;
      var _0x5d43cc;
      var _0x5365d4;
      var _0x3d8934;
      var _0x5b70bf;
      var _0x314ecd;
      var _0x484fff;
      var _0x2f7742;
      var _0x35adf4;
      var _0x13b239;
      var _0x3fec42;
      var _0x1f11b0;
      var _0x59f13b;
      var _0x11f68c;
      var _0xc6683b;
      var _0x60f001;
      var _0x38ab4c;
      var _0x45b70d;
      var _0x44fb1c;
      var _0x481691;
      var _0x293185;
      var _0x4ace19;
      var _0x8adc6d;
      var _0x2c84be;
      var _0x50fd0b;
      var _0x2b1c8a;
      var _0x5d14af;
      var _0x3bf08d;
      var _0x1bd29b;
      var _0x474581;
      var _0x20ed27;
      var _0x1f9b6e;
      var _0x1b25e9;
      var _0x2a80dc;
      var _0x4aa924;
      var _0x59626a;
      var _0x17bd3e;
      var _0x5451f8;
      var _0x25ec8e;
      var _0x2642a8;
      var _0x256f7b;
      var _0x198d9a;
      var _0x715d74;
      var _0x500047;
      var _0x5ca09e;
      var _0x279b56;
      var _0x3cd541;
      _0x554aa3._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x56a62a;
      var _0x3f6124;
      var _0x538c8a;
      var _0x5f05d0 = _0x4de0bd.ccclass;
      var _0x41a04b = _0x4de0bd.executionOrder;
      var _0x51db9a = _0x4de0bd.requireComponent;
      var _0xa080fe = _0x4de0bd.type;
      var _0x4129cd = _0x4de0bd.executeInEditMode;
      var _0x48edd5 = _0x4de0bd.property;
      var _0x41b6a2 = new _0x385bee();
      !function (_0x53e165) {
        _0x53e165[_0x53e165.NONE = 0] = "NONE";
        _0x53e165[_0x53e165.COLOR = 1] = "COLOR";
        _0x53e165[_0x53e165.SPRITE = 2] = "SPRITE";
        _0x53e165[_0x53e165.SCALE = 4] = "SCALE";
        _0x53e165[_0x53e165.COLOR_SPRITE = 3] = "COLOR_SPRITE";
        _0x53e165[_0x53e165.COLOR_SCALE = 5] = "COLOR_SCALE";
        _0x53e165[_0x53e165.SPRITE_SCALE = 6] = "SPRITE_SCALE";
        _0x53e165[_0x53e165.ALL = 7] = "ALL";
      }(_0x56a62a || (_0x56a62a = {}));
      _0x1ca0b1(_0x56a62a);
      (function (_0x1f1878) {
        _0x1f1878.NORMAL = "normal";
        _0x1f1878.HOVER = "hover";
        _0x1f1878.PRESSED = "pressed";
        _0x1f1878.DISABLED = "disabled";
      })(_0x3f6124 || (_0x3f6124 = {}));
      (function (_0x37ce18) {
        _0x37ce18.CLICK = "click";
      })(_0x538c8a || (_0x538c8a = {}));
      var _0x3eb4f7;
      var _0x5abc83;
      var _0x530ce3;
      var _0x570551;
      var _0x54b15b;
      var _0x3a08ba;
      var _0x1d480b;
      var _0x300798;
      var _0x2cc160;
      var _0x34677;
      var _0x4fae12;
      _0x3b304b = _0x5f05d0("ButtonPro");
      _0x36d2c7 = _0x41a04b(110);
      _0x5d43cc = _0x51db9a(_0x3eb7ef);
      _0x5365d4 = _0x48edd5({
        type: _0x5235d2,
        displayOrder: 0,
        tooltip: "i18n:button.target"
      });
      _0x3d8934 = _0x48edd5({
        displayOrder: 1,
        tooltip: "i18n:button.interactable"
      });
      _0x5b70bf = _0x48edd5({
        type: _0x56a62a,
        displayOrder: 2,
        tooltip: "i18n:button.transition"
      });
      _0x314ecd = _0x48edd5({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.normal_color"
      });
      _0x484fff = _0x48edd5({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.pressed_color"
      });
      _0x2f7742 = _0x48edd5({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.hover_color"
      });
      _0x35adf4 = _0x48edd5({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.disabled_color"
      });
      _0x13b239 = _0x48edd5({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.duration",
        min: 0,
        max: 10
      });
      _0x3fec42 = _0x48edd5({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.zoom_scale"
      });
      _0x1f11b0 = _0x48edd5({
        group: {
          name: "SPRITE"
        },
        type: _0x4188d4,
        displayOrder: 3,
        tooltip: "i18n:button.normal_sprite"
      });
      _0x59f13b = _0x48edd5({
        group: {
          name: "SPRITE"
        },
        type: _0x4188d4,
        displayOrder: 3,
        tooltip: "i18n:button.pressed_sprite"
      });
      _0x11f68c = _0x48edd5({
        group: {
          name: "SPRITE"
        },
        type: _0x4188d4,
        displayOrder: 3,
        tooltip: "i18n:button.hover_sprite"
      });
      _0xc6683b = _0x48edd5({
        group: {
          name: "SPRITE"
        },
        type: _0x4188d4,
        displayOrder: 3,
        tooltip: "i18n:button.disabled_sprite"
      });
      _0x60f001 = _0xa080fe([_0x34748f]);
      _0x38ab4c = _0x48edd5({
        serializable: true,
        displayOrder: 20,
        tooltip: "i18n:button.click_events"
      });
      _0x45b70d = _0x48edd5({
        serializable: true
      });
      _0x44fb1c = _0x48edd5({
        serializable: true
      });
      _0x481691 = _0x48edd5({
        serializable: true
      });
      _0x293185 = _0x48edd5({
        serializable: true
      });
      _0x4ace19 = _0x48edd5({
        serializable: true
      });
      _0x8adc6d = _0x48edd5({
        serializable: true
      });
      _0x2c84be = _0x48edd5({
        serializable: true
      });
      _0x50fd0b = _0x48edd5({
        serializable: true
      });
      _0x2b1c8a = _0x48edd5({
        serializable: true
      });
      _0x5d14af = _0x48edd5({
        serializable: true
      });
      _0x3bf08d = _0x48edd5({
        serializable: true
      });
      _0x1bd29b = _0x48edd5({
        serializable: true
      });
      _0x474581 = _0x48edd5({
        serializable: true
      });
      _0x3b304b(_0x20ed27 = _0x36d2c7(_0x20ed27 = _0x5d43cc(_0x20ed27 = _0x4129cd(((_0x3cd541 = function (_0x585d1d) {
        function _0x3ecc85() {
          for (var _0x187e72, _0x1ee4e2 = arguments.length, _0x2eea8f = new Array(_0x1ee4e2), _0x489586 = 0; _0x489586 < _0x1ee4e2; _0x489586++) {
            _0x2eea8f[_0x489586] = arguments[_0x489586];
          }
          _0x187e72 = _0x585d1d.call.apply(_0x585d1d, [this].concat(_0x2eea8f)) || this;
          _0x4d45d3(_0x187e72, "clickEvents", _0x1b25e9, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_interactable", _0x2a80dc, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_transition", _0x4aa924, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_normalColor", _0x59626a, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_hoverColor", _0x17bd3e, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_pressedColor", _0x5451f8, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_disabledColor", _0x25ec8e, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_normalSprite", _0x2642a8, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_hoverSprite", _0x256f7b, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_pressedSprite", _0x198d9a, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_disabledSprite", _0x715d74, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_duration", _0x500047, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_zoomScale", _0x5ca09e, _0xd5b437(_0x187e72));
          _0x4d45d3(_0x187e72, "_target", _0x279b56, _0xd5b437(_0x187e72));
          _0x187e72._pressed = false;
          _0x187e72._hovered = false;
          _0x187e72._fromColor = new _0x385bee();
          _0x187e72._toColor = new _0x385bee();
          _0x187e72._time = 0;
          _0x187e72._transitionFinished = true;
          _0x187e72._fromScale = new _0x2d3723();
          _0x187e72._toScale = new _0x2d3723();
          _0x187e72._originalScale = null;
          _0x187e72._sprite = null;
          _0x187e72._targetScale = new _0x2d3723();
          return _0x187e72;
        }
        _0x254dc4(_0x3ecc85, _0x585d1d);
        var _0x32750c = _0x3ecc85.prototype;
        _0x32750c.onLoad = function () {
          if (!this.getComponent(_0x43f6e7)) {
            var _0x45944a = this.addComponent(_0x43f6e7);
            if (_0x45944a) {
              _0x45944a.sizeMode = _0x43f6e7.SizeMode.CUSTOM;
              _0x45944a.type = _0x43f6e7.Type.SLICED;
              var _0xe6f4d7 = this.node.getComponent(_0x3eb7ef);
              _0xe6f4d7 && (_0xe6f4d7.contentSize = _0x37b61a.size(120, 40));
            }
            var _0x111896 = _0x268e87.assets.get("20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941");
            _0x111896 && (_0x45944a && !_0x45944a.spriteFrame && (_0x45944a.spriteFrame = _0x111896), this._normalSprite || (this._normalSprite = _0x111896), this._hoverSprite || (this._hoverSprite = _0x111896));
            var _0x13ed62 = _0x268e87.assets.get("544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941");
            _0x13ed62 && (this._pressedSprite || (this._pressedSprite = _0x13ed62));
            var _0x44f976 = _0x268e87.assets.get("951249e0-9f16-456d-8b85-a6ca954da16b@f9941");
            _0x44f976 && (this._disabledSprite || (this._disabledSprite = _0x44f976));
          }
          if (!this.node.getChildByName("Label")) {
            var _0x3b39a9 = new _0x5235d2("Label");
            var _0x340e5d = _0x3b39a9.addComponent(_0x31f3fc);
            _0x340e5d.node.layer = this.node.layer;
            _0x340e5d.string = "ButtonPro";
            _0x3b39a9.parent = this.node;
            _0x340e5d.color = _0x385bee.BLACK;
            _0x340e5d.fontSize = 20;
          }
        };
        _0x32750c.__preload = function () {
          this.target || (this.target = this.node);
          var _0x30cd6e = this.node.getComponent(_0x43f6e7);
          _0x30cd6e && (this._normalSprite = _0x30cd6e.spriteFrame);
          this._applyTarget();
          this._resetState();
        };
        _0x32750c.onEnable = function () {
          this._registerNodeEvent();
        };
        _0x32750c.onDisable = function () {
          this._resetState();
          this._unregisterNodeEvent();
        };
        _0x32750c.onDestroy = function () {
          this.target.isValid && this._unregisterTargetEvent(this.target);
        };
        _0x32750c.update = function (_0x532066) {
          var _0x18192a = this.target;
          if (!this._transitionFinished && _0x18192a && (this._transition & _0x56a62a.COLOR || this._transition & _0x56a62a.SCALE)) {
            this._time += _0x532066;
            var _0x486bdf = 1;
            if (this._duration > 0 && (_0x486bdf = this._time / this._duration), _0x486bdf >= 1 && (_0x486bdf = 1), this._transition & _0x56a62a.COLOR) {
              var _0x30f333 = _0x18192a._uiProps.uiComp;
              _0x385bee.lerp(_0x41b6a2, this._fromColor, this._toColor, _0x486bdf);
              _0x30f333 && (_0x30f333.color = _0x41b6a2);
            }
            this.transition & _0x56a62a.SCALE && (_0x18192a.getScale(this._targetScale), this._targetScale.x = _0x167af8(this._fromScale.x, this._toScale.x, _0x486bdf), this._targetScale.y = _0x167af8(this._fromScale.y, this._toScale.y, _0x486bdf), _0x18192a.setScale(this._targetScale));
            1 === _0x486bdf && (this._transitionFinished = true);
          }
        };
        _0x32750c._resizeNodeToTargetNode = function () {
          if (this.target) {
            this.target._uiProps.uiTransformComp;
          }
        };
        _0x32750c._resetState = function () {
          this._pressed = false;
          this._hovered = false;
          var _0xd4d24d = this.target;
          if (_0xd4d24d) {
            var _0x256ae0 = this._transition;
            if (_0x256ae0 & _0x56a62a.COLOR && this._interactable) {
              var _0x927529 = _0xd4d24d.getComponent(_0x4e4844);
              _0x927529 && (_0x927529.color = this._normalColor);
            }
            _0x256ae0 & _0x56a62a.SCALE && this._originalScale && _0xd4d24d.setScale(this._originalScale);
            this._transitionFinished = true;
          }
        };
        _0x32750c._registerNodeEvent = function () {
          this.node.on(_0x31f132.TOUCH_START, this._onTouchBegan, this);
          this.node.on(_0x31f132.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(_0x31f132.TOUCH_END, this._onTouchEnded, this);
          this.node.on(_0x31f132.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.on(_0x31f132.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.on(_0x31f132.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x32750c._registerTargetEvent = function (_0x327fde) {
          _0x327fde.on(_0x31f132.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
        };
        _0x32750c._unregisterNodeEvent = function () {
          this.node.off(_0x31f132.TOUCH_START, this._onTouchBegan, this);
          this.node.off(_0x31f132.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(_0x31f132.TOUCH_END, this._onTouchEnded, this);
          this.node.off(_0x31f132.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.off(_0x31f132.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.off(_0x31f132.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x32750c._unregisterTargetEvent = function (_0x17f16d) {
          _0x17f16d.off(_0x31f132.TRANSFORM_CHANGED);
        };
        _0x32750c._getTargetSprite = function (_0x18b91c) {
          var _0x508885 = null;
          _0x18b91c && (_0x508885 = _0x18b91c.getComponent(_0x43f6e7));
          return _0x508885;
        };
        _0x32750c._applyTarget = function () {
          this.target && (this._sprite = this._getTargetSprite(this.target), this._originalScale || (this._originalScale = new _0x2d3723()), _0x2d3723.copy(this._originalScale, this.target.getScale()), this._registerTargetEvent(this.target));
        };
        _0x32750c._onTargetSpriteFrameChanged = function (_0x3c5833) {
          this._transition & _0x56a62a.SPRITE && this._setCurrentStateSpriteFrame(_0x3c5833.spriteFrame);
        };
        _0x32750c._setCurrentStateSpriteFrame = function (_0x345d37) {
          if (_0x345d37) {
            switch (this._getButtonState()) {
              case _0x3f6124.NORMAL:
                this._normalSprite = _0x345d37;
                break;
              case _0x3f6124.HOVER:
                this._hoverSprite = _0x345d37;
                break;
              case _0x3f6124.PRESSED:
                this._pressedSprite = _0x345d37;
                break;
              case _0x3f6124.DISABLED:
                this._disabledSprite = _0x345d37;
            }
          }
        };
        _0x32750c._onTargetColorChanged = function (_0x18267d) {
          this._transition & _0x56a62a.COLOR && this._setCurrentStateColor(_0x18267d);
        };
        _0x32750c._setCurrentStateColor = function (_0x5d5282) {
          switch (this._getButtonState()) {
            case _0x3f6124.NORMAL:
              this._normalColor = _0x5d5282;
              break;
            case _0x3f6124.HOVER:
              this._hoverColor = _0x5d5282;
              break;
            case _0x3f6124.PRESSED:
              this._pressedColor = _0x5d5282;
              break;
            case _0x3f6124.DISABLED:
              this._disabledColor = _0x5d5282;
          }
        };
        _0x32750c._onTargetTransformChanged = function (_0x32ffed) {
          _0x32ffed & _0x2e71c6.SCALE && this._originalScale && this._transition & _0x56a62a.SCALE && this._transitionFinished && _0x2d3723.copy(this._originalScale, this.target.getScale());
        };
        _0x32750c._onTouchBegan = function (_0xc4d99f) {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState(), _0xc4d99f && (_0xc4d99f.propagationStopped = true));
        };
        _0x32750c._onTouchMove = function (_0x10c5f1) {
          if (this._interactable && this.enabledInHierarchy && this._pressed && _0x10c5f1) {
            var _0x11c7d2 = _0x10c5f1.touch;
            if (_0x11c7d2) {
              var _0x1e9560;
              var _0x1e7d30 = this.node._uiProps.uiTransformComp.hitTest(_0x11c7d2.getLocation());
              if (this._transition & _0x56a62a.SCALE && this.target && this._originalScale) {
                _0x1e7d30 ? (_0x2d3723.copy(this._fromScale, this._originalScale), _0x2d3723.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._transitionFinished = false) : (this._time = 0, this._transitionFinished = true, this.target.setScale(this._originalScale));
              } else {
                _0x1e9560 = _0x1e7d30 ? _0x3f6124.PRESSED : _0x3f6124.NORMAL;
                this._applyTransition(_0x1e9560);
              }
              _0x10c5f1 && (_0x10c5f1.propagationStopped = true);
            }
          }
        };
        _0x32750c._onTouchEnded = function (_0x2408b1) {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x34748f.emitEvents(this.clickEvents, _0x2408b1), this.node.emit(_0x538c8a.CLICK, this)), this._pressed = false, this._updateState(), _0x2408b1 && (_0x2408b1.propagationStopped = true));
        };
        _0x32750c._onTouchCancel = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = false, this._updateState());
        };
        _0x32750c._onMouseMoveIn = function () {
          !this._pressed && this.interactable && this.enabledInHierarchy && (this._transition & _0x56a62a.SPRITE && !this._hoverSprite || this._hovered || (this._hovered = true, this._updateState()));
        };
        _0x32750c._onMouseMoveOut = function () {
          this._hovered && (this._hovered = false, this._updateState());
        };
        _0x32750c._updateState = function () {
          var _0x3984a3 = this._getButtonState();
          this._applyTransition(_0x3984a3);
        };
        _0x32750c._getButtonState = function () {
          var _0x1d99b3 = _0x3f6124.NORMAL;
          this._interactable ? this._pressed ? _0x1d99b3 = _0x3f6124.PRESSED : this._hovered && (_0x1d99b3 = _0x3f6124.HOVER) : _0x1d99b3 = _0x3f6124.DISABLED;
          return _0x1d99b3.toString();
        };
        _0x32750c._updateColorTransition = function (_0x24e785) {
          var _0x572a29;
          var _0x1404c5 = this[_0x24e785 + "Color"];
          var _0x3f12a6 = null == (_0x572a29 = this.target) ? undefined : _0x572a29.getComponent(_0x4e4844);
          _0x3f12a6 && (_0x24e785 === _0x3f6124.DISABLED ? (_0x3f12a6.color = _0x1404c5, this._transitionFinished = true) : (this._fromColor = _0x3f12a6.color.clone(), this._toColor = _0x1404c5, this._time = 0, this._transitionFinished = false));
        };
        _0x32750c._updateSpriteTransition = function (_0x5559cf) {
          var _0x4dca45 = this[_0x5559cf + "Sprite"];
          this._sprite && _0x4dca45 && (this._sprite.spriteFrame = _0x4dca45);
        };
        _0x32750c._updateScaleTransition = function (_0x515dfe) {
          this._interactable && (_0x515dfe === _0x3f6124.PRESSED ? this._zoomUp() : this._zoomBack());
        };
        _0x32750c._zoomUp = function () {
          this._originalScale && (_0x2d3723.copy(this._fromScale, this._originalScale), _0x2d3723.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._time = 0, this._transitionFinished = false);
        };
        _0x32750c._zoomBack = function () {
          this.target && this._originalScale && (_0x2d3723.copy(this._fromScale, this.target.getScale()), _0x2d3723.copy(this._toScale, this._originalScale), this._time = 0, this._transitionFinished = false);
        };
        _0x32750c._applyTransition = function (_0x546c19) {
          var _0xb1be44 = this._transition;
          _0xb1be44 & _0x56a62a.COLOR && this._updateColorTransition(_0x546c19);
          _0xb1be44 & _0x56a62a.SPRITE && this._updateSpriteTransition(_0x546c19);
          _0xb1be44 & _0x56a62a.SCALE && this._updateScaleTransition(_0x546c19);
        };
        _0x32750c._xrHoverEnter = function () {
          this._onMouseMoveIn();
          this._updateState();
        };
        _0x32750c._xrHoverExit = function () {
          this._onMouseMoveOut();
          this._pressed && (this._pressed = false, this._updateState());
        };
        _0x32750c._xrClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState());
        };
        _0x32750c._xrUnClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x34748f.emitEvents(this.clickEvents, this), this.node.emit(_0x538c8a.CLICK, this)), this._pressed = false, this._updateState());
        };
        _0x221aac(_0x3ecc85, [{
          key: "target",
          get: function () {
            return this._target || this.node;
          },
          set: function (_0x19cab8) {
            this._target !== _0x19cab8 && (this._target && this._unregisterTargetEvent(this._target), this._target = _0x19cab8, this._applyTarget());
          }
        }, {
          key: "interactable",
          get: function () {
            return this._interactable;
          },
          set: function (_0x45ae65) {
            this._interactable !== _0x45ae65 && (this._interactable = _0x45ae65, this._updateState(), this._interactable || this._resetState());
          }
        }, {
          key: "_resizeToTarget",
          set: function (_0x3e580c) {
            _0x3e580c && this._resizeNodeToTargetNode();
          }
        }, {
          key: "transition",
          get: function () {
            return this._transition;
          },
          set: function (_0x66399b) {
            this._transition !== _0x66399b && (this._transition & _0x56a62a.COLOR && this._updateColorTransition(_0x3f6124.NORMAL), this._transition & _0x56a62a.SPRITE && this._updateSpriteTransition(_0x3f6124.NORMAL), this._transition = _0x66399b, this._updateState());
          }
        }, {
          key: "normalColor",
          get: function () {
            return this._normalColor;
          },
          set: function (_0x3dab82) {
            this._normalColor !== _0x3dab82 && (this._normalColor.set(_0x3dab82), this._updateState());
          }
        }, {
          key: "pressedColor",
          get: function () {
            return this._pressedColor;
          },
          set: function (_0x19b0f8) {
            this._pressedColor !== _0x19b0f8 && this._pressedColor.set(_0x19b0f8);
          }
        }, {
          key: "hoverColor",
          get: function () {
            return this._hoverColor;
          },
          set: function (_0x59f224) {
            this._hoverColor !== _0x59f224 && this._hoverColor.set(_0x59f224);
          }
        }, {
          key: "disabledColor",
          get: function () {
            return this._disabledColor;
          },
          set: function (_0x394a21) {
            this._disabledColor !== _0x394a21 && (this._disabledColor.set(_0x394a21), this._updateState());
          }
        }, {
          key: "duration",
          get: function () {
            return this._duration;
          },
          set: function (_0xe268e7) {
            this._duration !== _0xe268e7 && (this._duration = _0xe268e7);
          }
        }, {
          key: "zoomScale",
          get: function () {
            return this._zoomScale;
          },
          set: function (_0x20cbb6) {
            this._zoomScale !== _0x20cbb6 && (this._zoomScale = _0x20cbb6);
          }
        }, {
          key: "normalSprite",
          get: function () {
            return this._normalSprite;
          },
          set: function (_0x449e7c) {
            if (this._normalSprite !== _0x449e7c) {
              this._normalSprite = _0x449e7c;
              var _0x1d9079 = this.node.getComponent(_0x43f6e7);
              _0x1d9079 && (_0x1d9079.spriteFrame = _0x449e7c);
              this._updateState();
            }
          }
        }, {
          key: "pressedSprite",
          get: function () {
            return this._pressedSprite;
          },
          set: function (_0x153977) {
            this._pressedSprite !== _0x153977 && (this._pressedSprite = _0x153977, this._updateState());
          }
        }, {
          key: "hoverSprite",
          get: function () {
            return this._hoverSprite;
          },
          set: function (_0x3df22a) {
            this._hoverSprite !== _0x3df22a && (this._hoverSprite = _0x3df22a, this._updateState());
          }
        }, {
          key: "disabledSprite",
          get: function () {
            return this._disabledSprite;
          },
          set: function (_0x5f1c1b) {
            this._disabledSprite !== _0x5f1c1b && (this._disabledSprite = _0x5f1c1b, this._updateState());
          }
        }]);
        return _0x3ecc85;
      }(_0x46f5c0)).Transition = _0x56a62a, _0x3cd541.EventType = _0x538c8a, _0x43ccc2((_0x1f9b6e = _0x3cd541).prototype, "target", [_0x5365d4], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "target"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "interactable", [_0x3d8934], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "interactable"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "transition", [_0x5b70bf], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "transition"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "normalColor", [_0x314ecd], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "normalColor"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "pressedColor", [_0x484fff], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "pressedColor"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "hoverColor", [_0x2f7742], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "hoverColor"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "disabledColor", [_0x35adf4], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "disabledColor"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "duration", [_0x13b239], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "duration"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "zoomScale", [_0x3fec42], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "zoomScale"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "normalSprite", [_0x1f11b0], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "normalSprite"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "pressedSprite", [_0x59f13b], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "pressedSprite"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "hoverSprite", [_0x11f68c], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "hoverSprite"), _0x1f9b6e.prototype), _0x43ccc2(_0x1f9b6e.prototype, "disabledSprite", [_0xc6683b], Object.getOwnPropertyDescriptor(_0x1f9b6e.prototype, "disabledSprite"), _0x1f9b6e.prototype), _0x1b25e9 = _0x43ccc2(_0x1f9b6e.prototype, "clickEvents", [_0x60f001, _0x38ab4c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x2a80dc = _0x43ccc2(_0x1f9b6e.prototype, "_interactable", [_0x45b70d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x4aa924 = _0x43ccc2(_0x1f9b6e.prototype, "_transition", [_0x44fb1c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x56a62a.NONE;
        }
      }), _0x59626a = _0x43ccc2(_0x1f9b6e.prototype, "_normalColor", [_0x481691], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x385bee.WHITE.clone();
        }
      }), _0x17bd3e = _0x43ccc2(_0x1f9b6e.prototype, "_hoverColor", [_0x293185], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x385bee(211, 211, 211, 255);
        }
      }), _0x5451f8 = _0x43ccc2(_0x1f9b6e.prototype, "_pressedColor", [_0x4ace19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x385bee.WHITE.clone();
        }
      }), _0x25ec8e = _0x43ccc2(_0x1f9b6e.prototype, "_disabledColor", [_0x8adc6d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x385bee(124, 124, 124, 255);
        }
      }), _0x2642a8 = _0x43ccc2(_0x1f9b6e.prototype, "_normalSprite", [_0x2c84be], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x256f7b = _0x43ccc2(_0x1f9b6e.prototype, "_hoverSprite", [_0x50fd0b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x198d9a = _0x43ccc2(_0x1f9b6e.prototype, "_pressedSprite", [_0x2b1c8a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x715d74 = _0x43ccc2(_0x1f9b6e.prototype, "_disabledSprite", [_0x5d14af], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x500047 = _0x43ccc2(_0x1f9b6e.prototype, "_duration", [_0x3bf08d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _0x5ca09e = _0x43ccc2(_0x1f9b6e.prototype, "_zoomScale", [_0x1bd29b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.2;
        }
      }), _0x279b56 = _0x43ccc2(_0x1f9b6e.prototype, "_target", [_0x474581], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x20ed27 = _0x1f9b6e)) || _0x20ed27) || _0x20ed27) || _0x20ed27);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var _0x105b6c;
      var _0x39eb77;
      var _0x17ce1e;
      var _0x5ce5c6;
      var _0xe100ee;
      var _0x25e133;
      var _0x5cb31d;
      var _0xa9b07f;
      var _0x49d161;
      var _0x5eb2ce;
      var _0x321ee3;
      var _0x595885;
      var _0x30d6af;
      var _0xdf2a48;
      var _0x313156;
      var _0x268c9e;
      var _0x1ee849;
      var _0x21e36e;
      var _0x36b93c;
      var _0x3085f4;
      var _0x220257;
      var _0x5dee98 = _0x4de0bd.ccclass;
      var _0x157b73 = _0x4de0bd.property;
      _0x3eb4f7 = _0x5dee98("CommonBuyBonusCell");
      _0x5abc83 = _0x157b73({
        type: _0x43f6e7,
        tooltip: "購買文字"
      });
      _0x530ce3 = _0x157b73({
        type: _0x43f6e7,
        tooltip: "項目標題"
      });
      _0x570551 = _0x157b73({
        type: _0x15baa6,
        tooltip: "標題圖片名稱"
      });
      _0x54b15b = _0x157b73({
        type: _0x31f3fc,
        tooltip: "金額"
      });
      var _0x1b700e = _0x3eb4f7((_0x300798 = _0x43ccc2((_0x1d480b = function (_0x557424) {
        function _0x31d887() {
          for (var _0xf3291b, _0x19671d = arguments.length, _0x328ddc = new Array(_0x19671d), _0x19c3ad = 0; _0x19c3ad < _0x19671d; _0x19c3ad++) {
            _0x328ddc[_0x19c3ad] = arguments[_0x19c3ad];
          }
          _0xf3291b = _0x557424.call.apply(_0x557424, [this].concat(_0x328ddc)) || this;
          _0x4d45d3(_0xf3291b, "m_buyHintSprite", _0x300798, _0xd5b437(_0xf3291b));
          _0x4d45d3(_0xf3291b, "m_titleSprite", _0x2cc160, _0xd5b437(_0xf3291b));
          _0x4d45d3(_0xf3291b, "m_titlePicName", _0x34677, _0xd5b437(_0xf3291b));
          _0x4d45d3(_0xf3291b, "m_priceLabel", _0x4fae12, _0xd5b437(_0xf3291b));
          return _0xf3291b;
        }
        _0x254dc4(_0x31d887, _0x557424);
        var _0x32df54 = _0x31d887.prototype;
        _0x32df54.start = function () {
          var _0x39acb4 = _0x1ad159.GetGameAtlas();
          _0x1ad159.CurrLang !== _0x56873b.Lang.EN && (this.m_buyHintSprite.spriteFrame = _0x39acb4.getSpriteFrame("Txt_Buy_Feature_Buy"), this.m_titleSprite.spriteFrame = _0x39acb4.getSpriteFrame(this.m_titlePicName));
        };
        _0x32df54.SetPrice = function (_0x60fdf2) {
          this.m_priceLabel.string = _0x60fdf2;
        };
        return _0x31d887;
      }(_0x46f5c0)).prototype, "m_buyHintSprite", [_0x5abc83], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2cc160 = _0x43ccc2(_0x1d480b.prototype, "m_titleSprite", [_0x530ce3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x34677 = _0x43ccc2(_0x1d480b.prototype, "m_titlePicName", [_0x570551], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x4fae12 = _0x43ccc2(_0x1d480b.prototype, "m_priceLabel", [_0x54b15b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3a08ba = _0x1d480b)) || _0x3a08ba;
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      var _0xcf682f;
      var _0x12cc80;
      var _0x33b4e2;
      var _0x50adce;
      var _0x22a800;
      var _0x24a111;
      var _0x5cdc07;
      var _0x414229;
      var _0x23fb3b;
      var _0x27fec7;
      var _0x3fc324;
      var _0x24b99d;
      var _0x4dd2ec;
      var _0x58ada7;
      var _0xa1c3c1;
      var _0x167692;
      var _0x54da70;
      var _0x2f8032;
      var _0xc29ca0;
      var _0x1ab3b5;
      var _0x3ed47b;
      var _0x4036ae;
      var _0x4e578b;
      var _0x76f6ce;
      var _0x4929bd;
      var _0x2ea139;
      var _0x16c487;
      var _0x1153a4;
      var _0x44e9c7;
      var _0x55bf02 = "Buy_Feature_Open";
      var _0x3b164e = "Buy_Feature_Close";
      var _0x56425b = _0x4de0bd.ccclass;
      var _0x4ad780 = _0x4de0bd.property;
      _0x105b6c = _0x56425b("CommonBuyBonus");
      _0x39eb77 = _0x4ad780({
        type: _0x5235d2,
        tooltip: "介面"
      });
      _0x17ce1e = _0x4ad780({
        type: _0x45f591,
        tooltip: "介面開關動畫"
      });
      _0x5ce5c6 = _0x4ad780({
        type: _0x5235d2,
        tooltip: "開啟按鈕節點"
      });
      _0xe100ee = _0x4ad780({
        type: _0x43f6e7,
        tooltip: "開啟按鈕標題"
      });
      _0x25e133 = _0x4ad780({
        type: _0x31f3fc,
        tooltip: "押注金額"
      });
      _0x5cb31d = _0x4ad780({
        type: _0x1b700e,
        tooltip: "購買項目"
      });
      _0xa9b07f = _0x4ad780({
        type: _0x43f6e7,
        tooltip: "標題"
      });
      _0x49d161 = _0x4ad780({
        type: _0x43f6e7,
        tooltip: "押注"
      });
      _0x5eb2ce = _0x4ad780({
        type: _0x31f3fc,
        tooltip: "幣別符號"
      });
      _0x105b6c((_0x30d6af = _0x43ccc2((_0x595885 = function (_0x43624d) {
        function _0x3a5f97() {
          for (var _0x241b61, _0x27d4a4 = arguments.length, _0x49dec4 = new Array(_0x27d4a4), _0x1c4d66 = 0; _0x1c4d66 < _0x27d4a4; _0x1c4d66++) {
            _0x49dec4[_0x1c4d66] = arguments[_0x1c4d66];
          }
          _0x241b61 = _0x43624d.call.apply(_0x43624d, [this].concat(_0x49dec4)) || this;
          _0x4d45d3(_0x241b61, "m_viewNode", _0x30d6af, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_anim", _0xdf2a48, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_openBtnNode", _0x313156, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_openBtnTitle", _0x268c9e, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_betLabel", _0x1ee849, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_buyBonusCells", _0x21e36e, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_titleSprite", _0x36b93c, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_betSprite", _0x3085f4, _0xd5b437(_0x241b61));
          _0x4d45d3(_0x241b61, "m_currencyLabel", _0x220257, _0xd5b437(_0x241b61));
          _0x241b61.m_iGameView = null;
          _0x241b61.m_setting = null;
          _0x241b61.m_betList = null;
          _0x241b61.m_betIdx = 0;
          _0x241b61.m_bonusType = null;
          _0x241b61.m_isPlayingAnim = false;
          return _0x241b61;
        }
        _0x254dc4(_0x3a5f97, _0x43624d);
        var _0x22b420 = _0x3a5f97.prototype;
        _0x22b420.start = function () {
          this.m_viewNode.active = true;
          var _0x1af8c8 = _0x1ad159.GetGameAtlas();
          _0x1ad159.CurrLang !== _0x56873b.Lang.EN && (this.m_betSprite.spriteFrame = _0x1af8c8.getSpriteFrame("Txt_Buy_Feature_Bet"), this.m_titleSprite.spriteFrame = _0x1af8c8.getSpriteFrame("Txt_Buy_Feature_Title"), this.m_openBtnTitle && (this.m_openBtnTitle.spriteFrame = _0x1af8c8.getSpriteFrame("BuyBonus_IconName")));
          _0x5ce6a6.Register(_0x34eca3.TriggerFreeSpin, this);
          _0x5ce6a6.Register(_0x34eca3.FreeSpinTotalWinEnd, this);
          _0x5ce6a6.Register(_0x34eca3.PauseFreeSpin, this);
        };
        _0x22b420.Init = function (_0x3fc16f, _0xf9fa4, _0x1ae9cc, _0x9b2c4d) {
          var _0x37a4a7 = this;
          if (undefined === _0x1ae9cc && (_0x1ae9cc = false), undefined === _0x9b2c4d && (_0x9b2c4d = null), this.m_viewNode.active = false, _0x3fc16f && !_0x6eb4bb.CheckSwitchOff(_0xea8e18.ShopingMall)) {
            this.m_setting = _0x3fc16f;
            this.m_iGameView = _0xf9fa4;
            this.m_betList = JSON.parse(JSON.stringify(_0x123d1b.GetBetList()));
            for (var _0x24922a = this.m_betList.length - 1; _0x24922a >= 0 && this.m_betList[_0x24922a] > this.m_setting.MaxBet; _0x24922a--) {
              this.m_betList.splice(_0x24922a);
            }
            this.m_betIdx = _0x123d1b.GetNowBetIndex();
            (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 1]) && (this.m_betIdx = this.m_betList.length - 1);
            this.SetPrice();
            for (var _0x586adc = function (_0x46bef5) {
                _0x37a4a7.m_buyBonusCells[_0x46bef5].getComponent(_0x489450).node.on(_0x5235d2.EventType.TOUCH_END, function () {
                  _0x547262.IsFeaturesDemoMode ? _0x37a4a7.Hide() : (null == _0x9b2c4d || _0x9b2c4d(), _0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), _0x37a4a7.m_isPlayingAnim || (_0x26c2fd.ForceChangeExtraBetMode(false), _0x37a4a7.m_bonusType = _0x46bef5, _0x37a4a7.Hide(), _0x123d1b.SetNowBet(_0x37a4a7.m_betList[_0x37a4a7.m_betIdx]), _0x37a4a7.m_iGameView.ClickSpin()));
                });
              }, _0x50611a = 0; _0x50611a < this.m_buyBonusCells.length; _0x50611a++) {
              _0x586adc(_0x50611a);
            }
            this.m_viewNode.active = false;
            _0x1ae9cc && this.m_openBtnNode && (this.m_openBtnNode.removeFromParent(), _0x547262.SetGameBuyBonus(this.m_openBtnNode));
          } else {
            this.SetBuyBtnVisible(false);
          }
        };
        _0x22b420.OnEvent = function (_0x443a88) {
          _0x443a88 === _0x34eca3.TriggerFreeSpin ? (this.Hide(), this.SetBuyBtnVisible(false)) : _0x443a88 !== _0x34eca3.FreeSpinTotalWinEnd && _0x443a88 !== _0x34eca3.PauseFreeSpin || this.SetBuyBtnVisible(true);
        };
        _0x22b420.SetPrice = function () {
          var _0x56ec74 = this.m_betList[this.m_betIdx];
          this.m_currencyLabel && (_0x56873b.DollarSymbol ? this.m_currencyLabel.string = "(" + _0x56873b.DollarSymbol + ")" : this.m_currencyLabel.node.active = false);
          this.m_betLabel.string = "" + _0x56873b.DollarSymbol + _0x6eb4bb.FormatNumberThousands(_0x56ec74, _0x6eb4bb.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var _0x252d53 = 0; _0x252d53 < this.m_buyBonusCells.length; _0x252d53++) {
            var _0xc1008d = _0x6eb4bb.times(_0x56ec74, this.m_setting.PriceOdd[_0x252d53]);
            this.m_buyBonusCells[_0x252d53].SetPrice("" + _0x56873b.DollarSymbol + _0x6eb4bb.FormatNumberThousands(_0xc1008d, _0x6eb4bb.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
          }
        };
        _0x22b420.SetBuyBtnVisible = function (_0x1cb27c) {
          this.m_openBtnNode.active = !!this.m_setting && _0x1cb27c;
        };
        _0x22b420.GetBuyBtnVisible = function () {
          return this.m_openBtnNode.active;
        };
        _0x22b420.GetBuyBonusBet = function () {
          return this.m_setting && null !== this.m_bonusType ? _0x6eb4bb.times(this.m_setting.PriceOdd[this.m_bonusType], _0x123d1b.GetNowBetValue()) : _0x6eb4bb.strip(_0x123d1b.GetNowBetValue());
        };
        _0x22b420.CleanInfo = function () {
          this.m_bonusType = null;
        };
        _0x22b420.IsOpen = function () {
          return this.m_viewNode.active;
        };
        _0x22b420.Show = function () {
          var _0x53aea4 = this;
          if (!(_0x148367.Current() !== _0x48a959.IDLE || _0x56873b.FreeSpinRemain > 0) && !this.m_anim.getState(_0x3b164e).isPlaying && !this.m_viewNode.active) {
            _0x320523.stopAllByTarget(this.node);
            this.m_isPlayingAnim = true;
            _0x287710.Play(_0x56873b.AudioClips.COMMON_BTN);
            this.m_viewNode.active = true;
            this.m_anim.play(_0x55bf02);
            var _0x5a85a6 = this.m_anim.getState(_0x55bf02);
            _0x333cb3(this.node).delay(_0x5a85a6.duration).call(function () {
              _0x53aea4.m_isPlayingAnim = false;
            }).start();
            var _0x26a14a = "-1";
            var _0x3eddbe = 0;
            _0x56873b.APP && (_0x26a14a = _0x56873b.APP.GetAID(), _0x3eddbe = Number(_0x56873b.APP.GetApiID()));
            _0x56873b.SendBtnClickEvent(Number(_0x26a14a), _0x3eddbe, Number(_0x56873b.NOW_GAME_ID), this.m_iGameView.Version, _0x56873b.BTN_CLICK_EVENT.INGAME_BUY_BONUS, 0, false);
          }
        };
        _0x22b420.Hide = function () {
          var _0x1d6dfc = _0x4c80ef(_0x4f7e83().mark(function _0x54f9e2() {
            var _0x537acc;
            var _0x4b692b;
            var _0x35c8bb;
            var _0x4453c6 = this;
            return _0x4f7e83().wrap(function (_0x2f3948) {
              for (;;) {
                switch (_0x2f3948.prev = _0x2f3948.next) {
                  case 0:
                    if (_0x537acc = this.m_anim.getState(_0x3b164e), this.m_viewNode.active && !_0x537acc.isPlaying) {
                      _0x2f3948.next = 3;
                      break;
                    }
                    return _0x2f3948.abrupt("return");
                  case 3:
                    (_0x4b692b = this.m_anim.getState(_0x55bf02)).isPlaying && _0x4b692b.stop();
                    _0x320523.stopAllByTarget(this.node);
                    this.m_isPlayingAnim = true;
                    _0x287710.Play(_0x56873b.AudioClips.COMMON_BTN);
                    this.m_anim.play(_0x3b164e);
                    _0x537acc = this.m_anim.getState(_0x3b164e);
                    _0x333cb3(this.node).delay(_0x4b692b.duration).call(function () {
                      _0x4453c6.m_isPlayingAnim = false;
                    }).start();
                    _0x35c8bb = this.m_anim.getState(_0x3b164e);
                    _0x2f3948.next = 14;
                    return _0x56873b.Wait(this, _0x35c8bb.duration);
                  case 14:
                    this.m_viewNode.active = false;
                  case 15:
                  case "end":
                    return _0x2f3948.stop();
                }
              }
            }, _0x54f9e2, this);
          }));
          return function () {
            return _0x1d6dfc.apply(this, arguments);
          };
        }();
        _0x22b420.AddBet = function () {
          this.m_betIdx + 1 > this.m_betList.length - 1 || (_0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), this.m_betIdx++, this.SetPrice());
        };
        _0x22b420.SubBet = function () {
          this.m_betIdx - 1 < 0 || (_0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), this.m_betIdx--, this.SetPrice());
        };
        _0x221aac(_0x3a5f97, [{
          key: "BonusType",
          get: function () {
            return this.m_bonusType;
          }
        }]);
        return _0x3a5f97;
      }(_0x46f5c0)).prototype, "m_viewNode", [_0x39eb77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xdf2a48 = _0x43ccc2(_0x595885.prototype, "m_anim", [_0x17ce1e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x313156 = _0x43ccc2(_0x595885.prototype, "m_openBtnNode", [_0x5ce5c6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x268c9e = _0x43ccc2(_0x595885.prototype, "m_openBtnTitle", [_0xe100ee], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1ee849 = _0x43ccc2(_0x595885.prototype, "m_betLabel", [_0x25e133], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x21e36e = _0x43ccc2(_0x595885.prototype, "m_buyBonusCells", [_0x5cb31d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x36b93c = _0x43ccc2(_0x595885.prototype, "m_titleSprite", [_0xa9b07f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3085f4 = _0x43ccc2(_0x595885.prototype, "m_betSprite", [_0x49d161], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x220257 = _0x43ccc2(_0x595885.prototype, "m_currencyLabel", [_0x5eb2ce], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x321ee3 = _0x595885));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      var _0xee9a89;
      var _0x24c3c3;
      var _0xca3b54;
      var _0x3ac51b;
      var _0x31a429;
      var _0xfdbf2b;
      var _0x25c375;
      var _0x2108e3;
      var _0x712d05 = _0x4de0bd.ccclass;
      var _0x3b434d = _0x4de0bd.property;
      var _0x2754b3 = _0x4de0bd.requireComponent;
      var _0x3df3cb = _0x4de0bd.executeInEditMode;
      _0xcf682f = _0x712d05("ColorText");
      _0x12cc80 = _0x2754b3(_0x31f3fc);
      _0x33b4e2 = _0x3b434d(_0x398a5a);
      _0x50adce = _0x3b434d(_0x4fc8c0);
      _0x22a800 = _0x3b434d(_0x385bee);
      _0x24a111 = _0x3b434d({
        tooltip: "使用該元件的自定義材質",
        type: _0x398a5a
      });
      _0x5cdc07 = _0x3b434d({
        tooltip: "顏色漸變元件",
        type: _0x4fc8c0
      });
      _0x414229 = _0x3b434d({
        tooltip: "正片疊底顏色",
        type: _0x385bee
      });
      _0x23fb3b = _0x3b434d({
        tooltip: "顏色漸變貼圖的範圍",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x27fec7 = _0x3b434d({
        tooltip: "是否垂直漸變顏色"
      });
      _0x3fc324 = _0x3b434d({
        tooltip: "上內陰影顏色",
        type: _0x385bee
      });
      _0x24b99d = _0x3b434d({
        tooltip: "下內陰影顏色",
        type: _0x385bee
      });
      _0x4dd2ec = _0x3b434d({
        tooltip: "上內陰影顏色高度 (Pixel)"
      });
      _0x58ada7 = _0x3b434d({
        tooltip: "下內陰影顏色高度 (Pixel)"
      });
      _0xa1c3c1 = _0x3b434d({
        tooltip: "上內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x167692 = _0x3b434d({
        tooltip: "下內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      _0xcf682f(_0x54da70 = _0x12cc80(_0x54da70 = _0x3df3cb((_0xc29ca0 = _0x43ccc2((_0x2f8032 = function (_0x12d8df) {
        function _0x604927() {
          for (var _0x4e5339, _0x4df0cb = arguments.length, _0x3ebdc3 = new Array(_0x4df0cb), _0x177b62 = 0; _0x177b62 < _0x4df0cb; _0x177b62++) {
            _0x3ebdc3[_0x177b62] = arguments[_0x177b62];
          }
          _0x4e5339 = _0x12d8df.call.apply(_0x12d8df, [this].concat(_0x3ebdc3)) || this;
          _0x4d45d3(_0x4e5339, "_textMaterial", _0xc29ca0, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_gradient", _0x1ab3b5, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_gradientMultiply", _0x3ed47b, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_gradientShrink", _0x4036ae, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_isVertical", _0x4e578b, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowColor1", _0x76f6ce, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowColor2", _0x4929bd, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowHeight1", _0x2ea139, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowHeight2", _0x16c487, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowRate1", _0x1153a4, _0xd5b437(_0x4e5339));
          _0x4d45d3(_0x4e5339, "_innerShadowRate2", _0x44e9c7, _0xd5b437(_0x4e5339));
          _0x4e5339.pixelNum = 128;
          _0x4e5339.colorTexture = null;
          _0x4e5339.isGradientChanged = true;
          return _0x4e5339;
        }
        _0x254dc4(_0x604927, _0x12d8df);
        var _0x2eded7 = _0x604927.prototype;
        _0x2eded7.onLoad = function () {
          var _0x411636 = this.node.getComponent(_0x31f3fc);
          null !== _0x411636.customMaterial && (_0x411636.customMaterial !== _0x411636.sharedMaterial && _0x411636.customMaterial.destroy(), _0x411636.customMaterial = null);
          _0x411636.color = _0x385bee.WHITE;
          null === this._textMaterial && console.warn("ColorText.textMaterial should be not null.");
        };
        _0x2eded7.onEnable = function () {
          this.reset();
        };
        _0x2eded7.onDestroy = function () {
          var _0x1fe8c6;
          null == (_0x1fe8c6 = this.colorTexture) || _0x1fe8c6.destroy();
          this.colorTexture = null;
        };
        _0x2eded7.reset = function () {
          null === this.colorTexture && (this.colorTexture = this.createColorTexture());
          true === this.isGradientChanged && (this.isGradientChanged = false, this.updateColorTexture());
          var _0x1d4124 = this.node.getComponent(_0x31f3fc);
          var _0x2ccb12 = _0x1d4124.customMaterial;
          if (!_0x2ccb12 && this._textMaterial && ((_0x2ccb12 = new _0x398a5a()).copy(this._textMaterial), _0x1d4124.customMaterial = _0x2ccb12), _0x2ccb12) {
            _0x2ccb12.setProperty("gradientMap", this.colorTexture);
            _0x2ccb12.setProperty("gradientMultiply", this._gradientMultiply);
            _0x2ccb12.setProperty("gradientShrink", this._gradientShrink);
            _0x2ccb12.setProperty("innerShadow1", this._innerShadowColor1);
            _0x2ccb12.setProperty("innerShadow2", this._innerShadowColor2);
            var _0x418adf = 0;
            var _0xda45ee = 0;
            var _0x5e197c = this.node.getComponent(_0x3eb7ef).contentSize;
            _0x5e197c.height > 0 && (_0x418adf = this._innerShadowHeight1 / _0x5e197c.height, _0xda45ee = this._innerShadowHeight2 / _0x5e197c.height);
            var _0x1a14f8 = _0x10a919(_0x418adf, _0xda45ee, this._innerShadowRate1, this._innerShadowRate2);
            _0x2ccb12.setProperty("innerShadowParam", _0x1a14f8);
          }
        };
        _0x2eded7.createColorTexture = function () {
          var _0x3a9a95 = new _0x370dd0();
          var _0x53373a = this.pixelNum;
          var _0x594122 = 1;
          true === this._isVertical && (_0x594122 = _0x53373a, _0x53373a = 1);
          _0x3a9a95.reset({
            width: _0x53373a,
            height: _0x594122,
            format: _0x370dd0.PixelFormat.RGBA8888,
            mipmapLevel: 0
          });
          _0x3a9a95.setWrapMode(_0x370dd0.WrapMode.CLAMP_TO_EDGE, _0x370dd0.WrapMode.CLAMP_TO_EDGE);
          _0x3a9a95.setFilters(_0x370dd0.Filter.LINEAR, _0x370dd0.Filter.LINEAR);
          return _0x3a9a95;
        };
        _0x2eded7.updateColorTexture = function () {
          for (var _0x2aa950 = this.pixelNum, _0x2f1db5 = new Uint8ClampedArray(4 * _0x2aa950), _0x11a107 = 0, _0x5bbb26 = this._gradient, _0x2c7053 = 0; _0x2c7053 < _0x2aa950; ++_0x2c7053) {
            var _0x4316ac = _0x5bbb26.evaluate(_0x2c7053 / _0x2aa950);
            _0x2f1db5[_0x11a107++] = _0x4316ac.r;
            _0x2f1db5[_0x11a107++] = _0x4316ac.g;
            _0x2f1db5[_0x11a107++] = _0x4316ac.b;
            _0x2f1db5[_0x11a107++] = _0x4316ac.a;
          }
          var _0x2dec7a = this.colorTexture;
          _0x2dec7a.uploadData(_0x2f1db5, 0, 0);
          _0x2dec7a.updateImage();
        };
        _0x221aac(_0x604927, [{
          key: "textMaterial",
          get: function () {
            return this._textMaterial;
          },
          set: function (_0x30798e) {
            this._textMaterial = _0x30798e;
            this.reset();
          }
        }, {
          key: "gradient",
          get: function () {
            return this._gradient;
          },
          set: function (_0x32ea4f) {
            this.isGradientChanged = true;
            this._gradient = _0x32ea4f;
            this.reset();
          }
        }, {
          key: "gradientMultiply",
          get: function () {
            return this._gradientMultiply;
          },
          set: function (_0x2a57a4) {
            this._gradientMultiply = _0x2a57a4;
            this.reset();
          }
        }, {
          key: "gradientShrink",
          get: function () {
            return this._gradientShrink;
          },
          set: function (_0x46fbc0) {
            this._gradientShrink = _0x46fbc0;
            this.reset();
          }
        }, {
          key: "isVertical",
          get: function () {
            return this._isVertical;
          },
          set: function (_0x2a6a6d) {
            var _0x5bb357;
            this._isVertical !== _0x2a6a6d && (null == (_0x5bb357 = this.colorTexture) || _0x5bb357.destroy(), this.colorTexture = null);
            this._isVertical = _0x2a6a6d;
            this.reset();
          }
        }, {
          key: "innerShadowColor1",
          get: function () {
            return this._innerShadowColor1;
          },
          set: function (_0x470097) {
            this._innerShadowColor1.set(_0x470097);
            this.reset();
          }
        }, {
          key: "innerShadowColor2",
          get: function () {
            return this._innerShadowColor2;
          },
          set: function (_0x252827) {
            this._innerShadowColor2.set(_0x252827);
            this.reset();
          }
        }, {
          key: "innerShadowHeight1",
          get: function () {
            return this._innerShadowHeight1;
          },
          set: function (_0x466b9a) {
            this._innerShadowHeight1 = _0x466b9a;
            this.reset();
          }
        }, {
          key: "innerShadowHeight2",
          get: function () {
            return this._innerShadowHeight2;
          },
          set: function (_0x2eb63a) {
            this._innerShadowHeight2 = _0x2eb63a;
            this.reset();
          }
        }, {
          key: "innerShadowRate1",
          get: function () {
            return this._innerShadowRate1;
          },
          set: function (_0x4e9706) {
            this._innerShadowRate1 = _0x38d70d(_0x4e9706);
            this.reset();
          }
        }, {
          key: "innerShadowRate2",
          get: function () {
            return this._innerShadowRate2;
          },
          set: function (_0x192abf) {
            this._innerShadowRate2 = _0x192abf;
            this.reset();
          }
        }]);
        return _0x604927;
      }(_0x46f5c0)).prototype, "_textMaterial", [_0x33b4e2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1ab3b5 = _0x43ccc2(_0x2f8032.prototype, "_gradient", [_0x50adce], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x4fc8c0();
        }
      }), _0x3ed47b = _0x43ccc2(_0x2f8032.prototype, "_gradientMultiply", [_0x22a800], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x23d090(255, 255, 255, 255);
        }
      }), _0x4036ae = _0x43ccc2(_0x2f8032.prototype, "_gradientShrink", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.15;
        }
      }), _0x4e578b = _0x43ccc2(_0x2f8032.prototype, "_isVertical", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x43ccc2(_0x2f8032.prototype, "textMaterial", [_0x24a111], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "textMaterial"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "gradient", [_0x5cdc07], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "gradient"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "gradientMultiply", [_0x414229], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "gradientMultiply"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "gradientShrink", [_0x23fb3b], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "gradientShrink"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "isVertical", [_0x27fec7], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "isVertical"), _0x2f8032.prototype), _0x76f6ce = _0x43ccc2(_0x2f8032.prototype, "_innerShadowColor1", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x23d090(255, 255, 255, 255);
        }
      }), _0x4929bd = _0x43ccc2(_0x2f8032.prototype, "_innerShadowColor2", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x23d090(255, 255, 255, 255);
        }
      }), _0x2ea139 = _0x43ccc2(_0x2f8032.prototype, "_innerShadowHeight1", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x16c487 = _0x43ccc2(_0x2f8032.prototype, "_innerShadowHeight2", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _0x1153a4 = _0x43ccc2(_0x2f8032.prototype, "_innerShadowRate1", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x44e9c7 = _0x43ccc2(_0x2f8032.prototype, "_innerShadowRate2", [_0x3b434d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x43ccc2(_0x2f8032.prototype, "innerShadowColor1", [_0x3fc324], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowColor1"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "innerShadowColor2", [_0x24b99d], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowColor2"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "innerShadowHeight1", [_0x4dd2ec], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowHeight1"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "innerShadowHeight2", [_0x58ada7], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowHeight2"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "innerShadowRate1", [_0xa1c3c1], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowRate1"), _0x2f8032.prototype), _0x43ccc2(_0x2f8032.prototype, "innerShadowRate2", [_0x167692], Object.getOwnPropertyDescriptor(_0x2f8032.prototype, "innerShadowRate2"), _0x2f8032.prototype), _0x54da70 = _0x2f8032)) || _0x54da70) || _0x54da70);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x2abaec;
      var _0x1ec1a8;
      var _0x136937;
      var _0x17bb8e;
      var _0x55ffbe;
      var _0x37fda5;
      var _0x21adad;
      var _0x54ae1b;
      var _0x11a2bf;
      var _0x3f5467;
      var _0x2c9496;
      var _0x480ac5;
      var _0x3fff61;
      var _0x2ead45;
      var _0x4d0bb8;
      var _0x38c2bb;
      var _0x54bc49;
      var _0x1770d6;
      var _0x3d78df = _0x4de0bd.ccclass;
      var _0x4b4cda = _0x4de0bd.property;
      var _0x2ed3d4 = _0x4de0bd.executeInEditMode;
      _0xee9a89 = _0x3d78df("ColorFadingUI");
      _0x24c3c3 = _0x4b4cda({
        type: _0x17eed9,
        tooltip: "Color Fading 預設 shader"
      });
      _0xca3b54 = _0x4b4cda({
        type: _0x4f87da,
        tooltip: "Gradient Texture Size"
      });
      _0x3ac51b = _0x4b4cda({
        type: _0x32f256,
        tooltip: "是否使用alpha test, Spine建議開啟"
      });
      _0x31a429 = _0x4b4cda({
        type: _0x2a4080,
        tooltip: "混合比例，0~1之間"
      });
      _0xfdbf2b = _0x4b4cda({
        type: _0x4fc8c0,
        tooltip: "當前Gradient"
      });
      _0xee9a89(_0x25c375 = _0x2ed3d4((_0x43ccc2((_0x2108e3 = function (_0x32a945) {
        function _0x56aa1b() {
          for (var _0x4150fd, _0x2f6297 = arguments.length, _0x16aed8 = new Array(_0x2f6297), _0x225693 = 0; _0x225693 < _0x2f6297; _0x225693++) {
            _0x16aed8[_0x225693] = arguments[_0x225693];
          }
          (_0x4150fd = _0x32a945.call.apply(_0x32a945, [this].concat(_0x16aed8)) || this).m_colorFadingEffect = null;
          _0x4150fd.m_gradientTextureSize = 64;
          _0x4150fd.m_currGradient = new _0x4fc8c0();
          _0x4150fd.m_mixRate = 0;
          _0x4150fd.m_useAlphaTest = false;
          _0x4150fd.m_tex = new _0x370dd0();
          _0x4150fd.m_use_colorfading = true;
          _0x4150fd.m_renderComponent = null;
          _0x4150fd.m_copyEffect = null;
          return _0x4150fd;
        }
        _0x254dc4(_0x56aa1b, _0x32a945);
        var _0x492ebf = _0x56aa1b.prototype;
        _0x492ebf.start = function () {
          this.GenerateMat();
        };
        _0x492ebf.onDestroy = function () {
          this.m_use_colorfading = false;
        };
        _0x492ebf.Init = function (_0x4b6c47, _0x39ef88, _0x1c11e1, _0x490655, _0x39a0f1, _0x2925a3) {
          undefined === _0x1c11e1 && (_0x1c11e1 = 0);
          undefined === _0x490655 && (_0x490655 = 64);
          undefined === _0x39a0f1 && (_0x39a0f1 = true);
          undefined === _0x2925a3 && (_0x2925a3 = false);
          this.ColorFadingEffect = _0x4b6c47;
          this.CurrentGradient = _0x39ef88;
          this.UseAlphaTest = _0x2925a3;
          this.MixRate = _0x1c11e1;
          this.GradientTextureSize = _0x490655;
          this.UseColorFadingAPI(_0x39a0f1);
          this.GenerateMat();
        };
        _0x492ebf.UseColorFadingAPI = function (_0x320219) {
          this.m_use_colorfading = _0x320219;
          this.GenerateMat();
        };
        _0x492ebf.ResetGradient = function () {
          this.m_mixRate = 1;
          this.m_currGradient = new _0x4fc8c0();
          this.LoadTexture();
        };
        _0x492ebf.GenerateMat = function () {
          var _0x419843 = this.GetRenderComponent();
          if (null != _0x419843 && null != this.m_colorFadingEffect) {
            var _0xc6da3f = new _0x398a5a();
            _0xc6da3f.initialize({
              effectAsset: this.m_colorFadingEffect,
              technique: 0,
              defines: {
                USE_COLOR_FADING: this.m_use_colorfading,
                USE_ALPHA_TEST: this.m_useAlphaTest
              }
            });
            _0x419843.customMaterial = _0xc6da3f;
            this.LoadTexture();
          }
        };
        _0x492ebf.LoadTexture = function () {
          if (null == this.m_colorFadingEffect) {
            _0x1d59f4("Warning! No effect asset loaded!");
          } else {
            _0x1d59f4("loadTexture", this.m_currGradient);
            this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
            for (var _0x19bce6 = [], _0x13d50d = 1 / this.m_gradientTextureSize, _0x37d679 = 0; _0x37d679 <= 1; _0x37d679++) {
              for (var _0x4c5b05 = 0; _0x4c5b05 <= this.m_gradientTextureSize; _0x4c5b05 += _0x13d50d) {
                var _0x2ec641 = new _0x385bee();
                _0x2ec641 = this.m_currGradient.evaluate(_0x4c5b05);
                _0x19bce6.push(_0x2ec641.r);
                _0x19bce6.push(_0x2ec641.g);
                _0x19bce6.push(_0x2ec641.b);
                _0x19bce6.push(_0x2ec641.a);
              }
            }
            this.CreateTexture(_0x19bce6);
          }
        };
        _0x492ebf.CreateTexture = function (_0x2c6632) {
          var _0x52d7e6 = new Uint8Array(_0x2c6632);
          var _0x321fad = new _0x1ce97a();
          this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
          _0x321fad.reset({
            _data: _0x52d7e6,
            width: this.m_gradientTextureSize,
            height: 1,
            format: _0x370dd0.PixelFormat.RGBA8888,
            _compressed: false
          });
          this.m_tex.image = _0x321fad;
          this.m_tex.setWrapMode(_0x370dd0.WrapMode.CLAMP_TO_EDGE, _0x370dd0.WrapMode.CLAMP_TO_EDGE);
          this.UpdateMaterial();
        };
        _0x492ebf.UpdateMaterial = function () {
          var _0x3e8bc1 = this.GetRenderComponent();
          if (null != _0x3e8bc1) {
            var _0x1c468c = _0x3e8bc1.customMaterial;
            _0x1c468c && (_0x1c468c.setProperty("gradient", this.m_tex), _0x1c468c.setProperty("mixRate", this.m_mixRate));
          }
        };
        _0x492ebf.GetRenderComponent = function () {
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x43f6e7));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x38a6e5.Skeleton));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x31f3fc));
          return this.m_renderComponent;
        };
        _0x221aac(_0x56aa1b, [{
          key: "ColorFadingEffect",
          get: function () {
            return this.m_copyEffect;
          },
          set: function (_0x2007c) {
            null != _0x2007c && (this.m_colorFadingEffect = _0x2007c);
            this.m_copyEffect = _0x2007c;
          }
        }, {
          key: "GradientTextureSize",
          get: function () {
            return this.m_gradientTextureSize;
          },
          set: function (_0x52dc9c) {
            this.m_gradientTextureSize = _0x52dc9c;
            null != this.m_tex && this.LoadTexture();
          }
        }, {
          key: "UseAlphaTest",
          get: function () {
            return this.m_useAlphaTest;
          },
          set: function (_0x17d8b5) {
            this.m_useAlphaTest = _0x17d8b5;
          }
        }, {
          key: "MixRate",
          get: function () {
            return this.m_mixRate;
          },
          set: function (_0x37380a) {
            if (_0x37380a > 1) {
              this.m_mixRate = 1;
            } else {
              if (_0x37380a < 0) {
                this.m_mixRate = 0;
              } else {
                this.m_mixRate = _0x37380a;
                var _0x57995f = this.GetRenderComponent();
                if (null != _0x57995f) {
                  var _0x25c15b = _0x57995f.customMaterial;
                  _0x25c15b ? _0x25c15b.setProperty("mixRate", this.m_mixRate) : this.GenerateMat();
                }
              }
            }
          }
        }, {
          key: "CurrentGradient",
          get: function () {
            return this.m_currGradient;
          },
          set: function (_0x253b85) {
            this.m_currGradient = _0x253b85;
            this.LoadTexture();
          }
        }]);
        return _0x56aa1b;
      }(_0x46f5c0)).prototype, "ColorFadingEffect", [_0x24c3c3], Object.getOwnPropertyDescriptor(_0x2108e3.prototype, "ColorFadingEffect"), _0x2108e3.prototype), _0x43ccc2(_0x2108e3.prototype, "GradientTextureSize", [_0xca3b54], Object.getOwnPropertyDescriptor(_0x2108e3.prototype, "GradientTextureSize"), _0x2108e3.prototype), _0x43ccc2(_0x2108e3.prototype, "UseAlphaTest", [_0x3ac51b], Object.getOwnPropertyDescriptor(_0x2108e3.prototype, "UseAlphaTest"), _0x2108e3.prototype), _0x43ccc2(_0x2108e3.prototype, "MixRate", [_0x31a429], Object.getOwnPropertyDescriptor(_0x2108e3.prototype, "MixRate"), _0x2108e3.prototype), _0x43ccc2(_0x2108e3.prototype, "CurrentGradient", [_0xfdbf2b], Object.getOwnPropertyDescriptor(_0x2108e3.prototype, "CurrentGradient"), _0x2108e3.prototype), _0x25c375 = _0x2108e3)) || _0x25c375);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      var _0x356b0c;
      var _0x25a07d;
      var _0xd2c1b8;
      var _0xdf3550;
      var _0x9d48ac;
      var _0x2e1659;
      var _0x2e12e6;
      var _0x1b2b19;
      var _0x440fd1;
      var _0x14ce69;
      var _0x186a3d = _0x4de0bd.ccclass;
      var _0x377056 = _0x4de0bd.property;
      var _0xdb783c = 0;
      var _0x5d816a = 1;
      _0x2abaec = _0x377056({
        type: _0x5235d2,
        tooltip: "EX 按鈕最頂層節點(整顆node)"
      });
      _0x1ec1a8 = _0x377056({
        type: _0x489450,
        tooltip: "EX 按鈕"
      });
      _0x136937 = _0x377056({
        type: _0x489450,
        tooltip: "按鈕ON"
      });
      _0x17bb8e = _0x377056({
        type: _0x489450,
        tooltip: "按鈕OFF"
      });
      _0x55ffbe = _0x377056({
        type: _0x489450,
        tooltip: "提示問號按鈕"
      });
      _0x37fda5 = _0x377056({
        type: _0x5235d2,
        tooltip: "提示文字tip面板"
      });
      _0x21adad = _0x377056({
        type: _0x31f3fc,
        tooltip: "功能說明文字串Label"
      });
      _0x54ae1b = _0x377056({
        type: _0x43f6e7,
        tooltip: "本體ExtraBet文字圖片"
      });
      _0x186a3d((_0x2c9496 = _0x43ccc2((_0x3f5467 = function (_0x19403f) {
        function _0x186aca() {
          for (var _0x134db2, _0x5068f9 = arguments.length, _0x2c7ea4 = new Array(_0x5068f9), _0x13cfdf = 0; _0x13cfdf < _0x5068f9; _0x13cfdf++) {
            _0x2c7ea4[_0x13cfdf] = arguments[_0x13cfdf];
          }
          _0x134db2 = _0x19403f.call.apply(_0x19403f, [this].concat(_0x2c7ea4)) || this;
          _0x4d45d3(_0x134db2, "m_multiExtraBetNode", _0x2c9496, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn", _0x480ac5, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn_on", _0x3fff61, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn_off", _0x2ead45, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn_TipQuesMark", _0x4d0bb8, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn_Tip", _0x38c2bb, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_multiBtn_Description", _0x54bc49, _0xd5b437(_0x134db2));
          _0x4d45d3(_0x134db2, "m_Txt_Extra_Bet", _0x1770d6, _0xd5b437(_0x134db2));
          _0x134db2.m_isExtendShowBar = false;
          _0x134db2.m_ExtraBetAniPlaying = null;
          _0x134db2.m_isExtra = false;
          _0x134db2.m_isForceExtraOnEnd = false;
          _0x134db2.m_isTwoStep = false;
          _0x134db2.m_toStepTwo = false;
          _0x134db2.m_triggerCb = null;
          _0x134db2.m_canExtend = true;
          return _0x134db2;
        }
        _0x254dc4(_0x186aca, _0x19403f);
        var _0x3dbe71 = _0x186aca.prototype;
        _0x3dbe71.Init = function (_0x1f5214, _0x678bed, _0x20b0bb, _0x4b21fc, _0x3e7553) {
          var _0x56f013 = this;
          if (undefined === _0x4b21fc && (_0x4b21fc = false), undefined === _0x3e7553 && (_0x3e7553 = false), _0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x31f132.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x56f013.node.active = false;
            });
          }
          this.m_triggerCb = _0x1f5214;
          this.m_isTwoStep = _0x4b21fc;
          this.m_multiBtn_Description && this.m_Txt_Extra_Bet && (_0x1d59f4(" localeStringManager.CurrLang : " + _0x1ad159.CurrLang), this.m_multiBtn_Description.string = _0x1ad159.GetString(_0x678bed), this.m_Txt_Extra_Bet.spriteFrame = _0x1ad159.GetGameAtlas().getSpriteFrame(_0x20b0bb));
          _0x26c2fd.Init(_0x3e7553 ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x3dbe71.onLoad = function () {
          var _0x3ce00f = this;
          if (!_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
            _0x1d59f4("ExtraBet onLoad");
            this.m_multiBtn && this.m_multiBtn.node.on(_0x5235d2.EventType.TOUCH_END, function () {
              _0x3ce00f.m_ExtraBetAniPlaying || (_0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), _0x3ce00f.CheckCanUseBtn() ? _0x3ce00f.ExtendShowBar(!_0x3ce00f.m_isExtendShowBar) : _0x2d1f62.ShowMessageBox(_0x56873b.StringKey.FREEWINCASH_PLAYING1));
            });
            for (var _0x57a851 = 0; _0x57a851 < this.m_multiBtn_on.length; _0x57a851++) {
              this.m_multiBtn_on[_0x57a851].node.on(_0x5235d2.EventType.TOUCH_END, function () {
                _0x3ce00f.m_ExtraBetAniPlaying || (_0x3ce00f.CheckCanUseBtn() ? _0x3ce00f.ChangeBetMode() : _0x2d1f62.ShowMessageBox(_0x56873b.StringKey.FREEWINCASH_PLAYING1));
              });
              this.m_multiBtn_off[_0x57a851] && this.m_multiBtn_off[_0x57a851].node.on(_0x5235d2.EventType.TOUCH_END, function () {
                _0x3ce00f.m_ExtraBetAniPlaying || (_0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), _0x3ce00f.CheckCanUseBtn() && _0x3ce00f.ChangeBetMode());
              });
            }
            this.m_multiBtn_TipQuesMark && this.m_multiBtn_TipQuesMark.node.on(_0x5235d2.EventType.TOUCH_END, _0x4c80ef(_0x4f7e83().mark(function _0x1ca9cd() {
              return _0x4f7e83().wrap(function (_0x41dcf6) {
                for (;;) {
                  switch (_0x41dcf6.prev = _0x41dcf6.next) {
                    case 0:
                      if (_0x3ce00f.m_ExtraBetAniPlaying) {
                        _0x41dcf6.next = 13;
                        break;
                      }
                      if (_0x287710.Play(_0x56873b.AudioClips.COMMON_BTN), _0x148367.Current() != _0x48a959.IDLE || _0x3c76f4.IsBuyBonus) {
                        _0x41dcf6.next = 12;
                        break;
                      }
                      if (!_0x3ce00f.m_isExtendShowBar) {
                        _0x41dcf6.next = 7;
                        break;
                      }
                      _0x3ce00f.m_multiBtn_Tip.active = !_0x3ce00f.m_multiBtn_Tip.active;
                      _0x41dcf6.next = 10;
                      break;
                    case 7:
                      _0x41dcf6.next = 9;
                      return _0x3ce00f.ExtendShowBar(true);
                    case 9:
                      !_0x3ce00f.m_multiBtn_Tip.active && _0x3ce00f.m_isExtendShowBar && (_0x3ce00f.m_multiBtn_Tip.active = true);
                    case 10:
                      _0x41dcf6.next = 13;
                      break;
                    case 12:
                      _0x2d1f62.ShowMessageBox(_0x56873b.StringKey.FREEWINCASH_PLAYING1);
                    case 13:
                    case "end":
                      return _0x41dcf6.stop();
                  }
                }
              }, _0x1ca9cd);
            })));
            this.ExtendShowBar(false);
          }
        };
        _0x3dbe71.start = function () {
          _0x1d59f4("ExtraBet start");
        };
        _0x3dbe71.CheckCanUseBtn = function () {
          return _0x56873b.IsInMG() && _0x148367.Current() == _0x48a959.IDLE && !_0x56873b.IsUsingItem && !_0x3c76f4.IsBuyBonus && !_0x547262.IsFeaturesDemoMode && !_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet);
        };
        _0x3dbe71.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x3dbe71.ShowExtra = function (_0x2d7ecc) {
          this.m_multiExtraBetNode && !_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet) && (this.m_multiExtraBetNode.active = _0x2d7ecc);
        };
        _0x3dbe71.GoToFeatures = function () {};
        _0x3dbe71.ExtendShowBar = function () {
          var _0x8d287e = _0x4c80ef(_0x4f7e83().mark(function _0x605c5(_0x5f4825) {
            var _0x46a278;
            return _0x4f7e83().wrap(function (_0x31c87c) {
              for (;;) {
                switch (_0x31c87c.prev = _0x31c87c.next) {
                  case 0:
                    if (this.m_canExtend && !_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
                      _0x31c87c.next = 2;
                      break;
                    }
                    return _0x31c87c.abrupt("return");
                  case 2:
                    if (!_0x123d1b || this.m_ExtraBetAniPlaying) {
                      _0x31c87c.next = 31;
                      break;
                    }
                    if (!_0x5f4825) {
                      _0x31c87c.next = 20;
                      break;
                    }
                    if (_0x123d1b.IsAutoSpin || _0x56873b.IsUsingItem || _0x3c76f4.IsBuyBonus) {
                      _0x31c87c.next = 17;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x31c87c.next = 15;
                      break;
                    }
                    if (this.m_isExtendShowBar = true, _0x123d1b.SetSpinState(_0x43d93d.CLICK_SPIN), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x31c87c.next = 12;
                      break;
                    }
                    _0x31c87c.next = 12;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_Show");
                  case 12:
                    this.m_ExtraBetAniPlaying = false;
                    _0x123d1b.SetSpinState(_0x43d93d.IDLE);
                    this.m_isExtra && this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Active");
                  case 15:
                    _0x31c87c.next = 18;
                    break;
                  case 17:
                    _0x2d1f62.ShowMessageBox(_0x56873b.StringKey.FREEWINCASH_PLAYING1);
                  case 18:
                    _0x31c87c.next = 31;
                    break;
                  case 20:
                    if (!this.m_isExtendShowBar) {
                      _0x31c87c.next = 31;
                      break;
                    }
                    if (_0x123d1b.IsAutoSpin || _0x123d1b.SetSpinState(_0x43d93d.CLICK_SPIN), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x31c87c.next = 27;
                      break;
                    }
                    _0x31c87c.next = 27;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_Close");
                  case 27:
                    this.m_ExtraBetAniPlaying = false;
                    _0x123d1b.IsAutoSpin || _0x123d1b.SetSpinState(_0x43d93d.IDLE);
                    this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Active") : (this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_OFF"), (_0x46a278 = this.m_multiExtraBetNode.getComponent(_0x45f591).getState("ExtraBet_OFF")).setTime(_0x46a278.duration)));
                    this.m_isExtendShowBar = false;
                  case 31:
                  case "end":
                    return _0x31c87c.stop();
                }
              }
            }, _0x605c5, this);
          }));
          return function (_0x484c2b) {
            return _0x8d287e.apply(this, arguments);
          };
        }();
        _0x3dbe71.ChangeBetMode = function () {
          var _0x3b23a5 = _0x4c80ef(_0x4f7e83().mark(function _0x523ede() {
            var _0x449fa9;
            return _0x4f7e83().wrap(function (_0x5d412f) {
              for (;;) {
                switch (_0x5d412f.prev = _0x5d412f.next) {
                  case 0:
                    if (!_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
                      _0x5d412f.next = 2;
                      break;
                    }
                    return _0x5d412f.abrupt("return");
                  case 2:
                    if (_0x1d59f4("ChangeBetMode stateManager.Current() : ", _0x148367.Current()), !_0x123d1b || _0x3c76f4.IsBuyBonus || _0x148367.Current() !== _0x48a959.IDLE && !this.m_isExtra) {
                      _0x5d412f.next = 36;
                      break;
                    }
                    if (this.m_isExtra = !this.m_isExtra, _0x449fa9 = [], !this.m_isExtra) {
                      _0x5d412f.next = 24;
                      break;
                    }
                    this.m_isTwoStep ? this.m_toStepTwo = true : _0x123d1b.ChangeMultiBet(_0x5d816a);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x123d1b || _0x123d1b.SetSpinState(_0x43d93d.CLICK_SPIN);
                    null == _0x547262 || _0x547262.SetBuyBonusState(false);
                    this.m_multiExtraBetNode && _0x449fa9.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_ON"));
                    _0x449fa9.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x5d412f.next = 16;
                    return Promise.all(_0x449fa9);
                  case 16:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x123d1b || _0x123d1b.SetSpinState(_0x43d93d.IDLE);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Active");
                    _0x5d412f.next = 21;
                    return _0x56873b.Wait(this, 0.2);
                  case 21:
                    null == _0x547262 || _0x547262.SetBuyBonusState(true);
                    _0x5d412f.next = 34;
                    break;
                  case 24:
                    _0x123d1b.ChangeMultiBet(_0xdb783c);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x123d1b || _0x123d1b.SetSpinState(_0x43d93d.CLICK_SPIN);
                    this.m_multiExtraBetNode && _0x449fa9.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_OFF"));
                    _0x449fa9.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x5d412f.next = 32;
                    return Promise.all(_0x449fa9);
                  case 32:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x123d1b || _0x123d1b.SetSpinState(_0x43d93d.IDLE);
                  case 34:
                    _0x5d412f.next = 37;
                    break;
                  case 36:
                    _0x148367.Current() !== _0x48a959.IDLE && (_0x1d59f4("TRIAL_REFUSED_REASON 1 "), _0x2d1f62.ShowMessageBox(_0x56873b.StringKey.FREEWINCASH_PLAYING1));
                  case 37:
                  case "end":
                    return _0x5d412f.stop();
                }
              }
            }, _0x523ede, this);
          }));
          return function () {
            return _0x3b23a5.apply(this, arguments);
          };
        }();
        _0x3dbe71.SetTwoStepMulti = function () {
          var _0x53735c = _0x4c80ef(_0x4f7e83().mark(function _0x4ee472(_0x1d9d44, _0xf2e7b5) {
            return _0x4f7e83().wrap(function (_0x1ac211) {
              for (;;) {
                switch (_0x1ac211.prev = _0x1ac211.next) {
                  case 0:
                    if (!_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
                      _0x1ac211.next = 2;
                      break;
                    }
                    return _0x1ac211.abrupt("return");
                  case 2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0x1ac211.next = 15;
                      break;
                    }
                    if (!_0x1d9d44) {
                      _0x1ac211.next = 7;
                      break;
                    }
                    _0x123d1b.ChangeMultiBet(_0xf2e7b5);
                    _0x1ac211.next = 15;
                    break;
                  case 7:
                    if (this.m_isExtra = false, 1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true), this.m_ExtraBetAniPlaying = true, _0x123d1b && _0x123d1b.SetSpinState(_0x43d93d.CLICK_SPIN), !this.m_multiExtraBetNode) {
                      _0x1ac211.next = 14;
                      break;
                    }
                    _0x1ac211.next = 14;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_OFF");
                  case 14:
                    this.m_ExtraBetAniPlaying = false;
                  case 15:
                  case "end":
                    return _0x1ac211.stop();
                }
              }
            }, _0x4ee472, this);
          }));
          return function (_0x25a7a, _0x43d056) {
            return _0x53735c.apply(this, arguments);
          };
        }();
        _0x3dbe71.ForceSetExtraBet = function () {
          var _0x3cc70b = _0x4c80ef(_0x4f7e83().mark(function _0x32f05e(_0x4df08b, _0x4f2d3f) {
            var _0x53e4d4;
            return _0x4f7e83().wrap(function (_0x4c7c3c) {
              for (;;) {
                switch (_0x4c7c3c.prev = _0x4c7c3c.next) {
                  case 0:
                    if (undefined === _0x4f2d3f && (_0x4f2d3f = _0x5d816a), !_0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet)) {
                      _0x4c7c3c.next = 3;
                      break;
                    }
                    return _0x4c7c3c.abrupt("return");
                  case 3:
                    if (!_0x4df08b) {
                      _0x4c7c3c.next = 14;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Active");
                    this.m_isTwoStep ? (this.m_toStepTwo = true, this.SetTwoStepMulti(_0x4df08b, _0x4f2d3f)) : _0x123d1b.ChangeMultiBet(_0x4f2d3f);
                    _0x4c7c3c.next = 11;
                    return this.m_triggerCb(_0x4df08b, true);
                  case 11:
                    this.m_isForceExtraOnEnd = true;
                    _0x4c7c3c.next = 23;
                    break;
                  case 14:
                    if (!this.m_isExtra) {
                      _0x4c7c3c.next = 23;
                      break;
                    }
                    _0x53e4d4 = [];
                    this.m_isExtra = false;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    _0x123d1b.ChangeMultiBet(_0xdb783c);
                    this.m_multiExtraBetNode && (this.m_isExtendShowBar ? _0x53e4d4.push(this.ExtendShowBar(false)) : _0x53e4d4.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x45f591), "ExtraBet_OFF")));
                    _0x53e4d4.push(this.m_triggerCb(_0x4df08b, true));
                    _0x4c7c3c.next = 23;
                    return Promise.all(_0x53e4d4);
                  case 23:
                  case "end":
                    return _0x4c7c3c.stop();
                }
              }
            }, _0x32f05e, this);
          }));
          return function (_0x39bad7, _0x353f5b) {
            return _0x3cc70b.apply(this, arguments);
          };
        }();
        _0x3dbe71.OnRotation = function () {
          _0x6eb4bb.CheckSwitchOff(_0xea8e18.CloseExtraBet) || (this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Active") : this.m_multiExtraBetNode.getComponent(_0x45f591).play("ExtraBet_Stop")), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false));
        };
        _0x3dbe71.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x3dbe71.FirstShowBar = function () {};
        _0x3dbe71.PlayAnimation = function (_0xb0498a, _0x4c84f9, _0x1f4a90) {
          undefined === _0x1f4a90 && (_0x1f4a90 = false);
          return new Promise(function (_0x5b4d23) {
            if (_0xb0498a.play(_0x4c84f9), _0x1f4a90) {
              var _0x1f732b = _0xb0498a.getState(_0x4c84f9);
              _0x1f732b && (_0x1f732b.wrapMode = _0x48a7a3.WrapMode.Loop);
            }
            _0xb0498a.once(_0x45f591.EventType.FINISHED, function () {
              _0x5b4d23(true);
            });
          });
        };
        _0x221aac(_0x186aca, [{
          key: "ExtraBetAniPlaying",
          set: function (_0x419d39) {
            this.m_ExtraBetAniPlaying = _0x419d39;
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
          set: function (_0x3a311a) {
            this.m_canExtend = _0x3a311a;
          }
        }]);
        return _0x186aca;
      }(_0x46f5c0)).prototype, "m_multiExtraBetNode", [_0x2abaec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x480ac5 = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn", [_0x1ec1a8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3fff61 = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn_on", [_0x136937], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x2ead45 = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn_off", [_0x17bb8e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x4d0bb8 = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn_TipQuesMark", [_0x55ffbe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x38c2bb = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn_Tip", [_0x37fda5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x54bc49 = _0x43ccc2(_0x3f5467.prototype, "m_multiBtn_Description", [_0x21adad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1770d6 = _0x43ccc2(_0x3f5467.prototype, "m_Txt_Extra_Bet", [_0x54ae1b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x11a2bf = _0x3f5467));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      var _0xc5d983;
      var _0x40d55f;
      var _0x2c6a3e;
      var _0x22232e = _0x4de0bd.ccclass;
      var _0xc429f7 = _0x4de0bd.property;
      _0x356b0c = _0xc429f7({
        type: _0x43f6e7,
        tooltip: "說明文字"
      });
      _0x25a07d = _0xc429f7({
        type: _0x15baa6,
        tooltip: "圖片名稱"
      });
      _0xd2c1b8 = _0xc429f7({
        type: Boolean,
        tooltip: "圖片名稱"
      });
      _0xdf3550 = _0xc429f7({
        type: _0x43f6e7,
        tooltip: "圖片名稱"
      });
      _0x22232e((_0x2e12e6 = _0x43ccc2((_0x2e1659 = function (_0x1d2b1d) {
        function _0x1d633e() {
          for (var _0x325e5c, _0x17fe39 = arguments.length, _0x18a018 = new Array(_0x17fe39), _0x4202db = 0; _0x4202db < _0x17fe39; _0x4202db++) {
            _0x18a018[_0x4202db] = arguments[_0x4202db];
          }
          _0x325e5c = _0x1d2b1d.call.apply(_0x1d2b1d, [this].concat(_0x18a018)) || this;
          _0x4d45d3(_0x325e5c, "m_hintSprite", _0x2e12e6, _0xd5b437(_0x325e5c));
          _0x4d45d3(_0x325e5c, "m_imgName", _0x1b2b19, _0xd5b437(_0x325e5c));
          _0x4d45d3(_0x325e5c, "m_isAD", _0x440fd1, _0xd5b437(_0x325e5c));
          _0x4d45d3(_0x325e5c, "m_ADsprite", _0x14ce69, _0xd5b437(_0x325e5c));
          return _0x325e5c;
        }
        _0x254dc4(_0x1d633e, _0x1d2b1d);
        var _0x5d744f = _0x1d633e.prototype;
        _0x5d744f.start = function () {
          var _0x54a1b8 = this;
          if (!this.m_isAD) {
            var _0x13bcbd = _0x1ad159.GetGameAtlas();
            _0x13bcbd ? this.m_hintSprite.spriteFrame = _0x13bcbd.getSpriteFrame(this.m_imgName) : _0x1ad159.RegisterOnGameAltasLoadedCb(function () {
              _0x54a1b8.m_hintSprite.spriteFrame = _0x1ad159.GetGameAtlas().getSpriteFrame(_0x54a1b8.m_imgName);
            });
          }
        };
        _0x5d744f.SetADSprites = function (_0x13cf01) {
          this.m_ADsprite && (this.m_ADsprite.spriteFrame = _0x13cf01);
        };
        return _0x1d633e;
      }(_0x46f5c0)).prototype, "m_hintSprite", [_0x356b0c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1b2b19 = _0x43ccc2(_0x2e1659.prototype, "m_imgName", [_0x25a07d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x440fd1 = _0x43ccc2(_0x2e1659.prototype, "m_isAD", [_0xd2c1b8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x14ce69 = _0x43ccc2(_0x2e1659.prototype, "m_ADsprite", [_0xdf3550], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x9d48ac = _0x2e1659));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      var _0x2a8b75;
      var _0x5a7377;
      var _0x3a2adb;
      var _0x5338a3;
      var _0x3c5c72;
      var _0x7f7a28;
      var _0xc2c9f6;
      var _0x5068c6;
      var _0x568d00;
      var _0x26f230;
      var _0x348d4c;
      var _0x3347c5;
      var _0x47f36b;
      var _0x1368c2 = _0x4de0bd.ccclass;
      var _0x36015c = _0x4de0bd.property;
      var _0x58088d = _0x4de0bd.executeInEditMode;
      var _0x59604f = _0x4de0bd.requireComponent;
      _0x1368c2("LabelSpacingX")(_0xc5d983 = _0x59604f(_0x31f3fc)(_0xc5d983 = _0x58088d((_0x2c6a3e = _0x43ccc2((_0x40d55f = function (_0x1acca0) {
        function _0x33d246() {
          for (var _0x2fcfc4, _0x441f41 = arguments.length, _0xda0db7 = new Array(_0x441f41), _0x152cb6 = 0; _0x152cb6 < _0x441f41; _0x152cb6++) {
            _0xda0db7[_0x152cb6] = arguments[_0x152cb6];
          }
          _0x2fcfc4 = _0x1acca0.call.apply(_0x1acca0, [this].concat(_0xda0db7)) || this;
          _0x4d45d3(_0x2fcfc4, "_spacingX", _0x2c6a3e, _0xd5b437(_0x2fcfc4));
          return _0x2fcfc4;
        }
        _0x254dc4(_0x33d246, _0x1acca0);
        var _0x2ed4e1 = _0x33d246.prototype;
        _0x2ed4e1.onEnable = function () {
          this.resetSpacingX();
        };
        _0x2ed4e1.resetSpacingX = function () {
          var _0x41a121 = this.node.getComponent(_0x31f3fc);
          _0x41a121 && _0x41a121.cacheMode === _0x31f3fc.CacheMode.CHAR && (_0x41a121.spacingX = this._spacingX);
        };
        _0x221aac(_0x33d246, [{
          key: "spacingX",
          get: function () {
            return this._spacingX;
          },
          set: function (_0x43bdb9) {
            this._spacingX = _0x43bdb9;
            this.resetSpacingX();
          }
        }]);
        return _0x33d246;
      }(_0x46f5c0)).prototype, "_spacingX", [_0x36015c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x43ccc2(_0x40d55f.prototype, "spacingX", [_0x36015c], Object.getOwnPropertyDescriptor(_0x40d55f.prototype, "spacingX"), _0x40d55f.prototype), _0xc5d983 = _0x40d55f)) || _0xc5d983) || _0xc5d983);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0xb4d0d2;
      var _0x13d893 = _0x4de0bd.ccclass;
      var _0x4c0a71 = _0x4de0bd.executeInEditMode;
      var _0x257e92 = _0x4de0bd.property;
      var _0x3e372a = "db://assets/game/Text/en/";
      var _0x4d0bbd = "db://assets/otherAsttText/AsttText/en/";
      !function (_0x401c97) {
        _0x401c97[_0x401c97.PNG = 0] = "PNG";
        _0x401c97[_0x401c97.JPG = 1] = "JPG";
      }(_0xb4d0d2 || (_0xb4d0d2 = {}));
      var _0x4bdf52;
      var _0x290add;
      var _0x1db46d;
      var _0x2eac27;
      var _0x5157d0;
      var _0x3381d4 = {
        PNG: ".png",
        JPG: ".jpg"
      };
      _0x2a8b75 = _0x13d893("LangImg");
      _0x5a7377 = _0x257e92({
        type: _0x15baa6,
        tooltip: "圖片路徑"
      });
      _0x3a2adb = _0x257e92({
        type: _0x15baa6,
        tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑"
      });
      _0x5338a3 = _0x257e92({
        type: _0x474ab1(_0xb4d0d2),
        tooltip: "圖片類型"
      });
      _0x3c5c72 = _0x257e92({
        type: _0x32f256,
        tooltip: "是否為通用圖片"
      });
      _0x7f7a28 = _0x257e92({
        type: _0x32f256,
        tooltip: "是否由這個組件來設定多語系圖片"
      });
      _0x2a8b75(_0xc2c9f6 = _0x4c0a71((_0x568d00 = _0x43ccc2((_0x5068c6 = function (_0x549ff7) {
        function _0x2025f2() {
          for (var _0xe22ebb, _0x5d8017 = arguments.length, _0x4b0af4 = new Array(_0x5d8017), _0x3693f7 = 0; _0x3693f7 < _0x5d8017; _0x3693f7++) {
            _0x4b0af4[_0x3693f7] = arguments[_0x3693f7];
          }
          _0xe22ebb = _0x549ff7.call.apply(_0x549ff7, [this].concat(_0x4b0af4)) || this;
          _0x4d45d3(_0xe22ebb, "m_path", _0x568d00, _0xd5b437(_0xe22ebb));
          _0x4d45d3(_0xe22ebb, "m_extraPath", _0x26f230, _0xd5b437(_0xe22ebb));
          _0x4d45d3(_0xe22ebb, "m_imgTypeNo", _0x348d4c, _0xd5b437(_0xe22ebb));
          _0x4d45d3(_0xe22ebb, "m_isCommon", _0x3347c5, _0xd5b437(_0xe22ebb));
          _0x4d45d3(_0xe22ebb, "m_isUsingSetImage", _0x47f36b, _0xd5b437(_0xe22ebb));
          return _0xe22ebb;
        }
        _0x254dc4(_0x2025f2, _0x549ff7);
        var _0x3f71a0 = _0x2025f2.prototype;
        _0x3f71a0.start = function () {
          this.SetImg();
        };
        _0x3f71a0.SetImg = function () {
          var _0x585cf3 = this;
          if (this.m_isUsingSetImage) {
            var _0x3785ec = null;
            if (this.m_isCommon) {
              if (!(_0x3785ec = _0x1ad159.GetCommonAtlas())) {
                return void _0x1ad159.RegisterOnCommonAltasLoadedCb(function () {
                  _0x585cf3.SetImg();
                });
              }
            } else {
              if (!(_0x3785ec = _0x1ad159.GetGameAtlas())) {
                return void _0x1ad159.RegisterOnGameAltasLoadedCb(function () {
                  _0x585cf3.SetImg();
                });
              }
            }
            var _0x154475 = this.node.getComponent(_0x43f6e7);
            _0x154475 || (_0x154475 = this.node.addComponent(_0x43f6e7));
            _0x154475.spriteFrame = _0x3785ec.getSpriteFrame(this.m_path);
          }
        };
        _0x3f71a0.SetPreviewImg = function () {
          this.AdjustComponentOrdering();
          this.ReadSpriteFrame();
          _0x2025f2.prototype._onBeforeSerialize = function () {
            this.OnBeforeSerialize();
            return false;
          };
        };
        _0x3f71a0.AdjustComponentOrdering = function () {};
        _0x3f71a0.ReadSpriteFrame = function () {
          var _0x56ae7a = _0x4c80ef(_0x4f7e83().mark(function _0x3fe0b6() {
            var _0x2334c0;
            var _0x280a85;
            var _0x1875b0;
            var _0x169894;
            var _0x4ffa25;
            var _0x446aca;
            var _0x2801e2 = this;
            return _0x4f7e83().wrap(function (_0xd56826) {
              for (;;) {
                switch (_0xd56826.prev = _0xd56826.next) {
                  case 0:
                    if (this.m_path) {
                      _0xd56826.next = 2;
                      break;
                    }
                    return _0xd56826.abrupt("return");
                  case 2:
                    _0x2334c0 = (this.m_isCommon ? _0x4d0bbd : _0x3e372a) + this.m_extraPath + this.m_path;
                    _0x280a85 = ".png";
                    _0x1875b0 = _0xb4d0d2[this.m_imgTypeNo];
                    Object.prototype.hasOwnProperty.call(_0xb4d0d2, _0x1875b0) && (_0x169894 = _0xb4d0d2[_0x1875b0], Number(_0x169894) === this.m_imgTypeNo && (_0x280a85 = _0x3381d4[_0x1875b0]));
                    _0xd56826.next = 8;
                    return Editor.Message.request("asset-db", "query-assets", {
                      importer: "sprite-frame",
                      pattern: _0x2334c0 + _0x280a85
                    });
                  case 8:
                    _0x4ffa25 = _0xd56826.sent;
                    _0x446aca = {
                      uuid: _0x4ffa25[0].uuid
                    };
                    _0x268e87.loadAny(_0x446aca, function (_0x20de8c, _0x5f0ff2) {
                      if (_0x20de8c) {
                        _0x86c17b("Failed to load cc.SpriteFrame resources:", _0x20de8c);
                      } else {
                        var _0x476f97 = _0x2801e2.node.getComponent(_0x43f6e7);
                        _0x476f97 || (_0x476f97 = _0x2801e2.node.addComponent(_0x43f6e7));
                        _0x476f97.spriteFrame = _0x5f0ff2;
                      }
                    });
                  case 11:
                  case "end":
                    return _0xd56826.stop();
                }
              }
            }, _0x3fe0b6, this);
          }));
          return function () {
            return _0x56ae7a.apply(this, arguments);
          };
        }();
        _0x3f71a0.OnBeforeSerialize = function () {};
        return _0x2025f2;
      }(_0x46f5c0)).prototype, "m_path", [_0x5a7377], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x26f230 = _0x43ccc2(_0x5068c6.prototype, "m_extraPath", [_0x3a2adb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x348d4c = _0x43ccc2(_0x5068c6.prototype, "m_imgTypeNo", [_0x5338a3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xb4d0d2.PNG;
        }
      }), _0x3347c5 = _0x43ccc2(_0x5068c6.prototype, "m_isCommon", [_0x3c5c72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x47f36b = _0x43ccc2(_0x5068c6.prototype, "m_isUsingSetImage", [_0x7f7a28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0xc2c9f6 = _0x5068c6)) || _0xc2c9f6);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      var _0xd949bd;
      var _0x1ad2c4;
      var _0xfefadc;
      var _0x26bcbe;
      var _0x178fb9;
      var _0x5601fe = 0;
      var _0x292638 = 1;
      var _0x101914 = 2;
      var _0x10b4ab = _0x4de0bd.ccclass;
      var _0x1633d4 = _0x4de0bd.property;
      _0x4bdf52 = _0x10b4ab("RenderDataBump");
      _0x290add = _0x1633d4({
        tooltip: "是否一同影響子節點"
      });
      _0x4bdf52((_0x5157d0 = _0x43ccc2((_0x2eac27 = function (_0x3753f3) {
        function _0x5428c4() {
          for (var _0x10ff0e, _0x343ca2 = arguments.length, _0x39e0d8 = new Array(_0x343ca2), _0x349735 = 0; _0x349735 < _0x343ca2; _0x349735++) {
            _0x39e0d8[_0x349735] = arguments[_0x349735];
          }
          _0x10ff0e = _0x3753f3.call.apply(_0x3753f3, [this].concat(_0x39e0d8)) || this;
          _0x4d45d3(_0x10ff0e, "affectsChildren", _0x5157d0, _0xd5b437(_0x10ff0e));
          _0x10ff0e.states = _0x5601fe;
          return _0x10ff0e;
        }
        _0x254dc4(_0x5428c4, _0x3753f3);
        var _0x37d4e1 = _0x5428c4.prototype;
        _0x37d4e1.onLoad = function () {
          this.node.on(_0x5235d2.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x37d4e1.onDestroy = function () {
          this.node.off(_0x5235d2.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x37d4e1.checkStates = function () {
          this.node.parent ? this.states === _0x292638 && this.requestRenderData() : this.states !== _0x101914 && this.states !== _0x5601fe || this.destroyRenderData();
        };
        _0x37d4e1.destroyRenderData = function () {
          var _0x56dcd0 = this.node.getComponent(_0x4e4844);
          if (null == _0x56dcd0 || _0x56dcd0.destroyRenderData(), this.affectsChildren) {
            for (var _0x3a63b1, _0x35112c = this.node.getComponentsInChildren(_0x4e4844), _0x2849ab = _0x76adb7(_0x35112c); !(_0x3a63b1 = _0x2849ab()).done;) {
              var _0x5c0ec1 = _0x3a63b1.value;
              null == _0x5c0ec1 || _0x5c0ec1.destroyRenderData();
            }
          }
          this.states = _0x292638;
        };
        _0x37d4e1.requestRenderData = function () {
          var _0x5ab8ba = this.node.getComponent(_0x4e4844);
          if (null == _0x5ab8ba || _0x5ab8ba._flushAssembler(), this.affectsChildren) {
            for (var _0x219867, _0xc72bcb = this.node.getComponentsInChildren(_0x4e4844), _0x1d4adc = _0x76adb7(_0xc72bcb); !(_0x219867 = _0x1d4adc()).done;) {
              var _0xb99d2 = _0x219867.value;
              null == _0xb99d2 || _0xb99d2._flushAssembler();
            }
          }
          this.states = _0x101914;
        };
        return _0x5428c4;
      }(_0x46f5c0)).prototype, "affectsChildren", [_0x290add], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1db46d = _0x2eac27));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      var _0x53079e;
      var _0x1c6977;
      var _0x644734;
      var _0x3f3ae4;
      var _0x5d9fe7 = _0x4de0bd.ccclass;
      var _0x3d4198 = _0x4de0bd.property;
      _0xd949bd = _0x5d9fe7("ScrollEventHandler");
      _0x1ad2c4 = _0x3d4198({
        type: _0x5235d2,
        tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去"
      });
      _0xd949bd((_0x178fb9 = _0x43ccc2((_0x26bcbe = function (_0x4a9c98) {
        function _0x52e0f9() {
          for (var _0x1942c6, _0x1056b1 = arguments.length, _0x4edeba = new Array(_0x1056b1), _0x56797e = 0; _0x56797e < _0x1056b1; _0x56797e++) {
            _0x4edeba[_0x56797e] = arguments[_0x56797e];
          }
          _0x1942c6 = _0x4a9c98.call.apply(_0x4a9c98, [this].concat(_0x4edeba)) || this;
          _0x4d45d3(_0x1942c6, "m_contents", _0x178fb9, _0xd5b437(_0x1942c6));
          _0x1942c6.m_scrollView = null;
          _0x1942c6.m_redundantSpace_Y = 0;
          return _0x1942c6;
        }
        _0x254dc4(_0x52e0f9, _0x4a9c98);
        var _0x1f1097 = _0x52e0f9.prototype;
        _0x1f1097.start = function () {
          var _0x59f390 = this;
          this.m_scrollView = this.node.getComponent(_0x383093);
          this.m_scrollView ? this.m_scrollView.node.on(_0x383093.EventType.SCROLLING, function () {
            _0x59f390.CheckCellVisible();
          }) : _0x86c17b("ScrollView is null");
          0 === this.m_contents.length && this.m_contents.push(this.m_scrollView.content);
        };
        _0x1f1097.CheckCellVisible = function () {
          if (this.m_scrollView && this.m_scrollView.view) {
            for (var _0x297633 = 0; _0x297633 < this.m_contents.length; _0x297633++) {
              for (var _0xbd22db = this.m_contents[_0x297633].children, _0x51d195 = this.GetTopLeftWorld(this.m_scrollView.view.node), _0xa7855b = this.GetBottomRightWorld(this.m_scrollView.view.node), _0x15253a = 0; _0x15253a < _0xbd22db.length; _0x15253a++) {
                var _0x58112d = _0xbd22db[_0x15253a];
                var _0x1e2643 = _0x58112d.getComponent(_0x4e51c6);
                _0x1e2643 || (_0x1e2643 = _0x58112d.addComponent(_0x4e51c6));
                var _0x1dd859 = this.GetTopLeftWorld(_0x58112d);
                var _0xbb9176 = this.GetBottomRightWorld(_0x58112d);
                this.IsInside(_0x1dd859, _0x51d195, _0xa7855b) || this.IsInside(_0xbb9176, _0x51d195, _0xa7855b) ? _0x1e2643.opacity = 255 : _0x1e2643.opacity = 0;
              }
            }
          }
        };
        _0x1f1097.GetTopLeftWorld = function (_0x366520) {
          var _0x116d37 = _0x366520.getPosition();
          var _0x42d73e = _0x366520.getComponent(_0x3eb7ef).contentSize;
          var _0x4bd618 = _0x366520.getComponent(_0x3eb7ef).anchorPoint;
          var _0x7c940e = new _0x2d3723(_0x116d37.x - _0x42d73e.width * _0x4bd618.x, _0x116d37.y - _0x42d73e.height * _0x4bd618.y, _0x116d37.z);
          return _0x366520.parent.getComponent(_0x3eb7ef).convertToWorldSpaceAR(_0x7c940e);
        };
        _0x1f1097.GetBottomRightWorld = function (_0x5f572d) {
          var _0xb309b6 = _0x5f572d.getPosition();
          var _0x53b382 = _0x5f572d.getComponent(_0x3eb7ef).contentSize;
          var _0x509d67 = _0x5f572d.getComponent(_0x3eb7ef).anchorPoint;
          var _0x47c3a8 = new _0x2d3723(_0xb309b6.x + _0x53b382.width * (1 - _0x509d67.x), _0xb309b6.y + _0x53b382.height * (1 - _0x509d67.y), _0xb309b6.z);
          return _0x5f572d.parent.getComponent(_0x3eb7ef).convertToWorldSpaceAR(_0x47c3a8);
        };
        _0x1f1097.IsInside = function (_0x53987f, _0x5d28bc, _0x51ebd4) {
          return _0x53987f.x >= _0x5d28bc.x && _0x53987f.y >= _0x5d28bc.y - this.m_redundantSpace_Y && _0x53987f.x <= _0x51ebd4.x && _0x53987f.y <= _0x51ebd4.y + this.m_redundantSpace_Y;
        };
        _0x221aac(_0x52e0f9, [{
          key: "RedundantSpace_Y",
          set: function (_0x4ccb7b) {
            this.m_redundantSpace_Y = _0x4ccb7b;
          }
        }]);
        return _0x52e0f9;
      }(_0x46f5c0)).prototype, "m_contents", [_0x1ad2c4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0xfefadc = _0x26bcbe));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      var _0x599a2b;
      var _0x36932e;
      var _0x3e2eb0;
      var _0x5ce489;
      var _0x22c462;
      var _0x5e8815;
      var _0x219e88;
      var _0x3d1703;
      var _0x3be042;
      var _0x5a19db;
      var _0x468543;
      var _0x4b4581;
      var _0x45dd2e;
      var _0x58a389;
      var _0x500d20;
      var _0x149116;
      var _0x4971ad;
      var _0x1db31c;
      var _0x34e916;
      var _0x36408a;
      var _0x1f9c2e;
      var _0x2bc700;
      var _0x2ee17c;
      var _0x3f95d6;
      var _0x3c87d9;
      var _0x54430d;
      var _0x1529a7;
      var _0x39abaf;
      var _0x47341a;
      var _0x2cc7f4;
      var _0x438c0f;
      var _0x41d509;
      var _0xfb4629;
      var _0x5338d4;
      var _0x216fab;
      var _0x3c1cac = "GameIntro_L";
      var _0x3af607 = "GameIntro_S";
      var _0x23a8f2 = "FG_Declare_Start_L";
      var _0x5af752 = "FG_Declare_Start_S";
      var _0x24a4da = "FG_Compliment_Start_L";
      var _0x2c2972 = "FG_Compliment_Start_S";
      var _0x223ddf = _0x4de0bd.ccclass;
      _0x53079e = (0, _0x4de0bd.property)({
        type: _0x38a6e5.Skeleton,
        tooltip: "spine"
      });
      _0x223ddf((_0x3f3ae4 = _0x43ccc2((_0x644734 = function (_0x37ce22) {
        function _0x2e7352() {
          for (var _0x56eabb, _0x501aac = arguments.length, _0xd1a49 = new Array(_0x501aac), _0x32bc43 = 0; _0x32bc43 < _0x501aac; _0x32bc43++) {
            _0xd1a49[_0x32bc43] = arguments[_0x32bc43];
          }
          _0x56eabb = _0x37ce22.call.apply(_0x37ce22, [this].concat(_0xd1a49)) || this;
          _0x4d45d3(_0x56eabb, "m_spine", _0x3f3ae4, _0xd5b437(_0x56eabb));
          return _0x56eabb;
        }
        _0x254dc4(_0x2e7352, _0x37ce22);
        var _0x2fa0ca = _0x2e7352.prototype;
        _0x2fa0ca.ShowGameIntro = function () {
          var _0x236a7b = _0x4c80ef(_0x4f7e83().mark(function _0x24db25(_0x2c6b20, _0x1ef10d) {
            var _0xd2e193;
            var _0xee3290;
            return _0x4f7e83().wrap(function (_0x5aed5d) {
              for (;;) {
                switch (_0x5aed5d.prev = _0x5aed5d.next) {
                  case 0:
                    _0xd2e193 = _0x2c6b20 ? _0x3c1cac : _0x3af607;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0xee3290 = function (_0xa0b2b0) {
                      "AnimationEvent" === _0xa0b2b0 && (null == _0x1ef10d || _0x1ef10d());
                    };
                    _0x5aed5d.next = 6;
                    return _0xf4e009.PlayAnimation(this.m_spine, _0xd2e193, false, 0, _0xee3290);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x5aed5d.stop();
                }
              }
            }, _0x24db25, this);
          }));
          return function (_0x408b28, _0x378aae) {
            return _0x236a7b.apply(this, arguments);
          };
        }();
        _0x2fa0ca.ShowFGDeclare = function () {
          var _0x2dd0be = _0x4c80ef(_0x4f7e83().mark(function _0x573091(_0x3b6caf, _0x3b1e90) {
            var _0x40effa;
            var _0x318353;
            return _0x4f7e83().wrap(function (_0xb3fb71) {
              for (;;) {
                switch (_0xb3fb71.prev = _0xb3fb71.next) {
                  case 0:
                    _0x40effa = _0x3b6caf ? _0x23a8f2 : _0x5af752;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x318353 = function (_0x20443f) {
                      "AnimationEvent" === _0x20443f && (null == _0x3b1e90 || _0x3b1e90());
                    };
                    _0xb3fb71.next = 6;
                    return _0xf4e009.PlayAnimation(this.m_spine, _0x40effa, false, 0, _0x318353);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0xb3fb71.stop();
                }
              }
            }, _0x573091, this);
          }));
          return function (_0x2491e8, _0x41f775) {
            return _0x2dd0be.apply(this, arguments);
          };
        }();
        _0x2fa0ca.ShowFGCompliment = function () {
          var _0x2dffe6 = _0x4c80ef(_0x4f7e83().mark(function _0x23af79(_0x38e1c8, _0x49a4b5) {
            var _0x101a12;
            var _0x5664e2;
            return _0x4f7e83().wrap(function (_0x4a6f7f) {
              for (;;) {
                switch (_0x4a6f7f.prev = _0x4a6f7f.next) {
                  case 0:
                    _0x101a12 = _0x38e1c8 ? _0x24a4da : _0x2c2972;
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x5664e2 = function (_0x2bfb24) {
                      "AnimationEvent" === _0x2bfb24 && (null == _0x49a4b5 || _0x49a4b5());
                    };
                    _0x4a6f7f.next = 6;
                    return _0xf4e009.PlayAnimation(this.m_spine, _0x101a12, false, 0, _0x5664e2);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x4a6f7f.stop();
                }
              }
            }, _0x23af79, this);
          }));
          return function (_0x574edc, _0x177fe6) {
            return _0x2dffe6.apply(this, arguments);
          };
        }();
        _0x2fa0ca.Prepare = function (_0x322513) {
          this.node.active = true;
          this.m_spine.paused = false;
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
          _0xf4e009.PlayAnimation(this.m_spine, _0x322513 ? _0x3c1cac : _0x3af607);
          this.m_spine.paused = true;
        };
        _0x2fa0ca.Rotation = function (_0x5d7a44) {
          if (this.node.active) {
            var _0x47dbcb = _0x5d7a44 ? _0x3c1cac : _0x3af607;
            this.m_spine.paused = false;
            this.m_spine.clearTracks();
            this.m_spine.setToSetupPose();
            _0xf4e009.PlayAnimation(this.m_spine, _0x47dbcb);
            this.m_spine.paused = true;
          }
        };
        return _0x2e7352;
      }(_0x46f5c0)).prototype, "m_spine", [_0x53079e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1c6977 = _0x644734));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      var _0x4b2397 = _0x4de0bd.ccclass;
      var _0x1ce896 = _0x4de0bd.property;
      var _0x35e20d = _0x4de0bd.menu;
      var _0x379561 = {
        None: 0
      };
      var _0x54fef4 = _0x474ab1(_0x379561);
      var _0x25e542 = 3.1415927;
      var _0x2f4d94 = _0x25e542 / 180;
      function _0x986cd4(_0x21cd2d, _0x339b1b, _0x2280bd, _0xf1b7cc, _0x45ef45) {
        var _0x57d82a;
        _0x57d82a = _0x45ef45;
        var _0x47f8cf = Math.sin(_0x57d82a * _0x2f4d94);
        var _0x38a162 = function (_0x21e5a2) {
          return Math.cos(_0x21e5a2 * _0x2f4d94);
        }(_0x45ef45);
        return 57.29577866666166 * Math.atan2(_0x38a162 * _0x2280bd + _0x47f8cf * _0xf1b7cc, _0x38a162 * _0x21cd2d + _0x47f8cf * _0x339b1b);
      }
      var _0xa2779f;
      var _0x2af1ba;
      var _0xaa6c9b;
      var _0x5cfba7;
      var _0x5933d9;
      var _0x4cef44;
      var _0x487e0e;
      var _0x55e83e;
      var _0x3a7b3d;
      var _0x46c769;
      var _0xbf568;
      var _0x4fac89;
      var _0x10a1b7;
      var _0x226912;
      var _0x1ecec4;
      var _0x36a822;
      var _0x345f3d;
      var _0x37bb1e;
      var _0x401efc;
      var _0x2d4e9f;
      var _0x4d4533;
      var _0x89f5aa;
      var _0x343ec2;
      var _0x4b3d4f;
      var _0x4d42dc;
      var _0x2d4b00;
      var _0x466b65;
      var _0x484add;
      var _0xe1f6b2;
      var _0x1559be;
      var _0x1719a0;
      var _0x181d01;
      var _0x516e6f;
      var _0x2b45b0;
      var _0x10b50b;
      var _0x40d4db;
      var _0x1bd92b;
      var _0x59657f;
      var _0x55af48;
      var _0x3d822a;
      _0x599a2b = _0x4b2397("BoneFollow");
      _0x36932e = _0x35e20d("Chiron/Spine/BoneFollow");
      _0x3e2eb0 = _0x1ce896({
        type: _0x38a6e5.Skeleton,
        tooltip: "目標 Spine 骨架"
      });
      _0x5ce489 = _0x1ce896({
        tooltip: "目標同步骨骼名稱"
      });
      _0x22c462 = _0x1ce896({
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x5e8815 = _0x1ce896({
        tooltip: "是否同步位置"
      });
      _0x219e88 = _0x1ce896({
        tooltip: "是否同步旋轉"
      });
      _0x3d1703 = _0x1ce896({
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x3be042 = _0x1ce896({
        tooltip: "是否同步縮放"
      });
      _0x5a19db = _0x1ce896({
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0x468543 = _0x1ce896({
        visible: false
      });
      _0x4b4581 = _0x1ce896({
        type: _0x54fef4,
        visible: true,
        displayName: "Bone"
      });
      _0x45dd2e = _0x1ce896({
        visible: true,
        displayName: "Preview"
      });
      _0x58a389 = _0x1ce896({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x500d20 = _0x1ce896({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_isFollowScale;
        }
      });
      _0x149116 = _0x1ce896({
        type: _0x4a7901,
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_isFollowPosition;
        }
      });
      _0x4971ad = _0x1ce896({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_isFollowRotation;
        }
      });
      _0x599a2b(_0x1db31c = _0x36932e(((_0x216fab = function (_0x4a5f2b) {
        function _0x20ef1f() {
          for (var _0x4d9d5e, _0x21f077 = arguments.length, _0x5a8a4f = new Array(_0x21f077), _0x3d54f5 = 0; _0x3d54f5 < _0x21f077; _0x3d54f5++) {
            _0x5a8a4f[_0x3d54f5] = arguments[_0x3d54f5];
          }
          (_0x4d9d5e = _0x4a5f2b.call.apply(_0x4a5f2b, [this].concat(_0x5a8a4f)) || this).editor = undefined;
          _0x4d45d3(_0x4d9d5e, "m_spineSkeleton", _0x36408a, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_boneName", _0x1f9c2e, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isCacheData", _0x2bc700, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isFollowPosition", _0x2ee17c, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isFollowRotation", _0x3f95d6, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isRotationLocalization", _0x3c87d9, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isFollowScale", _0x54430d, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_isScaleLocalization", _0x1529a7, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "__boneIndex", _0x39abaf, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "_boneIndex", _0x47341a, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_preview", _0x2cc7f4, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_cacheAncestors", _0x438c0f, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_scaleFactor", _0x41d509, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_positionOffset", _0xfb4629, _0xd5b437(_0x4d9d5e));
          _0x4d45d3(_0x4d9d5e, "m_rotationFactor", _0x5338d4, _0xd5b437(_0x4d9d5e));
          _0x4d9d5e._oldAngle = 0;
          _0x4d9d5e._oldScaleX = 1;
          _0x4d9d5e._oldScaleY = 1;
          _0x4d9d5e._isCached = false;
          _0x4d9d5e._cachedRotation = 0;
          _0x4d9d5e._cachedScaleX = 1;
          _0x4d9d5e._cachedScaleY = 1;
          return _0x4d9d5e;
        }
        _0x254dc4(_0x20ef1f, _0x4a5f2b);
        var _0x53e814 = _0x20ef1f.prototype;
        _0x53e814.__preload = function () {};
        _0x53e814.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x53e814.update = function () {
          if (this.m_spineSkeleton && "" != this.m_boneName && (this.m_isFollowPosition || this.m_isFollowRotation || this.m_isFollowScale)) {
            var _0x12e6ee = null;
            if (_0x12e6ee = this.m_spineSkeleton.findBone(this.m_boneName)) {
              var _0x757d69;
              var _0x4974c1;
              var _0x3a88b7;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x6d6c49 = 0, _0x21be07 = 0, _0x48d6f5 = 1, _0x30f1cf = 1, _0x535911 = 1, _0x59a3ce = 1, _0x17e33f = this.m_spineSkeleton.node; _0x17e33f;) {
                  _0x48d6f5 *= _0x17e33f.scale.x;
                  _0x30f1cf *= _0x17e33f.scale.y;
                  _0x6d6c49 += _0x17e33f.angle;
                  _0x17e33f = _0x17e33f.parent;
                }
                for (_0x17e33f = this.node.parent; _0x17e33f;) {
                  _0x535911 *= _0x17e33f.scale.x;
                  _0x59a3ce *= _0x17e33f.scale.y;
                  _0x21be07 -= _0x17e33f.angle;
                  _0x17e33f = _0x17e33f.parent;
                }
                this._cachedRotation = _0x6d6c49 + _0x21be07;
                this._cachedScaleX = _0x48d6f5 / _0x535911;
                this._cachedScaleY = _0x30f1cf / _0x59a3ce;
                this._isCached = true;
              }
              if (_0x757d69 = this.m_isRotationLocalization ? this._cachedRotation : this._oldAngle, _0x4974c1 = this.m_isScaleLocalization ? this._cachedScaleX : this._oldScaleX, _0x3a88b7 = this.m_isScaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_isFollowRotation) {
                var _0x1afa7a = _0x12e6ee.parent;
                var _0x4aab08 = _0x12e6ee.arotation;
                this.node.angle = _0x757d69 + (_0x5b153f(_0x1afa7a) ? _0x986cd4(_0x1afa7a.a, _0x1afa7a.b, _0x1afa7a.c, _0x1afa7a.d, _0x4aab08) : _0x12e6ee.arotation) + this.m_rotationFactor;
              }
              if (this.m_isFollowScale && this.node.setScale(_0x4974c1 * _0x12e6ee.getWorldScaleX() * this.m_scaleFactor.x, _0x3a88b7 * _0x12e6ee.getWorldScaleY() * this.m_scaleFactor.y), this.m_isFollowPosition) {
                var _0x54bbc1 = this.m_spineSkeleton.node.getComponent(_0x3eb7ef).convertToWorldSpaceAR(_0x23d9a3(_0x12e6ee.worldX, _0x12e6ee.worldY, 0));
                var _0x3b5e35 = this.node.parent.getComponent(_0x3eb7ef).convertToNodeSpaceAR(_0x54bbc1);
                this.node.setPosition(_0x23d9a3(_0x3b5e35.x + this.m_positionOffset.x, _0x3b5e35.y + this.m_positionOffset.y));
              }
            }
          }
        };
        _0x53e814.onDestroy = function () {
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
        _0x53e814.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x53e814._refreshInspector = function () {
          this._updateBoneEnum();
        };
        _0x53e814._boneEnum = function () {
          var _0x539a39 = _0x44fc7c(_0x379561);
          this.m_spineSkeleton;
          return _0x539a39;
        };
        _0x53e814._updateBoneEnum = function () {};
        return _0x20ef1f;
      }(_0x46f5c0)).BoneFollow = "BoneFollow", _0x36408a = _0x43ccc2((_0x34e916 = _0x216fab).prototype, "m_spineSkeleton", [_0x3e2eb0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1f9c2e = _0x43ccc2(_0x34e916.prototype, "m_boneName", [_0x5ce489], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x2bc700 = _0x43ccc2(_0x34e916.prototype, "m_isCacheData", [_0x22c462], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2ee17c = _0x43ccc2(_0x34e916.prototype, "m_isFollowPosition", [_0x5e8815], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3f95d6 = _0x43ccc2(_0x34e916.prototype, "m_isFollowRotation", [_0x219e88], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3c87d9 = _0x43ccc2(_0x34e916.prototype, "m_isRotationLocalization", [_0x3d1703], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x54430d = _0x43ccc2(_0x34e916.prototype, "m_isFollowScale", [_0x3be042], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1529a7 = _0x43ccc2(_0x34e916.prototype, "m_isScaleLocalization", [_0x5a19db], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x39abaf = _0x43ccc2(_0x34e916.prototype, "__boneIndex", [_0x468543], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x47341a = _0x43ccc2(_0x34e916.prototype, "_boneIndex", [_0x4b4581], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x54fef4.None;
        }
      }), _0x2cc7f4 = _0x43ccc2(_0x34e916.prototype, "m_preview", [_0x45dd2e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x438c0f = _0x43ccc2(_0x34e916.prototype, "m_cacheAncestors", [_0x58a389], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x41d509 = _0x43ccc2(_0x34e916.prototype, "m_scaleFactor", [_0x500d20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xed2d2c(1, 1);
        }
      }), _0xfb4629 = _0x43ccc2(_0x34e916.prototype, "m_positionOffset", [_0x149116], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xed2d2c(0, 0);
        }
      }), _0x5338d4 = _0x43ccc2(_0x34e916.prototype, "m_rotationFactor", [_0x4971ad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x1db31c = _0x34e916)) || _0x1db31c);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x215b64;
      var _0x338daf = _0x4de0bd.ccclass;
      var _0x38c872 = _0x4de0bd.property;
      var _0x301ffb = _0x4de0bd.executeInEditMode;
      !function (_0xf2a010) {
        _0xf2a010[_0xf2a010.default = 1] = "default";
      }(_0x215b64 || (_0x215b64 = {}));
      var _0x2c8a7e = _0x474ab1({});
      var _0xdadfaf = 3.1415927;
      var _0x333ca3 = _0xdadfaf / 180;
      function _0x21ba76(_0x249fb8, _0xcc658a, _0x3364eb, _0x43c21d, _0x295cf0) {
        var _0x5d640f;
        _0x5d640f = _0x295cf0;
        var _0x2acfac = Math.sin(_0x5d640f * _0x333ca3);
        var _0x3c5774 = function (_0x3977f1) {
          return Math.cos(_0x3977f1 * _0x333ca3);
        }(_0x295cf0);
        return 57.29577866666166 * Math.atan2(_0x3c5774 * _0x3364eb + _0x2acfac * _0x43c21d, _0x3c5774 * _0x249fb8 + _0x2acfac * _0xcc658a);
      }
      var _0x2dc9a2;
      var _0x35e6be;
      var _0x541bf9;
      var _0x34b145;
      var _0x1eaa6d;
      var _0x7dcb2;
      var _0x22787f;
      var _0x3b9f8d;
      var _0x45be94;
      var _0x580daf;
      var _0x262b45;
      var _0x992b9c;
      var _0x8fdfe0;
      var _0x7ca8b;
      var _0x230089;
      var _0x1cb7d9;
      var _0x451d06;
      var _0x1af68f;
      _0xa2779f = _0x338daf("NewBoneFollow");
      _0x2af1ba = _0x38c872({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0xaa6c9b = _0x38c872({
        visible: false,
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x5cfba7 = _0x38c872({
        visible: false,
        tooltip: "是否同步位置"
      });
      _0x5933d9 = _0x38c872({
        visible: false,
        tooltip: "是否同步旋轉"
      });
      _0x4cef44 = _0x38c872({
        visible: false,
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x487e0e = _0x38c872({
        visible: false,
        tooltip: "是否同步縮放"
      });
      _0x55e83e = _0x38c872({
        visible: false,
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0x3a7b3d = _0x38c872({
        visible: true,
        displayName: "Preview"
      });
      _0x46c769 = _0x38c872({
        type: _0x38a6e5.Skeleton,
        visible: false
      });
      _0xbf568 = _0x38c872({
        visible: true,
        type: _0x38a6e5.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x4fac89 = _0x38c872({
        visible: false
      });
      _0x10a1b7 = _0x38c872({
        visible: true,
        displayName: "BoneName",
        tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇"
      });
      _0x226912 = _0x38c872({
        type: _0x2c8a7e,
        visible: false
      });
      _0x1ecec4 = _0x38c872({
        type: _0x2c8a7e,
        visible: true,
        displayName: "SelectFromList",
        tooltip: "可從此下拉選單選擇骨頭"
      });
      _0x36a822 = _0x38c872({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x345f3d = _0x38c872({
        displayName: "Position",
        tooltip: "是否同步位置"
      });
      _0x37bb1e = _0x38c872({
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_followPosition;
        }
      });
      _0x401efc = _0x38c872({
        displayName: "Rotation",
        tooltip: "是否同步旋轉"
      });
      _0x2d4e9f = _0x38c872({
        displayName: "Rotation Localization",
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0x4d4533 = _0x38c872({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0x89f5aa = _0x38c872({
        displayName: "Scale",
        tooltip: "是否同步縮放"
      });
      _0x343ec2 = _0x38c872({
        displayName: "Scale Localization",
        tooltip: "是否將目標縮放量轉換成區域縮放量",
        visible: function () {
          return this.m_followScale;
        }
      });
      _0x4b3d4f = _0x38c872({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_followScale;
        }
      });
      _0xa2779f(_0x4d42dc = _0x301ffb(((_0x3d822a = function (_0x142b62) {
        function _0x5c50a5() {
          for (var _0x564bf0, _0x7a05ed = arguments.length, _0x4408d5 = new Array(_0x7a05ed), _0x948e6b = 0; _0x948e6b < _0x7a05ed; _0x948e6b++) {
            _0x4408d5[_0x948e6b] = arguments[_0x948e6b];
          }
          (_0x564bf0 = _0x142b62.call.apply(_0x142b62, [this].concat(_0x4408d5)) || this)._oldAngle = 0;
          _0x564bf0._oldScaleX = 1;
          _0x564bf0._oldScaleY = 1;
          _0x564bf0._isCached = false;
          _0x564bf0._cachedRotation = 0;
          _0x564bf0._cachedScaleX = 1;
          _0x564bf0._cachedScaleY = 1;
          _0x564bf0._BoneEnumList = [];
          _0x4d45d3(_0x564bf0, "m_preview", _0x466b65, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_spineSkeleton", _0x484add, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_boneName", _0xe1f6b2, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "__boneIndex", _0x1559be, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_cacheAncestors", _0x1719a0, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_followPosition", _0x181d01, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_positionOffset", _0x516e6f, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_followRotation", _0x2b45b0, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_rotationLocalization", _0x10b50b, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_rotationFactor", _0x40d4db, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_followScale", _0x1bd92b, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_scaleLocalization", _0x59657f, _0xd5b437(_0x564bf0));
          _0x4d45d3(_0x564bf0, "m_scaleFactor", _0x55af48, _0xd5b437(_0x564bf0));
          _0x564bf0.m_isFirstActive = true;
          return _0x564bf0;
        }
        _0x254dc4(_0x5c50a5, _0x142b62);
        var _0x3b3bce = _0x5c50a5.prototype;
        _0x3b3bce.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x3b3bce.__preload = function () {};
        _0x3b3bce.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x3b3bce.start = function () {};
        _0x3b3bce.onEnable = function () {
          _0x12a2eb.on(_0xbf3db3.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x3b3bce.onDisable = function () {
          _0x12a2eb.off(_0xbf3db3.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x3b3bce.onDestroy = function () {
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
        _0x3b3bce.BoneSync = function () {
          if (this.m_isFirstActive && this.m_spineSkeleton && this.m_spineSkeleton._skeleton && (this.m_isFirstActive = false, this.m_spineSkeleton._skeleton.updateWorldTransform()), this.m_spineSkeleton && "" != this.m_boneName && (this.m_followPosition || this.m_followRotation || this.m_followScale)) {
            var _0x4a974f = this.m_spineSkeleton.findBone(this.m_boneName);
            if (_0x4a974f) {
              var _0x42d88a;
              var _0x5eff3c;
              var _0xf76ea8;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x104fb0 = 0, _0x3ea72a = 0, _0x45863f = 1, _0x3e6bdd = 1, _0x4800f4 = 1, _0xd32fc6 = 1, _0x279b80 = this.m_spineSkeleton.node; _0x279b80;) {
                  _0x45863f *= _0x279b80.scale.x;
                  _0x3e6bdd *= _0x279b80.scale.y;
                  _0x279b80.angle && (_0x104fb0 += _0x279b80.angle);
                  _0x279b80 = _0x279b80.parent;
                }
                for (_0x279b80 = this.node.parent; _0x279b80;) {
                  _0x4800f4 *= _0x279b80.scale.x;
                  _0xd32fc6 *= _0x279b80.scale.y;
                  _0x279b80.angle && (_0x3ea72a -= _0x279b80.angle);
                  _0x279b80 = _0x279b80.parent;
                }
                this._cachedRotation = _0x104fb0 + _0x3ea72a;
                this._cachedScaleX = _0x45863f / _0x4800f4;
                this._cachedScaleY = _0x3e6bdd / _0xd32fc6;
                this._isCached = true;
              }
              if (_0x42d88a = this.m_rotationLocalization ? this._cachedRotation : this._oldAngle, _0x5eff3c = this.m_scaleLocalization ? this._cachedScaleX : this._oldScaleX, _0xf76ea8 = this.m_scaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_followRotation) {
                var _0x1c4fce = _0x4a974f.parent;
                var _0x1c2e89 = _0x4a974f.arotation;
                var _0x2868d2 = _0x42d88a + (_0x5b153f(_0x1c4fce) ? _0x21ba76(_0x1c4fce.a, _0x1c4fce.b, _0x1c4fce.c, _0x1c4fce.d, _0x1c2e89) : _0x4a974f.arotation) + this.m_rotationFactor;
                this.node.setRotationFromEuler(_0x23d9a3(0, 0, _0x2868d2));
              }
              if (this.m_followScale && this.node.setScale(_0x5eff3c * _0x4a974f.getWorldScaleX() * this.m_scaleFactor.x, _0xf76ea8 * _0x4a974f.getWorldScaleY() * this.m_scaleFactor.y), this.m_followPosition) {
                var _0x2b5c53 = this.m_spineSkeleton.node.getComponent(_0x3eb7ef).convertToWorldSpaceAR(_0x23d9a3(_0x4a974f.worldX + this.m_positionOffset.x, _0x4a974f.worldY + this.m_positionOffset.y, 0));
                var _0x3142bc = this.node.parent.getComponent(_0x3eb7ef).convertToNodeSpaceAR(_0x2b5c53);
                this.node.setPosition(_0x23d9a3(_0x3142bc.x, _0x3142bc.y));
              }
            }
          }
        };
        _0x3b3bce._refreshInspector = function () {};
        _0x3b3bce._updateBoneEnum = function () {};
        _0x221aac(_0x5c50a5, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x86c1b9) {
            this.m_spineSkeleton = _0x86c1b9;
          }
        }, {
          key: "CacheData",
          get: function () {
            return this.m_cacheData;
          },
          set: function (_0x4907b9) {
            this.m_cacheData = _0x4907b9;
          }
        }, {
          key: "FollowPosition",
          get: function () {
            return this.m_followPosition;
          },
          set: function (_0x123874) {
            this.m_followPosition = _0x123874;
          }
        }, {
          key: "FollowRotation",
          get: function () {
            return this.m_followRotation;
          },
          set: function (_0x148cfb) {
            this.m_followRotation = _0x148cfb;
          }
        }, {
          key: "RotationLocalization",
          get: function () {
            return this.m_rotationLocalization;
          },
          set: function (_0x41aac6) {
            this.m_rotationLocalization = _0x41aac6;
          }
        }, {
          key: "FollowScale",
          get: function () {
            return this.m_followScale;
          },
          set: function (_0x48597c) {
            this.m_followScale = _0x48597c;
          }
        }, {
          key: "ScaleLocalization",
          get: function () {
            return this.m_scaleLocalization;
          },
          set: function (_0x43bdac) {
            this.m_scaleLocalization = _0x43bdac;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x20efcd) {
            console.log("set _spineSkeleton ", this.m_spineSkeleton, "value", _0x20efcd);
            this.m_spineSkeleton = _0x20efcd;
            this._refreshInspector();
          }
        }, {
          key: "BoneName",
          get: function () {
            return this.m_boneName;
          },
          set: function (_0x4483ad) {
            this.m_boneName = _0x4483ad;
            var _0x3d7a01 = false;
            this._BoneEnumList.forEach(function (_0x405a46) {
              _0x405a46.name != _0x4483ad || (_0x3d7a01 = true);
            });
            0 == _0x3d7a01 ? console.log("[spBoneFollow] 輸入的骨頭", _0x4483ad, "並不存在！請檢查名稱是否正確！") : console.log("[spBoneFollow] 輸入的骨頭", _0x4483ad, "已找到！");
          }
        }, {
          key: "_boneIndex",
          get: function () {
            return this.__boneIndex;
          },
          set: function (_0xdbcc4e) {
            var _0x2c55dc = this;
            this.__boneIndex = _0xdbcc4e;
            this._BoneEnumList.forEach(function (_0x478501) {
              _0x478501.value == _0xdbcc4e && (_0x2c55dc.m_boneName = _0x478501.name);
            });
            this.__boneIndex = 0;
            console.log("set __boneIndex ", _0xdbcc4e, "m_boneName:", this.m_boneName);
          }
        }]);
        return _0x5c50a5;
      }(_0x46f5c0)).NewBoneFollow = "NewBoneFollow", _0x43ccc2((_0x2d4b00 = _0x3d822a).prototype, "Skeleton", [_0x2af1ba], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "Skeleton"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "CacheData", [_0xaa6c9b], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "CacheData"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "FollowPosition", [_0x5cfba7], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "FollowPosition"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "FollowRotation", [_0x5933d9], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "FollowRotation"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "RotationLocalization", [_0x4cef44], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "RotationLocalization"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "FollowScale", [_0x487e0e], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "FollowScale"), _0x2d4b00.prototype), _0x43ccc2(_0x2d4b00.prototype, "ScaleLocalization", [_0x55e83e], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "ScaleLocalization"), _0x2d4b00.prototype), _0x466b65 = _0x43ccc2(_0x2d4b00.prototype, "m_preview", [_0x3a7b3d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x484add = _0x43ccc2(_0x2d4b00.prototype, "m_spineSkeleton", [_0x46c769], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x43ccc2(_0x2d4b00.prototype, "_spineSkeleton", [_0xbf568], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "_spineSkeleton"), _0x2d4b00.prototype), _0xe1f6b2 = _0x43ccc2(_0x2d4b00.prototype, "m_boneName", [_0x4fac89], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x43ccc2(_0x2d4b00.prototype, "BoneName", [_0x10a1b7], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "BoneName"), _0x2d4b00.prototype), _0x1559be = _0x43ccc2(_0x2d4b00.prototype, "__boneIndex", [_0x226912], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x215b64.default;
        }
      }), _0x43ccc2(_0x2d4b00.prototype, "_boneIndex", [_0x1ecec4], Object.getOwnPropertyDescriptor(_0x2d4b00.prototype, "_boneIndex"), _0x2d4b00.prototype), _0x1719a0 = _0x43ccc2(_0x2d4b00.prototype, "m_cacheAncestors", [_0x36a822], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x181d01 = _0x43ccc2(_0x2d4b00.prototype, "m_followPosition", [_0x345f3d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x516e6f = _0x43ccc2(_0x2d4b00.prototype, "m_positionOffset", [_0x37bb1e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xed2d2c(0, 0);
        }
      }), _0x2b45b0 = _0x43ccc2(_0x2d4b00.prototype, "m_followRotation", [_0x401efc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x10b50b = _0x43ccc2(_0x2d4b00.prototype, "m_rotationLocalization", [_0x2d4e9f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x40d4db = _0x43ccc2(_0x2d4b00.prototype, "m_rotationFactor", [_0x4d4533], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x1bd92b = _0x43ccc2(_0x2d4b00.prototype, "m_followScale", [_0x89f5aa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x59657f = _0x43ccc2(_0x2d4b00.prototype, "m_scaleLocalization", [_0x343ec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x55af48 = _0x43ccc2(_0x2d4b00.prototype, "m_scaleFactor", [_0x4b3d4f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xed2d2c(1, 1);
        }
      }), _0x4d42dc = _0x2d4b00)) || _0x4d42dc);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x44e776;
      var _0x957d3 = _0x4de0bd.ccclass;
      var _0x1f0b4b = _0x4de0bd.property;
      var _0x45f977 = _0x4de0bd.executeInEditMode;
      !function (_0x33d0d1) {
        _0x33d0d1[_0x33d0d1.default = 1] = "default";
      }(_0x44e776 || (_0x44e776 = {}));
      var _0xca0aba;
      var _0x29a7c7;
      var _0x35a525;
      var _0x832dbc;
      var _0x3a9143;
      var _0x53cbaa;
      var _0x229d14 = _0x474ab1({});
      _0x2dc9a2 = _0x957d3("NewSlotColorFollow");
      _0x35e6be = _0x1f0b4b({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x541bf9 = _0x1f0b4b({
        visible: true,
        displayName: "Preview"
      });
      _0x34b145 = _0x1f0b4b({
        visible: false
      });
      _0x1eaa6d = _0x1f0b4b({
        type: _0x38a6e5.Skeleton,
        visible: false
      });
      _0x7dcb2 = _0x1f0b4b({
        visible: true,
        type: _0x38a6e5.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x22787f = _0x1f0b4b({
        visible: false
      });
      _0x3b9f8d = _0x1f0b4b({
        visible: true,
        displayName: "SlotName",
        tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇"
      });
      _0x45be94 = _0x1f0b4b({
        type: _0x229d14,
        visible: false
      });
      _0x580daf = _0x1f0b4b({
        visible: true,
        displayName: "SelectFromList",
        type: _0x229d14,
        tooltip: "可從此下拉選單選擇插槽"
      });
      _0x2dc9a2(_0x262b45 = _0x45f977(((_0x1af68f = function (_0x40c311) {
        function _0x3bcc76() {
          for (var _0x45ef35, _0x1e74ce = arguments.length, _0xeed319 = new Array(_0x1e74ce), _0x319b8b = 0; _0x319b8b < _0x1e74ce; _0x319b8b++) {
            _0xeed319[_0x319b8b] = arguments[_0x319b8b];
          }
          _0x45ef35 = _0x40c311.call.apply(_0x40c311, [this].concat(_0xeed319)) || this;
          _0x4d45d3(_0x45ef35, "m_preview", _0x8fdfe0, _0xd5b437(_0x45ef35));
          _0x4d45d3(_0x45ef35, "_colorCache", _0x7ca8b, _0xd5b437(_0x45ef35));
          _0x4d45d3(_0x45ef35, "m_spineSkeleton", _0x230089, _0xd5b437(_0x45ef35));
          _0x4d45d3(_0x45ef35, "m_slotName", _0x1cb7d9, _0xd5b437(_0x45ef35));
          _0x4d45d3(_0x45ef35, "__slotIndex", _0x451d06, _0xd5b437(_0x45ef35));
          _0x45ef35._SlotEnumList = [];
          return _0x45ef35;
        }
        _0x254dc4(_0x3bcc76, _0x40c311);
        var _0x4d4ba0 = _0x3bcc76.prototype;
        _0x4d4ba0.__preload = function () {};
        _0x4d4ba0.onLoad = function () {
          this._colorCache = null;
        };
        _0x4d4ba0.start = function () {};
        _0x4d4ba0.onEnable = function () {
          this.ColorSync();
          _0x12a2eb.on(_0xbf3db3.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x4d4ba0.onDisable = function () {
          _0x12a2eb.off(_0xbf3db3.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x4d4ba0.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x4d4ba0.ColorSync = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x811cfb = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0x815516 = _0x811cfb ? 255 * _0x811cfb.color.r : this._colorCache.r;
            var _0x2c2131 = _0x811cfb ? 255 * _0x811cfb.color.g : this._colorCache.g;
            var _0x3e9279 = _0x811cfb ? 255 * _0x811cfb.color.b : this._colorCache.b;
            var _0x2e21bc = _0x811cfb ? 255 * _0x811cfb.color.a : this._colorCache.a;
            null != this._colorCache && _0x811cfb.color.r == this._colorCache.r && _0x811cfb.color.g == this._colorCache.g && _0x811cfb.color.b == this._colorCache.b && _0x811cfb.color.a == this._colorCache.a || (this._colorCache = this._colorCache || new _0x37b61a.Color(_0x37b61a.Color.WHITE), this.node.getComponent(_0x43f6e7) ? (this.node.getComponent(_0x43f6e7).color = _0x23d090(_0x815516, _0x2c2131, _0x3e9279, _0x2e21bc), this._colorCache.set(this.node.getComponent(_0x43f6e7).color)) : this.node.getComponent(_0x31f3fc) && (this.node.getComponent(_0x31f3fc).color = _0x23d090(_0x815516, _0x2c2131, _0x3e9279, _0x2e21bc), this._colorCache.set(this.node.getComponent(_0x31f3fc).color)), this.node.getComponent(_0x4e51c6) && (this.node.getComponent(_0x4e51c6).opacity = _0x2e21bc), this._colorCache.a = _0x2e21bc);
          }
        };
        _0x4d4ba0._refreshInspector = function () {};
        _0x4d4ba0._updateSlotEnum = function () {};
        _0x221aac(_0x3bcc76, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x1b74a7) {
            this.m_spineSkeleton = _0x1b74a7;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x351508) {}
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x1f11ec) {
            this.m_slotName = _0x1f11ec;
            var _0x59887e = false;
            this._SlotEnumList.forEach(function (_0x1f1b0b) {
              _0x1f1b0b.name != _0x1f11ec || (_0x59887e = true);
            });
            0 == _0x59887e ? console.log("[spSlotColorFollow] 輸入的插槽", _0x1f11ec, "並不存在！請檢查名稱是否正確！") : console.log("[spSlotColorFollow] 輸入的插槽", _0x1f11ec, "已找到！");
          }
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0xc6ee03) {}
        }]);
        return _0x3bcc76;
      }(_0x46f5c0)).NewSlotColorFollow = "NewSlotColorFollow", _0x43ccc2((_0x992b9c = _0x1af68f).prototype, "Skeleton", [_0x35e6be], Object.getOwnPropertyDescriptor(_0x992b9c.prototype, "Skeleton"), _0x992b9c.prototype), _0x8fdfe0 = _0x43ccc2(_0x992b9c.prototype, "m_preview", [_0x541bf9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x7ca8b = _0x43ccc2(_0x992b9c.prototype, "_colorCache", [_0x34b145], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x37b61a.Color(_0x37b61a.Color.WHITE);
        }
      }), _0x230089 = _0x43ccc2(_0x992b9c.prototype, "m_spineSkeleton", [_0x1eaa6d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x43ccc2(_0x992b9c.prototype, "_spineSkeleton", [_0x7dcb2], Object.getOwnPropertyDescriptor(_0x992b9c.prototype, "_spineSkeleton"), _0x992b9c.prototype), _0x1cb7d9 = _0x43ccc2(_0x992b9c.prototype, "m_slotName", [_0x22787f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x43ccc2(_0x992b9c.prototype, "SlotName", [_0x3b9f8d], Object.getOwnPropertyDescriptor(_0x992b9c.prototype, "SlotName"), _0x992b9c.prototype), _0x451d06 = _0x43ccc2(_0x992b9c.prototype, "__slotIndex", [_0x45be94], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x44e776.default;
        }
      }), _0x43ccc2(_0x992b9c.prototype, "_slotIndex", [_0x580daf], Object.getOwnPropertyDescriptor(_0x992b9c.prototype, "_slotIndex"), _0x992b9c.prototype), _0x262b45 = _0x992b9c)) || _0x262b45);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      var _0x8f36d5;
      var _0x2f9228;
      var _0x15f624 = _0x4de0bd.ccclass;
      var _0x371ff7 = _0x4de0bd.property;
      var _0xeb23ca = _0x4de0bd.menu;
      _0xca0aba = _0x15f624("SkeletonSync");
      _0x29a7c7 = _0xeb23ca("Chiron/Spine/SkeletonSync");
      _0x35a525 = _0x371ff7({
        displayName: "Overlap",
        tooltip: "是否交疊並同步座標、旋轉及縮放"
      });
      _0xca0aba(_0x832dbc = _0x29a7c7((_0x53cbaa = _0x43ccc2((_0x3a9143 = function (_0x3c2255) {
        function _0x32759d() {
          for (var _0x51c69d, _0x396deb = arguments.length, _0x64904a = new Array(_0x396deb), _0x4c3dbc = 0; _0x4c3dbc < _0x396deb; _0x4c3dbc++) {
            _0x64904a[_0x4c3dbc] = arguments[_0x4c3dbc];
          }
          (_0x51c69d = _0x3c2255.call.apply(_0x3c2255, [this].concat(_0x64904a)) || this).m_skeleton = null;
          _0x4d45d3(_0x51c69d, "m_overlap", _0x53cbaa, _0xd5b437(_0x51c69d));
          return _0x51c69d;
        }
        _0x254dc4(_0x32759d, _0x3c2255);
        var _0x289d6e = _0x32759d.prototype;
        _0x289d6e.__preload = function () {
          this.m_skeleton = this.getComponent(_0x38a6e5.Skeleton);
        };
        _0x289d6e.Sync = function (_0x3e03c7) {
          if (_0x3e03c7 && this.m_overlap) {
            for (var _0x27b7db = 0, _0x364088 = 1, _0x1efb49 = 1, _0x1fd15c = _0x3e03c7; _0x1fd15c;) {
              _0x364088 *= _0x1fd15c.scale.x;
              _0x1efb49 *= _0x1fd15c.scale.y;
              _0x27b7db += _0x1fd15c.angle;
              _0x1fd15c = _0x1fd15c.parent;
            }
            this.node.angle = _0x27b7db;
            this.node.scale = _0x23d9a3(_0x364088, _0x1efb49, 0);
            var _0x45485b = _0x3e03c7.parent.getComponent(_0x3eb7ef).convertToWorldSpaceAR(_0x3e03c7.position);
            var _0x4058c4 = this.node.parent.getComponent(_0x3eb7ef).convertToNodeSpaceAR(_0x45485b);
            this.node.setPosition(_0x4058c4);
          }
        };
        _0x221aac(_0x32759d, [{
          key: "Skeleton",
          get: function () {
            return this.m_skeleton;
          }
        }]);
        return _0x32759d;
      }(_0x46f5c0)).prototype, "m_overlap", [_0x35a525], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x832dbc = _0x3a9143)) || _0x832dbc);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      var _0x52d350;
      var _0x261534;
      var _0x21f3d5;
      var _0x5c4ad3;
      var _0x43703d;
      var _0xc864c5;
      var _0x47648c;
      var _0x369705;
      var _0x133b61;
      var _0x170935;
      var _0x22280e;
      var _0x1e030b;
      var _0x29aa0a;
      var _0x1766e9;
      var _0x8e7f21;
      var _0xa39940;
      var _0x354437;
      var _0x232cf0;
      var _0x16ed50;
      var _0x1e4304 = _0x4de0bd.ccclass;
      _0x4de0bd.property;
      var _0x360477 = _0x4de0bd.menu;
      _0x1e4304("SlotActivator")(_0x8f36d5 = _0x360477("Chiron/Spine/SlotActivator")(((_0x2f9228 = function (_0x143b41) {
        function _0x1c5c35() {
          return _0x143b41.apply(this, arguments) || this;
        }
        _0x254dc4(_0x1c5c35, _0x143b41);
        _0x221aac(_0x1c5c35, [{
          key: "Identifier",
          get: function () {
            return this.identifier;
          },
          set: function (_0x4fe570) {
            this.identifier = _0x4fe570;
          }
        }, {
          key: "Active",
          get: function () {
            return this.active;
          },
          set: function (_0x4ca1ca) {
            this.active = _0x4ca1ca;
          }
        }]);
        return _0x1c5c35;
      }(_0x46f5c0)).SlotActivator = "SlotActivator", _0x8f36d5 = _0x2f9228)) || _0x8f36d5);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      var _0x3cee3d = _0x4de0bd.ccclass;
      var _0x1b3c3c = _0x4de0bd.property;
      var _0x292d05 = _0x4de0bd.menu;
      _0x4de0bd.inspector;
      var _0x38c3f5 = _0x474ab1({
        None: 0
      });
      var _0x4a0266;
      var _0x3aa323;
      var _0x27cc3d;
      var _0x47672a;
      var _0x506dec;
      var _0x2110fb;
      var _0x56b49d;
      var _0xf7d467;
      _0x52d350 = _0x3cee3d("SlotColorFollow");
      _0x261534 = _0x292d05("Chiron/Spine/SlotColorFollow");
      _0x21f3d5 = _0x1b3c3c({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x5c4ad3 = _0x1b3c3c({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x43703d = _0x1b3c3c({
        visible: true,
        displayName: "Preview"
      });
      _0xc864c5 = _0x1b3c3c({
        visible: false,
        type: _0x37b61a.Color
      });
      _0x47648c = _0x1b3c3c({
        visible: false,
        type: _0x38a6e5.Skeleton
      });
      _0x369705 = _0x1b3c3c({
        visible: true,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架",
        type: _0x38a6e5.Skeleton
      });
      _0x133b61 = _0x1b3c3c({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x170935 = _0x1b3c3c({
        visible: false
      });
      _0x22280e = _0x1b3c3c({
        visible: true,
        displayName: "Slot",
        type: _0x38c3f5
      });
      _0x52d350(_0x1e030b = _0x261534(((_0x16ed50 = function (_0x20687b) {
        function _0x3b7148() {
          for (var _0x1fe552, _0x1e195b = arguments.length, _0x352097 = new Array(_0x1e195b), _0x24e49e = 0; _0x24e49e < _0x1e195b; _0x24e49e++) {
            _0x352097[_0x24e49e] = arguments[_0x24e49e];
          }
          (_0x1fe552 = _0x20687b.call.apply(_0x20687b, [this].concat(_0x352097)) || this).editor = undefined;
          _0x4d45d3(_0x1fe552, "m_preview", _0x1766e9, _0xd5b437(_0x1fe552));
          _0x4d45d3(_0x1fe552, "_colorCache", _0x8e7f21, _0xd5b437(_0x1fe552));
          _0x4d45d3(_0x1fe552, "m_spineSkeleton", _0xa39940, _0xd5b437(_0x1fe552));
          _0x4d45d3(_0x1fe552, "m_slotName", _0x354437, _0xd5b437(_0x1fe552));
          _0x4d45d3(_0x1fe552, "__slotIndex", _0x232cf0, _0xd5b437(_0x1fe552));
          return _0x1fe552;
        }
        _0x254dc4(_0x3b7148, _0x20687b);
        var _0x57e4a5 = _0x3b7148.prototype;
        _0x57e4a5.__preload = function () {};
        _0x57e4a5.onLoad = function () {
          this.node.getComponent(_0x43f6e7) ? this._colorCache = this.node.getComponent(_0x43f6e7).color : this.node.getComponent(_0x31f3fc) && (this._colorCache = this.node.getComponent(_0x31f3fc).color);
        };
        _0x57e4a5.update = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x4ed2e1 = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0xccf295 = _0x4ed2e1 ? 255 * _0x4ed2e1.color.r : this._colorCache.r;
            var _0x4353aa = _0x4ed2e1 ? 255 * _0x4ed2e1.color.g : this._colorCache.g;
            var _0x2afa7a = _0x4ed2e1 ? 255 * _0x4ed2e1.color.b : this._colorCache.b;
            var _0x8cc34a = _0x4ed2e1 ? 255 * _0x4ed2e1.color.a : this._colorCache.a;
            _0xccf295 == this._colorCache.r && _0x4353aa == this._colorCache.g && _0x2afa7a == this._colorCache.b && _0x8cc34a == this._colorCache.a || (this.node.getComponent(_0x43f6e7) ? (this.node.getComponent(_0x43f6e7).color = _0x23d090(_0xccf295, _0x4353aa, _0x2afa7a, _0x8cc34a), this._colorCache.set(this.node.getComponent(_0x43f6e7).color)) : this.node.getComponent(_0x31f3fc) && (this.node.getComponent(_0x31f3fc).color = _0x23d090(_0xccf295, _0x4353aa, _0x2afa7a, _0x8cc34a), this._colorCache.set(this.node.getComponent(_0x31f3fc).color)), this.node.getComponent(_0x4e51c6) && (this.node.getComponent(_0x4e51c6).opacity = _0x8cc34a), this._colorCache.a = _0x8cc34a);
          }
        };
        _0x57e4a5.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x57e4a5._refreshInspector = function () {};
        _0x57e4a5._slotEnum = function () {};
        _0x57e4a5._updateSlotEnum = function () {
          var _0x147161;
          var _0x490dc5;
          var _0x4dadc8;
          var _0x11e14a;
          var _0x5dab73 = this._slotEnum();
          _0x147161 = this;
          _0x490dc5 = "_slotIndex";
          _0x4dadc8 = _0x5dab73 || _0x38c3f5;
          _0x11e14a = _0x474ab1.getList(_0x474ab1(_0x4dadc8));
          _0x57fc27.Attr.setClassAttr(_0x147161, _0x490dc5, "type", "Enum");
          _0x57fc27.Attr.setClassAttr(_0x147161, _0x490dc5, "enumList", _0x11e14a);
        };
        _0x57e4a5.notify = function () {};
        _0x221aac(_0x3b7148, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x42506a) {
            this.m_spineSkeleton = _0x42506a;
          }
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x2c12d0) {
            this.m_slotName = _0x2c12d0;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {},
          set: function (_0x34af7e) {}
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0x73c536) {}
        }]);
        return _0x3b7148;
      }(_0x46f5c0)).SlotColorFollow = "SlotColorFollow", _0x43ccc2((_0x29aa0a = _0x16ed50).prototype, "Skeleton", [_0x21f3d5], Object.getOwnPropertyDescriptor(_0x29aa0a.prototype, "Skeleton"), _0x29aa0a.prototype), _0x43ccc2(_0x29aa0a.prototype, "SlotName", [_0x5c4ad3], Object.getOwnPropertyDescriptor(_0x29aa0a.prototype, "SlotName"), _0x29aa0a.prototype), _0x1766e9 = _0x43ccc2(_0x29aa0a.prototype, "m_preview", [_0x43703d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x8e7f21 = _0x43ccc2(_0x29aa0a.prototype, "_colorCache", [_0xc864c5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x37b61a.Color(_0x37b61a.Color.WHITE);
        }
      }), _0xa39940 = _0x43ccc2(_0x29aa0a.prototype, "m_spineSkeleton", [_0x47648c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x43ccc2(_0x29aa0a.prototype, "_spineSkeleton", [_0x369705], Object.getOwnPropertyDescriptor(_0x29aa0a.prototype, "_spineSkeleton"), _0x29aa0a.prototype), _0x354437 = _0x43ccc2(_0x29aa0a.prototype, "m_slotName", [_0x133b61], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x232cf0 = _0x43ccc2(_0x29aa0a.prototype, "__slotIndex", [_0x170935], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x43ccc2(_0x29aa0a.prototype, "_slotIndex", [_0x22280e], Object.getOwnPropertyDescriptor(_0x29aa0a.prototype, "_slotIndex"), _0x29aa0a.prototype), _0x1e030b = _0x29aa0a)) || _0x1e030b);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      var _0x191804 = _0x4de0bd.ccclass;
      var _0x4898a7 = _0x4de0bd.property;
      var _0x5bca18 = _0x4de0bd.menu;
      _0x4a0266 = _0x191804("SlotCulling");
      _0x3aa323 = _0x5bca18("Chiron/Spine/SlotCulling");
      _0x27cc3d = _0x4898a7({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x47672a = _0x4898a7({
        visible: false,
        tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)"
      });
      _0x506dec = _0x4898a7({
        visible: false,
        tooltip: "遭剔除的 Slot 項目名稱"
      });
      _0x4a0266(_0x2110fb = _0x3aa323(((_0xf7d467 = function (_0x4a14ea) {
        function _0x467120() {
          return _0x4a14ea.apply(this, arguments) || this;
        }
        _0x254dc4(_0x467120, _0x4a14ea);
        _0x221aac(_0x467120, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x24f7ca) {
            this.m_spineSkeleton = _0x24f7ca;
          }
        }, {
          key: "Invert",
          get: function () {
            return this.m_invert;
          },
          set: function (_0x1f03ca) {
            this.m_invert = _0x1f03ca;
          }
        }, {
          key: "CullingList",
          get: function () {
            return this._cullingSlotNames;
          }
        }], [{
          key: "Name",
          get: function () {
            return _0x467120.SlotCulling;
          }
        }]);
        return _0x467120;
      }(_0x46f5c0)).SlotCulling = "SlotCulling", _0x43ccc2((_0x56b49d = _0xf7d467).prototype, "Skeleton", [_0x27cc3d], Object.getOwnPropertyDescriptor(_0x56b49d.prototype, "Skeleton"), _0x56b49d.prototype), _0x43ccc2(_0x56b49d.prototype, "Invert", [_0x47672a], Object.getOwnPropertyDescriptor(_0x56b49d.prototype, "Invert"), _0x56b49d.prototype), _0x43ccc2(_0x56b49d.prototype, "CullingList", [_0x506dec], Object.getOwnPropertyDescriptor(_0x56b49d.prototype, "CullingList"), _0x56b49d.prototype), _0x2110fb = _0x56b49d)) || _0x2110fb);
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0x3fb695;
      var _0x2a06c2;
      var _0x2028d6;
      var _0x14ee0c;
      var _0x336dcb;
      var _0x3d9395;
      var _0x367cbf;
      var _0x514e1d;
      var _0xbec0b8;
      var _0x33ae77;
      var _0x33fd27;
      var _0x5a600c;
      var _0x5f0a23;
      var _0x81e43;
      var _0x3dd817;
      var _0x53a6c5;
      var _0x224001;
      var _0x258c84;
      var _0x59d60d;
      var _0xede0b7;
      var _0x44c58d;
      var _0x5d09ab;
      var _0x54c6fd;
      var _0x38cfb2;
      var _0x377e09;
      var _0x29a7df;
      var _0x51ee36;
      var _0x1fec63;
      var _0x29a44a;
      var _0x689abb;
      var _0x5b27e4;
      var _0x5c17fd;
      var _0x257f68;
      var _0x447892;
      var _0x2cb06f;
      var _0x369b6c;
      var _0xfedef9;
      var _0x4b5481;
      var _0x581eb8;
      var _0x13acbd;
      var _0x2abb86;
      var _0x296772;
      var _0x6af604;
      var _0x337980;
      var _0x12d782;
      var _0x550af5;
      var _0x3e790e;
      var _0x5872ab;
      var _0x536b58;
      var _0x773702;
      var _0xb99618;
      var _0x588c29;
      var _0x56782b;
      var _0x231d5a;
      var _0x5ca55f;
      var _0x4623b3;
      var _0x12f784;
      var _0x2588a7;
      var _0x5d07da;
      var _0x38ec61;
      var _0xc84f2;
      var _0x42756b;
      var _0x59b2b4;
      var _0x3129b5;
      var _0x4a87ed;
      var _0x620a7f;
      var _0x488d09;
      var _0x39490a;
      var _0x411308;
      var _0x10de63;
      var _0x531c9b;
      var _0x2982c8;
      var _0x370cd2 = new Map();
      var _0x190c5f = new Map();
      var _0x5c09be = new Map();
      var _0x5794b1 = function () {
        function _0x570b0d() {
          this.loadedZipNames = new Array();
        }
        var _0x2fd91b = _0x570b0d.prototype;
        _0x2fd91b.downloadZip = function (_0x5a02e7, _0x2191df) {
          return new Promise(function (_0x30cbdc) {
            var _0x49cbc9 = _0x5a02e7.match(/[^/]+$/);
            if (null !== _0x49cbc9) {
              var _0x35e57a = "" + _0x49cbc9[0] + _0x2191df + ".zip";
              _0x268e87.downloader.downloadFile(_0x5a02e7 + "/" + _0x35e57a, {
                xhrResponseType: "arraybuffer"
              }, null, function (_0x47f4b4, _0x3088de) {
                _0x30cbdc(_0x3088de);
              });
            } else {
              _0x30cbdc(null);
            }
          });
        };
        _0x2fd91b.loadZip = function () {
          var _0x5220b4 = _0x4c80ef(_0x4f7e83().mark(function _0x5409ce(_0x5e1867, _0x48d483) {
            var _0x33d6f3;
            var _0x15b927;
            var _0x41fb8d;
            return _0x4f7e83().wrap(function (_0x3a63dd) {
              for (;;) {
                switch (_0x3a63dd.prev = _0x3a63dd.next) {
                  case 0:
                    _0x33d6f3 = _0x48d483 ? "." + _0x48d483 : "";
                    _0x3a63dd.next = 3;
                    return this.downloadZip(_0x5e1867, _0x33d6f3);
                  case 3:
                    null !== (_0x15b927 = _0x3a63dd.sent) && (_0x41fb8d = _0x5e1867.replace(/(.*?)\/assets\//, "assets/"), globalThis.fflate.unzip(new Uint8Array(_0x15b927), function (_0x2dca72, _0x124eed) {
                      _0x2dca72 ? console.warn("Unzip failed:", _0x2dca72.message) : Object.keys(_0x124eed).forEach(function (_0x13bbce) {
                        _0x370cd2.set(_0x5e1867 + "/" + _0x13bbce, _0x124eed[_0x13bbce]);
                        _0x370cd2.set(_0x41fb8d + "/" + _0x13bbce, _0x124eed[_0x13bbce]);
                      });
                    }));
                  case 5:
                  case "end":
                    return _0x3a63dd.stop();
                }
              }
            }, _0x5409ce, this);
          }));
          return function (_0x5b38a8, _0x12fc06) {
            return _0x5220b4.apply(this, arguments);
          };
        }();
        _0x2fd91b.init = function () {
          if (globalThis.fflate) {
            var _0x5d13f6 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                return this.ZipCacheUrl ? _0x190c5f.get(this.ZipCacheUrl) : _0x5d13f6.get.call(this);
              },
              set: function (_0x3033f2) {},
              configurable: true
            });
            var _0x57e318 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0xb1f1ab, _0x5e7732, _0x2ab24a, _0x46459c, _0x3f00b6) {
              _0x370cd2.has(_0x5e7732) && (this.ZipCacheUrl = _0x5e7732);
              return _0x57e318.apply(this, arguments);
            };
            var _0x1bca49 = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x4c80ef(_0x4f7e83().mark(function _0x49ebac(_0x3d833f) {
              var _0x9d2796;
              var _0x22fa62;
              var _0x4073ef;
              var _0x171748;
              var _0x2f6a62;
              var _0x2d7818;
              var _0x5c54c5;
              var _0x41b93a;
              var _0x35266d = arguments;
              return _0x4f7e83().wrap(function (_0x35e06f) {
                for (;;) {
                  switch (_0x35e06f.prev = _0x35e06f.next) {
                    case 0:
                      if (!this.ZipCacheUrl) {
                        _0x35e06f.next = 26;
                        break;
                      }
                      if (_0x190c5f.has(this.ZipCacheUrl)) {
                        _0x35e06f.next = 24;
                        break;
                      }
                      _0x9d2796 = this.responseType;
                      _0x22fa62 = _0x370cd2.get(this.ZipCacheUrl);
                      _0x4073ef = null;
                      _0x35e06f.t0 = _0x9d2796;
                      _0x35e06f.next = "arraybuffer" === _0x35e06f.t0 ? 8 : "json" === _0x35e06f.t0 ? 10 : "text" === _0x35e06f.t0 ? 14 : 17;
                      break;
                    case 8:
                      _0x4073ef = _0x22fa62.buffer ? _0x22fa62.buffer : _0x22fa62;
                      return _0x35e06f.abrupt("break", 18);
                    case 10:
                      _0x171748 = new TextDecoder();
                      _0x2f6a62 = _0x171748.decode(_0x22fa62);
                      _0x4073ef = JSON.parse(_0x2f6a62);
                      return _0x35e06f.abrupt("break", 18);
                    case 14:
                      _0x2d7818 = new TextDecoder();
                      _0x4073ef = _0x2d7818.decode(_0x22fa62);
                      return _0x35e06f.abrupt("break", 18);
                    case 17:
                      console.error("Unknown type in zipCache:", _0x9d2796);
                    case 18:
                      (_0x5c54c5 = _0x5c09be.get(this.ZipCacheUrl)) && (_0x190c5f.delete(this.ZipCacheUrl + "@version" + _0x5c54c5), _0x5c09be.delete(this.ZipCacheUrl));
                      _0x41b93a = performance.now();
                      _0x5c09be.set(this.ZipCacheUrl, _0x41b93a);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x41b93a;
                      _0x190c5f.set(this.ZipCacheUrl, _0x4073ef);
                    case 24:
                      this.onload();
                      return _0x35e06f.abrupt("return");
                    case 26:
                      return _0x35e06f.abrupt("return", _0x1bca49.apply(this, _0x35266d));
                    case 27:
                    case "end":
                      return _0x35e06f.stop();
                  }
                }
              }, _0x49ebac, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x570b0d;
      }();
      var _0x22c883 = globalThis.__zipBundleLoader;
      globalThis.fflate && !_0x22c883 && (_0x22c883 = new _0x5794b1(), globalThis.__zipBundleLoader = _0x22c883, _0x22c883.init());
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x12ed83;
      var _0x243be4 = ["game"];
      var _0x2a57ca = _0x4de0bd.ccclass;
      var _0x3a63af = _0x4de0bd.property;
      !function (_0x32a725) {
        _0x32a725[_0x32a725.CommonMainBundle = 0] = "CommonMainBundle";
        _0x32a725[_0x32a725.CommonBundle = 1] = "CommonBundle";
        _0x32a725[_0x32a725.OtherBundle = 2] = "OtherBundle";
        _0x32a725[_0x32a725.DefaultLangBundle = 3] = "DefaultLangBundle";
        _0x32a725[_0x32a725.LangTextBundle = 4] = "LangTextBundle";
        _0x32a725[_0x32a725.GameBundle = 5] = "GameBundle";
      }(_0x12ed83 || (_0x12ed83 = {}));
      var _0x548af7;
      var _0x3c94c3;
      var _0x51fc30 = "en";
      var _0x527673 = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220];
      var _0x2ee3a8 = [3];
      var _0x424a62 = {
        JILI: 0,
        TADA: 1,
        ACE_ROYALE: 2,
        JILI_START: 3,
        TADA_CASINO: 4,
        NONE: 5,
        UFA: 6
      };
      !function (_0x224207) {
        _0x224207[_0x224207.None = 0] = "None";
        _0x224207[_0x224207.AutoPlaySettingPanel = 1] = "AutoPlaySettingPanel";
        _0x224207[_0x224207.AutoPlaySettingPanel_DFI = 2] = "AutoPlaySettingPanel_DFI";
        _0x224207[_0x224207.AutoPlaySettingPanel_DFIII = 3] = "AutoPlaySettingPanel_DFIII";
        _0x224207[_0x224207.AutoPlaySettingPanel_BS = 4] = "AutoPlaySettingPanel_BS";
        _0x224207[_0x224207.AutoPlaySetting_AG2 = 5] = "AutoPlaySetting_AG2";
        _0x224207[_0x224207.AutoPlaySetting_FD = 6] = "AutoPlaySetting_FD";
        _0x224207[_0x224207.AutoPlaySettingPanel_MS = 7] = "AutoPlaySettingPanel_MS";
      }(_0x548af7 || (_0x548af7 = {}));
      (function (_0xe793ac) {
        _0xe793ac[_0xe793ac.None = 0] = "None";
        _0xe793ac[_0xe793ac.Dark = 1] = "Dark";
      })(_0x3c94c3 || (_0x3c94c3 = {}));
      var _0x43cdfd;
      var _0x24f574;
      var _0x392524;
      var _0xd88dc7;
      var _0x55f46b;
      var _0x419516;
      var _0x17f134;
      var _0x3bdbd7;
      var _0x521f09;
      var _0x2b75a9;
      var _0xabd37e;
      var _0x39ca04;
      _0x3fb695 = _0x2a57ca("StyleSetting");
      _0x2a06c2 = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否有骰子造型"
      });
      _0x2028d6 = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否有萬聖造型"
      });
      _0x14ee0c = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否有聖誕造型"
      });
      _0x336dcb = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否有OKBET廠商造型"
      });
      _0x3d9395 = _0x3a63af({
        type: _0x474ab1(_0x3c94c3),
        tooltip: "系列"
      });
      var _0x514db8 = _0x3fb695((_0xbec0b8 = _0x43ccc2((_0x514e1d = function () {
        _0x4d45d3(this, "HasDice", _0xbec0b8, this);
        _0x4d45d3(this, "HasHolloween", _0x33ae77, this);
        _0x4d45d3(this, "HasXmas", _0x33fd27, this);
        _0x4d45d3(this, "HasOkbet", _0x5a600c, this);
        _0x4d45d3(this, "Series", _0x5f0a23, this);
      }).prototype, "HasDice", [_0x2a06c2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x33ae77 = _0x43ccc2(_0x514e1d.prototype, "HasHolloween", [_0x2028d6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x33fd27 = _0x43ccc2(_0x514e1d.prototype, "HasXmas", [_0x14ee0c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5a600c = _0x43ccc2(_0x514e1d.prototype, "HasOkbet", [_0x336dcb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5f0a23 = _0x43ccc2(_0x514e1d.prototype, "Series", [_0x3d9395], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3c94c3.None;
        }
      }), _0x367cbf = _0x514e1d)) || _0x367cbf;
      _0x81e43 = _0x2a57ca("PlayTypeSetting");
      _0x3dd817 = _0x3a63af({
        type: _0x32f256,
        tooltip: "Match"
      });
      _0x53a6c5 = _0x3a63af({
        type: _0x32f256,
        tooltip: "Break"
      });
      var _0x126fae = _0x81e43((_0x59d60d = _0x43ccc2((_0x258c84 = function () {
        _0x4d45d3(this, "Match", _0x59d60d, this);
        _0x4d45d3(this, "Break", _0xede0b7, this);
      }).prototype, "Match", [_0x3dd817], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xede0b7 = _0x43ccc2(_0x258c84.prototype, "Break", [_0x53a6c5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x224001 = _0x258c84)) || _0x224001;
      _0x44c58d = _0x3a63af({
        type: _0x15baa6,
        tooltip: "遊戲縮寫(server位置)"
      });
      _0x5d09ab = _0x3a63af({
        type: String,
        tooltip: "遊戲主場prefab路徑"
      });
      _0x54c6fd = _0x3a63af({
        type: String,
        tooltip: "遊戲多語系圖片路徑"
      });
      _0x38cfb2 = _0x3a63af({
        type: String,
        tooltip: "遊戲ID"
      });
      _0x377e09 = _0x3a63af({
        type: String,
        tooltip: "Logo名稱，只要給到底線之前"
      });
      _0x29a7df = _0x3a63af({
        type: Boolean,
        tooltip: "鎖定橫版"
      });
      _0x51ee36 = _0x3a63af({
        type: Boolean,
        tooltip: "鎖定直版"
      });
      _0x1fec63 = _0x3a63af({
        type: Boolean,
        tooltip: "是否為街機"
      });
      _0x29a44a = _0x3a63af({
        type: _0x4188d4,
        tooltip: "不分語系LOGO"
      });
      _0x689abb = _0x3a63af({
        type: _0x310bc8,
        tooltip: "遊戲Logo合圖"
      });
      _0x5b27e4 = _0x3a63af({
        type: _0x15baa6,
        tooltip: "展示頁"
      });
      _0x5c17fd = _0x3a63af({
        type: String,
        tooltip: "敘述圖名稱"
      });
      _0x257f68 = _0x3a63af({
        type: _0x4188d4,
        tooltip: "特色圖"
      });
      _0x447892 = _0x3a63af({
        type: _0x4188d4,
        tooltip: "背景圖，0:直,1:橫"
      });
      _0x2cb06f = _0x3a63af({
        type: _0x4188d4,
        tooltip: "腳色"
      });
      _0x369b6c = _0x3a63af({
        type: Number,
        tooltip: "辣椒數"
      });
      _0xfedef9 = _0x3a63af({
        type: Number,
        tooltip: "最大贏分倍率"
      });
      _0x4b5481 = _0x3a63af({
        type: _0x474ab1(_0x548af7),
        tooltip: "自動玩介面"
      });
      _0x581eb8 = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否開啟晚3秒ShowGameScene進入遊戲"
      });
      _0x13acbd = _0x3a63af({
        type: _0x32f256,
        tooltip: "可以跳過前導動畫"
      });
      _0x2abb86 = _0x3a63af({
        type: _0x514db8,
        tooltip: "是否有其他特色樣式"
      });
      _0x296772 = _0x3a63af({
        type: _0x126fae,
        tooltip: "是否有其他特色樣式"
      });
      _0x6af604 = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否為遠程包"
      });
      _0x337980 = _0x3a63af({
        type: _0x32f256,
        tooltip: "是否是SSS版"
      });
      _0x12d782 = _0x3a63af({
        type: _0x15baa6,
        tooltip: "使用哪個遠程包版本"
      });
      _0x2a57ca((_0x5872ab = _0x43ccc2((_0x3e790e = function (_0x3b9839) {
        function _0xa66bcf() {
          for (var _0x319e95, _0x16f822 = arguments.length, _0x3ae60f = new Array(_0x16f822), _0x4955ee = 0; _0x4955ee < _0x16f822; _0x4955ee++) {
            _0x3ae60f[_0x4955ee] = arguments[_0x4955ee];
          }
          _0x319e95 = _0x3b9839.call.apply(_0x3b9839, [this].concat(_0x3ae60f)) || this;
          _0x4d45d3(_0x319e95, "m_gameShortName", _0x5872ab, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_scenePrefabPath", _0x536b58, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_gameImgPath", _0x773702, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_gameId", _0xb99618, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_logoName", _0x588c29, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isLockLandScope", _0x56782b, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isLockPortrait", _0x231d5a, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isStreet", _0x5ca55f, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_singleLogo", _0x4623b3, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_logoSpriteAtlas", _0x12f784, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_pagePrefabPaths", _0x2588a7, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_infoNames", _0x5d07da, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_featureSpriteFrames", _0x38ec61, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_bgSpriteFrames", _0xc84f2, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_characterSpriteFrame", _0x42756b, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_chilliNum", _0x59b2b4, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_maxWinNum", _0x3129b5, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_autoplayPanelNo", _0x4a87ed, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isWatting", _0x620a7f, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_skipIntro", _0x488d09, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_styleSetting", _0x39490a, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_playTypeSetting", _0x411308, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isRemote", _0x10de63, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_isSSS", _0x531c9b, _0xd5b437(_0x319e95));
          _0x4d45d3(_0x319e95, "m_ReomveVersion", _0x2982c8, _0xd5b437(_0x319e95));
          _0x319e95.m_startSceneTime = -1;
          _0x319e95.m_otherBundle = null;
          _0x319e95.m_commonBundle = null;
          _0x319e95.m_commonPath = "";
          _0x319e95.m_commonVersion = "";
          _0x319e95.m_langTextBundle = null;
          _0x319e95.m_defaultLangPath = "";
          _0x319e95.m_defaultLangVersion = "";
          _0x319e95.m_commonMainBundle = null;
          _0x319e95.m_gameBundle = null;
          _0x319e95.m_pagePrefabs = [];
          _0x319e95.m_apiId = 0;
          _0x319e95.m_isTaDa = false;
          _0x319e95.m_viewNode = null;
          _0x319e95.m_lang = "en";
          _0x319e95.m_loadOldType = true;
          _0x319e95.m_isForceLite = false;
          return _0x319e95;
        }
        _0x254dc4(_0xa66bcf, _0x3b9839);
        var _0xba3ab7 = _0xa66bcf.prototype;
        _0xba3ab7.onLoad = function () {
          this.m_isTaDa = this.IsTada();
          this.Config();
          this.Log(100);
          null == window.SetProgressInterval || window.SetProgressInterval(60);
          "109" === this.m_gameId && (_0x268e87.downloader.maxConcurrency = 12, _0x268e87.downloader.maxRequestsPerFrame = 12);
        };
        _0xba3ab7.start = function () {
          var _0x4eff8b = _0x4c80ef(_0x4f7e83().mark(function _0x4c082a() {
            return _0x4f7e83().wrap(function (_0x3cc24f) {
              for (;;) {
                switch (_0x3cc24f.prev = _0x3cc24f.next) {
                  case 0:
                    this.m_startSceneTime = this.m_isWatting ? Date.now() : -1;
                    _0x3cc24f.next = 3;
                    return this.LoadVersion("game");
                  case 3:
                  case "end":
                    return _0x3cc24f.stop();
                }
              }
            }, _0x4c082a, this);
          }));
          return function () {
            return _0x4eff8b.apply(this, arguments);
          };
        }();
        _0xba3ab7.Config = function () {
          _0x4e4844.prototype.fillBuffers = function (_0x13ad33) {
            this._renderFlag && _0x13ad33._pOpacity > 0 && this._render(_0x13ad33);
          };
        };
        _0xba3ab7.update = function () {};
        _0xba3ab7.LoadZip = function () {
          var _0x2c4676 = _0x4c80ef(_0x4f7e83().mark(function _0x226218(_0x2ea7f6, _0x3d3560, _0x45270d, _0x55d777) {
            var _0x10cd0c;
            var _0x2dd707;
            var _0x5bf8f7;
            return _0x4f7e83().wrap(function (_0x59f47a) {
              for (;;) {
                switch (_0x59f47a.prev = _0x59f47a.next) {
                  case 0:
                    if (undefined === _0x45270d && (_0x45270d = ""), undefined === _0x55d777 && (_0x55d777 = ""), _0x22c883) {
                      _0x59f47a.next = 4;
                      break;
                    }
                    return _0x59f47a.abrupt("return");
                  case 4:
                    if (!(_0x22c883.loadedZipNames.indexOf(_0x2ea7f6) >= 0)) {
                      _0x59f47a.next = 6;
                      break;
                    }
                    return _0x59f47a.abrupt("return");
                  case 6:
                    if (_0x3d3560 || -1 !== _0x243be4.indexOf(_0x2ea7f6)) {
                      _0x59f47a.next = 8;
                      break;
                    }
                    return _0x59f47a.abrupt("return");
                  case 8:
                    _0x10cd0c = _0x45270d;
                    _0x2dd707 = _0x55d777;
                    _0x3d3560 || (_0x5bf8f7 = _0x5bdd2f.querySettings(_0x18695b.Category.ASSETS, "bundleVers"), _0x10cd0c = "./assets/" + _0x2ea7f6, _0x2dd707 = _0x5bf8f7[_0x2ea7f6]);
                    _0x22c883.loadedZipNames.push(_0x2ea7f6);
                    _0x59f47a.next = 13;
                    return _0x22c883.loadZip(_0x10cd0c, _0x2dd707);
                  case 13:
                  case "end":
                    return _0x59f47a.stop();
                }
              }
            }, _0x226218);
          }));
          return function (_0x5b11a6, _0x8c977, _0x4cb043, _0x680d40) {
            return _0x2c4676.apply(this, arguments);
          };
        }();
        _0xba3ab7.LoadVersion = function () {
          var _0x594e76 = _0x4c80ef(_0x4f7e83().mark(function _0x5bc08b(_0x21c9e1) {
            var _0x5d3f98;
            var _0x3eff0f;
            var _0x437954;
            var _0x292cd2;
            var _0x1f0a4c;
            var _0x20eadf;
            var _0x1b5e2a;
            var _0x5bb090;
            var _0x4bec7e;
            var _0x1353c8;
            var _0x27f049;
            var _0x510035;
            var _0x33b56d;
            var _0xbedff9;
            var _0x232241;
            var _0x326325;
            var _0x335448;
            var _0x2a4ccb;
            var _0x2bfe37;
            var _0xd481ac;
            var _0x81c6c6;
            var _0x3b32cb;
            var _0x1497ae;
            var _0xb6ee12;
            return _0x4f7e83().wrap(function (_0x4756a8) {
              for (;;) {
                switch (_0x4756a8.prev = _0x4756a8.next) {
                  case 0:
                    _0x5d3f98 = globalThis.LobbyData;
                    _0x3eff0f = this.m_isTaDa ? "tada" : "jili";
                    this.m_commonPath = "assets/common/Astt/" + _0x3eff0f;
                    _0x437954 = "assets/common/Astt/" + _0x3eff0f + "Main";
                    _0x292cd2 = "assets/common/Astt/other";
                    _0x1f0a4c = "AsttText/AsttText/en";
                    this.m_defaultLangPath = "AsttText/AsttText/en";
                    _0x20eadf = "assets/" + _0x21c9e1;
                    this.m_commonVersion = "";
                    _0x1b5e2a = "";
                    _0x5bb090 = "";
                    this.m_defaultLangVersion = "";
                    _0x4bec7e = "";
                    _0x1353c8 = "";
                    _0x27f049 = "";
                    _0x510035 = "";
                    try {
                      undefined !== _0x5d3f98 && (console.error("lobbyData", JSON.stringify(_0x5d3f98)), _0x20eadf = _0x5d3f98.bundleDomin + _0x21c9e1, _0x1353c8 = _0x5d3f98.versionJson[_0x21c9e1], this.m_commonPath = _0x5d3f98.bundleDomin + _0x3eff0f, this.m_commonVersion = _0x5d3f98.versionJson[_0x3eff0f], _0x292cd2 = _0x5d3f98.bundleDomin + "other", _0x4bec7e = _0x5d3f98.versionJson.other);
                    } catch (_0x1e7593) {}
                    if (!this.m_isRemote) {
                      _0x4756a8.next = 55;
                      break;
                    }
                    _0x33b56d = /(\d+)\.(\d+)/;
                    _0xbedff9 = _0x56a3dc.match(_0x33b56d);
                    _0x232241 = _0xbedff9[1] + "." + _0xbedff9[2];
                    _0x326325 = "https://" + window.location.host + "/";
                    _0x335448 = "astarte";
                    _0x2a4ccb = "web-mobile";
                    _0x2dc040.isNative && (_0x2a4ccb = "android", _0x232241 = "app" + _0x232241);
                    this.m_ReomveVersion.length > 0 && (_0x2a4ccb = _0x2a4ccb + "-" + this.m_ReomveVersion);
                    _0x5d3f98 && (_0x326325 = _0x5d3f98.cdnHost);
                    this.m_isSSS && (_0x335448 = "astarte3");
                    (_0x2bfe37 = this.GetLinkParameterByName("remoteVersion")) && _0x2bfe37.length > 0 && (_0x232241 = "" + _0x2bfe37 + _0xbedff9[1] + "." + _0xbedff9[2]);
                    _0x4756a8.next = 33;
                    return new Promise(function (_0x272f3f) {
                      _0x268e87.loadRemote("" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/versions.json?" + (Date.now() / 600).toFixed(0), {
                        reload: true,
                        cacheAsset: false,
                        cacheEnabled: false
                      }, _0x4c80ef(_0x4f7e83().mark(function _0x2d63b7(_0xcdb81b, _0x2aa1af) {
                        return _0x4f7e83().wrap(function (_0x2e80f5) {
                          for (;;) {
                            switch (_0x2e80f5.prev = _0x2e80f5.next) {
                              case 0:
                                _0x272f3f(_0x2aa1af);
                              case 1:
                              case "end":
                                return _0x2e80f5.stop();
                            }
                          }
                        }, _0x2d63b7);
                      })));
                    });
                  case 33:
                    if (_0xd481ac = _0x4756a8.sent, _0x81c6c6 = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/src/chunks/bundle." + _0xd481ac.json["bundle.js"] + ".js", !_0x2dc040.isNative) {
                      _0x4756a8.next = 40;
                      break;
                    }
                    _0x4756a8.next = 38;
                    return new Promise(function (_0x501335, _0x5e3804) {
                      _0x268e87.downloader.downloadScript(_0x81c6c6, {
                        systemJs: true
                      }, function (_0x3babfc) {
                        _0x3babfc ? (console.error("load bundle error", _0x3babfc), _0x5e3804(_0x3babfc)) : _0x501335();
                      });
                    });
                  case 38:
                    _0x4756a8.next = 42;
                    break;
                  case 40:
                    _0x4756a8.next = 42;
                    return System.import(_0x81c6c6);
                  case 42:
                    _0x292cd2 = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/other";
                    _0x4bec7e = _0xd481ac.json.other;
                    this.m_commonPath = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/" + _0x3eff0f;
                    this.m_commonVersion = _0xd481ac.json[_0x3eff0f];
                    _0x437954 = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/" + _0x3eff0f + "Main";
                    _0x1b5e2a = _0xd481ac.json[_0x3eff0f + "Main"];
                    this.m_lang = this.GetLanguage();
                    _0x1f0a4c = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/" + this.m_lang;
                    _0x5bb090 = _0xd481ac.json[this.m_lang];
                    this.m_defaultLangPath = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/en";
                    this.m_defaultLangVersion = _0xd481ac.json.en;
                    _0x27f049 = "" + _0x326325 + _0x335448 + "/" + _0x232241 + "/" + _0x2a4ccb + "/assets/extra";
                    _0x510035 = _0xd481ac.json.extra;
                  case 55:
                    if (("" != _0x1b5e2a && null != _0x1b5e2a || !this.m_isRemote) && (this.m_loadOldType = false), !this.m_loadOldType) {
                      _0x4756a8.next = 71;
                      break;
                    }
                    _0x4756a8.next = 59;
                    return Promise.all([this.LoadZip(_0x3eff0f, this.m_isRemote, this.m_commonPath, this.m_commonVersion), this.LoadZip(_0x21c9e1, false)]);
                  case 59:
                    (_0x3b32cb = [this.LoadBundleSync(_0x292cd2, _0x4bec7e), this.LoadBundleSync(_0x20eadf, _0x1353c8, undefined, {
                      bundleName: undefined !== _0x5d3f98 ? this.m_gameShortName + _0x21c9e1 : undefined
                    })]).push(this.LoadBundleSync(_0x437954, _0x1b5e2a), this.LoadBundleSync(_0x1f0a4c, _0x5bb090));
                    _0x4756a8.next = 63;
                    return Promise.all(_0x3b32cb);
                  case 63:
                    _0x1497ae = _0x4756a8.sent;
                    this.m_otherBundle = _0x1497ae[0];
                    this.m_gameBundle = _0x1497ae[1];
                    this.m_commonMainBundle = _0x1497ae[2];
                    this.m_langTextBundle = _0x1497ae[3];
                    this.CheckBundles();
                    _0x4756a8.next = 76;
                    break;
                  case 71:
                    _0xb6ee12 = [this.LoadBundleSync(_0x27f049, _0x510035), this.LoadBundleSync(_0x437954, _0x1b5e2a, _0x12ed83.CommonMainBundle), this.LoadBundleSync(_0x292cd2, _0x4bec7e, _0x12ed83.OtherBundle), this.LoadBundleSync(_0x1f0a4c, _0x5bb090, _0x12ed83.LangTextBundle), this.LoadZip(_0x3eff0f + "Main", this.m_isRemote, _0x437954, _0x1b5e2a), this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, _0x12ed83.CommonBundle)];
                    this.m_isForceLite ? _0xb6ee12.push(this.LoadBundleSync("assets/gameLite", "", _0x12ed83.GameBundle)) : this.m_isTaDa || _0xb6ee12.push(this.LoadBundleSync("assets/game", "", _0x12ed83.GameBundle));
                    _0x4756a8.next = 75;
                    return Promise.all(_0xb6ee12);
                  case 75:
                    this.CheckBundles();
                  case 76:
                  case "end":
                    return _0x4756a8.stop();
                }
              }
            }, _0x5bc08b, this);
          }));
          return function (_0x5d185c) {
            return _0x594e76.apply(this, arguments);
          };
        }();
        _0xba3ab7.CheckBundles = function () {
          this.m_loadOldType ? this.m_otherBundle && this.m_gameBundle && this.m_commonBundle && this.LoadIntroResources() : this.m_commonMainBundle && this.m_otherBundle && this.m_langTextBundle && (!this.m_isForceLite || this.m_isForceLite && this.m_gameBundle) && this.LoadIntroResources();
        };
        _0xba3ab7.LoadBundle = function (_0xccd1e8, _0x4ca5df, _0x31ddb5, _0x27cdcb) {
          var _0xb41578 = this;
          _0x27cdcb || (_0x27cdcb = {});
          _0x27cdcb.version = _0x4ca5df;
          _0x268e87.loadBundle(_0xccd1e8, _0x27cdcb, function (_0x2bbb08, _0x23026e) {
            _0x2bbb08 ? _0xb41578.LoadBundle(_0xccd1e8, _0x4ca5df, _0x31ddb5) : _0x31ddb5(_0x23026e);
          });
        };
        _0xba3ab7.LoadBundleSync = function (_0x188f44, _0x3d0b50, _0x4d5f05, _0x4817cd) {
          var _0x217fe8 = this;
          return new Promise(function (_0x5163e8) {
            _0x217fe8.LoadBundle(_0x188f44, _0x3d0b50, function (_0x4afbb9) {
              if (undefined !== _0x4d5f05) {
                switch (_0x4d5f05) {
                  case _0x12ed83.CommonMainBundle:
                    _0x217fe8.m_commonMainBundle = _0x4afbb9;
                    break;
                  case _0x12ed83.CommonBundle:
                    _0x217fe8.m_commonBundle = _0x4afbb9;
                    break;
                  case _0x12ed83.OtherBundle:
                    _0x217fe8.m_otherBundle = _0x4afbb9;
                    break;
                  case _0x12ed83.LangTextBundle:
                    _0x217fe8.m_langTextBundle = _0x4afbb9;
                    break;
                  case _0x12ed83.GameBundle:
                    _0x217fe8.m_gameBundle = _0x4afbb9;
                }
              }
              _0x5163e8(_0x4afbb9);
            }, _0x4817cd);
          });
        };
        _0xba3ab7.LoadIntroResources = function () {
          if ("109" == this.m_gameId && (window.DiffTime961 = Date.now() - window.StartTime), this.LoadIntroView(), this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
            for (var _0x5aa543 = 0; _0x5aa543 < this.m_pagePrefabPaths.length; _0x5aa543++) {
              this.LoadIntroCell(_0x5aa543);
            }
          }
        };
        _0xba3ab7.LoadIntroView = function () {
          var _0x1722c5 = this;
          var _0x263640 = "Astt/%s/Intro/Prefab/IntroView";
          _0x263640 = this.m_isTaDa ? _0x5db7f7.formatStr(_0x263640, "framework_americas") : _0x5db7f7.formatStr(_0x263640, "framework");
          var _0x29e418 = this.m_commonMainBundle;
          this.m_loadOldType && (_0x29e418 = this.m_commonBundle);
          _0x29e418.load(_0x263640, _0x358410, function (_0x43db7b, _0x54bbb4) {
            null == window.SetProgressInterval || window.SetProgressInterval(_0x43db7b / _0x54bbb4 * 40 + 60);
          }, function (_0x4bdedc, _0x1ea421) {
            if (_0x4bdedc) {
              console.error("LoadIntroView ERROR", _0x4bdedc);
              return void _0x1722c5.LoadIntroView();
            }
            _0x1722c5.m_viewNode = _0x44fc7c(_0x1ea421);
            _0x1722c5.node.addChild(_0x1722c5.m_viewNode);
            _0x1722c5.CheckIntroResources();
          });
        };
        _0xba3ab7.LoadIntroCell = function (_0x58ba67) {
          var _0x18ba6c = this;
          this.m_gameBundle.load(this.m_pagePrefabPaths[_0x58ba67], _0x358410, function (_0x5e7192, _0x1458c8) {
            _0x5e7192 ? _0x18ba6c.LoadIntroCell(_0x58ba67) : (_0x18ba6c.m_pagePrefabs[_0x58ba67] = _0x1458c8, _0x18ba6c.CheckIntroResources());
          });
        };
        _0xba3ab7.CheckIntroResources = function () {
          if (this.m_viewNode) {
            if (this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
              for (var _0x1fbeff = 0; _0x1fbeff < this.m_pagePrefabPaths.length; _0x1fbeff++) {
                if (!this.m_pagePrefabs[_0x1fbeff]) {
                  return;
                }
              }
            }
            this.Complete();
          }
        };
        _0xba3ab7.Complete = function () {
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
            lstZipBundleName: _0x243be4,
            IsRemote: this.m_isRemote,
            LoadLessRes: false,
            SkipIntro: this.m_skipIntro,
            IsSSS: this.m_isSSS
          });
        };
        _0xba3ab7.GetLanguage = function () {
          var _0x571832;
          var _0x3a226f;
          var _0x383e82;
          var _0x3b5f74 = this.GetLinkParameterByName("lang") || this.GetLinkParameterByName("ln");
          if (null != (_0x571832 = window) && null != (_0x3a226f = _0x571832.location) && null != (_0x383e82 = _0x3a226f.href) && _0x383e82.includes("/sss-") && (_0x3b5f74 = "en-US"), _0x3b5f74) {
            var _0x4f32cb = this.FormatLang(_0x3b5f74);
            if ("" !== _0x4f32cb) {
              return _0x4f32cb;
            }
          }
          if (!_0x2dc040.isNative) {
            var _0x30edba = this.FormatLang(navigator.language);
            if ("" !== _0x30edba && null != _0x30edba) {
              return _0x30edba;
            }
          }
          return _0x51fc30;
        };
        _0xba3ab7.IsTada = function () {
          var _0x46234b = (this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("");
          var _0x47d0c3 = Number(this.GetLinkParameterByName("apiId"));
          var _0xe59e55 = -1 !== _0x46234b.search("tada");
          if (!isNaN(_0x47d0c3)) {
            this.m_apiId = Number(_0x47d0c3);
            this.m_isForceLite = -1 !== _0x243be4.indexOf("gameLite") && _0x527673.includes(this.m_apiId);
            for (var _0x21890a = 0; _0x21890a < _0x2ee3a8.length; _0x21890a++) {
              if (_0x47d0c3 === _0x2ee3a8[_0x21890a]) {
                _0xe59e55 = true;
                break;
              }
            }
          }
          var _0x2d6e8d = this.GetLinkParameterByName("tadaSkin");
          _0x2d6e8d && "1" === _0x2d6e8d && (_0xe59e55 = true);
          var _0xc1c1f6 = this.GetLinkParameterByName("skin");
          !_0xc1c1f6 || _0xc1c1f6 != _0x424a62.TADA.toString() && _0xc1c1f6 != _0x424a62.TADA_CASINO.toString() || (_0xe59e55 = true);
          return _0xe59e55;
        };
        _0xba3ab7.GetLinkParameterByName = function (_0x32ba62, _0x519414) {
          if (undefined === _0x519414 && (_0x519414 = null), !_0x519414) {
            if ("undefined" != typeof LobbyData) {
              try {
                "" === (_0x519414 = LobbyData.url) && _0x86c17b("No URL!");
              } catch (_0x5474d9) {
                _0x5474d9(JSON.stringify(_0x5474d9));
              }
            } else {
              _0x519414 = this.CheckReplayUrlAndDecode();
            }
          }
          _0x32ba62 = _0x32ba62.replace(/[[\]]/g, "\\$&");
          var _0x3711f6 = new RegExp("[?&]" + _0x32ba62 + "(=([^&#]*)|&|#|$)").exec(_0x519414);
          return _0x3711f6 ? _0x3711f6[2] ? decodeURIComponent(_0x3711f6[2].replace(/\+/g, " ")) : "" : null;
        };
        _0xba3ab7.CheckReplayUrlAndDecode = function () {
          var _0x4cf071 = window.location.href;
          var _0x24c838 = this.GetLinkParameterByName("replaydata", _0x4cf071);
          if (!_0x24c838) {
            return _0x4cf071;
          }
          for (var _0x24f17f = "0".charCodeAt(0), _0x45d34e = "9".charCodeAt(0), _0xab4093 = "a".charCodeAt(0), _0x1b2f62 = "z".charCodeAt(0), _0x5ad7ca = "A".charCodeAt(0), _0x3b563f = "Z".charCodeAt(0), _0x569339 = "", _0x8fa019 = 0; _0x8fa019 < _0x24c838.length; _0x8fa019++) {
            var _0x20ef10 = _0x24c838.charCodeAt(_0x8fa019);
            _0x20ef10 >= _0x24f17f && _0x20ef10 <= _0x45d34e ? (_0x20ef10 = _0x45d34e - (_0x20ef10 - _0x24f17f), _0x569339 += String.fromCharCode(_0x20ef10)) : _0x20ef10 >= _0xab4093 && _0x20ef10 <= _0x1b2f62 && _0x8fa019 % 2 == 0 ? (_0x20ef10 = _0x1b2f62 - (_0x20ef10 - _0xab4093), _0x569339 += String.fromCharCode(_0x20ef10)) : _0x20ef10 >= _0x5ad7ca && _0x20ef10 <= _0x3b563f && _0x8fa019 % 3 == 0 ? (_0x20ef10 = _0x3b563f - (_0x20ef10 - _0x5ad7ca), _0x569339 += String.fromCharCode(_0x20ef10)) : _0x569339 += String.fromCharCode(_0x20ef10);
          }
          var _0x3ca7d3 = _0x4cf071.split("replaydata=" + _0x24c838);
          _0x3ca7d3.join("");
          return _0x3ca7d3 + atob(_0x569339);
        };
        _0xba3ab7.Log = function (_0x1e0bc6) {
          if (!_0x2dc040.isNative) {
            var _0x2ee6e0 = "https://" + window.location.host + "/";
            if (-1 == _0x2ee6e0.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x2ee6e0)) {
              var _0x19098f = this.GetLinkParameterByName("apiId");
              var _0x14f85f = this.GetLinkParameterByName("ssoKey");
              var _0x2e71c8 = "https://" + (this.GetLinkParameterByName("domain_platform") || this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/trigger?";
              _0x2e71c8 += "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" + this.m_gameId + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x1e0bc6 + "&EventStatus=0&SSOKey=" + _0x14f85f + "&CreateTime=" + new Date().toISOString() + "&ApiId=" + _0x19098f;
              this.Send(_0x2e71c8);
              window.DiffTime960 = Date.now() - window.StartTime;
            }
          }
        };
        _0xba3ab7.Send = function (_0x5b7d78) {
          var _0x35d504 = {
            Accept: "application/json, text/javascript, text/plain"
          };
          var _0x54667c = new XMLHttpRequest();
          _0x54667c.open("GET", _0x5b7d78, true);
          _0x35d504 && Object.keys(_0x35d504).forEach(function (_0x59e745) {
            return _0x54667c.setRequestHeader(_0x59e745, _0x35d504[_0x59e745]);
          });
          _0x54667c.timeout = 5000;
          _0x54667c.onload = function () {};
          _0x54667c.onerror = function () {};
          _0x54667c.ontimeout = function () {};
          _0x54667c.send();
        };
        _0xba3ab7.FormatLang = function (_0x5b76e0) {
          return (_0x5b76e0 = _0x5b76e0.toLocaleLowerCase()) == "cn" || _0x5b76e0 == "zh-CN".toLocaleLowerCase() ? "cn" : _0x5b76e0 == "en" || _0x5b76e0 == "en-US".toLocaleLowerCase() ? "en" : _0x5b76e0 == "th" || _0x5b76e0 == "th-TH".toLocaleLowerCase() ? "th" : _0x5b76e0 == "vn" || _0x5b76e0 == "vi-VN".toLocaleLowerCase() ? "vn" : _0x5b76e0 == "id" || _0x5b76e0 == "id-ID".toLocaleLowerCase() ? "id" : _0x5b76e0 == "hi" || _0x5b76e0 == "hi-IN".toLocaleLowerCase() ? "hi" : _0x5b76e0 == "ta" || _0x5b76e0 == "ta-IN".toLocaleLowerCase() ? "ta" : _0x5b76e0 == "mm" || _0x5b76e0 == "my-MM".toLocaleLowerCase() ? "mm" : _0x5b76e0 == "jp" || _0x5b76e0 == "ja-JP".toLocaleLowerCase() ? "jp" : _0x5b76e0 == "ms" || _0x5b76e0 == "ms-MY".toLocaleLowerCase() ? "ms" : _0x5b76e0 == "ko" || _0x5b76e0 == "ko-KR".toLocaleLowerCase() ? "ko" : _0x5b76e0 == "bn" || _0x5b76e0 == "bn-IN".toLocaleLowerCase() ? "bn" : _0x5b76e0 == "es" || _0x5b76e0 == "es-AR".toLocaleLowerCase() ? "es" : _0x5b76e0 == "pt" || _0x5b76e0 == "pt-BR".toLocaleLowerCase() ? "pt" : _0x5b76e0 == "it" || _0x5b76e0 == "it-IT".toLocaleLowerCase() ? "it" : _0x5b76e0 == "se" || _0x5b76e0 == "sv-SE".toLocaleLowerCase() ? "se" : _0x5b76e0 == "de" || _0x5b76e0 == "de-DE".toLocaleLowerCase() ? "de" : _0x5b76e0 == "da" || _0x5b76e0 == "da-DK".toLocaleLowerCase() ? "da" : _0x5b76e0 == "ro" || _0x5b76e0 == "ro-RO".toLocaleLowerCase() ? "ro" : _0x5b76e0 == "nl" || _0x5b76e0 == "nl-NL".toLocaleLowerCase() ? "nl" : _0x5b76e0 == "trTR".toLocaleLowerCase() || _0x5b76e0 == "tr-TR".toLocaleLowerCase() ? "trTR" : _0x5b76e0 == "ruRU".toLocaleLowerCase() || _0x5b76e0 == "ru-RU".toLocaleLowerCase() ? "ruRU" : _0x5b76e0 == "grGR".toLocaleLowerCase() || _0x5b76e0 == "gr-GR".toLocaleLowerCase() ? "grGR" : _0x5b76e0 == "frFR".toLocaleLowerCase() || _0x5b76e0 == "fr-FR".toLocaleLowerCase() ? "frFR" : "";
        };
        return _0xa66bcf;
      }(_0x46f5c0)).prototype, "m_gameShortName", [_0x44c58d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x536b58 = _0x43ccc2(_0x3e790e.prototype, "m_scenePrefabPath", [_0x5d09ab], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x773702 = _0x43ccc2(_0x3e790e.prototype, "m_gameImgPath", [_0x54c6fd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0xb99618 = _0x43ccc2(_0x3e790e.prototype, "m_gameId", [_0x38cfb2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x588c29 = _0x43ccc2(_0x3e790e.prototype, "m_logoName", [_0x377e09], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x56782b = _0x43ccc2(_0x3e790e.prototype, "m_isLockLandScope", [_0x29a7df], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x231d5a = _0x43ccc2(_0x3e790e.prototype, "m_isLockPortrait", [_0x51ee36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5ca55f = _0x43ccc2(_0x3e790e.prototype, "m_isStreet", [_0x1fec63], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4623b3 = _0x43ccc2(_0x3e790e.prototype, "m_singleLogo", [_0x29a44a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x12f784 = _0x43ccc2(_0x3e790e.prototype, "m_logoSpriteAtlas", [_0x689abb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2588a7 = _0x43ccc2(_0x3e790e.prototype, "m_pagePrefabPaths", [_0x5b27e4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x5d07da = _0x43ccc2(_0x3e790e.prototype, "m_infoNames", [_0x5c17fd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x38ec61 = _0x43ccc2(_0x3e790e.prototype, "m_featureSpriteFrames", [_0x257f68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0xc84f2 = _0x43ccc2(_0x3e790e.prototype, "m_bgSpriteFrames", [_0x447892], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x42756b = _0x43ccc2(_0x3e790e.prototype, "m_characterSpriteFrame", [_0x2cb06f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x59b2b4 = _0x43ccc2(_0x3e790e.prototype, "m_chilliNum", [_0x369b6c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x3129b5 = _0x43ccc2(_0x3e790e.prototype, "m_maxWinNum", [_0xfedef9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x4a87ed = _0x43ccc2(_0x3e790e.prototype, "m_autoplayPanelNo", [_0x4b5481], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x548af7.None;
        }
      }), _0x620a7f = _0x43ccc2(_0x3e790e.prototype, "m_isWatting", [_0x581eb8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x488d09 = _0x43ccc2(_0x3e790e.prototype, "m_skipIntro", [_0x13acbd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x39490a = _0x43ccc2(_0x3e790e.prototype, "m_styleSetting", [_0x2abb86], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x514db8();
        }
      }), _0x411308 = _0x43ccc2(_0x3e790e.prototype, "m_playTypeSetting", [_0x296772], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x126fae();
        }
      }), _0x10de63 = _0x43ccc2(_0x3e790e.prototype, "m_isRemote", [_0x6af604], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x531c9b = _0x43ccc2(_0x3e790e.prototype, "m_isSSS", [_0x337980], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2982c8 = _0x43ccc2(_0x3e790e.prototype, "m_ReomveVersion", [_0x12d782], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x550af5 = _0x3e790e));
      _0x554aa3._RF.pop();
      _0x554aa3._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      var _0x327c05 = _0x4de0bd.ccclass;
      var _0x16e116 = _0x4de0bd.property;
      var _0x22156a = function (_0xbbf0a2, _0x287541, _0x1d0763, _0x43d988, _0x226cf7, _0x120dd9) {
        this.name = _0xbbf0a2;
        this.height = _0x287541;
        this.width = _0x1d0763;
        this.ratio = _0x43d988;
        this.statusHeight = _0x226cf7;
        this.homeHeight = _0x120dd9;
      };
      var _0x4f07c9 = [new _0x22156a("iPhone 6.5-inch", 896, 414, 3, 44, 34), new _0x22156a("iPhone 6.1-inch", 896, 414, 2, 44, 34), new _0x22156a("iPhone 5.8-inch", 812, 375, 3, 44, 34), new _0x22156a("iPhone 5.5-inch", 736, 414, 3, 18, 0), new _0x22156a("iPhone 4.7-inch", 667, 375, 2, 20, 0), new _0x22156a("iPhone 4-inch", 568, 320, 2, 20, 0), new _0x22156a("iPhone 3.5-inch", 480, 320, 2, 20, 0), new _0x22156a("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0), new _0x22156a("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0), new _0x22156a("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0), new _0x22156a("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0), new _0x22156a("iPad", 1024, 768, 1, 20, 0), new _0x22156a("iPad Mini Retina", 1024, 768, 2, 20, 0), new _0x22156a("iPad Mini", 1024, 768, 1, 20, 0)];
      var _0x497bf1 = "mask";
      var _0x75a231 = "mask_close_tip";
      var _0xe07d47 = "mask_close";
      var _0x418981 = "bar";
      var _0x3d72f3 = {
        tw: ["滑動無效時, 請點擊此處進入遊戲. ❎", "請解除豎排方向鎖定, 並將手機水平放置."],
        cn: ["滑动无效时, 请点击此处进入游戏. ❎", "请解除竖排方向锁定, 并将手机水平放置."],
        th: ["เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎", "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้"],
        vn: ["Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎", "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình."],
        id: ["Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎", "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal."],
        mm: ["When the slide is invalid, please click here. ❎", "Please unlock the vertical direction and place the phone horizontally."],
        jp: ["スライドで入れない場合は、ここをタップしてください。 ❎", "垂直固定を解除し、端末を水平方向に置いてください。"],
        en: ["If swiping does not work, please tap here. ❎", "Please unlock screen rotation and hold the phone horizontally."]
      };
      var _0x5ad8c8 = [1131];
      var _0x33d947 = [1864, 1002];
      _0x43cdfd = _0x16e116(Boolean);
      _0x24f574 = _0x16e116(Boolean);
      _0x392524 = _0x16e116(Boolean);
      _0xd88dc7 = _0x16e116(Boolean);
      _0x55f46b = _0x16e116(Number);
      _0x327c05((_0x3bdbd7 = _0x43ccc2((_0x17f134 = function (_0x1e3e51) {
        function _0x2a9dd9() {
          for (var _0x13f2a4, _0x320cf9 = arguments.length, _0x142b24 = new Array(_0x320cf9), _0x3c990b = 0; _0x3c990b < _0x320cf9; _0x3c990b++) {
            _0x142b24[_0x3c990b] = arguments[_0x3c990b];
          }
          _0x13f2a4 = _0x1e3e51.call.apply(_0x1e3e51, [this].concat(_0x142b24)) || this;
          _0x4d45d3(_0x13f2a4, "isLandscape", _0x3bdbd7, _0xd5b437(_0x13f2a4));
          _0x4d45d3(_0x13f2a4, "isPortrait", _0x521f09, _0xd5b437(_0x13f2a4));
          _0x4d45d3(_0x13f2a4, "isIOS", _0x2b75a9, _0xd5b437(_0x13f2a4));
          _0x4d45d3(_0x13f2a4, "isAndroid", _0xabd37e, _0xd5b437(_0x13f2a4));
          _0x4d45d3(_0x13f2a4, "android_Apiid", _0x39ca04, _0xd5b437(_0x13f2a4));
          _0x13f2a4.m_mask = null;
          _0x13f2a4.m_isScrolling = false;
          _0x13f2a4.m_isblock = false;
          _0x13f2a4.m_scrollInterval = undefined;
          _0x13f2a4.m_scrollTimeOut = undefined;
          _0x13f2a4.m_backGround = null;
          _0x13f2a4.m_isLandscape = true;
          return _0x13f2a4;
        }
        _0x254dc4(_0x2a9dd9, _0x1e3e51);
        var _0x62820a = _0x2a9dd9.prototype;
        _0x62820a.onLoad = function () {
          _0x2dc040.isNative || this.Init();
        };
        _0x62820a.GetDeviceName = function () {
          if (_0x2dc040.os === _0x2dc040.OS.IOS) {
            var _0x550005 = this.GetiOSDevice();
            if (_0x550005) {
              return _0x550005.name;
            }
          } else {
            if (_0x2dc040.os === _0x2dc040.OS.ANDROID) {
              var _0x4af43e = /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g.exec(navigator.userAgent);
              if (_0x4af43e && _0x4af43e.length > 2) {
                return _0x4af43e[2].split(" Build")[0];
              }
            }
          }
          return "unknown";
        };
        _0x62820a.CreateHtmlTag = function () {
          if (!this.m_backGround) {
            this.node.active = true;
            var _0x5d0cd4 = document.body;
            _0x5d0cd4.style.overflow = "visible";
            var _0x2049e9 = document.getElementById("Cocos3dGameContainer");
            _0x2049e9.style.overflow = "hidden";
            _0x2049e9.style.position = "fixed";
            var _0x2a7b77 = document.createElement("div");
            _0x2a7b77.id = _0x418981;
            _0x2a7b77.style.position = "absolute";
            _0x2a7b77.style.height = "100vh";
            var _0x20c1f3 = document.createElement("div");
            _0x20c1f3.id = _0x497bf1;
            _0x20c1f3.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            _0x20c1f3.style.height = "150vh";
            _0x20c1f3.style.width = "100vw";
            _0x20c1f3.style.zIndex = "99";
            _0x20c1f3.style.display = "none";
            _0x20c1f3.style.position = "absolute";
            _0x20c1f3.style.top = "0%";
            _0x20c1f3.style.left = "0%";
            this.m_backGround = _0x20c1f3;
            var _0x35fa76 = document.createElement("div");
            _0x35fa76.id = _0x75a231;
            _0x35fa76.style.width = "70vw";
            _0x35fa76.style.top = "28vh";
            _0x35fa76.style.left = "50vw";
            _0x35fa76.style.transform = "translate(-50%, -50%)";
            _0x35fa76.style.fontSize = "18px";
            _0x35fa76.style.fontWeight = "bold";
            _0x35fa76.style.color = "#FFFFFF";
            _0x35fa76.style.position = "fixed";
            var _0xe2fdcc = document.createElement("div");
            _0xe2fdcc.style.top = "16vh";
            _0xe2fdcc.style.left = "50vw";
            _0xe2fdcc.style.transform = "translate(-50%, -50%)";
            _0xe2fdcc.style.position = "fixed";
            var _0x3d13c7 = document.createElement("div");
            _0x3d13c7.id = _0xe07d47;
            _0x3d13c7.style.width = "90vw";
            _0x3d13c7.style.fontSize = "24px";
            _0x3d13c7.style.fontWeight = "bold";
            _0x3d13c7.style.color = "#EEE8AA";
            _0x3d13c7.style.wordWrap = "break-word";
            var _0x4576c3 = document.createElement("div");
            _0x4576c3.style.fontSize = "48px";
            _0x4576c3.style.fontWeight = "bold";
            _0x4576c3.style.color = "#EEE8AA";
            var _0x144472 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            _0x144472.style.width = "150px";
            _0x144472.style.height = "150px";
            _0x144472.style.position = "fixed";
            _0x144472.style.top = "75vh";
            _0x144472.style.left = "50vw";
            _0x144472.style.transform = "translate(-50%, -50%)";
            _0x144472.style.animationDuration = "2s";
            _0x144472.style.animationName = "fullscreen-swipe";
            _0x144472.style.animationIterationCount = "infinite";
            var _0x5e3197 = document.createElement("style");
            var _0x3bfe99 = document.createTextNode("@keyframes fullscreen-swipe {from { top:80% }to { top:50% }}");
            _0x5e3197.appendChild(_0x3bfe99);
            _0x144472.appendChild(_0x5e3197);
            _0x144472.setAttribute("viewBox", "0 0 547.371 547.371");
            var _0x52fdaf = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _0x52fdaf.setAttribute("fill", "#FFFFFF");
            _0x52fdaf.setAttribute("d", "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z");
            _0x5d0cd4.appendChild(_0x20c1f3);
            _0x20c1f3.appendChild(_0x35fa76);
            _0x20c1f3.appendChild(_0xe2fdcc);
            _0x144472.appendChild(_0x52fdaf);
            _0x20c1f3.appendChild(_0x144472);
            _0xe2fdcc.appendChild(_0x3d13c7);
            _0xe2fdcc.appendChild(_0x4576c3);
            _0x5d0cd4.appendChild(_0x2a7b77);
          }
        };
        _0x62820a.Init = function () {
          var _0x4114f9 = this;
          var _0x13ced6 = false;
          "undefined" != typeof LobbyData && (_0x13ced6 = LobbyData.pwa);
          var _0x3ad1a6 = Math.floor(Number(this.GetLinkParameterByName("apiId")));
          if (this.isPortrait ? this.m_isblock = _0x5ad8c8.indexOf(_0x3ad1a6) >= 0 : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(_0x3ad1a6) >= 0 && (this.isAndroid = false), this.m_isblock || (this.m_isblock = _0x33d947.indexOf(_0x3ad1a6) >= 0), !_0x13ced6 && !this.m_isblock) {
            if (this.AddGameViewMask(), this.isIOS = false, _0x2dc040.os == _0x2dc040.OS.IOS && 0 == this.IsWebview() && this.isIOS) {
              if (this.CreateHtmlTag(), this.SetCloseContent(), this.m_backGround.style.display = "inline", this.SetShowMask(), 1 == this.IsChrome()) {
                var _0x9d5cdb = this.GetiOSDevice();
                if (null != _0x9d5cdb) {
                  var _0x3343b5 = 0.99 * (screen.height - _0x9d5cdb.statusHeight - _0x9d5cdb.homeHeight - 20);
                  var _0x4583a2 = 0.99 * (screen.width - _0x9d5cdb.statusHeight - 20);
                  document.body.onresize = function () {
                    (window.innerHeight >= window.innerWidth ? _0x3343b5 : _0x4583a2) <= window.innerHeight ? _0x4114f9.HideMask() : _0x4114f9.ShowMask();
                  };
                  window.addEventListener("scroll", function () {
                    return _0x4114f9.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  this.m_backGround.addEventListener("touchend", function () {
                    return _0x4114f9.ScrollReset();
                  });
                } else {
                  this.HideMask();
                }
              } else {
                var _0x437715 = document.body.onresize;
                document.body.onresize = function () {
                  _0x437715 && _0x437715(null, null);
                  var _0x4e01ff = document.documentElement.scrollWidth;
                  var _0x5041a6 = document.documentElement.scrollHeight;
                  var _0x435beb = _0x4e01ff > _0x5041a6;
                  document.getElementById(_0x418981).clientHeight == window.innerHeight ? _0x4114f9.HideMask() : _0x4114f9.SetShowMask(_0x435beb);
                  window.addEventListener("scroll", function () {
                    return _0x4114f9.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  _0x4114f9.m_backGround.addEventListener("touchend", function () {
                    return _0x4114f9.ScrollReset();
                  });
                  _0x4114f9.m_isLandscape = _0x4e01ff > _0x5041a6;
                };
              }
            } else {
              if (_0x2dc040.os == _0x2dc040.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid) {
                if (_0x2dc040.browserType == _0x2dc040.BrowserType.MOBILE_QQ || _0x2dc040.browserType == _0x2dc040.BrowserType.UC) {} else {
                  var _0x25f7de = function () {
                    _0x4114f9.HasFullscreen() && !_0x4114f9.IsFullscreen() && (_0x4114f9.m_mask.active = true);
                  };
                  document.body.onresize = _0x25f7de;
                  _0x25f7de();
                }
              }
            }
          }
        };
        _0x62820a.SetShowMask = function (_0x5ba0c0) {
          if (undefined === _0x5ba0c0 && (_0x5ba0c0 = undefined), this.IsIOS15orOver()) {
            if (undefined === _0x5ba0c0) {
              var _0x457ee5 = document.documentElement.scrollWidth;
              var _0x7c61ab = document.documentElement.scrollHeight;
              this.m_isLandscape = _0x457ee5 > _0x7c61ab;
              this.m_isLandscape ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden";
            } else {
              document.getElementById(_0x418981).clientHeight;
              window.innerHeight;
              _0x5ba0c0 === this.m_isLandscape && document.getElementById(_0x418981).clientHeight === window.innerHeight || (_0x5ba0c0 ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden");
            }
          } else {
            this.ShowMask();
          }
        };
        _0x62820a.SetCloseContent = function () {
          var _0x8308c0 = this;
          var _0x2a089f = this.GetLang("lang");
          _0x2a089f = this.ChangeLang(_0x2a089f);
          var _0x403c11 = document.getElementById(_0xe07d47);
          var _0x3d45f5 = this.isLandscape ? document.getElementById(_0x75a231) : null;
          _0x3d72f3[_0x2a089f] ? (_0x403c11.textContent = _0x3d72f3[_0x2a089f][0], _0x3d45f5 && (_0x3d45f5.textContent = _0x3d72f3[_0x2a089f][1])) : (_0x403c11.textContent = _0x3d72f3.en[0], _0x3d45f5 && (_0x3d45f5.textContent = _0x3d72f3.en[1]));
          _0x403c11.onclick || (_0x403c11.onclick = function () {
            _0x8308c0.HideMask();
          });
        };
        _0x62820a.GetLang = function (_0x3f8585) {
          var _0x11fab3 = _0x2dc040.localStorage.getItem("LobbyLanguage");
          if (!_0x11fab3 || "" == _0x11fab3) {
            if (-1 != (_0x11fab3 = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?")) {
              for (var _0x2d5c51 = _0x11fab3.split("?")[1].split("&"), _0x4bc221 = 0; _0x4bc221 < _0x2d5c51.length; _0x4bc221++) {
                if (_0x2d5c51[_0x4bc221].split("=")[0] == _0x3f8585) {
                  return _0x2d5c51[_0x4bc221].split("=")[1];
                }
              }
            }
            return "en";
          }
          return _0x11fab3;
        };
        _0x62820a.ChangeLang = function (_0xf1ef1a) {
          switch (_0xf1ef1a) {
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
        _0x62820a.ShowMask = function () {
          for (var _0x4e406d = this, _0xdbf469 = document.getElementById("Cocos3dGameContainer").getElementsByTagName("div"), _0x587224 = 0, _0x160735 = 0; _0x160735 < _0xdbf469.length; _0x160735++) {
            var _0x2cc773 = _0xdbf469[_0x160735].getElementsByTagName("iframe");
            if (_0x2cc773 && _0x2cc773.length > 0) {
              _0x587224 = _0x160735;
              break;
            }
          }
          var _0x23c17d = _0xdbf469[_0x587224];
          _0x23c17d && "hidden" !== _0x23c17d.style.visibility || (this.m_backGround.style.visibility = "visible", this.m_mask && (this.m_mask.active = true), window.scrollTo(0, 0), this.m_scrollInterval && clearInterval(this.m_scrollInterval), this.m_scrollInterval = setInterval(function () {
            _0x4e406d.m_isScrolling && (_0x4e406d.m_isScrolling = false, _0x4e406d.ScrollReset());
          }, 250));
        };
        _0x62820a.ScrollReset = function () {
          var _0x350fc5 = this;
          window.scrollTo(0, 0);
          this.m_scrollTimeOut && clearTimeout(this.m_scrollTimeOut);
          this.m_scrollTimeOut = setTimeout(function () {
            window.scrollTo(0, 0);
            clearInterval(_0x350fc5.m_scrollInterval);
            _0x350fc5.m_scrollInterval = null;
          }, 250);
        };
        _0x62820a.HideMask = function () {
          var _0x16391b = this;
          window.scrollTo(0, 0);
          this.m_backGround && (this.m_backGround.style.visibility = "hidden");
          this.scheduleOnce(function () {
            _0x16391b.m_mask && (_0x16391b.m_mask.active = false);
          }, 0);
        };
        _0x62820a.AddGameViewMask = function () {
          var _0x153fc8 = this;
          var _0x128904 = _0x12a2eb.getScene();
          this.m_mask || _0x128904.getChildByName("ScrollForMask") || _0x2dc040.browserType == _0x2dc040.BrowserType.FIREFOX ? !this.m_mask && _0x128904.getChildByName("ScrollForMask") && (this.m_mask = _0x2a6ff7("ScrollForMask")) : (this.m_mask = new _0x5235d2(), this.m_mask.name = "ScrollForMask", this.m_mask.addComponent(_0x3eb7ef).setContentSize(new _0x4dc93f(2000, 2000)), this.m_mask.addComponent(_0x489450), this.m_mask.active = false, _0x128904.addChild(this.m_mask), this.m_mask.setSiblingIndex(_0x128904.children.length), this.m_mask.on(_0x5235d2.EventType.TOUCH_END, function () {
            if (_0x2dc040.os == _0x2dc040.OS.IOS && 0 == _0x153fc8.IsWebview()) {
              var _0x58003a = _0x153fc8.m_backGround;
              _0x58003a && "hidden" == _0x58003a.style.visibility && (_0x153fc8.m_mask.active = false);
            } else {
              _0x2dc040.os == _0x2dc040.OS.ANDROID && 0 == _0x153fc8.IsWebview() && _0x153fc8.Fullscreen();
            }
          }));
        };
        _0x62820a.IsWebview = function () {
          var _0x310b58 = navigator.userAgent;
          var _0xa0c999 = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")", "ig");
          return Boolean(_0x310b58.match(_0xa0c999));
        };
        _0x62820a.IsChrome = function () {
          return /CriOS/.test(navigator.userAgent);
        };
        _0x62820a.GetiOSDevice = function () {
          for (var _0x4d49f0, _0x5f4b23 = _0x76adb7(_0x4f07c9); !(_0x4d49f0 = _0x5f4b23()).done;) {
            var _0x4bbd53 = _0x4d49f0.value;
            if (screen.height === _0x4bbd53.height && screen.width === _0x4bbd53.width && window.devicePixelRatio === _0x4bbd53.ratio) {
              return _0x4bbd53;
            }
          }
          return null;
        };
        _0x62820a.HasFullscreen = function () {
          return null != (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
        };
        _0x62820a.IsFullscreen = function () {
          return null != (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        };
        _0x62820a.Fullscreen = function () {
          try {
            var _0x5a5820 = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen;
            var _0x321d96 = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
            if (this.HasFullscreen()) {
              if (this.IsFullscreen()) {
                _0x321d96.call(document);
              } else {
                try {
                  var _0x58c041 = _0x5a5820.call(document.documentElement);
                  _0x58c041 instanceof Promise && _0x58c041.catch(function () {});
                } catch (_0x47ec69) {}
              }
            } else {
              console.log("not support fullscreen.");
            }
            this.m_mask.active = false;
          } catch (_0x5d8887) {
            this.m_mask.active = false;
          }
        };
        _0x62820a.GetLinkParameterByName = function (_0x34f87e) {
          var _0x2fe981 = window.location.href;
          _0x34f87e = _0x34f87e.replace(/[[]]/g, "\\$&");
          var _0x66a723 = new RegExp("[?&]" + _0x34f87e + "(=([^&#]*)|&|#|$)").exec(_0x2fe981);
          return _0x66a723 ? _0x66a723[2] ? decodeURIComponent(_0x66a723[2].replace(/\+/g, " ")) : "" : null;
        };
        _0x62820a.IsIOS15orOver = function () {
          return _0x2dc040.os == _0x2dc040.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
        };
        _0x62820a.IsIOS15Version = function (_0x12d1cb) {
          return _0x2dc040.os == _0x2dc040.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + _0x12d1cb);
        };
        return _0x2a9dd9;
      }(_0x46f5c0)).prototype, "isLandscape", [_0x43cdfd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x521f09 = _0x43ccc2(_0x17f134.prototype, "isPortrait", [_0x24f574], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2b75a9 = _0x43ccc2(_0x17f134.prototype, "isIOS", [_0x392524], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0xabd37e = _0x43ccc2(_0x17f134.prototype, "isAndroid", [_0xd88dc7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x39ca04 = _0x43ccc2(_0x17f134.prototype, "android_Apiid", [_0x55f46b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x419516 = _0x17f134));
      _0x554aa3._RF.pop();
    }
  };
});
(function (_0xd7bdf8) {
  _0xd7bdf8("virtual:///prerequisite-imports/" + window.mainfullhouse3, "chunks:///" + window.mainfullhouse3 + ".js");
})(function (_0x1dbde3, _0x4f73d2) {
  System.register(_0x1dbde3, [_0x4f73d2], function (_0x32071c, _0x179892) {
    return {
      setters: [function (_0x38978c) {
        var _0x1f07aa = {};
        for (var _0x370d49 in _0x38978c) {
          if (_0x370d49 !== "default" && _0x370d49 !== "__esModule") {
            _0x1f07aa[_0x370d49] = _0x38978c[_0x370d49];
          }
        }
        _0x32071c(_0x1f07aa);
      }],
      execute: function () {}
    };
  });
});