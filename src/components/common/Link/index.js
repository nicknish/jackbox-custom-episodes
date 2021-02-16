import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

export const LinkType = {
    Link: 'Link',
    External: 'External',
}

export const Link = ({ type = LinkType.Link, ...props }) => {
    const Component = getLinkComponent(type)
    return <Component {...props} />
}

function getLinkComponent(type) {
    switch (type) {
        case LinkType.External:
            return OutboundLink
        case LinkType.Link:
        default:
            return GatsbyLink
    }
}
