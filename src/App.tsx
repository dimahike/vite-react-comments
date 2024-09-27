import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import CommentPage from './pages/CommentPage';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router basename="/vite-react-comments/">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/comments/:id" element={<CommentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
