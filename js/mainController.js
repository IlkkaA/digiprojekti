routerApp.controller('mainController', function($scope, $http) {
    
  //GET KUTSU
  $http.get('http://proto333.haaga-helia.fi:8080/mvc/kyselyt/1/kysymykset/').
    then(function(response) {
      $scope.obj = response.data;     
      console.log(response.data);
			$scope.rbtn = $scope.obj.kysymykset[0].vaihtoehdot;
			$scope.cbox = $scope.obj.kysymykset[2].vaihtoehdot;

			window.rbtnArrOrig = response.data.kysymykset[0].vaihtoehdot;
			window.cboxArrOrig = response.data.kysymykset[2].vaihtoehdot;
		
    });
	
  
  // FORMDATA //
  $scope.formData = {};
  
  $scope.submitForm = function(){
    
		var cbArray = window.cboxArrOrig;
		var rbArray = window.rbtnArrOrig;

    console.log("tulokset:",$scope.formData);    
    
    var cboxOrigId = [];
    var cboxOrigText = [];
    var cboxId = [];
    var cboxObj = {};
    var cboxArray = [];
    
		// klikatun radiobuttonin arvo miinus 1 jotta arvo vastaa alkup. jsonin radiobutton arrayn arvoja
    var rbtnValue = $scope.formData.radiobutton - 1;
    
		// cboxOrigId ja cboxOrigText taulukkoon tallennetaan alkup. jsonin
		// checkbox arrayssa olevien id ja teksti kenttien arvot
    for (i = 0; i < cbArray.length; i++) {
      cboxOrigId.push(cbArray[i].id);
      cboxOrigText.push(cbArray[i].teksti);
    } 
		
		// asetetaan taulukkoon klikattujen checkboxien arvot miinus viisi,
		// jotta cboxOrigId arraystä saadaan suoraan haettua oikea id
    for (var key in $scope.formData.checkbox) {
      cboxId.push(key-5);
    }
    
		// pushataan cboxArrayhin objekteina klikattujen checkboxien id:t ja tekstit
    for (i = 0; i < cboxId.length; i++) {  
      cboxObj = {'id': cboxOrigId[cboxId[i]], 'teksti': cboxOrigText[cboxId[i]]};
      cboxArray.push(cboxObj);
    }
    
    
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
              {'id': $scope.formData.radiobutton, 'teksti': rbArray[rbtnValue].teksti}
            ]
          }
        ]
      };
    console.log("sendData:", sendData);
    
		// LÄHETETÄÄN sendData BÄKKIIN. Pitäis toimia
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