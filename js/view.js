var TODAYKIN = (function(module){
	'use strict';

	module.view ={
		init:function(){
			var that = this; // that = module.view;
			that.getViewVariable();
			that.getBodyMeasure();
			that.applyMeasureToDiv();

			window.onresize = function(event){
				that.resizeEventCalled();
			};
		},
		applyMeasureToDiv : function(){
			$('.widewidth').css("width",module.gvariable.width_body);
			$('#button-container').css("width",module.gvariable.width_body);
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
			that.applyMeasureToDiv();
			module.DrawColumns();
		}
	};

	return module;
})(TODAYKIN);