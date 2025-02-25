//test every function you make!!

console.log('Linked.')
//needs to be global
const body = document.getElementsByTagName('body');
// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	// console.log('1: makeMiddleEarth')
	
	// 1. create a section tag with an id of middle-earth / created the section
	const middleEarthElement = document.createElement('section');
	//now have to attach the element id to the section we just created
	middleEarthElement.setAttribute('id', 'middle-earth');
	// console.log(middleEarthElement);
	// 2. use a for loop to iterate over the lands array that does the following:
		lands.forEach( land => {
			// console.log(land);
	//   2a. creates an article tag (there should be one for each land when the loop is done)
			const landElement = document.createElement('article');
			// console.log(middleEarthElement);
	//   2b. gives each land article an `id` tag of the corresponding land name (${will pull the land names})
			landElement.setAttribute('id', `${land}`);
	//   2b. gives each land article an `id` tag of the corresponding land name
			const h1Tag = document.createElement('h1');
	//   2c. includes an h1 with the name of the land inside each land article
			h1Tag.innerHTML = `${land}`;
	//   2d. appends each land to the middle-earth section
			landElement.append(h1Tag);
			// console.log(h1Tag);
	
			middleEarthElement.appendChild(landElement);
		})
	// 3. append the section to the body of the DOM.
	body[0].appendChild(middleEarthElement);
}
// makeMiddleEarth();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	// console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitsList = document.createElement('ul');
	hobbitsList.id = "hobbitsUnorderedList"
	// console.log(hobbitsList);
	
	hobbits.forEach( names => {
		//have to create a list so that you can attach the class to it.		
		const hobbitClass = document.createElement('li');
		// give each hobbit a class of `hobbit`
		hobbitClass.setAttribute('class', `hobbit`);
		// console.log(names);
		//make a linst - then attach the class to the list - the append it to the hobbit
		// hint: create a 'ul' outside the loop into which to append the 'li's
		//creating the ordered list which I'll have to attach to the unordered list
		
		//connect the class to the unordered list
		hobbitsList.appendChild(hobbitClass)
		//I need the hobbits names to appear, so I need to add text
		hobbitClass.innerText = `${names}`;
		// console.log(friends);

		// console.log(friends);
//list needs to connect to class. then class needs to connect to body
		// console.log(hobbitClass)
		// hint: get 'The-Shire' by using its id

	})
	//this is how you connect the list of the hobbits to the shire, don't need to connect it to the whole body
	document.getElementById('The-Shire').appendChild(hobbitsList);
	// console.log(body);
}
// makeHobbits();


// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	// console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const ringContainer = document.createElement('div');
	//adding the id to the div I just created
	ringContainer.id ='the-ring';
	// console.log(ringContainer);

	// give the div a class of `'magic-imbued-jewelry'`
	//.className (in DOM className = class) replaces setAttribute - a more conscise way to create the variable to name it
	ringContainer.className = 'magic-imbued-jewelry';
	// console.log(ringContainer);

	// add the ring as a child of `Frodo`
	// let ring = document.getElementById('the-ring');

	//have to pull the list (don't need to create it again)
	let hobbitList = document.querySelector('ul');
	// console.log(hobbitList)
	//.children is a DOM manipulation thing - TA told me to do this
	let frodo = hobbitList.children[0];
	//need to pull from the hobbits array and the class/list
	
	frodo.appendChild(ringContainer);
	// console.log(frodo);
}
// keepItSecretKeepItSafe();

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddieUnorderedList = document.createElement('ul');
	// console.log(baddieUnorderedList);
	
	baddies.forEach( villians => {
		//have to create a list so that you can attach the class to it.		
		const baddieOrderedList = document.createElement('li');
		// give each of the baddies a class of "baddy"
		baddieOrderedList.class = `baddy`;
		console.log(baddieOrderedList);

		//connect the class to the unordered list
		baddieUnorderedList.appendChild(baddieOrderedList);

		//to add in their names
		baddieOrderedList.innerText = `${villians}`;
	})
	// this is how you connect the list of the villians to mordor.
	document.getElementById('Mordor').appendChild(baddieUnorderedList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	// console.log('5: makeBuddies')

	// create an `aside` tag
	const buddieCrew = document.createElement('aside');
	buddieCrew.id = "buddieAsside"
	// console.log(buddieCrew);
	// put an `unordered list` of the `'buddies'` in the aside
	const buddieUnorderedList = document.createElement('ul');
	buddieUnorderedList.id = "buddieUnorderedList"

	//need to connect the unordered list to he aside
	buddieCrew.appendChild(buddieUnorderedList)

	// insert your aside as a child element of `rivendell`

	buddies.forEach( friends => {
		//have to create a list so that you can attach the class to it.		
		const buddieOrderedList = document.createElement('li');
		// give each of the baddies a class of "buddies"
		buddieOrderedList.classList.add('buddies');
		// console.log(buddieOrderedList);

		//connect the class to the unordered list
		buddieUnorderedList.appendChild(buddieOrderedList);

		//to add in their names
		buddieOrderedList.innerText = `${friends}`;
	})

//this is how you connect the list of the hobbits to the shire, don't need to connect it to the whole body
document.getElementById('Rivendell').appendChild(buddieCrew);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	
	//have to pull the list (don't need to create it again)
	let hobbitList = document.getElementById('hobbitsUnorderedList');
	// console.log(hobbitList);
	// assemble the `hobbits` and move them to `rivendell`
	//I need to call hobbits and append them to rivendell
	const Rivendell = document.getElementById('Rivendell');
	// console.log(Rivendell)
	Rivendell.appendChild(hobbitList);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	// console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`

	//thing about how I gave the ring to frodo / just change the element
	let buddieCrew = document.getElementById('buddieUnorderedList');
	// console.log(buddieCrew);
	// console.log(hobbitList)
	let strider = document.getElementsByClassName('buddies')[3];
	// console.log(strider)

	strider.innerText = 'Aragorn';

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
	//need to grab all fellowship members - trying outside of function

// FIXME



function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  //creating the new div
  const theFellowship = document.createElement("div");
  //naming the div we just created with the id of fellowship
  // console.log(theFellowship)

  // console.log(Rivendell)
let Rivendell = document.getElementById("Rivendell");
let rivendellList = Rivendell.querySelectorAll("li");
  //iterate over hobbits and buddies seperately and .map them into theFellowship array


  //create new ul
  const theFellowshipUnorderedList = document.createElement("ul");
  theFellowshipUnorderedList.setAttribute("id", "the-fellowship");
  for (let i = 0; i < rivendellList.length; i++) {
    //append them inside the loop
	alert(`${rivendellList[i].innerText} has joined the fellowship`)
	theFellowshipUnorderedList.append(rivendellList[i])
  }
//   console.log(theFellowshipUnorderedList)
  //connect the new div with Rivendell
  theFellowship.append(theFellowshipUnorderedList);
  Rivendell.appendChild(theFellowship);

  //remove all elements inside this id
  document.getElementById('buddieAsside').remove();
  document.getElementById('hobbitsUnorderedList').remove();
  // console.log(fellowshipMembers)
  // after each character is added make an alert that they // have joined your party
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"
// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	
	let gandalf = document.getElementsByClassName('buddies')[0];
	gandalf.innerText = 'Gandalf the White';
	// console.log(gandalf)
	
	// apply the following style to the element, make the 
	// background 'white', 
	gandalf.style.backgroundColor = 'white'
	//add a grey border
	gandalf.style.border = '7px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("The horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!")
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	theFellowship = document.getElementById('the-fellowship');
	//remove boromir
	theFellowship.children[4].remove();
	// console.log(theFellowship[4]);	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	theFellowship = document.getElementById('the-fellowship');
	//grabbing frodo
	let frodo = theFellowship.children[4];
	//grabbing sam
	let sam = theFellowship.children[5];
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div');
	//adding the id to the div I just created
	mountDoom.id ='mount-doom';
	// console.log(mountDoom);

	document.getElementById('Mordor').appendChild(mountDoom);
	mountDoom.append(sam, frodo);
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div');
	//adding the id to the div I just created
	gollum.id ='gollum';
	document.getElementById('Mordor').appendChild(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	gollum.append(document.getElementById('the-ring'))
	

	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	document.getElementById('gollum').remove();
	// Move all the `hobbits` back to `the shire`
	allHobbits = document.querySelectorAll('.hobbit')
	theShire = document.getElementById('The-Shire');
	home = document.createElement('div')
	theShire.append(home);

	for (let i = 0; i < allHobbits.length; i++){
		home.append(allHobbits[i])
	}
	
}
// makeMiddleEarth()
// 	makeHobbits()
// 	keepItSecretKeepItSafe()
// 	makeBaddies()
// 	makeBuddies()
// 	leaveTheShire()
// 	beautifulStranger()
// 	forgeTheFellowShip()
// 	theBalrog()
// 	hornOfGondor()
// 	itsDangerousToGoAlone()
// 	weWantsIt()
// 	thereAndBackAgain()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
