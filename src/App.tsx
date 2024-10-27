import { Route, Router, Routes } from 'react-router-dom';
import './App.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0052cc',
    },
    secondary: {
      main: '#edf2ff',
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/post/:id' element={<PostPage />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  )
}

export default App
