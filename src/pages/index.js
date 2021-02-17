import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/layout'
import { EpisodeIndex } from '../components/EpisodeIndex'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <EpisodeIndex episodes={data.values.edges} />
        </Layout>
    )
}

export default IndexPage

export const query = graphql`
    query IndexPageQuery {
        values: allGoogleSheetNormalizedValuesRow {
            edges {
                node {
                    id
                    timestamp
                    code: episodeCode
                    name: episodeName
                    age
                }
            }
        }
    }
`
