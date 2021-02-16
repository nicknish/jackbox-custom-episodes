import React from 'react'
import { graphql } from 'gatsby'
import { Episode } from '../components/Episode'
import { Layout } from '../components/Layout'

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <div>
                {data.values.edges.map(({ node: episode }) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </div>
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
