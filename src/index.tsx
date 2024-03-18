import { Global } from '@emotion/react'; // Import jsx and Global from Emotion
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { globalStyles } from './globalStyles';
import { ReduxProvider } from "./redux";
import reportWebVitals from './reportWebVitals';
import theme from './theme/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            {/* Use Global component from Emotion */}
            <Global styles={globalStyles} />
            <ReduxProvider>
                <App />
            </ReduxProvider>
            
        </ThemeProvider>
    </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
