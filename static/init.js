;(function () {
  const scriptTag = document.createElement('script')
  scriptTag.src = '/scripts.js'

  scriptTag.onload = () => {
    window.initAnalytics('GTM-5JC2SVK')
  }

  document.body.appendChild(scriptTag)
})()
