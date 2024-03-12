import { Row, Avatar, Col } from 'antd'
import React from 'react'

export default function ConsultationHistoryCard() {
    return (
        <Row justify="space-between" align="middle" style={{ width: '100%' }}>
            <Avatar
                shape="square"
                size={50}
                src={"/1.jpg"}
                style={{ borderRadius: "20px" }}
            />
            <Col style={{ width: '80%' }}>
                <Row justify="space-between">
                    <Col>
                        Consultation History
                    </Col>
                    <Col>
                        2021-10-10
                    </Col>
                </Row>
                <Row>
                    <h2>网络安全教育</h2>
                </Row>
                <Row>
                    该项目解决了网络安全教育
                </Row>
            </Col>
        </Row>
    )
}
