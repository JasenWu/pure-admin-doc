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
    "revision": "07e4c1d2e76f7490bd99790e08c41b81"
  },
  {
    "url": "archives/index.html",
    "revision": "024e3a4cfe32711cc2cd92b39df4a327"
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
    "url": "assets/img/before.e41488e6.jpg",
    "revision": "e41488e6988912abe05ed14fbb3cc4d2"
  },
  {
    "url": "assets/img/buildgood.bf753b30.jpg",
    "revision": "bf753b3034e65bddaaa3b5b7c53fe27c"
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
    "url": "assets/img/horizontal.5a92c2ec.png",
    "revision": "5a92c2ec92cf6c5974e0ad23d332d3df"
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
    "url": "assets/img/mixNav.ec541f41.png",
    "revision": "ec541f41d003f3221041aa494241df36"
  },
  {
    "url": "assets/img/namespace.19870394.jpg",
    "revision": "19870394a63f646bba1c22bafe4b5c67"
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
    "url": "assets/img/vertical.e130d0a9.png",
    "revision": "e130d0a95b401eae90d6137dd737f570"
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
    "url": "assets/js/10.9e4a03de.js",
    "revision": "5204043d70cbe742a08c900849100425"
  },
  {
    "url": "assets/js/11.c4806724.js",
    "revision": "71ffd769e8bfe31f59a92f1dc8f21f47"
  },
  {
    "url": "assets/js/12.6524a20d.js",
    "revision": "020fe807768565d478cf7fc5b3ab5bd0"
  },
  {
    "url": "assets/js/13.305b4d4c.js",
    "revision": "eaa5c4340eeece6fb3422f78b81318df"
  },
  {
    "url": "assets/js/14.537847f7.js",
    "revision": "003a056440b807509313f9fbbbaa5c1c"
  },
  {
    "url": "assets/js/15.9e5d11a9.js",
    "revision": "629c5ab5da76c366fe5025c24bb5f319"
  },
  {
    "url": "assets/js/16.bd007706.js",
    "revision": "9f4d45b22212eae8731b737c63ac67dd"
  },
  {
    "url": "assets/js/17.4271aba8.js",
    "revision": "fc41b30bcb069bd1b528bfd389279558"
  },
  {
    "url": "assets/js/18.a127b2b2.js",
    "revision": "4eed82d6e90421fec7426289309788d3"
  },
  {
    "url": "assets/js/19.fc0b0028.js",
    "revision": "bfff3279b43b29f5788585db0d13e70b"
  },
  {
    "url": "assets/js/2.83b1b712.js",
    "revision": "800baeaf10631680ce7e076010439219"
  },
  {
    "url": "assets/js/20.373ae706.js",
    "revision": "8c0238e8fc86bc18a64b7affeaf6e966"
  },
  {
    "url": "assets/js/21.a5d83b11.js",
    "revision": "2300745397a1acda36cfd2ae642c9f64"
  },
  {
    "url": "assets/js/22.eda7e53f.js",
    "revision": "ee8e5605d4ceb3dbcd1671c92341da25"
  },
  {
    "url": "assets/js/23.f5f142f2.js",
    "revision": "0438ee76093c195c47b39ac115f53895"
  },
  {
    "url": "assets/js/24.2e156189.js",
    "revision": "3fa2dc1ad6edd1aa8811d9dec8d0565e"
  },
  {
    "url": "assets/js/25.7bf93fc5.js",
    "revision": "6f41a4f21d09945d6c458bac184b4afa"
  },
  {
    "url": "assets/js/26.f75c715c.js",
    "revision": "0a39e5e930ec5ec5abc0a92a7a9bb65a"
  },
  {
    "url": "assets/js/27.62ed0d8d.js",
    "revision": "f487f407a49c5d9214f92019ecc17025"
  },
  {
    "url": "assets/js/28.b04ee04f.js",
    "revision": "af3875fa77c00f777baad40107d24a68"
  },
  {
    "url": "assets/js/29.4ab9d5c4.js",
    "revision": "29d1ff9793e812cb15ad3f82d02cd161"
  },
  {
    "url": "assets/js/3.49ce363a.js",
    "revision": "c72ca8d9f46bda8943386c9a78304026"
  },
  {
    "url": "assets/js/30.4d17b5ce.js",
    "revision": "b4ed30d5e8412ab71c28e4495a6c9049"
  },
  {
    "url": "assets/js/31.843822c7.js",
    "revision": "2e0a871850a5a493c03e01cefc929c44"
  },
  {
    "url": "assets/js/32.44e8e613.js",
    "revision": "0c611df8e816c6621460a930b9447969"
  },
  {
    "url": "assets/js/33.9411c3bd.js",
    "revision": "ae5cb0a01d55e2be9c84429cdf54f0d8"
  },
  {
    "url": "assets/js/34.9748c132.js",
    "revision": "07ee50ce3537c6e03bf108abd2a727fc"
  },
  {
    "url": "assets/js/35.83bd8037.js",
    "revision": "24a5c6452ef426bf7c2ca0031775b63a"
  },
  {
    "url": "assets/js/4.df8d26ec.js",
    "revision": "6057f5b30cc0752b66c482926a7432a9"
  },
  {
    "url": "assets/js/5.c909dd5e.js",
    "revision": "da64355553b7164d60a02e4bd164abb4"
  },
  {
    "url": "assets/js/6.dd7f45c8.js",
    "revision": "020cf3ca7504e5d5685fe887df227cb9"
  },
  {
    "url": "assets/js/7.95dfc8d4.js",
    "revision": "36816aeedb9930bf4e7d03a8d329dad0"
  },
  {
    "url": "assets/js/8.a32182cd.js",
    "revision": "3ef7e2326a8d67c68513ce7b60ea2c4b"
  },
  {
    "url": "assets/js/9.a4b84136.js",
    "revision": "7dd2299563871d7239eca0fbaafcb817"
  },
  {
    "url": "assets/js/app.8868723d.js",
    "revision": "7153abac2774bac0ec874e0ebce9de60"
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
    "url": "img/layout/horizontal.png",
    "revision": "5a92c2ec92cf6c5974e0ad23d332d3df"
  },
  {
    "url": "img/layout/mixNav.png",
    "revision": "ec541f41d003f3221041aa494241df36"
  },
  {
    "url": "img/layout/vertical.png",
    "revision": "e130d0a95b401eae90d6137dd737f570"
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
    "revision": "c1cfb93c59de6d2c88e23dd6bd335cb7"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/build/index.html",
    "revision": "a9aacdb81fc8543de56126ea164eb43f"
  },
  {
    "url": "pages/buildgood/index.html",
    "revision": "d2392eea696467312e25e2532e79efde"
  },
  {
    "url": "pages/components/index.html",
    "revision": "dae9ae3c7cbf5d677d9679a5255e66c3"
  },
  {
    "url": "pages/config/index.html",
    "revision": "da2c7c67c2372202f9b8fe220653c6b3"
  },
  {
    "url": "pages/directory/index.html",
    "revision": "cba654c47e212a5ad66bdfcdf2d77fbf"
  },
  {
    "url": "pages/FAQ/index.html",
    "revision": "08cbd5fafe6bfd599d9884a1b89b10f7"
  },
  {
    "url": "pages/i18n/index.html",
    "revision": "c24d8e67ff226d25bc1664337a0cfccd"
  },
  {
    "url": "pages/icon/index.html",
    "revision": "91840616ea438de90951147f233915e1"
  },
  {
    "url": "pages/introduction/index.html",
    "revision": "afe9709b902fa06a92968acbdc1bd465"
  },
  {
    "url": "pages/layout/index.html",
    "revision": "8b32a02e0e9ed22e41c9a08be16ade92"
  },
  {
    "url": "pages/opensource/index.html",
    "revision": "427dfda697cdfcea4ed09319e14f120b"
  },
  {
    "url": "pages/RBAC/index.html",
    "revision": "66e25b264ededca6de13b7ab0e74f2e2"
  },
  {
    "url": "pages/recommendation/index.html",
    "revision": "33285e6b46c18927a05486990260e843"
  },
  {
    "url": "pages/request/index.html",
    "revision": "07f6cb996480f94d061e3631472095e9"
  },
  {
    "url": "pages/routerMenu/index.html",
    "revision": "df60bea6df63eb4dad6934f44dd388b2"
  },
  {
    "url": "pages/standard/index.html",
    "revision": "8b47bbec776d95566aac63113ba84f1d"
  },
  {
    "url": "pages/start/index.html",
    "revision": "accdcb133336dac245305a81b22bc5f5"
  },
  {
    "url": "pages/support/index.html",
    "revision": "0493db689f00fe1679f09ec0802cae71"
  },
  {
    "url": "pages/tailwindcss/index.html",
    "revision": "a41495291f125a6e7adc9f7360deb9c0"
  },
  {
    "url": "pages/theme/index.html",
    "revision": "f979cb47e4a9236043642676f3e4e6cb"
  },
  {
    "url": "pages/track/index.html",
    "revision": "9ec91edffd33fc0671415e81f26d31e7"
  },
  {
    "url": "pages/typescript/index.html",
    "revision": "38e153efceb5f476a3f14722fca0c464"
  },
  {
    "url": "pages/utils/index.html",
    "revision": "91b5b66063e768030e423e9494af030a"
  },
  {
    "url": "pages/viteplugin/index.html",
    "revision": "a452ed7feb57f3677049d321469e6109"
  },
  {
    "url": "pages/vscode/index.html",
    "revision": "6f2b118a3046e756cda6d510ed192ceb"
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
