import React from 'react'

import { useFilteredDecoratedEpisodes } from './utils'
import { Episode } from './Episode'
import { Button, ButtonTypes } from '../common/Button'

import styles from './EpisodeIndex.module.css'

export const EpisodeIndex = ({ episodes: data }) => {
    const { episodes, showNsfw, setShowNsfw } = useFilteredDecoratedEpisodes(data)

    return (
        <div>
            <header className={styles.header}>
                <Button onClick={() => setShowNsfw((open) => !open)} type={ButtonTypes.Button}>
                    Toggle NSFW {showNsfw ? 'Off' : 'On'}
                </Button>
            </header>
            <section>
                {episodes.map((episode) => (
                    <Episode key={episode.id} {...episode} />
                ))}
            </section>
        </div>
    )
}
