const withPWA = require('next-pwa');

module.exports = withPWA({
    images: {
        domains: ["avatars.dicebear.com", "links.papareact.com", "firebasestorage.googleapis.com", "i.imgur.com", "images.unsplash.com", "modernslave.io"]
    },
    pwa: {
        dest: "public",
        register: true,
        skipWaiting: true,
    }
})