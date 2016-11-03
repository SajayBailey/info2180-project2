window.onload = function (){
	var puzzlearea = $("#puzzlearea");
	var areaChildren = puzzlearea.children();
	var explanation = $(".explanation");
	var controls = $("#controls");
	Place();
	var shuffle = document.getElementById("shufflebutton");


		//empty tile location
	var emptyTile = {x: 300, y:300};
	

	for (index = 0, len = areaChildren.length; index < len; ++index) {
		areaChildren[index].addEventListener("click", move);
	}
	
	
	
	function Place(){
		
		//add puzzlepiece class to tiles
		for (var i = 0; i < areaChildren.length; i++){
			areaChildren[i].setAttribute("class", "puzzlepiece");
		}
		
		//Set up tiles with image background
		var p = 0, y = 0, x = 0 ;
		
		if (p < 4){
			for (var p = 0; p < 4; p++){ 
				areaChildren[p].style.top = y + "px";
				areaChildren[p].style.left = x + "px";
				areaChildren[p].style.backgroundPosition = -x+'px ' + y+'px';
				x = x + 100;
				
			}
		}
		if (p < 8){
			y = 100;
			x = 0;
			for (var p = 4; p < 8; p++){ 
				areaChildren[p].style.top = y + "px";
				areaChildren[p].style.left = x + "px";
				areaChildren[p].style.backgroundPosition = -x+'px ' + '300px';
				x = x + 100;
			
			}
		}
		
		if (p < 12){
			y = 200;
			x = 0;
			for (p = 8; p < 12; p++){ 
				areaChildren[p].style.top = y + "px";
				areaChildren[p].style.left = x + "px";
				areaChildren[p].style.backgroundPosition = -x+'px ' + y+'px';
				x = x + 100;
				
			}
		}
		
		if (p < 15){
			y = 300;
			x = 0;
			for (p = 12; p < 15; p++){
				areaChildren[p].style.top = y + "px";
				areaChildren[p].style.left = x + "px";
				areaChildren[p].style.backgroundPosition = -x+'px ' + '100px';
				x = x + 100;
			}
			
		}
		
	}
	
	shuffle.onmousedown = function() {
		for (var m = 0; m < areaChildren.length; m++)
		{areaChildren[m].move};
		;
		}
			
           
            
			
	
	
	function move (){
		//check if piece is next to empty space.
		if ((parseInt(this.style.top) == emptyTile.y && (Math.abs((parseInt(this.style.left) - emptyTile.x)) == 100)) || 
		(parseInt(this.style.left) == emptyTile.x && (Math.abs((parseInt(this.style.top) - emptyTile.y)) == 100)))
		{
			//highlight piece to be moved.
			this.onmouseover = function(){this.className += " movablepiece"};
			
			//move piece to empty space
			var temp = {x: this.style.left, y: this.style.top};
			this.style.top = emptyTile.y + "px";
			this.style.left = emptyTile.x + "px";
			emptyTile.y = parseInt(temp.y);
			emptyTile.x = parseInt(temp.x);
		}else{
			this.className ="puzzlepiece";
		}
		/*
		this.onmouseout = function (){
				this.className ="puzzlepiece";
			}*/
		
			
	}
	

}