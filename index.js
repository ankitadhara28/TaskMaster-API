const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

let tasks = [
  { taskId: 1, text: 'Fix bug #101', priority: 2 },
  { taskId: 2, text: 'Implement feature #202', priority: 1 },
  { taskId: 3, text: 'Write documentation', priority: 3 }
];

function taskadd(tasks,taskId,text,priority)
{
    tasks.push({
        taskId :parseInt(taskId),
        text:text,
        priority:parseInt(priority)
      });
    return tasks;
}
app.get("/task/add",(req,res)=>
{
   let taskId=req.query.taskId
   let text=req.query.text
   let priority =req.query.priority
   let result = taskadd(tasks,taskId,text,priority)
   res.json(result);
})
function readtasks(tasks)
{
  return tasks
}
app.get("/tasks",(req,res)=>
{
  let result = readtasks(tasks);
  res.json(result);
})

function sortbypriority(task1 , task2)
{
  return task1.priority - task2.priority;
}
app.get("/tasks/sort-by-priority",(req,res)=>
{
  let taskcopy = tasks.slice();
  taskcopy.sort(sortbypriority);
  res.json(taskcopy);
})
function editpriority(tasks,taskId,priority)
{
  for(let i =0;i<tasks.length;i++)
  {
      if(tasks[i].taskId===taskId)
      {
        tasks[i].priority=priority
      }
  }
return tasks
}
app.get("/tasks/edit-priority",(req,res)=>
{
  taskId = parseInt(req.query.taskId)
  priority = parseInt(req.query.priority)
  let result = editpriority(tasks,taskId ,priority)
  res.json(result);
})

function editbyText(tasks,taskId,text)
{
   for(let i =0;i<tasks.length;i++)
   {
     if(tasks[i].taskId === taskId)
     {
       tasks[i].text = text;
     }
   }
   return tasks
}
app.get("/tasks/edit-text",(req,res)=>
{
  taskId = parseInt(req.query.taskId);
  text = req.query.text;
  let result = editbyText(tasks,taskId,text);
  res.json(result);
})

function delfromtask(tsk,taskId)
{
  return tsk.taskId != taskId
}
app.get("/tasks/delete",(req,res)=>
{
  let taskId = parseInt(req.query.taskId);
  let result = tasks.filter((tsk)=>delfromtask(tsk,taskId));
  res.json(result);
})

function filterbypriority(tsk,priority)
{
  return tsk.priority === priority
}
app.get("/tasks/filter-by-priority",(req,res)=>
{
  let priority = parseInt(req.query.priority);
  let result = tasks.filter((tsk)=>filterbypriority(tsk,priority));
  res.json(result);
})

let cors = require('cors');
app.use(cors());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


