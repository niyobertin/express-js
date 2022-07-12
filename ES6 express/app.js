//Buliding student server(Leaning Rest API using nade js and express js);

const exprss = require('express');
const app = exprss();
const users = require('./users');
const bodyParser = require('body-parser');

//using midleware
app.use(bodyParser.json());


//Getting all users;
app.get('/users',(req,res) =>{
    res.send(users);
});
//Getting spesific user based on a given id;
app.get('/users/:id',(req,res) =>{
    const id= parseInt(req.params.id);
   user = users.find(element => element.id === id);
   if(!user){
    res.status(404).send('<h2>404:User not found</h2>');
   }
   res.send(user);
});

// Adding user by use of post method.
app.post('/users',(req,res) =>{
const newUser = [{
        id:users.length +1,
        name:req.body.name,
        age:req.body.age
    }];
     users.push(newUser);
    res.send(newUser);
});

//apudating the user with the help of PUT method

//function yo find user index
function userIndex(items,id){
    let index = -1;
    for(let i = 0;i < items.length;i++){
        if(items[i].id === id){
            index = i;
        }
        return index;
    }
    return index;
}

app.put('/users/:id',(req,res) =>{
    const {id} = parseInt(req.params.id);
    const body = req.body;
  const  userToUpdate = users.find(element => element.id === id);
   const updateUser = {userToUpdate ,body}
   const indexOfUser =userIndex(users,parseInt(id));
users[indexOfUser] = updateUser;
res.send(updateUser);

});









app.listen(5000,() => console.log("Server is listening to 5000...."));