routerApp.controller('mainController', function($scope, $http) {
  
  var myObj = 
{
   "id":1,
   "nimi":"ekaekakysely",
   "tyyppi":"koulukysely",
   "tila":"avoin",
   "kysymykset":[
      {
         "id":1,
         "teksti":"Oletko kiinnostunut osallistumaan monialaiselle kurssille?",
         "tyyppiid":2,
         "vaihtoehdot":[
            {
               "teksti":"Hyvin paljon",
               "id":1
            },
            {
               "teksti":"Jonkin verran",
               "id":2
            },
            {
               "teksti":"En juurikaan",
               "id":3
            },
            {
               "teksti":"En yhtään",
               "id":4
            },
            {
               "teksti":"",
               "id":666
            }
         ]
      },
      {
         "id":2,
         "teksti":"Ajatuksia monialaiset opiskelijatoiminnan kehittämiseksi:",
         "tyyppiid":3,
         "vaihtoehdot":[
            {
               "teksti":null,
               "id":0
            }
         ]
      },
      {
         "id":3,
         "teksti":"Minkä koulutusohjelmien kanssa haluaisit yhteisen kurssin?",
         "tyyppiid":2,
         "vaihtoehdot":[
            {
               "teksti":"Finanssi- ja talousasiantuntija",
               "id":5
            },
            {
               "teksti":"Johdon assistenttityö",
               "id":6
            },
            {
               "teksti":"Journalismi",
               "id":7
            },
            {
               "teksti":"Liiketalous",
               "id":8
            },
            {
               "teksti":"Myyntityö",
               "id":9
            },
            {
               "teksti":"Ruokatuotannon johtaminen",
               "id":10
            },
            {
               "teksti":"Tietojenkäsittely",
               "id":11
            }
         ]
      }
   ]
}
  
  //GET KUTSU
//  $http.get('http://proto333.haaga-helia.fi:8080/mvc/kyselyt/1/kysymykset/').
//    then(function(response) {
//      $scope.obj = response.data;     
//      console.log($scope.obj);
//    });
      
  $scope.obj = myObj;
  $scope.rbtn = $scope.obj.kysymykset[0].vaihtoehdot;
  $scope.cbox = $scope.obj.kysymykset[2].vaihtoehdot;
  
  var rbtnArrOrig = myObj.kysymykset[0].vaihtoehdot;
  var cboxArrOrig = myObj.kysymykset[2].vaihtoehdot;
  
//  $scope.obj = myObj;
  
  
   
  // FORMDATA //
  $scope.formData = {};
  
  $scope.submitForm = function(){
    
    console.log("tulokset:",$scope.formData);    
    
    // TALLENNA KLIKATTUJEN C-BOXIEN ARVOJEN ID:T JA ARVOT OBJEKTEIHIN + TAULUKKOON
    var cboxOrigId = [];
    var cboxOrigText = [];
    var cboxId = [];
    var cboxObj = {};
    var cboxArray = [];
    
    var rbtnValue = $scope.formData.radiobutton - 1;
    
    for (i = 0; i < cboxArrOrig.length; i++) {
      cboxOrigId.push(cboxArrOrig[i].id);
      cboxOrigText.push(cboxArrOrig[i].teksti);
    } 
    
    for (var key in $scope.formData.checkbox) {
      cboxId.push(key-5);
    }
//    console.log(" klikatut cboxIdt : ", cboxId);
    
    for (i = 0; i < cboxId.length; i++) {
      
      cboxObj = {'id': cboxOrigId[cboxId[i]], 'teksti': cboxOrigText[cboxId[i]]};
      cboxArray.push(cboxObj);
    }
//    console.log("cboxarray:", cboxArray);
    
    
    // LÄHETTETTÄVÄ DATA PER VASTATTU KYSELY
    var sendData = 
      {'id': 0, 'vastaukset': 
        [
          {'id': 0, 'kysymysid': 3, 'teksti': null, 'vaihtoehdot': 
            cboxArray
          },
          {'id': 0, 'kysymysid': 2, 'teksti': $scope.formData.textarea, 'vaihtoehdot': null},
          {'id': 0, 'kysymysid': 1, 'teksti': null, 'vaihtoehdot': 
            [
              {'id': $scope.formData.radiobutton, 'teksti': rbtnArrOrig[rbtnValue].teksti}
            ]
          }
        ]
      };
    console.log("sendData:", sendData);
    
    $http({
      method : 'POST',
      url : 'http://proto333.haaga-helia.fi:8080/mvc/kyselyt/1/vastaukset',
      data : sendData,
      headers : {'Content-Type': 'application/json; charset:utf8'
                }
    }).then(function(response) {
        data = response.data;
      console.log("tulokset", data);
    }, function errorCallback(response) {
      console.log("ei onnistunut");
    })

    
  };  // FORMDATA ENDS
    
  
}); //CONTROLLER ENDS