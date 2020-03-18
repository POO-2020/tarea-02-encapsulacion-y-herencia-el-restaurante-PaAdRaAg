export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterior 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterior, colonia, codigoPostal, ciudad, municipio){
        this._calle = calle;
        this._numeroExterior = numeroExterior;
        this._numeroInterior = numeroInterior;
        this._colonia = colonia;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }
    getFormatoCorto(){
        return (`Calle ${this._calle} #${this._numeroExterior}`)
    }

    getFormatoExtendido(){
        return (`Calle ${this._calle} Num.Ext.${this._numeroExterior} Num.Int.${this._numeroInterior}, colonia${this._colonia}. Cod.Post.${this._codigoPostal} ${this._ciudad} ${this._municipio}`)
    }
}