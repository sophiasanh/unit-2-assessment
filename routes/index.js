const express = require('express');
const router = express.Router();
const todos = require("../data/todos");

// router.get('/', todosCtrl.index)
// router.post('/', todosCtrl.create)

/* GET home page. */
// const todos = [];
// const list  = todos.push([]);
// console.log(list);

router.get('/', (req, res, next) => {
  res.render('index', { title: 'To Dos' });
});

router.post('/', (req, res, next) => {
  console.log(todos); 
  todos.push({ todo: 'Buy cat food', done: false }); 
  res.render('index', { title: 'To Dos' });
});

router.delete('/', (req, res, next) => {
  todos.pop({ todo: 'Buy cat food', done: true });
  res.render('index', { title: 'There are no To Dos yet!' });
});

// const toDo = new ToDo(req.body);
//     toDo.save(err => {
//     if (todo > 0) {
//     res.render('/', {
//         title: "There are no To Dos yet!",
//     });
//     } 
//     else 
//     {
//     return res.render('/', {
//         title: "To Dos List",
//     });
// };
//     });
      
module.exports = router;
