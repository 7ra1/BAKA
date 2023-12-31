"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7886],
  {
    51961: function (e, t, r) {
      r.d(t, {
        V: function () {
          return re;
        },
      });
      var n = r(67294),
        o = r(32984),
        l = r(12351),
        a = r(23784),
        i = r(61363),
        u = r(64103),
        s = r(19946),
        c = r(84575),
        d = r(3855);
      function f(e, t, r, o) {
        let l = (0, d.E)(r);
        (0, n.useEffect)(() => {
          function r(e) {
            l.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, r, o),
            () => e.removeEventListener(t, r, o)
          );
        }, [e, t, o]);
      }
      var p = r(14879),
        v = r(51074),
        m = ((e) => (
          (e[(e.None = 1)] = "None"),
          (e[(e.InitialFocus = 2)] = "InitialFocus"),
          (e[(e.TabLock = 4)] = "TabLock"),
          (e[(e.FocusLock = 8)] = "FocusLock"),
          (e[(e.RestoreFocus = 16)] = "RestoreFocus"),
          (e[(e.All = 30)] = "All"),
          e
        ))(m || {});
      var g = r(15466),
        h = r(16723);
      let y = new Set(),
        b = new Map();
      function R(e) {
        e.setAttribute("aria-hidden", "true"), (e.inert = !0);
      }
      function E(e) {
        let t = b.get(e);
        !t ||
          (null === t["aria-hidden"]
            ? e.removeAttribute("aria-hidden")
            : e.setAttribute("aria-hidden", t["aria-hidden"]),
          (e.inert = t.inert));
      }
      function T(e, t = !0) {
        (0, h.e)(() => {
          if (!t || !e.current) return;
          let r = e.current,
            n = (0, g.r)(r);
          if (n) {
            y.add(r);
            for (let e of b.keys()) e.contains(r) && (E(e), b.delete(e));
            return (
              n.querySelectorAll("body > *").forEach((e) => {
                if (e instanceof HTMLElement) {
                  for (let t of y) if (e.contains(t)) return;
                  1 === y.size &&
                    (b.set(e, {
                      "aria-hidden": e.getAttribute("aria-hidden"),
                      inert: e.inert,
                    }),
                    R(e));
                }
              }),
              () => {
                if ((y.delete(r), y.size > 0))
                  n.querySelectorAll("body > *").forEach((e) => {
                    if (e instanceof HTMLElement && !b.has(e)) {
                      for (let t of y) if (e.contains(t)) return;
                      b.set(e, {
                        "aria-hidden": e.getAttribute("aria-hidden"),
                        inert: e.inert,
                      }),
                        R(e);
                    }
                  });
                else for (let e of b.keys()) E(e), b.delete(e);
              }
            );
          }
        }, [t]);
      }
      var I = r(73935);
      let C = (0, n.createContext)(!1);
      function P() {
        return (0, n.useContext)(C);
      }
      function k(e) {
        return n.createElement(C.Provider, { value: e.force }, e.children);
      }
      var S = r(82180);
      let w = n.Fragment,
        x = (0, l.yV)(function (e, t) {
          let r = e,
            o = (0, n.useRef)(null),
            i = (0, a.T)(
              (0, a.h)((e) => {
                o.current = e;
              }),
              t
            ),
            u = (0, v.i)(o),
            s = (function (e) {
              let t = P(),
                r = (0, n.useContext)(M),
                o = (0, v.i)(e),
                [l, a] = (0, n.useState)(() => {
                  if ((!t && null !== r) || "undefined" == typeof window)
                    return null;
                  let e =
                    null == o
                      ? void 0
                      : o.getElementById("headlessui-portal-root");
                  if (e) return e;
                  if (null === o) return null;
                  let n = o.createElement("div");
                  return (
                    n.setAttribute("id", "headlessui-portal-root"),
                    o.body.appendChild(n)
                  );
                });
              return (
                (0, n.useEffect)(() => {
                  null !== l &&
                    ((null != o && o.body.contains(l)) ||
                      null == o ||
                      o.body.appendChild(l));
                }, [l, o]),
                (0, n.useEffect)(() => {
                  t || (null !== r && a(r.current));
                }, [r, a, t]),
                l
              );
            })(o),
            [c] = (0, n.useState)(() => {
              var e;
              return "undefined" == typeof window
                ? null
                : null != (e = null == u ? void 0 : u.createElement("div"))
                ? e
                : null;
            }),
            d = (0, S.H)();
          return (
            (0, h.e)(() => {
              if (s && c)
                return (
                  s.appendChild(c),
                  () => {
                    var e;
                    !s ||
                      !c ||
                      (s.removeChild(c),
                      s.childNodes.length <= 0 &&
                        (null == (e = s.parentElement) || e.removeChild(s)));
                  }
                );
            }, [s, c]),
            d && s && c
              ? (0, I.createPortal)(
                  (0, l.sY)({
                    ourProps: { ref: i },
                    theirProps: r,
                    defaultTag: w,
                    name: "Portal",
                  }),
                  c
                )
              : null
          );
        }),
        D = n.Fragment,
        M = (0, n.createContext)(null),
        A = (0, l.yV)(function (e, t) {
          let { target: r, ...o } = e,
            i = { ref: (0, a.T)(t) };
          return n.createElement(
            M.Provider,
            { value: r },
            (0, l.sY)({
              ourProps: i,
              theirProps: o,
              defaultTag: D,
              name: "Popover.Group",
            })
          );
        }),
        F = Object.assign(x, { Group: A }),
        O = (0, n.createContext)(null);
      function L() {
        let e = (0, n.useContext)(O);
        if (null === e) {
          let e = new Error(
            "You used a <Description /> component, but it is not inside a relevant parent."
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(e, L), e);
        }
        return e;
      }
      function N() {
        let [e, t] = (0, n.useState)([]);
        return [
          e.length > 0 ? e.join(" ") : void 0,
          (0, n.useMemo)(
            () =>
              function (e) {
                let r = (0, n.useCallback)(
                    (e) => (
                      t((t) => [...t, e]),
                      () =>
                        t((t) => {
                          let r = t.slice(),
                            n = r.indexOf(e);
                          return -1 !== n && r.splice(n, 1), r;
                        })
                    ),
                    []
                  ),
                  o = (0, n.useMemo)(
                    () => ({
                      register: r,
                      slot: e.slot,
                      name: e.name,
                      props: e.props,
                    }),
                    [r, e.slot, e.name, e.props]
                  );
                return n.createElement(O.Provider, { value: o }, e.children);
              },
            [t]
          ),
        ];
      }
      let V = (0, l.yV)(function (e, t) {
        let r = L(),
          n = `headlessui-description-${(0, s.M)()}`,
          o = (0, a.T)(t);
        (0, h.e)(() => r.register(n), [n, r.register]);
        let i = e,
          u = { ref: o, ...r.props, id: n };
        return (0,
        l.sY)({ ourProps: u, theirProps: i, slot: r.slot || {}, defaultTag: "p", name: r.name || "Description" });
      });
      var Y = r(16567);
      let $ = (0, n.createContext)(() => {});
      $.displayName = "StackContext";
      var B = ((e) => (
        (e[(e.Add = 0)] = "Add"), (e[(e.Remove = 1)] = "Remove"), e
      ))(B || {});
      function Q({ children: e, onUpdate: t, type: r, element: o }) {
        let l = (0, n.useContext)($),
          a = (0, n.useCallback)(
            (...e) => {
              null == t || t(...e), l(...e);
            },
            [l, t]
          );
        return (
          (0, h.e)(() => (a(0, r, o), () => a(1, r, o)), [a, r, o]),
          n.createElement($.Provider, { value: a }, e)
        );
      }
      var U,
        _ = r(4503),
        G =
          (((U = G || {})[(U.Open = 0)] = "Open"),
          (U[(U.Closed = 1)] = "Closed"),
          U),
        H = ((e) => ((e[(e.SetTitleId = 0)] = "SetTitleId"), e))(H || {});
      let j = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        K = (0, n.createContext)(null);
      function Z(e) {
        let t = (0, n.useContext)(K);
        if (null === t) {
          let t = new Error(
            `<${e} /> is missing a parent <Dialog /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, Z), t);
        }
        return t;
      }
      function q(e, t) {
        return (0, o.E)(t.type, j, e, t);
      }
      K.displayName = "DialogContext";
      let z = l.AN.RenderStrategy | l.AN.Static,
        J = (0, l.yV)(function (e, t) {
          let {
              open: r,
              onClose: u,
              initialFocus: d,
              __demoMode: h = !1,
              ...y
            } = e,
            [b, R] = (0, n.useState)(0),
            E = (0, Y.oJ)();
          void 0 === r &&
            null !== E &&
            (r = (0, o.E)(E, { [Y.ZM.Open]: !0, [Y.ZM.Closed]: !1 }));
          let I = (0, n.useRef)(new Set()),
            C = (0, n.useRef)(null),
            P = (0, a.T)(C, t),
            w = (0, v.i)(C),
            x = e.hasOwnProperty("open") || null !== E,
            D = e.hasOwnProperty("onClose");
          if (!x && !D)
            throw new Error(
              "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
            );
          if (!x)
            throw new Error(
              "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
            );
          if (!D)
            throw new Error(
              "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
            );
          if ("boolean" != typeof r)
            throw new Error(
              `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${r}`
            );
          if ("function" != typeof u)
            throw new Error(
              `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${u}`
            );
          let M = r ? 0 : 1,
            [A, O] = (0, n.useReducer)(q, {
              titleId: null,
              descriptionId: null,
              panelRef: (0, n.createRef)(),
            }),
            L = (0, n.useCallback)(() => u(!1), [u]),
            V = (0, n.useCallback)((e) => O({ type: 0, id: e }), [O]),
            $ = !!(0, S.H)() && !h && 0 === M,
            U = b > 1,
            G = null !== (0, n.useContext)(K),
            H = (function (e, t = 30, { initialFocus: r, containers: o } = {}) {
              let l = (0, n.useRef)(null),
                a = (0, n.useRef)(null),
                u = (0, p.t)(),
                s = Boolean(16 & t),
                d = Boolean(2 & t),
                m = (0, v.i)(e);
              return (
                (0, n.useEffect)(() => {
                  !s ||
                    l.current ||
                    (l.current = null == m ? void 0 : m.activeElement);
                }, [s, m]),
                (0, n.useEffect)(() => {
                  if (s)
                    return () => {
                      (0, c.C5)(l.current), (l.current = null);
                    };
                }, [s]),
                (0, n.useEffect)(() => {
                  if (!d) return;
                  let t = e.current;
                  if (!t) return;
                  let n = null == m ? void 0 : m.activeElement;
                  if (null != r && r.current) {
                    if ((null == r ? void 0 : r.current) === n)
                      return void (a.current = n);
                  } else if (t.contains(n)) return void (a.current = n);
                  null != r && r.current
                    ? (0, c.C5)(r.current)
                    : (0, c.jA)(t, c.TO.First) === c.fE.Error &&
                      console.warn(
                        "There are no focusable elements inside the <FocusTrap />"
                      ),
                    (a.current = null == m ? void 0 : m.activeElement);
                }, [e, r, d, m]),
                f(null == m ? void 0 : m.defaultView, "keydown", (r) => {
                  !(4 & t) ||
                    !e.current ||
                    (r.key === i.R.Tab &&
                      (r.preventDefault(),
                      (0, c.jA)(
                        e.current,
                        (r.shiftKey ? c.TO.Previous : c.TO.Next) |
                          c.TO.WrapAround
                      ) === c.fE.Success &&
                        (a.current = null == m ? void 0 : m.activeElement)));
                }),
                f(
                  null == m ? void 0 : m.defaultView,
                  "focus",
                  (r) => {
                    if (!(8 & t)) return;
                    let n = new Set(null == o ? void 0 : o.current);
                    if ((n.add(e), !n.size)) return;
                    let l = a.current;
                    if (!l || !u.current) return;
                    let i = r.target;
                    i && i instanceof HTMLElement
                      ? (function (e, t) {
                          var r;
                          for (let n of e)
                            if (null != (r = n.current) && r.contains(t))
                              return !0;
                          return !1;
                        })(n, i)
                        ? ((a.current = i), (0, c.C5)(i))
                        : (r.preventDefault(),
                          r.stopPropagation(),
                          (0, c.C5)(l))
                      : (0, c.C5)(a.current);
                  },
                  !0
                ),
                l
              );
            })(
              C,
              $
                ? (0, o.E)(U ? "parent" : "leaf", {
                    parent: m.RestoreFocus,
                    leaf: m.All & ~m.FocusLock,
                  })
                : m.None,
              { initialFocus: d, containers: I }
            );
          T(C, !!U && $),
            (0, _.O)(
              () => {
                var e, t;
                return [
                  ...Array.from(
                    null !=
                      (e = null == w ? void 0 : w.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).filter(
                    (e) =>
                      !(
                        !(e instanceof HTMLElement) ||
                        e.contains(H.current) ||
                        (A.panelRef.current && e.contains(A.panelRef.current))
                      )
                  ),
                  null != (t = A.panelRef.current) ? t : C.current,
                ];
              },
              () => {
                0 === M && (U || L());
              },
              _.A.IgnoreScrollbars
            ),
            f(null == w ? void 0 : w.defaultView, "keydown", (e) => {
              e.key === i.R.Escape &&
                0 === M &&
                (U || (e.preventDefault(), e.stopPropagation(), L()));
            }),
            (0, n.useEffect)(() => {
              var e;
              if (0 !== M || G) return;
              let t = (0, g.r)(C);
              if (!t) return;
              let r = t.documentElement,
                n = null != (e = t.defaultView) ? e : window,
                o = r.style.overflow,
                l = r.style.paddingRight,
                a = n.innerWidth - r.clientWidth;
              return (
                (r.style.overflow = "hidden"),
                (r.style.paddingRight = `${a}px`),
                () => {
                  (r.style.overflow = o), (r.style.paddingRight = l);
                }
              );
            }, [M, G]),
            (0, n.useEffect)(() => {
              if (0 !== M || !C.current) return;
              let e = new IntersectionObserver((e) => {
                for (let t of e)
                  0 === t.boundingClientRect.x &&
                    0 === t.boundingClientRect.y &&
                    0 === t.boundingClientRect.width &&
                    0 === t.boundingClientRect.height &&
                    L();
              });
              return e.observe(C.current), () => e.disconnect();
            }, [M, C, L]);
          let [j, Z] = N(),
            J = `headlessui-dialog-${(0, s.M)()}`,
            W = (0, n.useMemo)(
              () => [{ dialogState: M, close: L, setTitleId: V }, A],
              [M, A, L, V]
            ),
            X = (0, n.useMemo)(() => ({ open: 0 === M }), [M]),
            ee = {
              ref: P,
              id: J,
              role: "dialog",
              "aria-modal": 0 === M || void 0,
              "aria-labelledby": A.titleId,
              "aria-describedby": j,
              onClick(e) {
                e.stopPropagation();
              },
            };
          return n.createElement(
            Q,
            {
              type: "Dialog",
              element: C,
              onUpdate: (0, n.useCallback)((e, t, r) => {
                "Dialog" === t &&
                  (0, o.E)(e, {
                    [B.Add]() {
                      I.current.add(r), R((e) => e + 1);
                    },
                    [B.Remove]() {
                      I.current.add(r), R((e) => e - 1);
                    },
                  });
              }, []),
            },
            n.createElement(
              k,
              { force: !0 },
              n.createElement(
                F,
                null,
                n.createElement(
                  K.Provider,
                  { value: W },
                  n.createElement(
                    F.Group,
                    { target: C },
                    n.createElement(
                      k,
                      { force: !1 },
                      n.createElement(
                        Z,
                        { slot: X, name: "Dialog.Description" },
                        (0, l.sY)({
                          ourProps: ee,
                          theirProps: y,
                          slot: X,
                          defaultTag: "div",
                          features: z,
                          visible: 0 === M,
                          name: "Dialog",
                        })
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        W = (0, l.yV)(function (e, t) {
          let [{ dialogState: r, close: o }] = Z("Dialog.Overlay"),
            i = (0, a.T)(t),
            c = `headlessui-dialog-overlay-${(0, s.M)()}`,
            d = (0, n.useCallback)(
              (e) => {
                if (e.target === e.currentTarget) {
                  if ((0, u.P)(e.currentTarget)) return e.preventDefault();
                  e.preventDefault(), e.stopPropagation(), o();
                }
              },
              [o]
            ),
            f = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: i, id: c, "aria-hidden": !0, onClick: d }, theirProps: e, slot: f, defaultTag: "div", name: "Dialog.Overlay" });
        }),
        X = (0, l.yV)(function (e, t) {
          let [{ dialogState: r }, o] = Z("Dialog.Backdrop"),
            i = (0, a.T)(t),
            u = `headlessui-dialog-backdrop-${(0, s.M)()}`;
          (0, n.useEffect)(() => {
            if (null === o.panelRef.current)
              throw new Error(
                "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
              );
          }, [o.panelRef]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return n.createElement(
            k,
            { force: !0 },
            n.createElement(
              F,
              null,
              (0, l.sY)({
                ourProps: { ref: i, id: u, "aria-hidden": !0 },
                theirProps: e,
                slot: c,
                defaultTag: "div",
                name: "Dialog.Backdrop",
              })
            )
          );
        }),
        ee = (0, l.yV)(function (e, t) {
          let [{ dialogState: r }, o] = Z("Dialog.Panel"),
            i = (0, a.T)(t, o.panelRef),
            u = `headlessui-dialog-panel-${(0, s.M)()}`,
            c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: i, id: u }, theirProps: e, slot: c, defaultTag: "div", name: "Dialog.Panel" });
        }),
        te = (0, l.yV)(function (e, t) {
          let [{ dialogState: r, setTitleId: o }] = Z("Dialog.Title"),
            i = `headlessui-dialog-title-${(0, s.M)()}`,
            u = (0, a.T)(t);
          (0, n.useEffect)(() => (o(i), () => o(null)), [i, o]);
          let c = (0, n.useMemo)(() => ({ open: 0 === r }), [r]);
          return (0,
          l.sY)({ ourProps: { ref: u, id: i }, theirProps: e, slot: c, defaultTag: "h2", name: "Dialog.Title" });
        }),
        re = Object.assign(J, {
          Backdrop: X,
          Panel: ee,
          Overlay: W,
          Title: te,
          Description: V,
        });
    },
    72510: function (e, t, r) {
      r.d(t, {
        v: function () {
          return V;
        },
      });
      var n,
        o,
        l = r(67294),
        a = r(32984),
        i = r(12351),
        u = r(9362),
        s = r(94192),
        c = r(16723),
        d = r(23784),
        f = r(19946),
        p = r(61363),
        v = r(11497),
        m = r(64103),
        g = r(84575),
        h = r(4503),
        y = r(31591),
        b = r(16567),
        R = r(14157),
        E = r(51074),
        T =
          (((o = T || {})[(o.Open = 0)] = "Open"),
          (o[(o.Closed = 1)] = "Closed"),
          o),
        I = ((e) => (
          (e[(e.Pointer = 0)] = "Pointer"), (e[(e.Other = 1)] = "Other"), e
        ))(I || {}),
        C =
          (((n = C || {})[(n.OpenMenu = 0)] = "OpenMenu"),
          (n[(n.CloseMenu = 1)] = "CloseMenu"),
          (n[(n.GoToItem = 2)] = "GoToItem"),
          (n[(n.Search = 3)] = "Search"),
          (n[(n.ClearSearch = 4)] = "ClearSearch"),
          (n[(n.RegisterItem = 5)] = "RegisterItem"),
          (n[(n.UnregisterItem = 6)] = "UnregisterItem"),
          n);
      function P(e, t = (e) => e) {
        let r = null !== e.activeItemIndex ? e.items[e.activeItemIndex] : null,
          n = (0, g.z2)(
            t(e.items.slice()),
            (e) => e.dataRef.current.domRef.current
          ),
          o = r ? n.indexOf(r) : null;
        return -1 === o && (o = null), { items: n, activeItemIndex: o };
      }
      let k = {
          1: (e) =>
            1 === e.menuState
              ? e
              : { ...e, activeItemIndex: null, menuState: 1 },
          0: (e) => (0 === e.menuState ? e : { ...e, menuState: 0 }),
          2: (e, t) => {
            var r;
            let n = P(e),
              o = (0, v.d)(t, {
                resolveItems: () => n.items,
                resolveActiveIndex: () => n.activeItemIndex,
                resolveId: (e) => e.id,
                resolveDisabled: (e) => e.dataRef.current.disabled,
              });
            return {
              ...e,
              ...n,
              searchQuery: "",
              activeItemIndex: o,
              activationTrigger: null != (r = t.trigger) ? r : 1,
            };
          },
          3: (e, t) => {
            let r = "" !== e.searchQuery ? 0 : 1,
              n = e.searchQuery + t.value.toLowerCase(),
              o = (
                null !== e.activeItemIndex
                  ? e.items
                      .slice(e.activeItemIndex + r)
                      .concat(e.items.slice(0, e.activeItemIndex + r))
                  : e.items
              ).find((e) => {
                var t;
                return (
                  (null == (t = e.dataRef.current.textValue)
                    ? void 0
                    : t.startsWith(n)) && !e.dataRef.current.disabled
                );
              }),
              l = o ? e.items.indexOf(o) : -1;
            return -1 === l || l === e.activeItemIndex
              ? { ...e, searchQuery: n }
              : {
                  ...e,
                  searchQuery: n,
                  activeItemIndex: l,
                  activationTrigger: 1,
                };
          },
          4: (e) =>
            "" === e.searchQuery
              ? e
              : { ...e, searchQuery: "", searchActiveItemIndex: null },
          5: (e, t) => {
            let r = P(e, (e) => [...e, { id: t.id, dataRef: t.dataRef }]);
            return { ...e, ...r };
          },
          6: (e, t) => {
            let r = P(e, (e) => {
              let r = e.findIndex((e) => e.id === t.id);
              return -1 !== r && e.splice(r, 1), e;
            });
            return { ...e, ...r, activationTrigger: 1 };
          },
        },
        S = (0, l.createContext)(null);
      function w(e) {
        let t = (0, l.useContext)(S);
        if (null === t) {
          let t = new Error(`<${e} /> is missing a parent <Menu /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, w), t);
        }
        return t;
      }
      function x(e, t) {
        return (0, a.E)(t.type, k, e, t);
      }
      S.displayName = "MenuContext";
      let D = l.Fragment,
        M = (0, i.yV)(function (e, t) {
          let r = (0, l.useReducer)(x, {
              menuState: 1,
              buttonRef: (0, l.createRef)(),
              itemsRef: (0, l.createRef)(),
              items: [],
              searchQuery: "",
              activeItemIndex: null,
              activationTrigger: 1,
            }),
            [{ menuState: n, itemsRef: o, buttonRef: u }, s] = r,
            c = (0, d.T)(t);
          (0, h.O)([u, o], (e, t) => {
            var r;
            0 === n &&
              (s({ type: 1 }),
              (0, g.sP)(t, g.tJ.Loose) ||
                (e.preventDefault(), null == (r = u.current) || r.focus()));
          });
          let f = (0, l.useMemo)(() => ({ open: 0 === n }), [n]),
            p = e,
            v = { ref: c };
          return l.createElement(
            S.Provider,
            { value: r },
            l.createElement(
              b.up,
              { value: (0, a.E)(n, { 0: b.ZM.Open, 1: b.ZM.Closed }) },
              (0, i.sY)({
                ourProps: v,
                theirProps: p,
                slot: f,
                defaultTag: D,
                name: "Menu",
              })
            )
          );
        }),
        A = (0, i.yV)(function (e, t) {
          var r;
          let [n, o] = w("Menu.Button"),
            a = (0, d.T)(n.buttonRef, t),
            u = `headlessui-menu-button-${(0, f.M)()}`,
            c = (0, s.G)(),
            g = (0, l.useCallback)(
              (e) => {
                switch (e.key) {
                  case p.R.Space:
                  case p.R.Enter:
                  case p.R.ArrowDown:
                    e.preventDefault(),
                      e.stopPropagation(),
                      o({ type: 0 }),
                      c.nextFrame(() => o({ type: 2, focus: v.T.First }));
                    break;
                  case p.R.ArrowUp:
                    e.preventDefault(),
                      e.stopPropagation(),
                      o({ type: 0 }),
                      c.nextFrame(() => o({ type: 2, focus: v.T.Last }));
                }
              },
              [o, c]
            ),
            h = (0, l.useCallback)((e) => {
              if (e.key === p.R.Space) e.preventDefault();
            }, []),
            y = (0, l.useCallback)(
              (t) => {
                if ((0, m.P)(t.currentTarget)) return t.preventDefault();
                e.disabled ||
                  (0 === n.menuState
                    ? (o({ type: 1 }),
                      c.nextFrame(() => {
                        var e;
                        return null == (e = n.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      }))
                    : (t.preventDefault(),
                      t.stopPropagation(),
                      o({ type: 0 })));
              },
              [o, c, n, e.disabled]
            ),
            b = (0, l.useMemo)(() => ({ open: 0 === n.menuState }), [n]),
            E = e,
            T = {
              ref: a,
              id: u,
              type: (0, R.f)(e, n.buttonRef),
              "aria-haspopup": !0,
              "aria-controls": null == (r = n.itemsRef.current) ? void 0 : r.id,
              "aria-expanded": e.disabled ? void 0 : 0 === n.menuState,
              onKeyDown: g,
              onKeyUp: h,
              onClick: y,
            };
          return (0,
          i.sY)({ ourProps: T, theirProps: E, slot: b, defaultTag: "button", name: "Menu.Button" });
        }),
        F = i.AN.RenderStrategy | i.AN.Static,
        O = (0, i.yV)(function (e, t) {
          var r, n;
          let [o, a] = w("Menu.Items"),
            c = (0, d.T)(o.itemsRef, t),
            m = (0, E.i)(o.itemsRef),
            g = `headlessui-menu-items-${(0, f.M)()}`,
            h = (0, s.G)(),
            R = (0, b.oJ)(),
            T = null !== R ? R === b.ZM.Open : 0 === o.menuState;
          (0, l.useEffect)(() => {
            let e = o.itemsRef.current;
            !e ||
              (0 === o.menuState &&
                e !== (null == m ? void 0 : m.activeElement) &&
                e.focus({ preventScroll: !0 }));
          }, [o.menuState, o.itemsRef, m]),
            (0, y.B)({
              container: o.itemsRef.current,
              enabled: 0 === o.menuState,
              accept: (e) =>
                "menuitem" === e.getAttribute("role")
                  ? NodeFilter.FILTER_REJECT
                  : e.hasAttribute("role")
                  ? NodeFilter.FILTER_SKIP
                  : NodeFilter.FILTER_ACCEPT,
              walk(e) {
                e.setAttribute("role", "none");
              },
            });
          let I = (0, l.useCallback)(
              (e) => {
                var t, r;
                switch ((h.dispose(), e.key)) {
                  case p.R.Space:
                    if ("" !== o.searchQuery)
                      return (
                        e.preventDefault(),
                        e.stopPropagation(),
                        a({ type: 3, value: e.key })
                      );
                  case p.R.Enter:
                    if (
                      (e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 1 }),
                      null !== o.activeItemIndex)
                    ) {
                      let { dataRef: e } = o.items[o.activeItemIndex];
                      null ==
                        (r =
                          null == (t = e.current)
                            ? void 0
                            : t.domRef.current) || r.click();
                    }
                    (0, u.k)().nextFrame(() => {
                      var e;
                      return null == (e = o.buttonRef.current)
                        ? void 0
                        : e.focus({ preventScroll: !0 });
                    });
                    break;
                  case p.R.ArrowDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 2, focus: v.T.Next })
                    );
                  case p.R.ArrowUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 2, focus: v.T.Previous })
                    );
                  case p.R.Home:
                  case p.R.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 2, focus: v.T.First })
                    );
                  case p.R.End:
                  case p.R.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 2, focus: v.T.Last })
                    );
                  case p.R.Escape:
                    e.preventDefault(),
                      e.stopPropagation(),
                      a({ type: 1 }),
                      (0, u.k)().nextFrame(() => {
                        var e;
                        return null == (e = o.buttonRef.current)
                          ? void 0
                          : e.focus({ preventScroll: !0 });
                      });
                    break;
                  case p.R.Tab:
                    e.preventDefault(), e.stopPropagation();
                    break;
                  default:
                    1 === e.key.length &&
                      (a({ type: 3, value: e.key }),
                      h.setTimeout(() => a({ type: 4 }), 350));
                }
              },
              [a, h, o, m]
            ),
            C = (0, l.useCallback)((e) => {
              if (e.key === p.R.Space) e.preventDefault();
            }, []),
            P = (0, l.useMemo)(() => ({ open: 0 === o.menuState }), [o]),
            k = e,
            S = {
              "aria-activedescendant":
                null === o.activeItemIndex ||
                null == (r = o.items[o.activeItemIndex])
                  ? void 0
                  : r.id,
              "aria-labelledby":
                null == (n = o.buttonRef.current) ? void 0 : n.id,
              id: g,
              onKeyDown: I,
              onKeyUp: C,
              role: "menu",
              tabIndex: 0,
              ref: c,
            };
          return (0,
          i.sY)({ ourProps: S, theirProps: k, slot: P, defaultTag: "div", features: F, visible: T, name: "Menu.Items" });
        }),
        L = l.Fragment,
        N = (0, i.yV)(function (e, t) {
          let { disabled: r = !1, ...n } = e,
            [o, a] = w("Menu.Item"),
            s = `headlessui-menu-item-${(0, f.M)()}`,
            p =
              null !== o.activeItemIndex && o.items[o.activeItemIndex].id === s,
            m = (0, l.useRef)(null),
            g = (0, d.T)(t, m);
          (0, c.e)(() => {
            if (0 !== o.menuState || !p || 0 === o.activationTrigger) return;
            let e = (0, u.k)();
            return (
              e.requestAnimationFrame(() => {
                var e, t;
                null ==
                  (t = null == (e = m.current) ? void 0 : e.scrollIntoView) ||
                  t.call(e, { block: "nearest" });
              }),
              e.dispose
            );
          }, [m, p, o.menuState, o.activationTrigger, o.activeItemIndex]);
          let h = (0, l.useRef)({ disabled: r, domRef: m });
          (0, c.e)(() => {
            h.current.disabled = r;
          }, [h, r]),
            (0, c.e)(() => {
              var e, t;
              h.current.textValue =
                null == (t = null == (e = m.current) ? void 0 : e.textContent)
                  ? void 0
                  : t.toLowerCase();
            }, [h, m]),
            (0, c.e)(
              () => (
                a({ type: 5, id: s, dataRef: h }), () => a({ type: 6, id: s })
              ),
              [h, s]
            );
          let y = (0, l.useCallback)(
              (e) => {
                if (r) return e.preventDefault();
                a({ type: 1 }),
                  (0, u.k)().nextFrame(() => {
                    var e;
                    return null == (e = o.buttonRef.current)
                      ? void 0
                      : e.focus({ preventScroll: !0 });
                  });
              },
              [a, o.buttonRef, r]
            ),
            b = (0, l.useCallback)(() => {
              if (r) return a({ type: 2, focus: v.T.Nothing });
              a({ type: 2, focus: v.T.Specific, id: s });
            }, [r, s, a]),
            R = (0, l.useCallback)(() => {
              r || p || a({ type: 2, focus: v.T.Specific, id: s, trigger: 0 });
            }, [r, p, s, a]),
            E = (0, l.useCallback)(() => {
              r || !p || a({ type: 2, focus: v.T.Nothing });
            }, [r, p, a]),
            T = (0, l.useMemo)(() => ({ active: p, disabled: r }), [p, r]);
          return (0,
          i.sY)({ ourProps: { id: s, ref: g, role: "menuitem", tabIndex: !0 === r ? void 0 : -1, "aria-disabled": !0 === r || void 0, disabled: void 0, onClick: y, onFocus: b, onPointerMove: R, onMouseMove: R, onPointerLeave: E, onMouseLeave: E }, theirProps: n, slot: T, defaultTag: L, name: "Menu.Item" });
        }),
        V = Object.assign(M, { Button: A, Items: O, Item: N });
    },
    51074: function (e, t, r) {
      r.d(t, {
        i: function () {
          return l;
        },
      });
      var n = r(67294),
        o = r(15466);
      function l(...e) {
        return (0, n.useMemo)(() => (0, o.r)(...e), [...e]);
      }
    },
  },
]);
