import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import styles from './Button.module.css'

export const ButtonTypes = {
    ExternalLink: 'ExternalLink',
    Link: 'Link',
    Button: 'Button',
}

export const Button = ({ type = ButtonTypes.Button, ...props }) => {
    const Component = getButtonComponent(type)
    return <Component className={styles.button} {...props} />
}

function getButtonComponent(type) {
    switch (type) {
        case ButtonTypes.ExternalLink:
            return OutboundLink
        case ButtonTypes.Link:
            return Link
        case ButtonTypes.Button:
        default:
            return 'button'
    }
}
