export default class Precio{
    /**
     * 
     * @param {number} valor 
     */
    constructor(valor){
        this._valor = valor;
    }
    getPrecio(){
        return (`${this._valor}`);
    }
}