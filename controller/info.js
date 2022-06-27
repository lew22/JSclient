// const infos = [
//     new Info('richard','garcia','A'),
//     new Info('dsfafads','fadsfsd','B')
// ]
// function getInfo(){
//     return infos
// }

async function getInfo(){
    const res = await infofetch({
        path:'/getinfo',
        method:'GET',
    })
    return await res.data
}

async function createInfo(nombre,apellido,opcion){
    // const newInfo = new Info(nombre,apellido,opcion)

    // infos.push(newInfo)
    // return newInfo

    const res = await infofetch({
        path:'/create',
        method:'POST',
        body:{
            nombre,
            apellido,
            opcion
        }
    })
    return await res.data
}
