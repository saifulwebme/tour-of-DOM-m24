// 1. where to add 
const placesList = document.getElementById('places-list');
// 2. what to be add
const li = document.createElement('li');
li.innerText = 'Pahartoli bon'

// 3. add the chiled
placesList.appendChild(li);


// 1. where to add
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
// 2. What to be added
const h1 = document.createElement('h1');
h1.innerText = 'My Food List'
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biriyani'
ul.appendChild(li1)
const li2 = document.createElement('li');
li2.innerText = 'borhani'
ul.appendChild(li2)
const li3 = document.createElement('li');
li3.innerText = 'Salad'
ul.appendChild(li3)

section.appendChild(ul)

mainContainer.appendChild(section)




/// ser InnerHTML derectly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress Section </h1>
<ul>
    <li>T- shirt</li>
    <li>Lunggi</li>
    <li>Pant</li>
</ul>

`
mainContainer.appendChild(sectionDress);