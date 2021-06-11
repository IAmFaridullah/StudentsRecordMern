import { useState,useContext } from 'react';

import './Search.css';

import studentContext from '../context/studentsContext';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

const Search = (props) => {
    const [searchQuery, setSearchQuery] = useState({ searchQuery : ""});
    const [, dispatch, setIsLoading] = useContext(studentContext);

    const searchHandler = () => {
        setIsLoading(true)
        axios.post('http://localhost:5000/searchRecords', searchQuery)
             .then(response => {
                 dispatch({
                     type : 'SET_SEARCH_RESULT',
                     payload : response.data.students
                 })
                 setIsLoading(false)
             })
             .catch(err => {
                console.log(err)
             })
    }

    return(
        <>
            <div className="search">
                <div className="search__box-container">
                <TextField id="standard-basic" onChange={(e) => { setSearchQuery({ searchQuery : e.target.value})}} size="small" label="Search" />
                <Button onClick={searchHandler} variant="contained" color="primary">
                    <SearchSharpIcon />Search
                </Button>
                </div>
            </div>
        </>
    )
}

export default Search;