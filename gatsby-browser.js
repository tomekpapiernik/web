/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it
import 'normalize.css'
import 'phosphor-icons/src/css/phosphor.css'
import 'prismjs/themes/prism.css'
import 'remark-admonitions/styles/classic.css'

import './src/styles/global.css'
import './src/styles/grid.css'
import './src/styles/icons.css'
import './src/styles/themes/default.css'
import './src/styles/typography.css'

if (window && process.env.NODE_ENV === 'production') {
  const script = document.createElement('script')
  script.src = '/scripts.js'
  document.body.appendChild(script)
  script.onload = () => window.initAnalytics()
}

export const onRouteUpdate = () => {
  if (window && typeof window.initAnalytics === 'function') {
    window.initAnalytics()
  }
}
