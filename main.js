import Tiempo from "./tiempo.js";
import Fecha from "./fecha.js";
import ElementoPedido from "./elementoPedido.js";
import Cliente from "./cliente.js";
import Direccion from "./direccion.js";
import Precio from "./precio.js";
import Producto from "./producto.js";
import Pedido from "./pedido.js";
import Restaurante from "./restaurante.js";
import ClienteFrecuente from "./clienteFrecuente.js";

var clienteF = new ClienteFrecuente({
    nombre: "Josefa Ortíz Florencia",
    direccion: new Direccion("Losaje", "1653"),
    telefono: 3156498785,
    numeroCliente: 241,
    fechaRegistro: new Fecha(3, 5, 2017)
})

class Main{
    constructor(){
        this.restaurante = new Restaurante("Planetizza", 301569, new Direccion("Sevilla", 280, 6, "Colonia Procamación", 25489, "Colima", "Colima"));
    }

    clientesFrecuentes(){
        console.log(clienteF.getPerfil());
    }

    registrarPedidos(){        
        this.restaurante.registrarPedidos(pedido1);
        this.restaurante.registrarPedidos(pedido2);
        this.restaurante.registrarPedidos(pedido3);
        this.restaurante.listarPedidos();
    }

    registrarProductos(){
        
        this.restaurante.registrarProductos(producto1);
        this.restaurante.registrarProductos(producto2);
        this.restaurante.registrarProductos(producto3);
        this.restaurante.listrarProductos();
    }
}
var producto1 = new Producto("pizza Hawaiana",new Precio(75));
var producto2 = new Producto("Pizza de peperoni",new Precio(70));
var producto3 =new Producto("Pizza de queso",new Precio(50));

var elemento1 = new ElementoPedido(producto1,3);
var elemento2 = new ElementoPedido(producto2,2);
var elemento3 = new ElementoPedido(producto3,5);

var pedido1 = new Pedido(new Fecha(4,1,2020),new Tiempo(15,36),new Cliente("Pedro",new Direccion("venustiano Carranza",1265,0,"El porvenir",29845,"Colima","Colima"),3123156897));
var pedido2 = new Pedido(new Fecha(19,1,2020),new Tiempo(18,45),new Cliente("Juan",new Direccion("López Mateos",241,0,"Loma bonita",45812,"Colima","Colima"),312487595));
var pedido3 = new Pedido(new Fecha(11,2,2020),new Tiempo(16,11),new Cliente("David",new Direccion("Federico Rangel",879,0,"Las fuentes",48562,"Colima","Colima"),3124569878));

pedido1.agregarElemento(elemento1);
pedido2.agregarElemento(elemento2);
pedido3.agregarElemento(elemento3);
pedido1.getCostoTotal(elemento1);

var app = new Main();
/*app.registrarPedidos();
app.registrarProductos();*/
app.clientesFrecuentes();