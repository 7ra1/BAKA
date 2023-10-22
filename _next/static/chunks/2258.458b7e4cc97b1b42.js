"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2258],
  {
    6604: function (t, e, n) {
      n.d(e, {
        c: function () {
          return b;
        },
      });
      var o = n(828),
        i = n(85893),
        a = n(67294),
        r = n(26042),
        c = n(69396),
        l = n(11355),
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
        u = function (t) {
          var e,
            n = t.show,
            o = void 0 === n || n,
            u = t.appear,
            v = t.children,
            f = t.animation,
            p = void 0 === f ? "none" : f,
            h = t.duration,
            m = void 0 === h ? 300 : h,
            g = t.asChild,
            b = t.unmount,
            y = t.style,
            x = t.delay,
            w = null !== (e = d[p]) && void 0 !== e ? e : d.none,
            F = (0, c.Z)((0, r.Z)({}, w), {
              enter: ""
                .concat(w.enter, " ")
                .concat(s[m], " ")
                .concat(x ? "delay-".concat(x) : ""),
              leave: ""
                .concat(w.leave, " ")
                .concat(s[m], " ")
                .concat(x ? "delay-".concat(x) : ""),
            }),
            k = g ? l.u.Child : l.u;
          return (0, i.jsx)(
            k,
            (0, c.Z)(
              (0, r.Z)(
                {
                  show: g ? void 0 : o,
                  as: x ? "div" : a.Fragment,
                  appear: u,
                  unmount: b,
                  style: y,
                },
                F
              ),
              { children: v }
            )
          );
        },
        v = n(42708),
        f = "default",
        p = "medium",
        h = "none",
        m = "medium";
      var g = { slow: 750, medium: 500, fast: 250 },
        b = function (t) {
          var e = t.children,
            n = t.settings,
            r = t.globalSettings,
            c = t.unmount,
            l = void 0 !== c && c,
            s = t.delay,
            d = (function (t, e) {
              var n = t || {},
                o = n.type,
                i = void 0 === o ? f : o,
                a = n.speed,
                r = void 0 === a ? p : a;
              return (
                "default" === i &&
                  ((i = (null === e || void 0 === e ? void 0 : e.type) || h),
                  (r = (null === e || void 0 === e ? void 0 : e.speed) || m)),
                { type: i, speed: r }
              );
            })(n, r),
            b = d.type,
            y = d.speed,
            x = (0, a.useState)(!1),
            w = x[0],
            F = x[1],
            k = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            j = k[0],
            T = k[1];
          k[2];
          return (
            (0, a.useEffect)(
              function () {
                var t = null;
                return (
                  T &&
                    (t = setTimeout(function () {
                      return F(!0);
                    }, 400)),
                  function () {
                    t && clearTimeout(t);
                  }
                );
              },
              [T]
            ),
            "none" === b
              ? (0, i.jsx)(i.Fragment, { children: e })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    !w &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: j,
                      }),
                    (0, i.jsx)(u, {
                      show: w,
                      animation: b,
                      duration: g[y],
                      unmount: l,
                      disableLeave: !0,
                      delay: s,
                      children: e,
                    }),
                    !w &&
                      (0, i.jsx)("div", {
                        className: "invisible",
                        children: e,
                      }),
                  ],
                })
          );
        };
    },
    60546: function (t, e, n) {
      n.d(e, {
        OC: function () {
          return s;
        },
      });
      var o = n(85893),
        i = n(67294),
        a = n(62246),
        r = n(4433),
        c = [
          {
            id: "slantLeft",
            getPath: function (t, e) {
              return "M".concat(t, " 0L-0 ").concat(e);
            },
          },
          {
            id: "slantRight",
            getPath: function (t, e) {
              return "M0 0L".concat(t, " ").concat(e);
            },
          },
          {
            id: "pointUp",
            getPath: function (t, e) {
              return "M0 0"
                .concat(e, "L")
                .concat(t / 2, " 0L")
                .concat(t, " ")
                .concat(e, "L")
                .concat(1.5 * t, " 0V0");
            },
          },
          {
            id: "pointDown",
            getPath: function (t, e) {
              return "M0 0L"
                .concat(t / 2, " ")
                .concat(e, "L")
                .concat(t, " 0");
            },
          },
          {
            id: "curveUp",
            getPath: function (t, e) {
              return "M0 0 C"
                .concat(t / 2, " ")
                .concat(e, " ")
                .concat(t - t / 2, " ")
                .concat(e, " ")
                .concat(t, " 0");
            },
          },
          {
            id: "curveDown",
            getPath: function (t, e) {
              return "M0 "
                .concat(e, " C")
                .concat(t / 2, " 0 ")
                .concat(t - t / 2, " 0 ")
                .concat(t, " ")
                .concat(e);
            },
          },
          {
            id: "waveLeft",
            getPath: function (t, e) {
              return "M0 0C0 0 "
                .concat(0.2023 * t, " ")
                .concat(e, " ")
                .concat(0.3333 * t, " ")
                .concat(e, "C")
                .concat(0.4681 * t, " ")
                .concat(e, " ")
                .concat(0.5318 * t, " 0 ")
                .concat(0.6667 * t, " 0C")
                .concat(0.8015 * t, " 0 ")
                .concat(t, " ")
                .concat(e, " ")
                .concat(t, " ")
                .concat(e);
            },
          },
          {
            id: "waveRight",
            getPath: function (t, e) {
              return "M"
                .concat(t, " 0C")
                .concat(t, " 0 ")
                .concat(0.8 * t, " ")
                .concat(e, " ")
                .concat(0.666 * t, " ")
                .concat(e, "C")
                .concat(0.547 * t, " ")
                .concat(e, " ")
                .concat(0.483 * t, " 0 ")
                .concat(0.333 * t, " 0C")
                .concat(0.184 * t, " 0 -0.00012207 ")
                .concat(e, " -0.00012207 ")
                .concat(e);
            },
          },
          {
            id: "jaggedLeft",
            getPath: function (t, e) {
              return "M0 0L"
                .concat(t / 3, " ")
                .concat(e, "L")
                .concat(t / 1.5, " 0L")
                .concat(t, " ")
                .concat(e);
            },
          },
          {
            id: "jaggedRight",
            getPath: function (t, e) {
              return "M"
                .concat(t, " 0L")
                .concat(t / 1.5, " ")
                .concat(e, "L")
                .concat(t / 3, " 0L0 ")
                .concat(e);
            },
          },
          {
            id: "swoopLeft",
            getPath: function (t, e) {
              return "M0 "
                .concat(e, "C")
                .concat(t, " 0 ")
                .concat(2 * t, " 0 ")
                .concat(2 * t, " 0");
            },
          },
          {
            id: "swoopRight",
            getPath: function (t, e) {
              return "M"
                .concat(t, " ")
                .concat(e, "C")
                .concat(t / 2, " 0 0 0 0 0");
            },
          },
          {
            id: "none",
            getPath: function (t, e) {
              return "M0 ".concat(e, "H").concat(t);
            },
          },
        ],
        l = function (t) {
          var e = t.width,
            n = t.shape,
            i = t.strokeWidth,
            a = t.strokeColor,
            l = t.strokeType,
            s = c.find(function (t) {
              return t.id === (null !== n && void 0 !== n ? n : "none");
            }),
            d = Math.floor(e),
            u = "none" === s.id ? Math.floor(i) : Math.floor(d / r.c8),
            v = s.getPath(d, u);
          return (0, o.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: d,
            height: u,
            viewBox: "0 0 ".concat(d, " ").concat(u),
            children: (0, o.jsx)("path", {
              d: v,
              stroke: a,
              strokeWidth: i,
              strokeDasharray: "dashed" === l ? "40 20" : void 0,
            }),
          });
        },
        s = function (t) {
          var e = t.border,
            n = t.contentRef,
            r = t.sectionDivider,
            c = e || {},
            s = c.type,
            d = c.width,
            u = c.color,
            v = (0, i.useState)(0),
            f = v[0],
            p = v[1],
            h = (0, i.useCallback)(
              function () {
                var t;
                p(null !== (t = n.current.offsetWidth) && void 0 !== t ? t : 0);
              },
              [n]
            );
          return (
            (0, a.Z)(h, e ? n : null),
            e
              ? (0, o.jsx)(l, {
                  width: f,
                  shape: r,
                  strokeType: s,
                  strokeWidth: d,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    82258: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return f;
          },
        });
      var o = n(26042),
        i = n(85893),
        a = n(31996),
        r = n(52077),
        c = n(399),
        l = n(21123),
        s = n(67294),
        d = n(6604),
        u = n(4433),
        v = n(60546);
      function f(t) {
        var e = t.id,
          n = t.block,
          f = t.website,
          p = t.previousBlock,
          h = null === n || void 0 === n ? void 0 : n.headline,
          m = null === n || void 0 === n ? void 0 : n.content,
          g = null === n || void 0 === n ? void 0 : n.button,
          b = (null === n || void 0 === n ? void 0 : n.align) || "center",
          y = null === n || void 0 === n ? void 0 : n.animation,
          x = null === f || void 0 === f ? void 0 : f.animation,
          w = null === n || void 0 === n ? void 0 : n.divider,
          F = null === n || void 0 === n ? void 0 : n.border,
          k =
            1 === (null === n || void 0 === n ? void 0 : n.idx) &&
            (null === n || void 0 === n ? void 0 : n.combineWithHeader),
          j = (0, s.useState)("#FFFFFF"),
          T = j[0],
          C = j[1],
          L = (0, c.Z)(n),
          M = L.minHeight,
          R = L.headerHeight,
          P = (0, s.useRef)(null);
        return (0, i.jsxs)("section", {
          className: "relative",
          children: [
            (0, i.jsxs)("div", {
              ref: P,
              id: e,
              "data-text-color": T,
              className: (0, a.AK)(
                "flex-shrink-0 flex relative",
                (function (t) {
                  var e = {
                    top: "items-start",
                    center: "items-center",
                    bottom: "items-end",
                  };
                  return e[t] || e.center;
                })(null === n || void 0 === n ? void 0 : n.verticalAlign)
              ),
              style: (0, o.Z)(
                { minHeight: M },
                (null === n || void 0 === n ? void 0 : n.combineWithHeader)
                  ? {
                      marginTop: "-".concat(R, "px"),
                      paddingTop: "".concat(R, "px"),
                    }
                  : {},
                (0, u.$h)(n)
              ),
              "data-combine-with-header": k,
              children: [
                (0, i.jsx)(l.Z, { block: n, website: f, setTextColor: C }),
                (0, i.jsx)("div", {
                  className: (0, a.AK)(
                    "relative z-10 container mx-auto",
                    (function (t) {
                      var e,
                        n,
                        o = {
                          none: { top: "pt-0", bottom: "pb-0" },
                          small: {
                            top: "pt-8 lg:pt-32",
                            bottom: "pb-8 lg:pb-32",
                          },
                          medium: {
                            top: "pt-12 lg:pt-40",
                            bottom: "pb-12 lg:pb-40",
                          },
                          large: {
                            top: "pt-20 lg:pt-48",
                            bottom: "pb-20 lg:pb-48",
                          },
                          default: {
                            top: "pt-12 lg:pt-32 xl:pt-40",
                            bottom: "pb-12 lg:pb-32 xl:pb-40",
                          },
                        },
                        i =
                          (null ===
                            (e =
                              o[null === t || void 0 === t ? void 0 : t.top]) ||
                          void 0 === e
                            ? void 0
                            : e.top) || o.default.top,
                        a =
                          (null ===
                            (n =
                              o[
                                null === t || void 0 === t ? void 0 : t.bottom
                              ]) || void 0 === n
                            ? void 0
                            : n.bottom) || o.default.bottom;
                      return "".concat(i, " ").concat(a);
                    })(null === n || void 0 === n ? void 0 : n.spacing)
                  ),
                  children: (0, i.jsx)(d.c, {
                    settings: y,
                    globalSettings: x,
                    children: (0, i.jsxs)("div", {
                      className: (0, a.AK)(
                        "max-w-3xl",
                        "text-".concat(b),
                        "left" === b
                          ? "ml-0 mr-auto"
                          : "right" === b
                          ? "ml-auto mr-0"
                          : "mx-auto"
                      ),
                      children: [
                        h &&
                          (0, i.jsx)("h2", {
                            className: (0, a.AK)(
                              "heading-xlarge mb-6 break-word",
                              "text-".concat(b)
                            ),
                            style: (0, o.Z)({ color: T }, (0, a.j2)(f)),
                            children: h,
                          }),
                        m &&
                          (0, i.jsx)("p", {
                            className: (0, a.AK)("body-large"),
                            style: (0, o.Z)({ color: T }, (0, a.SV)(f)),
                            children: m,
                          }),
                        g &&
                          (0, i.jsx)(r.Z, {
                            button: g,
                            block: n,
                            website: f,
                            className: (0, a.AK)(
                              "xl w-full md:w-max",
                              h || m ? "mt-6 lg:mt-8" : ""
                            ),
                          }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)(u.iz, {
                  previousDivider:
                    null === p || void 0 === p ? void 0 : p.divider,
                  dividerUniqueId: "".concat(e, "-").concat(w),
                  divider: w,
                  contentRef: P,
                  combinedWithHeaderOffset: k ? R : 0,
                }),
              ],
            }),
            F &&
              (0, i.jsx)(v.OC, { border: F, sectionDivider: w, contentRef: P }),
          ],
        });
      }
    },
    399: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var o = n(67294);
      function i(t) {
        var e,
          n,
          i = (0, o.useState)(0),
          a = i[0],
          r = i[1],
          c = (0, o.useState)([0, 0]),
          l = c[0],
          s = c[1];
        return (
          (0, o.useEffect)(function () {
            var t = function () {
              s([window.innerWidth, window.innerHeight]);
            };
            return (
              window.addEventListener("resize", t),
              t(),
              function () {
                return window.removeEventListener("resize", t);
              }
            );
          }, []),
          (0, o.useEffect)(
            function () {
              var e;
              t &&
                r(
                  1 === t.idx
                    ? (null ===
                        (e =
                          null === document || void 0 === document
                            ? void 0
                            : document.getElementById("website-header")) ||
                      void 0 === e
                        ? void 0
                        : e.offsetHeight) || 80
                    : 0
                );
            },
            [t, l]
          ),
          {
            minHeight: (
              null === t ||
              void 0 === t ||
              null === (e = t.spacing) ||
              void 0 === e
                ? void 0
                : e.minHeight
            )
              ? "calc("
                  .concat(
                    "min-h-screen" ===
                      (null === t ||
                      void 0 === t ||
                      null === (n = t.spacing) ||
                      void 0 === n
                        ? void 0
                        : n.minHeight)
                      ? "100vh"
                      : "134px",
                    " - "
                  )
                  .concat(
                    (null === t || void 0 === t ? void 0 : t.combineWithHeader)
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
    42708: function (t, e, n) {
      n.d(e, {
        YD: function () {
          return v;
        },
      });
      var o = n(67294),
        i = Object.defineProperty,
        a = (t, e, n) => (
          ((t, e, n) => {
            e in t
              ? i(t, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: n,
                })
              : (t[e] = n);
          })(t, "symbol" !== typeof e ? e + "" : e, n),
          n
        ),
        r = new Map(),
        c = new WeakMap(),
        l = 0,
        s = void 0;
      function d(t) {
        return Object.keys(t)
          .sort()
          .filter((e) => void 0 !== t[e])
          .map((e) => {
            return `${e}_${
              "root" === e
                ? ((n = t.root),
                  n
                    ? (c.has(n) || ((l += 1), c.set(n, l.toString())), c.get(n))
                    : "0")
                : t[e]
            }`;
            var n;
          })
          .toString();
      }
      function u(t, e, n = {}, o = s) {
        if (
          "undefined" === typeof window.IntersectionObserver &&
          void 0 !== o
        ) {
          const i = t.getBoundingClientRect();
          return (
            e(o, {
              isIntersecting: o,
              target: t,
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
          elements: c,
        } = (function (t) {
          let e = d(t),
            n = r.get(e);
          if (!n) {
            const o = new Map();
            let i;
            const a = new IntersectionObserver((e) => {
              e.forEach((e) => {
                var n;
                const a =
                  e.isIntersecting && i.some((t) => e.intersectionRatio >= t);
                t.trackVisibility &&
                  "undefined" === typeof e.isVisible &&
                  (e.isVisible = a),
                  null == (n = o.get(e.target)) ||
                    n.forEach((t) => {
                      t(a, e);
                    });
              });
            }, t);
            (i =
              a.thresholds ||
              (Array.isArray(t.threshold) ? t.threshold : [t.threshold || 0])),
              (n = { id: e, observer: a, elements: o }),
              r.set(e, n);
          }
          return n;
        })(n);
        let l = c.get(t) || [];
        return (
          c.has(t) || c.set(t, l),
          l.push(e),
          a.observe(t),
          function () {
            l.splice(l.indexOf(e), 1),
              0 === l.length && (c.delete(t), a.unobserve(t)),
              0 === c.size && (a.disconnect(), r.delete(i));
          }
        );
      }
      o.Component;
      function v({
        threshold: t,
        delay: e,
        trackVisibility: n,
        rootMargin: i,
        root: a,
        triggerOnce: r,
        skip: c,
        initialInView: l,
        fallbackInView: s,
        onChange: d,
      } = {}) {
        var v;
        const [f, p] = o.useState(null),
          h = o.useRef(),
          [m, g] = o.useState({ inView: !!l, entry: void 0 });
        (h.current = d),
          o.useEffect(() => {
            if (c || !f) return;
            let o;
            return (
              (o = u(
                f,
                (t, e) => {
                  g({ inView: t, entry: e }),
                    h.current && h.current(t, e),
                    e.isIntersecting && r && o && (o(), (o = void 0));
                },
                {
                  root: a,
                  rootMargin: i,
                  threshold: t,
                  trackVisibility: n,
                  delay: e,
                },
                s
              )),
              () => {
                o && o();
              }
            );
          }, [Array.isArray(t) ? t.toString() : t, f, a, i, r, c, n, s, e]);
        const b = null == (v = m.entry) ? void 0 : v.target,
          y = o.useRef();
        f ||
          !b ||
          r ||
          c ||
          y.current === b ||
          ((y.current = b), g({ inView: !!l, entry: void 0 }));
        const x = [p, m.inView, m.entry];
        return (x.ref = x[0]), (x.inView = x[1]), (x.entry = x[2]), x;
      }
    },
  },
]);
