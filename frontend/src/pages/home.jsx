import React from 'react'
import ExpertContent from '../components/expertcontent'
import Histogram from '../components/histogram'
import HomeArticle from '../components/homearticle'
import HomeContent from '../components/homecontent'

export default function Homepage() {
    return (
        <div>
            <HomeContent />
            <HomeArticle />
            <ExpertContent />
            <Histogram />
        </div>
    )
}
