routerApp.controller('mainController', function($scope) {
  
  var myObj, myJSON, text, obj; 
  myObj = {
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
      {"id": 2, "teksti": "Minkä koulutusohjelmien kanssa haluaisit yhteisen kurssin?", "tyyppiid": 1, "vaihtoehdot": 
        [
          {"id": 1, "teksti": "Finanssi- ja talousasiantuntija"},
          {"id": 2, "teksti": "Johdon assistenttityö"},
          {"id": 3, "teksti": "Journalismi"},
          {"id": 4, "teksti": "Liiketalous"},
          {"id": 5, "teksti": "Myyntityö"},
          {"id": 6, "teksti": "Ruokatuotannon johtaminen"},
          {"id": 7, "teksti": "Tietojenkäsittely"},
        ]
      },
      {"id": 3, "teksti": "Ajatuksia monialaisen kurssin kehittämiseksi:", "tyyppiid": 3, "vaihtoehdot": null}
    ]
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("teksti", myJSON);

  text = localStorage.getItem("teksti");
  obj = JSON.parse(text);
//  console.log(obj);
//  console.log(obj.kysymykset[2]);
  
  $scope.question1 = obj.kysymykset[0].teksti;
  $scope.question2 = obj.kysymykset[1].teksti;
  $scope.question3 = obj.kysymykset[2].teksti;
  
  $scope.q1_v1 = obj.kysymykset[0].vaihtoehdot[0].teksti;
  $scope.q1_v2 = obj.kysymykset[0].vaihtoehdot[1].teksti;
  $scope.q1_v3 = obj.kysymykset[0].vaihtoehdot[2].teksti;
  $scope.q1_v4 = obj.kysymykset[0].vaihtoehdot[3].teksti;
  
  $scope.q2_v1 = obj.kysymykset[1].vaihtoehdot[0].teksti;
  $scope.q2_v2 = obj.kysymykset[1].vaihtoehdot[1].teksti;
  $scope.q2_v3 = obj.kysymykset[1].vaihtoehdot[2].teksti;
  $scope.q2_v4 = obj.kysymykset[1].vaihtoehdot[3].teksti;
  $scope.q2_v5 = obj.kysymykset[1].vaihtoehdot[4].teksti;
  $scope.q2_v6 = obj.kysymykset[1].vaihtoehdot[5].teksti;
  $scope.q2_v7 = obj.kysymykset[1].vaihtoehdot[6].teksti;
  
  $scope.formData = {};
  
  $scope.submitForm = function(){
    console.log('tulokset',$scope.formData);
//    $http({
//      method : 'POST',
//      url : 'end.html',
//      data : $scope.fields,
//      heeaders : {'Content-Type': 'application/x-www-form-urlencoded'}
//    }).then(function(response) {
//        data = response.data;
//      console.log("tulokset", data);
//    });
   
    //.success(function(data) { })
    

    //var data = $scope.fields;
    //console.log(data);
//    $http.get("data.json")
//      .then(function(response) {
//      $scope.fields = response.data;
//    })
    
    //$http.post(xxx, data);
  };
  
});

