import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import { BasicLayout } from '../layouts'
import Commentcard from "../components/commentcard.jsx";
import FillForm from "../components/fillinform.jsx";
import Profile from "../components/profile.jsx";
export default function UserPage() {
    return (
        <BasicLayout>

           <Commentcard/>
            <FillForm/>
           <Profile/>
        </BasicLayout>
    )
}