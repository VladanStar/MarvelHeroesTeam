import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "./HeroCard.css";
import { Link } from 'react-router-dom';

const HeroCard = () => {
    return (  

        <Col lg={4} md={6} sm={12} className={"crdMargin"}>
        <Card className={"cardAbs"}>
            <Card.Img variant="top"  />
            <Card.Title className={"text-center abs"}>{}</Card.Title>
            <Card.Body className={"back"}>

                <Col className="text-center">
                    <Link ><Button variant="danger" className={"btnMargin"}>Info</Button></Link>
                    <Button variant="danger" onClick={() => { }}>Add</Button>
                </Col>
            </Card.Body>
        </Card>
        </Col>
    );
}
 
export default HeroCard;
