(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    228: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(231),
        o = n(237);
      t.default = function() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement("h1", null, "Hi from the second page"),
          r.a.createElement("p", null, "Welcome to page 2"),
          r.a.createElement(i.Link, { to: "/" }, "Go back to the homepage")
        );
      };
    },
    231: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function() {
          return f;
        }),
        n.d(t, "StaticQueryContext", function() {
          return m;
        }),
        n.d(t, "StaticQuery", function() {
          return p;
        });
      var a = n(0),
        r = n.n(a),
        i = n(15),
        o = n.n(i),
        u = n(230),
        c = n.n(u);
      n.d(t, "Link", function() {
        return c.a;
      }),
        n.d(t, "withPrefix", function() {
          return u.withPrefix;
        }),
        n.d(t, "navigate", function() {
          return u.navigate;
        }),
        n.d(t, "push", function() {
          return u.push;
        }),
        n.d(t, "replace", function() {
          return u.replace;
        }),
        n.d(t, "navigateTo", function() {
          return u.navigateTo;
        });
      var l = n(232),
        s = n.n(l);
      n.d(t, "PageRenderer", function() {
        return s.a;
      });
      var d = n(49);
      n.d(t, "parsePath", function() {
        return d.a;
      });
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement("div", null, "Loading (StaticQuery)");
          });
        };
      function f() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
      p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      };
    },
    232: function(e, t, n) {
      var a;
      e.exports = ((a = n(234)) && a.default) || a;
    },
    233: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "Brian's posts" } } }
      };
    },
    234: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(15),
        o = n.n(i),
        u = n(53),
        c = n(1),
        l = function(e) {
          var t = e.location,
            n = c.a.getResourcesForPathname(t.pathname);
          return r.a.createElement(u.a, { location: t, pageResources: n });
        };
      (l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (t.default = l);
    },
    235: function(e, t, n) {},
    237: function(e, t, n) {
      "use strict";
      var a = n(233),
        r = n(0),
        i = n.n(r),
        o = n(15),
        u = n.n(o),
        c = n(239),
        l = n.n(c),
        s = n(231),
        d = function(e) {
          var t = e.siteTitle;
          return i.a.createElement(
            "div",
            { style: { background: "rebeccapurple", marginBottom: "1.45rem" } },
            i.a.createElement(
              "div",
              {
                style: {
                  margin: "0 auto",
                  maxWidth: 960,
                  padding: "1.45rem 1.0875rem"
                }
              },
              i.a.createElement(
                "h1",
                { style: { margin: 0 } },
                i.a.createElement(
                  s.Link,
                  {
                    to: "/",
                    style: { color: "white", textDecoration: "none" }
                  },
                  t
                )
              )
            )
          );
        },
        m = (n(235),
        function(e) {
          var t = e.children;
          return (
            e.data,
            i.a.createElement(s.StaticQuery, {
              query: "755544856",
              render: function(e) {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    l.a,
                    {
                      title: e.site.siteMetadata.title,
                      meta: [
                        { name: "description", content: "Sample" },
                        { name: "keywords", content: "sample, something" }
                      ]
                    },
                    i.a.createElement("html", { lang: "en" })
                  ),
                  i.a.createElement(d, {
                    siteTitle: e.site.siteMetadata.title
                  }),
                  i.a.createElement(
                    "div",
                    {
                      style: {
                        margin: "0 auto",
                        maxWidth: 960,
                        padding: "0px 1.0875rem 1.45rem",
                        paddingTop: 0
                      }
                    },
                    t
                  )
                );
              },
              data: a
            })
          );
        });
      (m.propTypes = { children: u.a.node.isRequired }), (t.a = m);
    }
  }
]);
//# sourceMappingURL=component---src-pages-page-2-js-e9c2866c57486a56c5e7.js.map
