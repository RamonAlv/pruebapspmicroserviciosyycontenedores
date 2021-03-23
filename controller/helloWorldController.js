const get = async(req, res) => {
    return res.json({
        ok: true,
        message: 'Hello world'
    });
}

module.exports = {
    get
}