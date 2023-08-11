import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Listening from './pages/Drills/Listening';

import GlobalStyle from './globalStyles';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
    <UserProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="iqra-client/" element={<Landing />} />
          <Route path="iqra-client/sign-in" element={<SignIn />} />
          <Route path="iqra-client/sign-up" element={<SignUp />} />
          <Route path="iqra-client/listening" element={<Listening />} />
          <Route path="iqra-client/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
