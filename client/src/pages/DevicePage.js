import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

const DevicePage = () => {
    const device = {
        id: 1,
        name: 'IPhone 10',
        price: 25000,
        rating: 5,
        img: 'https://main-cdn.sbermegamarket.ru/hlr-system/1691563/100023348274b0.jpg'
    }
    const description = [
        {id:1, title: "Оперативная память", description: "5 гб"},
        {id:1, title: "Камера", description: "12 vg"},
        {id:1, title: "Процессор", description: "Пентиум 2022"},
        {id:1, title: "Количество ядер", description: "2"},
        {id:1, title: "Аккумулятор", description: "5000 mah"},
    ]

    return (
        <Container className={"mt-3"}>
            <Row>

                <Col md={4}>
                    <Image width={300} height={300} src={device.img}/>
                </Col>
                <Col md={4}>
                    <Row className={"d-flex flex-column align-items-center"}>
                        <h2>{device.name}</h2>
                        <div>
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className={"d-flex flex-column align-items-center justify-content-around"}
                        style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>От {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className={"d-flex flex-column m-3"}>
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 && "lightgray", padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;