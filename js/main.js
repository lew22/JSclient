
const Myform = document.getElementById("Myform");


const body = document.querySelector('body')
const tbody = document.querySelector('tbody')
const btnenviar = document.querySelector('#btnenviar')
const cmd = document.querySelector('#cmd')
const nombre = document.querySelector('#nombre')
const apellido = document.querySelector('#apellido')
const opcion = document.querySelector('#opcion')

const btneditar = document.querySelector('#btneditar')
const btneliminar = document.querySelector('#btneliminar')

/*crud*/

body.onload = async () =>{
    var trarr = []
    const infos = await getInfo()
    console.log(infos)
    infos.forEach((u) => {
        //console.log(u)
        const tr = createtr(u)
        trarr.push(tr)      
    })
    tbody.append(...trarr)
}

function createtr(u){
    const tr = document.createElement('tr')

    const tdcmd= document.createElement('td')
    tdcmd.textContent = u.cmd

    const tdnombre= document.createElement('td')
    tdnombre.textContent = u.sender


    const tdapellido=document.createElement('td')
    tdapellido.textContent = u.data


    const tdopcion=document.createElement('td')
    tdopcion.textContent = u.opcion

    const tdeditar=document.createElement('td')
    const buttoneditar = document.createElement('button')
    buttoneditar.setAttribute("id", "btneditar")
    buttoneditar.textContent = 'editar'
    tdeditar.append(buttoneditar)

    const tdeliminar=document.createElement('td')
    const buttoneliminar = document.createElement('button')
    buttoneliminar.setAttribute("id", "btneliminar")
    buttoneliminar.textContent = 'eliminar'
    tdeditar.append(buttoneliminar)

    tr.append(tdcmd,tdnombre,tdapellido,tdopcion, tdeditar, tdeliminar)

    return tr
}

btnenviar.onclick = async (e) =>{
    e.preventDefault()
    const icmd=cmd.value
    const inombre=nombre.value
    const iapellido=apellido.value
    const iopcion =opcion.value
    console.log(icmd,inombre,iapellido,iopcion)


    const newInfo = await createInfo(icmd,inombre,iapellido,iopcion)
    const tr = createtr(newInfo)
    tbody.append(tr)
}


btneliminar.onclick = async (e) => {

}

btneditar.onclick = async (e) => {

}


