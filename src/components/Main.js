import React, { Component } from "react";
import { Pane,Heading } from "evergreen-ui";
import PostContainer from "./PostContainer"


class Main extends Component {
    render(){
        return (
            <Pane display="flex">
                <Pane width="60%">
                    <Heading marginTop={20} borderBottom="solid 1px" >News</Heading>
                    <PostContainer/>
                </Pane>
                <Pane width="40%">
                    <Heading marginTop={20} marginLeft={5} borderBottom="solid 1px">Hot</Heading>
                    <PostContainer/>
                </Pane>
            </Pane>    
        )
    }
}


export default Main;
