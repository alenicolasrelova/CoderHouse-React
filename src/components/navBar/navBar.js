
import { Nav } from "react-bootstrap";
import React from "react";
import "./navBar.css";

export const NavBarrr = () => {
    return (
        <div className="navComponent">
            <Nav  justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Sobre Mi</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Contacto</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        No disponible
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}


export default NavBarrr;