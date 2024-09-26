import React from 'react';
import { Box, Container, Typography } from '@mui/material';

import AddCommentForm from '../components/AddCommentForm';
import CommentsList from '../components/CommentsList';

import Grid from '@mui/material/Grid2';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          List of comments
        </Typography>
        <Grid container spacing={4}>
          <Grid size={12}>
            <AddCommentForm />
          </Grid>
          <Grid size={12}>
            <CommentsList />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HomePage;
