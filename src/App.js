import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';
import Offers from './pages/Offers';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify'; // for error notification
import 'react-toastify/dist/ReactToastify.css'; // for error notification

function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
     <Route path = "/" element = {<Home/>} />
     <Route path='/profile' element = {<PrivateRoute/>}>
     <Route path = "/profile" element = {<Profile/>} />
     </Route>
     <Route path = "/sign-in" element = {<SignIn/>} />
     <Route path = "/sign-up" element = {<SignUp/>} />
     <Route path = "/offers" element = {<Offers/>} />
     <Route path = "/pass-word" element = {<ForgotPassword/>} />
     </Routes>
    </Router>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
    />
    </>
  );
}

export default App;
