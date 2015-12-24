var TODAYKIN = (function(module){
	'use strict';
	module.column = {};
	var that = module.column;

	that.init = function(){
		that.variable = {
			columnWidth : 350,
			columnHeight: 200,
			a_columnWidth: 0,
			a_columnHeight: 0,
			defaultColumnN : 4,
			columnN:0,
			rowN:[]
		};
		that.getEachColumnMeasure();
		that.getColumnN(); // redefine that.variable.columnN
		that.getRowN();
		that.createEmptyColumnNRow(); // decided by screen
	};

	that.clean = function(){
		$("#event-container > div").remove();
	}

	that.createEmptyColumnNRow = function(){
		var adjustedWidth = that.variable.a_columnWidth;
		var adjustedHeight = that.variable.a_columnHeight;
		var maxHeight = 0;
		var columnN = that.variable.columnN; // shorcut
		for (var i =0 ; i<columnN+1;i++){
			if (maxHeight<adjustedHeight*(that.variable.rowN[i])){
				maxHeight = adjustedHeight*(that.variable.rowN[i]);
			}
			$("#event-container").append('<div class=column' + i + ' id=column><h1>'+i+'</h1></div>')
			$('.column'+i).css("width",adjustedWidth);
			for(var j =0 ; j<that.variable.rowN[i];j++){
				$('.column'+i).append('<div class=row'+j+'>'+"row"+'</div>')
				$('.column'+i+" "+'.row'+j)
				.css("height",adjustedHeight)
				.css("width",adjustedWidth);
			};
		};
		console.log(maxHeight);
		$('#event-container > #column').css("minHeight",maxHeight);
	};

	function Column(width,height){
	}

	that.addColumn = function(){
	}

	that.getRowN = function(){
		that.variable.rowN = [3,1,2,4,8,12,1,2,3,4]
	}
	that.getColumnN = function(){
		that.variable.columnN = parseInt(module.gvariable.width_body / that.variable.a_columnWidth); // to int.
	}

	that.getEachColumnMeasure = function(){
		that.variable.a_columnWidth = that.variable.columnWidth*module.gvariable.ratio;
		that.variable.a_columnHeight = that.variable.columnHeight*module.gvariable.ratio;
	}

	return module;
})(TODAYKIN);