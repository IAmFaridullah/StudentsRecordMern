import axios from 'axios';

const getStudents = () => {
    
    const getStudentsFromDb = async() => {
        const response = await axios.get('http://localhost:5000/');
        const students = response.data.students;
        return students;
    }

    return getStudentsFromDb;
}

export default getStudents;