const data = require('../data/data');

exports.login = (req, res) => {
    try {
        const { email, password } = req.params;

        const user = data.users2.find(user => user.email === email && user.password === password);

        if (user) {
            console.log('Login exitoso, email de usuario:', email);
            res.status(200).send('Login exitoso');
        } else {
            console.log('Usuario o contraseña incorrectos');
            res.status(401).send('Usuario o contraseña incorrectos');
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Error')
    }
};

exports.register = (req, res) => {
    try {
        const users = data.users2;

        const { nombre, apellido, email, password, registroAcademico } = req.params;

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            console.log('El correo electrónico ya está registrado.');
            res.status(400).send('El correo electrónico ya está registrado.');
            return;
        }

        users.push({ nombre, apellido, email, password, registroAcademico });
        console.log('Usuario registrado');
        console.log(users)

        res.status(200).send('Usuario registrado');
    } catch (error) {
        console.log(error)
        res.status(400).send('Error')
    }
}

exports.resetPassword = (req, res) => {
    try {
        const { email, registroAcademico, newPassword } = req.params;

        const user = data.users2.find(user => user.email === email && user.registroAcademico === registroAcademico);

        if (user) {
            user.password = newPassword;
            console.log('Contraseña restablecida');
            res.status(200).send('Contraseña restablecida');
        } else {
            console.log('Correo electrónico o registro académico incorrectos.');
            res.status(400).send('Correo electrónico o registro académico incorrectos.');
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Error')
    }
}
