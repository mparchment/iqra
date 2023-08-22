import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Landing from './pages/Landing';
import Listening from './pages/Drills/Listening';
import Stories from './pages/Stories';
import Review from './pages/Review';
import Sarf from './pages/Drills/Sarf';

import GlobalStyle from './globalStyles';
import { UserProvider } from './contexts/UserProvider';

function App() {
  return (
      <Router>
        <GlobalStyle />
        <UserProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/listening" element={<Listening />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/review" element={<Review />} />
          <Route path="/sarf" element={<Sarf />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </UserProvider>
      </Router>
  );
}

export default App;
