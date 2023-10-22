"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3175],
  {
    73175: function (l, e, o) {
      o.r(e),
        o.d(e, {
          default: function () {
            return w;
          },
        });
      var i = o(26042),
        n = o(85893),
        t = o(31996),
        s = o(67294),
        a = o(52077),
        d = o(90387),
        r = o(41664),
        c = o.n(r),
        u = o(72510),
        v = o(11355),
        h = o(51961),
        m = o(32713),
        f = o(65710),
        x = o(43751),
        g = o(41984),
        p = o(3677),
        y = o(74007),
        b = o(75654),
        j = [
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
      function w(l) {
        var e,
          o,
          r,
          w,
          N,
          k,
          C,
          A,
          F,
          S,
          _,
          Z,
          K,
          R,
          T,
          P = l.website,
          E = (0, t.ac)("(max-width: 1023px)"),
          Q = (0, t.ac)("(max-width: 767px)"),
          W = (0, s.useState)(!1),
          L = W[0],
          B = W[1],
          z = (0, s.useState)("#FFFFFF"),
          M = z[0],
          V = z[1],
          D = (0, s.useState)("#000000"),
          O = D[0],
          H = D[1],
          q = (0, s.useState)(null),
          I = q[0],
          Y = q[1],
          $ = (0, s.useState)(!1),
          G = $[0],
          J = $[1],
          U = (0, s.useState)({ combine: !1 }),
          X = U[0],
          ll = U[1],
          el = (0, d.useRouter)(),
          ol = (0, s.useRef)(null),
          il =
            null === P || void 0 === P || null === (e = P.pages) || void 0 === e
              ? void 0
              : e.find(function (l) {
                  return !l.slug && l.default;
                }),
          nl = null === P || void 0 === P ? void 0 : P.header,
          tl =
            null ===
              (r =
                null === (o = P.pages) || void 0 === o
                  ? void 0
                  : o.filter(function (l) {
                      return (
                        (!0 === l.showOnHeader || void 0 === l.showOnHeader) &&
                        null !== l.slug
                      );
                    })) || void 0 === r
              ? void 0
              : r
                  .map(function (l) {
                    var e = {
                      href: "/".concat(l.slug || ""),
                      name: l.label,
                      current:
                        el.asPath === "/".concat(l.slug || "") ||
                        el.asPath.includes("/".concat(l.slug, "/")),
                      type: l.type,
                      forceRender: l.forceRender,
                    };
                    return "parent" === e.type &&
                      ((e.nests = P.pages
                        .filter(function (e) {
                          return e.Parent === l._id;
                        })
                        .map(function (e) {
                          return {
                            href: "/".concat(l.slug, "/").concat(e.slug || ""),
                            name: e.label,
                            current:
                              el.asPath ===
                              "/".concat(l.slug, "/").concat(e.slug || ""),
                            forceRender: e.forceRender,
                          };
                        })),
                      0 === e.nests.length)
                      ? null
                      : e;
                  })
                  .filter(function (l) {
                    return null !== l && "nested" !== l.type;
                  }),
          sl =
            (null === X || void 0 === X ? void 0 : X.combine) &&
            (!(null === nl || void 0 === nl ? void 0 : nl.sticky) || !G),
          al = function () {
            return (0, n.jsx)("div", {
              className: (0, t.AK)("hidden lg:flex items-center flex-shrink-0"),
              children: (0, n.jsx)(a.Z, {
                className: "xl !text-2xl !py-1.5",
                button: null === nl || void 0 === nl ? void 0 : nl.button,
                block: nl,
                website: P,
              }),
            });
          },
          dl = function (l, e) {
            return (0, n.jsx)("ul", {
              className: (0, t.AK)(
                "lg:flex items-center gap-x-4 gap-y-2 flex-wrap",
                "full-center" !== l ? "justify-end" : "",
                !e && "hidden"
              ),
              children:
                Array.isArray(P.social) &&
                P.social.map(function (l, e) {
                  var o = j.find(function (e) {
                      return e.id === l.type;
                    }),
                    i = l.link;
                  return (
                    "custom" !== l.type &&
                      ((i = (i = l.link
                        .replace(
                          /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                          ""
                        )
                        .replace(/https?:/g, "")
                        .replace(/^\/\/?/g, "")).replace(
                        null === o || void 0 === o ? void 0 : o.host,
                        ""
                      )),
                      (i = "https://"
                        .concat(
                          null === o || void 0 === o ? void 0 : o.host,
                          "/"
                        )
                        .concat(i))),
                    (0, n.jsx)(
                      "li",
                      {
                        children: (0, n.jsx)(c(), {
                          href: i,
                          children: (0, n.jsx)("a", {
                            target: "_blank",
                            children: (0, n.jsx)(b.Q, {
                              icon: l,
                              color: sl ? X.textColor : O,
                              settings: P.socialSettings,
                            }),
                          }),
                        }),
                      },
                      "social-icon-header-".concat(e)
                    )
                  );
                }),
            });
          },
          rl = function (l) {
            var e, o, s, a;
            return (null === nl || void 0 === nl ? void 0 : nl.showLogo) &&
              "branding" ===
                (null === nl || void 0 === nl ? void 0 : nl.source) &&
              (null === P || void 0 === P ? void 0 : P.logo)
              ? (0, n.jsx)(c(), {
                  href: "/",
                  children: (0, n.jsxs)("a", {
                    className: "max-w-full overflow-hidden grid",
                    target: (
                      null === il || void 0 === il ? void 0 : il.forceRender
                    )
                      ? "_parent"
                      : "_self",
                    children: [
                      (0, t.QW)(null === P || void 0 === P ? void 0 : P.logo) &&
                        (0, n.jsx)("img", {
                          className:
                            "hidden lg:block transition-all object-contain",
                          src: (0, t.QW)(
                            null === P || void 0 === P ? void 0 : P.logo
                          ),
                          alt:
                            null === nl || void 0 === nl ? void 0 : nl.siteName,
                          style: {
                            height:
                              ((null === nl ||
                              void 0 === nl ||
                              null === (e = nl.logoDesktop) ||
                              void 0 === e
                                ? void 0
                                : e.height) || 80) + "px",
                          },
                        }),
                      (0, t.QW)(null === P || void 0 === P ? void 0 : P.logo) &&
                        (0, n.jsx)("img", {
                          className: "lg:hidden transition-all object-contain",
                          src: (0, t.QW)(
                            null === P || void 0 === P ? void 0 : P.logo
                          ),
                          alt:
                            null === nl || void 0 === nl ? void 0 : nl.siteName,
                          style: {
                            height:
                              ((null === nl ||
                              void 0 === nl ||
                              null === (o = nl.logoMobile) ||
                              void 0 === o
                                ? void 0
                                : o.height) || 40) + "px",
                          },
                        }),
                    ],
                  }),
                })
              : (null === nl || void 0 === nl ? void 0 : nl.showLogo) &&
                "upload" ===
                  (null === nl || void 0 === nl ? void 0 : nl.source) &&
                (null === nl || void 0 === nl ? void 0 : nl.customLogo)
              ? (0, n.jsx)(c(), {
                  href: "/",
                  children: (0, n.jsxs)("a", {
                    className: "max-w-full overflow-hidden grid",
                    target: (
                      null === il || void 0 === il ? void 0 : il.forceRender
                    )
                      ? "_parent"
                      : "_self",
                    children: [
                      (0, t.QW)(
                        null === nl || void 0 === nl ? void 0 : nl.customLogo
                      ) &&
                        (0, n.jsx)("img", {
                          className:
                            "hidden lg:block transition-all object-contain",
                          src: (0, t.QW)(
                            null === nl || void 0 === nl
                              ? void 0
                              : nl.customLogo
                          ),
                          alt:
                            null === nl || void 0 === nl ? void 0 : nl.siteName,
                          style: {
                            height:
                              ((null === nl ||
                              void 0 === nl ||
                              null === (s = nl.logoDesktop) ||
                              void 0 === s
                                ? void 0
                                : s.height) || 80) + "px",
                          },
                        }),
                      (0, t.QW)(
                        null === nl || void 0 === nl ? void 0 : nl.customLogo
                      ) &&
                        (0, n.jsx)("img", {
                          className: "lg:hidden transition-all object-contain",
                          src: (0, t.QW)(
                            null === nl || void 0 === nl
                              ? void 0
                              : nl.customLogo
                          ),
                          alt:
                            null === nl || void 0 === nl ? void 0 : nl.siteName,
                          style: {
                            height:
                              ((null === nl ||
                              void 0 === nl ||
                              null === (a = nl.logoMobile) ||
                              void 0 === a
                                ? void 0
                                : a.height) || 40) + "px",
                          },
                        }),
                    ],
                  }),
                })
              : (0, n.jsx)(c(), {
                  href: "/",
                  children: (0, n.jsx)("a", {
                    className: "max-w-full overflow-hidden grid",
                    target: (
                      null === il || void 0 === il ? void 0 : il.forceRender
                    )
                      ? "_parent"
                      : "_self",
                    children: (0, n.jsx)("h1", {
                      className:
                        "heading-small lg:heading-medium overflow-hidden whitespace-nowrap overflow-ellipsis",
                      style: (0, i.Z)(
                        { color: sl && !l ? X.textColor : O },
                        (0, t.j2)(P)
                      ),
                      children:
                        null === nl || void 0 === nl ? void 0 : nl.siteName,
                    }),
                  }),
                });
          },
          cl = function (l) {
            var e;
            if (0 === (null === tl || void 0 === tl ? void 0 : tl.length))
              return (0, n.jsx)(n.Fragment, {});
            var o = (0, t.h)(M, -10);
            return (
              (o !== O && o !== M) || (o = (0, t.h)(M, 10)),
              (0, n.jsx)("ul", {
                className: (0, t.AK)(
                  !(null === nl ||
                  void 0 === nl ||
                  null === (e = nl.menu) ||
                  void 0 === e
                    ? void 0
                    : e.collapse) && "lg:flex",
                  "hidden items-center flex-wrap gap-x-6",
                  "left" === l && "justify-end",
                  "full-center" === l && "justify-center"
                ),
                style: { color: sl ? X.textColor : O },
                children:
                  null === tl || void 0 === tl
                    ? void 0
                    : tl.map(function (l) {
                        var e;
                        return (0, n.jsx)(
                          "li",
                          {
                            className: "border-b-2",
                            style: {
                              borderColor: l.current
                                ? "".concat(sl ? X.textColor : O)
                                : "transparent",
                            },
                            children:
                              "parent" === l.type
                                ? (0, n.jsx)(y.Z, {
                                    buttonClassName:
                                      "inline-flex items-center gap-2 py-1.5",
                                    itemsContainerClass:
                                      "!pl-6 !pr-12 w-max max-w-120 !max-h-[80vh] no-scrollbar",
                                    button: (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)("span", {
                                          className:
                                            "body-normal whitespace-nowrap",
                                          children: l.name,
                                        }),
                                        (0, n.jsx)(m.Z, {
                                          className: "w-4 h-4",
                                        }),
                                      ],
                                    }),
                                    itemsContainerStyle: {
                                      backgroundColor: o,
                                      color: sl ? X.textColor : O,
                                    },
                                    children:
                                      null === (e = l.nests) || void 0 === e
                                        ? void 0
                                        : e.map(function (l) {
                                            return (0,
                                            n.jsx)(u.v.Item, { children: (0, n.jsx)(c(), { className: "block py-2 body-normal border-b-2", href: l.href, legacyBehavior: !1, target: l.forceRender ? "_parent" : "_self", style: { borderColor: l.current ? "".concat(sl ? X.textColor : O) : "transparent" }, children: l.name }) }, "page-link-".concat(l.href));
                                          }),
                                  })
                                : (0, n.jsx)(c(), {
                                    className:
                                      "block py-1.5 body-normal whitespace-nowrap",
                                    legacyBehavior: !1,
                                    href: l.href,
                                    target: l.forceRender ? "_parent" : "_self",
                                    children: l.name,
                                  }),
                          },
                          "header-page-link-".concat(l.href)
                        );
                      }),
              })
            );
          },
          ul = function () {
            var l;
            return 0 === (null === tl || void 0 === tl ? void 0 : tl.length)
              ? (0, n.jsx)(n.Fragment, {})
              : (
                  null === nl ||
                  void 0 === nl ||
                  null === (l = nl.menu) ||
                  void 0 === l
                    ? void 0
                    : l.collapse
                )
              ? (0, n.jsxs)("button", {
                  className: (0, t.AK)(
                    "hidden lg:inline-flex items-center justify-center p-2 rounded-md font-light gap-2 ",
                    L ? "pointer-events-none" : "hover:opacity-80"
                  ),
                  style: { color: sl ? X.textColor : O },
                  onClick: function () {
                    return B(!0);
                  },
                  children: [
                    "Menu ",
                    (0, n.jsx)(f.Z, {
                      className: "block h-5 w-5",
                      "aria-hidden": "true",
                    }),
                  ],
                })
              : null;
          },
          vl = function (l) {
            var e,
              o,
              i = {
                none: { top: "pt-0", bottom: "pb-0" },
                small: { top: "pt-4", bottom: "pb-4" },
                medium: { top: "pt-6", bottom: "pb-6" },
                large: { top: "pt-8", bottom: "pb-8" },
              },
              n =
                (null ===
                  (e = i[null === l || void 0 === l ? void 0 : l.top]) ||
                void 0 === e
                  ? void 0
                  : e.top) || i.medium.top,
              t =
                (null ===
                  (o = i[null === l || void 0 === l ? void 0 : l.bottom]) ||
                void 0 === o
                  ? void 0
                  : o.bottom) || i.medium.bottom;
            return "".concat(n, " ").concat(t);
          },
          hl = function () {
            J(window.scrollY > 0);
          },
          ml = function (l) {
            var e = document.querySelector("[data-combine-with-header]");
            if (e) {
              var o =
                null === e || void 0 === e
                  ? void 0
                  : e.getAttribute("data-combine-with-header");
              ll(function (i) {
                return (
                  l < 10 &&
                    (null === e || void 0 === e
                      ? void 0
                      : e.getAttribute("data-text-color")) !== i.textColor &&
                    setTimeout(function () {
                      ml(l + 1);
                    }, 100 * l),
                  {
                    combine: !0 === o || "true" === o,
                    textColor:
                      null === e || void 0 === e
                        ? void 0
                        : e.getAttribute("data-text-color"),
                  }
                );
              });
            } else
              ll(function (o) {
                return (
                  l < 10 &&
                    (null === e || void 0 === e
                      ? void 0
                      : e.getAttribute("data-text-color")) !== o.textColor &&
                    setTimeout(function () {
                      ml(l + 1);
                    }, 100 * l),
                  { combine: !1, textColor: null }
                );
              });
          };
        return (
          (0, s.useEffect)(
            function () {
              if (nl) {
                var l, e, o;
                if (nl.layers)
                  if ("custom" === nl.layers.palette) {
                    var i;
                    V(
                      (null === (i = nl.layers.overlay) || void 0 === i
                        ? void 0
                        : i.color1) || "#FFFFFF"
                    );
                  } else {
                    var n,
                      s,
                      a =
                        (null === P ||
                        void 0 === P ||
                        null === (n = P.colorPalette) ||
                        void 0 === n
                          ? void 0
                          : n.Palette) ||
                        (null === P || void 0 === P ? void 0 : P.colorPalette);
                    V(
                      (0, t.ow)(
                        a,
                        null === (s = nl.layers) || void 0 === s
                          ? void 0
                          : s.palette,
                        "color"
                      )
                    );
                  }
                else V(nl.background || "#FFFFFF");
                if (null === nl.siteName || void 0 === nl.siteName)
                  nl.siteName =
                    null === P ||
                    void 0 === P ||
                    null === (o = P.Business) ||
                    void 0 === o
                      ? void 0
                      : o.name;
                nl.style || (nl.style = "left"),
                  (null === (l = nl.logoDesktop) || void 0 === l
                    ? void 0
                    : l.height) || (nl.logoDesktop = { height: 80 }),
                  (null === (e = nl.logoMobile) || void 0 === e
                    ? void 0
                    : e.height) || (nl.logoMobile = { height: 40 }),
                  nl.sticky &&
                    (null === ol || void 0 === ol ? void 0 : ol.current) &&
                    (document.documentElement.style.scrollPaddingTop =
                      ol.current.clientHeight + "px");
              }
            },
            [nl]
          ),
          (0, s.useEffect)(
            function () {
              ml(0);
            },
            [el.asPath]
          ),
          (0, s.useEffect)(
            function () {
              M && H((0, t.$O)(M));
            },
            [M]
          ),
          (0, s.useEffect)(
            function () {
              B(!1), Y(null);
            },
            [el.asPath, E]
          ),
          (0, s.useEffect)(function () {
            return (
              window.addEventListener("scroll", hl),
              function () {
                window.removeEventListener("scroll", hl);
              }
            );
          }, []),
          (0, n.jsxs)(n.Fragment, {
            children: [
              (0, n.jsx)("header", {
                id: "website-header",
                ref: ol,
                className: (0, t.AK)(
                  "!z-[2000]",
                  (null === nl || void 0 === nl ? void 0 : nl.sticky)
                    ? "sticky top-0 transition-colors"
                    : "",
                  ((null === nl || void 0 === nl ? void 0 : nl.sticky) &&
                    !X.combine) ||
                    ((null === nl || void 0 === nl ? void 0 : nl.sticky) && G)
                    ? "shadow"
                    : ""
                ),
                style: {
                  backgroundColor: sl ? "transparent" : M,
                  color: sl ? X.textColor : O,
                },
                children: (0, n.jsx)("div", {
                  className: (0, t.AK)(
                    "grid items-center lg:gap-6 xl:gap-10 mx-auto",
                    vl(null === nl || void 0 === nl ? void 0 : nl.spacing),
                    (null === nl || void 0 === nl ? void 0 : nl.fullWidth)
                      ? "px-6 lg:px-12"
                      : "container"
                  ),
                  style:
                    ((T = null === nl || void 0 === nl ? void 0 : nl.style),
                    "center" === T
                      ? { gridTemplateColumns: "1fr auto 1fr" }
                      : "full-center" === T
                      ? (null === tl || void 0 === tl ? void 0 : tl.length) > 6
                        ? { gridTemplateColumns: "1fr 4fr 1fr" }
                        : { gridTemplateColumns: "1fr auto 1fr" }
                      : { gridTemplateColumns: "auto auto auto" }),
                  children:
                    "center" ===
                    (null === nl || void 0 === nl ? void 0 : nl.style)
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsxs)("div", {
                              className: "lg:w-auto whitespace-nowrap",
                              children: [
                                cl(
                                  null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style
                                ),
                                ul(),
                              ],
                            }),
                            (0, n.jsx)("div", {
                              className: "flex justify-center truncate",
                              children: rl(),
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex justify-end",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "hidden lg:flex item-center gap-10",
                                  children: [
                                    (null === nl || void 0 === nl
                                      ? void 0
                                      : nl.showSocial) &&
                                      dl(
                                        null === nl || void 0 === nl
                                          ? void 0
                                          : nl.style
                                      ),
                                    (null === nl || void 0 === nl
                                      ? void 0
                                      : nl.button) && al(),
                                  ],
                                }),
                                (0, n.jsxs)("div", {
                                  className: "ml-auto lg:hidden",
                                  children: [
                                    ((null === nl || void 0 === nl
                                      ? void 0
                                      : nl.button) ||
                                      (null === tl || void 0 === tl
                                        ? void 0
                                        : tl.length) > 0 ||
                                      ((null === nl || void 0 === nl
                                        ? void 0
                                        : nl.showSocial) &&
                                        Array.isArray(
                                          null === P || void 0 === P
                                            ? void 0
                                            : P.social
                                        ) &&
                                        (null === P ||
                                        void 0 === P ||
                                        null === (w = P.social) ||
                                        void 0 === w
                                          ? void 0
                                          : w.length) > 1)) &&
                                      (0, n.jsx)("button", {
                                        className:
                                          "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: { color: sl ? X.textColor : O },
                                        onClick: function () {
                                          return B(!0);
                                        },
                                        children: (0, n.jsx)(f.Z, {
                                          className: "block h-5 w-5",
                                          "aria-hidden": "true",
                                        }),
                                      }),
                                    !(null === nl || void 0 === nl
                                      ? void 0
                                      : nl.button) &&
                                      0 ===
                                        (null === tl || void 0 === tl
                                          ? void 0
                                          : tl.length) &&
                                      (null === nl || void 0 === nl
                                        ? void 0
                                        : nl.showSocial) &&
                                      Array.isArray(
                                        null === P || void 0 === P
                                          ? void 0
                                          : P.social
                                      ) &&
                                      1 ===
                                        (null === P ||
                                        void 0 === P ||
                                        null === (N = P.social) ||
                                        void 0 === N
                                          ? void 0
                                          : N.length) &&
                                      dl(
                                        null === nl || void 0 === nl
                                          ? void 0
                                          : nl.style,
                                        !0
                                      ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : "full-center" ===
                        (null === nl || void 0 === nl ? void 0 : nl.style)
                      ? (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: "lg:w-auto whitespace-nowrap",
                              children:
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.showSocial) &&
                                dl(
                                  null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style
                                ),
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "flex-1 flex flex-col items-center gap-4 whitespace-nowrap",
                              children: [
                                (0, n.jsxs)("div", {
                                  className:
                                    "flex flex-col items-center justify-center gap-4 w-full truncate",
                                  children: [rl(), ul()],
                                }),
                                cl(
                                  null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style
                                ),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex justify-end whitespace-nowrap",
                              children: [
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) && al(),
                                (0, n.jsxs)("div", {
                                  className: "ml-auto lg:hidden",
                                  children: [
                                    ((null === nl || void 0 === nl
                                      ? void 0
                                      : nl.button) ||
                                      (null === tl || void 0 === tl
                                        ? void 0
                                        : tl.length) > 0 ||
                                      ((null === nl || void 0 === nl
                                        ? void 0
                                        : nl.showSocial) &&
                                        Array.isArray(
                                          null === P || void 0 === P
                                            ? void 0
                                            : P.social
                                        ) &&
                                        (null === P ||
                                        void 0 === P ||
                                        null === (k = P.social) ||
                                        void 0 === k
                                          ? void 0
                                          : k.length) > 1)) &&
                                      (0, n.jsx)("button", {
                                        className:
                                          "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                        style: { color: sl ? X.textColor : O },
                                        onClick: function () {
                                          return B(!0);
                                        },
                                        children: (0, n.jsx)(f.Z, {
                                          className: "block h-5 w-5",
                                          "aria-hidden": "true",
                                        }),
                                      }),
                                    !(null === nl || void 0 === nl
                                      ? void 0
                                      : nl.button) &&
                                      0 ===
                                        (null === tl || void 0 === tl
                                          ? void 0
                                          : tl.length) &&
                                      (null === nl || void 0 === nl
                                        ? void 0
                                        : nl.showSocial) &&
                                      Array.isArray(
                                        null === P || void 0 === P
                                          ? void 0
                                          : P.social
                                      ) &&
                                      1 ===
                                        (null === P ||
                                        void 0 === P ||
                                        null === (C = P.social) ||
                                        void 0 === C
                                          ? void 0
                                          : C.length) &&
                                      dl(
                                        null === nl || void 0 === nl
                                          ? void 0
                                          : nl.style,
                                        !0
                                      ),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        })
                      : (0, n.jsxs)(n.Fragment, {
                          children: [
                            (0, n.jsx)("div", {
                              className: "col-span-2 lg:col-span-1 truncate",
                              children: rl(),
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "hidden lg:flex item-center justify-end gap-10 lg:col-span-2",
                              children: [
                                ul(),
                                cl(
                                  null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style
                                ),
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.showSocial) &&
                                  dl(
                                    null === nl || void 0 === nl
                                      ? void 0
                                      : nl.style
                                  ),
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) && al(),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "ml-auto lg:hidden",
                              children: [
                                ((null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) ||
                                  (null === tl || void 0 === tl
                                    ? void 0
                                    : tl.length) > 0 ||
                                  ((null === nl || void 0 === nl
                                    ? void 0
                                    : nl.showSocial) &&
                                    Array.isArray(
                                      null === P || void 0 === P
                                        ? void 0
                                        : P.social
                                    ) &&
                                    (null === P ||
                                    void 0 === P ||
                                    null === (A = P.social) ||
                                    void 0 === A
                                      ? void 0
                                      : A.length) > 1)) &&
                                  (0, n.jsx)("button", {
                                    className:
                                      "inline-flex items-center justify-center p-2 rounded-md focus:outline-none",
                                    style: { color: sl ? X.textColor : O },
                                    onClick: function () {
                                      return B(!0);
                                    },
                                    children: (0, n.jsx)(f.Z, {
                                      className: "block h-5 w-5",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                !(null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) &&
                                  0 ===
                                    (null === tl || void 0 === tl
                                      ? void 0
                                      : tl.length) &&
                                  (null === nl || void 0 === nl
                                    ? void 0
                                    : nl.showSocial) &&
                                  Array.isArray(
                                    null === P || void 0 === P
                                      ? void 0
                                      : P.social
                                  ) &&
                                  1 ===
                                    (null === P ||
                                    void 0 === P ||
                                    null === (F = P.social) ||
                                    void 0 === F
                                      ? void 0
                                      : F.length) &&
                                  dl(
                                    null === nl || void 0 === nl
                                      ? void 0
                                      : nl.style,
                                    !0
                                  ),
                              ],
                            }),
                          ],
                        }),
                }),
              }),
              (0, n.jsx)(v.u, {
                show: !!L,
                as: "div",
                children: (0, n.jsxs)(h.V, {
                  onClose: function () {
                    return B(!1);
                  },
                  className: "relative z-[30000] h-full",
                  children: [
                    (0, n.jsx)(v.u.Child, {
                      as: s.Fragment,
                      enter: "ease-in-out duration-500",
                      enterFrom: "opacity-0",
                      enterTo: "opacity-100",
                      leave: "ease-in-out duration-500",
                      leaveFrom: "opacity-100",
                      leaveTo: "opacity-0",
                      children: (0, n.jsx)(h.V.Overlay, {
                        className:
                          "fixed inset-0 bg-black bg-opacity-5 transition-opacity",
                      }),
                    }),
                    (0, n.jsx)(v.u.Child, {
                      as: s.Fragment,
                      enter:
                        "transform transition transition-all ease-in-out duration-350",
                      enterFrom:
                        (null === nl ||
                        void 0 === nl ||
                        null === (S = nl.menu) ||
                        void 0 === S
                          ? void 0
                          : S.collapse) && !E
                          ? "left" !==
                            (null === nl || void 0 === nl ? void 0 : nl.style)
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0 opacity-0",
                      enterTo: "translate-x-0 opacity-100",
                      leave:
                        "transform transition transition-all ease-in-out duration-350",
                      leaveFrom: "translate-x-0 opacity-100",
                      leaveTo:
                        (null === nl ||
                        void 0 === nl ||
                        null === (_ = nl.menu) ||
                        void 0 === _
                          ? void 0
                          : _.collapse) && !E
                          ? "left" !==
                            (null === nl || void 0 === nl ? void 0 : nl.style)
                            ? "-translate-x-full"
                            : "translate-x-full"
                          : "translate-x-0 opacity-0",
                      children: (0, n.jsx)(h.V.Panel, {
                        className: (0, t.AK)(
                          "fixed flex flex-col shadow-lg",
                          (null === nl ||
                          void 0 === nl ||
                          null === (Z = nl.menu) ||
                          void 0 === Z
                            ? void 0
                            : Z.collapse) && !E
                            ? "left" !==
                              (null === nl || void 0 === nl ? void 0 : nl.style)
                              ? "top-0 left-0 bottom-0 w-80"
                              : "top-0 bottom-0 right-0 w-80"
                            : (!(null === nl || void 0 === nl
                                ? void 0
                                : nl.button) ||
                                0 !==
                                  (null === tl || void 0 === tl
                                    ? void 0
                                    : tl.length) ||
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.showSocial)) &&
                              !(
                                0 ===
                                  (null === tl || void 0 === tl
                                    ? void 0
                                    : tl.length) &&
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.showSocial) &&
                                Array.isArray(
                                  null === P || void 0 === P ? void 0 : P.social
                                ) &&
                                (null === P || void 0 === P
                                  ? void 0
                                  : P.social.length) > 1
                              ) &&
                              ((null === nl || void 0 === nl
                                ? void 0
                                : nl.button) ||
                                nl.showSocial ||
                                1 !== tl.length) &&
                              (1 !==
                                (null === tl || void 0 === tl
                                  ? void 0
                                  : tl.length) ||
                                (!(null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) &&
                                  !nl.showSocial))
                            ? "inset-0 h-full"
                            : "top-0 left-0 right-0"
                        ),
                        style: { backgroundColor: M, color: O },
                        children: (0, n.jsxs)("div", {
                          className: (0, t.AK)(
                            "flex-1 flex flex-col h-full mx-auto pb-6",
                            (
                              null === nl || void 0 === nl
                                ? void 0
                                : nl.fullWidth
                            )
                              ? "w-full px-6"
                              : "container"
                          ),
                          children: [
                            (0, n.jsxs)("div", {
                              className: (0, t.AK)(
                                "items-center",
                                vl(
                                  null === nl || void 0 === nl
                                    ? void 0
                                    : nl.spacing
                                ),
                                "left" !==
                                  (null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style)
                                  ? "grid"
                                  : "flex justify-between"
                              ),
                              style:
                                "left" !==
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.style)
                                  ? { gridTemplateColumns: "1fr auto 1fr" }
                                  : {},
                              children: [
                                ("center" ===
                                  (null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style) ||
                                  "full-center" ===
                                    (null === nl || void 0 === nl
                                      ? void 0
                                      : nl.style)) &&
                                  (0, n.jsx)("div", {}),
                                (0, n.jsx)("div", {
                                  className: "lg:invisible",
                                  children: rl(!0),
                                }),
                                (0, n.jsx)("div", {
                                  className: "ml-auto",
                                  children: (0, n.jsx)("button", {
                                    className:
                                      "inline-flex items-center justify-center p-2 rounded-md outline-none",
                                    style: { color: O },
                                    onClick: function () {
                                      return B(!1);
                                    },
                                    children: (0, n.jsx)(x.Z, {
                                      className: "block h-5 w-5",
                                      "aria-hidden": "true",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            (null === tl || void 0 === tl
                              ? void 0
                              : tl.length) > 0 &&
                              (0, n.jsxs)("div", {
                                className: "flex-1 py-6 overflow-auto",
                                children: [
                                  (0, n.jsx)(v.u, {
                                    as: "div",
                                    show: !I,
                                    enter: "transition-opacity",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    children: (0, n.jsx)("ul", {
                                      className: (0, t.AK)(
                                        "flex flex-col gap-3 w-full",
                                        "justify-center lg:justify-start",
                                        !E ||
                                          ("center" !==
                                            (null === nl || void 0 === nl
                                              ? void 0
                                              : nl.style) &&
                                            "full-center" !==
                                              (null === nl || void 0 === nl
                                                ? void 0
                                                : nl.style))
                                          ? ""
                                          : "text-center"
                                      ),
                                      style: (0, i.Z)(
                                        { color: O },
                                        (0, t.SV)(P)
                                      ),
                                      children:
                                        1 === tl.length &&
                                        "parent" === tl[0].type
                                          ? (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                (0, n.jsx)(
                                                  "li",
                                                  {
                                                    className:
                                                      "text-xl lg:!text-sm font-medium py-2",
                                                    style: {
                                                      borderColor: tl[0].current
                                                        ? "".concat(O)
                                                        : "transparent",
                                                    },
                                                    children: (0, n.jsx)(
                                                      "span",
                                                      {
                                                        className:
                                                          "block w-full",
                                                        children: tl[0].name,
                                                      }
                                                    ),
                                                  },
                                                  "page-link-".concat(
                                                    tl[0].href
                                                  )
                                                ),
                                                null === (K = tl[0].nests) ||
                                                void 0 === K
                                                  ? void 0
                                                  : K.map(function (l) {
                                                      return (0,
                                                      n.jsx)("li", { className: (0, t.AK)("body-large py-2", l.current ? "font-semibold" : "font-light"), children: (0, n.jsx)(c(), { className: "block w-full", href: l.href, legacyBehavior: !1, target: l.forceRender ? "_parent" : "_self", children: l.name }) }, "page-link-".concat(l.href));
                                                    }),
                                              ],
                                            })
                                          : (0, n.jsx)(n.Fragment, {
                                              children:
                                                null === tl || void 0 === tl
                                                  ? void 0
                                                  : tl.map(function (l) {
                                                      return (0, n.jsx)(
                                                        "li",
                                                        {
                                                          className: (0, t.AK)(
                                                            "body-large lg:!text-body py-2",
                                                            l.current
                                                              ? "font-semibold"
                                                              : ""
                                                          ),
                                                          children:
                                                            "parent" ===
                                                              l.type &&
                                                            l.nests.length > 0
                                                              ? (0, n.jsxs)(
                                                                  "button",
                                                                  {
                                                                    className:
                                                                      "inline-flex items-center gap-2",
                                                                    onClick:
                                                                      function () {
                                                                        return Y(
                                                                          l.nests
                                                                        );
                                                                      },
                                                                    children: [
                                                                      (0,
                                                                      n.jsx)(
                                                                        "span",
                                                                        {
                                                                          children:
                                                                            l.name,
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      n.jsx)(
                                                                        g.Z,
                                                                        {
                                                                          className:
                                                                            "w-4 h-4",
                                                                          "aria-hidden":
                                                                            "true",
                                                                        }
                                                                      ),
                                                                    ],
                                                                  }
                                                                )
                                                              : (0, n.jsx)(
                                                                  c(),
                                                                  {
                                                                    className:
                                                                      "block w-full",
                                                                    href: l.href,
                                                                    legacyBehavior:
                                                                      !1,
                                                                    target:
                                                                      l.forceRender
                                                                        ? "_parent"
                                                                        : "_self",
                                                                    children:
                                                                      l.name,
                                                                  }
                                                                ),
                                                        },
                                                        "page-link-".concat(
                                                          l.href
                                                        )
                                                      );
                                                    }),
                                            }),
                                    }),
                                  }),
                                  (0, n.jsx)(v.u, {
                                    as: "div",
                                    show: !!I,
                                    enter: "transition-opacity",
                                    enterFrom: "opacity-0",
                                    enterTo: "opacity-100",
                                    children: (0, n.jsx)("ul", {
                                      className: (0, t.AK)(
                                        "flex flex-col gap-3 w-full",
                                        "justify-center lg:justify-start",
                                        !E ||
                                          ("center" !==
                                            (null === nl || void 0 === nl
                                              ? void 0
                                              : nl.style) &&
                                            "full-center" !==
                                              (null === nl || void 0 === nl
                                                ? void 0
                                                : nl.style))
                                          ? ""
                                          : "text-center"
                                      ),
                                      style: (0, i.Z)(
                                        { color: O },
                                        (0, t.SV)(P)
                                      ),
                                      children: (0, n.jsxs)(n.Fragment, {
                                        children: [
                                          I &&
                                            (0, n.jsx)("li", {
                                              className: "pb-6",
                                              children: (0, n.jsxs)("button", {
                                                className:
                                                  "inline-flex items-center gap-2 body-large lg:!text-body",
                                                onClick: function () {
                                                  return Y(null);
                                                },
                                                children: [
                                                  (0, n.jsx)(p.Z, {
                                                    className: "w-4 h-4",
                                                    "aria-hidden": "true",
                                                  }),
                                                  (0, n.jsx)("span", {
                                                    children: "Back",
                                                  }),
                                                ],
                                              }),
                                            }),
                                          null === I || void 0 === I
                                            ? void 0
                                            : I.map(function (l) {
                                                return (0,
                                                n.jsx)("li", { className: (0, t.AK)("body-large lg:!text-body py-2", l.current ? "font-semibold" : ""), children: (0, n.jsx)(c(), { className: "block w-full", href: l.href, legacyBehavior: !1, target: l.forceRender ? "_parent" : "_self", children: l.name }) }, "page-link-".concat(l.href));
                                              }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            (0, n.jsxs)("div", {
                              className: (0, t.AK)(
                                "flex flex-col max-w-[100vw] lg:hidden",
                                "center" ===
                                  (null === nl || void 0 === nl
                                    ? void 0
                                    : nl.style) ||
                                  "full-center" ===
                                    (null === nl || void 0 === nl
                                      ? void 0
                                      : nl.style)
                                  ? "items-center"
                                  : "",
                                (null === tl || void 0 === tl
                                  ? void 0
                                  : tl.length) > 0
                                  ? ""
                                  : "h-full justify-center"
                              ),
                              children: [
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.showSocial) &&
                                  (null === (R = P.social) || void 0 === R
                                    ? void 0
                                    : R.length) > 0 &&
                                  (0, n.jsx)("ul", {
                                    className:
                                      "flex items-center gap-x-4 gap-y-2 flex-wrap py-6",
                                    children:
                                      Array.isArray(P.social) &&
                                      P.social.map(function (l, e) {
                                        var o = j.find(function (e) {
                                            return e.id === l.type;
                                          }),
                                          i = l.link;
                                        return (
                                          "custom" !== l.type &&
                                            ((i = (i = l.link
                                              .replace(
                                                /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\//gi,
                                                ""
                                              )
                                              .replace(/https?:/g, "")
                                              .replace(/^\/\/?/g, "")).replace(
                                              null === o || void 0 === o
                                                ? void 0
                                                : o.host,
                                              ""
                                            )),
                                            (i = "https://"
                                              .concat(
                                                null === o || void 0 === o
                                                  ? void 0
                                                  : o.host,
                                                "/"
                                              )
                                              .concat(i))),
                                          (0, n.jsx)(
                                            "li",
                                            {
                                              children: (0, n.jsx)(c(), {
                                                href: i,
                                                children: (0, n.jsx)("a", {
                                                  target: "_blank",
                                                  children: (0, n.jsx)(b.Q, {
                                                    icon: l,
                                                    color:
                                                      sl && !Q
                                                        ? X.textColor
                                                        : O,
                                                    settings: P.socialSettings,
                                                  }),
                                                }),
                                              }),
                                            },
                                            "social-icon-header-".concat(e)
                                          )
                                        );
                                      }),
                                  }),
                                (null === nl || void 0 === nl
                                  ? void 0
                                  : nl.button) &&
                                  (0, n.jsx)("div", {
                                    className: "py-6",
                                    children: (0, n.jsx)(a.Z, {
                                      className: "xl !font-normal !py-1.5",
                                      button: nl.button,
                                      block: nl,
                                      website: P,
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
    },
  },
]);
