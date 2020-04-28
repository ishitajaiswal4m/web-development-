function average(scores){
	var sum=0;
	scores.forEach(function(score){
		sum=sum+score;
	});
	var avg=sum/scores.length;
	return Math.round(avg);
}
var scores=[90,98,89,100,100,86,94];
console.log(average(scores));