// import { fireEvent, render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from './NavBar';

// const mockToggleDarkMode = jest.fn();

// const renderNavBar = () => render(
//   <Router>
//     <NavBar 
//       companyName="Test Company" 
//       subpages={["Home", "About", "Contact"]} 
//       userSettings={[
//         {
//             id: 'u101',
//             isLoggedIn: true,
//             title: 'User',
//             links: {
//                 id: ['u1011', 'u1012', 'u1013', 'u1014'],
//                 headline: ['Profile', 'Account', 'Dashboard', 'Logout'],
//                 href: ['/profile', '/account', '/dashboard', '/logout'],
//             }
          
//         },
//         {
//             id: 'u102',
//             isLoggedIn: false,
//             title: 'User',
//             links: {
//                 id: ['u1021'],
//                 headline: ['Login form'],
//                 href: ['/login'],
//             }     
//         },       
//       ]}
//       isLoggedIn={true}
//     />
//   </Router>
// );

// test('renders company name', () => {
//   renderNavBar();
//   expect(screen.getAllByText('Test Company')[0]).toBeInTheDocument();
// });

// test('renders subpages', () => {
//   renderNavBar();
//   expect(screen.getByText('Home')).toBeInTheDocument();
//   expect(screen.getByText('About')).toBeInTheDocument();
//   expect(screen.getByText('Contact')).toBeInTheDocument();
// });

// test('renders user settings', () => {
//   renderNavBar();
//   fireEvent.click(screen.getByTestId('open-settings'));
//   expect(screen.getByText('Setting1')).toBeInTheDocument();
//   expect(screen.getByText('Setting2')).toBeInTheDocument();
// });

// // test('toggles dark mode', () => {
// //   renderNavBar();
// //   fireEvent.click(screen.getByTestId('toggle-dark-mode'));
// //   expect(mockToggleDarkMode).toHaveBeenCalled();
// // });

export { };
