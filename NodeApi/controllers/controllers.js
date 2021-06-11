const Student = require('../models/students');

exports.getRecords = (req, res, next) => {    
        Student.find()
               .then(students => {
                return res.status(200).json({
                    students : students,
                })
               }).catch(() => {
                return res.status(500).json({
                    message : "Something Went Wrong!"
                })
               })
}

exports.searchRecords = (req, res, next) => {    
    Student.find({ studentName : { $regex: new RegExp(req.body.searchQuery, "i") }})
           .then(students => {
            return res.status(200).json({
                students : students,
            })
           }).catch(() => {
            return res.status(500).json({
                message : "Something Went Wrong!"
            })
           })
}

exports.postNewStudent = (req, res, next) => {
    const student = new Student({
                    studentName: req.body.name,
                    studentFather: req.body.fname,
                    email: req.body.email,
                    department: req.body.dept,
                });
                student.save()
                 .then(() => {
                   return res.status(201).json({ message : "Student Saved Successfully", student : student})
                })
                   .catch((err) => {
                    return res.status(500).json({
                        message : "Something Went Wrong!",
                        error : err,
                        })
                   });
            }

exports.postUpdatedStudent = (req, res, next) => {
    Student.findById(req.body.id)
           .then(student => {
               student.studentName = req.body.name;
               student.studentFather = req.body.fname;
               student.email = req.body.email;
               student.department = req.body.dept;
               student.save()
                      .then(() => {
                return res.status(200).json({
                       message : "Student Updated Successfully!",
                       student : student
                })
               }).catch(() => {
                    return res.status(500).json({ message : "Something Went Wrong!"})
               })
           }).catch(() => {
                    return res.status(500).json({ message : "Something Went Wrong!" })
           })
}

exports.deleteStudent = (req, res, next) => {
    Student.deleteOne({ _id : req.params.id })
           .then(() => {
               return res.status(200).json({
                    message : " Student Deleted Successfully!",
                })
           }).catch(err => {
               return res.status(500).json({
                   message : "Something Went Wrong!"
               })
           })
    
}