const valida_message= (req, res, next) => {

    // Validar el cuerpo de la solicitud (POST)
    if (req.method === 'POST') {
        const {message, message2} = req.body;

        // Validar que el nombre y el salario no estén vacíos
        if (!message || !message2  ) {
            return res.status(400).json({ error: 'Dejo un campo vacio' });
        }

    }

    // Pasar al siguiente middleware o ruta
    next();

}

module.exports = valida_message