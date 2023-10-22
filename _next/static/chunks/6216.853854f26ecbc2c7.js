(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6216],
  {
    5696: function () {},
    76216: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          CancelError: function () {
            return b;
          },
          IpNotFoundError: function () {
            return x;
          },
          publicIp: function () {
            return C;
          },
          publicIpv4: function () {
            return A;
          },
          publicIpv6: function () {
            return T;
          },
        });
      const r = "[a-fA-F\\d:]",
        o = (e) =>
          e && e.includeBoundaries
            ? `(?:(?<=\\s|^)(?=${r})|(?<=${r})(?=\\s|$))`
            : "",
        c =
          "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
        s = "[a-fA-F\\d]{1,4}",
        a =
          `\n(?:\n(?:${s}:){7}(?:${s}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:${s}:){6}(?:${c}|:${s}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:${s}:){5}(?::${c}|(?::${s}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:${s}:){4}(?:(?::${s}){0,1}:${c}|(?::${s}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:${s}:){3}(?:(?::${s}){0,2}:${c}|(?::${s}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:${s}:){2}(?:(?::${s}){0,3}:${c}|(?::${s}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:${s}:){1}(?:(?::${s}){0,4}:${c}|(?::${s}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::${s}){0,5}:${c}|(?::${s}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n`
            .replace(/\s*\/\/.*$/gm, "")
            .replace(/\n/g, "")
            .trim(),
        i = new RegExp(`(?:^${c}$)|(?:^${a}$)`),
        p = new RegExp(`^${c}$`),
        u = new RegExp(`^${a}$`),
        l = (e) =>
          e && e.exact
            ? i
            : new RegExp(`(?:${o(e)}${c}${o(e)})|(?:${o(e)}${a}${o(e)})`, "g");
      (l.v4 = (e) =>
        e && e.exact ? p : new RegExp(`${o(e)}${c}${o(e)}`, "g")),
        (l.v6 = (e) =>
          e && e.exact ? u : new RegExp(`${o(e)}${a}${o(e)}`, "g"));
      var d = l;
      function $(e) {
        return d.v6({ exact: !0 }).test(e);
      }
      function f(e) {
        return d.v4({ exact: !0 }).test(e);
      }
      var g = n(5696);
      const w = /\s+at.*[(\s](.*)\)?/,
        E =
          /^(?:(?:(?:node|node:[\w/]+|(?:(?:node:)?internal\/[\w/]*|.*node_modules\/(?:babel-polyfill|pirates)\/.*)?\w+)(?:\.js)?:\d+:\d+)|native)/,
        h =
          "undefined" === typeof g.homedir
            ? ""
            : g.homedir().replace(/\\/g, "/");
      function y(e, { pretty: t = !1, basePath: n } = {}) {
        const r =
          n &&
          new RegExp(
            `(at | \\()${(function (e) {
              if ("string" !== typeof e)
                throw new TypeError("Expected a string");
              return e
                .replace(/[|\\{}()[\]^$+*?.]/g, "\\$&")
                .replace(/-/g, "\\x2d");
            })(n.replace(/\\/g, "/"))}`,
            "g"
          );
        if ("string" === typeof e)
          return e
            .replace(/\\/g, "/")
            .split("\n")
            .filter((e) => {
              const t = e.match(w);
              if (null === t || !t[1]) return !0;
              const n = t[1];
              return (
                !(
                  n.includes(".app/Contents/Resources/electron.asar") ||
                  n.includes(".app/Contents/Resources/default_app.asar") ||
                  n.includes(
                    "node_modules/electron/dist/resources/electron.asar"
                  ) ||
                  n.includes(
                    "node_modules/electron/dist/resources/default_app.asar"
                  )
                ) && !E.test(n)
              );
            })
            .filter((e) => "" !== e.trim())
            .map(
              (e) => (
                r && (e = e.replace(r, "$1")),
                t &&
                  (e = e.replace(w, (e, t) => e.replace(t, t.replace(h, "~")))),
                e
              )
            )
            .join("\n");
      }
      class m extends Error {
        #e;
        name = "AggregateError";
        constructor(e) {
          if (!Array.isArray(e))
            throw new TypeError(
              "Expected input to be an Array, got " + typeof e
            );
          let t = (e = e.map((e) =>
            e instanceof Error
              ? e
              : null !== e && "object" === typeof e
              ? Object.assign(new Error(e.message), e)
              : new Error(e)
          ))
            .map((e) =>
              "string" === typeof e.stack && e.stack.length > 0
                ? y(e.stack).replace(
                    /\s+at .*aggregate-error\/index.js:\d+:\d+\)?/g,
                    ""
                  )
                : String(e)
            )
            .join("\n");
          (t =
            "\n" +
            (function (e, t = 1, n = {}) {
              const { indent: r = " ", includeEmptyLines: o = !1 } = n;
              if ("string" !== typeof e)
                throw new TypeError(
                  `Expected \`input\` to be a \`string\`, got \`${typeof e}\``
                );
              if ("number" !== typeof t)
                throw new TypeError(
                  `Expected \`count\` to be a \`number\`, got \`${typeof t}\``
                );
              if (t < 0)
                throw new RangeError(
                  `Expected \`count\` to be at least 0, got \`${t}\``
                );
              if ("string" !== typeof r)
                throw new TypeError(
                  `Expected \`options.indent\` to be a \`string\`, got \`${typeof r}\``
                );
              if (0 === t) return e;
              const c = o ? /^/gm : /^(?!\s*$)/gm;
              return e.replace(c, r.repeat(t));
            })(t, 4)),
            super(t),
            (this.#e = e);
        }
        get errors() {
          return this.#e.slice();
        }
      }
      class x extends Error {
        constructor(e) {
          super("Could not get the public IP address", e),
            (this.name = "IpNotFoundError");
        }
      }
      class b extends Error {
        constructor() {
          super("Request was cancelled"), (this.name = "CancelError");
        }
        get isCanceled() {
          return !0;
        }
      }
      const v = { timeout: 5e3 },
        R = {
          v4: ["https://ipv4.icanhazip.com/", "https://api.ipify.org/"],
          v6: ["https://ipv6.icanhazip.com/", "https://api6.ipify.org/"],
        },
        _ = (e, t, n) => {
          const r = new XMLHttpRequest();
          let o;
          const c = new Promise((c, s) => {
            (o = s),
              r.addEventListener("error", s, { once: !0 }),
              r.addEventListener("timeout", s, { once: !0 }),
              r.addEventListener(
                "load",
                () => {
                  const e = r.responseText.trim();
                  e && ("v6" === n ? $ : f)(e) ? c(e) : s();
                },
                { once: !0 }
              ),
              r.open("GET", e),
              (r.timeout = t.timeout),
              r.send();
          });
          return (
            (c.cancel = () => {
              r.abort(), o(new b());
            }),
            c
          );
        },
        k = (e, t) => {
          let n;
          const r = (async function () {
            const r = [...R[e], ...(t.fallbackUrls ?? [])];
            let o;
            for (const s of r)
              try {
                n = _(s, t, e);
                return await n;
              } catch (c) {
                if (((o = c), c instanceof b)) throw c;
              }
            throw new x({ cause: o });
          })();
          return (
            (r.cancel = () => {
              n.cancel();
            }),
            r
          );
        },
        C = (function (e, t) {
          return function (n) {
            const r = e(n),
              o = t(n),
              c = (async () => {
                try {
                  const e = await o;
                  return r.cancel(), e;
                } catch (e) {
                  if (!(e instanceof x)) throw e;
                  try {
                    return await r;
                  } catch (t) {
                    throw new m([t, e]);
                  }
                }
              })();
            return (
              (c.cancel = () => {
                r.cancel(), o.cancel();
              }),
              c
            );
          };
        })(A, T);
      function A(e) {
        return k("v4", { ...v, ...e });
      }
      function T(e) {
        return k("v6", { ...v, ...e });
      }
    },
  },
]);
