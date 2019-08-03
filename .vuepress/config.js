module.exports = {
  title: 'Garfield Plants',
  description: 'All things plants in the historic Garfield neighborhood located in downtown Phoenix, Arizona.',
  themeConfig: {
    sidebar: [
      '/',
      '/about',
      '/guide',
      '/faq'
    ],
    locales: {
      '/' : {
        label: "English",
        nav: [
          
          { text: 'About', link: '/about/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'FAQ', link: '/faq/' },
          { text: 'Community', link: '/community' },
        ]
      },
      '/es/': {
        label: "Español",
        nav: [
          { text: 'About', link: '/es/about/' },
          { text: 'Guide', link: '/es/guide/' },
          { text: 'FAQ', link: '/es/faq/' },
          { text: 'Community', link: '/es/community' },
        ],
      }
    }
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Garfield Plants',
      description: 'All things plants in the historic Garfield neighborhood located in downtown Phoenix, Arizona.'
    },
    '/es/': {
      lang: 'es-US',
      title: 'Garfield Planta',
      description: 'Todo que ver de plantas en la vecindad historica de Garfield localizada en el centro de Phoenix, Arizona.'
    }
  }
}