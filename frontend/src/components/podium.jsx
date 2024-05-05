import * as React from "react";
import { Row, Col } from 'antd';

function Podium() {
    return (
        <div>
            <Row style={{display: 'flex', alignItems: 'flex-end'}}>
                <Col span={8}>
                    <No_2/>
                </Col>
                <Col span={8}>
                    <No_1/>
                </Col>
                <Col span={8}>
                    <No_3/>
                </Col>
            </Row>
        </div>
    );
}

const imageUrl1 = "https://th.bing.com/th?id=OIP.ZkoPhpKfJwsvGmpm8RsragHaFp&w=286&h=218&c=8&rs=1&qlt=90&o=6&dpr=2.3&pid=3.1&rm=2";
const imageUrl2 = "https://th.bing.com/th?id=OIP.ZkoPhpKfJwsvGmpm8RsragHaFp&w=286&h=218&c=8&rs=1&qlt=90&o=6&dpr=2.3&pid=3.1&rm=2";
const imageUrl3 = "https://th.bing.com/th?id=OIP.ZkoPhpKfJwsvGmpm8RsragHaFp&w=286&h=218&c=8&rs=1&qlt=90&o=6&dpr=2.3&pid=3.1&rm=2";



const No_2 = () => {
    return (
        <div>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#AED6F1',
                        borderRadius: '50%',
                        backgroundImage: `url(${imageUrl1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div style={{width: '100px', height: '200px', backgroundColor: '#87CEFA'}}></div>
                </Col>
            </Row>
        </div>
    );
}

const No_1 = () => {
    return (
        <div>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#AED6F1',
                        borderRadius: '50%',
                        backgroundImage: `url(${imageUrl2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div style={{width: '100px', height: '250px', backgroundColor: '#6495ED'}}></div>
                </Col>
            </Row>
        </div>
    );
}

const No_3 = () => {
    return (
        <div>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div
                        style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#AED6F1',
                        borderRadius: '50%',
                        backgroundImage: `url(${imageUrl3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>
                </Col>
            </Row>
            <Row justify="center">
                <Col span={12} style={{textAlign: 'center'}}>
                    <div style={{width: '100px', height: '150px', backgroundColor: '#4169E1'}}></div>
                </Col>
            </Row>
        </div>
    );
}


export default Podium;