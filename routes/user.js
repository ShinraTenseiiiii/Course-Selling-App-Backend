const { Router } = require("express");
const userMiddleware = require("../middleware/admin");
const { User } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {Jwt_Secret} = require("../config");



// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
  await User.create({
    username,password
  })
  res.json({
    message: 'User created successfully' 
})
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;


    const user = await User.find({ username,password})

    if (user) {
         const token =  jwt.sign({
      username,password
    },Jwt_Secret)
    res.json({token});
    } else {
      res.status(404).json({message: 'Not a valid user'})
    }
    
    


});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router