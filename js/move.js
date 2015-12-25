var TODAYKIN = (function(module){
	'use strict';
	module.move = {}; // sub-namespace under main namespace todaykin{} in todaykin.js
	var that = module.move;
	that.init = function(){
		that.UIMovementSet();
	};

	that.moveRight = function(){
		var info = module.getColumnWidthAtCursor(module.gvariable.columnCursor); // [width,height] at cursor.
		$('#event-container').animate({left: "+="+info[0]},500, function() {
			$('#event-container').css("left",0);
			module.gvariable.columnCursor--;
			module.DrawColumns();
		});
	}
	that.moveLeft = function(){
		var info = module.getColumnWidthAtCursor(module.gvariable.columnCursor); // [width,height] at cursor.
		$('#event-container').animate({left:"-="+info[0]},500, function() {
			$('#event-container').css("left",0);
			module.gvariable.columnCursor++;
			module.DrawColumns();
		});
	}

	module.move.UIMovementSet = function(){
		$('#button-right').click(that.moveRight);
		$('#button-left').click(that.moveLeft);
	};

	return module;
})(TODAYKIN);
