import React from 'react'
import { BasicLayout } from '../layouts'
import ConsultationHistoryList from '../components/consultation_history_list'
import RateButton from '../components/rate'
import CommentBox from '../components/comment_box'
import { Layout } from 'antd'

const { Sider, Content } = Layout

export default function ConsultationPage() {
    return (
        <BasicLayout>
            <Layout style={{ position: "relative" }}>
                <Sider width={"20%"}
                    style={{
                        background: "#fff",
                        height: "100vh",
                        position: "sticky",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        zIndex: 1000,
                    }}>
                    <ConsultationHistoryList />
                    <RateButton />
                    <CommentBox />
                </Sider>
                <Layout>
                    <Content style={{ minHeight: "100vh" }}>
                    </Content>
                </Layout>
            </Layout>
        </BasicLayout>
    )
}
