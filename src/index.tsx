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



// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// // there is an extra semicolon in this file so until this is fixed I switched to cdn (added in index.html)
// // https://github.com/Semantic-Org/Semantic-UI-CSS
// // import "semantic-ui-css/semantic.min.css";
// import { createGlobalStyle } from "styled-components";
// import { ReduxProvider } from "./redux";
// import { DeviceView } from "./Views/DeviceView";
// import { Home } from "./Views/Home";

// if (process.env.NODE_ENV === "development") {
//   const { worker } = require("./@mocks/browser");
//   worker.start();
// }

// const GlobalStyle = createGlobalStyle`
//   body {
//     /* background: #F5F6FB; */
//     box-sizing: border-box;
//    }
// `;

// const App = () => {
//   return (
//     <div className="body-wrapper">
//       {/* <ThemeProvider
//         theme={{
//           fontFamily: "sans-serif",
//           background: "#1e1e2f",
//           color: "#525f7f",
//           // background: "#325AF4",
//           // color: "#fff",
//         }}
//       > */}
//       <GlobalStyle />
//       <BrowserRouter>
//         <ReduxProvider>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/:deviceId" element={<DeviceView />} />
//           </Routes>
//         </ReduxProvider>
//       </BrowserRouter>
//       {/* </ThemeProvider> */}
//     </div>
//   );
// };
// ReactDOM.render(<App />, document.getElementById("root"));