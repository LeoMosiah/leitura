import React, { Component } from "react";
import PropTypes from "prop-types";
import { Pane, Card } from "evergreen-ui";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <Pane background="tint1" elevation={3}>
        <Icon icon="filter" color="danger" marginRight={16} />
        <Icon icon="tick-circle" color="success" marginRight={16} />
        <Icon icon="warning-sign" color="warning" marginRight={16} />
        <Icon icon="info-sign" color="info" marginRight={16} />
        <Icon icon="edit" color="muted" marginRight={16} />
        <Icon icon="edit" color="selected" marginRight={16} />
        <Icon icon="edit" color="disabled" marginRight={16} />
      </Pane>
    );
  }
}

export default Post;
