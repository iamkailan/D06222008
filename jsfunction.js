function myInnerProduct(v1, v2){
    var num1 = v1.length;
    var num2 = v2.length;
    if (num1 != num2){
	return "Dimensions not equal.";
    }
    var ans = 0;
    for (i = 0; i < num1; i++){
	ans += v1[i] * v2[i];
    }

    return "inner prodcut of " + "(" + v1 + ")" + " & " + "(" + v2 + ") = " + ans;
}


function d3select(id) {
	return document.getElementById(id);
}
