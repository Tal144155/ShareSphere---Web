import './EnterPage.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Login';
import App from './App';


function EnterPage() {
  return (
    <div id="login-grid" className="container text-center">
      <div className="row">
        <div className="col" id='name-slogen'>
            <div id="app-name">ShareSphere</div>
            <div id='slogen'>Connect with friends and the world<br/> around you on ShareSphere</div>
        </div>
        <BrowserRouter>
        <Routes>
            <Route path='/App' element={<App/>}></Route>
            <Route path='/' element={<Login/>}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default EnterPage;
