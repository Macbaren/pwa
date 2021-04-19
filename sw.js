const staticCacheName = 's-app-v1'

self.addEventListener('install', (event) => {
  event.wait(caches.open(staticCacheName).then)
})

self.addEventListener('activate', (event) => {
  console.log('SW: activate')
})
