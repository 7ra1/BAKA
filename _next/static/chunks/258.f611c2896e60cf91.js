"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [258],
  {
    6604: function (e, t, n) {
      n.d(t, {
        c: function () {
          return x;
        },
      });
      var o = n(828),
        i = n(85893),
        a = n(67294),
        l = n(26042),
        c = n(69396),
        r = n(11355),
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
            m = e.animation,
            f = void 0 === m ? "none" : m,
            h = e.duration,
            g = void 0 === h ? 300 : h,
            p = e.asChild,
            x = e.unmount,
            y = e.style,
            w = e.delay,
            j = null !== (t = d[f]) && void 0 !== t ? t : d.none,
            b = (0, c.Z)((0, l.Z)({}, j), {
              enter: ""
                .concat(j.enter, " ")
                .concat(s[g], " ")
                .concat(w ? "delay-".concat(w) : ""),
              leave: ""
                .concat(j.leave, " ")
                .concat(s[g], " ")
                .concat(w ? "delay-".concat(w) : ""),
            }),
            F = p ? r.u.Child : r.u;
          return (0, i.jsx)(
            F,
            (0, c.Z)(
              (0, l.Z)(
                {
                  show: p ? void 0 : o,
                  as: w ? "div" : a.Fragment,
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
        v = n(42708),
        m = "default",
        f = "medium",
        h = "none",
        g = "medium";
      var p = { slow: 750, medium: 500, fast: 250 },
        x = function (e) {
          var t = e.children,
            n = e.settings,
            l = e.globalSettings,
            c = e.unmount,
            r = void 0 !== c && c,
            s = e.delay,
            d = (function (e, t) {
              var n = e || {},
                o = n.type,
                i = void 0 === o ? m : o,
                a = n.speed,
                l = void 0 === a ? f : a;
              return (
                "default" === i &&
                  ((i = (null === t || void 0 === t ? void 0 : t.type) || h),
                  (l = (null === t || void 0 === t ? void 0 : t.speed) || g)),
                { type: i, speed: l }
              );
            })(n, l),
            x = d.type,
            y = d.speed,
            w = (0, a.useState)(!1),
            j = w[0],
            b = w[1],
            F = (0, o.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            C = F[0],
            T = F[1];
          F[2];
          return (
            (0, a.useEffect)(
              function () {
                var e = null;
                return (
                  T &&
                    (e = setTimeout(function () {
                      return b(!0);
                    }, 400)),
                  function () {
                    e && clearTimeout(e);
                  }
                );
              },
              [T]
            ),
            "none" === x
              ? (0, i.jsx)(i.Fragment, { children: t })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    !j &&
                      (0, i.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: C,
                      }),
                    (0, i.jsx)(u, {
                      show: j,
                      animation: x,
                      duration: p[y],
                      unmount: r,
                      disableLeave: !0,
                      delay: s,
                      children: t,
                    }),
                    !j &&
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
        c = [
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
        r = function (e) {
          var t = e.width,
            n = e.shape,
            i = e.strokeWidth,
            a = e.strokeColor,
            r = e.strokeType,
            s = c.find(function (e) {
              return e.id === (null !== n && void 0 !== n ? n : "none");
            }),
            d = Math.floor(t),
            u = "none" === s.id ? Math.floor(i) : Math.floor(d / l.c8),
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
              strokeDasharray: "dashed" === r ? "40 20" : void 0,
            }),
          });
        },
        s = function (e) {
          var t = e.border,
            n = e.contentRef,
            l = e.sectionDivider,
            c = t || {},
            s = c.type,
            d = c.width,
            u = c.color,
            v = (0, i.useState)(0),
            m = v[0],
            f = v[1],
            h = (0, i.useCallback)(
              function () {
                var e;
                f(null !== (e = n.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [n]
            );
          return (
            (0, a.Z)(h, t ? n : null),
            t
              ? (0, o.jsx)(r, {
                  width: m,
                  shape: l,
                  strokeType: s,
                  strokeWidth: d,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    10258: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        });
      var o = n(26042),
        i = n(85893),
        a = n(31996),
        l = n(33752),
        c = n.n(l),
        r = n(40944),
        s = n(29260),
        d = n.n(s),
        u = n(399),
        v = n(21123),
        m = n(67294),
        f = n(6604),
        h = n(4433),
        g = n(60546);
      function p(e) {
        var t,
          n,
          l,
          s,
          p,
          x,
          y,
          w,
          j,
          b,
          F,
          C = e.id,
          T = e.website,
          k = e.block,
          L = e.previousBlock;
        Array.isArray(k.items) ||
          (k.items = [{ content: k.content, by: k.by }]);
        var N = null === k || void 0 === k ? void 0 : k.align,
          M = null === k || void 0 === k ? void 0 : k.animation,
          A = null === T || void 0 === T ? void 0 : T.animation,
          P = null === k || void 0 === k ? void 0 : k.divider,
          S = null === k || void 0 === k ? void 0 : k.border,
          Z = (0, m.useRef)(null),
          H = (0, m.useState)("#FFFFFF"),
          K = H[0],
          R = H[1],
          W = (0, u.Z)(k).minHeight;
        return (0, i.jsxs)("section", {
          className: "relative",
          children: [
            (0, i.jsxs)("div", {
              ref: Z,
              id: C,
              className: (0, a.AK)(
                "relative flex flex-none flex-shrink-0",
                (0, a.A2)(
                  (null === k || void 0 === k ? void 0 : k.verticalAlign) ||
                    "center"
                )
              ),
              style: (0, o.Z)({ minHeight: W }, (0, h.$h)(k)),
              children: [
                (0, i.jsx)(v.Z, { block: k, website: T, setTextColor: R }),
                (0, i.jsx)("div", {
                  className: (0, a.AK)(
                    "relative z-10 container mx-auto testimonials-carousel",
                    (0, a.bG)(null === k || void 0 === k ? void 0 : k.spacing)
                  ),
                  children: (0, i.jsx)(f.c, {
                    settings: M,
                    globalSettings: A,
                    children: (0, i.jsx)("div", {
                      children:
                        (null === k ||
                        void 0 === k ||
                        null === (t = k.items) ||
                        void 0 === t
                          ? void 0
                          : t.length) > 1
                          ? (0, i.jsx)(c(), {
                              cellAlign: "center",
                              slidesToShow: 1,
                              autoplay: !0,
                              pauseOnHover: !0,
                              wrapAround: !0,
                              transitionMode: "scroll",
                              defaultControlsConfig: {
                                nextButtonStyle: { background: "transparent" },
                                nextButtonText: (0, i.jsx)(r.Z, {
                                  icon: "ChevronRightIcon",
                                  className: (0, a.AK)(
                                    "w-6 lg:w-12 h-6 lg:h-12 -mr-4 md:mr-0",
                                    "#111827" === K
                                      ? "text-gray-900"
                                      : "text-white"
                                  ),
                                }),
                                prevButtonStyle: { background: "transparent" },
                                prevButtonText: (0, i.jsx)(r.Z, {
                                  icon: "ChevronLeftIcon",
                                  className: (0, a.AK)(
                                    "w-6 lg:w-12 h-6 lg:h-12 -ml-4 md:ml-0",
                                    "#111827" === K
                                      ? "text-gray-900"
                                      : "text-white"
                                  ),
                                }),
                              },
                              renderBottomCenterControls: function (e) {
                                var t;
                                return (0, i.jsx)("ul", {
                                  className: (0, a.AK)(
                                    "flex gap-4 lg:gap-5 w-full",
                                    "right" === N
                                      ? "justify-end"
                                      : "left" === N
                                      ? "justify-start"
                                      : "justify-center"
                                  ),
                                  children:
                                    null === k ||
                                    void 0 === k ||
                                    null === (t = k.items) ||
                                    void 0 === t
                                      ? void 0
                                      : t.map(function (t, n) {
                                          return (0, i.jsx)(
                                            "li",
                                            {
                                              children: (0, i.jsx)("button", {
                                                className: (0, a.AK)(
                                                  "w-2.5 h-2.5 rounded-full transition-all",
                                                  e.currentSlide === n
                                                    ? "bg-gray-900 ring-4 ring-gray-200"
                                                    : "",
                                                  e.currentSlide > n
                                                    ? "bg-gray-900"
                                                    : "",
                                                  e.currentSlide < n
                                                    ? "bg-gray-400"
                                                    : ""
                                                ),
                                                onClick: function () {
                                                  return e.goToSlide(n);
                                                },
                                              }),
                                            },
                                            n
                                          );
                                        }),
                                });
                              },
                              children:
                                null === k ||
                                void 0 === k ||
                                null === (n = k.items) ||
                                void 0 === n
                                  ? void 0
                                  : n.map(function (e, t) {
                                      var n, l;
                                      return (0, i.jsx)(
                                        "div",
                                        {
                                          className: (0, a.AK)(
                                            "px-8 md:px-28 my-auto h-full flex"
                                          ),
                                          children: (0, i.jsxs)("div", {
                                            className: (0, a.AK)(
                                              "flex flex-col gap-4 justify-center lg:max-w-5xl break-word",
                                              "text-".concat(N),
                                              "".concat(
                                                "left" === N
                                                  ? "ml-0 mr-auto items-start"
                                                  : "right" === N
                                                  ? "ml-auto mr-0 items-end"
                                                  : "mx-auto items-center"
                                              )
                                            ),
                                            children: [
                                              (null === (n = e.image) ||
                                              void 0 === n
                                                ? void 0
                                                : n.url) &&
                                                (0, i.jsx)("div", {
                                                  className: (0, a.AK)(
                                                    "relative w-24 h-24 rounded-full overflow-hidden"
                                                  ),
                                                  children:
                                                    (0, a.QW)(
                                                      null === e || void 0 === e
                                                        ? void 0
                                                        : e.image
                                                    ) &&
                                                    (0, i.jsx)(d(), {
                                                      onContextMenu: function (
                                                        e
                                                      ) {
                                                        e.preventDefault();
                                                      },
                                                      src: (0, a.QW)(
                                                        null === e ||
                                                          void 0 === e
                                                          ? void 0
                                                          : e.image
                                                      ),
                                                      alt:
                                                        null === e ||
                                                        void 0 === e ||
                                                        null ===
                                                          (l = e.image) ||
                                                        void 0 === l
                                                          ? void 0
                                                          : l.author,
                                                      layout: "fill",
                                                      objectFit: "cover",
                                                    }),
                                                }),
                                              e.content &&
                                                (0, i.jsx)("h3", {
                                                  className: "heading-medium",
                                                  style: (0, o.Z)(
                                                    { color: K },
                                                    (0, a.j2)(T)
                                                  ),
                                                  children: e.content,
                                                }),
                                              e.by &&
                                                (0, i.jsx)("p", {
                                                  className: "body-large",
                                                  style: { color: K },
                                                  children: e.by,
                                                }),
                                            ],
                                          }),
                                        },
                                        "testimonial-item-".concat(t)
                                      );
                                    }),
                            })
                          : (0, i.jsx)("div", {
                              className: "flex h-full my-auto",
                              children: (0, i.jsxs)("div", {
                                className: (0, a.AK)(
                                  "max-w-5xl flex flex-col gap-4 justify-center",
                                  "text-".concat(N),
                                  "".concat(
                                    "left" === N
                                      ? "ml-0 mr-auto items-start"
                                      : "right" === N
                                      ? "ml-auto mr-0 items-end"
                                      : "mx-auto items-center"
                                  )
                                ),
                                children: [
                                  (null ===
                                    (l =
                                      null === k || void 0 === k
                                        ? void 0
                                        : k.items[0]) || void 0 === l
                                    ? void 0
                                    : l.image) &&
                                    (0, i.jsx)("div", {
                                      className: (0, a.AK)(
                                        "relative w-24 h-24 rounded-full overflow-hidden"
                                      ),
                                      children:
                                        (0, a.QW)(
                                          null ===
                                            (s =
                                              null === k || void 0 === k
                                                ? void 0
                                                : k.items[0]) || void 0 === s
                                            ? void 0
                                            : s.image
                                        ) &&
                                        (0, i.jsx)(d(), {
                                          onContextMenu: function (e) {
                                            e.preventDefault();
                                          },
                                          src: (0, a.QW)(
                                            null ===
                                              (p =
                                                null === k || void 0 === k
                                                  ? void 0
                                                  : k.items[0]) || void 0 === p
                                              ? void 0
                                              : p.image
                                          ),
                                          alt:
                                            null ===
                                              (x =
                                                null === k || void 0 === k
                                                  ? void 0
                                                  : k.items[0]) ||
                                            void 0 === x ||
                                            null === (y = x.image) ||
                                            void 0 === y
                                              ? void 0
                                              : y.author,
                                          layout: "fill",
                                          objectFit: "cover",
                                        }),
                                    }),
                                  (null ===
                                    (w =
                                      null === k || void 0 === k
                                        ? void 0
                                        : k.items[0]) || void 0 === w
                                    ? void 0
                                    : w.content) &&
                                    (0, i.jsx)("h3", {
                                      className: "heading-medium",
                                      style: (0, o.Z)(
                                        { color: K },
                                        (0, a.j2)(T)
                                      ),
                                      children:
                                        null ===
                                          (j =
                                            null === k || void 0 === k
                                              ? void 0
                                              : k.items[0]) || void 0 === j
                                          ? void 0
                                          : j.content,
                                    }),
                                  (null ===
                                    (b =
                                      null === k || void 0 === k
                                        ? void 0
                                        : k.items[0]) || void 0 === b
                                    ? void 0
                                    : b.by) &&
                                    (0, i.jsx)("p", {
                                      className: "body-large",
                                      style: { color: K },
                                      children:
                                        null ===
                                          (F =
                                            null === k || void 0 === k
                                              ? void 0
                                              : k.items[0]) || void 0 === F
                                          ? void 0
                                          : F.by,
                                    }),
                                ],
                              }),
                            }),
                    }),
                  }),
                }),
                (0, i.jsx)(h.iz, {
                  previousDivider:
                    null === L || void 0 === L ? void 0 : L.divider,
                  dividerUniqueId: "".concat(C, "-").concat(P),
                  divider: P,
                  contentRef: Z,
                }),
              ],
            }),
            S &&
              (0, i.jsx)(g.OC, { border: S, sectionDivider: P, contentRef: Z }),
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
            [e, r]
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
  },
]);
