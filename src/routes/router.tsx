import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Plans } from '../pages/Plans';
import { AuthPlaceholder } from '../pages/AuthPlaceholder';
import { useLanguage } from '../context/LanguageContext';

function LoginPage() {
  const { messages } = useLanguage();
  return <AuthPlaceholder title={messages.auth.login} />;
}

function RegisterPage() {
  const { messages } = useLanguage();
  return <AuthPlaceholder title={messages.auth.register} />;
}

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/planos', element: <Plans /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/registro', element: <RegisterPage /> },
]);
