// const ToDo = require("../models/todo");

// const index = (req, res) => {
//     ToDo.find({}, (err, toDos) => {
//         res.render('todos/index', {
//             title: 'To Dos', toDos
//         })
//     })
// }

// const newToDo = (req, res) => {
//     res.render('todos/new', {title: 'Add To Do'})
// }

// const create = (req, res) => {
//     for (let key in req.body) {
//         if (req.body[key] === '') delete req.body[key]
//     }
// const toDo = new Todo(req.body);
//     todo.save(err => {
//         if (err) return res.redirect('/todos/new')
//         // res.redirect('/movies');
//         res.redirect(`/todos/${todo._id}`)
//       })
//     }
//     if (toDos < 0) {
//     res.render('/todos', {
//         title: "There are no To Dos yet!",
//     });
//     } 
//     else 
//     {
//     return res.render('/todos', {
//         title: "To Dos List",
//     });
// };
//     })};



// module.exports = {
//      index,
//      new: newToDo,
//      create
// };