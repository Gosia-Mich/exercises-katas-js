function calculateGrade(a,b,c) {
	var mean=(a+b+c)/3;
	if(mean>100||mean<0){
		return "InvalidGrades";
	}
	else if(mean>=90){
		return "A";
	}
	else if(mean>=80){
		return "B";
	} 
	else if(mean>=70){
		return "C";
	} 
	else if(mean>=60){
		return "D";
	} 
	else if(mean>=0){
		return "F";
	}
}
