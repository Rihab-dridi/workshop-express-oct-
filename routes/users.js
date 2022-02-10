const express = require("express");
const router = express.Router();
let users = require("../data");
//CRUD

//Read the data
//@role: get all the users
//@url : http://localhost:3000/api/users/
router.get("/", (req, res) => {
  res.status(200).send(users);
});

//Creat data
//@role: add new user
//@url : http://localhost:3000/api/users/add
router.post("/add", (req, res) => {
  //create a new user
  const newUser = { ...req.body, id: Math.random() };
  //add the user to the dataa
  users.push(newUser);

  res
    .status(200)
    .json({
      msg: `the user ${newUser.name} is added to the list `,
      newUser,
      users,
    });
});

//Delete data
//@role: delte a  user
//@url : http://localhost:3000/api/users/delete/:id

router.delete('/delete/:id',(req,res)=>{
//read the id from the url 
// const id=req.params.id
const {id}=req.params
 users=users.filter(el=> el.id!=id )

res.status(200).json(users)
})


//update data
//@role: update a  user
//@url : http://localhost:3000/api/users/update/:id

//read the id from the url
//find the user to update 
// create a new user using the req.body+the old user (spread operator) 
//replace the old user with the updated user  (map )


module.exports = router;
