const express = require('express');
const router = express.Router();
const models = require("../models");




// router.get("/", function(req, res) {
//     models.Todos.findAll().then(function(todos) {
//         .then(LargeVariable) => {
//           const yetTodo = LargeVariable.filter(smallVarible => (smallVarible.complete);
//             const yetTodoC = LargeVariable.filter(smallVarible => smallVarible.complete);
//             res.render('todo', {
//                 yetTodo: yetTodo;
//                 yetTodoC: yetTodoC
//               });
//             });
//           });
//
//           res.render('index', {
//             todos: todos
//           });
//         });
//     });

router.post("/todos", function(req, res) {
  models.Todos.create({
    Title: req.body.addTodo,
  });
  res.redirect('/');
})

router.post('/complete', function(req, res) {
  models.Todos.push('');
  res.redirect('/');
})



router.post('/update', function(req, res) {
  const id = BodyofM(req.body.updateTodo);
  models.todo.update({
    Title: req.body.updateText
  }, {
    where: {
      id: id
    }
  }).then(() => res.redirect('/'));

});


router.post('flip', function(req, res) {
  const id = BodyofM(req.body.completeTodo);
  models.todo.complete({
    completed: 't'
  }, {
    where: {
      id: id
    }
  }).then(() => res.redirect('/'));

});
router.post('delete', function(req, res) {
  const id = BodyofM(req.body.deleteTodo);
  models.todo.destroy({
    where: {
      id: id
    }
  }).then(() => res.redirect('/'));

});

router.post('/destroy', function(req, res) {
  models.todo.destroy({
    where: {
      completed: 't'
    }
  })
})

module.exports = router;
