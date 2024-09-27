export interface Comment {
  id: number;
  body: string;
  postId: number;
  user: {
    id: number;
    username: string;
  };
}

export interface CommentsState {
  username: string;
  body: string;
  comments: Comment[];
}
