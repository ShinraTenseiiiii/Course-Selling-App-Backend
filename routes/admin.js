const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const {Jwt_Secret} = require("../config");



router.post('/signup', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;
  await Admin.create({
    username,password
  })
  res.json({
    message: 'Admin created successfully' 
})
});

router.post('/signin', async(req, res) => {
    const username = req.body.username;
    const password = req.body.password;


    const user = await Admin.findOne({ username,password})

    if (user) {
      console.log("hi");
         const token =  jwt.sign({
      username,password
    },Jwt_Secret)
    res.json({token});
    } else {
      res.status(404).json({message: 'Not a valid user'})
    }
    
    


});

router.post('/courses', adminMiddleware, async(req, res) => {
    const title = req.body.title;
    const description= req.body.description;
    const imageLink = req.body.imageLink;
    const price= req.body.price;

 const newCourse =  await Course.create(
  {title, description,imageLink, price})
    res.json({ message:'Course created', courseId: newCourse._id })
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
  const courseNames = await Course.find({})
  res.json({courseNames})
});

module.exports = router;
