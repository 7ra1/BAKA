(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6348],
  {
    16348: function (e, o, r) {
      "use strict";
      r.r(o),
        r.d(o, {
          StaticMap: function () {
            return m;
          },
        });
      var n,
        t = r(85893),
        a = r(67294),
        c = r(41125),
        s = r(4298),
        l = r.n(s),
        u = r(9008),
        i = r.n(u),
        m = function (e) {
          var o = e.latLng,
            r = void 0 === o ? { lat: 37.0902, lng: -95.7129 } : o,
            s = e.markerColor,
            u = void 0 === s ? c.theme.extend.colors.indigo[600] : s,
            m = e.theme,
            d = void 0 === m ? "light-v11" : m,
            p = e.className,
            f = e.zoom,
            v = void 0 === f ? 10 : f,
            x = (0, a.useRef)(null),
            b = (0, a.useRef)(
              "map-"
                .concat(new Date().getTime(), "-")
                .concat(Math.floor(1e3 * Math.random()))
            ),
            h = (0, a.useRef)(null);
          function k() {
            var e = window.L;
            if (null === e || void 0 === e ? void 0 : e.mapbox) {
              x.current && x.current.remove(),
                h.current && h.current.remove(),
                (e.mapbox.accessToken =
                  "pk.eyJ1IjoiZHVyYWJsZSIsImEiOiJjbGJjOHV1bHUwcjM5M3huOHdoZXdkdDRsIn0.geBkTZ4KBXWb669GQBr8rw");
              var o = e.mapbox.map(b.current).setView([0, 0], v);
              o.off("moveend"), o.scrollWheelZoom.disable();
              var t = "mapbox://styles/mapbox/".concat(d);
              e.mapbox.styleLayer(t).addTo(o);
              var a = e.marker([r.lat, r.lng], {
                icon: e.mapbox.marker.icon({ "marker-color": u }),
              });
              a.addTo(o),
                (x.current = a),
                o.panTo([r.lat, r.lng]),
                (h.current = o);
            } else
              n = setTimeout(function () {
                k();
              }, 1e3);
          }
          return (
            (0, a.useEffect)(function () {
              return (
                (n = setTimeout(function () {
                  k();
                }, 1e3)),
                function () {
                  n && clearTimeout(n),
                    x.current && x.current.remove(),
                    h.current && h.current.remove();
                }
              );
            }, []),
            (0, t.jsxs)(t.Fragment, {
              children: [
                (0, t.jsx)(i(), {
                  children: (0, t.jsx)("link", {
                    href: "https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.css",
                    rel: "stylesheet",
                  }),
                }),
                (0, t.jsx)(l(), {
                  defer: !0,
                  strategy: "lazyOnload",
                  src: "https://api.mapbox.com/mapbox.js/v3.3.1/mapbox.js",
                }),
                (0, t.jsx)("div", {
                  className: null !== p && void 0 !== p ? p : "w-full h-full",
                  id: b.current,
                }),
              ],
            })
          );
        };
    },
    4298: function (e, o, r) {
      e.exports = r(20699);
    },
  },
]);
