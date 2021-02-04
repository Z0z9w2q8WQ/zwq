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
    "revision": "fb6381644b65284a0b24e4ad8c790b08"
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
    "url": "assets/js/11.2a29b157.js",
    "revision": "a94bfd8f811b59868e97c48b4c4acca6"
  },
  {
    "url": "assets/js/12.9f3c188d.js",
    "revision": "d699de9a3a4509ff8ed9d6a64b80e038"
  },
  {
    "url": "assets/js/13.54edd612.js",
    "revision": "164116b56aa508dd93c5565c3140ea63"
  },
  {
    "url": "assets/js/14.0a50f0c4.js",
    "revision": "2d507e7d1897171c4a4c47c30f6726b9"
  },
  {
    "url": "assets/js/15.cce87948.js",
    "revision": "5b5c90dacd0d9a993256ca4fa675a4ac"
  },
  {
    "url": "assets/js/16.be72ab17.js",
    "revision": "d897c4f1d6cab63bd128cc62cfcb2b89"
  },
  {
    "url": "assets/js/17.fc3957cb.js",
    "revision": "f98565813888b8dc707b0b86746ac969"
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
    "url": "assets/js/app.3ebcfc8c.js",
    "revision": "4b19374d7b95aeffc033053c70eb93f2"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "39206ce7d25dbcff68e27c46343fd9e5"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "b7b219d60f6e952a684d92f6104673d6"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "cbf82eda74e4039040e2db235e652214"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "6e31c15139baf3654b1464bb2bd43c53"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "157213741f430c82e45b96c88e69512a"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "487122ac92fad483cf65db7b9f9c741e"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "7e520a9d406bd364167185f6122e8c11"
  },
  {
    "url": "categories/index.html",
    "revision": "7662747007ca8022cc278f8b29a68134"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "7f3d16dc0efbddee22ac17c25966d719"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "4bbe2f8ff8dd67b1b6066110fa2ffa3d"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "206f813843934d044dd4d05bb55eaaf5"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "05e1c1dc567a2dcf785eefe0968fa1c9"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "3e7658fd01e5e805971429aab86c8976"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "190be2deb84d9d401b0d041c305892ff"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "6a3a946f6e8708c9c7d35f6b09a9186b"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "12a17269226749c652176854a611bf78"
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
    "revision": "97921dc52940908a35481dad12957c5a"
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
    "revision": "88e60360729d4fb6cfcd69b7c90f9106"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "b5f3a7972640601f8242d4ad0e8c4699"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "bcecea77201a4d708ea626e5cef05b71"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "730a29bdf73f72f1f1ca5956c16cfa95"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "bd9cd374dad2840740d4a3a3c6641b14"
  },
  {
    "url": "timeline/index.html",
    "revision": "fbee61bef3b8a8aeb8d223ec0d5fa88e"
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
