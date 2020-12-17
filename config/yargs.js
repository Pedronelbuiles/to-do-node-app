const descripcion = {
    demand: true,
    alias: 'd'
}
const configCrear = {
    descripcion
}

const configActualizar = {
    descripcion,
    completado: {
        alias: 'c',
        default: true
    }
}
const argv = require('yargs').command('crear', 'Crea una tarea',configCrear)
                             .command('actualizar', 'Actualiza una tarea', configActualizar)
                             .command('borrar', ' Borrar una tarea', configCrear)
                             .help()
                             .argv

module.exports = {
    argv
}