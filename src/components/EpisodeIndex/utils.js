import { useState, useMemo } from 'react'
import { format } from 'date-fns'
import orderBy from 'lodash/orderBy'
import { DATE_TOKENS } from '../../constants/dates'

export const useFilteredDecoratedEpisodes = (data) => {
    const [showNsfw, setShowNsfw] = useState(false)

    // Sort episodes by age
    const [nonNsfwEpisodes, allEpisodes] = useMemo(() => {
        const decoratedData = orderBy(
            data.map(({ node: episode }) => {
                if (episode.timestamp) {
                    episode.date = format(
                        new Date(episode.timestamp),
                        DATE_TOKENS.shortenedFullDate
                    )
                }

                if (episode.age === 'NSFW') {
                    episode.isNsfw = true
                }

                return episode
            }),
            ['date'],
            ['desc']
        )

        return [decoratedData.filter((episode) => episode.age !== 'NSFW'), decoratedData]
    }, [data])

    const episodes = showNsfw ? allEpisodes : nonNsfwEpisodes

    return {
        episodes,
        showNsfw,
        setShowNsfw,
    }
}
