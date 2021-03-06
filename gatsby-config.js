require('dotenv').config()

module.exports = {
    siteMetadata: {
        title: 'Jackbox Custom Episodes',
        description: 'Find Jackbox custom episode codes.',
        siteUrl: 'https://jackbox-custom-episodes.netlify.app',
    },
    plugins: [
        'gatsby-plugin-postcss',
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    process.env.GA_TRACKING_ID, // Google Analytics / GA
                ],
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    respectDNT: true,
                    exclude: [],
                },
            },
        },
        {
            resolve: 'gatsby-source-google-sheets',
            options: {
                // https://docs.google.com/spreadsheets/d/1Au6gG5Fr1eRAf1V4yBoIVrSXi1LdLWFUExzfDcWJpIg/edit#gid=2055394648
                spreadsheetId: '1Au6gG5Fr1eRAf1V4yBoIVrSXi1LdLWFUExzfDcWJpIg',
                worksheetTitle: 'Normalized Values',
                credentials: JSON.parse(process.env.GOOGLE_SHEETS_API_CREDENTIALS),
            },
        },
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        'gatsby-plugin-offline',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
    ],
}
