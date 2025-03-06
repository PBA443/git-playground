const tiles = document.getElementById('view');

const evenDivs = tiles.querySelectorAll('div:nth-of-type(2n)');

console.log(evenDivs[0]);

for(let i = 0; i < evenDivs.length;i++){
  evenDivs[i].style.backgroundColor = 'red';
  evenDivs[i].style.width = '40px';
  evenDivs[i].style.height = '40px';
}

const textHeader = document.querySelector('header h1');

//console.log(textHeader);

textHeader.textContent = 'Page eka wena kageda';

console.log(evenDivs[0].parentElement);

console.log(evenDivs[0].parentElement.children);

console.log(evenDivs[0].parentElement.childNodes);

console.log(evenDivs[0].parentElement.lastElementChild);

console.log(evenDivs[0].nextSibling);

while(tiles.lastChild){
  tiles.lastChild.remove();
}

tiles.style.display = 'flex';
tiles.style.flexDirection = 'row';
tiles.style.flexWrap = 'wrap';

const createDivs = (parent,iter) =>{
  const newDiv = document.createElement('div');
  newDiv.textContent = iter;
  newDiv.style.backgroundColor = 'black';
  newDiv.style.color = 'white';
  newDiv.style.width = '100px';
  newDiv.style.height = '100px';
  newDiv.style.margin = '10px';
  newDiv.style.display = 'flex';
  newDiv.style.justifyContent = 'center';
  newDiv.style.alignItems = 'center';
  parent.append(newDiv);
}

for(let i =1;i<=12;i++){
  createDivs(tiles,i);
}

const block = tiles.querySelectorAll('div');



const doSomething = (obamu)=>{
  obamu.target.textContent='Ebuwa neda';
}

block[1].addEventListener('click',doSomething);

const header = document.querySelector('header');

header.addEventListener('mouseover',(event)=>{
  event.target.classList.toggle('toggleHeader');
});

header.addEventListener('mouseout',(event)=>{
  event.target.classList.remove('toggleHeader');
});
