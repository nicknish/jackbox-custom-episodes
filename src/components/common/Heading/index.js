import React from 'react'
import cx from 'classnames'

import styles from './Heading.module.css'

export const Heading = ({ element = 'h1', className, ...props }) => {
    const Component = element
    return <Component className={cx(styles[element], className)} {...props} />
}
