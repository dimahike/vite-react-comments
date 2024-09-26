import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const NotFoundPage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Box sx={{ mb: 4 }}>
        <ErrorOutlineIcon color="error" sx={{ fontSize: 80 }} />
      </Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Page not found
      </Typography>
      <Typography variant="body1">
        Unfortunately, the page you requested does not exist.
      </Typography>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        Return to home page
      </Button>
    </Container>
  );
};

export default NotFoundPage;
