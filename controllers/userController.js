const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
    User.getAllUsers((users) => {
        res.render('index', {
            users,
            role: req.session.role
         });
    });
};

exports.getUserById = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('edit', { user });
    });
};

// Exibir usuário antes de deletar
exports.getdeleteByUser = (req, res) => {
    const userId = req.params.id;
    User.getUserById(userId, (user) => {
        res.render('dell', { user });
    });
};

exports.addUser = (req, res) => {
    const newUser = {
        name: req.body.name,
        fone: req.body.fone,
        email: req.body.email,
        endereco: req.body.endereco
    };

    User.addUser(newUser, (result) => {
        res.redirect('/');
    });
};

exports.updateUser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = {
        name: req.body.name,
        fone: req.body.fone,
        email: req.body.email,
        endereco: req.body.endereco
    };

    User.updateUser(userId, updatedUser, () => {
        res.redirect('/');
    });
};

exports.deleteUser = (req, res) => {
    const userId = req.params.id;
    User.deleteUser(userId, () => {
        res.redirect('/');
    });
};
