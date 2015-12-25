var TODAYKIN = (function(module){
	'use strict';
	module.move = {}; // sub-namespace under main namespace todaykin{} in todaykin.js
	var that = module.move;
	that.init = function(){
		that.UIMovementSet();
	};

	that.moveRight = function(){
		if(module.gvariable.columnCursor == 0){
			alert("nope, there is no column to show");
			return;
		}
		var info = module.getColumnWidthAtCursor(module.gvariable.columnCursor); // [width,height] at cursor.
		$('#event-container').animate({left: "+="+info[0]},500, function() {
			$('#event-container').css("left",0);
			module.gvariable.columnCursor--;
			module.DrawColumns();
		});
		return;
	}
	that.moveLeft = function(){
		if(module.gvariable.columnCursor == module.column.columns.length -1 ){
			alert("nope, there is no column to show");
			return;	
			// if there is more to show. parse and draw again.
		}
		var info = module.getColumnWidthAtCursor(module.gvariable.columnCursor); // [width,height] at cursor.
		$('#event-container').animate({left:"-="+info[0]},500, function() {
			$('#event-container').css("left",0);
			module.gvariable.columnCursor++;
			module.DrawColumns();
		});
		return;
	}

	module.move.UIMovementSet = function(){
		$('#button-right').click(that.moveRight);
		$('#button-left').click(that.moveLeft);
	};

	return module;
})(TODAYKIN);
