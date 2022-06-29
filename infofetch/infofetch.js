
const urlServer = 'http://localhost:8000'

async function infofetch({path,method,body}){

    //la promesa se necesita usar await porque no se sabe cuando se respondera la solicitud
    // y tiene que ser asincrono la funcion
    
    try {
        const res = await fetch(urlServer + path ,{
            method,
            body: JSON.stringify(body),
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json"
            }
        })
    
        return await res.json()
    } catch (e) {
        console.log('e')
        alert("Oopss algo salio mal")
    }

}

