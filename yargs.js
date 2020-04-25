const optsCrear = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    }
};
const optsActualizar = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de la tarea por hacer'
    },
    completado: {
        demand: true,
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }
};
const argv = require('yargs')
    .command('crear', 'Crea una tarea por hacer', optsCrear)
    .command('actualizar', 'Actualiza al estado completado una tarea', optsActualizar)
    .command('borrar', 'Borra una tarea', optsCrear)
    .help()
    .argv;


module.exports = {
    argv
}