module.exports = {
  title: 'Garfield Plants',
  description: 'All things plants in the historic Garfield neighborhood located in downtown Phoenix, Arizona.',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: [
      '/about',
      '/guide'
    ]
  }
}