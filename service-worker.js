/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "37e509d378222943ae713390963cfb14"
  },
  {
    "url": "assets/css/0.styles.49d01e74.css",
    "revision": "11490b38cb84a1539590db8d03207e59"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3168e351.js",
    "revision": "45b1488f8dfdf4504403e2327c1eca46"
  },
  {
    "url": "assets/js/10.37c08d3b.js",
    "revision": "5a204e6392179e0025bc996dec4c4be2"
  },
  {
    "url": "assets/js/11.eb462609.js",
    "revision": "90bc50e03e16894509ad55ff6c35d819"
  },
  {
    "url": "assets/js/12.5ff1082d.js",
    "revision": "e3e37038135b95ec6374e57e6220a8d1"
  },
  {
    "url": "assets/js/13.e43cb3ee.js",
    "revision": "02540e1f29ffc86f2cfbda071a9755ee"
  },
  {
    "url": "assets/js/14.d50adbc5.js",
    "revision": "6f02741e99c92cdb73194ed0d53e79ff"
  },
  {
    "url": "assets/js/15.596c6695.js",
    "revision": "10e8d277f93e317546c63e51e53a99ca"
  },
  {
    "url": "assets/js/16.9ba0cf68.js",
    "revision": "caf616e0f18d9c66b542606df875c34a"
  },
  {
    "url": "assets/js/17.1dfa57db.js",
    "revision": "c9f75fd77c4eee5684f6d94275f2ea08"
  },
  {
    "url": "assets/js/18.f6a3d779.js",
    "revision": "9a96d64f68c138a78d333673bf8c6478"
  },
  {
    "url": "assets/js/19.307bad0f.js",
    "revision": "4d05cbb608c73b2c55455b7214b1e427"
  },
  {
    "url": "assets/js/20.91a5e487.js",
    "revision": "3e7f022081883b8d9b4e3d6a5e8aeabd"
  },
  {
    "url": "assets/js/21.2c179a43.js",
    "revision": "a27349ffb8fd127493ad6a1bb2e5ae90"
  },
  {
    "url": "assets/js/22.5e2f3749.js",
    "revision": "fd81bf5bcdef1fff78d096470c74169f"
  },
  {
    "url": "assets/js/4.70f28aa9.js",
    "revision": "6a0b79590534ba1aa6196321731ee30d"
  },
  {
    "url": "assets/js/5.1f6dcdfb.js",
    "revision": "2ff6f5395cd7ddd7434543b37b15b58b"
  },
  {
    "url": "assets/js/6.03131d5d.js",
    "revision": "f09e23db22c61292d892196f8176620c"
  },
  {
    "url": "assets/js/7.2d9341d8.js",
    "revision": "9475db25331b497663132d5c8039580f"
  },
  {
    "url": "assets/js/8.ef5c8a90.js",
    "revision": "545a54db4ff0d7bd349e715cc28e7caf"
  },
  {
    "url": "assets/js/9.f60e4355.js",
    "revision": "ace906cda7e6078fb2f0a0a517d28d7e"
  },
  {
    "url": "assets/js/app.6586b965.js",
    "revision": "3644c750cd2dcd304a788dbee9e9abcd"
  },
  {
    "url": "assets/js/vendors~flowchart.8b59b666.js",
    "revision": "d1d978e32f3ef4709d3695da1ebc6f72"
  },
  {
    "url": "categories/博客/index.html",
    "revision": "6862591890260a7a299344283a480226"
  },
  {
    "url": "categories/模板/index.html",
    "revision": "93f50bee1f612db279c6a4b020d87ba2"
  },
  {
    "url": "categories/index.html",
    "revision": "1ac8e22149ad34003bbd9bcd9c7fc778"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "ac8fa020ef98e33068ec1d45b7cbded4"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "2a3399bb955b12e5e0eaac9227cfd039"
  },
  {
    "url": "docs/TimeLine/index.html",
    "revision": "b1e583e68373bacd1822bf72f0ab775f"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "c8d6823b6c5bba1d5b6893c2dac7d326"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "045f5b7877851714d660f258fe720051"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "7e2ab28a8a2ee3e93e600ff9e0f681cd"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "762c9f47104115647eb97ee8995725c8"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "bed3f3476a4308a2d8671cadcb61cbf4"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "dfec6e6fbc3683ac7668704412024562"
  },
  {
    "url": "images/avatar.png",
    "revision": "aca13312fa1be3b96924d12833b23c65"
  },
  {
    "url": "images/hero.png",
    "revision": "d47da165832465e7ef07735f8d0e28da"
  },
  {
    "url": "images/logo.png",
    "revision": "d47da165832465e7ef07735f8d0e28da"
  },
  {
    "url": "index.html",
    "revision": "f4a2668a02ca751b8b26c7d6d62d3be5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "6b42a20b371a48b8c9320d5f2d15134a"
  },
  {
    "url": "js/sidebar.js",
    "revision": "a19302a47a363bb439cc1d671192be85"
  },
  {
    "url": "live2d/wanko/assets/moc/wanko.1024/texture_00.png",
    "revision": "10b7047251205db46fdac7632b5d4642"
  },
  {
    "url": "tag/博客/index.html",
    "revision": "31c07de9d50d0e7e21eee2eef66dae86"
  },
  {
    "url": "tag/模板/index.html",
    "revision": "7b0f1880d2dcf313a31bc80d33e0cfa0"
  },
  {
    "url": "tag/index.html",
    "revision": "e9b40e583885882dbcab114658176974"
  },
  {
    "url": "timeline/index.html",
    "revision": "170e1f2af71ec122c82425e5762d5359"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
