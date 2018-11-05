import React, { Component } from "react";
import { Pane, Button, SearchInput, Paragraph, Link } from "evergreen-ui";

class Header extends Component {
  render() {
    return (
      <Pane>  
      <Pane  display="flex">
        <Pane flex={1}>
        <Paragraph marginTop={5} size={500} color="dark">
            Leitura
        </Paragraph>
        </Pane>
        <Pane>
          <SearchInput placeholder="Search Post" />
          <Button
            marginRight={6}
            marginBottom={4}
            appearance="minimal"
            intent="success"
          >
            Sign in
          </Button>
          <Button
            marginRight={6}
            marginBottom={4}
            appearance="minimal"
            intent="success"
          >
            Sign up
          </Button>
        </Pane>
      </Pane>
        <Pane display="inline-flex" width="100%" className="navigation-bar__categories">
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Redux</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">React</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">React-Native</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">React-Redux</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Components</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
            <Link href="#" marginRight={12} color="neutral" className="navigation-bar__category">Category</Link>
        </Pane>    
      </Pane>
    );
  }
}

export default Header;
