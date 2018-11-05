import React, { Component } from "react";
import { Pane,Heading } from "evergreen-ui";


class Main extends Component {
    render(){
        return (
            <Pane display="flex">
                <Pane width="60%">
                    <Heading>News</Heading>
                </Pane>
                <Pane width="40%">
                    <Heading>Hot</Heading>
                </Pane>
            </Pane>    
        )
    }
}


export default Main;
