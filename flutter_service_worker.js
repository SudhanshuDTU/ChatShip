'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "48495dd408ac6aadd102806d9b63ccfd",
"index.html": "db273b42cff952995c6eac44dc36454e",
"/": "db273b42cff952995c6eac44dc36454e",
"main.dart.js": "e48a26fe778d4e67259fcb06fc6fef9b",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "47f08895d8ca3f8decf5e2923b4395c7",
"icons/Icon-192.png": "97115f48921d16bbae25b2f2a9f814f9",
"icons/Icon-maskable-192.png": "97115f48921d16bbae25b2f2a9f814f9",
"icons/Icon-maskable-512.png": "f0a82166904ea4e9a5e50ed0485339fd",
"icons/Icon-512.png": "f0a82166904ea4e9a5e50ed0485339fd",
"manifest.json": "adc196e521ec3f4a699f26747504298e",
".git/config": "b494b7e6e59a8489dc2021504d274894",
".git/objects/04/99a60ca7132fe8fd8179f2c3f1f689844aed42": "c1c7126ceff595f0a985cf2180aa154c",
".git/objects/35/84117b4e2dd145d80256a31a1cdb950e6f24fe": "f381ddd5e5a5be7e9311bc4ca4e6932d",
".git/objects/35/4fc8e824d9936c573ba3a80e8a54ad3aa47e8b": "7bf518a69afbd885ba925d16a53d2a40",
".git/objects/67/4e8e3b19859da9dc57dc5fa2728cf65fe55e68": "cd285876bf919cddc4b03304c5bfe71e",
".git/objects/5a/d605770352225886170786c4db73b30440ea4b": "5af723b283dbb917c9d77be501e52c23",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/6353169fdb6a56cd8d4ac5256c1729d615338b": "94f4dd99bc2a10167fe3533e3f18ed0a",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7c/2d9bc8a96a68948cc6d88f5b81bdeee597f666": "d83ceee4edb8afdc9a9c1bdc7db43fa4",
".git/objects/80/cbc490ade44030477eab958aebec627ceac0b0": "f3b18b6e9bc090aa94c872b5684397f2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/17/1407ec979c24796b4675b7ed08e4538728802b": "685c1b07eb382d8f5c3c0611043502fa",
".git/objects/8f/da1133cc78cc78ce962ceda094c9d773920609": "8cfd4dd76d30ca68ae611cf6349ea80c",
".git/objects/10/3783666189132b6ad49ccbc78682e0bc09a22c": "3413c7f63b1acad9d4cf4cc3edd30041",
".git/objects/81/02423d78bbc41506bb5a58bfc04e38bd6b034c": "eefb62aa0e31efe9c5fd86a6e0e2ce6b",
".git/objects/6e/05335a49289c5504c313ccd9317ed3e6b4baa4": "de64269d7b50017f39812f288f188bce",
".git/objects/9a/48aa869b67010f0f371568b8cf891787046d5f": "fd03b859ea374b526ca757910d6f395a",
".git/objects/31/958e6cae381c323ef1381b3c48f9f6dee565ed": "be69e53788f9383f6d55638c001adb00",
".git/objects/65/b67ff47d9b3ef2834c068a1e9686acb460f994": "c9f889278a91a1630add1292f13d979b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/5e/e76c535b9a8d4f1744cff287505da7e3ec65cf": "7c89c3f56d3ae2940ca2d1e927872f41",
".git/objects/6d/f3a46b2ce1a7b5d32b176129bc3cd6cc61489c": "a92bd61f1a29a5b22591d006cfd6b56e",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/97/60228891ce4aa3f4c6087b00acd84d7a82d1e4": "ce404a030cc306f832667283bf26a7a1",
".git/objects/a0/c0bd22f6f0ef67713f2fc1edee432c80da47ac": "367f14d91a63909225fe871c891f7c03",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a6/f7abc829f81d812a587f7e4bf8b1b9cc2fcb0f": "0afecf687a25d3c95e7e113ccc661822",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/efde3c9f9d50fa251ad8e7e68bb6851d140612": "91da13ecfa3e7ba7ceff35ea92850191",
".git/objects/c4/e2dbf025ea1a8cf97e8a03cc6c16e073bec26d": "1d1823ff2e3dc78c65358db4b763ae11",
".git/objects/e1/2af82cfe9d43bee274b831794d6b7ba51cdc83": "972eb7e73fd62df82e8a2cecafcc56e8",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/f0/e94eaa7c693f482e1ff67fac8e78a36b33b19b": "7646f49bed2e9c46dd5231e12c3dd45c",
".git/objects/e9/51982a562db311dc06a6b88de60dbf2e0beca2": "59fa7686a712e8bce8385f0845059574",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/2fb55ab807dd1821c0284b4ef6f327ba548499": "c076369ca1f4a14b6c9765f516b47f2c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/ec7a177f11472eb5e8739356c97bc745ad0049": "46d83655c5a7b032f941e8e6f937c5af",
".git/objects/4a/77f5af659efbdf746d7704cb0a1ec4e5ea2210": "92e8b6f75b68539eb9dc1022e7242d5e",
".git/objects/4f/3619e2472aed375120c26d45caa347b41454ca": "3b6b8a4d9b1271c852d69a7ca2d8f650",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "710ec3908155be2ad84373cb012de0c1",
".git/logs/refs/heads/main": "9f7a93aaa7f5b868f362ee535c3c0485",
".git/logs/refs/remotes/origin/main": "75391d923cecf3d34b503fd8edd74066",
".git/logs/refs/remotes/upstream/main": "12c6d8df4c7fcd16b177b8256eaf39e6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "3fc9f0382cc1010cf10a8922e2a369a8",
".git/refs/remotes/origin/main": "e3b35b1238848deeed697e60610d6229",
".git/refs/remotes/upstream/main": "98cbba33d217f052bae8d0d22df93b7c",
".git/index": "30769334a597aea4d3a1ff1e4811a558",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "78d967423747427e350856e2c0ba1bf1",
"assets/AssetManifest.json": "a3fb1c1c23989ac17da190968b7c93e7",
"assets/NOTICES": "03d3376eae7fca196bf567c1aa60999f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "17721ddfd3e607c7a8a30502cbd7de4f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/loginGROUP.webp": "fcfc90ce5940bd493fa4811d733d14ad",
"assets/assets/signGroup.webp": "60273041322e4d60e6bee459bf6ae610",
"assets/assets/icons8-wechat-320(-xxxhdpi).png": "36aba6107469b2d4bd6dac4c1d8ead24",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
