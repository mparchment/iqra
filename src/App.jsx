import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          <Route path="/iqra" element={<Landing />} />
          <Route path="/iqra/sign-in" element={<SignIn />} />
          <Route path="/iqra/sign-up" element={<SignUp />} />
          <Route path="/iqra/listening" element={<Listening />} />
          <Route path="/iqra/dashboard" element={<Dashboard />} />
          <Route path="/iqra/stories" element={<Stories />} />
          <Route path="/iqra/review" element={<Review />} />
          <Route path="/iqra/sarf" element={<Sarf />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </UserProvider>
      </Router>
  );
}

export default App;
