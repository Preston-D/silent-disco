import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Login from './home/Login';
import Register from './home/Register';
import NotFound from './home/NotFound';

export default function AppRoutes () {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
  );
}
