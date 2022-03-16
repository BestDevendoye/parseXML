import chargeDonnes from './chargement.js'

const DEVISES = chargeDonnes()

console.log(DEVISES.gbp)


const listeDevises = Object.keys(DEVISES)
console.log(listeDevises)
const fragment = document.createDocumentFragment()

for ( const devise of listeDevises)
{
    const taune = DEVISES[devise]
    const diveElement = document.createElement('div')
    diveElement.innerHTML = `<div  class="devise">
    <input type="number" step="0.0001" id="${devise}-euro" value="1" >
    <span>EURO</span>
    <span><= => </span>
    <input type="number"  step="0.0001" id="euro-${devise}"  value="${taune}"  > 
    <span>${devise}</span>
    </div>
    <div  id="time"></div>`
    fragment.appendChild(diveElement)
}

const contenair = document.getElementById('contenair')
contenair.appendChild(fragment)

const eurid = document.getElementById('id-euro')
const gpid = document.getElementById('id-gp')
gpid.value = DEVISES.gbp

eurid.addEventListener('input', ()=>
{
    //const taux = gpid.getAttribute('data-taux')
    const valeur = eurid.value
    const nombre = parseFloat(valeur)
   // const realvaleur = parseFloat(taux)

    const resultat = nombre * DEVISES.gbp.toFixed(5)
    newresultat = resultat.toFixed(5)
     
    gpid.value = newresultat



    
})



gpid.addEventListener('input' , ()=>
{

  //  const taux = gpid.getAttribute('data-taux')
    const  gpid1 = gpid.value
   // const newtaux = parseFloat(taux)
    const newgpid = parseFloat(gpid1)
    const newresultat = newgpid * DEVISES.gbp.toFixed(5)
    const newconversion = newresultat.toFixed(5)
    
    eurid.value = newconversion

})