routerApp.controller('mainController', function($scope) {
  
  var myObj, myJSON, text, obj; 
  myObj = {
    "id": 1, "teksti": "HHkysely", "tyyppi": "koulukysely", "tila": "avoin", "kysymykset":
    [
      {"id" :1, "teksti": "Mikä on hyvä?", "tyyppiid": 2, "vaihtoehdot": 
        [
          {"id":1, "teksti": "Kyllä"},
          {"id":2, "teksti": "Ei"}
        ]
      },
      {"id": 2, "teksti": "Milloin koulussa on kivaa?", "tyyppiid": 1, "vaihtoehdot": 
        [
          {"id":3, "teksti": "Kun on mielekästä tekemistä"},
          {"id":4, "teksti": "Kun ei ole stressiä"},
          {"id": 5, "teksti": "Kun ruokalassa on hyvää ruokaa"}
        ]
      },
      {"id": 3, "teksti": "Anna vapaata palautetta:", "tyyppiid": 3, "vaihtoehdot": null}
    ]
  };
  myJSON = JSON.stringify(myObj);
  localStorage.setItem("teksti", myJSON);

  text = localStorage.getItem("teksti");
  obj = JSON.parse(text);
  console.log(obj);
  console.log(obj.kysymykset[0].teksti);
  
  $scope.question1 = obj.kysymykset[0].teksti;
});