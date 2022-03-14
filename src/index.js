//Leaning express.js ES6
// student management app
import express from "express";
import bodyParser from "body-parser";
// import studentIndex from "helper";
const students = [];

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/",function(req,res){
    res.send({data:students});
});


//Getting student

app.get("/:id",function(req,res){
    const  id = req.params.id;
    const student = students.find((student) => student.id === parseInt(id));
    res.send({data:student});
});

//registerring student
app.post("/",function(req,res){
    const {fname,sname,grade,combination} = req.body;
    const student = {fname,sname,grade,combination,id:students.length + 1};
    students.push(student);
    res.send(student);
})
//function to find the index of student
function studentIndex(items,id){
    let index = -1;
    for(let i = 0;i < items.length;i++){
        if(items[i].id === id){
            index = i;
        }
        return index;
    }
    return index;
}
// updating student
app.put("/:id",function(req,res){
    const {id} = req.params;
    const body = req.body;
    //question why this updata is working but when you try to get again return to how it was?
    const studentToUpdate = students.find((student) => student.id === parseInt(id));
    const updateStudent = {...studentToUpdate,...body};//un understadable;
    const indexOfStudent =studentIndex(students,parseInt(id));
    students[indexOfStudent] = updateStudent;
    res.send({data:updateStudent});
})

//deleting student
app.delete('/:id',function(req,res){
    const {id}= req.params;
    const indexOfStudent =studentIndex(students,parseInt(id));
    const studentTodelet = students.splice(indexOfStudent,1);
    res.send({data:studentTodelet});
})

app.listen(2000,function(){
    console.log("listenig on http://localhost:2000")
})