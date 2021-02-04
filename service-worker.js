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
    "revision": "58acd1296b818a045df3212553a490b5"
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
    "url": "assets/js/13.0cd6058f.js",
    "revision": "7a9da38d276fe4aebc4f83d635aae175"
  },
  {
    "url": "assets/js/14.ef9eb2b8.js",
    "revision": "34dd30bb8a4620cbe489af1f43bbd080"
  },
  {
    "url": "assets/js/15.ac9c237c.js",
    "revision": "c3d3bf189ed09c08802aaf1f30d739b0"
  },
  {
    "url": "assets/js/16.c5f7af8d.js",
    "revision": "a86fe9f86364c171996bb63d7c2732c1"
  },
  {
    "url": "assets/js/17.7afa7dcd.js",
    "revision": "c515de48acd841800fab59b8b273f883"
  },
  {
    "url": "assets/js/18.90fcf58f.js",
    "revision": "b2247534f4ce161ecb2874cd16e8169a"
  },
  {
    "url": "assets/js/19.d318959a.js",
    "revision": "df7e0e83c7e1f0a776daeb237e5bc724"
  },
  {
    "url": "assets/js/20.b751d43c.js",
    "revision": "3e608311fd569d2dd9fb37a8a19f1069"
  },
  {
    "url": "assets/js/21.8643ee1d.js",
    "revision": "c566319bfb0eca94dd3541fccaac8e8a"
  },
  {
    "url": "assets/js/22.66072436.js",
    "revision": "36017240f485b8694ea18280d5323734"
  },
  {
    "url": "assets/js/23.85e8dcd9.js",
    "revision": "38922d8dd31cba9870d4b4b1c19fd6c6"
  },
  {
    "url": "assets/js/24.60b3dba1.js",
    "revision": "023db71f845c50d990b6c840da10937d"
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
    "url": "assets/js/app.bafab856.js",
    "revision": "ae0970af0c0959c873e7ff4fe91eff9a"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "e2c81c4e05ee77326bb0e83b6612eb42"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "ff94f3f379daa644e7e734bf0a14c0d5"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "a09e188379f95de959b740f4e0758d8d"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "0495d93e2c39ff07c4bbd602ff6050d0"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "7ed6e88b68d49f58c97bab4d87977e5f"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "6775cbc1a2d70c0032fd094529ed1539"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "94cdc8380938a4d070a2067cc8ef76ed"
  },
  {
    "url": "categories/index.html",
    "revision": "edf9f8977fd6a81bd5b5cb071c4c0a0d"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "19bc642a16a580ebace5810ce75a9896"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "1307fbe88fae6c3ec87b815d3de3bf08"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "b46bd14995c60d3631acbe5603bed349"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "0dd2cb522b3313e90633235a2a4dc8d5"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "f40cb951d0abb42a1249e2069681e241"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "0fecded9e0c028968c7ced1691864e68"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "ef647c1254a303e34a5e57c97daaefd5"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "21e269f3f655e638b8743c89523ddf2b"
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
    "revision": "95a6d6f5111305b3437d364dad41ba59"
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
    "revision": "efbbc0d6292d1d0d9065108b59f8738c"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "fa81fefbf95c37331cfe5288bef77d6f"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "09eeab61aff0b0017bf298d4d25bc80f"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "be0da1b8c51e239d9deb36e9c117ec2a"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "b691f7132b3ab616dbeaae5f252f4fa1"
  },
  {
    "url": "timeline/index.html",
    "revision": "dc8630bf2d49e3c5f66e0e5452250959"
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
