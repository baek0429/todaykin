var TODAYKIN = (function(){
	'use strict';
	var todaykin = {}; //top namespace under window
	var that = todaykin; // that = todaykin
	that.gvariable = {};
	that.init = function(){
		that.view.init(); 
		that.move.init();
		that.column.init();
	};
	return that;
})();

$(document).ready(function(){
	'use strict';
	TODAYKIN.init();
})