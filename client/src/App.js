import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './pages/AllProducts';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Footer from './components/Footer';
import Styles from './Styles/ComponentStyles.css'
import Login from './pages/Login';
function App() {
  return (
<>


<BrowserRouter>
<Header/>
<Routes>
<Route  path='/' element={<AllProducts/>} />
<Route  path='/signup' element={<SignUp/>} />
<Route  path='/login' element={<Login/>} />
{/* <Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' /> */}
</Routes>
<Footer/>
</BrowserRouter>
</>
    );
}

export default App;
