var TODAYKIN = (function(){

	var todaykin = {}; //top namespace
	var that = todaykin // that = todaykin
	that.init = function(){ 
		that.move.init();
	}
	return todaykin;
})();

$(document).ready(function(){
	'use strict';
	TODAYKIN.init();
})