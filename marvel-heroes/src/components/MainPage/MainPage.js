import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SearchBar from "./SearchBar/SearchBar";
import Header from "../Header/Header";
import Loader from "..Loader/Loader"
import ".MainPage.css"

class MainPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroes:[],
            myTeam:[],
            isLoading:true
        }
    }

    // searchHeroes = (text) => {
    //     heroService.searchCharacters(text)
    //         .then(response => this.setState({ heroes: response }))
    // }

    render() {
        if (this.state.isLoading) {
            return <Loader />
        }
        return (
            <>
                <Header />
                {this.state.isLoading
                    ? <Loader />
                    : <Container fluid>
                        <Row>
                            <Col lg={9}>
                                <SearchBar searchHeroes={this.searchHeroes} />
                                {/* <HeroCards heroes={this.state.heroes} addToMyTeam={this.addToMyTeam} /> */}
                            </Col>
                            <Col lg={3} className={"margin"}>
                                <h4 className={`${"boldItalic"} text-center`}>My Team of Heroes</h4>
                                {/* <MyTeam myTeam={this.state.myTeam} removeFromMyTeam={this.removeFromMyTeam} /> */}
                            </Col>
                        </Row>
                    </Container>
                }
            </>
        )
    }
}
export default MainPage;