if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MaqtpSPcZGHMelRoSMO35/_buildManifest.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/MaqtpSPcZGHMelRoSMO35/_middlewareManifest.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/MaqtpSPcZGHMelRoSMO35/_ssgManifest.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/168-29ace2ce2b77f024.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/7479380b-5eedfe70eb6aad94.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/framework-dc33c0b5493501f0.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/main-3cc066b7c5dd6645.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/pages/_error-a3f18418a2205cb8.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/pages/index-eeebda138caf8ec0.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/chunks/webpack-c66a1cc0a3689c22.js",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/css/a7d640544e9e2fbe.css",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/_next/static/css/e85f0e7386e649bc.css",revision:"MaqtpSPcZGHMelRoSMO35"},{url:"/favicon.ico",revision:"21b739d43fcb9bbb83d8541fe4fe88fa"},{url:"/icon-192x192.png",revision:"51d0bb6d7185175e2021172d2151764f"},{url:"/icon-256x256.png",revision:"90597f6c41fe05af0491f45587b6e086"},{url:"/icon-384x384.png",revision:"68af87615f4977128ef2f6892b914a73"},{url:"/icon-512x512.png",revision:"948f5e975e1909bc519ebf6097bc6092"},{url:"/images/bg.jpg",revision:"8bfbb1d6774f34507ea3263eeb5d65ea"},{url:"/images/icon.png",revision:"2575b9f189c6c1b5d706b8dfba71c471"},{url:"/manifest.json",revision:"d2001f202fbba371672b76d9b3e223ab"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));