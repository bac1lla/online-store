import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {DEVICE_ROUTE} from "../utils/consts";

const DeviceItem = ({device}) => {
    const navigate = useNavigate()
    return (
        <Col md={4} className={"mt-3"}>
            <Card
                style={{width: 150, cursor: "pointer"}}
                border={"light"}
                onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
            >
                <Image src={device.img} width={150} height={150} />
                <div className={"text-black-50 mt-1 d-flex justify-content-between align-items-center flex-wrap"}>
                    <div>Damn</div>
                    <div>
                        <div>{device.rating}</div>
                    </div>
                </div>
                <div>{device.name}</div>

            </Card>
        </Col>
    );
};

export default DeviceItem;