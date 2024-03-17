import { css } from '@emotion/react';

export const globalStyles = css`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
            'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .active-link {
        color: #f50057; /* Change this to the color you want for the active link */
        font-weight: bold;
    }

    // Add any other global styles here...
`;
