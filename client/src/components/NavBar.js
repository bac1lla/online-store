import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{color: 'white'}} to={SHOP_ROUTE}>Купи Мобилу</Link>
                {user.isAuth ?
                    <Nav className="me-lg-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'}>Админка</Button>
                        <Button variant={'outline-light'}>Войти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
})

export default NavBar;