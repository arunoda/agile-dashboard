app.directive('dashboard', function() {
	return {
	    priority: 0,
	    templateUrl: '/html/panels/dashboard.html',
	    replace: true,
	    transclude: true,
	    restrict: 'EA',
	    scope: true,
	    controller: function($scope, $element, $attrs, $transclude) {
			console.log("in dashboard")
		}
	};
});