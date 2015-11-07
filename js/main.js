/*
Dans main.js on a fait des expérimentations à voir dans la console
*/

// création de quelques variables et affichage dans la console
var maVariable = 15;
var maVariable = 20;
var maVariable = maVariable + 10;
var maVariable = "du texte";
console.log( maVariable );


// création d'une fonction sayWesh avec un attribut name
// cette fonction affichera Wesh "name" ! dans la console JS
function sayWesh(name) {
	console.log("Wesh " + name + " !");
};

// ici je crée une variable monNom
// quand j'appelle la fonction sayWesh, l'attribut prend les données de la variable (ici Delphin)
var monNom = "Delphin";
sayWesh( monNom );

// ou alors je peux mettre directement du texte
sayWesh("Léa");


// on crée un tableau appelé array avec 5 valeurs : 1, 2, 3, 4 et 5
var array = [1,2,3,4,5];
console.log(array); // j'affiche le tableau dans la console
console.log("longueur", array.length); // j'affiche la longueur du tableau, c-à-d 5
console.log(array[0]); // j'affiche la première valeur, c-à-d 1
console.log(array[array.length-1]); // j'affiche la longueur -1


// création d'une boucle pour afficher les valeurs du tableau *2
for (var i = 0; i <array.length; i++){
	console.log(array[i]*2);
};

// création d'une fonction random
// random donne un nombre entre 0 et 1
// je multiplie par max pour avoir un nombre au hasard entre 0 et max
function random1(max){
	return Math.random()*max;
}

// ici, je veux un nombre au hasard entre min et max
// cette petite formule permet d'avoir le bon résultat
function random2(min, max){
	return min+(max-min)*Math.random();
};


// création d'un 2e tableau appelé array2
// push permet d'entrer des valeurs dans le tableau
var array2 =[];
array2.push(5); 
array2.push(random1(30)); // un nombre au hasard entre 0 et 30
array2.push(random2(300, 500)); // un nombre au hasard entre 300 et 500
console.log(array2); // j'affiche les valeurs du tableau, c-à-d 5, un nbre entre 0 et 30 et un nbre entre 300 et 500


// création d'une variable contenant des données type JSON (ce qu'on trouve dans les APIs)
// en gros on donne plusieurs attributs qu'on peut imbriquer les uns dans les autres
// chaque attribut est en fait une variable, et peut donc être du texte, un nombre, un tableau, un booléen etc

// ici ma variable auteur comprend plein d'attributs, comme le nom, l'âge, la tête etc
// on peut voir que l'on peut imbriquer les niveaux, comme dans animaux, ou chaque valeur du tableau a elle-même des attributs (Nicki et Julian)
var auteur = {
	nom: "Delphin",
	age: 21,
	jambes: 2,
	tete: true,
	loisirs: ["scoutisme","football américain","design"],
	animaux: [
		{
			nom: "Nicki",
			type: "chat",
			age: 3
		},
		{
			nom: "Julian",
			type: "lémurien",
			age: 8
		}

	]
};


// on affiche ce que contient la variable auteur
console.log(auteur);
console.log(auteur.nom);
console.log(auteur.age);
console.log(auteur.tete);
console.log(auteur.loisirs[1]);
/*console.log(auteur.animal);
console.log(auteur.animal.nom);

var chat = auteur.animal;
console.log(chat.nom);
console.log(chat.age);
console.log(chat.type);*/

console.log(auteur.animaux[0].nom);
console.log(auteur.animaux[1].nom);


// petit exercice où il fallait créer une fonction et retourner deux fois sa valeur
function foisDeux(unNombre){
	return unNombre*2;
};

console.log(foisDeux(47));


// quelques exemples d'utilisation des calculs dans une fonction
function multiplyAndAdd(a,b){
	var m = a*b;
	var sum = a+b;
	return m+sum;
};

console.log(multiplyAndAdd(4,8));