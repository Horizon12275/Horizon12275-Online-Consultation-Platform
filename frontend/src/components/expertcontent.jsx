import { Row, Col, Avatar, Typography, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text, Link } = Typography;

const ExpertContent = () => {
    return (
        <Row justify="center" style={{ width: '60%' }}>
            <Avatar
                size={200}
                icon={<UserOutlined />}
                style={{ marginRight: "40px" }}
            />
            <Col style={{ width: '60%' }}>
                <Title>Expert Name</Title>
                <Paragraph>Details : 213j123oj123jijisjdfiajf9iasjfioasdjfasodfjasoidjfsaiodjfaiosdjfasjdfaj0fj2j12jojdfoisajdfiojaijs213j123oj123jijisjdfiajf9iasjfioasdjfasodfjasoidjfsaiodjfaiosdjfasjdfaj0fj2j12jojdfoisajdfiojaijs213j123oj123jijisjdfiajf9iasjfioasdjfasodfjasoidjfsaiodjfaiosdjfasjdfaj0fj2j12jojdfoisajdfiojaijs213j123oj123jijisjdfiajf9iasjfioasdjfasodfjasoidjfsaiodjfaiosdjfasjdfaj0fj2j12jojdfoisajdfiojaijs
                </Paragraph>
                <Row>
                    <span style={{ marginRight: "20px" }}>Categories:</span>
                    <Tag>
                        <a href="/">Operating System</a>
                    </Tag>
                    <Tag>
                        <a href="/">System Security</a>
                    </Tag>
                </Row>
            </Col>
        </Row>
    );
};

export default ExpertContent;
