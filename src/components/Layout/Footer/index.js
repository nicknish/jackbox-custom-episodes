import React from 'react'

import { EXTERNAL_URLS, MENU } from '../../../constants/urls'

import { Link, LinkType } from '../../common/Link'

import styles from './Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerTop}>
                <nav className={styles.footerNav}>
                    {MENU.map(({ label, ...props }) => (
                        <div className={styles.footerNavItemContainer}>
                            <Link className={styles.footerNavItem} {...props}>
                                {label}
                            </Link>
                        </div>
                    ))}
                </nav>
            </section>
            <section>
                &copy;{' '}
                <Link
                    type={LinkType.External}
                    href={EXTERNAL_URLS.AUTHOR}
                    className={styles.copyright}
                    target="_blank"
                >
                    Makers Create Studio
                </Link>{' '}
                {new Date().getFullYear()}
            </section>
        </footer>
    )
}
