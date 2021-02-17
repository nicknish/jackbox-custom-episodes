import React from 'react'

import { Button, ButtonSizes, ButtonThemes, ButtonTypes } from '../../common/Button'

import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>Jackbox Custom Episodes</h1>
                <div className={styles.cta}>
                    <Button
                        type={ButtonTypes.ExternalLink}
                        href="https://docs.google.com/forms/d/1qSk093JnIt6uqKAWmNhlZtqaRy1uW_-I3nNKoaphvI4"
                        target="_blank"
                        theme={ButtonThemes.Primary}
                        size={ButtonSizes.Large}
                    >
                        Submit new episode
                    </Button>
                </div>
            </nav>
        </header>
    )
}
