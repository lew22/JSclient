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

async function createInfo(cmd,sender,data){
    // const newInfo = new Info(nombre,apellido,opcion)

    // infos.push(newInfo)
    // return newInfo
    //generamos los ID
    //console.log('UUID v1:', uuid.v1());
    //console.log('UUID v4:', uuid.v4());

    const res = await infofetch({
        path:'/create',
        method:'POST',
        body:{
            cmd,
            sender,
            data : [uuid.v1(),opcion]
        }
    })
    return await res.data
}
