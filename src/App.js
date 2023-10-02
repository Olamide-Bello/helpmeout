import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import SignUp from './Components/SignUp/SignUp';
import ReadyPage from './Pages/ReadyPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/file/:id" element={<ReadyPage/>} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
