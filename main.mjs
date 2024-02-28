import people from "./people.mjs";

const nameLists = document.getElementById('names');

const listDetails = `${
  people.map((person, index) => {
    const names = document.createElement('p');
    const ul = document.createElement('ul');
    const li = document.createElement('li');

    names.addEventListener('click', ()=> {
      ul.classList.toggle('dp-none', 'dp-flex')
    })
    Object.keys(person).map((key) => {
      const a = document.createElement('a');
      a.innerText = key
      a.style.display='block'
      li.appendChild(a)
    })
    ul.appendChild(li)
    
    names.innerText = person.name
    nameLists.append(names, ul)
  })
}`
