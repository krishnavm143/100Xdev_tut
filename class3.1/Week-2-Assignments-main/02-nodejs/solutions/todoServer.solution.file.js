const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

// const path =
//   '/home/user1/Documents/GitHub/100Xdev_tut/class3.1/Week-2-Assignments-main/02-nodejs/solutions/todos.json';

function findIndex(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) return i;
  }
  return -1;
}

function removeAtIndex(arr, index) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArray.push(arr[i]);
  }
  return newArray;
}

// app.get('/todos', (req, res) => {
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) throw err;
//     res.json(JSON.parse(data));
//   });
// });

app.get('/todos', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    res.status(200).json(JSON.parse(data));
  });
});

// app.get('/todos/:id', (req, res) => {
//   fs.readFile(path, 'utf8', (err, data) => {
//     if (err) throw err;
//     const todos = JSON.parse(data);
//     const todoIndex = findIndex(todos, parseInt(req.params.id));
//     if (todoIndex === -1) {
//       res.status(404).send();
//     } else {
//       res.json(todos[todoIndex]);
//     }
//   });
// });

app.get('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);

    const todoIndex = findIndex(todos, parseInt(req.params.id));

    if (todoIndex === -1) {
      res.status(404).send('Index not found');
    } else {
      res.status(200).json(todos[todoIndex]);
    }
  });
});

// app.post('/todos', (req, res) => {
//   const newTodo = {
//     id: Math.floor(Math.random() * 1000000), // unique random id
//     title: req.body.title,
//     description: req.body.description,
//   };
//   fs.readFile('todos.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     const todos = JSON.parse(data);
//     todos.push(newTodo);
//     fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
//       if (err) throw err;
//       res.status(201).json(newTodo);
//     });
//   });
// });

app.post('/todos', (req, res) => {
  const newTodo = {
    id: Math.floor(Math.random() * 1000000), //unique no
    title: req.body.title,
    description: req.body.description,
  };
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    todos.push(newTodo);
    fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});

app.put('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    const todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      const updatedTodo = {
        id: todos[todoIndex].id,
        title: req.body.title,
        description: req.body.description,
      };
      todos[todoIndex] = updatedTodo;
      fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json(updatedTodo);
      });
    }
  });
});

app.delete('/todos/:id', (req, res) => {
  fs.readFile('todos.json', 'utf8', (err, data) => {
    if (err) throw err;
    let todos = JSON.parse(data);
    const todoIndex = findIndex(todos, parseInt(req.params.id));
    if (todoIndex === -1) {
      res.status(404).send();
    } else {
      todos = removeAtIndex(todos, todoIndex);
      fs.writeFile('todos.json', JSON.stringify(todos), (err) => {
        if (err) throw err;
        res.status(200).json('deleted successfully');
      });
    }
  });
});

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
// for all other routes, return 404
// app.use((req, res, next) => {
//   res.status(404).send();
// });

app.listen(4000, () => {
  console.log('server running @4000');
});
module.exports = app;
