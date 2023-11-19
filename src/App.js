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
import { useEffect } from 'react';

function App() {

  const [logged, setLogged] = useState(true); //State to keep track of whether user is logged in. This will later be replaced with proper authentication. 
  const [users, setUsers] = useState([{id: Date.now() - 10,
                                        email: "anniedison90@gmail.com",
                                      password: "sfjgjgtltjgu789fh",
                                    name: "Annie Edison",
                                  date: Date(),
                                workouts: 0},
                                {id: Date.now() - 80,
                                email: "coolabedfilms@gmail.com",
                              password: "tthysshf$35^hg8",
                            name: "Abed Nadir",
                          date: Date(),
                        workouts: 0}]) //State to keep track of all the registerd users. This will be properly modified to work with MongoDB later. 

    const [currUser, setCurrUser] = useState(users[0]) //State to keep track of user currently logged in. This will be properly modified to work with MongoDB later. 
  

    useEffect(() => {
      const data = window.localStorage.getItem('logged')
      console.log("Look" + data)

      if (data !== null) {
        setLogged(JSON.parse(data))
      }
    }, [])

    useEffect(() => {
      window.localStorage.setItem('logged', JSON.stringify(logged));
      console.log(window.localStorage.getItem('logged'))
    }, [logged]);




  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ProfilePage logged={logged} setLogged={setLogged} user={currUser}/>} />
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
