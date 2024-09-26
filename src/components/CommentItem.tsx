import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  ListItem,
  ListItemText,
  IconButton,
  Link,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { useAppDispatch } from '../redux/hooks';

import { deleteComment } from '../redux/commentsSlice';

import { Comment } from '@/types';

interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <ListItem
      alignItems="flex-start"
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>{comment.user.username.charAt(0).toUpperCase()}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Link component={RouterLink} to={`/comments/${comment.id}`}>
            {comment.user.username}
          </Link>
        }
        secondary={comment.body}
      />
    </ListItem>
  );
};

export default CommentItem;
