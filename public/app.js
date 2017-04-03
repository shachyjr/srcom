// takes in name of module and array of modules that my app will depend on
angular.module('srCom', ['ngMaterial'])
.controller('MainCtrl', ['$scope', function($scope){
  $scope.test = 'Shachy Rivas';
}]);
/*.controller('underConstr', [$scope, function($scope){

}]);*/
