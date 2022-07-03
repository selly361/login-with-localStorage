import './App.scss';
import LoginPage from './Components/LoginPage';
import Home from './Components/Home'
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path={'/'}  element={<LoginPage />} />
        <Route path={'/home'} element={<Home />} />
      </Routes>
      
            
    </div>
  );
}

export default App;
