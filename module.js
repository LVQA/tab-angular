(function(){
	var app = angular.module('myapp', []);
	app.controller('tab1', ['$scope', function($scope){
		//gán giá trị current_tab = 1
		$scope.current_tab = 1;
		//hàm đổi tab
		$scope.changeTab= function (index) {
			$scope.current_tab=index;
		};
		//kiểm tra tab có phải đang ở vị trí hiện tại ko 
		$scope.isactive = function (index) {
			return index === $scope.current_tab;
		};
	}]);
})();