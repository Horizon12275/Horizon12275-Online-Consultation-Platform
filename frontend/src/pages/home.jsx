import React from 'react'

import Histogram from '../components/histogram'
import HomeArticle from '../components/homearticle'
import HomeContent from '../components/homecontent'

export default function Homepage() {
    return (
        <div>
            <HomeContent />
            <HomeArticle />

            <Histogram />
        </div>
    )
}
