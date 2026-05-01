// Planning Tarek - Service Worker minimal
// Sa seule raison d'exister : permettre l'installation comme PWA.
// Il ne fait PAS de cache offline (l'app fonctionne en pure client-side).

self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  // Pass-through: laisse le navigateur gérer toutes les requêtes normalement.
  // Pas de cache pour éviter de servir d'anciennes versions.
});
