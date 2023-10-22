"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [165],
  {
    4433: function (o, e, l) {
      l.d(e, {
        $h: function () {
          return s;
        },
        c8: function () {
          return d;
        },
        iz: function () {
          return v;
        },
      });
      var i = l(26042),
        n = l(69396),
        t = l(85893),
        a = l(67294),
        c = l(62246),
        d = (l(31996), 1928 / 118),
        r = [
          {
            id: "slantLeft",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M".concat(o, " 0L-0 ").concat(e, "V0H").concat(o);
            },
          },
          {
            id: "slantRight",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0L".concat(o, " ").concat(e, "V0H0");
            },
          },
          {
            id: "pointUp",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0V"
                .concat(e, "L")
                .concat(o / 2, " 0L")
                .concat(o, " ")
                .concat(e, "L")
                .concat(1.5 * o, " 0V0H0");
            },
          },
          {
            id: "pointDown",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0L"
                .concat(o / 2, " ")
                .concat(e, "L")
                .concat(o, " 0H0");
            },
          },
          {
            id: "curveUp",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0 C"
                .concat(o / 2, " ")
                .concat(e, " ")
                .concat(o - o / 2, " ")
                .concat(e, " ")
                .concat(o, " 0 L")
                .concat(o, " 0 L0 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 "
                .concat(e, " C")
                .concat(o / 2, " 0 ")
                .concat(o - o / 2, " 0 ")
                .concat(o, " ")
                .concat(e, " L")
                .concat(o, " 0 L0 0");
            },
          },
          {
            id: "waveLeft",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0C0 0 "
                .concat(0.2023 * o, " ")
                .concat(e, " ")
                .concat(0.3333 * o, " ")
                .concat(e, "C")
                .concat(0.4681 * o, " ")
                .concat(e, " ")
                .concat(0.5318 * o, " 0 ")
                .concat(0.6667 * o, " 0C")
                .concat(0.8015 * o, " 0 ")
                .concat(o, " ")
                .concat(e, " ")
                .concat(o, " ")
                .concat(e, "V0H0Z");
            },
          },
          {
            id: "waveRight",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M"
                .concat(o, " 0C")
                .concat(o, " 0 ")
                .concat(0.8 * o, " ")
                .concat(e, " ")
                .concat(0.666 * o, " ")
                .concat(e, "C")
                .concat(0.547 * o, " ")
                .concat(e, " ")
                .concat(0.483 * o, " 0 ")
                .concat(0.333 * o, " 0C")
                .concat(0.184 * o, " 0 -0.00012207 ")
                .concat(e, " -0.00012207 ")
                .concat(e, "V0H")
                .concat(o);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 0L"
                .concat(o / 3, " ")
                .concat(e, "L")
                .concat(o / 1.5, " 0L")
                .concat(o, " ")
                .concat(e, "V0H0");
            },
          },
          {
            id: "jaggedRight",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M"
                .concat(o, " 0L")
                .concat(o / 1.5, " ")
                .concat(e, "L")
                .concat(o / 3, " 0L0 ")
                .concat(e, "V0H")
                .concat(o);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M0 "
                .concat(e, "C")
                .concat(o, " 0 ")
                .concat(2 * o, " 0 ")
                .concat(2 * o, " 0H0V")
                .concat(e);
            },
          },
          {
            id: "swoopRight",
            getPath: function (o) {
              var e = Math.floor(o / d);
              return "M"
                .concat(o, " ")
                .concat(e, "C")
                .concat(o / 2, " 0 0 0 0 0H")
                .concat(2 * o, "V")
                .concat(e);
            },
          },
        ];
      function s(o) {
        return { zIndex: 40 - (null === o || void 0 === o ? void 0 : o.idx) };
      }
      var u = function (o) {
          var e = o.uniqueId,
            l = o.width,
            i = o.height,
            n = o.divider,
            a = Math.floor(l / d),
            c = Math.floor(l),
            s = Math.floor(i),
            u = Math.floor(i - a),
            v = r.find(function (o) {
              return o.id === n;
            });
          return (0, t.jsx)("svg", {
            className: "absolute bottom-0 left-0",
            width: c,
            height: s,
            viewBox: "0 0 ".concat(c, " ").concat(s),
            children: (0, t.jsxs)("clipPath", {
              id: e,
              children: [
                (0, t.jsx)("rect", {
                  width: c,
                  height: u,
                  fill: "transparent",
                }),
                (0, t.jsx)("path", {
                  d: v.getPath(c),
                  transform: "translate(0, ".concat(u, ")"),
                  fill: "transparent",
                }),
              ],
            }),
          });
        },
        v = function (o) {
          var e = o.divider,
            l = o.previousDivider,
            r = o.contentRef,
            s = o.combinedWithHeaderOffset,
            v = o.dividerUniqueId,
            f = function (o) {
              var e,
                l,
                i = getComputedStyle(o);
              return (
                parseInt(
                  null !== (e = i.paddingTop) && void 0 !== e ? e : "0"
                ) +
                parseInt(
                  null !== (l = i.paddingBottom) && void 0 !== l ? l : "0"
                )
              );
            },
            g = (0, a.useState)({ width: 0, height: 0 }),
            h = g[0],
            m = g[1],
            x = (0, a.useState)({ top: 0, bottom: 0 }),
            p = x[0],
            y = x[1],
            b = !!e,
            j = !!l;
          (0, a.useEffect)(
            function () {
              if (j) {
                var o = Math.floor((h.width || window.innerWidth) / d);
                (r.current.style.marginTop = "-" + (o + 1) + "px"),
                  (r.current.style.paddingTop = o + 1 + "px"),
                  y(function (e) {
                    return (0, n.Z)((0, i.Z)({}, e), { top: o + 1 });
                  });
              } else
                void 0 !== s
                  ? y(function (o) {
                      return (0, n.Z)((0, i.Z)({}, o), { top: s });
                    })
                  : ((r.current.style.marginTop = ""),
                    (r.current.style.paddingTop = ""),
                    y(function (o) {
                      return (0, n.Z)((0, i.Z)({}, o), { top: 0 });
                    }));
            },
            [j, h.width, s]
          ),
            (0, a.useEffect)(
              function () {
                if (b) {
                  var o = Math.floor((h.width || window.innerWidth) / d);
                  (r.current.style.paddingBottom = o + "px"),
                    (r.current.style.clipPath = "url(#".concat(v, ")")),
                    y(function (e) {
                      return (0, n.Z)((0, i.Z)({}, e), { bottom: o });
                    });
                } else
                  (r.current.style.paddingBottom = ""),
                    (r.current.style.clipPath = ""),
                    y(function (o) {
                      return (0, n.Z)((0, i.Z)({}, o), { bottom: 0 });
                    });
              },
              [b, h.width]
            );
          var w = (0, a.useCallback)(
            function () {
              var o, e;
              m({
                width:
                  null !== (o = r.current.offsetWidth) && void 0 !== o ? o : 0,
                height:
                  (null !== (e = r.current.offsetHeight) && void 0 !== e
                    ? e
                    : 0) - f(r.current),
              });
            },
            [r]
          );
          return (
            (0, c.Z)(w, b || j ? r : null),
            e
              ? (0, t.jsx)(u, {
                  uniqueId: v,
                  width: h.width,
                  height: h.height + p.top + p.bottom,
                  divider: e,
                })
              : null
          );
        };
    },
    21123: function (o, e, l) {
      l.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = l(26042),
        n = l(69396),
        t = l(85893),
        a = l(67294),
        c = l(31996);
      function d(o) {
        var e,
          l,
          d,
          r = o.block,
          s = o.website,
          u = o.setTextColor,
          v = o.onChange,
          f = (0, a.useState)(null),
          g = f[0],
          h = f[1],
          m = [
            { id: "top-down", value: "180deg", icon: "ArrowDownIcon" },
            { id: "left-right", value: "90deg", icon: "ArrowRightIcon" },
            {
              id: "bottom-left-top-right",
              value: "45deg",
              icon: "ArrowUpRightIcon",
            },
            {
              id: "bottom-right-top-left",
              value: "315deg",
              icon: "ArrowUpLeftIcon",
            },
          ];
        return (
          (0, a.useEffect)(
            function () {
              if (s && r) {
                var o,
                  e,
                  l,
                  t,
                  a =
                    (null === s ||
                    void 0 === s ||
                    null === (o = s.colorPalette) ||
                    void 0 === o ||
                    null === (e = o.Palette) ||
                    void 0 === e
                      ? void 0
                      : e.colors) ||
                    (null === s ||
                    void 0 === s ||
                    null === (l = s.colorPalette) ||
                    void 0 === l
                      ? void 0
                      : l.colors) ||
                    [];
                if (
                  null === (t = r.layers) || void 0 === t ? void 0 : t.palette
                )
                  if ("custom" === r.layers.palette)
                    h(null === r || void 0 === r ? void 0 : r.layers);
                  else {
                    var d,
                      u,
                      v,
                      f,
                      g,
                      x,
                      p,
                      y,
                      b = (0, c.dz)(r.layers.palette),
                      j = {};
                    if (
                      "gradient" ===
                      (null === (d = r.layers.overlay) || void 0 === d
                        ? void 0
                        : d.type)
                    )
                      j = {
                        type: "gradient",
                        color1:
                          null === (f = a[b]) || void 0 === f
                            ? void 0
                            : f.color,
                        color2:
                          null === (g = a[b % 2 === 0 ? b + 1 : b - 1]) ||
                          void 0 === g
                            ? void 0
                            : g.color,
                        accent:
                          null === (x = a[b]) || void 0 === x
                            ? void 0
                            : x.accent,
                      };
                    else
                      j = {
                        type: "solid",
                        color1:
                          null === (p = a[b]) || void 0 === p
                            ? void 0
                            : p.color,
                        accent:
                          null === (y = a[b]) || void 0 === y
                            ? void 0
                            : y.accent,
                      };
                    h(
                      (0, n.Z)(
                        (0, i.Z)(
                          {},
                          null === r || void 0 === r ? void 0 : r.layers
                        ),
                        {
                          overlay: (0, i.Z)(
                            {},
                            null === r ||
                              void 0 === r ||
                              null === (u = r.layers) ||
                              void 0 === u
                              ? void 0
                              : u.overlay,
                            j
                          ),
                          foreground: {
                            accent:
                              (null === (v = a[b]) || void 0 === v
                                ? void 0
                                : v.accent) || (0, c.$O)(j.color1 || "#FFFFFF"),
                          },
                        }
                      )
                    );
                  }
                else {
                  var w,
                    N,
                    k,
                    F,
                    L,
                    M,
                    C,
                    D,
                    Z,
                    P,
                    A,
                    R = { type: "solid" },
                    S = { enabled: !1 };
                  if (
                    "object" ===
                    typeof (null === r || void 0 === r ? void 0 : r.background)
                  )
                    if (
                      "image" ===
                      (null === r ||
                      void 0 === r ||
                      null === (N = r.background) ||
                      void 0 === N
                        ? void 0
                        : N.type)
                    )
                      (R.color1 = (
                        null === (F = r.background.overlay) || void 0 === F
                          ? void 0
                          : F.color.includes("rgba")
                      )
                        ? (0, c.s)(
                            null === (L = r.background.overlay) || void 0 === L
                              ? void 0
                              : L.color
                          )
                        : null === (M = r.background.overlay) || void 0 === M
                        ? void 0
                        : M.color),
                        (S.enabled = !0),
                        (S.media =
                          null === r ||
                          void 0 === r ||
                          null === (C = r.background) ||
                          void 0 === C
                            ? void 0
                            : C.image),
                        (S.positionX =
                          (null === (D = r.background) || void 0 === D
                            ? void 0
                            : D.imagePositionX) || "50%"),
                        (S.positionY =
                          (null === (Z = r.background) || void 0 === Z
                            ? void 0
                            : Z.imagePositionY) || "50%"),
                        (S.opacity =
                          (null === (P = r.background) ||
                          void 0 === P ||
                          null === (A = P.overlay) ||
                          void 0 === A
                            ? void 0
                            : A.amount) || 50);
                    else if (
                      "gradient" ===
                      (null === r ||
                      void 0 === r ||
                      null === (k = r.background) ||
                      void 0 === k
                        ? void 0
                        : k.type)
                    ) {
                      var W, _, Q;
                      (R.type = "gradient"),
                        (R.color1 =
                          null === r ||
                          void 0 === r ||
                          null === (W = r.background) ||
                          void 0 === W
                            ? void 0
                            : W.color),
                        (R.color2 =
                          null === r ||
                          void 0 === r ||
                          null === (_ = r.background) ||
                          void 0 === _
                            ? void 0
                            : _.color2),
                        (R.direction =
                          null ===
                            (Q = m.find(function (o) {
                              var e;
                              return (
                                o.value ===
                                (null === r ||
                                void 0 === r ||
                                null === (e = r.background) ||
                                void 0 === e
                                  ? void 0
                                  : e.direction)
                              );
                            })) || void 0 === Q
                            ? void 0
                            : Q.id);
                    } else {
                      var I;
                      R.color1 =
                        null === r ||
                        void 0 === r ||
                        null === (I = r.background) ||
                        void 0 === I
                          ? void 0
                          : I.color;
                    }
                  else
                    R.color1 =
                      (null === r || void 0 === r ? void 0 : r.background) ||
                      "#FFFFFF";
                  h({
                    palette: "custom",
                    image: S,
                    overlay: R,
                    foreground: {
                      accent:
                        (null === (w = a[0]) || void 0 === w
                          ? void 0
                          : w.accent) || (0, c.$O)(R.color1 || "#FFFFFF"),
                    },
                  });
                }
              }
            },
            [r, s]
          ),
          (0, a.useEffect)(
            function () {
              g &&
                ("function" === typeof u &&
                  u((0, c.$O)(g.overlay.color1 || "#FFFFFF")),
                "function" === typeof v && v(g));
            },
            [g]
          ),
          (0, t.jsx)(t.Fragment, {
            children:
              g &&
              (0, t.jsxs)("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute inset-0 z-10",
                    style: (function () {
                      var o,
                        e,
                        l,
                        i,
                        n,
                        t,
                        a,
                        c = {};
                      "solid" ===
                      (null === g ||
                      void 0 === g ||
                      null === (o = g.overlay) ||
                      void 0 === o
                        ? void 0
                        : o.type)
                        ? (c = {
                            backgroundColor:
                              null === g ||
                              void 0 === g ||
                              null === (l = g.overlay) ||
                              void 0 === l
                                ? void 0
                                : l.color1,
                          })
                        : (c = {
                            backgroundImage: "linear-gradient("
                              .concat(
                                m.find(function (o) {
                                  var e;
                                  return (
                                    o.id ===
                                    ((null === g ||
                                    void 0 === g ||
                                    null === (e = g.overlay) ||
                                    void 0 === e
                                      ? void 0
                                      : e.direction) || "top-down")
                                  );
                                }).value,
                                ", "
                              )
                              .concat(
                                null !==
                                  (t =
                                    null === g ||
                                    void 0 === g ||
                                    null === (i = g.overlay) ||
                                    void 0 === i
                                      ? void 0
                                      : i.color1) && void 0 !== t
                                  ? t
                                  : "#FFFFFF",
                                ", "
                              )
                              .concat(
                                null !==
                                  (a =
                                    null === g ||
                                    void 0 === g ||
                                    null === (n = g.overlay) ||
                                    void 0 === n
                                      ? void 0
                                      : n.color2) && void 0 !== a
                                  ? a
                                  : "#D1D5DB",
                                ")"
                              ),
                          });
                      if (
                        null === g ||
                        void 0 === g ||
                        null === (e = g.image) ||
                        void 0 === e
                          ? void 0
                          : e.enabled
                      ) {
                        var d,
                          r,
                          s = isNaN(
                            null === g ||
                              void 0 === g ||
                              null === (d = g.image) ||
                              void 0 === d
                              ? void 0
                              : d.opacity
                          )
                            ? 50
                            : null === g ||
                              void 0 === g ||
                              null === (r = g.image) ||
                              void 0 === r
                            ? void 0
                            : r.opacity;
                        c.opacity = s / 100;
                      }
                      return c;
                    })(),
                  }),
                  (null === (e = g.image) || void 0 === e
                    ? void 0
                    : e.enabled) &&
                    g.image.media &&
                    (0, t.jsx)("div", {
                      className: "absolute inset-0 z-0",
                      style: {
                        backgroundImage: "url(".concat(
                          (null === (l = g.image.media) || void 0 === l
                            ? void 0
                            : l.preview) ||
                            (null === (d = g.image.media) || void 0 === d
                              ? void 0
                              : d.url) ||
                            g.image.media,
                          ")"
                        ),
                        backgroundPosition: ""
                          .concat(g.image.positionX || "center", " ")
                          .concat(g.image.positionY || "center"),
                        backgroundSize: "cover",
                      },
                    }),
                ],
              }),
          })
        );
      }
    },
    165: function (o, e, l) {
      l.r(e),
        l.d(e, {
          default: function () {
            return j;
          },
        });
      var i = l(26042),
        n = l(85893),
        t = l(31996),
        a = l(67294),
        c = l(41664),
        d = l.n(c),
        r = l(90387),
        s = l(52077),
        u = l(90434),
        v = l(41984),
        f = l(43751),
        g = l(72510),
        h = l(51961),
        m = l(74007),
        x = l(75654),
        p = l(21123),
        y = l(4433),
        b = [
          { id: "facebook", host: "facebook.com" },
          { id: "twitter", host: "twitter.com" },
          { id: "linkedin", host: "linkedin.com" },
          { id: "youtube", host: "youtube.com" },
          { id: "pinterest", host: "pinterest.com" },
          { id: "instagram", host: "instagram.com" },
          { id: "tiktok", host: "tiktok.com" },
          { id: "thumbtack", host: "thumbtack.com" },
          { id: "homeadvisor", host: "homeadvisor.com" },
          { id: "angi", host: "angi.com" },
          { id: "behance", host: "behance.net" },
          { id: "dribbble", host: "dribbble.com" },
        ];
      function j(o) {
        var e,
          l,
          c,
          j,
          w = o.website,
          N = o.previousBlock,
          k = (0, a.useState)(!1),
          F = k[0],
          L = k[1],
          M = (0, a.useState)(""),
          C = M[0],
          D = M[1],
          Z = (0, a.useState)(null),
          P = Z[0],
          A = Z[1],
          R = (0, a.useState)("#FFFFFF"),
          S = R[0],
          W = R[1],
          _ = (0, a.useState)("#000000"),
          Q = _[0],
          I = _[1],
          V = (0, a.useRef)(null),
          z = (0, r.useRouter)(),
          H = null === w || void 0 === w ? void 0 : w.footer;
        H &&
          H.showName &&
          (null === H.businessName || void 0 === H.businessName) &&
          (H.businessName =
            null === w ||
            void 0 === w ||
            null === (j = w.Business) ||
            void 0 === j
              ? void 0
              : j.name);
        !H ||
          (null !== H.businessAddress && void 0 !== H.businessAddress) ||
          (H.businessAddress = "");
        var E = null === w || void 0 === w ? void 0 : w.header,
          K =
            null === w || void 0 === w || null === (e = w.pages) || void 0 === e
              ? void 0
              : e.find(function (o) {
                  return !o.slug && o.default;
                }),
          B =
            null ===
              (c =
                null === (l = w.pages) || void 0 === l
                  ? void 0
                  : l.filter(function (o) {
                      return !0 === o.showOnFooter || void 0 === o.showOnFooter;
                    })) || void 0 === c
              ? void 0
              : c
                  .map(function (o) {
                    var e = {
                      href: "/".concat(o.slug || ""),
                      name: o.label,
                      current:
                        z.asPath === "/".concat(o.slug || "") ||
                        z.asPath.includes("/".concat(o.slug, "/")),
                      type: o.type,
                      forceRender: o.forceRender,
                    };
                    return "parent" === e.type &&
                      ((e.nests = w.pages
                        .filter(function (e) {
                          return e.Parent === o._id;
                        })
                        .map(function (e) {
                          return {
                            href: "/".concat(o.slug, "/").concat(e.slug || ""),
                            name: e.label,
                            current:
                              z.asPath ===
                              "/".concat(o.slug, "/").concat(e.slug || ""),
                            forceRender: e.forceRender,
                          };
                        })),
                      0 === e.nests.length)
                      ? null
                      : e;
                  })
                  .filter(function (o) {
                    return null !== o;
                  }),
          U = function () {
            var o, e, l, a;
            return H.showLogo &&
              "branding" === H.source &&
              (null === w || void 0 === w ? void 0 : w.logo)
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, t.QW)(null === w || void 0 === w ? void 0 : w.logo) &&
                      (0, n.jsx)("img", {
                        className:
                          "hidden lg:block transition-all object-contain",
                        src: (0, t.QW)(
                          null === w || void 0 === w ? void 0 : w.logo
                        ),
                        alt:
                          null === H || void 0 === H ? void 0 : H.businessName,
                        style: {
                          height:
                            ((null === H ||
                            void 0 === H ||
                            null === (o = H.logoDesktop) ||
                            void 0 === o
                              ? void 0
                              : o.height) || 80) + "px",
                        },
                      }),
                    (0, t.QW)(null === w || void 0 === w ? void 0 : w.logo) &&
                      (0, n.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src: (0, t.QW)(
                          null === w || void 0 === w ? void 0 : w.logo
                        ),
                        alt:
                          null === H || void 0 === H ? void 0 : H.businessName,
                        style: {
                          height:
                            ((null === H ||
                            void 0 === H ||
                            null === (e = H.logoMobile) ||
                            void 0 === e
                              ? void 0
                              : e.height) || 40) + "px",
                        },
                      }),
                  ],
                })
              : H.showLogo &&
                "upload" === H.source &&
                (null === H || void 0 === H ? void 0 : H.customLogo)
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, t.QW)(
                      null === H || void 0 === H ? void 0 : H.customLogo
                    ) &&
                      (0, n.jsx)("img", {
                        className:
                          "hidden lg:block transition-all object-contain",
                        src: (0, t.QW)(
                          null === H || void 0 === H ? void 0 : H.customLogo
                        ),
                        alt:
                          null === H || void 0 === H ? void 0 : H.businessName,
                        style: {
                          height:
                            ((null === H ||
                            void 0 === H ||
                            null === (l = H.logoDesktop) ||
                            void 0 === l
                              ? void 0
                              : l.height) || 80) + "px",
                        },
                      }),
                    (0, t.QW)(
                      null === H || void 0 === H ? void 0 : H.customLogo
                    ) &&
                      (0, n.jsx)("img", {
                        className: "lg:hidden transition-all object-contain",
                        src: (0, t.QW)(
                          null === H || void 0 === H ? void 0 : H.customLogo
                        ),
                        alt:
                          null === H || void 0 === H ? void 0 : H.businessName,
                        style: {
                          height:
                            ((null === H ||
                            void 0 === H ||
                            null === (a = H.logoMobile) ||
                            void 0 === a
                              ? void 0
                              : a.height) || 40) + "px",
                        },
                      }),
                  ],
                })
              : H.businessName
              ? (0, n.jsx)("div", {
                  className: "max-w-full overflow-hidden grid",
                  children: (0, n.jsx)("h3", {
                    className: (0, t.AK)(
                      "heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis",
                      "simple-right" !==
                        (null === H || void 0 === H ? void 0 : H.style) &&
                        "simple-center" !==
                          (null === H || void 0 === H ? void 0 : H.style) &&
                        "xl:heading-small"
                    ),
                    style: (0, i.Z)({ color: Q }, (0, t.j2)(w)),
                    children:
                      null === H || void 0 === H ? void 0 : H.businessName,
                  }),
                })
              : (0, n.jsx)(n.Fragment, {});
          },
          O = function () {
            if (0 === (null === B || void 0 === B ? void 0 : B.length))
              return (0, n.jsx)(n.Fragment, {});
            var o = (0, t.h)(S, -10);
            return (
              (o !== Q && o !== S) || (o = (0, t.h)(S, 10)),
              (0, n.jsx)("ul", {
                className: (0, t.AK)(
                  "flex flex-col lg:flex-row items-start lg:items-center flex-wrap gap-6",
                  "stacked-right" ===
                    (null === H || void 0 === H ? void 0 : H.style) &&
                    "justify-end items-end",
                  ("stacked-center" ===
                    (null === H || void 0 === H ? void 0 : H.style) ||
                    "simple-center" ===
                      (null === H || void 0 === H ? void 0 : H.style)) &&
                    "justify-center items-center"
                ),
                style: { color: Q },
                children:
                  null === B || void 0 === B
                    ? void 0
                    : B.filter(function (o) {
                        return "nested" !== o.type;
                      }).map(function (e) {
                        var l;
                        return (0, n.jsx)(
                          "li",
                          {
                            className: "border-b-2",
                            style: {
                              borderColor: e.current
                                ? "".concat(Q)
                                : "transparent",
                            },
                            children:
                              "parent" === e.type
                                ? (0, n.jsxs)(n.Fragment, {
                                    children: [
                                      (0, n.jsx)(m.Z, {
                                        className: "!hidden lg:!inline-block",
                                        openUp: !0,
                                        buttonClassName:
                                          "inline-flex items-center gap-2 pb-1.5",
                                        itemsContainerClass:
                                          "!pl-6 !pr-12 w-max max-w-120 !max-h-50 no-scrollbar",
                                        button: (0, n.jsxs)(n.Fragment, {
                                          children: [
                                            (0, n.jsx)("span", {
                                              className:
                                                "body-normal whitespace-nowrap",
                                              children: e.name,
                                            }),
                                            (0, n.jsx)(u.Z, {
                                              className: "w-4 h-4",
                                            }),
                                          ],
                                        }),
                                        itemsContainerStyle: {
                                          backgroundColor: o,
                                          color: Q,
                                        },
                                        children:
                                          null === (l = e.nests) || void 0 === l
                                            ? void 0
                                            : l.map(function (o) {
                                                return (0,
                                                n.jsx)(g.v.Item, { children: (0, n.jsx)(d(), { href: o.href, legacyBehavior: !1, className: "block py-2 body-normal border-b-2", style: { borderColor: o.current ? "".concat(Q) : "transparent" }, target: o.forceRender ? "_parent" : "_self", children: o.name }) }, "page-link-".concat(o.href));
                                              }),
                                      }),
                                      (0, n.jsxs)("button", {
                                        className:
                                          "inline-flex lg:hidden items-center gap-2",
                                        onClick: function () {
                                          L(!0), A(e.nests);
                                        },
                                        children: [
                                          (0, n.jsx)("span", {
                                            className: "body-normal",
                                            children: e.name,
                                          }),
                                          (0, n.jsx)(v.Z, {
                                            className: "w-4 h-4",
                                            "aria-hidden": "true",
                                          }),
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, n.jsx)(d(), {
                                    href: e.href,
                                    children: (0, n.jsx)("a", {
                                      className: "block pb-1.5 body-normal",
                                      target: e.forceRender
                                        ? "_parent"
                                        : "_self",
                                      children: e.name,
                                    }),
                                  }),
                          },
                          "footer-page-link-".concat(e.href)
                        );
                      }),
              })
            );
          },
          T = function () {
            return (null === w || void 0 === w ? void 0 : w.social) &&
              0 !== (null === w || void 0 === w ? void 0 : w.social.length)
              ? (0, n.jsx)("ul", {
                  className: (0, t.AK)(
                    "flex items-center gap-x-4 gap-y-2 flex-wrap",
                    "stacked-right" ===
                      (null === H || void 0 === H ? void 0 : H.style) &&
                      "justify-end",
                    ("stacked-center" ===
                      (null === H || void 0 === H ? void 0 : H.style) ||
                      "simple-center" ===
                        (null === H || void 0 === H ? void 0 : H.style)) &&
                      "justify-center"
                  ),
                  children:
                    Array.isArray(w.social) &&
                    w.social.map(function (o, e) {
                      var l = b.find(function (e) {
                          return e.id === o.type;
                        }),
                        i = o.link;
                      return (
                        "custom" !== o.type &&
                          ((i = (i = o.link
                            .replace(
                              /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                              ""
                            )
                            .replace(/https?:/g, "")
                            .replace(/^\/\/?/g, "")).replace(
                            null === l || void 0 === l ? void 0 : l.host,
                            ""
                          )),
                          (i = "https://"
                            .concat(
                              null === l || void 0 === l ? void 0 : l.host,
                              "/"
                            )
                            .concat(i))),
                        (0, n.jsx)(
                          "li",
                          {
                            children: (0, n.jsx)(d(), {
                              href: i,
                              children: (0, n.jsx)("a", {
                                target: "_blank",
                                children: (0, n.jsx)(x.Q, {
                                  icon: o,
                                  color: Q,
                                  settings: w.socialSettings,
                                }),
                              }),
                            }),
                          },
                          "social-icon-header-".concat(e)
                        )
                      );
                    }),
                })
              : (0, n.jsx)(n.Fragment, {});
          },
          $ = function () {
            return !1 === H.madeWithDurable
              ? (0, n.jsx)(n.Fragment, {})
              : (0, n.jsxs)("p", {
                  className: (0, t.AK)(
                    "body-normal lg:text-right whitespace-nowrap",
                    ("stacked-center" ===
                      (null === H || void 0 === H ? void 0 : H.style) ||
                      "simple-center" ===
                        (null === H || void 0 === H ? void 0 : H.style)) &&
                      "!text-center",
                    "stacked-left" ===
                      (null === H || void 0 === H ? void 0 : H.style) &&
                      "!text-left"
                  ),
                  children: [
                    (0, n.jsx)("span", { children: "Made with\xa0" }),
                    (0, n.jsx)(d(), {
                      href: "https://durable.co?referrer=".concat(
                        encodeURIComponent(C)
                      ),
                      children: (0, n.jsx)("a", {
                        target: "_blank",
                        className: "underline",
                        style: { color: Q },
                        children: "Durable",
                      }),
                    }),
                  ],
                });
          },
          q = function () {
            return (0, n.jsx)(s.Z, {
              className: "lg !py-2",
              button: H.button,
              block: H,
              website: w,
            });
          },
          X = function () {
            L(!1), A(null);
          };
        return (
          (0, a.useEffect)(
            function () {
              z && X();
            },
            [z]
          ),
          (0, a.useEffect)(function () {
            D(
              null === location || void 0 === location
                ? void 0
                : location.origin
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("footer", {
                className: "flex flex-1",
                children: (0, n.jsxs)("div", {
                  ref: V,
                  id: "website-footer",
                  className: "relative flex-1 z-10",
                  style: { color: Q },
                  children: [
                    (0, n.jsx)(p.Z, {
                      block: H,
                      website: w,
                      onChange: function (o) {
                        var e, l;
                        W(
                          (null === o ||
                          void 0 === o ||
                          null === (e = o.overlay) ||
                          void 0 === e
                            ? void 0
                            : e.color1) || "#FFFFFF"
                        ),
                          I(
                            (0, t.$O)(
                              (null === o ||
                              void 0 === o ||
                              null === (l = o.overlay) ||
                              void 0 === l
                                ? void 0
                                : l.color1) || "#FFFFFF"
                            )
                          );
                      },
                    }),
                    (0, n.jsx)("div", {
                      className: (0, t.AK)(
                        "relative z-10 container mx-auto",
                        (0, t.bG)(
                          null === H || void 0 === H ? void 0 : H.spacing
                        )
                      ),
                      children:
                        "split-left" ===
                        (null === H || void 0 === H ? void 0 : H.style)
                          ? (0, n.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row lg:justify-between gap-12",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start gap-12 lg:gap-6",
                                  children: [
                                    U(),
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row lg:items-center gap-12",
                                      children: [
                                        O(),
                                        H.showSocial && T(),
                                        (null === H || void 0 === H
                                          ? void 0
                                          : H.button) && q(),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col gap-6",
                                  children: [
                                    !!H.additionalDetails &&
                                      (0, n.jsx)("div", {
                                        className: "body-normal lg:text-right",
                                        style: { color: Q },
                                        children:
                                          null === H || void 0 === H
                                            ? void 0
                                            : H.additionalDetails,
                                      }),
                                    $(),
                                  ],
                                }),
                              ],
                            })
                          : "stacked-right" === H.style
                          ? (0, n.jsxs)("div", {
                              className:
                                "flex flex-col justify-end items-end gap-12 text-right",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col items-end gap-6",
                                  children: [
                                    U(),
                                    !!H.additionalDetails &&
                                      (0, n.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: Q },
                                        children:
                                          null === H || void 0 === H
                                            ? void 0
                                            : H.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-end gap-12 lg:gap-14",
                                  children: [
                                    O(),
                                    H.showSocial && T(),
                                    (null === H || void 0 === H
                                      ? void 0
                                      : H.button) &&
                                      (0, n.jsx)("div", { children: q() }),
                                  ],
                                }),
                                $(),
                              ],
                            })
                          : "stacked-center" === H.style
                          ? (0, n.jsxs)("div", {
                              className:
                                "flex flex-col justify-center gap-12 text-center",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col items-center gap-6",
                                  children: [
                                    U(),
                                    !!H.additionalDetails &&
                                      (0, n.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: Q },
                                        children:
                                          null === H || void 0 === H
                                            ? void 0
                                            : H.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col justify-center gap-12 lg:gap-14",
                                  children: [
                                    O(),
                                    H.showSocial && T(),
                                    (null === H || void 0 === H
                                      ? void 0
                                      : H.button) &&
                                      (0, n.jsx)("div", { children: q() }),
                                  ],
                                }),
                                $(),
                              ],
                            })
                          : "stacked-left" === H.style
                          ? (0, n.jsxs)("div", {
                              className:
                                "flex flex-col items-start gap-12 text-left",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col items-start gap-6",
                                  children: [
                                    U(),
                                    !!H.additionalDetails &&
                                      (0, n.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: Q },
                                        children:
                                          null === H || void 0 === H
                                            ? void 0
                                            : H.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-start gap-12 lg:gap-14",
                                  children: [
                                    O(),
                                    H.showSocial && T(),
                                    (null === H || void 0 === H
                                      ? void 0
                                      : H.button) &&
                                      (0, n.jsx)("div", { children: q() }),
                                  ],
                                }),
                                $(),
                              ],
                            })
                          : "simple-right" === H.style
                          ? (0, n.jsxs)("div", {
                              className: "flex flex-col lg:flex-row gap-12",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: (0, t.AK)(
                                    "flex flex-col lg:flex-row items-start lg:items-center gap-6",
                                    (
                                      null === H || void 0 === H
                                        ? void 0
                                        : H.showLogo
                                    )
                                      ? "lg:gap-10"
                                      : "lg:gap-2"
                                  ),
                                  children: [
                                    U(),
                                    !!H.additionalDetails &&
                                      (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          !(null === H || void 0 === H
                                            ? void 0
                                            : H.showLogo) &&
                                            (0, n.jsx)("span", {
                                              className:
                                                "hidden lg:inline-block",
                                              children: "\xb7",
                                            }),
                                          (0, n.jsx)("div", {
                                            className: "body-normal",
                                            style: { color: Q },
                                            children:
                                              null === H || void 0 === H
                                                ? void 0
                                                : H.additionalDetails,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex-1 w-full flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-14 justify-end",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row items-start lg:items-center lg:justify-end gap-12 lg:gap-14 w-full lg:w-auto max-w-[100vw]",
                                      children: [
                                        O(),
                                        H.showSocial && T(),
                                        (null === H || void 0 === H
                                          ? void 0
                                          : H.button) && q(),
                                      ],
                                    }),
                                    $(),
                                  ],
                                }),
                              ],
                            })
                          : "simple-center" === H.style
                          ? (0, n.jsxs)("div", {
                              className:
                                "flex flex-col justify-center gap-12 text-center",
                              children: [
                                (0, n.jsxs)("div", {
                                  className: (0, t.AK)(
                                    "flex flex-col justify-center lg:items-center gap-6",
                                    (
                                      null === H || void 0 === H
                                        ? void 0
                                        : H.showLogo
                                    )
                                      ? "lg:gap-6"
                                      : "lg:flex-row lg:gap-2"
                                  ),
                                  children: [
                                    U(),
                                    !!H.additionalDetails &&
                                      (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          !(null === H || void 0 === H
                                            ? void 0
                                            : H.showLogo) &&
                                            (0, n.jsx)("span", {
                                              className:
                                                "hidden lg:inline-block",
                                              children: "\xb7",
                                            }),
                                          (0, n.jsx)("div", {
                                            className: "body-normal",
                                            style: { color: Q },
                                            children:
                                              null === H || void 0 === H
                                                ? void 0
                                                : H.additionalDetails,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col lg:flex-row lg:items-center justify-center gap-12 lg:gap-14",
                                  children: [
                                    O(),
                                    H.showSocial && T(),
                                    (null === H || void 0 === H
                                      ? void 0
                                      : H.button) && q(),
                                    $(),
                                  ],
                                }),
                              ],
                            })
                          : (0, n.jsxs)("div", {
                              className:
                                "flex flex-col lg:flex-row items-start lg:justify-between gap-12",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col gap-6 items-start lg:max-w-[30vw]",
                                  children: [
                                    U(),
                                    !!(null === H || void 0 === H
                                      ? void 0
                                      : H.additionalDetails) &&
                                      (0, n.jsx)("div", {
                                        className: "body-normal",
                                        style: { color: Q },
                                        children:
                                          null === H || void 0 === H
                                            ? void 0
                                            : H.additionalDetails,
                                      }),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "flex flex-col gap-12 lg:gap-6",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className:
                                        "flex flex-col lg:flex-row gap-12 lg:items-center lg:justify-end",
                                      children: [
                                        O(),
                                        H.showSocial && T(),
                                        (null === H || void 0 === H
                                          ? void 0
                                          : H.button) && q(),
                                      ],
                                    }),
                                    $(),
                                  ],
                                }),
                              ],
                            }),
                    }),
                    (0, n.jsx)(y.iz, {
                      previousDivider:
                        null === N || void 0 === N ? void 0 : N.divider,
                      dividerUniqueId: "website-footer-divider",
                      divider: null,
                      contentRef: V,
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(h.V, {
                open: F,
                onClose: X,
                className: "relative z-[30000] h-full",
                children: (0, n.jsx)(h.V.Panel, {
                  className: "fixed inset-0 flex flex-col h-full",
                  style: { backgroundColor: S, color: Q },
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex-1 flex flex-col h-full container mx-auto pb-6",
                    children: [
                      (0, n.jsxs)("div", {
                        className: (0, t.AK)(
                          "items-center gap-3 py-6",
                          "left" !==
                            (null === E || void 0 === E ? void 0 : E.style)
                            ? "grid"
                            : "flex justify-between"
                        ),
                        style:
                          "left" !==
                          (null === E || void 0 === E ? void 0 : E.style)
                            ? { gridTemplateColumns: "1fr auto 1fr" }
                            : {},
                        children: [
                          ("center" ===
                            (null === E || void 0 === E ? void 0 : E.style) ||
                            "full-center" ===
                              (null === E || void 0 === E
                                ? void 0
                                : E.style)) &&
                            (0, n.jsx)("div", {}),
                          (function () {
                            var o, e, l, a;
                            return (null === E || void 0 === E
                              ? void 0
                              : E.showLogo) &&
                              "branding" ===
                                (null === E || void 0 === E
                                  ? void 0
                                  : E.source) &&
                              (null === w || void 0 === w ? void 0 : w.logo)
                              ? (0, n.jsx)(d(), {
                                  href: "/",
                                  children: (0, n.jsxs)("a", {
                                    target: (
                                      null === K || void 0 === K
                                        ? void 0
                                        : K.forceRender
                                    )
                                      ? "_parent"
                                      : "_self",
                                    children: [
                                      (0, t.QW)(
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.logo
                                      ) &&
                                        (0, n.jsx)("img", {
                                          className:
                                            "hidden lg:block transition-all object-contain",
                                          src: (0, t.QW)(
                                            null === w || void 0 === w
                                              ? void 0
                                              : w.logo
                                          ),
                                          alt:
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.siteName,
                                          style: {
                                            height:
                                              ((null === E ||
                                              void 0 === E ||
                                              null === (o = E.logoDesktop) ||
                                              void 0 === o
                                                ? void 0
                                                : o.height) || 80) + "px",
                                          },
                                        }),
                                      (0, t.QW)(
                                        null === w || void 0 === w
                                          ? void 0
                                          : w.logo
                                      ) &&
                                        (0, n.jsx)("img", {
                                          className:
                                            "lg:hidden transition-all object-contain",
                                          src: (0, t.QW)(
                                            null === w || void 0 === w
                                              ? void 0
                                              : w.logo
                                          ),
                                          alt:
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.siteName,
                                          style: {
                                            height:
                                              ((null === E ||
                                              void 0 === E ||
                                              null === (e = E.logoMobile) ||
                                              void 0 === e
                                                ? void 0
                                                : e.height) || 40) + "px",
                                          },
                                        }),
                                    ],
                                  }),
                                })
                              : (null === E || void 0 === E
                                  ? void 0
                                  : E.showLogo) &&
                                "upload" ===
                                  (null === E || void 0 === E
                                    ? void 0
                                    : E.source) &&
                                (null === E || void 0 === E
                                  ? void 0
                                  : E.customLogo)
                              ? (0, n.jsx)(d(), {
                                  href: "/",
                                  children: (0, n.jsxs)("a", {
                                    target: (
                                      null === K || void 0 === K
                                        ? void 0
                                        : K.forceRender
                                    )
                                      ? "_parent"
                                      : "_self",
                                    children: [
                                      (0, t.QW)(
                                        null === E || void 0 === E
                                          ? void 0
                                          : E.customLogo
                                      ) &&
                                        (0, n.jsx)("img", {
                                          className:
                                            "hidden lg:block transition-all object-contain",
                                          src: (0, t.QW)(
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.customLogo
                                          ),
                                          alt:
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.siteName,
                                          style: {
                                            height:
                                              ((null === E ||
                                              void 0 === E ||
                                              null === (l = E.logoDesktop) ||
                                              void 0 === l
                                                ? void 0
                                                : l.height) || 80) + "px",
                                          },
                                        }),
                                      (0, t.QW)(
                                        null === E || void 0 === E
                                          ? void 0
                                          : E.customLogo
                                      ) &&
                                        (0, n.jsx)("img", {
                                          className:
                                            "lg:hidden transition-all object-contain",
                                          src: (0, t.QW)(
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.customLogo
                                          ),
                                          alt:
                                            null === E || void 0 === E
                                              ? void 0
                                              : E.siteName,
                                          style: {
                                            height:
                                              ((null === E ||
                                              void 0 === E ||
                                              null === (a = E.logoMobile) ||
                                              void 0 === a
                                                ? void 0
                                                : a.height) || 40) + "px",
                                          },
                                        }),
                                    ],
                                  }),
                                })
                              : (0, n.jsx)(d(), {
                                  href: "/",
                                  children: (0, n.jsx)("a", {
                                    target: (
                                      null === K || void 0 === K
                                        ? void 0
                                        : K.forceRender
                                    )
                                      ? "_parent"
                                      : "_self",
                                    children: (0, n.jsx)("h1", {
                                      className:
                                        "heading-small lg:heading-medium overflow-hidden overflow-ellipsis max-w-full",
                                      style: (0, i.Z)(
                                        { color: Q },
                                        (0, t.j2)(w)
                                      ),
                                      children:
                                        null === E || void 0 === E
                                          ? void 0
                                          : E.siteName,
                                    }),
                                  }),
                                });
                          })(),
                          (0, n.jsx)("div", {
                            className: "ml-auto lg:hidden",
                            children: (0, n.jsx)("button", {
                              className:
                                "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                              style: { color: Q },
                              onClick: X,
                              children: (0, n.jsx)(f.Z, {
                                className: "block h-5 w-5",
                                "aria-hidden": "true",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, n.jsx)("ul", {
                        className: (0, t.AK)(
                          "flex-1 flex flex-col justify-center gap-3 w-full py-6 overflow-auto",
                          "center" ===
                            (null === H || void 0 === H ? void 0 : H.style) ||
                            "full-center" ===
                              (null === H || void 0 === H ? void 0 : H.style)
                            ? "text-center"
                            : ""
                        ),
                        style: (0, i.Z)({ color: Q }, (0, t.SV)(w)),
                        children:
                          null === P || void 0 === P
                            ? void 0
                            : P.map(function (o) {
                                return (0,
                                n.jsx)("li", { className: (0, t.AK)("body-large py-2 border-b-2"), style: { borderColor: o.current ? "".concat(Q) : "transparent" }, children: (0, n.jsx)(d(), { href: o.href, children: (0, n.jsx)("a", { className: "block w-full", target: o.forceRender ? "_parent" : "_self", children: o.name }) }) }, "page-link-".concat(o.href));
                              }),
                      }),
                    ],
                  }),
                }),
              }),
            ],
          })
        );
      }
    },
    62246: function (o, e, l) {
      var i = l(67294),
        n = (l(31996), l(91033));
      e.Z = function (o, e) {
        var l = (0, i.useState)(!1),
          t = l[0],
          a = l[1],
          c = (0, i.useRef)(o);
        c.current = o;
        var d = function (o) {
          var e = !0,
            l = !1,
            i = void 0;
          try {
            for (
              var n, d = o[Symbol.iterator]();
              !(e = (n = d.next()).done);
              e = !0
            ) {
              var r = n.value;
              document.body.contains(r.target) || a(!t), c.current(r.target);
            }
          } catch (s) {
            (l = !0), (i = s);
          } finally {
            try {
              e || null == d.return || d.return();
            } finally {
              if (l) throw i;
            }
          }
        };
        (0, i.useEffect)(
          function () {
            if (e) {
              var o = new n.Z(d),
                l = Array.isArray(e) ? e : [e];
              return (
                l.forEach(function (e) {
                  return e.current && o.observe(e.current);
                }),
                function () {
                  l.forEach(function (e) {
                    return e.current && o.unobserve(e.current);
                  }),
                    o.disconnect();
                }
              );
            }
          },
          [e, t]
        );
      };
    },
  },
]);
