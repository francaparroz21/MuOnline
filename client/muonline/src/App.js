import './App.css';
import { BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/Home"
import SignUp from "./components/SignUp/SignUp"
import LogIn from "./components/LogIn/LogIn"
import Footer from "./components/Footer/Footer"
import Download from "./components/Download/Download"
import Info from './components/Info/Info';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/login' element={<LogIn/>}></Route>
          <Route path='/rankings' element={"pete"}></Route>
          <Route path='/download' element={<Download/>}></Route>
          <Route path='/info' element={<Info/>}></Route>
          <Route path='/shop' element={<Shop/>}></Route>
          <Route path='/cart' element={<Shop/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;