;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    227: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(231),
        o = a(237)
      t.default = function() {
        return r.a.createElement(
          o.a,
          null,
          r.a.createElement('h1', null, 'Hi there'),
          r.a.createElement('p', null, 'Welcome to my personal site.'),
          r.a.createElement(
            'p',
            null,
            "I'm a software developer based in Chicago, IL."
          ),
          r.a.createElement(i.Link, { to: '/page-2/' }, 'Go to page 2')
        )
      }
    },
    231: function(e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, 'graphql', function() {
          return f
        }),
        a.d(t, 'StaticQueryContext', function() {
          return m
        }),
        a.d(t, 'StaticQuery', function() {
          return p
        })
      var n = a(0),
        r = a.n(n),
        i = a(15),
        o = a.n(i),
        u = a(230),
        c = a.n(u)
      a.d(t, 'Link', function() {
        return c.a
      }),
        a.d(t, 'withPrefix', function() {
          return u.withPrefix
        }),
        a.d(t, 'navigate', function() {
          return u.navigate
        }),
        a.d(t, 'push', function() {
          return u.push
        }),
        a.d(t, 'replace', function() {
          return u.replace
        }),
        a.d(t, 'navigateTo', function() {
          return u.navigateTo
        })
      var l = a(232),
        s = a.n(l)
      a.d(t, 'PageRenderer', function() {
        return s.a
      })
      var d = a(49)
      a.d(t, 'parsePath', function() {
        return d.a
      })
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func,
      }
    },
    232: function(e, t, a) {
      var n
      e.exports = ((n = a(234)) && n.default) || n
    },
    233: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: "Brian's posts" } } },
      }
    },
    234: function(e, t, a) {
      'use strict'
      a.r(t)
      var n = a(0),
        r = a.n(n),
        i = a(15),
        o = a.n(i),
        u = a(53),
        c = a(1),
        l = function(e) {
          var t = e.location,
            a = c.a.getResourcesForPathname(t.pathname)
          return r.a.createElement(u.a, { location: t, pageResources: a })
        }
      ;(l.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired,
      }),
        (t.default = l)
    },
    235: function(e, t, a) {},
    237: function(e, t, a) {
      'use strict'
      var n = a(233),
        r = a(0),
        i = a.n(r),
        o = a(15),
        u = a.n(o),
        c = a(239),
        l = a.n(c),
        s = a(231),
        d = function(e) {
          var t = e.siteTitle
          return i.a.createElement(
            'div',
            { style: { background: 'rebeccapurple', marginBottom: '1.45rem' } },
            i.a.createElement(
              'div',
              {
                style: {
                  margin: '0 auto',
                  maxWidth: 960,
                  padding: '1.45rem 1.0875rem',
                },
              },
              i.a.createElement(
                'h1',
                { style: { margin: 0 } },
                i.a.createElement(
                  s.Link,
                  {
                    to: '/',
                    style: { color: 'white', textDecoration: 'none' },
                  },
                  t
                )
              )
            )
          )
        },
        m = (a(235),
        function(e) {
          var t = e.children
          return (
            e.data,
            i.a.createElement(s.StaticQuery, {
              query: '755544856',
              render: function(e) {
                return i.a.createElement(
                  i.a.Fragment,
                  null,
                  i.a.createElement(
                    l.a,
                    {
                      title: e.site.siteMetadata.title,
                      meta: [
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                      ],
                    },
                    i.a.createElement('html', { lang: 'en' })
                  ),
                  i.a.createElement(d, {
                    siteTitle: e.site.siteMetadata.title,
                  }),
                  i.a.createElement(
                    'div',
                    {
                      style: {
                        margin: '0 auto',
                        maxWidth: 960,
                        padding: '0px 1.0875rem 1.45rem',
                        paddingTop: 0,
                      },
                    },
                    t
                  )
                )
              },
              data: n,
            })
          )
        })
      ;(m.propTypes = { children: u.a.node.isRequired }), (t.a = m)
    },
  },
])
//# sourceMappingURL=component---src-pages-index-js-26ea0dcf8bb8d89e1b10.js.map
