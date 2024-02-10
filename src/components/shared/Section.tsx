import classNames from 'classnames/bind'
import React from 'react'
import styles from './Section.module.scss'

type Props = {
    className?: string
    children: React.ReactNode
    title?: React.ReactNode
}

const cx = classNames.bind(styles)

function Section({ children, className, title }: Props) {
    return (
        <section className={cx(['container', className])}>
            {title != null ? (
                <div className={cx('txt-title')}>{title}</div>
            ) : null}
            {children}
        </section>
    )
}

export default Section
