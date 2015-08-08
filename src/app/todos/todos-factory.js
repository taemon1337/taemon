angular.module( 'taemon.TodoFactory', [])

.factory('TodoFactory', function() {
  var factory = {};
  
  factory.todos = [
    { id: 1, name: 'build the todo factory', complete: false, repeat: '', labels: ['coding'] },
    { id: 2, name: 'mow the lawn', complete: false, repeat: 'monthly', labels: ['farm'] },
    { id: 3, name: 'pay the cell phone bill', complete: false, repeat: 'monthly', labels: ['bills'] },
    { id: 4, name: 'feed the chickens', complete: true, repeat: 'daily', labels: ['farm'] }
  ];
  
  factory.add = function() {
    return  { name: '', complete: false, repeate: '', labels: [] };
  };
  
  factory.load = function() {
    return factory.todos;
  };
  
  factory.create = function(todo) {
    todo.id = Math.random()*10000;
    factory.todos.push(todo);
  };
  
  factory.update = function(todo) {
    console.log('updated', todo);
    factory.todos.forEach(function(t) {
      if(t.id == todo.id) { t.name = todo.name; }
    });
  };
  
  return factory;
})
;