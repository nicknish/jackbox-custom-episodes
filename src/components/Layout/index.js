import '../../styles/global.css'
import React from 'react'

import { SEO } from './SEO'
import { Nav } from './Nav'
import { Footer } from './Footer'

import styles from './Layout.module.css'

export const Layout = ({ children, ...seoProps }) => {
    return (
        <div className="site">
            <SEO {...seoProps} />
            <Nav />
            <main className={styles.content}>{children}</main>
            <Footer />
        </div>
    )
}
