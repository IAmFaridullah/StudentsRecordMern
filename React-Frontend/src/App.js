import {useReducer, useState, useEffect} from 'react';

import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import StudentsRecord from './components/StudentsRecord';
import CreateStudent from './components/CreateStudent';
import UpdateStudent from './components/UpdateStudent';
import Header from './components/Header';
import Spinner from './Modals/spinner';
import Backdrop from './Modals/Backdrop';


import studentContext from './context/studentsContext';
import reducer from './context/reducer';



function App() {
  const [initialState, ] = useState({ 
          students : [],
          update : false,
          searchResult : [],
          isSearched : false
      });
  const [ isLoading, setIsLoading ] = useState(true);
  const [state , dispatch] = useReducer(reducer, initialState);

 useEffect(() => {
      axios.get('http://localhost:5000/')
           .then(response => {
             dispatch({
              type : 'SET_STUDENTS',
              payload : response.data.students
            })
            setIsLoading(false);
           })
           .catch(err => {
             console.log(err)
           })
 }, [state.update])



  return (
    <>
    <studentContext.Provider value={[state, dispatch, setIsLoading]}>
    <BrowserRouter>
    {isLoading && <Spinner />}
    {isLoading && <Backdrop />}
    <Header/>
      <Switch>
        <Route path="/" exact>
          <StudentsRecord/>
        </Route>
        <Route path="/CreateStudent">
          <CreateStudent />
        </Route>
        <Route path="/UpdateStudent/:id">
          <UpdateStudent />
        </Route>
      </Switch>
    </BrowserRouter>
    </studentContext.Provider>
    </>
  )
}

export default App;
