
function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num=="0"){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getNumber(num);
	}	
}
function getNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
function reverseNumber(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		
		else{
			var output=getOutput();
			var history=getHistory();
			if(output==""&&history!=""){
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				output= output==""?output:reverseNumber(output);
                history=history+output;
                // document.body.addEventListener('keydown' , function(e){
                //     var keyCode = e.keyCode;
                //     if(keyCode === 13){
                //         if(this.id=="=" ){
                //             var result=eval(history);
                //             printOutput(result);
                //             printHistory("");
                //         }
                //         else{
                //             history=history+this.id;
                //             printHistory(history);
                //             printOutput("");
                //         }
                //     }
                //     });
				if(this.id=="=" ){
					var result=eval(history);
                    printOutput(result);
                    printHistory("");
				}
				else{
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		
	});
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumber(getOutput());
		if(output!=NaN){ 
			output=output+this.id;
			printOutput(output);
		}
	});
}


// document.body.addEventListener('keydown' , function(e){
// var keyCode = e.keyCode;
// if(keyCode === 13){
//     printOutput(result);
// }
// });