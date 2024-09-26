import { List } from '@mui/material';

import CommentItem from './CommentItem';

import { useAppSelector } from '../redux/hooks';

const CommentsList: React.FC = () => {
  const { comments } = useAppSelector((state) => state.comments);

  return (
    <List>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </List>
  );
};

export default CommentsList;
