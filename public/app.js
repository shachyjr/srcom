// takes in name of module and array of modules that my app will depend on
angular.module('srCom', ['ngMaterial'])
.controller('MainCtrl', ['$scope', function($scope){
  var today = new Date();
  var today_dd = today.getDate();

  var start = new Date('2017', '04', '3');
  var start_dd = start.getDate();

  var diff = today_dd - start_dd;
  $scope.perc_done = ((diff/10)*100).toString();

  var finish = new Date('2017', '04', '13');

  switch(diff){
    case 0:
      $scope.coffee_img = "0";
      break;
    case 1:
      $scope.coffee_img = "1";
      break;
    case 2:
      $scope.coffee_img = "2";
      break;
    case 3:
      $scope.coffee_img = "3";
      break;
    case 4:
      $scope.coffee_img = "4";
      break;
    case 5:
      $scope.coffee_img = "5";
      break;
    case 6:
      $scope.coffee_img = "6";
      break;
    case 7:
      $scope.coffee_img = "7";
      break;
    case 8:
      $scope.coffee_img = "8";
      break;
    case 9:
      $scope.coffee_img = "9";
      break;
    case 10:
      $scope.coffee_img = "10";
      break;
  }
}]);
/*.controller('underConstr', [$scope, function($scope){

}]);*/
