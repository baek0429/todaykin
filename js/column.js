var TODAYKIN = (function(module){
	'use strict';
	module.column = {};
	var that = module.column;

	that.init = function(){
		that.variable = {
			def_columnWidth : 350,
			def_columnHeight: 200,
			a_columnWidth: 0,
			a_columnHeight: 0,
			defaultColumnN : 4,
		};
		that.columnsInit(); // initiate variables
		// module.getColumns(); // get columns
		module.DrawColumns(); // draw it
	};

	that.columnsInit = function(){
		that.cleanColumns(); // clean
		that.getSampleColumns(); //samples
		that.getSampleRows();
	};

	// get samples
	that.getSampleColumns = function(){
		while (that.columns.length<15) {
			var column = that.newColumn(that.variable.def_columnWidth,that.variable.def_columnHeight);
			that.addColumnToColumns(column);
		};
	};
	that.getSampleRows = function(){
		$.each(that.columns,function(i,v){
			while(Math.random()<0.9){
				var row = that.newRow(350,400);
				that.addRowToColumn(v,row);
			}
		});
	};

	// global function variable to parse the column infos and create columns
	// can be called in other modules.
	// TODO: parsing data from server.
	module.GetColumns = function(){
	};

	module.DrawColumns = function(){
		var columns = that.columns // copy.
		var sumColumnWidth = 0;
		var cursor = module.gvariable.columnCursor;
		console.log(cursor);
		$("#event-container > div").remove();
		$.each(columns,function(i,column){
			$('event-container').css("left",0);
			if(i<cursor){ // ignore before cursor
				return true; // continue.
			}
			that.getAdjustedColumnWidthHeight(column); 
			sumColumnWidth = (sumColumnWidth + that.variable.a_columnWidth);
			if(sumColumnWidth > 0.75*module.gvariable.width_body  ){ // ignore after 
				$('.columnviewwidth').css("width",sumColumnWidth - that.variable.a_columnWidth);
				return false;
			}
			$("#event-container").append('<div id=column'+i+'><h1>'+i+'</h1></div>')
			$('#column'+i).css("width",that.variable.a_columnWidth).css("height",1500);
			$.each(column.rows,function(j,row){	
				$('#column'+i).append('<div id=row'+j+'>'+(row.title)+'</div>')
				$('#column'+i+' #row'+j)
				.css("height",that.variable.a_columnHeight)
				.css("width",that.variable.a_columnWidth);
			});
		});
	}

	that.relocateIfResize = function(){
		var cursor = module.gvariable.columnCursor;
		var sumWith = 0;
		$.each(that.columns,function(i,v){
			if(cursor >= i){
				return;
			}else{
				sumWith = sumWith + v.width;
				sumWith = sumWith*module.gvariable.ratio;
			}
		})
		$("#event-container").css("left", sumWith);
	}

	that.getAdjustedColumnWidthHeight = function(column){
		that.variable.a_columnWidth = column.width*module.gvariable.ratio;
		that.variable.a_columnHeight = column.height*module.gvariable.ratio;
	}

	module.getColumnWidthAtCursor = function(cursor){
		var width = that.columns[cursor].width*module.gvariable.ratio; //that.variable.a_columnWidth;
		var height = that.columns[cursor].height*module.gvariable.ratio; //that.variable.a_columnWidth;
		return [width,height];
	}

	// with following function I can make {that}.[columns].{column}.[rows].{row} structure;
	// instead of column constructor, it has creator function
	// it is not wise nor convenient to have a constructor considering the framework.
	that.newColumn = function(width,height){
		return {width: width, height:height, rows:[]}
	};

	// similarly constructor
	that.newRow = function(width,height){
		return {title:Math.random(), width:width, height:height}
	};

	// column added to []columns
	that.addColumnToColumns = function(column){
		that.columns.push(column);
	};

	// add the row to the column.
	that.addRowToColumn = function(column,row){
		column.rows.push(row)
	};

	// withe following functions getting global variable needed to create column
	that.getEachColumnMeasure = function(){
		that.variable.a_columnWidth = that.variable.columnWidth*module.gvariable.ratio;
		that.variable.a_columnHeight = that.variable.columnHeight*module.gvariable.ratio;
	};

	// cleaning existing columns;
	that.cleanColumns = function(columns){
		that.columns = [];
	};

	that.getRowN = function(){
		that.variable.rowN = [3,1,2,4,8,12,1,2,3,4]
	};
	that.getColumnN = function(){
		that.variable.columnN = parseInt(module.gvariable.width_body / that.variable.a_columnWidth); // to int.
	};
	return module;
})(TODAYKIN);