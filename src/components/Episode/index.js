import React from 'react'
import { format } from 'date-fns'

import { SpaceBetween } from '../common/SpaceBetween'

import styles from './Episode.module.css'
import { DATE_TOKENS } from '../../constants/dates'

export const Episode = ({ code, name, age, timestamp }) => {
    return (
        <div className={styles.episode}>
            <header className={styles.header}>
                <h2 className={styles.name}>{name}</h2>
                <p className={styles.date}>
                    Submitted: {format(new Date(timestamp), DATE_TOKENS.shortenedFullDate)}
                </p>
            </header>
            <div className={styles.info}>
                <SpaceBetween>
                    <p>Episode Code: {code}</p>
                    <p>Age: {age || 'Unknown'}</p>
                </SpaceBetween>
            </div>
        </div>
    )
}
