
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

export const ThemeContext = React.createContext({
    darkMode: false,
    toggleDarkMode: () => {},
});

const projectName = 'Colors App'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const theme = darkMode ? darkTheme : lightTheme;
  const toggleDarkMode = () => {
      setDarkMode(!darkMode);
  };

  return (
     <ThemeProvider theme={theme}>
            <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
                <Router>
                    <Box
                        display="flex"
                        flexDirection="column"
                        minHeight="100vh"
                    >
                        <NavBar
                            projectName={projectName}
                        />
                        <Box
                            flex="1"
                            style={{
                                backgroundColor:
                                    theme.palette.background.default,
                                color: theme.palette.text.primary,
                            }}
                        >
                            <Routes>
                                <Route path='*' element={<NotFound />}/>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </Box>
                        <Footer projectName={projectName} />
                    </Box>
                </Router>
            </ThemeContext.Provider>
        </ThemeProvider>
  );
}

export default App;
