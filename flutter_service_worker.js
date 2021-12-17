'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d1c558915514e1e8d5a8768a996aa0a8",
"assets/assets/fonts/AquinoDemo.ttf": "f5610d09911b870646ea17fecca30399",
"assets/assets/fonts/cm_sans_serif_2012.ttf": "b2c533d45ade59514b04062247d96aaa",
"assets/assets/fonts/Nisebuschgardens.ttf": "dde1220fcf511dbced5c638d52378454",
"assets/assets/fonts/NunitoBold.ttf": "1cd294a771f26752bbb8d8d5210f6412",
"assets/assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/images/add1.jpg": "4a856d6df51488b5a42d833c91cf8494",
"assets/assets/images/add2.jpg": "369a0483f12bbfde7da7a574a7ef14e3",
"assets/assets/images/add3.jpg": "94511325412b45e413de2bdaef4f540e",
"assets/assets/images/agro.jpg": "2404ad60d0c293aa3722307676fc5213",
"assets/assets/images/antiques.jpg": "1d7b5adb5d839f25d7df36a307fedf9f",
"assets/assets/images/avatar.jpg": "cb4211c6d9d677171cd14c3ac4f10044",
"assets/assets/images/avatar2.webp": "7e0bd5b4f164e5235a6cc07fa5f56b67",
"assets/assets/images/babys.jpg": "443ff71a611d7e22471d796eb47d3e53",
"assets/assets/images/bags.jpg": "c7b1bd1631dcc73e80ad97551c845b50",
"assets/assets/images/banner.jpg": "314762f8703b6fa450f1c73b11dd6fc3",
"assets/assets/images/business.png": "4649e3f2bb71efa35e833547d2557ab5",
"assets/assets/images/cameras.jpg": "0b9ebe8b18204b4989a55444233be508",
"assets/assets/images/electrodomesticos.jpg": "6be97324fc7981e243a05140ab31425b",
"assets/assets/images/fitness.jpg": "5b101f5b54e9f4b7a5d526158e4e711a",
"assets/assets/images/image-preview.png": "bc9bc70631133021c43cfaefdb902b3e",
"assets/assets/images/inmuebles.jpg": "f99dbd44c62cb6072c020cf6427c4f66",
"assets/assets/images/instruments.jpg": "d9dda3ed5d50d2ace919bedda6867716",
"assets/assets/images/jewelry.jpg": "70de791bd5e5c7e893ee43f5f1d369bb",
"assets/assets/images/marketing.png": "4d0f2115a0998fd83ac7b4ed692718c6",
"assets/assets/images/onboarding0.png": "2df33040c11b48d80e0a8b91716c3f1a",
"assets/assets/images/onboarding1.png": "bbb74d46c7879bd14c809cb917ddb08e",
"assets/assets/images/onboarding2.png": "b2428bfb68d5a758e950c3d8c975739a",
"assets/assets/images/photography.png": "dbcb4dae76073c244813176cd72ad0eb",
"assets/assets/images/technology.jpg": "6fe3ad55f209489fd8de3d4e5e711649",
"assets/assets/images/telephone.jpg": "95c8a0647541c306327d7f17a9ead69e",
"assets/assets/images/tools.jpg": "6a68baea90bfe5affe774aa399444e76",
"assets/assets/images/toys.jpg": "506bfb6c94facff4731ddf445dd74491",
"assets/assets/images/ux_design.png": "e0a228fc131bdf5209e102caf4dca263",
"assets/assets/images/vehicle.jpg": "35c01d5e4078d5577b7966104df2e82d",
"assets/assets/images/videogames.jpg": "982440a7ab0d4762688ed20c2430f725",
"assets/assets/images/woman.png": "c4951f9a43cb016a8578ab916315dcb4",
"assets/assets/logos/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/assets/logos/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/assets/logos/trueke.png": "1f6403095107072109fafb63b8cc82ad",
"assets/FontManifest.json": "eeca2816a68c6baeae7217aca18952f4",
"assets/fonts/AquinoDemo.ttf": "f5610d09911b870646ea17fecca30399",
"assets/fonts/cm_sans_serif_2012.ttf": "b2c533d45ade59514b04062247d96aaa",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Nisebuschgardens.ttf": "dde1220fcf511dbced5c638d52378454",
"assets/fonts/Nunito.ttf": "6abf597a1f3f44fd10bdcb7b86b494f0",
"assets/fonts/NunitoBold.ttf": "1cd294a771f26752bbb8d8d5210f6412",
"assets/fonts/OpenSans.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/images/add1.jpg": "4a856d6df51488b5a42d833c91cf8494",
"assets/images/add2.jpg": "369a0483f12bbfde7da7a574a7ef14e3",
"assets/images/add3.jpg": "94511325412b45e413de2bdaef4f540e",
"assets/images/agro.jpg": "2404ad60d0c293aa3722307676fc5213",
"assets/images/antiques.jpg": "1d7b5adb5d839f25d7df36a307fedf9f",
"assets/images/avatar.jpg": "cb4211c6d9d677171cd14c3ac4f10044",
"assets/images/avatar2.webp": "7e0bd5b4f164e5235a6cc07fa5f56b67",
"assets/images/babys.jpg": "443ff71a611d7e22471d796eb47d3e53",
"assets/images/bags.jpg": "c7b1bd1631dcc73e80ad97551c845b50",
"assets/images/banner.jpg": "314762f8703b6fa450f1c73b11dd6fc3",
"assets/images/business.png": "4649e3f2bb71efa35e833547d2557ab5",
"assets/images/cameras.jpg": "0b9ebe8b18204b4989a55444233be508",
"assets/images/electrodomesticos.jpg": "6be97324fc7981e243a05140ab31425b",
"assets/images/fitness.jpg": "5b101f5b54e9f4b7a5d526158e4e711a",
"assets/images/image-preview.png": "bc9bc70631133021c43cfaefdb902b3e",
"assets/images/inmuebles.jpg": "f99dbd44c62cb6072c020cf6427c4f66",
"assets/images/instruments.jpg": "d9dda3ed5d50d2ace919bedda6867716",
"assets/images/jewelry.jpg": "70de791bd5e5c7e893ee43f5f1d369bb",
"assets/images/marketing.png": "4d0f2115a0998fd83ac7b4ed692718c6",
"assets/images/onboarding0.png": "2df33040c11b48d80e0a8b91716c3f1a",
"assets/images/onboarding1.png": "bbb74d46c7879bd14c809cb917ddb08e",
"assets/images/onboarding2.png": "b2428bfb68d5a758e950c3d8c975739a",
"assets/images/photography.png": "dbcb4dae76073c244813176cd72ad0eb",
"assets/images/technology.jpg": "6fe3ad55f209489fd8de3d4e5e711649",
"assets/images/telephone.jpg": "95c8a0647541c306327d7f17a9ead69e",
"assets/images/tools.jpg": "6a68baea90bfe5affe774aa399444e76",
"assets/images/toys.jpg": "506bfb6c94facff4731ddf445dd74491",
"assets/images/ux_design.png": "e0a228fc131bdf5209e102caf4dca263",
"assets/images/vehicle.jpg": "35c01d5e4078d5577b7966104df2e82d",
"assets/images/videogames.jpg": "982440a7ab0d4762688ed20c2430f725",
"assets/images/woman.png": "c4951f9a43cb016a8578ab916315dcb4",
"assets/logos/facebook.jpg": "e78b8801fec15b36530841424b13057d",
"assets/logos/google.jpg": "d0991539b51f1520c42d1dee04ba0faa",
"assets/logos/trueke.png": "1f6403095107072109fafb63b8cc82ad",
"assets/NOTICES": "1b62cc8b0dd2369bad2a03dbefc5abd8",
"assets/packages/cool_alert/assets/flare/error_check.flr": "d9f54791d0d79935d22206966707e4b3",
"assets/packages/cool_alert/assets/flare/info_check.flr": "f6b81c2aa3ae36418c13bfd36d11ac04",
"assets/packages/cool_alert/assets/flare/loading.flr": "b6987a8e6de74062b8c002539d2d043e",
"assets/packages/cool_alert/assets/flare/success_check.flr": "9d163bcc6f6b58566e0abde7761a67a0",
"assets/packages/cool_alert/assets/flare/warning_check.flr": "ff4a110b8d905dedb4d4639a17399703",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b025c83936924f21c490a5458d9f5a55",
"/": "b025c83936924f21c490a5458d9f5a55",
"main.dart.js": "e3b84de7e98e27ef3f35a7e17957893f",
"manifest.json": "9414b0ae8f1827ac5709d89933f6f3bb",
"version.json": "72b28861fdd9df7ba3be64d2c2aa9b19"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
