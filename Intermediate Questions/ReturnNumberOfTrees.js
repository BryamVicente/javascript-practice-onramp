/*
Mubashir needs your help to plant some trees. 
He can give you three parameters of the land:

width of the land w
length of the land l
gap between the trees g
You have to create an algorithm to return the 
number of trees which can be planted 
on the edges of the given land in a symmetrical 
layout shown below (unsymmetrical 
gap = x, tree = o, gap = -)
*/

function plantTrees(w, l, g) {
	let m = 2 * (w + l) - 4;
	g++;
	return m % g > 0 ? 0 : m / g;
}

console.log(plantTrees(3,4,5))