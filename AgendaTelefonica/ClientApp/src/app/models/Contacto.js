"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contacto = /** @class */ (function () {
    function Contacto(id, nombre, apellido, telefono, movil, email, direccion) {
        if (id === void 0) { id = 0; }
        if (nombre === void 0) { nombre = ""; }
        if (apellido === void 0) { apellido = ""; }
        if (telefono === void 0) { telefono = 0; }
        if (movil === void 0) { movil = 0; }
        if (email === void 0) { email = ""; }
        if (direccion === void 0) { direccion = ""; }
        this.id = -1;
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.movil = movil;
        this.email = email;
        this.direccion = direccion;
    }
    Contacto.prototype.inicializar = function () {
        return new Contacto(0, "", "", 0, 0, "", "");
    };
    return Contacto;
}());
exports.Contacto = Contacto;
//# sourceMappingURL=Contacto.js.map