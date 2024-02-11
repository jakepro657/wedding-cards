import classNames from 'classnames/bind'
import React from 'react'
import styles from './Dimmed.module.scss'

type Props = {
    children: React.ReactNode
}

const cx = classNames.bind(styles)

function Dimmed({ children }: Props) {
    return <div className={cx('dimmed')}>{children}</div>
}

export default Dimmed
