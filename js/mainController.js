routerApp.controller('mainController', function($scope, $http) {
  
  var myObj = {
    "id": 1, "teksti": "HHkysely", "tyyppi": "koulukysely", "tila": "avoin", "kysymykset":
    [
      {"id" :1, "teksti": "Oletko kiinnostunut osallistumaan monialaiselle kurssille?", "tyyppiid": 2, "vaihtoehdot": 
        [
          {"id":1, "teksti": "Erittäin paljon"},
          {"id":2, "teksti": "Jonkin verran"},
          {"id":3, "teksti": "En juurikaan"},
          {"id":4, "teksti": "En yhtään"}
        ]
      },
      {"id": 3, "teksti": "Ajatuksia monialaisen kurssin kehittämiseksi:", "tyyppiid": 3, "vaihtoehdot": null},   
      {"id": 2, "teksti": "Minkä koulutusohjelmien kanssa haluaisit yhteisen kurssin?", "tyyppiid": 1, "vaihtoehdot": 
        [
          {"id": 1, "teksti": "Finanssi- ja talousasiantuntija"},
          {"id": 2, "teksti": "Johdon assistenttityö"},
          {"id": 3, "teksti": "Journalismi"},
          {"id": 4, "teksti": "Liiketalous"},
          {"id": 5, "teksti": "Myyntityö"},
          {"id": 6, "teksti": "Ruokatuotannon johtaminen"},
          {"id": 7, "teksti": "Tietojenkäsittely"}
        ]
      }
      
    ]
  };
  
  //get kutsu
//  $http.get('http://proto333.haaga-helia.fi:8080/mvc/kyselyt/1/kysymykset/').
//    then(function(response) {
//      $scope.obj = response.data;     
//      console.log($scope.obj);
//    });
  
  $scope.obj = myObj;
  $scope.rbtn = myObj.kysymykset[0].vaihtoehdot;
  $scope.cbox = myObj.kysymykset[2].vaihtoehdot;
  
   
  // FORMDATA //
  $scope.formData = {};
  
  $scope.submitForm = function(){
    
    console.log('tulokset',$scope.formData);
       
    var cboxArray = [];
    
    (function(){
      for (var key in $scope.formData.cbox) {
        cboxArray.push({'id': key, 'teksti': $scope.cbox[key-1].teksti});
      }    
    })();
    
    console.log(cboxArray);
    
    
    var sendData = 
      {'id': 0, 'vastaukset': 
        [
          {'id': 0, 'kysymysid': $scope.obj.kysymykset[0].tyyppiid, 'teksti': null, 'vaihtoehdot': 
            cboxArray
          },
          {'id': 0, 'kysymysid': 3, 'teksti': 'kylla', 'vaihtoehdot': [$scope.formData.textarea]},
          {'id': 0, 'kysymysid': 4, 'teksti': null, 'vaihtoehdot': 
            [
              {'id': 0, 'teksti': $scope.formData.radio}
            ]
          }
        ]
      };
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
    
  };  // FORMDATA ENDS
    
  
}); //CONTROLLER ENDS