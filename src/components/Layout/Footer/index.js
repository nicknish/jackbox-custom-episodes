import React from 'react'
import { Link, LinkType } from '../../common/Link'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            &copy;{' '}
            <Link
                type={LinkType.External}
                href="https://www.nicknish.co"
                className={styles.copyright}
                target="_blank"
            >
                Nick Nish
            </Link>{' '}
            2021
        </footer>
    )
}
