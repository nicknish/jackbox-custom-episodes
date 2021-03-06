import React, { useEffect, useState, useRef } from 'react'
import { useCopyToClipboard } from 'react-use'

import { Button, ButtonSizes, ButtonThemes } from '../../common/Button'
import { SpaceBetween } from '../../common/SpaceBetween'

import styles from './Episode.module.css'

export const Episode = ({ code, name, age, date, isNsfw }) => {
    const [state, copyToClipboard] = useCopyToClipboard()
    const [copyText, setCopyText] = useState(null)
    const copyTextTimer = useRef()
    const handleCopyClick = () => copyToClipboard(code)

    useEffect(() => {
        if (state.error) {
            setCopyText('Copy error')
        } else if (state.value) {
            setCopyText('Copied!')
        }

        // Clears timer
        if (copyTextTimer.current) {
            clearTimeout(copyTextTimer.current)
        }
        // Sets timer
        copyTextTimer.current = setTimeout(() => {
            setCopyText(null)
        }, 1.5 * 1000)
    }, [state])

    return (
        <div className={styles.episode}>
            <header className={styles.header}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.date}>Submitted: {date}</p>
            </header>
            <div className={styles.info}>
                <SpaceBetween spacing="mb-2">
                    <section className={styles.codeSection}>
                        Episode Code:{' '}
                        <button className={styles.code} onClick={handleCopyClick}>
                            {code}
                        </button>
                        <div className={styles.clickToCopyButton}>
                            <Button
                                onClick={handleCopyClick}
                                size={ButtonSizes.Small}
                                theme={ButtonThemes.Base}
                            >
                                {copyText || 'Copy'}
                            </Button>
                        </div>
                    </section>
                    <EpisodeAge age={age} isNsfw={isNsfw} />
                </SpaceBetween>
            </div>
        </div>
    )
}

function EpisodeAge({ age, isNsfw }) {
    if (!age) {
        return <p>Age: Unknown</p>
    }

    if (isNsfw) {
        return (
            <p>
                Age: <span className="bg-red-200 p-1 text-center">NSFW</span>
            </p>
        )
    }

    return <p>Age: {age}</p>
}
