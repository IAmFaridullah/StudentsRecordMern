import React from 'react'

import './StudentsRecord.css';

import StudentRecord from './StudentRecord';
import Search from './Search';


import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const StudentsRecord = () => {

    return (
    <div className="parent" >
        <h2>Students Record</h2>
        <Search />
        <Link to="/CreateStudent" className="btn btn-success"><PersonAddIcon style={{marginRight: "1px", marginTop: "-5px"}}/> ADD STUDENT</Link>
        <Table hover variant="dark" className="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Father Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Modify/Delete</th>
            </tr>
            </thead>
            <tbody>
            <StudentRecord />
            </tbody>
    </Table>
  </div>
    )
}

export default StudentsRecord;