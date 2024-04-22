import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import Calendar from './components/sections/Calendar'
import Contact from './components/sections/Contact'
import Heading from './components/sections/Heading'
import ImageGallery from './components/sections/ImageGallery'
import Intro from './components/sections/intro'
import Invitation from './components/sections/Invitation'
import Map from './components/sections/Map'
import Share from './components/sections/Share'
import Video from './components/sections/Video'

import FullScreenMessage from './components/shared/FullScreenMessage'
import { Wedding } from './models/wedding'

const cx = classNames.bind(styles)

function App() {
    const [wedding, setWedding] = useState<Wedding | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8888/wedding')
            .then((response) => {
                if (response.ok === false) {
                    throw new Error('청첩장 정보를 가져오는데 실패했습니다.')
                }

                return response.json()
            })
            .then((data) => {
                setWedding(data)
                setLoading(false)
            })
            .catch((error) => {
                console.error('Error:', error)
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <FullScreenMessage type="loading" />
    }

    if (error) {
        return <FullScreenMessage type="error" />
    }

    if (wedding == null) {
        return null
    }

    const {
        date,
        galleryImages,
        groom,
        bride,
        location,
        message: { intro, invitation },
    } = wedding

    return (
        <div className={cx('container')}>
            <Heading date={date} />
            <Video />
            <Intro
                groomName={groom.name}
                brideName={bride.name}
                locationName={location.name}
                date={date}
                message={intro}
            />
            <Invitation message={invitation} />
            <ImageGallery images={galleryImages} />
            <Calendar date={date} />
            <Map location={location} />
            <Contact groom={groom} bride={bride} />
            <Share date={date} groomName={groom.name} brideName={bride.name} />
            {/* {JSON.stringify(wedding)} */}
        </div>
    )
}

export default App
