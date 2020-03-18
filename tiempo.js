export default class Tiempo{
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     */
        constructor(hora, minutos){
            this._hora = hora;
            this._minutos = minutos;
            this._periodo = ["am","pm"];
        }
        getFormato12(){
            if (this._hora>=12 && this._hora<=23){
                if(this._hora==12){
                    return (`${this._hora}:${this._minutos} ${this._periodo[1]}`);
                }
                else{
                    var hora = this._hora-12;
                }
                
                return (`${hora}:${this._minutos} ${this._periodo[1]}`);
            }
            else if (this._hora==24){
    
                return (`00:${this._minutos} ${this._periodo[0]}`);
            }
            else{
                return (`${this._hora}:${this._minutos} ${this._periodo[0]}`);
        }
    }
        getFormato24(){
            if(this._periodo === "pm"||this._periodo === "PM"||this._periodo === "Pm"){this._hora = this._hora + 12}
            return(`${this._hora}:${this._minutos}`);
        }
    }