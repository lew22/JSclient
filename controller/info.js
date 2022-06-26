const infos = [
    new Info('richard','garcia','A'),
    new Info('dsfafads','fadsfsd','B')
]

function getInfo(){
    return infos
}

function createInfo(nombre,apellido,opcion){
    const newInfo = new Info(nombre,apellido,opcion)

    infos.push(newInfo)
    return newInfo
}