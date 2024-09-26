import { useParams, Link as RouterLink } from 'react-router-dom';
import { Container, Typography, Link, Box } from '@mui/material';

import { useAppSelector } from '../redux/hooks';

const CommentPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const commentId = parseInt(id || '', 10);
  const comment = useAppSelector((state) =>
    state.comments.comments.find((c) => c.id === commentId),
  );

  if (!comment) {
    return (
      <Container maxWidth="md">
        <Box mt={4}>
          <Typography variant="h6">Comment not found</Typography>
          <Link component={RouterLink} to="/">
            Back to the list of comments
          </Link>
        </Box>
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Box mt={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Comment from {comment.user.username}
        </Typography>
        <Typography variant="body1" paragraph>
          {comment.body}
        </Typography>
        <Link component={RouterLink} to="/">
          Back to the list of comments
        </Link>
      </Box>
    </Container>
  );
};

export default CommentPage;
