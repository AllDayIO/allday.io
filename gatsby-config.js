// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

// const path = require('path')

const clientConfig = require('./client-config')
const token = process.env.SANITY_READ_TOKEN

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: { // SiteMeta is only used for blog right now
    title: 'Design Studio Blog | Web | App Development | AllDay Consultants',
    name: 'AllDay',
    siteUrl: 'https://allday.io/design-studio-blog',
    description: 'Our design pros talk all things web, app, UX/UI design and strategy tips all day! Visit our blog to create a better brand that connects with your customers.',

    // important to set the main text that appears in the hero
    hero: {
      heading: 'Good sh!t. AllDay.',
      maxWidth: 652
    },
    social: [
      {
        name: 'twitter',
        url: 'https://twitter.com/narative'
      },
      {
        name: 'github',
        url: 'https://github.com/narative'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token
      }
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images'
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Poppins',
            variants: ['300', '300i', '400', '400i', '500', '500i', '600', '600i', '700', '700i']
          }
        ]
      }
    },
    {
      resolve: '@narative/gatsby-theme-novela',
      options: {
        sources: {
          local: true
        },
        basePath: '/design-studio-blog',
        rootPath: '/',
        contentPosts: 'content/posts',
        contentAuthors: 'content/authors',
        authorsPage: true,
        authorsPath: 'team'
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AllDay',
        short_name: 'AllDay',
        start_url: '/',
        background_color: '#FEFEFE',
        theme_color: '#00B4BF',
        display: 'standalone',
        icon: 'src/img/favicon.svg'
      }
    },
    'gatsby-plugin-offline'
  ]
}
