"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2686],
  {
    6604: function (e, n, t) {
      t.d(n, {
        c: function () {
          return g;
        },
      });
      var o = t(828),
        l = t(85893),
        i = t(67294),
        a = t(26042),
        c = t(69396),
        r = t(11355),
        s = {
          250: "duration-250",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          750: "duration-750",
        },
        d = {
          fadeIn: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
          },
          slideFromBottom: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 translate-y-8",
            enterTo: "opacity-100 translate-y-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 translate-y-0",
            leaveTo: "opacity-0 translate-y-8",
          },
          fadeAndGrow: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
          },
          slideFromRight: {
            enter: "transition-all ease-in-out",
            enterFrom: "translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "translate-x-0",
            leaveTo: "translate-x-full",
          },
          slideFromLeft: {
            enter: "transition-all ease-in-out",
            enterFrom: "-translate-x-full",
            enterTo: "translate-x-0",
            leave: "transition-all ease-in-out",
            leaveFrom: "translate-x-0",
            leaveTo: "-translate-x-full",
          },
          zoomOut: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-105",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-105",
          },
          zoomIn: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-95",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-95",
          },
          popUp: {
            enter: "transition-all ease-in-out",
            enterFrom: "opacity-0 scale-0",
            enterTo: "opacity-100 scale-100",
            leave: "transition-all ease-in-out",
            leaveFrom: "opacity-100 scale-100",
            leaveTo: "opacity-0 scale-0",
          },
          none: {
            enter: "",
            enterFrom: "",
            enterTo: "",
            leave: "",
            leaveFrom: "",
            leaveTo: "",
          },
        },
        u = function (e) {
          var n,
            t = e.show,
            o = void 0 === t || t,
            u = e.appear,
            v = e.children,
            p = e.animation,
            x = void 0 === p ? "none" : p,
            h = e.duration,
            m = void 0 === h ? 300 : h,
            f = e.asChild,
            g = e.unmount,
            y = e.style,
            w = e.delay,
            j = null !== (n = d[x]) && void 0 !== n ? n : d.none,
            b = (0, c.Z)((0, a.Z)({}, j), {
              enter: ""
                .concat(j.enter, " ")
                .concat(s[m], " ")
                .concat(w ? "delay-".concat(w) : ""),
              leave: ""
                .concat(j.leave, " ")
                .concat(s[m], " ")
                .concat(w ? "delay-".concat(w) : ""),
            }),
            F = f ? r.u.Child : r.u;
          return (0, l.jsx)(
            F,
            (0, c.Z)(
              (0, a.Z)(
                {
                  show: f ? void 0 : o,
                  as: w ? "div" : i.Fragment,
                  appear: u,
                  unmount: g,
                  style: y,
                },
                b
              ),
              { children: v }
            )
          );
        },
        v = t(42708),
        p = "default",
        x = "medium",
        h = "none",
        m = "medium";
      var f = { slow: 750, medium: 500, fast: 250 },
        g = function (e) {
          var n = e.children,
            t = e.settings,
            a = e.globalSettings,
            c = e.unmount,
            r = void 0 !== c && c,
            s = e.delay,
            d = (function (e, n) {
              var t = e || {},
                o = t.type,
                l = void 0 === o ? p : o,
                i = t.speed,
                a = void 0 === i ? x : i;
              return (
                "default" === l &&
                  ((l = (null === n || void 0 === n ? void 0 : n.type) || h),
                  (a = (null === n || void 0 === n ? void 0 : n.speed) || m)),
                { type: l, speed: a }
              );
            })(t, a),
            g = d.type,
            y = d.speed,
            w = (0, i.useState)(!1),
            j = w[0],
            b = w[1],
            F = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            k = F[0],
            C = F[1];
          F[2];
          return (
            (0, i.useEffect)(
              function () {
                var e = null;
                return (
                  C &&
                    (e = setTimeout(function () {
                      return b(!0);
                    }, 400)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [C]
            ),
            "none" === g
              ? (0, l.jsx)(l.Fragment, { children: n })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    !j &&
                      (0, l.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: k,
                      }),
                    (0, l.jsx)(u, {
                      show: j,
                      animation: g,
                      duration: f[y],
                      unmount: r,
                      disableLeave: !0,
                      delay: s,
                      children: n,
                    }),
                    !j &&
                      (0, l.jsx)("div", {
                        className: "invisible",
                        children: n,
                      }),
                  ],
                })
          );
        };
    },
    60546: function (e, n, t) {
      t.d(n, {
        OC: function () {
          return s;
        },
      });
      var o = t(85893),
        l = t(67294),
        i = t(62246),
        a = t(4433),
        c = [
          {
            id: "slantLeft",
            getPath: function (e, n) {
              return "M".concat(e, " 0L-0 ").concat(n);
            },
          },
          {
            id: "slantRight",
            getPath: function (e, n) {
              return "M0 0L".concat(e, " ").concat(n);
            },
          },
          {
            id: "pointUp",
            getPath: function (e, n) {
              return "M0 0"
                .concat(n, "L")
                .concat(e / 2, " 0L")
                .concat(e, " ")
                .concat(n, "L")
                .concat(1.5 * e, " 0V0");
            },
          },
          {
            id: "pointDown",
            getPath: function (e, n) {
              return "M0 0L"
                .concat(e / 2, " ")
                .concat(n, "L")
                .concat(e, " 0");
            },
          },
          {
            id: "curveUp",
            getPath: function (e, n) {
              return "M0 0 C"
                .concat(e / 2, " ")
                .concat(n, " ")
                .concat(e - e / 2, " ")
                .concat(n, " ")
                .concat(e, " 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (e, n) {
              return "M0 "
                .concat(n, " C")
                .concat(e / 2, " 0 ")
                .concat(e - e / 2, " 0 ")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "waveLeft",
            getPath: function (e, n) {
              return "M0 0C0 0 "
                .concat(0.2023 * e, " ")
                .concat(n, " ")
                .concat(0.3333 * e, " ")
                .concat(n, "C")
                .concat(0.4681 * e, " ")
                .concat(n, " ")
                .concat(0.5318 * e, " 0 ")
                .concat(0.6667 * e, " 0C")
                .concat(0.8015 * e, " 0 ")
                .concat(e, " ")
                .concat(n, " ")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "waveRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " 0C")
                .concat(e, " 0 ")
                .concat(0.8 * e, " ")
                .concat(n, " ")
                .concat(0.666 * e, " ")
                .concat(n, "C")
                .concat(0.547 * e, " ")
                .concat(n, " ")
                .concat(0.483 * e, " 0 ")
                .concat(0.333 * e, " 0C")
                .concat(0.184 * e, " 0 -0.00012207 ")
                .concat(n, " -0.00012207 ")
                .concat(n);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (e, n) {
              return "M0 0L"
                .concat(e / 3, " ")
                .concat(n, "L")
                .concat(e / 1.5, " 0L")
                .concat(e, " ")
                .concat(n);
            },
          },
          {
            id: "jaggedRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " 0L")
                .concat(e / 1.5, " ")
                .concat(n, "L")
                .concat(e / 3, " 0L0 ")
                .concat(n);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (e, n) {
              return "M0 "
                .concat(n, "C")
                .concat(e, " 0 ")
                .concat(2 * e, " 0 ")
                .concat(2 * e, " 0");
            },
          },
          {
            id: "swoopRight",
            getPath: function (e, n) {
              return "M"
                .concat(e, " ")
                .concat(n, "C")
                .concat(e / 2, " 0 0 0 0 0");
            },
          },
          {
            id: "none",
            getPath: function (e, n) {
              return "M0 ".concat(n, "H").concat(e);
            },
          },
        ],
        r = function (e) {
          var n = e.width,
            t = e.shape,
            l = e.strokeWidth,
            i = e.strokeColor,
            r = e.strokeType,
            s = c.find(function (e) {
              return e.id === (null !== t && void 0 !== t ? t : "none");
            }),
            d = Math.floor(n),
            u = "none" === s.id ? Math.floor(l) : Math.floor(d / a.c8),
            v = s.getPath(d, u);
          return (0, o.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: d,
            height: u,
            viewBox: "0 0 ".concat(d, " ").concat(u),
            children: (0, o.jsx)("path", {
              d: v,
              stroke: i,
              strokeWidth: l,
              strokeDasharray: "dashed" === r ? "40 20" : void 0,
            }),
          });
        },
        s = function (e) {
          var n = e.border,
            t = e.contentRef,
            a = e.sectionDivider,
            c = n || {},
            s = c.type,
            d = c.width,
            u = c.color,
            v = (0, l.useState)(0),
            p = v[0],
            x = v[1],
            h = (0, l.useCallback)(
              function () {
                var e;
                x(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [t]
            );
          return (
            (0, i.Z)(h, n ? t : null),
            n
              ? (0, o.jsx)(r, {
                  width: p,
                  shape: a,
                  strokeType: s,
                  strokeWidth: d,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    52686: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return f;
          },
        });
      var o = t(26042),
        l = t(85893),
        i = t(67294),
        a = t(41125),
        c = t(5152),
        r = t.n(c),
        s = {
          dark: "dark-v11",
          light: "light-v11",
          outdoors: "outdoors-v12",
          satellite: "satellite-v9",
          streets: "streets-v12",
        },
        d = function (e) {
          var n,
            o = e.latLng,
            c = e.markerColor,
            d = void 0 === c ? a.theme.extend.colors.indigo[600] : c,
            u = e.theme,
            v = void 0 === u ? "light" : u,
            p = e.className,
            x = e.zoom,
            h = void 0 === x ? 10 : x,
            m = (0, i.useState)(null),
            f = m[0],
            g = m[1];
          return (
            (0, i.useEffect)(function () {
              g(
                r()(
                  function () {
                    return t
                      .e(6348)
                      .then(t.bind(t, 16348))
                      .then(function (e) {
                        return e.StaticMap;
                      });
                  },
                  {
                    loadableGenerated: {
                      webpack: function () {
                        return [16348];
                      },
                    },
                  }
                )
              );
            }, []),
            f
              ? (0, l.jsx)(f, {
                  latLng:
                    null !== o && void 0 !== o
                      ? o
                      : { lat: 37.0902, lng: -95.7129 },
                  markerColor: d,
                  theme: null !== (n = s[v]) && void 0 !== n ? n : s.light,
                  className: p,
                  zoom: h,
                })
              : null
          );
        },
        u = t(399),
        v = t(21123),
        p = t(31996),
        x = t(6604),
        h = t(4433),
        m = t(60546);
      function f(e) {
        var n,
          t,
          a,
          c,
          r,
          s,
          f,
          g,
          y,
          w,
          j = e.id,
          b = e.website,
          F = e.block,
          k = e.previousBlock,
          C = (0, i.useState)("#FFFFFF"),
          L = C[0],
          N = C[1],
          T = null === F || void 0 === F ? void 0 : F.align,
          z =
            null !==
              (y = null === F || void 0 === F ? void 0 : F.cornerRadius) &&
            void 0 !== y
              ? y
              : "no-rounded",
          M = null === F || void 0 === F ? void 0 : F.address,
          P =
            null !== (w = null === F || void 0 === F ? void 0 : F.latLng) &&
            void 0 !== w
              ? w
              : { lat: 37.0902, lng: -95.7129 },
          H = null === F || void 0 === F ? void 0 : F.animation,
          Z = null === b || void 0 === b ? void 0 : b.animation;
        !F ||
          (null !== F.headline && void 0 !== F.headline) ||
          (F.headline = "Location");
        var A,
          S,
          R = null === F || void 0 === F ? void 0 : F.divider,
          D = null === F || void 0 === F ? void 0 : F.border,
          E = (0, i.useRef)(null),
          K = (0, u.Z)(F).minHeight,
          W = function () {
            var e, n;
            if (
              null === F ||
              void 0 === F ||
              null === (e = F.layers) ||
              void 0 === e
                ? void 0
                : e.palette
            ) {
              var t, o, l;
              if (
                "custom" ===
                (null === F ||
                void 0 === F ||
                null === (t = F.layers) ||
                void 0 === t
                  ? void 0
                  : t.palette)
              )
                return null === F ||
                  void 0 === F ||
                  null === (o = F.layers) ||
                  void 0 === o ||
                  null === (l = o.foreground) ||
                  void 0 === l
                  ? void 0
                  : l.accent;
              var i,
                a,
                c =
                  (null === b ||
                  void 0 === b ||
                  null === (i = b.colorPalette) ||
                  void 0 === i
                    ? void 0
                    : i.Palette) ||
                  (null === b || void 0 === b ? void 0 : b.colorPalette);
              return (0, p.ow)(
                c,
                null === F ||
                  void 0 === F ||
                  null === (a = F.layers) ||
                  void 0 === a
                  ? void 0
                  : a.palette,
                "accent"
              );
            }
            return null !==
              (n = null === F || void 0 === F ? void 0 : F.marker) &&
              void 0 !== n
              ? n
              : b.primaryColor;
          },
          I = function (e) {
            var n;
            N(
              (0, p.$O)(
                (null === e ||
                void 0 === e ||
                null === (n = e.overlay) ||
                void 0 === n
                  ? void 0
                  : n.color1) || "#FFFFFF"
              )
            );
          };
        return (0, l.jsxs)("section", {
          className: "relative",
          children: [
            (0, l.jsxs)("div", {
              ref: E,
              id: j,
              className: (0, p.AK)(
                "relative flex",
                "min-h-screen" !==
                  (null === F ||
                  void 0 === F ||
                  null === (n = F.spacing) ||
                  void 0 === n
                    ? void 0
                    : n.minHeight) &&
                  "background" ===
                    (null === F || void 0 === F ? void 0 : F.style)
                  ? "!min-h-80vh md:!min-h-50vh"
                  : ""
              ),
              style: (0, o.Z)(
                {
                  minHeight:
                    "min-h-screen" ===
                    (null === F ||
                    void 0 === F ||
                    null === (t = F.spacing) ||
                    void 0 === t
                      ? void 0
                      : t.minHeight)
                      ? K
                      : "",
                },
                (0, h.$h)(F)
              ),
              children: [
                "background" === (null === F || void 0 === F ? void 0 : F.style)
                  ? (0, l.jsx)(x.c, {
                      settings: H,
                      globalSettings: Z,
                      unmount: !0,
                      children: (0, l.jsxs)("div", {
                        className: "absolute inset-0 w-full",
                        children: [
                          P &&
                            (0, l.jsx)(d, {
                              latLng: P,
                              className: (0, p.AK)(
                                "min-h-screen" ===
                                  (null === F ||
                                  void 0 === F ||
                                  null === (a = F.spacing) ||
                                  void 0 === a
                                    ? void 0
                                    : a.minHeight) && "h-full w-full",
                                "!absolute inset-0 z-5"
                              ),
                              theme:
                                null !==
                                  (A =
                                    null === F || void 0 === F
                                      ? void 0
                                      : F.theme) && void 0 !== A
                                  ? A
                                  : "light",
                              markerColor: W(),
                              zoom: 17,
                            }),
                          (0, l.jsx)("div", {
                            className: (0, p.AK)(
                              "relative z-10 container mx-auto py-12 lg:py-14 xl:py-20",
                              "min-h-screen" ===
                                (null === F ||
                                void 0 === F ||
                                null === (c = F.spacing) ||
                                void 0 === c
                                  ? void 0
                                  : c.minHeight)
                                ? "h-full flex ".concat(
                                    (0, p.A2)(F.verticalAlign)
                                  )
                                : ""
                            ),
                            children: (0, l.jsx)("div", {
                              className: (0, p.AK)(
                                "flex flex-row w-full",
                                "left" !== T && "md:flex-row-reverse"
                              ),
                              children: (0, l.jsxs)("div", {
                                className: (0, p.AK)(
                                  "relative z-10 w-full md:w-1/2 xl:w-2/5 flex flex-col gap-6 p-6 lg:p-10 shadow overflow-hidden",
                                  (0, p.yW)(
                                    z,
                                    null === b || void 0 === b
                                      ? void 0
                                      : b.cornerRadius
                                  )
                                ),
                                children: [
                                  (0, l.jsx)(v.Z, {
                                    block: F,
                                    website: b,
                                    onChange: I,
                                  }),
                                  (0, l.jsxs)("div", {
                                    className: "relative z-10",
                                    children: [
                                      (0, l.jsxs)("div", {
                                        children: [
                                          (null === F || void 0 === F
                                            ? void 0
                                            : F.headline) &&
                                            (0, l.jsx)("p", {
                                              className: "heading-medium mb-4",
                                              style: (0, o.Z)(
                                                { color: L },
                                                (0, p.j2)(b)
                                              ),
                                              children: F.headline,
                                            }),
                                          (0, l.jsx)("pre", {
                                            className: "body-normal",
                                            style: (0, o.Z)(
                                              { color: L },
                                              (0, p.SV)(b)
                                            ),
                                            children: M,
                                          }),
                                        ],
                                      }),
                                      null === F ||
                                      void 0 === F ||
                                      null === (r = F.additional) ||
                                      void 0 === r
                                        ? void 0
                                        : r.map(function (e, n) {
                                            return (0,
                                            l.jsxs)("div", { children: [(0, l.jsx)("p", { className: "heading-medium mb-4", style: (0, o.Z)({ color: L }, (0, p.j2)(b)), children: e.title }), (0, l.jsx)("p", { className: "body-normal", style: { color: L }, children: e.content })] }, n);
                                          }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    })
                  : (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(v.Z, { block: F, website: b, onChange: I }),
                        (0, l.jsx)("div", {
                          className: (0, p.AK)(
                            "relative z-10 container mx-auto flex-grow",
                            (0, p.bG)(
                              null === F || void 0 === F ? void 0 : F.spacing
                            )
                          ),
                          children: (0, l.jsx)(x.c, {
                            settings: H,
                            globalSettings: Z,
                            unmount: !0,
                            children: (0, l.jsxs)("div", {
                              className: (0, p.AK)(
                                "flex flex-col w-full h-full gap-10 lg:gap-20",
                                "left" === T
                                  ? "lg:flex-row"
                                  : "lg:!flex-row-reverse"
                              ),
                              children: [
                                (0, l.jsx)("div", {
                                  className: (0, p.AK)(
                                    "w-full md:w-1/2  h-full overflow-hidden",
                                    (0, p.yW)(
                                      z,
                                      null === b || void 0 === b
                                        ? void 0
                                        : b.cornerRadius
                                    )
                                  ),
                                  children: (0, l.jsx)(d, {
                                    latLng: P,
                                    className: (0, p.AK)(
                                      "  w-full z-5",
                                      "min-h-screen" ===
                                        (null === F ||
                                        void 0 === F ||
                                        null === (s = F.spacing) ||
                                        void 0 === s
                                          ? void 0
                                          : s.minHeight)
                                        ? "h-full"
                                        : "h-40 md:h-72 lg:h-96"
                                    ),
                                    theme:
                                      null !==
                                        (S =
                                          null === F || void 0 === F
                                            ? void 0
                                            : F.theme) && void 0 !== S
                                        ? S
                                        : "light",
                                    markerColor: W(),
                                    zoom: 17,
                                  }),
                                }),
                                (0, l.jsxs)("div", {
                                  className: (0, p.AK)(
                                    "w-full md:w-1/2 flex flex-col gap-6 lg:mt-10",
                                    (0, p.A2)(
                                      "min-h-screen" ===
                                        (null === F ||
                                        void 0 === F ||
                                        null === (f = F.spacing) ||
                                        void 0 === f
                                          ? void 0
                                          : f.minHeight)
                                        ? F.verticalAlign
                                        : "center",
                                      !0
                                    )
                                  ),
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (null === F || void 0 === F
                                          ? void 0
                                          : F.headline) &&
                                          (0, l.jsx)("p", {
                                            className: "heading-medium mb-4",
                                            style: (0, o.Z)(
                                              { color: L },
                                              (0, p.j2)(b)
                                            ),
                                            children: F.headline,
                                          }),
                                        (0, l.jsx)("pre", {
                                          className: "body-normal",
                                          style: (0, o.Z)(
                                            { color: L },
                                            (0, p.SV)(b)
                                          ),
                                          children: M,
                                        }),
                                      ],
                                    }),
                                    null === F ||
                                    void 0 === F ||
                                    null === (g = F.additional) ||
                                    void 0 === g
                                      ? void 0
                                      : g.map(function (e, n) {
                                          return (0,
                                          l.jsxs)("div", { children: [(0, l.jsx)("p", { className: "heading-medium mb-4", style: (0, o.Z)({ color: L }, (0, p.j2)(b)), children: e.title }), (0, l.jsx)("p", { className: "body-normal", style: { color: L }, children: e.content })] }, n);
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                (0, l.jsx)(h.iz, {
                  previousDivider:
                    null === k || void 0 === k ? void 0 : k.divider,
                  dividerUniqueId: "".concat(j, "-").concat(R),
                  divider: R,
                  contentRef: E,
                }),
              ],
            }),
            D &&
              (0, l.jsx)(m.OC, { border: D, sectionDivider: R, contentRef: E }),
          ],
        });
      }
    },
    399: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var o = t(67294);
      function l(e) {
        var n,
          t,
          l = (0, o.useState)(0),
          i = l[0],
          a = l[1],
          c = (0, o.useState)([0, 0]),
          r = c[0],
          s = c[1];
        return (
          (0, o.useEffect)(function () {
            var e = function () {
              s([window.innerWidth, window.innerHeight]);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, o.useEffect)(
            function () {
              var n;
              e &&
                a(
                  1 === e.idx
                    ? (null ===
                        (n =
                          null === document || void 0 === document
                            ? void 0
                            : document.getElementById("website-header")) ||
                      void 0 === n
                        ? void 0
                        : n.offsetHeight) || 80
                    : 0
                );
            },
            [e, r]
          ),
          {
            minHeight: (
              null === e ||
              void 0 === e ||
              null === (n = e.spacing) ||
              void 0 === n
                ? void 0
                : n.minHeight
            )
              ? "calc("
                  .concat(
                    "min-h-screen" ===
                      (null === e ||
                      void 0 === e ||
                      null === (t = e.spacing) ||
                      void 0 === t
                        ? void 0
                        : t.minHeight)
                      ? "100vh"
                      : "134px",
                    " - "
                  )
                  .concat(
                    (null === e || void 0 === e ? void 0 : e.combineWithHeader)
                      ? 0
                      : i,
                    "px)"
                  )
              : "134px",
            headerHeight: i,
          }
        );
      }
    },
    41125: function (e, n, t) {
      Object.defineProperty(n, "__esModule", { value: !0 });
      var o = t(50337).Z,
        l = t(75874);
      e.exports = {
        mode: "jit",
        purge: {
          content: [
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./components/**/*.{js,ts,jsx,tsx}",
            "./components/**/**/*.{js,ts,jsx,tsx}",
            "./hooks/**/*.{js,ts,jsx,tsx}",
            "./utils/**/*.{js,ts,jsx,tsx}",
          ],
          safelist: [
            "hidden",
            "h-12",
            "h-24",
            "h-45",
            "h-48",
            "h-53",
            "h-54",
            "h-64",
            "h-72",
            "h-80",
            "h-85",
            "h-90",
            "h-96",
            "h-106",
            "h-120",
            "h-128",
            "h-132",
            "h-144",
            "h-160",
            "h-192",
            "h-240",
            "w-12",
            "h-36",
            "w-36",
            "w-24",
            "w-48",
            "w-80",
            "w-96",
            "w-128",
            "mx-auto",
            "ml-auto",
            "mr-auto",
            "justify-start",
            "justify-end",
            "justify-center",
            "align-start",
            "align-end",
            "align-center",
            "flex",
            "flex-col",
            "flex-row",
            "h-150",
            "z-100",
            "max-w-full",
            "items-start",
            "items-end",
            "items-center",
            "min-h-screen",
            "min-h-80vh",
            "min-h-50vh",
            "min-h-100",
            "delay-100",
            "delay-200",
            "delay-300",
            "delay-400",
            "delay-500",
            "delay-600",
            "delay-700",
            "delay-800",
            "delay-900",
            "delay-1000",
            "delay-1100",
            "delay-1200",
            "delay-1300",
          ],
        },
        darkMode: !1,
        theme: {
          fontFamily: {
            sans: ['"Inter"', "ui-sans-serif", "system-ui", "sans-serif"],
          },
          screens: o({ xs: "440px" }, l.screens),
          container: {
            padding: { DEFAULT: "1.25rem", md: "1.5rem" },
            screens: {
              sm: "640px",
              md: "768px",
              lg: "1024px",
              xl: "1280px",
              "2xl": "1536px",
            },
          },
          zIndex: {
            0: 0,
            10: 10,
            20: 20,
            30: 30,
            40: 40,
            50: 50,
            25: 25,
            60: 60,
            70: 70,
            75: 75,
            80: 80,
            90: 90,
            100: 100,
            max: 999999,
            auto: "auto",
          },
          customForms: function (e) {
            return {
              default: {
                checkbox: {
                  "&:focus": {
                    outline: "none",
                    boxShadow: "none",
                    borderColor: "none",
                  },
                },
              },
            };
          },
          extend: {
            fontSize: {
              base: ["16px", "16px"],
              "label-sm": ["10px", "12px"],
              label: ["14px", "16px"],
              "label-lg": ["16px", "16px"],
              "body-sm": ["12px", "16px"],
              body: ["16px", "20px"],
              "body-lg": ["20px", "24px"],
              h6: ["16px", "28px"],
              h5: ["20px", "28px"],
              h4: ["24px", "32px"],
              h3: ["32px", "40px"],
              h2: ["40px", "48px"],
              h1: ["48px", "56px"],
              display: ["64px", "72px"],
              xxl: ["16rem", "1"],
            },
            padding: { 18: "4.5rem" },
            width: {
              18: "4.5rem",
              20: "80px",
              22: "5.5rem",
              30: "120px",
              40: "160px",
              50: "200px",
              60: "240px",
              75: "300px",
              80: "320px",
              90: "360px",
              96: "384px",
              100: "400px",
              120: "480px",
              128: "512px",
              140: "560px",
              150: "600px",
              160: "640px",
              "0/1": "0%",
              "1/1": "100%",
            },
            height: {
              0.75: "3px",
              9.5: "38px",
              22: "5.5rem",
              45: "180px",
              53: "212px",
              54: "216px",
              64: "256px",
              72: "288px",
              80: "320px",
              85: "340px",
              90: "360px",
              96: "384px",
              100: "400px",
              106: "424px",
              120: "480px",
              128: "512px",
              132: "528px",
              144: "576px",
              150: "600px",
              160: "640px",
              192: "768px",
              200: "800px",
              210: "840px",
              220: "880px",
              230: "920px",
              240: "960px",
              250: "1000px",
              260: "1040px",
            },
            backgroundSize: { full: "100%" },
            backgroundPosition: {
              "-top-4": "center top -1rem",
              "-top-20": "center top -5rem",
            },
            minHeight: {
              0: "0",
              "1/4": "25%",
              "1/2": "50%",
              "3/4": "75%",
              full: "100%",
              20: "80px",
              80: "320px",
              120: "480px",
              130: "520px",
              screen: "100vh",
              "50vh": "50vh",
              "80vh": "80vh",
            },
            maxHeight: {
              0: "0",
              "1/4": "25%",
              "1/2": "50%",
              "3/4": "75%",
              full: "100%",
              20: "80px",
              40: "160px",
              50: "200px",
              60: "240px",
              70: "280px",
              80: "320px",
              100: "400px",
              150: "600px",
              250: "1000px",
            },
            maxWidth: {
              20: "80px",
              30: "120px",
              40: "160px",
              50: "200px",
              60: "240px",
              70: "280px",
              80: "320px",
              90: "360px",
              100: "400px",
              110: "440px",
              120: "480px",
              140: "560px",
              160: "640px",
              200: "800px",
              220: "860px",
              250: "1000px",
              full: "100%",
            },
            flex: { 0: "0 0 auto", "col-1": "flex 1 1 10%" },
            borderRadius: { "4xl": "2rem" },
            outline: { "blue-600": ["2px solid #007CDB", "8px"] },
            colors: { indigo: { 600: "#4C35DE" } },
            transitionDuration: { 250: "250ms", 750: "750ms" },
            transitionDelay: {
              100: "100ms",
              200: "200ms",
              300: "300ms",
              400: "400ms",
              500: "500ms",
              600: "600ms",
              700: "700ms",
              800: "800ms",
              900: "900ms",
              1e3: "1000ms",
              1100: "1100ms",
              1200: "1200ms",
              1300: "1300ms",
            },
          },
        },
        variants: { extend: {} },
        plugins: [t(64221), t(50130)],
      };
    },
  },
]);
