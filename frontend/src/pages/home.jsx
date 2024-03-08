import React from 'react'
import Histogram from '../components/histogram'
import HomeArticle from '../components/homearticle'
import TagBar from '../components/tagbar'
import { TagProvider } from '../context/tagcontext'
import { BasicLayout } from '../layouts'

export default function Homepage() {
    return (
        <TagProvider>
            <BasicLayout>
                <TagBar />
                <HomeArticle />
                <Histogram />
            </BasicLayout>
        </TagProvider>
    )
}
