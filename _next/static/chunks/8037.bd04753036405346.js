"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8037],
  {
    6604: function (e, n, t) {
      t.d(n, {
        c: function () {
          return x;
        },
      });
      var i = t(828),
        o = t(85893),
        l = t(67294),
        a = t(26042),
        c = t(69396),
        r = t(11355),
        d = {
          250: "duration-250",
          300: "duration-300",
          500: "duration-500",
          700: "duration-700",
          750: "duration-750",
        },
        s = {
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
            i = void 0 === t || t,
            u = e.appear,
            v = e.children,
            m = e.animation,
            g = void 0 === m ? "none" : m,
            h = e.duration,
            p = void 0 === h ? 300 : h,
            f = e.asChild,
            x = e.unmount,
            y = e.style,
            j = e.delay,
            w = null !== (n = s[g]) && void 0 !== n ? n : s.none,
            b = (0, c.Z)((0, a.Z)({}, w), {
              enter: ""
                .concat(w.enter, " ")
                .concat(d[p], " ")
                .concat(j ? "delay-".concat(j) : ""),
              leave: ""
                .concat(w.leave, " ")
                .concat(d[p], " ")
                .concat(j ? "delay-".concat(j) : ""),
            }),
            N = f ? r.u.Child : r.u;
          return (0, o.jsx)(
            N,
            (0, c.Z)(
              (0, a.Z)(
                {
                  show: f ? void 0 : i,
                  as: j ? "div" : l.Fragment,
                  appear: u,
                  unmount: x,
                  style: y,
                },
                b
              ),
              { children: v }
            )
          );
        },
        v = t(42708),
        m = "default",
        g = "medium",
        h = "none",
        p = "medium";
      var f = { slow: 750, medium: 500, fast: 250 },
        x = function (e) {
          var n = e.children,
            t = e.settings,
            a = e.globalSettings,
            c = e.unmount,
            r = void 0 !== c && c,
            d = e.delay,
            s = (function (e, n) {
              var t = e || {},
                i = t.type,
                o = void 0 === i ? m : i,
                l = t.speed,
                a = void 0 === l ? g : l;
              return (
                "default" === o &&
                  ((o = (null === n || void 0 === n ? void 0 : n.type) || h),
                  (a = (null === n || void 0 === n ? void 0 : n.speed) || p)),
                { type: o, speed: a }
              );
            })(t, a),
            x = s.type,
            y = s.speed,
            j = (0, l.useState)(!1),
            w = j[0],
            b = j[1],
            N = (0, i.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            F = N[0],
            C = N[1];
          N[2];
          return (
            (0, l.useEffect)(
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
            "none" === x
              ? (0, o.jsx)(o.Fragment, { children: n })
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    !w &&
                      (0, o.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: F,
                      }),
                    (0, o.jsx)(u, {
                      show: w,
                      animation: x,
                      duration: f[y],
                      unmount: r,
                      disableLeave: !0,
                      delay: d,
                      children: n,
                    }),
                    !w &&
                      (0, o.jsx)("div", {
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
          return d;
        },
      });
      var i = t(85893),
        o = t(67294),
        l = t(62246),
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
            o = e.strokeWidth,
            l = e.strokeColor,
            r = e.strokeType,
            d = c.find(function (e) {
              return e.id === (null !== t && void 0 !== t ? t : "none");
            }),
            s = Math.floor(n),
            u = "none" === d.id ? Math.floor(o) : Math.floor(s / a.c8),
            v = d.getPath(s, u);
          return (0, i.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: s,
            height: u,
            viewBox: "0 0 ".concat(s, " ").concat(u),
            children: (0, i.jsx)("path", {
              d: v,
              stroke: l,
              strokeWidth: o,
              strokeDasharray: "dashed" === r ? "40 20" : void 0,
            }),
          });
        },
        d = function (e) {
          var n = e.border,
            t = e.contentRef,
            a = e.sectionDivider,
            c = n || {},
            d = c.type,
            s = c.width,
            u = c.color,
            v = (0, o.useState)(0),
            m = v[0],
            g = v[1],
            h = (0, o.useCallback)(
              function () {
                var e;
                g(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [t]
            );
          return (
            (0, l.Z)(h, n ? t : null),
            n
              ? (0, i.jsx)(r, {
                  width: m,
                  shape: a,
                  strokeType: d,
                  strokeWidth: s,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    98037: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var i = t(26042),
        o = t(69396),
        l = t(85893),
        a = t(31996),
        c = t(67294),
        r = t(29260),
        d = t.n(r),
        s = t(33752),
        u = t.n(s),
        v = t(41984),
        m = t(3677),
        g = t(11355),
        h = t(51961),
        p = t(43751);
      function f(e) {
        var n = e.pictures,
          t = e.selected,
          i = e.aspectRatio,
          o = e.cornerRadius,
          r = e.open,
          s = e.background,
          f = e.setOpen,
          x = (0, a.ac)("(min-width: 1920px)"),
          y = (0, a.ac)("(min-width: 1440px)"),
          j = (0, a.ac)("(min-width: 1280px)"),
          w = (0, a.ac)("(min-width: 1024px)"),
          b = (0, a.ac)("(min-width: 768px)");
        return (0, l.jsx)(g.u, {
          appear: !0,
          show: r,
          as: c.Fragment,
          children: (0, l.jsxs)(h.V, {
            as: "div",
            className: "relative z-[2000]",
            onClose: function () {
              return f(!1);
            },
            children: [
              (0, l.jsx)(g.u.Child, {
                as: c.Fragment,
                enter: "ease-out duration-300",
                enterFrom: "opacity-0",
                enterTo: "opacity-100",
                leave: "ease-in duration-200",
                leaveFrom: "opacity-100",
                leaveTo: "opacity-0",
                children: (0, l.jsx)("div", {
                  className: (0, a.AK)("fixed inset-0 backdrop-blur-xl"),
                  children: (0, l.jsx)("div", {
                    className: "fixed inset-0 bg-white opacity-50",
                    style: { backgroundColor: s },
                  }),
                }),
              }),
              (0, l.jsx)("div", {
                className: "fixed inset-0 overflow-y-auto",
                children: (0, l.jsx)("div", {
                  className:
                    "flex w-full min-h-screen items-center justify-center text-center",
                  children: (0, l.jsx)(g.u.Child, {
                    as: c.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: (0, l.jsxs)(h.V.Panel, {
                      className:
                        "w-full transform overflow-hidden transition-all gallery-carousel",
                      children: [
                        (0, l.jsx)("div", {
                          className: "text-right p-6",
                          children: (0, l.jsx)("button", {
                            type: "button",
                            className:
                              "text-gray-900 focus:outline-none hover:text-gray-700 transition-all",
                            style: { color: (0, a.$O)(s) },
                            onClick: function () {
                              return f(!1);
                            },
                            children: (0, l.jsx)(p.Z, {
                              className: "h-6 w-6 lg:h-12 lg:w-12",
                              "aria-hidden": "true",
                            }),
                          }),
                        }),
                        (null === n || void 0 === n ? void 0 : n.length) > 0 &&
                          (0, l.jsx)(u(), {
                            slideIndex: t,
                            cellSpacing: w ? 40 : b ? 32 : 12,
                            cellAlign: "center",
                            slidesToShow: (function (e) {
                              return "1:1" === e
                                ? x
                                  ? 3
                                  : w
                                  ? 2.5
                                  : 1.25
                                : "2:3" === e
                                ? x
                                  ? 3.5
                                  : y
                                  ? 3
                                  : j
                                  ? 2.5
                                  : 3
                                : j
                                ? 1.5
                                : w
                                ? 1.25
                                : 1.15;
                            })(i),
                            wrapAround: !0,
                            transitionMode: "scroll",
                            defaultControlsConfig: {
                              nextButtonClassName: b ? "" : "hidden",
                              nextButtonStyle: { background: "transparent" },
                              nextButtonText: (0, l.jsx)(v.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                              prevButtonClassName: b ? "" : "hidden",
                              prevButtonStyle: { background: "transparent" },
                              prevButtonText: (0, l.jsx)(m.Z, {
                                className: "w-6 lg:w-12 h-6 lg:h-12",
                              }),
                            },
                            renderBottomCenterControls: function (e) {
                              return (0, l.jsx)("ul", {
                                className:
                                  "flex items-center gap-4 lg:gap-5 mt-4 md:mt-10 mb-6",
                                children: n.map(function (n, t) {
                                  return (0, l.jsx)(
                                    "li",
                                    {
                                      className: (0, a.AK)(
                                        "flex items-center justify-center rounded-full transition-all duration-300",
                                        e.currentSlide === t
                                          ? "w-4 h-4"
                                          : "w-2.5 h-2.5"
                                      ),
                                      style:
                                        e.currentSlide === t
                                          ? {
                                              backgroundColor: (0, a.mR)(
                                                (0, a.$O)(s),
                                                20
                                              ),
                                            }
                                          : {},
                                      children: (0, l.jsx)("button", {
                                        className: (0, a.AK)(
                                          "w-2.5 h-2.5 rounded-full transition-all"
                                        ),
                                        style: {
                                          backgroundColor: (0, a.$O)(s),
                                          opacity:
                                            e.currentSlide !== t
                                              ? "35%"
                                              : "100%",
                                        },
                                        onClick: function () {
                                          return e.goToSlide(t);
                                        },
                                      }),
                                    },
                                    "fullscreen-carousel-dots-".concat(t)
                                  );
                                }),
                              });
                            },
                            children: n.map(function (e, n) {
                              return (0, l.jsx)(
                                "div",
                                {
                                  className: (0, a.AK)(
                                    "relative overflow-hidden",
                                    (0, a.n3)(i),
                                    o
                                  ),
                                  children:
                                    (0, a.QW)(e) &&
                                    (0, l.jsx)(d(), {
                                      src: (0, a.QW)(e),
                                      layout: "fill",
                                      objectFit: "cover",
                                      alt: e.alt,
                                      onContextMenu: function (e) {
                                        e.preventDefault();
                                      },
                                      className: (0, a.AK)(
                                        "w-full h-full object-center object-cover"
                                      ),
                                    }),
                                },
                                "fullscreen-carousel-picture-"
                                  .concat(e._id, "-")
                                  .concat(n)
                              );
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var x = t(399),
        y = t(21123),
        j = t(6604),
        w = t(4433),
        b = t(60546);
      function N(e) {
        var n = e.id,
          t = e.website,
          r = e.block,
          s = e.previousBlock,
          g = null === r || void 0 === r ? void 0 : r.headline,
          h = null === r || void 0 === r ? void 0 : r.align,
          p = (null === r || void 0 === r ? void 0 : r.pictures) || [],
          N = null === r || void 0 === r ? void 0 : r.aspectRatio,
          F = null === r || void 0 === r ? void 0 : r.cornerRadius,
          C = null === r || void 0 === r ? void 0 : r.animation,
          A = null === t || void 0 === t ? void 0 : t.animation,
          k = null === r || void 0 === r ? void 0 : r.divider,
          K = null === r || void 0 === r ? void 0 : r.border,
          T = (0, c.useRef)(null),
          S = (0, c.useState)("#FFFFFF"),
          L = S[0],
          M = S[1],
          R = (0, c.useState)("#000000"),
          _ = R[0],
          B = R[1],
          Z = (0, c.useState)(!1),
          G = Z[0],
          W = Z[1],
          P = (0, c.useState)(null),
          H = P[0],
          O = P[1],
          z = (0, a.ac)("(min-width: 1920px)"),
          D = (0, a.ac)("(min-width: 1280px)"),
          E = (0, a.ac)("(min-width: 1024px)"),
          I = (0, a.ac)("(min-width: 768px)"),
          $ = (0, x.Z)(r).minHeight,
          U = function (e) {
            (null === r || void 0 === r ? void 0 : r.allowFullscreen) &&
              E &&
              (W(!0), O(e));
          },
          Q = function () {
            return (null === r || void 0 === r ? void 0 : r.allowFullscreen) &&
              E
              ? "hover:opacity-70 cursor-pointer transition-opacity"
              : "";
          };
        (null === r || void 0 === r ? void 0 : r.fullHeight) &&
          ((null === r || void 0 === r ? void 0 : r.spacing) ||
            (r.spacing = {}),
          (r.spacing = (0, o.Z)((0, i.Z)({}, r.spacing), {
            top: "none",
            bottom: "none",
          })));
        var V = function (e, n) {
          var i = (0, a.QW)(e);
          return i
            ? (0, l.jsx)(d(), {
                unoptimized: !0,
                src: i,
                layout: "fill",
                objectFit: "cover",
                alt: e.alt,
                onContextMenu: function (e) {
                  return e.preventDefault();
                },
                className: (0, a.AK)(
                  "w-full h-full object-center object-cover",
                  !n &&
                    (0, a.yW)(
                      F,
                      null === t || void 0 === t ? void 0 : t.cornerRadius
                    )
                ),
              })
            : (0, l.jsx)(l.Fragment, {});
        };
        return (0, l.jsxs)("section", {
          className: "relative",
          children: [
            (0, l.jsxs)("div", {
              ref: T,
              id: n,
              className: (0, a.AK)(
                "flex flex-none flex-shrink-0 relative",
                (0, a.A2)(
                  (null === r || void 0 === r ? void 0 : r.verticalAlign) ||
                    "center"
                )
              ),
              style: (0, i.Z)({ minHeight: $ }, (0, w.$h)(r)),
              children: [
                (0, l.jsx)(y.Z, {
                  block: r,
                  website: t,
                  onChange: function (e) {
                    var n, t;
                    M(
                      (null === e ||
                      void 0 === e ||
                      null === (n = e.overlay) ||
                      void 0 === n
                        ? void 0
                        : n.color1) || "#FFFFFF"
                    ),
                      B(
                        (0, a.$O)(
                          (null === e ||
                          void 0 === e ||
                          null === (t = e.overlay) ||
                          void 0 === t
                            ? void 0
                            : t.color1) || "#FFFFFF"
                        )
                      );
                  },
                }),
                (0, l.jsx)("div", {
                  className: (0, a.AK)(
                    "relative z-10",
                    "carousel" ===
                      (null === r || void 0 === r ? void 0 : r.style) ||
                      (null === r || void 0 === r ? void 0 : r.fullWidth)
                      ? "w-full"
                      : "container mx-auto",
                    (0, a.bG)(null === r || void 0 === r ? void 0 : r.spacing)
                  ),
                  children: (0, l.jsx)(j.c, {
                    settings: C,
                    globalSettings: A,
                    children: (0, l.jsxs)("div", {
                      children: [
                        (0, l.jsx)("div", {
                          className: (0, a.AK)(
                            ("carousel" ===
                              (null === r || void 0 === r ? void 0 : r.style) ||
                              (null === r || void 0 === r
                                ? void 0
                                : r.fullWidth)) &&
                              "container mx-auto"
                          ),
                          children:
                            g &&
                            (0, l.jsx)("h2", {
                              className: (0, a.AK)(
                                "heading-large mb-6",
                                "text-".concat(h)
                              ),
                              style: (0, i.Z)({ color: _ }, (0, a.j2)(t)),
                              children: g,
                            }),
                        }),
                        (0, l.jsx)("div", {
                          className: (0, a.AK)(
                            "carousel" ===
                              (null === r || void 0 === r ? void 0 : r.style) &&
                              "gallery-carousel",
                            "carousel" !==
                              (null === r || void 0 === r ? void 0 : r.style) &&
                              !(null === r || void 0 === r
                                ? void 0
                                : r.noGutters) &&
                              (null === r || void 0 === r
                                ? void 0
                                : r.fullWidth) &&
                              "md:px-6"
                          ),
                          children:
                            "carousel" ===
                            (null === r || void 0 === r ? void 0 : r.style)
                              ? (0, l.jsx)(l.Fragment, {
                                  children:
                                    (null === p || void 0 === p
                                      ? void 0
                                      : p.length) > 0 &&
                                    (0, l.jsx)(u(), {
                                      cellSpacing: E ? 40 : I ? 32 : 12,
                                      cellAlign: "center",
                                      slidesToShow: (function (e) {
                                        return "1:1" === e
                                          ? z
                                            ? 3
                                            : E
                                            ? 2.5
                                            : 1.25
                                          : "2:3" === e
                                          ? z
                                            ? 4
                                            : D
                                            ? 3.5
                                            : E
                                            ? 3
                                            : I
                                            ? 2.5
                                            : 1.5
                                          : "3:2" === e && z
                                          ? 1.75
                                          : D
                                          ? 1.5
                                          : E
                                          ? 1.25
                                          : 1.15;
                                      })(N),
                                      wrapAround: !0,
                                      transitionMode: "scroll",
                                      enableKeyboardControls: !0,
                                      keyCodeConfig: {
                                        previousSlide: [37],
                                        nextSlide: [39],
                                      },
                                      defaultControlsConfig: {
                                        nextButtonClassName: I ? "" : "hidden",
                                        nextButtonStyle: {
                                          background: "transparent",
                                        },
                                        nextButtonText: (0, l.jsx)(v.Z, {
                                          className: "w-6 lg:w-12 h-6 lg:h-12",
                                        }),
                                        prevButtonClassName: I ? "" : "hidden",
                                        prevButtonStyle: {
                                          background: "transparent",
                                        },
                                        prevButtonText: (0, l.jsx)(m.Z, {
                                          className: "w-6 lg:w-12 h-6 lg:h-12",
                                        }),
                                      },
                                      renderBottomCenterControls: function (e) {
                                        return (0, l.jsx)("ul", {
                                          className:
                                            "flex gap-4 lg:gap-5 mt-4 md:mt-10",
                                          children: p.map(function (n, t) {
                                            return (0, l.jsx)(
                                              "li",
                                              {
                                                children: (0, l.jsx)("button", {
                                                  className: (0, a.AK)(
                                                    "w-2.5 h-2.5 rounded-full transition-all",
                                                    e.currentSlide === t &&
                                                      "bg-gray-900 ring-4 ring-gray-200",
                                                    e.currentSlide > t &&
                                                      ("#111827" === _
                                                        ? "bg-gray-600"
                                                        : "bg-gray-200"),
                                                    e.currentSlide < t &&
                                                      ("#111827" === _
                                                        ? "bg-gray-900"
                                                        : "bg-gray-50")
                                                  ),
                                                  onClick: function () {
                                                    return e.goToSlide(t);
                                                  },
                                                }),
                                              },
                                              "carousel-dots-"
                                                .concat(r.idx, "-")
                                                .concat(t)
                                            );
                                          }),
                                        });
                                      },
                                      children: p.map(function (e, n) {
                                        return (0,
                                        l.jsx)("div", { className: (0, a.AK)("relative overflow-hidden cursor-auto", (0, a.n3)(N), (0, a.yW)(F, null === t || void 0 === t ? void 0 : t.cornerRadius)), children: V(e, !0) }, "carousel-picture-".concat(r.idx, "-").concat(e._id, "-").concat(n));
                                      }),
                                    }),
                                })
                              : (0, l.jsx)(l.Fragment, {
                                  children:
                                    (1 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsx)("div", {
                                        className: (0, a.AK)(
                                          !(null === r || void 0 === r
                                            ? void 0
                                            : r.fullWidth) && "max-w-3xl"
                                        ),
                                        children: (0, l.jsx)("div", {
                                          className: (0, a.AK)(
                                            "relative overflow-hidden",
                                            (0, a.n3)(N),
                                            Q()
                                          ),
                                          onClick: function () {
                                            return U(0);
                                          },
                                          children: V(p[0]),
                                        }),
                                      })) ||
                                    (2 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsx)("div", {
                                        className: (0, a.AK)(
                                          "grid grid-cols-1 md:grid-cols-2",
                                          !(null === r || void 0 === r
                                            ? void 0
                                            : r.noGutters) && "gap-6 md:gap-10"
                                        ),
                                        children: p.map(function (e, n) {
                                          return (0, l.jsx)(
                                            "div",
                                            {
                                              className: (0, a.AK)(
                                                "relative overflow-hidden",
                                                (0, a.n3)(N),
                                                Q()
                                              ),
                                              onClick: function () {
                                                return U(n);
                                              },
                                              children: V(e),
                                            },
                                            "gallery-picture-"
                                              .concat(r.idx, "-")
                                              .concat(e._id, "-")
                                              .concat(n)
                                          );
                                        }),
                                      })) ||
                                    ((3 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) ||
                                      6 ===
                                        (null === p || void 0 === p
                                          ? void 0
                                          : p.length) ||
                                      9 ===
                                        (null === p || void 0 === p
                                          ? void 0
                                          : p.length) ||
                                      12 ===
                                        (null === p || void 0 === p
                                          ? void 0
                                          : p.length)) &&
                                      (0, l.jsx)("div", {
                                        className: (0, a.AK)(
                                          "grid grid-cols-1 lg:grid-cols-3",
                                          !(null === r || void 0 === r
                                            ? void 0
                                            : r.noGutters) &&
                                            "gap-6 md:gap-10 mb-6 md:mb-10"
                                        ),
                                        children: p.map(function (e, n) {
                                          return (0, l.jsx)(
                                            "div",
                                            {
                                              className: (0, a.AK)(
                                                "relative overflow-hidden",
                                                (0, a.n3)(N),
                                                Q()
                                              ),
                                              onClick: function () {
                                                return U(n);
                                              },
                                              children: V(e),
                                            },
                                            "gallery-picture-"
                                              .concat(r.idx, "-")
                                              .concat(e._id, "-")
                                              .concat(n)
                                          );
                                        }),
                                      })) ||
                                    (4 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsx)("div", {
                                        className: (0, a.AK)(
                                          "grid grid-cols-1 md:grid-cols-2",
                                          !(null === r || void 0 === r
                                            ? void 0
                                            : r.noGutters) && "gap-6 md:gap-10"
                                        ),
                                        children: p.map(function (e, n) {
                                          return (0, l.jsx)(
                                            "div",
                                            {
                                              className: (0, a.AK)(
                                                "relative overflow-hidden",
                                                (0, a.n3)(N),
                                                Q()
                                              ),
                                              onClick: function () {
                                                return U(n);
                                              },
                                              children: V(e),
                                            },
                                            "gallery-picture-"
                                              .concat(r.idx, "-")
                                              .concat(e._id, "-")
                                              .concat(n)
                                          );
                                        }),
                                      })) ||
                                    (5 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: p
                                              .slice(0, 3)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: p
                                              .slice(3, 5)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                        ],
                                      })) ||
                                    (7 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: p
                                              .slice(0, 3)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: p
                                              .slice(3, 7)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                        ],
                                      })) ||
                                    (8 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: p
                                              .slice(0, 6)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: p
                                              .slice(6, 8)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                        ],
                                      })) ||
                                    (10 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: p
                                              .slice(0, 6)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: p
                                              .slice(6, 10)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                        ],
                                      })) ||
                                    (11 ===
                                      (null === p || void 0 === p
                                        ? void 0
                                        : p.length) &&
                                      (0, l.jsxs)(l.Fragment, {
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 lg:grid-cols-3",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10 mb-6 md:mb-10"
                                            ),
                                            children: p
                                              .slice(0, 9)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                          (0, l.jsx)("div", {
                                            className: (0, a.AK)(
                                              "grid grid-cols-1 md:grid-cols-2",
                                              !(null === r || void 0 === r
                                                ? void 0
                                                : r.noGutters) &&
                                                "gap-6 md:gap-10"
                                            ),
                                            children: p
                                              .slice(9, 11)
                                              .map(function (e, n) {
                                                return (0, l.jsx)(
                                                  "div",
                                                  {
                                                    className: (0, a.AK)(
                                                      "relative overflow-hidden",
                                                      (0, a.n3)(N),
                                                      Q()
                                                    ),
                                                    onClick: function () {
                                                      return U(n);
                                                    },
                                                    children: V(e),
                                                  },
                                                  "gallery-picture-"
                                                    .concat(r.idx, "-")
                                                    .concat(e._id, "-")
                                                    .concat(n)
                                                );
                                              }),
                                          }),
                                        ],
                                      })),
                                }),
                        }),
                      ],
                    }),
                  }),
                }),
                (null === r || void 0 === r ? void 0 : r.allowFullscreen) &&
                  (0, l.jsx)(f, {
                    website: t,
                    pictures: p,
                    selected: H,
                    aspectRatio: N,
                    cornerRadius: (0, a.yW)(
                      F,
                      null === t || void 0 === t ? void 0 : t.cornerRadius
                    ),
                    background: L,
                    open: G,
                    setOpen: W,
                  }),
                (0, l.jsx)(w.iz, {
                  previousDivider:
                    null === s || void 0 === s ? void 0 : s.divider,
                  dividerUniqueId: "".concat(n, "-").concat(k),
                  divider: k,
                  contentRef: T,
                }),
              ],
            }),
            K &&
              (0, l.jsx)(b.OC, { border: K, sectionDivider: k, contentRef: T }),
          ],
        });
      }
    },
    399: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(67294);
      function o(e) {
        var n,
          t,
          o = (0, i.useState)(0),
          l = o[0],
          a = o[1],
          c = (0, i.useState)([0, 0]),
          r = c[0],
          d = c[1];
        return (
          (0, i.useEffect)(function () {
            var e = function () {
              d([window.innerWidth, window.innerHeight]);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, i.useEffect)(
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
                      : l,
                    "px)"
                  )
              : "134px",
            headerHeight: l,
          }
        );
      }
    },
  },
]);
