import { Row, Avatar, Col, Card } from "antd";
import React from "react";

export default function ConsultationHistoryCard() {
  return (
    <Card hoverable style={{ margin: "10px 0" }} bodyStyle={{ padding: 10 }}>
      <Row justify="space-between" align="middle">
        <Avatar
          shape="square"
          size={50}
          src={"/1.jpg"}
          style={{ borderRadius: "200px" }}
        />
        <Col style={{ width: "80%" }}>
          <Row justify="space-between">
            <Col>Consultation History</Col>
            <Col>2021-10-10</Col>
          </Row>
          <Row>
            <h2>网络安全教育</h2>
          </Row>
          <Row>该项目解决了网络安全教育</Row>
        </Col>
      </Row>
    </Card>
  );
}
