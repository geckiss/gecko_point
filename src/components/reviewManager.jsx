import React, { Component } from "react";
import { Button } from "antd";
import Review from "./review.jsx";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.addNewReview = this.addNewReview.bind(this);
    this.state = {
      reviewList: [],
      reviewCount: 0
    };
  }

  addNewReview(autor, added, comment, likes, dislikes, action, category) {
    var { reviewList, reviewCount } = this.state;

    const newReview = (
      <Review
        key={reviewCount}
        autor={autor}
        added={added}
        comment={comment}
        likes={likes}
        dislikes={dislikes}
        action={action}
        category={category}
      />
    );

    reviewList[reviewCount++] = newReview;

    this.setState({
      reviewList: reviewList,
      reviewCount: reviewCount
    });
  }

  render() {
    const finalReviewList = this.state.reviewList.map(rev => <div>{rev}</div>);

    return (
      <div id="reviews-container">
        <Button
          onClick={() =>
            this.addNewReview(
              "Ja",
              "Dneska",
              "Commentar",
              2000,
              20,
              null,
              "Testovanie"
            )
          }
        >
          Pridaj review
        </Button>
        {finalReviewList}
      </div>
    );
  }
}

export default Reviews;
