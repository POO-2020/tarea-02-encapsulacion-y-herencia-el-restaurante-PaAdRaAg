import Tiempo from "./tiempo.js"
import Fecha from "./fecha.js"
import ElementoPedido from "./elementoPedido.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Precio from "./precio.js"
import Producto from "./producto.js"
import Pedido from "./pedido.js"

export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     * @param {Array} productos 
     * @param {Array} pedidos 
     */
constructor({nombre, 
    telefono, 
    direccion}){
    this._nombre = nombre;
    this._telefono = telefono;
    this._direccion = direccion;
    this._productos = new Array();
    this._pedidos = new Array();
}


registrarProductos(producto){
    this._productos.push(producto);
}

listrarProductos(){
    this._productos.forEach(producto=>{
        console.log(producto.getDescripcion());
    });
}

registrarPedidos(pedido){
    this._pedidos.push(pedido);
}

listarPedidos(){
    this._pedidos.forEach((pedido) =>{
        console.log(pedido.getResumen());
    });
}

registrarPedido(pedido){
        if (this.buscar() == undefined){
            this._pedidos.push(pedido);
            return true;
        }
        return false;  
}
buscarPedido(pedido){
    let resultado = this._pedidos.find(e => e.esIgualA(pedido));
    return resultado;
}

eliminar(pedido){
    let indice = this.buscarPedido(pedido);

    if(indice < 0){
        return false;
    }
    this._pedidos.splice(indice, 1);
    return true;
}

actualizarPedido(pedido, nuevoPedido){
    let indice = this.buscarPedido(pedido);

    if(indice < 0){
        return false;
    }
    this._pedidos.splice(indice, 1, nuevoPedido);
    return true;
}
}