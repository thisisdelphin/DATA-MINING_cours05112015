/*
Alors là on passe à du processing en JavaScript, en utilisant la bibliothèque p5.js

On retrouve en effet les fonctions principales setup() et draw()

En plus là on va charger un fichier JSON pour récupérer des données
C'est l'API du site colours lovers où l'on retrouve des palettes proposées par des utilisateurs

Si tu veux explorer un JSON, installe un plugin appelé JSON View sur Chrome ou Firefox, ça structure les données

Le but est ici d'afficher une palette de l'API qui changera au clic, sur tout l'espace de la fenêtre
*/



// Création préalable de quelques variables
var data;
var paletteID = 0;


function preload(){
	// ici on charge des données avant le setup, et donc le fichier JSON qui se trouve dans data/colours.js
	// l'API chargée contient 100 palettes
	data = loadJSON("data/colours.json");

}

function setup(){
	// on crée un canvas de la taille de la fenêtre
	// on affiche les valeurs de la première donnée du JSON dans la console pour vérifier qu'il fonctionne
	createCanvas(windowWidth,windowHeight);
	console.log(data[0]); 
}

function draw() {
	// on met un background pour vérifier que le canvas prend toute la fenêtre
	background(127);
	// on charge les données colors de la variable paletteID créée préalablement, ici donc la palette 0
	var colors = data[paletteID].colors;
	// cette boucle permet d'afficher les couleurs de la palette dans la fenêtre, qui sont souvent 4 ou 5
	for (var i = 0; i < colors.length; i++) {
		// le unhex permet de transformer une couleur hexa (comme dans le JSON) en couleur RVB utilisable dans le JavaScript
		// en gros, une suite de caractère (par exemple f278c5) peut être assimilée à un tableau
		// substring permet de selectionner ici 2 caractères (on part de 0 pour s'arrêter juste avant 2, on prend donc f2 dans mon exemple, qui se transforme dans le RVB en 242)
		fill( unhex( [
			colors[i].substring(0,2),
			colors[i].substring(2,4),
			colors[i].substring(4,6)
			] ) ); // on remplit donc d'une couleur le rectangle
		noStroke(); // on enlève son contour
		rect(i*width/colors.length, 0, width/colors.length, height);
		// ce code veut dire que chaque couleur prend toute la hauteur de la fenêtre et 1/n de la largeur, avec n le nombre de couleurs de la palette
	};
}

function windowResized(){
	// cette fonction permet de recadrer le canvas automatiquement si la fenêtre change de taille
	resizeCanvas(windowWidth,windowHeight);
}

function mousePressed () {
	// au clic, on change la palette
	// on crée donc un random entre 0 et 100 pour changer l'ID de la palette
	// floor permet de tronquer le random (qui donne par défaut des nombres à virgules)
	paletteID = Math.floor(Math.random()*100);
	// ici, on change le HTML pour donner en h1 le nom de la palette chargée
	// dans le HTML, le h1 a un id=grostitre, on vient donc chercher cet id grâce à document.getElementById
	var h1 = document.getElementById("grostitre");
	// dans le HTML, on charge donc dans le h1 le titre (title) de la palette
	h1.innerHTML = data[paletteID].title;
}