import React from 'react'
import { TagProvider } from '../context/tagcontext'
import { BasicLayout } from '../layouts'
import TagBar from '../components/tagbar'

export default function ExpertChoosePage() {
    return (
        <TagProvider>
            <BasicLayout>
                <TagBar />
                
            </BasicLayout>
        </TagProvider>
    )
}
