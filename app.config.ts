export default defineAppConfig({
  title: 'Sink',
  email: 'aki@momobako.me',
  github: 'https://github.com/suouaki',
  twitter: 'https://x.com/ccMj2Urwo295132',
  telegram: 'https://t.me/momo_bako',
  mastodon: 'https://www.threads.net/@haisa_kura',
  blog: 'http://momobako.atwebpages.com/',
  description: 'A Simple / Speedy / Secure Link Shortener with Analytics, 100% run on Cloudflare.',
  image: 'https://mig01.996399.xyz/The%20Hungry%20Lamb%202024_12_15%201_09_15.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
