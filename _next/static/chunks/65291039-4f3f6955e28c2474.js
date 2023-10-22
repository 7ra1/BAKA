"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1111],
  {
    4201: function (e, t, s) {
      s.d(t, {
        Ue: function () {
          return w;
        },
      });
      var r = s(98396),
        n = s(14924),
        a = s(20414),
        l = s(64063),
        i = s(25915),
        o = s(27055),
        u = s(81478),
        c = s(16313),
        h = s(80311),
        f = s(67709);
      function d(e, t, s, r) {
        Object.defineProperty(e, t, {
          get: s,
          set: r,
          enumerable: !0,
          configurable: !0,
        });
      }
      function m(e) {
        return e && e.__esModule ? e.default : e;
      }
      var p = {};
      d(p, "logErrors", () => g),
        d(p, "registerFormat", () => b),
        d(p, "create", () => w),
        d(p, "defaultLanguage", () => v),
        d(p, "setDefaultLanguage", () => _);
      let g = !1,
        y = [];
      function b(e) {
        y.push(e);
      }
      function w(e, t) {
        for (let s = 0; s < y.length; s++) {
          let n = y[s];
          if (n.probe(e)) {
            let s = new n(new (0, r.fT)(e));
            return t ? s.getFont(t) : s;
          }
        }
        throw new Error("Unknown font format");
      }
      let v = "en";
      function _(e = "en") {
        v = e;
      }
      function L(e, t, s) {
        if (s.get) {
          let e = s.get;
          s.get = function () {
            let s = e.call(this);
            return Object.defineProperty(this, t, { value: s }), s;
          };
        } else if ("function" === typeof s.value) {
          let e = s.value;
          return {
            get() {
              let s = new Map();
              function r(...t) {
                let r = t.length > 0 ? t[0] : "value";
                if (s.has(r)) return s.get(r);
                let n = e.apply(this, t);
                return s.set(r, n), n;
              }
              return Object.defineProperty(this, t, { value: r }), r;
            },
          };
        }
      }
      let C = new r.AU({
          firstCode: r.mL,
          entryCount: r.mL,
          idDelta: r.Af,
          idRangeOffset: r.mL,
        }),
        x = new r.AU({ startCharCode: r.U7, endCharCode: r.U7, glyphID: r.U7 }),
        A = new r.AU({ startUnicodeValue: r.Un, additionalCount: r.w_ }),
        k = new r.AU({ unicodeValue: r.Un, glyphID: r.mL }),
        S = new r.mJ(A, r.U7),
        I = new r.mJ(k, r.U7),
        P = new r.AU({
          varSelector: r.Un,
          defaultUVS: new r.$J(r.U7, S, { type: "parent" }),
          nonDefaultUVS: new r.$J(r.U7, I, { type: "parent" }),
        }),
        U = new r.bS(r.mL, {
          0: { length: r.mL, language: r.mL, codeMap: new r.pW(r.w_, 256) },
          2: {
            length: r.mL,
            language: r.mL,
            subHeaderKeys: new r.mJ(r.mL, 256),
            subHeaderCount: (e) => Math.max.apply(Math, e.subHeaderKeys),
            subHeaders: new r.pW(C, "subHeaderCount"),
            glyphIndexArray: new r.pW(r.mL, "subHeaderCount"),
          },
          4: {
            length: r.mL,
            language: r.mL,
            segCountX2: r.mL,
            segCount: (e) => e.segCountX2 >> 1,
            searchRange: r.mL,
            entrySelector: r.mL,
            rangeShift: r.mL,
            endCode: new r.pW(r.mL, "segCount"),
            reservedPad: new r.kV(r.mL),
            startCode: new r.pW(r.mL, "segCount"),
            idDelta: new r.pW(r.Af, "segCount"),
            idRangeOffset: new r.pW(r.mL, "segCount"),
            glyphIndexArray: new r.pW(
              r.mL,
              (e) => (e.length - e._currentOffset) / 2
            ),
          },
          6: {
            length: r.mL,
            language: r.mL,
            firstCode: r.mL,
            entryCount: r.mL,
            glyphIndices: new r.pW(r.mL, "entryCount"),
          },
          8: {
            reserved: new r.kV(r.mL),
            length: r.U7,
            language: r.mL,
            is32: new r.pW(r.w_, 8192),
            nGroups: r.U7,
            groups: new r.pW(x, "nGroups"),
          },
          10: {
            reserved: new r.kV(r.mL),
            length: r.U7,
            language: r.U7,
            firstCode: r.U7,
            entryCount: r.U7,
            glyphIndices: new r.pW(r.mL, "numChars"),
          },
          12: {
            reserved: new r.kV(r.mL),
            length: r.U7,
            language: r.U7,
            nGroups: r.U7,
            groups: new r.pW(x, "nGroups"),
          },
          13: {
            reserved: new r.kV(r.mL),
            length: r.U7,
            language: r.U7,
            nGroups: r.U7,
            groups: new r.pW(x, "nGroups"),
          },
          14: {
            length: r.U7,
            numRecords: r.U7,
            varSelectors: new r.pW(P, "numRecords"),
          },
        }),
        J = new r.AU({
          platformID: r.mL,
          encodingID: r.mL,
          table: new r.$J(r.U7, U, { type: "parent", lazy: !0 }),
        });
      var T = new r.AU({
          version: r.mL,
          numSubtables: r.mL,
          tables: new r.mJ(J, "numSubtables"),
        }),
        O = new r.AU({
          version: r.LB,
          revision: r.LB,
          checkSumAdjustment: r.U7,
          magicNumber: r.U7,
          flags: r.mL,
          unitsPerEm: r.mL,
          created: new r.mJ(r.LB, 2),
          modified: new r.mJ(r.LB, 2),
          xMin: r.Af,
          yMin: r.Af,
          xMax: r.Af,
          yMax: r.Af,
          macStyle: new r.DL(r.mL, [
            "bold",
            "italic",
            "underline",
            "outline",
            "shadow",
            "condensed",
            "extended",
          ]),
          lowestRecPPEM: r.mL,
          fontDirectionHint: r.Af,
          indexToLocFormat: r.Af,
          glyphDataFormat: r.Af,
        }),
        F = new r.AU({
          version: r.LB,
          ascent: r.Af,
          descent: r.Af,
          lineGap: r.Af,
          advanceWidthMax: r.mL,
          minLeftSideBearing: r.Af,
          minRightSideBearing: r.Af,
          xMaxExtent: r.Af,
          caretSlopeRise: r.Af,
          caretSlopeRun: r.Af,
          caretOffset: r.Af,
          reserved: new r.kV(r.Af, 4),
          metricDataFormat: r.Af,
          numberOfMetrics: r.mL,
        });
      let D = new r.AU({ advance: r.mL, bearing: r.Af });
      var M = new r.AU({
          metrics: new r.pW(D, (e) => e.parent.hhea.numberOfMetrics),
          bearings: new r.pW(
            r.Af,
            (e) => e.parent.maxp.numGlyphs - e.parent.hhea.numberOfMetrics
          ),
        }),
        G = new r.AU({
          version: r.LB,
          numGlyphs: r.mL,
          maxPoints: r.mL,
          maxContours: r.mL,
          maxComponentPoints: r.mL,
          maxComponentContours: r.mL,
          maxZones: r.mL,
          maxTwilightPoints: r.mL,
          maxStorage: r.mL,
          maxFunctionDefs: r.mL,
          maxInstructionDefs: r.mL,
          maxStackElements: r.mL,
          maxSizeOfInstructions: r.mL,
          maxComponentElements: r.mL,
          maxComponentDepth: r.mL,
        });
      function E(e, t, s = 0) {
        return 1 === e && W[s] ? W[s] : N[e][t];
      }
      const B = new Set([
          "x-mac-roman",
          "x-mac-cyrillic",
          "iso-8859-6",
          "iso-8859-8",
        ]),
        V = {
          "x-mac-croatian":
            "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\u0160\u2122\xb4\xa8\u2260\u017d\xd8\u221e\xb1\u2264\u2265\u2206\xb5\u2202\u2211\u220f\u0161\u222b\xaa\xba\u03a9\u017e\xf8\xbf\xa1\xac\u221a\u0192\u2248\u0106\xab\u010c\u2026 \xc0\xc3\xd5\u0152\u0153\u0110\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\uf8ff\xa9\u2044\u20ac\u2039\u203a\xc6\xbb\u2013\xb7\u201a\u201e\u2030\xc2\u0107\xc1\u010d\xc8\xcd\xce\xcf\xcc\xd3\xd4\u0111\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u03c0\xcb\u02da\xb8\xca\xe6\u02c7",
          "x-mac-gaelic":
            "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u1e02\xb1\u2264\u2265\u1e03\u010a\u010b\u1e0a\u1e0b\u1e1e\u1e1f\u0120\u0121\u1e40\xe6\xf8\u1e41\u1e56\u1e57\u027c\u0192\u017f\u1e60\xab\xbb\u2026 \xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\u1e61\u1e9b\xff\u0178\u1e6a\u20ac\u2039\u203a\u0176\u0177\u1e6b\xb7\u1ef2\u1ef3\u204a\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\u2663\xd2\xda\xdb\xd9\u0131\xdd\xfd\u0174\u0175\u1e84\u1e85\u1e80\u1e81\u1e82\u1e83",
          "x-mac-greek":
            "\xc4\xb9\xb2\xc9\xb3\xd6\xdc\u0385\xe0\xe2\xe4\u0384\xa8\xe7\xe9\xe8\xea\xeb\xa3\u2122\xee\xef\u2022\xbd\u2030\xf4\xf6\xa6\u20ac\xf9\xfb\xfc\u2020\u0393\u0394\u0398\u039b\u039e\u03a0\xdf\xae\xa9\u03a3\u03aa\xa7\u2260\xb0\xb7\u0391\xb1\u2264\u2265\xa5\u0392\u0395\u0396\u0397\u0399\u039a\u039c\u03a6\u03ab\u03a8\u03a9\u03ac\u039d\xac\u039f\u03a1\u2248\u03a4\xab\xbb\u2026 \u03a5\u03a7\u0386\u0388\u0153\u2013\u2015\u201c\u201d\u2018\u2019\xf7\u0389\u038a\u038c\u038e\u03ad\u03ae\u03af\u03cc\u038f\u03cd\u03b1\u03b2\u03c8\u03b4\u03b5\u03c6\u03b3\u03b7\u03b9\u03be\u03ba\u03bb\u03bc\u03bd\u03bf\u03c0\u03ce\u03c1\u03c3\u03c4\u03b8\u03c9\u03c2\u03c7\u03c5\u03b6\u03ca\u03cb\u0390\u03b0\xad",
          "x-mac-icelandic":
            "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\xdd\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\xe6\xf8\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026 \xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u2044\u20ac\xd0\xf0\xde\xfe\xfd\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
          "x-mac-inuit":
            "\u1403\u1404\u1405\u1406\u140a\u140b\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144e\u144f\u1450\u1451\u1455\u1456\u1466\u146d\u146e\u146f\u1470\u1472\u1473\u1483\u148b\u148c\u148d\u148e\u1490\u1491\xb0\u14a1\u14a5\u14a6\u2022\xb6\u14a7\xae\xa9\u2122\u14a8\u14aa\u14ab\u14bb\u14c2\u14c3\u14c4\u14c5\u14c7\u14c8\u14d0\u14ef\u14f0\u14f1\u14f2\u14f4\u14f5\u1505\u14d5\u14d6\u14d7\u14d8\u14da\u14db\u14ea\u1528\u1529\u152a\u152b\u152d\u2026 \u152e\u153e\u1555\u1556\u1557\u2013\u2014\u201c\u201d\u2018\u2019\u1558\u1559\u155a\u155d\u1546\u1547\u1548\u1549\u154b\u154c\u1550\u157f\u1580\u1581\u1582\u1583\u1584\u1585\u158f\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15a0\u15a1\u15a2\u15a3\u15a4\u15a5\u15a6\u157c\u0141\u0142",
          "x-mac-ce":
            "\xc4\u0100\u0101\xc9\u0104\xd6\xdc\xe1\u0105\u010c\xe4\u010d\u0106\u0107\xe9\u0179\u017a\u010e\xed\u010f\u0112\u0113\u0116\xf3\u0117\xf4\xf6\xf5\xfa\u011a\u011b\xfc\u2020\xb0\u0118\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\u0119\xa8\u2260\u0123\u012e\u012f\u012a\u2264\u2265\u012b\u0136\u2202\u2211\u0142\u013b\u013c\u013d\u013e\u0139\u013a\u0145\u0146\u0143\xac\u221a\u0144\u0147\u2206\xab\xbb\u2026 \u0148\u0150\xd5\u0151\u014c\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\u014d\u0154\u0155\u0158\u2039\u203a\u0159\u0156\u0157\u0160\u201a\u201e\u0161\u015a\u015b\xc1\u0164\u0165\xcd\u017d\u017e\u016a\xd3\xd4\u016b\u016e\xda\u016f\u0170\u0171\u0172\u0173\xdd\xfd\u0137\u017b\u0141\u017c\u0122\u02c7",
          "x-mac-romanian":
            "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\u0102\u0218\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\u0103\u0219\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026 \xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u2044\u20ac\u2039\u203a\u021a\u021b\u2021\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\u0131\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
          "x-mac-turkish":
            "\xc4\xc5\xc7\xc9\xd1\xd6\xdc\xe1\xe0\xe2\xe4\xe3\xe5\xe7\xe9\xe8\xea\xeb\xed\xec\xee\xef\xf1\xf3\xf2\xf4\xf6\xf5\xfa\xf9\xfb\xfc\u2020\xb0\xa2\xa3\xa7\u2022\xb6\xdf\xae\xa9\u2122\xb4\xa8\u2260\xc6\xd8\u221e\xb1\u2264\u2265\xa5\xb5\u2202\u2211\u220f\u03c0\u222b\xaa\xba\u03a9\xe6\xf8\xbf\xa1\xac\u221a\u0192\u2248\u2206\xab\xbb\u2026 \xc0\xc3\xd5\u0152\u0153\u2013\u2014\u201c\u201d\u2018\u2019\xf7\u25ca\xff\u0178\u011e\u011f\u0130\u0131\u015e\u015f\u2021\xb7\u201a\u201e\u2030\xc2\xca\xc1\xcb\xc8\xcd\xce\xcf\xcc\xd3\xd4\uf8ff\xd2\xda\xdb\xd9\uf8a0\u02c6\u02dc\xaf\u02d8\u02d9\u02da\xb8\u02dd\u02db\u02c7",
        },
        z = new Map();
      function R(e) {
        let t = z.get(e);
        if (t) return t;
        let s = V[e];
        if (s) {
          let t = new Map();
          for (let e = 0; e < s.length; e++) t.set(s.charCodeAt(e), 128 + e);
          return z.set(e, t), t;
        }
        if (B.has(e)) {
          let t = new TextDecoder(e),
            s = new Uint8Array(128);
          for (let e = 0; e < 128; e++) s[e] = 128 + e;
          let r = new Map(),
            n = t.decode(s);
          for (let e = 0; e < 128; e++) r.set(n.charCodeAt(e), 128 + e);
          return z.set(e, r), r;
        }
      }
      const N = [
          ["utf16be", "utf16be", "utf16be", "utf16be", "utf16be", "utf16be"],
          [
            "x-mac-roman",
            "shift-jis",
            "big5",
            "euc-kr",
            "iso-8859-6",
            "iso-8859-8",
            "x-mac-greek",
            "x-mac-cyrillic",
            "x-mac-symbol",
            "x-mac-devanagari",
            "x-mac-gurmukhi",
            "x-mac-gujarati",
            "Oriya",
            "Bengali",
            "Tamil",
            "Telugu",
            "Kannada",
            "Malayalam",
            "Sinhalese",
            "Burmese",
            "Khmer",
            "iso-8859-11",
            "Laotian",
            "Georgian",
            "Armenian",
            "hz-gb-2312",
            "Tibetan",
            "Mongolian",
            "Geez",
            "x-mac-ce",
            "Vietnamese",
            "Sindhi",
          ],
          ["ascii"],
          [
            "symbol",
            "utf16be",
            "shift-jis",
            "gb18030",
            "big5",
            "x-cp20949",
            "johab",
            null,
            null,
            null,
            "utf16be",
          ],
        ],
        W = {
          15: "x-mac-icelandic",
          17: "x-mac-turkish",
          18: "x-mac-croatian",
          24: "x-mac-ce",
          25: "x-mac-ce",
          26: "x-mac-ce",
          27: "x-mac-ce",
          28: "x-mac-ce",
          30: "x-mac-icelandic",
          37: "x-mac-romanian",
          38: "x-mac-ce",
          39: "x-mac-ce",
          40: "x-mac-ce",
          143: "x-mac-inuit",
          146: "x-mac-gaelic",
        },
        X = [
          [],
          {
            0: "en",
            30: "fo",
            60: "ks",
            90: "rw",
            1: "fr",
            31: "fa",
            61: "ku",
            91: "rn",
            2: "de",
            32: "ru",
            62: "sd",
            92: "ny",
            3: "it",
            33: "zh",
            63: "bo",
            93: "mg",
            4: "nl",
            34: "nl-BE",
            64: "ne",
            94: "eo",
            5: "sv",
            35: "ga",
            65: "sa",
            128: "cy",
            6: "es",
            36: "sq",
            66: "mr",
            129: "eu",
            7: "da",
            37: "ro",
            67: "bn",
            130: "ca",
            8: "pt",
            38: "cz",
            68: "as",
            131: "la",
            9: "no",
            39: "sk",
            69: "gu",
            132: "qu",
            10: "he",
            40: "si",
            70: "pa",
            133: "gn",
            11: "ja",
            41: "yi",
            71: "or",
            134: "ay",
            12: "ar",
            42: "sr",
            72: "ml",
            135: "tt",
            13: "fi",
            43: "mk",
            73: "kn",
            136: "ug",
            14: "el",
            44: "bg",
            74: "ta",
            137: "dz",
            15: "is",
            45: "uk",
            75: "te",
            138: "jv",
            16: "mt",
            46: "be",
            76: "si",
            139: "su",
            17: "tr",
            47: "uz",
            77: "my",
            140: "gl",
            18: "hr",
            48: "kk",
            78: "km",
            141: "af",
            19: "zh-Hant",
            49: "az-Cyrl",
            79: "lo",
            142: "br",
            20: "ur",
            50: "az-Arab",
            80: "vi",
            143: "iu",
            21: "hi",
            51: "hy",
            81: "id",
            144: "gd",
            22: "th",
            52: "ka",
            82: "tl",
            145: "gv",
            23: "ko",
            53: "mo",
            83: "ms",
            146: "ga",
            24: "lt",
            54: "ky",
            84: "ms-Arab",
            147: "to",
            25: "pl",
            55: "tg",
            85: "am",
            148: "el-polyton",
            26: "hu",
            56: "tk",
            86: "ti",
            149: "kl",
            27: "es",
            57: "mn-CN",
            87: "om",
            150: "az",
            28: "lv",
            58: "mn",
            88: "so",
            151: "nn",
            29: "se",
            59: "ps",
            89: "sw",
          },
          [],
          {
            1078: "af",
            16393: "en-IN",
            1159: "rw",
            1074: "tn",
            1052: "sq",
            6153: "en-IE",
            1089: "sw",
            1115: "si",
            1156: "gsw",
            8201: "en-JM",
            1111: "kok",
            1051: "sk",
            1118: "am",
            17417: "en-MY",
            1042: "ko",
            1060: "sl",
            5121: "ar-DZ",
            5129: "en-NZ",
            1088: "ky",
            11274: "es-AR",
            15361: "ar-BH",
            13321: "en-PH",
            1108: "lo",
            16394: "es-BO",
            3073: "ar",
            18441: "en-SG",
            1062: "lv",
            13322: "es-CL",
            2049: "ar-IQ",
            7177: "en-ZA",
            1063: "lt",
            9226: "es-CO",
            11265: "ar-JO",
            11273: "en-TT",
            2094: "dsb",
            5130: "es-CR",
            13313: "ar-KW",
            2057: "en-GB",
            1134: "lb",
            7178: "es-DO",
            12289: "ar-LB",
            1033: "en",
            1071: "mk",
            12298: "es-EC",
            4097: "ar-LY",
            12297: "en-ZW",
            2110: "ms-BN",
            17418: "es-SV",
            6145: "ary",
            1061: "et",
            1086: "ms",
            4106: "es-GT",
            8193: "ar-OM",
            1080: "fo",
            1100: "ml",
            18442: "es-HN",
            16385: "ar-QA",
            1124: "fil",
            1082: "mt",
            2058: "es-MX",
            1025: "ar-SA",
            1035: "fi",
            1153: "mi",
            19466: "es-NI",
            10241: "ar-SY",
            2060: "fr-BE",
            1146: "arn",
            6154: "es-PA",
            7169: "aeb",
            3084: "fr-CA",
            1102: "mr",
            15370: "es-PY",
            14337: "ar-AE",
            1036: "fr",
            1148: "moh",
            10250: "es-PE",
            9217: "ar-YE",
            5132: "fr-LU",
            1104: "mn",
            20490: "es-PR",
            1067: "hy",
            6156: "fr-MC",
            2128: "mn-CN",
            3082: "es",
            1101: "as",
            4108: "fr-CH",
            1121: "ne",
            1034: "es",
            2092: "az-Cyrl",
            1122: "fy",
            1044: "nb",
            21514: "es-US",
            1068: "az",
            1110: "gl",
            2068: "nn",
            14346: "es-UY",
            1133: "ba",
            1079: "ka",
            1154: "oc",
            8202: "es-VE",
            1069: "eu",
            3079: "de-AT",
            1096: "or",
            2077: "sv-FI",
            1059: "be",
            1031: "de",
            1123: "ps",
            1053: "sv",
            2117: "bn",
            5127: "de-LI",
            1045: "pl",
            1114: "syr",
            1093: "bn-IN",
            4103: "de-LU",
            1046: "pt",
            1064: "tg",
            8218: "bs-Cyrl",
            2055: "de-CH",
            2070: "pt-PT",
            2143: "tzm",
            5146: "bs",
            1032: "el",
            1094: "pa",
            1097: "ta",
            1150: "br",
            1135: "kl",
            1131: "qu-BO",
            1092: "tt",
            1026: "bg",
            1095: "gu",
            2155: "qu-EC",
            1098: "te",
            1027: "ca",
            1128: "ha",
            3179: "qu",
            1054: "th",
            3076: "zh-HK",
            1037: "he",
            1048: "ro",
            1105: "bo",
            5124: "zh-MO",
            1081: "hi",
            1047: "rm",
            1055: "tr",
            2052: "zh",
            1038: "hu",
            1049: "ru",
            1090: "tk",
            4100: "zh-SG",
            1039: "is",
            9275: "smn",
            1152: "ug",
            1028: "zh-TW",
            1136: "ig",
            4155: "smj-NO",
            1058: "uk",
            1155: "co",
            1057: "id",
            5179: "smj",
            1070: "hsb",
            1050: "hr",
            1117: "iu",
            3131: "se-FI",
            1056: "ur",
            4122: "hr-BA",
            2141: "iu-Latn",
            1083: "se",
            2115: "uz-Cyrl",
            1029: "cs",
            2108: "ga",
            2107: "se-SE",
            1091: "uz",
            1030: "da",
            1076: "xh",
            8251: "sms",
            1066: "vi",
            1164: "prs",
            1077: "zu",
            6203: "sma-NO",
            1106: "cy",
            1125: "dv",
            1040: "it",
            7227: "sms",
            1160: "wo",
            2067: "nl-BE",
            2064: "it-CH",
            1103: "sa",
            1157: "sah",
            1043: "nl",
            1041: "ja",
            7194: "sr-Cyrl-BA",
            1144: "ii",
            3081: "en-AU",
            1099: "kn",
            3098: "sr",
            1130: "yo",
            10249: "en-BZ",
            1087: "kk",
            6170: "sr-Latn-BA",
            4105: "en-CA",
            1107: "km",
            2074: "sr-Latn",
            9225: "en-029",
            1158: "quc",
            1132: "nso",
          },
        ];
      let q = new r.AU({
          platformID: r.mL,
          encodingID: r.mL,
          languageID: r.mL,
          nameID: r.mL,
          length: r.mL,
          string: new r.$J(
            r.mL,
            new r.Ld("length", (e) =>
              E(e.platformID, e.encodingID, e.languageID)
            ),
            {
              type: "parent",
              relativeTo: (e) => e.parent.stringOffset,
              allowNull: !1,
            }
          ),
        }),
        H = new r.AU({
          length: r.mL,
          tag: new r.$J(r.mL, new r.Ld("length", "utf16be"), {
            type: "parent",
            relativeTo: (e) => e.stringOffset,
          }),
        });
      var j = new r.bS(r.mL, {
          0: { count: r.mL, stringOffset: r.mL, records: new r.mJ(q, "count") },
          1: {
            count: r.mL,
            stringOffset: r.mL,
            records: new r.mJ(q, "count"),
            langTagCount: r.mL,
            langTags: new r.mJ(H, "langTagCount"),
          },
        }),
        Y = j;
      const $ = [
        "copyright",
        "fontFamily",
        "fontSubfamily",
        "uniqueSubfamily",
        "fullName",
        "version",
        "postscriptName",
        "trademark",
        "manufacturer",
        "designer",
        "description",
        "vendorURL",
        "designerURL",
        "license",
        "licenseURL",
        null,
        "preferredFamily",
        "preferredSubfamily",
        "compatibleFull",
        "sampleText",
        "postscriptCIDFontName",
        "wwsFamilyName",
        "wwsSubfamilyName",
      ];
      (j.process = function (e) {
        var t = {};
        for (let s of this.records) {
          let e = X[s.platformID][s.languageID];
          null == e &&
            null != this.langTags &&
            s.languageID >= 32768 &&
            (e = this.langTags[s.languageID - 32768].tag),
            null == e && (e = s.platformID + "-" + s.languageID);
          let r = s.nameID >= 256 ? "fontFeatures" : $[s.nameID] || s.nameID;
          null == t[r] && (t[r] = {});
          let n = t[r];
          s.nameID >= 256 && (n = n[s.nameID] || (n[s.nameID] = {})),
            ("string" !== typeof s.string && "string" === typeof n[e]) ||
              (n[e] = s.string);
        }
        this.records = t;
      }),
        (j.preEncode = function () {
          if (Array.isArray(this.records)) return;
          this.version = 0;
          let e = [];
          for (let t in this.records) {
            let s = this.records[t];
            "fontFeatures" !== t &&
              (e.push({
                platformID: 3,
                encodingID: 1,
                languageID: 1033,
                nameID: $.indexOf(t),
                length: 2 * s.en.length,
                string: s.en,
              }),
              "postscriptName" === t &&
                e.push({
                  platformID: 1,
                  encodingID: 0,
                  languageID: 0,
                  nameID: $.indexOf(t),
                  length: s.en.length,
                  string: s.en,
                }));
          }
          (this.records = e),
            (this.count = e.length),
            (this.stringOffset = j.size(this, null, !1));
        });
      var Z = new r.bS(r.mL, {
        header: {
          xAvgCharWidth: r.Af,
          usWeightClass: r.mL,
          usWidthClass: r.mL,
          fsType: new r.DL(r.mL, [
            null,
            "noEmbedding",
            "viewOnly",
            "editable",
            null,
            null,
            null,
            null,
            "noSubsetting",
            "bitmapOnly",
          ]),
          ySubscriptXSize: r.Af,
          ySubscriptYSize: r.Af,
          ySubscriptXOffset: r.Af,
          ySubscriptYOffset: r.Af,
          ySuperscriptXSize: r.Af,
          ySuperscriptYSize: r.Af,
          ySuperscriptXOffset: r.Af,
          ySuperscriptYOffset: r.Af,
          yStrikeoutSize: r.Af,
          yStrikeoutPosition: r.Af,
          sFamilyClass: r.Af,
          panose: new r.mJ(r.w_, 10),
          ulCharRange: new r.mJ(r.U7, 4),
          vendorID: new r.Ld(4),
          fsSelection: new r.DL(r.mL, [
            "italic",
            "underscore",
            "negative",
            "outlined",
            "strikeout",
            "bold",
            "regular",
            "useTypoMetrics",
            "wws",
            "oblique",
          ]),
          usFirstCharIndex: r.mL,
          usLastCharIndex: r.mL,
        },
        0: {},
        1: {
          typoAscender: r.Af,
          typoDescender: r.Af,
          typoLineGap: r.Af,
          winAscent: r.mL,
          winDescent: r.mL,
          codePageRange: new r.mJ(r.U7, 2),
        },
        2: {
          typoAscender: r.Af,
          typoDescender: r.Af,
          typoLineGap: r.Af,
          winAscent: r.mL,
          winDescent: r.mL,
          codePageRange: new r.mJ(r.U7, 2),
          xHeight: r.Af,
          capHeight: r.Af,
          defaultChar: r.mL,
          breakChar: r.mL,
          maxContent: r.mL,
        },
        5: {
          typoAscender: r.Af,
          typoDescender: r.Af,
          typoLineGap: r.Af,
          winAscent: r.mL,
          winDescent: r.mL,
          codePageRange: new r.mJ(r.U7, 2),
          xHeight: r.Af,
          capHeight: r.Af,
          defaultChar: r.mL,
          breakChar: r.mL,
          maxContent: r.mL,
          usLowerOpticalPointSize: r.mL,
          usUpperOpticalPointSize: r.mL,
        },
      });
      let K = Z.versions;
      K[3] = K[4] = K[2];
      var Q = Z,
        ee = new r.bS(r.E2, {
          header: {
            italicAngle: r.E2,
            underlinePosition: r.Af,
            underlineThickness: r.Af,
            isFixedPitch: r.U7,
            minMemType42: r.U7,
            maxMemType42: r.U7,
            minMemType1: r.U7,
            maxMemType1: r.U7,
          },
          1: {},
          2: {
            numberOfGlyphs: r.mL,
            glyphNameIndex: new r.mJ(r.mL, "numberOfGlyphs"),
            names: new r.mJ(new r.Ld(r.w_)),
          },
          2.5: {
            numberOfGlyphs: r.mL,
            offsets: new r.mJ(r.w_, "numberOfGlyphs"),
          },
          3: {},
          4: { map: new r.mJ(r.U7, (e) => e.parent.maxp.numGlyphs) },
        }),
        te = new r.AU({ controlValues: new r.mJ(r.Af) }),
        se = new r.AU({ instructions: new r.mJ(r.w_) });
      let re = new r.bS("head.indexToLocFormat", {
        0: { offsets: new r.mJ(r.mL) },
        1: { offsets: new r.mJ(r.U7) },
      });
      (re.process = function () {
        if (0 === this.version && !this._processed) {
          for (let e = 0; e < this.offsets.length; e++) this.offsets[e] <<= 1;
          this._processed = !0;
        }
      }),
        (re.preEncode = function () {
          if (0 === this.version && !1 !== this._processed) {
            for (let e = 0; e < this.offsets.length; e++)
              this.offsets[e] >>>= 1;
            this._processed = !1;
          }
        });
      var ne = re,
        ae = new r.AU({ controlValueProgram: new r.mJ(r.w_) }),
        le = new r.mJ(new r.lW());
      class ie {
        getCFFVersion(e) {
          for (; e && !e.hdrSize; ) e = e.parent;
          return e ? e.version : -1;
        }
        decode(e, t) {
          let s =
            this.getCFFVersion(t) >= 2 ? e.readUInt32BE() : e.readUInt16BE();
          if (0 === s) return [];
          let n,
            a = e.readUInt8();
          if (1 === a) n = r.w_;
          else if (2 === a) n = r.mL;
          else if (3 === a) n = r.Un;
          else {
            if (4 !== a)
              throw new Error(`Bad offset size in CFFIndex: ${a} ${e.pos}`);
            n = r.U7;
          }
          let l = [],
            i = e.pos + (s + 1) * a - 1,
            o = n.decode(e);
          for (let r = 0; r < s; r++) {
            let s = n.decode(e);
            if (null != this.type) {
              let r = e.pos;
              (e.pos = i + o),
                (t.length = s - o),
                l.push(this.type.decode(e, t)),
                (e.pos = r);
            } else l.push({ offset: i + o, length: s - o });
            o = s;
          }
          return (e.pos = i + o), l;
        }
        size(e, t) {
          let s = 2;
          if (0 === e.length) return s;
          let n,
            a = this.type || new r.lW(),
            l = 1;
          for (let r = 0; r < e.length; r++) {
            let s = e[r];
            l += a.size(s, t);
          }
          if (l <= 255) n = r.w_;
          else if (l <= 65535) n = r.mL;
          else if (l <= 16777215) n = r.Un;
          else {
            if (!(l <= 4294967295)) throw new Error("Bad offset in CFFIndex");
            n = r.U7;
          }
          return (s += 1 + n.size() * (e.length + 1)), (s += l - 1), s;
        }
        encode(e, t, s) {
          if ((e.writeUInt16BE(t.length), 0 === t.length)) return;
          let n,
            a = this.type || new r.lW(),
            l = [],
            i = 1;
          for (let r of t) {
            let e = a.size(r, s);
            l.push(e), (i += e);
          }
          if (i <= 255) n = r.w_;
          else if (i <= 65535) n = r.mL;
          else if (i <= 16777215) n = r.Un;
          else {
            if (!(i <= 4294967295)) throw new Error("Bad offset in CFFIndex");
            n = r.U7;
          }
          e.writeUInt8(n.size()), (i = 1), n.encode(e, i);
          for (let r of l) (i += r), n.encode(e, i);
          for (let r of t) a.encode(e, r, s);
        }
        constructor(e) {
          this.type = e;
        }
      }
      const oe = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          ".",
          "E",
          "E-",
          null,
          "-",
        ],
        ue = { ".": 10, E: 11, "E-": 12, "-": 14 };
      class ce {
        static decode(e, t) {
          if (32 <= t && t <= 246) return t - 139;
          if (247 <= t && t <= 250)
            return 256 * (t - 247) + e.readUInt8() + 108;
          if (251 <= t && t <= 254)
            return 256 * -(t - 251) - e.readUInt8() - 108;
          if (28 === t) return e.readInt16BE();
          if (29 === t) return e.readInt32BE();
          if (30 === t) {
            let t = "";
            for (;;) {
              let s = e.readUInt8(),
                r = s >> 4;
              if (15 === r) break;
              t += oe[r];
              let n = 15 & s;
              if (15 === n) break;
              t += oe[n];
            }
            return parseFloat(t);
          }
          return null;
        }
        static size(e) {
          if ((e.forceLarge && (e = 32768), (0 | e) !== e)) {
            let t = "" + e;
            return 1 + Math.ceil((t.length + 1) / 2);
          }
          return -107 <= e && e <= 107
            ? 1
            : (108 <= e && e <= 1131) || (-1131 <= e && e <= -108)
            ? 2
            : -32768 <= e && e <= 32767
            ? 3
            : 5;
        }
        static encode(e, t) {
          let s = Number(t);
          if (t.forceLarge) return e.writeUInt8(29), e.writeInt32BE(s);
          if ((0 | s) === s)
            return -107 <= s && s <= 107
              ? e.writeUInt8(s + 139)
              : 108 <= s && s <= 1131
              ? ((s -= 108),
                e.writeUInt8(247 + (s >> 8)),
                e.writeUInt8(255 & s))
              : -1131 <= s && s <= -108
              ? ((s = -s - 108),
                e.writeUInt8(251 + (s >> 8)),
                e.writeUInt8(255 & s))
              : -32768 <= s && s <= 32767
              ? (e.writeUInt8(28), e.writeInt16BE(s))
              : (e.writeUInt8(29), e.writeInt32BE(s));
          {
            e.writeUInt8(30);
            let t = "" + s;
            for (let s = 0; s < t.length; s += 2) {
              let n = t[s],
                a = ue[n] || +n;
              if (s === t.length - 1) var r = 15;
              else {
                let e = t[s + 1];
                r = ue[e] || +e;
              }
              e.writeUInt8((a << 4) | (15 & r));
            }
            if (15 !== r) return e.writeUInt8(240);
          }
        }
      }
      class he {
        decodeOperands(e, t, s, r) {
          if (Array.isArray(e))
            return r.map((r, n) => this.decodeOperands(e[n], t, s, [r]));
          if (null != e.decode) return e.decode(t, s, r);
          switch (e) {
            case "number":
            case "offset":
            case "sid":
              return r[0];
            case "boolean":
              return !!r[0];
            default:
              return r;
          }
        }
        encodeOperands(e, t, s, r) {
          return Array.isArray(e)
            ? r.map((r, n) => this.encodeOperands(e[n], t, s, r)[0])
            : null != e.encode
            ? e.encode(t, r, s)
            : "number" === typeof r
            ? [r]
            : "boolean" === typeof r
            ? [+r]
            : Array.isArray(r)
            ? r
            : [r];
        }
        decode(e, t) {
          let s = e.pos + t.length,
            n = {},
            a = [];
          Object.defineProperties(n, {
            parent: { value: t },
            _startOffset: { value: e.pos },
          });
          for (let r in this.fields) {
            let e = this.fields[r];
            n[e[1]] = e[3];
          }
          for (; e.pos < s; ) {
            let t = e.readUInt8();
            if (t < 28) {
              12 === t && (t = (t << 8) | e.readUInt8());
              let s = this.fields[t];
              if (!s) throw new Error(`Unknown operator ${t}`);
              let l = this.decodeOperands(s[2], e, n, a);
              null != l &&
                (l instanceof r.c5
                  ? Object.defineProperty(n, s[1], l)
                  : (n[s[1]] = l)),
                (a = []);
            } else a.push(ce.decode(e, t));
          }
          return n;
        }
        size(e, t, s = !0) {
          let r = {
              parent: t,
              val: e,
              pointerSize: 0,
              startOffset: t.startOffset || 0,
            },
            n = 0;
          for (let a in this.fields) {
            let t = this.fields[a],
              s = e[t[1]];
            if (null == s || l(s, t[3])) continue;
            let i = this.encodeOperands(t[2], null, r, s);
            for (let e of i) n += ce.size(e);
            n += (Array.isArray(t[0]) ? t[0] : [t[0]]).length;
          }
          return s && (n += r.pointerSize), n;
        }
        encode(e, t, s) {
          let r = {
            pointers: [],
            startOffset: e.pos,
            parent: s,
            val: t,
            pointerSize: 0,
          };
          r.pointerOffset = e.pos + this.size(t, r, !1);
          for (let a of this.ops) {
            let s = t[a[1]];
            if (null == s || l(s, a[3])) continue;
            let n = this.encodeOperands(a[2], e, r, s);
            for (let t of n) ce.encode(e, t);
            let i = Array.isArray(a[0]) ? a[0] : [a[0]];
            for (let t of i) e.writeUInt8(t);
          }
          let n = 0;
          for (; n < r.pointers.length; ) {
            let t = r.pointers[n++];
            t.type.encode(e, t.val, t.parent);
          }
        }
        constructor(e = []) {
          (this.ops = e), (this.fields = {});
          for (let t of e) {
            let e = Array.isArray(t[0]) ? (t[0][0] << 8) | t[0][1] : t[0];
            this.fields[e] = t;
          }
        }
      }
      class fe extends r.$J {
        decode(e, t, s) {
          return (
            (this.offsetType = { decode: () => s[0] }), super.decode(e, t, s)
          );
        }
        encode(e, t, s) {
          if (!e)
            return (
              (this.offsetType = { size: () => 0 }),
              this.size(t, s),
              [new de(0)]
            );
          let r = null;
          return (
            (this.offsetType = { encode: (e, t) => (r = t) }),
            super.encode(e, t, s),
            [new de(r)]
          );
        }
        constructor(e, t = {}) {
          null == t.type && (t.type = "global"), super(null, e, t);
        }
      }
      class de {
        valueOf() {
          return this.val;
        }
        constructor(e) {
          (this.val = e), (this.forceLarge = !0);
        }
      }
      var me = new he([
          [6, "BlueValues", "delta", null],
          [7, "OtherBlues", "delta", null],
          [8, "FamilyBlues", "delta", null],
          [9, "FamilyOtherBlues", "delta", null],
          [[12, 9], "BlueScale", "number", 0.039625],
          [[12, 10], "BlueShift", "number", 7],
          [[12, 11], "BlueFuzz", "number", 1],
          [10, "StdHW", "number", null],
          [11, "StdVW", "number", null],
          [[12, 12], "StemSnapH", "delta", null],
          [[12, 13], "StemSnapV", "delta", null],
          [[12, 14], "ForceBold", "boolean", !1],
          [[12, 17], "LanguageGroup", "number", 0],
          [[12, 18], "ExpansionFactor", "number", 0.06],
          [[12, 19], "initialRandomSeed", "number", 0],
          [20, "defaultWidthX", "number", 0],
          [21, "nominalWidthX", "number", 0],
          [22, "vsindex", "number", 0],
          [
            23,
            "blend",
            class {
              static decode(e, t, s) {
                let r = s.pop();
                for (; s.length > r; ) s.pop();
              }
            },
            null,
          ],
          [19, "Subrs", new fe(new ie(), { type: "local" }), null],
        ]),
        pe = [
          ".notdef",
          "space",
          "exclam",
          "quotedbl",
          "numbersign",
          "dollar",
          "percent",
          "ampersand",
          "quoteright",
          "parenleft",
          "parenright",
          "asterisk",
          "plus",
          "comma",
          "hyphen",
          "period",
          "slash",
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "colon",
          "semicolon",
          "less",
          "equal",
          "greater",
          "question",
          "at",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "bracketleft",
          "backslash",
          "bracketright",
          "asciicircum",
          "underscore",
          "quoteleft",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "braceleft",
          "bar",
          "braceright",
          "asciitilde",
          "exclamdown",
          "cent",
          "sterling",
          "fraction",
          "yen",
          "florin",
          "section",
          "currency",
          "quotesingle",
          "quotedblleft",
          "guillemotleft",
          "guilsinglleft",
          "guilsinglright",
          "fi",
          "fl",
          "endash",
          "dagger",
          "daggerdbl",
          "periodcentered",
          "paragraph",
          "bullet",
          "quotesinglbase",
          "quotedblbase",
          "quotedblright",
          "guillemotright",
          "ellipsis",
          "perthousand",
          "questiondown",
          "grave",
          "acute",
          "circumflex",
          "tilde",
          "macron",
          "breve",
          "dotaccent",
          "dieresis",
          "ring",
          "cedilla",
          "hungarumlaut",
          "ogonek",
          "caron",
          "emdash",
          "AE",
          "ordfeminine",
          "Lslash",
          "Oslash",
          "OE",
          "ordmasculine",
          "ae",
          "dotlessi",
          "lslash",
          "oslash",
          "oe",
          "germandbls",
          "onesuperior",
          "logicalnot",
          "mu",
          "trademark",
          "Eth",
          "onehalf",
          "plusminus",
          "Thorn",
          "onequarter",
          "divide",
          "brokenbar",
          "degree",
          "thorn",
          "threequarters",
          "twosuperior",
          "registered",
          "minus",
          "eth",
          "multiply",
          "threesuperior",
          "copyright",
          "Aacute",
          "Acircumflex",
          "Adieresis",
          "Agrave",
          "Aring",
          "Atilde",
          "Ccedilla",
          "Eacute",
          "Ecircumflex",
          "Edieresis",
          "Egrave",
          "Iacute",
          "Icircumflex",
          "Idieresis",
          "Igrave",
          "Ntilde",
          "Oacute",
          "Ocircumflex",
          "Odieresis",
          "Ograve",
          "Otilde",
          "Scaron",
          "Uacute",
          "Ucircumflex",
          "Udieresis",
          "Ugrave",
          "Yacute",
          "Ydieresis",
          "Zcaron",
          "aacute",
          "acircumflex",
          "adieresis",
          "agrave",
          "aring",
          "atilde",
          "ccedilla",
          "eacute",
          "ecircumflex",
          "edieresis",
          "egrave",
          "iacute",
          "icircumflex",
          "idieresis",
          "igrave",
          "ntilde",
          "oacute",
          "ocircumflex",
          "odieresis",
          "ograve",
          "otilde",
          "scaron",
          "uacute",
          "ucircumflex",
          "udieresis",
          "ugrave",
          "yacute",
          "ydieresis",
          "zcaron",
          "exclamsmall",
          "Hungarumlautsmall",
          "dollaroldstyle",
          "dollarsuperior",
          "ampersandsmall",
          "Acutesmall",
          "parenleftsuperior",
          "parenrightsuperior",
          "twodotenleader",
          "onedotenleader",
          "zerooldstyle",
          "oneoldstyle",
          "twooldstyle",
          "threeoldstyle",
          "fouroldstyle",
          "fiveoldstyle",
          "sixoldstyle",
          "sevenoldstyle",
          "eightoldstyle",
          "nineoldstyle",
          "commasuperior",
          "threequartersemdash",
          "periodsuperior",
          "questionsmall",
          "asuperior",
          "bsuperior",
          "centsuperior",
          "dsuperior",
          "esuperior",
          "isuperior",
          "lsuperior",
          "msuperior",
          "nsuperior",
          "osuperior",
          "rsuperior",
          "ssuperior",
          "tsuperior",
          "ff",
          "ffi",
          "ffl",
          "parenleftinferior",
          "parenrightinferior",
          "Circumflexsmall",
          "hyphensuperior",
          "Gravesmall",
          "Asmall",
          "Bsmall",
          "Csmall",
          "Dsmall",
          "Esmall",
          "Fsmall",
          "Gsmall",
          "Hsmall",
          "Ismall",
          "Jsmall",
          "Ksmall",
          "Lsmall",
          "Msmall",
          "Nsmall",
          "Osmall",
          "Psmall",
          "Qsmall",
          "Rsmall",
          "Ssmall",
          "Tsmall",
          "Usmall",
          "Vsmall",
          "Wsmall",
          "Xsmall",
          "Ysmall",
          "Zsmall",
          "colonmonetary",
          "onefitted",
          "rupiah",
          "Tildesmall",
          "exclamdownsmall",
          "centoldstyle",
          "Lslashsmall",
          "Scaronsmall",
          "Zcaronsmall",
          "Dieresissmall",
          "Brevesmall",
          "Caronsmall",
          "Dotaccentsmall",
          "Macronsmall",
          "figuredash",
          "hypheninferior",
          "Ogoneksmall",
          "Ringsmall",
          "Cedillasmall",
          "questiondownsmall",
          "oneeighth",
          "threeeighths",
          "fiveeighths",
          "seveneighths",
          "onethird",
          "twothirds",
          "zerosuperior",
          "foursuperior",
          "fivesuperior",
          "sixsuperior",
          "sevensuperior",
          "eightsuperior",
          "ninesuperior",
          "zeroinferior",
          "oneinferior",
          "twoinferior",
          "threeinferior",
          "fourinferior",
          "fiveinferior",
          "sixinferior",
          "seveninferior",
          "eightinferior",
          "nineinferior",
          "centinferior",
          "dollarinferior",
          "periodinferior",
          "commainferior",
          "Agravesmall",
          "Aacutesmall",
          "Acircumflexsmall",
          "Atildesmall",
          "Adieresissmall",
          "Aringsmall",
          "AEsmall",
          "Ccedillasmall",
          "Egravesmall",
          "Eacutesmall",
          "Ecircumflexsmall",
          "Edieresissmall",
          "Igravesmall",
          "Iacutesmall",
          "Icircumflexsmall",
          "Idieresissmall",
          "Ethsmall",
          "Ntildesmall",
          "Ogravesmall",
          "Oacutesmall",
          "Ocircumflexsmall",
          "Otildesmall",
          "Odieresissmall",
          "OEsmall",
          "Oslashsmall",
          "Ugravesmall",
          "Uacutesmall",
          "Ucircumflexsmall",
          "Udieresissmall",
          "Yacutesmall",
          "Thornsmall",
          "Ydieresissmall",
          "001.000",
          "001.001",
          "001.002",
          "001.003",
          "Black",
          "Bold",
          "Book",
          "Light",
          "Medium",
          "Regular",
          "Roman",
          "Semibold",
        ];
      let ge = [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "space",
          "exclam",
          "quotedbl",
          "numbersign",
          "dollar",
          "percent",
          "ampersand",
          "quoteright",
          "parenleft",
          "parenright",
          "asterisk",
          "plus",
          "comma",
          "hyphen",
          "period",
          "slash",
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "colon",
          "semicolon",
          "less",
          "equal",
          "greater",
          "question",
          "at",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "bracketleft",
          "backslash",
          "bracketright",
          "asciicircum",
          "underscore",
          "quoteleft",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "braceleft",
          "bar",
          "braceright",
          "asciitilde",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "exclamdown",
          "cent",
          "sterling",
          "fraction",
          "yen",
          "florin",
          "section",
          "currency",
          "quotesingle",
          "quotedblleft",
          "guillemotleft",
          "guilsinglleft",
          "guilsinglright",
          "fi",
          "fl",
          "",
          "endash",
          "dagger",
          "daggerdbl",
          "periodcentered",
          "",
          "paragraph",
          "bullet",
          "quotesinglbase",
          "quotedblbase",
          "quotedblright",
          "guillemotright",
          "ellipsis",
          "perthousand",
          "",
          "questiondown",
          "",
          "grave",
          "acute",
          "circumflex",
          "tilde",
          "macron",
          "breve",
          "dotaccent",
          "dieresis",
          "",
          "ring",
          "cedilla",
          "",
          "hungarumlaut",
          "ogonek",
          "caron",
          "emdash",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "AE",
          "",
          "ordfeminine",
          "",
          "",
          "",
          "",
          "Lslash",
          "Oslash",
          "OE",
          "ordmasculine",
          "",
          "",
          "",
          "",
          "",
          "ae",
          "",
          "",
          "",
          "dotlessi",
          "",
          "",
          "lslash",
          "oslash",
          "oe",
          "germandbls",
        ],
        ye = [
          ".notdef",
          "space",
          "exclam",
          "quotedbl",
          "numbersign",
          "dollar",
          "percent",
          "ampersand",
          "quoteright",
          "parenleft",
          "parenright",
          "asterisk",
          "plus",
          "comma",
          "hyphen",
          "period",
          "slash",
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
          "colon",
          "semicolon",
          "less",
          "equal",
          "greater",
          "question",
          "at",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          "bracketleft",
          "backslash",
          "bracketright",
          "asciicircum",
          "underscore",
          "quoteleft",
          "a",
          "b",
          "c",
          "d",
          "e",
          "f",
          "g",
          "h",
          "i",
          "j",
          "k",
          "l",
          "m",
          "n",
          "o",
          "p",
          "q",
          "r",
          "s",
          "t",
          "u",
          "v",
          "w",
          "x",
          "y",
          "z",
          "braceleft",
          "bar",
          "braceright",
          "asciitilde",
          "exclamdown",
          "cent",
          "sterling",
          "fraction",
          "yen",
          "florin",
          "section",
          "currency",
          "quotesingle",
          "quotedblleft",
          "guillemotleft",
          "guilsinglleft",
          "guilsinglright",
          "fi",
          "fl",
          "endash",
          "dagger",
          "daggerdbl",
          "periodcentered",
          "paragraph",
          "bullet",
          "quotesinglbase",
          "quotedblbase",
          "quotedblright",
          "guillemotright",
          "ellipsis",
          "perthousand",
          "questiondown",
          "grave",
          "acute",
          "circumflex",
          "tilde",
          "macron",
          "breve",
          "dotaccent",
          "dieresis",
          "ring",
          "cedilla",
          "hungarumlaut",
          "ogonek",
          "caron",
          "emdash",
          "AE",
          "ordfeminine",
          "Lslash",
          "Oslash",
          "OE",
          "ordmasculine",
          "ae",
          "dotlessi",
          "lslash",
          "oslash",
          "oe",
          "germandbls",
          "onesuperior",
          "logicalnot",
          "mu",
          "trademark",
          "Eth",
          "onehalf",
          "plusminus",
          "Thorn",
          "onequarter",
          "divide",
          "brokenbar",
          "degree",
          "thorn",
          "threequarters",
          "twosuperior",
          "registered",
          "minus",
          "eth",
          "multiply",
          "threesuperior",
          "copyright",
          "Aacute",
          "Acircumflex",
          "Adieresis",
          "Agrave",
          "Aring",
          "Atilde",
          "Ccedilla",
          "Eacute",
          "Ecircumflex",
          "Edieresis",
          "Egrave",
          "Iacute",
          "Icircumflex",
          "Idieresis",
          "Igrave",
          "Ntilde",
          "Oacute",
          "Ocircumflex",
          "Odieresis",
          "Ograve",
          "Otilde",
          "Scaron",
          "Uacute",
          "Ucircumflex",
          "Udieresis",
          "Ugrave",
          "Yacute",
          "Ydieresis",
          "Zcaron",
          "aacute",
          "acircumflex",
          "adieresis",
          "agrave",
          "aring",
          "atilde",
          "ccedilla",
          "eacute",
          "ecircumflex",
          "edieresis",
          "egrave",
          "iacute",
          "icircumflex",
          "idieresis",
          "igrave",
          "ntilde",
          "oacute",
          "ocircumflex",
          "odieresis",
          "ograve",
          "otilde",
          "scaron",
          "uacute",
          "ucircumflex",
          "udieresis",
          "ugrave",
          "yacute",
          "ydieresis",
          "zcaron",
        ],
        be = new r.AU({
          reserved: new r.kV(r.mL),
          reqFeatureIndex: r.mL,
          featureCount: r.mL,
          featureIndexes: new r.mJ(r.mL, "featureCount"),
        }),
        we = new r.AU({
          tag: new r.Ld(4),
          langSys: new r.$J(r.mL, be, { type: "parent" }),
        }),
        ve = new r.AU({
          defaultLangSys: new r.$J(r.mL, be),
          count: r.mL,
          langSysRecords: new r.mJ(we, "count"),
        }),
        _e = new r.AU({
          tag: new r.Ld(4),
          script: new r.$J(r.mL, ve, { type: "parent" }),
        }),
        Le = new r.mJ(_e, r.mL),
        Ce = new r.AU({ version: r.mL, nameID: r.mL }),
        xe = new r.AU({
          featureParams: new r.$J(r.mL, Ce),
          lookupCount: r.mL,
          lookupListIndexes: new r.mJ(r.mL, "lookupCount"),
        }),
        Ae = new r.AU({
          tag: new r.Ld(4),
          feature: new r.$J(r.mL, xe, { type: "parent" }),
        }),
        ke = new r.mJ(Ae, r.mL),
        Se = new r.AU({
          markAttachmentType: r.w_,
          flags: new r.DL(r.w_, [
            "rightToLeft",
            "ignoreBaseGlyphs",
            "ignoreLigatures",
            "ignoreMarks",
            "useMarkFilteringSet",
          ]),
        });
      function Ie(e) {
        let t = new r.AU({
          lookupType: r.mL,
          flags: Se,
          subTableCount: r.mL,
          subTables: new r.mJ(new r.$J(r.mL, e), "subTableCount"),
          markFilteringSet: new r.Fi(
            r.mL,
            (e) => e.flags.flags.useMarkFilteringSet
          ),
        });
        return new r.pW(new r.$J(r.mL, t), r.mL);
      }
      let Pe = new r.AU({ start: r.mL, end: r.mL, startCoverageIndex: r.mL }),
        Ue = new r.bS(r.mL, {
          1: { glyphCount: r.mL, glyphs: new r.mJ(r.mL, "glyphCount") },
          2: { rangeCount: r.mL, rangeRecords: new r.mJ(Pe, "rangeCount") },
        }),
        Je = new r.AU({ start: r.mL, end: r.mL, class: r.mL }),
        Te = new r.bS(r.mL, {
          1: {
            startGlyph: r.mL,
            glyphCount: r.mL,
            classValueArray: new r.mJ(r.mL, "glyphCount"),
          },
          2: {
            classRangeCount: r.mL,
            classRangeRecord: new r.mJ(Je, "classRangeCount"),
          },
        }),
        Oe = new r.AU({ a: r.mL, b: r.mL, deltaFormat: r.mL }),
        Fe = new r.AU({ sequenceIndex: r.mL, lookupListIndex: r.mL }),
        De = new r.AU({
          glyphCount: r.mL,
          lookupCount: r.mL,
          input: new r.mJ(r.mL, (e) => e.glyphCount - 1),
          lookupRecords: new r.mJ(Fe, "lookupCount"),
        }),
        Me = new r.mJ(new r.$J(r.mL, De), r.mL),
        Ge = new r.AU({
          glyphCount: r.mL,
          lookupCount: r.mL,
          classes: new r.mJ(r.mL, (e) => e.glyphCount - 1),
          lookupRecords: new r.mJ(Fe, "lookupCount"),
        }),
        Ee = new r.mJ(new r.$J(r.mL, Ge), r.mL),
        Be = new r.bS(r.mL, {
          1: {
            coverage: new r.$J(r.mL, Ue),
            ruleSetCount: r.mL,
            ruleSets: new r.mJ(new r.$J(r.mL, Me), "ruleSetCount"),
          },
          2: {
            coverage: new r.$J(r.mL, Ue),
            classDef: new r.$J(r.mL, Te),
            classSetCnt: r.mL,
            classSet: new r.mJ(new r.$J(r.mL, Ee), "classSetCnt"),
          },
          3: {
            glyphCount: r.mL,
            lookupCount: r.mL,
            coverages: new r.mJ(new r.$J(r.mL, Ue), "glyphCount"),
            lookupRecords: new r.mJ(Fe, "lookupCount"),
          },
        }),
        Ve = new r.AU({
          backtrackGlyphCount: r.mL,
          backtrack: new r.mJ(r.mL, "backtrackGlyphCount"),
          inputGlyphCount: r.mL,
          input: new r.mJ(r.mL, (e) => e.inputGlyphCount - 1),
          lookaheadGlyphCount: r.mL,
          lookahead: new r.mJ(r.mL, "lookaheadGlyphCount"),
          lookupCount: r.mL,
          lookupRecords: new r.mJ(Fe, "lookupCount"),
        }),
        ze = new r.mJ(new r.$J(r.mL, Ve), r.mL),
        Re = new r.bS(r.mL, {
          1: {
            coverage: new r.$J(r.mL, Ue),
            chainCount: r.mL,
            chainRuleSets: new r.mJ(new r.$J(r.mL, ze), "chainCount"),
          },
          2: {
            coverage: new r.$J(r.mL, Ue),
            backtrackClassDef: new r.$J(r.mL, Te),
            inputClassDef: new r.$J(r.mL, Te),
            lookaheadClassDef: new r.$J(r.mL, Te),
            chainCount: r.mL,
            chainClassSet: new r.mJ(new r.$J(r.mL, ze), "chainCount"),
          },
          3: {
            backtrackGlyphCount: r.mL,
            backtrackCoverage: new r.mJ(
              new r.$J(r.mL, Ue),
              "backtrackGlyphCount"
            ),
            inputGlyphCount: r.mL,
            inputCoverage: new r.mJ(new r.$J(r.mL, Ue), "inputGlyphCount"),
            lookaheadGlyphCount: r.mL,
            lookaheadCoverage: new r.mJ(
              new r.$J(r.mL, Ue),
              "lookaheadGlyphCount"
            ),
            lookupCount: r.mL,
            lookupRecords: new r.mJ(Fe, "lookupCount"),
          },
        }),
        Ne = new r.gb(16, "BE", 14),
        We = new r.AU({ startCoord: Ne, peakCoord: Ne, endCoord: Ne }),
        Xe = new r.AU({
          axisCount: r.mL,
          regionCount: r.mL,
          variationRegions: new r.mJ(new r.mJ(We, "axisCount"), "regionCount"),
        }),
        qe = new r.AU({
          shortDeltas: new r.mJ(r.Af, (e) => e.parent.shortDeltaCount),
          regionDeltas: new r.mJ(
            r.cS,
            (e) => e.parent.regionIndexCount - e.parent.shortDeltaCount
          ),
          deltas: (e) => e.shortDeltas.concat(e.regionDeltas),
        }),
        He = new r.AU({
          itemCount: r.mL,
          shortDeltaCount: r.mL,
          regionIndexCount: r.mL,
          regionIndexes: new r.mJ(r.mL, "regionIndexCount"),
          deltaSets: new r.mJ(qe, "itemCount"),
        }),
        je = new r.AU({
          format: r.mL,
          variationRegionList: new r.$J(r.U7, Xe),
          variationDataCount: r.mL,
          itemVariationData: new r.mJ(new r.$J(r.U7, He), "variationDataCount"),
        }),
        Ye = new r.bS(r.mL, {
          1: {
            axisIndex: r.mL,
            axisIndex: r.mL,
            filterRangeMinValue: Ne,
            filterRangeMaxValue: Ne,
          },
        }),
        $e = new r.AU({
          conditionCount: r.mL,
          conditionTable: new r.mJ(new r.$J(r.U7, Ye), "conditionCount"),
        }),
        Ze = new r.AU({
          featureIndex: r.mL,
          alternateFeatureTable: new r.$J(r.U7, xe, { type: "parent" }),
        }),
        Ke = new r.AU({
          version: r.E2,
          substitutionCount: r.mL,
          substitutions: new r.mJ(Ze, "substitutionCount"),
        }),
        Qe = new r.AU({
          conditionSet: new r.$J(r.U7, $e, { type: "parent" }),
          featureTableSubstitution: new r.$J(r.U7, Ke, { type: "parent" }),
        }),
        et = new r.AU({
          majorVersion: r.mL,
          minorVersion: r.mL,
          featureVariationRecordCount: r.U7,
          featureVariationRecords: new r.mJ(Qe, "featureVariationRecordCount"),
        });
      class tt {
        decode(e, t, s) {
          return this.predefinedOps[s[0]]
            ? this.predefinedOps[s[0]]
            : this.type.decode(e, t, s);
        }
        size(e, t) {
          return this.type.size(e, t);
        }
        encode(e, t, s) {
          let r = this.predefinedOps.indexOf(t);
          return -1 !== r ? r : this.type.encode(e, t, s);
        }
        constructor(e, t) {
          (this.predefinedOps = e), (this.type = t);
        }
      }
      class st extends r.Mr {
        decode(e) {
          return 127 & r.w_.decode(e);
        }
        constructor() {
          super("UInt8");
        }
      }
      let rt = new r.AU({ first: r.mL, nLeft: r.w_ }),
        nt = new r.AU({ first: r.mL, nLeft: r.mL }),
        at = new tt(
          [
            ge,
            [
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "space",
              "exclamsmall",
              "Hungarumlautsmall",
              "",
              "dollaroldstyle",
              "dollarsuperior",
              "ampersandsmall",
              "Acutesmall",
              "parenleftsuperior",
              "parenrightsuperior",
              "twodotenleader",
              "onedotenleader",
              "comma",
              "hyphen",
              "period",
              "fraction",
              "zerooldstyle",
              "oneoldstyle",
              "twooldstyle",
              "threeoldstyle",
              "fouroldstyle",
              "fiveoldstyle",
              "sixoldstyle",
              "sevenoldstyle",
              "eightoldstyle",
              "nineoldstyle",
              "colon",
              "semicolon",
              "commasuperior",
              "threequartersemdash",
              "periodsuperior",
              "questionsmall",
              "",
              "asuperior",
              "bsuperior",
              "centsuperior",
              "dsuperior",
              "esuperior",
              "",
              "",
              "isuperior",
              "",
              "",
              "lsuperior",
              "msuperior",
              "nsuperior",
              "osuperior",
              "",
              "",
              "rsuperior",
              "ssuperior",
              "tsuperior",
              "",
              "ff",
              "fi",
              "fl",
              "ffi",
              "ffl",
              "parenleftinferior",
              "",
              "parenrightinferior",
              "Circumflexsmall",
              "hyphensuperior",
              "Gravesmall",
              "Asmall",
              "Bsmall",
              "Csmall",
              "Dsmall",
              "Esmall",
              "Fsmall",
              "Gsmall",
              "Hsmall",
              "Ismall",
              "Jsmall",
              "Ksmall",
              "Lsmall",
              "Msmall",
              "Nsmall",
              "Osmall",
              "Psmall",
              "Qsmall",
              "Rsmall",
              "Ssmall",
              "Tsmall",
              "Usmall",
              "Vsmall",
              "Wsmall",
              "Xsmall",
              "Ysmall",
              "Zsmall",
              "colonmonetary",
              "onefitted",
              "rupiah",
              "Tildesmall",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "",
              "exclamdownsmall",
              "centoldstyle",
              "Lslashsmall",
              "",
              "",
              "Scaronsmall",
              "Zcaronsmall",
              "Dieresissmall",
              "Brevesmall",
              "Caronsmall",
              "",
              "Dotaccentsmall",
              "",
              "",
              "Macronsmall",
              "",
              "",
              "figuredash",
              "hypheninferior",
              "",
              "",
              "Ogoneksmall",
              "Ringsmall",
              "Cedillasmall",
              "",
              "",
              "",
              "onequarter",
              "onehalf",
              "threequarters",
              "questiondownsmall",
              "oneeighth",
              "threeeighths",
              "fiveeighths",
              "seveneighths",
              "onethird",
              "twothirds",
              "",
              "",
              "zerosuperior",
              "onesuperior",
              "twosuperior",
              "threesuperior",
              "foursuperior",
              "fivesuperior",
              "sixsuperior",
              "sevensuperior",
              "eightsuperior",
              "ninesuperior",
              "zeroinferior",
              "oneinferior",
              "twoinferior",
              "threeinferior",
              "fourinferior",
              "fiveinferior",
              "sixinferior",
              "seveninferior",
              "eightinferior",
              "nineinferior",
              "centinferior",
              "dollarinferior",
              "periodinferior",
              "commainferior",
              "Agravesmall",
              "Aacutesmall",
              "Acircumflexsmall",
              "Atildesmall",
              "Adieresissmall",
              "Aringsmall",
              "AEsmall",
              "Ccedillasmall",
              "Egravesmall",
              "Eacutesmall",
              "Ecircumflexsmall",
              "Edieresissmall",
              "Igravesmall",
              "Iacutesmall",
              "Icircumflexsmall",
              "Idieresissmall",
              "Ethsmall",
              "Ntildesmall",
              "Ogravesmall",
              "Oacutesmall",
              "Ocircumflexsmall",
              "Otildesmall",
              "Odieresissmall",
              "OEsmall",
              "Oslashsmall",
              "Ugravesmall",
              "Uacutesmall",
              "Ucircumflexsmall",
              "Udieresissmall",
              "Yacutesmall",
              "Thornsmall",
              "Ydieresissmall",
            ],
          ],
          new fe(
            new r.bS(new st(), {
              0: { nCodes: r.w_, codes: new r.mJ(r.w_, "nCodes") },
              1: { nRanges: r.w_, ranges: new r.mJ(rt, "nRanges") },
            }),
            { lazy: !0 }
          )
        );
      class lt extends r.mJ {
        decode(e, t) {
          let s = (0, r.dB)(this.length, e, t),
            n = 0,
            a = [];
          for (; n < s; ) {
            let s = this.type.decode(e, t);
            (s.offset = n), (n += s.nLeft + 1), a.push(s);
          }
          return a;
        }
      }
      let it = new tt(
          [
            ye,
            [
              ".notdef",
              "space",
              "exclamsmall",
              "Hungarumlautsmall",
              "dollaroldstyle",
              "dollarsuperior",
              "ampersandsmall",
              "Acutesmall",
              "parenleftsuperior",
              "parenrightsuperior",
              "twodotenleader",
              "onedotenleader",
              "comma",
              "hyphen",
              "period",
              "fraction",
              "zerooldstyle",
              "oneoldstyle",
              "twooldstyle",
              "threeoldstyle",
              "fouroldstyle",
              "fiveoldstyle",
              "sixoldstyle",
              "sevenoldstyle",
              "eightoldstyle",
              "nineoldstyle",
              "colon",
              "semicolon",
              "commasuperior",
              "threequartersemdash",
              "periodsuperior",
              "questionsmall",
              "asuperior",
              "bsuperior",
              "centsuperior",
              "dsuperior",
              "esuperior",
              "isuperior",
              "lsuperior",
              "msuperior",
              "nsuperior",
              "osuperior",
              "rsuperior",
              "ssuperior",
              "tsuperior",
              "ff",
              "fi",
              "fl",
              "ffi",
              "ffl",
              "parenleftinferior",
              "parenrightinferior",
              "Circumflexsmall",
              "hyphensuperior",
              "Gravesmall",
              "Asmall",
              "Bsmall",
              "Csmall",
              "Dsmall",
              "Esmall",
              "Fsmall",
              "Gsmall",
              "Hsmall",
              "Ismall",
              "Jsmall",
              "Ksmall",
              "Lsmall",
              "Msmall",
              "Nsmall",
              "Osmall",
              "Psmall",
              "Qsmall",
              "Rsmall",
              "Ssmall",
              "Tsmall",
              "Usmall",
              "Vsmall",
              "Wsmall",
              "Xsmall",
              "Ysmall",
              "Zsmall",
              "colonmonetary",
              "onefitted",
              "rupiah",
              "Tildesmall",
              "exclamdownsmall",
              "centoldstyle",
              "Lslashsmall",
              "Scaronsmall",
              "Zcaronsmall",
              "Dieresissmall",
              "Brevesmall",
              "Caronsmall",
              "Dotaccentsmall",
              "Macronsmall",
              "figuredash",
              "hypheninferior",
              "Ogoneksmall",
              "Ringsmall",
              "Cedillasmall",
              "onequarter",
              "onehalf",
              "threequarters",
              "questiondownsmall",
              "oneeighth",
              "threeeighths",
              "fiveeighths",
              "seveneighths",
              "onethird",
              "twothirds",
              "zerosuperior",
              "onesuperior",
              "twosuperior",
              "threesuperior",
              "foursuperior",
              "fivesuperior",
              "sixsuperior",
              "sevensuperior",
              "eightsuperior",
              "ninesuperior",
              "zeroinferior",
              "oneinferior",
              "twoinferior",
              "threeinferior",
              "fourinferior",
              "fiveinferior",
              "sixinferior",
              "seveninferior",
              "eightinferior",
              "nineinferior",
              "centinferior",
              "dollarinferior",
              "periodinferior",
              "commainferior",
              "Agravesmall",
              "Aacutesmall",
              "Acircumflexsmall",
              "Atildesmall",
              "Adieresissmall",
              "Aringsmall",
              "AEsmall",
              "Ccedillasmall",
              "Egravesmall",
              "Eacutesmall",
              "Ecircumflexsmall",
              "Edieresissmall",
              "Igravesmall",
              "Iacutesmall",
              "Icircumflexsmall",
              "Idieresissmall",
              "Ethsmall",
              "Ntildesmall",
              "Ogravesmall",
              "Oacutesmall",
              "Ocircumflexsmall",
              "Otildesmall",
              "Odieresissmall",
              "OEsmall",
              "Oslashsmall",
              "Ugravesmall",
              "Uacutesmall",
              "Ucircumflexsmall",
              "Udieresissmall",
              "Yacutesmall",
              "Thornsmall",
              "Ydieresissmall",
            ],
            [
              ".notdef",
              "space",
              "dollaroldstyle",
              "dollarsuperior",
              "parenleftsuperior",
              "parenrightsuperior",
              "twodotenleader",
              "onedotenleader",
              "comma",
              "hyphen",
              "period",
              "fraction",
              "zerooldstyle",
              "oneoldstyle",
              "twooldstyle",
              "threeoldstyle",
              "fouroldstyle",
              "fiveoldstyle",
              "sixoldstyle",
              "sevenoldstyle",
              "eightoldstyle",
              "nineoldstyle",
              "colon",
              "semicolon",
              "commasuperior",
              "threequartersemdash",
              "periodsuperior",
              "asuperior",
              "bsuperior",
              "centsuperior",
              "dsuperior",
              "esuperior",
              "isuperior",
              "lsuperior",
              "msuperior",
              "nsuperior",
              "osuperior",
              "rsuperior",
              "ssuperior",
              "tsuperior",
              "ff",
              "fi",
              "fl",
              "ffi",
              "ffl",
              "parenleftinferior",
              "parenrightinferior",
              "hyphensuperior",
              "colonmonetary",
              "onefitted",
              "rupiah",
              "centoldstyle",
              "figuredash",
              "hypheninferior",
              "onequarter",
              "onehalf",
              "threequarters",
              "oneeighth",
              "threeeighths",
              "fiveeighths",
              "seveneighths",
              "onethird",
              "twothirds",
              "zerosuperior",
              "onesuperior",
              "twosuperior",
              "threesuperior",
              "foursuperior",
              "fivesuperior",
              "sixsuperior",
              "sevensuperior",
              "eightsuperior",
              "ninesuperior",
              "zeroinferior",
              "oneinferior",
              "twoinferior",
              "threeinferior",
              "fourinferior",
              "fiveinferior",
              "sixinferior",
              "seveninferior",
              "eightinferior",
              "nineinferior",
              "centinferior",
              "dollarinferior",
              "periodinferior",
              "commainferior",
            ],
          ],
          new fe(
            new r.bS(r.w_, {
              0: {
                glyphs: new r.mJ(r.mL, (e) => e.parent.CharStrings.length - 1),
              },
              1: { ranges: new lt(rt, (e) => e.parent.CharStrings.length - 1) },
              2: { ranges: new lt(nt, (e) => e.parent.CharStrings.length - 1) },
            }),
            { lazy: !0 }
          )
        ),
        ot = new r.AU({ first: r.mL, fd: r.w_ }),
        ut = new r.AU({ first: r.U7, fd: r.mL }),
        ct = new r.bS(r.w_, {
          0: { fds: new r.mJ(r.w_, (e) => e.parent.CharStrings.length) },
          3: { nRanges: r.mL, ranges: new r.mJ(ot, "nRanges"), sentinel: r.mL },
          4: { nRanges: r.U7, ranges: new r.mJ(ut, "nRanges"), sentinel: r.U7 },
        }),
        ht = new fe(me);
      class ft {
        decode(e, t, s) {
          return (t.length = s[0]), ht.decode(e, t, [s[1]]);
        }
        size(e, t) {
          return [me.size(e, t, !1), ht.size(e, t)[0]];
        }
        encode(e, t, s) {
          return [me.size(t, s, !1), ht.encode(e, t, s)[0]];
        }
      }
      let dt = new he([
          [18, "Private", new ft(), null],
          [[12, 38], "FontName", "sid", null],
          [[12, 7], "FontMatrix", "array", [0.001, 0, 0, 0.001, 0, 0]],
          [[12, 5], "PaintType", "number", 0],
        ]),
        mt = new he([
          [[12, 30], "ROS", ["sid", "sid", "number"], null],
          [0, "version", "sid", null],
          [1, "Notice", "sid", null],
          [[12, 0], "Copyright", "sid", null],
          [2, "FullName", "sid", null],
          [3, "FamilyName", "sid", null],
          [4, "Weight", "sid", null],
          [[12, 1], "isFixedPitch", "boolean", !1],
          [[12, 2], "ItalicAngle", "number", 0],
          [[12, 3], "UnderlinePosition", "number", -100],
          [[12, 4], "UnderlineThickness", "number", 50],
          [[12, 5], "PaintType", "number", 0],
          [[12, 6], "CharstringType", "number", 2],
          [[12, 7], "FontMatrix", "array", [0.001, 0, 0, 0.001, 0, 0]],
          [13, "UniqueID", "number", null],
          [5, "FontBBox", "array", [0, 0, 0, 0]],
          [[12, 8], "StrokeWidth", "number", 0],
          [14, "XUID", "array", null],
          [15, "charset", it, ye],
          [16, "Encoding", at, ge],
          [17, "CharStrings", new fe(new ie()), null],
          [18, "Private", new ft(), null],
          [[12, 20], "SyntheticBase", "number", null],
          [[12, 21], "PostScript", "sid", null],
          [[12, 22], "BaseFontName", "sid", null],
          [[12, 23], "BaseFontBlend", "delta", null],
          [[12, 31], "CIDFontVersion", "number", 0],
          [[12, 32], "CIDFontRevision", "number", 0],
          [[12, 33], "CIDFontType", "number", 0],
          [[12, 34], "CIDCount", "number", 8720],
          [[12, 35], "UIDBase", "number", null],
          [[12, 37], "FDSelect", new fe(ct), null],
          [[12, 36], "FDArray", new fe(new ie(dt)), null],
          [[12, 38], "FontName", "sid", null],
        ]),
        pt = new r.AU({ length: r.mL, itemVariationStore: je }),
        gt = new he([
          [[12, 7], "FontMatrix", "array", [0.001, 0, 0, 0.001, 0, 0]],
          [17, "CharStrings", new fe(new ie()), null],
          [[12, 37], "FDSelect", new fe(ct), null],
          [[12, 36], "FDArray", new fe(new ie(dt)), null],
          [24, "vstore", new fe(pt), null],
          [25, "maxstack", "number", 193],
        ]);
      var yt = new r.bS(r.gl, {
        1: {
          hdrSize: r.w_,
          offSize: r.w_,
          nameIndex: new ie(new r.Ld("length")),
          topDictIndex: new ie(mt),
          stringIndex: new ie(new r.Ld("length")),
          globalSubrIndex: new ie(),
        },
        2: {
          hdrSize: r.w_,
          length: r.mL,
          topDict: gt,
          globalSubrIndex: new ie(),
        },
      });
      class bt {
        static decode(e) {
          return new bt(e);
        }
        decode() {
          this.stream.pos;
          let e = yt.decode(this.stream);
          for (let t in e) {
            let s = e[t];
            this[t] = s;
          }
          if (this.version < 2) {
            if (1 !== this.topDictIndex.length)
              throw new Error("Only a single font is allowed in CFF");
            this.topDict = this.topDictIndex[0];
          }
          return (this.isCIDFont = null != this.topDict.ROS), this;
        }
        string(e) {
          return this.version >= 2
            ? null
            : e < pe.length
            ? pe[e]
            : this.stringIndex[e - pe.length];
        }
        get postscriptName() {
          return this.version < 2 ? this.nameIndex[0] : null;
        }
        get fullName() {
          return this.string(this.topDict.FullName);
        }
        get familyName() {
          return this.string(this.topDict.FamilyName);
        }
        getCharString(e) {
          return (
            (this.stream.pos = this.topDict.CharStrings[e].offset),
            this.stream.readBuffer(this.topDict.CharStrings[e].length)
          );
        }
        getGlyphName(e) {
          if (this.version >= 2) return null;
          if (this.isCIDFont) return null;
          let { charset: t } = this.topDict;
          if (Array.isArray(t)) return t[e];
          if (0 === e) return ".notdef";
          switch (((e -= 1), t.version)) {
            case 0:
              return this.string(t.glyphs[e]);
            case 1:
            case 2:
              for (let s = 0; s < t.ranges.length; s++) {
                let r = t.ranges[s];
                if (r.offset <= e && e <= r.offset + r.nLeft)
                  return this.string(r.first + (e - r.offset));
              }
          }
          return null;
        }
        fdForGlyph(e) {
          if (!this.topDict.FDSelect) return null;
          switch (this.topDict.FDSelect.version) {
            case 0:
              return this.topDict.FDSelect.fds[e];
            case 3:
            case 4:
              let { ranges: t } = this.topDict.FDSelect,
                s = 0,
                r = t.length - 1;
              for (; s <= r; ) {
                let n = (s + r) >> 1;
                if (e < t[n].first) r = n - 1;
                else {
                  if (!(n < r && e >= t[n + 1].first)) return t[n].fd;
                  s = n + 1;
                }
              }
            default:
              throw new Error(
                `Unknown FDSelect version: ${this.topDict.FDSelect.version}`
              );
          }
        }
        privateDictForGlyph(e) {
          if (this.topDict.FDSelect) {
            let t = this.fdForGlyph(e);
            return this.topDict.FDArray[t]
              ? this.topDict.FDArray[t].Private
              : null;
          }
          return this.version < 2
            ? this.topDict.Private
            : this.topDict.FDArray[0].Private;
        }
        constructor(e) {
          (this.stream = e), this.decode();
        }
      }
      var wt = bt;
      let vt = new r.AU({ glyphIndex: r.mL, vertOriginY: r.Af });
      var _t = new r.AU({
        majorVersion: r.mL,
        minorVersion: r.mL,
        defaultVertOriginY: r.Af,
        numVertOriginYMetrics: r.mL,
        metrics: new r.mJ(vt, "numVertOriginYMetrics"),
      });
      let Lt = new r.AU({
          height: r.w_,
          width: r.w_,
          horiBearingX: r.cS,
          horiBearingY: r.cS,
          horiAdvance: r.w_,
          vertBearingX: r.cS,
          vertBearingY: r.cS,
          vertAdvance: r.w_,
        }),
        Ct = new r.AU({
          height: r.w_,
          width: r.w_,
          bearingX: r.cS,
          bearingY: r.cS,
          advance: r.w_,
        }),
        xt = new r.AU({ glyph: r.mL, xOffset: r.cS, yOffset: r.cS });
      class At {}
      class kt {}
      new r.bS("version", {
        1: { metrics: Ct, data: At },
        2: { metrics: Ct, data: kt },
        5: { data: kt },
        6: { metrics: Lt, data: At },
        7: { metrics: Lt, data: kt },
        8: {
          metrics: Ct,
          pad: new r.kV(r.w_),
          numComponents: r.mL,
          components: new r.mJ(xt, "numComponents"),
        },
        9: {
          metrics: Lt,
          pad: new r.kV(r.w_),
          numComponents: r.mL,
          components: new r.mJ(xt, "numComponents"),
        },
        17: { metrics: Ct, dataLen: r.U7, data: new r.lW("dataLen") },
        18: { metrics: Lt, dataLen: r.U7, data: new r.lW("dataLen") },
        19: { dataLen: r.U7, data: new r.lW("dataLen") },
      });
      let St = new r.AU({
          ascender: r.cS,
          descender: r.cS,
          widthMax: r.w_,
          caretSlopeNumerator: r.cS,
          caretSlopeDenominator: r.cS,
          caretOffset: r.cS,
          minOriginSB: r.cS,
          minAdvanceSB: r.cS,
          maxBeforeBL: r.cS,
          minAfterBL: r.cS,
          pad: new r.kV(r.cS, 2),
        }),
        It = new r.AU({ glyphCode: r.mL, offset: r.mL }),
        Pt = new r.bS(r.mL, {
          header: { imageFormat: r.mL, imageDataOffset: r.U7 },
          1: {
            offsetArray: new r.mJ(
              r.U7,
              (e) => e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1
            ),
          },
          2: { imageSize: r.U7, bigMetrics: Lt },
          3: {
            offsetArray: new r.mJ(
              r.mL,
              (e) => e.parent.lastGlyphIndex - e.parent.firstGlyphIndex + 1
            ),
          },
          4: {
            numGlyphs: r.U7,
            glyphArray: new r.mJ(It, (e) => e.numGlyphs + 1),
          },
          5: {
            imageSize: r.U7,
            bigMetrics: Lt,
            numGlyphs: r.U7,
            glyphCodeArray: new r.mJ(r.mL, "numGlyphs"),
          },
        }),
        Ut = new r.AU({
          firstGlyphIndex: r.mL,
          lastGlyphIndex: r.mL,
          subtable: new r.$J(r.U7, Pt),
        }),
        Jt = new r.AU({
          indexSubTableArray: new r.$J(r.U7, new r.mJ(Ut, 1), {
            type: "parent",
          }),
          indexTablesSize: r.U7,
          numberOfIndexSubTables: r.U7,
          colorRef: r.U7,
          hori: St,
          vert: St,
          startGlyphIndex: r.mL,
          endGlyphIndex: r.mL,
          ppemX: r.w_,
          ppemY: r.w_,
          bitDepth: r.w_,
          flags: new r.DL(r.w_, ["horizontal", "vertical"]),
        });
      var Tt = new r.AU({
        version: r.U7,
        numSizes: r.U7,
        sizes: new r.mJ(Jt, "numSizes"),
      });
      let Ot = new r.AU({
        ppem: r.mL,
        resolution: r.mL,
        imageOffsets: new r.mJ(
          new r.$J(r.U7, "void"),
          (e) => e.parent.parent.maxp.numGlyphs + 1
        ),
      });
      var Ft = new r.AU({
        version: r.mL,
        flags: new r.DL(r.mL, ["renderOutlines"]),
        numImgTables: r.U7,
        imageTables: new r.mJ(new r.$J(r.U7, Ot), "numImgTables"),
      });
      let Dt = new r.AU({ gid: r.mL, paletteIndex: r.mL }),
        Mt = new r.AU({ gid: r.mL, firstLayerIndex: r.mL, numLayers: r.mL });
      var Gt = new r.AU({
        version: r.mL,
        numBaseGlyphRecords: r.mL,
        baseGlyphRecord: new r.$J(r.U7, new r.mJ(Mt, "numBaseGlyphRecords")),
        layerRecords: new r.$J(r.U7, new r.mJ(Dt, "numLayerRecords"), {
          lazy: !0,
        }),
        numLayerRecords: r.mL,
      });
      let Et = new r.AU({ blue: r.w_, green: r.w_, red: r.w_, alpha: r.w_ });
      var Bt = new r.bS(r.mL, {
        header: {
          numPaletteEntries: r.mL,
          numPalettes: r.mL,
          numColorRecords: r.mL,
          colorRecords: new r.$J(r.U7, new r.mJ(Et, "numColorRecords")),
          colorRecordIndices: new r.mJ(r.mL, "numPalettes"),
        },
        0: {},
        1: {
          offsetPaletteTypeArray: new r.$J(r.U7, new r.mJ(r.U7, "numPalettes")),
          offsetPaletteLabelArray: new r.$J(
            r.U7,
            new r.mJ(r.mL, "numPalettes")
          ),
          offsetPaletteEntryLabelArray: new r.$J(
            r.U7,
            new r.mJ(r.mL, "numPaletteEntries")
          ),
        },
      });
      let Vt = new r.bS(r.mL, {
          1: { coordinate: r.Af },
          2: { coordinate: r.Af, referenceGlyph: r.mL, baseCoordPoint: r.mL },
          3: { coordinate: r.Af, deviceTable: new r.$J(r.mL, Oe) },
        }),
        zt = new r.AU({
          defaultIndex: r.mL,
          baseCoordCount: r.mL,
          baseCoords: new r.mJ(new r.$J(r.mL, Vt), "baseCoordCount"),
        }),
        Rt = new r.AU({
          tag: new r.Ld(4),
          minCoord: new r.$J(r.mL, Vt, { type: "parent" }),
          maxCoord: new r.$J(r.mL, Vt, { type: "parent" }),
        }),
        Nt = new r.AU({
          minCoord: new r.$J(r.mL, Vt),
          maxCoord: new r.$J(r.mL, Vt),
          featMinMaxCount: r.mL,
          featMinMaxRecords: new r.mJ(Rt, "featMinMaxCount"),
        }),
        Wt = new r.AU({
          tag: new r.Ld(4),
          minMax: new r.$J(r.mL, Nt, { type: "parent" }),
        }),
        Xt = new r.AU({
          baseValues: new r.$J(r.mL, zt),
          defaultMinMax: new r.$J(r.mL, Nt),
          baseLangSysCount: r.mL,
          baseLangSysRecords: new r.mJ(Wt, "baseLangSysCount"),
        }),
        qt = new r.AU({
          tag: new r.Ld(4),
          script: new r.$J(r.mL, Xt, { type: "parent" }),
        }),
        Ht = new r.mJ(qt, r.mL),
        jt = new r.mJ(new r.Ld(4), r.mL),
        Yt = new r.AU({
          baseTagList: new r.$J(r.mL, jt),
          baseScriptList: new r.$J(r.mL, Ht),
        });
      var $t = new r.bS(r.U7, {
        header: { horizAxis: new r.$J(r.mL, Yt), vertAxis: new r.$J(r.mL, Yt) },
        65536: {},
        65537: { itemVariationStore: new r.$J(r.U7, je) },
      });
      let Zt = new r.mJ(r.mL, r.mL),
        Kt = new r.AU({
          coverage: new r.$J(r.mL, Ue),
          glyphCount: r.mL,
          attachPoints: new r.mJ(new r.$J(r.mL, Zt), "glyphCount"),
        }),
        Qt = new r.bS(r.mL, {
          1: { coordinate: r.Af },
          2: { caretValuePoint: r.mL },
          3: { coordinate: r.Af, deviceTable: new r.$J(r.mL, Oe) },
        }),
        es = new r.mJ(new r.$J(r.mL, Qt), r.mL),
        ts = new r.AU({
          coverage: new r.$J(r.mL, Ue),
          ligGlyphCount: r.mL,
          ligGlyphs: new r.mJ(new r.$J(r.mL, es), "ligGlyphCount"),
        }),
        ss = new r.AU({
          markSetTableFormat: r.mL,
          markSetCount: r.mL,
          coverage: new r.mJ(new r.$J(r.U7, Ue), "markSetCount"),
        });
      var rs = new r.bS(r.U7, {
        header: {
          glyphClassDef: new r.$J(r.mL, Te),
          attachList: new r.$J(r.mL, Kt),
          ligCaretList: new r.$J(r.mL, ts),
          markAttachClassDef: new r.$J(r.mL, Te),
        },
        65536: {},
        65538: { markGlyphSetsDef: new r.$J(r.mL, ss) },
        65539: {
          markGlyphSetsDef: new r.$J(r.mL, ss),
          itemVariationStore: new r.$J(r.U7, je),
        },
      });
      let ns = new r.DL(r.mL, [
          "xPlacement",
          "yPlacement",
          "xAdvance",
          "yAdvance",
          "xPlaDevice",
          "yPlaDevice",
          "xAdvDevice",
          "yAdvDevice",
        ]),
        as = {
          xPlacement: r.Af,
          yPlacement: r.Af,
          xAdvance: r.Af,
          yAdvance: r.Af,
          xPlaDevice: new r.$J(r.mL, Oe, {
            type: "global",
            relativeTo: (e) => e.rel,
          }),
          yPlaDevice: new r.$J(r.mL, Oe, {
            type: "global",
            relativeTo: (e) => e.rel,
          }),
          xAdvDevice: new r.$J(r.mL, Oe, {
            type: "global",
            relativeTo: (e) => e.rel,
          }),
          yAdvDevice: new r.$J(r.mL, Oe, {
            type: "global",
            relativeTo: (e) => e.rel,
          }),
        };
      class ls {
        buildStruct(e) {
          let t = e;
          for (; !t[this.key] && t.parent; ) t = t.parent;
          if (!t[this.key]) return;
          let s = { rel: () => t._startOffset },
            n = t[this.key];
          for (let r in n) n[r] && (s[r] = as[r]);
          return new r.AU(s);
        }
        size(e, t) {
          return this.buildStruct(t).size(e, t);
        }
        decode(e, t) {
          let s = this.buildStruct(t).decode(e, t);
          return delete s.rel, s;
        }
        constructor(e = "valueFormat") {
          this.key = e;
        }
      }
      let is = new r.AU({
          secondGlyph: r.mL,
          value1: new ls("valueFormat1"),
          value2: new ls("valueFormat2"),
        }),
        os = new r.mJ(is, r.mL),
        us = new r.AU({
          value1: new ls("valueFormat1"),
          value2: new ls("valueFormat2"),
        }),
        cs = new r.bS(r.mL, {
          1: { xCoordinate: r.Af, yCoordinate: r.Af },
          2: { xCoordinate: r.Af, yCoordinate: r.Af, anchorPoint: r.mL },
          3: {
            xCoordinate: r.Af,
            yCoordinate: r.Af,
            xDeviceTable: new r.$J(r.mL, Oe),
            yDeviceTable: new r.$J(r.mL, Oe),
          },
        }),
        hs = new r.AU({
          entryAnchor: new r.$J(r.mL, cs, { type: "parent" }),
          exitAnchor: new r.$J(r.mL, cs, { type: "parent" }),
        }),
        fs = new r.AU({
          class: r.mL,
          markAnchor: new r.$J(r.mL, cs, { type: "parent" }),
        }),
        ds = new r.mJ(fs, r.mL),
        ms = new r.mJ(new r.$J(r.mL, cs), (e) => e.parent.classCount),
        ps = new r.mJ(ms, r.mL),
        gs = new r.mJ(new r.$J(r.mL, cs), (e) => e.parent.parent.classCount),
        ys = new r.mJ(gs, r.mL),
        bs = new r.mJ(new r.$J(r.mL, ys), r.mL),
        ws = new r.bS("lookupType", {
          1: new r.bS(r.mL, {
            1: {
              coverage: new r.$J(r.mL, Ue),
              valueFormat: ns,
              value: new ls(),
            },
            2: {
              coverage: new r.$J(r.mL, Ue),
              valueFormat: ns,
              valueCount: r.mL,
              values: new r.pW(new ls(), "valueCount"),
            },
          }),
          2: new r.bS(r.mL, {
            1: {
              coverage: new r.$J(r.mL, Ue),
              valueFormat1: ns,
              valueFormat2: ns,
              pairSetCount: r.mL,
              pairSets: new r.pW(new r.$J(r.mL, os), "pairSetCount"),
            },
            2: {
              coverage: new r.$J(r.mL, Ue),
              valueFormat1: ns,
              valueFormat2: ns,
              classDef1: new r.$J(r.mL, Te),
              classDef2: new r.$J(r.mL, Te),
              class1Count: r.mL,
              class2Count: r.mL,
              classRecords: new r.pW(
                new r.pW(us, "class2Count"),
                "class1Count"
              ),
            },
          }),
          3: {
            format: r.mL,
            coverage: new r.$J(r.mL, Ue),
            entryExitCount: r.mL,
            entryExitRecords: new r.mJ(hs, "entryExitCount"),
          },
          4: {
            format: r.mL,
            markCoverage: new r.$J(r.mL, Ue),
            baseCoverage: new r.$J(r.mL, Ue),
            classCount: r.mL,
            markArray: new r.$J(r.mL, ds),
            baseArray: new r.$J(r.mL, ps),
          },
          5: {
            format: r.mL,
            markCoverage: new r.$J(r.mL, Ue),
            ligatureCoverage: new r.$J(r.mL, Ue),
            classCount: r.mL,
            markArray: new r.$J(r.mL, ds),
            ligatureArray: new r.$J(r.mL, bs),
          },
          6: {
            format: r.mL,
            mark1Coverage: new r.$J(r.mL, Ue),
            mark2Coverage: new r.$J(r.mL, Ue),
            classCount: r.mL,
            mark1Array: new r.$J(r.mL, ds),
            mark2Array: new r.$J(r.mL, ps),
          },
          7: Be,
          8: Re,
          9: {
            posFormat: r.mL,
            lookupType: r.mL,
            extension: new r.$J(r.U7, null),
          },
        });
      ws.versions[9].extension.type = ws;
      var vs = new r.bS(r.U7, {
        header: {
          scriptList: new r.$J(r.mL, Le),
          featureList: new r.$J(r.mL, ke),
          lookupList: new r.$J(r.mL, new Ie(ws)),
        },
        65536: {},
        65537: { featureVariations: new r.$J(r.U7, et) },
      });
      let _s = new r.mJ(r.mL, r.mL),
        Ls = _s,
        Cs = new r.AU({
          glyph: r.mL,
          compCount: r.mL,
          components: new r.mJ(r.mL, (e) => e.compCount - 1),
        }),
        xs = new r.mJ(new r.$J(r.mL, Cs), r.mL),
        As = new r.bS("lookupType", {
          1: new r.bS(r.mL, {
            1: { coverage: new r.$J(r.mL, Ue), deltaGlyphID: r.Af },
            2: {
              coverage: new r.$J(r.mL, Ue),
              glyphCount: r.mL,
              substitute: new r.pW(r.mL, "glyphCount"),
            },
          }),
          2: {
            substFormat: r.mL,
            coverage: new r.$J(r.mL, Ue),
            count: r.mL,
            sequences: new r.pW(new r.$J(r.mL, _s), "count"),
          },
          3: {
            substFormat: r.mL,
            coverage: new r.$J(r.mL, Ue),
            count: r.mL,
            alternateSet: new r.pW(new r.$J(r.mL, Ls), "count"),
          },
          4: {
            substFormat: r.mL,
            coverage: new r.$J(r.mL, Ue),
            count: r.mL,
            ligatureSets: new r.pW(new r.$J(r.mL, xs), "count"),
          },
          5: Be,
          6: Re,
          7: {
            substFormat: r.mL,
            lookupType: r.mL,
            extension: new r.$J(r.U7, null),
          },
          8: {
            substFormat: r.mL,
            coverage: new r.$J(r.mL, Ue),
            backtrackCoverage: new r.mJ(
              new r.$J(r.mL, Ue),
              "backtrackGlyphCount"
            ),
            lookaheadGlyphCount: r.mL,
            lookaheadCoverage: new r.mJ(
              new r.$J(r.mL, Ue),
              "lookaheadGlyphCount"
            ),
            glyphCount: r.mL,
            substitutes: new r.mJ(r.mL, "glyphCount"),
          },
        });
      As.versions[7].extension.type = As;
      var ks = new r.bS(r.U7, {
        header: {
          scriptList: new r.$J(r.mL, Le),
          featureList: new r.$J(r.mL, ke),
          lookupList: new r.$J(r.mL, new Ie(As)),
        },
        65536: {},
        65537: { featureVariations: new r.$J(r.U7, et) },
      });
      let Ss = new r.mJ(r.mL, r.mL),
        Is = new r.AU({
          shrinkageEnableGSUB: new r.$J(r.mL, Ss),
          shrinkageDisableGSUB: new r.$J(r.mL, Ss),
          shrinkageEnableGPOS: new r.$J(r.mL, Ss),
          shrinkageDisableGPOS: new r.$J(r.mL, Ss),
          shrinkageJstfMax: new r.$J(r.mL, new Ie(ws)),
          extensionEnableGSUB: new r.$J(r.mL, Ss),
          extensionDisableGSUB: new r.$J(r.mL, Ss),
          extensionEnableGPOS: new r.$J(r.mL, Ss),
          extensionDisableGPOS: new r.$J(r.mL, Ss),
          extensionJstfMax: new r.$J(r.mL, new Ie(ws)),
        }),
        Ps = new r.mJ(new r.$J(r.mL, Is), r.mL),
        Us = new r.AU({ tag: new r.Ld(4), jstfLangSys: new r.$J(r.mL, Ps) }),
        Js = new r.AU({
          extenderGlyphs: new r.$J(r.mL, new r.mJ(r.mL, r.mL)),
          defaultLangSys: new r.$J(r.mL, Ps),
          langSysCount: r.mL,
          langSysRecords: new r.mJ(Us, "langSysCount"),
        }),
        Ts = new r.AU({
          tag: new r.Ld(4),
          script: new r.$J(r.mL, Js, { type: "parent" }),
        });
      var Os = new r.AU({
        version: r.U7,
        scriptCount: r.mL,
        scriptList: new r.mJ(Ts, "scriptCount"),
      });
      let Fs = new r.AU({
          entry: new (class {
            decode(e, t) {
              switch (this.size(0, t)) {
                case 1:
                  return e.readUInt8();
                case 2:
                  return e.readUInt16BE();
                case 3:
                  return e.readUInt24BE();
                case 4:
                  return e.readUInt32BE();
              }
            }
            size(e, t) {
              return (0, r.dB)(this._size, null, t);
            }
            constructor(e) {
              this._size = e;
            }
          })((e) => 1 + ((48 & e.parent.entryFormat) >> 4)),
          outerIndex: (e) => e.entry >> (1 + (15 & e.parent.entryFormat)),
          innerIndex: (e) =>
            e.entry & ((1 << (1 + (15 & e.parent.entryFormat))) - 1),
        }),
        Ds = new r.AU({
          entryFormat: r.mL,
          mapCount: r.mL,
          mapData: new r.mJ(Fs, "mapCount"),
        });
      var Ms = new r.AU({
        majorVersion: r.mL,
        minorVersion: r.mL,
        itemVariationStore: new r.$J(r.U7, je),
        advanceWidthMapping: new r.$J(r.U7, Ds),
        LSBMapping: new r.$J(r.U7, Ds),
        RSBMapping: new r.$J(r.U7, Ds),
      });
      let Gs = new r.AU({ format: r.U7, length: r.U7, offset: r.U7 }),
        Es = new r.AU({
          reserved: new r.kV(r.mL, 2),
          cbSignature: r.U7,
          signature: new r.lW("cbSignature"),
        });
      var Bs = new r.AU({
        ulVersion: r.U7,
        usNumSigs: r.mL,
        usFlag: r.mL,
        signatures: new r.mJ(Gs, "usNumSigs"),
        signatureBlocks: new r.mJ(Es, "usNumSigs"),
      });
      let Vs = new r.AU({
        rangeMaxPPEM: r.mL,
        rangeGaspBehavior: new r.DL(r.mL, [
          "grayscale",
          "gridfit",
          "symmetricSmoothing",
          "symmetricGridfit",
        ]),
      });
      var zs = new r.AU({
        version: r.mL,
        numRanges: r.mL,
        gaspRanges: new r.mJ(Vs, "numRanges"),
      });
      let Rs = new r.AU({
        pixelSize: r.w_,
        maximumWidth: r.w_,
        widths: new r.mJ(r.w_, (e) => e.parent.parent.maxp.numGlyphs),
      });
      var Ns = new r.AU({
        version: r.mL,
        numRecords: r.Af,
        sizeDeviceRecord: r.LB,
        records: new r.mJ(Rs, "numRecords"),
      });
      let Ws = new r.AU({ left: r.mL, right: r.mL, value: r.Af }),
        Xs = new r.AU({
          firstGlyph: r.mL,
          nGlyphs: r.mL,
          offsets: new r.mJ(r.mL, "nGlyphs"),
          max: (e) => e.offsets.length && Math.max.apply(Math, e.offsets),
        }),
        qs = new r.AU({
          off: (e) => e._startOffset - e.parent.parent._startOffset,
          len: (e) =>
            ((e.parent.leftTable.max - e.off) / e.parent.rowWidth + 1) *
            (e.parent.rowWidth / 2),
          values: new r.pW(r.Af, "len"),
        }),
        Hs = new r.bS("format", {
          0: {
            nPairs: r.mL,
            searchRange: r.mL,
            entrySelector: r.mL,
            rangeShift: r.mL,
            pairs: new r.mJ(Ws, "nPairs"),
          },
          2: {
            rowWidth: r.mL,
            leftTable: new r.$J(r.mL, Xs, { type: "parent" }),
            rightTable: new r.$J(r.mL, Xs, { type: "parent" }),
            array: new r.$J(r.mL, qs, { type: "parent" }),
          },
          3: {
            glyphCount: r.mL,
            kernValueCount: r.w_,
            leftClassCount: r.w_,
            rightClassCount: r.w_,
            flags: r.w_,
            kernValue: new r.mJ(r.Af, "kernValueCount"),
            leftClass: new r.mJ(r.w_, "glyphCount"),
            rightClass: new r.mJ(r.w_, "glyphCount"),
            kernIndex: new r.mJ(
              r.w_,
              (e) => e.leftClassCount * e.rightClassCount
            ),
          },
        }),
        js = new r.bS("version", {
          0: {
            subVersion: r.mL,
            length: r.mL,
            format: r.w_,
            coverage: new r.DL(r.w_, [
              "horizontal",
              "minimum",
              "crossStream",
              "override",
            ]),
            subtable: Hs,
            padding: new r.kV(r.w_, (e) => e.length - e._currentOffset),
          },
          1: {
            length: r.U7,
            coverage: new r.DL(r.w_, [
              null,
              null,
              null,
              null,
              null,
              "variation",
              "crossStream",
              "vertical",
            ]),
            format: r.w_,
            tupleIndex: r.mL,
            subtable: Hs,
            padding: new r.kV(r.w_, (e) => e.length - e._currentOffset),
          },
        });
      var Ys = new r.bS(r.mL, {
          0: { nTables: r.mL, tables: new r.mJ(js, "nTables") },
          1: {
            reserved: new r.kV(r.mL),
            nTables: r.U7,
            tables: new r.mJ(js, "nTables"),
          },
        }),
        $s = new r.AU({
          version: r.mL,
          numGlyphs: r.mL,
          yPels: new r.mJ(r.w_, "numGlyphs"),
        }),
        Zs = new r.AU({
          version: r.mL,
          fontNumber: r.U7,
          pitch: r.mL,
          xHeight: r.mL,
          style: r.mL,
          typeFamily: r.mL,
          capHeight: r.mL,
          symbolSet: r.mL,
          typeface: new r.Ld(16),
          characterComplement: new r.Ld(8),
          fileName: new r.Ld(6),
          strokeWeight: new r.Ld(1),
          widthType: new r.Ld(1),
          serifStyle: r.w_,
          reserved: new r.kV(r.w_),
        });
      let Ks = new r.AU({
          bCharSet: r.w_,
          xRatio: r.w_,
          yStartRatio: r.w_,
          yEndRatio: r.w_,
        }),
        Qs = new r.AU({ yPelHeight: r.mL, yMax: r.Af, yMin: r.Af }),
        er = new r.AU({
          recs: r.mL,
          startsz: r.w_,
          endsz: r.w_,
          entries: new r.mJ(Qs, "recs"),
        });
      var tr = new r.AU({
          version: r.mL,
          numRecs: r.mL,
          numRatios: r.mL,
          ratioRanges: new r.mJ(Ks, "numRatios"),
          offsets: new r.mJ(r.mL, "numRatios"),
          groups: new r.mJ(er, "numRecs"),
        }),
        sr = new r.AU({
          version: r.mL,
          ascent: r.Af,
          descent: r.Af,
          lineGap: r.Af,
          advanceHeightMax: r.Af,
          minTopSideBearing: r.Af,
          minBottomSideBearing: r.Af,
          yMaxExtent: r.Af,
          caretSlopeRise: r.Af,
          caretSlopeRun: r.Af,
          caretOffset: r.Af,
          reserved: new r.kV(r.Af, 4),
          metricDataFormat: r.Af,
          numberOfMetrics: r.mL,
        });
      let rr = new r.AU({ advance: r.mL, bearing: r.Af });
      var nr = new r.AU({
        metrics: new r.pW(rr, (e) => e.parent.vhea.numberOfMetrics),
        bearings: new r.pW(
          r.Af,
          (e) => e.parent.maxp.numGlyphs - e.parent.vhea.numberOfMetrics
        ),
      });
      let ar = new r.gb(16, "BE", 14),
        lr = new r.AU({ fromCoord: ar, toCoord: ar }),
        ir = new r.AU({
          pairCount: r.mL,
          correspondence: new r.mJ(lr, "pairCount"),
        });
      var or = new r.AU({
        version: r.E2,
        axisCount: r.U7,
        segment: new r.mJ(ir, "axisCount"),
      });
      class ur {
        getItem(e) {
          if (null == this._items[e]) {
            let t = this.stream.pos;
            (this.stream.pos =
              this.base + this.type.size(null, this.parent) * e),
              (this._items[e] = this.type.decode(this.stream, this.parent)),
              (this.stream.pos = t);
          }
          return this._items[e];
        }
        inspect() {
          return `[UnboundedArray ${this.type.constructor.name}]`;
        }
        constructor(e, t, s) {
          (this.type = e),
            (this.stream = t),
            (this.parent = s),
            (this.base = this.stream.pos),
            (this._items = []);
        }
      }
      class cr extends r.mJ {
        decode(e, t) {
          return new ur(this.type, e, t);
        }
        constructor(e) {
          super(e, 0);
        }
      }
      let hr = function (e = r.mL) {
        e = new (class {
          decode(e, t) {
            return (t = t.parent.parent), this.type.decode(e, t);
          }
          size(e, t) {
            return (t = t.parent.parent), this.type.size(e, t);
          }
          encode(e, t, s) {
            return (s = s.parent.parent), this.type.encode(e, t, s);
          }
          constructor(e) {
            this.type = e;
          }
        })(e);
        let t = new r.AU({
            unitSize: r.mL,
            nUnits: r.mL,
            searchRange: r.mL,
            entrySelector: r.mL,
            rangeShift: r.mL,
          }),
          s = new r.AU({ lastGlyph: r.mL, firstGlyph: r.mL, value: e }),
          n = new r.AU({
            lastGlyph: r.mL,
            firstGlyph: r.mL,
            values: new r.$J(
              r.mL,
              new r.mJ(e, (e) => e.lastGlyph - e.firstGlyph + 1),
              { type: "parent" }
            ),
          }),
          a = new r.AU({ glyph: r.mL, value: e });
        return new r.bS(r.mL, {
          0: { values: new cr(e) },
          2: {
            binarySearchHeader: t,
            segments: new r.mJ(s, (e) => e.binarySearchHeader.nUnits),
          },
          4: {
            binarySearchHeader: t,
            segments: new r.mJ(n, (e) => e.binarySearchHeader.nUnits),
          },
          6: {
            binarySearchHeader: t,
            segments: new r.mJ(a, (e) => e.binarySearchHeader.nUnits),
          },
          8: { firstGlyph: r.mL, count: r.mL, values: new r.mJ(e, "count") },
        });
      };
      function fr(e = {}, t = r.mL) {
        let s = Object.assign({ newState: r.mL, flags: r.mL }, e),
          n = new r.AU(s),
          a = new cr(new r.mJ(r.mL, (e) => e.nClasses));
        return new r.AU({
          nClasses: r.U7,
          classTable: new r.$J(r.U7, new hr(t)),
          stateArray: new r.$J(r.U7, a),
          entryTable: new r.$J(r.U7, new cr(n)),
        });
      }
      let dr = new r.bS("format", {
        0: { deltas: new r.mJ(r.Af, 32) },
        1: { deltas: new r.mJ(r.Af, 32), mappingData: new hr(r.mL) },
        2: { standardGlyph: r.mL, controlPoints: new r.mJ(r.mL, 32) },
        3: {
          standardGlyph: r.mL,
          controlPoints: new r.mJ(r.mL, 32),
          mappingData: new hr(r.mL),
        },
      });
      var mr = new r.AU({
        version: r.E2,
        format: r.mL,
        defaultBaseline: r.mL,
        subtable: dr,
      });
      let pr = new r.AU({
          setting: r.mL,
          nameIndex: r.Af,
          name: (e) =>
            e.parent.parent.parent.name.records.fontFeatures[e.nameIndex],
        }),
        gr = new r.AU({
          feature: r.mL,
          nSettings: r.mL,
          settingTable: new r.$J(r.U7, new r.mJ(pr, "nSettings"), {
            type: "parent",
          }),
          featureFlags: new r.DL(r.w_, [
            null,
            null,
            null,
            null,
            null,
            null,
            "hasDefault",
            "exclusive",
          ]),
          defaultSetting: r.w_,
          nameIndex: r.Af,
          name: (e) => e.parent.parent.name.records.fontFeatures[e.nameIndex],
        });
      var yr = new r.AU({
        version: r.E2,
        featureNameCount: r.mL,
        reserved1: new r.kV(r.mL),
        reserved2: new r.kV(r.U7),
        featureNames: new r.mJ(gr, "featureNameCount"),
      });
      let br = new r.AU({
          axisTag: new r.Ld(4),
          minValue: r.E2,
          defaultValue: r.E2,
          maxValue: r.E2,
          flags: r.mL,
          nameID: r.mL,
          name: (e) => e.parent.parent.name.records.fontFeatures[e.nameID],
        }),
        wr = new r.AU({
          nameID: r.mL,
          name: (e) => e.parent.parent.name.records.fontFeatures[e.nameID],
          flags: r.mL,
          coord: new r.mJ(r.E2, (e) => e.parent.axisCount),
          postscriptNameID: new r.Fi(
            r.mL,
            (e) => e.parent.instanceSize - e._currentOffset > 0
          ),
        });
      var vr = new r.AU({
        version: r.E2,
        offsetToData: r.mL,
        countSizePairs: r.mL,
        axisCount: r.mL,
        axisSize: r.mL,
        instanceCount: r.mL,
        instanceSize: r.mL,
        axis: new r.mJ(br, "axisCount"),
        instance: new r.mJ(wr, "instanceCount"),
      });
      let _r = new r.gb(16, "BE", 14);
      var Lr = new r.AU({
        version: r.mL,
        reserved: new r.kV(r.mL),
        axisCount: r.mL,
        globalCoordCount: r.mL,
        globalCoords: new r.$J(
          r.U7,
          new r.mJ(new r.mJ(_r, "axisCount"), "globalCoordCount")
        ),
        glyphCount: r.mL,
        flags: r.mL,
        offsetToData: r.U7,
        offsets: new r.mJ(
          new r.$J(
            class {
              static decode(e, t) {
                return t.flags ? e.readUInt32BE() : 2 * e.readUInt16BE();
              }
            },
            "void",
            { relativeTo: (e) => e.offsetToData, allowNull: !1 }
          ),
          (e) => e.glyphCount + 1
        ),
      });
      let Cr = new r.AU({
          length: r.mL,
          coverage: r.mL,
          subFeatureFlags: r.U7,
          stateTable: new (function (e = {}, t = r.mL) {
            let s = new r.AU({
                version: () => 8,
                firstGlyph: r.mL,
                values: new r.mJ(r.w_, r.mL),
              }),
              n = Object.assign(
                {
                  newStateOffset: r.mL,
                  newState: (e) =>
                    (e.newStateOffset -
                      (e.parent.stateArray.base - e.parent._startOffset)) /
                    e.parent.nClasses,
                  flags: r.mL,
                },
                e
              ),
              a = new r.AU(n),
              l = new cr(new r.mJ(r.w_, (e) => e.nClasses));
            return new r.AU({
              nClasses: r.mL,
              classTable: new r.$J(r.mL, s),
              stateArray: new r.$J(r.mL, l),
              entryTable: new r.$J(r.mL, new cr(a)),
            });
          })(),
        }),
        xr = new r.AU({
          justClass: r.U7,
          beforeGrowLimit: r.E2,
          beforeShrinkLimit: r.E2,
          afterGrowLimit: r.E2,
          afterShrinkLimit: r.E2,
          growFlags: r.mL,
          shrinkFlags: r.mL,
        }),
        Ar = new r.mJ(xr, r.U7),
        kr = new r.bS("actionType", {
          0: {
            lowerLimit: r.E2,
            upperLimit: r.E2,
            order: r.mL,
            glyphs: new r.mJ(r.mL, r.mL),
          },
          1: { addGlyph: r.mL },
          2: { substThreshold: r.E2, addGlyph: r.mL, substGlyph: r.mL },
          3: {},
          4: {
            variationAxis: r.U7,
            minimumLimit: r.E2,
            noStretchValue: r.E2,
            maximumLimit: r.E2,
          },
          5: { flags: r.mL, glyph: r.mL },
        }),
        Sr = new r.AU({
          actionClass: r.mL,
          actionType: r.mL,
          actionLength: r.U7,
          actionData: kr,
          padding: new r.kV(r.w_, (e) => e.actionLength - e._currentOffset),
        }),
        Ir = new r.mJ(Sr, r.U7),
        Pr = new r.AU({ lookupTable: new hr(new r.$J(r.mL, Ir)) }),
        Ur = new r.AU({
          classTable: new r.$J(r.mL, Cr, { type: "parent" }),
          wdcOffset: r.mL,
          postCompensationTable: new r.$J(r.mL, Pr, { type: "parent" }),
          widthDeltaClusters: new hr(
            new r.$J(r.mL, Ar, {
              type: "parent",
              relativeTo: (e) => e.wdcOffset,
            })
          ),
        });
      var Jr = new r.AU({
        version: r.U7,
        format: r.mL,
        horizontal: new r.$J(r.mL, Ur),
        vertical: new r.$J(r.mL, Ur),
      });
      let Tr = { action: r.mL },
        Or = { markIndex: r.mL, currentIndex: r.mL },
        Fr = { currentInsertIndex: r.mL, markedInsertIndex: r.mL },
        Dr = new r.AU({ items: new cr(new r.$J(r.U7, new hr())) }),
        Mr = new r.bS("type", {
          0: { stateTable: new fr() },
          1: { stateTable: new fr(Or), substitutionTable: new r.$J(r.U7, Dr) },
          2: {
            stateTable: new fr(Tr),
            ligatureActions: new r.$J(r.U7, new cr(r.U7)),
            components: new r.$J(r.U7, new cr(r.mL)),
            ligatureList: new r.$J(r.U7, new cr(r.mL)),
          },
          4: { lookupTable: new hr() },
          5: {
            stateTable: new fr(Fr),
            insertionActions: new r.$J(r.U7, new cr(r.mL)),
          },
        }),
        Gr = new r.AU({
          length: r.U7,
          coverage: r.Un,
          type: r.w_,
          subFeatureFlags: r.U7,
          table: Mr,
          padding: new r.kV(r.w_, (e) => e.length - e._currentOffset),
        }),
        Er = new r.AU({
          featureType: r.mL,
          featureSetting: r.mL,
          enableFlags: r.U7,
          disableFlags: r.U7,
        }),
        Br = new r.AU({
          defaultFlags: r.U7,
          chainLength: r.U7,
          nFeatureEntries: r.U7,
          nSubtables: r.U7,
          features: new r.mJ(Er, "nFeatureEntries"),
          subtables: new r.mJ(Gr, "nSubtables"),
        });
      var Vr = new r.AU({
        version: r.mL,
        unused: new r.kV(r.mL),
        nChains: r.U7,
        chains: new r.mJ(Br, "nChains"),
      });
      let zr = new r.AU({ left: r.Af, top: r.Af, right: r.Af, bottom: r.Af });
      var Rr = new r.AU({
        version: r.E2,
        format: r.mL,
        lookupTable: new hr(zr),
      });
      let Nr = {};
      var Wr = Nr;
      (Nr.cmap = T),
        (Nr.head = O),
        (Nr.hhea = F),
        (Nr.hmtx = M),
        (Nr.maxp = G),
        (Nr.name = Y),
        (Nr["OS/2"] = Q),
        (Nr.post = ee),
        (Nr.fpgm = se),
        (Nr.loca = ne),
        (Nr.prep = ae),
        (Nr["cvt "] = te),
        (Nr.glyf = le),
        (Nr["CFF "] = wt),
        (Nr.CFF2 = wt),
        (Nr.VORG = _t),
        (Nr.EBLC = Tt),
        (Nr.CBLC = Nr.EBLC),
        (Nr.sbix = Ft),
        (Nr.COLR = Gt),
        (Nr.CPAL = Bt),
        (Nr.BASE = $t),
        (Nr.GDEF = rs),
        (Nr.GPOS = vs),
        (Nr.GSUB = ks),
        (Nr.JSTF = Os),
        (Nr.HVAR = Ms),
        (Nr.DSIG = Bs),
        (Nr.gasp = zs),
        (Nr.hdmx = Ns),
        (Nr.kern = Ys),
        (Nr.LTSH = $s),
        (Nr.PCLT = Zs),
        (Nr.VDMX = tr),
        (Nr.vhea = sr),
        (Nr.vmtx = nr),
        (Nr.avar = or),
        (Nr.bsln = mr),
        (Nr.feat = yr),
        (Nr.fvar = vr),
        (Nr.gvar = Lr),
        (Nr.just = Jr),
        (Nr.morx = Vr),
        (Nr.opbd = Rr);
      let Xr = new r.AU({
          tag: new r.Ld(4),
          checkSum: r.U7,
          offset: new r.$J(r.U7, "void", { type: "global" }),
          length: r.U7,
        }),
        qr = new r.AU({
          tag: new r.Ld(4),
          numTables: r.mL,
          searchRange: r.mL,
          entrySelector: r.mL,
          rangeShift: r.mL,
          tables: new r.mJ(Xr, "numTables"),
        });
      (qr.process = function () {
        let e = {};
        for (let t of this.tables) e[t.tag] = t;
        this.tables = e;
      }),
        (qr.preEncode = function () {
          if (!Array.isArray(this.tables)) {
            let e = [];
            for (let t in this.tables) {
              let s = this.tables[t];
              s &&
                e.push({
                  tag: t,
                  checkSum: 0,
                  offset: new r.ox(Wr[t], s),
                  length: Wr[t].size(s),
                });
            }
            this.tables = e;
          }
          (this.tag = "true"), (this.numTables = this.tables.length);
          let e = Math.floor(Math.log(this.numTables) / Math.LN2),
            t = Math.pow(2, e);
          (this.searchRange = 16 * t),
            (this.entrySelector = Math.log(t) / Math.LN2),
            (this.rangeShift = 16 * this.numTables - this.searchRange);
        });
      var Hr = qr;
      function jr(e, t) {
        let s = 0,
          r = e.length - 1;
        for (; s <= r; ) {
          let n = (s + r) >> 1,
            a = t(e[n]);
          if (a < 0) r = n - 1;
          else {
            if (!(a > 0)) return n;
            s = n + 1;
          }
        }
        return -1;
      }
      function Yr(e, t) {
        let s = [];
        for (; e < t; ) s.push(e++);
        return s;
      }
      const $r = new TextDecoder("ascii"),
        Zr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Kr = new Uint8Array(256);
      for (let Rl = 0; Rl < Zr.length; Rl++) Kr[Zr.charCodeAt(Rl)] = Rl;
      function Qr(e) {
        let t = 0.75 * e.length;
        "=" === e[e.length - 1] && (t--, "=" === e[e.length - 2] && t--);
        let s = new Uint8Array(t),
          r = 0;
        for (let n = 0, a = e.length; n < a; n += 4) {
          let t = Kr[e.charCodeAt(n)],
            a = Kr[e.charCodeAt(n + 1)],
            l = Kr[e.charCodeAt(n + 2)],
            i = Kr[e.charCodeAt(n + 3)];
          (s[r++] = (t << 2) | (a >> 4)),
            (s[r++] = ((15 & a) << 4) | (l >> 2)),
            (s[r++] = ((3 & l) << 6) | (63 & i));
        }
        return s;
      }
      class en {
        findSubtable(e, t) {
          for (let [s, r] of t)
            for (let t of e.tables)
              if (t.platformID === s && t.encodingID === r) return t.table;
          return null;
        }
        lookup(e, t) {
          if (this.encoding) e = this.encoding.get(e) || e;
          else if (t) {
            let s = this.getVariationSelector(e, t);
            if (s) return s;
          }
          let s = this.cmap;
          switch (s.version) {
            case 0:
              return s.codeMap.get(e) || 0;
            case 4: {
              let t = 0,
                r = s.segCount - 1;
              for (; t <= r; ) {
                let n = (t + r) >> 1;
                if (e < s.startCode.get(n)) r = n - 1;
                else {
                  if (!(e > s.endCode.get(n))) {
                    let t,
                      r = s.idRangeOffset.get(n);
                    if (0 === r) t = e + s.idDelta.get(n);
                    else {
                      let a =
                        r / 2 + (e - s.startCode.get(n)) - (s.segCount - n);
                      (t = s.glyphIndexArray.get(a) || 0),
                        0 !== t && (t += s.idDelta.get(n));
                    }
                    return 65535 & t;
                  }
                  t = n + 1;
                }
              }
              return 0;
            }
            case 8:
              throw new Error("TODO: cmap format 8");
            case 6:
            case 10:
              return s.glyphIndices.get(e - s.firstCode) || 0;
            case 12:
            case 13: {
              let t = 0,
                r = s.nGroups - 1;
              for (; t <= r; ) {
                let n = (t + r) >> 1,
                  a = s.groups.get(n);
                if (e < a.startCharCode) r = n - 1;
                else {
                  if (!(e > a.endCharCode))
                    return 12 === s.version
                      ? a.glyphID + (e - a.startCharCode)
                      : a.glyphID;
                  t = n + 1;
                }
              }
              return 0;
            }
            case 14:
              throw new Error("TODO: cmap format 14");
            default:
              throw new Error(`Unknown cmap format ${s.version}`);
          }
        }
        getVariationSelector(e, t) {
          if (!this.uvs) return 0;
          let s = this.uvs.varSelectors.toArray(),
            r = jr(s, (e) => t - e.varSelector),
            n = s[r];
          return (
            -1 !== r &&
              n.defaultUVS &&
              (r = jr(n.defaultUVS, (t) =>
                e < t.startUnicodeValue
                  ? -1
                  : e > t.startUnicodeValue + t.additionalCount
                  ? 1
                  : 0
              )),
            -1 !== r &&
            n.nonDefaultUVS &&
            ((r = jr(n.nonDefaultUVS, (t) => e - t.unicodeValue)), -1 !== r)
              ? n.nonDefaultUVS[r].glyphID
              : 0
          );
        }
        getCharacterSet() {
          let e = this.cmap;
          switch (e.version) {
            case 0:
              return Yr(0, e.codeMap.length);
            case 4: {
              let t = [],
                s = e.endCode.toArray();
              for (let r = 0; r < s.length; r++) {
                let n = s[r] + 1,
                  a = e.startCode.get(r);
                t.push(...Yr(a, n));
              }
              return t;
            }
            case 8:
              throw new Error("TODO: cmap format 8");
            case 6:
            case 10:
              return Yr(e.firstCode, e.firstCode + e.glyphIndices.length);
            case 12:
            case 13: {
              let t = [];
              for (let s of e.groups.toArray())
                t.push(...Yr(s.startCharCode, s.endCharCode + 1));
              return t;
            }
            case 14:
              throw new Error("TODO: cmap format 14");
            default:
              throw new Error(`Unknown cmap format ${e.version}`);
          }
        }
        codePointsForGlyph(e) {
          let t = this.cmap;
          switch (t.version) {
            case 0: {
              let s = [];
              for (let r = 0; r < 256; r++) t.codeMap.get(r) === e && s.push(r);
              return s;
            }
            case 4: {
              let r = [];
              for (let n = 0; n < t.segCount; n++) {
                let a = t.endCode.get(n),
                  l = t.startCode.get(n),
                  i = t.idRangeOffset.get(n),
                  o = t.idDelta.get(n);
                for (var s = l; s <= a; s++) {
                  let a = 0;
                  if (0 === i) a = s + o;
                  else {
                    let e = i / 2 + (s - l) - (t.segCount - n);
                    (a = t.glyphIndexArray.get(e) || 0), 0 !== a && (a += o);
                  }
                  a === e && r.push(s);
                }
              }
              return r;
            }
            case 12: {
              let s = [];
              for (let r of t.groups.toArray())
                e >= r.glyphID &&
                  e <= r.glyphID + (r.endCharCode - r.startCharCode) &&
                  s.push(r.startCharCode + (e - r.glyphID));
              return s;
            }
            case 13: {
              let s = [];
              for (let r of t.groups.toArray())
                e === r.glyphID &&
                  s.push(...Yr(r.startCharCode, r.endCharCode + 1));
              return s;
            }
            default:
              throw new Error(`Unknown cmap format ${t.version}`);
          }
        }
        constructor(e) {
          if (
            ((this.encoding = null),
            (this.cmap = this.findSubtable(e, [
              [3, 10],
              [0, 6],
              [0, 4],
              [3, 1],
              [0, 3],
              [0, 2],
              [0, 1],
              [0, 0],
            ])),
            !this.cmap)
          )
            for (let t of e.tables) {
              let e = R(E(t.platformID, t.encodingID, t.table.language - 1));
              e && ((this.cmap = t.table), (this.encoding = e));
            }
          if (!this.cmap)
            throw new Error("Could not find a supported cmap table");
          (this.uvs = this.findSubtable(e, [[0, 5]])),
            this.uvs && 14 !== this.uvs.version && (this.uvs = null);
        }
      }
      (0, a.__decorate)([L], en.prototype, "getCharacterSet", null),
        (0, a.__decorate)([L], en.prototype, "codePointsForGlyph", null);
      class tn {
        process(e, t) {
          for (let s = 0; s < e.length - 1; s++) {
            let r = e[s].id,
              n = e[s + 1].id;
            t[s].xAdvance += this.getKerning(r, n);
          }
        }
        getKerning(e, t) {
          let s = 0;
          for (let r of this.kern.tables) {
            if (r.coverage.crossStream) continue;
            switch (r.version) {
              case 0:
                if (!r.coverage.horizontal) continue;
                break;
              case 1:
                if (r.coverage.vertical || r.coverage.variation) continue;
                break;
              default:
                throw new Error(
                  `Unsupported kerning table version ${r.version}`
                );
            }
            let n = 0,
              a = r.subtable;
            switch (r.format) {
              case 0:
                let s = jr(a.pairs, function (s) {
                  return e - s.left || t - s.right;
                });
                s >= 0 && (n = a.pairs[s].value);
                break;
              case 2:
                let l = 0,
                  i = 0;
                (l =
                  e >= a.leftTable.firstGlyph &&
                  e < a.leftTable.firstGlyph + a.leftTable.nGlyphs
                    ? a.leftTable.offsets[e - a.leftTable.firstGlyph]
                    : a.array.off),
                  t >= a.rightTable.firstGlyph &&
                    t < a.rightTable.firstGlyph + a.rightTable.nGlyphs &&
                    (i = a.rightTable.offsets[t - a.rightTable.firstGlyph]);
                let o = (l + i - a.array.off) / 2;
                n = a.array.values.get(o);
                break;
              case 3:
                if (e >= a.glyphCount || t >= a.glyphCount) return 0;
                n =
                  a.kernValue[
                    a.kernIndex[
                      a.leftClass[e] * a.rightClassCount + a.rightClass[t]
                    ]
                  ];
                break;
              default:
                throw new Error(
                  `Unsupported kerning sub-table format ${r.format}`
                );
            }
            r.coverage.override ? (s = n) : (s += n);
          }
          return s;
        }
        constructor(e) {
          this.kern = e.kern;
        }
      }
      class sn {
        positionGlyphs(e, t) {
          let s = 0,
            r = 0;
          for (let n = 0; n < e.length; n++) {
            e[n].isMark
              ? (r = n)
              : (s !== r && this.positionCluster(e, t, s, r), (s = r = n));
          }
          return s !== r && this.positionCluster(e, t, s, r), t;
        }
        positionCluster(e, t, s, r) {
          let n = e[s],
            a = n.cbox.copy();
          n.codePoints.length > 1 &&
            (a.minX +=
              ((n.codePoints.length - 1) * a.width) / n.codePoints.length);
          let l = -t[s].xAdvance,
            i = 0,
            o = this.font.unitsPerEm / 16;
          for (let u = s + 1; u <= r; u++) {
            let s = e[u],
              r = s.cbox,
              n = t[u],
              c = this.getCombiningClass(s.codePoints[0]);
            if ("Not_Reordered" !== c) {
              switch (((n.xOffset = n.yOffset = 0), c)) {
                case "Double_Above":
                case "Double_Below":
                  n.xOffset += a.minX - r.width / 2 - r.minX;
                  break;
                case "Attached_Below_Left":
                case "Below_Left":
                case "Above_Left":
                  n.xOffset += a.minX - r.minX;
                  break;
                case "Attached_Above_Right":
                case "Below_Right":
                case "Above_Right":
                  n.xOffset += a.maxX - r.width - r.minX;
                  break;
                default:
                  n.xOffset += a.minX + (a.width - r.width) / 2 - r.minX;
              }
              switch (c) {
                case "Double_Below":
                case "Below_Left":
                case "Below":
                case "Below_Right":
                case "Attached_Below_Left":
                case "Attached_Below":
                  ("Attached_Below_Left" !== c && "Attached_Below" !== c) ||
                    (a.minY += o),
                    (n.yOffset = -a.minY - r.maxY),
                    (a.minY += r.height);
                  break;
                case "Double_Above":
                case "Above_Left":
                case "Above":
                case "Above_Right":
                case "Attached_Above":
                case "Attached_Above_Right":
                  ("Attached_Above" !== c && "Attached_Above_Right" !== c) ||
                    (a.maxY += o),
                    (n.yOffset = a.maxY - r.minY),
                    (a.maxY += r.height);
              }
              (n.xAdvance = n.yAdvance = 0), (n.xOffset += l), (n.yOffset += i);
            } else (l -= n.xAdvance), (i -= n.yAdvance);
          }
        }
        getCombiningClass(e) {
          let t = (0, i.gy)(e);
          if (3584 === (-256 & e))
            if ("Not_Reordered" === t)
              switch (e) {
                case 3633:
                case 3636:
                case 3637:
                case 3638:
                case 3639:
                case 3655:
                case 3660:
                case 3645:
                case 3662:
                  return "Above_Right";
                case 3761:
                case 3764:
                case 3765:
                case 3766:
                case 3767:
                case 3771:
                case 3788:
                case 3789:
                  return "Above";
                case 3772:
                  return "Below";
              }
            else if (3642 === e) return "Below_Right";
          switch (t) {
            case "CCC10":
            case "CCC11":
            case "CCC12":
            case "CCC13":
            case "CCC14":
            case "CCC15":
            case "CCC16":
            case "CCC17":
            case "CCC18":
            case "CCC20":
            case "CCC22":
            case "CCC29":
            case "CCC32":
            case "CCC118":
            case "CCC129":
            case "CCC132":
              return "Below";
            case "CCC23":
              return "Attached_Above";
            case "CCC24":
            case "CCC107":
              return "Above_Right";
            case "CCC25":
            case "CCC19":
              return "Above_Left";
            case "CCC26":
            case "CCC27":
            case "CCC28":
            case "CCC30":
            case "CCC31":
            case "CCC33":
            case "CCC34":
            case "CCC35":
            case "CCC36":
            case "CCC122":
            case "CCC130":
              return "Above";
            case "CCC21":
              break;
            case "CCC103":
              return "Below_Right";
          }
          return t;
        }
        constructor(e) {
          this.font = e;
        }
      }
      class rn {
        get width() {
          return this.maxX - this.minX;
        }
        get height() {
          return this.maxY - this.minY;
        }
        addPoint(e, t) {
          Math.abs(e) !== 1 / 0 &&
            (e < this.minX && (this.minX = e),
            e > this.maxX && (this.maxX = e)),
            Math.abs(t) !== 1 / 0 &&
              (t < this.minY && (this.minY = t),
              t > this.maxY && (this.maxY = t));
        }
        copy() {
          return new rn(this.minX, this.minY, this.maxX, this.maxY);
        }
        constructor(e = 1 / 0, t = 1 / 0, s = -1 / 0, r = -1 / 0) {
          (this.minX = e), (this.minY = t), (this.maxX = s), (this.maxY = r);
        }
      }
      const nn = {
          Caucasian_Albanian: "aghb",
          Arabic: "arab",
          Imperial_Aramaic: "armi",
          Armenian: "armn",
          Avestan: "avst",
          Balinese: "bali",
          Bamum: "bamu",
          Bassa_Vah: "bass",
          Batak: "batk",
          Bengali: ["bng2", "beng"],
          Bopomofo: "bopo",
          Brahmi: "brah",
          Braille: "brai",
          Buginese: "bugi",
          Buhid: "buhd",
          Chakma: "cakm",
          Canadian_Aboriginal: "cans",
          Carian: "cari",
          Cham: "cham",
          Cherokee: "cher",
          Coptic: "copt",
          Cypriot: "cprt",
          Cyrillic: "cyrl",
          Devanagari: ["dev2", "deva"],
          Deseret: "dsrt",
          Duployan: "dupl",
          Egyptian_Hieroglyphs: "egyp",
          Elbasan: "elba",
          Ethiopic: "ethi",
          Georgian: "geor",
          Glagolitic: "glag",
          Gothic: "goth",
          Grantha: "gran",
          Greek: "grek",
          Gujarati: ["gjr2", "gujr"],
          Gurmukhi: ["gur2", "guru"],
          Hangul: "hang",
          Han: "hani",
          Hanunoo: "hano",
          Hebrew: "hebr",
          Hiragana: "hira",
          Pahawh_Hmong: "hmng",
          Katakana_Or_Hiragana: "hrkt",
          Old_Italic: "ital",
          Javanese: "java",
          Kayah_Li: "kali",
          Katakana: "kana",
          Kharoshthi: "khar",
          Khmer: "khmr",
          Khojki: "khoj",
          Kannada: ["knd2", "knda"],
          Kaithi: "kthi",
          Tai_Tham: "lana",
          Lao: "lao ",
          Latin: "latn",
          Lepcha: "lepc",
          Limbu: "limb",
          Linear_A: "lina",
          Linear_B: "linb",
          Lisu: "lisu",
          Lycian: "lyci",
          Lydian: "lydi",
          Mahajani: "mahj",
          Mandaic: "mand",
          Manichaean: "mani",
          Mende_Kikakui: "mend",
          Meroitic_Cursive: "merc",
          Meroitic_Hieroglyphs: "mero",
          Malayalam: ["mlm2", "mlym"],
          Modi: "modi",
          Mongolian: "mong",
          Mro: "mroo",
          Meetei_Mayek: "mtei",
          Myanmar: ["mym2", "mymr"],
          Old_North_Arabian: "narb",
          Nabataean: "nbat",
          Nko: "nko ",
          Ogham: "ogam",
          Ol_Chiki: "olck",
          Old_Turkic: "orkh",
          Oriya: ["ory2", "orya"],
          Osmanya: "osma",
          Palmyrene: "palm",
          Pau_Cin_Hau: "pauc",
          Old_Permic: "perm",
          Phags_Pa: "phag",
          Inscriptional_Pahlavi: "phli",
          Psalter_Pahlavi: "phlp",
          Phoenician: "phnx",
          Miao: "plrd",
          Inscriptional_Parthian: "prti",
          Rejang: "rjng",
          Runic: "runr",
          Samaritan: "samr",
          Old_South_Arabian: "sarb",
          Saurashtra: "saur",
          Shavian: "shaw",
          Sharada: "shrd",
          Siddham: "sidd",
          Khudawadi: "sind",
          Sinhala: "sinh",
          Sora_Sompeng: "sora",
          Sundanese: "sund",
          Syloti_Nagri: "sylo",
          Syriac: "syrc",
          Tagbanwa: "tagb",
          Takri: "takr",
          Tai_Le: "tale",
          New_Tai_Lue: "talu",
          Tamil: ["tml2", "taml"],
          Tai_Viet: "tavt",
          Telugu: ["tel2", "telu"],
          Tifinagh: "tfng",
          Tagalog: "tglg",
          Thaana: "thaa",
          Thai: "thai",
          Tibetan: "tibt",
          Tirhuta: "tirh",
          Ugaritic: "ugar",
          Vai: "vai ",
          Warang_Citi: "wara",
          Old_Persian: "xpeo",
          Cuneiform: "xsux",
          Yi: "yi  ",
          Inherited: "zinh",
          Common: "zyyy",
          Unknown: "zzzz",
        },
        an = {};
      for (let Rl in nn) {
        let e = nn[Rl];
        if (Array.isArray(e)) for (let t of e) an[t] = Rl;
        else an[e] = Rl;
      }
      const ln = {
        arab: !0,
        hebr: !0,
        syrc: !0,
        thaa: !0,
        cprt: !0,
        khar: !0,
        phnx: !0,
        "nko ": !0,
        lydi: !0,
        avst: !0,
        armi: !0,
        phli: !0,
        prti: !0,
        sarb: !0,
        orkh: !0,
        samr: !0,
        mand: !0,
        merc: !0,
        mero: !0,
        mani: !0,
        mend: !0,
        nbat: !0,
        narb: !0,
        palm: !0,
        phlp: !0,
      };
      function on(e) {
        return ln[e] ? "rtl" : "ltr";
      }
      class un {
        get advanceWidth() {
          let e = 0;
          for (let t of this.positions) e += t.xAdvance;
          return e;
        }
        get advanceHeight() {
          let e = 0;
          for (let t of this.positions) e += t.yAdvance;
          return e;
        }
        get bbox() {
          let e = new rn(),
            t = 0,
            s = 0;
          for (let r = 0; r < this.glyphs.length; r++) {
            let n = this.glyphs[r],
              a = this.positions[r],
              l = n.bbox;
            e.addPoint(l.minX + t + a.xOffset, l.minY + s + a.yOffset),
              e.addPoint(l.maxX + t + a.xOffset, l.maxY + s + a.yOffset),
              (t += a.xAdvance),
              (s += a.yAdvance);
          }
          return e;
        }
        constructor(e, t, s, r, n) {
          if (
            ((this.glyphs = e),
            (this.positions = null),
            (this.script = s),
            (this.language = r || null),
            (this.direction = n || on(s)),
            (this.features = {}),
            Array.isArray(t))
          )
            for (let a of t) this.features[a] = !0;
          else "object" === typeof t && (this.features = t);
        }
      }
      class cn {
        constructor(e = 0, t = 0, s = 0, r = 0) {
          (this.xAdvance = e),
            (this.yAdvance = t),
            (this.xOffset = s),
            (this.yOffset = r);
        }
      }
      const hn = {
          allTypographicFeatures: {
            code: 0,
            exclusive: !1,
            allTypeFeatures: 0,
          },
          ligatures: {
            code: 1,
            exclusive: !1,
            requiredLigatures: 0,
            commonLigatures: 2,
            rareLigatures: 4,
            rebusPictures: 8,
            diphthongLigatures: 10,
            squaredLigatures: 12,
            abbrevSquaredLigatures: 14,
            symbolLigatures: 16,
            contextualLigatures: 18,
            historicalLigatures: 20,
          },
          cursiveConnection: {
            code: 2,
            exclusive: !0,
            unconnected: 0,
            partiallyConnected: 1,
            cursive: 2,
          },
          letterCase: { code: 3, exclusive: !0 },
          verticalSubstitution: {
            code: 4,
            exclusive: !1,
            substituteVerticalForms: 0,
          },
          linguisticRearrangement: {
            code: 5,
            exclusive: !1,
            linguisticRearrangement: 0,
          },
          numberSpacing: {
            code: 6,
            exclusive: !0,
            monospacedNumbers: 0,
            proportionalNumbers: 1,
            thirdWidthNumbers: 2,
            quarterWidthNumbers: 3,
          },
          smartSwash: {
            code: 8,
            exclusive: !1,
            wordInitialSwashes: 0,
            wordFinalSwashes: 2,
            nonFinalSwashes: 8,
          },
          diacritics: {
            code: 9,
            exclusive: !0,
            showDiacritics: 0,
            hideDiacritics: 1,
            decomposeDiacritics: 2,
          },
          verticalPosition: {
            code: 10,
            exclusive: !0,
            normalPosition: 0,
            superiors: 1,
            inferiors: 2,
            ordinals: 3,
            scientificInferiors: 4,
          },
          fractions: {
            code: 11,
            exclusive: !0,
            noFractions: 0,
            verticalFractions: 1,
            diagonalFractions: 2,
          },
          overlappingCharacters: { code: 13, exclusive: !1, preventOverlap: 0 },
          typographicExtras: { code: 14, exclusive: !1, slashedZero: 4 },
          mathematicalExtras: {
            code: 15,
            exclusive: !1,
            mathematicalGreek: 10,
          },
          ornamentSets: {
            code: 16,
            exclusive: !0,
            noOrnaments: 0,
            dingbats: 1,
            piCharacters: 2,
            fleurons: 3,
            decorativeBorders: 4,
            internationalSymbols: 5,
            mathSymbols: 6,
          },
          characterAlternatives: { code: 17, exclusive: !0, noAlternates: 0 },
          designComplexity: {
            code: 18,
            exclusive: !0,
            designLevel1: 0,
            designLevel2: 1,
            designLevel3: 2,
            designLevel4: 3,
            designLevel5: 4,
          },
          styleOptions: {
            code: 19,
            exclusive: !0,
            noStyleOptions: 0,
            displayText: 1,
            engravedText: 2,
            illuminatedCaps: 3,
            titlingCaps: 4,
            tallCaps: 5,
          },
          characterShape: {
            code: 20,
            exclusive: !0,
            traditionalCharacters: 0,
            simplifiedCharacters: 1,
            JIS1978Characters: 2,
            JIS1983Characters: 3,
            JIS1990Characters: 4,
            traditionalAltOne: 5,
            traditionalAltTwo: 6,
            traditionalAltThree: 7,
            traditionalAltFour: 8,
            traditionalAltFive: 9,
            expertCharacters: 10,
            JIS2004Characters: 11,
            hojoCharacters: 12,
            NLCCharacters: 13,
            traditionalNamesCharacters: 14,
          },
          numberCase: {
            code: 21,
            exclusive: !0,
            lowerCaseNumbers: 0,
            upperCaseNumbers: 1,
          },
          textSpacing: {
            code: 22,
            exclusive: !0,
            proportionalText: 0,
            monospacedText: 1,
            halfWidthText: 2,
            thirdWidthText: 3,
            quarterWidthText: 4,
            altProportionalText: 5,
            altHalfWidthText: 6,
          },
          transliteration: { code: 23, exclusive: !0, noTransliteration: 0 },
          annotation: {
            code: 24,
            exclusive: !0,
            noAnnotation: 0,
            boxAnnotation: 1,
            roundedBoxAnnotation: 2,
            circleAnnotation: 3,
            invertedCircleAnnotation: 4,
            parenthesisAnnotation: 5,
            periodAnnotation: 6,
            romanNumeralAnnotation: 7,
            diamondAnnotation: 8,
            invertedBoxAnnotation: 9,
            invertedRoundedBoxAnnotation: 10,
          },
          kanaSpacing: {
            code: 25,
            exclusive: !0,
            fullWidthKana: 0,
            proportionalKana: 1,
          },
          ideographicSpacing: {
            code: 26,
            exclusive: !0,
            fullWidthIdeographs: 0,
            proportionalIdeographs: 1,
            halfWidthIdeographs: 2,
          },
          unicodeDecomposition: {
            code: 27,
            exclusive: !1,
            canonicalComposition: 0,
            compatibilityComposition: 2,
            transcodingComposition: 4,
          },
          rubyKana: { code: 28, exclusive: !1, rubyKana: 2 },
          CJKSymbolAlternatives: {
            code: 29,
            exclusive: !0,
            noCJKSymbolAlternatives: 0,
            CJKSymbolAltOne: 1,
            CJKSymbolAltTwo: 2,
            CJKSymbolAltThree: 3,
            CJKSymbolAltFour: 4,
            CJKSymbolAltFive: 5,
          },
          ideographicAlternatives: {
            code: 30,
            exclusive: !0,
            noIdeographicAlternatives: 0,
            ideographicAltOne: 1,
            ideographicAltTwo: 2,
            ideographicAltThree: 3,
            ideographicAltFour: 4,
            ideographicAltFive: 5,
          },
          CJKVerticalRomanPlacement: {
            code: 31,
            exclusive: !0,
            CJKVerticalRomanCentered: 0,
            CJKVerticalRomanHBaseline: 1,
          },
          italicCJKRoman: { code: 32, exclusive: !1, CJKItalicRoman: 2 },
          caseSensitiveLayout: {
            code: 33,
            exclusive: !1,
            caseSensitiveLayout: 0,
            caseSensitiveSpacing: 2,
          },
          alternateKana: {
            code: 34,
            exclusive: !1,
            alternateHorizKana: 0,
            alternateVertKana: 2,
          },
          stylisticAlternatives: {
            code: 35,
            exclusive: !1,
            noStylisticAlternates: 0,
            stylisticAltOne: 2,
            stylisticAltTwo: 4,
            stylisticAltThree: 6,
            stylisticAltFour: 8,
            stylisticAltFive: 10,
            stylisticAltSix: 12,
            stylisticAltSeven: 14,
            stylisticAltEight: 16,
            stylisticAltNine: 18,
            stylisticAltTen: 20,
            stylisticAltEleven: 22,
            stylisticAltTwelve: 24,
            stylisticAltThirteen: 26,
            stylisticAltFourteen: 28,
            stylisticAltFifteen: 30,
            stylisticAltSixteen: 32,
            stylisticAltSeventeen: 34,
            stylisticAltEighteen: 36,
            stylisticAltNineteen: 38,
            stylisticAltTwenty: 40,
          },
          contextualAlternates: {
            code: 36,
            exclusive: !1,
            contextualAlternates: 0,
            swashAlternates: 2,
            contextualSwashAlternates: 4,
          },
          lowerCase: {
            code: 37,
            exclusive: !0,
            defaultLowerCase: 0,
            lowerCaseSmallCaps: 1,
            lowerCasePetiteCaps: 2,
          },
          upperCase: {
            code: 38,
            exclusive: !0,
            defaultUpperCase: 0,
            upperCaseSmallCaps: 1,
            upperCasePetiteCaps: 2,
          },
          languageTag: { code: 39, exclusive: !0 },
          CJKRomanSpacing: {
            code: 103,
            exclusive: !0,
            halfWidthCJKRoman: 0,
            proportionalCJKRoman: 1,
            defaultCJKRoman: 2,
            fullWidthCJKRoman: 3,
          },
        },
        fn = (e, t) => [hn[e].code, hn[e][t]],
        dn = {
          rlig: fn("ligatures", "requiredLigatures"),
          clig: fn("ligatures", "contextualLigatures"),
          dlig: fn("ligatures", "rareLigatures"),
          hlig: fn("ligatures", "historicalLigatures"),
          liga: fn("ligatures", "commonLigatures"),
          hist: fn("ligatures", "historicalLigatures"),
          smcp: fn("lowerCase", "lowerCaseSmallCaps"),
          pcap: fn("lowerCase", "lowerCasePetiteCaps"),
          frac: fn("fractions", "diagonalFractions"),
          dnom: fn("fractions", "diagonalFractions"),
          numr: fn("fractions", "diagonalFractions"),
          afrc: fn("fractions", "verticalFractions"),
          case: fn("caseSensitiveLayout", "caseSensitiveLayout"),
          ccmp: fn("unicodeDecomposition", "canonicalComposition"),
          cpct: fn("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
          valt: fn("CJKVerticalRomanPlacement", "CJKVerticalRomanCentered"),
          swsh: fn("contextualAlternates", "swashAlternates"),
          cswh: fn("contextualAlternates", "contextualSwashAlternates"),
          curs: fn("cursiveConnection", "cursive"),
          c2pc: fn("upperCase", "upperCasePetiteCaps"),
          c2sc: fn("upperCase", "upperCaseSmallCaps"),
          init: fn("smartSwash", "wordInitialSwashes"),
          fin2: fn("smartSwash", "wordFinalSwashes"),
          medi: fn("smartSwash", "nonFinalSwashes"),
          med2: fn("smartSwash", "nonFinalSwashes"),
          fin3: fn("smartSwash", "wordFinalSwashes"),
          fina: fn("smartSwash", "wordFinalSwashes"),
          pkna: fn("kanaSpacing", "proportionalKana"),
          half: fn("textSpacing", "halfWidthText"),
          halt: fn("textSpacing", "altHalfWidthText"),
          hkna: fn("alternateKana", "alternateHorizKana"),
          vkna: fn("alternateKana", "alternateVertKana"),
          ital: fn("italicCJKRoman", "CJKItalicRoman"),
          lnum: fn("numberCase", "upperCaseNumbers"),
          onum: fn("numberCase", "lowerCaseNumbers"),
          mgrk: fn("mathematicalExtras", "mathematicalGreek"),
          calt: fn("contextualAlternates", "contextualAlternates"),
          vrt2: fn("verticalSubstitution", "substituteVerticalForms"),
          vert: fn("verticalSubstitution", "substituteVerticalForms"),
          tnum: fn("numberSpacing", "monospacedNumbers"),
          pnum: fn("numberSpacing", "proportionalNumbers"),
          sups: fn("verticalPosition", "superiors"),
          subs: fn("verticalPosition", "inferiors"),
          ordn: fn("verticalPosition", "ordinals"),
          pwid: fn("textSpacing", "proportionalText"),
          hwid: fn("textSpacing", "halfWidthText"),
          qwid: fn("textSpacing", "quarterWidthText"),
          twid: fn("textSpacing", "thirdWidthText"),
          fwid: fn("textSpacing", "proportionalText"),
          palt: fn("textSpacing", "altProportionalText"),
          trad: fn("characterShape", "traditionalCharacters"),
          smpl: fn("characterShape", "simplifiedCharacters"),
          jp78: fn("characterShape", "JIS1978Characters"),
          jp83: fn("characterShape", "JIS1983Characters"),
          jp90: fn("characterShape", "JIS1990Characters"),
          jp04: fn("characterShape", "JIS2004Characters"),
          expt: fn("characterShape", "expertCharacters"),
          hojo: fn("characterShape", "hojoCharacters"),
          nlck: fn("characterShape", "NLCCharacters"),
          tnam: fn("characterShape", "traditionalNamesCharacters"),
          ruby: fn("rubyKana", "rubyKana"),
          titl: fn("styleOptions", "titlingCaps"),
          zero: fn("typographicExtras", "slashedZero"),
          ss01: fn("stylisticAlternatives", "stylisticAltOne"),
          ss02: fn("stylisticAlternatives", "stylisticAltTwo"),
          ss03: fn("stylisticAlternatives", "stylisticAltThree"),
          ss04: fn("stylisticAlternatives", "stylisticAltFour"),
          ss05: fn("stylisticAlternatives", "stylisticAltFive"),
          ss06: fn("stylisticAlternatives", "stylisticAltSix"),
          ss07: fn("stylisticAlternatives", "stylisticAltSeven"),
          ss08: fn("stylisticAlternatives", "stylisticAltEight"),
          ss09: fn("stylisticAlternatives", "stylisticAltNine"),
          ss10: fn("stylisticAlternatives", "stylisticAltTen"),
          ss11: fn("stylisticAlternatives", "stylisticAltEleven"),
          ss12: fn("stylisticAlternatives", "stylisticAltTwelve"),
          ss13: fn("stylisticAlternatives", "stylisticAltThirteen"),
          ss14: fn("stylisticAlternatives", "stylisticAltFourteen"),
          ss15: fn("stylisticAlternatives", "stylisticAltFifteen"),
          ss16: fn("stylisticAlternatives", "stylisticAltSixteen"),
          ss17: fn("stylisticAlternatives", "stylisticAltSeventeen"),
          ss18: fn("stylisticAlternatives", "stylisticAltEighteen"),
          ss19: fn("stylisticAlternatives", "stylisticAltNineteen"),
          ss20: fn("stylisticAlternatives", "stylisticAltTwenty"),
        };
      for (let Rl = 1; Rl <= 99; Rl++)
        dn[`cv${`00${Rl}`.slice(-2)}`] = [hn.characterAlternatives.code, Rl];
      let mn = {};
      for (let Rl in dn) {
        let e = dn[Rl];
        null == mn[e[0]] && (mn[e[0]] = {}), (mn[e[0]][e[1]] = Rl);
      }
      function pn(e) {
        let [t, s] = e;
        if (isNaN(t)) var r = hn[t] && hn[t].code;
        else r = t;
        if (isNaN(s)) var n = hn[t] && hn[t][s];
        else n = s;
        return [r, n];
      }
      class gn {
        lookup(e) {
          switch (this.table.version) {
            case 0:
              return this.table.values.getItem(e);
            case 2:
            case 4: {
              let r = 0,
                n = this.table.binarySearchHeader.nUnits - 1;
              for (; r <= n; ) {
                var t = (r + n) >> 1;
                if (65535 === (s = this.table.segments[t]).firstGlyph)
                  return null;
                if (e < s.firstGlyph) n = t - 1;
                else {
                  if (!(e > s.lastGlyph))
                    return 2 === this.table.version
                      ? s.value
                      : s.values[e - s.firstGlyph];
                  r = t + 1;
                }
              }
              return null;
            }
            case 6: {
              let r = 0,
                n = this.table.binarySearchHeader.nUnits - 1;
              for (; r <= n; ) {
                var s;
                t = (r + n) >> 1;
                if (65535 === (s = this.table.segments[t]).glyph) return null;
                if (e < s.glyph) n = t - 1;
                else {
                  if (!(e > s.glyph)) return s.value;
                  r = t + 1;
                }
              }
              return null;
            }
            case 8:
              return this.table.values[e - this.table.firstGlyph];
            default:
              throw new Error(
                `Unknown lookup table format: ${this.table.version}`
              );
          }
        }
        glyphsForValue(e) {
          let t = [];
          switch (this.table.version) {
            case 2:
            case 4:
              for (let s of this.table.segments)
                if (2 === this.table.version && s.value === e)
                  t.push(...Yr(s.firstGlyph, s.lastGlyph + 1));
                else
                  for (let r = 0; r < s.values.length; r++)
                    s.values[r] === e && t.push(s.firstGlyph + r);
              break;
            case 6:
              for (let s of this.table.segments)
                s.value === e && t.push(s.glyph);
              break;
            case 8:
              for (let s = 0; s < this.table.values.length; s++)
                this.table.values[s] === e && t.push(this.table.firstGlyph + s);
              break;
            default:
              throw new Error(
                `Unknown lookup table format: ${this.table.version}`
              );
          }
          return t;
        }
        constructor(e) {
          this.table = e;
        }
      }
      (0, a.__decorate)([L], gn.prototype, "glyphsForValue", null);
      class yn {
        process(e, t, s) {
          let r = 0,
            n = t ? e.length - 1 : 0,
            a = t ? -1 : 1;
          for (; (1 === a && n <= e.length) || (-1 === a && n >= -1); ) {
            let t = null,
              l = 1,
              i = !0;
            n === e.length || -1 === n
              ? (l = 0)
              : ((t = e[n]),
                65535 === t.id
                  ? (l = 2)
                  : ((l = this.lookupTable.lookup(t.id)),
                    null == l && (l = 1)));
            let o = this.stateTable.stateArray.getItem(r)[l],
              u = this.stateTable.entryTable.getItem(o);
            0 !== l && 2 !== l && (s(t, u, n), (i = !(16384 & u.flags))),
              (r = u.newState),
              i && (n += a);
          }
          return e;
        }
        traverse(e, t = 0, s = new Set()) {
          if (s.has(t)) return;
          s.add(t);
          let { nClasses: r, stateArray: n, entryTable: a } = this.stateTable,
            l = n.getItem(t);
          for (let i = 4; i < r; i++) {
            let t = l[i],
              r = a.getItem(t);
            for (let n of this.lookupTable.glyphsForValue(i))
              e.enter && e.enter(n, r),
                0 !== r.newState && this.traverse(e, r.newState, s),
                e.exit && e.exit(n, r);
          }
        }
        constructor(e) {
          (this.stateTable = e), (this.lookupTable = new gn(e.classTable));
        }
      }
      const bn = 4194304;
      class wn {
        process(e, t = {}) {
          for (let r of this.morx.chains) {
            let s = r.defaultFlags;
            for (let e of r.features) {
              let r;
              (r = t[e.featureType]) &&
                (r[e.featureSetting]
                  ? ((s &= e.disableFlags), (s |= e.enableFlags))
                  : !1 === r[e.featureSetting] &&
                    ((s |= ~e.disableFlags), (s &= ~e.enableFlags)));
            }
            for (let t of r.subtables)
              t.subFeatureFlags & s && this.processSubtable(t, e);
          }
          let s = e.length - 1;
          for (; s >= 0; ) 65535 === e[s].id && e.splice(s, 1), s--;
          return e;
        }
        processSubtable(e, t) {
          if (
            ((this.subtable = e), (this.glyphs = t), 4 === this.subtable.type)
          )
            return void this.processNoncontextualSubstitutions(
              this.subtable,
              this.glyphs
            );
          (this.ligatureStack = []),
            (this.markedGlyph = null),
            (this.firstGlyph = null),
            (this.lastGlyph = null),
            (this.markedIndex = null);
          let s = this.getStateMachine(e),
            r = this.getProcessor(),
            n = !!(this.subtable.coverage & bn);
          return s.process(this.glyphs, n, r);
        }
        getStateMachine(e) {
          return new yn(e.table.stateTable);
        }
        getProcessor() {
          switch (this.subtable.type) {
            case 0:
              return this.processIndicRearragement;
            case 1:
              return this.processContextualSubstitution;
            case 2:
              return this.processLigature;
            case 4:
              return this.processNoncontextualSubstitutions;
            case 5:
              return this.processGlyphInsertion;
            default:
              throw new Error(
                `Invalid morx subtable type: ${this.subtable.type}`
              );
          }
        }
        processIndicRearragement(e, t, s) {
          32768 & t.flags && (this.firstGlyph = s),
            8192 & t.flags && (this.lastGlyph = s),
            (function (e, t, s, r) {
              switch (t) {
                case 0:
                  return e;
                case 1:
                  return vn(e, [s, 1], [r, 0]);
                case 2:
                  return vn(e, [s, 0], [r, 1]);
                case 3:
                  return vn(e, [s, 1], [r, 1]);
                case 4:
                  return vn(e, [s, 2], [r, 0]);
                case 5:
                  return vn(e, [s, 2], [r, 0], !0, !1);
                case 6:
                  return vn(e, [s, 0], [r, 2]);
                case 7:
                  return vn(e, [s, 0], [r, 2], !1, !0);
                case 8:
                  return vn(e, [s, 1], [r, 2]);
                case 9:
                  return vn(e, [s, 1], [r, 2], !1, !0);
                case 10:
                  return vn(e, [s, 2], [r, 1]);
                case 11:
                  return vn(e, [s, 2], [r, 1], !0, !1);
                case 12:
                  return vn(e, [s, 2], [r, 2]);
                case 13:
                  return vn(e, [s, 2], [r, 2], !0, !1);
                case 14:
                  return vn(e, [s, 2], [r, 2], !1, !0);
                case 15:
                  return vn(e, [s, 2], [r, 2], !0, !0);
                default:
                  throw new Error(`Unknown verb: ${t}`);
              }
            })(this.glyphs, 15 & t.flags, this.firstGlyph, this.lastGlyph);
        }
        processContextualSubstitution(e, t, s) {
          let r = this.subtable.table.substitutionTable.items;
          if (65535 !== t.markIndex) {
            let s = r.getItem(t.markIndex),
              a = new gn(s);
            (e = this.glyphs[this.markedGlyph]),
              (n = a.lookup(e.id)) &&
                (this.glyphs[this.markedGlyph] = this.font.getGlyph(
                  n,
                  e.codePoints
                ));
          }
          if (65535 !== t.currentIndex) {
            let a = r.getItem(t.currentIndex),
              l = new gn(a);
            var n;
            (e = this.glyphs[s]),
              (n = l.lookup(e.id)) &&
                (this.glyphs[s] = this.font.getGlyph(n, e.codePoints));
          }
          32768 & t.flags && (this.markedGlyph = s);
        }
        processLigature(e, t, s) {
          if ((32768 & t.flags && this.ligatureStack.push(s), 8192 & t.flags)) {
            let e = this.subtable.table.ligatureActions,
              s = this.subtable.table.components,
              r = this.subtable.table.ligatureList,
              n = t.action,
              a = !1,
              l = 0,
              i = [],
              o = [];
            for (; !a; ) {
              let t = this.ligatureStack.pop();
              i.unshift(...this.glyphs[t].codePoints);
              let u = e.getItem(n++);
              a = !!(2147483648 & u);
              let c = !!(1073741824 & u),
                h = ((1073741823 & u) << 2) >> 2;
              if (((h += this.glyphs[t].id), (l += s.getItem(h)), a || c)) {
                let e = r.getItem(l);
                (this.glyphs[t] = this.font.getGlyph(e, i)),
                  o.push(t),
                  (l = 0),
                  (i = []);
              } else this.glyphs[t] = this.font.getGlyph(65535);
            }
            this.ligatureStack.push(...o);
          }
        }
        processNoncontextualSubstitutions(e, t, s) {
          let r = new gn(e.table.lookupTable);
          for (s = 0; s < t.length; s++) {
            let e = t[s];
            if (65535 !== e.id) {
              let n = r.lookup(e.id);
              n && (t[s] = this.font.getGlyph(n, e.codePoints));
            }
          }
        }
        _insertGlyphs(e, t, s, r) {
          let n = [];
          for (; s--; ) {
            let e = this.subtable.table.insertionActions.getItem(t++);
            n.push(this.font.getGlyph(e));
          }
          r || e++, this.glyphs.splice(e, 0, ...n);
        }
        processGlyphInsertion(e, t, s) {
          if (
            (32768 & t.flags && (this.markedIndex = s),
            65535 !== t.markedInsertIndex)
          ) {
            let e = (31 & t.flags) >>> 5,
              s = !!(1024 & t.flags);
            this._insertGlyphs(this.markedIndex, t.markedInsertIndex, e, s);
          }
          if (65535 !== t.currentInsertIndex) {
            let e = (992 & t.flags) >>> 5,
              r = !!(2048 & t.flags);
            this._insertGlyphs(s, t.currentInsertIndex, e, r);
          }
        }
        getSupportedFeatures() {
          let e = [];
          for (let t of this.morx.chains)
            for (let s of t.features) e.push([s.featureType, s.featureSetting]);
          return e;
        }
        generateInputs(e) {
          return (
            this.inputCache || this.generateInputCache(),
            this.inputCache[e] || []
          );
        }
        generateInputCache() {
          this.inputCache = {};
          for (let e of this.morx.chains) {
            let t = e.defaultFlags;
            for (let s of e.subtables)
              s.subFeatureFlags & t && this.generateInputsForSubtable(s);
          }
        }
        generateInputsForSubtable(e) {
          if (2 !== e.type) return;
          if (!!(e.coverage & bn))
            throw new Error("Reverse subtable, not supported.");
          (this.subtable = e), (this.ligatureStack = []);
          let t = this.getStateMachine(e),
            s = this.getProcessor(),
            r = [],
            n = [];
          (this.glyphs = []),
            t.traverse({
              enter: (e, t) => {
                let a = this.glyphs;
                n.push({
                  glyphs: a.slice(),
                  ligatureStack: this.ligatureStack.slice(),
                });
                let l = this.font.getGlyph(e);
                r.push(l),
                  a.push(r[r.length - 1]),
                  s(a[a.length - 1], t, a.length - 1);
                let i = 0,
                  o = 0;
                for (let s = 0; s < a.length && i <= 1; s++)
                  65535 !== a[s].id && (i++, (o = a[s].id));
                if (1 === i) {
                  let e = r.map((e) => e.id),
                    t = this.inputCache[o];
                  t ? t.push(e) : (this.inputCache[o] = [e]);
                }
              },
              exit: () => {
                ({ glyphs: this.glyphs, ligatureStack: this.ligatureStack } =
                  n.pop()),
                  r.pop();
              },
            });
        }
        constructor(e) {
          (this.processIndicRearragement =
            this.processIndicRearragement.bind(this)),
            (this.processContextualSubstitution =
              this.processContextualSubstitution.bind(this)),
            (this.processLigature = this.processLigature.bind(this)),
            (this.processNoncontextualSubstitutions =
              this.processNoncontextualSubstitutions.bind(this)),
            (this.processGlyphInsertion =
              this.processGlyphInsertion.bind(this)),
            (this.font = e),
            (this.morx = e.morx),
            (this.inputCache = null);
        }
      }
      function vn(e, t, s, r = !1, n = !1) {
        let a = e.splice(s[0] - (s[1] - 1), s[1]);
        n && a.reverse();
        let l = e.splice(t[0], t[1], ...a);
        return r && l.reverse(), e.splice(s[0] - (t[1] - 1), 0, ...l), e;
      }
      (0, a.__decorate)([L], wn.prototype, "getStateMachine", null);
      class _n {
        substitute(e) {
          "rtl" === e.direction && e.glyphs.reverse(),
            this.morxProcessor.process(
              e.glyphs,
              (function (e) {
                let t = {};
                for (let s in e) {
                  let r;
                  (r = dn[s]) &&
                    (null == t[r[0]] && (t[r[0]] = {}), (t[r[0]][r[1]] = e[s]));
                }
                return t;
              })(e.features)
            );
        }
        getAvailableFeatures(e, t) {
          return (function (e) {
            let t = {};
            if (Array.isArray(e))
              for (let s = 0; s < e.length; s++) {
                let r,
                  n = pn(e[s]);
                (r = mn[n[0]] && mn[n[0]][n[1]]) && (t[r] = !0);
              }
            else if ("object" === typeof e)
              for (let s in e) {
                let r = e[s];
                for (let e in r) {
                  let n,
                    a = pn([s, e]);
                  r[e] && (n = mn[a[0]] && mn[a[0]][a[1]]) && (t[n] = !0);
                }
              }
            return Object.keys(t);
          })(this.morxProcessor.getSupportedFeatures());
        }
        stringsForGlyph(e) {
          let t = this.morxProcessor.generateInputs(e),
            s = new Set();
          for (let r of t) this._addStrings(r, 0, s, "");
          return s;
        }
        _addStrings(e, t, s, r) {
          let n = this.font._cmapProcessor.codePointsForGlyph(e[t]);
          for (let a of n) {
            let n = r + String.fromCodePoint(a);
            t < e.length - 1 ? this._addStrings(e, t + 1, s, n) : s.add(n);
          }
        }
        constructor(e) {
          (this.font = e),
            (this.morxProcessor = new wn(e)),
            (this.fallbackPosition = !1);
        }
      }
      class Ln {
        _addFeatures(e, t) {
          let s = this.stages.length - 1,
            r = this.stages[s];
          for (let n of e)
            null == this.allFeatures[n] &&
              (r.push(n),
              (this.allFeatures[n] = s),
              t && (this.globalFeatures[n] = !0));
        }
        add(e, t = !0) {
          if (
            (0 === this.stages.length && this.stages.push([]),
            "string" === typeof e && (e = [e]),
            Array.isArray(e))
          )
            this._addFeatures(e, t);
          else {
            if ("object" !== typeof e)
              throw new Error("Unsupported argument to ShapingPlan#add");
            this._addFeatures(e.global || [], !0),
              this._addFeatures(e.local || [], !1);
          }
        }
        addStage(e, t) {
          "function" === typeof e
            ? this.stages.push(e, [])
            : (this.stages.push([]), this.add(e, t));
        }
        setFeatureOverrides(e) {
          if (Array.isArray(e)) this.add(e);
          else if ("object" === typeof e)
            for (let t in e)
              if (e[t]) this.add(t);
              else if (null != this.allFeatures[t]) {
                let e = this.stages[this.allFeatures[t]];
                e.splice(e.indexOf(t), 1),
                  delete this.allFeatures[t],
                  delete this.globalFeatures[t];
              }
        }
        assignGlobalFeatures(e) {
          for (let t of e)
            for (let e in this.globalFeatures) t.features[e] = !0;
        }
        process(e, t, s) {
          for (let r of this.stages)
            "function" === typeof r
              ? s || r(this.font, t, this)
              : r.length > 0 && e.applyFeatures(r, t, s);
        }
        constructor(e, t, s) {
          (this.font = e),
            (this.script = t),
            (this.direction = s),
            (this.stages = []),
            (this.globalFeatures = {}),
            (this.allFeatures = {});
        }
      }
      const Cn = ["rvrn"],
        xn = ["ccmp", "locl", "rlig", "mark", "mkmk"],
        An = ["frac", "numr", "dnom"],
        kn = ["calt", "clig", "liga", "rclt", "curs", "kern"],
        Sn = { ltr: ["ltra", "ltrm"], rtl: ["rtla", "rtlm"] };
      class In {
        static plan(e, t, s) {
          this.planPreprocessing(e),
            this.planFeatures(e),
            this.planPostprocessing(e, s),
            e.assignGlobalFeatures(t),
            this.assignFeatures(e, t);
        }
        static planPreprocessing(e) {
          e.add({ global: [...Cn, ...Sn[e.direction]], local: An });
        }
        static planFeatures(e) {}
        static planPostprocessing(e, t) {
          e.add([...xn, ...kn]), e.setFeatureOverrides(t);
        }
        static assignFeatures(e, t) {
          for (let s = 0; s < t.length; s++) {
            let e = t[s];
            if (8260 === e.codePoints[0]) {
              let r = s,
                n = s + 1;
              for (; r > 0 && (0, i.X1)(t[r - 1].codePoints[0]); )
                (t[r - 1].features.numr = !0),
                  (t[r - 1].features.frac = !0),
                  r--;
              for (; n < t.length && (0, i.X1)(t[n].codePoints[0]); )
                (t[n].features.dnom = !0), (t[n].features.frac = !0), n++;
              (e.features.frac = !0), (s = n - 1);
            }
          }
        }
      }
      (0, n.Z)(In, "zeroMarkWidths", "AFTER_GPOS");
      const Pn = new o(
          Qr(
            "ABABAAAAAACgMQAAAZUBav7t2CtPA0EUBeDZB00pin9AJZIEgyUEj0QhweDAgQOJxCBRBElQSBwSicLgkOAwnNKZ5GaY2c7uzj4o5yZfZrrbefbuIx2nSq3CGmzAWH/+K+UO7MIe7MMhHMMpnMMFXMIVXIt2t3CnP088iPqjqNN8e4Ij7Rle4LUH82rLm6i/92A+RERERERERERNmfz/89GDeRARERERzbN8ceps2Iwt9H0C9/AJ6yOlDkbTczcot5VSm8Pm1vcFWfb7+BKOLTuOd2UlTX4wGP85Eg953lWPFbnuN7PkjtLmalOWbNenkHOSa7T3KmR9MVTZ2zZkVj1kHa68MueVKH0R4zqQ44WEXLM8VjcWHP0PtKLfPzQnMtGn3W4QYf6qxFxceVI394r2xnV+1rih0fV1Vzf3fO1n3evL5J78ruvZ5ptX2Rwy92Tfb1wlEqut3U+sZ3HXOeJ7/zDrbyuP6+Zz0fqa6Nv3vhY7Yu1xWnGevmsvsUpTT/RYIe8waUH/rvHMWKFzLfN8L+rTfp645mfX7ftlnfDtYxN59w0="
          )
        ),
        Un = ["isol", "fina", "fin2", "fin3", "medi", "med2", "init"],
        Jn = 0,
        Tn = 6,
        On = "isol",
        Fn = "fina",
        Dn = "fin2",
        Mn = "medi",
        Gn = "med2",
        En = "init",
        Bn = null,
        Vn = [
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [Bn, On, 1],
            [Bn, On, 2],
            [Bn, On, 1],
            [Bn, On, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [Bn, On, 1],
            [Bn, On, 2],
            [Bn, Dn, 5],
            [Bn, On, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [En, Fn, 1],
            [En, Fn, 3],
            [En, Fn, 4],
            [En, Fn, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [Mn, Fn, 1],
            [Mn, Fn, 3],
            [Mn, Fn, 4],
            [Mn, Fn, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [Gn, On, 1],
            [Gn, On, 2],
            [Gn, Dn, 5],
            [Gn, On, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [On, On, 1],
            [On, On, 2],
            [On, Dn, 5],
            [On, On, 6],
          ],
          [
            [Bn, Bn, 0],
            [Bn, On, 2],
            [Bn, On, 1],
            [Bn, On, 2],
            [Bn, "fin3", 5],
            [Bn, On, 6],
          ],
        ];
      class zn extends In {
        static planFeatures(e) {
          e.add(["ccmp", "locl"]);
          for (let t = 0; t < Un.length; t++) {
            let s = Un[t];
            e.addStage(s, !1);
          }
          e.addStage("mset");
        }
        static assignFeatures(e, t) {
          super.assignFeatures(e, t);
          let s = -1,
            r = 0,
            n = [];
          for (let l = 0; l < t.length; l++) {
            let e, i;
            let o = Rn((a = t[l]).codePoints[0]);
            o !== Tn
              ? (([i, e, r] = Vn[r][o]),
                i !== Bn && -1 !== s && (n[s] = i),
                (n[l] = e),
                (s = l))
              : (n[l] = Bn);
          }
          for (let l = 0; l < t.length; l++) {
            let e;
            var a = t[l];
            (e = n[l]) && (a.features[e] = !0);
          }
        }
      }
      function Rn(e) {
        let t = Pn.get(e);
        if (t) return t - 1;
        let s = (0, i.n3)(e);
        return "Mn" === s || "Me" === s || "Cf" === s ? Tn : Jn;
      }
      class Nn {
        reset(e = {}, t = 0) {
          (this.options = e),
            (this.flags = e.flags || {}),
            (this.markAttachmentType = e.markAttachmentType || 0),
            (this.index = t);
        }
        get cur() {
          return this.glyphs[this.index] || null;
        }
        shouldIgnore(e) {
          return (
            (this.flags.ignoreMarks && e.isMark) ||
            (this.flags.ignoreBaseGlyphs && e.isBase) ||
            (this.flags.ignoreLigatures && e.isLigature) ||
            (this.markAttachmentType &&
              e.isMark &&
              e.markAttachmentType !== this.markAttachmentType)
          );
        }
        move(e) {
          for (
            this.index += e;
            0 <= this.index &&
            this.index < this.glyphs.length &&
            this.shouldIgnore(this.glyphs[this.index]);

          )
            this.index += e;
          return 0 > this.index || this.index >= this.glyphs.length
            ? null
            : this.glyphs[this.index];
        }
        next() {
          return this.move(1);
        }
        prev() {
          return this.move(-1);
        }
        peek(e = 1) {
          let t = this.index,
            s = this.increment(e);
          return (this.index = t), s;
        }
        peekIndex(e = 1) {
          let t = this.index;
          this.increment(e);
          let s = this.index;
          return (this.index = t), s;
        }
        increment(e = 1) {
          let t = e < 0 ? -1 : 1;
          for (e = Math.abs(e); e--; ) this.move(t);
          return this.glyphs[this.index];
        }
        constructor(e, t) {
          (this.glyphs = e), this.reset(t);
        }
      }
      const Wn = ["DFLT", "dflt", "latn"];
      class Xn {
        findScript(e) {
          if (null == this.table.scriptList) return null;
          Array.isArray(e) || (e = [e]);
          for (let t of e)
            for (let e of this.table.scriptList) if (e.tag === t) return e;
          return null;
        }
        selectScript(e, t, s) {
          let r,
            n = !1;
          if (!this.script || e !== this.scriptTag) {
            if (((r = this.findScript(e)), r || (r = this.findScript(Wn)), !r))
              return this.scriptTag;
            (this.scriptTag = r.tag),
              (this.script = r.script),
              (this.language = null),
              (this.languageTag = null),
              (n = !0);
          }
          if (
            ((s && s === this.direction) || (this.direction = s || on(e)),
            t && t.length < 4 && (t += " ".repeat(4 - t.length)),
            !t || t !== this.languageTag)
          ) {
            this.language = null;
            for (let e of this.script.langSysRecords)
              if (e.tag === t) {
                (this.language = e.langSys), (this.languageTag = e.tag);
                break;
              }
            this.language ||
              ((this.language = this.script.defaultLangSys),
              (this.languageTag = null)),
              (n = !0);
          }
          if (n && ((this.features = {}), this.language))
            for (let a of this.language.featureIndexes) {
              let e = this.table.featureList[a],
                t = this.substituteFeatureForVariations(a);
              this.features[e.tag] = t || e.feature;
            }
          return this.scriptTag;
        }
        lookupsForFeatures(e = [], t) {
          let s = [];
          for (let r of e) {
            let e = this.features[r];
            if (e)
              for (let n of e.lookupListIndexes)
                (t && -1 !== t.indexOf(n)) ||
                  s.push({
                    feature: r,
                    index: n,
                    lookup: this.table.lookupList.get(n),
                  });
          }
          return s.sort((e, t) => e.index - t.index), s;
        }
        substituteFeatureForVariations(e) {
          if (-1 === this.variationsIndex) return null;
          let t =
            this.table.featureVariations.featureVariationRecords[
              this.variationsIndex
            ].featureTableSubstitution.substitutions;
          for (let s of t)
            if (s.featureIndex === e) return s.alternateFeatureTable;
          return null;
        }
        findVariationsIndex(e) {
          let t = this.table.featureVariations;
          if (!t) return -1;
          let s = t.featureVariationRecords;
          for (let r = 0; r < s.length; r++) {
            let t = s[r].conditionSet.conditionTable;
            if (this.variationConditionsMatch(t, e)) return r;
          }
          return -1;
        }
        variationConditionsMatch(e, t) {
          return e.every((e) => {
            let s = e.axisIndex < t.length ? t[e.axisIndex] : 0;
            return e.filterRangeMinValue <= s && s <= e.filterRangeMaxValue;
          });
        }
        applyFeatures(e, t, s) {
          let r = this.lookupsForFeatures(e);
          this.applyLookups(r, t, s);
        }
        applyLookups(e, t, s) {
          (this.glyphs = t),
            (this.positions = s),
            (this.glyphIterator = new Nn(t));
          for (let { feature: r, lookup: n } of e)
            for (
              this.currentFeature = r, this.glyphIterator.reset(n.flags);
              this.glyphIterator.index < t.length;

            )
              if (r in this.glyphIterator.cur.features) {
                for (let e of n.subTables) {
                  if (this.applyLookup(n.lookupType, e)) break;
                }
                this.glyphIterator.next();
              } else this.glyphIterator.next();
        }
        applyLookup(e, t) {
          throw new Error("applyLookup must be implemented by subclasses");
        }
        applyLookupList(e) {
          let t = this.glyphIterator.options,
            s = this.glyphIterator.index;
          for (let r of e) {
            this.glyphIterator.reset(t, s),
              this.glyphIterator.increment(r.sequenceIndex);
            let e = this.table.lookupList.get(r.lookupListIndex);
            this.glyphIterator.reset(e.flags, this.glyphIterator.index);
            for (let t of e.subTables)
              if (this.applyLookup(e.lookupType, t)) break;
          }
          return this.glyphIterator.reset(t, s), !0;
        }
        coverageIndex(e, t) {
          switch ((null == t && (t = this.glyphIterator.cur.id), e.version)) {
            case 1:
              return e.glyphs.indexOf(t);
            case 2:
              for (let s of e.rangeRecords)
                if (s.start <= t && t <= s.end)
                  return s.startCoverageIndex + t - s.start;
          }
          return -1;
        }
        match(e, t, s, r) {
          let n = this.glyphIterator.index,
            a = this.glyphIterator.increment(e),
            l = 0;
          for (; l < t.length && a && s(t[l], a); )
            r && r.push(this.glyphIterator.index),
              l++,
              (a = this.glyphIterator.next());
          return (this.glyphIterator.index = n), !(l < t.length) && (r || !0);
        }
        sequenceMatches(e, t) {
          return this.match(e, t, (e, t) => e === t.id);
        }
        sequenceMatchIndices(e, t) {
          return this.match(
            e,
            t,
            (e, t) => this.currentFeature in t.features && e === t.id,
            []
          );
        }
        coverageSequenceMatches(e, t) {
          return this.match(e, t, (e, t) => this.coverageIndex(e, t.id) >= 0);
        }
        getClassID(e, t) {
          switch (t.version) {
            case 1:
              let s = e - t.startGlyph;
              if (s >= 0 && s < t.classValueArray.length)
                return t.classValueArray[s];
              break;
            case 2:
              for (let r of t.classRangeRecord)
                if (r.start <= e && e <= r.end) return r.class;
          }
          return 0;
        }
        classSequenceMatches(e, t, s) {
          return this.match(e, t, (e, t) => e === this.getClassID(t.id, s));
        }
        applyContext(e) {
          let t, s;
          switch (e.version) {
            case 1:
              if (((t = this.coverageIndex(e.coverage)), -1 === t)) return !1;
              s = e.ruleSets[t];
              for (let e of s)
                if (this.sequenceMatches(1, e.input))
                  return this.applyLookupList(e.lookupRecords);
              break;
            case 2:
              if (-1 === this.coverageIndex(e.coverage)) return !1;
              if (
                ((t = this.getClassID(this.glyphIterator.cur.id, e.classDef)),
                -1 === t)
              )
                return !1;
              s = e.classSet[t];
              for (let t of s)
                if (this.classSequenceMatches(1, t.classes, e.classDef))
                  return this.applyLookupList(t.lookupRecords);
              break;
            case 3:
              if (this.coverageSequenceMatches(0, e.coverages))
                return this.applyLookupList(e.lookupRecords);
          }
          return !1;
        }
        applyChainingContext(e) {
          let t;
          switch (e.version) {
            case 1:
              if (((t = this.coverageIndex(e.coverage)), -1 === t)) return !1;
              let s = e.chainRuleSets[t];
              for (let e of s)
                if (
                  this.sequenceMatches(-e.backtrack.length, e.backtrack) &&
                  this.sequenceMatches(1, e.input) &&
                  this.sequenceMatches(1 + e.input.length, e.lookahead)
                )
                  return this.applyLookupList(e.lookupRecords);
              break;
            case 2:
              if (-1 === this.coverageIndex(e.coverage)) return !1;
              t = this.getClassID(this.glyphIterator.cur.id, e.inputClassDef);
              let r = e.chainClassSet[t];
              if (!r) return !1;
              for (let t of r)
                if (
                  this.classSequenceMatches(
                    -t.backtrack.length,
                    t.backtrack,
                    e.backtrackClassDef
                  ) &&
                  this.classSequenceMatches(1, t.input, e.inputClassDef) &&
                  this.classSequenceMatches(
                    1 + t.input.length,
                    t.lookahead,
                    e.lookaheadClassDef
                  )
                )
                  return this.applyLookupList(t.lookupRecords);
              break;
            case 3:
              if (
                this.coverageSequenceMatches(
                  -e.backtrackGlyphCount,
                  e.backtrackCoverage
                ) &&
                this.coverageSequenceMatches(0, e.inputCoverage) &&
                this.coverageSequenceMatches(
                  e.inputGlyphCount,
                  e.lookaheadCoverage
                )
              )
                return this.applyLookupList(e.lookupRecords);
          }
          return !1;
        }
        constructor(e, t) {
          (this.font = e),
            (this.table = t),
            (this.script = null),
            (this.scriptTag = null),
            (this.language = null),
            (this.languageTag = null),
            (this.features = {}),
            (this.lookups = {}),
            (this.variationsIndex = e._variationProcessor
              ? this.findVariationsIndex(e._variationProcessor.normalizedCoords)
              : -1),
            this.selectScript(),
            (this.glyphs = []),
            (this.positions = []),
            (this.ligatureID = 1),
            (this.currentFeature = null);
        }
      }
      class qn {
        get id() {
          return this._id;
        }
        set id(e) {
          (this._id = e), (this.substituted = !0);
          let t = this._font.GDEF;
          if (t && t.glyphClassDef) {
            let s = Xn.prototype.getClassID(e, t.glyphClassDef);
            (this.isBase = 1 === s),
              (this.isLigature = 2 === s),
              (this.isMark = 3 === s),
              (this.markAttachmentType = t.markAttachClassDef
                ? Xn.prototype.getClassID(e, t.markAttachClassDef)
                : 0);
          } else
            (this.isMark =
              this.codePoints.length > 0 && this.codePoints.every(i.YB)),
              (this.isBase = !this.isMark),
              (this.isLigature = this.codePoints.length > 1),
              (this.markAttachmentType = 0);
        }
        copy() {
          return new qn(this._font, this.id, this.codePoints, this.features);
        }
        constructor(e, t, s = [], r) {
          if (
            ((this._font = e),
            (this.codePoints = s),
            (this.id = t),
            (this.features = {}),
            Array.isArray(r))
          )
            for (let n = 0; n < r.length; n++) {
              let e = r[n];
              this.features[e] = !0;
            }
          else "object" === typeof r && Object.assign(this.features, r);
          (this.ligatureID = null),
            (this.ligatureComponent = null),
            (this.isLigated = !1),
            (this.cursiveAttachment = null),
            (this.markAttachment = null),
            (this.shaperInfo = null),
            (this.substituted = !1),
            (this.isMultiplied = !1);
        }
      }
      class Hn extends In {
        static planFeatures(e) {
          e.add(["ljmo", "vjmo", "tjmo"], !1);
        }
        static assignFeatures(e, t) {
          let s = 0,
            r = 0;
          for (; r < t.length; ) {
            let n,
              a = t[r].codePoints[0],
              l = Kn(a);
            switch ((([n, s] = ra[s][l]), n)) {
              case Qn:
                e.font.hasGlyphForCodePoint(a) || (r = aa(t, r, e.font));
                break;
              case ea:
                r = la(t, r, e.font);
                break;
              case ta:
                ia(t, r, e.font);
                break;
              case sa:
                r = oa(t, r, e.font);
            }
            r++;
          }
        }
      }
      (0, n.Z)(Hn, "zeroMarkWidths", "NONE");
      const jn = 44032,
        Yn = 4352,
        $n = 4449,
        Zn = 4519;
      function Kn(e) {
        return ((e) => (4352 <= e && e <= 4447) || (43360 <= e && e <= 43388))(
          e
        )
          ? 1
          : ((e) => (4448 <= e && e <= 4519) || (55216 <= e && e <= 55238))(e)
          ? 2
          : ((e) => (4520 <= e && e <= 4607) || (55243 <= e && e <= 55291))(e)
          ? 3
          : ((e) => e - jn < 11173 && (e - jn) % 28 === 0)(e)
          ? 4
          : ((e) => jn <= e && e <= 55204)(e)
          ? 5
          : ((e) => 12334 <= e && e <= 12335)(e)
          ? 6
          : 0;
      }
      const Qn = 1,
        ea = 2,
        ta = 4,
        sa = 5,
        ra = [
          [
            [0, 0],
            [0, 1],
            [0, 0],
            [0, 0],
            [Qn, 2],
            [Qn, 3],
            [sa, 0],
          ],
          [
            [0, 0],
            [0, 1],
            [ea, 2],
            [0, 0],
            [Qn, 2],
            [Qn, 3],
            [sa, 0],
          ],
          [
            [0, 0],
            [0, 1],
            [0, 0],
            [ea, 3],
            [Qn, 2],
            [Qn, 3],
            [ta, 0],
          ],
          [
            [0, 0],
            [0, 1],
            [0, 0],
            [0, 0],
            [Qn, 2],
            [Qn, 3],
            [ta, 0],
          ],
        ];
      function na(e, t, s) {
        return new qn(e, e.glyphForCodePoint(t).id, [t], s);
      }
      function aa(e, t, s) {
        let r = e[t],
          n = r.codePoints[0] - jn,
          a = Zn + (n % 28);
        n = (n / 28) | 0;
        let l = (Yn + n / 21) | 0,
          i = $n + (n % 21);
        if (
          !s.hasGlyphForCodePoint(l) ||
          !s.hasGlyphForCodePoint(i) ||
          (a !== Zn && !s.hasGlyphForCodePoint(a))
        )
          return t;
        let o = na(s, l, r.features);
        o.features.ljmo = !0;
        let u = na(s, i, r.features);
        u.features.vjmo = !0;
        let c = [o, u];
        if (a > Zn) {
          let e = na(s, a, r.features);
          (e.features.tjmo = !0), c.push(e);
        }
        return e.splice(t, 1, ...c), t + c.length - 1;
      }
      function la(e, t, s) {
        let r,
          n,
          a,
          l,
          i = e[t],
          o = Kn(e[t].codePoints[0]),
          u = e[t - 1].codePoints[0],
          c = Kn(u);
        if (4 === c && 3 === o) (r = u), (l = i);
        else {
          2 === o
            ? ((n = e[t - 1]), (a = i))
            : ((n = e[t - 2]), (a = e[t - 1]), (l = i));
          let s = n.codePoints[0],
            u = a.codePoints[0];
          ((e) => Yn <= e && e <= 4370)(s) &&
            ((e) => $n <= e && e <= 4469)(u) &&
            (r = jn + 28 * (21 * (s - Yn) + (u - $n)));
        }
        let h = (l && l.codePoints[0]) || Zn;
        if (null != r && (h === Zn || ((e) => 1 <= e && e <= 4546)(h))) {
          let n = r + (h - Zn);
          if (s.hasGlyphForCodePoint(n)) {
            let r = 2 === c ? 3 : 2;
            return e.splice(t - r + 1, r, na(s, n, i.features)), t - r + 1;
          }
        }
        return (
          n && (n.features.ljmo = !0),
          a && (a.features.vjmo = !0),
          l && (l.features.tjmo = !0),
          4 === c ? (aa(e, t - 1, s), t + 1) : t
        );
      }
      function ia(e, t, s) {
        let r = e[t],
          n = e[t].codePoints[0];
        if (0 === s.glyphForCodePoint(n).advanceWidth) return;
        let a = (function (e) {
          switch (Kn(e)) {
            case 4:
            case 5:
              return 1;
            case 2:
              return 2;
            case 3:
              return 3;
          }
        })(e[t - 1].codePoints[0]);
        return e.splice(t, 1), e.splice(t - a, 0, r);
      }
      function oa(e, t, s) {
        let r = e[t],
          n = e[t].codePoints[0];
        if (s.hasGlyphForCodePoint(9676)) {
          let a = na(s, 9676, r.features),
            l = 0 === s.glyphForCodePoint(n).advanceWidth ? t : t + 1;
          e.splice(l, 0, a), t++;
        }
        return t;
      }
      var ua;
      ua = JSON.parse(
        '{"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,14,15,16,17],[0,0,0,18,19,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,28,29,30,31,32,33,0,34,0,0,35,36,0,0,37,0],[0,0,0,38,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,39,0,0,0,40,41,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,12,43,0,0,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,0,43,0,0,0,0],[0,0,0,45,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,50,0,0,51,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0],[0,0,0,53,54,55,56,57,58,0,59,0,0,60,61,0,0,62,0],[0,0,0,4,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,63,64,0,0,40,41,0,9,0,10,0,0,0,42,0,63,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,0,2,16,0],[0,0,0,18,65,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,0,0],[0,0,0,69,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,73,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,75,0,0,0,76,77,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,25,79,0,0,0,0],[0,0,0,18,19,20,74,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,81,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,86,0,0,87,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0],[0,0,0,18,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,89,90,0,0,76,77,0,23,0,24,0,0,0,78,0,89,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,0,0],[0,0,0,94,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,96,0,0,0,97,98,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,35,100,0,0,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,102,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,107,0,0,108,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,109,0,0,0,0,0,0,0,0],[0,0,0,28,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,110,111,0,0,97,98,0,33,0,34,0,0,0,99,0,110,0,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,0,0],[0,0,0,0,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,0,0,115,116,117,118,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,39,0,122,0,123,123,8,9,0,10,0,0,0,42,0,39,0,0],[0,124,64,0,0,0,0,0,0,0,0,0,0,0,0,0,124,0,0],[0,39,0,0,0,121,125,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,126,126,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,47,47,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,128,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,129,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,50,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0],[0,0,0,135,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,136,0,0,0,137,138,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,60,140,0,0,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,0,140,0,0,0,0],[0,0,0,142,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,147,0,0,148,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0],[0,0,0,53,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,150,151,0,0,137,138,0,58,0,59,0,0,0,139,0,150,0,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,0,0],[0,0,0,155,116,156,157,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,75,3,4,5,159,160,8,161,0,162,0,11,12,163,0,75,16,0],[0,0,0,0,0,40,164,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,0,165,0,0,0,0],[0,124,64,0,0,40,164,0,9,0,10,0,0,0,42,0,124,0,0],[0,0,0,0,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,167,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,168,0,0,0,0,0,0,0,0],[0,0,0,0,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,0,79,0,0,0,0],[0,0,0,169,170,171,172,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,75,0,176,0,177,177,22,23,0,24,0,0,0,78,0,75,0,0],[0,178,90,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0],[0,75,0,0,0,175,179,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,180,180,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,83,83,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,182,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,183,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,86,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,188,0,0,0,0,0,0,0,0],[0,0,0,189,170,190,191,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,76,193,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,0,194,0,0,0,0],[0,178,90,0,0,76,193,0,23,0,24,0,0,0,78,0,178,0,0],[0,0,0,0,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,195,196,197,198,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,96,0,202,0,203,203,32,33,0,34,0,0,0,99,0,96,0,0],[0,204,111,0,0,0,0,0,0,0,0,0,0,0,0,0,204,0,0],[0,96,0,0,0,201,205,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,206,206,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,104,104,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,208,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,209,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,107,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,0],[0,0,0,215,196,216,217,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,97,219,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,0,220,0,0,0,0],[0,204,111,0,0,97,219,0,33,0,34,0,0,0,99,0,204,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,223,0,0,0,40,224,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,119,225,0,0,0,0],[0,0,0,115,116,117,222,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,115,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,226,64,0,0,40,224,0,9,0,10,0,0,0,42,0,226,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,39,0,0,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,44,44,8,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,227,0,228,229,0,9,0,10,0,0,230,0,0,0,0,0],[0,39,0,122,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,231,231,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,131,131,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,234,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,235,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,0,0,240,241,242,243,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,136,0,247,0,248,248,57,58,0,59,0,0,0,139,0,136,0,0],[0,249,151,0,0,0,0,0,0,0,0,0,0,0,0,0,249,0,0],[0,136,0,0,0,246,250,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,251,251,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,144,144,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,253,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,254,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,147,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,259,0,0,0,0,0,0,0,0],[0,0,0,260,241,261,262,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,137,264,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,0,265,0,0,0,0],[0,249,151,0,0,137,264,0,58,0,59,0,0,0,139,0,249,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,158,225,0,0,0,0],[0,0,0,155,116,156,222,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,155,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,43,266,266,8,161,0,24,0,0,12,267,0,0,0,0],[0,75,0,176,43,268,268,269,161,0,24,0,0,0,267,0,75,0,0],[0,0,0,0,0,270,0,0,271,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,272,0,0,0,0,0,0,0,0],[0,273,274,0,0,40,41,0,9,0,10,0,0,0,42,0,273,0,0],[0,0,0,40,0,123,123,8,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,121,275,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,276,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,279,0,0,0,76,280,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,173,281,0,0,0,0],[0,0,0,169,170,171,278,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,169,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,282,90,0,0,76,280,0,23,0,24,0,0,0,78,0,282,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,75,0,0,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,80,80,22,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,283,0,284,285,0,23,0,24,0,0,286,0,0,0,0,0],[0,75,0,176,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,287,287,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,288,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,185,185,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,290,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,291,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,192,281,0,0,0,0],[0,0,0,189,170,190,278,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,189,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,76,0,177,177,22,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,175,296,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,299,0,0,0,97,300,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,199,301,0,0,0,0],[0,0,0,195,196,197,298,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,195,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,302,111,0,0,97,300,0,33,0,34,0,0,0,99,0,302,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,96,0,0,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,101,101,32,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,303,0,304,305,0,33,0,34,0,0,306,0,0,0,0,0],[0,96,0,202,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,307,307,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,211,211,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,310,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,311,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,218,301,0,0,0,0],[0,0,0,215,196,216,298,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,215,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,97,0,203,203,32,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,201,316,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,0,225,0,0,0,0],[0,0,0,317,318,319,320,8,9,0,10,0,0,321,322,0,0,16,0],[0,223,0,323,0,123,123,8,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,0,0,121,324,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,325,318,326,327,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,64,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,230,0,0,0,0,0],[0,0,0,227,0,228,121,0,9,0,10,0,0,230,0,0,0,0,0],[0,0,0,227,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0],[0,0,0,0,0,329,329,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,237,237,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,332,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,333,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,337,0,0,0,137,338,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,244,339,0,0,0,0],[0,0,0,240,241,242,336,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,240,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,340,151,0,0,137,338,0,58,0,59,0,0,0,139,0,340,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,136,0,0,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,141,141,57,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,341,0,342,343,0,58,0,59,0,0,344,0,0,0,0,0],[0,136,0,247,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,345,345,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,346,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,256,256,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,348,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,349,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,263,339,0,0,0,0],[0,0,0,260,241,261,336,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,260,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,137,0,248,248,57,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,246,354,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,126,126,8,23,0,0,0,0,0,0,0,0,0,0],[0,355,90,0,0,121,125,0,9,0,10,0,0,0,42,0,355,0,0],[0,0,0,0,0,356,356,269,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,357,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,270,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,363,0,0,0,0,0,0,0,0],[0,0,0,364,116,365,366,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,40,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,0,281,0,0,0,0],[0,0,0,369,370,371,372,22,23,0,24,0,0,373,374,0,0,27,0],[0,279,0,375,0,177,177,22,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,0,0,175,376,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,377,370,378,379,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,90,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,286,0,0,0,0,0],[0,0,0,283,0,284,175,0,23,0,24,0,0,286,0,0,0,0,0],[0,0,0,283,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,0,0],[0,0,0,0,0,381,381,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,382,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,293,293,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,384,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,385,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,76,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,0,301,0,0,0,0],[0,0,0,387,388,389,390,32,33,0,34,0,0,391,392,0,0,37,0],[0,299,0,393,0,203,203,32,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,0,0,201,394,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,395,388,396,397,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,111,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,306,0,0,0,0,0],[0,0,0,303,0,304,201,0,33,0,34,0,0,306,0,0,0,0,0],[0,0,0,303,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,0,0],[0,0,0,0,0,399,399,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,313,313,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,402,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,403,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,97,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,407,0,0,0,40,408,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,321,409,0,0,0,0],[0,0,0,317,318,319,406,8,9,0,10,0,0,321,322,0,0,16,0],[0,0,0,317,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,410,64,0,0,40,408,0,9,0,10,0,0,0,42,0,410,0,0],[0,223,0,0,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,323,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,328,409,0,0,0,0],[0,0,0,325,318,326,406,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,325,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0],[0,0,0,0,0,411,411,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,412,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,413,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,0,339,0,0,0,0],[0,0,0,414,415,416,417,57,58,0,59,0,0,418,419,0,0,62,0],[0,337,0,420,0,248,248,57,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,0,0,246,421,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,422,415,423,424,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,151,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,344,0,0,0,0,0],[0,0,0,341,0,342,246,0,58,0,59,0,0,344,0,0,0,0,0],[0,0,0,341,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,0,0],[0,0,0,0,0,426,426,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,427,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,351,351,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,429,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,430,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,137,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,432,116,433,434,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,0,0,180,180,269,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,359,359,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,437,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,438,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,443,274,0,0,0,0,0,0,0,0,0,0,0,0,0,443,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,367,225,0,0,0,0],[0,0,0,364,116,365,445,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,364,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,448,0,0,0,76,449,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,373,450,0,0,0,0],[0,0,0,369,370,371,447,22,23,0,24,0,0,373,374,0,0,27,0],[0,0,0,369,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,451,90,0,0,76,449,0,23,0,24,0,0,0,78,0,451,0,0],[0,279,0,0,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,375,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,380,450,0,0,0,0],[0,0,0,377,370,378,447,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,377,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0],[0,0,0,0,0,452,452,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,453,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,454,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,457,0,0,0,97,458,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,391,459,0,0,0,0],[0,0,0,387,388,389,456,32,33,0,34,0,0,391,392,0,0,37,0],[0,0,0,387,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,460,111,0,0,97,458,0,33,0,34,0,0,0,99,0,460,0,0],[0,299,0,0,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,393,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,398,459,0,0,0,0],[0,0,0,395,388,396,456,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,395,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0],[0,0,0,0,0,461,461,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,462,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,463,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,0,409,0,0,0,0],[0,0,0,464,465,466,467,8,9,0,10,0,0,468,469,0,0,16,0],[0,407,0,470,0,123,123,8,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,0,0,121,471,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,472,465,473,474,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,0,0,0,0,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,236,0,0],[0,0,0,0,0,0,476,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,479,0,0,0,137,480,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,418,481,0,0,0,0],[0,0,0,414,415,416,478,57,58,0,59,0,0,418,419,0,0,62,0],[0,0,0,414,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,482,151,0,0,137,480,0,58,0,59,0,0,0,139,0,482,0,0],[0,337,0,0,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,420,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,425,481,0,0,0,0],[0,0,0,422,415,423,478,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,422,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0],[0,0,0,0,0,483,483,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,484,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,485,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,435,225,0,0,0,0],[0,0,0,432,116,433,445,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,432,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,486,486,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,487,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,440,440,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,489,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,490,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,495,0,496,497,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,0,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,0,225,0,0,0,0],[0,0,0,0,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,0,450,0,0,0,0],[0,0,0,499,500,501,502,22,23,0,24,0,0,503,504,0,0,27,0],[0,448,0,505,0,177,177,22,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,0,0,175,506,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,507,500,508,509,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,0,0,0,0,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,292,0,0],[0,0,0,0,0,0,511,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,0,459,0,0,0,0],[0,0,0,512,513,514,515,32,33,0,34,0,0,516,517,0,0,37,0],[0,457,0,518,0,203,203,32,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,0,0,201,519,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,520,513,521,522,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,0,0,0,0,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,312,0,0],[0,0,0,0,0,0,524,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,527,0,0,0,40,528,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,468,529,0,0,0,0],[0,0,0,464,465,466,526,8,9,0,10,0,0,468,469,0,0,16,0],[0,0,0,464,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,530,64,0,0,40,528,0,9,0,10,0,0,0,42,0,530,0,0],[0,407,0,0,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,470,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,475,529,0,0,0,0],[0,0,0,472,465,473,526,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,472,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0],[0,0,0,0,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,0,481,0,0,0,0],[0,0,0,531,532,533,534,57,58,0,59,0,0,535,536,0,0,62,0],[0,479,0,537,0,248,248,57,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,0,0,246,538,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,539,532,540,541,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,0,0,0,0,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350,0,0],[0,0,0,0,0,0,543,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,358,0,0],[0,0,0,0,0,544,544,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,545,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,492,492,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,547,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,548,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,274,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,498,0,0,0,0,0],[0,0,0,495,0,496,368,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,495,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,553,0,0,0,76,554,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,503,555,0,0,0,0],[0,0,0,499,500,501,552,22,23,0,24,0,0,503,504,0,0,27,0],[0,0,0,499,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,556,90,0,0,76,554,0,23,0,24,0,0,0,78,0,556,0,0],[0,448,0,0,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,505,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,510,555,0,0,0,0],[0,0,0,507,500,508,552,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,507,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,559,0,0,0,97,560,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,516,561,0,0,0,0],[0,0,0,512,513,514,558,32,33,0,34,0,0,516,517,0,0,37,0],[0,0,0,512,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,562,111,0,0,97,560,0,33,0,34,0,0,0,99,0,562,0,0],[0,457,0,0,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,518,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,523,561,0,0,0,0],[0,0,0,520,513,521,558,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,520,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0],[0,0,0,0,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,0,529,0,0,0,0],[0,0,0,563,66,564,565,8,9,0,10,0,0,566,68,0,0,16,0],[0,527,0,567,0,123,123,8,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,0,0,121,568,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,569,66,570,571,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,575,0,0,0,137,576,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,535,577,0,0,0,0],[0,0,0,531,532,533,574,57,58,0,59,0,0,535,536,0,0,62,0],[0,0,0,531,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,578,151,0,0,137,576,0,58,0,59,0,0,0,139,0,578,0,0],[0,479,0,0,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,537,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,542,577,0,0,0,0],[0,0,0,539,532,540,574,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,539,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,137,0,0],[0,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,439,0,0],[0,0,0,0,0,579,579,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,580,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,581,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,0,555,0,0,0,0],[0,0,0,582,91,583,584,22,23,0,24,0,0,585,93,0,0,27,0],[0,553,0,586,0,177,177,22,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,0,0,175,587,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,588,91,589,590,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,0,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,0,561,0,0,0,0],[0,0,0,592,112,593,594,32,33,0,34,0,0,595,114,0,0,37,0],[0,559,0,596,0,203,203,32,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,0,0,201,597,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,598,112,599,600,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,566,165,0,0,0,0],[0,0,0,563,66,564,67,8,9,0,10,0,0,566,68,0,0,16,0],[0,0,0,563,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,527,0,0,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,567,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,572,165,0,0,0,0],[0,0,0,569,66,570,67,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,569,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,0,577,0,0,0,0],[0,0,0,603,152,604,605,57,58,0,59,0,0,606,154,0,0,62,0],[0,575,0,607,0,248,248,57,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,0,0,246,608,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,609,152,610,611,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,0,0,0,0,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,491,0,0],[0,0,0,0,0,0,613,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,585,194,0,0,0,0],[0,0,0,582,91,583,92,22,23,0,24,0,0,585,93,0,0,27,0],[0,0,0,582,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,553,0,0,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,586,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,591,194,0,0,0,0],[0,0,0,588,91,589,92,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,588,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,595,220,0,0,0,0],[0,0,0,592,112,593,113,32,33,0,34,0,0,595,114,0,0,37,0],[0,0,0,592,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,559,0,0,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,596,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,601,220,0,0,0,0],[0,0,0,598,112,599,113,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,598,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,606,265,0,0,0,0],[0,0,0,603,152,604,153,57,58,0,59,0,0,606,154,0,0,62,0],[0,0,0,603,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,575,0,0,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,607,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,612,265,0,0,0,0],[0,0,0,609,152,610,153,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,609,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,549,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0]],"accepting":[false,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,false,false,true,false,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,false,false,true,true,false,false,true,true,true,false,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,false,true,true,false,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,false,true,true,true,true,true,false,true,true,false,true,true,true],"tags":[[],["broken_cluster"],["consonant_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],[],["broken_cluster"],["symbol_cluster"],[],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["symbol_cluster"],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],[],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],[],[],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],["consonant_syllable"],["vowel_syllable"],["standalone_cluster"]]}'
      );
      var ca;
      ca = JSON.parse(
        '{"categories":["O","IND","S","GB","B","FM","CGJ","VMAbv","VMPst","VAbv","VPst","CMBlw","VPre","VBlw","H","VMBlw","CMAbv","MBlw","CS","R","SUB","MPst","MPre","FAbv","FPst","FBlw","SMAbv","SMBlw","VMPre","ZWNJ","ZWJ","WJ","VS","N","HN","MAbv"],"decompositions":{"2507":[2503,2494],"2508":[2503,2519],"2888":[2887,2902],"2891":[2887,2878],"2892":[2887,2903],"3018":[3014,3006],"3019":[3015,3006],"3020":[3014,3031],"3144":[3142,3158],"3264":[3263,3285],"3271":[3270,3285],"3272":[3270,3286],"3274":[3270,3266],"3275":[3270,3266,3285],"3402":[3398,3390],"3403":[3399,3390],"3404":[3398,3415],"3546":[3545,3530],"3548":[3545,3535],"3549":[3545,3535,3530],"3550":[3545,3551],"3635":[3661,3634],"3763":[3789,3762],"3955":[3953,3954],"3957":[3953,3956],"3958":[4018,3968],"3959":[4018,3953,3968],"3960":[4019,3968],"3961":[4019,3953,3968],"3969":[3953,3968],"6971":[6970,6965],"6973":[6972,6965],"6976":[6974,6965],"6977":[6975,6965],"6979":[6978,6965],"69934":[69937,69927],"69935":[69938,69927],"70475":[70471,70462],"70476":[70471,70487],"70843":[70841,70842],"70844":[70841,70832],"70846":[70841,70845],"71098":[71096,71087],"71099":[71097,71087]},"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,3,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,17,18,11,19,20,21,22,0,0,23,0,0,2,0,24,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,27,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,39,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,49,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,53,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0]],"accepting":[false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],"tags":[[],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["symbol_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["virama_terminated_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["number_joiner_terminated_cluster"],["standard_cluster"],["standard_cluster"],["numeral_cluster"]]}'
      );
      const ha = {
          X: 1,
          C: 2,
          V: 4,
          N: 8,
          H: 16,
          ZWNJ: 32,
          ZWJ: 64,
          M: 128,
          SM: 256,
          VD: 512,
          A: 1024,
          Placeholder: 2048,
          Dotted_Circle: 4096,
          RS: 8192,
          Coeng: 16384,
          Repha: 32768,
          Ra: 65536,
          CM: 131072,
          Symbol: 262144,
        },
        fa = {
          Start: 1,
          Ra_To_Become_Reph: 2,
          Pre_M: 4,
          Pre_C: 8,
          Base_C: 16,
          After_Main: 32,
          Above_C: 64,
          Before_Sub: 128,
          Below_C: 256,
          After_Sub: 512,
          Before_Post: 1024,
          Post_C: 2048,
          After_Post: 4096,
          Final_C: 8192,
          SMVD: 16384,
          End: 32768,
        },
        da = ha.C | ha.Ra | ha.CM | ha.V | ha.Placeholder | ha.Dotted_Circle,
        ma = ha.ZWJ | ha.ZWNJ,
        pa = ha.H | ha.Coeng,
        ga = {
          Default: {
            hasOldSpec: !1,
            virama: 0,
            basePos: "Last",
            rephPos: fa.Before_Post,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Devanagari: {
            hasOldSpec: !0,
            virama: 2381,
            basePos: "Last",
            rephPos: fa.Before_Post,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Bengali: {
            hasOldSpec: !0,
            virama: 2509,
            basePos: "Last",
            rephPos: fa.After_Sub,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Gurmukhi: {
            hasOldSpec: !0,
            virama: 2637,
            basePos: "Last",
            rephPos: fa.Before_Sub,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Gujarati: {
            hasOldSpec: !0,
            virama: 2765,
            basePos: "Last",
            rephPos: fa.Before_Post,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Oriya: {
            hasOldSpec: !0,
            virama: 2893,
            basePos: "Last",
            rephPos: fa.After_Main,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Tamil: {
            hasOldSpec: !0,
            virama: 3021,
            basePos: "Last",
            rephPos: fa.After_Post,
            rephMode: "Implicit",
            blwfMode: "Pre_And_Post",
          },
          Telugu: {
            hasOldSpec: !0,
            virama: 3149,
            basePos: "Last",
            rephPos: fa.After_Post,
            rephMode: "Explicit",
            blwfMode: "Post_Only",
          },
          Kannada: {
            hasOldSpec: !0,
            virama: 3277,
            basePos: "Last",
            rephPos: fa.After_Post,
            rephMode: "Implicit",
            blwfMode: "Post_Only",
          },
          Malayalam: {
            hasOldSpec: !0,
            virama: 3405,
            basePos: "Last",
            rephPos: fa.After_Main,
            rephMode: "Log_Repha",
            blwfMode: "Pre_And_Post",
          },
          Khmer: {
            hasOldSpec: !1,
            virama: 6098,
            basePos: "First",
            rephPos: fa.Ra_To_Become_Reph,
            rephMode: "Vis_Repha",
            blwfMode: "Pre_And_Post",
          },
        },
        ya = {
          6078: [6081, 6078],
          6079: [6081, 6079],
          6080: [6081, 6080],
          6084: [6081, 6084],
          6085: [6081, 6085],
        },
        { decompositions: ba } = m(ca),
        wa = new o(
          Qr(
            "AAARAAAAAACgwgAAAbENTvLtnX+sHUUVx/f13nd/vHf7bl+FRGL7R0OJMcWYphBrimkVCSJR2xiEaLEGQ7AkBGowbYRSgj8K2B/GkpRYE6wlQSyJKCagrSlGkmqsqUZMY7S2CWkgqQViQSkt4Hfuzrx77tyZ2fm1u+/RPcknuzs7O3PmnDOzs7N73zteS5KXwKvgDTCnniTvBfPBJeAVpP2vFr69GGUtAkvAModyr0DeT4BrwCpwPVgDbga3ga+DjYbyluLcCvBN8F2wGWwHO8Ej4DjyPIbtz0DCeZpvD4CD4E/gb+AoOAFOgtPgLKiNJkkbTIKLwALwfvAh8GGwHFwFPg2uAzeCm8Ft4E5wN7gPPAi+D34AfgR+Ap7kx8+AZ8HvwZ/BEXAMvAheAa+Bc6OpzvVGknTABY30eB62C8GlYDFYCpaDq/n5z2J7PVgDbgG3N1KbrOdbWzby/N/G9i6wlR8/wLebUNcOll7vX7PLsQ4bdpAy92B/L3gK7AO/A38EfwX/AC+AkyT/m3x7mqdtYz7Gfq2ZJOPgPc3UXu/D9uJmmmcRT1uC7TJwZTONJxFL1+J4JbgBrAG3gNv5Nev5dhO2m3l54rqtON7RNLd1V8Z5auMfI+8Wbvv12P4Ux78AvyZl/Bb7fwD34HwH/EVR/t8t6rRlrYgFlHnMsdyXIupRFP+Gzv8Bb4CklSSjrTR9bz21uZx/Nj8v+uIFOJ4HFnJo3kWtNG6WkPSzBl1YbC8jeVfx+q+R9Pg48lxN8jFdhd8+01LrLTCdq6io8GNb1a8qKioqKioqKioc2cbXGcrWQ2Ynf9a9rmV/zVua9Dc16V/gz8pfxvar4A6wAdwL7gdbwUPgh+BR8AR4qpWuLe3D9gA4CA6DI+AoOAFOtdL1nNexfYs937fxDA8ubKf1zmv3dViI/Uvb9m2sqKioqAiHrVtehrH3TK2/3l4WZduioqIiDq+Rd1Jbef9ehnHmSnCtNNf7nOPcr8PHilO8jrfBF9v996lfwf6tUpl3tPvvdSjsvcwGnLt3Gsw/kzkpK8CdYH83my3Id0iT91WkL5xMktXgIfD85OD54zjfmYu5OFgN7h1LkmdBMg5fgbvAChzv49ujfEuZ3xlOk7kReTaSfL/B/jl+fMXsJLkb7AcPj8TlHC/zsgnYcyLd3zSh1vGAJr2ioqKiIn/eKXkMjn3/cWF5t/z6y37+K5urwP2YB36vPfw8yr7zeRjpu8g8cTf2H2+n89EtivLE93fs27Ez/Br2vM2+qWPl/ZyX9StFfQxW5v724PPxzXz7XHu4Pps5Jvtmiq13szmzfP0hlHkYHGn358bHeD0vYvsy+K+kz9vt/jy8gT40G1w4Rua0PN98nnaGf/e1G+mXIO2DY8P6Xz7WPz7Ky/7omJ0PBff4+B91fAqsAp8HXwI3gR04txbbdWDDWDpP/g7Yxs6BXWAP2AueJHo+M5bOpw+Cw+AIOApOgFMW7Xkdec6AkXH1+QfgyzbOTY73jy/C/gJ+/CCOP4D9xfz4I9h+TFMWtf9SRWzZwq7f0yi/L9voWSRbDfV/clx/3TuKfjoT26/iX813URx4tiVG3ay/sfFuJenb7J50A4mr1di/CZzLKZ6y2reunup4qzT+fM0wHp0PUD9+A7bYNJ5fn3eNP/Ft5bc0+S4n9/l1Gj+K82zesd1wfj3fZ79h2YyyVvLj7djfCR4xjJEyuy1+S/FyDt/MPwodn5hB8axrxy9nSBtYjOyHrs+BQ+B58E+u+wsWbWBtpb/hYL8RuA/pJ8fT2GffX+wl+daSa08jz9nxNG2k4963XBG/ZVhpUS573mh3BtPo7x/Eb7pE2yd5XvZssY/M/RZLc9SLeDsfD5gfTidi9//pwrzWu7t9lKcN7dxynthAh8vcKrQu1frHTGKBNF662KfoOXU1FsaFxe6x2kjClkBnGvXxwX0bytZ5unK+S9n2jxabTc5M0HUaIyTrfFa+Ljmflc9Xz7JtNdPa4eKz6WAPlb5l6xfLBzopWxcfncvSf7rHRJk2KSN2bKRsvcu2UZmxVIb9qd551e8rZcTERGuQ+qwIjERkjl2+djOlhWfpibnp/qxmP92FVr1/bc9GYxxuI5o3UzdukzYpj+H6nOxra9nHiaksjhDdsasPe9ca/CvOU1GVwUT4t8P921H4T8gsnkdIh+dn/pXrU0mnOZw21CbJv1P5LP0r4jtkbLH171BbCvavnFfeZ8L8K2wv/CuQRU6n/qWSNSbr2mO8xtK/U+Mq6Y/1yQyFJHHtv8Kn2uOC/Gvbf2VEPxJ9SvhY5d+Q+y21iRxLruOzsY6MWGrOkPHZ1b+jFuPzqEX/VcmoZkyIPT53k36/DZnrMd+K/Dbjs6kv6+6VYl9OU+WT07TplvMvWWhfVo3f4t48S+rbjIZl/1b5Xyd5vJdQiTyf7tUdMlbn0J9d/cn6c7M5DO1TNF0+bmT0Z3qdKaaoXeg1Lv7NEhufzyT/6vIKEeO1jX/psdi38a889qpkStcI/u12U3zE1Re+/Yv6QNwvdTDJGi9t2ps1XtKYDJ0PmcZKcU812sRxvms7J47mZ5c+SWJD5LPRg4qqj+nWL8Q5sRVrGar1EG0sOI6ndH3DVWL7wpeuwaY6O1Nh19N+Oqs5uI7Eto3aICxNrCn5rAuZ7Cn2bdJtfZPlL/k8Ld+ki6v9E56XPUvT52mV/YVvmMj2Zz8TEuNMTxfHuFfFUJ60OLrz1utODnFG47fLbSjXy0xSy4gN63EywlhMxWcNmK71svszi5OGTvdJe3rtd8ifB6I/mKBr1ap7uU/sqqTsMb+H5fxBFyuq+yqLnd7cmj33TwyOVVOwuj3nVXRtQtUGWR9jzI6kecZrKSKPuFakU2hZmXXZMDlsS1W9jBavv6eHpf3EtfJ7mKwYV0lX2g9FVY5N+Ung9aH1590+n3KLgEredfiez6u9svisY/Suk9Jsnkli1a+C1m/T7rzqd5UY9mfiXX9R92ibdZUIawTC96b1GBn6rDG1JsPv/b392SkiXVUGmyN0LO5LYi46Zf/Adc/QMaCo8TtG/bH1Z/TsW1QfUPRjm2cZee5PRaT33lEbnhlMax4qe1o/Y8a0icdaoOv9bsh+Hj6jonueoGtHumcMlX9lxLxXq7/D84fSzznGt6rtUerXxYU47/IcPeG3vqBbJ1StETZqg9fS2Akd/0Ovp+/CxD3P+/6bQwzJtsvyh5w+XjeXH9KfXGH3/VbSX4tS4XoftPZbnvcyxX1G5QvW1wbWTkbs7c3mTco6NWODbdxk3R9lGZo/aGxhiknTmETXLVs1c90u9+mBGCf6hs6fsmTq29sxPv8d82CuhCpNjGNjg31blGHrz1i41hd6nuYzbU3XhLQzj7Jt67Otw0uXUdDoH8e4F/joMdVui2dMJc3E+Tetvr6jEtPnPhJaVwz9Y7TDVlx1qnfitlEbtzlTVD0qX/pcm1esxI65PO3mU4eNrr5SZMz46FDE+aIlb5tntb1o/WOUETsW847pvNpaZH225eUpNnrS9yDy9wTysyr9XVOe63+qd3M6e4X6Ptd1Dpc1SdV53ZqFag1hpP+bE5f4ivY74BzXilzWWW1+S0TjJng91Gd9wmbNgpMVz6W8d7GJZwWtWp8p++c8fpjW0Vzff3dJfzGuoersEtnmpjVLupY48H6o7n8/C+kvJn+Lcd6q3QHx3usvZax3W8apvP6rev+UJSHfiCYe/h2aTwTaRi5DO28ZSd9zNhTfJ8b2je7drOo9HtNNbPMW03zOpq2qNqnKFN+0huhlMye2Pe9TdzfCedfxMlRfG7xjncaJ7fiXMYZk3X+ZvuKbXCGh8y8XH8TybajPTfq4tjG2/qb0RJO3SB19ba2SMuoNbW8R/g653qa9sdsRYsssu+ZxPss+tnayFd94yjofEi+hZdvo73q9jd3yisUYbfEpQ9XmMqUIm2fFZh4xkZeE1BNDL5v+ZcqXh/90bSwjflz8U0QcFWHzPOpy0amM+stqf1ad7LltVPqWmG3p3+GiIvLJf8duYA3NcBwbWRpkDXmo7RP+z5E6+8Xswz512dbrW2aMNrpKaBt9y45VR2j9efhAQL/PF38Xadq907NYC5dpZLy3kMX6PUHgeGGS3nfoPn9rObJ9s/4uMntnSt/J5TX+2ZRhtFcB8ZgVmyZbit8GCd/7/C7EOcYK7LdyjNhIlL81nqN/Xf9mOHt/anovP4X0tyem/OUZF9TmscY2nzEulq96ZeVwv2Bxxnwk3s9njT8m/YWOKl199fe53tTXyu5DLojfKWXej6R3RAPtDf1ex/PvtdJ8Q7aP7Ht6XpdXSJf8/wMdQuS/j0/HtKny9KbT+oT2K2ETuW7Tt09Uss5nCdWhjPuMTXzrztO4FHMy+V6TJaH9I6+2C5HPq9oc8xlKRva5rF8M/7tC26/6BsNFivQ//e1pVsyP19VrNrH1D5Wi7oUDdVp8Q5HVr1ztlzXPtH2Gc30+lMX3edH3ecm3fp0+Ps/IPvWH6OpiV7meEMlbzyIkpi1jtDU0Pmm6nMd0jU8bXK7N0jWkb/joHyNebfWgtrJpc0h7QiQP24aKqcwYPnTRIUmG63fRQ5VXLsekgy5NtVXVadLfpjzV9S6xYnuNri159ZmsmLCpJ8/6XSRGOaH659H+GLYtwhd51xvq31B9Qm0UavM84qhoKaNOnfwf"
          )
        ),
        va = new u(m(ua));
      class _a extends In {
        static planFeatures(e) {
          var t;
          e.addStage(Aa),
            e.addStage(["locl", "ccmp"]),
            e.addStage(Ja),
            e.addStage("nukt"),
            e.addStage("akhn"),
            e.addStage("rphf", !1),
            e.addStage("rkrf"),
            e.addStage("pref", !1),
            e.addStage("blwf", !1),
            e.addStage("abvf", !1),
            e.addStage("half", !1),
            e.addStage("pstf", !1),
            e.addStage("vatu"),
            e.addStage("cjct"),
            e.addStage("cfar", !1),
            e.addStage(Ta),
            e.addStage({
              local: ["init"],
              global: [
                "pres",
                "abvs",
                "blws",
                "psts",
                "haln",
                "dist",
                "abvm",
                "blwm",
                "calt",
                "clig",
              ],
            }),
            (e.unicodeScript = ((t = e.script), an[t])),
            (e.indicConfig = ga[e.unicodeScript] || ga.Default),
            (e.isOldSpec =
              e.indicConfig.hasOldSpec &&
              "2" !== e.script[e.script.length - 1]);
        }
        static assignFeatures(e, t) {
          for (let s = t.length - 1; s >= 0; s--) {
            let r = t[s].codePoints[0],
              n = ya[r] || ba[r];
            if (n) {
              let r = n.map((r) => {
                let n = e.font.glyphForCodePoint(r);
                return new qn(e.font, n.id, [r], t[s].features);
              });
              t.splice(s, 1, ...r);
            }
          }
        }
      }
      function La(e) {
        return wa.get(e.codePoints[0]) >> 8;
      }
      function Ca(e) {
        return 1 << (255 & wa.get(e.codePoints[0]));
      }
      (0, n.Z)(_a, "zeroMarkWidths", "NONE");
      class xa {
        constructor(e, t, s, r) {
          (this.category = e),
            (this.position = t),
            (this.syllableType = s),
            (this.syllable = r);
        }
      }
      function Aa(e, t) {
        let s = 0,
          r = 0;
        for (let [n, a, l] of va.match(t.map(La))) {
          if (n > r) {
            ++s;
            for (let e = r; e < n; e++)
              t[e].shaperInfo = new xa(ha.X, fa.End, "non_indic_cluster", s);
          }
          ++s;
          for (let e = n; e <= a; e++)
            t[e].shaperInfo = new xa(1 << La(t[e]), Ca(t[e]), l[0], s);
          r = a + 1;
        }
        if (r < t.length) {
          ++s;
          for (let e = r; e < t.length; e++)
            t[e].shaperInfo = new xa(ha.X, fa.End, "non_indic_cluster", s);
        }
      }
      function ka(e) {
        return e.shaperInfo.category & da;
      }
      function Sa(e) {
        return e.shaperInfo.category & ma;
      }
      function Ia(e) {
        return e.shaperInfo.category & pa;
      }
      function Pa(e, t) {
        for (let s of e) s.features = { [t]: !0 };
        return (
          e[0]._font._layoutEngine.engine.GSUBProcessor.applyFeatures([t], e),
          1 === e.length
        );
      }
      function Ua(e, t, s) {
        let r = [s, t, s];
        return Pa(r.slice(0, 2), "blwf") || Pa(r.slice(1, 3), "blwf")
          ? fa.Below_C
          : Pa(r.slice(0, 2), "pstf") ||
            Pa(r.slice(1, 3), "pstf") ||
            Pa(r.slice(0, 2), "pref") ||
            Pa(r.slice(1, 3), "pref")
          ? fa.Post_C
          : fa.Base_C;
      }
      function Ja(e, t, s) {
        let r = s.indicConfig,
          n = e._layoutEngine.engine.GSUBProcessor.features,
          a = e.glyphForCodePoint(9676).id,
          l = e.glyphForCodePoint(r.virama).id;
        if (l) {
          let s = new qn(e, l, [r.virama]);
          for (let e = 0; e < t.length; e++)
            t[e].shaperInfo.position === fa.Base_C &&
              (t[e].shaperInfo.position = Ua(0, t[e].copy(), s));
        }
        for (let i = 0, o = Oa(t, 0); i < t.length; i = o, o = Oa(t, i)) {
          let { category: l, syllableType: u } = t[i].shaperInfo;
          if ("symbol_cluster" === u || "non_indic_cluster" === u) continue;
          if ("broken_cluster" === u && a) {
            let s = new qn(e, a, [9676]);
            s.shaperInfo = new xa(
              1 << La(s),
              Ca(s),
              t[i].shaperInfo.syllableType,
              t[i].shaperInfo.syllable
            );
            let r = i;
            for (; r < o && t[r].shaperInfo.category === ha.Repha; ) r++;
            t.splice(r++, 0, s), o++;
          }
          let c = o,
            h = i,
            f = !1;
          if (
            r.rephPos !== fa.Ra_To_Become_Reph &&
            n.rphf &&
            i + 3 <= o &&
            (("Implicit" === r.rephMode && !Sa(t[i + 2])) ||
              ("Explicit" === r.rephMode &&
                t[i + 2].shaperInfo.category === ha.ZWJ))
          ) {
            let e = [t[i].copy(), t[i + 1].copy(), t[i + 2].copy()];
            if (
              Pa(e.slice(0, 2), "rphf") ||
              ("Explicit" === r.rephMode && Pa(e, "rphf"))
            ) {
              for (h += 2; h < o && Sa(t[h]); ) h++;
              (c = i), (f = !0);
            }
          } else if (
            "Log_Repha" === r.rephMode &&
            t[i].shaperInfo.category === ha.Repha
          ) {
            for (h++; h < o && Sa(t[h]); ) h++;
            (c = i), (f = !0);
          }
          switch (r.basePos) {
            case "Last": {
              let e = o,
                s = !1;
              do {
                let r = t[--e].shaperInfo;
                if (ka(t[e])) {
                  if (
                    r.position !== fa.Below_C &&
                    (r.position !== fa.Post_C || s)
                  ) {
                    c = e;
                    break;
                  }
                  r.position === fa.Below_C && (s = !0), (c = e);
                } else if (
                  i < e &&
                  r.category === ha.ZWJ &&
                  t[e - 1].shaperInfo.category === ha.H
                )
                  break;
              } while (e > h);
              break;
            }
            case "First":
              c = i;
              for (let e = c + 1; e < o; e++)
                ka(t[e]) && (t[e].shaperInfo.position = fa.Below_C);
          }
          f && c === i && h - c <= 2 && (f = !1);
          for (let e = i; e < c; e++) {
            let s = t[e].shaperInfo;
            s.position = Math.min(fa.Pre_C, s.position);
          }
          c < o && (t[c].shaperInfo.position = fa.Base_C);
          for (let e = c + 1; e < o; e++)
            if (t[e].shaperInfo.category === ha.M) {
              for (let s = e + 1; s < o; s++)
                if (ka(t[s])) {
                  t[s].shaperInfo.position = fa.Final_C;
                  break;
                }
              break;
            }
          if (
            (f && (t[i].shaperInfo.position = fa.Ra_To_Become_Reph),
            s.isOldSpec)
          ) {
            let e = "Malayalam" !== s.unicodeScript;
            for (let s = c + 1; s < o; s++)
              if (t[s].shaperInfo.category === ha.H) {
                let r;
                for (
                  r = o - 1;
                  r > s &&
                  !(ka(t[r]) || (e && t[r].shaperInfo.category === ha.H));
                  r--
                );
                if (t[r].shaperInfo.category !== ha.H && r > s) {
                  let e = t[s];
                  t.splice(s, 0, ...t.splice(s + 1, r - s)), (t[r] = e);
                }
                break;
              }
          }
          let d = fa.Start;
          for (let e = i; e < o; e++) {
            let s = t[e].shaperInfo;
            if (s.category & (ma | ha.N | ha.RS | ha.CM | (pa & s.category))) {
              if (
                ((s.position = d),
                s.category === ha.H && s.position === fa.Pre_M)
              )
                for (let r = e; r > i; r--)
                  if (t[r - 1].shaperInfo.position !== fa.Pre_M) {
                    s.position = t[r - 1].shaperInfo.position;
                    break;
                  }
            } else s.position !== fa.SMVD && (d = s.position);
          }
          let m = c;
          for (let e = c + 1; e < o; e++)
            if (ka(t[e])) {
              for (let s = m + 1; s < e; s++)
                t[s].shaperInfo.position < fa.SMVD &&
                  (t[s].shaperInfo.position = t[e].shaperInfo.position);
              m = e;
            } else t[e].shaperInfo.category === ha.M && (m = e);
          let p = t.slice(i, o);
          p.sort((e, t) => e.shaperInfo.position - t.shaperInfo.position),
            t.splice(i, p.length, ...p);
          for (let e = i; e < o; e++)
            if (t[e].shaperInfo.position === fa.Base_C) {
              c = e;
              break;
            }
          for (
            let e = i;
            e < o && t[e].shaperInfo.position === fa.Ra_To_Become_Reph;
            e++
          )
            t[e].features.rphf = !0;
          let g = !s.isOldSpec && "Pre_And_Post" === r.blwfMode;
          for (let e = i; e < c; e++)
            (t[e].features.half = !0), g && (t[e].features.blwf = !0);
          for (let e = c + 1; e < o; e++)
            (t[e].features.abvf = !0),
              (t[e].features.pstf = !0),
              (t[e].features.blwf = !0);
          if (s.isOldSpec && "Devanagari" === s.unicodeScript)
            for (let e = i; e + 1 < c; e++)
              t[e].shaperInfo.category !== ha.Ra ||
                t[e + 1].shaperInfo.category !== ha.H ||
                (e + 1 !== c && t[e + 2].shaperInfo.category !== ha.ZWJ) ||
                ((t[e].features.blwf = !0), (t[e + 1].features.blwf = !0));
          let y = 2;
          if (n.pref && c + y < o)
            for (let e = c + 1; e + y - 1 < o; e++) {
              if (Pa([t[e].copy(), t[e + 1].copy()], "pref")) {
                for (let s = 0; s < y; s++) t[e++].features.pref = !0;
                if (n.cfar) for (; e < o; e++) t[e].features.cfar = !0;
                break;
              }
            }
          for (let e = i + 1; e < o; e++)
            if (Sa(t[e])) {
              let s = t[e].shaperInfo.category === ha.ZWNJ,
                r = e;
              do {
                r--, s && delete t[r].features.half;
              } while (r > i && !ka(t[r]));
            }
        }
      }
      function Ta(e, t, s) {
        let r = s.indicConfig,
          n = e._layoutEngine.engine.GSUBProcessor.features;
        for (let a = 0, l = Oa(t, 0); a < t.length; a = l, l = Oa(t, a)) {
          let e = !!n.pref,
            o = a;
          for (; o < l; o++)
            if (t[o].shaperInfo.position >= fa.Base_C) {
              if (e && o + 1 < l)
                for (let s = o + 1; s < l; s++)
                  if (t[s].features.pref) {
                    if (
                      !t[s].substituted ||
                      !t[s].isLigated ||
                      t[s].isMultiplied
                    ) {
                      for (o = s; o < l && Ia(t[o]); ) o++;
                      (t[o].shaperInfo.position = fa.BASE_C), (e = !1);
                    }
                    break;
                  }
              if ("Malayalam" === s.unicodeScript)
                for (let e = o + 1; e < l; e++) {
                  for (; e < l && Sa(t[e]); ) e++;
                  if (e === l || !Ia(t[e])) break;
                  for (e++; e < l && Sa(t[e]); ) e++;
                  e < l &&
                    ka(t[e]) &&
                    t[e].shaperInfo.position === fa.Below_C &&
                    ((o = e), (t[o].shaperInfo.position = fa.Base_C));
                }
              a < o && t[o].shaperInfo.position > fa.Base_C && o--;
              break;
            }
          if (
            (o === l && a < o && t[o - 1].shaperInfo.category === ha.ZWJ && o--,
            o < l)
          )
            for (; a < o && t[o].shaperInfo.category & (ha.N | pa); ) o--;
          if (a + 1 < l && a < o) {
            let e = o === l ? o - 2 : o - 1;
            if (
              "Malayalam" !== s.unicodeScript &&
              "Tamil" !== s.unicodeScript
            ) {
              for (; e > a && !(t[e].shaperInfo.category & (ha.M | pa)); ) e--;
              Ia(t[e]) && t[e].shaperInfo.position !== fa.Pre_M
                ? e + 1 < l && Sa(t[e + 1]) && e++
                : (e = a);
            }
            if (a < e && t[e].shaperInfo.position !== fa.Pre_M)
              for (let s = e; s > a; s--)
                if (t[s - 1].shaperInfo.position === fa.Pre_M) {
                  let r = s - 1;
                  r < o && o <= e && o--;
                  let n = t[r];
                  t.splice(r, 0, ...t.splice(r + 1, e - r)), (t[e] = n), e--;
                }
          }
          if (
            a + 1 < l &&
            t[a].shaperInfo.position === fa.Ra_To_Become_Reph &&
            (t[a].shaperInfo.category === ha.Repha) !==
              (t[a].isLigated && !t[a].isMultiplied)
          ) {
            let e,
              s = r.rephPos,
              n = !1;
            if (s !== fa.After_Post) {
              for (e = a + 1; e < o && !Ia(t[e]); ) e++;
              if (
                (e < o &&
                  Ia(t[e]) &&
                  (e + 1 < o && Sa(t[e + 1]) && e++, (n = !0)),
                !n && s === fa.After_Main)
              ) {
                for (
                  e = o;
                  e + 1 < l && t[e + 1].shaperInfo.position <= fa.After_Main;

                )
                  e++;
                n = e < l;
              }
              if (!n && s === fa.After_Sub) {
                for (
                  e = o;
                  e + 1 < l &&
                  !(
                    t[e + 1].shaperInfo.position &
                    (fa.Post_C | fa.After_Post | fa.SMVD)
                  );

                )
                  e++;
                n = e < l;
              }
            }
            if (!n) {
              for (e = a + 1; e < o && !Ia(t[e]); ) e++;
              e < o && Ia(t[e]) && (e + 1 < o && Sa(t[e + 1]) && e++, (n = !0));
            }
            if (!n) {
              for (e = l - 1; e > a && t[e].shaperInfo.position === fa.SMVD; )
                e--;
              if (Ia(t[e]))
                for (let s = o + 1; s < e; s++)
                  t[s].shaperInfo.category === ha.M && e--;
            }
            let i = t[a];
            t.splice(a, 0, ...t.splice(a + 1, e - a)),
              (t[e] = i),
              a < o && o <= e && o--;
          }
          if (e && o + 1 < l)
            for (let r = o + 1; r < l; r++)
              if (t[r].features.pref) {
                if (t[r].isLigated && !t[r].isMultiplied) {
                  let e = o;
                  if (
                    "Malayalam" !== s.unicodeScript &&
                    "Tamil" !== s.unicodeScript
                  ) {
                    for (
                      ;
                      e > a && !(t[e - 1].shaperInfo.category & (ha.M | pa));

                    )
                      e--;
                    if (e > a && t[e - 1].shaperInfo.category === ha.M) {
                      let s = r;
                      for (let r = o + 1; r < s; r++)
                        if (t[r].shaperInfo.category === ha.M) {
                          e--;
                          break;
                        }
                    }
                  }
                  e > a && Ia(t[e - 1]) && e < l && Sa(t[e]) && e++;
                  let n = r,
                    i = t[n];
                  t.splice(e + 1, 0, ...t.splice(e, n - e)),
                    (t[e] = i),
                    e <= o && o < n && o++;
                }
                break;
              }
          t[a].shaperInfo.position !== fa.Pre_M ||
            (a && /Cf|Mn/.test((0, i.n3)(t[a - 1].codePoints[0]))) ||
            (t[a].features.init = !0);
        }
      }
      function Oa(e, t) {
        if (t >= e.length) return t;
        let s = e[t].shaperInfo.syllable;
        for (; ++t < e.length && e[t].shaperInfo.syllable === s; );
        return t;
      }
      const { categories: Fa, decompositions: Da } = m(ca),
        Ma = new o(
          Qr(
            "AAACAAAAAADQqQAAAVEMrvPtnH+oHUcVx+fd99799W5e8mx+9NkYm7YUI2KtimkVDG3FWgVTFY1Fqa2VJirYB0IaUFLBaKGJViXir6oxKCSBoi0UTKtg2yA26h+milYNtMH+0WK1VQyvtBS/487hnncyMzuzu7N7n7kHPszu7OzMmTNzdmdmfzzfUmpiUqkemAMbwSZwKbjcxM1XEL4VvB28G3zAk+56cLMlfgdYADvBbvBF8GWwH9xl+CFLfwj8BPwU/MKS38/AMfA86v9ro9ucQcdR+CjCP4CT4EnwDPg3eAFMTik1A+bAPNgINoFLwGawZSpLfzXCrWAb+AjYDm4BO8FusAfsA/vBXeAgOALuNfv3g4fAcXACPAaeAE+B58Bp8NJUpnN7WqlZsHY629+A8GLwWvAG8BZwJXinOf5ehB8EN4AdYGE6q7dmF9uugs8hvz0V58nZK/L+Kva/BX4ADoN7prP6HgUPgkfA73L0eQzHnwBPgX+Y80+DF8FUW6lBO4tbjXA9uAi8pj3sS2/E9mawBVwNtoJt5pzrTXgzwk+B7awP7sT+7nY6WxFfQBlfAl8H3wU/Anezcu/D9s/BMRN3HOEJ8EdwMkC/J5HmmXZmq2fBIjgEVEepbieLX4Fw0MnSrzRxmrVsm7MB8ReDV4vjr3ekJy7rZGVPMb196Xm6oug83oRyt4CrwDVgK9gGPtzxn3uTOD6YPDPNJ5Hm0+AznazffJ7Z4KSnXncg3VfAN8EBhx42/z/UGdbrx52sr9yH8AFTrt5+2GzfnWPbKuw7ZszZyNh/xowZM2bMmDFjxsQyZ5lPNs3h9nBNYHuAfr9ic9ffiHnsJzznU91/j3P+2snWYf6G8O/gn+A0eMnEt7vQp5ulX4NwHmwEm7rZ8UsRXg6uMPvXIHwPuK7rLl+nu9FzfMyYMWPGpGVuslmarv+YMWPSkNq/d2D8uNDNngvdivA2y3jy9m72bF9v3ymOf2MExp8fG2TsAcfA2wJYBJetWBq3i+0fwPafwLmzSl0LFmZNPMLHZ4fpnsX2AdjgcXB+T6kPge+AG7D/vXYW/tLsc9r9M+MkVyLNR1m6g9g+ZfYvmMExcHCm+ftP0+T5y/e17Uw/PYLwHnC0m80TH+zG30/3mjSDnPS2/B4pUJ4rX3n+b5H3o92l6UjfvZ7y/oJzToGnu8O66XTPYf8/Jr8XWL6TPXf9bPnHtmVs+89AnxVgDVgPLgKvAg+Y/F6H7c1gC7jKHH8XeJ/x15vAjt4wvwVs7wKfBXvAPvA18G1wsJevj36f5gjS3etIq+ft9+PYQ73h/nFsn2D7f+5l75bo/VPYftpTblFb2/Jo2pdjfL0uXOX/qxfnp8vZVk2Xv9hbmu+LxvYt3A/7/WZsPoptPkr9bdCv1ya+d4TuMO8Tre5n4XkILwSbzP4l/WHazX1//r2O/z7cFHnvSYW8R/Vm02ZXIHxHze1Xdf9bbn7p0z2kDroNr2X9WL+7937sX9fP+v9h9n6jTrfI3jG9EfsfN3G35PR/G4uRfY3eMTwdkFa/C3hrf2kcfy/xYTOmprrfZsLbEe7rDPW/U9Rrv9k/ahmTL0cWWxP/YxRkgtES+zwNhZPs+FQgMj/liEsto2HxsZBQX2pZoLZqWc5riXDaQBLSt1L3hcnE+Vct7aYVKCEhbXk2+b7NZ84mmXAwCiL14Ne85S62MYPcXi5StM/YxlJF2lfabznZsC6/C807xvZV+yFve9d1KY//d3HNO8pKUXuTDh0Gpp7B852q6QFMgdWM2dfbAxOuEPQEfcEsO5fquJLZrMfyCtWP0heZF6oSdiH9u4aQvJRIJ/eL6BBynItLp5D2JRkY5L5u3xAf6lviXHWSZcfaKO/+5zvO/c9Xtq8uRXSObd+8bS0zJrS1rxTyX7k/a0nrk5D+mHeOC90uq1Q216X57lykfqHt62uTGJ2rat+i/kttyq/RSi29PlclZf2Xxq55ZeSV34T96d5X5PqZJ9I3ZX2lnkXt3xL1Kyrav/LutbZ6uGxuS6ss6V3pXOXY4kP7EBfyJT7+4TJQS9uf74f6n+3+6ZIi9bCtieatFfCxUMx4KMYfy/pzrB30vm88q9SZ11K+n9eeNN612UFKWX8uI9TmRca7TbWvKy2JvF6naF+b/0uRupZp35cZikhZvyniY2R/CbdB3vXynIC6hbRBHf4l1xps6w4x/lVEtxRtGZMuRA8uNh/jfYV8kdpsBUszcODrD7E2JT2KrB3V6XMhbdNjcXItxzaOJWkpf976/I5glQn1sbLP86U9FQvz4l0S28/lcWUJbbrE2l+Z/TlHvi4/kvZXLMyrmy1PW7x8hl6UFgvlmNM1Jq3aJ3Se0yJcpdwS6mOp/ZgLX5N1rdFKaIzH9ztquMbqq+/qCFRk+hRoyZvrTHuO8fNd/djmEzZJ3TdisN1bNQNl7y96DV/3mVkTtwasVdk1ai6ybGlDek8nT1fXc4M5tVSPvhqOsWQeXQs8L1n3IradU8OxCeVjK7dr7Dpl0cMHnUvt18TzfVsfb/pZY56fV2GnVPVIYaOi9xcZJ8cmKcu3wcuPsVHV5cdKFfZXNZefp5sWft+wzR1cczKCxh99NRx76HvwOpWNv6YZtAajt6WPyPswtVVs/VOJ7xpYx3VR31er7gMxNuV9Q443CDlW43KuYSXblsybfKYt58trfez7A1X7Tdm+V7TcoudL+LpVGf2khN63U5OyD5Af0NoUv06l7Jc0Rte+so4xL9Ayy3Rz+SufY5Jf267xcm7J4dd3kumIOrmk7Pl549bUY1puI91Gdb8Tpu+9tjmhXFdwtfVsTv5SQvXKW0cK4eXgPBO6iJ07NNVOHH7/tF1jyJdnWbrU/Uau3VNI156QZ2ZaZFu76i6vQXy9YJ2H9QZ97aF3p1xlx1yfuYRcd0Kl7NyaX190+pUOKI0tvus5j7/nSWKLo3FER8R3LHEx8gqwge1POgi1l1yfirV3zHpISHxs3vLeFXOellcG1DFGbGP00PPkeKEOaXIsqhzbruOh9Qk5L08nW2grJ0avsvWocv0zRh/fGCG0TV35hB4v0rds5Vddjm/sFCKx+aXSt2yalPZsolxXW46CDnXp0YQ0rdso9OUYPSYT6+yzuxxzlrVfFfavQ/LKqsP+dbVzE/0qRb8pKin6V9U6Fnn24pqHufLMWy90nV+0DkXmcrb0Uq+6pU7/qcs/67SHTeTaaBk9ipyXQvLqW1U7uPKpux/ESlP9umydR8H3UjzHoXxj0/J1Yr5ubHsPrWOJqxK+hk5r+EVtH3pe1XWIXa+1vQ9YJ/oZre1bGReh3xKWeX7BxfYstwh5errGJi59be8482cSsfUPQT4Xlc9K+XMmatcY0fo2+SxYQs/4XO8M03Ng/TxujYH+FRELSdH+6mtveu8itb1Cy7C9X8GfsVOcfN86RHg56wJ0ob5qOz/E/rIdq7YhF34/0cfoeWKVftJjIbWDbDfXeXR/prBOKWJ/3dd43+sr+32TvgEIEZ6/7Zt5/l7ghMm77u+ey4gcz5xfktA5vE9C5vy2Y3lpXeX40tHcLMX42qZHS/ltZluXiSlDxillt3VdIvufbc0j75wy5aWaOxWRUZmfl5nDSh3LzoWbXJOg8uumKkndp1PnH2IPfe+U33z7vjWhdPQuWMh4raqxWMh9X89RZtSZ7/JpyXs3NWQcETN3CZHU/lmVnstZB1+ZfM5A/1VJ2V9t8wTXN1S+f27mzaulbCxJHePwC1Tz/0K1/VdPvtOsba+vL7ZxM1/jakJ/V9/yfdtNx+i7bhVRRll/rrK+sk3qLt/3T0afH+tzz1HDfxzZ/HlGDduK1y/GL21zvKptQGWFSpVlFm0z+ZxD/vdAt9EqQ971NkRHW7qytog53+cfVfeFGLStfddfYka5x6dl+yi//4z6/559aUn4/+/k2pv8BqfM/0qVCnu+If2OJPRZUcyzJF/5RQm5xtM9ln+LRN+8U9+iMQS1Veg9q2z/TlV3Ett3/rLOIXOookidy/5X3GYD+S8a1z2e0vH695T9vhEqdbY//0dU3jWZ2rYq/cvCRT8r08/NLlT5/zySdSurv1ybLiup5tAp5+NNzfPJ5r61warapajItfTQNeK610/rWEMPyb+uOo/ierRNbGU01Z+rqneIPWNsT9t1rD+OYr8rm0eKvp/Ch1P4Yepyy+hWVD/f+VWXX5X+TZdfZZ+KLb9J+S8="
          )
        ),
        Ga = new u(m(ca));
      class Ea extends In {
        static planFeatures(e) {
          e.addStage(za),
            e.addStage(["locl", "ccmp", "nukt", "akhn"]),
            e.addStage(Ra),
            e.addStage(["rphf"], !1),
            e.addStage(Na),
            e.addStage(Ra),
            e.addStage(["pref"]),
            e.addStage(Wa),
            e.addStage([
              "rkrf",
              "abvf",
              "blwf",
              "half",
              "pstf",
              "vatu",
              "cjct",
            ]),
            e.addStage(Xa),
            e.addStage([
              "abvs",
              "blws",
              "pres",
              "psts",
              "dist",
              "abvm",
              "blwm",
            ]);
        }
        static assignFeatures(e, t) {
          for (let s = t.length - 1; s >= 0; s--) {
            let r = t[s].codePoints[0];
            if (Da[r]) {
              let n = Da[r].map((r) => {
                let n = e.font.glyphForCodePoint(r);
                return new qn(e.font, n.id, [r], t[s].features);
              });
              t.splice(s, 1, ...n);
            }
          }
        }
      }
      function Ba(e) {
        return Ma.get(e.codePoints[0]);
      }
      (0, n.Z)(Ea, "zeroMarkWidths", "BEFORE_GPOS");
      class Va {
        constructor(e, t, s) {
          (this.category = e), (this.syllableType = t), (this.syllable = s);
        }
      }
      function za(e, t) {
        let s = 0;
        for (let [r, n, a] of Ga.match(t.map(Ba))) {
          ++s;
          for (let l = r; l <= n; l++)
            t[l].shaperInfo = new Va(Fa[Ba(t[l])], a[0], s);
          let e = "R" === t[r].shaperInfo.category ? 1 : Math.min(3, n - r);
          for (let s = r; s < r + e; s++) t[s].features.rphf = !0;
        }
      }
      function Ra(e, t) {
        for (let s of t) s.substituted = !1;
      }
      function Na(e, t) {
        for (let s of t)
          s.substituted && s.features.rphf && (s.shaperInfo.category = "R");
      }
      function Wa(e, t) {
        for (let s of t) s.substituted && (s.shaperInfo.category = "VPre");
      }
      function Xa(e, t) {
        let s = e.glyphForCodePoint(9676).id;
        for (let r = 0, n = qa(t, 0); r < t.length; r = n, n = qa(t, r)) {
          let a,
            l,
            i = t[r].shaperInfo,
            o = i.syllableType;
          if (
            "virama_terminated_cluster" === o ||
            "standard_cluster" === o ||
            "broken_cluster" === o
          ) {
            if ("broken_cluster" === o && s) {
              let l = new qn(e, s, [9676]);
              for (
                l.shaperInfo = i, a = r;
                a < n && "R" === t[a].shaperInfo.category;
                a++
              );
              t.splice(++a, 0, l), n++;
            }
            if ("R" === i.category && n - r > 1)
              for (a = r + 1; a < n; a++)
                if (((i = t[a].shaperInfo), ja(i) || Ha(t[a]))) {
                  Ha(t[a]) && a--,
                    t.splice(r, 0, ...t.splice(r + 1, a - r), t[a]);
                  break;
                }
            for (a = r, l = n; a < n; a++)
              (i = t[a].shaperInfo),
                ja(i) || Ha(t[a])
                  ? (l = Ha(t[a]) ? a + 1 : a)
                  : ("VPre" === i.category || "VMPre" === i.category) &&
                    l < a &&
                    t.splice(l, 1, t[a], ...t.splice(l, a - l));
          }
        }
      }
      function qa(e, t) {
        if (t >= e.length) return t;
        let s = e[t].shaperInfo.syllable;
        for (; ++t < e.length && e[t].shaperInfo.syllable === s; );
        return t;
      }
      function Ha(e) {
        return "H" === e.shaperInfo.category && !e.isLigated;
      }
      function ja(e) {
        return "B" === e.category || "GB" === e.category;
      }
      const Ya = {
        arab: zn,
        mong: zn,
        syrc: zn,
        "nko ": zn,
        phag: zn,
        mand: zn,
        mani: zn,
        phlp: zn,
        hang: Hn,
        bng2: _a,
        beng: _a,
        dev2: _a,
        deva: _a,
        gjr2: _a,
        gujr: _a,
        guru: _a,
        gur2: _a,
        knda: _a,
        knd2: _a,
        mlm2: _a,
        mlym: _a,
        ory2: _a,
        orya: _a,
        taml: _a,
        tml2: _a,
        telu: _a,
        tel2: _a,
        khmr: _a,
        bali: Ea,
        batk: Ea,
        brah: Ea,
        bugi: Ea,
        buhd: Ea,
        cakm: Ea,
        cham: Ea,
        dupl: Ea,
        egyp: Ea,
        gran: Ea,
        hano: Ea,
        java: Ea,
        kthi: Ea,
        kali: Ea,
        khar: Ea,
        khoj: Ea,
        sind: Ea,
        lepc: Ea,
        limb: Ea,
        mahj: Ea,
        mtei: Ea,
        modi: Ea,
        hmng: Ea,
        rjng: Ea,
        saur: Ea,
        shrd: Ea,
        sidd: Ea,
        sinh: _a,
        sund: Ea,
        sylo: Ea,
        tglg: Ea,
        tagb: Ea,
        tale: Ea,
        lana: Ea,
        tavt: Ea,
        takr: Ea,
        tibt: Ea,
        tfng: Ea,
        tirh: Ea,
        latn: In,
        DFLT: In,
      };
      class $a extends Xn {
        applyLookup(e, t) {
          switch (e) {
            case 1: {
              let e = this.coverageIndex(t.coverage);
              if (-1 === e) return !1;
              let s = this.glyphIterator.cur;
              switch (t.version) {
                case 1:
                  s.id = (s.id + t.deltaGlyphID) & 65535;
                  break;
                case 2:
                  s.id = t.substitute.get(e);
              }
              return !0;
            }
            case 2: {
              let e = this.coverageIndex(t.coverage);
              if (-1 !== e) {
                let s = t.sequences.get(e);
                if (0 === s.length)
                  return this.glyphs.splice(this.glyphIterator.index, 1), !0;
                (this.glyphIterator.cur.id = s[0]),
                  (this.glyphIterator.cur.ligatureComponent = 0);
                let r = this.glyphIterator.cur.features,
                  n = this.glyphIterator.cur,
                  a = s.slice(1).map((e, t) => {
                    let s = new qn(this.font, e, void 0, r);
                    return (
                      (s.shaperInfo = n.shaperInfo),
                      (s.isLigated = n.isLigated),
                      (s.ligatureComponent = t + 1),
                      (s.substituted = !0),
                      (s.isMultiplied = !0),
                      s
                    );
                  });
                return (
                  this.glyphs.splice(this.glyphIterator.index + 1, 0, ...a), !0
                );
              }
              return !1;
            }
            case 3: {
              let e = this.coverageIndex(t.coverage);
              if (-1 !== e) {
                let s = 0;
                return (
                  (this.glyphIterator.cur.id = t.alternateSet.get(e)[s]), !0
                );
              }
              return !1;
            }
            case 4: {
              let e = this.coverageIndex(t.coverage);
              if (-1 === e) return !1;
              for (let r of t.ligatureSets.get(e)) {
                let e = this.sequenceMatchIndices(1, r.components);
                if (!e) continue;
                let t = this.glyphIterator.cur,
                  n = t.codePoints.slice();
                for (let s of e) n.push(...this.glyphs[s].codePoints);
                let a = new qn(this.font, r.glyph, n, t.features);
                (a.shaperInfo = t.shaperInfo),
                  (a.isLigated = !0),
                  (a.substituted = !0);
                let l = t.isMark;
                for (let s = 0; s < e.length && l; s++)
                  l = this.glyphs[e[s]].isMark;
                a.ligatureID = l ? null : this.ligatureID++;
                let i = t.ligatureID,
                  o = t.codePoints.length,
                  u = o,
                  c = this.glyphIterator.index + 1;
                for (let r of e) {
                  if (l) c = r;
                  else
                    for (; c < r; ) {
                      var s =
                        u -
                        o +
                        Math.min(this.glyphs[c].ligatureComponent || 1, o);
                      (this.glyphs[c].ligatureID = a.ligatureID),
                        (this.glyphs[c].ligatureComponent = s),
                        c++;
                    }
                  (i = this.glyphs[c].ligatureID),
                    (o = this.glyphs[c].codePoints.length),
                    (u += o),
                    c++;
                }
                if (i && !l)
                  for (
                    let r = c;
                    r < this.glyphs.length && this.glyphs[r].ligatureID === i;
                    r++
                  ) {
                    s =
                      u -
                      o +
                      Math.min(this.glyphs[r].ligatureComponent || 1, o);
                    this.glyphs[r].ligatureComponent = s;
                  }
                for (let s = e.length - 1; s >= 0; s--)
                  this.glyphs.splice(e[s], 1);
                return (this.glyphs[this.glyphIterator.index] = a), !0;
              }
              return !1;
            }
            case 5:
              return this.applyContext(t);
            case 6:
              return this.applyChainingContext(t);
            case 7:
              return this.applyLookup(t.lookupType, t.extension);
            default:
              throw new Error(`GSUB lookupType ${e} is not supported`);
          }
        }
      }
      class Za extends Xn {
        applyPositionValue(e, t) {
          let s = this.positions[this.glyphIterator.peekIndex(e)];
          null != t.xAdvance && (s.xAdvance += t.xAdvance),
            null != t.yAdvance && (s.yAdvance += t.yAdvance),
            null != t.xPlacement && (s.xOffset += t.xPlacement),
            null != t.yPlacement && (s.yOffset += t.yPlacement);
          let r = this.font._variationProcessor,
            n = this.font.GDEF && this.font.GDEF.itemVariationStore;
          r &&
            n &&
            (t.xPlaDevice &&
              (s.xOffset += r.getDelta(n, t.xPlaDevice.a, t.xPlaDevice.b)),
            t.yPlaDevice &&
              (s.yOffset += r.getDelta(n, t.yPlaDevice.a, t.yPlaDevice.b)),
            t.xAdvDevice &&
              (s.xAdvance += r.getDelta(n, t.xAdvDevice.a, t.xAdvDevice.b)),
            t.yAdvDevice &&
              (s.yAdvance += r.getDelta(n, t.yAdvDevice.a, t.yAdvDevice.b)));
        }
        applyLookup(e, t) {
          switch (e) {
            case 1: {
              let e = this.coverageIndex(t.coverage);
              if (-1 === e) return !1;
              switch (t.version) {
                case 1:
                  this.applyPositionValue(0, t.value);
                  break;
                case 2:
                  this.applyPositionValue(0, t.values.get(e));
              }
              return !0;
            }
            case 2: {
              let e = this.glyphIterator.peek();
              if (!e) return !1;
              let r = this.coverageIndex(t.coverage);
              if (-1 === r) return !1;
              switch (t.version) {
                case 1:
                  let n = t.pairSets.get(r);
                  for (let t of n)
                    if (t.secondGlyph === e.id)
                      return (
                        this.applyPositionValue(0, t.value1),
                        this.applyPositionValue(1, t.value2),
                        !0
                      );
                  return !1;
                case 2:
                  let a = this.getClassID(
                      this.glyphIterator.cur.id,
                      t.classDef1
                    ),
                    l = this.getClassID(e.id, t.classDef2);
                  if (-1 === a || -1 === l) return !1;
                  var s = t.classRecords.get(a).get(l);
                  return (
                    this.applyPositionValue(0, s.value1),
                    this.applyPositionValue(1, s.value2),
                    !0
                  );
              }
            }
            case 3: {
              let e = this.glyphIterator.peekIndex(),
                s = this.glyphs[e];
              if (!s) return !1;
              let r = t.entryExitRecords[this.coverageIndex(t.coverage)];
              if (!r || !r.exitAnchor) return !1;
              let n = t.entryExitRecords[this.coverageIndex(t.coverage, s.id)];
              if (!n || !n.entryAnchor) return !1;
              let a,
                l = this.getAnchor(n.entryAnchor),
                i = this.getAnchor(r.exitAnchor),
                o = this.positions[this.glyphIterator.index],
                u = this.positions[e];
              switch (this.direction) {
                case "ltr":
                  (o.xAdvance = i.x + o.xOffset),
                    (a = l.x + u.xOffset),
                    (u.xAdvance -= a),
                    (u.xOffset -= a);
                  break;
                case "rtl":
                  (a = i.x + o.xOffset),
                    (o.xAdvance -= a),
                    (o.xOffset -= a),
                    (u.xAdvance = l.x + u.xOffset);
              }
              return (
                this.glyphIterator.flags.rightToLeft
                  ? ((this.glyphIterator.cur.cursiveAttachment = e),
                    (o.yOffset = l.y - i.y))
                  : ((s.cursiveAttachment = this.glyphIterator.index),
                    (o.yOffset = i.y - l.y)),
                !0
              );
            }
            case 4: {
              let e = this.coverageIndex(t.markCoverage);
              if (-1 === e) return !1;
              let s = this.glyphIterator.index;
              for (
                ;
                --s >= 0 &&
                (this.glyphs[s].isMark || this.glyphs[s].ligatureComponent > 0);

              );
              if (s < 0) return !1;
              let r = this.coverageIndex(t.baseCoverage, this.glyphs[s].id);
              if (-1 === r) return !1;
              let n = t.markArray[e],
                a = t.baseArray[r][n.class];
              return this.applyAnchor(n, a, s), !0;
            }
            case 5: {
              let e = this.coverageIndex(t.markCoverage);
              if (-1 === e) return !1;
              let s = this.glyphIterator.index;
              for (; --s >= 0 && this.glyphs[s].isMark; );
              if (s < 0) return !1;
              let r = this.coverageIndex(t.ligatureCoverage, this.glyphs[s].id);
              if (-1 === r) return !1;
              let n = t.ligatureArray[r],
                a = this.glyphIterator.cur,
                l = this.glyphs[s],
                i =
                  l.ligatureID &&
                  l.ligatureID === a.ligatureID &&
                  a.ligatureComponent > 0
                    ? Math.min(a.ligatureComponent, l.codePoints.length) - 1
                    : l.codePoints.length - 1,
                o = t.markArray[e],
                u = n[i][o.class];
              return this.applyAnchor(o, u, s), !0;
            }
            case 6: {
              let e = this.coverageIndex(t.mark1Coverage);
              if (-1 === e) return !1;
              let s = this.glyphIterator.peekIndex(-1),
                r = this.glyphs[s];
              if (!r || !r.isMark) return !1;
              let n = this.glyphIterator.cur,
                a = !1;
              if (
                (n.ligatureID === r.ligatureID
                  ? n.ligatureID
                    ? n.ligatureComponent === r.ligatureComponent && (a = !0)
                    : (a = !0)
                  : ((n.ligatureID && !n.ligatureComponent) ||
                      (r.ligatureID && !r.ligatureComponent)) &&
                    (a = !0),
                !a)
              )
                return !1;
              let l = this.coverageIndex(t.mark2Coverage, r.id);
              if (-1 === l) return !1;
              let i = t.mark1Array[e],
                o = t.mark2Array[l][i.class];
              return this.applyAnchor(i, o, s), !0;
            }
            case 7:
              return this.applyContext(t);
            case 8:
              return this.applyChainingContext(t);
            case 9:
              return this.applyLookup(t.lookupType, t.extension);
            default:
              throw new Error(`Unsupported GPOS table: ${e}`);
          }
        }
        applyAnchor(e, t, s) {
          let r = this.getAnchor(t),
            n = this.getAnchor(e.markAnchor),
            a = (this.positions[s], this.positions[this.glyphIterator.index]);
          (a.xOffset = r.x - n.x),
            (a.yOffset = r.y - n.y),
            (this.glyphIterator.cur.markAttachment = s);
        }
        getAnchor(e) {
          let t = e.xCoordinate,
            s = e.yCoordinate,
            r = this.font._variationProcessor,
            n = this.font.GDEF && this.font.GDEF.itemVariationStore;
          return (
            r &&
              n &&
              (e.xDeviceTable &&
                (t += r.getDelta(n, e.xDeviceTable.a, e.xDeviceTable.b)),
              e.yDeviceTable &&
                (s += r.getDelta(n, e.yDeviceTable.a, e.yDeviceTable.b))),
            { x: t, y: s }
          );
        }
        applyFeatures(e, t, s) {
          super.applyFeatures(e, t, s);
          for (var r = 0; r < this.glyphs.length; r++)
            this.fixCursiveAttachment(r);
          this.fixMarkAttachment();
        }
        fixCursiveAttachment(e) {
          let t = this.glyphs[e];
          if (null != t.cursiveAttachment) {
            let s = t.cursiveAttachment;
            (t.cursiveAttachment = null),
              this.fixCursiveAttachment(s),
              (this.positions[e].yOffset += this.positions[s].yOffset);
          }
        }
        fixMarkAttachment() {
          for (let e = 0; e < this.glyphs.length; e++) {
            let t = this.glyphs[e];
            if (null != t.markAttachment) {
              let s = t.markAttachment;
              if (
                ((this.positions[e].xOffset += this.positions[s].xOffset),
                (this.positions[e].yOffset += this.positions[s].yOffset),
                "ltr" === this.direction)
              )
                for (let t = s; t < e; t++)
                  (this.positions[e].xOffset -= this.positions[t].xAdvance),
                    (this.positions[e].yOffset -= this.positions[t].yAdvance);
              else
                for (let t = s + 1; t < e + 1; t++)
                  (this.positions[e].xOffset += this.positions[t].xAdvance),
                    (this.positions[e].yOffset += this.positions[t].yAdvance);
            }
          }
        }
      }
      class Ka {
        setup(e) {
          this.glyphInfos = e.glyphs.map(
            (e) => new qn(this.font, e.id, [...e.codePoints])
          );
          let t = null;
          this.GPOSProcessor &&
            (t = this.GPOSProcessor.selectScript(
              e.script,
              e.language,
              e.direction
            )),
            this.GSUBProcessor &&
              (t = this.GSUBProcessor.selectScript(
                e.script,
                e.language,
                e.direction
              )),
            (this.shaper = (function (e) {
              Array.isArray(e) || (e = [e]);
              for (let t of e) {
                let e = Ya[t];
                if (e) return e;
              }
              return In;
            })(t)),
            (this.plan = new Ln(this.font, t, e.direction)),
            this.shaper.plan(this.plan, this.glyphInfos, e.features);
          for (let s in this.plan.allFeatures) e.features[s] = !0;
        }
        substitute(e) {
          this.GSUBProcessor &&
            (this.plan.process(this.GSUBProcessor, this.glyphInfos),
            (e.glyphs = this.glyphInfos.map((e) =>
              this.font.getGlyph(e.id, e.codePoints)
            )));
        }
        position(e) {
          return (
            "BEFORE_GPOS" === this.shaper.zeroMarkWidths &&
              this.zeroMarkAdvances(e.positions),
            this.GPOSProcessor &&
              this.plan.process(
                this.GPOSProcessor,
                this.glyphInfos,
                e.positions
              ),
            "AFTER_GPOS" === this.shaper.zeroMarkWidths &&
              this.zeroMarkAdvances(e.positions),
            "rtl" === e.direction &&
              (e.glyphs.reverse(), e.positions.reverse()),
            this.GPOSProcessor && this.GPOSProcessor.features
          );
        }
        zeroMarkAdvances(e) {
          for (let t = 0; t < this.glyphInfos.length; t++)
            this.glyphInfos[t].isMark &&
              ((e[t].xAdvance = 0), (e[t].yAdvance = 0));
        }
        cleanup() {
          (this.glyphInfos = null), (this.plan = null), (this.shaper = null);
        }
        getAvailableFeatures(e, t) {
          let s = [];
          return (
            this.GSUBProcessor &&
              (this.GSUBProcessor.selectScript(e, t),
              s.push(...Object.keys(this.GSUBProcessor.features))),
            this.GPOSProcessor &&
              (this.GPOSProcessor.selectScript(e, t),
              s.push(...Object.keys(this.GPOSProcessor.features))),
            s
          );
        }
        constructor(e) {
          (this.font = e),
            (this.glyphInfos = null),
            (this.plan = null),
            (this.GSUBProcessor = null),
            (this.GPOSProcessor = null),
            (this.fallbackPosition = !0),
            e.GSUB && (this.GSUBProcessor = new $a(e, e.GSUB)),
            e.GPOS && (this.GPOSProcessor = new Za(e, e.GPOS));
        }
      }
      class Qa {
        layout(e, t, s, r, n) {
          if (
            ("string" === typeof t && ((n = r), (r = s), (s = t), (t = [])),
            "string" === typeof e)
          ) {
            null == s &&
              (s = (function (e) {
                let t = e.length,
                  s = 0;
                for (; s < t; ) {
                  let r = e.charCodeAt(s++);
                  if (55296 <= r && r <= 56319 && s < t) {
                    let t = e.charCodeAt(s);
                    56320 <= t &&
                      t <= 57343 &&
                      (s++, (r = ((1023 & r) << 10) + (1023 & t) + 65536));
                  }
                  let n = (0, i.iM)(r);
                  if ("Common" !== n && "Inherited" !== n && "Unknown" !== n)
                    return nn[n];
                }
                return nn.Unknown;
              })(e));
            var a = this.font.glyphsForString(e);
          } else {
            if (null == s) {
              let t = [];
              for (let s of e) t.push(...s.codePoints);
              s = (function (e) {
                for (let t = 0; t < e.length; t++) {
                  let s = e[t],
                    r = (0, i.iM)(s);
                  if ("Common" !== r && "Inherited" !== r && "Unknown" !== r)
                    return nn[r];
                }
                return nn.Unknown;
              })(t);
            }
            a = e;
          }
          let l = new un(a, t, s, r, n);
          return 0 === a.length
            ? ((l.positions = []), l)
            : (this.engine && this.engine.setup && this.engine.setup(l),
              this.substitute(l),
              this.position(l),
              this.hideDefaultIgnorables(l.glyphs, l.positions),
              this.engine && this.engine.cleanup && this.engine.cleanup(),
              l);
        }
        substitute(e) {
          this.engine && this.engine.substitute && this.engine.substitute(e);
        }
        position(e) {
          e.positions = e.glyphs.map((e) => new cn(e.advanceWidth));
          let t = null;
          this.engine && this.engine.position && (t = this.engine.position(e)),
            t ||
              (this.engine && !this.engine.fallbackPosition) ||
              (this.unicodeLayoutEngine ||
                (this.unicodeLayoutEngine = new sn(this.font)),
              this.unicodeLayoutEngine.positionGlyphs(e.glyphs, e.positions)),
            (t && t.kern) ||
              !1 === e.features.kern ||
              !this.font.kern ||
              (this.kernProcessor || (this.kernProcessor = new tn(this.font)),
              this.kernProcessor.process(e.glyphs, e.positions),
              (e.features.kern = !0));
        }
        hideDefaultIgnorables(e, t) {
          let s = this.font.glyphForCodePoint(32);
          for (let r = 0; r < e.length; r++)
            this.isDefaultIgnorable(e[r].codePoints[0]) &&
              ((e[r] = s), (t[r].xAdvance = 0), (t[r].yAdvance = 0));
        }
        isDefaultIgnorable(e) {
          let t = e >> 16;
          if (0 === t)
            switch (e >> 8) {
              case 0:
                return 173 === e;
              case 3:
                return 847 === e;
              case 6:
                return 1564 === e;
              case 23:
                return 6068 <= e && e <= 6069;
              case 24:
                return 6155 <= e && e <= 6158;
              case 32:
                return (
                  (8203 <= e && e <= 8207) ||
                  (8234 <= e && e <= 8238) ||
                  (8288 <= e && e <= 8303)
                );
              case 254:
                return (65024 <= e && e <= 65039) || 65279 === e;
              case 255:
                return 65520 <= e && e <= 65528;
              default:
                return !1;
            }
          else
            switch (t) {
              case 1:
                return (
                  (113824 <= e && e <= 113827) || (119155 <= e && e <= 119162)
                );
              case 14:
                return 917504 <= e && e <= 921599;
              default:
                return !1;
            }
        }
        getAvailableFeatures(e, t) {
          let s = [];
          return (
            this.engine && s.push(...this.engine.getAvailableFeatures(e, t)),
            this.font.kern && -1 === s.indexOf("kern") && s.push("kern"),
            s
          );
        }
        stringsForGlyph(e) {
          let t = new Set(),
            s = this.font._cmapProcessor.codePointsForGlyph(e);
          for (let r of s) t.add(String.fromCodePoint(r));
          if (this.engine && this.engine.stringsForGlyph)
            for (let r of this.engine.stringsForGlyph(e)) t.add(r);
          return Array.from(t);
        }
        constructor(e) {
          (this.font = e),
            (this.unicodeLayoutEngine = null),
            (this.kernProcessor = null),
            this.font.morx
              ? (this.engine = new _n(this.font))
              : (this.font.GSUB || this.font.GPOS) &&
                (this.engine = new Ka(this.font));
        }
      }
      const el = {
        moveTo: "M",
        lineTo: "L",
        quadraticCurveTo: "Q",
        bezierCurveTo: "C",
        closePath: "Z",
      };
      class tl {
        toFunction() {
          return (e) => {
            this.commands.forEach((t) => e[t.command].apply(e, t.args));
          };
        }
        toSVG() {
          return this.commands
            .map((e) => {
              let t = e.args.map((e) => Math.round(100 * e) / 100);
              return `${el[e.command]}${t.join(" ")}`;
            })
            .join("");
        }
        get cbox() {
          if (!this._cbox) {
            let e = new rn();
            for (let t of this.commands)
              for (let s = 0; s < t.args.length; s += 2)
                e.addPoint(t.args[s], t.args[s + 1]);
            this._cbox = Object.freeze(e);
          }
          return this._cbox;
        }
        get bbox() {
          if (this._bbox) return this._bbox;
          let e = new rn(),
            t = 0,
            s = 0,
            r = (e) =>
              Math.pow(1 - e, 3) * f[g] +
              3 * Math.pow(1 - e, 2) * e * d[g] +
              3 * (1 - e) * Math.pow(e, 2) * m[g] +
              Math.pow(e, 3) * p[g];
          for (let y of this.commands)
            switch (y.command) {
              case "moveTo":
              case "lineTo":
                let [b, w] = y.args;
                e.addPoint(b, w), (t = b), (s = w);
                break;
              case "quadraticCurveTo":
              case "bezierCurveTo":
                if ("quadraticCurveTo" === y.command)
                  var [n, a, l, i] = y.args,
                    o = t + (2 / 3) * (n - t),
                    u = s + (2 / 3) * (a - s),
                    c = l + (2 / 3) * (n - l),
                    h = i + (2 / 3) * (a - i);
                else var [o, u, c, h, l, i] = y.args;
                e.addPoint(l, i);
                for (
                  var f = [t, s], d = [o, u], m = [c, h], p = [l, i], g = 0;
                  g <= 1;
                  g++
                ) {
                  let t = 6 * f[g] - 12 * d[g] + 6 * m[g],
                    s = -3 * f[g] + 9 * d[g] - 9 * m[g] + 3 * p[g];
                  if (((y = 3 * d[g] - 3 * f[g]), 0 === s)) {
                    if (0 === t) continue;
                    let s = -y / t;
                    0 < s &&
                      s < 1 &&
                      (0 === g
                        ? e.addPoint(r(s), e.maxY)
                        : 1 === g && e.addPoint(e.maxX, r(s)));
                    continue;
                  }
                  let n = Math.pow(t, 2) - 4 * y * s;
                  if (n < 0) continue;
                  let a = (-t + Math.sqrt(n)) / (2 * s);
                  0 < a &&
                    a < 1 &&
                    (0 === g
                      ? e.addPoint(r(a), e.maxY)
                      : 1 === g && e.addPoint(e.maxX, r(a)));
                  let l = (-t - Math.sqrt(n)) / (2 * s);
                  0 < l &&
                    l < 1 &&
                    (0 === g
                      ? e.addPoint(r(l), e.maxY)
                      : 1 === g && e.addPoint(e.maxX, r(l)));
                }
                (t = l), (s = i);
            }
          return (this._bbox = Object.freeze(e));
        }
        mapPoints(e) {
          let t = new tl();
          for (let s of this.commands) {
            let r = [];
            for (let t = 0; t < s.args.length; t += 2) {
              let [n, a] = e(s.args[t], s.args[t + 1]);
              r.push(n, a);
            }
            t[s.command](...r);
          }
          return t;
        }
        transform(e, t, s, r, n, a) {
          return this.mapPoints((l, i) => [
            e * l + s * i + n,
            t * l + r * i + a,
          ]);
        }
        translate(e, t) {
          return this.transform(1, 0, 0, 1, e, t);
        }
        rotate(e) {
          let t = Math.cos(e),
            s = Math.sin(e);
          return this.transform(t, s, -s, t, 0, 0);
        }
        scale(e, t = e) {
          return this.transform(e, 0, 0, t, 0, 0);
        }
        constructor() {
          (this.commands = []), (this._bbox = null), (this._cbox = null);
        }
      }
      for (let Rl of [
        "moveTo",
        "lineTo",
        "quadraticCurveTo",
        "bezierCurveTo",
        "closePath",
      ])
        tl.prototype[Rl] = function (...e) {
          return (
            (this._bbox = this._cbox = null),
            this.commands.push({ command: Rl, args: e }),
            this
          );
        };
      var sl = [
        ".notdef",
        ".null",
        "nonmarkingreturn",
        "space",
        "exclam",
        "quotedbl",
        "numbersign",
        "dollar",
        "percent",
        "ampersand",
        "quotesingle",
        "parenleft",
        "parenright",
        "asterisk",
        "plus",
        "comma",
        "hyphen",
        "period",
        "slash",
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "colon",
        "semicolon",
        "less",
        "equal",
        "greater",
        "question",
        "at",
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "bracketleft",
        "backslash",
        "bracketright",
        "asciicircum",
        "underscore",
        "grave",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "braceleft",
        "bar",
        "braceright",
        "asciitilde",
        "Adieresis",
        "Aring",
        "Ccedilla",
        "Eacute",
        "Ntilde",
        "Odieresis",
        "Udieresis",
        "aacute",
        "agrave",
        "acircumflex",
        "adieresis",
        "atilde",
        "aring",
        "ccedilla",
        "eacute",
        "egrave",
        "ecircumflex",
        "edieresis",
        "iacute",
        "igrave",
        "icircumflex",
        "idieresis",
        "ntilde",
        "oacute",
        "ograve",
        "ocircumflex",
        "odieresis",
        "otilde",
        "uacute",
        "ugrave",
        "ucircumflex",
        "udieresis",
        "dagger",
        "degree",
        "cent",
        "sterling",
        "section",
        "bullet",
        "paragraph",
        "germandbls",
        "registered",
        "copyright",
        "trademark",
        "acute",
        "dieresis",
        "notequal",
        "AE",
        "Oslash",
        "infinity",
        "plusminus",
        "lessequal",
        "greaterequal",
        "yen",
        "mu",
        "partialdiff",
        "summation",
        "product",
        "pi",
        "integral",
        "ordfeminine",
        "ordmasculine",
        "Omega",
        "ae",
        "oslash",
        "questiondown",
        "exclamdown",
        "logicalnot",
        "radical",
        "florin",
        "approxequal",
        "Delta",
        "guillemotleft",
        "guillemotright",
        "ellipsis",
        "nonbreakingspace",
        "Agrave",
        "Atilde",
        "Otilde",
        "OE",
        "oe",
        "endash",
        "emdash",
        "quotedblleft",
        "quotedblright",
        "quoteleft",
        "quoteright",
        "divide",
        "lozenge",
        "ydieresis",
        "Ydieresis",
        "fraction",
        "currency",
        "guilsinglleft",
        "guilsinglright",
        "fi",
        "fl",
        "daggerdbl",
        "periodcentered",
        "quotesinglbase",
        "quotedblbase",
        "perthousand",
        "Acircumflex",
        "Ecircumflex",
        "Aacute",
        "Edieresis",
        "Egrave",
        "Iacute",
        "Icircumflex",
        "Idieresis",
        "Igrave",
        "Oacute",
        "Ocircumflex",
        "apple",
        "Ograve",
        "Uacute",
        "Ucircumflex",
        "Ugrave",
        "dotlessi",
        "circumflex",
        "tilde",
        "macron",
        "breve",
        "dotaccent",
        "ring",
        "cedilla",
        "hungarumlaut",
        "ogonek",
        "caron",
        "Lslash",
        "lslash",
        "Scaron",
        "scaron",
        "Zcaron",
        "zcaron",
        "brokenbar",
        "Eth",
        "eth",
        "Yacute",
        "yacute",
        "Thorn",
        "thorn",
        "minus",
        "multiply",
        "onesuperior",
        "twosuperior",
        "threesuperior",
        "onehalf",
        "onequarter",
        "threequarters",
        "franc",
        "Gbreve",
        "gbreve",
        "Idotaccent",
        "Scedilla",
        "scedilla",
        "Cacute",
        "cacute",
        "Ccaron",
        "ccaron",
        "dcroat",
      ];
      class rl {
        _getPath() {
          return new tl();
        }
        _getCBox() {
          return this.path.cbox;
        }
        _getBBox() {
          return this.path.bbox;
        }
        _getTableMetrics(e) {
          if (this.id < e.metrics.length) return e.metrics.get(this.id);
          let t = e.metrics.get(e.metrics.length - 1);
          return {
            advance: t ? t.advance : 0,
            bearing: e.bearings.get(this.id - e.metrics.length) || 0,
          };
        }
        _getMetrics(e) {
          if (this._metrics) return this._metrics;
          let { advance: t, bearing: s } = this._getTableMetrics(
            this._font.hmtx
          );
          if (this._font.vmtx)
            var { advance: r, bearing: n } = this._getTableMetrics(
              this._font.vmtx
            );
          else {
            let t;
            if (
              (("undefined" !== typeof e && null !== e) || ({ cbox: e } = this),
              (t = this._font["OS/2"]) && t.version > 0)
            )
              (r = Math.abs(t.typoAscender - t.typoDescender)),
                (n = t.typoAscender - e.maxY);
            else {
              let { hhea: t } = this._font;
              var r = Math.abs(t.ascent - t.descent),
                n = t.ascent - e.maxY;
            }
          }
          return (
            this._font._variationProcessor &&
              this._font.HVAR &&
              (t += this._font._variationProcessor.getAdvanceAdjustment(
                this.id,
                this._font.HVAR
              )),
            (this._metrics = {
              advanceWidth: t,
              advanceHeight: r,
              leftBearing: s,
              topBearing: n,
            })
          );
        }
        get cbox() {
          return this._getCBox();
        }
        get bbox() {
          return this._getBBox();
        }
        get path() {
          return this._getPath();
        }
        getScaledPath(e) {
          let t = (1 / this._font.unitsPerEm) * e;
          return this.path.scale(t);
        }
        get advanceWidth() {
          return this._getMetrics().advanceWidth;
        }
        get advanceHeight() {
          return this._getMetrics().advanceHeight;
        }
        get ligatureCaretPositions() {}
        _getName() {
          let { post: e } = this._font;
          if (!e) return null;
          switch (e.version) {
            case 1:
              return sl[this.id];
            case 2:
              let t = e.glyphNameIndex[this.id];
              return t < sl.length ? sl[t] : e.names[t - sl.length];
            case 2.5:
              return sl[this.id + e.offsets[this.id]];
            case 4:
              return String.fromCharCode(e.map[this.id]);
          }
        }
        get name() {
          return this._getName();
        }
        render(e, t) {
          e.save();
          let s = (1 / this._font.head.unitsPerEm) * t;
          e.scale(s, s), this.path.toFunction()(e), e.fill(), e.restore();
        }
        constructor(e, t, s) {
          (this.id = e),
            (this.codePoints = t),
            (this._font = s),
            (this.isMark =
              this.codePoints.length > 0 && this.codePoints.every(i.YB)),
            (this.isLigature = this.codePoints.length > 1);
        }
      }
      (0, a.__decorate)([L], rl.prototype, "cbox", null),
        (0, a.__decorate)([L], rl.prototype, "bbox", null),
        (0, a.__decorate)([L], rl.prototype, "path", null),
        (0, a.__decorate)([L], rl.prototype, "advanceWidth", null),
        (0, a.__decorate)([L], rl.prototype, "advanceHeight", null),
        (0, a.__decorate)([L], rl.prototype, "name", null);
      let nl = new r.AU({
        numberOfContours: r.Af,
        xMin: r.Af,
        yMin: r.Af,
        xMax: r.Af,
        yMax: r.Af,
      });
      class al {
        copy() {
          return new al(this.onCurve, this.endContour, this.x, this.y);
        }
        constructor(e, t, s = 0, r = 0) {
          (this.onCurve = e), (this.endContour = t), (this.x = s), (this.y = r);
        }
      }
      class ll {
        constructor(e, t, s) {
          (this.glyphID = e),
            (this.dx = t),
            (this.dy = s),
            (this.pos = 0),
            (this.scaleX = this.scaleY = 1),
            (this.scale01 = this.scale10 = 0);
        }
      }
      class il extends rl {
        _getCBox(e) {
          if (this._font._variationProcessor && !e) return this.path.cbox;
          let t = this._font._getTableStream("glyf");
          t.pos += this._font.loca.offsets[this.id];
          let s = nl.decode(t),
            r = new rn(s.xMin, s.yMin, s.xMax, s.yMax);
          return Object.freeze(r);
        }
        _parseGlyphCoord(e, t, s, r) {
          if (s) {
            var n = e.readUInt8();
            r || (n = -n), (n += t);
          } else if (r) n = t;
          else n = t + e.readInt16BE();
          return n;
        }
        _decode() {
          let e = this._font.loca.offsets[this.id];
          if (e === this._font.loca.offsets[this.id + 1]) return null;
          let t = this._font._getTableStream("glyf");
          t.pos += e;
          let s = t.pos,
            r = nl.decode(t);
          return (
            r.numberOfContours > 0
              ? this._decodeSimple(r, t)
              : r.numberOfContours < 0 && this._decodeComposite(r, t, s),
            r
          );
        }
        _decodeSimple(e, t) {
          e.points = [];
          let s = new r.mJ(r.mL, e.numberOfContours).decode(t);
          e.instructions = new r.mJ(r.w_, r.mL).decode(t);
          let n = [],
            a = s[s.length - 1] + 1;
          for (; n.length < a; ) {
            var l = t.readUInt8();
            if ((n.push(l), 8 & l)) {
              let e = t.readUInt8();
              for (let t = 0; t < e; t++) n.push(l);
            }
          }
          for (var i = 0; i < n.length; i++) {
            l = n[i];
            let t = new al(!!(1 & l), s.indexOf(i) >= 0, 0, 0);
            e.points.push(t);
          }
          let o = 0;
          for (i = 0; i < n.length; i++) {
            l = n[i];
            e.points[i].x = o = this._parseGlyphCoord(t, o, 2 & l, 16 & l);
          }
          let u = 0;
          for (i = 0; i < n.length; i++) {
            l = n[i];
            e.points[i].y = u = this._parseGlyphCoord(t, u, 4 & l, 32 & l);
          }
          if (this._font._variationProcessor) {
            let t = e.points.slice();
            t.push(...this._getPhantomPoints(e)),
              this._font._variationProcessor.transformPoints(this.id, t),
              (e.phantomPoints = t.slice(-4));
          }
        }
        _decodeComposite(e, t, s = 0) {
          e.components = [];
          let r = !1,
            n = 32;
          for (; 32 & n; ) {
            n = t.readUInt16BE();
            let o = t.pos - s,
              u = t.readUInt16BE();
            if ((r || (r = 0 !== (256 & n)), 1 & n))
              var a = t.readInt16BE(),
                l = t.readInt16BE();
            else (a = t.readInt8()), (l = t.readInt8());
            ((i = new ll(u, a, l)).pos = o),
              8 & n
                ? (i.scaleX = i.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824)
                : 64 & n
                ? ((i.scaleX =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (i.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824))
                : 128 & n &&
                  ((i.scaleX =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (i.scale01 =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (i.scale10 =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824),
                  (i.scaleY =
                    ((t.readUInt8() << 24) | (t.readUInt8() << 16)) /
                    1073741824)),
              e.components.push(i);
          }
          if (this._font._variationProcessor) {
            let t = [];
            for (let s = 0; s < e.components.length; s++) {
              var i = e.components[s];
              t.push(new al(!0, !0, i.dx, i.dy));
            }
            t.push(...this._getPhantomPoints(e)),
              this._font._variationProcessor.transformPoints(this.id, t),
              (e.phantomPoints = t.splice(-4, 4));
            for (let s = 0; s < t.length; s++) {
              let r = t[s];
              (e.components[s].dx = r.x), (e.components[s].dy = r.y);
            }
          }
          return r;
        }
        _getPhantomPoints(e) {
          let t = this._getCBox(!0);
          null == this._metrics &&
            (this._metrics = rl.prototype._getMetrics.call(this, t));
          let {
            advanceWidth: s,
            advanceHeight: r,
            leftBearing: n,
            topBearing: a,
          } = this._metrics;
          return [
            new al(!1, !0, e.xMin - n, 0),
            new al(!1, !0, e.xMin - n + s, 0),
            new al(!1, !0, 0, e.yMax + a),
            new al(!1, !0, 0, e.yMax + a + r),
          ];
        }
        _getContours() {
          let e = this._decode();
          if (!e) return [];
          let t = [];
          if (e.numberOfContours < 0)
            for (let a of e.components) {
              let e = this._font.getGlyph(a.glyphID)._getContours();
              for (let s = 0; s < e.length; s++) {
                let r = e[s];
                for (let e = 0; e < r.length; e++) {
                  let s = r[e],
                    n = s.x * a.scaleX + s.y * a.scale01 + a.dx,
                    l = s.y * a.scaleY + s.x * a.scale10 + a.dy;
                  t.push(new al(s.onCurve, s.endContour, n, l));
                }
              }
            }
          else t = e.points || [];
          e.phantomPoints &&
            !this._font.directory.tables.HVAR &&
            ((this._metrics.advanceWidth =
              e.phantomPoints[1].x - e.phantomPoints[0].x),
            (this._metrics.advanceHeight =
              e.phantomPoints[3].y - e.phantomPoints[2].y),
            (this._metrics.leftBearing = e.xMin - e.phantomPoints[0].x),
            (this._metrics.topBearing = e.phantomPoints[2].y - e.yMax));
          let s = [],
            r = [];
          for (let a = 0; a < t.length; a++) {
            var n = t[a];
            r.push(n), n.endContour && (s.push(r), (r = []));
          }
          return s;
        }
        _getMetrics() {
          if (this._metrics) return this._metrics;
          let e = this._getCBox(!0);
          return (
            super._getMetrics(e),
            this._font._variationProcessor && !this._font.HVAR && this.path,
            this._metrics
          );
        }
        _getPath() {
          let e = this._getContours(),
            t = new tl();
          for (let r = 0; r < e.length; r++) {
            let n = e[r],
              a = n[0],
              l = n[n.length - 1],
              i = 0;
            if (a.onCurve) {
              var s = null;
              i = 1;
            } else {
              a = l.onCurve
                ? l
                : new al(!1, !1, (a.x + l.x) / 2, (a.y + l.y) / 2);
              s = a;
            }
            t.moveTo(a.x, a.y);
            for (let e = i; e < n.length; e++) {
              let r = n[e],
                l = 0 === e ? a : n[e - 1];
              if (l.onCurve && r.onCurve) t.lineTo(r.x, r.y);
              else if (l.onCurve && !r.onCurve) s = r;
              else if (l.onCurve || r.onCurve) {
                if (l.onCurve || !r.onCurve)
                  throw new Error("Unknown TTF path state");
                t.quadraticCurveTo(s.x, s.y, r.x, r.y);
                s = null;
              } else {
                let e = (l.x + r.x) / 2,
                  n = (l.y + r.y) / 2;
                t.quadraticCurveTo(l.x, l.y, e, n);
                var s = r;
              }
            }
            s && t.quadraticCurveTo(s.x, s.y, a.x, a.y), t.closePath();
          }
          return t;
        }
        constructor(...e) {
          super(...e), (0, n.Z)(this, "type", "TTF");
        }
      }
      class ol extends rl {
        _getName() {
          return this._font.CFF2
            ? super._getName()
            : this._font["CFF "].getGlyphName(this.id);
        }
        bias(e) {
          return e.length < 1240 ? 107 : e.length < 33900 ? 1131 : 32768;
        }
        _getPath() {
          let e = this._font.CFF2 || this._font["CFF "],
            { stream: t } = e,
            s = e.topDict.CharStrings[this.id],
            r = s.offset + s.length;
          t.pos = s.offset;
          let n,
            a,
            l = new tl(),
            i = [],
            o = [],
            u = null,
            c = 0,
            h = 0,
            f = 0,
            d = !1;
          (this._usedGsubrs = n = {}), (this._usedSubrs = a = {});
          let m = e.globalSubrIndex || [],
            p = this.bias(m),
            g = e.privateDictForGlyph(this.id) || {},
            y = g.Subrs || [],
            b = this.bias(y),
            w = e.topDict.vstore && e.topDict.vstore.itemVariationStore,
            v = g.vsindex,
            _ = this._font._variationProcessor;
          function L() {
            null == u && (u = i.shift() + g.nominalWidthX);
          }
          function C() {
            return (
              i.length % 2 !== 0 && L(), (c += i.length >> 1), (i.length = 0)
            );
          }
          function x(e, t) {
            d && l.closePath(), l.moveTo(e, t), (d = !0);
          }
          let A = function () {
            for (; t.pos < r; ) {
              let J = t.readUInt8();
              if (J < 32) {
                let U, T, O;
                switch (J) {
                  case 1:
                  case 3:
                  case 18:
                  case 23:
                    C();
                    break;
                  case 4:
                    i.length > 1 && L(), (f += i.shift()), x(h, f);
                    break;
                  case 5:
                    for (; i.length >= 2; )
                      (h += i.shift()), (f += i.shift()), l.lineTo(h, f);
                    break;
                  case 6:
                  case 7:
                    for (O = 6 === J; i.length >= 1; )
                      O ? (h += i.shift()) : (f += i.shift()),
                        l.lineTo(h, f),
                        (O = !O);
                    break;
                  case 8:
                    for (; i.length > 0; ) {
                      var s = h + i.shift(),
                        u = f + i.shift(),
                        g = s + i.shift(),
                        k = u + i.shift();
                      (h = g + i.shift()),
                        (f = k + i.shift()),
                        l.bezierCurveTo(s, u, g, k, h, f);
                    }
                    break;
                  case 10:
                    if (((U = i.pop() + b), (T = y[U]), T)) {
                      a[U] = !0;
                      var S = t.pos,
                        I = r;
                      (t.pos = T.offset),
                        (r = T.offset + T.length),
                        A(),
                        (t.pos = S),
                        (r = I);
                    }
                    break;
                  case 11:
                    if (e.version >= 2) break;
                    return;
                  case 14:
                    if (e.version >= 2) break;
                    i.length > 0 && L(), d && (l.closePath(), (d = !1));
                    break;
                  case 15:
                    if (e.version < 2)
                      throw new Error(
                        "vsindex operator not supported in CFF v1"
                      );
                    v = i.pop();
                    break;
                  case 16: {
                    if (e.version < 2)
                      throw new Error("blend operator not supported in CFF v1");
                    if (!_)
                      throw new Error("blend operator in non-variation font");
                    let t = _.getBlendVector(w, v),
                      s = i.pop(),
                      r = s * t.length,
                      n = i.length - r,
                      a = n - s;
                    for (let e = 0; e < s; e++) {
                      let s = i[a + e];
                      for (let e = 0; e < t.length; e++) s += t[e] * i[n++];
                      i[a + e] = s;
                    }
                    for (; r--; ) i.pop();
                    break;
                  }
                  case 19:
                  case 20:
                    C(), (t.pos += (c + 7) >> 3);
                    break;
                  case 21:
                    i.length > 2 && L(),
                      (h += i.shift()),
                      (f += i.shift()),
                      x(h, f);
                    break;
                  case 22:
                    i.length > 1 && L(), (h += i.shift()), x(h, f);
                    break;
                  case 24:
                    for (; i.length >= 8; ) {
                      (s = h + i.shift()),
                        (u = f + i.shift()),
                        (g = s + i.shift()),
                        (k = u + i.shift());
                      (h = g + i.shift()),
                        (f = k + i.shift()),
                        l.bezierCurveTo(s, u, g, k, h, f);
                    }
                    (h += i.shift()), (f += i.shift()), l.lineTo(h, f);
                    break;
                  case 25:
                    for (; i.length >= 8; )
                      (h += i.shift()), (f += i.shift()), l.lineTo(h, f);
                    (s = h + i.shift()),
                      (u = f + i.shift()),
                      (g = s + i.shift()),
                      (k = u + i.shift());
                    (h = g + i.shift()),
                      (f = k + i.shift()),
                      l.bezierCurveTo(s, u, g, k, h, f);
                    break;
                  case 26:
                    for (i.length % 2 && (h += i.shift()); i.length >= 4; )
                      (s = h),
                        (u = f + i.shift()),
                        (g = s + i.shift()),
                        (k = u + i.shift()),
                        (h = g),
                        (f = k + i.shift()),
                        l.bezierCurveTo(s, u, g, k, h, f);
                    break;
                  case 27:
                    for (i.length % 2 && (f += i.shift()); i.length >= 4; )
                      (s = h + i.shift()),
                        (u = f),
                        (g = s + i.shift()),
                        (k = u + i.shift()),
                        (h = g + i.shift()),
                        (f = k),
                        l.bezierCurveTo(s, u, g, k, h, f);
                    break;
                  case 28:
                    i.push(t.readInt16BE());
                    break;
                  case 29:
                    if (((U = i.pop() + p), (T = m[U]), T)) {
                      n[U] = !0;
                      (S = t.pos), (I = r);
                      (t.pos = T.offset),
                        (r = T.offset + T.length),
                        A(),
                        (t.pos = S),
                        (r = I);
                    }
                    break;
                  case 30:
                  case 31:
                    for (O = 31 === J; i.length >= 4; )
                      O
                        ? ((s = h + i.shift()),
                          (u = f),
                          (g = s + i.shift()),
                          (k = u + i.shift()),
                          (f = k + i.shift()),
                          (h = g + (1 === i.length ? i.shift() : 0)))
                        : ((s = h),
                          (u = f + i.shift()),
                          (g = s + i.shift()),
                          (k = u + i.shift()),
                          (h = g + i.shift()),
                          (f = k + (1 === i.length ? i.shift() : 0))),
                        l.bezierCurveTo(s, u, g, k, h, f),
                        (O = !O);
                    break;
                  case 12:
                    switch (((J = t.readUInt8()), J)) {
                      case 3:
                        let e = i.pop(),
                          t = i.pop();
                        i.push(e && t ? 1 : 0);
                        break;
                      case 4:
                        (e = i.pop()), (t = i.pop()), i.push(e || t ? 1 : 0);
                        break;
                      case 5:
                        (e = i.pop()), i.push(e ? 0 : 1);
                        break;
                      case 9:
                        (e = i.pop()), i.push(Math.abs(e));
                        break;
                      case 10:
                        (e = i.pop()), (t = i.pop()), i.push(e + t);
                        break;
                      case 11:
                        (e = i.pop()), (t = i.pop()), i.push(e - t);
                        break;
                      case 12:
                        (e = i.pop()), (t = i.pop()), i.push(e / t);
                        break;
                      case 14:
                        (e = i.pop()), i.push(-e);
                        break;
                      case 15:
                        (e = i.pop()), (t = i.pop()), i.push(e === t ? 1 : 0);
                        break;
                      case 18:
                        i.pop();
                        break;
                      case 20:
                        let r = i.pop(),
                          n = i.pop();
                        o[n] = r;
                        break;
                      case 21:
                        (n = i.pop()), i.push(o[n] || 0);
                        break;
                      case 22:
                        let a = i.pop(),
                          c = i.pop(),
                          d = i.pop(),
                          m = i.pop();
                        i.push(d <= m ? a : c);
                        break;
                      case 23:
                        i.push(Math.random());
                        break;
                      case 24:
                        (e = i.pop()), (t = i.pop()), i.push(e * t);
                        break;
                      case 26:
                        (e = i.pop()), i.push(Math.sqrt(e));
                        break;
                      case 27:
                        (e = i.pop()), i.push(e, e);
                        break;
                      case 28:
                        (e = i.pop()), (t = i.pop()), i.push(t, e);
                        break;
                      case 29:
                        (n = i.pop()),
                          n < 0
                            ? (n = 0)
                            : n > i.length - 1 && (n = i.length - 1),
                          i.push(i[n]);
                        break;
                      case 30:
                        let p = i.pop(),
                          y = i.pop();
                        if (y >= 0)
                          for (; y > 0; ) {
                            var P = i[p - 1];
                            for (let e = p - 2; e >= 0; e--) i[e + 1] = i[e];
                            (i[0] = P), y--;
                          }
                        else
                          for (; y < 0; ) {
                            P = i[0];
                            for (let e = 0; e <= p; e++) i[e] = i[e + 1];
                            (i[p - 1] = P), y++;
                          }
                        break;
                      case 34:
                        (s = h + i.shift()),
                          (u = f),
                          (g = s + i.shift()),
                          (k = u + i.shift());
                        let b = g + i.shift(),
                          w = k,
                          v = b + i.shift(),
                          _ = w,
                          L = v + i.shift(),
                          C = _,
                          x = L + i.shift(),
                          A = C;
                        (h = x),
                          (f = A),
                          l.bezierCurveTo(s, u, g, k, b, w),
                          l.bezierCurveTo(v, _, L, C, x, A);
                        break;
                      case 35:
                        let S = [];
                        for (let s = 0; s <= 5; s++)
                          (h += i.shift()), (f += i.shift()), S.push(h, f);
                        l.bezierCurveTo(...S.slice(0, 6)),
                          l.bezierCurveTo(...S.slice(6)),
                          i.shift();
                        break;
                      case 36:
                        (s = h + i.shift()),
                          (u = f + i.shift()),
                          (g = s + i.shift()),
                          (k = u + i.shift()),
                          (b = g + i.shift()),
                          (w = k),
                          (v = b + i.shift()),
                          (_ = w),
                          (L = v + i.shift()),
                          (C = _ + i.shift()),
                          (x = L + i.shift()),
                          (A = C),
                          (h = x),
                          (f = A),
                          l.bezierCurveTo(s, u, g, k, b, w),
                          l.bezierCurveTo(v, _, L, C, x, A);
                        break;
                      case 37:
                        let I = h,
                          U = f;
                        S = [];
                        for (let s = 0; s <= 4; s++)
                          (h += i.shift()), (f += i.shift()), S.push(h, f);
                        Math.abs(h - I) > Math.abs(f - U)
                          ? ((h += i.shift()), (f = U))
                          : ((h = I), (f += i.shift())),
                          S.push(h, f),
                          l.bezierCurveTo(...S.slice(0, 6)),
                          l.bezierCurveTo(...S.slice(6));
                        break;
                      default:
                        throw new Error(`Unknown op: 12 ${J}`);
                    }
                    break;
                  default:
                    throw new Error(`Unknown op: ${J}`);
                }
              } else if (J < 247) i.push(J - 139);
              else if (J < 251) {
                var U = t.readUInt8();
                i.push(256 * (J - 247) + U + 108);
              } else if (J < 255) {
                U = t.readUInt8();
                i.push(256 * -(J - 251) - U - 108);
              } else i.push(t.readInt32BE() / 65536);
            }
          };
          return A(), d && l.closePath(), l;
        }
        constructor(...e) {
          super(...e), (0, n.Z)(this, "type", "CFF");
        }
      }
      let ul = new r.AU({
        originX: r.mL,
        originY: r.mL,
        type: new r.Ld(4),
        data: new r.lW((e) => e.parent.buflen - e._currentOffset),
      });
      class cl extends il {
        getImageForSize(e) {
          for (let a = 0; a < this._font.sbix.imageTables.length; a++) {
            var t = this._font.sbix.imageTables[a];
            if (t.ppem >= e) break;
          }
          let s = t.imageOffsets,
            r = s[this.id],
            n = s[this.id + 1];
          return r === n
            ? null
            : ((this._font.stream.pos = r),
              ul.decode(this._font.stream, { buflen: n - r }));
        }
        render(e, t) {
          let s = this.getImageForSize(t);
          if (null != s) {
            let r = t / this._font.unitsPerEm;
            e.image(s.data, {
              height: t,
              x: s.originX,
              y: (this.bbox.minY - s.originY) * r,
            });
          }
          this._font.sbix.flags.renderOutlines && super.render(e, t);
        }
        constructor(...e) {
          super(...e), (0, n.Z)(this, "type", "SBIX");
        }
      }
      class hl {
        constructor(e, t) {
          (this.glyph = e), (this.color = t);
        }
      }
      class fl extends rl {
        _getBBox() {
          let e = new rn();
          for (let t = 0; t < this.layers.length; t++) {
            let s = this.layers[t].glyph.bbox;
            e.addPoint(s.minX, s.minY), e.addPoint(s.maxX, s.maxY);
          }
          return e;
        }
        get layers() {
          let e = this._font.CPAL,
            t = this._font.COLR,
            s = 0,
            r = t.baseGlyphRecord.length - 1;
          for (; s <= r; ) {
            let e = (s + r) >> 1;
            var n = t.baseGlyphRecord[e];
            if (this.id < n.gid) r = e - 1;
            else {
              if (!(this.id > n.gid)) {
                var a = n;
                break;
              }
              s = e + 1;
            }
          }
          if (null == a) {
            var l = this._font._getBaseGlyph(this.id);
            return [new hl(l, (o = { red: 0, green: 0, blue: 0, alpha: 255 }))];
          }
          let i = [];
          for (
            let u = a.firstLayerIndex;
            u < a.firstLayerIndex + a.numLayers;
            u++
          ) {
            n = t.layerRecords[u];
            var o = e.colorRecords[n.paletteIndex];
            l = this._font._getBaseGlyph(n.gid);
            i.push(new hl(l, o));
          }
          return i;
        }
        render(e, t) {
          for (let { glyph: s, color: r } of this.layers)
            e.fillColor([r.red, r.green, r.blue], (r.alpha / 255) * 100),
              s.render(e, t);
        }
        constructor(...e) {
          super(...e), (0, n.Z)(this, "type", "COLR");
        }
      }
      class dl {
        normalizeCoords(e) {
          let t = [];
          for (var s = 0; s < this.font.fvar.axis.length; s++) {
            let r = this.font.fvar.axis[s];
            e[s] < r.defaultValue
              ? t.push(
                  (e[s] - r.defaultValue + Number.EPSILON) /
                    (r.defaultValue - r.minValue + Number.EPSILON)
                )
              : t.push(
                  (e[s] - r.defaultValue + Number.EPSILON) /
                    (r.maxValue - r.defaultValue + Number.EPSILON)
                );
          }
          if (this.font.avar)
            for (s = 0; s < this.font.avar.segment.length; s++) {
              let e = this.font.avar.segment[s];
              for (let r = 0; r < e.correspondence.length; r++) {
                let n = e.correspondence[r];
                if (r >= 1 && t[s] < n.fromCoord) {
                  let a = e.correspondence[r - 1];
                  t[s] =
                    ((t[s] - a.fromCoord) * (n.toCoord - a.toCoord) +
                      Number.EPSILON) /
                      (n.fromCoord - a.fromCoord + Number.EPSILON) +
                    a.toCoord;
                  break;
                }
              }
            }
          return t;
        }
        transformPoints(e, t) {
          if (!this.font.fvar || !this.font.gvar) return;
          let { gvar: s } = this.font;
          if (e >= s.glyphCount) return;
          let r = s.offsets[e];
          if (r === s.offsets[e + 1]) return;
          let { stream: n } = this.font;
          if (((n.pos = r), n.pos >= n.length)) return;
          let a = n.readUInt16BE(),
            l = r + n.readUInt16BE();
          if (32768 & a) {
            var i = n.pos;
            n.pos = l;
            var o = this.decodePoints();
            (l = n.pos), (n.pos = i);
          }
          let u = t.map((e) => e.copy());
          a &= 4095;
          for (let p = 0; p < a; p++) {
            let e = n.readUInt16BE(),
              r = n.readUInt16BE();
            if (32768 & r) {
              var c = [];
              for (let e = 0; e < s.axisCount; e++)
                c.push(n.readInt16BE() / 16384);
            } else {
              if ((4095 & r) >= s.globalCoordCount)
                throw new Error("Invalid gvar table");
              c = s.globalCoords[4095 & r];
            }
            if (16384 & r) {
              var h = [];
              for (let e = 0; e < s.axisCount; e++)
                h.push(n.readInt16BE() / 16384);
              var f = [];
              for (let e = 0; e < s.axisCount; e++)
                f.push(n.readInt16BE() / 16384);
            }
            let a = this.tupleFactor(r, c, h, f);
            if (0 === a) {
              l += e;
              continue;
            }
            i = n.pos;
            if (((n.pos = l), 8192 & r)) var d = this.decodePoints();
            else d = o;
            let p = 0 === d.length ? t.length : d.length,
              g = this.decodeDeltas(p),
              y = this.decodeDeltas(p);
            if (0 === d.length)
              for (let s = 0; s < t.length; s++) {
                var m = t[s];
                (m.x += Math.round(g[s] * a)), (m.y += Math.round(y[s] * a));
              }
            else {
              let e = u.map((e) => e.copy()),
                s = t.map(() => !1);
              for (let r = 0; r < d.length; r++) {
                let n = d[r];
                if (n < t.length) {
                  let t = e[n];
                  (s[n] = !0),
                    (t.x += Math.round(g[r] * a)),
                    (t.y += Math.round(y[r] * a));
                }
              }
              this.interpolateMissingDeltas(e, u, s);
              for (let r = 0; r < t.length; r++) {
                let s = e[r].x - u[r].x,
                  n = e[r].y - u[r].y;
                (t[r].x += s), (t[r].y += n);
              }
            }
            (l += e), (n.pos = i);
          }
        }
        decodePoints() {
          let e = this.font.stream,
            t = e.readUInt8();
          128 & t && (t = ((127 & t) << 8) | e.readUInt8());
          let s = new Uint16Array(t),
            r = 0,
            n = 0;
          for (; r < t; ) {
            let a = e.readUInt8(),
              l = 1 + (127 & a),
              i = 128 & a ? e.readUInt16 : e.readUInt8;
            for (let o = 0; o < l && r < t; o++) (n += i.call(e)), (s[r++] = n);
          }
          return s;
        }
        decodeDeltas(e) {
          let t = this.font.stream,
            s = 0,
            r = new Int16Array(e);
          for (; s < e; ) {
            let n = t.readUInt8(),
              a = 1 + (63 & n);
            if (128 & n) s += a;
            else {
              let l = 64 & n ? t.readInt16BE : t.readInt8;
              for (let n = 0; n < a && s < e; n++) r[s++] = l.call(t);
            }
          }
          return r;
        }
        tupleFactor(e, t, s, r) {
          let n = this.normalizedCoords,
            { gvar: a } = this.font,
            l = 1;
          for (let i = 0; i < a.axisCount; i++)
            if (0 !== t[i]) {
              if (0 === n[i]) return 0;
              if (0 === (16384 & e)) {
                if (n[i] < Math.min(0, t[i]) || n[i] > Math.max(0, t[i]))
                  return 0;
                l = (l * n[i] + Number.EPSILON) / (t[i] + Number.EPSILON);
              } else {
                if (n[i] < s[i] || n[i] > r[i]) return 0;
                l =
                  n[i] < t[i]
                    ? (l * (n[i] - s[i] + Number.EPSILON)) /
                      (t[i] - s[i] + Number.EPSILON)
                    : (l * (r[i] - n[i] + Number.EPSILON)) /
                      (r[i] - t[i] + Number.EPSILON);
              }
            }
          return l;
        }
        interpolateMissingDeltas(e, t, s) {
          if (0 === e.length) return;
          let r = 0;
          for (; r < e.length; ) {
            let n = r,
              a = r,
              l = e[a];
            for (; !l.endContour; ) l = e[++a];
            for (; r <= a && !s[r]; ) r++;
            if (r > a) continue;
            let i = r,
              o = r;
            for (r++; r <= a; )
              s[r] &&
                (this.deltaInterpolate(o + 1, r - 1, o, r, t, e), (o = r)),
                r++;
            o === i
              ? this.deltaShift(n, a, o, t, e)
              : (this.deltaInterpolate(o + 1, a, o, i, t, e),
                i > 0 && this.deltaInterpolate(n, i - 1, o, i, t, e)),
              (r = a + 1);
          }
        }
        deltaInterpolate(e, t, s, r, n, a) {
          if (e > t) return;
          let l = ["x", "y"];
          for (let o = 0; o < l.length; o++) {
            let u = l[o];
            if (n[s][u] > n[r][u]) {
              var i = s;
              (s = r), (r = i);
            }
            let c = n[s][u],
              h = n[r][u],
              f = a[s][u],
              d = a[r][u];
            if (c !== h || f === d) {
              let s = c === h ? 0 : (d - f) / (h - c);
              for (let r = e; r <= t; r++) {
                let e = n[r][u];
                e <= c
                  ? (e += f - c)
                  : e >= h
                  ? (e += d - h)
                  : (e = f + (e - c) * s),
                  (a[r][u] = e);
              }
            }
          }
        }
        deltaShift(e, t, s, r, n) {
          let a = n[s].x - r[s].x,
            l = n[s].y - r[s].y;
          if (0 !== a || 0 !== l)
            for (let i = e; i <= t; i++)
              i !== s && ((n[i].x += a), (n[i].y += l));
        }
        getAdvanceAdjustment(e, t) {
          let s, r;
          if (t.advanceWidthMapping) {
            let n = e;
            n >= t.advanceWidthMapping.mapCount &&
              (n = t.advanceWidthMapping.mapCount - 1);
            t.advanceWidthMapping.entryFormat;
            ({ outerIndex: s, innerIndex: r } =
              t.advanceWidthMapping.mapData[n]);
          } else (s = 0), (r = e);
          return this.getDelta(t.itemVariationStore, s, r);
        }
        getDelta(e, t, s) {
          if (t >= e.itemVariationData.length) return 0;
          let r = e.itemVariationData[t];
          if (s >= r.deltaSets.length) return 0;
          let n = r.deltaSets[s],
            a = this.getBlendVector(e, t),
            l = 0;
          for (let i = 0; i < r.regionIndexCount; i++) l += n.deltas[i] * a[i];
          return l;
        }
        getBlendVector(e, t) {
          let s = e.itemVariationData[t];
          if (this.blendVectors.has(s)) return this.blendVectors.get(s);
          let r = this.normalizedCoords,
            n = [];
          for (let a = 0; a < s.regionIndexCount; a++) {
            let t = 1,
              l = s.regionIndexes[a],
              i = e.variationRegionList.variationRegions[l];
            for (let e = 0; e < i.length; e++) {
              let s,
                n = i[e];
              (s =
                n.startCoord > n.peakCoord ||
                n.peakCoord > n.endCoord ||
                (n.startCoord < 0 && n.endCoord > 0 && 0 !== n.peakCoord) ||
                0 === n.peakCoord
                  ? 1
                  : r[e] < n.startCoord || r[e] > n.endCoord
                  ? 0
                  : r[e] === n.peakCoord
                  ? 1
                  : r[e] < n.peakCoord
                  ? (r[e] - n.startCoord + Number.EPSILON) /
                    (n.peakCoord - n.startCoord + Number.EPSILON)
                  : (n.endCoord - r[e] + Number.EPSILON) /
                    (n.endCoord - n.peakCoord + Number.EPSILON)),
                (t *= s);
            }
            n[a] = t;
          }
          return this.blendVectors.set(s, n), n;
        }
        constructor(e, t) {
          (this.font = e),
            (this.normalizedCoords = this.normalizeCoords(t)),
            (this.blendVectors = new Map());
        }
      }
      Promise.resolve();
      class ml {
        includeGlyph(e) {
          return (
            "object" === typeof e && (e = e.id),
            null == this.mapping[e] &&
              (this.glyphs.push(e), (this.mapping[e] = this.glyphs.length - 1)),
            this.mapping[e]
          );
        }
        constructor(e) {
          (this.font = e),
            (this.glyphs = []),
            (this.mapping = {}),
            this.includeGlyph(0);
        }
      }
      class pl {
        static size(e) {
          return e >= 0 && e <= 255 ? 1 : 2;
        }
        static encode(e, t) {
          t >= 0 && t <= 255 ? e.writeUInt8(t) : e.writeInt16BE(t);
        }
      }
      let gl = new r.AU({
        numberOfContours: r.Af,
        xMin: r.Af,
        yMin: r.Af,
        xMax: r.Af,
        yMax: r.Af,
        endPtsOfContours: new r.mJ(r.mL, "numberOfContours"),
        instructions: new r.mJ(r.w_, r.mL),
        flags: new r.mJ(r.w_, 0),
        xPoints: new r.mJ(pl, 0),
        yPoints: new r.mJ(pl, 0),
      });
      class yl {
        encodeSimple(e, t = []) {
          let s = [],
            n = [],
            a = [],
            l = [],
            i = 0,
            o = 0,
            u = 0,
            c = 0,
            h = 0;
          for (let r = 0; r < e.commands.length; r++) {
            let t = e.commands[r];
            for (let s = 0; s < t.args.length; s += 2) {
              let f = t.args[s],
                d = t.args[s + 1],
                m = 0;
              if ("quadraticCurveTo" === t.command && 2 === s) {
                let t = e.commands[r + 1];
                if (t && "quadraticCurveTo" === t.command) {
                  let e = (o + t.args[0]) / 2,
                    s = (u + t.args[1]) / 2;
                  if (f === e && d === s) continue;
                }
              }
              ("quadraticCurveTo" === t.command && 0 === s) || (m |= 1),
                (m = this._encodePoint(f, o, n, m, 2, 16)),
                (m = this._encodePoint(d, u, a, m, 4, 32)),
                m === c && i < 255
                  ? ((l[l.length - 1] |= 8), i++)
                  : (i > 0 && (l.push(i), (i = 0)), l.push(m), (c = m)),
                (o = f),
                (u = d),
                h++;
            }
            "closePath" === t.command && s.push(h - 1);
          }
          e.commands.length > 1 &&
            "closePath" !== e.commands[e.commands.length - 1].command &&
            s.push(h - 1);
          let f = e.bbox,
            d = {
              numberOfContours: s.length,
              xMin: f.minX,
              yMin: f.minY,
              xMax: f.maxX,
              yMax: f.maxY,
              endPtsOfContours: s,
              instructions: t,
              flags: l,
              xPoints: n,
              yPoints: a,
            },
            m = gl.size(d),
            p = 4 - (m % 4),
            g = new r.yy(m + p);
          return gl.encode(g, d), 0 !== p && g.fill(0, p), g.buffer;
        }
        _encodePoint(e, t, s, r, n, a) {
          let l = e - t;
          return (
            e === t
              ? (r |= a)
              : (-255 <= l &&
                  l <= 255 &&
                  ((r |= n), l < 0 ? (l = -l) : (r |= a)),
                s.push(l)),
            r
          );
        }
      }
      class bl extends ml {
        _addGlyph(e) {
          let t = this.font.getGlyph(e),
            s = t._decode(),
            r = this.font.loca.offsets[e],
            n = this.font.loca.offsets[e + 1],
            a = this.font._getTableStream("glyf");
          a.pos += r;
          let l = a.readBuffer(n - r);
          if (s && s.numberOfContours < 0) {
            l = new Uint8Array(l);
            let t = new DataView(l.buffer);
            for (let r of s.components)
              (e = this.includeGlyph(r.glyphID)), t.setUint16(r.pos, e);
          } else
            s &&
              this.font._variationProcessor &&
              (l = this.glyphEncoder.encodeSimple(t.path, s.instructions));
          return (
            this.glyf.push(l),
            this.loca.offsets.push(this.offset),
            this.hmtx.metrics.push({
              advance: t.advanceWidth,
              bearing: t._getMetrics().leftBearing,
            }),
            (this.offset += l.length),
            this.glyf.length - 1
          );
        }
        encode() {
          (this.glyf = []),
            (this.offset = 0),
            (this.loca = { offsets: [], version: this.font.loca.version }),
            (this.hmtx = { metrics: [], bearings: [] });
          let e = 0;
          for (; e < this.glyphs.length; ) this._addGlyph(this.glyphs[e++]);
          let t = c(this.font.maxp);
          (t.numGlyphs = this.glyf.length), this.loca.offsets.push(this.offset);
          let s = c(this.font.head);
          s.indexToLocFormat = this.loca.version;
          let r = c(this.font.hhea);
          return (
            (r.numberOfMetrics = this.hmtx.metrics.length),
            Hr.toBuffer({
              tables: {
                head: s,
                hhea: r,
                loca: this.loca,
                maxp: t,
                "cvt ": this.font["cvt "],
                prep: this.font.prep,
                glyf: this.glyf,
                hmtx: this.hmtx,
                fpgm: this.font.fpgm,
              },
            })
          );
        }
        constructor(e) {
          super(e), (this.glyphEncoder = new yl());
        }
      }
      class wl extends ml {
        subsetCharstrings() {
          this.charstrings = [];
          let e = {};
          for (let t of this.glyphs) {
            this.charstrings.push(this.cff.getCharString(t));
            let s = this.font.getGlyph(t);
            s.path;
            for (let t in s._usedGsubrs) e[t] = !0;
          }
          this.gsubrs = this.subsetSubrs(this.cff.globalSubrIndex, e);
        }
        subsetSubrs(e, t) {
          let s = [];
          for (let r = 0; r < e.length; r++) {
            let n = e[r];
            t[r]
              ? ((this.cff.stream.pos = n.offset),
                s.push(this.cff.stream.readBuffer(n.length)))
              : s.push(new Uint8Array([11]));
          }
          return s;
        }
        subsetFontdict(e) {
          (e.FDArray = []), (e.FDSelect = { version: 0, fds: [] });
          let t = {},
            s = [],
            r = {};
          for (let n of this.glyphs) {
            let a = this.cff.fdForGlyph(n);
            if (null == a) continue;
            t[a] ||
              (e.FDArray.push(Object.assign({}, this.cff.topDict.FDArray[a])),
              s.push({}),
              (r[a] = e.FDArray.length - 1)),
              (t[a] = !0),
              e.FDSelect.fds.push(r[a]);
            let l = this.font.getGlyph(n);
            l.path;
            for (let e in l._usedSubrs) s[r[a]][e] = !0;
          }
          for (let n = 0; n < e.FDArray.length; n++) {
            let t = e.FDArray[n];
            delete t.FontName,
              t.Private &&
                t.Private.Subrs &&
                ((t.Private = Object.assign({}, t.Private)),
                (t.Private.Subrs = this.subsetSubrs(t.Private.Subrs, s[n])));
          }
        }
        createCIDFontdict(e) {
          let t = {};
          for (let r of this.glyphs) {
            let e = this.font.getGlyph(r);
            e.path;
            for (let s in e._usedSubrs) t[s] = !0;
          }
          let s = Object.assign({}, this.cff.topDict.Private);
          return (
            this.cff.topDict.Private &&
              this.cff.topDict.Private.Subrs &&
              (s.Subrs = this.subsetSubrs(this.cff.topDict.Private.Subrs, t)),
            (e.FDArray = [{ Private: s }]),
            (e.FDSelect = {
              version: 3,
              nRanges: 1,
              ranges: [{ first: 0, fd: 0 }],
              sentinel: this.charstrings.length,
            })
          );
        }
        addString(e) {
          return e
            ? (this.strings || (this.strings = []),
              this.strings.push(e),
              pe.length + this.strings.length - 1)
            : null;
        }
        encode() {
          this.subsetCharstrings();
          let e = {
              version: this.charstrings.length > 255 ? 2 : 1,
              ranges: [{ first: 1, nLeft: this.charstrings.length - 2 }],
            },
            t = Object.assign({}, this.cff.topDict);
          (t.Private = null),
            (t.charset = e),
            (t.Encoding = null),
            (t.CharStrings = this.charstrings);
          for (let r of [
            "version",
            "Notice",
            "Copyright",
            "FullName",
            "FamilyName",
            "Weight",
            "PostScript",
            "BaseFontName",
            "FontName",
          ])
            t[r] = this.addString(this.cff.string(t[r]));
          (t.ROS = [this.addString("Adobe"), this.addString("Identity"), 0]),
            (t.CIDCount = this.charstrings.length),
            this.cff.isCIDFont
              ? this.subsetFontdict(t)
              : this.createCIDFontdict(t);
          let s = {
            version: 1,
            hdrSize: this.cff.hdrSize,
            offSize: 4,
            header: this.cff.header,
            nameIndex: [this.cff.postscriptName],
            topDictIndex: [t],
            stringIndex: this.strings,
            globalSubrIndex: this.gsubrs,
          };
          return yt.toBuffer(s);
        }
        constructor(e) {
          if ((super(e), (this.cff = this.font["CFF "]), !this.cff))
            throw new Error("Not a CFF Font");
        }
      }
      class vl {
        static probe(e) {
          let t = $r.decode(e.slice(0, 4));
          return (
            "true" === t ||
            "OTTO" === t ||
            t === String.fromCharCode(0, 1, 0, 0)
          );
        }
        setDefaultLanguage(e = null) {
          this.defaultLanguage = e;
        }
        _getTable(e) {
          if (!(e.tag in this._tables))
            try {
              this._tables[e.tag] = this._decodeTable(e);
            } catch (t) {
              g &&
                (console.error(`Error decoding table ${e.tag}`),
                console.error(t.stack));
            }
          return this._tables[e.tag];
        }
        _getTableStream(e) {
          let t = this.directory.tables[e];
          return t ? ((this.stream.pos = t.offset), this.stream) : null;
        }
        _decodeDirectory() {
          return (this.directory = Hr.decode(this.stream, { _startOffset: 0 }));
        }
        _decodeTable(e) {
          let t = this.stream.pos,
            s = this._getTableStream(e.tag),
            r = Wr[e.tag].decode(s, this, e.length);
          return (this.stream.pos = t), r;
        }
        getName(e, t = this.defaultLanguage || v) {
          let s = this.name && this.name.records[e];
          return (
            (s &&
              (s[t] ||
                s[this.defaultLanguage] ||
                s[v] ||
                s.en ||
                s[Object.keys(s)[0]])) ||
            null
          );
        }
        get postscriptName() {
          return this.getName("postscriptName");
        }
        get fullName() {
          return this.getName("fullName");
        }
        get familyName() {
          return this.getName("fontFamily");
        }
        get subfamilyName() {
          return this.getName("fontSubfamily");
        }
        get copyright() {
          return this.getName("copyright");
        }
        get version() {
          return this.getName("version");
        }
        get ascent() {
          return this.hhea.ascent;
        }
        get descent() {
          return this.hhea.descent;
        }
        get lineGap() {
          return this.hhea.lineGap;
        }
        get underlinePosition() {
          return this.post.underlinePosition;
        }
        get underlineThickness() {
          return this.post.underlineThickness;
        }
        get italicAngle() {
          return this.post.italicAngle;
        }
        get capHeight() {
          let e = this["OS/2"];
          return e ? e.capHeight : this.ascent;
        }
        get xHeight() {
          let e = this["OS/2"];
          return e ? e.xHeight : 0;
        }
        get numGlyphs() {
          return this.maxp.numGlyphs;
        }
        get unitsPerEm() {
          return this.head.unitsPerEm;
        }
        get bbox() {
          return Object.freeze(
            new rn(
              this.head.xMin,
              this.head.yMin,
              this.head.xMax,
              this.head.yMax
            )
          );
        }
        get _cmapProcessor() {
          return new en(this.cmap);
        }
        get characterSet() {
          return this._cmapProcessor.getCharacterSet();
        }
        hasGlyphForCodePoint(e) {
          return !!this._cmapProcessor.lookup(e);
        }
        glyphForCodePoint(e) {
          return this.getGlyph(this._cmapProcessor.lookup(e), [e]);
        }
        glyphsForString(e) {
          let t = [],
            s = e.length,
            r = 0,
            n = -1,
            a = -1;
          for (; r <= s; ) {
            let l = 0,
              i = 0;
            if (r < s) {
              if (
                ((l = e.charCodeAt(r++)), 55296 <= l && l <= 56319 && r < s)
              ) {
                let t = e.charCodeAt(r);
                56320 <= t &&
                  t <= 57343 &&
                  (r++, (l = ((1023 & l) << 10) + (1023 & t) + 65536));
              }
              i =
                (65024 <= l && l <= 65039) || (917760 <= l && l <= 917999)
                  ? 1
                  : 0;
            } else r++;
            0 === a && 1 === i
              ? t.push(this.getGlyph(this._cmapProcessor.lookup(n, l), [n, l]))
              : 0 === a && 0 === i && t.push(this.glyphForCodePoint(n)),
              (n = l),
              (a = i);
          }
          return t;
        }
        get _layoutEngine() {
          return new Qa(this);
        }
        layout(e, t, s, r, n) {
          return this._layoutEngine.layout(e, t, s, r, n);
        }
        stringsForGlyph(e) {
          return this._layoutEngine.stringsForGlyph(e);
        }
        get availableFeatures() {
          return this._layoutEngine.getAvailableFeatures();
        }
        getAvailableFeatures(e, t) {
          return this._layoutEngine.getAvailableFeatures(e, t);
        }
        _getBaseGlyph(e, t = []) {
          return (
            this._glyphs[e] ||
              (this.directory.tables.glyf
                ? (this._glyphs[e] = new il(e, t, this))
                : (this.directory.tables["CFF "] ||
                    this.directory.tables.CFF2) &&
                  (this._glyphs[e] = new ol(e, t, this))),
            this._glyphs[e] || null
          );
        }
        getGlyph(e, t = []) {
          return (
            this._glyphs[e] ||
              (this.directory.tables.sbix
                ? (this._glyphs[e] = new cl(e, t, this))
                : this.directory.tables.COLR && this.directory.tables.CPAL
                ? (this._glyphs[e] = new fl(e, t, this))
                : this._getBaseGlyph(e, t)),
            this._glyphs[e] || null
          );
        }
        createSubset() {
          return this.directory.tables["CFF "] ? new wl(this) : new bl(this);
        }
        get variationAxes() {
          let e = {};
          if (!this.fvar) return e;
          for (let t of this.fvar.axis)
            e[t.axisTag.trim()] = {
              name: t.name.en,
              min: t.minValue,
              default: t.defaultValue,
              max: t.maxValue,
            };
          return e;
        }
        get namedVariations() {
          let e = {};
          if (!this.fvar) return e;
          for (let t of this.fvar.instance) {
            let s = {};
            for (let e = 0; e < this.fvar.axis.length; e++) {
              s[this.fvar.axis[e].axisTag.trim()] = t.coord[e];
            }
            e[t.name.en] = s;
          }
          return e;
        }
        getVariation(e) {
          if (
            !this.directory.tables.fvar ||
            !(
              (this.directory.tables.gvar && this.directory.tables.glyf) ||
              this.directory.tables.CFF2
            )
          )
            throw new Error(
              "Variations require a font with the fvar, gvar and glyf, or CFF2 tables."
            );
          if (
            ("string" === typeof e && (e = this.namedVariations[e]),
            "object" !== typeof e)
          )
            throw new Error(
              "Variation settings must be either a variation name or settings object."
            );
          let t = this.fvar.axis.map((t, s) => {
              let r = t.axisTag.trim();
              return r in e
                ? Math.max(t.minValue, Math.min(t.maxValue, e[r]))
                : t.defaultValue;
            }),
            s = new r.fT(this.stream.buffer);
          s.pos = this._directoryPos;
          let n = new vl(s, t);
          return (n._tables = this._tables), n;
        }
        get _variationProcessor() {
          if (!this.fvar) return null;
          let e = this.variationCoords;
          return e || this.CFF2
            ? (e || (e = this.fvar.axis.map((e) => e.defaultValue)),
              new dl(this, e))
            : null;
        }
        getFont(e) {
          return this.getVariation(e);
        }
        constructor(e, t = null) {
          (0, n.Z)(this, "type", "TTF"),
            (this.defaultLanguage = null),
            (this.stream = e),
            (this.variationCoords = t),
            (this._directoryPos = this.stream.pos),
            (this._tables = {}),
            (this._glyphs = {}),
            this._decodeDirectory();
          for (let s in this.directory.tables) {
            let e = this.directory.tables[s];
            Wr[s] &&
              e.length > 0 &&
              Object.defineProperty(this, s, {
                get: this._getTable.bind(this, e),
              });
          }
        }
      }
      (0, a.__decorate)([L], vl.prototype, "bbox", null),
        (0, a.__decorate)([L], vl.prototype, "_cmapProcessor", null),
        (0, a.__decorate)([L], vl.prototype, "characterSet", null),
        (0, a.__decorate)([L], vl.prototype, "_layoutEngine", null),
        (0, a.__decorate)([L], vl.prototype, "variationAxes", null),
        (0, a.__decorate)([L], vl.prototype, "namedVariations", null),
        (0, a.__decorate)([L], vl.prototype, "_variationProcessor", null);
      let _l = new r.AU({
          tag: new r.Ld(4),
          offset: new r.$J(r.U7, "void", { type: "global" }),
          compLength: r.U7,
          length: r.U7,
          origChecksum: r.U7,
        }),
        Ll = new r.AU({
          tag: new r.Ld(4),
          flavor: r.U7,
          length: r.U7,
          numTables: r.mL,
          reserved: new r.kV(r.mL),
          totalSfntSize: r.U7,
          majorVersion: r.mL,
          minorVersion: r.mL,
          metaOffset: r.U7,
          metaLength: r.U7,
          metaOrigLength: r.U7,
          privOffset: r.U7,
          privLength: r.U7,
          tables: new r.mJ(_l, "numTables"),
        });
      Ll.process = function () {
        let e = {};
        for (let t of this.tables) e[t.tag] = t;
        this.tables = e;
      };
      var Cl = Ll;
      class xl extends il {
        _decode() {
          return this._font._transformedGlyphs[this.id];
        }
        _getCBox() {
          return this.path.bbox;
        }
        constructor(...e) {
          super(...e), (0, n.Z)(this, "type", "WOFF2");
        }
      }
      const Al = {
        decode(e) {
          let t = 0,
            s = [0, 1, 2, 3, 4];
          for (let r = 0; r < s.length; r++) {
            let s = e.readUInt8();
            if (3758096384 & t) throw new Error("Overflow");
            if (((t = (t << 7) | (127 & s)), 0 === (128 & s))) return t;
          }
          throw new Error("Bad base 128 number");
        },
      };
      let kl = [
          "cmap",
          "head",
          "hhea",
          "hmtx",
          "maxp",
          "name",
          "OS/2",
          "post",
          "cvt ",
          "fpgm",
          "glyf",
          "loca",
          "prep",
          "CFF ",
          "VORG",
          "EBDT",
          "EBLC",
          "gasp",
          "hdmx",
          "kern",
          "LTSH",
          "PCLT",
          "VDMX",
          "vhea",
          "vmtx",
          "BASE",
          "GDEF",
          "GPOS",
          "GSUB",
          "EBSC",
          "JSTF",
          "MATH",
          "CBDT",
          "CBLC",
          "COLR",
          "CPAL",
          "SVG ",
          "sbix",
          "acnt",
          "avar",
          "bdat",
          "bloc",
          "bsln",
          "cvar",
          "fdsc",
          "feat",
          "fmtx",
          "fvar",
          "gvar",
          "hsty",
          "just",
          "lcar",
          "mort",
          "morx",
          "opbd",
          "prop",
          "trak",
          "Zapf",
          "Silf",
          "Glat",
          "Gloc",
          "Feat",
          "Sill",
        ],
        Sl = new r.AU({
          flags: r.w_,
          customTag: new r.Fi(new r.Ld(4), (e) => 63 === (63 & e.flags)),
          tag: (e) => e.customTag || kl[63 & e.flags],
          length: Al,
          transformVersion: (e) => (e.flags >>> 6) & 3,
          transformed: (e) =>
            "glyf" === e.tag || "loca" === e.tag
              ? 0 === e.transformVersion
              : 0 !== e.transformVersion,
          transformLength: new r.Fi(Al, (e) => e.transformed),
        }),
        Il = new r.AU({
          tag: new r.Ld(4),
          flavor: r.U7,
          length: r.U7,
          numTables: r.mL,
          reserved: new r.kV(r.mL),
          totalSfntSize: r.U7,
          totalCompressedSize: r.U7,
          majorVersion: r.mL,
          minorVersion: r.mL,
          metaOffset: r.U7,
          metaLength: r.U7,
          metaOrigLength: r.U7,
          privOffset: r.U7,
          privLength: r.U7,
          tables: new r.mJ(Sl, "numTables"),
        });
      Il.process = function () {
        let e = {};
        for (let t = 0; t < this.tables.length; t++) {
          let s = this.tables[t];
          e[s.tag] = s;
        }
        return (this.tables = e);
      };
      var Pl = Il;
      class Ul {
        decode(e, t) {
          return new r.fT(this._buf.decode(e, t));
        }
        constructor(e) {
          (this.length = e), (this._buf = new r.lW(e));
        }
      }
      let Jl = new r.AU({
        version: r.U7,
        numGlyphs: r.mL,
        indexFormat: r.mL,
        nContourStreamSize: r.U7,
        nPointsStreamSize: r.U7,
        flagStreamSize: r.U7,
        glyphStreamSize: r.U7,
        compositeStreamSize: r.U7,
        bboxStreamSize: r.U7,
        instructionStreamSize: r.U7,
        nContours: new Ul("nContourStreamSize"),
        nPoints: new Ul("nPointsStreamSize"),
        flags: new Ul("flagStreamSize"),
        glyphs: new Ul("glyphStreamSize"),
        composites: new Ul("compositeStreamSize"),
        bboxes: new Ul("bboxStreamSize"),
        instructions: new Ul("instructionStreamSize"),
      });
      function Tl(e) {
        let t = e.readUInt8();
        return 253 === t
          ? e.readUInt16BE()
          : 255 === t
          ? e.readUInt8() + 253
          : 254 === t
          ? e.readUInt8() + 506
          : t;
      }
      function Ol(e, t) {
        return 1 & e ? t : -t;
      }
      function Fl(e, t, s) {
        let r,
          n = (r = 0),
          a = [];
        for (let o = 0; o < s; o++) {
          let s = 0,
            o = 0,
            u = e.readUInt8(),
            c = !(u >> 7);
          if (((u &= 127), u < 10))
            (s = 0), (o = Ol(u, ((14 & u) << 7) + t.readUInt8()));
          else if (u < 20)
            (s = Ol(u, (((u - 10) & 14) << 7) + t.readUInt8())), (o = 0);
          else if (u < 84) {
            (s = Ol(u, 1 + (48 & (l = u - 20)) + ((i = t.readUInt8()) >> 4))),
              (o = Ol(u >> 1, 1 + ((12 & l) << 2) + (15 & i)));
          } else if (u < 120) {
            var l;
            (s = Ol(u, 1 + (((l = u - 84) / 12) << 8) + t.readUInt8())),
              (o = Ol(u >> 1, 1 + ((l % 12 >> 2) << 8) + t.readUInt8()));
          } else if (u < 124) {
            var i = t.readUInt8();
            let e = t.readUInt8();
            (s = Ol(u, (i << 4) + (e >> 4))),
              (o = Ol(u >> 1, ((15 & e) << 8) + t.readUInt8()));
          } else
            (s = Ol(u, t.readUInt16BE())), (o = Ol(u >> 1, t.readUInt16BE()));
          (n += s), (r += o), a.push(new al(c, !1, n, r));
        }
        return a;
      }
      let Dl = new r.bS(r.U7, {
        65536: { numFonts: r.U7, offsets: new r.mJ(r.U7, "numFonts") },
        131072: {
          numFonts: r.U7,
          offsets: new r.mJ(r.U7, "numFonts"),
          dsigTag: r.U7,
          dsigLength: r.U7,
          dsigOffset: r.U7,
        },
      });
      let Ml = new r.Ld(r.w_),
        Gl =
          (new r.AU({ len: r.U7, buf: new r.lW("len") }),
          new r.AU({
            id: r.mL,
            nameOffset: r.Af,
            attr: r.w_,
            dataOffset: r.Un,
            handle: r.U7,
          })),
        El = new r.AU({
          name: new r.Ld(4),
          maxTypeIndex: r.mL,
          refList: new r.$J(r.mL, new r.mJ(Gl, (e) => e.maxTypeIndex + 1), {
            type: "parent",
          }),
        }),
        Bl = new r.AU({
          length: r.mL,
          types: new r.mJ(El, (e) => e.length + 1),
        }),
        Vl = new r.AU({
          reserved: new r.kV(r.w_, 24),
          typeList: new r.$J(r.mL, Bl),
          nameListOffset: new r.$J(r.mL, "void"),
        }),
        zl = new r.AU({
          dataOffset: r.U7,
          map: new r.$J(r.U7, Vl),
          dataLength: r.U7,
          mapLength: r.U7,
        });
      b(vl),
        b(
          class extends vl {
            static probe(e) {
              return "wOFF" === $r.decode(e.slice(0, 4));
            }
            _decodeDirectory() {
              this.directory = Cl.decode(this.stream, { _startOffset: 0 });
            }
            _getTableStream(e) {
              let t = this.directory.tables[e];
              if (t) {
                if (((this.stream.pos = t.offset), t.compLength < t.length)) {
                  this.stream.pos += 2;
                  let e = new Uint8Array(t.length),
                    s = h(this.stream.readBuffer(t.compLength - 2), e);
                  return new r.fT(s);
                }
                return this.stream;
              }
              return null;
            }
            constructor(...e) {
              super(...e), (0, n.Z)(this, "type", "WOFF");
            }
          }
        ),
        b(
          class extends vl {
            static probe(e) {
              return "wOF2" === $r.decode(e.slice(0, 4));
            }
            _decodeDirectory() {
              (this.directory = Pl.decode(this.stream)),
                (this._dataPos = this.stream.pos);
            }
            _decompress() {
              if (!this._decompressed) {
                this.stream.pos = this._dataPos;
                let e = this.stream.readBuffer(
                    this.directory.totalCompressedSize
                  ),
                  t = 0;
                for (let r in this.directory.tables) {
                  let e = this.directory.tables[r];
                  (e.offset = t),
                    (t +=
                      null != e.transformLength ? e.transformLength : e.length);
                }
                let s = f(e, t);
                if (!s)
                  throw new Error("Error decoding compressed data in WOFF2");
                (this.stream = new r.fT(s)), (this._decompressed = !0);
              }
            }
            _decodeTable(e) {
              return this._decompress(), super._decodeTable(e);
            }
            _getBaseGlyph(e, t = []) {
              if (!this._glyphs[e])
                return this.directory.tables.glyf &&
                  this.directory.tables.glyf.transformed
                  ? (this._transformedGlyphs || this._transformGlyfTable(),
                    (this._glyphs[e] = new xl(e, t, this)))
                  : super._getBaseGlyph(e, t);
            }
            _transformGlyfTable() {
              this._decompress(),
                (this.stream.pos = this.directory.tables.glyf.offset);
              let e = Jl.decode(this.stream),
                t = [];
              for (let s = 0; s < e.numGlyphs; s++) {
                let s = {},
                  r = e.nContours.readInt16BE();
                if (((s.numberOfContours = r), r > 0)) {
                  let t = [],
                    n = 0;
                  for (let s = 0; s < r; s++) {
                    (n += Tl(e.nPoints)), t.push(n);
                  }
                  s.points = Fl(e.flags, e.glyphs, n);
                  for (let e = 0; e < r; e++)
                    s.points[t[e] - 1].endContour = !0;
                  Tl(e.glyphs);
                } else if (r < 0) {
                  if (
                    il.prototype._decodeComposite.call(
                      { _font: this },
                      s,
                      e.composites
                    )
                  )
                    Tl(e.glyphs);
                }
                t.push(s);
              }
              this._transformedGlyphs = t;
            }
            constructor(...e) {
              super(...e), (0, n.Z)(this, "type", "WOFF2");
            }
          }
        ),
        b(
          class {
            static probe(e) {
              return "ttcf" === $r.decode(e.slice(0, 4));
            }
            getFont(e) {
              for (let t of this.header.offsets) {
                let s = new r.fT(this.stream.buffer);
                s.pos = t;
                let n = new vl(s);
                if (
                  n.postscriptName === e ||
                  (n.postscriptName instanceof Uint8Array &&
                    e instanceof Uint8Array &&
                    n.postscriptName.every((t, s) => e[s] === t))
                )
                  return n;
              }
              return null;
            }
            get fonts() {
              let e = [];
              for (let t of this.header.offsets) {
                let s = new r.fT(this.stream.buffer);
                (s.pos = t), e.push(new vl(s));
              }
              return e;
            }
            constructor(e) {
              if (
                ((0, n.Z)(this, "type", "TTC"),
                (this.stream = e),
                "ttcf" !== e.readString(4))
              )
                throw new Error("Not a TrueType collection");
              this.header = Dl.decode(e);
            }
          }
        ),
        b(
          class {
            static probe(e) {
              let t = new r.fT(e);
              try {
                var s = zl.decode(t);
              } catch (n) {
                return !1;
              }
              for (let r of s.map.typeList.types)
                if ("sfnt" === r.name) return !0;
              return !1;
            }
            getFont(e) {
              if (!this.sfnt) return null;
              for (let t of this.sfnt.refList) {
                let s = this.header.dataOffset + t.dataOffset + 4,
                  n = new r.fT(this.stream.buffer.slice(s)),
                  a = new vl(n);
                if (
                  a.postscriptName === e ||
                  (a.postscriptName instanceof Uint8Array &&
                    e instanceof Uint8Array &&
                    a.postscriptName.every((t, s) => e[s] === t))
                )
                  return a;
              }
              return null;
            }
            get fonts() {
              let e = [];
              for (let t of this.sfnt.refList) {
                let s = this.header.dataOffset + t.dataOffset + 4,
                  n = new r.fT(this.stream.buffer.slice(s));
                e.push(new vl(n));
              }
              return e;
            }
            constructor(e) {
              (0, n.Z)(this, "type", "DFont"),
                (this.stream = e),
                (this.header = zl.decode(this.stream));
              for (let t of this.header.map.typeList.types) {
                for (let e of t.refList)
                  e.nameOffset >= 0
                    ? ((this.stream.pos =
                        e.nameOffset + this.header.map.nameListOffset),
                      (e.name = Ml.decode(this.stream)))
                    : (e.name = null);
                "sfnt" === t.name && (this.sfnt = t);
              }
            }
          }
        );
    },
  },
]);
