import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { addComment, setBody, setUsername } from '../redux/commentsSlice';

const AddCommentForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [error, setError] = useState('');

  const username = useAppSelector((state) => state.comments.username);
  const text = useAppSelector((state) => state.comments.body);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setBody(e.target.value));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUsername(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (username.trim() === '' || text.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    setError('');

    const newComment = {
      id: Date.now(),
      body: text,
      postId: 1,
      user: {
        id: Date.now(),
        username: username,
      },
    };

    dispatch(addComment(newComment));
    dispatch(setUsername(''));
    dispatch(setBody(''));
  };

  return (
    <Box component="form" onSubmit={handleSubmit} mb={4}>
      <Typography variant="h6" gutterBottom>
        Add a comment
      </Typography>
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}
      <TextField
        label="Your name"
        fullWidth
        value={username}
        onChange={handleUsernameChange}
        variant="outlined"
        margin="normal"
        required
      />
      <TextField
        label="Your comment"
        multiline
        fullWidth
        value={text}
        onChange={handleTextChange}
        variant="outlined"
        margin="normal"
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Add a comment
      </Button>
    </Box>
  );
};

export default AddCommentForm;
