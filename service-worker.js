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
    "revision": "f6bed3684c2ea1e7d38b0f37ec7f11bb"
  },
  {
    "url": "assets/css/0.styles.647fccdb.css",
    "revision": "605688a88d34b1fcc77c06a6ea6274fc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.3e4124b3.js",
    "revision": "5efe3b20f64ef3d0f97287ead6e71326"
  },
  {
    "url": "assets/js/10.17be72d5.js",
    "revision": "a393d5377583daaa06e82d8683cb05b7"
  },
  {
    "url": "assets/js/11.9adcb1f9.js",
    "revision": "6b538981f1a2c1f54aa7ea1b5c1abe95"
  },
  {
    "url": "assets/js/12.9f3c188d.js",
    "revision": "d699de9a3a4509ff8ed9d6a64b80e038"
  },
  {
    "url": "assets/js/13.d601e2de.js",
    "revision": "a1a5f73cc602421192e4228fcc7f6921"
  },
  {
    "url": "assets/js/14.2fd5fdb7.js",
    "revision": "a521e01de8bbccca8c22dd6dde34fbd0"
  },
  {
    "url": "assets/js/15.ac9c237c.js",
    "revision": "c3d3bf189ed09c08802aaf1f30d739b0"
  },
  {
    "url": "assets/js/16.b65699d0.js",
    "revision": "01325c5145604e0ab05b6429f825aedc"
  },
  {
    "url": "assets/js/17.7afa7dcd.js",
    "revision": "c515de48acd841800fab59b8b273f883"
  },
  {
    "url": "assets/js/18.92921e5f.js",
    "revision": "2689d4735b622ef912a8789cadcc4b0a"
  },
  {
    "url": "assets/js/19.d318959a.js",
    "revision": "df7e0e83c7e1f0a776daeb237e5bc724"
  },
  {
    "url": "assets/js/20.4f7dd2c6.js",
    "revision": "b6ba7eccbdc491be40eb5434a09ef29e"
  },
  {
    "url": "assets/js/21.b6475d87.js",
    "revision": "cda4db6c05b2de34aca35993d93b8d7d"
  },
  {
    "url": "assets/js/22.101cb657.js",
    "revision": "f89339f3a92da31696bc014136cfa039"
  },
  {
    "url": "assets/js/23.55899b4f.js",
    "revision": "b6dceaaf0ef7ff1e2bb95c18f62fdfeb"
  },
  {
    "url": "assets/js/24.a91d0887.js",
    "revision": "34dc9d79bad2e54eafbb49b8d36efdb9"
  },
  {
    "url": "assets/js/25.36421510.js",
    "revision": "88e7a6051c7c07fd238248c08f8cbbf8"
  },
  {
    "url": "assets/js/3.dbf85789.js",
    "revision": "7894588781307373b64bb2a5f20bc3f2"
  },
  {
    "url": "assets/js/4.65068e34.js",
    "revision": "9e53c2c061aa786b619deaa3bdb38346"
  },
  {
    "url": "assets/js/5.17663a2b.js",
    "revision": "b25c236f9e1a36db9510b04d80f95800"
  },
  {
    "url": "assets/js/6.f96082b7.js",
    "revision": "70f24d3a643763855f5a6a435379fbb2"
  },
  {
    "url": "assets/js/7.34dcce9a.js",
    "revision": "c00bd211a930fde9668b6e04376e7902"
  },
  {
    "url": "assets/js/8.ab4880dd.js",
    "revision": "423f61142e885e8d0c5e5af676e88512"
  },
  {
    "url": "assets/js/9.85fa97a8.js",
    "revision": "3a985166ec8f83fd8105f0b1080e158a"
  },
  {
    "url": "assets/js/app.84708427.js",
    "revision": "1b2716746986e1382715877225464386"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "b1fe69092ca485f9ae7e4cde679340bd"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "5495b30ee43da3011ac27a237524ec60"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "6e9eb01f3c2d733988b1e50d918fd799"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "8b8e119dbdb8bde809d156c385b113fa"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "c154778474b25b6da2e01bae029a3af2"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "0a5863ccebf47674d02ecd3fc46dd452"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "154e81157c7bc213e568a0e80454059f"
  },
  {
    "url": "categories/index.html",
    "revision": "d6ca3cb8334ea756faf1ebed7aa610cf"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "762f351092757fe7a9af91fd97da319c"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "6c2f7234d838b2f78a769f03da7aed9f"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "3b01e7e6b9e9da2a6cd160a159764bea"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "6d595fb82ef813dc5d24e3691b8e2743"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "99424aec673967ecf758197446429ad5"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "b16213a5c394debb55a38f7bdf3d162f"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "eccaa1b90be3f74c43216d1dd13cac25"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "bc2153bfeaa802ee0bafa52f5b4f1b36"
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
    "revision": "0a3c5fe677ae19b89d0b5d00edca8251"
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
    "url": "tag/index.html",
    "revision": "359f4746d2618f56ce02c6b27d959faa"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "5585a1f1bce6748dec029b2d1190aa54"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "a021ea9841c86d9d5e4aef63e242e8ea"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "872f53efd30624019bf2f3ae0cdf745d"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b5c1588edbbfedfc799261043b038398"
  },
  {
    "url": "timeline/index.html",
    "revision": "56430321d7707276b9d9727f200ac412"
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
