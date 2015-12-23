var TODAYKIN = (function(module){
	module.move = {}; // sub-namespace under main namespace todaykin{} in todaykin.js

	module.move.init = function(){
		var that = this;
		that.UIMovementSet();
	};

	module.move.UIMovementSet = function(){
		$("button").click(function(){
			$('#horizontalMovingBox').animate({left: '250px'});
		});
	};

	return module
})(TODAYKIN);
