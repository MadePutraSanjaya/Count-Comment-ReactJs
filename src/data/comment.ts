export type IComment = {
  commentId: number;
  commentContent: string;
  replies?: IComment[];
};

export const comments: IComment[] = [
  {
    commentId: 1,
    commentContent: "Hai",
    replies: [
      {
        commentId: 11,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 111,
            commentContent: "Haai juga hai jugaa",
          },
          {
            commentId: 112,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
      {
        commentId: 12,
        commentContent: "Hai juga",
        replies: [
          {
            commentId: 121,
            commentContent: "Haai juga hai jugaa",
          },
        ],
      },
    ],
  },
  {
    commentId: 2,
    commentContent: "Halooo",
  },
];

// display to console
const logComments = (comments: IComment[], level = 0) => {
  comments.forEach((comments) => {
    const indent = "  ".repeat(level);
    console.log(
      indent +
        `Comment ID: ${comments.commentId}, Content: ${comments.commentContent}`
    );
    if (comments.replies) {
      logComments(comments.replies, level + 1);
    }
  });
}
logComments(comments);
