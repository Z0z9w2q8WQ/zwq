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
    "revision": "a1ab09fcb907fa016f1fd0f0349cb7d6"
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
    "url": "assets/js/14.0457d7ed.js",
    "revision": "d483aa50209a6f67d5f3ee8d1fbe61a4"
  },
  {
    "url": "assets/js/15.d48fec76.js",
    "revision": "3d8498937bc13545586fa4a50b27f462"
  },
  {
    "url": "assets/js/16.8bc7302a.js",
    "revision": "09805efa5ad287e1dc37925e0c98727a"
  },
  {
    "url": "assets/js/17.9cb8dd93.js",
    "revision": "159dbf79767cd6153b3dcce0734abc6c"
  },
  {
    "url": "assets/js/18.92921e5f.js",
    "revision": "2689d4735b622ef912a8789cadcc4b0a"
  },
  {
    "url": "assets/js/19.f34dca7b.js",
    "revision": "21c3fa410d2c7419808fe42b226d988b"
  },
  {
    "url": "assets/js/20.176886d5.js",
    "revision": "857e002fc6b2db04e5f63ffe5b6fb503"
  },
  {
    "url": "assets/js/21.b6475d87.js",
    "revision": "cda4db6c05b2de34aca35993d93b8d7d"
  },
  {
    "url": "assets/js/22.cf2c344c.js",
    "revision": "984253107b44452a61fa2ac897c22913"
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
    "url": "assets/js/app.9785cef1.js",
    "revision": "75c873d4e63f26000297d9ca5f6e79bd"
  },
  {
    "url": "blogs/category1/2018/121501.html",
    "revision": "d82e28bb87aef9ba286cd1e566b5239f"
  },
  {
    "url": "blogs/category1/2019/092101.html",
    "revision": "c3a630fd40073d7e39104fb334e1ee2b"
  },
  {
    "url": "blogs/category2/2016/121501.html",
    "revision": "683c8ce78ff35f5c9a88ab41efee28ad"
  },
  {
    "url": "blogs/category2/2017/092101.html",
    "revision": "ce0a362dafdfd601830ac095ac9c0654"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "0e51f64e551f31547cd8f7e52052589e"
  },
  {
    "url": "categories/category1/index.html",
    "revision": "27e631a8b08b5386ea9c741ab4e900b0"
  },
  {
    "url": "categories/category2/index.html",
    "revision": "36e41b58c8488bbe22819de6d04f52a5"
  },
  {
    "url": "categories/index.html",
    "revision": "455849683c094c830bffbd48d37f2ee8"
  },
  {
    "url": "docs/Home/index.html",
    "revision": "1ea67b367e1f6e0c806f65ee9234823a"
  },
  {
    "url": "docs/Template/index.html",
    "revision": "9e8496783aab7d68880993bb8863d457"
  },
  {
    "url": "docs/Vue/index.html",
    "revision": "a52ac3cb69797e484f4e6e363a70a037"
  },
  {
    "url": "docs/Vue/test1.html",
    "revision": "b00c19afb30561e9a8bb45d9891427e9"
  },
  {
    "url": "docs/Vue/test2.html",
    "revision": "a6f1d287dc24672013abf67e1fd34883"
  },
  {
    "url": "docs/Vue/test3.html",
    "revision": "6d640465364ad521a845286502a5f233"
  },
  {
    "url": "docs/Vue/test4.html",
    "revision": "43bd0de005e8eec25093d5feeecb6798"
  },
  {
    "url": "docs/Vue/test5.html",
    "revision": "ae9a715cd41c862b15ab3b372a9af858"
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
    "revision": "4fe34c6abacb89a7944b32df52e4c034"
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
    "revision": "d112cc9788d512a9972057103ac8360f"
  },
  {
    "url": "tag/tag1/index.html",
    "revision": "e8acd15b4da1d88d337c94557752e44b"
  },
  {
    "url": "tag/tag2/index.html",
    "revision": "5b6120a59ee0dcc8f421326a8a0e30a7"
  },
  {
    "url": "tag/tag3/index.html",
    "revision": "a24de07f48ea1f70217d0219522fd163"
  },
  {
    "url": "tag/tag4/index.html",
    "revision": "a534e8a6a8bf6315c43bab4e93de7881"
  },
  {
    "url": "timeline/index.html",
    "revision": "013fef1347284519fb494b30fc0c2933"
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
