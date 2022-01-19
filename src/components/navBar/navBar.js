
import { Nav } from "react-bootstrap";
import React from "react";
import "./navBar.css";

export const NavBarrr = () => {
    return (
        <div className="navComponent">
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav>
                    <img className="navBarImg" src="./img/logo192.png" alt="" width="55" height="45"></img>
                </Nav>
                <Nav.Item className="navItem">
                    <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="link-1">Nosotros</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="link-2">Contacto</Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                    <Nav.Link eventKey="disabled" disabled>
                        Proximamente WhatsApp
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}


export default NavBarrr;