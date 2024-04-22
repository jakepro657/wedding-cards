import classNames from 'classnames/bind'
import React, { useState } from 'react'
import styles from './Accordion.module.scss'

type Props = {
    label: string
    children: React.ReactNode
}

const cx = classNames.bind(styles)

function Accordion({ children, label }: Props) {
    const [expended, setExpended] = useState(false)

    const handleToggle = () => {
        setExpended((prev) => !prev)
    }

    return (
        <div className={cx(['wrap-accordion', expended ? 'open' : ''])}>
            <div className={cx('wrap-header')} onClick={handleToggle}>
                <span>{label}</span>
                <Arrow className={cx('icon-arrow-down')} />
            </div>
            <div className={cx('wrap-content')}>{children}</div>
        </div>
    )
}

function Arrow({ className }: { className: string }) {
    return (
        <svg
            className={className}
            height="20px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 512 512"
            width="20px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <polygon points="396.6,160 416,180.7 256,352 96,180.7 115.3,160 256,310.5 " />
        </svg>
    )
}

export default Accordion
