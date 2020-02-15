import React from "react";
import { Comment, Icon, Tooltip, Avatar } from "antd";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: "Test ja",
      added: "11.11.2011",
      comment: "Najlepsia stranka na svete",
      likes: 0,
      dislikes: 0,
      action: null,
      category: "Test kat"
    };
  }

  like = () => {
    const newLikes = this.state.likes + 1;
    const { dislikes } = this.state;

    this.setState({
      likes: newLikes,
      dislikes: dislikes,
      action: "liked"
    });
  };

  dislike = () => {
    const { likes } = this.state;
    const newDislikes = this.state.dislikes + 1;

    this.setState({
      likes: likes,
      dislikes: newDislikes,
      action: "disliked"
    });
  };

  render() {
    const {
      autor,
      added,
      comment,
      likes,
      dislikes,
      action,
      category
    } = this.props;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === "liked" ? "filled" : "outlined"}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === "disliked" ? "filled" : "outlined"}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
      </span>,
      <span>{category}</span>
    ];

    return (
      <Comment
        actions={actions}
        author={<a>{autor}</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt={autor}
          />
        }
        content={<p>{comment}</p>}
        datetime={added}
      />
    );
  }
}

export default Review;
