module.exports = {
  themeConfig: {
    
    locales: {
      '/' : {
        label: "English",
        nav: [
          { text: 'Home', link: '/' },
          { text: 'About', link: '/about/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Community', link: '/community' },
        ],
        sidebar: [
          '/',
          '/about',
          '/guide',
          '/bluestake',
          '/faq'
        ],
      },
      '/es/': {
        label: "Español",
        nav: [
          { text: 'Home', link: '/es/' },
          { text: 'About', link: '/es/about' },
          { text: 'Guide', link: '/es/guide' },
          { text: 'FAQ', link: '/es/faq/' },
          { text: 'Community', link: '/es/community' },
        ],
        sidebar: [
          '/es',
          '/es/about',
          '/es/guide',
          '/es/bluestake',
          '/es/faq'
        ],
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Garfield Tree Planting 2019',
      description: 'Free trees from the Phoenix Sikh community.'
    },
    '/es/': {
      lang: 'es-US',
      title: 'Garfield Planta',
      description: 'Free trees from the Phoenix Sikh community.'
    }
  }
}