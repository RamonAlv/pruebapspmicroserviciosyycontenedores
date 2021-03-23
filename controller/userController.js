const { User } = require('../models/index');

const create = async(req, res) => {

    let {
        name,
        lastName,
        email
    } = req.body

    await User.create({
        name,
        lastName,
        email
    }).then((result) => {
        return res.json({
            OK: true,
            result
        });
    }).catch((err) => {
        return res.json({
            OK: false,
            err
        });
    })
};

const getAll = async(req, res) => {
    let user = await User.findAll()

    if(user.length == 0){
        return res.status(400).json({
            OK:false,
            message: 'No hay usuarios'
        })
    }

    return res.json({
        OK:true,
        user
    })
};

const getId = async(req, res) => {
    let id = req.params.id;

    try {
        let user = await User.findByPk(id);

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: {
                    message: 'usuario no encontrado'
                }
            });
        }

        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
};

const update = async(req, res) => {
    try {
        let id = req.params.id;
        let {
            name,
            lastName,
            email
        } = req.body

        let body = {
            name,
            lastName,
            email
        }

        let user = await User.update(body, {
            where: {
                id: id
            },
        });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: {
                    message: 'user no encontrado'
                }
            });
        }

        return res.json({
            ok: true,
            user
        });

    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
};

const destroy = async(req, res) => {
    try {
        let id = req.params.id;
        let user = await User.destroy({
            where: {
                id: id
            }
        });

        if (!user) {
            return res.status(400).json({
                ok: false,
                message: {
                    message: 'user no encontrado'
                }
            });
        }

        return res.json({
            ok: true,
            user
        });
    } catch (error) {
        return res.status(500).json({
            ok: false,
            error
        });
    }
};

module.exports = {
    create,
    getAll,
    getId,
    update,
    destroy
}