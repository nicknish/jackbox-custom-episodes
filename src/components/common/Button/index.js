import React from 'react'
import { Link } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import cx from 'classnames'

import styles from './Button.module.css'

export const ButtonTypes = {
    ExternalLink: 'ExternalLink',
    Link: 'Link',
    Button: 'Button',
}

export const ButtonSizes = {
    Large: 'Large',
    Medium: 'Medium',
    Small: 'Small',
}

export const ButtonThemes = {
    Primary: 'Primary',
    Base: 'Base',
}

export const Button = ({
    type = ButtonTypes.Button,
    size = ButtonSizes.Medium,
    theme = ButtonThemes.Primary,
    className,
    ...props
}) => {
    const Component = getButtonComponent(type)
    return (
        <Component
            className={cx(styles.button, className, {
                // Size
                [styles.sizeLg]: size === ButtonSizes.Large,
                [styles.sizeM]: size === ButtonSizes.Medium,
                [styles.sizeSm]: size === ButtonSizes.Small,

                // Theme
                [styles.themePrimary]: theme === ButtonThemes.Primary,
                [styles.themeBase]: theme === ButtonThemes.Base,
            })}
            {...props}
        />
    )
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
