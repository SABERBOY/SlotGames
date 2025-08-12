System.register("chunks:///main.js", ["cc"], function (_0x5a8f85, _0x495666) {
  "use strict";

  var _0xa10b8c;
  var _0xc9f92c;
  var _0x2af1b6;
  var _0x2ea746;
  var _0xe0f0a6;
  var _0x4fa226;
  var _0x42d118;
  var _0x1a25c9;
  var _0x5aac4b;
  var _0x2f2b2d;
  var _0x42ff5a;
  var _0x51e4e3;
  var _0x4ed45d;
  var _0x5cf7a3;
  var _0x598810;
  var _0x380901;
  var _0xb9245;
  var _0x60819;
  var _0x17a860;
  var _0x507581;
  var _0x556148;
  var _0x45bc58;
  var _0x41f03c;
  var _0x3c3cbe;
  var _0xf2083;
  var _0x57c330;
  var _0x37b4ff;
  var _0x3d339d;
  var _0x1360e3;
  var _0x1210d7;
  var _0x3d6b8d;
  var _0x15ae44;
  var _0x2265bd;
  var _0x49fc57;
  var _0xffea4b;
  var _0x2b432b;
  var _0x2899bc;
  var _0x28d1f6;
  var _0x298948;
  var _0x247b94;
  var _0x166cb0;
  var _0x12c007;
  var _0x24d3d0;
  var _0x1e8b43;
  var _0x518eac;
  var _0x5dab17;
  var _0x1083c6;
  var _0x5e8512;
  var _0x2eb9f3;
  var _0x374045;
  var _0x4332c3;
  var _0x413bc0;
  var _0x4e0e61;
  var _0x33ef43;
  var _0xa95894;
  var _0x4333e8;
  var _0x3f684b;
  var _0x3e39a6;
  var _0x1e9a42;
  var _0x403246;
  var _0x4c38e3;
  var _0x58a89f;
  var _0x2b6286;
  var _0x1d5d85;
  var _0xfd55b7;
  var _0x41441d;
  var _0x574fac;
  var _0x5e4c28;
  var _0x215a2c;
  var _0x1b4727;
  return {
    setters: [function (_0x52ebe3) {
      _0xa10b8c = _0x52ebe3.cclegacy;
      _0xc9f92c = _0x52ebe3.warn;
      _0x2af1b6 = _0x52ebe3.v3;
      _0x2ea746 = _0x52ebe3.v2;
      _0xe0f0a6 = _0x52ebe3.macro;
      _0x4fa226 = _0x52ebe3.Enum;
      _0x42d118 = _0x52ebe3._decorator;
      _0x1a25c9 = _0x52ebe3.sp;
      _0x5aac4b = _0x52ebe3.Component;
      _0x2f2b2d = _0x52ebe3.Sprite;
      _0x42ff5a = _0x52ebe3.Label;
      _0x51e4e3 = _0x52ebe3.tween;
      _0x4ed45d = _0x52ebe3.UIOpacity;
      _0x5cf7a3 = _0x52ebe3.Node;
      _0x598810 = _0x52ebe3.CCFloat;
      _0x380901 = _0x52ebe3.CCInteger;
      _0xb9245 = _0x52ebe3.log;
      _0x60819 = _0x52ebe3.director;
      _0x17a860 = _0x52ebe3.Director;
      _0x507581 = _0x52ebe3.Vec3;
      _0x556148 = _0x52ebe3.UIRenderer;
      _0x45bc58 = _0x52ebe3.UITransform;
      _0x41f03c = _0x52ebe3.Animation;
      _0x3c3cbe = _0x52ebe3.error;
      _0xf2083 = _0x52ebe3.RichText;
      _0x57c330 = _0x52ebe3.CCBoolean;
      _0x37b4ff = _0x52ebe3.Tween;
      _0x3d339d = _0x52ebe3.Color;
      _0x1360e3 = _0x52ebe3.JsonAsset;
      _0x1210d7 = _0x52ebe3.math;
      _0x3d6b8d = _0x52ebe3.SpriteFrame;
      _0x15ae44 = _0x52ebe3.instantiate;
      _0x2265bd = _0x52ebe3.Size;
      _0x49fc57 = _0x52ebe3.Prefab;
      _0xffea4b = _0x52ebe3.SpriteAtlas;
      _0x2b432b = _0x52ebe3.Button;
      _0x2899bc = _0x52ebe3.sys;
      _0x28d1f6 = _0x52ebe3.input;
      _0x298948 = _0x52ebe3.Input;
      _0x247b94 = _0x52ebe3.KeyCode;
      _0x166cb0 = _0x52ebe3.screen;
      _0x12c007 = _0x52ebe3.view;
      _0x24d3d0 = _0x52ebe3.ResolutionPolicy;
      _0x1e8b43 = _0x52ebe3.ccenum;
      _0x518eac = _0x52ebe3.EventHandler;
      _0x5dab17 = _0x52ebe3.assetManager;
      _0x1083c6 = _0x52ebe3.lerp;
      _0x5e8512 = _0x52ebe3.NodeEventType;
      _0x2eb9f3 = _0x52ebe3.TransformBit;
      _0x374045 = _0x52ebe3.CCString;
      _0x4332c3 = _0x52ebe3.Material;
      _0x413bc0 = _0x52ebe3.Gradient;
      _0x4e0e61 = _0x52ebe3.v4;
      _0x33ef43 = _0x52ebe3.Texture2D;
      _0xa95894 = _0x52ebe3.clamp01;
      _0x4333e8 = _0x52ebe3.color;
      _0x3f684b = _0x52ebe3.EffectAsset;
      _0x3e39a6 = _0x52ebe3.ImageAsset;
      _0x1e9a42 = _0x52ebe3.AnimationClip;
      _0x403246 = _0x52ebe3.ParticleSystem2D;
      _0x4c38e3 = _0x52ebe3.Vec2;
      _0x58a89f = _0x52ebe3.TweenSystem;
      _0x2b6286 = _0x52ebe3.ScrollView;
      _0x1d5d85 = _0x52ebe3.isValid;
      _0xfd55b7 = _0x52ebe3.CCClass;
      _0x41441d = _0x52ebe3.js;
      _0x574fac = _0x52ebe3.settings;
      _0x5e4c28 = _0x52ebe3.Settings;
      _0x215a2c = _0x52ebe3.VERSION;
      _0x1b4727 = _0x52ebe3.find;
    }],
    execute: function () {
      function _0x41e40d() {
        _0x41e40d = function () {
          return _0x3c7b17;
        };
        var _0x3c7b17 = {
          wrap: _0x4a8b58
        };
        var _0x501b7c = Object.prototype;
        var _0x3a2f12 = _0x501b7c.hasOwnProperty;
        var _0x9c1e4a = "function" == typeof Symbol ? Symbol : {};
        var _0x361354 = _0x9c1e4a.iterator || "@@iterator";
        var _0x1b1009 = _0x9c1e4a.asyncIterator || "@@asyncIterator";
        var _0x2113f1 = _0x9c1e4a.toStringTag || "@@toStringTag";
        function _0x59546b(_0x2321d4, _0x192aba, _0x1649c9) {
          Object.defineProperty(_0x2321d4, _0x192aba, {
            value: _0x1649c9,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return _0x2321d4[_0x192aba];
        }
        try {
          _0x59546b({}, "");
        } catch (_0x22fead) {
          _0x59546b = function (_0x4344e0, _0x13dc89, _0x1d1cad) {
            return _0x4344e0[_0x13dc89] = _0x1d1cad;
          };
        }
        function _0x4a8b58(_0x236538, _0xf9f89a, _0x433785, _0x3a18a6) {
          var _0xfbea8 = _0xf9f89a && _0xf9f89a.prototype instanceof _0x5cc1c8 ? _0xf9f89a : _0x5cc1c8;
          var _0x137de5 = Object.create(_0xfbea8.prototype);
          var _0x5b914d = new _0x43d57e(_0x3a18a6 || []);
          _0x137de5._invoke = function (_0x4c23dd, _0x3c1373, _0x169720) {
            var _0x3e3416 = "suspendedStart";
            return function (_0xb9528, _0x5cb2ca) {
              if ("executing" === _0x3e3416) {
                throw new Error("Generator is already running");
              }
              if ("completed" === _0x3e3416) {
                if ("throw" === _0xb9528) {
                  throw _0x5cb2ca;
                }
                return _0x2c0bc1();
              }
              for (_0x169720.method = _0xb9528, _0x169720.arg = _0x5cb2ca;;) {
                var _0x16cf42 = _0x169720.delegate;
                if (_0x16cf42) {
                  var _0x582428 = _0x4a5fd9(_0x16cf42, _0x169720);
                  if (_0x582428) {
                    if (_0x582428 === _0x4c8ef1) {
                      continue;
                    }
                    return _0x582428;
                  }
                }
                if ("next" === _0x169720.method) {
                  _0x169720.sent = _0x169720._sent = _0x169720.arg;
                } else {
                  if ("throw" === _0x169720.method) {
                    if ("suspendedStart" === _0x3e3416) {
                      throw _0x3e3416 = "completed", _0x169720.arg;
                    }
                    _0x169720.dispatchException(_0x169720.arg);
                  } else {
                    "return" === _0x169720.method && _0x169720.abrupt("return", _0x169720.arg);
                  }
                }
                _0x3e3416 = "executing";
                var _0x457dba = _0x413918(_0x4c23dd, _0x3c1373, _0x169720);
                if ("normal" === _0x457dba.type) {
                  if (_0x3e3416 = _0x169720.done ? "completed" : "suspendedYield", _0x457dba.arg === _0x4c8ef1) {
                    continue;
                  }
                  return {
                    value: _0x457dba.arg,
                    done: _0x169720.done
                  };
                }
                "throw" === _0x457dba.type && (_0x3e3416 = "completed", _0x169720.method = "throw", _0x169720.arg = _0x457dba.arg);
              }
            };
          }(_0x236538, _0x433785, _0x5b914d);
          return _0x137de5;
        }
        function _0x413918(_0x29fe9e, _0x1e5574, _0x52dbdc) {
          try {
            return {
              type: "normal",
              arg: _0x29fe9e.call(_0x1e5574, _0x52dbdc)
            };
          } catch (_0xc5ab92) {
            return {
              type: "throw",
              arg: _0xc5ab92
            };
          }
        }
        var _0x4c8ef1 = {};
        function _0x5cc1c8() {}
        function _0x20cc36() {}
        function _0x1dfcba() {}
        var _0x5c9092 = {};
        _0x59546b(_0x5c9092, _0x361354, function () {
          return this;
        });
        var _0x2b73e2 = Object.getPrototypeOf;
        var _0x140231 = _0x2b73e2 && _0x2b73e2(_0x2b73e2(_0x4400be([])));
        _0x140231 && _0x140231 !== _0x501b7c && _0x3a2f12.call(_0x140231, _0x361354) && (_0x5c9092 = _0x140231);
        _0x1dfcba.prototype = _0x5cc1c8.prototype = Object.create(_0x5c9092)
        var _0x48be3b = _0x1dfcba.prototype;
        function _0x269ecd(_0x3c08e6) {
          ["next", "throw", "return"].forEach(function (_0x4b1de2) {
            _0x59546b(_0x3c08e6, _0x4b1de2, function (_0x1790e1) {
              return this._invoke(_0x4b1de2, _0x1790e1);
            });
          });
        }
        function _0x5e93c5(_0xfd6e32, _0x236039) {
          function _0x2656d4(_0x36a564, _0x32f156, _0x1c1d53, _0x3e06de) {
            var _0x14b1f3 = _0x413918(_0xfd6e32[_0x36a564], _0xfd6e32, _0x32f156);
            if ("throw" !== _0x14b1f3.type) {
              var _0x2c35c6 = _0x14b1f3.arg;
              var _0x2e68ce = _0x2c35c6.value;
              return _0x2e68ce && "object" == typeof _0x2e68ce && _0x3a2f12.call(_0x2e68ce, "__await") ? _0x236039.resolve(_0x2e68ce.__await).then(function (_0x46d4b6) {
                _0x2656d4("next", _0x46d4b6, _0x1c1d53, _0x3e06de);
              }, function (_0x460077) {
                _0x2656d4("throw", _0x460077, _0x1c1d53, _0x3e06de);
              }) : _0x236039.resolve(_0x2e68ce).then(function (_0x2f92fd) {
                _0x2c35c6.value = _0x2f92fd;
                _0x1c1d53(_0x2c35c6);
              }, function (_0x3e4480) {
                return _0x2656d4("throw", _0x3e4480, _0x1c1d53, _0x3e06de);
              });
            }
            _0x3e06de(_0x14b1f3.arg);
          }
          var _0x5490d5;
          this._invoke = function (_0xfe9b4a, _0x2c9665) {
            function _0x4ea481() {
              return new _0x236039(function (_0x24ee34, _0x3c2034) {
                _0x2656d4(_0xfe9b4a, _0x2c9665, _0x24ee34, _0x3c2034);
              });
            }
            return _0x5490d5 = _0x5490d5 ? _0x5490d5.then(_0x4ea481, _0x4ea481) : _0x4ea481();
          };
        }
        function _0x4a5fd9(_0x430ab1, _0x1af50b) {
          var _0x113d5c = _0x430ab1.iterator[_0x1af50b.method];
          if (undefined === _0x113d5c) {
            if (_0x1af50b.delegate = null, "throw" === _0x1af50b.method) {
              if (_0x430ab1.iterator.return && (_0x1af50b.method = "return", _0x1af50b.arg = undefined, _0x4a5fd9(_0x430ab1, _0x1af50b), "throw" === _0x1af50b.method)) {
                return _0x4c8ef1;
              }
              _0x1af50b.method = "throw";
              _0x1af50b.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return _0x4c8ef1;
          }
          var _0x504e35 = _0x413918(_0x113d5c, _0x430ab1.iterator, _0x1af50b.arg);
          if ("throw" === _0x504e35.type) {
            _0x1af50b.method = "throw";
            _0x1af50b.arg = _0x504e35.arg;
            _0x1af50b.delegate = null;
            return _0x4c8ef1;
          }
          var _0x1ce3a7 = _0x504e35.arg;
          return _0x1ce3a7 ? _0x1ce3a7.done ? (_0x1af50b[_0x430ab1.resultName] = _0x1ce3a7.value, _0x1af50b.next = _0x430ab1.nextLoc, "return" !== _0x1af50b.method && (_0x1af50b.method = "next", _0x1af50b.arg = undefined), _0x1af50b.delegate = null, _0x4c8ef1) : _0x1ce3a7 : (_0x1af50b.method = "throw", _0x1af50b.arg = new TypeError("iterator result is not an object"), _0x1af50b.delegate = null, _0x4c8ef1);
        }
        function _0x5bb749(_0x4517c5) {
          var _0x54f720 = {
            tryLoc: _0x4517c5[0]
          };
          1 in _0x4517c5 && (_0x54f720.catchLoc = _0x4517c5[1]);
          2 in _0x4517c5 && (_0x54f720.finallyLoc = _0x4517c5[2], _0x54f720.afterLoc = _0x4517c5[3]);
          this.tryEntries.push(_0x54f720);
        }
        function _0x31ff48(_0x26e45d) {
          var _0x202d0b = _0x26e45d.completion || {};
          _0x202d0b.type = "normal";
          delete _0x202d0b.arg;
          _0x26e45d.completion = _0x202d0b;
        }
        function _0x43d57e(_0x326a8e) {
          this.tryEntries = [{
            tryLoc: "root"
          }];
          _0x326a8e.forEach(_0x5bb749, this);
          this.reset(true);
        }
        function _0x4400be(_0x205706) {
          if (_0x205706) {
            var _0x35f981 = _0x205706[_0x361354];
            if (_0x35f981) {
              return _0x35f981.call(_0x205706);
            }
            if ("function" == typeof _0x205706.next) {
              return _0x205706;
            }
            if (!isNaN(_0x205706.length)) {
              var _0x1063d4 = -1;
              var _0x1f9fc9 = function _0xa729d6() {
                for (; ++_0x1063d4 < _0x205706.length;) {
                  if (_0x3a2f12.call(_0x205706, _0x1063d4)) {
                    _0xa729d6.value = _0x205706[_0x1063d4];
                    _0xa729d6.done = false;
                    return _0xa729d6;
                  }
                }
                _0xa729d6.value = undefined;
                _0xa729d6.done = true;
                return _0xa729d6;
              };
              return _0x1f9fc9.next = _0x1f9fc9;
            }
          }
          return {
            next: _0x2c0bc1
          };
        }
        function _0x2c0bc1() {
          return {
            value: undefined,
            done: true
          };
        }
        _0x20cc36.prototype = _0x1dfcba;
        _0x59546b(_0x48be3b, "constructor", _0x1dfcba);
        _0x59546b(_0x1dfcba, "constructor", _0x20cc36);
        _0x20cc36.displayName = _0x59546b(_0x1dfcba, _0x2113f1, "GeneratorFunction");
        _0x3c7b17.isGeneratorFunction = function (_0x4cef8a) {
          var _0x38d839 = "function" == typeof _0x4cef8a && _0x4cef8a.constructor;
          return !!_0x38d839 && (_0x38d839 === _0x20cc36 || "GeneratorFunction" === (_0x38d839.displayName || _0x38d839.name));
        };
        _0x3c7b17.mark = function (_0x552452) {
          Object.setPrototypeOf ? Object.setPrototypeOf(_0x552452, _0x1dfcba) : (_0x552452.__proto__ = _0x1dfcba, _0x59546b(_0x552452, _0x2113f1, "GeneratorFunction"));
          _0x552452.prototype = Object.create(_0x48be3b);
          return _0x552452;
        };
        _0x3c7b17.awrap = function (_0x4f80ab) {
          return {
            __await: _0x4f80ab
          };
        };
        _0x269ecd(_0x5e93c5.prototype);
        _0x59546b(_0x5e93c5.prototype, _0x1b1009, function () {
          return this;
        });
        _0x3c7b17.AsyncIterator = _0x5e93c5;
        _0x3c7b17.async = function (_0x645ad, _0xce9729, _0x2fecfe, _0x3b5b09, _0x49d848) {
          undefined === _0x49d848 && (_0x49d848 = Promise);
          var _0x1647a6 = new _0x5e93c5(_0x4a8b58(_0x645ad, _0xce9729, _0x2fecfe, _0x3b5b09), _0x49d848);
          return _0x3c7b17.isGeneratorFunction(_0xce9729) ? _0x1647a6 : _0x1647a6.next().then(function (_0x5706eb) {
            return _0x5706eb.done ? _0x5706eb.value : _0x1647a6.next();
          });
        };
        _0x269ecd(_0x48be3b);
        _0x59546b(_0x48be3b, _0x2113f1, "Generator");
        _0x59546b(_0x48be3b, _0x361354, function () {
          return this;
        });
        _0x59546b(_0x48be3b, "toString", function () {
          return "[object Generator]";
        });
        _0x3c7b17.keys = function (_0x486cbd) {
          var _0x1f466b = [];
          for (var _0x278b7a in _0x486cbd) _0x1f466b.push(_0x278b7a);
          _0x1f466b.reverse();
          return function _0x1ff547() {
            for (; _0x1f466b.length;) {
              var _0x15ea79 = _0x1f466b.pop();
              if (_0x15ea79 in _0x486cbd) {
                _0x1ff547.value = _0x15ea79;
                _0x1ff547.done = false;
                return _0x1ff547;
              }
            }
            _0x1ff547.done = true;
            return _0x1ff547;
          };
        };
        _0x3c7b17.values = _0x4400be;
        _0x43d57e.prototype = {
          constructor: _0x43d57e,
          reset: function (_0x2347e9) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = false, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(_0x31ff48), !_0x2347e9) {
              for (var _0x438208 in this) "t" === _0x438208.charAt(0) && _0x3a2f12.call(this, _0x438208) && !isNaN(+_0x438208.slice(1)) && (this[_0x438208] = undefined);
            }
          },
          stop: function () {
            this.done = true;
            var _0x41664b = this.tryEntries[0].completion;
            if ("throw" === _0x41664b.type) {
              throw _0x41664b.arg;
            }
            return this.rval;
          },
          dispatchException: function (_0x3cbcd7) {
            if (this.done) {
              throw _0x3cbcd7;
            }
            var _0x44234e = this;
            function _0xdb0971(_0x3614de, _0x5c6bf2) {
              _0x1e8a68.type = "throw";
              _0x1e8a68.arg = _0x3cbcd7;
              _0x44234e.next = _0x3614de;
              _0x5c6bf2 && (_0x44234e.method = "next", _0x44234e.arg = undefined);
              return !!_0x5c6bf2;
            }
            for (var _0x3558c9 = this.tryEntries.length - 1; _0x3558c9 >= 0; --_0x3558c9) {
              var _0x55fae5 = this.tryEntries[_0x3558c9];
              var _0x1e8a68 = _0x55fae5.completion;
              if ("root" === _0x55fae5.tryLoc) {
                return _0xdb0971("end");
              }
              if (_0x55fae5.tryLoc <= this.prev) {
                var _0x4e54cb = _0x3a2f12.call(_0x55fae5, "catchLoc");
                var _0x160305 = _0x3a2f12.call(_0x55fae5, "finallyLoc");
                if (_0x4e54cb && _0x160305) {
                  if (this.prev < _0x55fae5.catchLoc) {
                    return _0xdb0971(_0x55fae5.catchLoc, true);
                  }
                  if (this.prev < _0x55fae5.finallyLoc) {
                    return _0xdb0971(_0x55fae5.finallyLoc);
                  }
                } else {
                  if (_0x4e54cb) {
                    if (this.prev < _0x55fae5.catchLoc) {
                      return _0xdb0971(_0x55fae5.catchLoc, true);
                    }
                  } else {
                    if (!_0x160305) {
                      throw new Error("try statement without catch or finally");
                    }
                    if (this.prev < _0x55fae5.finallyLoc) {
                      return _0xdb0971(_0x55fae5.finallyLoc);
                    }
                  }
                }
              }
            }
          },
          abrupt: function (_0xbe67de, _0x51f4f9) {
            for (var _0x2e6f4c = this.tryEntries.length - 1; _0x2e6f4c >= 0; --_0x2e6f4c) {
              var _0x34dc77 = this.tryEntries[_0x2e6f4c];
              if (_0x34dc77.tryLoc <= this.prev && _0x3a2f12.call(_0x34dc77, "finallyLoc") && this.prev < _0x34dc77.finallyLoc) {
                var _0x5ae6bb = _0x34dc77;
                break;
              }
            }
            _0x5ae6bb && ("break" === _0xbe67de || "continue" === _0xbe67de) && _0x5ae6bb.tryLoc <= _0x51f4f9 && _0x51f4f9 <= _0x5ae6bb.finallyLoc && (_0x5ae6bb = null);
            var _0x202876 = _0x5ae6bb ? _0x5ae6bb.completion : {};
            _0x202876.type = _0xbe67de;
            _0x202876.arg = _0x51f4f9;
            return _0x5ae6bb ? (this.method = "next", this.next = _0x5ae6bb.finallyLoc, _0x4c8ef1) : this.complete(_0x202876);
          },
          complete: function (_0x45d4b2, _0x4fdd6f) {
            if ("throw" === _0x45d4b2.type) {
              throw _0x45d4b2.arg;
            }
            "break" === _0x45d4b2.type || "continue" === _0x45d4b2.type ? this.next = _0x45d4b2.arg : "return" === _0x45d4b2.type ? (this.rval = this.arg = _0x45d4b2.arg, this.method = "return", this.next = "end") : "normal" === _0x45d4b2.type && _0x4fdd6f && (this.next = _0x4fdd6f);
            return _0x4c8ef1;
          },
          finish: function (_0x6a8ddf) {
            for (var _0x216211 = this.tryEntries.length - 1; _0x216211 >= 0; --_0x216211) {
              var _0x42ce98 = this.tryEntries[_0x216211];
              if (_0x42ce98.finallyLoc === _0x6a8ddf) {
                this.complete(_0x42ce98.completion, _0x42ce98.afterLoc);
                _0x31ff48(_0x42ce98);
                return _0x4c8ef1;
              }
            }
          },
          catch: function (_0x184a62) {
            for (var _0x32abc0 = this.tryEntries.length - 1; _0x32abc0 >= 0; --_0x32abc0) {
              var _0x1daa2a = this.tryEntries[_0x32abc0];
              if (_0x1daa2a.tryLoc === _0x184a62) {
                var _0x1b23fb = _0x1daa2a.completion;
                if ("throw" === _0x1b23fb.type) {
                  var _0x1d00bc = _0x1b23fb.arg;
                  _0x31ff48(_0x1daa2a);
                }
                return _0x1d00bc;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (_0x54544d, _0x19623d, _0x2dcb2f) {
            this.delegate = {
              iterator: _0x4400be(_0x54544d),
              resultName: _0x19623d,
              nextLoc: _0x2dcb2f
            };
            "next" === this.method && (this.arg = undefined);
            return _0x4c8ef1;
          }
        };
        return _0x3c7b17;
      }
      function _0x2374be(_0x4cdaed, _0x1e9e8d, _0x4d9afd, _0x1a87b2, _0x59eb91, _0x1c8b32, _0x507c0f) {
        try {
          var _0x5e9cc0 = _0x4cdaed[_0x1c8b32](_0x507c0f);
          var _0x51f4d9 = _0x5e9cc0.value;
        } catch (_0x20672d) {
          return void _0x4d9afd(_0x20672d);
        }
        _0x5e9cc0.done ? _0x1e9e8d(_0x51f4d9) : Promise.resolve(_0x51f4d9).then(_0x1a87b2, _0x59eb91);
      }
      function _0x12d1c6(_0x29f6d2) {
        return function () {
          var _0xd9ec10 = this;
          var _0x508fe8 = arguments;
          return new Promise(function (_0x3eac51, _0x3b6b71) {
            var _0x3d1941 = _0x29f6d2.apply(_0xd9ec10, _0x508fe8);
            function _0x3629d7(_0x56e107) {
              _0x2374be(_0x3d1941, _0x3eac51, _0x3b6b71, _0x3629d7, _0x735f6f, "next", _0x56e107);
            }
            function _0x735f6f(_0x40c756) {
              _0x2374be(_0x3d1941, _0x3eac51, _0x3b6b71, _0x3629d7, _0x735f6f, "throw", _0x40c756);
            }
            _0x3629d7(undefined);
          });
        };
      }
      function _0x213d2d(_0xf6b0ce, _0xb6b389) {
        for (var _0x5cea14 = 0; _0x5cea14 < _0xb6b389.length; _0x5cea14++) {
          var _0x2085cb = _0xb6b389[_0x5cea14];
          _0x2085cb.enumerable = _0x2085cb.enumerable || false;
          _0x2085cb.configurable = true;
          "value" in _0x2085cb && (_0x2085cb.writable = true);
          Object.defineProperty(_0xf6b0ce, _0x2085cb.key, _0x2085cb);
        }
      }
      function _0x54ea23(_0x3caaa6, _0x5c236e, _0x49e9a7) {
        _0x5c236e && _0x213d2d(_0x3caaa6.prototype, _0x5c236e);
        _0x49e9a7 && _0x213d2d(_0x3caaa6, _0x49e9a7);
        Object.defineProperty(_0x3caaa6, "prototype", {
          writable: false
        });
        return _0x3caaa6;
      }
      function _0x567cf6(_0x2d516b, _0x53a596) {
        _0x2d516b.prototype = Object.create(_0x53a596.prototype);
        _0x2d516b.prototype.constructor = _0x2d516b;
        _0x352163(_0x2d516b, _0x53a596);
      }
      function _0x352163(_0x18f9d9, _0x5a8a34) {
        return (_0x352163 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (_0x213527, _0x114085) {
          _0x213527.__proto__ = _0x114085;
          return _0x213527;
        })(_0x18f9d9, _0x5a8a34);
      }
      function _0x2fdb02(_0x17bc81) {
        if (undefined === _0x17bc81) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return _0x17bc81;
      }
      function _0x45cd57(_0x2baca1, _0x41020e) {
        if (_0x2baca1) {
          if ("string" == typeof _0x2baca1) {
            return _0x3d1760(_0x2baca1, _0x41020e);
          }
          var _0x218f07 = Object.prototype.toString.call(_0x2baca1).slice(8, -1);
          "Object" === _0x218f07 && _0x2baca1.constructor && (_0x218f07 = _0x2baca1.constructor.name);
          return "Map" === _0x218f07 || "Set" === _0x218f07 ? Array.from(_0x2baca1) : "Arguments" === _0x218f07 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(_0x218f07) ? _0x3d1760(_0x2baca1, _0x41020e) : undefined;
        }
      }
      function _0x3d1760(_0x5c7c2e, _0x46d028) {
        (null == _0x46d028 || _0x46d028 > _0x5c7c2e.length) && (_0x46d028 = _0x5c7c2e.length);
        for (var _0xf40bd5 = 0, _0x4be08b = new Array(_0x46d028); _0xf40bd5 < _0x46d028; _0xf40bd5++) {
          _0x4be08b[_0xf40bd5] = _0x5c7c2e[_0xf40bd5];
        }
        return _0x4be08b;
      }
      function _0x32f29f(_0x3ec7fa, _0x50b288) {
        var _0x180ffe = "undefined" != typeof Symbol && _0x3ec7fa[Symbol.iterator] || _0x3ec7fa["@@iterator"];
        if (_0x180ffe) {
          return (_0x180ffe = _0x180ffe.call(_0x3ec7fa)).next.bind(_0x180ffe);
        }
        if (Array.isArray(_0x3ec7fa) || (_0x180ffe = _0x45cd57(_0x3ec7fa)) || _0x50b288 && _0x3ec7fa && "number" == typeof _0x3ec7fa.length) {
          _0x180ffe && (_0x3ec7fa = _0x180ffe);
          var _0x3eb293 = 0;
          return function () {
            return _0x3eb293 >= _0x3ec7fa.length ? {
              done: true
            } : {
              done: false,
              value: _0x3ec7fa[_0x3eb293++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function _0x4f841b(_0x529f72, _0x171cd8, _0x23b3f7, _0x46d9c2) {
        _0x23b3f7 && Object.defineProperty(_0x529f72, _0x171cd8, {
          enumerable: _0x23b3f7.enumerable,
          configurable: _0x23b3f7.configurable,
          writable: _0x23b3f7.writable,
          value: _0x23b3f7.initializer ? _0x23b3f7.initializer.call(_0x46d9c2) : undefined
        });
      }
      function _0x5a72b5(_0x35968e, _0x57fcc2, _0x458994, _0x4f44d1, _0x7af37) {
        var _0x3245fa = {};
        Object.keys(_0x4f44d1).forEach(function (_0x275d4a) {
          _0x3245fa[_0x275d4a] = _0x4f44d1[_0x275d4a];
        });
        _0x3245fa.enumerable = !!_0x3245fa.enumerable;
        _0x3245fa.configurable = !!_0x3245fa.configurable;
        ("value" in _0x3245fa || _0x3245fa.initializer) && (_0x3245fa.writable = true);
        _0x3245fa = _0x458994.slice().reverse().reduce(function (_0x5314be, _0x10d6d0) {
          return _0x10d6d0(_0x35968e, _0x57fcc2, _0x5314be) || _0x5314be;
        }, _0x3245fa);
        _0x7af37 && undefined !== _0x3245fa.initializer && (_0x3245fa.value = _0x3245fa.initializer ? _0x3245fa.initializer.call(_0x7af37) : undefined, _0x3245fa.initializer = undefined);
        undefined === _0x3245fa.initializer && (Object.defineProperty(_0x35968e, _0x57fcc2, _0x3245fa), _0x3245fa = null);
        return _0x3245fa;
      }
      _0xa10b8c._RF.push({}, "db4337zK39CwpvA3Bh+gyjl", "index", undefined);
      globalThis.Astarte || (globalThis.Astarte = {});
      var _0x5b9850 = globalThis.Astarte;
      var _0x1c9a9f;
      var _0x1a4040;
      var _0x488055;
      var _0x48d5c1;
      var _0x1167a9;
      var _0xd71ac5;
      var _0x1df964;
      var _0x514242;
      var _0x3216f4;
      var _0x3eb3e6;
      var _0x28b44b;
      function _0xb1edc9() {
        _0x1c9a9f = _0x5b9850.AppManager;
      }
      function _0x57c2c5() {
        _0x1a4040 = _0x5b9850.Backpack;
      }
      function _0x13680a() {
        _0x488055 = _0x5b9850.BuyBonus;
      }
      function _0x5007a8() {
        _0xd71ac5 = _0x5b9850.CommonGame;
      }
      function _0x27230e() {
        _0x1df964 = _0x5b9850.DailyMission;
      }
      function _0x4bada2() {
        _0x514242 = _0x5b9850.Debris;
      }
      function _0x47cd20() {
        _0x3216f4 = _0x5b9850.GaiaManager;
      }
      function _0x34f51c() {
        _0x3eb3e6 = _0x5b9850.GiftCode;
      }
      function _0xbd08cb() {
        _0x28b44b = _0x5b9850.IframeCommand;
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "2c465urF+5E6a8SAy0Y1679", "AppManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "01a4bCeOlRFS4PxU4ftD5wn", "BackpackManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "e98d6g3Sn5F/phbS0JGqk6v", "BuyBonusManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "810fcmXyb9Bu4OzTZmIkoz9", "CommonGameManager", undefined);
      (function (_0x2e7ee2) {
        _0x2e7ee2[_0x2e7ee2.Get = 0] = "Get";
        _0x2e7ee2[_0x2e7ee2.Post = 1] = "Post";
      })(_0x48d5c1 || (_0x48d5c1 = {}));
      (function (_0x2184c9) {
        _0x2184c9[_0x2184c9.Ignore = 0] = "Ignore";
        _0x2184c9[_0x2184c9.Handle = 1] = "Handle";
      })(_0x1167a9 || (_0x1167a9 = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "0e324Erw0JDW6aCYO5d0i2g", "DailyMissionManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "dd020H2ox5CQ70Z9VNWXYpK", "DebrisManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "1fcfdTjgMdDr4mh99NzZ29B", "GaiaManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "a3f63TygSlA6KwEkLDlQIoJ", "GiftCodeManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "9692fSvI0xNR5GVPmbcEfzq", "IframeCommandManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "d8221PEwlRBep+hz+x7w5Ot", "NewBottomBarManager", undefined);
      var _0x593958 = "BetValueChange";
      var _0x33e9ab = {
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
        CLICK_AUTOPLAY_HARDSTOP: 20
      };
      var _0x311069;
      var _0x2fd06d;
      var _0x10ac8d;
      var _0x38d2d9;
      function _0xca669e() {
        _0x311069 = _0x5b9850.NewBottombar;
      }
      function _0x42ca86() {
        _0x2fd06d = _0x5b9850.NewExtra;
      }
      function _0x1bc679() {
        _0x5b9850.Trial;
      }
      function _0x5b0102() {
        _0x38d2d9 = _0x5b9850.MsgBox;
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "28748R+s5pCY7kwYZ0zkqKk", "NewExtraManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "861e1J/bwRGlI4J13TOOh4y", "TrialManager", undefined);
      (function (_0x14416e) {
        _0x14416e[_0x14416e.None = 0] = "None";
        _0x14416e[_0x14416e.Playing = 1] = "Playing";
        _0x14416e[_0x14416e.Item = 2] = "Item";
      })(_0x10ac8d || (_0x10ac8d = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "0f3df9al6NIJJ1/5ZP5aShG", "MsgBoxManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "8de065l1yBCNoeRGxK2yzaD", "StateManager", undefined);
      var _0x254a20 = function () {};
      var _0x57d1f9;
      var _0x15c4f6;
      var _0x1bfac4;
      var _0x19b0e0;
      var _0x23cbbd;
      function _0x1ba145() {
        _0x57d1f9 = _0x5b9850.StateManager;
      }
      function _0x5505f0() {
        _0x1bfac4 = _0x5b9850.AutoShow;
      }
      function _0x39f909() {
        _0x19b0e0 = _0x5b9850.LocaleString;
      }
      function _0x3d541c() {
        _0x5b9850.localStorage;
      }
      function _0x44e8f2() {
        _0x23cbbd = _0x5b9850.SoundManager;
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "c7e3d4LY9dOUokI+wu7YgCQ", "AutoShowManager", undefined);
      (function (_0x3de8f0) {
        _0x3de8f0[_0x3de8f0.SKY_BAR = 0] = "SKY_BAR";
        _0x3de8f0[_0x3de8f0.PAYTABLE = 1] = "PAYTABLE";
        _0x3de8f0[_0x3de8f0.LANDING = 2] = "LANDING";
        _0x3de8f0[_0x3de8f0.DISCOUNT = 3] = "DISCOUNT";
        _0x3de8f0[_0x3de8f0.EXTRA_BET = 4] = "EXTRA_BET";
        _0x3de8f0[_0x3de8f0.ICONBOX = 5] = "ICONBOX";
      })(_0x15c4f6 || (_0x15c4f6 = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "d388f5XkRRFcYXg5usnXTa/", "LocaleStringManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "077a5gmYEpIQqr+YOtt+g08", "LocalStorageManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "8c0f7IX3HNLY6BaWiL8u0j4", "SoundManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "50f8dtxxuFDo6qJW6FBFBaO", "EventManager", undefined);
      var _0x250424;
      var _0x3c4bc5;
      var _0x2be8bb;
      var _0x8ec855;
      var _0x369abc;
      var _0x15395b;
      var _0x4b430a;
      var _0xc8ef61;
      var _0x48da45;
      var _0x3044e8;
      var _0x81cc27;
      var _0x304727;
      var _0x5f4820;
      var _0xf89c1a;
      var _0x5d85b7;
      var _0xc1321d;
      function _0x30b1ec() {
        _0x250424 = _0x5b9850.EventManager;
      }
      function _0x46747c() {
        _0x3c4bc5 = _0x5b9850.LoadPrefabManager;
      }
      function _0x4b90b4() {
        _0x2be8bb = _0x5b9850.NotificationManager;
      }
      function _0x4c8b40() {
        _0x5b9850.FuncCtrlManager;
      }
      function _0x3faf05() {
        null == _0x5b9850.SoundAudioManager ? (_0xc9f92c("SoundAudioManager not found"), (_0x8ec855 = _0x5b9850.SoundManager).SetSettingJson || (_0x8ec855.SetSettingJson = function (_0x3db330) {}), _0x8ec855.AddAudioClips || (_0x8ec855.AddAudioClips = function (_0x20ab92) {}), _0x8ec855.ClearSetting || (_0x8ec855.ClearSetting = function () {})) : _0x8ec855 = _0x5b9850.SoundAudioManager;
      }
      function _0x4ffd83() {
        _0x369abc = _0x5b9850.Tools;
      }
      function _0x1836d9() {
        _0xc8ef61 = _0x5b9850.Define;
      }
      function _0x40d18c() {
        _0x48da45 = _0x5b9850.RoundController;
      }
      function _0x34d752() {
        _0x3044e8 = _0x5b9850.ExtraBetController;
      }
      function _0x1253ff() {
        _0x5b9850.FakeServer;
      }
      function _0x119168() {
        _0x81cc27 = _0x5b9850.TempoSetting;
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "18947v7ICNDlYz3G5vE642k", "LoadPrefabManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "de7f6JwfsBHBYba0UlqLoFI", "NotificationManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "81438uBGiNJXoDkKAmuxEJu", "FunctionControlManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "3e41doUMVNLQbg53Jn6N9ch", "SoundAudioManager", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "858d45NBqBLW5W3J41WER1G", "index", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "4c480cU1LpMo4WqCcvtd0ph", "Tools", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "de32cbzFmBN4rL/N8DkMkAD", "Define", undefined);
      (function (_0x16f4ad) {
        _0x16f4ad[_0x16f4ad.NORMAL = 0] = "NORMAL";
        _0x16f4ad[_0x16f4ad.USING = 1] = "USING";
      })(_0x15395b || (_0x15395b = {}));
      (function (_0x2743c1) {
        _0x2743c1[_0x2743c1.GAME_CLOSE = 1000] = "GAME_CLOSE";
        _0x2743c1[_0x2743c1.LOGIN = 1001] = "LOGIN";
        _0x2743c1[_0x2743c1.WAIT_RES = 1002] = "WAIT_RES";
        _0x2743c1[_0x2743c1.CHECK_UNSHOW = 1003] = "CHECK_UNSHOW";
        _0x2743c1[_0x2743c1.CHECK_FREESPIN = 1004] = "CHECK_FREESPIN";
        _0x2743c1[_0x2743c1.IDLE = 1005] = "IDLE";
        _0x2743c1[_0x2743c1.SPIN_REQ = 1006] = "SPIN_REQ";
        _0x2743c1[_0x2743c1.SPIN = 1007] = "SPIN";
        _0x2743c1[_0x2743c1.COMMON_SHOW = 1008] = "COMMON_SHOW";
        _0x2743c1[_0x2743c1.MHB_SHOW = 1009] = "MHB_SHOW";
        _0x2743c1[_0x2743c1.JP_SHOW = 1010] = "JP_SHOW";
        _0x2743c1[_0x2743c1.CHECK_STATE = 1011] = "CHECK_STATE";
        _0x2743c1[_0x2743c1.END = 1012] = "END";
        _0x2743c1[_0x2743c1.FREESPIN_WAIT_RES = 1013] = "FREESPIN_WAIT_RES";
        _0x2743c1[_0x2743c1.TURBO = 1014] = "TURBO";
        _0x2743c1[_0x2743c1.FIRST_IN_GAME = 1015] = "FIRST_IN_GAME";
        _0x2743c1[_0x2743c1.CHECK_APP_REWARD = 1016] = "CHECK_APP_REWARD";
        _0x2743c1[_0x2743c1.CHECK_BUFF = 1017] = "CHECK_BUFF";
        _0x2743c1[_0x2743c1.ACTIVATE_BUFF = 1018] = "ACTIVATE_BUFF";
        _0x2743c1[_0x2743c1.END_BUFF = 1019] = "END_BUFF";
        _0x2743c1[_0x2743c1.GRAND_JP = 1020] = "GRAND_JP";
      })(_0x4b430a || (_0x4b430a = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "813162EnmlPD6ZkP+n93pP2", "RoundController", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "1d5a8ODImpC9qtSki10xwQQ", "ExtraBetController", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "cd534oKcOFFap8T54HqFCAE", "FakeServer", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "3ec76bGz5NECbh3RNjc2SdI", "TempoSetting", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "6f779uo//FP8owPSb4jjuXE", "CommonEffect", undefined);
      (function (_0x5ed5d2) {
        var _0x519d9f = function () {
          function _0x28c664() {}
          _0x28c664.PascalTriangleLine = function (_0x43f2c0) {
            for (var _0x1fc5c5 = [1], _0x379d9e = 1; _0x379d9e < _0x43f2c0; _0x379d9e++) {
              _0x1fc5c5[_0x379d9e] = _0x1fc5c5[_0x379d9e - 1] * (_0x43f2c0 - _0x379d9e) / _0x379d9e;
            }
            return _0x1fc5c5;
          };
          _0x28c664.RangedRandom = function (_0xc488f5, _0xc95178) {
            return (_0xc95178 - _0xc488f5) * Math.random() + _0xc488f5;
          };
          _0x28c664.GetRandomRectPos = function (_0x2c49e6, _0x279c5c, _0x3bc12e) {
            var _0xffca6d = _0x2ea746(this.RangedRandom(-_0x279c5c.x, _0x279c5c.x) / 2 | 0, this.RangedRandom(-_0x279c5c.x, _0x279c5c.x) / 2 | 0).rotate(_0x3bc12e * _0xe0f0a6.RAD);
            return _0x2c49e6.add(_0xffca6d);
          };
          _0x28c664.GetRandomOvalPos = function (_0x521b86, _0x65861d, _0x597b47) {
            var _0x3fe2cd = _0x65861d.y / Math.max(1, _0x65861d.x);
            var _0x4a8bf9 = Math.random() * _0x65861d.x * 0.5;
            var _0x961b27 = Math.random() * Math.PI * 2;
            var _0x7c2902 = _0x2ea746(_0x4a8bf9 * Math.cos(_0x961b27), _0x4a8bf9 * Math.sin(_0x961b27) * _0x3fe2cd).rotate(_0x597b47 * _0xe0f0a6.RAD);
            return _0x521b86.add(_0x7c2902);
          };
          _0x28c664.ZoomAndFlip = function (_0x49dad1, _0xb8f24f, _0x5dd48b, _0x49073b) {
            var _0x223a81 = Math.sin(_0x49073b * Math.PI) * (_0xb8f24f - _0x49dad1) + _0x49dad1;
            var _0x2b05d5 = Math.cos(_0x49073b * Math.PI * _0x5dd48b);
            return _0x2ea746(_0x223a81 * _0x2b05d5, _0x223a81);
          };
          return _0x28c664;
        }();
        _0x5ed5d2.ExtendsMath = _0x519d9f;
        var _0xad762f = function () {
          function _0x502a98(_0x5b2ef1) {
            switch (this.pts = null, this.len = 0, this.ptl = null, this.bez = null, this.len = _0x5b2ef1.length, 0 == this.len ? (_0x5b2ef1.push(_0x2af1b6(0, 0)), _0x5b2ef1.push(_0x2af1b6(0, 0))) : 1 == this.len && _0x5b2ef1.push(_0x2af1b6(_0x5b2ef1[0].x, _0x5b2ef1[0].y)), this.pts = _0x5b2ef1, this.len) {
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
                this.ptl = _0x519d9f.PascalTriangleLine(this.len);
                this.bez = this.BezierN;
            }
          }
          var _0x8ec707 = _0x502a98.prototype;
          _0x8ec707.GetPosition = function (_0x502298) {
            return this.bez.apply(this, [_0x502298]);
          };
          _0x8ec707.Bezier2 = function (_0x112b5f) {
            var _0x22ae16 = 1 - _0x112b5f;
            return _0x2af1b6(_0x22ae16 * this.pts[0].x + _0x112b5f * this.pts[1].x, _0x22ae16 * this.pts[0].y + _0x112b5f * this.pts[1].y);
          };
          _0x8ec707.Bezier3 = function (_0x4198c4) {
            var _0x33fd5f = 1 - _0x4198c4;
            var _0x3bf3b4 = [_0x33fd5f * _0x33fd5f, 2 * _0x33fd5f * _0x4198c4, _0x4198c4 * _0x4198c4];
            return _0x2af1b6(_0x3bf3b4[0] * this.pts[0].x + _0x3bf3b4[1] * this.pts[1].x + _0x3bf3b4[2] * this.pts[2].x, _0x3bf3b4[0] * this.pts[0].y + _0x3bf3b4[1] * this.pts[1].y + _0x3bf3b4[2] * this.pts[2].y);
          };
          _0x8ec707.Bezier4 = function (_0x4bd43d) {
            var _0x259fe6 = 1 - _0x4bd43d;
            var _0x3862e3 = [_0x259fe6 * _0x259fe6 * _0x259fe6, 3 * _0x259fe6 * _0x259fe6 * _0x4bd43d, 3 * _0x259fe6 * _0x4bd43d * _0x4bd43d, _0x4bd43d * _0x4bd43d * _0x4bd43d];
            return _0x2af1b6(_0x3862e3[0] * this.pts[0].x + _0x3862e3[1] * this.pts[1].x + _0x3862e3[2] * this.pts[2].x + _0x3862e3[3] * this.pts[3].x, _0x3862e3[0] * this.pts[0].y + _0x3862e3[1] * this.pts[1].y + _0x3862e3[2] * this.pts[2].y + _0x3862e3[3] * this.pts[3].y);
          };
          _0x8ec707.Bezier5 = function (_0xd54341) {
            var _0x490e1d = 1 - _0xd54341;
            var _0x398bc7 = [_0x490e1d * _0x490e1d * _0x490e1d * _0x490e1d, 4 * _0x490e1d * _0x490e1d * _0x490e1d * _0xd54341, 6 * _0x490e1d * _0x490e1d * _0xd54341 * _0xd54341, 4 * _0x490e1d * _0xd54341 * _0xd54341 * _0xd54341, _0xd54341 * _0xd54341 * _0xd54341 * _0xd54341];
            return _0x2af1b6(_0x398bc7[0] * this.pts[0].x + _0x398bc7[1] * this.pts[1].x + _0x398bc7[2] * this.pts[2].x + _0x398bc7[3] * this.pts[3].x + _0x398bc7[4] * this.pts[4].x, _0x398bc7[0] * this.pts[0].y + _0x398bc7[1] * this.pts[1].y + _0x398bc7[2] * this.pts[2].y + _0x398bc7[3] * this.pts[3].y + _0x398bc7[4] * this.pts[4].y);
          };
          _0x8ec707.Bezier6 = function (_0xe3969c) {
            var _0x314e94 = 1 - _0xe3969c;
            var _0xe905ec = [_0x314e94 * _0x314e94 * _0x314e94 * _0x314e94 * _0x314e94, 5 * _0x314e94 * _0x314e94 * _0x314e94 * _0x314e94 * _0xe3969c, 10 * _0x314e94 * _0x314e94 * _0x314e94 * _0xe3969c * _0xe3969c, 10 * _0x314e94 * _0x314e94 * _0xe3969c * _0xe3969c * _0xe3969c, 5 * _0x314e94 * _0xe3969c * _0xe3969c * _0xe3969c * _0xe3969c, _0xe3969c * _0xe3969c * _0xe3969c * _0xe3969c * _0xe3969c];
            return _0x2af1b6(_0xe905ec[0] * this.pts[0].x + _0xe905ec[1] * this.pts[1].x + _0xe905ec[2] * this.pts[2].x + _0xe905ec[3] * this.pts[3].x + _0xe905ec[4] * this.pts[4].x + _0xe905ec[5] * this.pts[5].x, _0xe905ec[0] * this.pts[0].y + _0xe905ec[1] * this.pts[1].y + _0xe905ec[2] * this.pts[2].y + _0xe905ec[3] * this.pts[3].y + _0xe905ec[4] * this.pts[4].y + _0xe905ec[5] * this.pts[5].y);
          };
          _0x8ec707.BezierN = function (_0x3040a5) {
            for (var _0x23112f = 1 - _0x3040a5, _0x1f063a = _0x2af1b6(0, 0), _0x2516ed = 0; _0x2516ed < this.len; _0x2516ed++) {
              for (var _0x141ca6 = 1, _0x2b77c0 = 0; _0x2b77c0 < this.len - _0x2516ed - 1; _0x2b77c0++) {
                _0x141ca6 *= _0x23112f;
              }
              for (var _0x17791a = 0; _0x17791a < _0x2516ed; _0x17791a++) {
                _0x141ca6 *= _0x3040a5;
              }
              _0x1f063a.x += _0x141ca6 * this.ptl[_0x2516ed] * this.pts[_0x2516ed].x;
              _0x1f063a.y += _0x141ca6 * this.ptl[_0x2516ed] * this.pts[_0x2516ed].y;
            }
            return _0x1f063a;
          };
          return _0x502a98;
        }();
        _0x5ed5d2.Bezier = _0xad762f;
      })(_0x304727 || (_0x304727 = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "391b6CLPVhBEqeFr1f7nxDE", "index", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "1a824X6zKtNIYtfQzXsFzKP", "Game_Define", undefined);
      (function (_0x2e8b02) {
        _0x2e8b02[_0x2e8b02.WAIT_READY = 0] = "WAIT_READY";
        _0x2e8b02[_0x2e8b02.FEATURE_SHOW = 1] = "FEATURE_SHOW";
        _0x2e8b02[_0x2e8b02.PLATE_SHOW = 2] = "PLATE_SHOW";
        _0x2e8b02[_0x2e8b02.UNSHOW_PREPARE = 3] = "UNSHOW_PREPARE";
        _0x2e8b02[_0x2e8b02.AWARD = 4] = "AWARD";
        _0x2e8b02[_0x2e8b02.BONUS_AWARD = 5] = "BONUS_AWARD";
        _0x2e8b02[_0x2e8b02.BONUS_ENTER = 6] = "BONUS_ENTER";
        _0x2e8b02[_0x2e8b02.BONUS_LEAVE = 7] = "BONUS_LEAVE";
        _0x2e8b02[_0x2e8b02.ROUND_SHOW_END = 8] = "ROUND_SHOW_END";
        _0x2e8b02[_0x2e8b02.ROUND_END = 9] = "ROUND_END";
      })(_0x5f4820 || (_0x5f4820 = {}));
      (function (_0x15237b) {
        _0x15237b[_0x15237b.Empty = 0] = "Empty";
        _0x15237b[_0x15237b.BAR1 = 1] = "BAR1";
        _0x15237b[_0x15237b.BAR2 = 2] = "BAR2";
        _0x15237b[_0x15237b.BAR3 = 3] = "BAR3";
        _0x15237b[_0x15237b.SEVEN = 4] = "SEVEN";
        _0x15237b[_0x15237b.WILD2 = 5] = "WILD2";
        _0x15237b[_0x15237b.WILD3 = 6] = "WILD3";
        _0x15237b[_0x15237b.WILD5 = 7] = "WILD5";
        _0x15237b[_0x15237b.BONUS = 8] = "BONUS";
        _0x15237b[_0x15237b.BONUS_ADD = 9] = "BONUS_ADD";
        _0x15237b[_0x15237b.BONUS_MUL = 10] = "BONUS_MUL";
        _0x15237b[_0x15237b.SUPER_BONUS_ADD = 11] = "SUPER_BONUS_ADD";
        _0x15237b[_0x15237b.SUPER_BONUS_MUL = 12] = "SUPER_BONUS_MUL";
        _0x15237b[_0x15237b.LOCK = 13] = "LOCK";
        _0x15237b[_0x15237b.KEY = 14] = "KEY";
      })(_0xf89c1a || (_0xf89c1a = {}));
      (function (_0x4c3e26) {
        _0x4c3e26[_0x4c3e26.WILD5 = 0] = "WILD5";
        _0x4c3e26[_0x4c3e26.WILD3 = 1] = "WILD3";
        _0x4c3e26[_0x4c3e26.WILD2 = 2] = "WILD2";
        _0x4c3e26[_0x4c3e26.SEVEN = 3] = "SEVEN";
        _0x4c3e26[_0x4c3e26.BAR3 = 4] = "BAR3";
        _0x4c3e26[_0x4c3e26.BAR2 = 5] = "BAR2";
        _0x4c3e26[_0x4c3e26.BAR1 = 6] = "BAR1";
        _0x4c3e26[_0x4c3e26.Any = 7] = "Any";
        _0x4c3e26[_0x4c3e26.NONE = 8] = "NONE";
      })(_0x5d85b7 || (_0x5d85b7 = {}));
      (function (_0x53ca53) {
        _0x53ca53[_0x53ca53.First = 0] = "First";
        _0x53ca53[_0x53ca53.Second = 1] = "Second";
        _0x53ca53[_0x53ca53.Third = 2] = "Third";
      })(_0xc1321d || (_0xc1321d = {}));
      var _0x883e10 = function () {
        function _0x40bbeb() {}
        _0x40bbeb.GetDisplayValue = function (_0x4e71be, _0x175537, _0xaec3a0, _0x3915c1) {
          undefined === _0x175537 && (_0x175537 = 3);
          undefined === _0x3915c1 && (_0x3915c1 = false);
          var _0x424503 = Math.pow(10, _0x175537);
          var _0x42cb57 = _0x4e71be;
          var _0x5e3cb5 = "";
          if (_0x4e71be >= _0x369abc.times(_0x424503, 1000)) {
            _0x42cb57 = _0x369abc.divide(_0x4e71be, 1000000);
            _0x5e3cb5 = "m";
          } else {
            _0x4e71be >= _0x424503 && (_0x42cb57 = _0x369abc.divide(_0x4e71be, 1000), _0x5e3cb5 = "k");
          }
          var _0x56e6d9 = 2;
          if (_0xaec3a0) {
            var _0xcba01b;
            var _0x10dbdb = null == (_0xcba01b = _0x42cb57.toString().split(".")[1]) ? undefined : _0xcba01b.length;
            _0x56e6d9 = _0x10dbdb || 2;
          } else {
            _0x56e6d9 = _0x42cb57 < 100 ? 1 : 0;
          }
          return _0x369abc.FormatNumberThousands(_0x40bbeb.ShowDisplayValue(_0x42cb57), _0x369abc.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, _0x3915c1, _0x56e6d9) + _0x5e3cb5;
        };
        _0x40bbeb.OnExit = function () {
          this.BgAudioId = -1;
          this.NoScatterWheelLvl = 0;
          this.MaxWheelLvl = 0;
          this.AudioClips = {
            Debut: null,
            BGM_MG: null,
            BGM_BG: null,
            BGM_BG_Appear: null,
            BG_End: null,
            Machine_Elevation: null,
            BigWin: null,
            Big_Win_End: null,
            Big_Win_Prompt: null,
            Big_Win_Change: null,
            Reel_Spin: null,
            Reel_Stop: null,
            Symbol_NBS_01: null,
            Symbol_NBS_02: null,
            Symbol_NBS_03: null,
            Symbol_BS: null,
            Symbol_SBS: null,
            Multiplier_Add: null,
            Multiplier_Double: null,
            Door_Open: null,
            Door_Close: null,
            Door_Open_Small: null,
            Lock: null,
            Unlock: null,
            Small_Win_01: null,
            Small_Win_02: null,
            Small_Win_03: null,
            Small_Win_04: null,
            BonusWin: null,
            NearWin: null,
            Lock_Disintegratio: null,
            BonusBar_Unlock: null,
            BonusBar_Lock: null,
            Wild_Multiple_01: null,
            Wild_Multiple_02: null,
            Wild_Multiple_03: null
          };
          this.ShowDisplayValue = null;
        };
        return _0x40bbeb;
      }();
      var _0x5d8f11;
      var _0x4a3a73;
      var _0x1500f7;
      var _0x7e45aa;
      var _0x41bb02;
      _0x883e10.Ver = "39";
      _0x883e10.BgAudioId = -1;
      _0x883e10.SPICY_LEVEL = 3;
      _0x883e10.FeatureBetValue = 10;
      _0x883e10.DoorMultiple = 0.06;
      _0x883e10.DoorOpenCDRound = 10;
      _0x883e10.Column = _0x4fa226(_0xc1321d);
      _0x883e10.Symbol = _0x4fa226(_0xf89c1a);
      _0x883e10.GameState = _0x4fa226(_0x5f4820);
      _0x883e10.LineAward = _0x4fa226(_0x5d85b7);
      _0x883e10.SymbolToString = ["", "", "", "0", "00", "1", "5", "10", ""];
      _0x883e10.LOCK_COLUMN_LIMIT = [2, 4, 4, 4, 4];
      _0x883e10.NoScatterWheelLvl = 0;
      _0x883e10.MaxWheelLvl = 0;
      _0x883e10.COL = 3;
      _0x883e10.ROW = 3;
      _0x883e10.SMALLPRIZE = {
        LEVEL1: 2,
        LEVEL2: 4,
        LEVEL3: 6
      };
      _0x883e10.PAYTABLEDECIMALEN = 1;
      _0x883e10.MANUAL_STRINGS = ["String_01"];
      _0x883e10.MANUAL_TITLE = "String_00";
      _0x883e10.ONE_OF_KIND_AWARD_LIMIT = 5;
      _0x883e10.ONE_OF_KIND_AWARD_SOUND = ["Award_bar", "Award_bar", "Award_7", "Award_77", "Award_777"];
      _0x883e10.AudioFileRoot = "Sound/";
      _0x883e10.AudioFilePath = {
        Debut: _0x883e10.AudioFileRoot + "Debut",
        BGM_MG: _0x883e10.AudioFileRoot + "BGM_MG",
        BGM_BG: _0x883e10.AudioFileRoot + "BGM_BG",
        BGM_BG_Appear: _0x883e10.AudioFileRoot + "BGM_BG_Appear",
        BG_End: _0x883e10.AudioFileRoot + "BG_End",
        Machine_Elevation: _0x883e10.AudioFileRoot + "Machine_Elevation",
        BigWin: _0x883e10.AudioFileRoot + "BigWin",
        Big_Win_End: _0x883e10.AudioFileRoot + "Big_Win_End",
        Big_Win_Prompt: _0x883e10.AudioFileRoot + "Big_Win_Prompt",
        Big_Win_Change: _0x883e10.AudioFileRoot + "Big_Win_Change",
        Reel_Spin: _0x883e10.AudioFileRoot + "Reel_Spin",
        Reel_Stop: _0x883e10.AudioFileRoot + "Reel_Stop",
        Symbol_NBS_01: _0x883e10.AudioFileRoot + "Symbol_NBS_01",
        Symbol_NBS_02: _0x883e10.AudioFileRoot + "Symbol_NBS_02",
        Symbol_NBS_03: _0x883e10.AudioFileRoot + "Symbol_NBS_03",
        Symbol_BS: _0x883e10.AudioFileRoot + "Symbol_BS",
        Symbol_SBS: _0x883e10.AudioFileRoot + "Symbol_SBS",
        Multiplier_Add: _0x883e10.AudioFileRoot + "Multiplier_Add",
        Multiplier_Double: _0x883e10.AudioFileRoot + "Multiplier_Double",
        Door_Open: _0x883e10.AudioFileRoot + "Open_Door_01",
        Door_Close: _0x883e10.AudioFileRoot + "DoorClose",
        Door_Open_Small: _0x883e10.AudioFileRoot + "DoorOpen_small",
        Lock: _0x883e10.AudioFileRoot + "Lock",
        Unlock: _0x883e10.AudioFileRoot + "Unlock",
        Small_Win_01: _0x883e10.AudioFileRoot + "Small_Win_01",
        Small_Win_02: _0x883e10.AudioFileRoot + "Small_Win_02",
        Small_Win_03: _0x883e10.AudioFileRoot + "Small_Win_03",
        Small_Win_04: _0x883e10.AudioFileRoot + "Small_Win_04",
        BonusWin: _0x883e10.AudioFileRoot + "BonusWin",
        NearWin: _0x883e10.AudioFileRoot + "NearWin",
        Lock_Disintegratio: _0x883e10.AudioFileRoot + "Lock_Disintegratio",
        BonusBar_Unlock: _0x883e10.AudioFileRoot + "Bonus_Unlock",
        BonusBar_Lock: _0x883e10.AudioFileRoot + "Bonus_Lock ",
        Wild_Multiple_01: _0x883e10.AudioFileRoot + "Wild_Multiple_01",
        Wild_Multiple_02: _0x883e10.AudioFileRoot + "Wild_Multiple_02",
        Wild_Multiple_03: _0x883e10.AudioFileRoot + "Wild_Multiple_03"
      };
      _0x883e10.AudioClips = {
        Debut: null,
        BGM_MG: null,
        BGM_BG: null,
        BGM_BG_Appear: null,
        BG_End: null,
        Machine_Elevation: null,
        BigWin: null,
        Big_Win_End: null,
        Big_Win_Prompt: null,
        Big_Win_Change: null,
        Reel_Spin: null,
        Reel_Stop: null,
        Symbol_NBS_01: null,
        Symbol_NBS_02: null,
        Symbol_NBS_03: null,
        Symbol_BS: null,
        Symbol_SBS: null,
        Multiplier_Add: null,
        Multiplier_Double: null,
        Door_Open: null,
        Door_Close: null,
        Door_Open_Small: null,
        Lock: null,
        Unlock: null,
        Small_Win_01: null,
        Small_Win_02: null,
        Small_Win_03: null,
        Small_Win_04: null,
        BonusWin: null,
        NearWin: null,
        Lock_Disintegratio: null,
        BonusBar_Unlock: null,
        BonusBar_Lock: null,
        Wild_Multiple_01: null,
        Wild_Multiple_02: null,
        Wild_Multiple_03: null
      };
      _0x883e10.StringKey = {
        FEATURE_LEFT: "FEATURE_LEFT",
        FEATURE_RIGHT: "FEATURE_RIGHT"
      };
      _0x883e10.BetNum = {
        TEN: 10,
        HUNDRED: 100
      };
      _0x883e10.FullRandList = [_0xf89c1a.BAR1, _0xf89c1a.BAR2, _0xf89c1a.BAR3, _0xf89c1a.SEVEN, _0xf89c1a.WILD2, _0xf89c1a.BONUS];
      _0x883e10.MGRandSymbolWeight = [5, 5, 5, 5, 3, 3];
      _0x883e10.FullRandSpecialList = [_0xf89c1a.BAR1, _0xf89c1a.BAR2, _0xf89c1a.BAR3, _0xf89c1a.SEVEN, _0xf89c1a.WILD2, _0xf89c1a.BONUS_ADD, _0xf89c1a.BONUS_MUL, _0xf89c1a.SUPER_BONUS_ADD, _0xf89c1a.SUPER_BONUS_MUL, _0xf89c1a.LOCK, _0xf89c1a.KEY];
      _0x883e10.ShowDisplayValue = function (_0x3f84f5) {
        return _0x311069.GetDisplayValue(_0x3f84f5);
      };
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "f220fPUiqZITKIw3KOQxujS", "BackgroundSpine", undefined);
      var _0x3f6d80 = _0x42d118.ccclass;
      var _0x19de33 = _0x42d118.property;
      _0x5d8f11 = _0x19de33({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      var _0x5d400d = _0x3f6d80((_0x41bb02 = function (_0x8c13f7) {
        function _0x4671d0() {
          for (var _0x24962b, _0x1618b1 = arguments.length, _0x29d672 = new Array(_0x1618b1), _0x5f9cad = 0; _0x5f9cad < _0x1618b1; _0x5f9cad++) {
            _0x29d672[_0x5f9cad] = arguments[_0x5f9cad];
          }
          _0x4f841b(_0x24962b = _0x8c13f7.call.apply(_0x8c13f7, [this].concat(_0x29d672)) || this, "m_spine", _0x7e45aa, _0x2fdb02(_0x24962b));
          _0x24962b.m_lvl = 0;
          _0x24962b.m_gameView = null;
          _0x24962b.m_isNearWin = false;
          return _0x24962b;
        }
        _0x567cf6(_0x4671d0, _0x8c13f7);
        var _0x3b8680 = _0x4671d0.prototype;
        _0x3b8680.start = function () {
          this.m_spine.setMix("MG_Idle_S", "LV5_Open", 0.2);
          this.m_spine.setMix("LV1_MG_Idle", "LV5_Open", 0.2);
          this.m_spine.setMix("LV2_MG_Idle", "LV5_Open", 0.2);
          this.m_spine.setMix("LV3_MG_Idle", "LV5_Open", 0.2);
          this.m_spine.setMix("LV4_MG_Idle", "LV5_Open", 0.2);
        };
        _0x3b8680.Init = function (_0x1a672b) {
          this.m_gameView = _0x1a672b;
        };
        _0x3b8680.RefreshView = function () {
          this.Reset();
          this.m_gameView.IsInBG ? this.PlayBGIdle() : this.m_isNearWin && !this.IsLandscape && this.m_lvl > 0 ? this.PlayDoorNearWin() : !this.IsLandscape && this.m_lvl > 0 ? this.PlayMGIdle_S() : this.PlayMGIdle();
        };
        _0x3b8680.Show = function () {
          this.m_spine.node.active = true;
        };
        _0x3b8680.Hide = function () {
          this.m_spine.node.active = false;
        };
        _0x3b8680.Reset = function () {
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
        };
        _0x3b8680.ResetDoorLv = function () {
          this.m_lvl = 0;
        };
        _0x3b8680.PlayIntro = function () {
          var _0x16d6d3 = _0x12d1c6(_0x41e40d().mark(function _0x4d867f() {
            var _0x5f59cd;
            return _0x41e40d().wrap(function (_0x4b1dd4) {
              for (;;) {
                switch (_0x4b1dd4.prev = _0x4b1dd4.next) {
                  case 0:
                    _0x5f59cd = this.IsLandscape ? _0x4671d0.SpineAnimName.GAMEINTRO_L : _0x4671d0.SpineAnimName.GAMEINTRO_S;
                    _0x4b1dd4.next = 3;
                    return this.PlayAnimation(_0x5f59cd, false);
                  case 3:
                    this.PlayMGIdle();
                  case 4:
                  case "end":
                    return _0x4b1dd4.stop();
                }
              }
            }, _0x4d867f, this);
          }));
          return function () {
            return _0x16d6d3.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayMGIdle = function () {
          this.IsLandscape ? this.PlayAnimation(_0x4671d0.SpineAnimName.MG_IDLE_L, true) : this.PlayMGIdle_S();
        };
        _0x3b8680.PlayMGOpen = function () {
          var _0x4ba240 = _0x12d1c6(_0x41e40d().mark(function _0x267cbc() {
            return _0x41e40d().wrap(function (_0x290388) {
              for (;;) {
                switch (_0x290388.prev = _0x290388.next) {
                  case 0:
                    if (!(this.m_lvl >= 5)) {
                      _0x290388.next = 2;
                      break;
                    }
                    return _0x290388.abrupt("return");
                  case 2:
                    if (this.m_lvl += 1, !this.IsLandscape) {
                      _0x290388.next = 5;
                      break;
                    }
                    return _0x290388.abrupt("return");
                  case 5:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Door_Open_Small);
                    _0x290388.next = 8;
                    return this.PlayOpen_S();
                  case 8:
                    this.PlayMGIdle_S();
                  case 9:
                  case "end":
                    return _0x290388.stop();
                }
              }
            }, _0x267cbc, this);
          }));
          return function () {
            return _0x4ba240.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayDoorNearWin = function () {
          this.m_isNearWin = true;
          0 != this.m_lvl && (this.IsLandscape || this.PlayNearWin_S());
        };
        _0x3b8680.StopDoorNearWin = function () {
          this.m_isNearWin = false;
          this.PlayMGIdle();
        };
        _0x3b8680.PlayOpenMax = function () {
          var _0x10bf6d = _0x12d1c6(_0x41e40d().mark(function _0xb1e98b() {
            return _0x41e40d().wrap(function (_0x5e31c1) {
              for (;;) {
                switch (_0x5e31c1.prev = _0x5e31c1.next) {
                  case 0:
                    if (!(this.m_lvl >= 5)) {
                      _0x5e31c1.next = 2;
                      break;
                    }
                    return _0x5e31c1.abrupt("return");
                  case 2:
                    if (this.m_lvl = 5, !this.IsLandscape) {
                      _0x5e31c1.next = 5;
                      break;
                    }
                    return _0x5e31c1.abrupt("return");
                  case 5:
                    _0x5e31c1.next = 7;
                    return this.PlayOpen_S();
                  case 7:
                    this.PlayMGIdle_S();
                  case 8:
                  case "end":
                    return _0x5e31c1.stop();
                }
              }
            }, _0xb1e98b, this);
          }));
          return function () {
            return _0x10bf6d.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayBGIdle = function () {
          var _0x4cb296 = this.IsLandscape ? _0x4671d0.SpineAnimName.BG_IDLE_L : _0x4671d0.SpineAnimName.BG_IDLE_S;
          this.PlayAnimation(_0x4cb296, true);
        };
        _0x3b8680.PlayBGIntro = function () {
          var _0x4ca1d4 = _0x12d1c6(_0x41e40d().mark(function _0x2f435b() {
            return _0x41e40d().wrap(function (_0x26ddc5) {
              for (;;) {
                switch (_0x26ddc5.prev = _0x26ddc5.next) {
                  case 0:
                    if (!this.IsLandscape) {
                      _0x26ddc5.next = 6;
                      break;
                    }
                    _0x23cbbd.Play(_0x883e10.AudioClips.Machine_Elevation);
                    _0x26ddc5.next = 4;
                    return this.PlayAnimation(_0x4671d0.SpineAnimName.BG_DECLARE_L, false);
                  case 4:
                    _0x26ddc5.next = 8;
                    break;
                  case 6:
                    _0x26ddc5.next = 8;
                    return this.PlayBGIntro_S();
                  case 8:
                    this.PlayBGIdle();
                  case 9:
                  case "end":
                    return _0x26ddc5.stop();
                }
              }
            }, _0x2f435b, this);
          }));
          return function () {
            return _0x4ca1d4.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayBGExit = function () {
          var _0x59302b = _0x12d1c6(_0x41e40d().mark(function _0x461b4e() {
            var _0x52bdd7;
            return _0x41e40d().wrap(function (_0x53f454) {
              for (;;) {
                switch (_0x53f454.prev = _0x53f454.next) {
                  case 0:
                    _0x52bdd7 = this.IsLandscape ? _0x4671d0.SpineAnimName.BG_COMPLIMENT_END_L : _0x4671d0.SpineAnimName.BG_COMPLIMENT_END_S;
                    _0x53f454.next = 3;
                    return this.PlayAnimation(_0x52bdd7, false);
                  case 3:
                    this.PlayMGIdle();
                  case 4:
                  case "end":
                    return _0x53f454.stop();
                }
              }
            }, _0x461b4e, this);
          }));
          return function () {
            return _0x59302b.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayAnimation = function (_0x595a63, _0x2a6c72) {
          var _0x28ea94 = this;
          return new Promise(function (_0x1858a9) {
            _0x28ea94.m_spine.clearTrack(0);
            _0x28ea94.m_spine.setToSetupPose();
            var _0x3ba97b = _0x28ea94.m_spine.setAnimation(0, _0x595a63, _0x2a6c72);
            _0x3ba97b ? _0x28ea94.m_spine.setTrackCompleteListener(_0x3ba97b, function () {
              _0x1858a9();
            }) : _0x28ea94.m_spine.setCompleteListener(function () {
              _0x1858a9();
            });
          });
        };
        _0x3b8680.PlayMGIdle_S = function () {
          var _0x4841fa = _0x12d1c6(_0x41e40d().mark(function _0x46b106() {
            return _0x41e40d().wrap(function (_0x59cfe6) {
              for (;;) {
                switch (_0x59cfe6.prev = _0x59cfe6.next) {
                  case 0:
                    _0x59cfe6.next = 2;
                    return this.PlayAnimation(this.GetMGIdleAnim_S(this.m_lvl), true);
                  case 2:
                  case "end":
                    return _0x59cfe6.stop();
                }
              }
            }, _0x46b106, this);
          }));
          return function () {
            return _0x4841fa.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayOpen_S = function () {
          var _0x3e9ab0 = _0x12d1c6(_0x41e40d().mark(function _0x32d1cc() {
            return _0x41e40d().wrap(function (_0xf5a6f1) {
              for (;;) {
                switch (_0xf5a6f1.prev = _0xf5a6f1.next) {
                  case 0:
                    _0xf5a6f1.next = 2;
                    return this.PlayAnimation(this.GetMGOpenAnim_S(this.m_lvl), false);
                  case 2:
                  case "end":
                    return _0xf5a6f1.stop();
                }
              }
            }, _0x32d1cc, this);
          }));
          return function () {
            return _0x3e9ab0.apply(this, arguments);
          };
        }();
        _0x3b8680.PlayNearWin_S = function () {
          this.PlayAnimation(this.GetNearWin_S(this.m_lvl), true);
        };
        _0x3b8680.PlayBGIntro_S = function () {
          var _0xfe0aa6 = _0x12d1c6(_0x41e40d().mark(function _0x212b2a() {
            return _0x41e40d().wrap(function (_0x790e61) {
              for (;;) {
                switch (_0x790e61.prev = _0x790e61.next) {
                  case 0:
                    _0x790e61.next = 2;
                    return this.PlayAnimation(this.GetDeclare_S(this.m_lvl), false);
                  case 2:
                  case "end":
                    return _0x790e61.stop();
                }
              }
            }, _0x212b2a, this);
          }));
          return function () {
            return _0xfe0aa6.apply(this, arguments);
          };
        }();
        _0x3b8680.GetMGIdleAnim_S = function (_0x524b23) {
          return [_0x4671d0.SpineAnimName.MG_IDLE_S, _0x4671d0.SpineAnimName.LV1_MG_IDLE, _0x4671d0.SpineAnimName.LV2_MG_IDLE, _0x4671d0.SpineAnimName.LV3_MG_IDLE, _0x4671d0.SpineAnimName.LV4_MG_IDLE, _0x4671d0.SpineAnimName.LV5_MG_IDLE][_0x524b23];
        };
        _0x3b8680.GetMGOpenAnim_S = function (_0x9e4810) {
          return [null, _0x4671d0.SpineAnimName.LV1_OPEN, _0x4671d0.SpineAnimName.LV2_OPEN, _0x4671d0.SpineAnimName.LV3_OPEN, _0x4671d0.SpineAnimName.LV4_OPEN, _0x4671d0.SpineAnimName.LV5_OPEN][_0x9e4810];
        };
        _0x3b8680.GetNearWin_S = function (_0x530989) {
          return [null, _0x4671d0.SpineAnimName.LV1_NEARWIN, _0x4671d0.SpineAnimName.LV2_NEARWIN, _0x4671d0.SpineAnimName.LV3_NEARWIN, _0x4671d0.SpineAnimName.LV4_NEARWIN, _0x4671d0.SpineAnimName.LV5_NEARWIN][_0x530989];
        };
        _0x3b8680.GetDeclare_S = function (_0x1b6cb6) {
          return [_0x4671d0.SpineAnimName.BG_DECLARE_S, _0x4671d0.SpineAnimName.LV1_BG_DECLARE_S, _0x4671d0.SpineAnimName.LV2_BG_DECLARE_S, _0x4671d0.SpineAnimName.LV3_BG_DECLARE_S, _0x4671d0.SpineAnimName.LV4_BG_DECLARE_S, _0x4671d0.SpineAnimName.LV5_BG_DECLARE_S][_0x1b6cb6];
        };
        _0x54ea23(_0x4671d0, [{
          key: "IsLandscape",
          get: function () {
            return this.m_gameView.IsLandscape;
          }
        }, {
          key: "TimeScale",
          set: function (_0x3c3dab) {
            this.m_spine.timeScale = _0x3c3dab;
          }
        }]);
        return _0x4671d0;
      }(_0x5aac4b), _0x41bb02.SpineAnimName = {
        GAMEINTRO_L: "GameIntro_L",
        GAMEINTRO_S: "GameIntro_S",
        MG_IDLE_L: "MG_Idle_L",
        MG_IDLE_S: "MG_Idle_S",
        LV1_MG_IDLE: "LV1_MG_Idle",
        LV2_MG_IDLE: "LV2_MG_Idle",
        LV3_MG_IDLE: "LV3_MG_Idle",
        LV4_MG_IDLE: "LV4_MG_Idle",
        LV5_MG_IDLE: "LV5_MG_Idle",
        LV1_NEARWIN: "LV1_NearWin",
        LV2_NEARWIN: "LV2_NearWin",
        LV3_NEARWIN: "LV3_NearWin",
        LV4_NEARWIN: "LV4_NearWin",
        LV5_NEARWIN: "LV5_NearWin",
        LV1_OPEN: "LV1_Open",
        LV2_OPEN: "LV2_Open",
        LV3_OPEN: "LV3_Open",
        LV4_OPEN: "LV4_Open",
        LV5_OPEN: "LV5_Open",
        BG_DECLARE_L: "BG_Declare_L",
        BG_DECLARE_S: "BG_Declare_S",
        LV1_BG_DECLARE_S: "LV1_BG_Declare_S",
        LV2_BG_DECLARE_S: "LV2_BG_Declare_S",
        LV3_BG_DECLARE_S: "LV3_BG_Declare_S",
        LV4_BG_DECLARE_S: "LV4_BG_Declare_S",
        LV5_BG_DECLARE_S: "LV5_BG_Declare_S",
        BG_IDLE_L: "BG_Idle_L",
        BG_IDLE_S: "BG_Idle_S",
        BG_COMPLIMENT_END_L: "BG_Compliment_End_L",
        BG_COMPLIMENT_END_S: "BG_Compliment_End_S"
      }, _0x1500f7 = _0x41bb02, _0x7e45aa = _0x5a72b5(_0x1500f7.prototype, "m_spine", [_0x5d8f11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4a3a73 = _0x1500f7)) || _0x4a3a73;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "eb033pmYDhAjadYFiwbi8gp", "SpineKit", undefined);
      var _0x8c49d5 = function () {
        function _0x21700a() {}
        _0x21700a.ForceCancel = function (_0x465e1f, _0x4284c3) {
          var _0x5f0bb8;
          var _0x4ed011;
          var _0x8547be;
          null == (_0x5f0bb8 = this.m_cancelCbs) || null == (_0x4ed011 = (_0x8547be = _0x5f0bb8[_0x465e1f])[_0x4284c3]) || _0x4ed011.call(_0x8547be);
        };
        _0x21700a.PlayAnimation = function (_0x47f313, _0x3e7f49, _0x522920, _0x24212a, _0x3b35bd, _0x39e19b) {
          var _0x3df469 = this;
          undefined === _0x522920 && (_0x522920 = false);
          undefined === _0x24212a && (_0x24212a = 0);
          undefined === _0x39e19b && (_0x39e19b = true);
          return new Promise(function (_0xe54a04) {
            _0x3df469.m_cancelCbs[_0x47f313.name] = {};
            _0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] = function () {
              _0xe54a04(true);
            };
            var _0x52de03 = true;
            var _0x1ed002 = _0x47f313.getState();
            if (_0x1ed002) {
              var _0x4a851e = _0x1ed002.expandToIndex(_0x24212a);
              if (_0x4a851e) {
                var _0x2e23c5 = _0x4a851e.animation.name + "." + _0x3e7f49;
                _0x52de03 = undefined === _0x1ed002.data.animationToMixTime[_0x2e23c5];
              }
            }
            _0x52de03 && (_0x47f313.clearTrack(_0x24212a), _0x39e19b && _0x47f313.setToSetupPose());
            var _0x13c201 = _0x47f313.setAnimation(_0x24212a, _0x3e7f49, _0x522920);
            _0x13c201 ? (_0x47f313.setTrackEventListener(_0x13c201, function (_0xbae116, _0x3a824b) {
              _0x13c201 && _0x13c201.animation.name == _0xbae116.animation.name && (null == _0x3b35bd || _0x3b35bd(_0x3a824b.data.name));
            }), _0x47f313.setTrackCompleteListener(_0x13c201, function (_0x3635d1) {
              _0x13c201 && _0x13c201.animation.name == _0x3635d1.animation.name && (_0x47f313.setTrackCompleteListener(_0x13c201, function () {}), _0x47f313.setTrackInterruptListener(_0x13c201, function () {}), _0x3df469.m_cancelCbs[_0x47f313.name] && _0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] && (_0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] = null), _0xe54a04(false));
            }), _0x47f313.setTrackInterruptListener(_0x13c201, function (_0x20d917) {
              _0x13c201 && _0x13c201.animation.name == _0x20d917.animation.name && (_0x47f313.setTrackCompleteListener(_0x13c201, function () {}), _0x47f313.setTrackInterruptListener(_0x13c201, function () {}), _0x3df469.m_cancelCbs[_0x47f313.name] && _0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] && (_0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] = null), _0xe54a04(true));
            })) : (_0x47f313.setCompleteListener(function () {
              _0x47f313.setCompleteListener(null);
              _0x47f313.setInterruptListener(null);
              _0x3df469.m_cancelCbs[_0x47f313.name] && _0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] && (_0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] = null);
              _0xe54a04(false);
            }), _0x47f313.setInterruptListener(function () {
              _0x47f313.setCompleteListener(null);
              _0x47f313.setInterruptListener(null);
              _0x3df469.m_cancelCbs[_0x47f313.name] && _0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] && (_0x3df469.m_cancelCbs[_0x47f313.name][_0x3e7f49] = null);
              _0xe54a04(true);
            }));
          });
        };
        return _0x21700a;
      }();
      var _0x159133;
      var _0x5ad912;
      var _0x258277;
      var _0x72321f;
      var _0x1086f1;
      var _0x212cb5;
      var _0x2e8984;
      var _0xf0ef51;
      var _0x20b057;
      var _0x56ea2a;
      var _0x26f6b4;
      var _0x11138c;
      var _0x1c4b6b;
      var _0x353062;
      _0x8c49d5.m_cancelCbs = {};
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "764banjZgRIHJh5fO5FyRU3", "BGCompliment", undefined);
      var _0x5ab88b = _0x42d118.ccclass;
      var _0x14e60b = _0x42d118.property;
      _0x159133 = _0x14e60b({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      _0x5ad912 = _0x14e60b({
        type: _0x2f2b2d,
        tooltip: "說明文字 1"
      });
      _0x258277 = _0x14e60b({
        type: _0x2f2b2d,
        tooltip: "說明文字 2"
      });
      _0x72321f = _0x14e60b({
        type: _0x42ff5a,
        tooltip: "BG 結算總分"
      });
      _0x1086f1 = _0x14e60b({
        type: _0x42ff5a,
        tooltip: "BG 總次數"
      });
      _0x212cb5 = _0x14e60b({
        type: _0x1a25c9.Skeleton,
        tooltip: "BG End"
      });
      var _0x16ec4a = _0x5ab88b((_0xf0ef51 = function (_0x150ba4) {
        function _0x369484() {
          for (var _0x28747c, _0x54b2f9 = arguments.length, _0xdc47a = new Array(_0x54b2f9), _0x24b5b2 = 0; _0x24b5b2 < _0x54b2f9; _0x24b5b2++) {
            _0xdc47a[_0x24b5b2] = arguments[_0x24b5b2];
          }
          _0x4f841b(_0x28747c = _0x150ba4.call.apply(_0x150ba4, [this].concat(_0xdc47a)) || this, "m_spine", _0x20b057, _0x2fdb02(_0x28747c));
          _0x4f841b(_0x28747c, "m_text1", _0x56ea2a, _0x2fdb02(_0x28747c));
          _0x4f841b(_0x28747c, "m_text2", _0x26f6b4, _0x2fdb02(_0x28747c));
          _0x4f841b(_0x28747c, "m_complimentNum1", _0x11138c, _0x2fdb02(_0x28747c));
          _0x4f841b(_0x28747c, "m_complimentNum2", _0x1c4b6b, _0x2fdb02(_0x28747c));
          _0x4f841b(_0x28747c, "m_bgEndSpine", _0x353062, _0x2fdb02(_0x28747c));
          return _0x28747c;
        }
        _0x567cf6(_0x369484, _0x150ba4);
        var _0x421207 = _0x369484.prototype;
        _0x421207.start = function () {};
        _0x421207.Show = function () {
          var _0x375879 = _0x12d1c6(_0x41e40d().mark(function _0x675b45(_0x4353bf, _0x59a558, _0x3c469f) {
            var _0x5eb513;
            var _0x4fd7a5;
            var _0x3ca698;
            return _0x41e40d().wrap(function (_0x26fc15) {
              for (;;) {
                switch (_0x26fc15.prev = _0x26fc15.next) {
                  case 0:
                    _0x5eb513 = _0x19b0e0.GetGameAtlas();
                    this.m_text1.spriteFrame = _0x5eb513.getSpriteFrame("Compliment_Congratulations");
                    this.m_text2.spriteFrame = _0x5eb513.getSpriteFrame("Compliment_freeSpin");
                    this.RollingWin(_0x59a558);
                    this.m_complimentNum2.string = "" + _0x3c469f;
                    this.node.active = true;
                    _0x4fd7a5 = _0x4353bf ? "Start_L" : "Start_S";
                    _0x3ca698 = _0x4353bf ? "Loop_L" : "Loop_S";
                    _0x26fc15.next = 10;
                    return this.PlayAnimation(_0x4fd7a5, false);
                  case 10:
                    _0x26fc15.next = 12;
                    return this.PlayAnimation(_0x3ca698, false);
                  case 12:
                    this.Close(_0x4353bf);
                  case 13:
                  case "end":
                    return _0x26fc15.stop();
                }
              }
            }, _0x675b45, this);
          }));
          return function (_0x3f8d76, _0x627817, _0x2f061a) {
            return _0x375879.apply(this, arguments);
          };
        }();
        _0x421207.ShowHightLight = function () {
          var _0x3e5a64 = _0x12d1c6(_0x41e40d().mark(function _0x12ad44(_0x23a925) {
            var _0x1e8e0e;
            var _0xe47729 = this;
            return _0x41e40d().wrap(function (_0x516bfc) {
              for (;;) {
                switch (_0x516bfc.prev = _0x516bfc.next) {
                  case 0:
                    this.m_bgEndSpine.node.active = true;
                    _0x51e4e3(this.m_bgEndSpine.node.getComponent(_0x4ed45d)).to(0.1, {
                      opacity: 255
                    }).start();
                    _0x1e8e0e = _0x23a925 ? "BG_End_L" : "BG_End_S";
                    _0x516bfc.next = 5;
                    return _0x8c49d5.PlayAnimation(this.m_bgEndSpine, _0x1e8e0e);
                  case 5:
                    _0x51e4e3(this.m_bgEndSpine.node.getComponent(_0x4ed45d)).to(0.1, {
                      opacity: 1
                    }).call(function () {
                      _0xe47729.m_bgEndSpine.node.active = false;
                    }).start();
                  case 6:
                  case "end":
                    return _0x516bfc.stop();
                }
              }
            }, _0x12ad44, this);
          }));
          return function (_0x17c09d) {
            return _0x3e5a64.apply(this, arguments);
          };
        }();
        _0x421207.RollingWin = function (_0x35c5f2) {
          var _0x34adef = this;
          var _0x49ee03 = 0;
          var _0x291f64 = _0x369abc.divide(4, 0.02);
          var _0x4af57b = _0x369abc.divide(_0x35c5f2, _0x291f64);
          _0x51e4e3(this.node).repeat(_0x291f64, _0x51e4e3().call(function () {
            (_0x49ee03 += _0x4af57b) >= _0x35c5f2 && (_0x49ee03 = _0x35c5f2);
            var _0x4867f1 = _0x883e10.ShowDisplayValue ? _0x883e10.ShowDisplayValue(_0x49ee03) : _0x49ee03;
            _0x34adef.m_complimentNum1.string = _0x369abc.FormatNumberThousands(_0x4867f1, _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).delay(0.02)).call(function () {
            var _0x13084e = _0x883e10.ShowDisplayValue ? _0x883e10.ShowDisplayValue(_0x35c5f2) : _0x35c5f2;
            _0x34adef.m_complimentNum1.string = _0x369abc.FormatNumberThousands(_0x13084e, _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          }).start();
        };
        _0x421207.Close = function () {
          var _0x5c4cbd = _0x12d1c6(_0x41e40d().mark(function _0x5ee29e(_0x3d109d) {
            var _0x1ad213;
            return _0x41e40d().wrap(function (_0x237366) {
              for (;;) {
                switch (_0x237366.prev = _0x237366.next) {
                  case 0:
                    _0x1ad213 = _0x3d109d ? "End_L" : "End_S";
                    _0x237366.next = 3;
                    return this.PlayAnimation(_0x1ad213, false);
                  case 3:
                    this.node.active = false;
                  case 4:
                  case "end":
                    return _0x237366.stop();
                }
              }
            }, _0x5ee29e, this);
          }));
          return function (_0x14b06c) {
            return _0x5c4cbd.apply(this, arguments);
          };
        }();
        _0x421207.PlayAnimation = function (_0x477bed, _0x147c7b) {
          var _0x52e065 = this;
          return new Promise(function (_0x5899a2) {
            _0x52e065.m_spine.clearTrack(0);
            _0x52e065.m_spine.setToSetupPose();
            var _0x4fe8d5 = _0x52e065.m_spine.setAnimation(0, _0x477bed, _0x147c7b);
            _0x4fe8d5 ? _0x52e065.m_spine.setTrackCompleteListener(_0x4fe8d5, function () {
              _0x5899a2();
            }) : _0x52e065.m_spine.setCompleteListener(function () {
              _0x5899a2();
            });
          });
        };
        return _0x369484;
      }(_0x5aac4b), _0x20b057 = _0x5a72b5(_0xf0ef51.prototype, "m_spine", [_0x159133], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x56ea2a = _0x5a72b5(_0xf0ef51.prototype, "m_text1", [_0x5ad912], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x26f6b4 = _0x5a72b5(_0xf0ef51.prototype, "m_text2", [_0x258277], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x11138c = _0x5a72b5(_0xf0ef51.prototype, "m_complimentNum1", [_0x72321f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1c4b6b = _0x5a72b5(_0xf0ef51.prototype, "m_complimentNum2", [_0x1086f1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x353062 = _0x5a72b5(_0xf0ef51.prototype, "m_bgEndSpine", [_0x212cb5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2e8984 = _0xf0ef51)) || _0x2e8984;
      var _0x3567e4;
      var _0xed87e5;
      var _0x2afca9;
      var _0x9f3658;
      var _0x4d8956;
      var _0xe6460;
      var _0x3346df;
      var _0x360750;
      var _0x6270f3;
      var _0x33bfa3;
      var _0x28dc96;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "a392cD+AdpOx4FDDit96jD0", "BGDeclare", undefined);
      var _0x544cc1 = _0x42d118.ccclass;
      var _0xd74709 = _0x42d118.property;
      _0x3567e4 = _0xd74709({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      _0xed87e5 = _0xd74709({
        type: _0x2f2b2d,
        tooltip: "說明文字 1"
      });
      _0x2afca9 = _0xd74709({
        type: _0x2f2b2d,
        tooltip: "說明文字 2"
      });
      _0x9f3658 = _0xd74709({
        type: _0x2f2b2d,
        tooltip: "說明文字 3"
      });
      var _0x130c21 = _0x544cc1((_0x28dc96 = function (_0x319c5d) {
        function _0x3208f8() {
          for (var _0xac1e9f, _0x2e880e = arguments.length, _0x9b077 = new Array(_0x2e880e), _0x309ad3 = 0; _0x309ad3 < _0x2e880e; _0x309ad3++) {
            _0x9b077[_0x309ad3] = arguments[_0x309ad3];
          }
          _0x4f841b(_0xac1e9f = _0x319c5d.call.apply(_0x319c5d, [this].concat(_0x9b077)) || this, "m_spine", _0x3346df, _0x2fdb02(_0xac1e9f));
          _0x4f841b(_0xac1e9f, "m_text1", _0x360750, _0x2fdb02(_0xac1e9f));
          _0x4f841b(_0xac1e9f, "m_text2", _0x6270f3, _0x2fdb02(_0xac1e9f));
          _0x4f841b(_0xac1e9f, "m_text3", _0x33bfa3, _0x2fdb02(_0xac1e9f));
          return _0xac1e9f;
        }
        _0x567cf6(_0x3208f8, _0x319c5d);
        var _0x199b66 = _0x3208f8.prototype;
        _0x199b66.start = function () {};
        _0x199b66.Show = function () {
          var _0x2475f4 = _0x12d1c6(_0x41e40d().mark(function _0x53d89a(_0x2d7750, _0x614497) {
            var _0x123334;
            var _0x397ca5;
            var _0x31fe14;
            var _0x5d6c2d;
            return _0x41e40d().wrap(function (_0x4d4f29) {
              for (;;) {
                switch (_0x4d4f29.prev = _0x4d4f29.next) {
                  case 0:
                    _0x123334 = _0x19b0e0.GetGameAtlas();
                    this.m_text1.spriteFrame = _0x123334.getSpriteFrame("Declare_bonusGame");
                    this.m_text2.spriteFrame = _0x123334.getSpriteFrame("Declare_txt1");
                    this.m_text3.spriteFrame = _0x123334.getSpriteFrame("Declare_txt2");
                    this.node.active = true;
                    _0x397ca5 = _0x2d7750 ? _0x3208f8.SpineAnimName.START_L : _0x3208f8.SpineAnimName.START_S;
                    _0x31fe14 = _0x2d7750 ? _0x3208f8.SpineAnimName.LOOP_L : _0x3208f8.SpineAnimName.LOOP_S;
                    _0x5d6c2d = _0x2d7750 ? _0x3208f8.SpineAnimName.END_L : _0x3208f8.SpineAnimName.END_S;
                    _0x4d4f29.next = 10;
                    return this.PlayAnimation(_0x397ca5, false);
                  case 10:
                    _0x4d4f29.next = 12;
                    return this.PlayAnimation(_0x31fe14, false);
                  case 12:
                    _0x614497 && _0x614497();
                    _0x4d4f29.next = 15;
                    return this.PlayAnimation(_0x5d6c2d, false);
                  case 15:
                    this.node.active = false;
                  case 16:
                  case "end":
                    return _0x4d4f29.stop();
                }
              }
            }, _0x53d89a, this);
          }));
          return function (_0x46eb42, _0xd90d8d) {
            return _0x2475f4.apply(this, arguments);
          };
        }();
        _0x199b66.PlayAnimation = function (_0x1ad04d, _0x3cc398) {
          var _0x4671cb = this;
          return new Promise(function (_0x5c4e12) {
            _0x4671cb.m_spine.clearTrack(0);
            _0x4671cb.m_spine.setToSetupPose();
            var _0xba3aac = _0x4671cb.m_spine.setAnimation(0, _0x1ad04d, _0x3cc398);
            _0xba3aac ? _0x4671cb.m_spine.setTrackCompleteListener(_0xba3aac, function () {
              _0x5c4e12();
            }) : _0x4671cb.m_spine.setCompleteListener(function () {
              _0x5c4e12();
            });
          });
        };
        return _0x3208f8;
      }(_0x5aac4b), _0x28dc96.SpineAnimName = {
        START_L: "Start_L",
        START_S: "Start_S",
        LOOP_L: "Loop_L",
        LOOP_S: "Loop_S",
        END_L: "End_L",
        END_S: "End_S"
      }, _0xe6460 = _0x28dc96, _0x3346df = _0x5a72b5(_0xe6460.prototype, "m_spine", [_0x3567e4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x360750 = _0x5a72b5(_0xe6460.prototype, "m_text1", [_0xed87e5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x6270f3 = _0x5a72b5(_0xe6460.prototype, "m_text2", [_0x2afca9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x33bfa3 = _0x5a72b5(_0xe6460.prototype, "m_text3", [_0x9f3658], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4d8956 = _0xe6460)) || _0x4d8956;
      var _0x35fc5f;
      var _0x3d5923;
      var _0x243a2c;
      var _0x2d7df5;
      var _0x1982c4;
      var _0x485840;
      var _0x51f94c;
      var _0xeff7a2;
      var _0x544804;
      var _0x4ce69c;
      var _0x5a18e1;
      var _0x1671f5;
      var _0x40ec37;
      var _0xdb13c7;
      var _0x5b9e3d;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "3aeaaMMCjVBV6XP6k4mmsmT", "BackgroundView", undefined);
      var _0x39003e = _0x42d118.ccclass;
      var _0x55cb99 = _0x42d118.property;
      _0x35fc5f = _0x39003e("BackgroundView");
      _0x3d5923 = _0x55cb99({
        type: _0x5d400d,
        tooltip: "背景動畫"
      });
      _0x243a2c = _0x55cb99({
        type: _0x5d400d,
        tooltip: "BG 背景動畫"
      });
      _0x2d7df5 = _0x55cb99({
        type: _0x5d400d,
        tooltip: "機台骨架 Spine"
      });
      _0x1982c4 = _0x55cb99({
        type: _0x130c21,
        tooltip: "BG 宣告動畫"
      });
      _0x485840 = _0x55cb99({
        type: _0x16ec4a,
        tooltip: "BG 結算節點"
      });
      _0x51f94c = _0x55cb99({
        type: _0x5cf7a3,
        tooltip: "BG 結算節點"
      });
      var _0x5cce77 = _0x35fc5f((_0x544804 = function (_0x3f04f0) {
        function _0x1c798d() {
          for (var _0x231f21, _0x26d57d = arguments.length, _0x1f3236 = new Array(_0x26d57d), _0x223ddd = 0; _0x223ddd < _0x26d57d; _0x223ddd++) {
            _0x1f3236[_0x223ddd] = arguments[_0x223ddd];
          }
          (_0x231f21 = _0x3f04f0.call.apply(_0x3f04f0, [this].concat(_0x1f3236)) || this).m_gameView = null;
          _0x4f841b(_0x231f21, "m_backgroundSpine", _0x4ce69c, _0x2fdb02(_0x231f21));
          _0x4f841b(_0x231f21, "m_bgBackgroundSpine", _0x5a18e1, _0x2fdb02(_0x231f21));
          _0x4f841b(_0x231f21, "m_machineAnim", _0x1671f5, _0x2fdb02(_0x231f21));
          _0x4f841b(_0x231f21, "m_declareSke", _0x40ec37, _0x2fdb02(_0x231f21));
          _0x4f841b(_0x231f21, "m_complimentSke", _0xdb13c7, _0x2fdb02(_0x231f21));
          _0x4f841b(_0x231f21, "m_logoNode", _0x5b9e3d, _0x2fdb02(_0x231f21));
          _0x231f21.m_doorOpenCDRound = 0;
          return _0x231f21;
        }
        _0x567cf6(_0x1c798d, _0x3f04f0);
        var _0x56f06c = _0x1c798d.prototype;
        _0x56f06c.start = function () {};
        _0x56f06c.Init = function (_0x54b8af) {
          this.m_gameView = _0x54b8af;
          this.BackgroundSpine.Init(_0x54b8af);
          this.m_bgBackgroundSpine.Init(_0x54b8af);
          this.m_machineAnim.Init(_0x54b8af);
          this.HideLogo();
          this.m_gameView.Manual.node.active = false;
        };
        _0x56f06c.RefreshView = function () {
          this.m_machineAnim.RefreshView();
          this.BackgroundSpine.RefreshView();
        };
        _0x56f06c.PlayIntro = function () {
          var _0x3d0ba2 = _0x12d1c6(_0x41e40d().mark(function _0x58ad53() {
            return _0x41e40d().wrap(function (_0x4a147f) {
              for (;;) {
                switch (_0x4a147f.prev = _0x4a147f.next) {
                  case 0:
                    this.m_gameView.LockRotation();
                    this.m_machineAnim.PlayIntro();
                    _0x4a147f.next = 4;
                    return this.m_backgroundSpine.PlayIntro();
                  case 4:
                    this.m_gameView.ResumeRotation();
                  case 5:
                  case "end":
                    return _0x4a147f.stop();
                }
              }
            }, _0x58ad53, this);
          }));
          return function () {
            return _0x3d0ba2.apply(this, arguments);
          };
        }();
        _0x56f06c.PlayMGIdle = function () {
          this.m_backgroundSpine.PlayMGIdle();
        };
        _0x56f06c.PlayBGIdle = function () {
          this.BackgroundSpine.PlayBGIdle();
        };
        _0x56f06c.PlayBGIntro = function () {
          var _0x327a4c = _0x12d1c6(_0x41e40d().mark(function _0x31174a() {
            return _0x41e40d().wrap(function (_0x206b9c) {
              for (;;) {
                switch (_0x206b9c.prev = _0x206b9c.next) {
                  case 0:
                    this.m_gameView.LockRotation();
                    this.m_gameView.IsLandscape && (this.HideLogo(), this.m_gameView.Manual.node.active = false);
                    this.m_bgBackgroundSpine.node.active = true;
                    this.m_machineAnim.PlayBGIntro();
                    this.m_bgBackgroundSpine.PlayBGIntro();
                    _0x206b9c.next = 7;
                    return this.m_backgroundSpine.PlayBGIntro();
                  case 7:
                    this.m_backgroundSpine.node.active = false;
                    this.m_gameView.IsLandscape && (this.FadeInLogo(), this.FadeInManual());
                  case 9:
                  case "end":
                    return _0x206b9c.stop();
                }
              }
            }, _0x31174a, this);
          }));
          return function () {
            return _0x327a4c.apply(this, arguments);
          };
        }();
        _0x56f06c.PlayBGExit = function () {
          var _0x35e480 = _0x12d1c6(_0x41e40d().mark(function _0x5815e1() {
            return _0x41e40d().wrap(function (_0x59a0d7) {
              for (;;) {
                switch (_0x59a0d7.prev = _0x59a0d7.next) {
                  case 0:
                    this.ResetDoorLv();
                    this.m_gameView.LockRotation();
                    this.HideLogo();
                    this.m_gameView.Manual.node.active = false;
                    this.m_machineAnim.PlayBGExit();
                    this.m_bgBackgroundSpine.PlayBGExit();
                    this.m_backgroundSpine.node.active = true;
                    _0x59a0d7.next = 9;
                    return this.m_backgroundSpine.PlayBGExit();
                  case 9:
                    this.m_bgBackgroundSpine.node.active = false;
                    this.FadeInLogo();
                    this.FadeInManual();
                  case 12:
                  case "end":
                    return _0x59a0d7.stop();
                }
              }
            }, _0x5815e1, this);
          }));
          return function () {
            return _0x35e480.apply(this, arguments);
          };
        }();
        _0x56f06c.PlayMGOpen = function () {
          var _0x287f22 = _0x12d1c6(_0x41e40d().mark(function _0x2ef7cb() {
            var _0x3b82ca;
            return _0x41e40d().wrap(function (_0x277703) {
              for (;;) {
                switch (_0x277703.prev = _0x277703.next) {
                  case 0:
                    if (_0x3b82ca = Math.random() < _0x883e10.DoorMultiple, this.m_doorOpenCDRound > 0 && this.m_doorOpenCDRound--, !(_0x3b82ca && this.m_doorOpenCDRound <= 0)) {
                      _0x277703.next = 8;
                      break;
                    }
                    this.m_doorOpenCDRound = _0x883e10.DoorOpenCDRound;
                    this.m_gameView.LockRotation();
                    _0x277703.next = 7;
                    return this.m_backgroundSpine.PlayMGOpen();
                  case 7:
                    this.m_gameView.ResumeRotation();
                  case 8:
                  case "end":
                    return _0x277703.stop();
                }
              }
            }, _0x2ef7cb, this);
          }));
          return function () {
            return _0x287f22.apply(this, arguments);
          };
        }();
        _0x56f06c.PlayDoorNearWin = function () {
          this.BackgroundSpine.PlayDoorNearWin();
        };
        _0x56f06c.StopDoorNearWin = function () {
          this.BackgroundSpine.StopDoorNearWin();
        };
        _0x56f06c.ResetDoorView = function () {
          this.ResetDoorLv();
          this.PlayMGIdle();
        };
        _0x56f06c.ResetDoorLv = function () {
          this.BackgroundSpine.ResetDoorLv();
        };
        _0x56f06c.ShowDeclare = function () {
          var _0xced565 = _0x12d1c6(_0x41e40d().mark(function _0x308ef2(_0x1e35d6) {
            return _0x41e40d().wrap(function (_0x54804f) {
              for (;;) {
                switch (_0x54804f.prev = _0x54804f.next) {
                  case 0:
                    _0x54804f.next = 2;
                    return this.m_declareSke.Show(this.IsLandscape, _0x1e35d6);
                  case 2:
                  case "end":
                    return _0x54804f.stop();
                }
              }
            }, _0x308ef2, this);
          }));
          return function (_0x49999a) {
            return _0xced565.apply(this, arguments);
          };
        }();
        _0x56f06c.ShowCompliment = function () {
          var _0x24123c = _0x12d1c6(_0x41e40d().mark(function _0x5dad21(_0xae0f7d, _0x3e7188) {
            return _0x41e40d().wrap(function (_0x330155) {
              for (;;) {
                switch (_0x330155.prev = _0x330155.next) {
                  case 0:
                    this.m_gameView.LockRotation();
                    _0x330155.next = 3;
                    return this.m_complimentSke.ShowHightLight(this.IsLandscape);
                  case 3:
                    this.IsLandscape && _0x311069.SetBarNodeVisiable(false);
                    this.m_gameView.StopBGM();
                    _0x23cbbd.Play(_0x883e10.AudioClips.BG_End);
                    _0x330155.next = 8;
                    return this.m_complimentSke.Show(this.IsLandscape, _0xae0f7d, _0x3e7188);
                  case 8:
                  case "end":
                    return _0x330155.stop();
                }
              }
            }, _0x5dad21, this);
          }));
          return function (_0x58bd01, _0x44704e) {
            return _0x24123c.apply(this, arguments);
          };
        }();
        _0x56f06c.FadeInLogo = function () {
          this.Fade(this.m_logoNode, true, 0.2);
        };
        _0x56f06c.HideLogo = function () {
          this.m_logoNode.active = false;
        };
        _0x56f06c.FadeInManual = function () {
          this.Fade(this.m_gameView.Manual.node, true, 0.2);
        };
        _0x56f06c.Fade = function (_0x4433f3, _0x23eca7, _0x1ef61b, _0x22a848) {
          if (undefined === _0x1ef61b && (_0x1ef61b = 0), undefined === _0x22a848 && (_0x22a848 = 255), 0 == _0x1ef61b) {
            _0x4433f3.active = _0x23eca7;
          } else {
            var _0x1a08cf = _0x23eca7 ? 0.1 : _0x22a848;
            var _0x24e433 = _0x23eca7 ? _0x22a848 : 0.1;
            var _0x467101 = _0x4433f3.getComponent(_0x4ed45d);
            _0x467101 || (_0x467101 = _0x4433f3.addComponent(_0x4ed45d));
            _0x4433f3.active = true;
            _0x467101.opacity = _0x1a08cf;
            _0x51e4e3(_0x467101).to(_0x1ef61b, {
              opacity: _0x24e433
            }).start();
          }
        };
        _0x54ea23(_0x1c798d, [{
          key: "IsLandscape",
          get: function () {
            return this.m_gameView.IsLandscape;
          }
        }, {
          key: "BackgroundSpine",
          get: function () {
            return this.m_gameView.IsInBG ? this.m_bgBackgroundSpine : this.m_backgroundSpine;
          }
        }]);
        return _0x1c798d;
      }(_0x5aac4b), _0x4ce69c = _0x5a72b5(_0x544804.prototype, "m_backgroundSpine", [_0x3d5923], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a18e1 = _0x5a72b5(_0x544804.prototype, "m_bgBackgroundSpine", [_0x243a2c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1671f5 = _0x5a72b5(_0x544804.prototype, "m_machineAnim", [_0x2d7df5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x40ec37 = _0x5a72b5(_0x544804.prototype, "m_declareSke", [_0x1982c4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xdb13c7 = _0x5a72b5(_0x544804.prototype, "m_complimentSke", [_0x485840], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5b9e3d = _0x5a72b5(_0x544804.prototype, "m_logoNode", [_0x51f94c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xeff7a2 = _0x544804)) || _0xeff7a2;
      var _0x43a15f;
      var _0x30df48;
      var _0xab6561;
      var _0x3160d6;
      var _0x7bc0db;
      var _0x479536;
      var _0xa5f4d7;
      var _0x3edeb0;
      var _0x3d1b95;
      var _0x329d9b;
      var _0x547b5f;
      var _0x473ab9;
      var _0x53e9d0;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "77acaFcNgVDULwRQEtO5wYa", "BigWinComponent", undefined);
      var _0x3f23fc = 1.5;
      var _0x47a39d = {
        Big: {
          Start: "BigWin_Start",
          End: "BigWin_End"
        },
        Mega: {
          Start: "MegaWin_Start",
          End: "MegaWin_End"
        },
        Super: {
          Start: "SuperWin_Start",
          End: "SuperWin_End"
        }
      };
      var _0x3f88c2 = _0x42d118.ccclass;
      var _0x4b001c = _0x42d118.property;
      _0x43a15f = _0x4b001c({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      _0x30df48 = _0x4b001c({
        type: _0x1a25c9.Skeleton,
        tooltip: "遮罩"
      });
      _0xab6561 = _0x4b001c({
        type: _0x1a25c9.Skeleton,
        tooltip: "Extra Spine"
      });
      _0x3160d6 = _0x4b001c({
        type: _0x42ff5a,
        tooltip: "贏分"
      });
      _0x7bc0db = _0x4b001c({
        type: _0x598810,
        tooltip: "End extra effect delay time"
      });
      var _0x2f9485 = _0x3f88c2((_0x53e9d0 = function (_0x3b45cc) {
        function _0x9b9e7b() {
          for (var _0x2f6313, _0x20e939 = arguments.length, _0x195d0d = new Array(_0x20e939), _0x35825e = 0; _0x35825e < _0x20e939; _0x35825e++) {
            _0x195d0d[_0x35825e] = arguments[_0x35825e];
          }
          _0x4f841b(_0x2f6313 = _0x3b45cc.call.apply(_0x3b45cc, [this].concat(_0x195d0d)) || this, "m_spine", _0x3edeb0, _0x2fdb02(_0x2f6313));
          _0x4f841b(_0x2f6313, "m_maskSpine", _0x3d1b95, _0x2fdb02(_0x2f6313));
          _0x4f841b(_0x2f6313, "m_extraSpine", _0x329d9b, _0x2fdb02(_0x2f6313));
          _0x4f841b(_0x2f6313, "m_winLabel", _0x547b5f, _0x2fdb02(_0x2f6313));
          _0x4f841b(_0x2f6313, "m_endExtraDelayTime", _0x473ab9, _0x2fdb02(_0x2f6313));
          _0x2f6313.m_isEnd = true;
          _0x2f6313.m_isShowEnd = true;
          _0x2f6313.m_isShowAward = false;
          _0x2f6313.m_eventCb = null;
          _0x2f6313.m_showValueCb = null;
          _0x2f6313.m_cancelCb = null;
          _0x2f6313.m_lvl = 0;
          _0x2f6313.m_nowLvl = 0;
          _0x2f6313.m_win = 0;
          _0x2f6313.m_showWin = 0;
          _0x2f6313.m_step = 0;
          _0x2f6313.m_isShowingExtraEnd = false;
          return _0x2f6313;
        }
        _0x567cf6(_0x9b9e7b, _0x3b45cc);
        var _0x38dd5f = _0x9b9e7b.prototype;
        _0x38dd5f.update = function (_0x52b862) {
          this.m_isShowAward && (this.m_showWin += this.m_step * _0x52b862, this.m_showWin >= this.m_win && (this.m_showWin = this.m_win, this.m_isShowAward = false), this.m_winLabel.string = _0x369abc.FormatNumberThousands(_0x369abc.strip(this.m_showValueCb ? this.m_showValueCb(this.m_showWin) : this.m_showWin), _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
        };
        _0x38dd5f.Init = function (_0x96a67d, _0x36680c) {
          this.m_eventCb = _0x96a67d;
          this.m_showValueCb = _0x36680c;
          this.m_maskSpine && (this.m_maskSpine.node.active = false);
        };
        _0x38dd5f.Show = function (_0x133935, _0x3c34c0, _0x1fae66) {
          if (undefined === _0x1fae66 && (_0x1fae66 = true), _0x133935 > 0 && _0x3c34c0 > _0x9b9e7b.Level.NONE && _0x3c34c0 <= _0x9b9e7b.Level.SUPER) {
            this.m_isEnd = false;
            this.m_lvl = _0x3c34c0;
            this.m_nowLvl = _0x1fae66 ? 0 : _0x3c34c0 - 1;
            this.m_win = _0x133935;
            this.m_showWin = 0;
            this.m_winLabel.string = "0";
            this.m_isShowEnd = false;
            for (var _0x37978c = 0, _0x2c434e = _0x1fae66 ? _0x9b9e7b.Level.BIG : this.m_lvl; _0x2c434e <= this.m_lvl; _0x2c434e++) {
              var _0x2dc16d = "";
              var _0x1eabd8 = "";
              switch (_0x2c434e) {
                case _0x9b9e7b.Level.BIG:
                  _0x2dc16d = _0x47a39d.Big.Start;
                  _0x1eabd8 = _0x47a39d.Big.End;
                  break;
                case _0x9b9e7b.Level.MEGA:
                  _0x2dc16d = _0x47a39d.Mega.Start;
                  _0x1eabd8 = _0x47a39d.Mega.End;
                  break;
                case _0x9b9e7b.Level.SUPER:
                  _0x2dc16d = _0x47a39d.Super.Start;
                  _0x1eabd8 = _0x47a39d.Super.End;
              }
              if ("" !== _0x2dc16d && "" !== _0x1eabd8) {
                var _0xbfb2e0 = this.m_spine.findAnimation(_0x2dc16d);
                _0xbfb2e0 && (_0x37978c += _0xbfb2e0.duration);
              }
            }
            this.m_step = _0x369abc.divide(this.m_win, _0x37978c || 5);
            this.m_isShowAward = true;
            this.m_maskSpine && (this.m_maskSpine.node.active = true, this.PlayAnimation(this.m_maskSpine, "BigWin_Start"));
            this.ShowNext();
          }
        };
        _0x38dd5f.Stop = function () {
          this.m_isShowEnd || (this.m_cancelCb && this.m_cancelCb(), this.ShowEnd());
        };
        _0x38dd5f.SetSkin = function (_0x7aa89d) {
          this.m_spine.setSkin(_0x7aa89d);
        };
        _0x38dd5f.ShowNext = function () {
          var _0x5d9846 = _0x12d1c6(_0x41e40d().mark(function _0x1a1590() {
            var _0x53428b;
            return _0x41e40d().wrap(function (_0x41b332) {
              for (;;) {
                switch (_0x41b332.prev = _0x41b332.next) {
                  case 0:
                    if (this.m_nowLvl !== this.m_lvl) {
                      _0x41b332.next = 4;
                      break;
                    }
                    this.ShowEnd();
                    _0x41b332.next = 23;
                    break;
                  case 4:
                    this.m_nowLvl++;
                    _0x53428b = false;
                    _0x41b332.t0 = this.m_nowLvl;
                    _0x41b332.next = _0x41b332.t0 === _0x9b9e7b.Level.BIG ? 9 : _0x41b332.t0 === _0x9b9e7b.Level.MEGA ? 14 : _0x41b332.t0 === _0x9b9e7b.Level.SUPER ? 18 : 22;
                    break;
                  case 9:
                    this.CheckExtraSpineStart();
                    _0x41b332.next = 12;
                    return this.PlayAnimation(this.m_spine, _0x47a39d.Big.Start);
                  case 12:
                    _0x53428b = _0x41b332.sent;
                    return _0x41b332.abrupt("break", 22);
                  case 14:
                    _0x41b332.next = 16;
                    return this.PlayAnimation(this.m_spine, _0x47a39d.Mega.Start);
                  case 16:
                    _0x53428b = _0x41b332.sent;
                    return _0x41b332.abrupt("break", 22);
                  case 18:
                    _0x41b332.next = 20;
                    return this.PlayAnimation(this.m_spine, _0x47a39d.Super.Start);
                  case 20:
                    _0x53428b = _0x41b332.sent;
                    return _0x41b332.abrupt("break", 22);
                  case 22:
                    _0x53428b || this.ShowNext();
                  case 23:
                  case "end":
                    return _0x41b332.stop();
                }
              }
            }, _0x1a1590, this);
          }));
          return function () {
            return _0x5d9846.apply(this, arguments);
          };
        }();
        _0x38dd5f.ShowEnd = function () {
          var _0x3ff09f = _0x12d1c6(_0x41e40d().mark(function _0x577b48() {
            var _0x26a8dc;
            return _0x41e40d().wrap(function (_0x582512) {
              for (;;) {
                switch (_0x582512.prev = _0x582512.next) {
                  case 0:
                    if (!this.m_isShowEnd) {
                      _0x582512.next = 2;
                      break;
                    }
                    return _0x582512.abrupt("return");
                  case 2:
                    this.m_isShowEnd = true;
                    this.m_isShowAward = false;
                    this.m_winLabel.string = _0x369abc.FormatNumberThousands(_0x369abc.strip(this.m_showValueCb ? this.m_showValueCb(this.m_win) : this.m_win), _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
                    this.m_maskSpine && this.PlayAnimation(this.m_maskSpine, "BigWin_End");
                    _0x26a8dc = "";
                    _0x582512.t0 = this.m_lvl;
                    _0x582512.next = _0x582512.t0 === _0x9b9e7b.Level.BIG ? 10 : _0x582512.t0 === _0x9b9e7b.Level.MEGA ? 12 : _0x582512.t0 === _0x9b9e7b.Level.SUPER ? 14 : 16;
                    break;
                  case 10:
                    _0x26a8dc = _0x47a39d.Big.End;
                    return _0x582512.abrupt("break", 16);
                  case 12:
                    _0x26a8dc = _0x47a39d.Mega.End;
                    return _0x582512.abrupt("break", 16);
                  case 14:
                    _0x26a8dc = _0x47a39d.Super.End;
                    return _0x582512.abrupt("break", 16);
                  case 16:
                    if ("" === _0x26a8dc) {
                      _0x582512.next = 21;
                      break;
                    }
                    _0x582512.next = 19;
                    return Promise.all([this.CheckExtraSpineEnd(), this.PlayAnimation(this.m_spine, _0x26a8dc)]);
                  case 19:
                    _0x582512.next = 22;
                    break;
                  case 21:
                    console.error("BigWinComponent ShowEnd animName is empty!", this.m_lvl);
                  case 22:
                    this.m_maskSpine && (this.m_maskSpine.node.active = false);
                    this.m_isEnd = true;
                  case 24:
                  case "end":
                    return _0x582512.stop();
                }
              }
            }, _0x577b48, this);
          }));
          return function () {
            return _0x3ff09f.apply(this, arguments);
          };
        }();
        _0x38dd5f.CheckExtraSpineStart = function () {
          var _0xfab310 = this;
          this.m_extraSpine && (this.m_extraSpine.node.active = true, this.PlayAnimation(this.m_extraSpine, "Start").then(function () {
            _0xfab310.m_isShowingExtraEnd || _0xfab310.PlayAnimation(_0xfab310.m_extraSpine, "Loop", true);
          }));
        };
        _0x38dd5f.CheckExtraSpineEnd = function () {
          var _0x38972e = _0x12d1c6(_0x41e40d().mark(function _0x3d5eec() {
            return _0x41e40d().wrap(function (_0x1339d4) {
              for (;;) {
                switch (_0x1339d4.prev = _0x1339d4.next) {
                  case 0:
                    if (this.m_extraSpine) {
                      _0x1339d4.next = 2;
                      break;
                    }
                    return _0x1339d4.abrupt("return");
                  case 2:
                    this.m_isShowingExtraEnd = true;
                    _0x1339d4.next = 5;
                    return _0xc8ef61.Wait(this, this.m_endExtraDelayTime);
                  case 5:
                    _0x1339d4.next = 7;
                    return this.PlayAnimation(this.m_extraSpine, "End");
                  case 7:
                    this.m_isShowingExtraEnd = false;
                  case 8:
                  case "end":
                    return _0x1339d4.stop();
                }
              }
            }, _0x3d5eec, this);
          }));
          return function () {
            return _0x38972e.apply(this, arguments);
          };
        }();
        _0x38dd5f.PlayAnimation = function (_0x197d5c, _0x1e3286, _0x5615ef, _0x4587e7) {
          var _0x259ac2 = this;
          undefined === _0x5615ef && (_0x5615ef = false);
          undefined === _0x4587e7 && (_0x4587e7 = 0);
          return new Promise(function (_0x46e818) {
            var _0x3c4c49 = false;
            _0x259ac2.m_cancelCb = function () {
              _0x46e818(_0x3c4c49 = true);
            };
            _0x197d5c.clearTrack(_0x4587e7);
            _0x197d5c.setToSetupPose();
            var _0x58a142 = _0x197d5c.setAnimation(_0x4587e7, _0x1e3286, _0x5615ef);
            var _0x3c782a = function () {
              _0x259ac2.m_cancelCb = null;
              _0x46e818(_0x3c4c49);
            };
            _0x58a142 ? (_0x197d5c.setTrackEventListener(_0x58a142, function (_0x4abf0a, _0x2d01f4) {
              var _0x10a2ae = _0x2d01f4.data.name;
              var _0x4cc41c = _0x2d01f4.stringValue;
              _0x259ac2.m_eventCb && _0x259ac2.m_eventCb(_0x10a2ae, _0x4cc41c, _0x1e3286);
            }), _0x197d5c.setTrackCompleteListener(_0x58a142, function () {
              _0x197d5c.setTrackCompleteListener(_0x58a142, function () {});
              _0x3c782a();
            })) : _0x197d5c.setCompleteListener(function () {
              _0x197d5c.setCompleteListener(null);
              _0x3c782a();
            });
          });
        };
        _0x54ea23(_0x9b9e7b, [{
          key: "IsEnd",
          get: function () {
            return this.m_isEnd;
          },
          set: function (_0x319a76) {
            this.m_isEnd = _0x319a76;
          }
        }]);
        return _0x9b9e7b;
      }(_0x5aac4b), _0x53e9d0.Level = {
        NONE: 0,
        BIG: 1,
        MEGA: 2,
        SUPER: 3
      }, _0xa5f4d7 = _0x53e9d0, _0x3edeb0 = _0x5a72b5(_0xa5f4d7.prototype, "m_spine", [_0x43a15f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3d1b95 = _0x5a72b5(_0xa5f4d7.prototype, "m_maskSpine", [_0x30df48], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x329d9b = _0x5a72b5(_0xa5f4d7.prototype, "m_extraSpine", [_0xab6561], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x547b5f = _0x5a72b5(_0xa5f4d7.prototype, "m_winLabel", [_0x3160d6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x473ab9 = _0x5a72b5(_0xa5f4d7.prototype, "m_endExtraDelayTime", [_0x7bc0db], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3f23fc;
        }
      }), _0x479536 = _0xa5f4d7)) || _0x479536;
      var _0x35c2db;
      var _0x35c9e7;
      var _0x1b3c33;
      var _0x1c4da4;
      var _0x4a43a3;
      var _0x4e159e;
      var _0x4a68e9;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "bb829FLp0RN/4l5gkM4UyyM", "NumberRolling", undefined);
      var _0x4bdc13 = _0x42d118.ccclass;
      var _0x334eee = _0x42d118.property;
      _0x35c2db = _0x4bdc13("NumberRolling");
      _0x35c9e7 = _0x334eee({
        type: _0x42ff5a,
        tooltip: "數字顯示",
        displayName: "Number Label"
      });
      _0x1b3c33 = _0x334eee({
        type: _0x380901,
        tooltip: "數值變動所需時間(單位：毫秒)"
      });
      var _0x13a032 = _0x35c2db((_0x4a43a3 = function (_0x309913) {
        function _0x3e6ca0() {
          for (var _0x4e2c33, _0x13158b = arguments.length, _0x335339 = new Array(_0x13158b), _0x2aac05 = 0; _0x2aac05 < _0x13158b; _0x2aac05++) {
            _0x335339[_0x2aac05] = arguments[_0x2aac05];
          }
          _0x4f841b(_0x4e2c33 = _0x309913.call.apply(_0x309913, [this].concat(_0x335339)) || this, "m_numberLabel", _0x4e159e, _0x2fdb02(_0x4e2c33));
          _0x4f841b(_0x4e2c33, "m_duration", _0x4a68e9, _0x2fdb02(_0x4e2c33));
          _0x4e2c33.m_isRolling = false;
          _0x4e2c33.m_currentValue = 0;
          _0x4e2c33.m_targetValue = 0;
          _0x4e2c33.m_deltaValue = 0;
          _0x4e2c33.m_isDecimal = false;
          _0x4e2c33.m_formatCallback = null;
          return _0x4e2c33;
        }
        _0x567cf6(_0x3e6ca0, _0x309913);
        var _0x44ded1 = _0x3e6ca0.prototype;
        _0x44ded1.start = function () {};
        _0x44ded1.update = function (_0x2a5971) {
          this.m_isRolling && this.UpdateLabel(_0x2a5971);
        };
        _0x44ded1.SetValue = function (_0x24721e, _0x5a862c) {
          this.m_currentValue = _0x24721e;
          this.m_targetValue = _0x24721e;
          this.NumberUpdate(_0x24721e, _0x5a862c);
        };
        _0x44ded1.RollNumberTo = function (_0x54f202, _0x18850c) {
          this.RollNumber(this.m_currentValue, _0x54f202, _0x18850c, true);
        };
        _0x44ded1.RollNumber = function (_0x298336, _0x4d5f4e, _0x22dc71, _0x12bd90) {
          undefined === _0x12bd90 && (_0x12bd90 = false);
          this.m_currentValue = _0x12bd90 ? this.m_currentValue : _0x298336;
          this.m_targetValue = _0x4d5f4e;
          var _0x24221c = this.m_duration;
          "number" == typeof _0x22dc71 && _0x22dc71 > 0 && (_0x24221c = _0x22dc71);
          _0x24221c = _0x24221c <= 0 ? 1 : _0x24221c;
          this.m_deltaValue = _0x369abc.divide(_0x369abc.minus(this.m_targetValue, this.m_currentValue), _0x369abc.times(_0x24221c, 0.001));
          this.m_isRolling = 0 != this.m_deltaValue;
        };
        _0x44ded1.SetFormatCallback = function (_0x111602) {
          this.m_formatCallback = _0x111602;
        };
        _0x44ded1.UpdateLabel = function (_0x57267b) {
          var _0x2673eb = this.m_deltaValue * _0x57267b;
          var _0x2eba0b = this.m_currentValue + _0x2673eb;
          (_0x2673eb > 0 ? _0x2eba0b >= this.m_targetValue : _0x2eba0b <= this.m_targetValue) ? (this.m_currentValue = this.m_targetValue, this.NumberUpdate(this.m_currentValue, true), this.Reset()) : (this.m_currentValue = _0x2eba0b, this.NumberUpdate(this.m_currentValue));
        };
        _0x44ded1.NumberUpdate = function (_0x4b12c9, _0x19a5de) {
          undefined === _0x19a5de && (_0x19a5de = false);
          var _0x1ca770 = "";
          _0x1ca770 = this.m_formatCallback ? this.m_formatCallback(_0x4b12c9, _0x19a5de) : _0x369abc.FormatNumberThousands(_0x4b12c9, _0x369abc.FORMAT_NUMBER_TYPE.DEFINE_DOT_NONE_ZERO, false);
          this.m_numberLabel.string = _0x1ca770;
        };
        _0x44ded1.Reset = function () {
          this.m_isRolling = false;
          this.m_deltaValue = 0;
        };
        _0x54ea23(_0x3e6ca0, [{
          key: "string",
          get: function () {
            return this.m_numberLabel.string;
          }
        }, {
          key: "IsRolling",
          get: function () {
            return this.m_isRolling;
          }
        }, {
          key: "CurrentValue",
          get: function () {
            return this.m_currentValue;
          }
        }, {
          key: "Value",
          get: function () {
            return this.m_targetValue;
          }
        }]);
        return _0x3e6ca0;
      }(_0x5aac4b), _0x4e159e = _0x5a72b5(_0x4a43a3.prototype, "m_numberLabel", [_0x35c9e7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4a68e9 = _0x5a72b5(_0x4a43a3.prototype, "m_duration", [_0x1b3c33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1000;
        }
      }), _0x1c4da4 = _0x4a43a3)) || _0x1c4da4;
      var _0x496d51;
      var _0x396cb0;
      var _0x5e13fc;
      var _0x450e62;
      var _0x45f662;
      var _0x29464d;
      var _0x380853;
      var _0x2944d6;
      var _0x1bd7bf;
      var _0x2f927e;
      var _0x4107e5;
      var _0x412011;
      var _0x541cf3;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "701d8LdPihKtr1zfXLqAiir", "BigWinView", undefined);
      (function (_0x5b243e) {
        _0x5b243e[_0x5b243e.BIGWIN = 0] = "BIGWIN";
        _0x5b243e[_0x5b243e.MEGAWIN = 1] = "MEGAWIN";
        _0x5b243e[_0x5b243e.SUPERWIN = 2] = "SUPERWIN";
      })(_0x541cf3 || (_0x541cf3 = {}));
      var _0x527c69 = [{
        betRate: 0,
        winType: _0x2f9485.Level.NONE
      }, {
        betRate: 6,
        winType: _0x2f9485.Level.BIG
      }, {
        betRate: 15,
        winType: _0x2f9485.Level.MEGA
      }, {
        betRate: 30,
        winType: _0x2f9485.Level.SUPER
      }];
      var _0x20a0ba = _0x42d118.ccclass;
      var _0x163ed0 = _0x42d118.property;
      _0x496d51 = _0x163ed0({
        type: _0x13a032,
        tooltip: "贏分文字"
      });
      _0x396cb0 = _0x163ed0({
        type: _0x5cf7a3,
        tooltip: "大獎動畫"
      });
      _0x5e13fc = _0x163ed0({
        type: _0x2f9485,
        tooltip: "大獎表演"
      });
      _0x450e62 = _0x163ed0({
        type: _0x5cf7a3,
        tooltip: "大獎表演遮罩"
      });
      _0x45f662 = _0x163ed0({
        type: _0x1a25c9.Skeleton,
        tooltip: "大獎表演動畫:監聽用"
      });
      var _0x573cdb = _0x20a0ba((_0x380853 = function (_0x2bf9cf) {
        function _0xb966d9() {
          for (var _0x57ea32, _0x175407 = arguments.length, _0x3aa69e = new Array(_0x175407), _0x542c86 = 0; _0x542c86 < _0x175407; _0x542c86++) {
            _0x3aa69e[_0x542c86] = arguments[_0x542c86];
          }
          _0x4f841b(_0x57ea32 = _0x2bf9cf.call.apply(_0x2bf9cf, [this].concat(_0x3aa69e)) || this, "m_winLabel", _0x2944d6, _0x2fdb02(_0x57ea32));
          _0x4f841b(_0x57ea32, "m_spineNode", _0x1bd7bf, _0x2fdb02(_0x57ea32));
          _0x4f841b(_0x57ea32, "m_bigWin", _0x2f927e, _0x2fdb02(_0x57ea32));
          _0x4f841b(_0x57ea32, "m_mask", _0x4107e5, _0x2fdb02(_0x57ea32));
          _0x4f841b(_0x57ea32, "m_spine", _0x412011, _0x2fdb02(_0x57ea32));
          _0x57ea32.m_endCb = null;
          _0x57ea32.m_isShow = false;
          _0x57ea32.m_bgmID = null;
          _0x57ea32.m_finalAnim = null;
          return _0x57ea32;
        }
        _0x567cf6(_0xb966d9, _0x2bf9cf);
        var _0x16c6bd = _0xb966d9.prototype;
        _0x16c6bd.Init = function () {
          var _0x282cc = this;
          this.m_bigWin.Init(function (_0x51d2ba, _0x549bce, _0x2c869c) {
            _0x282cc.EventCb(_0x51d2ba, _0x549bce, _0x2c869c);
          }, null);
          this.m_spine.setStartListener(function (_0x191c4c) {
            _0x282cc.OnSpineStart(_0x191c4c);
          });
        };
        _0x16c6bd.CheckAward = function (_0x1f0768, _0x443419) {
          for (var _0x417e6e = -1, _0x7350cc = _0x369abc.divide(_0x1f0768, _0x443419), _0x3c45ca = _0x527c69.length - 1; _0x3c45ca >= 0; _0x3c45ca--) {
            if (_0x7350cc >= _0x527c69[_0x3c45ca].betRate) {
              _0x417e6e = _0x3c45ca;
              break;
            }
          }
          return _0x417e6e;
        };
        _0x16c6bd.Show = function (_0x6ddfe, _0x150ccf, _0x29044a) {
          0 != _0x150ccf ? (this.Fade(this.m_mask, 0.1, 150), this.m_finalAnim = 1 == _0x150ccf ? "BigWin_End" : 2 == _0x150ccf ? "MegaWin_End" : "SuperWin_End", this.node.active = true, this.m_winLabel.node.active = true, this.m_spineNode.active = true, this.m_endCb = _0x29044a, this.m_bgmID = _0x23cbbd.Play(_0x883e10.AudioClips.BigWin, false), this.m_bigWin.Show(_0x6ddfe, _0x150ccf), this.m_isShow = true) : _0x29044a();
        };
        _0x16c6bd.Stop = function () {
          this.m_isShow && this.m_bigWin.Stop();
        };
        _0x16c6bd.EndFunction = function () {
          var _0x148936 = this;
          this.m_endCb && (this.m_endCb(), this.m_endCb = null);
          this.Fade(this.m_mask, 0.1, 0.1);
          _0xc8ef61.Wait(this, 0.1).then(function () {
            _0x148936.node.active = false;
            _0x148936.m_winLabel.node.active = false;
            _0x148936.m_spineNode.active = false;
          });
        };
        _0x16c6bd.OnSpineStart = function (_0x553135) {
          "MegaWin_Start" == _0x553135.animation.name || "SuperWin_Start" == _0x553135.animation.name ? _0x23cbbd.Play(_0x883e10.AudioClips.Big_Win_Change) : _0x553135.animation.name == this.m_finalAnim && (_0x23cbbd.Stop(this.m_bgmID), _0x23cbbd.Play(_0x883e10.AudioClips.Big_Win_End));
        };
        _0x16c6bd.EventCb = function (_0x1509cb, _0x11e585, _0x1cf553) {
          _0xb9245("WinEffect eventCb", _0x1509cb, _0x11e585, _0x1cf553);
        };
        _0x16c6bd.Fade = function (_0x95161e, _0x88ee13, _0x469b8f) {
          undefined === _0x88ee13 && (_0x88ee13 = 0);
          var _0x4fb8a2 = _0x95161e.getComponent(_0x4ed45d);
          _0x4fb8a2 || (_0x4fb8a2 = _0x95161e.addComponent(_0x4ed45d));
          0 == _0x88ee13 ? _0x4fb8a2.opacity = _0x469b8f : _0x51e4e3(_0x4fb8a2).to(_0x88ee13, {
            opacity: _0x469b8f
          }).start();
        };
        _0x16c6bd.update = function () {
          this.m_isShow && this.m_bigWin.IsEnd && (this.m_isShow = false, this.EndFunction());
        };
        return _0xb966d9;
      }(_0x5aac4b), _0x2944d6 = _0x5a72b5(_0x380853.prototype, "m_winLabel", [_0x496d51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1bd7bf = _0x5a72b5(_0x380853.prototype, "m_spineNode", [_0x396cb0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2f927e = _0x5a72b5(_0x380853.prototype, "m_bigWin", [_0x5e13fc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4107e5 = _0x5a72b5(_0x380853.prototype, "m_mask", [_0x450e62], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x412011 = _0x5a72b5(_0x380853.prototype, "m_spine", [_0x45f662], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x29464d = _0x380853)) || _0x29464d;
      var _0x3399e3;
      var _0x42101c;
      var _0x360c53;
      var _0x297f53;
      var _0x1e8a38;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "7ccdckTY3RDkb95sUqfdhra", "BonusBarSpine", undefined);
      var _0x28a55d = _0x42d118.ccclass;
      var _0x4edb64 = _0x42d118.property;
      _0x3399e3 = _0x4edb64({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      var _0x1fc143 = _0x28a55d((_0x1e8a38 = function (_0x4e414b) {
        function _0x3c4dce() {
          for (var _0x86d70b, _0x44cb89 = arguments.length, _0x3cd13f = new Array(_0x44cb89), _0x112dbe = 0; _0x112dbe < _0x44cb89; _0x112dbe++) {
            _0x3cd13f[_0x112dbe] = arguments[_0x112dbe];
          }
          _0x4f841b(_0x86d70b = _0x4e414b.call.apply(_0x4e414b, [this].concat(_0x3cd13f)) || this, "m_spine", _0x297f53, _0x2fdb02(_0x86d70b));
          return _0x86d70b;
        }
        _0x567cf6(_0x3c4dce, _0x4e414b);
        var _0x2a6615 = _0x3c4dce.prototype;
        _0x2a6615.start = function () {};
        _0x2a6615.PlayAnimation = function (_0x18b46c, _0x3f6c6b, _0x49ed49) {
          return _0x8c49d5.PlayAnimation(this.m_spine, _0x18b46c, _0x3f6c6b, 0, _0x49ed49);
        };
        _0x54ea23(_0x3c4dce, [{
          key: "Spine",
          get: function () {
            return this.m_spine;
          }
        }]);
        return _0x3c4dce;
      }(_0x5aac4b), _0x1e8a38.SpineAnimName = {
        LOCKED: "Locked",
        LOCKED_LOOP: "Locked_Loop",
        MG_IDLE: "MG_Idle",
        START: "Start",
        START_LOOP: "Start_loop",
        UNLOCK: "Unlock",
        UNLOCK_LOOP: "Unlock_Loop",
        WIN_1: "Win_1",
        WIN_2: "Win_2",
        WIN_UPDATE_1: "Win_Update_1",
        WIN_UPDATE_2: "Win_Update_2"
      }, _0x360c53 = _0x1e8a38, _0x297f53 = _0x5a72b5(_0x360c53.prototype, "m_spine", [_0x3399e3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x42101c = _0x360c53)) || _0x42101c;
      var _0x2ce8f1;
      var _0x317ff8;
      var _0x6a0820;
      var _0x50a91b;
      var _0x16f019;
      var _0xcfab25;
      var _0x1bbed6;
      var _0x8ec19c;
      var _0x3bd97d;
      var _0x107728;
      var _0x2d5db2;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "4004cJV+EVMa7F44se4h7lh", "BonusBar", undefined);
      var _0x49db1e = _0x42d118.ccclass;
      var _0x3a7b3c = _0x42d118.property;
      var _0x479f34 = 6;
      _0x2ce8f1 = _0x49db1e("BonusBar");
      _0x317ff8 = _0x3a7b3c({
        type: _0x1fc143,
        tooltip: "動畫"
      });
      _0x6a0820 = _0x3a7b3c({
        type: _0x13a032,
        tooltip: "數字(鎖住)"
      });
      _0x50a91b = _0x3a7b3c({
        type: _0x13a032,
        tooltip: "數字(解鎖)"
      });
      _0x16f019 = _0x3a7b3c({
        type: _0x42ff5a,
        tooltip: "獎池增加數值"
      });
      var _0x1fbb3b = _0x2ce8f1((_0x1bbed6 = function (_0x2cdf73) {
        function _0x14aff5() {
          for (var _0x398574, _0x46a21b = arguments.length, _0x102655 = new Array(_0x46a21b), _0xf670d9 = 0; _0xf670d9 < _0x46a21b; _0xf670d9++) {
            _0x102655[_0xf670d9] = arguments[_0xf670d9];
          }
          _0x4f841b(_0x398574 = _0x2cdf73.call.apply(_0x2cdf73, [this].concat(_0x102655)) || this, "m_ske", _0x8ec19c, _0x2fdb02(_0x398574));
          _0x4f841b(_0x398574, "m_lockNum", _0x3bd97d, _0x2fdb02(_0x398574));
          _0x4f841b(_0x398574, "m_unlockNum", _0x107728, _0x2fdb02(_0x398574));
          _0x4f841b(_0x398574, "m_winNum", _0x2d5db2, _0x2fdb02(_0x398574));
          _0x398574.m_islock = false;
          return _0x398574;
        }
        _0x567cf6(_0x14aff5, _0x2cdf73);
        var _0x8b809f = _0x14aff5.prototype;
        _0x8b809f.start = function () {
          this.m_lockNum.SetFormatCallback(function (_0x319586, _0x4907c1) {
            return _0x883e10.GetDisplayValue(_0x319586, _0x479f34, _0x4907c1, true);
          });
          this.m_unlockNum.SetFormatCallback(function (_0x6f159e, _0x1bf2ef) {
            return _0x883e10.GetDisplayValue(_0x6f159e, _0x479f34, _0x1bf2ef, true);
          });
        };
        _0x8b809f.InitMGView = function () {
          this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.MG_IDLE, true);
        };
        _0x8b809f.InitBGView = function () {
          this.SetValue(0);
          this.m_islock = false;
          this.m_lockNum.node.active = this.m_islock;
          this.m_unlockNum.node.active = !this.m_islock;
        };
        _0x8b809f.ResetBGView = function (_0x58bd4e, _0x30b0ec) {
          undefined === _0x58bd4e && (_0x58bd4e = 0);
          undefined === _0x30b0ec && (_0x30b0ec = false);
          this.SetValue(_0x58bd4e);
          this.m_islock = _0x30b0ec;
          this.PlayIdleAnim();
          this.m_lockNum.node.active = _0x30b0ec;
          this.m_unlockNum.node.active = !_0x30b0ec;
        };
        _0x8b809f.IntroAnim = function () {
          var _0x5ea7e4 = _0x12d1c6(_0x41e40d().mark(function _0x20158f(_0x3e5fa4) {
            return _0x41e40d().wrap(function (_0x459f22) {
              for (;;) {
                switch (_0x459f22.prev = _0x459f22.next) {
                  case 0:
                    this.RollNumberTo(_0x3e5fa4);
                    _0x459f22.next = 3;
                    return this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.START, false);
                  case 3:
                    this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.START_LOOP, true);
                  case 4:
                  case "end":
                    return _0x459f22.stop();
                }
              }
            }, _0x20158f, this);
          }));
          return function (_0xd456b9) {
            return _0x5ea7e4.apply(this, arguments);
          };
        }();
        _0x8b809f.UpdateMul = function () {
          var _0x250f59 = _0x12d1c6(_0x41e40d().mark(function _0x2d91d5(_0x3a0463, _0x14de1f, _0x480b7d) {
            var _0x514899;
            var _0x467057;
            var _0x2f5253;
            var _0x3b109a = this;
            return _0x41e40d().wrap(function (_0x31c3a1) {
              for (;;) {
                switch (_0x31c3a1.prev = _0x31c3a1.next) {
                  case 0:
                    if (this.m_unlockNum.CurrentValue != _0x3a0463 && !this.Islock) {
                      _0x31c3a1.next = 2;
                      break;
                    }
                    return _0x31c3a1.abrupt("return");
                  case 2:
                    1000;
                    _0x514899 = _0x480b7d ? _0x14de1f ? _0x1fc143.SpineAnimName.WIN_UPDATE_2 : _0x1fc143.SpineAnimName.WIN_UPDATE_1 : _0x14de1f ? _0x1fc143.SpineAnimName.WIN_2 : _0x1fc143.SpineAnimName.WIN_1;
                    _0x467057 = _0x369abc.minus(_0x3a0463, this.m_unlockNum.CurrentValue);
                    this.m_winNum.string = _0x883e10.GetDisplayValue(_0x467057, _0x479f34, true, true);
                    _0x2f5253 = function (_0x4bbadc) {
                      switch (_0x4bbadc) {
                        case "AnimationEvent":
                          _0x3b109a.RollNumberTo(_0x3a0463, 1000);
                          _0x3b109a.m_winNum.node.active = true;
                      }
                    };
                    _0x31c3a1.next = 9;
                    return this.m_ske.PlayAnimation(_0x514899, false, _0x2f5253);
                  case 9:
                    this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.START_LOOP, true);
                    this.m_winNum.node.active = false;
                  case 11:
                  case "end":
                    return _0x31c3a1.stop();
                }
              }
            }, _0x2d91d5, this);
          }));
          return function (_0x306c4, _0x1df25c, _0x407658) {
            return _0x250f59.apply(this, arguments);
          };
        }();
        _0x8b809f.Lock = function () {
          var _0x2c6487 = _0x12d1c6(_0x41e40d().mark(function _0x124c44() {
            return _0x41e40d().wrap(function (_0x43b945) {
              for (;;) {
                switch (_0x43b945.prev = _0x43b945.next) {
                  case 0:
                    this.m_islock = true;
                    _0x43b945.next = 3;
                    return this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.LOCKED, false);
                  case 3:
                    this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.LOCKED_LOOP, true);
                    this.m_lockNum.node.active = this.m_islock;
                    this.m_unlockNum.node.active = !this.m_islock;
                  case 6:
                  case "end":
                    return _0x43b945.stop();
                }
              }
            }, _0x124c44, this);
          }));
          return function () {
            return _0x2c6487.apply(this, arguments);
          };
        }();
        _0x8b809f.UnLock = function () {
          var _0x368449 = _0x12d1c6(_0x41e40d().mark(function _0x54be8a() {
            return _0x41e40d().wrap(function (_0x5a416f) {
              for (;;) {
                switch (_0x5a416f.prev = _0x5a416f.next) {
                  case 0:
                    this.m_islock = false;
                    _0x5a416f.next = 3;
                    return this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.UNLOCK, false);
                  case 3:
                    this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.UNLOCK_LOOP, true);
                    this.m_lockNum.node.active = this.m_islock;
                    this.m_unlockNum.node.active = !this.m_islock;
                  case 6:
                  case "end":
                    return _0x5a416f.stop();
                }
              }
            }, _0x54be8a, this);
          }));
          return function () {
            return _0x368449.apply(this, arguments);
          };
        }();
        _0x8b809f.RollNumberTo = function (_0x28c2b8, _0x49693e) {
          this.m_unlockNum.RollNumberTo(_0x28c2b8, _0x49693e);
          this.m_lockNum.SetValue(_0x28c2b8, true);
        };
        _0x8b809f.SetValue = function (_0x4c5272) {
          this.m_unlockNum.SetValue(_0x4c5272, true);
          this.m_lockNum.SetValue(_0x4c5272, true);
        };
        _0x8b809f.PlayIdleAnim = function () {
          this.Islock ? this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.LOCKED_LOOP, true) : this.m_ske.PlayAnimation(_0x1fc143.SpineAnimName.UNLOCK_LOOP, true);
        };
        _0x54ea23(_0x14aff5, [{
          key: "Ske",
          get: function () {
            return this.m_ske;
          }
        }, {
          key: "Islock",
          get: function () {
            return this.m_islock;
          }
        }]);
        return _0x14aff5;
      }(_0x5aac4b), _0x8ec19c = _0x5a72b5(_0x1bbed6.prototype, "m_ske", [_0x317ff8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3bd97d = _0x5a72b5(_0x1bbed6.prototype, "m_lockNum", [_0x6a0820], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x107728 = _0x5a72b5(_0x1bbed6.prototype, "m_unlockNum", [_0x50a91b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2d5db2 = _0x5a72b5(_0x1bbed6.prototype, "m_winNum", [_0x16f019], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xcfab25 = _0x1bbed6)) || _0xcfab25;
      var _0x4b8727;
      var _0x1ae66e;
      var _0x495ba9;
      var _0x292bde;
      function _0x3d88f7() {
        _0x495ba9 = _0x5b9850.ConnectionManager;
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "cc629oBgStE6p3cesIpDU+s", "DataStructure", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "74f7dljUZhO+6o0Pu2tNSAk", "ConnectionManager", undefined);
      (function (_0x46a8e4) {
        _0x46a8e4[_0x46a8e4.TYPE_HTTP = 1] = "TYPE_HTTP";
        _0x46a8e4[_0x46a8e4.TYPE_WEBSOCKET = 2] = "TYPE_WEBSOCKET";
        _0x46a8e4[_0x46a8e4.MAX = 3] = "MAX";
      })(_0x4b8727 || (_0x4b8727 = {}));
      (function (_0x2ad323) {
        _0x2ad323.TYPE_GET = "get";
        _0x2ad323.TYPE_POST = "post";
      })(_0x1ae66e || (_0x1ae66e = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "34d81gQVlJAaJJHg6IUTjH6", "TimeBool", undefined);
      (function (_0x30b7a3) {
        _0x30b7a3[_0x30b7a3.MAX_UINT = 4294967295] = "MAX_UINT";
        _0x30b7a3[_0x30b7a3.MAX_UINT64 = 18446744073709552000] = "MAX_UINT64";
        _0x30b7a3[_0x30b7a3.MAX_INT = -1] = "MAX_INT";
        _0x30b7a3[_0x30b7a3.MIN_INT = 0] = "MIN_INT";
      })(_0x292bde || (_0x292bde = {}));
      var _0x241f3d = function () {
        function _0x570dc0() {
          this.m_duration = _0x292bde.MAX_UINT;
          this.m_deadline = _0x292bde.MAX_UINT64;
          this.m_useDT = false;
          this.m_dt = undefined;
          this.m_duration = _0x292bde.MAX_UINT;
          this.m_deadline = _0x292bde.MAX_UINT64;
        }
        var _0x55493c = _0x570dc0.prototype;
        _0x55493c.IsStarted = function () {
          return _0x292bde.MAX_UINT != this.m_duration;
        };
        _0x55493c.Duration = function () {
          return this.m_duration;
        };
        _0x55493c.TicksUntilTrue = function () {
          if (!this.IsStarted()) {
            return _0x292bde.MAX_INT;
          }
          var _0x7e71cc = new Date().getTime();
          return this.m_deadline <= _0x7e71cc ? 0 : this.m_deadline - _0x7e71cc;
        };
        _0x55493c.TicksSinceTrue = function () {
          var _0x273a63 = new Date().getTime();
          return this.m_deadline >= _0x273a63 ? 0 : _0x273a63 - this.m_deadline;
        };
        _0x55493c.TicksSinceStart = function () {
          return this.IsStarted() ? new Date().getTime() - (this.m_deadline - this.m_duration) : 0;
        };
        _0x55493c.Start = function (_0x18da12) {
          this.m_duration = _0x18da12;
          var _0x1781b5 = new Date().getTime();
          this.m_deadline = _0x1781b5 + _0x18da12;
          this.m_dt = 0;
        };
        _0x55493c.Restart = function () {
          this.m_deadline = new Date().getTime() + this.m_duration;
        };
        _0x55493c.Continue = function () {
          this.m_deadline += this.m_duration;
        };
        _0x55493c.ExpireNow = function () {
          this.m_deadline = new Date().getTime();
        };
        _0x55493c.Clear = function () {
          this.m_duration = _0x292bde.MAX_UINT;
          this.m_deadline = _0x292bde.MAX_UINT64;
          this.m_dt = 0;
        };
        _0x55493c.StartWithFirstDue = function (_0x184d60, _0x4a322e) {
          this.m_duration = _0x184d60;
          _0x292bde.MAX_UINT == _0x4a322e ? this.m_deadline = _0x292bde.MAX_UINT64 : this.m_deadline = new Date().getTime() + _0x4a322e;
        };
        _0x55493c.ToBool = function () {
          return this.m_useDT ? this.m_dt >= this.m_duration : new Date().getTime() >= this.m_deadline;
        };
        _0x55493c.TakeAndContinue = function () {
          return !!this.ToBool() && (this.Continue(), true);
        };
        _0x55493c.TakeAndRestart = function () {
          return !!this.ToBool() && (this.Restart(), true);
        };
        _0x55493c.UseDT = function (_0xe33d75) {
          this.m_useDT = _0xe33d75;
        };
        _0x55493c.Update = function (_0x10476c) {
          this.m_dt = this.m_dt + _0x10476c;
        };
        return _0x570dc0;
      }();
      var _0x599808;
      var _0x45f411;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "5cd11K4+Y1DBJ0WZfuiBSee", "Common_IdleState", undefined);
      var _0x4f3e5c = {
        Init: 1,
        Spined: 10
      };
      var _0x3f27ab = _0x42d118.ccclass;
      _0x599808 = _0x3f27ab("Common_IdleState");
      var _0x5759e4 = _0x599808(_0x45f411 = function (_0xd5d45f) {
        function _0xfe1f2f() {
          var _0x3cb152;
          (_0x3cb152 = _0xd5d45f.call(this) || this).m_exchangeTimer = null;
          _0x3cb152.m_isFirst = true;
          _0x3cb152.m_initReqNoticeTimes = 0;
          _0x3cb152.m_hintShowed = false;
          _0x250424.Register("SpinReqNotify", _0x2fdb02(_0x3cb152));
          _0x3cb152.m_exchangeTimer = new _0x241f3d();
          _0x3cb152.m_exchangeTimer.UseDT(true);
          return _0x3cb152;
        }
        _0x567cf6(_0xfe1f2f, _0xd5d45f);
        var _0x50a2c3 = _0xfe1f2f.prototype;
        _0x50a2c3.OnEnter = function () {
          _0xb9245("Common State IDLE");
          _0x311069.ShowSkipBtn && _0x311069.ShowSkipBtn(false);
          _0xc8ef61.HAS_REPLAY ? _0xc8ef61.IsInMG() && (this.m_isFirst ? (this.m_isFirst = false, _0x57d1f9.NextState(_0x4b430a.SPIN_REQ)) : _0x2fd06d.OpenReplayView()) : (!_0xc8ef61.IsInMG() || _0xc8ef61.IsUsingItem || _0x311069.IsFreeSpin ? _0x311069.IsGameIdle = false : (_0x311069.GetChips() < _0x311069.GetBetList()[0] && _0x2be8bb.ShowBankruptNotify(), this.SetIsIdle(true)), this.m_exchangeTimer.Clear(), this.m_exchangeTimer.Start(1000 * (this.m_isFirst ? _0x4f3e5c.Init : _0x4f3e5c.Spined)), _0x2be8bb.CountDownAfk());
          _0x311069.SetSpinState(_0x33e9ab.IDLE);
          this.Enter();
        };
        _0x50a2c3.OnProcess = function (_0x69fcb8) {
          if (!_0xc8ef61.HAS_REPLAY) {
            if (_0x495ba9.HasMail && _0xc8ef61.IsInMG() && _0x311069.CheckCommonWebPageClose()) {
              for (; _0x495ba9.HasMail;) {
                _0x495ba9.ShowMailInfo();
              }
            }
            this.m_exchangeTimer && (this.m_exchangeTimer.Update(1000 * _0x69fcb8), this.m_exchangeTimer.ToBool() && (this.m_exchangeTimer.Clear(), this.m_exchangeTimer.Start(1000 * (this.m_isFirst && this.m_initReqNoticeTimes < 20 ? _0x4f3e5c.Init : _0x4f3e5c.Spined)), _0x57d1f9.Current() == _0x4b430a.IDLE && _0xc8ef61.IsInMG() && (_0xd71ac5.ReqNotice(), this.m_initReqNoticeTimes++)));
            null == this || this.Process(_0x69fcb8);
          }
        };
        _0x50a2c3.OnLeave = function () {
          _0xc8ef61.HAS_REPLAY || _0x2be8bb.StopAfk();
        };
        _0x50a2c3.SetIsIdle = function (_0x5e4b63) {
          _0x5e4b63 ? _0x2fd06d.OpenTurboIcon() : _0x2fd06d.CloseTurboIcon();
          _0xc8ef61.SetCanUseItemCard(_0x5e4b63);
          _0x488055.IsBuyBonus || (_0x488055.CanBuyBonus = _0x5e4b63);
          _0x311069.LockBetEnable(!_0x5e4b63);
          _0x311069.IsGameIdle = _0x5e4b63;
          _0x311069.CanPlayFeaturesDemo(_0x5e4b63);
          _0x2fd06d.SetBuyBonusState(_0x5e4b63);
        };
        _0x50a2c3.OnEvent = function (_0x888dad) {
          if (_0x57d1f9.Current() === _0x4b430a.IDLE) {
            switch (_0x888dad) {
              case "SpinReqNotify":
                _0xc8ef61.HAS_REPLAY || (_0xc8ef61.IsInMG() ? _0x57d1f9.NextState(_0x4b430a.SPIN_REQ) : _0x57d1f9.NextState(_0x4b430a.SPIN));
                this.m_isFirst = false;
            }
          }
        };
        _0x50a2c3.Process = function (_0x44eb67) {};
        return _0xfe1f2f;
      }(_0x254a20)) || _0x45f411;
      var _0x1d1b81;
      var _0xf0634b;
      var _0x548e8c;
      var _0xfad863;
      var _0x47caac;
      var _0x2d0193;
      var _0x5cdcc2;
      var _0x2079fc;
      var _0x1772ad;
      var _0x4cb58b;
      var _0x301178;
      var _0x293840;
      var _0x55c96f;
      var _0x396015;
      var _0x273428;
      var _0x345eec;
      var _0x276714;
      var _0x231563;
      var _0x900a50;
      var _0x3fb657;
      var _0x4050bb;
      var _0x532bdf;
      var _0x5db5d3;
      var _0x252c69;
      var _0xc6d600;
      var _0x5121c6;
      var _0x5400e4;
      var _0x4a0155;
      var _0x4a8640;
      var _0x372272;
      var _0x4c0743;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "9099fuoIOdA/qc/GkvbZ7rH", "GroupNode", undefined);
      var _0x5990aa = _0x42d118.ccclass;
      var _0x4fbb6c = _0x42d118.property;
      var _0x2250a6 = _0x42d118.menu;
      var _0x5ef4ac = _0x42d118.executeInEditMode;
      var _0x1ab0bc = "active-in-hierarchy-changed";
      var _0x11160d;
      var _0x12fd96;
      var _0x276cb0;
      var _0x20e75d;
      !function (_0x47dae9) {
        _0x47dae9[_0x47dae9.WIDTH = 1] = "WIDTH";
        _0x47dae9[_0x47dae9.HEIGHT = 2] = "HEIGHT";
        _0x47dae9[_0x47dae9.BOTH = 3] = "BOTH";
      }(_0x11160d || (_0x11160d = {}));
      (function (_0x597667) {
        _0x597667[_0x597667.X = 1] = "X";
        _0x597667[_0x597667.Y = 2] = "Y";
        _0x597667[_0x597667.BOTH = 3] = "BOTH";
      })(_0x12fd96 || (_0x12fd96 = {}));
      (function (_0x49bd45) {
        _0x49bd45[_0x49bd45.X = 1] = "X";
        _0x49bd45[_0x49bd45.Y = 2] = "Y";
        _0x49bd45[_0x49bd45.BOTH = 3] = "BOTH";
      })(_0x276cb0 || (_0x276cb0 = {}));
      (function (_0x21f84a) {
        _0x21f84a[_0x21f84a.R = 1] = "R";
        _0x21f84a[_0x21f84a.G = 2] = "G";
        _0x21f84a[_0x21f84a.B = 4] = "B";
        _0x21f84a[_0x21f84a.RGB = 7] = "RGB";
        _0x21f84a[_0x21f84a.A = 8] = "A";
        _0x21f84a[_0x21f84a.RGBA = 15] = "RGBA";
      })(_0x20e75d || (_0x20e75d = {}));
      _0x1d1b81 = _0x2250a6("Chiron/GroupNode/GroupNode");
      _0xf0634b = _0x4fbb6c({
        displayName: "Sync OnEnable",
        tooltip: "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中"
      });
      _0x548e8c = _0x4fbb6c({
        displayName: "Sync OnDisable",
        tooltip: "當 Node 啟用時同步一次所有選定的狀態至屬性 Group Nodes 中"
      });
      _0xfad863 = _0x4fbb6c({
        displayName: "Sync Recursive",
        tooltip: "是否遞迴同步屬性 Group Nodes 中帶有 GroupNode 元件的節點"
      });
      _0x47caac = _0x4fbb6c({
        type: [_0x5cf7a3],
        displayName: "Group Nodes"
      });
      _0x2d0193 = _0x4fbb6c({
        displayName: "Active Aware",
        tooltip: "當啓閉狀態改變時是否讓群組裡的 Node 跟著啓閉調整"
      });
      _0x5cdcc2 = _0x4fbb6c({
        displayName: "Position Aware",
        tooltip: "當位置改變時是否讓群組裡的 Node 跟著調整相對位置"
      });
      _0x2079fc = _0x4fbb6c({
        type: _0x4fa226(_0x12fd96),
        displayName: "Position Mode",
        tooltip: "當座標改變時子元件跟著調動的參數",
        visible: function () {
          return this.m_positionAware;
        }
      });
      _0x1772ad = _0x4fbb6c({
        displayName: "Rotation Aware",
        tooltip: "當旋轉改變時是否讓群組裡的 Node 跟著調整轉角"
      });
      _0x4cb58b = _0x4fbb6c({
        displayName: "Scale Aware",
        tooltip: "當縮放比例改變時是否讓群組裡的 Node 跟著改變縮放比例"
      });
      _0x301178 = _0x4fbb6c({
        type: _0x4fa226(_0x276cb0),
        displayName: "Scale Mode",
        tooltip: "當縮放改變時子元件跟著調動的參數",
        visible: function () {
          return this.m_scaleAware;
        }
      });
      _0x293840 = _0x4fbb6c({
        displayName: "Color Aware",
        tooltip: "當顏色改變時是否讓群組裡的 Node 跟著改變顏色"
      });
      _0x55c96f = _0x4fbb6c({
        type: _0x4fa226(_0x20e75d),
        displayName: "Color Mode",
        tooltip: "當顏色改變時子元件跟著調動的參數",
        visible: function () {
          return this.m_colorAware;
        }
      });
      _0x396015 = _0x4fbb6c({
        displayName: "Size Aware",
        tooltip: "當大小改變時是否讓群組裡的 Node 跟著改變大小"
      });
      _0x273428 = _0x4fbb6c({
        type: _0x4fa226(_0x11160d),
        displayName: "Size Mode",
        tooltip: "當大小改變時子元件跟著調動的參數",
        visible: function () {
          return this.m_sizeAware;
        }
      });
      var _0x9eb8ac = _0x5990aa(_0x345eec = _0x5ef4ac(_0x345eec = _0x1d1b81((_0x276714 = function (_0x294760) {
        function _0x574591() {
          for (var _0xe670e5, _0x3c9201 = arguments.length, _0x328102 = new Array(_0x3c9201), _0x2a49fd = 0; _0x2a49fd < _0x3c9201; _0x2a49fd++) {
            _0x328102[_0x2a49fd] = arguments[_0x2a49fd];
          }
          (_0xe670e5 = _0x294760.call.apply(_0x294760, [this].concat(_0x328102)) || this).m_lastPos = undefined;
          _0xe670e5.m_lastRotation = undefined;
          _0x4f841b(_0xe670e5, "m_syncOnEnable", _0x231563, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_syncOnDisable", _0x900a50, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_syncRecursive", _0x3fb657, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_nodes", _0x4050bb, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_activeAware", _0x532bdf, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_positionAware", _0x5db5d3, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_positionMode", _0x252c69, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_rotationAware", _0xc6d600, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_scaleAware", _0x5121c6, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_scaleMode", _0x5400e4, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_colorAware", _0x4a0155, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_colorMode", _0x4a8640, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_sizeAware", _0x372272, _0x2fdb02(_0xe670e5));
          _0x4f841b(_0xe670e5, "m_sizeMode", _0x4c0743, _0x2fdb02(_0xe670e5));
          _0xe670e5.m_isRegisted = false;
          return _0xe670e5;
        }
        _0x567cf6(_0x574591, _0x294760);
        var _0x3cc4b7 = _0x574591.prototype;
        _0x3cc4b7.__preload = function () {
          this.m_isRegisted || (this.m_isRegisted = true, this.m_lastPos = _0x2ea746(this.node.position.x, this.node.position.y), this.m_lastRotation = this.node.angle, this.node.on(_0x1ab0bc, this.OnActiveChanged, this), this.node.on(_0x5cf7a3.EventType.COLOR_CHANGED, this.OnColorChanged, this), this.node.on(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnRotationChanged, this), this.node.on(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnPositionChanged, this), this.node.on(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnScaleChanged, this), this.node.on(_0x5cf7a3.EventType.SIZE_CHANGED, this.OnSizeChanged, this), _0x60819.on(_0x17a860.EVENT_BEFORE_DRAW, this.StateCheck, this));
        };
        _0x3cc4b7.ForceInit = function () {
          this.__preload();
        };
        _0x3cc4b7.onDestroy = function () {
          _0x294760.prototype.onDestroy && _0x294760.prototype.onDestroy.call(this);
          this.node.off(_0x1ab0bc, this.OnActiveChanged, this);
          this.node.off(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnPositionChanged, this);
          this.node.off(_0x5cf7a3.EventType.COLOR_CHANGED, this.OnColorChanged, this);
          this.node.off(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnRotationChanged, this);
          this.node.off(_0x5cf7a3.EventType.TRANSFORM_CHANGED, this.OnScaleChanged, this);
          this.node.off(_0x5cf7a3.EventType.SIZE_CHANGED, this.OnSizeChanged, this);
          _0x60819.off(_0x17a860.EVENT_BEFORE_DRAW, this.StateCheck, this);
        };
        _0x3cc4b7.onEnable = function () {
          _0x294760.prototype.onEnable && _0x294760.prototype.onEnable.call(this);
          this.m_syncOnEnable && this.SyncAware();
        };
        _0x3cc4b7.onDisable = function () {
          _0x294760.prototype.onDisable && _0x294760.prototype.onDisable.call(this);
          this.m_syncOnDisable && this.SyncAware();
        };
        _0x3cc4b7.SyncAware = function () {
          this.SyncActive();
          this.SyncSize();
          this.SyncPosition();
          this.SyncRotation();
          this.SyncOpacity();
          this.SyncColor();
          this.SyncScale();
        };
        _0x3cc4b7.StateCheck = function () {
          this.node.isValid && this.node._renderFlag && this.OnOpacityChanged();
        };
        _0x3cc4b7.SyncGroupChild = function (_0x4bc11e, _0x200742) {
          var _0x3caa13 = _0x200742.getComponent(_0x574591);
          this.m_syncRecursive && _0x3caa13 && _0x4bc11e.call(_0x3caa13);
        };
        _0x3cc4b7.SyncScale = function () {
          if (this.m_scaleAware) {
            for (var _0x42abda, _0x288749 = _0x32f29f(this.m_nodes); !(_0x42abda = _0x288749()).done;) {
              var _0x5ed2d = _0x42abda.value;
              _0x5ed2d && _0x5ed2d.isValid && (_0x5ed2d.scale = new _0x507581(this.node.scale.x, this.node.scale.y, this.node.scale.z), this.SyncGroupChild(this.SyncScale, _0x5ed2d));
            }
          }
        };
        _0x3cc4b7.OnScaleChanged = function () {
          this.SyncScale();
        };
        _0x3cc4b7.SyncColor = function () {
          if (this.m_colorAware) {
            for (var _0x55d13b, _0x42e628 = this.node.getComponent(_0x556148).color, _0xf8d291 = _0x32f29f(this.m_nodes); !(_0x55d13b = _0xf8d291()).done;) {
              var _0x4de886 = _0x55d13b.value;
              _0x4de886 && _0x4de886.isValid && (_0x4de886.getComponent(_0x556148).color = _0x42e628, this.SyncGroupChild(this.SyncColor, _0x4de886));
            }
          }
        };
        _0x3cc4b7.OnColorChanged = function () {
          this.SyncColor();
        };
        _0x3cc4b7.SyncOpacity = function () {
          if (this.m_colorAware && this.m_colorMode & _0x20e75d.A) {
            for (var _0x279ad4, _0x3d9f0a = _0x32f29f(this.m_nodes); !(_0x279ad4 = _0x3d9f0a()).done;) {
              var _0x13bf8b = _0x279ad4.value;
              _0x13bf8b && _0x13bf8b.isValid && (_0x13bf8b.getComponent(_0x4ed45d).opacity = this.node.getComponent(_0x4ed45d).opacity, this.SyncGroupChild(this.SyncOpacity, _0x13bf8b));
            }
          }
        };
        _0x3cc4b7.OnOpacityChanged = function () {
          this.SyncOpacity();
        };
        _0x3cc4b7.SyncRotation = function () {
          if (this.m_rotationAware) {
            var _0x5d610d = this.node.angle - this.m_lastRotation;
            this.m_lastRotation = this.node.angle;
            for (var _0x3868c4, _0x112caf = _0x32f29f(this.m_nodes); !(_0x3868c4 = _0x112caf()).done;) {
              var _0x102cf7 = _0x3868c4.value;
              _0x102cf7 && _0x102cf7.isValid && (_0x102cf7.angle = _0x102cf7.angle + _0x5d610d, this.SyncGroupChild(this.SyncRotation, _0x102cf7));
            }
          }
        };
        _0x3cc4b7.OnRotationChanged = function () {
          this.SyncRotation();
        };
        _0x3cc4b7.SyncActive = function () {
          if (this.m_activeAware) {
            for (var _0x1038c1, _0x33a2d1 = this.node.active, _0x20b036 = _0x32f29f(this.m_nodes); !(_0x1038c1 = _0x20b036()).done;) {
              var _0xfda8c6 = _0x1038c1.value;
              _0xfda8c6 && _0xfda8c6.isValid && (_0xfda8c6.active = _0x33a2d1, this.SyncGroupChild(this.SyncActive, _0xfda8c6));
            }
          }
        };
        _0x3cc4b7.OnActiveChanged = function () {
          this.SyncActive();
        };
        _0x3cc4b7.SyncPosition = function () {
          if (this.m_positionAware) {
            var _0x5863f8 = this.node.position.x - this.m_lastPos.x;
            var _0x277c34 = this.node.position.y - this.m_lastPos.y;
            this.m_lastPos.x = this.node.position.x;
            this.m_lastPos.y = this.node.position.y;
            for (var _0x5a0fd6, _0x1e1ae2 = _0x32f29f(this.m_nodes); !(_0x5a0fd6 = _0x1e1ae2()).done;) {
              var _0x3289c8 = _0x5a0fd6.value;
              _0x3289c8 && _0x3289c8.isValid && (_0x3289c8.setPosition(_0x2af1b6(_0x3289c8.position.x + _0x5863f8, _0x3289c8.position.y + _0x277c34, _0x3289c8.position.z)), this.SyncGroupChild(this.SyncPosition, _0x3289c8));
            }
          }
        };
        _0x3cc4b7.OnPositionChanged = function () {
          this.SyncPosition();
        };
        _0x3cc4b7.SyncSize = function () {
          if (this.m_sizeAware) {
            for (var _0x3b2e01, _0x18559d = _0x32f29f(this.m_nodes); !(_0x3b2e01 = _0x18559d()).done;) {
              var _0x3e67ce = _0x3b2e01.value;
              _0x3e67ce && _0x3e67ce.isValid && (this.m_sizeMode & _0x11160d.WIDTH && (_0x3e67ce.getComponent(_0x45bc58).width = this.node.getComponent(_0x45bc58).width), this.m_sizeMode & _0x11160d.HEIGHT && (_0x3e67ce.getComponent(_0x45bc58).height = this.node.getComponent(_0x45bc58).height), this.SyncGroupChild(this.SyncSize, _0x3e67ce));
            }
          }
        };
        _0x3cc4b7.OnSizeChanged = function () {
          this.SyncSize();
        };
        _0x54ea23(_0x574591, [{
          key: "Nodes",
          get: function () {
            return this.m_nodes;
          }
        }]);
        return _0x574591;
      }(_0x5aac4b), _0x231563 = _0x5a72b5(_0x276714.prototype, "m_syncOnEnable", [_0xf0634b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x900a50 = _0x5a72b5(_0x276714.prototype, "m_syncOnDisable", [_0x548e8c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3fb657 = _0x5a72b5(_0x276714.prototype, "m_syncRecursive", [_0xfad863], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4050bb = _0x5a72b5(_0x276714.prototype, "m_nodes", [_0x47caac], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x532bdf = _0x5a72b5(_0x276714.prototype, "m_activeAware", [_0x2d0193], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x5db5d3 = _0x5a72b5(_0x276714.prototype, "m_positionAware", [_0x5cdcc2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x252c69 = _0x5a72b5(_0x276714.prototype, "m_positionMode", [_0x2079fc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x12fd96.BOTH;
        }
      }), _0xc6d600 = _0x5a72b5(_0x276714.prototype, "m_rotationAware", [_0x1772ad], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5121c6 = _0x5a72b5(_0x276714.prototype, "m_scaleAware", [_0x4cb58b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5400e4 = _0x5a72b5(_0x276714.prototype, "m_scaleMode", [_0x301178], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x276cb0.BOTH;
        }
      }), _0x4a0155 = _0x5a72b5(_0x276714.prototype, "m_colorAware", [_0x293840], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4a8640 = _0x5a72b5(_0x276714.prototype, "m_colorMode", [_0x55c96f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x20e75d.RGBA;
        }
      }), _0x372272 = _0x5a72b5(_0x276714.prototype, "m_sizeAware", [_0x396015], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4c0743 = _0x5a72b5(_0x276714.prototype, "m_sizeMode", [_0x273428], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x11160d.BOTH;
        }
      }), _0x345eec = _0x276714)) || _0x345eec) || _0x345eec) || _0x345eec;
      var _0x43d062;
      var _0x23badc;
      var _0x4d5de1;
      var _0x1f5353;
      var _0x3e81e9;
      var _0x4560fe;
      var _0x240bf0;
      var _0x26f0be;
      var _0x72f391;
      var _0x2b9d1d;
      var _0xfb5d40;
      var _0x1270ff;
      var _0x57c309;
      var _0x11675e;
      var _0x5fafd2;
      var _0x1e7c06;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "1d854+nhA1JgLXZLaNHz9eU", "LicenseSetting", undefined);
      (function (_0x336db9) {
        _0x336db9[_0x336db9.ShopingMall = 1] = "ShopingMall";
        _0x336db9[_0x336db9.ShowAutoSetting = 16] = "ShowAutoSetting";
        _0x336db9[_0x336db9.NoSoundUnder1 = 17] = "NoSoundUnder1";
        _0x336db9[_0x336db9.NoQuickSpin = 18] = "NoQuickSpin";
        _0x336db9[_0x336db9.CloseManual = 39] = "CloseManual";
        _0x336db9[_0x336db9.CloseExtraBet = 61] = "CloseExtraBet";
      })(_0x43d062 || (_0x43d062 = {}));
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "0c18bO40hVJB4/zzDByb8vr", "ManualComponent", undefined);
      var _0x2b4d80 = _0x42d118.ccclass;
      var _0x4a762e = _0x42d118.property;
      _0x23badc = _0x2b4d80("ManualComponent");
      _0x4d5de1 = _0x4a762e({
        type: _0x5cf7a3,
        tooltip: "特色說明按鈕(新版跑馬燈)"
      });
      _0x1f5353 = _0x4a762e({
        type: _0x5cf7a3,
        tooltip: "特色說明本體(新版跑馬燈)"
      });
      _0x3e81e9 = _0x4a762e({
        type: _0x5cf7a3,
        tooltip: "特色說明關閉按鈕(新版跑馬燈)"
      });
      _0x4560fe = _0x4a762e({
        type: _0x5cf7a3,
        tooltip: "特色說明周圍關閉按鈕(新版跑馬燈)"
      });
      _0x240bf0 = _0x4a762e({
        type: _0x2f2b2d,
        tooltip: "特色說明內容(新版跑馬燈)"
      });
      _0x26f0be = _0x4a762e({
        type: _0x2f2b2d,
        tooltip: "標題"
      });
      var _0x5f10b2 = _0x23badc((_0x2b9d1d = function (_0x51493c) {
        function _0x39ea69() {
          for (var _0x216a7b, _0x1d586e = arguments.length, _0x22b5d7 = new Array(_0x1d586e), _0x3285e7 = 0; _0x3285e7 < _0x1d586e; _0x3285e7++) {
            _0x22b5d7[_0x3285e7] = arguments[_0x3285e7];
          }
          _0x4f841b(_0x216a7b = _0x51493c.call.apply(_0x51493c, [this].concat(_0x22b5d7)) || this, "m_featureInfoBtn", _0xfb5d40, _0x2fdb02(_0x216a7b));
          _0x4f841b(_0x216a7b, "m_featureInfoBoard", _0x1270ff, _0x2fdb02(_0x216a7b));
          _0x4f841b(_0x216a7b, "m_featureInfoCloseBtn", _0x57c309, _0x2fdb02(_0x216a7b));
          _0x4f841b(_0x216a7b, "m_featureInfoSideBtn", _0x11675e, _0x2fdb02(_0x216a7b));
          _0x4f841b(_0x216a7b, "m_featureInfoTxt", _0x5fafd2, _0x2fdb02(_0x216a7b));
          _0x4f841b(_0x216a7b, "m_titleSprite", _0x1e7c06, _0x2fdb02(_0x216a7b));
          _0x216a7b.m_manulState = "Close";
          _0x216a7b.m_manulOpenLock = false;
          return _0x216a7b;
        }
        _0x567cf6(_0x39ea69, _0x51493c);
        var _0x4f9002 = _0x39ea69.prototype;
        _0x4f9002.onLoad = function () {
          var _0x4cdfdd = this;
          _0x369abc.CheckSwitchOff(_0x43d062.CloseManual) ? this.node.active = false : (this.m_featureInfoBtn && this.m_featureInfoBtn.on(_0x5cf7a3.EventType.TOUCH_END, function () {
            _0x4cdfdd.OpenManul();
            _0x23cbbd.Play(Astarte.Define.AudioClips.COMMON_BTN);
          }), this.m_featureInfoCloseBtn && this.m_featureInfoCloseBtn.on(_0x5cf7a3.EventType.TOUCH_END, function () {
            _0x4cdfdd.CloseManul();
            _0x23cbbd.Play(Astarte.Define.AudioClips.COMMON_BTN);
          }), this.m_featureInfoSideBtn && this.m_featureInfoSideBtn.on(_0x5cf7a3.EventType.TOUCH_END, function () {
            _0x4cdfdd.CloseManul();
          }));
        };
        _0x4f9002.OpenManul = function () {
          var _0xc7ff4c = this;
          this.m_manulOpenLock ? _0x38d2d9.ShowMessageBox(Astarte.Define.StringKey.FREEWINCASH_PLAYING1) : this.m_manulState == "Close" && (this.m_featureInfoBoard.active = true, _0x51e4e3(this.m_featureInfoBoard).call(function () {
            _0xc7ff4c.m_manulState = "Opening";
            _0xc7ff4c.m_featureInfoBoard.getComponentInChildren(_0x41f03c).play("Manual_Open");
          }).delay(0.5).call(function () {
            _0xc7ff4c.m_manulState = "Open";
          }).start());
        };
        _0x4f9002.CloseManul = function () {
          var _0x2e529b = this;
          this.m_manulState == "Open" && _0x51e4e3(this.m_featureInfoBoard).call(function () {
            _0x2e529b.m_manulState = "Closing";
            _0x2e529b.m_featureInfoBoard.getComponentInChildren(_0x41f03c).play("Manual_Close");
          }).delay(0.5).call(function () {
            _0x2e529b.m_manulState = "Close";
            _0x2e529b.m_featureInfoBoard.active = false;
          }).start();
        };
        _0x4f9002.SetTxt = function (_0x2c9ee4, _0x1deaac) {
          undefined === _0x1deaac && (_0x1deaac = null);
          for (var _0x427f26 = _0x19b0e0.GetGameAtlas(), _0x73e3ba = 0; _0x73e3ba < this.m_featureInfoTxt.length; _0x73e3ba++) {
            _0x427f26.getSpriteFrame(_0x2c9ee4[_0x73e3ba]) && (this.m_featureInfoTxt[_0x73e3ba].spriteFrame = _0x427f26.getSpriteFrame(_0x2c9ee4[_0x73e3ba]));
          }
          this.m_titleSprite && _0x1deaac && (this.m_titleSprite.spriteFrame = _0x427f26.getSpriteFrame(_0x1deaac));
        };
        _0x54ea23(_0x39ea69, [{
          key: "FeatureInfoBtn",
          get: function () {
            return this.m_featureInfoBtn;
          }
        }, {
          key: "ManulState",
          get: function () {
            return this.m_manulState;
          }
        }, {
          key: "ManulOpenLock",
          get: function () {
            return this.m_manulOpenLock;
          },
          set: function (_0x3ff4d9) {
            this.m_manulOpenLock = _0x3ff4d9;
          }
        }]);
        return _0x39ea69;
      }(_0x5aac4b), _0xfb5d40 = _0x5a72b5(_0x2b9d1d.prototype, "m_featureInfoBtn", [_0x4d5de1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1270ff = _0x5a72b5(_0x2b9d1d.prototype, "m_featureInfoBoard", [_0x1f5353], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x57c309 = _0x5a72b5(_0x2b9d1d.prototype, "m_featureInfoCloseBtn", [_0x3e81e9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x11675e = _0x5a72b5(_0x2b9d1d.prototype, "m_featureInfoSideBtn", [_0x4560fe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5fafd2 = _0x5a72b5(_0x2b9d1d.prototype, "m_featureInfoTxt", [_0x240bf0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x1e7c06 = _0x5a72b5(_0x2b9d1d.prototype, "m_titleSprite", [_0x26f0be], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x72f391 = _0x2b9d1d)) || _0x72f391;
      var _0x3eb2f0;
      var _0xbc22b0;
      var _0x2edbf8;
      var _0xc6c054;
      var _0x33c14c;
      var _0x195741;
      var _0x547986;
      var _0x3a702a;
      var _0x6b7255;
      var _0x4c0339;
      var _0x448d98;
      var _0x3227ea;
      var _0x420778;
      var _0x4e2eb9;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "1d950BFoN5LhJJ79uyt+/E+", "MarqueeComponent", undefined);
      var _0x36c9c2 = _0x42d118.ccclass;
      var _0x510f23 = _0x42d118.property;
      _0x3eb2f0 = _0x510f23({
        type: _0x598810,
        tooltip: "每秒的位移量"
      });
      _0xbc22b0 = _0x510f23({
        type: _0x598810,
        tooltip: "循環播放的間隔"
      });
      _0x2edbf8 = _0x510f23({
        type: _0x598810,
        tooltip: "未超出的停留時間"
      });
      _0xc6c054 = _0x510f23({
        type: _0x598810,
        tooltip: "超出時的停留時間"
      });
      _0x33c14c = _0x510f23({
        type: _0x598810,
        tooltip: "尾部保留的空間"
      });
      _0x195741 = _0x510f23({
        type: _0x5cf7a3,
        tooltip: "跑馬燈內容節點"
      });
      var _0x25d828 = _0x36c9c2((_0x3a702a = function (_0x40675f) {
        function _0x5e430e() {
          for (var _0x1ef7f0, _0x53ca2e = arguments.length, _0x2ffa25 = new Array(_0x53ca2e), _0x52c1d1 = 0; _0x52c1d1 < _0x53ca2e; _0x52c1d1++) {
            _0x2ffa25[_0x52c1d1] = arguments[_0x52c1d1];
          }
          _0x4f841b(_0x1ef7f0 = _0x40675f.call.apply(_0x40675f, [this].concat(_0x2ffa25)) || this, "m_moveSpeed", _0x6b7255, _0x2fdb02(_0x1ef7f0));
          _0x4f841b(_0x1ef7f0, "m_delayTime", _0x4c0339, _0x2fdb02(_0x1ef7f0));
          _0x4f841b(_0x1ef7f0, "m_waitTime", _0x448d98, _0x2fdb02(_0x1ef7f0));
          _0x4f841b(_0x1ef7f0, "m_moveDelayTime", _0x3227ea, _0x2fdb02(_0x1ef7f0));
          _0x4f841b(_0x1ef7f0, "m_tailLeftSpace", _0x420778, _0x2fdb02(_0x1ef7f0));
          _0x4f841b(_0x1ef7f0, "m_content", _0x4e2eb9, _0x2fdb02(_0x1ef7f0));
          _0x1ef7f0.m_imgs = null;
          _0x1ef7f0.m_viewWidth = null;
          _0x1ef7f0.m_stringSprite = null;
          _0x1ef7f0.m_isStart = false;
          _0x1ef7f0.m_isStop = false;
          _0x1ef7f0.m_scale = 1;
          _0x1ef7f0.m_imgIndex = -1;
          return _0x1ef7f0;
        }
        _0x567cf6(_0x5e430e, _0x40675f);
        var _0x5f1856 = _0x5e430e.prototype;
        _0x5f1856.Init = function (_0x1751f0) {
          this.m_imgs = _0x1751f0;
          this.m_viewWidth = this.node.getComponent(_0x45bc58).contentSize.width;
          var _0x352583 = this.m_content ? this.m_content : this.node.children[0];
          _0x1751f0 && _0x1751f0.length > 0 && (_0x352583 || ((_0x352583 = new _0x5cf7a3()).addComponent(_0x45bc58), this.node.addChild(_0x352583)), this.m_stringSprite = _0x352583.getComponent(_0x2f2b2d), this.m_stringSprite || (this.m_stringSprite = _0x352583.addComponent(_0x2f2b2d)), this.m_stringSprite.type = _0x2f2b2d.Type.SIMPLE, this.m_stringSprite.sizeMode = _0x2f2b2d.SizeMode.TRIMMED);
          _0x352583.getComponent(_0x45bc58).setAnchorPoint(_0x2ea746(0, 0.5));
          this.m_scale = _0x352583.scale.x;
        };
        _0x5f1856.ShowOnce = function () {
          var _0x45e1eb = _0x12d1c6(_0x41e40d().mark(function _0x355324(_0x1a9c3b) {
            var _0x4b2ab2;
            var _0x37457d;
            var _0x3f146e;
            var _0xed83ce;
            var _0x4ce447;
            var _0x48c3e3;
            var _0x517a94;
            var _0x278168;
            var _0x5eb7cf;
            var _0x260950;
            return _0x41e40d().wrap(function (_0x5ddff7) {
              for (;;) {
                switch (_0x5ddff7.prev = _0x5ddff7.next) {
                  case 0:
                    if (!this.m_isStart) {
                      _0x5ddff7.next = 2;
                      break;
                    }
                    return _0x5ddff7.abrupt("return");
                  case 2:
                    if (this.m_isStart = true, "string" != typeof _0x1a9c3b) {
                      _0x5ddff7.next = 24;
                      break;
                    }
                    if (!(_0x4b2ab2 = this.m_content.getComponent(_0xf2083))) {
                      _0x5ddff7.next = 19;
                      break;
                    }
                    _0x4b2ab2.string = _0x1a9c3b;
                    _0x37457d = _0x369abc.times(_0x4b2ab2.node.getComponent(_0x45bc58).width + this.m_tailLeftSpace, this.m_scale);
                    _0x4b2ab2.node.active = true;
                    _0x3f146e = _0x37457d + this.m_viewWidth;
                    _0xed83ce = _0x369abc.divide(_0x3f146e, this.m_moveSpeed);
                    _0x4ce447 = _0x4b2ab2.node.position.x;
                    _0x51e4e3(_0x4b2ab2.node).to(_0xed83ce, {
                      position: _0x2af1b6(_0x4ce447 - _0x3f146e, 0)
                    }).start();
                    _0x5ddff7.next = 15;
                    return _0xc8ef61.Wait(this, _0xed83ce);
                  case 15:
                    _0x4b2ab2.node.active = false;
                    _0x4b2ab2.node.setPosition(_0x2af1b6(this.m_viewWidth, 0));
                    _0x5ddff7.next = 22;
                    break;
                  case 19:
                    _0x3c3cbe("RichText doesn't exist");
                    this.m_isStart = false;
                    return _0x5ddff7.abrupt("return");
                  case 22:
                    _0x5ddff7.next = 44;
                    break;
                  case 24:
                    if (_0x1a9c3b ? (this.m_imgIndex++, this.m_imgIndex >= this.m_imgs.length && (this.m_imgIndex = 0), _0x48c3e3 = this.m_imgs[this.m_imgIndex]) : _0x48c3e3 = this.m_imgs[Math.floor(Math.random() * this.m_imgs.length)], this.m_stringSprite.spriteFrame = _0x48c3e3, _0x517a94 = _0x369abc.times(this.m_stringSprite.spriteFrame.rect.width + this.m_tailLeftSpace, this.m_scale), this.m_stringSprite.node.active = true, !(_0x517a94 > this.m_viewWidth)) {
                      _0x5ddff7.next = 39;
                      break;
                    }
                    this.m_stringSprite.node.position = _0x2af1b6(0, 0);
                    _0x5ddff7.next = 32;
                    return _0xc8ef61.Wait(this, this.m_moveDelayTime);
                  case 32:
                    _0x278168 = _0x517a94 + this.m_viewWidth;
                    _0x5eb7cf = _0x369abc.divide(_0x278168, this.m_moveSpeed);
                    _0x51e4e3(this.m_stringSprite.node).to(_0x5eb7cf, {
                      position: _0x2af1b6(-_0x517a94, 0)
                    }).start();
                    _0x5ddff7.next = 37;
                    return _0xc8ef61.Wait(this, _0x5eb7cf);
                  case 37:
                    _0x5ddff7.next = 43;
                    break;
                  case 39:
                    _0x260950 = _0x369abc.minus(this.m_viewWidth, _0x517a94);
                    this.m_stringSprite.node.position = _0x2af1b6(_0x369abc.divide(_0x260950, 2), 0);
                    _0x5ddff7.next = 43;
                    return _0xc8ef61.Wait(this, this.m_waitTime);
                  case 43:
                    this.m_stringSprite.node.active = false;
                  case 44:
                    this.m_isStart = false;
                  case 45:
                  case "end":
                    return _0x5ddff7.stop();
                }
              }
            }, _0x355324, this);
          }));
          return function (_0x42c68b) {
            return _0x45e1eb.apply(this, arguments);
          };
        }();
        _0x5f1856.ShowForever = function () {
          var _0x6f394a = _0x12d1c6(_0x41e40d().mark(function _0x255634(_0x5b3e2d) {
            return _0x41e40d().wrap(function (_0x5d4c0f) {
              for (;;) {
                switch (_0x5d4c0f.prev = _0x5d4c0f.next) {
                  case 0:
                    undefined === _0x5b3e2d && (_0x5b3e2d = false);
                  case 1:
                    if (this.m_isStop) {
                      _0x5d4c0f.next = 9;
                      break;
                    }
                    _0x5d4c0f.next = 4;
                    return this.ShowOnce(_0x5b3e2d);
                  case 4:
                    if (!(this.m_delayTime && this.m_delayTime > 0)) {
                      _0x5d4c0f.next = 7;
                      break;
                    }
                    _0x5d4c0f.next = 7;
                    return _0xc8ef61.Wait(this, this.m_delayTime);
                  case 7:
                    _0x5d4c0f.next = 1;
                    break;
                  case 9:
                    this.m_isStop = false;
                  case 10:
                  case "end":
                    return _0x5d4c0f.stop();
                }
              }
            }, _0x255634, this);
          }));
          return function (_0x48f133) {
            return _0x6f394a.apply(this, arguments);
          };
        }();
        _0x5f1856.Stop = function () {
          this.m_isStop = true;
        };
        _0x5f1856.ChangeTimeSetting = function (_0x564b21, _0x46405f, _0x1035fe, _0x138edf, _0x53c004) {
          this.m_moveSpeed = _0x564b21;
          this.m_delayTime = _0x46405f;
          this.m_waitTime = _0x1035fe;
          this.m_moveDelayTime = _0x138edf;
          this.m_tailLeftSpace = _0x53c004;
        };
        return _0x5e430e;
      }(_0x5aac4b), _0x6b7255 = _0x5a72b5(_0x3a702a.prototype, "m_moveSpeed", [_0x3eb2f0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x4c0339 = _0x5a72b5(_0x3a702a.prototype, "m_delayTime", [_0xbc22b0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x448d98 = _0x5a72b5(_0x3a702a.prototype, "m_waitTime", [_0x2edbf8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x3227ea = _0x5a72b5(_0x3a702a.prototype, "m_moveDelayTime", [_0xc6c054], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x420778 = _0x5a72b5(_0x3a702a.prototype, "m_tailLeftSpace", [_0x33c14c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x4e2eb9 = _0x5a72b5(_0x3a702a.prototype, "m_content", [_0x195741], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x547986 = _0x3a702a)) || _0x547986;
      var _0x485f72;
      var _0x40ceff;
      var _0x46f568;
      var _0x491078;
      var _0x52d157;
      var _0x81c377;
      var _0x4ab13c;
      var _0x4495c2;
      var _0x473181;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "93417uqlh9Fm6TH2poz4GO4", "NearWinEffectComponent", undefined);
      var _0x58a37f = _0x42d118.ccclass;
      var _0x5377d6 = _0x42d118.property;
      _0x485f72 = _0x58a37f("NearWinEffectComponent");
      _0x40ceff = _0x5377d6({
        type: Number,
        tooltip: "淡入時間"
      });
      _0x46f568 = _0x5377d6({
        type: Number,
        tooltip: "淡出時間"
      });
      _0x491078 = _0x5377d6({
        type: _0x57c330,
        tooltip: "是否使用spine動畫"
      });
      var _0x374deb = _0x485f72((_0x81c377 = function (_0x1c6c0f) {
        function _0x428838() {
          for (var _0x22a62b, _0xb1da49 = arguments.length, _0x132b6c = new Array(_0xb1da49), _0x57dd06 = 0; _0x57dd06 < _0xb1da49; _0x57dd06++) {
            _0x132b6c[_0x57dd06] = arguments[_0x57dd06];
          }
          _0x4f841b(_0x22a62b = _0x1c6c0f.call.apply(_0x1c6c0f, [this].concat(_0x132b6c)) || this, "m_fadeInTime", _0x4ab13c, _0x2fdb02(_0x22a62b));
          _0x4f841b(_0x22a62b, "m_fadeOutTime", _0x4495c2, _0x2fdb02(_0x22a62b));
          _0x4f841b(_0x22a62b, "m_isPlaySpine", _0x473181, _0x2fdb02(_0x22a62b));
          _0x22a62b.m_cancelCb = null;
          _0x22a62b.m_spine = null;
          return _0x22a62b;
        }
        _0x567cf6(_0x428838, _0x1c6c0f);
        var _0x22e2c5 = _0x428838.prototype;
        _0x22e2c5.start = function () {
          this.m_spine || (this.node.active = false);
        };
        _0x22e2c5.FadeIn = function () {
          var _0x467469 = _0x12d1c6(_0x41e40d().mark(function _0x1edb61(_0xdaf71) {
            var _0x11b95e;
            var _0x542aed = this;
            return _0x41e40d().wrap(function (_0x1e0646) {
              for (;;) {
                switch (_0x1e0646.prev = _0x1e0646.next) {
                  case 0:
                    if (this.CheckSpine(), this.node.active = true, !this.m_isPlaySpine) {
                      _0x1e0646.next = 9;
                      break;
                    }
                    _0x1e0646.next = 5;
                    return _0x8c49d5.PlayAnimation(this.m_spine, "FadeIn");
                  case 5:
                    _0x1e0646.sent || _0x8c49d5.PlayAnimation(this.m_spine, "NearWin", true);
                    _0x1e0646.next = 16;
                    break;
                  case 9:
                    _0x37b4ff.stopAllByTarget(this.m_spine.color);
                    null == (_0x11b95e = this.m_cancelCb) || _0x11b95e.call(this);
                    this.node.active = true;
                    this.m_spine.color = new _0x3d339d(this.m_spine.color.r, this.m_spine.color.g, this.m_spine.color.b, 0);
                    null == _0xdaf71 || _0xdaf71();
                    _0x1e0646.next = 16;
                    return new Promise(function (_0xdf8832) {
                      _0x542aed.m_cancelCb = function () {
                        _0xdf8832();
                      };
                      _0x51e4e3(_0x542aed.m_spine.color).to(_0x542aed.m_fadeInTime, {
                        a: 255
                      }).call(function () {
                        _0xdf8832();
                        _0x542aed.m_cancelCb = null;
                      }).start();
                    });
                  case 16:
                  case "end":
                    return _0x1e0646.stop();
                }
              }
            }, _0x1edb61, this);
          }));
          return function (_0x269b64) {
            return _0x467469.apply(this, arguments);
          };
        }();
        _0x22e2c5.FadeOut = function () {
          var _0xf190f5 = _0x12d1c6(_0x41e40d().mark(function _0x3cf8f5() {
            var _0xac3fdf;
            var _0x4256e9;
            var _0x2ad29e = this;
            return _0x41e40d().wrap(function (_0x21db1b) {
              for (;;) {
                switch (_0x21db1b.prev = _0x21db1b.next) {
                  case 0:
                    if (this.CheckSpine(), !this.m_isPlaySpine) {
                      _0x21db1b.next = 12;
                      break;
                    }
                    if (this.node.active) {
                      _0x21db1b.next = 4;
                      break;
                    }
                    return _0x21db1b.abrupt("return", true);
                  case 4:
                    this.CheckSpine();
                    _0x21db1b.next = 7;
                    return _0x8c49d5.PlayAnimation(this.m_spine, "FadeOut");
                  case 7:
                    (_0xac3fdf = _0x21db1b.sent) || (this.node.active = false);
                    return _0x21db1b.abrupt("return", !_0xac3fdf);
                  case 12:
                    if (!(this.m_spine.color.a <= 0)) {
                      _0x21db1b.next = 14;
                      break;
                    }
                    return _0x21db1b.abrupt("return", false);
                  case 14:
                    _0x37b4ff.stopAllByTarget(this.m_spine.color);
                    null == (_0x4256e9 = this.m_cancelCb) || _0x4256e9.call(this);
                    _0x21db1b.next = 18;
                    return new Promise(function (_0x395828) {
                      _0x2ad29e.m_cancelCb = function () {
                        _0x395828(false);
                      };
                      _0x51e4e3(_0x2ad29e.m_spine.color).to(_0x2ad29e.m_fadeOutTime, {
                        a: 0
                      }).call(function () {
                        _0x395828(true);
                        _0x2ad29e.m_cancelCb = null;
                        _0x2ad29e.node.active = false;
                      }).start();
                    });
                  case 18:
                  case "end":
                    return _0x21db1b.stop();
                }
              }
            }, _0x3cf8f5, this);
          }));
          return function () {
            return _0xf190f5.apply(this, arguments);
          };
        }();
        _0x22e2c5.CheckSpine = function () {
          this.m_spine || (this.m_spine = this.node.getComponent(_0x1a25c9.Skeleton), this.m_isPlaySpine && this.m_spine.setMix("FadeIn", "FadeOut", 0.05));
        };
        return _0x428838;
      }(_0x5aac4b), _0x4ab13c = _0x5a72b5(_0x81c377.prototype, "m_fadeInTime", [_0x40ceff], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _0x4495c2 = _0x5a72b5(_0x81c377.prototype, "m_fadeOutTime", [_0x46f568], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.2;
        }
      }), _0x473181 = _0x5a72b5(_0x81c377.prototype, "m_isPlaySpine", [_0x491078], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x52d157 = _0x81c377)) || _0x52d157;
      var _0x245d3a;
      var _0x267ed6;
      var _0xca36c8;
      var _0x4406e2;
      var _0x4dcb3a;
      var _0x11122f;
      var _0x59e046;
      var _0x360a7b;
      var _0x5e4863;
      var _0xbb35f3;
      var _0x4e1502;
      var _0x1f0a01;
      var _0x41db3d;
      var _0x3cc8cd;
      var _0x2ad5f6;
      var _0x35a98a;
      var _0x63b9c4;
      var _0xa6cf5b;
      var _0x54ace0;
      var _0x23aecc;
      var _0x2c3cfe;
      var _0x586616;
      var _0x5f2352;
      var _0x2709db;
      var _0x2cb483;
      var _0x271a14;
      var _0x28bd62;
      var _0x3a12a9;
      var _0x42ef81;
      var _0xf50c71;
      var _0x284737;
      var _0x46097d;
      var _0x516956;
      var _0x264cad;
      var _0x400488;
      var _0x142547;
      var _0x2fd705;
      var _0x18e857;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "02e880GcB9Jw7QDr8UUWxEV", "ShakeComponent", undefined);
      var _0x275f35 = _0x42d118.ccclass;
      var _0x5b93a8 = _0x42d118.property;
      var _0x5b603c = _0x42d118.executeInEditMode;
      var _0x476345 = _0x42d118.help;
      var _0x2538d7 = [{
        name: "backIn",
        desc: "回退:緩入"
      }, {
        name: "backInOut",
        desc: "回退:緩入緩出"
      }, {
        name: "backOut",
        desc: "回退:緩出"
      }, {
        name: "backOutIn",
        desc: "回退:緩出緩入"
      }, {
        name: "bounceIn",
        desc: "彈跳:緩入"
      }, {
        name: "bounceInOut",
        desc: "彈跳:緩入緩出"
      }, {
        name: "bounceOut",
        desc: "彈跳:緩出"
      }, {
        name: "bounceOutIn",
        desc: "彈跳:緩出緩入"
      }, {
        name: "circIn",
        desc: "迴圈:緩入 由慢到快"
      }, {
        name: "circInOut",
        desc: "迴圈:緩入緩出 由慢到很快再到慢"
      }, {
        name: "circOut",
        desc: "迴圈:緩出 由快到慢"
      }, {
        name: "circOutIn",
        desc: "迴圈:緩出緩入 由慢到很快再到慢"
      }, {
        name: "constant",
        desc: "constant"
      }, {
        name: "cubicIn",
        desc: "立方曲線緩入 由慢到快"
      }, {
        name: "cubicInOut",
        desc: "立方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "cubicOut",
        desc: "立方曲線緩出 由快到慢"
      }, {
        name: "cubicOutIn",
        desc: "立方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "elasticIn",
        desc: "彈簧回震:緩入"
      }, {
        name: "elasticInOut",
        desc: "彈簧回震:緩入緩出"
      }, {
        name: "elasticOut",
        desc: "彈簧回震:緩出"
      }, {
        name: "elasticOutIn",
        desc: "彈簧回震:緩出緩入"
      }, {
        name: "expoIn",
        desc: "指數曲線緩入 由慢到快"
      }, {
        name: "expoInOut",
        desc: "指數曲線緩入和緩出 由慢到很快再到慢"
      }, {
        name: "expoOut",
        desc: "指數曲線緩出 由快到慢"
      }, {
        name: "expoOutIn",
        desc: "指數曲線緩出緩入和 由慢到很快再到慢"
      }, {
        name: "fade",
        desc: "漸褪效果"
      }, {
        name: "linear",
        desc: "線性"
      }, {
        name: "quadIn",
        desc: "平方曲線緩入 由慢到快"
      }, {
        name: "quadInOut",
        desc: "平方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quadOut",
        desc: "平方曲線緩出 由快到慢"
      }, {
        name: "quadOutIn",
        desc: "平方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "quartIn",
        desc: "四次方曲線緩入 由慢到快"
      }, {
        name: "quartInOut",
        desc: "四次方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quartOut",
        desc: "四次方曲線緩出 由快到慢"
      }, {
        name: "quartOutIn",
        desc: "四次方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "quintIn",
        desc: "五次方曲線緩入 由慢到快"
      }, {
        name: "quintInOut",
        desc: "五次方曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "quintOut",
        desc: "五次方曲線緩出 由慢到快"
      }, {
        name: "quintOutIn",
        desc: "五次方曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "sineIn",
        desc: "正弦曲線緩入 由慢到快"
      }, {
        name: "sineInOut",
        desc: "正弦曲線緩入緩出 由慢到快再到慢"
      }, {
        name: "sineOut",
        desc: "正弦曲線緩出 由快到慢"
      }, {
        name: "sineOutIn",
        desc: "正弦曲線緩出緩入 由慢到快再到慢"
      }, {
        name: "smooth",
        desc: "平滑效果"
      }];
      var _0x59a0bd = _0x4fa226({});
      var _0x2f6a67 = _0x4fa226({});
      var _0x512e6c;
      !function (_0x79e032) {
        _0x79e032[_0x79e032.None = 0] = "None";
        _0x79e032[_0x79e032.FadeIn = 1] = "FadeIn";
        _0x79e032[_0x79e032.FadeOut = 2] = "FadeOut";
      }(_0x512e6c || (_0x512e6c = {}));
      var _0x523bbc = _0x4fa226({
        None: _0x512e6c.None,
        FadeIn: _0x512e6c.FadeIn,
        FadeOut: _0x512e6c.FadeOut
      });
      var _0x1fe30e = function (_0xf906f8) {
        var _0x47a298;
        var _0x46f6be = 0;
        if (0 === _0xf906f8.length) {
          return _0x46f6be;
        }
        for (_0x47a298 = 0; _0x47a298 < _0xf906f8.length; _0x47a298++) {
          _0x46f6be = (_0x46f6be << 5) - _0x46f6be + _0xf906f8.charCodeAt(_0x47a298);
          _0x46f6be |= 0;
        }
        return _0x46f6be;
      };
      _0x245d3a = _0x275f35("_TweenInfo");
      _0x267ed6 = _0x5b93a8({
        visible: false,
        tooltip: "Easing"
      });
      _0xca36c8 = _0x5b93a8({
        type: _0x59a0bd,
        visible: false
      });
      _0x4406e2 = _0x5b93a8({
        visible: true,
        displayName: "緩動效果",
        type: _0x59a0bd
      });
      _0x4dcb3a = _0x5b93a8({
        type: _0x523bbc,
        visible: false
      });
      _0x11122f = _0x5b93a8({
        visible: true,
        displayName: "fade type",
        type: _0x523bbc
      });
      _0x59e046 = _0x5b93a8({
        min: 0,
        visible: true,
        displayName: "時間"
      });
      var _0x381389 = _0x245d3a((_0x5e4863 = function () {
        function _0x250f1a() {
          _0x4f841b(this, "m_EasingName", _0xbb35f3, this);
          _0x4f841b(this, "__easingIdx", _0x4e1502, this);
          _0x4f841b(this, "__fadeType", _0x1f0a01, this);
          this._EasingEnumList = [];
          _0x4f841b(this, "duration", _0x41db3d, this);
        }
        _0x54ea23(_0x250f1a, [{
          key: "_easingIdx",
          get: function () {},
          set: function (_0x583770) {}
        }, {
          key: "_fadeType",
          get: function () {
            return this.__fadeType;
          },
          set: function (_0xca9305) {}
        }]);
        return _0x250f1a;
      }(), _0xbb35f3 = _0x5a72b5(_0x5e4863.prototype, "m_EasingName", [_0x267ed6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x4e1502 = _0x5a72b5(_0x5e4863.prototype, "__easingIdx", [_0xca36c8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x5e4863.prototype, "_easingIdx", [_0x4406e2], Object.getOwnPropertyDescriptor(_0x5e4863.prototype, "_easingIdx"), _0x5e4863.prototype), _0x1f0a01 = _0x5a72b5(_0x5e4863.prototype, "__fadeType", [_0x4dcb3a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x5e4863.prototype, "_fadeType", [_0x11122f], Object.getOwnPropertyDescriptor(_0x5e4863.prototype, "_fadeType"), _0x5e4863.prototype), _0x41db3d = _0x5a72b5(_0x5e4863.prototype, "duration", [_0x59e046], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x360a7b = _0x5e4863)) || _0x360a7b;
      _0x3cc8cd = _0x275f35("Shake");
      _0x2ad5f6 = _0x476345("https://docs.cocos.com/creator/3.6/manual/zh/tween/tween-function.html#%E5%86%85%E7%BD%AE%E7%BC%93%E5%8A%A8%E5%87%BD%E6%95%B0");
      _0x35a98a = _0x5b93a8({
        visible: false,
        displayName: "正負交替",
        tooltip: "重複次數>1時, 正負交替"
      });
      _0x63b9c4 = _0x5b93a8({
        type: _0x1360e3,
        displayName: "預先定義shake.json",
        visible: function () {
          this.shakeJson && this._updateShakeEnum(this.shakeJson.json.shakelist);
          return true;
        }
      });
      _0xa6cf5b = _0x5b93a8({
        visible: true,
        tooltip: "自定義的shake name"
      });
      _0x54ace0 = _0x5b93a8({
        type: _0x2f6a67,
        visible: false
      });
      _0x23aecc = _0x5b93a8({
        visible: true,
        displayName: "儲存到預先定義.json",
        tooltip: "若Shakename不為:custom,才會儲存"
      });
      _0x2c3cfe = _0x5b93a8({
        visible: true,
        displayName: "預先定義",
        tooltip: "切換後會以預先定義的數值直接覆蓋所有設定值",
        type: _0x2f6a67
      });
      _0x586616 = _0x5b93a8({
        readonly: true,
        displayName: "總震動時間"
      });
      _0x5f2352 = _0x5b93a8({
        visible: true,
        displayName: "振幅"
      });
      _0x2709db = _0x5b93a8({
        min: 1,
        step: 1,
        visible: true,
        displayName: "震動頻率/秒"
      });
      _0x2cb483 = _0x5b93a8({
        step: 1,
        visible: true,
        displayName: "振幅x/y/z權重:%"
      });
      _0x271a14 = _0x5b93a8({
        visible: false,
        type: [_0x381389]
      });
      _0x28bd62 = _0x5b93a8({
        type: [_0x381389],
        tooltip: "輸入更改 緩動效果 數量",
        displayName: "緩動效果"
      });
      var _0x951488 = _0x3cc8cd(_0x3a12a9 = _0x5b603c(_0x3a12a9 = _0x2ad5f6((_0x42ef81 = function (_0x371375) {
        function _0x1e1487() {
          for (var _0x50c7b8, _0x1e4854 = arguments.length, _0x129f17 = new Array(_0x1e4854), _0x496915 = 0; _0x496915 < _0x1e4854; _0x496915++) {
            _0x129f17[_0x496915] = arguments[_0x496915];
          }
          _0x4f841b(_0x50c7b8 = _0x371375.call.apply(_0x371375, [this].concat(_0x129f17)) || this, "alternately", _0xf50c71, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "shakeJson", _0x284737, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "shakename", _0x46097d, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "__ShakeIdx", _0x516956, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "Duration", _0x264cad, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "magnitude", _0x400488, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "frequency", _0x142547, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "weight", _0x2fd705, _0x2fdb02(_0x50c7b8));
          _0x4f841b(_0x50c7b8, "_TweenList", _0x18e857, _0x2fdb02(_0x50c7b8));
          _0x50c7b8._EasingEnumList = [];
          _0x50c7b8._ShakeEnumList = [];
          _0x50c7b8.originPos = new _0x507581();
          _0x50c7b8._TestShakeCnt = 0;
          return _0x50c7b8;
        }
        _0x567cf6(_0x1e1487, _0x371375);
        var _0x2965a1 = _0x1e1487.prototype;
        _0x2965a1.updateDuration = function () {
          for (var _0x51e6cb = 0, _0xe35d5d = 0; _0xe35d5d < this._TweenList.length; _0xe35d5d++) {
            _0x51e6cb += this._TweenList[_0xe35d5d].duration;
          }
          this.Duration = _0x51e6cb;
        };
        _0x2965a1.setTweenJson = function (_0x40a12a) {
          var _0x36a44d = this.shakeJson.json.shakelist;
          if ("custom" != _0x40a12a) {
            _0x36a44d[_0x40a12a];
          } else {
            console.warn("custom 不會儲存到預先定義.json");
          }
        };
        _0x2965a1.getTweenJson = function () {
          for (var _0x110510 = {
              magnitude: this.magnitude,
              frequency: this.frequency,
              weight: {
                x: this.weight.x,
                y: this.weight.y,
                z: this.weight.z
              }
            }, _0x22c73e = [], _0x235cdc = 0; _0x235cdc < this._TweenList.length; _0x235cdc++) {
            var _0x566c3c = this._TweenList[_0x235cdc];
            _0x22c73e.push({
              m_EasingName: _0x566c3c.m_EasingName,
              _easingIdx: _0x566c3c._easingIdx,
              _fadeType: _0x566c3c._fadeType,
              duration: _0x566c3c.duration
            });
          }
          _0x110510._TweenList = _0x22c73e;
          return _0x110510;
        };
        _0x2965a1.getJsonData = function () {
          var _0x5cb3de = _0x12d1c6(_0x41e40d().mark(function _0x234ccf() {
            var _0x4ff7f1;
            var _0x3f943f;
            var _0x1ebec7;
            return _0x41e40d().wrap(function (_0x1e5b5f) {
              for (;;) {
                switch (_0x1e5b5f.prev = _0x1e5b5f.next) {
                  case 0:
                    if (_0x4ff7f1 = {}, this.shakeJson && this.shakeJson.json && (_0x4ff7f1 = this.shakeJson.json), "custom" == this.shakename) {
                      _0x1e5b5f.next = 19;
                      break;
                    }
                    (_0x3f943f = _0x4ff7f1.shakelist)[this.shakename] = this.getTweenJson();
                    _0x4ff7f1.shakelist = _0x3f943f;
                    _0x1e5b5f.next = 17;
                    break;
                  case 11:
                    _0x1ebec7 = _0x1e5b5f.sent;
                    console.log("path", _0x1ebec7, "outJson", JSON.stringify(_0x4ff7f1, null, 2));
                    undefined.writeFileSync(_0x1ebec7, JSON.stringify(_0x4ff7f1, null, 2), "utf-8");
                    _0x1e5b5f.next = 17;
                    break;
                  case 16:
                    console.log("請先指定 '預先定義shake.json'");
                  case 17:
                    _0x1e5b5f.next = 20;
                    break;
                  case 19:
                    console.warn("custom 不會儲存到預先定義.json");
                  case 20:
                    return _0x1e5b5f.abrupt("return", _0x4ff7f1);
                  case 21:
                  case "end":
                    return _0x1e5b5f.stop();
                }
              }
            }, _0x234ccf, this);
          }));
          return function () {
            return _0x5cb3de.apply(this, arguments);
          };
        }();
        _0x2965a1.onLoad = function () {
          this.shakeJson && this.shakeJson.json ? (this._updateShakeEnum(this.shakeJson.json.shakelist), this.shakeJson.json) : this.getJsonData();
          for (var _0x360b74 = [], _0x5ed42c = 0; _0x5ed42c < _0x2538d7.length; ++_0x5ed42c) {
            var _0x395124 = _0x2538d7[_0x5ed42c];
            _0x360b74.push({
              name: _0x395124.desc,
              easingName: _0x395124.name,
              value: _0x1fe30e(_0x395124.name)
            });
          }
          _0x360b74.sort(function (_0x29793e, _0x4711e8) {
            return _0x29793e.name < _0x4711e8.name ? -1 : _0x29793e.name > _0x4711e8.name ? 1 : 0;
          });
          this._EasingEnumList = _0x360b74;
          this._updateEasingEnum();
          this.updateDuration();
        };
        _0x2965a1._updateShakeEnum = function (_0xf41ac2) {
          var _0x41b365 = [];
          _0xf41ac2 && (Object.keys(_0xf41ac2).forEach(function (_0x3c6f64) {
            _0x41b365.push({
              name: _0x3c6f64,
              value: _0x1fe30e(_0x3c6f64)
            });
          }), _0x41b365.sort(function (_0x24cf89, _0x393917) {
            return _0x24cf89.name < _0x393917.name ? -1 : _0x24cf89.name > _0x393917.name ? 1 : 0;
          }));
          this._ShakeEnumList = _0x41b365;
        };
        _0x2965a1._updateEasingEnum = function () {
          for (var _0x1d3abb = 0; _0x1d3abb < this._TweenList.length; _0x1d3abb++) {
            this._TweenList[_0x1d3abb]._EasingEnumList = this._EasingEnumList;
          }
        };
        _0x2965a1.start = function () {};
        _0x2965a1.fade = function (_0x29a980, _0x21e1ad, _0x214703, _0x161087, _0x5d078e, _0x237d29, _0xf97896) {
          this.originPos = this.node.getPosition();
          for (var _0x4c267d = 1 / _0x214703, _0x2ee9b5 = _0x21e1ad / _0x4c267d, _0x48f51c = 1; _0x48f51c <= _0x2ee9b5; _0x48f51c++) {
            var _0x25f4b6 = _0x161087;
            _0x5d078e == _0x512e6c.FadeIn ? _0x25f4b6 *= _0x48f51c / _0x2ee9b5 : _0x5d078e == _0x512e6c.FadeOut && (_0x25f4b6 *= (_0x2ee9b5 - _0x48f51c) / _0x2ee9b5);
            var _0x55fcd9 = this.originPos.clone();
            var _0x388fa9 = new _0x507581(_0x1210d7.random() - 0.5, _0x1210d7.random() - 0.5, _0x1210d7.random() - 0.5);
            var _0xc29235 = new _0x507581(2 * _0x25f4b6 * _0x237d29.x / 100, 2 * _0x25f4b6 * _0x237d29.y / 100, 2 * _0x25f4b6 * _0x237d29.z / 100);
            _0xc29235 = _0xc29235.multiply(_0x388fa9);
            _0x55fcd9 = _0x55fcd9.add(_0xc29235);
            _0x29a980 = _0x29a980.to(_0x4c267d, {
              position: _0x55fcd9
            }, {
              easing: _0xf97896,
              onStart: function (_0x3eaee0) {},
              onUpdate: function (_0x170acd, _0x53ab4a) {},
              onComplete: function (_0x55c634) {}
            });
          }
          return _0x29a980;
        };
        _0x2965a1.shake = function () {
          this._shake(this._TweenList, this.frequency, this.magnitude, this.weight);
        };
        _0x2965a1.testShake = function () {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var _0x2e60ba = this.shakeJson.json.shakelist;
            if (_0x2e60ba) {
              var _0x3f0242 = Object.keys(_0x2e60ba);
              _0x3f0242.push("ErrorTest");
              var _0x53dfd4 = _0x3f0242[this._TestShakeCnt++ % _0x3f0242.length];
              this.ShakeWithName(_0x53dfd4);
            }
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        _0x2965a1.ShakeWithName = function (_0x49ad72) {
          if (this.shakeJson && this.shakeJson.json.shakelist) {
            var _0x43c012 = this.shakeJson.json.shakelist;
            if (!_0x43c012[_0x49ad72]) {
              return void console.log("ShakeWithName shakename:" + _0x49ad72 + " not found!");
            }
            var _0x7efd31 = _0x43c012[_0x49ad72];
            var _0x23cce3 = _0x7efd31._TweenList;
            var _0x135dae = _0x7efd31.weight;
            this._shake(_0x23cce3, _0x7efd31.frequency, _0x7efd31.magnitude, new _0x507581(_0x135dae.x, _0x135dae.y, _0x135dae.z));
          } else {
            console.log("ShakeWithName shakeJson not assign!");
          }
        };
        _0x2965a1._shake = function (_0x2aa4ba, _0x385cf8, _0x14c53c, _0x4ebb6b) {
          this.originPos = this.node.getPosition();
          for (var _0x422ca9 = _0x51e4e3(this.node), _0x257623 = 0; _0x257623 < _0x2aa4ba.length; _0x257623++) {
            var _0x4afb7b = _0x2aa4ba[_0x257623];
            _0x422ca9 = this.fade(_0x422ca9, _0x4afb7b.duration, _0x385cf8, _0x14c53c, _0x4afb7b._fadeType, _0x4ebb6b, _0x4afb7b.m_EasingName);
          }
          (_0x422ca9 = _0x422ca9.to(0, {
            position: this.originPos
          })).start();
        };
        _0x54ea23(_0x1e1487, [{
          key: "saveshake",
          get: function () {
            return false;
          },
          set: function (_0x166937) {
            this.getJsonData();
          }
        }, {
          key: "_ShakeIdx",
          get: function () {
            return this.__ShakeIdx;
          },
          set: function (_0x4f47da) {}
        }, {
          key: "TweenList",
          get: function () {
            return this._TweenList;
          },
          set: function (_0x3b4216) {
            this._TweenList = _0x3b4216;
            this.updateDuration();
            this._updateEasingEnum();
          }
        }]);
        return _0x1e1487;
      }(_0x5aac4b), _0xf50c71 = _0x5a72b5(_0x42ef81.prototype, "alternately", [_0x35a98a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x284737 = _0x5a72b5(_0x42ef81.prototype, "shakeJson", [_0x63b9c4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x46097d = _0x5a72b5(_0x42ef81.prototype, "shakename", [_0xa6cf5b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "custom";
        }
      }), _0x516956 = _0x5a72b5(_0x42ef81.prototype, "__ShakeIdx", [_0x54ace0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x42ef81.prototype, "saveshake", [_0x23aecc], Object.getOwnPropertyDescriptor(_0x42ef81.prototype, "saveshake"), _0x42ef81.prototype), _0x5a72b5(_0x42ef81.prototype, "_ShakeIdx", [_0x2c3cfe], Object.getOwnPropertyDescriptor(_0x42ef81.prototype, "_ShakeIdx"), _0x42ef81.prototype), _0x264cad = _0x5a72b5(_0x42ef81.prototype, "Duration", [_0x586616], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x400488 = _0x5a72b5(_0x42ef81.prototype, "magnitude", [_0x5f2352], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _0x142547 = _0x5a72b5(_0x42ef81.prototype, "frequency", [_0x2709db], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x2fd705 = _0x5a72b5(_0x42ef81.prototype, "weight", [_0x2cb483], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x507581(0, 0, 0);
        }
      }), _0x18e857 = _0x5a72b5(_0x42ef81.prototype, "_TweenList", [_0x271a14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x5a72b5(_0x42ef81.prototype, "TweenList", [_0x28bd62], Object.getOwnPropertyDescriptor(_0x42ef81.prototype, "TweenList"), _0x42ef81.prototype), _0x3a12a9 = _0x42ef81)) || _0x3a12a9) || _0x3a12a9) || _0x3a12a9;
      var _0x44d992;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "b57cahiKlxMZL7TyWc1iHaf", "SloganComponent", undefined);
      var _0x16ac2c = _0x42d118.ccclass;
      var _0xd1ea8f = {
        horizontal: 0,
        vertical: 1
      };
      var _0x15f0c0 = _0x16ac2c(_0x44d992 = function (_0x385caa) {
        function _0x21e3dc() {
          for (var _0x5cf3ea, _0x2be518 = arguments.length, _0x5d3781 = new Array(_0x2be518), _0x35fa3b = 0; _0x35fa3b < _0x2be518; _0x35fa3b++) {
            _0x5d3781[_0x35fa3b] = arguments[_0x35fa3b];
          }
          (_0x5cf3ea = _0x385caa.call.apply(_0x385caa, [this].concat(_0x5d3781)) || this).m_promotePictures = [[], []];
          _0x5cf3ea.m_promoteAni = null;
          _0x5cf3ea.m_promotePic = undefined;
          _0x5cf3ea.m_promoteLock = false;
          _0x5cf3ea.m_promoteIdx = -1;
          _0x5cf3ea.m_adNums = 0;
          _0x5cf3ea.m_isLandscape = undefined;
          _0x5cf3ea.m_curAniName = "";
          _0x5cf3ea.m_changePictureCallback = undefined;
          _0x5cf3ea.m_revertPictureCallback = undefined;
          _0x5cf3ea.m_cycle = [[8, 12], [8, 8]];
          _0x5cf3ea.m_promoting = false;
          _0x5cf3ea.m_animationName = {
            start: "AdSlogan_Start",
            loop: "AdSlogan_Loop",
            end: "AdSlogan_End"
          };
          _0x5cf3ea.ChangePic = function () {
            var _0xb40e2;
            var _0x4d7003;
            if (!_0x5cf3ea.m_promoteLock) {
              _0x5cf3ea.m_promoting = true;
              _0x5cf3ea.m_changePictureCallback && _0x5cf3ea.m_changePictureCallback();
              _0x5cf3ea.m_promoteIdx++;
              _0x5cf3ea.m_promoteIdx >= _0x5cf3ea.m_adNums && (_0x5cf3ea.m_promoteIdx = 0);
              _0x5cf3ea.m_promotePic.spriteFrame = _0x5cf3ea.m_promotePictures[_0x5cf3ea.m_isLandscape ? _0xd1ea8f.horizontal : _0xd1ea8f.vertical][_0x5cf3ea.m_promoteIdx];
              var _0x3b77c8 = _0x19b0e0.GetGameAtlas().getSpriteFrame(null == (_0xb40e2 = _0x5cf3ea.m_promotePic) || null == (_0x4d7003 = _0xb40e2.spriteFrame) ? undefined : _0x4d7003.name);
              _0x3b77c8 && (_0x5cf3ea.m_promotePic.spriteFrame = _0x3b77c8);
              _0x5cf3ea.PlayAni(_0x5cf3ea.m_animationName.start);
              _0x5cf3ea.m_promoteAni.once(_0x41f03c.EventType.FINISHED, function () {
                _0x5cf3ea.m_promoteLock || _0x5cf3ea.PlayAni(_0x5cf3ea.m_animationName.loop);
              });
              _0x5cf3ea.scheduleOnce(_0x5cf3ea.RevertPic, _0x5cf3ea.m_cycle[1][0] == _0x5cf3ea.m_cycle[1][1] ? _0x5cf3ea.m_cycle[1][0] : _0x21e3dc.GetRandomInt(_0x5cf3ea.m_cycle[1][0], _0x5cf3ea.m_cycle[1][1] + 1));
            }
          };
          _0x5cf3ea.RevertPic = function () {
            _0x5cf3ea.m_revertPictureCallback && _0x5cf3ea.m_revertPictureCallback();
            _0x5cf3ea.PlayAni(_0x5cf3ea.m_animationName.end);
            _0x5cf3ea.m_promoteAni.once(_0x41f03c.EventType.FINISHED, function () {
              _0x5cf3ea.m_curAniName = "";
            });
            _0x5cf3ea.m_promoting = false;
            _0x5cf3ea.scheduleOnce(_0x5cf3ea.ChangePic, _0x5cf3ea.m_cycle[0][0] == _0x5cf3ea.m_cycle[0][1] ? _0x5cf3ea.m_cycle[0][0] : _0x21e3dc.GetRandomInt(_0x5cf3ea.m_cycle[0][0], _0x5cf3ea.m_cycle[0][1] + 1));
          };
          return _0x5cf3ea;
        }
        _0x567cf6(_0x21e3dc, _0x385caa);
        _0x21e3dc.GetRandomInt = function (_0x6c28ed, _0x3481f2) {
          return Math.floor(Math.random() * (_0x3481f2 - _0x6c28ed) + _0x6c28ed);
        };
        var _0x518745 = _0x21e3dc.prototype;
        _0x518745.Init = function (_0x42af66, _0x4e69e0, _0x109e54, _0x58876d) {
          undefined === _0x58876d && (_0x58876d = Astarte.Define.GameBundle);
          var _0x14bb1d = this.LoadSlogans(_0x42af66[0], _0x42af66[1], _0x58876d);
          this.m_promoteAni = _0x4e69e0;
          this.m_promotePic = _0x109e54;
          return _0x14bb1d;
        };
        _0x518745.LoadSlogans = function (_0x493d3a, _0xd4f7c1, _0x3b8bcb) {
          var _0x27f991 = this;
          var _0xadd732 = _0x493d3a.length;
          this.m_adNums = _0xadd732;
          for (var _0x560679 = [], _0x4d8e28 = function (_0xcea35f) {
              _0x560679.push(new Promise(function (_0x378bc1) {
                _0x3b8bcb.load(_0x493d3a[_0xcea35f], _0x3d6b8d, function (_0x2dd600, _0x38263e) {
                  _0x2dd600 || (_0x27f991.m_promotePictures[_0xd1ea8f.horizontal][_0xcea35f] = _0x38263e);
                  _0x378bc1();
                });
              }));
              _0xd4f7c1 && _0xd4f7c1[_0xcea35f] && _0x560679.push(new Promise(function (_0x4fef40) {
                _0x3b8bcb.load(_0xd4f7c1[_0xcea35f], _0x3d6b8d, function (_0x1e2a97, _0x370d0c) {
                  _0x1e2a97 || (_0x27f991.m_promotePictures[_0xd1ea8f.vertical][_0xcea35f] = _0x370d0c);
                  _0x4fef40();
                });
              }));
            }, _0x186c55 = 0; _0x186c55 < _0xadd732; _0x186c55++) {
            _0x4d8e28(_0x186c55);
          }
          return Promise.all(_0x560679).then(function () {
            for (var _0xdb2902 = 0; _0xdb2902 < _0xadd732; _0xdb2902++) {
              _0x27f991.m_promotePictures[_0xd1ea8f.vertical][_0xdb2902] || (_0x27f991.m_promotePictures[_0xd1ea8f.vertical][_0xdb2902] = _0x27f991.m_promotePictures[_0xd1ea8f.horizontal][_0xdb2902]);
            }
            _0xb9245("loadSlogans", _0x27f991.m_promotePictures);
          });
        };
        _0x518745.PlayAni = function (_0x23f0c8) {
          this.m_promoteAni && (this.m_promoteAni.play(_0x23f0c8), this.m_curAniName = _0x23f0c8);
        };
        _0x518745.StartPromote = function () {
          this.m_promoteLock = false;
          this.scheduleOnce(this.ChangePic, this.m_cycle[0][0] == this.m_cycle[0][1] ? this.m_cycle[0][0] : _0x21e3dc.GetRandomInt(this.m_cycle[0][0], this.m_cycle[0][1] + 1));
        };
        _0x518745.StopPromote = function () {
          this.m_promoteLock = true;
          this.unschedule(this.RevertPic);
          this.unschedule(this.ChangePic);
          this.EndPromote();
        };
        _0x518745.EndPromote = function () {
          var _0x541796 = this;
          this.m_promoting && (this.m_promoting = false, this.PlayAni(this.m_animationName.end), this.m_promoteAni.once(_0x41f03c.EventType.FINISHED, function () {
            _0x541796.m_curAniName = "";
          }));
        };
        _0x518745.SetAnimationName = function (_0x47b1ab) {
          this.m_animationName = _0x47b1ab;
        };
        _0x518745.SetPromoteCycle = function (_0x5aa759) {
          this.m_cycle = _0x5aa759;
        };
        _0x518745.GetAniState = function () {
          return this.m_promoteAni.getState(this.m_curAniName);
        };
        _0x518745.OnRotation = function (_0x5c108c) {
          var _0x13b964;
          var _0x4138cd;
          if (this.m_isLandscape != _0x5c108c) {
            this.m_isLandscape = _0x5c108c;
            this.m_promotePic.spriteFrame = this.m_promotePictures[this.m_isLandscape ? _0xd1ea8f.horizontal : _0xd1ea8f.vertical][this.m_promoteIdx >= this.m_adNums ? this.m_promoteIdx = 0 : this.m_promoteIdx];
            var _0x3dba0d = _0x19b0e0.GetGameAtlas().getSpriteFrame(null == (_0x13b964 = this.m_promotePic) || null == (_0x4138cd = _0x13b964.spriteFrame) ? undefined : _0x4138cd.name);
            _0x3dba0d && (this.m_promotePic.spriteFrame = _0x3dba0d);
          }
        };
        _0x54ea23(_0x21e3dc, [{
          key: "CurAniName",
          get: function () {
            return this.m_curAniName;
          }
        }, {
          key: "ChangePictureCallback",
          set: function (_0x674760) {
            this.m_changePictureCallback = _0x674760;
          }
        }, {
          key: "RevertPictureCallback",
          set: function (_0x5a93c5) {
            this.m_revertPictureCallback = _0x5a93c5;
          }
        }, {
          key: "Promoting",
          get: function () {
            return this.m_promoting;
          }
        }]);
        return _0x21e3dc;
      }(_0x5aac4b)) || _0x44d992;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "c6e0eKOKjtNwJBDq/hJOYgn", "index", undefined);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "c26e2Km3MlKupGqXKqravOt", "SymbolSpine", undefined);
      var _0xc63e78 = function () {
        function _0x524988(_0xccce85, _0x216025) {
          this.m_symbolData = null;
          this.m_spine = null;
          this.m_eftNode = null;
          this.m_eftNode = _0x15ae44(_0x216025);
          this.m_spine = this.m_eftNode.getComponentInChildren(_0x1a25c9.Skeleton);
          this.InitSymbol(_0xccce85);
        }
        var _0x587a85 = _0x524988.prototype;
        _0x587a85.ResetData = function (_0x318a6e) {
          this.InitSymbol(_0x318a6e);
        };
        _0x587a85.InitSymbol = function (_0x314fc6) {
          this.m_symbolData = _0x314fc6;
        };
        _0x587a85.SetMul = function (_0x194cdb) {
          this.m_symbolData.FinalID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.m_symbolData.FinalID == _0x883e10.Symbol.BONUS_ADD ? this.m_spine.setSkin("Add" + _0x194cdb + "x") : (this.m_symbolData.FinalID == _0x883e10.Symbol.SUPER_BONUS_MUL || this.m_symbolData.FinalID == _0x883e10.Symbol.BONUS_MUL || this.m_symbolData.IsWild) && this.m_spine.setSkin(_0x194cdb + "X");
        };
        _0x587a85.ResetSpine = function () {
          this.m_spine.clearTrack(0);
          this.m_spine.setToSetupPose();
        };
        _0x587a85.PlayAnimation = function (_0x3034c4, _0x272312) {
          var _0x5c586e = this;
          this.m_symbolData.IsWild ? this.SetMul(this.m_symbolData.WildMul) : this.m_symbolData.IsBonus && this.SetMul(this.m_symbolData.BonusMul);
          return new Promise(function (_0x4bc9a9) {
            _0x5c586e.m_spine.clearTrack(0);
            _0x5c586e.m_spine.setToSetupPose();
            var _0x5a86dc = _0x5c586e.m_spine.setAnimation(0, _0x3034c4, _0x272312);
            var _0x224eeb = function () {
              _0x4bc9a9();
            };
            _0x5a86dc && _0x5c586e.m_spine.setTrackEventListener(_0x5a86dc, function () {});
            _0x5a86dc ? _0x5c586e.m_spine.setTrackCompleteListener(_0x5a86dc, function () {
              _0x5c586e.m_spine.setTrackCompleteListener(_0x5a86dc, function () {});
              _0x224eeb();
            }) : _0x5c586e.m_spine.setCompleteListener(function () {
              _0x5c586e.m_spine.setCompleteListener(null);
              _0x224eeb();
            });
          });
        };
        _0x587a85.AddAnimation = function (_0x487691, _0x979b9) {
          this.m_spine.addAnimation(0, _0x487691, _0x979b9);
        };
        _0x54ea23(_0x524988, [{
          key: "SymbolData",
          get: function () {
            return this.m_symbolData;
          }
        }, {
          key: "EftNode",
          get: function () {
            return this.m_eftNode;
          }
        }, {
          key: "Spine",
          get: function () {
            return this.m_spine;
          }
        }]);
        return _0x524988;
      }();
      _0xc63e78.Anim = {
        Close: "Close",
        Idle_Close: "Idle_Close",
        Idle_Open: "Idle_Open",
        NearWin: "NearWin",
        Open: "Open",
        Win: "Win",
        Win_Loop: "Win_Loop"
      };
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "b3becJfBx1Fkrcbaot9VX/p", "NodePool", undefined);
      var _0x125ae8 = function () {
        function _0x1ebd70() {
          this.m_prefabs = null;
          this.m_symbolEffects = null;
          _0x1ebd70._instance = this;
        }
        _0x1ebd70.GetInstance = function () {
          return _0x1ebd70._instance;
        };
        var _0x55de46 = _0x1ebd70.prototype;
        _0x55de46.Destory = function () {
          _0x1ebd70._instance = null;
        };
        _0x55de46.SetEffectPrefabs = function (_0x1f7080) {
          this.m_prefabs = _0x1f7080;
          this.m_symbolEffects = new Array();
          for (var _0x553a80 = 0; _0x553a80 < _0x1f7080.length; _0x553a80++) {
            this.m_symbolEffects.push(new Array());
          }
        };
        _0x55de46.GetEffectNode = function (_0x20f9b0) {
          if (this.m_symbolEffects[_0x20f9b0.SymbolID]) {
            if (this.m_symbolEffects[_0x20f9b0.SymbolID].length > 0) {
              var _0x59640f = this.m_symbolEffects[_0x20f9b0.SymbolID].shift();
              _0x59640f.ResetData(_0x20f9b0);
              return _0x59640f;
            }
            return new _0xc63e78(_0x20f9b0, this.m_prefabs[_0x20f9b0.SymbolID]);
          }
        };
        _0x55de46.ReturnEffect = function (_0x18cea6) {
          this.m_symbolEffects[_0x18cea6.SymbolData.SymbolID] && (_0x18cea6.ResetSpine(), _0x18cea6.EftNode.removeFromParent(), this.m_symbolEffects[_0x18cea6.SymbolData.SymbolID].push(_0x18cea6));
        };
        return _0x1ebd70;
      }();
      var _0x5dad81;
      var _0x8dad2f;
      var _0xb15ed;
      var _0x31d56b;
      var _0x3e29f1;
      var _0x52d8ac;
      _0x125ae8._instance = new _0x125ae8();
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "de1aaExEWJCBJJPIQtgtAI4", "SlotReels", undefined);
      var _0x4a2ae0 = 3;
      var _0x4ed878 = 6;
      var _0x508d6f = 3;
      var _0xd836b8 = [4, 3, 2];
      var _0x2e7dfd = 3;
      var _0x3ed6d6 = 0;
      var _0x52efa8 = {
        Symbol: 0,
        Mask: 1
      };
      var _0x19aba3 = 0.18;
      var _0x5dcc0c = _0x42d118.ccclass;
      var _0x52bf40 = _0x42d118.property;
      _0x5dad81 = _0x52bf40({
        type: _0x3d6b8d,
        tooltip: "MG symbol圖示"
      });
      _0x8dad2f = _0x52bf40({
        type: _0x3d6b8d,
        tooltip: "BG symbol圖示"
      });
      var _0x3bf867 = _0x5dcc0c((_0x31d56b = function (_0x59564e) {
        function _0x595cd2() {
          for (var _0x908493, _0x1ea0a8 = arguments.length, _0x261489 = new Array(_0x1ea0a8), _0x228d9e = 0; _0x228d9e < _0x1ea0a8; _0x228d9e++) {
            _0x261489[_0x228d9e] = arguments[_0x228d9e];
          }
          _0x4f841b(_0x908493 = _0x59564e.call.apply(_0x59564e, [this].concat(_0x261489)) || this, "m_mgSymbolImgs", _0x3e29f1, _0x2fdb02(_0x908493));
          _0x4f841b(_0x908493, "m_bgSymbolImgs", _0x52d8ac, _0x2fdb02(_0x908493));
          _0x908493.m_gameView = null;
          _0x908493.m_symbolSize = null;
          _0x908493.m_viewSize = null;
          _0x908493.m_reelPositionOffset = [_0x2ea746(0, 82.5), _0x2ea746(0, 82.5), _0x2ea746(0, 82.5)];
          _0x908493.m_symbol = new Array();
          _0x908493.m_plateInfo = [[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]];
          _0x908493.m_currentPlate = [[null, null, null, null, null, null], [null, null, null, null, null, null], [null, null, null, null, null, null]];
          _0x908493.m_isChangeSymbol = new Array();
          _0x908493.m_checkActiveArr = new Array();
          _0x908493.m_isChangeToFinalSymbol = new Array();
          _0x908493.m_reelStopTime = new Array();
          _0x908493.m_time = 0;
          _0x908493.m_stopTime = 0;
          _0x908493.m_riseTime = 0;
          _0x908493.m_spinBufferTime01 = 0.1;
          _0x908493.m_spinBufferTime02 = 0.08;
          _0x908493.m_spinSpeed = 0.18;
          _0x908493.m_upLength = 0;
          _0x908493.m_numberOfSymbol = 0;
          _0x908493.m_downLength = 30;
          _0x908493.m_timesOfBaseSpin = 1;
          _0x908493.m_spinIntervalTimes = 1;
          _0x908493.m_spinDelayTime = 0;
          _0x908493.m_isStop = false;
          _0x908493.m_isClickStopBtn = false;
          _0x908493.m_playStopSound = null;
          _0x908493.m_isNearWin = [false, false, false];
          _0x908493.m_isPlaySound = [false, false, false];
          _0x908493.m_reelSoundId = null;
          _0x908493.m_reelPreTime = new Array();
          _0x908493.m_reelNearWinTime = new Array();
          _0x908493.m_nearWinStartFunc = null;
          _0x908493.m_nearWinEndFunc = null;
          _0x908493.m_isNearWinCbSent = [false, false, false];
          _0x908493.m_nearWinSpins = 7;
          _0x908493.m_relativeHeight = 240;
          _0x908493.m_scaleStandard = 1;
          _0x908493.m_scaleRateX = 0.9;
          _0x908493.m_scaleRateY = 0.9;
          _0x908493.m_order = null;
          _0x908493.m_lock = [false, false, false];
          _0x908493.m_totalWeight = 0;
          _0x908493.m_cumulativeWeight = [];
          _0x908493.m_hardStopSpinSpeed = 0.18;
          return _0x908493;
        }
        _0x567cf6(_0x595cd2, _0x59564e);
        var _0x23ddff = _0x595cd2.prototype;
        _0x23ddff.onLoad = function () {
          var _0x269f10 = this;
          this.m_viewSize = this.node.getComponent(_0x45bc58).contentSize;
          this.m_symbolSize = new _0x2265bd(this.m_viewSize.width / _0x2e7dfd, 165);
          this.SetupMGRandomWeight([]);
          for (var _0x45d7ec = 0; _0x45d7ec < _0x4a2ae0; _0x45d7ec++) {
            this.m_reelStopTime.push(null);
            this.m_reelPreTime.push(null);
            this.m_reelNearWinTime.push(null);
            for (var _0x9b47c8 = new Array(), _0x52d6bb = this.m_symbolSize.width * (_0x45d7ec + 0.5) + this.m_reelPositionOffset[_0x45d7ec].x - this.m_viewSize.width / 2, _0x538189 = this.GetIsLock(_0x45d7ec), _0x1e4976 = [_0x883e10.Symbol.BONUS], _0x9260b = 0; _0x9260b < _0x4ed878; _0x9260b++) {
              var _0x4ac26f = new _0x5cf7a3();
              var _0x2c8a3d = _0x4ac26f.addComponent(_0x2f2b2d);
              _0x2c8a3d.trim = false;
              _0x2c8a3d.sizeMode = _0x2f2b2d.SizeMode.RAW;
              this.node.addChild(_0x4ac26f);
              _0x369abc.SetZIndex(_0x4ac26f, _0x52efa8.Symbol);
              _0x4ac26f.name = this.m_numberOfSymbol.toString();
              this.m_numberOfSymbol += 1;
              this.m_isChangeToFinalSymbol.push(false);
              _0x9b47c8.push(_0x4ac26f);
              var _0x66a808 = this.m_symbolSize.height / 2 * (_0x9260b - 2) + this.m_reelPositionOffset[_0x45d7ec].y - this.m_viewSize.height / 2;
              _0x4ac26f.setPosition(_0x52d6bb, _0x66a808);
              var _0x2e712d = this.RandSymbolData(_0x45d7ec, _0x9260b, false, this.IsMg, true, _0x538189, _0x1e4976);
              _0x1e4976.push(_0x2e712d.SymbolID);
              this.m_currentPlate[_0x45d7ec][_0x9260b] = _0x2e712d;
              this.m_plateInfo[_0x45d7ec][_0x9260b] = _0x2e712d;
              _0x2c8a3d.spriteFrame = this.GetSymbolSpriteFrame(_0x2e712d.SymbolID);
            }
            this.m_symbol.push(_0x9b47c8);
          }
          for (var _0x565ed1 = 0; _0x565ed1 < _0x4a2ae0; _0x565ed1++) {
            for (var _0x1500f5 = 0; _0x1500f5 < _0x4ed878; _0x1500f5++) {
              this.SetRadian(_0x565ed1, _0x1500f5);
            }
          }
          var _0x2e900c = function () {
            var _0x345bc2 = _0x81cc27.TempoSetting.Crazy777;
            _0x269f10.m_riseTime = _0x345bc2.BASE.RISE_TIME;
            _0x269f10.m_upLength = _0x345bc2.BASE.UP_LENGTH;
            _0x269f10.m_spinBufferTime01 = _0x345bc2.BASE.SPIN_BUFFER_TIME_01;
            _0x269f10.m_spinBufferTime02 = _0x345bc2.BASE.SPIN_BUFFER_TIME_02;
            _0x269f10.m_downLength = _0x345bc2.BASE.DOWN_LENGTH;
            _0x269f10.m_spinSpeed = _0x345bc2.BASE.SPIN_SPEED;
            _0x269f10.m_timesOfBaseSpin = _0x345bc2.BASE.TIMES_OF_BASE_SPIN;
            _0x269f10.m_spinIntervalTimes = _0x345bc2.BASE.SPIN_INTERVAL_TIMES;
            _0x269f10.m_spinDelayTime = _0x345bc2.BASE.SPIN_DELAY_TIME;
            _0x3ed6d6 = _0x345bc2.BASE.HARD_STOP_INTERVAL_TIME;
            _0x269f10.m_hardStopSpinSpeed = _0x345bc2.BASE.HARD_STOP_SPIN_SPEED;
            _0x19aba3 = _0x345bc2.BASE.SPIN_SPEED;
          };
          _0x2e900c();
          _0x81cc27.AddCb(_0x2e900c);
        };
        _0x23ddff.SetRandomPlate = function () {
          for (var _0x1943e4 = 0; _0x1943e4 < _0x4a2ae0; _0x1943e4++) {
            for (var _0x25166c = this.GetIsLock(_0x1943e4), _0x1df249 = 0; _0x1df249 < _0x4ed878; _0x1df249++) {
              var _0x4398c8 = this.HasSpecialSymbol(this.m_currentPlate[_0x1943e4]);
              var _0x272e29 = this.RandSymbolData(_0x1943e4, _0x1df249, false, this.IsMg, _0x4398c8, _0x25166c);
              this.m_currentPlate[_0x1943e4][_0x1df249] = _0x272e29;
              this.m_plateInfo[_0x1943e4][_0x1df249] = _0x272e29;
              this.ChangeSymbol(_0x1943e4, this.m_symbol[_0x1943e4][_0x1df249], true);
            }
          }
        };
        _0x23ddff.RecoverPlate = function () {
          for (var _0x4d9dd9 = 0; _0x4d9dd9 < _0x4a2ae0; _0x4d9dd9++) {
            for (var _0x361b05 = this.m_symbolSize.width * (_0x4d9dd9 + 0.5) + this.m_reelPositionOffset[_0x4d9dd9].x - this.m_viewSize.width / 2, _0x2d3a47 = 0; _0x2d3a47 < _0x4ed878; _0x2d3a47++) {
              var _0x1c7391 = this.m_symbol[_0x4d9dd9][_0x2d3a47].getComponent(_0x2f2b2d);
              this.m_numberOfSymbol += 1;
              this.m_isChangeToFinalSymbol.push(false);
              var _0x47ee66 = this.m_plateInfo[_0x4d9dd9][_0x2d3a47];
              _0x1c7391.spriteFrame = this.GetSymbolSpriteFrame(_0x47ee66.SymbolID);
              var _0x51e985 = this.m_symbolSize.height / 2 * (_0x2d3a47 - 2) + this.m_reelPositionOffset[_0x4d9dd9].y - this.m_viewSize.height / 2;
              this.m_symbol[_0x4d9dd9][_0x2d3a47].setPosition(_0x361b05, _0x51e985);
            }
          }
          for (var _0x315aaa = 0; _0x315aaa < _0x4a2ae0; _0x315aaa++) {
            for (var _0x48b9d4 = 0; _0x48b9d4 < _0x4ed878; _0x48b9d4++) {
              this.SetRadian(_0x315aaa, _0x48b9d4);
            }
          }
        };
        _0x23ddff.RandSymbolData = function (_0x3bcf51, _0x37d1c8, _0x22e5f5, _0x14d6e9, _0x33a7b8, _0x284955, _0x268070) {
          undefined === _0x22e5f5 && (_0x22e5f5 = false);
          undefined === _0x14d6e9 && (_0x14d6e9 = true);
          undefined === _0x284955 && (_0x284955 = false);
          undefined === _0x268070 && (_0x268070 = []);
          var _0x28960f = this.RandSymbol(_0x37d1c8, _0x22e5f5, _0x14d6e9, _0x33a7b8, _0x284955, _0x268070);
          return this.m_gameView.GenRandomSymbol(_0x28960f, _0x3bcf51, _0x37d1c8);
        };
        _0x23ddff.RandSymbol = function (_0x10ba10, _0x3955fc, _0x192ba6, _0x4adaa5, _0x28dc45, _0x29034e) {
          if (undefined === _0x3955fc && (_0x3955fc = false), undefined === _0x192ba6 && (_0x192ba6 = true), undefined === _0x28dc45 && (_0x28dc45 = false), _0x3955fc || _0x10ba10 % 2 == 0) {
            var _0x5d4106 = _0x192ba6 ? JSON.parse(JSON.stringify(_0x883e10.FullRandList)) : JSON.parse(JSON.stringify(_0x883e10.FullRandSpecialList));
            var _0x49ee5c = {};
            if (_0x192ba6) {
              this.SetupMGRandomWeight(_0x29034e);
              for (var _0x17ed14 = Math.random(), _0x37e4e9 = 0; _0x37e4e9 < _0x5d4106.length; _0x37e4e9++) {
                if (_0x17ed14 < this.m_cumulativeWeight[_0x37e4e9] / this.m_totalWeight) {
                  return _0x5d4106[_0x37e4e9];
                }
              }
              return _0x5d4106[0];
            }
            _0x4adaa5 && (_0x49ee5c[_0x883e10.Symbol.BONUS_ADD] = true, _0x49ee5c[_0x883e10.Symbol.BONUS_MUL] = true, _0x49ee5c[_0x883e10.Symbol.SUPER_BONUS_ADD] = true, _0x49ee5c[_0x883e10.Symbol.SUPER_BONUS_MUL] = true, _0x49ee5c[_0x883e10.Symbol.KEY] = true, _0x49ee5c[_0x883e10.Symbol.LOCK] = true);
            for (var _0x4cc114 = 0; _0x4cc114 < _0x29034e.length; _0x4cc114++) {
              _0x49ee5c[_0x29034e[_0x4cc114]] = true;
            }
            _0x28dc45 ? _0x49ee5c[_0x883e10.Symbol.LOCK] = true : _0x49ee5c[_0x883e10.Symbol.KEY] = true;
            for (var _0x2dc7a8 = 0; _0x2dc7a8 < _0x5d4106.length; _0x2dc7a8++) {
              _0x49ee5c[_0x5d4106[_0x2dc7a8]] && (_0x5d4106.splice(_0x2dc7a8, 1), _0x2dc7a8--);
            }
            return _0x5d4106[Math.floor(Math.random() * _0x5d4106.length)];
          }
          return _0x883e10.Symbol.Empty;
        };
        _0x23ddff.Init = function (_0x3ac860) {
          this.m_gameView = _0x3ac860;
        };
        _0x23ddff.StartSpin = function () {
          this.m_spinSpeed = _0x19aba3;
          this.m_time = 0;
          this.m_stopTime = 0;
          this.m_isStop = false;
          this.m_isClickStopBtn = false;
          this.m_isPlaySound = [false, false, false, false, false];
          this.m_isNearWin = [false, false, false];
          this.m_order = null;
          this.SaveLockList();
          for (var _0x305e1f = 0; _0x305e1f < _0x4a2ae0; _0x305e1f++) {
            this.m_reelStopTime[_0x305e1f] = null;
            this.m_reelPreTime[_0x305e1f] = null;
            this.m_reelNearWinTime[_0x305e1f] = null;
          }
          for (var _0x4fbb76 = 0; _0x4fbb76 < this.m_isChangeToFinalSymbol.length; _0x4fbb76++) {
            this.m_isChangeToFinalSymbol[_0x4fbb76] = false;
          }
          for (var _0x27a3ce = 0; _0x27a3ce < _0x4a2ae0 * _0x4ed878; _0x27a3ce++) {
            this.m_isChangeSymbol.push(true);
          }
          for (var _0x3ce857 = 0; _0x3ce857 < _0x4a2ae0 * _0x4ed878; _0x3ce857++) {
            this.m_checkActiveArr[_0x3ce857] = null;
          }
          for (var _0x543e6c = 0; _0x543e6c < _0x4a2ae0; _0x543e6c++) {
            if (!this.m_gameView.IsInBG) {
              for (var _0x3eed92 = 0; _0x3eed92 < _0x4ed878; _0x3eed92++) {
                this.m_symbol[_0x543e6c][_0x3eed92].active = true;
              }
            }
          }
        };
        _0x23ddff.SetIsClickStopBtn = function (_0x2123f1) {
          if (undefined === _0x2123f1 && (_0x2123f1 = 0), this.m_isClickStopBtn = true, 0 != this.m_stopTime) {
            this.m_spinSpeed = this.m_hardStopSpinSpeed;
            for (var _0x42950c = 0, _0x338b94 = 0; _0x338b94 < _0x4a2ae0; _0x338b94++) {
              var _0x3aef16 = (Math.floor(this.m_time / this.m_spinSpeed) + 1 + _0x2123f1) * this.m_spinSpeed + _0x3ed6d6 * this.m_spinSpeed * _0x338b94;
              this.m_reelStopTime[_0x338b94] > _0x3aef16 && (this.m_reelStopTime[_0x338b94] = _0x369abc.strip(_0x3aef16), this.m_reelPreTime[_0x338b94] = _0x369abc.strip(_0x3aef16) - 1 * this.m_spinSpeed, this.m_reelNearWinTime[_0x338b94] = this.m_reelPreTime[_0x338b94]);
              this.m_reelStopTime[_0x338b94] > _0x42950c && (_0x42950c = this.m_reelStopTime[_0x338b94]);
            }
            _0x42950c < this.m_stopTime && (this.m_stopTime = _0x369abc.strip(_0x42950c));
          }
        };
        _0x23ddff.Spin = function (_0x4b8dd2) {
          this.m_time = _0x369abc.strip(this.m_time + _0x4b8dd2);
          this.m_isStop || (this.Spin_RealSpinMultiple(), this.m_time >= this.m_stopTime && 0 != this.m_stopTime && (this.m_isStop = true, this.m_reelSoundId && (this.m_reelSoundId = null)));
        };
        _0x23ddff.Spin_RealSpinMultiple = function () {
          for (var _0x13fe2a = this.m_symbolSize.height * (_0x4ed878 / 2), _0xd2252f = 0; _0xd2252f < _0x4a2ae0; _0xd2252f++) {
            var _0xe61daa = this.m_spinSpeed;
            var _0x4dbaad = this.m_time;
            var _0x233762 = this.m_reelStopTime[_0xd2252f];
            var _0x4c8c80 = this.m_reelPreTime[_0xd2252f];
            var _0xd9bc26 = this.m_riseTime * _0x4a2ae0;
            var _0x18604b = this.m_reelNearWinTime[_0xd2252f];
            this.m_isNearWin[_0xd2252f] && null != _0x233762 && _0x4dbaad > _0x4c8c80 + _0xd9bc26 && this.ShowNearWin(_0xd2252f, _0xd9bc26);
            for (var _0x526007 = 0; _0x526007 < _0x4ed878; _0x526007++) {
              var _0x419d82 = this.m_symbolSize.width * (_0xd2252f + 0.5) + this.m_reelPositionOffset[_0xd2252f].x - this.m_viewSize.width / 2;
              var _0x75b42f = this.m_symbolSize.height / 2 * (_0x526007 - 2) + this.m_reelPositionOffset[_0xd2252f].y - this.m_viewSize.height / 2;
              var _0x22b1f2 = this.m_symbolSize.height * (_0x526007 / 2 + 0.25);
              if (_0x4dbaad < this.m_riseTime * (_0xd2252f + 1)) {
                var _0x6364fb = (_0x4dbaad - this.m_riseTime * _0xd2252f) / this.m_riseTime * this.m_upLength;
                this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f + _0x6364fb);
              } else {
                if (_0x4dbaad < _0xd9bc26) {
                  this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f + this.m_upLength);
                } else {
                  if (null == _0x233762 || _0x4dbaad < _0x4c8c80 + _0xd9bc26) {
                    var _0x101a19 = (_0x4dbaad - _0xd9bc26) % _0xe61daa / _0xe61daa * this.m_symbolSize.height * _0x4ed878 / 2;
                    var _0x13e1f1 = this.GetMovelength(_0x101a19, _0x22b1f2, _0x13fe2a, _0xd2252f, Number(this.m_symbol[_0xd2252f][_0x526007].name), this.m_symbol[_0xd2252f][_0x526007], false);
                    this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f - _0x13e1f1);
                  } else {
                    if (_0x4dbaad < _0x18604b + _0xd9bc26) {
                      var _0x3da4e2 = (_0x4dbaad - (_0x4c8c80 + _0xd9bc26)) % _0xe61daa / _0xe61daa * this.m_symbolSize.height * _0x4ed878 / 2;
                      var _0x352dc9 = this.GetMovelength(_0x3da4e2, _0x22b1f2, _0x13fe2a, _0xd2252f, Number(this.m_symbol[_0xd2252f][_0x526007].name), this.m_symbol[_0xd2252f][_0x526007], false);
                      this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f - _0x352dc9);
                    } else {
                      if (_0x4dbaad < _0x233762 + _0xd9bc26) {
                        var _0x54fc73 = (_0x4dbaad - _0xd9bc26) % _0xe61daa / _0xe61daa * this.m_symbolSize.height * _0x4ed878 / 2;
                        var _0x12404c = this.GetMovelength(_0x54fc73, _0x22b1f2, _0x13fe2a, _0xd2252f, Number(this.m_symbol[_0xd2252f][_0x526007].name), this.m_symbol[_0xd2252f][_0x526007], false);
                        this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f - _0x12404c);
                      } else {
                        if (_0x4dbaad < _0x233762 + _0xd9bc26 + this.m_spinBufferTime01 && !this.m_isClickStopBtn) {
                          this.CheckPlayStopSound(_0xd2252f, _0x526007);
                          var _0x3aca4b = (_0x4dbaad - _0x233762 - _0xd9bc26) / this.m_spinBufferTime01 * this.m_downLength;
                          this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f - _0x3aca4b);
                          this.CheckChangeToFinalSymbol(_0xd2252f, this.m_symbol[_0xd2252f][_0x526007].name, this.m_symbol[_0xd2252f][_0x526007], true);
                        } else {
                          if (_0x4dbaad < _0x233762 + _0xd9bc26 + this.m_spinBufferTime01 + this.m_spinBufferTime02 && !this.m_isClickStopBtn) {
                            this.CheckPlayStopSound(_0xd2252f, _0x526007);
                            var _0x56af6c = (_0x4dbaad - _0x233762 - _0xd9bc26 - this.m_spinBufferTime01) / this.m_spinBufferTime02 * this.m_downLength;
                            this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f - this.m_downLength + _0x56af6c);
                            this.CheckChangeToFinalSymbol(_0xd2252f, this.m_symbol[_0xd2252f][_0x526007].name, this.m_symbol[_0xd2252f][_0x526007], true);
                          } else {
                            this.CheckChangeToFinalSymbol(_0xd2252f, this.m_symbol[_0xd2252f][_0x526007].name, this.m_symbol[_0xd2252f][_0x526007], true);
                            this.CheckPlayStopSound(_0xd2252f, _0x526007);
                            this.m_symbol[_0xd2252f][_0x526007].setPosition(_0x419d82, _0x75b42f);
                          }
                        }
                      }
                    }
                  }
                }
              }
              this.SetRadian(_0xd2252f, _0x526007);
            }
          }
        };
        _0x23ddff.ShowNearWin = function (_0x4e31a5, _0x16380d) {
          this.m_reelStopTime[_0x4e31a5] && (this.m_time < this.m_reelStopTime[_0x4e31a5] + _0x16380d && !this.m_isClickStopBtn ? this.m_isNearWinCbSent[_0x4e31a5] || (this.m_isNearWinCbSent[_0x4e31a5] = true, this.m_nearWinStartFunc && this.m_nearWinStartFunc()) : this.m_nearWinEndFunc && this.m_isNearWinCbSent[_0x4e31a5] && (this.m_isNearWinCbSent[_0x4e31a5] = false, this.m_nearWinEndFunc()));
        };
        _0x23ddff.GetMovelength = function (_0x4bfa55, _0x4c47d6, _0x40b32f, _0x974e26, _0x5d1af8, _0x52933b, _0x54cd44) {
          _0x4bfa55 >= _0x4c47d6 ? (_0x4bfa55 -= _0x40b32f, this.m_isChangeSymbol[_0x5d1af8] && (this.m_isChangeSymbol[_0x5d1af8] = false, this.ChangeSymbol(_0x974e26, _0x52933b, _0x54cd44))) : this.m_isChangeSymbol[_0x5d1af8] = true;
          return _0x4bfa55;
        };
        _0x23ddff.ChangeSymbol = function (_0x3d71e0, _0x59be66, _0x5eb1c1) {
          var _0x4b83be;
          var _0x1110cc = Number(_0x59be66.name);
          var _0x384ced = this.m_reelPreTime[_0x3d71e0];
          var _0x27b68c = _0x1110cc % _0x4ed878;
          var _0x568871 = _0x369abc.divide(_0x369abc.minus(_0x1110cc, _0x27b68c), _0x4ed878);
          var _0x4b60bd = this.m_reelNearWinTime[_0x3d71e0];
          if (_0x384ced && (this.m_time >= _0x4b60bd || Math.abs(this.m_time - _0x4b60bd) < 0.017) || _0x5eb1c1) {
            var _0x5375eb = _0x59be66.getComponent(_0x2f2b2d);
            _0x4b83be = this.m_plateInfo[_0x568871][_0x27b68c];
            this.m_currentPlate[_0x568871][_0x27b68c] = _0x4b83be;
            _0x5375eb.spriteFrame = this.GetSymbolSpriteFrame(_0x4b83be.SymbolID);
          } else {
            var _0xbcf39b = _0x59be66.getComponent(_0x2f2b2d);
            var _0x763c2a = this.GetIsLock(_0x3d71e0);
            var _0x152cce = this.HasSpecialSymbol(this.m_currentPlate[_0x568871]);
            _0x4b83be = this.RandSymbolData(_0x568871, _0x27b68c, false, this.IsMg, _0x152cce, _0x763c2a);
            this.m_currentPlate[_0x568871][_0x27b68c] = _0x4b83be;
            _0xbcf39b.spriteFrame = this.GetSymbolSpriteFrame(_0x4b83be.SymbolID);
          }
        };
        _0x23ddff.IsNullSymbol = function (_0x2048f0) {
          return _0x2048f0 == _0x883e10.Symbol.Empty;
        };
        _0x23ddff.CheckChangeToFinalSymbol = function (_0x22a52c, _0x37f512, _0x3c4cf7, _0x383f4e) {
          undefined === _0x383f4e && (_0x383f4e = false);
          this.m_isChangeToFinalSymbol[_0x37f512] || (this.m_isChangeToFinalSymbol[_0x37f512] = true, this.ChangeSymbol(_0x22a52c, _0x3c4cf7, _0x383f4e));
        };
        _0x23ddff.SetPlayStopSoundFunction = function (_0x517d64) {
          this.m_playStopSound = _0x517d64;
        };
        _0x23ddff.CheckPlayStopSound = function (_0x826b4f, _0x4ac595) {
          this.m_playStopSound && !this.m_isPlaySound[_0x826b4f] && 0 == _0x4ac595 && (this.m_isPlaySound[_0x826b4f] = true, this.m_playStopSound(_0x826b4f));
        };
        _0x23ddff.SetPlateSymbol = function (_0x4a900e) {
          this.CompleteAllSymbol(_0x4a900e);
          for (var _0xd62563 = 0; _0xd62563 < _0x4a2ae0; _0xd62563++) {
            for (var _0x21da2e = 0; _0x21da2e < _0x4ed878; _0x21da2e++) {
              _0x37b4ff.stopAllByTarget(this.m_symbol[_0xd62563][_0x21da2e]);
              this.ChangeSymbol(_0xd62563, this.m_symbol[_0xd62563][_0x21da2e], true);
            }
          }
        };
        _0x23ddff.SetPlateInfo = function (_0x2799a0) {
          !this.m_gameView.IsInBG && _0x2799a0[0].find(function (_0x75bccf) {
            return _0x75bccf.IsBonus;
          }) && _0x2799a0[1].find(function (_0x44303d) {
            return _0x44303d.IsBonus;
          }) && (this.m_isNearWin = [false, false, true]);
          this.CompleteAllSymbol(_0x2799a0);
          this.m_order = [0, 1, 2];
          for (var _0x4c7b83 = 0, _0x11a3c8 = this.m_riseTime * _0x4ed878, _0x261f28 = 0; _0x261f28 < _0x4a2ae0; _0x261f28++) {
            var _0x416a16 = Math.floor((this.m_time - _0x11a3c8) / this.m_spinSpeed) + 2;
            _0x416a16 < 2 && (_0x416a16 = 2);
            var _0x1be515 = this.m_isNearWin[_0x261f28];
            var _0x489880 = _0x369abc.times(this.m_spinSpeed, _0x416a16 + this.m_timesOfBaseSpin - 1);
            var _0x3d4c8b = _0x369abc.times(this.m_spinIntervalTimes, this.m_spinSpeed * this.m_order[_0x261f28]);
            var _0x8758f6 = _0x1be515 ? _0x369abc.times(this.m_spinSpeed, this.m_nearWinSpins) : 0;
            var _0xb59c8c = _0x369abc.times(this.m_spinSpeed, 1);
            this.m_reelPreTime[_0x261f28] = _0x369abc.strip(_0x489880 + _0x3d4c8b);
            this.m_reelNearWinTime[_0x261f28] = _0x369abc.strip(_0x489880 + _0x3d4c8b + _0x8758f6);
            this.m_reelStopTime[_0x261f28] = _0x369abc.strip(_0x489880 + _0x3d4c8b + _0x8758f6 + _0xb59c8c);
            this.m_reelStopTime[_0x261f28] > _0x4c7b83 && (_0x4c7b83 = this.m_reelStopTime[_0x261f28]);
          }
          this.m_stopTime = _0x369abc.strip(_0x4c7b83 + this.m_spinDelayTime + _0x11a3c8 + this.m_spinBufferTime01 + this.m_spinBufferTime02);
        };
        _0x23ddff.IsPlateStop = function () {
          return this.m_isStop;
        };
        _0x23ddff.CompleteAllSymbol = function (_0x3926d1) {
          for (var _0x46cb1e = [], _0x530eaf = 0; _0x530eaf < _0x4a2ae0; _0x530eaf++) {
            _0x46cb1e.push([]);
            for (var _0x2aa9cd = this.GetIsLock(_0x530eaf), _0x36d084 = _0x3926d1[_0x530eaf].map(function (_0x24bbea) {
                return _0x24bbea.SymbolID;
              }), _0x2c5981 = 0; _0x2c5981 < _0x4ed878; _0x2c5981++) {
              if (_0xd836b8.includes(_0x2c5981)) {
                var _0x3321d8 = _0xd836b8.indexOf(_0x2c5981);
                _0x46cb1e[_0x530eaf].push(_0x3926d1[_0x530eaf][_0x3321d8]);
              } else {
                if (2 == Math.abs(_0x2c5981 - _0x508d6f) && _0x3926d1[_0x530eaf][1].SymbolID != _0x883e10.Symbol.Empty || 3 == Math.abs(_0x2c5981 - _0x508d6f) && _0x3926d1[_0x530eaf][1].SymbolID == _0x883e10.Symbol.Empty) {
                  var _0x4d59fa = this.HasSpecialSymbol(_0x3926d1[_0x530eaf]) || this.HasSpecialSymbol(_0x46cb1e[_0x530eaf]);
                  var _0x4bf136 = this.RandSymbolData(_0x530eaf, _0x2c5981, true, this.IsMg, _0x4d59fa, _0x2aa9cd, _0x36d084);
                  _0x46cb1e[_0x530eaf].push(_0x4bf136);
                  _0x36d084.push(_0x4bf136.SymbolID);
                } else {
                  _0x46cb1e[_0x530eaf].push(this.m_gameView.GenRandomSymbol(_0x883e10.Symbol.Empty, _0x530eaf, _0x2c5981));
                }
              }
            }
          }
          this.m_plateInfo = _0x46cb1e;
        };
        _0x23ddff.SetRadian = function (_0x4a9f37, _0x1326c7) {
          var _0x18ca56 = this.m_symbol[_0x4a9f37][_0x1326c7].getPosition();
          var _0x8ea13e = this.m_scaleStandard + 0 - Math.abs(_0x18ca56.y) * (this.m_scaleStandard + 0 - this.m_scaleRateX) / this.m_relativeHeight;
          this.m_symbol[_0x4a9f37][_0x1326c7].setScale(_0x8ea13e, _0x8ea13e);
        };
        _0x23ddff.SetNearWinCb = function (_0x4ef94f, _0x5e325c) {
          for (var _0xa40d83 = 0; _0xa40d83 < this.m_isNearWinCbSent.length; _0xa40d83++) {
            this.m_isNearWinCbSent[_0xa40d83] = false;
          }
          this.m_nearWinStartFunc = _0x4ef94f;
          this.m_nearWinEndFunc = _0x5e325c;
        };
        _0x23ddff.GetSymbolByServer = function (_0x363d5b, _0x7aca5e) {
          var _0x308b7a = _0xd836b8[_0x7aca5e];
          return this.m_symbol[_0x363d5b][_0x308b7a];
        };
        _0x23ddff.GetSymbol = function (_0x4816e7, _0x5cc0de) {
          return this.m_symbol[_0x4816e7][_0x5cc0de];
        };
        _0x23ddff.GetSymbolSpriteFrame = function (_0x159972) {
          var _0x12c3e4 = this.m_gameView.IsInBG ? this.m_bgSymbolImgs : this.m_mgSymbolImgs;
          return _0x159972 < 0 && _0x159972 >= _0x12c3e4.length ? null : _0x12c3e4[_0x159972];
        };
        _0x23ddff.ChangeGraySymbol = function () {
          var _0x159549 = this;
          this.m_plateInfo.forEach(function (_0xca4cd4, _0x138a90) {
            _0xca4cd4.forEach(function (_0x519c2f, _0x41868b) {
              _0x519c2f.IsConvertGray && (_0x159549.m_symbol[_0x138a90][_0x41868b].getComponent(_0x2f2b2d).spriteFrame = _0x159549.m_bgSymbolImgs[_0x519c2f.SymbolID]);
            });
          });
        };
        _0x23ddff.ChangeNormalSymbol = function () {
          var _0x11b1c2 = this;
          this.m_plateInfo.forEach(function (_0x4642a9, _0x47d103) {
            _0x4642a9.forEach(function (_0xe24c5a, _0x231e46) {
              _0xe24c5a.IsConvertGray && (_0x11b1c2.m_symbol[_0x47d103][_0x231e46].getComponent(_0x2f2b2d).spriteFrame = _0x11b1c2.m_mgSymbolImgs[_0xe24c5a.SymbolID]);
            });
          });
        };
        _0x23ddff.HasSpecialSymbol = function (_0x3bf5be) {
          return !!_0x3bf5be.find(function (_0x27c329) {
            return _0x27c329 && _0x27c329.IsSpecialSymbol;
          });
        };
        _0x23ddff.GetIsLock = function (_0x5afc50) {
          return this.m_lock[_0x5afc50];
        };
        _0x23ddff.SaveLockList = function () {
          this.m_lock = !this.m_gameView.SpinAck || this.IsMg ? [false, false, false] : this.m_gameView.RoundInfo.BonusLock;
        };
        _0x23ddff.SetupMGRandomWeight = function (_0x356d81) {
          this.m_totalWeight = 0;
          this.m_cumulativeWeight = [];
          for (var _0x14e217 = 0; _0x14e217 < _0x883e10.FullRandList.length; _0x14e217++) {
            _0x356d81.includes(_0x883e10.FullRandList[_0x14e217]) || (this.m_totalWeight += _0x883e10.MGRandSymbolWeight[_0x14e217]);
            this.m_cumulativeWeight.push(this.m_totalWeight);
          }
        };
        _0x54ea23(_0x595cd2, [{
          key: "PlateInfo",
          get: function () {
            return this.m_plateInfo.map(function (_0x179a52) {
              return _0x179a52.concat();
            });
          }
        }, {
          key: "IsClickStopBtn",
          get: function () {
            return this.m_isClickStopBtn;
          }
        }, {
          key: "IsMg",
          get: function () {
            return !this.m_gameView.IsInBG;
          }
        }]);
        return _0x595cd2;
      }(_0x5aac4b), _0x3e29f1 = _0x5a72b5(_0x31d56b.prototype, "m_mgSymbolImgs", [_0x5dad81], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x52d8ac = _0x5a72b5(_0x31d56b.prototype, "m_bgSymbolImgs", [_0x8dad2f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0xb15ed = _0x31d56b)) || _0xb15ed;
      var _0x56a05e;
      var _0x4869cb;
      var _0x24ac68;
      var _0x1f7bd0;
      var _0x23df67;
      var _0x5a5036;
      var _0x165dad;
      var _0x272320;
      var _0x9c8d1c;
      var _0x30e4ef;
      var _0x4d519c;
      var _0x3af237;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "0eb65MCx2hPgakNMH1hlLym", "EffectPlate", undefined);
      var _0x3b61ce = _0x42d118.ccclass;
      var _0xdaf796 = _0x42d118.property;
      _0x56a05e = _0xdaf796({
        type: _0x3bf867,
        tooltip: "轉輪"
      });
      _0x4869cb = _0xdaf796({
        type: _0x5cf7a3,
        tooltip: "特效層"
      });
      _0x24ac68 = _0xdaf796({
        type: _0x374deb,
        tooltip: "NearWin 特效_橫版"
      });
      _0x1f7bd0 = _0xdaf796({
        type: _0x374deb,
        tooltip: "NearWin 特效_直版"
      });
      _0x23df67 = _0xdaf796({
        type: _0x49fc57,
        tooltip: "symbol中獎表演"
      });
      var _0x8fc14f = _0x3b61ce((_0x165dad = function (_0xfff81e) {
        function _0x319251() {
          for (var _0x28fe74, _0x3b6268 = arguments.length, _0x207ef9 = new Array(_0x3b6268), _0x3cb805 = 0; _0x3cb805 < _0x3b6268; _0x3cb805++) {
            _0x207ef9[_0x3cb805] = arguments[_0x3cb805];
          }
          _0x4f841b(_0x28fe74 = _0xfff81e.call.apply(_0xfff81e, [this].concat(_0x207ef9)) || this, "m_slotReels", _0x272320, _0x2fdb02(_0x28fe74));
          _0x4f841b(_0x28fe74, "m_effectNode", _0x9c8d1c, _0x2fdb02(_0x28fe74));
          _0x4f841b(_0x28fe74, "m_nearWinEffect_L", _0x30e4ef, _0x2fdb02(_0x28fe74));
          _0x4f841b(_0x28fe74, "m_nearWinEffect_S", _0x4d519c, _0x2fdb02(_0x28fe74));
          _0x4f841b(_0x28fe74, "m_symbolEffectPrefabs", _0x3af237, _0x2fdb02(_0x28fe74));
          _0x28fe74.m_gameView = null;
          _0x28fe74.m_awardSkes = [];
          _0x28fe74.m_hideNodes = [];
          _0x28fe74.m_isNearWin = false;
          return _0x28fe74;
        }
        _0x567cf6(_0x319251, _0xfff81e);
        var _0x123a3e = _0x319251.prototype;
        _0x123a3e.start = function () {};
        _0x123a3e.RefreshView = function () {
          var _0x1f62aa = this.m_gameView.IsLandscape;
          this.m_isNearWin && (this.m_nearWinEffect_L.node.active = _0x1f62aa, this.m_nearWinEffect_S.node.active = !_0x1f62aa);
        };
        _0x123a3e.onDestroy = function () {
          _0x125ae8.GetInstance().Destory();
        };
        _0x123a3e.Init = function (_0x7b5ed0) {
          this.m_gameView = _0x7b5ed0;
          _0x125ae8.GetInstance().SetEffectPrefabs(this.m_symbolEffectPrefabs);
        };
        _0x123a3e.SetNearWin = function (_0x309211, _0x5736bc) {
          if (this.m_isNearWin = _0x309211, this.m_isNearWin) {
            for (var _0x34af6d = this.m_slotReels.PlateInfo, _0x972a0d = 0; _0x972a0d < _0x34af6d.length - 1; _0x972a0d++) {
              for (var _0x29dc39 = 0; _0x29dc39 < _0x34af6d[_0x972a0d].length; _0x29dc39++) {
                var _0x2b3a7d = _0x34af6d[_0x972a0d][_0x29dc39];
                _0x2b3a7d.IsBonus && this.GenPlateNode(_0x2b3a7d, _0x972a0d, _0x29dc39);
              }
            }
            this.m_awardSkes.forEach(function (_0x1100b1) {
              _0x1100b1.PlayAnimation(_0xc63e78.Anim.NearWin, true);
            });
          } else {
            this.CleanAward();
          }
          this.ShowNearWinAnim(_0x309211, _0x5736bc);
        };
        _0x123a3e.ShowNearWinAnim = function (_0x14d276, _0x1cbd1a) {
          var _0x5837d4 = _0x1cbd1a ? this.m_nearWinEffect_L : this.m_nearWinEffect_S;
          _0x14d276 ? (_0x5837d4.node.active = _0x14d276, _0x5837d4.FadeIn()) : _0x5837d4.FadeOut().then(function () {
            _0x5837d4.node.active = _0x14d276;
          });
        };
        _0x123a3e.GenAwardNode = function (_0x2f37a6) {
          for (var _0x1bbad8 = 0; _0x1bbad8 < _0x2f37a6.length; _0x1bbad8++) {
            var _0x32438b = _0x2f37a6[_0x1bbad8];
            var _0x124d5a = _0x125ae8.GetInstance().GetEffectNode(_0x32438b);
            var _0x13b65b = this.m_slotReels.GetSymbolByServer(_0x32438b.Col, _0x32438b.Row);
            _0x13b65b.active = false;
            this.m_hideNodes.push(_0x13b65b);
            _0x124d5a.EftNode.position = _0x13b65b.position;
            _0x124d5a.EftNode.setScale(_0x13b65b.scale);
            this.m_effectNode.addChild(_0x124d5a.EftNode);
            this.m_awardSkes.push(_0x124d5a);
          }
        };
        _0x123a3e.GenPlateNode = function (_0x468606, _0x200c33, _0x2980d3) {
          if (_0x468606.SymbolID != _0x883e10.Symbol.Empty) {
            var _0x4a512d = _0x125ae8.GetInstance().GetEffectNode(_0x468606);
            var _0x42d878 = this.m_slotReels.GetSymbol(_0x200c33, _0x2980d3);
            _0x42d878.active = false;
            this.m_hideNodes.push(_0x42d878);
            _0x4a512d.EftNode.position = _0x42d878.position;
            _0x4a512d.EftNode.setScale(_0x42d878.scale);
            this.m_effectNode.addChild(_0x4a512d.EftNode);
            this.m_awardSkes.push(_0x4a512d);
          }
        };
        _0x123a3e.PlayWildAnim = function () {
          var _0x5a68e2 = _0x12d1c6(_0x41e40d().mark(function _0x22c3db() {
            var _0x565c20;
            var _0xb6e3a5;
            return _0x41e40d().wrap(function (_0x5174c8) {
              for (;;) {
                switch (_0x5174c8.prev = _0x5174c8.next) {
                  case 0:
                    _0x565c20 = this.m_awardSkes.filter(function (_0x74acf3) {
                      return _0x74acf3.SymbolData.IsWild;
                    });
                    _0xb6e3a5 = 0;
                  case 2:
                    if (!(_0xb6e3a5 < _0x565c20.length)) {
                      _0x5174c8.next = 18;
                      break;
                    }
                    _0x5174c8.t0 = _0xb6e3a5;
                    _0x5174c8.next = 0 === _0x5174c8.t0 ? 6 : 1 === _0x5174c8.t0 ? 8 : 2 === _0x5174c8.t0 ? 10 : 12;
                    break;
                  case 6:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Wild_Multiple_01);
                    return _0x5174c8.abrupt("break", 13);
                  case 8:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Wild_Multiple_02);
                    return _0x5174c8.abrupt("break", 13);
                  case 10:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Wild_Multiple_03);
                    return _0x5174c8.abrupt("break", 13);
                  case 12:
                    return _0x5174c8.abrupt("break", 13);
                  case 13:
                    _0x5174c8.next = 15;
                    return _0x565c20[_0xb6e3a5].PlayAnimation(_0xc63e78.Anim.Win, false);
                  case 15:
                    _0xb6e3a5++;
                    _0x5174c8.next = 2;
                    break;
                  case 18:
                  case "end":
                    return _0x5174c8.stop();
                }
              }
            }, _0x22c3db, this);
          }));
          return function () {
            return _0x5a68e2.apply(this, arguments);
          };
        }();
        _0x123a3e.PlayBGBonus = function () {
          var _0x4fa59f = _0x12d1c6(_0x41e40d().mark(function _0x5bbbc9(_0xfc9498) {
            var _0x2a36ed;
            return _0x41e40d().wrap(function (_0x2e8918) {
              for (;;) {
                switch (_0x2e8918.prev = _0x2e8918.next) {
                  case 0:
                    _0x2a36ed = this.m_awardSkes.find(function (_0x141161) {
                      return _0x141161.SymbolData == _0xfc9498;
                    });
                    _0x2e8918.next = 3;
                    return _0x2a36ed.PlayAnimation(_0xc63e78.Anim.Win, false);
                  case 3:
                  case "end":
                    return _0x2e8918.stop();
                }
              }
            }, _0x5bbbc9, this);
          }));
          return function (_0x54808b) {
            return _0x4fa59f.apply(this, arguments);
          };
        }();
        _0x123a3e.PlayLockBonus = function () {
          var _0x2de00b = _0x12d1c6(_0x41e40d().mark(function _0x49a874(_0x3212c1) {
            var _0x31f723;
            return _0x41e40d().wrap(function (_0x498b5f) {
              for (;;) {
                switch (_0x498b5f.prev = _0x498b5f.next) {
                  case 0:
                    _0x31f723 = this.m_awardSkes.find(function (_0x35d401) {
                      return _0x35d401.SymbolData == _0x3212c1;
                    });
                    _0x498b5f.next = 3;
                    return _0x31f723.PlayAnimation(_0xc63e78.Anim.Win, false);
                  case 3:
                    _0x31f723.PlayAnimation(_0xc63e78.Anim.Idle_Open, false);
                  case 4:
                  case "end":
                    return _0x498b5f.stop();
                }
              }
            }, _0x49a874, this);
          }));
          return function (_0xa50ea6) {
            return _0x2de00b.apply(this, arguments);
          };
        }();
        _0x123a3e.PlayKeyBonus = function () {
          var _0x5ba670 = _0x12d1c6(_0x41e40d().mark(function _0x338476(_0xfa302c) {
            var _0x503bf1;
            return _0x41e40d().wrap(function (_0x30f059) {
              for (;;) {
                switch (_0x30f059.prev = _0x30f059.next) {
                  case 0:
                    _0x503bf1 = this.m_awardSkes.find(function (_0x48203) {
                      return _0x48203.SymbolData == _0xfa302c;
                    });
                    _0x30f059.next = 3;
                    return _0x503bf1.PlayAnimation(_0xc63e78.Anim.Win, false);
                  case 3:
                    _0x503bf1.PlayAnimation(_0xc63e78.Anim.Idle_Open, false);
                  case 4:
                  case "end":
                    return _0x30f059.stop();
                }
              }
            }, _0x338476, this);
          }));
          return function (_0x2a3de6) {
            return _0x5ba670.apply(this, arguments);
          };
        }();
        _0x123a3e.ShowAward = function () {
          var _0x3352e1 = _0x12d1c6(_0x41e40d().mark(function _0xa7f8a3() {
            var _0x4a2b6d;
            return _0x41e40d().wrap(function (_0x5a4933) {
              for (;;) {
                switch (_0x5a4933.prev = _0x5a4933.next) {
                  case 0:
                    _0x4a2b6d = [];
                    this.m_awardSkes.forEach(function (_0x4bc52f) {
                      _0x4a2b6d.push(_0x4bc52f.PlayAnimation(_0xc63e78.Anim.Win_Loop, true));
                    });
                    _0x5a4933.next = 4;
                    return Promise.all(_0x4a2b6d);
                  case 4:
                  case "end":
                    return _0x5a4933.stop();
                }
              }
            }, _0xa7f8a3, this);
          }));
          return function () {
            return _0x3352e1.apply(this, arguments);
          };
        }();
        _0x123a3e.AwardBonus = function () {
          var _0x1b04b8 = _0x12d1c6(_0x41e40d().mark(function _0x3018ce() {
            var _0x3e9b2f;
            var _0x1fcf78 = this;
            return _0x41e40d().wrap(function (_0x17c33a) {
              for (;;) {
                switch (_0x17c33a.prev = _0x17c33a.next) {
                  case 0:
                    _0x3e9b2f = [];
                    this.m_awardSkes.forEach(function (_0x532fd8) {
                      _0x3e9b2f.push(_0x1fcf78.PlayBonusWin(_0x532fd8));
                    });
                    _0x17c33a.next = 4;
                    return Promise.all(_0x3e9b2f);
                  case 4:
                  case "end":
                    return _0x17c33a.stop();
                }
              }
            }, _0x3018ce, this);
          }));
          return function () {
            return _0x1b04b8.apply(this, arguments);
          };
        }();
        _0x123a3e.ChangeSymbolGray = function () {
          var _0x54d128 = _0x12d1c6(_0x41e40d().mark(function _0x594b50() {
            var _0x46b033 = this;
            return _0x41e40d().wrap(function (_0x2acfae) {
              for (;;) {
                switch (_0x2acfae.prev = _0x2acfae.next) {
                  case 0:
                    this.m_slotReels.PlateInfo.forEach(function (_0x217ab2, _0x4b71b4) {
                      _0x217ab2.forEach(function (_0x40c523, _0x305a6e) {
                        _0x40c523.IsConvertGray && _0x46b033.GenPlateNode(_0x40c523, _0x4b71b4, _0x305a6e);
                      });
                    });
                    _0x2acfae.next = 4;
                    return this.PlaySymbolTurnGray();
                  case 4:
                    this.m_slotReels.ChangeGraySymbol();
                  case 5:
                  case "end":
                    return _0x2acfae.stop();
                }
              }
            }, _0x594b50, this);
          }));
          return function () {
            return _0x54d128.apply(this, arguments);
          };
        }();
        _0x123a3e.ChangeSymbolNormal = function () {
          var _0x3f360d = _0x12d1c6(_0x41e40d().mark(function _0x537391() {
            var _0x2dad67 = this;
            return _0x41e40d().wrap(function (_0x3b9819) {
              for (;;) {
                switch (_0x3b9819.prev = _0x3b9819.next) {
                  case 0:
                    this.m_slotReels.PlateInfo.forEach(function (_0x863e87, _0x33e3e8) {
                      _0x863e87.forEach(function (_0x27d719, _0x56ab65) {
                        _0x27d719.IsConvertGray && _0x2dad67.GenPlateNode(_0x27d719, _0x33e3e8, _0x56ab65);
                      });
                    });
                    _0x3b9819.next = 4;
                    return this.PlaySymbolTurnNormal();
                  case 4:
                    this.m_slotReels.ChangeNormalSymbol();
                  case 5:
                  case "end":
                    return _0x3b9819.stop();
                }
              }
            }, _0x537391, this);
          }));
          return function () {
            return _0x3f360d.apply(this, arguments);
          };
        }();
        _0x123a3e.PlaySymbolTurnGray = function () {
          var _0x1ca334 = _0x12d1c6(_0x41e40d().mark(function _0x3dda12() {
            var _0x2961d3;
            return _0x41e40d().wrap(function (_0x2d459b) {
              for (;;) {
                switch (_0x2d459b.prev = _0x2d459b.next) {
                  case 0:
                    _0x2961d3 = [];
                    this.m_awardSkes.forEach(function (_0x4736c0) {
                      _0x4736c0.SymbolData.IsConvertGray && _0x2961d3.push(_0x4736c0.PlayAnimation(_0xc63e78.Anim.Close, false));
                    });
                    _0x2d459b.next = 4;
                    return Promise.all(_0x2961d3);
                  case 4:
                  case "end":
                    return _0x2d459b.stop();
                }
              }
            }, _0x3dda12, this);
          }));
          return function () {
            return _0x1ca334.apply(this, arguments);
          };
        }();
        _0x123a3e.PlaySymbolTurnNormal = function () {
          var _0x191048 = _0x12d1c6(_0x41e40d().mark(function _0x3020b2() {
            var _0x2cd4d4;
            return _0x41e40d().wrap(function (_0x2bad21) {
              for (;;) {
                switch (_0x2bad21.prev = _0x2bad21.next) {
                  case 0:
                    _0x2cd4d4 = [];
                    this.m_awardSkes.forEach(function (_0x18f360) {
                      _0x18f360.SymbolData.IsConvertGray && _0x2cd4d4.push(_0x18f360.PlayAnimation(_0xc63e78.Anim.Open, false));
                    });
                    _0x2bad21.next = 4;
                    return Promise.all(_0x2cd4d4);
                  case 4:
                  case "end":
                    return _0x2bad21.stop();
                }
              }
            }, _0x3020b2, this);
          }));
          return function () {
            return _0x191048.apply(this, arguments);
          };
        }();
        _0x123a3e.PlayBonusWin = function () {
          var _0x2842d4 = _0x12d1c6(_0x41e40d().mark(function _0x32fea8(_0x2cc726) {
            return _0x41e40d().wrap(function (_0x179cc5) {
              for (;;) {
                switch (_0x179cc5.prev = _0x179cc5.next) {
                  case 0:
                    _0x179cc5.next = 2;
                    return _0x2cc726.PlayAnimation(_0xc63e78.Anim.Win, false);
                  case 2:
                    _0x179cc5.next = 4;
                    return _0x2cc726.PlayAnimation(_0xc63e78.Anim.Win_Loop, false);
                  case 4:
                  case "end":
                    return _0x179cc5.stop();
                }
              }
            }, _0x32fea8);
          }));
          return function (_0x17683e) {
            return _0x2842d4.apply(this, arguments);
          };
        }();
        _0x123a3e.CleanAward = function () {
          this.m_awardSkes.forEach(function (_0x54d5a2) {
            _0x125ae8.GetInstance().ReturnEffect(_0x54d5a2);
          });
          this.m_hideNodes.forEach(function (_0x2423cb) {
            _0x2423cb.active = true;
          });
          this.m_awardSkes = [];
          this.m_hideNodes = [];
        };
        return _0x319251;
      }(_0x5aac4b), _0x272320 = _0x5a72b5(_0x165dad.prototype, "m_slotReels", [_0x56a05e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x9c8d1c = _0x5a72b5(_0x165dad.prototype, "m_effectNode", [_0x4869cb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x30e4ef = _0x5a72b5(_0x165dad.prototype, "m_nearWinEffect_L", [_0x24ac68], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4d519c = _0x5a72b5(_0x165dad.prototype, "m_nearWinEffect_S", [_0x1f7bd0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3af237 = _0x5a72b5(_0x165dad.prototype, "m_symbolEffectPrefabs", [_0x23df67], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x5a5036 = _0x165dad)) || _0x5a5036;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "d2d4dktYYpN4Zbdsm3ZB4Xm", "FeatureAck", undefined);
      var _0x10852c = function () {};
      _0x10852c.MGSpinAck = {
        RoundQueue: [{
          Symbol: [{
            Row: [0, 7, 0]
          }, {
            Row: [0, 7, 0]
          }, {
            Row: [0, 7, 0]
          }],
          BonusLock: [false, false, false],
          BonusMul: [0, 0, 0],
          BonusNowMul: [0, 0, 0],
          Mult: 125,
          RoundWin: 625,
          IsMain: true
        }],
        TotalWin: 625,
        RTP: 0.97
      };
      _0x10852c.BGSpinAck = {
        RoundQueue: [{
          Symbol: [{
            Row: [0, 8, 0]
          }, {
            Row: [0, 8, 0]
          }, {
            Row: [0, 8, 0]
          }],
          BonusLock: [false, false, false],
          BonusMul: [1, 1, 1],
          BonusNowMul: [0, 0, 0],
          Mult: 1,
          GetBonus: true,
          AwardTypeFlag: 2,
          IsMain: true
        }, {
          Symbol: [{
            Row: [1, 0, 3]
          }, {
            Row: [1, 0, 4]
          }, {
            Row: [0, 9, 0]
          }],
          BonusLock: [false, false, false],
          BonusMul: [1, 1, 2],
          BonusNowMul: [0, 0, 1],
          BonusRound: 1,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [0, 9, 0]
          }, {
            Row: [3, 0, 4]
          }, {
            Row: [3, 0, 4]
          }],
          BonusLock: [false, false, false],
          BonusMul: [9, 1, 2],
          BonusNowMul: [8, 0, 0],
          BonusRound: 2,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [0, 4, 0]
          }, {
            Row: [3, 0, 3]
          }, {
            Row: [1, 0, 11]
          }],
          BonusLock: [false, false, false],
          BonusMul: [17, 9, 10],
          BonusNowMul: [0, 0, 8],
          BonusRound: 3,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [2, 0, 3]
          }, {
            Row: [0, 10, 0]
          }, {
            Row: [0, 1, 0]
          }],
          BonusLock: [false, false, false],
          BonusMul: [17, 27, 10],
          BonusNowMul: [0, 3, 0],
          BonusRound: 4,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [0, 11, 0]
          }, {
            Row: [11, 0, 4]
          }, {
            Row: [3, 0, 10]
          }],
          BonusLock: [false, false, false],
          BonusMul: [23, 33, 48],
          BonusNowMul: [1, 5, 3],
          BonusRound: 5,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [1, 0, 1]
          }, {
            Row: [4, 0, 1]
          }, {
            Row: [0, 13, 0]
          }],
          BonusLock: [false, false, true],
          BonusMul: [23, 33, 48],
          BonusNowMul: [0, 0, 0],
          BonusRound: 6,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [0, 1, 0]
          }, {
            Row: [0, 3, 0]
          }, {
            Row: [3, 0, 1]
          }],
          BonusLock: [false, false, true],
          BonusMul: [23, 33, 48],
          BonusNowMul: [0, 0, 0],
          BonusRound: 7,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [0, 13, 0]
          }, {
            Row: [0, 9, 0]
          }, {
            Row: [4, 0, 9]
          }],
          BonusLock: [true, false, true],
          BonusMul: [23, 35, 48],
          BonusNowMul: [0, 2, 0],
          BonusRound: 8,
          AwardTypeFlag: 4,
          ReelType: 1
        }, {
          Symbol: [{
            Row: [4, 0, 1]
          }, {
            Row: [0, 13, 0]
          }, {
            Row: [11, 0, 4]
          }],
          BonusLock: [true, true, true],
          BonusMul: [23, 35, 48],
          BonusNowMul: [0, 0, 0],
          Mult: 106,
          RoundWin: 106,
          BonusRound: 9,
          AwardTypeFlag: 12,
          ReelType: 1
        }],
        BonusTotalWin: 106,
        BonusType: 1,
        TotalWin: 106,
        RTP: 0.97
      };
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "b9d9f83bdhCDre9GUTlMCVZ", "AwardState", undefined);
      var _0x3ee6e8 = function (_0x220337) {
        function _0x789093(_0x2482c0) {
          var _0xe116a1;
          (_0xe116a1 = _0x220337.call(this) || this).m_gameView = null;
          _0xe116a1.m_gameView = _0x2482c0;
          return _0xe116a1;
        }
        _0x567cf6(_0x789093, _0x220337);
        var _0x300fbb = _0x789093.prototype;
        _0x300fbb.OnEnter = function () {
          var _0x4498a8 = _0x12d1c6(_0x41e40d().mark(function _0xa0ff3d() {
            var _0x5b734a;
            var _0x16b2f3;
            var _0x2d5941;
            var _0x969067;
            var _0x776da7 = this;
            return _0x41e40d().wrap(function (_0x1dfaca) {
              for (;;) {
                switch (_0x1dfaca.prev = _0x1dfaca.next) {
                  case 0:
                    if (_0xb9245("[State]", this.constructor.name), _0x5b734a = this.m_gameView.RoundInfo, _0x16b2f3 = _0x5b734a.RoundWin, _0x2d5941 = this.m_gameView.BigWin.CheckAward(_0x16b2f3, _0x311069.GetNowBetValue()), _0x969067 = _0x2d5941 > _0x2f9485.Level.NONE, this.m_gameView.HasBG || this.m_gameView.BackgroundView.PlayMGOpen(), !(_0x16b2f3 > 0)) {
                      _0x1dfaca.next = 21;
                      break;
                    }
                    if (!_0x969067) {
                      _0x1dfaca.next = 15;
                      break;
                    }
                    _0x1dfaca.next = 10;
                    return this.m_gameView.MGAward(_0x5b734a);
                  case 10:
                    _0x311069.SetSpinState(_0x33e9ab.GET_AWARD_NO_AUTO);
                    this.m_gameView.PauseBGM();
                    this.m_gameView.BigWin.Show(_0x16b2f3, _0x2d5941, function () {
                      _0x776da7.m_gameView.ResumeBGM();
                      _0x776da7.m_gameView.SetBarStateAfterBigWinEnd();
                      _0x311069.SetWinValue(_0x16b2f3);
                      _0x776da7.m_gameView.ChangeState();
                    });
                    _0x1dfaca.next = 19;
                    break;
                  case 15:
                    _0x311069.SetWinValue(_0x16b2f3);
                    _0x1dfaca.next = 18;
                    return this.m_gameView.MGAward(_0x5b734a);
                  case 18:
                    this.m_gameView.ChangeState();
                  case 19:
                    _0x1dfaca.next = 22;
                    break;
                  case 21:
                    this.m_gameView.ChangeState();
                  case 22:
                  case "end":
                    return _0x1dfaca.stop();
                }
              }
            }, _0xa0ff3d, this);
          }));
          return function () {
            return _0x4498a8.apply(this, arguments);
          };
        }();
        _0x300fbb.OnProcess = function () {};
        _0x300fbb.OnLeave = function () {};
        return _0x789093;
      }(_0x254a20);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "9ddbbirP5pAvZBNnNkQq8Om", "BonusAwardState", undefined);
      var _0x2caced = function (_0x8dd11e) {
        function _0x28eb75(_0x5f5bfc) {
          var _0x515dd1;
          (_0x515dd1 = _0x8dd11e.call(this) || this).m_gameView = null;
          _0x515dd1.m_gameView = _0x5f5bfc;
          return _0x515dd1;
        }
        _0x567cf6(_0x28eb75, _0x8dd11e);
        var _0x484154 = _0x28eb75.prototype;
        _0x484154.OnEnter = function () {
          var _0x59746d = _0x12d1c6(_0x41e40d().mark(function _0x2db8d7() {
            var _0x1f1787;
            var _0x4e6291;
            return _0x41e40d().wrap(function (_0x51e791) {
              for (;;) {
                switch (_0x51e791.prev = _0x51e791.next) {
                  case 0:
                    if (_0xb9245("[State]", this.constructor.name), _0x1f1787 = this.m_gameView.RoundInfo, _0x4e6291 = this.m_gameView.SpinAck_refactor.RoundQueue[this.m_gameView.PlateIndex], !_0x1f1787.HasBGShow) {
                      _0x51e791.next = 9;
                      break;
                    }
                    _0x51e791.next = 6;
                    return this.m_gameView.BGAward(_0x1f1787);
                  case 6:
                    _0x4e6291.MaxFlag ? _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.MSGBOX_MAX_REWARD, _0xc8ef61.StringKey.MSGBOX_TITLE_SYSTEM_INFO, function () {
                      _0x57d1f9.NextState(_0x883e10.GameState.ROUND_SHOW_END);
                    }) : _0x57d1f9.NextState(_0x883e10.GameState.ROUND_SHOW_END);
                    _0x51e791.next = 10;
                    break;
                  case 9:
                    _0x57d1f9.NextState(_0x883e10.GameState.ROUND_SHOW_END);
                  case 10:
                  case "end":
                    return _0x51e791.stop();
                }
              }
            }, _0x2db8d7, this);
          }));
          return function () {
            return _0x59746d.apply(this, arguments);
          };
        }();
        _0x484154.OnProcess = function () {};
        _0x484154.OnLeave = function () {};
        return _0x28eb75;
      }(_0x254a20);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "38981/ivi5F+4Zfwd5ou0q2", "BonusEnterState", undefined);
      var _0xb7581d = function (_0x300d9c) {
        function _0x338130(_0x1367a6) {
          var _0x10ca49;
          (_0x10ca49 = _0x300d9c.call(this) || this).m_gameView = null;
          _0x10ca49.m_gameView = _0x1367a6;
          return _0x10ca49;
        }
        _0x567cf6(_0x338130, _0x300d9c);
        var _0x204020 = _0x338130.prototype;
        _0x204020.OnEnter = function () {
          var _0x4fe193 = _0x12d1c6(_0x41e40d().mark(function _0x346b96() {
            var _0x2a15d6;
            var _0x506b05;
            var _0x3bdd25;
            var _0x5a9040 = this;
            return _0x41e40d().wrap(function (_0x321f59) {
              for (;;) {
                switch (_0x321f59.prev = _0x321f59.next) {
                  case 0:
                    _0xb9245("[State]", this.constructor.name);
                    _0x311069.SetEnterFree();
                    _0x311069.LockBetEnable(true);
                    this.m_gameView.StopBGM();
                    _0x2a15d6 = this.m_gameView.RoundInfo;
                    _0x321f59.next = 7;
                    return _0xc8ef61.Wait(this.m_gameView, 0.5);
                  case 7:
                    _0x23cbbd.Play(_0x883e10.AudioClips.BonusWin);
                    this.m_gameView.EffectPlate.GenAwardNode(_0x2a15d6.BonusSymbols);
                    _0x321f59.next = 11;
                    return this.m_gameView.EffectPlate.AwardBonus();
                  case 11:
                    this.m_gameView.EffectPlate.CleanAward();
                    this.m_gameView.LockRotation();
                    this.m_gameView.IsLandscape && _0x311069.SetBarNodeVisiable(false);
                    _0x23cbbd.Play(_0x883e10.AudioClips.BGM_BG_Appear);
                    _0x506b05 = function () {
                      _0x5a9040.m_gameView.MachineView.InitBGView();
                    };
                    _0x321f59.next = 18;
                    return this.m_gameView.BackgroundView.ShowDeclare(_0x506b05);
                  case 18:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Door_Open);
                    _0x3bdd25 = this.m_gameView.BackgroundView.PlayBGIntro();
                    0.5;
                    _0x321f59.next = 23;
                    return _0xc8ef61.Wait(this.m_gameView, 0.5);
                  case 23:
                    this.m_gameView.IsInBG = true;
                    this.m_gameView.PlayBGM();
                    this.m_gameView.MachineView.PlayStart();
                    _0x321f59.next = 28;
                    return Promise.resolve(_0x3bdd25);
                  case 28:
                    this.m_gameView.IsLandscape && _0x311069.SetBarNodeVisiable(true, 0.5);
                    this.m_gameView.ResumeRotation();
                    _0x321f59.next = 32;
                    return this.m_gameView.EffectPlate.ChangeSymbolGray();
                  case 32:
                    _0x321f59.next = 34;
                    return this.m_gameView.MachineView.Intro(_0x2a15d6.BonusMul);
                  case 34:
                    this.m_gameView.AutoplayInfos && this.m_gameView.AutoplayInfos.isCheckFree && _0x311069.ShowAutoPlayState(false);
                    this.m_gameView.ChangeState();
                  case 36:
                  case "end":
                    return _0x321f59.stop();
                }
              }
            }, _0x346b96, this);
          }));
          return function () {
            return _0x4fe193.apply(this, arguments);
          };
        }();
        _0x204020.OnProcess = function () {};
        _0x204020.OnLeave = function () {};
        return _0x338130;
      }(_0x254a20);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "9f172KjygFALJTIGQxAci6v", "BonusLeaveState", undefined);
      var _0x5bf44d = function (_0x470036) {
        function _0x3fadc0(_0x778035) {
          var _0x1d227e;
          (_0x1d227e = _0x470036.call(this) || this).m_gameView = null;
          _0x1d227e.m_gameView = _0x778035;
          return _0x1d227e;
        }
        _0x567cf6(_0x3fadc0, _0x470036);
        var _0x28581f = _0x3fadc0.prototype;
        _0x28581f.OnEnter = function () {
          var _0x594ca0 = _0x12d1c6(_0x41e40d().mark(function _0x395a9b() {
            return _0x41e40d().wrap(function (_0x443f99) {
              for (;;) {
                switch (_0x443f99.prev = _0x443f99.next) {
                  case 0:
                    _0xb9245("[State]", this.constructor.name);
                    this.m_gameView.RoundInfo;
                    this.m_gameView.LockRotation();
                    _0x311069.SetWinValue(this.m_gameView.SpinAck.TotalWin);
                    _0x443f99.next = 6;
                    return this.m_gameView.BackgroundView.ShowCompliment(this.m_gameView.SpinAck_refactor.TotalWin, this.m_gameView.SpinAck_refactor.RoundQueue.length - 1);
                  case 6:
                    this.m_gameView.IsInBG = false;
                    this.m_gameView.MachineView.InitMGView();
                    _0x23cbbd.Play(_0x883e10.AudioClips.Door_Close);
                    _0x311069.SetBarNodeVisiable(false);
                    _0x443f99.next = 12;
                    return this.m_gameView.BackgroundView.PlayBGExit();
                  case 12:
                    this.m_gameView.PlayBGM();
                    _0x311069.SetBarNodeVisiable(true, 0.5);
                    this.m_gameView.ResumeRotation();
                    _0x443f99.next = 17;
                    return this.m_gameView.EffectPlate.ChangeSymbolNormal();
                  case 17:
                    _0x311069.SetLeaveFree();
                    this.m_gameView.ChangeState();
                  case 19:
                  case "end":
                    return _0x443f99.stop();
                }
              }
            }, _0x395a9b, this);
          }));
          return function () {
            return _0x594ca0.apply(this, arguments);
          };
        }();
        _0x28581f.OnProcess = function () {};
        _0x28581f.OnLeave = function () {};
        return _0x3fadc0;
      }(_0x254a20);
      var _0x136d8c;
      var _0x24502a;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "4402ffOxEZKCJxcyd2qtmJO", "CheckState", undefined);
      var _0x179617 = _0x42d118.ccclass;
      _0x136d8c = _0x179617("CheckState");
      var _0x7d10c = _0x136d8c(_0x24502a = function (_0x2df820) {
        function _0x4153ad(_0x3b4853) {
          var _0x31ad44;
          (_0x31ad44 = _0x2df820.call(this) || this).m_gameView = null;
          _0x31ad44.m_gameView = _0x3b4853;
          return _0x31ad44;
        }
        _0x567cf6(_0x4153ad, _0x2df820);
        var _0x205146 = _0x4153ad.prototype;
        _0x205146.OnEnter = function () {
          _0xb9245("[State]", this.constructor.name);
          this.m_gameView.HasBG && !this.m_gameView.IsInBG ? _0x57d1f9.NextState(_0x883e10.GameState.BONUS_ENTER) : this.m_gameView.IsInBG && this.m_gameView.IsLastPlate ? _0x57d1f9.NextState(_0x883e10.GameState.BONUS_LEAVE) : _0x57d1f9.NextState(_0x883e10.GameState.ROUND_END);
        };
        _0x205146.OnProcess = function () {};
        _0x205146.OnLeave = function () {};
        return _0x4153ad;
      }(_0x254a20)) || _0x24502a;
      var _0x5ea7b2;
      var _0x58ca1b;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "39776LmhKNPjY+T9v/9PA/7", "FeatureShowState", undefined);
      var _0x242c7f = _0x42d118.ccclass;
      _0x5ea7b2 = _0x242c7f("FeatureShowState");
      var _0x1e1373 = _0x5ea7b2(_0x58ca1b = function (_0xa33007) {
        function _0x298c2a(_0x598344) {
          var _0x3d0f09;
          (_0x3d0f09 = _0xa33007.call(this) || this).m_gameView = null;
          _0x3d0f09.m_gameView = _0x598344;
          return _0x3d0f09;
        }
        _0x567cf6(_0x298c2a, _0xa33007);
        var _0x4c2d00 = _0x298c2a.prototype;
        _0x4c2d00.OnEnter = function () {
          _0xb9245("[State]", this.constructor.name);
          this.m_gameView.IsAutoShowFeatures = true;
          _0x311069.CanPlayFeaturesDemo(true);
          _0x311069.SetBarNodeVisiable(true);
          this.m_gameView.BackgroundView.FadeInLogo();
          this.m_gameView.BackgroundView.FadeInManual();
          this.m_gameView.ResumeFocusBGM();
          _0x2fd06d.AutoShowFeatures();
        };
        _0x4c2d00.OnProcess = function () {};
        _0x4c2d00.OnLeave = function () {};
        return _0x298c2a;
      }(_0x254a20)) || _0x58ca1b;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "f9852R4Hc9AJ7D9xsCCKBFW", "IdleState", undefined);
      var _0x5d1319 = function (_0x2637b2) {
        function _0x58a65f(_0x4f2b9c) {
          var _0x269d21;
          (_0x269d21 = _0x2637b2.call(this) || this).m_gameView = null;
          _0x269d21.m_gameView = _0x4f2b9c;
          return _0x269d21;
        }
        _0x567cf6(_0x58a65f, _0x2637b2);
        var _0x4b1364 = _0x58a65f.prototype;
        _0x4b1364.Enter = function () {
          _0xb9245("[State]", this.constructor.name);
        };
        _0x4b1364.Process = function () {};
        return _0x58a65f;
      }(_0x5759e4);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "5eba1WKf8JBapC1pzhO10Gd", "PlateShowState", undefined);
      var _0x36060c = function (_0x55ea02) {
        function _0x31cb89(_0x30ed12) {
          var _0x363c63;
          (_0x363c63 = _0x55ea02.call(this) || this).m_gameView = null;
          _0x363c63.m_gameView = _0x30ed12;
          return _0x363c63;
        }
        _0x567cf6(_0x31cb89, _0x55ea02);
        var _0x40f281 = _0x31cb89.prototype;
        _0x40f281.OnEnter = function () {
          var _0x696a43 = _0x12d1c6(_0x41e40d().mark(function _0x456c1d() {
            return _0x41e40d().wrap(function (_0x1a622f) {
              for (;;) {
                switch (_0x1a622f.prev = _0x1a622f.next) {
                  case 0:
                    if (_0xb9245("[State]", this.constructor.name), _0xc8ef61.LoadLite) {
                      _0x1a622f.next = 6;
                      break;
                    }
                    _0x23cbbd.Play(_0x883e10.AudioClips.Debut, false);
                    this.m_gameView.MachineView.PlayStart();
                    _0x1a622f.next = 6;
                    return this.m_gameView.BackgroundView.PlayIntro();
                  case 6:
                    this.m_gameView.MachineView.PlayIdle();
                    this.m_gameView.BackgroundView.FadeInLogo();
                    this.m_gameView.BackgroundView.FadeInManual();
                    this.m_gameView.BackgroundView.PlayMGIdle();
                    _0x311069.SetBarNodeVisiable(true, 0.5);
                    _0x311069.SetSpinState(_0x33e9ab.IDLE);
                    this.m_gameView.PlayBGM();
                    _0x23cbbd.SetMusicFadeIn(this.m_gameView.BgmId, 0.5);
                    _0xc8ef61.FreeSpinRemain > 0 ? _0x57d1f9.NextState(_0x4b430a.CHECK_FREESPIN) : _0x57d1f9.NextState(_0x4b430a.IDLE);
                    _0x1bfac4.StartAutoShow();
                  case 16:
                  case "end":
                    return _0x1a622f.stop();
                }
              }
            }, _0x456c1d, this);
          }));
          return function () {
            return _0x696a43.apply(this, arguments);
          };
        }();
        _0x40f281.OnProcess = function () {};
        _0x40f281.OnLeave = function () {};
        return _0x31cb89;
      }(_0x254a20);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "59d21RC7SRHnZ/8ppB/eBxx", "RoundEndState", undefined);
      var _0x17f9a8 = function (_0x1d301e) {
        function _0xd5fbce(_0x2f8531) {
          var _0x142b8f;
          (_0x142b8f = _0x1d301e.call(this) || this).m_gameView = null;
          _0x142b8f.m_processTick = 0;
          _0x142b8f.m_gameView = _0x2f8531;
          return _0x142b8f;
        }
        _0x567cf6(_0xd5fbce, _0x1d301e);
        var _0xf69eda = _0xd5fbce.prototype;
        _0xf69eda.OnEnter = function () {
          if (_0xb9245("[State]", this.constructor.name), this.m_gameView.CanSpaceStop = true, this.m_processTick = 0, this.m_gameView.RoundInfo.RoundWin || (this.m_processTick = 0.1), _0x311069.IsAutoSpin) {
            var _0x11e4ff = _0x81cc27.TempoSetting.Crazy777.IS_AUTO_OR_SPACE_DELAY_TIME;
            this.m_gameView.SpinAck.TotalWin > 0 && !this.m_gameView.IsInBG ? this.m_gameView.CanStopSpin ? this.m_processTick = _0x11e4ff.WIN_WITH_HARD_STOP : this.m_processTick = _0x11e4ff.WIN_WITHOUT_HARD_STOP : this.m_processTick = _0x11e4ff.NO_WIN;
          } else {
            var _0x44b371 = _0x81cc27.TempoSetting.Crazy777.NO_AUTO_OR_SPACE_DELAY_TIME;
            this.m_gameView.SpinAck.TotalWin > 0 && !this.m_gameView.IsInBG ? this.m_processTick = _0x44b371.WIN : this.m_processTick = _0x44b371.NO_WIN;
          }
          this.m_gameView.RetryRoundEnd();
        };
        _0xf69eda.OnProcess = function (_0x58cbcd) {
          this.m_processTick = _0x369abc.strip(this.m_processTick - _0x58cbcd);
          this.m_processTick <= 0 && _0x48da45.CanToNextRound() && (!_0xd71ac5.IsTwice || _0xd71ac5.IsTwice && _0xd71ac5.IsGetRoundEndAck) && (this.m_gameView.IsInBG ? _0x311069.IsAutoSpin || this.m_gameView.PlateIndex > 0 ? _0x57d1f9.NextState(_0x4b430a.SPIN) : _0x57d1f9.NextState(_0x4b430a.IDLE) : _0x57d1f9.NextState(_0x4b430a.END));
        };
        _0xf69eda.OnLeave = function () {};
        return _0xd5fbce;
      }(_0x254a20);
      var _0x143970;
      var _0x1485d4;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "d5a9c37yxBPMr7G9R8WyTan", "RoundShowEndState", undefined);
      var _0x3924b5 = _0x42d118.ccclass;
      _0x143970 = _0x3924b5("RoundShowEndState");
      var _0x4aadc9 = _0x143970(_0x1485d4 = function (_0xdad765) {
        function _0x1bc35d(_0x5450fc) {
          var _0x4fcdb7;
          (_0x4fcdb7 = _0xdad765.call(this) || this).m_gameView = null;
          _0x4fcdb7.m_gameView = _0x5450fc;
          return _0x4fcdb7;
        }
        _0x567cf6(_0x1bc35d, _0xdad765);
        var _0x8fdd8 = _0x1bc35d.prototype;
        _0x8fdd8.OnEnter = function () {
          _0xb9245("[State]", this.constructor.name);
          _0x57d1f9.NextState(_0x4b430a.COMMON_SHOW);
        };
        _0x8fdd8.OnProcess = function () {};
        _0x8fdd8.OnLeave = function () {};
        return _0x1bc35d;
      }(_0x254a20)) || _0x1485d4;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "a0fb8bF3rVA5oukLz+x6C7r", "SpinState", undefined);
      var _0x3c603d = function (_0x1b3cba) {
        function _0x4a59b6(_0x53fa57) {
          var _0x52a0ac;
          (_0x52a0ac = _0x1b3cba.call(this) || this).m_gameView = null;
          _0x52a0ac.m_gameView = _0x53fa57;
          return _0x52a0ac;
        }
        _0x567cf6(_0x4a59b6, _0x1b3cba);
        var _0x1bedaf = _0x4a59b6.prototype;
        _0x1bedaf.OnEnter = function () {
          _0xb9245("game state SPIN");
          _0x23cbbd.Play(_0x883e10.AudioClips.Reel_Spin);
          _0x48da45.StartSpin();
          this.m_gameView.SlotReels.StartSpin();
          this.m_gameView.IsInBG && this.m_gameView.SetPlateInfo();
          this.m_gameView.EffectPlate.CleanAward();
          this.m_gameView.PaytableView.StopAward();
          this.m_gameView.PaytableView.StopBetAnim();
          this.m_gameView.MachineView.Reset();
          _0xd71ac5.HasUnshow && (this.m_gameView.IsInBG || this.m_gameView.OnRecvSpinAck(), _0xd71ac5.HasUnshow = false);
        };
        _0x1bedaf.OnProcess = function (_0x41c327) {
          this.m_gameView.SlotReels.Spin(_0x41c327);
          this.m_gameView.SlotReels.IsPlateStop() && (_0x311069.IsAutoSpin || _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN), this.m_gameView.ChangeState());
        };
        _0x1bedaf.OnLeave = function () {
          var _0x97df30 = _0x12d1c6(_0x41e40d().mark(function _0x18f3fd() {
            return _0x41e40d().wrap(function (_0xd26b87) {
              for (;;) {
                switch (_0xd26b87.prev = _0xd26b87.next) {
                  case 0:
                  case "end":
                    return _0xd26b87.stop();
                }
              }
            }, _0x18f3fd);
          }));
          return function () {
            return _0x97df30.apply(this, arguments);
          };
        }();
        return _0x4a59b6;
      }(_0x254a20);
      var _0x151ddd;
      var _0x525527;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "d7391VFDIFGvKpihtCXfIWE", "UnshowPrepareState", undefined);
      var _0x3e7d98 = _0x42d118.ccclass;
      _0x151ddd = _0x3e7d98("UnshowPrepareState");
      var _0x43b60f = _0x151ddd(_0x525527 = function (_0x3f97fe) {
        function _0x9f29c(_0x3025a0) {
          var _0x198789;
          (_0x198789 = _0x3f97fe.call(this) || this).m_gameView = null;
          _0x198789.m_gameView = _0x3025a0;
          return _0x198789;
        }
        _0x567cf6(_0x9f29c, _0x3f97fe);
        var _0x2ab20a = _0x9f29c.prototype;
        _0x2ab20a.OnEnter = function () {
          if (_0xb9245("[State]", this.constructor.name), this.m_gameView.UnshowSpinAck) {
            _0x311069.SetBarNodeVisiable(true);
            _0x311069.SetNetBet(_0x311069.GetNowBetValue());
            var _0x269530 = _0xd71ac5.UnshowStartRound;
            if (this.m_gameView.SetUnShowSpinAck(_0x269530 - 1), _0x269530 >= 1) {
              this.m_gameView.IsInBG = true;
              var _0x5129f9 = this.m_gameView.RoundInfo;
              var _0x53ad37 = this.m_gameView.SpinAck.RoundInfo[_0x269530 - 1];
              this.m_gameView.SlotReels.SetPlateSymbol(_0x53ad37.PlateData);
              this.m_gameView.BackgroundView.RefreshView();
              this.m_gameView.MachineView.ResetBGView(_0x5129f9.BonusMul, _0x5129f9.BonusLock);
              var _0x43931a = this.m_gameView.SpinAck.GetAccumulatedWin(this.m_gameView.PlateIndex);
              _0x311069.SetWinValue(_0x43931a);
            }
            this.m_gameView.PlayBGM();
            _0x2fd06d.HasUnshow = false;
            _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.MSGBOX_UNSHOW_BACK, _0xc8ef61.StringKey.MSGBOX_TITLE_SYSTEM_INFO, function () {
              _0x57d1f9.NextState(_0x4b430a.SPIN);
            });
          } else {
            _0x3c3cbe("Info Error", _0xd71ac5.UnshowStartRound, this.m_gameView.UnshowSpinAck.RoundInfo);
          }
        };
        _0x2ab20a.OnProcess = function () {};
        _0x2ab20a.OnLeave = function () {};
        return _0x9f29c;
      }(_0x254a20)) || _0x525527;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "7a9d2OILf5NCYDdWZclvY5w", "WaitReadyState", undefined);
      var _0x3b852a = function (_0x3e0881) {
        function _0x87e8f3(_0x1abd37) {
          var _0x2e7af4;
          (_0x2e7af4 = _0x3e0881.call(this) || this).m_gameView = null;
          _0x2e7af4.m_gameView = _0x1abd37;
          return _0x2e7af4;
        }
        _0x567cf6(_0x87e8f3, _0x3e0881);
        var _0x54fb14 = _0x87e8f3.prototype;
        _0x54fb14.OnEnter = function () {
          _0xb9245("[State]", this.constructor.name);
          _0x311069.ShowGameScene();
          _0x311069.ShowPlayReady();
          _0x311069.SetBarNodeVisiable(false);
          this.m_gameView.BackgroundView.HideLogo();
          this.m_gameView.Manual.node.active = false;
          _0x1c9a9f.LoadingComplete();
          this.m_gameView.InitExtra();
        };
        _0x54fb14.OnProcess = function () {};
        _0x54fb14.OnLeave = function () {};
        return _0x87e8f3;
      }(_0x254a20);
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "cdb4diSctdK+bulOj7dYHLI", "WaitResState", undefined);
      var _0x3faa42 = function (_0x4b3e54) {
        function _0x16d5e8(_0xe19d2) {
          var _0x102ff8;
          (_0x102ff8 = _0x4b3e54.call(this) || this).m_gameView = null;
          _0x102ff8.m_gameView = _0xe19d2;
          return _0x102ff8;
        }
        _0x567cf6(_0x16d5e8, _0x4b3e54);
        var _0x2835cb = _0x16d5e8.prototype;
        _0x2835cb.OnEnter = function () {
          _0xb9245("[State]", this.constructor.name);
        };
        _0x2835cb.OnProcess = function () {
          _0x883e10.AudioClips.BGM_MG && _0x57d1f9.NextState(_0x883e10.GameState.WAIT_READY);
        };
        _0x2835cb.OnLeave = function () {};
        return _0x16d5e8;
      }(_0x254a20);
      function _0x55d63a() {
        _0xb1edc9();
        _0x5505f0();
        _0x57c2c5();
        _0x27230e();
        _0x47cd20();
        _0x1ba145();
        _0xbd08cb();
        _0x39f909();
        _0x1bc679();
        _0x13680a();
        _0x5007a8();
        _0x3d541c();
        _0x44e8f2();
        _0x3faf05();
        _0x4bada2();
        _0x42ca86();
        _0x34f51c();
        _0x5b0102();
        _0xca669e();
        _0x30b1ec();
        _0x46747c();
        _0x4c8b40();
        _0x3d88f7();
        _0x4b90b4();
        _0x1836d9();
        _0x4ffd83();
        _0x40d18c();
        _0x34d752();
        _0x1253ff();
        _0x119168();
      }
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "f34139liEtOX7eeljN8Cz8w", "index", undefined);
      _0xa10b8c._RF.pop();
      var _0x1c6984 = function () {
        function _0x161ef0() {
          this._registry = {};
          this._moduleCache = {};
        }
        var _0x39b5c9 = _0x161ef0.prototype;
        _0x39b5c9.define = function (_0x5af01a, _0x983271, _0x46dc6b) {
          this._registry[_0x5af01a] = {
            factory: _0x983271,
            resolveMap: _0x46dc6b
          };
        };
        _0x39b5c9.require = function (_0x1bb1fa) {
          return this._require(_0x1bb1fa);
        };
        _0x39b5c9.throwInvalidWrapper = function (_0x320be8, _0x4183f2) {
          throw new Error("Module '" + _0x320be8 + "' imported from '" + _0x4183f2 + "' is expected be an ESM-wrapped CommonJS module but it doesn't.");
        };
        _0x39b5c9._require = function (_0x435e31, _0x10dccf) {
          var _0x1948e5 = this._moduleCache[_0x435e31];
          if (_0x1948e5) {
            return _0x1948e5.exports;
          }
          var _0x2a46a7 = {
            id: _0x435e31,
            exports: {}
          };
          this._moduleCache[_0x435e31] = _0x2a46a7;
          this._tryModuleLoad(_0x2a46a7, _0x435e31);
          return _0x2a46a7.exports;
        };
        _0x39b5c9._resolve = function (_0x3e3b61, _0x4d41fe) {
          return this._resolveFromInfos(_0x3e3b61, _0x4d41fe) || this._throwUnresolved(_0x3e3b61, _0x4d41fe);
        };
        _0x39b5c9._resolveFromInfos = function (_0x50ffc0, _0x2a31b2) {
          var _0x5c74f3;
          var _0x100bc9;
          return _0x50ffc0 in cjsInfos ? _0x50ffc0 : _0x2a31b2 && null != (_0x5c74f3 = null == (_0x100bc9 = cjsInfos[_0x2a31b2]) ? undefined : _0x100bc9.resolveCache[_0x50ffc0]) ? _0x5c74f3 : undefined;
        };
        _0x39b5c9._tryModuleLoad = function (_0x313a51, _0x40339d) {
          var _0x21acbe = true;
          try {
            this._load(_0x313a51, _0x40339d);
            _0x21acbe = false;
          } finally {
            _0x21acbe && delete this._moduleCache[_0x40339d];
          }
        };
        _0x39b5c9._load = function (_0xc5305c, _0x5cae21) {
          var _0xca33f1 = this._loadWrapper(_0x5cae21);
          var _0x212d93 = _0xca33f1.factory;
          var _0x1847e8 = _0xca33f1.resolveMap;
          var _0x5bd91d = this._createRequire(_0xc5305c);
          var _0x326fe8 = _0x1847e8 ? this._createRequireWithResolveMap("function" == typeof _0x1847e8 ? _0x1847e8() : _0x1847e8, _0x5bd91d) : _0x5bd91d;
          _0x212d93(_0xc5305c.exports, _0x326fe8, _0xc5305c);
        };
        _0x39b5c9._loadWrapper = function (_0x2e00df) {
          return _0x2e00df in this._registry ? this._registry[_0x2e00df] : this._loadHostProvidedModules(_0x2e00df);
        };
        _0x39b5c9._loadHostProvidedModules = function (_0x8003e6) {
          return {
            factory: function (_0x172f45, _0x415a61, _0x1d63c0) {
              if ("undefined" == typeof require) {
                throw new Error("Current environment does not provide a require() for requiring '" + _0x8003e6 + "'.");
              }
              try {
                _0x1d63c0.exports = require(_0x8003e6);
              } catch (_0xe82670) {
                throw new Error("Exception thrown when calling host defined require('" + _0x8003e6 + "').", {
                  cause: _0xe82670
                });
              }
            }
          };
        };
        _0x39b5c9._createRequire = function (_0x44fd77) {
          var _0x41f1ba = this;
          return function (_0x57b35a) {
            return _0x41f1ba._require(_0x57b35a, _0x44fd77);
          };
        };
        _0x39b5c9._createRequireWithResolveMap = function (_0x55e0b1, _0x3c7835) {
          return function (_0x58fd09) {
            var _0x59a82b = _0x55e0b1[_0x58fd09];
            if (_0x59a82b) {
              return _0x3c7835(_0x59a82b);
            }
            throw new Error("Unresolved specifier " + _0x58fd09);
          };
        };
        _0x39b5c9._throwUnresolved = function (_0x34a714, _0x534113) {
          throw new Error("Unable to resolve " + _0x34a714 + " from " + parent + ".");
        };
        return _0x161ef0;
      }();
      var _0x1bbca6 = new _0x1c6984();
      var _0x1e23f7;
      var _0x6e8b9 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/long/src/long.js";
      _0x1bbca6.define(_0x6e8b9, function (_0x154f13, _0x474b33, _0x566713, _0x55b080, _0x2e7690) {
        _0x566713.exports = _0x2c272f;
        var _0x166c01 = null;
        try {
          _0x166c01 = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11])), {}).exports;
        } catch (_0x21a422) {}
        function _0x2c272f(_0x359c5f, _0x2a12a6, _0x238959) {
          this.low = 0 | _0x359c5f;
          this.high = 0 | _0x2a12a6;
          this.unsigned = !!_0x238959;
        }
        function _0x257ebe(_0x2f5d5b) {
          return true === (_0x2f5d5b && _0x2f5d5b.__isLong__);
        }
        _0x2c272f.prototype.__isLong__;
        Object.defineProperty(_0x2c272f.prototype, "__isLong__", {
          value: true
        });
        _0x2c272f.isLong = _0x257ebe;
        var _0x25114e = {};
        var _0x1f6a07 = {};
        function _0x4bf8a1(_0x1e8d0e, _0x17098c) {
          var _0xe50a93;
          var _0x55f7dd;
          var _0x1bfc61;
          return _0x17098c ? (_0x1bfc61 = 0 <= (_0x1e8d0e >>>= 0) && _0x1e8d0e < 256) && (_0x55f7dd = _0x1f6a07[_0x1e8d0e]) ? _0x55f7dd : (_0xe50a93 = _0x38dea2(_0x1e8d0e, (0 | _0x1e8d0e) < 0 ? -1 : 0, true), _0x1bfc61 && (_0x1f6a07[_0x1e8d0e] = _0xe50a93), _0xe50a93) : (_0x1bfc61 = -128 <= (_0x1e8d0e |= 0) && _0x1e8d0e < 128) && (_0x55f7dd = _0x25114e[_0x1e8d0e]) ? _0x55f7dd : (_0xe50a93 = _0x38dea2(_0x1e8d0e, _0x1e8d0e < 0 ? -1 : 0, false), _0x1bfc61 && (_0x25114e[_0x1e8d0e] = _0xe50a93), _0xe50a93);
        }
        function _0x3364ad(_0x3feb48, _0x3d07e0) {
          if (isNaN(_0x3feb48)) {
            return _0x3d07e0 ? _0x51108f : _0x51fa24;
          }
          if (_0x3d07e0) {
            if (_0x3feb48 < 0) {
              return _0x51108f;
            }
            if (_0x3feb48 >= _0x43f68e) {
              return _0x20df31;
            }
          } else {
            if (_0x3feb48 <= -_0x15b76e) {
              return _0x11f067;
            }
            if (_0x3feb48 + 1 >= _0x15b76e) {
              return _0x557602;
            }
          }
          return _0x3feb48 < 0 ? _0x3364ad(-_0x3feb48, _0x3d07e0).neg() : _0x38dea2(_0x3feb48 % _0x595ca5 | 0, _0x3feb48 / _0x595ca5 | 0, _0x3d07e0);
        }
        function _0x38dea2(_0x208d9d, _0x2d1363, _0x24f178) {
          return new _0x2c272f(_0x208d9d, _0x2d1363, _0x24f178);
        }
        _0x2c272f.fromInt = _0x4bf8a1;
        _0x2c272f.fromNumber = _0x3364ad;
        _0x2c272f.fromBits = _0x38dea2;
        var _0x317556 = Math.pow;
        function _0x256573(_0x33068b, _0x574853, _0x4b1e4b) {
          if (0 === _0x33068b.length) {
            throw Error("empty string");
          }
          if ("NaN" === _0x33068b || "Infinity" === _0x33068b || "+Infinity" === _0x33068b || "-Infinity" === _0x33068b) {
            return _0x51fa24;
          }
          if ("number" == typeof _0x574853 ? (_0x4b1e4b = _0x574853, _0x574853 = false) : _0x574853 = !!_0x574853, (_0x4b1e4b = _0x4b1e4b || 10) < 2 || 36 < _0x4b1e4b) {
            throw RangeError("radix");
          }
          var _0x48c866;
          if ((_0x48c866 = _0x33068b.indexOf("-")) > 0) {
            throw Error("interior hyphen");
          }
          if (0 === _0x48c866) {
            return _0x256573(_0x33068b.substring(1), _0x574853, _0x4b1e4b).neg();
          }
          for (var _0x32c61a = _0x3364ad(_0x317556(_0x4b1e4b, 8)), _0x373487 = _0x51fa24, _0x57fdb0 = 0; _0x57fdb0 < _0x33068b.length; _0x57fdb0 += 8) {
            var _0xda7562 = Math.min(8, _0x33068b.length - _0x57fdb0);
            var _0x3ba60a = parseInt(_0x33068b.substring(_0x57fdb0, _0x57fdb0 + _0xda7562), _0x4b1e4b);
            if (_0xda7562 < 8) {
              var _0x584e75 = _0x3364ad(_0x317556(_0x4b1e4b, _0xda7562));
              _0x373487 = _0x373487.mul(_0x584e75).add(_0x3364ad(_0x3ba60a));
            } else {
              _0x373487 = (_0x373487 = _0x373487.mul(_0x32c61a)).add(_0x3364ad(_0x3ba60a));
            }
          }
          _0x373487.unsigned = _0x574853;
          return _0x373487;
        }
        function _0x2e3914(_0x515176, _0x4d4263) {
          return "number" == typeof _0x515176 ? _0x3364ad(_0x515176, _0x4d4263) : "string" == typeof _0x515176 ? _0x256573(_0x515176, _0x4d4263) : _0x38dea2(_0x515176.low, _0x515176.high, "boolean" == typeof _0x4d4263 ? _0x4d4263 : _0x515176.unsigned);
        }
        _0x2c272f.fromString = _0x256573;
        _0x2c272f.fromValue = _0x2e3914;
        var _0x595ca5 = 4294967296;
        var _0x43f68e = _0x595ca5 * _0x595ca5;
        var _0x15b76e = _0x43f68e / 2;
        var _0x1e5370 = _0x4bf8a1(16777216);
        var _0x51fa24 = _0x4bf8a1(0);
        _0x2c272f.ZERO = _0x51fa24;
        var _0x51108f = _0x4bf8a1(0, true);
        _0x2c272f.UZERO = _0x51108f;
        var _0x20034b = _0x4bf8a1(1);
        _0x2c272f.ONE = _0x20034b;
        var _0x467c11 = _0x4bf8a1(1, true);
        _0x2c272f.UONE = _0x467c11;
        var _0x3c5ccc = _0x4bf8a1(-1);
        _0x2c272f.NEG_ONE = _0x3c5ccc;
        var _0x557602 = _0x38dea2(-1, 2147483647, false);
        _0x2c272f.MAX_VALUE = _0x557602;
        var _0x20df31 = _0x38dea2(-1, -1, true);
        _0x2c272f.MAX_UNSIGNED_VALUE = _0x20df31;
        var _0x11f067 = _0x38dea2(0, -2147483648, false);
        _0x2c272f.MIN_VALUE = _0x11f067;
        var _0x4bf06b = _0x2c272f.prototype;
        _0x4bf06b.toInt = function () {
          return this.unsigned ? this.low >>> 0 : this.low;
        };
        _0x4bf06b.toNumber = function () {
          return this.unsigned ? (this.high >>> 0) * _0x595ca5 + (this.low >>> 0) : this.high * _0x595ca5 + (this.low >>> 0);
        };
        _0x4bf06b.toString = function (_0x1e0918) {
          if ((_0x1e0918 = _0x1e0918 || 10) < 2 || 36 < _0x1e0918) {
            throw RangeError("radix");
          }
          if (this.isZero()) {
            return "0";
          }
          if (this.isNegative()) {
            if (this.eq(_0x11f067)) {
              var _0x220b8c = _0x3364ad(_0x1e0918);
              var _0x71f462 = this.div(_0x220b8c);
              var _0x17c9fc = _0x71f462.mul(_0x220b8c).sub(this);
              return _0x71f462.toString(_0x1e0918) + _0x17c9fc.toInt().toString(_0x1e0918);
            }
            return "-" + this.neg().toString(_0x1e0918);
          }
          for (var _0x27178d = _0x3364ad(_0x317556(_0x1e0918, 6), this.unsigned), _0x1d97c9 = this, _0x4c7186 = "";;) {
            var _0x27e4ab = _0x1d97c9.div(_0x27178d);
            var _0x23c775 = (_0x1d97c9.sub(_0x27e4ab.mul(_0x27178d)).toInt() >>> 0).toString(_0x1e0918);
            if ((_0x1d97c9 = _0x27e4ab).isZero()) {
              return _0x23c775 + _0x4c7186;
            }
            for (; _0x23c775.length < 6;) {
              _0x23c775 = "0" + _0x23c775;
            }
            _0x4c7186 = "" + _0x23c775 + _0x4c7186;
          }
        };
        _0x4bf06b.getHighBits = function () {
          return this.high;
        };
        _0x4bf06b.getHighBitsUnsigned = function () {
          return this.high >>> 0;
        };
        _0x4bf06b.getLowBits = function () {
          return this.low;
        };
        _0x4bf06b.getLowBitsUnsigned = function () {
          return this.low >>> 0;
        };
        _0x4bf06b.getNumBitsAbs = function () {
          if (this.isNegative()) {
            return this.eq(_0x11f067) ? 64 : this.neg().getNumBitsAbs();
          }
          for (var _0x1b2e31 = 0 != this.high ? this.high : this.low, _0x1996d9 = 31; _0x1996d9 > 0 && 0 == (_0x1b2e31 & 1 << _0x1996d9); _0x1996d9--) {}
          return 0 != this.high ? _0x1996d9 + 33 : _0x1996d9 + 1;
        };
        _0x4bf06b.isZero = function () {
          return 0 === this.high && 0 === this.low;
        };
        _0x4bf06b.eqz = _0x4bf06b.isZero;
        _0x4bf06b.isNegative = function () {
          return !this.unsigned && this.high < 0;
        };
        _0x4bf06b.isPositive = function () {
          return this.unsigned || this.high >= 0;
        };
        _0x4bf06b.isOdd = function () {
          return 1 == (1 & this.low);
        };
        _0x4bf06b.isEven = function () {
          return 0 == (1 & this.low);
        };
        _0x4bf06b.equals = function (_0x328d89) {
          _0x257ebe(_0x328d89) || (_0x328d89 = _0x2e3914(_0x328d89));
          return (this.unsigned === _0x328d89.unsigned || this.high >>> 31 != 1 || _0x328d89.high >>> 31 != 1) && this.high === _0x328d89.high && this.low === _0x328d89.low;
        };
        _0x4bf06b.eq = _0x4bf06b.equals;
        _0x4bf06b.notEquals = function (_0x42a20b) {
          return !this.eq(_0x42a20b);
        };
        _0x4bf06b.neq = _0x4bf06b.notEquals;
        _0x4bf06b.ne = _0x4bf06b.notEquals;
        _0x4bf06b.lessThan = function (_0x142d93) {
          return this.comp(_0x142d93) < 0;
        };
        _0x4bf06b.lt = _0x4bf06b.lessThan;
        _0x4bf06b.lessThanOrEqual = function (_0x114843) {
          return this.comp(_0x114843) <= 0;
        };
        _0x4bf06b.lte = _0x4bf06b.lessThanOrEqual;
        _0x4bf06b.le = _0x4bf06b.lessThanOrEqual;
        _0x4bf06b.greaterThan = function (_0x2bcee7) {
          return this.comp(_0x2bcee7) > 0;
        };
        _0x4bf06b.gt = _0x4bf06b.greaterThan;
        _0x4bf06b.greaterThanOrEqual = function (_0x45f7c0) {
          return this.comp(_0x45f7c0) >= 0;
        };
        _0x4bf06b.gte = _0x4bf06b.greaterThanOrEqual;
        _0x4bf06b.ge = _0x4bf06b.greaterThanOrEqual;
        _0x4bf06b.compare = function (_0x30b53e) {
          if (_0x257ebe(_0x30b53e) || (_0x30b53e = _0x2e3914(_0x30b53e)), this.eq(_0x30b53e)) {
            return 0;
          }
          var _0x32aadf = this.isNegative();
          var _0x167b31 = _0x30b53e.isNegative();
          return _0x32aadf && !_0x167b31 ? -1 : !_0x32aadf && _0x167b31 ? 1 : this.unsigned ? _0x30b53e.high >>> 0 > this.high >>> 0 || _0x30b53e.high === this.high && _0x30b53e.low >>> 0 > this.low >>> 0 ? -1 : 1 : this.sub(_0x30b53e).isNegative() ? -1 : 1;
        };
        _0x4bf06b.comp = _0x4bf06b.compare;
        _0x4bf06b.negate = function () {
          return !this.unsigned && this.eq(_0x11f067) ? _0x11f067 : this.not().add(_0x20034b);
        };
        _0x4bf06b.neg = _0x4bf06b.negate;
        _0x4bf06b.add = function (_0x355c9a) {
          _0x257ebe(_0x355c9a) || (_0x355c9a = _0x2e3914(_0x355c9a));
          var _0x18eba7 = this.high >>> 16;
          var _0x2b0ee0 = 65535 & this.high;
          var _0x55c0ff = this.low >>> 16;
          var _0x5a9515 = 65535 & this.low;
          var _0x6b2d59 = _0x355c9a.high >>> 16;
          var _0x3a6910 = 65535 & _0x355c9a.high;
          var _0x408f0b = _0x355c9a.low >>> 16;
          var _0x386c2c = 0;
          var _0x241e42 = 0;
          var _0x138145 = 0;
          var _0x22b4a8 = 0;
          _0x138145 += (_0x22b4a8 += _0x5a9515 + (65535 & _0x355c9a.low)) >>> 16;
          _0x241e42 += (_0x138145 += _0x55c0ff + _0x408f0b) >>> 16;
          _0x386c2c += (_0x241e42 += _0x2b0ee0 + _0x3a6910) >>> 16;
          _0x386c2c += _0x18eba7 + _0x6b2d59;
          return _0x38dea2((_0x138145 &= 65535) << 16 | (_0x22b4a8 &= 65535), (_0x386c2c &= 65535) << 16 | (_0x241e42 &= 65535), this.unsigned);
        };
        _0x4bf06b.subtract = function (_0xead76) {
          _0x257ebe(_0xead76) || (_0xead76 = _0x2e3914(_0xead76));
          return this.add(_0xead76.neg());
        };
        _0x4bf06b.sub = _0x4bf06b.subtract;
        _0x4bf06b.multiply = function (_0x2250fe) {
          if (this.isZero()) {
            return _0x51fa24;
          }
          if (_0x257ebe(_0x2250fe) || (_0x2250fe = _0x2e3914(_0x2250fe)), _0x166c01) {
            return _0x38dea2(_0x166c01.mul(this.low, this.high, _0x2250fe.low, _0x2250fe.high), _0x166c01.get_high(), this.unsigned);
          }
          if (_0x2250fe.isZero()) {
            return _0x51fa24;
          }
          if (this.eq(_0x11f067)) {
            return _0x2250fe.isOdd() ? _0x11f067 : _0x51fa24;
          }
          if (_0x2250fe.eq(_0x11f067)) {
            return this.isOdd() ? _0x11f067 : _0x51fa24;
          }
          if (this.isNegative()) {
            return _0x2250fe.isNegative() ? this.neg().mul(_0x2250fe.neg()) : this.neg().mul(_0x2250fe).neg();
          }
          if (_0x2250fe.isNegative()) {
            return this.mul(_0x2250fe.neg()).neg();
          }
          if (this.lt(_0x1e5370) && _0x2250fe.lt(_0x1e5370)) {
            return _0x3364ad(this.toNumber() * _0x2250fe.toNumber(), this.unsigned);
          }
          var _0x19395b = this.high >>> 16;
          var _0x1549d2 = 65535 & this.high;
          var _0x48abce = this.low >>> 16;
          var _0x2b47a2 = 65535 & this.low;
          var _0x2c2f70 = _0x2250fe.high >>> 16;
          var _0x3bd9e1 = 65535 & _0x2250fe.high;
          var _0x4c9e55 = _0x2250fe.low >>> 16;
          var _0x5181e8 = 65535 & _0x2250fe.low;
          var _0x16d04d = 0;
          var _0x10aa74 = 0;
          var _0x12e584 = 0;
          var _0x594425 = 0;
          _0x12e584 += (_0x594425 += _0x2b47a2 * _0x5181e8) >>> 16;
          _0x10aa74 += (_0x12e584 += _0x48abce * _0x5181e8) >>> 16;
          _0x12e584 &= 65535;
          _0x10aa74 += (_0x12e584 += _0x2b47a2 * _0x4c9e55) >>> 16;
          _0x16d04d += (_0x10aa74 += _0x1549d2 * _0x5181e8) >>> 16;
          _0x10aa74 &= 65535;
          _0x16d04d += (_0x10aa74 += _0x48abce * _0x4c9e55) >>> 16;
          _0x10aa74 &= 65535;
          _0x16d04d += (_0x10aa74 += _0x2b47a2 * _0x3bd9e1) >>> 16;
          _0x16d04d += _0x19395b * _0x5181e8 + _0x1549d2 * _0x4c9e55 + _0x48abce * _0x3bd9e1 + _0x2b47a2 * _0x2c2f70;
          return _0x38dea2((_0x12e584 &= 65535) << 16 | (_0x594425 &= 65535), (_0x16d04d &= 65535) << 16 | (_0x10aa74 &= 65535), this.unsigned);
        };
        _0x4bf06b.mul = _0x4bf06b.multiply;
        _0x4bf06b.divide = function (_0x243999) {
          if (_0x257ebe(_0x243999) || (_0x243999 = _0x2e3914(_0x243999)), _0x243999.isZero()) {
            throw Error("division by zero");
          }
          var _0xf0df14;
          var _0x47bad9;
          var _0x38afba;
          if (_0x166c01) {
            return this.unsigned || -2147483648 !== this.high || -1 !== _0x243999.low || -1 !== _0x243999.high ? _0x38dea2((this.unsigned ? _0x166c01.div_u : _0x166c01.div_s)(this.low, this.high, _0x243999.low, _0x243999.high), _0x166c01.get_high(), this.unsigned) : this;
          }
          if (this.isZero()) {
            return this.unsigned ? _0x51108f : _0x51fa24;
          }
          if (this.unsigned) {
            if (_0x243999.unsigned || (_0x243999 = _0x243999.toUnsigned()), _0x243999.gt(this)) {
              return _0x51108f;
            }
            if (_0x243999.gt(this.shru(1))) {
              return _0x467c11;
            }
            _0x38afba = _0x51108f;
          } else {
            if (this.eq(_0x11f067)) {
              return _0x243999.eq(_0x20034b) || _0x243999.eq(_0x3c5ccc) ? _0x11f067 : _0x243999.eq(_0x11f067) ? _0x20034b : (_0xf0df14 = this.shr(1).div(_0x243999).shl(1)).eq(_0x51fa24) ? _0x243999.isNegative() ? _0x20034b : _0x3c5ccc : (_0x47bad9 = this.sub(_0x243999.mul(_0xf0df14)), _0x38afba = _0xf0df14.add(_0x47bad9.div(_0x243999)));
            }
            if (_0x243999.eq(_0x11f067)) {
              return this.unsigned ? _0x51108f : _0x51fa24;
            }
            if (this.isNegative()) {
              return _0x243999.isNegative() ? this.neg().div(_0x243999.neg()) : this.neg().div(_0x243999).neg();
            }
            if (_0x243999.isNegative()) {
              return this.div(_0x243999.neg()).neg();
            }
            _0x38afba = _0x51fa24;
          }
          for (_0x47bad9 = this; _0x47bad9.gte(_0x243999);) {
            _0xf0df14 = Math.max(1, Math.floor(_0x47bad9.toNumber() / _0x243999.toNumber()));
            for (var _0x16374e = Math.ceil(Math.log(_0xf0df14) / Math.LN2), _0x4513c4 = _0x16374e <= 48 ? 1 : _0x317556(2, _0x16374e - 48), _0xd2a88d = _0x3364ad(_0xf0df14), _0x2ad7c7 = _0xd2a88d.mul(_0x243999); _0x2ad7c7.isNegative() || _0x2ad7c7.gt(_0x47bad9);) {
              _0x2ad7c7 = (_0xd2a88d = _0x3364ad(_0xf0df14 -= _0x4513c4, this.unsigned)).mul(_0x243999);
            }
            _0xd2a88d.isZero() && (_0xd2a88d = _0x20034b);
            _0x38afba = _0x38afba.add(_0xd2a88d);
            _0x47bad9 = _0x47bad9.sub(_0x2ad7c7);
          }
          return _0x38afba;
        };
        _0x4bf06b.div = _0x4bf06b.divide;
        _0x4bf06b.modulo = function (_0x3260e4) {
          _0x257ebe(_0x3260e4) || (_0x3260e4 = _0x2e3914(_0x3260e4));
          return _0x166c01 ? _0x38dea2((this.unsigned ? _0x166c01.rem_u : _0x166c01.rem_s)(this.low, this.high, _0x3260e4.low, _0x3260e4.high), _0x166c01.get_high(), this.unsigned) : this.sub(this.div(_0x3260e4).mul(_0x3260e4));
        };
        _0x4bf06b.mod = _0x4bf06b.modulo;
        _0x4bf06b.rem = _0x4bf06b.modulo;
        _0x4bf06b.not = function () {
          return _0x38dea2(~this.low, ~this.high, this.unsigned);
        };
        _0x4bf06b.and = function (_0x3487ea) {
          _0x257ebe(_0x3487ea) || (_0x3487ea = _0x2e3914(_0x3487ea));
          return _0x38dea2(this.low & _0x3487ea.low, this.high & _0x3487ea.high, this.unsigned);
        };
        _0x4bf06b.or = function (_0x52a6c8) {
          _0x257ebe(_0x52a6c8) || (_0x52a6c8 = _0x2e3914(_0x52a6c8));
          return _0x38dea2(this.low | _0x52a6c8.low, this.high | _0x52a6c8.high, this.unsigned);
        };
        _0x4bf06b.xor = function (_0x3be16f) {
          _0x257ebe(_0x3be16f) || (_0x3be16f = _0x2e3914(_0x3be16f));
          return _0x38dea2(this.low ^ _0x3be16f.low, this.high ^ _0x3be16f.high, this.unsigned);
        };
        _0x4bf06b.shiftLeft = function (_0x4c0dd3) {
          _0x257ebe(_0x4c0dd3) && (_0x4c0dd3 = _0x4c0dd3.toInt());
          return 0 == (_0x4c0dd3 &= 63) ? this : _0x4c0dd3 < 32 ? _0x38dea2(this.low << _0x4c0dd3, this.high << _0x4c0dd3 | this.low >>> 32 - _0x4c0dd3, this.unsigned) : _0x38dea2(0, this.low << _0x4c0dd3 - 32, this.unsigned);
        };
        _0x4bf06b.shl = _0x4bf06b.shiftLeft;
        _0x4bf06b.shiftRight = function (_0xc4f91) {
          _0x257ebe(_0xc4f91) && (_0xc4f91 = _0xc4f91.toInt());
          return 0 == (_0xc4f91 &= 63) ? this : _0xc4f91 < 32 ? _0x38dea2(this.low >>> _0xc4f91 | this.high << 32 - _0xc4f91, this.high >> _0xc4f91, this.unsigned) : _0x38dea2(this.high >> _0xc4f91 - 32, this.high >= 0 ? 0 : -1, this.unsigned);
        };
        _0x4bf06b.shr = _0x4bf06b.shiftRight;
        _0x4bf06b.shiftRightUnsigned = function (_0x512f9c) {
          if (_0x257ebe(_0x512f9c) && (_0x512f9c = _0x512f9c.toInt()), 0 === (_0x512f9c &= 63)) {
            return this;
          }
          var _0x166de9 = this.high;
          return _0x512f9c < 32 ? _0x38dea2(this.low >>> _0x512f9c | _0x166de9 << 32 - _0x512f9c, _0x166de9 >>> _0x512f9c, this.unsigned) : _0x38dea2(32 === _0x512f9c ? _0x166de9 : _0x166de9 >>> _0x512f9c - 32, 0, this.unsigned);
        };
        _0x4bf06b.shru = _0x4bf06b.shiftRightUnsigned;
        _0x4bf06b.shr_u = _0x4bf06b.shiftRightUnsigned;
        _0x4bf06b.toSigned = function () {
          return this.unsigned ? _0x38dea2(this.low, this.high, false) : this;
        };
        _0x4bf06b.toUnsigned = function () {
          return this.unsigned ? this : _0x38dea2(this.low, this.high, true);
        };
        _0x4bf06b.toBytes = function (_0x2026d4) {
          return _0x2026d4 ? this.toBytesLE() : this.toBytesBE();
        };
        _0x4bf06b.toBytesLE = function () {
          var _0x181bda = this.high;
          var _0x2918e1 = this.low;
          return [255 & _0x2918e1, _0x2918e1 >>> 8 & 255, _0x2918e1 >>> 16 & 255, _0x2918e1 >>> 24, 255 & _0x181bda, _0x181bda >>> 8 & 255, _0x181bda >>> 16 & 255, _0x181bda >>> 24];
        };
        _0x4bf06b.toBytesBE = function () {
          var _0x3c51a5 = this.high;
          var _0x13707d = this.low;
          return [_0x3c51a5 >>> 24, _0x3c51a5 >>> 16 & 255, _0x3c51a5 >>> 8 & 255, 255 & _0x3c51a5, _0x13707d >>> 24, _0x13707d >>> 16 & 255, _0x13707d >>> 8 & 255, 255 & _0x13707d];
        };
        _0x2c272f.fromBytes = function (_0x30ee54, _0x1f0bf8, _0x3ad86a) {
          return _0x3ad86a ? _0x2c272f.fromBytesLE(_0x30ee54, _0x1f0bf8) : _0x2c272f.fromBytesBE(_0x30ee54, _0x1f0bf8);
        };
        _0x2c272f.fromBytesLE = function (_0x106fa7, _0x49fe6d) {
          return new _0x2c272f(_0x106fa7[0] | _0x106fa7[1] << 8 | _0x106fa7[2] << 16 | _0x106fa7[3] << 24, _0x106fa7[4] | _0x106fa7[5] << 8 | _0x106fa7[6] << 16 | _0x106fa7[7] << 24, _0x49fe6d);
        };
        _0x2c272f.fromBytesBE = function (_0x5c6d82, _0x2b7bd0) {
          return new _0x2c272f(_0x5c6d82[4] << 24 | _0x5c6d82[5] << 16 | _0x5c6d82[6] << 8 | _0x5c6d82[7], _0x5c6d82[0] << 24 | _0x5c6d82[1] << 16 | _0x5c6d82[2] << 8 | _0x5c6d82[3], _0x2b7bd0);
        };
        _0x1e23f7 = _0x566713.exports;
      }, {});
      _0x6e8b9 || _0x1bbca6.throwInvalidWrapper("./long.js", "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/long/src/long.mjs?cjs=&original=.js");
      _0x1bbca6.require(_0x6e8b9);
      var _0x43d57d = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/aspromise/index.js";
      _0x1bbca6.define(_0x43d57d, function (_0x596177, _0x111c5e, _0x335ea9, _0x44fcbe, _0x59cacf) {
        _0x335ea9.exports = function (_0x5d5304, _0x5d8d99) {
          var _0x9299c3 = new Array(arguments.length - 1);
          var _0x16bfc6 = 0;
          var _0x43268a = 2;
          var _0x41a835 = true;
          for (; _0x43268a < arguments.length;) {
            _0x9299c3[_0x16bfc6++] = arguments[_0x43268a++];
          }
          return new Promise(function (_0xd83a94, _0x2d2226) {
            _0x9299c3[_0x16bfc6] = function (_0x41320d) {
              if (_0x41a835) {
                if (_0x41a835 = false, _0x41320d) {
                  _0x2d2226(_0x41320d);
                } else {
                  for (var _0x3d9ce2 = new Array(arguments.length - 1), _0x4c52e8 = 0; _0x4c52e8 < _0x3d9ce2.length;) {
                    _0x3d9ce2[_0x4c52e8++] = arguments[_0x4c52e8];
                  }
                  _0xd83a94.apply(null, _0x3d9ce2);
                }
              }
            };
            try {
              _0x5d5304.apply(_0x5d8d99 || null, _0x9299c3);
            } catch (_0x4ac286) {
              _0x41a835 && (_0x41a835 = false, _0x2d2226(_0x4ac286));
            }
          });
        };
        _0x335ea9.exports;
      }, {});
      var _0x3b0393 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/base64/index.js";
      _0x1bbca6.define(_0x3b0393, function (_0x909438, _0x4ee3c1, _0x2f92ef, _0x49c34a, _0x2c7e44) {
        var _0x40ad82 = _0x909438;
        _0x40ad82.length = function (_0x527dea) {
          var _0x11c99a = _0x527dea.length;
          if (!_0x11c99a) {
            return 0;
          }
          for (var _0x4d1ad1 = 0; --_0x11c99a % 4 > 1 && "=" === _0x527dea.charAt(_0x11c99a);) {
            ++_0x4d1ad1;
          }
          return Math.ceil(3 * _0x527dea.length) / 4 - _0x4d1ad1;
        };
        for (var _0x3bfd44 = new Array(64), _0x2effc0 = new Array(123), _0x574525 = 0; _0x574525 < 64;) {
          _0x2effc0[_0x3bfd44[_0x574525] = _0x574525 < 26 ? _0x574525 + 65 : _0x574525 < 52 ? _0x574525 + 71 : _0x574525 < 62 ? _0x574525 - 4 : _0x574525 - 59 | 43] = _0x574525++;
        }
        _0x40ad82.encode = function (_0x15cc34, _0x391b18, _0x4c3664) {
          for (var _0x596973, _0x2969ce = null, _0x2d71b8 = [], _0xf842bd = 0, _0x400cb9 = 0; _0x391b18 < _0x4c3664;) {
            var _0x3a826d = _0x15cc34[_0x391b18++];
            switch (_0x400cb9) {
              case 0:
                _0x2d71b8[_0xf842bd++] = _0x3bfd44[_0x3a826d >> 2];
                _0x596973 = (3 & _0x3a826d) << 4;
                _0x400cb9 = 1;
                break;
              case 1:
                _0x2d71b8[_0xf842bd++] = _0x3bfd44[_0x596973 | _0x3a826d >> 4];
                _0x596973 = (15 & _0x3a826d) << 2;
                _0x400cb9 = 2;
                break;
              case 2:
                _0x2d71b8[_0xf842bd++] = _0x3bfd44[_0x596973 | _0x3a826d >> 6];
                _0x2d71b8[_0xf842bd++] = _0x3bfd44[63 & _0x3a826d];
                _0x400cb9 = 0;
            }
            _0xf842bd > 8191 && ((_0x2969ce || (_0x2969ce = [])).push(String.fromCharCode.apply(String, _0x2d71b8)), _0xf842bd = 0);
          }
          _0x400cb9 && (_0x2d71b8[_0xf842bd++] = _0x3bfd44[_0x596973], _0x2d71b8[_0xf842bd++] = 61, 1 === _0x400cb9 && (_0x2d71b8[_0xf842bd++] = 61));
          return _0x2969ce ? (_0xf842bd && _0x2969ce.push(String.fromCharCode.apply(String, _0x2d71b8.slice(0, _0xf842bd))), _0x2969ce.join("")) : String.fromCharCode.apply(String, _0x2d71b8.slice(0, _0xf842bd));
        };
        var _0x57a938 = "invalid encoding";
        _0x40ad82.decode = function (_0x1ad1f2, _0x5e97b8, _0xd7f89e) {
          for (var _0x3e8f26, _0x4f71d8 = _0xd7f89e, _0xd15ba1 = 0, _0x41b9b4 = 0; _0x41b9b4 < _0x1ad1f2.length;) {
            var _0x37cf74 = _0x1ad1f2.charCodeAt(_0x41b9b4++);
            if (61 === _0x37cf74 && _0xd15ba1 > 1) {
              break;
            }
            if (undefined === (_0x37cf74 = _0x2effc0[_0x37cf74])) {
              throw Error(_0x57a938);
            }
            switch (_0xd15ba1) {
              case 0:
                _0x3e8f26 = _0x37cf74;
                _0xd15ba1 = 1;
                break;
              case 1:
                _0x5e97b8[_0xd7f89e++] = _0x3e8f26 << 2 | (48 & _0x37cf74) >> 4;
                _0x3e8f26 = _0x37cf74;
                _0xd15ba1 = 2;
                break;
              case 2:
                _0x5e97b8[_0xd7f89e++] = (15 & _0x3e8f26) << 4 | (60 & _0x37cf74) >> 2;
                _0x3e8f26 = _0x37cf74;
                _0xd15ba1 = 3;
                break;
              case 3:
                _0x5e97b8[_0xd7f89e++] = (3 & _0x3e8f26) << 6 | _0x37cf74;
                _0xd15ba1 = 0;
            }
          }
          if (1 === _0xd15ba1) {
            throw Error(_0x57a938);
          }
          return _0xd7f89e - _0x4f71d8;
        };
        _0x40ad82.test = function (_0x41b9b9) {
          return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(_0x41b9b9);
        };
        _0x2f92ef.exports;
      }, {});
      var _0x2beba2 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/eventemitter/index.js";
      _0x1bbca6.define(_0x2beba2, function (_0x13d307, _0x274c3e, _0x3007ad, _0x5468b2, _0x496a75) {
        function _0x3c70ca() {
          this._listeners = {};
        }
        _0x3007ad.exports = _0x3c70ca;
        _0x3c70ca.prototype.on = function (_0x2cfa34, _0x234b8e, _0x1b9da0) {
          (this._listeners[_0x2cfa34] || (this._listeners[_0x2cfa34] = [])).push({
            fn: _0x234b8e,
            ctx: _0x1b9da0 || this
          });
          return this;
        };
        _0x3c70ca.prototype.off = function (_0xaafd09, _0x5e3c2a) {
          if (undefined === _0xaafd09) {
            this._listeners = {};
          } else {
            if (undefined === _0x5e3c2a) {
              this._listeners[_0xaafd09] = [];
            } else {
              for (var _0x30651e = this._listeners[_0xaafd09], _0x183f6b = 0; _0x183f6b < _0x30651e.length;) {
                _0x30651e[_0x183f6b].fn === _0x5e3c2a ? _0x30651e.splice(_0x183f6b, 1) : ++_0x183f6b;
              }
            }
          }
          return this;
        };
        _0x3c70ca.prototype.emit = function (_0x651440) {
          var _0x2afcb5 = this._listeners[_0x651440];
          if (_0x2afcb5) {
            for (var _0xfa2ec1 = [], _0x44fb6b = 1; _0x44fb6b < arguments.length;) {
              _0xfa2ec1.push(arguments[_0x44fb6b++]);
            }
            for (_0x44fb6b = 0; _0x44fb6b < _0x2afcb5.length;) {
              _0x2afcb5[_0x44fb6b].fn.apply(_0x2afcb5[_0x44fb6b++].ctx, _0xfa2ec1);
            }
          }
          return this;
        };
        _0x3007ad.exports;
      }, {});
      var _0x522241 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/float/index.js";
      _0x1bbca6.define(_0x522241, function (_0x290e17, _0x45e3be, _0x4a8e37, _0xc84909, _0x398471) {
        function _0x3d82ed(_0x45f22a) {
          "undefined" != typeof Float32Array ? function () {
            var _0x411eb4 = new Float32Array([-0]);
            var _0x171d1e = new Uint8Array(_0x411eb4.buffer);
            var _0x3fe220 = 128 === _0x171d1e[3];
            function _0x77834e(_0x3eb058, _0xdcb9bb, _0x4bc58e) {
              _0x411eb4[0] = _0x3eb058;
              _0xdcb9bb[_0x4bc58e] = _0x171d1e[0];
              _0xdcb9bb[_0x4bc58e + 1] = _0x171d1e[1];
              _0xdcb9bb[_0x4bc58e + 2] = _0x171d1e[2];
              _0xdcb9bb[_0x4bc58e + 3] = _0x171d1e[3];
            }
            function _0x58d7e7(_0x2818e8, _0x312111, _0x24bf0b) {
              _0x411eb4[0] = _0x2818e8;
              _0x312111[_0x24bf0b] = _0x171d1e[3];
              _0x312111[_0x24bf0b + 1] = _0x171d1e[2];
              _0x312111[_0x24bf0b + 2] = _0x171d1e[1];
              _0x312111[_0x24bf0b + 3] = _0x171d1e[0];
            }
            function _0x215dc8(_0x1e14ca, _0x3ddb95) {
              _0x171d1e[0] = _0x1e14ca[_0x3ddb95];
              _0x171d1e[1] = _0x1e14ca[_0x3ddb95 + 1];
              _0x171d1e[2] = _0x1e14ca[_0x3ddb95 + 2];
              _0x171d1e[3] = _0x1e14ca[_0x3ddb95 + 3];
              return _0x411eb4[0];
            }
            function _0x33266b(_0x60852d, _0x3675b5) {
              _0x171d1e[3] = _0x60852d[_0x3675b5];
              _0x171d1e[2] = _0x60852d[_0x3675b5 + 1];
              _0x171d1e[1] = _0x60852d[_0x3675b5 + 2];
              _0x171d1e[0] = _0x60852d[_0x3675b5 + 3];
              return _0x411eb4[0];
            }
            _0x45f22a.writeFloatLE = _0x3fe220 ? _0x77834e : _0x58d7e7;
            _0x45f22a.writeFloatBE = _0x3fe220 ? _0x58d7e7 : _0x77834e;
            _0x45f22a.readFloatLE = _0x3fe220 ? _0x215dc8 : _0x33266b;
            _0x45f22a.readFloatBE = _0x3fe220 ? _0x33266b : _0x215dc8;
          }() : function () {
            function _0x4ddb74(_0x277b28, _0x26fa41, _0xb14f16, _0x1c7946) {
              var _0x1d1151 = _0x26fa41 < 0 ? 1 : 0;
              if (_0x1d1151 && (_0x26fa41 = -_0x26fa41), 0 === _0x26fa41) {
                _0x277b28(1 / _0x26fa41 > 0 ? 0 : 2147483648, _0xb14f16, _0x1c7946);
              } else {
                if (isNaN(_0x26fa41)) {
                  _0x277b28(2143289344, _0xb14f16, _0x1c7946);
                } else {
                  if (_0x26fa41 > 3.4028234663852886e+38) {
                    _0x277b28((_0x1d1151 << 31 | 2139095040) >>> 0, _0xb14f16, _0x1c7946);
                  } else {
                    if (_0x26fa41 < 1.1754943508222875e-38) {
                      _0x277b28((_0x1d1151 << 31 | Math.round(_0x26fa41 / 1.401298464324817e-45)) >>> 0, _0xb14f16, _0x1c7946);
                    } else {
                      var _0x216b4f = Math.floor(Math.log(_0x26fa41) / Math.LN2);
                      _0x277b28((_0x1d1151 << 31 | _0x216b4f + 127 << 23 | 8388607 & Math.round(_0x26fa41 * Math.pow(2, -_0x216b4f) * 8388608)) >>> 0, _0xb14f16, _0x1c7946);
                    }
                  }
                }
              }
            }
            function _0x4dd50a(_0x250556, _0x3d0e6c, _0x4b0ccd) {
              var _0x431540 = _0x250556(_0x3d0e6c, _0x4b0ccd);
              var _0x17f5b6 = 2 * (_0x431540 >> 31) + 1;
              var _0x427e33 = _0x431540 >>> 23 & 255;
              var _0x45feec = 8388607 & _0x431540;
              return 255 === _0x427e33 ? _0x45feec ? NaN : _0x17f5b6 * Infinity : 0 === _0x427e33 ? 1.401298464324817e-45 * _0x17f5b6 * _0x45feec : _0x17f5b6 * Math.pow(2, _0x427e33 - 150) * (_0x45feec + 8388608);
            }
            _0x45f22a.writeFloatLE = _0x4ddb74.bind(null, _0x5dab06);
            _0x45f22a.writeFloatBE = _0x4ddb74.bind(null, _0x3aae3b);
            _0x45f22a.readFloatLE = _0x4dd50a.bind(null, _0x50a236);
            _0x45f22a.readFloatBE = _0x4dd50a.bind(null, _0x405274);
          }();
          "undefined" != typeof Float64Array ? function () {
            var _0x18ddb7 = new Float64Array([-0]);
            var _0x15dae5 = new Uint8Array(_0x18ddb7.buffer);
            var _0x54b4af = 128 === _0x15dae5[7];
            function _0x24db87(_0x5c36e1, _0x2a87a9, _0x416c57) {
              _0x18ddb7[0] = _0x5c36e1;
              _0x2a87a9[_0x416c57] = _0x15dae5[0];
              _0x2a87a9[_0x416c57 + 1] = _0x15dae5[1];
              _0x2a87a9[_0x416c57 + 2] = _0x15dae5[2];
              _0x2a87a9[_0x416c57 + 3] = _0x15dae5[3];
              _0x2a87a9[_0x416c57 + 4] = _0x15dae5[4];
              _0x2a87a9[_0x416c57 + 5] = _0x15dae5[5];
              _0x2a87a9[_0x416c57 + 6] = _0x15dae5[6];
              _0x2a87a9[_0x416c57 + 7] = _0x15dae5[7];
            }
            function _0x292f83(_0x1cd512, _0x209d11, _0x521eb6) {
              _0x18ddb7[0] = _0x1cd512;
              _0x209d11[_0x521eb6] = _0x15dae5[7];
              _0x209d11[_0x521eb6 + 1] = _0x15dae5[6];
              _0x209d11[_0x521eb6 + 2] = _0x15dae5[5];
              _0x209d11[_0x521eb6 + 3] = _0x15dae5[4];
              _0x209d11[_0x521eb6 + 4] = _0x15dae5[3];
              _0x209d11[_0x521eb6 + 5] = _0x15dae5[2];
              _0x209d11[_0x521eb6 + 6] = _0x15dae5[1];
              _0x209d11[_0x521eb6 + 7] = _0x15dae5[0];
            }
            function _0x8b231(_0x3f14a3, _0x2c717c) {
              _0x15dae5[0] = _0x3f14a3[_0x2c717c];
              _0x15dae5[1] = _0x3f14a3[_0x2c717c + 1];
              _0x15dae5[2] = _0x3f14a3[_0x2c717c + 2];
              _0x15dae5[3] = _0x3f14a3[_0x2c717c + 3];
              _0x15dae5[4] = _0x3f14a3[_0x2c717c + 4];
              _0x15dae5[5] = _0x3f14a3[_0x2c717c + 5];
              _0x15dae5[6] = _0x3f14a3[_0x2c717c + 6];
              _0x15dae5[7] = _0x3f14a3[_0x2c717c + 7];
              return _0x18ddb7[0];
            }
            function _0x4b060f(_0x299069, _0x356075) {
              _0x15dae5[7] = _0x299069[_0x356075];
              _0x15dae5[6] = _0x299069[_0x356075 + 1];
              _0x15dae5[5] = _0x299069[_0x356075 + 2];
              _0x15dae5[4] = _0x299069[_0x356075 + 3];
              _0x15dae5[3] = _0x299069[_0x356075 + 4];
              _0x15dae5[2] = _0x299069[_0x356075 + 5];
              _0x15dae5[1] = _0x299069[_0x356075 + 6];
              _0x15dae5[0] = _0x299069[_0x356075 + 7];
              return _0x18ddb7[0];
            }
            _0x45f22a.writeDoubleLE = _0x54b4af ? _0x24db87 : _0x292f83;
            _0x45f22a.writeDoubleBE = _0x54b4af ? _0x292f83 : _0x24db87;
            _0x45f22a.readDoubleLE = _0x54b4af ? _0x8b231 : _0x4b060f;
            _0x45f22a.readDoubleBE = _0x54b4af ? _0x4b060f : _0x8b231;
          }() : function () {
            function _0x12a08d(_0x3bf212, _0x2817c2, _0x4a7c5d, _0x445c5c, _0x142096, _0x171a7b) {
              var _0x40ed21 = _0x445c5c < 0 ? 1 : 0;
              if (_0x40ed21 && (_0x445c5c = -_0x445c5c), 0 === _0x445c5c) {
                _0x3bf212(0, _0x142096, _0x171a7b + _0x2817c2);
                _0x3bf212(1 / _0x445c5c > 0 ? 0 : 2147483648, _0x142096, _0x171a7b + _0x4a7c5d);
              } else {
                if (isNaN(_0x445c5c)) {
                  _0x3bf212(0, _0x142096, _0x171a7b + _0x2817c2);
                  _0x3bf212(2146959360, _0x142096, _0x171a7b + _0x4a7c5d);
                } else {
                  if (_0x445c5c > 1.7976931348623157e+308) {
                    _0x3bf212(0, _0x142096, _0x171a7b + _0x2817c2);
                    _0x3bf212((_0x40ed21 << 31 | 2146435072) >>> 0, _0x142096, _0x171a7b + _0x4a7c5d);
                  } else {
                    var _0x547c24;
                    if (_0x445c5c < 2.2250738585072014e-308) {
                      _0x3bf212((_0x547c24 = _0x445c5c / 5e-324) >>> 0, _0x142096, _0x171a7b + _0x2817c2);
                      _0x3bf212((_0x40ed21 << 31 | _0x547c24 / 4294967296) >>> 0, _0x142096, _0x171a7b + _0x4a7c5d);
                    } else {
                      var _0x32836d = Math.floor(Math.log(_0x445c5c) / Math.LN2);
                      1024 === _0x32836d && (_0x32836d = 1023);
                      _0x3bf212(4503599627370496 * (_0x547c24 = _0x445c5c * Math.pow(2, -_0x32836d)) >>> 0, _0x142096, _0x171a7b + _0x2817c2);
                      _0x3bf212((_0x40ed21 << 31 | _0x32836d + 1023 << 20 | 1048576 * _0x547c24 & 1048575) >>> 0, _0x142096, _0x171a7b + _0x4a7c5d);
                    }
                  }
                }
              }
            }
            function _0x39632c(_0x3de2e7, _0x83b7c4, _0x29c541, _0x4aa589, _0x50f0c5) {
              var _0x37f576 = _0x3de2e7(_0x4aa589, _0x50f0c5 + _0x83b7c4);
              var _0x1fb529 = _0x3de2e7(_0x4aa589, _0x50f0c5 + _0x29c541);
              var _0x1ec79b = 2 * (_0x1fb529 >> 31) + 1;
              var _0x286a55 = _0x1fb529 >>> 20 & 2047;
              var _0x120a62 = 4294967296 * (1048575 & _0x1fb529) + _0x37f576;
              return 2047 === _0x286a55 ? _0x120a62 ? NaN : _0x1ec79b * Infinity : 0 === _0x286a55 ? 5e-324 * _0x1ec79b * _0x120a62 : _0x1ec79b * Math.pow(2, _0x286a55 - 1075) * (_0x120a62 + 4503599627370496);
            }
            _0x45f22a.writeDoubleLE = _0x12a08d.bind(null, _0x5dab06, 0, 4);
            _0x45f22a.writeDoubleBE = _0x12a08d.bind(null, _0x3aae3b, 4, 0);
            _0x45f22a.readDoubleLE = _0x39632c.bind(null, _0x50a236, 0, 4);
            _0x45f22a.readDoubleBE = _0x39632c.bind(null, _0x405274, 4, 0);
          }();
          return _0x45f22a;
        }
        function _0x5dab06(_0x34a4e4, _0x5e55ba, _0x43868e) {
          _0x5e55ba[_0x43868e] = 255 & _0x34a4e4;
          _0x5e55ba[_0x43868e + 1] = _0x34a4e4 >>> 8 & 255;
          _0x5e55ba[_0x43868e + 2] = _0x34a4e4 >>> 16 & 255;
          _0x5e55ba[_0x43868e + 3] = _0x34a4e4 >>> 24;
        }
        function _0x3aae3b(_0x511939, _0x3aefec, _0x3852c6) {
          _0x3aefec[_0x3852c6] = _0x511939 >>> 24;
          _0x3aefec[_0x3852c6 + 1] = _0x511939 >>> 16 & 255;
          _0x3aefec[_0x3852c6 + 2] = _0x511939 >>> 8 & 255;
          _0x3aefec[_0x3852c6 + 3] = 255 & _0x511939;
        }
        function _0x50a236(_0x5ab711, _0x9b91cd) {
          return (_0x5ab711[_0x9b91cd] | _0x5ab711[_0x9b91cd + 1] << 8 | _0x5ab711[_0x9b91cd + 2] << 16 | _0x5ab711[_0x9b91cd + 3] << 24) >>> 0;
        }
        function _0x405274(_0x21c85b, _0x104ea3) {
          return (_0x21c85b[_0x104ea3] << 24 | _0x21c85b[_0x104ea3 + 1] << 16 | _0x21c85b[_0x104ea3 + 2] << 8 | _0x21c85b[_0x104ea3 + 3]) >>> 0;
        }
        _0x4a8e37.exports = _0x3d82ed(_0x3d82ed);
        _0x4a8e37.exports;
        _0x4a8e37.exports.writeFloatLE;
        _0x4a8e37.exports.writeFloatBE;
        _0x4a8e37.exports.readFloatLE;
        _0x4a8e37.exports.readFloatBE;
        _0x4a8e37.exports.writeDoubleLE;
        _0x4a8e37.exports.writeDoubleBE;
        _0x4a8e37.exports.readDoubleLE;
        _0x4a8e37.exports.readDoubleBE;
      }, {});
      var _0x5c8a72 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/inquire/index.js";
      _0x1bbca6.define(_0x5c8a72, function (_0x7985b7, _0x4836b1, _0x45911d, _0x4545d2, _0x49fd10) {
        function _0x5e099a(_0x4bfb04) {
          try {
            var _0x231346 = eval("quire".replace(/^/, "re"))(_0x4bfb04);
            if (_0x231346 && (_0x231346.length || Object.keys(_0x231346).length)) {
              return _0x231346;
            }
          } catch (_0x12011b) {}
          return null;
        }
        _0x45911d.exports = _0x5e099a;
        _0x45911d.exports;
      }, {});
      var _0x332b91 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/utf8/index.js";
      _0x1bbca6.define(_0x332b91, function (_0x4b6413, _0x19af57, _0x35670a, _0xd2dcf1, _0x1551e1) {
        var _0x5e3ff6 = _0x4b6413;
        _0x5e3ff6.length = function (_0x2cd603) {
          for (var _0x59f0eb = 0, _0x7038b = 0, _0x284545 = 0; _0x284545 < _0x2cd603.length; ++_0x284545) {
            (_0x7038b = _0x2cd603.charCodeAt(_0x284545)) < 128 ? _0x59f0eb += 1 : _0x7038b < 2048 ? _0x59f0eb += 2 : 55296 == (64512 & _0x7038b) && 56320 == (64512 & _0x2cd603.charCodeAt(_0x284545 + 1)) ? (++_0x284545, _0x59f0eb += 4) : _0x59f0eb += 3;
          }
          return _0x59f0eb;
        };
        _0x5e3ff6.read = function (_0x6adea7, _0x2ee2c8, _0x53d26e) {
          if (_0x53d26e - _0x2ee2c8 < 1) {
            return "";
          }
          for (var _0x284457, _0x1b0d5a = null, _0x1b56d1 = [], _0x34ad69 = 0; _0x2ee2c8 < _0x53d26e;) {
            (_0x284457 = _0x6adea7[_0x2ee2c8++]) < 128 ? _0x1b56d1[_0x34ad69++] = _0x284457 : _0x284457 > 191 && _0x284457 < 224 ? _0x1b56d1[_0x34ad69++] = (31 & _0x284457) << 6 | 63 & _0x6adea7[_0x2ee2c8++] : _0x284457 > 239 && _0x284457 < 365 ? (_0x284457 = ((7 & _0x284457) << 18 | (63 & _0x6adea7[_0x2ee2c8++]) << 12 | (63 & _0x6adea7[_0x2ee2c8++]) << 6 | 63 & _0x6adea7[_0x2ee2c8++]) - 65536, _0x1b56d1[_0x34ad69++] = 55296 + (_0x284457 >> 10), _0x1b56d1[_0x34ad69++] = 56320 + (1023 & _0x284457)) : _0x1b56d1[_0x34ad69++] = (15 & _0x284457) << 12 | (63 & _0x6adea7[_0x2ee2c8++]) << 6 | 63 & _0x6adea7[_0x2ee2c8++];
            _0x34ad69 > 8191 && ((_0x1b0d5a || (_0x1b0d5a = [])).push(String.fromCharCode.apply(String, _0x1b56d1)), _0x34ad69 = 0);
          }
          return _0x1b0d5a ? (_0x34ad69 && _0x1b0d5a.push(String.fromCharCode.apply(String, _0x1b56d1.slice(0, _0x34ad69))), _0x1b0d5a.join("")) : String.fromCharCode.apply(String, _0x1b56d1.slice(0, _0x34ad69));
        };
        _0x5e3ff6.write = function (_0x6d1661, _0x5e4300, _0x117807) {
          for (var _0x2bbe09, _0x2fa2b5, _0xa6eeef = _0x117807, _0x39b3da = 0; _0x39b3da < _0x6d1661.length; ++_0x39b3da) {
            (_0x2bbe09 = _0x6d1661.charCodeAt(_0x39b3da)) < 128 ? _0x5e4300[_0x117807++] = _0x2bbe09 : _0x2bbe09 < 2048 ? (_0x5e4300[_0x117807++] = _0x2bbe09 >> 6 | 192, _0x5e4300[_0x117807++] = 63 & _0x2bbe09 | 128) : 55296 == (64512 & _0x2bbe09) && 56320 == (64512 & (_0x2fa2b5 = _0x6d1661.charCodeAt(_0x39b3da + 1))) ? (_0x2bbe09 = 65536 + ((1023 & _0x2bbe09) << 10) + (1023 & _0x2fa2b5), ++_0x39b3da, _0x5e4300[_0x117807++] = _0x2bbe09 >> 18 | 240, _0x5e4300[_0x117807++] = _0x2bbe09 >> 12 & 63 | 128, _0x5e4300[_0x117807++] = _0x2bbe09 >> 6 & 63 | 128, _0x5e4300[_0x117807++] = 63 & _0x2bbe09 | 128) : (_0x5e4300[_0x117807++] = _0x2bbe09 >> 12 | 224, _0x5e4300[_0x117807++] = _0x2bbe09 >> 6 & 63 | 128, _0x5e4300[_0x117807++] = 63 & _0x2bbe09 | 128);
          }
          return _0x117807 - _0xa6eeef;
        };
        _0x35670a.exports;
      }, {});
      var _0xc07615 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/pool/index.js";
      _0x1bbca6.define(_0xc07615, function (_0x14d21e, _0x245497, _0x11f5ab, _0x3f3e0b, _0x50d4f8) {
        _0x11f5ab.exports = function (_0x394fd, _0x2540ae, _0x4d5213) {
          var _0x2732ed = _0x4d5213 || 8192;
          var _0x8f39a4 = _0x2732ed >>> 1;
          var _0x457735 = null;
          var _0x372964 = _0x2732ed;
          return function (_0x4dec49) {
            if (_0x4dec49 < 1 || _0x4dec49 > _0x8f39a4) {
              return _0x394fd(_0x4dec49);
            }
            _0x372964 + _0x4dec49 > _0x2732ed && (_0x457735 = _0x394fd(_0x2732ed), _0x372964 = 0);
            var _0x79fb86 = _0x2540ae.call(_0x457735, _0x372964, _0x372964 += _0x4dec49);
            7 & _0x372964 && (_0x372964 = 1 + (7 | _0x372964));
            return _0x79fb86;
          };
        };
        _0x11f5ab.exports;
      }, {});
      var _0xbaff1 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/util/longbits.js";
      _0x1bbca6.define(_0xbaff1, function (_0x29a7b4, _0x18dd80, _0x437f61, _0x118182, _0x7f3b13) {
        _0x437f61.exports = _0x21e3bc;
        var _0x5381f5 = _0x18dd80("../util/minimal");
        function _0x21e3bc(_0x2c33c7, _0x285766) {
          this.lo = _0x2c33c7 >>> 0;
          this.hi = _0x285766 >>> 0;
        }
        _0x21e3bc.zero = new _0x21e3bc(0, 0)
        var _0x3b1a21 = _0x21e3bc.zero;
        _0x3b1a21.toNumber = function () {
          return 0;
        };
        _0x3b1a21.zzEncode = _0x3b1a21.zzDecode = function () {
          return this;
        };
        _0x3b1a21.length = function () {
          return 1;
        };
        _0x21e3bc.zeroHash = "\0\0\0\0\0\0\0\0"
        var _0xdc18bf = _0x21e3bc.zeroHash;
        _0x21e3bc.fromNumber = function (_0x5006ec) {
          if (0 === _0x5006ec) {
            return _0x3b1a21;
          }
          var _0x3bd8d9 = _0x5006ec < 0;
          _0x3bd8d9 && (_0x5006ec = -_0x5006ec);
          var _0x5caec3 = _0x5006ec >>> 0;
          var _0x57157c = (_0x5006ec - _0x5caec3) / 4294967296 >>> 0;
          _0x3bd8d9 && (_0x57157c = ~_0x57157c >>> 0, _0x5caec3 = ~_0x5caec3 >>> 0, ++_0x5caec3 > 4294967295 && (_0x5caec3 = 0, ++_0x57157c > 4294967295 && (_0x57157c = 0)));
          return new _0x21e3bc(_0x5caec3, _0x57157c);
        };
        _0x21e3bc.from = function (_0x1ff190) {
          if ("number" == typeof _0x1ff190) {
            return _0x21e3bc.fromNumber(_0x1ff190);
          }
          if (_0x5381f5.isString(_0x1ff190)) {
            if (!_0x5381f5.Long) {
              return _0x21e3bc.fromNumber(parseInt(_0x1ff190, 10));
            }
            _0x1ff190 = _0x5381f5.Long.fromString(_0x1ff190);
          }
          return _0x1ff190.low || _0x1ff190.high ? new _0x21e3bc(_0x1ff190.low >>> 0, _0x1ff190.high >>> 0) : _0x3b1a21;
        };
        _0x21e3bc.prototype.toNumber = function (_0x511342) {
          if (!_0x511342 && this.hi >>> 31) {
            var _0x32b207 = 1 + ~this.lo >>> 0;
            var _0x46ff17 = ~this.hi >>> 0;
            _0x32b207 || (_0x46ff17 = _0x46ff17 + 1 >>> 0);
            return -(_0x32b207 + 4294967296 * _0x46ff17);
          }
          return this.lo + 4294967296 * this.hi;
        };
        _0x21e3bc.prototype.toLong = function (_0x56e357) {
          return _0x5381f5.Long ? new _0x5381f5.Long(0 | this.lo, 0 | this.hi, Boolean(_0x56e357)) : {
            low: 0 | this.lo,
            high: 0 | this.hi,
            unsigned: Boolean(_0x56e357)
          };
        };
        var _0x1bc942 = String.prototype.charCodeAt;
        _0x21e3bc.fromHash = function (_0x2e4322) {
          return _0x2e4322 === _0xdc18bf ? _0x3b1a21 : new _0x21e3bc((_0x1bc942.call(_0x2e4322, 0) | _0x1bc942.call(_0x2e4322, 1) << 8 | _0x1bc942.call(_0x2e4322, 2) << 16 | _0x1bc942.call(_0x2e4322, 3) << 24) >>> 0, (_0x1bc942.call(_0x2e4322, 4) | _0x1bc942.call(_0x2e4322, 5) << 8 | _0x1bc942.call(_0x2e4322, 6) << 16 | _0x1bc942.call(_0x2e4322, 7) << 24) >>> 0);
        };
        _0x21e3bc.prototype.toHash = function () {
          return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
        };
        _0x21e3bc.prototype.zzEncode = function () {
          var _0x54c262 = this.hi >> 31;
          this.hi = ((this.hi << 1 | this.lo >>> 31) ^ _0x54c262) >>> 0;
          this.lo = (this.lo << 1 ^ _0x54c262) >>> 0;
          return this;
        };
        _0x21e3bc.prototype.zzDecode = function () {
          var _0x13a3ea = -(1 & this.lo);
          this.lo = ((this.lo >>> 1 | this.hi << 31) ^ _0x13a3ea) >>> 0;
          this.hi = (this.hi >>> 1 ^ _0x13a3ea) >>> 0;
          return this;
        };
        _0x21e3bc.prototype.length = function () {
          var _0x26713a = this.lo;
          var _0xb2579d = (this.lo >>> 28 | this.hi << 4) >>> 0;
          var _0x5d3b36 = this.hi >>> 24;
          return 0 === _0x5d3b36 ? 0 === _0xb2579d ? _0x26713a < 16384 ? _0x26713a < 128 ? 1 : 2 : _0x26713a < 2097152 ? 3 : 4 : _0xb2579d < 16384 ? _0xb2579d < 128 ? 5 : 6 : _0xb2579d < 2097152 ? 7 : 8 : _0x5d3b36 < 128 ? 9 : 10;
        };
        _0x437f61.exports;
      }, function () {
        return {
          "../util/minimal": _0x543f65
        };
      });
      var _0x543f65 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/util/minimal.js";
      _0x1bbca6.define(_0x543f65, function (_0x2f5241, _0x55cbe2, _0x1c2022, _0x11bce1, _0x138cd8) {
        var _0x4ef683 = _0x2f5241;
        function _0x567b94(_0x8a7148, _0x5e0872, _0xec81ed) {
          for (var _0x4c3556 = Object.keys(_0x5e0872), _0x2a7295 = 0; _0x2a7295 < _0x4c3556.length; ++_0x2a7295) {
            undefined !== _0x8a7148[_0x4c3556[_0x2a7295]] && _0xec81ed || (_0x8a7148[_0x4c3556[_0x2a7295]] = _0x5e0872[_0x4c3556[_0x2a7295]]);
          }
          return _0x8a7148;
        }
        function _0x2c20bd(_0x10e2e7) {
          function _0x1503a9(_0x538b26, _0x52bfc4) {
            if (!(this instanceof _0x1503a9)) {
              return new _0x1503a9(_0x538b26, _0x52bfc4);
            }
            Object.defineProperty(this, "message", {
              get: function () {
                return _0x538b26;
              }
            });
            Error.captureStackTrace ? Error.captureStackTrace(this, _0x1503a9) : Object.defineProperty(this, "stack", {
              value: new Error().stack || ""
            });
            _0x52bfc4 && _0x567b94(this, _0x52bfc4);
          }
          (_0x1503a9.prototype = Object.create(Error.prototype)).constructor = _0x1503a9;
          Object.defineProperty(_0x1503a9.prototype, "name", {
            get: function () {
              return _0x10e2e7;
            }
          });
          _0x1503a9.prototype.toString = function () {
            return this.name + ": " + this.message;
          };
          return _0x1503a9;
        }
        _0x4ef683.asPromise = _0x55cbe2("@protobufjs/aspromise");
        _0x4ef683.base64 = _0x55cbe2("@protobufjs/base64");
        _0x4ef683.EventEmitter = _0x55cbe2("@protobufjs/eventemitter");
        _0x4ef683.float = _0x55cbe2("@protobufjs/float");
        _0x4ef683.inquire = _0x55cbe2("@protobufjs/inquire");
        _0x4ef683.utf8 = _0x55cbe2("@protobufjs/utf8");
        _0x4ef683.pool = _0x55cbe2("@protobufjs/pool");
        _0x4ef683.LongBits = _0x55cbe2("./longbits");
        _0x4ef683.isNode = Boolean("undefined" != typeof global && global && global.process && global.process.versions && global.process.versions.node);
        _0x4ef683.global = _0x4ef683.isNode && global || "undefined" != typeof window && window || "undefined" != typeof self && self || this;
        _0x4ef683.emptyArray = Object.freeze ? Object.freeze([]) : [];
        _0x4ef683.emptyObject = Object.freeze ? Object.freeze({}) : {};
        _0x4ef683.isInteger = Number.isInteger || function (_0xf60645) {
          return "number" == typeof _0xf60645 && isFinite(_0xf60645) && Math.floor(_0xf60645) === _0xf60645;
        };
        _0x4ef683.isString = function (_0x374cde) {
          return "string" == typeof _0x374cde || _0x374cde instanceof String;
        };
        _0x4ef683.isObject = function (_0x4fcd82) {
          return _0x4fcd82 && "object" == typeof _0x4fcd82;
        };
        _0x4ef683.isset = _0x4ef683.isSet = function (_0x27e86f, _0x456ce9) {
          var _0x5d0122 = _0x27e86f[_0x456ce9];
          return !(null == _0x5d0122 || !_0x27e86f.hasOwnProperty(_0x456ce9)) && ("object" != typeof _0x5d0122 || (Array.isArray(_0x5d0122) ? _0x5d0122.length : Object.keys(_0x5d0122).length) > 0);
        };
        _0x4ef683.Buffer = function () {
          try {
            var _0x37a984 = _0x4ef683.inquire("buffer").Buffer;
            return _0x37a984.prototype.utf8Write ? _0x37a984 : null;
          } catch (_0x2fabc6) {
            return null;
          }
        }();
        _0x4ef683._Buffer_from = null;
        _0x4ef683._Buffer_allocUnsafe = null;
        _0x4ef683.newBuffer = function (_0xa537b0) {
          return "number" == typeof _0xa537b0 ? _0x4ef683.Buffer ? _0x4ef683._Buffer_allocUnsafe(_0xa537b0) : new _0x4ef683.Array(_0xa537b0) : _0x4ef683.Buffer ? _0x4ef683._Buffer_from(_0xa537b0) : "undefined" == typeof Uint8Array ? _0xa537b0 : new Uint8Array(_0xa537b0);
        };
        _0x4ef683.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array;
        _0x4ef683.Long = _0x4ef683.global.dcodeIO && _0x4ef683.global.dcodeIO.Long || _0x4ef683.global.Long || _0x4ef683.inquire("long");
        _0x4ef683.key2Re = /^true|false|0|1$/;
        _0x4ef683.key32Re = /^-?(?:0|[1-9][0-9]*)$/;
        _0x4ef683.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;
        _0x4ef683.longToHash = function (_0x4ce471) {
          return _0x4ce471 ? _0x4ef683.LongBits.from(_0x4ce471).toHash() : _0x4ef683.LongBits.zeroHash;
        };
        _0x4ef683.longFromHash = function (_0x3c143d, _0x1b909d) {
          var _0x45c679 = _0x4ef683.LongBits.fromHash(_0x3c143d);
          return _0x4ef683.Long ? _0x4ef683.Long.fromBits(_0x45c679.lo, _0x45c679.hi, _0x1b909d) : _0x45c679.toNumber(Boolean(_0x1b909d));
        };
        _0x4ef683.merge = _0x567b94;
        _0x4ef683.lcFirst = function (_0x4e395b) {
          return _0x4e395b.charAt(0).toLowerCase() + _0x4e395b.substring(1);
        };
        _0x4ef683.newError = _0x2c20bd;
        _0x4ef683.ProtocolError = _0x2c20bd("ProtocolError");
        _0x4ef683.oneOfGetter = function (_0x5f3243) {
          for (var _0x1b7377 = {}, _0x41ef71 = 0; _0x41ef71 < _0x5f3243.length; ++_0x41ef71) {
            _0x1b7377[_0x5f3243[_0x41ef71]] = 1;
          }
          return function () {
            for (var _0x522f9e = Object.keys(this), _0x4f6e2a = _0x522f9e.length - 1; _0x4f6e2a > -1; --_0x4f6e2a) {
              if (1 === _0x1b7377[_0x522f9e[_0x4f6e2a]] && undefined !== this[_0x522f9e[_0x4f6e2a]] && null !== this[_0x522f9e[_0x4f6e2a]]) {
                return _0x522f9e[_0x4f6e2a];
              }
            }
          };
        };
        _0x4ef683.oneOfSetter = function (_0x2ab7e9) {
          return function (_0x36961f) {
            for (var _0x48b92c = 0; _0x48b92c < _0x2ab7e9.length; ++_0x48b92c) {
              _0x2ab7e9[_0x48b92c] !== _0x36961f && delete this[_0x2ab7e9[_0x48b92c]];
            }
          };
        };
        _0x4ef683.toJSONOptions = {
          longs: String,
          enums: String,
          bytes: String,
          json: true
        };
        _0x4ef683._configure = function () {
          var _0x4a0245 = _0x4ef683.Buffer;
          _0x4a0245 ? (_0x4ef683._Buffer_from = _0x4a0245.from !== Uint8Array.from && _0x4a0245.from || function (_0x2e01ba, _0x503d59) {
            return new _0x4a0245(_0x2e01ba, _0x503d59);
          }, _0x4ef683._Buffer_allocUnsafe = _0x4a0245.allocUnsafe || function (_0x1bd703) {
            return new _0x4a0245(_0x1bd703);
          }) : _0x4ef683._Buffer_from = _0x4ef683._Buffer_allocUnsafe = null;
        };
        _0x1c2022.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": _0x43d57d,
          "@protobufjs/base64": _0x3b0393,
          "@protobufjs/eventemitter": _0x2beba2,
          "@protobufjs/float": _0x522241,
          "@protobufjs/inquire": _0x5c8a72,
          "@protobufjs/utf8": _0x332b91,
          "@protobufjs/pool": _0xc07615,
          "./longbits": _0xbaff1
        };
      });
      var _0x2f6b70 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/writer.js";
      _0x1bbca6.define(_0x2f6b70, function (_0x55909b, _0x42cb2a, _0xe9d3d3, _0x1f2a91, _0x39c1fb) {
        _0xe9d3d3.exports = _0xb20bcc;
        var _0x54a387;
        var _0x4a15b9 = _0x42cb2a("./util/minimal");
        var _0x4208ed = _0x4a15b9.LongBits;
        var _0x1f5541 = _0x4a15b9.base64;
        var _0x49b4ce = _0x4a15b9.utf8;
        function _0x31680c(_0x4de7cd, _0x41255e, _0x1d32b9) {
          this.fn = _0x4de7cd;
          this.len = _0x41255e;
          this.next = undefined;
          this.val = _0x1d32b9;
        }
        function _0x3513d8() {}
        function _0x151c36(_0xd324fa) {
          this.head = _0xd324fa.head;
          this.tail = _0xd324fa.tail;
          this.len = _0xd324fa.len;
          this.next = _0xd324fa.states;
        }
        function _0xb20bcc() {
          this.len = 0;
          this.head = new _0x31680c(_0x3513d8, 0, 0);
          this.tail = this.head;
          this.states = null;
        }
        var _0x4af51a = function () {
          return _0x4a15b9.Buffer ? function () {
            return (_0xb20bcc.create = function () {
              return new _0x54a387();
            })();
          } : function () {
            return new _0xb20bcc();
          };
        };
        function _0x319dbd(_0x6f3340, _0x5738ba, _0x352fb2) {
          _0x5738ba[_0x352fb2] = 255 & _0x6f3340;
        }
        function _0x1d0367(_0x58cde4, _0x196dcc) {
          this.len = _0x58cde4;
          this.next = undefined;
          this.val = _0x196dcc;
        }
        function _0x3314a8(_0x1c042d, _0x1f75a0, _0x8e4bb4) {
          for (; _0x1c042d.hi;) {
            _0x1f75a0[_0x8e4bb4++] = 127 & _0x1c042d.lo | 128;
            _0x1c042d.lo = (_0x1c042d.lo >>> 7 | _0x1c042d.hi << 25) >>> 0;
            _0x1c042d.hi >>>= 7;
          }
          for (; _0x1c042d.lo > 127;) {
            _0x1f75a0[_0x8e4bb4++] = 127 & _0x1c042d.lo | 128;
            _0x1c042d.lo = _0x1c042d.lo >>> 7;
          }
          _0x1f75a0[_0x8e4bb4++] = _0x1c042d.lo;
        }
        function _0xc25e7d(_0x531c6e, _0x5153d4, _0x461f40) {
          _0x5153d4[_0x461f40] = 255 & _0x531c6e;
          _0x5153d4[_0x461f40 + 1] = _0x531c6e >>> 8 & 255;
          _0x5153d4[_0x461f40 + 2] = _0x531c6e >>> 16 & 255;
          _0x5153d4[_0x461f40 + 3] = _0x531c6e >>> 24;
        }
        _0xb20bcc.create = _0x4af51a();
        _0xb20bcc.alloc = function (_0x12a9bc) {
          return new _0x4a15b9.Array(_0x12a9bc);
        };
        _0x4a15b9.Array !== Array && (_0xb20bcc.alloc = _0x4a15b9.pool(_0xb20bcc.alloc, _0x4a15b9.Array.prototype.subarray));
        _0xb20bcc.prototype._push = function (_0x5330ed, _0x382529, _0x1c6226) {
          this.tail = this.tail.next = new _0x31680c(_0x5330ed, _0x382529, _0x1c6226);
          this.len += _0x382529;
          return this;
        };
        _0x1d0367.prototype = Object.create(_0x31680c.prototype);
        _0x1d0367.prototype.fn = function (_0x116677, _0x52df3f, _0x574b6b) {
          for (; _0x116677 > 127;) {
            _0x52df3f[_0x574b6b++] = 127 & _0x116677 | 128;
            _0x116677 >>>= 7;
          }
          _0x52df3f[_0x574b6b] = _0x116677;
        };
        _0xb20bcc.prototype.uint32 = function (_0x102ec6) {
          this.len += (this.tail = this.tail.next = new _0x1d0367((_0x102ec6 >>>= 0) < 128 ? 1 : _0x102ec6 < 16384 ? 2 : _0x102ec6 < 2097152 ? 3 : _0x102ec6 < 268435456 ? 4 : 5, _0x102ec6)).len;
          return this;
        };
        _0xb20bcc.prototype.int32 = function (_0x50783f) {
          return _0x50783f < 0 ? this._push(_0x3314a8, 10, _0x4208ed.fromNumber(_0x50783f)) : this.uint32(_0x50783f);
        };
        _0xb20bcc.prototype.sint32 = function (_0x270eb9) {
          return this.uint32((_0x270eb9 << 1 ^ _0x270eb9 >> 31) >>> 0);
        };
        _0xb20bcc.prototype.uint64 = function (_0x4d5f40) {
          var _0x2b9d66 = _0x4208ed.from(_0x4d5f40);
          return this._push(_0x3314a8, _0x2b9d66.length(), _0x2b9d66);
        };
        _0xb20bcc.prototype.int64 = _0xb20bcc.prototype.uint64;
        _0xb20bcc.prototype.sint64 = function (_0x44df14) {
          var _0x4f6e93 = _0x4208ed.from(_0x44df14).zzEncode();
          return this._push(_0x3314a8, _0x4f6e93.length(), _0x4f6e93);
        };
        _0xb20bcc.prototype.bool = function (_0x1358ea) {
          return this._push(_0x319dbd, 1, _0x1358ea ? 1 : 0);
        };
        _0xb20bcc.prototype.fixed32 = function (_0x380e91) {
          return this._push(_0xc25e7d, 4, _0x380e91 >>> 0);
        };
        _0xb20bcc.prototype.sfixed32 = _0xb20bcc.prototype.fixed32;
        _0xb20bcc.prototype.fixed64 = function (_0x2f974f) {
          var _0x77489f = _0x4208ed.from(_0x2f974f);
          return this._push(_0xc25e7d, 4, _0x77489f.lo)._push(_0xc25e7d, 4, _0x77489f.hi);
        };
        _0xb20bcc.prototype.sfixed64 = _0xb20bcc.prototype.fixed64;
        _0xb20bcc.prototype.float = function (_0x5beeac) {
          return this._push(_0x4a15b9.float.writeFloatLE, 4, _0x5beeac);
        };
        _0xb20bcc.prototype.double = function (_0x1a1337) {
          return this._push(_0x4a15b9.float.writeDoubleLE, 8, _0x1a1337);
        };
        var _0x4ba769 = _0x4a15b9.Array.prototype.set ? function (_0x2ba8a3, _0x5f00ab, _0x3bc9fe) {
          _0x5f00ab.set(_0x2ba8a3, _0x3bc9fe);
        } : function (_0x47b585, _0x38fa8a, _0x553274) {
          for (var _0x4e8f9e = 0; _0x4e8f9e < _0x47b585.length; ++_0x4e8f9e) {
            _0x38fa8a[_0x553274 + _0x4e8f9e] = _0x47b585[_0x4e8f9e];
          }
        };
        _0xb20bcc.prototype.bytes = function (_0x4406b5) {
          var _0x572e2f = _0x4406b5.length >>> 0;
          if (!_0x572e2f) {
            return this._push(_0x319dbd, 1, 0);
          }
          if (_0x4a15b9.isString(_0x4406b5)) {
            var _0x45cf10 = _0xb20bcc.alloc(_0x572e2f = _0x1f5541.length(_0x4406b5));
            _0x1f5541.decode(_0x4406b5, _0x45cf10, 0);
            _0x4406b5 = _0x45cf10;
          }
          return this.uint32(_0x572e2f)._push(_0x4ba769, _0x572e2f, _0x4406b5);
        };
        _0xb20bcc.prototype.string = function (_0x57bf18) {
          var _0x341f0e = _0x49b4ce.length(_0x57bf18);
          return _0x341f0e ? this.uint32(_0x341f0e)._push(_0x49b4ce.write, _0x341f0e, _0x57bf18) : this._push(_0x319dbd, 1, 0);
        };
        _0xb20bcc.prototype.fork = function () {
          this.states = new _0x151c36(this);
          this.head = this.tail = new _0x31680c(_0x3513d8, 0, 0);
          this.len = 0;
          return this;
        };
        _0xb20bcc.prototype.reset = function () {
          this.states ? (this.head = this.states.head, this.tail = this.states.tail, this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new _0x31680c(_0x3513d8, 0, 0), this.len = 0);
          return this;
        };
        _0xb20bcc.prototype.ldelim = function () {
          var _0x59c8a6 = this.head;
          var _0x32d835 = this.tail;
          var _0x368e4d = this.len;
          this.reset().uint32(_0x368e4d);
          _0x368e4d && (this.tail.next = _0x59c8a6.next, this.tail = _0x32d835, this.len += _0x368e4d);
          return this;
        };
        _0xb20bcc.prototype.finish = function () {
          for (var _0x33daf0 = this.head.next, _0x3416b2 = this.constructor.alloc(this.len), _0x1bbf5e = 0; _0x33daf0;) {
            _0x33daf0.fn(_0x33daf0.val, _0x3416b2, _0x1bbf5e);
            _0x1bbf5e += _0x33daf0.len;
            _0x33daf0 = _0x33daf0.next;
          }
          return _0x3416b2;
        };
        _0xb20bcc._configure = function (_0x401536) {
          _0x54a387 = _0x401536;
          _0xb20bcc.create = _0x4af51a();
          _0x54a387._configure();
        };
        _0xe9d3d3.exports;
      }, function () {
        return {
          "./util/minimal": _0x543f65
        };
      });
      var _0x67607b = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/writer_buffer.js";
      _0x1bbca6.define(_0x67607b, function (_0x20dd99, _0x1b0c1c, _0x530b19, _0x211651, _0x1de00a) {
        _0x530b19.exports = _0x55ca12;
        var _0x40f14b = _0x1b0c1c("./writer");
        (_0x55ca12.prototype = Object.create(_0x40f14b.prototype)).constructor = _0x55ca12;
        var _0x6c7690 = _0x1b0c1c("./util/minimal");
        function _0x55ca12() {
          _0x40f14b.call(this);
        }
        function _0x2f41b4(_0x16a046, _0x433571, _0x42683e) {
          _0x16a046.length < 40 ? _0x6c7690.utf8.write(_0x16a046, _0x433571, _0x42683e) : _0x433571.utf8Write ? _0x433571.utf8Write(_0x16a046, _0x42683e) : _0x433571.write(_0x16a046, _0x42683e);
        }
        _0x55ca12._configure = function () {
          _0x55ca12.alloc = _0x6c7690._Buffer_allocUnsafe;
          _0x55ca12.writeBytesBuffer = _0x6c7690.Buffer && _0x6c7690.Buffer.prototype instanceof Uint8Array && "set" === _0x6c7690.Buffer.prototype.set.name ? function (_0x4c3083, _0x5a847a, _0x2b93e8) {
            _0x5a847a.set(_0x4c3083, _0x2b93e8);
          } : function (_0x15dbcf, _0x33f816, _0x5d5608) {
            if (_0x15dbcf.copy) {
              _0x15dbcf.copy(_0x33f816, _0x5d5608, 0, _0x15dbcf.length);
            } else {
              for (var _0x361bd3 = 0; _0x361bd3 < _0x15dbcf.length;) {
                _0x33f816[_0x5d5608++] = _0x15dbcf[_0x361bd3++];
              }
            }
          };
        };
        _0x55ca12.prototype.bytes = function (_0x38daa1) {
          _0x6c7690.isString(_0x38daa1) && (_0x38daa1 = _0x6c7690._Buffer_from(_0x38daa1, "base64"));
          var _0x4f3fdb = _0x38daa1.length >>> 0;
          this.uint32(_0x4f3fdb);
          _0x4f3fdb && this._push(_0x55ca12.writeBytesBuffer, _0x4f3fdb, _0x38daa1);
          return this;
        };
        _0x55ca12.prototype.string = function (_0x37c131) {
          var _0x529531 = _0x6c7690.Buffer.byteLength(_0x37c131);
          this.uint32(_0x529531);
          _0x529531 && this._push(_0x2f41b4, _0x529531, _0x37c131);
          return this;
        };
        _0x55ca12._configure();
        _0x530b19.exports;
      }, function () {
        return {
          "./writer": _0x2f6b70,
          "./util/minimal": _0x543f65
        };
      });
      var _0x91b9e2 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/reader.js";
      _0x1bbca6.define(_0x91b9e2, function (_0x50f978, _0x1ce7ff, _0x31055a, _0x309bb1, _0x3501cc) {
        _0x31055a.exports = _0x5f3dba;
        var _0x90154a;
        var _0x569d6c = _0x1ce7ff("./util/minimal");
        var _0x3cb26f = _0x569d6c.LongBits;
        var _0x4cfc06 = _0x569d6c.utf8;
        function _0x102676(_0x42bbc6, _0x461cff) {
          return RangeError("index out of range: " + _0x42bbc6.pos + " + " + (_0x461cff || 1) + " > " + _0x42bbc6.len);
        }
        function _0x5f3dba(_0x3de720) {
          this.buf = _0x3de720;
          this.pos = 0;
          this.len = _0x3de720.length;
        }
        var _0x125eac;
        var _0x306c43 = "undefined" != typeof Uint8Array ? function (_0x366484) {
          if (_0x366484 instanceof Uint8Array || Array.isArray(_0x366484)) {
            return new _0x5f3dba(_0x366484);
          }
          throw Error("illegal buffer");
        } : function (_0x1a4ea2) {
          if (Array.isArray(_0x1a4ea2)) {
            return new _0x5f3dba(_0x1a4ea2);
          }
          throw Error("illegal buffer");
        };
        var _0x5d7558 = function () {
          return _0x569d6c.Buffer ? function (_0x3fbd47) {
            return (_0x5f3dba.create = function (_0x3c5e74) {
              return _0x569d6c.Buffer.isBuffer(_0x3c5e74) ? new _0x90154a(_0x3c5e74) : _0x306c43(_0x3c5e74);
            })(_0x3fbd47);
          } : _0x306c43;
        };
        function _0x2e82a6() {
          var _0x36fbe4 = new _0x3cb26f(0, 0);
          var _0x4b0257 = 0;
          if (!(this.len - this.pos > 4)) {
            for (; _0x4b0257 < 3; ++_0x4b0257) {
              if (this.pos >= this.len) {
                throw _0x102676(this);
              }
              if (_0x36fbe4.lo = (_0x36fbe4.lo | (127 & this.buf[this.pos]) << 7 * _0x4b0257) >>> 0, this.buf[this.pos++] < 128) {
                return _0x36fbe4;
              }
            }
            _0x36fbe4.lo = (_0x36fbe4.lo | (127 & this.buf[this.pos++]) << 7 * _0x4b0257) >>> 0;
            return _0x36fbe4;
          }
          for (; _0x4b0257 < 4; ++_0x4b0257) {
            if (_0x36fbe4.lo = (_0x36fbe4.lo | (127 & this.buf[this.pos]) << 7 * _0x4b0257) >>> 0, this.buf[this.pos++] < 128) {
              return _0x36fbe4;
            }
          }
          if (_0x36fbe4.lo = (_0x36fbe4.lo | (127 & this.buf[this.pos]) << 28) >>> 0, _0x36fbe4.hi = (_0x36fbe4.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, this.buf[this.pos++] < 128) {
            return _0x36fbe4;
          }
          if (_0x4b0257 = 0, this.len - this.pos > 4) {
            for (; _0x4b0257 < 5; ++_0x4b0257) {
              if (_0x36fbe4.hi = (_0x36fbe4.hi | (127 & this.buf[this.pos]) << 7 * _0x4b0257 + 3) >>> 0, this.buf[this.pos++] < 128) {
                return _0x36fbe4;
              }
            }
          } else {
            for (; _0x4b0257 < 5; ++_0x4b0257) {
              if (this.pos >= this.len) {
                throw _0x102676(this);
              }
              if (_0x36fbe4.hi = (_0x36fbe4.hi | (127 & this.buf[this.pos]) << 7 * _0x4b0257 + 3) >>> 0, this.buf[this.pos++] < 128) {
                return _0x36fbe4;
              }
            }
          }
          throw Error("invalid varint encoding");
        }
        function _0x5484d0(_0x4c0044, _0x3e83a1) {
          return (_0x4c0044[_0x3e83a1 - 4] | _0x4c0044[_0x3e83a1 - 3] << 8 | _0x4c0044[_0x3e83a1 - 2] << 16 | _0x4c0044[_0x3e83a1 - 1] << 24) >>> 0;
        }
        function _0x128279() {
          if (this.pos + 8 > this.len) {
            throw _0x102676(this, 8);
          }
          return new _0x3cb26f(_0x5484d0(this.buf, this.pos += 4), _0x5484d0(this.buf, this.pos += 4));
        }
        _0x5f3dba.create = _0x5d7558();
        _0x5f3dba.prototype._slice = _0x569d6c.Array.prototype.subarray || _0x569d6c.Array.prototype.slice;
        _0x5f3dba.prototype.uint32 = (_0x125eac = 4294967295, function () {
          if (_0x125eac = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128) {
            return _0x125eac;
          }
          if (_0x125eac = (_0x125eac | (127 & this.buf[this.pos]) << 7) >>> 0, this.buf[this.pos++] < 128) {
            return _0x125eac;
          }
          if (_0x125eac = (_0x125eac | (127 & this.buf[this.pos]) << 14) >>> 0, this.buf[this.pos++] < 128) {
            return _0x125eac;
          }
          if (_0x125eac = (_0x125eac | (127 & this.buf[this.pos]) << 21) >>> 0, this.buf[this.pos++] < 128) {
            return _0x125eac;
          }
          if (_0x125eac = (_0x125eac | (15 & this.buf[this.pos]) << 28) >>> 0, this.buf[this.pos++] < 128) {
            return _0x125eac;
          }
          if ((this.pos += 5) > this.len) {
            throw this.pos = this.len, _0x102676(this, 10);
          }
          return _0x125eac;
        });
        _0x5f3dba.prototype.int32 = function () {
          return 0 | this.uint32();
        };
        _0x5f3dba.prototype.sint32 = function () {
          var _0x365106 = this.uint32();
          return _0x365106 >>> 1 ^ -(1 & _0x365106) | 0;
        };
        _0x5f3dba.prototype.bool = function () {
          return 0 !== this.uint32();
        };
        _0x5f3dba.prototype.fixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw _0x102676(this, 4);
          }
          return _0x5484d0(this.buf, this.pos += 4);
        };
        _0x5f3dba.prototype.sfixed32 = function () {
          if (this.pos + 4 > this.len) {
            throw _0x102676(this, 4);
          }
          return 0 | _0x5484d0(this.buf, this.pos += 4);
        };
        _0x5f3dba.prototype.float = function () {
          if (this.pos + 4 > this.len) {
            throw _0x102676(this, 4);
          }
          var _0xbd2bc3 = _0x569d6c.float.readFloatLE(this.buf, this.pos);
          this.pos += 4;
          return _0xbd2bc3;
        };
        _0x5f3dba.prototype.double = function () {
          if (this.pos + 8 > this.len) {
            throw _0x102676(this, 4);
          }
          var _0x169b1e = _0x569d6c.float.readDoubleLE(this.buf, this.pos);
          this.pos += 8;
          return _0x169b1e;
        };
        _0x5f3dba.prototype.bytes = function () {
          var _0x386b26 = this.uint32();
          var _0x22fea4 = this.pos;
          var _0x4cc8a6 = this.pos + _0x386b26;
          if (_0x4cc8a6 > this.len) {
            throw _0x102676(this, _0x386b26);
          }
          this.pos += _0x386b26;
          return Array.isArray(this.buf) ? this.buf.slice(_0x22fea4, _0x4cc8a6) : _0x22fea4 === _0x4cc8a6 ? new this.buf.constructor(0) : this._slice.call(this.buf, _0x22fea4, _0x4cc8a6);
        };
        _0x5f3dba.prototype.string = function () {
          var _0xb0c0e2 = this.bytes();
          return _0x4cfc06.read(_0xb0c0e2, 0, _0xb0c0e2.length);
        };
        _0x5f3dba.prototype.skip = function (_0x4e1742) {
          if ("number" == typeof _0x4e1742) {
            if (this.pos + _0x4e1742 > this.len) {
              throw _0x102676(this, _0x4e1742);
            }
            this.pos += _0x4e1742;
          } else {
            do {
              if (this.pos >= this.len) {
                throw _0x102676(this);
              }
            } while (128 & this.buf[this.pos++]);
          }
          return this;
        };
        _0x5f3dba.prototype.skipType = function (_0x2a3960) {
          switch (_0x2a3960) {
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
              for (; 4 != (_0x2a3960 = 7 & this.uint32());) {
                this.skipType(_0x2a3960);
              }
              break;
            case 5:
              this.skip(4);
              break;
            default:
              throw Error("invalid wire type " + _0x2a3960 + " at offset " + this.pos);
          }
          return this;
        };
        _0x5f3dba._configure = function (_0x481dca) {
          _0x90154a = _0x481dca;
          _0x5f3dba.create = _0x5d7558();
          _0x90154a._configure();
          var _0x3f4299 = _0x569d6c.Long ? "toLong" : "toNumber";
          _0x569d6c.merge(_0x5f3dba.prototype, {
            int64: function () {
              return _0x2e82a6.call(this)[_0x3f4299](false);
            },
            uint64: function () {
              return _0x2e82a6.call(this)[_0x3f4299](true);
            },
            sint64: function () {
              return _0x2e82a6.call(this).zzDecode()[_0x3f4299](false);
            },
            fixed64: function () {
              return _0x128279.call(this)[_0x3f4299](true);
            },
            sfixed64: function () {
              return _0x128279.call(this)[_0x3f4299](false);
            }
          });
        };
        _0x31055a.exports;
      }, function () {
        return {
          "./util/minimal": _0x543f65
        };
      });
      var _0x297cfd = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/reader_buffer.js";
      _0x1bbca6.define(_0x297cfd, function (_0x44bfc9, _0x2c6d0f, _0x2598c2, _0xae7c4e, _0x57b215) {
        _0x2598c2.exports = _0x808907;
        var _0x265c41 = _0x2c6d0f("./reader");
        (_0x808907.prototype = Object.create(_0x265c41.prototype)).constructor = _0x808907;
        var _0x3e5268 = _0x2c6d0f("./util/minimal");
        function _0x808907(_0x19c871) {
          _0x265c41.call(this, _0x19c871);
        }
        _0x808907._configure = function () {
          _0x3e5268.Buffer && (_0x808907.prototype._slice = _0x3e5268.Buffer.prototype.slice);
        };
        _0x808907.prototype.string = function () {
          var _0x3841f3 = this.uint32();
          return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + _0x3841f3, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + _0x3841f3, this.len));
        };
        _0x808907._configure();
        _0x2598c2.exports;
      }, function () {
        return {
          "./reader": _0x91b9e2,
          "./util/minimal": _0x543f65
        };
      });
      var _0x8c81 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/rpc/service.js";
      _0x1bbca6.define(_0x8c81, function (_0x1c3620, _0x110b33, _0x2eb2d8, _0x49c7fd, _0x107711) {
        _0x2eb2d8.exports = _0x562b38;
        var _0x5884b9 = _0x110b33("../util/minimal");
        function _0x562b38(_0x4ac6cf, _0x4c6d36, _0x796540) {
          if ("function" != typeof _0x4ac6cf) {
            throw TypeError("rpcImpl must be a function");
          }
          _0x5884b9.EventEmitter.call(this);
          this.rpcImpl = _0x4ac6cf;
          this.requestDelimited = Boolean(_0x4c6d36);
          this.responseDelimited = Boolean(_0x796540);
        }
        (_0x562b38.prototype = Object.create(_0x5884b9.EventEmitter.prototype)).constructor = _0x562b38;
        _0x562b38.prototype.rpcCall = function _0x4450b1(_0x5965fc, _0x2f1b78, _0x763019, _0x50c0f7, _0x51fe1f) {
          if (!_0x50c0f7) {
            throw TypeError("request must be specified");
          }
          var _0x3e9518 = this;
          if (!_0x51fe1f) {
            return _0x5884b9.asPromise(_0x4450b1, _0x3e9518, _0x5965fc, _0x2f1b78, _0x763019, _0x50c0f7);
          }
          if (_0x3e9518.rpcImpl) {
            try {
              return _0x3e9518.rpcImpl(_0x5965fc, _0x2f1b78[_0x3e9518.requestDelimited ? "encodeDelimited" : "encode"](_0x50c0f7).finish(), function (_0x32b7d1, _0xea8233) {
                if (_0x32b7d1) {
                  _0x3e9518.emit("error", _0x32b7d1, _0x5965fc);
                  return _0x51fe1f(_0x32b7d1);
                }
                if (null !== _0xea8233) {
                  if (!(_0xea8233 instanceof _0x763019)) {
                    try {
                      _0xea8233 = _0x763019[_0x3e9518.responseDelimited ? "decodeDelimited" : "decode"](_0xea8233);
                    } catch (_0x3f0faf) {
                      _0x3e9518.emit("error", _0x3f0faf, _0x5965fc);
                      return _0x51fe1f(_0x3f0faf);
                    }
                  }
                  _0x3e9518.emit("data", _0xea8233, _0x5965fc);
                  return _0x51fe1f(null, _0xea8233);
                }
                _0x3e9518.end(true);
              });
            } catch (_0xfd983) {
              _0x3e9518.emit("error", _0xfd983, _0x5965fc);
              return void setTimeout(function () {
                _0x51fe1f(_0xfd983);
              }, 0);
            }
          } else {
            setTimeout(function () {
              _0x51fe1f(Error("already ended"));
            }, 0);
          }
        };
        _0x562b38.prototype.end = function (_0x5a121e) {
          this.rpcImpl && (_0x5a121e || this.rpcImpl(null, null, null), this.rpcImpl = null, this.emit("end").off());
          return this;
        };
        _0x2eb2d8.exports;
      }, function () {
        return {
          "../util/minimal": _0x543f65
        };
      });
      var _0x5d4286 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/rpc.js";
      _0x1bbca6.define(_0x5d4286, function (_0x4a2714, _0xa8032d, _0x177b79, _0x58269a, _0x2bb85d) {
        _0x4a2714.Service = _0xa8032d("./rpc/service");
        _0x177b79.exports;
      }, function () {
        return {
          "./rpc/service": _0x8c81
        };
      });
      var _0x46348b = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/roots.js";
      _0x1bbca6.define(_0x46348b, function (_0x25cb5f, _0x552d8c, _0x4447ad, _0x2441fd, _0xa4a82d) {
        _0x4447ad.exports = {};
        _0x4447ad.exports;
      }, {});
      var _0x5a9fc8 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/index-minimal.js";
      _0x1bbca6.define(_0x5a9fc8, function (_0x2a2914, _0x4e8f12, _0x545dc1, _0x1a2513, _0x298a91) {
        var _0x1160f2 = _0x2a2914;
        function _0x58e88b() {
          _0x1160f2.util._configure();
          _0x1160f2.Writer._configure(_0x1160f2.BufferWriter);
          _0x1160f2.Reader._configure(_0x1160f2.BufferReader);
        }
        _0x1160f2.build = "minimal";
        _0x1160f2.Writer = _0x4e8f12("./writer");
        _0x1160f2.BufferWriter = _0x4e8f12("./writer_buffer");
        _0x1160f2.Reader = _0x4e8f12("./reader");
        _0x1160f2.BufferReader = _0x4e8f12("./reader_buffer");
        _0x1160f2.util = _0x4e8f12("./util/minimal");
        _0x1160f2.rpc = _0x4e8f12("./rpc");
        _0x1160f2.roots = _0x4e8f12("./roots");
        _0x1160f2.configure = _0x58e88b;
        _0x58e88b();
        _0x545dc1.exports;
      }, function () {
        return {
          "./writer": _0x2f6b70,
          "./writer_buffer": _0x67607b,
          "./reader": _0x91b9e2,
          "./reader_buffer": _0x297cfd,
          "./util/minimal": _0x543f65,
          "./rpc": _0x5d4286,
          "./roots": _0x46348b
        };
      });
      var _0x4490e7 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/codegen/index.js";
      _0x1bbca6.define(_0x4490e7, function (_0x3c7f67, _0x30f34b, _0xac2aea, _0x2b754a, _0x27d5f2) {
        function _0x3b2f4f(_0x50cbad, _0x43556b) {
          "string" == typeof _0x50cbad && (_0x43556b = _0x50cbad, _0x50cbad = undefined);
          var _0x89c24d = [];
          function _0xe61537(_0x3e9d30) {
            if ("string" != typeof _0x3e9d30) {
              var _0x2409df = _0x1ce4e0();
              if (_0x3b2f4f.verbose && console.log("codegen: " + _0x2409df), _0x2409df = "return " + _0x2409df, _0x3e9d30) {
                for (var _0x5c9d4c = Object.keys(_0x3e9d30), _0x2fe874 = new Array(_0x5c9d4c.length + 1), _0x38ae86 = new Array(_0x5c9d4c.length), _0x129862 = 0; _0x129862 < _0x5c9d4c.length;) {
                  _0x2fe874[_0x129862] = _0x5c9d4c[_0x129862];
                  _0x38ae86[_0x129862] = _0x3e9d30[_0x5c9d4c[_0x129862++]];
                }
                _0x2fe874[_0x129862] = _0x2409df;
                return Function.apply(null, _0x2fe874).apply(null, _0x38ae86);
              }
              return Function(_0x2409df)();
            }
            for (var _0x165f2b = new Array(arguments.length - 1), _0x3cf67b = 0; _0x3cf67b < _0x165f2b.length;) {
              _0x165f2b[_0x3cf67b] = arguments[++_0x3cf67b];
            }
            if (_0x3cf67b = 0, _0x3e9d30 = _0x3e9d30.replace(/%([%dfijs])/g, function (_0x442347, _0x1fc9be) {
              var _0x118799 = _0x165f2b[_0x3cf67b++];
              switch (_0x1fc9be) {
                case "d":
                case "f":
                  return String(Number(_0x118799));
                case "i":
                  return String(Math.floor(_0x118799));
                case "j":
                  return JSON.stringify(_0x118799);
                case "s":
                  return String(_0x118799);
              }
              return "%";
            }), _0x3cf67b !== _0x165f2b.length) {
              throw Error("parameter count mismatch");
            }
            _0x89c24d.push(_0x3e9d30);
            return _0xe61537;
          }
          function _0x1ce4e0(_0x5581a8) {
            return "function " + (_0x5581a8 || _0x43556b || "") + "(" + (_0x50cbad && _0x50cbad.join(",") || "") + "){\n  " + _0x89c24d.join("\n  ") + "\n}";
          }
          _0xe61537.toString = _0x1ce4e0;
          return _0xe61537;
        }
        _0xac2aea.exports = _0x3b2f4f;
        _0x3b2f4f.verbose = false;
        _0xac2aea.exports;
      }, {});
      var _0x3cf9df = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/fetch/index.js";
      _0x1bbca6.define(_0x3cf9df, function (_0x391bf6, _0x57ab22, _0xbb989e, _0x4b3393, _0x2de457) {
        _0xbb989e.exports = _0x274389;
        var _0x922023 = _0x57ab22("@protobufjs/aspromise");
        var _0x450f65 = _0x57ab22("@protobufjs/inquire")("fs");
        function _0x274389(_0x2f89cd, _0x457967, _0x1802eb) {
          "function" == typeof _0x457967 ? (_0x1802eb = _0x457967, _0x457967 = {}) : _0x457967 || (_0x457967 = {});
          return _0x1802eb ? !_0x457967.xhr && _0x450f65 && _0x450f65.readFile ? _0x450f65.readFile(_0x2f89cd, function (_0x3fb035, _0x30a936) {
            return _0x3fb035 && "undefined" != typeof XMLHttpRequest ? _0x274389.xhr(_0x2f89cd, _0x457967, _0x1802eb) : _0x3fb035 ? _0x1802eb(_0x3fb035) : _0x1802eb(null, _0x457967.binary ? _0x30a936 : _0x30a936.toString("utf8"));
          }) : _0x274389.xhr(_0x2f89cd, _0x457967, _0x1802eb) : _0x922023(_0x274389, this, _0x2f89cd, _0x457967);
        }
        _0x274389.xhr = function (_0x46657f, _0x427bb9, _0x2dc101) {
          var _0x159de9 = new XMLHttpRequest();
          _0x159de9.onreadystatechange = function () {
            if (4 === _0x159de9.readyState) {
              if (0 !== _0x159de9.status && 200 !== _0x159de9.status) {
                return _0x2dc101(Error("status " + _0x159de9.status));
              }
              if (_0x427bb9.binary) {
                var _0x18ef18 = _0x159de9.response;
                if (!_0x18ef18) {
                  _0x18ef18 = [];
                  for (var _0x8ee067 = 0; _0x8ee067 < _0x159de9.responseText.length; ++_0x8ee067) {
                    _0x18ef18.push(255 & _0x159de9.responseText.charCodeAt(_0x8ee067));
                  }
                }
                return _0x2dc101(null, "undefined" != typeof Uint8Array ? new Uint8Array(_0x18ef18) : _0x18ef18);
              }
              return _0x2dc101(null, _0x159de9.responseText);
            }
          };
          _0x427bb9.binary && ("overrideMimeType" in _0x159de9 && _0x159de9.overrideMimeType("text/plain; charset=x-user-defined"), _0x159de9.responseType = "arraybuffer");
          _0x159de9.open("GET", _0x46657f);
          _0x159de9.send();
        };
        _0xbb989e.exports;
      }, function () {
        return {
          "@protobufjs/aspromise": _0x43d57d,
          "@protobufjs/inquire": _0x5c8a72
        };
      });
      var _0x1605e8 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/@protobufjs/path/index.js";
      _0x1bbca6.define(_0x1605e8, function (_0x34014c, _0x54f7d7, _0x4e4325, _0x35f9ba, _0x29c633) {
        var _0x366db8 = _0x34014c;
        _0x366db8.isAbsolute = function (_0x1e400a) {
          return /^(?:\/|\w+:)/.test(_0x1e400a);
        }
        var _0x101d49 = _0x366db8.isAbsolute;
        _0x366db8.normalize = function (_0x3a6e92) {
          var _0x1821af = (_0x3a6e92 = _0x3a6e92.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/");
          var _0x568c26 = _0x101d49(_0x3a6e92);
          var _0x27df94 = "";
          _0x568c26 && (_0x27df94 = _0x1821af.shift() + "/");
          for (var _0x1f6778 = 0; _0x1f6778 < _0x1821af.length;) {
            ".." === _0x1821af[_0x1f6778] ? _0x1f6778 > 0 && ".." !== _0x1821af[_0x1f6778 - 1] ? _0x1821af.splice(--_0x1f6778, 2) : _0x568c26 ? _0x1821af.splice(_0x1f6778, 1) : ++_0x1f6778 : "." === _0x1821af[_0x1f6778] ? _0x1821af.splice(_0x1f6778, 1) : ++_0x1f6778;
          }
          return _0x27df94 + _0x1821af.join("/");
        }
        var _0x441f7e = _0x366db8.normalize;
        _0x366db8.resolve = function (_0xa0891a, _0x27c2eb, _0x1ea246) {
          _0x1ea246 || (_0x27c2eb = _0x441f7e(_0x27c2eb));
          return _0x101d49(_0x27c2eb) ? _0x27c2eb : (_0x1ea246 || (_0xa0891a = _0x441f7e(_0xa0891a)), (_0xa0891a = _0xa0891a.replace(/(?:\/|^)[^/]+$/, "")).length ? _0x441f7e(_0xa0891a + "/" + _0x27c2eb) : _0x27c2eb);
        };
        _0x4e4325.exports;
      }, {});
      var _0x31f3cc = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/types.js";
      _0x1bbca6.define(_0x31f3cc, function (_0x564607, _0x2b7e50, _0x4b5df9, _0x245b83, _0x1ca5e8) {
        var _0x3efc22 = _0x564607;
        var _0x31c0da = _0x2b7e50("./util");
        var _0x16ba63 = ["double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes"];
        function _0x464ba1(_0x54fe15, _0x30bd86) {
          var _0x228083 = 0;
          var _0x4ade50 = {};
          for (_0x30bd86 |= 0; _0x228083 < _0x54fe15.length;) {
            _0x4ade50[_0x16ba63[_0x228083 + _0x30bd86]] = _0x54fe15[_0x228083++];
          }
          return _0x4ade50;
        }
        _0x3efc22.basic = _0x464ba1([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2]);
        _0x3efc22.defaults = _0x464ba1([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, "", _0x31c0da.emptyArray, null]);
        _0x3efc22.long = _0x464ba1([0, 0, 0, 1, 1], 7);
        _0x3efc22.mapKey = _0x464ba1([0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2], 2);
        _0x3efc22.packed = _0x464ba1([1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0]);
        _0x4b5df9.exports;
      }, function () {
        return {
          "./util": _0x32e598
        };
      });
      var _0x1c01d1 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/field.js";
      _0x1bbca6.define(_0x1c01d1, function (_0x56745b, _0x179df1, _0x39572a, _0x90820f, _0x4c4363) {
        _0x39572a.exports = _0x3fc78c;
        var _0x49ed22 = _0x179df1("./object");
        ((_0x3fc78c.prototype = Object.create(_0x49ed22.prototype)).constructor = _0x3fc78c).className = "Field";
        var _0x4013d8;
        var _0x2f8216 = _0x179df1("./enum");
        var _0x4e122d = _0x179df1("./types");
        var _0x41ef26 = _0x179df1("./util");
        var _0x546573 = /^required|optional|repeated$/;
        function _0x3fc78c(_0x258f7c, _0x2f1841, _0x1d15a1, _0x423691, _0x651b74, _0x3dc023, _0x2ac230) {
          if (_0x41ef26.isObject(_0x423691) ? (_0x2ac230 = _0x651b74, _0x3dc023 = _0x423691, _0x423691 = _0x651b74 = undefined) : _0x41ef26.isObject(_0x651b74) && (_0x2ac230 = _0x3dc023, _0x3dc023 = _0x651b74, _0x651b74 = undefined), _0x49ed22.call(this, _0x258f7c, _0x3dc023), !_0x41ef26.isInteger(_0x2f1841) || _0x2f1841 < 0) {
            throw TypeError("id must be a non-negative integer");
          }
          if (!_0x41ef26.isString(_0x1d15a1)) {
            throw TypeError("type must be a string");
          }
          if (undefined !== _0x423691 && !_0x546573.test(_0x423691 = _0x423691.toString().toLowerCase())) {
            throw TypeError("rule must be a string rule");
          }
          if (undefined !== _0x651b74 && !_0x41ef26.isString(_0x651b74)) {
            throw TypeError("extend must be a string");
          }
          "proto3_optional" === _0x423691 && (_0x423691 = "optional");
          this.rule = _0x423691 && "optional" !== _0x423691 ? _0x423691 : undefined;
          this.type = _0x1d15a1;
          this.id = _0x2f1841;
          this.extend = _0x651b74 || undefined;
          this.required = "required" === _0x423691;
          this.optional = !this.required;
          this.repeated = "repeated" === _0x423691;
          this.map = false;
          this.message = null;
          this.partOf = null;
          this.typeDefault = null;
          this.defaultValue = null;
          this.long = !!_0x41ef26.Long && undefined !== _0x4e122d.long[_0x1d15a1];
          this.bytes = "bytes" === _0x1d15a1;
          this.resolvedType = null;
          this.extensionField = null;
          this.declaringField = null;
          this._packed = null;
          this.comment = _0x2ac230;
        }
        _0x3fc78c.fromJSON = function (_0x2b65f9, _0x3afc7a) {
          return new _0x3fc78c(_0x2b65f9, _0x3afc7a.id, _0x3afc7a.type, _0x3afc7a.rule, _0x3afc7a.extend, _0x3afc7a.options, _0x3afc7a.comment);
        };
        Object.defineProperty(_0x3fc78c.prototype, "packed", {
          get: function () {
            null === this._packed && (this._packed = false !== this.getOption("packed"));
            return this._packed;
          }
        });
        _0x3fc78c.prototype.setOption = function (_0x25dede, _0x39300a, _0x28daae) {
          "packed" === _0x25dede && (this._packed = null);
          return _0x49ed22.prototype.setOption.call(this, _0x25dede, _0x39300a, _0x28daae);
        };
        _0x3fc78c.prototype.toJSON = function (_0xc1a7d0) {
          var _0x2e4271 = !!_0xc1a7d0 && Boolean(_0xc1a7d0.keepComments);
          return _0x41ef26.toObject(["rule", "optional" !== this.rule && this.rule || undefined, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", _0x2e4271 ? this.comment : undefined]);
        };
        _0x3fc78c.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === (this.typeDefault = _0x4e122d.defaults[this.type]) && (this.resolvedType = (this.declaringField ? this.declaringField.parent : this.parent).lookupTypeOrEnum(this.type), this.resolvedType instanceof _0x4013d8 ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]), this.options && null != this.options.default && (this.typeDefault = this.options.default, this.resolvedType instanceof _0x2f8216 && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), this.options && (true !== this.options.packed && (undefined === this.options.packed || !this.resolvedType || this.resolvedType instanceof _0x2f8216) || delete this.options.packed, Object.keys(this.options).length || (this.options = undefined)), this.long) {
            this.typeDefault = _0x41ef26.Long.fromNumber(this.typeDefault, "u" === this.type.charAt(0));
            Object.freeze && Object.freeze(this.typeDefault);
          } else {
            if (this.bytes && "string" == typeof this.typeDefault) {
              var _0x51d5c0;
              _0x41ef26.base64.test(this.typeDefault) ? _0x41ef26.base64.decode(this.typeDefault, _0x51d5c0 = _0x41ef26.newBuffer(_0x41ef26.base64.length(this.typeDefault)), 0) : _0x41ef26.utf8.write(this.typeDefault, _0x51d5c0 = _0x41ef26.newBuffer(_0x41ef26.utf8.length(this.typeDefault)), 0);
              this.typeDefault = _0x51d5c0;
            }
          }
          this.map ? this.defaultValue = _0x41ef26.emptyObject : this.repeated ? this.defaultValue = _0x41ef26.emptyArray : this.defaultValue = this.typeDefault;
          this.parent instanceof _0x4013d8 && (this.parent.ctor.prototype[this.name] = this.defaultValue);
          return _0x49ed22.prototype.resolve.call(this);
        };
        _0x3fc78c.d = function (_0x4c46f9, _0x3ef249, _0x41bf0d, _0xb0324e) {
          "function" == typeof _0x3ef249 ? _0x3ef249 = _0x41ef26.decorateType(_0x3ef249).name : _0x3ef249 && "object" == typeof _0x3ef249 && (_0x3ef249 = _0x41ef26.decorateEnum(_0x3ef249).name);
          return function (_0x470805, _0x5194ec) {
            _0x41ef26.decorateType(_0x470805.constructor).add(new _0x3fc78c(_0x5194ec, _0x4c46f9, _0x3ef249, _0x41bf0d, {
              default: _0xb0324e
            }));
          };
        };
        _0x3fc78c._configure = function (_0x44b22b) {
          _0x4013d8 = _0x44b22b;
        };
        _0x39572a.exports;
      }, function () {
        return {
          "./object": _0x84b3bd,
          "./enum": _0xf40985,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0x4124f2 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/oneof.js";
      _0x1bbca6.define(_0x4124f2, function (_0x1ed85d, _0x5c807f, _0x4cca97, _0xd641f3, _0x28ed88) {
        _0x4cca97.exports = _0x43499f;
        var _0x52c993 = _0x5c807f("./object");
        ((_0x43499f.prototype = Object.create(_0x52c993.prototype)).constructor = _0x43499f).className = "OneOf";
        var _0x5c4c2c = _0x5c807f("./field");
        var _0x54f649 = _0x5c807f("./util");
        function _0x43499f(_0x9bb5be, _0x517526, _0x5082bb, _0x5c62df) {
          if (Array.isArray(_0x517526) || (_0x5082bb = _0x517526, _0x517526 = undefined), _0x52c993.call(this, _0x9bb5be, _0x5082bb), undefined !== _0x517526 && !Array.isArray(_0x517526)) {
            throw TypeError("fieldNames must be an Array");
          }
          this.oneof = _0x517526 || [];
          this.fieldsArray = [];
          this.comment = _0x5c62df;
        }
        function _0x1cbb67(_0x596b84) {
          if (_0x596b84.parent) {
            for (var _0x1fb7b4 = 0; _0x1fb7b4 < _0x596b84.fieldsArray.length; ++_0x1fb7b4) {
              _0x596b84.fieldsArray[_0x1fb7b4].parent || _0x596b84.parent.add(_0x596b84.fieldsArray[_0x1fb7b4]);
            }
          }
        }
        _0x43499f.fromJSON = function (_0x417098, _0x1f0e3d) {
          return new _0x43499f(_0x417098, _0x1f0e3d.oneof, _0x1f0e3d.options, _0x1f0e3d.comment);
        };
        _0x43499f.prototype.toJSON = function (_0x1c3410) {
          var _0x4d5b32 = !!_0x1c3410 && Boolean(_0x1c3410.keepComments);
          return _0x54f649.toObject(["options", this.options, "oneof", this.oneof, "comment", _0x4d5b32 ? this.comment : undefined]);
        };
        _0x43499f.prototype.add = function (_0x4d251f) {
          if (!(_0x4d251f instanceof _0x5c4c2c)) {
            throw TypeError("field must be a Field");
          }
          _0x4d251f.parent && _0x4d251f.parent !== this.parent && _0x4d251f.parent.remove(_0x4d251f);
          this.oneof.push(_0x4d251f.name);
          this.fieldsArray.push(_0x4d251f);
          _0x4d251f.partOf = this;
          _0x1cbb67(this);
          return this;
        };
        _0x43499f.prototype.remove = function (_0x5d0c41) {
          if (!(_0x5d0c41 instanceof _0x5c4c2c)) {
            throw TypeError("field must be a Field");
          }
          var _0x2f0e16 = this.fieldsArray.indexOf(_0x5d0c41);
          if (_0x2f0e16 < 0) {
            throw Error(_0x5d0c41 + " is not a member of " + this);
          }
          this.fieldsArray.splice(_0x2f0e16, 1);
          (_0x2f0e16 = this.oneof.indexOf(_0x5d0c41.name)) > -1 && this.oneof.splice(_0x2f0e16, 1);
          _0x5d0c41.partOf = null;
          return this;
        };
        _0x43499f.prototype.onAdd = function (_0x21319d) {
          _0x52c993.prototype.onAdd.call(this, _0x21319d);
          for (var _0x4cd530 = 0; _0x4cd530 < this.oneof.length; ++_0x4cd530) {
            var _0x1371a4 = _0x21319d.get(this.oneof[_0x4cd530]);
            _0x1371a4 && !_0x1371a4.partOf && (_0x1371a4.partOf = this, this.fieldsArray.push(_0x1371a4));
          }
          _0x1cbb67(this);
        };
        _0x43499f.prototype.onRemove = function (_0x24f950) {
          for (var _0x184dc4, _0x2a112b = 0; _0x2a112b < this.fieldsArray.length; ++_0x2a112b) {
            (_0x184dc4 = this.fieldsArray[_0x2a112b]).parent && _0x184dc4.parent.remove(_0x184dc4);
          }
          _0x52c993.prototype.onRemove.call(this, _0x24f950);
        };
        _0x43499f.d = function () {
          for (var _0xa9ca40 = new Array(arguments.length), _0x3fadbe = 0; _0x3fadbe < arguments.length;) {
            _0xa9ca40[_0x3fadbe] = arguments[_0x3fadbe++];
          }
          return function (_0x2460d6, _0x2a0e93) {
            _0x54f649.decorateType(_0x2460d6.constructor).add(new _0x43499f(_0x2a0e93, _0xa9ca40));
            Object.defineProperty(_0x2460d6, _0x2a0e93, {
              get: _0x54f649.oneOfGetter(_0xa9ca40),
              set: _0x54f649.oneOfSetter(_0xa9ca40)
            });
          };
        };
        _0x4cca97.exports;
      }, function () {
        return {
          "./object": _0x84b3bd,
          "./field": _0x1c01d1,
          "./util": _0x32e598
        };
      });
      var _0x1455c4 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/namespace.js";
      _0x1bbca6.define(_0x1455c4, function (_0x5f0d8c, _0x554bdc, _0x1122f1, _0x23f602, _0x19f075) {
        _0x1122f1.exports = _0x2ec80b;
        var _0x1f84a2 = _0x554bdc("./object");
        ((_0x2ec80b.prototype = Object.create(_0x1f84a2.prototype)).constructor = _0x2ec80b).className = "Namespace";
        var _0x2cf5f6;
        var _0x6ad643;
        var _0x6d8c8e;
        var _0x4a0a7f = _0x554bdc("./field");
        var _0x4428ae = _0x554bdc("./oneof");
        var _0x219cfc = _0x554bdc("./util");
        function _0x322dc9(_0x523e8d, _0x4bd72c) {
          if (_0x523e8d && _0x523e8d.length) {
            for (var _0x4ffa09 = {}, _0x273742 = 0; _0x273742 < _0x523e8d.length; ++_0x273742) {
              _0x4ffa09[_0x523e8d[_0x273742].name] = _0x523e8d[_0x273742].toJSON(_0x4bd72c);
            }
            return _0x4ffa09;
          }
        }
        function _0x2ec80b(_0xa06dfd, _0x971b00) {
          _0x1f84a2.call(this, _0xa06dfd, _0x971b00);
          this.nested = undefined;
          this._nestedArray = null;
        }
        function _0x15853b(_0x398540) {
          _0x398540._nestedArray = null;
          return _0x398540;
        }
        _0x2ec80b.fromJSON = function (_0x841540, _0x29da05) {
          return new _0x2ec80b(_0x841540, _0x29da05.options).addJSON(_0x29da05.nested);
        };
        _0x2ec80b.arrayToJSON = _0x322dc9;
        _0x2ec80b.isReservedId = function (_0x52ba48, _0x443922) {
          if (_0x52ba48) {
            for (var _0x1677f3 = 0; _0x1677f3 < _0x52ba48.length; ++_0x1677f3) {
              if ("string" != typeof _0x52ba48[_0x1677f3] && _0x52ba48[_0x1677f3][0] <= _0x443922 && _0x52ba48[_0x1677f3][1] > _0x443922) {
                return true;
              }
            }
          }
          return false;
        };
        _0x2ec80b.isReservedName = function (_0xb976c8, _0x4d3d20) {
          if (_0xb976c8) {
            for (var _0x4311bc = 0; _0x4311bc < _0xb976c8.length; ++_0x4311bc) {
              if (_0xb976c8[_0x4311bc] === _0x4d3d20) {
                return true;
              }
            }
          }
          return false;
        };
        Object.defineProperty(_0x2ec80b.prototype, "nestedArray", {
          get: function () {
            return this._nestedArray || (this._nestedArray = _0x219cfc.toArray(this.nested));
          }
        });
        _0x2ec80b.prototype.toJSON = function (_0x39f851) {
          return _0x219cfc.toObject(["options", this.options, "nested", _0x322dc9(this.nestedArray, _0x39f851)]);
        };
        _0x2ec80b.prototype.addJSON = function (_0x31aacb) {
          if (_0x31aacb) {
            for (var _0x5c8323, _0x45ee60 = Object.keys(_0x31aacb), _0x512421 = 0; _0x512421 < _0x45ee60.length; ++_0x512421) {
              _0x5c8323 = _0x31aacb[_0x45ee60[_0x512421]];
              this.add((undefined !== _0x5c8323.fields ? _0x2cf5f6.fromJSON : undefined !== _0x5c8323.values ? _0x6d8c8e.fromJSON : undefined !== _0x5c8323.methods ? _0x6ad643.fromJSON : undefined !== _0x5c8323.id ? _0x4a0a7f.fromJSON : _0x2ec80b.fromJSON)(_0x45ee60[_0x512421], _0x5c8323));
            }
          }
          return this;
        };
        _0x2ec80b.prototype.get = function (_0x1ee734) {
          return this.nested && this.nested[_0x1ee734] || null;
        };
        _0x2ec80b.prototype.getEnum = function (_0x3c9d59) {
          if (this.nested && this.nested[_0x3c9d59] instanceof _0x6d8c8e) {
            return this.nested[_0x3c9d59].values;
          }
          throw Error("no such enum: " + _0x3c9d59);
        };
        _0x2ec80b.prototype.add = function (_0x8d35cd) {
          if (!(_0x8d35cd instanceof _0x4a0a7f && undefined !== _0x8d35cd.extend || _0x8d35cd instanceof _0x2cf5f6 || _0x8d35cd instanceof _0x6d8c8e || _0x8d35cd instanceof _0x6ad643 || _0x8d35cd instanceof _0x2ec80b || _0x8d35cd instanceof _0x4428ae)) {
            throw TypeError("object must be a valid nested object");
          }
          if (this.nested) {
            var _0x5d9319 = this.get(_0x8d35cd.name);
            if (_0x5d9319) {
              if (!(_0x5d9319 instanceof _0x2ec80b && _0x8d35cd instanceof _0x2ec80b) || _0x5d9319 instanceof _0x2cf5f6 || _0x5d9319 instanceof _0x6ad643) {
                throw Error("duplicate name '" + _0x8d35cd.name + "' in " + this);
              }
              for (var _0x54f178 = _0x5d9319.nestedArray, _0x3197d6 = 0; _0x3197d6 < _0x54f178.length; ++_0x3197d6) {
                _0x8d35cd.add(_0x54f178[_0x3197d6]);
              }
              this.remove(_0x5d9319);
              this.nested || (this.nested = {});
              _0x8d35cd.setOptions(_0x5d9319.options, true);
            }
          } else {
            this.nested = {};
          }
          this.nested[_0x8d35cd.name] = _0x8d35cd;
          _0x8d35cd.onAdd(this);
          return _0x15853b(this);
        };
        _0x2ec80b.prototype.remove = function (_0x1024e1) {
          if (!(_0x1024e1 instanceof _0x1f84a2)) {
            throw TypeError("object must be a ReflectionObject");
          }
          if (_0x1024e1.parent !== this) {
            throw Error(_0x1024e1 + " is not a member of " + this);
          }
          delete this.nested[_0x1024e1.name];
          Object.keys(this.nested).length || (this.nested = undefined);
          _0x1024e1.onRemove(this);
          return _0x15853b(this);
        };
        _0x2ec80b.prototype.define = function (_0x55be53, _0x11a8cd) {
          if (_0x219cfc.isString(_0x55be53)) {
            _0x55be53 = _0x55be53.split(".");
          } else {
            if (!Array.isArray(_0x55be53)) {
              throw TypeError("illegal path");
            }
          }
          if (_0x55be53 && _0x55be53.length && "" === _0x55be53[0]) {
            throw Error("path must be relative");
          }
          for (var _0x4cf6fa = this; _0x55be53.length > 0;) {
            var _0x541b50 = _0x55be53.shift();
            if (_0x4cf6fa.nested && _0x4cf6fa.nested[_0x541b50]) {
              if (!((_0x4cf6fa = _0x4cf6fa.nested[_0x541b50]) instanceof _0x2ec80b)) {
                throw Error("path conflicts with non-namespace objects");
              }
            } else {
              _0x4cf6fa.add(_0x4cf6fa = new _0x2ec80b(_0x541b50));
            }
          }
          _0x11a8cd && _0x4cf6fa.addJSON(_0x11a8cd);
          return _0x4cf6fa;
        };
        _0x2ec80b.prototype.resolveAll = function () {
          for (var _0x4be332 = this.nestedArray, _0x16bf36 = 0; _0x16bf36 < _0x4be332.length;) {
            _0x4be332[_0x16bf36] instanceof _0x2ec80b ? _0x4be332[_0x16bf36++].resolveAll() : _0x4be332[_0x16bf36++].resolve();
          }
          return this.resolve();
        };
        _0x2ec80b.prototype.lookup = function (_0x1b6457, _0x25831d, _0x1fd172) {
          if ("boolean" == typeof _0x25831d ? (_0x1fd172 = _0x25831d, _0x25831d = undefined) : _0x25831d && !Array.isArray(_0x25831d) && (_0x25831d = [_0x25831d]), _0x219cfc.isString(_0x1b6457) && _0x1b6457.length) {
            if ("." === _0x1b6457) {
              return this.root;
            }
            _0x1b6457 = _0x1b6457.split(".");
          } else {
            if (!_0x1b6457.length) {
              return this;
            }
          }
          if ("" === _0x1b6457[0]) {
            return this.root.lookup(_0x1b6457.slice(1), _0x25831d);
          }
          var _0x3f9057 = this.get(_0x1b6457[0]);
          if (_0x3f9057) {
            if (1 === _0x1b6457.length) {
              if (!_0x25831d || _0x25831d.indexOf(_0x3f9057.constructor) > -1) {
                return _0x3f9057;
              }
            } else {
              if (_0x3f9057 instanceof _0x2ec80b && (_0x3f9057 = _0x3f9057.lookup(_0x1b6457.slice(1), _0x25831d, true))) {
                return _0x3f9057;
              }
            }
          } else {
            for (var _0x1014b1 = 0; _0x1014b1 < this.nestedArray.length; ++_0x1014b1) {
              if (this._nestedArray[_0x1014b1] instanceof _0x2ec80b && (_0x3f9057 = this._nestedArray[_0x1014b1].lookup(_0x1b6457, _0x25831d, true))) {
                return _0x3f9057;
              }
            }
          }
          return null === this.parent || _0x1fd172 ? null : this.parent.lookup(_0x1b6457, _0x25831d);
        };
        _0x2ec80b.prototype.lookupType = function (_0xfd03) {
          var _0x2aa0e2 = this.lookup(_0xfd03, [_0x2cf5f6]);
          if (!_0x2aa0e2) {
            throw Error("no such type: " + _0xfd03);
          }
          return _0x2aa0e2;
        };
        _0x2ec80b.prototype.lookupEnum = function (_0x1faa54) {
          var _0x1bab5b = this.lookup(_0x1faa54, [_0x6d8c8e]);
          if (!_0x1bab5b) {
            throw Error("no such Enum '" + _0x1faa54 + "' in " + this);
          }
          return _0x1bab5b;
        };
        _0x2ec80b.prototype.lookupTypeOrEnum = function (_0x2e55b1) {
          var _0x53abbe = this.lookup(_0x2e55b1, [_0x2cf5f6, _0x6d8c8e]);
          if (!_0x53abbe) {
            throw Error("no such Type or Enum '" + _0x2e55b1 + "' in " + this);
          }
          return _0x53abbe;
        };
        _0x2ec80b.prototype.lookupService = function (_0x466015) {
          var _0x12d134 = this.lookup(_0x466015, [_0x6ad643]);
          if (!_0x12d134) {
            throw Error("no such Service '" + _0x466015 + "' in " + this);
          }
          return _0x12d134;
        };
        _0x2ec80b._configure = function (_0x37eaa6, _0x4a8dd6, _0x5c5dc4) {
          _0x2cf5f6 = _0x37eaa6;
          _0x6ad643 = _0x4a8dd6;
          _0x6d8c8e = _0x5c5dc4;
        };
        _0x1122f1.exports;
      }, function () {
        return {
          "./object": _0x84b3bd,
          "./field": _0x1c01d1,
          "./oneof": _0x4124f2,
          "./util": _0x32e598
        };
      });
      var _0xab755e = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/mapfield.js";
      _0x1bbca6.define(_0xab755e, function (_0x30ad5b, _0x1287ef, _0x58166d, _0x5c58ab, _0x5572f8) {
        _0x58166d.exports = _0x417bb7;
        var _0x3f7eb3 = _0x1287ef("./field");
        ((_0x417bb7.prototype = Object.create(_0x3f7eb3.prototype)).constructor = _0x417bb7).className = "MapField";
        var _0x37ddeb = _0x1287ef("./types");
        var _0x420ac1 = _0x1287ef("./util");
        function _0x417bb7(_0x22ef72, _0x529fe5, _0xbf06b0, _0x9d55dc, _0x19d3f4, _0x130d16) {
          if (_0x3f7eb3.call(this, _0x22ef72, _0x529fe5, _0x9d55dc, undefined, undefined, _0x19d3f4, _0x130d16), !_0x420ac1.isString(_0xbf06b0)) {
            throw TypeError("keyType must be a string");
          }
          this.keyType = _0xbf06b0;
          this.resolvedKeyType = null;
          this.map = true;
        }
        _0x417bb7.fromJSON = function (_0x1220f4, _0x7c2605) {
          return new _0x417bb7(_0x1220f4, _0x7c2605.id, _0x7c2605.keyType, _0x7c2605.type, _0x7c2605.options, _0x7c2605.comment);
        };
        _0x417bb7.prototype.toJSON = function (_0x3016b5) {
          var _0x319452 = !!_0x3016b5 && Boolean(_0x3016b5.keepComments);
          return _0x420ac1.toObject(["keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", _0x319452 ? this.comment : undefined]);
        };
        _0x417bb7.prototype.resolve = function () {
          if (this.resolved) {
            return this;
          }
          if (undefined === _0x37ddeb.mapKey[this.keyType]) {
            throw Error("invalid key type: " + this.keyType);
          }
          return _0x3f7eb3.prototype.resolve.call(this);
        };
        _0x417bb7.d = function (_0x1fa9d6, _0x383768, _0xcbb919) {
          "function" == typeof _0xcbb919 ? _0xcbb919 = _0x420ac1.decorateType(_0xcbb919).name : _0xcbb919 && "object" == typeof _0xcbb919 && (_0xcbb919 = _0x420ac1.decorateEnum(_0xcbb919).name);
          return function (_0x1b377a, _0x2f2d75) {
            _0x420ac1.decorateType(_0x1b377a.constructor).add(new _0x417bb7(_0x2f2d75, _0x1fa9d6, _0x383768, _0xcbb919));
          };
        };
        _0x58166d.exports;
      }, function () {
        return {
          "./field": _0x1c01d1,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0x2d7f7d = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/method.js";
      _0x1bbca6.define(_0x2d7f7d, function (_0xb11c74, _0x594af0, _0x53229d, _0x28d0a8, _0x1d1cfd) {
        _0x53229d.exports = _0x484c06;
        var _0x256e23 = _0x594af0("./object");
        ((_0x484c06.prototype = Object.create(_0x256e23.prototype)).constructor = _0x484c06).className = "Method";
        var _0x43edc4 = _0x594af0("./util");
        function _0x484c06(_0x2c1028, _0x245c44, _0xfc348c, _0x4c8962, _0x448ebc, _0x184b03, _0x4ae94e, _0x4b8b3b, _0xe80f8e) {
          if (_0x43edc4.isObject(_0x448ebc) ? (_0x4ae94e = _0x448ebc, _0x448ebc = _0x184b03 = undefined) : _0x43edc4.isObject(_0x184b03) && (_0x4ae94e = _0x184b03, _0x184b03 = undefined), undefined !== _0x245c44 && !_0x43edc4.isString(_0x245c44)) {
            throw TypeError("type must be a string");
          }
          if (!_0x43edc4.isString(_0xfc348c)) {
            throw TypeError("requestType must be a string");
          }
          if (!_0x43edc4.isString(_0x4c8962)) {
            throw TypeError("responseType must be a string");
          }
          _0x256e23.call(this, _0x2c1028, _0x4ae94e);
          this.type = _0x245c44 || "rpc";
          this.requestType = _0xfc348c;
          this.requestStream = !!_0x448ebc || undefined;
          this.responseType = _0x4c8962;
          this.responseStream = !!_0x184b03 || undefined;
          this.resolvedRequestType = null;
          this.resolvedResponseType = null;
          this.comment = _0x4b8b3b;
          this.parsedOptions = _0xe80f8e;
        }
        _0x484c06.fromJSON = function (_0x5b91c9, _0x348061) {
          return new _0x484c06(_0x5b91c9, _0x348061.type, _0x348061.requestType, _0x348061.responseType, _0x348061.requestStream, _0x348061.responseStream, _0x348061.options, _0x348061.comment, _0x348061.parsedOptions);
        };
        _0x484c06.prototype.toJSON = function (_0x51bdc7) {
          var _0x1ca0de = !!_0x51bdc7 && Boolean(_0x51bdc7.keepComments);
          return _0x43edc4.toObject(["type", "rpc" !== this.type && this.type || undefined, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", _0x1ca0de ? this.comment : undefined, "parsedOptions", this.parsedOptions]);
        };
        _0x484c06.prototype.resolve = function () {
          return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), this.resolvedResponseType = this.parent.lookupType(this.responseType), _0x256e23.prototype.resolve.call(this));
        };
        _0x53229d.exports;
      }, function () {
        return {
          "./object": _0x84b3bd,
          "./util": _0x32e598
        };
      });
      var _0x188a74 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/service.js";
      _0x1bbca6.define(_0x188a74, function (_0x503a5e, _0x331c67, _0x153ebf, _0x3785a0, _0x54d09a) {
        _0x153ebf.exports = _0x10a243;
        var _0x124c08 = _0x331c67("./namespace");
        ((_0x10a243.prototype = Object.create(_0x124c08.prototype)).constructor = _0x10a243).className = "Service";
        var _0x27b208 = _0x331c67("./method");
        var _0x1fc79b = _0x331c67("./util");
        var _0x1d418d = _0x331c67("./rpc");
        function _0x10a243(_0x58ba95, _0x493173) {
          _0x124c08.call(this, _0x58ba95, _0x493173);
          this.methods = {};
          this._methodsArray = null;
        }
        function _0x500335(_0x54285e) {
          _0x54285e._methodsArray = null;
          return _0x54285e;
        }
        _0x10a243.fromJSON = function (_0x2c4f77, _0x2c33fc) {
          var _0x1cae3f = new _0x10a243(_0x2c4f77, _0x2c33fc.options);
          if (_0x2c33fc.methods) {
            for (var _0x246fda = Object.keys(_0x2c33fc.methods), _0x3f1863 = 0; _0x3f1863 < _0x246fda.length; ++_0x3f1863) {
              _0x1cae3f.add(_0x27b208.fromJSON(_0x246fda[_0x3f1863], _0x2c33fc.methods[_0x246fda[_0x3f1863]]));
            }
          }
          _0x2c33fc.nested && _0x1cae3f.addJSON(_0x2c33fc.nested);
          _0x1cae3f.comment = _0x2c33fc.comment;
          return _0x1cae3f;
        };
        _0x10a243.prototype.toJSON = function (_0x325d1d) {
          var _0x1c2116 = _0x124c08.prototype.toJSON.call(this, _0x325d1d);
          var _0x558c9f = !!_0x325d1d && Boolean(_0x325d1d.keepComments);
          return _0x1fc79b.toObject(["options", _0x1c2116 && _0x1c2116.options || undefined, "methods", _0x124c08.arrayToJSON(this.methodsArray, _0x325d1d) || {}, "nested", _0x1c2116 && _0x1c2116.nested || undefined, "comment", _0x558c9f ? this.comment : undefined]);
        };
        Object.defineProperty(_0x10a243.prototype, "methodsArray", {
          get: function () {
            return this._methodsArray || (this._methodsArray = _0x1fc79b.toArray(this.methods));
          }
        });
        _0x10a243.prototype.get = function (_0x21d048) {
          return this.methods[_0x21d048] || _0x124c08.prototype.get.call(this, _0x21d048);
        };
        _0x10a243.prototype.resolveAll = function () {
          for (var _0x527b55 = this.methodsArray, _0x508c4b = 0; _0x508c4b < _0x527b55.length; ++_0x508c4b) {
            _0x527b55[_0x508c4b].resolve();
          }
          return _0x124c08.prototype.resolve.call(this);
        };
        _0x10a243.prototype.add = function (_0xc6988d) {
          if (this.get(_0xc6988d.name)) {
            throw Error("duplicate name '" + _0xc6988d.name + "' in " + this);
          }
          return _0xc6988d instanceof _0x27b208 ? (this.methods[_0xc6988d.name] = _0xc6988d, _0xc6988d.parent = this, _0x500335(this)) : _0x124c08.prototype.add.call(this, _0xc6988d);
        };
        _0x10a243.prototype.remove = function (_0x49791c) {
          if (_0x49791c instanceof _0x27b208) {
            if (this.methods[_0x49791c.name] !== _0x49791c) {
              throw Error(_0x49791c + " is not a member of " + this);
            }
            delete this.methods[_0x49791c.name];
            _0x49791c.parent = null;
            return _0x500335(this);
          }
          return _0x124c08.prototype.remove.call(this, _0x49791c);
        };
        _0x10a243.prototype.create = function (_0x5a597d, _0x2e3fe9, _0x57f29e) {
          for (var _0x2211e1, _0xb1bf09 = new _0x1d418d.Service(_0x5a597d, _0x2e3fe9, _0x57f29e), _0x1d39ce = 0; _0x1d39ce < this.methodsArray.length; ++_0x1d39ce) {
            var _0x16b483 = _0x1fc79b.lcFirst((_0x2211e1 = this._methodsArray[_0x1d39ce]).resolve().name).replace(/[^$\w_]/g, "");
            _0xb1bf09[_0x16b483] = _0x1fc79b.codegen(["r", "c"], _0x1fc79b.isReserved(_0x16b483) ? _0x16b483 + "_" : _0x16b483)("return this.rpcCall(m,q,s,r,c)")({
              m: _0x2211e1,
              q: _0x2211e1.resolvedRequestType.ctor,
              s: _0x2211e1.resolvedResponseType.ctor
            });
          }
          return _0xb1bf09;
        };
        _0x153ebf.exports;
      }, function () {
        return {
          "./namespace": _0x1455c4,
          "./method": _0x2d7f7d,
          "./util": _0x32e598,
          "./rpc": _0x5d4286
        };
      });
      var _0x2479b7 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/message.js";
      _0x1bbca6.define(_0x2479b7, function (_0x4a411e, _0x49ce2f, _0xf0ec41, _0x3a32e0, _0x4e7a5a) {
        _0xf0ec41.exports = _0x8ea759;
        var _0x24c73f = _0x49ce2f("./util/minimal");
        function _0x8ea759(_0x13b6e9) {
          if (_0x13b6e9) {
            for (var _0x39708d = Object.keys(_0x13b6e9), _0x517957 = 0; _0x517957 < _0x39708d.length; ++_0x517957) {
              this[_0x39708d[_0x517957]] = _0x13b6e9[_0x39708d[_0x517957]];
            }
          }
        }
        _0x8ea759.create = function (_0x21cb76) {
          return this.$type.create(_0x21cb76);
        };
        _0x8ea759.encode = function (_0x1291a9, _0x25bcb0) {
          return this.$type.encode(_0x1291a9, _0x25bcb0);
        };
        _0x8ea759.encodeDelimited = function (_0x274d88, _0x47d2ea) {
          return this.$type.encodeDelimited(_0x274d88, _0x47d2ea);
        };
        _0x8ea759.decode = function (_0x53f33a) {
          return this.$type.decode(_0x53f33a);
        };
        _0x8ea759.decodeDelimited = function (_0x1a2c3d) {
          return this.$type.decodeDelimited(_0x1a2c3d);
        };
        _0x8ea759.verify = function (_0x4e27ea) {
          return this.$type.verify(_0x4e27ea);
        };
        _0x8ea759.fromObject = function (_0x559631) {
          return this.$type.fromObject(_0x559631);
        };
        _0x8ea759.toObject = function (_0x438927, _0x364338) {
          return this.$type.toObject(_0x438927, _0x364338);
        };
        _0x8ea759.prototype.toJSON = function () {
          return this.$type.toObject(this, _0x24c73f.toJSONOptions);
        };
        _0xf0ec41.exports;
      }, function () {
        return {
          "./util/minimal": _0x543f65
        };
      });
      var _0x2c6af8 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/decoder.js";
      _0x1bbca6.define(_0x2c6af8, function (_0x1b7ba2, _0x3ada6b, _0x298fc3, _0x12c5a5, _0x47094d) {
        _0x298fc3.exports = function (_0x43e546) {
          var _0x224fa5 = _0x139196.codegen(["r", "l"], _0x43e546.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (_0x43e546.fieldsArray.filter(function (_0x4a18bd) {
            return _0x4a18bd.map;
          }).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()");
          _0x43e546.group && _0x224fa5("if((t&7)===4)")("break");
          _0x224fa5("switch(t>>>3){");
          for (var _0x53e072 = 0; _0x53e072 < _0x43e546.fieldsArray.length; ++_0x53e072) {
            var _0x393b3d = _0x43e546._fieldsArray[_0x53e072].resolve();
            var _0x242e2a = _0x393b3d.resolvedType instanceof _0x1185e1 ? "int32" : _0x393b3d.type;
            var _0x3ef044 = "m" + _0x139196.safeProp(_0x393b3d.name);
            _0x224fa5("case %i:", _0x393b3d.id);
            _0x393b3d.map ? (_0x224fa5("if(%s===util.emptyObject)", _0x3ef044)("%s={}", _0x3ef044)("var c2 = r.uint32()+r.pos"), undefined !== _0x18bd3f.defaults[_0x393b3d.keyType] ? _0x224fa5("k=%j", _0x18bd3f.defaults[_0x393b3d.keyType]) : _0x224fa5("k=null"), undefined !== _0x18bd3f.defaults[_0x242e2a] ? _0x224fa5("value=%j", _0x18bd3f.defaults[_0x242e2a]) : _0x224fa5("value=null"), _0x224fa5("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", _0x393b3d.keyType)("case 2:"), undefined === _0x18bd3f.basic[_0x242e2a] ? _0x224fa5("value=types[%i].decode(r,r.uint32())", _0x53e072) : _0x224fa5("value=r.%s()", _0x242e2a), _0x224fa5("break")("default:")("r.skipType(tag2&7)")("break")("}")("}"), undefined !== _0x18bd3f.long[_0x393b3d.keyType] ? _0x224fa5("%s[typeof k===\"object\"?util.longToHash(k):k]=value", _0x3ef044) : _0x224fa5("%s[k]=value", _0x3ef044)) : _0x393b3d.repeated ? (_0x224fa5("if(!(%s&&%s.length))", _0x3ef044, _0x3ef044)("%s=[]", _0x3ef044), undefined !== _0x18bd3f.packed[_0x242e2a] && _0x224fa5("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", _0x3ef044, _0x242e2a)("}else"), undefined === _0x18bd3f.basic[_0x242e2a] ? _0x224fa5(_0x393b3d.resolvedType.group ? "%s.push(types[%i].decode(r))" : "%s.push(types[%i].decode(r,r.uint32()))", _0x3ef044, _0x53e072) : _0x224fa5("%s.push(r.%s())", _0x3ef044, _0x242e2a)) : undefined === _0x18bd3f.basic[_0x242e2a] ? _0x224fa5(_0x393b3d.resolvedType.group ? "%s=types[%i].decode(r)" : "%s=types[%i].decode(r,r.uint32())", _0x3ef044, _0x53e072) : _0x224fa5("%s=r.%s()", _0x3ef044, _0x242e2a);
            _0x224fa5("break");
          }
          for (_0x224fa5("default:")("r.skipType(t&7)")("break")("}")("}"), _0x53e072 = 0; _0x53e072 < _0x43e546._fieldsArray.length; ++_0x53e072) {
            var _0x2b2fed = _0x43e546._fieldsArray[_0x53e072];
            _0x2b2fed.required && _0x224fa5("if(!m.hasOwnProperty(%j))", _0x2b2fed.name)("throw util.ProtocolError(%j,{instance:m})", _0x2a3fc2(_0x2b2fed));
          }
          return _0x224fa5("return m");
        };
        var _0x1185e1 = _0x3ada6b("./enum");
        var _0x18bd3f = _0x3ada6b("./types");
        var _0x139196 = _0x3ada6b("./util");
        function _0x2a3fc2(_0x592de2) {
          return "missing required '" + _0x592de2.name + "'";
        }
        _0x298fc3.exports;
      }, function () {
        return {
          "./enum": _0xf40985,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0xb1094b = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/verifier.js";
      _0x1bbca6.define(_0xb1094b, function (_0x14a107, _0x526a7a, _0xdc4c73, _0x5b079a, _0x20af17) {
        _0xdc4c73.exports = function (_0x4423c3) {
          var _0x205433 = _0xdf2451.codegen(["m"], _0x4423c3.name + "$verify")("if(typeof m!==\"object\"||m===null)")("return%j", "object expected");
          var _0x3e078c = _0x4423c3.oneofsArray;
          var _0xe505a6 = {};
          _0x3e078c.length && _0x205433("var p={}");
          for (var _0xe9cc56 = 0; _0xe9cc56 < _0x4423c3.fieldsArray.length; ++_0xe9cc56) {
            var _0x5cddca = _0x4423c3._fieldsArray[_0xe9cc56].resolve();
            var _0x165744 = "m" + _0xdf2451.safeProp(_0x5cddca.name);
            if (_0x5cddca.optional && _0x205433("if(%s!=null&&m.hasOwnProperty(%j)){", _0x165744, _0x5cddca.name), _0x5cddca.map) {
              _0x205433("if(!util.isObject(%s))", _0x165744)("return%j", _0x3cae1b(_0x5cddca, "object"))("var k=Object.keys(%s)", _0x165744)("for(var i=0;i<k.length;++i){");
              _0x423c6d(_0x205433, _0x5cddca, "k[i]");
              _0xa8345e(_0x205433, _0x5cddca, _0xe9cc56, _0x165744 + "[k[i]]")("}");
            } else {
              if (_0x5cddca.repeated) {
                _0x205433("if(!Array.isArray(%s))", _0x165744)("return%j", _0x3cae1b(_0x5cddca, "array"))("for(var i=0;i<%s.length;++i){", _0x165744);
                _0xa8345e(_0x205433, _0x5cddca, _0xe9cc56, _0x165744 + "[i]")("}");
              } else {
                if (_0x5cddca.partOf) {
                  var _0xb0f7d2 = _0xdf2451.safeProp(_0x5cddca.partOf.name);
                  1 === _0xe505a6[_0x5cddca.partOf.name] && _0x205433("if(p%s===1)", _0xb0f7d2)("return%j", _0x5cddca.partOf.name + ": multiple values");
                  _0xe505a6[_0x5cddca.partOf.name] = 1;
                  _0x205433("p%s=1", _0xb0f7d2);
                }
                _0xa8345e(_0x205433, _0x5cddca, _0xe9cc56, _0x165744);
              }
            }
            _0x5cddca.optional && _0x205433("}");
          }
          return _0x205433("return null");
        };
        var _0x4e093d = _0x526a7a("./enum");
        var _0xdf2451 = _0x526a7a("./util");
        function _0x3cae1b(_0x4ef156, _0x348778) {
          return _0x4ef156.name + ": " + _0x348778 + (_0x4ef156.repeated && "array" !== _0x348778 ? "[]" : _0x4ef156.map && "object" !== _0x348778 ? "{k:" + _0x4ef156.keyType + "}" : "") + " expected";
        }
        function _0xa8345e(_0x2d3222, _0x1fd3ce, _0x58a7ed, _0x5d45d1) {
          if (_0x1fd3ce.resolvedType) {
            if (_0x1fd3ce.resolvedType instanceof _0x4e093d) {
              _0x2d3222("switch(%s){", _0x5d45d1)("default:")("return%j", _0x3cae1b(_0x1fd3ce, "enum value"));
              for (var _0x22f307 = Object.keys(_0x1fd3ce.resolvedType.values), _0x8e91c = 0; _0x8e91c < _0x22f307.length; ++_0x8e91c) {
                _0x2d3222("case %i:", _0x1fd3ce.resolvedType.values[_0x22f307[_0x8e91c]]);
              }
              _0x2d3222("break")("}");
            } else {
              _0x2d3222("{")("var e=types[%i].verify(%s);", _0x58a7ed, _0x5d45d1)("if(e)")("return%j+e", _0x1fd3ce.name + ".")("}");
            }
          } else {
            switch (_0x1fd3ce.type) {
              case "int32":
              case "uint32":
              case "sint32":
              case "fixed32":
              case "sfixed32":
                _0x2d3222("if(!util.isInteger(%s))", _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "integer"));
                break;
              case "int64":
              case "uint64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x2d3222("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", _0x5d45d1, _0x5d45d1, _0x5d45d1, _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "integer|Long"));
                break;
              case "float":
              case "double":
                _0x2d3222("if(typeof %s!==\"number\")", _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "number"));
                break;
              case "bool":
                _0x2d3222("if(typeof %s!==\"boolean\")", _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "boolean"));
                break;
              case "string":
                _0x2d3222("if(!util.isString(%s))", _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "string"));
                break;
              case "bytes":
                _0x2d3222("if(!(%s&&typeof %s.length===\"number\"||util.isString(%s)))", _0x5d45d1, _0x5d45d1, _0x5d45d1)("return%j", _0x3cae1b(_0x1fd3ce, "buffer"));
            }
          }
          return _0x2d3222;
        }
        function _0x423c6d(_0x205760, _0x2c4559, _0x508cab) {
          switch (_0x2c4559.keyType) {
            case "int32":
            case "uint32":
            case "sint32":
            case "fixed32":
            case "sfixed32":
              _0x205760("if(!util.key32Re.test(%s))", _0x508cab)("return%j", _0x3cae1b(_0x2c4559, "integer key"));
              break;
            case "int64":
            case "uint64":
            case "sint64":
            case "fixed64":
            case "sfixed64":
              _0x205760("if(!util.key64Re.test(%s))", _0x508cab)("return%j", _0x3cae1b(_0x2c4559, "integer|Long key"));
              break;
            case "bool":
              _0x205760("if(!util.key2Re.test(%s))", _0x508cab)("return%j", _0x3cae1b(_0x2c4559, "boolean key"));
          }
          return _0x205760;
        }
        _0xdc4c73.exports;
      }, function () {
        return {
          "./enum": _0xf40985,
          "./util": _0x32e598
        };
      });
      var _0x39cced = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/converter.js";
      _0x1bbca6.define(_0x39cced, function (_0x36d112, _0xf2e797, _0x1add13, _0x350a3c, _0x2f8f5a) {
        var _0x5c3e12 = _0x36d112;
        var _0x583837 = _0xf2e797("./enum");
        var _0x341cb3 = _0xf2e797("./util");
        function _0x5f29ac(_0x44c422, _0x15cd9e, _0x2688cd, _0x23015f) {
          if (_0x15cd9e.resolvedType) {
            if (_0x15cd9e.resolvedType instanceof _0x583837) {
              _0x44c422("switch(d%s){", _0x23015f);
              for (var _0x2b90b3 = _0x15cd9e.resolvedType.values, _0x585cc2 = Object.keys(_0x2b90b3), _0x1d6d52 = 0; _0x1d6d52 < _0x585cc2.length; ++_0x1d6d52) {
                _0x15cd9e.repeated && _0x2b90b3[_0x585cc2[_0x1d6d52]] === _0x15cd9e.typeDefault && _0x44c422("default:");
                _0x44c422("case%j:", _0x585cc2[_0x1d6d52])("case %i:", _0x2b90b3[_0x585cc2[_0x1d6d52]])("m%s=%j", _0x23015f, _0x2b90b3[_0x585cc2[_0x1d6d52]])("break");
              }
              _0x44c422("}");
            } else {
              _0x44c422("if(typeof d%s!==\"object\")", _0x23015f)("throw TypeError(%j)", _0x15cd9e.fullName + ": object expected")("m%s=types[%i].fromObject(d%s)", _0x23015f, _0x2688cd, _0x23015f);
            }
          } else {
            var _0x500a66 = false;
            switch (_0x15cd9e.type) {
              case "double":
              case "float":
                _0x44c422("m%s=Number(d%s)", _0x23015f, _0x23015f);
                break;
              case "uint32":
              case "fixed32":
                _0x44c422("m%s=d%s>>>0", _0x23015f, _0x23015f);
                break;
              case "int32":
              case "sint32":
              case "sfixed32":
                _0x44c422("m%s=d%s|0", _0x23015f, _0x23015f);
                break;
              case "uint64":
                _0x500a66 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x44c422("if(util.Long)")("(m%s=util.Long.fromValue(d%s)).unsigned=%j", _0x23015f, _0x23015f, _0x500a66)("else if(typeof d%s===\"string\")", _0x23015f)("m%s=parseInt(d%s,10)", _0x23015f, _0x23015f)("else if(typeof d%s===\"number\")", _0x23015f)("m%s=d%s", _0x23015f, _0x23015f)("else if(typeof d%s===\"object\")", _0x23015f)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", _0x23015f, _0x23015f, _0x23015f, _0x500a66 ? "true" : "");
                break;
              case "bytes":
                _0x44c422("if(typeof d%s===\"string\")", _0x23015f)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", _0x23015f, _0x23015f, _0x23015f)("else if(d%s.length)", _0x23015f)("m%s=d%s", _0x23015f, _0x23015f);
                break;
              case "string":
                _0x44c422("m%s=String(d%s)", _0x23015f, _0x23015f);
                break;
              case "bool":
                _0x44c422("m%s=Boolean(d%s)", _0x23015f, _0x23015f);
            }
          }
          return _0x44c422;
        }
        function _0x313fb5(_0x3276fd, _0x529ac1, _0x554cb6, _0x4cdf71) {
          if (_0x529ac1.resolvedType) {
            _0x529ac1.resolvedType instanceof _0x583837 ? _0x3276fd("d%s=o.enums===String?types[%i].values[m%s]:m%s", _0x4cdf71, _0x554cb6, _0x4cdf71, _0x4cdf71) : _0x3276fd("d%s=types[%i].toObject(m%s,o)", _0x4cdf71, _0x554cb6, _0x4cdf71);
          } else {
            var _0x1f7bc2 = false;
            switch (_0x529ac1.type) {
              case "double":
              case "float":
                _0x3276fd("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", _0x4cdf71, _0x4cdf71, _0x4cdf71, _0x4cdf71);
                break;
              case "uint64":
                _0x1f7bc2 = true;
              case "int64":
              case "sint64":
              case "fixed64":
              case "sfixed64":
                _0x3276fd("if(typeof m%s===\"number\")", _0x4cdf71)("d%s=o.longs===String?String(m%s):m%s", _0x4cdf71, _0x4cdf71, _0x4cdf71)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", _0x4cdf71, _0x4cdf71, _0x4cdf71, _0x4cdf71, _0x1f7bc2 ? "true" : "", _0x4cdf71);
                break;
              case "bytes":
                _0x3276fd("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", _0x4cdf71, _0x4cdf71, _0x4cdf71, _0x4cdf71, _0x4cdf71);
                break;
              default:
                _0x3276fd("d%s=m%s", _0x4cdf71, _0x4cdf71);
            }
          }
          return _0x3276fd;
        }
        _0x5c3e12.fromObject = function (_0x523ccd) {
          var _0x1a11f5 = _0x523ccd.fieldsArray;
          var _0x42d8c4 = _0x341cb3.codegen(["d"], _0x523ccd.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
          if (!_0x1a11f5.length) {
            return _0x42d8c4("return new this.ctor");
          }
          _0x42d8c4("var m=new this.ctor");
          for (var _0x22578d = 0; _0x22578d < _0x1a11f5.length; ++_0x22578d) {
            var _0x66dea1 = _0x1a11f5[_0x22578d].resolve();
            var _0x54487b = _0x341cb3.safeProp(_0x66dea1.name);
            _0x66dea1.map ? (_0x42d8c4("if(d%s){", _0x54487b)("if(typeof d%s!==\"object\")", _0x54487b)("throw TypeError(%j)", _0x66dea1.fullName + ": object expected")("m%s={}", _0x54487b)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", _0x54487b), _0x5f29ac(_0x42d8c4, _0x66dea1, _0x22578d, _0x54487b + "[ks[i]]")("}")("}")) : _0x66dea1.repeated ? (_0x42d8c4("if(d%s){", _0x54487b)("if(!Array.isArray(d%s))", _0x54487b)("throw TypeError(%j)", _0x66dea1.fullName + ": array expected")("m%s=[]", _0x54487b)("for(var i=0;i<d%s.length;++i){", _0x54487b), _0x5f29ac(_0x42d8c4, _0x66dea1, _0x22578d, _0x54487b + "[i]")("}")("}")) : (_0x66dea1.resolvedType instanceof _0x583837 || _0x42d8c4("if(d%s!=null){", _0x54487b), _0x5f29ac(_0x42d8c4, _0x66dea1, _0x22578d, _0x54487b), _0x66dea1.resolvedType instanceof _0x583837 || _0x42d8c4("}"));
          }
          return _0x42d8c4("return m");
        };
        _0x5c3e12.toObject = function (_0x4fd366) {
          var _0x293316 = _0x4fd366.fieldsArray.slice().sort(_0x341cb3.compareFieldsById);
          if (!_0x293316.length) {
            return _0x341cb3.codegen()("return {}");
          }
          for (var _0xd9e42d = _0x341cb3.codegen(["m", "o"], _0x4fd366.name + "$toObject")("if(!o)")("o={}")("var d={}"), _0x22c59b = [], _0x5c53ff = [], _0x3185a8 = [], _0x2e183f = 0; _0x2e183f < _0x293316.length; ++_0x2e183f) {
            _0x293316[_0x2e183f].partOf || (_0x293316[_0x2e183f].resolve().repeated ? _0x22c59b : _0x293316[_0x2e183f].map ? _0x5c53ff : _0x3185a8).push(_0x293316[_0x2e183f]);
          }
          if (_0x22c59b.length) {
            for (_0xd9e42d("if(o.arrays||o.defaults){"), _0x2e183f = 0; _0x2e183f < _0x22c59b.length; ++_0x2e183f) {
              _0xd9e42d("d%s=[]", _0x341cb3.safeProp(_0x22c59b[_0x2e183f].name));
            }
            _0xd9e42d("}");
          }
          if (_0x5c53ff.length) {
            for (_0xd9e42d("if(o.objects||o.defaults){"), _0x2e183f = 0; _0x2e183f < _0x5c53ff.length; ++_0x2e183f) {
              _0xd9e42d("d%s={}", _0x341cb3.safeProp(_0x5c53ff[_0x2e183f].name));
            }
            _0xd9e42d("}");
          }
          if (_0x3185a8.length) {
            for (_0xd9e42d("if(o.defaults){"), _0x2e183f = 0; _0x2e183f < _0x3185a8.length; ++_0x2e183f) {
              var _0x13ba79 = _0x3185a8[_0x2e183f];
              var _0x15914a = _0x341cb3.safeProp(_0x13ba79.name);
              if (_0x13ba79.resolvedType instanceof _0x583837) {
                _0xd9e42d("d%s=o.enums===String?%j:%j", _0x15914a, _0x13ba79.resolvedType.valuesById[_0x13ba79.typeDefault], _0x13ba79.typeDefault);
              } else {
                if (_0x13ba79.long) {
                  _0xd9e42d("if(util.Long){")("var n=new util.Long(%i,%i,%j)", _0x13ba79.typeDefault.low, _0x13ba79.typeDefault.high, _0x13ba79.typeDefault.unsigned)("d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():n", _0x15914a)("}else")("d%s=o.longs===String?%j:%i", _0x15914a, _0x13ba79.typeDefault.toString(), _0x13ba79.typeDefault.toNumber());
                } else {
                  if (_0x13ba79.bytes) {
                    var _0x5d665f = "[" + Array.prototype.slice.call(_0x13ba79.typeDefault).join(",") + "]";
                    _0xd9e42d("if(o.bytes===String)d%s=%j", _0x15914a, String.fromCharCode.apply(String, _0x13ba79.typeDefault))("else{")("d%s=%s", _0x15914a, _0x5d665f)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", _0x15914a, _0x15914a)("}");
                  } else {
                    _0xd9e42d("d%s=%j", _0x15914a, _0x13ba79.typeDefault);
                  }
                }
              }
            }
            _0xd9e42d("}");
          }
          var _0x31c5c0 = false;
          for (_0x2e183f = 0; _0x2e183f < _0x293316.length; ++_0x2e183f) {
            _0x13ba79 = _0x293316[_0x2e183f];
            var _0x2053b7 = _0x4fd366._fieldsArray.indexOf(_0x13ba79);
            _0x15914a = _0x341cb3.safeProp(_0x13ba79.name);
            _0x13ba79.map ? (_0x31c5c0 || (_0x31c5c0 = true, _0xd9e42d("var ks2")), _0xd9e42d("if(m%s&&(ks2=Object.keys(m%s)).length){", _0x15914a, _0x15914a)("d%s={}", _0x15914a)("for(var j=0;j<ks2.length;++j){"), _0x313fb5(_0xd9e42d, _0x13ba79, _0x2053b7, _0x15914a + "[ks2[j]]")("}")) : _0x13ba79.repeated ? (_0xd9e42d("if(m%s&&m%s.length){", _0x15914a, _0x15914a)("d%s=[]", _0x15914a)("for(var j=0;j<m%s.length;++j){", _0x15914a), _0x313fb5(_0xd9e42d, _0x13ba79, _0x2053b7, _0x15914a + "[j]")("}")) : (_0xd9e42d("if(m%s!=null&&m.hasOwnProperty(%j)){", _0x15914a, _0x13ba79.name), _0x313fb5(_0xd9e42d, _0x13ba79, _0x2053b7, _0x15914a), _0x13ba79.partOf && _0xd9e42d("if(o.oneofs)")("d%s=%j", _0x341cb3.safeProp(_0x13ba79.partOf.name), _0x13ba79.name));
            _0xd9e42d("}");
          }
          return _0xd9e42d("return d");
        };
        _0x1add13.exports;
      }, function () {
        return {
          "./enum": _0xf40985,
          "./util": _0x32e598
        };
      });
      var _0x102f99 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/wrappers.js";
      _0x1bbca6.define(_0x102f99, function (_0x57022f, _0x542717, _0x4be09c, _0x17aa29, _0x50d3b5) {
        var _0x5ef1e8 = _0x57022f;
        var _0x4c5ff0 = _0x542717("./message");
        _0x5ef1e8[".google.protobuf.Any"] = {
          fromObject: function (_0x3bb4cd) {
            if (_0x3bb4cd && _0x3bb4cd["@type"]) {
              var _0x26b589 = _0x3bb4cd["@type"].substring(_0x3bb4cd["@type"].lastIndexOf("/") + 1);
              var _0x266ff5 = this.lookup(_0x26b589);
              if (_0x266ff5) {
                var _0x5b93a6 = "." === _0x3bb4cd["@type"].charAt(0) ? _0x3bb4cd["@type"].substr(1) : _0x3bb4cd["@type"];
                -1 === _0x5b93a6.indexOf("/") && (_0x5b93a6 = "/" + _0x5b93a6);
                return this.create({
                  type_url: _0x5b93a6,
                  value: _0x266ff5.encode(_0x266ff5.fromObject(_0x3bb4cd)).finish()
                });
              }
            }
            return this.fromObject(_0x3bb4cd);
          },
          toObject: function (_0x3eccc7, _0x54e8fe) {
            var _0x31cabd = "";
            var _0x378b07 = "";
            if (_0x54e8fe && _0x54e8fe.json && _0x3eccc7.type_url && _0x3eccc7.value) {
              _0x378b07 = _0x3eccc7.type_url.substring(_0x3eccc7.type_url.lastIndexOf("/") + 1);
              _0x31cabd = _0x3eccc7.type_url.substring(0, _0x3eccc7.type_url.lastIndexOf("/") + 1);
              var _0x151a75 = this.lookup(_0x378b07);
              _0x151a75 && (_0x3eccc7 = _0x151a75.decode(_0x3eccc7.value));
            }
            if (!(_0x3eccc7 instanceof this.ctor) && _0x3eccc7 instanceof _0x4c5ff0) {
              var _0x218944 = _0x3eccc7.$type.toObject(_0x3eccc7, _0x54e8fe);
              "" === _0x31cabd && (_0x31cabd = "type.googleapis.com/");
              _0x378b07 = _0x31cabd + ("." === _0x3eccc7.$type.fullName[0] ? _0x3eccc7.$type.fullName.substr(1) : _0x3eccc7.$type.fullName);
              _0x218944["@type"] = _0x378b07;
              return _0x218944;
            }
            return this.toObject(_0x3eccc7, _0x54e8fe);
          }
        };
        _0x4be09c.exports;
      }, function () {
        return {
          "./message": _0x2479b7
        };
      });
      var _0x1f47da = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/type.js";
      _0x1bbca6.define(_0x1f47da, function (_0x4cc952, _0x187245, _0x253a8a, _0x2a4660, _0x55a422) {
        _0x253a8a.exports = _0x39f61e;
        var _0x58b7ac = _0x187245("./namespace");
        ((_0x39f61e.prototype = Object.create(_0x58b7ac.prototype)).constructor = _0x39f61e).className = "Type";
        var _0x40f1dd = _0x187245("./enum");
        var _0x563662 = _0x187245("./oneof");
        var _0x3f2444 = _0x187245("./field");
        var _0x407ebf = _0x187245("./mapfield");
        var _0x2d85e3 = _0x187245("./service");
        var _0x3cfbfc = _0x187245("./message");
        var _0x51c228 = _0x187245("./reader");
        var _0x28f524 = _0x187245("./writer");
        var _0x315011 = _0x187245("./util");
        var _0x5d3e71 = _0x187245("./encoder");
        var _0x5a682c = _0x187245("./decoder");
        var _0x3444ea = _0x187245("./verifier");
        var _0x52c492 = _0x187245("./converter");
        var _0x2c49f6 = _0x187245("./wrappers");
        function _0x39f61e(_0x110ac6, _0x7a6d6e) {
          _0x58b7ac.call(this, _0x110ac6, _0x7a6d6e);
          this.fields = {};
          this.oneofs = undefined;
          this.extensions = undefined;
          this.reserved = undefined;
          this.group = undefined;
          this._fieldsById = null;
          this._fieldsArray = null;
          this._oneofsArray = null;
          this._ctor = null;
        }
        function _0x403820(_0x39eb5e) {
          _0x39eb5e._fieldsById = _0x39eb5e._fieldsArray = _0x39eb5e._oneofsArray = null;
          delete _0x39eb5e.encode;
          delete _0x39eb5e.decode;
          delete _0x39eb5e.verify;
          return _0x39eb5e;
        }
        Object.defineProperties(_0x39f61e.prototype, {
          fieldsById: {
            get: function () {
              if (this._fieldsById) {
                return this._fieldsById;
              }
              this._fieldsById = {};
              for (var _0x15a2dd = Object.keys(this.fields), _0x2d3ef5 = 0; _0x2d3ef5 < _0x15a2dd.length; ++_0x2d3ef5) {
                var _0x103147 = this.fields[_0x15a2dd[_0x2d3ef5]];
                var _0x1b1e73 = _0x103147.id;
                if (this._fieldsById[_0x1b1e73]) {
                  throw Error("duplicate id " + _0x1b1e73 + " in " + this);
                }
                this._fieldsById[_0x1b1e73] = _0x103147;
              }
              return this._fieldsById;
            }
          },
          fieldsArray: {
            get: function () {
              return this._fieldsArray || (this._fieldsArray = _0x315011.toArray(this.fields));
            }
          },
          oneofsArray: {
            get: function () {
              return this._oneofsArray || (this._oneofsArray = _0x315011.toArray(this.oneofs));
            }
          },
          ctor: {
            get: function () {
              return this._ctor || (this.ctor = _0x39f61e.generateConstructor(this)());
            },
            set: function (_0xe0fd1e) {
              var _0x6c963b = _0xe0fd1e.prototype;
              _0x6c963b instanceof _0x3cfbfc || ((_0xe0fd1e.prototype = new _0x3cfbfc()).constructor = _0xe0fd1e, _0x315011.merge(_0xe0fd1e.prototype, _0x6c963b));
              _0xe0fd1e.$type = _0xe0fd1e.prototype.$type = this;
              _0x315011.merge(_0xe0fd1e, _0x3cfbfc, true);
              this._ctor = _0xe0fd1e;
              for (var _0x5104bf = 0; _0x5104bf < this.fieldsArray.length; ++_0x5104bf) {
                this._fieldsArray[_0x5104bf].resolve();
              }
              var _0x184bab = {};
              for (_0x5104bf = 0; _0x5104bf < this.oneofsArray.length; ++_0x5104bf) {
                _0x184bab[this._oneofsArray[_0x5104bf].resolve().name] = {
                  get: _0x315011.oneOfGetter(this._oneofsArray[_0x5104bf].oneof),
                  set: _0x315011.oneOfSetter(this._oneofsArray[_0x5104bf].oneof)
                };
              }
              _0x5104bf && Object.defineProperties(_0xe0fd1e.prototype, _0x184bab);
            }
          }
        });
        _0x39f61e.generateConstructor = function (_0x4ab36a) {
          for (var _0x2e411d, _0x49a79c = _0x315011.codegen(["p"], _0x4ab36a.name), _0x173e84 = 0; _0x173e84 < _0x4ab36a.fieldsArray.length; ++_0x173e84) {
            (_0x2e411d = _0x4ab36a._fieldsArray[_0x173e84]).map ? _0x49a79c("this%s={}", _0x315011.safeProp(_0x2e411d.name)) : _0x2e411d.repeated && _0x49a79c("this%s=[]", _0x315011.safeProp(_0x2e411d.name));
          }
          return _0x49a79c("if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null)")("this[ks[i]]=p[ks[i]]");
        };
        _0x39f61e.fromJSON = function (_0x149755, _0x4b1ef0) {
          var _0x2693ec = new _0x39f61e(_0x149755, _0x4b1ef0.options);
          _0x2693ec.extensions = _0x4b1ef0.extensions;
          _0x2693ec.reserved = _0x4b1ef0.reserved;
          for (var _0x5eaa5a = Object.keys(_0x4b1ef0.fields), _0x4f6aca = 0; _0x4f6aca < _0x5eaa5a.length; ++_0x4f6aca) {
            _0x2693ec.add((undefined !== _0x4b1ef0.fields[_0x5eaa5a[_0x4f6aca]].keyType ? _0x407ebf.fromJSON : _0x3f2444.fromJSON)(_0x5eaa5a[_0x4f6aca], _0x4b1ef0.fields[_0x5eaa5a[_0x4f6aca]]));
          }
          if (_0x4b1ef0.oneofs) {
            for (_0x5eaa5a = Object.keys(_0x4b1ef0.oneofs), _0x4f6aca = 0; _0x4f6aca < _0x5eaa5a.length; ++_0x4f6aca) {
              _0x2693ec.add(_0x563662.fromJSON(_0x5eaa5a[_0x4f6aca], _0x4b1ef0.oneofs[_0x5eaa5a[_0x4f6aca]]));
            }
          }
          if (_0x4b1ef0.nested) {
            for (_0x5eaa5a = Object.keys(_0x4b1ef0.nested), _0x4f6aca = 0; _0x4f6aca < _0x5eaa5a.length; ++_0x4f6aca) {
              var _0x3d47fb = _0x4b1ef0.nested[_0x5eaa5a[_0x4f6aca]];
              _0x2693ec.add((undefined !== _0x3d47fb.id ? _0x3f2444.fromJSON : undefined !== _0x3d47fb.fields ? _0x39f61e.fromJSON : undefined !== _0x3d47fb.values ? _0x40f1dd.fromJSON : undefined !== _0x3d47fb.methods ? _0x2d85e3.fromJSON : _0x58b7ac.fromJSON)(_0x5eaa5a[_0x4f6aca], _0x3d47fb));
            }
          }
          _0x4b1ef0.extensions && _0x4b1ef0.extensions.length && (_0x2693ec.extensions = _0x4b1ef0.extensions);
          _0x4b1ef0.reserved && _0x4b1ef0.reserved.length && (_0x2693ec.reserved = _0x4b1ef0.reserved);
          _0x4b1ef0.group && (_0x2693ec.group = true);
          _0x4b1ef0.comment && (_0x2693ec.comment = _0x4b1ef0.comment);
          return _0x2693ec;
        };
        _0x39f61e.prototype.toJSON = function (_0x5c3771) {
          var _0x11368c = _0x58b7ac.prototype.toJSON.call(this, _0x5c3771);
          var _0x3f102f = !!_0x5c3771 && Boolean(_0x5c3771.keepComments);
          return _0x315011.toObject(["options", _0x11368c && _0x11368c.options || undefined, "oneofs", _0x58b7ac.arrayToJSON(this.oneofsArray, _0x5c3771), "fields", _0x58b7ac.arrayToJSON(this.fieldsArray.filter(function (_0x127e45) {
            return !_0x127e45.declaringField;
          }), _0x5c3771) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : undefined, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "group", this.group || undefined, "nested", _0x11368c && _0x11368c.nested || undefined, "comment", _0x3f102f ? this.comment : undefined]);
        };
        _0x39f61e.prototype.resolveAll = function () {
          for (var _0xc15d55 = this.fieldsArray, _0x4c35dc = 0; _0x4c35dc < _0xc15d55.length;) {
            _0xc15d55[_0x4c35dc++].resolve();
          }
          var _0x3303b3 = this.oneofsArray;
          for (_0x4c35dc = 0; _0x4c35dc < _0x3303b3.length;) {
            _0x3303b3[_0x4c35dc++].resolve();
          }
          return _0x58b7ac.prototype.resolveAll.call(this);
        };
        _0x39f61e.prototype.get = function (_0x44cb3a) {
          return this.fields[_0x44cb3a] || this.oneofs && this.oneofs[_0x44cb3a] || this.nested && this.nested[_0x44cb3a] || null;
        };
        _0x39f61e.prototype.add = function (_0x2f99cc) {
          if (this.get(_0x2f99cc.name)) {
            throw Error("duplicate name '" + _0x2f99cc.name + "' in " + this);
          }
          if (_0x2f99cc instanceof _0x3f2444 && undefined === _0x2f99cc.extend) {
            if (this._fieldsById ? this._fieldsById[_0x2f99cc.id] : this.fieldsById[_0x2f99cc.id]) {
              throw Error("duplicate id " + _0x2f99cc.id + " in " + this);
            }
            if (this.isReservedId(_0x2f99cc.id)) {
              throw Error("id " + _0x2f99cc.id + " is reserved in " + this);
            }
            if (this.isReservedName(_0x2f99cc.name)) {
              throw Error("name '" + _0x2f99cc.name + "' is reserved in " + this);
            }
            _0x2f99cc.parent && _0x2f99cc.parent.remove(_0x2f99cc);
            this.fields[_0x2f99cc.name] = _0x2f99cc;
            _0x2f99cc.message = this;
            _0x2f99cc.onAdd(this);
            return _0x403820(this);
          }
          return _0x2f99cc instanceof _0x563662 ? (this.oneofs || (this.oneofs = {}), this.oneofs[_0x2f99cc.name] = _0x2f99cc, _0x2f99cc.onAdd(this), _0x403820(this)) : _0x58b7ac.prototype.add.call(this, _0x2f99cc);
        };
        _0x39f61e.prototype.remove = function (_0x2fe73c) {
          if (_0x2fe73c instanceof _0x3f2444 && undefined === _0x2fe73c.extend) {
            if (!this.fields || this.fields[_0x2fe73c.name] !== _0x2fe73c) {
              throw Error(_0x2fe73c + " is not a member of " + this);
            }
            delete this.fields[_0x2fe73c.name];
            _0x2fe73c.parent = null;
            _0x2fe73c.onRemove(this);
            return _0x403820(this);
          }
          if (_0x2fe73c instanceof _0x563662) {
            if (!this.oneofs || this.oneofs[_0x2fe73c.name] !== _0x2fe73c) {
              throw Error(_0x2fe73c + " is not a member of " + this);
            }
            delete this.oneofs[_0x2fe73c.name];
            _0x2fe73c.parent = null;
            _0x2fe73c.onRemove(this);
            return _0x403820(this);
          }
          return _0x58b7ac.prototype.remove.call(this, _0x2fe73c);
        };
        _0x39f61e.prototype.isReservedId = function (_0x320082) {
          return _0x58b7ac.isReservedId(this.reserved, _0x320082);
        };
        _0x39f61e.prototype.isReservedName = function (_0x30fc0f) {
          return _0x58b7ac.isReservedName(this.reserved, _0x30fc0f);
        };
        _0x39f61e.prototype.create = function (_0x55bf64) {
          return new this.ctor(_0x55bf64);
        };
        _0x39f61e.prototype.setup = function () {
          for (var _0x1621d2 = this.fullName, _0x3d40ea = [], _0xb2917 = 0; _0xb2917 < this.fieldsArray.length; ++_0xb2917) {
            _0x3d40ea.push(this._fieldsArray[_0xb2917].resolve().resolvedType);
          }
          this.encode = _0x5d3e71(this)({
            Writer: _0x28f524,
            types: _0x3d40ea,
            util: _0x315011
          });
          this.decode = _0x5a682c(this)({
            Reader: _0x51c228,
            types: _0x3d40ea,
            util: _0x315011
          });
          this.verify = _0x3444ea(this)({
            types: _0x3d40ea,
            util: _0x315011
          });
          this.fromObject = _0x52c492.fromObject(this)({
            types: _0x3d40ea,
            util: _0x315011
          });
          this.toObject = _0x52c492.toObject(this)({
            types: _0x3d40ea,
            util: _0x315011
          });
          var _0x28a8e7 = _0x2c49f6[_0x1621d2];
          if (_0x28a8e7) {
            var _0x56c6a2 = Object.create(this);
            _0x56c6a2.fromObject = this.fromObject;
            this.fromObject = _0x28a8e7.fromObject.bind(_0x56c6a2);
            _0x56c6a2.toObject = this.toObject;
            this.toObject = _0x28a8e7.toObject.bind(_0x56c6a2);
          }
          return this;
        };
        _0x39f61e.prototype.encode = function (_0x16195f, _0xc13c4) {
          return this.setup().encode(_0x16195f, _0xc13c4);
        };
        _0x39f61e.prototype.encodeDelimited = function (_0x5a877a, _0xcb93ae) {
          return this.encode(_0x5a877a, _0xcb93ae && _0xcb93ae.len ? _0xcb93ae.fork() : _0xcb93ae).ldelim();
        };
        _0x39f61e.prototype.decode = function (_0x53cd14, _0x5eab70) {
          return this.setup().decode(_0x53cd14, _0x5eab70);
        };
        _0x39f61e.prototype.decodeDelimited = function (_0x4b2874) {
          _0x4b2874 instanceof _0x51c228 || (_0x4b2874 = _0x51c228.create(_0x4b2874));
          return this.decode(_0x4b2874, _0x4b2874.uint32());
        };
        _0x39f61e.prototype.verify = function (_0x542e95) {
          return this.setup().verify(_0x542e95);
        };
        _0x39f61e.prototype.fromObject = function (_0x2f00f1) {
          return this.setup().fromObject(_0x2f00f1);
        };
        _0x39f61e.prototype.toObject = function (_0xc4b17e, _0x273fce) {
          return this.setup().toObject(_0xc4b17e, _0x273fce);
        };
        _0x39f61e.d = function (_0x56c99f) {
          return function (_0x392d7a) {
            _0x315011.decorateType(_0x392d7a, _0x56c99f);
          };
        };
        _0x253a8a.exports;
      }, function () {
        return {
          "./namespace": _0x1455c4,
          "./enum": _0xf40985,
          "./oneof": _0x4124f2,
          "./field": _0x1c01d1,
          "./mapfield": _0xab755e,
          "./service": _0x188a74,
          "./message": _0x2479b7,
          "./reader": _0x91b9e2,
          "./writer": _0x2f6b70,
          "./util": _0x32e598,
          "./encoder": _0x5ce4d7,
          "./decoder": _0x2c6af8,
          "./verifier": _0xb1094b,
          "./converter": _0x39cced,
          "./wrappers": _0x102f99
        };
      });
      var _0x5c567d = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/root.js";
      _0x1bbca6.define(_0x5c567d, function (_0x40da03, _0x465e83, _0x434c23, _0x49e183, _0x2543df) {
        _0x434c23.exports = _0x5e46aa;
        var _0x807f8a = _0x465e83("./namespace");
        ((_0x5e46aa.prototype = Object.create(_0x807f8a.prototype)).constructor = _0x5e46aa).className = "Root";
        var _0x101d1d;
        var _0x210f67;
        var _0x526151;
        var _0x4b4311 = _0x465e83("./field");
        var _0x283a7c = _0x465e83("./enum");
        var _0x338b56 = _0x465e83("./oneof");
        var _0x51c834 = _0x465e83("./util");
        function _0x5e46aa(_0x4c2379) {
          _0x807f8a.call(this, "", _0x4c2379);
          this.deferred = [];
          this.files = [];
        }
        function _0x410c7e() {}
        _0x5e46aa.fromJSON = function (_0x47110b, _0x372731) {
          _0x372731 || (_0x372731 = new _0x5e46aa());
          _0x47110b.options && _0x372731.setOptions(_0x47110b.options);
          return _0x372731.addJSON(_0x47110b.nested);
        };
        _0x5e46aa.prototype.resolvePath = _0x51c834.path.resolve;
        _0x5e46aa.prototype.fetch = _0x51c834.fetch;
        _0x5e46aa.prototype.load = function _0x46a04a(_0x485dbd, _0x41ec7c, _0x52417a) {
          "function" == typeof _0x41ec7c && (_0x52417a = _0x41ec7c, _0x41ec7c = undefined);
          var _0x4e0911 = this;
          if (!_0x52417a) {
            return _0x51c834.asPromise(_0x46a04a, _0x4e0911, _0x485dbd, _0x41ec7c);
          }
          var _0x113e03 = _0x52417a === _0x410c7e;
          function _0x405181(_0x147655, _0x80a072) {
            if (_0x52417a) {
              var _0x432b80 = _0x52417a;
              if (_0x52417a = null, _0x113e03) {
                throw _0x147655;
              }
              _0x432b80(_0x147655, _0x80a072);
            }
          }
          function _0xcd5a8a(_0x504903) {
            var _0x42eb6b = _0x504903.lastIndexOf("google/protobuf/");
            if (_0x42eb6b > -1) {
              var _0x1a0ac7 = _0x504903.substring(_0x42eb6b);
              if (_0x1a0ac7 in _0x526151) {
                return _0x1a0ac7;
              }
            }
            return null;
          }
          function _0x29b466(_0x1420b2, _0xaf68f2) {
            try {
              if (_0x51c834.isString(_0xaf68f2) && "{" === _0xaf68f2.charAt(0) && (_0xaf68f2 = JSON.parse(_0xaf68f2)), _0x51c834.isString(_0xaf68f2)) {
                _0x210f67.filename = _0x1420b2;
                var _0x26ce25;
                var _0x32a6df = _0x210f67(_0xaf68f2, _0x4e0911, _0x41ec7c);
                var _0x1d6e13 = 0;
                if (_0x32a6df.imports) {
                  for (; _0x1d6e13 < _0x32a6df.imports.length; ++_0x1d6e13) {
                    (_0x26ce25 = _0xcd5a8a(_0x32a6df.imports[_0x1d6e13]) || _0x4e0911.resolvePath(_0x1420b2, _0x32a6df.imports[_0x1d6e13])) && _0x38c8cc(_0x26ce25);
                  }
                }
                if (_0x32a6df.weakImports) {
                  for (_0x1d6e13 = 0; _0x1d6e13 < _0x32a6df.weakImports.length; ++_0x1d6e13) {
                    (_0x26ce25 = _0xcd5a8a(_0x32a6df.weakImports[_0x1d6e13]) || _0x4e0911.resolvePath(_0x1420b2, _0x32a6df.weakImports[_0x1d6e13])) && _0x38c8cc(_0x26ce25, true);
                  }
                }
              } else {
                _0x4e0911.setOptions(_0xaf68f2.options).addJSON(_0xaf68f2.nested);
              }
            } catch (_0xa478) {
              _0x405181(_0xa478);
            }
            _0x113e03 || _0x316e47 || _0x405181(null, _0x4e0911);
          }
          function _0x38c8cc(_0x50de7b, _0x2a50e8) {
            if (!(_0x4e0911.files.indexOf(_0x50de7b) > -1)) {
              if (_0x4e0911.files.push(_0x50de7b), _0x50de7b in _0x526151) {
                _0x113e03 ? _0x29b466(_0x50de7b, _0x526151[_0x50de7b]) : (++_0x316e47, setTimeout(function () {
                  --_0x316e47;
                  _0x29b466(_0x50de7b, _0x526151[_0x50de7b]);
                }));
              } else {
                if (_0x113e03) {
                  var _0x250026;
                  try {
                    _0x250026 = _0x51c834.fs.readFileSync(_0x50de7b).toString("utf8");
                  } catch (_0x2084d3) {
                    return void (_0x2a50e8 || _0x405181(_0x2084d3));
                  }
                  _0x29b466(_0x50de7b, _0x250026);
                } else {
                  ++_0x316e47;
                  _0x4e0911.fetch(_0x50de7b, function (_0xe4cab1, _0x460525) {
                    --_0x316e47;
                    _0x52417a && (_0xe4cab1 ? _0x2a50e8 ? _0x316e47 || _0x405181(null, _0x4e0911) : _0x405181(_0xe4cab1) : _0x29b466(_0x50de7b, _0x460525));
                  });
                }
              }
            }
          }
          var _0x316e47 = 0;
          _0x51c834.isString(_0x485dbd) && (_0x485dbd = [_0x485dbd]);
          for (var _0x2aa9a4, _0x5c095f = 0; _0x5c095f < _0x485dbd.length; ++_0x5c095f) {
            (_0x2aa9a4 = _0x4e0911.resolvePath("", _0x485dbd[_0x5c095f])) && _0x38c8cc(_0x2aa9a4);
          }
          if (_0x113e03) {
            return _0x4e0911;
          }
          _0x316e47 || _0x405181(null, _0x4e0911);
        };
        _0x5e46aa.prototype.loadSync = function (_0x1b948c, _0xa6d37d) {
          if (!_0x51c834.isNode) {
            throw Error("not supported");
          }
          return this.load(_0x1b948c, _0xa6d37d, _0x410c7e);
        };
        _0x5e46aa.prototype.resolveAll = function () {
          if (this.deferred.length) {
            throw Error("unresolvable extensions: " + this.deferred.map(function (_0x3d0e08) {
              return "'extend " + _0x3d0e08.extend + "' in " + _0x3d0e08.parent.fullName;
            }).join(", "));
          }
          return _0x807f8a.prototype.resolveAll.call(this);
        };
        var _0x35404a = /^[A-Z]/;
        function _0x1fa199(_0x1ebdd6, _0x173993) {
          var _0x4b1fb4 = _0x173993.parent.lookup(_0x173993.extend);
          if (_0x4b1fb4) {
            var _0x4f0276 = new _0x4b4311(_0x173993.fullName, _0x173993.id, _0x173993.type, _0x173993.rule, undefined, _0x173993.options);
            _0x4f0276.declaringField = _0x173993;
            _0x173993.extensionField = _0x4f0276;
            _0x4b1fb4.add(_0x4f0276);
            return true;
          }
          return false;
        }
        _0x5e46aa.prototype._handleAdd = function (_0x2d0f46) {
          if (_0x2d0f46 instanceof _0x4b4311) {
            undefined === _0x2d0f46.extend || _0x2d0f46.extensionField || _0x1fa199(0, _0x2d0f46) || this.deferred.push(_0x2d0f46);
          } else {
            if (_0x2d0f46 instanceof _0x283a7c) {
              _0x35404a.test(_0x2d0f46.name) && (_0x2d0f46.parent[_0x2d0f46.name] = _0x2d0f46.values);
            } else {
              if (!(_0x2d0f46 instanceof _0x338b56)) {
                if (_0x2d0f46 instanceof _0x101d1d) {
                  for (var _0xcbb78e = 0; _0xcbb78e < this.deferred.length;) {
                    _0x1fa199(0, this.deferred[_0xcbb78e]) ? this.deferred.splice(_0xcbb78e, 1) : ++_0xcbb78e;
                  }
                }
                for (var _0x16e160 = 0; _0x16e160 < _0x2d0f46.nestedArray.length; ++_0x16e160) {
                  this._handleAdd(_0x2d0f46._nestedArray[_0x16e160]);
                }
                _0x35404a.test(_0x2d0f46.name) && (_0x2d0f46.parent[_0x2d0f46.name] = _0x2d0f46);
              }
            }
          }
        };
        _0x5e46aa.prototype._handleRemove = function (_0x3fa00e) {
          if (_0x3fa00e instanceof _0x4b4311) {
            if (undefined !== _0x3fa00e.extend) {
              if (_0x3fa00e.extensionField) {
                _0x3fa00e.extensionField.parent.remove(_0x3fa00e.extensionField);
                _0x3fa00e.extensionField = null;
              } else {
                var _0x3bbc52 = this.deferred.indexOf(_0x3fa00e);
                _0x3bbc52 > -1 && this.deferred.splice(_0x3bbc52, 1);
              }
            }
          } else {
            if (_0x3fa00e instanceof _0x283a7c) {
              _0x35404a.test(_0x3fa00e.name) && delete _0x3fa00e.parent[_0x3fa00e.name];
            } else {
              if (_0x3fa00e instanceof _0x807f8a) {
                for (var _0x2b8c30 = 0; _0x2b8c30 < _0x3fa00e.nestedArray.length; ++_0x2b8c30) {
                  this._handleRemove(_0x3fa00e._nestedArray[_0x2b8c30]);
                }
                _0x35404a.test(_0x3fa00e.name) && delete _0x3fa00e.parent[_0x3fa00e.name];
              }
            }
          }
        };
        _0x5e46aa._configure = function (_0x15fa12, _0x1818a1, _0x13b91e) {
          _0x101d1d = _0x15fa12;
          _0x210f67 = _0x1818a1;
          _0x526151 = _0x13b91e;
        };
        _0x434c23.exports;
      }, function () {
        return {
          "./namespace": _0x1455c4,
          "./field": _0x1c01d1,
          "./enum": _0xf40985,
          "./oneof": _0x4124f2,
          "./util": _0x32e598
        };
      });
      var _0x32e598 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/util.js";
      _0x1bbca6.define(_0x32e598, function (_0x1db04e, _0x4f3a0e, _0x5bbc9f, _0x155cf6, _0x39dac1) {
        var _0x39d60d;
        var _0x5d5e63;
        _0x5bbc9f.exports = _0x4f3a0e("./util/minimal")
        var _0x5e5948 = _0x5bbc9f.exports;
        var _0x331df8 = _0x4f3a0e("./roots");
        _0x5e5948.codegen = _0x4f3a0e("@protobufjs/codegen");
        _0x5e5948.fetch = _0x4f3a0e("@protobufjs/fetch");
        _0x5e5948.path = _0x4f3a0e("@protobufjs/path");
        _0x5e5948.fs = _0x5e5948.inquire("fs");
        _0x5e5948.toArray = function (_0x1881b1) {
          if (_0x1881b1) {
            for (var _0x27b9aa = Object.keys(_0x1881b1), _0x3de517 = new Array(_0x27b9aa.length), _0x5446ea = 0; _0x5446ea < _0x27b9aa.length;) {
              _0x3de517[_0x5446ea] = _0x1881b1[_0x27b9aa[_0x5446ea++]];
            }
            return _0x3de517;
          }
          return [];
        };
        _0x5e5948.toObject = function (_0x2dee92) {
          for (var _0x1309d6 = {}, _0x55e29e = 0; _0x55e29e < _0x2dee92.length;) {
            var _0x188dbd = _0x2dee92[_0x55e29e++];
            var _0x811165 = _0x2dee92[_0x55e29e++];
            undefined !== _0x811165 && (_0x1309d6[_0x188dbd] = _0x811165);
          }
          return _0x1309d6;
        };
        var _0x3259a7 = /\\/g;
        var _0x3c42ed = /"/g;
        _0x5e5948.isReserved = function (_0x2fe9a5) {
          return /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/.test(_0x2fe9a5);
        };
        _0x5e5948.safeProp = function (_0x3e4132) {
          return !/^[$\w_]+$/.test(_0x3e4132) || _0x5e5948.isReserved(_0x3e4132) ? "[\"" + _0x3e4132.replace(_0x3259a7, "\\\\").replace(_0x3c42ed, "\\\"") + "\"]" : "." + _0x3e4132;
        };
        _0x5e5948.ucFirst = function (_0x3318bd) {
          return _0x3318bd.charAt(0).toUpperCase() + _0x3318bd.substring(1);
        };
        var _0x83f830 = /_([a-z])/g;
        _0x5e5948.camelCase = function (_0x5b0b06) {
          return _0x5b0b06.substring(0, 1) + _0x5b0b06.substring(1).replace(_0x83f830, function (_0x520016, _0x36d4f6) {
            return _0x36d4f6.toUpperCase();
          });
        };
        _0x5e5948.compareFieldsById = function (_0x4ff257, _0x2221f7) {
          return _0x4ff257.id - _0x2221f7.id;
        };
        _0x5e5948.decorateType = function (_0x2ed115, _0x3830e3) {
          if (_0x2ed115.$type) {
            _0x3830e3 && _0x2ed115.$type.name !== _0x3830e3 && (_0x5e5948.decorateRoot.remove(_0x2ed115.$type), _0x2ed115.$type.name = _0x3830e3, _0x5e5948.decorateRoot.add(_0x2ed115.$type));
            return _0x2ed115.$type;
          }
          _0x39d60d || (_0x39d60d = _0x4f3a0e("./type"));
          var _0x3ef525 = new _0x39d60d(_0x3830e3 || _0x2ed115.name);
          _0x5e5948.decorateRoot.add(_0x3ef525);
          _0x3ef525.ctor = _0x2ed115;
          Object.defineProperty(_0x2ed115, "$type", {
            value: _0x3ef525,
            enumerable: false
          });
          Object.defineProperty(_0x2ed115.prototype, "$type", {
            value: _0x3ef525,
            enumerable: false
          });
          return _0x3ef525;
        };
        var _0x4e497e = 0;
        _0x5e5948.decorateEnum = function (_0x4e1c1b) {
          if (_0x4e1c1b.$type) {
            return _0x4e1c1b.$type;
          }
          _0x5d5e63 || (_0x5d5e63 = _0x4f3a0e("./enum"));
          var _0x4217ad = new _0x5d5e63("Enum" + _0x4e497e++, _0x4e1c1b);
          _0x5e5948.decorateRoot.add(_0x4217ad);
          Object.defineProperty(_0x4e1c1b, "$type", {
            value: _0x4217ad,
            enumerable: false
          });
          return _0x4217ad;
        };
        _0x5e5948.setProperty = function (_0x4c46bf, _0x2b4382, _0x3849ab) {
          if ("object" != typeof _0x4c46bf) {
            throw TypeError("dst must be an object");
          }
          if (!_0x2b4382) {
            throw TypeError("path must be specified");
          }
          return function _0x789b0(_0x50295e, _0x24b377, _0x3a3238) {
            var _0x308c51 = _0x24b377.shift();
            if (_0x24b377.length > 0) {
              _0x50295e[_0x308c51] = _0x789b0(_0x50295e[_0x308c51] || {}, _0x24b377, _0x3a3238);
            } else {
              var _0x45d0c3 = _0x50295e[_0x308c51];
              _0x45d0c3 && (_0x3a3238 = [].concat(_0x45d0c3).concat(_0x3a3238));
              _0x50295e[_0x308c51] = _0x3a3238;
            }
            return _0x50295e;
          }(_0x4c46bf, _0x2b4382 = _0x2b4382.split("."), _0x3849ab);
        };
        Object.defineProperty(_0x5e5948, "decorateRoot", {
          get: function () {
            return _0x331df8.decorated || (_0x331df8.decorated = new (_0x4f3a0e("./root"))());
          }
        });
        _0x5bbc9f.exports;
      }, function () {
        return {
          "./util/minimal": _0x543f65,
          "./roots": _0x46348b,
          "@protobufjs/codegen": _0x4490e7,
          "@protobufjs/fetch": _0x3cf9df,
          "@protobufjs/path": _0x1605e8,
          "./type": _0x1f47da,
          "./enum": _0xf40985,
          "./root": _0x5c567d
        };
      });
      var _0x84b3bd = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/object.js";
      _0x1bbca6.define(_0x84b3bd, function (_0x34f352, _0x311ded, _0x53af8e, _0x1c6270, _0x414a68) {
        _0x53af8e.exports = _0xd47cde;
        _0xd47cde.className = "ReflectionObject";
        var _0x2c32eb;
        var _0x80f1f = _0x311ded("./util");
        function _0xd47cde(_0x56e25d, _0x21d461) {
          if (!_0x80f1f.isString(_0x56e25d)) {
            throw TypeError("name must be a string");
          }
          if (_0x21d461 && !_0x80f1f.isObject(_0x21d461)) {
            throw TypeError("options must be an object");
          }
          this.options = _0x21d461;
          this.parsedOptions = null;
          this.name = _0x56e25d;
          this.parent = null;
          this.resolved = false;
          this.comment = null;
          this.filename = null;
        }
        Object.defineProperties(_0xd47cde.prototype, {
          root: {
            get: function () {
              for (var _0x1028c8 = this; null !== _0x1028c8.parent;) {
                _0x1028c8 = _0x1028c8.parent;
              }
              return _0x1028c8;
            }
          },
          fullName: {
            get: function () {
              for (var _0xc56221 = [this.name], _0x2022b1 = this.parent; _0x2022b1;) {
                _0xc56221.unshift(_0x2022b1.name);
                _0x2022b1 = _0x2022b1.parent;
              }
              return _0xc56221.join(".");
            }
          }
        });
        _0xd47cde.prototype.toJSON = function () {
          throw Error();
        };
        _0xd47cde.prototype.onAdd = function (_0x76db9d) {
          this.parent && this.parent !== _0x76db9d && this.parent.remove(this);
          this.parent = _0x76db9d;
          this.resolved = false;
          var _0x8bfa68 = _0x76db9d.root;
          _0x8bfa68 instanceof _0x2c32eb && _0x8bfa68._handleAdd(this);
        };
        _0xd47cde.prototype.onRemove = function (_0x1e216d) {
          var _0x5d6164 = _0x1e216d.root;
          _0x5d6164 instanceof _0x2c32eb && _0x5d6164._handleRemove(this);
          this.parent = null;
          this.resolved = false;
        };
        _0xd47cde.prototype.resolve = function () {
          this.resolved || this.root instanceof _0x2c32eb && (this.resolved = true);
          return this;
        };
        _0xd47cde.prototype.getOption = function (_0x19e680) {
          if (this.options) {
            return this.options[_0x19e680];
          }
        };
        _0xd47cde.prototype.setOption = function (_0x538c5b, _0x327e39, _0x5ed7f0) {
          _0x5ed7f0 && this.options && undefined !== this.options[_0x538c5b] || ((this.options || (this.options = {}))[_0x538c5b] = _0x327e39);
          return this;
        };
        _0xd47cde.prototype.setParsedOption = function (_0x53e046, _0x44a971, _0x14291b) {
          this.parsedOptions || (this.parsedOptions = []);
          var _0x287a02 = this.parsedOptions;
          if (_0x14291b) {
            var _0x146be1 = _0x287a02.find(function (_0x3fdd6a) {
              return Object.prototype.hasOwnProperty.call(_0x3fdd6a, _0x53e046);
            });
            if (_0x146be1) {
              var _0x308c56 = _0x146be1[_0x53e046];
              _0x80f1f.setProperty(_0x308c56, _0x14291b, _0x44a971);
            } else {
              (_0x146be1 = {})[_0x53e046] = _0x80f1f.setProperty({}, _0x14291b, _0x44a971);
              _0x287a02.push(_0x146be1);
            }
          } else {
            var _0x1e3b93 = {
              _0x53e046: _0x44a971
            };
            _0x287a02.push(_0x1e3b93);
          }
          return this;
        };
        _0xd47cde.prototype.setOptions = function (_0x1ec7e3, _0x242a24) {
          if (_0x1ec7e3) {
            for (var _0x20a27e = Object.keys(_0x1ec7e3), _0x2c4771 = 0; _0x2c4771 < _0x20a27e.length; ++_0x2c4771) {
              this.setOption(_0x20a27e[_0x2c4771], _0x1ec7e3[_0x20a27e[_0x2c4771]], _0x242a24);
            }
          }
          return this;
        };
        _0xd47cde.prototype.toString = function () {
          var _0x87a5ad = this.constructor.className;
          var _0x5d291b = this.fullName;
          return _0x5d291b.length ? _0x87a5ad + " " + _0x5d291b : _0x87a5ad;
        };
        _0xd47cde._configure = function (_0x354c0f) {
          _0x2c32eb = _0x354c0f;
        };
        _0x53af8e.exports;
      }, function () {
        return {
          "./util": _0x32e598
        };
      });
      var _0xf40985 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/enum.js";
      _0x1bbca6.define(_0xf40985, function (_0x413626, _0x3990b2, _0x5f0876, _0x4c280e, _0x265da7) {
        _0x5f0876.exports = _0x2b5635;
        var _0x469964 = _0x3990b2("./object");
        ((_0x2b5635.prototype = Object.create(_0x469964.prototype)).constructor = _0x2b5635).className = "Enum";
        var _0x17cd59 = _0x3990b2("./namespace");
        var _0x2fe4a2 = _0x3990b2("./util");
        function _0x2b5635(_0x430afe, _0x5a1ba9, _0x333fc5, _0x372871, _0x40c551) {
          if (_0x469964.call(this, _0x430afe, _0x333fc5), _0x5a1ba9 && "object" != typeof _0x5a1ba9) {
            throw TypeError("values must be an object");
          }
          if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = _0x372871, this.comments = _0x40c551 || {}, this.reserved = undefined, _0x5a1ba9) {
            for (var _0x31ec2f = Object.keys(_0x5a1ba9), _0xb66f34 = 0; _0xb66f34 < _0x31ec2f.length; ++_0xb66f34) {
              "number" == typeof _0x5a1ba9[_0x31ec2f[_0xb66f34]] && (this.valuesById[this.values[_0x31ec2f[_0xb66f34]] = _0x5a1ba9[_0x31ec2f[_0xb66f34]]] = _0x31ec2f[_0xb66f34]);
            }
          }
        }
        _0x2b5635.fromJSON = function (_0x1641e6, _0x345d49) {
          var _0x156b98 = new _0x2b5635(_0x1641e6, _0x345d49.values, _0x345d49.options, _0x345d49.comment, _0x345d49.comments);
          _0x156b98.reserved = _0x345d49.reserved;
          return _0x156b98;
        };
        _0x2b5635.prototype.toJSON = function (_0x3f09b1) {
          var _0x15307e = !!_0x3f09b1 && Boolean(_0x3f09b1.keepComments);
          return _0x2fe4a2.toObject(["options", this.options, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : undefined, "comment", _0x15307e ? this.comment : undefined, "comments", _0x15307e ? this.comments : undefined]);
        };
        _0x2b5635.prototype.add = function (_0x1ed719, _0x2788cc, _0x38bef1) {
          if (!_0x2fe4a2.isString(_0x1ed719)) {
            throw TypeError("name must be a string");
          }
          if (!_0x2fe4a2.isInteger(_0x2788cc)) {
            throw TypeError("id must be an integer");
          }
          if (undefined !== this.values[_0x1ed719]) {
            throw Error("duplicate name '" + _0x1ed719 + "' in " + this);
          }
          if (this.isReservedId(_0x2788cc)) {
            throw Error("id " + _0x2788cc + " is reserved in " + this);
          }
          if (this.isReservedName(_0x1ed719)) {
            throw Error("name '" + _0x1ed719 + "' is reserved in " + this);
          }
          if (undefined !== this.valuesById[_0x2788cc]) {
            if (!this.options || !this.options.allow_alias) {
              throw Error("duplicate id " + _0x2788cc + " in " + this);
            }
            this.values[_0x1ed719] = _0x2788cc;
          } else {
            this.valuesById[this.values[_0x1ed719] = _0x2788cc] = _0x1ed719;
          }
          this.comments[_0x1ed719] = _0x38bef1 || null;
          return this;
        };
        _0x2b5635.prototype.remove = function (_0x14e34f) {
          if (!_0x2fe4a2.isString(_0x14e34f)) {
            throw TypeError("name must be a string");
          }
          var _0x2f4152 = this.values[_0x14e34f];
          if (null == _0x2f4152) {
            throw Error("name '" + _0x14e34f + "' does not exist in " + this);
          }
          delete this.valuesById[_0x2f4152];
          delete this.values[_0x14e34f];
          delete this.comments[_0x14e34f];
          return this;
        };
        _0x2b5635.prototype.isReservedId = function (_0x4383bb) {
          return _0x17cd59.isReservedId(this.reserved, _0x4383bb);
        };
        _0x2b5635.prototype.isReservedName = function (_0x143ea5) {
          return _0x17cd59.isReservedName(this.reserved, _0x143ea5);
        };
        _0x5f0876.exports;
      }, function () {
        return {
          "./object": _0x84b3bd,
          "./namespace": _0x1455c4,
          "./util": _0x32e598
        };
      });
      var _0x5ce4d7 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/encoder.js";
      _0x1bbca6.define(_0x5ce4d7, function (_0x507fa1, _0x54dd25, _0x22852d, _0x3cdc89, _0x2ade68) {
        _0x22852d.exports = function (_0x3b7dfe) {
          for (var _0x340770, _0x2f4d0a = _0x48b608.codegen(["m", "w"], _0x3b7dfe.name + "$encode")("if(!w)")("w=Writer.create()"), _0x541dc9 = _0x3b7dfe.fieldsArray.slice().sort(_0x48b608.compareFieldsById), _0x111d10 = 0; _0x111d10 < _0x541dc9.length; ++_0x111d10) {
            var _0x2bef07 = _0x541dc9[_0x111d10].resolve();
            var _0x2cd127 = _0x3b7dfe._fieldsArray.indexOf(_0x2bef07);
            var _0x33319a = _0x2bef07.resolvedType instanceof _0x2621f0 ? "int32" : _0x2bef07.type;
            var _0x2770e7 = _0x480300.basic[_0x33319a];
            _0x340770 = "m" + _0x48b608.safeProp(_0x2bef07.name);
            _0x2bef07.map ? (_0x2f4d0a("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", _0x340770, _0x2bef07.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", _0x340770)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (_0x2bef07.id << 3 | 2) >>> 0, 8 | _0x480300.mapKey[_0x2bef07.keyType], _0x2bef07.keyType), undefined === _0x2770e7 ? _0x2f4d0a("types[%i].encode(%s[ks[i]],w.uint32(18).fork()).ldelim().ldelim()", _0x2cd127, _0x340770) : _0x2f4d0a(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | _0x2770e7, _0x33319a, _0x340770), _0x2f4d0a("}")("}")) : _0x2bef07.repeated ? (_0x2f4d0a("if(%s!=null&&%s.length){", _0x340770, _0x340770), _0x2bef07.packed && undefined !== _0x480300.packed[_0x33319a] ? _0x2f4d0a("w.uint32(%i).fork()", (_0x2bef07.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", _0x340770)("w.%s(%s[i])", _0x33319a, _0x340770)("w.ldelim()") : (_0x2f4d0a("for(var i=0;i<%s.length;++i)", _0x340770), undefined === _0x2770e7 ? _0xb70df6(_0x2f4d0a, _0x2bef07, _0x2cd127, _0x340770 + "[i]") : _0x2f4d0a("w.uint32(%i).%s(%s[i])", (_0x2bef07.id << 3 | _0x2770e7) >>> 0, _0x33319a, _0x340770)), _0x2f4d0a("}")) : (_0x2bef07.optional && _0x2f4d0a("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", _0x340770, _0x2bef07.name), undefined === _0x2770e7 ? _0xb70df6(_0x2f4d0a, _0x2bef07, _0x2cd127, _0x340770) : _0x2f4d0a("w.uint32(%i).%s(%s)", (_0x2bef07.id << 3 | _0x2770e7) >>> 0, _0x33319a, _0x340770));
          }
          return _0x2f4d0a("return w");
        };
        var _0x2621f0 = _0x54dd25("./enum");
        var _0x480300 = _0x54dd25("./types");
        var _0x48b608 = _0x54dd25("./util");
        function _0xb70df6(_0x3dd8b2, _0x5e1e10, _0x3511cf, _0x4364d6) {
          return _0x5e1e10.resolvedType.group ? _0x3dd8b2("types[%i].encode(%s,w.uint32(%i)).uint32(%i)", _0x3511cf, _0x4364d6, (_0x5e1e10.id << 3 | 3) >>> 0, (_0x5e1e10.id << 3 | 4) >>> 0) : _0x3dd8b2("types[%i].encode(%s,w.uint32(%i).fork()).ldelim()", _0x3511cf, _0x4364d6, (_0x5e1e10.id << 3 | 2) >>> 0);
        }
        _0x22852d.exports;
      }, function () {
        return {
          "./enum": _0xf40985,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0x227d47 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/index-light.js";
      _0x1bbca6.define(_0x227d47, function (_0x27504f, _0x589308, _0x1ba143, _0x108185, _0x4a1964) {
        _0x1ba143.exports = _0x589308("./index-minimal")
        var _0x20b8e0 = _0x1ba143.exports;
        _0x20b8e0.build = "light";
        _0x20b8e0.load = function (_0x762a9e, _0x37de7c, _0x2215cf) {
          "function" == typeof _0x37de7c ? (_0x2215cf = _0x37de7c, _0x37de7c = new _0x20b8e0.Root()) : _0x37de7c || (_0x37de7c = new _0x20b8e0.Root());
          return _0x37de7c.load(_0x762a9e, _0x2215cf);
        };
        _0x20b8e0.loadSync = function (_0x263aed, _0x5cb8dc) {
          _0x5cb8dc || (_0x5cb8dc = new _0x20b8e0.Root());
          return _0x5cb8dc.loadSync(_0x263aed);
        };
        _0x20b8e0.encoder = _0x589308("./encoder");
        _0x20b8e0.decoder = _0x589308("./decoder");
        _0x20b8e0.verifier = _0x589308("./verifier");
        _0x20b8e0.converter = _0x589308("./converter");
        _0x20b8e0.ReflectionObject = _0x589308("./object");
        _0x20b8e0.Namespace = _0x589308("./namespace");
        _0x20b8e0.Root = _0x589308("./root");
        _0x20b8e0.Enum = _0x589308("./enum");
        _0x20b8e0.Type = _0x589308("./type");
        _0x20b8e0.Field = _0x589308("./field");
        _0x20b8e0.OneOf = _0x589308("./oneof");
        _0x20b8e0.MapField = _0x589308("./mapfield");
        _0x20b8e0.Service = _0x589308("./service");
        _0x20b8e0.Method = _0x589308("./method");
        _0x20b8e0.Message = _0x589308("./message");
        _0x20b8e0.wrappers = _0x589308("./wrappers");
        _0x20b8e0.types = _0x589308("./types");
        _0x20b8e0.util = _0x589308("./util");
        _0x20b8e0.ReflectionObject._configure(_0x20b8e0.Root);
        _0x20b8e0.Namespace._configure(_0x20b8e0.Type, _0x20b8e0.Service, _0x20b8e0.Enum);
        _0x20b8e0.Root._configure(_0x20b8e0.Type);
        _0x20b8e0.Field._configure(_0x20b8e0.Type);
        _0x1ba143.exports;
      }, function () {
        return {
          "./index-minimal": _0x5a9fc8,
          "./encoder": _0x5ce4d7,
          "./decoder": _0x2c6af8,
          "./verifier": _0xb1094b,
          "./converter": _0x39cced,
          "./object": _0x84b3bd,
          "./namespace": _0x1455c4,
          "./root": _0x5c567d,
          "./enum": _0xf40985,
          "./type": _0x1f47da,
          "./field": _0x1c01d1,
          "./oneof": _0x4124f2,
          "./mapfield": _0xab755e,
          "./service": _0x188a74,
          "./method": _0x2d7f7d,
          "./message": _0x2479b7,
          "./wrappers": _0x102f99,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0x55056a = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/tokenize.js";
      _0x1bbca6.define(_0x55056a, function (_0x5205c3, _0x47ef39, _0x2c4114, _0x2e61ba, _0x7a24db) {
        _0x2c4114.exports = _0x2f87b0;
        var _0x37064b = /[\s{}=;:[\],'"()<>]/g;
        var _0x312902 = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g;
        var _0x15e626 = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g;
        var _0x2b6d98 = /^ *[*/]+ */;
        var _0x5bd1c2 = /^\s*\*?\/*/;
        var _0x5d5c9f = /\n/g;
        var _0xc33a27 = /\s/;
        var _0x51465c = /\\(.?)/g;
        var _0x3884a3 = {
          0: "\0",
          r: "\r",
          n: "\n",
          t: "\t"
        };
        function _0x3f0603(_0x12f67e) {
          return _0x12f67e.replace(_0x51465c, function (_0x278d23, _0x34f18c) {
            switch (_0x34f18c) {
              case "\\":
              case "":
                return _0x34f18c;
              default:
                return _0x3884a3[_0x34f18c] || "";
            }
          });
        }
        function _0x2f87b0(_0x2d0eb2, _0x50f94a) {
          _0x2d0eb2 = _0x2d0eb2.toString();
          var _0x291dbb = 0;
          var _0x7cea28 = _0x2d0eb2.length;
          var _0x193bd0 = 1;
          var _0x1da0d8 = null;
          var _0x2060d3 = null;
          var _0x221770 = 0;
          var _0x2f261e = false;
          var _0x110d9a = false;
          var _0x3b2316 = [];
          var _0x4ef1ad = null;
          function _0x539fc0(_0x4bbc4d) {
            return Error("illegal " + _0x4bbc4d + " (line " + _0x193bd0 + ")");
          }
          function _0x5d8324(_0x1618ca) {
            return _0x2d0eb2.charAt(_0x1618ca);
          }
          function _0x28b1b1(_0x5a4b32, _0x635544, _0x5982d3) {
            _0x1da0d8 = _0x2d0eb2.charAt(_0x5a4b32++);
            _0x221770 = _0x193bd0;
            _0x2f261e = false;
            _0x110d9a = _0x5982d3;
            var _0xbb11de;
            var _0x245a46 = _0x5a4b32 - (_0x50f94a ? 2 : 3);
            do {
              if (--_0x245a46 < 0 || "\n" === (_0xbb11de = _0x2d0eb2.charAt(_0x245a46))) {
                _0x2f261e = true;
                break;
              }
            } while (" " === _0xbb11de || "\t" === _0xbb11de);
            for (var _0x127874 = _0x2d0eb2.substring(_0x5a4b32, _0x635544).split(_0x5d5c9f), _0x30d0c8 = 0; _0x30d0c8 < _0x127874.length; ++_0x30d0c8) {
              _0x127874[_0x30d0c8] = _0x127874[_0x30d0c8].replace(_0x50f94a ? _0x5bd1c2 : _0x2b6d98, "").trim();
            }
            _0x2060d3 = _0x127874.join("\n").trim();
          }
          function _0xeb8dcf(_0x599a4f) {
            var _0x488278 = _0x2f1b3f(_0x599a4f);
            var _0x1c2ae1 = _0x2d0eb2.substring(_0x599a4f, _0x488278);
            return /^\s*\/{1,2}/.test(_0x1c2ae1);
          }
          function _0x2f1b3f(_0x5ee785) {
            for (var _0x4b47fa = _0x5ee785; _0x4b47fa < _0x7cea28 && "\n" !== _0x5d8324(_0x4b47fa);) {
              _0x4b47fa++;
            }
            return _0x4b47fa;
          }
          function _0x2f9e3e() {
            if (_0x3b2316.length > 0) {
              return _0x3b2316.shift();
            }
            if (_0x4ef1ad) {
              return function () {
                var _0x46400f = "'" === _0x4ef1ad ? _0x15e626 : _0x312902;
                _0x46400f.lastIndex = _0x291dbb - 1;
                var _0x44838d = _0x46400f.exec(_0x2d0eb2);
                if (!_0x44838d) {
                  throw _0x539fc0("string");
                }
                _0x291dbb = _0x46400f.lastIndex;
                _0x59ea49(_0x4ef1ad);
                _0x4ef1ad = null;
                return _0x3f0603(_0x44838d[1]);
              }();
            }
            var _0x4ddc1e;
            var _0x46c267;
            var _0x36c579;
            var _0x4d02bf;
            var _0x299b41;
            var _0x3341c4 = 0 === _0x291dbb;
            do {
              if (_0x291dbb === _0x7cea28) {
                return null;
              }
              for (_0x4ddc1e = false; _0xc33a27.test(_0x36c579 = _0x5d8324(_0x291dbb));) {
                if ("\n" === _0x36c579 && (_0x3341c4 = true, ++_0x193bd0), ++_0x291dbb === _0x7cea28) {
                  return null;
                }
              }
              if ("/" === _0x5d8324(_0x291dbb)) {
                if (++_0x291dbb === _0x7cea28) {
                  throw _0x539fc0("comment");
                }
                if ("/" === _0x5d8324(_0x291dbb)) {
                  if (_0x50f94a) {
                    if (_0x4d02bf = _0x291dbb, _0x299b41 = false, _0xeb8dcf(_0x291dbb)) {
                      _0x299b41 = true;
                      do {
                        if ((_0x291dbb = _0x2f1b3f(_0x291dbb)) === _0x7cea28) {
                          break;
                        }
                        _0x291dbb++;
                      } while (_0xeb8dcf(_0x291dbb));
                    } else {
                      _0x291dbb = Math.min(_0x7cea28, _0x2f1b3f(_0x291dbb) + 1);
                    }
                    _0x299b41 && _0x28b1b1(_0x4d02bf, _0x291dbb, _0x3341c4);
                    _0x193bd0++;
                    _0x4ddc1e = true;
                  } else {
                    for (_0x299b41 = "/" === _0x5d8324(_0x4d02bf = _0x291dbb + 1); "\n" !== _0x5d8324(++_0x291dbb);) {
                      if (_0x291dbb === _0x7cea28) {
                        return null;
                      }
                    }
                    ++_0x291dbb;
                    _0x299b41 && _0x28b1b1(_0x4d02bf, _0x291dbb - 1, _0x3341c4);
                    ++_0x193bd0;
                    _0x4ddc1e = true;
                  }
                } else {
                  if ("*" !== (_0x36c579 = _0x5d8324(_0x291dbb))) {
                    return "/";
                  }
                  _0x4d02bf = _0x291dbb + 1;
                  _0x299b41 = _0x50f94a || "*" === _0x5d8324(_0x4d02bf);
                  do {
                    if ("\n" === _0x36c579 && ++_0x193bd0, ++_0x291dbb === _0x7cea28) {
                      throw _0x539fc0("comment");
                    }
                    _0x46c267 = _0x36c579;
                    _0x36c579 = _0x5d8324(_0x291dbb);
                  } while ("*" !== _0x46c267 || "/" !== _0x36c579);
                  ++_0x291dbb;
                  _0x299b41 && _0x28b1b1(_0x4d02bf, _0x291dbb - 2, _0x3341c4);
                  _0x4ddc1e = true;
                }
              }
            } while (_0x4ddc1e);
            var _0x6aa0ab = _0x291dbb;
            if (_0x37064b.lastIndex = 0, !_0x37064b.test(_0x5d8324(_0x6aa0ab++))) {
              for (; _0x6aa0ab < _0x7cea28 && !_0x37064b.test(_0x5d8324(_0x6aa0ab));) {
                ++_0x6aa0ab;
              }
            }
            var _0xdff5f3 = _0x2d0eb2.substring(_0x291dbb, _0x291dbb = _0x6aa0ab);
            "\"" !== _0xdff5f3 && "'" !== _0xdff5f3 || (_0x4ef1ad = _0xdff5f3);
            return _0xdff5f3;
          }
          function _0x59ea49(_0x39f3da) {
            _0x3b2316.push(_0x39f3da);
          }
          function _0x8d4fa9() {
            if (!_0x3b2316.length) {
              var _0x2dca49 = _0x2f9e3e();
              if (null === _0x2dca49) {
                return null;
              }
              _0x59ea49(_0x2dca49);
            }
            return _0x3b2316[0];
          }
          return Object.defineProperty({
            next: _0x2f9e3e,
            peek: _0x8d4fa9,
            push: _0x59ea49,
            skip: function (_0x257f14, _0x22ccd5) {
              var _0x480e1a = _0x8d4fa9();
              if (_0x480e1a === _0x257f14) {
                _0x2f9e3e();
                return true;
              }
              if (!_0x22ccd5) {
                throw _0x539fc0("token '" + _0x480e1a + "', '" + _0x257f14 + "' expected");
              }
              return false;
            },
            cmnt: function (_0x21ba86) {
              var _0x2a62d6 = null;
              undefined === _0x21ba86 ? _0x221770 === _0x193bd0 - 1 && (_0x50f94a || "*" === _0x1da0d8 || _0x2f261e) && (_0x2a62d6 = _0x110d9a ? _0x2060d3 : null) : (_0x221770 < _0x21ba86 && _0x8d4fa9(), _0x221770 !== _0x21ba86 || _0x2f261e || !_0x50f94a && "/" !== _0x1da0d8 || (_0x2a62d6 = _0x110d9a ? null : _0x2060d3));
              return _0x2a62d6;
            }
          }, "line", {
            get: function () {
              return _0x193bd0;
            }
          });
        }
        _0x2f87b0.unescape = _0x3f0603;
        _0x2c4114.exports;
      }, {});
      var _0x3f59d6 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/parse.js";
      _0x1bbca6.define(_0x3f59d6, function (_0x3b382b, _0x8d469c, _0x1d15c2, _0x27f452, _0x4a38aa) {
        _0x1d15c2.exports = _0x201447;
        _0x201447.filename = null;
        _0x201447.defaults = {
          keepCase: false
        };
        var _0x3fc322 = _0x8d469c("./tokenize");
        var _0x3ea9f0 = _0x8d469c("./root");
        var _0x5a7b92 = _0x8d469c("./type");
        var _0xcbd065 = _0x8d469c("./field");
        var _0x3d3ec5 = _0x8d469c("./mapfield");
        var _0x490aa7 = _0x8d469c("./oneof");
        var _0x2810f2 = _0x8d469c("./enum");
        var _0x4670e2 = _0x8d469c("./service");
        var _0x114800 = _0x8d469c("./method");
        var _0x122c3c = _0x8d469c("./types");
        var _0x328bba = _0x8d469c("./util");
        var _0x11c383 = /^[1-9][0-9]*$/;
        var _0x253310 = /^-?[1-9][0-9]*$/;
        var _0x5a27e7 = /^0[x][0-9a-fA-F]+$/;
        var _0x165711 = /^-?0[x][0-9a-fA-F]+$/;
        var _0x2a331b = /^0[0-7]+$/;
        var _0x1484c8 = /^-?0[0-7]+$/;
        var _0xa021ba = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/;
        var _0x70cc61 = /^[a-zA-Z_][a-zA-Z_0-9]*$/;
        var _0x52e637 = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/;
        var _0x167ef6 = /^(?:\.[a-zA-Z_][a-zA-Z_0-9]*)+$/;
        function _0x201447(_0x5a74d2, _0x3d42df, _0x385b75) {
          _0x3d42df instanceof _0x3ea9f0 || (_0x385b75 = _0x3d42df, _0x3d42df = new _0x3ea9f0());
          _0x385b75 || (_0x385b75 = _0x201447.defaults);
          var _0x9006e6;
          var _0x1377c2;
          var _0x307f36;
          var _0x40be73;
          var _0x397b28;
          var _0x3abd82 = _0x385b75.preferTrailingComment || false;
          var _0x25fceb = _0x3fc322(_0x5a74d2, _0x385b75.alternateCommentMode || false);
          var _0x4a1367 = _0x25fceb.next;
          var _0x865fb9 = _0x25fceb.push;
          var _0x1acb09 = _0x25fceb.peek;
          var _0x4f65f1 = _0x25fceb.skip;
          var _0x106aad = _0x25fceb.cmnt;
          var _0x123618 = true;
          var _0x1cc8aa = false;
          var _0x3a79b3 = _0x3d42df;
          var _0x46e6c4 = _0x385b75.keepCase ? function (_0x575948) {
            return _0x575948;
          } : _0x328bba.camelCase;
          function _0x183df6(_0x24f383, _0x802525, _0x5ecd42) {
            var _0x24a1d3 = _0x201447.filename;
            _0x5ecd42 || (_0x201447.filename = null);
            return Error("illegal " + (_0x802525 || "token") + " '" + _0x24f383 + "' (" + (_0x24a1d3 ? _0x24a1d3 + ", " : "") + "line " + _0x25fceb.line + ")");
          }
          function _0x2aa2fa() {
            var _0x976c5c;
            var _0x22d034 = [];
            do {
              if ("\"" !== (_0x976c5c = _0x4a1367()) && "'" !== _0x976c5c) {
                throw _0x183df6(_0x976c5c);
              }
              _0x22d034.push(_0x4a1367());
              _0x4f65f1(_0x976c5c);
              _0x976c5c = _0x1acb09();
            } while ("\"" === _0x976c5c || "'" === _0x976c5c);
            return _0x22d034.join("");
          }
          function _0x5212f7(_0x28816d) {
            var _0x3525c4 = _0x4a1367();
            switch (_0x3525c4) {
              case "'":
              case "\"":
                _0x865fb9(_0x3525c4);
                return _0x2aa2fa();
              case "true":
              case "TRUE":
                return true;
              case "false":
              case "FALSE":
                return false;
            }
            try {
              return function (_0x40f177, _0x1ab6d9) {
                var _0x4baa9b = 1;
                "-" === _0x40f177.charAt(0) && (_0x4baa9b = -1, _0x40f177 = _0x40f177.substring(1));
                switch (_0x40f177) {
                  case "inf":
                  case "INF":
                  case "Inf":
                    return _0x4baa9b * Infinity;
                  case "nan":
                  case "NAN":
                  case "Nan":
                  case "NaN":
                    return NaN;
                  case "0":
                    return 0;
                }
                if (_0x11c383.test(_0x40f177)) {
                  return _0x4baa9b * parseInt(_0x40f177, 10);
                }
                if (_0x5a27e7.test(_0x40f177)) {
                  return _0x4baa9b * parseInt(_0x40f177, 16);
                }
                if (_0x2a331b.test(_0x40f177)) {
                  return _0x4baa9b * parseInt(_0x40f177, 8);
                }
                if (_0xa021ba.test(_0x40f177)) {
                  return _0x4baa9b * parseFloat(_0x40f177);
                }
                throw _0x183df6(_0x40f177, "number", _0x1ab6d9);
              }(_0x3525c4, true);
            } catch (_0x29540f) {
              if (_0x28816d && _0x52e637.test(_0x3525c4)) {
                return _0x3525c4;
              }
              throw _0x183df6(_0x3525c4, "value");
            }
          }
          function _0x1ce893(_0x3a030e, _0x1316a1) {
            var _0x5e1185;
            var _0x1e3023;
            do {
              !_0x1316a1 || "\"" !== (_0x5e1185 = _0x1acb09()) && "'" !== _0x5e1185 ? _0x3a030e.push([_0x1e3023 = _0x227186(_0x4a1367()), _0x4f65f1("to", true) ? _0x227186(_0x4a1367()) : _0x1e3023]) : _0x3a030e.push(_0x2aa2fa());
            } while (_0x4f65f1(",", true));
            _0x4f65f1(";");
          }
          function _0x227186(_0x52c927, _0x18da07) {
            switch (_0x52c927) {
              case "max":
              case "MAX":
              case "Max":
                return 536870911;
              case "0":
                return 0;
            }
            if (!_0x18da07 && "-" === _0x52c927.charAt(0)) {
              throw _0x183df6(_0x52c927, "id");
            }
            if (_0x253310.test(_0x52c927)) {
              return parseInt(_0x52c927, 10);
            }
            if (_0x165711.test(_0x52c927)) {
              return parseInt(_0x52c927, 16);
            }
            if (_0x1484c8.test(_0x52c927)) {
              return parseInt(_0x52c927, 8);
            }
            throw _0x183df6(_0x52c927, "id");
          }
          function _0x160f5a() {
            if (undefined !== _0x9006e6) {
              throw _0x183df6("package");
            }
            if (_0x9006e6 = _0x4a1367(), !_0x52e637.test(_0x9006e6)) {
              throw _0x183df6(_0x9006e6, "name");
            }
            _0x3a79b3 = _0x3a79b3.define(_0x9006e6);
            _0x4f65f1(";");
          }
          function _0x2f777e() {
            var _0x17df9c;
            var _0x4bcbd4 = _0x1acb09();
            switch (_0x4bcbd4) {
              case "weak":
                _0x17df9c = _0x307f36 || (_0x307f36 = []);
                _0x4a1367();
                break;
              case "public":
                _0x4a1367();
              default:
                _0x17df9c = _0x1377c2 || (_0x1377c2 = []);
            }
            _0x4bcbd4 = _0x2aa2fa();
            _0x4f65f1(";");
            _0x17df9c.push(_0x4bcbd4);
          }
          function _0x32cac7() {
            if (_0x4f65f1("="), _0x40be73 = _0x2aa2fa(), !(_0x1cc8aa = "proto3" === _0x40be73) && "proto2" !== _0x40be73) {
              throw _0x183df6(_0x40be73, "syntax");
            }
            _0x4f65f1(";");
          }
          function _0x5d4390(_0x46d633, _0x3b9050) {
            switch (_0x3b9050) {
              case "option":
                _0xe5a3e8(_0x46d633, _0x3b9050);
                _0x4f65f1(";");
                return true;
              case "message":
                (function (_0x3f0be5, _0x12dc1b) {
                  if (!_0x70cc61.test(_0x12dc1b = _0x4a1367())) {
                    throw _0x183df6(_0x12dc1b, "type name");
                  }
                  var _0x4e1311 = new _0x5a7b92(_0x12dc1b);
                  _0x1cd7b4(_0x4e1311, function (_0x5a6c2b) {
                    if (!_0x5d4390(_0x4e1311, _0x5a6c2b)) {
                      switch (_0x5a6c2b) {
                        case "map":
                          !function (_0x1d72b4) {
                            _0x4f65f1("<");
                            var _0x46c557 = _0x4a1367();
                            if (undefined === _0x122c3c.mapKey[_0x46c557]) {
                              throw _0x183df6(_0x46c557, "type");
                            }
                            _0x4f65f1(",");
                            var _0x27a7d0 = _0x4a1367();
                            if (!_0x52e637.test(_0x27a7d0)) {
                              throw _0x183df6(_0x27a7d0, "type");
                            }
                            _0x4f65f1(">");
                            var _0x28f996 = _0x4a1367();
                            if (!_0x70cc61.test(_0x28f996)) {
                              throw _0x183df6(_0x28f996, "name");
                            }
                            _0x4f65f1("=");
                            var _0x1aecdf = new _0x3d3ec5(_0x46e6c4(_0x28f996), _0x227186(_0x4a1367()), _0x46c557, _0x27a7d0);
                            _0x1cd7b4(_0x1aecdf, function (_0x4f1ae3) {
                              if ("option" !== _0x4f1ae3) {
                                throw _0x183df6(_0x4f1ae3);
                              }
                              _0xe5a3e8(_0x1aecdf, _0x4f1ae3);
                              _0x4f65f1(";");
                            }, function () {
                              _0x41e800(_0x1aecdf);
                            });
                            _0x1d72b4.add(_0x1aecdf);
                          }(_0x4e1311);
                          break;
                        case "required":
                        case "repeated":
                          _0x248a2f(_0x4e1311, _0x5a6c2b);
                          break;
                        case "optional":
                          _0x248a2f(_0x4e1311, _0x1cc8aa ? "proto3_optional" : "optional");
                          break;
                        case "oneof":
                          !function (_0x45a0d2, _0x526eac) {
                            if (!_0x70cc61.test(_0x526eac = _0x4a1367())) {
                              throw _0x183df6(_0x526eac, "name");
                            }
                            var _0x2e2af4 = new _0x490aa7(_0x46e6c4(_0x526eac));
                            _0x1cd7b4(_0x2e2af4, function (_0x49d12f) {
                              "option" === _0x49d12f ? (_0xe5a3e8(_0x2e2af4, _0x49d12f), _0x4f65f1(";")) : (_0x865fb9(_0x49d12f), _0x248a2f(_0x2e2af4, "optional"));
                            });
                            _0x45a0d2.add(_0x2e2af4);
                          }(_0x4e1311, _0x5a6c2b);
                          break;
                        case "extensions":
                          _0x1ce893(_0x4e1311.extensions || (_0x4e1311.extensions = []));
                          break;
                        case "reserved":
                          _0x1ce893(_0x4e1311.reserved || (_0x4e1311.reserved = []), true);
                          break;
                        default:
                          if (!_0x1cc8aa || !_0x52e637.test(_0x5a6c2b)) {
                            throw _0x183df6(_0x5a6c2b);
                          }
                          _0x865fb9(_0x5a6c2b);
                          _0x248a2f(_0x4e1311, "optional");
                      }
                    }
                  });
                  _0x3f0be5.add(_0x4e1311);
                })(_0x46d633, _0x3b9050);
                return true;
              case "enum":
                (function (_0x2bb6bd, _0x4b0b88) {
                  if (!_0x70cc61.test(_0x4b0b88 = _0x4a1367())) {
                    throw _0x183df6(_0x4b0b88, "name");
                  }
                  var _0x42c6c1 = new _0x2810f2(_0x4b0b88);
                  _0x1cd7b4(_0x42c6c1, function (_0x3edf25) {
                    switch (_0x3edf25) {
                      case "option":
                        _0xe5a3e8(_0x42c6c1, _0x3edf25);
                        _0x4f65f1(";");
                        break;
                      case "reserved":
                        _0x1ce893(_0x42c6c1.reserved || (_0x42c6c1.reserved = []), true);
                        break;
                      default:
                        !function (_0x241675, _0x4255c1) {
                          if (!_0x70cc61.test(_0x4255c1)) {
                            throw _0x183df6(_0x4255c1, "name");
                          }
                          _0x4f65f1("=");
                          var _0x1ef73b = _0x227186(_0x4a1367(), true);
                          var _0x35b56c = {};
                          _0x1cd7b4(_0x35b56c, function (_0x272e6a) {
                            if ("option" !== _0x272e6a) {
                              throw _0x183df6(_0x272e6a);
                            }
                            _0xe5a3e8(_0x35b56c, _0x272e6a);
                            _0x4f65f1(";");
                          }, function () {
                            _0x41e800(_0x35b56c);
                          });
                          _0x241675.add(_0x4255c1, _0x1ef73b, _0x35b56c.comment);
                        }(_0x42c6c1, _0x3edf25);
                    }
                  });
                  _0x2bb6bd.add(_0x42c6c1);
                })(_0x46d633, _0x3b9050);
                return true;
              case "service":
                (function (_0x4aa7de, _0x342d57) {
                  if (!_0x70cc61.test(_0x342d57 = _0x4a1367())) {
                    throw _0x183df6(_0x342d57, "service name");
                  }
                  var _0x25000d = new _0x4670e2(_0x342d57);
                  _0x1cd7b4(_0x25000d, function (_0xaf021) {
                    if (!_0x5d4390(_0x25000d, _0xaf021)) {
                      if ("rpc" !== _0xaf021) {
                        throw _0x183df6(_0xaf021);
                      }
                      !function (_0x348745, _0x550a81) {
                        var _0x2c87ba = _0x106aad();
                        var _0x294687 = _0x550a81;
                        if (!_0x70cc61.test(_0x550a81 = _0x4a1367())) {
                          throw _0x183df6(_0x550a81, "name");
                        }
                        var _0x52f360;
                        var _0x4e53fb;
                        var _0x2bed70;
                        var _0x44cd1d;
                        var _0x251d19 = _0x550a81;
                        _0x4f65f1("(");
                        _0x4f65f1("stream", true) && (_0x4e53fb = true);
                        if (!_0x52e637.test(_0x550a81 = _0x4a1367())) {
                          throw _0x183df6(_0x550a81);
                        }
                        _0x52f360 = _0x550a81;
                        _0x4f65f1(")");
                        _0x4f65f1("returns");
                        _0x4f65f1("(");
                        _0x4f65f1("stream", true) && (_0x44cd1d = true);
                        if (!_0x52e637.test(_0x550a81 = _0x4a1367())) {
                          throw _0x183df6(_0x550a81);
                        }
                        _0x2bed70 = _0x550a81;
                        _0x4f65f1(")");
                        var _0x4ca754 = new _0x114800(_0x251d19, _0x294687, _0x52f360, _0x2bed70, _0x4e53fb, _0x44cd1d);
                        _0x4ca754.comment = _0x2c87ba;
                        _0x1cd7b4(_0x4ca754, function (_0x4c32db) {
                          if ("option" !== _0x4c32db) {
                            throw _0x183df6(_0x4c32db);
                          }
                          _0xe5a3e8(_0x4ca754, _0x4c32db);
                          _0x4f65f1(";");
                        });
                        _0x348745.add(_0x4ca754);
                      }(_0x25000d, _0xaf021);
                    }
                  });
                  _0x4aa7de.add(_0x25000d);
                })(_0x46d633, _0x3b9050);
                return true;
              case "extend":
                (function (_0x5bef2e, _0x1ff7f9) {
                  if (!_0x52e637.test(_0x1ff7f9 = _0x4a1367())) {
                    throw _0x183df6(_0x1ff7f9, "reference");
                  }
                  var _0x4f4b97 = _0x1ff7f9;
                  _0x1cd7b4(null, function (_0x59063c) {
                    switch (_0x59063c) {
                      case "required":
                      case "repeated":
                        _0x248a2f(_0x5bef2e, _0x59063c, _0x4f4b97);
                        break;
                      case "optional":
                        _0x248a2f(_0x5bef2e, _0x1cc8aa ? "proto3_optional" : "optional", _0x4f4b97);
                        break;
                      default:
                        if (!_0x1cc8aa || !_0x52e637.test(_0x59063c)) {
                          throw _0x183df6(_0x59063c);
                        }
                        _0x865fb9(_0x59063c);
                        _0x248a2f(_0x5bef2e, "optional", _0x4f4b97);
                    }
                  });
                })(_0x46d633, _0x3b9050);
                return true;
            }
            return false;
          }
          function _0x1cd7b4(_0x519d6a, _0x3ec470, _0x261d5f) {
            var _0x1f4a20 = _0x25fceb.line;
            if (_0x519d6a && ("string" != typeof _0x519d6a.comment && (_0x519d6a.comment = _0x106aad()), _0x519d6a.filename = _0x201447.filename), _0x4f65f1("{", true)) {
              for (var _0xc9a478; "}" !== (_0xc9a478 = _0x4a1367());) {
                _0x3ec470(_0xc9a478);
              }
              _0x4f65f1(";", true);
            } else {
              _0x261d5f && _0x261d5f();
              _0x4f65f1(";");
              _0x519d6a && ("string" != typeof _0x519d6a.comment || _0x3abd82) && (_0x519d6a.comment = _0x106aad(_0x1f4a20) || _0x519d6a.comment);
            }
          }
          function _0x248a2f(_0x3a21ab, _0x5d957c, _0x177dd0) {
            var _0x2b9812 = _0x4a1367();
            if ("group" !== _0x2b9812) {
              if (!_0x52e637.test(_0x2b9812)) {
                throw _0x183df6(_0x2b9812, "type");
              }
              var _0x2de6f8 = _0x4a1367();
              if (!_0x70cc61.test(_0x2de6f8)) {
                throw _0x183df6(_0x2de6f8, "name");
              }
              _0x2de6f8 = _0x46e6c4(_0x2de6f8);
              _0x4f65f1("=");
              var _0x5c70f8 = new _0xcbd065(_0x2de6f8, _0x227186(_0x4a1367()), _0x2b9812, _0x5d957c, _0x177dd0);
              if (_0x1cd7b4(_0x5c70f8, function (_0x15319a) {
                if ("option" !== _0x15319a) {
                  throw _0x183df6(_0x15319a);
                }
                _0xe5a3e8(_0x5c70f8, _0x15319a);
                _0x4f65f1(";");
              }, function () {
                _0x41e800(_0x5c70f8);
              }), "proto3_optional" === _0x5d957c) {
                var _0x1fe90a = new _0x490aa7("_" + _0x2de6f8);
                _0x5c70f8.setOption("proto3_optional", true);
                _0x1fe90a.add(_0x5c70f8);
                _0x3a21ab.add(_0x1fe90a);
              } else {
                _0x3a21ab.add(_0x5c70f8);
              }
              _0x1cc8aa || !_0x5c70f8.repeated || undefined === _0x122c3c.packed[_0x2b9812] && undefined !== _0x122c3c.basic[_0x2b9812] || _0x5c70f8.setOption("packed", false, true);
            } else {
              !function (_0x56b876, _0x156094) {
                var _0x1aa92e = _0x4a1367();
                if (!_0x70cc61.test(_0x1aa92e)) {
                  throw _0x183df6(_0x1aa92e, "name");
                }
                var _0x156c60 = _0x328bba.lcFirst(_0x1aa92e);
                _0x1aa92e === _0x156c60 && (_0x1aa92e = _0x328bba.ucFirst(_0x1aa92e));
                _0x4f65f1("=");
                var _0x33f07a = _0x227186(_0x4a1367());
                var _0xcacd63 = new _0x5a7b92(_0x1aa92e);
                _0xcacd63.group = true;
                var _0x178bae = new _0xcbd065(_0x156c60, _0x33f07a, _0x1aa92e, _0x156094);
                _0x178bae.filename = _0x201447.filename;
                _0x1cd7b4(_0xcacd63, function (_0x50948c) {
                  switch (_0x50948c) {
                    case "option":
                      _0xe5a3e8(_0xcacd63, _0x50948c);
                      _0x4f65f1(";");
                      break;
                    case "required":
                    case "repeated":
                      _0x248a2f(_0xcacd63, _0x50948c);
                      break;
                    case "optional":
                      _0x248a2f(_0xcacd63, _0x1cc8aa ? "proto3_optional" : "optional");
                      break;
                    default:
                      throw _0x183df6(_0x50948c);
                  }
                });
                _0x56b876.add(_0xcacd63).add(_0x178bae);
              }(_0x3a21ab, _0x5d957c);
            }
          }
          function _0xe5a3e8(_0x579981, _0x1e4fb2) {
            var _0x36109a = _0x4f65f1("(", true);
            if (!_0x52e637.test(_0x1e4fb2 = _0x4a1367())) {
              throw _0x183df6(_0x1e4fb2, "name");
            }
            var _0x4e4201;
            var _0x4ec71f = _0x1e4fb2;
            var _0x48f42b = _0x4ec71f;
            _0x36109a && (_0x4f65f1(")"), _0x48f42b = _0x4ec71f = "(" + _0x4ec71f + ")", _0x1e4fb2 = _0x1acb09(), _0x167ef6.test(_0x1e4fb2) && (_0x4e4201 = _0x1e4fb2.substr(1), _0x4ec71f += _0x1e4fb2, _0x4a1367()));
            _0x4f65f1("=");
            (function (_0x394e10, _0x2ca38b, _0x3ba936, _0x1d781d) {
              _0x394e10.setParsedOption && _0x394e10.setParsedOption(_0x2ca38b, _0x3ba936, _0x1d781d);
            })(_0x579981, _0x48f42b, _0x2a5f0c(_0x579981, _0x4ec71f), _0x4e4201);
          }
          function _0x2a5f0c(_0x17a43f, _0x304e5d) {
            if (_0x4f65f1("{", true)) {
              for (var _0x52642f = {}; !_0x4f65f1("}", true);) {
                if (!_0x70cc61.test(_0x397b28 = _0x4a1367())) {
                  throw _0x183df6(_0x397b28, "name");
                }
                var _0xbd51cc;
                var _0x285404 = _0x397b28;
                "{" === _0x1acb09() ? _0xbd51cc = _0x2a5f0c(_0x17a43f, _0x304e5d + "." + _0x397b28) : (_0x4f65f1(":"), "{" === _0x1acb09() ? _0xbd51cc = _0x2a5f0c(_0x17a43f, _0x304e5d + "." + _0x397b28) : (_0xbd51cc = _0x5212f7(true), _0x386450(_0x17a43f, _0x304e5d + "." + _0x397b28, _0xbd51cc)));
                var _0x540878 = _0x52642f[_0x285404];
                _0x540878 && (_0xbd51cc = [].concat(_0x540878).concat(_0xbd51cc));
                _0x52642f[_0x285404] = _0xbd51cc;
                _0x4f65f1(",", true);
              }
              return _0x52642f;
            }
            var _0x3f28bc = _0x5212f7(true);
            _0x386450(_0x17a43f, _0x304e5d, _0x3f28bc);
            return _0x3f28bc;
          }
          function _0x386450(_0x509217, _0x437d4f, _0xcfcf9b) {
            _0x509217.setOption && _0x509217.setOption(_0x437d4f, _0xcfcf9b);
          }
          function _0x41e800(_0x5dbd1f) {
            if (_0x4f65f1("[", true)) {
              do {
                _0xe5a3e8(_0x5dbd1f, "option");
              } while (_0x4f65f1(",", true));
              _0x4f65f1("]");
            }
            return _0x5dbd1f;
          }
          for (; null !== (_0x397b28 = _0x4a1367());) {
            switch (_0x397b28) {
              case "package":
                if (!_0x123618) {
                  throw _0x183df6(_0x397b28);
                }
                _0x160f5a();
                break;
              case "import":
                if (!_0x123618) {
                  throw _0x183df6(_0x397b28);
                }
                _0x2f777e();
                break;
              case "syntax":
                if (!_0x123618) {
                  throw _0x183df6(_0x397b28);
                }
                _0x32cac7();
                break;
              case "option":
                _0xe5a3e8(_0x3a79b3, _0x397b28);
                _0x4f65f1(";");
                break;
              default:
                if (_0x5d4390(_0x3a79b3, _0x397b28)) {
                  _0x123618 = false;
                  continue;
                }
                throw _0x183df6(_0x397b28);
            }
          }
          _0x201447.filename = null;
          return {
            package: _0x9006e6,
            imports: _0x1377c2,
            weakImports: _0x307f36,
            syntax: _0x40be73,
            root: _0x3d42df
          };
        }
        _0x1d15c2.exports;
      }, function () {
        return {
          "./tokenize": _0x55056a,
          "./root": _0x5c567d,
          "./type": _0x1f47da,
          "./field": _0x1c01d1,
          "./mapfield": _0xab755e,
          "./oneof": _0x4124f2,
          "./enum": _0xf40985,
          "./service": _0x188a74,
          "./method": _0x2d7f7d,
          "./types": _0x31f3cc,
          "./util": _0x32e598
        };
      });
      var _0x1356b9 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/common.js";
      _0x1bbca6.define(_0x1356b9, function (_0x5cacb5, _0x6eb579, _0x343a29, _0x23e56c, _0x3175b5) {
        _0x343a29.exports = _0x130d6c;
        var _0x1a3854;
        var _0x195cb1 = /\/|\./;
        function _0x130d6c(_0x2b0649, _0x6a7c1c) {
          _0x195cb1.test(_0x2b0649) || (_0x2b0649 = "google/protobuf/" + _0x2b0649 + ".proto", _0x6a7c1c = {
            nested: {
              google: {
                nested: {
                  protobuf: {
                    nested: _0x6a7c1c
                  }
                }
              }
            }
          });
          _0x130d6c[_0x2b0649] = _0x6a7c1c;
        }
        _0x130d6c("any", {
          Any: {
            fields: {
              type_url: {
                type: "string",
                id: 1
              },
              value: {
                type: "bytes",
                id: 2
              }
            }
          }
        });
        _0x130d6c("duration", {
          Duration: _0x1a3854 = {
            fields: {
              seconds: {
                type: "int64",
                id: 1
              },
              nanos: {
                type: "int32",
                id: 2
              }
            }
          }
        });
        _0x130d6c("timestamp", {
          Timestamp: _0x1a3854
        });
        _0x130d6c("empty", {
          Empty: {
            fields: {}
          }
        });
        _0x130d6c("struct", {
          Struct: {
            fields: {
              fields: {
                keyType: "string",
                type: "Value",
                id: 1
              }
            }
          },
          Value: {
            oneofs: {
              kind: {
                oneof: ["nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue"]
              }
            },
            fields: {
              nullValue: {
                type: "NullValue",
                id: 1
              },
              numberValue: {
                type: "double",
                id: 2
              },
              stringValue: {
                type: "string",
                id: 3
              },
              boolValue: {
                type: "bool",
                id: 4
              },
              structValue: {
                type: "Struct",
                id: 5
              },
              listValue: {
                type: "ListValue",
                id: 6
              }
            }
          },
          NullValue: {
            values: {
              NULL_VALUE: 0
            }
          },
          ListValue: {
            fields: {
              values: {
                rule: "repeated",
                type: "Value",
                id: 1
              }
            }
          }
        });
        _0x130d6c("wrappers", {
          DoubleValue: {
            fields: {
              value: {
                type: "double",
                id: 1
              }
            }
          },
          FloatValue: {
            fields: {
              value: {
                type: "float",
                id: 1
              }
            }
          },
          Int64Value: {
            fields: {
              value: {
                type: "int64",
                id: 1
              }
            }
          },
          UInt64Value: {
            fields: {
              value: {
                type: "uint64",
                id: 1
              }
            }
          },
          Int32Value: {
            fields: {
              value: {
                type: "int32",
                id: 1
              }
            }
          },
          UInt32Value: {
            fields: {
              value: {
                type: "uint32",
                id: 1
              }
            }
          },
          BoolValue: {
            fields: {
              value: {
                type: "bool",
                id: 1
              }
            }
          },
          StringValue: {
            fields: {
              value: {
                type: "string",
                id: 1
              }
            }
          },
          BytesValue: {
            fields: {
              value: {
                type: "bytes",
                id: 1
              }
            }
          }
        });
        _0x130d6c("field_mask", {
          FieldMask: {
            fields: {
              paths: {
                rule: "repeated",
                type: "string",
                id: 1
              }
            }
          }
        });
        _0x130d6c.get = function (_0x279356) {
          return _0x130d6c[_0x279356] || null;
        };
        _0x343a29.exports;
      }, {});
      var _0x478378 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/src/index.js";
      var _0x402257;
      _0x1bbca6.define(_0x478378, function (_0x3818e3, _0x4c350d, _0x14d63b, _0x30e905, _0x2dfa9e) {
        _0x14d63b.exports = _0x4c350d("./index-light")
        var _0x536c97 = _0x14d63b.exports;
        _0x536c97.build = "full";
        _0x536c97.tokenize = _0x4c350d("./tokenize");
        _0x536c97.parse = _0x4c350d("./parse");
        _0x536c97.common = _0x4c350d("./common");
        _0x536c97.Root._configure(_0x536c97.Type, _0x536c97.parse, _0x536c97.common);
        _0x14d63b.exports;
      }, function () {
        return {
          "./index-light": _0x227d47,
          "./tokenize": _0x55056a,
          "./parse": _0x3f59d6,
          "./common": _0x1356b9
        };
      });
      var _0x3c0145 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/index.js";
      var _0x242217;
      var _0x57f1e9;
      var _0x38ab58;
      var _0x1f26a7;
      var _0x33fd57;
      _0x1bbca6.define(_0x3c0145, function (_0x2f0cf8, _0x215b37, _0x47b4f7, _0x1e7319, _0x3157d5) {
        _0x47b4f7.exports = _0x215b37("./src/index");
        _0x402257 = _0x47b4f7.exports;
      }, function () {
        return {
          "./src/index": _0x478378
        };
      });
      _0x3c0145 || _0x1bbca6.throwInvalidWrapper("./index.js", "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/index.mjs?cjs=&original=.js");
      _0x1bbca6.require(_0x3c0145);
      _0xa10b8c._RF.push({}, "cc0d2/6MnJJxouiuqdImCeq", "BGPanelSpine", undefined);
      var _0x3d5337 = _0x42d118.ccclass;
      var _0x9f04f5 = _0x42d118.property;
      _0x242217 = _0x9f04f5({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      var _0x231352 = _0x3d5337((_0x33fd57 = function (_0x533541) {
        function _0x4ef50c() {
          for (var _0x4ea2b3, _0x465278 = arguments.length, _0x153138 = new Array(_0x465278), _0x5d7a4f = 0; _0x5d7a4f < _0x465278; _0x5d7a4f++) {
            _0x153138[_0x5d7a4f] = arguments[_0x5d7a4f];
          }
          _0x4f841b(_0x4ea2b3 = _0x533541.call.apply(_0x533541, [this].concat(_0x153138)) || this, "m_spine", _0x1f26a7, _0x2fdb02(_0x4ea2b3));
          return _0x4ea2b3;
        }
        _0x567cf6(_0x4ef50c, _0x533541);
        var _0x13f6bf = _0x4ef50c.prototype;
        _0x13f6bf.start = function () {};
        _0x13f6bf.PlayAnimation = function (_0x63e840, _0x361250) {
          var _0x45b0f8 = this;
          return new Promise(function (_0x4c3768) {
            _0x45b0f8.m_spine.clearTrack(0);
            _0x45b0f8.m_spine.setToSetupPose();
            var _0x2e385b = _0x45b0f8.m_spine.setAnimation(0, _0x63e840, _0x361250);
            _0x2e385b ? _0x45b0f8.m_spine.setTrackCompleteListener(_0x2e385b, function () {
              _0x4c3768();
            }) : _0x45b0f8.m_spine.setCompleteListener(function () {
              _0x4c3768();
            });
          });
        };
        _0x13f6bf.PlayAnimWithoutAwait = function (_0x3d6693, _0x22ace8) {
          return this.m_spine.setAnimation(0, _0x3d6693, _0x22ace8);
        };
        _0x13f6bf.GetAnimName = function (_0x10f0b2, _0x241dc7, _0x33caa4) {
          return 0 == _0x10f0b2 ? _0x33caa4 ? _0x241dc7 ? _0x4ef50c.SpineAnimName.LV1_WIN_UPDATES : _0x4ef50c.SpineAnimName.LV1_WIN_UPDATE : _0x241dc7 ? _0x4ef50c.SpineAnimName.LV1_WINS : _0x4ef50c.SpineAnimName.LV1_WIN : 1 == _0x10f0b2 ? _0x33caa4 ? _0x241dc7 ? _0x4ef50c.SpineAnimName.LV2_WIN_UPDATES : _0x4ef50c.SpineAnimName.LV2_WIN_UPDATE : _0x241dc7 ? _0x4ef50c.SpineAnimName.LV2_WIN : _0x4ef50c.SpineAnimName.LV2_WINS : _0x241dc7 ? _0x4ef50c.SpineAnimName.LV3_WIN : _0x4ef50c.SpineAnimName.LV3_WINS;
        };
        _0x13f6bf.ResetSpine = function () {
          this.m_spine.clearTrack(0);
          this.m_spine.setToSetupPose();
        };
        return _0x4ef50c;
      }(_0x5aac4b), _0x33fd57.SpineAnimName = {
        LV1_WIN: "Lv1_Win",
        LV1_WINS: "Lv1_WinS",
        LV1_WIN_UPDATE: "Lv1_Win_Update",
        LV1_WIN_UPDATES: "Lv1_Win_UpdateS",
        LV2_WIN: "Lv2_Win",
        LV2_WINS: "Lv2_WinS",
        LV2_WIN_UPDATE: "Lv2_Win_Update",
        LV2_WIN_UPDATES: "Lv2_Win_UpdateS",
        LV3_WIN: "Lv3_Win",
        LV3_WINS: "Lv3_WinS",
        START: "Start"
      }, _0x38ab58 = _0x33fd57, _0x1f26a7 = _0x5a72b5(_0x38ab58.prototype, "m_spine", [_0x242217], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x57f1e9 = _0x38ab58)) || _0x57f1e9;
      var _0x1cc2b7;
      var _0x408fab;
      var _0x4fd01b;
      var _0x1026fb;
      var _0x2be5d5;
      var _0xb5b8ba;
      var _0x4fec27;
      var _0x259b16;
      var _0x15930c;
      var _0x17800b;
      var _0x593e36;
      var _0x24a2cf;
      var _0x1717b6;
      var _0x28284f;
      var _0x3b885f;
      var _0x52bd26;
      var _0x3958c8;
      var _0x3bb6a2;
      var _0x360fb8;
      var _0x5ae71b;
      var _0x31b9d6;
      var _0x2a5914;
      var _0x17ee66;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "ea8eeawvr9IlbNLQROwRCYA", "MachineView", undefined);
      var _0x380f3d = _0x42d118.ccclass;
      var _0x996336 = _0x42d118.property;
      _0x1cc2b7 = _0x380f3d("MachineView");
      _0x408fab = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "機台特效"
      });
      _0x4fd01b = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "1線特效"
      });
      _0x1026fb = _0x996336({
        type: [_0x1fbb3b],
        tooltip: "BG贏分"
      });
      _0x2be5d5 = _0x996336({
        type: _0x41f03c,
        tooltip: "大獎預告動畫"
      });
      _0xb5b8ba = _0x996336({
        type: _0x951488,
        tooltip: "大獎預告動畫"
      });
      _0x4fec27 = _0x996336({
        type: _0x231352,
        tooltip: "BG 面板動畫: 背景"
      });
      _0x259b16 = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "BG 面板柵欄"
      });
      _0x15930c = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "BG 面板贏分動畫: 前景"
      });
      _0x17800b = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "背景柵欄"
      });
      _0x593e36 = _0x996336({
        type: _0x1a25c9.Skeleton,
        tooltip: "背景面板柵欄"
      });
      var _0x4f3b7 = _0x1cc2b7((_0x1717b6 = function (_0x154693) {
        function _0x323c27() {
          for (var _0x1b4785, _0x3ded71 = arguments.length, _0x235d4b = new Array(_0x3ded71), _0x252771 = 0; _0x252771 < _0x3ded71; _0x252771++) {
            _0x235d4b[_0x252771] = arguments[_0x252771];
          }
          _0x4f841b(_0x1b4785 = _0x154693.call.apply(_0x154693, [this].concat(_0x235d4b)) || this, "m_mashineSke", _0x28284f, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_lineSke", _0x3b885f, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_bonusBars", _0x52bd26, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_nearBigWinAnim", _0x3958c8, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_nearBigWinShake", _0x3bb6a2, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_bgPanelSke", _0x360fb8, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_bgPanelFence", _0x5ae71b, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_bgPanelWinSke", _0x31b9d6, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_backgroundFence_L", _0x2a5914, _0x2fdb02(_0x1b4785));
          _0x4f841b(_0x1b4785, "m_backgroundFence_S", _0x17ee66, _0x2fdb02(_0x1b4785));
          _0x1b4785.m_gameView = null;
          _0x1b4785.m_lvl = 0;
          _0x1b4785.m_lockBarCount = 0;
          return _0x1b4785;
        }
        _0x567cf6(_0x323c27, _0x154693);
        var _0x14ff73 = _0x323c27.prototype;
        _0x14ff73.start = function () {
          this.ShowLine();
        };
        _0x14ff73.RefreshView = function () {
          this.IsInBG && (this.InitNode(), 0 == this.m_lockBarCount ? (this.ResetSpine(this.m_backgroundFence_L), this.ResetSpine(this.m_backgroundFence_S)) : this.UpdateBackgroundFenceStatic(this.m_lockBarCount));
        };
        _0x14ff73.Init = function (_0x138af8) {
          this.m_gameView = _0x138af8;
        };
        _0x14ff73.InitMGView = function () {
          this.InitNode();
          this.m_bonusBars.forEach(function (_0x217aa7) {
            return _0x217aa7.InitMGView();
          });
          this.Reset();
        };
        _0x14ff73.InitBGView = function () {
          this.m_lvl = 0;
          this.m_lockBarCount = 0;
          this.m_lineSke.node.active = false;
          this.m_bgPanelSke.node.active = true;
          this.m_backgroundFence_L.node.active = this.m_gameView.IsLandscape;
          this.m_backgroundFence_S.node.active = !this.m_gameView.IsLandscape;
          this.m_bonusBars.forEach(function (_0x555771) {
            return _0x555771.InitBGView();
          });
          this.m_bgPanelSke.ResetSpine();
          this.ResetSpine(this.m_bgPanelFence);
          this.ResetSpine(this.m_mashineSke);
          this.ResetSpine(this.m_backgroundFence_L);
          this.ResetSpine(this.m_backgroundFence_S);
          this.UpdateBackgroundFenceStatic(this.m_lockBarCount);
        };
        _0x14ff73.ResetBGView = function (_0x2e53b1, _0x5ab044) {
          var _0x537cbe = this.m_gameView.Bet;
          var _0x15369c = _0x2e53b1.reduce(function (_0x155f11, _0x2cf4dc) {
            return _0x369abc.plus(_0x155f11, _0x2cf4dc);
          });
          this.m_lvl = this.GetWinLvl(_0x15369c);
          this.m_lockBarCount = _0x5ab044.filter(function (_0x36e50e) {
            return _0x36e50e;
          }).length;
          this.InitNode();
          this.m_bgPanelSke.ResetSpine();
          this.ResetSpine(this.m_bgPanelFence);
          this.ResetSpine(this.m_mashineSke);
          this.ResetSpine(this.m_backgroundFence_L);
          this.ResetSpine(this.m_backgroundFence_S);
          this.PlayIdle();
          this.UpdateBGPanelStatic(this.m_lvl);
          this.UpdateBackgroundFenceStatic(this.m_lockBarCount);
          this.m_bonusBars.forEach(function (_0x5b7911, _0x35e50b) {
            return _0x5b7911.ResetBGView(_0x369abc.times(_0x537cbe, _0x2e53b1[_0x35e50b]), _0x5ab044[_0x35e50b]);
          });
        };
        _0x14ff73.InitNode = function () {
          this.m_lineSke.node.active = !this.IsInBG;
          this.m_bgPanelSke.node.active = this.IsInBG;
          this.m_backgroundFence_L.node.active = this.IsInBG && this.m_gameView.IsLandscape;
          this.m_backgroundFence_S.node.active = this.IsInBG && !this.m_gameView.IsLandscape;
        };
        _0x14ff73.Reset = function () {
          this.IsInBG || this.ShowLine();
          this.PlayIdle();
        };
        _0x14ff73.PlayIdle = function () {
          var _0x94a20 = this.IsInBG ? "BG_Idle" : "MG_Idle";
          _0x8c49d5.PlayAnimation(this.m_mashineSke, _0x94a20, true);
        };
        _0x14ff73.PlayStart = function () {
          var _0x1daa3e = _0x12d1c6(_0x41e40d().mark(function _0x21332a() {
            var _0x250c6b;
            var _0x1c8c06;
            return _0x41e40d().wrap(function (_0x590b2e) {
              for (;;) {
                switch (_0x590b2e.prev = _0x590b2e.next) {
                  case 0:
                    _0x250c6b = this.IsInBG ? "BG_Start" : "MG_Start";
                    _0x1c8c06 = this.IsInBG ? "BG_Idle" : "MG_Idle";
                    _0x590b2e.next = 4;
                    return _0x8c49d5.PlayAnimation(this.m_mashineSke, _0x250c6b, false);
                  case 4:
                    _0x8c49d5.PlayAnimation(this.m_mashineSke, _0x1c8c06, true);
                  case 5:
                  case "end":
                    return _0x590b2e.stop();
                }
              }
            }, _0x21332a, this);
          }));
          return function () {
            return _0x1daa3e.apply(this, arguments);
          };
        }();
        _0x14ff73.PlayNearWin = function () {
          var _0x201679 = this.IsInBG ? "BG_NearWin" : "MG_NearWin";
          _0x8c49d5.PlayAnimation(this.m_mashineSke, _0x201679, true);
        };
        _0x14ff73.PlayWin = function () {
          var _0x306428 = this.IsInBG ? "BG_Win" : "MG_Win";
          _0x8c49d5.PlayAnimation(this.m_mashineSke, _0x306428, true);
        };
        _0x14ff73.ShowLine = function () {
          _0x8c49d5.PlayAnimation(this.m_lineSke, "Open", false);
        };
        _0x14ff73.PlayLineWin = function () {
          _0x8c49d5.PlayAnimation(this.m_lineSke, "Win", true);
        };
        _0x14ff73.HideLine = function () {
          _0x8c49d5.PlayAnimation(this.m_lineSke, "Close", false);
        };
        _0x14ff73.ShowNearBigWin = function () {
          var _0x3efaf6 = _0x12d1c6(_0x41e40d().mark(function _0x26661e() {
            return _0x41e40d().wrap(function (_0x215429) {
              for (;;) {
                switch (_0x215429.prev = _0x215429.next) {
                  case 0:
                    "NearBigWin";
                    this.m_nearBigWinShake.ShakeWithName("NearBigWin");
                    _0x23cbbd.Play(_0x883e10.AudioClips.Big_Win_Prompt);
                    _0x215429.next = 5;
                    return this.PlayNearBigWin();
                  case 5:
                    this.StopNearBigWin();
                  case 6:
                  case "end":
                    return _0x215429.stop();
                }
              }
            }, _0x26661e, this);
          }));
          return function () {
            return _0x3efaf6.apply(this, arguments);
          };
        }();
        _0x14ff73.PlayNearBigWin = function () {
          var _0x30470f = this;
          return new Promise(function (_0x584d13) {
            var _0x3c9079 = _0x30470f.m_gameView.IsLandscape ? "Win_L" : "Win_S";
            _0x30470f.m_nearBigWinAnim.node.active = true;
            _0x30470f.m_nearBigWinAnim.play(_0x3c9079);
            _0x30470f.m_nearBigWinAnim.once(_0x41f03c.EventType.FINISHED, function () {
              _0x584d13();
            });
          });
        };
        _0x14ff73.StopNearBigWin = function () {
          this.m_nearBigWinAnim.stop();
          this.m_nearBigWinAnim.node.active = false;
        };
        _0x14ff73.Intro = function () {
          var _0x455357 = _0x12d1c6(_0x41e40d().mark(function _0x54b02a(_0x4e9573) {
            var _0x57494a;
            var _0xd1f9a9;
            return _0x41e40d().wrap(function (_0x280e13) {
              for (;;) {
                switch (_0x280e13.prev = _0x280e13.next) {
                  case 0:
                    _0x23cbbd.Play(_0x883e10.AudioClips.Multiplier_Add);
                    _0x57494a = this.m_gameView.Bet;
                    _0xd1f9a9 = [];
                    _0x23cbbd.Play(_0x883e10.AudioClips.Lock_Disintegratio);
                    this.m_bonusBars.forEach(function (_0xa443f3, _0x19a5dd) {
                      _0xd1f9a9.push(_0xa443f3.IntroAnim(_0x369abc.times(_0x57494a, _0x4e9573[_0x19a5dd])));
                    });
                    _0xd1f9a9.push(this.m_bgPanelSke.PlayAnimation(_0x231352.SpineAnimName.START, false));
                    _0x280e13.next = 8;
                    return Promise.all(_0xd1f9a9);
                  case 8:
                  case "end":
                    return _0x280e13.stop();
                }
              }
            }, _0x54b02a, this);
          }));
          return function (_0x56cc19) {
            return _0x455357.apply(this, arguments);
          };
        }();
        _0x14ff73.UpdateMultiples = function () {
          var _0x45ae9d = _0x12d1c6(_0x41e40d().mark(function _0x334141(_0x3587da) {
            var _0x5ea2f4;
            var _0x331957;
            var _0x18b352;
            var _0x1b7249;
            var _0x3a57cc;
            var _0x10170a;
            var _0x955c4d;
            var _0x6ad04c = this;
            return _0x41e40d().wrap(function (_0x187396) {
              for (;;) {
                switch (_0x187396.prev = _0x187396.next) {
                  case 0:
                    _0x5ea2f4 = _0x3587da.IsSuper;
                    _0x331957 = [];
                    _0x18b352 = this.m_gameView.Bet;
                    _0x1b7249 = _0x3587da.BonusFinalMul.reduce(function (_0x14c7b8, _0x5f18cc) {
                      return _0x369abc.plus(_0x14c7b8, _0x5f18cc);
                    });
                    _0x3a57cc = this.GetWinLvl(_0x1b7249);
                    _0x10170a = _0x3a57cc > this.m_lvl;
                    _0x331957.push(this.UpdateBGPanel(this.m_lvl, _0x5ea2f4, _0x10170a));
                    _0x10170a && (_0x955c4d = 1 == _0x3a57cc ? "Lv1_Win_Update" : "Lv2_Win_Update", this.m_bgPanelWinSke.node.parent.active = true, _0x331957.push(_0x8c49d5.PlayAnimation(this.m_bgPanelWinSke, _0x955c4d, false).then(function () {
                      _0x6ad04c.m_bgPanelWinSke.node.parent.active = false;
                    })));
                    _0x3587da.BonusFinalMul.forEach(function (_0x402aaa, _0x555914) {
                      var _0x558cd1 = _0x369abc.times(_0x18b352, _0x402aaa);
                      _0x331957.push(_0x6ad04c.m_bonusBars[_0x555914].UpdateMul(_0x558cd1, _0x5ea2f4, _0x10170a));
                    });
                    _0x3587da.IsMultiple ? _0x23cbbd.Play(_0x883e10.AudioClips.Multiplier_Double) : _0x23cbbd.Play(_0x883e10.AudioClips.Multiplier_Add);
                    _0x187396.next = 12;
                    return Promise.all(_0x331957);
                  case 12:
                    this.m_lvl = _0x3a57cc;
                  case 13:
                  case "end":
                    return _0x187396.stop();
                }
              }
            }, _0x334141, this);
          }));
          return function (_0x541527) {
            return _0x45ae9d.apply(this, arguments);
          };
        }();
        _0x14ff73.Lock = function () {
          var _0x28219f = _0x12d1c6(_0x41e40d().mark(function _0x209774(_0x5cbf92) {
            var _0x4792c3;
            var _0x3ce092;
            var _0x100935;
            return _0x41e40d().wrap(function (_0x57ad50) {
              for (;;) {
                switch (_0x57ad50.prev = _0x57ad50.next) {
                  case 0:
                    _0x4792c3 = [];
                    _0x23cbbd.Play(_0x883e10.AudioClips.BonusBar_Lock);
                    _0x4792c3.push(this.m_bonusBars[_0x5cbf92].Lock());
                    _0x3ce092 = this.m_bonusBars.filter(function (_0x54379a) {
                      return _0x54379a.Islock;
                    });
                    _0x100935 = _0x3ce092.length;
                    this.m_lockBarCount != _0x100935 && (_0x4792c3.push(this.UpdateFence(this.m_lockBarCount, _0x100935)), this.m_lockBarCount = _0x100935);
                    _0x57ad50.next = 8;
                    return Promise.all(_0x4792c3);
                  case 8:
                  case "end":
                    return _0x57ad50.stop();
                }
              }
            }, _0x209774, this);
          }));
          return function (_0x268f58) {
            return _0x28219f.apply(this, arguments);
          };
        }();
        _0x14ff73.Unlock = function () {
          var _0x12bec7 = _0x12d1c6(_0x41e40d().mark(function _0x2553d0(_0x2c14d5) {
            var _0x774d49;
            var _0xca5107;
            var _0x105d9b;
            return _0x41e40d().wrap(function (_0x36931f) {
              for (;;) {
                switch (_0x36931f.prev = _0x36931f.next) {
                  case 0:
                    _0x774d49 = [];
                    _0x23cbbd.Play(_0x883e10.AudioClips.BonusBar_Unlock);
                    _0x774d49.push(this.m_bonusBars[_0x2c14d5].UnLock());
                    _0xca5107 = this.m_bonusBars.filter(function (_0x4a2448) {
                      return _0x4a2448.Islock;
                    });
                    _0x105d9b = _0xca5107.length;
                    this.m_lockBarCount != _0x105d9b && ([].push(this.UpdateFence(this.m_lockBarCount, _0x105d9b)), this.m_lockBarCount = _0x105d9b);
                    _0x36931f.next = 8;
                    return Promise.all(_0x774d49);
                  case 8:
                  case "end":
                    return _0x36931f.stop();
                }
              }
            }, _0x2553d0, this);
          }));
          return function (_0x548891) {
            return _0x12bec7.apply(this, arguments);
          };
        }();
        _0x14ff73.UpdateBGPanel = function () {
          var _0x42dac6 = _0x12d1c6(_0x41e40d().mark(function _0x3775e1(_0x10a1be, _0x4f1b95, _0x23d38c) {
            var _0x21662e;
            return _0x41e40d().wrap(function (_0x5d6519) {
              for (;;) {
                switch (_0x5d6519.prev = _0x5d6519.next) {
                  case 0:
                    _0x21662e = this.m_bgPanelSke.GetAnimName(_0x10a1be, _0x4f1b95, _0x23d38c);
                    _0x5d6519.next = 3;
                    return this.m_bgPanelSke.PlayAnimation(_0x21662e, false);
                  case 3:
                  case "end":
                    return _0x5d6519.stop();
                }
              }
            }, _0x3775e1, this);
          }));
          return function (_0x35fd82, _0xf841b2, _0x3acb0a) {
            return _0x42dac6.apply(this, arguments);
          };
        }();
        _0x14ff73.UpdateBGPanelStatic = function () {
          var _0x2da3bc = _0x12d1c6(_0x41e40d().mark(function _0x505152(_0x569a19) {
            var _0x156cf7;
            var _0x402ffc;
            return _0x41e40d().wrap(function (_0x1c7b84) {
              for (;;) {
                switch (_0x1c7b84.prev = _0x1c7b84.next) {
                  case 0:
                    _0x156cf7 = this.m_bgPanelSke.GetAnimName(_0x569a19, false, false);
                    (_0x402ffc = this.m_bgPanelSke.PlayAnimWithoutAwait(_0x156cf7, false)).trackTime = _0x402ffc.animation.duration;
                  case 3:
                  case "end":
                    return _0x1c7b84.stop();
                }
              }
            }, _0x505152, this);
          }));
          return function (_0x5df870) {
            return _0x2da3bc.apply(this, arguments);
          };
        }();
        _0x14ff73.UpdateBackgroundFenceStatic = function (_0x25e9b4) {
          var _0x3ace9b = _0x25e9b4 > 0 ? _0x25e9b4 - 1 + "to" + _0x25e9b4 : _0x25e9b4 + 1 + "to" + _0x25e9b4;
          var _0x5282ea = (this.m_gameView.IsLandscape ? this.m_backgroundFence_L : this.m_backgroundFence_S).setAnimation(0, _0x3ace9b, false);
          _0x5282ea.trackTime = _0x5282ea.animation.duration;
        };
        _0x14ff73.UpdateFence = function () {
          var _0x5a1ca6 = _0x12d1c6(_0x41e40d().mark(function _0x529c6e(_0x2e83ae, _0x3e02a0) {
            var _0x3ab18b;
            var _0x77dbac;
            return _0x41e40d().wrap(function (_0x20ae9f) {
              for (;;) {
                switch (_0x20ae9f.prev = _0x20ae9f.next) {
                  case 0:
                    _0x3ab18b = this.m_gameView.IsLandscape ? this.m_backgroundFence_L : this.m_backgroundFence_S;
                    (_0x77dbac = []).push(_0x8c49d5.PlayAnimation(this.m_bgPanelFence, _0x2e83ae + "to" + _0x3e02a0));
                    _0x77dbac.push(_0x8c49d5.PlayAnimation(_0x3ab18b, _0x2e83ae + "to" + _0x3e02a0));
                    _0x20ae9f.next = 6;
                    return Promise.all(_0x77dbac);
                  case 6:
                  case "end":
                    return _0x20ae9f.stop();
                }
              }
            }, _0x529c6e, this);
          }));
          return function (_0x26eb7d, _0x314313) {
            return _0x5a1ca6.apply(this, arguments);
          };
        }();
        _0x14ff73.GetWinLvl = function (_0x1f467a) {
          for (var _0x518cb2 = [0, 20, 40], _0xd5d7c6 = 0, _0x2e7cf4 = 0, _0x29b14b = _0x518cb2; _0x2e7cf4 < _0x29b14b.length; _0x2e7cf4++) {
            var _0x4d52ec = _0x29b14b[_0x2e7cf4];
            if (!(_0x1f467a >= _0x4d52ec)) {
              break;
            }
            _0xd5d7c6 = _0x518cb2.indexOf(_0x4d52ec);
          }
          return _0xd5d7c6;
        };
        _0x14ff73.ResetSpine = function (_0x3ecbf6) {
          _0x3ecbf6.clearTracks();
          _0x3ecbf6.setToSetupPose();
        };
        _0x54ea23(_0x323c27, [{
          key: "IsInBG",
          get: function () {
            return this.m_gameView.IsInBG;
          }
        }]);
        return _0x323c27;
      }(_0x5aac4b), _0x28284f = _0x5a72b5(_0x1717b6.prototype, "m_mashineSke", [_0x408fab], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3b885f = _0x5a72b5(_0x1717b6.prototype, "m_lineSke", [_0x4fd01b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x52bd26 = _0x5a72b5(_0x1717b6.prototype, "m_bonusBars", [_0x1026fb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x3958c8 = _0x5a72b5(_0x1717b6.prototype, "m_nearBigWinAnim", [_0x2be5d5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3bb6a2 = _0x5a72b5(_0x1717b6.prototype, "m_nearBigWinShake", [_0xb5b8ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x360fb8 = _0x5a72b5(_0x1717b6.prototype, "m_bgPanelSke", [_0x4fec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5ae71b = _0x5a72b5(_0x1717b6.prototype, "m_bgPanelFence", [_0x259b16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x31b9d6 = _0x5a72b5(_0x1717b6.prototype, "m_bgPanelWinSke", [_0x15930c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2a5914 = _0x5a72b5(_0x1717b6.prototype, "m_backgroundFence_L", [_0x17800b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x17ee66 = _0x5a72b5(_0x1717b6.prototype, "m_backgroundFence_S", [_0x593e36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x24a2cf = _0x1717b6)) || _0x24a2cf;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "0e4217mk21AYKNz1DsRSQ+A", "Model", undefined);
      var _0x4f95e1 = function () {
        function _0x2f2791() {}
        var _0x404b49 = _0x2f2791.prototype;
        _0x404b49.GenRandomSymbol = function (_0x191d8f, _0x525c92, _0x58bc44) {
          return new _0x2a33ac(_0x191d8f, _0x525c92, _0x58bc44);
        };
        _0x404b49.SpinAckProcessing = function (_0x49e7e5) {
          return new _0x27c623(_0x49e7e5);
        };
        return _0x2f2791;
      }();
      var _0x27c623 = function () {
        function _0x3464d0(_0x152193) {
          var _0x21b32d = this;
          this.m_tmpLock = [false, false, false];
          this.m_tmpMul = [0, 0, 0];
          this.m_roundInfo = null;
          this.m_bonusTotalWin = 0;
          this.m_totalWin = 0;
          this.m_roundInfo = _0x152193.RoundQueue.map(function (_0x4ed020) {
            var _0x3178d2 = new _0x5823ad(_0x4ed020, _0x21b32d.m_tmpLock, _0x21b32d.m_tmpMul);
            _0x21b32d.m_tmpLock = _0x4ed020.BonusLock;
            _0x21b32d.m_tmpMul = _0x4ed020.BonusMul;
            return _0x3178d2;
          });
          this.m_totalWin = _0x152193.TotalWin;
          this.m_bonusTotalWin = _0x152193.BonusTotalWin;
        }
        _0x3464d0.prototype.GetAccumulatedWin = function (_0x34b90f) {
          var _0x43c437 = 0;
          _0x34b90f >= this.m_roundInfo.length && _0x3c3cbe("PlateIndex is our of round's length.", _0x34b90f, this.m_roundInfo.length);
          for (var _0x4ec7ec = 0; _0x4ec7ec <= _0x34b90f; _0x4ec7ec++) {
            this.m_roundInfo[_0x4ec7ec] && (_0x43c437 += this.m_roundInfo[_0x4ec7ec].RoundWin);
          }
          return _0x43c437;
        };
        _0x54ea23(_0x3464d0, [{
          key: "RoundInfo",
          get: function () {
            return this.m_roundInfo;
          }
        }, {
          key: "BonusTotalWin",
          get: function () {
            return this.m_bonusTotalWin;
          }
        }, {
          key: "TotalWin",
          get: function () {
            return this.m_totalWin;
          }
        }, {
          key: "Length",
          get: function () {
            return this.m_roundInfo.length;
          }
        }]);
        return _0x3464d0;
      }();
      var _0x5823ad = function () {
        function _0x1b5b45(_0x5a4abd, _0x4658bf, _0x994797) {
          this.m_RoundWin = 0;
          this.m_Plate = null;
          this.m_BonusSymbols = [];
          this.m_LockSymbols = [];
          this.m_KeySymbols = [];
          this.m_AwardSymbols = [];
          this.m_awardSymbolType = _0x883e10.LineAward.NONE;
          this.m_bonusLock = [];
          this.m_bonusMul = [];
          this.m_bonusNowMul = [];
          this.m_totalMul = 0;
          this.m_bgRound = 0;
          this.m_RoundWin = _0x5a4abd.RoundWin;
          this.m_Plate = this.GenPlate(_0x5a4abd.Symbol);
          _0x5a4abd.IsMain ? (_0x5a4abd.RoundWin > 0 && (this.m_RoundWin = _0x5a4abd.RoundWin, this.m_AwardSymbols = this.m_Plate.map(function (_0x395d11) {
            return _0x395d11[1];
          }), this.m_awardSymbolType = this.GenAwardType(this.m_AwardSymbols)), _0x5a4abd.GetBonus && (this.m_BonusSymbols = this.GenBonusSymbol(this.m_Plate))) : (this.m_BonusSymbols = this.GenBGBonusSymbol(this.m_Plate, _0x5a4abd.BonusNowMul, _0x994797, _0x5a4abd.BonusMul, _0x4658bf), this.m_LockSymbols = this.GenLockSymbol(this.m_Plate), this.m_KeySymbols = this.GenKeySymbol(this.m_Plate), this.m_totalMul = this.GenBGTotalMul(_0x994797, _0x5a4abd.BonusMul), this.m_bgRound = _0x5a4abd.BonusRound);
          this.m_bonusLock = _0x5a4abd.BonusLock;
          this.m_bonusMul = _0x5a4abd.BonusMul;
          this.m_bonusNowMul = _0x5a4abd.BonusNowMul;
        }
        var _0x599c57 = _0x1b5b45.prototype;
        _0x599c57.GenPlate = function (_0x3fc900) {
          return _0x3fc900.map(function (_0x4d462e, _0x58fdba) {
            return _0x4d462e.Row.map(function (_0x523a89, _0x3926c2) {
              return new _0x2a33ac(_0x523a89, _0x58fdba, _0x3926c2);
            });
          });
        };
        _0x599c57.GenAwardType = function (_0x53ca86) {
          var _0x26aa50 = [_0x883e10.Symbol.WILD5, _0x883e10.Symbol.WILD3, _0x883e10.Symbol.WILD2, _0x883e10.Symbol.SEVEN, _0x883e10.Symbol.BAR3, _0x883e10.Symbol.BAR2, _0x883e10.Symbol.BAR1];
          if (_0x53ca86.some(function (_0x10d910) {
            return _0x10d910.FinalID == _0x883e10.Symbol.Empty;
          }) || _0x53ca86.some(function (_0x177ff9) {
            return _0x177ff9.FinalID == _0x883e10.Symbol.BONUS;
          })) {
            throw new Error("LineWin has Empty or Bonus. " + _0x53ca86.map(function (_0x15d1e1) {
              return _0x15d1e1.FinalID;
            }));
          }
          if (_0x53ca86.every(function (_0x1974a3) {
            return _0x1974a3.IsWild;
          })) {
            var _0x5cba2d = _0x53ca86[0];
            return _0x53ca86.every(function (_0x56fc58) {
              return _0x56fc58.WildMul == _0x5cba2d.WildMul;
            }) ? _0x26aa50.indexOf(_0x5cba2d.FinalID) : _0x883e10.LineAward.NONE;
          }
          var _0x127a0d = _0x53ca86.find(function (_0x162837) {
            return !_0x162837.IsWild;
          }).FinalID;
          return _0x53ca86.find(function (_0x975c58) {
            return !_0x975c58.IsWild && _0x975c58.FinalID != _0x127a0d;
          }) ? _0x883e10.LineAward.Any : _0x26aa50.indexOf(_0x127a0d);
        };
        _0x599c57.GenBonusSymbol = function (_0x309138, _0x4f60c1) {
          undefined === _0x4f60c1 && (_0x4f60c1 = null);
          var _0x338ab2 = [];
          _0x309138.forEach(function (_0xc3b172, _0x1c382e) {
            var _0x1b6d87 = !!_0x4f60c1 && _0x4f60c1[_0x1c382e];
            _0xc3b172.forEach(function (_0x354bf6) {
              _0x354bf6.IsBonus && !_0x1b6d87 && _0x338ab2.push(_0x354bf6);
            });
          });
          return _0x338ab2;
        };
        _0x599c57.GenBGBonusSymbol = function (_0x362afb, _0x50fbc4, _0xa6df43, _0x245c56, _0x2db085) {
          var _0xc29bab = this.GenBonusSymbol(_0x362afb, _0x2db085);
          var _0x2eb89b = _0xa6df43.concat();
          this.SortBonusSymbol(_0xc29bab);
          _0xc29bab.forEach(function (_0x57c461) {
            var _0x4b3be7 = _0x57c461.IsSuper ? [0, 1, 2].filter(function (_0x525b9f, _0x4c014f) {
              return !_0x2db085[_0x4c014f];
            }) : [_0x57c461.Col];
            var _0x4bad80 = _0x50fbc4[_0x57c461.Col];
            _0x57c461.SymbolID == _0x883e10.Symbol.BONUS_ADD || _0x57c461.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD ? _0x4b3be7.forEach(function (_0x4f10f4) {
              _0x2eb89b[_0x4f10f4] += _0x4bad80;
            }) : _0x4b3be7.forEach(function (_0x473009) {
              _0x2eb89b[_0x473009] *= _0x4bad80;
            });
            _0x57c461.SaveBonusData(_0x4bad80, _0x4b3be7, _0x2eb89b.concat());
          });
          _0x2eb89b.join(",") != _0x245c56.join(",") && console.error("BonusMul is not match", "\n lastLock: " + _0x2db085 + " ", "\n last: " + _0xa6df43 + " ", "\n sym: " + _0x50fbc4, "\n cur: " + _0x245c56, "\n acc: " + _0x2eb89b);
          return _0xc29bab;
        };
        _0x599c57.SortBonusSymbol = function (_0x4d9d6a) {
          var _0x1b2f05 = [_0x883e10.Symbol.BONUS, _0x883e10.Symbol.BONUS_ADD, _0x883e10.Symbol.SUPER_BONUS_ADD, _0x883e10.Symbol.BONUS_MUL, _0x883e10.Symbol.SUPER_BONUS_MUL];
          _0x4d9d6a.sort(function (_0x2c3fa0, _0x87250f) {
            return _0x1b2f05.indexOf(_0x2c3fa0.FinalID) - _0x1b2f05.indexOf(_0x87250f.FinalID);
          });
        };
        _0x599c57.GenLockSymbol = function (_0x492c5b) {
          var _0x14a465 = [];
          _0x492c5b.forEach(function (_0x1f2e71) {
            _0x1f2e71.forEach(function (_0x4f420b) {
              _0x4f420b.FinalID == _0x883e10.Symbol.LOCK && _0x14a465.push(_0x4f420b);
            });
          });
          return _0x14a465;
        };
        _0x599c57.GenKeySymbol = function (_0x361bf0) {
          var _0x434b8b = [];
          _0x361bf0.forEach(function (_0x23ea4e) {
            _0x23ea4e.forEach(function (_0x43af61) {
              _0x43af61.FinalID == _0x883e10.Symbol.KEY && _0x434b8b.push(_0x43af61);
            });
          });
          return _0x434b8b;
        };
        _0x599c57.GenBGTotalMul = function (_0x2bd8d0, _0x512b1c) {
          return _0x512b1c.map(function (_0x20bb35, _0x5da760) {
            return _0x20bb35 - _0x2bd8d0[_0x5da760];
          }).reduce(function (_0x271cc1, _0x44405c) {
            return _0x271cc1 + _0x44405c;
          });
        };
        _0x54ea23(_0x1b5b45, [{
          key: "BGRound",
          get: function () {
            return this.m_bgRound;
          }
        }, {
          key: "RoundWin",
          get: function () {
            return this.m_RoundWin;
          }
        }, {
          key: "Plate",
          get: function () {
            return this.m_Plate.map(function (_0x21454f) {
              return _0x21454f.map(function (_0x22b827) {
                return _0x22b827.SymbolID;
              });
            });
          }
        }, {
          key: "PlateData",
          get: function () {
            return this.m_Plate.map(function (_0xa2abe6) {
              return _0xa2abe6.concat();
            });
          }
        }, {
          key: "HasBGShow",
          get: function () {
            return this.m_BonusSymbols.length > 0 || this.m_LockSymbols.length > 0 || this.m_KeySymbols.length > 0;
          }
        }, {
          key: "BonusSymbols",
          get: function () {
            return this.m_BonusSymbols;
          }
        }, {
          key: "LockSymbols",
          get: function () {
            return this.m_LockSymbols;
          }
        }, {
          key: "KeySymbols",
          get: function () {
            return this.m_KeySymbols;
          }
        }, {
          key: "AwardSymbols",
          get: function () {
            return this.m_AwardSymbols;
          }
        }, {
          key: "AwardSymbolType",
          get: function () {
            return this.m_awardSymbolType;
          }
        }, {
          key: "BonusLock",
          get: function () {
            return this.m_bonusLock;
          }
        }, {
          key: "BonusMul",
          get: function () {
            return this.m_bonusMul;
          }
        }, {
          key: "BonusNowMul",
          get: function () {
            return this.m_bonusNowMul;
          }
        }, {
          key: "TotalMul",
          get: function () {
            return this.m_totalMul;
          }
        }]);
        return _0x1b5b45;
      }();
      var _0x2a33ac = function () {
        function _0x1f8ae0(_0x333b7a, _0xb9626f, _0x986c1c) {
          switch (this.m_SymbolID = 0, this.m_FinalID = 0, this.m_col = 0, this.m_row = 0, this.m_WildMul = 0, this.m_bonusMul = 0, this.m_bonusAddCol = [], this.m_bonusFinalMul = [], this.m_FinalID = _0x333b7a, this.m_col = _0xb9626f, this.m_row = _0x986c1c, _0x333b7a) {
            case _0x883e10.Symbol.WILD2:
              this.m_SymbolID = _0x883e10.Symbol.WILD2;
              this.m_WildMul = 2;
              break;
            case _0x883e10.Symbol.WILD3:
              this.m_SymbolID = _0x883e10.Symbol.WILD2;
              this.m_WildMul = 3;
              break;
            case _0x883e10.Symbol.WILD5:
              this.m_SymbolID = _0x883e10.Symbol.WILD2;
              this.m_WildMul = 5;
              break;
            default:
              this.m_SymbolID = _0x333b7a;
          }
        }
        var _0x10c3cf = _0x1f8ae0.prototype;
        _0x10c3cf.SaveBonusData = function (_0x45deae, _0x51b05b, _0x566737) {
          this.m_bonusMul = _0x45deae;
          this.m_bonusAddCol = _0x51b05b;
          this.m_bonusFinalMul = _0x566737;
        };
        _0x10c3cf.GetNewMulList = function (_0x47c4d5) {
          var _0x3b993b = this;
          var _0x46d7b5 = _0x47c4d5.concat();
          this.m_bonusAddCol.map(function (_0x1aa72) {
            _0x46d7b5[_0x1aa72] += _0x3b993b.m_bonusMul;
          });
          return _0x46d7b5;
        };
        _0x54ea23(_0x1f8ae0, [{
          key: "IsConvertGray",
          get: function () {
            return !(this.SymbolID == _0x883e10.Symbol.BONUS || this.SymbolID == _0x883e10.Symbol.BONUS_ADD || this.SymbolID == _0x883e10.Symbol.BONUS_MUL || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL || this.SymbolID == _0x883e10.Symbol.KEY || this.SymbolID == _0x883e10.Symbol.LOCK);
          }
        }, {
          key: "SymbolID",
          get: function () {
            return this.m_SymbolID;
          }
        }, {
          key: "FinalID",
          get: function () {
            return this.m_FinalID;
          }
        }, {
          key: "Col",
          get: function () {
            return this.m_col;
          }
        }, {
          key: "Row",
          get: function () {
            return this.m_row;
          }
        }, {
          key: "IsEmpty",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.Empty;
          }
        }, {
          key: "IsWild",
          get: function () {
            return this.m_SymbolID == _0x883e10.Symbol.WILD2;
          }
        }, {
          key: "WildMul",
          get: function () {
            return this.m_WildMul;
          }
        }, {
          key: "IsBonus",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.BONUS || this.SymbolID == _0x883e10.Symbol.BONUS_ADD || this.SymbolID == _0x883e10.Symbol.BONUS_MUL || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL;
          }
        }, {
          key: "IsSpecialSymbol",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.BONUS || this.SymbolID == _0x883e10.Symbol.BONUS_ADD || this.SymbolID == _0x883e10.Symbol.BONUS_MUL || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL || this.SymbolID == _0x883e10.Symbol.LOCK || this.SymbolID == _0x883e10.Symbol.KEY;
          }
        }, {
          key: "IsBGBonus",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.BONUS_ADD || this.SymbolID == _0x883e10.Symbol.BONUS_MUL || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL;
          }
        }, {
          key: "IsSuper",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_ADD || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL;
          }
        }, {
          key: "IsMultiple",
          get: function () {
            return this.SymbolID == _0x883e10.Symbol.BONUS_MUL || this.SymbolID == _0x883e10.Symbol.SUPER_BONUS_MUL;
          }
        }, {
          key: "BonusMul",
          get: function () {
            return this.m_bonusMul;
          }
        }, {
          key: "BonusAddCols",
          get: function () {
            return this.m_bonusAddCol;
          }
        }, {
          key: "BonusFinalMul",
          get: function () {
            return this.m_bonusFinalMul;
          }
        }]);
        return _0x1f8ae0;
      }();
      var _0x1a291f;
      var _0x42857e;
      var _0x2bc9ca;
      var _0x51fe8f;
      var _0x3bc8a4;
      var _0x231786;
      var _0x1950a9;
      var _0x38d41a;
      var _0x5c7a56;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "4c4e4TObxJDC4b0WLbE7mms", "PaytableView", undefined);
      var _0x2ba38a = _0x42d118.ccclass;
      var _0x3e1318 = _0x42d118.property;
      var _0x42909a = 1;
      var _0xce99bf = [625, 135, 40, 10, 8, 5, 3, 1];
      var _0x233ca7 = [6, 6, 5, 5, 5, 5, 4, 4];
      var _0x3ad08e = "pay_new";
      _0x1a291f = _0x2ba38a("PaytableView");
      _0x42857e = _0x3e1318({
        type: [_0x13a032],
        tooltip: "賠付表文字"
      });
      _0x2bc9ca = _0x3e1318({
        type: [_0x41f03c],
        tooltip: "賠付圖示"
      });
      _0x51fe8f = _0x3e1318({
        type: _0x42ff5a,
        tooltip: "中獎字型"
      });
      var _0x3e09b0 = _0x1a291f((_0x231786 = function (_0x37ec56) {
        function _0x288f34() {
          for (var _0x4344ea, _0x1c640c = arguments.length, _0x36a057 = new Array(_0x1c640c), _0x466fd8 = 0; _0x466fd8 < _0x1c640c; _0x466fd8++) {
            _0x36a057[_0x466fd8] = arguments[_0x466fd8];
          }
          _0x4f841b(_0x4344ea = _0x37ec56.call.apply(_0x37ec56, [this].concat(_0x36a057)) || this, "m_rollingLabels", _0x1950a9, _0x2fdb02(_0x4344ea));
          _0x4f841b(_0x4344ea, "m_payHints", _0x38d41a, _0x2fdb02(_0x4344ea));
          _0x4f841b(_0x4344ea, "m_winNumLabels", _0x5c7a56, _0x2fdb02(_0x4344ea));
          _0x4344ea.m_gameView = null;
          _0x4344ea.m_currentPayHint = null;
          _0x4344ea.m_currentWinNum = null;
          _0x4344ea.m_isChangeBet = false;
          _0x4344ea.m_bet = 0;
          return _0x4344ea;
        }
        _0x567cf6(_0x288f34, _0x37ec56);
        var _0x288862 = _0x288f34.prototype;
        _0x288862.Init = function (_0x2a8b69) {
          this.m_gameView = _0x2a8b69;
          this.m_winNumLabels.forEach(function (_0x41d7f5) {
            _0x41d7f5.node.active = false;
          });
        };
        _0x288862.InitBet = function (_0x53becc) {
          this.m_rollingLabels.forEach(function (_0x35ca01, _0x5cfb75) {
            _0x35ca01.SetFormatCallback(function (_0x53d997, _0x5c977e) {
              return _0x883e10.GetDisplayValue(_0x53d997, _0x233ca7[_0x5cfb75], _0x5c977e);
            });
          });
          this.m_bet = _0x53becc;
          this.SetPayLabels(this.m_bet, true);
        };
        _0x288862.UpdateBet = function (_0x378bde) {
          var _0x1bbec2 = this;
          if (this.StopAwardHint(), this.m_isChangeBet) {
            this.unscheduleAllCallbacks();
            this.StopBetAnim();
            this.scheduleOnce(function () {
              _0x1bbec2.PlayBetAnim(_0x378bde);
            }, 0.3);
          } else {
            this.PlayBetAnim(_0x378bde);
          }
        };
        _0x288862.PlayBetAnim = function (_0x688de9) {
          var _0x4a6883 = this;
          this.m_bet = _0x688de9;
          this.m_isChangeBet = true;
          this.m_rollingLabels.forEach(function (_0xfd8cb5, _0x19c5bb) {
            var _0x10902e = _0x369abc.times(_0xce99bf[_0x19c5bb], _0x688de9);
            _0xfd8cb5.RollNumberTo(_0x10902e, 1000 * _0x42909a);
          });
          _0xc8ef61.Wait(this, _0x42909a).then(function () {
            _0x4a6883.m_isChangeBet = false;
          });
        };
        _0x288862.StopBetAnim = function () {
          this.m_isChangeBet = false;
          this.SetPayLabels(this.m_bet, true);
        };
        _0x288862.PlayAwardHint = function (_0x14675d) {
          _0x14675d != _0x883e10.LineAward.NONE && (this.m_currentPayHint = this.m_payHints[_0x14675d], this.m_currentPayHint.play(_0x3ad08e), this.m_currentWinNum = this.m_winNumLabels[_0x14675d], this.m_currentWinNum.node.active = true);
        };
        _0x288862.StopAwardHint = function () {
          if (this.m_currentPayHint) {
            this.m_currentPayHint.pause();
            var _0x3a0cf3 = this.m_currentPayHint.getState(_0x3ad08e);
            _0x3a0cf3.time = 0;
            _0x3a0cf3.sample();
            this.m_currentPayHint = null;
          }
          this.m_currentWinNum && (this.m_currentWinNum.node.active = false, this.m_currentWinNum = null);
        };
        _0x288862.StopAward = function () {
          this.m_gameView.IsInBG || this.StopAwardHint();
        };
        _0x288862.SetPayLabels = function (_0x556df1, _0xd4d98b) {
          for (var _0x523f0d = 0; _0x523f0d < _0xce99bf.length; _0x523f0d++) {
            var _0x290494 = _0xce99bf[_0x523f0d] * _0x556df1;
            this.m_rollingLabels[_0x523f0d].SetValue(_0x290494, _0xd4d98b);
            this.m_winNumLabels[_0x523f0d].string = this.m_rollingLabels[_0x523f0d].string;
          }
        };
        return _0x288f34;
      }(_0x5aac4b), _0x1950a9 = _0x5a72b5(_0x231786.prototype, "m_rollingLabels", [_0x42857e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x38d41a = _0x5a72b5(_0x231786.prototype, "m_payHints", [_0x2bc9ca], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x5c7a56 = _0x5a72b5(_0x231786.prototype, "m_winNumLabels", [_0x51fe8f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x3bc8a4 = _0x231786)) || _0x3bc8a4;
      _0xa10b8c._RF.pop();
      var _0x212eb2 = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/node_modules/protobufjs/minimal.js";
      var _0x53240d;
      _0x1bbca6.define(_0x212eb2, function (_0x2666ad, _0x352f87, _0x2f6752, _0x3d036e, _0x2f9e39) {
        _0x2f6752.exports = _0x352f87("./src/index-minimal");
        _0x2f6752.exports;
      }, function () {
        return {
          "./src/index-minimal": _0x5a9fc8
        };
      });
      var _0x2c639b = "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/assets/Script/Proto/cbt2Proto.js";
      var _0x4df695;
      var _0x3b0af7;
      var _0x2a2afd;
      var _0x418b51;
      var _0x31ce72;
      var _0x4586ae;
      var _0x2610f6;
      var _0x261942;
      var _0x1f09c1;
      var _0x24adbf;
      var _0x5723d0;
      var _0x23bff7;
      var _0x1b12a8;
      var _0x569f28;
      var _0x114bd3;
      var _0x5b3876;
      var _0x1224f0;
      var _0x23a399;
      var _0x5aa17b;
      var _0x15e861;
      var _0xa26911;
      var _0xd9af84;
      var _0x3a44b2;
      var _0xe15088;
      _0x1bbca6.define(_0x2c639b, function (_0x20dce2, _0x5c2d72, _0x405b75, _0x2209d7, _0x58dafe) {
        var _0x206e5d;
        var _0x166a4f = _0x5c2d72("protobufjs/minimal");
        var _0x20f20d = _0x166a4f.Reader;
        var _0x8af861 = _0x166a4f.Writer;
        var _0x1b1180 = _0x166a4f.util;
        var _0xde28b4 = _0x166a4f.roots.default || (_0x166a4f.roots.default = {});
        _0xde28b4.cbt2Proto = ((_0x206e5d = {}).Column = function () {
          function _0x2f0840(_0x5b6f16) {
            if (this.Row = [], _0x5b6f16) {
              for (var _0xa75c92 = Object.keys(_0x5b6f16), _0x3028d2 = 0; _0x3028d2 < _0xa75c92.length; ++_0x3028d2) {
                null != _0x5b6f16[_0xa75c92[_0x3028d2]] && (this[_0xa75c92[_0x3028d2]] = _0x5b6f16[_0xa75c92[_0x3028d2]]);
              }
            }
          }
          _0x2f0840.prototype.Row = _0x1b1180.emptyArray;
          _0x2f0840.encode = function (_0x33b7ce, _0x5f092d) {
            if (_0x5f092d || (_0x5f092d = _0x8af861.create()), null != _0x33b7ce.Row && _0x33b7ce.Row.length) {
              _0x5f092d.uint32(10).fork();
              for (var _0x574cfc = 0; _0x574cfc < _0x33b7ce.Row.length; ++_0x574cfc) {
                _0x5f092d.int32(_0x33b7ce.Row[_0x574cfc]);
              }
              _0x5f092d.ldelim();
            }
            return _0x5f092d;
          };
          _0x2f0840.decode = function (_0x1e464c, _0x12e873) {
            _0x1e464c instanceof _0x20f20d || (_0x1e464c = _0x20f20d.create(_0x1e464c));
            for (var _0xf6d0e2 = undefined === _0x12e873 ? _0x1e464c.len : _0x1e464c.pos + _0x12e873, _0x29a1b1 = new _0xde28b4.cbt2Proto.Column(); _0x1e464c.pos < _0xf6d0e2;) {
              var _0x31afd9 = _0x1e464c.uint32();
              switch (_0x31afd9 >>> 3) {
                case 1:
                  if (_0x29a1b1.Row && _0x29a1b1.Row.length || (_0x29a1b1.Row = []), 2 == (7 & _0x31afd9)) {
                    for (var _0x4c0a48 = _0x1e464c.uint32() + _0x1e464c.pos; _0x1e464c.pos < _0x4c0a48;) {
                      _0x29a1b1.Row.push(_0x1e464c.int32());
                    }
                  } else {
                    _0x29a1b1.Row.push(_0x1e464c.int32());
                  }
                  break;
                default:
                  _0x1e464c.skipType(7 & _0x31afd9);
              }
            }
            return _0x29a1b1;
          };
          _0x2f0840.getTypeUrl = function (_0x10b12b) {
            undefined === _0x10b12b && (_0x10b12b = "type.googleapis.com");
            return _0x10b12b + "/cbt2Proto.Column";
          };
          return _0x2f0840;
        }(), _0x206e5d.RoundInfo = function () {
          function _0x22a50b(_0x59dc99) {
            if (this.Symbol = [], this.BonusLock = [], this.BonusMul = [], this.BonusNowMul = [], _0x59dc99) {
              for (var _0xa9924 = Object.keys(_0x59dc99), _0x160d90 = 0; _0x160d90 < _0xa9924.length; ++_0x160d90) {
                null != _0x59dc99[_0xa9924[_0x160d90]] && (this[_0xa9924[_0x160d90]] = _0x59dc99[_0xa9924[_0x160d90]]);
              }
            }
          }
          _0x22a50b.prototype.Symbol = _0x1b1180.emptyArray;
          _0x22a50b.prototype.Mult = 0;
          _0x22a50b.prototype.RoundWin = 0;
          _0x22a50b.prototype.GetBonus = false;
          _0x22a50b.prototype.BonusRound = 0;
          _0x22a50b.prototype.BonusLock = _0x1b1180.emptyArray;
          _0x22a50b.prototype.BonusMul = _0x1b1180.emptyArray;
          _0x22a50b.prototype.BonusNowMul = _0x1b1180.emptyArray;
          _0x22a50b.prototype.AwardTypeFlag = 0;
          _0x22a50b.prototype.ReelType = 0;
          _0x22a50b.prototype.IsMain = false;
          _0x22a50b.prototype.MaxFlag = false;
          _0x22a50b.encode = function (_0x1c6374, _0x3a66c3) {
            if (_0x3a66c3 || (_0x3a66c3 = _0x8af861.create()), null != _0x1c6374.Symbol && _0x1c6374.Symbol.length) {
              for (var _0x41a114 = 0; _0x41a114 < _0x1c6374.Symbol.length; ++_0x41a114) {
                _0xde28b4.cbt2Proto.Column.encode(_0x1c6374.Symbol[_0x41a114], _0x3a66c3.uint32(10).fork()).ldelim();
              }
            }
            if (null != _0x1c6374.Mult && Object.hasOwnProperty.call(_0x1c6374, "Mult") && _0x3a66c3.uint32(17).double(_0x1c6374.Mult), null != _0x1c6374.RoundWin && Object.hasOwnProperty.call(_0x1c6374, "RoundWin") && _0x3a66c3.uint32(25).double(_0x1c6374.RoundWin), null != _0x1c6374.GetBonus && Object.hasOwnProperty.call(_0x1c6374, "GetBonus") && _0x3a66c3.uint32(32).bool(_0x1c6374.GetBonus), null != _0x1c6374.BonusRound && Object.hasOwnProperty.call(_0x1c6374, "BonusRound") && _0x3a66c3.uint32(40).int32(_0x1c6374.BonusRound), null != _0x1c6374.BonusLock && _0x1c6374.BonusLock.length) {
              for (_0x3a66c3.uint32(50).fork(), _0x41a114 = 0; _0x41a114 < _0x1c6374.BonusLock.length; ++_0x41a114) {
                _0x3a66c3.bool(_0x1c6374.BonusLock[_0x41a114]);
              }
              _0x3a66c3.ldelim();
            }
            if (null != _0x1c6374.BonusMul && _0x1c6374.BonusMul.length) {
              for (_0x3a66c3.uint32(58).fork(), _0x41a114 = 0; _0x41a114 < _0x1c6374.BonusMul.length; ++_0x41a114) {
                _0x3a66c3.double(_0x1c6374.BonusMul[_0x41a114]);
              }
              _0x3a66c3.ldelim();
            }
            if (null != _0x1c6374.BonusNowMul && _0x1c6374.BonusNowMul.length) {
              for (_0x3a66c3.uint32(66).fork(), _0x41a114 = 0; _0x41a114 < _0x1c6374.BonusNowMul.length; ++_0x41a114) {
                _0x3a66c3.double(_0x1c6374.BonusNowMul[_0x41a114]);
              }
              _0x3a66c3.ldelim();
            }
            null != _0x1c6374.AwardTypeFlag && Object.hasOwnProperty.call(_0x1c6374, "AwardTypeFlag") && _0x3a66c3.uint32(72).int32(_0x1c6374.AwardTypeFlag);
            null != _0x1c6374.ReelType && Object.hasOwnProperty.call(_0x1c6374, "ReelType") && _0x3a66c3.uint32(80).int32(_0x1c6374.ReelType);
            null != _0x1c6374.IsMain && Object.hasOwnProperty.call(_0x1c6374, "IsMain") && _0x3a66c3.uint32(88).bool(_0x1c6374.IsMain);
            null != _0x1c6374.MaxFlag && Object.hasOwnProperty.call(_0x1c6374, "MaxFlag") && _0x3a66c3.uint32(96).bool(_0x1c6374.MaxFlag);
            return _0x3a66c3;
          };
          _0x22a50b.decode = function (_0x3219e4, _0x5645b4) {
            _0x3219e4 instanceof _0x20f20d || (_0x3219e4 = _0x20f20d.create(_0x3219e4));
            for (var _0x758703 = undefined === _0x5645b4 ? _0x3219e4.len : _0x3219e4.pos + _0x5645b4, _0x250473 = new _0xde28b4.cbt2Proto.RoundInfo(); _0x3219e4.pos < _0x758703;) {
              var _0xb55d73 = _0x3219e4.uint32();
              switch (_0xb55d73 >>> 3) {
                case 1:
                  _0x250473.Symbol && _0x250473.Symbol.length || (_0x250473.Symbol = []);
                  _0x250473.Symbol.push(_0xde28b4.cbt2Proto.Column.decode(_0x3219e4, _0x3219e4.uint32()));
                  break;
                case 2:
                  _0x250473.Mult = _0x3219e4.double();
                  break;
                case 3:
                  _0x250473.RoundWin = _0x3219e4.double();
                  break;
                case 4:
                  _0x250473.GetBonus = _0x3219e4.bool();
                  break;
                case 5:
                  _0x250473.BonusRound = _0x3219e4.int32();
                  break;
                case 6:
                  if (_0x250473.BonusLock && _0x250473.BonusLock.length || (_0x250473.BonusLock = []), 2 == (7 & _0xb55d73)) {
                    for (var _0x11e1c1 = _0x3219e4.uint32() + _0x3219e4.pos; _0x3219e4.pos < _0x11e1c1;) {
                      _0x250473.BonusLock.push(_0x3219e4.bool());
                    }
                  } else {
                    _0x250473.BonusLock.push(_0x3219e4.bool());
                  }
                  break;
                case 7:
                  if (_0x250473.BonusMul && _0x250473.BonusMul.length || (_0x250473.BonusMul = []), 2 == (7 & _0xb55d73)) {
                    for (_0x11e1c1 = _0x3219e4.uint32() + _0x3219e4.pos; _0x3219e4.pos < _0x11e1c1;) {
                      _0x250473.BonusMul.push(_0x3219e4.double());
                    }
                  } else {
                    _0x250473.BonusMul.push(_0x3219e4.double());
                  }
                  break;
                case 8:
                  if (_0x250473.BonusNowMul && _0x250473.BonusNowMul.length || (_0x250473.BonusNowMul = []), 2 == (7 & _0xb55d73)) {
                    for (_0x11e1c1 = _0x3219e4.uint32() + _0x3219e4.pos; _0x3219e4.pos < _0x11e1c1;) {
                      _0x250473.BonusNowMul.push(_0x3219e4.double());
                    }
                  } else {
                    _0x250473.BonusNowMul.push(_0x3219e4.double());
                  }
                  break;
                case 9:
                  _0x250473.AwardTypeFlag = _0x3219e4.int32();
                  break;
                case 10:
                  _0x250473.ReelType = _0x3219e4.int32();
                  break;
                case 11:
                  _0x250473.IsMain = _0x3219e4.bool();
                  break;
                case 12:
                  _0x250473.MaxFlag = _0x3219e4.bool();
                  break;
                default:
                  _0x3219e4.skipType(7 & _0xb55d73);
              }
            }
            return _0x250473;
          };
          _0x22a50b.getTypeUrl = function (_0x1deec6) {
            undefined === _0x1deec6 && (_0x1deec6 = "type.googleapis.com");
            return _0x1deec6 + "/cbt2Proto.RoundInfo";
          };
          return _0x22a50b;
        }(), _0x206e5d.SpinAck = function () {
          function _0x4b7106(_0x3d5700) {
            if (this.RoundQueue = [], _0x3d5700) {
              for (var _0x49bcd9 = Object.keys(_0x3d5700), _0x5c4002 = 0; _0x5c4002 < _0x49bcd9.length; ++_0x5c4002) {
                null != _0x3d5700[_0x49bcd9[_0x5c4002]] && (this[_0x49bcd9[_0x5c4002]] = _0x3d5700[_0x49bcd9[_0x5c4002]]);
              }
            }
          }
          _0x4b7106.prototype.RoundQueue = _0x1b1180.emptyArray;
          _0x4b7106.prototype.BonusTotalWin = 0;
          _0x4b7106.prototype.BonusType = 0;
          _0x4b7106.prototype.TotalWin = 0;
          _0x4b7106.prototype.AckType = 0;
          _0x4b7106.prototype.RTP = 0;
          _0x4b7106.prototype.LID = 0;
          _0x4b7106.prototype.RID = 0;
          _0x4b7106.encode = function (_0x94c35c, _0x1db85a) {
            if (_0x1db85a || (_0x1db85a = _0x8af861.create()), null != _0x94c35c.RoundQueue && _0x94c35c.RoundQueue.length) {
              for (var _0x4a16b8 = 0; _0x4a16b8 < _0x94c35c.RoundQueue.length; ++_0x4a16b8) {
                _0xde28b4.cbt2Proto.RoundInfo.encode(_0x94c35c.RoundQueue[_0x4a16b8], _0x1db85a.uint32(10).fork()).ldelim();
              }
            }
            null != _0x94c35c.BonusTotalWin && Object.hasOwnProperty.call(_0x94c35c, "BonusTotalWin") && _0x1db85a.uint32(17).double(_0x94c35c.BonusTotalWin);
            null != _0x94c35c.BonusType && Object.hasOwnProperty.call(_0x94c35c, "BonusType") && _0x1db85a.uint32(24).int32(_0x94c35c.BonusType);
            null != _0x94c35c.TotalWin && Object.hasOwnProperty.call(_0x94c35c, "TotalWin") && _0x1db85a.uint32(33).double(_0x94c35c.TotalWin);
            null != _0x94c35c.AckType && Object.hasOwnProperty.call(_0x94c35c, "AckType") && _0x1db85a.uint32(40).int32(_0x94c35c.AckType);
            null != _0x94c35c.RTP && Object.hasOwnProperty.call(_0x94c35c, "RTP") && _0x1db85a.uint32(49).double(_0x94c35c.RTP);
            null != _0x94c35c.LID && Object.hasOwnProperty.call(_0x94c35c, "LID") && _0x1db85a.uint32(56).int32(_0x94c35c.LID);
            null != _0x94c35c.RID && Object.hasOwnProperty.call(_0x94c35c, "RID") && _0x1db85a.uint32(64).int32(_0x94c35c.RID);
            return _0x1db85a;
          };
          _0x4b7106.decode = function (_0xaa8da0, _0x587133) {
            _0xaa8da0 instanceof _0x20f20d || (_0xaa8da0 = _0x20f20d.create(_0xaa8da0));
            for (var _0x41e7c1 = undefined === _0x587133 ? _0xaa8da0.len : _0xaa8da0.pos + _0x587133, _0x3d66b1 = new _0xde28b4.cbt2Proto.SpinAck(); _0xaa8da0.pos < _0x41e7c1;) {
              var _0xebaa6e = _0xaa8da0.uint32();
              switch (_0xebaa6e >>> 3) {
                case 1:
                  _0x3d66b1.RoundQueue && _0x3d66b1.RoundQueue.length || (_0x3d66b1.RoundQueue = []);
                  _0x3d66b1.RoundQueue.push(_0xde28b4.cbt2Proto.RoundInfo.decode(_0xaa8da0, _0xaa8da0.uint32()));
                  break;
                case 2:
                  _0x3d66b1.BonusTotalWin = _0xaa8da0.double();
                  break;
                case 3:
                  _0x3d66b1.BonusType = _0xaa8da0.int32();
                  break;
                case 4:
                  _0x3d66b1.TotalWin = _0xaa8da0.double();
                  break;
                case 5:
                  _0x3d66b1.AckType = _0xaa8da0.int32();
                  break;
                case 6:
                  _0x3d66b1.RTP = _0xaa8da0.double();
                  break;
                case 7:
                  _0x3d66b1.LID = _0xaa8da0.int32();
                  break;
                case 8:
                  _0x3d66b1.RID = _0xaa8da0.int32();
                  break;
                default:
                  _0xaa8da0.skipType(7 & _0xebaa6e);
              }
            }
            return _0x3d66b1;
          };
          _0x4b7106.getTypeUrl = function (_0xbbab62) {
            undefined === _0xbbab62 && (_0xbbab62 = "type.googleapis.com");
            return _0xbbab62 + "/cbt2Proto.SpinAck";
          };
          return _0x4b7106;
        }(), _0x206e5d);
        _0x405b75.exports = _0xde28b4;
        _0x53240d = _0x405b75.exports;
      }, function () {
        return {
          "protobufjs/minimal": _0x212eb2
        };
      });
      _0x2c639b || _0x1bbca6.throwInvalidWrapper("./cbt2Proto.js", "file:///Users/chaiyocasinord1/Desktop/H5/Client/workspace/CrazyBoundty2/Client/Thai_UAT/assets/Script/Proto/cbt2Proto.mjs?cjs=&original=.js");
      _0x1bbca6.require(_0x2c639b);
      _0xa10b8c._RF.push({}, "c1ea7Pii+dAi78piqmmzKpD", "GameView", undefined);
      var _0xe43c3c = _0x42d118.ccclass;
      var _0x274e85 = _0x42d118.property;
      var _0x597f60 = 1136;
      var _0x8ce0cc = 640;
      var _0x92ab8c = 1.775;
      _0x4df695 = _0x274e85({
        type: _0x41f03c,
        tooltip: "MainGame動畫"
      });
      _0x3b0af7 = _0x274e85({
        type: _0x2f2b2d,
        tooltip: "標題-橫"
      });
      _0x2a2afd = _0x274e85({
        type: _0xffea4b,
        tooltip: "標題合圖"
      });
      _0x418b51 = _0x274e85({
        type: _0x5cce77,
        tooltip: "背景動畫"
      });
      _0x31ce72 = _0x274e85({
        type: _0x5f10b2,
        tooltip: "特色描述"
      });
      _0x4586ae = _0x274e85({
        type: _0x3bf867,
        tooltip: "轉輪"
      });
      _0x2610f6 = _0x274e85({
        type: _0x8fc14f,
        tooltip: "盤面表演"
      });
      _0x261942 = _0x274e85({
        type: _0x2b432b,
        tooltip: "盤面觸控"
      });
      _0x1f09c1 = _0x274e85({
        type: _0x573cdb,
        tooltip: "小獎/大獎表演"
      });
      _0x24adbf = _0x274e85({
        type: _0x4f3b7,
        tooltip: "機台動畫"
      });
      _0x5723d0 = _0x274e85({
        type: _0x3e09b0,
        tooltip: "賠付顯示區"
      });
      var _0x2ea0b5 = _0xe43c3c((_0x1b12a8 = function (_0x18f689) {
        function _0x2d53f0() {
          for (var _0x4ce6e7, _0x5d052c = arguments.length, _0xcdb103 = new Array(_0x5d052c), _0x4343ff = 0; _0x4343ff < _0x5d052c; _0x4343ff++) {
            _0xcdb103[_0x4343ff] = arguments[_0x4343ff];
          }
          _0x4f841b(_0x4ce6e7 = _0x18f689.call.apply(_0x18f689, [this].concat(_0xcdb103)) || this, "m_mainGameAnim", _0x569f28, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_titleSpriteL", _0x114bd3, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_titleSpriteAtlas", _0x5b3876, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_backgroundView", _0x1224f0, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_manual", _0x23a399, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_slotReels", _0x5aa17b, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_effectPlate", _0x15e861, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_plateSpineBtn", _0xa26911, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_bigWin", _0xd9af84, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_machineView", _0x3a44b2, _0x2fdb02(_0x4ce6e7));
          _0x4f841b(_0x4ce6e7, "m_paytableView", _0xe15088, _0x2fdb02(_0x4ce6e7));
          _0x4ce6e7.m_autoplayInfos = null;
          _0x4ce6e7.m_isLandscape = false;
          _0x4ce6e7.m_isLockRotation = false;
          _0x4ce6e7.m_isChange = false;
          _0x4ce6e7.m_isBottombarFinished = false;
          _0x4ce6e7.m_isFirstPlateSpin = true;
          _0x4ce6e7.m_oldBetIdx = null;
          _0x4ce6e7.m_realFeaturesSpinAck = null;
          _0x4ce6e7.m_realFeaturesSpinAck_refactor = null;
          _0x4ce6e7.m_featuresType = null;
          _0x4ce6e7.m_isShowFeatures = false;
          _0x4ce6e7.m_isAutoShowFeatures = false;
          _0x4ce6e7.m_isFeatureShow = false;
          _0x4ce6e7.m_bgmId = null;
          _0x4ce6e7.m_bgmAudioName = null;
          _0x4ce6e7.m_model = null;
          _0x4ce6e7.m_spinAck = null;
          _0x4ce6e7.m_spinAck_refactor = null;
          _0x4ce6e7.m_unshowSpinAck = null;
          _0x4ce6e7.m_unshowSpinAck_refactor = null;
          _0x4ce6e7.m_plateIndex = -1;
          _0x4ce6e7.m_fakeSpinAck = null;
          _0x4ce6e7.m_isCheckChips = false;
          _0x4ce6e7.m_spinClickEvent = 0;
          _0x4ce6e7.m_canSpaceStop = false;
          _0x4ce6e7.m_isInBG = false;
          _0x4ce6e7.m_nearwinSoundId = null;
          _0x4ce6e7.m_canStopSpin = false;
          return _0x4ce6e7;
        }
        _0x567cf6(_0x2d53f0, _0x18f689);
        var _0x4511fc = _0x2d53f0.prototype;
        _0x4511fc.onLoad = function () {
          var _0x585a47 = this;
          _0x402257.util.Long = _0x1e23f7;
          _0x402257.configure();
          _0x55d63a();
          _0xc8ef61.IsInMG = function () {
            return !_0x585a47.m_isInBG;
          };
          _0xc8ef61.CURRENCY_CHANGE_ENABLE = true;
          this.m_model = new _0x4f95e1();
          this.m_effectPlate.Init(this);
          this.m_slotReels.Init(this);
          this.m_paytableView.Init(this);
          this.m_machineView.Init(this);
          this.m_backgroundView.Init(this);
          this.m_bigWin.Init();
          this.m_slotReels.SetPlayStopSoundFunction(function (_0x399066) {
            _0x585a47.StopSpinFunc(_0x399066);
          });
          _0x2899bc.isNative || (window.onbeforeunload = function () {}, window.onerror = function (_0x336f8b, _0x2aa578, _0x36002f, _0x5b07d3, _0x4f6562) {
            var _0x894d11 = "-1";
            var _0x72518d = 0;
            _0xc8ef61.APP && (_0x894d11 = _0xc8ef61.APP.GetAID(), _0x72518d = Number(_0xc8ef61.APP.GetApiID()));
            var _0x4c4698 = _0x495ba9.FormErrorParams(_0x894d11, _0x72518d, Number(_0xc8ef61.NOW_GAME_ID), _0x883e10.Ver, _0x4f6562);
            _0x495ba9.SendErrorLog(_0x4c4698);
          });
        };
        _0x4511fc.start = function () {
          var _0x3039c7 = this;
          _0x369abc.CheckSwitchOff(_0x43d062.NoQuickSpin) || _0x28d1f6.on(_0x298948.EventType.KEY_DOWN, function (_0x3bd570) {
            switch (_0x3bd570.keyCode) {
              case _0x247b94.SPACE:
                _0x311069.SendSpinLog();
                _0x38d2d9.IsShow() || _0x2fd06d && !_0x2fd06d.IsShowBackpack() && (_0x311069.BtnState !== _0x33e9ab.IDLE || _0x311069.IsAutoSpin ? _0x3039c7.m_canSpaceStop && _0x3039c7.ClickStop() : (_0x3039c7.m_spinClickEvent = _0xc8ef61.BTN_CLICK_EVENT.SPACE_SPIN, _0x3039c7.ClickSpin(), _0x3039c7.m_canSpaceStop = false));
            }
          });
          _0x369abc.CheckSwitchOff(_0x43d062.CloseManual) && (this.m_manual.node.active = false);
          var _0x49d4de = {};
          _0x49d4de[_0x4b430a.WAIT_RES] = new _0x3faa42(this);
          _0x49d4de[_0x883e10.GameState.WAIT_READY] = new _0x3b852a(this);
          _0x49d4de[_0x883e10.GameState.PLATE_SHOW] = new _0x36060c(this);
          _0x49d4de[_0x883e10.GameState.FEATURE_SHOW] = new _0x1e1373(this);
          _0x49d4de[_0x883e10.GameState.UNSHOW_PREPARE] = new _0x43b60f(this);
          _0x49d4de[_0x4b430a.IDLE] = new _0x5d1319(this);
          _0x49d4de[_0x4b430a.SPIN] = new _0x3c603d(this);
          _0x49d4de[_0x883e10.GameState.AWARD] = new _0x3ee6e8(this);
          _0x49d4de[_0x883e10.GameState.ROUND_SHOW_END] = new _0x4aadc9(this);
          _0x49d4de[_0x4b430a.CHECK_STATE] = new _0x7d10c(this);
          _0x49d4de[_0x883e10.GameState.ROUND_END] = new _0x17f9a8(this);
          _0x49d4de[_0x883e10.GameState.BONUS_ENTER] = new _0xb7581d(this);
          _0x49d4de[_0x883e10.GameState.BONUS_LEAVE] = new _0x5bf44d(this);
          _0x49d4de[_0x883e10.GameState.BONUS_AWARD] = new _0x2caced(this);
          _0x57d1f9.Init(_0x49d4de);
          _0x57d1f9.NextState(_0x4b430a.LOGIN);
          _0xd71ac5.SetGameCb(this);
        };
        _0x4511fc.update = function (_0x882964) {
          _0x57d1f9.Tick(_0x882964);
        };
        _0x4511fc.OnExit = function () {
          _0x37b4ff.stopAll();
          _0x57d1f9.NextState(_0x4b430a.GAME_CLOSE);
          _0xc8ef61.ALIVE_INTERVAL && (clearInterval(_0xc8ef61.ALIVE_INTERVAL), _0xc8ef61.ALIVE_INTERVAL = null);
          _0x311069.LeaveGame();
          _0x51e4e3(this.node).delay(0.5).call(function () {
            _0x369abc.CloseGameTab(false);
          }).start();
          _0x311069.OnExit();
          _0x883e10.OnExit();
        };_0x4511fc.OnCommand = function(_0x244dad, _0x3a51db, data) {
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

          switch (_0x244dad) {
            case _0xc8ef61.AckType.info:
              this.SettingBottomBar();
              _0x311069.AutoPlayPanelInit();
              _0x2fd06d.FeaturesInit(["features/left/spriteFrame", "features/right/spriteFrame"], [_0x883e10.StringKey.FEATURE_LEFT, _0x883e10.StringKey.FEATURE_RIGHT], _0x883e10.SPICY_LEVEL, this.m_titleSpriteAtlas);
              var _0x2eda91 = _0x19b0e0.GetGameAtlas();
              _0x2fd06d.SetFeatruesDesc([_0x2eda91.getSpriteFrame("txt1"), _0x2eda91.getSpriteFrame("txt2")]);
              _0x2fd06d.CheckFirstFeatures();
              this.LoginSuccess();
              this.LoadSound();
              this.InitView();
              break;
            case _0xc8ef61.AckType.lastSpin:
            case _0xc8ef61.AckType.spin:
              var _0x1b2f59 = _0x53240d.cbt2Proto.SpinAck.decode(_0x3a51db);
              _0xb9245("pkg spin", _0x1b2f59);
              this.m_spinAck = this.m_model.SpinAckProcessing(_0x1b2f59);
              this.m_spinAck_refactor = _0x1b2f59;
              this.OnRecvSpinAck();
              
            SendTestSpinInfo(_0x1b2f59, data);
break;
            case _0xc8ef61.AckType.unshow:
              var _0xc021e9 = _0x53240d.cbt2Proto.SpinAck.decode(_0x3a51db);
              _0xb9245("pkg unshow", _0xc021e9);
              this.m_unshowSpinAck = this.m_model.SpinAckProcessing(_0xc021e9);
              this.m_unshowSpinAck_refactor = _0xc021e9;
          }
        };
        _0x4511fc.LoginSuccess = function () {
          var _0x54f97b = this;
          this.SetTxt();
          _0x311069.SetTxt();
          null == _0x2fd06d || _0x2fd06d.SetTxt();
          _0x311069.SetAutoPlayPanelTxt();
          _0x2fd06d.SetCanAutoShowRankboardUI();
          _0x311069.SetSpinState(_0x33e9ab.CLICK_CANCEL);
          this.OnRotation();
          _0x369abc.AddOnRotationCb(function () {
            _0x54f97b.OnRotation();
          });
          this.ChangeDemoPlateByRatio();
          _0x311069.FeaturesDemoInit(function (_0xcba075) {
            _0xb9245("demo select", _0xcba075);
            _0x54f97b.m_isShowFeatures = true;
            _0x54f97b.PlayDemo(_0xcba075);
          }, this.m_realFeaturesSpinAck_refactor.length, _0x311069.FindBetIndexByValue(_0x883e10.FeatureBetValue), function () {
            _0x54f97b.EffectPlate.CleanAward();
            _0x54f97b.PaytableView.StopAward();
            _0x54f97b.PaytableView.StopBetAnim();
            _0x54f97b.MachineView.Reset();
            _0x54f97b.SlotReels.SetRandomPlate();
            _0x54f97b.m_isAutoShowFeatures && (_0x54f97b.m_isAutoShowFeatures = false, _0x57d1f9.NextState(_0x883e10.GameState.WAIT_READY));
          });
        };
        _0x4511fc.LoadSound = function (_0x3471bf) {
          var _0x4f0f84 = this;
          if (_0x3471bf) {
            if (_0x883e10.AudioFilePath.hasOwnProperty(_0x3471bf)) {
              var _0x10c374 = _0x883e10.AudioFilePath[_0x3471bf];
              _0xc8ef61.GameBundle.load(_0x10c374, function (_0x4f2c01, _0x13ede6) {
                if (_0x4f2c01) {
                  _0x3c3cbe(_0x4f2c01.message || _0x4f2c01);
                  return void _0x4f0f84.LoadSound(_0x3471bf);
                }
                _0x883e10.AudioClips[_0x3471bf] = _0x13ede6;
              });
            }
          } else {
            var _0x317277 = function (_0x164abd) {
              if (_0x883e10.AudioFilePath.hasOwnProperty(_0x164abd)) {
                var _0x1a44f7 = _0x883e10.AudioFilePath[_0x164abd];
                _0xc8ef61.GameBundle.load(_0x1a44f7, function (_0x4b8985, _0x504d2b) {
                  if (_0x4b8985) {
                    _0x3c3cbe(_0x4b8985.message || _0x4b8985);
                    return void _0x4f0f84.LoadSound(_0x164abd);
                  }
                  _0x883e10.AudioClips[_0x164abd] = _0x504d2b;
                });
              }
            };
            for (var _0x3280ac in _0x883e10.AudioFilePath) _0x317277(_0x3280ac);
          }
        };
        _0x4511fc.LockRotation = function () {
          this.m_isLockRotation = true;
        };
        _0x4511fc.ResumeRotation = function () {
          this.m_isLockRotation = false;
          this.m_isChange && this.OnRotation();
        };
        _0x4511fc.OnRotation = function () {
          var _0x22ca89 = _0x166cb0.windowSize;
          if (this.m_isLockRotation) {
            var _0x41ed20 = _0x22ca89.width > _0x22ca89.height;
            this.m_isLandscape && !_0x41ed20 || !this.m_isLandscape && _0x41ed20 ? (this.FixView(), this.m_isChange = true) : this.m_isChange && (this.AdaptiveView(), this.m_isChange = false);
          } else {
            this.m_isChange = false;
            this.m_isLandscape = _0x22ca89.width > _0x22ca89.height;
            this.AdaptiveView();
            this.RefreshView();
            this.BackgroundView.RefreshView();
            this.EffectPlate.RefreshView();
            this.MachineView.RefreshView();
            _0x311069 && _0x311069.OnRotation(this.m_isLandscape, function () {
              for (var _0x2e42e9 = arguments.length, _0x3305ad = new Array(_0x2e42e9), _0x338a31 = 0; _0x338a31 < _0x2e42e9; _0x338a31++) {
                _0x3305ad[_0x338a31] = arguments[_0x338a31];
              }
              _0xb9245("newBottombarManager.OnRotation", _0x3305ad);
            }, true);
            _0x2fd06d && _0x2fd06d.OnRotation(this.m_isLandscape);
            _0x38d2d9.OnRotate(this.m_isLandscape);
          }
        };
        _0x4511fc.AdaptiveView = function () {
          var _0xe2c280 = _0x166cb0.windowSize;
          var _0x186f85 = Math.max(_0xe2c280.width, _0xe2c280.height) / Math.min(_0xe2c280.width, _0xe2c280.height) > _0x92ab8c;
          this.m_isLandscape ? _0x186f85 ? _0x12c007.setDesignResolutionSize(_0x597f60, _0x8ce0cc, _0x24d3d0.FIXED_HEIGHT) : _0x12c007.setDesignResolutionSize(_0x597f60, _0x8ce0cc, _0x24d3d0.FIXED_WIDTH) : _0x186f85 ? _0x12c007.setDesignResolutionSize(_0x8ce0cc, _0x597f60, _0x24d3d0.FIXED_WIDTH) : _0x12c007.setDesignResolutionSize(_0x8ce0cc, _0x597f60, _0x24d3d0.FIXED_HEIGHT);
        };
        _0x4511fc.FixView = function () {
          var _0x234db5 = _0x166cb0.windowSize;
          var _0x69bd31 = _0x234db5.width > _0x234db5.height;
          var _0x367a5d = Math.max(_0x234db5.width, _0x234db5.height) / Math.min(_0x234db5.width, _0x234db5.height) > _0x92ab8c;
          var _0x514762 = _0x367a5d ? Math.max(_0x234db5.width, _0x234db5.height) / Math.min(_0x234db5.width, _0x234db5.height) : _0x92ab8c;
          var _0x5e7aa2 = 0;
          if (_0x5e7aa2 = _0x367a5d ? _0x514762 * _0x8ce0cc : _0x597f60, _0x69bd31) {
            var _0x4dc135 = _0x5e7aa2;
            var _0x1c4407 = _0x5e7aa2 / _0x514762;
            _0x12c007.setDesignResolutionSize(_0x1c4407, _0x4dc135, _0x24d3d0.FIXED_HEIGHT);
          } else {
            var _0x157b0e = _0x5e7aa2;
            var _0x268471 = _0x5e7aa2 * _0x514762;
            _0x12c007.setDesignResolutionSize(_0x157b0e, _0x268471, _0x24d3d0.FIXED_WIDTH);
          }
        };
        _0x4511fc.SettingBottomBar = function () {
          var _0x31a577 = this;
          _0x311069.VerString = "v_" + _0xc8ef61.VERSION + "_" + _0x883e10.Ver;
          _0x311069.IsSendBetChange = true;
          _0x311069.SetTouchEvet(function (_0x560aad) {
            _0x31a577.BarTouchCb(_0x560aad);
          });
          _0x311069.SetWinValue(0);
          _0x311069.SetWinValueScale(true);
          _0x311069.HaveStopSound(false);
          var _0x1ddcd1 = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + _0x19b0e0.CurrLang);
          _0x311069.ShowPlayReady(_0x1ddcd1, function () {
            return _0x57d1f9.Current() !== _0x883e10.GameState.WAIT_READY || (_0x57d1f9.NextState(_0x883e10.GameState.PLATE_SHOW), false);
          }, function () {
            _0x57d1f9.Current() === _0x883e10.GameState.WAIT_READY && (_0x2fd06d.IsFeaturesDemo ? (_0x31a577.m_isFeatureShow = true, _0x57d1f9.NextState(_0x883e10.GameState.FEATURE_SHOW)) : _0x57d1f9.NextState(_0x883e10.GameState.PLATE_SHOW));
          });
          _0x311069.SetFollowNode(this.node, [_0x2af1b6(0, 232, 0), _0x2af1b6(0, 0, 0)]);
          _0x28b44b.AddCb({
            StopAutoCb: function () {
              _0x311069.ShowAutoPlayState(false);
            }
          });
          _0x369abc.CheckSwitchOff(_0x43d062.NoQuickSpin) || this.m_plateSpineBtn.node.on(_0x5cf7a3.EventType.TOUCH_END, function (_0x5065f3) {
            _0xb9245("touch");
            _0x57d1f9.Current() !== _0x883e10.GameState.PLATE_SHOW && (_0x311069.SendSpinLog(), _0x31a577.BarTouchCb(_0x5065f3));
          });
          _0x311069.SetAutoPlaySettingPanelFreeGameString(_0xc8ef61.StringKey.AUTO_PLAY_PANEL_ENTER_BONUSGAME);
          _0x311069.SetAutoplayConfirmCb(function (_0x281b3c) {
            _0x31a577.m_autoplayInfos = JSON.parse(_0x281b3c);
            _0x57d1f9.Current() === _0x4b430a.IDLE && (_0x31a577.m_manual.CloseManul(), _0x250424.Dispatch("SpinReqNotify"));
            _0x311069.SetSpinState(_0x33e9ab.CLICK_AUTOPLAY);
          });
          _0x369abc.CloseIntroLoading.push(function () {
            _0xd71ac5.HasUnshow && _0x57d1f9.NextState(_0x883e10.GameState.UNSHOW_PREPARE);
          });
          this.m_isBottombarFinished = true;
        };
        _0x4511fc.BarTouchCb = function (_0x44f0ca) {
          var _0x255d29 = this;
          var _0x53a35c = _0x44f0ca.target.name;
          switch (_0xb9245("bar event", _0x53a35c), _0x53a35c) {
            case this.m_plateSpineBtn.node.name:
              if (_0x57d1f9.Current() === _0x4b430a.IDLE) {
                if (this.m_isFirstPlateSpin) {
                  this.m_isFirstPlateSpin = false;
                  var _0x3d3a7e = {
                    contextKey: _0xc8ef61.StringKey.MSGBOX_TOUCHPANEL_SPIN,
                    titleKey: _0xc8ef61.StringKey.MSGBOX_TITLE_SYSTEM_INFO,
                    showCancelBtn: false,
                    showConfirmBtn: true,
                    showCloseBtn: true,
                    confirmCB: function () {
                      _0x255d29.m_spinClickEvent = _0xc8ef61.BTN_CLICK_EVENT.CLICK_PLATE;
                      _0x255d29.ClickSpin();
                    }
                  };
                  _0x38d2d9.PushMessageBoxSetting(_0x3d3a7e);
                } else {
                  this.m_spinClickEvent = _0xc8ef61.BTN_CLICK_EVENT.CLICK_PLATE;
                  this.ClickSpin();
                }
              } else {
                this.ClickStop();
              }
              break;
            case "btn_spin":
            case "btn_spinstop":
              _0x57d1f9.Current() === _0x4b430a.IDLE ? (this.m_spinClickEvent = _0xc8ef61.BTN_CLICK_EVENT.SPIN, this.ClickSpin()) : this.ClickStop();
              break;
            case "btn_autoplay":
              if (this.m_manual.CloseManul(), !_0x369abc.CheckSwitchOff(_0x43d062.ShowAutoSetting)) {
                break;
              }
            case "btn_wiseautoplay":
              _0x311069.IsAutoSpin && (_0x311069.ShowAutoPlayState(false), _0x311069.SetSpinState(_0x33e9ab.CLICK_CANCEL));
              _0x311069.ShowAutoplaySettingView(_0x311069.GetChips());
              break;
            case "btn_autostop_c":
            case "btn_autostop":
              _0x311069.ShowAutoPlayState(false);
              _0x311069.SetSpinState(_0x33e9ab.CLICK_CANCEL);
              break;
            case _0x593958:
              var _0x1156a8 = _0x311069.GetNowBetIndex();
              if (-1 === _0x1156a8) {
                var _0x17d1e6 = _0x311069.GetNowBetValue();
                _0x1156a8 = _0x311069.FindBetIndexByValue(_0x17d1e6);
              }
              var _0x5d03ac = _0x311069.GetBetList();
              !isNaN(_0x1156a8) && _0x1156a8 < _0x5d03ac.length && this.ChangeBet(_0x1156a8);
              break;
            default:
              var _0x4f8d49 = Number(_0x53a35c);
              if (-1 === _0x4f8d49) {
                var _0xff162a = _0x311069.GetNowBetValue();
                _0x4f8d49 = _0x311069.FindBetIndexByValue(_0xff162a);
              }
              var _0x2c095f = _0x311069.GetBetList();
              !isNaN(_0x4f8d49) && _0x4f8d49 < _0x2c095f.length && this.ChangeBet(_0x4f8d49);
          }
        };
        _0x4511fc.SetTxt = function () {
          this.m_titleSpriteL.spriteFrame = this.m_titleSpriteAtlas.getSpriteFrame("logo_" + _0x19b0e0.CurrLang);
          this.m_manual.SetTxt(_0x883e10.MANUAL_STRINGS, _0x883e10.MANUAL_TITLE);
        };
        _0x4511fc.InitExtra = function () {
          var _0x127fe6 = this;
          _0xc8ef61.APP && (this.ReqMail(), _0x2fd06d.RecommendNewInit(), _0x1a4040.NewInit(), _0x1df964.NewInit(), _0x3216f4.JpManagerInit(), _0x3216f4.MhbManagerInit(), _0x488055.NewInit(function () {
            _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN);
            _0x250424.Dispatch("SpinReqNotify");
          }, function () {
            _0x311069.IsAutoSpin && _0x311069.ShowAutoPlayState(false);
          }), _0x514242.NewInit(), _0x2fd06d.RankingInit([_0xc8ef61.APP.GetAccount(), _0xc8ef61.APP.GetNickName()], _0xc8ef61.APP.GetAToken(), _0x369abc.ConvertLanguageToFull(_0x19b0e0.CurrLang), null, null, function () {
            _0x127fe6.ReqMail();
          }), _0x3eb3e6.Init());
        };
        _0x4511fc.ReqMail = function () {
          _0xc8ef61.APP && _0x495ba9.SendMailReq();
        };
        _0x4511fc.SetUnShowSpinAck = function (_0x412efd) {
          this.m_plateIndex = _0x412efd;
          this.m_spinAck = this.m_unshowSpinAck;
          this.m_spinAck_refactor = this.m_unshowSpinAck_refactor;
          this.m_unshowSpinAck = null;
          this.m_unshowSpinAck_refactor = null;
        };
        _0x4511fc.OnRecvSpinAck = function () {
          var _0x40b6b9 = _0x12d1c6(_0x41e40d().mark(function _0x3edd59() {
            return _0x41e40d().wrap(function (_0x3e4aa5) {
              for (;;) {
                switch (_0x3e4aa5.prev = _0x3e4aa5.next) {
                  case 0:
                    this.m_canSpaceStop = true;
                    this.m_canStopSpin = true;
                    _0x311069.IsAutoSpin && !_0x311069.IsHardStop && _0x311069.SetSpinState(_0x33e9ab.CLICK_AUTOPLAY_HARDSTOP);
                    this.m_isCheckChips = false;
                    _0x311069.SetWinValue(0);
                    this.m_plateIndex = -1;
                    this.SetPlateInfo();
                  case 7:
                  case "end":
                    return _0x3e4aa5.stop();
                }
              }
            }, _0x3edd59, this);
          }));
          return function () {
            return _0x40b6b9.apply(this, arguments);
          };
        }();
        _0x4511fc.RetryRoundEnd = function () {
          _0xd71ac5.ReqRoundEnd(this.PlateIndex + 1, this.IsLastPlate);
        };
        _0x4511fc.GetSpinInfo = function () {
          return null;
        };
        _0x4511fc.CancelSpin = function () {
          this.m_slotReels.RecoverPlate();
        };
        _0x4511fc.PlayDemo = function () {
          var _0x5ef813 = _0x12d1c6(_0x41e40d().mark(function _0x40752a(_0x354223) {
            return _0x41e40d().wrap(function (_0x3a5ade) {
              for (;;) {
                switch (_0x3a5ade.prev = _0x3a5ade.next) {
                  case 0:
                    this.m_featuresType = _0x354223;
                    _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN);
                    _0x57d1f9.NextState(_0x4b430a.SPIN);
                    0.5;
                    _0x3a5ade.next = 6;
                    return _0xc8ef61.Wait(this, 0.5);
                  case 6:
                    this.m_spinAck = this.m_realFeaturesSpinAck[_0x354223];
                    this.m_spinAck_refactor = this.m_realFeaturesSpinAck_refactor[_0x354223];
                    this.OnRecvSpinAck();
                  case 9:
                  case "end":
                    return _0x3a5ade.stop();
                }
              }
            }, _0x40752a, this);
          }));
          return function (_0x548553) {
            return _0x5ef813.apply(this, arguments);
          };
        }();
        _0x4511fc.ChangeDemoPlateByRatio = function () {
          this.m_realFeaturesSpinAck = [];
          this.m_realFeaturesSpinAck_refactor = [];
          var _0x2b4191 = _0x311069.GetBetList()[_0x311069.FindBetIndexByValue(_0x883e10.FeatureBetValue)];
          var _0x1ce182 = this.ChangeWinInfo(_0x10852c.MGSpinAck, _0x2b4191);
          this.m_realFeaturesSpinAck_refactor.push(_0x1ce182);
          var _0x33527a = this.m_model.SpinAckProcessing(_0x1ce182);
          this.m_realFeaturesSpinAck.push(_0x33527a);
          var _0x2a166b = this.ChangeWinInfo(_0x10852c.BGSpinAck, _0x2b4191);
          this.m_realFeaturesSpinAck_refactor.push(_0x2a166b);
          var _0x1bca26 = this.m_model.SpinAckProcessing(_0x2a166b);
          this.m_realFeaturesSpinAck.push(_0x1bca26);
        };
        _0x4511fc.ChangeWinInfo = function (_0x4db18c, _0x100afa) {
          var _0x2ea9b8 = JSON.parse(JSON.stringify(_0x4db18c));
          var _0x3a8755 = _0x311069.GetBetList()[0];
          var _0x40462c = _0x369abc.divide(_0x100afa, _0x3a8755);
          _0x2ea9b8.TotalWin = _0x369abc.times(_0x2ea9b8.TotalWin, _0x40462c);
          _0x2ea9b8.BonusTotalWin = _0x369abc.times(_0x2ea9b8.BonusTotalWin ? _0x2ea9b8.BonusTotalWin : 0, _0x40462c);
          _0x2ea9b8.RoundQueue.forEach(function (_0x13fa02) {
            return _0x13fa02.RoundWin = _0x369abc.times(_0x13fa02.RoundWin ? _0x13fa02.RoundWin : 0, _0x40462c);
          });
          return _0x2ea9b8;
        };
        _0x4511fc.InitView = function () {
          var _0x4893a5 = this;
          this.PaytableView.InitBet(_0x311069.GetNowBetValue());
          this.m_slotReels.SetNearWinCb(function () {
            _0x4893a5.NearWinStart();
          }, function () {
            _0x4893a5.NearWinEnd();
          });
        };
        _0x4511fc.RefreshView = function () {
          this.m_isLandscape ? (this.m_mainGameAnim.play("MainGame_L"), this.node.getComponent(_0x41f03c).play("GameView_L")) : (this.m_mainGameAnim.play("MainGame_S"), this.node.getComponent(_0x41f03c).play("GameView_S"));
        };
        _0x4511fc.ChangeState = function () {
          switch (_0x57d1f9.Current()) {
            case _0x4b430a.SPIN:
              this.m_isInBG ? _0x57d1f9.NextState(_0x883e10.GameState.BONUS_AWARD) : _0x57d1f9.NextState(_0x883e10.GameState.AWARD);
              break;
            case _0x883e10.GameState.AWARD:
              _0x57d1f9.NextState(_0x883e10.GameState.ROUND_SHOW_END);
              break;
            case _0x883e10.GameState.BONUS_ENTER:
            case _0x883e10.GameState.BONUS_LEAVE:
              _0x57d1f9.NextState(_0x883e10.GameState.ROUND_END);
          }
        };
        _0x4511fc.MGAward = function () {
          var _0x1fb835 = _0x12d1c6(_0x41e40d().mark(function _0x1acd0c(_0x3b113e) {
            var _0x2f0be8;
            var _0x1ecbcd = this;
            return _0x41e40d().wrap(function (_0x51cc10) {
              for (;;) {
                switch (_0x51cc10.prev = _0x51cc10.next) {
                  case 0:
                    _0x2f0be8 = _0x369abc.divide(_0x3b113e.RoundWin, _0x311069.GetNowBetValue());
                    _0x51cc10.next = 3;
                    return _0xc8ef61.Wait(this, 0.5);
                  case 3:
                    this.EffectPlate.GenAwardNode(_0x3b113e.AwardSymbols);
                    _0x51cc10.next = 6;
                    return this.EffectPlate.PlayWildAnim();
                  case 6:
                    this.PaytableView.PlayAwardHint(_0x3b113e.AwardSymbolType);
                    this.MachineView.PlayWin();
                    this.MachineView.PlayLineWin();
                    _0xc8ef61.Wait(this, 0.5).then(function () {
                      _0x1ecbcd.PlayMGAwardSound(_0x2f0be8);
                    });
                    _0x51cc10.next = 12;
                    return this.EffectPlate.ShowAward();
                  case 12:
                  case "end":
                    return _0x51cc10.stop();
                }
              }
            }, _0x1acd0c, this);
          }));
          return function (_0x3fbe32) {
            return _0x1fb835.apply(this, arguments);
          };
        }();
        _0x4511fc.BGAward = function () {
          var _0x1808f8 = _0x12d1c6(_0x41e40d().mark(function _0x120fb5(_0x3cd583) {
            var _0x10817d;
            var _0x1e1af9;
            var _0x4be2dc;
            var _0xda4668;
            var _0x4b1f87;
            var _0x588673;
            var _0x474da7;
            var _0x17b880;
            var _0x1a8494;
            var _0x1040f6;
            var _0x397f3e;
            return _0x41e40d().wrap(function (_0x2a10b9) {
              for (;;) {
                switch (_0x2a10b9.prev = _0x2a10b9.next) {
                  case 0:
                    _0x3cd583.TotalMul > 0 && this.MachineView.PlayWin();
                    _0x10817d = _0x32f29f(_0x3cd583.BonusSymbols);
                  case 2:
                    if ((_0x1e1af9 = _0x10817d()).done) {
                      _0x2a10b9.next = 12;
                      break;
                    }
                    (_0x4be2dc = _0x1e1af9.value).IsSuper ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_SBS) : _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_BS);
                    this.EffectPlate.GenAwardNode([_0x4be2dc]);
                    _0x2a10b9.next = 8;
                    return this.EffectPlate.PlayBGBonus(_0x4be2dc);
                  case 8:
                    _0x2a10b9.next = 10;
                    return this.MachineView.UpdateMultiples(_0x4be2dc);
                  case 10:
                    _0x2a10b9.next = 2;
                    break;
                  case 12:
                    this.EffectPlate.GenAwardNode(_0x3cd583.KeySymbols);
                    _0xda4668 = _0x32f29f(_0x3cd583.KeySymbols);
                  case 14:
                    if ((_0x4b1f87 = _0xda4668()).done) {
                      _0x2a10b9.next = 24;
                      break;
                    }
                    _0x588673 = _0x4b1f87.value;
                    _0x23cbbd.Play(_0x883e10.AudioClips.Unlock);
                    (_0x474da7 = []).push(this.EffectPlate.PlayKeyBonus(_0x588673));
                    _0x474da7.push(this.MachineView.Unlock(_0x588673.Col));
                    _0x2a10b9.next = 22;
                    return Promise.all(_0x474da7);
                  case 22:
                    _0x2a10b9.next = 14;
                    break;
                  case 24:
                    this.EffectPlate.GenAwardNode(_0x3cd583.LockSymbols);
                    _0x17b880 = _0x32f29f(_0x3cd583.LockSymbols);
                  case 26:
                    if ((_0x1a8494 = _0x17b880()).done) {
                      _0x2a10b9.next = 36;
                      break;
                    }
                    _0x1040f6 = _0x1a8494.value;
                    _0x23cbbd.Play(_0x883e10.AudioClips.Lock);
                    (_0x397f3e = []).push(this.EffectPlate.PlayLockBonus(_0x1040f6));
                    _0x397f3e.push(this.MachineView.Lock(_0x1040f6.Col));
                    _0x2a10b9.next = 34;
                    return Promise.all(_0x397f3e);
                  case 34:
                    _0x2a10b9.next = 26;
                    break;
                  case 36:
                  case "end":
                    return _0x2a10b9.stop();
                }
              }
            }, _0x120fb5, this);
          }));
          return function (_0x4d3ede) {
            return _0x1808f8.apply(this, arguments);
          };
        }();
        _0x4511fc.NearWinStart = function () {
          null === this.m_nearwinSoundId && (this.m_nearwinSoundId = _0x23cbbd.Play(_0x883e10.AudioClips.NearWin));
          this.m_effectPlate.SetNearWin(true, this.IsLandscape);
          this.m_machineView.PlayNearWin();
          this.BackgroundView.PlayDoorNearWin();
        };
        _0x4511fc.NearWinEnd = function () {
          this.m_effectPlate.SetNearWin(false, this.IsLandscape);
          this.m_machineView.PlayIdle();
          this.BackgroundView.StopDoorNearWin();
          _0x23cbbd.Stop(this.m_nearwinSoundId);
          this.m_nearwinSoundId = null;
        };
        _0x4511fc.ClickSpin = function () {
          if (!_0x2fd06d.IsNowInDemoMenu && (this.m_manual.CloseManul(), _0x57d1f9.Current() === _0x4b430a.IDLE)) {
            if ((_0x311069.GetChips() >= _0x369abc.strip(_0x311069.GetNowBetValue()) || this.IsInBG || _0x311069.IsFreeSpin) && _0x1a4040.IsBackpackPass() && !_0x3eb3e6.IsOpen()) {
              _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN);
              _0x250424.Dispatch("SpinReqNotify");
            } else {
              if (_0x1a4040.IsBackpackPass() && !_0x3eb3e6.IsOpen()) {
                var _0x5f4443 = _0x311069.GetBetList();
                _0x369abc.strip(_0x311069.GetNowBetValue()) === _0x369abc.strip(_0x5f4443[0]) || _0x311069.GetChips() < _0x369abc.strip(_0x5f4443[0]) ? _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.MSGBOX_MONEY_NOT_ENOUGH) : _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.MSGBOX_MONEY_NOT_ENOUGH_DOWN_BET);
              } else {
                _0x311069.SetSpinState(_0x33e9ab.IDLE);
                _0x57d1f9.NextState(_0x4b430a.IDLE);
              }
            }
          }
        };
        _0x4511fc.ClickStop = function () {
          _0x369abc.CheckSwitchOff(_0x43d062.NoQuickSpin) || (this.m_manual.CloseManul(), _0x57d1f9.Current() === _0x4b430a.SPIN ? _0x311069.IsHardStop || (this.m_canSpaceStop = false, this.m_canStopSpin = false, _0x311069.IsAutoSpin ? _0x311069.SetSpinState(_0x33e9ab.CLICK_STOP_IN_AUTOPLAY) : _0x311069.SetSpinState(_0x33e9ab.CLICK_STOP), this.m_slotReels.SetIsClickStopBtn()) : _0x57d1f9.Current() !== _0x883e10.GameState.AWARD && _0x57d1f9.Current() !== _0x883e10.GameState.BONUS_AWARD || (this.m_bigWin.Stop(), this.SetBarStateAfterBigWinEnd()));
        };
        _0x4511fc.SetBarStateAfterBigWinEnd = function () {
          _0x311069.IsAutoSpin ? _0x311069.SetSpinState(_0x33e9ab.CLICK_STOP_IN_AUTOPLAY) : _0x311069.SetSpinState(_0x33e9ab.CLICK_STOP);
        };
        _0x4511fc.ChangeBet = function (_0x320ce5) {
          if (null != this.m_oldBetIdx) {
            if (_0x320ce5 === this.m_oldBetIdx) {
              return;
            }
            this.m_oldBetIdx = _0x320ce5;
          } else {
            this.m_oldBetIdx = _0x320ce5;
          }
          var _0x570598 = _0x311069.GetNowBetValue();
          this.m_paytableView.UpdateBet(_0x570598);
        };
        _0x4511fc.SetPlateInfo = function () {
          var _0x2b66b9 = _0x12d1c6(_0x41e40d().mark(function _0x38b73f() {
            var _0x1f0f6f;
            return _0x41e40d().wrap(function (_0x352d37) {
              for (;;) {
                switch (_0x352d37.prev = _0x352d37.next) {
                  case 0:
                    this.m_plateIndex += 1;
                    _0x1f0f6f = this.RoundInfo.PlateData;
                    _0x352d37.next = 4;
                    return this.NearBigWin();
                  case 4:
                    this.m_slotReels.SetPlateInfo(_0x1f0f6f);
                    _0x311069.IsHardStop && !this.m_isInBG ? (this.m_slotReels.SetIsClickStopBtn(), _0x311069.SetSpinWithSpeed()) : this.m_isInBG || _0x311069.IsAutoSpin || _0x311069.SetSpinState(_0x33e9ab.START_SPIN);
                  case 6:
                  case "end":
                    return _0x352d37.stop();
                }
              }
            }, _0x38b73f, this);
          }));
          return function () {
            return _0x2b66b9.apply(this, arguments);
          };
        }();
        _0x4511fc.NearBigWin = function () {
          var _0x1fb7ea = _0x12d1c6(_0x41e40d().mark(function _0x16b866() {
            var _0x24cc68;
            var _0x5688fc;
            return _0x41e40d().wrap(function (_0x3c2865) {
              for (;;) {
                switch (_0x3c2865.prev = _0x3c2865.next) {
                  case 0:
                    if (_0x24cc68 = false, this.IsInBG || (_0x5688fc = _0x369abc.divide(this.RoundInfo.RoundWin, _0x311069.GetNowBetValue()), _0x24cc68 = _0x5688fc >= 20), !_0x24cc68) {
                      _0x3c2865.next = 7;
                      break;
                    }
                    this.LockRotation();
                    _0x3c2865.next = 6;
                    return this.MachineView.ShowNearBigWin();
                  case 6:
                    this.ResumeRotation();
                  case 7:
                  case "end":
                    return _0x3c2865.stop();
                }
              }
            }, _0x16b866, this);
          }));
          return function () {
            return _0x1fb7ea.apply(this, arguments);
          };
        }();
        _0x4511fc.GenRandomSymbol = function (_0x116d12, _0x1b0f77, _0x57c065) {
          return this.m_model.GenRandomSymbol(_0x116d12, _0x1b0f77, _0x57c065);
        };
        _0x4511fc.PlayBGM = function () {
          var _0x15c4ba = this.m_isInBG ? _0x883e10.AudioClips.BGM_BG : _0x883e10.AudioClips.BGM_MG;
          _0x15c4ba.name != this.m_bgmAudioName && (null != this.m_bgmId && (_0x23cbbd.Stop(this.m_bgmId), this.m_bgmId = null), this.m_bgmId = _0x23cbbd.PlayBackGround(_0x15c4ba, true), this.m_bgmAudioName = _0x15c4ba.name);
        };
        _0x4511fc.ResumeFocusBGM = function () {
          _0x23cbbd.GetAudioStateById(this.m_bgmId) || (_0x23cbbd.Stop(this.m_bgmId), this.m_bgmAudioName = null, this.m_bgmId = null, this.PlayBGM());
        };
        _0x4511fc.StopBGM = function () {
          null != this.m_bgmId && (_0x23cbbd.Stop(this.m_bgmId), this.m_bgmId = null, this.m_bgmAudioName = null);
        };
        _0x4511fc.PauseBGM = function () {
          null != this.m_bgmId && _0x23cbbd.Pause(this.m_bgmId);
        };
        _0x4511fc.ResumeBGM = function () {
          null != this.m_bgmId && _0x23cbbd.Resume(this.m_bgmId);
        };
        _0x4511fc.StopSpinFunc = function (_0x312fa8) {
          this.SpinAck && (_0x311069.IsHardStop || this.m_slotReels.IsClickStopBtn ? _0x312fa8 === _0x883e10.Column.Third && (!this.IsInBG && this.SpinAck.BonusTotalWin > 0 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_03) : _0x23cbbd.Play(_0x883e10.AudioClips.Reel_Stop)) : this.IsInBG ? this.PlaySpecialSoundInBG(_0x312fa8) : this.PlaySpecialSoundInMG(_0x312fa8));
        };
        _0x4511fc.PlaySpecialSoundInMG = function (_0x549081) {
          for (var _0x5db838 = this.RoundInfo.Plate, _0x12b489 = 0, _0x1f89aa = _0x5db838[_0x549081].some(function (_0x53160c) {
              return _0x53160c >= _0x883e10.Symbol.BONUS;
            }), _0x3dd889 = 0; _0x3dd889 <= _0x549081; _0x3dd889++) {
            _0x5db838[_0x3dd889].some(function (_0x3c0e7f) {
              return _0x3c0e7f >= _0x883e10.Symbol.BONUS;
            }) && _0x12b489++;
          }
          _0x1f89aa && _0x12b489 >= 3 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_03) : _0x1f89aa && _0x12b489 >= 2 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_02) : _0x1f89aa && _0x12b489 >= 1 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_01) : _0x23cbbd.Play(_0x883e10.AudioClips.Reel_Stop);
        };
        _0x4511fc.PlaySpecialSoundInBG = function (_0x2af6ec) {
          for (var _0xc2559 = 0, _0x47edfe = this.RoundInfo.PlateData[_0x2af6ec].some(function (_0x3f6c46) {
              return _0x3f6c46.IsBGBonus;
            }), _0x5361e6 = 0; _0x5361e6 <= _0x2af6ec; _0x5361e6++) {
            this.RoundInfo.PlateData[_0x5361e6].some(function (_0x1d7e51) {
              return _0x1d7e51.IsBGBonus;
            }) && _0xc2559++;
          }
          _0x47edfe && _0xc2559 >= 3 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_03) : _0x47edfe && _0xc2559 >= 2 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_02) : _0x47edfe && _0xc2559 >= 1 ? _0x23cbbd.Play(_0x883e10.AudioClips.Symbol_NBS_01) : _0x23cbbd.Play(_0x883e10.AudioClips.Reel_Stop);
        };
        _0x4511fc.PlayMGAwardSound = function (_0x581efa) {
          var _0x58c373 = _0x369abc.CheckSwitchOff(_0x43d062.NoSoundUnder1);
          (!_0x58c373 || _0x58c373 && _0x581efa > 1) && (_0x581efa < _0x883e10.SMALLPRIZE.LEVEL1 ? _0x23cbbd.Play(_0x883e10.AudioClips.Small_Win_01) : _0x581efa < _0x883e10.SMALLPRIZE.LEVEL2 ? _0x23cbbd.Play(_0x883e10.AudioClips.Small_Win_02) : _0x581efa < _0x883e10.SMALLPRIZE.LEVEL3 ? _0x23cbbd.Play(_0x883e10.AudioClips.Small_Win_03) : _0x23cbbd.Play(_0x883e10.AudioClips.Small_Win_04));
        };
        _0x54ea23(_0x2d53f0, [{
          key: "BackgroundView",
          get: function () {
            return this.m_backgroundView;
          }
        }, {
          key: "Manual",
          get: function () {
            return this.m_manual;
          }
        }, {
          key: "SlotReels",
          get: function () {
            return this.m_slotReels;
          }
        }, {
          key: "EffectPlate",
          get: function () {
            return this.m_effectPlate;
          }
        }, {
          key: "BigWin",
          get: function () {
            return this.m_bigWin;
          }
        }, {
          key: "MachineView",
          get: function () {
            return this.m_machineView;
          }
        }, {
          key: "PaytableView",
          get: function () {
            return this.m_paytableView;
          }
        }, {
          key: "AutoplayInfos",
          get: function () {
            return this.m_autoplayInfos;
          }
        }, {
          key: "IsLandscape",
          get: function () {
            return this.m_isLandscape;
          }
        }, {
          key: "IsLockRotation",
          get: function () {
            return this.m_isLockRotation;
          },
          set: function (_0x2d13a0) {
            this.m_isLockRotation = _0x2d13a0;
          }
        }, {
          key: "IsChange",
          get: function () {
            return this.m_isChange;
          }
        }, {
          key: "IsBottombarFinished",
          get: function () {
            return this.m_isBottombarFinished;
          }
        }, {
          key: "Bet",
          get: function () {
            return _0x311069.GetNowBetValue();
          }
        }, {
          key: "IsShowFeatures",
          get: function () {
            return this.m_isShowFeatures;
          }
        }, {
          key: "IsAutoShowFeatures",
          get: function () {
            return this.m_isAutoShowFeatures;
          },
          set: function (_0x133639) {
            this.m_isAutoShowFeatures = _0x133639;
          }
        }, {
          key: "IsFeatureShow",
          get: function () {
            return this.m_isFeatureShow;
          }
        }, {
          key: "BgmId",
          get: function () {
            return this.m_bgmId;
          },
          set: function (_0x23e3fe) {
            this.m_bgmId = _0x23e3fe;
          }
        }, {
          key: "SpinAck",
          get: function () {
            return this.m_spinAck;
          }
        }, {
          key: "SpinAck_refactor",
          get: function () {
            return this.m_spinAck_refactor;
          }
        }, {
          key: "UnshowSpinAck",
          get: function () {
            return this.m_unshowSpinAck;
          }
        }, {
          key: "UnshowSpinAck_refactor",
          get: function () {
            return this.m_unshowSpinAck_refactor;
          }
        }, {
          key: "RoundInfo",
          get: function () {
            return this.m_spinAck.RoundInfo[this.PlateIndex];
          }
        }, {
          key: "PlateIndex",
          get: function () {
            return this.m_plateIndex;
          }
        }, {
          key: "IsLastPlate",
          get: function () {
            return this.PlateIndex == this.m_spinAck.Length - 1;
          }
        }, {
          key: "CanSpaceStop",
          set: function (_0x2412ed) {
            this.m_canSpaceStop = _0x2412ed;
          }
        }, {
          key: "HasBG",
          get: function () {
            return this.SpinAck.Length > 1;
          }
        }, {
          key: "IsInBG",
          get: function () {
            return this.m_isInBG;
          },
          set: function (_0x49e2ac) {
            this.m_isInBG = _0x49e2ac;
          }
        }, {
          key: "CanStopSpin",
          get: function () {
            return this.m_canStopSpin;
          }
        }]);
        return _0x2d53f0;
      }(_0x5aac4b), _0x569f28 = _0x5a72b5(_0x1b12a8.prototype, "m_mainGameAnim", [_0x4df695], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x114bd3 = _0x5a72b5(_0x1b12a8.prototype, "m_titleSpriteL", [_0x3b0af7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5b3876 = _0x5a72b5(_0x1b12a8.prototype, "m_titleSpriteAtlas", [_0x2a2afd], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1224f0 = _0x5a72b5(_0x1b12a8.prototype, "m_backgroundView", [_0x418b51], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x23a399 = _0x5a72b5(_0x1b12a8.prototype, "m_manual", [_0x31ce72], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5aa17b = _0x5a72b5(_0x1b12a8.prototype, "m_slotReels", [_0x4586ae], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x15e861 = _0x5a72b5(_0x1b12a8.prototype, "m_effectPlate", [_0x2610f6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xa26911 = _0x5a72b5(_0x1b12a8.prototype, "m_plateSpineBtn", [_0x261942], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xd9af84 = _0x5a72b5(_0x1b12a8.prototype, "m_bigWin", [_0x1f09c1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3a44b2 = _0x5a72b5(_0x1b12a8.prototype, "m_machineView", [_0x24adbf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xe15088 = _0x5a72b5(_0x1b12a8.prototype, "m_paytableView", [_0x5723d0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x23bff7 = _0x1b12a8)) || _0x23bff7;
      var _0x4731de;
      var _0xf82da9;
      var _0x26c58f;
      var _0x3e3bd2;
      var _0xdc9a8a;
      var _0x5eb832;
      var _0x727eb6;
      var _0x56f91a;
      var _0x451b6e;
      var _0x4a7c90;
      var _0x247093;
      var _0x2309d6;
      var _0x2dd413;
      var _0x67e43f;
      var _0x2401a4;
      var _0x46cfd3;
      var _0x1546af;
      var _0x28dc74;
      var _0x5d4934;
      var _0x35fbbe;
      var _0x107a91;
      var _0x379e7e;
      var _0x383627;
      var _0x548d52;
      var _0x1a11a9;
      var _0x1da16c;
      var _0x4b2f47;
      var _0x1ec28f;
      var _0x5894db;
      var _0x2be74a;
      var _0x3027a2;
      var _0x57bfd7;
      var _0x413d94;
      var _0x22d7d3;
      var _0x6d4493;
      var _0x3475d6;
      var _0x53c518;
      var _0x2f87a3;
      var _0x1a263e;
      var _0x2016cb;
      var _0x2dabab;
      var _0x4d7687;
      var _0x491839;
      var _0x33f7e6;
      var _0x112dee;
      var _0x38a0da;
      var _0x375441;
      var _0x16dd9b;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "84c5byXmKBEJIwVBTwOs7ly", "ButtonPro", undefined);
      var _0x3c06fe = _0x42d118.ccclass;
      var _0x261b94 = _0x42d118.executionOrder;
      var _0x5557d8 = _0x42d118.requireComponent;
      var _0x339c32 = _0x42d118.type;
      var _0x40326e = _0x42d118.executeInEditMode;
      var _0x28459e = _0x42d118.property;
      var _0xd3a552 = new _0x3d339d();
      var _0x275478;
      var _0x3155d1;
      var _0x5301df;
      !function (_0x5a5896) {
        _0x5a5896[_0x5a5896.NONE = 0] = "NONE";
        _0x5a5896[_0x5a5896.COLOR = 1] = "COLOR";
        _0x5a5896[_0x5a5896.SPRITE = 2] = "SPRITE";
        _0x5a5896[_0x5a5896.SCALE = 4] = "SCALE";
        _0x5a5896[_0x5a5896.COLOR_SPRITE = 3] = "COLOR_SPRITE";
        _0x5a5896[_0x5a5896.COLOR_SCALE = 5] = "COLOR_SCALE";
        _0x5a5896[_0x5a5896.SPRITE_SCALE = 6] = "SPRITE_SCALE";
        _0x5a5896[_0x5a5896.ALL = 7] = "ALL";
      }(_0x275478 || (_0x275478 = {}));
      _0x1e8b43(_0x275478);
      (function (_0x372743) {
        _0x372743.NORMAL = "normal";
        _0x372743.HOVER = "hover";
        _0x372743.PRESSED = "pressed";
        _0x372743.DISABLED = "disabled";
      })(_0x3155d1 || (_0x3155d1 = {}));
      (function (_0x1b78c6) {
        _0x1b78c6.CLICK = "click";
      })(_0x5301df || (_0x5301df = {}));
      _0x4731de = _0x3c06fe("ButtonPro");
      _0xf82da9 = _0x261b94(110);
      _0x26c58f = _0x5557d8(_0x45bc58);
      _0x3e3bd2 = _0x28459e({
        type: _0x5cf7a3,
        displayOrder: 0,
        tooltip: "i18n:button.target"
      });
      _0xdc9a8a = _0x28459e({
        displayOrder: 1,
        tooltip: "i18n:button.interactable"
      });
      _0x5eb832 = _0x28459e({
        type: _0x275478,
        displayOrder: 2,
        tooltip: "i18n:button.transition"
      });
      _0x727eb6 = _0x28459e({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.normal_color"
      });
      _0x56f91a = _0x28459e({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.pressed_color"
      });
      _0x451b6e = _0x28459e({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.hover_color"
      });
      _0x4a7c90 = _0x28459e({
        group: {
          name: "COLOR"
        },
        displayOrder: 3,
        tooltip: "i18n:button.disabled_color"
      });
      _0x247093 = _0x28459e({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.duration",
        min: 0,
        max: 10
      });
      _0x2309d6 = _0x28459e({
        group: {
          name: "SCALE"
        },
        displayOrder: 4,
        tooltip: "i18n:button.zoom_scale"
      });
      _0x2dd413 = _0x28459e({
        group: {
          name: "SPRITE"
        },
        type: _0x3d6b8d,
        displayOrder: 3,
        tooltip: "i18n:button.normal_sprite"
      });
      _0x67e43f = _0x28459e({
        group: {
          name: "SPRITE"
        },
        type: _0x3d6b8d,
        displayOrder: 3,
        tooltip: "i18n:button.pressed_sprite"
      });
      _0x2401a4 = _0x28459e({
        group: {
          name: "SPRITE"
        },
        type: _0x3d6b8d,
        displayOrder: 3,
        tooltip: "i18n:button.hover_sprite"
      });
      _0x46cfd3 = _0x28459e({
        group: {
          name: "SPRITE"
        },
        type: _0x3d6b8d,
        displayOrder: 3,
        tooltip: "i18n:button.disabled_sprite"
      });
      _0x1546af = _0x339c32([_0x518eac]);
      _0x28dc74 = _0x28459e({
        serializable: true,
        displayOrder: 20,
        tooltip: "i18n:button.click_events"
      });
      _0x5d4934 = _0x28459e({
        serializable: true
      });
      _0x35fbbe = _0x28459e({
        serializable: true
      });
      _0x107a91 = _0x28459e({
        serializable: true
      });
      _0x379e7e = _0x28459e({
        serializable: true
      });
      _0x383627 = _0x28459e({
        serializable: true
      });
      _0x548d52 = _0x28459e({
        serializable: true
      });
      _0x1a11a9 = _0x28459e({
        serializable: true
      });
      _0x1da16c = _0x28459e({
        serializable: true
      });
      _0x4b2f47 = _0x28459e({
        serializable: true
      });
      _0x1ec28f = _0x28459e({
        serializable: true
      });
      _0x5894db = _0x28459e({
        serializable: true
      });
      _0x2be74a = _0x28459e({
        serializable: true
      });
      _0x3027a2 = _0x28459e({
        serializable: true
      });
      var _0x1098d6 = _0x4731de(_0x57bfd7 = _0xf82da9(_0x57bfd7 = _0x26c58f(_0x57bfd7 = _0x40326e((_0x16dd9b = function (_0x19dc57) {
        function _0x326880() {
          for (var _0x206630, _0x267f99 = arguments.length, _0x1cb06c = new Array(_0x267f99), _0x2e5a01 = 0; _0x2e5a01 < _0x267f99; _0x2e5a01++) {
            _0x1cb06c[_0x2e5a01] = arguments[_0x2e5a01];
          }
          _0x4f841b(_0x206630 = _0x19dc57.call.apply(_0x19dc57, [this].concat(_0x1cb06c)) || this, "clickEvents", _0x22d7d3, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_interactable", _0x6d4493, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_transition", _0x3475d6, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_normalColor", _0x53c518, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_hoverColor", _0x2f87a3, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_pressedColor", _0x1a263e, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_disabledColor", _0x2016cb, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_normalSprite", _0x2dabab, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_hoverSprite", _0x4d7687, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_pressedSprite", _0x491839, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_disabledSprite", _0x33f7e6, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_duration", _0x112dee, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_zoomScale", _0x38a0da, _0x2fdb02(_0x206630));
          _0x4f841b(_0x206630, "_target", _0x375441, _0x2fdb02(_0x206630));
          _0x206630._pressed = false;
          _0x206630._hovered = false;
          _0x206630._fromColor = new _0x3d339d();
          _0x206630._toColor = new _0x3d339d();
          _0x206630._time = 0;
          _0x206630._transitionFinished = true;
          _0x206630._fromScale = new _0x507581();
          _0x206630._toScale = new _0x507581();
          _0x206630._originalScale = null;
          _0x206630._sprite = null;
          _0x206630._targetScale = new _0x507581();
          return _0x206630;
        }
        _0x567cf6(_0x326880, _0x19dc57);
        var _0x4d8984 = _0x326880.prototype;
        _0x4d8984.onLoad = function () {
          if (!this.getComponent(_0x2f2b2d)) {
            var _0x13f4c8 = this.addComponent(_0x2f2b2d);
            if (_0x13f4c8) {
              _0x13f4c8.sizeMode = _0x2f2b2d.SizeMode.CUSTOM;
              _0x13f4c8.type = _0x2f2b2d.Type.SLICED;
              var _0x2f9f40 = this.node.getComponent(_0x45bc58);
              _0x2f9f40 && (_0x2f9f40.contentSize = _0x1210d7.size(120, 40));
            }
            var _0x136c27 = _0x5dab17.assets.get("20835ba4-6145-4fbc-a58a-051ce700aa3e@f9941");
            _0x136c27 && (_0x13f4c8 && !_0x13f4c8.spriteFrame && (_0x13f4c8.spriteFrame = _0x136c27), this._normalSprite || (this._normalSprite = _0x136c27), this._hoverSprite || (this._hoverSprite = _0x136c27));
            var _0x27c992 = _0x5dab17.assets.get("544e49d6-3f05-4fa8-9a9e-091f98fc2ce8@f9941");
            _0x27c992 && (this._pressedSprite || (this._pressedSprite = _0x27c992));
            var _0x16fb52 = _0x5dab17.assets.get("951249e0-9f16-456d-8b85-a6ca954da16b@f9941");
            _0x16fb52 && (this._disabledSprite || (this._disabledSprite = _0x16fb52));
          }
          if (!this.node.getChildByName("Label")) {
            var _0x58de59 = new _0x5cf7a3("Label");
            var _0x5c0d6e = _0x58de59.addComponent(_0x42ff5a);
            _0x5c0d6e.node.layer = this.node.layer;
            _0x5c0d6e.string = "ButtonPro";
            _0x58de59.parent = this.node;
            _0x5c0d6e.color = _0x3d339d.BLACK;
            _0x5c0d6e.fontSize = 20;
          }
        };
        _0x4d8984.__preload = function () {
          this.target || (this.target = this.node);
          var _0x146ecf = this.node.getComponent(_0x2f2b2d);
          _0x146ecf && (this._normalSprite = _0x146ecf.spriteFrame);
          this._applyTarget();
          this._resetState();
        };
        _0x4d8984.onEnable = function () {
          this._registerNodeEvent();
        };
        _0x4d8984.onDisable = function () {
          this._resetState();
          this._unregisterNodeEvent();
        };
        _0x4d8984.onDestroy = function () {
          this.target.isValid && this._unregisterTargetEvent(this.target);
        };
        _0x4d8984.update = function (_0x1bfc75) {
          var _0x54ffea = this.target;
          if (!this._transitionFinished && _0x54ffea && (this._transition & _0x275478.COLOR || this._transition & _0x275478.SCALE)) {
            this._time += _0x1bfc75;
            var _0x2456d9 = 1;
            if (this._duration > 0 && (_0x2456d9 = this._time / this._duration), _0x2456d9 >= 1 && (_0x2456d9 = 1), this._transition & _0x275478.COLOR) {
              var _0x1509c9 = _0x54ffea._uiProps.uiComp;
              _0x3d339d.lerp(_0xd3a552, this._fromColor, this._toColor, _0x2456d9);
              _0x1509c9 && (_0x1509c9.color = _0xd3a552);
            }
            this.transition & _0x275478.SCALE && (_0x54ffea.getScale(this._targetScale), this._targetScale.x = _0x1083c6(this._fromScale.x, this._toScale.x, _0x2456d9), this._targetScale.y = _0x1083c6(this._fromScale.y, this._toScale.y, _0x2456d9), _0x54ffea.setScale(this._targetScale));
            1 === _0x2456d9 && (this._transitionFinished = true);
          }
        };
        _0x4d8984._resizeNodeToTargetNode = function () {
          if (this.target) {
            this.target._uiProps.uiTransformComp;
          }
        };
        _0x4d8984._resetState = function () {
          this._pressed = false;
          this._hovered = false;
          var _0x5d079d = this.target;
          if (_0x5d079d) {
            var _0x4f37f0 = this._transition;
            if (_0x4f37f0 & _0x275478.COLOR && this._interactable) {
              var _0x41ebd1 = _0x5d079d.getComponent(_0x556148);
              _0x41ebd1 && (_0x41ebd1.color = this._normalColor);
            }
            _0x4f37f0 & _0x275478.SCALE && this._originalScale && _0x5d079d.setScale(this._originalScale);
            this._transitionFinished = true;
          }
        };
        _0x4d8984._registerNodeEvent = function () {
          this.node.on(_0x5e8512.TOUCH_START, this._onTouchBegan, this);
          this.node.on(_0x5e8512.TOUCH_MOVE, this._onTouchMove, this);
          this.node.on(_0x5e8512.TOUCH_END, this._onTouchEnded, this);
          this.node.on(_0x5e8512.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.on(_0x5e8512.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.on(_0x5e8512.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x4d8984._registerTargetEvent = function (_0x175bcf) {
          _0x175bcf.on(_0x5e8512.TRANSFORM_CHANGED, this._onTargetTransformChanged, this);
        };
        _0x4d8984._unregisterNodeEvent = function () {
          this.node.off(_0x5e8512.TOUCH_START, this._onTouchBegan, this);
          this.node.off(_0x5e8512.TOUCH_MOVE, this._onTouchMove, this);
          this.node.off(_0x5e8512.TOUCH_END, this._onTouchEnded, this);
          this.node.off(_0x5e8512.TOUCH_CANCEL, this._onTouchCancel, this);
          this.node.off(_0x5e8512.MOUSE_ENTER, this._onMouseMoveIn, this);
          this.node.off(_0x5e8512.MOUSE_LEAVE, this._onMouseMoveOut, this);
        };
        _0x4d8984._unregisterTargetEvent = function (_0x6542be) {
          _0x6542be.off(_0x5e8512.TRANSFORM_CHANGED);
        };
        _0x4d8984._getTargetSprite = function (_0x38e2dd) {
          var _0x3efdcb = null;
          _0x38e2dd && (_0x3efdcb = _0x38e2dd.getComponent(_0x2f2b2d));
          return _0x3efdcb;
        };
        _0x4d8984._applyTarget = function () {
          this.target && (this._sprite = this._getTargetSprite(this.target), this._originalScale || (this._originalScale = new _0x507581()), _0x507581.copy(this._originalScale, this.target.getScale()), this._registerTargetEvent(this.target));
        };
        _0x4d8984._onTargetSpriteFrameChanged = function (_0x35c385) {
          this._transition & _0x275478.SPRITE && this._setCurrentStateSpriteFrame(_0x35c385.spriteFrame);
        };
        _0x4d8984._setCurrentStateSpriteFrame = function (_0x26b474) {
          if (_0x26b474) {
            switch (this._getButtonState()) {
              case _0x3155d1.NORMAL:
                this._normalSprite = _0x26b474;
                break;
              case _0x3155d1.HOVER:
                this._hoverSprite = _0x26b474;
                break;
              case _0x3155d1.PRESSED:
                this._pressedSprite = _0x26b474;
                break;
              case _0x3155d1.DISABLED:
                this._disabledSprite = _0x26b474;
            }
          }
        };
        _0x4d8984._onTargetColorChanged = function (_0x2504da) {
          this._transition & _0x275478.COLOR && this._setCurrentStateColor(_0x2504da);
        };
        _0x4d8984._setCurrentStateColor = function (_0x1c5a66) {
          switch (this._getButtonState()) {
            case _0x3155d1.NORMAL:
              this._normalColor = _0x1c5a66;
              break;
            case _0x3155d1.HOVER:
              this._hoverColor = _0x1c5a66;
              break;
            case _0x3155d1.PRESSED:
              this._pressedColor = _0x1c5a66;
              break;
            case _0x3155d1.DISABLED:
              this._disabledColor = _0x1c5a66;
          }
        };
        _0x4d8984._onTargetTransformChanged = function (_0x24aaa2) {
          _0x24aaa2 & _0x2eb9f3.SCALE && this._originalScale && this._transition & _0x275478.SCALE && this._transitionFinished && _0x507581.copy(this._originalScale, this.target.getScale());
        };
        _0x4d8984._onTouchBegan = function (_0x2c7e84) {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState(), _0x2c7e84 && (_0x2c7e84.propagationStopped = true));
        };
        _0x4d8984._onTouchMove = function (_0x20f0f8) {
          if (this._interactable && this.enabledInHierarchy && this._pressed && _0x20f0f8) {
            var _0x287bce = _0x20f0f8.touch;
            if (_0x287bce) {
              var _0xb38f1c;
              var _0x31f65c = this.node._uiProps.uiTransformComp.hitTest(_0x287bce.getLocation());
              if (this._transition & _0x275478.SCALE && this.target && this._originalScale) {
                _0x31f65c ? (_0x507581.copy(this._fromScale, this._originalScale), _0x507581.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._transitionFinished = false) : (this._time = 0, this._transitionFinished = true, this.target.setScale(this._originalScale));
              } else {
                _0xb38f1c = _0x31f65c ? _0x3155d1.PRESSED : _0x3155d1.NORMAL;
                this._applyTransition(_0xb38f1c);
              }
              _0x20f0f8 && (_0x20f0f8.propagationStopped = true);
            }
          }
        };
        _0x4d8984._onTouchEnded = function (_0x15ca72) {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x518eac.emitEvents(this.clickEvents, _0x15ca72), this.node.emit(_0x5301df.CLICK, this)), this._pressed = false, this._updateState(), _0x15ca72 && (_0x15ca72.propagationStopped = true));
        };
        _0x4d8984._onTouchCancel = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = false, this._updateState());
        };
        _0x4d8984._onMouseMoveIn = function () {
          !this._pressed && this.interactable && this.enabledInHierarchy && (this._transition & _0x275478.SPRITE && !this._hoverSprite || this._hovered || (this._hovered = true, this._updateState()));
        };
        _0x4d8984._onMouseMoveOut = function () {
          this._hovered && (this._hovered = false, this._updateState());
        };
        _0x4d8984._updateState = function () {
          var _0x3d7007 = this._getButtonState();
          this._applyTransition(_0x3d7007);
        };
        _0x4d8984._getButtonState = function () {
          var _0x594000 = _0x3155d1.NORMAL;
          this._interactable ? this._pressed ? _0x594000 = _0x3155d1.PRESSED : this._hovered && (_0x594000 = _0x3155d1.HOVER) : _0x594000 = _0x3155d1.DISABLED;
          return _0x594000.toString();
        };
        _0x4d8984._updateColorTransition = function (_0x20ba26) {
          var _0x2dea4f;
          var _0x3d9c88 = this[_0x20ba26 + "Color"];
          var _0x2b3a7a = null == (_0x2dea4f = this.target) ? undefined : _0x2dea4f.getComponent(_0x556148);
          _0x2b3a7a && (_0x20ba26 === _0x3155d1.DISABLED ? (_0x2b3a7a.color = _0x3d9c88, this._transitionFinished = true) : (this._fromColor = _0x2b3a7a.color.clone(), this._toColor = _0x3d9c88, this._time = 0, this._transitionFinished = false));
        };
        _0x4d8984._updateSpriteTransition = function (_0x56469e) {
          var _0x24e255 = this[_0x56469e + "Sprite"];
          this._sprite && _0x24e255 && (this._sprite.spriteFrame = _0x24e255);
        };
        _0x4d8984._updateScaleTransition = function (_0x310d6a) {
          this._interactable && (_0x310d6a === _0x3155d1.PRESSED ? this._zoomUp() : this._zoomBack());
        };
        _0x4d8984._zoomUp = function () {
          this._originalScale && (_0x507581.copy(this._fromScale, this._originalScale), _0x507581.multiplyScalar(this._toScale, this._originalScale, this._zoomScale), this._time = 0, this._transitionFinished = false);
        };
        _0x4d8984._zoomBack = function () {
          this.target && this._originalScale && (_0x507581.copy(this._fromScale, this.target.getScale()), _0x507581.copy(this._toScale, this._originalScale), this._time = 0, this._transitionFinished = false);
        };
        _0x4d8984._applyTransition = function (_0x407b55) {
          var _0x5112bd = this._transition;
          _0x5112bd & _0x275478.COLOR && this._updateColorTransition(_0x407b55);
          _0x5112bd & _0x275478.SPRITE && this._updateSpriteTransition(_0x407b55);
          _0x5112bd & _0x275478.SCALE && this._updateScaleTransition(_0x407b55);
        };
        _0x4d8984._xrHoverEnter = function () {
          this._onMouseMoveIn();
          this._updateState();
        };
        _0x4d8984._xrHoverExit = function () {
          this._onMouseMoveOut();
          this._pressed && (this._pressed = false, this._updateState());
        };
        _0x4d8984._xrClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed = true, this._updateState());
        };
        _0x4d8984._xrUnClick = function () {
          this._interactable && this.enabledInHierarchy && (this._pressed && (_0x518eac.emitEvents(this.clickEvents, this), this.node.emit(_0x5301df.CLICK, this)), this._pressed = false, this._updateState());
        };
        _0x54ea23(_0x326880, [{
          key: "target",
          get: function () {
            return this._target || this.node;
          },
          set: function (_0x3fb8ba) {
            this._target !== _0x3fb8ba && (this._target && this._unregisterTargetEvent(this._target), this._target = _0x3fb8ba, this._applyTarget());
          }
        }, {
          key: "interactable",
          get: function () {
            return this._interactable;
          },
          set: function (_0x373f15) {
            this._interactable !== _0x373f15 && (this._interactable = _0x373f15, this._updateState(), this._interactable || this._resetState());
          }
        }, {
          key: "_resizeToTarget",
          set: function (_0x4f48a4) {
            _0x4f48a4 && this._resizeNodeToTargetNode();
          }
        }, {
          key: "transition",
          get: function () {
            return this._transition;
          },
          set: function (_0x5927d2) {
            this._transition !== _0x5927d2 && (this._transition & _0x275478.COLOR && this._updateColorTransition(_0x3155d1.NORMAL), this._transition & _0x275478.SPRITE && this._updateSpriteTransition(_0x3155d1.NORMAL), this._transition = _0x5927d2, this._updateState());
          }
        }, {
          key: "normalColor",
          get: function () {
            return this._normalColor;
          },
          set: function (_0x3a7fe4) {
            this._normalColor !== _0x3a7fe4 && (this._normalColor.set(_0x3a7fe4), this._updateState());
          }
        }, {
          key: "pressedColor",
          get: function () {
            return this._pressedColor;
          },
          set: function (_0x48f38b) {
            this._pressedColor !== _0x48f38b && this._pressedColor.set(_0x48f38b);
          }
        }, {
          key: "hoverColor",
          get: function () {
            return this._hoverColor;
          },
          set: function (_0x2ec575) {
            this._hoverColor !== _0x2ec575 && this._hoverColor.set(_0x2ec575);
          }
        }, {
          key: "disabledColor",
          get: function () {
            return this._disabledColor;
          },
          set: function (_0x13b099) {
            this._disabledColor !== _0x13b099 && (this._disabledColor.set(_0x13b099), this._updateState());
          }
        }, {
          key: "duration",
          get: function () {
            return this._duration;
          },
          set: function (_0x5de4a9) {
            this._duration !== _0x5de4a9 && (this._duration = _0x5de4a9);
          }
        }, {
          key: "zoomScale",
          get: function () {
            return this._zoomScale;
          },
          set: function (_0x67d2e6) {
            this._zoomScale !== _0x67d2e6 && (this._zoomScale = _0x67d2e6);
          }
        }, {
          key: "normalSprite",
          get: function () {
            return this._normalSprite;
          },
          set: function (_0x4dff38) {
            if (this._normalSprite !== _0x4dff38) {
              this._normalSprite = _0x4dff38;
              var _0x1ff0cb = this.node.getComponent(_0x2f2b2d);
              _0x1ff0cb && (_0x1ff0cb.spriteFrame = _0x4dff38);
              this._updateState();
            }
          }
        }, {
          key: "pressedSprite",
          get: function () {
            return this._pressedSprite;
          },
          set: function (_0x10d2bb) {
            this._pressedSprite !== _0x10d2bb && (this._pressedSprite = _0x10d2bb, this._updateState());
          }
        }, {
          key: "hoverSprite",
          get: function () {
            return this._hoverSprite;
          },
          set: function (_0xec5703) {
            this._hoverSprite !== _0xec5703 && (this._hoverSprite = _0xec5703, this._updateState());
          }
        }, {
          key: "disabledSprite",
          get: function () {
            return this._disabledSprite;
          },
          set: function (_0x2eef06) {
            this._disabledSprite !== _0x2eef06 && (this._disabledSprite = _0x2eef06, this._updateState());
          }
        }]);
        return _0x326880;
      }(_0x5aac4b), _0x16dd9b.Transition = _0x275478, _0x16dd9b.EventType = _0x5301df, _0x413d94 = _0x16dd9b, _0x5a72b5(_0x413d94.prototype, "target", [_0x3e3bd2], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "target"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "interactable", [_0xdc9a8a], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "interactable"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "transition", [_0x5eb832], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "transition"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "normalColor", [_0x727eb6], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "normalColor"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "pressedColor", [_0x56f91a], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "pressedColor"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "hoverColor", [_0x451b6e], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "hoverColor"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "disabledColor", [_0x4a7c90], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "disabledColor"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "duration", [_0x247093], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "duration"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "zoomScale", [_0x2309d6], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "zoomScale"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "normalSprite", [_0x2dd413], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "normalSprite"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "pressedSprite", [_0x67e43f], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "pressedSprite"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "hoverSprite", [_0x2401a4], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "hoverSprite"), _0x413d94.prototype), _0x5a72b5(_0x413d94.prototype, "disabledSprite", [_0x46cfd3], Object.getOwnPropertyDescriptor(_0x413d94.prototype, "disabledSprite"), _0x413d94.prototype), _0x22d7d3 = _0x5a72b5(_0x413d94.prototype, "clickEvents", [_0x1546af, _0x28dc74], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x6d4493 = _0x5a72b5(_0x413d94.prototype, "_interactable", [_0x5d4934], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x3475d6 = _0x5a72b5(_0x413d94.prototype, "_transition", [_0x35fbbe], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x275478.NONE;
        }
      }), _0x53c518 = _0x5a72b5(_0x413d94.prototype, "_normalColor", [_0x107a91], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3d339d.WHITE.clone();
        }
      }), _0x2f87a3 = _0x5a72b5(_0x413d94.prototype, "_hoverColor", [_0x379e7e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3d339d(211, 211, 211, 255);
        }
      }), _0x1a263e = _0x5a72b5(_0x413d94.prototype, "_pressedColor", [_0x383627], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x3d339d.WHITE.clone();
        }
      }), _0x2016cb = _0x5a72b5(_0x413d94.prototype, "_disabledColor", [_0x548d52], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x3d339d(124, 124, 124, 255);
        }
      }), _0x2dabab = _0x5a72b5(_0x413d94.prototype, "_normalSprite", [_0x1a11a9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4d7687 = _0x5a72b5(_0x413d94.prototype, "_hoverSprite", [_0x1da16c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x491839 = _0x5a72b5(_0x413d94.prototype, "_pressedSprite", [_0x4b2f47], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x33f7e6 = _0x5a72b5(_0x413d94.prototype, "_disabledSprite", [_0x1ec28f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x112dee = _0x5a72b5(_0x413d94.prototype, "_duration", [_0x5894db], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.1;
        }
      }), _0x38a0da = _0x5a72b5(_0x413d94.prototype, "_zoomScale", [_0x2be74a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1.2;
        }
      }), _0x375441 = _0x5a72b5(_0x413d94.prototype, "_target", [_0x3027a2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x57bfd7 = _0x413d94)) || _0x57bfd7) || _0x57bfd7) || _0x57bfd7) || _0x57bfd7;
      var _0x45dfa1;
      var _0x4ac2ab;
      var _0x560347;
      var _0x4b2591;
      var _0x1d0561;
      var _0x545deb;
      var _0x208f6a;
      var _0x1b93f1;
      var _0x674f2;
      var _0x3951a7;
      var _0xd6e053;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "58afbgi72RCYrg3eW8ahovc", "CommonBuyBonusCell", undefined);
      var _0x451be0 = _0x42d118.ccclass;
      var _0x13176b = _0x42d118.property;
      _0x45dfa1 = _0x451be0("CommonBuyBonusCell");
      _0x4ac2ab = _0x13176b({
        type: _0x2f2b2d,
        tooltip: "購買文字"
      });
      _0x560347 = _0x13176b({
        type: _0x2f2b2d,
        tooltip: "項目標題"
      });
      _0x4b2591 = _0x13176b({
        type: _0x374045,
        tooltip: "標題圖片名稱"
      });
      _0x1d0561 = _0x13176b({
        type: _0x42ff5a,
        tooltip: "金額"
      });
      var _0x265975 = _0x45dfa1((_0x208f6a = function (_0x423db4) {
        function _0x403473() {
          for (var _0x4b6b58, _0x37e5b5 = arguments.length, _0x3c7371 = new Array(_0x37e5b5), _0xcb9da = 0; _0xcb9da < _0x37e5b5; _0xcb9da++) {
            _0x3c7371[_0xcb9da] = arguments[_0xcb9da];
          }
          _0x4f841b(_0x4b6b58 = _0x423db4.call.apply(_0x423db4, [this].concat(_0x3c7371)) || this, "m_buyHintSprite", _0x1b93f1, _0x2fdb02(_0x4b6b58));
          _0x4f841b(_0x4b6b58, "m_titleSprite", _0x674f2, _0x2fdb02(_0x4b6b58));
          _0x4f841b(_0x4b6b58, "m_titlePicName", _0x3951a7, _0x2fdb02(_0x4b6b58));
          _0x4f841b(_0x4b6b58, "m_priceLabel", _0xd6e053, _0x2fdb02(_0x4b6b58));
          return _0x4b6b58;
        }
        _0x567cf6(_0x403473, _0x423db4);
        var _0x4cb1b5 = _0x403473.prototype;
        _0x4cb1b5.start = function () {
          var _0x215da3 = _0x19b0e0.GetGameAtlas();
          _0x19b0e0.CurrLang !== _0xc8ef61.Lang.EN && (this.m_buyHintSprite.spriteFrame = _0x215da3.getSpriteFrame("Txt_Buy_Feature_Buy"), this.m_titleSprite.spriteFrame = _0x215da3.getSpriteFrame(this.m_titlePicName));
        };
        _0x4cb1b5.SetPrice = function (_0x59a8de) {
          this.m_priceLabel.string = _0x59a8de;
        };
        return _0x403473;
      }(_0x5aac4b), _0x1b93f1 = _0x5a72b5(_0x208f6a.prototype, "m_buyHintSprite", [_0x4ac2ab], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x674f2 = _0x5a72b5(_0x208f6a.prototype, "m_titleSprite", [_0x560347], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3951a7 = _0x5a72b5(_0x208f6a.prototype, "m_titlePicName", [_0x4b2591], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0xd6e053 = _0x5a72b5(_0x208f6a.prototype, "m_priceLabel", [_0x1d0561], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x545deb = _0x208f6a)) || _0x545deb;
      var _0x3a35e6;
      var _0x257978;
      var _0xe8c5b6;
      var _0x4861db;
      var _0x3a28e3;
      var _0x48315e;
      var _0x52f560;
      var _0x35854c;
      var _0x58946c;
      var _0x5ec1e7;
      var _0x293df9;
      var _0xcea277;
      var _0x82f077;
      var _0x4cd4ec;
      var _0x849e;
      var _0x442f04;
      var _0xb42e14;
      var _0x325e67;
      var _0x166fee;
      var _0x2e6660;
      var _0x3664ff;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "deede8s0zBMX57ZpiWkWMfR", "CommonBuyBonus", undefined);
      var _0x3f3fb4 = _0x42d118.ccclass;
      var _0x1d54b7 = _0x42d118.property;
      _0x3a35e6 = _0x3f3fb4("CommonBuyBonus");
      _0x257978 = _0x1d54b7({
        type: _0x5cf7a3,
        tooltip: "介面"
      });
      _0xe8c5b6 = _0x1d54b7({
        type: _0x41f03c,
        tooltip: "介面開關動畫"
      });
      _0x4861db = _0x1d54b7({
        type: _0x5cf7a3,
        tooltip: "開啟按鈕節點"
      });
      _0x3a28e3 = _0x1d54b7({
        type: _0x2f2b2d,
        tooltip: "開啟按鈕標題"
      });
      _0x48315e = _0x1d54b7({
        type: _0x42ff5a,
        tooltip: "押注金額"
      });
      _0x52f560 = _0x1d54b7({
        type: _0x265975,
        tooltip: "購買項目"
      });
      _0x35854c = _0x1d54b7({
        type: _0x2f2b2d,
        tooltip: "標題"
      });
      _0x58946c = _0x1d54b7({
        type: _0x2f2b2d,
        tooltip: "押注"
      });
      _0x5ec1e7 = _0x1d54b7({
        type: _0x42ff5a,
        tooltip: "幣別符號"
      });
      var _0x227d50 = _0x3a35e6((_0xcea277 = function (_0x1810d2) {
        function _0x2224bb() {
          for (var _0x58710e, _0x33dceb = arguments.length, _0x549a15 = new Array(_0x33dceb), _0x28090e = 0; _0x28090e < _0x33dceb; _0x28090e++) {
            _0x549a15[_0x28090e] = arguments[_0x28090e];
          }
          _0x4f841b(_0x58710e = _0x1810d2.call.apply(_0x1810d2, [this].concat(_0x549a15)) || this, "m_viewNode", _0x82f077, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_anim", _0x4cd4ec, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_openBtnNode", _0x849e, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_openBtnTitle", _0x442f04, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_betLabel", _0xb42e14, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_buyBonusCells", _0x325e67, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_titleSprite", _0x166fee, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_betSprite", _0x2e6660, _0x2fdb02(_0x58710e));
          _0x4f841b(_0x58710e, "m_currencyLabel", _0x3664ff, _0x2fdb02(_0x58710e));
          _0x58710e.m_iGameView = null;
          _0x58710e.m_setting = null;
          _0x58710e.m_betList = null;
          _0x58710e.m_betIdx = 0;
          _0x58710e.m_bonusType = null;
          _0x58710e.m_isPlayingAnim = false;
          return _0x58710e;
        }
        _0x567cf6(_0x2224bb, _0x1810d2);
        var _0x300d83 = _0x2224bb.prototype;
        _0x300d83.start = function () {
          this.m_viewNode.active = true;
          var _0x2ff387 = _0x19b0e0.GetGameAtlas();
          _0x19b0e0.CurrLang !== _0xc8ef61.Lang.EN && (this.m_betSprite.spriteFrame = _0x2ff387.getSpriteFrame("Txt_Buy_Feature_Bet"), this.m_titleSprite.spriteFrame = _0x2ff387.getSpriteFrame("Txt_Buy_Feature_Title"), this.m_openBtnTitle && (this.m_openBtnTitle.spriteFrame = _0x2ff387.getSpriteFrame("BuyBonus_IconName")));
          _0x250424.Register("TriggerFreeSpin", this);
          _0x250424.Register("FreeSpinTotalWinEnd", this);
          _0x250424.Register("PauseFreeSpin", this);
        };
        _0x300d83.Init = function (_0x259847, _0x1e0973, _0xd96f6d, _0x44768e) {
          var _0xac43f7 = this;
          if (undefined === _0xd96f6d && (_0xd96f6d = false), undefined === _0x44768e && (_0x44768e = null), this.m_viewNode.active = false, _0x259847 && !_0x369abc.CheckSwitchOff(_0x43d062.ShopingMall)) {
            this.m_setting = _0x259847;
            this.m_iGameView = _0x1e0973;
            this.m_betList = JSON.parse(JSON.stringify(_0x311069.GetBetList()));
            for (var _0x17d873 = this.m_betList.length - 1; _0x17d873 >= 0 && this.m_betList[_0x17d873] > this.m_setting.MaxBet; _0x17d873--) {
              this.m_betList.splice(_0x17d873);
            }
            this.m_betIdx = _0x311069.GetNowBetIndex();
            (!this.m_betList[this.m_betIdx] || this.m_betList[this.m_betIdx] > this.m_betList[this.m_betList.length - 1]) && (this.m_betIdx = this.m_betList.length - 1);
            this.SetPrice();
            for (var _0x3e0041 = function (_0x5c5062) {
                _0xac43f7.m_buyBonusCells[_0x5c5062].getComponent(_0x2b432b).node.on(_0x5cf7a3.EventType.TOUCH_END, function () {
                  _0x2fd06d.IsFeaturesDemoMode ? _0xac43f7.Hide() : (null == _0x44768e || _0x44768e(), _0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), _0xac43f7.m_isPlayingAnim || (_0x3044e8.ForceChangeExtraBetMode(false), _0xac43f7.m_bonusType = _0x5c5062, _0xac43f7.Hide(), _0x311069.SetNowBet(_0xac43f7.m_betList[_0xac43f7.m_betIdx]), _0xac43f7.m_iGameView.ClickSpin()));
                });
              }, _0x48a451 = 0; _0x48a451 < this.m_buyBonusCells.length; _0x48a451++) {
              _0x3e0041(_0x48a451);
            }
            this.m_viewNode.active = false;
            _0xd96f6d && this.m_openBtnNode && (this.m_openBtnNode.removeFromParent(), _0x2fd06d.SetGameBuyBonus(this.m_openBtnNode));
          } else {
            this.SetBuyBtnVisible(false);
          }
        };
        _0x300d83.OnEvent = function (_0x3d87df) {
          _0x3d87df === "TriggerFreeSpin" ? (this.Hide(), this.SetBuyBtnVisible(false)) : _0x3d87df !== "FreeSpinTotalWinEnd" && _0x3d87df !== "PauseFreeSpin" || this.SetBuyBtnVisible(true);
        };
        _0x300d83.SetPrice = function () {
          var _0x501a83 = this.m_betList[this.m_betIdx];
          this.m_currencyLabel && (_0xc8ef61.DollarSymbol ? this.m_currencyLabel.string = "(" + _0xc8ef61.DollarSymbol + ")" : this.m_currencyLabel.node.active = false);
          this.m_betLabel.string = "" + _0xc8ef61.DollarSymbol + _0x369abc.FormatNumberThousands(_0x501a83, _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT);
          for (var _0xd0616b = 0; _0xd0616b < this.m_buyBonusCells.length; _0xd0616b++) {
            var _0x325ea1 = _0x369abc.times(_0x501a83, this.m_setting.PriceOdd[_0xd0616b]);
            this.m_buyBonusCells[_0xd0616b].SetPrice("" + _0xc8ef61.DollarSymbol + _0x369abc.FormatNumberThousands(_0x325ea1, _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT));
          }
        };
        _0x300d83.SetBuyBtnVisible = function (_0xf89614) {
          this.m_openBtnNode.active = !!this.m_setting && _0xf89614;
        };
        _0x300d83.GetBuyBtnVisible = function () {
          return this.m_openBtnNode.active;
        };
        _0x300d83.GetBuyBonusBet = function () {
          return this.m_setting && null !== this.m_bonusType ? _0x369abc.times(this.m_setting.PriceOdd[this.m_bonusType], _0x311069.GetNowBetValue()) : _0x369abc.strip(_0x311069.GetNowBetValue());
        };
        _0x300d83.CleanInfo = function () {
          this.m_bonusType = null;
        };
        _0x300d83.IsOpen = function () {
          return this.m_viewNode.active;
        };
        _0x300d83.Show = function () {
          var _0x29e4d1 = this;
          if (!(_0x57d1f9.Current() !== _0x4b430a.IDLE || _0xc8ef61.FreeSpinRemain > 0) && !this.m_anim.getState("Buy_Feature_Close").isPlaying && !this.m_viewNode.active) {
            _0x37b4ff.stopAllByTarget(this.node);
            this.m_isPlayingAnim = true;
            _0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN);
            this.m_viewNode.active = true;
            this.m_anim.play("Buy_Feature_Open");
            var _0x33392f = this.m_anim.getState("Buy_Feature_Open");
            _0x51e4e3(this.node).delay(_0x33392f.duration).call(function () {
              _0x29e4d1.m_isPlayingAnim = false;
            }).start();
            var _0x18ca81 = "-1";
            var _0x4879df = 0;
            _0xc8ef61.APP && (_0x18ca81 = _0xc8ef61.APP.GetAID(), _0x4879df = Number(_0xc8ef61.APP.GetApiID()));
            _0xc8ef61.SendBtnClickEvent(Number(_0x18ca81), _0x4879df, Number(_0xc8ef61.NOW_GAME_ID), this.m_iGameView.Version, _0xc8ef61.BTN_CLICK_EVENT.INGAME_BUY_BONUS, 0, false);
          }
        };
        _0x300d83.Hide = function () {
          var _0x3a8d32 = _0x12d1c6(_0x41e40d().mark(function _0x55351f() {
            var _0x1e5199;
            var _0x3d7313;
            var _0x41d363;
            var _0x4e47c5 = this;
            return _0x41e40d().wrap(function (_0x374605) {
              for (;;) {
                switch (_0x374605.prev = _0x374605.next) {
                  case 0:
                    if (_0x1e5199 = this.m_anim.getState("Buy_Feature_Close"), this.m_viewNode.active && !_0x1e5199.isPlaying) {
                      _0x374605.next = 3;
                      break;
                    }
                    return _0x374605.abrupt("return");
                  case 3:
                    (_0x3d7313 = this.m_anim.getState("Buy_Feature_Open")).isPlaying && _0x3d7313.stop();
                    _0x37b4ff.stopAllByTarget(this.node);
                    this.m_isPlayingAnim = true;
                    _0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN);
                    this.m_anim.play("Buy_Feature_Close");
                    _0x1e5199 = this.m_anim.getState("Buy_Feature_Close");
                    _0x51e4e3(this.node).delay(_0x3d7313.duration).call(function () {
                      _0x4e47c5.m_isPlayingAnim = false;
                    }).start();
                    _0x41d363 = this.m_anim.getState("Buy_Feature_Close");
                    _0x374605.next = 14;
                    return _0xc8ef61.Wait(this, _0x41d363.duration);
                  case 14:
                    this.m_viewNode.active = false;
                  case 15:
                  case "end":
                    return _0x374605.stop();
                }
              }
            }, _0x55351f, this);
          }));
          return function () {
            return _0x3a8d32.apply(this, arguments);
          };
        }();
        _0x300d83.AddBet = function () {
          this.m_betIdx + 1 > this.m_betList.length - 1 || (_0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), this.m_betIdx++, this.SetPrice());
        };
        _0x300d83.SubBet = function () {
          this.m_betIdx - 1 < 0 || (_0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), this.m_betIdx--, this.SetPrice());
        };
        _0x54ea23(_0x2224bb, [{
          key: "BonusType",
          get: function () {
            return this.m_bonusType;
          }
        }]);
        return _0x2224bb;
      }(_0x5aac4b), _0x82f077 = _0x5a72b5(_0xcea277.prototype, "m_viewNode", [_0x257978], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4cd4ec = _0x5a72b5(_0xcea277.prototype, "m_anim", [_0xe8c5b6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x849e = _0x5a72b5(_0xcea277.prototype, "m_openBtnNode", [_0x4861db], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x442f04 = _0x5a72b5(_0xcea277.prototype, "m_openBtnTitle", [_0x3a28e3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0xb42e14 = _0x5a72b5(_0xcea277.prototype, "m_betLabel", [_0x48315e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x325e67 = _0x5a72b5(_0xcea277.prototype, "m_buyBonusCells", [_0x52f560], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x166fee = _0x5a72b5(_0xcea277.prototype, "m_titleSprite", [_0x35854c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2e6660 = _0x5a72b5(_0xcea277.prototype, "m_betSprite", [_0x58946c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3664ff = _0x5a72b5(_0xcea277.prototype, "m_currencyLabel", [_0x5ec1e7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x293df9 = _0xcea277)) || _0x293df9;
      var _0x2595b5;
      var _0x1e2779;
      var _0x28aa55;
      var _0xe09d4c;
      var _0xfd091b;
      var _0x493d97;
      var _0x2cd796;
      var _0x22b4ab;
      var _0x34269e;
      var _0x506a31;
      var _0x2a93fd;
      var _0x21647a;
      var _0xdc480f;
      var _0x47da80;
      var _0x4a0951;
      var _0x1f55d6;
      var _0x3a865b;
      var _0x38a88c;
      var _0x1c9d17;
      var _0x3ca819;
      var _0x5d3d61;
      var _0xeeaa47;
      var _0x227ca9;
      var _0xaeffac;
      var _0xcd235a;
      var _0x18e1bf;
      var _0x5e48b0;
      var _0x272753;
      var _0x100341;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "da7972YP9VAta/rfkmC0gmE", "ColorText", undefined);
      var _0x48c9e2 = _0x42d118.ccclass;
      var _0x5c3b95 = _0x42d118.property;
      var _0x435184 = _0x42d118.requireComponent;
      var _0x15b359 = _0x42d118.executeInEditMode;
      _0x2595b5 = _0x48c9e2("ColorText");
      _0x1e2779 = _0x435184(_0x42ff5a);
      _0x28aa55 = _0x5c3b95(_0x4332c3);
      _0xe09d4c = _0x5c3b95(_0x413bc0);
      _0xfd091b = _0x5c3b95(_0x3d339d);
      _0x493d97 = _0x5c3b95({
        tooltip: "使用該元件的自定義材質",
        type: _0x4332c3
      });
      _0x2cd796 = _0x5c3b95({
        tooltip: "顏色漸變元件",
        type: _0x413bc0
      });
      _0x22b4ab = _0x5c3b95({
        tooltip: "正片疊底顏色",
        type: _0x3d339d
      });
      _0x34269e = _0x5c3b95({
        tooltip: "顏色漸變貼圖的範圍",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x506a31 = _0x5c3b95({
        tooltip: "是否垂直漸變顏色"
      });
      _0x2a93fd = _0x5c3b95({
        tooltip: "上內陰影顏色",
        type: _0x3d339d
      });
      _0x21647a = _0x5c3b95({
        tooltip: "下內陰影顏色",
        type: _0x3d339d
      });
      _0xdc480f = _0x5c3b95({
        tooltip: "上內陰影顏色高度 (Pixel)"
      });
      _0x47da80 = _0x5c3b95({
        tooltip: "下內陰影顏色高度 (Pixel)"
      });
      _0x4a0951 = _0x5c3b95({
        tooltip: "上內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      _0x1f55d6 = _0x5c3b95({
        tooltip: "下內陰影插值比例 (0 ~ 1)",
        range: [0, 1, 0.01],
        slide: true
      });
      var _0xe4f826 = _0x2595b5(_0x3a865b = _0x1e2779(_0x3a865b = _0x15b359((_0x38a88c = function (_0x1f0543) {
        function _0x4629f0() {
          for (var _0x46b253, _0x50a810 = arguments.length, _0x16df25 = new Array(_0x50a810), _0xf89c1e = 0; _0xf89c1e < _0x50a810; _0xf89c1e++) {
            _0x16df25[_0xf89c1e] = arguments[_0xf89c1e];
          }
          _0x4f841b(_0x46b253 = _0x1f0543.call.apply(_0x1f0543, [this].concat(_0x16df25)) || this, "_textMaterial", _0x1c9d17, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_gradient", _0x3ca819, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_gradientMultiply", _0x5d3d61, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_gradientShrink", _0xeeaa47, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_isVertical", _0x227ca9, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowColor1", _0xaeffac, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowColor2", _0xcd235a, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowHeight1", _0x18e1bf, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowHeight2", _0x5e48b0, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowRate1", _0x272753, _0x2fdb02(_0x46b253));
          _0x4f841b(_0x46b253, "_innerShadowRate2", _0x100341, _0x2fdb02(_0x46b253));
          _0x46b253.pixelNum = 128;
          _0x46b253.colorTexture = null;
          _0x46b253.isGradientChanged = true;
          return _0x46b253;
        }
        _0x567cf6(_0x4629f0, _0x1f0543);
        var _0x452da0 = _0x4629f0.prototype;
        _0x452da0.onLoad = function () {
          var _0x37b5fb = this.node.getComponent(_0x42ff5a);
          null !== _0x37b5fb.customMaterial && (_0x37b5fb.customMaterial !== _0x37b5fb.sharedMaterial && _0x37b5fb.customMaterial.destroy(), _0x37b5fb.customMaterial = null);
          _0x37b5fb.color = _0x3d339d.WHITE;
          null === this._textMaterial && console.warn("ColorText.textMaterial should be not null.");
        };
        _0x452da0.onEnable = function () {
          this.reset();
        };
        _0x452da0.onDestroy = function () {
          var _0x33cde6;
          null == (_0x33cde6 = this.colorTexture) || _0x33cde6.destroy();
          this.colorTexture = null;
        };
        _0x452da0.reset = function () {
          null === this.colorTexture && (this.colorTexture = this.createColorTexture());
          true === this.isGradientChanged && (this.isGradientChanged = false, this.updateColorTexture());
          var _0xabc0e7 = this.node.getComponent(_0x42ff5a);
          var _0x15b003 = _0xabc0e7.customMaterial;
          if (!_0x15b003 && this._textMaterial && ((_0x15b003 = new _0x4332c3()).copy(this._textMaterial), _0xabc0e7.customMaterial = _0x15b003), _0x15b003) {
            _0x15b003.setProperty("gradientMap", this.colorTexture);
            _0x15b003.setProperty("gradientMultiply", this._gradientMultiply);
            _0x15b003.setProperty("gradientShrink", this._gradientShrink);
            _0x15b003.setProperty("innerShadow1", this._innerShadowColor1);
            _0x15b003.setProperty("innerShadow2", this._innerShadowColor2);
            var _0x3ba077 = 0;
            var _0x40436d = 0;
            var _0x448de1 = this.node.getComponent(_0x45bc58).contentSize;
            _0x448de1.height > 0 && (_0x3ba077 = this._innerShadowHeight1 / _0x448de1.height, _0x40436d = this._innerShadowHeight2 / _0x448de1.height);
            var _0x459e3a = _0x4e0e61(_0x3ba077, _0x40436d, this._innerShadowRate1, this._innerShadowRate2);
            _0x15b003.setProperty("innerShadowParam", _0x459e3a);
          }
        };
        _0x452da0.createColorTexture = function () {
          var _0x574955 = new _0x33ef43();
          var _0x3e1239 = this.pixelNum;
          var _0x3ff61b = 1;
          true === this._isVertical && (_0x3ff61b = _0x3e1239, _0x3e1239 = 1);
          _0x574955.reset({
            width: _0x3e1239,
            height: _0x3ff61b,
            format: _0x33ef43.PixelFormat.RGBA8888,
            mipmapLevel: 0
          });
          _0x574955.setWrapMode(_0x33ef43.WrapMode.CLAMP_TO_EDGE, _0x33ef43.WrapMode.CLAMP_TO_EDGE);
          _0x574955.setFilters(_0x33ef43.Filter.LINEAR, _0x33ef43.Filter.LINEAR);
          return _0x574955;
        };
        _0x452da0.updateColorTexture = function () {
          for (var _0x1ed44e = this.pixelNum, _0x573d59 = new Uint8ClampedArray(4 * _0x1ed44e), _0xd3531a = 0, _0x29fc9f = this._gradient, _0x2334e9 = 0; _0x2334e9 < _0x1ed44e; ++_0x2334e9) {
            var _0x487e37 = _0x29fc9f.evaluate(_0x2334e9 / _0x1ed44e);
            _0x573d59[_0xd3531a++] = _0x487e37.r;
            _0x573d59[_0xd3531a++] = _0x487e37.g;
            _0x573d59[_0xd3531a++] = _0x487e37.b;
            _0x573d59[_0xd3531a++] = _0x487e37.a;
          }
          var _0x4ef9ca = this.colorTexture;
          _0x4ef9ca.uploadData(_0x573d59, 0, 0);
          _0x4ef9ca.updateImage();
        };
        _0x54ea23(_0x4629f0, [{
          key: "textMaterial",
          get: function () {
            return this._textMaterial;
          },
          set: function (_0x138608) {
            this._textMaterial = _0x138608;
            this.reset();
          }
        }, {
          key: "gradient",
          get: function () {
            return this._gradient;
          },
          set: function (_0x412c4a) {
            this.isGradientChanged = true;
            this._gradient = _0x412c4a;
            this.reset();
          }
        }, {
          key: "gradientMultiply",
          get: function () {
            return this._gradientMultiply;
          },
          set: function (_0x4999fc) {
            this._gradientMultiply = _0x4999fc;
            this.reset();
          }
        }, {
          key: "gradientShrink",
          get: function () {
            return this._gradientShrink;
          },
          set: function (_0xac276e) {
            this._gradientShrink = _0xac276e;
            this.reset();
          }
        }, {
          key: "isVertical",
          get: function () {
            return this._isVertical;
          },
          set: function (_0xa2a34f) {
            var _0x1400ab;
            this._isVertical !== _0xa2a34f && (null == (_0x1400ab = this.colorTexture) || _0x1400ab.destroy(), this.colorTexture = null);
            this._isVertical = _0xa2a34f;
            this.reset();
          }
        }, {
          key: "innerShadowColor1",
          get: function () {
            return this._innerShadowColor1;
          },
          set: function (_0x1c9a15) {
            this._innerShadowColor1.set(_0x1c9a15);
            this.reset();
          }
        }, {
          key: "innerShadowColor2",
          get: function () {
            return this._innerShadowColor2;
          },
          set: function (_0x5344a8) {
            this._innerShadowColor2.set(_0x5344a8);
            this.reset();
          }
        }, {
          key: "innerShadowHeight1",
          get: function () {
            return this._innerShadowHeight1;
          },
          set: function (_0x126482) {
            this._innerShadowHeight1 = _0x126482;
            this.reset();
          }
        }, {
          key: "innerShadowHeight2",
          get: function () {
            return this._innerShadowHeight2;
          },
          set: function (_0x55e78d) {
            this._innerShadowHeight2 = _0x55e78d;
            this.reset();
          }
        }, {
          key: "innerShadowRate1",
          get: function () {
            return this._innerShadowRate1;
          },
          set: function (_0x693d4d) {
            this._innerShadowRate1 = _0xa95894(_0x693d4d);
            this.reset();
          }
        }, {
          key: "innerShadowRate2",
          get: function () {
            return this._innerShadowRate2;
          },
          set: function (_0x38edc6) {
            this._innerShadowRate2 = _0x38edc6;
            this.reset();
          }
        }]);
        return _0x4629f0;
      }(_0x5aac4b), _0x1c9d17 = _0x5a72b5(_0x38a88c.prototype, "_textMaterial", [_0x28aa55], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x3ca819 = _0x5a72b5(_0x38a88c.prototype, "_gradient", [_0xe09d4c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x413bc0();
        }
      }), _0x5d3d61 = _0x5a72b5(_0x38a88c.prototype, "_gradientMultiply", [_0xfd091b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x4333e8(255, 255, 255, 255);
        }
      }), _0xeeaa47 = _0x5a72b5(_0x38a88c.prototype, "_gradientShrink", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0.15;
        }
      }), _0x227ca9 = _0x5a72b5(_0x38a88c.prototype, "_isVertical", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x5a72b5(_0x38a88c.prototype, "textMaterial", [_0x493d97], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "textMaterial"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "gradient", [_0x2cd796], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "gradient"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "gradientMultiply", [_0x22b4ab], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "gradientMultiply"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "gradientShrink", [_0x34269e], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "gradientShrink"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "isVertical", [_0x506a31], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "isVertical"), _0x38a88c.prototype), _0xaeffac = _0x5a72b5(_0x38a88c.prototype, "_innerShadowColor1", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x4333e8(255, 255, 255, 255);
        }
      }), _0xcd235a = _0x5a72b5(_0x38a88c.prototype, "_innerShadowColor2", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x4333e8(255, 255, 255, 255);
        }
      }), _0x18e1bf = _0x5a72b5(_0x38a88c.prototype, "_innerShadowHeight1", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _0x5e48b0 = _0x5a72b5(_0x38a88c.prototype, "_innerShadowHeight2", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _0x272753 = _0x5a72b5(_0x38a88c.prototype, "_innerShadowRate1", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x100341 = _0x5a72b5(_0x38a88c.prototype, "_innerShadowRate2", [_0x5c3b95], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x5a72b5(_0x38a88c.prototype, "innerShadowColor1", [_0x2a93fd], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowColor1"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "innerShadowColor2", [_0x21647a], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowColor2"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "innerShadowHeight1", [_0xdc480f], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowHeight1"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "innerShadowHeight2", [_0x47da80], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowHeight2"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "innerShadowRate1", [_0x4a0951], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowRate1"), _0x38a88c.prototype), _0x5a72b5(_0x38a88c.prototype, "innerShadowRate2", [_0x1f55d6], Object.getOwnPropertyDescriptor(_0x38a88c.prototype, "innerShadowRate2"), _0x38a88c.prototype), _0x3a865b = _0x38a88c)) || _0x3a865b) || _0x3a865b) || _0x3a865b;
      var _0x4b37aa;
      var _0x54f981;
      var _0x3cfd09;
      var _0x5f0026;
      var _0x1db323;
      var _0x381ca2;
      var _0x1e2f49;
      var _0x3b3bcf;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "ccb69RBfI5KBKNPuwywfE10", "ColorFadingUI", undefined);
      var _0x1c38de = _0x42d118.ccclass;
      var _0x4ba257 = _0x42d118.property;
      var _0x509795 = _0x42d118.executeInEditMode;
      _0x4b37aa = _0x1c38de("ColorFadingUI");
      _0x54f981 = _0x4ba257({
        type: _0x3f684b,
        tooltip: "Color Fading 預設 shader"
      });
      _0x3cfd09 = _0x4ba257({
        type: _0x380901,
        tooltip: "Gradient Texture Size"
      });
      _0x5f0026 = _0x4ba257({
        type: _0x57c330,
        tooltip: "是否使用alpha test, Spine建議開啟"
      });
      _0x1db323 = _0x4ba257({
        type: _0x598810,
        tooltip: "混合比例，0~1之間"
      });
      _0x381ca2 = _0x4ba257({
        type: _0x413bc0,
        tooltip: "當前Gradient"
      });
      var _0x1f0191 = _0x4b37aa(_0x1e2f49 = _0x509795((_0x3b3bcf = function (_0x19489b) {
        function _0x2bddf9() {
          for (var _0x5a1ce0, _0xef2349 = arguments.length, _0x28725a = new Array(_0xef2349), _0x469c96 = 0; _0x469c96 < _0xef2349; _0x469c96++) {
            _0x28725a[_0x469c96] = arguments[_0x469c96];
          }
          (_0x5a1ce0 = _0x19489b.call.apply(_0x19489b, [this].concat(_0x28725a)) || this).m_colorFadingEffect = null;
          _0x5a1ce0.m_gradientTextureSize = 64;
          _0x5a1ce0.m_currGradient = new _0x413bc0();
          _0x5a1ce0.m_mixRate = 0;
          _0x5a1ce0.m_useAlphaTest = false;
          _0x5a1ce0.m_tex = new _0x33ef43();
          _0x5a1ce0.m_use_colorfading = true;
          _0x5a1ce0.m_renderComponent = null;
          _0x5a1ce0.m_copyEffect = null;
          return _0x5a1ce0;
        }
        _0x567cf6(_0x2bddf9, _0x19489b);
        var _0x5018fd = _0x2bddf9.prototype;
        _0x5018fd.start = function () {
          this.GenerateMat();
        };
        _0x5018fd.onDestroy = function () {
          this.m_use_colorfading = false;
        };
        _0x5018fd.Init = function (_0x499b9c, _0x16b8dc, _0x24b900, _0x48e66e, _0x1eb129, _0x12b3f5) {
          undefined === _0x24b900 && (_0x24b900 = 0);
          undefined === _0x48e66e && (_0x48e66e = 64);
          undefined === _0x1eb129 && (_0x1eb129 = true);
          undefined === _0x12b3f5 && (_0x12b3f5 = false);
          this.ColorFadingEffect = _0x499b9c;
          this.CurrentGradient = _0x16b8dc;
          this.UseAlphaTest = _0x12b3f5;
          this.MixRate = _0x24b900;
          this.GradientTextureSize = _0x48e66e;
          this.UseColorFadingAPI(_0x1eb129);
          this.GenerateMat();
        };
        _0x5018fd.UseColorFadingAPI = function (_0xc2741a) {
          this.m_use_colorfading = _0xc2741a;
          this.GenerateMat();
        };
        _0x5018fd.ResetGradient = function () {
          this.m_mixRate = 1;
          this.m_currGradient = new _0x413bc0();
          this.LoadTexture();
        };
        _0x5018fd.GenerateMat = function () {
          var _0x345edb = this.GetRenderComponent();
          if (null != _0x345edb && null != this.m_colorFadingEffect) {
            var _0x54d044 = new _0x4332c3();
            _0x54d044.initialize({
              effectAsset: this.m_colorFadingEffect,
              technique: 0,
              defines: {
                USE_COLOR_FADING: this.m_use_colorfading,
                USE_ALPHA_TEST: this.m_useAlphaTest
              }
            });
            _0x345edb.customMaterial = _0x54d044;
            this.LoadTexture();
          }
        };
        _0x5018fd.LoadTexture = function () {
          if (null == this.m_colorFadingEffect) {
            _0xb9245("Warning! No effect asset loaded!");
          } else {
            _0xb9245("loadTexture", this.m_currGradient);
            this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
            for (var _0x344363 = [], _0x5ba191 = 1 / this.m_gradientTextureSize, _0x1b7cb9 = 0; _0x1b7cb9 <= 1; _0x1b7cb9++) {
              for (var _0x13c73a = 0; _0x13c73a <= this.m_gradientTextureSize; _0x13c73a += _0x5ba191) {
                var _0x2344b2 = new _0x3d339d();
                _0x2344b2 = this.m_currGradient.evaluate(_0x13c73a);
                _0x344363.push(_0x2344b2.r);
                _0x344363.push(_0x2344b2.g);
                _0x344363.push(_0x2344b2.b);
                _0x344363.push(_0x2344b2.a);
              }
            }
            this.CreateTexture(_0x344363);
          }
        };
        _0x5018fd.CreateTexture = function (_0x3c1b86) {
          var _0x2df19d = new Uint8Array(_0x3c1b86);
          var _0x11fad4 = new _0x3e39a6();
          this.m_gradientTextureSize <= 0 && (this.m_gradientTextureSize = 1);
          _0x11fad4.reset({
            _data: _0x2df19d,
            width: this.m_gradientTextureSize,
            height: 1,
            format: _0x33ef43.PixelFormat.RGBA8888,
            _compressed: false
          });
          this.m_tex.image = _0x11fad4;
          this.m_tex.setWrapMode(_0x33ef43.WrapMode.CLAMP_TO_EDGE, _0x33ef43.WrapMode.CLAMP_TO_EDGE);
          this.UpdateMaterial();
        };
        _0x5018fd.UpdateMaterial = function () {
          var _0x732e0b = this.GetRenderComponent();
          if (null != _0x732e0b) {
            var _0x40e75c = _0x732e0b.customMaterial;
            _0x40e75c && (_0x40e75c.setProperty("gradient", this.m_tex), _0x40e75c.setProperty("mixRate", this.m_mixRate));
          }
        };
        _0x5018fd.GetRenderComponent = function () {
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x2f2b2d));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x1a25c9.Skeleton));
          null == this.m_renderComponent && (this.m_renderComponent = this.node.getComponent(_0x42ff5a));
          return this.m_renderComponent;
        };
        _0x54ea23(_0x2bddf9, [{
          key: "ColorFadingEffect",
          get: function () {
            return this.m_copyEffect;
          },
          set: function (_0x2caef7) {
            null != _0x2caef7 && (this.m_colorFadingEffect = _0x2caef7);
            this.m_copyEffect = _0x2caef7;
          }
        }, {
          key: "GradientTextureSize",
          get: function () {
            return this.m_gradientTextureSize;
          },
          set: function (_0x4ae6b6) {
            this.m_gradientTextureSize = _0x4ae6b6;
            null != this.m_tex && this.LoadTexture();
          }
        }, {
          key: "UseAlphaTest",
          get: function () {
            return this.m_useAlphaTest;
          },
          set: function (_0x3f9c9b) {
            this.m_useAlphaTest = _0x3f9c9b;
          }
        }, {
          key: "MixRate",
          get: function () {
            return this.m_mixRate;
          },
          set: function (_0x1c5b38) {
            if (_0x1c5b38 > 1) {
              this.m_mixRate = 1;
            } else {
              if (_0x1c5b38 < 0) {
                this.m_mixRate = 0;
              } else {
                this.m_mixRate = _0x1c5b38;
                var _0x493d59 = this.GetRenderComponent();
                if (null != _0x493d59) {
                  var _0x134a5b = _0x493d59.customMaterial;
                  _0x134a5b ? _0x134a5b.setProperty("mixRate", this.m_mixRate) : this.GenerateMat();
                }
              }
            }
          }
        }, {
          key: "CurrentGradient",
          get: function () {
            return this.m_currGradient;
          },
          set: function (_0x38cbd5) {
            this.m_currGradient = _0x38cbd5;
            this.LoadTexture();
          }
        }]);
        return _0x2bddf9;
      }(_0x5aac4b), _0x5a72b5(_0x3b3bcf.prototype, "ColorFadingEffect", [_0x54f981], Object.getOwnPropertyDescriptor(_0x3b3bcf.prototype, "ColorFadingEffect"), _0x3b3bcf.prototype), _0x5a72b5(_0x3b3bcf.prototype, "GradientTextureSize", [_0x3cfd09], Object.getOwnPropertyDescriptor(_0x3b3bcf.prototype, "GradientTextureSize"), _0x3b3bcf.prototype), _0x5a72b5(_0x3b3bcf.prototype, "UseAlphaTest", [_0x5f0026], Object.getOwnPropertyDescriptor(_0x3b3bcf.prototype, "UseAlphaTest"), _0x3b3bcf.prototype), _0x5a72b5(_0x3b3bcf.prototype, "MixRate", [_0x1db323], Object.getOwnPropertyDescriptor(_0x3b3bcf.prototype, "MixRate"), _0x3b3bcf.prototype), _0x5a72b5(_0x3b3bcf.prototype, "CurrentGradient", [_0x381ca2], Object.getOwnPropertyDescriptor(_0x3b3bcf.prototype, "CurrentGradient"), _0x3b3bcf.prototype), _0x1e2f49 = _0x3b3bcf)) || _0x1e2f49) || _0x1e2f49;
      var _0x436080;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "9cd57oopkhBmZJ5o4EZK1tk", "EvtReceiver", undefined);
      var _0x45d522 = _0x42d118.ccclass;
      var _0x315165 = _0x45d522(_0x436080 = function (_0x1bd9d0) {
        function _0x23a818() {
          for (var _0x4ac466, _0x181878 = arguments.length, _0x376438 = new Array(_0x181878), _0x4099bd = 0; _0x4099bd < _0x181878; _0x4099bd++) {
            _0x376438[_0x4099bd] = arguments[_0x4099bd];
          }
          (_0x4ac466 = _0x1bd9d0.call.apply(_0x1bd9d0, [this].concat(_0x376438)) || this).m_callback = undefined;
          return _0x4ac466;
        }
        _0x567cf6(_0x23a818, _0x1bd9d0);
        _0x23a818.Pack = function (_0x1f4637, _0xceac15) {
          _0x1f4637.addComponent(_0x23a818);
          _0x1f4637.getComponent(_0x23a818).SetCallback(_0xceac15);
        };
        var _0x5ebd39 = _0x23a818.prototype;
        _0x5ebd39.EvtReciever = function (_0x11a488) {
          _0xb9245("AnimEvtReciever: ", _0x11a488);
          this.m_callback ? this.m_callback(_0x11a488) : _0xb9245("callback沒有設定，無法處理event: ", _0x11a488);
        };
        _0x5ebd39.triggerAnimationEvent = function (_0x1e913e) {
          _0xb9245("triggerAnimationEvent: ", _0x1e913e);
          this.m_callback ? this.m_callback(_0x1e913e) : _0xb9245("callback沒有設定，無法處理event: ", _0x1e913e);
        };
        _0x5ebd39.SetCallback = function (_0x4f8834) {
          this.m_callback = _0x4f8834;
        };
        _0x5ebd39.onDestroy = function () {
          this.m_callback = null;
        };
        return _0x23a818;
      }(_0x5aac4b)) || _0x436080;
      var _0xcb9f5d;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "bc3c97zP8pM2I5NAob2S72W", "EffectView", undefined);
      var _0x54302f = function (_0x1c08e6) {
        function _0x4fd5df() {
          var _0x12ac23;
          (_0x12ac23 = _0x1c08e6.call(this) || this).m_awardBoardFile = _0x4fd5df.EFFECT_ROOT + "win/awardBoard";
          _0x12ac23.m_effectList = {};
          _0x12ac23.m_timeLineList = {};
          _0x12ac23.m_winEffCbFunc = null;
          _0x12ac23.m_currentWinEffect = null;
          _0x12ac23.m_currentWinEffectTimeline = null;
          _0x12ac23.m_awardBoard = null;
          _0x12ac23.m_awardBoardTimeline = null;
          _0x12ac23.m_txtWinValue = null;
          _0x12ac23.m_durRollMoneyTick = _0x4fd5df.MONEY_ROLL_TIME;
          _0x12ac23.m_moneyRealValue = 0;
          _0x12ac23.m_moneyRollValue = 0;
          _0x12ac23.m_bgMaskNode = null;
          _0x12ac23.m_commonGetCoinCbFunc = null;
          _0x12ac23.m_commonGetCoinMidCbFunc = null;
          _0x12ac23.m_commonGetCoinEff = null;
          _0x12ac23.m_commonGetCoinTline = null;
          _0x12ac23.m_updateMoneyEff = null;
          _0x12ac23.m_updateMoneyTline = null;
          _0x12ac23.m_getCoinParticle = null;
          _0x12ac23.m_odds = [3, 5, 10, 20, 30];
          _0x12ac23.m_winEffectFiles = [null, null, _0x4fd5df.EFFECT_ROOT + _0x4fd5df.FILE_PATH.BIG_WIN, _0x4fd5df.EFFECT_ROOT + _0x4fd5df.FILE_PATH.MEGA_WIN, _0x4fd5df.EFFECT_ROOT + _0x4fd5df.FILE_PATH.SUPER_WIN];
          _0x12ac23.m_coinEffects = [2, 3, 5, 5, 5];
          _0x12ac23.m_coinTimes = [2, 2, 5, 5, 5];
          _0x12ac23.m_soundNameByOdds = [];
          _0x12ac23.m_isAutoCheckFloat = false;
          _0x12ac23.m_rotateCoins = {};
          _0x12ac23.m_coinEffectNode = undefined;
          _0x12ac23.m_loadedSound = undefined;
          _0x12ac23.m_isLandscape = false;
          _0x12ac23.m_LandscapeRate = 1;
          _0x12ac23.m_winType = undefined;
          _0x12ac23.m_nowPlaySoundID = null;
          _0x12ac23.m_loadedSound = false;
          return _0x12ac23;
        }
        _0x567cf6(_0x4fd5df, _0x1c08e6);
        var _0x3e6b04 = _0x4fd5df.prototype;
        _0x3e6b04.LoadSound = function () {
          this.m_loadedSound = true;
        };
        _0x3e6b04.OnUpdate = function (_0x34e7c7) {
          this.RollWinMoney(_0x34e7c7);
        };
        _0x3e6b04.ShowWinAndCoinEffect = function (_0x4ad00c, _0x3c59e9, _0x16135) {
          undefined === _0x16135 && (_0x16135 = null);
          _0x16135 = _0x16135 || null;
          var _0x2d9724 = _0x3c4bc5.GetManagerId(_0x16135);
          this.ShowWinEffect(_0x4ad00c, _0x2d9724);
          undefined !== _0x4ad00c.playCoinAtWinEffect && true !== _0x4ad00c.playCoinAtWinEffect || this.playCoinEffect(_0x3c59e9, _0x2d9724);
          _0x3c4bc5.StartLoad(_0x2d9724);
        };
        _0x3e6b04.ShowWinEffect = function (_0x5f4ac3, _0x499a39) {
          var _0x1463c7 = this;
          undefined === _0x499a39 && (_0x499a39 = -1);
          var _0x1a772b = _0x5f4ac3.effectFile;
          var _0x478d38 = _0x5f4ac3.winValue;
          var _0x57bf0f = _0x5f4ac3.cbFunc;
          var _0x2d7cbb = _0x5f4ac3.yPos;
          var _0x5e1741 = _0x5f4ac3.deltaY;
          var _0x371e42 = _0x5f4ac3.cbFuncBtoM;
          var _0x30b2a1 = _0x5f4ac3.cbFuncMtoS;
          var _0x5eb833 = _0x5f4ac3.cbFuncPlaying;
          var _0x454321 = _0x5f4ac3.isLoop || false;
          var _0xaf6ada = _0x5f4ac3.rollTime;
          if (null != _0x478d38) {
            var _0x3cf7cf = function () {
              _0x1463c7.m_bgMaskNode && (_0x1463c7.m_bgMaskNode.active = true);
              _0xb9245("LoadPrefabManager CB", _0x478d38);
              _0x2d7cbb = null != _0x2d7cbb && _0x2d7cbb || _0x4fd5df.DEFAULT_Y;
              _0x1463c7.m_effectList[_0x1a772b].setPosition(_0x2af1b6(_0x4fd5df.DesignSize.width / 2, _0x2d7cbb));
              _0x1463c7.m_effectList[_0x1a772b].active = true;
              _0x1463c7.m_timeLineList[_0x1a772b].play(_0x4fd5df.ANI_LABEL.ACT);
              _0x1463c7.m_currentWinEffect = _0x1463c7.m_effectList[_0x1a772b];
              _0x1463c7.m_currentWinEffectTimeline = _0x1463c7.m_timeLineList[_0x1a772b];
              _0x1463c7.m_currentWinEffectTimeline.name = _0x1a772b;
              _0x5e1741 = _0x1a772b == _0x4fd5df.FILE_PATH.JACKPOT ? 180 : null != _0x5e1741 ? _0x5e1741 : 230;
              _0x1463c7.m_awardBoard.setPosition(_0x2af1b6(_0x4fd5df.DesignSize.width / 2, _0x2d7cbb - _0x5e1741));
              _0x1463c7.m_awardBoard.active = true;
              _0x1463c7.m_awardBoardTimeline.play(_0x4fd5df.ANI_LABEL.ACT);
              _0x1463c7.SetWinValue(_0x478d38, _0xaf6ada);
              null == _0x5eb833 || _0x5eb833();
            };
            var _0x3d4438 = _0x499a39;
            -1 == _0x499a39 && (_0x3d4438 = _0x3c4bc5.GetManagerId(_0x3cf7cf));
            this.m_winEffCbFunc = _0x57bf0f;
            null == this.m_effectList[_0x1a772b] ? (_0x3c4bc5.AddLoad(_0x3d4438), _0xc8ef61.GameBundle.load(_0x1a772b, function (_0x38b762, _0x83cb44) {
              if (_0x38b762) {
                _0x3c3cbe(_0x38b762.message || _0x38b762);
              } else {
                var _0x1fa956 = _0x15ae44(_0x83cb44);
                _0x1fa956.active = false;
                _0x1463c7.addChild(_0x1fa956);
                _0x369abc.SetZIndex(_0x1fa956, _0x4fd5df.EFF_ZORDER.WIN_EFFECT);
                var _0x246a0d = _0x1fa956.getComponent(_0x41f03c);
                _0x315165.Pack(_0x1fa956, function (_0x581bfe) {
                  if (_0x581bfe == _0x4fd5df.ANI_FRAME_EVENT.ENDING) {
                    _0x1463c7.m_awardBoard && _0x1463c7.m_awardBoard.active && _0x1463c7.m_awardBoardTimeline.play(_0x4fd5df.ANI_LABEL.ENDING);
                  } else {
                    if (_0x581bfe == _0x4fd5df.ANI_FRAME_EVENT.LOOP) {
                      if (_0x454321) {
                        _0x246a0d.play(_0x4fd5df.ANI_LABEL.LOOP);
                        _0x246a0d.getState(_0x4fd5df.ANI_LABEL.LOOP).wrapMode = _0x1e9a42.WrapMode.Loop;
                      }
                    } else {
                      _0x581bfe == _0x4fd5df.ANI_FRAME_EVENT.B_TO_M ? (_0x1463c7.m_awardBoard && _0x1463c7.m_awardBoard.active && _0x51e4e3(_0x1463c7.m_txtWinValue).by(0.25, {
                        scale: _0x2af1b6(1.5, 1.5, 1.5)
                      }).by(0.1, {
                        scale: _0x2af1b6(0.9, 0.9, 0.9)
                      }).start(), _0x371e42 && _0x371e42()) : _0x581bfe == _0x4fd5df.ANI_FRAME_EVENT.M_TO_S ? (_0x1463c7.m_awardBoard && _0x1463c7.m_awardBoard.active && _0x51e4e3(_0x1463c7.m_txtWinValue).by(0.25, {
                        scale: _0x2af1b6(1.5, 1.5, 1.5)
                      }).by(0.1, {
                        scale: _0x2af1b6(0.9, 0.9, 0.9)
                      }).start(), null == _0x30b2a1 || _0x30b2a1()) : _0x581bfe == _0x4fd5df.ANI_FRAME_EVENT.END && (_0xb9245("ANI_FRAME_EVENT.END"), _0x1463c7.OnAnimationEnd(), _0x1463c7.m_winEffCbFunc && _0x1463c7.m_winEffCbFunc());
                    }
                  }
                });
                _0x1fa956.active = false;
                _0x1463c7.m_effectList[_0x1a772b] = _0x1fa956;
                _0x1463c7.m_timeLineList[_0x1a772b] = _0x246a0d;
                _0x3c4bc5.OnLoaded(_0x3d4438);
              }
            }), null == this.m_awardBoard && (_0x3c4bc5.AddLoad(_0x3d4438), _0xc8ef61.GameBundle.load(this.m_awardBoardFile, function (_0x1f5921, _0x452bb5) {
              _0x1f5921 ? _0x3c3cbe(_0x1f5921.message || _0x1f5921) : (_0x1463c7.m_awardBoard = _0x15ae44(_0x452bb5), _0x1463c7.addChild(_0x1463c7.m_awardBoard), _0x369abc.SetZIndex(_0x1463c7.m_awardBoard, _0x4fd5df.EFF_ZORDER.AWARD_BOARD), _0x1463c7.m_awardBoard.active = false, _0x1463c7.m_awardBoardTimeline = _0x1463c7.m_awardBoard.getComponent(_0x41f03c), _0x1463c7.m_txtWinValue = _0x1463c7.m_awardBoard.getChildByName("win_value_label"), _0x3c4bc5.OnLoaded(_0x3d4438));
            })), -1 == _0x499a39 ? _0x3c4bc5.StartLoad(_0x3d4438) : _0x3c4bc5.AddOnLoadedCallback(_0x3d4438, _0x3cf7cf)) : -1 == _0x499a39 ? _0x3cf7cf() : _0x3c4bc5.AddOnLoadedCallback(_0x3d4438, _0x3cf7cf);
          } else {
            this.m_awardBoard && (this.m_awardBoard.active = false, this.m_awardBoardTimeline.stop());
          }
        };
        _0x3e6b04.WinEffect = function () {
          this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.play(_0x4fd5df.ANI_LABEL.ENDING, false);
        };
        _0x3e6b04.SetWinValue = function (_0x594a14, _0x3aac5a, _0x28fe90) {
          undefined === _0x3aac5a && (_0x3aac5a = null);
          undefined === _0x28fe90 && (_0x28fe90 = 0);
          this.m_moneyRealValue = _0x369abc.strip(_0x594a14);
          this.m_moneyRollValue = _0x28fe90;
          _0x3aac5a = null == _0x3aac5a && _0x4fd5df.MONEY_ROLL_TIME || _0x3aac5a;
          this.m_durRollMoneyTick = _0x369abc.strip(_0x3aac5a);
        };
        _0x3e6b04.RollWinMoney = function (_0x28829b) {
          if (this.m_moneyRealValue = _0x369abc.strip(this.m_moneyRealValue), this.m_moneyRollValue = _0x369abc.strip(this.m_moneyRollValue), this.m_moneyRollValue < this.m_moneyRealValue) {
            var _0x5882e6 = _0x369abc.divide(this.m_durRollMoneyTick, _0x369abc.strip(_0x28829b));
            var _0x548e9f = _0x369abc.divide(_0x369abc.strip(this.m_moneyRealValue - this.m_moneyRollValue), _0x5882e6);
            var _0x37107e = _0x369abc.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            this.m_isAutoCheckFloat && (_0x37107e = this.m_moneyRealValue.toString().indexOf(".") > -1 ? _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x369abc.FORMAT_NUMBER_TYPE.NONE_DOT);
            this.m_moneyRollValue = _0x369abc.strip(this.m_moneyRollValue + _0x548e9f);
            this.m_moneyRollValue > this.m_moneyRealValue && (this.m_moneyRollValue = this.m_moneyRealValue);
            this.SetLabelString(this.m_txtWinValue, this.m_moneyRollValue, _0x37107e);
            this.m_durRollMoneyTick = _0x369abc.strip(this.m_durRollMoneyTick - _0x28829b);
          }
        };
        _0x3e6b04.SetLabelString = function (_0x1d0060, _0x334fd7, _0x70b66a) {
          undefined === _0x70b66a && (_0x70b66a = null);
          var _0x5da736 = _0x1d0060.getComponent(_0x42ff5a);
          if (null != _0x5da736 && null != _0x5da736) {
            if (null == _0x70b66a || null == _0x70b66a) {
              _0x5da736.string = _0x334fd7.toString();
            } else {
              var _0x10081b;
              if ("number" == typeof _0x334fd7) {
                _0x10081b = _0x334fd7;
              } else {
                var _0x1d6ae7 = _0x334fd7.replace(/,/g, "");
                _0x10081b = isNaN(Number(_0x1d6ae7)) ? 0 : Number(_0x1d6ae7);
              }
              _0x5da736.string = _0x369abc.FormatNumberThousands(_0x10081b, _0x70b66a);
            }
            _0x369abc.SetFont(_0x5da736);
          } else {
            _0xb9245("Warning!!!!!!!!!! SetLabelString: ", _0x1d0060);
          }
        };
        _0x3e6b04.SetWinMoneyToMax = function () {};
        _0x3e6b04.IsRollMoneyEnd = function () {
          return this.m_moneyRollValue == this.m_moneyRealValue;
        };
        _0x3e6b04.StopAnimation = function (_0x4a886b) {
          this.m_currentWinEffectTimeline && this.m_currentWinEffectTimeline.stop();
          this.m_awardBoard && (this.m_awardBoard.active = false, this.m_awardBoardTimeline.stop());
          1 != _0x4a886b && this.m_winEffCbFunc && this.m_winEffCbFunc();
          this.m_winEffCbFunc = null;
          this.OnAnimationEnd();
        };
        _0x3e6b04.OnAnimationEnd = function () {
          this.m_currentWinEffect && (this.m_currentWinEffect.active = false);
          this.m_bgMaskNode && (this.m_bgMaskNode.active = false);
          this.m_moneyRealValue = 0;
          this.m_moneyRollValue = 0;
        };
        _0x3e6b04.playCoinEffect = function (_0x4a09b8, _0xea0fb7) {
          var _0x2b593e = this;
          if (undefined === _0xea0fb7 && (_0xea0fb7 = -1), _0xc8ef61.CommonBundle) {
            var _0x124016 = _0x4a09b8.level;
            var _0x5294fd = _0x4a09b8.position;
            var _0x529b58 = _0x4a09b8.time;
            null == _0x529b58 && (_0x529b58 = 0);
            var _0x52cb50 = _0x4a09b8.zOrder;
            null == _0x52cb50 && (_0x52cb50 = 0);
            var _0x2fc2ee = _0x4a09b8.parent;
            this.stopCoinEffectImmly();
            var _0x3512e6 = _0x4fd5df.COIN_EFFECT_LIST[_0x124016];
            if (_0x3512e6 = _0x369abc.GetFilePath(_0x3512e6)) {
              _0xb9245("~~~~~~~~~~~~~~~~~~~~~~", _0x4a09b8, _0x529b58, _0x52cb50);
              var _0x4e10ee = function () {
                _0x2b593e.m_coinEffectNode.setPosition(_0x2af1b6(_0x5294fd.x, _0x5294fd.y));
                null == _0x2fc2ee || null == _0x2fc2ee ? (_0x2b593e.addChild(_0x2b593e.m_coinEffectNode), _0x369abc.SetZIndex(_0x2b593e.m_coinEffectNode, 0)) : (_0x2fc2ee.addChild(_0x2b593e.m_coinEffectNode), _0x369abc.SetZIndex(_0x2b593e.m_coinEffectNode, _0x52cb50));
                0 != _0x529b58 && _0x51e4e3(_0x2b593e).delay(_0x529b58).call(function () {
                  _0x2b593e.stopCoinEffect();
                }).start();
              };
              -1 != _0xea0fb7 && (_0x3c4bc5.AddOnLoadedCallback(_0xea0fb7, _0x4e10ee), _0x3c4bc5.AddLoad(_0xea0fb7));
              _0xc8ef61.CommonBundle.load(_0x3512e6, function (_0x18e634, _0x5c84c9) {
                _0xb9245("LoadRes ", _0x3512e6);
                _0x18e634 ? _0x3c3cbe(_0x18e634.message || _0x18e634) : (_0x2b593e.m_coinEffectNode = _0x15ae44(_0x5c84c9), _0x2b593e.m_coinEffectNode ? -1 == _0xea0fb7 ? _0x4e10ee() : _0x3c4bc5.OnLoaded(_0xea0fb7) : _0xb9245("SlotBottomBarView.playCoinEffect m_coinEffect is null"));
              });
            }
          }
        };
        _0x3e6b04.stopCoinEffectImmly = function () {
          null != this.m_coinEffectNode && this.m_coinEffectNode.removeFromParent && (this.m_coinEffectNode.removeFromParent(), this.m_coinEffectNode = null);
        };
        _0x3e6b04.stopCoinEffect = function () {
          if (null != this.m_coinEffectNode && this.m_coinEffectNode) {
            var _0x2af4cf = this.m_coinEffectNode.getChildByName("Particle_1").getComponent(_0x403246);
            var _0x331199 = this.m_coinEffectNode.getChildByName("Particle_2").getComponent(_0x403246);
            _0x2af4cf && _0x2af4cf.stopSystem();
            _0x331199 && _0x331199.stopSystem();
          }
        };
        _0x3e6b04.ShowCommonEffect = function (_0x515e2f, _0x383dd8, _0xb1772, _0x3ffc61) {
          undefined === _0xb1772 && (_0xb1772 = null);
          undefined === _0x3ffc61 && (_0x3ffc61 = null);
          _0xb1772 = _0xb1772 || {};
          _0x3ffc61 = _0x3ffc61 || {};
          var _0x1e4830 = new _0x4c38e3(_0x4fd5df.DesignSize.width / 2, _0x4fd5df.DesignSize.height);
          var _0x2b6544 = new _0x4c38e3(_0x4fd5df.DesignSize.width / 2 - 10, 145);
          var _0x23b415 = undefined;
          var _0x442309 = _0x515e2f / _0x383dd8;
          _0x311069 && (_0x515e2f = _0x311069.GetDisplayValue(_0x515e2f));
          for (var _0x5b3a94 = this.m_odds.length - 1; _0x5b3a94 >= 0; _0x5b3a94--) {
            if (_0x442309 >= this.m_odds[_0x5b3a94]) {
              _0x3ffc61.level = this.m_coinEffects[_0x5b3a94];
              5 == this.m_coinEffects[_0x5b3a94] ? _0x3ffc61.position = _0x3ffc61.position ? _0x3ffc61.position : _0x1e4830 : _0x3ffc61.position = _0x3ffc61.smallPosition ? _0x3ffc61.smallPosition : _0x3ffc61.position ? _0x3ffc61.position : _0x2b6544;
              (null == _0x3ffc61.time || _0x3ffc61.time <= 0) && (_0x3ffc61.time = this.m_coinTimes[_0x5b3a94]);
              5 == this.m_coinEffects[_0x5b3a94] ? (_0xb1772.effectFile = this.m_winEffectFiles[_0x5b3a94], _0xb1772.winValue = _0x515e2f, this.SetWinType(_0x5b3a94), this.ShowWinAndCoinEffect(_0xb1772, _0x3ffc61)) : this.playCoinEffect(_0x3ffc61);
              _0x23b415 = this.m_soundNameByOdds[_0x5b3a94];
              break;
            }
          }
          null != _0x23b415 && (this.m_nowPlaySoundID = _0x23cbbd.Play(_0x23b415, false));
          null == _0x3ffc61.time && (_0x3ffc61.time = 0);
          return _0x3ffc61.time;
        };
        _0x3e6b04.SkipEffect = function () {
          if (this.stopCoinEffect(), _0x58a89f.instance.ActionManager.removeAllActionsFromTarget(this), this.m_currentWinEffectTimeline) {
            var _0x5223fe = this.m_currentWinEffectTimeline.name;
            var _0x19960d = _0x369abc.FORMAT_NUMBER_TYPE.DEFINE_DOT;
            _0x5223fe != _0x4fd5df.FILE_PATH.BIG_WIN && _0x5223fe != _0x4fd5df.FILE_PATH.MEGA_WIN && _0x5223fe != _0x4fd5df.FILE_PATH.SUPER_WIN || (this.m_moneyRollValue = _0x369abc.strip(this.m_moneyRollValue), this.m_moneyRealValue = _0x369abc.strip(this.m_moneyRealValue), this.m_moneyRollValue == this.m_moneyRealValue ? (this.m_awardBoardTimeline.play(_0x4fd5df.ANI_LABEL.ENDING), this.m_currentWinEffectTimeline.setCurrentTime(5)) : (this.m_isAutoCheckFloat && (_0x19960d = this.m_moneyRealValue.toString().indexOf(".") > -1 ? _0x369abc.FORMAT_NUMBER_TYPE.PERMANENT_DOT : _0x369abc.FORMAT_NUMBER_TYPE.NONE_DOT), this.SetLabelString(this.m_txtWinValue, this.m_moneyRealValue, _0x19960d), this.m_currentWinEffectTimeline.setCurrentTime(3.8)), this.m_currentWinEffectTimeline = null);
            this.m_moneyRollValue = this.m_moneyRealValue;
          }
        };
        _0x3e6b04.SkipEffectSound = function () {
          this.m_nowPlaySoundID && (_0x23cbbd.Stop(this.m_nowPlaySoundID), this.m_nowPlaySoundID = null);
        };
        _0x3e6b04.SetAutoCheckFloat = function (_0x2a7b55) {
          this.m_isAutoCheckFloat = _0x2a7b55;
        };
        _0x3e6b04.SetOdds = function (_0x3e2180) {
          this.m_odds = _0x3e2180;
        };
        _0x3e6b04.SetWinEffectFiles = function (_0x443a40) {
          this.m_winEffectFiles = _0x443a40;
        };
        _0x3e6b04.SetAwardBoardFile = function (_0xaacc22) {
          this.m_awardBoardFile = _0xaacc22;
        };
        _0x3e6b04.SetEffectLevels = function (_0x21f8a0) {
          this.m_coinEffects = _0x21f8a0;
        };
        _0x3e6b04.SetEffectTimes = function (_0x1ee95c) {
          this.m_coinTimes = _0x1ee95c;
        };
        _0x3e6b04.SetSoundNameByOdds = function (_0x3f9a66) {
          this.m_soundNameByOdds = _0x3f9a66;
        };
        _0x3e6b04.SetBGMaskNode = function (_0x1d7e00) {
          null != _0x1d7e00 && (this.m_bgMaskNode = _0x1d7e00);
        };
        _0x3e6b04.SetWinTextFontSize = function (_0x2e1132) {
          this.m_txtWinValue && (this.m_txtWinValue.getComponent(_0x42ff5a).fontSize = _0x2e1132);
        };
        _0x3e6b04.SetWinType = function (_0x25aac6) {
          this.m_winType = _0x25aac6;
        };
        _0x54ea23(_0x4fd5df, [{
          key: "CoinEffectNode",
          set: function (_0x526252) {
            this.m_coinEffectNode = _0x526252;
          }
        }]);
        return _0x4fd5df;
      }(_0x5cf7a3);
      var _0x1abc69;
      var _0x5dbb15;
      var _0x3504da;
      var _0x501793;
      var _0x7ab84f;
      var _0x304864;
      var _0x504df6;
      var _0x1b9737;
      var _0x47e978;
      var _0x381a31;
      var _0x5e7701;
      var _0x8217c3;
      var _0x41c64e;
      var _0x274a34;
      var _0x1ea8ee;
      var _0x5897bc;
      var _0x1ea8d6;
      var _0x454cf8;
      _0x54302f.DesignSize = {
        width: 1136,
        height: 640
      };
      _0x54302f.SOUND_FILE = {
        COMMON_SUPER_WIN: null,
        COMMON_MEGA_WIN: null,
        COMMON_COIN_SMALL: null,
        COMMON_COIN_MEDIUM: null,
        COMMON_BIG_WIN: null
      };
      _0x54302f.EFFECT_ROOT = "Astt/%s/effect/GameCommonEffect/";
      _0x54302f.FILE_PATH = {
        BIG_WIN: "win/big_anim",
        MEGA_WIN: "win/mega_anim",
        SUPER_WIN: "win/super_anim",
        JACKPOT: "win/effect_Jackpot",
        BIG_TO_MEGA_WIN: "win/bigToMega_anim",
        BIG_TO_SUPER_WIN: "win/bigToSuper_anim",
        FIVE_OF_A_KIND: "win/5ofa_anim"
      };
      _0x54302f.WIN_EFFECT_SOUND_NAME = (_0xcb9f5d = {}, _0xcb9f5d[_0x54302f.FILE_PATH.BIG_WIN] = "Common_big_win", _0xcb9f5d[_0x54302f.FILE_PATH.MEGA_WIN] = "Common_mega_win", _0xcb9f5d[_0x54302f.FILE_PATH.SUPER_WIN] = "Common_super_win", _0xcb9f5d[_0x54302f.FILE_PATH.JACKPOT] = "Common_JP_win", _0xcb9f5d[_0x54302f.FILE_PATH.BIG_TO_MEGA_WIN] = "Common_big_win", _0xcb9f5d[_0x54302f.FILE_PATH.BIG_TO_SUPER_WIN] = "Common_big_win", _0xcb9f5d[_0x54302f.FILE_PATH.FIVE_OF_A_KIND] = "Common_big_win", _0xcb9f5d);
      _0x54302f.EffectViewUIName = _0x4fa226({
        TXT_WIN_MONEY: "label_final_value",
        PARTICLE: "Particle_"
      });
      _0x54302f.DEFAULT_Y = 400;
      _0x54302f.PARTICLE_AMOUNT_MAX = 2;
      _0x54302f.MONEY_ROLL_TIME = 3;
      _0x54302f.UPDATE_MONEY_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Node_GetCoin01.csb";
      _0x54302f.COMMON_GET_COIN_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Node_GetCoin02.csb";
      _0x54302f.GET_COIN_PARTICLE_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Particle/_V3_GetCoin02.plist";
      _0x54302f.ROTATE_COIN_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Node_CoinRotation01.csb";
      _0x54302f.TRIAL_COIN_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Node_GetTrialCoin.csb";
      _0x54302f.COIN_APPEAR_PARTICLE_CSB = _0x54302f.EFFECT_ROOT + "common_get_coin/Particle/New_CoinShine03.plist";
      _0x54302f.COMMON_COIN_AMOUNT = 8;
      _0x54302f.ANI_LABEL = {
        ACT: "main",
        LOOP: "loop",
        ENDING: "ending"
      };
      _0x54302f.ANI_FRAME_EVENT = {
        MID: "AniMid",
        B_TO_M: "AniBtoM",
        M_TO_S: "AniMtoS",
        ENDING: "AniEnding",
        END: "AniEnd",
        LOOP: "AniLoop"
      };
      _0x54302f.EFF_ZORDER = {
        COIN_FALL: 1,
        WIN_EFFECT: 2,
        AWARD_BOARD: 3,
        COMMON_GET_COIN: 4,
        GET_TRIAL_COIN: 5
      };
      _0x54302f.COIN_EFFECT_LIST = {
        1: _0x54302f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_1",
        2: _0x54302f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_2",
        3: _0x54302f.EFFECT_ROOT + "coin/1_SmallGoldCoinFX_3",
        4: _0x54302f.EFFECT_ROOT + "coin/2_BigGoldCoinFX_1",
        5: _0x54302f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_1",
        6: _0x54302f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_2",
        7: _0x54302f.EFFECT_ROOT + "coin/3_MegaGoldCoinFX_3"
      };
      _0x54302f.WIN_TYPE = {
        BIG: 2,
        MEGA: 3,
        SUPER: 4
      };
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "a4b83idlNlHcZQFqX6vJhFz", "ExtraBetComponent", undefined);
      var _0x358f01 = _0x42d118.ccclass;
      var _0x471185 = _0x42d118.property;
      var _0x37c595 = {
        Normal: 0,
        Special: 1
      };
      _0x1abc69 = _0x471185({
        type: _0x5cf7a3,
        tooltip: "EX 按鈕最頂層節點(整顆node)"
      });
      _0x5dbb15 = _0x471185({
        type: _0x2b432b,
        tooltip: "EX 按鈕"
      });
      _0x3504da = _0x471185({
        type: _0x2b432b,
        tooltip: "按鈕ON"
      });
      _0x501793 = _0x471185({
        type: _0x2b432b,
        tooltip: "按鈕OFF"
      });
      _0x7ab84f = _0x471185({
        type: _0x2b432b,
        tooltip: "提示問號按鈕"
      });
      _0x304864 = _0x471185({
        type: _0x5cf7a3,
        tooltip: "提示文字tip面板"
      });
      _0x504df6 = _0x471185({
        type: _0x42ff5a,
        tooltip: "功能說明文字串Label"
      });
      _0x1b9737 = _0x471185({
        type: _0x2f2b2d,
        tooltip: "本體ExtraBet文字圖片"
      });
      var _0x2a146e = _0x358f01((_0x381a31 = function (_0x54b426) {
        function _0x27cf55() {
          for (var _0xc56373, _0x3fea0e = arguments.length, _0x5b9524 = new Array(_0x3fea0e), _0x5d4bfc = 0; _0x5d4bfc < _0x3fea0e; _0x5d4bfc++) {
            _0x5b9524[_0x5d4bfc] = arguments[_0x5d4bfc];
          }
          _0x4f841b(_0xc56373 = _0x54b426.call.apply(_0x54b426, [this].concat(_0x5b9524)) || this, "m_multiExtraBetNode", _0x5e7701, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn", _0x8217c3, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn_on", _0x41c64e, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn_off", _0x274a34, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn_TipQuesMark", _0x1ea8ee, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn_Tip", _0x5897bc, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_multiBtn_Description", _0x1ea8d6, _0x2fdb02(_0xc56373));
          _0x4f841b(_0xc56373, "m_Txt_Extra_Bet", _0x454cf8, _0x2fdb02(_0xc56373));
          _0xc56373.m_isExtendShowBar = false;
          _0xc56373.m_ExtraBetAniPlaying = null;
          _0xc56373.m_isExtra = false;
          _0xc56373.m_isForceExtraOnEnd = false;
          _0xc56373.m_isTwoStep = false;
          _0xc56373.m_toStepTwo = false;
          _0xc56373.m_triggerCb = null;
          _0xc56373.m_canExtend = true;
          return _0xc56373;
        }
        _0x567cf6(_0x27cf55, _0x54b426);
        var _0x4c93f5 = _0x27cf55.prototype;
        _0x4c93f5.Init = function (_0x4189c1, _0x573c6b, _0x55b479, _0x16a63f, _0x4ecee5) {
          var _0x4f0fc7 = this;
          if (undefined === _0x16a63f && (_0x16a63f = false), undefined === _0x4ecee5 && (_0x4ecee5 = false), _0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
            this.node.active = false;
            return void this.node.on(_0x5e8512.ACTIVE_IN_HIERARCHY_CHANGED, function () {
              _0x4f0fc7.node.active = false;
            });
          }
          this.m_triggerCb = _0x4189c1;
          this.m_isTwoStep = _0x16a63f;
          this.m_multiBtn_Description && this.m_Txt_Extra_Bet && (_0xb9245(" localeStringManager.CurrLang : " + _0x19b0e0.CurrLang), this.m_multiBtn_Description.string = _0x19b0e0.GetString(_0x573c6b), this.m_Txt_Extra_Bet.spriteFrame = _0x19b0e0.GetGameAtlas().getSpriteFrame(_0x55b479));
          _0x3044e8.Init(_0x4ecee5 ? null : this.node, this.ForceSetExtraBet.bind(this));
        };
        _0x4c93f5.onLoad = function () {
          var _0x38dd4b = this;
          if (!_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
            _0xb9245("ExtraBet onLoad");
            this.m_multiBtn && this.m_multiBtn.node.on(_0x5cf7a3.EventType.TOUCH_END, function () {
              _0x38dd4b.m_ExtraBetAniPlaying || (_0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), _0x38dd4b.CheckCanUseBtn() ? _0x38dd4b.ExtendShowBar(!_0x38dd4b.m_isExtendShowBar) : _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.FREEWINCASH_PLAYING1));
            });
            for (var _0x183118 = 0; _0x183118 < this.m_multiBtn_on.length; _0x183118++) {
              this.m_multiBtn_on[_0x183118].node.on(_0x5cf7a3.EventType.TOUCH_END, function () {
                _0x38dd4b.m_ExtraBetAniPlaying || (_0x38dd4b.CheckCanUseBtn() ? _0x38dd4b.ChangeBetMode() : _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.FREEWINCASH_PLAYING1));
              });
              this.m_multiBtn_off[_0x183118] && this.m_multiBtn_off[_0x183118].node.on(_0x5cf7a3.EventType.TOUCH_END, function () {
                _0x38dd4b.m_ExtraBetAniPlaying || (_0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), _0x38dd4b.CheckCanUseBtn() && _0x38dd4b.ChangeBetMode());
              });
            }
            this.m_multiBtn_TipQuesMark && this.m_multiBtn_TipQuesMark.node.on(_0x5cf7a3.EventType.TOUCH_END, _0x12d1c6(_0x41e40d().mark(function _0x140c8a() {
              return _0x41e40d().wrap(function (_0xc2e777) {
                for (;;) {
                  switch (_0xc2e777.prev = _0xc2e777.next) {
                    case 0:
                      if (_0x38dd4b.m_ExtraBetAniPlaying) {
                        _0xc2e777.next = 13;
                        break;
                      }
                      if (_0x23cbbd.Play(_0xc8ef61.AudioClips.COMMON_BTN), _0x57d1f9.Current() != _0x4b430a.IDLE || _0x488055.IsBuyBonus) {
                        _0xc2e777.next = 12;
                        break;
                      }
                      if (!_0x38dd4b.m_isExtendShowBar) {
                        _0xc2e777.next = 7;
                        break;
                      }
                      _0x38dd4b.m_multiBtn_Tip.active = !_0x38dd4b.m_multiBtn_Tip.active;
                      _0xc2e777.next = 10;
                      break;
                    case 7:
                      _0xc2e777.next = 9;
                      return _0x38dd4b.ExtendShowBar(true);
                    case 9:
                      !_0x38dd4b.m_multiBtn_Tip.active && _0x38dd4b.m_isExtendShowBar && (_0x38dd4b.m_multiBtn_Tip.active = true);
                    case 10:
                      _0xc2e777.next = 13;
                      break;
                    case 12:
                      _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.FREEWINCASH_PLAYING1);
                    case 13:
                    case "end":
                      return _0xc2e777.stop();
                  }
                }
              }, _0x140c8a);
            })));
            this.ExtendShowBar(false);
          }
        };
        _0x4c93f5.start = function () {
          _0xb9245("ExtraBet start");
        };
        _0x4c93f5.CheckCanUseBtn = function () {
          return _0xc8ef61.IsInMG() && _0x57d1f9.Current() == _0x4b430a.IDLE && !_0xc8ef61.IsUsingItem && !_0x488055.IsBuyBonus && !_0x2fd06d.IsFeaturesDemoMode && !_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet);
        };
        _0x4c93f5.OnSpin = function () {
          this.ExtendShowBar(false);
        };
        _0x4c93f5.ShowExtra = function (_0x3bf256) {
          this.m_multiExtraBetNode && !_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet) && (this.m_multiExtraBetNode.active = _0x3bf256);
        };
        _0x4c93f5.GoToFeatures = function () {};
        _0x4c93f5.ExtendShowBar = function () {
          var _0x53f8d4 = _0x12d1c6(_0x41e40d().mark(function _0x96e68b(_0x15f3cc) {
            var _0x1ed219;
            return _0x41e40d().wrap(function (_0x1e86c6) {
              for (;;) {
                switch (_0x1e86c6.prev = _0x1e86c6.next) {
                  case 0:
                    if (this.m_canExtend && !_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
                      _0x1e86c6.next = 2;
                      break;
                    }
                    return _0x1e86c6.abrupt("return");
                  case 2:
                    if (!_0x311069 || this.m_ExtraBetAniPlaying) {
                      _0x1e86c6.next = 31;
                      break;
                    }
                    if (!_0x15f3cc) {
                      _0x1e86c6.next = 20;
                      break;
                    }
                    if (_0x311069.IsAutoSpin || _0xc8ef61.IsUsingItem || _0x488055.IsBuyBonus) {
                      _0x1e86c6.next = 17;
                      break;
                    }
                    if (this.m_isExtendShowBar) {
                      _0x1e86c6.next = 15;
                      break;
                    }
                    if (this.m_isExtendShowBar = true, _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x1e86c6.next = 12;
                      break;
                    }
                    _0x1e86c6.next = 12;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_Show");
                  case 12:
                    this.m_ExtraBetAniPlaying = false;
                    _0x311069.SetSpinState(_0x33e9ab.IDLE);
                    this.m_isExtra && this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Active");
                  case 15:
                    _0x1e86c6.next = 18;
                    break;
                  case 17:
                    _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.FREEWINCASH_PLAYING1);
                  case 18:
                    _0x1e86c6.next = 31;
                    break;
                  case 20:
                    if (!this.m_isExtendShowBar) {
                      _0x1e86c6.next = 31;
                      break;
                    }
                    if (_0x311069.IsAutoSpin || _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false), this.m_ExtraBetAniPlaying = true, !this.m_multiExtraBetNode) {
                      _0x1e86c6.next = 27;
                      break;
                    }
                    _0x1e86c6.next = 27;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_Close");
                  case 27:
                    this.m_ExtraBetAniPlaying = false;
                    _0x311069.IsAutoSpin || _0x311069.SetSpinState(_0x33e9ab.IDLE);
                    this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Active") : (this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_OFF"), (_0x1ed219 = this.m_multiExtraBetNode.getComponent(_0x41f03c).getState("ExtraBet_OFF")).setTime(_0x1ed219.duration)));
                    this.m_isExtendShowBar = false;
                  case 31:
                  case "end":
                    return _0x1e86c6.stop();
                }
              }
            }, _0x96e68b, this);
          }));
          return function (_0x9c4c5) {
            return _0x53f8d4.apply(this, arguments);
          };
        }();
        _0x4c93f5.ChangeBetMode = function () {
          var _0x5722c9 = _0x12d1c6(_0x41e40d().mark(function _0x43fa46() {
            var _0x1d280d;
            return _0x41e40d().wrap(function (_0x432c4c) {
              for (;;) {
                switch (_0x432c4c.prev = _0x432c4c.next) {
                  case 0:
                    if (!_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
                      _0x432c4c.next = 2;
                      break;
                    }
                    return _0x432c4c.abrupt("return");
                  case 2:
                    if (_0xb9245("ChangeBetMode stateManager.Current() : ", _0x57d1f9.Current()), !_0x311069 || _0x488055.IsBuyBonus || _0x57d1f9.Current() !== _0x4b430a.IDLE && !this.m_isExtra) {
                      _0x432c4c.next = 36;
                      break;
                    }
                    if (this.m_isExtra = !this.m_isExtra, _0x1d280d = [], !this.m_isExtra) {
                      _0x432c4c.next = 24;
                      break;
                    }
                    this.m_isTwoStep ? this.m_toStepTwo = true : _0x311069.ChangeMultiBet(_0x37c595.Special);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x311069 || _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN);
                    null == _0x2fd06d || _0x2fd06d.SetBuyBonusState(false);
                    this.m_multiExtraBetNode && _0x1d280d.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_ON"));
                    _0x1d280d.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x432c4c.next = 16;
                    return Promise.all(_0x1d280d);
                  case 16:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x311069 || _0x311069.SetSpinState(_0x33e9ab.IDLE);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Active");
                    _0x432c4c.next = 21;
                    return _0xc8ef61.Wait(this, 0.2);
                  case 21:
                    null == _0x2fd06d || _0x2fd06d.SetBuyBonusState(true);
                    _0x432c4c.next = 34;
                    break;
                  case 24:
                    _0x311069.ChangeMultiBet(_0x37c595.Normal);
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    this.m_ExtraBetAniPlaying = true;
                    null == _0x311069 || _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN);
                    this.m_multiExtraBetNode && _0x1d280d.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_OFF"));
                    _0x1d280d.push(this.m_triggerCb(this.m_isExtra, false));
                    _0x432c4c.next = 32;
                    return Promise.all(_0x1d280d);
                  case 32:
                    this.m_ExtraBetAniPlaying = false;
                    null == _0x311069 || _0x311069.SetSpinState(_0x33e9ab.IDLE);
                  case 34:
                    _0x432c4c.next = 37;
                    break;
                  case 36:
                    _0x57d1f9.Current() !== _0x4b430a.IDLE && (_0xb9245("TRIAL_REFUSED_REASON 1 "), _0x38d2d9.ShowMessageBox(_0xc8ef61.StringKey.FREEWINCASH_PLAYING1));
                  case 37:
                  case "end":
                    return _0x432c4c.stop();
                }
              }
            }, _0x43fa46, this);
          }));
          return function () {
            return _0x5722c9.apply(this, arguments);
          };
        }();
        _0x4c93f5.SetTwoStepMulti = function () {
          var _0x445b39 = _0x12d1c6(_0x41e40d().mark(function _0x592a5f(_0x364004, _0x45bdd8) {
            return _0x41e40d().wrap(function (_0xfeafe8) {
              for (;;) {
                switch (_0xfeafe8.prev = _0xfeafe8.next) {
                  case 0:
                    if (!_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
                      _0xfeafe8.next = 2;
                      break;
                    }
                    return _0xfeafe8.abrupt("return");
                  case 2:
                    if (!this.m_isTwoStep || !this.m_toStepTwo) {
                      _0xfeafe8.next = 15;
                      break;
                    }
                    if (!_0x364004) {
                      _0xfeafe8.next = 7;
                      break;
                    }
                    _0x311069.ChangeMultiBet(_0x45bdd8);
                    _0xfeafe8.next = 15;
                    break;
                  case 7:
                    if (this.m_isExtra = false, 1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true), this.m_ExtraBetAniPlaying = true, _0x311069 && _0x311069.SetSpinState(_0x33e9ab.CLICK_SPIN), !this.m_multiExtraBetNode) {
                      _0xfeafe8.next = 14;
                      break;
                    }
                    _0xfeafe8.next = 14;
                    return this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_OFF");
                  case 14:
                    this.m_ExtraBetAniPlaying = false;
                  case 15:
                  case "end":
                    return _0xfeafe8.stop();
                }
              }
            }, _0x592a5f, this);
          }));
          return function (_0x350e07, _0x592730) {
            return _0x445b39.apply(this, arguments);
          };
        }();
        _0x4c93f5.ForceSetExtraBet = function () {
          var _0x14a173 = _0x12d1c6(_0x41e40d().mark(function _0x53d3c3(_0x243fba, _0xe2b7cf) {
            var _0x5a2c2f;
            return _0x41e40d().wrap(function (_0x1cc6b5) {
              for (;;) {
                switch (_0x1cc6b5.prev = _0x1cc6b5.next) {
                  case 0:
                    if (undefined === _0xe2b7cf && (_0xe2b7cf = _0x37c595.Special), !_0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet)) {
                      _0x1cc6b5.next = 3;
                      break;
                    }
                    return _0x1cc6b5.abrupt("return");
                  case 3:
                    if (!_0x243fba) {
                      _0x1cc6b5.next = 14;
                      break;
                    }
                    this.m_isForceExtraOnEnd = false;
                    this.m_isExtra = true;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = true, this.m_multiBtn_off[0].node.active = false);
                    this.m_multiExtraBetNode && this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Active");
                    this.m_isTwoStep ? (this.m_toStepTwo = true, this.SetTwoStepMulti(_0x243fba, _0xe2b7cf)) : _0x311069.ChangeMultiBet(_0xe2b7cf);
                    _0x1cc6b5.next = 11;
                    return this.m_triggerCb(_0x243fba, true);
                  case 11:
                    this.m_isForceExtraOnEnd = true;
                    _0x1cc6b5.next = 23;
                    break;
                  case 14:
                    if (!this.m_isExtra) {
                      _0x1cc6b5.next = 23;
                      break;
                    }
                    _0x5a2c2f = [];
                    this.m_isExtra = false;
                    1 == this.m_multiBtn_on.length && (this.m_multiBtn_on[0].node.active = false, this.m_multiBtn_off[0].node.active = true);
                    _0x311069.ChangeMultiBet(_0x37c595.Normal);
                    this.m_multiExtraBetNode && (this.m_isExtendShowBar ? _0x5a2c2f.push(this.ExtendShowBar(false)) : _0x5a2c2f.push(this.PlayAnimation(this.m_multiExtraBetNode.getComponent(_0x41f03c), "ExtraBet_OFF")));
                    _0x5a2c2f.push(this.m_triggerCb(_0x243fba, true));
                    _0x1cc6b5.next = 23;
                    return Promise.all(_0x5a2c2f);
                  case 23:
                  case "end":
                    return _0x1cc6b5.stop();
                }
              }
            }, _0x53d3c3, this);
          }));
          return function (_0x395c80, _0x1840f3) {
            return _0x14a173.apply(this, arguments);
          };
        }();
        _0x4c93f5.OnRotation = function () {
          _0x369abc.CheckSwitchOff(_0x43d062.CloseExtraBet) || (this.m_multiExtraBetNode && (this.m_isExtra ? this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Active") : this.m_multiExtraBetNode.getComponent(_0x41f03c).play("ExtraBet_Stop")), this.m_multiBtn_Tip && (this.m_multiBtn_Tip.active = false));
        };
        _0x4c93f5.IsExAnimationTouchable = function () {
          return !this.m_ExtraBetAniPlaying;
        };
        _0x4c93f5.FirstShowBar = function () {};
        _0x4c93f5.PlayAnimation = function (_0x4cd0e4, _0x1fc54e, _0x19ca5b) {
          undefined === _0x19ca5b && (_0x19ca5b = false);
          return new Promise(function (_0x3daebc) {
            if (_0x4cd0e4.play(_0x1fc54e), _0x19ca5b) {
              var _0x40652f = _0x4cd0e4.getState(_0x1fc54e);
              _0x40652f && (_0x40652f.wrapMode = _0x1e9a42.WrapMode.Loop);
            }
            _0x4cd0e4.once(_0x41f03c.EventType.FINISHED, function () {
              _0x3daebc(true);
            });
          });
        };
        _0x54ea23(_0x27cf55, [{
          key: "ExtraBetAniPlaying",
          set: function (_0x5454a6) {
            this.m_ExtraBetAniPlaying = _0x5454a6;
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
          set: function (_0x978892) {
            this.m_canExtend = _0x978892;
          }
        }]);
        return _0x27cf55;
      }(_0x5aac4b), _0x5e7701 = _0x5a72b5(_0x381a31.prototype, "m_multiExtraBetNode", [_0x1abc69], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x8217c3 = _0x5a72b5(_0x381a31.prototype, "m_multiBtn", [_0x5dbb15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x41c64e = _0x5a72b5(_0x381a31.prototype, "m_multiBtn_on", [_0x3504da], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x274a34 = _0x5a72b5(_0x381a31.prototype, "m_multiBtn_off", [_0x501793], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x1ea8ee = _0x5a72b5(_0x381a31.prototype, "m_multiBtn_TipQuesMark", [_0x7ab84f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5897bc = _0x5a72b5(_0x381a31.prototype, "m_multiBtn_Tip", [_0x304864], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x1ea8d6 = _0x5a72b5(_0x381a31.prototype, "m_multiBtn_Description", [_0x504df6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x454cf8 = _0x5a72b5(_0x381a31.prototype, "m_Txt_Extra_Bet", [_0x1b9737], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x47e978 = _0x381a31)) || _0x47e978;
      var _0x4d2add;
      var _0x2ed3c6;
      var _0x4aa750;
      var _0x2d1950;
      var _0x2bda27;
      var _0x3e93b0;
      var _0x5d896e;
      var _0x4eeaae;
      var _0x509c8f;
      var _0x55f0c3;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "5cf68x6BTZHP5QWXU3HRb/c", "FeaturePageComponent", undefined);
      var _0x35f013 = _0x42d118.ccclass;
      var _0x43adb4 = _0x42d118.property;
      _0x4d2add = _0x43adb4({
        type: _0x2f2b2d,
        tooltip: "說明文字"
      });
      _0x2ed3c6 = _0x43adb4({
        type: _0x374045,
        tooltip: "圖片名稱"
      });
      _0x4aa750 = _0x43adb4({
        type: Boolean,
        tooltip: "圖片名稱"
      });
      _0x2d1950 = _0x43adb4({
        type: _0x2f2b2d,
        tooltip: "圖片名稱"
      });
      var _0x50d5d8 = _0x35f013((_0x3e93b0 = function (_0x186a4e) {
        function _0x488fb7() {
          for (var _0x4e3409, _0x1b3689 = arguments.length, _0x3b5ec8 = new Array(_0x1b3689), _0x5a8219 = 0; _0x5a8219 < _0x1b3689; _0x5a8219++) {
            _0x3b5ec8[_0x5a8219] = arguments[_0x5a8219];
          }
          _0x4f841b(_0x4e3409 = _0x186a4e.call.apply(_0x186a4e, [this].concat(_0x3b5ec8)) || this, "m_hintSprite", _0x5d896e, _0x2fdb02(_0x4e3409));
          _0x4f841b(_0x4e3409, "m_imgName", _0x4eeaae, _0x2fdb02(_0x4e3409));
          _0x4f841b(_0x4e3409, "m_isAD", _0x509c8f, _0x2fdb02(_0x4e3409));
          _0x4f841b(_0x4e3409, "m_ADsprite", _0x55f0c3, _0x2fdb02(_0x4e3409));
          return _0x4e3409;
        }
        _0x567cf6(_0x488fb7, _0x186a4e);
        var _0xb68247 = _0x488fb7.prototype;
        _0xb68247.start = function () {
          var _0x521d40 = this;
          if (!this.m_isAD) {
            var _0x48e176 = _0x19b0e0.GetGameAtlas();
            _0x48e176 ? this.m_hintSprite.spriteFrame = _0x48e176.getSpriteFrame(this.m_imgName) : _0x19b0e0.RegisterOnGameAltasLoadedCb(function () {
              _0x521d40.m_hintSprite.spriteFrame = _0x19b0e0.GetGameAtlas().getSpriteFrame(_0x521d40.m_imgName);
            });
          }
        };
        _0xb68247.SetADSprites = function (_0x371b82) {
          this.m_ADsprite && (this.m_ADsprite.spriteFrame = _0x371b82);
        };
        return _0x488fb7;
      }(_0x5aac4b), _0x5d896e = _0x5a72b5(_0x3e93b0.prototype, "m_hintSprite", [_0x4d2add], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4eeaae = _0x5a72b5(_0x3e93b0.prototype, "m_imgName", [_0x2ed3c6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x509c8f = _0x5a72b5(_0x3e93b0.prototype, "m_isAD", [_0x4aa750], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x55f0c3 = _0x5a72b5(_0x3e93b0.prototype, "m_ADsprite", [_0x2d1950], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2bda27 = _0x3e93b0)) || _0x2bda27;
      var _0x1ce613;
      var _0x1b4ef3;
      var _0x288b1d;
      var _0x3a85cc;
      var _0x157872;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "e33faPhWqxMHa92Db40WLqj", "LabelSpacingX", undefined);
      var _0x5c6fb1 = _0x42d118.ccclass;
      var _0x524dde = _0x42d118.property;
      var _0x26a167 = _0x42d118.executeInEditMode;
      var _0x1c6f14 = _0x42d118.requireComponent;
      _0x1ce613 = _0x5c6fb1("LabelSpacingX");
      _0x1b4ef3 = _0x1c6f14(_0x42ff5a);
      var _0x2327a7 = _0x1ce613(_0x288b1d = _0x1b4ef3(_0x288b1d = _0x26a167((_0x3a85cc = function (_0x1e1ed5) {
        function _0x45d63a() {
          for (var _0x2c3a2d, _0x5932f7 = arguments.length, _0xeeea8e = new Array(_0x5932f7), _0x1f1fbc = 0; _0x1f1fbc < _0x5932f7; _0x1f1fbc++) {
            _0xeeea8e[_0x1f1fbc] = arguments[_0x1f1fbc];
          }
          _0x4f841b(_0x2c3a2d = _0x1e1ed5.call.apply(_0x1e1ed5, [this].concat(_0xeeea8e)) || this, "_spacingX", _0x157872, _0x2fdb02(_0x2c3a2d));
          return _0x2c3a2d;
        }
        _0x567cf6(_0x45d63a, _0x1e1ed5);
        var _0x49b9ee = _0x45d63a.prototype;
        _0x49b9ee.onEnable = function () {
          this.resetSpacingX();
        };
        _0x49b9ee.resetSpacingX = function () {
          var _0x4ef099 = this.node.getComponent(_0x42ff5a);
          _0x4ef099 && _0x4ef099.cacheMode === _0x42ff5a.CacheMode.CHAR && (_0x4ef099.spacingX = this._spacingX);
        };
        _0x54ea23(_0x45d63a, [{
          key: "spacingX",
          get: function () {
            return this._spacingX;
          },
          set: function (_0x1bc7a4) {
            this._spacingX = _0x1bc7a4;
            this.resetSpacingX();
          }
        }]);
        return _0x45d63a;
      }(_0x5aac4b), _0x157872 = _0x5a72b5(_0x3a85cc.prototype, "_spacingX", [_0x524dde], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x5a72b5(_0x3a85cc.prototype, "spacingX", [_0x524dde], Object.getOwnPropertyDescriptor(_0x3a85cc.prototype, "spacingX"), _0x3a85cc.prototype), _0x288b1d = _0x3a85cc)) || _0x288b1d) || _0x288b1d) || _0x288b1d;
      var _0x3b0909;
      var _0x57d66d;
      var _0x4bd86c;
      var _0x12e0c8;
      var _0x50d08e;
      var _0x6af1c0;
      var _0x2bd0ff;
      var _0x225e9e;
      var _0x4f6cda;
      var _0x37ecf4;
      var _0x3a382c;
      var _0x3b2fb8;
      var _0x2c2065;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "a6f15DRaTNJEaqvyk6QuIo3", "LangImg", undefined);
      var _0x2b7ee6 = _0x42d118.ccclass;
      var _0x5ab267 = _0x42d118.executeInEditMode;
      var _0x4942df = _0x42d118.property;
      var _0x30e616;
      !function (_0x587d8b) {
        _0x587d8b[_0x587d8b.PNG = 0] = "PNG";
        _0x587d8b[_0x587d8b.JPG = 1] = "JPG";
      }(_0x30e616 || (_0x30e616 = {}));
      var _0x3f4b84 = {
        PNG: ".png",
        JPG: ".jpg"
      };
      _0x3b0909 = _0x2b7ee6("LangImg");
      _0x57d66d = _0x4942df({
        type: _0x374045,
        tooltip: "圖片路徑"
      });
      _0x4bd86c = _0x4942df({
        type: _0x374045,
        tooltip: "額外路徑，如果不是在game/Text/en/或otherAsttText/AsttText/en/下，請填入後續路徑"
      });
      _0x12e0c8 = _0x4942df({
        type: _0x4fa226(_0x30e616),
        tooltip: "圖片類型"
      });
      _0x50d08e = _0x4942df({
        type: _0x57c330,
        tooltip: "是否為通用圖片"
      });
      _0x6af1c0 = _0x4942df({
        type: _0x57c330,
        tooltip: "是否由這個組件來設定多語系圖片"
      });
      var _0x24f460 = _0x3b0909(_0x2bd0ff = _0x5ab267((_0x225e9e = function (_0x179e5a) {
        function _0xc20957() {
          for (var _0x4f2f1b, _0x3d6930 = arguments.length, _0x42b70f = new Array(_0x3d6930), _0x452d3e = 0; _0x452d3e < _0x3d6930; _0x452d3e++) {
            _0x42b70f[_0x452d3e] = arguments[_0x452d3e];
          }
          _0x4f841b(_0x4f2f1b = _0x179e5a.call.apply(_0x179e5a, [this].concat(_0x42b70f)) || this, "m_path", _0x4f6cda, _0x2fdb02(_0x4f2f1b));
          _0x4f841b(_0x4f2f1b, "m_extraPath", _0x37ecf4, _0x2fdb02(_0x4f2f1b));
          _0x4f841b(_0x4f2f1b, "m_imgTypeNo", _0x3a382c, _0x2fdb02(_0x4f2f1b));
          _0x4f841b(_0x4f2f1b, "m_isCommon", _0x3b2fb8, _0x2fdb02(_0x4f2f1b));
          _0x4f841b(_0x4f2f1b, "m_isUsingSetImage", _0x2c2065, _0x2fdb02(_0x4f2f1b));
          return _0x4f2f1b;
        }
        _0x567cf6(_0xc20957, _0x179e5a);
        var _0x33cad8 = _0xc20957.prototype;
        _0x33cad8.start = function () {
          this.SetImg();
        };
        _0x33cad8.SetImg = function () {
          var _0x4319bb = this;
          if (this.m_isUsingSetImage) {
            var _0x49a9f8 = null;
            if (this.m_isCommon) {
              if (!(_0x49a9f8 = _0x19b0e0.GetCommonAtlas())) {
                return void _0x19b0e0.RegisterOnCommonAltasLoadedCb(function () {
                  _0x4319bb.SetImg();
                });
              }
            } else {
              if (!(_0x49a9f8 = _0x19b0e0.GetGameAtlas())) {
                return void _0x19b0e0.RegisterOnGameAltasLoadedCb(function () {
                  _0x4319bb.SetImg();
                });
              }
            }
            var _0x2d3c41 = this.node.getComponent(_0x2f2b2d);
            _0x2d3c41 || (_0x2d3c41 = this.node.addComponent(_0x2f2b2d));
            _0x2d3c41.spriteFrame = _0x49a9f8.getSpriteFrame(this.m_path);
          }
        };
        _0x33cad8.SetPreviewImg = function () {
          this.AdjustComponentOrdering();
          this.ReadSpriteFrame();
          _0xc20957.prototype._onBeforeSerialize = function () {
            this.OnBeforeSerialize();
            return false;
          };
        };
        _0x33cad8.AdjustComponentOrdering = function () {};
        _0x33cad8.ReadSpriteFrame = function () {
          var _0x346239 = _0x12d1c6(_0x41e40d().mark(function _0x4a9408() {
            var _0x3b464a;
            var _0x2ae9c8;
            var _0xcf6719;
            var _0x33404e;
            var _0x5d25d3;
            var _0x454603;
            var _0x249beb = this;
            return _0x41e40d().wrap(function (_0x491c0f) {
              for (;;) {
                switch (_0x491c0f.prev = _0x491c0f.next) {
                  case 0:
                    if (this.m_path) {
                      _0x491c0f.next = 2;
                      break;
                    }
                    return _0x491c0f.abrupt("return");
                  case 2:
                    _0x3b464a = (this.m_isCommon ? "db://assets/otherAsttText/AsttText/en/" : "db://assets/game/Text/en/") + this.m_extraPath + this.m_path;
                    _0x2ae9c8 = ".png";
                    _0xcf6719 = _0x30e616[this.m_imgTypeNo];
                    Object.prototype.hasOwnProperty.call(_0x30e616, _0xcf6719) && (_0x33404e = _0x30e616[_0xcf6719], Number(_0x33404e) === this.m_imgTypeNo && (_0x2ae9c8 = _0x3f4b84[_0xcf6719]));
                    _0x491c0f.next = 8;
                    return Editor.Message.request("asset-db", "query-assets", {
                      importer: "sprite-frame",
                      pattern: _0x3b464a + _0x2ae9c8
                    });
                  case 8:
                    _0x5d25d3 = _0x491c0f.sent;
                    _0x454603 = {
                      uuid: _0x5d25d3[0].uuid
                    };
                    _0x5dab17.loadAny(_0x454603, function (_0x57f561, _0x36cd29) {
                      if (_0x57f561) {
                        _0x3c3cbe("Failed to load cc.SpriteFrame resources:", _0x57f561);
                      } else {
                        var _0x3e186b = _0x249beb.node.getComponent(_0x2f2b2d);
                        _0x3e186b || (_0x3e186b = _0x249beb.node.addComponent(_0x2f2b2d));
                        _0x3e186b.spriteFrame = _0x36cd29;
                      }
                    });
                  case 11:
                  case "end":
                    return _0x491c0f.stop();
                }
              }
            }, _0x4a9408, this);
          }));
          return function () {
            return _0x346239.apply(this, arguments);
          };
        }();
        _0x33cad8.OnBeforeSerialize = function () {};
        return _0xc20957;
      }(_0x5aac4b), _0x4f6cda = _0x5a72b5(_0x225e9e.prototype, "m_path", [_0x57d66d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x37ecf4 = _0x5a72b5(_0x225e9e.prototype, "m_extraPath", [_0x4bd86c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x3a382c = _0x5a72b5(_0x225e9e.prototype, "m_imgTypeNo", [_0x12e0c8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x30e616.PNG;
        }
      }), _0x3b2fb8 = _0x5a72b5(_0x225e9e.prototype, "m_isCommon", [_0x50d08e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2c2065 = _0x5a72b5(_0x225e9e.prototype, "m_isUsingSetImage", [_0x6af1c0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x2bd0ff = _0x225e9e)) || _0x2bd0ff) || _0x2bd0ff;
      var _0x3b70bd;
      var _0x343af4;
      var _0xde2411;
      var _0x5f1eb2;
      var _0x4da0cd;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "3638c7rYSpEjZ7x8wtqusdg", "RenderDataBump", undefined);
      var _0x4b8fe7 = {
        None: 0,
        Destroyed: 1,
        Requested: 2
      };
      var _0x101900 = _0x42d118.ccclass;
      var _0x2b87fa = _0x42d118.property;
      _0x3b70bd = _0x101900("RenderDataBump");
      _0x343af4 = _0x2b87fa({
        tooltip: "是否一同影響子節點"
      });
      var _0x11be96 = _0x3b70bd((_0x5f1eb2 = function (_0x1e3f3a) {
        function _0x4faaaa() {
          for (var _0x24bfec, _0x3a004c = arguments.length, _0x3949d7 = new Array(_0x3a004c), _0x5bc167 = 0; _0x5bc167 < _0x3a004c; _0x5bc167++) {
            _0x3949d7[_0x5bc167] = arguments[_0x5bc167];
          }
          _0x4f841b(_0x24bfec = _0x1e3f3a.call.apply(_0x1e3f3a, [this].concat(_0x3949d7)) || this, "affectsChildren", _0x4da0cd, _0x2fdb02(_0x24bfec));
          _0x24bfec.states = _0x4b8fe7.None;
          return _0x24bfec;
        }
        _0x567cf6(_0x4faaaa, _0x1e3f3a);
        var _0x5b8120 = _0x4faaaa.prototype;
        _0x5b8120.onLoad = function () {
          this.node.on(_0x5cf7a3.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x5b8120.onDestroy = function () {
          this.node.off(_0x5cf7a3.EventType.PARENT_CHANGED, this.checkStates, this);
        };
        _0x5b8120.checkStates = function () {
          this.node.parent ? this.states === _0x4b8fe7.Destroyed && this.requestRenderData() : this.states !== _0x4b8fe7.Requested && this.states !== _0x4b8fe7.None || this.destroyRenderData();
        };
        _0x5b8120.destroyRenderData = function () {
          var _0x244596 = this.node.getComponent(_0x556148);
          if (null == _0x244596 || _0x244596.destroyRenderData(), this.affectsChildren) {
            for (var _0x301ccf, _0x4a2199 = _0x32f29f(this.node.getComponentsInChildren(_0x556148)); !(_0x301ccf = _0x4a2199()).done;) {
              var _0x5a64ef = _0x301ccf.value;
              null == _0x5a64ef || _0x5a64ef.destroyRenderData();
            }
          }
          this.states = _0x4b8fe7.Destroyed;
        };
        _0x5b8120.requestRenderData = function () {
          var _0x461b3e = this.node.getComponent(_0x556148);
          if (null == _0x461b3e || _0x461b3e._flushAssembler(), this.affectsChildren) {
            for (var _0x40a4fa, _0x4292ec = _0x32f29f(this.node.getComponentsInChildren(_0x556148)); !(_0x40a4fa = _0x4292ec()).done;) {
              var _0x55b341 = _0x40a4fa.value;
              null == _0x55b341 || _0x55b341._flushAssembler();
            }
          }
          this.states = _0x4b8fe7.Requested;
        };
        return _0x4faaaa;
      }(_0x5aac4b), _0x4da0cd = _0x5a72b5(_0x5f1eb2.prototype, "affectsChildren", [_0x343af4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xde2411 = _0x5f1eb2)) || _0xde2411;
      var _0xc50171;
      var _0x4dacfc;
      var _0x59a7db;
      var _0x1d3276;
      var _0x20753a;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "75a969XvAFPfax+l1fDcqo9", "ScrollEventHandler", undefined);
      var _0x56e70e = _0x42d118.ccclass;
      var _0x170590 = _0x42d118.property;
      _0xc50171 = _0x56e70e("ScrollEventHandler");
      _0x4dacfc = _0x170590({
        type: _0x5cf7a3,
        tooltip: "真實放置內容的節點，有自行分層請把每一層的根節點放進去"
      });
      var _0x5dfec1 = _0xc50171((_0x1d3276 = function (_0x181d81) {
        function _0x410a62() {
          for (var _0x21cd72, _0x58bdf2 = arguments.length, _0x4d4284 = new Array(_0x58bdf2), _0xbcca70 = 0; _0xbcca70 < _0x58bdf2; _0xbcca70++) {
            _0x4d4284[_0xbcca70] = arguments[_0xbcca70];
          }
          _0x4f841b(_0x21cd72 = _0x181d81.call.apply(_0x181d81, [this].concat(_0x4d4284)) || this, "m_contents", _0x20753a, _0x2fdb02(_0x21cd72));
          _0x21cd72.m_scrollView = null;
          _0x21cd72.m_redundantSpace_Y = 0;
          return _0x21cd72;
        }
        _0x567cf6(_0x410a62, _0x181d81);
        var _0x298bfc = _0x410a62.prototype;
        _0x298bfc.start = function () {
          var _0x37c801 = this;
          this.m_scrollView = this.node.getComponent(_0x2b6286);
          this.m_scrollView ? this.m_scrollView.node.on(_0x2b6286.EventType.SCROLLING, function () {
            _0x37c801.CheckCellVisible();
          }) : _0x3c3cbe("ScrollView is null");
          0 === this.m_contents.length && this.m_contents.push(this.m_scrollView.content);
        };
        _0x298bfc.CheckCellVisible = function () {
          if (this.m_scrollView && this.m_scrollView.view) {
            for (var _0x1937b6 = 0; _0x1937b6 < this.m_contents.length; _0x1937b6++) {
              for (var _0x195dda = this.m_contents[_0x1937b6].children, _0x183370 = this.GetTopLeftWorld(this.m_scrollView.view.node), _0x44c35e = this.GetBottomRightWorld(this.m_scrollView.view.node), _0x1dbbf8 = 0; _0x1dbbf8 < _0x195dda.length; _0x1dbbf8++) {
                var _0x52c3ba = _0x195dda[_0x1dbbf8];
                var _0x204cbd = _0x52c3ba.getComponent(_0x4ed45d);
                _0x204cbd || (_0x204cbd = _0x52c3ba.addComponent(_0x4ed45d));
                var _0x439a14 = this.GetTopLeftWorld(_0x52c3ba);
                var _0x1d1073 = this.GetBottomRightWorld(_0x52c3ba);
                this.IsInside(_0x439a14, _0x183370, _0x44c35e) || this.IsInside(_0x1d1073, _0x183370, _0x44c35e) ? _0x204cbd.opacity = 255 : _0x204cbd.opacity = 0;
              }
            }
          }
        };
        _0x298bfc.GetTopLeftWorld = function (_0x24ebc8) {
          var _0x591be2 = _0x24ebc8.getPosition();
          var _0x2970cb = _0x24ebc8.getComponent(_0x45bc58).contentSize;
          var _0x48e591 = _0x24ebc8.getComponent(_0x45bc58).anchorPoint;
          var _0x591fd0 = new _0x507581(_0x591be2.x - _0x2970cb.width * _0x48e591.x, _0x591be2.y - _0x2970cb.height * _0x48e591.y, _0x591be2.z);
          return _0x24ebc8.parent.getComponent(_0x45bc58).convertToWorldSpaceAR(_0x591fd0);
        };
        _0x298bfc.GetBottomRightWorld = function (_0x5b3ec0) {
          var _0x11d43e = _0x5b3ec0.getPosition();
          var _0x376fcb = _0x5b3ec0.getComponent(_0x45bc58).contentSize;
          var _0x4e001b = _0x5b3ec0.getComponent(_0x45bc58).anchorPoint;
          var _0x2dc8b6 = new _0x507581(_0x11d43e.x + _0x376fcb.width * (1 - _0x4e001b.x), _0x11d43e.y + _0x376fcb.height * (1 - _0x4e001b.y), _0x11d43e.z);
          return _0x5b3ec0.parent.getComponent(_0x45bc58).convertToWorldSpaceAR(_0x2dc8b6);
        };
        _0x298bfc.IsInside = function (_0x53dd5, _0x38941a, _0xa947c4) {
          return _0x53dd5.x >= _0x38941a.x && _0x53dd5.y >= _0x38941a.y - this.m_redundantSpace_Y && _0x53dd5.x <= _0xa947c4.x && _0x53dd5.y <= _0xa947c4.y + this.m_redundantSpace_Y;
        };
        _0x54ea23(_0x410a62, [{
          key: "RedundantSpace_Y",
          set: function (_0x27ddf8) {
            this.m_redundantSpace_Y = _0x27ddf8;
          }
        }]);
        return _0x410a62;
      }(_0x5aac4b), _0x20753a = _0x5a72b5(_0x1d3276.prototype, "m_contents", [_0x4dacfc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x59a7db = _0x1d3276)) || _0x59a7db;
      var _0x3c5001;
      var _0x4a2037;
      var _0x5e8b12;
      var _0x5a28ff;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "eb577rwRR5ASa6OivNuPgEY", "SeriesComponent", undefined);
      var _0x53b5ba = _0x42d118.ccclass;
      var _0x5f598c = _0x42d118.property;
      _0x3c5001 = _0x5f598c({
        type: _0x1a25c9.Skeleton,
        tooltip: "spine"
      });
      var _0x196306 = _0x53b5ba((_0x5e8b12 = function (_0x1f50ef) {
        function _0x38be2b() {
          for (var _0x560f47, _0xe98c0a = arguments.length, _0x2a35c5 = new Array(_0xe98c0a), _0x303582 = 0; _0x303582 < _0xe98c0a; _0x303582++) {
            _0x2a35c5[_0x303582] = arguments[_0x303582];
          }
          _0x4f841b(_0x560f47 = _0x1f50ef.call.apply(_0x1f50ef, [this].concat(_0x2a35c5)) || this, "m_spine", _0x5a28ff, _0x2fdb02(_0x560f47));
          return _0x560f47;
        }
        _0x567cf6(_0x38be2b, _0x1f50ef);
        var _0x3f951a = _0x38be2b.prototype;
        _0x3f951a.ShowGameIntro = function () {
          var _0x31f70a = _0x12d1c6(_0x41e40d().mark(function _0x4c43c4(_0x55a131, _0x3bc69c) {
            var _0x590de0;
            var _0x291680;
            return _0x41e40d().wrap(function (_0x2dbc5b) {
              for (;;) {
                switch (_0x2dbc5b.prev = _0x2dbc5b.next) {
                  case 0:
                    _0x590de0 = _0x55a131 ? "GameIntro_L" : "GameIntro_S";
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x291680 = function (_0x3568a7) {
                      "AnimationEvent" === _0x3568a7 && (null == _0x3bc69c || _0x3bc69c());
                    };
                    _0x2dbc5b.next = 6;
                    return _0x8c49d5.PlayAnimation(this.m_spine, _0x590de0, false, 0, _0x291680);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x2dbc5b.stop();
                }
              }
            }, _0x4c43c4, this);
          }));
          return function (_0x3cba54, _0x94114f) {
            return _0x31f70a.apply(this, arguments);
          };
        }();
        _0x3f951a.ShowFGDeclare = function () {
          var _0x115b1d = _0x12d1c6(_0x41e40d().mark(function _0x2bea41(_0x54754a, _0x5b4dc7) {
            var _0x14d283;
            var _0x35ed3d;
            return _0x41e40d().wrap(function (_0x5680c1) {
              for (;;) {
                switch (_0x5680c1.prev = _0x5680c1.next) {
                  case 0:
                    _0x14d283 = _0x54754a ? "FG_Declare_Start_L" : "FG_Declare_Start_S";
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x35ed3d = function (_0x361737) {
                      "AnimationEvent" === _0x361737 && (null == _0x5b4dc7 || _0x5b4dc7());
                    };
                    _0x5680c1.next = 6;
                    return _0x8c49d5.PlayAnimation(this.m_spine, _0x14d283, false, 0, _0x35ed3d);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x5680c1.stop();
                }
              }
            }, _0x2bea41, this);
          }));
          return function (_0x20bb8c, _0x40362e) {
            return _0x115b1d.apply(this, arguments);
          };
        }();
        _0x3f951a.ShowFGCompliment = function () {
          var _0x3b50cb = _0x12d1c6(_0x41e40d().mark(function _0x1ef8ca(_0x7560b4, _0x46f96b) {
            var _0x534b26;
            var _0x557e0c;
            return _0x41e40d().wrap(function (_0x2fc5e8) {
              for (;;) {
                switch (_0x2fc5e8.prev = _0x2fc5e8.next) {
                  case 0:
                    _0x534b26 = _0x7560b4 ? "FG_Compliment_Start_L" : "FG_Compliment_Start_S";
                    this.node.active = true;
                    this.m_spine.paused = false;
                    _0x557e0c = function (_0x4c0a84) {
                      "AnimationEvent" === _0x4c0a84 && (null == _0x46f96b || _0x46f96b());
                    };
                    _0x2fc5e8.next = 6;
                    return _0x8c49d5.PlayAnimation(this.m_spine, _0x534b26, false, 0, _0x557e0c);
                  case 6:
                    this.node.active = false;
                  case 7:
                  case "end":
                    return _0x2fc5e8.stop();
                }
              }
            }, _0x1ef8ca, this);
          }));
          return function (_0xd3bf14, _0x35838b) {
            return _0x3b50cb.apply(this, arguments);
          };
        }();
        _0x3f951a.Prepare = function (_0xb6a5ce) {
          this.node.active = true;
          this.m_spine.paused = false;
          this.m_spine.clearTracks();
          this.m_spine.setToSetupPose();
          _0x8c49d5.PlayAnimation(this.m_spine, _0xb6a5ce ? "GameIntro_L" : "GameIntro_S");
          this.m_spine.paused = true;
        };
        _0x3f951a.Rotation = function (_0x4cca28) {
          if (this.node.active) {
            var _0x5b7222 = _0x4cca28 ? "GameIntro_L" : "GameIntro_S";
            this.m_spine.paused = false;
            this.m_spine.clearTracks();
            this.m_spine.setToSetupPose();
            _0x8c49d5.PlayAnimation(this.m_spine, _0x5b7222);
            this.m_spine.paused = true;
          }
        };
        return _0x38be2b;
      }(_0x5aac4b), _0x5a28ff = _0x5a72b5(_0x5e8b12.prototype, "m_spine", [_0x3c5001], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4a2037 = _0x5e8b12)) || _0x4a2037;
      var _0x53d81a;
      var _0xfdc391;
      var _0x164d98;
      var _0x5adc81;
      var _0x2c4f18;
      var _0x1bb36a;
      var _0x3fb857;
      var _0x2028ce;
      var _0x1c2683;
      var _0xc28496;
      var _0x1e1a42;
      var _0x82ceb8;
      var _0x1732d0;
      var _0x3415f7;
      var _0x262100;
      var _0x2b5eb7;
      var _0x3e70d9;
      var _0x2e54c2;
      var _0x4c038f;
      var _0x45ff33;
      var _0x2da4e5;
      var _0x3079ee;
      var _0x471106;
      var _0x18d2c4;
      var _0x176a44;
      var _0x1c7639;
      var _0x3e99b3;
      var _0x48bfcc;
      var _0x405b42;
      var _0x47e9c4;
      var _0x2c1409;
      var _0x530a14;
      var _0x18dd0f;
      var _0x3883cf;
      var _0x30d519;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "18f47v83XtI64h+ISwRgq3A", "BoneFollow", undefined);
      var _0x3529d4 = _0x42d118.ccclass;
      var _0x40498e = _0x42d118.property;
      var _0x195744 = _0x42d118.menu;
      var _0x1b4852 = {
        None: 0
      };
      var _0xaa77be = _0x4fa226(_0x1b4852);
      var _0x411895 = 3.1415927;
      var _0x4bf397 = _0x411895 / 180;
      var _0x319829 = 180 / _0x411895;
      function _0x4520a6(_0x4281db) {
        return Math.cos(_0x4281db * _0x4bf397);
      }
      function _0x2fb23c(_0x34bdb2) {
        return Math.sin(_0x34bdb2 * _0x4bf397);
      }
      function _0x1cf5af(_0xad8a78, _0xcc56aa, _0x50d090, _0x3e7b0e, _0x512b6e) {
        var _0x4f9903 = _0x2fb23c(_0x512b6e);
        var _0x54d9a7 = _0x4520a6(_0x512b6e);
        return Math.atan2(_0x54d9a7 * _0x50d090 + _0x4f9903 * _0x3e7b0e, _0x54d9a7 * _0xad8a78 + _0x4f9903 * _0xcc56aa) * _0x319829;
      }
      _0x53d81a = _0x3529d4("BoneFollow");
      _0xfdc391 = _0x195744("Chiron/Spine/BoneFollow");
      _0x164d98 = _0x40498e({
        type: _0x1a25c9.Skeleton,
        tooltip: "目標 Spine 骨架"
      });
      _0x5adc81 = _0x40498e({
        tooltip: "目標同步骨骼名稱"
      });
      _0x2c4f18 = _0x40498e({
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x1bb36a = _0x40498e({
        tooltip: "是否同步位置"
      });
      _0x3fb857 = _0x40498e({
        tooltip: "是否同步旋轉"
      });
      _0x2028ce = _0x40498e({
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x1c2683 = _0x40498e({
        tooltip: "是否同步縮放"
      });
      _0xc28496 = _0x40498e({
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0x1e1a42 = _0x40498e({
        visible: false
      });
      _0x82ceb8 = _0x40498e({
        type: _0xaa77be,
        visible: true,
        displayName: "Bone"
      });
      _0x1732d0 = _0x40498e({
        visible: true,
        displayName: "Preview"
      });
      _0x3415f7 = _0x40498e({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x262100 = _0x40498e({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_isFollowScale;
        }
      });
      _0x2b5eb7 = _0x40498e({
        type: _0x4c38e3,
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_isFollowPosition;
        }
      });
      _0x3e70d9 = _0x40498e({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_isFollowRotation;
        }
      });
      var _0x420b53 = _0x53d81a(_0x2e54c2 = _0xfdc391((_0x30d519 = function (_0x457eee) {
        function _0x4b72b8() {
          for (var _0x1d1009, _0x383037 = arguments.length, _0x24fd72 = new Array(_0x383037), _0x1c0416 = 0; _0x1c0416 < _0x383037; _0x1c0416++) {
            _0x24fd72[_0x1c0416] = arguments[_0x1c0416];
          }
          (_0x1d1009 = _0x457eee.call.apply(_0x457eee, [this].concat(_0x24fd72)) || this).editor = undefined;
          _0x4f841b(_0x1d1009, "m_spineSkeleton", _0x45ff33, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_boneName", _0x2da4e5, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isCacheData", _0x3079ee, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isFollowPosition", _0x471106, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isFollowRotation", _0x18d2c4, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isRotationLocalization", _0x176a44, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isFollowScale", _0x1c7639, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_isScaleLocalization", _0x3e99b3, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "__boneIndex", _0x48bfcc, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "_boneIndex", _0x405b42, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_preview", _0x47e9c4, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_cacheAncestors", _0x2c1409, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_scaleFactor", _0x530a14, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_positionOffset", _0x18dd0f, _0x2fdb02(_0x1d1009));
          _0x4f841b(_0x1d1009, "m_rotationFactor", _0x3883cf, _0x2fdb02(_0x1d1009));
          _0x1d1009._oldAngle = 0;
          _0x1d1009._oldScaleX = 1;
          _0x1d1009._oldScaleY = 1;
          _0x1d1009._isCached = false;
          _0x1d1009._cachedRotation = 0;
          _0x1d1009._cachedScaleX = 1;
          _0x1d1009._cachedScaleY = 1;
          return _0x1d1009;
        }
        _0x567cf6(_0x4b72b8, _0x457eee);
        var _0x6c3789 = _0x4b72b8.prototype;
        _0x6c3789.__preload = function () {};
        _0x6c3789.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x6c3789.update = function () {
          if (this.m_spineSkeleton && "" != this.m_boneName && (this.m_isFollowPosition || this.m_isFollowRotation || this.m_isFollowScale)) {
            var _0x543c9f = null;
            if (_0x543c9f = this.m_spineSkeleton.findBone(this.m_boneName)) {
              var _0x944c6d;
              var _0x3741e5;
              var _0x114fbc;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x11266b = 0, _0x2b23f = 0, _0x256435 = 1, _0xbb6c5a = 1, _0x123050 = 1, _0x33ed69 = 1, _0x29cfcd = this.m_spineSkeleton.node; _0x29cfcd;) {
                  _0x256435 *= _0x29cfcd.scale.x;
                  _0xbb6c5a *= _0x29cfcd.scale.y;
                  _0x11266b += _0x29cfcd.angle;
                  _0x29cfcd = _0x29cfcd.parent;
                }
                for (_0x29cfcd = this.node.parent; _0x29cfcd;) {
                  _0x123050 *= _0x29cfcd.scale.x;
                  _0x33ed69 *= _0x29cfcd.scale.y;
                  _0x2b23f -= _0x29cfcd.angle;
                  _0x29cfcd = _0x29cfcd.parent;
                }
                this._cachedRotation = _0x11266b + _0x2b23f;
                this._cachedScaleX = _0x256435 / _0x123050;
                this._cachedScaleY = _0xbb6c5a / _0x33ed69;
                this._isCached = true;
              }
              if (_0x944c6d = this.m_isRotationLocalization ? this._cachedRotation : this._oldAngle, _0x3741e5 = this.m_isScaleLocalization ? this._cachedScaleX : this._oldScaleX, _0x114fbc = this.m_isScaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_isFollowRotation) {
                var _0x2dbc30 = _0x543c9f.parent;
                var _0x1de1cd = _0x543c9f.arotation;
                this.node.angle = _0x944c6d + (_0x1d5d85(_0x2dbc30) ? _0x1cf5af(_0x2dbc30.a, _0x2dbc30.b, _0x2dbc30.c, _0x2dbc30.d, _0x1de1cd) : _0x543c9f.arotation) + this.m_rotationFactor;
              }
              if (this.m_isFollowScale && this.node.setScale(_0x3741e5 * _0x543c9f.getWorldScaleX() * this.m_scaleFactor.x, _0x114fbc * _0x543c9f.getWorldScaleY() * this.m_scaleFactor.y), this.m_isFollowPosition) {
                var _0x4544f4 = this.m_spineSkeleton.node.getComponent(_0x45bc58).convertToWorldSpaceAR(_0x2af1b6(_0x543c9f.worldX, _0x543c9f.worldY, 0));
                var _0x38c1a4 = this.node.parent.getComponent(_0x45bc58).convertToNodeSpaceAR(_0x4544f4);
                this.node.setPosition(_0x2af1b6(_0x38c1a4.x + this.m_positionOffset.x, _0x38c1a4.y + this.m_positionOffset.y));
              }
            }
          }
        };
        _0x6c3789.onDestroy = function () {
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
        _0x6c3789.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x6c3789._refreshInspector = function () {
          this._updateBoneEnum();
        };
        _0x6c3789._boneEnum = function () {
          var _0x4109be = _0x15ae44(_0x1b4852);
          this.m_spineSkeleton;
          return _0x4109be;
        };
        _0x6c3789._updateBoneEnum = function () {};
        return _0x4b72b8;
      }(_0x5aac4b), _0x30d519.BoneFollow = "BoneFollow", _0x4c038f = _0x30d519, _0x45ff33 = _0x5a72b5(_0x4c038f.prototype, "m_spineSkeleton", [_0x164d98], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x2da4e5 = _0x5a72b5(_0x4c038f.prototype, "m_boneName", [_0x5adc81], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x3079ee = _0x5a72b5(_0x4c038f.prototype, "m_isCacheData", [_0x2c4f18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x471106 = _0x5a72b5(_0x4c038f.prototype, "m_isFollowPosition", [_0x1bb36a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x18d2c4 = _0x5a72b5(_0x4c038f.prototype, "m_isFollowRotation", [_0x3fb857], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x176a44 = _0x5a72b5(_0x4c038f.prototype, "m_isRotationLocalization", [_0x2028ce], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1c7639 = _0x5a72b5(_0x4c038f.prototype, "m_isFollowScale", [_0x1c2683], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3e99b3 = _0x5a72b5(_0x4c038f.prototype, "m_isScaleLocalization", [_0xc28496], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x48bfcc = _0x5a72b5(_0x4c038f.prototype, "__boneIndex", [_0x1e1a42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x405b42 = _0x5a72b5(_0x4c038f.prototype, "_boneIndex", [_0x82ceb8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xaa77be.None;
        }
      }), _0x47e9c4 = _0x5a72b5(_0x4c038f.prototype, "m_preview", [_0x1732d0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x2c1409 = _0x5a72b5(_0x4c038f.prototype, "m_cacheAncestors", [_0x3415f7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x530a14 = _0x5a72b5(_0x4c038f.prototype, "m_scaleFactor", [_0x262100], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x2ea746(1, 1);
        }
      }), _0x18dd0f = _0x5a72b5(_0x4c038f.prototype, "m_positionOffset", [_0x2b5eb7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x2ea746(0, 0);
        }
      }), _0x3883cf = _0x5a72b5(_0x4c038f.prototype, "m_rotationFactor", [_0x3e70d9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x2e54c2 = _0x4c038f)) || _0x2e54c2) || _0x2e54c2;
      var _0x1457e7;
      var _0x1bfba1;
      var _0x350e34;
      var _0x519038;
      var _0x4bee6a;
      var _0x3788ca;
      var _0x1237fd;
      var _0x4555de;
      var _0xb7b0fa;
      var _0x22fe34;
      var _0x15d2f6;
      var _0x44e316;
      var _0x3c89f2;
      var _0xe913ba;
      var _0x9c526c;
      var _0x9cd4a6;
      var _0x34f91c;
      var _0x38e365;
      var _0x4f56bf;
      var _0x63bed7;
      var _0x4a168a;
      var _0x5803cc;
      var _0x3ce361;
      var _0x3ca564;
      var _0x18b70a;
      var _0x461920;
      var _0xd7ad6;
      var _0x30e6d4;
      var _0x3a75ac;
      var _0x155ca0;
      var _0x29c019;
      var _0x1c657d;
      var _0xb30eb6;
      var _0x1d8f17;
      var _0x203d96;
      var _0x347db2;
      var _0x237354;
      var _0x8cd93b;
      var _0x5136ae;
      var _0x58648d;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "44834DdFVNM2reoglp7HL82", "NewBoneFollow", undefined);
      var _0x3a97d4 = _0x42d118.ccclass;
      var _0x2ff91f = _0x42d118.property;
      var _0x47e223 = _0x42d118.executeInEditMode;
      var _0x5c859b;
      !function (_0x7cd5e2) {
        _0x7cd5e2[_0x7cd5e2.default = 1] = "default";
      }(_0x5c859b || (_0x5c859b = {}));
      var _0x1a0bb9 = _0x4fa226({});
      var _0x3a9f9f = 3.1415927;
      var _0x2a5aeb = _0x3a9f9f / 180;
      var _0x194a72 = 180 / _0x3a9f9f;
      function _0x4523c2(_0x418820) {
        return Math.cos(_0x418820 * _0x2a5aeb);
      }
      function _0x1bcc41(_0xa27496) {
        return Math.sin(_0xa27496 * _0x2a5aeb);
      }
      function _0x285412(_0x273e70, _0x1d74c8, _0x13491f, _0x1220a8, _0x1dbd55) {
        var _0x37463f = _0x1bcc41(_0x1dbd55);
        var _0x48fc8a = _0x4523c2(_0x1dbd55);
        return Math.atan2(_0x48fc8a * _0x13491f + _0x37463f * _0x1220a8, _0x48fc8a * _0x273e70 + _0x37463f * _0x1d74c8) * _0x194a72;
      }
      _0x1457e7 = _0x3a97d4("NewBoneFollow");
      _0x1bfba1 = _0x2ff91f({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x350e34 = _0x2ff91f({
        visible: false,
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x519038 = _0x2ff91f({
        visible: false,
        tooltip: "是否同步位置"
      });
      _0x4bee6a = _0x2ff91f({
        visible: false,
        tooltip: "是否同步旋轉"
      });
      _0x3788ca = _0x2ff91f({
        visible: false,
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度"
      });
      _0x1237fd = _0x2ff91f({
        visible: false,
        tooltip: "是否同步縮放"
      });
      _0x4555de = _0x2ff91f({
        visible: false,
        tooltip: "是否將目標縮放量轉換成區域縮放量"
      });
      _0xb7b0fa = _0x2ff91f({
        visible: true,
        displayName: "Preview"
      });
      _0x22fe34 = _0x2ff91f({
        type: _0x1a25c9.Skeleton,
        visible: false
      });
      _0x15d2f6 = _0x2ff91f({
        visible: true,
        type: _0x1a25c9.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x44e316 = _0x2ff91f({
        visible: false
      });
      _0x3c89f2 = _0x2ff91f({
        visible: true,
        displayName: "BoneName",
        tooltip: "請輸入要跟隨的 Spine 骨頭名稱或從下拉選單選擇"
      });
      _0xe913ba = _0x2ff91f({
        type: _0x1a0bb9,
        visible: false
      });
      _0x9c526c = _0x2ff91f({
        type: _0x1a0bb9,
        visible: true,
        displayName: "SelectFromList",
        tooltip: "可從此下拉選單選擇骨頭"
      });
      _0x9cd4a6 = _0x2ff91f({
        displayName: "Cache Ancestors",
        tooltip: "是否快取旋轉及縮放的上層資料，預設開啟。如果父層以上會有動態調整旋轉及縮放則需取消勾選此選項，或是維持啟用狀態但於需要的時刻呼叫 CacheUpdate 方法"
      });
      _0x34f91c = _0x2ff91f({
        displayName: "Position",
        tooltip: "是否同步位置"
      });
      _0x38e365 = _0x2ff91f({
        displayName: "Position Offset",
        tooltip: "額外本體位置偏移",
        visible: function () {
          return this.m_followPosition;
        }
      });
      _0x4f56bf = _0x2ff91f({
        displayName: "Rotation",
        tooltip: "是否同步旋轉"
      });
      _0x63bed7 = _0x2ff91f({
        displayName: "Rotation Localization",
        tooltip: "是否將目標旋轉角度轉換成區域旋轉角度",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0x4a168a = _0x2ff91f({
        displayName: "Rotation Factor",
        tooltip: "額外本體旋轉",
        visible: function () {
          return this.m_followRotation;
        }
      });
      _0x5803cc = _0x2ff91f({
        displayName: "Scale",
        tooltip: "是否同步縮放"
      });
      _0x3ce361 = _0x2ff91f({
        displayName: "Scale Localization",
        tooltip: "是否將目標縮放量轉換成區域縮放量",
        visible: function () {
          return this.m_followScale;
        }
      });
      _0x3ca564 = _0x2ff91f({
        displayName: "Scale Factor",
        tooltip: "額外本體大小縮放",
        visible: function () {
          return this.m_followScale;
        }
      });
      var _0x292a11 = _0x1457e7(_0x18b70a = _0x47e223((_0x58648d = function (_0x434b5d) {
        function _0xe0dbc3() {
          for (var _0x2f1f03, _0x583965 = arguments.length, _0x3e39a7 = new Array(_0x583965), _0x759964 = 0; _0x759964 < _0x583965; _0x759964++) {
            _0x3e39a7[_0x759964] = arguments[_0x759964];
          }
          (_0x2f1f03 = _0x434b5d.call.apply(_0x434b5d, [this].concat(_0x3e39a7)) || this)._oldAngle = 0;
          _0x2f1f03._oldScaleX = 1;
          _0x2f1f03._oldScaleY = 1;
          _0x2f1f03._isCached = false;
          _0x2f1f03._cachedRotation = 0;
          _0x2f1f03._cachedScaleX = 1;
          _0x2f1f03._cachedScaleY = 1;
          _0x2f1f03._BoneEnumList = [];
          _0x4f841b(_0x2f1f03, "m_preview", _0xd7ad6, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_spineSkeleton", _0x30e6d4, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_boneName", _0x3a75ac, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "__boneIndex", _0x155ca0, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_cacheAncestors", _0x29c019, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_followPosition", _0x1c657d, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_positionOffset", _0xb30eb6, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_followRotation", _0x1d8f17, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_rotationLocalization", _0x203d96, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_rotationFactor", _0x347db2, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_followScale", _0x237354, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_scaleLocalization", _0x8cd93b, _0x2fdb02(_0x2f1f03));
          _0x4f841b(_0x2f1f03, "m_scaleFactor", _0x5136ae, _0x2fdb02(_0x2f1f03));
          _0x2f1f03.m_isFirstActive = true;
          return _0x2f1f03;
        }
        _0x567cf6(_0xe0dbc3, _0x434b5d);
        var _0x7d1ed5 = _0xe0dbc3.prototype;
        _0x7d1ed5.CacheUpdate = function () {
          this._isCached = false;
        };
        _0x7d1ed5.__preload = function () {};
        _0x7d1ed5.onLoad = function () {
          this._oldAngle = this.node.angle;
          this._oldScaleX = this.node.scale.x;
          this._oldScaleY = this.node.scale.y;
        };
        _0x7d1ed5.start = function () {};
        _0x7d1ed5.onEnable = function () {
          _0x60819.on(_0x17a860.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x7d1ed5.onDisable = function () {
          _0x60819.off(_0x17a860.EVENT_BEFORE_DRAW, this.BoneSync, this);
        };
        _0x7d1ed5.onDestroy = function () {
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
        _0x7d1ed5.BoneSync = function () {
          if (this.m_isFirstActive && this.m_spineSkeleton && this.m_spineSkeleton._skeleton && (this.m_isFirstActive = false, this.m_spineSkeleton._skeleton.updateWorldTransform()), this.m_spineSkeleton && "" != this.m_boneName && (this.m_followPosition || this.m_followRotation || this.m_followScale)) {
            var _0xf86032 = this.m_spineSkeleton.findBone(this.m_boneName);
            if (_0xf86032) {
              var _0x5ea92b;
              var _0x4f7b28;
              var _0x293b0b;
              if (!this.m_cacheAncestors || !this._isCached) {
                for (var _0x40f645 = 0, _0xf6e90a = 0, _0x4d2d08 = 1, _0x1a4e87 = 1, _0x43d650 = 1, _0x3496ae = 1, _0x435a7a = this.m_spineSkeleton.node; _0x435a7a;) {
                  _0x4d2d08 *= _0x435a7a.scale.x;
                  _0x1a4e87 *= _0x435a7a.scale.y;
                  _0x435a7a.angle && (_0x40f645 += _0x435a7a.angle);
                  _0x435a7a = _0x435a7a.parent;
                }
                for (_0x435a7a = this.node.parent; _0x435a7a;) {
                  _0x43d650 *= _0x435a7a.scale.x;
                  _0x3496ae *= _0x435a7a.scale.y;
                  _0x435a7a.angle && (_0xf6e90a -= _0x435a7a.angle);
                  _0x435a7a = _0x435a7a.parent;
                }
                this._cachedRotation = _0x40f645 + _0xf6e90a;
                this._cachedScaleX = _0x4d2d08 / _0x43d650;
                this._cachedScaleY = _0x1a4e87 / _0x3496ae;
                this._isCached = true;
              }
              if (_0x5ea92b = this.m_rotationLocalization ? this._cachedRotation : this._oldAngle, _0x4f7b28 = this.m_scaleLocalization ? this._cachedScaleX : this._oldScaleX, _0x293b0b = this.m_scaleLocalization ? this._cachedScaleY : this._oldScaleY, this.m_followRotation) {
                var _0x3dcaab = _0xf86032.parent;
                var _0x391e86 = _0xf86032.arotation;
                var _0x867dbf = _0x5ea92b + (_0x1d5d85(_0x3dcaab) ? _0x285412(_0x3dcaab.a, _0x3dcaab.b, _0x3dcaab.c, _0x3dcaab.d, _0x391e86) : _0xf86032.arotation) + this.m_rotationFactor;
                this.node.setRotationFromEuler(_0x2af1b6(0, 0, _0x867dbf));
              }
              if (this.m_followScale && this.node.setScale(_0x4f7b28 * _0xf86032.getWorldScaleX() * this.m_scaleFactor.x, _0x293b0b * _0xf86032.getWorldScaleY() * this.m_scaleFactor.y), this.m_followPosition) {
                var _0x2ffd60 = this.m_spineSkeleton.node.getComponent(_0x45bc58).convertToWorldSpaceAR(_0x2af1b6(_0xf86032.worldX + this.m_positionOffset.x, _0xf86032.worldY + this.m_positionOffset.y, 0));
                var _0x3f8589 = this.node.parent.getComponent(_0x45bc58).convertToNodeSpaceAR(_0x2ffd60);
                this.node.setPosition(_0x2af1b6(_0x3f8589.x, _0x3f8589.y));
              }
            }
          }
        };
        _0x7d1ed5._refreshInspector = function () {};
        _0x7d1ed5._updateBoneEnum = function () {};
        _0x54ea23(_0xe0dbc3, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x214da5) {
            this.m_spineSkeleton = _0x214da5;
          }
        }, {
          key: "CacheData",
          get: function () {
            return this.m_cacheData;
          },
          set: function (_0x334339) {
            this.m_cacheData = _0x334339;
          }
        }, {
          key: "FollowPosition",
          get: function () {
            return this.m_followPosition;
          },
          set: function (_0x33b0e5) {
            this.m_followPosition = _0x33b0e5;
          }
        }, {
          key: "FollowRotation",
          get: function () {
            return this.m_followRotation;
          },
          set: function (_0x2246ae) {
            this.m_followRotation = _0x2246ae;
          }
        }, {
          key: "RotationLocalization",
          get: function () {
            return this.m_rotationLocalization;
          },
          set: function (_0x5df2f2) {
            this.m_rotationLocalization = _0x5df2f2;
          }
        }, {
          key: "FollowScale",
          get: function () {
            return this.m_followScale;
          },
          set: function (_0x11f93c) {
            this.m_followScale = _0x11f93c;
          }
        }, {
          key: "ScaleLocalization",
          get: function () {
            return this.m_scaleLocalization;
          },
          set: function (_0x52a4bd) {
            this.m_scaleLocalization = _0x52a4bd;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x5207ee) {
            console.log("set _spineSkeleton ", this.m_spineSkeleton, "value", _0x5207ee);
            this.m_spineSkeleton = _0x5207ee;
            this._refreshInspector();
          }
        }, {
          key: "BoneName",
          get: function () {
            return this.m_boneName;
          },
          set: function (_0x2ddc11) {
            this.m_boneName = _0x2ddc11;
            var _0x132a71 = false;
            this._BoneEnumList.forEach(function (_0x57de27) {
              _0x57de27.name != _0x2ddc11 || (_0x132a71 = true);
            });
            0 == _0x132a71 ? console.log("[spBoneFollow] 輸入的骨頭", _0x2ddc11, "並不存在！請檢查名稱是否正確！") : console.log("[spBoneFollow] 輸入的骨頭", _0x2ddc11, "已找到！");
          }
        }, {
          key: "_boneIndex",
          get: function () {
            return this.__boneIndex;
          },
          set: function (_0x437de0) {
            var _0xfb2e4a = this;
            this.__boneIndex = _0x437de0;
            this._BoneEnumList.forEach(function (_0x282032) {
              _0x282032.value == _0x437de0 && (_0xfb2e4a.m_boneName = _0x282032.name);
            });
            this.__boneIndex = 0;
            console.log("set __boneIndex ", _0x437de0, "m_boneName:", this.m_boneName);
          }
        }]);
        return _0xe0dbc3;
      }(_0x5aac4b), _0x58648d.NewBoneFollow = "NewBoneFollow", _0x461920 = _0x58648d, _0x5a72b5(_0x461920.prototype, "Skeleton", [_0x1bfba1], Object.getOwnPropertyDescriptor(_0x461920.prototype, "Skeleton"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "CacheData", [_0x350e34], Object.getOwnPropertyDescriptor(_0x461920.prototype, "CacheData"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "FollowPosition", [_0x519038], Object.getOwnPropertyDescriptor(_0x461920.prototype, "FollowPosition"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "FollowRotation", [_0x4bee6a], Object.getOwnPropertyDescriptor(_0x461920.prototype, "FollowRotation"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "RotationLocalization", [_0x3788ca], Object.getOwnPropertyDescriptor(_0x461920.prototype, "RotationLocalization"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "FollowScale", [_0x1237fd], Object.getOwnPropertyDescriptor(_0x461920.prototype, "FollowScale"), _0x461920.prototype), _0x5a72b5(_0x461920.prototype, "ScaleLocalization", [_0x4555de], Object.getOwnPropertyDescriptor(_0x461920.prototype, "ScaleLocalization"), _0x461920.prototype), _0xd7ad6 = _0x5a72b5(_0x461920.prototype, "m_preview", [_0xb7b0fa], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x30e6d4 = _0x5a72b5(_0x461920.prototype, "m_spineSkeleton", [_0x22fe34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x461920.prototype, "_spineSkeleton", [_0x15d2f6], Object.getOwnPropertyDescriptor(_0x461920.prototype, "_spineSkeleton"), _0x461920.prototype), _0x3a75ac = _0x5a72b5(_0x461920.prototype, "m_boneName", [_0x44e316], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x5a72b5(_0x461920.prototype, "BoneName", [_0x3c89f2], Object.getOwnPropertyDescriptor(_0x461920.prototype, "BoneName"), _0x461920.prototype), _0x155ca0 = _0x5a72b5(_0x461920.prototype, "__boneIndex", [_0xe913ba], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x5c859b.default;
        }
      }), _0x5a72b5(_0x461920.prototype, "_boneIndex", [_0x9c526c], Object.getOwnPropertyDescriptor(_0x461920.prototype, "_boneIndex"), _0x461920.prototype), _0x29c019 = _0x5a72b5(_0x461920.prototype, "m_cacheAncestors", [_0x9cd4a6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x1c657d = _0x5a72b5(_0x461920.prototype, "m_followPosition", [_0x34f91c], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xb30eb6 = _0x5a72b5(_0x461920.prototype, "m_positionOffset", [_0x38e365], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x2ea746(0, 0);
        }
      }), _0x1d8f17 = _0x5a72b5(_0x461920.prototype, "m_followRotation", [_0x4f56bf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x203d96 = _0x5a72b5(_0x461920.prototype, "m_rotationLocalization", [_0x63bed7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x347db2 = _0x5a72b5(_0x461920.prototype, "m_rotationFactor", [_0x4a168a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x237354 = _0x5a72b5(_0x461920.prototype, "m_followScale", [_0x5803cc], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x8cd93b = _0x5a72b5(_0x461920.prototype, "m_scaleLocalization", [_0x3ce361], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x5136ae = _0x5a72b5(_0x461920.prototype, "m_scaleFactor", [_0x3ca564], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x2ea746(1, 1);
        }
      }), _0x18b70a = _0x461920)) || _0x18b70a) || _0x18b70a;
      var _0x5af8e3;
      var _0x982fbd;
      var _0x369a77;
      var _0x3cba2d;
      var _0x1bd31e;
      var _0x479674;
      var _0x24b858;
      var _0xf444f6;
      var _0x2abea0;
      var _0x2252f1;
      var _0x1644c7;
      var _0x5f22aa;
      var _0x16042a;
      var _0x42d3bf;
      var _0x1d4769;
      var _0x4f0b91;
      var _0x5c47f2;
      var _0x230ad8;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "2da2cEqApNLm7hZxNo+Lfkx", "NewSlotColorFollow", undefined);
      var _0x237956 = _0x42d118.ccclass;
      var _0x17a9f1 = _0x42d118.property;
      var _0x9de0a9 = _0x42d118.executeInEditMode;
      var _0x540bb3;
      !function (_0x1a50e6) {
        _0x1a50e6[_0x1a50e6.default = 1] = "default";
      }(_0x540bb3 || (_0x540bb3 = {}));
      var _0x3bb8d3 = _0x4fa226({});
      _0x5af8e3 = _0x237956("NewSlotColorFollow");
      _0x982fbd = _0x17a9f1({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x369a77 = _0x17a9f1({
        visible: true,
        displayName: "Preview"
      });
      _0x3cba2d = _0x17a9f1({
        visible: false
      });
      _0x1bd31e = _0x17a9f1({
        type: _0x1a25c9.Skeleton,
        visible: false
      });
      _0x479674 = _0x17a9f1({
        visible: true,
        type: _0x1a25c9.Skeleton,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架"
      });
      _0x24b858 = _0x17a9f1({
        visible: false
      });
      _0xf444f6 = _0x17a9f1({
        visible: true,
        displayName: "SlotName",
        tooltip: "請輸入要跟隨的 Spine 插槽名稱或從下拉選單選擇"
      });
      _0x2abea0 = _0x17a9f1({
        type: _0x3bb8d3,
        visible: false
      });
      _0x2252f1 = _0x17a9f1({
        visible: true,
        displayName: "SelectFromList",
        type: _0x3bb8d3,
        tooltip: "可從此下拉選單選擇插槽"
      });
      var _0x10f6f5 = _0x5af8e3(_0x1644c7 = _0x9de0a9((_0x230ad8 = function (_0x5b2f2a) {
        function _0x40aed4() {
          for (var _0xff5c86, _0x1e5848 = arguments.length, _0x1e4624 = new Array(_0x1e5848), _0x2dae36 = 0; _0x2dae36 < _0x1e5848; _0x2dae36++) {
            _0x1e4624[_0x2dae36] = arguments[_0x2dae36];
          }
          _0x4f841b(_0xff5c86 = _0x5b2f2a.call.apply(_0x5b2f2a, [this].concat(_0x1e4624)) || this, "m_preview", _0x16042a, _0x2fdb02(_0xff5c86));
          _0x4f841b(_0xff5c86, "_colorCache", _0x42d3bf, _0x2fdb02(_0xff5c86));
          _0x4f841b(_0xff5c86, "m_spineSkeleton", _0x1d4769, _0x2fdb02(_0xff5c86));
          _0x4f841b(_0xff5c86, "m_slotName", _0x4f0b91, _0x2fdb02(_0xff5c86));
          _0x4f841b(_0xff5c86, "__slotIndex", _0x5c47f2, _0x2fdb02(_0xff5c86));
          _0xff5c86._SlotEnumList = [];
          return _0xff5c86;
        }
        _0x567cf6(_0x40aed4, _0x5b2f2a);
        var _0x435dd4 = _0x40aed4.prototype;
        _0x435dd4.__preload = function () {};
        _0x435dd4.onLoad = function () {
          this._colorCache = null;
        };
        _0x435dd4.start = function () {};
        _0x435dd4.onEnable = function () {
          this.ColorSync();
          _0x60819.on(_0x17a860.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x435dd4.onDisable = function () {
          _0x60819.off(_0x17a860.EVENT_BEFORE_DRAW, this.ColorSync, this);
        };
        _0x435dd4.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x435dd4.ColorSync = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x5975bb = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0x21d63b = _0x5975bb ? 255 * _0x5975bb.color.r : this._colorCache.r;
            var _0x473bc0 = _0x5975bb ? 255 * _0x5975bb.color.g : this._colorCache.g;
            var _0x3acea2 = _0x5975bb ? 255 * _0x5975bb.color.b : this._colorCache.b;
            var _0x3557f4 = _0x5975bb ? 255 * _0x5975bb.color.a : this._colorCache.a;
            null != this._colorCache && _0x5975bb.color.r == this._colorCache.r && _0x5975bb.color.g == this._colorCache.g && _0x5975bb.color.b == this._colorCache.b && _0x5975bb.color.a == this._colorCache.a || (this._colorCache = this._colorCache || new _0x1210d7.Color(_0x1210d7.Color.WHITE), this.node.getComponent(_0x2f2b2d) ? (this.node.getComponent(_0x2f2b2d).color = _0x4333e8(_0x21d63b, _0x473bc0, _0x3acea2, _0x3557f4), this._colorCache.set(this.node.getComponent(_0x2f2b2d).color)) : this.node.getComponent(_0x42ff5a) && (this.node.getComponent(_0x42ff5a).color = _0x4333e8(_0x21d63b, _0x473bc0, _0x3acea2, _0x3557f4), this._colorCache.set(this.node.getComponent(_0x42ff5a).color)), this.node.getComponent(_0x4ed45d) && (this.node.getComponent(_0x4ed45d).opacity = _0x3557f4), this._colorCache.a = _0x3557f4);
          }
        };
        _0x435dd4._refreshInspector = function () {};
        _0x435dd4._updateSlotEnum = function () {};
        _0x54ea23(_0x40aed4, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0xb9dcff) {
            this.m_spineSkeleton = _0xb9dcff;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x5b4f82) {}
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x8fe225) {
            this.m_slotName = _0x8fe225;
            var _0x5755d1 = false;
            this._SlotEnumList.forEach(function (_0x1a5685) {
              _0x1a5685.name != _0x8fe225 || (_0x5755d1 = true);
            });
            0 == _0x5755d1 ? console.log("[spSlotColorFollow] 輸入的插槽", _0x8fe225, "並不存在！請檢查名稱是否正確！") : console.log("[spSlotColorFollow] 輸入的插槽", _0x8fe225, "已找到！");
          }
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0x308f9a) {}
        }]);
        return _0x40aed4;
      }(_0x5aac4b), _0x230ad8.NewSlotColorFollow = "NewSlotColorFollow", _0x5f22aa = _0x230ad8, _0x5a72b5(_0x5f22aa.prototype, "Skeleton", [_0x982fbd], Object.getOwnPropertyDescriptor(_0x5f22aa.prototype, "Skeleton"), _0x5f22aa.prototype), _0x16042a = _0x5a72b5(_0x5f22aa.prototype, "m_preview", [_0x369a77], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x42d3bf = _0x5a72b5(_0x5f22aa.prototype, "_colorCache", [_0x3cba2d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x1210d7.Color(_0x1210d7.Color.WHITE);
        }
      }), _0x1d4769 = _0x5a72b5(_0x5f22aa.prototype, "m_spineSkeleton", [_0x1bd31e], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x5f22aa.prototype, "_spineSkeleton", [_0x479674], Object.getOwnPropertyDescriptor(_0x5f22aa.prototype, "_spineSkeleton"), _0x5f22aa.prototype), _0x4f0b91 = _0x5a72b5(_0x5f22aa.prototype, "m_slotName", [_0x24b858], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x5a72b5(_0x5f22aa.prototype, "SlotName", [_0xf444f6], Object.getOwnPropertyDescriptor(_0x5f22aa.prototype, "SlotName"), _0x5f22aa.prototype), _0x5c47f2 = _0x5a72b5(_0x5f22aa.prototype, "__slotIndex", [_0x2abea0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x540bb3.default;
        }
      }), _0x5a72b5(_0x5f22aa.prototype, "_slotIndex", [_0x2252f1], Object.getOwnPropertyDescriptor(_0x5f22aa.prototype, "_slotIndex"), _0x5f22aa.prototype), _0x1644c7 = _0x5f22aa)) || _0x1644c7) || _0x1644c7;
      var _0x30e67a;
      var _0x2fe1ad;
      var _0x10962a;
      var _0x113ca3;
      var _0x12d728;
      var _0x54b441;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "866f1RjwMhFfapt6JLtipxM", "SkeletonSync", undefined);
      var _0x66c442 = _0x42d118.ccclass;
      var _0x503b3a = _0x42d118.property;
      var _0x1658cc = _0x42d118.menu;
      _0x30e67a = _0x66c442("SkeletonSync");
      _0x2fe1ad = _0x1658cc("Chiron/Spine/SkeletonSync");
      _0x10962a = _0x503b3a({
        displayName: "Overlap",
        tooltip: "是否交疊並同步座標、旋轉及縮放"
      });
      var _0x4f096c = _0x30e67a(_0x113ca3 = _0x2fe1ad((_0x12d728 = function (_0x1140ab) {
        function _0x2712e3() {
          for (var _0x4db3a9, _0x282096 = arguments.length, _0x13d843 = new Array(_0x282096), _0x43a3c4 = 0; _0x43a3c4 < _0x282096; _0x43a3c4++) {
            _0x13d843[_0x43a3c4] = arguments[_0x43a3c4];
          }
          (_0x4db3a9 = _0x1140ab.call.apply(_0x1140ab, [this].concat(_0x13d843)) || this).m_skeleton = null;
          _0x4f841b(_0x4db3a9, "m_overlap", _0x54b441, _0x2fdb02(_0x4db3a9));
          return _0x4db3a9;
        }
        _0x567cf6(_0x2712e3, _0x1140ab);
        var _0x570c32 = _0x2712e3.prototype;
        _0x570c32.__preload = function () {
          this.m_skeleton = this.getComponent(_0x1a25c9.Skeleton);
        };
        _0x570c32.Sync = function (_0x4abd02) {
          if (_0x4abd02 && this.m_overlap) {
            for (var _0x214942 = 0, _0x6e1b06 = 1, _0x37dd9d = 1, _0x483bdc = _0x4abd02; _0x483bdc;) {
              _0x6e1b06 *= _0x483bdc.scale.x;
              _0x37dd9d *= _0x483bdc.scale.y;
              _0x214942 += _0x483bdc.angle;
              _0x483bdc = _0x483bdc.parent;
            }
            this.node.angle = _0x214942;
            this.node.scale = _0x2af1b6(_0x6e1b06, _0x37dd9d, 0);
            var _0x20735d = _0x4abd02.parent.getComponent(_0x45bc58).convertToWorldSpaceAR(_0x4abd02.position);
            var _0x2ab72b = this.node.parent.getComponent(_0x45bc58).convertToNodeSpaceAR(_0x20735d);
            this.node.setPosition(_0x2ab72b);
          }
        };
        _0x54ea23(_0x2712e3, [{
          key: "Skeleton",
          get: function () {
            return this.m_skeleton;
          }
        }]);
        return _0x2712e3;
      }(_0x5aac4b), _0x54b441 = _0x5a72b5(_0x12d728.prototype, "m_overlap", [_0x10962a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x113ca3 = _0x12d728)) || _0x113ca3) || _0x113ca3;
      var _0x391434;
      var _0x1a3494;
      var _0x7a50bc;
      var _0x5bd178;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "e2171n/i+xGsoWeQMXewobE", "SlotActivator", undefined);
      var _0x2e0df4 = _0x42d118.ccclass;
      var _0x3b0831 = _0x42d118.property;
      var _0x5f1eea = _0x42d118.menu;
      _0x391434 = _0x2e0df4("SlotActivator");
      _0x1a3494 = _0x5f1eea("Chiron/Spine/SlotActivator");
      var _0x4a350e = _0x391434(_0x7a50bc = _0x1a3494((_0x5bd178 = function (_0x10b111) {
        function _0x598acd() {
          return _0x10b111.apply(this, arguments) || this;
        }
        _0x567cf6(_0x598acd, _0x10b111);
        _0x54ea23(_0x598acd, [{
          key: "Identifier",
          get: function () {
            return this.identifier;
          },
          set: function (_0x466b20) {
            this.identifier = _0x466b20;
          }
        }, {
          key: "Active",
          get: function () {
            return this.active;
          },
          set: function (_0x78563b) {
            this.active = _0x78563b;
          }
        }]);
        return _0x598acd;
      }(_0x5aac4b), _0x5bd178.SlotActivator = "SlotActivator", _0x7a50bc = _0x5bd178)) || _0x7a50bc) || _0x7a50bc;
      var _0x382ec3;
      var _0xad0440;
      var _0x5a782b;
      var _0x35402a;
      var _0x2e52eb;
      var _0x4b0717;
      var _0x1e95e1;
      var _0x236529;
      var _0x3ee62b;
      var _0x1812ed;
      var _0x59eb7;
      var _0x3382e1;
      var _0x2f6e3b;
      var _0x3c2941;
      var _0x109fb7;
      var _0x59883c;
      var _0x2ac6ed;
      var _0x5d4d1;
      var _0x1d5468;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "e23desmKVBLjKgDg5KLcySp", "SlotColorFollow", undefined);
      var _0xcae412 = _0x42d118.ccclass;
      var _0x54aacc = _0x42d118.property;
      var _0x305a74 = _0x42d118.menu;
      var _0xa516fe = _0x42d118.inspector;
      var _0x44982b = {
        None: 0
      };
      var _0x406f58 = _0x4fa226(_0x44982b);
      function _0x263c1d(_0x278e56, _0x388433, _0x402fd7) {
        var _0x705e5a = _0x4fa226.getList(_0x4fa226(_0x402fd7));
        _0xfd55b7.Attr.setClassAttr(_0x278e56, _0x388433, "type", "Enum");
        _0xfd55b7.Attr.setClassAttr(_0x278e56, _0x388433, "enumList", _0x705e5a);
      }
      _0x382ec3 = _0xcae412("SlotColorFollow");
      _0xad0440 = _0x305a74("Chiron/Spine/SlotColorFollow");
      _0x5a782b = _0x54aacc({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x35402a = _0x54aacc({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x2e52eb = _0x54aacc({
        visible: true,
        displayName: "Preview"
      });
      _0x4b0717 = _0x54aacc({
        visible: false,
        type: _0x1210d7.Color
      });
      _0x1e95e1 = _0x54aacc({
        visible: false,
        type: _0x1a25c9.Skeleton
      });
      _0x236529 = _0x54aacc({
        visible: true,
        displayName: "Skeleton",
        tooltip: "目標 Spine 骨架",
        type: _0x1a25c9.Skeleton
      });
      _0x3ee62b = _0x54aacc({
        visible: false,
        tooltip: "目標同步 slot 名稱"
      });
      _0x1812ed = _0x54aacc({
        visible: false
      });
      _0x59eb7 = _0x54aacc({
        visible: true,
        displayName: "Slot",
        type: _0x406f58
      });
      var _0x455f3e = _0x382ec3(_0x3382e1 = _0xad0440((_0x1d5468 = function (_0xb4cbac) {
        function _0x5e6b97() {
          for (var _0x17eb81, _0xa8b4f = arguments.length, _0x438d4e = new Array(_0xa8b4f), _0x1ee98c = 0; _0x1ee98c < _0xa8b4f; _0x1ee98c++) {
            _0x438d4e[_0x1ee98c] = arguments[_0x1ee98c];
          }
          (_0x17eb81 = _0xb4cbac.call.apply(_0xb4cbac, [this].concat(_0x438d4e)) || this).editor = undefined;
          _0x4f841b(_0x17eb81, "m_preview", _0x3c2941, _0x2fdb02(_0x17eb81));
          _0x4f841b(_0x17eb81, "_colorCache", _0x109fb7, _0x2fdb02(_0x17eb81));
          _0x4f841b(_0x17eb81, "m_spineSkeleton", _0x59883c, _0x2fdb02(_0x17eb81));
          _0x4f841b(_0x17eb81, "m_slotName", _0x2ac6ed, _0x2fdb02(_0x17eb81));
          _0x4f841b(_0x17eb81, "__slotIndex", _0x5d4d1, _0x2fdb02(_0x17eb81));
          return _0x17eb81;
        }
        _0x567cf6(_0x5e6b97, _0xb4cbac);
        var _0x49f438 = _0x5e6b97.prototype;
        _0x49f438.__preload = function () {};
        _0x49f438.onLoad = function () {
          this.node.getComponent(_0x2f2b2d) ? this._colorCache = this.node.getComponent(_0x2f2b2d).color : this.node.getComponent(_0x42ff5a) && (this._colorCache = this.node.getComponent(_0x42ff5a).color);
        };
        _0x49f438.update = function () {
          if (this.m_spineSkeleton && "" != this.m_slotName) {
            var _0x37730e = this.m_spineSkeleton.findSlot(this.m_slotName);
            var _0x13fa03 = _0x37730e ? 255 * _0x37730e.color.r : this._colorCache.r;
            var _0x5dcc0d = _0x37730e ? 255 * _0x37730e.color.g : this._colorCache.g;
            var _0x57305b = _0x37730e ? 255 * _0x37730e.color.b : this._colorCache.b;
            var _0x4cc13c = _0x37730e ? 255 * _0x37730e.color.a : this._colorCache.a;
            _0x13fa03 == this._colorCache.r && _0x5dcc0d == this._colorCache.g && _0x57305b == this._colorCache.b && _0x4cc13c == this._colorCache.a || (this.node.getComponent(_0x2f2b2d) ? (this.node.getComponent(_0x2f2b2d).color = _0x4333e8(_0x13fa03, _0x5dcc0d, _0x57305b, _0x4cc13c), this._colorCache.set(this.node.getComponent(_0x2f2b2d).color)) : this.node.getComponent(_0x42ff5a) && (this.node.getComponent(_0x42ff5a).color = _0x4333e8(_0x13fa03, _0x5dcc0d, _0x57305b, _0x4cc13c), this._colorCache.set(this.node.getComponent(_0x42ff5a).color)), this.node.getComponent(_0x4ed45d) && (this.node.getComponent(_0x4ed45d).opacity = _0x4cc13c), this._colorCache.a = _0x4cc13c);
          }
        };
        _0x49f438.onDestroy = function () {
          this._colorCache = null;
          this.m_spineSkeleton = null;
          this.m_slotName = null;
        };
        _0x49f438._refreshInspector = function () {};
        _0x49f438._slotEnum = function () {};
        _0x49f438._updateSlotEnum = function () {
          _0x263c1d(this, "_slotIndex", this._slotEnum() || _0x406f58);
        };
        _0x49f438.notify = function () {};
        _0x54ea23(_0x5e6b97, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x17707f) {
            this.m_spineSkeleton = _0x17707f;
          }
        }, {
          key: "SlotName",
          get: function () {
            return this.m_slotName;
          },
          set: function (_0x4ceea8) {
            this.m_slotName = _0x4ceea8;
          }
        }, {
          key: "_spineSkeleton",
          get: function () {},
          set: function (_0x4d27ad) {}
        }, {
          key: "_slotIndex",
          get: function () {},
          set: function (_0x4f9774) {}
        }]);
        return _0x5e6b97;
      }(_0x5aac4b), _0x1d5468.SlotColorFollow = "SlotColorFollow", _0x2f6e3b = _0x1d5468, _0x5a72b5(_0x2f6e3b.prototype, "Skeleton", [_0x5a782b], Object.getOwnPropertyDescriptor(_0x2f6e3b.prototype, "Skeleton"), _0x2f6e3b.prototype), _0x5a72b5(_0x2f6e3b.prototype, "SlotName", [_0x35402a], Object.getOwnPropertyDescriptor(_0x2f6e3b.prototype, "SlotName"), _0x2f6e3b.prototype), _0x3c2941 = _0x5a72b5(_0x2f6e3b.prototype, "m_preview", [_0x2e52eb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x109fb7 = _0x5a72b5(_0x2f6e3b.prototype, "_colorCache", [_0x4b0717], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x1210d7.Color(_0x1210d7.Color.WHITE);
        }
      }), _0x59883c = _0x5a72b5(_0x2f6e3b.prototype, "m_spineSkeleton", [_0x1e95e1], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x5a72b5(_0x2f6e3b.prototype, "_spineSkeleton", [_0x236529], Object.getOwnPropertyDescriptor(_0x2f6e3b.prototype, "_spineSkeleton"), _0x2f6e3b.prototype), _0x2ac6ed = _0x5a72b5(_0x2f6e3b.prototype, "m_slotName", [_0x3ee62b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x5d4d1 = _0x5a72b5(_0x2f6e3b.prototype, "__slotIndex", [_0x1812ed], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x5a72b5(_0x2f6e3b.prototype, "_slotIndex", [_0x59eb7], Object.getOwnPropertyDescriptor(_0x2f6e3b.prototype, "_slotIndex"), _0x2f6e3b.prototype), _0x3382e1 = _0x2f6e3b)) || _0x3382e1) || _0x3382e1;
      var _0x1892a4;
      var _0x1bd8e1;
      var _0x5c90b5;
      var _0x5af4ca;
      var _0x568830;
      var _0x479fe5;
      var _0x3b8978;
      var _0x3e5140;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "ff032nME8lBJKBpMlK8O/1z", "SlotCulling", undefined);
      var _0x311dfb = _0x42d118.ccclass;
      var _0x5c1f8e = _0x42d118.property;
      var _0x6842c3 = _0x42d118.menu;
      _0x1892a4 = _0x311dfb("SlotCulling");
      _0x1bd8e1 = _0x6842c3("Chiron/Spine/SlotCulling");
      _0x5c90b5 = _0x5c1f8e({
        visible: false,
        tooltip: "目標 Spine 骨架"
      });
      _0x5af4ca = _0x5c1f8e({
        visible: false,
        tooltip: "反向剔除 Slot 項目(勾選的不會被剔除，未勾選的將被剔除)"
      });
      _0x568830 = _0x5c1f8e({
        visible: false,
        tooltip: "遭剔除的 Slot 項目名稱"
      });
      var _0x24afbf = _0x1892a4(_0x479fe5 = _0x1bd8e1((_0x3e5140 = function (_0x560acb) {
        function _0x539af2() {
          return _0x560acb.apply(this, arguments) || this;
        }
        _0x567cf6(_0x539af2, _0x560acb);
        _0x54ea23(_0x539af2, [{
          key: "Skeleton",
          get: function () {
            return this.m_spineSkeleton;
          },
          set: function (_0x4f6042) {
            this.m_spineSkeleton = _0x4f6042;
          }
        }, {
          key: "Invert",
          get: function () {
            return this.m_invert;
          },
          set: function (_0x282d17) {
            this.m_invert = _0x282d17;
          }
        }, {
          key: "CullingList",
          get: function () {
            return this._cullingSlotNames;
          }
        }], [{
          key: "Name",
          get: function () {
            return _0x539af2.SlotCulling;
          }
        }]);
        return _0x539af2;
      }(_0x5aac4b), _0x3e5140.SlotCulling = "SlotCulling", _0x3b8978 = _0x3e5140, _0x5a72b5(_0x3b8978.prototype, "Skeleton", [_0x5c90b5], Object.getOwnPropertyDescriptor(_0x3b8978.prototype, "Skeleton"), _0x3b8978.prototype), _0x5a72b5(_0x3b8978.prototype, "Invert", [_0x5af4ca], Object.getOwnPropertyDescriptor(_0x3b8978.prototype, "Invert"), _0x3b8978.prototype), _0x5a72b5(_0x3b8978.prototype, "CullingList", [_0x568830], Object.getOwnPropertyDescriptor(_0x3b8978.prototype, "CullingList"), _0x3b8978.prototype), _0x479fe5 = _0x3b8978)) || _0x479fe5) || _0x479fe5;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "f8b5e4BLTJNX7FPcFOEaBkq", "ZipBundleLoader", undefined);
      var _0xad2e81 = new Map();
      var _0x49d324 = new Map();
      var _0xae9885 = new Map();
      var _0x548ed5 = function () {
        function _0x3de182() {
          this.loadedZipNames = new Array();
        }
        var _0x15a2a9 = _0x3de182.prototype;
        _0x15a2a9.downloadZip = function (_0x4ccff1, _0x3559a3) {
          return new Promise(function (_0x17facd) {
            var _0x589ecd = _0x4ccff1.match(/[^/]+$/);
            if (null !== _0x589ecd) {
              var _0x290930 = "" + _0x589ecd[0] + _0x3559a3 + ".zip";
              _0x5dab17.downloader.downloadFile(_0x4ccff1 + "/" + _0x290930, {
                xhrResponseType: "arraybuffer"
              }, null, function (_0x121efb, _0x592273) {
                _0x17facd(_0x592273);
              });
            } else {
              _0x17facd(null);
            }
          });
        };
        _0x15a2a9.loadZip = function () {
          var _0x3ac85d = _0x12d1c6(_0x41e40d().mark(function _0x312cf8(_0x587f08, _0x37169) {
            var _0x566d25;
            var _0x303485;
            var _0x49138d;
            return _0x41e40d().wrap(function (_0x2b4813) {
              for (;;) {
                switch (_0x2b4813.prev = _0x2b4813.next) {
                  case 0:
                    _0x566d25 = _0x37169 ? "." + _0x37169 : "";
                    _0x2b4813.next = 3;
                    return this.downloadZip(_0x587f08, _0x566d25);
                  case 3:
                    null !== (_0x303485 = _0x2b4813.sent) && (_0x49138d = _0x587f08.replace(/(.*?)\/assets\//, "assets/"), globalThis.fflate.unzip(new Uint8Array(_0x303485), function (_0xc483d8, _0x28d560) {
                      _0xc483d8 ? console.warn("Unzip failed:", _0xc483d8.message) : Object.keys(_0x28d560).forEach(function (_0x1ae2ff) {
                        _0xad2e81.set(_0x587f08 + "/" + _0x1ae2ff, _0x28d560[_0x1ae2ff]);
                        _0xad2e81.set(_0x49138d + "/" + _0x1ae2ff, _0x28d560[_0x1ae2ff]);
                      });
                    }));
                  case 5:
                  case "end":
                    return _0x2b4813.stop();
                }
              }
            }, _0x312cf8, this);
          }));
          return function (_0x532859, _0x2c47b8) {
            return _0x3ac85d.apply(this, arguments);
          };
        }();
        _0x15a2a9.init = function () {
          if (globalThis.fflate) {
            var _0x2ba3e8 = Object.getOwnPropertyDescriptor(XMLHttpRequest.prototype, "response");
            Object.defineProperty(XMLHttpRequest.prototype, "response", {
              get: function () {
                return this.ZipCacheUrl ? _0x49d324.get(this.ZipCacheUrl) : _0x2ba3e8.get.call(this);
              },
              set: function (_0x3c1777) {},
              configurable: true
            });
            var _0x1de958 = XMLHttpRequest.prototype.open;
            XMLHttpRequest.prototype.open = function (_0x20b502, _0x37545d, _0x4b9b75, _0x5cfc75, _0x37bd92) {
              _0xad2e81.has(_0x37545d) && (this.ZipCacheUrl = _0x37545d);
              return _0x1de958.apply(this, arguments);
            };
            var _0x42c60a = XMLHttpRequest.prototype.send;
            XMLHttpRequest.prototype.send = _0x12d1c6(_0x41e40d().mark(function _0x4fecc3(_0x5c16e6) {
              var _0x5cbad7;
              var _0x2c352a;
              var _0xa34d60;
              var _0x2b7803;
              var _0x3a6bfb;
              var _0x5e850e;
              var _0x2575f6;
              var _0x4513ea;
              var _0x86aca8 = arguments;
              return _0x41e40d().wrap(function (_0x407a93) {
                for (;;) {
                  switch (_0x407a93.prev = _0x407a93.next) {
                    case 0:
                      if (!this.ZipCacheUrl) {
                        _0x407a93.next = 26;
                        break;
                      }
                      if (_0x49d324.has(this.ZipCacheUrl)) {
                        _0x407a93.next = 24;
                        break;
                      }
                      _0x5cbad7 = this.responseType;
                      _0x2c352a = _0xad2e81.get(this.ZipCacheUrl);
                      _0xa34d60 = null;
                      _0x407a93.t0 = _0x5cbad7;
                      _0x407a93.next = "arraybuffer" === _0x407a93.t0 ? 8 : "json" === _0x407a93.t0 ? 10 : "text" === _0x407a93.t0 ? 14 : 17;
                      break;
                    case 8:
                      _0xa34d60 = _0x2c352a.buffer ? _0x2c352a.buffer : _0x2c352a;
                      return _0x407a93.abrupt("break", 18);
                    case 10:
                      _0x2b7803 = new TextDecoder();
                      _0x3a6bfb = _0x2b7803.decode(_0x2c352a);
                      _0xa34d60 = JSON.parse(_0x3a6bfb);
                      return _0x407a93.abrupt("break", 18);
                    case 14:
                      _0x5e850e = new TextDecoder();
                      _0xa34d60 = _0x5e850e.decode(_0x2c352a);
                      return _0x407a93.abrupt("break", 18);
                    case 17:
                      console.error("Unknown type in zipCache:", _0x5cbad7);
                    case 18:
                      (_0x2575f6 = _0xae9885.get(this.ZipCacheUrl)) && (_0x49d324.delete(this.ZipCacheUrl + "@version" + _0x2575f6), _0xae9885.delete(this.ZipCacheUrl));
                      _0x4513ea = performance.now();
                      _0xae9885.set(this.ZipCacheUrl, _0x4513ea);
                      this.ZipCacheUrl = this.ZipCacheUrl + "@version" + _0x4513ea;
                      _0x49d324.set(this.ZipCacheUrl, _0xa34d60);
                    case 24:
                      this.onload();
                      return _0x407a93.abrupt("return");
                    case 26:
                      return _0x407a93.abrupt("return", _0x42c60a.apply(this, _0x86aca8));
                    case 27:
                    case "end":
                      return _0x407a93.stop();
                  }
                }
              }, _0x4fecc3, this);
            }));
          } else {
            console.error("fflate is not found.");
          }
        };
        return _0x3de182;
      }();
      var _0x233b06 = globalThis.__zipBundleLoader;
      var _0x2933f0;
      var _0x391ed0;
      var _0x322244;
      var _0x4583ea;
      var _0x390e43;
      var _0x5dac96;
      var _0x3189f4;
      var _0x201639;
      var _0x29c698;
      var _0x5efb86;
      var _0x510aad;
      var _0x1b858f;
      var _0x143531;
      var _0x298307;
      var _0x4a7327;
      var _0x34f46a;
      var _0x5eee0e;
      var _0x3801ff;
      var _0x2579db;
      var _0x7e4b1f;
      var _0x1d1ec4;
      var _0x4720af;
      var _0x5127a0;
      var _0x22979d;
      var _0x3537a8;
      var _0x473944;
      var _0x7e171d;
      var _0x45ccb4;
      var _0x383897;
      var _0x29b04d;
      var _0x44ef22;
      var _0x3856e5;
      var _0x44d7bb;
      var _0x37182b;
      var _0x32cf38;
      var _0x415fed;
      var _0x448fbf;
      var _0x5ba63f;
      var _0x157a4d;
      var _0x2303bf;
      var _0x15d98f;
      var _0x5046c6;
      var _0x35f091;
      var _0xa3b5ef;
      var _0x4e3f8d;
      var _0x3b5708;
      var _0x1fc818;
      var _0x1ff3a6;
      var _0x1adce0;
      var _0x433ed8;
      var _0x317931;
      var _0x826da1;
      var _0x525c29;
      var _0xa156f6;
      var _0x2d38e7;
      var _0x31b0c2;
      var _0x197254;
      var _0x4db511;
      var _0x4f99c3;
      var _0x525daf;
      var _0x4b78a7;
      var _0x246b86;
      var _0x145ff7;
      var _0x22dc0d;
      var _0x24fca6;
      var _0x1166c2;
      var _0x4a7832;
      var _0x2218cf;
      var _0x3a07dc;
      var _0x1274d2;
      var _0x527e59;
      var _0x23b463;
      globalThis.fflate && !_0x233b06 && (_0x233b06 = new _0x548ed5(), globalThis.__zipBundleLoader = _0x233b06, _0x233b06.init());
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "c933866GvpLKaZlVxLlOz0C", "FeatureManagerComponent", undefined);
      var _0x2ee2df = ["game", "gameLite"];
      var _0x345238 = _0x42d118.ccclass;
      var _0x454086 = _0x42d118.property;
      var _0x227b6b;
      !function (_0x27da70) {
        _0x27da70[_0x27da70.CommonMainBundle = 0] = "CommonMainBundle";
        _0x27da70[_0x27da70.CommonBundle = 1] = "CommonBundle";
        _0x27da70[_0x27da70.OtherBundle = 2] = "OtherBundle";
        _0x27da70[_0x27da70.DefaultLangBundle = 3] = "DefaultLangBundle";
        _0x27da70[_0x27da70.LangTextBundle = 4] = "LangTextBundle";
        _0x27da70[_0x27da70.GameBundle = 5] = "GameBundle";
      }(_0x227b6b || (_0x227b6b = {}));
      var _0x404365 = "en";
      var _0x424529 = [10830, 10827, 10778, 10718, 10689, 10651, 10630, 10598, 10505, 10504, 10450, 10414, 10263, 10220];
      var _0xb2de05 = {
        Equal: [3]
      };
      var _0x3b55b9 = {
        JILI: 0,
        TADA: 1,
        ACE_ROYALE: 2,
        JILI_START: 3,
        TADA_CASINO: 4,
        NONE: 5,
        UFA: 6
      };
      var _0x11e5c5;
      var _0xf2d7ea;
      !function (_0x7e91da) {
        _0x7e91da[_0x7e91da.None = 0] = "None";
        _0x7e91da[_0x7e91da.AutoPlaySettingPanel = 1] = "AutoPlaySettingPanel";
        _0x7e91da[_0x7e91da.AutoPlaySettingPanel_DFI = 2] = "AutoPlaySettingPanel_DFI";
        _0x7e91da[_0x7e91da.AutoPlaySettingPanel_DFIII = 3] = "AutoPlaySettingPanel_DFIII";
        _0x7e91da[_0x7e91da.AutoPlaySettingPanel_BS = 4] = "AutoPlaySettingPanel_BS";
        _0x7e91da[_0x7e91da.AutoPlaySetting_AG2 = 5] = "AutoPlaySetting_AG2";
        _0x7e91da[_0x7e91da.AutoPlaySetting_FD = 6] = "AutoPlaySetting_FD";
        _0x7e91da[_0x7e91da.AutoPlaySettingPanel_MS = 7] = "AutoPlaySettingPanel_MS";
      }(_0x11e5c5 || (_0x11e5c5 = {}));
      (function (_0xfbe91a) {
        _0xfbe91a[_0xfbe91a.None = 0] = "None";
        _0xfbe91a[_0xfbe91a.Dark = 1] = "Dark";
      })(_0xf2d7ea || (_0xf2d7ea = {}));
      _0x2933f0 = _0x345238("StyleSetting");
      _0x391ed0 = _0x454086({
        type: _0x57c330,
        tooltip: "是否有骰子造型"
      });
      _0x322244 = _0x454086({
        type: _0x57c330,
        tooltip: "是否有萬聖造型"
      });
      _0x4583ea = _0x454086({
        type: _0x57c330,
        tooltip: "是否有聖誕造型"
      });
      _0x390e43 = _0x454086({
        type: _0x57c330,
        tooltip: "是否有OKBET廠商造型"
      });
      _0x5dac96 = _0x454086({
        type: _0x4fa226(_0xf2d7ea),
        tooltip: "系列"
      });
      var _0x113db2 = _0x2933f0((_0x201639 = function () {
        _0x4f841b(this, "HasDice", _0x29c698, this);
        _0x4f841b(this, "HasHolloween", _0x5efb86, this);
        _0x4f841b(this, "HasXmas", _0x510aad, this);
        _0x4f841b(this, "HasOkbet", _0x1b858f, this);
        _0x4f841b(this, "Series", _0x143531, this);
      }, _0x29c698 = _0x5a72b5(_0x201639.prototype, "HasDice", [_0x391ed0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5efb86 = _0x5a72b5(_0x201639.prototype, "HasHolloween", [_0x322244], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x510aad = _0x5a72b5(_0x201639.prototype, "HasXmas", [_0x4583ea], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1b858f = _0x5a72b5(_0x201639.prototype, "HasOkbet", [_0x390e43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x143531 = _0x5a72b5(_0x201639.prototype, "Series", [_0x5dac96], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0xf2d7ea.None;
        }
      }), _0x3189f4 = _0x201639)) || _0x3189f4;
      _0x298307 = _0x345238("PlayTypeSetting");
      _0x4a7327 = _0x454086({
        type: _0x57c330,
        tooltip: "Match"
      });
      _0x34f46a = _0x454086({
        type: _0x57c330,
        tooltip: "Break"
      });
      var _0xa20c19 = _0x298307((_0x3801ff = function () {
        _0x4f841b(this, "Match", _0x2579db, this);
        _0x4f841b(this, "Break", _0x7e4b1f, this);
      }, _0x2579db = _0x5a72b5(_0x3801ff.prototype, "Match", [_0x4a7327], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x7e4b1f = _0x5a72b5(_0x3801ff.prototype, "Break", [_0x34f46a], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x5eee0e = _0x3801ff)) || _0x5eee0e;
      _0x1d1ec4 = _0x454086({
        type: _0x374045,
        tooltip: "遊戲縮寫(server位置)"
      });
      _0x4720af = _0x454086({
        type: String,
        tooltip: "遊戲主場prefab路徑"
      });
      _0x5127a0 = _0x454086({
        type: String,
        tooltip: "遊戲多語系圖片路徑"
      });
      _0x22979d = _0x454086({
        type: String,
        tooltip: "遊戲ID"
      });
      _0x3537a8 = _0x454086({
        type: String,
        tooltip: "Logo名稱，只要給到底線之前"
      });
      _0x473944 = _0x454086({
        type: Boolean,
        tooltip: "鎖定橫版"
      });
      _0x7e171d = _0x454086({
        type: Boolean,
        tooltip: "鎖定直版"
      });
      _0x45ccb4 = _0x454086({
        type: Boolean,
        tooltip: "是否為街機"
      });
      _0x383897 = _0x454086({
        type: _0x3d6b8d,
        tooltip: "不分語系LOGO"
      });
      _0x29b04d = _0x454086({
        type: _0xffea4b,
        tooltip: "遊戲Logo合圖"
      });
      _0x44ef22 = _0x454086({
        type: _0x374045,
        tooltip: "展示頁"
      });
      _0x3856e5 = _0x454086({
        type: String,
        tooltip: "敘述圖名稱"
      });
      _0x44d7bb = _0x454086({
        type: _0x3d6b8d,
        tooltip: "特色圖"
      });
      _0x37182b = _0x454086({
        type: _0x3d6b8d,
        tooltip: "背景圖，0:直,1:橫"
      });
      _0x32cf38 = _0x454086({
        type: _0x3d6b8d,
        tooltip: "腳色"
      });
      _0x415fed = _0x454086({
        type: Number,
        tooltip: "辣椒數"
      });
      _0x448fbf = _0x454086({
        type: Number,
        tooltip: "最大贏分倍率"
      });
      _0x5ba63f = _0x454086({
        type: _0x4fa226(_0x11e5c5),
        tooltip: "自動玩介面"
      });
      _0x157a4d = _0x454086({
        type: _0x57c330,
        tooltip: "是否開啟晚3秒ShowGameScene進入遊戲"
      });
      _0x2303bf = _0x454086({
        type: _0x57c330,
        tooltip: "可以跳過前導動畫"
      });
      _0x15d98f = _0x454086({
        type: _0x113db2,
        tooltip: "是否有其他特色樣式"
      });
      _0x5046c6 = _0x454086({
        type: _0xa20c19,
        tooltip: "是否有其他特色樣式"
      });
      _0x35f091 = _0x454086({
        type: _0x57c330,
        tooltip: "是否為遠程包"
      });
      _0xa3b5ef = _0x454086({
        type: _0x57c330,
        tooltip: "是否是SSS版"
      });
      _0x4e3f8d = _0x454086({
        type: _0x374045,
        tooltip: "使用哪個遠程包版本"
      });
      var _0x3e2bdc = _0x345238((_0x1fc818 = function (_0x25b093) {
        function _0x3dff21() {
          for (var _0x465d4f, _0x26e42c = arguments.length, _0x45ca8a = new Array(_0x26e42c), _0x15170d = 0; _0x15170d < _0x26e42c; _0x15170d++) {
            _0x45ca8a[_0x15170d] = arguments[_0x15170d];
          }
          _0x4f841b(_0x465d4f = _0x25b093.call.apply(_0x25b093, [this].concat(_0x45ca8a)) || this, "m_gameShortName", _0x1ff3a6, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_scenePrefabPath", _0x1adce0, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_gameImgPath", _0x433ed8, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_gameId", _0x317931, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_logoName", _0x826da1, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isLockLandScope", _0x525c29, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isLockPortrait", _0xa156f6, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isStreet", _0x2d38e7, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_singleLogo", _0x31b0c2, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_logoSpriteAtlas", _0x197254, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_pagePrefabPaths", _0x4db511, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_infoNames", _0x4f99c3, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_featureSpriteFrames", _0x525daf, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_bgSpriteFrames", _0x4b78a7, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_characterSpriteFrame", _0x246b86, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_chilliNum", _0x145ff7, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_maxWinNum", _0x22dc0d, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_autoplayPanelNo", _0x24fca6, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isWatting", _0x1166c2, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_skipIntro", _0x4a7832, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_styleSetting", _0x2218cf, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_playTypeSetting", _0x3a07dc, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isRemote", _0x1274d2, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_isSSS", _0x527e59, _0x2fdb02(_0x465d4f));
          _0x4f841b(_0x465d4f, "m_ReomveVersion", _0x23b463, _0x2fdb02(_0x465d4f));
          _0x465d4f.m_startSceneTime = -1;
          _0x465d4f.m_otherBundle = null;
          _0x465d4f.m_commonBundle = null;
          _0x465d4f.m_commonPath = "";
          _0x465d4f.m_commonVersion = "";
          _0x465d4f.m_langTextBundle = null;
          _0x465d4f.m_defaultLangPath = "";
          _0x465d4f.m_defaultLangVersion = "";
          _0x465d4f.m_commonMainBundle = null;
          _0x465d4f.m_gameBundle = null;
          _0x465d4f.m_pagePrefabs = [];
          _0x465d4f.m_apiId = 0;
          _0x465d4f.m_isTaDa = false;
          _0x465d4f.m_viewNode = null;
          _0x465d4f.m_lang = "en";
          _0x465d4f.m_loadOldType = true;
          _0x465d4f.m_isForceLite = false;
          return _0x465d4f;
        }
        _0x567cf6(_0x3dff21, _0x25b093);
        var _0x114da2 = _0x3dff21.prototype;
        _0x114da2.onLoad = function () {
          this.m_isTaDa = this.IsTada();
          this.Config();
          this.Log(100);
          null == window.SetProgressInterval || window.SetProgressInterval(60);
          "109" === this.m_gameId && (_0x5dab17.downloader.maxConcurrency = 12, _0x5dab17.downloader.maxRequestsPerFrame = 12);
        };
        _0x114da2.start = function () {
          var _0x1548a5 = _0x12d1c6(_0x41e40d().mark(function _0x5e7b4e() {
            return _0x41e40d().wrap(function (_0x224c0c) {
              for (;;) {
                switch (_0x224c0c.prev = _0x224c0c.next) {
                  case 0:
                    this.m_startSceneTime = this.m_isWatting ? Date.now() : -1;
                    _0x224c0c.next = 3;
                    return this.LoadVersion("game");
                  case 3:
                  case "end":
                    return _0x224c0c.stop();
                }
              }
            }, _0x5e7b4e, this);
          }));
          return function () {
            return _0x1548a5.apply(this, arguments);
          };
        }();
        _0x114da2.Config = function () {
          _0x556148.prototype.fillBuffers = function (_0x42bc27) {
            this._renderFlag && _0x42bc27._pOpacity > 0 && this._render(_0x42bc27);
          };
        };
        _0x114da2.update = function () {};
        _0x114da2.LoadZip = function () {
          var _0x2c0db3 = _0x12d1c6(_0x41e40d().mark(function _0x166820(_0x54751c, _0x374760, _0x3eb348, _0x2b4f2e) {
            var _0x1f7eac;
            var _0x1accd2;
            var _0x40cf9a;
            return _0x41e40d().wrap(function (_0x50b529) {
              for (;;) {
                switch (_0x50b529.prev = _0x50b529.next) {
                  case 0:
                    if (undefined === _0x3eb348 && (_0x3eb348 = ""), undefined === _0x2b4f2e && (_0x2b4f2e = ""), _0x233b06) {
                      _0x50b529.next = 4;
                      break;
                    }
                    return _0x50b529.abrupt("return");
                  case 4:
                    if (!(_0x233b06.loadedZipNames.indexOf(_0x54751c) >= 0)) {
                      _0x50b529.next = 6;
                      break;
                    }
                    return _0x50b529.abrupt("return");
                  case 6:
                    if (_0x374760 || -1 !== _0x2ee2df.indexOf(_0x54751c)) {
                      _0x50b529.next = 8;
                      break;
                    }
                    return _0x50b529.abrupt("return");
                  case 8:
                    _0x1f7eac = _0x3eb348;
                    _0x1accd2 = _0x2b4f2e;
                    _0x374760 || (_0x40cf9a = _0x574fac.querySettings(_0x5e4c28.Category.ASSETS, "bundleVers"), _0x1f7eac = "./assets/" + _0x54751c, _0x1accd2 = _0x40cf9a[_0x54751c]);
                    _0x233b06.loadedZipNames.push(_0x54751c);
                    _0x50b529.next = 13;
                    return _0x233b06.loadZip(_0x1f7eac, _0x1accd2);
                  case 13:
                  case "end":
                    return _0x50b529.stop();
                }
              }
            }, _0x166820);
          }));
          return function (_0x354070, _0x228038, _0x3bb0e3, _0x3cfc63) {
            return _0x2c0db3.apply(this, arguments);
          };
        }();
        _0x114da2.LoadVersion = function () {
          var _0x3f0dfb = _0x12d1c6(_0x41e40d().mark(function _0x4ec29d(_0x57f405) {
            var _0x1b8b6c;
            var _0x54df8e;
            var _0x1e6718;
            var _0x40df68;
            var _0x3714be;
            var _0x1fcc37;
            var _0x4e8d94;
            var _0x161e44;
            var _0x1e1fbf;
            var _0x39577c;
            var _0x1a0075;
            var _0x11eb64;
            var _0x5cf017;
            var _0x3cbea3;
            var _0x5f09b5;
            var _0x343abd;
            var _0x503503;
            var _0x39dd8d;
            var _0x3dd7b2;
            var _0x394d17;
            var _0x21be57;
            var _0x59b435;
            var _0x43e055;
            var _0x495689;
            return _0x41e40d().wrap(function (_0x331b79) {
              for (;;) {
                switch (_0x331b79.prev = _0x331b79.next) {
                  case 0:
                    _0x1b8b6c = globalThis.LobbyData;
                    _0x54df8e = this.m_isTaDa ? "tada" : "jili";
                    this.m_commonPath = "assets/common/Astt/" + _0x54df8e;
                    _0x1e6718 = "assets/common/Astt/" + _0x54df8e + "Main";
                    _0x40df68 = "assets/common/Astt/other";
                    _0x3714be = "AsttText/AsttText/en";
                    this.m_defaultLangPath = "AsttText/AsttText/en";
                    _0x1fcc37 = "assets/" + _0x57f405;
                    this.m_commonVersion = "";
                    _0x4e8d94 = "";
                    _0x161e44 = "";
                    this.m_defaultLangVersion = "";
                    _0x1e1fbf = "";
                    _0x39577c = "";
                    _0x1a0075 = "";
                    _0x11eb64 = "";
                    try {
                      undefined !== _0x1b8b6c && (console.error("lobbyData", JSON.stringify(_0x1b8b6c)), _0x1fcc37 = _0x1b8b6c.bundleDomin + _0x57f405, _0x39577c = _0x1b8b6c.versionJson[_0x57f405], this.m_commonPath = _0x1b8b6c.bundleDomin + _0x54df8e, this.m_commonVersion = _0x1b8b6c.versionJson[_0x54df8e], _0x40df68 = _0x1b8b6c.bundleDomin + "other", _0x1e1fbf = _0x1b8b6c.versionJson.other);
                    } catch (_0x210009) {}
                    if (!this.m_isRemote) {
                      _0x331b79.next = 55;
                      break;
                    }
                    _0x5cf017 = /(\d+)\.(\d+)/;
                    _0x3cbea3 = _0x215a2c.match(_0x5cf017);
                    _0x5f09b5 = _0x3cbea3[1] + "." + _0x3cbea3[2];
                    _0x343abd = "https://" + window.location.host + "/";
                    _0x503503 = "astarte";
                    _0x39dd8d = "web-mobile";
                    _0x2899bc.isNative && (_0x39dd8d = "android", _0x5f09b5 = "app" + _0x5f09b5);
                    this.m_ReomveVersion.length > 0 && (_0x39dd8d = _0x39dd8d + "-" + this.m_ReomveVersion);
                    _0x1b8b6c && (_0x343abd = _0x1b8b6c.cdnHost);
                    this.m_isSSS && (_0x503503 = "astarte3");
                    (_0x3dd7b2 = this.GetLinkParameterByName("remoteVersion")) && _0x3dd7b2.length > 0 && (_0x5f09b5 = "" + _0x3dd7b2 + _0x3cbea3[1] + "." + _0x3cbea3[2]);
                    _0x331b79.next = 33;
                    return new Promise(function (_0x41d781) {
                      _0x5dab17.loadRemote("" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/versions.json?" + (Date.now() / 600).toFixed(0), {
                        reload: true,
                        cacheAsset: false,
                        cacheEnabled: false
                      }, _0x12d1c6(_0x41e40d().mark(function _0x2e977d(_0x525ef8, _0x52367f) {
                        return _0x41e40d().wrap(function (_0x979134) {
                          for (;;) {
                            switch (_0x979134.prev = _0x979134.next) {
                              case 0:
                                _0x41d781(_0x52367f);
                              case 1:
                              case "end":
                                return _0x979134.stop();
                            }
                          }
                        }, _0x2e977d);
                      })));
                    });
                  case 33:
                    if (_0x394d17 = _0x331b79.sent, _0x21be57 = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/src/chunks/bundle." + _0x394d17.json["bundle.js"] + ".js", !_0x2899bc.isNative) {
                      _0x331b79.next = 40;
                      break;
                    }
                    _0x331b79.next = 38;
                    return new Promise(function (_0x46d250, _0x57bb05) {
                      _0x5dab17.downloader.downloadScript(_0x21be57, {
                        systemJs: true
                      }, function (_0x9d07c0) {
                        _0x9d07c0 ? (console.error("load bundle error", _0x9d07c0), _0x57bb05(_0x9d07c0)) : _0x46d250();
                      });
                    });
                  case 38:
                    _0x331b79.next = 42;
                    break;
                  case 40:
                    _0x331b79.next = 42;
                    return System.import(_0x21be57);
                  case 42:
                    _0x40df68 = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/other";
                    _0x1e1fbf = _0x394d17.json.other;
                    this.m_commonPath = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/" + _0x54df8e;
                    this.m_commonVersion = _0x394d17.json[_0x54df8e];
                    _0x1e6718 = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/" + _0x54df8e + "Main";
                    _0x4e8d94 = _0x394d17.json[_0x54df8e + "Main"];
                    this.m_lang = this.GetLanguage();
                    _0x3714be = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/" + this.m_lang;
                    _0x161e44 = _0x394d17.json[this.m_lang];
                    this.m_defaultLangPath = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/en";
                    this.m_defaultLangVersion = _0x394d17.json.en;
                    _0x1a0075 = "" + _0x343abd + _0x503503 + "/" + _0x5f09b5 + "/" + _0x39dd8d + "/assets/extra";
                    _0x11eb64 = _0x394d17.json.extra;
                  case 55:
                    if (("" != _0x4e8d94 && null != _0x4e8d94 || !this.m_isRemote) && (this.m_loadOldType = false), !this.m_loadOldType) {
                      _0x331b79.next = 71;
                      break;
                    }
                    _0x331b79.next = 59;
                    return Promise.all([this.LoadZip(_0x54df8e, this.m_isRemote, this.m_commonPath, this.m_commonVersion), this.LoadZip(_0x57f405, false)]);
                  case 59:
                    (_0x59b435 = [this.LoadBundleSync(_0x40df68, _0x1e1fbf), this.LoadBundleSync(_0x1fcc37, _0x39577c, undefined, {
                      bundleName: undefined !== _0x1b8b6c ? this.m_gameShortName + _0x57f405 : undefined
                    })]).push(this.LoadBundleSync(_0x1e6718, _0x4e8d94), this.LoadBundleSync(_0x3714be, _0x161e44));
                    _0x331b79.next = 63;
                    return Promise.all(_0x59b435);
                  case 63:
                    _0x43e055 = _0x331b79.sent;
                    this.m_otherBundle = _0x43e055[0];
                    this.m_gameBundle = _0x43e055[1];
                    this.m_commonMainBundle = _0x43e055[2];
                    this.m_langTextBundle = _0x43e055[3];
                    this.CheckBundles();
                    _0x331b79.next = 76;
                    break;
                  case 71:
                    _0x495689 = [this.LoadBundleSync(_0x1a0075, _0x11eb64), this.LoadBundleSync(_0x1e6718, _0x4e8d94, _0x227b6b.CommonMainBundle), this.LoadBundleSync(_0x40df68, _0x1e1fbf, _0x227b6b.OtherBundle), this.LoadBundleSync(_0x3714be, _0x161e44, _0x227b6b.LangTextBundle), this.LoadZip(_0x54df8e + "Main", this.m_isRemote, _0x1e6718, _0x4e8d94), this.LoadBundleSync(this.m_commonPath, this.m_commonVersion, _0x227b6b.CommonBundle)];
                    this.m_isForceLite ? _0x495689.push(this.LoadBundleSync("assets/gameLite", "", _0x227b6b.GameBundle)) : this.m_isTaDa || _0x495689.push(this.LoadBundleSync("assets/game", "", _0x227b6b.GameBundle));
                    _0x331b79.next = 75;
                    return Promise.all(_0x495689);
                  case 75:
                    this.CheckBundles();
                  case 76:
                  case "end":
                    return _0x331b79.stop();
                }
              }
            }, _0x4ec29d, this);
          }));
          return function (_0x36a331) {
            return _0x3f0dfb.apply(this, arguments);
          };
        }();
        _0x114da2.CheckBundles = function () {
          this.m_loadOldType ? this.m_otherBundle && this.m_gameBundle && this.m_commonBundle && this.LoadIntroResources() : this.m_commonMainBundle && this.m_otherBundle && this.m_langTextBundle && (!this.m_isForceLite || this.m_isForceLite && this.m_gameBundle) && this.LoadIntroResources();
        };
        _0x114da2.LoadBundle = function (_0x1fc53, _0x4c190d, _0x555b2d, _0x283a7d) {
          var _0x2ab31c = this;
          _0x283a7d || (_0x283a7d = {});
          _0x283a7d.version = _0x4c190d;
          _0x5dab17.loadBundle(_0x1fc53, _0x283a7d, function (_0x27f39e, _0x47b49e) {
            _0x27f39e ? _0x2ab31c.LoadBundle(_0x1fc53, _0x4c190d, _0x555b2d) : _0x555b2d(_0x47b49e);
          });
        };
        _0x114da2.LoadBundleSync = function (_0x3bb351, _0x32ffe4, _0x3b606c, _0x13b823) {
          var _0xb01092 = this;
          return new Promise(function (_0x2ddf34) {
            _0xb01092.LoadBundle(_0x3bb351, _0x32ffe4, function (_0x3aaf00) {
              if (undefined !== _0x3b606c) {
                switch (_0x3b606c) {
                  case _0x227b6b.CommonMainBundle:
                    _0xb01092.m_commonMainBundle = _0x3aaf00;
                    break;
                  case _0x227b6b.CommonBundle:
                    _0xb01092.m_commonBundle = _0x3aaf00;
                    break;
                  case _0x227b6b.OtherBundle:
                    _0xb01092.m_otherBundle = _0x3aaf00;
                    break;
                  case _0x227b6b.LangTextBundle:
                    _0xb01092.m_langTextBundle = _0x3aaf00;
                    break;
                  case _0x227b6b.GameBundle:
                    _0xb01092.m_gameBundle = _0x3aaf00;
                }
              }
              _0x2ddf34(_0x3aaf00);
            }, _0x13b823);
          });
        };
        _0x114da2.LoadIntroResources = function () {
          if ("109" == this.m_gameId && (window.DiffTime961 = Date.now() - window.StartTime), this.LoadIntroView(), this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
            for (var _0x343a7d = 0; _0x343a7d < this.m_pagePrefabPaths.length; _0x343a7d++) {
              this.LoadIntroCell(_0x343a7d);
            }
          }
        };
        _0x114da2.LoadIntroView = function () {
          var _0x905017 = this;
          var _0x99d755 = "Astt/%s/Intro/Prefab/IntroView";
          _0x99d755 = this.m_isTaDa ? _0x41441d.formatStr(_0x99d755, "framework_americas") : _0x41441d.formatStr(_0x99d755, "framework");
          var _0x431a9f = this.m_commonMainBundle;
          this.m_loadOldType && (_0x431a9f = this.m_commonBundle);
          _0x431a9f.load(_0x99d755, _0x49fc57, function (_0x237258, _0x4d49e3) {
            null == window.SetProgressInterval || window.SetProgressInterval(_0x237258 / _0x4d49e3 * 40 + 60);
          }, function (_0x232cd7, _0x18bb8b) {
            if (_0x232cd7) {
              console.error("LoadIntroView ERROR", _0x232cd7);
              return void _0x905017.LoadIntroView();
            }
            _0x905017.m_viewNode = _0x15ae44(_0x18bb8b);
            _0x905017.node.addChild(_0x905017.m_viewNode);
            _0x905017.CheckIntroResources();
          });
        };
        _0x114da2.LoadIntroCell = function (_0x3f06bd) {
          var _0x37ae05 = this;
          this.m_gameBundle.load(this.m_pagePrefabPaths[_0x3f06bd], _0x49fc57, function (_0x442561, _0x141cf5) {
            _0x442561 ? _0x37ae05.LoadIntroCell(_0x3f06bd) : (_0x37ae05.m_pagePrefabs[_0x3f06bd] = _0x141cf5, _0x37ae05.CheckIntroResources());
          });
        };
        _0x114da2.CheckIntroResources = function () {
          if (this.m_viewNode) {
            if (this.m_gameBundle && this.m_pagePrefabPaths.length > 0) {
              for (var _0x2247f9 = 0; _0x2247f9 < this.m_pagePrefabPaths.length; _0x2247f9++) {
                if (!this.m_pagePrefabs[_0x2247f9]) {
                  return;
                }
              }
            }
            this.Complete();
          }
        };
        _0x114da2.Complete = function () {
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
            lstZipBundleName: _0x2ee2df,
            IsRemote: this.m_isRemote,
            LoadLessRes: false,
            SkipIntro: this.m_skipIntro,
            IsSSS: this.m_isSSS
          });
        };
        _0x114da2.GetLanguage = function () {
          var _0x383c51;
          var _0x53a1ee;
          var _0x2d8726;
          var _0x394131 = this.GetLinkParameterByName("lang") || this.GetLinkParameterByName("ln");
          if (null != (_0x383c51 = window) && null != (_0x53a1ee = _0x383c51.location) && null != (_0x2d8726 = _0x53a1ee.href) && _0x2d8726.includes("/sss-") && (_0x394131 = "en-US"), _0x394131) {
            var _0x5c1082 = this.FormatLang(_0x394131);
            if ("" !== _0x5c1082) {
              return _0x5c1082;
            }
          }
          if (!_0x2899bc.isNative) {
            var _0x3d313d = this.FormatLang(navigator.language);
            if ("" !== _0x3d313d && null != _0x3d313d) {
              return _0x3d313d;
            }
          }
          return _0x404365;
        };
        _0x114da2.IsTada = function () {
          var _0x127592 = (this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("");
          var _0x2ff88b = Number(this.GetLinkParameterByName("apiId"));
          var _0x11267c = -1 !== _0x127592.search("tada");
          if (!isNaN(_0x2ff88b)) {
            this.m_apiId = Number(_0x2ff88b);
            this.m_isForceLite = -1 !== _0x2ee2df.indexOf("gameLite") && _0x424529.includes(this.m_apiId);
            for (var _0x49c5fb = 0; _0x49c5fb < _0xb2de05.Equal.length; _0x49c5fb++) {
              if (_0x2ff88b === _0xb2de05.Equal[_0x49c5fb]) {
                _0x11267c = true;
                break;
              }
            }
          }
          var _0x5073fb = this.GetLinkParameterByName("tadaSkin");
          _0x5073fb && "1" === _0x5073fb && (_0x11267c = true);
          var _0x287d26 = this.GetLinkParameterByName("skin");
          !_0x287d26 || _0x287d26 != _0x3b55b9.TADA.toString() && _0x287d26 != _0x3b55b9.TADA_CASINO.toString() || (_0x11267c = true);
          return _0x11267c;
        };
        _0x114da2.GetLinkParameterByName = function (_0x49d42a, _0x251f89) {
          if (undefined === _0x251f89 && (_0x251f89 = null), !_0x251f89) {
            if ("undefined" != typeof LobbyData) {
              try {
                "" === (_0x251f89 = LobbyData.url) && _0x3c3cbe("No URL!");
              } catch (_0x61fdbb) {
                _0x61fdbb(JSON.stringify(_0x61fdbb));
              }
            } else {
              _0x251f89 = this.CheckReplayUrlAndDecode();
            }
          }
          _0x49d42a = _0x49d42a.replace(/[[\]]/g, "\\$&");
          var _0x15298a = new RegExp("[?&]" + _0x49d42a + "(=([^&#]*)|&|#|$)").exec(_0x251f89);
          return _0x15298a ? _0x15298a[2] ? decodeURIComponent(_0x15298a[2].replace(/\+/g, " ")) : "" : null;
        };
        _0x114da2.CheckReplayUrlAndDecode = function () {
          var _0x278a82 = window.location.href;
          var _0x24c643 = this.GetLinkParameterByName("replaydata", _0x278a82);
          if (!_0x24c643) {
            return _0x278a82;
          }
          for (var _0x3c5741 = "0".charCodeAt(0), _0x22517d = "9".charCodeAt(0), _0x93fdb3 = "a".charCodeAt(0), _0x2fc93b = "z".charCodeAt(0), _0x1a0f8c = "A".charCodeAt(0), _0x507c0a = "Z".charCodeAt(0), _0x12a1c1 = "", _0x4416c6 = 0; _0x4416c6 < _0x24c643.length; _0x4416c6++) {
            var _0x298d87 = _0x24c643.charCodeAt(_0x4416c6);
            _0x298d87 >= _0x3c5741 && _0x298d87 <= _0x22517d ? (_0x298d87 = _0x22517d - (_0x298d87 - _0x3c5741), _0x12a1c1 += String.fromCharCode(_0x298d87)) : _0x298d87 >= _0x93fdb3 && _0x298d87 <= _0x2fc93b && _0x4416c6 % 2 == 0 ? (_0x298d87 = _0x2fc93b - (_0x298d87 - _0x93fdb3), _0x12a1c1 += String.fromCharCode(_0x298d87)) : _0x298d87 >= _0x1a0f8c && _0x298d87 <= _0x507c0a && _0x4416c6 % 3 == 0 ? (_0x298d87 = _0x507c0a - (_0x298d87 - _0x1a0f8c), _0x12a1c1 += String.fromCharCode(_0x298d87)) : _0x12a1c1 += String.fromCharCode(_0x298d87);
          }
          var _0x36b95f = _0x278a82.split("replaydata=" + _0x24c643);
          _0x36b95f.join("");
          return _0x36b95f + atob(_0x12a1c1);
        };
        _0x114da2.Log = function (_0x29e259) {
          if (!_0x2899bc.isNative) {
            var _0x5216ed = "https://" + window.location.host + "/";
            if (-1 == _0x5216ed.indexOf("localhost") && 1 != /^http(s)?:\/\/([0-9]{1,3}\.){3}[0-9]{1,3}(:[0-9]+)?\/.*?$/.test(_0x5216ed)) {
              var _0x43dc55 = this.GetLinkParameterByName("apiId");
              var _0x56d6c9 = this.GetLinkParameterByName("ssoKey");
              var _0x2a5159 = "https://" + (this.GetLinkParameterByName("domain_platform") || this.GetLinkParameterByName("gs") || "gnidnawcs").split("").reverse().join("") + "/webservice/event/trigger?";
              _0x2a5159 += "AccountID=-1&BrowserSystem=-1&DeviceSystem=-1&GameID=" + this.m_gameId + "&GameVersion=" + new Date().getTime() + "&EventID=" + _0x29e259 + "&EventStatus=0&SSOKey=" + _0x56d6c9 + "&CreateTime=" + new Date().toISOString() + "&ApiId=" + _0x43dc55;
              this.Send(_0x2a5159);
              window.DiffTime960 = Date.now() - window.StartTime;
            }
          }
        };
        _0x114da2.Send = function (_0x232f13) {
          var _0x53493b = {
            Accept: "application/json, text/javascript, text/plain"
          };
          var _0x2c9b17 = new XMLHttpRequest();
          _0x2c9b17.open("GET", _0x232f13, true);
          _0x53493b && Object.keys(_0x53493b).forEach(function (_0x478c77) {
            return _0x2c9b17.setRequestHeader(_0x478c77, _0x53493b[_0x478c77]);
          });
          _0x2c9b17.timeout = 5000;
          _0x2c9b17.onload = function () {};
          _0x2c9b17.onerror = function () {};
          _0x2c9b17.ontimeout = function () {};
          _0x2c9b17.send();
        };
        _0x114da2.FormatLang = function (_0x1dbe6c) {
          return (_0x1dbe6c = _0x1dbe6c.toLocaleLowerCase()) == "cn" || _0x1dbe6c == "zh-CN".toLocaleLowerCase() ? "cn" : _0x1dbe6c == "en" || _0x1dbe6c == "en-US".toLocaleLowerCase() ? "en" : _0x1dbe6c == "th" || _0x1dbe6c == "th-TH".toLocaleLowerCase() ? "th" : _0x1dbe6c == "vn" || _0x1dbe6c == "vi-VN".toLocaleLowerCase() ? "vn" : _0x1dbe6c == "id" || _0x1dbe6c == "id-ID".toLocaleLowerCase() ? "id" : _0x1dbe6c == "hi" || _0x1dbe6c == "hi-IN".toLocaleLowerCase() ? "hi" : _0x1dbe6c == "ta" || _0x1dbe6c == "ta-IN".toLocaleLowerCase() ? "ta" : _0x1dbe6c == "mm" || _0x1dbe6c == "my-MM".toLocaleLowerCase() ? "mm" : _0x1dbe6c == "jp" || _0x1dbe6c == "ja-JP".toLocaleLowerCase() ? "jp" : _0x1dbe6c == "ms" || _0x1dbe6c == "ms-MY".toLocaleLowerCase() ? "ms" : _0x1dbe6c == "ko" || _0x1dbe6c == "ko-KR".toLocaleLowerCase() ? "ko" : _0x1dbe6c == "bn" || _0x1dbe6c == "bn-IN".toLocaleLowerCase() ? "bn" : _0x1dbe6c == "es" || _0x1dbe6c == "es-AR".toLocaleLowerCase() ? "es" : _0x1dbe6c == "pt" || _0x1dbe6c == "pt-BR".toLocaleLowerCase() ? "pt" : _0x1dbe6c == "it" || _0x1dbe6c == "it-IT".toLocaleLowerCase() ? "it" : _0x1dbe6c == "se" || _0x1dbe6c == "sv-SE".toLocaleLowerCase() ? "se" : _0x1dbe6c == "de" || _0x1dbe6c == "de-DE".toLocaleLowerCase() ? "de" : _0x1dbe6c == "da" || _0x1dbe6c == "da-DK".toLocaleLowerCase() ? "da" : _0x1dbe6c == "ro" || _0x1dbe6c == "ro-RO".toLocaleLowerCase() ? "ro" : _0x1dbe6c == "nl" || _0x1dbe6c == "nl-NL".toLocaleLowerCase() ? "nl" : _0x1dbe6c == "trTR".toLocaleLowerCase() || _0x1dbe6c == "tr-TR".toLocaleLowerCase() ? "trTR" : _0x1dbe6c == "ruRU".toLocaleLowerCase() || _0x1dbe6c == "ru-RU".toLocaleLowerCase() ? "ruRU" : _0x1dbe6c == "grGR".toLocaleLowerCase() || _0x1dbe6c == "gr-GR".toLocaleLowerCase() ? "grGR" : _0x1dbe6c == "frFR".toLocaleLowerCase() || _0x1dbe6c == "fr-FR".toLocaleLowerCase() ? "frFR" : "";
        };
        return _0x3dff21;
      }(_0x5aac4b), _0x1ff3a6 = _0x5a72b5(_0x1fc818.prototype, "m_gameShortName", [_0x1d1ec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x1adce0 = _0x5a72b5(_0x1fc818.prototype, "m_scenePrefabPath", [_0x4720af], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x433ed8 = _0x5a72b5(_0x1fc818.prototype, "m_gameImgPath", [_0x5127a0], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x317931 = _0x5a72b5(_0x1fc818.prototype, "m_gameId", [_0x22979d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x826da1 = _0x5a72b5(_0x1fc818.prototype, "m_logoName", [_0x3537a8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x525c29 = _0x5a72b5(_0x1fc818.prototype, "m_isLockLandScope", [_0x473944], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0xa156f6 = _0x5a72b5(_0x1fc818.prototype, "m_isLockPortrait", [_0x7e171d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2d38e7 = _0x5a72b5(_0x1fc818.prototype, "m_isStreet", [_0x45ccb4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x31b0c2 = _0x5a72b5(_0x1fc818.prototype, "m_singleLogo", [_0x383897], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x197254 = _0x5a72b5(_0x1fc818.prototype, "m_logoSpriteAtlas", [_0x29b04d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x4db511 = _0x5a72b5(_0x1fc818.prototype, "m_pagePrefabPaths", [_0x44ef22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x4f99c3 = _0x5a72b5(_0x1fc818.prototype, "m_infoNames", [_0x3856e5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x525daf = _0x5a72b5(_0x1fc818.prototype, "m_featureSpriteFrames", [_0x44d7bb], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x4b78a7 = _0x5a72b5(_0x1fc818.prototype, "m_bgSpriteFrames", [_0x37182b], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x246b86 = _0x5a72b5(_0x1fc818.prototype, "m_characterSpriteFrame", [_0x32cf38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _0x145ff7 = _0x5a72b5(_0x1fc818.prototype, "m_chilliNum", [_0x415fed], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x22dc0d = _0x5a72b5(_0x1fc818.prototype, "m_maxWinNum", [_0x448fbf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _0x24fca6 = _0x5a72b5(_0x1fc818.prototype, "m_autoplayPanelNo", [_0x5ba63f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return _0x11e5c5.None;
        }
      }), _0x1166c2 = _0x5a72b5(_0x1fc818.prototype, "m_isWatting", [_0x157a4d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x4a7832 = _0x5a72b5(_0x1fc818.prototype, "m_skipIntro", [_0x2303bf], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x2218cf = _0x5a72b5(_0x1fc818.prototype, "m_styleSetting", [_0x15d98f], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0x113db2();
        }
      }), _0x3a07dc = _0x5a72b5(_0x1fc818.prototype, "m_playTypeSetting", [_0x5046c6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new _0xa20c19();
        }
      }), _0x1274d2 = _0x5a72b5(_0x1fc818.prototype, "m_isRemote", [_0x35f091], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x527e59 = _0x5a72b5(_0x1fc818.prototype, "m_isSSS", [_0xa3b5ef], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x23b463 = _0x5a72b5(_0x1fc818.prototype, "m_ReomveVersion", [_0x4e3f8d], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _0x3b5708 = _0x1fc818)) || _0x3b5708;
      var _0x2b3221;
      var _0x57b729;
      var _0x286463;
      var _0xa13236;
      var _0x2380ae;
      var _0x3df2df;
      var _0x5ad2bf;
      var _0x59ab17;
      var _0x3434a9;
      var _0x1cc9bf;
      var _0x1b297e;
      var _0xdc2565;
      _0xa10b8c._RF.pop();
      _0xa10b8c._RF.push({}, "89025dALbBFj7AFo+6o3xYM", "SwipeScreen", undefined);
      var _0x54cb76 = _0x42d118.ccclass;
      var _0x5de8b1 = _0x42d118.property;
      var _0x107c82 = function (_0x16bb8f, _0x43be42, _0x5388e8, _0x5556ff, _0x316beb, _0x4ca9df) {
        this.name = _0x16bb8f;
        this.height = _0x43be42;
        this.width = _0x5388e8;
        this.ratio = _0x5556ff;
        this.statusHeight = _0x316beb;
        this.homeHeight = _0x4ca9df;
      };
      var _0x460b2e = [new _0x107c82("iPhone 6.5-inch", 896, 414, 3, 44, 34), new _0x107c82("iPhone 6.1-inch", 896, 414, 2, 44, 34), new _0x107c82("iPhone 5.8-inch", 812, 375, 3, 44, 34), new _0x107c82("iPhone 5.5-inch", 736, 414, 3, 18, 0), new _0x107c82("iPhone 4.7-inch", 667, 375, 2, 20, 0), new _0x107c82("iPhone 4-inch", 568, 320, 2, 20, 0), new _0x107c82("iPhone 3.5-inch", 480, 320, 2, 20, 0), new _0x107c82("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0), new _0x107c82("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0), new _0x107c82("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0), new _0x107c82("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0), new _0x107c82("iPad", 1024, 768, 1, 20, 0), new _0x107c82("iPad Mini Retina", 1024, 768, 2, 20, 0), new _0x107c82("iPad Mini", 1024, 768, 1, 20, 0)];
      var _0x1cea96 = {
        tw: ["滑動無效時, 請點擊此處進入遊戲. ❎", "請解除豎排方向鎖定, 並將手機水平放置."],
        cn: ["滑动无效时, 请点击此处进入游戏. ❎", "请解除竖排方向锁定, 并将手机水平放置."],
        th: ["เมื่อสไลด์ไม่ถูกต้อง กรุณาคลิกที่นี่เพื่อเข้าสู่เกม ❎", "โปรดทำการปลดล็อกรูปแบบทิศทาง เพื่อสามารถเปลี่ยนรูปแบบทิศทางตามระดับโทรศัพท์ได้"],
        vn: ["Nếu không thể lthao tác, hãy chạm vào đây để vào game. ❎", "Hãy mở khóa xoay hướng, đồng thời xoay ngang màn hình."],
        id: ["Klik di sini untuk masuk ke permainan, ketika tidak bisa di scroll. ❎", "Silakan buka kunci posisi vertikal, dan letakkan telepon seluler secara horizontal."],
        mm: ["When the slide is invalid, please click here. ❎", "Please unlock the vertical direction and place the phone horizontally."],
        jp: ["スライドで入れない場合は、ここをタップしてください。 ❎", "垂直固定を解除し、端末を水平方向に置いてください。"],
        en: ["If swiping does not work, please tap here. ❎", "Please unlock screen rotation and hold the phone horizontally."]
      };
      var _0x4f2753 = {
        tw: ["tw", "zh-TW"],
        cn: ["cn", "zh-CN"],
        en: ["en", "en-US"],
        th: ["th", "th-TH"],
        vn: ["vn", "vi-VN"],
        id: ["id", "id-ID"],
        hi: ["hi", "hi-IN"],
        ta: ["ta", "ta-IN"],
        mm: ["mm", "my-MM"],
        jp: ["jp", "ja-JP"]
      };
      var _0x1c7e28 = [1131];
      var _0x24e0bc = [1864, 1002];
      _0x2b3221 = _0x5de8b1(Boolean);
      _0x57b729 = _0x5de8b1(Boolean);
      _0x286463 = _0x5de8b1(Boolean);
      _0xa13236 = _0x5de8b1(Boolean);
      _0x2380ae = _0x5de8b1(Number);
      var _0x4380bd = _0x54cb76((_0x5ad2bf = function (_0x22c45a) {
        function _0x319620() {
          for (var _0x51c435, _0x16360b = arguments.length, _0x23e056 = new Array(_0x16360b), _0x55882f = 0; _0x55882f < _0x16360b; _0x55882f++) {
            _0x23e056[_0x55882f] = arguments[_0x55882f];
          }
          _0x4f841b(_0x51c435 = _0x22c45a.call.apply(_0x22c45a, [this].concat(_0x23e056)) || this, "isLandscape", _0x59ab17, _0x2fdb02(_0x51c435));
          _0x4f841b(_0x51c435, "isPortrait", _0x3434a9, _0x2fdb02(_0x51c435));
          _0x4f841b(_0x51c435, "isIOS", _0x1cc9bf, _0x2fdb02(_0x51c435));
          _0x4f841b(_0x51c435, "isAndroid", _0x1b297e, _0x2fdb02(_0x51c435));
          _0x4f841b(_0x51c435, "android_Apiid", _0xdc2565, _0x2fdb02(_0x51c435));
          _0x51c435.m_mask = null;
          _0x51c435.m_isScrolling = false;
          _0x51c435.m_isblock = false;
          _0x51c435.m_scrollInterval = undefined;
          _0x51c435.m_scrollTimeOut = undefined;
          _0x51c435.m_backGround = null;
          _0x51c435.m_isLandscape = true;
          return _0x51c435;
        }
        _0x567cf6(_0x319620, _0x22c45a);
        var _0x454856 = _0x319620.prototype;
        _0x454856.onLoad = function () {
          _0x2899bc.isNative || this.Init();
        };
        _0x454856.GetDeviceName = function () {
          if (_0x2899bc.os === _0x2899bc.OS.IOS) {
            var _0x1bcc19 = this.GetiOSDevice();
            if (_0x1bcc19) {
              return _0x1bcc19.name;
            }
          } else {
            if (_0x2899bc.os === _0x2899bc.OS.ANDROID) {
              var _0x2ce10d = /Mozilla\/5.0\s*\([^()]*?(Android[^()]*?);\s*([^()]*?)\)/g.exec(navigator.userAgent);
              if (_0x2ce10d && _0x2ce10d.length > 2) {
                return _0x2ce10d[2].split(" Build")[0];
              }
            }
          }
          return "unknown";
        };
        _0x454856.CreateHtmlTag = function () {
          if (!this.m_backGround) {
            this.node.active = true;
            var _0x4c5147 = document.body;
            _0x4c5147.style.overflow = "visible";
            var _0x34f16f = document.getElementById("Cocos3dGameContainer");
            _0x34f16f.style.overflow = "hidden";
            _0x34f16f.style.position = "fixed";
            var _0xb89d31 = document.createElement("div");
            _0xb89d31.id = "bar";
            _0xb89d31.style.position = "absolute";
            _0xb89d31.style.height = "100vh";
            var _0x1f102e = document.createElement("div");
            _0x1f102e.id = "mask";
            _0x1f102e.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            _0x1f102e.style.height = "150vh";
            _0x1f102e.style.width = "100vw";
            _0x1f102e.style.zIndex = "99";
            _0x1f102e.style.display = "none";
            _0x1f102e.style.position = "absolute";
            _0x1f102e.style.top = "0%";
            _0x1f102e.style.left = "0%";
            this.m_backGround = _0x1f102e;
            var _0x202b98 = document.createElement("div");
            _0x202b98.id = "mask_close_tip";
            _0x202b98.style.width = "70vw";
            _0x202b98.style.top = "28vh";
            _0x202b98.style.left = "50vw";
            _0x202b98.style.transform = "translate(-50%, -50%)";
            _0x202b98.style.fontSize = "18px";
            _0x202b98.style.fontWeight = "bold";
            _0x202b98.style.color = "#FFFFFF";
            _0x202b98.style.position = "fixed";
            var _0x4fa4ae = document.createElement("div");
            _0x4fa4ae.style.top = "16vh";
            _0x4fa4ae.style.left = "50vw";
            _0x4fa4ae.style.transform = "translate(-50%, -50%)";
            _0x4fa4ae.style.position = "fixed";
            var _0x1f92ea = document.createElement("div");
            _0x1f92ea.id = "mask_close";
            _0x1f92ea.style.width = "90vw";
            _0x1f92ea.style.fontSize = "24px";
            _0x1f92ea.style.fontWeight = "bold";
            _0x1f92ea.style.color = "#EEE8AA";
            _0x1f92ea.style.wordWrap = "break-word";
            var _0x5a9616 = document.createElement("div");
            _0x5a9616.style.fontSize = "48px";
            _0x5a9616.style.fontWeight = "bold";
            _0x5a9616.style.color = "#EEE8AA";
            var _0x7caee4 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            _0x7caee4.style.width = "150px";
            _0x7caee4.style.height = "150px";
            _0x7caee4.style.position = "fixed";
            _0x7caee4.style.top = "75vh";
            _0x7caee4.style.left = "50vw";
            _0x7caee4.style.transform = "translate(-50%, -50%)";
            _0x7caee4.style.animationDuration = "2s";
            _0x7caee4.style.animationName = "fullscreen-swipe";
            _0x7caee4.style.animationIterationCount = "infinite";
            var _0x33b4d5 = document.createElement("style");
            var _0x13889d = document.createTextNode("@keyframes fullscreen-swipe {from { top:80% }to { top:50% }}");
            _0x33b4d5.appendChild(_0x13889d);
            _0x7caee4.appendChild(_0x33b4d5);
            _0x7caee4.setAttribute("viewBox", "0 0 547.371 547.371");
            var _0x778d9d = document.createElementNS("http://www.w3.org/2000/svg", "path");
            _0x778d9d.setAttribute("fill", "#FFFFFF");
            _0x778d9d.setAttribute("d", "M136.623,52.13v164.027l-23.875,23.877c-54.503,54.479-54.503,143.151,0,197.627l57.317,57.292c33.806,33.808,78.743,52.416,126.521,52.416c98.658,0,178.912-80.254,178.912-178.911V208.522c0-28.752-23.381-52.131-52.156-52.131c-10.713,0-20.695,3.258-28.984,8.836c-7.143-20.308-26.51-34.902-49.211-34.902c-10.713,0-20.695,3.26-28.984,8.838c-7.141-20.307-26.509-34.901-49.21-34.901c-9.487,0-18.402,2.555-26.065,7.012V52.132c0-28.75-23.38-52.131-52.131-52.131C160.003,0.001,136.623,23.38,136.623,52.13z M214.845,52.13v169.425c0,7.192,5.839,13.032,13.033,13.032s13.033-5.84,13.033-13.032v-65.162c0-14.39,11.703-26.066,26.064-26.066c14.362,0,26.063,11.678,26.063,26.066v39.098c0,7.193,5.84,13.033,13.033,13.033s13.033-5.84,13.033-13.033v-13.033c0-14.389,11.703-26.063,26.064-26.063c14.363,0,26.064,11.676,26.064,26.063v26.064c0,7.192,5.84,13.033,13.033,13.033s13.033-5.841,13.033-13.033c0-14.39,11.703-26.064,26.064-26.064c14.359,0,26.064,11.676,26.064,26.064v159.938c0,84.27-68.578,152.848-152.848,152.848c-40.819,0-79.188-15.899-108.066-44.78l-57.317-57.292c-22.155-22.183-33.233-51.271-33.233-80.385c0-29.115,11.078-58.203,33.233-80.387l5.448-5.446v72.8c0,7.192,5.839,13.033,13.032,13.033c7.194,0,13.033-5.841,13.033-13.033V52.13c0-14.389,11.704-26.065,26.065-26.065C203.141,26.063,214.845,37.743,214.845,52.13z");
            _0x4c5147.appendChild(_0x1f102e);
            _0x1f102e.appendChild(_0x202b98);
            _0x1f102e.appendChild(_0x4fa4ae);
            _0x7caee4.appendChild(_0x778d9d);
            _0x1f102e.appendChild(_0x7caee4);
            _0x4fa4ae.appendChild(_0x1f92ea);
            _0x4fa4ae.appendChild(_0x5a9616);
            _0x4c5147.appendChild(_0xb89d31);
          }
        };
        _0x454856.Init = function () {
          var _0x1af4e0 = this;
          var _0x108df8 = false;
          "undefined" != typeof LobbyData && (_0x108df8 = LobbyData.pwa);
          var _0x59f15e = Math.floor(Number(this.GetLinkParameterByName("apiId")));
          if (this.isPortrait ? this.m_isblock = _0x1c7e28.indexOf(_0x59f15e) >= 0 : this.isAndroid && this.android_Apiid.length > 0 && this.android_Apiid.indexOf(_0x59f15e) >= 0 && (this.isAndroid = false), this.m_isblock || (this.m_isblock = _0x24e0bc.indexOf(_0x59f15e) >= 0), !_0x108df8 && !this.m_isblock) {
            if (this.AddGameViewMask(), this.isIOS = false, _0x2899bc.os == _0x2899bc.OS.IOS && 0 == this.IsWebview() && this.isIOS) {
              if (this.CreateHtmlTag(), this.SetCloseContent(), this.m_backGround.style.display = "inline", this.SetShowMask(), 1 == this.IsChrome()) {
                var _0x2e6c48 = this.GetiOSDevice();
                if (null != _0x2e6c48) {
                  var _0x540b81 = 0.99 * (screen.height - _0x2e6c48.statusHeight - _0x2e6c48.homeHeight - 20);
                  var _0xa34bd1 = 0.99 * (screen.width - _0x2e6c48.statusHeight - 20);
                  document.body.onresize = function () {
                    (window.innerHeight >= window.innerWidth ? _0x540b81 : _0xa34bd1) <= window.innerHeight ? _0x1af4e0.HideMask() : _0x1af4e0.ShowMask();
                  };
                  window.addEventListener("scroll", function () {
                    return _0x1af4e0.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  this.m_backGround.addEventListener("touchend", function () {
                    return _0x1af4e0.ScrollReset();
                  });
                } else {
                  this.HideMask();
                }
              } else {
                var _0x24db80 = document.body.onresize;
                document.body.onresize = function () {
                  _0x24db80 && _0x24db80(null, null);
                  var _0xcd2184 = document.documentElement.scrollWidth;
                  var _0x23aca0 = document.documentElement.scrollHeight;
                  var _0x1a7897 = _0xcd2184 > _0x23aca0;
                  document.getElementById("bar").clientHeight == window.innerHeight ? _0x1af4e0.HideMask() : _0x1af4e0.SetShowMask(_0x1a7897);
                  window.addEventListener("scroll", function () {
                    return _0x1af4e0.m_isScrolling = true;
                  }, {
                    capture: false,
                    passive: true
                  });
                  _0x1af4e0.m_backGround.addEventListener("touchend", function () {
                    return _0x1af4e0.ScrollReset();
                  });
                  _0x1af4e0.m_isLandscape = _0xcd2184 > _0x23aca0;
                };
              }
            } else {
              if (_0x2899bc.os == _0x2899bc.OS.ANDROID && 0 == this.IsWebview() && this.isAndroid) {
                if (_0x2899bc.browserType == _0x2899bc.BrowserType.MOBILE_QQ || _0x2899bc.browserType == _0x2899bc.BrowserType.UC) {} else {
                  var _0x55ebe4 = function () {
                    _0x1af4e0.HasFullscreen() && !_0x1af4e0.IsFullscreen() && (_0x1af4e0.m_mask.active = true);
                  };
                  document.body.onresize = _0x55ebe4;
                  _0x55ebe4();
                }
              }
            }
          }
        };
        _0x454856.SetShowMask = function (_0x482146) {
          if (undefined === _0x482146 && (_0x482146 = undefined), this.IsIOS15orOver()) {
            if (undefined === _0x482146) {
              var _0x52de92 = document.documentElement.scrollWidth;
              var _0x165f9a = document.documentElement.scrollHeight;
              this.m_isLandscape = _0x52de92 > _0x165f9a;
              this.m_isLandscape ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden";
            } else {
              document.getElementById("bar").clientHeight;
              window.innerHeight;
              _0x482146 === this.m_isLandscape && document.getElementById("bar").clientHeight === window.innerHeight || (_0x482146 ? this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "hidden" : this.m_backGround.style.visibility = "visible" : this.IsIOS15Version(0) || this.IsIOS15Version(1) || this.IsIOS15Version(2) || this.IsIOS15Version(3) ? this.m_backGround.style.visibility = "visible" : this.m_backGround.style.visibility = "hidden");
            }
          } else {
            this.ShowMask();
          }
        };
        _0x454856.SetCloseContent = function () {
          var _0x1bdefb = this;
          var _0x594a93 = this.GetLang("lang");
          _0x594a93 = this.ChangeLang(_0x594a93);
          var _0x45500a = document.getElementById("mask_close");
          var _0x10c1e7 = this.isLandscape ? document.getElementById("mask_close_tip") : null;
          _0x1cea96[_0x594a93] ? (_0x45500a.textContent = _0x1cea96[_0x594a93][0], _0x10c1e7 && (_0x10c1e7.textContent = _0x1cea96[_0x594a93][1])) : (_0x45500a.textContent = _0x1cea96[_0x4f2753.en[0]][0], _0x10c1e7 && (_0x10c1e7.textContent = _0x1cea96[_0x4f2753.en[0]][1]));
          _0x45500a.onclick || (_0x45500a.onclick = function () {
            _0x1bdefb.HideMask();
          });
        };
        _0x454856.GetLang = function (_0x3c871b) {
          var _0xdf32ae = _0x2899bc.localStorage.getItem("LobbyLanguage");
          if (!_0xdf32ae || "" == _0xdf32ae) {
            if (-1 != (_0xdf32ae = "undefined" != typeof LobbyData ? LobbyData.url : window.location.href).indexOf("?")) {
              for (var _0x545928 = _0xdf32ae.split("?")[1].split("&"), _0x154d4c = 0; _0x154d4c < _0x545928.length; _0x154d4c++) {
                if (_0x545928[_0x154d4c].split("=")[0] == _0x3c871b) {
                  return _0x545928[_0x154d4c].split("=")[1];
                }
              }
            }
            return _0x4f2753.en[0];
          }
          return _0xdf32ae;
        };
        _0x454856.ChangeLang = function (_0x3c8091) {
          switch (_0x3c8091) {
            case _0x4f2753.tw[1]:
              return _0x4f2753.tw[0];
            case _0x4f2753.cn[1]:
              return _0x4f2753.cn[0];
            case _0x4f2753.th[1]:
              return _0x4f2753.th[0];
            case _0x4f2753.vn[1]:
              return _0x4f2753.vn[0];
            case _0x4f2753.id[1]:
              return _0x4f2753.id[0];
            case _0x4f2753.hi[1]:
              return _0x4f2753.hi[0];
            case _0x4f2753.ta[1]:
              return _0x4f2753.ta[0];
            case _0x4f2753.mm[1]:
              return _0x4f2753.mm[0];
            case _0x4f2753.jp[1]:
              return _0x4f2753.jp[0];
            default:
              return _0x4f2753.en[0];
          }
        };
        _0x454856.ShowMask = function () {
          for (var _0x46966d = this, _0x45717c = document.getElementById("Cocos3dGameContainer").getElementsByTagName("div"), _0x5c3b2d = 0, _0x4ce3cb = 0; _0x4ce3cb < _0x45717c.length; _0x4ce3cb++) {
            var _0x5cf9a1 = _0x45717c[_0x4ce3cb].getElementsByTagName("iframe");
            if (_0x5cf9a1 && _0x5cf9a1.length > 0) {
              _0x5c3b2d = _0x4ce3cb;
              break;
            }
          }
          var _0x468cb4 = _0x45717c[_0x5c3b2d];
          _0x468cb4 && "hidden" !== _0x468cb4.style.visibility || (this.m_backGround.style.visibility = "visible", this.m_mask && (this.m_mask.active = true), window.scrollTo(0, 0), this.m_scrollInterval && clearInterval(this.m_scrollInterval), this.m_scrollInterval = setInterval(function () {
            _0x46966d.m_isScrolling && (_0x46966d.m_isScrolling = false, _0x46966d.ScrollReset());
          }, 250));
        };
        _0x454856.ScrollReset = function () {
          var _0x1608e6 = this;
          window.scrollTo(0, 0);
          this.m_scrollTimeOut && clearTimeout(this.m_scrollTimeOut);
          this.m_scrollTimeOut = setTimeout(function () {
            window.scrollTo(0, 0);
            clearInterval(_0x1608e6.m_scrollInterval);
            _0x1608e6.m_scrollInterval = null;
          }, 250);
        };
        _0x454856.HideMask = function () {
          var _0x4337a2 = this;
          window.scrollTo(0, 0);
          this.m_backGround && (this.m_backGround.style.visibility = "hidden");
          this.scheduleOnce(function () {
            _0x4337a2.m_mask && (_0x4337a2.m_mask.active = false);
          }, 0);
        };
        _0x454856.AddGameViewMask = function () {
          var _0x31c843 = this;
          var _0x3ebe0a = _0x60819.getScene();
          this.m_mask || _0x3ebe0a.getChildByName("ScrollForMask") || _0x2899bc.browserType == _0x2899bc.BrowserType.FIREFOX ? !this.m_mask && _0x3ebe0a.getChildByName("ScrollForMask") && (this.m_mask = _0x1b4727("ScrollForMask")) : (this.m_mask = new _0x5cf7a3(), this.m_mask.name = "ScrollForMask", this.m_mask.addComponent(_0x45bc58).setContentSize(new _0x2265bd(2000, 2000)), this.m_mask.addComponent(_0x2b432b), this.m_mask.active = false, _0x3ebe0a.addChild(this.m_mask), this.m_mask.setSiblingIndex(_0x3ebe0a.children.length), this.m_mask.on(_0x5cf7a3.EventType.TOUCH_END, function () {
            if (_0x2899bc.os == _0x2899bc.OS.IOS && 0 == _0x31c843.IsWebview()) {
              var _0x44e657 = _0x31c843.m_backGround;
              _0x44e657 && "hidden" == _0x44e657.style.visibility && (_0x31c843.m_mask.active = false);
            } else {
              _0x2899bc.os == _0x2899bc.OS.ANDROID && 0 == _0x31c843.IsWebview() && _0x31c843.Fullscreen();
            }
          }));
        };
        _0x454856.IsWebview = function () {
          var _0x5d6c9a = navigator.userAgent;
          var _0x2cf8b4 = new RegExp("(" + ["WebView", "(iPhone|iPod|iPad)(?!.*Safari/)", "Android.*(wv|.0.0.0)"].join("|") + ")", "ig");
          return Boolean(_0x5d6c9a.match(_0x2cf8b4));
        };
        _0x454856.IsChrome = function () {
          return /CriOS/.test(navigator.userAgent);
        };
        _0x454856.GetiOSDevice = function () {
          for (var _0x1eb659, _0x8e75f2 = _0x32f29f(_0x460b2e); !(_0x1eb659 = _0x8e75f2()).done;) {
            var _0x5ed833 = _0x1eb659.value;
            if (screen.height === _0x5ed833.height && screen.width === _0x5ed833.width && window.devicePixelRatio === _0x5ed833.ratio) {
              return _0x5ed833;
            }
          }
          return null;
        };
        _0x454856.HasFullscreen = function () {
          return null != (document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled);
        };
        _0x454856.IsFullscreen = function () {
          return null != (document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
        };
        _0x454856.Fullscreen = function () {
          try {
            var _0x29149d = document.documentElement.requestFullscreen || document.documentElement.webkitRequestFullscreen || document.documentElement.mozRequestFullScreen || document.documentElement.msRequestFullscreen;
            var _0x1acf1b = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
            if (this.HasFullscreen()) {
              if (this.IsFullscreen()) {
                _0x1acf1b.call(document);
              } else {
                try {
                  var _0x445ab6 = _0x29149d.call(document.documentElement);
                  _0x445ab6 instanceof Promise && _0x445ab6.catch(function () {});
                } catch (_0x51b95e) {}
              }
            } else {
              console.log("not support fullscreen.");
            }
            this.m_mask.active = false;
          } catch (_0x5a386d) {
            this.m_mask.active = false;
          }
        };
        _0x454856.GetLinkParameterByName = function (_0x114919) {
          var _0x4bc084 = window.location.href;
          _0x114919 = _0x114919.replace(/[[]]/g, "\\$&");
          var _0x3f3ef5 = new RegExp("[?&]" + _0x114919 + "(=([^&#]*)|&|#|$)").exec(_0x4bc084);
          return _0x3f3ef5 ? _0x3f3ef5[2] ? decodeURIComponent(_0x3f3ef5[2].replace(/\+/g, " ")) : "" : null;
        };
        _0x454856.IsIOS15orOver = function () {
          return _0x2899bc.os == _0x2899bc.OS.IOS && /iPhone OS 15/.test(window.navigator.userAgent);
        };
        _0x454856.IsIOS15Version = function (_0x48404c) {
          return _0x2899bc.os == _0x2899bc.OS.IOS && -1 !== window.navigator.userAgent.search("iPhone OS 15_" + _0x48404c);
        };
        return _0x319620;
      }(_0x5aac4b), _0x59ab17 = _0x5a72b5(_0x5ad2bf.prototype, "isLandscape", [_0x2b3221], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x3434a9 = _0x5a72b5(_0x5ad2bf.prototype, "isPortrait", [_0x57b729], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _0x1cc9bf = _0x5a72b5(_0x5ad2bf.prototype, "isIOS", [_0x286463], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0x1b297e = _0x5a72b5(_0x5ad2bf.prototype, "isAndroid", [_0xa13236], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _0xdc2565 = _0x5a72b5(_0x5ad2bf.prototype, "android_Apiid", [_0x2380ae], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _0x3df2df = _0x5ad2bf)) || _0x3df2df;
      _0xa10b8c._RF.pop();
    }
  };
});
(function (_0x3b14ce) {
  _0x3b14ce("virtual:///prerequisite-imports/main", "chunks:///main.js");
})(function (_0x45e70d, _0x45de9a) {
  System.register(_0x45e70d, [_0x45de9a], function (_0x24ffd6, _0x47baf0) {
    return {
      setters: [function (_0x22b000) {
        var _0x488c79 = {};
        for (var _0x216f7f in _0x22b000) {
          if (_0x216f7f !== "default" && _0x216f7f !== "__esModule") {
            _0x488c79[_0x216f7f] = _0x22b000[_0x216f7f];
          }
        }
        _0x24ffd6(_0x488c79);
      }],
      execute: function () {}
    };
  });
});