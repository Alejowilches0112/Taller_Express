let users = [];
let ids = 1;
ModelUserController = {}

ModelUserController.getUser = function(req, res) {
    res.json(users)
}
ModelUserController.getIdUser = function(req, res) {
    let user = [];
    let id;
    if (req.params.id) {
        id = req.params.id;
        user = users.filter(d => d.id == id);
    }
    if (req.params.nombre) {
        id = req.params.nombre;
        console.log(id)
        user = users.filter(d => d.nombre == id);
    }
    if (req.params.edad) {
        id = req.params.edad;
        console.log(id)
        user = users.filter(d => d.edad < Number(id));
    }
    if (user.length > 0) {
        res.json(user);
    } else {
        res.send({ "codigo": "02", "detalle": "Usuario no encontrado" });
    }
}
ModelUserController.postUser = function(req, res) {
    var data = req.body;
    data.id = ids;
    ids = ids + 1;
    users.push(data);
    res.send({ "codigo": "01", "detalle": "Usuario guardado exitosamente", "id": data.id })
}
ModelUserController.putUser = function(req, res) {
    var data = req.body;
    let id = req.params.id
    let user = users.filter(d => d.id == id);
    if (user.length > 0) {
        users = users.filter(d => d.id != id);
        for (let key of Object.keys(data)) {
            user[0][key] = data[key];
        }
        users.push(user[0]);
        res.json({ "codigo": "01", "detalle": "Usuario actualizado Exitosamente" });
    } else {
        res.send({ "codigo": "02", "detalle": "El usuario no existe" });
    }
}
ModelUserController.deleteUser = function(req, res) {
    let id = req.params.id;
    users = users.filter(d => d.id != id);
    res.json(users)
}
module.exports.usercontroller = ModelUserController;