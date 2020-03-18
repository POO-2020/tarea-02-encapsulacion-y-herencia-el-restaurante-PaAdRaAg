import Cliente from "./cliente.js";
import Fecha from "./fecha.js";
import Direccion from "./direccion.js";

export default class ClienteFrecuente extends Cliente{
    /**
     * 
     * @param {string} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     * @param {number} numeroCliente 
     * @param {Fecha} fechaRegistro 
     */
    constructor({nombre, direccion, telefono, numeroCliente, fechaRegistro}){
        super({nombre, direccion, telefono})
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._numeroCliente = numeroCliente;
        this._fechaRegistro = fechaRegistro;
    }

    getPerfil(){
        return (`${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`)
    }

}