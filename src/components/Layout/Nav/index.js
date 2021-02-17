import React from 'react'

import { INTERNAL_URLS, EXTERNAL_URLS } from '../../../constants/urls'

import { Button, ButtonSizes, ButtonThemes, ButtonTypes } from '../../common/Button'
import { Link, LinkType } from '../../common/Link'

import styles from './Nav.module.css'

export const Nav = () => {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>
                    <Link type={LinkType.Link} to={INTERNAL_URLS.HOME}>
                        <span className="block text-3xl">Jackbox</span>{' '}
                        <span className="block text-lg">Custom Episodes</span>
                    </Link>
                </h1>
                <div className={styles.cta}>
                    <Button
                        type={ButtonTypes.ExternalLink}
                        href={EXTERNAL_URLS.GOOGLE_SPREADSHEET}
                        target="_blank"
                        theme={ButtonThemes.Primary}
                        size={ButtonSizes.Large}
                        className={styles.ctaBtn}
                    >
                        Submit episode
                    </Button>
                </div>
            </nav>
        </header>
    )
}
