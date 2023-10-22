(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8692],
  {
    85789: function (n, e, t) {
      "use strict";
      var o,
        r = t(47568),
        i = t(26042),
        l = t(99534),
        s = t(20414),
        u = t(85893),
        a = t(9008),
        d = t.n(a),
        c = t(67294),
        v = t(90387),
        f = t(25935),
        p = t(30120),
        g = t(31996),
        h = t(85518),
        m = t(74865),
        w = t.n(m),
        b = t(11163),
        y = t.n(b),
        x = t(5152),
        j = t.n(x),
        C = t(40782),
        Z = (t(40993), t(68715)),
        F = t(19965),
        S = t(38264),
        I = t(58771),
        _ = {
          success: {
            color: "bg-green-50 text-green-800",
            icon: (0, u.jsx)(Z.Z, { className: "h-5 w-5 text-green-400" }),
            progress: "bg-green-700",
          },
          error: {
            color: "bg-red-50 text-red-800",
            icon: (0, u.jsx)(F.Z, { className: "h-5 w-5 text-red-400" }),
            progress: "bg-red-700",
          },
          info: {
            color: "bg-indigo-50 text-indigo-800",
            icon: (0, u.jsx)(S.Z, { className: "h-5 w-5 text-indigo-400" }),
            progress: "bg-indigo-700",
          },
          warning: {
            color: "bg-yellow-50 text-yellow-800",
            icon: (0, u.jsx)(I.Z, { className: "h-5 w-5 text-yellow-400" }),
            progress: "bg-yellow-700",
          },
          default: {
            color: "bg-gray-50 text-gray-800",
            icon: (0, u.jsx)(Z.Z, { className: "h-5 w-5 text-gray-400" }),
            progress: "bg-gray-700",
          },
          dark: {
            color: "bg-white-600 font-gray-300",
            icon: (0, u.jsx)(Z.Z, { className: "h-5 w-5 text-gray-400" }),
            progress: "bg-gray-300",
          },
        },
        k = (0, u.jsx)("div", {}),
        N = j()(
          function () {
            return Promise.all([
              t.e(7644),
              t.e(7886),
              t.e(6166),
              t.e(3175),
            ]).then(t.bind(t, 73175));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [73175];
              },
            },
            loading: function () {
              return k;
            },
          }
        ),
        A = j()(
          function () {
            return Promise.all([
              t.e(7644),
              t.e(7886),
              t.e(1033),
              t.e(6166),
              t.e(165),
            ]).then(t.bind(t, 165));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [165];
              },
            },
            loading: function () {
              return k;
            },
          }
        ),
        L = [];
      w().configure({ showSpinner: !1 }),
        y().events.on("routeChangeStart", function (n) {
          w().start();
        }),
        y().events.on("routeChangeComplete", function () {
          return w().done();
        }),
        y().events.on("routeChangeError", function () {
          return w().done();
        });
      e.Z = function (n) {
        var e,
          a,
          m,
          w,
          b,
          y,
          x,
          j,
          Z,
          F,
          S,
          I,
          k,
          O,
          E,
          P,
          B,
          U,
          q,
          R,
          $,
          H,
          T,
          W,
          G,
          J,
          M,
          z,
          V = n.children,
          Q = n.website,
          K = n.page,
          Y = n.apiUrl,
          D = n.ipAddress,
          X = n.hideFooter,
          nn = (0, v.useRouter)(),
          en = (0, c.useState)(0),
          tn = en[0],
          on = en[1],
          rn = (0, c.useState)(!1),
          ln = rn[0],
          sn = rn[1],
          un = (0, c.useState)(null),
          an = un[0],
          dn = un[1],
          cn = (0, c.useState)(0),
          vn = cn[0],
          fn = cn[1],
          pn = new g.bl(Y),
          gn = null !== (z = Q.seo) && void 0 !== z ? z : {},
          hn = gn.headCode,
          mn = gn.footerCode,
          wn = (0, l.Z)(gn, ["headCode", "footerCode"]),
          bn = (0, i.Z)(
            { globalHeadCode: hn, globalFooterCode: mn },
            wn,
            null === K || void 0 === K ? void 0 : K.seo
          ),
          yn = (0, c.useCallback)(
            (function () {
              var n = (0, r.Z)(function (n) {
                return (0, s.__generator)(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (0 !== n.target.scrollTop && 0 !== tn) ||
                          on(n.target.scrollTop),
                        ln ? [3, 2] : [4, jn("scroll")]
                      );
                    case 1:
                      e.sent(), sn(!0), (e.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
              return function (e) {
                return n.apply(this, arguments);
              };
            })(),
            [ln]
          ),
          xn = c.Children.map(V, function (n) {
            return c.isValidElement(n)
              ? c.cloneElement(n, (0, i.Z)({}, n.props))
              : n;
          }),
          jn = (function () {
            var n = (0, r.Z)(function (n) {
              var e, o, r, i, l, u, a, d, c, v;
              return (0, s.__generator)(this, function (s) {
                switch (s.label) {
                  case 0:
                    return (a = JSON.parse(
                      localStorage.getItem("user") || "{}"
                    )) &&
                      a.ip &&
                      !(
                        p.ou.now().diff(p.ou.fromISO(a.date), "hours").hours >
                        24
                      ) &&
                      a.hash
                      ? [3, 4]
                      : ((d = D || "0.0.0.0"),
                        window.unsupportedBrowser || D
                          ? [3, 3]
                          : [4, t.e(6216).then(t.bind(t, 76216))]);
                  case 1:
                    return [4, s.sent().publicIpv4()];
                  case 2:
                    (d = s.sent()), (s.label = 3);
                  case 3:
                    (c = p.ou.now().toMillis()),
                      localStorage.setItem(
                        "user",
                        JSON.stringify({
                          ip: d,
                          date: p.ou.now().startOf("day").toISO(),
                          hash: c,
                        })
                      ),
                      (a.ip = d),
                      (a.hash = c),
                      (s.label = 4);
                  case 4:
                    (v = {
                      idWebsite: Q._id,
                      url: document.location.pathname,
                      event: n,
                      platform: (
                        null === window ||
                        void 0 === window ||
                        null === (e = window.navigator) ||
                        void 0 === e
                          ? void 0
                          : e.platform
                      )
                        ? null === window ||
                          void 0 === window ||
                          null === (o = window.navigator) ||
                          void 0 === o ||
                          null === (r = o.platform) ||
                          void 0 === r
                          ? void 0
                          : r.toString()
                        : (
                            null === window ||
                            void 0 === window ||
                            null === (i = window.navigator) ||
                            void 0 === i
                              ? void 0
                              : i.oscpu
                          )
                        ? null === window ||
                          void 0 === window ||
                          null === (l = window.navigator) ||
                          void 0 === l
                          ? void 0
                          : l.oscpu
                        : "bot",
                      title: document.title.split(" - ")[0] || "Home",
                      device:
                        /bot|googlebot|crawler|spider|robot|crawling/i.test(
                          null === window ||
                            void 0 === window ||
                            null === (u = window.navigator) ||
                            void 0 === u
                            ? void 0
                            : u.userAgent
                        )
                          ? "bot"
                          : h.tq
                          ? "mobile"
                          : "desktop",
                      ip: a.ip,
                      hash: a.hash,
                    }),
                      L.find(function (n) {
                        return n.event === v.event;
                      }) || L.push(v),
                      (s.label = 5);
                  case 5:
                    return [2];
                }
              });
            });
            return function (e) {
              return n.apply(this, arguments);
            };
          })();
        return (
          (0, c.useEffect)(
            function () {
              return (
                vn < 6 &&
                  (clearInterval(o),
                  (o = setInterval(
                    (0, r.Z)(function () {
                      return (0, s.__generator)(this, function (n) {
                        return jn("ping"), fn(vn + 1), [2];
                      });
                    }),
                    3e4
                  ))),
                an !== nn.asPath && (jn("open"), dn(nn.asPath), fn(0), sn(!1)),
                function () {
                  vn >= 6 && fn(0), clearInterval(o), sn(!1);
                }
              );
            },
            [nn, vn]
          ),
          (0, c.useEffect)(
            function () {
              var n,
                e = (function () {
                  var n = (0, r.Z)(function () {
                    var n;
                    return (0, s.__generator)(this, function (e) {
                      switch (e.label) {
                        case 0:
                          return (null === L || void 0 === L
                            ? void 0
                            : L.length) > 0 && (n = L.shift())
                            ? [4, pn.post("/website/register-user-action", n)]
                            : [3, 2];
                        case 1:
                          e.sent(), (e.label = 2);
                        case 2:
                          return [2];
                      }
                    });
                  });
                  return function () {
                    return n.apply(this, arguments);
                  };
                })();
              return (
                e(),
                (n = setInterval(function () {
                  e();
                }, 500)),
                document.querySelector("body").addEventListener("scroll", yn),
                window.addEventListener("scroll", yn),
                function () {
                  clearInterval(n),
                    document
                      .querySelector("body")
                      .removeEventListener("scroll", yn),
                    window.removeEventListener("scroll", yn);
                }
              );
            },
            [ln]
          ),
          (0, u.jsxs)(u.Fragment, {
            children: [
              (0, u.jsxs)(d(), {
                children: [
                  (0, u.jsx)("link", {
                    rel: "icon",
                    href:
                      (null === (e = Q.favicon) || void 0 === e
                        ? void 0
                        : e.url) || "/favicon.ico",
                  }),
                  (0, u.jsx)("title", {
                    children: (null === bn || void 0 === bn ? void 0 : bn.title)
                      ? bn.title
                      : (null === (a = Q.Business) || void 0 === a
                          ? void 0
                          : a.name) +
                        " | " +
                        (null === (m = Q.Business) ||
                        void 0 === m ||
                        null === (w = m.type) ||
                        void 0 === w
                          ? void 0
                          : w.name),
                  }),
                  (0, u.jsx)("meta", {
                    name: "description",
                    content: (
                      null === bn || void 0 === bn ? void 0 : bn.description
                    )
                      ? bn.description
                      : "",
                  }),
                  (0, u.jsx)("meta", {
                    name: "keywords",
                    content: (
                      null === bn || void 0 === bn ? void 0 : bn.keywords
                    )
                      ? bn.keywords
                      : (null === Q ||
                        void 0 === Q ||
                        null === (b = Q.Business) ||
                        void 0 === b ||
                        null === (y = b.name) ||
                        void 0 === y
                          ? void 0
                          : y.split(" ").join(",")) +
                        "," +
                        (null === Q ||
                        void 0 === Q ||
                        null === (x = Q.Business) ||
                        void 0 === x ||
                        null === (j = x.type) ||
                        void 0 === j ||
                        null === (Z = j.name) ||
                        void 0 === Z
                          ? void 0
                          : Z.split(" ").join(",")),
                  }),
                  (0, u.jsx)("meta", {
                    property: "og:title",
                    content: (null === bn || void 0 === bn ? void 0 : bn.title)
                      ? bn.title
                      : (null === (F = Q.Business) || void 0 === F
                          ? void 0
                          : F.name) +
                        " | " +
                        (null === (S = Q.Business) ||
                        void 0 === S ||
                        null === (I = S.type) ||
                        void 0 === I
                          ? void 0
                          : I.name),
                  }),
                  (0, u.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, u.jsx)("meta", {
                    property: "og:description",
                    content: (
                      null === bn || void 0 === bn ? void 0 : bn.description
                    )
                      ? bn.description
                      : "",
                  }),
                  (null === bn ||
                  void 0 === bn ||
                  null === (k = bn.Image) ||
                  void 0 === k
                    ? void 0
                    : k.url) &&
                    (0, u.jsx)("meta", {
                      property: "og:image",
                      content: bn.Image.url,
                    }),
                  (null === bn || void 0 === bn ? void 0 : bn.globalHeadCode) &&
                    (0, f.ZP)(bn.globalHeadCode),
                  (null === bn || void 0 === bn ? void 0 : bn.headCode) &&
                    (0, f.ZP)(bn.headCode),
                  (null === Q ||
                  void 0 === Q ||
                  null === (O = Q.fonts) ||
                  void 0 === O ||
                  null === (E = O.head) ||
                  void 0 === E
                    ? void 0
                    : E.name) &&
                    (null === Q ||
                    void 0 === Q ||
                    null === (P = Q.fonts) ||
                    void 0 === P ||
                    null === (B = P.body) ||
                    void 0 === B
                      ? void 0
                      : B.name) &&
                    (0, u.jsxs)(u.Fragment, {
                      children: [
                        (0, u.jsx)("link", {
                          rel: "preconnect",
                          href: "https://fonts.googleapis.com",
                        }),
                        (0, u.jsx)("link", {
                          rel: "preconnect",
                          href: "https://fonts.gstatic.com",
                          crossOrigin: !0,
                        }),
                        (0, u.jsx)("link", {
                          href: "https://fonts.googleapis.com/css2?family="
                            .concat(
                              null === Q ||
                                void 0 === Q ||
                                null === (U = Q.fonts) ||
                                void 0 === U ||
                                null === (q = U.head) ||
                                void 0 === q ||
                                null === (R = q.name) ||
                                void 0 === R
                                ? void 0
                                : R.replace(/ /gi, "+"),
                              ":wght@"
                            )
                            .concat(
                              null === Q ||
                                void 0 === Q ||
                                null === ($ = Q.fonts) ||
                                void 0 === $ ||
                                null === (H = $.head) ||
                                void 0 === H
                                ? void 0
                                : H.weight,
                              "&family="
                            )
                            .concat(
                              null === Q ||
                                void 0 === Q ||
                                null === (T = Q.fonts) ||
                                void 0 === T ||
                                null === (W = T.body) ||
                                void 0 === W ||
                                null === (G = W.name) ||
                                void 0 === G
                                ? void 0
                                : G.replace(/ /gi, "+"),
                              ":wght@"
                            )
                            .concat(
                              null === Q ||
                                void 0 === Q ||
                                null === (J = Q.fonts) ||
                                void 0 === J ||
                                null === (M = J.body) ||
                                void 0 === M
                                ? void 0
                                : M.weight,
                              "&display=swap"
                            ),
                          rel: "stylesheet",
                        }),
                      ],
                    }),
                  (null === Q || void 0 === Q ? void 0 : Q.searchIndexing)
                    ? (0, u.jsx)("meta", { name: "robots", content: "all" })
                    : (0, u.jsx)("meta", {
                        name: "robots",
                        content: "noindex,nofollow",
                      }),
                ],
              }),
              (0, u.jsxs)("div", {
                id: "main-body",
                onScroll: function (n) {
                  return yn(n);
                },
                className:
                  "min-h-full w-full flex flex-col smooth-scroll hyphen",
                style: (0, g.SV)(Q),
                children: [
                  (0, u.jsx)(N, { scrollY: tn, website: Q }),
                  xn,
                  !X && (0, u.jsx)(A, { website: Q }),
                  (0, u.jsx)(C.Ix, {
                    toastClassName: function (n) {
                      var e = n.type;
                      return (
                        _[e || "default"].color +
                        " relative p-4 rounded-md justify-between overflow-hidden cursor-pointer text-sm font-medium my-2.5 shadow-md flex"
                      );
                    },
                    bodyClassName: function () {
                      return "flex text-sm font-white font-medium items-center w-full max-w-xs";
                    },
                    icon: function (n) {
                      var e = n.type;
                      return _[e || "default"].icon;
                    },
                    position: "bottom-center",
                    autoClose: 8e3,
                    hideProgressBar: !0,
                    newestOnTop: !0,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                    closeButton: !1,
                  }),
                ],
              }),
              (null === bn || void 0 === bn ? void 0 : bn.globalFooterCode) &&
                (0, f.ZP)(bn.globalFooterCode),
              (null === bn || void 0 === bn ? void 0 : bn.footerCode) &&
                (0, f.ZP)(bn.footerCode),
            ],
          })
        );
      };
    },
    31996: function (n, e, t) {
      "use strict";
      t.d(e, {
        bl: function () {
          return p;
        },
        $O: function () {
          return j;
        },
        h: function () {
          return A;
        },
        Z9: function () {
          return m;
        },
        SV: function () {
          return _;
        },
        AK: function () {
          return y;
        },
        p$: function () {
          return S;
        },
        n3: function () {
          return E;
        },
        sd: function () {
          return U;
        },
        dz: function () {
          return R;
        },
        yW: function () {
          return O;
        },
        QW: function () {
          return q;
        },
        Qm: function () {
          return L;
        },
        G0: function () {
          return k;
        },
        ow: function () {
          return $;
        },
        bG: function () {
          return B;
        },
        A2: function () {
          return P;
        },
        j2: function () {
          return I;
        },
        mR: function () {
          return C;
        },
        jn: function () {
          return N;
        },
        s: function () {
          return Z;
        },
        ac: function () {
          return F;
        },
        oH: function () {
          return x;
        },
      });
      var o = t(26042),
        r = t(69396),
        i = t(85893),
        l = t(47568),
        s = t(51438),
        u = t(14924),
        a = t(20414),
        d = t(9669),
        c = t.n(d),
        v = t(40782),
        f = t(83454),
        p = function n(e, t) {
          (0, s.Z)(this, n);
          var o = this;
          (0, u.Z)(
            this,
            "get",
            (function () {
              var n = (0, l.Z)(function (n, e) {
                return (0, a.__generator)(this, function (t) {
                  return [
                    2,
                    new Promise(function (t, r) {
                      c()
                        .get(n, {
                          baseURL: o.baseURL,
                          params: e || {},
                          headers: {
                            "Content-Type": "application/json",
                            Accept: "*/*",
                          },
                        })
                        .then(
                          (function () {
                            var n = (0, l.Z)(function (n) {
                              return (0, a.__generator)(this, function (e) {
                                return t(n.data), [2];
                              });
                            });
                            return function (e) {
                              return n.apply(this, arguments);
                            };
                          })()
                        )
                        .catch(function (n) {
                          n.response
                            ? t({
                                status: !1,
                                message: n.response.data.message,
                              })
                            : n.request
                            ? t({ status: !1, message: n.request.message })
                            : t({ status: !1, message: n.message }),
                            t({ status: !1, message: n.config });
                        });
                    }),
                  ];
                });
              });
              return function (e, t) {
                return n.apply(this, arguments);
              };
            })()
          );
          var r = this;
          (0, u.Z)(
            this,
            "post",
            (function () {
              var n = (0, l.Z)(function (n, e, t) {
                return (0, a.__generator)(this, function (o) {
                  return [
                    2,
                    new Promise(function (o, i) {
                      c()
                        .post(n, e || {}, {
                          baseURL: r.baseURL,
                          headers: {
                            "Content-Type": t
                              ? "multipart/form-data"
                              : "application/json",
                            Accept: "*/*",
                          },
                        })
                        .then(function (n) {
                          o(n.data);
                        })
                        .catch(function (n) {
                          n.response
                            ? o(n.response.data)
                            : n.request
                            ? o({ status: !1, message: n.request })
                            : o({ status: !1, message: n.message }),
                            o({ status: !1, message: n.config });
                        });
                    }),
                  ];
                });
              });
              return function (e, t, o) {
                return n.apply(this, arguments);
              };
            })()
          ),
            (c().defaults.withCredentials = null === t || void 0 === t || t),
            (this.baseURL = e || f.env.API_URL || "https://api.durable.co");
        },
        g = t(5506),
        h = function (n) {
          var e = n.closeToast;
          return (0, i.jsx)(g.Z, {
            className: "h-5 w-5 text-gray-600",
            onClick: e,
          });
        },
        m = {
          default: function (n) {
            (0, v.Am)(n);
          },
          info: function (n) {
            v.Am.info(n);
          },
          success: function (n) {
            v.Am.success(n);
          },
          warn: function (n) {
            v.Am.warn(n);
          },
          error: function (n) {
            v.Am.error(n, { autoClose: !1, closeButton: (0, i.jsx)(h, {}) });
          },
        },
        w = t(85789),
        b = t(67294);
      t(85016), t(79981);
      function y() {
        for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return e.filter(Boolean).join(" ");
      }
      function x(n) {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          n
        );
      }
      function j(n) {
        var e = !1;
        if (!n || !n[0]) return n;
        "#" === n[0] && ((n = n.slice(1)), (e = !0));
        var t = parseInt(
            6 === (null === n || void 0 === n ? void 0 : n.length)
              ? n
              : ""
                  .concat(n[0])
                  .concat(n[0])
                  .concat(n[1])
                  .concat(n[1])
                  .concat(n[2])
                  .concat(n[2]),
            16
          ),
          o = ((t >> 16) + (255 & t) + ((t >> 8) & 255)) / 3;
        return (e ? "#" : "") + (o = o > 128 ? "111827" : "FFFFFF");
      }
      var C = function (n, e) {
        var t;
        return (
          (e /= 100),
          /^#([A-Fa-f0-9]{3}){1,2}$/.test(n)
            ? (3 ===
                (null === (t = n.substring(1).split("")) || void 0 === t
                  ? void 0
                  : t.length) && (t = [t[0], t[0], t[1], t[1], t[2], t[2]]),
              "rgba(" +
                [
                  ((t = "0x" + t.join("")) >> 16) & 255,
                  (t >> 8) & 255,
                  255 & t,
                ].join(",") +
                "," +
                e +
                ")")
            : n
        );
      };
      function Z(n) {
        var e = n
            .replace(/\s/g, "")
            .match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
          t = e
            ? (256 | e[1]).toString(16).slice(1) +
              (256 | e[2]).toString(16).slice(1) +
              (256 | e[3]).toString(16).slice(1)
            : n;
        return "#".concat(t);
      }
      function F(n) {
        var e = (0, b.useState)(!0),
          t = e[0],
          o = e[1];
        return (
          (0, b.useEffect)(
            function () {
              var e = window.matchMedia(n);
              e.matches !== t && o(e.matches);
              var r = function () {
                o(e.matches);
              };
              return (
                e.addListener(r),
                function () {
                  return e.removeListener(r);
                }
              );
            },
            [t, n]
          ),
          t
        );
      }
      function S(n) {
        return JSON.parse(JSON.stringify(n));
      }
      var I = function (n) {
          var e, t, o, r;
          return {
            fontFamily:
              (null === n ||
              void 0 === n ||
              null === (e = n.fonts) ||
              void 0 === e ||
              null === (t = e.head) ||
              void 0 === t
                ? void 0
                : t.family) || '"Inter", sans-serif',
            fontWeight:
              (null === n ||
              void 0 === n ||
              null === (o = n.fonts) ||
              void 0 === o ||
              null === (r = o.head) ||
              void 0 === r
                ? void 0
                : r.weight) || 500,
          };
        },
        _ = function (n) {
          var e, t, o, r;
          return {
            fontFamily:
              (null === n ||
              void 0 === n ||
              null === (e = n.fonts) ||
              void 0 === e ||
              null === (t = e.body) ||
              void 0 === t
                ? void 0
                : t.family) || '"Inter", sans-serif',
            fontWeight:
              (null === n ||
              void 0 === n ||
              null === (o = n.fonts) ||
              void 0 === o ||
              null === (r = o.body) ||
              void 0 === r
                ? void 0
                : r.weight) || 500,
          };
        };
      function k(n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = n.props.children[0].props.website,
          l = n.props.children[0].props.page,
          s = n.props.children[0].props.apiUrl;
        return (0, i.jsx)(
          w.Z,
          (0, r.Z)((0, o.Z)({ page: l, website: t, apiUrl: s }, e), {
            children: n,
          })
        );
      }
      function N(n) {
        var e, t, o;
        return (
          n.match(/^rgb/)
            ? ((e = (n = n.match(
                /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
              ))[1]),
              (t = n[2]),
              (o = n[3]))
            : ((e =
                (n = +(
                  "0x" + n.slice(1).replace(n.length < 5 && /./g, "$&$&")
                )) >> 16),
              (t = (n >> 8) & 255),
              (o = 255 & n)),
          Math.sqrt(e * e * 0.299 + t * t * 0.587 + o * o * 0.114) <= 127.5
        );
      }
      function A(n, e) {
        if (!n) return "#FFFFFF";
        var t = parseInt(n.replace("#", ""), 16),
          o = Math.round(2.55 * e),
          r = (t >> 16) + o,
          i = ((t >> 8) & 255) + o,
          l = (255 & t) + o;
        return (
          "#" +
          (
            16777216 +
            65536 * (r < 255 ? (r < 1 ? 0 : r) : 255) +
            256 * (i < 255 ? (i < 1 ? 0 : i) : 255) +
            (l < 255 ? (l < 1 ? 0 : l) : 255)
          )
            .toString(16)
            .slice(1)
        );
      }
      function L(n) {
        if (!n) return "";
        var e = n.split(" ");
        return e.length > 1 && "" !== e[1] ? e[0][0] + e[1][0] : n[0] + n[1];
      }
      var O = function (n, e) {
          var t = {
              small: "rounded-sm md:rounded-md lg:rounded-lg",
              medium: "rounded-lg md:rounded-xl lg:rounded-2xl",
              large: "rounded-2xl md:rounded-3xl lg:rounded-4xl",
              "no-rounded": "",
            },
            o = String(n);
          return (
            (n && "default" !== n) || !e || (o = e), t[o] || t["no-rounded"]
          );
        },
        E = function (n) {
          return "1:1" === n
            ? "aspect-w-1 aspect-h-1"
            : "2:3" === n
            ? "aspect-w-2 aspect-h-3"
            : "3:2" === n
            ? "aspect-w-3 aspect-h-2"
            : "aspect-w-16 aspect-h-9";
        },
        P = function (n) {
          var e =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          switch (n) {
            case "top":
              return e ? "justify-start" : "items-start";
            case "bottom":
              return e ? "justify-end" : "items-end";
            default:
              return e ? "justify-center" : "items-center";
          }
        },
        B = function (n) {
          var e,
            t,
            o = {
              none: { top: "pt-0", bottom: "pb-0" },
              small: { top: "pt-8 lg:pt-12", bottom: "pb-8 lg:pb-12" },
              medium: { top: "pt-12 lg:pt-20", bottom: "pb-12 lg:pb-20" },
              large: { top: "pt-16 lg:pt-32", bottom: "pb-16 lg:pb-32" },
              default: {
                top: "pt-12 lg:pt-14 xl:pt-20",
                bottom: "pb-12 lg:pb-14 xl:pb-20",
              },
            },
            r =
              (null === (e = o[null === n || void 0 === n ? void 0 : n.top]) ||
              void 0 === e
                ? void 0
                : e.top) || o.default.top,
            i =
              (null ===
                (t = o[null === n || void 0 === n ? void 0 : n.bottom]) ||
              void 0 === t
                ? void 0
                : t.bottom) || o.default.bottom;
          return "".concat(r, " ").concat(i);
        },
        U = function (n) {
          return "".concat("https://cdn.durable.co", "/assets/").concat(n);
        },
        q = function (n) {
          return (
            (null === n || void 0 === n ? void 0 : n.url) ||
            (null === n || void 0 === n ? void 0 : n.preview)
          );
        },
        R = function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "color1";
          return (
            parseInt(
              (null === n || void 0 === n
                ? void 0
                : n.replace(/[^0-9]/gi, "")) || 1,
              10
            ) - 1
          );
        },
        $ = function (n, e, t) {
          var o,
            r = R(e);
          return (null === n || void 0 === n ? void 0 : n.colors) && !isNaN(r)
            ? null === (o = n.colors[r]) || void 0 === o
              ? void 0
              : o[t]
            : "#FFFFFF";
        };
    },
    42480: function () {},
  },
]);
