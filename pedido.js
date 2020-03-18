import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elementoPedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

export default class Pedido {
    /**
     * 
     * @param {Fecha} fecha
     * @param {Tiempo} hora
     * @param {cliente} cliente 
     * @param {elementosPedidos} elementosPedidos
     */
    constructor({numeroPedido, 
        fecha,
        hora,
        cliente}){
            this._numeroPedido = numeroPedido;
            this._fecha = fecha;
            this._hora = hora;
            this._cliente = cliente;
            this._elementosPedidos = new Array();
    }
    
    getResumen(){
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} ${this.getNumeroElementos()} Elementos con ${this.getNumeroProductos()} productos. Total: ${this.getCostoTotal()}`;
    }

    getNumeroElementos(){
        return (this._elementosPedidos.length);
    }

    getNumeroProductos(){
        var nProductos = 0;
        this._elementosPedidos.forEach(elemento => {
            nProductos+=elemento.cantidad;
        });
        return nProductos;
    }

    getCostoTotal(){
        var total = 0;
        this._elementosPedidos.forEach(elemento => {
            total += elemento.cantidad * elemento._producto._precio._valor;
        });
        return new Precio(total).getPrecio();

    }

    agregarElemento(elemento){
        this._elementosPedidos.push(elemento)
    }
    
    listarElementos(){
        this._elementosPedidos.forEach(elemento=>{
            console.log(elemento.getDescripcion())
        });
    }
    
    getNumeroPedido(){
        return this._numeroPedido
        }
        
       _esIgual(pedido){
        if(pedido.getNumeroPedido() == this._numeroPedido){ return true}
        else {return false}
        }
}