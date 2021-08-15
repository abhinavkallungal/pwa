var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    "./",
    "./style.css",
    "/img/icon64.png",
    "/img/icon512.png"
];

self.addEventListener('install', e=>{
  
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache =>{
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch',e=>{ 
  console.log(`inretsepting fetch request for: ${e.request.url}`);
})