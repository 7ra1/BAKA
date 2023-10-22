"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3509],
  {
    6604: function (e, t, n) {
      n.d(t, {
        c: function () {
          return y;
        },
      });
      var o = n(828),
        i = n(85893),
        a = n(67294),
        l = n(26042),
        r = n(69396),
        c = n(11355),
        s = {
          250: "duration-250",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          750: "duration-750",
        },
        u = {
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
        d = function (e) {
          var t,
            n = e.show,
            o = void 0 === n || n,
            d = e.appear,
            v = e.children,
            f = e.animation,
            m = void 0 === f ? "none" : f,
            h = e.duration,
            g = void 0 === h ? 300 : h,
            p = e.asChild,
            y = e.unmount,
            x = e.style,
            b = e.delay,
            w = null !== (t = u[m]) && void 0 !== t ? t : u.none,
            C = (0, r.Z)((0, l.Z)({}, w), {
              enter: ""
                .concat(w.enter, " ")
                .concat(s[g], " ")
                .concat(b ? "delay-".concat(b) : ""),
              leave: ""
                .concat(w.leave, " ")
                .concat(s[g], " ")
                .concat(b ? "delay-".concat(b) : ""),
            }),
            k = p ? c.u.Child : c.u;
          return (0, i.jsx)(
            k,
            (0, r.Z)(
              (0, l.Z)(
                {
                  show: p ? void 0 : o,
                  as: b ? "div" : a.Fragment,
                  appear: d,
                  unmount: y,
                  style: x,
                },
                C
              ),
              { children: v }
            )
          );
        },
        v = n(42708),
        f = "default",
        m = "medium",
        h = "none",
        g = "medium";
      var p = { slow: 750, medium: 500, fast: 250 },
        y = function (e) {
          var t = e.children,
            n = e.settings,
            l = e.globalSettings,
            r = e.unmount,
            c = void 0 !== r && r,
            s = e.delay,
            u = (function (e, t) {
              var n = e || {},
                o = n.type,
                i = void 0 === o ? f : o,
                a = n.speed,
                l = void 0 === a ? m : a;
              return (
                "default" === i &&
                  ((i = (null === t || void 0 === t ? void 0 : t.type) || h),
                  (l = (null === t || void 0 === t ? void 0 : t.speed) || g)),
                { type: i, speed: l }
              );
            })(n, l),
            y = u.type,
            x = u.speed,
            b = (0, a.useState)(!1),
            w = b[0],
            C = b[1],
            k = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            j = k[0],
            F = k[1];
          k[2];
          return (
            (0, a.useEffect)(
              function () {
                var e = null;
                return (
                  F &&
                    (e = setTimeout(function () {
                      return C(!0);
                    }, 400)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [F]
            ),
            "none" === y
              ? (0, i.jsx)(i.Fragment, { children: t })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    !w &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: j,
                      }),
                    (0, i.jsx)(d, {
                      show: w,
                      animation: y,
                      duration: p[x],
                      unmount: c,
                      disableLeave: !0,
                      delay: s,
                      children: t,
                    }),
                    !w &&
                      (0, i.jsx)("div", {
                        className: "invisible",
                        children: t,
                      }),
                  ],
                })
          );
        };
    },
    60546: function (e, t, n) {
      n.d(t, {
        OC: function () {
          return s;
        },
      });
      var o = n(85893),
        i = n(67294),
        a = n(62246),
        l = n(4433),
        r = [
          {
            id: "slantLeft",
            getPath: function (e, t) {
              return "M".concat(e, " 0L-0 ").concat(t);
            },
          },
          {
            id: "slantRight",
            getPath: function (e, t) {
              return "M0 0L".concat(e, " ").concat(t);
            },
          },
          {
            id: "pointUp",
            getPath: function (e, t) {
              return "M0 0"
                .concat(t, "L")
                .concat(e / 2, " 0L")
                .concat(e, " ")
                .concat(t, "L")
                .concat(1.5 * e, " 0V0");
            },
          },
          {
            id: "pointDown",
            getPath: function (e, t) {
              return "M0 0L"
                .concat(e / 2, " ")
                .concat(t, "L")
                .concat(e, " 0");
            },
          },
          {
            id: "curveUp",
            getPath: function (e, t) {
              return "M0 0 C"
                .concat(e / 2, " ")
                .concat(t, " ")
                .concat(e - e / 2, " ")
                .concat(t, " ")
                .concat(e, " 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (e, t) {
              return "M0 "
                .concat(t, " C")
                .concat(e / 2, " 0 ")
                .concat(e - e / 2, " 0 ")
                .concat(e, " ")
                .concat(t);
            },
          },
          {
            id: "waveLeft",
            getPath: function (e, t) {
              return "M0 0C0 0 "
                .concat(0.2023 * e, " ")
                .concat(t, " ")
                .concat(0.3333 * e, " ")
                .concat(t, "C")
                .concat(0.4681 * e, " ")
                .concat(t, " ")
                .concat(0.5318 * e, " 0 ")
                .concat(0.6667 * e, " 0C")
                .concat(0.8015 * e, " 0 ")
                .concat(e, " ")
                .concat(t, " ")
                .concat(e, " ")
                .concat(t);
            },
          },
          {
            id: "waveRight",
            getPath: function (e, t) {
              return "M"
                .concat(e, " 0C")
                .concat(e, " 0 ")
                .concat(0.8 * e, " ")
                .concat(t, " ")
                .concat(0.666 * e, " ")
                .concat(t, "C")
                .concat(0.547 * e, " ")
                .concat(t, " ")
                .concat(0.483 * e, " 0 ")
                .concat(0.333 * e, " 0C")
                .concat(0.184 * e, " 0 -0.00012207 ")
                .concat(t, " -0.00012207 ")
                .concat(t);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (e, t) {
              return "M0 0L"
                .concat(e / 3, " ")
                .concat(t, "L")
                .concat(e / 1.5, " 0L")
                .concat(e, " ")
                .concat(t);
            },
          },
          {
            id: "jaggedRight",
            getPath: function (e, t) {
              return "M"
                .concat(e, " 0L")
                .concat(e / 1.5, " ")
                .concat(t, "L")
                .concat(e / 3, " 0L0 ")
                .concat(t);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (e, t) {
              return "M0 "
                .concat(t, "C")
                .concat(e, " 0 ")
                .concat(2 * e, " 0 ")
                .concat(2 * e, " 0");
            },
          },
          {
            id: "swoopRight",
            getPath: function (e, t) {
              return "M"
                .concat(e, " ")
                .concat(t, "C")
                .concat(e / 2, " 0 0 0 0 0");
            },
          },
          {
            id: "none",
            getPath: function (e, t) {
              return "M0 ".concat(t, "H").concat(e);
            },
          },
        ],
        c = function (e) {
          var t = e.width,
            n = e.shape,
            i = e.strokeWidth,
            a = e.strokeColor,
            c = e.strokeType,
            s = r.find(function (e) {
              return e.id === (null !== n && void 0 !== n ? n : "none");
            }),
            u = Math.floor(t),
            d = "none" === s.id ? Math.floor(i) : Math.floor(u / l.c8),
            v = s.getPath(u, d);
          return (0, o.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: u,
            height: d,
            viewBox: "0 0 ".concat(u, " ").concat(d),
            children: (0, o.jsx)("path", {
              d: v,
              stroke: a,
              strokeWidth: i,
              strokeDasharray: "dashed" === c ? "40 20" : void 0,
            }),
          });
        },
        s = function (e) {
          var t = e.border,
            n = e.contentRef,
            l = e.sectionDivider,
            r = t || {},
            s = r.type,
            u = r.width,
            d = r.color,
            v = (0, i.useState)(0),
            f = v[0],
            m = v[1],
            h = (0, i.useCallback)(
              function () {
                var e;
                m(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [n]
            );
          return (
            (0, a.Z)(h, t ? n : null),
            t
              ? (0, o.jsx)(c, {
                  width: f,
                  shape: l,
                  strokeType: s,
                  strokeWidth: u,
                  strokeColor: d,
                })
              : null
          );
        };
    },
    33509: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return j;
          },
        });
      var o = n(26042),
        i = n(69396),
        a = n(85893),
        l = n(31996),
        r = n(29260),
        c = n.n(r),
        s = n(52077),
        u = n(399),
        d = n(21123),
        v = n(67294),
        f = "below",
        m = { color: "#000000", amount: 80 },
        h = {
          below: "",
          top: "absolute w-full bottom-0 left-0 flex flex-col justify-end",
          covering:
            "absolute w-full h-full top-0 left-0 flex flex-col justify-center",
        },
        g = { below: "py-6", top: "p-6 justify-end", covering: "p-10" };
      var p = n(62246),
        y = n(6604),
        x = n(7004),
        b = n(4433),
        w = n(60546);
      var C = {
        xsmall: {
          small: { nColumns: 1, gap: 16 },
          medium: { nColumns: 1, gap: 40 },
          large: { nColumns: 1, gap: 40 },
        },
        small: {
          small: { nColumns: 3, gap: 24 },
          medium: { nColumns: 2, gap: 40 },
          large: { nColumns: 1, gap: 40 },
        },
        large: {
          small: { nColumns: 4, gap: 24 },
          medium: { nColumns: 3, gap: 40 },
          large: { nColumns: 2, gap: 40 },
        },
        xlarge: {
          small: { nColumns: 4, gap: 40 },
          medium: { nColumns: 3, gap: 40 },
          large: { nColumns: 2, gap: 80 },
        },
      };
      function k(e) {
        var t = (function () {
            var e = (0, l.ac)("(min-width: 640px)"),
              t = (0, l.ac)("(min-width: 1024px)");
            return (0, l.ac)("(min-width: 1280px)")
              ? "xlarge"
              : t
              ? "large"
              : e
              ? "small"
              : "xsmall";
          })(),
          n = (0, v.useState)({}),
          o = n[0],
          i = n[1],
          a = (0, v.useState)({}),
          r = a[0],
          c = a[1];
        return (
          (0, v.useEffect)(
            function () {
              var n = C[t][null !== e && void 0 !== e ? e : "medium"],
                o = n.nColumns,
                a = n.gap;
              i(
                (function (e, t) {
                  return {
                    flex: "0 0 calc("
                      .concat(100 / e, "% - ")
                      .concat(((e - 1) * t) / e, "px"),
                  };
                })(o, a)
              ),
                c({ gap: "".concat(a, "px") });
            },
            [t, e]
          ),
          { itemsContainerStyles: r, itemsStyles: o }
        );
      }
      function j(e) {
        var t,
          n = e.id,
          r = e.block,
          C = e.website,
          j = e.previousBlock,
          F = null === r || void 0 === r ? void 0 : r.headline,
          S = null === r || void 0 === r ? void 0 : r.showImage,
          M = null === r || void 0 === r ? void 0 : r.showIcon,
          R = null === r || void 0 === r ? void 0 : r.showHeading,
          T = null === r || void 0 === r ? void 0 : r.showContent,
          L = null === r || void 0 === r ? void 0 : r.showButton,
          N = null === r || void 0 === r ? void 0 : r.fullContentLink,
          P = null === r || void 0 === r ? void 0 : r.aspectRatio,
          A =
            null !== (t = null === r || void 0 === r ? void 0 : r.imageFit) &&
            void 0 !== t
              ? t
              : "cover",
          Z = null === r || void 0 === r ? void 0 : r.cornerRadius,
          H = null === r || void 0 === r ? void 0 : r.align,
          I = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            return (
              (e.position && !t) || (e.position = f),
              (e.background && !t) || (e.background = m),
              e
            );
          })(
            null === r || void 0 === r ? void 0 : r.textSettings,
            !S || "cover" !== A || (!L && !T && !R)
          ),
          W = null === r || void 0 === r ? void 0 : r.animation,
          V = null === C || void 0 === C ? void 0 : C.animation,
          z = null === r || void 0 === r ? void 0 : r.divider,
          E = null === r || void 0 === r ? void 0 : r.border,
          K = k(null === r || void 0 === r ? void 0 : r.itemsSize),
          O = K.itemsStyles,
          D = K.itemsContainerStyles,
          B = (0, v.useRef)(null),
          _ = (0, v.useState)("#FFFFFF"),
          U = _[0],
          $ = _[1],
          G = (0, v.useState)(
            "below" === (null === I || void 0 === I ? void 0 : I.position)
              ? void 0
              : "0px"
          ),
          Y = G[0],
          Q = G[1],
          q = (function (e, t) {
            var n,
              o,
              i = e.position,
              a = e.background,
              r = {},
              c = {};
            return (
              "covering" === i || "top" === i
                ? ((c.backgroundColor = (0, l.mR)(a.color, a.amount)),
                  (r.color = (0, l.$O)(a.color)))
                : (r.color = t),
              {
                containerClasses: null !== (n = h[i]) && void 0 !== n ? n : "",
                containerStyles: c,
                contentClasses: null !== (o = g[i]) && void 0 !== o ? o : "",
                contentStyles: r,
              }
            );
          })(I, U),
          X = (0, v.useRef)([]),
          J = (0, v.useCallback)(
            function () {
              var e,
                t,
                n = X.current.reduce(function (n, o) {
                  var i, a;
                  return (null !==
                    (e =
                      null === (i = n.current) || void 0 === i
                        ? void 0
                        : i.offsetHeight) && void 0 !== e
                    ? e
                    : 0) >
                    (null !==
                      (t =
                        null === (a = o.current) || void 0 === a
                          ? void 0
                          : a.offsetHeight) && void 0 !== t
                      ? t
                      : 0)
                    ? n
                    : o;
                });
              n.current && Q(n.current.offsetHeight + "px");
            },
            [X]
          );
        (0, p.Z)(
          J,
          "below" === (null === I || void 0 === I ? void 0 : I.position)
            ? null
            : X.current
        );
        var ee = (0, u.Z)(r).minHeight,
          te = function () {
            return "left" === H
              ? "text-left"
              : "right" === H
              ? "text-right"
              : "text-center";
          },
          ne = N ? "a" : "div";
        return (0, a.jsxs)("section", {
          className: "relative",
          children: [
            (0, a.jsxs)("div", {
              ref: B,
              id: n,
              className: (0, l.AK)(
                "relative flex flex-none flex-shrink-0",
                (0, l.A2)(
                  (null === r || void 0 === r ? void 0 : r.verticalAlign) ||
                    "center"
                )
              ),
              style: (0, o.Z)({ minHeight: ee }, (0, b.$h)(r)),
              children: [
                (0, a.jsx)(d.Z, { block: r, website: C, setTextColor: $ }),
                (0, a.jsx)("div", {
                  className: (0, l.AK)(
                    "relative z-10 container mx-auto",
                    (0, l.bG)(null === r || void 0 === r ? void 0 : r.spacing)
                  ),
                  children: (0, a.jsxs)("div", {
                    children: [
                      F &&
                        (0, a.jsx)(y.c, {
                          settings: W,
                          globalSettings: V,
                          children: (0, a.jsx)("h2", {
                            className: (0, l.AK)("heading-large mb-6", te()),
                            style: (0, o.Z)({ color: U }, (0, l.j2)(C)),
                            children: F,
                          }),
                        }),
                      (null === r || void 0 === r ? void 0 : r.items) &&
                        (0, a.jsx)("div", {
                          className: (0, l.AK)(
                            "flex flex-wrap relative",
                            "left" === H
                              ? "justify-start"
                              : "right" === H
                              ? "justify-end"
                              : "justify-center"
                          ),
                          style: D,
                          children: r.items.map(function (e, t) {
                            var u, d, v, f, m, h, g;
                            return (0, a.jsx)(
                              ne,
                              {
                                className: (0, l.AK)(
                                  "group w-full relative overflow-hidden",
                                  (0, l.yW)(
                                    Z,
                                    null === C || void 0 === C
                                      ? void 0
                                      : C.cornerRadius
                                  ),
                                  "0px" === Y ? "opacity-0" : "",
                                  N
                                    ? "focus:outline-blue-600 cursor-pointer"
                                    : ""
                                ),
                                onClick: N
                                  ? function (t) {
                                      return (0, x.Gc)(
                                        t,
                                        null === e || void 0 === e
                                          ? void 0
                                          : e.button
                                      );
                                    }
                                  : void 0,
                                target: N
                                  ? (0, x.U9)(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.button,
                                      C
                                    )
                                  : void 0,
                                href: N
                                  ? (0, x.f$)(
                                      null === e || void 0 === e
                                        ? void 0
                                        : e.button,
                                      C
                                    )
                                  : void 0,
                                style: O,
                                children: (0, a.jsxs)(y.c, {
                                  settings: W,
                                  globalSettings: V,
                                  delay: 100 * (t + 1),
                                  children: [
                                    S &&
                                      e.image &&
                                      (0, a.jsxs)("div", {
                                        className: (0, l.AK)(
                                          "flex-shrink-0 relative",
                                          (0, l.n3)(P)
                                        ),
                                        style: { minHeight: Y },
                                        children: [
                                          "top" ===
                                            (null === I || void 0 === I
                                              ? void 0
                                              : I.position) &&
                                            (0, a.jsx)("span", {
                                              className: "relative block",
                                              style: { height: Y },
                                            }),
                                          (0, l.QW)(
                                            null === e || void 0 === e
                                              ? void 0
                                              : e.image
                                          ) &&
                                            (0, a.jsx)(c(), {
                                              className: (0, l.AK)(
                                                N &&
                                                  "transition-all duration-300 group-hover:scale-110",
                                                (0, l.yW)(
                                                  Z,
                                                  null === C || void 0 === C
                                                    ? void 0
                                                    : C.cornerRadius
                                                )
                                              ),
                                              src: (0, l.QW)(
                                                null === e || void 0 === e
                                                  ? void 0
                                                  : e.image
                                              ),
                                              onContextMenu: function (e) {
                                                return e.preventDefault();
                                              },
                                              objectFit: A,
                                              objectPosition: ""
                                                .concat(
                                                  e.imagePositionX || "center",
                                                  " "
                                                )
                                                .concat(
                                                  e.imagePositionY || "center"
                                                ),
                                              layout: "fill",
                                              alt: e.title,
                                            }),
                                        ],
                                      }),
                                    M &&
                                      (null === (u = e.icon) || void 0 === u
                                        ? void 0
                                        : u.media) &&
                                      (0, a.jsx)("div", {
                                        className: (0, l.AK)(
                                          "flex-shrink-0 relative",
                                          (null === r || void 0 === r
                                            ? void 0
                                            : r.iconSize) || "w-12 h-12",
                                          "left" === H
                                            ? "ml-0 mr-auto"
                                            : "right" === H
                                            ? "ml-auto mr-0"
                                            : "mx-auto"
                                        ),
                                        children: (0, a.jsx)("div", {
                                          className: "absolute w-full h-full",
                                          style: {
                                            backgroundColor:
                                              (null === (d = e.icon) ||
                                              void 0 === d
                                                ? void 0
                                                : d.color) || "#1F2937",
                                            WebkitMaskImage: 'url("'.concat(
                                              null === e ||
                                                void 0 === e ||
                                                null === (v = e.icon) ||
                                                void 0 === v ||
                                                null === (f = v.media) ||
                                                void 0 === f
                                                ? void 0
                                                : f.url,
                                              '")'
                                            ),
                                            maskImage: 'url("'.concat(
                                              null === e ||
                                                void 0 === e ||
                                                null === (m = e.icon) ||
                                                void 0 === m ||
                                                null === (h = m.media) ||
                                                void 0 === h
                                                ? void 0
                                                : h.url,
                                              '")'
                                            ),
                                            WebkitMaskPosition: "center",
                                            maskPosition: "center",
                                            WebkitMaskRepeat: "no-repeat",
                                            maskRepeat: "no-repeat",
                                            WebkitMaskSize: "contain",
                                            maskSize: "contain",
                                          },
                                        }),
                                      }),
                                    (0, a.jsx)("div", {
                                      className: q.containerClasses,
                                      style: (0, i.Z)(
                                        (0, o.Z)({}, q.containerStyles),
                                        { minHeight: Y }
                                      ),
                                      children: (0, a.jsxs)("div", {
                                        ref: function (e) {
                                          return (X.current[t] = {
                                            current: e,
                                          });
                                        },
                                        className: (0, l.AK)(
                                          "flex flex-col",
                                          te(),
                                          "left" === H
                                            ? "items-start"
                                            : "right" === H
                                            ? "items-end"
                                            : "items-center",
                                          q.contentClasses
                                        ),
                                        style: q.contentStyles,
                                        children: [
                                          R &&
                                            (0, a.jsx)("p", {
                                              className: (0, l.AK)(
                                                "heading-medium mb-4",
                                                N ? "group-hover:underline" : ""
                                              ),
                                              style: (0, o.Z)(
                                                { color: "currentColor" },
                                                (0, l.j2)(C)
                                              ),
                                              children: e.title,
                                            }),
                                          T &&
                                            (0, a.jsx)("div", {
                                              className: (0, l.AK)(
                                                "rich-text-block",
                                                N && !R
                                                  ? "group-hover:underline"
                                                  : ""
                                              ),
                                              style: { color: "currentColor" },
                                              dangerouslySetInnerHTML: {
                                                __html: e.content,
                                              },
                                            }),
                                          L &&
                                            (null === e || void 0 === e
                                              ? void 0
                                              : e.button) &&
                                            (0, a.jsx)(s.Z, {
                                              button: (0, i.Z)(
                                                (0, o.Z)({}, e.button),
                                                {
                                                  style:
                                                    null === (g = r.button) ||
                                                    void 0 === g
                                                      ? void 0
                                                      : g.style,
                                                }
                                              ),
                                              block: r,
                                              website: C,
                                              className: "lg mt-4",
                                            }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              },
                              "section-".concat(n, "-item-").concat(t)
                            );
                          }),
                        }),
                    ],
                  }),
                }),
                (0, a.jsx)(b.iz, {
                  previousDivider:
                    null === j || void 0 === j ? void 0 : j.divider,
                  dividerUniqueId: "".concat(n, "-").concat(z),
                  divider: z,
                  contentRef: B,
                }),
              ],
            }),
            E &&
              (0, a.jsx)(w.OC, { border: E, sectionDivider: z, contentRef: B }),
          ],
        });
      }
    },
    399: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var o = n(67294);
      function i(e) {
        var t,
          n,
          i = (0, o.useState)(0),
          a = i[0],
          l = i[1],
          r = (0, o.useState)([0, 0]),
          c = r[0],
          s = r[1];
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
              var t;
              e &&
                l(
                  1 === e.idx
                    ? (null ===
                        (t =
                          null === document || void 0 === document
                            ? void 0
                            : document.getElementById("website-header")) ||
                      void 0 === t
                        ? void 0
                        : t.offsetHeight) || 80
                    : 0
                );
            },
            [e, c]
          ),
          {
            minHeight: (
              null === e ||
              void 0 === e ||
              null === (t = e.spacing) ||
              void 0 === t
                ? void 0
                : t.minHeight
            )
              ? "calc("
                  .concat(
                    "min-h-screen" ===
                      (null === e ||
                      void 0 === e ||
                      null === (n = e.spacing) ||
                      void 0 === n
                        ? void 0
                        : n.minHeight)
                      ? "100vh"
                      : "134px",
                    " - "
                  )
                  .concat(
                    (null === e || void 0 === e ? void 0 : e.combineWithHeader)
                      ? 0
                      : a,
                    "px)"
                  )
              : "134px",
            headerHeight: a,
          }
        );
      }
    },
    42708: function (e, t, n) {
      n.d(t, {
        YD: function () {
          return v;
        },
      });
      var o = n(67294),
        i = Object.defineProperty,
        a = (e, t, n) => (
          ((e, t, n) => {
            t in e
              ? i(e, t, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (e[t] = n);
          })(e, "symbol" !== typeof t ? t + "" : t, n),
          n
        ),
        l = new Map(),
        r = new WeakMap(),
        c = 0,
        s = void 0;
      function u(e) {
        return Object.keys(e)
          .sort()
          .filter((t) => void 0 !== e[t])
          .map((t) => {
            return `${t}_${
              "root" === t
                ? ((n = e.root),
                  n
                    ? (r.has(n) || ((c += 1), r.set(n, c.toString())), r.get(n))
                    : "0")
                : e[t]
            }`;
            var n;
          })
          .toString();
      }
      function d(e, t, n = {}, o = s) {
        if (
          "undefined" === typeof window.IntersectionObserver &&
          void 0 !== o
        ) {
          const i = e.getBoundingClientRect();
          return (
            t(o, {
              isIntersecting: o,
              target: e,
              intersectionRatio:
                "number" === typeof n.threshold ? n.threshold : 0,
              time: 0,
              boundingClientRect: i,
              intersectionRect: i,
              rootBounds: i,
            }),
            () => {}
          );
        }
        const {
          id: i,
          observer: a,
          elements: r,
        } = (function (e) {
          let t = u(e),
            n = l.get(t);
          if (!n) {
            const o = new Map();
            let i;
            const a = new IntersectionObserver((t) => {
              t.forEach((t) => {
                var n;
                const a =
                  t.isIntersecting && i.some((e) => t.intersectionRatio >= e);
                e.trackVisibility &&
                  "undefined" === typeof t.isVisible &&
                  (t.isVisible = a),
                  null == (n = o.get(t.target)) ||
                    n.forEach((e) => {
                      e(a, t);
                    });
              });
            }, e);
            (i =
              a.thresholds ||
              (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
              (n = { id: t, observer: a, elements: o }),
              l.set(t, n);
          }
          return n;
        })(n);
        let c = r.get(e) || [];
        return (
          r.has(e) || r.set(e, c),
          c.push(t),
          a.observe(e),
          function () {
            c.splice(c.indexOf(t), 1),
              0 === c.length && (r.delete(e), a.unobserve(e)),
              0 === r.size && (a.disconnect(), l.delete(i));
          }
        );
      }
      o.Component;
      function v({
        threshold: e,
        delay: t,
        trackVisibility: n,
        rootMargin: i,
        root: a,
        triggerOnce: l,
        skip: r,
        initialInView: c,
        fallbackInView: s,
        onChange: u,
      } = {}) {
        var v;
        const [f, m] = o.useState(null),
          h = o.useRef(),
          [g, p] = o.useState({ inView: !!c, entry: void 0 });
        (h.current = u),
          o.useEffect(() => {
            if (r || !f) return;
            let o;
            return (
              (o = d(
                f,
                (e, t) => {
                  p({ inView: e, entry: t }),
                    h.current && h.current(e, t),
                    t.isIntersecting && l && o && (o(), (o = void 0));
                },
                {
                  root: a,
                  rootMargin: i,
                  threshold: e,
                  trackVisibility: n,
                  delay: t,
                },
                s
              )),
              () => {
                o && o();
              }
            );
          }, [Array.isArray(e) ? e.toString() : e, f, a, i, l, r, n, s, t]);
        const y = null == (v = g.entry) ? void 0 : v.target,
          x = o.useRef();
        f ||
          !y ||
          l ||
          r ||
          x.current === y ||
          ((x.current = y), p({ inView: !!c, entry: void 0 }));
        const b = [m, g.inView, g.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
    },
  },
]);
