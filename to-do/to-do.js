const fs = require('fs')

let listToDo = []

const saveDb = () => {
    let data = JSON.stringify(listToDo)
    return new Promise((resolve, reject) => {
        fs.writeFile('db/data.json', data, (err) => {
            if(err) reject(err)
            else resolve(`Guardado correctamente`)
        })
    })
}

const cargarDb = () => {
    try {
        listToDo = require('../db/data.json')
    } catch (error) {
        listToDo = []
    }
}

const getListado = () => {
    cargarDb()
    return listToDo;
}

const crear = (desc) => {
    cargarDb()
    let toDo = {
        desc,
        completado: false
    }
    listToDo.push(toDo)
    saveDb()
        .then(mesage => console.log(`${JSON.stringify(toDo)} ${mesage}`))
        .catch(e => console.log(e))
}

const actualizar = (desc, completado) => {
    cargarDb()
    let index = listToDo.findIndex(tarea => tarea.desc === desc)
    if(index >= 0){
        listToDo[index].completado = completado
        saveDb()
        return true
    }
    return false
}

const borrar = (desc) => {
    cargarDb()
    let arraAux = listToDo.filter(tarea => tarea.desc !== desc)
    if(arraAux.length === listToDo.length)
        return false
    listToDo = arraAux
    saveDb()
    return true
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}