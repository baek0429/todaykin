var TODAYKIN = (function(module){
	'use strict';
	module.move = {}; // sub-namespace under main namespace todaykin{} in todaykin.js
	var that = module.move;
	module.move.init = function(){
		that.UIMovementSet();
	};

	that.moveRight = function(){
		$('#event-container').animate({left: "+=250px"});
		module.gvariable.columnCursor--;
		module.DrawColumns();
	}
	that.moveLeft = function(){
		$('#event-container').animate({left:"-=250px"});
		module.gvariable.columnCursor++;
	}

	module.move.UIMovementSet = function(){
		$('#button-right').click(that.moveRight);
		$('#button-left').click(that.moveLeft);
	};

	return module;
})(TODAYKIN);
