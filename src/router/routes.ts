import LoginPage from '../components/pages/LoginPage';
import MainPage from '../components/pages/MainPage';

const routes = [
  { path: '*', element: MainPage },
  { path: 'login', element: LoginPage },
];

export { routes };
