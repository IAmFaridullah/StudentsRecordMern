import React, {useState,useContext} from 'react';
import './CreateStudent.css';
import axios from 'axios';

import studentsContext from '../context/studentsContext';
import { useHistory } from 'react-router-dom';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function CreateStudent() {
    const [, dispatch, setIsLoading] = useContext(studentsContext);
    const [student, setStudent] = useState({
        name : "",
        fname : "",
        email : "",
        dept : ""
    });

    const history = useHistory();

    const onChangeHandler = (event) => {
        setStudent({...student, [event.target.name] : event.target.value})
    }

    const onsubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/postNewStudent', student)
        .then(response => {
            dispatch({
                type : 'UPDATE_STATE'
            })
        })
        .catch(err => {
            console.log(err)
        })
        history.push("/");
        setIsLoading(true);
    }

    return (
        <>
        <div className="form-container">
            <div className="form-info">
            <PersonAddIcon style={{fontSize: "50px"}}/>
            <h4 style={{textAlign:"center", marginTop: "5px", fontWeight: "bold" }}>CREATE STUDENT</h4>
            </div>
        <form noValidate autoComplete="on" onSubmit={onsubmitHandler}>
            <TextField id="outlined-basic" onChange={onChangeHandler} name="name" style={{marginBottom: "1.5rem"}} size="small" label="Student Name" variant="outlined" />
            <TextField id="outlined-basic" onChange={onChangeHandler} name="fname" style={{marginBottom: "1.5rem"}} size="small" label="Father Name" variant="outlined" />
            <TextField id="outlined-basic" onChange={onChangeHandler} name="email" style={{marginBottom: "1.5rem"}} size="small" label="Email" variant="outlined" />
            <TextField id="outlined-basic" onChange={onChangeHandler} name="dept" size="small" label="Department" variant="outlined" />
            <Button type="submit" style={{marginTop: "1.5rem"}} variant="contained" color="primary">
                 CREATE STUDENT
            </Button>
        </form>
        </div>
        </>
    )
}

export default CreateStudent;
