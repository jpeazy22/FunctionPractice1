function tripleFive(){
	for(i = 0; i <= 2; i++) {
		return "Five!";
	}
}
console.log(tripleFive());


var word = 'hello'
function lastLetter(){
	var last = word.charAt(word.length-1);
	return last;
}
console.log(lastLetter());


//var number = 3
function square(number){
	return number * number;
}
console.log(square(3));


function negate(number) {
	return number * -1;
}
console.log(negate(5));


function toArray(item1, item2, item3){
	//console.log(item1, item2, item3);
	var array = [];
	array.push(item1);
	array.push(item2);
	array.push(item3);
	return array ;
}
console.log(toArray(1, 4, 5));



function startsWithA(word){
	return word.charAt(0) === 'A';
}
console.log(startsWithA('Bear'));



function excite(string){
	return string + "!!!";
}
console.log(excite('yes'));


function sun(hasSun){
	var str = hasSun;
	var n = str.indexOf('sun');
	if(n >= 0){
		return true;
	} else {
		return false;
	}
}
console.log(sun('afternoon'));


function tiny(i){
	if(i < 1 && i > 0){
		return true;
	} else {
		return false;
	}
}
console.log(tiny(0.3));




function getSeconds(){

}
modulus returns the remainer1







