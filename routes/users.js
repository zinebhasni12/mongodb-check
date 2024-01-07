c
const express = require('express');
const router = express.Router();


let users = [
    {   id : 1,
        firstName: "John",
        lastName: "wick",
        email:"johnwick@gamil.com",
        DOB:"22-01-1990",
    },
    {
       id : 2,
        firstName: "John",
        lastName: "smith",
        email:"johnsmith@gamil.com",
        DOB:"21-07-1983",
    },
    {
        id : 3,
        firstName: "Joyal",
        lastName: "white",
        email:"joyalwhite@gamil.com",
        DOB:"21-03-1989",
    },
    {   id : 4,
        firstName: "Amina",
        lastName: "Black",
        email:"BlackAmina@gamil.com",
        DOB:"21-03-1989"
    },
    {   id :5 ,
        firstName: "Saad",
        lastName: "Haimeur",
        email:"haimeursaad@gamil.com",
        DOB:"21-03-1989"
    },
];

// GET request: Retrieve all users
router.get("/",(req,res)=>{
  // Copy the code here
  res.send(users)//This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:id",(req,res)=>{
  // Copy the code here
    const id = req.params.id

   let myTarget =  users.filter((item) => item.id == id)

    res.send(myTarget)//This line is to be replaced with actual return value
});


// POST request: Create a new user
router.post("/",(req,res)=>{
  // Copy the code here
  const newUser = req.body
  users.push(newUser)
  res.send(newUser)//This line is to be replaced with actual return value
});


// PUT request: Update the details of a user by email ID
router.put("/:id", (req, res) => {
  const id = req.params.id;

  const { firstName, lastName, email, DOB } = req.body;

  let myId = users.filter((item) => item.id === parseInt(id));

  if (myId.length > 0) {
    const target = myId[0];

    if (target !== undefined) {
      target.firstName = firstName || target.firstName;
      target.lastName = lastName || target.lastName;
      target.email = email || target.email;
      target.DOB = DOB || target.DOB;

      res.send(users);
    } else {
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.status(404).send("User not found");
  }
});
// DELETE request: Delete a user by email ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id); // Parse the ID to an integer

  users = users.filter((item) => item.id !== id);

  res.json(users);
});
  

module.exports=router;