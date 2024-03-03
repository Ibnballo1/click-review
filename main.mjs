import people from "./people.mjs";

const nameLists = document.getElementById('names');
const detailsSection = document.getElementById('details');

people.map((person) => {
  const names = document.createElement('p');
  const {name} = person
  names.innerText = name
  names.addEventListener('click', ()=> {
    detailsSection.innerHTML = ''
    Object.keys(person).map((key)=>{
      const h2 = document.createElement('h2');
      const p = document.createElement('p');
      h2.innerText = key
      p.innerText = person[key]
      detailsSection.append(h2, p)
    })
  })
  nameLists.append(names)
})
