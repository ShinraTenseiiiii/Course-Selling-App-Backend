const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pandeyjoydeep:PGb9bp4j5Ge1DCy9@cohort.fe4xv0a.mongodb.net/Course_Selling_App1');


const AdminSchema = new mongoose.Schema({
 
   username: String,
   password: String
});

const UserSchema = new mongoose.Schema({
    
    username: String,
   password: String,
   purchasedCourses: [
    {
        type: mongoose.Schema.Types.ObjectId,  // the objectId is from the Course table 
        ref: 'Course'
    }
   ]
});

const CourseSchema = new mongoose.Schema({
  
    title: String,
    description : String,
    price: Number,
    imageLink: String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}