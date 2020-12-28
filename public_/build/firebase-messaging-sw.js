
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyAC1LEq5QgdvlosTQRgIjuTcT-_LQkopjU",
  authDomain: "expensetracker-b3677.firebaseapp.com",
  databaseURL: "https://expensetracker-b3677.firebaseio.com",
  projectId: "expensetracker-b3677",
  storageBucket: "expensetracker-b3677.appspot.com",
  messagingSenderId: "524204999627",
  appId: "1:524204999627:web:c1bdbe694762daaffdac4e"
  };

  firebase.initializeApp(firebaseConfig);


  let CACHE_NAME = 'my-site-cache-v1';
  let urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/js/0.chunk.js',
  '/static/js/main.chunk.js',
  '/firebase-messaging-sw.js',
  '/index.html',
  '/App.tsx',
  '/components/Namebar.tsx',
  '/components/Balance.tsx',
  '/components/BalanceChart.tsx',
  '/components/History.tsx',
  '/components/Trans.tsx',
  '/hooks/Contexthook.tsx',
  '/hooks/Reducerhook.tsx',
  '/types/Datatypes.tsx',
  '/firebase.tsx',
  '/App.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.googleapis.com/css?family=Antic',
  'https://fonts.googleapis.com/css?family=Aclonica',

  
];

this.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});