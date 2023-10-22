"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8077],
  {
    6604: function (e, n, t) {
      t.d(n, {
        c: function () {
          return g;
        },
      });
      var l = t(828),
        a = t(85893),
        o = t(67294),
        i = t(26042),
        r = t(69396),
        s = t(11355),
        c = {
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
            l = void 0 === t || t,
            u = e.appear,
            v = e.children,
            m = e.animation,
            h = void 0 === m ? "none" : m,
            f = e.duration,
            p = void 0 === f ? 300 : f,
            x = e.asChild,
            g = e.unmount,
            y = e.style,
            b = e.delay,
            w = null !== (n = d[h]) && void 0 !== n ? n : d.none,
            j = (0, r.Z)((0, i.Z)({}, w), {
              enter: ""
                .concat(w.enter, " ")
                .concat(c[p], " ")
                .concat(b ? "delay-".concat(b) : ""),
              leave: ""
                .concat(w.leave, " ")
                .concat(c[p], " ")
                .concat(b ? "delay-".concat(b) : ""),
            }),
            N = x ? s.u.Child : s.u;
          return (0, a.jsx)(
            N,
            (0, r.Z)(
              (0, i.Z)(
                {
                  show: x ? void 0 : l,
                  as: b ? "div" : o.Fragment,
                  appear: u,
                  unmount: g,
                  style: y,
                },
                j
              ),
              { children: v }
            )
          );
        },
        v = t(42708),
        m = "default",
        h = "medium",
        f = "none",
        p = "medium";
      var x = { slow: 750, medium: 500, fast: 250 },
        g = function (e) {
          var n = e.children,
            t = e.settings,
            i = e.globalSettings,
            r = e.unmount,
            s = void 0 !== r && r,
            c = e.delay,
            d = (function (e, n) {
              var t = e || {},
                l = t.type,
                a = void 0 === l ? m : l,
                o = t.speed,
                i = void 0 === o ? h : o;
              return (
                "default" === a &&
                  ((a = (null === n || void 0 === n ? void 0 : n.type) || f),
                  (i = (null === n || void 0 === n ? void 0 : n.speed) || p)),
                { type: a, speed: i }
              );
            })(t, i),
            g = d.type,
            y = d.speed,
            b = (0, o.useState)(!1),
            w = b[0],
            j = b[1],
            N = (0, l.Z)((0, v.YD)({ triggerOnce: !0 }), 3),
            F = N[0],
            C = N[1];
          N[2];
          return (
            (0, o.useEffect)(
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
            "none" === g
              ? (0, a.jsx)(a.Fragment, { children: n })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    !w &&
                      (0, a.jsx)("div", {
                        className:
                          "absolute left-0 top-8 min-h-full min-w-full",
                        ref: F,
                      }),
                    (0, a.jsx)(u, {
                      show: w,
                      animation: g,
                      duration: x[y],
                      unmount: s,
                      disableLeave: !0,
                      delay: c,
                      children: n,
                    }),
                    !w &&
                      (0, a.jsx)("div", {
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
          return c;
        },
      });
      var l = t(85893),
        a = t(67294),
        o = t(62246),
        i = t(4433),
        r = [
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
        s = function (e) {
          var n = e.width,
            t = e.shape,
            a = e.strokeWidth,
            o = e.strokeColor,
            s = e.strokeType,
            c = r.find(function (e) {
              return e.id === (null !== t && void 0 !== t ? t : "none");
            }),
            d = Math.floor(n),
            u = "none" === c.id ? Math.floor(a) : Math.floor(d / i.c8),
            v = c.getPath(d, u);
          return (0, l.jsx)("svg", {
            className: "absolute bottom-0 left-0 z-50 overflow-visible",
            fill: "transparent",
            width: d,
            height: u,
            viewBox: "0 0 ".concat(d, " ").concat(u),
            children: (0, l.jsx)("path", {
              d: v,
              stroke: o,
              strokeWidth: a,
              strokeDasharray: "dashed" === s ? "40 20" : void 0,
            }),
          });
        },
        c = function (e) {
          var n = e.border,
            t = e.contentRef,
            i = e.sectionDivider,
            r = n || {},
            c = r.type,
            d = r.width,
            u = r.color,
            v = (0, a.useState)(0),
            m = v[0],
            h = v[1],
            f = (0, a.useCallback)(
              function () {
                var e;
                h(null !== (e = t.current.offsetWidth) && void 0 !== e ? e : 0);
              },
              [t]
            );
          return (
            (0, o.Z)(f, n ? t : null),
            n
              ? (0, l.jsx)(s, {
                  width: m,
                  shape: i,
                  strokeType: c,
                  strokeWidth: d,
                  strokeColor: u,
                })
              : null
          );
        };
    },
    14441: function (e, n, t) {
      var l = t(85893),
        a = t(67294),
        o = t(40944),
        i = t(31996),
        r = (0, a.forwardRef)(function (e, n) {
          var t = e.value,
            a = e.label,
            r = e.onClick,
            s = e.disabled,
            c = e.hint,
            d = e.className,
            u = e.labelClass,
            v = e.style,
            m = e.onClear;
          return (0, l.jsxs)("button", {
            className: (0, i.AK)("date-input group", d),
            onClick: r,
            ref: n,
            disabled: s,
            type: "button",
            style: v,
            children: [
              (0, l.jsx)(o.Z, { icon: "CalendarIcon", className: "h-4 w-4" }),
              a &&
                (0, l.jsx)("span", {
                  className: (0, i.AK)("text-gray-400", u),
                  children: a,
                }),
              t ||
                (0, l.jsx)("span", {
                  className: (0, i.AK)("text-gray-400", u),
                  children: c,
                }),
              "function" === typeof m &&
                t &&
                (0, l.jsx)("div", {
                  className:
                    "absolute opacity-0 group-hover:opacity-100 transition-opacity right-2 hover:text-indigo-500",
                  onClick: function (e) {
                    e.stopPropagation(), m();
                  },
                  children: (0, l.jsx)(o.Z, {
                    icon: "XCircleIcon",
                    className: "h-4 w-4",
                  }),
                }),
            ],
          });
        });
      (r.displayName = "DateInput"), (n.Z = r);
    },
    80360: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var l = t(85893),
        a = t(67294),
        o = t(41126),
        i = t(11355),
        r = t(31996),
        s = t(16494),
        c = t(64220),
        d = t(10124);
      function u(e) {
        var n = e.className,
          t = e.btnClassName,
          u = e.label,
          v = e.placeholder,
          m = e.disabled,
          h = e.inline,
          f = e.autocomplete,
          p = e.hasFilter,
          x = e.error,
          g = e.value,
          y = e.values,
          b = e.style,
          w = e.iconStyle,
          j = e.onChange,
          N = e.filterFunction,
          F = (0, a.useState)(""),
          C = F[0],
          Z = F[1],
          k =
            "" === C
              ? y
              : null === y || void 0 === y
              ? void 0
              : y.filter(function (e) {
                  return e.name
                    .toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(C.toLowerCase().replace(/\s+/g, ""));
                });
        return (
          (0, a.useEffect)(
            function () {
              "function" === typeof N && N(C);
            },
            [C]
          ),
          (0, l.jsx)("div", {
            className: n,
            children: (0, l.jsxs)(o.h, {
              value: g,
              onChange: j,
              children: [
                u &&
                  (0, l.jsx)(o.h.Label, {
                    className:
                      "block text-label font-normal text-gray-700 mb-1",
                    children: u,
                  }),
                (0, l.jsxs)("div", {
                  className: "relative",
                  children: [
                    f &&
                      (0, l.jsxs)("div", {
                        className: "relative",
                        children: [
                          (0, l.jsx)(o.h.Input, {
                            className: (0, r.AK)(
                              t,
                              "!pr-8",
                              x && "!border-red-300",
                              m ? "pointer-events-none bg-gray-50" : "bg-white"
                            ),
                            placeholder: v,
                            onChange: function (e) {
                              return Z(e.target.value);
                            },
                            displayValue: function (e) {
                              return null === e || void 0 === e
                                ? void 0
                                : e.name;
                            },
                            style: b,
                          }),
                          (0, l.jsx)(o.h.Button, {
                            className: (0, r.AK)(
                              "absolute inset-y-0 right-0 flex items-center pr-2",
                              m && "pointer-events-none"
                            ),
                            children: (0, l.jsx)(c.Z, {
                              className: "h-5 w-5 text-gray-400",
                              style: w,
                            }),
                          }),
                        ],
                      }),
                    !f &&
                      (0, l.jsxs)(o.h.Button, {
                        style: b,
                        className: (0, r.AK)(
                          t,
                          "relative w-full border rounded-md shadow-sm pl-3 pr-9 py-2.5 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500",
                          x ? "border-red-300" : "border-gray-300",
                          m ? "bg-gray-50" : "bg-white"
                        ),
                        children: [
                          (0, l.jsx)("span", {
                            className: "block truncate",
                            children:
                              (null === g || void 0 === g ? void 0 : g.name) ||
                              v,
                          }),
                          (0, l.jsx)("span", {
                            className:
                              "absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",
                            children: (0, l.jsx)(c.Z, {
                              className: "h-5 w-5 text-gray-400",
                              style: w,
                            }),
                          }),
                        ],
                      }),
                    (0, l.jsx)(i.u, {
                      as: a.Fragment,
                      leave: "transition ease-in duration-100",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      afterLeave: function () {
                        return Z("");
                      },
                      children: (0, l.jsxs)(o.h.Options, {
                        className: (0, r.AK)(
                          h ? "static" : "absolute",
                          "z-60 mt-1 w-full bg-white shadow-lg max-h-80 rounded-md py-1 text-label ring-1 ring-black ring-opacity-5 focus:outline-none"
                        ),
                        children: [
                          !f &&
                            p &&
                            (0, l.jsx)("div", {
                              className: "px-2 pt-1 pb-2",
                              children: (0, l.jsx)(o.h.Input, {
                                className:
                                  "input !p-2 !text-label md:!text-body",
                                placeholder: "Search",
                                onChange: function (e) {
                                  return Z(e.target.value);
                                },
                                displayValue: function (e) {
                                  return null === e || void 0 === e
                                    ? void 0
                                    : e.name;
                                },
                              }),
                            }),
                          !k &&
                            (0, l.jsx)("div", {
                              className: "p-2",
                              children: (0, l.jsx)(s.Z, {}),
                            }),
                          0 ===
                            (null === k || void 0 === k ? void 0 : k.length) &&
                            "" !== C &&
                            (0, l.jsx)("div", {
                              className:
                                "relative cursor-default select-none py-2 px-4 text-gray-700",
                              children: "Nothing found",
                            }),
                          (0, l.jsx)("div", {
                            className: "w-full max-h-60 overflow-auto",
                            children:
                              null === k || void 0 === k
                                ? void 0
                                : k.map(function (e) {
                                    return (0, l.jsx)(
                                      o.h.Option,
                                      {
                                        className: function (e) {
                                          var n = e.active;
                                          return (0, r.AK)(
                                            n
                                              ? "text-white bg-indigo-600"
                                              : "text-gray-900",
                                            "cursor-pointer select-none relative py-2.5 pl-3 pr-9"
                                          );
                                        },
                                        value: e,
                                        children: function (n) {
                                          var t = n.selected,
                                            a = n.active;
                                          return (0, l.jsxs)(l.Fragment, {
                                            children: [
                                              (0, l.jsx)("span", {
                                                className: (0, r.AK)(
                                                  t
                                                    ? "font-semibold"
                                                    : "font-normal",
                                                  "block truncate"
                                                ),
                                                children: e.name,
                                              }),
                                              t &&
                                                (0, l.jsx)("span", {
                                                  className: (0, r.AK)(
                                                    a
                                                      ? "text-white"
                                                      : "text-indigo-600",
                                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                                  ),
                                                  children: (0, l.jsx)(d.Z, {
                                                    className: "h-5 w-5",
                                                  }),
                                                }),
                                            ],
                                          });
                                        },
                                      },
                                      e.id
                                    );
                                  }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                x &&
                  (0, l.jsx)("p", {
                    className: "mt-2 mb-3 text-sm text-red-600",
                    children: x,
                  }),
              ],
            }),
          })
        );
      }
    },
    33253: function (e, n, t) {
      var l = t(29815),
        a = t(85893),
        o = t(67294),
        i = t(31996);
      n.Z = function (e) {
        var n = e.rating,
          t = e.setRating,
          r = e.readOnly,
          s = e.containerClassName,
          c = e.className,
          d = e.size,
          u = e.showNumber,
          v = (0, o.useState)(n),
          m = v[0],
          h = v[1];
        return (
          (0, o.useEffect)(
            function () {
              h(n);
            },
            [n]
          ),
          (0, a.jsxs)("div", {
            className: (0, i.AK)("text-h3 text-gray-600", s),
            children: [
              u && m,
              (0, a.jsx)("div", {
                className: (0, i.AK)("star-rating", c),
                children: (0, l.Z)(Array(5)).map(function (e, l) {
                  return (
                    (l += 1),
                    (0, a.jsx)(
                      "button",
                      {
                        type: "button",
                        className:
                          l <= (m || n) ? "text-yellow-400" : "text-gray-200",
                        onClick: function () {
                          return t(l);
                        },
                        onMouseEnter: function () {
                          return h(l);
                        },
                        onMouseLeave: function () {
                          return h(n);
                        },
                        disabled: r,
                        children: (0, a.jsx)("span", {
                          className: (0, i.AK)(
                            "block text-".concat(d || "body", " mx-0.5")
                          ),
                          children: "\u2605",
                        }),
                      },
                      l
                    )
                  );
                }),
              }),
            ],
          })
        );
      };
    },
    68077: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return S;
          },
        });
      var l = t(47568),
        a = t(26042),
        o = t(69396),
        i = t(29815),
        r = t(20414),
        s = t(85893),
        c = t(31996),
        d = t(67294),
        u = t(52077),
        v = t(34853);
      var m = d.forwardRef(function (e, n) {
          return d.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                "aria-hidden": "true",
                ref: n,
              },
              e
            ),
            d.createElement("path", {
              fillRule: "evenodd",
              d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
              clipRule: "evenodd",
            })
          );
        }),
        h = t(41664),
        f = t.n(h),
        p = t(57333),
        x = t(14441),
        g = t(80360),
        y = t(33253),
        b = t(30120),
        w = t(9198),
        j = t.n(w),
        N = (t(39828), t(399)),
        F = t(21123),
        C = t(6604),
        Z = t(4433),
        k = t(60546),
        L = { name: "", email: "", message: "", idBusiness: null, valid: !0 };
      function S(e) {
        var n,
          t,
          h,
          w,
          S,
          M,
          A,
          R,
          T,
          K = e.id,
          _ = e.block,
          E = e.website,
          P = e.apiUrl,
          I = e.captchaKey,
          O = e.previousBlock,
          V = (null === _ || void 0 === _ ? void 0 : _.headline)
            ? "<h3>".concat(_.headline, "</h3><p>").concat(_.content, "</p>")
            : null === _ || void 0 === _
            ? void 0
            : _.content,
          H = null === _ || void 0 === _ ? void 0 : _.align,
          D =
            null !==
              (S = null === _ || void 0 === _ ? void 0 : _.nameFieldLabel) &&
            void 0 !== S
              ? S
              : "Name",
          z =
            null !==
              (M = null === _ || void 0 === _ ? void 0 : _.emailFieldLabel) &&
            void 0 !== M
              ? M
              : "E-mail",
          B =
            null !==
              (A = null === _ || void 0 === _ ? void 0 : _.messageFieldLabel) &&
            void 0 !== A
              ? A
              : "Message",
          $ =
            null !==
              (R = null === _ || void 0 === _ ? void 0 : _.sendButtonLabel) &&
            void 0 !== R
              ? R
              : "Send",
          W = null === _ || void 0 === _ ? void 0 : _.animation,
          q = null === E || void 0 === E ? void 0 : E.animation,
          U = null === _ || void 0 === _ ? void 0 : _.divider,
          G = null === _ || void 0 === _ ? void 0 : _.border,
          Y = (0, d.useRef)(null),
          J = (0, d.useState)(!1),
          X = J[0],
          Q = J[1],
          ee = (0, d.useState)(
            (0, o.Z)((0, a.Z)({}, L), { customFields: _.customFields })
          ),
          ne = ee[0],
          te = ee[1],
          le = (0, d.useState)(!1),
          ae = le[0],
          oe = le[1],
          ie = (0, d.useState)(null),
          re = ie[0],
          se = ie[1],
          ce = (0, d.useState)("#FFFFFF"),
          de = ce[0],
          ue = ce[1],
          ve = d.createRef(),
          me = new c.bl(P),
          he = (0, N.Z)(_).minHeight,
          fe =
            (null !==
              (T =
                null === _ ||
                void 0 === _ ||
                null === (n = _.fieldStyle) ||
                void 0 === n
                  ? void 0
                  : n.opacity) && void 0 !== T
              ? T
              : 7) / 100,
          pe = (0, d.useState)({
            borderRadius: 8,
            backgroundColor: "rgba(0,0,0,".concat(fe, ")"),
            color:
              fe >= 0.25
                ? (0, c.$O)((0, c.s)("rgba(0,0,0,".concat(fe, ")")))
                : "#000000",
          }),
          xe = pe[0],
          ge = pe[1],
          ye = (function () {
            var e = (0, l.Z)(function (e) {
              var n, t, l, i, s, d, u, v;
              return (0, r.__generator)(this, function (r) {
                switch (r.label) {
                  case 0:
                    if (!e) return Q(!1), [2];
                    if (
                      (ve.current.reset(),
                      !ne.name ||
                        !ne.email ||
                        !(0, c.oH)(ne.email) ||
                        !ne.message)
                    )
                      return (
                        te((0, o.Z)((0, a.Z)({}, ne), { valid: !1 })),
                        Q(!1),
                        [2]
                      );
                    if (
                      _ &&
                      (null === _ || void 0 === _ ? void 0 : _.fields) &&
                      (null === _ ||
                      void 0 === _ ||
                      null === (n = _.fields) ||
                      void 0 === n
                        ? void 0
                        : n.length)
                    ) {
                      (t = !0), (l = !1), (i = void 0);
                      try {
                        for (
                          s = _.fields[Symbol.iterator]();
                          !(t = (d = s.next()).done);
                          t = !0
                        )
                          if (
                            (u = d.value).required &&
                            !ne[u.label.toLowerCase()]
                          )
                            return (
                              te((0, o.Z)((0, a.Z)({}, ne), { valid: !1 })),
                              Q(!1),
                              [2]
                            );
                      } catch (m) {
                        (l = !0), (i = m);
                      } finally {
                        try {
                          t || null == s.return || s.return();
                        } finally {
                          if (l) throw i;
                        }
                      }
                    }
                    return (
                      (ne.captcha = e),
                      [4, me.post("/website/send-contact-form", ne)]
                    );
                  case 1:
                    return (
                      (v = r.sent()) && !0 === v.status
                        ? (te(L), oe(!0))
                        : se(
                            "Error while sending your message. Try again later."
                          ),
                      Q(!1),
                      [2]
                    );
                }
              });
            });
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          be = function (e, n) {
            var t = [];
            (null === ne || void 0 === ne ? void 0 : ne.customFields) &&
              (t = (0, i.Z)(ne.customFields));
            var l =
              null === t || void 0 === t
                ? void 0
                : t.find(function (n) {
                    return n.Field === e;
                  });
            l ? (l.value = n) : t.push({ Field: e, value: n }),
              te(function (e) {
                return (0, o.Z)((0, a.Z)({}, e), { customFields: t });
              });
          };
        return (
          (0, d.useEffect)(
            function () {
              var e, n;
              if (_ && E)
                if (
                  (te(
                    (0, o.Z)((0, a.Z)({}, ne), { customFields: _.customFields })
                  ),
                  "custom" ===
                    (null === (e = _.button) ||
                    void 0 === e ||
                    null === (n = e.style) ||
                    void 0 === n
                      ? void 0
                      : n.name))
                )
                  ge(function (e) {
                    return (0,
                    o.Z)((0, a.Z)({}, e), { borderRadius: _.button.style.cornerRadius });
                  });
                else {
                  var t,
                    l,
                    i = (E.buttons &&
                      E.buttons[
                        null === (t = _.button) ||
                        void 0 === t ||
                        null === (l = t.style) ||
                        void 0 === l
                          ? void 0
                          : l.name
                      ]) || { cornerRadius: 8 };
                  ge(function (e) {
                    return (0,
                    o.Z)((0, a.Z)({}, e), { borderRadius: i.cornerRadius });
                  });
                }
            },
            [_, E]
          ),
          (0, d.useEffect)(
            function () {
              var e;
              te(
                (0, o.Z)((0, a.Z)({}, ne), {
                  idBusiness:
                    null === (e = E.Business) || void 0 === e ? void 0 : e._id,
                })
              );
            },
            [E]
          ),
          (0, s.jsxs)("section", {
            className: "relative",
            children: [
              (0, s.jsxs)("div", {
                ref: Y,
                id: K,
                className: (0, c.AK)(
                  "flex flex-none flex-shrink-0 relative",
                  (0, c.A2)(
                    (null === _ || void 0 === _ ? void 0 : _.verticalAlign) ||
                      "center"
                  )
                ),
                style: (0, a.Z)({ minHeight: he }, (0, Z.$h)(_)),
                children: [
                  (0, s.jsx)(F.Z, {
                    block: _,
                    website: E,
                    onChange: function (e) {
                      var n,
                        t =
                          (null === e ||
                          void 0 === e ||
                          null === (n = e.overlay) ||
                          void 0 === n
                            ? void 0
                            : n.color1) || "#FFFFFF",
                        l = (0, c.$O)(t);
                      ue(l),
                        ge(function (e) {
                          return (0,
                          o.Z)((0, a.Z)({}, e), { backgroundColor: (0, c.jn)(t) ? "rgba(255,255,255,".concat(fe, ")") : "rgba(0,0,0,".concat(fe, ")"), color: fe >= 0.25 ? (0, c.$O)((0, c.s)((0, c.jn)(t) ? "rgba(255,255,255,".concat(fe, ")") : "rgba(0,0,0,".concat(fe, ")"))) : l });
                        });
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: (0, c.AK)(
                      "relative z-10 container mx-auto",
                      (0, c.bG)(null === _ || void 0 === _ ? void 0 : _.spacing)
                    ),
                    children: (0, s.jsx)(C.c, {
                      settings: W,
                      globalSettings: q,
                      children: ae
                        ? (0, s.jsx)("div", {
                            className:
                              "w-full flex flex-col items-center py-20",
                            children: (
                              null === _ || void 0 === _
                                ? void 0
                                : _.successMessage
                            )
                              ? (0, s.jsx)("div", {
                                  className: "rich-text-block max-w-5xl",
                                  style: { color: de },
                                  dangerouslySetInnerHTML: {
                                    __html: _.successMessage,
                                  },
                                })
                              : (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    (0, s.jsx)("h3", {
                                      className: "heading-medium mb-5",
                                      style: { color: de },
                                      children: "Message sent!",
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "body-normal text-gray-600",
                                      style: { color: de },
                                      children:
                                        "We'll get in touch with you as soon as possible.",
                                    }),
                                  ],
                                }),
                          })
                        : (0, s.jsxs)("div", {
                            className: (0, c.AK)(
                              "flex flex-col w-full gap-10 lg:gap-20",
                              "left" === H
                                ? "lg:!flex-row-reverse"
                                : "lg:flex-row"
                            ),
                            children: [
                              (0, s.jsx)("div", {
                                className: "w-full lg:w-1/2 lg:mt-10",
                                children: (0, s.jsx)("div", {
                                  className: "rich-text-block",
                                  style: { color: de },
                                  dangerouslySetInnerHTML: { __html: V },
                                }),
                              }),
                              (0, s.jsxs)("div", {
                                className: "w-full lg:w-1/2",
                                children: [
                                  re &&
                                    (0, s.jsx)("div", {
                                      className:
                                        "rounded-md bg-red-50 p-4 mb-4",
                                      children: (0, s.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className: "flex-shrink-0",
                                            children: (0, s.jsx)(m, {
                                              className: "h-5 w-5 text-red-400",
                                              "aria-hidden": "true",
                                            }),
                                          }),
                                          (0, s.jsx)("div", {
                                            className: "ml-3",
                                            children: (0, s.jsx)("p", {
                                              className:
                                                "text-sm font-medium text-red-800",
                                              children: re,
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                  (0, s.jsxs)("form", {
                                    className: "block",
                                    onSubmit: function (e) {
                                      se(null),
                                        e.preventDefault(),
                                        Q(!0),
                                        ve.current.execute();
                                    },
                                    noValidate: !0,
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-col lg:flex-row gap-4 mb-4",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                              (0, s.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: { color: de },
                                                children: D,
                                              }),
                                              (0, s.jsx)("input", {
                                                className:
                                                  "input border-none !shadow-none !ring-transparent !ring-transparent !placeholder-current",
                                                type: "text",
                                                value: ne.name,
                                                onChange: function (e) {
                                                  return te(
                                                    (0, o.Z)((0, a.Z)({}, ne), {
                                                      name: e.target.value,
                                                    })
                                                  );
                                                },
                                                style: xe,
                                              }),
                                              !ne.valid &&
                                                !ne.name &&
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "text-sm mt-1 text-red-500",
                                                  children: "Provide a name",
                                                }),
                                            ],
                                          }),
                                          (0, s.jsxs)("div", {
                                            className: "flex-1",
                                            children: [
                                              (0, s.jsx)("label", {
                                                className: "mb-1 body-small",
                                                style: { color: de },
                                                children: z,
                                              }),
                                              (0, s.jsx)("input", {
                                                className:
                                                  "input border-none !shadow-none !ring-transparent !placeholder-current",
                                                type: "text",
                                                value: ne.email,
                                                onChange: function (e) {
                                                  return te(
                                                    (0, o.Z)((0, a.Z)({}, ne), {
                                                      email: e.target.value,
                                                    })
                                                  );
                                                },
                                                style: xe,
                                              }),
                                              !ne.valid &&
                                                (!ne.email ||
                                                  !(0, c.oH)(ne.email)) &&
                                                (0, s.jsx)("div", {
                                                  className:
                                                    "text-sm mt-1 text-red-500",
                                                  children:
                                                    "Provide a valid email",
                                                }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      null === _ ||
                                      void 0 === _ ||
                                      null === (t = _.fields) ||
                                      void 0 === t
                                        ? void 0
                                        : t.map(function (e, n) {
                                            return (0, s.jsxs)(
                                              "div",
                                              {
                                                className: "mb-4",
                                                children: [
                                                  (0, s.jsx)("label", {
                                                    className:
                                                      "mb-1 body-small",
                                                    style: { color: de },
                                                    children: e.label,
                                                  }),
                                                  (0, s.jsx)("input", {
                                                    className:
                                                      "input border-none !shadow-none !ring-transparent !placeholder-current",
                                                    type: "text",
                                                    required: e.required,
                                                    value:
                                                      ne[e.label.toLowerCase()],
                                                    onChange: function (n) {
                                                      return (function (e, n) {
                                                        var t = (0, c.p$)(ne);
                                                        (t[
                                                          n.label.toLowerCase()
                                                        ] = e.target.value),
                                                          te(t);
                                                      })(n, e);
                                                    },
                                                    style: xe,
                                                  }),
                                                  !ne.valid &&
                                                    !ne[
                                                      e.label.toLowerCase()
                                                    ] &&
                                                    e.required &&
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "text-sm mt-1 text-red-500",
                                                      children: [
                                                        e.label,
                                                        " is required",
                                                      ],
                                                    }),
                                                ],
                                              },
                                              "custom-field-".concat(n)
                                            );
                                          }),
                                      (null === ne ||
                                      void 0 === ne ||
                                      null === (h = ne.customFields) ||
                                      void 0 === h
                                        ? void 0
                                        : h.length) > 0 &&
                                        (0, s.jsx)("div", {
                                          className:
                                            "flex flex-col lg:grid lg:grid-cols-2 gap-4 w-full mb-4",
                                          children:
                                            null === ne ||
                                            void 0 === ne ||
                                            null === (w = ne.customFields) ||
                                            void 0 === w
                                              ? void 0
                                              : w.map(function (e, n) {
                                                  var t,
                                                    l,
                                                    r =
                                                      null ===
                                                        (l =
                                                          null === ne ||
                                                          void 0 === ne ||
                                                          null ===
                                                            (t =
                                                              ne.customFields) ||
                                                          void 0 === t
                                                            ? void 0
                                                            : t.find(function (
                                                                n
                                                              ) {
                                                                return (
                                                                  n.Field ===
                                                                  e.Field._id
                                                                );
                                                              })) ||
                                                      void 0 === l
                                                        ? void 0
                                                        : l.value;
                                                  switch (e.Field.type) {
                                                    case "text":
                                                      var d;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (d =
                                                                    _.customFields) ||
                                                                void 0 === d
                                                                  ? void 0
                                                                  : d.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(
                                                              "input",
                                                              {
                                                                className:
                                                                  "input border-none !shadow-none !ring-transparent !placeholder-current",
                                                                name: e.Field
                                                                  .name,
                                                                value: r || "",
                                                                onChange:
                                                                  function (n) {
                                                                    return be(
                                                                      e.Field
                                                                        ._id,
                                                                      n.target
                                                                        .value
                                                                    );
                                                                  },
                                                                type: "text",
                                                                style: xe,
                                                              }
                                                            ),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "number":
                                                      var u;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (u =
                                                                    _.customFields) ||
                                                                void 0 === u
                                                                  ? void 0
                                                                  : u.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(p.Z, {
                                                              value: r || "",
                                                              onChange:
                                                                function (n) {
                                                                  return be(
                                                                    e.Field._id,
                                                                    n.target
                                                                      .value
                                                                  );
                                                                },
                                                              thousandSeparator:
                                                                !1,
                                                              allowNegative: !0,
                                                              decimalScale: 0,
                                                              allowLeadingZeros:
                                                                !1,
                                                              allowEmptyFormatting:
                                                                !1,
                                                              className:
                                                                "input w-full border-none !shadow-none !ring-transparent !placeholder-current",
                                                              style: xe,
                                                            }),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "money":
                                                      var v;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (v =
                                                                    _.customFields) ||
                                                                void 0 === v
                                                                  ? void 0
                                                                  : v.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(p.Z, {
                                                              value: r || "",
                                                              onChange:
                                                                function (n) {
                                                                  return be(
                                                                    e.Field._id,
                                                                    n.target
                                                                      .value
                                                                  );
                                                                },
                                                              thousandSeparator:
                                                                ",",
                                                              decimalSeparator:
                                                                ".",
                                                              allowNegative: !0,
                                                              decimalScale: 2,
                                                              prefix: "$",
                                                              placeholder: "$0",
                                                              allowLeadingZeros:
                                                                !1,
                                                              allowEmptyFormatting:
                                                                !1,
                                                              className:
                                                                "input w-full border-none !shadow-none !ring-transparent !placeholder-current",
                                                              style: xe,
                                                            }),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "date":
                                                      var m;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "flex flex-col md:min-w-40 w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (m =
                                                                    _.customFields) ||
                                                                void 0 === m
                                                                  ? void 0
                                                                  : m.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(j(), {
                                                              className:
                                                                "w-full flex-1",
                                                              selected: r
                                                                ? new Date(r)
                                                                : null,
                                                              onChange:
                                                                function (n) {
                                                                  return be(
                                                                    e.Field._id,
                                                                    b.ou
                                                                      .fromJSDate(
                                                                        n
                                                                      )
                                                                      .startOf(
                                                                        "day"
                                                                      )
                                                                      .toISO()
                                                                  );
                                                                },
                                                              dateFormat:
                                                                "MMM dd, yyyy",
                                                              calendarClassName:
                                                                "tailwind-calendar",
                                                              customInput: (0,
                                                              s.jsx)(x.Z, {
                                                                className:
                                                                  "border-none !shadow-none !ring-transparent !placeholder-current",
                                                                labelClass:
                                                                  "text-current",
                                                                hint: b.ou
                                                                  .now()
                                                                  .toFormat(
                                                                    "DD"
                                                                  ),
                                                                onClear:
                                                                  function () {
                                                                    return be(
                                                                      e.Field
                                                                        ._id,
                                                                      null
                                                                    );
                                                                  },
                                                                style: xe,
                                                              }),
                                                            }),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "checkbox":
                                                      var h, f;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "flex flex-col md:min-w-40 w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (h =
                                                                    _.customFields) ||
                                                                void 0 === h
                                                                  ? void 0
                                                                  : h.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)("div", {
                                                              className:
                                                                "flex flex-wrap gap-x-6 gap-y-2",
                                                              children:
                                                                null ===
                                                                  (f =
                                                                    e.Field
                                                                      .options) ||
                                                                void 0 === f
                                                                  ? void 0
                                                                  : f.map(
                                                                      function (
                                                                        n
                                                                      ) {
                                                                        return (0,
                                                                        s.jsxs)(
                                                                          "label",
                                                                          {
                                                                            className:
                                                                              "inline-flex items-center",
                                                                            children:
                                                                              [
                                                                                (0,
                                                                                s.jsx)(
                                                                                  "input",
                                                                                  {
                                                                                    type: "checkbox",
                                                                                    className:
                                                                                      "mr-1",
                                                                                    value:
                                                                                      n.id,
                                                                                    checked:
                                                                                      !!(null ===
                                                                                        r ||
                                                                                      void 0 ===
                                                                                        r
                                                                                        ? void 0
                                                                                        : r.includes(
                                                                                            n.id
                                                                                          )),
                                                                                    onChange:
                                                                                      function (
                                                                                        t
                                                                                      ) {
                                                                                        return (function (
                                                                                          e,
                                                                                          n,
                                                                                          t
                                                                                        ) {
                                                                                          var l =
                                                                                              (0,
                                                                                              i.Z)(
                                                                                                ne.customFields
                                                                                              ),
                                                                                            r =
                                                                                              null ===
                                                                                                l ||
                                                                                              void 0 ===
                                                                                                l
                                                                                                ? void 0
                                                                                                : l.find(
                                                                                                    function (
                                                                                                      n
                                                                                                    ) {
                                                                                                      return (
                                                                                                        n.Field ===
                                                                                                        e
                                                                                                      );
                                                                                                    }
                                                                                                  );
                                                                                          if (
                                                                                            (r ||
                                                                                              ((r =
                                                                                                {
                                                                                                  Field:
                                                                                                    e,
                                                                                                  value:
                                                                                                    [],
                                                                                                }),
                                                                                              l.push(
                                                                                                r
                                                                                              )),
                                                                                            t)
                                                                                          )
                                                                                            r.value.includes(
                                                                                              n
                                                                                            ) ||
                                                                                              r.value.push(
                                                                                                n
                                                                                              );
                                                                                          else {
                                                                                            var s =
                                                                                              r.value.indexOf(
                                                                                                n
                                                                                              );
                                                                                            -1 !==
                                                                                              s &&
                                                                                              r.value.splice(
                                                                                                s,
                                                                                                1
                                                                                              );
                                                                                          }
                                                                                          te(
                                                                                            function (
                                                                                              e
                                                                                            ) {
                                                                                              return (0,
                                                                                              o.Z)(
                                                                                                (0,
                                                                                                a.Z)(
                                                                                                  {},
                                                                                                  e
                                                                                                ),
                                                                                                {
                                                                                                  customFields:
                                                                                                    l,
                                                                                                }
                                                                                              );
                                                                                            }
                                                                                          );
                                                                                        })(
                                                                                          e
                                                                                            .Field
                                                                                            ._id,
                                                                                          n.id,
                                                                                          t
                                                                                            .target
                                                                                            .checked
                                                                                        );
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                (0,
                                                                                s.jsx)(
                                                                                  "span",
                                                                                  {
                                                                                    style:
                                                                                      {
                                                                                        color:
                                                                                          de,
                                                                                      },
                                                                                    children:
                                                                                      n.name,
                                                                                  }
                                                                                ),
                                                                              ],
                                                                          },
                                                                          n.id
                                                                        );
                                                                      }
                                                                    ),
                                                            }),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "dropdown":
                                                      var w;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "flex flex-col md:min-w-40 w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (w =
                                                                    _.customFields) ||
                                                                void 0 === w
                                                                  ? void 0
                                                                  : w.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small text-current",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(
                                                              g.Z,
                                                              {
                                                                className:
                                                                  "w-full",
                                                                btnClassName:
                                                                  "border-none !shadow-none !ring-transparent !placeholder-current",
                                                                value: r
                                                                  ? e.Field.options.find(
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return (
                                                                          e.id ===
                                                                          r
                                                                        );
                                                                      }
                                                                    )
                                                                  : e.Field
                                                                      .options[0],
                                                                onChange:
                                                                  function (n) {
                                                                    return be(
                                                                      e.Field
                                                                        ._id,
                                                                      n.id
                                                                    );
                                                                  },
                                                                values:
                                                                  e.Field
                                                                    .options,
                                                                style: xe,
                                                                iconStyle: {
                                                                  color: de,
                                                                },
                                                              },
                                                              n
                                                            ),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                    case "rating":
                                                      var N;
                                                      return (0, s.jsxs)(
                                                        "div",
                                                        {
                                                          className: (0, c.AK)(
                                                            "flex flex-col md:min-w-40 w-full",
                                                            n % 2 === 0 &&
                                                              n ===
                                                                (null === _ ||
                                                                void 0 === _ ||
                                                                null ===
                                                                  (N =
                                                                    _.customFields) ||
                                                                void 0 === N
                                                                  ? void 0
                                                                  : N.length) -
                                                                  1
                                                              ? "col-span-2"
                                                              : ""
                                                          ),
                                                          children: [
                                                            (0, s.jsx)(
                                                              "label",
                                                              {
                                                                className:
                                                                  "mb-1 body-small",
                                                                style: {
                                                                  color: de,
                                                                },
                                                                children:
                                                                  e.Field.name,
                                                              }
                                                            ),
                                                            (0, s.jsx)(y.Z, {
                                                              className:
                                                                "flex mt-2",
                                                              rating: r || 0,
                                                              setRating:
                                                                function (n) {
                                                                  return be(
                                                                    e.Field._id,
                                                                    n
                                                                  );
                                                                },
                                                            }),
                                                          ],
                                                        },
                                                        n
                                                      );
                                                  }
                                                }),
                                        }),
                                      (0, s.jsxs)("div", {
                                        className: "mb-4",
                                        children: [
                                          (0, s.jsx)("label", {
                                            className: "mb-1 body-small",
                                            style: { color: de },
                                            children: B,
                                          }),
                                          (0, s.jsx)("textarea", {
                                            className:
                                              "input border-none !shadow-none !ring-transparent !placeholder-current",
                                            placeholder: "",
                                            rows: "5",
                                            value: ne.message,
                                            onChange: function (e) {
                                              return te(
                                                (0, o.Z)((0, a.Z)({}, ne), {
                                                  message: e.target.value,
                                                })
                                              );
                                            },
                                            style: xe,
                                          }),
                                          !ne.valid &&
                                            !ne.message &&
                                            (0, s.jsx)("div", {
                                              className:
                                                "text-sm mt-1 text-red-500",
                                              children: "Provide a message",
                                            }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-col md:flex-row justify-between items-start gap-4",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className:
                                              "text-xs max-w-sm text-gray-500",
                                            style: { color: de },
                                            children: [
                                              "This site is protected by reCAPTCHA and the Google",
                                              (0, s.jsx)(f(), {
                                                href: "https://policies.google.com/privacy",
                                                children: (0, s.jsx)("a", {
                                                  target: "_blank",
                                                  className: "font-bold",
                                                  style: { color: de },
                                                  children: " Privacy Policy",
                                                }),
                                              }),
                                              " and",
                                              (0, s.jsx)(f(), {
                                                href: "https://policies.google.com/terms",
                                                children: (0, s.jsx)("a", {
                                                  target: "_blank",
                                                  className: "font-bold",
                                                  style: { color: de },
                                                  children: " Terms of Service",
                                                }),
                                              }),
                                              " apply.",
                                            ],
                                          }),
                                          (0, s.jsx)(u.Z, {
                                            type: "submit",
                                            button: (0, o.Z)(
                                              (0, a.Z)(
                                                {},
                                                null === _ || void 0 === _
                                                  ? void 0
                                                  : _.button
                                              ),
                                              { label: $ }
                                            ),
                                            block: _,
                                            website: E,
                                            loading: X,
                                            className: "lg w-36 mt-2 md:mt-0",
                                          }),
                                        ],
                                      }),
                                      (0, s.jsx)(v.Z, {
                                        ref: ve,
                                        className: "hidden",
                                        size: "invisible",
                                        badge: "inline",
                                        sitekey: I,
                                        onChange: ye,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                    }),
                  }),
                  (0, s.jsx)(Z.iz, {
                    previousDivider:
                      null === O || void 0 === O ? void 0 : O.divider,
                    dividerUniqueId: "".concat(K, "-").concat(U),
                    divider: U,
                    contentRef: Y,
                  }),
                ],
              }),
              G &&
                (0, s.jsx)(k.OC, {
                  border: G,
                  sectionDivider: U,
                  contentRef: Y,
                }),
            ],
          })
        );
      }
    },
    399: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var l = t(67294);
      function a(e) {
        var n,
          t,
          a = (0, l.useState)(0),
          o = a[0],
          i = a[1],
          r = (0, l.useState)([0, 0]),
          s = r[0],
          c = r[1];
        return (
          (0, l.useEffect)(function () {
            var e = function () {
              c([window.innerWidth, window.innerHeight]);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              function () {
                return window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, l.useEffect)(
            function () {
              var n;
              e &&
                i(
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
            [e, s]
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
                      : o,
                    "px)"
                  )
              : "134px",
            headerHeight: o,
          }
        );
      }
    },
    42708: function (e, n, t) {
      t.d(n, {
        YD: function () {
          return v;
        },
      });
      var l = t(67294),
        a = Object.defineProperty,
        o = (e, n, t) => (
          ((e, n, t) => {
            n in e
              ? a(e, n, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t,
                })
              : (e[n] = t);
          })(e, "symbol" !== typeof n ? n + "" : n, t),
          t
        ),
        i = new Map(),
        r = new WeakMap(),
        s = 0,
        c = void 0;
      function d(e) {
        return Object.keys(e)
          .sort()
          .filter((n) => void 0 !== e[n])
          .map((n) => {
            return `${n}_${
              "root" === n
                ? ((t = e.root),
                  t
                    ? (r.has(t) || ((s += 1), r.set(t, s.toString())), r.get(t))
                    : "0")
                : e[n]
            }`;
            var t;
          })
          .toString();
      }
      function u(e, n, t = {}, l = c) {
        if (
          "undefined" === typeof window.IntersectionObserver &&
          void 0 !== l
        ) {
          const a = e.getBoundingClientRect();
          return (
            n(l, {
              isIntersecting: l,
              target: e,
              intersectionRatio:
                "number" === typeof t.threshold ? t.threshold : 0,
              time: 0,
              boundingClientRect: a,
              intersectionRect: a,
              rootBounds: a,
            }),
            () => {}
          );
        }
        const {
          id: a,
          observer: o,
          elements: r,
        } = (function (e) {
          let n = d(e),
            t = i.get(n);
          if (!t) {
            const l = new Map();
            let a;
            const o = new IntersectionObserver((n) => {
              n.forEach((n) => {
                var t;
                const o =
                  n.isIntersecting && a.some((e) => n.intersectionRatio >= e);
                e.trackVisibility &&
                  "undefined" === typeof n.isVisible &&
                  (n.isVisible = o),
                  null == (t = l.get(n.target)) ||
                    t.forEach((e) => {
                      e(o, n);
                    });
              });
            }, e);
            (a =
              o.thresholds ||
              (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
              (t = { id: n, observer: o, elements: l }),
              i.set(n, t);
          }
          return t;
        })(t);
        let s = r.get(e) || [];
        return (
          r.has(e) || r.set(e, s),
          s.push(n),
          o.observe(e),
          function () {
            s.splice(s.indexOf(n), 1),
              0 === s.length && (r.delete(e), o.unobserve(e)),
              0 === r.size && (o.disconnect(), i.delete(a));
          }
        );
      }
      l.Component;
      function v({
        threshold: e,
        delay: n,
        trackVisibility: t,
        rootMargin: a,
        root: o,
        triggerOnce: i,
        skip: r,
        initialInView: s,
        fallbackInView: c,
        onChange: d,
      } = {}) {
        var v;
        const [m, h] = l.useState(null),
          f = l.useRef(),
          [p, x] = l.useState({ inView: !!s, entry: void 0 });
        (f.current = d),
          l.useEffect(() => {
            if (r || !m) return;
            let l;
            return (
              (l = u(
                m,
                (e, n) => {
                  x({ inView: e, entry: n }),
                    f.current && f.current(e, n),
                    n.isIntersecting && i && l && (l(), (l = void 0));
                },
                {
                  root: o,
                  rootMargin: a,
                  threshold: e,
                  trackVisibility: t,
                  delay: n,
                },
                c
              )),
              () => {
                l && l();
              }
            );
          }, [Array.isArray(e) ? e.toString() : e, m, o, a, i, r, t, c, n]);
        const g = null == (v = p.entry) ? void 0 : v.target,
          y = l.useRef();
        m ||
          !g ||
          i ||
          r ||
          y.current === g ||
          ((y.current = g), x({ inView: !!s, entry: void 0 }));
        const b = [h, p.inView, p.entry];
        return (b.ref = b[0]), (b.inView = b[1]), (b.entry = b[2]), b;
      }
    },
  },
]);
