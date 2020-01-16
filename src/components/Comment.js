import React from "react";
import PropTypes from "prop-types";

class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.string.isRequired
  };
  render() {
    return (
      <div className="comments">
        <p>{this.props.comment}</p>
      </div>
    );
  }
}

export default Comment;
