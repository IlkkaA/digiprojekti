routerApp.controller('mainController', function($scope, $http) {
  
  //get kutsu
  $http.get('http://proto333.haaga-helia.fi:8080/mvc/kyselyt/1/kysymykset/').
    then(function(response) {
      $scope.obj = response.data;
      
      console.log($scope.obj);
    });
  
  $scope.formData = {};
  //post
  $scope.submitForm = function(){
    console.log('tulokset',$scope.formData);
    
    var sendData = {'id': $scope.obj.id, 'vastaukset': [
      {'id': $scope.obj.kysymykset[0].id,
       'kysymysid': $scope.obj.kysymykset[0].tyyppiid,
       'teksti': null,
       'vaihtoehdot': [
         {'id': 2, 'teksti': $scope.formData.teksti}
       ]
      }
    ]};
    console.log(sendData);
//    $http({
//      method : 'POST',
//      url : 'end.html',
//      data : $scope.fields,
//      heeaders : {'Content-Type': 'application/x-www-form-urlencoded'}
//    }).then(function(response) {
//        data = response.data;
//      console.log("tulokset", data);
//    })
//   
//    .success(function(data) { })
  };
    
  
}); //controller ends