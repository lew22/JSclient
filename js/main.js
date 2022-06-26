
const Myform = document.getElementById("Myform");


const body = document.querySelector('body')
const tbody = document.querySelector('tbody')
const btnenviar = document.querySelector('#btnenviar')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const opcion = document.querySelector('#opcion')


/*crud*/

body.onload = () =>{

    var trarr = []
    const infos = getInfo()
    console.log(infos)
    
    infos.forEach((u) => {
        //console.log(u)
        const tr = createtr(u)
        trarr.push(tr)      
    })
    tbody.appendChild(...trarr)
}

function createtr(u){
    const tr = document.createElement('tr')
    const tdnombre= document.createElement('td')
    tdnombre.textContent = u.nombre


    const tdapellido=document.createElement('td')
    tdapellido.textContent = u.apellido


    const tdopcion=document.createElement('td')
    tdopcion.textContent = u.opcion

    tr.append(tdnombre,tdapellido,tdopcion)

    return tr
}

btnenviar.onclick = (e) =>{
    const inombre=nombre.value
    const iapellido=apellido.value
    const iopcion =opcion.value
    console.log(inombre,iapellido,iopcion)


    const newInfo = createInfo(inombre,iapellido,iopcion)
    const tr = createtr(newInfo)
    tbody.appendChild(tr)
    e.preventDefault()

}




