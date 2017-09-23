
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})



.factory('indexpt', ['$http', function($http) { 
  return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D%255EBVLG%2CPSI20.LS%26f%3Dp2l1%26e%3D.csv%26format%3Djson'%20and%20columns%3D'change%2Cpoints'&format=json&diagnostics=true&callback=") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('indexpt', ['$scope', 'indexpt', function($scope, indexpt) {
  indexpt.success(function(data) {
    $scope.fiver = data;
  })
}])

.factory('indexeuro', ['$http', function($http) { 
  return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D%255EAEX%2C%255EBFX%2C%255EFCHI%26f%3Dp2l1%26e%3D.csv%26format%3Djson'%20and%20columns%3D'change%2Cpoints'&format=json&diagnostics=true&callback=") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('indexeuro', ['$scope', 'indexeuro', function($scope, indexeuro) {
  indexeuro.success(function(data) {
    $scope.fiver = data;
  })
}])

.factory('indexworld', ['$http', function($http) { 
  return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3D%255ENYA%2C%255EIXIC%2C%255EGSPC%2C%255EGSPTSE%2C%255EGDAXI%2C%255EFTSE%2C%255ESTOXX50E%2C%255EN225%2C%255EHSI%2C%255EMXX%2C%255EIPSA%2C%255EMERV%2C%255EBVSP%26f%3Dp2l1%26e%3D.csv%26format%3Djson'%20and%20columns%3D'change%2Cpoints'&format=json&diagnostics=true&callback=") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('indexworld', ['$scope', 'indexworld', function($scope, indexworld) {
  indexworld.success(function(data) {
    $scope.fiver = data;
  })
}])



.factory('ptall', ['$http', function($http) { 
  return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3DALTR.LS%2CBCP.LS%2CBES.LS%2CBPI.LS%2CCFN.LS%2CCOMAE.LS%2CCOR.LS%2CCPR.LS%2CEDP.LS%2CEDPR.LS%2CEGL.LS%2CESO.LS%2CFCP.LS%2CGALP.LS%2CGLINT.LS%2CGPA.LS%2CIBS.LS%2CINA.LS%2CIPR.LS%2CJMT.LS%2CLIG.LS%2CMAR.LS%2CMCP.LS%2CNBA.LS%2CNOS.LS%2CORE.LS%2CPTC.LS%2CPTI.LS%2CRAM.LS%2CRED.LS%2CRENE.LS%2CSCP.LS%2CSCT.LS%2CSDCAE.LS%2CSEM.LS%2CSLBEN.LS%2CSNC.LS%2CSON.LS%2CSONC.LS%2CSONI.LS%2CSUCO.LS%2CSVA.LS%2CTDSA.LS%2CVAF.LS%26f%3Dnp2l1%26e%3D.csv%26format%3Djson'%20and%20columns%3D'name%2Cchange%2Cpoints'&format=json&diagnostics=true&callback=") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('ptall', ['$scope', 'ptall', function($scope, ptall) {
  ptall.success(function(data) {
    $scope.fiver = data;
  })
}])


/*.factory('DataSource', ['$http',function($http){
       return {
           get: function(file,callback,transform){
                $http.get(file,{transformResponse:transform}).
                success(function(data, status) {
                    console.log("Request succeeded");
                    callback(data);
                }).
                error(function(data, status) {
                    console.log("Request failed " + status);
                });
           }
       };
    }]);
var Apontroller = function($scope,DataSource) {
    var SOURCE_FILE = "guitars.xml";
    $scope.IMAGE_LOCATION = "http://rabidgadfly.com/assets/angular/xmlload/";
    xmlTransform = function(data) {
        console.log("transform data");
        var x2js = new X2JS();
        var json = x2js.xml_str2json( data );
        return json.guitars.guitar;
    };
    setData = function(data) {
        $scope.dataSet = data;
    };
    DataSource.get(SOURCE_FILE,setData,xmlTransform);
};*/
               



.factory('ptmov', ['$http', function($http) { 
  return $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20csv%20where%20url%3D'http%3A%2F%2Fdownload.finance.yahoo.com%2Fd%2Fquotes.csv%3Fs%3DALTR.LS%2CBCP.LS%2CBES.LS%2CBPI.LS%2CCFN.LS%2CCOMAE.LS%2CCOR.LS%2CCPR.LS%2CEDP.LS%2CEDPR.LS%2CEGL.LS%2CESO.LS%2CFCP.LS%2CGALP.LS%2CGLINT.LS%2CGPA.LS%2CIBS.LS%2CINA.LS%2CIPR.LS%2CJMT.LS%2CLIG.LS%2CMAR.LS%2CMCP.LS%2CNBA.LS%2CNOS.LS%2CORE.LS%2CPTC.LS%2CPTI.LS%2CRAM.LS%2CRED.LS%2CRENE.LS%2CSCP.LS%2CSCT.LS%2CSDCAE.LS%2CSEM.LS%2CSLBEN.LS%2CSNC.LS%2CSON.LS%2CSONC.LS%2CSONI.LS%2CSUCO.LS%2CSVA.LS%2CTDSA.LS%2CVAF.LS%26f%3Dnp2l1c1%26e%3D.csv%26format%3Dxml'%20and%20columns%3D'name%2Cchange%2Cpoints%2Cvpoints'&diagnostics=true&callback=") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}])
.controller('ptmov', ['$scope', 'ptmov', function($scope, ptmov) {
  ptmov.success(function(data) {
    var x2js = new X2JS();
    var jsonData = x2js.xml_str2json(data);
    var data = jsonData;
    $scope.fiver = data;
  })
}])




/*.controller('AccountCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }              var x2js = new X2JS();
            var data = x2js.xml_str2json(data);
  ];
})*/