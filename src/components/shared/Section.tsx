import classNames from 'classnames/bind'
import React from 'react'
import styles from './Section.module.scss'

type Props = {
    className?: string
    children: React.ReactNode
}

const cx = classNames.bind(styles)

function Section({ children, className }: Props) {
    return (
        <section className={cx(['container', className])}>{children}</section>
    )
}

export default Section
