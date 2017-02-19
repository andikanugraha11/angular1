var andikaAng = angular.module('andikaAng',[]);

andikaAng.controller('ListController', function ListController($scope){
	$scope.mahasiswas = [
		{
			nama	:"Andika Nugraha",
			kelas	:"3IA01"
		},
		{
			nama	:"Duhita Pradipta",
			kelas	:"2IA14"
		}
	];
});