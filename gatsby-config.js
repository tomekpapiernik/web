const getTimeValueInSeconds = (timeValue) => {
  if (Number(timeValue).toString() === timeValue) {
    return timeValue
  }

  const {
    2: hours = '0',
    4: minutes = '0',
    6: seconds = '0'
  } = timeValue.match(/((\d*)h)?((\d*)m)?((\d*)s)?/)

  return String((Number(hours) * 60 + Number(minutes)) * 60 + Number(seconds))
}

const getYoutubeID = (urlString) => {
  const url = new URL(urlString)
  return url.host === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v')
}

const getYouTubeIFrameSrc = (urlString) => {
  const url = new URL(urlString)
  const id = getYoutubeID(urlString)

  const embedUrl = new URL(
    `https://www.youtube-nocookie.com/embed/${id}?rel=0`
  )

  url.searchParams.forEach((value, name) => {
    if (name === 'v') {
      return
    }

    if (name === 't') {
      embedUrl.searchParams.append('start', getTimeValueInSeconds(value))
    } else {
      embedUrl.searchParams.append(name, value)
    }
  })

  return embedUrl.toString()
}

module.exports = {
  siteMetadata: {
    title: `ory.sh`,
    description: `Implement OAuth 2.0 and OpenID Connect in minutes with open source from ORY. Works in both new and existing systems.`,
    author: `ORY Corp.`,
    siteUrl: `https://www.ory.sh`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/src/markdown/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/markdown/blog`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `summit`,
        path: `${__dirname}/src/markdown/summit`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `jobs`,
        path: `${__dirname}/src/markdown/jobs`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `release-notes`,
        path: `${__dirname}/src/markdown/release-notes`
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.*images\/animations\/.*\.svg$/ // See below to configure properly
        }
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        remarkPlugins: [
          [
            require(`remark-admonitions`), {
            tag: ':::',
            icons: 'svg'
          }
          ]
        ],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 860,
              tracedSVG: true,
              loading: 'lazy',
              withWebp: true
            }
          },
          {
            resolve: `gatsby-remark-embedder`,
            options: {
              customTransformers: [
                {
                  shouldTransform: (url) => {
                    const { host, pathname, searchParams } = new URL(url)

                    return (
                      host === 'youtu.be' ||
                      (['youtube.com', 'www.youtube.com'].includes(host) &&
                        pathname.includes('/watch') &&
                        Boolean(searchParams.get('v')))
                    )
                  },
                  getHTML: (url, { width = '100%', height = '315' }) => {
                    const iframeSrc = getYouTubeIFrameSrc(url)
                    const id = getYoutubeID(url)

                    return `<div class='youtube'><iframe loading='lazy' width='${width}' height='${height}' src='${iframeSrc}' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen srcdoc="<style>*{padding: 0; margin: 0; overflow: hidden}html, body{height: 100%}img, span{position: absolute; width: 100%; top: 0; bottom: 0; margin: auto}span{height: 1.5em; text-align: center; font: 48px/1.5 sans-serif; color: white; text-shadow: 0 0 0.5em black}</style><a href='${iframeSrc}&autoplay=1'><img src='https://img.youtube.com/vi/${id}/hqdefault.jpg'/><span>▶</span></a>"></iframe></div>`
                  },
                  name: 'YouTube'
                }
              ]
            }
          },
          {
            resolve: 'gatsby-remark-emojis',
            options: {
              active: true,
              class: 'remark-emoji',
              size: 64
            }
          },
          // prismjs to be loaded last or it will interfere with remark-embed-video
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'language-'
            }
          },
          {
            resolve: `gatsby-remark-autolink-headers`
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-react-helmet-canonical-urls`,
    //   options: {
    //     siteUrl: `https://www.ory.sh`
    //   }
    // },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {},
        postCssPlugins: [
          require('postcss-for'),
          require('lost'),
          require(`postcss-preset-env`)({
            stage: 0,
            features: {
              'custom-media-queries': {
                importFrom: [
                  {
                    customMedia: {
                      '--sm-viewport': '(max-width: 375px)',
                      '--md-viewport': '(max-width: 768px) and (min-width: 375px)',
                      '--lg-viewport': '(min-width: 769px)',
                      '--mobile-viewport': '(max-width: 768px)',
                      '--xs': '(min-width: 0px) and (max-width: 599px)', // small phone
                      '--sm': '(min-width: 600px) and (max-width: 959px)', // larger phone / tablet
                      '--md': '(min-width: 960px) and (max-width: 1279px)', // small laptop/desktop
                      '--lg': '(min-width: 1280px) and (max-width: 1919px)', // standard desktop
                      '--xl': '(min-width: 1920px)'
                    }
                  }
                ]
              }
            }
          })
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap`
      }
    },
    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    // name: `gatsby-starter-default`,
    // short_name: `starter`,
    // start_url: `/`,
    // background_color: `#663399`,
    // theme_color: `#663399`,
    // display: `minimal-ui`,
    // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
    // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: 'src/images/icon/favicon-196x196.png',
        name: `ORY Website and Documentation`,
        short_name: `ORY`,
        start_url: `/`,
        background_color: `#15283B`,
        theme_color: `#6274F3`,
        display: `browser`
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        workboxConfig: {
          importWorkboxFrom: `cdn`,
          runtimeCaching: [
            {
              // Do not cache ads
              urlPattern: /^https?:\/\/codefund\.io/,
              handler: `NetworkOnly`
            },
            {
              // Cache docs css etc
              urlPattern: /^.+\/docs\/.+\.(css|js|png|svg|jpg)/,
              handler: `StaleWhileRevalidate`
            },
            {
              // Cache docs pages
              urlPattern: /^.+\/docs\/([a-zA-Z0-9\-_\/]+)(\/||\.html|\.htm)/,
              handler: `NetworkFirst`
            }
          ]
        }
      }
    },
    `gatsby-plugin-force-trailing-slashes`,
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '2',
        cookieDomain: '*.ory.sh',
        // disableCookies: true,
        matomoUrl: 'https://sqa-web.ory.sh',
        siteUrl: 'https://www.ory.sh',
        matomoPhpScript: 'np.php',
        matomoJsScript: 'js/np.min.js',
        trackLoad: true,
        enableJSErrorTracking: true,
        disableCookies: true
      }
    },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //
    //     googleAnalytics: {
    //       trackingId: 'UA-71865250-1',
    //       cookieName: 'gdpr_cookie_analytics',
    //       anonymize: true,
    //       allowAdFeatures: false
    //     },
    //
    //     googleTagManager: {
    //       trackingId: '',
    //       cookieName: 'gdpr_cookie_analytics'
    //     },
    //
    //     facebookPixel: {
    //       pixelId: '', // leave empty if you want to disable the tracker
    //       cookieName: 'gdpr_cookie_analytics' // default
    //     },
    //
    //     environments: ['production', 'development']
    //   }
    // }
    
    // make sure to keep it last in the array
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        // It seems like there's an issue with the _headers file and the `X-Frame-Options` header.
        // https://answers.netlify.com/t/x-frame-options-header-not-updated-cached-headers/29070
        // The following lines is a workaround for this issue.
        // https://answers.netlify.com/t/change-the-header-x-frame-options-to-one-of-my-environments/27974/9
        headers: {
          "/*": [
            "X-Frame-Options: SAMEORIGIN",
            "X-XSS-Protection: 1",
            "Content-Security-Policy: default-src 'self' blob: 'unsafe-inline' 'unsafe-eval' unpkg.com miro.com *.algolianet.com *.algolianet.net storage.googleapis.com tagmanager.google.com *.googletagmanager.com *.google-analytics.com google-analytics.com ssl.gstatic.com gstatic.com fonts.gstatic.com github.com *.githubusercontent.com gh-card.dev *.ory.sh *.youtube.com *.youtube-nocookie.com fonts.googleapis.com fonts.gstatic.com data: s.ytimg.com *.iubenda.com *.cloudfront.net *.licdn.com *.hs-scripts.com *.hsleadflows.net *.hs-banner.com *.hsadspixel.net *.hubspotfeedback.com *.usemessages.com *.hs-analytics.net *.hscollectedforms.net *.hsforms.net *.hsforms.com *.g.doubleclick.net *.hubapi.com *.hubspot.com analytics.google.com; img-src * data:",
            "X-Content-Type-Options: nosniff",
            "Referrer-Policy: strict-origin-when-cross-origin",
            "Permissions-Policy: accelerometer=(), ambient-light-sensor=(), battery=(), camera=(), display-capture=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), midi=(), usb=()",
          ],
        },
      },
    },
  ]
}
