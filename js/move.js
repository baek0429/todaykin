var TODAYKIN = (function(module){
	'use strict';
	module.move = {}; // sub-namespace under main namespace todaykin{} in todaykin.js
	var that = module.move;
	module.move.init = function(){
		that.UIMovementSet();
	};

	module.move.UIMovementSet = function(){
		$('#button-right').click(function(){
			$('#event-container').animate({left: "+=250px"});
		});
		$('#button-left').click(function(){
			$('#event-container').animate({left:"-=250px"});
		});
	};

	return module;
})(TODAYKIN);
