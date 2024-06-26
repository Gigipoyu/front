import { BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Home from './page/home';
import Signin from "./page/signin";
import Signup from "./page/signup";
import Header from './components/Header';
import Footer from './components/Footer';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./page/create-post";
import Post from "./page/post";


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="/post/:post_id" element={<Post />}/>
          <Route path="*" element={<p>Error 404</p>} />
      </Routes>
      <Footer />
      <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
    </Router>
  
    </>
  );
}

export default App;
