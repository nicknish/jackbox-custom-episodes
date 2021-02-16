/**
 * SpaceBetween takes in children and applies the same spacing className until the last item
 *
 * TODO: Look into TailwindCSS's space-between classes to replace
 */
import React from 'react'
import cx from 'classnames'

export const SpaceBetween = ({ children, spacing = 'mb-3' }) => {
    const clones = React.Children.map(children, (child, index) => {
        const appendedClass = index === children.length - 1 ? '' : spacing
        return React.cloneElement(child, {
            className: cx(child.props.className, appendedClass),
        })
    })
    return <>{clones}</>
}
