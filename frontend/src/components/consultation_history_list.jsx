import React from 'react'
import ConsultationHistoryCard from './consultation_history_card'
import { Divider, Row } from 'antd'
import { CommentOutlined } from '@ant-design/icons'

export default function ConsultationHistoryList() {
    return (
        <div style={{ width: '100%' }}>
            <Row justify="center">
                <h1>历史记录</h1>
            </Row>
            <Divider />
            <ConsultationHistoryCard />
            <Divider />
            <ConsultationHistoryCard />
            <Divider />
            <ConsultationHistoryCard />
            <Divider />
            <Row align="middle" style={{marginLeft:'20px'}}>
                <CommentOutlined style={{marginRight:'20px'}}/>
                <h3>所有聊天</h3>
            </Row>
        </div>
    )
}
