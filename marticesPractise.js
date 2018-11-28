var k = [[1,2],[3,4]];
for(var i =0 ; i<k.length; i++){
	for(j = 0; j<k[i].length; j++)
		console.log(k[i][j]);
}

var kk = [[[1,2,3],[4,5,6],[7,8,9]]];
for(var i=0; i<kk.length; i++){
	for(j=0; j<kk[i].length;j++){
		for(k=0; k<kk[i][j].length;k++){
			console.log(kk[i][j][k]);
		}
	}
}

var kk = [[[1,2,3],[4,5,6],[7,8,9]]];
for(var i=0;i<kk.length;i++){
	// console.log(kk[i])
	for( var j=0;j<kk[i].length;j++){
		console.log(kk[i][j])
		for(var x=0;x<kk[i][j].length;x++){
			console.log(kk[i][j][x])
		}
	}
}

var matrix1 = [[1,2],[3,4]];
var matrix2 = [[6,7],[9,0]];
var summat = [[],[]];
for (var i=0;i<matrix1.length;i++){
	for(var j=0;j<matrix1[i].length;j++){
		summat[i][j] = matrix1[i][j] + matrix2[i][j];
	}
}
console.log(summat)

var matrix1 = [[[1,2,1],[3,4,2],[1,3,5]]];
var matrix2 = [[[6,7,3],[9,0,2],[4,7,9]]];
var matrix3 = [[[3,4,2],[9,4,1],[4,6,1]]];
var summat = [[[],[],[]]];
for (var i=0;i<matrix1.length;i++){
	for(var j=0;j<matrix1[i].length;j++){
		for(var k =0;k<matrix3[i][j].length;k++){
			summat[i][j][k] = matrix1[i][j][k] + matrix2[i][j][k] + matrix3[i][j][k];
		}
	}
}
console.log(summat);
