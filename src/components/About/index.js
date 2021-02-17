import React from 'react'

import { EXTERNAL_URLS } from '../../constants/urls'

import { Heading } from '../common/Heading'
import { Link, LinkType } from '../common/Link'
import { Button, ButtonThemes, ButtonSizes, ButtonTypes } from '../common/Button'

import styles from './About.module.css'

export const About = () => (
    <section className={styles.page}>
        <Heading className={styles.title}>What is this site?</Heading>
        <p>Finding custom episodes for Jackbox games Quiplash and Drawful is surprisingly hard!</p>
        <p>
            As an{' '}
            <Link type={LinkType.External} href={EXTERNAL_URLS.AUTHOR} target="_blank">
                indie developer studio
            </Link>
            , when we realized that Jackbox games' custom episode codes are spread across multiple
            sources like Reddit, Steam forums, and even Github, it only made sense to us to collect
            these sources in a single place for the long-term so everyone can enjoy them.
        </p>
        <p>
            Big thank you to{' '}
            <Link type={LinkType.External} href="https://github.com/cfultz" target="_blank">
                cfultz
            </Link>{' '}
            for their{' '}
            <Link
                type={LinkType.External}
                href="https://github.com/cfultz/QuiplashCustomEpisodeList"
                target="_blank"
            >
                great list
            </Link>{' '}
            and its contributors to help get this started!
        </p>
        <div className="mt-8 mb-8">
            <p className="mb-4">
                For YOU, if you've created a custom episode that you're particularly proud of,
                please submit it!
            </p>
            <div className="text-center">
                <Button
                    type={ButtonTypes.ExternalLink}
                    href={EXTERNAL_URLS.GOOGLE_SPREADSHEET}
                    target="_blank"
                    theme={ButtonThemes.Primary}
                    size={ButtonSizes.Large}
                    className={styles.ctaPrimary}
                >
                    Submit episode
                </Button>
            </div>
        </div>
        <p>
            Also, this website is{' '}
            <Link type={LinkType.External} href={EXTERNAL_URLS.GITHUB} target="_blank">
                open-source
            </Link>{' '}
            and we're open to{' '}
            <Link type={LinkType.External} href={EXTERNAL_URLS.FEEDBACK} target="_blank">
                taking feedback
            </Link>
            . If people are getting value out of this site like we are, we'll take time to add more
            features.
        </p>
    </section>
)
