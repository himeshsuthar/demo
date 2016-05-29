angular.module('demoApp')

	.factory('guestFactory',['$q','$http',function($q,$http){
		var obj = {};
		var defer = $q.defer();
		var res = function(response){defer.resolve(response);}
		var err = function(error){defer.reject(error);}

		obj.getAllEvents = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_events.php")
			.then(res,err);
			return defer.promise;
		}
		obj.getAllPostHolders = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_postholders.php")
			.then(res,err);
			return defer.promise;
		}
			
		obj.getAllTestimonials = function(){

			$http.get("http://www.vvprotaract.club/server/guest/get_events.php")
			.then(res,err);
			return defer.promise;
		}
		obj.addStudent = function(x){
			$http.post("http://132.140.160.119/demo/server/insert.php",x)
			.then(res,err);
			return defer.promise;
		}
		obj.updateStudent = function(x){
			$http.post("http://132.140.160.119/demo/server/update.php",x)
			.then(res,err);
			return defer.promise;
		}

		obj.deleteStudent = function(){
			$http.post("http://132.140.160.119/demo/server/delete.php")
			.then(res,err);
			return defer.promise;
		}

		obj.getStudent = function(){
			$http.get("http://132.140.160.119/demo/server/select.php")
			.then(res,err);
			return defer.promise;
		}

		obj.getAllStudent = function(){
			$http.get("http://132.140.160.119/demo/server/select.php?id")
			.then(res,err);
			return defer.promice;
		}
		return obj;
	}]);