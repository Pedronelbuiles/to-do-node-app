const colors = require('colors')
const argv = require('./config/yargs').argv
const toDo = require('./to-do/to-do')

const comando =argv._[0]

const desc = argv.descripcion ? argv.descripcion : argv.d
const completado = argv.completado ? argv.completado : argv.c

switch (comando) {
    case 'crear':
        toDo.crear(desc)
        break;
    case 'listar':
        let listado = toDo.getListado()
        for (let tarea of listado) {
            console.log("======= Por Hacer ========".green)
            console.log(`   ${tarea.desc}`)
            console.log('   Estado: ',tarea.completado)
            console.log("==========================".green)
        }
        break;
    case 'actualizar':
        toDo.actualizar(desc, completado) ?
            console.log("Actualizado correctamente")
            :
            console.log("No pudo ser actualizado")
        break;
    case 'borrar':
        toDo.borrar(desc) ? 
            console.log("Borrado correctamente")
            :
            console.log("No pudo ser borrado")
        break;
    default:
        console.log("Comando no reconocido")
        break;
}