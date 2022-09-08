import React, {useContext} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {Button, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{color: 'white'}} to={SHOP_ROUTE}>Купи Мобилу</Link>
                {user.isAuth ?
                    <Nav className="me-lg-auto" style={{color: 'white'}}>
                        <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Админка</Button>
                        <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Выйти</Button>
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