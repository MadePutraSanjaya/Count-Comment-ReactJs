import React from "react";
import { IComment } from "../data/comment";

type CommentCounterProps = {
  comments: IComment[];
};

const getTotalComments = (comments: IComment[]): number => {
  let total = comments.length;

  comments.forEach((comment) => {
    if (comment.replies) {
      total += getTotalComments(comment.replies);
    }
  });

  return total;
};

const CommentCounter: React.FC<CommentCounterProps> = ({ comments }) => {
  const totalComments = getTotalComments(comments);

  return (
    <div className="m-12">
      <h1>Total Komentar: {totalComments}</h1>
    </div>
  );
};

export default CommentCounter;
