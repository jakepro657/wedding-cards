import classNames from 'classnames/bind'
import { useState } from 'react'
import ImageViewer from '../imageViewer'
import Section from '../shared/Section'
import styles from './ImageGallery.module.scss'

type Props = {
    images: string[]
}

const cx = classNames.bind(styles)

function ImageGallery({ images }: Props) {
    const [selectedIdx, setSelectedIdx] = useState<number>(-1)

    const open = selectedIdx > -1

    const handleSelectedImage = (idx: number) => {
        setSelectedIdx(idx)
    }

    const handleClose = () => {
        setSelectedIdx(-1)
    }

    return (
        <>
            <Section title="사진첩">
                <ul className={cx('wrap-images')}>
                    {images.map((src, index) => (
                        <li
                            key={index}
                            className={cx('wrap-image')}
                            onClick={() => handleSelectedImage(index)}
                        >
                            <img src={src} alt="사진첩 이미지" />
                        </li>
                    ))}
                </ul>
            </Section>
            <ImageViewer
                images={images}
                open={open}
                selectedIdx={selectedIdx}
                onClose={handleClose}
            />
        </>
    )
}

export default ImageGallery
