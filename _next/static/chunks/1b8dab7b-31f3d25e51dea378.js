"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5999],
  {
    80161: function (r, e, a) {
      a.d(e, {
        Z: function () {
          return m;
        },
      });
      var n,
        i,
        t,
        f = a(87462),
        o = a(67855),
        u = Object.create,
        c = Object.defineProperty,
        b = Object.getOwnPropertyDescriptor,
        A = Object.getOwnPropertyNames,
        s = Object.getPrototypeOf,
        k = Object.prototype.hasOwnProperty,
        l = function (r, e) {
          return function () {
            return e || r((e = { exports: {} }).exports, e), e.exports;
          };
        },
        d = l(function (r, e) {
          e.exports = {
            ALIGN_AUTO: 0,
            ALIGN_FLEX_START: 1,
            ALIGN_CENTER: 2,
            ALIGN_FLEX_END: 3,
            ALIGN_STRETCH: 4,
            ALIGN_BASELINE: 5,
            ALIGN_SPACE_BETWEEN: 6,
            ALIGN_SPACE_AROUND: 7,
            DIMENSION_WIDTH: 0,
            DIMENSION_HEIGHT: 1,
            DIRECTION_INHERIT: 0,
            DIRECTION_LTR: 1,
            DIRECTION_RTL: 2,
            DISPLAY_FLEX: 0,
            DISPLAY_NONE: 1,
            EDGE_LEFT: 0,
            EDGE_TOP: 1,
            EDGE_RIGHT: 2,
            EDGE_BOTTOM: 3,
            EDGE_START: 4,
            EDGE_END: 5,
            EDGE_HORIZONTAL: 6,
            EDGE_VERTICAL: 7,
            EDGE_ALL: 8,
            EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,
            EXPERIMENTAL_FEATURE_ABSOLUTE_PERCENTAGE_AGAINST_PADDING_EDGE: 1,
            EXPERIMENTAL_FEATURE_FIX_ABSOLUTE_TRAILING_COLUMN_MARGIN: 2,
            FLEX_DIRECTION_COLUMN: 0,
            FLEX_DIRECTION_COLUMN_REVERSE: 1,
            FLEX_DIRECTION_ROW: 2,
            FLEX_DIRECTION_ROW_REVERSE: 3,
            GUTTER_COLUMN: 0,
            GUTTER_ROW: 1,
            GUTTER_ALL: 2,
            JUSTIFY_FLEX_START: 0,
            JUSTIFY_CENTER: 1,
            JUSTIFY_FLEX_END: 2,
            JUSTIFY_SPACE_BETWEEN: 3,
            JUSTIFY_SPACE_AROUND: 4,
            JUSTIFY_SPACE_EVENLY: 5,
            LOG_LEVEL_ERROR: 0,
            LOG_LEVEL_WARN: 1,
            LOG_LEVEL_INFO: 2,
            LOG_LEVEL_DEBUG: 3,
            LOG_LEVEL_VERBOSE: 4,
            LOG_LEVEL_FATAL: 5,
            MEASURE_MODE_UNDEFINED: 0,
            MEASURE_MODE_EXACTLY: 1,
            MEASURE_MODE_AT_MOST: 2,
            NODE_TYPE_DEFAULT: 0,
            NODE_TYPE_TEXT: 1,
            OVERFLOW_VISIBLE: 0,
            OVERFLOW_HIDDEN: 1,
            OVERFLOW_SCROLL: 2,
            POSITION_TYPE_STATIC: 0,
            POSITION_TYPE_RELATIVE: 1,
            POSITION_TYPE_ABSOLUTE: 2,
            PRINT_OPTIONS_LAYOUT: 1,
            PRINT_OPTIONS_STYLE: 2,
            PRINT_OPTIONS_CHILDREN: 4,
            UNIT_UNDEFINED: 0,
            UNIT_POINT: 1,
            UNIT_PERCENT: 2,
            UNIT_AUTO: 3,
            WRAP_NO_WRAP: 0,
            WRAP_WRAP: 1,
            WRAP_WRAP_REVERSE: 2,
          };
        }),
        h = l(function (r, e) {
          var a = d();
          e.exports = function (r) {
            function e(r, e, a) {
              var n = r[e];
              r[e] = function () {
                for (
                  var r = arguments.length, e = new Array(r), i = 0;
                  i < r;
                  i++
                )
                  e[i] = arguments[i];
                return a.call.apply(a, [this, n].concat(e));
              };
            }
            for (
              var n = function () {
                  var n,
                    f = t[i],
                    o =
                      (((n = {})[a.UNIT_POINT] = r.Node.prototype[f]),
                      (n[a.UNIT_PERCENT] = r.Node.prototype[f + "Percent"]),
                      (n[a.UNIT_AUTO] = r.Node.prototype[f + "Auto"]),
                      n);
                  e(r.Node.prototype, f, function (r) {
                    for (
                      var e,
                        n,
                        i = arguments.length,
                        t = new Array(i > 1 ? i - 1 : 0),
                        u = 1;
                      u < i;
                      u++
                    )
                      t[u - 1] = arguments[u];
                    var c,
                      b,
                      A = t.pop();
                    if ("auto" === A) (c = a.UNIT_AUTO), (b = void 0);
                    else if ("object" == typeof A)
                      (c = A.unit), (b = A.valueOf());
                    else if (
                      ((c =
                        "string" == typeof A && A.endsWith("%")
                          ? a.UNIT_PERCENT
                          : a.UNIT_POINT),
                      (b = parseFloat(A)),
                      !Number.isNaN(A) && Number.isNaN(b))
                    )
                      throw new Error("Invalid value " + A + " for " + f);
                    if (!o[c])
                      throw new Error(
                        'Failed to execute "' +
                          f +
                          "\": Unsupported unit '" +
                          A +
                          "'"
                      );
                    return void 0 !== b
                      ? (e = o[c]).call.apply(e, [this].concat(t, [b]))
                      : (n = o[c]).call.apply(n, [this].concat(t));
                  });
                },
                i = 0,
                t = [
                  "setPosition",
                  "setMargin",
                  "setFlexBasis",
                  "setWidth",
                  "setHeight",
                  "setMinWidth",
                  "setMinHeight",
                  "setMaxWidth",
                  "setMaxHeight",
                  "setPadding",
                ];
              i < t.length;
              i++
            )
              n();
            return (
              e(r.Node.prototype, "setMeasureFunc", function (e, a) {
                return a
                  ? e.call(
                      this,
                      (function (e) {
                        return r.MeasureCallback.implement({
                          measure: function () {
                            var r = e.apply(void 0, arguments),
                              a = r.width,
                              n = r.height;
                            return {
                              width: null != a ? a : NaN,
                              height: null != n ? n : NaN,
                            };
                          },
                        });
                      })(a)
                    )
                  : this.unsetMeasureFunc();
              }),
              e(r.Node.prototype, "setDirtiedFunc", function (e, a) {
                e.call(
                  this,
                  (function (e) {
                    return r.DirtiedCallback.implement({ dirtied: e });
                  })(a)
                );
              }),
              e(r.Config.prototype, "free", function () {
                r.Config.destroy(this);
              }),
              e(r.Node, "create", function (e, a) {
                return a ? r.Node.createWithConfig(a) : r.Node.createDefault();
              }),
              e(r.Node.prototype, "free", function () {
                r.Node.destroy(this);
              }),
              e(r.Node.prototype, "freeRecursive", function () {
                for (var r = 0, e = this.getChildCount(); r < e; ++r)
                  this.getChild(0).freeRecursive();
                this.free();
              }),
              e(r.Node.prototype, "calculateLayout", function (r, e, n, i) {
                return (
                  void 0 === e && (e = NaN),
                  void 0 === n && (n = NaN),
                  void 0 === i && (i = a.DIRECTION_LTR),
                  r.call(this, e, n, i)
                );
              }),
              (0, f.Z)({ Config: r.Config, Node: r.Node }, a)
            );
          };
        }),
        v =
          ((n = h()),
          (i = 1),
          (t = null != n ? u(s(n)) : {}),
          (function (r, e, a, n) {
            if ((e && "object" == typeof e) || "function" == typeof e)
              for (
                var i,
                  t = function () {
                    var t = i.value;
                    !k.call(r, t) &&
                      t !== a &&
                      c(r, t, {
                        get: function () {
                          return e[t];
                        },
                        enumerable: !(n = b(e, t)) || n.enumerable,
                      });
                  },
                  f = (0, o.Z)(A(e));
                !(i = f()).done;

              )
                t();
            return r;
          })(
            !i && n && n.__esModule
              ? t
              : c(t, "default", { value: n, enumerable: !0 }),
            n
          )),
        p = (function () {
          var r =
            typeof document < "u" && document.currentScript
              ? document.currentScript.src
              : void 0;
          return function (e) {
            var a, n, i;
            void 0 === e && (e = {}),
              a || (a = typeof e < "u" ? e : {}),
              (a.ready = new Promise(function (r, e) {
                (n = r), (i = e);
              }));
            var t = Object.assign({}, a),
              f = "";
            typeof document < "u" &&
              document.currentScript &&
              (f = document.currentScript.src),
              r && (f = r),
              (f =
                0 !== f.indexOf("blob:")
                  ? f.substr(0, f.replace(/[?#].*/, "").lastIndexOf("/") + 1)
                  : "");
            var o,
              u = a.print || console.log.bind(console),
              c = a.printErr || console.warn.bind(console);
            function b() {}
            function A(r) {
              this.exports = (function (r) {
                for (var e, a = new Uint8Array(123), n = 25; n >= 0; --n)
                  (a[48 + n] = 52 + n), (a[65 + n] = n), (a[97 + n] = 26 + n);
                function i(r, e, n) {
                  for (
                    var i,
                      t,
                      f = 0,
                      o = e,
                      u = n.length,
                      c =
                        e +
                        ((3 * u) >> 2) -
                        ("=" == n[u - 2]) -
                        ("=" == n[u - 1]);
                    f < u;
                    f += 4
                  )
                    (i = a[n.charCodeAt(f + 1)]),
                      (t = a[n.charCodeAt(f + 2)]),
                      (r[o++] = (a[n.charCodeAt(f)] << 2) | (i >> 4)),
                      o < c && (r[o++] = (i << 4) | (t >> 2)),
                      o < c && (r[o++] = (t << 6) | a[n.charCodeAt(f + 3)]);
                }
                (a[43] = 62), (a[47] = 63);
                var t = new ArrayBuffer(16),
                  f = new Int32Array(t),
                  o = new Float32Array(t),
                  u = new Float64Array(t);
                function c(r) {
                  return f[r];
                }
                function b(r, e) {
                  f[r] = e;
                }
                function A() {
                  return u[0];
                }
                function s(r) {
                  u[0] = r;
                }
                function k() {
                  throw new Error("abort");
                }
                function l(r) {
                  o[2] = r;
                }
                function d() {
                  return o[2];
                }
                return (function (r) {
                  var a = r.a,
                    n = a.a,
                    t = n.buffer;
                  n.grow = function (r) {
                    r |= 0;
                    var a = 0 | aa(),
                      i = (a + r) | 0;
                    if (a < i && i < 65536) {
                      var c = new ArrayBuffer(y(i, 65536));
                      new Int8Array(c).set(f),
                        (f = new Int8Array(c)),
                        (o = new Int16Array(c)),
                        (u = new Int32Array(c)),
                        (h = new Uint8Array(c)),
                        (v = new Uint16Array(c)),
                        (p = new Uint32Array(c)),
                        (N = new Float32Array(c)),
                        (m = new Float64Array(c)),
                        (t = c),
                        (n.buffer = t),
                        (e = h);
                    }
                    return a;
                  };
                  var f = new Int8Array(t),
                    o = new Int16Array(t),
                    u = new Int32Array(t),
                    h = new Uint8Array(t),
                    v = new Uint16Array(t),
                    p = new Uint32Array(t),
                    N = new Float32Array(t),
                    m = new Float64Array(t),
                    y = Math.imul,
                    w = Math.fround,
                    g = Math.abs,
                    E = Math.clz32,
                    G = Math.min,
                    Z = Math.max,
                    R = a.b,
                    W = a.c,
                    V = a.d,
                    T = a.e,
                    I = a.f,
                    B = a.g,
                    O = a.h,
                    _ = a.i,
                    L = a.j,
                    X = a.k,
                    F = a.l,
                    C = a.m,
                    P = a.n,
                    U = a.o,
                    H = a.p,
                    M = a.q,
                    S = a.r,
                    Y = a.s,
                    D = a.t,
                    j = a.u,
                    Q = a.v,
                    z = a.w,
                    x = a.x,
                    J = a.y,
                    K = a.z,
                    q = a.A,
                    $ = a.B,
                    rr = a.C,
                    er = a.D,
                    ar = 73568,
                    nr = 0;
                  function ir(r, e, a, n, i, t, o, c, A, s, l, v, p, m) {
                    var y,
                      E = w(0),
                      G = w(0),
                      Z = 0,
                      R = 0,
                      W = 0,
                      V = w(0),
                      T = w(0),
                      I = w(0),
                      O = 0,
                      _ = 0,
                      L = 0,
                      X = w(0),
                      F = w(0),
                      C = w(0),
                      P = 0,
                      U = w(0),
                      H = 0,
                      M = w(0),
                      S = w(0),
                      Y = 0,
                      D = 0,
                      j = 0,
                      Q = 0,
                      z = 0,
                      x = w(0),
                      J = 0,
                      K = w(0),
                      q = 0,
                      $ = 0,
                      rr = 0,
                      er = 0,
                      nr = w(0),
                      ir = 0,
                      tr = 0,
                      fr = 0,
                      ur = 0,
                      br = w(0),
                      lr = 0,
                      dr = 0,
                      hr = 0,
                      vr = w(0),
                      mr = w(0),
                      wr = 0,
                      gr = w(0),
                      Er = w(0),
                      Rr = w(0),
                      Xr = 0,
                      Cr = 0,
                      Pr = w(0),
                      Ur = 0,
                      Hr = w(0),
                      Yr = w(0),
                      Qr = w(0),
                      zr = w(0),
                      Jr = 0,
                      qr = 0,
                      $r = 0,
                      re = 0,
                      ee = 0,
                      ae = 0,
                      ne = 0,
                      ie = 0,
                      te = 0,
                      fe = w(0),
                      oe = w(0);
                    ar = y = (ar - 384) | 0;
                    r: {
                      e: {
                        a: {
                          if (!i || e == e) {
                            if (!t || a == a) {
                              if (
                                ((u[(Z = ((A ? 0 : 4) + l) | 0) >> 2] =
                                  u[Z >> 2] + 1),
                                (Ur = (0 | n) <= 1 ? 1 : n),
                                (J = (Z = 3 & u[(r + 24) >> 2]) || Ur),
                                (f[(r + 300) | 0] =
                                  (252 & h[(r + 300) | 0]) | (3 & J)),
                                (Z = (r + 252) | 0),
                                (n = (1 != (0 | J)) << 3),
                                (T = Sr(r, (lr = 2 == (0 | J) ? 3 : 2), o)),
                                (N[(Z + n) >> 2] = T),
                                (R = Z),
                                (Z = (1 == (0 | J)) << 3),
                                (F = Mr(r, lr, o)),
                                (N[(R + Z) >> 2] = F),
                                (X = Sr(r, 0, o)),
                                (N[(r + 256) >> 2] = X),
                                (V = Mr(r, 0, o)),
                                (N[(r + 264) >> 2] = V),
                                (te = ((W = (r + 268) | 0) + n) | 0),
                                (fe = jr(r, lr)),
                                (N[te >> 2] = fe),
                                (te = (Z + W) | 0),
                                (fe = Dr(r, lr)),
                                (N[te >> 2] = fe),
                                (E = jr(r, 0)),
                                (N[(r + 272) >> 2] = E),
                                (I = Dr(r, 0)),
                                (N[(r + 280) >> 2] = I),
                                (te = ((R = n) + (n = (r + 284) | 0)) | 0),
                                (fe = Tr(r, lr, o)),
                                (N[te >> 2] = fe),
                                (te = (n + Z) | 0),
                                (fe = Ir(r, lr, o)),
                                (N[te >> 2] = fe),
                                (G = Tr(r, 0, o)),
                                (N[(r + 288) >> 2] = G),
                                (U = Ir(r, 0, o)),
                                (N[(r + 296) >> 2] = U),
                                (T = w(T + F)),
                                (F = w(X + V)),
                                (n = u[(r + 8) >> 2]))
                              ) {
                                if (
                                  ((X = w(
                                    w(
                                      w(N[(r + 284) >> 2] + N[(r + 292) >> 2]) +
                                        N[(r + 268) >> 2]
                                    ) + N[(r + 276) >> 2]
                                  )),
                                  (a = w(t ? a - F : NaN)),
                                  (E = w(w(G + U) + E)),
                                  (e = G = w(i ? e - T : NaN)) == e &&
                                    (e =
                                      (e = w(G - X)) == e ? Ge(e, w(0)) : w(0)),
                                  (T = w(E + I)),
                                  (E = a),
                                  a == a &&
                                    (E =
                                      (E = w(a - T)) == E ? Ge(E, w(0)) : w(0)),
                                  !((1 != (0 | i)) | (1 != (0 | t))))
                                ) {
                                  (e =
                                    (n = (e = cr(r, 2, G, o)) != e) |
                                    ((E = w(
                                      w(Tr(r, 2, o) + jr(r, 2)) +
                                        w(Ir(r, 2, o) + Dr(r, 2))
                                    )) !=
                                      E)
                                      ? n
                                        ? E
                                        : e
                                      : Ge(e, E)),
                                    (N[(r + 516) >> 2] = e),
                                    (e =
                                      (n = (e = cr(r, 0, a, c)) != e) |
                                      ((a = w(
                                        w(Tr(r, 0, o) + jr(r, 0)) +
                                          w(Ir(r, 0, o) + Dr(r, 0))
                                      )) !=
                                        a)
                                        ? n
                                          ? a
                                          : e
                                        : Ge(e, a)),
                                    (N[(r + 520) >> 2] = e);
                                  break r;
                                }
                                16 & h[(r + 4) | 0]
                                  ? ea[0 | n]((y + 24) | 0, r, e, i, E, t, 0)
                                  : ea[0 | n]((y + 24) | 0, r, e, i, E, t),
                                  (u[(l + 20) >> 2] = u[(l + 20) >> 2] + 1),
                                  (u[((n = ((m << 2) + l) | 0) + 24) >> 2] =
                                    u[(n + 24) >> 2] + 1),
                                  (e = w(X + N[(y + 24) >> 2])),
                                  (e =
                                    (n =
                                      (e = cr(
                                        r,
                                        2,
                                        i ? (2 == (0 | i) ? e : G) : e,
                                        o
                                      )) != e) |
                                    ((E = w(
                                      w(Tr(r, 2, o) + jr(r, 2)) +
                                        w(Ir(r, 2, o) + Dr(r, 2))
                                    )) !=
                                      E)
                                      ? n
                                        ? E
                                        : e
                                      : Ge(e, E)),
                                  (N[(r + 516) >> 2] = e),
                                  (e = w(T + N[(y + 28) >> 2])),
                                  (e =
                                    (n =
                                      (e = cr(
                                        r,
                                        0,
                                        t ? (2 == (0 | t) ? e : a) : e,
                                        c
                                      )) != e) |
                                    ((a = w(
                                      w(Tr(r, 0, o) + jr(r, 0)) +
                                        w(Ir(r, 0, o) + Dr(r, 0))
                                    )) !=
                                      a)
                                      ? n
                                        ? a
                                        : e
                                      : Ge(e, a)),
                                  (N[(r + 520) >> 2] = e);
                                break r;
                              }
                              if (
                                (0 | (n = u[(r + 556) >> 2])) ==
                                (0 | (m = u[(r + 560) >> 2]))
                              ) {
                                (F = w(a - F)),
                                  (e =
                                    (n =
                                      (e = cr(
                                        r,
                                        2,
                                        w(
                                          -3 & i
                                            ? e - T
                                            : w(
                                                w(
                                                  N[(r + 284) >> 2] +
                                                    N[(r + 292) >> 2]
                                                ) + N[(r + 268) >> 2]
                                              ) + N[(r + 276) >> 2]
                                        ),
                                        o
                                      )) != e) |
                                    ((a = w(
                                      w(Tr(r, 2, o) + jr(r, 2)) +
                                        w(Ir(r, 2, o) + Dr(r, 2))
                                    )) !=
                                      a)
                                      ? n
                                        ? a
                                        : e
                                      : Ge(e, a)),
                                  (N[(r + 516) >> 2] = e),
                                  (e =
                                    (n =
                                      (e = cr(
                                        r,
                                        0,
                                        -3 & t ? F : w(w(w(G + U) + E) + I),
                                        c
                                      )) != e) |
                                    ((a = w(
                                      w(Tr(r, 0, o) + jr(r, 0)) +
                                        w(Ir(r, 0, o) + Dr(r, 0))
                                    )) !=
                                      a)
                                      ? n
                                        ? a
                                        : e
                                      : Ge(e, a)),
                                  (N[(r + 520) >> 2] = e);
                                break r;
                              }
                              if (
                                !(
                                  A ||
                                  ((G = w(e - T)),
                                  (E = w(a - F)),
                                  !(
                                    ((2 == (0 | i)) & (G <= w(0))) |
                                    (!(!(E <= w(0)) | (2 != (0 | t))) &
                                      (E == E))
                                  ) &
                                    ((1 != (0 | i)) | (1 != (0 | t))))
                                )
                              ) {
                                (e =
                                  (n =
                                    (e = cr(
                                      r,
                                      2,
                                      G == G
                                        ? 2 == (0 | i) && G < w(0)
                                          ? w(0)
                                          : G
                                        : w(0),
                                      o
                                    )) != e) |
                                  ((a = w(
                                    w(Tr(r, 2, o) + jr(r, 2)) +
                                      w(Ir(r, 2, o) + Dr(r, 2))
                                  )) !=
                                    a)
                                    ? n
                                      ? a
                                      : e
                                    : Ge(e, a)),
                                  (N[(r + 516) >> 2] = e),
                                  (e =
                                    (n =
                                      (e = cr(
                                        r,
                                        0,
                                        E != E || (2 == (0 | t) && E < w(0))
                                          ? w(0)
                                          : E,
                                        c
                                      )) != e) |
                                    ((a = w(
                                      w(Tr(r, 0, o) + jr(r, 0)) +
                                        w(Ir(r, 0, o) + Dr(r, 0))
                                    )) !=
                                      a)
                                      ? n
                                        ? a
                                        : e
                                      : Ge(e, a)),
                                  (N[(r + 520) >> 2] = e);
                                break r;
                              }
                              for (
                                er = (j = (m - n) | 0) >> 2;
                                (Z = u[n >> 2]),
                                  u[(Z + 552) >> 2] != (0 | r) &&
                                    ((W = u[(r + 568) >> 2]),
                                    (Z = Br(
                                      u[W >> 2],
                                      h[(W + 8) | 0],
                                      Z,
                                      r,
                                      _,
                                      0
                                    )),
                                    (u[n >> 2] = Z),
                                    (u[(Z + 552) >> 2] = r)),
                                  (_ = (_ + 1) | 0),
                                  (0 | m) != (0 | (n = (n + 4) | 0));

                              );
                              (f[(r + 300) | 0] = 251 & h[(r + 300) | 0]),
                                (_ = 3),
                                (n = ((wr = u[(r + 24) >> 2]) >>> 2) & 3);
                              n: {
                                i: {
                                  t: {
                                    if (2 == (0 | J)) {
                                      m = 0;
                                      f: switch ((n - 2) | 0) {
                                        case 0:
                                          break n;
                                        case 1:
                                          break f;
                                        default:
                                          break t;
                                      }
                                      _ = 2;
                                      break n;
                                    }
                                    if (((_ = 2), (m = 0), n >>> 0 > 1))
                                      break i;
                                  }
                                  m = _;
                                }
                                _ = n;
                              }
                              (Hr = w(e - T)),
                                (nr = w(
                                  w(Tr(r, _, o) + jr(r, _)) +
                                    w(Ir(r, _, o) + Dr(r, _))
                                )),
                                (U = w(Tr(r, m, o) + jr(r, m))),
                                (K = w(U + w(Ir(r, m, o) + Dr(r, m)))),
                                (V = kr(
                                  r,
                                  0,
                                  Hr,
                                  (q = _ >>> 0 > 1) ? nr : K,
                                  o
                                )),
                                (M = kr(r, 1, (Yr = w(a - F)), q ? K : nr, c)),
                                (S = q ? M : V),
                                (F = q ? V : M),
                                (ir = u[(r + 560) >> 2]),
                                (Z = u[(r + 556) >> 2]);
                              n: if (1 == (0 | (H = q ? i : t))) {
                                if ((0 | Z) == (0 | ir)) break a;
                                for (n = 0, W = Z; ; ) {
                                  R = n;
                                  i: if (xr((n = u[W >> 2]))) {
                                    if (
                                      ((O = 0), R || !(R = u[(n + 552) >> 2]))
                                    )
                                      break n;
                                    t: {
                                      if (
                                        !(
                                          (a = N[(n + 32) >> 2]) == a ||
                                          ((E = w(0)),
                                          (a = N[(n + 28) >> 2]) > w(0))
                                        ) ||
                                        ((E = a), a == a)
                                      ) {
                                        if (w(g(E)) < w(9999999747378752e-20))
                                          break n;
                                        if (!R) {
                                          a = w(0);
                                          break t;
                                        }
                                      }
                                      if ((a = N[(n + 36) >> 2]) != a) {
                                        if (f[(n + 4) | 0] < 0) {
                                          a = w(1);
                                          break t;
                                        }
                                        if (
                                          ((a = w(0)),
                                          !((e = N[(n + 28) >> 2]) < w(0)))
                                        )
                                          break t;
                                        a = w(-e);
                                      }
                                      if (a != a) break i;
                                    }
                                    if (w(g(a)) < w(9999999747378752e-20))
                                      break n;
                                  } else n = R;
                                  if (
                                    ((O = n),
                                    (0 | ir) == (0 | (W = (W + 4) | 0)))
                                  )
                                    break;
                                }
                              }
                              if ((0 | Z) == (0 | ir)) break a;
                              for (
                                Q = (0 | J) <= 1 ? 1 : J,
                                  tr = (fr = V != V) | (1 != (0 | i)),
                                  ur = M == M,
                                  dr = V == V,
                                  E = w(0);
                                ;

                              ) {
                                Ar((L = u[Z >> 2]));
                                n: if (4194304 & (W = u[(L + 24) >> 2])) {
                                  if (
                                    (Nr(L, 0),
                                    (W = 1 | (n = h[(L + 4) | 0])),
                                    (f[(L + 4) | 0] = W),
                                    !(4 & n))
                                  )
                                    break n;
                                  f[(L + 4) | 0] = 251 & W;
                                } else if (
                                  (A &&
                                    (Fr(L, (n = 3 & W) || Q, F, S, V),
                                    (W = u[(L + 24) >> 2])),
                                  131072 != (196608 & W))
                                ) {
                                  if ((0 | O) != (0 | L)) {
                                    R = ((hr = u[(r + 24) >> 2]) >>> 2) & 3;
                                    i: {
                                      t: if (2 == (0 | J)) {
                                        n = 3;
                                        f: switch ((R - 2) | 0) {
                                          case 0:
                                            break i;
                                          case 1:
                                            break f;
                                          default:
                                            break t;
                                        }
                                        n = 2;
                                        break i;
                                      }
                                      n = R;
                                    }
                                    (G = ($ = n >>> 0 > 1) ? V : M),
                                      (a = w(0)),
                                      (e = N[(L + 40) >> 2]);
                                    i: {
                                      t: {
                                        f: if (
                                          2139156720 !=
                                          (0 | (R = u[(L + 40) >> 2]))
                                        ) {
                                          if (2140081935 == (0 | R)) break t;
                                          P = 4216;
                                          o: {
                                            if (2141891242 != (0 | R)) {
                                              if (e == e) break o;
                                              P = 4208;
                                            }
                                            a = N[P >> 2];
                                            u: {
                                              c: switch (
                                                ((R = u[(P + 4) >> 2]), 0 | R)
                                              ) {
                                                case 0:
                                                case 3:
                                                  break c;
                                                default:
                                                  break u;
                                              }
                                              if (
                                                ((e = w(NaN)),
                                                !(N[(L + 28) >> 2] > w(0)))
                                              )
                                                break i;
                                              (R = (P = f[(L + 4) | 0] < 0)
                                                ? 3
                                                : 1),
                                                b(2, (z = P ? 2143289344 : 0)),
                                                (a = d());
                                            }
                                            switch (
                                              ((e = w(NaN)), (R - 1) | 0)
                                            ) {
                                              case 0:
                                                break t;
                                              case 1:
                                                break f;
                                              default:
                                                break i;
                                            }
                                          }
                                          if (
                                            (b(
                                              2,
                                              (536870912 + (-1073741825 & R)) |
                                                0
                                            ),
                                            (a = d()),
                                            !(1073741824 & R))
                                          )
                                            break t;
                                        }
                                        e = w(
                                          w(G * a) * w(0.009999999776482582)
                                        );
                                        break i;
                                      }
                                      e = a;
                                    }
                                    (a = N[(L + 572) >> 2]), (R = 0);
                                    i: {
                                      t: switch (
                                        ((D = u[(L + 576) >> 2]), 0 | D)
                                      ) {
                                        case 0:
                                        case 3:
                                          break i;
                                      }
                                      if (
                                        (1 != (0 | D)) |
                                        ((T = N[(L + 572) >> 2]) != T)
                                      )
                                        (R = 1),
                                          (2 != (0 | D)) | (T != T) ||
                                            ((R = 0), a < w(0)) ||
                                            (R = dr);
                                      else {
                                        if (a < w(0)) break i;
                                        R = 1;
                                      }
                                    }
                                    (T = N[(L + 580) >> 2]), (P = 0);
                                    i: {
                                      t: switch (
                                        ((Y = u[(L + 584) >> 2]), 0 | Y)
                                      ) {
                                        case 0:
                                        case 3:
                                          break i;
                                      }
                                      if (
                                        (1 != (0 | Y)) |
                                        ((I = N[(L + 580) >> 2]) != I)
                                      )
                                        (P = 1),
                                          (2 != (0 | Y)) | (I != I) ||
                                            ((P = 0), T < w(0)) ||
                                            (P = ur);
                                      else {
                                        if (T < w(0)) break i;
                                        P = 1;
                                      }
                                    }
                                    i: {
                                      t: if ((e != e) | (G != G))
                                        if (R & $) {
                                          (G = w(
                                            w(Tr(L, 2, V) + jr(L, 2)) +
                                              w(Ir(L, 2, V) + Dr(L, 2))
                                          )),
                                            (e = w(NaN));
                                          f: switch ((D - 1) | 0) {
                                            case 1:
                                              a = w(
                                                w(V * a) *
                                                  w(0.009999999776482582)
                                              );
                                            case 0:
                                              if (G <= (e = a)) break t;
                                          }
                                          if (!((e == e) | (G == G))) {
                                            a = e;
                                            break t;
                                          }
                                          if (e < G) {
                                            a = G;
                                            break t;
                                          }
                                          a = e != e ? G : e;
                                        } else if ($ | (1 ^ P)) {
                                          if (
                                            ((u[(y + 360) >> 2] = 2143289344),
                                            (u[(y + 24) >> 2] = 2143289344),
                                            (z = 0),
                                            (u[(y + 356) >> 2] = 0),
                                            (u[(y + 352) >> 2] = 0),
                                            (I = w(Sr(L, 2, V) + Mr(L, 2, V))),
                                            (X = Sr(L, 0, V)),
                                            (C = Mr(L, 0, V)),
                                            (G = w(NaN)),
                                            (rr = 0),
                                            (e = w(NaN)),
                                            R)
                                          ) {
                                            f: {
                                              o: switch ((D - 1) | 0) {
                                                case 0:
                                                  e = a;
                                                  break f;
                                                case 1:
                                                  break o;
                                                default:
                                                  break f;
                                              }
                                              e = w(
                                                w(V * a) *
                                                  w(0.009999999776482582)
                                              );
                                            }
                                            (u[(y + 356) >> 2] = 1),
                                              (e = w(I + e)),
                                              (N[(y + 24) >> 2] = e),
                                              (rr = 1);
                                          }
                                          if (((X = w(X + C)), P)) {
                                            a = w(NaN);
                                            f: {
                                              o: switch ((Y - 1) | 0) {
                                                case 0:
                                                  a = T;
                                                  break f;
                                                case 1:
                                                  break o;
                                                default:
                                                  break f;
                                              }
                                              a = w(
                                                w(M * T) *
                                                  w(0.009999999776482582)
                                              );
                                            }
                                            (u[(y + 352) >> 2] = 1),
                                              (G = w(X + a)),
                                              (N[(y + 360) >> 2] = G),
                                              (z = 1);
                                          }
                                          D = n >>> 0 < 2;
                                          f: {
                                            o: {
                                              u: {
                                                if (
                                                  !(
                                                    !$ &
                                                    (2097152 ==
                                                      (0 | (Y = 3145728 & hr)))
                                                  )
                                                ) {
                                                  if (fr | (2097152 == (0 | Y)))
                                                    break o;
                                                  if (e != e) break u;
                                                  break o;
                                                }
                                                if (fr | (e == e)) break f;
                                              }
                                              (rr = 2),
                                                (u[(y + 356) >> 2] = 2),
                                                (N[(y + 24) >> 2] = V),
                                                (e = V);
                                            }
                                            o: {
                                              if (
                                                !(!D & (2097152 == (0 | Y)))
                                              ) {
                                                if (
                                                  (2097152 == (0 | Y)) |
                                                  (M != M)
                                                )
                                                  break f;
                                                if (G != G) break o;
                                                break f;
                                              }
                                              if ((G == G) | (M != M)) break f;
                                            }
                                            (z = 2),
                                              (u[(y + 352) >> 2] = 2),
                                              (N[(y + 360) >> 2] = M),
                                              (G = M);
                                          }
                                          f: if (
                                            !(Y = (a = N[(L + 224) >> 2]) != a)
                                          ) {
                                            if ($ | (1 != (0 | rr))) {
                                              if (D | (1 != (0 | z))) break f;
                                              (u[(y + 356) >> 2] = 1),
                                                (N[(y + 24) >> 2] =
                                                  w(w(G - X) * a) + I);
                                            } else
                                              (u[(y + 352) >> 2] = 1),
                                                (N[(y + 360) >> 2] =
                                                  X + w(w(e - I) / a));
                                            (z = 1), (rr = 1);
                                          }
                                          (5 ==
                                            (0 |
                                              (W =
                                                (W = (W >>> 13) & 7) ||
                                                (hr >>> 10) & 7))) |
                                            (1 == (0 | rr)) |
                                            $ |
                                            R |
                                            tr |
                                            (4 != (0 | W)) ||
                                            ((u[(y + 356) >> 2] = 1),
                                            (N[(y + 24) >> 2] = V),
                                            Y) ||
                                            ((z = 1),
                                            (u[(y + 352) >> 2] = 1),
                                            (N[(y + 360) >> 2] = w(V - I) / a)),
                                            D |
                                              (1 != (0 | t)) |
                                              (M != M) |
                                              P |
                                              (4 != (0 | W)) |
                                              (1 == (0 | z)) ||
                                              ((u[(y + 352) >> 2] = 1),
                                              (N[(y + 360) >> 2] = M),
                                              Y) ||
                                              ((u[(y + 356) >> 2] = 1),
                                              (N[(y + 24) >> 2] =
                                                w(M - X) * a)),
                                            Vr(
                                              L,
                                              2,
                                              V,
                                              V,
                                              (y + 356) | 0,
                                              (y + 24) | 0
                                            ),
                                            Vr(
                                              L,
                                              0,
                                              M,
                                              V,
                                              (y + 352) | 0,
                                              (y + 360) | 0
                                            ),
                                            or(
                                              L,
                                              N[(y + 24) >> 2],
                                              N[(y + 360) >> 2],
                                              J,
                                              u[(y + 356) >> 2],
                                              u[(y + 352) >> 2],
                                              V,
                                              M,
                                              0,
                                              5,
                                              s,
                                              l,
                                              v,
                                              p
                                            ),
                                            (a =
                                              (W =
                                                (e =
                                                  N[
                                                    (516 +
                                                      ((L +
                                                        (u[
                                                          (4192 + (n << 2)) >> 2
                                                        ] <<
                                                          2)) |
                                                        0)) >>
                                                      2
                                                  ]) != e) |
                                              ((a = w(
                                                w(Tr(L, n, V) + jr(L, n)) +
                                                  w(Ir(L, n, V) + Dr(L, n))
                                              )) !=
                                                a)
                                                ? W
                                                  ? a
                                                  : e
                                                : Ge(e, a));
                                        } else {
                                          (e = w(
                                            w(Tr(L, 0, V) + jr(L, 0)) +
                                              w(Ir(L, 0, V) + Dr(L, 0))
                                          )),
                                            (a = w(NaN));
                                          f: switch ((Y - 1) | 0) {
                                            case 1:
                                              T = w(
                                                w(M * T) *
                                                  w(0.009999999776482582)
                                              );
                                            case 0:
                                              if (e <= (a = T)) break t;
                                          }
                                          if ((a != a) & (e != e)) break t;
                                          if (e > a) {
                                            a = e;
                                            break t;
                                          }
                                          a = a != a ? e : a;
                                        }
                                      else {
                                        if (
                                          ((a = N[(L + 308) >> 2]),
                                          (!h[(u[(L + 568) >> 2] + 20) | 0] |
                                            (u[(L + 304) >> 2] == (0 | p))) &
                                            (a == a))
                                        )
                                          break i;
                                        if (
                                          !(
                                            (a = w(
                                              w(Tr(L, n, V) + jr(L, n)) +
                                                w(Ir(L, n, V) + Dr(L, n))
                                            )) <= e
                                          ) &
                                          (e < a)
                                        )
                                          break t;
                                        a = e;
                                      }
                                      N[(L + 308) >> 2] = a;
                                    }
                                    u[(L + 304) >> 2] = p;
                                  } else
                                    (u[(O + 308) >> 2] = 0),
                                      (u[(O + 304) >> 2] = p),
                                      (a = w(0));
                                  E = w(
                                    E + w(a + w(Sr(L, _, V) + Mr(L, _, V)))
                                  );
                                }
                                if ((0 | ir) == (0 | (Z = (Z + 4) | 0))) break;
                              }
                              break e;
                            }
                            (u[y >> 2] = 2963), Or(r, y), Qe(), k();
                          }
                          (u[(y + 16) >> 2] = 3045),
                            Or(r, (y + 16) | 0),
                            Qe(),
                            k();
                        }
                        E = w(0);
                      }
                      (e = w(E + w(0))),
                        (gr = q ? c : o),
                        (vr = q ? o : c),
                        j >>> 0 >= 5 &&
                          (e = w(w(pr(r, _, S) * w((er - 1) >>> 0)) + e)),
                        (n = e > F),
                        (ir = 786432 & wr),
                        (ur = 2 == (0 | H) && ir && n ? 1 : H),
                        (qr = (fr = 1 == (0 | (L = q ? t : i))) & (1 ^ A)),
                        (q = _ >>> 0 < 2),
                        ($r = -3 & L),
                        (hr = (r + 208) | 0),
                        (Y = ((t = m << 2) + 4160) | 0),
                        (re = fr & !ir),
                        (ee = (1 != (0 | L)) | A),
                        ($ = ((Z = _ << 2) + 4160) | 0),
                        (dr = (Z + 4192) | 0),
                        (ae = (rr = S == S) << 1),
                        (D = (t + 4192) | 0),
                        (ne = !H | !n),
                        (wr = (y + 52) | 0),
                        (Qr = pr(r, m, S)),
                        (W = 0),
                        (n = 0),
                        (z = 0);
                      e: {
                        for (;;) {
                          if (
                            ((P = n),
                            Gr((y + 24) | 0, 0, 44),
                            (0 | (n = u[(r + 560) >> 2])) !=
                              (0 | (t = u[(r + 556) >> 2])))
                          ) {
                            if ((0 | (n = (n - t) | 0)) < 0) break e;
                            (Z = pe((y + 360) | 0, n >> 2, 0, wr)),
                              (n = u[(y + 44) >> 2]),
                              (t = (u[(y + 48) >> 2] - n) | 0),
                              (t = yr((u[(y + 364) >> 2] - t) | 0, n, t)),
                              (n = u[(y + 44) >> 2]),
                              (u[(y + 364) >> 2] = n),
                              (u[(y + 44) >> 2] = t),
                              (R = u[(y + 368) >> 2]),
                              (O = u[(y + 372) >> 2]),
                              (t = u[(y + 48) >> 2]),
                              (u[(y + 368) >> 2] = t),
                              (H = u[(y + 52) >> 2]),
                              (u[(y + 48) >> 2] = R),
                              (u[(y + 52) >> 2] = O),
                              (u[(y + 372) >> 2] = H),
                              (u[Z >> 2] = n),
                              (0 | n) != (0 | t) &&
                                (u[(y + 368) >> 2] =
                                  t + ((3 + ((n - t) | 0)) & -4)),
                              n && Zr(n);
                          }
                          t = ((O = u[(r + 24) >> 2]) >>> 2) & 3;
                          a: {
                            n: if (2 == (0 | ((n = 3 & O) || Ur))) {
                              n = 3;
                              i: switch ((t - 2) | 0) {
                                case 0:
                                  break a;
                                case 1:
                                  break i;
                                default:
                                  break n;
                              }
                              n = 2;
                              break a;
                            }
                            n = t;
                          }
                          E = pr(r, n, V);
                          a: if (
                            !(
                              (Z = W) >>> 0 >=
                              (((R = u[(r + 560) >> 2]) -
                                (t = u[(r + 556) >> 2])) >>
                                2) >>>
                                0
                            )
                          )
                            for (H = 786432 & O, a = w(0); ; ) {
                              if (((R - t) >> 2) >>> 0 <= Z >>> 0) break e;
                              if (
                                ((O = u[((Z << 2) + t) >> 2]),
                                !(
                                  (4194304 & (j = u[(O + 24) >> 2])) |
                                  (131072 == (196608 & j))
                                ))
                              ) {
                                if (
                                  ((u[(O + 548) >> 2] = P),
                                  (e = Sr(O, n, V)),
                                  (G = Mr(O, n, V)),
                                  (t = u[(y + 24) >> 2]),
                                  (T = (0 | Z) == (0 | W) ? w(0) : E),
                                  (e = w(e + G)),
                                  (I = cr(O, n, (G = N[(O + 308) >> 2]), vr)),
                                  t && !(!(w(T + w(e + w(a + I))) > F) | !H))
                                )
                                  break a;
                                if (
                                  ((u[(y + 24) >> 2] = t + 1),
                                  (T = w(T + w(e + I))),
                                  (N[(y + 28) >> 2] = T + N[(y + 28) >> 2]),
                                  xr(O))
                                ) {
                                  n: if (u[(O + 552) >> 2]) {
                                    if (
                                      ((e = N[(O + 32) >> 2]) != e &&
                                        (e =
                                          (e = N[(O + 28) >> 2]) > w(0)
                                            ? e
                                            : w(0)),
                                      (N[(y + 32) >> 2] = e + N[(y + 32) >> 2]),
                                      (e = N[(O + 36) >> 2]) == e)
                                    )
                                      break n;
                                    if (f[(O + 4) | 0] < 0) {
                                      e = w(1);
                                      break n;
                                    }
                                    if (
                                      ((e = w(0)),
                                      !((I = N[(O + 28) >> 2]) < w(0)))
                                    )
                                      break n;
                                    e = w(-I);
                                  } else
                                    (e = w(0)),
                                      (N[(y + 32) >> 2] =
                                        N[(y + 32) >> 2] + w(0));
                                  N[(y + 36) >> 2] =
                                    N[(y + 36) >> 2] - w(e * G);
                                }
                                if (
                                  (0 | (t = u[(y + 48) >> 2])) ==
                                  u[(y + 52) >> 2]
                                ) {
                                  if (
                                    (R =
                                      ((j =
                                        (t = (t - u[(y + 44) >> 2]) | 0) >> 2) +
                                        1) |
                                      0) >>>
                                      0 >=
                                    1073741824
                                  )
                                    break e;
                                  (Q = (t >>> 1) | 0),
                                    (j = pe(
                                      (y + 360) | 0,
                                      t >>> 0 >= 2147483644
                                        ? 1073741823
                                        : R >>> 0 < Q >>> 0
                                        ? Q
                                        : R,
                                      j,
                                      wr
                                    )),
                                    (u[u[(y + 368) >> 2] >> 2] = O),
                                    (u[(y + 368) >> 2] = u[(y + 368) >> 2] + 4),
                                    (t = u[(y + 44) >> 2]),
                                    (R = (u[(y + 48) >> 2] - t) | 0),
                                    (R = yr((u[(y + 364) >> 2] - R) | 0, t, R)),
                                    (t = u[(y + 44) >> 2]),
                                    (u[(y + 364) >> 2] = t),
                                    (u[(y + 44) >> 2] = R),
                                    (O = u[(y + 368) >> 2]),
                                    (Q = u[(y + 372) >> 2]),
                                    (R = u[(y + 48) >> 2]),
                                    (u[(y + 368) >> 2] = R),
                                    (tr = u[(y + 52) >> 2]),
                                    (u[(y + 48) >> 2] = O),
                                    (u[(y + 52) >> 2] = Q),
                                    (u[(y + 372) >> 2] = tr),
                                    (u[j >> 2] = t),
                                    (0 | t) != (0 | R) &&
                                      (u[(y + 368) >> 2] =
                                        R + ((3 + ((t - R) | 0)) & -4)),
                                    t && Zr(t);
                                } else
                                  (u[t >> 2] = O), (u[(y + 48) >> 2] = t + 4);
                                (t = u[(r + 556) >> 2]),
                                  (R = u[(r + 560) >> 2]),
                                  (a = w(a + T));
                              }
                              if (
                                !(
                                  (Z = (Z + 1) | 0) >>> 0 <
                                  ((R - t) >> 2) >>> 0
                                )
                              )
                                break;
                            }
                          !((C = N[(y + 32) >> 2]) > w(0)) | !(C < w(1)) ||
                            ((u[(y + 32) >> 2] = 1065353216), (C = w(1))),
                            !((x = N[(y + 36) >> 2]) > w(0)) | !(x < w(1)) ||
                              ((u[(y + 36) >> 2] = 1065353216), (x = w(1))),
                            (u[(y + 40) >> 2] = Z),
                            (X = N[(y + 28) >> 2]),
                            (H = u[(y + 24) >> 2]),
                            z && Zr(z),
                            (T = N[(y + 56) >> 2]),
                            (j = u[(y + 48) >> 2]),
                            (z = u[(y + 44) >> 2]);
                          a: {
                            n: {
                              i: {
                                if (1 != (0 | ur)) {
                                  (a = w(0)), (e = N[hr >> 2]);
                                  t: {
                                    f: {
                                      o: if (
                                        2139156720 !=
                                        (0 | (n = u[hr >> 2]))
                                      ) {
                                        if (2140081935 == (0 | n)) break f;
                                        t = 4216;
                                        u: {
                                          if (2141891242 != (0 | n)) {
                                            if (e == e) break u;
                                            t = 4208;
                                          }
                                          switch (
                                            ((a = N[t >> 2]),
                                            (e = w(NaN)),
                                            (u[(t + 4) >> 2] - 1) | 0)
                                          ) {
                                            case 0:
                                              break f;
                                            case 1:
                                              break o;
                                            default:
                                              break t;
                                          }
                                        }
                                        if (
                                          (b(
                                            2,
                                            (536870912 + (-1073741825 & n)) | 0
                                          ),
                                          (a = d()),
                                          !(1073741824 & n))
                                        )
                                          break f;
                                      }
                                      e = w(w(a * o) * w(0.009999999776482582));
                                      break t;
                                    }
                                    e = a;
                                  }
                                  (a = w(0)), (E = N[(r + 216) >> 2]);
                                  t: {
                                    f: {
                                      o: if (
                                        2139156720 !=
                                        (0 | (n = u[(r + 216) >> 2]))
                                      ) {
                                        if (2140081935 == (0 | n)) break f;
                                        t = 4216;
                                        u: {
                                          if (2141891242 != (0 | n)) {
                                            if (E == E) break u;
                                            t = 4208;
                                          }
                                          switch (
                                            ((a = N[t >> 2]),
                                            (E = w(NaN)),
                                            (u[(t + 4) >> 2] - 1) | 0)
                                          ) {
                                            case 0:
                                              break f;
                                            case 1:
                                              break o;
                                            default:
                                              break t;
                                          }
                                        }
                                        if (
                                          (b(
                                            2,
                                            (536870912 + (-1073741825 & n)) | 0
                                          ),
                                          (a = d()),
                                          !(1073741824 & n))
                                        )
                                          break f;
                                      }
                                      E = w(w(a * o) * w(0.009999999776482582));
                                      break t;
                                    }
                                    E = a;
                                  }
                                  (a = w(0)), (G = N[(r + 212) >> 2]);
                                  t: {
                                    f: {
                                      o: if (
                                        2139156720 !=
                                        (0 | (n = u[(r + 212) >> 2]))
                                      ) {
                                        if (2140081935 == (0 | n)) break f;
                                        t = 4216;
                                        u: {
                                          if (2141891242 != (0 | n)) {
                                            if (G == G) break u;
                                            t = 4208;
                                          }
                                          switch (
                                            ((a = N[t >> 2]),
                                            (I = w(NaN)),
                                            (u[(t + 4) >> 2] - 1) | 0)
                                          ) {
                                            case 0:
                                              break f;
                                            case 1:
                                              break o;
                                            default:
                                              break t;
                                          }
                                        }
                                        if (
                                          (b(
                                            2,
                                            (536870912 + (-1073741825 & n)) | 0
                                          ),
                                          (a = d()),
                                          !(1073741824 & n))
                                        )
                                          break f;
                                      }
                                      I = w(w(a * c) * w(0.009999999776482582));
                                      break t;
                                    }
                                    I = a;
                                  }
                                  (a = w(0)), (G = N[(r + 220) >> 2]);
                                  t: {
                                    f: {
                                      o: if (
                                        2139156720 !=
                                        (0 | (n = u[(r + 220) >> 2]))
                                      ) {
                                        if (2140081935 == (0 | n)) break f;
                                        t = 4216;
                                        u: {
                                          if (2141891242 != (0 | n)) {
                                            if (G == G) break u;
                                            t = 4208;
                                          }
                                          switch (
                                            ((a = N[t >> 2]),
                                            (G = w(NaN)),
                                            (u[(t + 4) >> 2] - 1) | 0)
                                          ) {
                                            case 0:
                                              break f;
                                            case 1:
                                              break o;
                                            default:
                                              break t;
                                          }
                                        }
                                        if (
                                          (b(
                                            2,
                                            (536870912 + (-1073741825 & n)) | 0
                                          ),
                                          (a = d()),
                                          !(1073741824 & n))
                                        )
                                          break f;
                                      }
                                      G = w(w(a * c) * w(0.009999999776482582));
                                      break t;
                                    }
                                    G = a;
                                  }
                                  if (
                                    ((a = w(
                                      ((n = _ >>> 0 > 1) ? e : I) - nr
                                    )) ==
                                      a) &
                                      (a > X) ||
                                    ((a = w((n ? E : G) - nr)) == a) & (a < X)
                                  )
                                    break i;
                                  if (!h[(u[(r + 568) >> 2] + 11) | 0]) {
                                    if (
                                      ((a = X),
                                      !u[(r + 552) >> 2] | (C == w(0)))
                                    )
                                      break n;
                                    t: {
                                      if ((e = N[(r + 32) >> 2]) != e) {
                                        if (!((a = N[(r + 28) >> 2]) > w(0)))
                                          break t;
                                      } else a = e;
                                      if (a != a) {
                                        a = F;
                                        break n;
                                      }
                                      e = N[(r + 32) >> 2];
                                    }
                                    if (
                                      (e != e &&
                                        ((a = X),
                                        !((e = N[(r + 28) >> 2]) > w(0)))) ||
                                      ((a = F), e != w(0))
                                    )
                                      break n;
                                    a = X;
                                    break n;
                                  }
                                }
                                a = F;
                              }
                              if (a == a) {
                                T = w(a - X);
                                break a;
                              }
                            }
                            X < w(0) && (T = w(-X));
                          }
                          if (((F = a), !qr)) {
                            if ((0 | z) != (0 | j)) {
                              for (G = w(0), t = z; ; ) {
                                a = cr(
                                  (n = u[t >> 2]),
                                  _,
                                  (X = N[(n + 308) >> 2]),
                                  vr
                                );
                                a: if (T < w(0)) {
                                  if (
                                    ((O = u[(n + 552) >> 2])
                                      ? (E = N[(n + 36) >> 2]) != E &&
                                        (f[(n + 4) | 0] < 0
                                          ? (E = w(1))
                                          : ((E = w(0)),
                                            (e = N[(n + 28) >> 2]) < w(0) &&
                                              (E = w(-e))))
                                      : (E = w(0)),
                                    !(((e = w(a * w(-E))) > w(0)) | (e < w(0))))
                                  )
                                    break a;
                                  if (
                                    ((E = w(w(w(T / x) * e) + a)) != E) |
                                    ((e =
                                      (R = (e = cr(n, _, E, F)) != e) |
                                      ((I = w(
                                        w(Tr(n, _, V) + jr(n, _)) +
                                          w(Ir(n, _, V) + Dr(n, _))
                                      )) !=
                                        I)
                                        ? R
                                          ? I
                                          : e
                                        : Ge(e, I)) !=
                                      e) |
                                    (e == E)
                                  )
                                    break a;
                                  (e = w(e - a)),
                                    O
                                      ? (a = N[(n + 36) >> 2]) != a &&
                                        (f[(n + 4) | 0] < 0
                                          ? (a = w(1))
                                          : ((a = w(0)),
                                            (E = N[(n + 28) >> 2]) < w(0) &&
                                              (a = w(-E))))
                                      : (a = w(0)),
                                    (G = w(G + e)),
                                    (x = w(w(a * X) + x));
                                } else
                                  !(!(T > w(0)) | !u[(n + 552) >> 2]) &&
                                    ((E = N[(n + 32) >> 2]) == E ||
                                      (E = N[(n + 28) >> 2]) > w(0)) &&
                                    (E < w(0)) | (E > w(0)) &&
                                    (((I = w(w(w(T / C) * E) + a)) != I) |
                                      ((e =
                                        (R = (e = cr(n, _, I, F)) != e) |
                                        ((X = w(
                                          w(Tr(n, _, V) + jr(n, _)) +
                                            w(Ir(n, _, V) + Dr(n, _))
                                        )) !=
                                          X)
                                          ? R
                                            ? X
                                            : e
                                          : Ge(e, X)) !=
                                        e) |
                                      (e == I) ||
                                      ((C = w(C - E)), (G = w(G + w(e - a)))));
                                if ((0 | j) == (0 | (t = (t + 4) | 0))) break;
                              }
                              for (
                                X = w(T - G),
                                  Er = w(X / x),
                                  Rr = w(X / C),
                                  Cr = !(Q =
                                    fr & (!(12 & h[(r + 26) | 0]) | ne)),
                                  tr = u[D >> 2],
                                  I = w(0),
                                  R = z;
                                ;

                              ) {
                                a = cr(
                                  (t = u[R >> 2]),
                                  _,
                                  N[(t + 308) >> 2],
                                  vr
                                );
                                a: {
                                  if (X < w(0)) {
                                    if (
                                      (u[(t + 552) >> 2]
                                        ? (e = N[(t + 36) >> 2]) != e &&
                                          (f[(t + 4) | 0] < 0
                                            ? (e = w(1))
                                            : ((e = w(0)),
                                              (E = N[(t + 28) >> 2]) < w(0) &&
                                                (e = w(-E))))
                                        : (e = w(0)),
                                      (E = a),
                                      (e = w(a * w(-e))) == w(0))
                                    )
                                      break a;
                                    e = x == w(0) ? w(a + e) : w(w(Er * e) + a);
                                  } else {
                                    if (
                                      ((E = a),
                                      !(X > w(0)) | !u[(t + 552) >> 2] ||
                                        ((e = N[(t + 32) >> 2]) != e &&
                                          !((e = N[(t + 28) >> 2]) > w(0))) ||
                                        !((e < w(0)) | (e > w(0))))
                                    )
                                      break a;
                                    e = w(w(Rr * e) + a);
                                  }
                                  (n = (e = cr(t, _, e, F)) != e) |
                                  ((E = w(
                                    w(Tr(t, _, V) + jr(t, _)) +
                                      w(Ir(t, _, V) + Dr(t, _))
                                  )) !=
                                    E)
                                    ? (E = n ? E : e)
                                    : (E = Ge(e, E));
                                }
                                if (
                                  ((e = Sr(t, _, V)),
                                  (G = Mr(t, _, V)),
                                  (C = Sr(t, m, V)),
                                  (Pr = Mr(t, m, V)),
                                  (G = w(e + G)),
                                  (zr = w(E + G)),
                                  (N[(y + 352) >> 2] = zr),
                                  (u[(y + 344) >> 2] = 1),
                                  (C = w(C + Pr)),
                                  (e = N[(t + 224) >> 2]) != e)
                                ) {
                                  e = N[((O = (t + (tr << 3)) | 0) + 572) >> 2];
                                  a: {
                                    n: {
                                      i: {
                                        t: {
                                          f: {
                                            o: {
                                              u: {
                                                c: {
                                                  if (rr) {
                                                    G = N[(O + 572) >> 2];
                                                    b: {
                                                      A: {
                                                        s: {
                                                          k: switch (
                                                            ((n =
                                                              u[
                                                                (O + 576) >> 2
                                                              ]),
                                                            0 | n)
                                                          ) {
                                                            case 0:
                                                            case 3:
                                                              break s;
                                                          }
                                                          if (
                                                            !(
                                                              (1 != (0 | n)) |
                                                              (e != e)
                                                            )
                                                          ) {
                                                            if (
                                                              !(Q & (G < w(0)))
                                                            )
                                                              break b;
                                                            break A;
                                                          }
                                                          if (
                                                            !(
                                                              Cr |
                                                              !(G < w(0)) |
                                                              (2 != (0 | n)) |
                                                              (e != e)
                                                            )
                                                          )
                                                            break A;
                                                          break b;
                                                        }
                                                        if (!Q) break b;
                                                      }
                                                      if (
                                                        ((O =
                                                          (u[(t + 24) >> 2] >>>
                                                            13) &
                                                          7) ||
                                                          (O =
                                                            (u[
                                                              (r + 24) >> 2
                                                            ] >>>
                                                              10) &
                                                            7),
                                                        4 == (0 | O) &&
                                                          (he(
                                                            (y + 24) | 0,
                                                            t,
                                                            m
                                                          ),
                                                          3 !=
                                                            u[
                                                              (y + 28) >> 2
                                                            ])) &&
                                                        (de(
                                                          (y + 360) | 0,
                                                          t,
                                                          m
                                                        ),
                                                        3 != u[(y + 364) >> 2])
                                                      )
                                                        break c;
                                                    }
                                                    e = G;
                                                  } else
                                                    (G = N[(O + 572) >> 2]),
                                                      (n = u[(O + 576) >> 2]);
                                                  switch (0 | n) {
                                                    case 0:
                                                    case 3:
                                                      break o;
                                                    default:
                                                      break u;
                                                  }
                                                }
                                                u[(y + 348) >> 2] = 1;
                                                break n;
                                              }
                                              if (
                                                !((1 != (0 | n)) | (e != e))
                                              ) {
                                                if ((e = G) < w(0)) break o;
                                                break i;
                                              }
                                              if ((2 != (0 | n)) | (e != e))
                                                break f;
                                              if (S == S && !(G < w(0)))
                                                break t;
                                            }
                                            u[(y + 348) >> 2] = ae;
                                            break n;
                                          }
                                          e = w(NaN);
                                          f: switch ((n - 1) | 0) {
                                            case 1:
                                              break t;
                                            case 0:
                                              break f;
                                            default:
                                              break i;
                                          }
                                          e = G;
                                          break i;
                                        }
                                        e = w(
                                          w(S * G) * w(0.009999999776482582)
                                        );
                                      }
                                      (e = w(C + e)),
                                        (N[(y + 356) >> 2] = e),
                                        (u[(y + 348) >> 2] =
                                          (fr | (2 != (0 | n))) & (e == e));
                                      break a;
                                    }
                                    N[(y + 356) >> 2] = S;
                                  }
                                  e = G;
                                } else
                                  (u[(y + 348) >> 2] = 1),
                                    (G = w(zr - G)),
                                    (N[(y + 356) >> 2] =
                                      C + w(q ? G * e : G / e)),
                                    (G =
                                      N[
                                        ((O = (t + (tr << 3)) | 0) + 572) >> 2
                                      ]),
                                    (n = u[(O + 576) >> 2]),
                                    (e = N[(O + 572) >> 2]);
                                Vr(t, _, F, V, (y + 344) | 0, (y + 352) | 0),
                                  Vr(t, m, S, V, (y + 348) | 0, (y + 356) | 0);
                                a: {
                                  n: {
                                    i: {
                                      t: switch (0 | n) {
                                        case 0:
                                        case 3:
                                          break i;
                                      }
                                      if (!((1 != (0 | n)) | (e != e))) {
                                        if (G < w(0)) break i;
                                        break n;
                                      }
                                      if ((2 != (0 | n)) | (e != e)) break n;
                                      if (!(G < w(0)) && ((O = 0), rr)) break a;
                                    }
                                    if (
                                      ((O = 0),
                                      (n = (u[(t + 24) >> 2] >>> 13) & 7) ||
                                        (n = (u[(r + 24) >> 2] >>> 10) & 7),
                                      4 != (0 | n) ||
                                        (he((y + 24) | 0, t, m),
                                        3 == u[(y + 28) >> 2]))
                                    )
                                      break a;
                                    de((y + 360) | 0, t, m),
                                      (O = 3 != u[(y + 364) >> 2]);
                                    break a;
                                  }
                                  O = 0;
                                }
                                (e = N[(y + 352) >> 2]),
                                  (G = N[(y + 356) >> 2]),
                                  (C = (n = _ >>> 0 > 1) ? e : G),
                                  (e = n ? G : e),
                                  (Xr = u[(y + 344) >> 2]),
                                  (Jr = u[(y + 348) >> 2]),
                                  (ie = n ? Xr : Jr),
                                  (Xr = n ? Jr : Xr),
                                  (n = (1 ^ O) & A),
                                  or(
                                    t,
                                    C,
                                    e,
                                    3 & h[(r + 300) | 0],
                                    ie,
                                    Xr,
                                    V,
                                    M,
                                    n,
                                    n ? 4 : 7,
                                    s,
                                    l,
                                    v,
                                    p
                                  ),
                                  (I = w(I + w(E - a)));
                                a: {
                                  if (4 & (n = h[(r + 300) | 0])) O = 251 & n;
                                  else if (
                                    ((O = 251 & n),
                                    (n = 0),
                                    !(4 & h[(t + 300) | 0]))
                                  )
                                    break a;
                                  n = 4;
                                }
                                if (
                                  ((f[(r + 300) | 0] = n | O),
                                  (0 | j) == (0 | (R = (R + 4) | 0)))
                                )
                                  break;
                              }
                            } else I = w(0);
                            T = w(T - I);
                          }
                          (n = h[(r + 300) | 0]),
                            (f[(r + 300) | 0] =
                              (251 & n) | (T < w(0) ? 4 : 4 & n)),
                            (G = w(Tr(r, _, o) + jr(r, _))),
                            (Er = w(Ir(r, _, o) + Dr(r, _))),
                            (X = pr(r, _, o));
                          a: if (!(T > w(0)) | (2 != (0 | ur))) I = T;
                          else {
                            (I = w(0)), (a = w(0));
                            n: {
                              i: {
                                (n = (hr + (u[dr >> 2] << 2)) | 0),
                                  (e = N[n >> 2]);
                                t: {
                                  if (
                                    !(t = 2139156720 == (0 | (n = u[n >> 2])))
                                  ) {
                                    if ((R = 2140081935 == (0 | n))) break i;
                                    if ((O = 2141891242 == (0 | n)) | (e != e))
                                      break a;
                                    if (R) break i;
                                    if (O) break a;
                                    if (
                                      (b(
                                        2,
                                        (536870912 + (-1073741825 & n)) | 0
                                      ),
                                      (a = d()),
                                      !(1073741824 & n))
                                    )
                                      break t;
                                  }
                                  a = w(w(vr * a) * w(0.009999999776482582));
                                }
                                if (a != a) break a;
                                a = w(0);
                                t: if (!t) {
                                  if (2140081935 == (0 | n)) break i;
                                  t = 4216;
                                  f: {
                                    if (2141891242 != (0 | n)) {
                                      if (e == e) break f;
                                      t = 4208;
                                    }
                                    switch (
                                      ((a = N[t >> 2]),
                                      (E = w(NaN)),
                                      (u[(t + 4) >> 2] - 1) | 0)
                                    ) {
                                      case 0:
                                        break i;
                                      case 1:
                                        break t;
                                      default:
                                        break n;
                                    }
                                  }
                                  if (
                                    (b(2, (536870912 + (-1073741825 & n)) | 0),
                                    (a = d()),
                                    !(1073741824 & n))
                                  )
                                    break i;
                                }
                                E = w(w(vr * a) * w(0.009999999776482582));
                                break n;
                              }
                              E = a;
                            }
                            if ((e = w(w(w(E - G) - Er) - w(F - T))) != e)
                              break a;
                            I = Ge(e, w(0));
                          }
                          a: {
                            if (!(O = Z >>> 0 <= W >>> 0)) {
                              for (
                                j = u[(r + 556) >> 2],
                                  Q =
                                    (n = (u[(r + 560) >> 2] - j) >> 2) >>> 0 <
                                    W >>> 0
                                      ? W
                                      : n,
                                  R = 0,
                                  n = W;
                                ;

                              ) {
                                if ((0 | n) == (0 | Q)) break e;
                                if (
                                  ((t = u[(j + (n << 2)) >> 2]),
                                  131072 != (196608 & u[(t + 24) >> 2]) &&
                                    (he((tr = (y + 24) | 0), t, _),
                                    (Cr = u[(y + 28) >> 2]),
                                    de(tr, t, _),
                                    (R =
                                      ((((3 == (0 | Cr)) + R) | 0) +
                                        (3 == u[(y + 28) >> 2])) |
                                      0)),
                                  (0 | Z) == (0 | (n = (n + 1) | 0)))
                                )
                                  break;
                              }
                              if (((C = w(0)), (a = X), R)) break a;
                            }
                            (C = w(0)), (R = 0), (a = X);
                            n: switch (
                              (((u[(r + 24) >> 2] >>> 4) & 7) - 1) |
                              0
                            ) {
                              case 0:
                                C = w(I * w(0.5));
                                break a;
                              case 1:
                                C = I;
                                break a;
                              case 2:
                                if (H >>> 0 < 2) break a;
                                a = w(
                                  X +
                                    w(
                                      ((fe = w(0)),
                                      (oe = Ge(I, w(0))),
                                      ((te = I != I) ? fe : oe) /
                                        w((H - 1) >>> 0))
                                    )
                                );
                                break a;
                              case 4:
                                (C = w(I / w((H + 1) >>> 0))), (a = w(X + C));
                                break a;
                              case 3:
                                break n;
                              default:
                                break a;
                            }
                            (C = w(w(I * w(0.5)) / w(H >>> 0))),
                              (a = w(w(C + C) + X));
                          }
                          if (((e = w(G + C)), (T = w(0)), (H = Kr(r)), O))
                            a = w(0);
                          else {
                            for (
                              j = (Z - 1) | 0,
                                Rr = w(I / w(0 | R)),
                                G = w(0),
                                E = w(0),
                                n = W;
                              ;

                            ) {
                              if (
                                ((t = u[(r + 556) >> 2]),
                                ((u[(r + 560) >> 2] - t) >> 2) >>> 0 <= n >>> 0)
                              )
                                break e;
                              sr(
                                (y + 24) | 0,
                                (R = ((t = u[(t + (n << 2)) >> 2]) + 228) | 0),
                                320
                              ),
                                (a = w(a - ((0 | n) == (0 | j) ? X : w(0))));
                              a: if (!(4194304 & (Q = u[(t + 24) >> 2]))) {
                                n: {
                                  if (131072 == (196608 & Q)) {
                                    if (!Ae(t, _)) break n;
                                    if (!A) break a;
                                    (I = Lr(t, _, F)),
                                      (x = jr(r, _)),
                                      (Pr = Sr(t, _, V)),
                                      (N[(R + (u[$ >> 2] << 2)) >> 2] =
                                        Pr + w(I + x));
                                    break a;
                                  }
                                  if (
                                    (he((y + 360) | 0, t, _),
                                    (e = w(
                                      e + (3 == u[(y + 364) >> 2] ? Rr : w(-0))
                                    )),
                                    A &&
                                      ((Q = R),
                                      (R = u[$ >> 2] << 2),
                                      (N[(Q + R) >> 2] =
                                        e + N[(R + ((y + 24) | 0)) >> 2])),
                                    de((y + 360) | 0, t, _),
                                    (e = w(
                                      e + (3 == u[(y + 364) >> 2] ? Rr : w(-0))
                                    )),
                                    !ee)
                                  ) {
                                    (e = w(
                                      e +
                                        w(
                                          w(a + w(Sr(t, _, V) + Mr(t, _, V))) +
                                            N[(y + 104) >> 2]
                                        )
                                    )),
                                      (T = S);
                                    break a;
                                  }
                                  if (
                                    ((e = w(
                                      e +
                                        w(
                                          a +
                                            w(
                                              N[
                                                ((R = (t + 516) | 0) +
                                                  (u[dr >> 2] << 2)) >>
                                                  2
                                              ] + w(Sr(t, _, V) + Mr(t, _, V))
                                            )
                                        )
                                    )),
                                    H)
                                  ) {
                                    if (
                                      ((I = Wr(t)),
                                      (x = Sr(t, 0, V)),
                                      (I = w(I + x)),
                                      (x = w(
                                        w(
                                          N[(t + 520) >> 2] +
                                            w(Sr(t, 0, V) + Mr(t, 0, V))
                                        ) - I
                                      )),
                                      (G =
                                        (t = G != G) | (I != I)
                                          ? t
                                            ? I
                                            : G
                                          : Ge(G, I)),
                                      !((t = E != E) | (x != x)))
                                    ) {
                                      E = Ge(E, x);
                                      break a;
                                    }
                                    E = t ? x : E;
                                    break a;
                                  }
                                  if (
                                    !(
                                      ((I = w(
                                        N[(R + (u[D >> 2] << 2)) >> 2] +
                                          w(Sr(t, m, V) + Mr(t, m, V))
                                      )) !=
                                        I) |
                                      (t = T != T)
                                    )
                                  ) {
                                    T = Ge(T, I);
                                    break a;
                                  }
                                  T = t ? I : T;
                                  break a;
                                }
                                A &&
                                  ((t = u[$ >> 2] << 2),
                                  (I = N[(t + ((y + 24) | 0)) >> 2]),
                                  (te = (t + R) | 0),
                                  (fe = w(C + w(I + jr(r, _)))),
                                  (N[te >> 2] = fe));
                              }
                              if ((0 | Z) == (0 | (n = (n + 1) | 0))) break;
                            }
                            a = w(E + G);
                          }
                          if (
                            ((G = H ? a : T),
                            (I = S),
                            $r ||
                              ((a =
                                (n = (a = cr(r, m, w(K + G), gr)) != a) |
                                ((E = w(
                                  w(Tr(r, m, o) + jr(r, m)) +
                                    w(Ir(r, m, o) + Dr(r, m))
                                )) !=
                                  E)
                                  ? n
                                    ? E
                                    : a
                                  : Ge(a, E)),
                              (I = w(a - K))),
                            (a =
                              (n =
                                (a = cr(r, m, w(K + (re ? S : G)), gr)) != a) |
                              ((E = w(
                                w(Tr(r, m, o) + jr(r, m)) +
                                  w(Ir(r, m, o) + Dr(r, m))
                              )) !=
                                E)
                                ? n
                                  ? E
                                  : a
                                : Ge(a, E)),
                            (E = w(a - K)),
                            !(O | !A))
                          )
                            for (;;) {
                              if (
                                ((n = u[(r + 556) >> 2]),
                                ((u[(r + 560) >> 2] - n) >> 2) >>> 0 <= W >>> 0)
                              )
                                break e;
                              n = u[(n + (W << 2)) >> 2];
                              a: if (!(4194304 & (t = u[(n + 24) >> 2])))
                                if (131072 != (196608 & t)) {
                                  (t = (t >>> 13) & 7) ||
                                    (t = (u[(r + 24) >> 2] >>> 10) & 7);
                                  n: {
                                    i: {
                                      if (5 != (0 | t)) {
                                        if (
                                          4 == (0 | t) &&
                                          (he((y + 24) | 0, n, m),
                                          (t = 4),
                                          3 != u[(y + 28) >> 2])
                                        ) {
                                          if (
                                            (de((y + 360) | 0, n, m),
                                            (R = u[D >> 2]),
                                            3 == u[(y + 364) >> 2])
                                          )
                                            break i;
                                          G =
                                            N[
                                              ((R = (n + (R << 3)) | 0) +
                                                572) >>
                                                2
                                            ];
                                          t: {
                                            f: switch (
                                              ((t = u[(R + 576) >> 2]), 0 | t)
                                            ) {
                                              case 0:
                                              case 3:
                                                break t;
                                            }
                                            if (
                                              !(
                                                (1 != (0 | t)) |
                                                ((T = N[(R + 572) >> 2]) != T)
                                              )
                                            ) {
                                              if (((a = U), G < w(0))) break t;
                                              break n;
                                            }
                                            if (
                                              ((a = U),
                                              (rr & !(G < w(0))) |
                                                (2 != (0 | t)) |
                                                (T != T))
                                            )
                                              break n;
                                          }
                                          (G =
                                            N[
                                              (516 +
                                                ((n + (u[dr >> 2] << 2)) |
                                                  0)) >>
                                                2
                                            ]),
                                            (a =
                                              (a = N[(n + 224) >> 2]) == a
                                                ? w(
                                                    w(
                                                      Sr(n, m, V) + Mr(n, m, V)
                                                    ) + w(q ? G * a : G / a)
                                                  )
                                                : E),
                                            (N[(y + 360) >> 2] = a),
                                            (te = y),
                                            (fe = w(
                                              G + w(Sr(n, _, V) + Mr(n, _, V))
                                            )),
                                            (N[(te + 24) >> 2] = fe),
                                            (u[(y + 356) >> 2] = 1),
                                            (u[(y + 352) >> 2] = 1),
                                            Vr(
                                              n,
                                              _,
                                              F,
                                              V,
                                              (y + 356) | 0,
                                              (y + 24) | 0
                                            ),
                                            Vr(
                                              n,
                                              m,
                                              S,
                                              V,
                                              (y + 352) | 0,
                                              (y + 360) | 0
                                            ),
                                            (G = N[(y + 360) >> 2]),
                                            (T = N[(y + 24) >> 2]),
                                            (a = (t = _ >>> 0 > 1) ? G : T),
                                            or(
                                              n,
                                              (G = t ? T : G),
                                              a,
                                              J,
                                              !(
                                                ((t =
                                                  (0 != (0 | ir)) &
                                                  (512 !=
                                                    (896 & u[(r + 24) >> 2]))) &
                                                  q) |
                                                (G != G)
                                              ),
                                              (q | !t) & (a == a),
                                              V,
                                              M,
                                              1,
                                              2,
                                              s,
                                              l,
                                              v,
                                              p
                                            ),
                                            (a = U);
                                          break n;
                                        }
                                      } else t = 8 & u[(r + 24) >> 2] ? 5 : 1;
                                      R = u[D >> 2];
                                    }
                                    if (
                                      ((a =
                                        N[(516 + (((R << 2) + n) | 0)) >> 2]),
                                      (G = Sr(n, m, V)),
                                      (T = Mr(n, m, V)),
                                      he((y + 24) | 0, n, m),
                                      (G = w(I - w(a + w(G + T)))),
                                      3 != u[(y + 28) >> 2] ||
                                        (de((y + 360) | 0, n, m),
                                        3 != u[(y + 364) >> 2]))
                                    ) {
                                      if (
                                        (de((y + 24) | 0, n, m),
                                        (a = U),
                                        3 != u[(y + 28) >> 2])
                                      )
                                        if (
                                          (he((y + 24) | 0, n, m),
                                          3 != u[(y + 28) >> 2])
                                        ) {
                                          i: switch ((t - 1) | 0) {
                                            case 1:
                                              a = w(U + w(G * w(0.5)));
                                              break n;
                                            case 0:
                                              break n;
                                          }
                                          a = w(U + G);
                                        } else
                                          a = w(
                                            U +
                                              ((fe = w(0)),
                                              (oe = Ge(G, w(0))),
                                              (te = G != G) ? fe : oe)
                                          );
                                    } else
                                      (a = w(G * w(0.5))),
                                        (a = w(
                                          U +
                                            ((fe = w(0)),
                                            (oe = Ge(a, w(0))),
                                            (te = a != a) ? fe : oe)
                                        ));
                                  }
                                  (n = (n + (u[Y >> 2] << 2)) | 0),
                                    (N[(n + 228) >> 2] =
                                      a + w(br + N[(n + 228) >> 2]));
                                } else {
                                  if (
                                    ((t = u[Y >> 2]),
                                    Ae(n, m) &&
                                      ((a = w(
                                        w(Lr(n, m, S) + jr(r, m)) + Sr(n, m, V)
                                      )),
                                      (N[(228 + ((n + (t << 2)) | 0)) >> 2] =
                                        a),
                                      a == a))
                                  )
                                    break a;
                                  (te = (n + (t << 2)) | 0),
                                    (fe = w(jr(r, m) + Sr(n, m, V))),
                                    (N[(te + 228) >> 2] = fe);
                                }
                              if ((0 | (W = (W + 1) | 0)) == (0 | Z)) break;
                            }
                          if (
                            ((a = w((P ? Qr : w(0)) + E)),
                            (mr =
                              (n = mr != mr) | ((e = w(Er + e)) != e)
                                ? n
                                  ? e
                                  : mr
                                : Ge(mr, e)),
                            (br = w(br + a)),
                            (n = (P + 1) | 0),
                            (W = Z),
                            !(Z >>> 0 < er >>> 0))
                          )
                            break;
                        }
                        a: if (A && (ir || Kr(r))) {
                          G = w(0);
                          n: {
                            i: if (S == S) {
                              e = w(S - br);
                              t: switch (
                                (((u[(r + 24) >> 2] >>> 7) & 7) - 2) |
                                0
                              ) {
                                case 0:
                                  U = w(U + w(e * w(0.5)));
                                  break i;
                                case 2:
                                  if (!(S > br)) break i;
                                  G = w(e / w(n >>> 0));
                                  break i;
                                case 5:
                                  if (S > br) {
                                    if (
                                      ((U = w(U + w(e / w((n << 1) >>> 0)))),
                                      n >>> 0 < 2)
                                    )
                                      break i;
                                    G = w(e / w(n >>> 0));
                                    break n;
                                  }
                                  U = w(U + w(e * w(0.5)));
                                  break i;
                                case 4:
                                  if (!(S > br) | (n >>> 0 < 2)) break i;
                                  G = w(e / w(P >>> 0));
                                  break n;
                                case 1:
                                  break t;
                                default:
                                  break i;
                              }
                              U = w(U + e);
                            }
                            if (!n) break a;
                          }
                          for (R = 0, n = 0, t = 0; ; ) {
                            if (
                              ((T = w(0)),
                              (a = w(0)),
                              (e = w(0)),
                              (E = w(0)),
                              (Z = n),
                              n >>> 0 < er >>> 0)
                            ) {
                              n: {
                                for (;;) {
                                  if (
                                    ((t = u[(r + 556) >> 2]),
                                    ((u[(r + 560) >> 2] - t) >> 2) >>> 0 <=
                                      Z >>> 0)
                                  )
                                    break e;
                                  if (
                                    ((W = u[(t + (Z << 2)) >> 2]),
                                    !(
                                      (4194304 & (O = u[(W + 24) >> 2])) |
                                      (131072 == (196608 & O))
                                    ))
                                  ) {
                                    if (((t = Z), u[(W + 548) >> 2] != (0 | R)))
                                      break n;
                                    (e =
                                      N[
                                        (516 + ((W + (u[D >> 2] << 2)) | 0)) >>
                                          2
                                      ]) >= w(0) &&
                                      (a =
                                        (t = a != a) |
                                        ((e = w(
                                          e + w(Sr(W, m, V) + Mr(W, m, V))
                                        )) !=
                                          e)
                                          ? t
                                            ? e
                                            : a
                                          : Ge(a, e)),
                                      (t = (O >>> 13) & 7) ||
                                        (t = (u[(r + 24) >> 2] >>> 10) & 7),
                                      !(8 & h[(r + 24) | 0]) | (5 != (0 | t)) ||
                                        ((e = Wr(W)),
                                        (I = Sr(W, 0, V)),
                                        (e = w(e + I)),
                                        (I = w(
                                          w(
                                            N[(W + 520) >> 2] +
                                              w(Sr(W, 0, V) + Mr(W, 0, V))
                                          ) - e
                                        )),
                                        (t = a != a),
                                        (E =
                                          (W = E != E) | (e != e)
                                            ? W
                                              ? e
                                              : E
                                            : Ge(E, e)),
                                        (T =
                                          (W = T != T) | (I != I)
                                            ? W
                                              ? I
                                              : T
                                            : Ge(T, I)),
                                        (a =
                                          t | ((e = w(E + T)) != e)
                                            ? t
                                              ? e
                                              : a
                                            : Ge(a, e)));
                                  }
                                  if ((0 | er) == (0 | (Z = (Z + 1) | 0)))
                                    break;
                                }
                                t = er;
                              }
                              e = a;
                            }
                            if (
                              ((I = w(U + (R ? Qr : w(0)))),
                              (a = w(G + e)),
                              (U = w(I + a)),
                              n >>> 0 < t >>> 0)
                            )
                              for (X = w(I + E); ; ) {
                                if (
                                  ((Z = u[(r + 556) >> 2]),
                                  ((u[(r + 560) >> 2] - Z) >> 2) >>> 0 <=
                                    n >>> 0)
                                )
                                  break e;
                                W = u[(Z + (n << 2)) >> 2];
                                n: if (
                                  !(
                                    (4194304 & (Z = u[(W + 24) >> 2])) |
                                    (131072 == (196608 & Z))
                                  )
                                ) {
                                  (Z = (Z >>> 13) & 7) ||
                                    (Z = (u[(r + 24) >> 2] >>> 10) & 7);
                                  i: {
                                    t: switch ((Z - 1) | 0) {
                                      case 4:
                                        if (8 & h[(r + 24) | 0]) break i;
                                      case 0:
                                        (e = Sr(W, m, V)),
                                          (N[
                                            (228 +
                                              ((W + (u[Y >> 2] << 2)) | 0)) >>
                                              2
                                          ] = I + e);
                                        break n;
                                      case 2:
                                        (e = Mr(W, m, V)),
                                          (N[
                                            ((Z = (W + 228) | 0) +
                                              (u[Y >> 2] << 2)) >>
                                              2
                                          ] =
                                            w(U - e) -
                                            N[
                                              (288 +
                                                ((Z + (u[D >> 2] << 2)) | 0)) >>
                                                2
                                            ]);
                                        break n;
                                      case 1:
                                        N[
                                          ((Z = (W + 228) | 0) +
                                            (u[Y >> 2] << 2)) >>
                                            2
                                        ] =
                                          I +
                                          w(
                                            w(
                                              a -
                                                N[
                                                  (288 +
                                                    ((Z + (u[D >> 2] << 2)) |
                                                      0)) >>
                                                    2
                                                ]
                                            ) * w(0.5)
                                          );
                                        break n;
                                      case 3:
                                        break t;
                                      default:
                                        break n;
                                    }
                                    (e = Sr(W, m, V)),
                                      (N[
                                        (228 + ((W + (u[Y >> 2] << 2)) | 0)) >>
                                          2
                                      ] = I + e),
                                      (O = (W + (u[D >> 2] << 3)) | 0),
                                      (e = N[((Z = O) + 572) >> 2]);
                                    t: {
                                      f: switch (
                                        ((Z = u[(Z + 576) >> 2]), 0 | Z)
                                      ) {
                                        case 0:
                                        case 3:
                                          break t;
                                      }
                                      if (
                                        !(
                                          (1 != (0 | Z)) |
                                          ((E = N[(O + 572) >> 2]) != E)
                                        )
                                      ) {
                                        if (e < w(0)) break t;
                                        break n;
                                      }
                                      if (
                                        (rr & !(e < w(0))) |
                                        (2 != (0 | Z)) |
                                        (E != E)
                                      )
                                        break n;
                                    }
                                    _ >>> 0 >= 2
                                      ? ((T = a),
                                        (e = N[(W + 516) >> 2]),
                                        (E = w(
                                          e + w(Sr(W, _, V) + Mr(W, _, V))
                                        )))
                                      : ((T = w(
                                          N[(W + 520) >> 2] +
                                            w(Sr(W, m, V) + Mr(W, m, V))
                                        )),
                                        (e = N[(W + 516) >> 2]),
                                        (E = a));
                                    t: {
                                      f: {
                                        if (!((E != E) | (e != e))) {
                                          if (
                                            w(g(w(E - e))) <
                                            w(9999999747378752e-20)
                                          )
                                            break f;
                                          break t;
                                        }
                                        if ((E == E) | (e == e)) break t;
                                      }
                                      if (
                                        !(
                                          (Z = (e = N[(W + 520) >> 2]) != e) |
                                          (T != T)
                                        )
                                      ) {
                                        if (
                                          !(
                                            w(g(w(T - e))) <
                                            w(9999999747378752e-20)
                                          )
                                        )
                                          break t;
                                        break n;
                                      }
                                      if (T != T && Z) break n;
                                    }
                                    or(
                                      W,
                                      E,
                                      T,
                                      J,
                                      1,
                                      1,
                                      V,
                                      M,
                                      1,
                                      3,
                                      s,
                                      l,
                                      v,
                                      p
                                    );
                                    break n;
                                  }
                                  (te = W),
                                    (fe = w(w(X - Wr(W)) + Lr(W, 0, S))),
                                    (N[(te + 232) >> 2] = fe);
                                }
                                if ((0 | t) == (0 | (n = (n + 1) | 0))) break;
                              }
                            if (
                              ((Z = (0 | R) != (0 | P)),
                              (R = (R + 1) | 0),
                              (n = t),
                              !Z)
                            )
                              break;
                          }
                        }
                        (R = (r + 516) | 0),
                          (e =
                            (n = (e = cr(r, 2, Hr, o)) != e) |
                            ((a = w(
                              w(Tr(r, 2, o) + jr(r, 2)) +
                                w(Ir(r, 2, o) + Dr(r, 2))
                            )) !=
                              a)
                              ? n
                                ? a
                                : e
                              : Ge(e, a)),
                          (N[R >> 2] = e),
                          (e =
                            (n = (e = cr(r, 0, Yr, c)) != e) |
                            ((a = w(
                              w(Tr(r, 0, o) + jr(r, 0)) +
                                w(Ir(r, 0, o) + Dr(r, 0))
                            )) !=
                              a)
                              ? n
                                ? a
                                : e
                              : Ge(e, a)),
                          (N[(r + 520) >> 2] = e);
                        a: {
                          n: if (
                            ur &&
                            (2 == (0 | (n = (u[(r + 24) >> 2] >>> 20) & 3))) |
                              (2 != (0 | ur))
                          ) {
                            if ((2 != (0 | ur)) | (2 != (0 | n))) break a;
                            e =
                              (n =
                                (e =
                                  (n = (a = w(nr + F)) != a) |
                                  ((e = cr(r, _, mr, vr)) != e)
                                    ? n
                                      ? e
                                      : a
                                    : Ze(a, e)) != e) |
                              (nr != nr)
                                ? n
                                  ? nr
                                  : e
                                : Ge(e, nr);
                          } else {
                            if (
                              !(
                                (n = (e = cr(r, _, mr, vr)) != e) |
                                ((a = w(
                                  w(Tr(r, _, o) + jr(r, _)) +
                                    w(Ir(r, _, o) + Dr(r, _))
                                )) !=
                                  a)
                              )
                            ) {
                              e = Ge(e, a);
                              break n;
                            }
                            e = n ? a : e;
                          }
                          N[(R + (u[dr >> 2] << 2)) >> 2] = e;
                        }
                        a: {
                          n: if (
                            L &&
                            (t = 2 != (0 | L)) |
                              (2 == (0 | (n = (u[(r + 24) >> 2] >>> 20) & 3)))
                          ) {
                            if (t | (2 != (0 | n))) break a;
                            e =
                              (n =
                                (e =
                                  (n = (a = w(K + S)) != a) |
                                  ((e = cr(r, m, w(K + br), gr)) != e)
                                    ? n
                                      ? e
                                      : a
                                    : Ze(a, e)) != e) |
                              (K != K)
                                ? n
                                  ? K
                                  : e
                                : Ge(e, K);
                          } else {
                            if (
                              !(
                                (n = (e = cr(r, m, w(K + br), gr)) != e) |
                                ((a = w(
                                  w(Tr(r, m, o) + jr(r, m)) +
                                    w(Ir(r, m, o) + Dr(r, m))
                                )) !=
                                  a)
                              )
                            ) {
                              e = Ge(e, a);
                              break n;
                            }
                            e = n ? a : e;
                          }
                          N[(R + (u[D >> 2] << 2)) >> 2] = e;
                        }
                        if (A) {
                          if (
                            ((n = u[(r + 560) >> 2]),
                            (W = u[(r + 556) >> 2]),
                            524288 == (786432 & u[(r + 24) >> 2]))
                          ) {
                            for (
                              t = er >>> 0 <= 1 ? 1 : er,
                                A = (n - W) >> 2,
                                n = 0;
                              (Z = 0),
                                (Z =
                                  n >>> 0 < A >>> 0
                                    ? u[((n << 2) + W) >> 2]
                                    : Z),
                                131072 != (196608 & u[(Z + 24) >> 2]) &&
                                  ((O =
                                    ((Z = (Z + 228) | 0) + (u[Y >> 2] << 2)) |
                                    0),
                                  (P = u[D >> 2] << 2),
                                  (N[O >> 2] =
                                    w(N[(P + R) >> 2] - N[O >> 2]) -
                                    N[(288 + ((Z + P) | 0)) >> 2])),
                                (0 | t) != (0 | (n = (n + 1) | 0));

                            );
                            (W = u[(r + 556) >> 2]), (n = u[(r + 560) >> 2]);
                          }
                          if ((0 | n) != (0 | W))
                            for (P = 0 != (0 | (_ >>> 0 > 1 ? ur : i)); ; ) {
                              A = u[W >> 2];
                              a: if (131072 == (4390912 & u[(A + 24) >> 2])) {
                                (a = V),
                                  (F = M),
                                  h[(u[(r + 568) >> 2] + 21) | 0] &&
                                    ((F = N[(r + 520) >> 2]),
                                    (a = N[(r + 516) >> 2])),
                                  (i = (u[(r + 24) >> 2] >>> 2) & 3);
                                n: {
                                  i: {
                                    if (2 == (0 | J)) {
                                      (t = 0), (Z = 3);
                                      t: switch ((i - 2) | 0) {
                                        case 0:
                                          break n;
                                        case 1:
                                          break t;
                                        default:
                                          break i;
                                      }
                                      Z = 2;
                                      break n;
                                    }
                                    if (((t = 0), !(i >>> 0 <= 1))) {
                                      Z = i;
                                      break n;
                                    }
                                  }
                                  (Z = i), (t = lr);
                                }
                                (c = w(Sr(A, 2, a) + Mr(A, 2, a))),
                                  (G = Sr(A, 0, a)),
                                  (T = Mr(A, 0, a)),
                                  (e = N[(A + 572) >> 2]);
                                n: {
                                  i: {
                                    t: switch (
                                      ((i = u[(A + 576) >> 2]), 0 | i)
                                    ) {
                                      case 0:
                                      case 3:
                                        break i;
                                    }
                                    t: {
                                      if (
                                        !(
                                          (1 != (0 | i)) |
                                          ((o = N[(A + 572) >> 2]) != o)
                                        )
                                      ) {
                                        if (((E = e), !(e < w(0)))) break t;
                                        break i;
                                      }
                                      f: {
                                        if ((2 != (0 | i)) | (o != o)) {
                                          E = w(NaN);
                                          o: switch ((i - 1) | 0) {
                                            case 1:
                                              break f;
                                            case 0:
                                              break o;
                                            default:
                                              break t;
                                          }
                                          E = e;
                                          break t;
                                        }
                                        if ((a != a) | (e < w(0))) break i;
                                      }
                                      E = w(w(a * e) * w(0.009999999776482582));
                                    }
                                    E = w(c + E);
                                    break n;
                                  }
                                  ((E = w(NaN)), Ae(A, 2) && be(A, 2)) &&
                                    (E =
                                      (i =
                                        (e = cr(
                                          A,
                                          2,
                                          w(
                                            w(
                                              N[(r + 516) >> 2] -
                                                w(jr(r, 2) + Dr(r, 2))
                                            ) - w(Lr(A, 2, a) + _r(A, 2, a))
                                          ),
                                          a
                                        )) != e) |
                                      ((o = w(
                                        w(Tr(A, 2, a) + jr(A, 2)) +
                                          w(Ir(A, 2, a) + Dr(A, 2))
                                      )) !=
                                        o)
                                        ? i
                                          ? o
                                          : e
                                        : Ge(e, o));
                                }
                                T = w(G + T);
                                n: {
                                  i: {
                                    t: {
                                      f: {
                                        o: {
                                          u: {
                                            c: {
                                              (O = E != E),
                                                (o = N[(A + 580) >> 2]);
                                              b: {
                                                A: {
                                                  s: switch (
                                                    ((i = u[(A + 584) >> 2]),
                                                    0 | i)
                                                  ) {
                                                    case 0:
                                                    case 3:
                                                      break A;
                                                  }
                                                  s: {
                                                    if (
                                                      !(
                                                        (1 != (0 | i)) |
                                                        ((e =
                                                          N[(A + 580) >> 2]) !=
                                                          e)
                                                      )
                                                    ) {
                                                      if (!((e = o) < w(0)))
                                                        break s;
                                                      break A;
                                                    }
                                                    k: {
                                                      if (
                                                        (2 != (0 | i)) |
                                                        (e != e)
                                                      ) {
                                                        e = w(NaN);
                                                        l: switch (
                                                          (i - 1) |
                                                          0
                                                        ) {
                                                          case 1:
                                                            break k;
                                                          case 0:
                                                            break l;
                                                          default:
                                                            break s;
                                                        }
                                                        e = o;
                                                        break s;
                                                      }
                                                      if ((F != F) | (o < w(0)))
                                                        break A;
                                                    }
                                                    e = w(
                                                      w(F * o) *
                                                        w(0.009999999776482582)
                                                    );
                                                  }
                                                  e = w(T + e);
                                                  break b;
                                                }
                                                if (!Ae(A, 0) || !be(A, 0)) {
                                                  if (((e = w(NaN)), E == E))
                                                    break c;
                                                  break t;
                                                }
                                                (i =
                                                  (e = cr(
                                                    A,
                                                    0,
                                                    w(
                                                      w(
                                                        N[(r + 520) >> 2] -
                                                          w(jr(r, 0) + Dr(r, 0))
                                                      ) -
                                                        w(
                                                          Lr(A, 0, F) +
                                                            _r(A, 0, F)
                                                        )
                                                    ),
                                                    F
                                                  )) != e) |
                                                ((o = w(
                                                  w(Tr(A, 0, a) + jr(A, 0)) +
                                                    w(Ir(A, 0, a) + Dr(A, 0))
                                                )) !=
                                                  o)
                                                  ? (e = i ? o : e)
                                                  : (e = Ge(e, o));
                                              }
                                              if (
                                                (0 | O) == ((e != e) | 0) ||
                                                (G = N[(A + 224) >> 2]) != G
                                              )
                                                break o;
                                              if (E != E) {
                                                E = w(w(w(e - T) * G) + c);
                                                break o;
                                              }
                                              if (e == e) break o;
                                              break u;
                                            }
                                            if ((G = N[(A + 224) >> 2]) != G)
                                              break f;
                                          }
                                          e = w(T + w(w(E - c) / G));
                                        }
                                        if (E != E) break t;
                                        if (e == e) break n;
                                      }
                                      i = 0;
                                      break i;
                                    }
                                    i = 1;
                                  }
                                  (O = a > w(0)),
                                    (H = i & P & (Z >>> 0 < 2)),
                                    (i ^= 1),
                                    or(
                                      A,
                                      (o = H && O ? a : E),
                                      e,
                                      J,
                                      H && O ? 2 : i,
                                      e == e,
                                      o,
                                      e,
                                      0,
                                      6,
                                      s,
                                      l,
                                      v,
                                      p
                                    ),
                                    (E = w(N[(A + 516) >> 2] + He(A, 2, a))),
                                    (e = w(N[(A + 520) >> 2] + He(A, 0, a)));
                                }
                                or(A, E, e, J, 1, 1, E, e, 1, 1, s, l, v, p),
                                  (c = (i = Z >>> 0 < 2) ? a : F),
                                  (O = u[(r + 568) >> 2]),
                                  (o = h[(O + 22) | 0] ? c : a);
                                n: {
                                  if (!be(A, Z) || Ae(A, Z))
                                    if (
                                      Ae(A, Z) |
                                      (16 != (112 & u[(r + 24) >> 2]))
                                    )
                                      if (
                                        Ae(A, Z) |
                                        (32 != (112 & u[(r + 24) >> 2]))
                                      ) {
                                        if (!h[(O + 21) | 0] || !Ae(A, Z))
                                          break n;
                                        (e =
                                          N[
                                            (R +
                                              (u[(4192 + (Z << 2)) >> 2] <<
                                                2)) >>
                                              2
                                          ]),
                                          (e = w(
                                            w(Lr(A, Z, e) + jr(r, Z)) +
                                              Sr(A, Z, e)
                                          ));
                                      } else
                                        (i = u[(4192 + (Z << 2)) >> 2] << 2),
                                          (e = w(
                                            N[(i + R) >> 2] -
                                              N[(516 + ((i + A) | 0)) >> 2]
                                          ));
                                    else
                                      (i = u[(4192 + (Z << 2)) >> 2] << 2),
                                        (e = w(
                                          w(
                                            N[(i + R) >> 2] -
                                              N[(516 + ((i + A) | 0)) >> 2]
                                          ) * w(0.5)
                                        ));
                                  else
                                    (H = u[(4192 + (Z << 2)) >> 2] << 2),
                                      (e = w(
                                        w(
                                          w(
                                            w(
                                              N[(H + R) >> 2] -
                                                N[(516 + ((A + H) | 0)) >> 2]
                                            ) - Dr(r, Z)
                                          ) - Mr(A, Z, o)
                                        ) - _r(A, Z, i ? F : a)
                                      ));
                                  N[
                                    (228 +
                                      ((A + (u[(4160 + (Z << 2)) >> 2] << 2)) |
                                        0)) >>
                                      2
                                  ] = e;
                                }
                                n: if (!be(A, t) || Ae(A, t))
                                  if (
                                    Ae(A, t) ||
                                    ((i = (u[(A + 24) >> 2] >>> 13) & 7) ||
                                      (i = (u[(r + 24) >> 2] >>> 10) & 7),
                                    2 != (0 | i))
                                  ) {
                                    i: if (!Ae(A, t)) {
                                      (Z = (u[(A + 24) >> 2] >>> 13) & 7),
                                        (i = u[(r + 24) >> 2]);
                                      t: {
                                        if (
                                          !(
                                            (5 !=
                                              (0 | (Z = Z || (i >>> 10) & 7))) |
                                            (8 & i)
                                          )
                                        ) {
                                          if (524288 == (786432 & i)) break t;
                                          break i;
                                        }
                                        if (
                                          ((524288 == (786432 & i)) | 0) ==
                                          ((3 == (0 | Z)) | 0)
                                        )
                                          break i;
                                      }
                                      (i = u[(4192 + (t << 2)) >> 2] << 2),
                                        (e = w(
                                          N[(i + R) >> 2] -
                                            N[(516 + ((i + A) | 0)) >> 2]
                                        ));
                                      break n;
                                    }
                                    if (!h[(O + 21) | 0] || !Ae(A, t)) break a;
                                    (e =
                                      N[
                                        (R +
                                          (u[(4192 + (t << 2)) >> 2] << 2)) >>
                                          2
                                      ]),
                                      (e = w(
                                        w(Lr(A, t, e) + jr(r, t)) + Sr(A, t, e)
                                      ));
                                  } else
                                    (i = u[(4192 + (t << 2)) >> 2] << 2),
                                      (e = w(
                                        w(
                                          N[(i + R) >> 2] -
                                            N[(516 + ((i + A) | 0)) >> 2]
                                        ) * w(0.5)
                                      ));
                                else
                                  (i = u[(4192 + (t << 2)) >> 2] << 2),
                                    (e = w(
                                      w(
                                        w(
                                          w(
                                            N[(i + R) >> 2] -
                                              N[(516 + ((i + A) | 0)) >> 2]
                                          ) - Dr(r, t)
                                        ) - Mr(A, t, o)
                                      ) - _r(A, t, c)
                                    ));
                                N[
                                  (228 +
                                    ((A + (u[(4160 + (t << 2)) >> 2] << 2)) |
                                      0)) >>
                                    2
                                ] = e;
                              }
                              if ((0 | (W = (W + 4) | 0)) == (0 | n)) break;
                            }
                          if (1 & (m | _))
                            for (
                              t = 1 & m,
                                A = 1 & _,
                                s = er >>> 0 <= 1 ? 1 : er,
                                l = (4176 + (m << 2)) | 0,
                                v = (4176 + (_ << 2)) | 0,
                                p = u[(r + 556) >> 2],
                                m = (u[(r + 560) >> 2] - p) >> 2,
                                n = 0;
                              ;

                            ) {
                              if ((0 | n) == (0 | m)) break e;
                              if (
                                ((r = u[(p + (n << 2)) >> 2]),
                                64 & h[(r + 26) | 0] ||
                                  (A &&
                                    ((i = (r + 228) | 0),
                                    (Z = u[dr >> 2] << 2),
                                    (N[(i + (u[v >> 2] << 2)) >> 2] =
                                      w(
                                        N[(Z + R) >> 2] -
                                          N[(288 + ((i + Z) | 0)) >> 2]
                                      ) - N[(i + (u[$ >> 2] << 2)) >> 2])),
                                  !t) ||
                                  ((r = (r + 228) | 0),
                                  (i = u[D >> 2] << 2),
                                  (N[(r + (u[l >> 2] << 2)) >> 2] =
                                    w(
                                      N[(i + R) >> 2] -
                                        N[(288 + ((r + i) | 0)) >> 2]
                                    ) - N[(r + (u[Y >> 2] << 2)) >> 2])),
                                (0 | s) == (0 | (n = (n + 1) | 0)))
                              )
                                break;
                            }
                        }
                        if (!z) break r;
                        Zr(z);
                        break r;
                      }
                      B(), k();
                    }
                    ar = (y + 384) | 0;
                  }
                  function tr() {
                    var r = 0,
                      e = 0;
                    I(
                      6888,
                      6889,
                      6890,
                      0,
                      4224,
                      17,
                      4227,
                      0,
                      4227,
                      0,
                      2511,
                      4229,
                      18
                    ),
                      (r = we(8)),
                      (u[r >> 2] = 8),
                      (u[(r + 4) >> 2] = 1),
                      R(6888, 2813, 6, 4240, 4264, 19, 0 | r, 1),
                      I(
                        6892,
                        6893,
                        6894,
                        6888,
                        4224,
                        20,
                        4224,
                        21,
                        4224,
                        22,
                        2e3,
                        4229,
                        23
                      ),
                      (r = we(4)),
                      (u[r >> 2] = 24),
                      R(6892, 2341, 2, 4272, 4280, 25, 0 | r, 0),
                      V(6888, 1397, 2, 4284, 4292, 26, 27),
                      V(6888, 2918, 3, 4372, 4384, 28, 29),
                      I(
                        6912,
                        6913,
                        6914,
                        0,
                        4224,
                        30,
                        4227,
                        0,
                        4227,
                        0,
                        2527,
                        4229,
                        31
                      ),
                      (r = we(8)),
                      (u[r >> 2] = 8),
                      (u[(r + 4) >> 2] = 1),
                      R(6912, 3184, 2, 4392, 4280, 32, 0 | r, 1),
                      I(
                        6915,
                        6916,
                        6917,
                        6912,
                        4224,
                        33,
                        4224,
                        34,
                        4224,
                        35,
                        2023,
                        4229,
                        36
                      ),
                      (r = we(4)),
                      (u[r >> 2] = 37),
                      R(6915, 2341, 2, 4400, 4280, 38, 0 | r, 0),
                      V(6912, 1397, 2, 4408, 4292, 39, 40),
                      V(6912, 2918, 3, 4372, 4384, 28, 41),
                      I(
                        6918,
                        6919,
                        6920,
                        0,
                        4224,
                        42,
                        4227,
                        0,
                        4227,
                        0,
                        2752,
                        4229,
                        43
                      ),
                      H(6918, 1, 4456, 4224, 44, 45),
                      V(6918, 2806, 1, 4456, 4224, 44, 45),
                      V(6918, 1128, 2, 4460, 4280, 46, 47),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 48),
                      R(6918, 3125, 4, 4480, 4496, 49, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 50),
                      R(6918, 1980, 3, 4504, 4516, 51, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 52),
                      R(6918, 1951, 3, 4524, 4536, 53, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 54),
                      R(6918, 1799, 3, 4524, 4536, 53, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 55),
                      R(6918, 3155, 3, 4544, 4384, 56, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 57),
                      R(6918, 1925, 2, 4556, 4292, 58, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 59),
                      R(6918, 1784, 2, 4556, 4292, 58, 0 | r, 0),
                      F(6921, 1270, 4564, 60, 4229, 61),
                      Te(1731, 0),
                      Te(1611, 8),
                      Te(2144, 16),
                      Te(2437, 24),
                      Te(2543, 32),
                      Te(1617, 40),
                      X(6921),
                      F(6891, 2789, 4564, 62, 4229, 63),
                      Ve(2543, 0),
                      Ve(1617, 8),
                      X(6891),
                      F(6922, 2800, 4564, 64, 4229, 65),
                      (r = we(4)),
                      (u[r >> 2] = 8),
                      (e = we(4)),
                      (u[e >> 2] = 8),
                      _(
                        6922,
                        2794,
                        6954,
                        4566,
                        66,
                        0 | r,
                        6954,
                        4570,
                        67,
                        0 | e
                      ),
                      (r = we(4)),
                      (u[r >> 2] = 0),
                      (e = we(4)),
                      (u[e >> 2] = 0),
                      _(
                        6922,
                        1606,
                        6947,
                        4292,
                        68,
                        0 | r,
                        6947,
                        4536,
                        69,
                        0 | e
                      ),
                      X(6922),
                      I(
                        6923,
                        6924,
                        6925,
                        0,
                        4224,
                        70,
                        4227,
                        0,
                        4227,
                        0,
                        2913,
                        4229,
                        71
                      ),
                      H(6923, 1, 4576, 4224, 72, 73),
                      V(6923, 1592, 1, 4576, 4224, 72, 73),
                      V(6923, 2742, 2, 4580, 4292, 74, 75),
                      V(6923, 1128, 2, 4588, 4280, 76, 77),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 78),
                      R(6923, 1752, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 80),
                      R(6923, 2896, 3, 4596, 4536, 81, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 82),
                      R(6923, 2821, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 84),
                      R(6923, 2317, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 86),
                      R(6923, 1484, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 87),
                      R(6923, 1355, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 88),
                      R(6923, 1817, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 89),
                      R(6923, 2763, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 90),
                      R(6923, 2361, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 91),
                      R(6923, 2163, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 92),
                      R(6923, 1319, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 93),
                      R(6923, 2395, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 94),
                      R(6923, 1503, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 95),
                      R(6923, 2218, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 96),
                      R(6923, 1219, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 97),
                      R(6923, 1136, 3, 4608, 4536, 83, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 98),
                      R(6923, 1158, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 100),
                      R(6923, 1845, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 101),
                      R(6923, 1464, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 102),
                      R(6923, 1195, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 103),
                      R(6923, 2483, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 104),
                      R(6923, 2573, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 105),
                      R(6923, 1539, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 106),
                      R(6923, 2232, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 107),
                      R(6923, 1650, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 108),
                      R(6923, 1427, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 109),
                      R(6923, 2204, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 110),
                      R(6923, 2591, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 111),
                      R(6923, 1555, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 112),
                      R(6923, 1670, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 113),
                      R(6923, 1444, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 114),
                      R(6923, 2549, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 115),
                      R(6923, 1520, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 116),
                      R(6923, 1624, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 117),
                      R(6923, 1407, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 118),
                      R(6923, 2287, 3, 4648, 4570, 99, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 119),
                      R(6923, 2092, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 120),
                      R(6923, 2701, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 121),
                      R(6923, 1574, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 122),
                      R(6923, 2187, 4, 4624, 4640, 85, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 123),
                      R(6923, 2837, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 125),
                      R(6923, 2329, 3, 4668, 4384, 126, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 127),
                      R(6923, 1371, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 128),
                      R(6923, 1831, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 129),
                      R(6923, 2776, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 130),
                      R(6923, 2378, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 131),
                      R(6923, 2175, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 132),
                      R(6923, 1337, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 133),
                      R(6923, 2405, 3, 4668, 4384, 126, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 134),
                      R(6923, 1858, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 136),
                      R(6923, 1207, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 138),
                      R(6923, 2497, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 139),
                      R(6923, 2582, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 140),
                      R(6923, 1660, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 141),
                      R(6923, 2603, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 142),
                      R(6923, 1683, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 143),
                      R(6923, 2561, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 144),
                      R(6923, 1637, 2, 4680, 4292, 135, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 145),
                      R(6923, 2302, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 146),
                      R(6923, 2102, 3, 4696, 4708, 147, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 148),
                      R(6923, 1231, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 149),
                      R(6923, 1147, 2, 4660, 4292, 124, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 150),
                      R(6923, 2712, 3, 4668, 4384, 126, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 151),
                      R(6923, 2194, 3, 4716, 4728, 152, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 153),
                      R(6923, 2925, 4, 4736, 4496, 154, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 155),
                      R(6923, 2946, 3, 4752, 4536, 156, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 157),
                      R(6923, 1292, 2, 4764, 4292, 158, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 159),
                      R(6923, 1387, 2, 4772, 4292, 160, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 161),
                      R(6923, 2937, 3, 4780, 4384, 162, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 163),
                      R(6923, 2853, 2, 4792, 4292, 164, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 165),
                      R(6923, 2873, 3, 4800, 4536, 166, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 167),
                      R(6923, 3248, 3, 4812, 4536, 168, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 169),
                      R(6923, 3246, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 170),
                      R(6923, 3265, 3, 4824, 4536, 171, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 172),
                      R(6923, 3263, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 173),
                      R(6923, 1118, 2, 4588, 4280, 79, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 174),
                      R(6923, 1110, 2, 4836, 4292, 175, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 176),
                      R(6923, 1243, 5, 4848, 4868, 177, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 178),
                      R(6923, 1736, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 179),
                      R(6923, 1714, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 180),
                      R(6923, 2148, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 181),
                      R(6923, 2444, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 182),
                      R(6923, 2615, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 183),
                      R(6923, 1696, 2, 4688, 4566, 137, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 184),
                      R(6923, 1259, 2, 4876, 4292, 185, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 186),
                      R(6923, 2415, 3, 4696, 4708, 147, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 187),
                      R(6923, 2112, 3, 4696, 4708, 147, 0 | r, 0),
                      (r = we(8)),
                      (u[(r + 4) >> 2] = 0),
                      (u[r >> 2] = 188),
                      R(6923, 2723, 3, 4696, 4708, 147, 0 | r, 0);
                  }
                  function fr(r, e, a, n, i, t, c) {
                    var b,
                      A,
                      s,
                      k = 0,
                      l = 0,
                      d = 0,
                      v = 0,
                      p = 0,
                      N = 0,
                      w = 0,
                      g = 0,
                      E = 0,
                      G = 0,
                      Z = 0,
                      R = 0,
                      W = 0,
                      V = 0,
                      T = 0,
                      I = 0,
                      B = 0;
                    (ar = b = (ar - 80) | 0),
                      (u[(b + 76) >> 2] = e),
                      (s = (b + 55) | 0),
                      (A = (b + 56) | 0);
                    r: {
                      e: {
                        a: {
                          n: {
                            i: for (;;) {
                              if (((d = e), (2147483647 ^ g) < (0 | k)))
                                break n;
                              g = (k + g) | 0;
                              t: {
                                f: {
                                  o: {
                                    if ((l = h[0 | (k = d)]))
                                      for (;;) {
                                        u: {
                                          c: if ((e = 255 & l)) {
                                            if (37 != (0 | e)) break u;
                                            for (l = k; ; ) {
                                              if (37 != h[(l + 1) | 0]) {
                                                e = l;
                                                break c;
                                              }
                                              if (
                                                ((k = (k + 1) | 0),
                                                (v = h[(l + 2) | 0]),
                                                (l = e = (l + 2) | 0),
                                                37 != (0 | v))
                                              )
                                                break;
                                            }
                                          } else e = k;
                                          if (
                                            (0 | (k = (k - d) | 0)) >
                                            (0 | (T = 2147483647 ^ g))
                                          )
                                            break n;
                                          if ((r && Ur(r, d, k), k)) continue i;
                                          (u[(b + 76) >> 2] = e),
                                            (k = (e + 1) | 0),
                                            (G = -1),
                                            !ze((l = f[(e + 1) | 0])) |
                                              (36 != h[(e + 2) | 0]) ||
                                              ((G = (l - 48) | 0),
                                              (R = 1),
                                              (k = (e + 3) | 0)),
                                            (u[(b + 76) >> 2] = k),
                                            (w = 0);
                                          c: if (
                                            (e = ((l = f[0 | k]) - 32) | 0) >>>
                                              0 >
                                            31
                                          )
                                            v = k;
                                          else if (
                                            ((v = k), 75913 & (e = 1 << e))
                                          )
                                            for (;;) {
                                              if (
                                                ((v = (k + 1) | 0),
                                                (u[(b + 76) >> 2] = v),
                                                (w |= e),
                                                (e =
                                                  ((l = f[(k + 1) | 0]) - 32) |
                                                  0) >>>
                                                  0 >=
                                                  32)
                                              )
                                                break c;
                                              if (
                                                ((k = v),
                                                !(75913 & (e = 1 << e)))
                                              )
                                                break;
                                            }
                                          c: if (42 != (0 | l)) {
                                            if (
                                              (0 | (E = ve((b + 76) | 0))) <
                                              0
                                            )
                                              break n;
                                            l = u[(b + 76) >> 2];
                                          } else {
                                            if (
                                              !ze((e = f[(v + 1) | 0])) |
                                              (36 != h[(v + 2) | 0])
                                            ) {
                                              if (R) break o;
                                              if (((l = (v + 1) | 0), !r)) {
                                                (u[(b + 76) >> 2] = l),
                                                  (R = 0),
                                                  (E = 0);
                                                break c;
                                              }
                                              (e = u[a >> 2]),
                                                (u[a >> 2] = e + 4),
                                                (R = 0),
                                                (E = u[e >> 2]);
                                            } else
                                              (u[
                                                ((((e << 2) + i) | 0) - 192) >>
                                                  2
                                              ] = 10),
                                                (l = (v + 3) | 0),
                                                (R = 1),
                                                (E =
                                                  u[
                                                    ((((f[(v + 1) | 0] << 3) +
                                                      n) |
                                                      0) -
                                                      384) >>
                                                      2
                                                  ]);
                                            if (
                                              ((u[(b + 76) >> 2] = l),
                                              (0 | E) >= 0)
                                            )
                                              break c;
                                            (E = (0 - E) | 0), (w |= 8192);
                                          }
                                          if (
                                            ((k = 0), (N = -1), 46 == h[0 | l])
                                          )
                                            if (42 != h[(l + 1) | 0])
                                              (u[(b + 76) >> 2] = l + 1),
                                                (N = ve((b + 76) | 0)),
                                                (e = u[(b + 76) >> 2]),
                                                (Z = 1);
                                            else {
                                              if (
                                                !ze((e = f[(l + 2) | 0])) |
                                                (36 != h[(l + 3) | 0])
                                              ) {
                                                if (R) break o;
                                                (e = (l + 2) | 0),
                                                  (N = 0),
                                                  r &&
                                                    ((l = u[a >> 2]),
                                                    (u[a >> 2] = l + 4),
                                                    (N = u[l >> 2]));
                                              } else
                                                (u[
                                                  ((((e << 2) + i) | 0) -
                                                    192) >>
                                                    2
                                                ] = 10),
                                                  (e = (l + 4) | 0),
                                                  (N =
                                                    u[
                                                      ((((f[(l + 2) | 0] << 3) +
                                                        n) |
                                                        0) -
                                                        384) >>
                                                        2
                                                    ]);
                                              (u[(b + 76) >> 2] = e),
                                                (Z = ((-1 ^ N) >>> 31) | 0);
                                            }
                                          else (e = l), (Z = 0);
                                          for (;;) {
                                            if (
                                              ((p = k),
                                              (v = 28),
                                              (W = e),
                                              ((k = f[0 | e]) - 123) >>> 0 <
                                                4294967238)
                                            )
                                              break a;
                                            if (
                                              ((e = (W + 1) | 0),
                                              !(
                                                ((k =
                                                  h[
                                                    (4831 +
                                                      ((k + y(p, 58)) | 0)) |
                                                      0
                                                  ]) -
                                                  1) >>>
                                                  0 <
                                                8
                                              ))
                                            )
                                              break;
                                          }
                                          u[(b + 76) >> 2] = e;
                                          c: {
                                            b: {
                                              if (27 != (0 | k)) {
                                                if (!k) break a;
                                                if ((0 | G) >= 0) {
                                                  (u[((G << 2) + i) >> 2] = k),
                                                    (l =
                                                      u[
                                                        ((k =
                                                          ((G << 3) + n) | 0) +
                                                          4) >>
                                                          2
                                                      ]),
                                                    (u[(b + 64) >> 2] =
                                                      u[k >> 2]),
                                                    (u[(b + 68) >> 2] = l);
                                                  break b;
                                                }
                                                if (!r) break t;
                                                wr((b - -64) | 0, k, a, c);
                                                break c;
                                              }
                                              if ((0 | G) >= 0) break a;
                                            }
                                            if (((k = 0), !r)) continue i;
                                          }
                                          (l = -65537 & w),
                                            (w = 8192 & w ? l : w),
                                            (G = 0),
                                            (V = 1166),
                                            (v = A);
                                          c: {
                                            b: {
                                              A: {
                                                s: {
                                                  k: {
                                                    l: {
                                                      d: {
                                                        h: {
                                                          v: {
                                                            p: {
                                                              N: {
                                                                m: {
                                                                  y: {
                                                                    w: {
                                                                      g: {
                                                                        E: switch (
                                                                          ((k =
                                                                            f[
                                                                              0 |
                                                                                W
                                                                            ]),
                                                                          (k =
                                                                            p &&
                                                                            3 ==
                                                                              (15 &
                                                                                k)
                                                                              ? -33 &
                                                                                k
                                                                              : k),
                                                                          (k -
                                                                            88) |
                                                                            0)
                                                                        ) {
                                                                          case 11:
                                                                            break c;
                                                                          case 9:
                                                                          case 13:
                                                                          case 14:
                                                                          case 15:
                                                                            break b;
                                                                          case 27:
                                                                            break d;
                                                                          case 12:
                                                                          case 17:
                                                                            break p;
                                                                          case 23:
                                                                            break N;
                                                                          case 0:
                                                                          case 32:
                                                                            break m;
                                                                          case 24:
                                                                            break y;
                                                                          case 22:
                                                                            break w;
                                                                          case 29:
                                                                            break g;
                                                                          case 1:
                                                                          case 2:
                                                                          case 3:
                                                                          case 4:
                                                                          case 5:
                                                                          case 6:
                                                                          case 7:
                                                                          case 8:
                                                                          case 10:
                                                                          case 16:
                                                                          case 18:
                                                                          case 19:
                                                                          case 20:
                                                                          case 21:
                                                                          case 25:
                                                                          case 26:
                                                                          case 28:
                                                                          case 30:
                                                                          case 31:
                                                                            break f;
                                                                        }
                                                                        E: switch (
                                                                          (k -
                                                                            65) |
                                                                          0
                                                                        ) {
                                                                          case 0:
                                                                          case 4:
                                                                          case 5:
                                                                          case 6:
                                                                            break b;
                                                                          case 2:
                                                                            break k;
                                                                          case 1:
                                                                          case 3:
                                                                            break f;
                                                                        }
                                                                        if (
                                                                          83 ==
                                                                          (0 |
                                                                            k)
                                                                        )
                                                                          break l;
                                                                        break f;
                                                                      }
                                                                      (l =
                                                                        u[
                                                                          (b +
                                                                            64) >>
                                                                            2
                                                                        ]),
                                                                        (p =
                                                                          u[
                                                                            (b +
                                                                              68) >>
                                                                              2
                                                                          ]),
                                                                        (k = 1166);
                                                                      break v;
                                                                    }
                                                                    k = 0;
                                                                    w: switch (
                                                                      255 & p
                                                                    ) {
                                                                      case 0:
                                                                      case 1:
                                                                      case 6:
                                                                        u[
                                                                          u[
                                                                            (b +
                                                                              64) >>
                                                                              2
                                                                          ] >> 2
                                                                        ] = g;
                                                                        continue i;
                                                                      case 2:
                                                                        (d =
                                                                          u[
                                                                            (b +
                                                                              64) >>
                                                                              2
                                                                          ]),
                                                                          (u[
                                                                            d >>
                                                                              2
                                                                          ] = g),
                                                                          (u[
                                                                            (d +
                                                                              4) >>
                                                                              2
                                                                          ] =
                                                                            g >>
                                                                            31);
                                                                        continue i;
                                                                      case 3:
                                                                        o[
                                                                          u[
                                                                            (b +
                                                                              64) >>
                                                                              2
                                                                          ] >> 1
                                                                        ] = g;
                                                                        continue i;
                                                                      case 4:
                                                                        f[
                                                                          u[
                                                                            (b +
                                                                              64) >>
                                                                              2
                                                                          ]
                                                                        ] = g;
                                                                        continue i;
                                                                      case 7:
                                                                        break w;
                                                                      default:
                                                                        continue i;
                                                                    }
                                                                    (d =
                                                                      u[
                                                                        (b +
                                                                          64) >>
                                                                          2
                                                                      ]),
                                                                      (u[
                                                                        d >> 2
                                                                      ] = g),
                                                                      (u[
                                                                        (d +
                                                                          4) >>
                                                                          2
                                                                      ] =
                                                                        g >>
                                                                        31);
                                                                    continue i;
                                                                  }
                                                                  (N =
                                                                    N >>> 0 <= 8
                                                                      ? 8
                                                                      : N),
                                                                    (w |= 8),
                                                                    (k = 120);
                                                                }
                                                                if (
                                                                  ((d = A),
                                                                  (l =
                                                                    u[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ]) |
                                                                    (p =
                                                                      u[
                                                                        (b +
                                                                          68) >>
                                                                          2
                                                                      ]))
                                                                )
                                                                  for (
                                                                    I = 32 & k;
                                                                    (f[
                                                                      0 |
                                                                        (d =
                                                                          (d -
                                                                            1) |
                                                                          0)
                                                                    ] =
                                                                      I |
                                                                      h[
                                                                        (5360 +
                                                                          (15 &
                                                                            l)) |
                                                                          0
                                                                      ]),
                                                                      (B =
                                                                        (!p &
                                                                          (l >>>
                                                                            0 >
                                                                            15)) |
                                                                        (0 !=
                                                                          (0 |
                                                                            p))),
                                                                      (W = p),
                                                                      (p =
                                                                        (p >>>
                                                                          4) |
                                                                        0),
                                                                      (l =
                                                                        ((15 &
                                                                          W) <<
                                                                          28) |
                                                                        (l >>>
                                                                          4)),
                                                                      B;

                                                                  );
                                                                if (
                                                                  !(8 & w) |
                                                                  !(
                                                                    u[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ] |
                                                                    u[
                                                                      (b +
                                                                        68) >>
                                                                        2
                                                                    ]
                                                                  )
                                                                )
                                                                  break h;
                                                                (V =
                                                                  (1166 +
                                                                    ((k >>> 4) |
                                                                      0)) |
                                                                  0),
                                                                  (G = 2);
                                                                break h;
                                                              }
                                                              if (
                                                                ((k = A),
                                                                (p = d =
                                                                  u[
                                                                    (b + 68) >>
                                                                      2
                                                                  ]),
                                                                d |
                                                                  (l =
                                                                    u[
                                                                      (b +
                                                                        64) >>
                                                                        2
                                                                    ]))
                                                              )
                                                                for (
                                                                  ;
                                                                  (f[
                                                                    0 |
                                                                      (k =
                                                                        (k -
                                                                          1) |
                                                                        0)
                                                                  ] =
                                                                    (7 & l) |
                                                                    48),
                                                                    (W =
                                                                      (!p &
                                                                        (l >>>
                                                                          0 >
                                                                          7)) |
                                                                      (0 !=
                                                                        (0 |
                                                                          p))),
                                                                    (p =
                                                                      ((d =
                                                                        p) >>>
                                                                        3) |
                                                                      0),
                                                                    (l =
                                                                      ((7 &
                                                                        d) <<
                                                                        29) |
                                                                      (l >>>
                                                                        3)),
                                                                    W;

                                                                );
                                                              if (
                                                                ((d = k),
                                                                !(8 & w))
                                                              )
                                                                break h;
                                                              N =
                                                                (0 |
                                                                  (k =
                                                                    (A - d) |
                                                                    0)) <
                                                                (0 | N)
                                                                  ? N
                                                                  : (k + 1) | 0;
                                                              break h;
                                                            }
                                                            ((l =
                                                              u[(b + 64) >> 2]),
                                                            (p = k =
                                                              u[(b + 68) >> 2]),
                                                            (0 | k) < 0)
                                                              ? ((p = d =
                                                                  (0 -
                                                                    ((p +
                                                                      (0 !=
                                                                        (0 |
                                                                          l))) |
                                                                      0)) |
                                                                  0),
                                                                (l =
                                                                  (0 - l) | 0),
                                                                (u[
                                                                  (b + 64) >> 2
                                                                ] = l),
                                                                (u[
                                                                  (b + 68) >> 2
                                                                ] = d),
                                                                (G = 1),
                                                                (k = 1166))
                                                              : 2048 & w
                                                              ? ((G = 1),
                                                                (k = 1167))
                                                              : (k = (G = 1 & w)
                                                                  ? 1168
                                                                  : 1166);
                                                          }
                                                          (V = k),
                                                            (d = re(l, p, A));
                                                        }
                                                        if ((0 | N) < 0 && Z)
                                                          break n;
                                                        if (
                                                          ((w = Z
                                                            ? -65537 & w
                                                            : w),
                                                          !(
                                                            (0 !=
                                                              ((k =
                                                                u[
                                                                  (b + 64) >> 2
                                                                ]) |
                                                                (l =
                                                                  u[
                                                                    (b + 68) >>
                                                                      2
                                                                  ]))) |
                                                            N
                                                          ))
                                                        ) {
                                                          (d = A), (N = 0);
                                                          break f;
                                                        }
                                                        N =
                                                          (0 |
                                                            (k =
                                                              (!(k | l) +
                                                                ((A - d) | 0)) |
                                                              0)) <
                                                          (0 | N)
                                                            ? N
                                                            : k;
                                                        break f;
                                                      }
                                                      (w = 0),
                                                        (v =
                                                          0 !=
                                                          (0 |
                                                            (p = Z =
                                                              N >>> 0 >=
                                                              2147483647
                                                                ? 2147483647
                                                                : N)));
                                                      d: {
                                                        h: {
                                                          v: {
                                                            p: {
                                                              N: if (
                                                                !(
                                                                  !(
                                                                    3 &
                                                                    (k = d =
                                                                      (k =
                                                                        u[
                                                                          (b +
                                                                            64) >>
                                                                            2
                                                                        ]) ||
                                                                      4148)
                                                                  ) | !p
                                                                )
                                                              )
                                                                for (;;) {
                                                                  if (
                                                                    !(w =
                                                                      h[0 | k])
                                                                  )
                                                                    break p;
                                                                  if (
                                                                    ((v =
                                                                      0 !=
                                                                      (0 |
                                                                        (p =
                                                                          (p -
                                                                            1) |
                                                                          0))),
                                                                    !(
                                                                      3 &
                                                                      (k =
                                                                        (k +
                                                                          1) |
                                                                        0)
                                                                    ))
                                                                  )
                                                                    break N;
                                                                  if (!p) break;
                                                                }
                                                              if (!v) break h;
                                                              N: {
                                                                if (
                                                                  !(
                                                                    !h[0 | k] |
                                                                    (p >>> 0 <
                                                                      4)
                                                                  )
                                                                )
                                                                  for (;;) {
                                                                    if (
                                                                      (-1 ^
                                                                        (v =
                                                                          u[
                                                                            k >>
                                                                              2
                                                                          ])) &
                                                                      (v -
                                                                        16843009) &
                                                                      -2139062144
                                                                    )
                                                                      break N;
                                                                    if (
                                                                      ((k =
                                                                        (k +
                                                                          4) |
                                                                        0),
                                                                      !(
                                                                        (p =
                                                                          (p -
                                                                            4) |
                                                                          0) >>>
                                                                          0 >
                                                                        3
                                                                      ))
                                                                    )
                                                                      break;
                                                                  }
                                                                if (!p) break h;
                                                              }
                                                              v = 0;
                                                              break v;
                                                            }
                                                            v = 1;
                                                          }
                                                          for (;;)
                                                            if (v) {
                                                              if (!w) break d;
                                                              if (
                                                                ((k =
                                                                  (k + 1) | 0),
                                                                !(p =
                                                                  (p - 1) | 0))
                                                              )
                                                                break h;
                                                              v = 0;
                                                            } else
                                                              (w = h[0 | k]),
                                                                (v = 1);
                                                        }
                                                        k = 0;
                                                      }
                                                      if (
                                                        ((v =
                                                          ((k = k
                                                            ? (k - d) | 0
                                                            : Z) +
                                                            d) |
                                                          0),
                                                        (0 | N) >= 0)
                                                      ) {
                                                        (w = l), (N = k);
                                                        break f;
                                                      }
                                                      if (
                                                        ((w = l),
                                                        (N = k),
                                                        h[0 | v])
                                                      )
                                                        break n;
                                                      break f;
                                                    }
                                                    if (N) {
                                                      l = u[(b + 64) >> 2];
                                                      break s;
                                                    }
                                                    (k = 0), le(r, 32, E, 0, w);
                                                    break A;
                                                  }
                                                  (u[(b + 12) >> 2] = 0),
                                                    (u[(b + 8) >> 2] =
                                                      u[(b + 64) >> 2]),
                                                    (l = (b + 8) | 0),
                                                    (u[(b + 64) >> 2] = l),
                                                    (N = -1);
                                                }
                                                k = 0;
                                                s: {
                                                  for (;;) {
                                                    if (!(d = u[l >> 2]))
                                                      break s;
                                                    if (
                                                      !(
                                                        (v =
                                                          (0 |
                                                            (d = We(
                                                              (b + 4) | 0,
                                                              d
                                                            ))) <
                                                          0) |
                                                        (d >>> 0 >
                                                          (N - k) >>> 0)
                                                      )
                                                    ) {
                                                      if (
                                                        ((l = (l + 4) | 0),
                                                        N >>> 0 >
                                                          (k = (k + d) | 0) >>>
                                                            0)
                                                      )
                                                        continue;
                                                      break s;
                                                    }
                                                    break;
                                                  }
                                                  if (v) break e;
                                                }
                                                if (((v = 61), (0 | k) < 0))
                                                  break a;
                                                if ((le(r, 32, E, k, w), k))
                                                  for (
                                                    v = 0, l = u[(b + 64) >> 2];
                                                    ;

                                                  ) {
                                                    if (
                                                      !(d = u[l >> 2]) ||
                                                      (v =
                                                        ((d = We(
                                                          (b + 4) | 0,
                                                          d
                                                        )) +
                                                          v) |
                                                        0) >>>
                                                        0 >
                                                        k >>> 0
                                                    )
                                                      break A;
                                                    if (
                                                      (Ur(r, (b + 4) | 0, d),
                                                      (l = (l + 4) | 0),
                                                      !(k >>> 0 > v >>> 0))
                                                    )
                                                      break;
                                                  }
                                                else k = 0;
                                              }
                                              le(r, 32, E, k, 8192 ^ w),
                                                (k = (0 | k) < (0 | E) ? E : k);
                                              continue i;
                                            }
                                            if ((0 | N) < 0 && Z) break n;
                                            if (
                                              ((v = 61),
                                              (0 |
                                                (k =
                                                  0 |
                                                  ea[0 | t](
                                                    r,
                                                    m[(b + 64) >> 3],
                                                    E,
                                                    N,
                                                    w,
                                                    k
                                                  ))) >=
                                                0)
                                            )
                                              continue i;
                                            break a;
                                          }
                                          (f[(b + 55) | 0] = u[(b + 64) >> 2]),
                                            (N = 1),
                                            (d = s),
                                            (w = l);
                                          break f;
                                        }
                                        (l = h[(k + 1) | 0]), (k = (k + 1) | 0);
                                      }
                                    if (r) break r;
                                    if (!R) break t;
                                    for (k = 1; ; ) {
                                      if ((r = u[((k << 2) + i) >> 2])) {
                                        if (
                                          (wr(((k << 3) + n) | 0, r, a, c),
                                          (g = 1),
                                          10 != (0 | (k = (k + 1) | 0)))
                                        )
                                          continue;
                                        break r;
                                      }
                                      break;
                                    }
                                    if (((g = 1), k >>> 0 >= 10)) break r;
                                    for (;;) {
                                      if (u[((k << 2) + i) >> 2]) break o;
                                      if (10 == (0 | (k = (k + 1) | 0))) break;
                                    }
                                    break r;
                                  }
                                  v = 28;
                                  break a;
                                }
                                if (
                                  (0 |
                                    (N =
                                      (0 | N) > (0 | (p = (v - d) | 0))
                                        ? N
                                        : p)) >
                                  (2147483647 ^ G)
                                )
                                  break n;
                                if (
                                  ((v = 61),
                                  (0 | T) <
                                    (0 |
                                      (k =
                                        (0 | (l = (N + G) | 0)) < (0 | E)
                                          ? E
                                          : l)))
                                )
                                  break a;
                                le(r, 32, k, l, w),
                                  Ur(r, V, G),
                                  le(r, 48, k, l, 65536 ^ w),
                                  le(r, 48, N, p, 0),
                                  Ur(r, d, p),
                                  le(r, 32, k, l, 8192 ^ w);
                                continue;
                              }
                              break;
                            }
                            g = 0;
                            break r;
                          }
                          v = 61;
                        }
                        u[1745] = v;
                      }
                      g = -1;
                    }
                    return (ar = (b + 80) | 0), g;
                  }
                  function or(r, e, a, n, i, t, o, c, b, A, s, k, l, d) {
                    var v,
                      m = w(0),
                      E = 0,
                      G = 0,
                      Z = 0,
                      R = w(0),
                      W = 0,
                      V = 0,
                      T = w(0);
                    ((u[(r + 312) >> 2] != (0 | d) && 4 & h[(r + 4) | 0]) ||
                      ((W = 0), u[(r + 316) >> 2] != (0 | n))) &&
                      ((u[(r + 540) >> 2] = -1082130432),
                      (u[(r + 544) >> 2] = -1082130432),
                      (u[(r + 532) >> 2] = 0),
                      (u[(r + 536) >> 2] = 0),
                      (u[(r + 524) >> 2] = -1082130432),
                      (u[(r + 528) >> 2] = -1082130432),
                      (u[(r + 320) >> 2] = 0),
                      (W = 1)),
                      (v = (l + 1) | 0);
                    r: {
                      e: {
                        a: {
                          n: if (u[(r + 8) >> 2]) {
                            if (
                              ((R = Sr(r, 2, o)),
                              (T = Mr(r, 2, o)),
                              (m = w(Sr(r, 0, o) + Mr(r, 0, o))),
                              (l = (r + 524) | 0),
                              (R = w(R + T)),
                              lr(
                                i,
                                e,
                                t,
                                a,
                                u[(r + 532) >> 2],
                                N[l >> 2],
                                u[(r + 536) >> 2],
                                N[(r + 528) >> 2],
                                N[(r + 540) >> 2],
                                N[(r + 544) >> 2],
                                R,
                                m,
                                s
                              ))
                            )
                              break a;
                            if (!(G = u[(r + 320) >> 2])) break n;
                            for (E = (r + 324) | 0; ; ) {
                              if (
                                ((l = (E + y(Z, 24)) | 0),
                                lr(
                                  i,
                                  e,
                                  t,
                                  a,
                                  u[(l + 8) >> 2],
                                  N[l >> 2],
                                  u[(l + 12) >> 2],
                                  N[(l + 4) >> 2],
                                  N[(l + 16) >> 2],
                                  N[(l + 20) >> 2],
                                  R,
                                  m,
                                  s
                                ))
                              )
                                break a;
                              if ((0 | G) == (0 | (Z = (Z + 1) | 0))) break;
                            }
                          } else {
                            if (b) {
                              i: {
                                if (
                                  !(
                                    ((m = N[(l = (r + 524) | 0) >> 2]) != m) |
                                    (e != e)
                                  )
                                ) {
                                  if (w(g(w(m - e))) < w(9999999747378752e-20))
                                    break i;
                                  break n;
                                }
                                if ((m == m) | (e == e)) break n;
                              }
                              (E =
                                u[(r + 532) >> 2] == (0 | i) &&
                                u[(r + 536) >> 2] == (0 | t)
                                  ? l
                                  : 0),
                                (l = (m = N[(r + 528) >> 2]) != m) |
                                (G = a != a)
                                  ? (l &= G)
                                  : (l =
                                      w(g(w(m - a))) < w(9999999747378752e-20)),
                                (l = l ? E : 0);
                              break a;
                            }
                            if (!(V = u[(r + 320) >> 2])) break n;
                            for (G = (r + 324) | 0; ; ) {
                              E = y(Z, 24);
                              i: {
                                t: {
                                  if (
                                    !(
                                      ((m = N[(l = (E + G) | 0) >> 2]) != m) |
                                      (e != e)
                                    )
                                  ) {
                                    if (
                                      w(g(w(m - e))) < w(9999999747378752e-20)
                                    )
                                      break t;
                                    break i;
                                  }
                                  if ((m == m) | (e == e)) break i;
                                }
                                t: {
                                  if (
                                    !(
                                      ((m = N[((E = (G + E) | 0) + 4) >> 2]) !=
                                        m) |
                                      (a != a)
                                    )
                                  ) {
                                    if (
                                      w(g(w(m - a))) < w(9999999747378752e-20)
                                    )
                                      break t;
                                    break i;
                                  }
                                  if ((m == m) | (a == a)) break i;
                                }
                                if (
                                  u[(E + 8) >> 2] == (0 | i) &&
                                  u[(E + 12) >> 2] == (0 | t)
                                )
                                  break a;
                              }
                              if ((0 | V) == (0 | (Z = (Z + 1) | 0))) break;
                            }
                          }
                          ir(r, e, a, n, i, t, o, c, b, s, k, v, d, A),
                            (u[(r + 316) >> 2] = n);
                          break e;
                        }
                        if (!(!l | W)) {
                          (N[(r + 516) >> 2] = N[(l + 16) >> 2]),
                            (N[(r + 520) >> 2] = N[(l + 20) >> 2]),
                            (u[(n = ((b ? 12 : 16) + k) | 0) >> 2] =
                              u[n >> 2] + 1),
                            (n = 0);
                          break r;
                        }
                        if (
                          (ir(r, e, a, n, i, t, o, c, b, s, k, v, d, A),
                          (u[(r + 316) >> 2] = n),
                          (n = 1),
                          l)
                        )
                          break r;
                      }
                      (n = ((l = u[(r + 320) >> 2]) + 1) | 0) >>> 0 >
                        p[(k + 8) >> 2] && (u[(k + 8) >> 2] = n),
                        8 == (0 | l) && ((u[(r + 320) >> 2] = 0), (l = 0)),
                        b
                          ? (n = (r + 524) | 0)
                          : ((u[(r + 320) >> 2] = l + 1),
                            (n = (324 + ((y(l, 24) + r) | 0)) | 0)),
                        (u[(n + 12) >> 2] = t),
                        (u[(n + 8) >> 2] = i),
                        (N[(n + 4) >> 2] = a),
                        (N[n >> 2] = e),
                        (N[(n + 16) >> 2] = N[(r + 516) >> 2]),
                        (N[(n + 20) >> 2] = N[(r + 520) >> 2]),
                        (n = 1);
                    }
                    return (
                      b &&
                        ((i = u[(r + 520) >> 2]),
                        (u[(r + 244) >> 2] = u[(r + 516) >> 2]),
                        (u[(r + 248) >> 2] = i),
                        (t = 1 | (i = h[(r + 4) | 0])),
                        (f[(r + 4) | 0] = t),
                        4 & i) &&
                        (f[(r + 4) | 0] = 251 & t),
                      (u[(r + 312) >> 2] = d),
                      n
                    );
                  }
                  function ur(r) {
                    var e = 0,
                      a = 0,
                      n = 0,
                      i = 0,
                      t = 0,
                      f = 0,
                      o = 0,
                      c = 0,
                      b = 0,
                      A = 0,
                      s = 0;
                    o = 8;
                    r: if (!((r |= 0) >>> 0 > 4294967239)) {
                      e: {
                        for (;;) {
                          if (
                            ((o = o >>> 0 <= 8 ? 8 : o),
                            (t = e = u[1715]),
                            (i = u[1714]),
                            (r = r >>> 0 <= 8 ? 8 : (r + 3) & -4) >>> 0 <= 127
                              ? (f = (((r >>> 3) | 0) - 1) | 0)
                              : ((f =
                                  (110 +
                                    ((((r >>> (29 - (n = E(r)))) ^ 4) -
                                      (n << 2)) |
                                      0)) |
                                  0),
                                r >>> 0 <= 4095 ||
                                  (f =
                                    (n =
                                      (71 +
                                        ((((r >>> (30 - n)) ^ 2) - (n << 1)) |
                                          0)) |
                                      0) >>>
                                      0 >=
                                    63
                                      ? 63
                                      : n)),
                            (a = 31 & f),
                            (63 & f) >>> 0 >= 32
                              ? ((n = 0), (e = (e >>> a) | 0))
                              : ((n = (e >>> a) | 0),
                                (e =
                                  ((((1 << a) - 1) & e) << (32 - a)) |
                                  (i >>> a))),
                            e | n)
                          ) {
                            for (;;) {
                              if (
                                ((i = n),
                                e | n
                                  ? ((c = ((a = (n - 1) | 0) + 1) | 0),
                                    (t = a),
                                    (a =
                                      (63 -
                                        (n =
                                          32 ==
                                          (0 |
                                            (n = E(
                                              n ^
                                                (t =
                                                  -1 != (0 | (a = (e - 1) | 0))
                                                    ? c
                                                    : t)
                                            )))
                                            ? (E(e ^ a) + 32) | 0
                                            : n)) |
                                      0),
                                    (nr = (0 - (n >>> 0 > 63)) | 0))
                                  : ((nr = 0), (a = 64)),
                                (a = 31 & (t = a)),
                                (63 & t) >>> 0 >= 32
                                  ? ((n = 0), (e = (i >>> a) | 0))
                                  : ((n = (i >>> a) | 0),
                                    (e =
                                      ((((1 << a) - 1) & i) << (32 - a)) |
                                      (e >>> a))),
                                (c = e),
                                (0 |
                                  (e =
                                    u[
                                      ((a = (f = (t + f) | 0) << 4) + 5832) >> 2
                                    ])) ==
                                  (0 | (t = (a + 5824) | 0)))
                              )
                                (b = u[1715]),
                                  (i = 31 & (e = t = 63 & f)),
                                  e >>> 0 >= 32
                                    ? ((e = 0), (a = (-1 >>> i) | 0))
                                    : (a =
                                        (e = (-1 >>> i) | 0) |
                                        (((1 << i) - 1) << (32 - i))),
                                  (a &= -2),
                                  (i = 31 & t),
                                  t >>> 0 >= 32
                                    ? ((e = a << i), (a = 0))
                                    : ((e =
                                        (((1 << i) - 1) & (a >>> (32 - i))) |
                                        (e << i)),
                                      (a <<= i)),
                                  (A = a),
                                  (i = e),
                                  (e = 31 & (a = t = (0 - f) & 63)),
                                  a >>> 0 >= 32
                                    ? ((e = -1 << e), (a = 0))
                                    : (e =
                                        (a = -1 << e) |
                                        (((1 << e) - 1) & (-1 >>> (32 - e)))),
                                  (s = -2 & a),
                                  (a = 31 & t),
                                  t >>> 0 >= 32
                                    ? ((t = 0), (e = (e >>> a) | 0))
                                    : ((t = (e >>> a) | 0),
                                      (e =
                                        ((((1 << a) - 1) & e) << (32 - a)) |
                                        (s >>> a))),
                                  (e |= A),
                                  (nr = i | t),
                                  (u[1714] = u[1714] & e),
                                  (u[1715] = nr & b),
                                  (e = 1 ^ c);
                              else {
                                if ((i = mr(e, o, r))) break r;
                                (i = u[(e + 4) >> 2]),
                                  (u[(i + 8) >> 2] = u[(e + 8) >> 2]),
                                  (u[(u[(e + 8) >> 2] + 4) >> 2] = i),
                                  (u[(e + 8) >> 2] = t),
                                  (i = (a + 5828) | 0),
                                  (u[(e + 4) >> 2] = u[i >> 2]),
                                  (u[i >> 2] = e),
                                  (u[(u[(e + 4) >> 2] + 8) >> 2] = e),
                                  (f = (f + 1) | 0),
                                  (e = ((1 & n) << 31) | (c >>> 1)),
                                  (n = (n >>> 1) | 0);
                              }
                              if (!(e | n)) break;
                            }
                            (t = u[1715]), (i = u[1714]);
                          }
                          a: {
                            if (i | t) {
                              (a =
                                (63 -
                                  (32 == (0 | (n = E(t)))
                                    ? (E(i) + 32) | 0
                                    : n)) |
                                0),
                                (n = u[((e = a << 4) + 5832) >> 2]);
                              n: if (
                                !(
                                  !t & (i >>> 0 < 1073741824) ||
                                  ((f = 99),
                                  (e = (e + 5824) | 0),
                                  (0 | e) == (0 | n))
                                )
                              ) {
                                for (;;) {
                                  if (!f) break n;
                                  if ((i = mr(n, o, r))) break r;
                                  if (
                                    ((f = (f - 1) | 0),
                                    (0 | e) == (0 | (n = u[(n + 8) >> 2])))
                                  )
                                    break;
                                }
                                n = e;
                              }
                              if (hr((r + 48) | 0)) break a;
                              if (
                                !n ||
                                (0 | (e = (5824 + (a << 4)) | 0)) == (0 | n)
                              )
                                break e;
                              for (;;) {
                                if ((i = mr(n, o, r))) break r;
                                if ((0 | e) == (0 | (n = u[(n + 8) >> 2])))
                                  break;
                              }
                              break e;
                            }
                            if (!hr((r + 48) | 0)) break e;
                          }
                          if (((i = 0), (o - 1) & o)) break r;
                          if (!(r >>> 0 <= 4294967239)) break;
                        }
                        break r;
                      }
                      i = 0;
                    }
                    return 0 | i;
                  }
                  function cr(r, e, a, n) {
                    var i = w(0),
                      t = w(0),
                      f = 0,
                      o = w(0);
                    r: {
                      e: {
                        a: {
                          n: {
                            i: {
                              t: {
                                if (e >>> 0 <= 1) {
                                  t = N[(r + 212) >> 2];
                                  f: if (
                                    2139156720 !=
                                    (0 | (e = u[(r + 212) >> 2]))
                                  ) {
                                    if (2140081935 == (0 | e)) break t;
                                    f = 4216;
                                    o: {
                                      if (2141891242 != (0 | e)) {
                                        if (t == t) break o;
                                        f = 4208;
                                      }
                                      switch (
                                        ((i = N[f >> 2]),
                                        (t = w(NaN)),
                                        (u[(f + 4) >> 2] - 1) | 0)
                                      ) {
                                        case 0:
                                          break t;
                                        case 1:
                                          break f;
                                        default:
                                          break i;
                                      }
                                    }
                                    if (
                                      (b(
                                        2,
                                        (536870912 + (-1073741825 & e)) | 0
                                      ),
                                      (i = d()),
                                      !(1073741824 & e))
                                    )
                                      break t;
                                  }
                                  t = w(w(i * n) * w(0.009999999776482582));
                                  break i;
                                }
                                t = N[(r + 208) >> 2];
                                f: {
                                  o: {
                                    u: if (
                                      2139156720 !=
                                      (0 | (e = u[(r + 208) >> 2]))
                                    ) {
                                      if (2140081935 == (0 | e)) break o;
                                      f = 4216;
                                      c: {
                                        if (2141891242 != (0 | e)) {
                                          if (t == t) break c;
                                          f = 4208;
                                        }
                                        switch (
                                          ((i = N[f >> 2]),
                                          (t = w(NaN)),
                                          (u[(f + 4) >> 2] - 1) | 0)
                                        ) {
                                          case 0:
                                            break o;
                                          case 1:
                                            break u;
                                          default:
                                            break f;
                                        }
                                      }
                                      if (
                                        (b(
                                          2,
                                          (536870912 + (-1073741825 & e)) | 0
                                        ),
                                        (i = d()),
                                        !(1073741824 & e))
                                      )
                                        break o;
                                    }
                                    t = w(w(i * n) * w(0.009999999776482582));
                                    break f;
                                  }
                                  t = i;
                                }
                                (i = w(0)), (o = N[(r + 216) >> 2]);
                                f: if (
                                  2139156720 !=
                                  (0 | (r = u[(r + 216) >> 2]))
                                ) {
                                  if (2140081935 == (0 | r)) break a;
                                  e = 4216;
                                  o: {
                                    if (2141891242 != (0 | r)) {
                                      if (o == o) break o;
                                      e = 4208;
                                    }
                                    switch (
                                      ((i = N[e >> 2]),
                                      (u[(e + 4) >> 2] - 1) | 0)
                                    ) {
                                      case 1:
                                        break f;
                                      case 0:
                                        break n;
                                      default:
                                        break e;
                                    }
                                  }
                                  if (
                                    (b(2, (536870912 + (-1073741825 & r)) | 0),
                                    (i = d()),
                                    !(1073741824 & r))
                                  )
                                    break n;
                                }
                                i = w(w(i * n) * w(0.009999999776482582));
                                break n;
                              }
                              t = i;
                            }
                            (i = w(0)), (o = N[(r + 220) >> 2]);
                            i: if (
                              2139156720 !=
                              (0 | (r = u[(r + 220) >> 2]))
                            ) {
                              if (2140081935 == (0 | r)) break a;
                              e = 4216;
                              t: {
                                if (2141891242 != (0 | r)) {
                                  if (o == o) break t;
                                  e = 4208;
                                }
                                switch (
                                  ((i = N[e >> 2]), (u[(e + 4) >> 2] - 1) | 0)
                                ) {
                                  case 1:
                                    break i;
                                  case 0:
                                    break n;
                                  default:
                                    break e;
                                }
                              }
                              if (
                                (b(2, (536870912 + (-1073741825 & r)) | 0),
                                (i = d()),
                                !(1073741824 & r))
                              )
                                break n;
                            }
                            i = w(w(i * n) * w(0.009999999776482582));
                          }
                          if (!(i >= w(0))) break e;
                        }
                        if (a > i) break r;
                      }
                      if (!(t >= w(0))) return a;
                      i = a < t ? t : a;
                    }
                    return i;
                  }
                  function br(r, e) {
                    var a = 0,
                      n = 0;
                    for (
                      u[(r + 8) >> 2] = 0,
                        u[(r + 12) >> 2] = 0,
                        o[(r + 4) >> 1] = 1,
                        u[r >> 2] = 0,
                        u[(r + 16) >> 2] = 0,
                        u[(r + 20) >> 2] = 0,
                        u[(r + 24) >> 2] = 0,
                        u[(r + 36) >> 2] = 2143289344,
                        u[(r + 40) >> 2] = 2141891242,
                        u[(r + 28) >> 2] = 2143289344,
                        u[(r + 32) >> 2] = 2143289344,
                        n = Gr((r + 44) | 0, 0, 36);
                      (u[(n + (a << 2)) >> 2] = 2143289344),
                        9 != (0 | (a = (a + 1) | 0));

                    );
                    for (
                      a = 0, n = Gr((r + 80) | 0, 0, 36);
                      (u[(n + (a << 2)) >> 2] = 2143289344),
                        9 != (0 | (a = (a + 1) | 0));

                    );
                    for (
                      a = 0, n = Gr((r + 116) | 0, 0, 36);
                      (u[(n + (a << 2)) >> 2] = 2143289344),
                        9 != (0 | (a = (a + 1) | 0));

                    );
                    for (
                      a = 0, n = Gr((r + 152) | 0, 0, 36);
                      (u[(n + (a << 2)) >> 2] = 2143289344),
                        9 != (0 | (a = (a + 1) | 0));

                    );
                    for (
                      a = 0,
                        u[(r + 196) >> 2] = 0,
                        u[(n = (r + 188) | 0) >> 2] = 0,
                        u[(n + 4) >> 2] = 0;
                      (u[(n + (a << 2)) >> 2] = 2143289344),
                        3 != (0 | (a = (a + 1) | 0));

                    );
                    for (
                      u[(r + 24) >> 2] = 4224,
                        u[(r + 224) >> 2] = 2143289344,
                        u[(r + 216) >> 2] = 2143289344,
                        u[(r + 220) >> 2] = 2143289344,
                        u[(r + 208) >> 2] = 2143289344,
                        u[(r + 212) >> 2] = 2143289344,
                        u[(r + 200) >> 2] = 2141891242,
                        u[(r + 204) >> 2] = 2141891242,
                        Gr((r + 228) | 0, 0, 288),
                        u[(r + 244) >> 2] = 2143289344,
                        u[(r + 248) >> 2] = 2143289344,
                        Gr((r + 252) | 0, 0, 49),
                        u[(r + 308) >> 2] = 2143289344,
                        n = (r + 516) | 0,
                        a = (r + 324) | 0;
                      (u[(a + 16) >> 2] = -1082130432),
                        (u[(a + 20) >> 2] = -1082130432),
                        (u[(a + 8) >> 2] = 0),
                        (u[(a + 12) >> 2] = 0),
                        (u[a >> 2] = -1082130432),
                        (u[(a + 4) >> 2] = -1082130432),
                        (0 | n) != (0 | (a = (a + 24) | 0));

                    );
                    return (
                      (u[(r + 548) >> 2] = 0),
                      (u[(r + 552) >> 2] = 0),
                      (u[(r + 516) >> 2] = 2143289344),
                      (u[(r + 520) >> 2] = 2143289344),
                      (u[(r + 572) >> 2] = 2143289344),
                      (u[(r + 576) >> 2] = 0),
                      (u[(r + 568) >> 2] = e),
                      (u[(r + 540) >> 2] = -1082130432),
                      (u[(r + 544) >> 2] = -1082130432),
                      (u[(r + 532) >> 2] = 0),
                      (u[(r + 536) >> 2] = 0),
                      (u[(r + 524) >> 2] = -1082130432),
                      (u[(r + 528) >> 2] = -1082130432),
                      (u[(r + 556) >> 2] = 0),
                      (u[(r + 560) >> 2] = 0),
                      (u[(r + 564) >> 2] = 0),
                      (u[(r + 580) >> 2] = 2143289344),
                      (u[(r + 584) >> 2] = 0),
                      h[(e + 10) | 0] &&
                        ((u[(r + 24) >> 2] = 4616),
                        (f[(r + 4) | 0] = 128 | h[(r + 4) | 0])),
                      r
                    );
                  }
                  function Ar(r) {
                    var e,
                      a,
                      n,
                      i,
                      t,
                      f = 0,
                      o = 0,
                      c = w(0),
                      A = w(0),
                      s = w(0),
                      k = 0,
                      l = 0,
                      h = 0,
                      v = 0;
                    for (
                      u[((e = (ar - 16) | 0) + 8) >> 2] = 0,
                        u[(e + 12) >> 2] = 1,
                        a = (r + 200) | 0,
                        n = (r + 572) | 0,
                        i = (r + 208) | 0,
                        t = (r + 216) | 0,
                        r = 0;
                      ;

                    ) {
                      (v = r),
                        (h = u[(((e + 8) | 0) + (r << 2)) >> 2]),
                        (c = N[(r = (t + (k = h << 2)) | 0) >> 2]);
                      r: {
                        e: {
                          a: {
                            n: {
                              i: {
                                if (
                                  !(
                                    !(
                                      (l =
                                        2139156720 == (0 | (f = u[r >> 2]))) |
                                      (2140081935 == (0 | f)) |
                                      (2141891242 == (0 | f))
                                    ) &
                                    (c != c)
                                  )
                                ) {
                                  A = N[(r = (k + i) | 0) >> 2];
                                  t: {
                                    f: {
                                      if (2139156720 != (0 | (o = u[r >> 2]))) {
                                        if (
                                          ((s = w(NaN)),
                                          (r = 3),
                                          2141891242 == (0 | o))
                                        )
                                          break t;
                                        if (2140081935 != (0 | o)) break f;
                                        (s = w(0)), (r = 1);
                                        break t;
                                      }
                                      (s = w(0)), (r = 2);
                                      break t;
                                    }
                                    ((r = 0), A == A) &&
                                      (b(
                                        2,
                                        (536870912 + (-1073741825 & o)) | 0
                                      ),
                                      (s = d()),
                                      (r = 1073741824 & o ? 2 : 1));
                                  }
                                  o = r;
                                  t: {
                                    f: {
                                      if (!l) {
                                        if (
                                          ((A = w(NaN)),
                                          (r = 3),
                                          2141891242 == (0 | f))
                                        )
                                          break t;
                                        if (2140081935 != (0 | f)) break f;
                                        (A = w(0)), (r = 1);
                                        break t;
                                      }
                                      (A = w(0)), (r = 2);
                                      break t;
                                    }
                                    ((r = 0), c == c) &&
                                      (b(
                                        2,
                                        (536870912 + (-1073741825 & f)) | 0
                                      ),
                                      (A = d()),
                                      (r = 1073741824 & f ? 2 : 1));
                                  }
                                  if (
                                    !(
                                      ((0 | o) != (0 | r)) |
                                      !(
                                        !r |
                                        ((A != A) & (s != s)) |
                                        (w(g(w(A - s))) <
                                          w(9999999747378752e-20))
                                      )
                                    )
                                  ) {
                                    if (((r = 0), l)) break i;
                                    if (2140081935 == (0 | f)) break e;
                                    if (2141891242 == (0 | f)) break a;
                                    if (c != c) break n;
                                    (r = (536870912 + (-1073741825 & f)) | 0),
                                      (f = 1073741824 & f ? 2 : 1);
                                    break r;
                                  }
                                }
                                if (
                                  ((r = 0),
                                  (c = N[(f = (k + a) | 0) >> 2]),
                                  2139156720 != (0 | (f = u[f >> 2])))
                                ) {
                                  if (2140081935 == (0 | f)) break e;
                                  if (2141891242 == (0 | f)) break a;
                                  if (c != c) break n;
                                  (r = (536870912 + (-1073741825 & f)) | 0),
                                    (f = 1073741824 & f ? 2 : 1);
                                  break r;
                                }
                              }
                              f = 2;
                              break r;
                            }
                            (r = 2143289344), (f = 0);
                            break r;
                          }
                          (r = 2143289344), (f = 3);
                          break r;
                        }
                        f = 1;
                      }
                      if (
                        ((u[((o = ((h << 3) + n) | 0) + 4) >> 2] = f),
                        (u[o >> 2] = r),
                        (r = 1),
                        1 & v)
                      )
                        break;
                    }
                  }
                  function sr(r, e, a) {
                    var n,
                      i = 0,
                      t = 0;
                    if (a >>> 0 >= 512) return J(0 | r, 0 | e, 0 | a), r;
                    n = (r + a) | 0;
                    r: if (3 & (r ^ e))
                      if (n >>> 0 < 4) a = r;
                      else if ((i = (n - 4) | 0) >>> 0 < r >>> 0) a = r;
                      else
                        for (
                          a = r;
                          (f[0 | a] = h[0 | e]),
                            (f[(a + 1) | 0] = h[(e + 1) | 0]),
                            (f[(a + 2) | 0] = h[(e + 2) | 0]),
                            (f[(a + 3) | 0] = h[(e + 3) | 0]),
                            (e = (e + 4) | 0),
                            i >>> 0 >= (a = (a + 4) | 0) >>> 0;

                        );
                    else {
                      e: if (3 & r)
                        if (a)
                          for (a = r; ; ) {
                            if (
                              ((f[0 | a] = h[0 | e]),
                              (e = (e + 1) | 0),
                              !(3 & (a = (a + 1) | 0)))
                            )
                              break e;
                            if (!(a >>> 0 < n >>> 0)) break;
                          }
                        else a = r;
                      else a = r;
                      if (
                        !(
                          (i = -4 & n) >>> 0 < 64 ||
                          ((t = (i + -64) | 0), t >>> 0 < a >>> 0)
                        )
                      )
                        for (
                          ;
                          (u[a >> 2] = u[e >> 2]),
                            (u[(a + 4) >> 2] = u[(e + 4) >> 2]),
                            (u[(a + 8) >> 2] = u[(e + 8) >> 2]),
                            (u[(a + 12) >> 2] = u[(e + 12) >> 2]),
                            (u[(a + 16) >> 2] = u[(e + 16) >> 2]),
                            (u[(a + 20) >> 2] = u[(e + 20) >> 2]),
                            (u[(a + 24) >> 2] = u[(e + 24) >> 2]),
                            (u[(a + 28) >> 2] = u[(e + 28) >> 2]),
                            (u[(a + 32) >> 2] = u[(e + 32) >> 2]),
                            (u[(a + 36) >> 2] = u[(e + 36) >> 2]),
                            (u[(a + 40) >> 2] = u[(e + 40) >> 2]),
                            (u[(a + 44) >> 2] = u[(e + 44) >> 2]),
                            (u[(a + 48) >> 2] = u[(e + 48) >> 2]),
                            (u[(a + 52) >> 2] = u[(e + 52) >> 2]),
                            (u[(a + 56) >> 2] = u[(e + 56) >> 2]),
                            (u[(a + 60) >> 2] = u[(e + 60) >> 2]),
                            (e = (e - -64) | 0),
                            t >>> 0 >= (a = (a - -64) | 0) >>> 0;

                        );
                      if (a >>> 0 >= i >>> 0) break r;
                      for (
                        ;
                        (u[a >> 2] = u[e >> 2]),
                          (e = (e + 4) | 0),
                          i >>> 0 > (a = (a + 4) | 0) >>> 0;

                      );
                    }
                    if (a >>> 0 < n >>> 0)
                      for (
                        ;
                        (f[0 | a] = h[0 | e]),
                          (e = (e + 1) | 0),
                          (0 | n) != (0 | (a = (a + 1) | 0));

                      );
                    return r;
                  }
                  function kr(r, e, a, n, i) {
                    var t,
                      f = w(0),
                      o = 0,
                      c = w(0),
                      A = w(0),
                      s = 0,
                      k = w(0),
                      l = w(0);
                    if (!(t = (c = w(a - n)) != c)) {
                      (a = w(0)),
                        (f = N[((o = ((e << 2) + r) | 0) + 208) >> 2]);
                      r: {
                        e: {
                          a: {
                            n: if (
                              2139156720 !=
                              (0 | (o = u[(o + 208) >> 2]))
                            ) {
                              if (2140081935 == (0 | o)) break e;
                              s = 4216;
                              i: {
                                if (2141891242 != (0 | o)) {
                                  if (f == f) break i;
                                  s = 4208;
                                }
                                switch (
                                  ((a = N[s >> 2]), (u[(s + 4) >> 2] - 1) | 0)
                                ) {
                                  case 0:
                                    break a;
                                  case 1:
                                    break n;
                                  default:
                                    break r;
                                }
                              }
                              if (
                                (b(2, (536870912 + (-1073741825 & o)) | 0),
                                (a = d()),
                                !(1073741824 & o))
                              )
                                break a;
                            }
                            a = w(w(a * i) * w(0.009999999776482582));
                          }
                          if (a != a) break r;
                        }
                        A = w(a - n);
                      }
                      (a = w(0)),
                        (f = N[((r = ((e << 2) + r) | 0) + 216) >> 2]);
                      r: {
                        e: {
                          a: {
                            n: if (
                              2139156720 !=
                              (0 | (e = u[(r + 216) >> 2]))
                            ) {
                              if (2140081935 == (0 | e)) break e;
                              r = 4216;
                              i: {
                                if (2141891242 != (0 | e)) {
                                  if (f == f) break i;
                                  r = 4208;
                                }
                                switch (
                                  ((a = N[r >> 2]),
                                  (f = w(34028234663852886e22)),
                                  (u[(r + 4) >> 2] - 1) | 0)
                                ) {
                                  case 0:
                                    break a;
                                  case 1:
                                    break n;
                                  default:
                                    break r;
                                }
                              }
                              if (
                                (b(2, (536870912 + (-1073741825 & e)) | 0),
                                (a = d()),
                                !(1073741824 & e))
                              )
                                break a;
                            }
                            a = w(w(a * i) * w(0.009999999776482582));
                          }
                          if (a != a) {
                            f = w(34028234663852886e22);
                            break r;
                          }
                        }
                        f = w(a - n);
                      }
                      if (
                        ((k = c),
                        (l = Ze(c, f)),
                        !((r = (a = (f != f) | t ? k : l) != a) | (A != A)))
                      )
                        return Ge(a, A);
                      c = r ? A : a;
                    }
                    return c;
                  }
                  function lr(r, e, a, n, i, t, f, o, u, c, b, A, s) {
                    var k = w(0),
                      l = w(0),
                      d = 0,
                      h = 0,
                      v = w(0),
                      p = w(0),
                      m = w(0),
                      y = 0,
                      E = 0;
                    if ((u < w(0)) | (c < w(0))) r = 0;
                    else {
                      (v = t),
                        (p = e),
                        (m = n),
                        (l = o),
                        s &&
                          ((l = o), (k = N[(s + 16) >> 2]) != w(0)) &&
                          ((p = zr(+e, (y = +k), 0, 0)),
                          (m = zr(+n, y, 0, 0)),
                          (v = zr(+t, y, 0, 0)),
                          (l = zr(+o, y, 0, 0))),
                        (k = l),
                        (s = 0),
                        (0 | r) == (0 | i) &&
                          ((E = v != v) | (s = p != p)
                            ? (s &= E)
                            : (s = w(g(w(v - p))) < w(9999999747378752e-20))),
                        (E = s),
                        (0 | a) == (0 | f) &&
                          ((d = k != k) | (s = m != m)
                            ? (d &= s)
                            : (d = w(g(w(k - m))) < w(9999999747378752e-20))),
                        (h = 1),
                        (s = 1);
                      r: if (!E) {
                        e = w(e - b);
                        e: if (1 != (0 | r)) {
                          if (!((r = 2 != (0 | r)) | i)) {
                            if (!(e >= u)) break e;
                            break r;
                          }
                          if (
                            ((s = 0),
                            !(e < t) |
                              r |
                              (2 != (0 | i)) |
                              (e != e) |
                              (t != t) |
                              (u != u) || ((s = 1), e >= u))
                          )
                            break r;
                        }
                        s =
                          (i = e != e) | (r = u != u)
                            ? r & i
                            : w(g(w(e - u))) < w(9999999747378752e-20);
                      }
                      r: if (!d) {
                        e = w(n - A);
                        e: if (1 != (0 | a)) {
                          if (!((r = 2 != (0 | a)) | f)) {
                            if (!(e >= c)) break e;
                            break r;
                          }
                          if (
                            ((h = 0),
                            !(e < o) |
                              r |
                              (2 != (0 | f)) |
                              (e != e) |
                              (o != o) |
                              (c != c) || ((h = 1), e >= c))
                          )
                            break r;
                        }
                        h =
                          (a = e != e) | (r = c != c)
                            ? r & a
                            : w(g(w(e - c))) < w(9999999747378752e-20);
                      }
                      r = s & h;
                    }
                    return r;
                  }
                  function dr(r) {
                    var e,
                      a,
                      n = 0,
                      i = 0,
                      t = 0,
                      f = 0,
                      o = 0,
                      u = 0;
                    if (
                      (s(+r),
                      (o = 0 | c(1)),
                      (t = 0 | c(0)),
                      2047 == (0 | (f = (o >>> 20) & 2047)))
                    )
                      return (r *= 1) / r;
                    if (
                      (!(n = t << 1) &
                        (2145386496 == (0 | (u = (o << 1) | (t >>> 31))))) |
                      (u >>> 0 < 2145386496)
                    )
                      return !n & (2145386496 == (0 | u)) ? 0 * r : r;
                    if (f) n = (1048575 & o) | 1048576;
                    else {
                      if (
                        ((f = 0),
                        (i = t << 12),
                        ((0 | (n = (o << 12) | (t >>> 20))) > 0) |
                          ((0 | n) >= 0))
                      )
                        for (
                          ;
                          (f = (f - 1) | 0),
                            (n = (n << 1) | (i >>> 31)),
                            (i <<= 1),
                            ((0 | n) > 0) | ((0 | n) >= 0);

                        );
                      (i = 31 & (n = (1 - f) | 0)),
                        (63 & n) >>> 0 >= 32
                          ? ((n = t << i), (t = 0))
                          : ((n =
                              (((1 << i) - 1) & (t >>> (32 - i))) | (o << i)),
                            (t <<= i));
                    }
                    if (((i = t), (0 | f) > 1023)) {
                      for (;;) {
                        if (
                          !(
                            (0 | (t = (n + -1048576) | 0)) < 0 ||
                            ((n = t), n | i)
                          )
                        )
                          return 0 * r;
                        if (
                          ((n = (n << 1) | (i >>> 31)),
                          (i <<= 1),
                          !((0 | (f = (f - 1) | 0)) > 1023))
                        )
                          break;
                      }
                      f = 1023;
                    }
                    if (
                      !((0 | (t = (n + -1048576) | 0)) < 0 || ((n = t), n | i))
                    )
                      return 0 * r;
                    if ((1048575 == (0 | n)) | (n >>> 0 < 1048575))
                      for (
                        ;
                        (f = (f - 1) | 0),
                          (t = n >>> 0 < 524288),
                          (u = (n << 1) | (i >>> 31)),
                          (i <<= 1),
                          (n = u),
                          t;

                      );
                    return (
                      (a = -2147483648 & o),
                      (u = (n + -1048576) | (f << 20)),
                      i,
                      (o = n),
                      (e = i),
                      (i = 31 & (t = (1 - f) | 0)),
                      (63 & t) >>> 0 >= 32
                        ? ((n = 0), (t = (o >>> i) | 0))
                        : ((n = (o >>> i) | 0),
                          (t = ((((1 << i) - 1) & o) << (32 - i)) | (e >>> i))),
                      b(0, 0 | ((i = (0 | f) > 0) ? e : t)),
                      b(1, (i ? u : n) | a),
                      +A()
                    );
                  }
                  function hr(r) {
                    var e = 0,
                      a = 0,
                      n = 0,
                      i = 0,
                      t = 0;
                    if (
                      (((a = ((n = u[1380]) + (e = (r + 7) & -8)) | 0) >>> 0 <=
                        n >>> 0 &&
                        e) ||
                      (a >>> 0 > (aa() << 16) >>> 0 && !(0 | x(0 | a)))
                        ? ((u[1745] = 48), (n = -1))
                        : (u[1380] = a),
                      -1 != (0 | n))
                    ) {
                      (u[((a = ((e = (r + n) | 0) - 16) | 0) + 12) >> 2] = 16),
                        (u[a >> 2] = 16);
                      r: {
                        e: {
                          if (
                            (0 | (t = (r = u[1712]) ? u[(r + 8) >> 2] : 0)) ==
                            (0 | n)
                          ) {
                            if (
                              ((i = (n - (-2 & u[(n - 4) >> 2])) | 0),
                              (t = u[(i - 4) >> 2]),
                              (u[(r + 8) >> 2] = e),
                              (e = -16),
                              !(
                                1 &
                                f[
                                  ((((r = (i - (-2 & t)) | 0) + u[r >> 2]) |
                                    0) -
                                    4) |
                                    0
                                ]
                              ))
                            )
                              break e;
                            (e = u[(r + 4) >> 2]),
                              (u[(e + 8) >> 2] = u[(r + 8) >> 2]),
                              (u[(u[(r + 8) >> 2] + 4) >> 2] = e),
                              (a = (a - r) | 0),
                              (u[r >> 2] = a);
                            break r;
                          }
                          (u[(n + 12) >> 2] = 16),
                            (u[n >> 2] = 16),
                            (u[(n + 8) >> 2] = e),
                            (u[(n + 4) >> 2] = r),
                            (u[1712] = n),
                            (e = 16);
                        }
                        (a = (a - (r = (e + n) | 0)) | 0), (u[r >> 2] = a);
                      }
                      (u[((((-4 & a) + r) | 0) - 4) >> 2] = 1 | a),
                        (e = (u[r >> 2] - 8) | 0) >>> 0 <= 127
                          ? (a = (((e >>> 3) | 0) - 1) | 0)
                          : ((a =
                              (110 +
                                ((((e >>> (29 - (i = E(e)))) ^ 4) - (i << 2)) |
                                  0)) |
                              0),
                            e >>> 0 <= 4095 ||
                              (a =
                                (a =
                                  (71 +
                                    ((((e >>> (30 - i)) ^ 2) - (i << 1)) | 0)) |
                                  0) >>>
                                  0 >=
                                63
                                  ? 63
                                  : a)),
                        (e = a << 4),
                        (u[(r + 4) >> 2] = e + 5824),
                        (e = (e + 5832) | 0),
                        (u[(r + 8) >> 2] = u[e >> 2]),
                        (u[e >> 2] = r),
                        (u[(u[(r + 8) >> 2] + 4) >> 2] = r),
                        (e = u[1714]),
                        (i = u[1715]),
                        (r = 31 & a),
                        (63 & a) >>> 0 >= 32
                          ? ((a = 1 << r), (t = 0))
                          : (a = ((t = 1 << r) - 1) & (1 >>> (32 - r))),
                        (u[1714] = t | e),
                        (u[1715] = a | i);
                    }
                    return -1 != (0 | n);
                  }
                  function vr(r, e, a) {
                    var n = 0,
                      i = 0,
                      t = 0,
                      f = 0,
                      o = 0,
                      u = 0,
                      c = 0,
                      b = 0,
                      A = 0;
                    r: {
                      e: {
                        a: {
                          n: {
                            i: {
                              t: {
                                f: {
                                  o: {
                                    u: {
                                      c: {
                                        if (e) {
                                          if (!a) break c;
                                          break u;
                                        }
                                        (nr = 0),
                                          (r = ((r >>> 0) / (a >>> 0)) | 0);
                                        break r;
                                      }
                                      if (!r) break o;
                                      break f;
                                    }
                                    if (!((a - 1) & a)) break t;
                                    f =
                                      (0 -
                                        (t = (((E(a) + 33) | 0) - E(e)) | 0)) |
                                      0;
                                    break n;
                                  }
                                  (nr = 0), (r = ((e >>> 0) / 0) | 0);
                                  break r;
                                }
                                if ((n = (32 - E(e)) | 0) >>> 0 < 31) break i;
                                break a;
                              }
                              if (1 == (0 | a)) break e;
                              (a =
                                31 & (t = a ? (31 - E((a - 1) ^ a)) | 0 : 32)),
                                (63 & t) >>> 0 >= 32
                                  ? (r = (e >>> a) | 0)
                                  : ((n = (e >>> a) | 0),
                                    (r =
                                      ((((1 << a) - 1) & e) << (32 - a)) |
                                      (r >>> a))),
                                (nr = n);
                              break r;
                            }
                            (t = (n + 1) | 0), (f = (63 - n) | 0);
                          }
                          if (
                            ((i = 31 & (n = 63 & t)),
                            n >>> 0 >= 32
                              ? ((n = 0), (o = (e >>> i) | 0))
                              : ((n = (e >>> i) | 0),
                                (o =
                                  ((((1 << i) - 1) & e) << (32 - i)) |
                                  (r >>> i))),
                            (i = 31 & (f &= 63)),
                            f >>> 0 >= 32
                              ? ((e = r << i), (r = 0))
                              : ((e =
                                  (((1 << i) - 1) & (r >>> (32 - i))) |
                                  (e << i)),
                                (r <<= i)),
                            t)
                          )
                            for (
                              A = -1 == (0 | (f = (a - 1) | 0)) ? -1 : 0;
                              (u = (n << 1) | (o >>> 31)),
                                (o =
                                  ((n = (o << 1) | (e >>> 31)) -
                                    (c =
                                      a &
                                      (i =
                                        (A - ((u + (n >>> 0 > f >>> 0)) | 0)) >>
                                        31))) |
                                  0),
                                (n = (u - (n >>> 0 < c >>> 0)) | 0),
                                (e = (e << 1) | (r >>> 31)),
                                (r = b | (r << 1)),
                                (b = 1 & i),
                                (t = (t - 1) | 0);

                            );
                          (nr = (e << 1) | (r >>> 31)), (r = b | (r << 1));
                          break r;
                        }
                        (r = 0), (e = 0);
                      }
                      nr = e;
                    }
                    return r;
                  }
                  function pr(r, e, a) {
                    var n = w(0),
                      i = w(0);
                    r: {
                      e: {
                        a: {
                          if (2 == (-2 & e)) {
                            if (
                              (2139156720 == (0 | (e = u[(r + 188) >> 2]))) |
                                (2140081935 == (0 | e)) |
                                (2141891242 == (0 | e)) |
                                ((n = N[(r + 188) >> 2]) == n) ||
                              (2139156720 == (0 | (e = u[(r + 196) >> 2]))) |
                                (2140081935 == (0 | e)) |
                                (2141891242 == (0 | e)) |
                                ((n = N[(r + 196) >> 2]) == n)
                            )
                              break a;
                            break e;
                          }
                          if (
                            !(
                              (2139156720 == (0 | (e = u[(r + 192) >> 2]))) |
                                (2140081935 == (0 | e)) |
                                (2141891242 == (0 | e)) |
                                ((n = N[(r + 192) >> 2]) == n) ||
                              ((n = N[(r + 196) >> 2]),
                              (e = u[(r + 196) >> 2]),
                              (2139156720 == (0 | e)) |
                                (2140081935 == (0 | e)) |
                                (2141891242 == (0 | e)))
                            ) &&
                            n != n
                          )
                            break e;
                        }
                        n = w(0);
                        a: {
                          n: if (2139156720 != (0 | e)) {
                            if (2140081935 == (0 | e)) break r;
                            r = 4216;
                            i: {
                              if (2141891242 != (0 | e)) {
                                if ((b(2, e), (n = d()) == n)) break i;
                                r = 4208;
                              }
                              switch (
                                ((n = N[r >> 2]),
                                (i = w(NaN)),
                                (u[(r + 4) >> 2] - 1) | 0)
                              ) {
                                case 0:
                                  break r;
                                case 1:
                                  break n;
                                default:
                                  break a;
                              }
                            }
                            if (
                              (b(2, (536870912 + (-1073741825 & e)) | 0),
                              (n = d()),
                              !(1073741824 & e))
                            )
                              break r;
                          }
                          i = w(w(n * a) * w(0.009999999776482582));
                        }
                        return i;
                      }
                      n = w(0);
                    }
                    return n;
                  }
                  function Nr(r, e) {
                    var a,
                      n,
                      i = 0,
                      t = 0,
                      o = 0,
                      c = 0;
                    for (
                      ar = i = (ar - 320) | 0,
                        a = Gr(i, 0, 288),
                        u[((i = a) + 16) >> 2] = 2143289344,
                        u[(i + 20) >> 2] = 2143289344,
                        Gr((i + 24) | 0, 0, 49),
                        u[(i + 80) >> 2] = 2143289344,
                        o = (i + 288) | 0,
                        t = (i + 96) | 0;
                      (u[((i = t) + 16) >> 2] = -1082130432),
                        (u[(i + 20) >> 2] = -1082130432),
                        (u[(i + 8) >> 2] = 0),
                        (u[(i + 12) >> 2] = 0),
                        (u[i >> 2] = -1082130432),
                        (u[(i + 4) >> 2] = -1082130432),
                        (0 | o) != (0 | (t = (i + 24) | 0));

                    );
                    if (
                      ((u[(a + 312) >> 2] = -1082130432),
                      (u[(a + 316) >> 2] = -1082130432),
                      (u[(a + 304) >> 2] = 0),
                      (u[(a + 308) >> 2] = 0),
                      (u[(a + 296) >> 2] = -1082130432),
                      (u[(a + 300) >> 2] = -1082130432),
                      (u[(a + 288) >> 2] = 2143289344),
                      (u[(a + 292) >> 2] = 2143289344),
                      sr((r + 228) | 0, a, 320),
                      (u[(r + 244) >> 2] = 0),
                      (u[(r + 248) >> 2] = 0),
                      (f[(r + 4) | 0] = 1 | h[(r + 4) | 0]),
                      (0 | (t = u[(r + 556) >> 2])) !=
                        (0 | (n = u[(r + 560) >> 2])))
                    )
                      for (
                        ;
                        (i = u[t >> 2]),
                          u[(i + 552) >> 2] != (0 | r) &&
                            ((o = u[(r + 568) >> 2]),
                            (i = Br(u[o >> 2], h[(o + 8) | 0], i, r, c, e)),
                            (u[t >> 2] = i),
                            (u[(i + 552) >> 2] = r),
                            (i = u[t >> 2])),
                          Nr(i, e),
                          (c = (c + 1) | 0),
                          (0 | n) != (0 | (t = (t + 4) | 0));

                      );
                    ar = (a + 320) | 0;
                  }
                  function mr(r, e, a) {
                    var n = 0,
                      i = 0,
                      t = 0,
                      f = 0;
                    return (
                      ((i = ((((n = (r + 4) | 0) + e) | 0) - 1) & (0 - e)) +
                        a) >>>
                        0 <=
                      ((((e = u[r >> 2]) + r) | 0) - 4) >>> 0
                        ? ((t = u[(r + 4) >> 2]),
                          (u[(t + 8) >> 2] = u[(r + 8) >> 2]),
                          (u[(u[(r + 8) >> 2] + 4) >> 2] = t),
                          (0 | n) != (0 | i) &&
                            ((i = (i - n) | 0),
                            (t = (r - (-2 & u[(r - 4) >> 2])) | 0),
                            (n = (i + u[t >> 2]) | 0),
                            (u[t >> 2] = n),
                            (u[(((t + (-4 & n)) | 0) - 4) >> 2] = n),
                            (e = (e - i) | 0),
                            (u[(r = (r + i) | 0) >> 2] = e)),
                          (a + 24) >>> 0 <= e >>> 0
                            ? ((e = (((e - a) | 0) - 8) | 0),
                              (u[(n = (8 + ((r + a) | 0)) | 0) >> 2] = e),
                              (u[(((n + (-4 & e)) | 0) - 4) >> 2] = 1 | e),
                              (i = (u[n >> 2] - 8) | 0) >>> 0 <= 127
                                ? (e = (((i >>> 3) | 0) - 1) | 0)
                                : ((e =
                                    (110 +
                                      ((((i >>> (29 - (t = E(i)))) ^ 4) -
                                        (t << 2)) |
                                        0)) |
                                    0),
                                  i >>> 0 <= 4095 ||
                                    (e =
                                      (e =
                                        (71 +
                                          ((((i >>> (30 - t)) ^ 2) - (t << 1)) |
                                            0)) |
                                        0) >>>
                                        0 >=
                                      63
                                        ? 63
                                        : e)),
                              (i = e << 4),
                              (u[(n + 4) >> 2] = i + 5824),
                              (i = (i + 5832) | 0),
                              (u[(n + 8) >> 2] = u[i >> 2]),
                              (u[i >> 2] = n),
                              (u[(u[(n + 8) >> 2] + 4) >> 2] = n),
                              (i = u[1714]),
                              (t = u[1715]),
                              (n = 31 & e),
                              (63 & e) >>> 0 >= 32
                                ? ((e = 1 << n), (n = 0))
                                : ((e = ((f = 1 << n) - 1) & (1 >>> (32 - n))),
                                  (n = f)),
                              (u[1714] = n | i),
                              (u[1715] = e | t),
                              (e = (a + 8) | 0),
                              (u[r >> 2] = e),
                              (u[((((-4 & e) + r) | 0) - 4) >> 2] = e))
                            : (u[(((r + e) | 0) - 4) >> 2] = e),
                          (r = (r + 4) | 0))
                        : (r = 0),
                      r
                    );
                  }
                  function yr(r, e, a) {
                    var n = 0,
                      i = 0;
                    r: if ((0 | r) != (0 | e)) {
                      if ((e - (i = (r + a) | 0)) >>> 0 <= (0 - (a << 1)) >>> 0)
                        return sr(r, e, a);
                      if (((n = 3 & (r ^ e)), r >>> 0 < e >>> 0)) {
                        if (n) n = r;
                        else {
                          if (3 & r)
                            for (n = r; ; ) {
                              if (!a) break r;
                              if (
                                ((f[0 | n] = h[0 | e]),
                                (e = (e + 1) | 0),
                                (a = (a - 1) | 0),
                                !(3 & (n = (n + 1) | 0)))
                              )
                                break;
                            }
                          else n = r;
                          if (!(a >>> 0 <= 3))
                            for (
                              ;
                              (u[n >> 2] = u[e >> 2]),
                                (e = (e + 4) | 0),
                                (n = (n + 4) | 0),
                                (a = (a - 4) | 0) >>> 0 > 3;

                            );
                        }
                        if (a)
                          for (
                            ;
                            (f[0 | n] = h[0 | e]),
                              (n = (n + 1) | 0),
                              (e = (e + 1) | 0),
                              (a = (a - 1) | 0);

                          );
                      } else {
                        if (!n) {
                          if (3 & i)
                            for (;;) {
                              if (!a) break r;
                              if (
                                ((f[0 | (n = ((a = (a - 1) | 0) + r) | 0)] =
                                  h[(e + a) | 0]),
                                !(3 & n))
                              )
                                break;
                            }
                          if (!(a >>> 0 <= 3))
                            for (
                              ;
                              (u[((a = (a - 4) | 0) + r) >> 2] =
                                u[(e + a) >> 2]),
                                a >>> 0 > 3;

                            );
                        }
                        if (!a) break r;
                        for (
                          ;
                          (f[((a = (a - 1) | 0) + r) | 0] = h[(e + a) | 0]), a;

                        );
                      }
                    }
                    return r;
                  }
                  function wr(r, e, a, n) {
                    r: switch ((e - 9) | 0) {
                      case 0:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          void (u[r >> 2] = u[e >> 2])
                        );
                      case 6:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (e = o[e >> 1]),
                          (u[r >> 2] = e),
                          void (u[(r + 4) >> 2] = e >> 31)
                        );
                      case 7:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (u[r >> 2] = v[e >> 1]),
                          void (u[(r + 4) >> 2] = 0)
                        );
                      case 8:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (e = f[0 | e]),
                          (u[r >> 2] = e),
                          void (u[(r + 4) >> 2] = e >> 31)
                        );
                      case 9:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (u[r >> 2] = h[0 | e]),
                          void (u[(r + 4) >> 2] = 0)
                        );
                      case 16:
                        return (
                          (e = (u[a >> 2] + 7) & -8),
                          (u[a >> 2] = e + 8),
                          void (m[r >> 3] = m[e >> 3])
                        );
                      case 17:
                        ea[0 | n](r, a);
                      default:
                        return;
                      case 1:
                      case 4:
                      case 14:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (e = u[e >> 2]),
                          (u[r >> 2] = e),
                          void (u[(r + 4) >> 2] = e >> 31)
                        );
                      case 2:
                      case 5:
                      case 11:
                      case 15:
                        return (
                          (e = u[a >> 2]),
                          (u[a >> 2] = e + 4),
                          (u[r >> 2] = u[e >> 2]),
                          void (u[(r + 4) >> 2] = 0)
                        );
                      case 3:
                      case 10:
                      case 12:
                      case 13:
                    }
                    (e = (u[a >> 2] + 7) & -8),
                      (u[a >> 2] = e + 8),
                      (a = u[(e + 4) >> 2]),
                      (u[r >> 2] = u[e >> 2]),
                      (u[(r + 4) >> 2] = a);
                  }
                  function gr(r, e, a, n) {
                    var i = 0,
                      t = 0,
                      f = 0,
                      o = 0,
                      c = 0,
                      b = 0,
                      A = 0,
                      s = 0,
                      k = 0,
                      l = 0,
                      d = 0,
                      v = w(0),
                      p = w(0),
                      m = w(0),
                      y = 0,
                      E = w(0);
                    if (
                      0 != e &&
                      ((v = N[(r + 248) >> 2]),
                      (p = N[(r + 244) >> 2]),
                      (m = N[(r + 232) >> 2]),
                      (y = r),
                      (E = zr(
                        (s = +N[(r + 228) >> 2]),
                        e,
                        0,
                        (i = ((f = 8 & h[(r + 4) | 0]) >>> 3) | 0)
                      )),
                      (N[(y + 228) >> 2] = E),
                      (y = r),
                      (E = zr((k = +m), e, 0, i)),
                      (N[(y + 232) >> 2] = E),
                      (i = (c = dr((l = +p) * e)) != c),
                      (t = (b = dr((d = +v) * e)) != b),
                      (a = s + a),
                      (o =
                        i | (o = g(c) < 1e-4) ? i | !o : !(g(c + -1) < 1e-4)),
                      (y = r),
                      (E = w(
                        zr(a + l, e, o & (i = 0 != (0 | f)), i & !o) -
                          zr(a, e, 0, i)
                      )),
                      (N[(y + 244) >> 2] = E),
                      (n = k + n),
                      (t =
                        t | (f = g(b) < 1e-4) ? t | !f : !(g(b + -1) < 1e-4)),
                      (y = r),
                      (E = w(zr(n + d, e, i & t, i & !t) - zr(n, e, 0, i))),
                      (N[(y + 248) >> 2] = E),
                      (0 | (i = u[(r + 560) >> 2])) !=
                        (0 | (t = u[(r + 556) >> 2])))
                    )
                      for (
                        t = (i = (i - t) >> 2) >>> 0 <= 1 ? 1 : i;
                        (i = u[(r + 556) >> 2]),
                          gr(
                            (i =
                              ((u[(r + 560) >> 2] - i) >> 2) >>> 0 > A >>> 0
                                ? u[(i + (A << 2)) >> 2]
                                : 0),
                            e,
                            a,
                            n
                          ),
                          (0 | t) != (0 | (A = (A + 1) | 0));

                      );
                  }
                  function Er() {
                    er(6940, 2958),
                      rr(6941, 2462, 1, 1, 0),
                      T(6942, 2139, 1, -128, 127),
                      T(6943, 2132, 1, -128, 127),
                      T(6944, 2130, 1, 0, 255),
                      T(6945, 1286, 2, -32768, 32767),
                      T(6946, 1277, 2, 0, 65535),
                      T(6947, 1315, 4, -2147483648, 2147483647),
                      T(6948, 1306, 4, 0, -1),
                      T(6949, 2641, 4, -2147483648, 2147483647),
                      T(6950, 2632, 4, 0, -1),
                      Me(6951, 1776, -2147483648, 2147483647),
                      Me(6952, 1775, 0, -1),
                      P(6953, 1769, 4),
                      P(6954, 2906, 8),
                      U(6955, 2659),
                      U(6956, 3775),
                      L(6957, 4, 2646),
                      L(6958, 2, 2671),
                      L(6959, 4, 2686),
                      $(6960, 2467),
                      W(6961, 0, 3706),
                      W(6962, 0, 3808),
                      W(6963, 1, 3736),
                      W(6964, 2, 3338),
                      W(6965, 3, 3369),
                      W(6966, 4, 3409),
                      W(6967, 5, 3438),
                      W(6968, 4, 3845),
                      W(6969, 5, 3875),
                      W(6962, 0, 3540),
                      W(6963, 1, 3507),
                      W(6964, 2, 3606),
                      W(6965, 3, 3572),
                      W(6966, 4, 3673),
                      W(6967, 5, 3639),
                      W(6970, 6, 3476),
                      W(6971, 7, 3914);
                  }
                  function Gr(r, e, a) {
                    var n = 0,
                      i = 0,
                      t = 0,
                      o = 0;
                    if (
                      !(
                        !a ||
                        ((f[0 | r] = e),
                        (n = (r + a) | 0),
                        (f[(n - 1) | 0] = e),
                        a >>> 0 < 3) ||
                        ((f[(r + 2) | 0] = e),
                        (f[(r + 1) | 0] = e),
                        (f[(n - 3) | 0] = e),
                        (f[(n - 2) | 0] = e),
                        a >>> 0 < 7) ||
                        ((f[(r + 3) | 0] = e),
                        (f[(n - 4) | 0] = e),
                        a >>> 0 < 9) ||
                        ((n = (0 - r) & 3),
                        (i = (n + r) | 0),
                        (e = y(255 & e, 16843009)),
                        (u[i >> 2] = e),
                        (n = (a - n) & -4),
                        (a = (n + i) | 0),
                        (u[(a - 4) >> 2] = e),
                        n >>> 0 < 9) ||
                        ((u[(i + 8) >> 2] = e),
                        (u[(i + 4) >> 2] = e),
                        (u[(a - 8) >> 2] = e),
                        (u[(a - 12) >> 2] = e),
                        n >>> 0 < 25) ||
                        ((u[(i + 24) >> 2] = e),
                        (u[(i + 20) >> 2] = e),
                        (u[(i + 16) >> 2] = e),
                        (u[(i + 12) >> 2] = e),
                        (u[(a - 16) >> 2] = e),
                        (u[(a - 20) >> 2] = e),
                        (u[(a - 24) >> 2] = e),
                        (u[(a - 28) >> 2] = e),
                        (o = (4 & i) | 24),
                        (a = (n - o) | 0),
                        a >>> 0 < 32)
                      )
                    )
                      for (
                        n = se(e, 0, 1, 1), t = nr, e = (i + o) | 0;
                        (u[(e + 24) >> 2] = n),
                          (u[(e + 28) >> 2] = t),
                          (u[(e + 16) >> 2] = n),
                          (u[(e + 20) >> 2] = t),
                          (u[(e + 8) >> 2] = n),
                          (u[(e + 12) >> 2] = t),
                          (u[e >> 2] = n),
                          (u[(e + 4) >> 2] = t),
                          (e = (e + 32) | 0),
                          (a = (a - 32) | 0) >>> 0 > 31;

                      );
                    return r;
                  }
                  function Zr(r) {
                    var e = 0,
                      a = 0,
                      n = 0,
                      i = 0,
                      t = 0;
                    (r |= 0) &&
                      ((a = i = u[(e = (r - 4) | 0) >> 2]),
                      (n = e),
                      (0 | (r = -2 & (t = u[(r - 8) >> 2]))) != (0 | t) &&
                        ((a = u[((n = (e - r) | 0) + 4) >> 2]),
                        (u[(a + 8) >> 2] = u[(n + 8) >> 2]),
                        (u[(u[(n + 8) >> 2] + 4) >> 2] = a),
                        (a = (r + i) | 0)),
                      (0 | (e = u[(r = (e + i) | 0) >> 2])) !=
                        u[(((r + e) | 0) - 4) >> 2] &&
                        ((i = u[(r + 4) >> 2]),
                        (u[(i + 8) >> 2] = u[(r + 8) >> 2]),
                        (u[(u[(r + 8) >> 2] + 4) >> 2] = i),
                        (a = (e + a) | 0)),
                      (u[n >> 2] = a),
                      (u[((((-4 & a) + n) | 0) - 4) >> 2] = 1 | a),
                      (e = (u[n >> 2] - 8) | 0) >>> 0 <= 127
                        ? (r = (((e >>> 3) | 0) - 1) | 0)
                        : ((r =
                            (110 +
                              ((((e >>> (29 - (a = E(e)))) ^ 4) - (a << 2)) |
                                0)) |
                            0),
                          e >>> 0 <= 4095 ||
                            (r =
                              (r =
                                (71 +
                                  ((((e >>> (30 - a)) ^ 2) - (a << 1)) | 0)) |
                                0) >>>
                                0 >=
                              63
                                ? 63
                                : r)),
                      (e = r << 4),
                      (u[(n + 4) >> 2] = e + 5824),
                      (e = (e + 5832) | 0),
                      (u[(n + 8) >> 2] = u[e >> 2]),
                      (u[e >> 2] = n),
                      (u[(u[(n + 8) >> 2] + 4) >> 2] = n),
                      (e = u[1714]),
                      (a = u[1715]),
                      (n = 31 & r),
                      (63 & r) >>> 0 >= 32
                        ? ((r = 1 << n), (i = 0))
                        : (r = ((i = 1 << n) - 1) & (1 >>> (32 - n))),
                      (u[1714] = i | e),
                      (u[1715] = r | a));
                  }
                  function Rr(r, e, a, n, i) {
                    var t,
                      f = 0,
                      o = 0;
                    if (
                      ((ar = t = (ar - 208) | 0),
                      (u[(t + 204) >> 2] = a),
                      Gr((a = (t + 160) | 0), 0, 40),
                      (u[(t + 200) >> 2] = u[(t + 204) >> 2]),
                      (0 | fr(0, e, (t + 200) | 0, (t + 80) | 0, a, n, i)) < 0)
                    )
                      i = -1;
                    else {
                      u[(r + 76) >> 2] >= 0,
                        (f = u[r >> 2]),
                        u[(r + 72) >> 2] <= 0 && (u[r >> 2] = -33 & f);
                      r: {
                        e: {
                          if (u[(r + 48) >> 2]) {
                            if (u[(r + 16) >> 2]) break e;
                          } else
                            (u[(r + 48) >> 2] = 80),
                              (u[(r + 28) >> 2] = 0),
                              (u[(r + 16) >> 2] = 0),
                              (u[(r + 20) >> 2] = 0),
                              (o = u[(r + 44) >> 2]),
                              (u[(r + 44) >> 2] = t);
                          if (((a = -1), Ne(r))) break r;
                        }
                        a = fr(
                          r,
                          e,
                          (t + 200) | 0,
                          (t + 80) | 0,
                          (t + 160) | 0,
                          n,
                          i
                        );
                      }
                      o &&
                        (ea[u[(r + 36) >> 2]](r, 0, 0),
                        (u[(r + 48) >> 2] = 0),
                        (u[(r + 44) >> 2] = o),
                        (u[(r + 28) >> 2] = 0),
                        (e = u[(r + 20) >> 2]),
                        (u[(r + 16) >> 2] = 0),
                        (u[(r + 20) >> 2] = 0),
                        (a = e ? a : -1)),
                        (e = r),
                        (r = u[r >> 2]),
                        (u[e >> 2] = r | (32 & f)),
                        (i = 32 & r ? -1 : a);
                    }
                    return (ar = (t + 208) | 0), i;
                  }
                  function Wr(r) {
                    var e,
                      a = 0,
                      n = w(0),
                      i = 0,
                      t = 0,
                      f = 0,
                      o = 0,
                      c = w(0),
                      b = 0;
                    ar = e = (ar - 16) | 0;
                    r: {
                      if ((a = u[(r + 12) >> 2])) {
                        if (
                          ((c = N[(r + 520) >> 2]),
                          (n = N[(r + 516) >> 2]),
                          (n =
                            32 & h[(r + 4) | 0]
                              ? w(ea[0 | a](r, n, c, 0))
                              : w(ea[0 | a](r, n, c))) == n)
                        )
                          break r;
                        (u[e >> 2] = 3280), Or(r, e), Qe(), k();
                      }
                      e: {
                        a: {
                          if (
                            (0 | (f = u[(r + 556) >> 2])) !=
                            (0 | (a = u[(r + 560) >> 2]))
                          ) {
                            for (
                              b = (a = (a - f) >> 2) >>> 0 <= 1 ? 1 : a;
                              ;

                            ) {
                              if (
                                ((t = u[((o << 2) + f) >> 2]),
                                !u[(t + 548) >> 2])
                              ) {
                                if (
                                  131072 !=
                                  (196608 & (a = u[(t + 24) >> 2]))
                                ) {
                                  if (
                                    ((a = (a >>> 13) & 7) ||
                                      (a = (u[(r + 24) >> 2] >>> 10) & 7),
                                    (2 & h[(t + 4) | 0]) |
                                      (8 & h[(r + 24) | 0] ? 5 == (0 | a) : 0))
                                  )
                                    break a;
                                  i = i || t;
                                }
                                if ((0 | b) != (0 | (o = (o + 1) | 0)))
                                  continue;
                              }
                              break;
                            }
                            if (i) break e;
                          }
                          n = N[(r + 520) >> 2];
                          break r;
                        }
                        i = t;
                      }
                      n = w(Wr(i) + N[(i + 232) >> 2]);
                    }
                    return (ar = (e + 16) | 0), n;
                  }
                  function Vr(r, e, a, n, i, t) {
                    var f = 0,
                      o = w(0),
                      c = 0,
                      A = w(0);
                    (f = ((u[(4192 + (e << 2)) >> 2] << 2) + r) | 0),
                      (o = N[(f + 216) >> 2]);
                    r: {
                      e: {
                        a: if (2139156720 != (0 | (f = u[(f + 216) >> 2]))) {
                          if (2140081935 == (0 | f)) break e;
                          c = 4216;
                          n: {
                            if (2141891242 != (0 | f)) {
                              if (o == o) break n;
                              c = 4208;
                            }
                            switch (
                              ((A = N[c >> 2]),
                              (o = w(NaN)),
                              (u[(c + 4) >> 2] - 1) | 0)
                            ) {
                              case 0:
                                break e;
                              case 1:
                                break a;
                              default:
                                break r;
                            }
                          }
                          if (
                            (b(2, (536870912 + (-1073741825 & f)) | 0),
                            (A = d()),
                            !(1073741824 & f))
                          )
                            break e;
                        }
                        o = w(w(A * a) * w(0.009999999776482582));
                        break r;
                      }
                      o = A;
                    }
                    n = w(o + w(Sr(r, e, n) + Mr(r, e, n)));
                    r: {
                      e: {
                        a: switch (u[i >> 2]) {
                          case 1:
                          case 2:
                            (a = N[t >> 2]), (n = n != n || a < n ? a : n);
                            break e;
                          case 0:
                            break a;
                          default:
                            break r;
                        }
                        if (n != n) break r;
                        u[i >> 2] = 2;
                      }
                      N[t >> 2] = n;
                    }
                  }
                  function Tr(r, e, a) {
                    var n,
                      i = w(0),
                      t = w(0),
                      f = w(0);
                    (r = (r + 116) | 0), (n = u[(4160 + (e << 2)) >> 2]);
                    r: {
                      e: {
                        a: {
                          n: if (
                            2139156720 !=
                            (0 |
                              (e =
                                2 != (-2 & e)
                                  ? Yr(r, n, 2140081935)
                                  : Xr(r, 4, n, 2140081935)))
                          ) {
                            if (2140081935 == (0 | e)) break r;
                            r = 4216;
                            i: {
                              if (2141891242 != (0 | e)) {
                                if ((b(2, e), (i = d()) == i)) break i;
                                r = 4208;
                              }
                              switch (
                                ((i = N[r >> 2]),
                                (t = w(NaN)),
                                (u[(r + 4) >> 2] - 1) | 0)
                              ) {
                                case 0:
                                  break a;
                                case 1:
                                  break n;
                                default:
                                  break e;
                              }
                            }
                            if (
                              (b(2, (536870912 + (-1073741825 & e)) | 0),
                              (i = d()),
                              !(1073741824 & e))
                            )
                              break a;
                          }
                          i = w(w(i * a) * w(0.009999999776482582));
                        }
                        if (i >= w(0)) return i;
                        if (((t = i), i < w(0))) break r;
                      }
                      f = t == t ? t : w(0);
                    }
                    return f;
                  }
                  function Ir(r, e, a) {
                    var n,
                      i = w(0),
                      t = w(0),
                      f = w(0);
                    (r = (r + 116) | 0), (n = u[(4176 + (e << 2)) >> 2]);
                    r: {
                      e: {
                        a: {
                          n: if (
                            2139156720 !=
                            (0 |
                              (e =
                                2 != (-2 & e)
                                  ? Yr(r, n, 2140081935)
                                  : Xr(r, 5, n, 2140081935)))
                          ) {
                            if (2140081935 == (0 | e)) break r;
                            r = 4216;
                            i: {
                              if (2141891242 != (0 | e)) {
                                if ((b(2, e), (i = d()) == i)) break i;
                                r = 4208;
                              }
                              switch (
                                ((i = N[r >> 2]),
                                (t = w(NaN)),
                                (u[(r + 4) >> 2] - 1) | 0)
                              ) {
                                case 0:
                                  break a;
                                case 1:
                                  break n;
                                default:
                                  break e;
                              }
                            }
                            if (
                              (b(2, (536870912 + (-1073741825 & e)) | 0),
                              (i = d()),
                              !(1073741824 & e))
                            )
                              break a;
                          }
                          i = w(w(i * a) * w(0.009999999776482582));
                        }
                        if (i >= w(0)) return i;
                        if (((t = i), i < w(0))) break r;
                      }
                      f = t == t ? t : w(0);
                    }
                    return f;
                  }
                  function Br(r, e, a, n, i, t) {
                    var f = 0;
                    r: {
                      if (
                        !r ||
                        !(t =
                          255 & e
                            ? 0 | ea[0 | r](a, n, i, t)
                            : 0 | ea[0 | r](a, n, i))
                      ) {
                        if (
                          ((e = sr((t = we(588)), a, 552)),
                          (u[(e + 564) >> 2] = 0),
                          (u[(e + 556) >> 2] = 0),
                          (u[(e + 560) >> 2] = 0),
                          (0 | (i = u[(a + 556) >> 2])) !=
                            (0 | (n = u[(a + 560) >> 2])))
                        ) {
                          if ((0 | (f = (n - i) | 0)) < 0) break r;
                          for (
                            r = we(f),
                              u[(e + 556) >> 2] = r,
                              u[(e + 564) >> 2] = r + f;
                            (u[r >> 2] = u[i >> 2]),
                              (r = (r + 4) | 0),
                              (0 | n) != (0 | (i = (i + 4) | 0));

                          );
                          u[(e + 560) >> 2] = r;
                        }
                        (r = u[(a + 572) >> 2]),
                          (u[(e + 568) >> 2] = u[(a + 568) >> 2]),
                          (u[(e + 572) >> 2] = r),
                          (u[(e + 584) >> 2] = u[(a + 584) >> 2]),
                          (r = u[(a + 580) >> 2]),
                          (u[(e + 576) >> 2] = u[(a + 576) >> 2]),
                          (u[(e + 580) >> 2] = r),
                          (u[(e + 552) >> 2] = 0);
                      }
                      return t;
                    }
                    B(), k();
                  }
                  function Or(r, e) {
                    var a,
                      n = 0,
                      i = 0;
                    (ar = a = (ar - 16) | 0), (u[(a + 12) >> 2] = e);
                    r: {
                      if (r) {
                        if (((e = u[(a + 12) >> 2]), (n = u[(r + 568) >> 2]))) {
                          if (((i = u[(n + 4) >> 2]), h[(n + 9) | 0])) {
                            ea[0 | i](n, r, 5, 0, 4155, e);
                            break r;
                          }
                          ea[0 | i](n, r, 5, 4155, e);
                          break r;
                        }
                      } else e = u[(a + 12) >> 2];
                      if (h[6872]) {
                        if (
                          ((n = u[1717]), (i = u[(n + 4) >> 2]), h[(n + 9) | 0])
                        ) {
                          ea[0 | i](n, r, 5, 0, 4155, e);
                          break r;
                        }
                      } else
                        (n = we(28)),
                          (o[(n + 20) >> 1] = 0),
                          (u[(n + 16) >> 2] = 1065353216),
                          (o[(n + 10) >> 1] = 0),
                          (o[(n + 12) >> 1] = 0),
                          (u[n >> 2] = 0),
                          (u[(n + 24) >> 2] = 0),
                          (f[(n + 9) | 0] = 0),
                          (i = 1),
                          (u[(n + 4) >> 2] = 1),
                          (f[(n + 22) | 0] = 0),
                          (u[1717] = n),
                          (f[6872] = 1),
                          (u[1716] = u[1716] + 1);
                      ea[0 | i](n, r, 5, 4155, e);
                    }
                    ar = (a + 16) | 0;
                  }
                  function _r(r, e, a) {
                    var n,
                      i = w(0),
                      t = w(0);
                    (r = (r + 80) | 0), (n = u[(4176 + (e << 2)) >> 2]);
                    r: {
                      e: {
                        a: if (
                          2139156720 !=
                          (0 |
                            (e =
                              2 != (-2 & e)
                                ? Yr(r, n, 2140081935)
                                : Xr(r, 5, n, 2140081935)))
                        ) {
                          if (2140081935 == (0 | e)) break r;
                          r = 4216;
                          n: {
                            if (2141891242 != (0 | e)) {
                              if ((b(2, e), (i = d()) == i)) break n;
                              r = 4208;
                            }
                            switch (
                              ((i = N[r >> 2]),
                              (t = w(NaN)),
                              (u[(r + 4) >> 2] - 1) | 0)
                            ) {
                              case 0:
                                break r;
                              case 1:
                                break a;
                              default:
                                break e;
                            }
                          }
                          if (
                            (b(2, (536870912 + (-1073741825 & e)) | 0),
                            (i = d()),
                            !(1073741824 & e))
                          )
                            break r;
                        }
                        t = w(w(i * a) * w(0.009999999776482582));
                      }
                      return t;
                    }
                    return i;
                  }
                  function Lr(r, e, a) {
                    var n,
                      i = w(0),
                      t = w(0);
                    (r = (r + 80) | 0), (n = u[(4160 + (e << 2)) >> 2]);
                    r: {
                      e: {
                        a: if (
                          2139156720 !=
                          (0 |
                            (e =
                              2 != (-2 & e)
                                ? Yr(r, n, 2140081935)
                                : Xr(r, 4, n, 2140081935)))
                        ) {
                          if (2140081935 == (0 | e)) break r;
                          r = 4216;
                          n: {
                            if (2141891242 != (0 | e)) {
                              if ((b(2, e), (i = d()) == i)) break n;
                              r = 4208;
                            }
                            switch (
                              ((i = N[r >> 2]),
                              (t = w(NaN)),
                              (u[(r + 4) >> 2] - 1) | 0)
                            ) {
                              case 0:
                                break r;
                              case 1:
                                break a;
                              default:
                                break e;
                            }
                          }
                          if (
                            (b(2, (536870912 + (-1073741825 & e)) | 0),
                            (i = d()),
                            !(1073741824 & e))
                          )
                            break r;
                        }
                        t = w(w(i * a) * w(0.009999999776482582));
                      }
                      return t;
                    }
                    return i;
                  }
                  function Xr(r, e, a, n) {
                    var i = w(0);
                    return (
                      (i = N[(e = ((e << 2) + r) | 0) >> 2]),
                      !(
                        (2139156720 == (0 | (e = u[e >> 2]))) |
                          (2140081935 == (0 | e)) |
                          (2141891242 == (0 | e)) |
                          (i == i) ||
                        ((e = ((a << 2) + r) | 0),
                        (i = N[e >> 2]),
                        (e = u[e >> 2]),
                        (2139156720 == (0 | e)) |
                          (2140081935 == (0 | e)) |
                          (2141891242 == (0 | e)) |
                          (i == i)) ||
                        ((e = u[(r + 24) >> 2]),
                        (i = N[(r + 24) >> 2]),
                        (2139156720 == (0 | e)) |
                          (2140081935 == (0 | e)) |
                          (2141891242 == (0 | e)) |
                          (i == i))
                      ) &&
                        ((i = N[(r + 32) >> 2]),
                        (2139156720 == (0 | (r = u[(r + 32) >> 2]))) |
                          (2140081935 == (0 | r)) |
                          (2141891242 == (0 | r)) || ((e = n), i == i)) &&
                        (e = r),
                      e
                    );
                  }
                  function Fr(r, e, a, n, i) {
                    var t,
                      f = 0,
                      o = 0,
                      c = w(0);
                    (f = 2), (o = (u[(r + 24) >> 2] >>> 2) & 3);
                    r: {
                      e: {
                        a: {
                          if (!(!u[(r + 552) >> 2] | (2 != (0 | e)))) {
                            (e = 0), (f = 3);
                            n: switch ((o - 2) | 0) {
                              case 0:
                                break r;
                              case 1:
                                break n;
                              default:
                                break a;
                            }
                            f = 2;
                            break r;
                          }
                          if (((e = 0), o >>> 0 > 1)) break e;
                        }
                        e = f;
                      }
                      f = o;
                    }
                    (a = Le(r, f, a)),
                      (n = Le(r, e, n)),
                      (c = Sr(r, f, i)),
                      (N[
                        ((o = (r + 228) | 0) +
                          (u[((t = f << 2) + 4160) >> 2] << 2)) >>
                          2
                      ] = a + c),
                      (c = Mr(r, f, i)),
                      (N[(o + (u[(t + 4176) >> 2] << 2)) >> 2] = a + c),
                      (a = Sr(r, e, i)),
                      (N[(o + (u[((f = e << 2) + 4160) >> 2] << 2)) >> 2] =
                        n + a),
                      (a = Mr(r, e, i)),
                      (N[(o + (u[(f + 4176) >> 2] << 2)) >> 2] = n + a);
                  }
                  function Cr(r) {
                    var e = 0,
                      a = 0,
                      n = 0,
                      i = 0;
                    if ((r |= 0)) {
                      if (
                        ((e = u[r >> 2]),
                        (a = u[(e + 552) >> 2]) &&
                          (ee(a, e), (u[(e + 552) >> 2] = 0)),
                        (0 | (n = u[(e + 560) >> 2])) !=
                          (0 | (a = u[(e + 556) >> 2])))
                      )
                        for (
                          i = (n = (n - a) >> 2) >>> 0 <= 1 ? 1 : n, n = 0;
                          (u[(u[(a + (n << 2)) >> 2] + 552) >> 2] = 0),
                            (0 | i) != (0 | (n = (n + 1) | 0));

                        );
                      (u[(e + 560) >> 2] = a),
                        Pr((e + 556) | 0),
                        (a = u[(e + 556) >> 2]) &&
                          ((u[(e + 560) >> 2] = a), Zr(a)),
                        Zr(e),
                        (e = u[(r + 8) >> 2]),
                        (u[(r + 8) >> 2] = 0),
                        e && ea[u[(u[e >> 2] + 4) >> 2]](e),
                        (e = u[(r + 4) >> 2]),
                        (u[(r + 4) >> 2] = 0),
                        e && ea[u[(u[e >> 2] + 4) >> 2]](e),
                        Zr(r);
                    }
                  }
                  function Pr(r) {
                    var e,
                      a = 0,
                      n = 0,
                      i = 0,
                      t = 0;
                    (ar = e = (ar - 32) | 0),
                      (a = u[r >> 2]),
                      (n = (u[(r + 4) >> 2] - a) >> 2) >>> 0 >=
                        ((u[(r + 8) >> 2] - a) >> 2) >>> 0 ||
                        ((n = pe((e + 8) | 0, n, n, (r + 8) | 0)),
                        (a = u[r >> 2]),
                        (i = (u[(r + 4) >> 2] - a) | 0),
                        (i = yr((u[(n + 4) >> 2] - i) | 0, a, i)),
                        (a = u[r >> 2]),
                        (u[r >> 2] = i),
                        (u[(n + 4) >> 2] = a),
                        (i = u[(r + 4) >> 2]),
                        (u[(r + 4) >> 2] = u[(n + 8) >> 2]),
                        (u[(n + 8) >> 2] = i),
                        (t = u[(r + 8) >> 2]),
                        (u[(r + 8) >> 2] = u[(n + 12) >> 2]),
                        (u[n >> 2] = a),
                        (u[(n + 12) >> 2] = t),
                        (0 | a) != (0 | i) &&
                          (u[(n + 8) >> 2] = i + ((3 + ((a - i) | 0)) & -4)),
                        !a) ||
                        Zr(a),
                      (ar = (e + 32) | 0);
                  }
                  function Ur(r, e, a) {
                    var n = 0,
                      i = 0,
                      t = 0;
                    if (!(32 & h[0 | r]))
                      r: {
                        n = e;
                        e: {
                          if (!(r = u[((e = r) + 16) >> 2])) {
                            if (Ne(e)) break e;
                            r = u[(e + 16) >> 2];
                          }
                          if ((r - (t = u[(e + 20) >> 2])) >>> 0 < a >>> 0) {
                            ea[u[(e + 36) >> 2]](e, n, a);
                            break r;
                          }
                          a: if (!(u[(e + 80) >> 2] < 0)) {
                            for (r = a; ; ) {
                              if (((i = r), !r)) break a;
                              if (10 == h[(n + (r = (i - 1) | 0)) | 0]) break;
                            }
                            if (ea[u[(e + 36) >> 2]](e, n, i) >>> 0 < i >>> 0)
                              break e;
                            (n = (n + i) | 0),
                              (a = (a - i) | 0),
                              (t = u[(e + 20) >> 2]);
                          }
                          sr(t, n, a),
                            (u[(e + 20) >> 2] = u[(e + 20) >> 2] + a);
                        }
                      }
                  }
                  function Hr(r, e, a) {
                    var n,
                      i = 0,
                      t = 0;
                    (ar = n = (ar - 16) | 0),
                      (i = (r + 24) | 0),
                      ea[0 | e]((n + 8) | 0, i),
                      (t = u[(n + 12) >> 2]);
                    r: if ((u[u[(n + 8) >> 2] >> 2] & (7 << t)) >> t != (0 | a))
                      for (
                        ea[0 | e]((n + 8) | 0, i),
                          i = e = u[(n + 8) >> 2],
                          t = u[e >> 2],
                          e = u[(n + 12) >> 2],
                          u[i >> 2] = (t & ((7 << e) ^ -1)) | ((7 & a) << e);
                        ;

                      ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                    ar = (n + 16) | 0;
                  }
                  function Mr(r, e, a) {
                    var n,
                      i = w(0);
                    (r = (r + 44) | 0), (n = u[(4176 + (e << 2)) >> 2]);
                    r: {
                      if (
                        2139156720 !=
                        (0 |
                          (r =
                            2 != (-2 & e)
                              ? Yr(r, n, 2140081935)
                              : Xr(r, 5, n, 2140081935)))
                      ) {
                        if ((2140081935 == (0 | r)) | (2141891242 == (0 | r)))
                          break r;
                        if ((b(2, r), (i = d()) != i)) return w(NaN);
                        if (
                          (b(2, (536870912 + (-1073741825 & r)) | 0),
                          (i = d()),
                          !(1073741824 & r))
                        )
                          break r;
                      }
                      i = w(w(i * a) * w(0.009999999776482582));
                    }
                    return i;
                  }
                  function Sr(r, e, a) {
                    var n,
                      i = w(0);
                    (r = (r + 44) | 0), (n = u[(4160 + (e << 2)) >> 2]);
                    r: {
                      if (
                        2139156720 !=
                        (0 |
                          (r =
                            2 != (-2 & e)
                              ? Yr(r, n, 2140081935)
                              : Xr(r, 4, n, 2140081935)))
                      ) {
                        if ((2140081935 == (0 | r)) | (2141891242 == (0 | r)))
                          break r;
                        if ((b(2, r), (i = d()) != i)) return w(NaN);
                        if (
                          (b(2, (536870912 + (-1073741825 & r)) | 0),
                          (i = d()),
                          !(1073741824 & r))
                        )
                          break r;
                      }
                      i = w(w(i * a) * w(0.009999999776482582));
                    }
                    return i;
                  }
                  function Yr(r, e, a) {
                    var n = w(0);
                    return (
                      (n = N[(e = ((e << 2) + r) | 0) >> 2]),
                      !(
                        (2139156720 == (0 | (e = u[e >> 2]))) |
                          (2140081935 == (0 | e)) |
                          (2141891242 == (0 | e)) |
                          (n == n) ||
                        ((e = u[(r + 28) >> 2]),
                        (n = N[(r + 28) >> 2]),
                        (2139156720 == (0 | e)) |
                          (2140081935 == (0 | e)) |
                          (2141891242 == (0 | e)) |
                          (n == n))
                      ) &&
                        ((n = N[(r + 32) >> 2]),
                        (2139156720 == (0 | (r = u[(r + 32) >> 2]))) |
                          (2140081935 == (0 | r)) |
                          (2141891242 == (0 | r)) || ((e = a), n == n)) &&
                        (e = r),
                      e
                    );
                  }
                  function Dr(r, e) {
                    var a,
                      n = w(0);
                    return (
                      (r = (r + 152) | 0),
                      (a = u[(4176 + (e << 2)) >> 2]),
                      (r =
                        2 != (-2 & e)
                          ? Yr(r, a, 2140081935)
                          : Xr(r, 5, a, 2140081935)),
                      (n = w(0)),
                      2139156720 != (0 | r) &&
                        ((n = w(0)), 2140081935 != (0 | r)) &&
                        (2141891242 == (0 | r) || (b(2, r), (n = d()) != n)
                          ? (n = w(NaN))
                          : (b(2, (536870912 + (-1073741825 & r)) | 0),
                            (n = d()))),
                      Ge(n, w(0))
                    );
                  }
                  function jr(r, e) {
                    var a,
                      n = w(0);
                    return (
                      (r = (r + 152) | 0),
                      (a = u[(4160 + (e << 2)) >> 2]),
                      (r =
                        2 != (-2 & e)
                          ? Yr(r, a, 2140081935)
                          : Xr(r, 4, a, 2140081935)),
                      (n = w(0)),
                      2139156720 != (0 | r) &&
                        ((n = w(0)), 2140081935 != (0 | r)) &&
                        (2141891242 == (0 | r) || (b(2, r), (n = d()) != n)
                          ? (n = w(NaN))
                          : (b(2, (536870912 + (-1073741825 & r)) | 0),
                            (n = d()))),
                      Ge(n, w(0))
                    );
                  }
                  function Qr(r, e) {
                    return (
                      e
                        ? ((e = u[e >> 2]), (e = br(we(588), e)))
                        : (h[6872]
                            ? (e = u[1717])
                            : ((e = we(28)),
                              (o[(e + 20) >> 1] = 0),
                              (u[(e + 16) >> 2] = 1065353216),
                              (o[(e + 10) >> 1] = 0),
                              (o[(e + 12) >> 1] = 0),
                              (u[e >> 2] = 0),
                              (u[(e + 24) >> 2] = 0),
                              (f[(e + 9) | 0] = 0),
                              (u[(e + 4) >> 2] = 1),
                              (f[(e + 22) | 0] = 0),
                              (u[1717] = e),
                              (f[6872] = 1),
                              (u[1716] = u[1716] + 1)),
                          (e = br(we(588), e))),
                      (u[(r + 4) >> 2] = 0),
                      (u[(r + 8) >> 2] = 0),
                      (u[r >> 2] = e),
                      (u[e >> 2] = r),
                      r
                    );
                  }
                  function zr(r, e, a, n) {
                    var i,
                      t = 0,
                      f = 0;
                    r: if (
                      (i = (t = (t = dr((r *= e))) < 0 ? t + 1 : t) != t) |
                      !(g(t) < 1e-4)
                    ) {
                      if (t == t) {
                        if (((r -= t), g(t + -1) < 1e-4)) {
                          r += 1;
                          break r;
                        }
                      } else r -= t;
                      a
                        ? (r += 1)
                        : n ||
                          ((f = 0),
                          i ||
                            ((f = 1), t > 0.5) ||
                            (f = g(t + -0.5) < 1e-4 ? 1 : 0),
                          (r += f));
                    } else r -= t;
                    return w((r != r) | (e != e) ? NaN : r / e);
                  }
                  function xr(r) {
                    var e = w(0),
                      a = 0,
                      n = w(0);
                    a = 0;
                    r: if (131072 != (196608 & u[(r + 24) >> 2])) {
                      if (u[(r + 552) >> 2]) {
                        if (
                          ((e = N[(r + 32) >> 2]) == e ||
                            (e = N[(r + 28) >> 2]) > w(0)) &&
                          ((a = 1), e != w(0))
                        )
                          break r;
                        (e = N[(r + 36) >> 2]) != e &&
                          (f[(r + 4) | 0] < 0
                            ? (e = w(1))
                            : ((e = w(0)),
                              (n = N[(r + 28) >> 2]) < w(0) && (e = w(-n))));
                      }
                      a = e != w(0);
                    }
                    return a;
                  }
                  function Jr(r, e) {
                    var a = w(0);
                    r: {
                      if (2139156720 != (0 | e)) {
                        if (2140081935 != (0 | e)) {
                          if (2141891242 != (0 | e)) break r;
                          return (
                            (u[r >> 2] = 2143289344), void (u[(r + 4) >> 2] = 3)
                          );
                        }
                        return (u[r >> 2] = 0), void (u[(r + 4) >> 2] = 1);
                      }
                      return (u[r >> 2] = 0), void (u[(r + 4) >> 2] = 2);
                    }
                    if ((b(2, e), (a = d()) != a))
                      return (
                        (u[r >> 2] = 2143289344), void (u[(r + 4) >> 2] = 0)
                      );
                    (u[(r + 4) >> 2] = 1073741824 & e ? 2 : 1),
                      (u[r >> 2] = 536870912 + (-1073741825 & e));
                  }
                  function Kr(r) {
                    var e = 0,
                      a = 0,
                      n = 0;
                    r: if (
                      8 & (a = u[(r + 24) >> 2]) &&
                      ((e = 1), 5120 != (7168 & a)) &&
                      ((e = 0),
                      (0 | (n = u[(r + 560) >> 2])) !=
                        (0 | (a = u[(r + 556) >> 2])))
                    )
                      for (
                        n = (r = (n - a) >> 2) >>> 0 <= 1 ? 1 : r, r = 0;
                        ;

                      ) {
                        if (
                          (e =
                            (131072 !=
                              (196608 &
                                (e = u[(u[(a + (r << 2)) >> 2] + 24) >> 2]))) &
                            (40960 == (57344 & e)))
                        )
                          break r;
                        if ((0 | n) == (0 | (r = (r + 1) | 0))) break;
                      }
                    return e;
                  }
                  function qr(r) {
                    var e = 0,
                      a = w(0);
                    return (
                      (e = 2143289344),
                      (w(g(r)) == w(1 / 0)) | (r != r) ||
                        ((e = 2139156720),
                        ((r < w(10842021724855044e-35)) &
                          (r > w(-10842021724855044e-35))) |
                          (r == w(0))) ||
                        (b(2, (l(r), (-2147483648 & c(2)) | 1602224127)),
                        (a = d()),
                        l(
                          r > w(0xffffff0000000000) ||
                            r < w(-0xffffff0000000000)
                            ? a
                            : r
                        ),
                        (e = (c(2) - 536870912) | 1073741824)),
                      e
                    );
                  }
                  function $r(r) {
                    var e = 0,
                      a = w(0);
                    return (
                      (e = 2143289344),
                      (w(g(r)) == w(1 / 0)) | (r != r) ||
                        ((e = 2140081935),
                        ((r < w(10842021724855044e-35)) &
                          (r > w(-10842021724855044e-35))) |
                          (r == w(0))) ||
                        (b(2, (l(r), (-2147483648 & c(2)) | 1610612735)),
                        (a = d()),
                        l(
                          r > w(0x1fffffe0000000000) ||
                            r < w(-0x1fffffe0000000000)
                            ? a
                            : r
                        ),
                        (e = (c(2) - 536870912) | 0)),
                      e
                    );
                  }
                  function re(r, e, a) {
                    var n = 0,
                      i = 0,
                      t = 0;
                    if (e)
                      for (
                        ;
                        (r =
                          (se((n = vr(r, e, 10)), (i = nr), 246, 0) + r) | 0),
                          (f[0 | (a = (a - 1) | 0)] = 48 | r),
                          (t = e >>> 0 > 9),
                          (r = n),
                          (e = i),
                          t;

                      );
                    else n = r;
                    if (n)
                      for (
                        ;
                        (r = ((n >>> 0) / 10) | 0),
                          (f[0 | (a = (a - 1) | 0)] = (y(r, 246) + n) | 48),
                          (e = n >>> 0 > 9),
                          (n = r),
                          e;

                      );
                    return a;
                  }
                  function ee(r, e) {
                    var a = 0,
                      n = 0;
                    r: {
                      e: if (
                        (0 | (a = u[(r + 556) >> 2])) !=
                        (0 | (n = u[(r + 560) >> 2]))
                      ) {
                        for (;;) {
                          if (u[a >> 2] == (0 | e)) break e;
                          if ((0 | n) == (0 | (a = (a + 4) | 0))) break;
                        }
                        break r;
                      }
                      if ((0 | a) != (0 | n))
                        return (
                          yr(a, (e = (a + 4) | 0), (n - e) | 0),
                          (u[(r + 560) >> 2] = n - 4),
                          1
                        );
                    }
                    return 0;
                  }
                  function ae(r, e) {
                    var a,
                      n,
                      i = 0;
                    if (
                      (s(+r),
                      (a = 0 | c(1)),
                      (n = 0 | c(0)),
                      2047 != (0 | (i = (a >>> 20) & 2047)))
                    ) {
                      if (!i)
                        return (
                          0 == r
                            ? (i = 0)
                            : ((r = ae(0x10000000000000000 * r, e)),
                              (i = (u[e >> 2] + -64) | 0)),
                          (u[e >> 2] = i),
                          r
                        );
                      (u[e >> 2] = i - 1022),
                        b(0, 0 | n),
                        b(1, (-2146435073 & a) | 1071644672),
                        (r = +A());
                    }
                    return r;
                  }
                  function ne(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(184 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(184 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function ie(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(192 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(192 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function te(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(176 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(176 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function fe(r, e) {
                    var a = 0,
                      n = 0,
                      i = 0;
                    r: if (u[((a = (r + 24) | 0) + 16) >> 2] != (0 | e))
                      for (n = 0 | ea[9](a), i = e, u[(n + 16) >> 2] = i; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function oe(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(56 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(56 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function ue(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(92 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(92 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function ce(r, e, a) {
                    var n = 0;
                    r: if (
                      u[(20 + (((n = (r + 24) | 0) + (e << 2)) | 0)) >> 2] !=
                      (0 | a)
                    )
                      for (u[(20 + (((e << 2) + n) | 0)) >> 2] = a; ; ) {
                        if (4 & (e = h[(r + 4) | 0])) break r;
                        if (
                          ((f[(r + 4) | 0] = 4 | e),
                          (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          !(r = u[(r + 552) >> 2]))
                        )
                          break;
                      }
                  }
                  function be(r, e) {
                    var a,
                      n = w(0);
                    return (
                      (r = (r + 80) | 0),
                      (a = u[(4176 + (e << 2)) >> 2]),
                      (2139156720 ==
                        (0 |
                          (r =
                            2 != (-2 & e)
                              ? Yr(r, a, 2143289344)
                              : Xr(r, 5, a, 2143289344)))) |
                      (2140081935 == (0 | r)) |
                      (2141891242 == (0 | r))
                        ? (r = 1)
                        : (b(2, r), (r = (n = d()) == n)),
                      r
                    );
                  }
                  function Ae(r, e) {
                    var a,
                      n = w(0);
                    return (
                      (r = (r + 80) | 0),
                      (a = u[(4160 + (e << 2)) >> 2]),
                      (2139156720 ==
                        (0 |
                          (r =
                            2 != (-2 & e)
                              ? Yr(r, a, 2143289344)
                              : Xr(r, 4, a, 2143289344)))) |
                      (2140081935 == (0 | r)) |
                      (2141891242 == (0 | r))
                        ? (r = 1)
                        : (b(2, r), (r = (n = d()) == n)),
                      r
                    );
                  }
                  function se(r, e, a, n) {
                    var i,
                      t,
                      f,
                      o,
                      u = 0,
                      c = 0;
                    return (
                      (o = y((u = (a >>> 16) | 0), (c = (r >>> 16) | 0))),
                      (u =
                        ((65535 &
                          (c =
                            ((((f = y((i = 65535 & a), (t = 65535 & r))) >>>
                              16) |
                              0) +
                              y(c, i)) |
                            0)) +
                          y(u, t)) |
                        0),
                      (nr =
                        (((y(e, a) + o) | 0) +
                          y(r, n) +
                          (c >>> 16) +
                          (u >>> 16)) |
                        0),
                      (65535 & f) | (u << 16)
                    );
                  }
                  function ke(r, e) {
                    var a,
                      n,
                      i = 0;
                    (ar = a = (ar - 16) | 0),
                      (n = -17 & (i = h[(r + 4) | 0])),
                      (f[(r + 4) | 0] = n);
                    r: {
                      if (e) {
                        if (u[(r + 560) >> 2] != u[(r + 556) >> 2]) break r;
                        i = 8 | n;
                      } else i &= 231;
                      return (
                        (u[(r + 8) >> 2] = e),
                        (f[(r + 4) | 0] = i),
                        void (ar = (a + 16) | 0)
                      );
                    }
                    (u[a >> 2] = 3999), Or(r, a), Qe(), k();
                  }
                  function le(r, e, a, n, i) {
                    var t;
                    if (
                      ((ar = t = (ar - 256) | 0),
                      !((73728 & i) | ((0 | a) <= (0 | n))))
                    ) {
                      if (
                        (Gr(
                          t,
                          255 & e,
                          (a = (n = (a - n) | 0) >>> 0 < 256) ? n : 256
                        ),
                        !a)
                      )
                        for (
                          ;
                          Ur(r, t, 256), (n = (n - 256) | 0) >>> 0 > 255;

                        );
                      Ur(r, t, n);
                    }
                    ar = (t + 256) | 0;
                  }
                  function de(r, e, a) {
                    var n = 0,
                      i = w(0);
                    (2 == (-2 & a) &&
                      ((i = N[(n = (e - -64) | 0) >> 2]),
                      (2139156720 == (0 | (n = u[n >> 2]))) |
                        (2140081935 == (0 | n)) |
                        (2141891242 == (0 | n)) |
                        (i == i))) ||
                      (n =
                        u[
                          (44 + (((u[(4176 + (a << 2)) >> 2] << 2) + e) | 0)) >>
                            2
                        ]),
                      Jr(r, n);
                  }
                  function he(r, e, a) {
                    var n = 0,
                      i = w(0);
                    (2 == (-2 & a) &&
                      (2139156720 == (0 | (n = u[(e + 60) >> 2]))) |
                        (2140081935 == (0 | n)) |
                        (2141891242 == (0 | n)) |
                        ((i = N[(e + 60) >> 2]) == i)) ||
                      (n =
                        u[
                          (44 + (((u[(4160 + (a << 2)) >> 2] << 2) + e) | 0)) >>
                            2
                        ]),
                      Jr(r, n);
                  }
                  function ve(r) {
                    var e = 0,
                      a = 0,
                      n = 0;
                    for (n = u[r >> 2]; ze((a = f[0 | n])); )
                      (n = (n + 1) | 0),
                        (u[r >> 2] = n),
                        e >>> 0 <= 214748364
                          ? (e =
                              (0 | (a = (a - 48) | 0)) >
                              (2147483647 ^ (e = y(e, 10)))
                                ? -1
                                : (a + e) | 0)
                          : (e = -1);
                    return e;
                  }
                  function pe(r, e, a, n) {
                    var i = 0;
                    (u[(r + 12) >> 2] = 0), (u[(r + 16) >> 2] = n);
                    r: {
                      if (e) {
                        if (e >>> 0 >= 1073741824) break r;
                        i = we(e << 2);
                      }
                      return (
                        (u[r >> 2] = i),
                        (a = ((a << 2) + i) | 0),
                        (u[(r + 8) >> 2] = a),
                        (u[(r + 12) >> 2] = (e << 2) + i),
                        (u[(r + 4) >> 2] = a),
                        r
                      );
                    }
                    ra(), k();
                  }
                  function Ne(r) {
                    var e = 0;
                    return (
                      (e = u[(r + 72) >> 2]),
                      (u[(r + 72) >> 2] = (e - 1) | e),
                      8 & (e = u[r >> 2])
                        ? ((u[r >> 2] = 32 | e), -1)
                        : ((u[(r + 4) >> 2] = 0),
                          (u[(r + 8) >> 2] = 0),
                          (e = u[(r + 44) >> 2]),
                          (u[(r + 28) >> 2] = e),
                          (u[(r + 20) >> 2] = e),
                          (u[(r + 16) >> 2] = e + u[(r + 48) >> 2]),
                          0)
                    );
                  }
                  function me(r, e, a, n) {
                    (e |= 0), (a |= 0), (n |= 0);
                    var i = 0;
                    (i = u[(r |= 0) >> 2]),
                      (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                      1 & r && (i = u[(i + u[e >> 2]) >> 2]),
                      ea[0 | i](e, a, n);
                  }
                  function ye(r, e, a) {
                    (e |= 0), (a |= 0);
                    var n = 0;
                    return (
                      (n = u[(r |= 0) >> 2]),
                      (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                      1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                      0 | ea[0 | n](e, a)
                    );
                  }
                  function we(r) {
                    var e = 0;
                    r = r || 1;
                    r: {
                      for (;;) {
                        if ((e = ur(r))) break r;
                        if (!(e = u[2006])) break;
                        ea[0 | e]();
                      }
                      B(), k();
                    }
                    return e;
                  }
                  function ge(r, e, a) {
                    (e |= 0), (a |= 0);
                    var n = 0;
                    (n = u[(r |= 0) >> 2]),
                      (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                      1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                      ea[0 | n](e, a);
                  }
                  function Ee(r, e) {
                    e |= 0;
                    var a = 0;
                    return (
                      (a = u[(r |= 0) >> 2]),
                      (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                      1 & r && (a = u[(a + u[e >> 2]) >> 2]),
                      0 | ea[0 | a](e)
                    );
                  }
                  function Ge(r, e) {
                    return (
                      l(r),
                      (2147483647 & c(2)) >>> 0 <= 2139095040
                        ? (l(e),
                          (2147483647 & c(2)) >>> 0 > 2139095040
                            ? r
                            : w(Z(r, e)))
                        : e
                    );
                  }
                  function Ze(r, e) {
                    return (
                      l(r),
                      (2147483647 & c(2)) >>> 0 <= 2139095040
                        ? (l(e),
                          (2147483647 & c(2)) >>> 0 > 2139095040
                            ? r
                            : w(G(r, e)))
                        : e
                    );
                  }
                  function Re(r, e) {
                    (r |= 0), (e |= 0);
                    var a;
                    return (
                      (ar = a = (ar - 16) | 0),
                      (u[(a + 8) >> 2] = e),
                      (r = 0 | ea[0 | r]((a + 8) | 0)),
                      O(u[(a + 8) >> 2]),
                      (ar = (a + 16) | 0),
                      0 | r
                    );
                  }
                  function We(r, e) {
                    return r
                      ? ((57216 == (-128 & e)) | (e >>> 0 <= 127)
                          ? ((f[0 | r] = e), (r = 1))
                          : ((u[1745] = 25), (r = -1)),
                        r)
                      : 0;
                  }
                  function Ve(r, e) {
                    var a, n;
                    (a = we(4)),
                      (u[a >> 2] = e),
                      (n = we(4)),
                      (u[n >> 2] = e),
                      _(
                        6891,
                        0 | r,
                        6954,
                        4566,
                        191,
                        0 | a,
                        6954,
                        4570,
                        192,
                        0 | n
                      );
                  }
                  function Te(r, e) {
                    var a, n;
                    (a = we(4)),
                      (u[a >> 2] = e),
                      (n = we(4)),
                      (u[n >> 2] = e),
                      _(
                        6921,
                        0 | r,
                        6954,
                        4566,
                        189,
                        0 | a,
                        6954,
                        4570,
                        190,
                        0 | n
                      );
                  }
                  function Ie(r, e) {
                    var a = 0;
                    1 & f[6900]
                      ? (a = u[1724])
                      : ((a = 0 | C(1, 4336)), (f[6900] = 1), (u[1724] = a)),
                      j(0 | a, 0 | r, 0 | e, 0);
                  }
                  function Be(r, e) {
                    e |= 0;
                    var a = 0;
                    (a = u[(r |= 0) >> 2]),
                      (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                      1 & r && (a = u[(a + u[e >> 2]) >> 2]),
                      ea[0 | a](e);
                  }
                  function Oe(r) {
                    return (
                      (u[(r |= 0) >> 2] = 4444),
                      h[(r + 4) | 0] && Ie(u[(r + 8) >> 2], 1758),
                      O(u[(r + 8) >> 2]),
                      0 | r
                    );
                  }
                  function _e(r) {
                    return (
                      (u[(r |= 0) >> 2] = 4324),
                      h[(r + 4) | 0] && Ie(u[(r + 8) >> 2], 1758),
                      O(u[(r + 8) >> 2]),
                      0 | r
                    );
                  }
                  function Le(r, e, a) {
                    return Ae(r, e)
                      ? Lr(r, e, a)
                      : ((a = _r(r, e, a)) == a && (a = w(-a)), a);
                  }
                  function Xe(r) {
                    var e = 0;
                    (r |= 0) &&
                      ((e = u[r >> 2]) && Zr(e),
                      (u[1716] = u[1716] - 1),
                      Zr(r));
                  }
                  function Fe(r, e, a) {
                    (e |= 0), (a = +a), (m[(u[(r |= 0) >> 2] + e) >> 3] = a);
                  }
                  function Ce(r, e) {
                    return (e |= 0), +m[(u[(r |= 0) >> 2] + e) >> 3];
                  }
                  function Pe(r) {
                    (r |= 0) && ea[u[(u[r >> 2] + 4) >> 2]](r);
                  }
                  function Ue(r) {
                    return r ? ((u[1745] = r), -1) : 0;
                  }
                  function He(r, e, a) {
                    return w(Sr(r, e, a) + Mr(r, e, a));
                  }
                  function Me(r, e, a, n) {
                    z(0 | r, 0 | e, 8, 0, 0 | a, -1, 0 | n);
                  }
                  function Se(r, e) {
                    (e |= 0), ea[u[(r |= 0) >> 2]](e);
                  }
                  function Ye(r, e) {
                    (e |= 0), ea[0 | (r |= 0)](e);
                  }
                  function De(r, e, a) {
                    return Rr(r, e, a, 2, 3);
                  }
                  function je(r) {
                    return 0 | ea[0 | (r |= 0)]();
                  }
                  function Qe() {
                    ea[u[1454]](), ra(), k();
                  }
                  function ze(r) {
                    return (r - 48) >>> 0 < 10;
                  }
                  function xe(r) {
                    (r |= 0) && Zr(r);
                  }
                  function Je(r) {
                    return 0 | (r |= 0);
                  }
                  function Ke(r) {
                    f[((r |= 0) + 4) | 0] = 1;
                  }
                  function qe(r) {
                    k();
                  }
                  function $e() {
                    ra(), k();
                  }
                  function ra() {
                    B(), k();
                  }
                  i(
                    (e = h),
                    1024,
                    "T25seSBsZWFmIG5vZGVzIHdpdGggY3VzdG9tIG1lYXN1cmUgZnVuY3Rpb25zc2hvdWxkIG1hbnVhbGx5IG1hcmsgdGhlbXNlbHZlcyBhcyBkaXJ0eQBpc0RpcnR5AG1hcmtEaXJ0eQBkZXN0cm95AHNldERpc3BsYXkAZ2V0RGlzcGxheQBzZXRGbGV4AC0rICAgMFgweAAtMFgrMFggMFgtMHgrMHggMHgAc2V0RmxleEdyb3cAZ2V0RmxleEdyb3cAc2V0T3ZlcmZsb3cAZ2V0T3ZlcmZsb3cAY2FsY3VsYXRlTGF5b3V0AGdldENvbXB1dGVkTGF5b3V0AHVuc2lnbmVkIHNob3J0AGdldENoaWxkQ291bnQAdW5zaWduZWQgaW50AHNldEp1c3RpZnlDb250ZW50AGdldEp1c3RpZnlDb250ZW50AHNldEFsaWduQ29udGVudABnZXRBbGlnbkNvbnRlbnQAZ2V0UGFyZW50AGltcGxlbWVudABzZXRNYXhIZWlnaHRQZXJjZW50AHNldEhlaWdodFBlcmNlbnQAc2V0TWluSGVpZ2h0UGVyY2VudABzZXRGbGV4QmFzaXNQZXJjZW50AHNldFBvc2l0aW9uUGVyY2VudABzZXRNYXJnaW5QZXJjZW50AHNldE1heFdpZHRoUGVyY2VudABzZXRXaWR0aFBlcmNlbnQAc2V0TWluV2lkdGhQZXJjZW50AHNldFBhZGRpbmdQZXJjZW50AGNyZWF0ZURlZmF1bHQAdW5pdAByaWdodABoZWlnaHQAc2V0TWF4SGVpZ2h0AGdldE1heEhlaWdodABzZXRIZWlnaHQAZ2V0SGVpZ2h0AHNldE1pbkhlaWdodABnZXRNaW5IZWlnaHQAZ2V0Q29tcHV0ZWRIZWlnaHQAZ2V0Q29tcHV0ZWRSaWdodABsZWZ0AGdldENvbXB1dGVkTGVmdAByZXNldABfX2Rlc3RydWN0AGZsb2F0AHVpbnQ2NF90AHVzZVdlYkRlZmF1bHRzAHNldFVzZVdlYkRlZmF1bHRzAHNldEFsaWduSXRlbXMAZ2V0QWxpZ25JdGVtcwBzZXRGbGV4QmFzaXMAZ2V0RmxleEJhc2lzAENhbm5vdCBnZXQgbGF5b3V0IHByb3BlcnRpZXMgb2YgbXVsdGktZWRnZSBzaG9ydGhhbmRzAHVzZUxlZ2FjeVN0cmV0Y2hCZWhhdmlvdXIAc2V0VXNlTGVnYWN5U3RyZXRjaEJlaGF2aW91cgBzZXRQb2ludFNjYWxlRmFjdG9yAE1lYXN1cmVDYWxsYmFja1dyYXBwZXIARGlydGllZENhbGxiYWNrV3JhcHBlcgBDYW5ub3QgcmVzZXQgYSBub2RlIHN0aWxsIGF0dGFjaGVkIHRvIGEgb3duZXIAc2V0Qm9yZGVyAGdldEJvcmRlcgBnZXRDb21wdXRlZEJvcmRlcgB1bnNpZ25lZCBjaGFyAHRvcABnZXRDb21wdXRlZFRvcABzZXRGbGV4V3JhcABnZXRGbGV4V3JhcABzZXRHYXAAZ2V0R2FwACVwAHNldEhlaWdodEF1dG8Ac2V0TWFyZ2luQXV0bwBzZXRXaWR0aEF1dG8AU2NhbGUgZmFjdG9yIHNob3VsZCBub3QgYmUgbGVzcyB0aGFuIHplcm8Ac2V0QXNwZWN0UmF0aW8AZ2V0QXNwZWN0UmF0aW8Ac2V0UG9zaXRpb24AZ2V0UG9zaXRpb24Abm90aWZ5T25EZXN0cnVjdGlvbgBzZXRGbGV4RGlyZWN0aW9uAGdldEZsZXhEaXJlY3Rpb24Ac2V0TWFyZ2luAGdldE1hcmdpbgBnZXRDb21wdXRlZE1hcmdpbgBuYW4AYm90dG9tAGdldENvbXB1dGVkQm90dG9tAGJvb2wAZW1zY3JpcHRlbjo6dmFsAHNldEZsZXhTaHJpbmsAZ2V0RmxleFNocmluawBNZWFzdXJlQ2FsbGJhY2sARGlydGllZENhbGxiYWNrAHdpZHRoAHNldE1heFdpZHRoAGdldE1heFdpZHRoAHNldFdpZHRoAGdldFdpZHRoAHNldE1pbldpZHRoAGdldE1pbldpZHRoAGdldENvbXB1dGVkV2lkdGgAdW5zaWduZWQgbG9uZwBzdGQ6OndzdHJpbmcAc3RkOjpzdHJpbmcAc3RkOjp1MTZzdHJpbmcAc3RkOjp1MzJzdHJpbmcAc2V0UGFkZGluZwBnZXRQYWRkaW5nAGdldENvbXB1dGVkUGFkZGluZwBjcmVhdGVXaXRoQ29uZmlnAGluZgBzZXRBbGlnblNlbGYAZ2V0QWxpZ25TZWxmAFNpemUAdmFsdWUAVmFsdWUAY3JlYXRlAG1lYXN1cmUAc2V0UG9zaXRpb25UeXBlAGdldFBvc2l0aW9uVHlwZQBpc1JlZmVyZW5jZUJhc2VsaW5lAHNldElzUmVmZXJlbmNlQmFzZWxpbmUAY29weVN0eWxlAGRvdWJsZQBOb2RlAGV4dGVuZABpbnNlcnRDaGlsZABnZXRDaGlsZAByZW1vdmVDaGlsZAB2b2lkAGF2YWlsYWJsZUhlaWdodCBpcyBpbmRlZmluaXRlIHNvIGhlaWdodE1lYXN1cmVNb2RlIG11c3QgYmUgWUdNZWFzdXJlTW9kZVVuZGVmaW5lZABhdmFpbGFibGVXaWR0aCBpcyBpbmRlZmluaXRlIHNvIHdpZHRoTWVhc3VyZU1vZGUgbXVzdCBiZSBZR01lYXN1cmVNb2RlVW5kZWZpbmVkAHNldEV4cGVyaW1lbnRhbEZlYXR1cmVFbmFibGVkAGlzRXhwZXJpbWVudGFsRmVhdHVyZUVuYWJsZWQAZGlydGllZABDYW5ub3QgcmVzZXQgYSBub2RlIHdoaWNoIHN0aWxsIGhhcyBjaGlsZHJlbiBhdHRhY2hlZAB1bnNldE1lYXN1cmVGdW5jAHVuc2V0RGlydGllZEZ1bmMARXhwZWN0IGN1c3RvbSBiYXNlbGluZSBmdW5jdGlvbiB0byBub3QgcmV0dXJuIE5hTgBOQU4ASU5GAGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHNob3J0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBzaG9ydD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1bnNpZ25lZCBpbnQ+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGZsb2F0PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50OF90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQ4X3Q+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzxpbnQxNl90PgBlbXNjcmlwdGVuOjptZW1vcnlfdmlldzx1aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8aW50MzJfdD4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8Y2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8dW5zaWduZWQgY2hhcj4Ac3RkOjpiYXNpY19zdHJpbmc8dW5zaWduZWQgY2hhcj4AZW1zY3JpcHRlbjo6bWVtb3J5X3ZpZXc8c2lnbmVkIGNoYXI+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PHVuc2lnbmVkIGxvbmc+AGVtc2NyaXB0ZW46Om1lbW9yeV92aWV3PGRvdWJsZT4AQ2hpbGQgYWxyZWFkeSBoYXMgYSBvd25lciwgaXQgbXVzdCBiZSByZW1vdmVkIGZpcnN0LgBDYW5ub3Qgc2V0IG1lYXN1cmUgZnVuY3Rpb246IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAENhbm5vdCBhZGQgY2hpbGQ6IE5vZGVzIHdpdGggbWVhc3VyZSBmdW5jdGlvbnMgY2Fubm90IGhhdmUgY2hpbGRyZW4uAChudWxsKQAlcwoAAAEAAAADAAAAAAAAAAIAAAADAAAAAQAAAAIAAAAAAAAAAQAAAAE="
                  ),
                    i(e, 4210, "wH8AAAAAAADAfwMAAABpaQB2AHZp"),
                    i(
                      e,
                      4240,
                      "6xoAAOkaAAApGwAAIxsAACkbAAAjGwAAaWlpZmlmaQAcGwAA7BoAAHZpaQDtGgAAMBsAAGlpaQ=="
                    ),
                    i(e, 4304, "wgAAAMMAAADE"),
                    i(e, 4324, "wgAAAMUAAADGAAAAHBs="),
                    i(
                      e,
                      4352,
                      "6xoAACkbAAAjGwAAKRsAACMbAAAwGwAAKxsAADAbAABpaWlpAAAAABwbAAABGwAAHBsAAAMbAAAEGwAAMBs="
                    ),
                    i(e, 4424, "xwAAAMgAAADJ"),
                    i(e, 4444, "xwAAAMoAAADGAAAABxsAABwbAAAHGw=="),
                    i(
                      e,
                      4480,
                      "HBsAAAcbAAAjGwAAHRsAAHZpaWlpAAAAHBsAAAcbAAApGwAAdmlpZgAAAAAcGwAABxsAAB0bAAB2aWlpAAAAAB0bAAAIGwAAIxsAAB0bAAAHGwAAaQBkaWkAdmlpZAAADBsAAAwbAAAHGwAAHBsAAAwbAAAcGwAADBsAAAsbAAAcGwAADBsAACMbAAAAAAAAHBsAAAwbAAAjGwAAKhsAAHZpaWlkAAAAHBsAAAwbAAAqGwAAIxsAAA0bAAAKGwAADRsAACMbAAAKGwAADRsAACobAAANGwAAKhsAAA0bAAAjGwAAZGlpaQAAAAApGwAADBsAACMbAABmaWlpAAAAABwbAAAMGwAADBsAACQbAAAcGwAADBsAAAwbAAAkGwAADRsAAAwbAAAMGwAADBsAAAwbAAAkGwAAHRsAAAwbAAAcGwAADBsAAB0bAAAcGwAADBsAAOkaAAAcGwAADBsAAAEbAAAdGwAADRsAAAAAAAAcGwAADBsAACobAAAqGwAAIxsAAHZpaWRkaQAACRsAAA0b"
                    ),
                    i(
                      e,
                      4896,
                      "GQAKABkZGQAAAAAFAAAAAAAACQAAAAALAAAAAAAAAAAZABEKGRkZAwoHAAEACQsYAAAJBgsAAAsABhkAAAAZGRk="
                    ),
                    i(e, 4977, "DgAAAAAAAAAAGQAKDRkZGQANAAACAAkOAAAACQAOAAAO"),
                    i(e, 5035, "DA=="),
                    i(e, 5047, "EwAAAAATAAAAAAkMAAAAAAAMAAAM"),
                    i(e, 5093, "EA=="),
                    i(e, 5105, "DwAAAAQPAAAAAAkQAAAAAAAQAAAQ"),
                    i(e, 5151, "Eg=="),
                    i(e, 5163, "EQAAAAARAAAAAAkSAAAAAAASAAASAAAaAAAAGhoa"),
                    i(e, 5218, "GgAAABoaGgAAAAAAAAk="),
                    i(e, 5267, "FA=="),
                    i(e, 5279, "FwAAAAAXAAAAAAkUAAAAAAAUAAAU"),
                    i(e, 5325, "Fg=="),
                    i(
                      e,
                      5337,
                      "FQAAAAAVAAAAAAkWAAAAAAAWAAAWAAAwMTIzNDU2Nzg5QUJDREVG"
                    ),
                    i(e, 5412, "0A=="),
                    i(e, 5452, "//////////8="),
                    i(e, 5520, "YB8BAAAAAAAF"),
                    i(e, 5540, "yw=="),
                    i(e, 5564, "zAAAAM0AAABEGw=="),
                    i(e, 5588, "Ag=="),
                    i(e, 5604, "//////////8="),
                    i(e, 5672, "BQ=="),
                    i(e, 5684, "zg=="),
                    i(e, 5708, "zAAAAM8AAABYGwAAAAQ="),
                    i(e, 5732, "AQ=="),
                    i(e, 5748, "/////wo="),
                    i(e, 5816, "0Q==");
                  var ea = (function (r) {
                    return (
                      (r.set = function (r, e) {
                        this[r] = e;
                      }),
                      (r.get = function (r) {
                        return this[r];
                      }),
                      r
                    );
                  })([
                    null,
                    function (r, e, a, n, i) {
                      return (
                        (n |= 0),
                        (i |= 0),
                        (a |= 0) && 5 != (0 | a)
                          ? 0 | De(5672, n, i)
                          : 0 | De(5528, n, i)
                      );
                    },
                    function (r, e, a, n, i, t) {
                      (r |= 0),
                        (e = +e),
                        (a |= 0),
                        (n |= 0),
                        (i |= 0),
                        (t |= 0);
                      var o,
                        b = 0,
                        A = 0,
                        k = 0,
                        l = 0,
                        d = 0,
                        v = 0,
                        p = 0,
                        N = 0,
                        m = 0,
                        w = 0,
                        E = 0,
                        G = 0,
                        Z = 0,
                        R = 0,
                        W = 0,
                        V = 0,
                        T = 0,
                        I = 0;
                      (ar = o = (ar - 560) | 0),
                        (u[(o + 44) >> 2] = 0),
                        s(+e),
                        (b = 0 | c(1)),
                        c(0),
                        (0 | b) < 0
                          ? ((G = 1),
                            (T = 1176),
                            s(+(e = -e)),
                            (b = 0 | c(1)),
                            c(0))
                          : 2048 & i
                          ? ((G = 1), (T = 1179))
                          : ((T = (G = 1 & i) ? 1182 : 1177), (I = !G));
                      r: if (2146435072 != (2146435072 & b)) {
                        R = (o + 16) | 0;
                        e: {
                          a: {
                            n: {
                              if (((e = ae(e, (o + 44) | 0)), 0 != (e += e))) {
                                if (
                                  ((b = u[(o + 44) >> 2]),
                                  (u[(o + 44) >> 2] = b - 1),
                                  97 != (0 | (W = 32 | t)))
                                )
                                  break n;
                                break e;
                              }
                              if (97 == (0 | (W = 32 | t))) break e;
                              (d = u[(o + 44) >> 2]), (v = (0 | n) < 0 ? 6 : n);
                              break a;
                            }
                            (d = (b - 29) | 0),
                              (u[(o + 44) >> 2] = d),
                              (e *= 268435456),
                              (v = (0 | n) < 0 ? 6 : n);
                          }
                          for (
                            A = w =
                              (((o + 48) | 0) + ((0 | d) >= 0 ? 288 : 0)) | 0;
                            (n = (e < 4294967296) & (e >= 0) ? ~~e >>> 0 : 0),
                              (u[A >> 2] = n),
                              (A = (A + 4) | 0),
                              0 != (e = 1e9 * (e - +(n >>> 0)));

                          );
                          if ((0 | d) <= 0) (n = d), (b = A), (k = w);
                          else
                            for (k = w, n = d; ; ) {
                              if (
                                ((N = (0 | n) >= 29 ? 29 : n),
                                !(k >>> 0 > (b = (A - 4) | 0) >>> 0))
                              ) {
                                for (
                                  n = 0;
                                  (l = u[b >> 2]),
                                    (V = n),
                                    (n = 31 & N),
                                    (63 & N) >>> 0 >= 32
                                      ? ((p = l << n), (n = 0))
                                      : ((p =
                                          ((1 << n) - 1) & (l >>> (32 - n))),
                                        (n = l << n)),
                                    (l = (p + m) | 0),
                                    (l =
                                      (se(
                                        (n = vr(
                                          (V = (V + n) | 0),
                                          n >>> 0 > V >>> 0 ? (l + 1) | 0 : l,
                                          1e9
                                        )),
                                        nr,
                                        -1e9,
                                        0
                                      ) +
                                        V) |
                                      0),
                                    (u[b >> 2] = l),
                                    k >>> 0 <= (b = (b - 4) | 0) >>> 0;

                                );
                                n && (u[(k = (k - 4) | 0) >> 2] = n);
                              }
                              for (
                                ;
                                k >>> 0 < (b = A) >>> 0 &&
                                !u[(A = (b - 4) | 0) >> 2];

                              );
                              if (
                                ((n = (u[(o + 44) >> 2] - N) | 0),
                                (u[(o + 44) >> 2] = n),
                                (A = b),
                                !((0 | n) > 0))
                              )
                                break;
                            }
                          if ((0 | n) < 0)
                            for (
                              Z = (1 + ((((v + 25) >>> 0) / 9) | 0)) | 0,
                                m = 102 == (0 | W);
                              ;

                            ) {
                              if (
                                ((p = (0 | (n = (0 - n) | 0)) >= 9 ? 9 : n),
                                b >>> 0 <= k >>> 0)
                              )
                                A = u[k >> 2];
                              else {
                                for (
                                  N = (1e9 >>> p) | 0,
                                    l = (-1 << p) ^ -1,
                                    n = 0,
                                    A = k;
                                  (V = n),
                                    (n = u[A >> 2]),
                                    (u[A >> 2] = V + ((n >>> p) | 0)),
                                    (n = y(N, n & l)),
                                    (A = (A + 4) | 0) >>> 0 < b >>> 0;

                                );
                                (A = u[k >> 2]),
                                  n && ((u[b >> 2] = n), (b = (b + 4) | 0));
                              }
                              if (
                                ((n = (p + u[(o + 44) >> 2]) | 0),
                                (u[(o + 44) >> 2] = n),
                                (k = ((!A << 2) + k) | 0),
                                (b =
                                  (b - (A = m ? w : k)) >> 2 > (0 | Z)
                                    ? (A + (Z << 2)) | 0
                                    : b),
                                !((0 | n) < 0))
                              )
                                break;
                            }
                          if (
                            ((n = 0),
                            !(
                              b >>> 0 <= k >>> 0 ||
                              ((n = y((w - k) >> 2, 9)),
                              (A = 10),
                              (l = u[k >> 2]),
                              l >>> 0 < 10)
                            ))
                          )
                            for (
                              ;
                              (n = (n + 1) | 0),
                                l >>> 0 >= (A = y(A, 10)) >>> 0;

                            );
                          if (
                            (0 |
                              (A =
                                (((v - (102 != (0 | W) ? n : 0)) | 0) -
                                  ((103 == (0 | W)) & (0 != (0 | v)))) |
                                0)) <
                            ((y((b - w) >> 2, 9) - 9) | 0)
                          ) {
                            if (
                              ((d =
                                (((((((0 | d) < 0 ? 4 : 292) + o) | 0) +
                                  ((l = ((0 | (N = (A + 9216) | 0)) / 9) | 0) <<
                                    2)) |
                                  0) -
                                  4048) |
                                0),
                              (A = 10),
                              (0 | (p = (N + y(l, -9)) | 0)) <= 7)
                            )
                              for (
                                ;
                                (A = y(A, 10)), 8 != (0 | (p = (p + 1) | 0));

                              );
                            if (
                              !(
                                ((0 | (N = u[d >> 2])) ==
                                  (0 |
                                    (m = y(
                                      (Z = ((N >>> 0) / (A >>> 0)) | 0),
                                      A
                                    )))) &
                                ((0 | (l = (d + 4) | 0)) == (0 | b))
                              ) &&
                              ((N = (N - m) | 0),
                              (!(1 & Z) &&
                                ((e = 9007199254740992),
                                !(1 & f[(d - 4) | 0]) |
                                  (1e9 != (0 | A)) |
                                  (k >>> 0 >= d >>> 0))) ||
                                (e = 9007199254740994),
                              (E = (0 | b) == (0 | l) ? 1 : 1.5),
                              (E =
                                (l = (A >>> 1) | 0) >>> 0 > N >>> 0
                                  ? 0.5
                                  : (0 | l) == (0 | N)
                                  ? E
                                  : 1.5),
                              (45 != h[0 | T]) | I || ((E = -E), (e = -e)),
                              (u[d >> 2] = m),
                              e + E != e)
                            ) {
                              if (
                                ((n = (A + m) | 0),
                                (u[d >> 2] = n),
                                n >>> 0 >= 1e9)
                              )
                                for (
                                  ;
                                  (u[d >> 2] = 0),
                                    (d = (d - 4) | 0) >>> 0 < k >>> 0 &&
                                      (u[(k = (k - 4) | 0) >> 2] = 0),
                                    (n = (u[d >> 2] + 1) | 0),
                                    (u[d >> 2] = n),
                                    n >>> 0 > 999999999;

                                );
                              if (
                                ((n = y((w - k) >> 2, 9)),
                                (A = 10),
                                !((l = u[k >> 2]) >>> 0 < 10))
                              )
                                for (
                                  ;
                                  (n = (n + 1) | 0),
                                    l >>> 0 >= (A = y(A, 10)) >>> 0;

                                );
                            }
                            b = b >>> 0 > (A = (d + 4) | 0) >>> 0 ? A : b;
                          }
                          for (
                            ;
                            (l = b),
                              !(N = b >>> 0 <= k >>> 0) &&
                                !u[(b = (l - 4) | 0) >> 2];

                          );
                          if (103 == (0 | W)) {
                            if (
                              ((v =
                                (((b =
                                  ((0 | (A = v || 1)) > (0 | n)) &
                                  ((0 | n) > -5))
                                  ? -1 ^ n
                                  : -1) +
                                  A) |
                                0),
                              (t = ((b ? -1 : -2) + t) | 0),
                              !(d = 8 & i))
                            ) {
                              if (
                                ((b = -9),
                                !(
                                  N ||
                                  ((d = u[(l - 4) >> 2]), !d) ||
                                  ((p = 10), (b = 0), (d >>> 0) % 10 | 0)
                                ))
                              ) {
                                for (
                                  ;
                                  (A = b),
                                    (b = (b + 1) | 0),
                                    !((d >>> 0) % ((p = y(p, 10)) >>> 0) | 0);

                                );
                                b = -1 ^ A;
                              }
                              (A = y((l - w) >> 2, 9)),
                                70 != (-33 & t)
                                  ? ((d = 0),
                                    (v =
                                      (0 |
                                        (b =
                                          (0 |
                                            (b =
                                              (((((n + A) | 0) + b) | 0) - 9) |
                                              0)) >
                                          0
                                            ? b
                                            : 0)) >
                                      (0 | v)
                                        ? v
                                        : b))
                                  : ((d = 0),
                                    (v =
                                      (0 |
                                        (b =
                                          (0 | (b = (((b + A) | 0) - 9) | 0)) >
                                          0
                                            ? b
                                            : 0)) >
                                      (0 | v)
                                        ? v
                                        : b));
                            }
                          } else d = 8 & i;
                          if (
                            ((p = -1),
                            (0 | ((N = d | v) ? 2147483645 : 2147483646)) <
                              (0 | v))
                          )
                            break r;
                          if (
                            ((m = (1 + (((0 != (0 | N)) + v) | 0)) | 0),
                            70 != (0 | (A = -33 & t)))
                          ) {
                            if (
                              ((R -
                                (b = re((((b = n >> 31) ^ n) - b) | 0, 0, R))) |
                                0) <=
                              1
                            )
                              for (
                                ;
                                (f[0 | (b = (b - 1) | 0)] = 48),
                                  ((R - b) | 0) < 2;

                              );
                            if (
                              ((f[0 | (Z = (b - 2) | 0)] = t),
                              (f[(b - 1) | 0] = (0 | n) < 0 ? 45 : 43),
                              (0 | (b = (R - Z) | 0)) > (2147483647 ^ m))
                            )
                              break r;
                          } else {
                            if ((2147483647 ^ m) < (0 | n)) break r;
                            b = (0 | n) > 0 ? n : 0;
                          }
                          if ((0 | (n = (b + m) | 0)) > (2147483647 ^ G))
                            break r;
                          le(r, 32, a, (m = (n + G) | 0), i),
                            Ur(r, T, G),
                            le(r, 48, a, m, 65536 ^ i);
                          a: {
                            n: {
                              i: {
                                if (70 == (0 | A)) {
                                  for (
                                    n = 8 | (t = (o + 16) | 0),
                                      d = 9 | t,
                                      k = A = k >>> 0 > w >>> 0 ? w : k;
                                    ;

                                  ) {
                                    b = re(u[k >> 2], 0, d);
                                    t: if ((0 | A) == (0 | k))
                                      (0 | b) == (0 | d) &&
                                        ((f[(o + 24) | 0] = 48), (b = n));
                                    else {
                                      if ((o + 16) >>> 0 >= b >>> 0) break t;
                                      for (
                                        ;
                                        (f[0 | (b = (b - 1) | 0)] = 48),
                                          (o + 16) >>> 0 < b >>> 0;

                                      );
                                    }
                                    if (
                                      (Ur(r, b, (d - b) | 0),
                                      !(w >>> 0 >= (k = (k + 4) | 0) >>> 0))
                                    )
                                      break;
                                  }
                                  if (
                                    (N && Ur(r, 4146, 1),
                                    ((0 | v) <= 0) | (k >>> 0 >= l >>> 0))
                                  )
                                    break i;
                                  for (;;) {
                                    if (
                                      (b = re(u[k >> 2], 0, d)) >>> 0 >
                                      (o + 16) >>> 0
                                    )
                                      for (
                                        ;
                                        (f[0 | (b = (b - 1) | 0)] = 48),
                                          (o + 16) >>> 0 < b >>> 0;

                                      );
                                    if (
                                      (Ur(r, b, (0 | v) >= 9 ? 9 : v),
                                      (b = (v - 9) | 0),
                                      l >>> 0 <= (k = (k + 4) | 0) >>> 0)
                                    )
                                      break n;
                                    if (((n = (0 | v) > 9), (v = b), !n)) break;
                                  }
                                  break n;
                                }
                                t: if (!((0 | v) < 0))
                                  for (
                                    w = k >>> 0 < l >>> 0 ? l : (k + 4) | 0,
                                      n = 8 | (t = (o + 16) | 0),
                                      l = 9 | t,
                                      A = k;
                                    ;

                                  ) {
                                    (0 | l) ==
                                      (0 | (b = re(u[A >> 2], 0, l))) &&
                                      ((f[(o + 24) | 0] = 48), (b = n));
                                    f: if ((0 | A) == (0 | k))
                                      Ur(r, b, 1),
                                        (b = (b + 1) | 0),
                                        d | v && Ur(r, 4146, 1);
                                    else {
                                      if ((o + 16) >>> 0 >= b >>> 0) break f;
                                      for (
                                        ;
                                        (f[0 | (b = (b - 1) | 0)] = 48),
                                          (o + 16) >>> 0 < b >>> 0;

                                      );
                                    }
                                    if (
                                      (Ur(
                                        r,
                                        b,
                                        (0 | (t = (l - b) | 0)) > (0 | v)
                                          ? v
                                          : t
                                      ),
                                      (v = (v - t) | 0),
                                      w >>> 0 <= (A = (A + 4) | 0) >>> 0)
                                    )
                                      break t;
                                    if (!((0 | v) >= 0)) break;
                                  }
                                le(r, 48, (v + 18) | 0, 18, 0),
                                  Ur(r, Z, (R - Z) | 0);
                                break a;
                              }
                              b = v;
                            }
                            le(r, 48, (b + 9) | 0, 9, 0);
                          }
                          le(r, 32, a, m, 8192 ^ i),
                            (p = (0 | a) < (0 | m) ? m : a);
                          break r;
                        }
                        if (
                          ((d = ((((t << 26) >> 31) & 9) + T) | 0),
                          !(n >>> 0 > 11))
                        ) {
                          for (
                            b = (12 - n) | 0, E = 16;
                            (E *= 16), (b = (b - 1) | 0);

                          );
                          e = 45 != h[0 | d] ? e + E - E : -(E + (-e - E));
                        }
                        for (
                          w = 2 | G,
                            k = 32 & t,
                            (0 | R) ==
                              (0 |
                                (b = re(
                                  (((b = (A = u[(o + 44) >> 2]) >> 31) ^ A) -
                                    b) |
                                    0,
                                  0,
                                  R
                                ))) &&
                              ((f[(o + 15) | 0] = 48), (b = (o + 15) | 0)),
                            f[0 | (v = (b - 2) | 0)] = t + 15,
                            f[(b - 1) | 0] = (0 | A) < 0 ? 45 : 43,
                            b = 8 & i,
                            A = (o + 16) | 0;
                          (t = A),
                            (l = g(e) < 2147483648 ? ~~e : -2147483648),
                            (f[0 | A] = k | h[(l + 5360) | 0]),
                            (!(b | ((0 | n) > 0)) &
                              (0 == (e = 16 * (e - +(0 | l))))) |
                              (1 !=
                                (((A = (t + 1) | 0) - ((o + 16) | 0)) | 0)) ||
                              ((f[(t + 1) | 0] = 46), (A = (t + 2) | 0)),
                            0 != e;

                        );
                        (p = -1),
                          ((2147483645 - (t = ((b = (R - v) | 0) + w) | 0)) |
                            0) <
                            (0 | n) ||
                            (le(
                              r,
                              32,
                              a,
                              (t =
                                ((n =
                                  !n ||
                                  (((k = (A - ((o + 16) | 0)) | 0) - 2) | 0) >=
                                    (0 | n)
                                    ? (k = (A - ((o + 16) | 0)) | 0)
                                    : (n + 2) | 0) +
                                  t) |
                                0),
                              i
                            ),
                            Ur(r, d, w),
                            le(r, 48, a, t, 65536 ^ i),
                            Ur(r, (o + 16) | 0, k),
                            le(r, 48, (n - k) | 0, 0, 0),
                            Ur(r, v, b),
                            le(r, 32, a, t, 8192 ^ i),
                            (p = (0 | a) < (0 | t) ? t : a));
                      } else
                        le(r, 32, a, (b = (G + 3) | 0), -65537 & i),
                          Ur(r, T, G),
                          (n = 32 & t),
                          Ur(
                            r,
                            e != e ? (n ? 2433 : 3330) : n ? 2759 : 3334,
                            3
                          ),
                          le(r, 32, a, b, 8192 ^ i),
                          (p = (0 | a) < (0 | b) ? b : a);
                      return (ar = (o + 560) | 0), 0 | p;
                    },
                    function (r, e) {
                      r |= 0;
                      var a,
                        n,
                        i,
                        t,
                        f,
                        o = 0,
                        c = 0,
                        s = 0,
                        k = 0,
                        l = 0,
                        d = 0,
                        h = 0,
                        v = 0,
                        p = 0,
                        N = 0,
                        y = 0;
                      (o = e |= 0),
                        (e = (u[e >> 2] + 7) & -8),
                        (u[o >> 2] = e + 16),
                        (i = r),
                        (d = u[e >> 2]),
                        (c = u[(e + 4) >> 2]),
                        (n = r = u[(e + 12) >> 2]),
                        (ar = a = (ar - 32) | 0),
                        (l = r &= 2147483647);
                      r: if (
                        (((0 | (s = (r - 1006698496) | 0)) ==
                          (0 | (r = (r - 1140785152) | 0))) &
                          ((e = o = u[(e + 8) >> 2]) >>> 0 < e >>> 0)) |
                        (r >>> 0 > s >>> 0)
                      ) {
                        if (
                          ((e = ((r = o) << 4) | (c >>> 28)),
                          (r = o = (n << 4) | (r >>> 28)),
                          ((134217728 == (0 | (c &= 268435455))) &
                            (0 != (0 | d))) |
                            (c >>> 0 > 134217728))
                        ) {
                          (r = (r + 1073741824) | 0),
                            (r = (e = (e + 1) | 0) ? r : (r + 1) | 0);
                          break r;
                        }
                        if (
                          ((r = (r + 1073741824) | 0),
                          d | (134217728 != (0 | c)))
                        )
                          break r;
                        r =
                          (e = ((c = 1 & e) + e) | 0) >>> 0 < c >>> 0
                            ? (r + 1) | 0
                            : r;
                      } else
                        (
                          !e & (2147418112 == (0 | l))
                            ? !(c | d)
                            : l >>> 0 < 2147418112
                        )
                          ? ((e = 0),
                            (r = 2146435072),
                            l >>> 0 > 1140785151 ||
                              ((r = 0), (N = (l >>> 16) | 0) >>> 0 < 15249) ||
                              ((e = d),
                              (r = c),
                              (l = s = (65535 & n) | 65536),
                              (p = o),
                              (k = o),
                              64 & (h = (N - 15233) | 0)
                                ? ((o = e),
                                  (e = 31 & (s = (h + -64) | 0)),
                                  (63 & s) >>> 0 >= 32
                                    ? ((r = o << e), (k = 0))
                                    : ((r =
                                        (((1 << e) - 1) & (o >>> (32 - e))) |
                                        (r << e)),
                                      (k = o << e)),
                                  (s = r),
                                  (e = 0),
                                  (r = 0))
                                : h &&
                                  ((v = k),
                                  (k = 31 & h),
                                  (63 & h) >>> 0 >= 32
                                    ? ((o = v << k), (k = 0))
                                    : ((o =
                                        (((1 << k) - 1) & (v >>> (32 - k))) |
                                        (s << k)),
                                      (k = v << k)),
                                  (s = o),
                                  (y = k),
                                  (v = e),
                                  (k = 31 & (o = (64 - h) | 0)),
                                  (63 & o) >>> 0 >= 32
                                    ? ((o = 0), (e = (r >>> k) | 0))
                                    : ((o = (r >>> k) | 0),
                                      (e =
                                        ((((1 << k) - 1) & r) << (32 - k)) |
                                        (v >>> k))),
                                  (k = y | e),
                                  (s |= o),
                                  (e = 31 & h),
                                  (63 & h) >>> 0 >= 32
                                    ? ((o = v << e), (e = 0))
                                    : ((o =
                                        (((1 << e) - 1) & (v >>> (32 - e))) |
                                        (r << e)),
                                      (e = v << e)),
                                  (r = o)),
                              (u[(a + 16) >> 2] = e),
                              (u[(a + 20) >> 2] = r),
                              (u[(a + 24) >> 2] = k),
                              (u[(a + 28) >> 2] = s),
                              64 & (e = (15361 - N) | 0)
                                ? ((c = p),
                                  (r = 31 & (e = (e + -64) | 0)),
                                  (63 & e) >>> 0 >= 32
                                    ? ((o = 0), (d = (l >>> r) | 0))
                                    : ((o = (l >>> r) | 0),
                                      (d =
                                        ((((1 << r) - 1) & l) << (32 - r)) |
                                        (c >>> r))),
                                  (c = o),
                                  (p = 0),
                                  (l = 0))
                                : e &&
                                  ((s = p),
                                  (o = 31 & (r = (64 - e) | 0)),
                                  (63 & r) >>> 0 >= 32
                                    ? ((r = s << o), (k = 0))
                                    : ((r =
                                        (((1 << o) - 1) & (s >>> (32 - o))) |
                                        (l << o)),
                                      (k = s << o)),
                                  (s = d),
                                  (d = 31 & e),
                                  (63 & e) >>> 0 >= 32
                                    ? ((o = 0), (s = (c >>> d) | 0))
                                    : ((o = (c >>> d) | 0),
                                      (s =
                                        ((((1 << d) - 1) & c) << (32 - d)) |
                                        (s >>> d))),
                                  (d = k | s),
                                  (c = r | o),
                                  (s = p),
                                  (o = 31 & e),
                                  (63 & e) >>> 0 >= 32
                                    ? ((r = 0), (p = (l >>> o) | 0))
                                    : ((r = (l >>> o) | 0),
                                      (p =
                                        ((((1 << o) - 1) & l) << (32 - o)) |
                                        (s >>> o))),
                                  (l = r)),
                              (u[a >> 2] = d),
                              (u[(a + 4) >> 2] = c),
                              (u[(a + 8) >> 2] = p),
                              (u[(a + 12) >> 2] = l),
                              (e = u[(a + 8) >> 2]),
                              (r = (u[(a + 12) >> 2] << 4) | (e >>> 28)),
                              (e <<= 4),
                              (o = u[a >> 2]),
                              (e |= (l = u[(a + 4) >> 2]) >>> 28),
                              ((134217728 == (0 | (c = 268435455 & l))) &
                                (0 !=
                                  (0 |
                                    (o |=
                                      0 !=
                                      (u[(a + 16) >> 2] |
                                        u[(a + 24) >> 2] |
                                        u[(a + 20) >> 2] |
                                        u[(a + 28) >> 2]))))) |
                              (c >>> 0 > 134217728)
                                ? (r = (e = (e + 1) | 0) ? r : (r + 1) | 0)
                                : o | (134217728 != (0 | c)) ||
                                  (r =
                                    (o = e) >>> 0 >
                                    (e = (e + (1 & e)) | 0) >>> 0
                                      ? (r + 1) | 0
                                      : r)))
                          : ((e = ((r = o) << 4) | (c >>> 28)),
                            (r =
                              (524287 & (o = (n << 4) | (r >>> 28))) |
                              2146959360));
                      (ar = (a + 32) | 0),
                        b(0, 0 | e),
                        b(1, (-2147483648 & n) | r),
                        (t = i),
                        (f = +A()),
                        (m[t >> 3] = f);
                    },
                    Je,
                    function (r, e) {
                      (e |= 0), (u[((r |= 0) + 4) >> 2] = 7), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (e |= 0), (u[((r |= 0) + 4) >> 2] = 10), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (e |= 0), (u[((r |= 0) + 4) >> 2] = 13), (u[r >> 2] = e);
                    },
                    Je,
                    Je,
                    Je,
                    Je,
                    Je,
                    Je,
                    function (r, e, a, n, i, t) {
                      var f;
                      (r |= 0),
                        (e |= 0),
                        (a = w(a)),
                        (n |= 0),
                        (i = w(i)),
                        (t |= 0),
                        (ar = f = (ar - 16) | 0),
                        (e = u[(u[e >> 2] + 4) >> 2]),
                        ea[u[(u[e >> 2] + 8) >> 2]](f, e, a, n, i, t),
                        (N[r >> 2] = m[f >> 3]),
                        (N[(r + 4) >> 2] = m[(f + 8) >> 3]),
                        (ar = (f + 16) | 0);
                    },
                    function (r) {
                      (r = u[(u[(r |= 0) >> 2] + 8) >> 2]),
                        ea[u[(u[r >> 2] + 8) >> 2]](r);
                    },
                    tr,
                    function (r) {
                      return 6888;
                    },
                    Pe,
                    function (r, e, a, n, i, t) {
                      (r |= 0),
                        (e |= 0),
                        (a = w(a)),
                        (n |= 0),
                        (i = w(i)),
                        (t |= 0);
                      var f,
                        o = 0;
                      return (
                        (ar = f = (ar - 16) | 0),
                        (o = u[r >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (o = u[(o + u[e >> 2]) >> 2]),
                        ea[0 | o](f, e, a, n, i, t),
                        (r = we(16)),
                        (e = u[(f + 12) >> 2]),
                        (u[(r + 8) >> 2] = u[(f + 8) >> 2]),
                        (u[(r + 12) >> 2] = e),
                        (e = u[(f + 4) >> 2]),
                        (u[r >> 2] = u[f >> 2]),
                        (u[(r + 4) >> 2] = e),
                        (ar = (f + 16) | 0),
                        0 | r
                      );
                    },
                    function (r) {
                      return 6892;
                    },
                    Je,
                    Je,
                    Pe,
                    Ke,
                    Se,
                    Re,
                    function (r) {
                      var e;
                      return (
                        (r |= 0),
                        (e = we(12)),
                        (f[(e + 4) | 0] = 0),
                        (u[(e + 8) >> 2] = u[r >> 2]),
                        (u[r >> 2] = 0),
                        (u[e >> 2] = 4304),
                        0 | e
                      );
                    },
                    function (r, e, a) {
                      (r |= 0), (a |= 0);
                      var n,
                        i,
                        t = 0,
                        o = 0;
                      if (
                        ((ar = n = (ar - 32) | 0),
                        (i = u[(e |= 0) >> 2]) >>> 0 < 2147483632)
                      ) {
                        r: {
                          if (i >>> 0 >= 11)
                            (o = we((t = (1 + (15 | i)) | 0))),
                              (u[(n + 16) >> 2] = -2147483648 | t),
                              (u[(n + 8) >> 2] = o),
                              (u[(n + 12) >> 2] = i),
                              (t = (i + o) | 0);
                          else if (
                            ((f[(n + 19) | 0] = i),
                            (t = ((o = (n + 8) | 0) + i) | 0),
                            !i)
                          )
                            break r;
                          sr(o, (e + 4) | 0, i);
                        }
                        return (
                          (f[0 | t] = 0),
                          (u[n >> 2] = a),
                          ea[0 | r]((n + 24) | 0, (n + 8) | 0, n),
                          S(u[(n + 24) >> 2]),
                          (r = u[(n + 24) >> 2]),
                          O(0 | r),
                          O(u[n >> 2]),
                          f[(n + 19) | 0] < 0 && Zr(u[(n + 8) >> 2]),
                          (ar = (n + 32) | 0),
                          0 | r
                        );
                      }
                      B(), k();
                    },
                    function (r, e, a) {
                      var n, i;
                      (a |= 0),
                        (n = r |= 0),
                        (i =
                          0 |
                          M(
                            0 | (f[((e |= 0) + 11) | 0] < 0 ? u[e >> 2] : e),
                            6892,
                            u[a >> 2]
                          )),
                        (u[n >> 2] = i);
                    },
                    function (r) {
                      return 6912;
                    },
                    Pe,
                    Be,
                    function (r) {
                      return 6915;
                    },
                    Je,
                    Je,
                    Pe,
                    Ke,
                    Se,
                    Re,
                    function (r) {
                      var e;
                      return (
                        (r |= 0),
                        (e = we(12)),
                        (f[(e + 4) | 0] = 0),
                        (u[(e + 8) >> 2] = u[r >> 2]),
                        (u[r >> 2] = 0),
                        (u[e >> 2] = 4424),
                        0 | e
                      );
                    },
                    function (r, e, a) {
                      var n, i;
                      (a |= 0),
                        (n = r |= 0),
                        (i =
                          0 |
                          M(
                            0 | (f[((e |= 0) + 11) | 0] < 0 ? u[e >> 2] : e),
                            6915,
                            u[a >> 2]
                          )),
                        (u[n >> 2] = i);
                    },
                    function (r) {
                      return 6918;
                    },
                    Xe,
                    je,
                    function () {
                      var r, e;
                      return (
                        (e = we(4)),
                        (r = we(28)),
                        (o[(r + 20) >> 1] = 0),
                        (u[(r + 16) >> 2] = 1065353216),
                        (o[(r + 10) >> 1] = 0),
                        (o[(r + 12) >> 1] = 0),
                        (u[r >> 2] = 0),
                        (u[(r + 24) >> 2] = 0),
                        (f[(r + 9) | 0] = 0),
                        (u[(r + 4) >> 2] = 1),
                        (f[(r + 22) | 0] = 0),
                        (u[1716] = u[1716] + 1),
                        (u[e >> 2] = r),
                        0 | e
                      );
                    },
                    Ye,
                    Xe,
                    function (r, e, a) {
                      (e |= 0),
                        (a |= 0),
                        (f[(20 + ((u[(r |= 0) >> 2] + e) | 0)) | 0] = a);
                    },
                    me,
                    function (r, e) {
                      (r |= 0), (e = w(e));
                      var a,
                        n = 0,
                        i = 0;
                      (ar = a = (ar - 16) | 0),
                        (r = u[r >> 2]),
                        e >= w(0) ||
                          ((u[a >> 2] = 2245),
                          (ar = n = (ar - 16) | 0),
                          (u[(n + 12) >> 2] = a),
                          r ||
                            (h[6872]
                              ? (r = u[1717])
                              : ((r = we(28)),
                                (o[(r + 20) >> 1] = 0),
                                (u[(r + 16) >> 2] = 1065353216),
                                (o[(r + 10) >> 1] = 0),
                                (o[(r + 12) >> 1] = 0),
                                (u[r >> 2] = 0),
                                (u[(r + 24) >> 2] = 0),
                                (f[(r + 9) | 0] = 0),
                                (u[(r + 4) >> 2] = 1),
                                (f[(r + 22) | 0] = 0),
                                (u[1717] = r),
                                (f[6872] = 1),
                                (u[1716] = u[1716] + 1))),
                          (i = u[(r + 4) >> 2]),
                          h[(r + 9) | 0]
                            ? ea[0 | i](r, 0, 5, 0, 4155, a)
                            : ea[0 | i](r, 0, 5, 4155, a),
                          (ar = (n + 16) | 0),
                          Qe(),
                          k()),
                        (N[(r + 16) >> 2] = e == w(0) ? w(0) : e),
                        (ar = (a + 16) | 0);
                    },
                    function (r, e, a) {
                      (r |= 0), (e |= 0), (a = w(a));
                      var n = 0;
                      (n = u[r >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        ea[0 | n](e, a);
                    },
                    function (r, e) {
                      (e |= 0), (f[(u[(r |= 0) >> 2] + 11) | 0] = e);
                    },
                    ge,
                    function (r, e) {
                      (e |= 0), (f[(u[(r |= 0) >> 2] + 10) | 0] = e);
                    },
                    function (r, e) {
                      return (
                        (e |= 0), h[(20 + ((u[(r |= 0) >> 2] + e) | 0)) | 0]
                      );
                    },
                    ye,
                    function (r) {
                      return h[(u[(r |= 0) >> 2] + 11) | 0];
                    },
                    Ee,
                    function (r) {
                      return h[(u[(r |= 0) >> 2] + 10) | 0];
                    },
                    function () {
                      return 0 | Gr(we(48), 0, 48);
                    },
                    xe,
                    function () {
                      var r;
                      return (
                        (r = we(16)),
                        (u[r >> 2] = 0),
                        (u[(r + 4) >> 2] = 0),
                        (u[(r + 8) >> 2] = 0),
                        (u[(r + 12) >> 2] = 0),
                        0 | r
                      );
                    },
                    xe,
                    function () {
                      var r;
                      return (
                        (r = we(16)),
                        (u[(r + 8) >> 2] = 0),
                        (u[(r + 12) >> 2] = 0),
                        (u[r >> 2] = 0),
                        0 | r
                      );
                    },
                    xe,
                    Ce,
                    Fe,
                    function (r, e) {
                      return (e |= 0), u[(u[(r |= 0) >> 2] + e) >> 2];
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0), (u[(u[(r |= 0) >> 2] + e) >> 2] = a);
                    },
                    function (r) {
                      return 6923;
                    },
                    Cr,
                    je,
                    function () {
                      return 0 | Qr(we(12), 0);
                    },
                    function (r, e) {
                      return (e |= 0), 0 | ea[0 | (r |= 0)](e);
                    },
                    function (r) {
                      return (r |= 0), 0 | Qr(we(12), r);
                    },
                    Ye,
                    Cr,
                    function (r) {
                      var e,
                        a = 0,
                        n = 0,
                        i = 0;
                      (ar = e = (ar - 624) | 0),
                        (a = u[((r |= 0) + 4) >> 2]),
                        (u[(r + 4) >> 2] = 0),
                        a && ea[u[(u[a >> 2] + 4) >> 2]](a),
                        (a = u[(r + 8) >> 2]),
                        (u[(r + 8) >> 2] = 0),
                        a && ea[u[(u[a >> 2] + 4) >> 2]](a);
                      r: {
                        if (
                          ((r = u[r >> 2]),
                          u[(r + 560) >> 2] == u[(r + 556) >> 2])
                        ) {
                          if (u[(r + 552) >> 2]) break r;
                          return (
                            Pr((r + 556) | 0),
                            (i = f[(r + 4) | 0]),
                            (a = br((e + 32) | 0, u[(r + 568) >> 2])),
                            (n = u[(a + 4) >> 2]),
                            (u[r >> 2] = u[a >> 2]),
                            (u[(r + 4) >> 2] = n),
                            (n = u[(a + 20) >> 2]),
                            (u[(r + 16) >> 2] = u[(a + 16) >> 2]),
                            (u[(r + 20) >> 2] = n),
                            (n = u[(a + 12) >> 2]),
                            (u[(r + 8) >> 2] = u[(a + 8) >> 2]),
                            (u[(r + 12) >> 2] = n),
                            sr((r + 24) | 0, (a + 24) | 0, 204),
                            sr((r + 228) | 0, (a + 228) | 0, 328),
                            (n = u[(r + 556) >> 2]) &&
                              ((u[(r + 560) >> 2] = n), Zr(n)),
                            (u[(r + 556) >> 2] = u[(a + 556) >> 2]),
                            (u[(r + 560) >> 2] = u[(a + 560) >> 2]),
                            (u[(r + 564) >> 2] = u[(a + 564) >> 2]),
                            (u[(r + 584) >> 2] = u[(a + 584) >> 2]),
                            (n = u[(a + 580) >> 2]),
                            (u[(r + 576) >> 2] = u[(a + 576) >> 2]),
                            (u[(r + 580) >> 2] = n),
                            (n = u[(a + 572) >> 2]),
                            (u[(r + 568) >> 2] = u[(a + 568) >> 2]),
                            (u[(r + 572) >> 2] = n),
                            (0 | i) < 0 &&
                              ((f[(r + 4) | 0] = 128 | h[(r + 4) | 0]),
                              (u[(r + 24) >> 2] =
                                (-909 & u[(r + 24) >> 2]) | 520)),
                            void (ar = (e + 624) | 0)
                          );
                        }
                        (u[(e + 16) >> 2] = 3192),
                          Or(r, (e + 16) | 0),
                          Qe(),
                          k();
                      }
                      (u[e >> 2] = 2046), Or(r, e), Qe(), k();
                    },
                    Be,
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = w(0),
                        i = 0,
                        t = 0,
                        o = w(0),
                        c = 0,
                        A = 0,
                        s = 0,
                        k = w(0);
                      r: {
                        (A = u[e >> 2]), (e = u[r >> 2]);
                        e: if (
                          !(8388607 & (u[(A + 24) >> 2] ^ u[(e + 24) >> 2]))
                        ) {
                          (k = N[(A + 40) >> 2]),
                            (i = u[(A + 40) >> 2]),
                            (n = N[(e + 40) >> 2]);
                          a: {
                            n: {
                              if (2139156720 != (0 | (a = u[(e + 40) >> 2]))) {
                                if (
                                  ((o = w(NaN)), (r = 3), 2141891242 == (0 | a))
                                )
                                  break a;
                                if (2140081935 != (0 | a)) break n;
                                (o = w(0)), (r = 1);
                                break a;
                              }
                              r = 2;
                              break a;
                            }
                            ((r = 0), n == n) &&
                              (b(2, (536870912 + (-1073741825 & a)) | 0),
                              (o = d()),
                              (r = 1073741824 & a ? 2 : 1));
                          }
                          a: {
                            n: {
                              if (2139156720 != (0 | i)) {
                                if (
                                  ((n = w(NaN)), (a = 3), 2141891242 == (0 | i))
                                )
                                  break a;
                                if (2140081935 != (0 | i)) break n;
                                (n = w(0)), (a = 1);
                                break a;
                              }
                              (n = w(0)), (a = 2);
                              break a;
                            }
                            ((a = 0), k == k) &&
                              (b(2, (536870912 + (-1073741825 & i)) | 0),
                              (n = d()),
                              (a = 1073741824 & i ? 2 : 1));
                          }
                          if (
                            !(
                              ((0 | a) != (0 | r)) |
                                !(
                                  !r |
                                  ((o != o) & (n != n)) |
                                  (w(g(w(o - n))) < w(9999999747378752e-20))
                                ) ||
                              ((a = (e + 44) | 0),
                              (t = (A + 44) | 0),
                              u[a >> 2] != u[t >> 2])
                            )
                          ) {
                            r = 0;
                            a: {
                              for (;;) {
                                if (((i = r), 9 == (0 | (r = (r + 1) | 0))))
                                  break a;
                                if (
                                  u[((c = r << 2) + a) >> 2] != u[(t + c) >> 2]
                                )
                                  break;
                              }
                              if (i >>> 0 < 8) break e;
                            }
                            if (
                              ((t = (A + 80) | 0),
                              u[(a = (e + 80) | 0) >> 2] == u[t >> 2])
                            ) {
                              r = 0;
                              a: {
                                for (;;) {
                                  if (((i = r), 9 == (0 | (r = (r + 1) | 0))))
                                    break a;
                                  if (
                                    u[((c = r << 2) + a) >> 2] !=
                                    u[(t + c) >> 2]
                                  )
                                    break;
                                }
                                if (i >>> 0 < 8) break e;
                              }
                              if (
                                ((t = (A + 116) | 0),
                                u[(a = (e + 116) | 0) >> 2] == u[t >> 2])
                              ) {
                                r = 0;
                                a: {
                                  for (;;) {
                                    if (((i = r), 9 == (0 | (r = (r + 1) | 0))))
                                      break a;
                                    if (
                                      u[((c = r << 2) + a) >> 2] !=
                                      u[(t + c) >> 2]
                                    )
                                      break;
                                  }
                                  if (i >>> 0 < 8) break e;
                                }
                                if (
                                  ((t = (A + 152) | 0),
                                  u[(a = (e + 152) | 0) >> 2] == u[t >> 2])
                                ) {
                                  r = 0;
                                  a: {
                                    for (;;) {
                                      if (
                                        ((i = r), 9 == (0 | (r = (r + 1) | 0)))
                                      )
                                        break a;
                                      if (
                                        u[((c = r << 2) + a) >> 2] !=
                                        u[(t + c) >> 2]
                                      )
                                        break;
                                    }
                                    if (i >>> 0 < 8) break e;
                                  }
                                  if (
                                    ((t = (A + 188) | 0),
                                    u[(a = (e + 188) | 0) >> 2] == u[t >> 2])
                                  ) {
                                    r = 0;
                                    a: {
                                      for (;;) {
                                        if (
                                          ((i = r),
                                          3 == (0 | (r = (r + 1) | 0)))
                                        )
                                          break a;
                                        if (
                                          u[((c = r << 2) + a) >> 2] !=
                                          u[(t + c) >> 2]
                                        )
                                          break;
                                      }
                                      if (i >>> 0 < 2) break e;
                                    }
                                    for (
                                      c = (A + 200) | 0,
                                        s = (e + 200) | 0,
                                        r = 0,
                                        i = 1;
                                      (a = u[((r <<= 2) + c) >> 2]),
                                        (t = u[(r + s) >> 2]),
                                        i &&
                                          ((i = 0),
                                          (r = 1),
                                          (0 | a) == (0 | t));

                                    );
                                    if ((0 | a) == (0 | t)) {
                                      for (
                                        c = (A + 208) | 0,
                                          s = (e + 208) | 0,
                                          r = 0,
                                          i = 1;
                                        (a = u[((r <<= 2) + c) >> 2]),
                                          (t = u[(r + s) >> 2]),
                                          i &&
                                            ((i = 0),
                                            (r = 1),
                                            (0 | a) == (0 | t));

                                      );
                                      if ((0 | a) == (0 | t)) {
                                        for (
                                          c = (A + 216) | 0,
                                            s = (e + 216) | 0,
                                            r = 0,
                                            i = 1;
                                          (a = u[((r <<= 2) + c) >> 2]),
                                            (t = u[(r + s) >> 2]),
                                            i &&
                                              ((i = 0),
                                              (r = 1),
                                              (0 | a) == (0 | t));

                                        );
                                        if (
                                          !(
                                            (0 | a) != (0 | t) ||
                                            ((o = N[(A + 28) >> 2]),
                                            (r = o != o),
                                            (n = N[(e + 28) >> 2]),
                                            ((0 | r) == ((n == n) | 0)) |
                                              (!(r | (n != n)) & (n != o))) ||
                                            ((n = N[(e + 32) >> 2]),
                                            (o = N[(A + 32) >> 2]),
                                            (((n == n) | 0) == ((o != o) | 0)) |
                                              ((n == n) & (n != o))) ||
                                            ((o = N[(A + 36) >> 2]),
                                            (r = o != o),
                                            (n = N[(e + 36) >> 2]),
                                            ((0 | r) == ((n == n) | 0)) |
                                              (!r & (n != o)))
                                          ) &&
                                          ((r = 0),
                                          ((n = N[(e + 224) >> 2]) != n &&
                                            ((r = 1),
                                            (o = N[(A + 224) >> 2]) != o)) ||
                                            ((o = n) ==
                                              (n = N[(A + 224) >> 2])) |
                                              ((n != n) & r))
                                        )
                                          break r;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        for (sr((e + 24) | 0, (A + 24) | 0, 204); ; ) {
                          if (4 & (r = h[(e + 4) | 0])) break r;
                          if (
                            ((f[(e + 4) | 0] = 4 | r),
                            (r = u[(e + 20) >> 2]) && ea[0 | r](e),
                            (u[(e + 308) >> 2] = 2143289344),
                            !(e = u[(e + 552) >> 2]))
                          )
                            break;
                        }
                      }
                    },
                    ge,
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 16) & 3) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] =
                            (-196609 & a) | ((e << 16) & 196608);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    ge,
                    function (r, e, a) {
                      (e |= 0), (a = +a), oe(u[(r |= 0) >> 2], e, $r(w(a)));
                    },
                    function (r, e, a, n) {
                      (e |= 0), (a |= 0), (n = +n);
                      var i = 0;
                      (i = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (i = u[(i + u[e >> 2]) >> 2]),
                        ea[0 | i](e, a, n);
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a), oe(u[(r |= 0) >> 2], e, qr(w(a)));
                    },
                    function (r, e) {
                      (e |= 0), Hr(u[(r |= 0) >> 2], 5, e);
                    },
                    function (r, e) {
                      (e |= 0), Hr(u[(r |= 0) >> 2], 6, e);
                    },
                    function (r, e) {
                      (e |= 0), Hr(u[(r |= 0) >> 2], 7, e);
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 2) & 3) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] = (-13 & a) | ((e << 2) & 12);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 18) & 3) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] =
                            (-786433 & a) | ((e << 18) & 786432);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 4) & 7) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] = (-113 & a) | ((e << 4) & 112);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a), ce(u[(r |= 0) >> 2], e, $r(w(a)));
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a), ce(u[(r |= 0) >> 2], e, qr(w(a)));
                    },
                    function (r, e) {
                      (e |= 0), ce(u[(r |= 0) >> 2], e, 2141891242);
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 20) & 3) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] =
                            (-3145729 & a) | ((e << 20) & 3145728);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((a = u[(r + 24) >> 2]) >>> 22) & 1) != (0 | e))
                      )
                        for (
                          u[(r + 24) >> 2] =
                            (-4194305 & a) | ((e << 22) & 4194304);
                          ;

                        ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      (r |= 0), (e = +e);
                      var a = 0,
                        n = w(0),
                        i = w(0);
                      r: if (
                        ((n = w(e)),
                        (r = u[r >> 2]),
                        !(
                          (n == (i = N[(r + 28) >> 2])) |
                          ((n != n) & (i != i))
                        ))
                      )
                        for (N[(r + 28) >> 2] = n; ; ) {
                          if (4 & (a = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | a),
                            (a = u[(r + 20) >> 2]) && ea[0 | a](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a);
                      var n = 0;
                      (n = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        ea[0 | n](e, a);
                    },
                    function (r, e) {
                      (e = +e), fe(u[(r |= 0) >> 2], $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), fe(u[(r |= 0) >> 2], qr(w(e)));
                    },
                    function (r, e) {
                      (r |= 0), (e = +e);
                      var a = 0,
                        n = w(0),
                        i = w(0);
                      r: if (
                        ((n = w(e)),
                        (r = u[r >> 2]),
                        !(
                          (n == (i = N[(r + 32) >> 2])) |
                          ((n != n) & (i != i))
                        ))
                      )
                        for (N[(r + 32) >> 2] = n; ; ) {
                          if (4 & (a = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | a),
                            (a = u[(r + 20) >> 2]) && ea[0 | a](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      (r |= 0), (e = +e);
                      var a = 0,
                        n = w(0),
                        i = w(0);
                      r: if (
                        ((n = w(e)),
                        (r = u[r >> 2]),
                        !(
                          (n == (i = N[(r + 36) >> 2])) |
                          ((n != n) & (i != i))
                        ))
                      )
                        for (N[(r + 36) >> 2] = n; ; ) {
                          if (4 & (a = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | a),
                            (a = u[(r + 20) >> 2]) && ea[0 | a](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e) {
                      (e = +e), te(u[(r |= 0) >> 2], 0, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), te(u[(r |= 0) >> 2], 0, qr(w(e)));
                    },
                    function (r) {
                      te(u[(r |= 0) >> 2], 0, 2141891242);
                    },
                    function (r, e) {
                      (e = +e), te(u[(r |= 0) >> 2], 1, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), te(u[(r |= 0) >> 2], 1, qr(w(e)));
                    },
                    function (r) {
                      te(u[(r |= 0) >> 2], 1, 2141891242);
                    },
                    function (r, e) {
                      (e = +e), ne(u[(r |= 0) >> 2], 0, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ne(u[(r |= 0) >> 2], 0, qr(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ne(u[(r |= 0) >> 2], 1, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ne(u[(r |= 0) >> 2], 1, qr(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ie(u[(r |= 0) >> 2], 0, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ie(u[(r |= 0) >> 2], 0, qr(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ie(u[(r |= 0) >> 2], 1, $r(w(e)));
                    },
                    function (r, e) {
                      (e = +e), ie(u[(r |= 0) >> 2], 1, qr(w(e)));
                    },
                    function (r, e) {
                      (r |= 0), (e = +e);
                      var a = 0,
                        n = w(0),
                        i = w(0);
                      r: if (
                        ((n = w(e)),
                        (r = u[r >> 2]),
                        !(
                          (n == (i = N[(r + 224) >> 2])) |
                          ((n != n) & (i != i))
                        ))
                      )
                        for (N[(r + 224) >> 2] = n; ; ) {
                          if (4 & (a = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | a),
                            (a = u[(r + 20) >> 2]) && ea[0 | a](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a);
                      var n = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (0 | u[((e = (r + (e << 2)) | 0) + 152) >> 2]) !=
                          (0 | (n = $r(w(a)))))
                      )
                        for (u[(e + 152) >> 2] = n; ; ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a), ue(u[(r |= 0) >> 2], e, $r(w(a)));
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a), ue(u[(r |= 0) >> 2], e, qr(w(a)));
                    },
                    function (r, e, a) {
                      (e |= 0), (a = +a);
                      var n = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (0 | u[((e = (r + (e << 2)) | 0) + 188) >> 2]) !=
                          (0 | (n = $r(w(a)))))
                      )
                        for (u[(e + 188) >> 2] = n; ; ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    function (r) {
                      return 3 & v[(u[(r |= 0) >> 2] + 26) >> 1];
                    },
                    Ee,
                    function (r, e, a) {
                      (r |= 0), (e |= 0), (a |= 0);
                      var n = 0,
                        i = 0,
                        t = w(0);
                      (n = 2),
                        (e = (u[e >> 2] + (a << 2)) | 0),
                        (t = N[(e + 80) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 80) >> 2]))) {
                            if (((i = NaN), 2141891242 == (0 | e))) {
                              n = 3;
                              break r;
                            }
                            if (2140081935 != (0 | e)) break e;
                            (i = 0), (n = 1);
                            break r;
                          }
                          break r;
                        }
                        t == t
                          ? ((n = 1073741824 & e ? 2 : 1),
                            b(2, (536870912 + (-1073741825 & e)) | 0),
                            (i = +d()))
                          : (n = 0);
                      }
                      (m[(r + 8) >> 3] = i), (u[r >> 2] = n);
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n,
                        i = 0;
                      return (
                        (ar = n = (ar - 16) | 0),
                        (i = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (i = u[(i + u[e >> 2]) >> 2]),
                        ea[0 | i](n, e, a),
                        (r = we(16)),
                        (e = u[(n + 12) >> 2]),
                        (u[(r + 8) >> 2] = u[(n + 8) >> 2]),
                        (u[(r + 12) >> 2] = e),
                        (e = u[(n + 4) >> 2]),
                        (u[r >> 2] = u[n >> 2]),
                        (u[(r + 4) >> 2] = e),
                        (ar = (n + 16) | 0),
                        0 | r
                      );
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 7) & 7;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 10) & 7;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 13) & 7;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 2) & 3;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 18) & 3;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 4) & 7;
                    },
                    function (r, e, a) {
                      (r |= 0), (e |= 0), (a |= 0);
                      var n = 0,
                        i = 0,
                        t = w(0);
                      (n = 2),
                        (e = (u[e >> 2] + (a << 2)) | 0),
                        (t = N[(e + 44) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 44) >> 2]))) {
                            if (((i = NaN), 2141891242 == (0 | e))) {
                              n = 3;
                              break r;
                            }
                            if (2140081935 != (0 | e)) break e;
                            (i = 0), (n = 1);
                            break r;
                          }
                          break r;
                        }
                        t == t
                          ? ((n = 1073741824 & e ? 2 : 1),
                            b(2, (536870912 + (-1073741825 & e)) | 0),
                            (i = +d()))
                          : (n = 0);
                      }
                      (m[(r + 8) >> 3] = i), (u[r >> 2] = n);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = w(0),
                        i = w(0);
                      (n = w(NaN)),
                        (e = u[e >> 2]),
                        (i = N[(e + 40) >> 2]),
                        (a = 3),
                        2141891242 != (0 | (e = u[(e + 40) >> 2])) &&
                          (2140081935 != (0 | e)
                            ? 2139156720 != (0 | e)
                              ? ((a = 0),
                                i == i &&
                                  (b(2, (536870912 + (-1073741825 & e)) | 0),
                                  (n = d()),
                                  (a = 1073741824 & e ? 2 : 1)))
                              : ((n = w(0)), (a = 2))
                            : ((n = w(0)), (a = 1))),
                        (u[r >> 2] = a),
                        (m[(r + 8) >> 3] = n);
                    },
                    function (r, e) {
                      e |= 0;
                      var a,
                        n = 0;
                      return (
                        (ar = a = (ar - 16) | 0),
                        (n = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        ea[0 | n](a, e),
                        (r = we(16)),
                        (e = u[(a + 12) >> 2]),
                        (u[(r + 8) >> 2] = u[(a + 8) >> 2]),
                        (u[(r + 12) >> 2] = e),
                        (e = u[(a + 4) >> 2]),
                        (u[r >> 2] = u[a >> 2]),
                        (u[(r + 4) >> 2] = e),
                        (ar = (a + 16) | 0),
                        0 | r
                      );
                    },
                    function (r) {
                      r |= 0;
                      var e = w(0);
                      return +((e = N[(u[r >> 2] + 32) >> 2]) == e ? e : w(0));
                    },
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      return (
                        (a = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (a = u[(a + u[e >> 2]) >> 2]),
                        +ea[0 | a](e)
                      );
                    },
                    function (r) {
                      r |= 0;
                      var e = w(0);
                      return (
                        (r = u[r >> 2]),
                        (e = N[(r + 36) >> 2]) != e &&
                          (e = h[(u[(r + 568) >> 2] + 10) | 0] ? w(1) : w(0)),
                        +e
                      );
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 200) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 200) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 204) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 204) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 208) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 208) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 212) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 212) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 216) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 216) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = 0,
                        i = w(0);
                      (e = u[e >> 2]), (i = N[(e + 220) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 220) >> 2]))) {
                            if (((n = NaN), (a = 3), 2141891242 == (0 | e)))
                              break r;
                            if (2140081935 != (0 | e)) break e;
                            (n = 0), (a = 1);
                            break r;
                          }
                          a = 2;
                          break r;
                        }
                        ((a = 0), i == i) &&
                          (b(2, (536870912 + (-1073741825 & e)) | 0),
                          (n = +d()),
                          (a = 1073741824 & e ? 2 : 1));
                      }
                      (e = a), (m[(r + 8) >> 3] = n), (u[r >> 2] = e);
                    },
                    function (r) {
                      r |= 0;
                      var e = w(0);
                      return +((e = N[(u[r >> 2] + 224) >> 2]) != e
                        ? w(NaN)
                        : e);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = 0,
                        n = w(0);
                      (r = (u[r >> 2] + (e << 2)) | 0), (n = N[(r + 152) >> 2]);
                      r: {
                        if (
                          !(
                            (2139156720 == (0 | (r = u[(r + 152) >> 2]))) |
                            (2140081935 == (0 | r))
                          )
                        ) {
                          if (((a = NaN), (2141891242 == (0 | r)) | (n != n)))
                            break r;
                          if (2139156720 != (0 | r))
                            return (
                              b(2, (536870912 + (-1073741825 & r)) | 0), +d()
                            );
                        }
                        a = 0;
                      }
                      return +a;
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n = 0;
                      return (
                        (n = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        +ea[0 | n](e, a)
                      );
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 20) & 3;
                    },
                    function (r) {
                      return (u[(u[(r |= 0) >> 2] + 24) >> 2] >>> 22) & 1;
                    },
                    function (r, e, a) {
                      (r |= 0), (e |= 0), (a |= 0);
                      var n = 0,
                        i = 0,
                        t = w(0);
                      (n = 2),
                        (e = (u[e >> 2] + (a << 2)) | 0),
                        (t = N[(e + 116) >> 2]);
                      r: {
                        e: {
                          if (2139156720 != (0 | (e = u[(e + 116) >> 2]))) {
                            if (((i = NaN), 2141891242 == (0 | e))) {
                              n = 3;
                              break r;
                            }
                            if (2140081935 != (0 | e)) break e;
                            (i = 0), (n = 1);
                            break r;
                          }
                          break r;
                        }
                        t == t
                          ? ((n = 1073741824 & e ? 2 : 1),
                            b(2, (536870912 + (-1073741825 & e)) | 0),
                            (i = +d()))
                          : (n = 0);
                      }
                      (m[(r + 8) >> 3] = i), (u[r >> 2] = n);
                    },
                    function (r, e) {
                      (r |= 0), (e |= 0);
                      var a = w(0),
                        n = w(0);
                      (r = (u[r >> 2] + (e << 2)) | 0), (n = N[(r + 188) >> 2]);
                      r: {
                        if (
                          !(
                            (2139156720 == (0 | (r = u[(r + 188) >> 2]))) |
                            (2140081935 == (0 | r))
                          )
                        ) {
                          if (
                            ((a = w(NaN)), (2141891242 == (0 | r)) | (n != n))
                          )
                            break r;
                          if (2139156720 != (0 | r))
                            return w(
                              (b(2, (536870912 + (-1073741825 & r)) | 0), d())
                            );
                        }
                        a = w(0);
                      }
                      return w(a);
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n = 0;
                      return (
                        (n = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        w(w(ea[0 | n](e, a)))
                      );
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n,
                        i = 0,
                        t = 0,
                        o = 0,
                        c = 0,
                        b = 0,
                        A = 0,
                        s = 0,
                        l = 0,
                        d = 0;
                      (ar = n = (ar - 80) | 0), (r = u[(r |= 0) >> 2]);
                      r: {
                        e: {
                          if (((b = u[e >> 2]), !u[(b + 552) >> 2])) {
                            if (u[(r + 8) >> 2]) break e;
                            c = ((e = u[(r + 556) >> 2]) + (a << 2)) | 0;
                            a: if (
                              (i = u[(r + 560) >> 2]) >>> 0 <
                              (o = u[(t = (r + 564) | 0) >> 2]) >>> 0
                            ) {
                              if ((0 | i) == (0 | c)) {
                                (u[c >> 2] = b), (u[(r + 560) >> 2] = c + 4);
                                break a;
                              }
                              if (((a = i), i >>> 0 > (e = (i - 4) | 0) >>> 0))
                                for (
                                  ;
                                  (u[a >> 2] = u[e >> 2]),
                                    (a = (a + 4) | 0),
                                    i >>> 0 > (e = (e + 4) | 0) >>> 0;

                                );
                              (u[(r + 560) >> 2] = a),
                                (0 | (e = (c + 4) | 0)) != (0 | i) &&
                                  yr((i - (-4 & (e = (i - e) | 0))) | 0, c, e),
                                (u[c >> 2] = b);
                            } else {
                              if (
                                (i = (1 + ((i - e) >> 2)) | 0) >>> 0 >=
                                1073741824
                              )
                                break r;
                              if (
                                ((o = ((e = (o - e) | 0) >>> 1) | 0),
                                (t = pe(
                                  (n + 32) | 0,
                                  e >>> 0 >= 2147483644
                                    ? 1073741823
                                    : i >>> 0 < o >>> 0
                                    ? o
                                    : i,
                                  a,
                                  t
                                )),
                                (0 | (a = u[(t + 8) >> 2])) == u[(t + 12) >> 2])
                              )
                                if (
                                  (e = u[(t + 4) >> 2]) >>> 0 >
                                  (i = u[t >> 2]) >>> 0
                                )
                                  (a =
                                    (yr(
                                      (A =
                                        ((i =
                                          (((1 + ((e - i) >> 2)) | 0) / -2) <<
                                          2) +
                                          e) |
                                        0),
                                      (o = e),
                                      (e = (a - e) | 0)
                                    ) +
                                      e) |
                                    0),
                                    (u[(t + 8) >> 2] = a),
                                    (u[(t + 4) >> 2] = i + u[(t + 4) >> 2]);
                                else {
                                  if (
                                    ((o = pe(
                                      (n + 56) | 0,
                                      (e =
                                        (0 | a) == (0 | i) ? 1 : (a - i) >> 1),
                                      (e >>> 2) | 0,
                                      u[(t + 16) >> 2]
                                    )),
                                    (i = u[(o + 8) >> 2]),
                                    (0 | (e = u[(t + 4) >> 2])) !=
                                      (0 | (a = u[(t + 8) >> 2])))
                                  ) {
                                    for (
                                      a = (((a - e) | 0) + i) | 0;
                                      (u[i >> 2] = u[e >> 2]),
                                        (e = (e + 4) | 0),
                                        (0 | (i = (i + 4) | 0)) != (0 | a);

                                    );
                                    (e = u[(t + 8) >> 2]),
                                      (i = u[(t + 4) >> 2]);
                                  } else (a = i), (i = e);
                                  (A = u[t >> 2]),
                                    (u[t >> 2] = u[o >> 2]),
                                    (u[o >> 2] = A),
                                    (u[(t + 4) >> 2] = u[(o + 4) >> 2]),
                                    (u[(o + 4) >> 2] = i),
                                    (u[(t + 8) >> 2] = a),
                                    (u[(o + 8) >> 2] = e),
                                    (s = u[(t + 12) >> 2]),
                                    (u[(t + 12) >> 2] = u[(o + 12) >> 2]),
                                    (u[(o + 12) >> 2] = s),
                                    (0 | e) != (0 | i) &&
                                      (u[(o + 8) >> 2] =
                                        ((3 + ((i - e) | 0)) & -4) + e),
                                    A && (Zr(A), (a = u[(t + 8) >> 2]));
                                }
                              (u[a >> 2] = b),
                                (u[(t + 8) >> 2] = u[(t + 8) >> 2] + 4),
                                (a = (c - (e = u[(r + 556) >> 2])) | 0),
                                (l = t),
                                (d = yr((u[(t + 4) >> 2] - a) | 0, e, a)),
                                (u[(l + 4) >> 2] = d),
                                (i = (u[(r + 560) >> 2] - c) | 0),
                                (c = yr(u[(t + 8) >> 2], c, i)),
                                (e = u[(r + 556) >> 2]),
                                (u[(r + 556) >> 2] = u[(t + 4) >> 2]),
                                (u[(t + 4) >> 2] = e),
                                (a = u[(r + 560) >> 2]),
                                (u[(r + 560) >> 2] = i + c),
                                (u[(t + 8) >> 2] = a),
                                (i = u[(r + 564) >> 2]),
                                (u[(r + 564) >> 2] = u[(t + 12) >> 2]),
                                (u[t >> 2] = e),
                                (u[(t + 12) >> 2] = i),
                                (0 | e) != (0 | a) &&
                                  (u[(t + 8) >> 2] =
                                    a + ((3 + ((e - a) | 0)) & -4)),
                                e && Zr(e);
                            }
                            for (
                              u[(b + 552) >> 2] = r;
                              !(4 & (e = h[(r + 4) | 0])) &&
                              ((f[(r + 4) | 0] = 4 | e),
                              (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                              (u[(r + 308) >> 2] = 2143289344),
                              (r = u[(r + 552) >> 2]));

                            );
                            return void (ar = (n + 80) | 0);
                          }
                          (u[(n + 16) >> 2] = 3946),
                            Or(r, (n + 16) | 0),
                            Qe(),
                            k();
                        }
                        (u[n >> 2] = 4079), Or(r, n), Qe(), k();
                      }
                      B(), k();
                    },
                    me,
                    function (r, e) {
                      e |= 0;
                      var a,
                        n = 0,
                        i = 0,
                        t = 0;
                      (ar = a = (ar - 320) | 0), (r = u[(r |= 0) >> 2]);
                      r: if (
                        u[(r + 560) >> 2] != u[(r + 556) >> 2] &&
                        ((i = u[e >> 2]), (e = u[(i + 552) >> 2]), ee(r, i))
                      ) {
                        if ((0 | r) == (0 | e)) {
                          for (
                            n = Gr(a, 0, 288),
                              u[((e = n) + 16) >> 2] = 2143289344,
                              u[(e + 20) >> 2] = 2143289344,
                              Gr((e + 24) | 0, 0, 49),
                              u[(e + 80) >> 2] = 2143289344,
                              t = (e + 288) | 0,
                              e = (e + 96) | 0;
                            (u[(e + 16) >> 2] = -1082130432),
                              (u[(e + 20) >> 2] = -1082130432),
                              (u[(e + 8) >> 2] = 0),
                              (u[(e + 12) >> 2] = 0),
                              (u[e >> 2] = -1082130432),
                              (u[(e + 4) >> 2] = -1082130432),
                              (0 | t) != (0 | (e = (e + 24) | 0));

                          );
                          (u[(n + 312) >> 2] = -1082130432),
                            (u[(n + 316) >> 2] = -1082130432),
                            (u[(n + 304) >> 2] = 0),
                            (u[(n + 308) >> 2] = 0),
                            (u[(n + 296) >> 2] = -1082130432),
                            (u[(n + 300) >> 2] = -1082130432),
                            (u[(n + 288) >> 2] = 2143289344),
                            (u[(n + 292) >> 2] = 2143289344),
                            sr((i + 228) | 0, n, 320),
                            (u[(i + 552) >> 2] = 0);
                        }
                        for (;;) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                      }
                      ar = (a + 320) | 0;
                    },
                    ge,
                    function (r) {
                      return (
                        (r = u[(r |= 0) >> 2]),
                        (u[(r + 560) >> 2] - u[(r + 556) >> 2]) >> 2
                      );
                    },
                    Ee,
                    function (r) {
                      return (r = u[(u[(r |= 0) >> 2] + 552) >> 2])
                        ? u[r >> 2]
                        : 0;
                    },
                    Ee,
                    function (r, e) {
                      e |= 0;
                      var a,
                        n = 0;
                      return (
                        (a = u[(r |= 0) >> 2]),
                        (r = u[(a + 556) >> 2]),
                        ((u[(a + 560) >> 2] - r) >> 2) >>> 0 <= e >>> 0 ||
                          !(r = u[(r + (e << 2)) >> 2]) ||
                          (n = u[r >> 2]),
                        0 | n
                      );
                    },
                    ye,
                    function (r) {
                      return ((2 & h[(u[(r |= 0) >> 2] + 4) | 0]) >>> 1) | 0;
                    },
                    Ee,
                    function (r, e) {
                      e |= 0;
                      var a = 0;
                      r: if (
                        ((r = u[(r |= 0) >> 2]),
                        (((2 & (a = h[(r + 4) | 0])) >>> 1) | 0) != (0 | e))
                      )
                        for (f[(r + 4) | 0] = (253 & a) | (e ? 2 : 0); ; ) {
                          if (4 & (e = h[(r + 4) | 0])) break r;
                          if (
                            ((f[(r + 4) | 0] = 4 | e),
                            (e = u[(r + 20) >> 2]) && ea[0 | e](r),
                            (u[(r + 308) >> 2] = 2143289344),
                            !(r = u[(r + 552) >> 2]))
                          )
                            break;
                        }
                    },
                    ge,
                    function (r, e) {
                      var a;
                      (e |= 0),
                        (a = u[((r |= 0) + 4) >> 2]),
                        (u[(r + 4) >> 2] = e),
                        a && ea[u[(u[a >> 2] + 4) >> 2]](a),
                        ke(u[r >> 2], 14);
                    },
                    ge,
                    function (r) {
                      var e;
                      (e = u[((r |= 0) + 4) >> 2]),
                        (u[(r + 4) >> 2] = 0),
                        e && ea[u[(u[e >> 2] + 4) >> 2]](e),
                        ke(u[r >> 2], 0);
                    },
                    function (r, e) {
                      var a;
                      (e |= 0),
                        (a = u[((r |= 0) + 8) >> 2]),
                        (u[(r + 8) >> 2] = e),
                        a && ea[u[(u[a >> 2] + 4) >> 2]](a),
                        (u[(u[r >> 2] + 20) >> 2] = 15);
                    },
                    ge,
                    function (r) {
                      var e;
                      (e = u[((r |= 0) + 8) >> 2]),
                        (u[(r + 8) >> 2] = 0),
                        e && ea[u[(u[e >> 2] + 4) >> 2]](e),
                        (u[(u[r >> 2] + 20) >> 2] = 0);
                    },
                    function (r) {
                      var e,
                        a = 0;
                      if (
                        ((ar = e = (ar - 16) | 0),
                        (r = u[(r |= 0) >> 2]),
                        u[(r + 8) >> 2])
                      ) {
                        for (
                          ;
                          !(4 & (a = h[(r + 4) | 0])) &&
                          ((f[(r + 4) | 0] = 4 | a),
                          (a = u[(r + 20) >> 2]) && ea[0 | a](r),
                          (u[(r + 308) >> 2] = 2143289344),
                          (r = u[(r + 552) >> 2]));

                        );
                        ar = (e + 16) | 0;
                      } else (u[e >> 2] = 1024), Or(r, e), Qe(), k();
                    },
                    function (r) {
                      return ((4 & h[(u[(r |= 0) >> 2] + 4) | 0]) >>> 2) | 0;
                    },
                    Ee,
                    function (r, e, a, n) {
                      (r |= 0), (e = +e), (a = +a), (n |= 0);
                      var i,
                        t,
                        f = w(0),
                        o = w(0),
                        c = w(0),
                        A = 0,
                        s = w(0),
                        k = 0,
                        l = w(0);
                      (ar = t = (ar + -64) | 0),
                        (i = u[r >> 2]),
                        Gr((t + 8) | 0, 0, 56),
                        (u[1719] = u[1719] + 1),
                        Ar(i),
                        (c = w(e)),
                        (o = N[(i + 572) >> 2]);
                      r: {
                        e: {
                          a: switch (((r = u[(i + 576) >> 2]), 0 | r)) {
                            case 0:
                            case 3:
                              break e;
                          }
                          a: {
                            if (
                              !((1 != (0 | r)) | ((f = N[(i + 572) >> 2]) != f))
                            ) {
                              if (!((f = o) < w(0))) break a;
                              break e;
                            }
                            n: {
                              if ((2 != (0 | r)) | (f != f)) {
                                f = w(NaN);
                                i: switch ((r - 1) | 0) {
                                  case 1:
                                    break n;
                                  case 0:
                                    break i;
                                  default:
                                    break a;
                                }
                                f = o;
                                break a;
                              }
                              if ((c != c) | (o < w(0))) break e;
                            }
                            f = w(w(o * c) * w(0.009999999776482582));
                          }
                          (l = w(f + w(Sr(i, 2, c) + Mr(i, 2, c)))), (k = 1);
                          break r;
                        }
                        (f = w(0)), (o = N[(i + 216) >> 2]);
                        e: {
                          a: {
                            n: {
                              i: if (
                                2139156720 !=
                                (0 | (r = u[(i + 216) >> 2]))
                              ) {
                                if (2140081935 == (0 | r)) break e;
                                k = 4216;
                                t: {
                                  if (2141891242 != (0 | r)) {
                                    if (o == o) break t;
                                    k = 4208;
                                  }
                                  switch (
                                    ((f = N[k >> 2]), (u[(k + 4) >> 2] - 1) | 0)
                                  ) {
                                    case 0:
                                      break n;
                                    case 1:
                                      break i;
                                    default:
                                      break a;
                                  }
                                }
                                if (
                                  (b(2, (536870912 + (-1073741825 & r)) | 0),
                                  (f = d()),
                                  !(1073741824 & r))
                                )
                                  break n;
                              }
                              f = w(w(f * c) * w(0.009999999776482582));
                            }
                            if (f == f) {
                              f = w(0);
                              n: if (2139156720 != (0 | r)) {
                                if (2140081935 == (0 | r)) break e;
                                A = 4216;
                                i: {
                                  if (2141891242 != (0 | r)) {
                                    if (o == o) break i;
                                    A = 4208;
                                  }
                                  switch (
                                    ((f = N[A >> 2]),
                                    (l = w(NaN)),
                                    (k = 2),
                                    (u[(A + 4) >> 2] - 1) | 0)
                                  ) {
                                    case 1:
                                      break n;
                                    case 0:
                                      break e;
                                    default:
                                      break r;
                                  }
                                }
                                if (
                                  (b(2, (536870912 + (-1073741825 & r)) | 0),
                                  (f = d()),
                                  !(1073741824 & r))
                                )
                                  break e;
                              }
                              (l = w(w(f * c) * w(0.009999999776482582))),
                                (k = 2);
                              break r;
                            }
                          }
                          (k = c == c), (l = c);
                          break r;
                        }
                        (k = 2), (l = f);
                      }
                      (s = w(a)), (o = N[(i + 580) >> 2]);
                      r: {
                        e: {
                          a: switch (((r = u[(i + 584) >> 2]), 0 | r)) {
                            case 0:
                            case 3:
                              break e;
                          }
                          a: {
                            if (
                              !((1 != (0 | r)) | ((f = N[(i + 580) >> 2]) != f))
                            ) {
                              if (!((f = o) < w(0))) break a;
                              break e;
                            }
                            n: {
                              if ((2 != (0 | r)) | (f != f)) {
                                f = w(NaN);
                                i: switch ((r - 1) | 0) {
                                  case 1:
                                    break n;
                                  case 0:
                                    break i;
                                  default:
                                    break a;
                                }
                                f = o;
                                break a;
                              }
                              if ((s != s) | (o < w(0))) break e;
                            }
                            f = w(w(o * s) * w(0.009999999776482582));
                          }
                          (o = w(f + w(Sr(i, 0, c) + Mr(i, 0, c)))), (r = 1);
                          break r;
                        }
                        (f = w(0)), (o = N[(i + 220) >> 2]);
                        e: {
                          a: {
                            n: {
                              i: if (
                                2139156720 !=
                                (0 | (r = u[(i + 220) >> 2]))
                              ) {
                                if (2140081935 == (0 | r)) break e;
                                A = 4216;
                                t: {
                                  if (2141891242 != (0 | r)) {
                                    if (o == o) break t;
                                    A = 4208;
                                  }
                                  switch (
                                    ((f = N[A >> 2]), (u[(A + 4) >> 2] - 1) | 0)
                                  ) {
                                    case 0:
                                      break n;
                                    case 1:
                                      break i;
                                    default:
                                      break a;
                                  }
                                }
                                if (
                                  (b(2, (536870912 + (-1073741825 & r)) | 0),
                                  (f = d()),
                                  !(1073741824 & r))
                                )
                                  break n;
                              }
                              f = w(w(f * s) * w(0.009999999776482582));
                            }
                            if (f == f) {
                              f = w(0);
                              n: if (2139156720 != (0 | r)) {
                                if (2140081935 == (0 | r)) break e;
                                A = 4216;
                                i: {
                                  if (2141891242 != (0 | r)) {
                                    if (o == o) break i;
                                    A = 4208;
                                  }
                                  switch (
                                    ((f = N[A >> 2]),
                                    (o = w(NaN)),
                                    (r = 2),
                                    (u[(A + 4) >> 2] - 1) | 0)
                                  ) {
                                    case 0:
                                      break e;
                                    case 1:
                                      break n;
                                    default:
                                      break r;
                                  }
                                }
                                if (
                                  (b(2, (536870912 + (-1073741825 & r)) | 0),
                                  (f = d()),
                                  !(1073741824 & r))
                                )
                                  break e;
                              }
                              (o = w(w(f * s) * w(0.009999999776482582))),
                                (r = 2);
                              break r;
                            }
                          }
                          (r = s == s), (o = s);
                          break r;
                        }
                        (r = 2), (o = f);
                      }
                      or(
                        i,
                        l,
                        o,
                        n,
                        k,
                        r,
                        c,
                        s,
                        1,
                        0,
                        u[(i + 568) >> 2],
                        (t + 8) | 0,
                        0,
                        u[1719]
                      ) &&
                        (Fr(i, 3 & h[(i + 300) | 0], c, s, c),
                        gr(i, +N[(u[(i + 568) >> 2] + 16) >> 2], 0, 0)),
                        (ar = (t - -64) | 0);
                    },
                    function (r, e, a, n, i) {
                      (e |= 0), (a = +a), (n = +n), (i |= 0);
                      var t = 0;
                      (t = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (t = u[(t + u[e >> 2]) >> 2]),
                        ea[0 | t](e, a, n, i);
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 228) >> 2];
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 236) >> 2];
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 232) >> 2];
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 240) >> 2];
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 244) >> 2];
                    },
                    function (r) {
                      return +N[(u[(r |= 0) >> 2] + 248) >> 2];
                    },
                    function (r, e) {
                      (r |= 0),
                        (e = u[(e |= 0) >> 2]),
                        (m[r >> 3] = N[(e + 228) >> 2]),
                        (m[(r + 8) >> 3] = N[(e + 236) >> 2]),
                        (m[(r + 16) >> 3] = N[(e + 232) >> 2]),
                        (m[(r + 24) >> 3] = N[(e + 240) >> 2]),
                        (m[(r + 32) >> 3] = N[(e + 244) >> 2]),
                        (m[(r + 40) >> 3] = N[(e + 248) >> 2]);
                    },
                    function (r, e) {
                      e |= 0;
                      var a,
                        n = 0;
                      return (
                        (ar = a = (ar - 48) | 0),
                        (n = u[(r |= 0) >> 2]),
                        (e = (((r = u[(r + 4) >> 2]) >> 1) + e) | 0),
                        1 & r && (n = u[(n + u[e >> 2]) >> 2]),
                        ea[0 | n](a, e),
                        (r = sr(we(48), a, 48)),
                        (ar = (a + 48) | 0),
                        0 | r
                      );
                    },
                    function (r, e) {
                      var a;
                      if (
                        ((e |= 0),
                        (ar = a = (ar - 16) | 0),
                        (r = u[(r |= 0) >> 2]),
                        (0 | e) < 6)
                      ) {
                        ar = (a + 16) | 0;
                        r: {
                          e: switch ((e - 4) | 0) {
                            case 0:
                              if (
                                ((e = (r + 260) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 252) | 0;
                              break r;
                            case 1:
                              if (
                                ((e = (r + 252) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 260) | 0;
                              break r;
                          }
                          e = (252 + ((r + (e << 2)) | 0)) | 0;
                        }
                        return +N[e >> 2];
                      }
                      (u[a >> 2] = 1871), Or(r, a), Qe(), k();
                    },
                    function (r, e) {
                      var a;
                      if (
                        ((e |= 0),
                        (ar = a = (ar - 16) | 0),
                        (r = u[(r |= 0) >> 2]),
                        (0 | e) < 6)
                      ) {
                        ar = (a + 16) | 0;
                        r: {
                          e: switch ((e - 4) | 0) {
                            case 0:
                              if (
                                ((e = (r + 276) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 268) | 0;
                              break r;
                            case 1:
                              if (
                                ((e = (r + 268) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 276) | 0;
                              break r;
                          }
                          e = (268 + ((r + (e << 2)) | 0)) | 0;
                        }
                        return +N[e >> 2];
                      }
                      (u[a >> 2] = 1871), Or(r, a), Qe(), k();
                    },
                    function (r, e) {
                      var a;
                      if (
                        ((e |= 0),
                        (ar = a = (ar - 16) | 0),
                        (r = u[(r |= 0) >> 2]),
                        (0 | e) < 6)
                      ) {
                        ar = (a + 16) | 0;
                        r: {
                          e: switch ((e - 4) | 0) {
                            case 0:
                              if (
                                ((e = (r + 292) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 284) | 0;
                              break r;
                            case 1:
                              if (
                                ((e = (r + 284) | 0),
                                2 == (3 & h[(r + 300) | 0]))
                              )
                                break r;
                              e = (r + 292) | 0;
                              break r;
                          }
                          e = (284 + ((r + (e << 2)) | 0)) | 0;
                        }
                        return +N[e >> 2];
                      }
                      (u[a >> 2] = 1871), Or(r, a), Qe(), k();
                    },
                    Ce,
                    Fe,
                    Ce,
                    Fe,
                    Er,
                    _e,
                    function (r) {
                      Zr(_e((r |= 0)));
                    },
                    function (r, e, a, n, i, t) {
                      var o, c, b;
                      (r |= 0),
                        (e |= 0),
                        (a = w(a)),
                        (n |= 0),
                        (i = w(i)),
                        (t |= 0),
                        (ar = o = (ar - 48) | 0),
                        (b = u[(e + 8) >> 2]),
                        1 & f[6908]
                          ? (e = u[1726])
                          : ((e = 0 | C(5, 4352)),
                            (f[6908] = 1),
                            (u[1726] = e)),
                        (u[(o + 40) >> 2] = t),
                        (N[(o + 32) >> 2] = i),
                        (u[(o + 24) >> 2] = n),
                        (N[(o + 16) >> 2] = a),
                        (e =
                          ((c = +D(
                            0 | e,
                            0 | b,
                            2813,
                            (o + 12) | 0,
                            (o + 16) | 0
                          )) <
                            4294967296) &
                          (c >= 0)
                            ? ~~c >>> 0
                            : 0),
                        (n = u[(o + 12) >> 2]),
                        (t = u[(e + 4) >> 2]),
                        (u[r >> 2] = u[e >> 2]),
                        (u[(r + 4) >> 2] = t),
                        (t = u[(e + 12) >> 2]),
                        (u[(r + 8) >> 2] = u[(e + 8) >> 2]),
                        (u[(r + 12) >> 2] = t),
                        Y(0 | n),
                        (ar = (o + 48) | 0);
                    },
                    qe,
                    $e,
                    Oe,
                    function (r) {
                      Zr(Oe((r |= 0)));
                    },
                    function (r) {
                      Ie(u[((r |= 0) + 8) >> 2], 3184);
                    },
                    qe,
                    function (r) {
                      return 0 | q(u[((r |= 0) + 60) >> 2]);
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n,
                        i = 0,
                        t = 0,
                        f = 0,
                        o = 0,
                        c = 0,
                        b = 0;
                      (ar = n = (ar - 32) | 0),
                        (i = u[((r |= 0) + 28) >> 2]),
                        (u[(n + 16) >> 2] = i),
                        (t = u[(r + 20) >> 2]),
                        (u[(n + 28) >> 2] = a),
                        (u[(n + 24) >> 2] = e),
                        (e = (t - i) | 0),
                        (u[(n + 20) >> 2] = e),
                        (t = (e + a) | 0),
                        (c = 2),
                        (e = (n + 16) | 0);
                      r: {
                        for (;;) {
                          e: {
                            a: {
                              n: {
                                if (
                                  !Ue(
                                    0 |
                                      K(
                                        u[(r + 60) >> 2],
                                        0 | e,
                                        0 | c,
                                        (n + 12) | 0
                                      )
                                  )
                                ) {
                                  if ((0 | (f = u[(n + 12) >> 2])) == (0 | t))
                                    break n;
                                  if ((0 | f) >= 0) break a;
                                  break e;
                                }
                                if (-1 != (0 | t)) break e;
                              }
                              (e = u[(r + 44) >> 2]),
                                (u[(r + 28) >> 2] = e),
                                (u[(r + 20) >> 2] = e),
                                (u[(r + 16) >> 2] = e + u[(r + 48) >> 2]),
                                (r = a);
                              break r;
                            }
                            (o =
                              (f -
                                ((b = (o = u[(e + 4) >> 2]) >>> 0 < f >>> 0)
                                  ? o
                                  : 0)) |
                              0),
                              (u[(i = ((b << 3) + e) | 0) >> 2] =
                                o + u[i >> 2]),
                              (u[(e = ((b ? 12 : 4) + e) | 0) >> 2] =
                                u[e >> 2] - o),
                              (t = (t - f) | 0),
                              (c = (c - b) | 0),
                              (e = i);
                            continue;
                          }
                          break;
                        }
                        ((u[(r + 28) >> 2] = 0),
                        (u[(r + 16) >> 2] = 0),
                        (u[(r + 20) >> 2] = 0),
                        (u[r >> 2] = 32 | u[r >> 2]),
                        (r = 0),
                        2 != (0 | c)) && (r = (a - u[(e + 4) >> 2]) | 0);
                      }
                      return (ar = (n + 32) | 0), 0 | r;
                    },
                    function (r, e, a, n) {
                      var i;
                      return (
                        (e |= 0),
                        (a |= 0),
                        (n |= 0),
                        (ar = i = (ar - 16) | 0),
                        (r = Ue(
                          0 |
                            Q(
                              u[((r |= 0) + 60) >> 2],
                              0 | e,
                              0 | a,
                              255 & n,
                              (i + 8) | 0
                            )
                        )),
                        (ar = (i + 16) | 0),
                        (nr = r ? -1 : u[(i + 12) >> 2]),
                        0 | (r ? -1 : u[(i + 8) >> 2])
                      );
                    },
                    function (r) {
                      return 0;
                    },
                    function (r, e, a, n) {
                      return (nr = 0), 0;
                    },
                    function (r, e, a) {
                      (e |= 0), (a |= 0);
                      var n,
                        i,
                        t = 0,
                        o = 0,
                        c = 0;
                      return (
                        (n = u[((r |= 0) + 84) >> 2]),
                        (o = u[n >> 2]),
                        (t = u[(n + 4) >> 2]),
                        (i = u[(r + 28) >> 2]),
                        (c =
                          t >>> 0 < (c = (u[(r + 20) >> 2] - i) | 0) >>> 0
                            ? t
                            : c) &&
                          (sr(o, i, c),
                          (o = (c + u[n >> 2]) | 0),
                          (u[n >> 2] = o),
                          (t = (u[(n + 4) >> 2] - c) | 0),
                          (u[(n + 4) >> 2] = t)),
                        (t = a >>> 0 > t >>> 0 ? t : a) &&
                          (sr(o, e, t),
                          (o = (t + u[n >> 2]) | 0),
                          (u[n >> 2] = o),
                          (u[(n + 4) >> 2] = u[(n + 4) >> 2] - t)),
                        (f[0 | o] = 0),
                        (e = u[(r + 44) >> 2]),
                        (u[(r + 28) >> 2] = e),
                        (u[(r + 20) >> 2] = e),
                        0 | a
                      );
                    },
                    $e,
                  ]);
                  function aa() {
                    return (t.byteLength / 65536) | 0;
                  }
                  return {
                    E: function () {
                      for (
                        var r = 0, e = 0, a = 0;
                        (a = ((e = r << 4) + 5824) | 0),
                          (u[(e + 5828) >> 2] = a),
                          (u[(e + 5832) >> 2] = a),
                          64 != (0 | (r = (r + 1) | 0));

                      );
                      hr(48),
                        (u[1720] = 16),
                        (u[1721] = 0),
                        tr(),
                        (u[1721] = u[1732]),
                        (u[1732] = 6880),
                        (u[1733] = 193),
                        (u[1734] = 0),
                        Er(),
                        (u[1734] = u[1732]),
                        (u[1732] = 6932);
                    },
                    F: function (r) {
                      r |= 0;
                      var e,
                        a,
                        n = 0,
                        i = 0,
                        t = 0;
                      (ar = e = (ar - 96) | 0),
                        (u[e >> 2] = r),
                        (ar = i = (ar - 16) | 0),
                        (u[(i + 12) >> 2] = e),
                        (ar = r = (ar - 144) | 0),
                        (r = sr(r, 5376, 144)),
                        (n = a = (e + 16) | 0),
                        (u[(r + 44) >> 2] = n),
                        (u[(r + 20) >> 2] = n),
                        (t =
                          (t = (-2 - n) | 0) >>> 0 >= 2147483647
                            ? 2147483647
                            : t),
                        (u[(r + 48) >> 2] = t),
                        (n = (n + t) | 0),
                        (u[(r + 28) >> 2] = n),
                        (u[(r + 16) >> 2] = n),
                        Rr(r, 2201, e, 0, 0),
                        t &&
                          ((n = u[(r + 20) >> 2]),
                          (f[(n - ((0 | n) == u[(r + 16) >> 2])) | 0] = 0)),
                        (ar = (r + 144) | 0),
                        (ar = (i + 16) | 0);
                      r: {
                        if (3 & (r = a))
                          for (;;) {
                            if (!h[0 | r]) break r;
                            if (!(3 & (r = (r + 1) | 0))) break;
                          }
                        for (
                          ;
                          (n = r),
                            (r = (r + 4) | 0),
                            !(
                              (-1 ^ (i = u[n >> 2])) &
                              (i - 16843009) &
                              -2139062144
                            );

                        );
                        for (; (n = ((r = n) + 1) | 0), h[0 | r]; );
                      }
                      return (
                        (r = (n = ur((r = (1 + ((r - a) | 0)) | 0)))
                          ? sr(n, a, r)
                          : 0),
                        (ar = (e + 96) | 0),
                        0 | r
                      );
                    },
                    G: function () {
                      var r = 0;
                      if ((r = u[1732]))
                        for (; ea[u[r >> 2]](), (r = u[(r + 4) >> 2]); );
                    },
                    H: ur,
                    I: ea,
                    J: Zr,
                    K: function (r, e, a, n, i) {
                      return (
                        (e |= 0),
                        (a |= 0),
                        (n |= 0),
                        (i |= 0),
                        0 | ea[0 | (r |= 0)](e, a, n, i)
                      );
                    },
                  };
                })(r);
              })(r);
            }
            Object.assign(a, t),
              (t = null),
              a.wasmBinary && (o = a.wasmBinary),
              a.noExitRuntime;
            var s = Error;
            (o = []),
              "object" != typeof {} && _("no native wasm support detected");
            var k,
              l,
              d,
              h,
              v,
              p,
              N,
              m,
              y,
              w = !1;
            function g(r, e, a) {
              a = e + a;
              for (var n = ""; !(e >= a); ) {
                var i = r[e++];
                if (!i) break;
                if (128 & i) {
                  var t = 63 & r[e++];
                  if (192 == (224 & i))
                    n += String.fromCharCode(((31 & i) << 6) | t);
                  else {
                    var f = 63 & r[e++];
                    65536 >
                    (i =
                      224 == (240 & i)
                        ? ((15 & i) << 12) | (t << 6) | f
                        : ((7 & i) << 18) |
                          (t << 12) |
                          (f << 6) |
                          (63 & r[e++]))
                      ? (n += String.fromCharCode(i))
                      : ((i -= 65536),
                        (n += String.fromCharCode(
                          55296 | (i >> 10),
                          56320 | (1023 & i)
                        )));
                  }
                } else n += String.fromCharCode(i);
              }
              return n;
            }
            function E() {
              var r = k.buffer;
              (a.HEAP8 = l = new Int8Array(r)),
                (a.HEAP16 = h = new Int16Array(r)),
                (a.HEAP32 = p = new Int32Array(r)),
                (a.HEAPU8 = d = new Uint8Array(r)),
                (a.HEAPU16 = v = new Uint16Array(r)),
                (a.HEAPU32 = N = new Uint32Array(r)),
                (a.HEAPF32 = m = new Float32Array(r)),
                (a.HEAPF64 = y = new Float64Array(r));
            }
            var G = a.INITIAL_MEMORY || 16777216;
            65536 <= G ||
              _(
                "INITIAL_MEMORY should be larger than STACK_SIZE, was " +
                  G +
                  "! (STACK_SIZE=65536)"
              ),
              (k = a.wasmMemory
                ? a.wasmMemory
                : new (function () {
                    this.buffer = new ArrayBuffer((G / 65536) * 65536);
                  })()),
              E(),
              (G = k.buffer.byteLength);
            var Z,
              R = [],
              W = [],
              V = [];
            function T() {
              var r = a.preRun.shift();
              R.unshift(r);
            }
            var I,
              B = 0,
              O = null;
            function _(r) {
              throw (
                (a.onAbort && a.onAbort(r),
                c((r = "Aborted(" + r + ")")),
                (w = !0),
                (r = new s(r + ". Build with -sASSERTIONS for more info.")),
                i(r),
                r)
              );
            }
            function L(r) {
              return r.startsWith("data:application/octet-stream;base64,");
            }
            if (!L((I = "yoga-asm.wasm"))) {
              var X = I;
              I = a.locateFile ? a.locateFile(X, f) : f + X;
            }
            function F(r) {
              for (; 0 < r.length; ) r.shift()(a);
            }
            function C(r) {
              if (void 0 === r) return "_unknown";
              var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
              return 48 <= e && 57 >= e ? "_" + r : r;
            }
            function P(r, e) {
              return (
                (r = C(r)),
                function () {
                  return e.apply(this, arguments);
                }
              );
            }
            var U = [
                {},
                { value: void 0 },
                { value: null },
                { value: !0 },
                { value: !1 },
              ],
              H = [];
            function M(r) {
              var e = Error,
                a = P(r, function (e) {
                  (this.name = r),
                    (this.message = e),
                    void 0 !== (e = Error(e).stack) &&
                      (this.stack =
                        this.toString() +
                        "\n" +
                        e.replace(/^Error(:[^\n]*)?\n/, ""));
                });
              return (
                (a.prototype = Object.create(e.prototype)),
                (a.prototype.constructor = a),
                (a.prototype.toString = function () {
                  return void 0 === this.message
                    ? this.name
                    : this.name + ": " + this.message;
                }),
                a
              );
            }
            var S = void 0;
            function Y(r) {
              throw new S(r);
            }
            var D = function (r) {
                return (
                  r || Y("Cannot use deleted val. handle = " + r), U[r].value
                );
              },
              j = function (r) {
                switch (r) {
                  case void 0:
                    return 1;
                  case null:
                    return 2;
                  case !0:
                    return 3;
                  case !1:
                    return 4;
                  default:
                    var e = H.length ? H.pop() : U.length;
                    return (U[e] = { fa: 1, value: r }), e;
                }
              },
              Q = void 0,
              z = void 0;
            function x(r) {
              for (var e = ""; d[r]; ) e += z[d[r++]];
              return e;
            }
            var J = [];
            function K() {
              for (; J.length; ) {
                var r = J.pop();
                (r.L.Z = !1), r.delete();
              }
            }
            var q = void 0,
              $ = {};
            function rr(r, e) {
              for (void 0 === e && Y("ptr should not be undefined"); r.P; )
                (e = r.aa(e)), (r = r.P);
              return e;
            }
            var er = {};
            function ar(r) {
              var e = x((r = ee(r)));
              return ie(r), e;
            }
            function nr(r, e) {
              var a = er[r];
              return void 0 === a && Y(e + " has unknown type " + ar(r)), a;
            }
            function ir() {}
            var tr = !1;
            function fr(r) {
              --r.count.value,
                0 === r.count.value && (r.S ? r.T.V(r.S) : r.O.M.V(r.N));
            }
            function or(r, e, a) {
              return e === a
                ? r
                : void 0 === a.P
                ? null
                : null === (r = or(r, e, a.P))
                ? null
                : a.ma(r);
            }
            var ur = {};
            var cr = void 0;
            function br(r) {
              throw new cr(r);
            }
            function Ar(r, e) {
              return (
                (e.O && e.N) || br("makeClassHandle requires ptr and ptrType"),
                !!e.T != !!e.S &&
                  br("Both smartPtrType and smartPtr must be specified"),
                (e.count = { value: 1 }),
                sr(Object.create(r, { L: { value: e } }))
              );
            }
            function sr(r) {
              return typeof FinalizationRegistry > "u"
                ? ((sr = function (r) {
                    return r;
                  }),
                  r)
                : ((tr = new FinalizationRegistry(function (r) {
                    fr(r.L);
                  })),
                  (ir = function (r) {
                    tr.unregister(r);
                  }),
                  (sr = function (r) {
                    var e = r.L;
                    return e.S && tr.register(r, { L: e }, r), r;
                  })(r));
            }
            var kr = {};
            function lr(r) {
              for (; r.length; ) {
                var e = r.pop();
                r.pop()(e);
              }
            }
            function dr(r) {
              return this.fromWireType(p[r >> 2]);
            }
            var hr = {},
              vr = {};
            function pr(r, e, a) {
              function n(e) {
                (e = a(e)).length !== r.length &&
                  br("Mismatched type converter count");
                for (var n = 0; n < r.length; ++n) mr(r[n], e[n]);
              }
              r.forEach(function (r) {
                vr[r] = e;
              });
              var i = Array(e.length),
                t = [],
                f = 0;
              e.forEach(function (r, e) {
                er.hasOwnProperty(r)
                  ? (i[e] = er[r])
                  : (t.push(r),
                    hr.hasOwnProperty(r) || (hr[r] = []),
                    hr[r].push(function () {
                      (i[e] = er[r]), ++f === t.length && n(i);
                    }));
              }),
                0 === t.length && n(i);
            }
            function Nr(r) {
              switch (r) {
                case 1:
                  return 0;
                case 2:
                  return 1;
                case 4:
                  return 2;
                case 8:
                  return 3;
                default:
                  throw new TypeError("Unknown type size: " + r);
              }
            }
            function mr(r, e, a) {
              if ((void 0 === a && (a = {}), !("argPackAdvance" in e)))
                throw new TypeError(
                  "registerType registeredInstance requires argPackAdvance"
                );
              var n = e.name;
              if (
                (r ||
                  Y(
                    'type "' +
                      n +
                      '" must have a positive integer typeid pointer'
                  ),
                er.hasOwnProperty(r))
              ) {
                if (a.ta) return;
                Y("Cannot register type '" + n + "' twice");
              }
              (er[r] = e),
                delete vr[r],
                hr.hasOwnProperty(r) &&
                  ((e = hr[r]),
                  delete hr[r],
                  e.forEach(function (r) {
                    return r();
                  }));
            }
            function yr(r) {
              Y(r.L.O.M.name + " instance already deleted");
            }
            function wr() {}
            function gr(r, e, a) {
              if (void 0 === r[e].R) {
                var n = r[e];
                (r[e] = function () {
                  return (
                    r[e].R.hasOwnProperty(arguments.length) ||
                      Y(
                        "Function '" +
                          a +
                          "' called with an invalid number of arguments (" +
                          arguments.length +
                          ") - expects one of (" +
                          r[e].R +
                          ")!"
                      ),
                    r[e].R[arguments.length].apply(this, arguments)
                  );
                }),
                  (r[e].R = []),
                  (r[e].R[n.Y] = n);
              }
            }
            function Er(r, e, a, n, i, t, f, o) {
              (this.name = r),
                (this.constructor = e),
                (this.W = a),
                (this.V = n),
                (this.P = i),
                (this.oa = t),
                (this.aa = f),
                (this.ma = o),
                (this.ia = []);
            }
            function Gr(r, e, a) {
              for (; e !== a; )
                e.aa ||
                  Y(
                    "Expected null or instance of " +
                      a.name +
                      ", got an instance of " +
                      e.name
                  ),
                  (r = e.aa(r)),
                  (e = e.P);
              return r;
            }
            function Zr(r, e) {
              return null === e
                ? (this.da && Y("null is not a valid " + this.name), 0)
                : (e.L || Y('Cannot pass "' + Xr(e) + '" as a ' + this.name),
                  e.L.N ||
                    Y(
                      "Cannot pass deleted object as a pointer of type " +
                        this.name
                    ),
                  Gr(e.L.N, e.L.O.M, this.M));
            }
            function Rr(r, e) {
              if (null === e) {
                if (
                  (this.da && Y("null is not a valid " + this.name), this.ca)
                ) {
                  var a = this.ea();
                  return null !== r && r.push(this.V, a), a;
                }
                return 0;
              }
              if (
                (e.L || Y('Cannot pass "' + Xr(e) + '" as a ' + this.name),
                e.L.N ||
                  Y(
                    "Cannot pass deleted object as a pointer of type " +
                      this.name
                  ),
                !this.ba &&
                  e.L.O.ba &&
                  Y(
                    "Cannot convert argument of type " +
                      (e.L.T ? e.L.T.name : e.L.O.name) +
                      " to parameter type " +
                      this.name
                  ),
                (a = Gr(e.L.N, e.L.O.M, this.M)),
                this.ca)
              )
                switch (
                  (void 0 === e.L.S &&
                    Y("Passing raw pointer to smart pointer is illegal"),
                  this.Aa)
                ) {
                  case 0:
                    e.L.T === this
                      ? (a = e.L.S)
                      : Y(
                          "Cannot convert argument of type " +
                            (e.L.T ? e.L.T.name : e.L.O.name) +
                            " to parameter type " +
                            this.name
                        );
                    break;
                  case 1:
                    a = e.L.S;
                    break;
                  case 2:
                    if (e.L.T === this) a = e.L.S;
                    else {
                      var n = e.clone();
                      (a = this.wa(
                        a,
                        j(function () {
                          n.delete();
                        })
                      )),
                        null !== r && r.push(this.V, a);
                    }
                    break;
                  default:
                    Y("Unsupporting sharing policy");
                }
              return a;
            }
            function Wr(r, e) {
              return null === e
                ? (this.da && Y("null is not a valid " + this.name), 0)
                : (e.L || Y('Cannot pass "' + Xr(e) + '" as a ' + this.name),
                  e.L.N ||
                    Y(
                      "Cannot pass deleted object as a pointer of type " +
                        this.name
                    ),
                  e.L.O.ba &&
                    Y(
                      "Cannot convert argument of type " +
                        e.L.O.name +
                        " to parameter type " +
                        this.name
                    ),
                  Gr(e.L.N, e.L.O.M, this.M));
            }
            function Vr(r, e, a, n) {
              (this.name = r),
                (this.M = e),
                (this.da = a),
                (this.ba = n),
                (this.ca = !1),
                (this.V =
                  this.wa =
                  this.ea =
                  this.ja =
                  this.Aa =
                  this.va =
                    void 0),
                void 0 !== e.P
                  ? (this.toWireType = Rr)
                  : ((this.toWireType = n ? Zr : Wr), (this.U = null));
            }
            function Tr(r, e) {
              var n = (r = x(r)).includes("j")
                ? (function (r, e) {
                    var n = [];
                    return function () {
                      if (
                        ((n.length = 0),
                        Object.assign(n, arguments),
                        r.includes("j"))
                      ) {
                        var i = a["dynCall_" + r];
                        i =
                          n && n.length
                            ? i.apply(null, [e].concat(n))
                            : i.call(null, e);
                      } else i = Z.get(e).apply(null, n);
                      return i;
                    };
                  })(r, e)
                : Z.get(e);
              return (
                "function" != typeof n &&
                  Y("unknown function pointer with signature " + r + ": " + e),
                n
              );
            }
            var Ir = void 0;
            function Br(r, e) {
              var a = [],
                n = {};
              throw (
                (e.forEach(function r(e) {
                  n[e] ||
                    er[e] ||
                    (vr[e] ? vr[e].forEach(r) : (a.push(e), (n[e] = !0)));
                }),
                new Ir(r + ": " + a.map(ar).join([", "])))
              );
            }
            function Or(r, e, a, n, i) {
              var t = e.length;
              2 > t &&
                Y(
                  "argTypes array size mismatch! Must at least get return value and 'this' types!"
                );
              var f = null !== e[1] && null !== a,
                o = !1;
              for (a = 1; a < e.length; ++a)
                if (null !== e[a] && void 0 === e[a].U) {
                  o = !0;
                  break;
                }
              var u = "void" !== e[0].name,
                c = t - 2,
                b = Array(c),
                A = [],
                s = [];
              return function () {
                if (
                  (arguments.length !== c &&
                    Y(
                      "function " +
                        r +
                        " called with " +
                        arguments.length +
                        " arguments, expected " +
                        c +
                        " args!"
                    ),
                  (s.length = 0),
                  (A.length = f ? 2 : 1),
                  (A[0] = i),
                  f)
                ) {
                  var a = e[1].toWireType(s, this);
                  A[1] = a;
                }
                for (var t = 0; t < c; ++t)
                  (b[t] = e[t + 2].toWireType(s, arguments[t])), A.push(b[t]);
                if (((t = n.apply(null, A)), o)) lr(s);
                else
                  for (var k = f ? 1 : 2; k < e.length; k++) {
                    var l = 1 === k ? a : b[k - 2];
                    null !== e[k].U && e[k].U(l);
                  }
                return (a = u ? e[0].fromWireType(t) : void 0);
              };
            }
            function _r(r, e) {
              for (var a = [], n = 0; n < r; n++) a.push(N[(e + 4 * n) >> 2]);
              return a;
            }
            function Lr(r) {
              4 < r && 0 === --U[r].fa && ((U[r] = void 0), H.push(r));
            }
            function Xr(r) {
              if (null === r) return "null";
              var e = typeof r;
              return "object" === e || "array" === e || "function" === e
                ? r.toString()
                : "" + r;
            }
            function Fr(r, e) {
              switch (e) {
                case 2:
                  return function (r) {
                    return this.fromWireType(m[r >> 2]);
                  };
                case 3:
                  return function (r) {
                    return this.fromWireType(y[r >> 3]);
                  };
                default:
                  throw new TypeError("Unknown float type: " + r);
              }
            }
            function Cr(r, e, a) {
              switch (e) {
                case 0:
                  return a
                    ? function (r) {
                        return l[r];
                      }
                    : function (r) {
                        return d[r];
                      };
                case 1:
                  return a
                    ? function (r) {
                        return h[r >> 1];
                      }
                    : function (r) {
                        return v[r >> 1];
                      };
                case 2:
                  return a
                    ? function (r) {
                        return p[r >> 2];
                      }
                    : function (r) {
                        return N[r >> 2];
                      };
                default:
                  throw new TypeError("Unknown integer type: " + r);
              }
            }
            function Pr(r, e) {
              for (var a = "", n = 0; !(n >= e / 2); ++n) {
                var i = h[(r + 2 * n) >> 1];
                if (0 == i) break;
                a += String.fromCharCode(i);
              }
              return a;
            }
            function Ur(r, e, a) {
              if ((void 0 === a && (a = 2147483647), 2 > a)) return 0;
              var n = e;
              a = (a -= 2) < 2 * r.length ? a / 2 : r.length;
              for (var i = 0; i < a; ++i)
                (h[e >> 1] = r.charCodeAt(i)), (e += 2);
              return (h[e >> 1] = 0), e - n;
            }
            function Hr(r) {
              return 2 * r.length;
            }
            function Mr(r, e) {
              for (var a = 0, n = ""; !(a >= e / 4); ) {
                var i = p[(r + 4 * a) >> 2];
                if (0 == i) break;
                ++a,
                  65536 <= i
                    ? ((i -= 65536),
                      (n += String.fromCharCode(
                        55296 | (i >> 10),
                        56320 | (1023 & i)
                      )))
                    : (n += String.fromCharCode(i));
              }
              return n;
            }
            function Sr(r, e, a) {
              if ((void 0 === a && (a = 2147483647), 4 > a)) return 0;
              var n = e;
              a = n + a - 4;
              for (var i = 0; i < r.length; ++i) {
                var t = r.charCodeAt(i);
                if (55296 <= t && 57343 >= t)
                  t = (65536 + ((1023 & t) << 10)) | (1023 & r.charCodeAt(++i));
                if (((p[e >> 2] = t), (e += 4) + 4 > a)) break;
              }
              return (p[e >> 2] = 0), e - n;
            }
            function Yr(r) {
              for (var e = 0, a = 0; a < r.length; ++a) {
                var n = r.charCodeAt(a);
                55296 <= n && 57343 >= n && ++a, (e += 4);
              }
              return e;
            }
            var Dr = {};
            function jr(r) {
              var e = Dr[r];
              return void 0 === e ? x(r) : e;
            }
            var Qr = [];
            var zr = [],
              xr = [null, [], []];
            (S = a.BindingError = M("BindingError")),
              (a.count_emval_handles = function () {
                for (var r = 0, e = 5; e < U.length; ++e)
                  void 0 !== U[e] && ++r;
                return r;
              }),
              (a.get_first_emval = function () {
                for (var r = 5; r < U.length; ++r)
                  if (void 0 !== U[r]) return U[r];
                return null;
              }),
              (Q = a.PureVirtualError = M("PureVirtualError"));
            for (var Jr = Array(256), Kr = 0; 256 > Kr; ++Kr)
              Jr[Kr] = String.fromCharCode(Kr);
            (z = Jr),
              (a.getInheritedInstanceCount = function () {
                return Object.keys($).length;
              }),
              (a.getLiveInheritedInstances = function () {
                var r,
                  e = [];
                for (r in $) $.hasOwnProperty(r) && e.push($[r]);
                return e;
              }),
              (a.flushPendingDeletes = K),
              (a.setDelayFunction = function (r) {
                (q = r), J.length && q && q(K);
              }),
              (cr = a.InternalError = M("InternalError")),
              (wr.prototype.isAliasOf = function (r) {
                if (!(this instanceof wr && r instanceof wr)) return !1;
                var e = this.L.O.M,
                  a = this.L.N,
                  n = r.L.O.M;
                for (r = r.L.N; e.P; ) (a = e.aa(a)), (e = e.P);
                for (; n.P; ) (r = n.aa(r)), (n = n.P);
                return e === n && a === r;
              }),
              (wr.prototype.clone = function () {
                if ((this.L.N || yr(this), this.L.$))
                  return (this.L.count.value += 1), this;
                var r = sr,
                  e = Object,
                  a = e.create,
                  n = Object.getPrototypeOf(this),
                  i = this.L;
                return (
                  ((r = r(
                    a.call(e, n, {
                      L: {
                        value: {
                          count: i.count,
                          Z: i.Z,
                          $: i.$,
                          N: i.N,
                          O: i.O,
                          S: i.S,
                          T: i.T,
                        },
                      },
                    })
                  )).L.count.value += 1),
                  (r.L.Z = !1),
                  r
                );
              }),
              (wr.prototype.delete = function () {
                this.L.N || yr(this),
                  this.L.Z &&
                    !this.L.$ &&
                    Y("Object already scheduled for deletion"),
                  ir(this),
                  fr(this.L),
                  this.L.$ || ((this.L.S = void 0), (this.L.N = void 0));
              }),
              (wr.prototype.isDeleted = function () {
                return !this.L.N;
              }),
              (wr.prototype.deleteLater = function () {
                return (
                  this.L.N || yr(this),
                  this.L.Z &&
                    !this.L.$ &&
                    Y("Object already scheduled for deletion"),
                  J.push(this),
                  1 === J.length && q && q(K),
                  (this.L.Z = !0),
                  this
                );
              }),
              (Vr.prototype.pa = function (r) {
                return this.ja && (r = this.ja(r)), r;
              }),
              (Vr.prototype.ga = function (r) {
                this.V && this.V(r);
              }),
              (Vr.prototype.argPackAdvance = 8),
              (Vr.prototype.readValueFromPointer = dr),
              (Vr.prototype.deleteObject = function (r) {
                null !== r && r.delete();
              }),
              (Vr.prototype.fromWireType = function (r) {
                function e() {
                  return this.ca
                    ? Ar(this.M.W, { O: this.va, N: a, T: this, S: r })
                    : Ar(this.M.W, { O: this, N: r });
                }
                var a = this.pa(r);
                if (!a) return this.ga(r), null;
                var n = (function (r, e) {
                  return (e = rr(r, e)), $[e];
                })(this.M, a);
                if (void 0 !== n)
                  return 0 === n.L.count.value
                    ? ((n.L.N = a), (n.L.S = r), n.clone())
                    : ((n = n.clone()), this.ga(r), n);
                if (((n = this.M.oa(a)), !(n = ur[n]))) return e.call(this);
                n = this.ba ? n.ka : n.pointerType;
                var i = or(a, this.M, n.M);
                return null === i
                  ? e.call(this)
                  : this.ca
                  ? Ar(n.M.W, { O: n, N: i, T: this, S: r })
                  : Ar(n.M.W, { O: n, N: i });
              }),
              (Ir = a.UnboundTypeError = M("UnboundTypeError"));
            var qr =
                "function" == typeof atob
                  ? atob
                  : function (r) {
                      var e = "",
                        a = 0;
                      r = r.replace(/[^A-Za-z0-9\+\/=]/g, "");
                      do {
                        var n =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                              r.charAt(a++)
                            ),
                          i =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                              r.charAt(a++)
                            ),
                          t =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                              r.charAt(a++)
                            ),
                          f =
                            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(
                              r.charAt(a++)
                            );
                        (n = (n << 2) | (i >> 4)),
                          (i = ((15 & i) << 4) | (t >> 2));
                        var o = ((3 & t) << 6) | f;
                        (e += String.fromCharCode(n)),
                          64 !== t && (e += String.fromCharCode(i)),
                          64 !== f && (e += String.fromCharCode(o));
                      } while (a < r.length);
                      return e;
                    },
              $r = {
                q: function (r, e, a) {
                  (r = x(r)), (e = nr(e, "wrapper")), (a = D(a));
                  var n = [].slice,
                    i = e.M,
                    t = i.W,
                    f = i.P.W,
                    o = i.P.constructor;
                  for (var u in ((r = P(r, function () {
                    i.P.ia.forEach(
                      function (r) {
                        if (this[r] === f[r])
                          throw new Q(
                            "Pure virtual function " +
                              r +
                              " must be implemented in JavaScript"
                          );
                      }.bind(this)
                    ),
                      Object.defineProperty(this, "__parent", { value: t }),
                      this.__construct.apply(this, n.call(arguments));
                  })),
                  (t.__construct = function () {
                    this === t && Y("Pass correct 'this' to __construct");
                    var r = o.implement.apply(
                      void 0,
                      [this].concat(n.call(arguments))
                    );
                    ir(r);
                    var e = r.L;
                    r.notifyOnDestruction(),
                      (e.$ = !0),
                      Object.defineProperties(this, { L: { value: e } }),
                      sr(this),
                      (r = e.N),
                      (r = rr(i, r)),
                      $.hasOwnProperty(r)
                        ? Y("Tried to register registered instance: " + r)
                        : ($[r] = this);
                  }),
                  (t.__destruct = function () {
                    this === t && Y("Pass correct 'this' to __destruct"),
                      ir(this);
                    var r = this.L.N;
                    (r = rr(i, r)),
                      $.hasOwnProperty(r)
                        ? delete $[r]
                        : Y("Tried to unregister unregistered instance: " + r);
                  }),
                  (r.prototype = Object.create(t)),
                  a))
                    r.prototype[u] = a[u];
                  return j(r);
                },
                k: function (r) {
                  var e = kr[r];
                  delete kr[r];
                  var a = e.ea,
                    n = e.V,
                    i = e.ha;
                  pr(
                    [r],
                    i
                      .map(function (r) {
                        return r.sa;
                      })
                      .concat(
                        i.map(function (r) {
                          return r.ya;
                        })
                      ),
                    function (r) {
                      var t = {};
                      return (
                        i.forEach(function (e, a) {
                          var n = r[a],
                            f = e.qa,
                            o = e.ra,
                            u = r[a + i.length],
                            c = e.xa,
                            b = e.za;
                          t[e.na] = {
                            read: function (r) {
                              return n.fromWireType(f(o, r));
                            },
                            write: function (r, e) {
                              var a = [];
                              c(b, r, u.toWireType(a, e)), lr(a);
                            },
                          };
                        }),
                        [
                          {
                            name: e.name,
                            fromWireType: function (r) {
                              var e,
                                a = {};
                              for (e in t) a[e] = t[e].read(r);
                              return n(r), a;
                            },
                            toWireType: function (r, e) {
                              for (var i in t)
                                if (!(i in e))
                                  throw new TypeError(
                                    'Missing field:  "' + i + '"'
                                  );
                              var f = a();
                              for (i in t) t[i].write(f, e[i]);
                              return null !== r && r.push(n, f), f;
                            },
                            argPackAdvance: 8,
                            readValueFromPointer: dr,
                            U: n,
                          },
                        ]
                      );
                    }
                  );
                },
                w: function () {},
                C: function (r, e, a, n, i) {
                  var t = Nr(a);
                  mr(r, {
                    name: (e = x(e)),
                    fromWireType: function (r) {
                      return !!r;
                    },
                    toWireType: function (r, e) {
                      return e ? n : i;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: function (r) {
                      if (1 === a) var n = l;
                      else if (2 === a) n = h;
                      else {
                        if (4 !== a)
                          throw new TypeError(
                            "Unknown boolean type size: " + e
                          );
                        n = p;
                      }
                      return this.fromWireType(n[r >> t]);
                    },
                    U: null,
                  });
                },
                f: function (r, e, n, i, t, f, o, u, c, b, A, s, k) {
                  (A = x(A)),
                    (f = Tr(t, f)),
                    u && (u = Tr(o, u)),
                    b && (b = Tr(c, b)),
                    (k = Tr(s, k));
                  var l = C(A);
                  (function (r, e) {
                    a.hasOwnProperty(r)
                      ? (Y("Cannot register public name '" + r + "' twice"),
                        gr(a, r, r),
                        a.hasOwnProperty(void 0) &&
                          Y(
                            "Cannot register multiple overloads of a function with the same number of arguments (undefined)!"
                          ),
                        (a[r].R[void 0] = e))
                      : (a[r] = e);
                  })(l, function () {
                    Br("Cannot construct " + A + " due to unbound types", [i]);
                  }),
                    pr([r, e, n], i ? [i] : [], function (e) {
                      if (((e = e[0]), i))
                        var n = e.M,
                          t = n.W;
                      else t = wr.prototype;
                      e = P(l, function () {
                        if (Object.getPrototypeOf(this) !== o)
                          throw new S("Use 'new' to construct " + A);
                        if (void 0 === c.X)
                          throw new S(A + " has no accessible constructor");
                        var r = c.X[arguments.length];
                        if (void 0 === r)
                          throw new S(
                            "Tried to invoke ctor of " +
                              A +
                              " with invalid number of parameters (" +
                              arguments.length +
                              ") - expected (" +
                              Object.keys(c.X).toString() +
                              ") parameters instead!"
                          );
                        return r.apply(this, arguments);
                      });
                      var o = Object.create(t, { constructor: { value: e } });
                      e.prototype = o;
                      var c = new Er(A, e, o, k, n, f, u, b);
                      (n = new Vr(A, c, !0, !1)),
                        (t = new Vr(A + "*", c, !1, !1));
                      var s = new Vr(A + " const*", c, !1, !0);
                      return (
                        (ur[r] = { pointerType: t, ka: s }),
                        (function (r, e) {
                          a.hasOwnProperty(r) ||
                            br("Replacing nonexistant public symbol"),
                            (a[r] = e),
                            (a[r].Y = void 0);
                        })(l, e),
                        [n, t, s]
                      );
                    });
                },
                d: function (r, e, a, n, i, t, f) {
                  var o = _r(a, n);
                  (e = x(e)),
                    (t = Tr(i, t)),
                    pr([], [r], function (r) {
                      function n() {
                        Br("Cannot call " + i + " due to unbound types", o);
                      }
                      var i = (r = r[0]).name + "." + e;
                      e.startsWith("@@") && (e = Symbol[e.substring(2)]);
                      var u = r.M.constructor;
                      return (
                        void 0 === u[e]
                          ? ((n.Y = a - 1), (u[e] = n))
                          : (gr(u, e, i), (u[e].R[a - 1] = n)),
                        pr([], o, function (r) {
                          return (
                            (r = Or(
                              i,
                              [r[0], null].concat(r.slice(1)),
                              null,
                              t,
                              f
                            )),
                            void 0 === u[e].R
                              ? ((r.Y = a - 1), (u[e] = r))
                              : (u[e].R[a - 1] = r),
                            []
                          );
                        }),
                        []
                      );
                    });
                },
                p: function (r, e, a, n, i, t) {
                  0 < e || _();
                  var f = _r(e, a);
                  (i = Tr(n, i)),
                    pr([], [r], function (r) {
                      var a = "constructor " + (r = r[0]).name;
                      if (
                        (void 0 === r.M.X && (r.M.X = []),
                        void 0 !== r.M.X[e - 1])
                      )
                        throw new S(
                          "Cannot register multiple constructors with identical number of parameters (" +
                            (e - 1) +
                            ") for class '" +
                            r.name +
                            "'! Overload resolution is currently only performed using the parameter count, not actual type info!"
                        );
                      return (
                        (r.M.X[e - 1] = function () {
                          Br(
                            "Cannot construct " +
                              r.name +
                              " due to unbound types",
                            f
                          );
                        }),
                        pr([], f, function (n) {
                          return (
                            n.splice(1, 0, null),
                            (r.M.X[e - 1] = Or(a, n, null, i, t)),
                            []
                          );
                        }),
                        []
                      );
                    });
                },
                b: function (r, e, a, n, i, t, f, o) {
                  var u = _r(a, n);
                  (e = x(e)),
                    (t = Tr(i, t)),
                    pr([], [r], function (r) {
                      function n() {
                        Br("Cannot call " + i + " due to unbound types", u);
                      }
                      var i = (r = r[0]).name + "." + e;
                      e.startsWith("@@") && (e = Symbol[e.substring(2)]),
                        o && r.M.ia.push(e);
                      var c = r.M.W,
                        b = c[e];
                      return (
                        void 0 === b ||
                        (void 0 === b.R &&
                          b.className !== r.name &&
                          b.Y === a - 2)
                          ? ((n.Y = a - 2), (n.className = r.name), (c[e] = n))
                          : (gr(c, e, i), (c[e].R[a - 2] = n)),
                        pr([], u, function (n) {
                          return (
                            (n = Or(i, n, r, t, f)),
                            void 0 === c[e].R
                              ? ((n.Y = a - 2), (c[e] = n))
                              : (c[e].R[a - 2] = n),
                            []
                          );
                        }),
                        []
                      );
                    });
                },
                B: function (r, e) {
                  mr(r, {
                    name: (e = x(e)),
                    fromWireType: function (r) {
                      var e = D(r);
                      return Lr(r), e;
                    },
                    toWireType: function (r, e) {
                      return j(e);
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dr,
                    U: null,
                  });
                },
                n: function (r, e, a) {
                  (a = Nr(a)),
                    mr(r, {
                      name: (e = x(e)),
                      fromWireType: function (r) {
                        return r;
                      },
                      toWireType: function (r, e) {
                        return e;
                      },
                      argPackAdvance: 8,
                      readValueFromPointer: Fr(e, a),
                      U: null,
                    });
                },
                e: function (r, e, a, n, i) {
                  (e = x(e)), -1 === i && (i = 4294967295), (i = Nr(a));
                  var t = function (r) {
                    return r;
                  };
                  if (0 === n) {
                    var f = 32 - 8 * a;
                    t = function (r) {
                      return (r << f) >>> f;
                    };
                  }
                  (a = e.includes("unsigned")
                    ? function (r, e) {
                        return e >>> 0;
                      }
                    : function (r, e) {
                        return e;
                      }),
                    mr(r, {
                      name: e,
                      fromWireType: t,
                      toWireType: a,
                      argPackAdvance: 8,
                      readValueFromPointer: Cr(e, i, 0 !== n),
                      U: null,
                    });
                },
                c: function (r, e, a) {
                  function n(r) {
                    r >>= 2;
                    var e = N;
                    return new i(e.buffer, e[r + 1], e[r]);
                  }
                  var i = [
                    Int8Array,
                    Uint8Array,
                    Int16Array,
                    Uint16Array,
                    Int32Array,
                    Uint32Array,
                    Float32Array,
                    Float64Array,
                  ][e];
                  mr(
                    r,
                    {
                      name: (a = x(a)),
                      fromWireType: n,
                      argPackAdvance: 8,
                      readValueFromPointer: n,
                    },
                    { ta: !0 }
                  );
                },
                o: function (r, e) {
                  var a = "std::string" === (e = x(e));
                  mr(r, {
                    name: e,
                    fromWireType: function (r) {
                      var e = N[r >> 2],
                        n = r + 4;
                      if (a)
                        for (var i = n, t = 0; t <= e; ++t) {
                          var f = n + t;
                          if (t == e || 0 == d[f]) {
                            if (((i = i ? g(d, i, f - i) : ""), void 0 === o))
                              var o = i;
                            else (o += String.fromCharCode(0)), (o += i);
                            i = f + 1;
                          }
                        }
                      else {
                        for (o = Array(e), t = 0; t < e; ++t)
                          o[t] = String.fromCharCode(d[n + t]);
                        o = o.join("");
                      }
                      return ie(r), o;
                    },
                    toWireType: function (r, e) {
                      e instanceof ArrayBuffer && (e = new Uint8Array(e));
                      var n,
                        i = "string" == typeof e;
                      if (
                        (i ||
                          e instanceof Uint8Array ||
                          e instanceof Uint8ClampedArray ||
                          e instanceof Int8Array ||
                          Y("Cannot pass non-string to std::string"),
                        a && i)
                      ) {
                        var t = 0;
                        for (n = 0; n < e.length; ++n) {
                          var f = e.charCodeAt(n);
                          127 >= f
                            ? t++
                            : 2047 >= f
                            ? (t += 2)
                            : 55296 <= f && 57343 >= f
                            ? ((t += 4), ++n)
                            : (t += 3);
                        }
                        n = t;
                      } else n = e.length;
                      if (
                        ((f = (t = ne(4 + n + 1)) + 4), (N[t >> 2] = n), a && i)
                      ) {
                        if (((i = f), (f = n + 1), (n = d), 0 < f)) {
                          f = i + f - 1;
                          for (var o = 0; o < e.length; ++o) {
                            var u = e.charCodeAt(o);
                            if (55296 <= u && 57343 >= u)
                              u =
                                (65536 + ((1023 & u) << 10)) |
                                (1023 & e.charCodeAt(++o));
                            if (127 >= u) {
                              if (i >= f) break;
                              n[i++] = u;
                            } else {
                              if (2047 >= u) {
                                if (i + 1 >= f) break;
                                n[i++] = 192 | (u >> 6);
                              } else {
                                if (65535 >= u) {
                                  if (i + 2 >= f) break;
                                  n[i++] = 224 | (u >> 12);
                                } else {
                                  if (i + 3 >= f) break;
                                  (n[i++] = 240 | (u >> 18)),
                                    (n[i++] = 128 | ((u >> 12) & 63));
                                }
                                n[i++] = 128 | ((u >> 6) & 63);
                              }
                              n[i++] = 128 | (63 & u);
                            }
                          }
                          n[i] = 0;
                        }
                      } else if (i)
                        for (i = 0; i < n; ++i)
                          255 < (o = e.charCodeAt(i)) &&
                            (ie(f),
                            Y(
                              "String has UTF-16 code units that do not fit in 8 bits"
                            )),
                            (d[f + i] = o);
                      else for (i = 0; i < n; ++i) d[f + i] = e[i];
                      return null !== r && r.push(ie, t), t;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dr,
                    U: function (r) {
                      ie(r);
                    },
                  });
                },
                j: function (r, e, a) {
                  if (((a = x(a)), 2 === e))
                    var n = Pr,
                      i = Ur,
                      t = Hr,
                      f = function () {
                        return v;
                      },
                      o = 1;
                  else
                    4 === e &&
                      ((n = Mr),
                      (i = Sr),
                      (t = Yr),
                      (f = function () {
                        return N;
                      }),
                      (o = 2));
                  mr(r, {
                    name: a,
                    fromWireType: function (r) {
                      for (
                        var a, i = N[r >> 2], t = f(), u = r + 4, c = 0;
                        c <= i;
                        ++c
                      ) {
                        var b = r + 4 + c * e;
                        (c == i || 0 == t[b >> o]) &&
                          ((u = n(u, b - u)),
                          void 0 === a
                            ? (a = u)
                            : ((a += String.fromCharCode(0)), (a += u)),
                          (u = b + e));
                      }
                      return ie(r), a;
                    },
                    toWireType: function (r, n) {
                      "string" != typeof n &&
                        Y("Cannot pass non-string to C++ string type " + a);
                      var f = t(n),
                        u = ne(4 + f + e);
                      return (
                        (N[u >> 2] = f >> o),
                        i(n, u + 4, f + e),
                        null !== r && r.push(ie, u),
                        u
                      );
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: dr,
                    U: function (r) {
                      ie(r);
                    },
                  });
                },
                l: function (r, e, a, n, i, t) {
                  kr[r] = { name: x(e), ea: Tr(a, n), V: Tr(i, t), ha: [] };
                },
                i: function (r, e, a, n, i, t, f, o, u, c) {
                  kr[r].ha.push({
                    na: x(e),
                    sa: a,
                    qa: Tr(n, i),
                    ra: t,
                    ya: f,
                    xa: Tr(o, u),
                    za: c,
                  });
                },
                D: function (r, e) {
                  mr(r, {
                    ua: !0,
                    name: (e = x(e)),
                    argPackAdvance: 0,
                    fromWireType: function () {},
                    toWireType: function () {},
                  });
                },
                t: function (r, e, a, n, i) {
                  (r = Qr[r]), (e = D(e)), (a = jr(a));
                  var t = [];
                  return (N[n >> 2] = j(t)), r(e, a, t, i);
                },
                u: function (r, e, a, n) {
                  (r = Qr[r])((e = D(e)), (a = jr(a)), null, n);
                },
                h: Lr,
                m: function (r, e) {
                  var a = (function (r, e) {
                      for (var a = Array(r), n = 0; n < r; ++n)
                        a[n] = nr(N[(e + 4 * n) >> 2], "parameter " + n);
                      return a;
                    })(r, e),
                    n = a[0];
                  e =
                    n.name +
                    "_$" +
                    a
                      .slice(1)
                      .map(function (r) {
                        return r.name;
                      })
                      .join("_") +
                    "$";
                  var i = zr[e];
                  if (void 0 !== i) return i;
                  var t = Array(r - 1);
                  return (
                    (i = (function (r) {
                      var e = Qr.length;
                      return Qr.push(r), e;
                    })(function (e, i, f, o) {
                      for (var u = 0, c = 0; c < r - 1; ++c)
                        (t[c] = a[c + 1].readValueFromPointer(o + u)),
                          (u += a[c + 1].argPackAdvance);
                      for (e = e[i].apply(e, t), c = 0; c < r - 1; ++c)
                        a[c + 1].la && a[c + 1].la(t[c]);
                      if (!n.ua) return n.toWireType(f, e);
                    })),
                    (zr[e] = i)
                  );
                },
                r: function (r) {
                  4 < r && (U[r].fa += 1);
                },
                s: function (r) {
                  lr(D(r)), Lr(r);
                },
                g: function () {
                  _("");
                },
                y: function (r, e, a) {
                  d.copyWithin(r, e, e + a);
                },
                x: function (r) {
                  var e = d.length;
                  if (2147483648 < (r >>>= 0)) return !1;
                  for (var a = 1; 4 >= a; a *= 2) {
                    var n = e * (1 + 0.2 / a);
                    n = Math.min(n, r + 100663296);
                    var i = Math,
                      t = i.min;
                    (n = Math.max(r, n)), (n += (65536 - (n % 65536)) % 65536);
                    r: {
                      var f = k.buffer;
                      try {
                        k.grow(
                          (t.call(i, 2147483648, n) - f.byteLength + 65535) >>>
                            16
                        ),
                          E();
                        var o = 1;
                        break r;
                      } catch (u) {}
                      o = void 0;
                    }
                    if (o) return !0;
                  }
                  return !1;
                },
                A: function () {
                  return 52;
                },
                v: function () {
                  return 70;
                },
                z: function (r, e, a, n) {
                  for (var i = 0, t = 0; t < a; t++) {
                    var f = N[e >> 2],
                      o = N[(e + 4) >> 2];
                    e += 8;
                    for (var b = 0; b < o; b++) {
                      var A = d[f + b],
                        s = xr[r];
                      0 === A || 10 === A
                        ? ((1 === r ? u : c)(g(s, 0)), (s.length = 0))
                        : s.push(A);
                    }
                    i += o;
                  }
                  return (N[n >> 2] = i), 0;
                },
                a: k,
              },
              re = (function () {
                function r(r) {
                  (a.asm = r.exports),
                    (Z = a.asm.I),
                    W.unshift(a.asm.E),
                    B--,
                    a.monitorRunDependencies && a.monitorRunDependencies(B),
                    0 == B && O && ((r = O), (O = null), r());
                }
                var e = { a: $r };
                if (
                  (B++,
                  a.monitorRunDependencies && a.monitorRunDependencies(B),
                  a.instantiateWasm)
                )
                  try {
                    return a.instantiateWasm(e, r);
                  } catch (n) {
                    c(
                      "Module.instantiateWasm callback failed with error: " + n
                    ),
                      i(n);
                  }
                return (
                  (e = (function (r) {
                    var e = I;
                    try {
                      try {
                        if (e == I && o) new Uint8Array(o);
                        else {
                          if (L(e)) {
                            try {
                              var a = qr(e.slice(37)),
                                n = new Uint8Array(a.length);
                              for (e = 0; e < a.length; ++e)
                                n[e] = a.charCodeAt(e);
                              var i = n;
                            } catch (s) {
                              throw Error(
                                "Converting base64 string to bytes failed."
                              );
                            }
                            var t = i;
                          } else t = void 0;
                          if (!t)
                            throw "sync fetching of the wasm failed: you can preload it to Module['wasmBinary'] manually, or emcc.py will do that for you when generating HTML (but not JS)";
                        }
                      } catch (k) {
                        _(k);
                      }
                      var f = new b(),
                        u = new A(r);
                    } catch (k) {
                      throw (
                        ((r = k.toString()),
                        c("failed to compile wasm module: " + r),
                        (r.includes("imported Memory") ||
                          r.includes("memory import")) &&
                          c(
                            "Memory size incompatibility issues may be due to changing INITIAL_MEMORY at runtime to something too large. Use ALLOW_MEMORY_GROWTH to allow any size memory (and also make sure not to set INITIAL_MEMORY at runtime to something smaller than it was at compile time)."
                          ),
                        k)
                      );
                    }
                    return [u, f];
                  })(e)),
                  r(e[0]),
                  a.asm
                );
              })(),
              ee = (a.___getTypeName = re.F);
            a.__embind_initialize_bindings = re.G;
            var ae,
              ne = re.H,
              ie = re.J;
            function te() {
              function r() {
                if (!ae && ((ae = !0), (a.calledRun = !0), !w)) {
                  if (
                    (F(W),
                    n(a),
                    a.onRuntimeInitialized && a.onRuntimeInitialized(),
                    a.postRun)
                  )
                    for (
                      "function" == typeof a.postRun &&
                      (a.postRun = [a.postRun]);
                      a.postRun.length;

                    ) {
                      var r = a.postRun.shift();
                      V.unshift(r);
                    }
                  F(V);
                }
              }
              if (!(0 < B)) {
                if (a.preRun)
                  for (
                    "function" == typeof a.preRun && (a.preRun = [a.preRun]);
                    a.preRun.length;

                  )
                    T();
                F(R),
                  0 < B ||
                    (a.setStatus
                      ? (a.setStatus("Running..."),
                        setTimeout(function () {
                          setTimeout(function () {
                            a.setStatus("");
                          }, 1),
                            r();
                        }, 1))
                      : r());
              }
            }
            if (
              ((a.dynCall_jiji = re.K),
              (O = function r() {
                ae || te(), ae || (O = r);
              }),
              a.preInit)
            )
              for (
                "function" == typeof a.preInit && (a.preInit = [a.preInit]);
                0 < a.preInit.length;

              )
                a.preInit.pop()();
            return te(), e;
          };
        })(),
        N = p;
      var m = (0, v.default)(N());
    },
  },
]);
