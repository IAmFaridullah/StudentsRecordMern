import React, {useContext, useState} from 'react';
import './UpdateStudent.css';
import axios from 'axios';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {useParams, useHistory} from 'react-router-dom';
import studentsContext from '../context/studentsContext';


function UpdateStudent(props) {
    const history = useHistory();
    const [state, dispatch, setIsLoading] = useContext(studentsContext);
    const id = useParams().id;
    const student = state.students.find((student) => (
        student._id === id
    ))

    const [studentState, setStudentState] = useState({
            id : student._id,
            name : student.studentName,
            fname : student.studentFather,
            email : student.email,
            dept : student.department
    });

    const onChangeHandler = (event) => {
        setStudentState({
           ...studentState, [event.target.name] : event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
           axios.patch('http://localhost:5000/postUpdatedStudent', studentState)
                .then(response => {
                    dispatch({
                        type : 'UPDATE_STATE'
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        setIsLoading(true)
        history.push('/');
    }

    return (
        <>
        <div className="update- form-container">
            <div className="update-form-info">
            <h4 style={{ marginTop: "5px", fontWeight: "bold" }}>UPDATE STUDENT</h4>
            </div>
        <form noValidate autoComplete="on" onSubmit={onSubmitHandler}>
            <TextField id="outlined-basic"  name="name" onChange={onChangeHandler} defaultValue={studentState.name} style={{marginBottom: "1.5rem"}} size="small" label="Student Name" variant="outlined" />
            <TextField id="outlined-basic"  name="fname" onChange={onChangeHandler} defaultValue={studentState.fname} style={{marginBottom: "1.5rem"}} size="small" label="Father Name" variant="outlined" />
            <TextField id="outlined-basic"  name="email" onChange={onChangeHandler} defaultValue={studentState.email} style={{marginBottom: "1.5rem"}} size="small" label="Email" variant="outlined" />
            <TextField id="outlined-basic"  name="dept" onChange={onChangeHandler} defaultValue={studentState.dept} size="small" label="Department" variant="outlined" />
            <Button type="submit" style={{marginTop: "1.5rem"}} variant="contained" color="primary">
                 UPDATE STUDENT
            </Button>
        </form>
        </div>
        </>
    )
}

export default UpdateStudent;
