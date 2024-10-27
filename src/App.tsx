import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Box, createTheme, CssBaseline, ThemeProvider, Toolbar } from '@mui/material';
import HomePage from './pages/HomePage';
import PostPage from './pages/PostPage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
        <BrowserRouter>
          <Navbar />
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/post/:id' element={<PostPage />} />
              <Route path='/about' element={<AboutPage />} />
            </Routes>
          </Box>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
