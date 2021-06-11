const reducer = (state , action) => {
    switch(action.type) {
        case 'SET_SEARCH_RESULT':
            return {
                ...state, searchResult : action.payload, isSearched : true
            }
        case 'UPDATE_STATE':
            return {
                ...state, update : !state.update
            }

        case 'SET_STUDENTS':
            return {
                    ...state, students : action.payload
            }
        case 'DELETE_STUDENT':
            return {
               students : state.students.filter((student) => (
                    student.id !== action.id
               ))
            }
        case 'CREATE_STUDENT':
            return {
                 students : [...state.students, action.payload]
            }
        case 'UPDATE_STUDENT':

            const studentIndex = state.students.findIndex((student) => (
                student.id === action.payload.id
            ))


            const students = [...state.students];

            console.log(students)

            if(studentIndex >= 0){
                students.splice(studentIndex, 1 , action.payload)
            }

            return {
                ...state, students : students
            }

        default:
            return
    }
}

export default reducer;
