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
    "revision": "d88a8946a8e67da2fc5e853cfbf94eba"
  },
  {
    "url": "archives/index.html",
    "revision": "572632cdac55856558fd907b28330d06"
  },
  {
    "url": "assets/css/0.styles.1fd75b34.css",
    "revision": "f217495879742f729acb6fefc57f9e5c"
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
    "url": "assets/js/10.3b201e84.js",
    "revision": "3af11c9839a240577b12da96984933b2"
  },
  {
    "url": "assets/js/11.c6bf658c.js",
    "revision": "7c28912a5fa238bde0bab803dfe61a22"
  },
  {
    "url": "assets/js/12.f9d26372.js",
    "revision": "134504528b7e3d5b2615299d6a9c010c"
  },
  {
    "url": "assets/js/13.6e58bbf9.js",
    "revision": "92cffea6e9effa6aab1643b907aabc45"
  },
  {
    "url": "assets/js/14.30595c21.js",
    "revision": "7e8cef4d76791b6e3a84a0bf29730d66"
  },
  {
    "url": "assets/js/15.37591c4b.js",
    "revision": "2f940cebba015300ec361852989f9798"
  },
  {
    "url": "assets/js/16.1fed9cfa.js",
    "revision": "44adb27f400177e65f6a87aaaeb62ca2"
  },
  {
    "url": "assets/js/17.8f79db70.js",
    "revision": "bc37c8dc3f21d5cc5e6f0e818c2668b0"
  },
  {
    "url": "assets/js/18.686a214c.js",
    "revision": "34aed6adc72f120aed6c130a2e94095d"
  },
  {
    "url": "assets/js/19.89c62419.js",
    "revision": "470bd34e6c493b0b78776da6e61604bf"
  },
  {
    "url": "assets/js/2.ab760042.js",
    "revision": "d27a9c1b45bf08c8a3a1a5092abb4610"
  },
  {
    "url": "assets/js/20.fff9585d.js",
    "revision": "4fa3c9c3d5b010ebaae1427c6534bf43"
  },
  {
    "url": "assets/js/21.1c592c1a.js",
    "revision": "04db5d27b6516c25f0b44c41dea355c3"
  },
  {
    "url": "assets/js/22.0945ae08.js",
    "revision": "83e983eb11453d123f15372020a3e597"
  },
  {
    "url": "assets/js/23.91610a62.js",
    "revision": "ecd3341e806d815b737094c6e1cdf566"
  },
  {
    "url": "assets/js/24.560fd961.js",
    "revision": "e61ed5842b629cbcf5710a9ae576a56d"
  },
  {
    "url": "assets/js/25.204bd63c.js",
    "revision": "343ba30d513a68ef71a3ddc3f5df2082"
  },
  {
    "url": "assets/js/26.32e96551.js",
    "revision": "724441e40047d0139c05d907bb756ab8"
  },
  {
    "url": "assets/js/27.08b8bb6e.js",
    "revision": "e84f35db3b3367ad7538baeea266ecea"
  },
  {
    "url": "assets/js/28.2c2f8dae.js",
    "revision": "f21762d3c45240c065fe0b9463df5093"
  },
  {
    "url": "assets/js/29.cba7a7e2.js",
    "revision": "0e8397d013ffbdf50ee1bbf8afe2f916"
  },
  {
    "url": "assets/js/3.b8a5ddf6.js",
    "revision": "fbb38bfe019c52fd950844a48e298cfc"
  },
  {
    "url": "assets/js/30.0f03e067.js",
    "revision": "ff1b8a45d091ceeb8ae67c4604ed647d"
  },
  {
    "url": "assets/js/31.4c3379ac.js",
    "revision": "1aa3855398539eaed4d6ff1869930120"
  },
  {
    "url": "assets/js/32.b75d60d1.js",
    "revision": "962bc2ed93cf136dd8a271833d011711"
  },
  {
    "url": "assets/js/33.20e4bbce.js",
    "revision": "f3a33c9554004ecd35b64298a3495843"
  },
  {
    "url": "assets/js/34.f806b0b9.js",
    "revision": "0ce92f14b19b75e294571a50aa58b9fa"
  },
  {
    "url": "assets/js/4.0adb5d52.js",
    "revision": "7c7bc70a6247ab2717db11aee7678f27"
  },
  {
    "url": "assets/js/5.b50ffbfd.js",
    "revision": "d5c22982fb8c16914f321ca6e277b09e"
  },
  {
    "url": "assets/js/6.05964ed9.js",
    "revision": "184777f2de7a1b6199e9df4b8fc687ae"
  },
  {
    "url": "assets/js/7.111356fd.js",
    "revision": "fd48fa49ba210e6ad250db5e2d1c4aaf"
  },
  {
    "url": "assets/js/8.875fcf84.js",
    "revision": "bacfaac1108c808071fcefa85b51d037"
  },
  {
    "url": "assets/js/9.d854baa9.js",
    "revision": "6883c3a54e3d89b94d7f360a9c1e9e93"
  },
  {
    "url": "assets/js/app.07e96f41.js",
    "revision": "03927cdf11844af50294da520c7a6309"
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
    "revision": "95965c29a3a3d9abdd5c3a8700704085"
  },
  {
    "url": "markmap/01.html",
    "revision": "dd371c2f62cb9d9271072fece34c9ad4"
  },
  {
    "url": "pages/build/index.html",
    "revision": "ac3f1721770a073d16c0d932278a684e"
  },
  {
    "url": "pages/buildgood/index.html",
    "revision": "4bdb4885ffb6ba3d67988a9ce753bd1e"
  },
  {
    "url": "pages/components/index.html",
    "revision": "4e2eade3ce5249252f08b3b2dd456442"
  },
  {
    "url": "pages/config/index.html",
    "revision": "d4cea4bdb4e08d459b47f79a944a5c03"
  },
  {
    "url": "pages/directory/index.html",
    "revision": "6ce804e70b49369ac42edf670dd95c88"
  },
  {
    "url": "pages/FAQ/index.html",
    "revision": "f8e287bb0cfeb021bb30573a6107a1c1"
  },
  {
    "url": "pages/i18n/index.html",
    "revision": "4bd38e4920cbd7bb0e62b3686994ed1a"
  },
  {
    "url": "pages/icon/index.html",
    "revision": "dc602fed2321b092e4e4d8cfa12f0557"
  },
  {
    "url": "pages/introduction/index.html",
    "revision": "de8506e762ec0fc2910117b05af1490a"
  },
  {
    "url": "pages/layout/index.html",
    "revision": "d27d1c39984052f83acd925d5d6cc931"
  },
  {
    "url": "pages/opensource/index.html",
    "revision": "16a815d0d15901cb1d73f85a457a586e"
  },
  {
    "url": "pages/RBAC/index.html",
    "revision": "b311fe49ad4fea978884dbdf7e650c2e"
  },
  {
    "url": "pages/recommendation/index.html",
    "revision": "68da8211ed3ecb3c3e0b6229889ee19d"
  },
  {
    "url": "pages/request/index.html",
    "revision": "582a60ba56d6335b0afca7075ecfec0e"
  },
  {
    "url": "pages/routerMenu/index.html",
    "revision": "5119b7bde2b87c474b50ace92dbbd52e"
  },
  {
    "url": "pages/standard/index.html",
    "revision": "a0c7467eeba9be4b78f5fdc9be4cd01a"
  },
  {
    "url": "pages/start/index.html",
    "revision": "748095b7f15476950c195d457073e505"
  },
  {
    "url": "pages/support/index.html",
    "revision": "9926850785bad99c97edad513c7c23b8"
  },
  {
    "url": "pages/tailwindcss/index.html",
    "revision": "0d551030fd8c7b4da30dfeb0c48647db"
  },
  {
    "url": "pages/theme/index.html",
    "revision": "7d698d6d0788311fad1a5091664e29f7"
  },
  {
    "url": "pages/typescript/index.html",
    "revision": "e3ce64435ab483685d71e7abe6ae3a8e"
  },
  {
    "url": "pages/utils/index.html",
    "revision": "788421c5607c80e7a413f4390cc47abf"
  },
  {
    "url": "pages/viteplugin/index.html",
    "revision": "63213d1f1750429c6fd702cb05f27553"
  },
  {
    "url": "pages/vscode/index.html",
    "revision": "bea01cd63c0d1ff257cd82378f292190"
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
