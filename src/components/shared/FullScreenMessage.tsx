import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
    type: 'loading' | 'error'
}

function FullScreenMessage({ type }: FullScreenMessageProps) {
    return (
        <div className={cx('container')}>
            {type === 'loading' ? (
                <Heart />
            ) : (
                <>
                    <Error />
                    에러가 발생했어요. 잠시 후 다시 시도해주세요.
                </>
            )}
        </div>
    )
}

function Heart() {
    return (
        <svg
            className={cx('icon-heart')}
            height="512px"
            version="1.1"
            viewBox="0 0 512 512"
            width="512px"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
                <g>
                    <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
                </g>
            </g>
            <g id="Layer_1" />
        </svg>
    )
}

function Error() {
    return (
        <svg
            className={cx('icon-error')}
            height="48"
            viewBox="0 0 48 48"
            width="48"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h48v48H0V0z" fill="none" />
            <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" />
        </svg>
    )
}

export default FullScreenMessage
