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
    "revision": "7103335dd654b33c4196058b0de5a1f1"
  },
  {
    "url": "archives/index.html",
    "revision": "e667f0c93043e17dac91ccaec8514183"
  },
  {
    "url": "assets/css/0.styles.eb2eadb8.css",
    "revision": "679f9692e4bb50479ed9f6f05b7b9883"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/fonts/remixicon.31d28485.eot",
    "revision": "31d28485e1cf7369272270fd730327c0"
  },
  {
    "url": "assets/fonts/remixicon.881fbc46.woff",
    "revision": "881fbc46361e0c0e5f003c159b2f3005"
  },
  {
    "url": "assets/fonts/remixicon.888e61f0.ttf",
    "revision": "888e61f04316f10bddfff7bee10c6dd0"
  },
  {
    "url": "assets/fonts/remixicon.9915fef9.woff2",
    "revision": "9915fef980fa539085da55b84dfde760"
  },
  {
    "url": "assets/img/after-gzip.5db603db.jpg",
    "revision": "5db603dbb5b091fc5b754337774ae814"
  },
  {
    "url": "assets/img/after.c63d33d4.jpg",
    "revision": "c63d33d4b75a772c1985cffbf389df6c"
  },
  {
    "url": "assets/img/ant-icon.16b70c25.png",
    "revision": "16b70c25e49e437fe94800d99a7f4006"
  },
  {
    "url": "assets/img/ant-install.29360849.png",
    "revision": "29360849244ac01db4f9160c0fd035da"
  },
  {
    "url": "assets/img/ant-install2.850df243.png",
    "revision": "850df243f3ec7ea02e19cdde5ff8da64"
  },
  {
    "url": "assets/img/auths.b1133e38.jpg",
    "revision": "b1133e38115cdecd14a181849f52222b"
  },
  {
    "url": "assets/img/before-gzip.98470d85.jpg",
    "revision": "98470d85cff53c240267cd05883d6f0f"
  },
  {
    "url": "assets/img/before.e41488e6.jpg",
    "revision": "e41488e6988912abe05ed14fbb3cc4d2"
  },
  {
    "url": "assets/img/buildgood.bf753b30.jpg",
    "revision": "bf753b3034e65bddaaa3b5b7c53fe27c"
  },
  {
    "url": "assets/img/check-nginx-config.10ef0bbd.jpg",
    "revision": "10ef0bbda444b31a6601e88881eefa7c"
  },
  {
    "url": "assets/img/cloc.2dd9aedf.jpg",
    "revision": "2dd9aedf8d9738b8b2dcd67920795faf"
  },
  {
    "url": "assets/img/com1.489dfae0.jpg",
    "revision": "489dfae0ed118e847a968b9f6382cc0f"
  },
  {
    "url": "assets/img/com2.fdae16cb.jpg",
    "revision": "fdae16cb9f36052b6d9791210b8a5b8b"
  },
  {
    "url": "assets/img/dist-small.7326ecf3.jpg",
    "revision": "7326ecf3ab6553b165a38da61f580c5a"
  },
  {
    "url": "assets/img/dist.193bee67.jpg",
    "revision": "193bee67fc48e9692205a7f5687c6aa5"
  },
  {
    "url": "assets/img/ep-icon.6f75400b.png",
    "revision": "6f75400ba44578fc2a06ded01ea196e8"
  },
  {
    "url": "assets/img/ep1.53bf38e0.png",
    "revision": "53bf38e00b093a2b66a51432797f8a15"
  },
  {
    "url": "assets/img/ep2.bf9bf490.png",
    "revision": "bf9bf49048c4578d68c739e16042eb12"
  },
  {
    "url": "assets/img/ep3.40f769cf.png",
    "revision": "40f769cf4801d7a1b7e17d4062d7f39b"
  },
  {
    "url": "assets/img/ep4.9f5b0bba.png",
    "revision": "9f5b0bbaf25b9e683bed20a310d48838"
  },
  {
    "url": "assets/img/error1.15f745e0.png",
    "revision": "15f745e0acce7f613121bbad399ddab2"
  },
  {
    "url": "assets/img/horizontal-detail.5953eb90.jpg",
    "revision": "5953eb90ed1453afe52ba9b10a72a183"
  },
  {
    "url": "assets/img/horizontal.b6d09f73.jpg",
    "revision": "b6d09f73c9bc77a206bed8f496d2e45b"
  },
  {
    "url": "assets/img/hotlog.d61a5738.png",
    "revision": "d61a57384223a894ec3c75088f91e024"
  },
  {
    "url": "assets/img/i18n.d469b681.jpg",
    "revision": "d469b6810326ed212eebe1c930f91a36"
  },
  {
    "url": "assets/img/i18nAlly.62395d00.jpg",
    "revision": "62395d00e498aa569c88b6f315eb4726"
  },
  {
    "url": "assets/img/i18nRouter.cafd382c.jpg",
    "revision": "cafd382cd48b5eea9c061b73ae150395"
  },
  {
    "url": "assets/img/i18nVue.648163b2.png",
    "revision": "648163b24190b0ace7c07ee691023b9a"
  },
  {
    "url": "assets/img/icon-online.139d08c0.png",
    "revision": "139d08c0eeabdb1019531ae5a8d98e88"
  },
  {
    "url": "assets/img/iconfont.fbd6ce37.png",
    "revision": "fbd6ce3720f6fdc091ab3406d313cfc1"
  },
  {
    "url": "assets/img/iconify.df9ed662.png",
    "revision": "df9ed66216cbcf58616adc5bdd061cc8"
  },
  {
    "url": "assets/img/lodash.076dfa7d.png",
    "revision": "076dfa7d188cd3f935d1c534b2e09e27"
  },
  {
    "url": "assets/img/log.06f8014f.png",
    "revision": "06f8014f31a06c53a806b9fa2c55dcab"
  },
  {
    "url": "assets/img/mac.16fff2c5.png",
    "revision": "16fff2c5fa7bc27a2cece355eac82723"
  },
  {
    "url": "assets/img/menu-if.7af6fe3c.png",
    "revision": "7af6fe3c387e7156f5c527378e85cf79"
  },
  {
    "url": "assets/img/menu-local.e07b6d91.png",
    "revision": "e07b6d9176630794596518b4d0a5bf7c"
  },
  {
    "url": "assets/img/menu-svg.04cc239a.png",
    "revision": "04cc239ab5aeed820ee6c65d523b3dd8"
  },
  {
    "url": "assets/img/mixNav-detail.b7d39aef.jpg",
    "revision": "b7d39aef179bd2d673b7a12e6576460b"
  },
  {
    "url": "assets/img/mixNav.d96579e5.jpg",
    "revision": "d96579e524130b9e00f43dd2a1ac327e"
  },
  {
    "url": "assets/img/namespace.19870394.jpg",
    "revision": "19870394a63f646bba1c22bafe4b5c67"
  },
  {
    "url": "assets/img/nginx-config.5d0e66d7.jpg",
    "revision": "5d0e66d7fcb12d636afd659112769563"
  },
  {
    "url": "assets/img/no-output.48778faf.jpg",
    "revision": "48778fafc82625c1da7f2b53a786773d"
  },
  {
    "url": "assets/img/npm1.1ecb4afe.jpg",
    "revision": "1ecb4afe78606dd5fea86ea784391c05"
  },
  {
    "url": "assets/img/npm2.40452cbe.jpg",
    "revision": "40452cbe2463c22f4b4221dcf5342be1"
  },
  {
    "url": "assets/img/npm3.b590833f.jpg",
    "revision": "b590833f11f98d401540c88ef089c724"
  },
  {
    "url": "assets/img/online-click.3284c99a.png",
    "revision": "3284c99a88ede27c96c2440bd002b309"
  },
  {
    "url": "assets/img/online.e7a19c39.jpg",
    "revision": "e7a19c39a7dd6affb6655f51a8ff9265"
  },
  {
    "url": "assets/img/optimized.470a939d.png",
    "revision": "470a939d949122f74257fea9225525ed"
  },
  {
    "url": "assets/img/output.e13d001d.jpg",
    "revision": "e13d001d3d1fc6fb73f2137933b5509e"
  },
  {
    "url": "assets/img/package.594d76e2.jpg",
    "revision": "594d76e273a256e0edfc6c484469f70f"
  },
  {
    "url": "assets/img/pure-thin-cli.60567086.gif",
    "revision": "6056708699c91596b289052a11475374"
  },
  {
    "url": "assets/img/rank.415eac7f.png",
    "revision": "415eac7fe3ce8522e06a3b8cbc755e20"
  },
  {
    "url": "assets/img/rbac.8088af0f.jpg",
    "revision": "8088af0f701f3c172f469717ea8c568a"
  },
  {
    "url": "assets/img/recommended1.88981f91.png",
    "revision": "88981f9132ed75c261e5e4f3c21129d0"
  },
  {
    "url": "assets/img/recommended2.0db1b940.png",
    "revision": "0db1b940bdf606e3aaddec998ca1a9aa"
  },
  {
    "url": "assets/img/remixicon.95138f36.svg",
    "revision": "95138f36e015ad912c37db92164f5844"
  },
  {
    "url": "assets/img/report.2d928cf7.jpg",
    "revision": "2d928cf7b2669ee39b45a4e77fe18add"
  },
  {
    "url": "assets/img/roles.6ec7dd6e.jpg",
    "revision": "6ec7dd6e2960c8ba8cc84e6731163ea3"
  },
  {
    "url": "assets/img/router3.2f2f500c.png",
    "revision": "2f2f500c79a1e6ce927e90c635fb44d1"
  },
  {
    "url": "assets/img/router4.66740fa7.png",
    "revision": "66740fa73fd77773a48409d7befcf960"
  },
  {
    "url": "assets/img/router5.ff946986.png",
    "revision": "ff946986d9040a403ec69315bbb582a2"
  },
  {
    "url": "assets/img/router6.7f78f2eb.png",
    "revision": "7f78f2ebfe3105d960e76c888f08ba85"
  },
  {
    "url": "assets/img/router7.ab6000c0.png",
    "revision": "ab6000c0225669c89fca80eec9c88c55"
  },
  {
    "url": "assets/img/sass.0e3a4c43.png",
    "revision": "0e3a4c43e5e23d72a1e397d09caa95a4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/serverConfig.d90e5f66.png",
    "revision": "d90e5f66c4133dc25d64a85efc6cc97f"
  },
  {
    "url": "assets/img/shims-vue1.8eeb615f.jpg",
    "revision": "8eeb615feee6752c1921950e09ce0948"
  },
  {
    "url": "assets/img/shims-vue2.c6c1e65f.jpg",
    "revision": "c6c1e65fa508d33aee2390945d34d9aa"
  },
  {
    "url": "assets/img/shims-vue3.1cafc0ba.jpg",
    "revision": "1cafc0baf81751a950e6e1246ff588ba"
  },
  {
    "url": "assets/img/snip30.84c7390f.jpg",
    "revision": "84c7390f56c3a28a8a01873c9ef176c5"
  },
  {
    "url": "assets/img/snip32.ba4d62f9.jpg",
    "revision": "ba4d62f937b78b3d47cc247d70519b0e"
  },
  {
    "url": "assets/img/static.f6ce55b6.jpg",
    "revision": "f6ce55b6079c09901af393a7ac1d7ce7"
  },
  {
    "url": "assets/img/static1.3bfd1254.jpg",
    "revision": "3bfd1254ea5e94e34bf7369d05d3f22d"
  },
  {
    "url": "assets/img/storage.7f224aba.png",
    "revision": "7f224aba1992b156669963dda61f71dd"
  },
  {
    "url": "assets/img/svg.92ee4890.png",
    "revision": "92ee48904419a2e2bb9fe582607911ba"
  },
  {
    "url": "assets/img/type.bd4e388d.jpg",
    "revision": "bd4e388d1baa091291f3300682deaaeb"
  },
  {
    "url": "assets/img/unexpected.9b72d40f.jpg",
    "revision": "9b72d40f35b2a8cf3943c3dccaa8764d"
  },
  {
    "url": "assets/img/useRenderIcon.afa0232e.png",
    "revision": "afa0232e4576eedbebe28bd23f5f6b43"
  },
  {
    "url": "assets/img/vertical-detail.f5a5fe13.jpg",
    "revision": "f5a5fe1344244bbc19c028c8c16e29a3"
  },
  {
    "url": "assets/img/vertical.244d2d32.jpg",
    "revision": "244d2d32770077d1052c7620f002cc55"
  },
  {
    "url": "assets/img/vite.4e708700.png",
    "revision": "4e70870082dd13da266edc1c04d07e96"
  },
  {
    "url": "assets/img/vscode-iconify.e92010ca.png",
    "revision": "e92010cae7f24a6eedaa8e673169e1ec"
  },
  {
    "url": "assets/img/vscode-iconify2.a023cc92.png",
    "revision": "a023cc922b492542a547cf2f43724e36"
  },
  {
    "url": "assets/img/vscode-tailwindcss.bc90ab53.png",
    "revision": "bc90ab5384f36dc646151994d77483e4"
  },
  {
    "url": "assets/img/vscode.4a905073.png",
    "revision": "4a9050730ff3224d2e4d1736fe504e8b"
  },
  {
    "url": "assets/img/whole.d6e5911e.jpg",
    "revision": "d6e5911e9d3b52a30568c179b7563d44"
  },
  {
    "url": "assets/img/yarn.3d75fa36.png",
    "revision": "3d75fa36fe2a8a5a6f75e9c9b1cfe882"
  },
  {
    "url": "assets/js/10.791f7c70.js",
    "revision": "605e96559a47977a68d60dcf6959540e"
  },
  {
    "url": "assets/js/11.7b57891b.js",
    "revision": "7a2b68fbe38382e753463a0629d705f6"
  },
  {
    "url": "assets/js/12.31d91f5a.js",
    "revision": "b514b49e13989c4217b1822d6e2fb5e5"
  },
  {
    "url": "assets/js/13.52f78d33.js",
    "revision": "c09b4d7c3736f22d430af53cec37e341"
  },
  {
    "url": "assets/js/14.ff412da4.js",
    "revision": "b9bfe75fed29c28a1cfa3e25897ffa9b"
  },
  {
    "url": "assets/js/15.d2c01bd5.js",
    "revision": "59bbe8fddd2a0ffdd8f14895bc548e9f"
  },
  {
    "url": "assets/js/16.0ae8a565.js",
    "revision": "8136addd482bc354b65b2ef3c4a213de"
  },
  {
    "url": "assets/js/17.2774112b.js",
    "revision": "f89acc558ad83cae05466f924a02508d"
  },
  {
    "url": "assets/js/18.bf8c3968.js",
    "revision": "33cfa16e0b768b825b03d477d105ef5f"
  },
  {
    "url": "assets/js/19.63919577.js",
    "revision": "f32bbc5523be567ac6e7c288e9c20a40"
  },
  {
    "url": "assets/js/2.fdde8f2d.js",
    "revision": "756db4a35d0979e0aa9bc32e6451e14a"
  },
  {
    "url": "assets/js/20.7a975e83.js",
    "revision": "090d3d269417bc614c1867e4f572dff4"
  },
  {
    "url": "assets/js/21.3e9673e2.js",
    "revision": "5371899d610b639e6f76d08c4a5beca7"
  },
  {
    "url": "assets/js/22.d9d475ac.js",
    "revision": "568057a1bca6855283ce398ecb42fcc1"
  },
  {
    "url": "assets/js/23.b20415b3.js",
    "revision": "12544ee6f3f241e7844706a9694df201"
  },
  {
    "url": "assets/js/24.13520a2e.js",
    "revision": "aa8d203dfcb80ae65cc54c8243836194"
  },
  {
    "url": "assets/js/25.4c0ff708.js",
    "revision": "d40a33495fcdf058b31fc90deba39578"
  },
  {
    "url": "assets/js/26.a1b60485.js",
    "revision": "e48e9488b82065c41f8805d424f6daa3"
  },
  {
    "url": "assets/js/27.71a2a3f7.js",
    "revision": "4e5451817db4552f6d928862a37f8344"
  },
  {
    "url": "assets/js/28.cecbaf3c.js",
    "revision": "8e0650a85080763dc2a7ef1471974467"
  },
  {
    "url": "assets/js/29.85e1f216.js",
    "revision": "4bb85dc064d5bb08f1995871f8a863fc"
  },
  {
    "url": "assets/js/3.d6075b4f.js",
    "revision": "5fb83938439b90a1fc54705671eab954"
  },
  {
    "url": "assets/js/30.4612cfc4.js",
    "revision": "3707f4b37c9c93f8e859c4fdb14531ab"
  },
  {
    "url": "assets/js/31.53870346.js",
    "revision": "bf1b8c0201d6c6799b0458bc5fc644f8"
  },
  {
    "url": "assets/js/32.8d5771e3.js",
    "revision": "75f2aeb40f849fe2595ffc27696605dd"
  },
  {
    "url": "assets/js/33.957b5ec1.js",
    "revision": "01dc95845ab91d7f0bfd6fb60e93199d"
  },
  {
    "url": "assets/js/34.d078857b.js",
    "revision": "f8f6379bd2ca54626476afff123e9e01"
  },
  {
    "url": "assets/js/35.2a56e929.js",
    "revision": "5bf28105b176a5fb9ebbb4050eb1f867"
  },
  {
    "url": "assets/js/36.30cd9652.js",
    "revision": "e99ef7735a585209993572f7f9f0458d"
  },
  {
    "url": "assets/js/37.eef41153.js",
    "revision": "44a548cb4a0cef37d4689ba4e0237a29"
  },
  {
    "url": "assets/js/4.7b14136c.js",
    "revision": "d173d37d302af262c18b8bcca2c553d3"
  },
  {
    "url": "assets/js/5.db960f9c.js",
    "revision": "8ad9c9970438091b084fa4f3562415df"
  },
  {
    "url": "assets/js/6.b68cb151.js",
    "revision": "8e959a20528d01c0e812f8076b5ba2f7"
  },
  {
    "url": "assets/js/7.b219f892.js",
    "revision": "4aa34e9a2f46b66095211925e31008c0"
  },
  {
    "url": "assets/js/8.50c2dd64.js",
    "revision": "8328d83f7984d89e852c87f28347406f"
  },
  {
    "url": "assets/js/9.fad71a5c.js",
    "revision": "85f3d3167a82c2ac50b651fb269e1292"
  },
  {
    "url": "assets/js/app.fd4fa097.js",
    "revision": "c6747ce7612d17a7b4a5a981aa0d5f2b"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "3f0e39b95e7d52b187333c217c0960da"
  },
  {
    "url": "iconfont/iconfont.js",
    "revision": "0ce26645da8d9165f288f398ff3a0ff4"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "fc9edca332befb473bcacb61ba337977"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "47ca39b76df72141468d11b650d07efc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "68d4ce465fd15152f3645742c7293ab4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "6fe49cd171cf440f90c820faa216042a"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "63f5d5b18825a7d01f4e5141c53df839"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "cf221f09c357932527575a882357fb00"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "45061495a76e82b899b4a63ddda86c40"
  },
  {
    "url": "img/build/after-gzip.jpg",
    "revision": "5db603dbb5b091fc5b754337774ae814"
  },
  {
    "url": "img/build/before-gzip.jpg",
    "revision": "98470d85cff53c240267cd05883d6f0f"
  },
  {
    "url": "img/build/check-nginx-config.jpg",
    "revision": "10ef0bbda444b31a6601e88881eefa7c"
  },
  {
    "url": "img/build/dist-small.jpg",
    "revision": "7326ecf3ab6553b165a38da61f580c5a"
  },
  {
    "url": "img/build/dist.jpg",
    "revision": "193bee67fc48e9692205a7f5687c6aa5"
  },
  {
    "url": "img/build/nginx-config.jpg",
    "revision": "5d0e66d7fcb12d636afd659112769563"
  },
  {
    "url": "img/build/no-output.jpg",
    "revision": "48778fafc82625c1da7f2b53a786773d"
  },
  {
    "url": "img/build/output.jpg",
    "revision": "e13d001d3d1fc6fb73f2137933b5509e"
  },
  {
    "url": "img/ep/ep1.png",
    "revision": "53bf38e00b093a2b66a51432797f8a15"
  },
  {
    "url": "img/ep/ep2.png",
    "revision": "bf9bf49048c4578d68c739e16042eb12"
  },
  {
    "url": "img/ep/ep3.png",
    "revision": "40f769cf4801d7a1b7e17d4062d7f39b"
  },
  {
    "url": "img/ep/ep4.png",
    "revision": "9f5b0bbaf25b9e683bed20a310d48838"
  },
  {
    "url": "img/guide/cloc.jpg",
    "revision": "2dd9aedf8d9738b8b2dcd67920795faf"
  },
  {
    "url": "img/guide/error1.png",
    "revision": "15f745e0acce7f613121bbad399ddab2"
  },
  {
    "url": "img/guide/hotlog.png",
    "revision": "d61a57384223a894ec3c75088f91e024"
  },
  {
    "url": "img/guide/i18n.jpg",
    "revision": "d469b6810326ed212eebe1c930f91a36"
  },
  {
    "url": "img/guide/i18nAlly.jpg",
    "revision": "62395d00e498aa569c88b6f315eb4726"
  },
  {
    "url": "img/guide/i18nRouter.jpg",
    "revision": "cafd382cd48b5eea9c061b73ae150395"
  },
  {
    "url": "img/guide/i18nVue.png",
    "revision": "648163b24190b0ace7c07ee691023b9a"
  },
  {
    "url": "img/guide/iconfont.png",
    "revision": "fa274257ba946b202ed1e795668d03e5"
  },
  {
    "url": "img/guide/lodash.png",
    "revision": "076dfa7d188cd3f935d1c534b2e09e27"
  },
  {
    "url": "img/guide/log.png",
    "revision": "06f8014f31a06c53a806b9fa2c55dcab"
  },
  {
    "url": "img/guide/mac.png",
    "revision": "16fff2c5fa7bc27a2cece355eac82723"
  },
  {
    "url": "img/guide/namespace.jpg",
    "revision": "19870394a63f646bba1c22bafe4b5c67"
  },
  {
    "url": "img/guide/npm1.jpg",
    "revision": "1ecb4afe78606dd5fea86ea784391c05"
  },
  {
    "url": "img/guide/npm2.jpg",
    "revision": "40452cbe2463c22f4b4221dcf5342be1"
  },
  {
    "url": "img/guide/npm3.jpg",
    "revision": "b590833f11f98d401540c88ef089c724"
  },
  {
    "url": "img/guide/optimized.png",
    "revision": "470a939d949122f74257fea9225525ed"
  },
  {
    "url": "img/guide/package.jpg",
    "revision": "594d76e273a256e0edfc6c484469f70f"
  },
  {
    "url": "img/guide/pinia.png",
    "revision": "63d2f1cb3b6685bf23f067539ca57f4a"
  },
  {
    "url": "img/guide/pure-thin-cli.gif",
    "revision": "6056708699c91596b289052a11475374"
  },
  {
    "url": "img/guide/rank.png",
    "revision": "415eac7fe3ce8522e06a3b8cbc755e20"
  },
  {
    "url": "img/guide/recommended1.png",
    "revision": "88981f9132ed75c261e5e4f3c21129d0"
  },
  {
    "url": "img/guide/recommended2.png",
    "revision": "0db1b940bdf606e3aaddec998ca1a9aa"
  },
  {
    "url": "img/guide/report.jpg",
    "revision": "2d928cf7b2669ee39b45a4e77fe18add"
  },
  {
    "url": "img/guide/routePath.png",
    "revision": "0f15c9996a913f9861516470cf10f3e4"
  },
  {
    "url": "img/guide/sass.png",
    "revision": "0e3a4c43e5e23d72a1e397d09caa95a4"
  },
  {
    "url": "img/guide/snip.png",
    "revision": "73c5adbf0cb17f10d054c428860582ed"
  },
  {
    "url": "img/guide/snip30.jpg",
    "revision": "84c7390f56c3a28a8a01873c9ef176c5"
  },
  {
    "url": "img/guide/snip32.jpg",
    "revision": "ba4d62f937b78b3d47cc247d70519b0e"
  },
  {
    "url": "img/guide/theme.jpg",
    "revision": "98044f738788f049bff0654fc01603fd"
  },
  {
    "url": "img/guide/unexpected.jpg",
    "revision": "9b72d40f35b2a8cf3943c3dccaa8764d"
  },
  {
    "url": "img/guide/vite.png",
    "revision": "4e70870082dd13da266edc1c04d07e96"
  },
  {
    "url": "img/guide/vscode-tailwindcss.png",
    "revision": "bc90ab5384f36dc646151994d77483e4"
  },
  {
    "url": "img/guide/vscode.png",
    "revision": "4a9050730ff3224d2e4d1736fe504e8b"
  },
  {
    "url": "img/guide/yarn.png",
    "revision": "3d75fa36fe2a8a5a6f75e9c9b1cfe882"
  },
  {
    "url": "img/http/type.jpg",
    "revision": "bd4e388d1baa091291f3300682deaaeb"
  },
  {
    "url": "img/icon/ant-icon.png",
    "revision": "16b70c25e49e437fe94800d99a7f4006"
  },
  {
    "url": "img/icon/ant-install.png",
    "revision": "29360849244ac01db4f9160c0fd035da"
  },
  {
    "url": "img/icon/ant-install2.png",
    "revision": "850df243f3ec7ea02e19cdde5ff8da64"
  },
  {
    "url": "img/icon/ep-icon.png",
    "revision": "6f75400ba44578fc2a06ded01ea196e8"
  },
  {
    "url": "img/icon/icon-online.png",
    "revision": "139d08c0eeabdb1019531ae5a8d98e88"
  },
  {
    "url": "img/icon/iconfont.png",
    "revision": "fbd6ce3720f6fdc091ab3406d313cfc1"
  },
  {
    "url": "img/icon/iconify.png",
    "revision": "df9ed66216cbcf58616adc5bdd061cc8"
  },
  {
    "url": "img/icon/menu-if.png",
    "revision": "7af6fe3c387e7156f5c527378e85cf79"
  },
  {
    "url": "img/icon/menu-local.png",
    "revision": "e07b6d9176630794596518b4d0a5bf7c"
  },
  {
    "url": "img/icon/menu-svg.png",
    "revision": "04cc239ab5aeed820ee6c65d523b3dd8"
  },
  {
    "url": "img/icon/online-click.png",
    "revision": "3284c99a88ede27c96c2440bd002b309"
  },
  {
    "url": "img/icon/online.jpg",
    "revision": "e7a19c39a7dd6affb6655f51a8ff9265"
  },
  {
    "url": "img/icon/svg.png",
    "revision": "92ee48904419a2e2bb9fe582607911ba"
  },
  {
    "url": "img/icon/useRenderIcon.png",
    "revision": "afa0232e4576eedbebe28bd23f5f6b43"
  },
  {
    "url": "img/icon/vscode-iconify.png",
    "revision": "e92010cae7f24a6eedaa8e673169e1ec"
  },
  {
    "url": "img/icon/vscode-iconify2.png",
    "revision": "a023cc922b492542a547cf2f43724e36"
  },
  {
    "url": "img/layout/horizontal-detail.jpg",
    "revision": "5953eb90ed1453afe52ba9b10a72a183"
  },
  {
    "url": "img/layout/horizontal.jpg",
    "revision": "b6d09f73c9bc77a206bed8f496d2e45b"
  },
  {
    "url": "img/layout/mixNav-detail.jpg",
    "revision": "b7d39aef179bd2d673b7a12e6576460b"
  },
  {
    "url": "img/layout/mixNav.jpg",
    "revision": "d96579e524130b9e00f43dd2a1ac327e"
  },
  {
    "url": "img/layout/vertical-detail.jpg",
    "revision": "f5a5fe1344244bbc19c028c8c16e29a3"
  },
  {
    "url": "img/layout/vertical.jpg",
    "revision": "244d2d32770077d1052c7620f002cc55"
  },
  {
    "url": "img/pure.png",
    "revision": "da7eb5bb5d599c43297bb6946234d033"
  },
  {
    "url": "img/rbac/auths.jpg",
    "revision": "b1133e38115cdecd14a181849f52222b"
  },
  {
    "url": "img/rbac/roles.jpg",
    "revision": "6ec7dd6e2960c8ba8cc84e6731163ea3"
  },
  {
    "url": "img/router/router1.png",
    "revision": "20ea2c0ebef81bc006b6ad59c66aba0c"
  },
  {
    "url": "img/router/router2.png",
    "revision": "0daeb564dddd81de91a0b8400f698423"
  },
  {
    "url": "img/router/router3.png",
    "revision": "2f2f500c79a1e6ce927e90c635fb44d1"
  },
  {
    "url": "img/router/router4.png",
    "revision": "66740fa73fd77773a48409d7befcf960"
  },
  {
    "url": "img/router/router5.png",
    "revision": "ff946986d9040a403ec69315bbb582a2"
  },
  {
    "url": "img/router/router6.png",
    "revision": "7f78f2ebfe3105d960e76c888f08ba85"
  },
  {
    "url": "img/router/router7.png",
    "revision": "ab6000c0225669c89fca80eec9c88c55"
  },
  {
    "url": "img/router/static.jpg",
    "revision": "f6ce55b6079c09901af393a7ac1d7ce7"
  },
  {
    "url": "img/router/static1.jpg",
    "revision": "3bfd1254ea5e94e34bf7369d05d3f22d"
  },
  {
    "url": "img/serverConfig.png",
    "revision": "d90e5f66c4133dc25d64a85efc6cc97f"
  },
  {
    "url": "img/storage.png",
    "revision": "7f224aba1992b156669963dda61f71dd"
  },
  {
    "url": "img/support/addWx.jpg",
    "revision": "f146c0a7ae7344197791809e90e9e268"
  },
  {
    "url": "img/support/ali.jpg",
    "revision": "c456e50decf113c01f75b7f5ed344a7c"
  },
  {
    "url": "img/support/chrome_48x48.png",
    "revision": "c8c84654dc4d903149eea9db827d059f"
  },
  {
    "url": "img/support/edge_48x48.png",
    "revision": "5ca69eab6f315bcd77c1be2a59760e5e"
  },
  {
    "url": "img/support/firefox_48x48.png",
    "revision": "97e8bef2019888a645ef7faabc1346e5"
  },
  {
    "url": "img/support/qq.png",
    "revision": "bf824acf6d003041e7259ba6bcc14cba"
  },
  {
    "url": "img/support/safari_48x48.png",
    "revision": "d0e9b2f9bda2ee747d6a13852b14fba6"
  },
  {
    "url": "img/support/wechat.jpeg",
    "revision": "9ce65e55801802b92298e270b0c48aa3"
  },
  {
    "url": "img/support/wx.jpg",
    "revision": "ccff1c2ed63d14857d5212f6a890382c"
  },
  {
    "url": "img/type/after.jpg",
    "revision": "c63d33d4b75a772c1985cffbf389df6c"
  },
  {
    "url": "img/type/before.jpg",
    "revision": "e41488e6988912abe05ed14fbb3cc4d2"
  },
  {
    "url": "img/type/com1.jpg",
    "revision": "489dfae0ed118e847a968b9f6382cc0f"
  },
  {
    "url": "img/type/com2.jpg",
    "revision": "fdae16cb9f36052b6d9791210b8a5b8b"
  },
  {
    "url": "img/type/shims-vue1.jpg",
    "revision": "8eeb615feee6752c1921950e09ce0948"
  },
  {
    "url": "img/type/shims-vue2.jpg",
    "revision": "c6c1e65fa508d33aee2390945d34d9aa"
  },
  {
    "url": "img/type/shims-vue3.jpg",
    "revision": "1cafc0baf81751a950e6e1246ff588ba"
  },
  {
    "url": "img/type/whole.jpg",
    "revision": "d6e5911e9d3b52a30568c179b7563d44"
  },
  {
    "url": "img/watermarks/buildgood.jpg",
    "revision": "bf753b3034e65bddaaa3b5b7c53fe27c"
  },
  {
    "url": "img/watermarks/rbac.jpg",
    "revision": "8088af0f701f3c172f469717ea8c568a"
  },
  {
    "url": "index.html",
    "revision": "1ca8d0f55e08af44ede5e87759aa037c"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/build/index.html",
    "revision": "e089293742df9ae236fa01b93a3b86d2"
  },
  {
    "url": "pages/buildgood/index.html",
    "revision": "3bdd32fa11b61e5a02fe5fe83d2ee5d4"
  },
  {
    "url": "pages/components/index.html",
    "revision": "b921f327e0f5190f21202fee89606fb6"
  },
  {
    "url": "pages/config/index.html",
    "revision": "b5b82f64a126222b6ca9c7d15764a7fd"
  },
  {
    "url": "pages/directory/index.html",
    "revision": "57429db47245cb57080367a04a626dbd"
  },
  {
    "url": "pages/FAQ/index.html",
    "revision": "ccf6e8d3aa751c0a6d8551e4365697ef"
  },
  {
    "url": "pages/git/index.html",
    "revision": "abb06bf5b0010efbb60d51f6d9845567"
  },
  {
    "url": "pages/i18n/index.html",
    "revision": "ef82decd68b877cd6884f7b659b6709c"
  },
  {
    "url": "pages/icon/index.html",
    "revision": "d84abef76cd745d94157df63821fe4c1"
  },
  {
    "url": "pages/introduction/index.html",
    "revision": "526f22402e5e4f04d92a72dc32847218"
  },
  {
    "url": "pages/layout/index.html",
    "revision": "a4a301416551761c80b2935b6ab0c355"
  },
  {
    "url": "pages/opensource/index.html",
    "revision": "611d1527585c726008123f36783035e0"
  },
  {
    "url": "pages/pinia/index.html",
    "revision": "a0fba8dbc9a18d4d24428e1970ba5f19"
  },
  {
    "url": "pages/RBAC/index.html",
    "revision": "d06e6f97191a1b5821fe963058943a00"
  },
  {
    "url": "pages/recommendation/index.html",
    "revision": "19fe2d6f91050fc71cda9f8ee374f554"
  },
  {
    "url": "pages/request/index.html",
    "revision": "d3ea1af02afab900f17cc33d61770632"
  },
  {
    "url": "pages/routerMenu/index.html",
    "revision": "a09c5404f7e74c0ae19bec0682b6e610"
  },
  {
    "url": "pages/standard/index.html",
    "revision": "c0971d4e80599fe8b2592e0e50aabfc5"
  },
  {
    "url": "pages/start/index.html",
    "revision": "35cc8ede086f89b455b93ccbd4bdb6ff"
  },
  {
    "url": "pages/support/index.html",
    "revision": "ef7a513bb492952d0609e27990e88770"
  },
  {
    "url": "pages/tailwindcss/index.html",
    "revision": "dcf4aa26490187557aa2176a49da5bc5"
  },
  {
    "url": "pages/theme/index.html",
    "revision": "ccc7f58cf3788b0801a7b36a2582e017"
  },
  {
    "url": "pages/track/index.html",
    "revision": "363f965e1bff7e6c391dce31a5f0a155"
  },
  {
    "url": "pages/typescript/index.html",
    "revision": "a46977e67ccc24c5027614072d72b6be"
  },
  {
    "url": "pages/utils/index.html",
    "revision": "d0d0727bd1dd92ff68e5a8428ab5b750"
  },
  {
    "url": "pages/viteplugin/index.html",
    "revision": "9de9fbeb4b7378106e701bc0ff8a1762"
  },
  {
    "url": "pages/vscode/index.html",
    "revision": "4719d3454dd05fa5bbae4cf638c7eb03"
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
