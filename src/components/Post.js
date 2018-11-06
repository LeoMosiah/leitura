import React, { Component } from "react";
import Paragraph from "evergreen-ui/esm/typography/src/Paragraph";
import Pane from "evergreen-ui/esm/layers/src/Pane";
import Heading from "evergreen-ui/esm/typography/src/Heading";
import {IconButton} from "evergreen-ui";

class Post extends Component {
    render(){
        return(
            <Pane border="default"
                  cursor="pointer"
                  elevation={2}
                  padding={10}>
              <Pane onClick={() => alert('Works just like expected')}>
                <Heading>Titulo do Post</Heading>
                <Paragraph>Conteudo do posto que tem o titulo em cima disso</Paragraph>
              </Pane>
                <Pane display="flex">
                    <IconButton appearance="minimal" icon="notifications" iconSize={18} />
                    <IconButton appearance="minimal" icon="annotation" iconSize={18} />
                </Pane>
            </Pane>
        )
    }
}

export default Post;
