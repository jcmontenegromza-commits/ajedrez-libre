var V='jaque-libre-v82';
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'])}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!==V}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){if(e.request.method!=='GET')return;var u=new URL(e.request.url);if(u.origin!==location.origin)return;
e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(function(r){return r||fetch(e.request).then(function(n){var cp=n.clone();caches.open(V).then(function(c){c.put(e.request,cp)});return n})}))});
