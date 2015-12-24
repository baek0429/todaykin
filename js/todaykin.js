var TODAYKIN = (function(){
	'use strict';
	var todaykin = {}; //top namespace under window
	var that = todaykin; // that = todaykin
	that.init = function(){
		that.getGlobalVariable();
		that.view.init(); 
		that.column.init();
		that.move.init();
	};

	that.getGlobalVariable = function(){
		that.gvariable = {};
		that.gvariable.columnCursor = 5;
	};
	return that;
})();

$(document).ready(function(){
	'use strict';
	TODAYKIN.init();
})