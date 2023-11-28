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
import CreateExcercise from './componets/CreateExcercise';
import EditExcercise from './componets/EditExcercise';

function App() {

  const testDate = new Date(Date.now())
  const testDateTwo = String((testDate.getMonth() + 1)) + "/" + String((testDate.getDate())) + "/" + String(testDate.getFullYear())
  
  var testWorkouts = [{id: 0,
                        title: "Test Workout",
                      date: testDateTwo,
                    excercises: [{name: "Bicep Curls",
                                  sets: 2,
                                  reps: 10}, 
                                  {name: "Bench Press",
                                    sets: 1,
                                    reps: 25},
                                  {name: "Pushups",
                                    sets: 6,
                                    reps: 5}]},
                        {id: 1,
                          title: "Another Test Workout",
                        date: testDateTwo,
                      excercises: [{name: "Pushups",
                                    sets: 10,
                                    reps: 10},
                                    {name: "Bench Press",
                                      sets: 2,
                                      reps: 15}]},
                        {id: 2,
                          title: "Yet Another Test Workout",
                        date: testDateTwo,
                      excercises: [{name: "Bicep Curls",
                                    sets: 3,
                                  reps: 20}]}]


  const [logged, setLogged] = useState(true); //State to keep track of whether user is logged in. This will later be replaced with proper authentication. 
  const [users, setUsers] = useState([{id: Date.now() - 10,
                                        email: "anniedison90@gmail.com",
                                      password: "sfjgjgtltjgu789fh",
                                    name: "Annie Edison",
                                  date: Date(),
                                workouts: testWorkouts},
                                {id: Date.now() - 80,
                                email: "coolabedfilms@gmail.com",
                              password: "tthysshf$35^hg8",
                            name: "Abed Nadir",
                          date: Date(),
                        workouts: testWorkouts}]) //State to keep track of all the registerd users. This will be properly modified to work with MongoDB later. 

    const [currUser, setCurrUser] = useState(users[0]) //State to keep track of user currently logged in. This will be properly modified to work with MongoDB later. 
    
    const [excercises, setExcercises] = useState([{id: Date.now() + 100,
                                                  title: "Pushups",
                                                  bodyPart: "Triceps, Chest",
                                                  equipment: "Bodyweight",
                                                  image: "https://www.athletico.com/wp-content/uploads/2020/04/stay-home-fitness-challenge-featured.jpg"},
                                                  {id: Date.now() - 9000,
                                                    title: "Bicep Curls",
                                                    bodyPart: "Biceps",
                                                    equipment: "Barbells",
                                                    image: "https://experiencelife.lifetime.life/wp-content/uploads/2021/02/Bicep-Curls.jpg"},
                                                  {id: Date.now() + 800,
                                                    title: "Bench Press",
                                                    bodyPart: "Chest",
                                                    equipment: "Barbell, Bench",
                                                    image: "https://blog.nasm.org/hubfs/bench-press-elbow-pain.jpg"}])

    const [editExcerciseId, setEditExcerciseID] = useState(0); //Keeps track of the excercise item to be edited.
    const [editRoutineID, setEditRoutineID] = useState(0);

    const [routines, setRoutines] = useState(currUser.workouts)
    //Ignore for now
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
    //Ignore for now 




  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/' element={<ProfilePage logged={logged} setLogged={setLogged} user={currUser}/>} />
          <Route exact path='/history' element={<History user={currUser} logged={logged} onAddRoutine={setRoutines} listRoutines={routines}/>} />
          <Route exact path='/excercises' element={<ExcerciseList excercises={excercises} logged={logged} onAddExcercise={setExcercises} editID={setEditExcerciseID}/>} />
          <Route exact path='/login' element={<Login/>} />
          <Route exact path='/signup' element={<SignUp/>} />
          <Route exact path='/history/create-routine' element={<CreateRoutine/>} />
          <Route exact path='/history/edit-routine' element={<EditRoutine/>} />
          <Route exact path='excercises/create-excercise' element={<CreateExcercise onAddExcercise={setExcercises} logged={logged}/>} />
          <Route exact path='excercises/edit-excercise' element={<EditExcercise onAddEditExercise={setExcercises} logged={logged} id={editExcerciseId}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
