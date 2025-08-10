System.register("chunks:///game.js", ["./minimal-1613abea.js"], function (_0x445123, _0x4defdb) {
  "use strict";

  var _0x2c3fd6;
  var _0x157579;
  return {
    setters: [function (_0x4669c6) {
      _0x2c3fd6 = _0x4669c6.l;
      _0x157579 = _0x4669c6._;
    }],
    execute: function () {
      var _0x473ce0 = "file:///Users/m2mac2/Desktop/H5/Client/workspace/TripleCoinTreasure2/Client/Thai_UAT/assets/game/Script/Proto/js/tct2proto.js";
      _0x2c3fd6.define(_0x473ce0, function (_0x76af64, _0x5cd00e, _0x2c4923, _0x429bd4, _0x508530) {
        var _0x244ce2;
        var _0x4e8aa0 = _0x5cd00e("protobufjs/minimal");
        var _0x3f4e9d = _0x4e8aa0.Reader;
        var _0x579612 = _0x4e8aa0.Writer;
        var _0x2999c5 = _0x4e8aa0.util;
        var _0x3965e0 = _0x4e8aa0.roots.default || (_0x4e8aa0.roots.default = {});
        _0x3965e0.tct2Proto = ((_0x244ce2 = {}).Column = function () {
          function _0x2ff557(_0x4c556e) {
            if (this.Col = [], _0x4c556e) {
              for (var _0x5ef111 = Object.keys(_0x4c556e), _0x406b05 = 0; _0x406b05 < _0x5ef111.length; ++_0x406b05) {
                null != _0x4c556e[_0x5ef111[_0x406b05]] && (this[_0x5ef111[_0x406b05]] = _0x4c556e[_0x5ef111[_0x406b05]]);
              }
            }
          }
          _0x2ff557.prototype.Col = _0x2999c5.emptyArray;
          _0x2ff557.create = function (_0x22b07b) {
            return new _0x2ff557(_0x22b07b);
          };
          _0x2ff557.encode = function (_0x37ea90, _0x353811) {
            if (_0x353811 || (_0x353811 = _0x579612.create()), null != _0x37ea90.Col && _0x37ea90.Col.length) {
              _0x353811.uint32(10).fork();
              for (var _0x151ac8 = 0; _0x151ac8 < _0x37ea90.Col.length; ++_0x151ac8) {
                _0x353811.int32(_0x37ea90.Col[_0x151ac8]);
              }
              _0x353811.ldelim();
            }
            return _0x353811;
          };
          _0x2ff557.encodeDelimited = function (_0x583f6e, _0x4c296b) {
            return this.encode(_0x583f6e, _0x4c296b).ldelim();
          };
          _0x2ff557.decode = function (_0x21de32, _0x5b410a) {
            _0x21de32 instanceof _0x3f4e9d || (_0x21de32 = _0x3f4e9d.create(_0x21de32));
            for (var _0x59ef8e = undefined === _0x5b410a ? _0x21de32.len : _0x21de32.pos + _0x5b410a, _0x343b50 = new _0x3965e0.tct2Proto.Column(); _0x21de32.pos < _0x59ef8e;) {
              var _0x2982db = _0x21de32.uint32();
              switch (_0x2982db >>> 3) {
                case 1:
                  if (_0x343b50.Col && _0x343b50.Col.length || (_0x343b50.Col = []), 2 == (7 & _0x2982db)) {
                    for (var _0x2e9aaa = _0x21de32.uint32() + _0x21de32.pos; _0x21de32.pos < _0x2e9aaa;) {
                      _0x343b50.Col.push(_0x21de32.int32());
                    }
                  } else {
                    _0x343b50.Col.push(_0x21de32.int32());
                  }
                  break;
                default:
                  _0x21de32.skipType(7 & _0x2982db);
              }
            }
            return _0x343b50;
          };
          _0x2ff557.decodeDelimited = function (_0x17c226) {
            _0x17c226 instanceof _0x3f4e9d || (_0x17c226 = new _0x3f4e9d(_0x17c226));
            return this.decode(_0x17c226, _0x17c226.uint32());
          };
          _0x2ff557.verify = function (_0x46fa8a) {
            if ("object" != typeof _0x46fa8a || null === _0x46fa8a) {
              return "object expected";
            }
            if (null != _0x46fa8a.Col && _0x46fa8a.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x46fa8a.Col)) {
                return "Col: array expected";
              }
              for (var _0x6f84d8 = 0; _0x6f84d8 < _0x46fa8a.Col.length; ++_0x6f84d8) {
                if (!_0x2999c5.isInteger(_0x46fa8a.Col[_0x6f84d8])) {
                  return "Col: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x2ff557.fromObject = function (_0x1e842a) {
            if (_0x1e842a instanceof _0x3965e0.tct2Proto.Column) {
              return _0x1e842a;
            }
            var _0x30bbe2 = new _0x3965e0.tct2Proto.Column();
            if (_0x1e842a.Col) {
              if (!Array.isArray(_0x1e842a.Col)) {
                throw TypeError(".tct2Proto.Column.Col: array expected");
              }
              _0x30bbe2.Col = [];
              for (var _0x3d51ea = 0; _0x3d51ea < _0x1e842a.Col.length; ++_0x3d51ea) {
                _0x30bbe2.Col[_0x3d51ea] = 0 | _0x1e842a.Col[_0x3d51ea];
              }
            }
            return _0x30bbe2;
          };
          _0x2ff557.toObject = function (_0x2c7977, _0x2722fb) {
            _0x2722fb || (_0x2722fb = {});
            var _0x51fad3 = {};
            if ((_0x2722fb.arrays || _0x2722fb.defaults) && (_0x51fad3.Col = []), _0x2c7977.Col && _0x2c7977.Col.length) {
              _0x51fad3.Col = [];
              for (var _0x4c0a53 = 0; _0x4c0a53 < _0x2c7977.Col.length; ++_0x4c0a53) {
                _0x51fad3.Col[_0x4c0a53] = _0x2c7977.Col[_0x4c0a53];
              }
            }
            return _0x51fad3;
          };
          _0x2ff557.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x2ff557.getTypeUrl = function (_0x4ba594) {
            undefined === _0x4ba594 && (_0x4ba594 = "type.googleapis.com");
            return _0x4ba594 + "/tct2Proto.Column";
          };
          return _0x2ff557;
        }(), _0x244ce2.CColumn = function () {
          function _0x325656(_0x472275) {
            if (this.Col = [], _0x472275) {
              for (var _0x2b7fb1 = Object.keys(_0x472275), _0x103e13 = 0; _0x103e13 < _0x2b7fb1.length; ++_0x103e13) {
                null != _0x472275[_0x2b7fb1[_0x103e13]] && (this[_0x2b7fb1[_0x103e13]] = _0x472275[_0x2b7fb1[_0x103e13]]);
              }
            }
          }
          _0x325656.prototype.Col = _0x2999c5.emptyArray;
          _0x325656.create = function (_0xc90805) {
            return new _0x325656(_0xc90805);
          };
          _0x325656.encode = function (_0x58ff69, _0x59eca8) {
            if (_0x59eca8 || (_0x59eca8 = _0x579612.create()), null != _0x58ff69.Col && _0x58ff69.Col.length) {
              for (var _0x2f3bf6 = 0; _0x2f3bf6 < _0x58ff69.Col.length; ++_0x2f3bf6) {
                _0x3965e0.tct2Proto.CSymbol.encode(_0x58ff69.Col[_0x2f3bf6], _0x59eca8.uint32(10).fork()).ldelim();
              }
            }
            return _0x59eca8;
          };
          _0x325656.encodeDelimited = function (_0x2db7c1, _0x4d4d7b) {
            return this.encode(_0x2db7c1, _0x4d4d7b).ldelim();
          };
          _0x325656.decode = function (_0x15fd21, _0x3c071c) {
            _0x15fd21 instanceof _0x3f4e9d || (_0x15fd21 = _0x3f4e9d.create(_0x15fd21));
            for (var _0x1319ab = undefined === _0x3c071c ? _0x15fd21.len : _0x15fd21.pos + _0x3c071c, _0x1f2f5b = new _0x3965e0.tct2Proto.CColumn(); _0x15fd21.pos < _0x1319ab;) {
              var _0x17c950 = _0x15fd21.uint32();
              switch (_0x17c950 >>> 3) {
                case 1:
                  _0x1f2f5b.Col && _0x1f2f5b.Col.length || (_0x1f2f5b.Col = []);
                  _0x1f2f5b.Col.push(_0x3965e0.tct2Proto.CSymbol.decode(_0x15fd21, _0x15fd21.uint32()));
                  break;
                default:
                  _0x15fd21.skipType(7 & _0x17c950);
              }
            }
            return _0x1f2f5b;
          };
          _0x325656.decodeDelimited = function (_0x179f41) {
            _0x179f41 instanceof _0x3f4e9d || (_0x179f41 = new _0x3f4e9d(_0x179f41));
            return this.decode(_0x179f41, _0x179f41.uint32());
          };
          _0x325656.verify = function (_0x240708) {
            if ("object" != typeof _0x240708 || null === _0x240708) {
              return "object expected";
            }
            if (null != _0x240708.Col && _0x240708.hasOwnProperty("Col")) {
              if (!Array.isArray(_0x240708.Col)) {
                return "Col: array expected";
              }
              for (var _0x4154c7 = 0; _0x4154c7 < _0x240708.Col.length; ++_0x4154c7) {
                var _0x2b035b = _0x3965e0.tct2Proto.CSymbol.verify(_0x240708.Col[_0x4154c7]);
                if (_0x2b035b) {
                  return "Col." + _0x2b035b;
                }
              }
            }
            return null;
          };
          _0x325656.fromObject = function (_0x52088a) {
            if (_0x52088a instanceof _0x3965e0.tct2Proto.CColumn) {
              return _0x52088a;
            }
            var _0x1a96ec = new _0x3965e0.tct2Proto.CColumn();
            if (_0x52088a.Col) {
              if (!Array.isArray(_0x52088a.Col)) {
                throw TypeError(".tct2Proto.CColumn.Col: array expected");
              }
              _0x1a96ec.Col = [];
              for (var _0xdea168 = 0; _0xdea168 < _0x52088a.Col.length; ++_0xdea168) {
                if ("object" != typeof _0x52088a.Col[_0xdea168]) {
                  throw TypeError(".tct2Proto.CColumn.Col: object expected");
                }
                _0x1a96ec.Col[_0xdea168] = _0x3965e0.tct2Proto.CSymbol.fromObject(_0x52088a.Col[_0xdea168]);
              }
            }
            return _0x1a96ec;
          };
          _0x325656.toObject = function (_0x91642, _0x41b1b5) {
            _0x41b1b5 || (_0x41b1b5 = {});
            var _0x257e32 = {};
            if ((_0x41b1b5.arrays || _0x41b1b5.defaults) && (_0x257e32.Col = []), _0x91642.Col && _0x91642.Col.length) {
              _0x257e32.Col = [];
              for (var _0x53fb9e = 0; _0x53fb9e < _0x91642.Col.length; ++_0x53fb9e) {
                _0x257e32.Col[_0x53fb9e] = _0x3965e0.tct2Proto.CSymbol.toObject(_0x91642.Col[_0x53fb9e], _0x41b1b5);
              }
            }
            return _0x257e32;
          };
          _0x325656.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x325656.getTypeUrl = function (_0x410a5d) {
            undefined === _0x410a5d && (_0x410a5d = "type.googleapis.com");
            return _0x410a5d + "/tct2Proto.CColumn";
          };
          return _0x325656;
        }(), _0x244ce2.FreePlateCSymbolData = function () {
          function _0x5e9b4a(_0x186d15) {
            if (this.FPSD = [], _0x186d15) {
              for (var _0xd110cd = Object.keys(_0x186d15), _0x350c0b = 0; _0x350c0b < _0xd110cd.length; ++_0x350c0b) {
                null != _0x186d15[_0xd110cd[_0x350c0b]] && (this[_0xd110cd[_0x350c0b]] = _0x186d15[_0xd110cd[_0x350c0b]]);
              }
            }
          }
          _0x5e9b4a.prototype.FPSD = _0x2999c5.emptyArray;
          _0x5e9b4a.create = function (_0x4a2f0f) {
            return new _0x5e9b4a(_0x4a2f0f);
          };
          _0x5e9b4a.encode = function (_0x3250a0, _0x138f3d) {
            if (_0x138f3d || (_0x138f3d = _0x579612.create()), null != _0x3250a0.FPSD && _0x3250a0.FPSD.length) {
              for (var _0x178c87 = 0; _0x178c87 < _0x3250a0.FPSD.length; ++_0x178c87) {
                _0x3965e0.tct2Proto.CColumn.encode(_0x3250a0.FPSD[_0x178c87], _0x138f3d.uint32(10).fork()).ldelim();
              }
            }
            return _0x138f3d;
          };
          _0x5e9b4a.encodeDelimited = function (_0x1c1880, _0x273fe9) {
            return this.encode(_0x1c1880, _0x273fe9).ldelim();
          };
          _0x5e9b4a.decode = function (_0x154a9d, _0x231048) {
            _0x154a9d instanceof _0x3f4e9d || (_0x154a9d = _0x3f4e9d.create(_0x154a9d));
            for (var _0x45c380 = undefined === _0x231048 ? _0x154a9d.len : _0x154a9d.pos + _0x231048, _0x9799e6 = new _0x3965e0.tct2Proto.FreePlateCSymbolData(); _0x154a9d.pos < _0x45c380;) {
              var _0x40bca1 = _0x154a9d.uint32();
              switch (_0x40bca1 >>> 3) {
                case 1:
                  _0x9799e6.FPSD && _0x9799e6.FPSD.length || (_0x9799e6.FPSD = []);
                  _0x9799e6.FPSD.push(_0x3965e0.tct2Proto.CColumn.decode(_0x154a9d, _0x154a9d.uint32()));
                  break;
                default:
                  _0x154a9d.skipType(7 & _0x40bca1);
              }
            }
            return _0x9799e6;
          };
          _0x5e9b4a.decodeDelimited = function (_0x2abc94) {
            _0x2abc94 instanceof _0x3f4e9d || (_0x2abc94 = new _0x3f4e9d(_0x2abc94));
            return this.decode(_0x2abc94, _0x2abc94.uint32());
          };
          _0x5e9b4a.verify = function (_0x395dd3) {
            if ("object" != typeof _0x395dd3 || null === _0x395dd3) {
              return "object expected";
            }
            if (null != _0x395dd3.FPSD && _0x395dd3.hasOwnProperty("FPSD")) {
              if (!Array.isArray(_0x395dd3.FPSD)) {
                return "FPSD: array expected";
              }
              for (var _0x13f71c = 0; _0x13f71c < _0x395dd3.FPSD.length; ++_0x13f71c) {
                var _0x5a0632 = _0x3965e0.tct2Proto.CColumn.verify(_0x395dd3.FPSD[_0x13f71c]);
                if (_0x5a0632) {
                  return "FPSD." + _0x5a0632;
                }
              }
            }
            return null;
          };
          _0x5e9b4a.fromObject = function (_0x5a72ee) {
            if (_0x5a72ee instanceof _0x3965e0.tct2Proto.FreePlateCSymbolData) {
              return _0x5a72ee;
            }
            var _0x1160ca = new _0x3965e0.tct2Proto.FreePlateCSymbolData();
            if (_0x5a72ee.FPSD) {
              if (!Array.isArray(_0x5a72ee.FPSD)) {
                throw TypeError(".tct2Proto.FreePlateCSymbolData.FPSD: array expected");
              }
              _0x1160ca.FPSD = [];
              for (var _0x232090 = 0; _0x232090 < _0x5a72ee.FPSD.length; ++_0x232090) {
                if ("object" != typeof _0x5a72ee.FPSD[_0x232090]) {
                  throw TypeError(".tct2Proto.FreePlateCSymbolData.FPSD: object expected");
                }
                _0x1160ca.FPSD[_0x232090] = _0x3965e0.tct2Proto.CColumn.fromObject(_0x5a72ee.FPSD[_0x232090]);
              }
            }
            return _0x1160ca;
          };
          _0x5e9b4a.toObject = function (_0x1645cf, _0x54bcd1) {
            _0x54bcd1 || (_0x54bcd1 = {});
            var _0x21901c = {};
            if ((_0x54bcd1.arrays || _0x54bcd1.defaults) && (_0x21901c.FPSD = []), _0x1645cf.FPSD && _0x1645cf.FPSD.length) {
              _0x21901c.FPSD = [];
              for (var _0x119da1 = 0; _0x119da1 < _0x1645cf.FPSD.length; ++_0x119da1) {
                _0x21901c.FPSD[_0x119da1] = _0x3965e0.tct2Proto.CColumn.toObject(_0x1645cf.FPSD[_0x119da1], _0x54bcd1);
              }
            }
            return _0x21901c;
          };
          _0x5e9b4a.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x5e9b4a.getTypeUrl = function (_0x22b9e0) {
            undefined === _0x22b9e0 && (_0x22b9e0 = "type.googleapis.com");
            return _0x22b9e0 + "/tct2Proto.FreePlateCSymbolData";
          };
          return _0x5e9b4a;
        }(), _0x244ce2.CSymbol = function () {
          function _0x1cc298(_0x5b3959) {
            if (_0x5b3959) {
              for (var _0x54174f = Object.keys(_0x5b3959), _0x585586 = 0; _0x585586 < _0x54174f.length; ++_0x585586) {
                null != _0x5b3959[_0x54174f[_0x585586]] && (this[_0x54174f[_0x585586]] = _0x5b3959[_0x54174f[_0x585586]]);
              }
            }
          }
          _0x1cc298.prototype.Symbol = 0;
          _0x1cc298.prototype.JPState = 0;
          _0x1cc298.prototype.JPMult = 0;
          _0x1cc298.prototype.Number = 0;
          _0x1cc298.create = function (_0x41d912) {
            return new _0x1cc298(_0x41d912);
          };
          _0x1cc298.encode = function (_0xaba05b, _0x2b8ea9) {
            _0x2b8ea9 || (_0x2b8ea9 = _0x579612.create());
            null != _0xaba05b.Symbol && Object.hasOwnProperty.call(_0xaba05b, "Symbol") && _0x2b8ea9.uint32(8).int32(_0xaba05b.Symbol);
            null != _0xaba05b.JPState && Object.hasOwnProperty.call(_0xaba05b, "JPState") && _0x2b8ea9.uint32(16).int32(_0xaba05b.JPState);
            null != _0xaba05b.JPMult && Object.hasOwnProperty.call(_0xaba05b, "JPMult") && _0x2b8ea9.uint32(24).int32(_0xaba05b.JPMult);
            null != _0xaba05b.Number && Object.hasOwnProperty.call(_0xaba05b, "Number") && _0x2b8ea9.uint32(33).double(_0xaba05b.Number);
            return _0x2b8ea9;
          };
          _0x1cc298.encodeDelimited = function (_0xc17f02, _0x357d75) {
            return this.encode(_0xc17f02, _0x357d75).ldelim();
          };
          _0x1cc298.decode = function (_0x36c046, _0x3fc210) {
            _0x36c046 instanceof _0x3f4e9d || (_0x36c046 = _0x3f4e9d.create(_0x36c046));
            for (var _0x179bdf = undefined === _0x3fc210 ? _0x36c046.len : _0x36c046.pos + _0x3fc210, _0x2b6726 = new _0x3965e0.tct2Proto.CSymbol(); _0x36c046.pos < _0x179bdf;) {
              var _0x453a35 = _0x36c046.uint32();
              switch (_0x453a35 >>> 3) {
                case 1:
                  _0x2b6726.Symbol = _0x36c046.int32();
                  break;
                case 2:
                  _0x2b6726.JPState = _0x36c046.int32();
                  break;
                case 3:
                  _0x2b6726.JPMult = _0x36c046.int32();
                  break;
                case 4:
                  _0x2b6726.Number = _0x36c046.double();
                  break;
                default:
                  _0x36c046.skipType(7 & _0x453a35);
              }
            }
            return _0x2b6726;
          };
          _0x1cc298.decodeDelimited = function (_0x11efcc) {
            _0x11efcc instanceof _0x3f4e9d || (_0x11efcc = new _0x3f4e9d(_0x11efcc));
            return this.decode(_0x11efcc, _0x11efcc.uint32());
          };
          _0x1cc298.verify = function (_0x49e3ea) {
            return "object" != typeof _0x49e3ea || null === _0x49e3ea ? "object expected" : null != _0x49e3ea.Symbol && _0x49e3ea.hasOwnProperty("Symbol") && !_0x2999c5.isInteger(_0x49e3ea.Symbol) ? "Symbol: integer expected" : null != _0x49e3ea.JPState && _0x49e3ea.hasOwnProperty("JPState") && !_0x2999c5.isInteger(_0x49e3ea.JPState) ? "JPState: integer expected" : null != _0x49e3ea.JPMult && _0x49e3ea.hasOwnProperty("JPMult") && !_0x2999c5.isInteger(_0x49e3ea.JPMult) ? "JPMult: integer expected" : null != _0x49e3ea.Number && _0x49e3ea.hasOwnProperty("Number") && "number" != typeof _0x49e3ea.Number ? "Number: number expected" : null;
          };
          _0x1cc298.fromObject = function (_0x2cedc3) {
            if (_0x2cedc3 instanceof _0x3965e0.tct2Proto.CSymbol) {
              return _0x2cedc3;
            }
            var _0x360dfe = new _0x3965e0.tct2Proto.CSymbol();
            null != _0x2cedc3.Symbol && (_0x360dfe.Symbol = 0 | _0x2cedc3.Symbol);
            null != _0x2cedc3.JPState && (_0x360dfe.JPState = 0 | _0x2cedc3.JPState);
            null != _0x2cedc3.JPMult && (_0x360dfe.JPMult = 0 | _0x2cedc3.JPMult);
            null != _0x2cedc3.Number && (_0x360dfe.Number = Number(_0x2cedc3.Number));
            return _0x360dfe;
          };
          _0x1cc298.toObject = function (_0x57e073, _0x3b9c78) {
            _0x3b9c78 || (_0x3b9c78 = {});
            var _0x4905dc = {};
            _0x3b9c78.defaults && (_0x4905dc.Symbol = 0, _0x4905dc.JPState = 0, _0x4905dc.JPMult = 0, _0x4905dc.Number = 0);
            null != _0x57e073.Symbol && _0x57e073.hasOwnProperty("Symbol") && (_0x4905dc.Symbol = _0x57e073.Symbol);
            null != _0x57e073.JPState && _0x57e073.hasOwnProperty("JPState") && (_0x4905dc.JPState = _0x57e073.JPState);
            null != _0x57e073.JPMult && _0x57e073.hasOwnProperty("JPMult") && (_0x4905dc.JPMult = _0x57e073.JPMult);
            null != _0x57e073.Number && _0x57e073.hasOwnProperty("Number") && (_0x4905dc.Number = _0x3b9c78.json && !isFinite(_0x57e073.Number) ? String(_0x57e073.Number) : _0x57e073.Number);
            return _0x4905dc;
          };
          _0x1cc298.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x1cc298.getTypeUrl = function (_0x2bcf59) {
            undefined === _0x2bcf59 && (_0x2bcf59 = "type.googleapis.com");
            return _0x2bcf59 + "/tct2Proto.CSymbol";
          };
          return _0x1cc298;
        }(), _0x244ce2.AwardData = function () {
          function _0x18dee4(_0x16c8c1) {
            if (_0x16c8c1) {
              for (var _0x5c1566 = Object.keys(_0x16c8c1), _0x39832a = 0; _0x39832a < _0x5c1566.length; ++_0x39832a) {
                null != _0x16c8c1[_0x5c1566[_0x39832a]] && (this[_0x5c1566[_0x39832a]] = _0x16c8c1[_0x5c1566[_0x39832a]]);
              }
            }
          }
          _0x18dee4.prototype.Symbol = 0;
          _0x18dee4.prototype.Count = 0;
          _0x18dee4.prototype.Line = 0;
          _0x18dee4.prototype.Win = 0;
          _0x18dee4.create = function (_0x149ab3) {
            return new _0x18dee4(_0x149ab3);
          };
          _0x18dee4.encode = function (_0x568709, _0xabfc7) {
            _0xabfc7 || (_0xabfc7 = _0x579612.create());
            null != _0x568709.Symbol && Object.hasOwnProperty.call(_0x568709, "Symbol") && _0xabfc7.uint32(8).int32(_0x568709.Symbol);
            null != _0x568709.Count && Object.hasOwnProperty.call(_0x568709, "Count") && _0xabfc7.uint32(16).int32(_0x568709.Count);
            null != _0x568709.Line && Object.hasOwnProperty.call(_0x568709, "Line") && _0xabfc7.uint32(24).int32(_0x568709.Line);
            null != _0x568709.Win && Object.hasOwnProperty.call(_0x568709, "Win") && _0xabfc7.uint32(33).double(_0x568709.Win);
            return _0xabfc7;
          };
          _0x18dee4.encodeDelimited = function (_0x510cb2, _0x11d012) {
            return this.encode(_0x510cb2, _0x11d012).ldelim();
          };
          _0x18dee4.decode = function (_0x246412, _0x273f02) {
            _0x246412 instanceof _0x3f4e9d || (_0x246412 = _0x3f4e9d.create(_0x246412));
            for (var _0x153996 = undefined === _0x273f02 ? _0x246412.len : _0x246412.pos + _0x273f02, _0x2825da = new _0x3965e0.tct2Proto.AwardData(); _0x246412.pos < _0x153996;) {
              var _0x4ac10d = _0x246412.uint32();
              switch (_0x4ac10d >>> 3) {
                case 1:
                  _0x2825da.Symbol = _0x246412.int32();
                  break;
                case 2:
                  _0x2825da.Count = _0x246412.int32();
                  break;
                case 3:
                  _0x2825da.Line = _0x246412.int32();
                  break;
                case 4:
                  _0x2825da.Win = _0x246412.double();
                  break;
                default:
                  _0x246412.skipType(7 & _0x4ac10d);
              }
            }
            return _0x2825da;
          };
          _0x18dee4.decodeDelimited = function (_0x8a3b95) {
            _0x8a3b95 instanceof _0x3f4e9d || (_0x8a3b95 = new _0x3f4e9d(_0x8a3b95));
            return this.decode(_0x8a3b95, _0x8a3b95.uint32());
          };
          _0x18dee4.verify = function (_0x45ea6f) {
            return "object" != typeof _0x45ea6f || null === _0x45ea6f ? "object expected" : null != _0x45ea6f.Symbol && _0x45ea6f.hasOwnProperty("Symbol") && !_0x2999c5.isInteger(_0x45ea6f.Symbol) ? "Symbol: integer expected" : null != _0x45ea6f.Count && _0x45ea6f.hasOwnProperty("Count") && !_0x2999c5.isInteger(_0x45ea6f.Count) ? "Count: integer expected" : null != _0x45ea6f.Line && _0x45ea6f.hasOwnProperty("Line") && !_0x2999c5.isInteger(_0x45ea6f.Line) ? "Line: integer expected" : null != _0x45ea6f.Win && _0x45ea6f.hasOwnProperty("Win") && "number" != typeof _0x45ea6f.Win ? "Win: number expected" : null;
          };
          _0x18dee4.fromObject = function (_0x17559b) {
            if (_0x17559b instanceof _0x3965e0.tct2Proto.AwardData) {
              return _0x17559b;
            }
            var _0x16f163 = new _0x3965e0.tct2Proto.AwardData();
            null != _0x17559b.Symbol && (_0x16f163.Symbol = 0 | _0x17559b.Symbol);
            null != _0x17559b.Count && (_0x16f163.Count = 0 | _0x17559b.Count);
            null != _0x17559b.Line && (_0x16f163.Line = 0 | _0x17559b.Line);
            null != _0x17559b.Win && (_0x16f163.Win = Number(_0x17559b.Win));
            return _0x16f163;
          };
          _0x18dee4.toObject = function (_0x262113, _0x523e6b) {
            _0x523e6b || (_0x523e6b = {});
            var _0x3e08f2 = {};
            _0x523e6b.defaults && (_0x3e08f2.Symbol = 0, _0x3e08f2.Count = 0, _0x3e08f2.Line = 0, _0x3e08f2.Win = 0);
            null != _0x262113.Symbol && _0x262113.hasOwnProperty("Symbol") && (_0x3e08f2.Symbol = _0x262113.Symbol);
            null != _0x262113.Count && _0x262113.hasOwnProperty("Count") && (_0x3e08f2.Count = _0x262113.Count);
            null != _0x262113.Line && _0x262113.hasOwnProperty("Line") && (_0x3e08f2.Line = _0x262113.Line);
            null != _0x262113.Win && _0x262113.hasOwnProperty("Win") && (_0x3e08f2.Win = _0x523e6b.json && !isFinite(_0x262113.Win) ? String(_0x262113.Win) : _0x262113.Win);
            return _0x3e08f2;
          };
          _0x18dee4.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x18dee4.getTypeUrl = function (_0xeed7dd) {
            undefined === _0xeed7dd && (_0xeed7dd = "type.googleapis.com");
            return _0xeed7dd + "/tct2Proto.AwardData";
          };
          return _0x18dee4;
        }(), _0x244ce2.FeatureEffect = function () {
          function _0x8263ce(_0x2a48f9) {
            if (this.EffectPos = [], _0x2a48f9) {
              for (var _0x363994 = Object.keys(_0x2a48f9), _0x20f220 = 0; _0x20f220 < _0x363994.length; ++_0x20f220) {
                null != _0x2a48f9[_0x363994[_0x20f220]] && (this[_0x363994[_0x20f220]] = _0x2a48f9[_0x363994[_0x20f220]]);
              }
            }
          }
          _0x8263ce.prototype.ScatterPos = 0;
          _0x8263ce.prototype.EffectPos = _0x2999c5.emptyArray;
          _0x8263ce.prototype.JPState = 0;
          _0x8263ce.prototype.Number = 0;
          _0x8263ce.create = function (_0x4cda8b) {
            return new _0x8263ce(_0x4cda8b);
          };
          _0x8263ce.encode = function (_0x33bb1f, _0x1c2022) {
            if (_0x1c2022 || (_0x1c2022 = _0x579612.create()), null != _0x33bb1f.ScatterPos && Object.hasOwnProperty.call(_0x33bb1f, "ScatterPos") && _0x1c2022.uint32(8).int32(_0x33bb1f.ScatterPos), null != _0x33bb1f.EffectPos && _0x33bb1f.EffectPos.length) {
              _0x1c2022.uint32(18).fork();
              for (var _0x56d095 = 0; _0x56d095 < _0x33bb1f.EffectPos.length; ++_0x56d095) {
                _0x1c2022.int32(_0x33bb1f.EffectPos[_0x56d095]);
              }
              _0x1c2022.ldelim();
            }
            null != _0x33bb1f.JPState && Object.hasOwnProperty.call(_0x33bb1f, "JPState") && _0x1c2022.uint32(24).int32(_0x33bb1f.JPState);
            null != _0x33bb1f.Number && Object.hasOwnProperty.call(_0x33bb1f, "Number") && _0x1c2022.uint32(33).double(_0x33bb1f.Number);
            return _0x1c2022;
          };
          _0x8263ce.encodeDelimited = function (_0x2b1705, _0x3c040e) {
            return this.encode(_0x2b1705, _0x3c040e).ldelim();
          };
          _0x8263ce.decode = function (_0x5c949f, _0x47c82d) {
            _0x5c949f instanceof _0x3f4e9d || (_0x5c949f = _0x3f4e9d.create(_0x5c949f));
            for (var _0x182b6b = undefined === _0x47c82d ? _0x5c949f.len : _0x5c949f.pos + _0x47c82d, _0x59fad5 = new _0x3965e0.tct2Proto.FeatureEffect(); _0x5c949f.pos < _0x182b6b;) {
              var _0xdfdb3a = _0x5c949f.uint32();
              switch (_0xdfdb3a >>> 3) {
                case 1:
                  _0x59fad5.ScatterPos = _0x5c949f.int32();
                  break;
                case 2:
                  if (_0x59fad5.EffectPos && _0x59fad5.EffectPos.length || (_0x59fad5.EffectPos = []), 2 == (7 & _0xdfdb3a)) {
                    for (var _0x189758 = _0x5c949f.uint32() + _0x5c949f.pos; _0x5c949f.pos < _0x189758;) {
                      _0x59fad5.EffectPos.push(_0x5c949f.int32());
                    }
                  } else {
                    _0x59fad5.EffectPos.push(_0x5c949f.int32());
                  }
                  break;
                case 3:
                  _0x59fad5.JPState = _0x5c949f.int32();
                  break;
                case 4:
                  _0x59fad5.Number = _0x5c949f.double();
                  break;
                default:
                  _0x5c949f.skipType(7 & _0xdfdb3a);
              }
            }
            return _0x59fad5;
          };
          _0x8263ce.decodeDelimited = function (_0x5bb17e) {
            _0x5bb17e instanceof _0x3f4e9d || (_0x5bb17e = new _0x3f4e9d(_0x5bb17e));
            return this.decode(_0x5bb17e, _0x5bb17e.uint32());
          };
          _0x8263ce.verify = function (_0x5b745a) {
            if ("object" != typeof _0x5b745a || null === _0x5b745a) {
              return "object expected";
            }
            if (null != _0x5b745a.ScatterPos && _0x5b745a.hasOwnProperty("ScatterPos") && !_0x2999c5.isInteger(_0x5b745a.ScatterPos)) {
              return "ScatterPos: integer expected";
            }
            if (null != _0x5b745a.EffectPos && _0x5b745a.hasOwnProperty("EffectPos")) {
              if (!Array.isArray(_0x5b745a.EffectPos)) {
                return "EffectPos: array expected";
              }
              for (var _0x14ceb5 = 0; _0x14ceb5 < _0x5b745a.EffectPos.length; ++_0x14ceb5) {
                if (!_0x2999c5.isInteger(_0x5b745a.EffectPos[_0x14ceb5])) {
                  return "EffectPos: integer[] expected";
                }
              }
            }
            return null != _0x5b745a.JPState && _0x5b745a.hasOwnProperty("JPState") && !_0x2999c5.isInteger(_0x5b745a.JPState) ? "JPState: integer expected" : null != _0x5b745a.Number && _0x5b745a.hasOwnProperty("Number") && "number" != typeof _0x5b745a.Number ? "Number: number expected" : null;
          };
          _0x8263ce.fromObject = function (_0x1bad7f) {
            if (_0x1bad7f instanceof _0x3965e0.tct2Proto.FeatureEffect) {
              return _0x1bad7f;
            }
            var _0x3d3743 = new _0x3965e0.tct2Proto.FeatureEffect();
            if (null != _0x1bad7f.ScatterPos && (_0x3d3743.ScatterPos = 0 | _0x1bad7f.ScatterPos), _0x1bad7f.EffectPos) {
              if (!Array.isArray(_0x1bad7f.EffectPos)) {
                throw TypeError(".tct2Proto.FeatureEffect.EffectPos: array expected");
              }
              _0x3d3743.EffectPos = [];
              for (var _0x2cbe64 = 0; _0x2cbe64 < _0x1bad7f.EffectPos.length; ++_0x2cbe64) {
                _0x3d3743.EffectPos[_0x2cbe64] = 0 | _0x1bad7f.EffectPos[_0x2cbe64];
              }
            }
            null != _0x1bad7f.JPState && (_0x3d3743.JPState = 0 | _0x1bad7f.JPState);
            null != _0x1bad7f.Number && (_0x3d3743.Number = Number(_0x1bad7f.Number));
            return _0x3d3743;
          };
          _0x8263ce.toObject = function (_0x2e2802, _0x39bc98) {
            _0x39bc98 || (_0x39bc98 = {});
            var _0x1ff8d1 = {};
            if ((_0x39bc98.arrays || _0x39bc98.defaults) && (_0x1ff8d1.EffectPos = []), _0x39bc98.defaults && (_0x1ff8d1.ScatterPos = 0, _0x1ff8d1.JPState = 0, _0x1ff8d1.Number = 0), null != _0x2e2802.ScatterPos && _0x2e2802.hasOwnProperty("ScatterPos") && (_0x1ff8d1.ScatterPos = _0x2e2802.ScatterPos), _0x2e2802.EffectPos && _0x2e2802.EffectPos.length) {
              _0x1ff8d1.EffectPos = [];
              for (var _0x1b4e7b = 0; _0x1b4e7b < _0x2e2802.EffectPos.length; ++_0x1b4e7b) {
                _0x1ff8d1.EffectPos[_0x1b4e7b] = _0x2e2802.EffectPos[_0x1b4e7b];
              }
            }
            null != _0x2e2802.JPState && _0x2e2802.hasOwnProperty("JPState") && (_0x1ff8d1.JPState = _0x2e2802.JPState);
            null != _0x2e2802.Number && _0x2e2802.hasOwnProperty("Number") && (_0x1ff8d1.Number = _0x39bc98.json && !isFinite(_0x2e2802.Number) ? String(_0x2e2802.Number) : _0x2e2802.Number);
            return _0x1ff8d1;
          };
          _0x8263ce.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x8263ce.getTypeUrl = function (_0x4f6a9c) {
            undefined === _0x4f6a9c && (_0x4f6a9c = "type.googleapis.com");
            return _0x4f6a9c + "/tct2Proto.FeatureEffect";
          };
          return _0x8263ce;
        }(), _0x244ce2.FeatureEffectData = function () {
          function _0x53abff(_0x51a79d) {
            if (this.FED = [], _0x51a79d) {
              for (var _0x17a42b = Object.keys(_0x51a79d), _0x16faa3 = 0; _0x16faa3 < _0x17a42b.length; ++_0x16faa3) {
                null != _0x51a79d[_0x17a42b[_0x16faa3]] && (this[_0x17a42b[_0x16faa3]] = _0x51a79d[_0x17a42b[_0x16faa3]]);
              }
            }
          }
          _0x53abff.prototype.FED = _0x2999c5.emptyArray;
          _0x53abff.create = function (_0x54b6f0) {
            return new _0x53abff(_0x54b6f0);
          };
          _0x53abff.encode = function (_0x409c07, _0x551916) {
            if (_0x551916 || (_0x551916 = _0x579612.create()), null != _0x409c07.FED && _0x409c07.FED.length) {
              for (var _0x391a72 = 0; _0x391a72 < _0x409c07.FED.length; ++_0x391a72) {
                _0x3965e0.tct2Proto.FeatureEffect.encode(_0x409c07.FED[_0x391a72], _0x551916.uint32(10).fork()).ldelim();
              }
            }
            return _0x551916;
          };
          _0x53abff.encodeDelimited = function (_0x4bcedd, _0xf68e5e) {
            return this.encode(_0x4bcedd, _0xf68e5e).ldelim();
          };
          _0x53abff.decode = function (_0x22cbdf, _0x564292) {
            _0x22cbdf instanceof _0x3f4e9d || (_0x22cbdf = _0x3f4e9d.create(_0x22cbdf));
            for (var _0x35de5f = undefined === _0x564292 ? _0x22cbdf.len : _0x22cbdf.pos + _0x564292, _0x4bb748 = new _0x3965e0.tct2Proto.FeatureEffectData(); _0x22cbdf.pos < _0x35de5f;) {
              var _0x2686af = _0x22cbdf.uint32();
              switch (_0x2686af >>> 3) {
                case 1:
                  _0x4bb748.FED && _0x4bb748.FED.length || (_0x4bb748.FED = []);
                  _0x4bb748.FED.push(_0x3965e0.tct2Proto.FeatureEffect.decode(_0x22cbdf, _0x22cbdf.uint32()));
                  break;
                default:
                  _0x22cbdf.skipType(7 & _0x2686af);
              }
            }
            return _0x4bb748;
          };
          _0x53abff.decodeDelimited = function (_0x488a0a) {
            _0x488a0a instanceof _0x3f4e9d || (_0x488a0a = new _0x3f4e9d(_0x488a0a));
            return this.decode(_0x488a0a, _0x488a0a.uint32());
          };
          _0x53abff.verify = function (_0x3f122b) {
            if ("object" != typeof _0x3f122b || null === _0x3f122b) {
              return "object expected";
            }
            if (null != _0x3f122b.FED && _0x3f122b.hasOwnProperty("FED")) {
              if (!Array.isArray(_0x3f122b.FED)) {
                return "FED: array expected";
              }
              for (var _0x2fc226 = 0; _0x2fc226 < _0x3f122b.FED.length; ++_0x2fc226) {
                var _0x248e10 = _0x3965e0.tct2Proto.FeatureEffect.verify(_0x3f122b.FED[_0x2fc226]);
                if (_0x248e10) {
                  return "FED." + _0x248e10;
                }
              }
            }
            return null;
          };
          _0x53abff.fromObject = function (_0x22a866) {
            if (_0x22a866 instanceof _0x3965e0.tct2Proto.FeatureEffectData) {
              return _0x22a866;
            }
            var _0x3ae3cb = new _0x3965e0.tct2Proto.FeatureEffectData();
            if (_0x22a866.FED) {
              if (!Array.isArray(_0x22a866.FED)) {
                throw TypeError(".tct2Proto.FeatureEffectData.FED: array expected");
              }
              _0x3ae3cb.FED = [];
              for (var _0x50b4ce = 0; _0x50b4ce < _0x22a866.FED.length; ++_0x50b4ce) {
                if ("object" != typeof _0x22a866.FED[_0x50b4ce]) {
                  throw TypeError(".tct2Proto.FeatureEffectData.FED: object expected");
                }
                _0x3ae3cb.FED[_0x50b4ce] = _0x3965e0.tct2Proto.FeatureEffect.fromObject(_0x22a866.FED[_0x50b4ce]);
              }
            }
            return _0x3ae3cb;
          };
          _0x53abff.toObject = function (_0x4166dc, _0x488935) {
            _0x488935 || (_0x488935 = {});
            var _0x551946 = {};
            if ((_0x488935.arrays || _0x488935.defaults) && (_0x551946.FED = []), _0x4166dc.FED && _0x4166dc.FED.length) {
              _0x551946.FED = [];
              for (var _0xb508c4 = 0; _0xb508c4 < _0x4166dc.FED.length; ++_0xb508c4) {
                _0x551946.FED[_0xb508c4] = _0x3965e0.tct2Proto.FeatureEffect.toObject(_0x4166dc.FED[_0xb508c4], _0x488935);
              }
            }
            return _0x551946;
          };
          _0x53abff.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x53abff.getTypeUrl = function (_0x30f1d2) {
            undefined === _0x30f1d2 && (_0x30f1d2 = "type.googleapis.com");
            return _0x30f1d2 + "/tct2Proto.FeatureEffectData";
          };
          return _0x53abff;
        }(), _0x244ce2.RoundInfo = function () {
          function _0x33c912(_0xba39f6) {
            if (this.MainPlateSymbol = [], this.FreePlateSymbol = [], this.FreePlateSymbolLog = [], this.AwardDataVec = [], this.BlueData = [], this.RedData = [], this.GreenData = [], this.AddCrack = [], _0xba39f6) {
              for (var _0x40f774 = Object.keys(_0xba39f6), _0x2c652e = 0; _0x2c652e < _0x40f774.length; ++_0x2c652e) {
                null != _0xba39f6[_0x40f774[_0x2c652e]] && (this[_0x40f774[_0x2c652e]] = _0xba39f6[_0x40f774[_0x2c652e]]);
              }
            }
          }
          _0x33c912.prototype.MainPlateSymbol = _0x2999c5.emptyArray;
          _0x33c912.prototype.FreePlateSymbol = _0x2999c5.emptyArray;
          _0x33c912.prototype.FreePlateSymbolLog = _0x2999c5.emptyArray;
          _0x33c912.prototype.AwardDataVec = _0x2999c5.emptyArray;
          _0x33c912.prototype.AwardTypeFlag = 0;
          _0x33c912.prototype.RoundWin = 0;
          _0x33c912.prototype.FreeRemainRound = 0;
          _0x33c912.prototype.FreeNowRound = 0;
          _0x33c912.prototype.MGReelWeightResult = 0;
          _0x33c912.prototype.BlueData = _0x2999c5.emptyArray;
          _0x33c912.prototype.RedData = _0x2999c5.emptyArray;
          _0x33c912.prototype.GreenData = _0x2999c5.emptyArray;
          _0x33c912.prototype.AddCrack = _0x2999c5.emptyArray;
          _0x33c912.prototype.MaxFlag = false;
          _0x33c912.create = function (_0xd2ba92) {
            return new _0x33c912(_0xd2ba92);
          };
          _0x33c912.encode = function (_0x16dc33, _0x12129b) {
            if (_0x12129b || (_0x12129b = _0x579612.create()), null != _0x16dc33.MainPlateSymbol && _0x16dc33.MainPlateSymbol.length) {
              for (var _0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.MainPlateSymbol.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.Column.encode(_0x16dc33.MainPlateSymbol[_0x4b3fcf], _0x12129b.uint32(10).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.FreePlateSymbol && _0x16dc33.FreePlateSymbol.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.FreePlateSymbol.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.FreePlateCSymbolData.encode(_0x16dc33.FreePlateSymbol[_0x4b3fcf], _0x12129b.uint32(18).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.FreePlateSymbolLog && _0x16dc33.FreePlateSymbolLog.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.FreePlateSymbolLog.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.FreePlateCSymbolData.encode(_0x16dc33.FreePlateSymbolLog[_0x4b3fcf], _0x12129b.uint32(26).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.AwardDataVec && _0x16dc33.AwardDataVec.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.AwardDataVec.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.AwardData.encode(_0x16dc33.AwardDataVec[_0x4b3fcf], _0x12129b.uint32(34).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.AwardTypeFlag && Object.hasOwnProperty.call(_0x16dc33, "AwardTypeFlag") && _0x12129b.uint32(40).int32(_0x16dc33.AwardTypeFlag), null != _0x16dc33.RoundWin && Object.hasOwnProperty.call(_0x16dc33, "RoundWin") && _0x12129b.uint32(49).double(_0x16dc33.RoundWin), null != _0x16dc33.FreeRemainRound && Object.hasOwnProperty.call(_0x16dc33, "FreeRemainRound") && _0x12129b.uint32(56).int32(_0x16dc33.FreeRemainRound), null != _0x16dc33.FreeNowRound && Object.hasOwnProperty.call(_0x16dc33, "FreeNowRound") && _0x12129b.uint32(64).int32(_0x16dc33.FreeNowRound), null != _0x16dc33.MGReelWeightResult && Object.hasOwnProperty.call(_0x16dc33, "MGReelWeightResult") && _0x12129b.uint32(80).int32(_0x16dc33.MGReelWeightResult), null != _0x16dc33.BlueData && _0x16dc33.BlueData.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.BlueData.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.FeatureEffectData.encode(_0x16dc33.BlueData[_0x4b3fcf], _0x12129b.uint32(90).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.RedData && _0x16dc33.RedData.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.RedData.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.FeatureEffectData.encode(_0x16dc33.RedData[_0x4b3fcf], _0x12129b.uint32(98).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.GreenData && _0x16dc33.GreenData.length) {
              for (_0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.GreenData.length; ++_0x4b3fcf) {
                _0x3965e0.tct2Proto.FeatureEffectData.encode(_0x16dc33.GreenData[_0x4b3fcf], _0x12129b.uint32(106).fork()).ldelim();
              }
            }
            if (null != _0x16dc33.AddCrack && _0x16dc33.AddCrack.length) {
              for (_0x12129b.uint32(114).fork(), _0x4b3fcf = 0; _0x4b3fcf < _0x16dc33.AddCrack.length; ++_0x4b3fcf) {
                _0x12129b.bool(_0x16dc33.AddCrack[_0x4b3fcf]);
              }
              _0x12129b.ldelim();
            }
            null != _0x16dc33.MaxFlag && Object.hasOwnProperty.call(_0x16dc33, "MaxFlag") && _0x12129b.uint32(120).bool(_0x16dc33.MaxFlag);
            return _0x12129b;
          };
          _0x33c912.encodeDelimited = function (_0x361e0e, _0x4c0e92) {
            return this.encode(_0x361e0e, _0x4c0e92).ldelim();
          };
          _0x33c912.decode = function (_0x505843, _0x491fed) {
            _0x505843 instanceof _0x3f4e9d || (_0x505843 = _0x3f4e9d.create(_0x505843));
            for (var _0x1c6b44 = undefined === _0x491fed ? _0x505843.len : _0x505843.pos + _0x491fed, _0xb93f60 = new _0x3965e0.tct2Proto.RoundInfo(); _0x505843.pos < _0x1c6b44;) {
              var _0x46101f = _0x505843.uint32();
              switch (_0x46101f >>> 3) {
                case 1:
                  _0xb93f60.MainPlateSymbol && _0xb93f60.MainPlateSymbol.length || (_0xb93f60.MainPlateSymbol = []);
                  _0xb93f60.MainPlateSymbol.push(_0x3965e0.tct2Proto.Column.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 2:
                  _0xb93f60.FreePlateSymbol && _0xb93f60.FreePlateSymbol.length || (_0xb93f60.FreePlateSymbol = []);
                  _0xb93f60.FreePlateSymbol.push(_0x3965e0.tct2Proto.FreePlateCSymbolData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 3:
                  _0xb93f60.FreePlateSymbolLog && _0xb93f60.FreePlateSymbolLog.length || (_0xb93f60.FreePlateSymbolLog = []);
                  _0xb93f60.FreePlateSymbolLog.push(_0x3965e0.tct2Proto.FreePlateCSymbolData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 4:
                  _0xb93f60.AwardDataVec && _0xb93f60.AwardDataVec.length || (_0xb93f60.AwardDataVec = []);
                  _0xb93f60.AwardDataVec.push(_0x3965e0.tct2Proto.AwardData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 5:
                  _0xb93f60.AwardTypeFlag = _0x505843.int32();
                  break;
                case 6:
                  _0xb93f60.RoundWin = _0x505843.double();
                  break;
                case 7:
                  _0xb93f60.FreeRemainRound = _0x505843.int32();
                  break;
                case 8:
                  _0xb93f60.FreeNowRound = _0x505843.int32();
                  break;
                case 10:
                  _0xb93f60.MGReelWeightResult = _0x505843.int32();
                  break;
                case 11:
                  _0xb93f60.BlueData && _0xb93f60.BlueData.length || (_0xb93f60.BlueData = []);
                  _0xb93f60.BlueData.push(_0x3965e0.tct2Proto.FeatureEffectData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 12:
                  _0xb93f60.RedData && _0xb93f60.RedData.length || (_0xb93f60.RedData = []);
                  _0xb93f60.RedData.push(_0x3965e0.tct2Proto.FeatureEffectData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 13:
                  _0xb93f60.GreenData && _0xb93f60.GreenData.length || (_0xb93f60.GreenData = []);
                  _0xb93f60.GreenData.push(_0x3965e0.tct2Proto.FeatureEffectData.decode(_0x505843, _0x505843.uint32()));
                  break;
                case 14:
                  if (_0xb93f60.AddCrack && _0xb93f60.AddCrack.length || (_0xb93f60.AddCrack = []), 2 == (7 & _0x46101f)) {
                    for (var _0xa90808 = _0x505843.uint32() + _0x505843.pos; _0x505843.pos < _0xa90808;) {
                      _0xb93f60.AddCrack.push(_0x505843.bool());
                    }
                  } else {
                    _0xb93f60.AddCrack.push(_0x505843.bool());
                  }
                  break;
                case 15:
                  _0xb93f60.MaxFlag = _0x505843.bool();
                  break;
                default:
                  _0x505843.skipType(7 & _0x46101f);
              }
            }
            return _0xb93f60;
          };
          _0x33c912.decodeDelimited = function (_0x4b41be) {
            _0x4b41be instanceof _0x3f4e9d || (_0x4b41be = new _0x3f4e9d(_0x4b41be));
            return this.decode(_0x4b41be, _0x4b41be.uint32());
          };
          _0x33c912.verify = function (_0x15404c) {
            if ("object" != typeof _0x15404c || null === _0x15404c) {
              return "object expected";
            }
            if (null != _0x15404c.MainPlateSymbol && _0x15404c.hasOwnProperty("MainPlateSymbol")) {
              if (!Array.isArray(_0x15404c.MainPlateSymbol)) {
                return "MainPlateSymbol: array expected";
              }
              for (var _0x42414c = 0; _0x42414c < _0x15404c.MainPlateSymbol.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.Column.verify(_0x15404c.MainPlateSymbol[_0x42414c])) {
                  return "MainPlateSymbol." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.FreePlateSymbol && _0x15404c.hasOwnProperty("FreePlateSymbol")) {
              if (!Array.isArray(_0x15404c.FreePlateSymbol)) {
                return "FreePlateSymbol: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.FreePlateSymbol.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.FreePlateCSymbolData.verify(_0x15404c.FreePlateSymbol[_0x42414c])) {
                  return "FreePlateSymbol." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.FreePlateSymbolLog && _0x15404c.hasOwnProperty("FreePlateSymbolLog")) {
              if (!Array.isArray(_0x15404c.FreePlateSymbolLog)) {
                return "FreePlateSymbolLog: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.FreePlateSymbolLog.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.FreePlateCSymbolData.verify(_0x15404c.FreePlateSymbolLog[_0x42414c])) {
                  return "FreePlateSymbolLog." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.AwardDataVec && _0x15404c.hasOwnProperty("AwardDataVec")) {
              if (!Array.isArray(_0x15404c.AwardDataVec)) {
                return "AwardDataVec: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.AwardDataVec.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.AwardData.verify(_0x15404c.AwardDataVec[_0x42414c])) {
                  return "AwardDataVec." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.AwardTypeFlag && _0x15404c.hasOwnProperty("AwardTypeFlag") && !_0x2999c5.isInteger(_0x15404c.AwardTypeFlag)) {
              return "AwardTypeFlag: integer expected";
            }
            if (null != _0x15404c.RoundWin && _0x15404c.hasOwnProperty("RoundWin") && "number" != typeof _0x15404c.RoundWin) {
              return "RoundWin: number expected";
            }
            if (null != _0x15404c.FreeRemainRound && _0x15404c.hasOwnProperty("FreeRemainRound") && !_0x2999c5.isInteger(_0x15404c.FreeRemainRound)) {
              return "FreeRemainRound: integer expected";
            }
            if (null != _0x15404c.FreeNowRound && _0x15404c.hasOwnProperty("FreeNowRound") && !_0x2999c5.isInteger(_0x15404c.FreeNowRound)) {
              return "FreeNowRound: integer expected";
            }
            if (null != _0x15404c.MGReelWeightResult && _0x15404c.hasOwnProperty("MGReelWeightResult") && !_0x2999c5.isInteger(_0x15404c.MGReelWeightResult)) {
              return "MGReelWeightResult: integer expected";
            }
            if (null != _0x15404c.BlueData && _0x15404c.hasOwnProperty("BlueData")) {
              if (!Array.isArray(_0x15404c.BlueData)) {
                return "BlueData: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.BlueData.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.FeatureEffectData.verify(_0x15404c.BlueData[_0x42414c])) {
                  return "BlueData." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.RedData && _0x15404c.hasOwnProperty("RedData")) {
              if (!Array.isArray(_0x15404c.RedData)) {
                return "RedData: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.RedData.length; ++_0x42414c) {
                if (_0x5d2f25 = _0x3965e0.tct2Proto.FeatureEffectData.verify(_0x15404c.RedData[_0x42414c])) {
                  return "RedData." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.GreenData && _0x15404c.hasOwnProperty("GreenData")) {
              if (!Array.isArray(_0x15404c.GreenData)) {
                return "GreenData: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.GreenData.length; ++_0x42414c) {
                var _0x5d2f25;
                if (_0x5d2f25 = _0x3965e0.tct2Proto.FeatureEffectData.verify(_0x15404c.GreenData[_0x42414c])) {
                  return "GreenData." + _0x5d2f25;
                }
              }
            }
            if (null != _0x15404c.AddCrack && _0x15404c.hasOwnProperty("AddCrack")) {
              if (!Array.isArray(_0x15404c.AddCrack)) {
                return "AddCrack: array expected";
              }
              for (_0x42414c = 0; _0x42414c < _0x15404c.AddCrack.length; ++_0x42414c) {
                if ("boolean" != typeof _0x15404c.AddCrack[_0x42414c]) {
                  return "AddCrack: boolean[] expected";
                }
              }
            }
            return null != _0x15404c.MaxFlag && _0x15404c.hasOwnProperty("MaxFlag") && "boolean" != typeof _0x15404c.MaxFlag ? "MaxFlag: boolean expected" : null;
          };
          _0x33c912.fromObject = function (_0x4d8b57) {
            if (_0x4d8b57 instanceof _0x3965e0.tct2Proto.RoundInfo) {
              return _0x4d8b57;
            }
            var _0x285b52 = new _0x3965e0.tct2Proto.RoundInfo();
            if (_0x4d8b57.MainPlateSymbol) {
              if (!Array.isArray(_0x4d8b57.MainPlateSymbol)) {
                throw TypeError(".tct2Proto.RoundInfo.MainPlateSymbol: array expected");
              }
              _0x285b52.MainPlateSymbol = [];
              for (var _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.MainPlateSymbol.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.MainPlateSymbol[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.MainPlateSymbol: object expected");
                }
                _0x285b52.MainPlateSymbol[_0x17ca12] = _0x3965e0.tct2Proto.Column.fromObject(_0x4d8b57.MainPlateSymbol[_0x17ca12]);
              }
            }
            if (_0x4d8b57.FreePlateSymbol) {
              if (!Array.isArray(_0x4d8b57.FreePlateSymbol)) {
                throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbol: array expected");
              }
              for (_0x285b52.FreePlateSymbol = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.FreePlateSymbol.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.FreePlateSymbol[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbol: object expected");
                }
                _0x285b52.FreePlateSymbol[_0x17ca12] = _0x3965e0.tct2Proto.FreePlateCSymbolData.fromObject(_0x4d8b57.FreePlateSymbol[_0x17ca12]);
              }
            }
            if (_0x4d8b57.FreePlateSymbolLog) {
              if (!Array.isArray(_0x4d8b57.FreePlateSymbolLog)) {
                throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbolLog: array expected");
              }
              for (_0x285b52.FreePlateSymbolLog = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.FreePlateSymbolLog.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.FreePlateSymbolLog[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.FreePlateSymbolLog: object expected");
                }
                _0x285b52.FreePlateSymbolLog[_0x17ca12] = _0x3965e0.tct2Proto.FreePlateCSymbolData.fromObject(_0x4d8b57.FreePlateSymbolLog[_0x17ca12]);
              }
            }
            if (_0x4d8b57.AwardDataVec) {
              if (!Array.isArray(_0x4d8b57.AwardDataVec)) {
                throw TypeError(".tct2Proto.RoundInfo.AwardDataVec: array expected");
              }
              for (_0x285b52.AwardDataVec = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.AwardDataVec.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.AwardDataVec[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.AwardDataVec: object expected");
                }
                _0x285b52.AwardDataVec[_0x17ca12] = _0x3965e0.tct2Proto.AwardData.fromObject(_0x4d8b57.AwardDataVec[_0x17ca12]);
              }
            }
            if (null != _0x4d8b57.AwardTypeFlag && (_0x285b52.AwardTypeFlag = 0 | _0x4d8b57.AwardTypeFlag), null != _0x4d8b57.RoundWin && (_0x285b52.RoundWin = Number(_0x4d8b57.RoundWin)), null != _0x4d8b57.FreeRemainRound && (_0x285b52.FreeRemainRound = 0 | _0x4d8b57.FreeRemainRound), null != _0x4d8b57.FreeNowRound && (_0x285b52.FreeNowRound = 0 | _0x4d8b57.FreeNowRound), null != _0x4d8b57.MGReelWeightResult && (_0x285b52.MGReelWeightResult = 0 | _0x4d8b57.MGReelWeightResult), _0x4d8b57.BlueData) {
              if (!Array.isArray(_0x4d8b57.BlueData)) {
                throw TypeError(".tct2Proto.RoundInfo.BlueData: array expected");
              }
              for (_0x285b52.BlueData = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.BlueData.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.BlueData[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.BlueData: object expected");
                }
                _0x285b52.BlueData[_0x17ca12] = _0x3965e0.tct2Proto.FeatureEffectData.fromObject(_0x4d8b57.BlueData[_0x17ca12]);
              }
            }
            if (_0x4d8b57.RedData) {
              if (!Array.isArray(_0x4d8b57.RedData)) {
                throw TypeError(".tct2Proto.RoundInfo.RedData: array expected");
              }
              for (_0x285b52.RedData = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.RedData.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.RedData[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.RedData: object expected");
                }
                _0x285b52.RedData[_0x17ca12] = _0x3965e0.tct2Proto.FeatureEffectData.fromObject(_0x4d8b57.RedData[_0x17ca12]);
              }
            }
            if (_0x4d8b57.GreenData) {
              if (!Array.isArray(_0x4d8b57.GreenData)) {
                throw TypeError(".tct2Proto.RoundInfo.GreenData: array expected");
              }
              for (_0x285b52.GreenData = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.GreenData.length; ++_0x17ca12) {
                if ("object" != typeof _0x4d8b57.GreenData[_0x17ca12]) {
                  throw TypeError(".tct2Proto.RoundInfo.GreenData: object expected");
                }
                _0x285b52.GreenData[_0x17ca12] = _0x3965e0.tct2Proto.FeatureEffectData.fromObject(_0x4d8b57.GreenData[_0x17ca12]);
              }
            }
            if (_0x4d8b57.AddCrack) {
              if (!Array.isArray(_0x4d8b57.AddCrack)) {
                throw TypeError(".tct2Proto.RoundInfo.AddCrack: array expected");
              }
              for (_0x285b52.AddCrack = [], _0x17ca12 = 0; _0x17ca12 < _0x4d8b57.AddCrack.length; ++_0x17ca12) {
                _0x285b52.AddCrack[_0x17ca12] = Boolean(_0x4d8b57.AddCrack[_0x17ca12]);
              }
            }
            null != _0x4d8b57.MaxFlag && (_0x285b52.MaxFlag = Boolean(_0x4d8b57.MaxFlag));
            return _0x285b52;
          };
          _0x33c912.toObject = function (_0x58d868, _0x19d386) {
            _0x19d386 || (_0x19d386 = {});
            var _0x3d217e = {};
            if ((_0x19d386.arrays || _0x19d386.defaults) && (_0x3d217e.MainPlateSymbol = [], _0x3d217e.FreePlateSymbol = [], _0x3d217e.FreePlateSymbolLog = [], _0x3d217e.AwardDataVec = [], _0x3d217e.BlueData = [], _0x3d217e.RedData = [], _0x3d217e.GreenData = [], _0x3d217e.AddCrack = []), _0x19d386.defaults && (_0x3d217e.AwardTypeFlag = 0, _0x3d217e.RoundWin = 0, _0x3d217e.FreeRemainRound = 0, _0x3d217e.FreeNowRound = 0, _0x3d217e.MGReelWeightResult = 0, _0x3d217e.MaxFlag = false), _0x58d868.MainPlateSymbol && _0x58d868.MainPlateSymbol.length) {
              _0x3d217e.MainPlateSymbol = [];
              for (var _0x13b47c = 0; _0x13b47c < _0x58d868.MainPlateSymbol.length; ++_0x13b47c) {
                _0x3d217e.MainPlateSymbol[_0x13b47c] = _0x3965e0.tct2Proto.Column.toObject(_0x58d868.MainPlateSymbol[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.FreePlateSymbol && _0x58d868.FreePlateSymbol.length) {
              for (_0x3d217e.FreePlateSymbol = [], _0x13b47c = 0; _0x13b47c < _0x58d868.FreePlateSymbol.length; ++_0x13b47c) {
                _0x3d217e.FreePlateSymbol[_0x13b47c] = _0x3965e0.tct2Proto.FreePlateCSymbolData.toObject(_0x58d868.FreePlateSymbol[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.FreePlateSymbolLog && _0x58d868.FreePlateSymbolLog.length) {
              for (_0x3d217e.FreePlateSymbolLog = [], _0x13b47c = 0; _0x13b47c < _0x58d868.FreePlateSymbolLog.length; ++_0x13b47c) {
                _0x3d217e.FreePlateSymbolLog[_0x13b47c] = _0x3965e0.tct2Proto.FreePlateCSymbolData.toObject(_0x58d868.FreePlateSymbolLog[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.AwardDataVec && _0x58d868.AwardDataVec.length) {
              for (_0x3d217e.AwardDataVec = [], _0x13b47c = 0; _0x13b47c < _0x58d868.AwardDataVec.length; ++_0x13b47c) {
                _0x3d217e.AwardDataVec[_0x13b47c] = _0x3965e0.tct2Proto.AwardData.toObject(_0x58d868.AwardDataVec[_0x13b47c], _0x19d386);
              }
            }
            if (null != _0x58d868.AwardTypeFlag && _0x58d868.hasOwnProperty("AwardTypeFlag") && (_0x3d217e.AwardTypeFlag = _0x58d868.AwardTypeFlag), null != _0x58d868.RoundWin && _0x58d868.hasOwnProperty("RoundWin") && (_0x3d217e.RoundWin = _0x19d386.json && !isFinite(_0x58d868.RoundWin) ? String(_0x58d868.RoundWin) : _0x58d868.RoundWin), null != _0x58d868.FreeRemainRound && _0x58d868.hasOwnProperty("FreeRemainRound") && (_0x3d217e.FreeRemainRound = _0x58d868.FreeRemainRound), null != _0x58d868.FreeNowRound && _0x58d868.hasOwnProperty("FreeNowRound") && (_0x3d217e.FreeNowRound = _0x58d868.FreeNowRound), null != _0x58d868.MGReelWeightResult && _0x58d868.hasOwnProperty("MGReelWeightResult") && (_0x3d217e.MGReelWeightResult = _0x58d868.MGReelWeightResult), _0x58d868.BlueData && _0x58d868.BlueData.length) {
              for (_0x3d217e.BlueData = [], _0x13b47c = 0; _0x13b47c < _0x58d868.BlueData.length; ++_0x13b47c) {
                _0x3d217e.BlueData[_0x13b47c] = _0x3965e0.tct2Proto.FeatureEffectData.toObject(_0x58d868.BlueData[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.RedData && _0x58d868.RedData.length) {
              for (_0x3d217e.RedData = [], _0x13b47c = 0; _0x13b47c < _0x58d868.RedData.length; ++_0x13b47c) {
                _0x3d217e.RedData[_0x13b47c] = _0x3965e0.tct2Proto.FeatureEffectData.toObject(_0x58d868.RedData[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.GreenData && _0x58d868.GreenData.length) {
              for (_0x3d217e.GreenData = [], _0x13b47c = 0; _0x13b47c < _0x58d868.GreenData.length; ++_0x13b47c) {
                _0x3d217e.GreenData[_0x13b47c] = _0x3965e0.tct2Proto.FeatureEffectData.toObject(_0x58d868.GreenData[_0x13b47c], _0x19d386);
              }
            }
            if (_0x58d868.AddCrack && _0x58d868.AddCrack.length) {
              for (_0x3d217e.AddCrack = [], _0x13b47c = 0; _0x13b47c < _0x58d868.AddCrack.length; ++_0x13b47c) {
                _0x3d217e.AddCrack[_0x13b47c] = _0x58d868.AddCrack[_0x13b47c];
              }
            }
            null != _0x58d868.MaxFlag && _0x58d868.hasOwnProperty("MaxFlag") && (_0x3d217e.MaxFlag = _0x58d868.MaxFlag);
            return _0x3d217e;
          };
          _0x33c912.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x33c912.getTypeUrl = function (_0x1eaf86) {
            undefined === _0x1eaf86 && (_0x1eaf86 = "type.googleapis.com");
            return _0x1eaf86 + "/tct2Proto.RoundInfo";
          };
          return _0x33c912;
        }(), _0x244ce2.SpinAck = function () {
          function _0x312388(_0x2106dd) {
            if (this.RoundQueue = [], this.CrackLevels = [], _0x2106dd) {
              for (var _0x5b9366 = Object.keys(_0x2106dd), _0x5c6140 = 0; _0x5c6140 < _0x5b9366.length; ++_0x5c6140) {
                null != _0x2106dd[_0x5b9366[_0x5c6140]] && (this[_0x5b9366[_0x5c6140]] = _0x2106dd[_0x5b9366[_0x5c6140]]);
              }
            }
          }
          _0x312388.prototype.RoundQueue = _0x2999c5.emptyArray;
          _0x312388.prototype.FreeTotalWin = 0;
          _0x312388.prototype.TotalWin = 0;
          _0x312388.prototype.ShowIndex = "";
          _0x312388.prototype.NowMoney = 0;
          _0x312388.prototype.AckType = 0;
          _0x312388.prototype.RTP = 0;
          _0x312388.prototype.Bet = 0;
          _0x312388.prototype.FolderIndex = 0;
          _0x312388.prototype.CrackLevels = _0x2999c5.emptyArray;
          _0x312388.create = function (_0x4da3a1) {
            return new _0x312388(_0x4da3a1);
          };
          _0x312388.encode = function (_0xf6fd7b, _0x4e62c0) {
            if (_0x4e62c0 || (_0x4e62c0 = _0x579612.create()), null != _0xf6fd7b.RoundQueue && _0xf6fd7b.RoundQueue.length) {
              for (var _0x501cf2 = 0; _0x501cf2 < _0xf6fd7b.RoundQueue.length; ++_0x501cf2) {
                _0x3965e0.tct2Proto.RoundInfo.encode(_0xf6fd7b.RoundQueue[_0x501cf2], _0x4e62c0.uint32(10).fork()).ldelim();
              }
            }
            if (null != _0xf6fd7b.FreeTotalWin && Object.hasOwnProperty.call(_0xf6fd7b, "FreeTotalWin") && _0x4e62c0.uint32(17).double(_0xf6fd7b.FreeTotalWin), null != _0xf6fd7b.TotalWin && Object.hasOwnProperty.call(_0xf6fd7b, "TotalWin") && _0x4e62c0.uint32(25).double(_0xf6fd7b.TotalWin), null != _0xf6fd7b.ShowIndex && Object.hasOwnProperty.call(_0xf6fd7b, "ShowIndex") && _0x4e62c0.uint32(34).string(_0xf6fd7b.ShowIndex), null != _0xf6fd7b.NowMoney && Object.hasOwnProperty.call(_0xf6fd7b, "NowMoney") && _0x4e62c0.uint32(41).double(_0xf6fd7b.NowMoney), null != _0xf6fd7b.AckType && Object.hasOwnProperty.call(_0xf6fd7b, "AckType") && _0x4e62c0.uint32(48).int32(_0xf6fd7b.AckType), null != _0xf6fd7b.RTP && Object.hasOwnProperty.call(_0xf6fd7b, "RTP") && _0x4e62c0.uint32(57).double(_0xf6fd7b.RTP), null != _0xf6fd7b.Bet && Object.hasOwnProperty.call(_0xf6fd7b, "Bet") && _0x4e62c0.uint32(65).double(_0xf6fd7b.Bet), null != _0xf6fd7b.FolderIndex && Object.hasOwnProperty.call(_0xf6fd7b, "FolderIndex") && _0x4e62c0.uint32(72).int32(_0xf6fd7b.FolderIndex), null != _0xf6fd7b.CrackLevels && _0xf6fd7b.CrackLevels.length) {
              for (_0x4e62c0.uint32(82).fork(), _0x501cf2 = 0; _0x501cf2 < _0xf6fd7b.CrackLevels.length; ++_0x501cf2) {
                _0x4e62c0.int32(_0xf6fd7b.CrackLevels[_0x501cf2]);
              }
              _0x4e62c0.ldelim();
            }
            return _0x4e62c0;
          };
          _0x312388.encodeDelimited = function (_0x2ae267, _0x3ebdb0) {
            return this.encode(_0x2ae267, _0x3ebdb0).ldelim();
          };
          _0x312388.decode = function (_0x4291c4, _0x588820) {
            _0x4291c4 instanceof _0x3f4e9d || (_0x4291c4 = _0x3f4e9d.create(_0x4291c4));
            for (var _0x3be157 = undefined === _0x588820 ? _0x4291c4.len : _0x4291c4.pos + _0x588820, _0x14cb76 = new _0x3965e0.tct2Proto.SpinAck(); _0x4291c4.pos < _0x3be157;) {
              var _0x16b7a3 = _0x4291c4.uint32();
              switch (_0x16b7a3 >>> 3) {
                case 1:
                  _0x14cb76.RoundQueue && _0x14cb76.RoundQueue.length || (_0x14cb76.RoundQueue = []);
                  _0x14cb76.RoundQueue.push(_0x3965e0.tct2Proto.RoundInfo.decode(_0x4291c4, _0x4291c4.uint32()));
                  break;
                case 2:
                  _0x14cb76.FreeTotalWin = _0x4291c4.double();
                  break;
                case 3:
                  _0x14cb76.TotalWin = _0x4291c4.double();
                  break;
                case 4:
                  _0x14cb76.ShowIndex = _0x4291c4.string();
                  break;
                case 5:
                  _0x14cb76.NowMoney = _0x4291c4.double();
                  break;
                case 6:
                  _0x14cb76.AckType = _0x4291c4.int32();
                  break;
                case 7:
                  _0x14cb76.RTP = _0x4291c4.double();
                  break;
                case 8:
                  _0x14cb76.Bet = _0x4291c4.double();
                  break;
                case 9:
                  _0x14cb76.FolderIndex = _0x4291c4.int32();
                  break;
                case 10:
                  if (_0x14cb76.CrackLevels && _0x14cb76.CrackLevels.length || (_0x14cb76.CrackLevels = []), 2 == (7 & _0x16b7a3)) {
                    for (var _0x183234 = _0x4291c4.uint32() + _0x4291c4.pos; _0x4291c4.pos < _0x183234;) {
                      _0x14cb76.CrackLevels.push(_0x4291c4.int32());
                    }
                  } else {
                    _0x14cb76.CrackLevels.push(_0x4291c4.int32());
                  }
                  break;
                default:
                  _0x4291c4.skipType(7 & _0x16b7a3);
              }
            }
            return _0x14cb76;
          };
          _0x312388.decodeDelimited = function (_0x2efb64) {
            _0x2efb64 instanceof _0x3f4e9d || (_0x2efb64 = new _0x3f4e9d(_0x2efb64));
            return this.decode(_0x2efb64, _0x2efb64.uint32());
          };
          _0x312388.verify = function (_0x387239) {
            if ("object" != typeof _0x387239 || null === _0x387239) {
              return "object expected";
            }
            if (null != _0x387239.RoundQueue && _0x387239.hasOwnProperty("RoundQueue")) {
              if (!Array.isArray(_0x387239.RoundQueue)) {
                return "RoundQueue: array expected";
              }
              for (var _0xc5a128 = 0; _0xc5a128 < _0x387239.RoundQueue.length; ++_0xc5a128) {
                var _0x4e1b92 = _0x3965e0.tct2Proto.RoundInfo.verify(_0x387239.RoundQueue[_0xc5a128]);
                if (_0x4e1b92) {
                  return "RoundQueue." + _0x4e1b92;
                }
              }
            }
            if (null != _0x387239.FreeTotalWin && _0x387239.hasOwnProperty("FreeTotalWin") && "number" != typeof _0x387239.FreeTotalWin) {
              return "FreeTotalWin: number expected";
            }
            if (null != _0x387239.TotalWin && _0x387239.hasOwnProperty("TotalWin") && "number" != typeof _0x387239.TotalWin) {
              return "TotalWin: number expected";
            }
            if (null != _0x387239.ShowIndex && _0x387239.hasOwnProperty("ShowIndex") && !_0x2999c5.isString(_0x387239.ShowIndex)) {
              return "ShowIndex: string expected";
            }
            if (null != _0x387239.NowMoney && _0x387239.hasOwnProperty("NowMoney") && "number" != typeof _0x387239.NowMoney) {
              return "NowMoney: number expected";
            }
            if (null != _0x387239.AckType && _0x387239.hasOwnProperty("AckType") && !_0x2999c5.isInteger(_0x387239.AckType)) {
              return "AckType: integer expected";
            }
            if (null != _0x387239.RTP && _0x387239.hasOwnProperty("RTP") && "number" != typeof _0x387239.RTP) {
              return "RTP: number expected";
            }
            if (null != _0x387239.Bet && _0x387239.hasOwnProperty("Bet") && "number" != typeof _0x387239.Bet) {
              return "Bet: number expected";
            }
            if (null != _0x387239.FolderIndex && _0x387239.hasOwnProperty("FolderIndex") && !_0x2999c5.isInteger(_0x387239.FolderIndex)) {
              return "FolderIndex: integer expected";
            }
            if (null != _0x387239.CrackLevels && _0x387239.hasOwnProperty("CrackLevels")) {
              if (!Array.isArray(_0x387239.CrackLevels)) {
                return "CrackLevels: array expected";
              }
              for (_0xc5a128 = 0; _0xc5a128 < _0x387239.CrackLevels.length; ++_0xc5a128) {
                if (!_0x2999c5.isInteger(_0x387239.CrackLevels[_0xc5a128])) {
                  return "CrackLevels: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x312388.fromObject = function (_0x19c728) {
            if (_0x19c728 instanceof _0x3965e0.tct2Proto.SpinAck) {
              return _0x19c728;
            }
            var _0x5c62f0 = new _0x3965e0.tct2Proto.SpinAck();
            if (_0x19c728.RoundQueue) {
              if (!Array.isArray(_0x19c728.RoundQueue)) {
                throw TypeError(".tct2Proto.SpinAck.RoundQueue: array expected");
              }
              _0x5c62f0.RoundQueue = [];
              for (var _0x3c6c2f = 0; _0x3c6c2f < _0x19c728.RoundQueue.length; ++_0x3c6c2f) {
                if ("object" != typeof _0x19c728.RoundQueue[_0x3c6c2f]) {
                  throw TypeError(".tct2Proto.SpinAck.RoundQueue: object expected");
                }
                _0x5c62f0.RoundQueue[_0x3c6c2f] = _0x3965e0.tct2Proto.RoundInfo.fromObject(_0x19c728.RoundQueue[_0x3c6c2f]);
              }
            }
            if (null != _0x19c728.FreeTotalWin && (_0x5c62f0.FreeTotalWin = Number(_0x19c728.FreeTotalWin)), null != _0x19c728.TotalWin && (_0x5c62f0.TotalWin = Number(_0x19c728.TotalWin)), null != _0x19c728.ShowIndex && (_0x5c62f0.ShowIndex = String(_0x19c728.ShowIndex)), null != _0x19c728.NowMoney && (_0x5c62f0.NowMoney = Number(_0x19c728.NowMoney)), null != _0x19c728.AckType && (_0x5c62f0.AckType = 0 | _0x19c728.AckType), null != _0x19c728.RTP && (_0x5c62f0.RTP = Number(_0x19c728.RTP)), null != _0x19c728.Bet && (_0x5c62f0.Bet = Number(_0x19c728.Bet)), null != _0x19c728.FolderIndex && (_0x5c62f0.FolderIndex = 0 | _0x19c728.FolderIndex), _0x19c728.CrackLevels) {
              if (!Array.isArray(_0x19c728.CrackLevels)) {
                throw TypeError(".tct2Proto.SpinAck.CrackLevels: array expected");
              }
              for (_0x5c62f0.CrackLevels = [], _0x3c6c2f = 0; _0x3c6c2f < _0x19c728.CrackLevels.length; ++_0x3c6c2f) {
                _0x5c62f0.CrackLevels[_0x3c6c2f] = 0 | _0x19c728.CrackLevels[_0x3c6c2f];
              }
            }
            return _0x5c62f0;
          };
          _0x312388.toObject = function (_0x511ba4, _0x22cba8) {
            _0x22cba8 || (_0x22cba8 = {});
            var _0x5c7e4b = {};
            if ((_0x22cba8.arrays || _0x22cba8.defaults) && (_0x5c7e4b.RoundQueue = [], _0x5c7e4b.CrackLevels = []), _0x22cba8.defaults && (_0x5c7e4b.FreeTotalWin = 0, _0x5c7e4b.TotalWin = 0, _0x5c7e4b.ShowIndex = "", _0x5c7e4b.NowMoney = 0, _0x5c7e4b.AckType = 0, _0x5c7e4b.RTP = 0, _0x5c7e4b.Bet = 0, _0x5c7e4b.FolderIndex = 0), _0x511ba4.RoundQueue && _0x511ba4.RoundQueue.length) {
              _0x5c7e4b.RoundQueue = [];
              for (var _0x3ede3b = 0; _0x3ede3b < _0x511ba4.RoundQueue.length; ++_0x3ede3b) {
                _0x5c7e4b.RoundQueue[_0x3ede3b] = _0x3965e0.tct2Proto.RoundInfo.toObject(_0x511ba4.RoundQueue[_0x3ede3b], _0x22cba8);
              }
            }
            if (null != _0x511ba4.FreeTotalWin && _0x511ba4.hasOwnProperty("FreeTotalWin") && (_0x5c7e4b.FreeTotalWin = _0x22cba8.json && !isFinite(_0x511ba4.FreeTotalWin) ? String(_0x511ba4.FreeTotalWin) : _0x511ba4.FreeTotalWin), null != _0x511ba4.TotalWin && _0x511ba4.hasOwnProperty("TotalWin") && (_0x5c7e4b.TotalWin = _0x22cba8.json && !isFinite(_0x511ba4.TotalWin) ? String(_0x511ba4.TotalWin) : _0x511ba4.TotalWin), null != _0x511ba4.ShowIndex && _0x511ba4.hasOwnProperty("ShowIndex") && (_0x5c7e4b.ShowIndex = _0x511ba4.ShowIndex), null != _0x511ba4.NowMoney && _0x511ba4.hasOwnProperty("NowMoney") && (_0x5c7e4b.NowMoney = _0x22cba8.json && !isFinite(_0x511ba4.NowMoney) ? String(_0x511ba4.NowMoney) : _0x511ba4.NowMoney), null != _0x511ba4.AckType && _0x511ba4.hasOwnProperty("AckType") && (_0x5c7e4b.AckType = _0x511ba4.AckType), null != _0x511ba4.RTP && _0x511ba4.hasOwnProperty("RTP") && (_0x5c7e4b.RTP = _0x22cba8.json && !isFinite(_0x511ba4.RTP) ? String(_0x511ba4.RTP) : _0x511ba4.RTP), null != _0x511ba4.Bet && _0x511ba4.hasOwnProperty("Bet") && (_0x5c7e4b.Bet = _0x22cba8.json && !isFinite(_0x511ba4.Bet) ? String(_0x511ba4.Bet) : _0x511ba4.Bet), null != _0x511ba4.FolderIndex && _0x511ba4.hasOwnProperty("FolderIndex") && (_0x5c7e4b.FolderIndex = _0x511ba4.FolderIndex), _0x511ba4.CrackLevels && _0x511ba4.CrackLevels.length) {
              for (_0x5c7e4b.CrackLevels = [], _0x3ede3b = 0; _0x3ede3b < _0x511ba4.CrackLevels.length; ++_0x3ede3b) {
                _0x5c7e4b.CrackLevels[_0x3ede3b] = _0x511ba4.CrackLevels[_0x3ede3b];
              }
            }
            return _0x5c7e4b;
          };
          _0x312388.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x312388.getTypeUrl = function (_0x2029c) {
            undefined === _0x2029c && (_0x2029c = "type.googleapis.com");
            return _0x2029c + "/tct2Proto.SpinAck";
          };
          return _0x312388;
        }(), _0x244ce2.StateInfo = function () {
          function _0x55916b(_0x455927) {
            if (this.CrackLevels = [], _0x455927) {
              for (var _0x1b39c4 = Object.keys(_0x455927), _0x4a3c6f = 0; _0x4a3c6f < _0x1b39c4.length; ++_0x4a3c6f) {
                null != _0x455927[_0x1b39c4[_0x4a3c6f]] && (this[_0x1b39c4[_0x4a3c6f]] = _0x455927[_0x1b39c4[_0x4a3c6f]]);
              }
            }
          }
          _0x55916b.prototype.CrackLevels = _0x2999c5.emptyArray;
          _0x55916b.create = function (_0x425dc9) {
            return new _0x55916b(_0x425dc9);
          };
          _0x55916b.encode = function (_0x4ec4e1, _0x162e3b) {
            if (_0x162e3b || (_0x162e3b = _0x579612.create()), null != _0x4ec4e1.CrackLevels && _0x4ec4e1.CrackLevels.length) {
              _0x162e3b.uint32(10).fork();
              for (var _0x1c1a71 = 0; _0x1c1a71 < _0x4ec4e1.CrackLevels.length; ++_0x1c1a71) {
                _0x162e3b.int32(_0x4ec4e1.CrackLevels[_0x1c1a71]);
              }
              _0x162e3b.ldelim();
            }
            return _0x162e3b;
          };
          _0x55916b.encodeDelimited = function (_0x12e0d4, _0x5033a4) {
            return this.encode(_0x12e0d4, _0x5033a4).ldelim();
          };
          _0x55916b.decode = function (_0x117ec9, _0x8be181) {
            _0x117ec9 instanceof _0x3f4e9d || (_0x117ec9 = _0x3f4e9d.create(_0x117ec9));
            for (var _0x229675 = undefined === _0x8be181 ? _0x117ec9.len : _0x117ec9.pos + _0x8be181, _0x177bb8 = new _0x3965e0.tct2Proto.StateInfo(); _0x117ec9.pos < _0x229675;) {
              var _0x18506e = _0x117ec9.uint32();
              switch (_0x18506e >>> 3) {
                case 1:
                  if (_0x177bb8.CrackLevels && _0x177bb8.CrackLevels.length || (_0x177bb8.CrackLevels = []), 2 == (7 & _0x18506e)) {
                    for (var _0x3cc4ee = _0x117ec9.uint32() + _0x117ec9.pos; _0x117ec9.pos < _0x3cc4ee;) {
                      _0x177bb8.CrackLevels.push(_0x117ec9.int32());
                    }
                  } else {
                    _0x177bb8.CrackLevels.push(_0x117ec9.int32());
                  }
                  break;
                default:
                  _0x117ec9.skipType(7 & _0x18506e);
              }
            }
            return _0x177bb8;
          };
          _0x55916b.decodeDelimited = function (_0x51a064) {
            _0x51a064 instanceof _0x3f4e9d || (_0x51a064 = new _0x3f4e9d(_0x51a064));
            return this.decode(_0x51a064, _0x51a064.uint32());
          };
          _0x55916b.verify = function (_0x39c2ac) {
            if ("object" != typeof _0x39c2ac || null === _0x39c2ac) {
              return "object expected";
            }
            if (null != _0x39c2ac.CrackLevels && _0x39c2ac.hasOwnProperty("CrackLevels")) {
              if (!Array.isArray(_0x39c2ac.CrackLevels)) {
                return "CrackLevels: array expected";
              }
              for (var _0xa1a6ce = 0; _0xa1a6ce < _0x39c2ac.CrackLevels.length; ++_0xa1a6ce) {
                if (!_0x2999c5.isInteger(_0x39c2ac.CrackLevels[_0xa1a6ce])) {
                  return "CrackLevels: integer[] expected";
                }
              }
            }
            return null;
          };
          _0x55916b.fromObject = function (_0x1c6d65) {
            if (_0x1c6d65 instanceof _0x3965e0.tct2Proto.StateInfo) {
              return _0x1c6d65;
            }
            var _0x4049c8 = new _0x3965e0.tct2Proto.StateInfo();
            if (_0x1c6d65.CrackLevels) {
              if (!Array.isArray(_0x1c6d65.CrackLevels)) {
                throw TypeError(".tct2Proto.StateInfo.CrackLevels: array expected");
              }
              _0x4049c8.CrackLevels = [];
              for (var _0xa9f932 = 0; _0xa9f932 < _0x1c6d65.CrackLevels.length; ++_0xa9f932) {
                _0x4049c8.CrackLevels[_0xa9f932] = 0 | _0x1c6d65.CrackLevels[_0xa9f932];
              }
            }
            return _0x4049c8;
          };
          _0x55916b.toObject = function (_0x5bbee6, _0x57bee7) {
            _0x57bee7 || (_0x57bee7 = {});
            var _0x306430 = {};
            if ((_0x57bee7.arrays || _0x57bee7.defaults) && (_0x306430.CrackLevels = []), _0x5bbee6.CrackLevels && _0x5bbee6.CrackLevels.length) {
              _0x306430.CrackLevels = [];
              for (var _0x134dfc = 0; _0x134dfc < _0x5bbee6.CrackLevels.length; ++_0x134dfc) {
                _0x306430.CrackLevels[_0x134dfc] = _0x5bbee6.CrackLevels[_0x134dfc];
              }
            }
            return _0x306430;
          };
          _0x55916b.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x55916b.getTypeUrl = function (_0x173031) {
            undefined === _0x173031 && (_0x173031 = "type.googleapis.com");
            return _0x173031 + "/tct2Proto.StateInfo";
          };
          return _0x55916b;
        }(), _0x244ce2.GameInfoData = function () {
          function _0x2495de(_0x5b450c) {
            if (this.Mul = [], this.JPOdds = [], this.BlueOdds = [], this.CoinOdds = [], this.CrackLevels = [], this.BuyMul = [], _0x5b450c) {
              for (var _0x4913a0 = Object.keys(_0x5b450c), _0x38849c = 0; _0x38849c < _0x4913a0.length; ++_0x38849c) {
                null != _0x5b450c[_0x4913a0[_0x38849c]] && (this[_0x4913a0[_0x38849c]] = _0x5b450c[_0x4913a0[_0x38849c]]);
              }
            }
          }
          _0x2495de.prototype.ShowExtra = false;
          _0x2495de.prototype.Mul = _0x2999c5.emptyArray;
          _0x2495de.prototype.JPOdds = _0x2999c5.emptyArray;
          _0x2495de.prototype.BlueOdds = _0x2999c5.emptyArray;
          _0x2495de.prototype.CoinOdds = _0x2999c5.emptyArray;
          _0x2495de.prototype.CrackLevels = _0x2999c5.emptyArray;
          _0x2495de.prototype.MaxBet = 0;
          _0x2495de.prototype.BuyMul = _0x2999c5.emptyArray;
          _0x2495de.create = function (_0x2b225a) {
            return new _0x2495de(_0x2b225a);
          };
          _0x2495de.encode = function (_0x367e97, _0x42e0f9) {
            if (_0x42e0f9 || (_0x42e0f9 = _0x579612.create()), null != _0x367e97.ShowExtra && Object.hasOwnProperty.call(_0x367e97, "ShowExtra") && _0x42e0f9.uint32(8).bool(_0x367e97.ShowExtra), null != _0x367e97.Mul && _0x367e97.Mul.length) {
              _0x42e0f9.uint32(18).fork();
              for (var _0x19e5b4 = 0; _0x19e5b4 < _0x367e97.Mul.length; ++_0x19e5b4) {
                _0x42e0f9.double(_0x367e97.Mul[_0x19e5b4]);
              }
              _0x42e0f9.ldelim();
            }
            if (null != _0x367e97.JPOdds && _0x367e97.JPOdds.length) {
              for (_0x42e0f9.uint32(26).fork(), _0x19e5b4 = 0; _0x19e5b4 < _0x367e97.JPOdds.length; ++_0x19e5b4) {
                _0x42e0f9.int32(_0x367e97.JPOdds[_0x19e5b4]);
              }
              _0x42e0f9.ldelim();
            }
            if (null != _0x367e97.BlueOdds && _0x367e97.BlueOdds.length) {
              for (_0x19e5b4 = 0; _0x19e5b4 < _0x367e97.BlueOdds.length; ++_0x19e5b4) {
                _0x3965e0.tct2Proto.Column.encode(_0x367e97.BlueOdds[_0x19e5b4], _0x42e0f9.uint32(34).fork()).ldelim();
              }
            }
            if (null != _0x367e97.CoinOdds && _0x367e97.CoinOdds.length) {
              for (_0x19e5b4 = 0; _0x19e5b4 < _0x367e97.CoinOdds.length; ++_0x19e5b4) {
                _0x3965e0.tct2Proto.Column.encode(_0x367e97.CoinOdds[_0x19e5b4], _0x42e0f9.uint32(42).fork()).ldelim();
              }
            }
            if (null != _0x367e97.CrackLevels && _0x367e97.CrackLevels.length) {
              for (_0x42e0f9.uint32(50).fork(), _0x19e5b4 = 0; _0x19e5b4 < _0x367e97.CrackLevels.length; ++_0x19e5b4) {
                _0x42e0f9.int32(_0x367e97.CrackLevels[_0x19e5b4]);
              }
              _0x42e0f9.ldelim();
            }
            if (null != _0x367e97.MaxBet && Object.hasOwnProperty.call(_0x367e97, "MaxBet") && _0x42e0f9.uint32(57).double(_0x367e97.MaxBet), null != _0x367e97.BuyMul && _0x367e97.BuyMul.length) {
              for (_0x42e0f9.uint32(66).fork(), _0x19e5b4 = 0; _0x19e5b4 < _0x367e97.BuyMul.length; ++_0x19e5b4) {
                _0x42e0f9.double(_0x367e97.BuyMul[_0x19e5b4]);
              }
              _0x42e0f9.ldelim();
            }
            return _0x42e0f9;
          };
          _0x2495de.encodeDelimited = function (_0x46ee8a, _0x1f5656) {
            return this.encode(_0x46ee8a, _0x1f5656).ldelim();
          };
          _0x2495de.decode = function (_0x9c62ed, _0x239040) {
            _0x9c62ed instanceof _0x3f4e9d || (_0x9c62ed = _0x3f4e9d.create(_0x9c62ed));
            for (var _0x1a9185 = undefined === _0x239040 ? _0x9c62ed.len : _0x9c62ed.pos + _0x239040, _0x3a1731 = new _0x3965e0.tct2Proto.GameInfoData(); _0x9c62ed.pos < _0x1a9185;) {
              var _0x322b34 = _0x9c62ed.uint32();
              switch (_0x322b34 >>> 3) {
                case 1:
                  _0x3a1731.ShowExtra = _0x9c62ed.bool();
                  break;
                case 2:
                  if (_0x3a1731.Mul && _0x3a1731.Mul.length || (_0x3a1731.Mul = []), 2 == (7 & _0x322b34)) {
                    for (var _0x19f620 = _0x9c62ed.uint32() + _0x9c62ed.pos; _0x9c62ed.pos < _0x19f620;) {
                      _0x3a1731.Mul.push(_0x9c62ed.double());
                    }
                  } else {
                    _0x3a1731.Mul.push(_0x9c62ed.double());
                  }
                  break;
                case 3:
                  if (_0x3a1731.JPOdds && _0x3a1731.JPOdds.length || (_0x3a1731.JPOdds = []), 2 == (7 & _0x322b34)) {
                    for (_0x19f620 = _0x9c62ed.uint32() + _0x9c62ed.pos; _0x9c62ed.pos < _0x19f620;) {
                      _0x3a1731.JPOdds.push(_0x9c62ed.int32());
                    }
                  } else {
                    _0x3a1731.JPOdds.push(_0x9c62ed.int32());
                  }
                  break;
                case 4:
                  _0x3a1731.BlueOdds && _0x3a1731.BlueOdds.length || (_0x3a1731.BlueOdds = []);
                  _0x3a1731.BlueOdds.push(_0x3965e0.tct2Proto.Column.decode(_0x9c62ed, _0x9c62ed.uint32()));
                  break;
                case 5:
                  _0x3a1731.CoinOdds && _0x3a1731.CoinOdds.length || (_0x3a1731.CoinOdds = []);
                  _0x3a1731.CoinOdds.push(_0x3965e0.tct2Proto.Column.decode(_0x9c62ed, _0x9c62ed.uint32()));
                  break;
                case 6:
                  if (_0x3a1731.CrackLevels && _0x3a1731.CrackLevels.length || (_0x3a1731.CrackLevels = []), 2 == (7 & _0x322b34)) {
                    for (_0x19f620 = _0x9c62ed.uint32() + _0x9c62ed.pos; _0x9c62ed.pos < _0x19f620;) {
                      _0x3a1731.CrackLevels.push(_0x9c62ed.int32());
                    }
                  } else {
                    _0x3a1731.CrackLevels.push(_0x9c62ed.int32());
                  }
                  break;
                case 7:
                  _0x3a1731.MaxBet = _0x9c62ed.double();
                  break;
                case 8:
                  if (_0x3a1731.BuyMul && _0x3a1731.BuyMul.length || (_0x3a1731.BuyMul = []), 2 == (7 & _0x322b34)) {
                    for (_0x19f620 = _0x9c62ed.uint32() + _0x9c62ed.pos; _0x9c62ed.pos < _0x19f620;) {
                      _0x3a1731.BuyMul.push(_0x9c62ed.double());
                    }
                  } else {
                    _0x3a1731.BuyMul.push(_0x9c62ed.double());
                  }
                  break;
                default:
                  _0x9c62ed.skipType(7 & _0x322b34);
              }
            }
            return _0x3a1731;
          };
          _0x2495de.decodeDelimited = function (_0x11e9b2) {
            _0x11e9b2 instanceof _0x3f4e9d || (_0x11e9b2 = new _0x3f4e9d(_0x11e9b2));
            return this.decode(_0x11e9b2, _0x11e9b2.uint32());
          };
          _0x2495de.verify = function (_0xa1b11e) {
            if ("object" != typeof _0xa1b11e || null === _0xa1b11e) {
              return "object expected";
            }
            if (null != _0xa1b11e.ShowExtra && _0xa1b11e.hasOwnProperty("ShowExtra") && "boolean" != typeof _0xa1b11e.ShowExtra) {
              return "ShowExtra: boolean expected";
            }
            if (null != _0xa1b11e.Mul && _0xa1b11e.hasOwnProperty("Mul")) {
              if (!Array.isArray(_0xa1b11e.Mul)) {
                return "Mul: array expected";
              }
              for (var _0x2487a5 = 0; _0x2487a5 < _0xa1b11e.Mul.length; ++_0x2487a5) {
                if ("number" != typeof _0xa1b11e.Mul[_0x2487a5]) {
                  return "Mul: number[] expected";
                }
              }
            }
            if (null != _0xa1b11e.JPOdds && _0xa1b11e.hasOwnProperty("JPOdds")) {
              if (!Array.isArray(_0xa1b11e.JPOdds)) {
                return "JPOdds: array expected";
              }
              for (_0x2487a5 = 0; _0x2487a5 < _0xa1b11e.JPOdds.length; ++_0x2487a5) {
                if (!_0x2999c5.isInteger(_0xa1b11e.JPOdds[_0x2487a5])) {
                  return "JPOdds: integer[] expected";
                }
              }
            }
            if (null != _0xa1b11e.BlueOdds && _0xa1b11e.hasOwnProperty("BlueOdds")) {
              if (!Array.isArray(_0xa1b11e.BlueOdds)) {
                return "BlueOdds: array expected";
              }
              for (_0x2487a5 = 0; _0x2487a5 < _0xa1b11e.BlueOdds.length; ++_0x2487a5) {
                if (_0x1ef48e = _0x3965e0.tct2Proto.Column.verify(_0xa1b11e.BlueOdds[_0x2487a5])) {
                  return "BlueOdds." + _0x1ef48e;
                }
              }
            }
            if (null != _0xa1b11e.CoinOdds && _0xa1b11e.hasOwnProperty("CoinOdds")) {
              if (!Array.isArray(_0xa1b11e.CoinOdds)) {
                return "CoinOdds: array expected";
              }
              for (_0x2487a5 = 0; _0x2487a5 < _0xa1b11e.CoinOdds.length; ++_0x2487a5) {
                var _0x1ef48e;
                if (_0x1ef48e = _0x3965e0.tct2Proto.Column.verify(_0xa1b11e.CoinOdds[_0x2487a5])) {
                  return "CoinOdds." + _0x1ef48e;
                }
              }
            }
            if (null != _0xa1b11e.CrackLevels && _0xa1b11e.hasOwnProperty("CrackLevels")) {
              if (!Array.isArray(_0xa1b11e.CrackLevels)) {
                return "CrackLevels: array expected";
              }
              for (_0x2487a5 = 0; _0x2487a5 < _0xa1b11e.CrackLevels.length; ++_0x2487a5) {
                if (!_0x2999c5.isInteger(_0xa1b11e.CrackLevels[_0x2487a5])) {
                  return "CrackLevels: integer[] expected";
                }
              }
            }
            if (null != _0xa1b11e.MaxBet && _0xa1b11e.hasOwnProperty("MaxBet") && "number" != typeof _0xa1b11e.MaxBet) {
              return "MaxBet: number expected";
            }
            if (null != _0xa1b11e.BuyMul && _0xa1b11e.hasOwnProperty("BuyMul")) {
              if (!Array.isArray(_0xa1b11e.BuyMul)) {
                return "BuyMul: array expected";
              }
              for (_0x2487a5 = 0; _0x2487a5 < _0xa1b11e.BuyMul.length; ++_0x2487a5) {
                if ("number" != typeof _0xa1b11e.BuyMul[_0x2487a5]) {
                  return "BuyMul: number[] expected";
                }
              }
            }
            return null;
          };
          _0x2495de.fromObject = function (_0x1abdfb) {
            if (_0x1abdfb instanceof _0x3965e0.tct2Proto.GameInfoData) {
              return _0x1abdfb;
            }
            var _0x4ae4a1 = new _0x3965e0.tct2Proto.GameInfoData();
            if (null != _0x1abdfb.ShowExtra && (_0x4ae4a1.ShowExtra = Boolean(_0x1abdfb.ShowExtra)), _0x1abdfb.Mul) {
              if (!Array.isArray(_0x1abdfb.Mul)) {
                throw TypeError(".tct2Proto.GameInfoData.Mul: array expected");
              }
              _0x4ae4a1.Mul = [];
              for (var _0x22d731 = 0; _0x22d731 < _0x1abdfb.Mul.length; ++_0x22d731) {
                _0x4ae4a1.Mul[_0x22d731] = Number(_0x1abdfb.Mul[_0x22d731]);
              }
            }
            if (_0x1abdfb.JPOdds) {
              if (!Array.isArray(_0x1abdfb.JPOdds)) {
                throw TypeError(".tct2Proto.GameInfoData.JPOdds: array expected");
              }
              for (_0x4ae4a1.JPOdds = [], _0x22d731 = 0; _0x22d731 < _0x1abdfb.JPOdds.length; ++_0x22d731) {
                _0x4ae4a1.JPOdds[_0x22d731] = 0 | _0x1abdfb.JPOdds[_0x22d731];
              }
            }
            if (_0x1abdfb.BlueOdds) {
              if (!Array.isArray(_0x1abdfb.BlueOdds)) {
                throw TypeError(".tct2Proto.GameInfoData.BlueOdds: array expected");
              }
              for (_0x4ae4a1.BlueOdds = [], _0x22d731 = 0; _0x22d731 < _0x1abdfb.BlueOdds.length; ++_0x22d731) {
                if ("object" != typeof _0x1abdfb.BlueOdds[_0x22d731]) {
                  throw TypeError(".tct2Proto.GameInfoData.BlueOdds: object expected");
                }
                _0x4ae4a1.BlueOdds[_0x22d731] = _0x3965e0.tct2Proto.Column.fromObject(_0x1abdfb.BlueOdds[_0x22d731]);
              }
            }
            if (_0x1abdfb.CoinOdds) {
              if (!Array.isArray(_0x1abdfb.CoinOdds)) {
                throw TypeError(".tct2Proto.GameInfoData.CoinOdds: array expected");
              }
              for (_0x4ae4a1.CoinOdds = [], _0x22d731 = 0; _0x22d731 < _0x1abdfb.CoinOdds.length; ++_0x22d731) {
                if ("object" != typeof _0x1abdfb.CoinOdds[_0x22d731]) {
                  throw TypeError(".tct2Proto.GameInfoData.CoinOdds: object expected");
                }
                _0x4ae4a1.CoinOdds[_0x22d731] = _0x3965e0.tct2Proto.Column.fromObject(_0x1abdfb.CoinOdds[_0x22d731]);
              }
            }
            if (_0x1abdfb.CrackLevels) {
              if (!Array.isArray(_0x1abdfb.CrackLevels)) {
                throw TypeError(".tct2Proto.GameInfoData.CrackLevels: array expected");
              }
              for (_0x4ae4a1.CrackLevels = [], _0x22d731 = 0; _0x22d731 < _0x1abdfb.CrackLevels.length; ++_0x22d731) {
                _0x4ae4a1.CrackLevels[_0x22d731] = 0 | _0x1abdfb.CrackLevels[_0x22d731];
              }
            }
            if (null != _0x1abdfb.MaxBet && (_0x4ae4a1.MaxBet = Number(_0x1abdfb.MaxBet)), _0x1abdfb.BuyMul) {
              if (!Array.isArray(_0x1abdfb.BuyMul)) {
                throw TypeError(".tct2Proto.GameInfoData.BuyMul: array expected");
              }
              for (_0x4ae4a1.BuyMul = [], _0x22d731 = 0; _0x22d731 < _0x1abdfb.BuyMul.length; ++_0x22d731) {
                _0x4ae4a1.BuyMul[_0x22d731] = Number(_0x1abdfb.BuyMul[_0x22d731]);
              }
            }
            return _0x4ae4a1;
          };
          _0x2495de.toObject = function (_0x28427c, _0x2dfd19) {
            _0x2dfd19 || (_0x2dfd19 = {});
            var _0x53cb82 = {};
            if ((_0x2dfd19.arrays || _0x2dfd19.defaults) && (_0x53cb82.Mul = [], _0x53cb82.JPOdds = [], _0x53cb82.BlueOdds = [], _0x53cb82.CoinOdds = [], _0x53cb82.CrackLevels = [], _0x53cb82.BuyMul = []), _0x2dfd19.defaults && (_0x53cb82.ShowExtra = false, _0x53cb82.MaxBet = 0), null != _0x28427c.ShowExtra && _0x28427c.hasOwnProperty("ShowExtra") && (_0x53cb82.ShowExtra = _0x28427c.ShowExtra), _0x28427c.Mul && _0x28427c.Mul.length) {
              _0x53cb82.Mul = [];
              for (var _0x509a54 = 0; _0x509a54 < _0x28427c.Mul.length; ++_0x509a54) {
                _0x53cb82.Mul[_0x509a54] = _0x2dfd19.json && !isFinite(_0x28427c.Mul[_0x509a54]) ? String(_0x28427c.Mul[_0x509a54]) : _0x28427c.Mul[_0x509a54];
              }
            }
            if (_0x28427c.JPOdds && _0x28427c.JPOdds.length) {
              for (_0x53cb82.JPOdds = [], _0x509a54 = 0; _0x509a54 < _0x28427c.JPOdds.length; ++_0x509a54) {
                _0x53cb82.JPOdds[_0x509a54] = _0x28427c.JPOdds[_0x509a54];
              }
            }
            if (_0x28427c.BlueOdds && _0x28427c.BlueOdds.length) {
              for (_0x53cb82.BlueOdds = [], _0x509a54 = 0; _0x509a54 < _0x28427c.BlueOdds.length; ++_0x509a54) {
                _0x53cb82.BlueOdds[_0x509a54] = _0x3965e0.tct2Proto.Column.toObject(_0x28427c.BlueOdds[_0x509a54], _0x2dfd19);
              }
            }
            if (_0x28427c.CoinOdds && _0x28427c.CoinOdds.length) {
              for (_0x53cb82.CoinOdds = [], _0x509a54 = 0; _0x509a54 < _0x28427c.CoinOdds.length; ++_0x509a54) {
                _0x53cb82.CoinOdds[_0x509a54] = _0x3965e0.tct2Proto.Column.toObject(_0x28427c.CoinOdds[_0x509a54], _0x2dfd19);
              }
            }
            if (_0x28427c.CrackLevels && _0x28427c.CrackLevels.length) {
              for (_0x53cb82.CrackLevels = [], _0x509a54 = 0; _0x509a54 < _0x28427c.CrackLevels.length; ++_0x509a54) {
                _0x53cb82.CrackLevels[_0x509a54] = _0x28427c.CrackLevels[_0x509a54];
              }
            }
            if (null != _0x28427c.MaxBet && _0x28427c.hasOwnProperty("MaxBet") && (_0x53cb82.MaxBet = _0x2dfd19.json && !isFinite(_0x28427c.MaxBet) ? String(_0x28427c.MaxBet) : _0x28427c.MaxBet), _0x28427c.BuyMul && _0x28427c.BuyMul.length) {
              for (_0x53cb82.BuyMul = [], _0x509a54 = 0; _0x509a54 < _0x28427c.BuyMul.length; ++_0x509a54) {
                _0x53cb82.BuyMul[_0x509a54] = _0x2dfd19.json && !isFinite(_0x28427c.BuyMul[_0x509a54]) ? String(_0x28427c.BuyMul[_0x509a54]) : _0x28427c.BuyMul[_0x509a54];
              }
            }
            return _0x53cb82;
          };
          _0x2495de.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x2495de.getTypeUrl = function (_0x15d2cc) {
            undefined === _0x15d2cc && (_0x15d2cc = "type.googleapis.com");
            return _0x15d2cc + "/tct2Proto.GameInfoData";
          };
          return _0x2495de;
        }(), _0x244ce2.BuyReq = function () {
          function _0x2d8aa9(_0x475af0) {
            if (_0x475af0) {
              for (var _0x14d441 = Object.keys(_0x475af0), _0x4aac86 = 0; _0x4aac86 < _0x14d441.length; ++_0x4aac86) {
                null != _0x475af0[_0x14d441[_0x4aac86]] && (this[_0x14d441[_0x4aac86]] = _0x475af0[_0x14d441[_0x4aac86]]);
              }
            }
          }
          _0x2d8aa9.prototype.BaseBet = 0;
          _0x2d8aa9.prototype.BuyType = 0;
          _0x2d8aa9.create = function (_0xa746ab) {
            return new _0x2d8aa9(_0xa746ab);
          };
          _0x2d8aa9.encode = function (_0x2f0581, _0x52e7fa) {
            _0x52e7fa || (_0x52e7fa = _0x579612.create());
            null != _0x2f0581.BaseBet && Object.hasOwnProperty.call(_0x2f0581, "BaseBet") && _0x52e7fa.uint32(9).double(_0x2f0581.BaseBet);
            null != _0x2f0581.BuyType && Object.hasOwnProperty.call(_0x2f0581, "BuyType") && _0x52e7fa.uint32(16).int32(_0x2f0581.BuyType);
            return _0x52e7fa;
          };
          _0x2d8aa9.encodeDelimited = function (_0x2ab36c, _0xa2d57) {
            return this.encode(_0x2ab36c, _0xa2d57).ldelim();
          };
          _0x2d8aa9.decode = function (_0x8dffdb, _0x1d7790) {
            _0x8dffdb instanceof _0x3f4e9d || (_0x8dffdb = _0x3f4e9d.create(_0x8dffdb));
            for (var _0x5f1782 = undefined === _0x1d7790 ? _0x8dffdb.len : _0x8dffdb.pos + _0x1d7790, _0x24789a = new _0x3965e0.tct2Proto.BuyReq(); _0x8dffdb.pos < _0x5f1782;) {
              var _0x119052 = _0x8dffdb.uint32();
              switch (_0x119052 >>> 3) {
                case 1:
                  _0x24789a.BaseBet = _0x8dffdb.double();
                  break;
                case 2:
                  _0x24789a.BuyType = _0x8dffdb.int32();
                  break;
                default:
                  _0x8dffdb.skipType(7 & _0x119052);
              }
            }
            return _0x24789a;
          };
          _0x2d8aa9.decodeDelimited = function (_0x1f5ac) {
            _0x1f5ac instanceof _0x3f4e9d || (_0x1f5ac = new _0x3f4e9d(_0x1f5ac));
            return this.decode(_0x1f5ac, _0x1f5ac.uint32());
          };
          _0x2d8aa9.verify = function (_0x332024) {
            return "object" != typeof _0x332024 || null === _0x332024 ? "object expected" : null != _0x332024.BaseBet && _0x332024.hasOwnProperty("BaseBet") && "number" != typeof _0x332024.BaseBet ? "BaseBet: number expected" : null != _0x332024.BuyType && _0x332024.hasOwnProperty("BuyType") && !_0x2999c5.isInteger(_0x332024.BuyType) ? "BuyType: integer expected" : null;
          };
          _0x2d8aa9.fromObject = function (_0xc762bb) {
            if (_0xc762bb instanceof _0x3965e0.tct2Proto.BuyReq) {
              return _0xc762bb;
            }
            var _0x2391f3 = new _0x3965e0.tct2Proto.BuyReq();
            null != _0xc762bb.BaseBet && (_0x2391f3.BaseBet = Number(_0xc762bb.BaseBet));
            null != _0xc762bb.BuyType && (_0x2391f3.BuyType = 0 | _0xc762bb.BuyType);
            return _0x2391f3;
          };
          _0x2d8aa9.toObject = function (_0x359c1e, _0x1dc3a6) {
            _0x1dc3a6 || (_0x1dc3a6 = {});
            var _0x59b8ca = {};
            _0x1dc3a6.defaults && (_0x59b8ca.BaseBet = 0, _0x59b8ca.BuyType = 0);
            null != _0x359c1e.BaseBet && _0x359c1e.hasOwnProperty("BaseBet") && (_0x59b8ca.BaseBet = _0x1dc3a6.json && !isFinite(_0x359c1e.BaseBet) ? String(_0x359c1e.BaseBet) : _0x359c1e.BaseBet);
            null != _0x359c1e.BuyType && _0x359c1e.hasOwnProperty("BuyType") && (_0x59b8ca.BuyType = _0x359c1e.BuyType);
            return _0x59b8ca;
          };
          _0x2d8aa9.prototype.toJSON = function () {
            return this.constructor.toObject(this, _0x4e8aa0.util.toJSONOptions);
          };
          _0x2d8aa9.getTypeUrl = function (_0x1f7541) {
            undefined === _0x1f7541 && (_0x1f7541 = "type.googleapis.com");
            return _0x1f7541 + "/tct2Proto.BuyReq";
          };
          return _0x2d8aa9;
        }(), _0x244ce2);
        _0x2c4923.exports = _0x3965e0;
        _0x2c4923.exports;
      }, function () {
        return {
          "protobufjs/minimal": _0x157579
        };
      });
      _0x2c3fd6.require(_0x473ce0);
    }
  };
});
(function (_0x12b6a7) {
  _0x12b6a7("virtual:///prerequisite-imports/game", "chunks:///game.js");
})(function (_0x180e67, _0x355e1e) {
  System.register(_0x180e67, [_0x355e1e], function (_0x5a80ad, _0x41ffdb) {
    return {
      setters: [function (_0x1440e5) {
        var _0x195acf = {};
        for (var _0x6e7272 in _0x1440e5) {
          if (_0x6e7272 !== "default" && _0x6e7272 !== "__esModule") {
            _0x195acf[_0x6e7272] = _0x1440e5[_0x6e7272];
          }
        }
        _0x5a80ad(_0x195acf);
      }],
      execute: function () {}
    };
  });
});