var i=2,sum1=0,sum2=0;
	function f1(){
	//	for (var i = 2; i <=13 ; i++) {
			var id1,id2,categ1,categ2;
			id1 = Math.floor(Math.random()*4+1);
			id2 = Math.floor(Math.random()*12)+2;
			if(id1 == 1){
				categ1 = "c";
				categ2 = "clubs";
			}
			else if(id1 == 2){
				categ1 = "s";
				categ2 = "spades";
			}
			else if(id1 == 3){
				categ1 = "h";
				categ2 = "hearts";
			}
			else if(id1 == 4){
				categ1 = "d";
				categ2 = "diamonds";
			}
			if(id2>9){
				if(id2 == 10){
					document.getElementById("img"+i).src="myCards/jack_of_"+categ2+".png";
					sum1 += 10;
				}
				else if(id2==11){
					document.getElementById("img"+i).src="myCards/king_of_"+categ2+".png";
					sum1 += 10;
				}
				else if(id2==12){
					document.getElementById("img"+i).src="myCards/queen_of_"+categ2+".png";
					sum1 += 10;
				}
				else if(id2==13){
					document.getElementById("img"+i).src="myCards/ace_of_"+categ2+".png";
					sum1 += 11;
				}
			}
			else{
				document.getElementById("img"+i).src="myCards/"+ id2 +"_of_"+categ2+".png";
				sum1 += id2;
			}

			id1 = Math.floor(Math.random()*4+1);
			id2 = Math.floor(Math.random()*12)+2;
			if(id1 == 1){
				categ1 = "c";
				categ2 = "clubs";
			}
			else if(id1 == 2){
				categ1 = "s";
				categ2 = "spades";
			}
			else if(id1 == 3){
				categ1 = "h";
				categ2 = "hearts";
			}
			else if(id1 == 4){
				categ1 = "d";
				categ2 = "diamonds";
			}
			if(id2>9){
				if(id2 == 10){
					document.getElementById("img"+i+"d").src="myCards/jack_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==11){
					document.getElementById("img"+i+"d").src="myCards/king_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==12){
					document.getElementById("img"+i+"d").src="myCards/queen_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==13){
					document.getElementById("img"+i+"d").src="myCards/ace_of_"+categ2+".png";
					sum2 += 11;
				}
			}
			else{
				document.getElementById("img"+i+"d").src="myCards/"+ id2 +"_of_"+categ2+".png";
				sum2 += id2;
			}
			if(sum1==21){
				document.getElementById("winner").innerHTML+= "Player wins";	
				sum1=0;
				sum2=0;
			}
			else if(sum2==21){
				document.getElementById("winner").innerHTML+= "Dealer wins";	
				sum1=0;
				sum2=0;
			}
			else{
				if(sum1>21){
					document.getElementById("winner").innerHTML+= "Dealer wins";	
					sum1=0;
					sum2=0;
				}
				else if(sum2>21){
					document.getElementById("winner").innerHTML+= "Player wins";	
					sum1=0;
					sum2=0;
				}
			}
			if(sum1==0 && sum2==0){
				document.getElementById("winner").innerHTML+= "<br>Click Reset to play again";
				document.getElementById("hit").disabled = true;
				document.getElementById("stand").disabled = true;
				document.getElementById("double").disabled = true;
				document.getElementById("split").disabled = true;
				document.getElementById("surrender").disabled = true;
				document.getElementById("reset").onmouseout = miss_me();
				
			}
			i++;
	//	}
	}
	function miss_me(){
		document.getElementById("hit").style.backgroundColor = "#C31212";
		document.getElementById("split").style.backgroundColor = "#C31212";
		document.getElementById("double").style.backgroundColor = "#C31212";
		document.getElementById("surrender").style.backgroundColor = "#C31212";
		document.getElementById("stand").style.backgroundColor = "#C31212";
	}
	function reset(){
		document.getElementById("hit").disabled = false;
		document.getElementById("stand").disabled = false;
		document.getElementById("double").disabled = false;
		document.getElementById("split").disabled = false;
		document.getElementById("surrender").disabled = false;
		if(sum1==0 && sum2==0){
			for(var k=2;k<=13;k++){
				document.getElementById("img"+k).src="back.jpg";
				document.getElementById("img"+k+"d").src="back.jpg";
			}
			i=2;
			document.getElementById("winner").innerHTML = "";	
		}
		document.getElementById("hit").style.backgroundColor = "#4CAF50";
		document.getElementById("split").style.backgroundColor = "#4CAF50";
		document.getElementById("double").style.backgroundColor = "#4CAF50";
		document.getElementById("surrender").style.backgroundColor = "#4CAF50";
		document.getElementById("stand").style.backgroundColor = "#4CAF50";
	}
	function f2(){
		var id1,id2,j=i;
		while(sum2<17){	
			id1 = Math.floor(Math.random()*4+1);
			id2 = Math.floor(Math.random()*12)+2;
			if(id1 == 1){
				categ1 = "c";
				categ2 = "clubs";
			}
			else if(id1 == 2){
				categ1 = "s";
				categ2 = "spades";
			}
			else if(id1 == 3){
				categ1 = "h";
				categ2 = "hearts";
			}
			else if(id1 == 4){
				categ1 = "d";
				categ2 = "diamonds";
			}
			if(id2>9){
				if(id2 == 10){
					document.getElementById("img"+j+"d").src="myCards/jack_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==11){
					document.getElementById("img"+j+"d").src="myCards/king_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==12){
					document.getElementById("img"+j+"d").src="myCards/queen_of_"+categ2+".png";
					sum2 += 10;
				}
				else if(id2==13){
					document.getElementById("img"+j+"d").src="myCards/ace_of_"+categ2+".png";
					sum2 += 11;
				}
			}
			else{
				document.getElementById("img"+j+"d").src="myCards/"+ id2 +"_of_"+categ2+".png";
				sum2 += id2;
			}
			j++;
		}
		if(sum1==21){
			document.getElementById("winner").innerHTML+= "Player wins";	
			sum1=0;
			sum2=0;
		}
		else if(sum2==21){
			document.getElementById("winner").innerHTML+= "Dealer wins";	
			sum1=0;
			sum2=0;
		}
		else{
			if(sum1>21){
				document.getElementById("winner").innerHTML+= "Dealer wins";	
				sum1=0;
				sum2=0;
			}
			else if(sum2>21){
				document.getElementById("winner").innerHTML+= "Player wins";	
				sum1=0;
				sum2=0;
			}
			else{
				if(sum1>sum2){
					document.getElementById("winner").innerHTML+= "Player wins";	
					sum1=0;
					sum2=0;
				}
				else{
					document.getElementById("winner").innerHTML+= "Dealer wins";	
					sum1=0;
					sum2=0;
				}
			}
		}
			if(sum1==0 && sum2==0){
				document.getElementById("winner").innerHTML+= "<br>Click Reset to play again";
				document.getElementById("hit").disabled = true;
				document.getElementById("stand").disabled = true;
				document.getElementById("double").disabled = true;
				document.getElementById("split").disabled = true;
				document.getElementById("surrender").disabled = true;
			}
	}
	function f5(){
		document.getElementById("winner").innerHTML+= "Dealer";	
		sum1=0;
		sum2=0;
		document.getElementById("winner").innerHTML+= "<br>Click Reset to play again";
		document.getElementById("hit").disabled = true;
		document.getElementById("stand").disabled = true;
		document.getElementById("double").disabled = true;
		document.getElementById("split").disabled = true;
		document.getElementById("surrender").disabled = true;
	}