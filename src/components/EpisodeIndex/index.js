import React from 'react'
import cx from 'classnames'

import { useFilteredDecoratedEpisodes } from './utils'
import { Episode } from './Episode'
import { Button, ButtonThemes, ButtonTypes } from '../common/Button'

import styles from './EpisodeIndex.module.css'

export const EpisodeIndex = ({ episodes: data }) => {
    const { episodes, showNsfw, setShowNsfw } = useFilteredDecoratedEpisodes(data)

    return (
        <div>
            <header className={styles.header}>
                <Button
                    onClick={() => setShowNsfw((open) => !open)}
                    type={ButtonTypes.Button}
                    theme={ButtonThemes.Base}
                    className={cx({ 'bg-purple-600 text-white': showNsfw })}
                >
                    {showNsfw ? 'Hide' : 'Show'} NSFW
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
