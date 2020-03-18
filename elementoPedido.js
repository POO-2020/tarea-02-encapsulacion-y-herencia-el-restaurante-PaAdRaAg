import Producto from "./producto.js"
import Precio from "./precio.js"

export default class ElementoPedido{
    /**
     * 
     * @param {Producto} producto
     * @param {number} cantidad
     */
    constructor(producto, cantidad){
        this._producto = producto;
        this._cantidad = cantidad;
    }
    getDescripcion(){
        var costo = this._producto.precio.valor;
        var total = costo*this._cantidad;
        var descripcion = `${this._cantidad} x ${this._producto.nombre} $${total}`;
        return descripcion;
    }
}