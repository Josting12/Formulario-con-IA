const validateLogin = (req, res, next) => {

    // Validar el cuerpo de la solicitud (POST)
    if (req.method === 'POST') {
        const {user, password} = req.body;

        // Validar que el nombre y el salario no estén vacíos
        if (!user || !password) {
            return res.status(400).json({ error: 'Dejo un campo vacio' });
        }
    }
    // Pasar al siguiente middleware o ruta
    next();

}

module.exports = validateLogin