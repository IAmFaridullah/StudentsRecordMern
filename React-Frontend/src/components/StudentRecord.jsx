import React, {useContext, useState} from 'react'

import studentContext from '../context/studentsContext';
import Modal from '../Modals/Modal';
import Backdrop from '../Modals/Backdrop';
import SearchMsg from '../Modals/SearchMsg';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
import axios from 'axios';


function StudentRecord(props) {
    const [state, dispatch, setIsLoading ] = useContext(studentContext);
    const [isOpen, setIsOpen] = useState(false);
    const [studentId, setStudentId] = useState(null);
    const [studentName, setStudentName] = useState(null);

    const isOpenHandler = (id, name) => {
        setStudentId(id)
        setStudentName(name)
        setIsOpen(true);      
    }

    const isCloseHandler = () => {
        setIsOpen(false)
    }
   
    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/deleteStudent/${id}`)
             .then(response => {
                 dispatch({
                    type : 'UPDATE_STATE',
                })
             })
             .catch(err => {
                 console.log(err)
             })
        setIsLoading(true)
        setIsOpen(!isOpen);
    }

    const renderRecords = () => {
        if(!state.isSearched){
            return (
                state.students.map(student => (
                    <tr key={student._id}>
                      <td>{student.studentName}</td>
                      <td>{student.studentFather}</td>
                      <td>{student.email}</td>
                      <td>{student.department}</td>
                      <td>
                          <Link to={"/UpdateStudent/" + student._id} style={{marginRight: "8px"}} className="btn btn-primary"><EditIcon style={{marginRight: "2px", marginTop: "-5px"}}/>EDIT</Link>
                          <button onClick={() => isOpenHandler(student._id, student.studentName)} className="btn btn-danger"><DeleteIcon style={{marginRight: "1px", marginTop: "-5px"}} />DELETE</button>   
                      </td>
                  </tr>
               )) 
            )
        }else if(state.searchResult.length > 0){
            return (
                state.searchResult.map(student => (
                    <tr key={student._id}>
                    <td>{student.studentName}</td>
                    <td>{student.studentFather}</td>
                    <td>{student.email}</td>
                    <td>{student.department}</td>
                    <td>
                        <Link to={"/UpdateStudent/" + student._id} style={{marginRight: "8px"}} className="btn btn-primary"><EditIcon style={{marginRight: "2px", marginTop: "-5px"}}/>EDIT</Link>
                        <button onClick={() => isOpenHandler(student._id, student.studentName)} className="btn btn-danger"><DeleteIcon style={{marginRight: "1px", marginTop: "-5px"}} />DELETE</button>   
                    </td>
                </tr>
                )) 
            )
        }else if(state.searchResult.length === 0){
            return (
                <SearchMsg />
            )
        }else {
            return
        }
    }

    return (
        <>
        { isOpen && <Modal isClose={isCloseHandler} delete={() => deleteStudent(studentId)} record={studentName}/> }
        { isOpen && <Backdrop /> }
        {
           renderRecords()
        }
        </>
    )
}

export default StudentRecord;
