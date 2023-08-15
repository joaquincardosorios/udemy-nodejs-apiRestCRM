const Usuarios = require('../models/Usuarios')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.registrarUsuario = async (req,res) => {
    // Leer los datos del usuario y colocarlos en usuario
    const usuario = new Usuarios(req.body)
    usuario.password = await bcrypt.hash(req.body.password, 12)
    try {
        await usuario.save()
        res.json({mensaje:'Usuario Creado Correctamente'})
    } catch (error) {
        console.log(error)
        res.json({mensaje: 'Hubo un error'})
    }

}

exports.autenticarUsuario = async (req,res,next) => {
    // buscar el usuario
    const { email, password } = req.body
    const usuario = await Usuarios.findOne({email})
    // Si usuario no existe
    if(!usuario){
        return await res.status(401).json({mensaje: 'Ese usuario no existe'})
    } 
    // Si usuario existe, se verifica password
    if (!bcrypt.compareSync(password, usuario.password)){
        return await res.status(401).json({mensaje: 'Password incorrecto'})
    }

    const token = jwt.sign({
        email: usuario.email,
        nombre: usuario.nombre,
        id: usuario._id
    },
    'paralelepipedo',
    {
        expiresIn: '10h'
    })

    res.json({token})
}