const valida_usuario = (req, res, next) => {

    // Validar el cuerpo de la solicitud (POST)
    if (req.method === 'POST') {
        const {user, name, password} = req.body;

        // Validar que el nombre y el salario no estén vacíos
        if (!user || !password || !name ) {
            return res.status(400).json({ error: 'Dejo un campo vacio' });
        }
    }

    // Pasar al siguiente middleware o ruta
    next();

}

module.exports = valida_usuario