const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// ESEMPIO TEMPLATE ICONE
/* 
<div class="icon">
     <i class="fas fa-cat"></i>
     <div>
         CAT
     </div>
</div> 
*/



// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.

//FUNZIONE CHE POPOLA UN CONTAINER CON LE ICONE.
//l'argomento iconsArray corrisponde ad un array di oggetti, ogni oggetto è un icona.
//l'argomento container sarà un oggetto jQuery che rappresenta l'elemento in cui stampare le icone
// la funzione non ha return. 

function printIcons(iconsArray, container) {
	//ciclo forEach per scrivere le icone nel container

	iconsArray.forEach((element) => {
		//console.log(element);
		
		//destrutturiamo element per leggere le informazioni
		const {name, prefix, family} = element;
		
		const iconElementHTML = 
		`
		<div class="icon">
			<i class="${family} ${prefix}${name}"></i>
			<div>
				${name}
			</div>
		</div>
		`;

		container.append(iconElementHTML);
	});
}

const iconsContainer = $('#icons-container');
printIcons(icons, iconsContainer );

// Milestone 2
// Coloriamo le icone per tipo



// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone