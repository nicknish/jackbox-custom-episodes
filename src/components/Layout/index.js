import '../../styles/global.css'
import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

import styles from './Layout.module.css'

export const Layout = ({ children }) => {
    return (
        <div className="site">
            <Nav />
            <main className={styles.content}>{children}</main>
            <Footer />
        </div>
    )
}
