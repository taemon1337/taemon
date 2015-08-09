angular.module( 'Todo', [])

.factory('Todo', function( $http ) {
  var Todo = function(todoData) {
    if(todoData) {
      this.setData(todoData);
    }
  };
  
  Todo.prototype = {
    base_uri: "/taemon/todos",
    setData: function(todoData) {
      angular.extend(this, todoData);
    },
    read: function(id) {
      var scope = this;
      $http.get(scope.base_uri+"/"+id)
        .success(function(todoData) {
          scope.setData(todoData);
        })
        .error(function(err) {
          console.log('Error fetching Todo by id', id, err);
        })
      ;
    },
    create: function(todoData) {
      var scope = this;
      $http.post(scope.base_uri, todoData, {})
        .success(function(todoData) {
          scope.setData(todoData);
        })
        .error(function(err) {
          console.log('Error creating Todo', todoData, err);
        })
      ;
    },
    update: function() {
      var scope = this;
      $http.put(scope.base_uri+"/"+this.id, this, {})
        .success(function(todoData) {
          scope.setData(todoData);
        })
        .error(function(err) {
          console.log('Error updating Todo', this, err);
        })
      ;
    },
    destroy: function() {
      var scope = this;
      $http.put(scope.base_uri+"/"+this.id, this, {})
        .success(function(resp) {
          console.log("successfully destroyed!", resp);
        })
        .error(function(err) {
          console.log('Error destroying Todo', this, err);
        })
      ;
    }
  };
  
  return Todo;
})
;