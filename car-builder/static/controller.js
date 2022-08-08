
var app = angular.module('nebula', []);

app.controller('control', [ '$scope', '$http', '$interval', '$window', function($scope, $http, $interval, $window) {
	
	    $interval( function(){ $scope.checkVeiculoReady(); }, 5000);
	    
	    $scope.key;
	    $scope.solicitado = false;
	    $scope.showdialog = true;
		$scope.bloco = { 
		    'modelo': null,
			'cor': null,
			'interior': null,
			'construido': false
		};
		$scope.contador = 0;
	    
	    $scope.blockchain_ip = "http://127.0.0.1:2222";	    
    	
	    
		$scope.checkVeiculoReady = function() {
			
		    //TODO CHAMA PERIODICAMENTE A URL RETRIEVE DO BLOCKCHAIN E TESTA SE O VEICULO FOI CONSTRUIDO
			//TODO Se o valor construido for alterado para true, apresenta o botão solicita seguro
			// $http.get($scope.blockchain_ip + '/bloco').then(function(response) {
		    //         $scope.bloco = response.data;
		    //     });
				$scope.contador++;
    	}  	 
		
    	$scope.modelo = function(modelo) {
		    $scope.bloco.modelo = modelo;
			alert(JSON.stringify($scope.bloco));
    	}   	
	   
    	$scope.createCar = function() {
			
			//TODO TESTA SE OS VALORES modelo, cor e intterior estão setados (não são nulos) e chama a URL do blockchain para inserir no banco
		    // $http.get($scope.blockchain_ip + '/position').then(function(response) {
		    //         $scope.space = response.data;
		    //     });
			alert('veiculo sendo criado');
    	}
    	
    	$scope.solicitaSeguro = function() {
			
			//TODO Pede para seguradora gerar uma apólice para este veículo
		    // $http.get($scope.blockchain_ip + '/position').then(function(response) {
		    //         $scope.space = response.data;
		    //     });
			alert('veiculo sendo criado');
    	}
		
    	$scope.hasFinished = function() {
			
			//TODO esta rotina deve voltar true quando o veículo estiver construido
		    // $http.get($scope.blockchain_ip + '/position').then(function(response) {
		    //         $scope.space = response.data;
		    //     });
			return $scope.contador >= 5;
    	}
		
   }]);
