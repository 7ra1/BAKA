(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6120],
  {
    76489: function (e, n) {
      "use strict";
      (n.parse = function (e, n) {
        if ("string" !== typeof e)
          throw new TypeError("argument str must be a string");
        for (
          var t = {}, i = n || {}, c = e.split(";"), a = i.decode || o, l = 0;
          l < c.length;
          l++
        ) {
          var u = c[l],
            d = u.indexOf("=");
          if (!(d < 0)) {
            var s = u.substring(0, d).trim();
            if (void 0 == t[s]) {
              var v = u.substring(d + 1, u.length).trim();
              '"' === v[0] && (v = v.slice(1, -1)), (t[s] = r(v, a));
            }
          }
        }
        return t;
      }),
        (n.serialize = function (e, n, o) {
          var r = o || {},
            c = r.encode || t;
          if ("function" !== typeof c)
            throw new TypeError("option encode is invalid");
          if (!i.test(e)) throw new TypeError("argument name is invalid");
          var a = c(n);
          if (a && !i.test(a)) throw new TypeError("argument val is invalid");
          var l = e + "=" + a;
          if (null != r.maxAge) {
            var u = r.maxAge - 0;
            if (isNaN(u) || !isFinite(u))
              throw new TypeError("option maxAge is invalid");
            l += "; Max-Age=" + Math.floor(u);
          }
          if (r.domain) {
            if (!i.test(r.domain))
              throw new TypeError("option domain is invalid");
            l += "; Domain=" + r.domain;
          }
          if (r.path) {
            if (!i.test(r.path)) throw new TypeError("option path is invalid");
            l += "; Path=" + r.path;
          }
          if (r.expires) {
            if ("function" !== typeof r.expires.toUTCString)
              throw new TypeError("option expires is invalid");
            l += "; Expires=" + r.expires.toUTCString();
          }
          r.httpOnly && (l += "; HttpOnly");
          r.secure && (l += "; Secure");
          if (r.sameSite) {
            switch (
              "string" === typeof r.sameSite
                ? r.sameSite.toLowerCase()
                : r.sameSite
            ) {
              case !0:
                l += "; SameSite=Strict";
                break;
              case "lax":
                l += "; SameSite=Lax";
                break;
              case "strict":
                l += "; SameSite=Strict";
                break;
              case "none":
                l += "; SameSite=None";
                break;
              default:
                throw new TypeError("option sameSite is invalid");
            }
          }
          return l;
        });
      var o = decodeURIComponent,
        t = encodeURIComponent,
        i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
      function r(e, n) {
        try {
          return n(e);
        } catch (o) {
          return e;
        }
      }
    },
    47041: function (e, n, o) {
      "use strict";
      var t =
          (this && this.__assign) ||
          function () {
            return (
              (t =
                Object.assign ||
                function (e) {
                  for (var n, o = 1, t = arguments.length; o < t; o++)
                    for (var i in (n = arguments[o]))
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        (e[i] = n[i]);
                  return e;
                }),
              t.apply(this, arguments)
            );
          },
        i =
          (this && this.__rest) ||
          function (e, n) {
            var o = {};
            for (var t in e)
              Object.prototype.hasOwnProperty.call(e, t) &&
                n.indexOf(t) < 0 &&
                (o[t] = e[t]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (t = Object.getOwnPropertySymbols(e); i < t.length; i++)
                n.indexOf(t[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, t[i]) &&
                  (o[t[i]] = e[t[i]]);
            }
            return o;
          };
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.checkCookies =
          n.hasCookie =
          n.removeCookies =
          n.deleteCookie =
          n.setCookies =
          n.setCookie =
          n.getCookie =
          n.getCookies =
            void 0);
      var r = o(76489),
        c = function () {
          return "undefined" !== typeof window;
        },
        a = function (e) {
          void 0 === e && (e = "");
          try {
            var n = JSON.stringify(e);
            return /^[\{\[]/.test(n) ? n : e;
          } catch (o) {
            return e;
          }
        };
      n.getCookies = function (e) {
        var n;
        if ((e && (n = e.req), !c()))
          return n && n.cookies
            ? n.cookies
            : n && n.headers && n.headers.cookie
            ? (0, r.parse)(n.headers.cookie)
            : {};
        for (
          var o = {},
            t = document.cookie ? document.cookie.split("; ") : [],
            i = 0,
            a = t.length;
          i < a;
          i++
        ) {
          var l = t[i].split("="),
            u = l.slice(1).join("=");
          o[l[0]] = u;
        }
        return o;
      };
      n.getCookie = function (e, o) {
        var t,
          i = (0, n.getCookies)(o)[e];
        if (void 0 !== i)
          return (function (e) {
            return (
              "true" === e ||
              ("false" !== e &&
                ("undefined" !== e ? ("null" === e ? null : e) : void 0))
            );
          })((t = i) ? t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : t);
      };
      n.setCookie = function (e, n, o) {
        var l, u, d;
        o && ((u = o.req), (d = o.res), (l = i(o, ["req", "res"])));
        var s = (0, r.serialize)(e, a(n), t({ path: "/" }, l));
        if (c()) document.cookie = s;
        else if (d && u) {
          var v = d.getHeader("Set-Cookie");
          if (
            (Array.isArray(v) || (v = v ? [String(v)] : []),
            d.setHeader("Set-Cookie", v.concat(s)),
            u && u.cookies)
          ) {
            var b = u.cookies;
            "" === n ? delete b[e] : (b[e] = a(n));
          }
          if (u && u.headers && u.headers.cookie) {
            b = (0, r.parse)(u.headers.cookie);
            "" === n ? delete b[e] : (b[e] = a(n)),
              (u.headers.cookie = Object.entries(b).reduce(function (e, n) {
                return e.concat("".concat(n[0], "=").concat(n[1], ";"));
              }, ""));
          }
        }
      };
      n.setCookies = function (e, o, t) {
        return (
          console.warn(
            "[WARN]: setCookies was deprecated. It will be deleted in the new version. Use setCookie instead."
          ),
          (0, n.setCookie)(e, o, t)
        );
      };
      n.deleteCookie = function (e, o) {
        return (0, n.setCookie)(e, "", t(t({}, o), { maxAge: -1 }));
      };
      n.removeCookies = function (e, o) {
        return (
          console.warn(
            "[WARN]: removeCookies was deprecated. It will be deleted in the new version. Use deleteCookie instead."
          ),
          (0, n.deleteCookie)(e, o)
        );
      };
      n.hasCookie = function (e, o) {
        return !!e && (0, n.getCookies)(o).hasOwnProperty(e);
      };
      n.checkCookies = function (e, o) {
        return (
          console.warn(
            "[WARN]: checkCookies was deprecated. It will be deleted in the new version. Use hasCookie instead."
          ),
          (0, n.hasCookie)(e, o)
        );
      };
    },
    69805: function (e, n, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/[[...slug]]",
        function () {
          return o(3391);
        },
      ]);
    },
    3391: function (e, n, o) {
      "use strict";
      o.r(n),
        o.d(n, {
          __N_SSP: function () {
            return G;
          },
          default: function () {
            return I;
          },
        });
      var t = o(828),
        i = o(29815),
        r = o(85893),
        c = o(67294),
        a = o(31996),
        l = o(5152),
        u = o.n(l),
        d = o(47041),
        s = o(90387);
      function v(e) {
        var n = e.block,
          o = e.idx,
          t = e.order,
          i = (0, c.useState)(null),
          a = i[0],
          l = i[1];
        return (
          (0, c.useEffect)(
            function () {
              if (n) {
                var e,
                  o = new RegExp(
                    /<div class="commonninja_component pid-(.*?)"><\/div>/,
                    "igm"
                  ).exec(
                    null === n ||
                      void 0 === n ||
                      null === (e = n.embedCode) ||
                      void 0 === e
                      ? void 0
                      : e.html
                  );
                if (o && (null === o || void 0 === o ? void 0 : o.length) > 0) {
                  var i = o.find(function (e) {
                    return e.startsWith("<div");
                  });
                  (i += "<style>.pid-"
                    .concat(
                      null === n || void 0 === n ? void 0 : n.externalId,
                      " .chat-button-container { bottom: "
                    )
                    .concat(80 * t, "px !important; }</style>")),
                    l(i);
                }
              }
            },
            [n]
          ),
          (0, c.useEffect)(
            function () {
              a &&
                window.CommonNinja.reload(
                  null === n || void 0 === n ? void 0 : n.externalId
                );
            },
            [a]
          ),
          (0, r.jsx)(r.Fragment, {
            children:
              a &&
              (0, r.jsx)("div", {
                style: { zIndex: "".concat(100 - 10 * o + 1e4) },
                className: "absolute",
                dangerouslySetInnerHTML: { __html: a },
              }),
          })
        );
      }
      var b = o(165),
        f = (0, r.jsx)("div", {}),
        k = u()(
          function () {
            return o.e(3283).then(o.bind(o, 60529));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [60529];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        p = u()(
          function () {
            return o.e(2258).then(o.bind(o, 82258));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [82258];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        w = u()(
          function () {
            return Promise.all([o.e(5675), o.e(8353), o.e(258)]).then(
              o.bind(o, 10258)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [10258];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        h = u()(
          function () {
            return Promise.all([o.e(5675), o.e(8353), o.e(8037)]).then(
              o.bind(o, 98037)
            );
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [98037];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        g = u()(
          function () {
            return Promise.all([o.e(5675), o.e(6383)]).then(o.bind(o, 76383));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [76383];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        m = u()(
          function () {
            return o.e(866).then(o.bind(o, 50866));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [50866];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        y = u()(
          function () {
            return Promise.all([o.e(5675), o.e(3509)]).then(o.bind(o, 33509));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [33509];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        x = u()(
          function () {
            return o.e(1202).then(o.bind(o, 71202));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [71202];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        j = u()(
          function () {
            return Promise.all([o.e(8500), o.e(2686)]).then(o.bind(o, 52686));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [52686];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        C = u()(
          function () {
            return Promise.all([o.e(5290), o.e(8077)]).then(o.bind(o, 68077));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [68077];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        _ = u()(
          function () {
            return o.e(7626).then(o.bind(o, 27626));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [27626];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        B = u()(
          function () {
            return Promise.all([o.e(5675), o.e(6848)]).then(o.bind(o, 16848));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [16848];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        S = u()(
          function () {
            return o.e(7033).then(o.bind(o, 97033));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [97033];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        E = u()(
          function () {
            return o.e(4179).then(o.bind(o, 94179));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [94179];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        O = u()(
          function () {
            return o.e(4243).then(o.bind(o, 34243));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [34243];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        W = u()(
          function () {
            return Promise.all([o.e(5675), o.e(6232)]).then(o.bind(o, 86232));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [86232];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        A = u()(
          function () {
            return o.e(5834).then(o.bind(o, 55834));
          },
          {
            loadableGenerated: {
              webpack: function () {
                return [55834];
              },
            },
            loading: function () {
              return f;
            },
          }
        ),
        P = function (e) {
          var n,
            o,
            l,
            u = e.page,
            f = e.website,
            P = e.apiUrl,
            G = e.captchaKey,
            I = (e.ipAddress, e.pt),
            T = (0, s.useRouter)();
          (0, c.useEffect)(
            function () {
              var e;
              (window.cnDisableCache = !0),
                I || (I = (0, d.getCookie)("pt")),
                I &&
                  (null === T ||
                  void 0 === T ||
                  null === (e = T.query) ||
                  void 0 === e
                    ? void 0
                    : e.pt) !== I &&
                  "public" !== f.status &&
                  T.replace("".concat(T.asPath, "?pt=").concat(I), void 0, {
                    shallow: !0,
                  });
            },
            [T, I, f]
          ),
            (0, c.useEffect)(
              function () {
                var e, n, o, i, r, c;
                (null === f ||
                void 0 === f ||
                null === (e = f.fonts) ||
                void 0 === e ||
                null === (n = e.head) ||
                void 0 === n
                  ? void 0
                  : n.name) &&
                  (null === f ||
                  void 0 === f ||
                  null === (o = f.fonts) ||
                  void 0 === o ||
                  null === (i = o.body) ||
                  void 0 === i
                    ? void 0
                    : i.name) &&
                  (Object.entries(
                    null !== (r = (0, a.SV)(f)) && void 0 !== r ? r : {}
                  ).forEach(function (e) {
                    var n = (0, t.Z)(e, 2),
                      o = n[0],
                      i = n[1];
                    return document.documentElement.style.setProperty(
                      "--body-".concat(o),
                      i
                    );
                  }),
                  Object.entries(
                    null !== (c = (0, a.j2)(f)) && void 0 !== c ? c : {}
                  ).forEach(function (e) {
                    var n = (0, t.Z)(e, 2),
                      o = n[0],
                      i = n[1];
                    return document.documentElement.style.setProperty(
                      "--head-".concat(o),
                      i
                    );
                  }));
              },
              [null === f || void 0 === f ? void 0 : f.fonts]
            );
          return u && "parent" !== u.type
            ? (0, r.jsxs)(r.Fragment, {
                children: [
                  null === (n = u.blocks) || void 0 === n
                    ? void 0
                    : n.map(function (e, n) {
                        return (function (e, n, o) {
                          var t, i, c, a, l;
                          if (
                            "durable" ===
                            (null === e ||
                            void 0 === e ||
                            null === (t = e.WebsiteBlock) ||
                            void 0 === t
                              ? void 0
                              : t.source)
                          )
                            switch (
                              null === e ||
                              void 0 === e ||
                              null === (i = e.WebsiteBlock) ||
                              void 0 === i
                                ? void 0
                                : i.type
                            ) {
                              case "banner":
                                var d;
                                return (0, r.jsx)(
                                  p,
                                  {
                                    id: "banner-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (d = e.WebsiteBlock) ||
                                        void 0 === d
                                        ? void 0
                                        : d._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "contact":
                                var s;
                                return (0, r.jsx)(
                                  C,
                                  {
                                    id: "contact-".concat(o),
                                    block: e,
                                    website: f,
                                    captchaKey: G,
                                    apiUrl: P,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (s = e.WebsiteBlock) ||
                                        void 0 === s
                                        ? void 0
                                        : s._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "gallery":
                                var v;
                                return (0, r.jsx)(
                                  h,
                                  {
                                    id: "gallery-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (v = e.WebsiteBlock) ||
                                        void 0 === v
                                        ? void 0
                                        : v._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "hero":
                                var b;
                                return (0, r.jsx)(
                                  g,
                                  {
                                    id: "hero-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (b = e.WebsiteBlock) ||
                                        void 0 === b
                                        ? void 0
                                        : b._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "list":
                                var k;
                                return (0, r.jsx)(
                                  y,
                                  {
                                    id: "list-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (k = e.WebsiteBlock) ||
                                        void 0 === k
                                        ? void 0
                                        : k._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "location":
                                var I;
                                return (0, r.jsx)(
                                  j,
                                  {
                                    id: "location-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (I = e.WebsiteBlock) ||
                                        void 0 === I
                                        ? void 0
                                        : I._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "quote":
                                var T;
                                return (0, r.jsx)(
                                  w,
                                  {
                                    id: "quote-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (T = e.WebsiteBlock) ||
                                        void 0 === T
                                        ? void 0
                                        : T._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "text":
                                var Z;
                                return (0, r.jsx)(
                                  m,
                                  {
                                    id: "text-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (Z = e.WebsiteBlock) ||
                                        void 0 === Z
                                        ? void 0
                                        : Z._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "video":
                                var N;
                                return (0, r.jsx)(
                                  x,
                                  {
                                    id: "video-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (N = e.WebsiteBlock) ||
                                        void 0 === N
                                        ? void 0
                                        : N._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "embed":
                                var U;
                                return (0, r.jsx)(
                                  _,
                                  {
                                    id: "embed-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (U = e.WebsiteBlock) ||
                                        void 0 === U
                                        ? void 0
                                        : U._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "image":
                                var q;
                                return (0, r.jsx)(
                                  B,
                                  {
                                    id: "image-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (q = e.WebsiteBlock) ||
                                        void 0 === q
                                        ? void 0
                                        : q._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "calendly-scheduling":
                                var R;
                                return (0, r.jsx)(
                                  S,
                                  {
                                    id: "calendly-scheduling-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (R = e.WebsiteBlock) ||
                                        void 0 === R
                                        ? void 0
                                        : R._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "instagram":
                                var M;
                                return (0, r.jsx)(
                                  E,
                                  {
                                    id: "instagram-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (M = e.WebsiteBlock) ||
                                        void 0 === M
                                        ? void 0
                                        : M._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "pricing-table":
                                var F;
                                return (0, r.jsx)(
                                  W,
                                  {
                                    id: "pricing-table-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (F = e.WebsiteBlock) ||
                                        void 0 === F
                                        ? void 0
                                        : F._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                              case "faq":
                                var H;
                                return (0, r.jsx)(
                                  A,
                                  {
                                    id: "faq-".concat(o),
                                    block: e,
                                    website: f,
                                    previousBlock: n,
                                  },
                                  ""
                                    .concat(
                                      null === u || void 0 === u
                                        ? void 0
                                        : u.slug,
                                      "-website-block-"
                                    )
                                    .concat(
                                      null === (H = e.WebsiteBlock) ||
                                        void 0 === H
                                        ? void 0
                                        : H._id,
                                      "-"
                                    )
                                    .concat(o)
                                );
                            }
                          else if (
                            "common-ninja" ===
                            (null === e ||
                            void 0 === e ||
                            null === (c = e.WebsiteBlock) ||
                            void 0 === c
                              ? void 0
                              : c.source)
                          )
                            return (0, r.jsx)(
                              O,
                              {
                                id: "common-ninja-"
                                  .concat(
                                    null === e ||
                                      void 0 === e ||
                                      null === (a = e.WebsiteBlock) ||
                                      void 0 === a
                                      ? void 0
                                      : a.type,
                                    "-"
                                  )
                                  .concat(o),
                                block: e,
                                website: f,
                                previousBlock: n,
                              },
                              ""
                                .concat(
                                  null === u || void 0 === u ? void 0 : u.slug,
                                  "-website-block-"
                                )
                                .concat(
                                  null === (l = e.WebsiteBlock) || void 0 === l
                                    ? void 0
                                    : l._id,
                                  "-"
                                )
                                .concat(o)
                            );
                        })(e, n > 0 ? u.blocks[n - 1] : null, n);
                      }),
                  (null === f ||
                  void 0 === f ||
                  null === (o = f.widgets) ||
                  void 0 === o
                    ? void 0
                    : o.length) > 0 &&
                    (function (e) {
                      var n = (0, i.Z)(e.reverse()),
                        o = 0;
                      return (
                        n.forEach(function (e) {
                          "cookie_bar" === e.type
                            ? (e.idx = 0)
                            : ((e.idx = o), o++);
                        }),
                        n
                      );
                    })(f.widgets).map(function (e, n) {
                      return (0,
                      r.jsx)(v, { idx: n, order: e.idx, block: e }, "page-".concat(null === u || void 0 === u ? void 0 : u._id, "-widget?.externalId"));
                    }),
                  (0, r.jsx)(
                    b.default,
                    {
                      website: f,
                      previousBlock:
                        (null === (l = u.blocks) || void 0 === l
                          ? void 0
                          : l.length) > 0
                          ? null === u || void 0 === u
                            ? void 0
                            : u.blocks[u.blocks.length - 1]
                          : null,
                    },
                    "footer-page-".concat(
                      null === u || void 0 === u ? void 0 : u._id
                    )
                  ),
                ],
              })
            : (0, r.jsx)(k, { website: f });
        };
      P.getLayout = function (e) {
        return (0, a.G0)(e, { hideFooter: !0 });
      };
      var G = !0,
        I = P;
    },
    20943: function (e, n, o) {
      "use strict";
      function t(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var o = 0, t = new Array(n); o < n; o++) t[o] = e[o];
        return t;
      }
      o.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    13375: function (e, n, o) {
      "use strict";
      function t(e) {
        if (
          ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      }
      o.d(n, {
        Z: function () {
          return t;
        },
      });
    },
    828: function (e, n, o) {
      "use strict";
      o.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = o(13375);
      var i = o(91566);
      function r(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (0, t.Z)(e, n) ||
          (0, i.Z)(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    29815: function (e, n, o) {
      "use strict";
      o.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = o(20943);
      var i = o(13375);
      var r = o(91566);
      function c(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, t.Z)(e);
          })(e) ||
          (0, i.Z)(e) ||
          (0, r.Z)(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
    },
    91566: function (e, n, o) {
      "use strict";
      o.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = o(20943);
      function i(e, n) {
        if (e) {
          if ("string" === typeof e) return (0, t.Z)(e, n);
          var o = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === o && e.constructor && (o = e.constructor.name),
            "Map" === o || "Set" === o
              ? Array.from(o)
              : "Arguments" === o ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
              ? (0, t.Z)(e, n)
              : void 0
          );
        }
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        4186, 1445, 1111, 5999, 5127, 7644, 7886, 1033, 8692, 6166, 165, 9774,
        2888, 179,
      ],
      function () {
        return (n = 69805), e((e.s = n));
        var n;
      }
    );
    var n = e.O();
    _N_E = n;
  },
]);
