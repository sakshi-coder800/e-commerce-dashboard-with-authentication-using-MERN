import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout';
import AllProducts from './pages/AllProducts';
function App() {
  return (
<>


<BrowserRouter>
<Routes>
<Route element={<AllProducts/>} path='/' />
{/* <Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' />
<Route element={<AllProducts/>} path='/' /> */}
</Routes>
</BrowserRouter>
</>
    );
}

export default App;
