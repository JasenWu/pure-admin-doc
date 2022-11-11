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
    "revision": "3fbfe3453d3a411a6a9029bf1a6591f1"
  },
  {
    "url": "archives/index.html",
    "revision": "204041a9dd9e76120ff1465420191855"
  },
  {
    "url": "assets/css/0.styles.9d180043.css",
    "revision": "2869cfe9cd0c6e15007f5a133deb7a20"
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
    "url": "assets/js/10.7603e436.js",
    "revision": "33f24ce7ff149381e89cc8cb05900b16"
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
    "url": "assets/js/15.8ea0d1c3.js",
    "revision": "96c5d82e06e6faf90e672fdfe33b9ee2"
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
    "url": "assets/js/18.68c292f3.js",
    "revision": "4bb4c478f2374916286ab290be4d377c"
  },
  {
    "url": "assets/js/19.a89a45c1.js",
    "revision": "0740d4025b075117a2b910dcbefa09e5"
  },
  {
    "url": "assets/js/2.47aade6e.js",
    "revision": "16667a8be9592dcdcaf881e6abc60b00"
  },
  {
    "url": "assets/js/20.e5d620b8.js",
    "revision": "6e42b70621e58e517667f8c22f0d37c7"
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
    "url": "assets/js/29.d7e7f3b1.js",
    "revision": "40288bdde318defff92d3dccc644c5b9"
  },
  {
    "url": "assets/js/3.49ce363a.js",
    "revision": "c72ca8d9f46bda8943386c9a78304026"
  },
  {
    "url": "assets/js/30.ec7db86d.js",
    "revision": "a8c111f54ce9b9dd8fcf6ba5367fe5ea"
  },
  {
    "url": "assets/js/31.05582bbd.js",
    "revision": "3c04502c2dc644869a636a39551fa40b"
  },
  {
    "url": "assets/js/32.6df59bb0.js",
    "revision": "204b3339c17e1aec9957bc49ddfb557b"
  },
  {
    "url": "assets/js/33.e0850fc9.js",
    "revision": "588e2456d9c21d0007077a5d6627ccd2"
  },
  {
    "url": "assets/js/34.50b07dd7.js",
    "revision": "f7c89b646aa390684cef9dddd94e8e3e"
  },
  {
    "url": "assets/js/4.df8d26ec.js",
    "revision": "6057f5b30cc0752b66c482926a7432a9"
  },
  {
    "url": "assets/js/5.e0976cc7.js",
    "revision": "f414ccfd6053ef32295d5e0db8625ab4"
  },
  {
    "url": "assets/js/6.c8bfe787.js",
    "revision": "ff41c47aa5823580db4d1f2fcfe9a499"
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
    "url": "assets/js/app.efce52e6.js",
    "revision": "cdbca63ebc20ba58de81b7af94fc4db1"
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
    "revision": "bcde096439335ea0615652e74dcdf9a5"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/build/index.html",
    "revision": "064a5a3ea23c43e0af8132248cb3a183"
  },
  {
    "url": "pages/buildgood/index.html",
    "revision": "f2ada7991dee8cd74c8f7d5fca327484"
  },
  {
    "url": "pages/components/index.html",
    "revision": "a6b6fdfd570d49119cd9b1ab93519561"
  },
  {
    "url": "pages/config/index.html",
    "revision": "18df1c5e0730545e9f90dd174923db3b"
  },
  {
    "url": "pages/directory/index.html",
    "revision": "007b2ab2f790451bdf1d91aed59eaa80"
  },
  {
    "url": "pages/FAQ/index.html",
    "revision": "b440e6e706a1ea265eac88b411e3bdbe"
  },
  {
    "url": "pages/i18n/index.html",
    "revision": "ff139f05a7b7e9b75f93af9681905616"
  },
  {
    "url": "pages/icon/index.html",
    "revision": "aa97e469a1cc68019e724297128d9a06"
  },
  {
    "url": "pages/introduction/index.html",
    "revision": "de6f9496aabe609ed6dcfe2d0c22f8fd"
  },
  {
    "url": "pages/layout/index.html",
    "revision": "7cb9ea45d866c45f4a1bc4db17c45bce"
  },
  {
    "url": "pages/opensource/index.html",
    "revision": "ad44fb39610bf8330cfba197b1d7caa9"
  },
  {
    "url": "pages/RBAC/index.html",
    "revision": "590c4cdd464e8cf052f44c1a1079bb68"
  },
  {
    "url": "pages/recommendation/index.html",
    "revision": "1dd293139a2d45213717acfc73590b99"
  },
  {
    "url": "pages/request/index.html",
    "revision": "cd0febd4bd9be0a6966737ae640a3de3"
  },
  {
    "url": "pages/routerMenu/index.html",
    "revision": "ef0fa221138b58ddc82d4b004592c40e"
  },
  {
    "url": "pages/standard/index.html",
    "revision": "c2f90a3746d6c94a70f5f9999fd0e234"
  },
  {
    "url": "pages/start/index.html",
    "revision": "6f81ce5a153f2f6e8c23edbd4266afc0"
  },
  {
    "url": "pages/support/index.html",
    "revision": "c8d2f96ef0f0e11f23adeda4b081e7c3"
  },
  {
    "url": "pages/tailwindcss/index.html",
    "revision": "bf94cdb7c41124213ae2c947c0883561"
  },
  {
    "url": "pages/theme/index.html",
    "revision": "3c21947b52f33212f34d4c2237472e9b"
  },
  {
    "url": "pages/typescript/index.html",
    "revision": "c41ae3a7741923e23ab9e2cc6b281bc1"
  },
  {
    "url": "pages/utils/index.html",
    "revision": "dae91dfd38b048981710e0912721dde2"
  },
  {
    "url": "pages/viteplugin/index.html",
    "revision": "91bdf2b046b025ff2e0e8ec9742d373c"
  },
  {
    "url": "pages/vscode/index.html",
    "revision": "0df2a1ac311603c9addca20757886578"
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
