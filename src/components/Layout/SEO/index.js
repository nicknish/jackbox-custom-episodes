import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

export const SEO = ({ title: pageTitle }) => {
    const data = useStaticQuery(graphql`
        query SeoQuery {
            site {
                siteMetadata {
                    title
                    description
                    siteUrl
                }
            }
        }
    `)

    const {
        site: {
            siteMetadata: { title, description, siteUrl },
        },
    } = data

    return (
        <Helmet defaultTitle={title} titleTemplate={`%s · ${title}`}>
            {/* Document metadata */}
            <html lang="en" />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

            {/* SEO metadata */}
            {pageTitle && <title>{pageTitle}</title>}
            <meta name="description" content={description} />

            {/* OpenGraph tags */}
            <meta property="og:title" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:description" content={description} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    )
}
