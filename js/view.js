var TODAYKIN = (function(module){
	'use strict';

	module.view ={
		init:function(){
			var that = this; // that = module.view;
			that.getViewVariable();
			that.getBodyMeasure();

			window.onresize = function(event){
				that.resizeEventCalled();
			};
		},
		getBodyMeasure : function(){
			module.gvariable.width_body = $('body').width();
			module.gvariable.height_body = $('body').height();
		},
		getViewVariable: function(){
			var that = this;	
			module.gvariable.ratio = window.devicePixelRatio;			
		},
		resizeEventCalled: function(){
			var that = this;
			that.getViewVariable();
			that.getBodyMeasure();
			module.DrawColumns();
		}
	};

	return module;
})(TODAYKIN);