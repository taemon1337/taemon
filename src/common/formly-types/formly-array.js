angular.module( 'formly.array', [
  'formly'
])

.config(function ( formlyConfigProvider ) {
  formlyConfigProvider.setType({
    name: 'array',
    template: '<form ng-submit="model[options.key].push(formlyTemp); formlyTemp = null"><input type="text" ng-model="formlyTemp" /></form><ul ng-repeat="item in model[options.key]"><li>{{ item }}</li></ul>'
  });
})
;