import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './componets/ProfilePage';
import History from './componets/History';
import ExcerciseList from './componets/ExcerciseList';
import Login from './componets/Login';
import SignUp from './componets/SignUp';
import CreateRoutine from './componets/CreateRoutine';
import EditRoutine from './componets/EditRoutine';
import { useState } from 'react';

function App() {
  const [logged, setLogged] = useState(true); //State to keep track of whether user is logged in. This will later be replaced with proper authentication. 

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ProfilePage logged={logged} setLogged={setLogged}/>} />
          <Route exact path='/history' element={<History/>} />
          <Route exact path='/excercises' element={<ExcerciseList/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/history/create-routine' element={<CreateRoutine/>} />
          <Route exact path='/history/edit-routine/:id' element={<EditRoutine/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
