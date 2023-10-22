"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6383],
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
        c = n(26042),
        r = n(69396),
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
        u = function (e) {
          var t,
            n = e.show,
            o = void 0 === n || n,
            u = e.appear,
            v = e.children,
            f = e.animation,
            h = void 0 === f ? "none" : f,
            m = e.duration,
            g = void 0 === m ? 300 : m,
            p = e.asChild,
            y = e.unmount,
            x = e.style,
            w = e.delay,
            b = null !== (t = d[h]) && void 0 !== t ? t : d.none,
            j = (0, r.Z)((0, c.Z)({}, b), {
              enter: ""
                .concat(b.enter, " ")
                .concat(s[g], " ")
                .concat(w ? "delay-".concat(w) : ""),
              leave: ""
                .concat(b.leave, " ")
                .concat(s[g], " ")
                .concat(w ? "delay-".concat(w) : ""),
            }),
            F = p ? l.u.Child : l.u;
          return (0, i.jsx)(
            F,
            (0, r.Z)(
              (0, c.Z)(
                {
                  show: p ? void 0 : o,
                  as: w ? "div" : a.Fragment,
                  appear: u,
                  unmount: y,
                  style: x,
                },
                j
              ),
              { children: v }
            )
          );
        },
        v = n(42708),
        f = "default",
        h = "medium",
        m = "none",
        g = "medium";
      var p = { slow: 750, medium: 500, fast: 250 },
        y = function (e) {
          var t = e.children,
            n = e.settings,
            c = e.globalSettings,
            r = e.unmount,
            l = void 0 !== r && r,
            s = e.delay,
            d = (function (e, t) {
              var n = e || {},
                o = n.type,
                i = void 0 === o ? f : o,
                a = n.speed,
                c = void 0 === a ? h : a;
              return (
                "default" === i &&
                  ((i = (null === t || void 0 === t ? void 0 : t.type) || m),
                  (c = (null === t || void 0 === t ? void 0 : t.speed) || g)),
                { type: i, speed: c }
              );
            })(n, c),
            y = d.type,
            x = d.speed,
            w = (0, a.useState)(!1),
            b = w[0],
            j = w[1],
            F = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            k = F[0],
            C = F[1];
          F[2];
          return (
            (0, a.useEffect)(
              function () {
                var e = null;
                return (
                  C &&
                    (e = setTimeout(function () {
                      return j(!0);
                    }, 400)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [C]
            ),
            "none" === y
              ? (0, i.jsx)(i.Fragment, { children: t })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    !b &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: k,
                      }),
                    (0, i.jsx)(u, {
                      show: b,
                      animation: y,
                      duration: p[x],
                      unmount: l,
                      disableLeave: !0,
                      delay: s,
                      children: t,
                    }),
                    !b &&
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
        c = n(4433),
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
        l = function (e) {
          var t = e.width,
            n = e.shape,
            i = e.strokeWidth,
            a = e.strokeColor,
            l = e.strokeType,
            s = r.find(function (e) {
              return e.id === (null !== n && void 0 !== n ? n : "none");
            }),
            d = Math.floor(t),
            u = "none" === s.id ? Math.floor(i) : Math.floor(d / c.c8),
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
        s = function (e) {
          var t = e.border,
            n = e.contentRef,
            c = e.sectionDivider,
            r = t || {},
            s = r.type,
            d = r.width,
            u = r.color,
            v = (0, i.useState)(0),
            f = v[0],
            h = v[1],
            m = (0, i.useCallback)(
              function () {
                var e;
                h(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [n]
            );
          return (
            (0, a.Z)(m, t ? n : null),
            t
              ? (0, o.jsx)(l, {
                  width: f,
                  shape: c,
                  strokeType: s,
                  strokeWidth: d,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    76383: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return m;
          },
        });
      var o = n(26042),
        i = n(85893),
        a = n(31996),
        c = n(29260),
        r = n.n(c),
        l = n(52077),
        s = n(399),
        d = n(67294),
        u = n(21123),
        v = n(6604),
        f = n(4433),
        h = n(60546);
      function m(e) {
        var t = e.id,
          n = e.block,
          c = e.website,
          m = e.previousBlock,
          g = null === n || void 0 === n ? void 0 : n.content,
          p = null === n || void 0 === n ? void 0 : n.align,
          y = null === n || void 0 === n ? void 0 : n.image,
          x = null === n || void 0 === n ? void 0 : n.button,
          w = null === n || void 0 === n ? void 0 : n.animation,
          b = null === c || void 0 === c ? void 0 : c.animation,
          j = null === n || void 0 === n ? void 0 : n.divider,
          F = null === n || void 0 === n ? void 0 : n.border,
          k = (0, d.useRef)(null),
          C = (0, d.useState)("#FFFFFF"),
          T = C[0],
          M = C[1],
          L = (0, s.Z)(n).minHeight;
        return (0, i.jsxs)("section", {
          className: "relative",
          children: [
            (0, i.jsxs)("div", {
              ref: k,
              id: t,
              className: (0, a.AK)(
                "flex flex-none flex-shrink-0 relative",
                (0, a.A2)(null === n || void 0 === n ? void 0 : n.verticalAlign)
              ),
              style: (0, o.Z)({ minHeight: L }, (0, f.$h)(n)),
              children: [
                (0, i.jsx)(u.Z, { block: n, website: c, setTextColor: M }),
                (0, i.jsx)("div", {
                  className: (0, a.AK)(
                    "relative z-10 container mx-auto",
                    (0, a.bG)(null === n || void 0 === n ? void 0 : n.spacing)
                  ),
                  children: (0, i.jsx)(v.c, {
                    settings: w,
                    globalSettings: b,
                    children: (0, i.jsxs)("div", {
                      className: (0, a.AK)(
                        "flex flex-col lg:flex-row w-full gap-10 lg:gap-20",
                        "top" === p
                          ? "items-start"
                          : "bottom" === p
                          ? "items-end"
                          : "items-center",
                        "left" ===
                          (null === y || void 0 === y ? void 0 : y.align) &&
                          "lg:!flex-row-reverse"
                      ),
                      children: [
                        (0, i.jsxs)("div", {
                          className: (0, a.AK)(
                            "flex-1 flex flex-col items-center lg:items-start"
                          ),
                          children: [
                            (0, i.jsx)("div", {
                              className: "rich-text-block",
                              style: { color: T },
                              dangerouslySetInnerHTML: { __html: g },
                            }),
                            x &&
                              (0, i.jsx)(l.Z, {
                                button: x,
                                block: n,
                                website: c,
                                className: "lg mt-6 lg:mt-8 w-full md:w-max",
                              }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: (0, a.AK)(
                            "flex-1 flex w-full justify-center lg:justify-start",
                            "left" ===
                              (null === y || void 0 === y ? void 0 : y.align) &&
                              "lg:!justify-end"
                          ),
                          children:
                            (null === y || void 0 === y ? void 0 : y.media) &&
                            (0, i.jsx)("div", {
                              className: (0, a.AK)(
                                "flex-shrink-0 relative w-full mx-auto",
                                (0, a.n3)(y.aspectRatio)
                              ),
                              children:
                                (0, a.QW)(
                                  null === y || void 0 === y ? void 0 : y.media
                                ) &&
                                (0, i.jsx)(r(), {
                                  onContextMenu: function (e) {
                                    e.preventDefault();
                                  },
                                  src: (0, a.QW)(
                                    null === y || void 0 === y
                                      ? void 0
                                      : y.media
                                  ),
                                  objectFit:
                                    (null === y || void 0 === y
                                      ? void 0
                                      : y.imageFit) || "cover",
                                  objectPosition: ""
                                    .concat(
                                      (null === y || void 0 === y
                                        ? void 0
                                        : y.imagePositionX) || "center",
                                      " "
                                    )
                                    .concat(
                                      (null === y || void 0 === y
                                        ? void 0
                                        : y.imagePositionY) || "center"
                                    ),
                                  layout: "fill",
                                  alt:
                                    (null === c || void 0 === c
                                      ? void 0
                                      : c.headline) ||
                                    "We provide high quality services",
                                  className: (0, a.yW)(
                                    null === y || void 0 === y
                                      ? void 0
                                      : y.cornerRadius,
                                    null === c || void 0 === c
                                      ? void 0
                                      : c.cornerRadius
                                  ),
                                }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
                (0, i.jsx)(f.iz, {
                  previousDivider:
                    null === m || void 0 === m ? void 0 : m.divider,
                  dividerUniqueId: "".concat(t, "-").concat(j),
                  divider: j,
                  contentRef: k,
                }),
              ],
            }),
            F &&
              (0, i.jsx)(h.OC, { border: F, sectionDivider: j, contentRef: k }),
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
          c = i[1],
          r = (0, o.useState)([0, 0]),
          l = r[0],
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
                c(
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
            [e, l]
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
        c = new Map(),
        r = new WeakMap(),
        l = 0,
        s = void 0;
      function d(e) {
        return Object.keys(e)
          .sort()
          .filter((t) => void 0 !== e[t])
          .map((t) => {
            return `${t}_${
              "root" === t
                ? ((n = e.root),
                  n
                    ? (r.has(n) || ((l += 1), r.set(n, l.toString())), r.get(n))
                    : "0")
                : e[t]
            }`;
            var n;
          })
          .toString();
      }
      function u(e, t, n = {}, o = s) {
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
          let t = d(e),
            n = c.get(t);
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
              c.set(t, n);
          }
          return n;
        })(n);
        let l = r.get(e) || [];
        return (
          r.has(e) || r.set(e, l),
          l.push(t),
          a.observe(e),
          function () {
            l.splice(l.indexOf(t), 1),
              0 === l.length && (r.delete(e), a.unobserve(e)),
              0 === r.size && (a.disconnect(), c.delete(i));
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
        triggerOnce: c,
        skip: r,
        initialInView: l,
        fallbackInView: s,
        onChange: d,
      } = {}) {
        var v;
        const [f, h] = o.useState(null),
          m = o.useRef(),
          [g, p] = o.useState({ inView: !!l, entry: void 0 });
        (m.current = d),
          o.useEffect(() => {
            if (r || !f) return;
            let o;
            return (
              (o = u(
                f,
                (e, t) => {
                  p({ inView: e, entry: t }),
                    m.current && m.current(e, t),
                    t.isIntersecting && c && o && (o(), (o = void 0));
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
          }, [Array.isArray(e) ? e.toString() : e, f, a, i, c, r, n, s, t]);
        const y = null == (v = g.entry) ? void 0 : v.target,
          x = o.useRef();
        f ||
          !y ||
          c ||
          r ||
          x.current === y ||
          ((x.current = y), p({ inView: !!l, entry: void 0 }));
        const w = [h, g.inView, g.entry];
        return (w.ref = w[0]), (w.inView = w[1]), (w.entry = w[2]), w;
      }
    },
  },
]);
