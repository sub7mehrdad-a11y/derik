const V='derik-v13';
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(['./manifest.json','./icon.svg',...['wool','cloth','wine','grain','date','purple','cedar','lapis','metal','farm','scribe','priest','satrap','darius','caravan','ship','emblem'].map(n=>'./assets/ui/v6/'+n+'.webp')])).catch(()=>{}))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!=V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
/* صفحه و داده‌ها: اول شبکه (همیشه نسخهٔ تازه)، اگر آفلاین بود از کش. تصاویر: اول کش. */
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!='GET')return;
 const u=new URL(r.url);if(u.origin!=location.origin)return;
 const img=/\.(webp|png|jpg|jpeg|svg)$/.test(u.pathname);
 if(img){e.respondWith(caches.open(V).then(c=>c.match(r).then(m=>m||fetch(r).catch(()=>fetch(r)).then(n=>{if(n.ok)c.put(r,n.clone());return n}))));return}
 e.respondWith(fetch(r,{cache:'no-cache'}).then(n=>{if(n.ok){const k=n.clone();caches.open(V).then(c=>c.put(r,k))}return n}).catch(()=>caches.match(r).then(m=>m||caches.match('./index.html'))))});
